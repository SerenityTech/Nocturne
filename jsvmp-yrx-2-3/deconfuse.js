/**
 * @Time : 2023/8/8 11:48
 * @Author : Serenity
 * @github : https://github.com/SerenityTech
 * @website : https://SerenityTech.github.io
 * @Email : Serenity-Tech@outlook.com
 * @File : dump.js
 * @Tips : unknown
 */
const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const template = require("@babel/template").default;
encodeFile = "./encode.js";
decodeFile = "./decode.js";
let sourceCode = fs.readFileSync(encodeFile, {encoding: "utf-8"});
let ast = parser.parse(sourceCode);

const IfToCase = {
    IfStatement: {
        exit(path, state) {  // 对state参数有疑问请看文档 https://alanhays.github.io/posts/35002.html#pathtraversestate
            const {test, consequent, alternate} = path.node;
            let {name, cases} = state;
            // 如果test不是 o < 数字，则不进行处理
            if (!(types.isBinaryExpression(test, {operator: "<"}))) return;
            if (!types.isIdentifier(test.left, {name: name})) return;
            if (!types.isNumericLiteral(test.right)) return;

            alternate.body.push(types.BreakStatement());
            consequent.body.push(types.BreakStatement());

            const right = test.right.value;

            if (right % 2 === 0) {
                //处理else不是if节点的情况
                if (types.isIfStatement(alternate.body[0])) return;
                cases.push(types.SwitchCase(types.valueToNode(right), alternate.body));
                return;
            }

            // 构建case节点
            const case1 = types.SwitchCase(types.valueToNode(right - 1), consequent.body);
            const case2 = types.SwitchCase(types.valueToNode(right), alternate.body);
            cases.push(case1, case2);
        }
    }
}


const IfToSwitch = {
    ForStatement(path) {
        const {init, test, update, body} = path.node;
        const prev = path.getPrevSibling();

        if (!types.isIfStatement(body)) return;

        const discriminant = prev.node.declarations[0].id;

        let cases = [];

        path.traverse(IfToCase, {name: discriminant.name, cases: cases});

        if (!cases.length) return;

        const switchNode = types.SwitchStatement(discriminant, cases);

        path.get('body').replaceInline(switchNode);
    }
};

const RestoreJump = {
    AssignmentExpression(path) {
        let {operator, left, right} = path.node;

        if (!(operator[1] == "=" &&
            types.isNumericLiteral(right))) return;

        let caseNode = path.findParent((p) => p.isSwitchCase());

        let {consequent, test} = caseNode.node;
        // 构建 ast 节点  o -= xxx  改为 o - xxx ,

        let _node = types.AssignmentExpression("=", left, types.valueToNode(
            operator[0] == "-" ? test.value - right.value : test.value + right.value
        ))

        path.replaceInline(_node)
    }
}

let stack = [];

function getBody(cases, index, stack, body, name) {

    stack.push(index)
    let {consequent} = cases[index];
    let node = consequent[consequent.length - 2];
    if (!body) {
        body = body.concat(consequent)
    }
    if (!getJumpIndex(node, name) == undefined)
        return body;

    if (types.isIfStatement(node)) {
        let {test, consequent, alternate} = node;
        return body
    }

    if (types.isExpressionStatement(node)) {
        index = node.expression.right.value;
        body = body.concat(consequent.slice(0, -2))
        return getBody(cases, index, stack, body, name)
    }
    // console.log(generator(types.BlockStatement(body)).code)
    return body
}

function getJump(node, name) {
    if (!types.isExpressionStatement(node)) return;
    let {expression} = node;
    if (!types.isAssignmentExpression(expression)) return;
    if (expression.left.name != name) return;
    return expression.right.value;
}

function getJumpIndex(node, name) {
    if (!types.isIfStatement(node)) return getJump(node, name);
    let {consequent, alternate} = node;
    if (getJump(consequent, name) == undefined || getJump(alternate, name) == undefined) return;
    return -1;
}

const BlockSyntax = {
    "ForStatement|WhileStatement|ForInStatement|ForOfStatement"({node}) {
        if (!types.isBlockStatement(node.body)) {
            node.body = types.BlockStatement([node.body]);
        }
    },
    IfStatement(path) {
        let nodes = ["consequent", "alternate"];
        for (let i = 0; i < nodes.length; i++) {
            let _path = path.get(nodes[i]);
            if (_path.node && !_path.isBlockStatement()) {
                _path.replaceInline(types.BlockStatement([_path.node]))
            }
        }
    }
}

