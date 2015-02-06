/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (W, X, u) {
  'use strict';
  function z(b) {
    return function () {
      var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.28/" + (b ? b + "/" : "") + a;
      for (c = 1; c < arguments.length; c++)a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a)
    }
  }

  function Sa(b) {
    if (null == b || Ja(b))return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : G(b) || L(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
  }

  function r(b, a, c) {
    var d;
    if (b)if (N(b))for (d in b)"prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (L(b) || Sa(b))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else if (b.forEach && b.forEach !== r)b.forEach(a, c); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b
  }

  function Xb(b) {
    var a = [], c;
    for (c in b)b.hasOwnProperty(c) && a.push(c);
    return a.sort()
  }

  function Sc(b,
              a, c) {
    for (var d = Xb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
    return d
  }

  function Yb(b) {
    return function (a, c) {
      b(c, a)
    }
  }

  function ib() {
    for (var b = na.length, a; b;) {
      b--;
      a = na[b].charCodeAt(0);
      if (57 == a)return na[b] = "A", na.join("");
      if (90 == a)na[b] = "0"; else return na[b] = String.fromCharCode(a + 1), na.join("")
    }
    na.unshift("0");
    return na.join("")
  }

  function Zb(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey
  }

  function E(b) {
    var a = b.$$hashKey;
    r(arguments, function (a) {
      a !== b && r(a, function (a, c) {
        b[c] = a
      })
    });
    Zb(b, a);
    return b
  }

  function U(b) {
    return parseInt(b,
      10)
  }

  function $b(b, a) {
    return E(new (E(function () {
    }, {prototype: b})), a)
  }

  function v() {
  }

  function ga(b) {
    return b
  }

  function aa(b) {
    return function () {
      return b
    }
  }

  function F(b) {
    return "undefined" === typeof b
  }

  function D(b) {
    return "undefined" !== typeof b
  }

  function T(b) {
    return null != b && "object" === typeof b
  }

  function G(b) {
    return "string" === typeof b
  }

  function jb(b) {
    return "number" === typeof b
  }

  function va(b) {
    return "[object Date]" === Ba.call(b)
  }

  function N(b) {
    return "function" === typeof b
  }

  function kb(b) {
    return "[object RegExp]" === Ba.call(b)
  }

  function Ja(b) {
    return b && b.document && b.location && b.alert && b.setInterval
  }

  function Tc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
  }

  function Uc(b, a, c) {
    var d = [];
    r(b, function (b, f, g) {
      d.push(a.call(c, b, f, g))
    });
    return d
  }

  function Ta(b, a) {
    if (b.indexOf)return b.indexOf(a);
    for (var c = 0; c < b.length; c++)if (a === b[c])return c;
    return -1
  }

  function Ua(b, a) {
    var c = Ta(b, a);
    0 <= c && b.splice(c, 1);
    return a
  }

  function Ka(b, a, c, d) {
    if (Ja(b) || b && b.$evalAsync && b.$watch)throw Va("cpws");
    if (a) {
      if (b === a)throw Va("cpi");
      c = c || [];
      d = d || [];
      if (T(b)) {
        var e = Ta(c, b);
        if (-1 !== e)return d[e];
        c.push(b);
        d.push(a)
      }
      if (L(b))for (var f = a.length = 0; f < b.length; f++)e = Ka(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
        var g = a.$$hashKey;
        L(a) ? a.length = 0 : r(a, function (b, c) {
          delete a[c]
        });
        for (f in b)e = Ka(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
        Zb(a, g)
      }
    } else if (a = b)L(b) ? a = Ka(b, [], c, d) : va(b) ? a = new Date(b.getTime()) : kb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : T(b) && (a = Ka(b, {}, c, d));
    return a
  }

  function ha(b, a) {
    if (L(b)) {
      a = a || [];
      for (var c = 0; c < b.length; c++)a[c] = b[c]
    } else if (T(b))for (c in a = a || {}, b)!lb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
    return a || b
  }

  function Ca(b, a) {
    if (b === a)return !0;
    if (null === b || null === a)return !1;
    if (b !== b && a !== a)return !0;
    var c = typeof b, d;
    if (c == typeof a && "object" == c)if (L(b)) {
      if (!L(a))return !1;
      if ((c = b.length) == a.length) {
        for (d = 0; d < c; d++)if (!Ca(b[d], a[d]))return !1;
        return !0
      }
    } else {
      if (va(b))return va(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() ===
      a.getTime() : !1;
      if (kb(b) && kb(a))return b.toString() == a.toString();
      if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ja(b) || Ja(a) || L(a))return !1;
      c = {};
      for (d in b)if ("$" !== d.charAt(0) && !N(b[d])) {
        if (!Ca(b[d], a[d]))return !1;
        c[d] = !0
      }
      for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !N(a[d]))return !1;
      return !0
    }
    return !1
  }

  function Bb(b, a) {
    var c = 2 < arguments.length ? wa.call(arguments, 2) : [];
    return !N(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(wa.call(arguments,
        0))) : a.apply(b, c)
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b)
    }
  }

  function Vc(b, a) {
    var c = a;
    "string" === typeof b && "$" === b.charAt(0) ? c = u : Ja(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
    return c
  }

  function oa(b, a) {
    return "undefined" === typeof b ? u : JSON.stringify(b, Vc, a ? "  " : null)
  }

  function ac(b) {
    return G(b) ? JSON.parse(b) : b
  }

  function Wa(b) {
    "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = x("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
    return b
  }

  function ia(b) {
    b = A(b).clone();
    try {
      b.empty()
    } catch (a) {
    }
    var c = A("<div>").append(b).html();
    try {
      return 3 === b[0].nodeType ? x(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + x(b)
      })
    } catch (d) {
      return x(c)
    }
  }

  function bc(b) {
    try {
      return decodeURIComponent(b)
    } catch (a) {
    }
  }

  function cc(b) {
    var a = {}, c, d;
    r((b || "").split("&"), function (b) {
      b && (c = b.replace(/\+/g, "%20").split("="), d = bc(c[0]), D(d) && (b = D(c[1]) ? bc(c[1]) : !0, lb.call(a, d) ? L(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
    });
    return a
  }

  function Cb(b) {
    var a =
      [];
    r(b, function (b, d) {
      L(b) ? r(b, function (b) {
        a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
      }) : a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
    });
    return a.length ? a.join("&") : ""
  }

  function mb(b) {
    return Da(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function Da(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
  }

  function Wc(b, a) {
    function c(a) {
      a && d.push(a)
    }

    var d = [b], e, f, g = ["ng:app", "ng-app", "x-ng-app",
      "data-ng-app"], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    r(g, function (a) {
      g[a] = !0;
      c(X.getElementById(a));
      a = a.replace(":", "\\:");
      b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
    });
    r(d, function (a) {
      if (!e) {
        var b = h.exec(" " + a.className + " ");
        b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function (b) {
          !e && g[b.name] && (e = a, f = b.value)
        })
      }
    });
    e && a(e, f ? [f] : [])
  }

  function dc(b, a) {
    var c = function () {
      b = A(b);
      if (b.injector()) {
        var c = b[0] === X ?
          "document" : ia(b);
        throw Va("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }
      a = a || [];
      a.unshift(["$provide", function (a) {
        a.value("$rootElement", b)
      }]);
      a.unshift("ng");
      c = ec(a);
      c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d, e) {
        a.$apply(function () {
          b.data("$injector", d);
          c(b)(a)
        })
      }]);
      return c
    }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (W && !d.test(W.name))return c();
    W.name = W.name.replace(d, "");
    Xa.resumeBootstrap = function (b) {
      r(b, function (b) {
        a.push(b)
      });
      c()
    }
  }

  function nb(b, a) {
    a =
      a || "_";
    return b.replace(Xc, function (b, d) {
      return (d ? a : "") + b.toLowerCase()
    })
  }

  function Db(b, a, c) {
    if (!b)throw Va("areq", a || "?", c || "required");
    return b
  }

  function Ya(b, a, c) {
    c && L(b) && (b = b[b.length - 1]);
    Db(N(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
    return b
  }

  function Ea(b, a) {
    if ("hasOwnProperty" === b)throw Va("badname", a);
  }

  function fc(b, a, c) {
    if (!a)return b;
    a = a.split(".");
    for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
    return !c && N(b) ? Bb(e, b) : b
  }

  function Eb(b) {
    var a =
      b[0];
    b = b[b.length - 1];
    if (a === b)return A(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)break;
      c.push(a)
    } while (a !== b);
    return A(c)
  }

  function Yc(b) {
    var a = z("$injector"), c = z("ng");
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || z;
    return b.module || (b.module = function () {
        var b = {};
        return function (e, f, g) {
          if ("hasOwnProperty" === e)throw c("badname", "module");
          f && b.hasOwnProperty(e) && (b[e] = null);
          return b[e] || (b[e] = function () {
              function b(a, d, e) {
                return function () {
                  c[e || "push"]([a, d, arguments]);
                  return n
                }
              }

              if (!f)throw a("nomod",
                e);
              var c = [], d = [], l = b("$injector", "invoke"), n = {
                _invokeQueue: c,
                _runBlocks: d,
                requires: f,
                name: e,
                provider: b("$provide", "provider"),
                factory: b("$provide", "factory"),
                service: b("$provide", "service"),
                value: b("$provide", "value"),
                constant: b("$provide", "constant", "unshift"),
                animation: b("$animateProvider", "register"),
                filter: b("$filterProvider", "register"),
                controller: b("$controllerProvider", "register"),
                directive: b("$compileProvider", "directive"),
                config: l,
                run: function (a) {
                  d.push(a);
                  return this
                }
              };
              g && l(g);
              return n
            }())
        }
      }())
  }

  function Zc(b) {
    E(b, {
      bootstrap: dc,
      copy: Ka,
      extend: E,
      equals: Ca,
      element: A,
      forEach: r,
      injector: ec,
      noop: v,
      bind: Bb,
      toJson: oa,
      fromJson: ac,
      identity: ga,
      isUndefined: F,
      isDefined: D,
      isString: G,
      isFunction: N,
      isObject: T,
      isNumber: jb,
      isElement: Tc,
      isArray: L,
      version: $c,
      isDate: va,
      lowercase: x,
      uppercase: La,
      callbacks: {counter: 0},
      $$minErr: z,
      $$csp: Za
    });
    $a = Yc(W);
    try {
      $a("ngLocale")
    } catch (a) {
      $a("ngLocale", []).provider("$locale", ad)
    }
    $a("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({$$sanitizeUri: bd});
      a.provider("$compile",
        gc).directive({
          a: cd,
          input: hc,
          textarea: hc,
          form: dd,
          script: ed,
          select: fd,
          style: gd,
          option: hd,
          ngBind: id,
          ngBindHtml: jd,
          ngBindTemplate: kd,
          ngClass: ld,
          ngClassEven: md,
          ngClassOdd: nd,
          ngCloak: od,
          ngController: pd,
          ngForm: qd,
          ngHide: rd,
          ngIf: sd,
          ngInclude: td,
          ngInit: ud,
          ngNonBindable: vd,
          ngPluralize: wd,
          ngRepeat: xd,
          ngShow: yd,
          ngStyle: zd,
          ngSwitch: Ad,
          ngSwitchWhen: Bd,
          ngSwitchDefault: Cd,
          ngOptions: Dd,
          ngTransclude: Ed,
          ngModel: Fd,
          ngList: Gd,
          ngChange: Hd,
          required: ic,
          ngRequired: ic,
          ngValue: Id
        }).directive({ngInclude: Jd}).directive(Fb).directive(jc);
      a.provider({
        $anchorScroll: Kd,
        $animate: Ld,
        $browser: Md,
        $cacheFactory: Nd,
        $controller: Od,
        $document: Pd,
        $exceptionHandler: Qd,
        $filter: kc,
        $interpolate: Rd,
        $interval: Sd,
        $http: Td,
        $httpBackend: Ud,
        $location: Vd,
        $log: Wd,
        $parse: Xd,
        $rootScope: Yd,
        $q: Zd,
        $sce: $d,
        $sceDelegate: ae,
        $sniffer: be,
        $templateCache: ce,
        $timeout: de,
        $window: ee,
        $$rAF: fe,
        $$asyncCallback: ge
      })
    }])
  }

  function ab(b) {
    return b.replace(he, function (a, b, d, e) {
      return e ? d.toUpperCase() : d
    }).replace(ie, "Moz$1")
  }

  function Gb(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] :
        [this], k = a, m, l, n, q, p, s;
      if (!d || null != b)for (; e.length;)for (m = e.shift(), l = 0, n = m.length; l < n; l++)for (q = A(m[l]), k ? q.triggerHandler("$destroy") : k = !k, p = 0, q = (s = q.children()).length; p < q; p++)e.push(Fa(s[p]));
      return f.apply(this, arguments)
    }

    var f = Fa.fn[b], f = f.$original || f;
    e.$original = f;
    Fa.fn[b] = e
  }

  function S(b) {
    if (b instanceof S)return b;
    G(b) && (b = $(b));
    if (!(this instanceof S)) {
      if (G(b) && "<" != b.charAt(0))throw Hb("nosel");
      return new S(b)
    }
    if (G(b)) {
      var a = b;
      b = X;
      var c;
      if (c = je.exec(a))b = [b.createElement(c[1])]; else {
        var d =
          b, e;
        b = d.createDocumentFragment();
        c = [];
        if (Ib.test(a)) {
          d = b.appendChild(d.createElement("div"));
          e = (ke.exec(a) || ["", ""])[1].toLowerCase();
          e = da[e] || da._default;
          d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(le, "<$1></$2>") + e[2];
          d.removeChild(d.firstChild);
          for (a = e[0]; a--;)d = d.lastChild;
          a = 0;
          for (e = d.childNodes.length; a < e; ++a)c.push(d.childNodes[a]);
          d = b.firstChild;
          d.textContent = ""
        } else c.push(d.createTextNode(a));
        b.textContent = "";
        b.innerHTML = "";
        b = c
      }
      Jb(this, b);
      A(X.createDocumentFragment()).append(this)
    } else Jb(this,
      b)
  }

  function Kb(b) {
    return b.cloneNode(!0)
  }

  function Ma(b) {
    Lb(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)Ma(b[a])
  }

  function lc(b, a, c, d) {
    if (D(d))throw Hb("offargs");
    var e = pa(b, "events");
    pa(b, "handle") && (F(a) ? r(e, function (a, c) {
      bb(b, c, a);
      delete e[c]
    }) : r(a.split(" "), function (a) {
      F(c) ? (bb(b, a, e[a]), delete e[a]) : Ua(e[a] || [], c)
    }))
  }

  function Lb(b, a) {
    var c = b.ng339, d = cb[c];
    d && (a ? delete cb[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), lc(b)), delete cb[c], b.ng339 = u))
  }

  function pa(b, a, c) {
    var d =
      b.ng339, d = cb[d || -1];
    if (D(c))d || (b.ng339 = d = ++me, d = cb[d] = {}), d[a] = c; else return d && d[a]
  }

  function Mb(b, a, c) {
    var d = pa(b, "data"), e = D(c), f = !e && D(a), g = f && !T(a);
    d || g || pa(b, "data", d = {});
    if (e)d[a] = c; else if (f) {
      if (g)return d && d[a];
      E(d, a)
    } else return d
  }

  function Nb(b, a) {
    return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
  }

  function ob(b, a) {
    a && b.setAttribute && r(a.split(" "), function (a) {
      b.setAttribute("class", $((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
        " ").replace(" " + $(a) + " ", " ")))
    })
  }

  function pb(b, a) {
    if (a && b.setAttribute) {
      var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      r(a.split(" "), function (a) {
        a = $(a);
        -1 === c.indexOf(" " + a + " ") && (c += a + " ")
      });
      b.setAttribute("class", $(c))
    }
  }

  function Jb(b, a) {
    if (a) {
      a = a.nodeName || !D(a.length) || Ja(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)b.push(a[c])
    }
  }

  function mc(b, a) {
    return qb(b, "$" + (a || "ngController") + "Controller")
  }

  function qb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = L(a) ? a : [a]; b;) {
      for (var d =
        0, e = a.length; d < e; d++)if ((c = A.data(b, a[d])) !== u)return c;
      b = b.parentNode || 11 === b.nodeType && b.host
    }
  }

  function nc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)Ma(c[a]);
    for (; b.firstChild;)b.removeChild(b.firstChild)
  }

  function oc(b, a) {
    var c = rb[a.toLowerCase()];
    return c && pc[b.nodeName] && c
  }

  function ne(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0
      });
      c.target || (c.target = c.srcElement || X);
      if (F(c.defaultPrevented)) {
        var f =
          c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          f.call(c)
        };
        c.defaultPrevented = !1
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue
      };
      var g = ha(a[e || c.type] || []);
      r(g, function (a) {
        a.call(b, c)
      });
      8 >= R ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
    };
    c.elem = b;
    return c
  }

  function Na(b, a) {
    var c = typeof b, d;
    "function" == c || "object" == c && null !== b ? "function" == typeof(d =
      b.$$hashKey) ? d = b.$$hashKey() : d === u && (d = b.$$hashKey = (a || ib)()) : d = b;
    return c + ":" + d
  }

  function db(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c
      }
    }
    r(b, this.put, this)
  }

  function qc(b) {
    var a, c;
    "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(oe, ""), c = c.match(pe), r(c[1].split(qe), function (b) {
      b.replace(re, function (b, c, d) {
        a.push(d)
      })
    })), b.$inject = a) : L(b) ? (c = b.length - 1, Ya(b[c], "fn"), a = b.slice(0, c)) : Ya(b, "fn", !0);
    return a
  }

  function ec(b) {
    function a(a) {
      return function (b, c) {
        if (T(b))r(b,
          Yb(a)); else return a(b, c)
      }
    }

    function c(a, b) {
      Ea(a, "service");
      if (N(b) || L(b))b = n.instantiate(b);
      if (!b.$get)throw eb("pget", a);
      return l[a + h] = b
    }

    function d(a, b) {
      return c(a, {$get: b})
    }

    function e(a) {
      var b = [], c, d, f, h;
      r(a, function (a) {
        if (!m.get(a)) {
          m.put(a, !0);
          try {
            if (G(a))for (c = $a(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, h = d.length; f < h; f++) {
              var g = d[f], k = n.get(g[0]);
              k[g[1]].apply(k, g[2])
            } else N(a) ? b.push(n.invoke(a)) : L(a) ? b.push(n.invoke(a)) : Ya(a, "module")
          } catch (p) {
            throw L(a) && (a =
              a[a.length - 1]), p.message && (p.stack && -1 == p.stack.indexOf(p.message)) && (p = p.message + "\n" + p.stack), eb("modulerr", a, p.stack || p.message || p);
          }
        }
      });
      return b
    }

    function f(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === g)throw eb("cdep", d + " <- " + k.join(" <- "));
          return a[d]
        }
        try {
          return k.unshift(d), a[d] = g, a[d] = b(d)
        } catch (e) {
          throw a[d] === g && delete a[d], e;
        } finally {
          k.shift()
        }
      }

      function d(a, b, e) {
        var f = [], h = qc(a), g, k, p;
        k = 0;
        for (g = h.length; k < g; k++) {
          p = h[k];
          if ("string" !== typeof p)throw eb("itkn", p);
          f.push(e && e.hasOwnProperty(p) ?
            e[p] : c(p))
        }
        L(a) && (a = a[g]);
        return a.apply(b, f)
      }

      return {
        invoke: d, instantiate: function (a, b) {
          var c = function () {
          }, e;
          c.prototype = (L(a) ? a[a.length - 1] : a).prototype;
          c = new c;
          e = d(a, c, b);
          return T(e) || N(e) ? e : c
        }, get: c, annotate: qc, has: function (b) {
          return l.hasOwnProperty(b + h) || a.hasOwnProperty(b)
        }
      }
    }

    var g = {}, h = "Provider", k = [], m = new db([], !0), l = {
      $provide: {
        provider: a(c), factory: a(d), service: a(function (a, b) {
          return d(a, ["$injector", function (a) {
            return a.instantiate(b)
          }])
        }), value: a(function (a, b) {
          return d(a, aa(b))
        }), constant: a(function (a,
                                  b) {
          Ea(a, "constant");
          l[a] = b;
          q[a] = b
        }), decorator: function (a, b) {
          var c = n.get(a + h), d = c.$get;
          c.$get = function () {
            var a = p.invoke(d, c);
            return p.invoke(b, null, {$delegate: a})
          }
        }
      }
    }, n = l.$injector = f(l, function () {
      throw eb("unpr", k.join(" <- "));
    }), q = {}, p = q.$injector = f(q, function (a) {
      a = n.get(a + h);
      return p.invoke(a.$get, a)
    });
    r(e(b), function (a) {
      p.invoke(a || v)
    });
    return p
  }

  function Kd() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1
    };
    this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
      function e(a) {
        var b = null;
        r(a, function (a) {
          b || "a" !== x(a.nodeName) || (b = a)
        });
        return b
      }

      function f() {
        var b = c.hash(), d;
        b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
      }

      var g = a.document;
      b && d.$watch(function () {
        return c.hash()
      }, function () {
        d.$evalAsync(f)
      });
      return f
    }]
  }

  function ge() {
    this.$get = ["$$rAF", "$timeout", function (b, a) {
      return b.supported ? function (a) {
        return b(a)
      } : function (b) {
        return a(b, 0, !1)
      }
    }]
  }

  function se(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null,
          wa.call(arguments, 1))
      } finally {
        if (s--, 0 === s)for (; J.length;)try {
          J.pop()()
        } catch (b) {
          c.error(b)
        }
      }
    }

    function f(a, b) {
      (function ea() {
        r(w, function (a) {
          a()
        });
        t = b(ea, a)
      })()
    }

    function g() {
      y != h.url() && (y = h.url(), r(ba, function (a) {
        a(h.url())
      }))
    }

    var h = this, k = a[0], m = b.location, l = b.history, n = b.setTimeout, q = b.clearTimeout, p = {};
    h.isMock = !1;
    var s = 0, J = [];
    h.$$completeOutstandingRequest = e;
    h.$$incOutstandingRequestCount = function () {
      s++
    };
    h.notifyWhenNoOutstandingRequests = function (a) {
      r(w, function (a) {
        a()
      });
      0 === s ? a() : J.push(a)
    };
    var w = [], t;
    h.addPollFn = function (a) {
      F(t) && f(100, n);
      w.push(a);
      return a
    };
    var y = m.href, K = a.find("base"), B = null;
    h.url = function (a, c) {
      m !== b.location && (m = b.location);
      l !== b.history && (l = b.history);
      if (a) {
        if (y != a) {
          var e = y && Ga(y) === Ga(a);
          y = a;
          !e && d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), K.attr("href", K.attr("href"))) : (e || (B = a), c ? m.replace(a) : m.href = a);
          return h
        }
      } else return B || m.href.replace(/%27/g, "'")
    };
    var ba = [], O = !1;
    h.onUrlChange = function (a) {
      if (!O) {
        if (d.history)A(b).on("popstate", g);
        if (d.hashchange)A(b).on("hashchange",
          g); else h.addPollFn(g);
        O = !0
      }
      ba.push(a);
      return a
    };
    h.$$checkUrlChange = g;
    h.baseHref = function () {
      var a = K.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    var M = {}, ca = "", P = h.baseHref();
    h.cookies = function (a, b) {
      var d, e, f, h;
      if (a)b === u ? k.cookie = escape(a) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : G(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + P).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
        if (k.cookie !==
          ca)for (ca = k.cookie, d = ca.split("; "), M = {}, f = 0; f < d.length; f++)e = d[f], h = e.indexOf("="), 0 < h && (a = unescape(e.substring(0, h)), M[a] === u && (M[a] = unescape(e.substring(h + 1))));
        return M
      }
    };
    h.defer = function (a, b) {
      var c;
      s++;
      c = n(function () {
        delete p[c];
        e(a)
      }, b || 0);
      p[c] = !0;
      return c
    };
    h.defer.cancel = function (a) {
      return p[a] ? (delete p[a], q(a), e(v), !0) : !1
    }
  }

  function Md() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
      return new se(b, d, a, c)
    }]
  }

  function Nd() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a !=
          n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }

        if (b in a)throw z("$cacheFactory")("iid", b);
        var g = 0, h = E({}, d, {id: b}), k = {}, m = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, q = null;
        return a[b] = {
          put: function (a, b) {
            if (m < Number.MAX_VALUE) {
              var c = l[a] || (l[a] = {key: a});
              e(c)
            }
            if (!F(b))return a in k || g++, k[a] = b, g > m && this.remove(q.key), b
          }, get: function (a) {
            if (m < Number.MAX_VALUE) {
              var b = l[a];
              if (!b)return;
              e(b)
            }
            return k[a]
          }, remove: function (a) {
            if (m < Number.MAX_VALUE) {
              var b =
                l[a];
              if (!b)return;
              b == n && (n = b.p);
              b == q && (q = b.n);
              f(b.n, b.p);
              delete l[a]
            }
            delete k[a];
            g--
          }, removeAll: function () {
            k = {};
            g = 0;
            l = {};
            n = q = null
          }, destroy: function () {
            l = h = k = null;
            delete a[b]
          }, info: function () {
            return E({}, h, {size: g})
          }
        }
      }

      var a = {};
      b.info = function () {
        var b = {};
        r(a, function (a, e) {
          b[e] = a.info()
        });
        return b
      };
      b.get = function (b) {
        return a[b]
      };
      return b
    }
  }

  function ce() {
    this.$get = ["$cacheFactory", function (b) {
      return b("templates")
    }]
  }

  function gc(b, a) {
    var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
      g = /^(on[a-z]+|formaction)$/;
    this.directive = function k(a, e) {
      Ea(a, "directive");
      G(a) ? (Db(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler", function (b, d) {
        var e = [];
        r(c[a], function (c, f) {
          try {
            var g = b.invoke(c);
            N(g) ? g = {compile: aa(g)} : !g.compile && g.link && (g.compile = aa(g.link));
            g.priority = g.priority || 0;
            g.index = f;
            g.name = g.name || a;
            g.require = g.require || g.controller && g.name;
            g.restrict = g.restrict || "A";
            e.push(g)
          } catch (k) {
            d(k)
          }
        });
        return e
      }])), c[a].push(e)) : r(a, Yb(k));
      return this
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return D(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return D(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
    };
    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, l, n, q, p, s, J, w, t, y, K) {
      function B(a, b, c, d, e) {
        a instanceof
        A || (a = A(a));
        r(a, function (b, c) {
          3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
        });
        var f = O(a, b, a, c, d, e);
        ba(a, "ng-scope");
        return function (b, c, d, e) {
          Db(b, "scope");
          var g = c ? Oa.clone.call(a) : a;
          r(d, function (a, b) {
            g.data("$" + b + "Controller", a)
          });
          d = 0;
          for (var k = g.length; d < k; d++) {
            var p = g[d].nodeType;
            1 !== p && 9 !== p || g.eq(d).data("$scope", b)
          }
          c && c(g, b);
          f && f(b, g, g, e);
          return g
        }
      }

      function ba(a, b) {
        try {
          a.addClass(b)
        } catch (c) {
        }
      }

      function O(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, p, l, m, q,
            n, w;
          f = c.length;
          var s = Array(f);
          for (m = 0; m < f; m++)s[m] = c[m];
          n = m = 0;
          for (q = k.length; m < q; n++)p = s[n], c = k[m++], f = k[m++], c ? (c.scope ? (l = a.$new(), A.data(p, "$scope", l)) : l = a, w = c.transcludeOnThisElement ? M(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? M(a, b) : null, c(f, l, p, d, w)) : f && f(a, p.childNodes, u, e)
        }

        for (var k = [], p, l, m, q, n = 0; n < a.length; n++)p = new Ob, l = ca(a[n], [], p, 0 === n ? d : u, e), (f = l.length ? I(l, a[n], p, b, c, null, [], [], f) : null) && f.scope && ba(p.$$element, "ng-scope"), p = f && f.terminal || !(m = a[n].childNodes) || !m.length ?
          null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), k.push(f, p), q = q || f || p, f = null;
        return q ? g : null
      }

      function M(a, b, c) {
        return function (d, e, f) {
          var g = !1;
          d || (d = a.$new(), g = d.$$transcluded = !0);
          e = b(d, e, f, c);
          if (g)e.on("$destroy", function () {
            d.$destroy()
          });
          return e
        }
      }

      function ca(a, b, c, d, g) {
        var k = c.$attr, p;
        switch (a.nodeType) {
          case 1:
            ea(b, qa(Pa(a).toLowerCase()), "E", d, g);
            for (var l, m, q, n = a.attributes, w = 0, s = n && n.length; w < s; w++) {
              var t = !1, J = !1;
              l = n[w];
              if (!R || 8 <= R || l.specified) {
                p = l.name;
                m =
                  $(l.value);
                l = qa(p);
                if (q = U.test(l))p = nb(l.substr(6), "-");
                var y = l.replace(/(Start|End)$/, "");
                l === y + "Start" && (t = p, J = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6));
                l = qa(p.toLowerCase());
                k[l] = p;
                if (q || !c.hasOwnProperty(l))c[l] = m, oc(a, l) && (c[l] = !0);
                S(a, b, m, l);
                ea(b, l, "A", d, g, t, J)
              }
            }
            a = a.className;
            if (G(a) && "" !== a)for (; p = f.exec(a);)l = qa(p[2]), ea(b, l, "C", d, g) && (c[l] = $(p[3])), a = a.substr(p.index + p[0].length);
            break;
          case 3:
            x(b, a.nodeValue);
            break;
          case 8:
            try {
              if (p = e.exec(a.nodeValue))l = qa(p[1]), ea(b, l, "M", d,
                g) && (c[l] = $(p[2]))
            } catch (B) {
            }
        }
        b.sort(F);
        return b
      }

      function P(a, b, c) {
        var d = [], e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a)throw ja("uterdir", b, c);
            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling
          } while (0 < e)
        } else d.push(a);
        return A(d)
      }

      function C(a, b, c) {
        return function (d, e, f, g, k) {
          e = P(e[0], b, c);
          return a(d, e, f, g, k)
        }
      }

      function I(a, c, d, e, f, g, k, q, n) {
        function w(a, b, c, d) {
          if (a) {
            c && (a = C(a, c, d));
            a.require = H.require;
            a.directiveName = z;
            if (K === H || H.$$isolateScope)a = rc(a,
              {isolateScope: !0});
            k.push(a)
          }
          if (b) {
            c && (b = C(b, c, d));
            b.require = H.require;
            b.directiveName = z;
            if (K === H || H.$$isolateScope)b = rc(b, {isolateScope: !0});
            q.push(b)
          }
        }

        function t(a, b, c, d) {
          var e, f = "data", g = !1;
          if (G(b)) {
            for (; "^" == (e = b.charAt(0)) || "?" == e;)b = b.substr(1), "^" == e && (f = "inheritedData"), g = g || "?" == e;
            e = null;
            d && "data" === f && (e = d[b]);
            e = e || c[f]("$" + b + "Controller");
            if (!e && !g)throw ja("ctreq", b, a);
          } else L(b) && (e = [], r(b, function (b) {
            e.push(t(a, b, c, d))
          }));
          return e
        }

        function J(a, e, f, g, n) {
          function w(a, b) {
            var c;
            2 > arguments.length &&
            (b = a, a = u);
            Ia && (c = ca);
            return n(a, b, c)
          }

          var y, Q, B, M, C, P, ca = {}, ra;
          y = c === f ? d : ha(d, new Ob(A(f), d.$attr));
          Q = y.$$element;
          if (K) {
            var ue = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
            P = e.$new(!0);
            !I || I !== K && I !== K.$$originalDirective ? Q.data("$isolateScopeNoTemplate", P) : Q.data("$isolateScope", P);
            ba(Q, "ng-isolate-scope");
            r(K.scope, function (a, c) {
              var d = a.match(ue) || [], f = d[3] || c, g = "?" == d[2], d = d[1], k, l, n, q;
              P.$$isolateBindings[c] = d + f;
              switch (d) {
                case "@":
                  y.$observe(f, function (a) {
                    P[c] = a
                  });
                  y.$$observers[f].$$scope = e;
                  y[f] && (P[c] = b(y[f])(e));
                  break;
                case "=":
                  if (g && !y[f])break;
                  l = p(y[f]);
                  q = l.literal ? Ca : function (a, b) {
                    return a === b || a !== a && b !== b
                  };
                  n = l.assign || function () {
                    k = P[c] = l(e);
                    throw ja("nonassign", y[f], K.name);
                  };
                  k = P[c] = l(e);
                  P.$watch(function () {
                    var a = l(e);
                    q(a, P[c]) || (q(a, k) ? n(e, a = P[c]) : P[c] = a);
                    return k = a
                  }, null, l.literal);
                  break;
                case "&":
                  l = p(y[f]);
                  P[c] = function (a) {
                    return l(e, a)
                  };
                  break;
                default:
                  throw ja("iscp", K.name, c, a);
              }
            })
          }
          ra = n && w;
          O && r(O, function (a) {
            var b = {$scope: a === K || a.$$isolateScope ? P : e, $element: Q, $attrs: y, $transclude: ra}, c;
            C = a.controller;
            "@" == C && (C = y[a.name]);
            c = s(C, b);
            ca[a.name] = c;
            Ia || Q.data("$" + a.name + "Controller", c);
            a.controllerAs && (b.$scope[a.controllerAs] = c)
          });
          g = 0;
          for (B = k.length; g < B; g++)try {
            M = k[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra)
          } catch (H) {
            l(H, ia(Q))
          }
          g = e;
          K && (K.template || null === K.templateUrl) && (g = P);
          a && a(g, f.childNodes, u, n);
          for (g = q.length - 1; 0 <= g; g--)try {
            M = q[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra)
          } catch (D) {
            l(D, ia(Q))
          }
        }

        n = n || {};
        for (var y = -Number.MAX_VALUE,
               M, O = n.controllerDirectives, K = n.newIsolateScopeDirective, I = n.templateDirective, ea = n.nonTlbTranscludeDirective, F = !1, E = !1, Ia = n.hasElementTranscludeDirective, x = d.$$element = A(c), H, z, V, S = e, R, Ha = 0, sa = a.length; Ha < sa; Ha++) {
          H = a[Ha];
          var U = H.$$start, Y = H.$$end;
          U && (x = P(c, U, Y));
          V = u;
          if (y > H.priority)break;
          if (V = H.scope)M = M || H, H.templateUrl || (fb("new/isolated scope", K, H, x), T(V) && (K = H));
          z = H.name;
          !H.templateUrl && H.controller && (V = H.controller, O = O || {}, fb("'" + z + "' controller", O[z], H, x), O[z] = H);
          if (V = H.transclude)F = !0, H.$$tlb ||
          (fb("transclusion", ea, H, x), ea = H), "element" == V ? (Ia = !0, y = H.priority, V = x, x = d.$$element = A(X.createComment(" " + z + ": " + d[z] + " ")), c = x[0], ra(f, wa.call(V, 0), c), S = B(V, e, y, g && g.name, {nonTlbTranscludeDirective: ea})) : (V = A(Kb(c)).contents(), x.empty(), S = B(V, e));
          if (H.template)if (E = !0, fb("template", I, H, x), I = H, V = N(H.template) ? H.template(x, d) : H.template, V = W(V), H.replace) {
            g = H;
            V = Ib.test(V) ? A($(V)) : [];
            c = V[0];
            if (1 != V.length || 1 !== c.nodeType)throw ja("tplrt", z, "");
            ra(f, x, c);
            sa = {$attr: {}};
            V = ca(c, [], sa);
            var Z = a.splice(Ha +
            1, a.length - (Ha + 1));
            K && D(V);
            a = a.concat(V).concat(Z);
            v(d, sa);
            sa = a.length
          } else x.html(V);
          if (H.templateUrl)E = !0, fb("template", I, H, x), I = H, H.replace && (g = H), J = te(a.splice(Ha, a.length - Ha), x, d, f, F && S, k, q, {
            controllerDirectives: O,
            newIsolateScopeDirective: K,
            templateDirective: I,
            nonTlbTranscludeDirective: ea
          }), sa = a.length; else if (H.compile)try {
            R = H.compile(x, d, S), N(R) ? w(null, R, U, Y) : R && w(R.pre, R.post, U, Y)
          } catch (ve) {
            l(ve, ia(x))
          }
          H.terminal && (J.terminal = !0, y = Math.max(y, H.priority))
        }
        J.scope = M && !0 === M.scope;
        J.transcludeOnThisElement =
          F;
        J.templateOnThisElement = E;
        J.transclude = S;
        n.hasElementTranscludeDirective = Ia;
        return J
      }

      function D(a) {
        for (var b = 0, c = a.length; b < c; b++)a[b] = $b(a[b], {$$isolateScope: !0})
      }

      function ea(b, e, f, g, p, m, n) {
        if (e === p)return null;
        p = null;
        if (c.hasOwnProperty(e)) {
          var q;
          e = a.get(e + d);
          for (var w = 0, s = e.length; w < s; w++)try {
            q = e[w], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (m && (q = $b(q, {
              $$start: m,
              $$end: n
            })), b.push(q), p = q)
          } catch (y) {
            l(y)
          }
        }
        return p
      }

      function v(a, b) {
        var c = b.$attr, d = a.$attr, e = a.$$element;
        r(a, function (d, e) {
          "$" !=
          e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        });
        r(b, function (b, f) {
          "class" == f ? (ba(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function te(a, b, c, d, e, f, g, k) {
        var p = [], l, m, w = b[0], s = a.shift(), y = E({}, s, {
          templateUrl: null,
          transclude: null,
          replace: null,
          $$originalDirective: s
        }), J = N(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl;
        b.empty();
        n.get(t.getTrustedResourceUrl(J), {cache: q}).success(function (q) {
          var n, t;
          q = W(q);
          if (s.replace) {
            q = Ib.test(q) ? A($(q)) : [];
            n = q[0];
            if (1 != q.length || 1 !== n.nodeType)throw ja("tplrt", s.name, J);
            q = {$attr: {}};
            ra(d, b, n);
            var B = ca(n, [], q);
            T(s.scope) && D(B);
            a = B.concat(a);
            v(c, q)
          } else n = w, b.html(q);
          a.unshift(y);
          l = I(a, n, c, e, b, s, f, g, k);
          r(d, function (a, c) {
            a == n && (d[c] = b[0])
          });
          for (m = O(b[0].childNodes, e); p.length;) {
            q = p.shift();
            t = p.shift();
            var K = p.shift(), C = p.shift(), B = b[0];
            if (t !== w) {
              var P = t.className;
              k.hasElementTranscludeDirective &&
              s.replace || (B = Kb(n));
              ra(K, A(t), B);
              ba(A(B), P)
            }
            t = l.transcludeOnThisElement ? M(q, l.transclude, C) : C;
            l(m, q, B, d, t)
          }
          p = null
        }).error(function (a, b, c, d) {
          throw ja("tpload", d.url);
        });
        return function (a, b, c, d, e) {
          a = e;
          p ? (p.push(b), p.push(c), p.push(d), p.push(a)) : (l.transcludeOnThisElement && (a = M(b, l.transclude, e)), l(m, b, c, d, a))
        }
      }

      function F(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function fb(a, b, c, d) {
        if (b)throw ja("multidir", b.name, c.name, a, ia(d));
      }

      function x(a,
                 c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0, compile: function (a) {
            var b = a.parent().length;
            b && ba(a.parent(), "ng-binding");
            return function (a, c) {
              var e = c.parent(), f = e.data("$binding") || [];
              f.push(d);
              e.data("$binding", f);
              b || ba(e, "ng-binding");
              a.$watch(d, function (a) {
                c[0].nodeValue = a
              })
            }
          }
        })
      }

      function z(a, b) {
        if ("srcdoc" == b)return t.HTML;
        var c = Pa(a);
        if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b))return t.RESOURCE_URL
      }

      function S(a, c, d, e) {
        var f = b(d, !0);
        if (f) {
          if ("multiple" === e && "SELECT" ===
            Pa(a))throw ja("selmulti", ia(a));
          c.push({
            priority: 100, compile: function () {
              return {
                pre: function (c, d, k) {
                  d = k.$$observers || (k.$$observers = {});
                  if (g.test(e))throw ja("nodomevents");
                  if (f = b(k[e], !0, z(a, e)))k[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                    "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a)
                  })
                }
              }
            }
          })
        }
      }

      function ra(a, b, c) {
        var d = b[0], e = b.length, f = d.parentNode, g, k;
        if (a)for (g = 0, k = a.length; g < k; g++)if (a[g] == d) {
          a[g++] = c;
          k = g + e - 1;
          for (var p = a.length; g <
          p; g++, k++)k < p ? a[g] = a[k] : delete a[g];
          a.length -= e - 1;
          break
        }
        f && f.replaceChild(c, d);
        a = X.createDocumentFragment();
        a.appendChild(d);
        c[A.expando] = d[A.expando];
        d = 1;
        for (e = b.length; d < e; d++)f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
        b[0] = c;
        b.length = 1
      }

      function rc(a, b) {
        return E(function () {
          return a.apply(null, arguments)
        }, a, b)
      }

      var Ob = function (a, b) {
        this.$$element = a;
        this.$attr = b || {}
      };
      Ob.prototype = {
        $normalize: qa, $addClass: function (a) {
          a && 0 < a.length && y.addClass(this.$$element, a)
        }, $removeClass: function (a) {
          a && 0 <
          a.length && y.removeClass(this.$$element, a)
        }, $updateClass: function (a, b) {
          var c = sc(a, b), d = sc(b, a);
          0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
        }, $set: function (a, b, c, d) {
          var e = oc(this.$$element[0], a);
          e && (this.$$element.prop(a, b), d = e);
          this[a] = b;
          d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = nb(a, "-"));
          e = Pa(this.$$element);
          if ("A" === e && "href" === a || "IMG" === e && "src" === a)this[a] = b = K(b, "src" === a);
          !1 !== c && (null === b || b === u ? this.$$element.removeAttr(d) :
            this.$$element.attr(d, b));
          (c = this.$$observers) && r(c[a], function (a) {
            try {
              a(b)
            } catch (c) {
              l(c)
            }
          })
        }, $observe: function (a, b) {
          var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
          e.push(b);
          J.$evalAsync(function () {
            e.$$inter || b(c[a])
          });
          return b
        }
      };
      var sa = b.startSymbol(), Ia = b.endSymbol(), W = "{{" == sa || "}}" == Ia ? ga : function (a) {
        return a.replace(/\{\{/g, sa).replace(/}}/g, Ia)
      }, U = /^ngAttr[A-Z]/;
      return B
    }]
  }

  function qa(b) {
    return ab(b.replace(we, ""))
  }

  function sc(b, a) {
    var c = "", d = b.split(/\s+/), e = a.split(/\s+/),
      f = 0;
    a:for (; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
      c += (0 < c.length ? " " : "") + g
    }
    return c
  }

  function Od() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      Ea(a, "controller");
      T(a) ? E(b, a) : b[a] = d
    };
    this.$get = ["$injector", "$window", function (c, d) {
      return function (e, f) {
        var g, h, k;
        G(e) && (g = e.match(a), h = g[1], k = g[3], e = b.hasOwnProperty(h) ? b[h] : fc(f.$scope, h, !0) || fc(d, h, !0), Ya(e, h, !0));
        g = c.instantiate(e, f);
        if (k) {
          if (!f || "object" !== typeof f.$scope)throw z("$controller")("noscp",
            h || e.name, k);
          f.$scope[k] = g
        }
        return g
      }
    }]
  }

  function Pd() {
    this.$get = ["$window", function (b) {
      return A(b.document)
    }]
  }

  function Qd() {
    this.$get = ["$log", function (b) {
      return function (a, c) {
        b.error.apply(b, arguments)
      }
    }]
  }

  function tc(b) {
    var a = {}, c, d, e;
    if (!b)return a;
    r(b.split("\n"), function (b) {
      e = b.indexOf(":");
      c = x($(b.substr(0, e)));
      d = $(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ", " + d : d)
    });
    return a
  }

  function uc(b) {
    var a = T(b) ? b : u;
    return function (c) {
      a || (a = tc(b));
      return c ? a[x(c)] || null : a
    }
  }

  function vc(b, a, c) {
    if (N(c))return c(b,
      a);
    r(c, function (c) {
      b = c(b, a)
    });
    return b
  }

  function Td() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {"Content-Type": "application/json;charset=utf-8"}, e = this.defaults = {
      transformResponse: [function (d) {
        G(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = ac(d)));
        return d
      }],
      transformRequest: [function (a) {
        return T(a) && "[object File]" !== Ba.call(a) && "[object Blob]" !== Ba.call(a) ? oa(a) : a
      }],
      headers: {common: {Accept: "application/json, text/plain, */*"}, post: ha(d), put: ha(d), patch: ha(d)},
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN"
    }, f = this.interceptors = [], g = this.responseInterceptors = [];
    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, d, n, q) {
      function p(a) {
        function b(a) {
          var d = E({}, a, {data: vc(a.data, a.headers, c.transformResponse)});
          return 200 <= a.status && 300 > a.status ? d : n.reject(d)
        }

        var c = {
          method: "get",
          transformRequest: e.transformRequest,
          transformResponse: e.transformResponse
        }, d = function (a) {
          var b = e.headers, c = E({}, a.headers), d, f, b = E({}, b.common, b[x(a.method)]);
          a:for (d in b) {
            a = x(d);
            for (f in c)if (x(f) === a)continue a;
            c[d] = b[d]
          }
          (function (a) {
            var b;
            r(a, function (c, d) {
              N(c) && (b = c(), null != b ? a[d] = b : delete a[d])
            })
          })(c);
          return c
        }(a);
        E(c, a);
        c.headers = d;
        c.method = La(c.method);
        var f = [function (a) {
          d = a.headers;
          var c = vc(a.data, uc(d), a.transformRequest);
          F(c) && r(d, function (a, b) {
            "content-type" === x(b) && delete d[b]
          });
          F(a.withCredentials) && !F(e.withCredentials) && (a.withCredentials = e.withCredentials);
          return s(a, c, d).then(b, b)
        }, u], g = n.when(c);
        for (r(t, function (a) {
          (a.request || a.requestError) &&
          f.unshift(a.request, a.requestError);
          (a.response || a.responseError) && f.push(a.response, a.responseError)
        }); f.length;) {
          a = f.shift();
          var h = f.shift(), g = g.then(a, h)
        }
        g.success = function (a) {
          g.then(function (b) {
            a(b.data, b.status, b.headers, c)
          });
          return g
        };
        g.error = function (a) {
          g.then(null, function (b) {
            a(b.data, b.status, b.headers, c)
          });
          return g
        };
        return g
      }

      function s(c, f, g) {
        function m(a, b, c, e) {
          C && (200 <= a && 300 > a ? C.put(A, [a, b, tc(c), e]) : C.remove(A));
          q(b, a, c, e);
          d.$$phase || d.$apply()
        }

        function q(a, b, d, e) {
          b = Math.max(b, 0);
          (200 <=
          b && 300 > b ? t.resolve : t.reject)({data: a, status: b, headers: uc(d), config: c, statusText: e})
        }

        function s() {
          var a = Ta(p.pendingRequests, c);
          -1 !== a && p.pendingRequests.splice(a, 1)
        }

        var t = n.defer(), r = t.promise, C, I, A = J(c.url, c.params);
        p.pendingRequests.push(c);
        r.then(s, s);
        !c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (C = T(c.cache) ? c.cache : T(e.cache) ? e.cache : w);
        if (C)if (I = C.get(A), D(I)) {
          if (I && N(I.then))return I.then(s, s), I;
          L(I) ? q(I[1], I[0], ha(I[2]), I[3]) : q(I, 200, {}, "OK")
        } else C.put(A, r);
        F(I) &&
        ((I = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : u) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = I), a(c.method, A, f, m, g, c.timeout, c.withCredentials, c.responseType));
        return r
      }

      function J(a, b) {
        if (!b)return a;
        var c = [];
        Sc(b, function (a, b) {
          null === a || F(a) || (L(a) || (a = [a]), r(a, function (a) {
            T(a) && (a = va(a) ? a.toISOString() : oa(a));
            c.push(Da(b) + "=" + Da(a))
          }))
        });
        0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
        return a
      }

      var w = c("$http"), t = [];
      r(f, function (a) {
        t.unshift(G(a) ? q.get(a) : q.invoke(a))
      });
      r(g,
        function (a, b) {
          var c = G(a) ? q.get(a) : q.invoke(a);
          t.splice(b, 0, {
            response: function (a) {
              return c(n.when(a))
            }, responseError: function (a) {
              return c(n.reject(a))
            }
          })
        });
      p.pendingRequests = [];
      (function (a) {
        r(arguments, function (a) {
          p[a] = function (b, c) {
            return p(E(c || {}, {method: a, url: b}))
          }
        })
      })("get", "delete", "head", "jsonp");
      (function (a) {
        r(arguments, function (a) {
          p[a] = function (b, c, d) {
            return p(E(d || {}, {method: a, url: b, data: c}))
          }
        })
      })("post", "put", "patch");
      p.defaults = e;
      return p
    }]
  }

  function xe(b) {
    if (8 >= R && (!b.match(/^(get|post|head|put|delete|options)$/i) || !W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");
    if (W.XMLHttpRequest)return new W.XMLHttpRequest;
    throw z("$httpBackend")("noxhr");
  }

  function Ud() {
    this.$get = ["$browser", "$window", "$document", function (b, a, c) {
      return ye(b, xe, b.defer, a.angular.callbacks, c[0])
    }]
  }

  function ye(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement("script"), g = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;
      g = function (a) {
        bb(f, "load", g);
        bb(f, "error", g);
        e.body.removeChild(f);
        f = null;
        var h = -1, s = "unknown";
        a && ("load" !==
        a.type || d[b].called || (a = {type: "error"}), s = a.type, h = "error" === a.type ? 404 : 200);
        c && c(h, s)
      };
      sb(f, "load", g);
      sb(f, "error", g);
      8 >= R && (f.onreadystatechange = function () {
        G(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({type: "load"}))
      });
      e.body.appendChild(f);
      return g
    }

    var g = -1;
    return function (e, k, m, l, n, q, p, s) {
      function J() {
        t = g;
        K && K();
        B && B.abort()
      }

      function w(a, d, e, f, g) {
        O && c.cancel(O);
        K = B = null;
        0 === d && (d = e ? 200 : "file" == xa(k).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, f, g || "");
        b.$$completeOutstandingRequest(v)
      }

      var t;
      b.$$incOutstandingRequestCount();
      k = k || b.url();
      if ("jsonp" == x(e)) {
        var y = "_" + (d.counter++).toString(36);
        d[y] = function (a) {
          d[y].data = a;
          d[y].called = !0
        };
        var K = f(k.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function (a, b) {
          w(l, a, d[y].data, "", b);
          d[y] = v
        })
      } else {
        var B = a(e);
        B.open(e, k, !0);
        r(n, function (a, b) {
          D(a) && B.setRequestHeader(b, a)
        });
        B.onreadystatechange = function () {
          if (B && 4 == B.readyState) {
            var a = null, b = null, c = "";
            t !== g && (a = B.getAllResponseHeaders(), b = "response"in B ? B.response : B.responseText);
            t === g &&
            10 > R || (c = B.statusText);
            w(l, t || B.status, b, a, c)
          }
        };
        p && (B.withCredentials = !0);
        if (s)try {
          B.responseType = s
        } catch (ba) {
          if ("json" !== s)throw ba;
        }
        B.send(m || null)
      }
      if (0 < q)var O = c(J, q); else q && N(q.then) && q.then(J)
    }
  }

  function Rd() {
    var b = "{{", a = "}}";
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a
    };
    this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
      function f(f, m, l) {
        for (var n, q, p = 0, s = [], J = f.length, w = !1, t = []; p < J;)-1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a,
          n + g)) ? (p != n && s.push(f.substring(p, n)), s.push(p = c(w = f.substring(n + g, q))), p.exp = w, p = q + h, w = !0) : (p != J && s.push(f.substring(p)), p = J);
        (J = s.length) || (s.push(""), J = 1);
        if (l && 1 < s.length)throw wc("noconcat", f);
        if (!m || w)return t.length = J, p = function (a) {
          try {
            for (var b = 0, c = J, g; b < c; b++) {
              if ("function" == typeof(g = s[b]))if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null == g)g = ""; else switch (typeof g) {
                case "string":
                  break;
                case "number":
                  g = "" + g;
                  break;
                default:
                  g = oa(g)
              }
              t[b] = g
            }
            return t.join("")
          } catch (h) {
            a = wc("interr", f, h.toString()),
              d(a)
          }
        }, p.exp = f, p.parts = s, p
      }

      var g = b.length, h = a.length;
      f.startSymbol = function () {
        return b
      };
      f.endSymbol = function () {
        return a
      };
      return f
    }]
  }

  function Sd() {
    this.$get = ["$rootScope", "$window", "$q", function (b, a, c) {
      function d(d, g, h, k) {
        var m = a.setInterval, l = a.clearInterval, n = c.defer(), q = n.promise, p = 0, s = D(k) && !k;
        h = D(h) ? h : 0;
        q.then(null, null, d);
        q.$$intervalId = m(function () {
          n.notify(p++);
          0 < h && p >= h && (n.resolve(p), l(q.$$intervalId), delete e[q.$$intervalId]);
          s || b.$apply()
        }, g);
        e[q.$$intervalId] = n;
        return q
      }

      var e = {};
      d.cancel =
        function (b) {
          return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1
        };
      return d
    }]
  }

  function ad() {
    this.$get = function () {
      return {
        id: "en-us",
        NUMBER_FORMATS: {
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: "",
            posSuf: "",
            negPre: "-",
            negSuf: "",
            gSize: 3,
            lgSize: 3
          }, {
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: "\u00a4",
            posSuf: "",
            negPre: "(\u00a4",
            negSuf: ")",
            gSize: 3,
            lgSize: 3
          }],
          CURRENCY_SYM: "$"
        },
        DATETIME_FORMATS: {
          MONTH: "January February March April May June July August September October November December".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          AMPMS: ["AM", "PM"],
          medium: "MMM d, y h:mm:ss a",
          "short": "M/d/yy h:mm a",
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          mediumDate: "MMM d, y",
          shortDate: "M/d/yy",
          mediumTime: "h:mm:ss a",
          shortTime: "h:mm a"
        },
        pluralCat: function (b) {
          return 1 === b ? "one" : "other"
        }
      }
    }
  }

  function Qb(b) {
    b = b.split("/");
    for (var a = b.length; a--;)b[a] =
      mb(b[a]);
    return b.join("/")
  }

  function xc(b, a, c) {
    b = xa(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = U(b.port) || ze[b.protocol] || null
  }

  function yc(b, a, c) {
    var d = "/" !== b.charAt(0);
    d && (b = "/" + b);
    b = xa(b, c);
    a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = cc(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
  }

  function ta(b, a) {
    if (0 === a.indexOf(b))return a.substr(b.length)
  }

  function Ga(b) {
    var a =
      b.indexOf("#");
    return -1 == a ? b : b.substr(0, a)
  }

  function Rb(b) {
    return b.substr(0, Ga(b).lastIndexOf("/") + 1)
  }

  function zc(b, a) {
    this.$$html5 = !0;
    a = a || "";
    var c = Rb(b);
    xc(b, this, b);
    this.$$parse = function (a) {
      var e = ta(c, a);
      if (!G(e))throw Sb("ipthprfx", a, c);
      yc(e, this, b);
      this.$$path || (this.$$path = "/");
      this.$$compose()
    };
    this.$$compose = function () {
      var a = Cb(this.$$search), b = this.$$hash ? "#" + mb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) + (a ? "?" + a : "") + b;
      this.$$absUrl = c + this.$$url.substr(1)
    };
    this.$$parseLinkUrl = function (d,
                                    e) {
      var f, g;
      (f = ta(b, d)) !== u ? (g = f, g = (f = ta(a, f)) !== u ? c + (ta("/", f) || f) : b + g) : (f = ta(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
      g && this.$$parse(g);
      return !!g
    }
  }

  function Tb(b, a) {
    var c = Rb(b);
    xc(b, this, b);
    this.$$parse = function (d) {
      var e = ta(b, d) || ta(c, d), e = "#" == e.charAt(0) ? ta(a, e) : this.$$html5 ? e : "";
      if (!G(e))throw Sb("ihshprfx", d, a);
      yc(e, this, b);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ""));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose()
    };
    this.$$compose = function () {
      var c = Cb(this.$$search),
        e = this.$$hash ? "#" + mb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
    };
    this.$$parseLinkUrl = function (a, c) {
      return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1
    }
  }

  function Ac(b, a) {
    this.$$html5 = !0;
    Tb.apply(this, arguments);
    var c = Rb(b);
    this.$$parseLinkUrl = function (d, e) {
      var f, g;
      b == Ga(d) ? f = d : (g = ta(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
      f && this.$$parse(f);
      return !!f
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? "#" + mb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) +
      (c ? "?" + c : "") + e;
      this.$$absUrl = b + a + this.$$url
    }
  }

  function tb(b) {
    return function () {
      return this[b]
    }
  }

  function Bc(b, a) {
    return function (c) {
      if (F(c))return this[b];
      this[b] = a(c);
      this.$$compose();
      return this
    }
  }

  function Vd() {
    var b = "", a = !1;
    this.hashPrefix = function (a) {
      return D(a) ? (b = a, this) : b
    };
    this.html5Mode = function (b) {
      return D(b) ? (a = b, this) : a
    };
    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, f) {
      function g(a) {
        c.$broadcast("$locationChangeSuccess", h.absUrl(), a)
      }

      var h, k = d.baseHref(), m = d.url();
      a ? (k = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (k || "/"), e = e.history ? zc : Ac) : (k = Ga(m), e = Tb);
      h = new e(k, "#" + b);
      h.$$parseLinkUrl(m, m);
      var l = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
          for (var b = A(a.target); "a" !== x(b[0].nodeName);)if (b[0] === f[0] || !(b = b.parent())[0])return;
          var e = b.prop("href"), g = b.attr("href") || b.attr("xlink:href");
          T(e) && "[object SVGAnimatedString]" === e.toString() && (e = xa(e.animVal).href);
          l.test(e) || (!e || (b.attr("target") || a.isDefaultPrevented()) || !h.$$parseLinkUrl(e, g)) || (a.preventDefault(), h.absUrl() != d.url() && (c.$apply(), W.angular["ff-684208-preventDefault"] = !0))
        }
      });
      h.absUrl() != m && d.url(h.absUrl(), !0);
      d.onUrlChange(function (a) {
        h.absUrl() != a && (c.$evalAsync(function () {
          var b = h.absUrl();
          h.$$parse(a);
          c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : g(b)
        }), c.$$phase || c.$digest())
      });
      var n = 0;
      c.$watch(function () {
        var a = d.url(), b = h.$$replace;
        n && a == h.absUrl() || (n++, c.$evalAsync(function () {
          c.$broadcast("$locationChangeStart",
            h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), g(a))
        }));
        h.$$replace = !1;
        return n
      });
      return h
    }]
  }

  function Wd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return D(a) ? (b = a, this) : b
    };
    this.$get = ["$window", function (c) {
      function d(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a
      }

      function e(a) {
        var b = c.console || {}, e = b[a] || b.log || v;
        a = !1;
        try {
          a = !!e.apply
        } catch (k) {
        }
        return a ?
          function () {
            var a = [];
            r(arguments, function (b) {
              a.push(d(b))
            });
            return e.apply(b, a)
          } : function (a, b) {
          e(a, null == b ? "" : b)
        }
      }

      return {
        log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");
          return function () {
            b && c.apply(a, arguments)
          }
        }()
      }
    }]
  }

  function ka(b, a) {
    if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw la("isecfld", a);
    return b
  }

  function ma(b, a) {
    if (b) {
      if (b.constructor === b)throw la("isecfn", a);
      if (b.document &&
        b.location && b.alert && b.setInterval)throw la("isecwindow", a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw la("isecdom", a);
      if (b === Object)throw la("isecobj", a);
    }
    return b
  }

  function ub(b, a, c, d, e) {
    ma(b, d);
    e = e || {};
    a = a.split(".");
    for (var f, g = 0; 1 < a.length; g++) {
      f = ka(a.shift(), d);
      var h = ma(b[f], d);
      h || (h = {}, b[f] = h);
      b = h;
      b.then && e.unwrapPromises && (ya(d), "$$v"in b || function (a) {
        a.then(function (b) {
          a.$$v = b
        })
      }(b), b.$$v === u && (b.$$v = {}), b = b.$$v)
    }
    f = ka(a.shift(), d);
    ma(b[f], d);
    return b[f] = c
  }

  function Qa(b) {
    return "constructor" ==
      b
  }

  function Cc(b, a, c, d, e, f, g) {
    ka(b, f);
    ka(a, f);
    ka(c, f);
    ka(d, f);
    ka(e, f);
    var h = function (a) {
      return ma(a, f)
    }, k = g.expensiveChecks, m = k || Qa(b) ? h : ga, l = k || Qa(a) ? h : ga, n = k || Qa(c) ? h : ga, q = k || Qa(d) ? h : ga, p = k || Qa(e) ? h : ga;
    return g.unwrapPromises ? function (g, h) {
      var k = h && h.hasOwnProperty(b) ? h : g, t;
      if (null == k)return k;
      (k = m(k[b])) && k.then && (ya(f), "$$v"in k || (t = k, t.$$v = u, t.then(function (a) {
        t.$$v = m(a)
      })), k = m(k.$$v));
      if (!a)return k;
      if (null == k)return u;
      (k = l(k[a])) && k.then && (ya(f), "$$v"in k || (t = k, t.$$v = u, t.then(function (a) {
        t.$$v =
          l(a)
      })), k = l(k.$$v));
      if (!c)return k;
      if (null == k)return u;
      (k = n(k[c])) && k.then && (ya(f), "$$v"in k || (t = k, t.$$v = u, t.then(function (a) {
        t.$$v = n(a)
      })), k = n(k.$$v));
      if (!d)return k;
      if (null == k)return u;
      (k = q(k[d])) && k.then && (ya(f), "$$v"in k || (t = k, t.$$v = u, t.then(function (a) {
        t.$$v = q(a)
      })), k = q(k.$$v));
      if (!e)return k;
      if (null == k)return u;
      (k = p(k[e])) && k.then && (ya(f), "$$v"in k || (t = k, t.$$v = u, t.then(function (a) {
        t.$$v = p(a)
      })), k = p(k.$$v));
      return k
    } : function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null == h)return h;
      h = m(h[b]);
      if (!a)return h;
      if (null == h)return u;
      h = l(h[a]);
      if (!c)return h;
      if (null == h)return u;
      h = n(h[c]);
      if (!d)return h;
      if (null == h)return u;
      h = q(h[d]);
      return e ? null == h ? u : h = p(h[e]) : h
    }
  }

  function Ae(b, a) {
    return function (c, d) {
      return b(c, d, ya, ma, a)
    }
  }

  function Dc(b, a, c) {
    var d = a.expensiveChecks, e = d ? Be : Ce;
    if (e.hasOwnProperty(b))return e[b];
    var f = b.split("."), g = f.length, h;
    if (a.csp)h = 6 > g ? Cc(f[0], f[1], f[2], f[3], f[4], c, a) : function (b, d) {
      var e = 0, h;
      do h = Cc(f[e++], f[e++], f[e++], f[e++], f[e++], c, a)(b, d), d = u, b = h; while (e < g);
      return h
    };
    else {
      var k = "var p;\n";
      d && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
      var m = d;
      r(f, function (b, e) {
        ka(b, c);
        var f = (e ? "s" : '((l&&l.hasOwnProperty("' + b + '"))?l:s)') + '["' + b + '"]', g = d || Qa(b);
        g && (f = "eso(" + f + ", fe)", m = !0);
        k += "if(s == null) return undefined;\ns=" + f + ";\n";
        a.unwrapPromises && (k += 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (g ? "eso(v)" : "v") + ";});\n}\n s=" + (g ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
      });
      k += "return s;";
      h = new Function("s", "l", "pw", "eso", "fe", k);
      h.toString = aa(k);
      if (m || a.unwrapPromises)h = Ae(h, c)
    }
    "hasOwnProperty" !== b && (e[b] = h);
    return h
  }

  function Xd() {
    var b = {}, a = {}, c = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0, expensiveChecks: !1};
    this.unwrapPromises = function (a) {
      return D(a) ? (c.unwrapPromises = !!a, this) : c.unwrapPromises
    };
    this.logPromiseWarnings = function (a) {
      return D(a) ? (c.logPromiseWarnings = a, this) : c.logPromiseWarnings
    };
    this.$get = ["$filter", "$sniffer", "$log", function (d, e, f) {
      c.csp = e.csp;
      var g = {
        csp: c.csp,
        unwrapPromises: c.unwrapPromises, logPromiseWarnings: c.logPromiseWarnings, expensiveChecks: !0
      };
      ya = function (a) {
        c.logPromiseWarnings && !Ec.hasOwnProperty(a) && (Ec[a] = !0, f.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
      };
      return function (e, f) {
        var m;
        switch (typeof e) {
          case "string":
            var l = f ? a : b;
            if (l.hasOwnProperty(e))return l[e];
            m = f ? g : c;
            var n = new Ub(m);
            m = (new gb(n, d, m)).parse(e);
            "hasOwnProperty" !== e && (l[e] = m);
            return m;
          case "function":
            return e;
          default:
            return v
        }
      }
    }]
  }

  function Zd() {
    this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
      return De(function (a) {
        b.$evalAsync(a)
      }, a)
    }]
  }

  function De(b, a) {
    function c(a) {
      return a
    }

    function d(a) {
      return g(a)
    }

    var e = function () {
      var g = [], m, l;
      return l = {
        resolve: function (a) {
          if (g) {
            var c = g;
            g = u;
            m = f(a);
            c.length && b(function () {
              for (var a, b = 0, d = c.length; b < d; b++)a = c[b], m.then(a[0], a[1], a[2])
            })
          }
        }, reject: function (a) {
          l.resolve(h(a))
        }, notify: function (a) {
          if (g) {
            var c = g;
            g.length && b(function () {
              for (var b, d = 0, e = c.length; d < e; d++)b =
                c[d], b[2](a)
            })
          }
        }, promise: {
          then: function (b, f, h) {
            var l = e(), J = function (d) {
              try {
                l.resolve((N(b) ? b : c)(d))
              } catch (e) {
                l.reject(e), a(e)
              }
            }, w = function (b) {
              try {
                l.resolve((N(f) ? f : d)(b))
              } catch (c) {
                l.reject(c), a(c)
              }
            }, t = function (b) {
              try {
                l.notify((N(h) ? h : c)(b))
              } catch (d) {
                a(d)
              }
            };
            g ? g.push([J, w, t]) : m.then(J, w, t);
            return l.promise
          }, "catch": function (a) {
            return this.then(null, a)
          }, "finally": function (a) {
            function b(a, c) {
              var d = e();
              c ? d.resolve(a) : d.reject(a);
              return d.promise
            }

            function d(e, f) {
              var g = null;
              try {
                g = (a || c)()
              } catch (h) {
                return b(h,
                  !1)
              }
              return g && N(g.then) ? g.then(function () {
                return b(e, f)
              }, function (a) {
                return b(a, !1)
              }) : b(e, f)
            }

            return this.then(function (a) {
              return d(a, !0)
            }, function (a) {
              return d(a, !1)
            })
          }
        }
      }
    }, f = function (a) {
      return a && N(a.then) ? a : {
        then: function (c) {
          var d = e();
          b(function () {
            d.resolve(c(a))
          });
          return d.promise
        }
      }
    }, g = function (a) {
      var b = e();
      b.reject(a);
      return b.promise
    }, h = function (c) {
      return {
        then: function (f, g) {
          var h = e();
          b(function () {
            try {
              h.resolve((N(g) ? g : d)(c))
            } catch (b) {
              h.reject(b), a(b)
            }
          });
          return h.promise
        }
      }
    };
    return {
      defer: e, reject: g,
      when: function (h, m, l, n) {
        var q = e(), p, s = function (b) {
          try {
            return (N(m) ? m : c)(b)
          } catch (d) {
            return a(d), g(d)
          }
        }, J = function (b) {
          try {
            return (N(l) ? l : d)(b)
          } catch (c) {
            return a(c), g(c)
          }
        }, w = function (b) {
          try {
            return (N(n) ? n : c)(b)
          } catch (d) {
            a(d)
          }
        };
        b(function () {
          f(h).then(function (a) {
            p || (p = !0, q.resolve(f(a).then(s, J, w)))
          }, function (a) {
            p || (p = !0, q.resolve(J(a)))
          }, function (a) {
            p || q.notify(w(a))
          })
        });
        return q.promise
      }, all: function (a) {
        var b = e(), c = 0, d = L(a) ? [] : {};
        r(a, function (a, e) {
          c++;
          f(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a,
            --c || b.resolve(d))
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a)
          })
        });
        0 === c && b.resolve(d);
        return b.promise
      }
    }
  }

  function fe() {
    this.$get = ["$window", "$timeout", function (b, a) {
      var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
        var b = c(a);
        return function () {
          d(b)
        }
      } : function (b) {
        var c = a(b, 16.66, !1);
        return function () {
          a.cancel(c)
        }
      };
      f.supported =
        e;
      return f
    }]
  }

  function Yd() {
    var b = 10, a = z("$rootScope"), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b
    };
    this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, e, f, g) {
      function h() {
        this.$id = ib();
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this["this"] = this.$root = this;
        this.$$destroyed = !1;
        this.$$asyncQueue = [];
        this.$$postDigestQueue = [];
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$isolateBindings =
        {}
      }

      function k(b) {
        if (q.$$phase)throw a("inprog", q.$$phase);
        q.$$phase = b
      }

      function m(a, b) {
        var c = f(a);
        Ya(c, b);
        return c
      }

      function l(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function n() {
      }

      h.prototype = {
        constructor: h, $new: function (a) {
          a ? (a = new h, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
            this.$$watchers = this.$$nextSibling = this.$$childHead =
              this.$$childTail = null;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$id = ib();
            this.$$childScopeClass = null
          }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass);
          a["this"] = a;
          a.$parent = this;
          a.$$prevSibling = this.$$childTail;
          this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
          return a
        }, $watch: function (a, b, d) {
          var e = m(a, "watch"), f = this.$$watchers, g = {fn: b, last: n, get: e, exp: a, eq: !!d};
          c = null;
          if (!N(b)) {
            var h = m(b || v, "listener");
            g.fn = function (a,
                             b, c) {
              h(c)
            }
          }
          if ("string" == typeof a && e.constant) {
            var k = g.fn;
            g.fn = function (a, b, c) {
              k.call(this, a, b, c);
              Ua(f, g)
            }
          }
          f || (f = this.$$watchers = []);
          f.unshift(g);
          return function () {
            Ua(f, g);
            c = null
          }
        }, $watchCollection: function (a, b) {
          var c = this, d, e, g, h = 1 < b.length, k = 0, l = f(a), m = [], n = {}, q = !0, r = 0;
          return this.$watch(function () {
            d = l(c);
            var a, b, f;
            if (T(d))if (Sa(d))for (e !== m && (e = m, r = e.length = 0, k++), a = d.length, r !== a && (k++, e.length = r = a), b = 0; b < a; b++)f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b]); else {
              e !== n && (e = n = {}, r = 0,
                k++);
              a = 0;
              for (b in d)d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b])) : (r++, e[b] = d[b], k++));
              if (r > a)for (b in k++, e)e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b])
            } else e !== d && (e = d, k++);
            return k
          }, function () {
            q ? (q = !1, b(d, d, c)) : b(d, g, c);
            if (h)if (T(d))if (Sa(d)) {
              g = Array(d.length);
              for (var a = 0; a < d.length; a++)g[a] = d[a]
            } else for (a in g = {}, d)lb.call(d, a) && (g[a] = d[a]); else g = d
          })
        }, $digest: function () {
          var d, f, h, l, m = this.$$asyncQueue, r = this.$$postDigestQueue,
            K, B, u = b, O, M = [], A, P, C;
          k("$digest");
          g.$$checkUrlChange();
          c = null;
          do {
            B = !1;
            for (O = this; m.length;) {
              try {
                C = m.shift(), C.scope.$eval(C.expression)
              } catch (I) {
                q.$$phase = null, e(I)
              }
              c = null
            }
            a:do {
              if (l = O.$$watchers)for (K = l.length; K--;)try {
                if (d = l[K])if ((f = d.get(O)) !== (h = d.last) && !(d.eq ? Ca(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))B = !0, c = d, d.last = d.eq ? Ka(f, null) : f, d.fn(f, h === n ? f : h, O), 5 > u && (A = 4 - u, M[A] || (M[A] = []), P = N(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, P += "; newVal: " + oa(f) + "; oldVal: " +
                oa(h), M[A].push(P)); else if (d === c) {
                  B = !1;
                  break a
                }
              } catch (D) {
                q.$$phase = null, e(D)
              }
              if (!(l = O.$$childHead || O !== this && O.$$nextSibling))for (; O !== this && !(l = O.$$nextSibling);)O = O.$parent
            } while (O = l);
            if ((B || m.length) && !u--)throw q.$$phase = null, a("infdig", b, oa(M));
          } while (B || m.length);
          for (q.$$phase = null; r.length;)try {
            r.shift()()
          } catch (x) {
            e(x)
          }
        }, $destroy: function () {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            this !== q && (r(this.$$listenerCount, Bb(null, l, this)), a.$$childHead ==
            this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = v, this.$on = this.$watch = function () {
              return v
            })
          }
        },
        $eval: function (a, b) {
          return f(a)(this, b)
        }, $evalAsync: function (a) {
          q.$$phase || q.$$asyncQueue.length || g.defer(function () {
            q.$$asyncQueue.length && q.$digest()
          });
          this.$$asyncQueue.push({scope: this, expression: a})
        }, $$postDigest: function (a) {
          this.$$postDigestQueue.push(a)
        }, $apply: function (a) {
          try {
            return k("$apply"), this.$eval(a)
          } catch (b) {
            e(b)
          } finally {
            q.$$phase = null;
            try {
              q.$digest()
            } catch (c) {
              throw e(c), c;
            }
          }
        }, $on: function (a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;
          do d.$$listenerCount[a] ||
          (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function () {
            var d = Ta(c, b);
            -1 !== d && (c[d] = null, l(e, 1, a))
          }
        }, $emit: function (a, b) {
          var c = [], d, f = this, g = !1, h = {
            name: a, targetScope: f, stopPropagation: function () {
              g = !0
            }, preventDefault: function () {
              h.defaultPrevented = !0
            }, defaultPrevented: !1
          }, k = [h].concat(wa.call(arguments, 1)), l, m;
          do {
            d = f.$$listeners[a] || c;
            h.currentScope = f;
            l = 0;
            for (m = d.length; l < m; l++)if (d[l])try {
              d[l].apply(null, k)
            } catch (n) {
              e(n)
            } else d.splice(l, 1), l--, m--;
            if (g)break;
            f = f.$parent
          } while (f);
          return h
        }, $broadcast: function (a, b) {
          for (var c = this, d = this, f = {
            name: a, targetScope: this, preventDefault: function () {
              f.defaultPrevented = !0
            }, defaultPrevented: !1
          }, g = [f].concat(wa.call(arguments, 1)), h, k; c = d;) {
            f.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;
            for (k = d.length; h < k; h++)if (d[h])try {
              d[h].apply(null, g)
            } catch (l) {
              e(l)
            } else d.splice(h, 1), h--, k--;
            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
          }
          return f
        }
      };
      var q = new h;
      return q
    }]
  }

  function bd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (a) {
      return D(a) ? (b = a, this) : b
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return D(b) ? (a = b, this) : a
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, f;
        if (!R || 8 <= R)if (f = xa(c).href, "" !== f && !f.match(e))return "unsafe:" + f;
        return c
      }
    }
  }

  function Ee(b) {
    if ("self" === b)return b;
    if (G(b)) {
      if (-1 < b.indexOf("***"))throw za("iwcard", b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
        "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return RegExp("^" + b + "$")
    }
    if (kb(b))return RegExp("^" + b.source + "$");
    throw za("imatcher");
  }

  function Fc(b) {
    var a = [];
    D(b) && r(b, function (b) {
      a.push(Ee(b))
    });
    return a
  }

  function ae() {
    this.SCE_CONTEXTS = fa;
    var b = ["self"], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Fc(a));
      return b
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Fc(b));
      return a
    };
    this.$get = ["$injector", function (c) {
      function d(a) {
        var b =
          function (a) {
            this.$$unwrapTrustedValue = function () {
              return a
            }
          };
        a && (b.prototype = new a);
        b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue()
        };
        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString()
        };
        return b
      }

      var e = function (a) {
        throw za("unsafe");
      };
      c.has("$sanitize") && (e = c.get("$sanitize"));
      var f = d(), g = {};
      g[fa.HTML] = d(f);
      g[fa.CSS] = d(f);
      g[fa.URL] = d(f);
      g[fa.JS] = d(f);
      g[fa.RESOURCE_URL] = d(g[fa.URL]);
      return {
        trustAs: function (a, b) {
          var c = g.hasOwnProperty(a) ? g[a] : null;
          if (!c)throw za("icontext",
            a, b);
          if (null === b || b === u || "" === b)return b;
          if ("string" !== typeof b)throw za("itype", a);
          return new c(b)
        }, getTrusted: function (c, d) {
          if (null === d || d === u || "" === d)return d;
          var f = g.hasOwnProperty(c) ? g[c] : null;
          if (f && d instanceof f)return d.$$unwrapTrustedValue();
          if (c === fa.RESOURCE_URL) {
            var f = xa(d.toString()), l, n, q = !1;
            l = 0;
            for (n = b.length; l < n; l++)if ("self" === b[l] ? Pb(f) : b[l].exec(f.href)) {
              q = !0;
              break
            }
            if (q)for (l = 0, n = a.length; l < n; l++)if ("self" === a[l] ? Pb(f) : a[l].exec(f.href)) {
              q = !1;
              break
            }
            if (q)return d;
            throw za("insecurl",
              d.toString());
          }
          if (c === fa.HTML)return e(d);
          throw za("unsafe");
        }, valueOf: function (a) {
          return a instanceof f ? a.$$unwrapTrustedValue() : a
        }
      }
    }]
  }

  function $d() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b
    };
    this.$get = ["$parse", "$sniffer", "$sceDelegate", function (a, c, d) {
      if (b && c.msie && 8 > c.msieDocumentMode)throw za("iequirks");
      var e = ha(fa);
      e.isEnabled = function () {
        return b
      };
      e.trustAs = d.trustAs;
      e.getTrusted = d.getTrusted;
      e.valueOf = d.valueOf;
      b || (e.trustAs = e.getTrusted = function (a, b) {
        return b
      },
        e.valueOf = ga);
      e.parseAs = function (b, c) {
        var d = a(c);
        return d.literal && d.constant ? d : function (a, c) {
          return e.getTrusted(b, d(a, c))
        }
      };
      var f = e.parseAs, g = e.getTrusted, h = e.trustAs;
      r(fa, function (a, b) {
        var c = x(b);
        e[ab("parse_as_" + c)] = function (b) {
          return f(a, b)
        };
        e[ab("get_trusted_" + c)] = function (b) {
          return g(a, b)
        };
        e[ab("trust_as_" + c)] = function (b) {
          return h(a, b)
        }
      });
      return e
    }]
  }

  function be() {
    this.$get = ["$window", "$document", function (b, a) {
      var c = {}, d = U((/android (\d+)/.exec(x((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator ||
      {}).userAgent), f = a[0] || {}, g = f.documentMode, h, k = /^(Moz|webkit|O|ms)(?=[A-Z])/, m = f.body && f.body.style, l = !1, n = !1;
      if (m) {
        for (var q in m)if (l = k.exec(q)) {
          h = l[0];
          h = h.substr(0, 1).toUpperCase() + h.substr(1);
          break
        }
        h || (h = "WebkitOpacity"in m && "webkit");
        l = !!("transition"in m || h + "Transition"in m);
        n = !!("animation"in m || h + "Animation"in m);
        !d || l && n || (l = G(f.body.style.webkitTransition), n = G(f.body.style.webkitAnimation))
      }
      return {
        history: !(!b.history || !b.history.pushState || 4 > d || e), hashchange: "onhashchange"in b && (!g || 7 <
        g), hasEvent: function (a) {
          if ("input" == a && 9 == R)return !1;
          if (F(c[a])) {
            var b = f.createElement("div");
            c[a] = "on" + a in b
          }
          return c[a]
        }, csp: Za(), vendorPrefix: h, transitions: l, animations: n, android: d, msie: R, msieDocumentMode: g
      }
    }]
  }

  function de() {
    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
      function e(e, h, k) {
        var m = c.defer(), l = m.promise, n = D(k) && !k;
        h = a.defer(function () {
          try {
            m.resolve(e())
          } catch (a) {
            m.reject(a), d(a)
          } finally {
            delete f[l.$$timeoutId]
          }
          n || b.$apply()
        }, h);
        l.$$timeoutId = h;
        f[h] = m;
        return l
      }

      var f = {};
      e.cancel = function (b) {
        return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
      };
      return e
    }]
  }

  function xa(b, a) {
    var c = b;
    R && (Y.setAttribute("href", c), c = Y.href);
    Y.setAttribute("href", c);
    return {
      href: Y.href,
      protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
      host: Y.host,
      search: Y.search ? Y.search.replace(/^\?/, "") : "",
      hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
      hostname: Y.hostname,
      port: Y.port,
      pathname: "/" === Y.pathname.charAt(0) ? Y.pathname :
      "/" + Y.pathname
    }
  }

  function Pb(b) {
    b = G(b) ? xa(b) : b;
    return b.protocol === Gc.protocol && b.host === Gc.host
  }

  function ee() {
    this.$get = aa(W)
  }

  function kc(b) {
    function a(d, e) {
      if (T(d)) {
        var f = {};
        r(d, function (b, c) {
          f[c] = a(c, b)
        });
        return f
      }
      return b.factory(d + c, e)
    }

    var c = "Filter";
    this.register = a;
    this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + c)
      }
    }];
    a("currency", Hc);
    a("date", Ic);
    a("filter", Fe);
    a("json", Ge);
    a("limitTo", He);
    a("lowercase", Ie);
    a("number", Jc);
    a("orderBy", Kc);
    a("uppercase", Je)
  }

  function Fe() {
    return function (b,
                     a, c) {
      if (!L(b))return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)if (!e[b](a))return !1;
        return !0
      };
      "function" !== d && (c = "boolean" === d && c ? function (a, b) {
        return Xa.equals(a, b)
      } : function (a, b) {
        if (a && b && "object" === typeof a && "object" === typeof b) {
          for (var d in a)if ("$" !== d.charAt(0) && lb.call(a, d) && c(a[d], b[d]))return !0;
          return !1
        }
        b = ("" + b).toLowerCase();
        return -1 < ("" + a).toLowerCase().indexOf(b)
      });
      var f = function (a, b) {
        if ("string" === typeof b && "!" === b.charAt(0))return !f(a, b.substr(1));
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
            return c(a,
              b);
          case "object":
            switch (typeof b) {
              case "object":
                return c(a, b);
              default:
                for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return !0
            }
            return !1;
          case "array":
            for (d = 0; d < a.length; d++)if (f(a[d], b))return !0;
            return !1;
          default:
            return !1
        }
      };
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
          a = {$: a};
        case "object":
          for (var g in a)(function (b) {
            "undefined" !== typeof a[b] && e.push(function (c) {
              return f("$" == b ? c : c && c[b], a[b])
            })
          })(g);
          break;
        case "function":
          e.push(a);
          break;
        default:
          return b
      }
      d = [];
      for (g = 0; g < b.length; g++) {
        var h =
          b[g];
        e.check(h) && d.push(h)
      }
      return d
    }
  }

  function Hc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      F(d) && (d = a.CURRENCY_SYM);
      return Lc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
    }
  }

  function Jc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Lc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
    }
  }

  function Lc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || T(b))return "";
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + "", h = "", k = [], m = !1;
    if (-1 !== g.indexOf("e")) {
      var l = g.match(/([\d\.]+)e(-?)(\d+)/);
      l && "-" == l[2] &&
      l[3] > e + 1 ? (g = "0", b = 0) : (h = g, m = !0)
    }
    if (m)0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e)); else {
      g = (g.split(Mc)[1] || "").length;
      F(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
      0 === b && (f = !1);
      b = ("" + b).split(Mc);
      g = b[0];
      b = b[1] || "";
      var l = 0, n = a.lgSize, q = a.gSize;
      if (g.length >= n + q)for (l = g.length - n, m = 0; m < l; m++)0 === (l - m) % q && 0 !== m && (h += c), h += g.charAt(m);
      for (m = l; m < g.length; m++)0 === (g.length - m) % n && 0 !== m && (h += c), h += g.charAt(m);
      for (; b.length < e;)b += "0";
      e && "0" !== e && (h += d + b.substr(0,
        e))
    }
    k.push(f ? a.negPre : a.posPre);
    k.push(h);
    k.push(f ? a.negSuf : a.posSuf);
    return k.join("")
  }

  function Vb(b, a, c) {
    var d = "";
    0 > b && (d = "-", b = -b);
    for (b = "" + b; b.length < a;)b = "0" + b;
    c && (b = b.substr(b.length - a));
    return d + b
  }

  function Z(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e["get" + b]();
      if (0 < c || e > -c)e += c;
      0 === e && -12 == c && (e = 12);
      return Vb(e, a, d)
    }
  }

  function vb(b, a) {
    return function (c, d) {
      var e = c["get" + b](), f = La(a ? "SHORT" + b : b);
      return d[f][e]
    }
  }

  function Ic(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ?
          a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
        h.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
        f = U(b[4] || 0) - f;
        g = U(b[5] || 0) - g;
        h = U(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        k.call(a, f, g, h, b)
      }
      return a
    }

    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var f = "", g = [], h, k;
      e = e || "mediumDate";
      e = b.DATETIME_FORMATS[e] || e;
      G(c) && (c = Ke.test(c) ? U(c) : a(c));
      jb(c) && (c = new Date(c));
      if (!va(c))return c;
      for (; e;)(k = Le.exec(e)) ? (g = g.concat(wa.call(k, 1)), e = g.pop()) : (g.push(e), e = null);
      r(g, function (a) {
        h = Me[a];
        f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      });
      return f
    }
  }

  function Ge() {
    return function (b) {
      return oa(b, !0)
    }
  }

  function He() {
    return function (b, a) {
      if (!L(b) && !G(b))return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a);
      if (G(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d =
        b.length + a, e = b.length);
      for (; d < e; d++)c.push(b[d]);
      return c
    }
  }

  function Kc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Wa(b) ? function (b, c) {
          return a(c, b)
        } : a
      }

      function f(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? (va(a) && va(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
      }

      if (!Sa(a))return a;
      c = L(c) ? c : [c];
      0 === c.length && (c = ["+"]);
      c = Uc(c, function (a) {
        var c = !1, d = a || ga;
        if (G(a)) {
          if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
          if ("" === a)return e(function (a, b) {
            return f(a, b)
          }, c);
          d = b(a);
          if (d.constant) {
            var m = d();
            return e(function (a, b) {
              return f(a[m], b[m])
            }, c)
          }
        }
        return e(function (a, b) {
          return f(d(a), d(b))
        }, c)
      });
      return wa.call(a).sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)return e
        }
        return 0
      }, d))
    }
  }

  function Aa(b) {
    N(b) && (b = {link: b});
    b.restrict = b.restrict || "AC";
    return aa(b)
  }

  function Nc(b, a, c, d) {
    function e(a, c) {
      c = c ? "-" + nb(c, "-") : "";
      d.setClass(b, (a ? wb : xb) + c, (a ? xb : wb) + c)
    }

    var f = this, g = b.parent().controller("form") ||
      yb, h = 0, k = f.$error = {}, m = [];
    f.$name = a.name || a.ngForm;
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    g.$addControl(f);
    b.addClass(Ra);
    e(!0);
    f.$addControl = function (a) {
      Ea(a.$name, "input");
      m.push(a);
      a.$name && (f[a.$name] = a)
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      r(k, function (b, c) {
        f.$setValidity(c, !0, a)
      });
      Ua(m, a)
    };
    f.$setValidity = function (a, b, c) {
      var d = k[a];
      if (b)d && (Ua(d, c), d.length || (h--, h || (e(b), f.$valid = !0, f.$invalid = !1), k[a] = !1, e(!0, a), g.$setValidity(a, !0, f))); else {
        h ||
        e(b);
        if (d) {
          if (-1 != Ta(d, c))return
        } else k[a] = d = [], h++, e(!1, a), g.$setValidity(a, !1, f);
        d.push(c);
        f.$valid = !1;
        f.$invalid = !0
      }
    };
    f.$setDirty = function () {
      d.removeClass(b, Ra);
      d.addClass(b, zb);
      f.$dirty = !0;
      f.$pristine = !1;
      g.$setDirty()
    };
    f.$setPristine = function () {
      d.removeClass(b, zb);
      d.addClass(b, Ra);
      f.$dirty = !1;
      f.$pristine = !0;
      r(m, function (a) {
        a.$setPristine()
      })
    }
  }

  function ua(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : u
  }

  function Oc(b, a) {
    var c, d;
    if (a)for (c = 0; c < a.length; ++c)if (d = a[c], b[d])return !0;
    return !1
  }

  function Ne(b,
              a, c, d, e) {
    T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function (f) {
      if (b.$error[a] || Oc(e, d) || !Oc(e, c))return f;
      b.$setValidity(a, !1)
    }))
  }

  function Ab(b, a, c, d, e, f) {
    var g = a.prop(Oe), h = a[0].placeholder, k = {}, m = x(a[0].type);
    d.$$validityState = g;
    if (!e.android) {
      var l = !1;
      a.on("compositionstart", function (a) {
        l = !0
      });
      a.on("compositionend", function () {
        l = !1;
        n()
      })
    }
    var n = function (e) {
      if (!l) {
        var f = a.val();
        if (R && "input" === (e || k).type && a[0].placeholder !== h)h = a[0].placeholder; else if ("password" !== m && Wa(c.ngTrim || "T") &&
          (f = $(f)), e = g && d.$$hasNativeValidators, d.$viewValue !== f || "" === f && e)b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function () {
          d.$setViewValue(f)
        })
      }
    };
    if (e.hasEvent("input"))a.on("input", n); else {
      var q, p = function () {
        q || (q = f.defer(function () {
          n();
          q = null
        }))
      };
      a.on("keydown", function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || p()
      });
      if (e.hasEvent("paste"))a.on("paste cut", p)
    }
    a.on("change", n);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
    };
    var s = c.ngPattern;
    s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ?
      (s = RegExp(e[1], e[2]), e = function (a) {
        return ua(d, "pattern", d.$isEmpty(a) || s.test(a), a)
      }) : e = function (c) {
      var e = b.$eval(s);
      if (!e || !e.test)throw z("ngPattern")("noregexp", s, e, ia(a));
      return ua(d, "pattern", d.$isEmpty(c) || e.test(c), c)
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var r = U(c.ngMinlength);
      e = function (a) {
        return ua(d, "minlength", d.$isEmpty(a) || a.length >= r, a)
      };
      d.$parsers.push(e);
      d.$formatters.push(e)
    }
    if (c.ngMaxlength) {
      var w = U(c.ngMaxlength);
      e = function (a) {
        return ua(d, "maxlength", d.$isEmpty(a) ||
        a.length <= w, a)
      };
      d.$parsers.push(e);
      d.$formatters.push(e)
    }
  }

  function Wb(b, a) {
    b = "ngClass" + b;
    return ["$animate", function (c) {
      function d(a, b) {
        var c = [], d = 0;
        a:for (; d < a.length; d++) {
          for (var e = a[d], l = 0; l < b.length; l++)if (e == b[l])continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        if (!L(a)) {
          if (G(a))return a.split(" ");
          if (T(a)) {
            var b = [];
            r(a, function (a, c) {
              a && (b = b.concat(c.split(" ")))
            });
            return b
          }
        }
        return a
      }

      return {
        restrict: "AC", link: function (f, g, h) {
          function k(a, b) {
            var c = g.data("$classCounts") || {}, d = [];
            r(a, function (a) {
              if (0 <
                b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
            });
            g.data("$classCounts", c);
            return d.join(" ")
          }

          function m(b) {
            if (!0 === a || f.$index % 2 === a) {
              var m = e(b || []);
              if (!l) {
                var p = k(m, 1);
                h.$addClass(p)
              } else if (!Ca(b, l)) {
                var s = e(l), p = d(m, s), m = d(s, m), m = k(m, -1), p = k(p, 1);
                0 === p.length ? c.removeClass(g, m) : 0 === m.length ? c.addClass(g, p) : c.setClass(g, p, m)
              }
            }
            l = ha(b)
          }

          var l;
          f.$watch(h[b], m, !0);
          h.$observe("class", function (a) {
            m(f.$eval(h[b]))
          });
          "ngClass" !== b && f.$watch("$index", function (c, d) {
            var g = c & 1;
            if (g !== (d & 1)) {
              var l = e(f.$eval(h[b]));
              g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
            }
          })
        }
      }
    }]
  }

  var Oe = "validity", x = function (b) {
    return G(b) ? b.toLowerCase() : b
  }, lb = Object.prototype.hasOwnProperty, La = function (b) {
    return G(b) ? b.toUpperCase() : b
  }, R, A, Fa, wa = [].slice, Pe = [].push, Ba = Object.prototype.toString, Va = z("ng"), Xa = W.angular || (W.angular = {}), $a, Pa, na = ["0", "0", "0"];
  R = U((/msie (\d+)/.exec(x(navigator.userAgent)) || [])[1]);
  isNaN(R) && (R = U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent)) || [])[1]));
  v.$inject = [];
  ga.$inject = [];
  var L =
    function () {
      return N(Array.isArray) ? Array.isArray : function (b) {
        return "[object Array]" === Ba.call(b)
      }
    }(), $ = function () {
    return String.prototype.trim ? function (b) {
      return G(b) ? b.trim() : b
    } : function (b) {
      return G(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
    }
  }();
  Pa = 9 > R ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && "HTML" != b.scopeName ? La(b.scopeName + ":" + b.nodeName) : b.nodeName
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName
  };
  var Za = function () {
    if (D(Za.isActive_))return Za.isActive_;
    var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
    if (!b)try {
      new Function("")
    } catch (a) {
      b = !0
    }
    return Za.isActive_ = b
  }, Xc = /[A-Z]/g, $c = {full: "1.2.28", major: 1, minor: 2, dot: 28, codeName: "finnish-disembarkation"};
  S.expando = "ng339";
  var cb = S.cache = {}, me = 1, sb = W.document.addEventListener ? function (b, a, c) {
    b.addEventListener(a, c, !1)
  } : function (b, a, c) {
    b.attachEvent("on" + a, c)
  }, bb = W.document.removeEventListener ? function (b, a, c) {
    b.removeEventListener(a, c, !1)
  } : function (b, a, c) {
    b.detachEvent("on" + a, c)
  };
  S._data = function (b) {
    return this.cache[b[this.expando]] ||
      {}
  };
  var he = /([\:\-\_]+(.))/g, ie = /^moz([A-Z])/, Hb = z("jqLite"), je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ib = /<|&#?\w+;/, ke = /<([\w:]+)/, le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, da = {
    option: [1, '<select multiple="multiple">', "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  da.optgroup = da.option;
  da.tbody = da.tfoot = da.colgroup =
    da.caption = da.thead;
  da.th = da.td;
  var Oa = S.prototype = {
    ready: function (b) {
      function a() {
        c || (c = !0, b())
      }

      var c = !1;
      "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(W).on("load", a))
    }, toString: function () {
      var b = [];
      r(this, function (a) {
        b.push("" + a)
      });
      return "[" + b.join(", ") + "]"
    }, eq: function (b) {
      return 0 <= b ? A(this[b]) : A(this[this.length + b])
    }, length: 0, push: Pe, sort: [].sort, splice: [].splice
  }, rb = {};
  r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
    rb[x(b)] = b
  });
  var pc = {};
  r("input select option textarea button form details".split(" "), function (b) {
    pc[La(b)] = !0
  });
  r({data: Mb, removeData: Lb}, function (b, a) {
    S[a] = b
  });
  r({
    data: Mb, inheritedData: qb, scope: function (b) {
      return A.data(b, "$scope") || qb(b.parentNode || b, ["$isolateScope", "$scope"])
    }, isolateScope: function (b) {
      return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate")
    }, controller: mc, injector: function (b) {
      return qb(b, "$injector")
    }, removeAttr: function (b, a) {
      b.removeAttribute(a)
    }, hasClass: Nb, css: function (b,
                                    a, c) {
      a = ab(a);
      if (D(c))b.style[a] = c; else {
        var d;
        8 >= R && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
        d = d || b.style[a];
        8 >= R && (d = "" === d ? u : d);
        return d
      }
    }, attr: function (b, a, c) {
      var d = x(a);
      if (rb[d])if (D(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || v).specified ? d : u; else if (D(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? u : b
    }, prop: function (b, a, c) {
      if (D(c))b[a] = c; else return b[a]
    }, text: function () {
      function b(b,
                 d) {
        var e = a[b.nodeType];
        if (F(d))return e ? b[e] : "";
        b[e] = d
      }

      var a = [];
      9 > R ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
      b.$dv = "";
      return b
    }(), val: function (b, a) {
      if (F(a)) {
        if ("SELECT" === Pa(b) && b.multiple) {
          var c = [];
          r(b.options, function (a) {
            a.selected && c.push(a.value || a.text)
          });
          return 0 === c.length ? null : c
        }
        return b.value
      }
      b.value = a
    }, html: function (b, a) {
      if (F(a))return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)Ma(d[c]);
      b.innerHTML = a
    }, empty: nc
  }, function (b, a) {
    S.prototype[a] = function (a, d) {
      var e,
        f, g = this.length;
      if (b !== nc && (2 == b.length && b !== Nb && b !== mc ? a : d) === u) {
        if (T(a)) {
          for (e = 0; e < g; e++)if (b === Mb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
          return this
        }
        e = b.$dv;
        g = e === u ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h
        }
        return e
      }
      for (e = 0; e < g; e++)b(this[e], a, d);
      return this
    }
  });
  r({
    removeData: Lb, dealoc: Ma, on: function a(c, d, e, f) {
      if (D(f))throw Hb("onargs");
      var g = pa(c, "events"), h = pa(c, "handle");
      g || pa(c, "events", g = {});
      h || pa(c, "handle", h = ne(c, g));
      r(d.split(" "), function (d) {
        var f = g[d];
        if (!f) {
          if ("mouseenter" ==
            d || "mouseleave" == d) {
            var l = X.body.contains || X.body.compareDocumentPosition ? function (a, c) {
              var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
              return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
            } : function (a, c) {
              if (c)for (; c = c.parentNode;)if (c === a)return !0;
              return !1
            };
            g[d] = [];
            a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || l(this, c)) || h(a, d)
            })
          } else sb(c, d, h), g[d] = [];
          f = g[d]
        }
        f.push(e)
      })
    },
    off: lc, one: function (a, c, d) {
      a = A(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f)
      });
      a.on(c, d)
    }, replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ma(a);
      r(new S(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c
      })
    }, children: function (a) {
      var c = [];
      r(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a)
      });
      return c
    }, contents: function (a) {
      return a.contentDocument || a.childNodes || []
    }, append: function (a, c) {
      r(new S(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
      })
    }, prepend: function (a,
                          c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        r(new S(c), function (c) {
          a.insertBefore(c, d)
        })
      }
    }, wrap: function (a, c) {
      c = A(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a)
    }, remove: function (a) {
      Ma(a);
      var c = a.parentNode;
      c && c.removeChild(a)
    }, after: function (a, c) {
      var d = a, e = a.parentNode;
      r(new S(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a
      })
    }, addClass: pb, removeClass: ob, toggleClass: function (a, c, d) {
      c && r(c.split(" "), function (c) {
        var f = d;
        F(f) && (f = !Nb(a, c));
        (f ? pb : ob)(a, c)
      })
    }, parent: function (a) {
      return (a =
        a.parentNode) && 11 !== a.nodeType ? a : null
    }, next: function (a) {
      if (a.nextElementSibling)return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)a = a.nextSibling;
      return a
    }, find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : []
    }, clone: Kb, triggerHandler: function (a, c, d) {
      var e, f;
      e = c.type || c;
      var g = (pa(a, "events") || {})[e];
      g && (e = {
        preventDefault: function () {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
          return !0 === this.defaultPrevented
        }, stopPropagation: v, type: e, target: a
      },
      c.type && (e = E(e, c)), c = ha(g), f = d ? [e].concat(d) : [e], r(c, function (c) {
        c.apply(a, f)
      }))
    }
  }, function (a, c) {
    S.prototype[c] = function (c, e, f) {
      for (var g, h = 0; h < this.length; h++)F(g) ? (g = a(this[h], c, e, f), D(g) && (g = A(g))) : Jb(g, a(this[h], c, e, f));
      return D(g) ? g : this
    };
    S.prototype.bind = S.prototype.on;
    S.prototype.unbind = S.prototype.off
  });
  db.prototype = {
    put: function (a, c) {
      this[Na(a, this.nextUid)] = c
    }, get: function (a) {
      return this[Na(a, this.nextUid)]
    }, remove: function (a) {
      var c = this[a = Na(a, this.nextUid)];
      delete this[a];
      return c
    }
  };
  var pe =
    /^function\s*[^\(]*\(\s*([^\)]*)\)/m, qe = /,/, re = /^\s*(_?)(\S+?)\1\s*$/, oe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, eb = z("$injector"), Qe = z("$animate"), Ld = ["$provide", function (a) {
    this.$$selectors = {};
    this.register = function (c, d) {
      var e = c + "-animation";
      if (c && "." != c.charAt(0))throw Qe("notcsel", c);
      this.$$selectors[c.substr(1)] = e;
      a.factory(e, d)
    };
    this.classNameFilter = function (a) {
      1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
      return this.$$classNameFilter
    };
    this.$get = ["$timeout", "$$asyncCallback",
      function (a, d) {
        return {
          enter: function (a, c, g, h) {
            g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
            h && d(h)
          }, leave: function (a, c) {
            a.remove();
            c && d(c)
          }, move: function (a, c, d, h) {
            this.enter(a, c, d, h)
          }, addClass: function (a, c, g) {
            c = G(c) ? c : L(c) ? c.join(" ") : "";
            r(a, function (a) {
              pb(a, c)
            });
            g && d(g)
          }, removeClass: function (a, c, g) {
            c = G(c) ? c : L(c) ? c.join(" ") : "";
            r(a, function (a) {
              ob(a, c)
            });
            g && d(g)
          }, setClass: function (a, c, g, h) {
            r(a, function (a) {
              pb(a, c);
              ob(a, g)
            });
            h && d(h)
          }, enabled: v
        }
      }]
  }], ja = z("$compile");
  gc.$inject = ["$provide", "$$sanitizeUriProvider"];
  var we = /^(x[\:\-_]|data[\:\-_])/i, wc = z("$interpolate"), Re = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ze = {
    http: 80,
    https: 443,
    ftp: 21
  }, Sb = z("$location");
  Ac.prototype = Tb.prototype = zc.prototype = {
    $$html5: !1, $$replace: !1, absUrl: tb("$$absUrl"), url: function (a) {
      if (F(a))return this.$$url;
      a = Re.exec(a);
      a[1] && this.path(decodeURIComponent(a[1]));
      (a[2] || a[1]) && this.search(a[3] || "");
      this.hash(a[5] || "");
      return this
    }, protocol: tb("$$protocol"), host: tb("$$host"), port: tb("$$port"), path: Bc("$$path", function (a) {
      a = null !== a ? a.toString() :
        "";
      return "/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, c) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (G(a) || jb(a))a = a.toString(), this.$$search = cc(a); else if (T(a))r(a, function (c, e) {
            null == c && delete a[e]
          }), this.$$search = a; else throw Sb("isrcharg");
          break;
        default:
          F(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
      }
      this.$$compose();
      return this
    }, hash: Bc("$$hash", function (a) {
      return null !== a ? a.toString() : ""
    }), replace: function () {
      this.$$replace = !0;
      return this
    }
  };
  var la = z("$parse"), Ec =
  {}, ya, Se = Function.prototype.call, Te = Function.prototype.apply, Pc = Function.prototype.bind, hb = {
    "null": function () {
      return null
    }, "true": function () {
      return !0
    }, "false": function () {
      return !1
    }, undefined: v, "+": function (a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return D(d) ? D(e) ? d + e : d : D(e) ? e : u
    }, "-": function (a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return (D(d) ? d : 0) - (D(e) ? e : 0)
    }, "*": function (a, c, d, e) {
      return d(a, c) * e(a, c)
    }, "/": function (a, c, d, e) {
      return d(a, c) / e(a, c)
    }, "%": function (a, c, d, e) {
      return d(a, c) % e(a, c)
    }, "^": function (a, c, d, e) {
      return d(a, c) ^
        e(a, c)
    }, "=": v, "===": function (a, c, d, e) {
      return d(a, c) === e(a, c)
    }, "!==": function (a, c, d, e) {
      return d(a, c) !== e(a, c)
    }, "==": function (a, c, d, e) {
      return d(a, c) == e(a, c)
    }, "!=": function (a, c, d, e) {
      return d(a, c) != e(a, c)
    }, "<": function (a, c, d, e) {
      return d(a, c) < e(a, c)
    }, ">": function (a, c, d, e) {
      return d(a, c) > e(a, c)
    }, "<=": function (a, c, d, e) {
      return d(a, c) <= e(a, c)
    }, ">=": function (a, c, d, e) {
      return d(a, c) >= e(a, c)
    }, "&&": function (a, c, d, e) {
      return d(a, c) && e(a, c)
    }, "||": function (a, c, d, e) {
      return d(a, c) || e(a, c)
    }, "&": function (a, c, d, e) {
      return d(a,
          c) & e(a, c)
    }, "|": function (a, c, d, e) {
      return e(a, c)(a, c, d(a, c))
    }, "!": function (a, c, d) {
      return !d(a, c)
    }
  }, Ue = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, Ub = function (a) {
    this.options = a
  };
  Ub.prototype = {
    constructor: Ub, lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = u;
      this.lastCh = ":";
      for (this.tokens = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent();
        else if (this.is("(){}[].,;:?"))this.tokens.push({
          index: this.index,
          text: this.ch
        }), this.index++; else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue
        } else {
          a = this.ch + this.peek();
          var c = a + this.peek(2), d = hb[this.ch], e = hb[a], f = hb[c];
          f ? (this.tokens.push({
            index: this.index,
            text: c,
            fn: f
          }), this.index += 3) : e ? (this.tokens.push({
            index: this.index,
            text: a,
            fn: e
          }), this.index += 2) : d ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: d
          }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index +
          1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    }, is: function (a) {
      return -1 !== a.indexOf(this.ch)
    }, was: function (a) {
      return -1 !== a.indexOf(this.lastCh)
    }, peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function (a) {
      return "0" <= a && "9" >= a
    }, isWhitespace: function (a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function (a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
      return "-" === a || "+" === a || this.isNumber(a)
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = D(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
      throw la("lexerr", a, c, this.text);
    }, readNumber: function () {
      for (var a = "", c = this.index; this.index < this.text.length;) {
        var d = x(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d))a += d; else {
          var e = this.peek();
          if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length -
            1))break; else this.throwError("Invalid exponent")
        }
        this.index++
      }
      a *= 1;
      this.tokens.push({
        index: c, text: a, literal: !0, constant: !0, fn: function () {
          return a
        }
      })
    }, readIdent: function () {
      for (var a = this, c = "", d = this.index, e, f, g, h; this.index < this.text.length;) {
        h = this.text.charAt(this.index);
        if ("." === h || this.isIdent(h) || this.isNumber(h))"." === h && (e = this.index), c += h; else break;
        this.index++
      }
      if (e)for (f = this.index; f < this.text.length;) {
        h = this.text.charAt(f);
        if ("(" === h) {
          g = c.substr(e - d + 1);
          c = c.substr(0, e - d);
          this.index = f;
          break
        }
        if (this.isWhitespace(h))f++;
        else break
      }
      d = {index: d, text: c};
      if (hb.hasOwnProperty(c))d.fn = hb[c], d.literal = !0, d.constant = !0; else {
        var k = Dc(c, this.options, this.text);
        d.fn = E(function (a, c) {
          return k(a, c)
        }, {
          assign: function (d, e) {
            return ub(d, c, e, a.text, a.options)
          }
        })
      }
      this.tokens.push(d);
      g && (this.tokens.push({index: e, text: "."}), this.tokens.push({index: e + 1, text: g}))
    }, readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = "", e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index), e = e + g;
        if (f)"u" === g ? (f = this.text.substring(this.index +
        1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ue[g] || g, f = !1; else if ("\\" === g)f = !0; else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c, text: e, string: d, literal: !0, constant: !0, fn: function () {
                return d
              }
            });
            return
          }
          d += g
        }
        this.index++
      }
      this.throwError("Unterminated quote", c)
    }
  };
  var gb = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d
  };
  gb.ZERO = E(function () {
    return 0
  }, {constant: !0});
  gb.prototype = {
    constructor: gb,
    parse: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a
    }, primary: function () {
      var a;
      if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
        var c = this.expect();
        (a = c.fn) || this.throwError("not a primary expression", c);
        a.literal = !!c.literal;
        a.constant = !!c.constant
      }
      for (var d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
      return a
    }, throwError: function (a, c) {
      throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function () {
      if (0 === this.tokens.length)throw la("ueoe", this.text);
      return this.tokens[0]
    }, peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var f = this.tokens[0], g = f.text;
        if (g ===
          a || g === c || g === d || g === e || !(a || c || d || e))return f
      }
      return !1
    }, expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
    }, consume: function (a) {
      this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    }, unaryFn: function (a, c) {
      return E(function (d, e) {
        return a(d, e, c)
      }, {constant: c.constant})
    }, ternaryFn: function (a, c, d) {
      return E(function (e, f) {
        return a(e, f) ? c(e, f) : d(e, f)
      }, {constant: a.constant && c.constant && d.constant})
    }, binaryFn: function (a, c, d) {
      return E(function (e, f) {
        return c(e,
          f, a, d)
      }, {constant: a.constant && d.constant})
    }, statements: function () {
      for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
        for (var e, f = 0; f < a.length; f++) {
          var g = a[f];
          g && (e = g(c, d))
        }
        return e
      }
    }, filterChain: function () {
      for (var a = this.expression(), c; ;)if (c = this.expect("|"))a = this.binaryFn(a, c.fn, this.filter()); else return a
    }, filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = []; ;)if (a = this.expect(":"))d.push(this.expression());
      else {
        var e = function (a, e, h) {
          h = [h];
          for (var k = 0; k < d.length; k++)h.push(d[k](a, e));
          return c.apply(a, h)
        };
        return function () {
          return e
        }
      }
    }, expression: function () {
      return this.assignment()
    }, assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, f) {
        return a.assign(d, c(d, f), f)
      }) : a
    }, ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect("?")) {
        c = this.assignment();
        if (d = this.expect(":"))return this.ternaryFn(a, c, this.assignment());
        this.throwError("expected :", d)
      } else return a
    }, logicalOR: function () {
      for (var a = this.logicalAND(), c; ;)if (c = this.expect("||"))a = this.binaryFn(a, c.fn, this.logicalAND()); else return a
    }, logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect("&&"))a = this.binaryFn(a, c.fn, this.logicalAND());
      return a
    }, equality: function () {
      var a = this.relational(), c;
      if (c = this.expect("==", "!=", "===", "!=="))a = this.binaryFn(a, c.fn, this.equality());
      return a
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.fn, this.relational());
      return a
    }, additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.fn, this.multiplicative());
      return a
    }, multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.fn, this.unary());
      return a
    }, unary: function () {
      var a;
      return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(gb.ZERO, a.fn,
        this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Dc(d, this.options, this.text);
      return E(function (c, d, h) {
        return e(h || a(c, d))
      }, {
        assign: function (e, g, h) {
          (h = a(e, h)) || a.assign(e, h = {});
          return ub(h, d, g, c.text, c.options)
        }
      })
    }, objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume("]");
      return E(function (e, f) {
        var g = a(e, f), h = d(e, f), k;
        ka(h, c.text);
        if (!g)return u;
        (g = ma(g[h], c.text)) && (g.then && c.options.unwrapPromises) &&
        (k = g, "$$v"in g || (k.$$v = u, k.then(function (a) {
          k.$$v = a
        })), g = g.$$v);
        return g
      }, {
        assign: function (e, f, g) {
          var h = ka(d(e, g), c.text);
          (g = ma(a(e, g), c.text)) || a.assign(e, g = {});
          return g[h] = f
        }
      })
    }, functionCall: function (a, c) {
      var d = [];
      if (")" !== this.peekToken().text) {
        do d.push(this.expression()); while (this.expect(","))
      }
      this.consume(")");
      var e = this;
      return function (f, g) {
        for (var h = [], k = c ? c(f, g) : f, m = 0; m < d.length; m++)h.push(ma(d[m](f, g), e.text));
        m = a(f, g, k) || v;
        ma(k, e.text);
        var l = e.text;
        if (m) {
          if (m.constructor === m)throw la("isecfn",
            l);
          if (m === Se || m === Te || Pc && m === Pc)throw la("isecff", l);
        }
        h = m.apply ? m.apply(k, h) : m(h[0], h[1], h[2], h[3], h[4]);
        return ma(h, e.text)
      }
    }, arrayDeclaration: function () {
      var a = [], c = !0;
      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]"))break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1)
        } while (this.expect(","))
      }
      this.consume("]");
      return E(function (c, d) {
        for (var g = [], h = 0; h < a.length; h++)g.push(a[h](c, d));
        return g
      }, {literal: !0, constant: c})
    }, object: function () {
      var a = [], c = !0;
      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}"))break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(":");
          var e = this.expression();
          a.push({key: d, value: e});
          e.constant || (c = !1)
        } while (this.expect(","))
      }
      this.consume("}");
      return E(function (c, d) {
        for (var e = {}, k = 0; k < a.length; k++) {
          var m = a[k];
          e[m.key] = m.value(c, d)
        }
        return e
      }, {literal: !0, constant: c})
    }
  };
  var Ce = {}, Be = {}, za = z("$sce"), fa = {
    HTML: "html",
    CSS: "css",
    URL: "url",
    RESOURCE_URL: "resourceUrl",
    JS: "js"
  }, Y = X.createElement("a"), Gc = xa(W.location.href, !0);
  kc.$inject = ["$provide"];
  Hc.$inject = ["$locale"];
  Jc.$inject = ["$locale"];
  var Mc = ".", Me = {
    yyyy: Z("FullYear", 4),
    yy: Z("FullYear", 2, 0, !0),
    y: Z("FullYear", 1),
    MMMM: vb("Month"),
    MMM: vb("Month", !0),
    MM: Z("Month", 2, 1),
    M: Z("Month", 1, 1),
    dd: Z("Date", 2),
    d: Z("Date", 1),
    HH: Z("Hours", 2),
    H: Z("Hours", 1),
    hh: Z("Hours", 2, -12),
    h: Z("Hours", 1, -12),
    mm: Z("Minutes", 2),
    m: Z("Minutes", 1),
    ss: Z("Seconds", 2),
    s: Z("Seconds", 1),
    sss: Z("Milliseconds", 3),
    EEEE: vb("Day"),
    EEE: vb("Day", !0),
    a: function (a, c) {
      return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
    },
    Z: function (a) {
      a = -1 * a.getTimezoneOffset();
      return a = (0 <= a ? "+" : "") + (Vb(Math[0 <
      a ? "floor" : "ceil"](a / 60), 2) + Vb(Math.abs(a % 60), 2))
    }
  }, Le = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Ke = /^\-?\d+$/;
  Ic.$inject = ["$locale"];
  var Ie = aa(x), Je = aa(La);
  Kc.$inject = ["$parse"];
  var cd = aa({
    restrict: "E", compile: function (a, c) {
      8 >= R && (c.href || c.name || c.$set("href", ""), a.append(X.createComment("IE fix")));
      if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
        var f = "[object SVGAnimatedString]" === Ba.call(c.prop("href")) ? "xlink:href" : "href";
        c.on("click", function (a) {
          c.attr(f) ||
          a.preventDefault()
        })
      }
    }
  }), Fb = {};
  r(rb, function (a, c) {
    if ("multiple" != a) {
      var d = qa("ng-" + c);
      Fb[d] = function () {
        return {
          priority: 100, link: function (a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a)
            })
          }
        }
      }
    }
  });
  r(["src", "srcset", "href"], function (a) {
    var c = qa("ng-" + a);
    Fb[c] = function () {
      return {
        priority: 99, link: function (d, e, f) {
          var g = a, h = a;
          "href" === a && "[object SVGAnimatedString]" === Ba.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
          f.$observe(c, function (c) {
            c ? (f.$set(h, c), R && g && e.prop(g, f[h])) : "href" ===
            a && f.$set(h, null)
          })
        }
      }
    }
  });
  var yb = {$addControl: v, $removeControl: v, $setValidity: v, $setDirty: v, $setPristine: v};
  Nc.$inject = ["$element", "$attrs", "$scope", "$animate"];
  var Qc = function (a) {
      return ["$timeout", function (c) {
        return {
          name: "form", restrict: a ? "EAC" : "E", controller: Nc, compile: function () {
            return {
              pre: function (a, e, f, g) {
                if (!f.action) {
                  var h = function (a) {
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                  };
                  sb(e[0], "submit", h);
                  e.on("$destroy", function () {
                    c(function () {
                      bb(e[0], "submit", h)
                    }, 0, !1)
                  })
                }
                var k = e.parent().controller("form"),
                  m = f.name || f.ngForm;
                m && ub(a, m, g, m);
                if (k)e.on("$destroy", function () {
                  k.$removeControl(g);
                  m && ub(a, m, u, m);
                  E(g, yb)
                })
              }
            }
          }
        }
      }]
    }, dd = Qc(), qd = Qc(!0), Ve = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, We = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Xe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Rc = {
      text: Ab, number: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || Xe.test(a))return e.$setValidity("number",
            !0), "" === a ? null : c ? a : parseFloat(a);
          e.$setValidity("number", !1);
          return u
        });
        Ne(e, "number", Ye, null, e.$$validityState);
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? "" : "" + a
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return ua(e, "min", e.$isEmpty(a) || a >= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return ua(e, "max", e.$isEmpty(a) || a <= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return ua(e, "number", e.$isEmpty(a) ||
          jb(a), a)
        })
      }, url: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        a = function (a) {
          return ua(e, "url", e.$isEmpty(a) || Ve.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
      }, email: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        a = function (a) {
          return ua(e, "email", e.$isEmpty(a) || We.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
      }, radio: function (a, c, d, e) {
        F(d.name) && c.attr("name", ib());
        c.on("click", function () {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value)
          })
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue
        };
        d.$observe("value", e.$render)
      }, checkbox: function (a, c, d, e) {
        var f = d.ngTrueValue, g = d.ngFalseValue;
        G(f) || (f = !0);
        G(g) || (g = !1);
        c.on("click", function () {
          a.$apply(function () {
            e.$setViewValue(c[0].checked)
          })
        });
        e.$render = function () {
          c[0].checked = e.$viewValue
        };
        e.$isEmpty = function (a) {
          return a !== f
        };
        e.$formatters.push(function (a) {
          return a === f
        });
        e.$parsers.push(function (a) {
          return a ? f : g
        })
      }, hidden: v, button: v, submit: v, reset: v, file: v
    }, Ye = ["badInput"], hc = ["$browser", "$sniffer", function (a, c) {
      return {
        restrict: "E", require: "?ngModel",
        link: function (d, e, f, g) {
          g && (Rc[x(f.type)] || Rc.text)(d, e, f, g, c, a)
        }
      }
    }], wb = "ng-valid", xb = "ng-invalid", Ra = "ng-pristine", zb = "ng-dirty", Ze = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, c, d, e, f, g) {
      function h(a, c) {
        c = c ? "-" + nb(c, "-") : "";
        g.removeClass(e, (a ? xb : wb) + c);
        g.addClass(e, (a ? wb : xb) + c)
      }

      this.$modelValue = this.$viewValue = Number.NaN;
      this.$parsers = [];
      this.$formatters = [];
      this.$viewChangeListeners = [];
      this.$pristine = !0;
      this.$dirty = !1;
      this.$valid = !0;
      this.$invalid = !1;
      this.$name =
        d.name;
      var k = f(d.ngModel), m = k.assign;
      if (!m)throw z("ngModel")("nonassign", d.ngModel, ia(e));
      this.$render = v;
      this.$isEmpty = function (a) {
        return F(a) || "" === a || null === a || a !== a
      };
      var l = e.inheritedData("$formController") || yb, n = 0, q = this.$error = {};
      e.addClass(Ra);
      h(!0);
      this.$setValidity = function (a, c) {
        q[a] !== !c && (c ? (q[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, h(c, a), l.$setValidity(a, c, this))
      };
      this.$setPristine = function () {
        this.$dirty = !1;
        this.$pristine = !0;
        g.removeClass(e, zb);
        g.addClass(e, Ra)
      };
      this.$setViewValue = function (d) {
        this.$viewValue = d;
        this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Ra), g.addClass(e, zb), l.$setDirty());
        r(this.$parsers, function (a) {
          d = a(d)
        });
        this.$modelValue !== d && (this.$modelValue = d, m(a, d), r(this.$viewChangeListeners, function (a) {
          try {
            a()
          } catch (d) {
            c(d)
          }
        }))
      };
      var p = this;
      a.$watch(function () {
        var c = k(a);
        if (p.$modelValue !== c) {
          var d = p.$formatters, e = d.length;
          for (p.$modelValue = c; e--;)c = d[e](c);
          p.$viewValue !== c && (p.$viewValue =
            c, p.$render())
        }
        return c
      })
    }], Fd = function () {
      return {
        require: ["ngModel", "^?form"], controller: Ze, link: function (a, c, d, e) {
          var f = e[0], g = e[1] || yb;
          g.$addControl(f);
          a.$on("$destroy", function () {
            g.$removeControl(f)
          })
        }
      }
    }, Hd = aa({
      require: "ngModel", link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange)
        })
      }
    }), ic = function () {
      return {
        require: "?ngModel", link: function (a, c, d, e) {
          if (e) {
            d.required = !0;
            var f = function (a) {
              if (d.required && e.$isEmpty(a))e.$setValidity("required", !1); else return e.$setValidity("required",
                !0), a
            };
            e.$formatters.push(f);
            e.$parsers.unshift(f);
            d.$observe("required", function () {
              f(e.$viewValue)
            })
          }
        }
      }
    }, Gd = function () {
      return {
        require: "ngModel", link: function (a, c, d, e) {
          var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
          e.$parsers.push(function (a) {
            if (!F(a)) {
              var c = [];
              a && r(a.split(f), function (a) {
                a && c.push($(a))
              });
              return c
            }
          });
          e.$formatters.push(function (a) {
            return L(a) ? a.join(", ") : u
          });
          e.$isEmpty = function (a) {
            return !a || !a.length
          }
        }
      }
    }, $e = /^(true|false|\d+)$/, Id = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return $e.test(c.ngValue) ? function (a, c, f) {
            f.$set("value", a.$eval(f.ngValue))
          } : function (a, c, f) {
            a.$watch(f.ngValue, function (a) {
              f.$set("value", a)
            })
          }
        }
      }
    }, id = Aa({
      compile: function (a) {
        a.addClass("ng-binding");
        return function (a, d, e) {
          d.data("$binding", e.ngBind);
          a.$watch(e.ngBind, function (a) {
            d.text(a == u ? "" : a)
          })
        }
      }
    }), kd = ["$interpolate", function (a) {
      return function (c, d, e) {
        c = a(d.attr(e.$attr.ngBindTemplate));
        d.addClass("ng-binding").data("$binding", c);
        e.$observe("ngBindTemplate", function (a) {
          d.text(a)
        })
      }
    }],
    jd = ["$sce", "$parse", function (a, c) {
      return {
        compile: function (d) {
          d.addClass("ng-binding");
          return function (d, f, g) {
            f.data("$binding", g.ngBindHtml);
            var h = c(g.ngBindHtml);
            d.$watch(function () {
              return (h(d) || "").toString()
            }, function (c) {
              f.html(a.getTrustedHtml(h(d)) || "")
            })
          }
        }
      }
    }], ld = Wb("", !0), nd = Wb("Odd", 0), md = Wb("Even", 1), od = Aa({
      compile: function (a, c) {
        c.$set("ngCloak", u);
        a.removeClass("ng-cloak")
      }
    }), pd = [function () {
      return {scope: !0, controller: "@", priority: 500}
    }], jc = {}, af = {blur: !0, focus: !0};
  r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
    function (a) {
      var c = qa("ng-" + a);
      jc[c] = ["$parse", "$rootScope", function (d, e) {
        return {
          compile: function (f, g) {
            var h = d(g[c], !0);
            return function (c, d) {
              d.on(a, function (d) {
                var f = function () {
                  h(c, {$event: d})
                };
                af[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
              })
            }
          }
        }
      }]
    });
  var sd = ["$animate", function (a) {
    return {
      transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, g) {
        var h, k, m;
        c.$watch(e.ngIf, function (f) {
          Wa(f) ? k || (k = c.$new(), g(k, function (c) {
            c[c.length++] = X.createComment(" end ngIf: " + e.ngIf +
            " ");
            h = {clone: c};
            a.enter(c, d.parent(), d)
          })) : (m && (m.remove(), m = null), k && (k.$destroy(), k = null), h && (m = Eb(h.clone), a.leave(m, function () {
            m = null
          }), h = null))
        })
      }
    }
  }], td = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, c, d, e, f) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: Xa.noop,
      compile: function (g, h) {
        var k = h.ngInclude || h.src, m = h.onload || "", l = h.autoscroll;
        return function (g, h, p, r, J) {
          var w = 0, t, y, u, B = function () {
            y && (y.remove(), y = null);
            t && (t.$destroy(), t = null);
            u && (e.leave(u, function () {
              y = null
            }), y = u, u = null)
          };
          g.$watch(f.parseAsResourceUrl(k), function (f) {
            var k = function () {
              !D(l) || l && !g.$eval(l) || d()
            }, p = ++w;
            f ? (a.get(f, {cache: c}).success(function (a) {
              if (p === w) {
                var c = g.$new();
                r.template = a;
                a = J(c, function (a) {
                  B();
                  e.enter(a, null, h, k)
                });
                t = c;
                u = a;
                t.$emit("$includeContentLoaded");
                g.$eval(m)
              }
            }).error(function () {
              p === w && B()
            }), g.$emit("$includeContentRequested")) : (B(), r.template = null)
          })
        }
      }
    }
  }], Jd = ["$compile", function (a) {
    return {
      restrict: "ECA", priority: -400, require: "ngInclude",
      link: function (c, d, e, f) {
        d.html(f.template);
        a(d.contents())(c)
      }
    }
  }], ud = Aa({
    priority: 450, compile: function () {
      return {
        pre: function (a, c, d) {
          a.$eval(d.ngInit)
        }
      }
    }
  }), vd = Aa({terminal: !0, priority: 1E3}), wd = ["$locale", "$interpolate", function (a, c) {
    var d = /{}/g;
    return {
      restrict: "EA", link: function (e, f, g) {
        var h = g.count, k = g.$attr.when && f.attr(g.$attr.when), m = g.offset || 0, l = e.$eval(k) || {}, n = {}, q = c.startSymbol(), p = c.endSymbol(), s = /^when(Minus)?(.+)$/;
        r(g, function (a, c) {
          s.test(c) && (l[x(c.replace("when", "").replace("Minus", "-"))] =
            f.attr(g.$attr[c]))
        });
        r(l, function (a, e) {
          n[e] = c(a.replace(d, q + h + "-" + m + p))
        });
        e.$watch(function () {
          var c = parseFloat(e.$eval(h));
          if (isNaN(c))return "";
          c in l || (c = a.pluralCat(c - m));
          return n[c](e, f, !0)
        }, function (a) {
          f.text(a)
        })
      }
    }
  }], xd = ["$parse", "$animate", function (a, c) {
    var d = z("ngRepeat");
    return {
      transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, link: function (e, f, g, h, k) {
        var m = g.ngRepeat, l = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, q, p, s, u, w, t = {$id: Na};
        if (!l)throw d("iexp",
          m);
        g = l[1];
        h = l[2];
        (l = l[3]) ? (n = a(l), q = function (a, c, d) {
          w && (t[w] = a);
          t[u] = c;
          t.$index = d;
          return n(e, t)
        }) : (p = function (a, c) {
          return Na(c)
        }, s = function (a) {
          return a
        });
        l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
        if (!l)throw d("iidexp", g);
        u = l[3] || l[1];
        w = l[2];
        var y = {};
        e.$watchCollection(h, function (a) {
          var g, h, l = f[0], n, t = {}, D, C, I, x, G, v, z, F = [];
          if (Sa(a))v = a, G = q || p; else {
            G = q || s;
            v = [];
            for (I in a)a.hasOwnProperty(I) && "$" != I.charAt(0) && v.push(I);
            v.sort()
          }
          D = v.length;
          h = F.length = v.length;
          for (g = 0; g < h; g++)if (I = a ===
            v ? g : v[g], x = a[I], n = G(I, x, g), Ea(n, "`track by` id"), y.hasOwnProperty(n))z = y[n], delete y[n], t[n] = z, F[g] = z; else {
            if (t.hasOwnProperty(n))throw r(F, function (a) {
              a && a.scope && (y[a.id] = a)
            }), d("dupes", m, n, oa(x));
            F[g] = {id: n};
            t[n] = !1
          }
          for (I in y)y.hasOwnProperty(I) && (z = y[I], g = Eb(z.clone), c.leave(g), r(g, function (a) {
            a.$$NG_REMOVED = !0
          }), z.scope.$destroy());
          g = 0;
          for (h = v.length; g < h; g++) {
            I = a === v ? g : v[g];
            x = a[I];
            z = F[g];
            F[g - 1] && (l = F[g - 1].clone[F[g - 1].clone.length - 1]);
            if (z.scope) {
              C = z.scope;
              n = l;
              do n = n.nextSibling; while (n && n.$$NG_REMOVED);
              z.clone[0] != n && c.move(Eb(z.clone), null, A(l));
              l = z.clone[z.clone.length - 1]
            } else C = e.$new();
            C[u] = x;
            w && (C[w] = I);
            C.$index = g;
            C.$first = 0 === g;
            C.$last = g === D - 1;
            C.$middle = !(C.$first || C.$last);
            C.$odd = !(C.$even = 0 === (g & 1));
            z.scope || k(C, function (a) {
              a[a.length++] = X.createComment(" end ngRepeat: " + m + " ");
              c.enter(a, null, A(l));
              l = a;
              z.scope = C;
              z.clone = a;
              t[z.id] = z
            })
          }
          y = t
        })
      }
    }
  }], yd = ["$animate", function (a) {
    return function (c, d, e) {
      c.$watch(e.ngShow, function (c) {
        a[Wa(c) ? "removeClass" : "addClass"](d, "ng-hide")
      })
    }
  }], rd = ["$animate",
    function (a) {
      return function (c, d, e) {
        c.$watch(e.ngHide, function (c) {
          a[Wa(c) ? "addClass" : "removeClass"](d, "ng-hide")
        })
      }
    }], zd = Aa(function (a, c, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && r(d, function (a, d) {
        c.css(d, "")
      });
      a && c.css(a)
    }, !0)
  }), Ad = ["$animate", function (a) {
    return {
      restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
      }], link: function (c, d, e, f) {
        var g = [], h = [], k = [], m = [];
        c.$watch(e.ngSwitch || e.on, function (d) {
          var n, q;
          n = 0;
          for (q = k.length; n < q; ++n)k[n].remove();
          n = k.length = 0;
          for (q =
                 m.length; n < q; ++n) {
            var p = h[n];
            m[n].$destroy();
            k[n] = p;
            a.leave(p, function () {
              k.splice(n, 1)
            })
          }
          h.length = 0;
          m.length = 0;
          if (g = f.cases["!" + d] || f.cases["?"])c.$eval(e.change), r(g, function (d) {
            var e = c.$new();
            m.push(e);
            d.transclude(e, function (c) {
              var e = d.element;
              h.push(c);
              a.enter(c, e.parent(), e)
            })
          })
        })
      }
    }
  }], Bd = Aa({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
      e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
      e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
    }
  }), Cd =
    Aa({
      transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
        e.cases["?"] = e.cases["?"] || [];
        e.cases["?"].push({transclude: f, element: c})
      }
    }), Ed = Aa({
    link: function (a, c, d, e, f) {
      if (!f)throw z("ngTransclude")("orphan", ia(c));
      f(function (a) {
        c.empty();
        c.append(a)
      })
    }
  }), ed = ["$templateCache", function (a) {
    return {
      restrict: "E", terminal: !0, compile: function (c, d) {
        "text/ng-template" == d.type && a.put(d.id, c[0].text)
      }
    }
  }], bf = z("ngOptions"), Dd = aa({terminal: !0}), fd = ["$compile", "$parse", function (a, c) {
    var d =
      /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {$setViewValue: v};
    return {
      restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
        var k = this, m = {}, l = e, n;
        k.databound = d.ngModel;
        k.init = function (a, c, d) {
          l = a;
          n = d
        };
        k.addOption = function (c) {
          Ea(c, '"option value"');
          m[c] = !0;
          l.$viewValue == c && (a.val(c), n.parent() && n.remove())
        };
        k.removeOption = function (a) {
          this.hasOption(a) && (delete m[a], l.$viewValue == a && this.renderUnknownOption(a))
        };
        k.renderUnknownOption = function (c) {
          c = "? " + Na(c) + " ?";
          n.val(c);
          a.prepend(n);
          a.val(c);
          n.prop("selected", !0)
        };
        k.hasOption = function (a) {
          return m.hasOwnProperty(a)
        };
        c.$on("$destroy", function () {
          k.renderUnknownOption = v
        })
      }], link: function (e, g, h, k) {
        function m(a, c, d, e) {
          d.$render = function () {
            var a = d.$viewValue;
            e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), "" === a && w.prop("selected", !0)) : F(a) && w ? c.val("") : e.renderUnknownOption(a)
          };
          c.on("change", function () {
            a.$apply(function () {
              x.parent() && x.remove();
              d.$setViewValue(c.val())
            })
          })
        }

        function l(a, c, d) {
          var e;
          d.$render = function () {
            var a = new db(d.$viewValue);
            r(c.find("option"), function (c) {
              c.selected = D(a.get(c.value))
            })
          };
          a.$watch(function () {
            Ca(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render())
          });
          c.on("change", function () {
            a.$apply(function () {
              var a = [];
              r(c.find("option"), function (c) {
                c.selected && a.push(c.value)
              });
              d.$setViewValue(a)
            })
          })
        }

        function n(e, f, g) {
          function h() {
            var a = {"": []}, c = [""], d, k,
              s, u, v;
            s = g.$modelValue;
            u = A(e) || [];
            var F = n ? Xb(u) : u, G, Q, C;
            Q = {};
            C = !1;
            if (p)if (k = g.$modelValue, w && L(k))for (C = new db([]), d = {}, v = 0; v < k.length; v++)d[m] = k[v], C.put(w(e, d), k[v]); else C = new db(k);
            v = C;
            var E, K;
            for (C = 0; G = F.length, C < G; C++) {
              k = C;
              if (n) {
                k = F[C];
                if ("$" === k.charAt(0))continue;
                Q[n] = k
              }
              Q[m] = u[k];
              d = r(e, Q) || "";
              (k = a[d]) || (k = a[d] = [], c.push(d));
              p ? d = D(v.remove(w ? w(e, Q) : x(e, Q))) : (w ? (d = {}, d[m] = s, d = w(e, d) === w(e, Q)) : d = s === x(e, Q), v = v || d);
              E = l(e, Q);
              E = D(E) ? E : "";
              k.push({id: w ? w(e, Q) : n ? F[C] : C, label: E, selected: d})
            }
            p || (z || null ===
            s ? a[""].unshift({id: "", label: "", selected: !v}) : v || a[""].unshift({
              id: "?",
              label: "",
              selected: !0
            }));
            Q = 0;
            for (F = c.length; Q < F; Q++) {
              d = c[Q];
              k = a[d];
              B.length <= Q ? (s = {
                element: y.clone().attr("label", d),
                label: k.label
              }, u = [s], B.push(u), f.append(s.element)) : (u = B[Q], s = u[0], s.label != d && s.element.attr("label", s.label = d));
              E = null;
              C = 0;
              for (G = k.length; C < G; C++)d = k[C], (v = u[C + 1]) ? (E = v.element, v.label !== d.label && (E.text(v.label = d.label), E.prop("label", v.label)), v.id !== d.id && E.val(v.id = d.id), E[0].selected !== d.selected && (E.prop("selected",
                v.selected = d.selected), R && E.prop("selected", v.selected))) : ("" === d.id && z ? K = z : (K = t.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), u.push({
                element: K,
                label: d.label,
                id: d.id,
                selected: d.selected
              }), q.addOption(d.label, K), E ? E.after(K) : s.element.append(K), E = K);
              for (C++; u.length > C;)d = u.pop(), q.removeOption(d.label), d.element.remove()
            }
            for (; B.length > Q;)B.pop()[0].element.remove()
          }

          var k;
          if (!(k = s.match(d)))throw bf("iexp", s, ia(f));
          var l = c(k[2] || k[1]),
            m = k[4] || k[6], n = k[5], r = c(k[3] || ""), x = c(k[2] ? k[1] : m), A = c(k[7]), w = k[8] ? c(k[8]) : null, B = [[{
              element: f,
              label: ""
            }]];
          z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
          f.empty();
          f.on("change", function () {
            e.$apply(function () {
              var a, c = A(e) || [], d = {}, k, l, q, r, s, t, v;
              if (p)for (l = [], r = 0, t = B.length; r < t; r++)for (a = B[r], q = 1, s = a.length; q < s; q++) {
                if ((k = a[q].element)[0].selected) {
                  k = k.val();
                  n && (d[n] = k);
                  if (w)for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != k); v++); else d[m] = c[k];
                  l.push(x(e, d))
                }
              } else if (k = f.val(), "?" == k)l = u; else if ("" ===
                k)l = null; else if (w)for (v = 0; v < c.length; v++) {
                if (d[m] = c[v], w(e, d) == k) {
                  l = x(e, d);
                  break
                }
              } else d[m] = c[k], n && (d[n] = k), l = x(e, d);
              g.$setViewValue(l);
              h()
            })
          });
          g.$render = h;
          e.$watchCollection(A, h);
          e.$watchCollection(function () {
            var a = {}, c = A(e);
            if (c) {
              for (var d = Array(c.length), f = 0, g = c.length; f < g; f++)a[m] = c[f], d[f] = l(e, a);
              return d
            }
          }, h);
          p && e.$watchCollection(function () {
            return g.$modelValue
          }, h)
        }

        if (k[1]) {
          var q = k[0];
          k = k[1];
          var p = h.multiple, s = h.ngOptions, z = !1, w, t = A(X.createElement("option")), y = A(X.createElement("optgroup")),
            x = t.clone();
          h = 0;
          for (var B = g.children(), v = B.length; h < v; h++)if ("" === B[h].value) {
            w = z = B.eq(h);
            break
          }
          q.init(k, z, x);
          p && (k.$isEmpty = function (a) {
            return !a || 0 === a.length
          });
          s ? n(e, g, k) : p ? l(e, g, k) : m(e, g, k, q)
        }
      }
    }
  }], hd = ["$interpolate", function (a) {
    var c = {addOption: v, removeOption: v};
    return {
      restrict: "E", priority: 100, compile: function (d, e) {
        if (F(e.value)) {
          var f = a(d.text(), !0);
          f || e.$set("value", d.text())
        }
        return function (a, d, e) {
          var m = d.parent(), l = m.data("$selectController") || m.parent().data("$selectController");
          l && l.databound ?
            d.prop("selected", !1) : l = c;
          f ? a.$watch(f, function (a, c) {
            e.$set("value", a);
            a !== c && l.removeOption(c);
            l.addOption(a)
          }) : l.addOption(e.value);
          d.on("$destroy", function () {
            l.removeOption(e.value)
          })
        }
      }
    }
  }], gd = aa({restrict: "E", terminal: !0});
  W.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Fa = W.jQuery) && Fa.fn.on ? (A = Fa, E(Fa.fn, {
    scope: Oa.scope,
    isolateScope: Oa.isolateScope,
    controller: Oa.controller,
    injector: Oa.injector,
    inheritedData: Oa.inheritedData
  }), Gb("remove", !0, !0, !1), Gb("empty",
    !1, !1, !1), Gb("html", !1, !1, !0)) : A = S, Xa.element = A, Zc(Xa), A(X).ready(function () {
    Wc(X, dc)
  }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (q, g, r) {
  'use strict';
  function F(a) {
    var d = [];
    t(d, g.noop).chars(a);
    return d.join("")
  }

  function l(a) {
    var d = {};
    a = a.split(",");
    var c;
    for (c = 0; c < a.length; c++)d[a[c]] = !0;
    return d
  }

  function G(a, d) {
    function c(a, b, c, h) {
      b = g.lowercase(b);
      if (u[b])for (; f.last() && v[f.last()];)e("", f.last());
      w[b] && f.last() == b && e("", b);
      (h = x[b] || !!h) || f.push(b);
      var n = {};
      c.replace(H, function (a, b, d, c, e) {
        n[b] = s(d || c || e || "")
      });
      d.start && d.start(b, n, h)
    }

    function e(a, b) {
      var c = 0, e;
      if (b = g.lowercase(b))for (c = f.length - 1; 0 <= c && f[c] != b; c--);
      if (0 <= c) {
        for (e = f.length - 1; e >= c; e--)d.end && d.end(f[e]);
        f.length = c
      }
    }

    "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
    var b, k, f = [], n = a, h;
    for (f.last = function () {
      return f[f.length - 1]
    }; a;) {
      h = "";
      k = !0;
      if (f.last() && y[f.last()])a = a.replace(RegExp("(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i"), function (a, b) {
        b = b.replace(I, "$1").replace(J, "$1");
        d.chars && d.chars(s(b));
        return ""
      }), e("", f.last()); else {
        if (0 === a.indexOf("\x3c!--"))b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e", b) === b && (d.comment && d.comment(a.substring(4,
          b)), a = a.substring(b + 3), k = !1); else if (z.test(a)) {
          if (b = a.match(z))a = a.replace(b[0], ""), k = !1
        } else if (K.test(a)) {
          if (b = a.match(A))a = a.substring(b[0].length), b[0].replace(A, e), k = !1
        } else L.test(a) && ((b = a.match(B)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(B, c)), k = !1) : (h += "<", a = a.substring(1)));
        k && (b = a.indexOf("<"), h += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), d.chars && d.chars(s(h)))
      }
      if (a == n)throw M("badparse", a);
      n = a
    }
    e()
  }

  function s(a) {
    if (!a)return "";
    var d = N.exec(a);
    a = d[1];
    var c = d[3];
    if (d = d[2])p.innerHTML =
      d.replace(/</g, "&lt;"), d = "textContent"in p ? p.textContent : p.innerText;
    return a + d + c
  }

  function C(a) {
    return a.replace(/&/g, "&amp;").replace(O, function (a) {
      var c = a.charCodeAt(0);
      a = a.charCodeAt(1);
      return "&#" + (1024 * (c - 55296) + (a - 56320) + 65536) + ";"
    }).replace(P, function (a) {
      return "&#" + a.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function t(a, d) {
    var c = !1, e = g.bind(a, a.push);
    return {
      start: function (a, k, f) {
        a = g.lowercase(a);
        !c && y[a] && (c = a);
        c || !0 !== D[a] || (e("<"), e(a), g.forEach(k, function (c, f) {
          var m =
            g.lowercase(f), k = "img" === a && "src" === m || "background" === m;
          !0 !== Q[m] || !0 === E[m] && !d(c, k) || (e(" "), e(f), e('="'), e(C(c)), e('"'))
        }), e(f ? "/>" : ">"))
      }, end: function (a) {
        a = g.lowercase(a);
        c || !0 !== D[a] || (e("</"), e(a), e(">"));
        a == c && (c = !1)
      }, chars: function (a) {
        c || e(C(a))
      }
    }
  }

  var M = g.$$minErr("$sanitize"), B = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, A = /^<\/\s*([\w:-]+)[^>]*>/, H = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, L = /^</,
    K = /^<\//, I = /\x3c!--(.*?)--\x3e/g, z = /<!DOCTYPE([^>]*?)>/i, J = /<!\[CDATA\[(.*?)]]\x3e/g, O = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, P = /([^\#-~| |!])/g, x = l("area,br,col,hr,img,wbr");
  q = l("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
  r = l("rp,rt");
  var w = g.extend({}, r, q), u = g.extend({}, q, l("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), v = g.extend({}, r, l("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
    y = l("script,style"), D = g.extend({}, x, u, v, w), E = l("background,cite,href,longdesc,src,usemap"), Q = g.extend({}, E, l("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")), p = document.createElement("pre"), N = /^(\s*)([\s\S]*?)(\s*)$/;
  g.module("ngSanitize", []).provider("$sanitize",
    function () {
      this.$get = ["$$sanitizeUri", function (a) {
        return function (d) {
          var c = [];
          G(d, t(c, function (c, b) {
            return !/^unsafe/.test(a(c, b))
          }));
          return c.join("")
        }
      }]
    });
  g.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
    var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, c = /^mailto:/;
    return function (e, b) {
      function k(a) {
        a && m.push(F(a))
      }

      function f(a, c) {
        m.push("<a ");
        g.isDefined(b) && (m.push('target="'), m.push(b), m.push('" '));
        m.push('href="', a.replace('"', "&quot;"), '">');
        k(c);
        m.push("</a>")
      }

      if (!e)return e;
      for (var n, h = e, m = [], l, p; n = h.match(d);)l = n[0], n[2] == n[3] && (l = "mailto:" + l), p = n.index, k(h.substr(0, p)), f(l, n[0].replace(c, "")), h = h.substring(p + n[0].length);
      k(h);
      return a(m.join(""))
    }
  }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (H, a, A) {
  'use strict';
  function D(p, g) {
    g = g || {};
    a.forEach(g, function (a, c) {
      delete g[c]
    });
    for (var c in p)!p.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (g[c] = p[c]);
    return g
  }

  var v = a.$$minErr("$resource"), C = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
  a.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function (p, g) {
    function c(a, c) {
      this.template = a;
      this.defaults = c || {};
      this.urlParams = {}
    }

    function t(n, w, l) {
      function r(h, d) {
        var e = {};
        d = x({}, w, d);
        s(d, function (b, d) {
          u(b) && (b = b());
          var k;
          if (b &&
            b.charAt && "@" == b.charAt(0)) {
            k = h;
            var a = b.substr(1);
            if (null == a || "" === a || "hasOwnProperty" === a || !C.test("." + a))throw v("badmember", a);
            for (var a = a.split("."), f = 0, c = a.length; f < c && k !== A; f++) {
              var g = a[f];
              k = null !== k ? k[g] : A
            }
          } else k = b;
          e[d] = k
        });
        return e
      }

      function e(a) {
        return a.resource
      }

      function f(a) {
        D(a || {}, this)
      }

      var F = new c(n);
      l = x({}, B, l);
      s(l, function (h, d) {
        var c = /^(POST|PUT|PATCH)$/i.test(h.method);
        f[d] = function (b, d, k, w) {
          var q = {}, n, l, y;
          switch (arguments.length) {
            case 4:
              y = w, l = k;
            case 3:
            case 2:
              if (u(d)) {
                if (u(b)) {
                  l =
                    b;
                  y = d;
                  break
                }
                l = d;
                y = k
              } else {
                q = b;
                n = d;
                l = k;
                break
              }
            case 1:
              u(b) ? l = b : c ? n = b : q = b;
              break;
            case 0:
              break;
            default:
              throw v("badargs", arguments.length);
          }
          var t = this instanceof f, m = t ? n : h.isArray ? [] : new f(n), z = {}, B = h.interceptor && h.interceptor.response || e, C = h.interceptor && h.interceptor.responseError || A;
          s(h, function (a, b) {
            "params" != b && ("isArray" != b && "interceptor" != b) && (z[b] = G(a))
          });
          c && (z.data = n);
          F.setUrlParams(z, x({}, r(n, h.params || {}), q), h.url);
          q = p(z).then(function (b) {
            var d = b.data, k = m.$promise;
            if (d) {
              if (a.isArray(d) !== !!h.isArray)throw v("badcfg",
                h.isArray ? "array" : "object", a.isArray(d) ? "array" : "object");
              h.isArray ? (m.length = 0, s(d, function (b) {
                "object" === typeof b ? m.push(new f(b)) : m.push(b)
              })) : (D(d, m), m.$promise = k)
            }
            m.$resolved = !0;
            b.resource = m;
            return b
          }, function (b) {
            m.$resolved = !0;
            (y || E)(b);
            return g.reject(b)
          });
          q = q.then(function (b) {
            var a = B(b);
            (l || E)(a, b.headers);
            return a
          }, C);
          return t ? q : (m.$promise = q, m.$resolved = !1, m)
        };
        f.prototype["$" + d] = function (b, a, k) {
          u(b) && (k = a, a = b, b = {});
          b = f[d].call(this, b, this, a, k);
          return b.$promise || b
        }
      });
      f.bind = function (a) {
        return t(n,
          x({}, w, a), l)
      };
      return f
    }

    var B = {
      get: {method: "GET"},
      save: {method: "POST"},
      query: {method: "GET", isArray: !0},
      remove: {method: "DELETE"},
      "delete": {method: "DELETE"}
    }, E = a.noop, s = a.forEach, x = a.extend, G = a.copy, u = a.isFunction;
    c.prototype = {
      setUrlParams: function (c, g, l) {
        var r = this, e = l || r.template, f, p, h = r.urlParams = {};
        s(e.split(/\W/), function (a) {
          if ("hasOwnProperty" === a)throw v("badname");
          !/^\d+$/.test(a) && (a && RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(e)) && (h[a] = !0)
        });
        e = e.replace(/\\:/g, ":");
        g = g || {};
        s(r.urlParams, function (d,
                                 c) {
          f = g.hasOwnProperty(c) ? g[c] : r.defaults[c];
          a.isDefined(f) && null !== f ? (p = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), e = e.replace(RegExp(":" + c + "(\\W|$)", "g"), function (a, c) {
            return p + c
          })) : e = e.replace(RegExp("(/?):" + c + "(\\W|$)", "g"), function (a, c, d) {
            return "/" == d.charAt(0) ? d : c + d
          })
        });
        e = e.replace(/\/+$/, "") || "/";
        e = e.replace(/\/\.(?=\w+($|\?))/, ".");
        c.url = e.replace(/\/\\\./,
          "/.");
        s(g, function (a, e) {
          r.urlParams[e] || (c.params = c.params || {}, c.params[e] = a)
        })
      }
    };
    return t
  }])
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (p, f, n) {
  'use strict';
  f.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (e, b) {
    var c = {}, g = {}, h, k = !1, l = f.copy, m = f.isUndefined;
    b.addPollFn(function () {
      var a = b.cookies();
      h != a && (h = a, l(a, g), l(a, c), k && e.$apply())
    })();
    k = !0;
    e.$watch(function () {
      var a, d, e;
      for (a in g)m(c[a]) && b.cookies(a, n);
      for (a in c)d = c[a], f.isString(d) || (d = "" + d, c[a] = d), d !== g[a] && (b.cookies(a, d), e = !0);
      if (e)for (a in d = b.cookies(), c)c[a] !== d[a] && (m(d[a]) ? delete c[a] : c[a] = d[a])
    });
    return c
  }]).factory("$cookieStore",
    ["$cookies", function (e) {
      return {
        get: function (b) {
          return (b = e[b]) ? f.fromJson(b) : b
        }, put: function (b, c) {
          e[b] = f.toJson(c)
        }, remove: function (b) {
          delete e[b]
        }
      }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (G, d, P) {
  'use strict';
  d.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
    return function (H, z, e) {
      e = e.ngAnimateChildren;
      d.isString(e) && 0 === e.length ? z.data("$$ngAnimateChildren", !0) : H.$watch(e, function (d) {
        z.data("$$ngAnimateChildren", !!d)
      })
    }
  }).factory("$$animateReflow", ["$$rAF", "$document", function (d, z) {
    return function (e) {
      return d(function () {
        e()
      })
    }
  }]).config(["$provide", "$animateProvider", function (H, z) {
    function e(d) {
      for (var e = 0; e < d.length; e++) {
        var g = d[e];
        if (g.nodeType == ba)return g
      }
    }

    function E(g) {
      return d.element(e(g))
    }

    var q = d.noop, w = d.forEach, Q = z.$$selectors, ba = 1, g = "$$ngAnimateState", ga = "$$ngAnimateChildren", I = "ng-animate", h = {running: !0};
    H.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (y, G, aa, J, K, k, P) {
      function R(a) {
        var b = a.data(g) || {};
        b.running = !0;
        a.data(g, b)
      }

      function ha(a) {
        if (a) {
          var b = [], c = {};
          a = a.substr(1).split(".");
          (aa.transitions || aa.animations) && b.push(G.get(Q[""]));
          for (var f = 0; f < a.length; f++) {
            var d =
              a[f], e = Q[d];
            e && !c[d] && (b.push(G.get(e)), c[d] = !0)
          }
          return b
        }
      }

      function M(a, b, c) {
        function f(a, b) {
          var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
          if (c || d)return "leave" == b && (d = c, c = null), S.push({event: b, fn: c}), n.push({event: b, fn: d}), !0
        }

        function e(b, d, f) {
          var g = [];
          w(b, function (a) {
            a.fn && g.push(a)
          });
          var r = 0;
          w(g, function (b, e) {
            var C = function () {
              a:{
                if (d) {
                  (d[e] || q)();
                  if (++r < g.length)break a;
                  d = null
                }
                f()
              }
            };
            switch (b.event) {
              case "setClass":
                d.push(b.fn(a, l, A, C));
                break;
              case "addClass":
                d.push(b.fn(a, l || c,
                  C));
                break;
              case "removeClass":
                d.push(b.fn(a, A || c, C));
                break;
              default:
                d.push(b.fn(a, C))
            }
          });
          d && 0 === d.length && f()
        }

        var g = a[0];
        if (g) {
          var p = "setClass" == b, h = p || "addClass" == b || "removeClass" == b, l, A;
          d.isArray(c) && (l = c[0], A = c[1], c = l + " " + A);
          var k = a.attr("class") + " " + c;
          if (U(k)) {
            var t = q, v = [], n = [], x = q, u = [], S = [], k = (" " + k).replace(/\s+/g, ".");
            w(ha(k), function (a) {
              !f(a, b) && p && (f(a, "addClass"), f(a, "removeClass"))
            });
            return {
              node: g, event: b, className: c, isClassBased: h, isSetClassOperation: p, before: function (a) {
                t = a;
                e(n, v, function () {
                  t =
                    q;
                  a()
                })
              }, after: function (a) {
                x = a;
                e(S, u, function () {
                  x = q;
                  a()
                })
              }, cancel: function () {
                v && (w(v, function (a) {
                  (a || q)(!0)
                }), t(!0));
                u && (w(u, function (a) {
                  (a || q)(!0)
                }), x(!0))
              }
            }
          }
        }
      }

      function F(a, b, c, f, e, m, p) {
        function k(d) {
          var e = "$animate:" + d;
          x && (x[e] && 0 < x[e].length) && K(function () {
            c.triggerHandler(e, {event: a, className: b})
          })
        }

        function l() {
          k("before")
        }

        function A() {
          k("after")
        }

        function q() {
          k("close");
          p && K(function () {
            p()
          })
        }

        function t() {
          t.hasBeenRun || (t.hasBeenRun = !0, m())
        }

        function v() {
          if (!v.hasBeenRun) {
            v.hasBeenRun = !0;
            var e =
              c.data(g);
            e && (n && n.isClassBased ? B(c, b) : (K(function () {
              var e = c.data(g) || {};
              s == e.index && B(c, b, a)
            }), c.data(g, e)));
            q()
          }
        }

        var n = M(c, a, b);
        if (n) {
          b = n.className;
          var x = d.element._data(n.node), x = x && x.events;
          f || (f = e ? e.parent() : c.parent());
          var u = c.data(g) || {};
          e = u.active || {};
          var h = u.totalActive || 0, C = u.last, D;
          n.isClassBased && (D = u.running || u.disabled || C && !C.isClassBased);
          if (D || N(c, f))t(), l(), A(), v(); else {
            f = !1;
            if (0 < h) {
              D = [];
              if (n.isClassBased)"setClass" == C.event ? (D.push(C), B(c, b)) : e[b] && (y = e[b], y.event == a ? f = !0 : (D.push(y),
                B(c, b))); else if ("leave" == a && e["ng-leave"])f = !0; else {
                for (var y in e)D.push(e[y]), B(c, y);
                e = {};
                h = 0
              }
              0 < D.length && w(D, function (a) {
                a.cancel()
              })
            }
            !n.isClassBased || (n.isSetClassOperation || f) || (f = "addClass" == a == c.hasClass(b));
            if (f)t(), l(), A(), q(); else {
              if ("leave" == a)c.one("$destroy", function (a) {
                a = d.element(this);
                var b = a.data(g);
                b && (b = b.active["ng-leave"]) && (b.cancel(), B(a, "ng-leave"))
              });
              c.addClass(I);
              var s = O++;
              h++;
              e[b] = n;
              c.data(g, {last: n, active: e, index: s, totalActive: h});
              l();
              n.before(function (e) {
                var d = c.data(g);
                e = e || !d || !d.active[b] || n.isClassBased && d.active[b].event != a;
                t();
                !0 === e ? v() : (A(), n.after(v))
              })
            }
          }
        } else t(), l(), A(), v()
      }

      function V(a) {
        if (a = e(a))a = d.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(I) : a.querySelectorAll("." + I), w(a, function (a) {
          a = d.element(a);
          (a = a.data(g)) && a.active && w(a.active, function (a) {
            a.cancel()
          })
        })
      }

      function B(a, b) {
        if (e(a) == e(J))h.disabled || (h.running = !1, h.structural = !1); else if (b) {
          var c = a.data(g) || {}, d = !0 === b;
          !d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
          if (d || !c.totalActive)a.removeClass(I), a.removeData(g)
        }
      }

      function N(a, b) {
        if (h.disabled)return !0;
        if (e(a) == e(J))return h.running;
        var c, f, k;
        do {
          if (0 === b.length)break;
          var m = e(b) == e(J), p = m ? h : b.data(g) || {};
          if (p.disabled)return !0;
          m && (k = !0);
          !1 !== c && (m = b.data(ga), d.isDefined(m) && (c = m));
          f = f || p.running || p.last && !p.last.isClassBased
        } while (b = b.parent());
        return !k || !c && f
      }

      var O = 0;
      J.data(g, h);
      k.$$postDigest(function () {
        k.$$postDigest(function () {
          h.running = !1
        })
      });
      var W = z.classNameFilter(), U = W ? function (a) {
        return W.test(a)
      } :
        function () {
          return !0
        };
      return {
        enter: function (a, b, c, e) {
          a = d.element(a);
          b = b && d.element(b);
          c = c && d.element(c);
          R(a);
          y.enter(a, b, c);
          k.$$postDigest(function () {
            a = E(a);
            F("enter", "ng-enter", a, b, c, q, e)
          })
        }, leave: function (a, b) {
          a = d.element(a);
          V(a);
          R(a);
          k.$$postDigest(function () {
            F("leave", "ng-leave", E(a), null, null, function () {
              y.leave(a)
            }, b)
          })
        }, move: function (a, b, c, e) {
          a = d.element(a);
          b = b && d.element(b);
          c = c && d.element(c);
          V(a);
          R(a);
          y.move(a, b, c);
          k.$$postDigest(function () {
            a = E(a);
            F("move", "ng-move", a, b, c, q, e)
          })
        }, addClass: function (a,
                               b, c) {
          a = d.element(a);
          a = E(a);
          F("addClass", b, a, null, null, function () {
            y.addClass(a, b)
          }, c)
        }, removeClass: function (a, b, c) {
          a = d.element(a);
          a = E(a);
          F("removeClass", b, a, null, null, function () {
            y.removeClass(a, b)
          }, c)
        }, setClass: function (a, b, c, e) {
          a = d.element(a);
          a = E(a);
          F("setClass", [b, c], a, null, null, function () {
            y.setClass(a, b, c)
          }, e)
        }, enabled: function (a, b) {
          switch (arguments.length) {
            case 2:
              if (a)B(b); else {
                var c = b.data(g) || {};
                c.disabled = !0;
                b.data(g, c)
              }
              break;
            case 1:
              h.disabled = !a;
              break;
            default:
              a = !h.disabled
          }
          return !!a
        }
      }
    }]);
    z.register("",
      ["$window", "$sniffer", "$timeout", "$$animateReflow", function (g, h, z, J) {
        function K() {
          L || (L = J(function () {
            T = [];
            L = null;
            s = {}
          }))
        }

        function k(a, X) {
          L && L();
          T.push(X);
          L = J(function () {
            w(T, function (a) {
              a()
            });
            T = [];
            L = null;
            s = {}
          })
        }

        function E(a, X) {
          var b = e(a);
          a = d.element(b);
          Y.push(a);
          b = Date.now() + X;
          b <= fa || (z.cancel(ea), fa = b, ea = z(function () {
            R(Y);
            Y = []
          }, X, !1))
        }

        function R(a) {
          w(a, function (a) {
            (a = a.data(u)) && (a.closeAnimationFn || q)()
          })
        }

        function I(a, b) {
          var c = b ? s[b] : null;
          if (!c) {
            var e = 0, d = 0, f = 0, k = 0, h, Z, $, m;
            w(a, function (a) {
              if (a.nodeType ==
                ba) {
                a = g.getComputedStyle(a) || {};
                $ = a[p + Q];
                e = Math.max(M($), e);
                m = a[p + t];
                h = a[p + v];
                d = Math.max(M(h), d);
                Z = a[l + v];
                k = Math.max(M(Z), k);
                var b = M(a[l + Q]);
                0 < b && (b *= parseInt(a[l + n], 10) || 1);
                f = Math.max(b, f)
              }
            });
            c = {
              total: 0,
              transitionPropertyStyle: m,
              transitionDurationStyle: $,
              transitionDelayStyle: h,
              transitionDelay: d,
              transitionDuration: e,
              animationDelayStyle: Z,
              animationDelay: k,
              animationDuration: f
            };
            b && (s[b] = c)
          }
          return c
        }

        function M(a) {
          var b = 0;
          a = d.isString(a) ? a.split(/\s*,\s*/) : [];
          w(a, function (a) {
            b = Math.max(parseFloat(a) ||
            0, b)
          });
          return b
        }

        function F(a) {
          var b = a.parent(), c = b.data(x);
          c || (b.data(x, ++da), c = da);
          return c + "-" + e(a).getAttribute("class")
        }

        function V(a, b, c, d) {
          var f = F(b), g = f + " " + c, k = s[g] ? ++s[g].total : 0, h = {};
          if (0 < k) {
            var m = c + "-stagger", h = f + " " + m;
            (f = !s[h]) && b.addClass(m);
            h = I(b, h);
            f && b.removeClass(m)
          }
          d = d || function (a) {
            return a()
          };
          b.addClass(c);
          var m = b.data(u) || {}, n = d(function () {
            return I(b, g)
          });
          d = n.transitionDuration;
          f = n.animationDuration;
          if (0 === d && 0 === f)return b.removeClass(c), !1;
          b.data(u, {
            running: m.running || 0, itemIndex: k,
            stagger: h, timings: n, closeAnimationFn: q
          });
          a = 0 < m.running || "setClass" == a;
          0 < d && B(b, c, a);
          0 < f && (0 < h.animationDelay && 0 === h.animationDuration) && (e(b).style[l] = "none 0s");
          return !0
        }

        function B(a, b, c) {
          "ng-enter" != b && ("ng-move" != b && "ng-leave" != b) && c ? a.addClass(S) : e(a).style[p + t] = "none"
        }

        function N(a, b) {
          var c = p + t, d = e(a);
          d.style[c] && 0 < d.style[c].length && (d.style[c] = "");
          a.removeClass(S)
        }

        function O(a) {
          var b = l;
          a = e(a);
          a.style[b] && 0 < a.style[b].length && (a.style[b] = "")
        }

        function W(a, b, c, d) {
          function g(a) {
            b.off(z, h);
            b.removeClass(n);
            f(b, c);
            a = e(b);
            for (var d in s)a.style.removeProperty(s[d])
          }

          function h(a) {
            a.stopPropagation();
            var b = a.originalEvent || a;
            a = b.$manualTimeStamp || b.timeStamp || Date.now();
            b = parseFloat(b.elapsedTime.toFixed(C));
            Math.max(a - y, 0) >= x && b >= t && d()
          }

          var k = e(b);
          a = b.data(u);
          if (-1 != k.getAttribute("class").indexOf(c) && a) {
            var n = "";
            w(c.split(" "), function (a, b) {
              n += (0 < b ? " " : "") + a + "-active"
            });
            var p = a.stagger, l = a.timings, q = a.itemIndex, t = Math.max(l.transitionDuration, l.animationDuration), v = Math.max(l.transitionDelay, l.animationDelay),
              x = v * ca, y = Date.now(), z = A + " " + H, r = "", s = [];
            if (0 < l.transitionDuration) {
              var B = l.transitionPropertyStyle;
              -1 == B.indexOf("all") && (r += m + "transition-property: " + B + ";", r += m + "transition-duration: " + l.transitionDurationStyle + ";", s.push(m + "transition-property"), s.push(m + "transition-duration"))
            }
            0 < q && (0 < p.transitionDelay && 0 === p.transitionDuration && (r += m + "transition-delay: " + U(l.transitionDelayStyle, p.transitionDelay, q) + "; ", s.push(m + "transition-delay")), 0 < p.animationDelay && 0 === p.animationDuration && (r += m + "animation-delay: " +
            U(l.animationDelayStyle, p.animationDelay, q) + "; ", s.push(m + "animation-delay")));
            0 < s.length && (l = k.getAttribute("style") || "", k.setAttribute("style", l + "; " + r));
            b.on(z, h);
            b.addClass(n);
            a.closeAnimationFn = function () {
              g();
              d()
            };
            k = (q * (Math.max(p.animationDelay, p.transitionDelay) || 0) + (v + t) * D) * ca;
            a.running++;
            E(b, k);
            return g
          }
          d()
        }

        function U(a, b, c) {
          var d = "";
          w(a.split(","), function (a, e) {
            d += (0 < e ? "," : "") + (c * b + parseInt(a, 10)) + "s"
          });
          return d
        }

        function a(a, b, c, d) {
          if (V(a, b, c, d))return function (a) {
            a && f(b, c)
          }
        }

        function b(a,
                   b, c, d) {
          if (b.data(u))return W(a, b, c, d);
          f(b, c);
          d()
        }

        function c(c, d, e, f) {
          var g = a(c, d, e);
          if (g) {
            var h = g;
            k(d, function () {
              N(d, e);
              O(d);
              h = b(c, d, e, f)
            });
            return function (a) {
              (h || q)(a)
            }
          }
          K();
          f()
        }

        function f(a, b) {
          a.removeClass(b);
          var c = a.data(u);
          c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(u))
        }

        function r(a, b) {
          var c = "";
          a = d.isArray(a) ? a : a.split(/\s+/);
          w(a, function (a, d) {
            a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
          });
          return c
        }

        var m = "", p, H, l, A;
        G.ontransitionend === P && G.onwebkittransitionend !== P ? (m = "-webkit-",
          p = "WebkitTransition", H = "webkitTransitionEnd transitionend") : (p = "transition", H = "transitionend");
        G.onanimationend === P && G.onwebkitanimationend !== P ? (m = "-webkit-", l = "WebkitAnimation", A = "webkitAnimationEnd animationend") : (l = "animation", A = "animationend");
        var Q = "Duration", t = "Property", v = "Delay", n = "IterationCount", x = "$$ngAnimateKey", u = "$$ngAnimateCSS3Data", S = "ng-animate-block-transitions", C = 3, D = 1.5, ca = 1E3, s = {}, da = 0, T = [], L, ea = null, fa = 0, Y = [];
        return {
          enter: function (a, b) {
            return c("enter", a, "ng-enter", b)
          }, leave: function (a,
                              b) {
            return c("leave", a, "ng-leave", b)
          }, move: function (a, b) {
            return c("move", a, "ng-move", b)
          }, beforeSetClass: function (b, c, d, e) {
            var f = r(d, "-remove") + " " + r(c, "-add"), g = a("setClass", b, f, function (a) {
              var e = b.attr("class");
              b.removeClass(d);
              b.addClass(c);
              a = a();
              b.attr("class", e);
              return a
            });
            if (g)return k(b, function () {
              N(b, f);
              O(b);
              e()
            }), g;
            K();
            e()
          }, beforeAddClass: function (b, c, d) {
            var e = a("addClass", b, r(c, "-add"), function (a) {
              b.addClass(c);
              a = a();
              b.removeClass(c);
              return a
            });
            if (e)return k(b, function () {
              N(b, c);
              O(b);
              d()
            }),
              e;
            K();
            d()
          }, setClass: function (a, c, d, e) {
            d = r(d, "-remove");
            c = r(c, "-add");
            return b("setClass", a, d + " " + c, e)
          }, addClass: function (a, c, d) {
            return b("addClass", a, r(c, "-add"), d)
          }, beforeRemoveClass: function (b, c, d) {
            var e = a("removeClass", b, r(c, "-remove"), function (a) {
              var d = b.attr("class");
              b.removeClass(c);
              a = a();
              b.attr("class", d);
              return a
            });
            if (e)return k(b, function () {
              N(b, c);
              O(b);
              d()
            }), e;
            d()
          }, removeClass: function (a, c, d) {
            return b("removeClass", a, r(c, "-remove"), d)
          }
        }
      }])
  }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.2 - 2014-09-26
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
  function d(a) {
    for (var b in a)if (void 0 !== f.style[b])return a[b]
  }

  var e = function (d, f, g) {
    g = g || {};
    var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function () {
      c.$apply(function () {
        d.unbind(i, j), h.resolve(d)
      })
    };
    return i && d.bind(i, j), b(function () {
      angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
    }), h.promise.cancel = function () {
      i && d.unbind(i, j), h.reject("Transition cancelled")
    }, h.promise
  }, f = document.createElement("trans"), g = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    transition: "transitionend"
  }, h = {
    WebkitTransition: "webkitAnimationEnd",
    MozTransition: "animationend",
    OTransition: "oAnimationEnd",
    transition: "animationend"
  };
  return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (a) {
  return {
    link: function (b, c, d) {
      function e(b) {
        function d() {
          j === e && (j = void 0)
        }

        var e = a(c, b);
        return j && j.cancel(), j = e, e.then(d, d), e
      }

      function f() {
        k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({height: c[0].scrollHeight + "px"}).then(g))
      }

      function g() {
        c.removeClass("collapsing"), c.addClass("collapse in"), c.css({height: "auto"})
      }

      function h() {
        if (k)k = !1, i(), c.css({height: 0}); else {
          c.css({height: c[0].scrollHeight + "px"});
          {
            c[0].offsetWidth
          }
          c.removeClass("collapse in").addClass("collapsing"), e({height: 0}).then(i)
        }
      }

      function i() {
        c.removeClass("collapsing"), c.addClass("collapse")
      }

      var j, k = !0;
      b.$watch(d.collapse, function (a) {
        a ? h() : f()
      })
    }
  }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (a, b, c) {
  this.groups = [], this.closeOthers = function (d) {
    var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
    e && angular.forEach(this.groups, function (a) {
      a !== d && (a.isOpen = !1)
    })
  }, this.addGroup = function (a) {
    var b = this;
    this.groups.push(a), a.$on("$destroy", function () {
      b.removeGroup(a)
    })
  }, this.removeGroup = function (a) {
    var b = this.groups.indexOf(a);
    -1 !== b && this.groups.splice(b, 1)
  }
}]).directive("accordion", function () {
  return {
    restrict: "EA",
    controller: "AccordionController",
    transclude: !0,
    replace: !1,
    templateUrl: "template/accordion/accordion.html"
  }
}).directive("accordionGroup", function () {
  return {
    require: "^accordion",
    restrict: "EA",
    transclude: !0,
    replace: !0,
    templateUrl: "template/accordion/accordion-group.html",
    scope: {heading: "@", isOpen: "=?", isDisabled: "=?"},
    controller: function () {
      this.setHeading = function (a) {
        this.heading = a
      }
    },
    link: function (a, b, c, d) {
      d.addGroup(a), a.$watch("isOpen", function (b) {
        b && d.closeOthers(a)
      }), a.toggleOpen = function () {
        a.isDisabled || (a.isOpen = !a.isOpen)
      }
    }
  }
}).directive("accordionHeading", function () {
  return {
    restrict: "EA",
    transclude: !0,
    template: "",
    replace: !0,
    require: "^accordionGroup",
    link: function (a, b, c, d, e) {
      d.setHeading(e(a, function () {
      }))
    }
  }
}).directive("accordionTransclude", function () {
  return {
    require: "^accordionGroup", link: function (a, b, c, d) {
      a.$watch(function () {
        return d[c.accordionTransclude]
      }, function (a) {
        a && (b.html(""), b.append(a))
      })
    }
  }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (a, b) {
  a.closeable = "close"in b
}]).directive("alert", function () {
  return {
    restrict: "EA",
    controller: "AlertController",
    templateUrl: "template/alert/alert.html",
    transclude: !0,
    replace: !0,
    scope: {type: "@", close: "&"}
  }
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
  return function (a, b, c) {
    b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
      b.html(a || "")
    })
  }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
  activeClass: "active",
  toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function (a) {
  this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function () {
  return {
    require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f.$render = function () {
        b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
      }, b.bind(e.toggleEvent, function () {
        var d = b.hasClass(e.activeClass);
        (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
          f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
        })
      })
    }
  }
}).directive("btnCheckbox", function () {
  return {
    require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
      function e() {
        return g(c.btnCheckboxTrue, !0)
      }

      function f() {
        return g(c.btnCheckboxFalse, !1)
      }

      function g(b, c) {
        var d = a.$eval(b);
        return angular.isDefined(d) ? d : c
      }

      var h = d[0], i = d[1];
      i.$render = function () {
        b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
      }, b.bind(h.toggleEvent, function () {
        a.$apply(function () {
          i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
        })
      })
    }
  }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", function (a, b, c) {
  function d() {
    e();
    var c = +a.interval;
    !isNaN(c) && c >= 0 && (g = b(f, c))
  }

  function e() {
    g && (b.cancel(g), g = null)
  }

  function f() {
    h ? (a.next(), d()) : a.pause()
  }

  var g, h, i = this, j = i.slides = a.slides = [], k = -1;
  i.currentSlide = null;
  var l = !1;
  i.select = a.select = function (e, f) {
    function g() {
      if (!l) {
        if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
          e.$element.addClass(f);
          {
            e.$element[0].offsetWidth
          }
          angular.forEach(j, function (a) {
            angular.extend(a, {direction: "", entering: !1, leaving: !1, active: !1})
          }), angular.extend(e, {
            direction: f,
            active: !0,
            entering: !0
          }), angular.extend(i.currentSlide || {}, {
            direction: f,
            leaving: !0
          }), a.$currentTransition = c(e.$element, {}), function (b, c) {
            a.$currentTransition.then(function () {
              h(b, c)
            }, function () {
              h(b, c)
            })
          }(e, i.currentSlide)
        } else h(e, i.currentSlide);
        i.currentSlide = e, k = m, d()
      }
    }

    function h(b, c) {
      angular.extend(b, {direction: "", active: !0, leaving: !1, entering: !1}), angular.extend(c || {}, {
        direction: "",
        active: !1,
        leaving: !1,
        entering: !1
      }), a.$currentTransition = null
    }

    var m = j.indexOf(e);
    void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
  }, a.$on("$destroy", function () {
    l = !0
  }), i.indexOfSlide = function (a) {
    return j.indexOf(a)
  }, a.next = function () {
    var b = (k + 1) % j.length;
    return a.$currentTransition ? void 0 : i.select(j[b], "next")
  }, a.prev = function () {
    var b = 0 > k - 1 ? j.length - 1 : k - 1;
    return a.$currentTransition ? void 0 : i.select(j[b], "prev")
  }, a.isActive = function (a) {
    return i.currentSlide === a
  }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function () {
    h || (h = !0, d())
  }, a.pause = function () {
    a.noPause || (h = !1, e())
  }, i.addSlide = function (b, c) {
    b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
  }, i.removeSlide = function (a) {
    var b = j.indexOf(a);
    j.splice(b, 1), j.length > 0 && a.active ? i.select(b >= j.length ? j[b - 1] : j[b]) : k > b && k--
  }
}]).directive("carousel", [function () {
  return {
    restrict: "EA",
    transclude: !0,
    replace: !0,
    controller: "CarouselController",
    require: "carousel",
    templateUrl: "template/carousel/carousel.html",
    scope: {interval: "=", noTransition: "=", noPause: "="}
  }
}]).directive("slide", function () {
  return {
    require: "^carousel",
    restrict: "EA",
    transclude: !0,
    replace: !0,
    templateUrl: "template/carousel/slide.html",
    scope: {active: "=?"},
    link: function (a, b, c, d) {
      d.addSlide(a, b), a.$on("$destroy", function () {
        d.removeSlide(a)
      }), a.$watch("active", function (b) {
        b && d.select(a)
      })
    }
  }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (a, b) {
  function c(a) {
    var c = [], d = a.split("");
    return angular.forEach(e, function (b, e) {
      var f = a.indexOf(e);
      if (f > -1) {
        a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
        for (var g = f + 1, h = f + e.length; h > g; g++)d[g] = "", a[g] = "$";
        a = a.join(""), c.push({index: f, apply: b.apply})
      }
    }), {regex: new RegExp("^" + d.join("") + "$"), map: b(c, "index")}
  }

  function d(a, b, c) {
    return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
  }

  this.parsers = {};
  var e = {
    yyyy: {
      regex: "\\d{4}", apply: function (a) {
        this.year = +a
      }
    }, yy: {
      regex: "\\d{2}", apply: function (a) {
        this.year = +a + 2e3
      }
    }, y: {
      regex: "\\d{1,4}", apply: function (a) {
        this.year = +a
      }
    }, MMMM: {
      regex: a.DATETIME_FORMATS.MONTH.join("|"), apply: function (b) {
        this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
      }
    }, MMM: {
      regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (b) {
        this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
      }
    }, MM: {
      regex: "0[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
      }
    }, M: {
      regex: "[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
      }
    }, dd: {
      regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
      }
    }, d: {
      regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
      }
    }, EEEE: {regex: a.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: a.DATETIME_FORMATS.SHORTDAY.join("|")}
  };
  this.parse = function (b, e) {
    if (!angular.isString(b) || !e)return b;
    e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
    var f = this.parsers[e], g = f.regex, h = f.map, i = b.match(g);
    if (i && i.length) {
      for (var j, k = {year: 1900, month: 0, date: 1, hours: 0}, l = 1, m = i.length; m > l; l++) {
        var n = h[l - 1];
        n.apply && n.apply.call(k, i[l])
      }
      return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
    }
  }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (a, b) {
  function c(a, c) {
    return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
  }

  function d(a) {
    return "static" === (c(a, "position") || "static")
  }

  var e = function (b) {
    for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)e = e.offsetParent;
    return e || c
  };
  return {
    position: function (b) {
      var c = this.offset(b), d = {top: 0, left: 0}, f = e(b[0]);
      f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
      var g = b[0].getBoundingClientRect();
      return {
        width: g.width || b.prop("offsetWidth"),
        height: g.height || b.prop("offsetHeight"),
        top: c.top - d.top,
        left: c.left - d.left
      }
    }, offset: function (c) {
      var d = c[0].getBoundingClientRect();
      return {
        width: d.width || c.prop("offsetWidth"),
        height: d.height || c.prop("offsetHeight"),
        top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
        left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
      }
    }, positionElements: function (a, b, c, d) {
      var e, f, g, h, i = c.split("-"), j = i[0], k = i[1] || "center";
      e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
      var l = {
        center: function () {
          return e.left + e.width / 2 - f / 2
        }, left: function () {
          return e.left
        }, right: function () {
          return e.left + e.width
        }
      }, m = {
        center: function () {
          return e.top + e.height / 2 - g / 2
        }, top: function () {
          return e.top
        }, bottom: function () {
          return e.top + e.height
        }
      };
      switch (j) {
        case"right":
          h = {top: m[k](), left: l[j]()};
          break;
        case"left":
          h = {top: m[k](), left: e.left - f};
          break;
        case"bottom":
          h = {top: m[j](), left: l[k]()};
          break;
        default:
          h = {top: e.top - g, left: l[k]()}
      }
      return h
    }
  }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
  formatDay: "dd",
  formatMonth: "MMMM",
  formatYear: "yyyy",
  formatDayHeader: "EEE",
  formatDayTitle: "MMMM yyyy",
  formatMonthTitle: "yyyy",
  datepickerMode: "day",
  minMode: "day",
  maxMode: "year",
  showWeeks: !0,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (a, b, c, d, e, f, g, h) {
  var i = this, j = {$setViewValue: angular.noop};
  this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (c, e) {
    i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
  }), angular.forEach(["minDate", "maxDate"], function (d) {
    b[d] ? a.$parent.$watch(c(b[d]), function (a) {
      i[d] = a ? new Date(a) : null, i.refreshView()
    }) : i[d] = h[d] ? new Date(h[d]) : null
  }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function (b) {
    return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
  }, this.init = function (a) {
    j = a, j.$render = function () {
      i.render()
    }
  }, this.render = function () {
    if (j.$modelValue) {
      var a = new Date(j.$modelValue), b = !isNaN(a);
      b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
    }
    this.refreshView()
  }, this.refreshView = function () {
    if (this.element) {
      this._refreshView();
      var a = j.$modelValue ? new Date(j.$modelValue) : null;
      j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
    }
  }, this.createDateObject = function (a, b) {
    var c = j.$modelValue ? new Date(j.$modelValue) : null;
    return {
      date: a,
      label: g(a, b),
      selected: c && 0 === this.compare(a, c),
      disabled: this.isDisabled(a),
      current: 0 === this.compare(a, new Date)
    }
  }, this.isDisabled = function (c) {
    return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      })
  }, this.split = function (a, b) {
    for (var c = []; a.length > 0;)c.push(a.splice(0, b));
    return c
  }, a.select = function (b) {
    if (a.datepickerMode === i.minMode) {
      var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
      c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
    } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
  }, a.move = function (a) {
    var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
    i.activeDate.setFullYear(b, c, 1), i.refreshView()
  }, a.toggleMode = function (b) {
    b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
  }, a.keys = {
    13: "enter",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  var k = function () {
    e(function () {
      i.element[0].focus()
    }, 0, !1)
  };
  a.$on("datepicker.focus", k), a.keydown = function (b) {
    var c = a.keys[b.which];
    if (c && !b.shiftKey && !b.altKey)if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
      if (i.isDisabled(i.activeDate))return;
      a.select(i.activeDate), k()
    } else!b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
  }
}]).directive("datepicker", function () {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/datepicker.html",
    scope: {datepickerMode: "=?", dateDisabled: "&"},
    require: ["datepicker", "?^ngModel"],
    controller: "DatepickerController",
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f)
    }
  }
}).directive("daypicker", ["dateFilter", function (a) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/day.html",
    require: "^datepicker",
    link: function (b, c, d, e) {
      function f(a, b) {
        return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
      }

      function g(a, b) {
        var c = new Array(b), d = new Date(a), e = 0;
        for (d.setHours(12); b > e;)c[e++] = new Date(d), d.setDate(d.getDate() + 1);
        return c
      }

      function h(a) {
        var b = new Date(a);
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
      }

      b.showWeeks = e.showWeeks, e.step = {months: 1}, e.element = c;
      var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      e._refreshView = function () {
        var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
        j > 0 && k.setDate(-j + 1);
        for (var l = g(k, 42), m = 0; 42 > m; m++)l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
          secondary: l[m].getMonth() !== d,
          uid: b.uniqueId + "-" + m
        });
        b.labels = new Array(7);
        for (var n = 0; 7 > n; n++)b.labels[n] = {abbr: a(l[n].date, e.formatDayHeader), full: a(l[n].date, "EEEE")};
        if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
          b.weekNumbers = [];
          for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
        }
      }, e.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
      }, e.handleKeyDown = function (a) {
        var b = e.activeDate.getDate();
        if ("left" === a)b -= 1; else if ("up" === a)b -= 7; else if ("right" === a)b += 1; else if ("down" === a)b += 7; else if ("pageup" === a || "pagedown" === a) {
          var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
          e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
        } else"home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
        e.activeDate.setDate(b)
      }, e.refreshView()
    }
  }
}]).directive("monthpicker", ["dateFilter", function (a) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/month.html",
    require: "^datepicker",
    link: function (b, c, d, e) {
      e.step = {years: 1}, e.element = c, e._refreshView = function () {
        for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++)c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {uid: b.uniqueId + "-" + f});
        b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
      }, e.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
      }, e.handleKeyDown = function (a) {
        var b = e.activeDate.getMonth();
        if ("left" === a)b -= 1; else if ("up" === a)b -= 3; else if ("right" === a)b += 1; else if ("down" === a)b += 3; else if ("pageup" === a || "pagedown" === a) {
          var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
          e.activeDate.setFullYear(c)
        } else"home" === a ? b = 0 : "end" === a && (b = 11);
        e.activeDate.setMonth(b)
      }, e.refreshView()
    }
  }
}]).directive("yearpicker", ["dateFilter", function () {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/year.html",
    require: "^datepicker",
    link: function (a, b, c, d) {
      function e(a) {
        return parseInt((a - 1) / f, 10) * f + 1
      }

      var f = d.yearRange;
      d.step = {years: f}, d.element = b, d._refreshView = function () {
        for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++)b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {uid: a.uniqueId + "-" + c});
        a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
      }, d.compare = function (a, b) {
        return a.getFullYear() - b.getFullYear()
      }, d.handleKeyDown = function (a) {
        var b = d.activeDate.getFullYear();
        "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
      }, d.refreshView()
    }
  }
}]).constant("datepickerPopupConfig", {
  datepickerPopup: "yyyy-MM-dd",
  currentText: "Today",
  clearText: "Clear",
  closeText: "Done",
  closeOnDateSelection: !0,
  appendToBody: !1,
  showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function (a, b, c, d, e, f, g) {
  return {
    restrict: "EA",
    require: "ngModel",
    scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&"},
    link: function (h, i, j, k) {
      function l(a) {
        return a.replace(/([A-Z])/g, function (a) {
          return "-" + a.toLowerCase()
        })
      }

      function m(a) {
        if (a) {
          if (angular.isDate(a) && !isNaN(a))return k.$setValidity("date", !0), a;
          if (angular.isString(a)) {
            var b = f.parse(a, n) || new Date(a);
            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
          }
          return void k.$setValidity("date", !1)
        }
        return k.$setValidity("date", !0), null
      }

      var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection, p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
      h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
        return h[a + "Text"] || g[a + "Text"]
      }, j.$observe("datepickerPopup", function (a) {
        n = a || g.datepickerPopup, k.$render()
      });
      var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
      q.attr({"ng-model": "date", "ng-change": "dateSelection()"});
      var r = angular.element(q.children()[0]);
      j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
        r.attr(l(b), a)
      }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function (a) {
        if (j[a]) {
          var c = b(j[a]);
          if (h.$parent.$watch(c, function (b) {
              h.watchData[a] = b
            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
            var d = c.assign;
            h.$watch("watchData." + a, function (a, b) {
              a !== b && d(h.$parent, a)
            })
          }
        }
      }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function (a) {
        angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
      }, i.bind("input change keyup", function () {
        h.$apply(function () {
          h.date = k.$modelValue
        })
      }), k.$render = function () {
        var a = k.$viewValue ? e(k.$viewValue, n) : "";
        i.val(a), h.date = m(k.$modelValue)
      };
      var s = function (a) {
        h.isOpen && a.target !== i[0] && h.$apply(function () {
          h.isOpen = !1
        })
      }, t = function (a) {
        h.keydown(a)
      };
      i.bind("keydown", t), h.keydown = function (a) {
        27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
      }, h.$watch("isOpen", function (a) {
        a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
      }), h.select = function (a) {
        if ("today" === a) {
          var b = new Date;
          angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
        }
        h.dateSelection(a)
      }, h.close = function () {
        h.isOpen = !1, i[0].focus()
      };
      var u = a(q)(h);
      q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function () {
        u.remove(), i.unbind("keydown", t), c.unbind("click", s)
      })
    }
  }
}]).directive("datepickerPopupWrap", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    templateUrl: "template/datepicker/popup.html",
    link: function (a, b) {
      b.bind("click", function (a) {
        a.preventDefault(), a.stopPropagation()
      })
    }
  }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function (a) {
  var b = null;
  this.open = function (e) {
    b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
  }, this.close = function (e) {
    b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
  };
  var c = function (a) {
    var c = b.getToggleElement();
    a && c && c[0].contains(a.target) || b.$apply(function () {
      b.isOpen = !1
    })
  }, d = function (a) {
    27 === a.which && (b.focusToggleElement(), c())
  }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function (a, b, c, d, e, f) {
  var g, h = this, i = a.$new(), j = d.openClass, k = angular.noop, l = b.onToggle ? c(b.onToggle) : angular.noop;
  this.init = function (d) {
    h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
      i.isOpen = !!a
    }))
  }, this.toggle = function (a) {
    return i.isOpen = arguments.length ? !!a : !i.isOpen
  }, this.isOpen = function () {
    return i.isOpen
  }, i.getToggleElement = function () {
    return h.toggleElement
  }, i.focusToggleElement = function () {
    h.toggleElement && h.toggleElement[0].focus()
  }, i.$watch("isOpen", function (b, c) {
    f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {open: !!b})
  }), a.$on("$locationChangeSuccess", function () {
    i.isOpen = !1
  }), a.$on("$destroy", function () {
    i.$destroy()
  })
}]).directive("dropdown", function () {
  return {
    restrict: "CA", controller: "DropdownController", link: function (a, b, c, d) {
      d.init(b)
    }
  }
}).directive("dropdownToggle", function () {
  return {
    restrict: "CA", require: "?^dropdown", link: function (a, b, c, d) {
      if (d) {
        d.toggleElement = b;
        var e = function (e) {
          e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
            d.toggle()
          })
        };
        b.bind("click", e), b.attr({"aria-haspopup": !0, "aria-expanded": !1}), a.$watch(d.isOpen, function (a) {
          b.attr("aria-expanded", !!a)
        }), a.$on("$destroy", function () {
          b.unbind("click", e)
        })
      }
    }
  }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
  return {
    createNew: function () {
      var a = [];
      return {
        add: function (b, c) {
          a.push({key: b, value: c})
        }, get: function (b) {
          for (var c = 0; c < a.length; c++)if (b == a[c].key)return a[c]
        }, keys: function () {
          for (var b = [], c = 0; c < a.length; c++)b.push(a[c].key);
          return b
        }, top: function () {
          return a[a.length - 1]
        }, remove: function (b) {
          for (var c = -1, d = 0; d < a.length; d++)if (b == a[d].key) {
            c = d;
            break
          }
          return a.splice(c, 1)[0]
        }, removeTop: function () {
          return a.splice(a.length - 1, 1)[0]
        }, length: function () {
          return a.length
        }
      }
    }
  }
}).directive("modalBackdrop", ["$timeout", function (a) {
  return {
    restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (b, c, d) {
      b.backdropClass = d.backdropClass || "", b.animate = !1, a(function () {
        b.animate = !0
      })
    }
  }
}]).directive("modalWindow", ["$modalStack", "$timeout", function (a, b) {
  return {
    restrict: "EA", scope: {index: "@", animate: "="}, replace: !0, transclude: !0, templateUrl: function (a, b) {
      return b.templateUrl || "template/modal/window.html"
    }, link: function (c, d, e) {
      d.addClass(e.windowClass || ""), c.size = e.size, b(function () {
        c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
      }), c.close = function (b) {
        var c = a.getTop();
        c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
      }
    }
  }
}]).directive("modalTransclude", function () {
  return {
    link: function (a, b, c, d, e) {
      e(a.$parent, function (a) {
        b.empty(), b.append(a)
      })
    }
  }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (a, b, c, d, e, f) {
  function g() {
    for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)n.get(b[c]).value.backdrop && (a = c);
    return a
  }

  function h(a) {
    var b = c.find("body").eq(0), d = n.get(a).value;
    n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
      d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
    })
  }

  function i() {
    if (k && -1 == g()) {
      var a = l;
      j(k, l, 150, function () {
        a.$destroy(), a = null
      }), k = void 0, l = void 0
    }
  }

  function j(c, d, e, f) {
    function g() {
      g.done || (g.done = !0, c.remove(), f && f())
    }

    d.animate = !1;
    var h = a.transitionEndEventName;
    if (h) {
      var i = b(g, e);
      c.bind(h, function () {
        b.cancel(i), g(), d.$apply()
      })
    } else b(g)
  }

  var k, l, m = "modal-open", n = f.createNew(), o = {};
  return e.$watch(g, function (a) {
    l && (l.index = a)
  }), c.bind("keydown", function (a) {
    var b;
    27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
      o.dismiss(b.key, "escape key press")
    })))
  }), o.open = function (a, b) {
    n.add(a, {deferred: b.deferred, modalScope: b.scope, backdrop: b.backdrop, keyboard: b.keyboard});
    var f = c.find("body").eq(0), h = g();
    if (h >= 0 && !k) {
      l = e.$new(!0), l.index = h;
      var i = angular.element("<div modal-backdrop></div>");
      i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
    }
    var j = angular.element("<div modal-window></div>");
    j.attr({
      "template-url": b.windowTemplateUrl,
      "window-class": b.windowClass,
      size: b.size,
      index: n.length() - 1,
      animate: "animate"
    }).html(b.content);
    var o = d(j)(b.scope);
    n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
  }, o.close = function (a, b) {
    var c = n.get(a);
    c && (c.value.deferred.resolve(b), h(a))
  }, o.dismiss = function (a, b) {
    var c = n.get(a);
    c && (c.value.deferred.reject(b), h(a))
  }, o.dismissAll = function (a) {
    for (var b = this.getTop(); b;)this.dismiss(b.key, a), b = this.getTop()
  }, o.getTop = function () {
    return n.top()
  }, o
}]).provider("$modal", function () {
  var a = {
    options: {backdrop: !0, keyboard: !0},
    $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (b, c, d, e, f, g, h) {
      function i(a) {
        return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {cache: f}).then(function (a) {
          return a.data
        })
      }

      function j(a) {
        var c = [];
        return angular.forEach(a, function (a) {
          (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
        }), c
      }

      var k = {};
      return k.open = function (b) {
        var e = d.defer(), f = d.defer(), k = {
          result: e.promise, opened: f.promise, close: function (a) {
            h.close(k, a)
          }, dismiss: function (a) {
            h.dismiss(k, a)
          }
        };
        if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)throw new Error("One of template or templateUrl options is required.");
        var l = d.all([i(b)].concat(j(b.resolve)));
        return l.then(function (a) {
          var d = (b.scope || c).$new();
          d.$close = k.close, d.$dismiss = k.dismiss;
          var f, i = {}, j = 1;
          b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
            i[c] = a[j++]
          }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
            scope: d,
            deferred: e,
            content: a[0],
            backdrop: b.backdrop,
            keyboard: b.keyboard,
            backdropClass: b.backdropClass,
            windowClass: b.windowClass,
            windowTemplateUrl: b.windowTemplateUrl,
            size: b.size
          })
        }, function (a) {
          e.reject(a)
        }), l.then(function () {
          f.resolve(!0)
        }, function () {
          f.reject(!1)
        }), k
      }, k
    }]
  };
  return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (a, b, c) {
  var d = this, e = {$setViewValue: angular.noop}, f = b.numPages ? c(b.numPages).assign : angular.noop;
  this.init = function (f, g) {
    e = f, this.config = g, e.$render = function () {
      d.render()
    }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
      d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
    }) : this.itemsPerPage = g.itemsPerPage
  }, this.calculateTotalPages = function () {
    var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
    return Math.max(b || 0, 1)
  }, this.render = function () {
    a.page = parseInt(e.$viewValue, 10) || 1
  }, a.selectPage = function (b) {
    a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
  }, a.getText = function (b) {
    return a[b + "Text"] || d.config[b + "Text"]
  }, a.noPrevious = function () {
    return 1 === a.page
  }, a.noNext = function () {
    return a.page === a.totalPages
  }, a.$watch("totalItems", function () {
    a.totalPages = d.calculateTotalPages()
  }), a.$watch("totalPages", function (b) {
    f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
  })
}]).constant("paginationConfig", {
  itemsPerPage: 10,
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: "First",
  previousText: "Previous",
  nextText: "Next",
  lastText: "Last",
  rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
  return {
    restrict: "EA",
    scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@"},
    require: ["pagination", "?ngModel"],
    controller: "PaginationController",
    templateUrl: "template/pagination/pagination.html",
    replace: !0,
    link: function (c, d, e, f) {
      function g(a, b, c) {
        return {number: a, text: b, active: c}
      }

      function h(a, b) {
        var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
        f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
        for (var h = d; e >= h; h++) {
          var i = g(h, h, h === a);
          c.push(i)
        }
        if (f && !l) {
          if (d > 1) {
            var j = g(d - 1, "...", !1);
            c.unshift(j)
          }
          if (b > e) {
            var m = g(e + 1, "...", !1);
            c.push(m)
          }
        }
        return c
      }

      var i = f[0], j = f[1];
      if (j) {
        var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
        c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
          k = parseInt(a, 10), i.render()
        });
        var m = i.render;
        i.render = function () {
          m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
        }
      }
    }
  }
}]).constant("pagerConfig", {
  itemsPerPage: 10,
  previousText: "« Previous",
  nextText: "Next »",
  align: !0
}).directive("pager", ["pagerConfig", function (a) {
  return {
    restrict: "EA",
    scope: {totalItems: "=", previousText: "@", nextText: "@"},
    require: ["pager", "?ngModel"],
    controller: "PaginationController",
    templateUrl: "template/pagination/pager.html",
    replace: !0,
    link: function (b, c, d, e) {
      var f = e[0], g = e[1];
      g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
    }
  }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
  function a(a) {
    var b = /[A-Z]/g, c = "-";
    return a.replace(b, function (a, b) {
      return (b ? c : "") + a.toLowerCase()
    })
  }

  var b = {placement: "top", animation: !0, popupDelay: 0}, c = {
    mouseenter: "mouseleave",
    click: "click",
    focus: "blur"
  }, d = {};
  this.options = function (a) {
    angular.extend(d, a)
  }, this.setTriggers = function (a) {
    angular.extend(c, a)
  }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (e, f, g, h, i, j, k) {
    return function (e, l, m) {
      function n(a) {
        var b = a || o.trigger || m, d = c[b] || b;
        return {show: b, hide: d}
      }

      var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
      return {
        restrict: "EA", scope: !0, compile: function () {
          var a = f(s);
          return function (b, c, d) {
            function f() {
              b.tt_isOpen ? m() : k()
            }

            function k() {
              (!y || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? v || (v = g(p, b.tt_popupDelay, !1), v.then(function (a) {
                a()
              })) : p()())
            }

            function m() {
              b.$apply(function () {
                q()
              })
            }

            function p() {
              return v = null, u && (g.cancel(u), u = null), b.tt_content ? (r(), t.css({
                top: 0,
                left: 0,
                display: "block"
              }), w ? i.find("body").append(t) : c.after(t), z(), b.tt_isOpen = !0, b.$digest(), z) : angular.noop
            }

            function q() {
              b.tt_isOpen = !1, g.cancel(v), v = null, b.tt_animation ? u || (u = g(s, 500)) : s()
            }

            function r() {
              t && s(), t = a(b, function () {
              }), b.$digest()
            }

            function s() {
              u = null, t && (t.remove(), t = null)
            }

            var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = angular.isDefined(d[l + "Enable"]), z = function () {
              var a = j.positionElements(c, t, b.tt_placement, w);
              a.top += "px", a.left += "px", t.css(a)
            };
            b.tt_isOpen = !1, d.$observe(e, function (a) {
              b.tt_content = a, !a && b.tt_isOpen && q()
            }), d.$observe(l + "Title", function (a) {
              b.tt_title = a
            }), d.$observe(l + "Placement", function (a) {
              b.tt_placement = angular.isDefined(a) ? a : o.placement
            }), d.$observe(l + "PopupDelay", function (a) {
              var c = parseInt(a, 10);
              b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
            });
            var A = function () {
              c.unbind(x.show, k), c.unbind(x.hide, m)
            };
            d.$observe(l + "Trigger", function (a) {
              A(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m))
            });
            var B = b.$eval(d[l + "Animation"]);
            b.tt_animation = angular.isDefined(B) ? !!B : o.animation, d.$observe(l + "AppendToBody", function (a) {
              w = angular.isDefined(a) ? h(a)(b) : w
            }), w && b.$on("$locationChangeSuccess", function () {
              b.tt_isOpen && q()
            }), b.$on("$destroy", function () {
              g.cancel(u), g.cancel(v), A(), s()
            })
          }
        }
      }
    }
  }]
}).directive("tooltipPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/tooltip/tooltip-popup.html"
  }
}).directive("tooltip", ["$tooltip", function (a) {
  return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
  }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (a) {
  return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/popover/popover.html"
  }
}).directive("popover", ["$tooltip", function (a) {
  return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
  animate: !0,
  max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (a, b, c) {
  var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
  this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
    e || c.css({transition: "none"}), this.bars.push(b), b.$watch("value", function (c) {
      b.percent = +(100 * c / a.max).toFixed(2)
    }), b.$on("$destroy", function () {
      c = null, d.removeBar(b)
    })
  }, this.removeBar = function (a) {
    this.bars.splice(this.bars.indexOf(a), 1)
  }
}]).directive("progress", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    controller: "ProgressController",
    require: "progress",
    scope: {},
    templateUrl: "template/progressbar/progress.html"
  }
}).directive("bar", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    require: "^progress",
    scope: {value: "=", type: "@"},
    templateUrl: "template/progressbar/bar.html",
    link: function (a, b, c, d) {
      d.addBar(a, b)
    }
  }
}).directive("progressbar", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    controller: "ProgressController",
    scope: {value: "=", type: "@"},
    templateUrl: "template/progressbar/progressbar.html",
    link: function (a, b, c, d) {
      d.addBar(a, angular.element(b.children()[0]))
    }
  }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (a, b, c) {
  var d = {$setViewValue: angular.noop};
  this.init = function (e) {
    d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
    var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
    a.range = this.buildTemplateObjects(f)
  }, this.buildTemplateObjects = function (a) {
    for (var b = 0, c = a.length; c > b; b++)a[b] = angular.extend({index: b}, {
      stateOn: this.stateOn,
      stateOff: this.stateOff
    }, a[b]);
    return a
  }, a.rate = function (b) {
    !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
  }, a.enter = function (b) {
    a.readonly || (a.value = b), a.onHover({value: b})
  }, a.reset = function () {
    a.value = d.$viewValue, a.onLeave()
  }, a.onKeydown = function (b) {
    /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
  }, this.render = function () {
    a.value = d.$viewValue
  }
}]).directive("rating", function () {
  return {
    restrict: "EA",
    require: ["rating", "ngModel"],
    scope: {readonly: "=?", onHover: "&", onLeave: "&"},
    controller: "RatingController",
    templateUrl: "template/rating/rating.html",
    replace: !0,
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f)
    }
  }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) {
  var b = this, c = b.tabs = a.tabs = [];
  b.select = function (a) {
    angular.forEach(c, function (b) {
      b.active && b !== a && (b.active = !1, b.onDeselect())
    }), a.active = !0, a.onSelect()
  }, b.addTab = function (a) {
    c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
  }, b.removeTab = function (a) {
    var d = c.indexOf(a);
    if (a.active && c.length > 1) {
      var e = d == c.length - 1 ? d - 1 : d + 1;
      b.select(c[e])
    }
    c.splice(d, 1)
  }
}]).directive("tabset", function () {
  return {
    restrict: "EA",
    transclude: !0,
    replace: !0,
    scope: {type: "@"},
    controller: "TabsetController",
    templateUrl: "template/tabs/tabset.html",
    link: function (a, b, c) {
      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
    }
  }
}).directive("tab", ["$parse", function (a) {
  return {
    require: "^tabset",
    restrict: "EA",
    replace: !0,
    templateUrl: "template/tabs/tab.html",
    transclude: !0,
    scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"},
    controller: function () {
    },
    compile: function (b, c, d) {
      return function (b, c, e, f) {
        b.$watch("active", function (a) {
          a && f.select(b)
        }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
          b.disabled = !!a
        }), b.select = function () {
          b.disabled || (b.active = !0)
        }, f.addTab(b), b.$on("$destroy", function () {
          f.removeTab(b)
        }), b.$transcludeFn = d
      }
    }
  }
}]).directive("tabHeadingTransclude", [function () {
  return {
    restrict: "A", require: "^tab", link: function (a, b) {
      a.$watch("headingElement", function (a) {
        a && (b.html(""), b.append(a))
      })
    }
  }
}]).directive("tabContentTransclude", function () {
  function a(a) {
    return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
  }

  return {
    restrict: "A", require: "^tabset", link: function (b, c, d) {
      var e = b.$eval(d.tabContentTransclude);
      e.$transcludeFn(e.$parent, function (b) {
        angular.forEach(b, function (b) {
          a(b) ? e.headingElement = b : c.append(b)
        })
      })
    }
  }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: !0,
  meridians: null,
  readonlyInput: !1,
  mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (a, b, c, d, e, f) {
  function g() {
    var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
    return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
  }

  function h() {
    var b = parseInt(a.minutes, 10);
    return b >= 0 && 60 > b ? b : void 0
  }

  function i(a) {
    return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
  }

  function j(a) {
    k(), o.$setViewValue(new Date(n)), l(a)
  }

  function k() {
    o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
  }

  function l(b) {
    var c = n.getHours(), d = n.getMinutes();
    a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
  }

  function m(a) {
    var b = new Date(n.getTime() + 6e4 * a);
    n.setHours(b.getHours(), b.getMinutes()), j()
  }

  var n = new Date, o = {$setViewValue: angular.noop}, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
  this.init = function (c, d) {
    o = c, o.$render = this.render;
    var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
    h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
  };
  var q = f.hourStep;
  b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
    q = parseInt(a, 10)
  });
  var r = f.minuteStep;
  b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
    r = parseInt(a, 10)
  }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
    if (a.showMeridian = !!b, o.$error.time) {
      var c = g(), d = h();
      angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
    } else l()
  }), this.setupMousewheelEvents = function (b, c) {
    var d = function (a) {
      a.originalEvent && (a = a.originalEvent);
      var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
      return a.detail || b > 0
    };
    b.bind("mousewheel wheel", function (b) {
      a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
    }), c.bind("mousewheel wheel", function (b) {
      a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
    })
  }, this.setupInputEvents = function (b, c) {
    if (a.readonlyInput)return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
    var d = function (b, c) {
      o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
    };
    a.updateHours = function () {
      var a = g();
      angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
    }, b.bind("blur", function () {
      !a.invalidHours && a.hours < 10 && a.$apply(function () {
        a.hours = i(a.hours)
      })
    }), a.updateMinutes = function () {
      var a = h();
      angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
    }, c.bind("blur", function () {
      !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
        a.minutes = i(a.minutes)
      })
    })
  }, this.render = function () {
    var a = o.$modelValue ? new Date(o.$modelValue) : null;
    isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
  }, a.incrementHours = function () {
    m(60 * q)
  }, a.decrementHours = function () {
    m(60 * -q)
  }, a.incrementMinutes = function () {
    m(r)
  }, a.decrementMinutes = function () {
    m(-r)
  }, a.toggleMeridian = function () {
    m(720 * (n.getHours() < 12 ? 1 : -1))
  }
}]).directive("timepicker", function () {
  return {
    restrict: "EA",
    require: ["timepicker", "?^ngModel"],
    controller: "TimepickerController",
    replace: !0,
    scope: {},
    templateUrl: "template/timepicker/timepicker.html",
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f, b.find("input"))
    }
  }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (a) {
  var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
  return {
    parse: function (c) {
      var d = c.match(b);
      if (!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
      return {itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
    }
  }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (a, b, c, d, e, f, g) {
  var h = [9, 13, 27, 38, 40];
  return {
    require: "ngModel", link: function (i, j, k, l) {
      var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = i.$new();
      i.$on("$destroy", function () {
        w.$destroy()
      });
      var x = "typeahead-" + w.$id + "-" + Math.floor(1e4 * Math.random());
      j.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": x});
      var y = angular.element("<div typeahead-popup></div>");
      y.attr({
        id: x,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx)",
        query: "query",
        position: "position"
      }), angular.isDefined(k.typeaheadTemplateUrl) && y.attr("template-url", k.typeaheadTemplateUrl);
      var z = function () {
        w.matches = [], w.activeIdx = -1, j.attr("aria-expanded", !1)
      }, A = function (a) {
        return x + "-option-" + a
      };
      w.$watch("activeIdx", function (a) {
        0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", A(a))
      });
      var B = function (a) {
        var b = {$viewValue: a};
        q(i, !0), c.when(v.source(i, b)).then(function (c) {
          var d = a === l.$viewValue;
          if (d && m)if (c.length > 0) {
            w.activeIdx = 0, w.matches.length = 0;
            for (var e = 0; e < c.length; e++)b[v.itemName] = c[e], w.matches.push({
              id: A(e),
              label: v.viewMapper(w, b),
              model: c[e]
            });
            w.query = a, w.position = t ? f.offset(j) : f.position(j), w.position.top = w.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
          } else z();
          d && q(i, !1)
        }, function () {
          z(), q(i, !1)
        })
      };
      z(), w.query = void 0;
      var C, D = function (a) {
        C = d(function () {
          B(a)
        }, o)
      }, E = function () {
        C && d.cancel(C)
      };
      l.$parsers.unshift(function (a) {
        return m = !0, a && a.length >= n ? o > 0 ? (E(), D(a)) : B(a) : (q(i, !1), E(), z()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
      }), l.$formatters.push(function (a) {
        var b, c, d = {};
        return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
      }), w.select = function (a) {
        var b, c, e = {};
        e[v.itemName] = c = w.matches[a].model, b = v.modelMapper(i, e), u(i, b), l.$setValidity("editable", !0), r(i, {
          $item: c,
          $model: b,
          $label: v.viewMapper(i, e)
        }), z(), d(function () {
          j[0].focus()
        }, 0, !1)
      }, j.bind("keydown", function (a) {
        0 !== w.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (w.activeIdx = (w.activeIdx + 1) % w.matches.length, w.$digest()) : 38 === a.which ? (w.activeIdx = (w.activeIdx ? w.activeIdx : w.matches.length) - 1, w.$digest()) : 13 === a.which || 9 === a.which ? w.$apply(function () {
          w.select(w.activeIdx)
        }) : 27 === a.which && (a.stopPropagation(), z(), w.$digest()))
      }), j.bind("blur", function () {
        m = !1
      });
      var F = function (a) {
        j[0] !== a.target && (z(), w.$digest())
      };
      e.bind("click", F), i.$on("$destroy", function () {
        e.unbind("click", F)
      });
      var G = a(y)(w);
      t ? e.find("body").append(G) : j.after(G)
    }
  }
}]).directive("typeaheadPopup", function () {
  return {
    restrict: "EA",
    scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"},
    replace: !0,
    templateUrl: "template/typeahead/typeahead-popup.html",
    link: function (a, b, c) {
      a.templateUrl = c.templateUrl, a.isOpen = function () {
        return a.matches.length > 0
      }, a.isActive = function (b) {
        return a.active == b
      }, a.selectActive = function (b) {
        a.active = b
      }, a.selectMatch = function (b) {
        a.select({activeIdx: b})
      }
    }
  }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) {
  return {
    restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (e, f, g) {
      var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
      a.get(h, {cache: b}).success(function (a) {
        f.replaceWith(c(a.trim())(e))
      })
    }
  }
}]).filter("typeaheadHighlight", function () {
  function a(a) {
    return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
  }

  return function (b, c) {
    return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
  }
});

