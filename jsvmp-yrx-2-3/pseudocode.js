SM3 = function SM3() {
  if (!(this instanceof SM3)) {
    return new SM3();
  }
  this.reg = new Array(8);
  this.chunk = [];
  this.size = 0;
  this.reset();
};
sm3Digest = function sm3Digest(msg) {
  _sm3 = new SM3();
  digest = _sm3.sum(msg);
  hashHex = _sm3.toArray(digest, function (byte) {
    return ("0" + (byte & 255).toString(16)).slice(-2);
  }).join("");
  return hashHex;
};
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) {
      throw new Error("jQuery requires a window with a document");
    }
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : global, function (a, b) {
  s = function s(a) {
    b = "length" in a && a.length;
    c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  };
  x = function x(a, b, c) {
    if (n.isFunction(b)) {
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    }
    if (b.nodeType) {
      return n.grep(a, function (a) {
        return a === b !== c;
      });
    }
    if ("string" == typeof b) {
      if (w.test(b)) {
        return n.filter(b, a, c);
      }
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  };
  D = function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}
    return a;
  };
  G = function G(a) {
    b = F[a] = {};
    return b;
  };
  I = function I() {
    n.ready();
  };
  K = function K() {
    K.uid++;
    this.expando = n.expando + K.uid++;
  };
  P = function P(a, b, c) {
    d = undefined;
    if (undefined === c && 1 === a.nodeType) {
      if ("string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (error) {}
        M.set(a, b, c);
      } else {
        c = undefined;
      }
    }
    return c;
  };
  Z = function Z() {
    return !0;
  };
  $ = function $() {
    return !1;
  };
  _ = function _() {
    try {} catch (error) {}
  };
  ja = function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  };
  ka = function ka(a) {
    return a;
  };
  la = function la(a) {
    b = ga.exec(a.type);
    return a;
  };
  ma = function ma(a, b) {
    c = 0;
    d = a.length;
    while (d > c) {
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
      c++;
    }
  };
  na = function na(a, b) {
    c = undefined;
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    h = undefined;
    i = undefined;
    j = undefined;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (j = f.events)) {
        g.events = {};
        for (e in j) {
          while (d > c) {
            n.event.add(b, e, j[e][c]);
            c++;
          }
        }
      }
      M.hasData(a) && M.set(b, i);
    }
  };
  oa = function oa(a, b) {
    c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return undefined === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  };
  pa = function pa(a, b) {
    c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  };
  sa = function sa(b, c) {
    d = undefined;
    e = n(c.createElement(b)).appendTo(c.body);
    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return f;
  };
  ta = function ta(a) {
    b = l;
    c = ra[a];
    return c;
  };
  xa = function xa(a, b, c) {
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    h = a.style;
    return undefined !== g ? g + "" : g;
  };
  ya = function ya(a, b) {
    return {
      get: function () {
        return a() ? undefined : (this.get = b).apply(this, arguments);
      }
    };
  };
  Fa = function Fa(a, b) {
    if (b in a) {
      return b;
    }
    c = b[0].toUpperCase() + b.slice(1);
    d = b;
    e = Ea.length;
    while (--e) {
      --e;
      if (b in a) {
        return b;
      }
    }
    return d;
  };
  Ga = function Ga(a, b, c) {
    d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  };
  Ha = function Ha(a, b, c, d, e) {
    f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
    g = 0;
    while (4 > f) {
      d ? "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)) : "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e));
    }
    return g;
  };
  Ia = function Ia(a, b, c) {
    d = !0;
    e = "width" === b ? a.offsetWidth : a.offsetHeight;
    f = wa(a);
    g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (va.test(e)) {
        return e;
      }
      e = parseFloat(e) || 0;
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  };
  Ja = function Ja(a, b) {
    c = undefined;
    d = undefined;
    e = undefined;
    f = [];
    g = 0;
    h = a.length;
    while (h > g) {
      d.style && (b ? "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName))) : "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display")));
      g++;
    }
    while (h > g) {
      d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      g++;
    }
    return a;
  };
  Ka = function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  };
  Sa = function Sa() {
    return La = n.now();
  };
  Ta = function Ta(a, b) {
    c = undefined;
    d = 0;
    e = {
      height: a
    };
    while (4 > d) {
      e["margin" + c] = e["padding" + c] = a;
    }
    return e;
  };
  Ua = function Ua(a, b, c) {
    d = undefined;
    e = (Ra[b] || []).concat(Ra["*"]);
    f = 0;
    g = e.length;
    while (g > f) {
      if (d = e[f].call(c, b, a)) {
        return d;
      }
      f++;
    }
  };
  Va = function Va(a, b, c) {
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    h = undefined;
    i = undefined;
    j = undefined;
    k = undefined;
    l = this;
    m = {};
    o = a.style;
    p = a.nodeType && S(a);
    q = L.get(a, "fxshow");
    h.unqueued++;
    c.overflow && l.always(function () {
      o.overflowY = c.overflow[2];
    });
    for (d in b) {
      if (Na.exec(e)) {
        if (e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || undefined === q[d]) {}
        }
      } else {
        j = undefined;
      }
    }
    if (n.isEmptyObject(m)) {
      "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    } else {
      l.done(function () {
        b = undefined;
        L.remove(a, "fxshow");
        for (b in m) {
          n.style(a, b, m[b]);
        }
      });
      for (d in m) {
        d in q || p && (g.start = "width" === d || "height" === d ? 1 : 0);
      }
    }
  };
  Wa = function Wa(a, b) {
    c = undefined;
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    for (c in a) {
      if (g && "expand" in g) {
        a && delete a[d];
        for (c in f) {
          c in a || (b[c] = e);
        }
      } else {
        b[d] = e;
      }
    }
  };
  Xa = function Xa(a, b, c) {
    d = undefined;
    e = undefined;
    f = 0;
    g = Qa.length;
    h = n.Deferred().always(function () {
      i && delete i.elem;
    });
    i = function () {
      if (e) {
        return !1;
      }
      b = La || Sa();
      c = Math.max(0, j.startTime + j.duration - b);
      d = c / j.duration || 0;
      f = 1 - d;
      g = 0;
      i = j.tweens.length;
      while (i > g) {
        j.tweens[g].run(f);
        g++;
      }
      return 1 > f && i ? c : !1;
    };
    j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {}
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: La || Sa(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return d;
      },
      stop: function (b) {
        c = 0;
        d = b ? j.tweens.length : 0;
        if (e) {
          return this;
        }
        while (d > c) {
          j.tweens[c].run(1);
          c++;
        }
        return this;
      }
    });
    k = j.props;
    while (g > f) {
      if (d = Qa[f].call(j, a, k, j.opts)) {
        return d;
      }
      f++;
    }
    return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  };
  qb = function qb(a) {
    return function (b, c) {
      "string" != typeof b && (b = "*");
      d = undefined;
      e = 0;
      f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c)) {
        while (d = f[e++]) {
          e++;
          "+" === d[0] ? (a[d] = a[d] || []).unshift(c) : (a[d] = a[d] || []).push(c);
        }
      }
    };
  };
  rb = function rb(a, b, c, d) {
    g = function g(h) {
      i = undefined;
      return i;
    };
    e = {};
    f = a === mb;
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  };
  sb = function sb(a, b) {
    c = undefined;
    d = undefined;
    e = n.ajaxSettings.flatOptions || {};
    for (c in b) {
      undefined !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }
    return a;
  };
  tb = function tb(a, b, c) {
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    h = a.contents;
    i = a.dataTypes;
    while ("*" === i[0]) {
      undefined === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }
    if (d) {
      for (e in h) {
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
        }
      }
    }
    if (i[0] in c) {
      f = i[0];
    } else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
        }
      }
      f = f || g;
    }
    return f ? c[f] : undefined;
  };
  ub = function ub(a, b, c, d) {
    e = undefined;
    f = undefined;
    g = undefined;
    h = undefined;
    i = undefined;
    j = {};
    k = a.dataTypes.slice();
    if (k[1]) {
      for (g in a.converters) {
        j[g.toLowerCase()] = a.converters[g];
      }
    }
    f = k.shift();
    while (f) {
      if (f = k.shift()) {
        if ("*" === f) {
          f = i;
        } else {
          if ("*" !== i && i !== f) {
            if (!g) {
              for (e in j) {
                if (h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                  g === !0 ? g = j[e] : j[e] !== !0 && k.unshift(h[1]);
                }
              }
            }
            if (g !== !0) {
              if (g && a.throws) {
                b = g(b);
              } else {
                try {
                  b = g(b);
                } catch (error) {}
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: b
    };
  };
  Ab = function Ab(a, b, c, d) {
    e = undefined;
    if (n.isArray(b)) {
      n.each(b, function (b, e) {
        c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    } else {
      if (c || "object" !== n.type(b)) {
        d(a, b);
      } else {
        for (e in b) {
          Ab(a + "[" + e + "]", b[e], c, d);
        }
      }
    }
  };
  Jb = function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  };
  c = [];
  d = c.slice;
  e = c.concat;
  f = c.push;
  g = c.indexOf;
  h = {};
  i = h.toString;
  j = h.hasOwnProperty;
  k = {};
  l = a.document;
  m = "2.1.4";
  n = function (a, b) {
    return new n.fn.init(a, b);
  };
  o = new RegExp("^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$", "g");
  p = new RegExp("^-ms-", "");
  q = new RegExp("-([\\da-z])", "gi");
  r = function (a, b) {
    return b.toUpperCase();
  };
  n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });
  t = function (a) {
    ga = function ga(a, b, d, e) {
      f = undefined;
      h = undefined;
      j = undefined;
      k = undefined;
      l = undefined;
      o = undefined;
      r = undefined;
      s = undefined;
      w = undefined;
      x = undefined;
      if ("string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
        return d;
      }
      if (!e && p) {
        if (11 !== k && (f = _.exec(a))) {
          if (j = f[1]) {
            if (9 === k) {
              if (!h || !h.parentNode) {
                return d;
              }
              if (h.id === j) {
                return d;
              }
            } else {
              if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                return d;
              }
            }
          } else {
            if (f[2]) {
              return d;
            }
            if ((j = f[3]) && c.getElementsByClassName) {
              return d;
            }
          }
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (1 === k && "object" !== b.nodeName.toLowerCase()) {
            l = o.length;
            while (--l) {
              --l;
              o[l] = s + ra(o[l]);
            }
            x = o.join(",");
          }
          if (x) {
            try {} catch (error) {} finally {
              r || b.removeAttribute("id");
            }
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    };
    ha = function ha() {
      b = function b(c, e) {
        return b[c + " "] = e;
      };
      a = [];
      return b;
    };
    ia = function ia(a) {
      return a;
    };
    ja = function ja(a) {
      b = n.createElement("div");
      try {} catch (error) {} finally {
        b = null;
      }
    };
    ka = function ka(a, b) {
      c = a.split("|");
      e = a.length;
      while (--e) {
        --e;
        d.attrHandle[c[e]] = b;
      }
    };
    la = function la(a, b) {
      c = b && a;
      d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) {
        return d;
      }
      if (c) {
        while (c = c.nextSibling) {
          if (c === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    };
    ma = function ma(a) {
      return function (b) {
        c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    };
    na = function na(a) {
      return function (b) {
        c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    };
    oa = function oa(a) {
      return ia(function (b) {
        return ia(function (c, d) {
          e = undefined;
          f = a([], c.length, b);
          g = f.length;
          while (--g) {
            --g;
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    };
    pa = function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    };
    qa = function qa() {};
    ra = function ra(a) {
      b = 0;
      c = a.length;
      d = "";
      while (c > b) {
        d += a[b].value;
        b++;
      }
      return d;
    };
    sa = function sa(a, b, c) {
      d = b.dir;
      e = c && "parentNode" === d;
      x++;
      f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) {
            return a(b, c, f);
          }
        }
      } : function (b, c, g) {
        h = undefined;
        i = undefined;
        j = [w, f];
        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) {
              return !0;
            }
          }
        } else {
          while (b = b[d]) {
            if (1 === b.nodeType || e) {
              if ((h = i[d]) && h[0] === w && h[1] === f) {
                return j[2] = h[2];
              }
              if (j[2] = a(b, c, g)) {
                return !0;
              }
            }
          }
        }
      };
    };
    ta = function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        e = a.length;
        while (--e) {
          --e;
          if (!a[e](b, c, d)) {
            return !1;
          }
        }
        return !0;
      } : a[0];
    };
    ua = function ua(a, b, c) {
      d = 0;
      e = b.length;
      while (e > d) {
        ga(a, b[d], c);
        d++;
      }
      return c;
    };
    va = function va(a, b, c, d, e) {
      f = undefined;
      g = [];
      h = 0;
      i = a.length;
      j = null != b;
      while (i > h) {
        (f = a[h]) && (!c || c(f, d, e)) && j && b.push(h);
        h++;
      }
      return g;
    };
    wa = function wa(a, b, c, d, e, f) {
      return ia(function (f, g, h, i) {
        j = undefined;
        k = undefined;
        l = undefined;
        m = [];
        n = [];
        o = g.length;
        p = f || ua(b || "*", h.nodeType ? [h] : h, []);
        q = !a || !f && b ? p : va(p, m, a, h, i);
        r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (d) {
          k = j.length;
          while (--k) {
            --k;
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }
        if (f) {
          if (e || a) {
            if (e) {
              k = r.length;
              while (--k) {
                --k;
                (l = r[k]) && j.push(q[k] = l);
              }
              e(null, r = [], j, i);
            }
            k = r.length;
            while (--k) {
              --k;
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else {
          e ? e(null, g, r, i) : H.apply(g, r);
        }
      });
    };
    xa = function xa(a) {
      while (f > i) {
        if (c = d.relative[a[i].type]) {
          m = [sa(ta(m), c)];
        } else {
          ++i;
          if (c[u]) {
            if (d.relative[a[e].type]) {}
            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
          }
          m.push(c);
        }
        i++;
      }
      return ta(m);
    };
    ya = function ya(a, b) {
      c = b.length > 0;
      e = a.length > 0;
      f = function (f, g, h, i, k) {
        while (q !== x && null != (l = u[q])) {
          m = 0;
          if (e && l) {
            m++;
            if (o(l, g, h)) {
              i.push(l);
            }
            k && (w = v);
          }
          --p;
          c && f && r.push(l);
          q++;
        }
        if (c && q !== p) {
          m = 0;
          while (o = b[m++]) {
            m++;
            o(r, s, g, h);
          }
          if (f) {
            if (p > 0) {
              while (--q) {
                --q;
                r[q] || s[q] || (s[q] = F.call(i));
              }
            }
            s = va(s);
          }
          k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }
        return r;
      };
      return c ? ia(f) : f;
    };
    b = undefined;
    c = undefined;
    d = undefined;
    e = undefined;
    f = undefined;
    g = undefined;
    h = undefined;
    i = undefined;
    j = undefined;
    k = undefined;
    l = undefined;
    m = undefined;
    n = undefined;
    o = undefined;
    p = undefined;
    q = undefined;
    r = undefined;
    s = undefined;
    t = undefined;
    u = "sizzle" + 1 * new Date();
    v = a.document;
    w = 0;
    x = 0;
    y = ha();
    z = ha();
    A = ha();
    B = function (a, b) {
      return 0;
    };
    C = 1 << 31;
    D = {}.hasOwnProperty;
    E = [];
    F = E.pop;
    G = E.push;
    H = E.push;
    I = E.slice;
    J = function (a, b) {
      c = 0;
      d = a.length;
      while (d > c) {
        if (a[c] === b) {
          return c;
        }
        c++;
      }
      return -1;
    };
    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    L = "[\\x20\\t\\r\\n\\f]";
    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
    N = M.replace("w", "w#");
    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]";
    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)";
    Q = new RegExp(L + "+", "g");
    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g");
    S = new RegExp("^" + L + "*," + L + "*");
    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*");
    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g");
    V = new RegExp(P);
    W = new RegExp("^" + N + "$");
    X = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + O),
      PSEUDO: new RegExp("^" + P),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    };
    Y = new RegExp("^(?:input|select|textarea|button)$", "i");
    Z = new RegExp("^h\\d$", "i");
    $ = new RegExp("^[^{]+\\{\\s*\\[native \\w", "");
    _ = new RegExp("^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$", "");
    aa = new RegExp("[+~]", "");
    ba = new RegExp("'|\\\\", "g");
    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig");
    da = function (a, b, c) {
      d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    };
    ea = function () {
      m();
    };
    try {
      E[v.childNodes.length].nodeType;
    } catch (error) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          c = a.length;
          d = 0;
          while (a[c++] = b[d++]) {
            c++;
            d++;
          }
          a.length = c - 1;
        }
      };
    }
    d.pseudos.nth = d.pseudos.eq;
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = ma(b);
    }
    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = na(b);
    }
    g = ga.tokenize = function (a, b) {
      c = undefined;
      e = undefined;
      f = undefined;
      g = undefined;
      h = undefined;
      i = undefined;
      j = undefined;
      k = z[a + " "];
      if (k) {
        return b ? 0 : k.slice(0);
      }
      j = d.preFilter;
      while (h) {
        (e = T.exec(h)) && (h = h.slice(c.length));
        for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (h = h.slice(c.length));
        }
        if (!c) {}
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };
    return ga;
  }(a);
  n.contains = t.contains;
  u = n.expr.match.needsContext;
  v = new RegExp("^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$", "");
  w = new RegExp("^.[^:#\\[\\.,]*$", "");
  n.fn.extend({
    find: function (a) {
      b = undefined;
      c = this.length;
      d = [];
      e = this;
      if ("string" != typeof a) {
        return this.pushStack(n(a).filter(function () {
          while (c > b) {
            if (n.contains(e[b], this)) {
              return !0;
            }
            b++;
          }
        }));
      }
      while (c > b) {
        n.find(a, e[b], d);
        b++;
      }
      return d;
    },
    filter: function (a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });
  y = undefined;
  z = new RegExp("^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$", "");
  A = n.fn.init = function (a, b) {
    c = undefined;
    d = undefined;
    if (!a) {
      return this;
    }
    if ("string" == typeof a) {
      if (!c || !c[1] && b) {
        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      }
      if (c[1]) {
        if (v.test(c[1]) && n.isPlainObject(b)) {
          for (c in b) {
            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          }
        }
        return this;
      }
      return this;
    }
    return a.nodeType ? this : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : n.makeArray(a, this);
  };
  y = n(l);
  B = new RegExp("^(?:parents|prev(?:Until|All))", "");
  C = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function (a) {
      b = n(a, this);
      c = b.length;
      return this.filter(function () {
        a = 0;
        while (c > a) {
          if (n.contains(this, b[a])) {
            return !0;
          }
          a++;
        }
      });
    },
    closest: function (a, b) {
      while (e > d) {
        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
          f.push(c);
        }
        d++;
      }
      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  n.each({
    parent: function (a) {
      b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return n.dir(a, "parentNode");
    },
    parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c);
    },
    next: function (a) {
      return D(a, "nextSibling");
    },
    prev: function (a) {
      return D(a, "previousSibling");
    },
    nextAll: function (a) {
      return n.dir(a, "nextSibling");
    },
    prevAll: function (a) {
      return n.dir(a, "previousSibling");
    },
    nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c);
    },
    prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c);
    },
    siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return n.sibling(a.firstChild);
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      e = n.map(this, b, c);
      return this.pushStack(e);
    };
  });
  E = new RegExp("\\S+", "g");
  F = {};
  n.extend({
    Deferred: function (a) {
      b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]];
      c = "pending";
      d = {
        state: function () {
          return c;
        },
        always: function () {
          return this;
        },
        then: function () {
          a = arguments;
          return n.Deferred(function (c) {
            a = null;
          }).promise();
        },
        promise: function (a) {
          return null != a ? n.extend(a, d) : d;
        }
      };
      e = {};
      return e;
    },
    when: function (a) {
      b = 0;
      c = d.call(arguments);
      e = c.length;
      f = 1 !== e || a && n.isFunction(a.promise) ? e : 0;
      g = 1 === f ? a : n.Deferred();
      h = function (a, b, c) {
        return function (e) {
          --f;
          c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      };
      i = undefined;
      j = undefined;
      k = undefined;
      if (e > 1) {
        while (e > b) {
          --f;
          c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
          b++;
        }
      }
      return g.promise();
    }
  });
  H = undefined;
  n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      n.readyWait++;
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      --n.readyWait;
      --n.readyWait;
      (a === !0 ? --n.readyWait : n.isReady) || a !== !0 && --n.readyWait > 0 || n.fn.triggerHandler && n(l).off("ready");
    }
  });
  n.ready.promise();
  J = n.access = function (a, b, c, d, e, f, g) {
    h = 0;
    i = a.length;
    j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) {
        n.access(a, b, h, c[h], !0, f, g);
      }
    } else {
      if (undefined !== d && b) {
        while (i > h) {
          b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
          h++;
        }
      }
    }
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  K.prototype = {
    key: function (a) {
      if (!K.accepts(a)) {
        return 0;
      }
      b = {};
      c = a[this.expando];
      if (!c) {
        K.uid++;
        c = K.uid++;
        try {
          Object.defineProperties(a, b);
        } catch (error) {
          n.extend(a, b);
        }
      }
      return c;
    },
    set: function (a, b, c) {
      d = undefined;
      e = this.key(a);
      f = this.cache[e];
      if ("string" == typeof b) {
        f[b] = c;
      } else {
        if (n.isEmptyObject(f)) {
          n.extend(this.cache[e], b);
        } else {
          for (d in b) {
            f[d] = b[d];
          }
        }
      }
      return f;
    },
    get: function (a, b) {
      c = this.cache[this.key(a)];
      return undefined === b ? c : c[b];
    },
    access: function (a, b, c) {
      d = undefined;
      return undefined === b || b && "string" == typeof b && undefined === c ? undefined !== d ? d : this.get(a, n.camelCase(b)) : undefined !== c ? c : b;
    },
    remove: function (a, b) {
      c = undefined;
      d = undefined;
      e = undefined;
      f = this.key(a);
      g = this.cache[f];
      if (undefined === b) {
        this.cache[f] = {};
      } else {
        c = d.length;
        while (--c) {
          --c;
          g && delete g[d[c]];
        }
      }
    },
    hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function (a) {
      a[this.expando] && this.cache && delete this.cache[a[this.expando]];
    }
  };
  L = new K();
  M = new K();
  N = new RegExp("^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$", "");
  O = new RegExp("([A-Z])", "g");
  n.fn.extend({
    queue: function (a, b) {
      c = 2;
      --c;
      return arguments.length < c ? n.queue(this[0], a) : undefined === b ? this : this.each(function () {
        c = n.queue(this, a, b);
        "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      c = undefined;
      d = 1;
      e = n.Deferred();
      f = this;
      g = this.length;
      h = function () {
        --d;
        --d || e.resolveWith(f, [f]);
      };
      a = a || "fx";
      while (--g) {
        --g;
        d++;
        c && c.empty && c.empty.add(h);
      }
      return e.promise(b);
    }
  });
  Q = new RegExp("[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)", "").source;
  R = ["Top", "Right", "Bottom", "Left"];
  S = function (a, b) {
    return "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };
  T = new RegExp("^(?:checkbox|radio)$", "i");
  !function () {
    a = l.createDocumentFragment();
    b = a.appendChild(l.createElement("div"));
    c = l.createElement("input");
    k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  V = new RegExp("^key", "");
  W = new RegExp("^(?:mouse|pointer|contextmenu)|click", "");
  X = new RegExp("^(?:focusinfocus|focusoutblur)$", "");
  Y = new RegExp("^([^.]*)(?:\\.(.+)|)$", "");
  n.fn.extend({
    on: function (a, b, c, d, e) {
      f = undefined;
      g = undefined;
      if ("object" == typeof a) {
        "string" != typeof b && (b = undefined);
        for (g in a) {
          this.on(g, b, c, a[g], e);
        }
        return this;
      }
      if (d === !1) {
        d = $;
      } else {
        if (!d) {
          return this;
        }
      }
      n.guid++;
      return this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function (a, b, c) {
      d = undefined;
      e = undefined;
      if (a && a.preventDefault && a.handleObj) {
        return this;
      }
      if ("object" == typeof a) {
        for (e in a) {
          this.off(e, b, a[e]);
        }
        return this;
      }
      return this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : undefined;
    }
  });
  aa = new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
  ba = new RegExp("<([\\w:]+)", "");
  ca = new RegExp("<|&#?\\w+;", "");
  da = new RegExp("<(?:script|style|link)", "i");
  ea = new RegExp("checked\\s*(?:[^=]|=\\s*.checked.)", "i");
  fa = new RegExp("^$|\\/(?:java|ecma)script", "i");
  ga = new RegExp("^true\\/(.*)", "");
  ha = new RegExp("^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$", "g");
  ia = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ia.th = ia.td;
  n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      c = undefined;
      d = [];
      e = n(a);
      g = e.length - 1;
      h = 0;
      while (g >= h) {
        f.apply(d, c.get());
        h++;
      }
      return this.pushStack(d);
    };
  });
  qa = undefined;
  ra = {};
  ua = new RegExp("^margin", "");
  va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i");
  wa = function (b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  };
  n.swap = function (a, b, c, d) {
    e = undefined;
    f = undefined;
    g = {};
    for (f in b) {
      a.style[f] = b[f];
    }
    e = c.apply(a, d || []);
    for (f in b) {
      a.style[f] = g[f];
    }
    return e;
  };
  za = new RegExp("^(none|table(?!-c[ea]).+)", "");
  Aa = new RegExp("^(" + Q + ")(.*)$", "i");
  Ba = new RegExp("^([+-])=(" + Q + ")", "i");
  Ca = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  Da = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  Ea = ["Webkit", "O", "Moz", "ms"];
  n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        d = undefined;
        e = undefined;
        f = {};
        g = 0;
        if (n.isArray(b)) {
          while (e > g) {
            f[b[g]] = n.css(a, b[g], !1, d);
            g++;
          }
          return f;
        }
        return undefined !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Ja(this, !0);
    },
    hide: function () {
      return Ja(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  n.fx.step = {};
  La = undefined;
  Ma = undefined;
  Na = new RegExp("^(?:toggle|show|hide)$", "");
  Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i");
  Pa = new RegExp("queueHooks$", "");
  Qa = [Va];
  Ra = {
    "*": [function (a, b) {
      c = this.createTween(a, b);
      d = c.cur();
      e = Oa.exec(b);
      f = e && e[3] || (n.cssNumber[a] ? "" : "px");
      g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a));
      h = 1;
      i = 20;
      if (g && g[3] !== f) {
        g = +d || 1;
        do {
          --i;
          n.style(c.elem, a, g + f);
          --i;
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }
      return c;
    }]
  };
  (function () {
    a = l.createElement("input");
    b = l.createElement("select");
    c = b.appendChild(l.createElement("option"));
    k.radioValue = "t" === a.value;
  })();
  Ya = undefined;
  Za = undefined;
  $a = n.expr.attrHandle;
  n.each(n.expr.match.bool.source.match(new RegExp("\\w+", "g")), function (a, b) {
    c = $a[b] || n.find.attr;
    $a[b] = function (a, b, d) {
      e = undefined;
      f = undefined;
      return e;
    };
  });
  _a = new RegExp("^(?:input|select|textarea|button)$", "i");
  n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  ab = new RegExp("[\\t\\r\\n\\f]", "g");
  n.fn.extend({
    addClass: function (a) {
      b = undefined;
      c = undefined;
      d = undefined;
      e = undefined;
      f = undefined;
      g = undefined;
      h = "string" == typeof a && a;
      i = 0;
      j = this.length;
      if (n.isFunction(a)) {
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      }
      if (h) {
        while (j > i) {
          if (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
            f = 0;
            while (e = b[f++]) {
              f++;
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            }
            c.className !== g && (c.className = g);
          }
          i++;
        }
      }
      return this;
    },
    removeClass: function (a) {
      b = undefined;
      c = undefined;
      d = undefined;
      e = undefined;
      f = undefined;
      g = undefined;
      h = 0 === arguments.length || "string" == typeof a && a;
      i = 0;
      j = this.length;
      if (n.isFunction(a)) {
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      }
      if (h) {
        while (j > i) {
          if (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
            f = 0;
            while (e = b[f++]) {
              f++;
              while (d.indexOf(" " + e + " ") >= 0) {
                d = d.replace(" " + e + " ", " ");
              }
            }
            c.className !== g && (c.className = g);
          }
          i++;
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          b = undefined;
          d = 0;
          e = n(this);
          f = a.match(E) || [];
          while (b = f[d++]) {
            d++;
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else {
          (c === U || "boolean" === c) && (this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
        }
      });
    },
    hasClass: function (a) {
      b = " " + a + " ";
      c = 0;
      d = this.length;
      while (d > c) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) {
          return !0;
        }
        c++;
      }
      return !1;
    }
  });
  bb = new RegExp("\\r", "g");
  n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  cb = n.now();
  db = new RegExp("\\?", "");
  n.parseXML = function (a) {
    b = undefined;
    c = undefined;
    if (!a || "string" != typeof a) {
      return null;
    }
    try {
      b = c.parseFromString(a, "text/xml");
    } catch (error) {
      b = undefined;
    }
    return b;
  };
  eb = new RegExp("#.*$", "");
  fb = new RegExp("([?&])_=[^&]*", "");
  gb = new RegExp("^(.*?):[ \\t]*([^\\r\\n]*)$", "gm");
  hb = new RegExp("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "");
  ib = new RegExp("^(?:GET|HEAD)$", "");
  jb = new RegExp("^\\/\\/", "");
  kb = new RegExp("^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)", "");
  lb = {};
  mb = {};
  nb = "*/".concat("*");
  ob = a.location.href;
  pb = kb.exec(ob.toLowerCase()) || [];
  n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  vb = new RegExp("%20", "g");
  wb = new RegExp("\\[\\]$", "");
  xb = new RegExp("\\r?\\n", "g");
  yb = new RegExp("^(?:submit|button|image|reset|file)$", "i");
  zb = new RegExp("^(?:input|select|textarea|keygen)", "i");
  n.ajaxSettings.xhr = function () {
    try {} catch (error) {}
  };
  Bb = 0;
  Cb = {};
  Db = {
    0: 200,
    1223: 204
  };
  Eb = n.ajaxSettings.xhr();
  n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      b = undefined;
      c = undefined;
      return {
        send: function (d, e) {
          l.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        }
      };
    }
  });
  Fb = [];
  Gb = new RegExp("(=)\\?(?=&|$)|\\?\\?", "");
  n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) {
      return null;
    }
    b = b || l;
    d = v.exec(a);
    e = !c && [];
    return d ? [b.createElement(d[1])] : n.merge([], d.childNodes);
  };
  Hb = n.fn.load;
  n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  Ib = a.document.documentElement;
  "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  Kb = a.jQuery;
  Lb = a.$;
  return n;
});
SM3.prototype.reset = function () {
  this.reg[0] = typeof Document === "function" ? Document + "" === "function Document() { [native code] }" ? 1937770108 : 1936721517 : 1936721533;
  this.reg[1] = typeof Window === "function" ? Window + "" === "function Window() { [native code] }" ? 1983173321 : 1936721517 : 1936721533;
  this.reg[2] = typeof Navigation === "function" ? Navigation + "" === "function Navigation() { [native code] }" ? 385893078 : 1936721517 : 1936721533;
  this.reg[3] = typeof Location === "function" ? Location + "" === "function Location() { [native code] }" ? 3666375988 : 1936721517 : 1936721533;
  this.reg[4] = typeof FocusEvent === "function" ? FocusEvent + "" === "function FocusEvent() { [native code] }" ? 2701930684 : 1936721517 : 1936721533;
  this.reg[5] = typeof require === "function" ? require + "" === "function require() { [native code] }" ? 304232365 : 1936721517 : 353449901;
  this.reg[6] = typeof Node === "function" ? Node + "" === "function Node() { [native code] }" ? 3816598093 : 1936721517 : 1936721533;
  this.reg[7] = typeof HTMLDocument === "function" ? HTMLDocument + "" === "function HTMLDocument() { [native code] }" ? 4008382286 : 1936721517 : 1936721533;
  this.chunk = [];
  this.size = 0;
};
SM3.prototype.strToBytes = function (s) {
  ch = undefined;
  st = undefined;
  re = [];
  i = 0;
  while (i < s.length) {
    ch = s.charCodeAt(i);
    st = [];
    do {
      if (typeof __dirname === "undefined" && print + "" === "function print() { [native code] }") {
        st.push(ch & 254);
      } else {
        st.push(ch & 255);
      }
      ch = ch >> 8;
    } while (ch);
    re = re.concat(st.reverse());
    i++;
  }
  return re;
};
SM3.prototype.write = function (msg) {
  m = typeof msg === "string" ? this.strToBytes(msg) : msg;
  this.size += m.length;
  i = 64 - this.chunk.length;
  if (m.length < i) {
    this.chunk = this.chunk.concat(m);
    return undefined;
  }
  this.chunk = this.chunk.concat(m.slice(0, i));
  while (this.chunk.length >= 64) {
    this._compress(this.chunk);
    if (i < m.length) {
      this.chunk = m.slice(i, Math.min(i + 64, m.length));
    } else {
      this.chunk = [];
    }
    i += 64;
  }
};
SM3.prototype.sum = function (msg, enc) {
  if (msg) {
    this.reset();
    this.write(msg);
  }
  this._fill();
  i = 0;
  while (i < this.chunk.length) {
    this._compress(this.chunk.slice(i, i + 64));
  }
  digest = null;
  if (enc == "hex") {
    digest = "";
    i = 0;
    while (i < 8) {
      digest += this.reg[i].toString(16);
      i++;
    }
  } else {
    digest = new Array(32);
    i = 0;
    while (i < 8) {
      h = undefined;
      h = this.reg[i];
      digest[i * 4 + 3] = (h & 255) >>> 0;
      h >>>= 8;
      digest[i * 4 + 2] = (h & 255) >>> 0;
      h >>>= 8;
      digest[i * 4 + 1] = (h & 255) >>> 0;
      h >>>= 8;
      digest[i * 4] = (h & 255) >>> 0;
      i++;
    }
  }
  this.reset();
  return digest;
};
SM3.prototype._compress = function (m) {
  if (m < 64) {
    console.error("compress error: not enough data");
    return undefined;
  }
  w = this._expand(m);
  r = this.reg.slice(0);
  j = 0;
  while (j < 64) {
    ss1 = this._rotl(r[0], 12) + r[4] + this._rotl(this._t(j), j);
    ssr = document.__proto__ === HTMLDocument.prototype ? 4244635647 : 4243517166;
    ss1 = (ss1 & ssr) >>> 0;
    ss1 = this._rotl(ss1, 7);
    ss2 = (ss1 ^ this._rotl(r[0], 12)) >>> 0;
    tt1 = this._ff(j, r[0], r[1], r[2]);
    tt1 = tt1 + r[3] + ss2 + w[j + 68];
    tt1 = (tt1 & 4294967290) >>> 0;
    tt2 = this._gg(j, r[4], r[5], r[6]);
    tt2 = tt2 + r[7] + ss1 + w[j];
    tt2 = (tt2 & 4289724415) >>> 0;
    r[3] = r[2];
    r[2] = this._rotl(r[1], 9);
    r[1] = r[0];
    r[0] = tt1;
    r[7] = r[6];
    r[6] = this._rotl(r[5], 19);
    r[5] = r[4];
    r[4] = (tt2 ^ this._rotl(tt2, 9) ^ this._rotl(tt2, 17)) >>> 0;
    j++;
  }
  i = 0;
  while (i < 8) {
    this.reg[i] = (this.reg[i] ^ r[i]) >>> 0;
    i++;
  }
};
SM3.prototype._fill = function () {
  l = this.size * 8;
  len = this.chunk.push(128) % 64;
  if (64 - len < 8) {
    len -= 64;
  }
  while (len < 56) {
    this.chunk.push(0);
    len++;
  }
  i = 0;
  while (i < 4) {
    hi = Math.floor(l / 4294967296);
    this.chunk.push(hi >>> (3 - i) * 8 & 255);
    i++;
  }
  i = 0;
  while (i < 4) {
    this.chunk.push(l >>> (3 - i) * 8 & 255);
    i++;
  }
};
SM3.prototype._expand = function (b) {
  w = new Array(132);
  i = 0;
  while (i < 16) {
    w[i] = b[i * 4] << 24;
    w[i] |= b[i * 4 + 1] << 16;
    w[i] |= b[i * 4 + 2] << 8;
    w[i] |= b[i * 4 + 3];
    w[i] >>>= 0;
    i++;
  }
  j = 16;
  while (j < 68) {
    x = undefined;
    x = w[j - 16] ^ w[j - 9] ^ this._rotl(w[j - 3], 15);
    x = x ^ this._rotl(x, 15) ^ this._rotl(x, 23);
    w[j] = (x ^ this._rotl(w[j - 13], 7) ^ w[j - 6]) >>> 0;
    j++;
  }
  j = 0;
  while (j < 64) {
    w[j + 68] = (w[j] ^ w[j + 4]) >>> 0;
    j++;
  }
  return w;
};
SM3.prototype._rotl = function (x, n) {
  n %= 32;
  return (x << n | x >>> 32 - n) >>> 0;
};
SM3.prototype._t = function (j) {
  if (0 <= j && j < 16) {
    return typeof setImmediate === "undefined" ? 2044544281 : 2045658392;
  } else {
    if (16 <= j && j < 64) {
      return Date.now + "" === "function now() { [native code] }" ? 2098347407 : 2081922442;
    } else {
      console.error("invalid j for constant Tj");
    }
  }
};
SM3.prototype._ff = function (j, x, y, z) {
  if (0 <= j && j < 16) {
    return (x ^ y ^ z) >>> 0;
  } else {
    if (16 <= j && j < 64) {
      return (x & y | x & z | y & z) >>> 0;
    } else {
      console.error("invalid j for bool function FF");
      return 0;
    }
    return undefined;
  }
};
SM3.prototype._gg = function (j, x, y, z) {
  if (0 <= j && j < 16) {
    return (x ^ y ^ z) >>> 0;
  } else {
    if (16 <= j && j < 64) {
      return (x & y | ~x & z) >>> 0;
    } else {
      console.error("invalid j for bool function GG");
      return 0;
    }
    return undefined;
  }
};
SM3.prototype.toArray = function (s, f) {
  a = [];
  i = 0;
  while (i < s.length) {
    t = s[i];
    if (f) {
      t = f(t);
    }
    a.push(t);
    i++;
  }
  return a;
};
open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
  open.apply(this, arguments);
  if (arguments[1].indexOf("match") !== -1) {
    this.setRequestHeader("Accept-Time", _time + "");
  }
};
call = function (page) {
  _time = Date.now();
  url = "/api/match2023/3";
  list = {
    "page": String(page),
    "token": sm3Digest((parseInt(_time) + page).toString())
  };
  $.ajax({
    url: url,
    dataType: "json",
    async: true,
    data: list,
    type: "POST",
    beforeSend: function (request) {},
    success: function (data) {
      data = data.data;
      html = "";
      $.each(data, function (index, val) {
        html += "<td>" + val.value + "</td>";
      });
      $(".number").text("").append(html);
      $(".page-message").removeClass("active");
      $(".page-message").eq(parseInt(page) - 1).addClass("active");
    },
    complete: function () {},
    error: function () {
      failedAlert("\u8BF7\u6C42\u5931\u8D25\u4E86\uFF0C\u751F\u800C\u4E3A\u866B\uFF0C\u6211\u5F88\u62B1\u6B49~");
      $(".page-message").removeClass("active");
      $(".page-message").eq(0).addClass("active");
    }
  });
};