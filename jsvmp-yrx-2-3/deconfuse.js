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
    exit(path, state) {
      const { test, consequent, alternate } = path.node;
      let { name, cases } = state;
      // 如果 test 不是 o < 数字，则不进行处理
      if (!types.isBinaryExpression(test, { operator: "<" })) return;
      if (!types.isIdentifier(test.left, { name: name })) return;
      if (!types.isNumericLiteral(test.right)) return;

      // alternate.body.push(types.BreakStatement());
      // consequent.body.push(types.BreakStatement());

      const right = test.right.value;

      if (right % 2 === 0) {
        // 处理 else 不是 if 节点的情况
        if (types.isIfStatement(alternate.body[0])) return;
        cases.push(types.SwitchCase(types.valueToNode(right), alternate.body));
        return;
      }

      // 构建 case 节点
      const case1 = types.SwitchCase(
        types.valueToNode(right - 1),
        consequent.body
      );
      const case2 = types.SwitchCase(types.valueToNode(right), alternate.body);
      cases.push(case1, case2);
    },
  },
};

const IfToSwitch = {
  ForStatement(path) {
    const { init, test, update, body } = path.node;
    const prev = path.getPrevSibling();

    if (!types.isIfStatement(body)) return;

    const discriminant = prev.node.declarations[0].id;

    let cases = [];

    path.traverse(IfToCase, { name: discriminant.name, cases: cases });

    if (!cases.length) return;

    const switchNode = types.SwitchStatement(discriminant, cases);

    path.get("body").replaceInline(switchNode);
  },
};


const RestoreJump = {
  AssignmentExpression(path) {
    let { operator, left, right } = path.node;

    if (!(operator[1] === "=" && types.isNumericLiteral(right))) return;

    let caseNode = path.findParent((p) => p.isSwitchCase());

    let { consequent, test } = caseNode.node;
    // 构建 ast 节点  o -= xxx  改为 o - xxx ,

    let _node = types.assignmentExpression(
      "=",
      left,
      types.valueToNode(
        operator[0] === "-"
          ? test.value - right.value
          : test.value + right.value
      )
    );
    path.replaceInline(_node);
  },
};


function getJump(node, name) {
  if (!types.isExpressionStatement(node)) return;
  let { expression } = node;
  if (!types.isAssignmentExpression(expression)) return;
  if (expression.left.name !== name) return;
  return expression.right.value;
}

function getCaseJump(map, name, node) {
  let { test, consequent } = node;
  let list = [];
  let con = consequent[consequent.length - 1];
  let num = getJump(con, name);
  if (num !== undefined) {
    list.push(num);
  }
  if (types.isIfStatement(con)) {
    let { consequent, alternate } = con;
    let num = getJump(consequent, name);
    if (num !== undefined) {
      list.push(num);
    }
    num = getJump(alternate, name);
    if (num !== undefined) {
      list.push(num);
    }
  }
  map[test.value] = list;
}

function removeDuplicates(arr1, arr2) {
  let result = []; // 存储删除的元素的数组

  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]); // 将相同的元素存储到结果数组中
        arr2.splice(j, 1); // 删除arr2中的相同元素
        found = true;
        break;
      }
    }
    if (found) {
      arr1.splice(i, 1); // 删除arr1中的相同元素
      i--; // 由于删除了元素，需要调整索引
    }
  }
  return result;
}
// 统一还原控制流
function controlFlowStructure(si, map, cases, stack = [], body = []) {
  if (!map.loop) map.loop = [];
  if (stack.includes(si)) {
    if (map.loop.indexOf(si) === -1) map.loop.push(si);
    return body;
  }
  let item = map[si];
  body = body.concat(cases[si].consequent);
  switch (item.length) {
    case 0:
      return body;
    case 1:
      return controlFlowStructure(item[0], map, cases, stack, body);
    case 2:
      stack.push(si);
      body[body.length - 1].consequent = types.blockStatement(
        controlFlowStructure(item[0], map, cases, stack, [])
      );
      if (map.loop.includes(si)) {
        let { test, consequent } = body[body.length - 1];
        body[body.length - 1] = types.whileStatement(test, consequent);
        body = body.concat(
          controlFlowStructure(item[1], map, cases, stack, [])
        );
      } else {
        body[body.length - 1].alternate = types.blockStatement(
          controlFlowStructure(item[1], map, cases, stack, [])
        );
        body = body.concat(
          removeDuplicates(
            body[body.length - 1].consequent.body,
            body[body.length - 1].alternate.body
          )
        );
      }
      stack.pop();
      return body;
  }
}