function getNextValue(node) {
    let {expression} = node[node.length - 1];
    if (!types.isAssignmentExpression(expression)) return -1;
    return expression.right.value;
}

const MergeCasesAll = {
    ForStatement(path) {
        let {init, test, update, body} = path.node;
        const prev = path.getPrevSibling();
        if (!types.isSwitchStatement(body)) return;
        let {declarations} = prev.node;
        const test_name = declarations[0].id.name;
        const start = declarations[0].init.right.value;
        path.traverse({
            SwitchStatement(_path) {
                let {discriminant} = _path.node;
                if (test_name != discriminant.name) return;
                _path.traverse({
                    SwitchCase(__path) {
                        let {test} = __path.node;
                        if (test.value != start) return;
                        __path.traverse(MergeCasesIf)
                    }
                })
            }
        })
        path.get('body').replaceInline(types.BlockStatement(body.cases[start].consequent))
    }
}

const MergeJump = {
    SwitchCase(path) {
        let {cases, discriminant} = path.parent;
        let {test, consequent} = path.node;
        let {expression} = consequent[consequent.length - 2];

        if (!types.isAssignmentExpression(expression)) return;

        if (expression.left.name != discriminant.name) return;

        let next = expression.right.value;

        consequent.pop()
        consequent.pop()

        consequent = consequent.concat(cases[next].consequent)
        let caseNode = types.SwitchCase(test, consequent)
        path.replaceInline(caseNode)
    }
}

const MergeDeadCycle = {
    SwitchCase(path) {
        let {discriminant} = path.parent;
        let {test, consequent} = path.node;
        let index = consequent.length - 2;
        let node = consequent[index];
        let next = getJumpIndex(node, discriminant.name);
        if (next == undefined) return;
        if (next != -1) return;
        let {alternate} = node;
        let n1 = getJump(node.consequent, discriminant.name)
        if (n1 != test.value) return;
        n1 = consequent.pop()
        consequent = consequent.slice(0, consequent.length - 1)
        node = types.whileStatement(node.test, types.BlockStatement(consequent))
        path.replaceInline(types.SwitchCase(test, [node, alternate, n1]))
    }
}

const TernaryToSwitch = {
    ConditionalExpression(path, {cases, _name}) {
        let {test, consequent, alternate} = path.node;
        if (!types.isBinaryExpression(test, {operator: "=="})) return;
        let {right, left} = test;
        if (!types.isIdentifier(right) || !types.isNumericLiteral(left)) return;
        if (!cases[right.name]) {
            cases[right.name] = [];
        }
        let body = [types.ExpressionStatement(types.AssignmentExpression("=", types.Identifier(_name), consequent))]
        body.push(types.BreakStatement());
        cases[right.name].push(types.SwitchCase(test.left, body));
    }
}

const TernaryReturn = {
    ReturnStatement(path) {
        let {argument} = path.node;
        if (!types.isConditionalExpression(argument)) return;
        if (!types.isBinaryExpression(argument.test, {operator: "=="})) return;
        let cases = {};
        let name = argument.test.right.name;
        if (!name) return;
        let _name = `${name}${path.node.start}`
        path.traverse(TernaryToSwitch, {cases: cases, _name: _name})
        path.insertBefore(types.VariableDeclaration("var", [types.VariableDeclarator(types.Identifier(_name), null)]))
        path.replaceInline(types.SwitchStatement(types.Identifier(name), cases[name]))
        path.insertAfter(types.ReturnStatement(types.Identifier(_name)))
    }
}

function isJumpCase(node, name) {
    if (!types.isSwitchCase(node)) return;
    let {consequent} = node;
    let _node = consequent[consequent.length - 2];
    if (types.isIfStatement(_node) || getJump(_node, name) !== undefined) return;
    return consequent.slice(0, consequent.length - 1)
}

