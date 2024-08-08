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
const types = require('@babel/types');
const generator = require("@babel/generator").default;
let file_path = `${__dirname}\\bytecode.json`
let bytecode = JSON.parse(fs.readFileSync(file_path, { encoding: "utf-8" }));
let option = {
  body: [],
  params: [],
  stack: [],
};

function MemberExpression(x, y) {
  if (types.isNode(x)) {
    if (types.isIdentifier(x, { name: "global" })) {
      return types.Identifier(y.value)
    }
    let t = true;
    if (types.isStringLiteral(y) && y.value != "*" && y.value != " ") {
      t = false;
      y = types.identifier(y.value)
    }
    return types.MemberExpression(x, y, t)
  }
  if (types.isIdentifier(y)) return y;
  return types.Identifier(y.value);
}

function readValue(n) {
  if (types.isNumericLiteral(n) || types.isStringLiteral(n)) {
    return n.value
  }
  return n.name
}

function ExpressionStatement(node) {
  if (["TryStatement", "ReturnStatement", "ForStatement", "IfStatement", "FunctionDeclaration"].indexOf(node.type) === -1) {
    return types.ExpressionStatement(node)
  }
  return node
}



Navigation = function () { };
Navigation.toString = function () {
  return 'function Navigation() { [native code] }';
};
(function (e) {
  var l = function (i) {
    var l = e || 0;
    while (1) {
      return;
    }
  };
  (function i(option, l, s, f, n, t, r, a, u) {
    generator;
    var o = e || 139;
    while (1) {
      var p, v, g, m, d, y, w, F, b, C, j, x, E, R, S, k, q, z, A, B, D, G, H, I, J, K, L, M, N, O, P, Q, T, U, V, W, X, Y, Z, $, _, ee, ie, le, se, fe, ne, te, re, ae, ue, oe, ce, he, pe, ve, ge, me, de, ye, we, Fe, be, Ce, je, xe, Ee, Re, Se;
      if (!(this.constructor != i)) {
        return;
      }
      if (n) { } else {
        (n = [types.identifier("global")]).n = n[0];
        n.t = [];
        (v = {}).s = !1;
        v.v = !1;
        n.t.push(v);
        i.r = i.g = i;
      }
      g = n[n.length - 1];
      if (-3 == f || -2 == f) {
        if (-2 == f) {
          r = 0;
          a = 0;
          while (l[s] > 127) {
            a += l[s++] - 128 << 7 * r++;
          }
          a += l[s++] << 7 * r;
        } else {
          a = (s = (m = i(option, l, s, -2)).i) + (r = m.n) - 1;
          s += r;
        }
        return {
          n: a,
          i: s
        };
      }
      if (t === i) {
        y = new i.g();
        w = [].slice.call(u);
        F = 0;
        while (F < r.length) {
          y[r[F].value] = w[F];
          option.params.push(types.Identifier(r[F].value))
          F++;
        }
        y.arguments = u;
        (b = [].concat(n).concat(y)).n = a;
        b.t = [];
        return i(option, l, s, f, b);
      }
      C = s || 0;
      p = f || l.length;

      j = l[C++];
      // console.log("指针", C - 1, "指令", j)
      // if (C - 1 == 4969) {
      //   debugger
      // }
      if ([13, 48, 31, 4, 23, 116, 91, 85, 59, 55, 65, 56, 6, 125, 94, 21, 72, 46, 86, 49, 76, 95, 93, 120, 84, 3, 30,
        58, 102, 60, 16, 92, 111, 26, 38, 52, 73, 35, 57, 126, 1, 96, 119, 87, 32, 109, 103, 106, 43, 77, 29, 113, 101, 75,
        74, 24, 105, 80, 8, 63, 118, 112, 36, 15, 68, 2, 110, 19, 10, 64, 37, 45, 79, 99, 117, 7, 33, 100, 0, 78, 104, 81, 62, 69, 97, 121, 61].indexOf(j) === -1) {
        console.log("未反编译指令", j)
        debugger
      }
      m = i(option, l, C, -2);
      C = m.i;
      m.n;
      x = 0;
      if (13 == j || 48 == j) {
        x = 1;
      } else {
        if (49 == j) {
          x = 2;
        } else {
          if (23 == j) {
            x = 3;
          }
        }
      }
      if (13 == j || 48 == j || 49 == j || 23 == j) {
        v = n.t && n.t[n.t.length - 1];
        E = [];
        while (C < p) {
          R = C++;
          m = i(option, l, C, -3);
          C = m.i;
          S = m.n;
          let E_node = i(option, l, R, S, n);
          if (E_node == undefined) {
            // debugger
            E_node == types.identifier("undefined")
            // debugger
          }
          E.push(E_node);
          if (3 != x && n.a) {
            return E[E.length - 1];
          }
          if (2 == x && v && (v.v || v.s)) {
            return E[E.length - 1];
          }
        }
        if (2 != x) {
          // return E;
          // console.log(E)
          return E
        }
      }
      if (31 == j || 55 == j) {
        n.m = !0;
        k = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
        q = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
        n.m = !1;
        z = C++;
        m = i(option, l, C, -3);
        C = m.i;
        A = m.n;
        let _option = {
          body: [],
          params: [],
          stack: []
        }
        B = (function () {
          var s = e || 0;
          while (1) {
            return i(_option, l, z, A, n, i, q, types.thisExpression(), types.identifier("arguments"));
          }
        })();
        // console.log(B)
        // try {
        if (!types.isIdentifier(B, { name: "undefined" })) {
          _option.body.push(types.ReturnStatement(B))
        }
        // } catch (error) {
        //   debugger
        // }
          B = types.FunctionExpression(types.Identifier(k.value), _option.params, types.BlockStatement(_option.body));
        if (k.value) {
          g[k.value] = B;
          option.body.push(types.ExpressionStatement(types.AssignmentExpression("=", types.Identifier(k.value), B)))
        }
        return B;
      }
      if (76 == j || 56 == j) { // 疑似76 -> if | 56 -> 三元
        // return i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n) ? i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n) : (m = i(option, l, ++C, -3), C = m.i, m.n, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));
        if (76 == j) {
          let HT_test = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)
          let _C = Number(C) // 深拷贝

          // 保存状态
          option.stack.push(option.body)
          option.body = [];
          let HT_true = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);

          if (n.a) {
            HT_true = types.ReturnStatement(HT_true);
            option.body.push(ExpressionStatement(HT_true))
          }

          n.a = false;
          HT_true = option.body;
          option.body = [];
          C = _C;
          let HT_false = (m = i(option, l, ++C, -3), C = m.i, m.n, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));

          if (n.a) {
            HT_false = types.ReturnStatement(HT_false);
            option.body.push(HT_false)
          }
          HT_false = option.body;
          true_block = types.BlockStatement(HT_true)
          false_block = HT_false.length ? types.BlockStatement(HT_false) : null;
          option.body = option.stack.pop();
          if_node = types.IfStatement(HT_test, true_block, false_block)
          option.body.push(if_node)
          return types.identifier("undefined");
        } else {
          let HT_test = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)
          let _C = Number(C) // 深拷贝
          let HT_true = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)
          HT_true = types.isNode(HT_true) ? HT_true : types.valueToNode(HT_true)
          C = _C;
          let HT_false = (m = i(option, l, ++C, -3), C = m.i, m.n, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));
          HT_false = types.isNode(HT_false) ? HT_false : types.valueToNode(HT_false)
          if_node = types.ConditionalExpression(HT_test, HT_true, HT_false)
          return if_node
        }
      }
      if (!(29 != j)) {
        var ke;
        var qe = [];
        var c = 0;
        var h = 0;
        (v = {}).s = !1;
        v.v = !1;
        n.t.push(v);
        v = n.t && n.t[n.t.length - 1];
        if (1 == (D = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)).value) {
          n.e = !0;
          G = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)[0];
          n.e = !1;
        }
        if (0 == D.value) {
          G = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, !0);
        }
        H = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
        I = C++;
        m = i(option, l, C, -3);
        C = m.i;
        J = m.n;

        let for_in = {
          body: [],
          params: [],
          stack: []
        }
        // 保存状态
        // option.stack.push(option.body)
        // option.body = [];
        let for_in_test = types.identifier(G[1].value)
        // // for in 语句
        for (ke in H) {
          qe[c++] = ke;
        }
        while (h < c) {
          F = qe[h];
          if (29 == j) {
            G[0][G[1]] = F;
          }
          K = I || 0;
          L = J || l.length;
          K++;
          while (l[K] > 127) {
            K++;
          }
          K++;
          while (K < L) {
            R = K++;
            M = 0;
            N = 0;
            while (l[K] > 127) {
              N += l[K++] - 128 << 7 * M++;
            }
            d = N + (l[K++] << 7 * M);
            S = K + d - 1;
            K += d;
            E = i(for_in, l, R, S, n);
            // console.log(E)
            // if (types.isNode(E)) {
            //   option.body.push(ExpressionStatement(E))
            // }

            let FOR_IN = types.ForInStatement(for_in_test, H, types.BlockStatement(for_in.body))
            option.body.push(FOR_IN)
            // option.body = option.stack.pop();


            if (n.a) {
              return E;
            }
            if (v.v || v.s) {
              break;
            }
          }
          if (v.v) {
            v.v = !1;
          } else {
            if (v.s) {
              break;
            }
          }
          return
          h++;
        }

        // let FOR_IN = types.ForInStatement(types.identifier(G[1].value), H, types.BlockStatement(for_in.body))
        // option.body.push(FOR_IN)

        n.t.pop();
        return;
      }
      if (73 != j && 112 != j && 106 != j) {
        if (84 == j) {
          Z = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
          w = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
          if (i.bind) {
            // return new (i.bind.apply(Z, [null].concat(w)))();
              return types.NewExpression(Z, w)
          }
          $ = [];
          F = 0;
          while (F < w.length) {
            $[F] = "a[" + F + "]";
            F++;
          }
          debugger
          return i.constructor("F,a", "return new F(" + $.join(",") + ")")(Z, w);
        }
        if (109 != j) {
          if (32 != j) {
            if (105 == j) {
              // throw i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
              option.body.push(types.ThrowStatement(i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)))

            } else { }
            if (35 == j) {
              ue = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
              // E = {};
              let obj_keys = [];
              E = types.ObjectExpression(obj_keys)
              F = 0;
              while (F < ue.length) {
                ce = (oe = ue[F])[0];
                he = oe[1];
                pe = oe[2];
                if (42 == ce.value) {
                  // E[he] = pe;
                  let key = he.property
                  if (!types.isMemberExpression(he)) {
                    key = he
                  }
                    E.properties.push(types.ObjectProperty(key, pe))
                }
                F++;
              }
              return E;
            }
            if (4 == j || 65 == j) {
              ve = l[C++];
              m = i(option, l, C, -2);
              C = m.i;
              ge = m.n;
              me = [];
              F = 0;
              while (F < ge) {
                m = i(option, l, C, -2);
                C = m.i;
                de = m.n;
                if (de == undefined) {
                  debugger
                }
                me.push(de);
                F++;
              }
              ye = String.fromCharCode.apply(null, me);
              ye = types.valueToNode(ye)
              // return 65 == j || n.m ? ye : t ? [n[ve], ye] : n[ve][ye.value];
              if (ye == undefined) {
                debugger
              }
              if (65 == j || n.m) {
                return ye
              }
              if (t) {
                return [n[ve], ye]
              } else {
                // return types.MemberExpression(n[ve], ye, true)
                return MemberExpression(n[ve], ye)
              }
            }
            var j8739;
            switch (j) {
              case 118:
                // j8739 = r << a;
                j8739 = types.BinaryExpression("<<", r, a);
                break;
              case 16:
                // j8739 = r == a;
                j8739 = types.BinaryExpression("==", r, a);
                break;
              case 103:
                // j8739 = null;
                j8739 = types.NullLiteral();
                break;
              case 6:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, 0, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n), i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));
                break;
              case 94:
                // j8739 = r != a;
                j8739 = types.BinaryExpression("!=", r, a);
                break;
              case 80:
                // j8739 = ~i(option,l, r, a, n);
                j8739 = types.UnaryExpression("~", i(option, l, r, a, n));
                break;
              case 2:
                // j8739 = r <= a;
                j8739 = types.BinaryExpression("<=", r, a);
                break;
              case 59:
                we = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, !0);
                Fe = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                // j8739 = we instanceof i.constructor ? i.apply.call(we, n[0].n, Fe) : (be = we[0][we[1]], we[0] instanceof i.g ? i.apply.call(be, n.n, Fe) : i.apply.call(be, we[0], Fe));
                // 函数调用
                if (!Array.isArray(we)) {
                  // j8739 = i.apply.call(we, n[0].n, Fe)
                    if (types.isIdentifier(we)) {
                      j8739 = types.CallExpression(we.id, Fe)
                    } else {
                      j8739 = types.CallExpression(we, Fe)
                    }

                } else {
                  let args = [];
                  // be = we[0][we[1]]
                  be = MemberExpression(we[0], we[1])
                  // j8739 = i.apply.call(be, n.n, Fe)
                  // j8739 = i.apply.call(be, we[0], Fe)
                  // args = Fe.flat()

                  for (let index = 0; index < Fe.length; index++) {
                    const element = Fe[index];
                    if (!types.isNode(element)) {
                      Fe[index] = types.valueToNode(element)
                    }
                  }
                  j8739 = types.CallExpression(be, Fe)
                }
                break;
              case 52:
                // j8739 = r !== a;
                if (r == undefined) {
                  r = types.Identifier("undefined")
                }
                j8739 = types.BinaryExpression("!==", r, a);
                break;
              case 68:
                // j8739 = r / a;
                j8739 = types.BinaryExpression("/", r, a);
                break;
              case 75:
                // j8739 = r ? --a[0][a[1]] : a[0][a[1]]--;
                j8739 = types.UpdateExpression("--", MemberExpression(a[0], a[1]), Boolean(r));
                break;
              case 46:
                61 == (ce = l[C++]) && (Ce = l[C++]);
                53 == ce && (m = i(option, l, C, -2), C = m.i, Ce = m.n);
                // 70 == ce && (Ce = parseFloat(i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)));
                70 == ce && (Ce = parseFloat(readValue(i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n))));
                Ce = types.valueToNode(Ce)
                j8739 = Ce;
                break;
              case 69:
                // j8739 = r[0][r[1]] /= a;
                j8739 = types.AssignmentExpression("/=", MemberExpression(r[0], r[1]), a);
                break;
              case 85:
                // j8739 = !i(option,l, r, a, n);
                j8739 = types.UnaryExpression("!", i(option, l, r, a, n));
                break;
              case 111:
                // j8739 = r in a;
                j8739 = types.BinaryExpression("in", r, a);
                break;
              case 87:
                j8739 = types.Identifier("undefined");
                break;
              case 120:
                // return 语句
                n.a = !0;
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);

                // j8739 = types.ReturnStatement(j8739)
                // console.log(120,j8739)
                // debugger
                break;
              case 62:
                // j8739 = r >> a;
                j8739 = types.BinaryExpression(">>", r, a);
                break;
              case 93:
                // j8739 = r instanceof a;
                j8739 = types.BinaryExpression("instanceof", r, a);
                break;
              case 81:
                j8739 = (n.t && n.t[n.t.length - 1]).s = !0;
                break;
              case 110:
                // j8739 = r % a;
                j8739 = types.BinaryExpression("%", r, a);
                break;
              case 78:
                n.m = !0;
                je = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !1;
                g[je] = n.u;
                // console.log(n.u)
                // option.body.push(types.assertAccessor(MemberExpression(g,je)))
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                // console.log(78, j8739)
                break;
              case 95:
                j8739 = n.n;
                break;
              case 38:
                // j8739 = r || i(option, l, a, u, n);
                j8739 = i(option, l, a, u, n)
                j8739 = types.LogicalExpression("||", r, j8739);
                break;
              case 121:
                // j8739 = r[0][r[1]] |= a;
                j8739 = types.AssignmentExpression("|=", MemberExpression(r[0], r[1]), a);
                break;
              case 60:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, 0, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n), C++, (m = i(option, l, C, -3), C = m.i, m.n));
                break;
              case 63:
                // j8739 = r * a;
                j8739 = types.BinaryExpression("*", r, a)
                break;
              case 19:
                // j8739 = r[0][r[1]] -= a;
                j8739 = types.AssignmentExpression("-=", MemberExpression(r[0], r[1]), a);
                break;
              case 92:
                // j8739 = r && i(option,l, a, u, n);
                j8739 = i(option, l, a, u, n)
                j8739 = types.LogicalExpression("&&", r, j8739);
                break;
              case 1:
                ce = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                he = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !1;
                j8739 = [ce, he, pe = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)];
                // 函数对象定义
                break;
              case 30:
                // j8739 = r & a;
                j8739 = types.BinaryExpression("&", r, a);
                break;
              case 24:
                // j8739 = +i(option, l, r, a, n);
                j8739 = types.UnaryExpression("+", i(option, l, r, a, n));
                break;
              case 101:
                // j8739 = r >= a;
                j8739 = types.BinaryExpression(">=", r, a);
                break;
              case 91:
                // 运算
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, 0, C++, (m = i(option, l, C, -3), C = m.i, m.n));
                // console.log(91, j8739)
                break;
              case 57:
                // 移除元素
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n).pop();
                // console.log(j8739)
                // debugger
                break;
              case 77:
                // j8739 = !((ue = i(option, l, r, a, n, !0))[0] instanceof i.g) && delete ue[0][ue[1]];
                j8739 = types.LogicalExpression("&&", (ue = i(option, l, r, a, n, !0))[0],
                  types.UnaryExpression("delete", MemberExpression(ue[0], ue[1])))
                break;
              case 119:
                // j8739 = r ? ++a[0][a[1]] : a[0][a[1]]++;
                  j8739 = types.UpdateExpression("++", MemberExpression(a[0], a[1]), Boolean(r.value));
                break;
              case 116:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                if (types.isNode(j8739) && !types.isNullLiteral(j8739) && !types.isIdentifier(j8739, { name: "undefined" })) {
                  option.body.push(ExpressionStatement(j8739))
                }
                // console.log(116, j8739)
                break;
              case 102:
                // j8739 = -i(option, l, r, a, n);
                j8739 = types.UnaryExpression("-", i(option, l, r, a, n));
                break;
              case 37:
                // j8739 = r | a;?
                j8739 = types.BinaryExpression("|", r, a);
                break;
              case 10:
                // j8739 = r[0][r[1]] %= a;
                j8739 = types.AssignmentExpression("%=", MemberExpression(r[0], r[1]), a);
                break;
              case 72:
                xe = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                G = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !xe.value; // 注意
                Ee = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !1;
                // j8739 = t ? [G, Ee] : G[Ee];

                j8739 = t ? [G, Ee] : MemberExpression(G, Ee);
                break;
              case 3:
                n.m = !0;
                Re = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                n.m = !1;
                Se = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                g[Re.value] = Se;
                  option.body.push(types.ExpressionStatement(types.AssignmentExpression("=", types.identifier(Re.value), Se)))
                // j8739 = n.e ? [g, Re] : void 0;
                j8739 = n.e ? [g, Re] : types.UnaryExpression("void", types.NumericLiteral(0));
                break;
              case 45:
                // j8739 = !!l[C++];
                j8739 = types.BooleanLiteral(!!l[C++]);
                break;
              case 36:
                // j8739 = r < a;
                  j8739 = types.BinaryExpression("<", r, a);
                break;
              case 74:
                // j8739 = new RegExp(i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n), i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));
                j8739 = types.NewExpression(types.identifier("RegExp"), [i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n), i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n)])
                break;
              case 97:
                // j8739 = r[0][r[1]] >>>= a;
                j8739 = types.AssignmentExpression(">>>=", MemberExpression(r[0], r[1]), a);
                break;
              case 125:
                // j8739 = typeof i(option, l, r, a, n);
                j8739 = i(option, l, r, a, n)
                j8739 = types.UnaryExpression("typeof", j8739)
                break;
              case 43:
                // j8739 = r > a;
                j8739 = types.BinaryExpression(">", r, a);
                break;
              case 15:
                // j8739 = r ^ a;
                  j8739 = types.BinaryExpression("^", r, a);
                break;
              case 126:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n);
                // 数组
                j8739 = types.arrayExpression(j8739)
                break;
              case 21:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, 0, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, !0), i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n));
                // console.log(21, j8739) 重复赋值
                break;
              case 96:
                j8739 = i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, 0, i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n), i(option, l, C++, (m = i(option, l, C, -3), C = m.i, m.n), n, !0));
                // console.log(96, j8739)
                option.body.push(ExpressionStatement(j8739))

                break;
              case 8:
                // j8739 = r[0][r[1]] += a;
                j8739 = types.AssignmentExpression("+=", MemberExpression(r[0], r[1]), a);
                break;
              case 113:
                // j8739 = r - a;
                j8739 = types.BinaryExpression("-", r, a);
                break;
              case 58:
                // j8739 = r + a;
                j8739 = types.BinaryExpression("+", r, a);
                break;
              case 104:
                j8739 = (n.t && n.t[n.t.length - 1]).v = !0;
                // j8739 = n.t.length ? (n.t && n.t[n.t.length - 1]).v = !0 : n.t.push({v:!0})
                break;
              case 26:
                // j8739 = r === a;
                if (r == undefined) {
                  r = types.Identifier("undefined")
                }
                  j8739 = types.BinaryExpression("===", r, a);
                break;
              case 86:
                // j8739 = r[0][r[1]] = a;
                if (a == undefined) {
                  a = types.Identifier("undefined")
                }
                  j8739 = types.AssignmentExpression("=", MemberExpression(r[0], r[1]), a);
                break;
              case 64:
                // j8739 = r >>> a;
                j8739 = types.BinaryExpression(">>>", r, a);
                break;
            }
            if (j8739 == undefined) {
              if (j == 49) {
                j8739 = types.identifier("undefined")
              }
            }
            return j8739;
          }
          i(option, l, r, a, n);
        } else {
          _ = C++;
          m = i(option, l, C, -3);
          C = m.i;
          ee = m.n;
          ie = C++;
          m = i(option, l, C, -3);
          C = m.i;
          le = m.n;
          se = C++;
          m = i(option, l, C, -3);
          C = m.i;
          fe = m.n;

          let try_body = {
            body: [],

            stack: [],
          }
          let catch_body = {
            body: [],

            stack: [],
          }
          let finally_body = {
            body: [],
            stack: [],
          }

          i(try_body, l, _, ee, n);
          i(catch_body, l, ie, le, n);
          n.a = !1;
          i(finally_body, l, se, fe, n);
          finally_body = finally_body.body.length ? types.BlockStatement(finally_body.body) : null;

          let TRY = types.TryStatement(types.BlockStatement(try_body.body),
            types.CatchClause(types.identifier("error"), types.BlockStatement(catch_body.body)),
            finally_body);
          option.body.push(TRY);

          // try {
          //   ne = i(option, l, _, ee, n);
          //   if (n.a) {
          //     return ne;
          //   }
          // } catch (e) {
          //   n.u = e;
          //   te = i(option, l, ie, le, n);
          //   if (n.a) {
          //     return te;
          //   }
          // } finally {
          //   re = n.a;
          //   n.a = !1;
          //   ae = i(option, l, se, fe, n);
          //   if (n.a) {
          //     return ae;
          //   }
          //   n.a = re;
          // }

        }

        return;
      }
      (v = {}).s = !1;
      v.v = !1;
      n.t.push(v);
      v = n.t && n.t[n.t.length - 1];
      if (112 == j) {
        O = !1; // do_while
      }
      if (106 == j) {
        P = C++;
        m = i(option, l, C, -3);
        C = m.i;
        Q = m.n;
        T = C++;
        m = i(option, l, C, -3);
        C = m.i;
        U = m.n;
        V = C++;
        m = i(option, l, C, -3);
        C = m.i;
        W = m.n;
        X = C++;
        m = i(option, l, C, -3);
        C = m.i;
        Y = m.n;
      }
      if (73 != j && 112 != j) { } else {
        P = 0;
        Q = -1;
        T = C++;
        m = i(option, l, C, -3);
        C = m.i;
        U = m.n;
        V = 0;
        W = -1;
        X = C++;
        m = i(option, l, C, -3);
        C = m.i;
        Y = m.n;
      }
      i(option, l, P, Q, n);

      let while_body = {
        body: [],
        test: {},
        stack: []
      }

      // 保存状态
      option.stack.push(option.body)
      option.body = [];

      while (1) {
        // if (!(O || i(option, l, T, U, n))) {
        //   n.t.pop();
        //   return;
        // };
        while_body.test = O || i(option, l, T, U, n)

        if (112 == j) {
          O = !0;
          while_body.test = O
        }
        K = X || 0;
        L = Y || l.length;
        K++;
        while (l[K] > 127) {
          K++;
        }
        K++;
        while (K < L) {
          R = K++;
          M = 0;
          N = 0;
          while (l[K] > 127) {
            N += l[K++] - 128 << 7 * M++;
          }
          d = N + (l[K++] << 7 * M);
          S = K + d - 1;
          K += d;
          E = i(option, l, R, S, n);

          if (n.a) {
            return E;
          }
          if (v.v || v.s) {
            break;
          }

        }
        if (v.v) {
          v.v = !1;
        } else {
          if (v.s) {
            n.t.pop();
            return;
          }
        }

        aaa = i(option, l, V, W, n)
        // if (types.isNode(aaa)) {
        //
        // console.log(generator(aaa).code)
        // }

        if (!types.isNode(while_body.test)) {
          let whileNode = types.DoWhileStatement(i(option, l, T, U, n), types.BlockStatement(option.body))
          option.body = option.stack.pop();
          option.body.push(whileNode)
          return
        }else{
          let whileNode;
            whileNode = types.WhileStatement(while_body.test, types.BlockStatement(option.body))
          option.body = option.stack.pop();
          option.body.push(whileNode)
          return
        }
      }

    }
  })(option, bytecode);
  return;
})();

let dump_code = generator(types.Program(option.body)).code;
console.log(dump_code)

fs.writeFileSync(`${__dirname}\\pseudocode.js`, dump_code, { encoding: "utf-8" }, (e) => {
})
console.info(`反编译伪代码已保存至 ${__dirname}\\pseudocode.js!\n`)