const MergeCases = {
  SwitchStatement(path) {
    const { discriminant, cases } = path.node;
    const name = discriminant.name;
    let binding = path.scope.getBinding(name);
    let start = binding.path.node.init.right.value;
    let map = {};
    for (let i = 0; i < cases.length; i++) {
      getCaseJump(map, name, cases[i]);
    }
    path.replaceInline(controlFlowStructure(start, map, cases));
  },
};


const CleaningUpGarbage = {
  ForStatement(path) {
    let p = path.getPrevSibling();
    let name = p.node.declarations[0].id.name;
    path.scope.traverse(path.scope.block, {
      AssignmentExpression(_path) {
        if (!types.isIdentifier(_path.node.left, { name: name })) return;
        _path.remove();
      },
    });
  },
};

function isEndNode(nodes) {
  let typeList = ["ReturnStatement", "ThrowStatement"];
  for (let i = 0; i < nodes.length; i++) {
    if (typeList.includes(nodes[i].type)) {
      return true;
    }
  }
  return false;
}

const ifOptimization = {
  IfStatement(path) {
    let { test, consequent, alternate } = path.node;
    if (!alternate) return;
    if (isEndNode(consequent.body)) {
      path.insertAfter(alternate.body);
      path.node.alternate = null;
    } else if (isEndNode(alternate.body)) {
      path.insertAfter(consequent.body);
      path.replaceInline(
        types.ifStatement(types.unaryExpression("!", test), alternate, null)
      );
    } else if (
      types.isIfStatement(consequent.body[consequent.body.length - 1]) &&
      isEndNode(consequent.body[consequent.body.length - 1].consequent.body)
    ) {
      if (
        generator(alternate.body[0]).code ===
        generator(consequent.body[consequent.body.length - 1].alternate.body[0])
          .code
      ) {
        path.insertAfter(
          consequent.body[consequent.body.length - 1].alternate.body
        );
        consequent.body[consequent.body.length - 1].alternate = null;
        path.node.alternate = null;
      }
    }
  },
};

const TernaryToSwitch = {
  ConditionalExpression(path, { cases, _name }) {
    let { test, consequent, alternate } = path.node;
    if (!types.isBinaryExpression(test, { operator: "==" })) return;
    let { right, left } = test;
    if (!types.isIdentifier(right) || !types.isNumericLiteral(left)) return;
    if (!cases[right.name]) {
      cases[right.name] = [];
    }
    let body = [
      types.expressionStatement(
        types.assignmentExpression("=", types.identifier(_name), consequent)
      ),
    ];
    body.push(types.breakStatement());
    cases[right.name].push(types.switchCase(test.left, body));
  },
};
const TernaryReturn = {
  ReturnStatement(path) {
    let { argument } = path.node;
    if (!types.isConditionalExpression(argument)) return;
    if (!types.isBinaryExpression(argument.test, { operator: "==" })) return;
    let cases = {};
    let name = argument.test.right.name;
    if (!name) return;
    let _name = `${name}${path.node.start}`;
    path.traverse(TernaryToSwitch, { cases: cases, _name: _name });
    path.insertBefore(
      types.variableDeclaration("var", [
        types.variableDeclarator(types.identifier(_name), null),
      ])
    );
    path.replaceInline(
      types.switchStatement(types.identifier(name), cases[name])
    );
    path.insertAfter(types.returnStatement(types.identifier(_name)));
  },
};

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

traverse(ast, IfToSwitch)
traverse(ast, RestoreJump);
traverse(ast, MergeCases);
traverse(ast, CleaningUpGarbage);
traverse(ast, ifOptimization);
traverse(ast, TernaryReturn);
traverse(ast, resolveSequence);


let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});

fs.writeFile(decodeFile, code, (err) => {
});