const MergeIfCases = {
    SwitchCase(path) {
        let {test, consequent} = path.node;
        let index = consequent.length - 2;
        let node = consequent[index];
        let {discriminant, cases} = path.parent;
        let next = getJumpIndex(node, discriminant.name);
        if (next != -1) return;
        let _consequent = node.consequent;
        let _test = node.test;
        let {alternate} = node;
        let n1 = getJump(_consequent, discriminant.name)
        let n2 = getJump(alternate, discriminant.name)
        n1 = isJumpCase(cases[n1], discriminant.name)
        n2 = isJumpCase(cases[n2], discriminant.name)
        if (n1 == undefined || n2 == undefined) return;
        consequent[index] = types.IfStatement(_test, types.BlockStatement(n1), types.BlockStatement(n2))
        path.replaceInline(types.SwitchCase(test, consequent))
    }
}

const IfTest = {
    IfStatement(path) {
        let {test, consequent, alternate} = path.node;
        if (!types.isSequenceExpression(test)) return;
        let {expressions} = test;
        let len = expressions.length;
        for (let i = 0; i < len - 1; i++) {
            let item = expressions[i];
            path.insertBefore(item)
        }
        path.get("test").replaceInline(expressions[len - 1])
    }
}

function SequenceOfStatement(path) {
	let { scope, parentPath, node } = path;
	let ancestorPath = parentPath.parentPath;
	if (ancestorPath.isLabeledStatement())
	{//标签节点无法往前插入。
		return;
	}
	let expressions = node.expressions;
	if (parentPath.isReturnStatement({ "argument": node })) {
		parentPath.node.argument = expressions.pop();
	}
	else if (parentPath.isThrowStatement({ "argument": node })) {
		parentPath.node.argument = expressions.pop();
	}
	else if (parentPath.isIfStatement({ "test": node }) ||
		parentPath.isWhileStatement({ "test": node })) {
		parentPath.node.test = expressions.pop();
	}
	else if (parentPath.isForStatement({ "init": node })) {
		parentPath.node.init = expressions.pop();
	}
	else if (parentPath.isForInStatement({ "right": node })) {
		parentPath.node.right = expressions.pop();
	}
	else if (parentPath.isSwitchStatement({ "discriminant": node })) {
		parentPath.node.discriminant = expressions.pop();
	}
	else if (parentPath.isCallExpression({ "callee": node })) {
		parentPath.node.callee = expressions.pop();
	}
	else if (parentPath.isExpressionStatement({ "expression": node })) {
		parentPath.node.expression = expressions.pop();
	}
	else {
		return;
	}

	for (let expression of expressions) {
		parentPath.insertBefore(types.ExpressionStatement(expression = expression));
	}
}


function SequenceOfExpression(path) {

	let { scope, parentPath, node, parent } = path;
	let ancestorPath = parentPath.parentPath;
	let expressions = node.expressions;
	if (parentPath.isConditionalExpression({ "test": node }) &&
		ancestorPath.isExpressionStatement({ "expression": parent })) {
		parentPath.node.test = expressions.pop();
	}
	else if (parentPath.isVariableDeclarator({ "init": node }) &&
		ancestorPath.parentPath.isBlock()) {
		parentPath.node.init = expressions.pop();
	}
	else if (parentPath.isAssignmentExpression({ "right": node }) &&
		ancestorPath.isExpressionStatement({ "expression": parent })) {
		parentPath.node.right = expressions.pop();
	}
	else if (parentPath.isUnaryExpression({ "argument": node }) &&
		ancestorPath.isExpressionStatement({ "expression": parent })) {
		parentPath.node.argument = expressions.pop();
	}
	else {
		return;
	}

	for (let expression of expressions) {
		ancestorPath.insertBefore(types.ExpressionStatement(expression = expression));
	}
}

const resolveSequence =
{
	SequenceExpression:
	{//对同一节点遍历多个方法
		exit: [SequenceOfStatement, SequenceOfExpression]
	}
}

//调用插件，处理源代码
traverse(ast, IfToSwitch)
traverse(ast, RestoreJump);
// 控制流合并
traverse(ast, MergeJump);
traverse(ast, MergeDeadCycle);
traverse(ast, MergeJump);
traverse(ast, TernaryReturn);
traverse(ast,resolveSequence);
traverse(ast, IfTest);
traverse(ast, BlockSyntax);

//生成新的js code，并保存到文件中输出
let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});

fs.writeFile(decodeFile, code, (err) => {
});