/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.9.6 - 2015-01-12T20:24:40.589Z
 * License: MIT
 */
!function () {
  "use strict";
  var e = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    BACKSPACE: 8,
    DELETE: 46,
    COMMAND: 91,
    MAP: {
      91: "COMMAND",
      8: "BACKSPACE",
      9: "TAB",
      13: "ENTER",
      16: "SHIFT",
      17: "CTRL",
      18: "ALT",
      19: "PAUSEBREAK",
      20: "CAPSLOCK",
      27: "ESC",
      32: "SPACE",
      33: "PAGE_UP",
      34: "PAGE_DOWN",
      35: "END",
      36: "HOME",
      37: "LEFT",
      38: "UP",
      39: "RIGHT",
      40: "DOWN",
      43: "+",
      44: "PRINTSCREEN",
      45: "INSERT",
      46: "DELETE",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      59: ";",
      61: "=",
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NUMLOCK",
      145: "SCROLLLOCK",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    },
    isControl: function (t) {
      var c = t.which;
      switch (c) {
        case e.COMMAND:
        case e.SHIFT:
        case e.CTRL:
        case e.ALT:
          return !0
      }
      return t.metaKey ? !0 : !1
    },
    isFunctionKey: function (e) {
      return e = e.which ? e.which : e, e >= 112 && 123 >= e
    },
    isVerticalMovement: function (t) {
      return ~[e.UP, e.DOWN].indexOf(t)
    },
    isHorizontalMovement: function (t) {
      return ~[e.LEFT, e.RIGHT, e.BACKSPACE, e.DELETE].indexOf(t)
    }
  };
  void 0 === angular.element.prototype.querySelectorAll && (angular.element.prototype.querySelectorAll = function (e) {
    return angular.element(this[0].querySelectorAll(e))
  }), void 0 === angular.element.prototype.closest && (angular.element.prototype.closest = function (e) {
    for (var t = this[0], c = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; t;) {
      if (c.bind(t)(e))return t;
      t = t.parentElement
    }
    return !1
  }), angular.module("ui.select", []).constant("uiSelectConfig", {
    theme: "bootstrap",
    searchEnabled: !0,
    placeholder: "",
    refreshDelay: 1e3,
    closeOnSelect: !0
  }).service("uiSelectMinErr", function () {
    var e = angular.$$minErr("ui.select");
    return function () {
      var t = e.apply(this, arguments), c = t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"), "");
      return new Error(c)
    }
  }).service("RepeatParser", ["uiSelectMinErr", "$parse", function (e, t) {
    var c = this;
    c.parse = function (c) {
      var l = c.match(/^\s*(?:([\s\S]+?)\s+as\s+)?([\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
      if (!l)throw e("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", c);
      return {itemName: l[2], source: t(l[3]), trackByExp: l[4], modelMapper: t(l[1] || l[2])}
    }, c.getGroupNgRepeatExpression = function () {
      return "$group in $select.groups"
    }, c.getNgRepeatExpression = function (e, t, c, l) {
      var i = e + " in " + (l ? "$group.items" : t);
      return c && (i += " track by " + c), i
    }
  }]).controller("uiSelectCtrl", ["$scope", "$element", "$timeout", "$filter", "RepeatParser", "uiSelectMinErr", "uiSelectConfig", function (t, c, l, i, s, n, a) {
    function r() {
      (f.resetSearchInput || void 0 === f.resetSearchInput && a.resetSearchInput) && (f.search = v, f.selected && f.items.length && !f.multiple && (f.activeIndex = f.items.indexOf(f.selected)))
    }

    function o(t) {
      var c = !0;
      switch (t) {
        case e.DOWN:
          !f.open && f.multiple ? f.activate(!1, !0) : f.activeIndex < f.items.length - 1 && f.activeIndex++;
          break;
        case e.UP:
          !f.open && f.multiple ? f.activate(!1, !0) : (f.activeIndex > 0 || 0 === f.search.length && f.tagging.isActivated) && f.activeIndex--;
          break;
        case e.TAB:
          (!f.multiple || f.open) && f.select(f.items[f.activeIndex], !0);
          break;
        case e.ENTER:
          f.open ? f.select(f.items[f.activeIndex]) : f.activate(!1, !0);
          break;
        case e.ESC:
          f.close();
          break;
        default:
          c = !1
      }
      return c
    }

    function u(t) {
      function c() {
        switch (t) {
          case e.LEFT:
            return ~f.activeMatchIndex ? o : n;
          case e.RIGHT:
            return ~f.activeMatchIndex && a !== n ? r : (f.activate(), !1);
          case e.BACKSPACE:
            return ~f.activeMatchIndex ? (f.removeChoice(a), o) : n;
          case e.DELETE:
            return ~f.activeMatchIndex ? (f.removeChoice(f.activeMatchIndex), a) : !1
        }
      }

      var l = h(m[0]), i = f.selected.length, s = 0, n = i - 1, a = f.activeMatchIndex, r = f.activeMatchIndex + 1, o = f.activeMatchIndex - 1, u = a;
      return l > 0 || f.search.length && t == e.RIGHT ? !1 : (f.close(), u = c(), f.activeMatchIndex = f.selected.length && u !== !1 ? Math.min(n, Math.max(s, u)) : -1, !0)
    }

    function d(e) {
      if (void 0 === e || void 0 === f.search)return !1;
      var t = e.filter(function (e) {
          return void 0 === f.search.toUpperCase() ? !1 : e.toUpperCase() === f.search.toUpperCase()
        }).length > 0;
      return t
    }

    function p(e, t) {
      for (var c = angular.copy(e), l = -1, i = 0; i < c.length; i++)if (void 0 === f.tagging.fct)c[i] + " " + f.taggingLabel === t && (l = i); else {
        var s = c[i];
        s.isTag = !0, angular.equals(s, t) && (l = i)
      }
      return l
    }

    function h(e) {
      return angular.isNumber(e.selectionStart) ? e.selectionStart : e.value.length
    }

    function g() {
      var e = c.querySelectorAll(".ui-select-choices-content"), t = e.querySelectorAll(".ui-select-choices-row");
      if (t.length < 1)throw n("choices", "Expected multiple .ui-select-choices-row but got '{0}'.", t.length);
      var l = t[f.activeIndex], i = l.offsetTop + l.clientHeight - e[0].scrollTop, s = e[0].offsetHeight;
      i > s ? e[0].scrollTop += i - s : i < l.clientHeight && (f.isGrouped && 0 === f.activeIndex ? e[0].scrollTop = 0 : e[0].scrollTop -= l.clientHeight - i)
    }

    var f = this, v = "";
    f.placeholder = void 0, f.search = v, f.activeIndex = 0, f.activeMatchIndex = -1, f.items = [], f.selected = void 0, f.open = !1, f.focus = !1, f.focusser = void 0, f.disabled = void 0, f.searchEnabled = void 0, f.resetSearchInput = void 0, f.refreshDelay = void 0, f.multiple = !1, f.disableChoiceExpression = void 0, f.tagging = {
      isActivated: !1,
      fct: void 0
    }, f.taggingTokens = {
      isActivated: !1,
      tokens: void 0
    }, f.lockChoiceExpression = void 0, f.closeOnSelect = !0, f.clickTriggeredSelect = !1, f.$filter = i, f.isEmpty = function () {
      return angular.isUndefined(f.selected) || null === f.selected || "" === f.selected
    };
    var m = c.querySelectorAll("input.ui-select-search");
    if (1 !== m.length)throw n("searchInput", "Expected 1 input.ui-select-search but got '{0}'.", m.length);
    f.activate = function (e, t) {
      f.disabled || f.open || (t || r(), f.focusser.prop("disabled", !0), f.open = !0, f.activeMatchIndex = -1, f.activeIndex = f.activeIndex >= f.items.length ? 0 : f.activeIndex, -1 === f.activeIndex && f.taggingLabel !== !1 && (f.activeIndex = 0), l(function () {
        f.search = e || f.search, m[0].focus()
      }))
    }, f.findGroupByName = function (e) {
      return f.groups && f.groups.filter(function (t) {
          return t.name === e
        })[0]
    }, f.parseRepeatAttr = function (e, c) {
      function l(e) {
        f.groups = [], angular.forEach(e, function (e) {
          var l = t.$eval(c), i = angular.isFunction(l) ? l(e) : e[l], s = f.findGroupByName(i);
          s ? s.items.push(e) : f.groups.push({name: i, items: [e]})
        }), f.items = [], f.groups.forEach(function (e) {
          f.items = f.items.concat(e.items)
        })
      }

      function i(e) {
        f.items = e
      }

      var a = c ? l : i;
      f.parserResult = s.parse(e), f.isGrouped = !!c, f.itemProperty = f.parserResult.itemName, t.$watchCollection(f.parserResult.source, function (e) {
        if (void 0 === e || null === e)f.items = []; else {
          if (!angular.isArray(e))throw n("items", "Expected an array but got '{0}'.", e);
          if (f.multiple) {
            var t = e.filter(function (e) {
              return f.selected.indexOf(e) < 0
            });
            a(t)
          } else a(e);
          f.ngModel.$modelValue = null
        }
      }), f.multiple && t.$watchCollection("$select.selected", function (e) {
        var c = f.parserResult.source(t);
        if (e.length) {
          if (void 0 !== c) {
            var l = c.filter(function (t) {
              return e.indexOf(t) < 0
            });
            a(l)
          }
        } else a(c);
        f.sizeSearchInput()
      })
    };
    var $;
    f.refresh = function (e) {
      void 0 !== e && ($ && l.cancel($), $ = l(function () {
        t.$eval(e)
      }, f.refreshDelay))
    }, f.setActiveItem = function (e) {
      f.activeIndex = f.items.indexOf(e)
    }, f.isActive = function (e) {
      if (!f.open)return !1;
      var t = f.items.indexOf(e[f.itemProperty]), c = t === f.activeIndex;
      return !c || 0 > t && f.taggingLabel !== !1 || 0 > t && f.taggingLabel === !1 ? !1 : (c && !angular.isUndefined(f.onHighlightCallback) && e.$eval(f.onHighlightCallback), c)
    }, f.isDisabled = function (e) {
      if (f.open) {
        var t, c = f.items.indexOf(e[f.itemProperty]), l = !1;
        return c >= 0 && !angular.isUndefined(f.disableChoiceExpression) && (t = f.items[c], l = !!e.$eval(f.disableChoiceExpression), t._uiSelectChoiceDisabled = l), l
      }
    }, f.select = function (e, c, i) {
      if (void 0 === e || !e._uiSelectChoiceDisabled) {
        if (!f.items && !f.search)return;
        if (!e || !e._uiSelectChoiceDisabled) {
          if (f.tagging.isActivated) {
            if (f.taggingLabel === !1)if (f.activeIndex < 0) {
              if (e = void 0 !== f.tagging.fct ? f.tagging.fct(f.search) : f.search, angular.equals(f.items[0], e))return
            } else e = f.items[f.activeIndex]; else if (0 === f.activeIndex) {
              if (void 0 === e)return;
              void 0 !== f.tagging.fct && "string" == typeof e ? e = f.tagging.fct(f.search) : "string" == typeof e && (e = e.replace(f.taggingLabel, "").trim())
            }
            if (f.selected && f.selected.filter(function (t) {
                return angular.equals(t, e)
              }).length > 0)return f.close(c), void 0
          }
          var s = {};
          s[f.parserResult.itemName] = e, f.multiple ? (f.selected.push(e), f.sizeSearchInput()) : f.selected = e, l(function () {
            f.onSelectCallback(t, {$item: e, $model: f.parserResult.modelMapper(t, s)})
          }), (!f.multiple || f.closeOnSelect) && f.close(c), i && "click" === i.type && (f.clickTriggeredSelect = !0)
        }
      }
    }, f.close = function (e) {
      f.open && (r(), f.open = !1, f.multiple || l(function () {
        f.focusser.prop("disabled", !1), e || f.focusser[0].focus()
      }, 0, !1))
    }, f.toggle = function (e) {
      f.open ? (f.close(), e.preventDefault(), e.stopPropagation()) : f.activate()
    }, f.isLocked = function (e, t) {
      var c, l = f.selected[t];
      return l && !angular.isUndefined(f.lockChoiceExpression) && (c = !!e.$eval(f.lockChoiceExpression), l._uiSelectChoiceLocked = c), c
    }, f.removeChoice = function (e) {
      var c = f.selected[e];
      if (!c._uiSelectChoiceLocked) {
        var i = {};
        i[f.parserResult.itemName] = c, f.selected.splice(e, 1), f.activeMatchIndex = -1, f.sizeSearchInput(), l(function () {
          f.onRemoveCallback(t, {$item: c, $model: f.parserResult.modelMapper(t, i)})
        })
      }
    }, f.getPlaceholder = function () {
      return f.multiple && f.selected.length ? void 0 : f.placeholder
    };
    var b;
    f.sizeSearchInput = function () {
      var e = m[0], c = m.parent().parent()[0];
      m.css("width", "10px");
      var i = function () {
        var t = c.clientWidth - e.offsetLeft - 10;
        50 > t && (t = c.clientWidth), m.css("width", t + "px")
      };
      l(function () {
        0 !== c.clientWidth || b ? b || i() : b = t.$watch(function () {
          return c.clientWidth
        }, function (e) {
          0 !== e && (i(), b(), b = null)
        })
      }, 0, !1)
    }, m.on("keydown", function (c) {
      var i = c.which;
      t.$apply(function () {
        var t = !1, s = !1;
        if (f.multiple && e.isHorizontalMovement(i) && (t = u(i)), !t && (f.items.length > 0 || f.tagging.isActivated) && (t = o(i), f.taggingTokens.isActivated)) {
          for (var n = 0; n < f.taggingTokens.tokens.length; n++)f.taggingTokens.tokens[n] === e.MAP[c.keyCode] && f.search.length > 0 && (s = !0);
          s && l(function () {
            m.triggerHandler("tagged");
            var t = f.search.replace(e.MAP[c.keyCode], "").trim();
            f.tagging.fct && (t = f.tagging.fct(t)), f.select(t, !0)
          })
        }
        t && i != e.TAB && (c.preventDefault(), c.stopPropagation())
      }), e.isVerticalMovement(i) && f.items.length > 0 && g()
    }), m.on("keyup", function (c) {
      if (e.isVerticalMovement(c.which) || t.$evalAsync(function () {
          f.activeIndex = f.taggingLabel === !1 ? -1 : 0
        }), f.tagging.isActivated && f.search.length > 0) {
        if (c.which === e.TAB || e.isControl(c) || e.isFunctionKey(c) || c.which === e.ESC || e.isVerticalMovement(c.which))return;
        if (f.activeIndex = f.taggingLabel === !1 ? -1 : 0, f.taggingLabel === !1)return;
        var l, i, s, n, a = angular.copy(f.items), r = angular.copy(f.items), o = !1, u = -1;
        if (void 0 !== f.tagging.fct) {
          if (s = f.$filter("filter")(a, {isTag: !0}), s.length > 0 && (n = s[0]), a.length > 0 && n && (o = !0, a = a.slice(1, a.length), r = r.slice(1, r.length)), l = f.tagging.fct(f.search), l.isTag = !0, r.filter(function (e) {
              return angular.equals(e, f.tagging.fct(f.search))
            }).length > 0)return
        } else {
          if (s = f.$filter("filter")(a, function (e) {
              return e.match(f.taggingLabel)
            }), s.length > 0 && (n = s[0]), i = a[0], void 0 !== i && a.length > 0 && n && (o = !0, a = a.slice(1, a.length), r = r.slice(1, r.length)), l = f.search + " " + f.taggingLabel, p(f.selected, f.search) > -1)return;
          if (d(r.concat(f.selected)))return o && (a = r, t.$evalAsync(function () {
            f.activeIndex = 0, f.items = a
          })), void 0;
          if (d(r))return o && (f.items = r.slice(1, r.length)), void 0
        }
        o && (u = p(f.selected, l)), u > -1 ? a = a.slice(u + 1, a.length - 1) : (a = [], a.push(l), a = a.concat(r)), t.$evalAsync(function () {
          f.activeIndex = 0, f.items = a
        })
      }
    }), m.on("tagged", function () {
      l(function () {
        r()
      })
    }), m.on("blur", function () {
      l(function () {
        f.activeMatchIndex = -1
      })
    }), t.$on("$destroy", function () {
      m.off("keyup keydown tagged blur")
    })
  }]).directive("uiSelect", ["$document", "uiSelectConfig", "uiSelectMinErr", "$compile", "$parse", function (t, c, l, i, s) {
    return {
      restrict: "EA",
      templateUrl: function (e, t) {
        var l = t.theme || c.theme;
        return l + (angular.isDefined(t.multiple) ? "/select-multiple.tpl.html" : "/select.tpl.html")
      },
      replace: !0,
      transclude: !0,
      require: ["uiSelect", "ngModel"],
      scope: !0,
      controller: "uiSelectCtrl",
      controllerAs: "$select",
      link: function (n, a, r, o, u) {
        function d(e) {
          var t = !1;
          t = window.jQuery ? window.jQuery.contains(a[0], e.target) : a[0].contains(e.target), t || p.clickTriggeredSelect || (p.close(angular.element(e.target).closest(".ui-select-container.open").length > 0), n.$digest()), p.clickTriggeredSelect = !1
        }

        var p = o[0], h = o[1], g = a.querySelectorAll("input.ui-select-search");
        p.multiple = angular.isDefined(r.multiple) && ("" === r.multiple || "multiple" === r.multiple.toLowerCase() || "true" === r.multiple.toLowerCase()), p.closeOnSelect = function () {
          return angular.isDefined(r.closeOnSelect) ? s(r.closeOnSelect)() : c.closeOnSelect
        }(), p.onSelectCallback = s(r.onSelect), p.onRemoveCallback = s(r.onRemove), h.$parsers.unshift(function (e) {
          var t, c = {};
          if (p.multiple) {
            for (var l = [], i = p.selected.length - 1; i >= 0; i--)c = {}, c[p.parserResult.itemName] = p.selected[i], t = p.parserResult.modelMapper(n, c), l.unshift(t);
            return l
          }
          return c = {}, c[p.parserResult.itemName] = e, t = p.parserResult.modelMapper(n, c)
        }), h.$formatters.unshift(function (e) {
          var t, c = p.parserResult.source(n, {$select: {search: ""}}), l = {};
          if (c) {
            if (p.multiple) {
              var i = [], s = function (e, c) {
                if (e && e.length) {
                  for (var s = e.length - 1; s >= 0; s--)if (l[p.parserResult.itemName] = e[s], t = p.parserResult.modelMapper(n, l), t == c)return i.unshift(e[s]), !0;
                  return !1
                }
              };
              if (!e)return i;
              for (var a = e.length - 1; a >= 0; a--)s(p.selected, e[a]) || s(c, e[a]);
              return i
            }
            var r = function (c) {
              return l[p.parserResult.itemName] = c, t = p.parserResult.modelMapper(n, l), t == e
            };
            if (p.selected && r(p.selected))return p.selected;
            for (var o = c.length - 1; o >= 0; o--)if (r(c[o]))return c[o]
          }
          return e
        }), p.ngModel = h, p.choiceGrouped = function (e) {
          return p.isGrouped && e && e.name
        };
        var f = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' aria-haspopup='true' role='button' />");
        r.tabindex && r.$observe("tabindex", function (e) {
          p.multiple ? g.attr("tabindex", e) : f.attr("tabindex", e), a.removeAttr("tabindex")
        }), i(f)(n), p.focusser = f, p.multiple || (a.append(f), f.bind("focus", function () {
          n.$evalAsync(function () {
            p.focus = !0
          })
        }), f.bind("blur", function () {
          n.$evalAsync(function () {
            p.focus = !1
          })
        }), f.bind("keydown", function (t) {
          return t.which === e.BACKSPACE ? (t.preventDefault(), t.stopPropagation(), p.select(void 0), n.$apply(), void 0) : (t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || ((t.which == e.DOWN || t.which == e.UP || t.which == e.ENTER || t.which == e.SPACE) && (t.preventDefault(), t.stopPropagation(), p.activate()), n.$digest()), void 0)
        }), f.bind("keyup input", function (t) {
          t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || t.which == e.ENTER || t.which === e.BACKSPACE || (p.activate(f.val()), f.val(""), n.$digest())
        })), n.$watch("searchEnabled", function () {
          var e = n.$eval(r.searchEnabled);
          p.searchEnabled = void 0 !== e ? e : c.searchEnabled
        }), r.$observe("disabled", function () {
          p.disabled = void 0 !== r.disabled ? r.disabled : !1
        }), r.$observe("resetSearchInput", function () {
          var e = n.$eval(r.resetSearchInput);
          p.resetSearchInput = void 0 !== e ? e : !0
        }), r.$observe("tagging", function () {
          if (void 0 !== r.tagging) {
            var e = n.$eval(r.tagging);
            p.tagging = {isActivated: !0, fct: e !== !0 ? e : void 0}
          } else p.tagging = {isActivated: !1, fct: void 0}
        }), r.$observe("taggingLabel", function () {
          void 0 !== r.tagging && (p.taggingLabel = "false" === r.taggingLabel ? !1 : void 0 !== r.taggingLabel ? r.taggingLabel : "(new)")
        }), r.$observe("taggingTokens", function () {
          if (void 0 !== r.tagging) {
            var e = void 0 !== r.taggingTokens ? r.taggingTokens.split("|") : [",", "ENTER"];
            p.taggingTokens = {isActivated: !0, tokens: e}
          }
        }), p.multiple ? (n.$watchCollection(function () {
          return h.$modelValue
        }, function (e, t) {
          t != e && (h.$modelValue = null)
        }), p.firstPass = !0, n.$watchCollection("$select.selected", function () {
          p.firstPass ? p.firstPass = !1 : h.$setViewValue(Date.now())
        }), f.prop("disabled", !0)) : n.$watch("$select.selected", function (e) {
          h.$viewValue !== e && h.$setViewValue(e)
        }), h.$render = function () {
          if (p.multiple && !angular.isArray(h.$viewValue)) {
            if (!angular.isUndefined(h.$viewValue) && null !== h.$viewValue)throw l("multiarr", "Expected model value to be array but got '{0}'", h.$viewValue);
            p.selected = []
          }
          p.selected = h.$viewValue
        }, t.on("click", d), n.$on("$destroy", function () {
          t.off("click", d)
        }), u(n, function (e) {
          var t = angular.element("<div>").append(e), c = t.querySelectorAll(".ui-select-match");
          if (c.removeAttr("ui-select-match"), 1 !== c.length)throw l("transcluded", "Expected 1 .ui-select-match but got '{0}'.", c.length);
          a.querySelectorAll(".ui-select-match").replaceWith(c);
          var i = t.querySelectorAll(".ui-select-choices");
          if (i.removeAttr("ui-select-choices"), 1 !== i.length)throw l("transcluded", "Expected 1 .ui-select-choices but got '{0}'.", i.length);
          a.querySelectorAll(".ui-select-choices").replaceWith(i)
        })
      }
    }
  }]).directive("uiSelectChoices", ["uiSelectConfig", "RepeatParser", "uiSelectMinErr", "$compile", function (e, t, c, l) {
    return {
      restrict: "EA", require: "^uiSelect", replace: !0, transclude: !0, templateUrl: function (t) {
        var c = t.parent().attr("theme") || e.theme;
        return c + "/choices.tpl.html"
      }, compile: function (i, s) {
        if (!s.repeat)throw c("repeat", "Expected 'repeat' expression.");
        return function (i, s, n, a, r) {
          var o = n.groupBy;
          if (a.parseRepeatAttr(n.repeat, o), a.disableChoiceExpression = n.uiDisableChoice, a.onHighlightCallback = n.onHighlight, o) {
            var u = s.querySelectorAll(".ui-select-choices-group");
            if (1 !== u.length)throw c("rows", "Expected 1 .ui-select-choices-group but got '{0}'.", u.length);
            u.attr("ng-repeat", t.getGroupNgRepeatExpression())
          }
          var d = s.querySelectorAll(".ui-select-choices-row");
          if (1 !== d.length)throw c("rows", "Expected 1 .ui-select-choices-row but got '{0}'.", d.length);
          d.attr("ng-repeat", t.getNgRepeatExpression(a.parserResult.itemName, "$select.items", a.parserResult.trackByExp, o)).attr("ng-if", "$select.open").attr("ng-mouseenter", "$select.setActiveItem(" + a.parserResult.itemName + ")").attr("ng-click", "$select.select(" + a.parserResult.itemName + ",false,$event)");
          var p = s.querySelectorAll(".ui-select-choices-row-inner");
          if (1 !== p.length)throw c("rows", "Expected 1 .ui-select-choices-row-inner but got '{0}'.", p.length);
          p.attr("uis-transclude-append", ""), l(s, r)(i), i.$watch("$select.search", function (e) {
            e && !a.open && a.multiple && a.activate(!1, !0), a.activeIndex = a.tagging.isActivated ? -1 : 0, a.refresh(n.refresh)
          }), n.$observe("refreshDelay", function () {
            var t = i.$eval(n.refreshDelay);
            a.refreshDelay = void 0 !== t ? t : e.refreshDelay
          })
        }
      }
    }
  }]).directive("uisTranscludeAppend", function () {
    return {
      link: function (e, t, c, l, i) {
        i(e, function (e) {
          t.append(e)
        })
      }
    }
  }).directive("uiSelectMatch", ["uiSelectConfig", function (e) {
    return {
      restrict: "EA", require: "^uiSelect", replace: !0, transclude: !0, templateUrl: function (t) {
        var c = t.parent().attr("theme") || e.theme, l = t.parent().attr("multiple");
        return c + (l ? "/match-multiple.tpl.html" : "/match.tpl.html")
      }, link: function (t, c, l, i) {
        i.lockChoiceExpression = l.uiLockChoice, l.$observe("placeholder", function (t) {
          i.placeholder = void 0 !== t ? t : e.placeholder
        }), i.allowClear = angular.isDefined(l.allowClear) ? "" === l.allowClear ? !0 : "true" === l.allowClear.toLowerCase() : !1, i.multiple && i.sizeSearchInput()
      }
    }
  }]).filter("highlight", function () {
    function e(e) {
      return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (t, c) {
      return c && t ? t.replace(new RegExp(e(c), "gi"), '<span class="ui-select-highlight">$&</span>') : t
    }
  })
}(), angular.module("ui.select").run(["$templateCache", function (e) {
  e.put("bootstrap/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content dropdown-menu" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0"><li class="ui-select-choices-group"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind-html="$group.name"></div><div class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><a href="javascript:void(0)" class="ui-select-choices-row-inner"></a></div></li></ul>'), e.put("bootstrap/match-multiple.tpl.html", '<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span style="margin-right: 3px;" class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$select.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$select.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$select.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'), e.put("bootstrap/match.tpl.html", '<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><button type="button" class="btn btn-default btn-block ui-select-toggle" tabindex="-1" ;="" ng-disabled="$select.disabled" ng-click="$select.activate()"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i></button> <button type="button" class="ui-select-clear" ng-if="$select.allowClear && !$select.isEmpty()" ng-click="$select.select(undefined)"><i class="glyphicon glyphicon-remove"></i></button></div>'), e.put("bootstrap/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$select.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search"></div><div class="ui-select-choices"></div></div>'), e.put("bootstrap/select.tpl.html", '<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'), e.put("select2/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind-html="$group.name"></div><ul ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'), e.put("select2/match-multiple.tpl.html", '<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$select.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$select.removeChoice($index)" tabindex="-1"></a></li></span>'), e.put("select2/match.tpl.html", '<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.activate()"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.select(undefined)"></abbr> <span class="select2-arrow ui-select-toggle" ng-click="$select.toggle($event)"><b></b></span></a>'), e.put("select2/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open,\n                \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input ui-select-search" placeholder="{{$select.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;"></li></ul><div class="select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'), e.put("select2/select.tpl.html", '<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open,\n                \'select2-container-disabled\': $select.disabled,\n                \'select2-container-active\': $select.focus, \n                \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'), e.put("selectize/choices.tpl.html", '<div ng-show="$select.open" class="ui-select-choices selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind-html="$group.name"></div><div class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'), e.put("selectize/match.tpl.html", '<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'), e.put("selectize/select.tpl.html", '<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled"></div><div class="ui-select-choices"></div></div>')
}]);

(function () {
  'use strict';

  /*
   * AngularJS Toaster
   * Version: 0.4.10
   *
   * Copyright 2013 Jiri Kavulak.
   * All Rights Reserved.
   * Use, reproduction, distribution, and modification of this code is subject to the terms and
   * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
   *
   * Author: Jiri Kavulak
   * Related to project of John Papa and Hans Fjällemark
   */

  angular.module('toaster', ['ngAnimate'])
    .constant('toasterConfig', {
      'limit': 0,                   // limits max number of toasts
      'tap-to-dismiss': true,
      'close-button': false,
      'newest-on-top': true,
      //'fade-in': 1000,            // done in css
      //'on-fade-in': undefined,    // not implemented
      //'fade-out': 1000,           // done in css
      // 'on-fade-out': undefined,  // not implemented
      //'extended-time-out': 1000,    // not implemented
      'time-out': 5000, // Set timeOut and extendedTimeout to 0 to make it sticky
      'icon-classes': {
        error: 'toast-error',
        info: 'toast-info',
        wait: 'toast-wait',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      'body-output-type': '',// Options: '', 'trustedHtml', 'template', 'templateWithData'
      'body-template': 'toasterBodyTmpl.html',
      'icon-class': 'toast-info',
      'position-class': 'toast-top-right',
      'title-class': 'toast-title',
      'message-class': 'toast-message',
      'mouseover-timer-stop': true // stop timeout on mouseover and restart timer on mouseout
    })
    .service('toaster', ['$rootScope', 'toasterConfig', function ($rootScope, toasterConfig) {
      this.pop = function (type, title, body, timeout, bodyOutputType, clickHandler) {
        if (angular.isObject(type)) {
          var params = type; // NOTE: anable parameters as pop argument
          this.toast = {
            type: params.type,
            title: params.title,
            body: params.body,
            timeout: params.timeout,
            bodyOutputType: params.bodyOutputType,
            clickHandler: params.clickHandler
          };
        }
        else {
          this.toast = {
            type: type,
            title: title,
            body: body,
            timeout: timeout,
            bodyOutputType: bodyOutputType,
            clickHandler: clickHandler
          };
        }
        $rootScope.$emit('toaster-newToast');
      };

      this.clear = function () {
        $rootScope.$emit('toaster-clearToasts');
      };

      for (var type in toasterConfig['icon-classes']) {
        this[type] = (function (toasterType) {
          return function (title, body, timeout, bodyOutputType, clickHandler) {
            if (angular.isString(title))
              this.pop(toasterType, title, body, timeout, bodyOutputType, clickHandler);
            else
              this.pop(angular.extend(title, {type: toasterType}));
          }
        })(type);
      }
    }])
    .factory('toasterRegisterEvents', function () {

      var toasterFactory = {
        _NewToastEvent: false,
        _ClearAllToastsEvent: false,
        registerNewToastEvent: function () {
          this._NewToastEvent = true;
        },
        registerClearAllToastsEvent: function () {
          this._ClearAllToastsEvent = true;
        },
        isRegisteredNewToastEvent: function () {
          return this._NewToastEvent;
        },
        isRegisteredClearAllToastsEvent: function () {
          return this._ClearAllToastsEvent;
        }
      }
      return {
        registerNewToastEvent: toasterFactory.registerNewToastEvent,
        registerClearAllToastsEvent: toasterFactory.registerClearAllToastsEvent,
        isRegisteredNewToastEvent: toasterFactory.isRegisteredNewToastEvent,
        isRegisteredClearAllToastsEvent: toasterFactory.isRegisteredClearAllToastsEvent
      }
    })
    .directive('toasterContainer', ['$parse', '$rootScope', '$interval', '$sce', 'toasterConfig', 'toaster', 'toasterRegisterEvents',
      function ($parse, $rootScope, $interval, $sce, toasterConfig, toaster, toasterRegisterEvents) {
        return {
          replace: true,
          restrict: 'EA',
          scope: true, // creates an internal scope for this directive
          link: function (scope, elm, attrs) {

            var id = 0,
              mergedConfig;

            mergedConfig = angular.extend({}, toasterConfig, scope.$eval(attrs.toasterOptions));

            scope.config = {
              position: mergedConfig['position-class'],
              title: mergedConfig['title-class'],
              message: mergedConfig['message-class'],
              tap: mergedConfig['tap-to-dismiss'],
              closeButton: mergedConfig['close-button'],
              animation: mergedConfig['animation-class'],
              mouseoverTimer: mergedConfig['mouseover-timer-stop']
            };

            scope.deregClearToasts = null;
            scope.deregNewToast = null;

            scope.$on("$destroy", function () {
              if (scope.deregClearToasts) scope.deregClearToasts();
              if (scope.deregNewToast) scope.deregNewToast();
              scope.deregClearToasts = null;
              scope.deregNewToast = null;
            });

            scope.configureTimer = function configureTimer(toast) {
              var timeout = typeof (toast.timeout) == "number" ? toast.timeout : mergedConfig['time-out'];
              if (timeout > 0)
                setTimeout(toast, timeout);
            };

            function addToast(toast) {
              toast.type = mergedConfig['icon-classes'][toast.type];
              if (!toast.type)
                toast.type = mergedConfig['icon-class'];

              id++;
              angular.extend(toast, {id: id});

              // Set the toast.bodyOutputType to the default if it isn't set
              toast.bodyOutputType = toast.bodyOutputType || mergedConfig['body-output-type'];
              switch (toast.bodyOutputType) {
                case 'trustedHtml':
                  toast.html = $sce.trustAsHtml(toast.body);
                  break;
                case 'template':
                  toast.bodyTemplate = toast.body || mergedConfig['body-template'];
                  break;
                case 'templateWithData':
                  var fcGet = $parse(toast.body || mergedConfig['body-template']);
                  var templateWithData = fcGet(scope);
                  toast.bodyTemplate = templateWithData.template;
                  toast.data = templateWithData.data;
                  break;
              }

              scope.configureTimer(toast);

              if (mergedConfig['newest-on-top'] === true) {
                scope.toasters.unshift(toast);
                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                  scope.toasters.pop();
                }
              } else {
                scope.toasters.push(toast);
                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                  scope.toasters.shift();
                }
              }

              toast.mouseover = false;
            }

            function setTimeout(toast, time) {
              toast.timeout = $interval(function () {
                if (!toast.mouseover)
                  scope.removeToast(toast.id);
              }, time);
            }

            scope.toasters = [];

            if (!toasterRegisterEvents.isRegisteredNewToastEvent()) {
              toasterRegisterEvents.registerNewToastEvent();
              scope.deregNewToast = $rootScope.$on('toaster-newToast', function () {
                addToast(toaster.toast);
              });
            }

            if (!toasterRegisterEvents.isRegisteredClearAllToastsEvent()) {
              toasterRegisterEvents.registerClearAllToastsEvent();
              scope.deregClearToasts = $rootScope.$on('toaster-clearToasts', function () {
                scope.toasters.splice(0, scope.toasters.length);
              });
            }
          },
          controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            $scope.stopTimer = function (toast) {
              toast.mouseover = true;
              if ($scope.config.mouseoverTimer === true) {
                if (toast.timeout) {
                  $interval.cancel(toast.timeout);
                  toast.timeout = null;
                }
              }
            };

            $scope.restartTimer = function (toast) {
              toast.mouseover = false;
              if ($scope.config.mouseoverTimer === true) {
                if (!toast.timeout)
                  $scope.configureTimer(toast);
              }
              else if (toast.timeout === null) {
                $scope.removeToast(toaster.id);
              }
            };

            $scope.removeToast = function (id) {
              var i = 0;
              for (i; i < $scope.toasters.length; i++) {
                if ($scope.toasters[i].id === id)
                  break;
              }
              $scope.toasters.splice(i, 1);
            };

            $scope.click = function (toaster, isCloseButton) {
              if ($scope.config.tap === true || isCloseButton == true) {
                var removeToast = true;
                if (toaster.clickHandler) {
                  if (angular.isFunction(toaster.clickHandler)) {
                    removeToast = toaster.clickHandler(toaster, isCloseButton);
                  }
                  else if (angular.isFunction($scope.$parent.$eval(toaster.clickHandler))) {
                    removeToast = $scope.$parent.$eval(toaster.clickHandler)(toaster, isCloseButton);
                  }
                  else {
                    console.log("TOAST-NOTE: Your click handler is not inside a parent scope of toaster-container.");
                  }
                }
                if (removeToast) {
                  $scope.removeToast(toaster.id);
                }
              }
            };
          }],
          template: '<div  id="toast-container" ng-class="[config.position, config.animation]">' +
          '<div ng-repeat="toaster in toasters" class="toast" ng-class="toaster.type" ng-click="click(toaster)" ng-mouseover="stopTimer(toaster)"  ng-mouseout="restartTimer(toaster)">' +
          '<button class="toast-close-button" ng-show="config.closeButton" ng-click="click(toaster, true)">&times;</button>' +
          '<div ng-class="config.title">{{toaster.title}}</div>' +
          '<div ng-class="config.message" ng-switch on="toaster.bodyOutputType">' +
          '<div ng-switch-when="trustedHtml" ng-bind-html="toaster.html"></div>' +
          '<div ng-switch-when="template"><div ng-include="toaster.bodyTemplate"></div></div>' +
          '<div ng-switch-when="templateWithData"><div ng-include="toaster.bodyTemplate"></div></div>' +
          '<div ng-switch-default >{{toaster.body}}</div>' +
          '</div>' +
          '</div>' +
          '</div>'
        };
      }]);
})(window, document);

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return M(new (M(function () {
    }, {prototype: a})), b)
  }

  function e(a) {
    return L(arguments, function (b) {
      b !== a && L(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b)
      })
    }), a
  }

  function f(a, b) {
    var c = [];
    for (var d in a.path) {
      if (a.path[d] !== b.path[d])break;
      c.push(a.path[d])
    }
    return c
  }

  function g(a) {
    if (Object.keys)return Object.keys(a);
    var c = [];
    return b.forEach(a, function (a, b) {
      c.push(b)
    }), c
  }

  function h(a, b) {
    if (Array.prototype.indexOf)return a.indexOf(b, Number(arguments[2]) || 0);
    var c = a.length >>> 0, d = Number(arguments[2]) || 0;
    for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)if (d in a && a[d] === b)return d;
    return -1
  }

  function i(a, b, c, d) {
    var e, i = f(c, d), j = {}, k = [];
    for (var l in i)if (i[l].params && (e = g(i[l].params), e.length))for (var m in e)h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
    return M({}, j, b)
  }

  function j(a, b, c) {
    if (!c) {
      c = [];
      for (var d in a)c.push(d)
    }
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      if (a[f] != b[f])return !1
    }
    return !0
  }

  function k(a, b) {
    var c = {};
    return L(a, function (a) {
      c[a] = b[a]
    }), c
  }

  function l(a) {
    var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    for (var d in a)-1 == h(c, d) && (b[d] = a[d]);
    return b
  }

  function m(a, b) {
    var c = K(a), d = c ? [] : {};
    return L(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a)
    }), d
  }

  function n(a, b) {
    var c = K(a) ? [] : {};
    return L(a, function (a, d) {
      c[d] = b(a, d)
    }), c
  }

  function o(a, b) {
    var d = 1, f = 2, i = {}, j = [], k = i, m = M(a.when(i), {$$promises: i, $$values: i});
    this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d)throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
          if (s[c] = d, I(a))q.push(c, [function () {
            return b.get(a)
          }], j); else {
            var e = b.annotate(a);
            L(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a)
            }), q.push(c, a, e)
          }
          r.pop(), s[c] = f
        }
      }

      function o(a) {
        return J(a) && a.then && a.$$promises
      }

      if (!J(i))throw new Error("'invocables' must be an object");
      var p = g(i || {}), q = [], r = [], s = {};
      return L(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
        }

        function i(a) {
          r.$$failure = a, n.reject(a)
        }

        function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a)
          }

          function k() {
            if (!G(r.$$failure))try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h()
              }, j)
            } catch (a) {
              j(a)
            }
          }

          var l = a.defer(), m = 0;
          L(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k()
            }, j))
          }), m || k(), s[c] = l.promise
        }

        if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!J(d))throw new Error("'locals' must be an object")
        } else d = k;
        if (f) {
          if (!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
        } else f = m;
        var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = M({}, d), u = 1 + q.length / 3, v = !1;
        if (G(f.$$failure))return i(f.$$failure), r;
        f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));
        for (var w = 0, x = q.length; x > w; w += 3)d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        return r
      }
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d)
    }
  }

  function p(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
    }, this.fromString = function (a, b) {
      return H(a) ? a(b) : a
    }, this.fromUrl = function (c, d) {
      return H(c) && (c = c(d)), null == c ? null : a.get(c, {
        cache: b,
        headers: {Accept: "text/html"}
      }).then(function (a) {
        return a.data
      })
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || {params: b})
    }
  }

  function q(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b])return o[b];
      if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
      if (p[b])throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
      return p[b] = new O.Param(b, c, d, e), p[b]
    }

    function g(a, b, c) {
      var d = ["", ""], e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
      if (!b)return e;
      switch (c) {
        case!1:
          d = ["(", ")"];
          break;
        case!0:
          d = ["?(", ")?"];
          break;
        default:
          d = ["(" + c + "|", ")?"]
      }
      return e + d[0] + b + d[1]
    }

    function h(c, e) {
      var f, g, h, i, j;
      return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), {pattern: new RegExp(g)}), {
        id: f,
        regexp: g,
        segment: h,
        type: i,
        cfg: j
      }
    }

    b = M({params: {}}, J(b) ? b : {});
    var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", m = 0, n = this.segments = [], o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new O.ParamSet, q = [];
    this.source = a;
    for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));)s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
    t = a.substring(m);
    var u = t.indexOf("?");
    if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);
      if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)for (m = 0; i = k.exec(v);)r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
    } else this.sourcePath = a, this.sourceSearch = "";
    l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
  }

  function r(a) {
    M(this, a)
  }

  function s() {
    function a(a) {
      return null != a ? a.toString().replace(/\//g, "%2F") : a
    }

    function e(a) {
      return null != a ? a.toString().replace(/%2F/g, "/") : a
    }

    function f(a) {
      return this.pattern.test(a)
    }

    function i() {
      return {strict: t, caseInsensitive: p}
    }

    function j(a) {
      return H(a) || K(a) && H(a[a.length - 1])
    }

    function k() {
      for (; x.length;) {
        var a = x.shift();
        if (a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");
        b.extend(v[a.name], o.invoke(a.def))
      }
    }

    function l(a) {
      M(this, a || {})
    }

    O = this;
    var o, p = !1, t = !0, u = !1, v = {}, w = !0, x = [], y = {
      string: {encode: a, decode: e, is: f, pattern: /[^/]*/},
      "int": {
        encode: a, decode: function (a) {
          return parseInt(a, 10)
        }, is: function (a) {
          return G(a) && this.decode(a.toString()) === a
        }, pattern: /\d+/
      },
      bool: {
        encode: function (a) {
          return a ? 1 : 0
        }, decode: function (a) {
          return 0 !== parseInt(a, 10)
        }, is: function (a) {
          return a === !0 || a === !1
        }, pattern: /0|1/
      },
      date: {
        encode: function (a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
        },
        decode: function (a) {
          if (this.is(a))return a;
          var b = this.capture.exec(a);
          return b ? new Date(b[1], b[2] - 1, b[3]) : c
        },
        is: function (a) {
          return a instanceof Date && !isNaN(a.valueOf())
        },
        equals: function (a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
        },
        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
      },
      json: {encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^/]*/},
      any: {encode: b.identity, decode: b.identity, is: b.identity, equals: b.equals, pattern: /.*/}
    };
    s.$$getDefaultValue = function (a) {
      if (!j(a.value))return a.value;
      if (!o)throw new Error("Injectable functions cannot be called at configuration time");
      return o.invoke(a.value)
    }, this.caseInsensitive = function (a) {
      return G(a) && (p = a), p
    }, this.strictMode = function (a) {
      return G(a) && (t = a), t
    }, this.defaultSquashPolicy = function (a) {
      if (!G(a))return u;
      if (a !== !0 && a !== !1 && !I(a))throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
      return u = a, a
    }, this.compile = function (a, b) {
      return new q(a, M(i(), b))
    }, this.isMatcher = function (a) {
      if (!J(a))return !1;
      var b = !0;
      return L(q.prototype, function (c, d) {
        H(c) && (b = b && G(a[d]) && H(a[d]))
      }), b
    }, this.type = function (a, b, c) {
      if (!G(b))return v[a];
      if (v.hasOwnProperty(a))throw new Error("A type named '" + a + "' has already been defined.");
      return v[a] = new r(M({name: a}, b)), c && (x.push({name: a, def: c}), w || k()), this
    }, L(y, function (a, b) {
      v[b] = new r(M({name: b}, a))
    }), v = d(v, {}), this.$get = ["$injector", function (a) {
      return o = a, w = !1, k(), L(y, function (a, b) {
        v[b] || (v[b] = new r(a))
      }), this
    }], this.Param = function (a, b, d, e) {
      function f(a) {
        var b = J(a) ? g(a) : [], c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
        return c && (a = {value: a}), a.$$fn = j(a.value) ? a.value : function () {
          return a.value
        }, a
      }

      function i(b, c, d) {
        if (b.type && c)throw new Error("Param '" + a + "' has two type configurations.");
        return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string
      }

      function k() {
        var b = {array: "search" === e ? "auto" : !1}, c = a.match(/\[\]$/) ? {array: !0} : {};
        return M(b, c, d).array
      }

      function l(a, b) {
        var c = a.squash;
        if (!b || c === !1)return !1;
        if (!G(c) || null == c)return u;
        if (c === !0 || I(c))return c;
        throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
      }

      function p(a, b, d, e) {
        var f, g, i = [{from: "", to: d || b ? c : ""}, {from: null, to: d || b ? c : ""}];
        return f = K(a.replace) ? a.replace : [], I(e) && f.push({from: e, to: c}), g = n(f, function (a) {
          return a.from
        }), m(i, function (a) {
          return -1 === h(g, a.from)
        }).concat(f)
      }

      function q() {
        if (!o)throw new Error("Injectable functions cannot be called at configuration time");
        return o.invoke(d.$$fn)
      }

      function s(a) {
        function b(a) {
          return function (b) {
            return b.from === a
          }
        }

        function c(a) {
          var c = n(m(w.replace, b(a)), function (a) {
            return a.to
          });
          return c.length ? c[0] : a
        }

        return a = c(a), G(a) ? w.type.decode(a) : q()
      }

      function t() {
        return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}"
      }

      var w = this;
      d = f(d), b = i(d, b, e);
      var x = k();
      b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
      var y = d.value !== c, z = l(d, y), A = p(d, x, y, z);
      M(this, {
        id: a,
        type: b,
        location: e,
        array: x,
        squash: z,
        replace: A,
        isOptional: y,
        value: s,
        dynamic: c,
        config: d,
        toString: t
      })
    }, l.prototype = {
      $$new: function () {
        return d(this, M(new l, {$$parent: this}))
      }, $$keys: function () {
        for (var a = [], b = [], c = this, d = g(l.prototype); c;)b.push(c), c = c.$$parent;
        return b.reverse(), L(b, function (b) {
          L(g(b), function (b) {
            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
          })
        }), a
      }, $$values: function (a) {
        var b = {}, c = this;
        return L(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d])
        }), b
      }, $$equals: function (a, b) {
        var c = !0, d = this;
        return L(d.$$keys(), function (e) {
          var f = a && a[e], g = b && b[e];
          d[e].type.equals(f, g) || (c = !1)
        }), c
      }, $$validates: function (a) {
        var b, c, d, e = !0, f = this;
        return L(this.$$keys(), function (g) {
          d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !!d.type.is(c))
        }), e
      }, $$parent: c
    }, this.ParamSet = l
  }

  function t(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
      return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
    }

    function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)]
      })
    }

    function g(a, b, c) {
      if (!c)return !1;
      var d = a.invoke(b, b, {$match: c});
      return G(d) ? d : !0
    }

    function h(d, e, f, g) {
      function h(a, b, c) {
        return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a
      }

      function m(a) {
        function b(a) {
          var b = a(f, d);
          return b ? (I(b) && d.replace().url(b), !0) : !1
        }

        if (!a || !a.defaultPrevented) {
          var e = o && d.url() === o;
          if (o = c, e)return !0;
          var g, h = j.length;
          for (g = 0; h > g; g++)if (b(j[g]))return;
          k && b(k)
        }
      }

      function n() {
        return i = i || e.$on("$locationChangeSuccess", m)
      }

      var o, p = g.baseHref(), q = d.url();
      return l || n(), {
        sync: function () {
          m()
        }, listen: function () {
          return n()
        }, update: function (a) {
          return a ? void(q = d.url()) : void(d.url() !== q && (d.url(q), d.replace()))
        }, push: function (a, b, e) {
          d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
        }, href: function (c, e, f) {
          if (!c.validates(e))return null;
          var g = a.html5Mode();
          b.isObject(g) && (g = g.enabled);
          var i = c.format(e);
          if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i)return i;
          var j = !g && i ? "/" : "", k = d.port();
          return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
        }
      }
    }

    var i, j = [], k = null, l = !1;
    this.rule = function (a) {
      if (!H(a))throw new Error("'rule' must be a function");
      return j.push(a), this
    }, this.otherwise = function (a) {
      if (I(a)) {
        var b = a;
        a = function () {
          return b
        }
      } else if (!H(a))throw new Error("'rule' must be a function");
      return k = a, this
    }, this.when = function (a, b) {
      var c, h = I(b);
      if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b))throw new Error("invalid 'handler' in when()");
      var i = {
        matcher: function (a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a)
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()))
          }, {prefix: I(a.prefix) ? a.prefix : ""})
        }, regex: function (a, b) {
          if (a.global || a.sticky)throw new Error("when() RegExp must not be global or sticky");
          return h && (c = b, b = ["$match", function (a) {
            return f(c, a)
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path()))
          }, {prefix: e(a)})
        }
      }, j = {matcher: d.isMatcher(a), regex: a instanceof RegExp};
      for (var k in j)if (j[k])return this.rule(i[k](a, b));
      throw new Error("invalid 'what' in when()")
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"]
  }

  function u(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^")
    }

    function l(a, b) {
      if (!a)return c;
      var d = I(a), e = d ? a : a.name, g = f(e);
      if (g) {
        if (!b)throw new Error("No reference point given for path '" + e + "'");
        b = l(b);
        for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)if ("" !== h[i] || 0 !== i) {
          if ("^" !== h[i])break;
          if (!k.parent)throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
          k = k.parent
        } else k = b;
        h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
      }
      var m = y[e];
      return !m || !d && (d || m !== a && m.self !== a) ? c : m
    }

    function m(a, b) {
      z[a] || (z[a] = []), z[a].push(b)
    }

    function o(a) {
      for (var b = z[a] || []; b.length;)p(b.shift())
    }

    function p(b) {
      b = d(b, {
        self: b, resolve: b.resolve || {}, toString: function () {
          return this.name
        }
      });
      var c = b.name;
      if (!I(c) || c.indexOf("@") >= 0)throw new Error("State must have a valid name");
      if (y.hasOwnProperty(c))throw new Error("State '" + c + "'' is already defined");
      var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";
      if (e && !y[e])return m(e, b.self);
      for (var f in B)H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
      return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, {inherit: !0, location: !1})
      }]), o(c), b
    }

    function q(a) {
      return a.indexOf("*") > -1
    }

    function r(a) {
      var b = a.split("."), c = x.$current.name.split(".");
      if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length)return !1;
      for (var d = 0, e = b.length; e > d; d++)"*" === b[d] && (c[d] = "*");
      return c.join("") === b.join("")
    }

    function s(a, b) {
      return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this
    }

    function t(a, b) {
      return J(a) ? b = a : b.name = a, p(b), this
    }

    function u(a, e, f, h, m, o, p) {
      function s(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);
        if (g.defaultPrevented)return p.update(), B;
        if (!g.retry)return null;
        if (f.$retry)return p.update(), C;
        var h = x.transition = e.when(g.retry);
        return h.then(function () {
          return h !== x.transition ? u : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options))
        }, function () {
          return B
        }), p.update(), h
      }

      function t(a, c, d, g, i, j) {
        var l = d ? c : k(a.params.$$keys(), c), n = {$stateParams: l};
        i.resolve = m.resolve(a.resolve, n, i.resolve, a);
        var o = [i.resolve.then(function (a) {
          i.globals = a
        })];
        return g && o.push(g), L(a.views, function (c, d) {
          var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
          e.$template = [function () {
            return f.load(d, {view: c, locals: n, params: l, notify: j.notify}) || ""
          }], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
            if (H(c.controllerProvider) || K(c.controllerProvider)) {
              var g = b.extend({}, e, n);
              f.$$controller = h.invoke(c.controllerProvider, null, g)
            } else f.$$controller = c.controller;
            f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f
          }))
        }), e.all(o).then(function () {
          return i
        })
      }

      var u = e.reject(new Error("transition superseded")), z = e.reject(new Error("transition prevented")), B = e.reject(new Error("transition aborted")), C = e.reject(new Error("transition failed"));
      return w.locals = {resolve: null, globals: {$stateParams: {}}}, x = {
        params: {},
        current: w.self,
        $current: w,
        transition: null
      }, x.reload = function () {
        return x.transitionTo(x.current, o, {reload: !0, inherit: !1, notify: !0})
      }, x.go = function (a, b, c) {
        return x.transitionTo(a, b, M({inherit: !0, relative: x.$current}, c))
      }, x.transitionTo = function (b, c, f) {
        c = c || {}, f = M({location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1}, f || {});
        var g, j = x.$current, m = x.params, n = j.path, q = l(b, f.relative);
        if (!G(q)) {
          var r = {to: b, toParams: c, options: f}, y = s(r, j.self, m, f);
          if (y)return y;
          if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
            if (!f.relative)throw new Error("No such state '" + b + "'");
            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
          }
        }
        if (q[A])throw new Error("Cannot transition to abstract state '" + b + "'");
        if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c))return C;
        c = q.params.$$values(c), b = q;
        var B = b.path, D = 0, E = B[D], F = w.locals, H = [];
        if (!f.reload)for (; E && E === n[D] && E.ownParams.$$equals(c, m);)F = H[D] = E.locals, D++, E = B[D];
        if (v(b, j, F, f))return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);
        if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented)return p.update(), z;
        for (var I = e.when(F), J = D; J < B.length; J++, E = B[J])F = H[J] = d(F), I = t(E, c, E === b, I, F, f);
        var K = x.transition = I.then(function () {
          var d, e, g;
          if (x.transition !== K)return u;
          for (d = n.length - 1; d >= D; d--)g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          for (d = D; d < B.length; d++)e = B[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          return x.transition !== K ? u : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
            $$avoidResync: !0,
            replace: "replace" === f.location
          }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current)
        }, function (d) {
          return x.transition !== K ? u : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d))
        });
        return K
      }, x.is = function (a, b, d) {
        d = M({relative: x.$current}, d || {});
        var e = l(a, d.relative);
        return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c
      }, x.includes = function (a, b, d) {
        if (d = M({relative: x.$current}, d || {}), I(a) && q(a)) {
          if (!r(a))return !1;
          a = x.$current.name
        }
        var e = l(a, d.relative);
        return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c
      }, x.href = function (a, b, d) {
        d = M({lossy: !0, inherit: !0, absolute: !1, relative: x.$current}, d || {});
        var e = l(a, d.relative);
        if (!G(e))return null;
        d.inherit && (b = i(o, b || {}, x.$current, e));
        var f = e && d.lossy ? e.navigable : e;
        return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), {absolute: d.absolute}) : null
      }, x.get = function (a, b) {
        if (0 === arguments.length)return n(g(y), function (a) {
          return y[a].self
        });
        var c = l(a, b || x.$current);
        return c && c.self ? c.self : null
      }, x
    }

    function v(a, b, c, d) {
      return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
    }

    var w, x, y = {}, z = {}, A = "abstract", B = {
      parent: function (a) {
        if (G(a.parent) && a.parent)return l(a.parent);
        var b = /^(.+)\.[^.]+$/.exec(a.name);
        return b ? l(b[1]) : w
      }, data: function (a) {
        return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data
      }, url: function (a) {
        var b = a.url, c = {params: a.params || {}};
        if (I(b))return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);
        if (!b || e.isMatcher(b))return b;
        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
      }, navigable: function (a) {
        return a.url ? a : a.parent ? a.parent.navigable : null
      }, ownParams: function (a) {
        var b = a.url && a.url.params || new O.ParamSet;
        return L(a.params || {}, function (a, c) {
          b[c] || (b[c] = new O.Param(c, null, a, "config"))
        }), b
      }, params: function (a) {
        return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet
      }, views: function (a) {
        var b = {};
        return L(G(a.views) ? a.views : {"": a}, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
        }), b
      }, path: function (a) {
        return a.parent ? a.parent.path.concat(a) : []
      }, includes: function (a) {
        var b = a.parent ? M({}, a.parent.includes) : {};
        return b[a.name] = !0, b
      }, $delegates: {}
    };
    w = p({
      name: "",
      url: "^",
      views: null,
      "abstract": !0
    }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
  }

  function v() {
    function a(a, b) {
      return {
        load: function (c, d) {
          var e, f = {template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {}};
          return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
        }
      }
    }

    this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
  }

  function w() {
    var a = !1;
    this.useAnchorScroll = function () {
      a = !0
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        c(function () {
          a[0].scrollIntoView()
        }, 0, !1)
      }
    }]
  }

  function x(a, c, d, e) {
    function f() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null
      } : function (a) {
        try {
          return c.get(a)
        } catch (b) {
          return null
        }
      }
    }

    function g(a, b) {
      var c = function () {
        return {
          enter: function (a, b, c) {
            b.after(a), c()
          }, leave: function (a, b) {
            a.remove(), b()
          }
        }
      };
      if (j)return {
        enter: function (a, b, c) {
          var d = j.enter(a, null, b, c);
          d && d.then && d.then(c)
        }, leave: function (a, b) {
          var c = j.leave(a, b);
          c && c.then && c.then(b)
        }
      };
      if (i) {
        var d = i && i(b, a);
        return {
          enter: function (a, b, c) {
            d.enter(a, null, b), c()
          }, leave: function (a, b) {
            d.leave(a), b()
          }
        }
      }
      return c()
    }

    var h = f(), i = h("$animator"), j = h("$animate"), k = {
      restrict: "ECA",
      terminal: !0,
      priority: 400,
      transclude: "element",
      compile: function (c, f, h) {
        return function (c, f, i) {
          function j() {
            l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function () {
              l = null
            }), l = m, m = null)
          }

          function k(g) {
            var k, l = z(c, i, f, e), s = l && a.$current && a.$current.locals[l];
            if (g || s !== o) {
              k = c.$new(), o = a.$current.locals[l];
              var t = h(k, function (a) {
                r.enter(a, f, function () {
                  n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                }), j()
              });
              m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p)
            }
          }

          var l, m, n, o, p = i.onload || "", q = i.autoscroll, r = g(i, c);
          c.$on("$stateChangeSuccess", function () {
            k(!1)
          }), c.$on("$viewContentLoading", function () {
            k(!1)
          }), k(!0)
        }
      }
    };
    return k
  }

  function y(a, b, c, d) {
    return {
      restrict: "ECA", priority: -400, compile: function (e) {
        var f = e.html();
        return function (e, g, h) {
          var i = c.$current, j = z(e, h, g, d), k = i && i.locals[j];
          if (k) {
            g.data("$uiView", {name: j, state: k.$$state}), g.html(k.$template ? k.$template : f);
            var l = a(g.contents());
            if (k.$$controller) {
              k.$scope = e;
              var m = b(k.$$controller, k);
              k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
            }
            l(e)
          }
        }
      }
    }
  }

  function z(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
    return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
  }

  function A(a, b) {
    var c, d = a.match(/^\s*({[^}]*})\s*$/);
    if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length)throw new Error("Invalid state ref '" + a + "'");
    return {state: c[1], paramExpr: c[3] || null}
  }

  function B(a) {
    var b = a.parent().inheritedData("$uiView");
    return b && b.state && b.state.name ? b.state : void 0
  }

  function C(a, c) {
    var d = ["location", "inherit", "reload"];
    return {
      restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (e, f, g, h) {
        var i = A(g.uiSref, a.current.name), j = null, k = B(f) || a.$current, l = null, m = "A" === f.prop("tagName"), n = "FORM" === f[0].nodeName, o = n ? "action" : "href", p = !0, q = {
          relative: k,
          inherit: !0
        }, r = e.$eval(g.uiSrefOpts) || {};
        b.forEach(d, function (a) {
          a in r && (q[a] = r[a])
        });
        var s = function (c) {
          if (c && (j = b.copy(c)), p) {
            l = a.href(i.state, j, q);
            var d = h[1] || h[0];
            return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l)
          }
        };
        i.paramExpr && (e.$watch(i.paramExpr, function (a) {
          a !== j && s(a)
        }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function (b) {
          var d = b.which || b.button;
          if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
            var e = c(function () {
              a.go(i.state, j, q)
            });
            b.preventDefault();
            var g = m && !l ? 1 : 0;
            b.preventDefault = function () {
              g-- <= 0 && c.cancel(e)
            }
          }
        })
      }
    }
  }

  function D(a, b, c) {
    return {
      restrict: "A", controller: ["$scope", "$element", "$attrs", function (b, d, e) {
        function f() {
          g() ? d.addClass(j) : d.removeClass(j)
        }

        function g() {
          return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i)
        }

        var h, i, j;
        j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function (b, c) {
          h = a.get(b, B(d)), i = c, f()
        }, b.$on("$stateChangeSuccess", f)
      }]
    }
  }

  function E(a) {
    var b = function (b) {
      return a.is(b)
    };
    return b.$stateful = !0, b
  }

  function F(a) {
    var b = function (b) {
      return a.includes(b)
    };
    return b.$stateful = !0, b
  }

  var G = b.isDefined, H = b.isFunction, I = b.isString, J = b.isObject, K = b.isArray, L = b.forEach, M = b.extend, N = b.copy;
  b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);
  var O;
  q.prototype.concat = function (a, b) {
    var c = {caseInsensitive: O.caseInsensitive(), strict: O.strictMode(), squash: O.defaultSquashPolicy()};
    return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this)
  }, q.prototype.toString = function () {
    return this.source
  }, q.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("")
      }

      function c(a) {
        return a.replace(/\\-/, "-")
      }

      var d = b(a).split(/-(?!\\)/), e = n(d, b);
      return n(e, c).reverse()
    }

    var d = this.regexp.exec(a);
    if (!d)return null;
    b = b || {};
    var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
    if (j !== d.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
    for (e = 0; j > e; e++) {
      g = h[e];
      var l = this.params[g], m = d[e + 1];
      for (f = 0; f < l.replace; f++)l.replace[f].from === m && (m = l.replace[f].to);
      m && l.array === !0 && (m = c(m)), k[g] = l.value(m)
    }
    for (; i > e; e++)g = h[e], k[g] = this.params[g].value(b[g]);
    return k
  }, q.prototype.parameters = function (a) {
    return G(a) ? this.params[a] || null : this.$$paramNames
  }, q.prototype.validates = function (a) {
    return this.params.$$validates(a)
  }, q.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    a = a || {};
    var c = this.segments, d = this.parameters(), e = this.params;
    if (!this.validates(a))return null;
    var f, g = !1, h = c.length - 1, i = d.length, j = c[0];
    for (f = 0; i > f; f++) {
      var k = h > f, l = d[f], m = e[l], o = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), o), q = p ? m.squash : !1, r = m.type.encode(o);
      if (k) {
        var s = c[f + 1];
        if (q === !1)null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s; else if (q === !0) {
          var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
          j += s.match(t)[1]
        } else I(q) && (j += q + s)
      } else {
        if (null == r || p && q !== !1)continue;
        K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
      }
    }
    return j
  }, r.prototype.is = function () {
    return !0
  }, r.prototype.encode = function (a) {
    return a
  }, r.prototype.decode = function (a) {
    return a
  }, r.prototype.equals = function (a, b) {
    return a == b
  }, r.prototype.$subPattern = function () {
    var a = this.pattern.toString();
    return a.substr(1, a.length - 2)
  }, r.prototype.pattern = /.*/, r.prototype.toString = function () {
    return "{Type:" + this.name + "}"
  }, r.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments)
        }
      }

      function e(a) {
        return K(a) ? a : G(a) ? [a] : []
      }

      function f(a) {
        switch (a.length) {
          case 0:
            return c;
          case 1:
            return "auto" === b ? a[0] : a;
          default:
            return a
        }
      }

      function g(a) {
        return !a
      }

      function h(a, b) {
        return function (c) {
          c = e(c);
          var d = n(c, a);
          return b === !0 ? 0 === m(d, g).length : f(d)
        }
      }

      function i(a) {
        return function (b, c) {
          var d = e(b), f = e(c);
          if (d.length !== f.length)return !1;
          for (var g = 0; g < d.length; g++)if (!a(d[g], f[g]))return !1;
          return !0
        }
      }

      this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b
    }

    if (!a)return this;
    if ("auto" === a && !b)throw new Error("'auto' array mode is for query parameters only");
    return new d(this, a)
  }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory", function () {
  }]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F)
}(window, window.angular);

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){function c(){ib.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return i(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function d(a,b){return function(c){return l(a.call(this,c),b)}}function e(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function f(){}function g(a){y(a),i(this,a)}function h(a){var b=r(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function i(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function j(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&wb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function k(a){return 0>a?Math.ceil(a):Math.floor(a)}function l(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function m(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&db(a,"Date",cb(a,"Date")+f*c),g&&bb(a,cb(a,"Month")+g*c),d&&ib.updateOffset(a,f||g)}function n(a){return"[object Array]"===Object.prototype.toString.call(a)}function o(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function q(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Zb[a]||$b[b]||b}return a}function r(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=q(c),b&&(d[b]=a[c]));return d}function s(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}ib[b]=function(e,f){var g,h,i=ib.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=ib().utc().set(d,a);return i.call(ib.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function u(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function v(a,b,c){return $(ib([a,11,31+b-c]),b,c).week}function w(a){return x(a)?366:365}function x(a){return a%4===0&&a%100!==0||a%400===0}function y(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[pb]<0||a._a[pb]>11?pb:a._a[qb]<1||a._a[qb]>u(a._a[ob],a._a[pb])?qb:a._a[rb]<0||a._a[rb]>23?rb:a._a[sb]<0||a._a[sb]>59?sb:a._a[tb]<0||a._a[tb]>59?tb:a._a[ub]<0||a._a[ub]>999?ub:-1,a._pf._overflowDayOfYear&&(ob>b||b>qb)&&(b=qb),a._pf.overflow=b)}function z(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function A(a){return a?a.toLowerCase().replace("_","-"):a}function B(a,b){return b._isUTC?ib(a).zone(b._offset||0):ib(a).local()}function C(a,b){return b.abbr=a,vb[a]||(vb[a]=new f),vb[a].set(b),vb[a]}function D(a){delete vb[a]}function E(a){var b,c,d,e,f=0,g=function(a){if(!vb[a]&&xb)try{require("./lang/"+a)}catch(b){}return vb[a]};if(!a)return ib.fn._lang;if(!n(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=A(a[f]).split("-"),b=e.length,d=A(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&p(e,d,!0)>=b-1)break;b--}f++}return ib.fn._lang}function F(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function G(a){var b,c,d=a.match(Bb);for(b=0,c=d.length;c>b;b++)d[b]=cc[d[b]]?cc[d[b]]:F(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function H(a,b){return a.isValid()?(b=I(b,a.lang()),_b[b]||(_b[b]=G(b)),_b[b](a)):a.lang().invalidDate()}function I(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cb.lastIndex=0;d>=0&&Cb.test(a);)a=a.replace(Cb,c),Cb.lastIndex=0,d-=1;return a}function J(a,b){var c,d=b._strict;switch(a){case"Q":return Nb;case"DDDD":return Pb;case"YYYY":case"GGGG":case"gggg":return d?Qb:Fb;case"Y":case"G":case"g":return Sb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Rb:Gb;case"S":if(d)return Nb;case"SS":if(d)return Ob;case"SSS":if(d)return Pb;case"DDD":return Eb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ib;case"a":case"A":return E(b._l)._meridiemParse;case"X":return Lb;case"Z":case"ZZ":return Jb;case"T":return Kb;case"SSSS":return Hb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Ob:Db;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Db;case"Do":return Mb;default:return c=new RegExp(R(Q(a.replace("\\","")),"i"))}}function K(a){a=a||"";var b=a.match(Jb)||[],c=b[b.length-1]||[],d=(c+"").match(Xb)||["-",0,0],e=+(60*d[1])+t(d[2]);return"+"===d[0]?-e:e}function L(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[pb]=3*(t(b)-1));break;case"M":case"MM":null!=b&&(e[pb]=t(b)-1);break;case"MMM":case"MMMM":d=E(c._l).monthsParse(b),null!=d?e[pb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[qb]=t(b));break;case"Do":null!=b&&(e[qb]=t(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=t(b));break;case"YY":e[ob]=ib.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ob]=t(b);break;case"a":case"A":c._isPm=E(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[rb]=t(b);break;case"m":case"mm":e[sb]=t(b);break;case"s":case"ss":e[tb]=t(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ub]=t(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=K(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function M(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=O(a),a._w&&null==a._a[qb]&&null==a._a[pb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ob]?ib().weekYear():a._a[ob]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=_(f(g.GG),g.W||1,g.E,4,1):(i=E(a._l),j=null!=g.d?X(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=_(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ob]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ob]?d[ob]:a._a[ob],a._dayOfYear>w(e)&&(a._pf._overflowDayOfYear=!0),c=W(e,0,a._dayOfYear),a._a[pb]=c.getUTCMonth(),a._a[qb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[rb]+=t((a._tzm||0)/60),l[sb]+=t((a._tzm||0)%60),a._d=(a._useUTC?W:V).apply(null,l)}}function N(a){var b;a._d||(b=r(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],M(a))}function O(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function P(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=E(a._l),h=""+a._i,i=h.length,j=0;for(d=I(a._f,g).match(Bb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(J(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),cc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),L(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[rb]<12&&(a._a[rb]+=12),a._isPm===!1&&12===a._a[rb]&&(a._a[rb]=0),M(a),y(a)}function Q(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,c=i({},a),c._pf=b(),c._f=a._f[f],P(c),z(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));i(a,d||c)}function T(a){var b,c,d=a._i,e=Tb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Vb.length;c>b;b++)if(Vb[b][1].exec(d)){a._f=Vb[b][0]+(e[6]||" ");break}for(b=0,c=Wb.length;c>b;b++)if(Wb[b][1].exec(d)){a._f+=Wb[b][0];break}d.match(Jb)&&(a._f+="Z"),P(a)}else ib.createFromInputFallback(a)}function U(b){var c=b._i,d=yb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?T(b):n(c)?(b._a=c.slice(0),M(b)):o(c)?b._d=new Date(+c):"object"==typeof c?N(b):"number"==typeof c?b._d=new Date(c):ib.createFromInputFallback(b)}function V(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function W(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function X(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Y(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Z(a,b,c){var d=nb(Math.abs(a)/1e3),e=nb(d/60),f=nb(e/60),g=nb(f/24),h=nb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",nb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,Y.apply({},i)}function $(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=ib(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function _(a,b,c,d,e){var f,g,h=W(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:w(a-1)+g}}function ab(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?ib.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=E().preparse(c)),ib.isMoment(c)?(b=j(c),b._d=new Date(+c._d)):d?n(d)?S(b):P(b):U(b),new g(b))}function bb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),u(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function cb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function db(a,b,c){return"Month"===b?bb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function eb(a,b){return function(c){return null!=c?(db(this,a,c),ib.updateOffset(this,b),this):cb(this,a)}}function fb(a){ib.duration.fn[a]=function(){return this._data[a]}}function gb(a,b){ib.duration.fn["as"+a]=function(){return+this/b}}function hb(a){"undefined"==typeof ender&&(jb=mb.moment,mb.moment=a?c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",ib):ib)}for(var ib,jb,kb,lb="2.6.0",mb="undefined"!=typeof global?global:this,nb=Math.round,ob=0,pb=1,qb=2,rb=3,sb=4,tb=5,ub=6,vb={},wb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},xb="undefined"!=typeof module&&module.exports,yb=/^\/?Date\((\-?\d+)/i,zb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ab=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Bb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Cb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Db=/\d\d?/,Eb=/\d{1,3}/,Fb=/\d{1,4}/,Gb=/[+\-]?\d{1,6}/,Hb=/\d+/,Ib=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Jb=/Z|[\+\-]\d\d:?\d\d/gi,Kb=/T/i,Lb=/[\+\-]?\d+(\.\d{1,3})?/,Mb=/\d{1,2}/,Nb=/\d/,Ob=/\d\d/,Pb=/\d{3}/,Qb=/\d{4}/,Rb=/[+-]?\d{6}/,Sb=/[+-]?\d+/,Tb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ub="YYYY-MM-DDTHH:mm:ssZ",Vb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Wb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Xb=/([\+\-]|\d\d)/gi,Yb=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),Zb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},$b={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},_b={},ac="DDD w W M D d".split(" "),bc="M D H h m s w W".split(" "),cc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+l(Math.abs(a),6)},gg:function(){return l(this.weekYear()%100,2)},gggg:function(){return l(this.weekYear(),4)},ggggg:function(){return l(this.weekYear(),5)},GG:function(){return l(this.isoWeekYear()%100,2)},GGGG:function(){return l(this.isoWeekYear(),4)},GGGGG:function(){return l(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return t(this.milliseconds()/100)},SS:function(){return l(t(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},SSSS:function(){return l(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+":"+l(t(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+l(t(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},dc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ac.length;)kb=ac.pop(),cc[kb+"o"]=e(cc[kb],kb);for(;bc.length;)kb=bc.pop(),cc[kb+kb]=d(cc[kb],2);for(cc.DDDD=d(cc.DDD,3),i(f.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=ib.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=ib([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return $(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),ib=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),ab(g)},ib.suppressDeprecationWarnings=!1,ib.createFromInputFallback=c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),ib.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),ab(g).utc()},ib.unix=function(a){return ib(1e3*a)},ib.duration=function(a,b){var c,d,e,f=a,g=null;return ib.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=zb.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[qb])*c,h:t(g[rb])*c,m:t(g[sb])*c,s:t(g[tb])*c,ms:t(g[ub])*c}):(g=Ab.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new h(f),ib.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},ib.version=lb,ib.defaultFormat=Ub,ib.momentProperties=wb,ib.updateOffset=function(){},ib.lang=function(a,b){var c;return a?(b?C(A(a),b):null===b?(D(a),a="en"):vb[a]||E(a),c=ib.duration.fn._lang=ib.fn._lang=E(a),c._abbr):ib.fn._lang._abbr},ib.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),E(a)},ib.isMoment=function(a){return a instanceof g||null!=a&&a.hasOwnProperty("_isAMomentObject")},ib.isDuration=function(a){return a instanceof h},kb=dc.length-1;kb>=0;--kb)s(dc[kb]);ib.normalizeUnits=function(a){return q(a)},ib.invalid=function(a){var b=ib.utc(0/0);return null!=a?i(b._pf,a):b._pf.userInvalidated=!0,b},ib.parseZone=function(){return ib.apply(null,arguments).parseZone()},ib.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)},i(ib.fn=g.prototype,{clone:function(){return ib(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=ib(this).utc();return 0<a.year()&&a.year()<=9999?H(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return z(this)},isDSTShifted:function(){return this._a?this.isValid()&&p(this._a,(this._isUTC?ib.utc(this._a):ib(this._a)).toArray())>0:!1},parsingFlags:function(){return i({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=H(this,a||ib.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,-1),this},diff:function(a,b,c){var d,e,f=B(a,this),g=6e4*(this.zone()-f.zone());return b=q(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-ib(this).startOf("month")-(f-ib(f).startOf("month")))/d,e-=6e4*(this.zone()-ib(this).startOf("month").zone()-(f.zone()-ib(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:k(e)},from:function(a,b){return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(ib(),a)},calendar:function(){var a=B(ib(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return x(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=X(a,this.lang()),this.add({d:a-b})):b},month:eb("Month",!0),startOf:function(a){switch(a=q(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=q(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+ib(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+ib(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+B(a,this).startOf(b)},min:function(a){return a=ib.apply(null,arguments),this>a?this:a},max:function(a){return a=ib.apply(null,arguments),a>this?this:a},zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=K(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?m(this,ib.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ib.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?ib(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return u(this.year(),this.month())},dayOfYear:function(a){var b=nb((ib(this).startOf("day")-ib(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=$(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=$(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=$(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return v(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return v(this.year(),a.dow,a.doy)},get:function(a){return a=q(a),this[a]()},set:function(a,b){return a=q(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=E(b),this)}}),ib.fn.millisecond=ib.fn.milliseconds=eb("Milliseconds",!1),ib.fn.second=ib.fn.seconds=eb("Seconds",!1),ib.fn.minute=ib.fn.minutes=eb("Minutes",!1),ib.fn.hour=ib.fn.hours=eb("Hours",!0),ib.fn.date=eb("Date",!0),ib.fn.dates=c("dates accessor is deprecated. Use date instead.",eb("Date",!0)),ib.fn.year=eb("FullYear",!0),ib.fn.years=c("years accessor is deprecated. Use year instead.",eb("FullYear",!0)),ib.fn.days=ib.fn.day,ib.fn.months=ib.fn.month,ib.fn.weeks=ib.fn.week,ib.fn.isoWeeks=ib.fn.isoWeek,ib.fn.quarters=ib.fn.quarter,ib.fn.toJSON=ib.fn.toISOString,i(ib.duration.fn=h.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=k(e/1e3),h.seconds=a%60,b=k(a/60),h.minutes=b%60,c=k(b/60),h.hours=c%24,f+=k(c/24),h.days=f%30,g+=k(f/30),h.months=g%12,d=k(g/12),h.years=d},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)},humanize:function(a){var b=+this,c=Z(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=ib.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=ib.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=q(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=q(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:ib.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(kb in Yb)Yb.hasOwnProperty(kb)&&(gb(kb,Yb[kb]),fb(kb.toLowerCase()));gb("Weeks",6048e5),ib.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},ib.lang("en",{ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),xb?module.exports=ib:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(mb.moment=jb),ib}),hb(!0)):hb()}).call(this);
!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:""}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){o&&(b.clearTimeout(o),o=null)}function k(a){h.text(a.fromNow(p));var d=c().diff(a,"minute"),e=3600;1>d?e=1:60>d?e=30:180>d&&(e=300),o=b.setTimeout(function(){k(a)},1e3*e)}function l(){j(),m&&k(d.preprocessDate(m,q,n))}var m,n,o=null,p=e.withoutSuffix,q=f.preprocess;g.$watch(i.amTimeAgo,function(a){return"undefined"==typeof a||null===a||""===a?(j(),void(m&&(h.text(""),m=null))):(m=a,void l())}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(p=a,l()):p=e.withoutSuffix}),i.$observe("amFormat",function(a){n=a,l()}),i.$observe("amPreprocess",function(a){q=a,l()}),g.$on("$destroy",function(){j()}),g.$on("amMoment:languageChange",function(){l()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){this.preprocessors={utc:b.utc,unix:b.unix},this.changeLanguage=function(d){var e=b.lang(d);return a.isDefined(d)&&c.$broadcast("amMoment:languageChange"),e},this.preprocessDate=function(a,c,e){return this.preprocessors[c]?this.preprocessors[c](a,e):(c&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+c),!isNaN(parseFloat(a))&&isFinite(a)?b(parseInt(a,10)):b(a,e))},this.applyTimezone=function(a){var b=e.timezone;return a&&b&&(a.tz?a=a.tz(b):d.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")),a}}]).filter("amCalendar",["moment","amMoment",function(a,b){return function(c,d){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var e=a(c);return e.isValid()?b.applyTimezone(e).calendar():""}}]).filter("amDateFormat",["moment","amMoment",function(a,b){return function(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,e);var f=a(c);return f.isValid()?b.applyTimezone(f).format(d):""}}]).filter("amDurationFormat",["moment",function(a){return function(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}}])}"function"==typeof define&&define.amd?define("angular-moment",["angular","moment"],a):a(angular,window.moment)}();
/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.5
*/
!function(a){"use strict";function b(a){return a.replace(/,/g,".").replace(/[^0-9\.]/g,"")}function c(a){return parseFloat(b(a))>=10}var d,e={bridge:null,version:"0.0.0",disabled:null,outdated:null,ready:null},f={},g=0,h={},i=0,j={},k=null,l=null,m=function(){var a,b,c,d,e="ZeroClipboard.swf";if(document.currentScript&&(d=document.currentScript.src));else{var f=document.getElementsByTagName("script");if("readyState"in f[0])for(a=f.length;a--&&("interactive"!==f[a].readyState||!(d=f[a].src)););else if("loading"===document.readyState)d=f[f.length-1].src;else{for(a=f.length;a--;){if(c=f[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],e=d.slice(0,d.lastIndexOf("/")+1)+e),e}(),n=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),o=function(b,c){var d,e,f;return a.getComputedStyle?d=a.getComputedStyle(b,null).getPropertyValue(c):(e=n(c),d=b.currentStyle?b.currentStyle[e]:b.style[e]),"cursor"!==c||d&&"auto"!==d||(f=b.tagName.toLowerCase(),"a"!==f)?d:"pointer"},p=function(b){b||(b=a.event);var c;this!==a?c=this:b.target?c=b.target:b.srcElement&&(c=b.srcElement),K.activate(c)},q=function(a,b,c){a&&1===a.nodeType&&(a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c))},r=function(a,b,c){a&&1===a.nodeType&&(a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c))},s=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},t=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},u=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(b/c*100)/100),d},v=function(b,c){var d={left:0,top:0,width:0,height:0,zIndex:B(c)-1};if(b.getBoundingClientRect){var e,f,g,h=b.getBoundingClientRect();"pageXOffset"in a&&"pageYOffset"in a?(e=a.pageXOffset,f=a.pageYOffset):(g=u(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var i=document.documentElement.clientLeft||0,j=document.documentElement.clientTop||0;d.left=h.left+e-i,d.top=h.top+f-j,d.width="width"in h?h.width:h.right-h.left,d.height="height"in h?h.height:h.bottom-h.top}return d},w=function(a,b){var c=null==b||b&&b.cacheBust===!0&&b.useNoCache===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""},x=function(b){var c,d,e,f=[],g=[],h=[];if(b.trustedOrigins&&("string"==typeof b.trustedOrigins?g.push(b.trustedOrigins):"object"==typeof b.trustedOrigins&&"length"in b.trustedOrigins&&(g=g.concat(b.trustedOrigins))),b.trustedDomains&&("string"==typeof b.trustedDomains?g.push(b.trustedDomains):"object"==typeof b.trustedDomains&&"length"in b.trustedDomains&&(g=g.concat(b.trustedDomains))),g.length)for(c=0,d=g.length;d>c;c++)if(g.hasOwnProperty(c)&&g[c]&&"string"==typeof g[c]){if(e=E(g[c]),!e)continue;if("*"===e){h=[e];break}h.push.apply(h,[e,"//"+e,a.location.protocol+"//"+e])}return h.length&&f.push("trustedOrigins="+encodeURIComponent(h.join(","))),"string"==typeof b.jsModuleId&&b.jsModuleId&&f.push("jsModuleId="+encodeURIComponent(b.jsModuleId)),f.join("&")},y=function(a,b,c){if("function"==typeof b.indexOf)return b.indexOf(a,c);var d,e=b.length;for("undefined"==typeof c?c=0:0>c&&(c=e+c),d=c;e>d;d++)if(b.hasOwnProperty(d)&&b[d]===a)return d;return-1},z=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},A=function(b,c,d,e){e?a.setTimeout(function(){b.apply(c,d)},0):b.apply(c,d)},B=function(a){var b,c;return a&&("number"==typeof a&&a>0?b=a:"string"==typeof a&&(c=parseInt(a,10))&&!isNaN(c)&&c>0&&(b=c)),b||("number"==typeof N.zIndex&&N.zIndex>0?b=N.zIndex:"string"==typeof N.zIndex&&(c=parseInt(N.zIndex,10))&&!isNaN(c)&&c>0&&(b=c)),b||0},C=function(a,b){if(a&&b!==!1&&"undefined"!=typeof console&&console&&(console.warn||console.log)){var c="`"+a+"` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";console.warn?console.warn(c):console.log(c)}},D=function(){var a,b,c,d,e,f,g=arguments[0]||{};for(a=1,b=arguments.length;b>a;a++)if(null!=(c=arguments[a]))for(d in c)if(c.hasOwnProperty(d)){if(e=g[d],f=c[d],g===f)continue;void 0!==f&&(g[d]=f)}return g},E=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},F=function(){var a=function(a,b){var c,d,e;if(null!=a&&"*"!==b[0]&&("string"==typeof a&&(a=[a]),"object"==typeof a&&"length"in a))for(c=0,d=a.length;d>c;c++)if(a.hasOwnProperty(c)&&(e=E(a[c]))){if("*"===e){b.length=0,b.push("*");break}-1===y(e,b)&&b.push(e)}},b={always:"always",samedomain:"sameDomain",never:"never"};return function(c,d){var e,f=d.allowScriptAccess;if("string"==typeof f&&(e=f.toLowerCase())&&/^always|samedomain|never$/.test(e))return b[e];var g=E(d.moviePath);null===g&&(g=c);var h=[];a(d.trustedOrigins,h),a(d.trustedDomains,h);var i=h.length;if(i>0){if(1===i&&"*"===h[0])return"always";if(-1!==y(c,h))return 1===i&&c===g?"sameDomain":"always"}return"never"}}(),G=function(a){if(null==a)return[];if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},H=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&delete a[b];return a},I=function(){try{return document.activeElement}catch(a){}return null},J=function(){var a=!1;if("boolean"==typeof e.disabled)a=e.disabled===!1;else{if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a},K=function(a,b){return this instanceof K?(this.id=""+g++,h[this.id]={instance:this,elements:[],handlers:{}},a&&this.clip(a),"undefined"!=typeof b&&(C("new ZeroClipboard(elements, options)",N.debug),K.config(b)),this.options=K.config(),"boolean"!=typeof e.disabled&&(e.disabled=!J()),e.disabled===!1&&e.outdated!==!0&&null===e.bridge&&(e.outdated=!1,e.ready=!1,O()),void 0):new K(a,b)};K.prototype.setText=function(a){return a&&""!==a&&(f["text/plain"]=a,e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setText?e.bridge.setText(a):e.ready=!1),this},K.prototype.setSize=function(a,b){return e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a,b):e.ready=!1,this};var L=function(a){e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setHandCursor?e.bridge.setHandCursor(a):e.ready=!1};K.prototype.destroy=function(){this.unclip(),this.off(),delete h[this.id]};var M=function(){var a,b,c,d=[],e=G(h);for(a=0,b=e.length;b>a;a++)c=h[e[a]].instance,c&&c instanceof K&&d.push(c);return d};K.version="1.3.5";var N={swfPath:m,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceHandCursor:!1,zIndex:999999999,debug:!0,title:null,autoActivate:!0};K.config=function(a){"object"==typeof a&&null!==a&&D(N,a);{if("string"!=typeof a||!a){var b={};for(var c in N)N.hasOwnProperty(c)&&(b[c]="object"==typeof N[c]&&null!==N[c]?"length"in N[c]?N[c].slice(0):D({},N[c]):N[c]);return b}if(N.hasOwnProperty(a))return N[a]}},K.destroy=function(){K.deactivate();for(var a in h)if(h.hasOwnProperty(a)&&h[a]){var b=h[a].instance;b&&"function"==typeof b.destroy&&b.destroy()}var c=P(e.bridge);c&&c.parentNode&&(c.parentNode.removeChild(c),e.ready=null,e.bridge=null)},K.activate=function(a){d&&(t(d,N.hoverClass),t(d,N.activeClass)),d=a,s(a,N.hoverClass),Q();var b=N.title||a.getAttribute("title");if(b){var c=P(e.bridge);c&&c.setAttribute("title",b)}var f=N.forceHandCursor===!0||"pointer"===o(a,"cursor");L(f)},K.deactivate=function(){var a=P(e.bridge);a&&(a.style.left="0px",a.style.top="-9999px",a.removeAttribute("title")),d&&(t(d,N.hoverClass),t(d,N.activeClass),d=null)};var O=function(){var b,c,d=document.getElementById("global-zeroclipboard-html-bridge");if(!d){var f=K.config();f.jsModuleId="string"==typeof k&&k||"string"==typeof l&&l||null;var g=F(a.location.host,N),h=x(f),i=N.moviePath+w(N.moviePath,N),j='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+i+'"/>         <param name="allowScriptAccess" value="'+g+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+h+'"/>         <embed src="'+i+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="'+g+'"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+h+'"           scale="exactfit">         </embed>       </object>';d=document.createElement("div"),d.id="global-zeroclipboard-html-bridge",d.setAttribute("class","global-zeroclipboard-container"),d.style.position="absolute",d.style.left="0px",d.style.top="-9999px",d.style.width="15px",d.style.height="15px",d.style.zIndex=""+B(N.zIndex),document.body.appendChild(d),d.innerHTML=j}b=document["global-zeroclipboard-flash-bridge"],b&&(c=b.length)&&(b=b[c-1]),e.bridge=b||d.children[0].lastElementChild},P=function(a){for(var b=/^OBJECT|EMBED$/,c=a&&a.parentNode;c&&b.test(c.nodeName)&&c.parentNode;)c=c.parentNode;return c||null},Q=function(){if(d){var a=v(d,N.zIndex),b=P(e.bridge);b&&(b.style.top=a.top+"px",b.style.left=a.left+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.style.zIndex=a.zIndex+1),e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a.width,a.height):e.ready=!1}return this};K.prototype.on=function(a,b){var c,d,f,g={},i=h[this.id]&&h[this.id].handlers;if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(f&&f.length){for(c=0,d=f.length;d>c;c++)a=f[c].replace(/^on/,""),g[a]=!0,i[a]||(i[a]=[]),i[a].push(b);g.noflash&&e.disabled&&T.call(this,"noflash",{}),g.wrongflash&&e.outdated&&T.call(this,"wrongflash",{flashVersion:e.version}),g.load&&e.ready&&T.call(this,"load",{flashVersion:e.version})}return this},K.prototype.off=function(a,b){var c,d,e,f,g,i=h[this.id]&&h[this.id].handlers;if(0===arguments.length)f=G(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=i[a],g&&g.length)if(b)for(e=y(b,g);-1!==e;)g.splice(e,1),e=y(b,g,e);else i[a].length=0;return this},K.prototype.handlers=function(a){var b,c=null,d=h[this.id]&&h[this.id].handlers;if(d){if("string"==typeof a&&a)return d[a]?d[a].slice(0):null;c={};for(b in d)d.hasOwnProperty(b)&&d[b]&&(c[b]=d[b].slice(0))}return c};var R=function(b,c,d,e){var f=h[this.id]&&h[this.id].handlers[b];if(f&&f.length){var g,i,j,k=c||this;for(g=0,i=f.length;i>g;g++)j=f[g],c=k,"string"==typeof j&&"function"==typeof a[j]&&(j=a[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(c=j,j=j.handleEvent),"function"==typeof j&&A(j,c,d,e)}return this};K.prototype.clip=function(a){a=z(a);for(var b=0;b<a.length;b++)if(a.hasOwnProperty(b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===y(this.id,j[a[b].zcClippingId])&&j[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+i++,j[a[b].zcClippingId]=[this.id],N.autoActivate===!0&&q(a[b],"mouseover",p));var c=h[this.id].elements;-1===y(a[b],c)&&c.push(a[b])}return this},K.prototype.unclip=function(a){var b=h[this.id];if(b){var c,d=b.elements;a="undefined"==typeof a?d.slice(0):z(a);for(var e=a.length;e--;)if(a.hasOwnProperty(e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=y(a[e],d,c));)d.splice(c,1);var f=j[a[e].zcClippingId];if(f){for(c=0;-1!==(c=y(this.id,f,c));)f.splice(c,1);0===f.length&&(N.autoActivate===!0&&r(a[e],"mouseover",p),delete a[e].zcClippingId)}}}return this},K.prototype.elements=function(){var a=h[this.id];return a&&a.elements?a.elements.slice(0):[]};var S=function(a){var b,c,d,e,f,g=[];if(a&&1===a.nodeType&&(b=a.zcClippingId)&&j.hasOwnProperty(b)&&(c=j[b],c&&c.length))for(d=0,e=c.length;e>d;d++)f=h[c[d]].instance,f&&f instanceof K&&g.push(f);return g};N.hoverClass="zeroclipboard-is-hover",N.activeClass="zeroclipboard-is-active",N.trustedOrigins=null,N.allowScriptAccess=null,N.useNoCache=!0,N.moviePath="ZeroClipboard.swf",K.detectFlashSupport=function(){return C("ZeroClipboard.detectFlashSupport",N.debug),J()},K.dispatch=function(a,b){if("string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");if(c)for(var e=d&&N.autoActivate===!0?S(d):M(),f=0,g=e.length;g>f;f++)T.call(e[f],c,b)}},K.prototype.setHandCursor=function(a){return C("ZeroClipboard.prototype.setHandCursor",N.debug),a="boolean"==typeof a?a:!!a,L(a),N.forceHandCursor=a,this},K.prototype.reposition=function(){return C("ZeroClipboard.prototype.reposition",N.debug),Q()},K.prototype.receiveEvent=function(a,b){if(C("ZeroClipboard.prototype.receiveEvent",N.debug),"string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");c&&T.call(this,c,b)}},K.prototype.setCurrent=function(a){return C("ZeroClipboard.prototype.setCurrent",N.debug),K.activate(a),this},K.prototype.resetBridge=function(){return C("ZeroClipboard.prototype.resetBridge",N.debug),K.deactivate(),this},K.prototype.setTitle=function(a){if(C("ZeroClipboard.prototype.setTitle",N.debug),a=a||N.title||d&&d.getAttribute("title")){var b=P(e.bridge);b&&b.setAttribute("title",a)}return this},K.setDefaults=function(a){C("ZeroClipboard.setDefaults",N.debug),K.config(a)},K.prototype.addEventListener=function(a,b){return C("ZeroClipboard.prototype.addEventListener",N.debug),this.on(a,b)},K.prototype.removeEventListener=function(a,b){return C("ZeroClipboard.prototype.removeEventListener",N.debug),this.off(a,b)},K.prototype.ready=function(){return C("ZeroClipboard.prototype.ready",N.debug),e.ready===!0};var T=function(a,g){a=a.toLowerCase().replace(/^on/,"");var h=g&&g.flashVersion&&b(g.flashVersion)||null,i=d,j=!0;switch(a){case"load":if(h){if(!c(h))return T.call(this,"onWrongFlash",{flashVersion:h}),void 0;e.outdated=!1,e.ready=!0,e.version=h}break;case"wrongflash":h&&!c(h)&&(e.outdated=!0,e.ready=!1,e.version=h);break;case"mouseover":s(i,N.hoverClass);break;case"mouseout":N.autoActivate===!0&&K.deactivate();break;case"mousedown":s(i,N.activeClass);break;case"mouseup":t(i,N.activeClass);break;case"datarequested":if(i){var k=i.getAttribute("data-clipboard-target"),l=k?document.getElementById(k):null;if(l){var m=l.value||l.textContent||l.innerText;m&&this.setText(m)}else{var n=i.getAttribute("data-clipboard-text");n&&this.setText(n)}}j=!1;break;case"complete":H(f),i&&i!==I()&&i.focus&&i.focus()}var o=i,p=[this,g];return R.call(this,a,o,p,j)};"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return k=c&&c.id||null,K}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports&&"function"==typeof a.require?(l=module.id||null,module.exports=K):a.ZeroClipboard=K}(function(){return this}());