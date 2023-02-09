System.register([], function (t, e) {
  return {
    execute: function () {
      t(
        (() => {
          var t = {
              362: (t, e, n) => {
                "use strict";
                var o = n(645);
                n.n(o)()(function (t) {
                  return t[1];
                }).push([
                  t.id,
                  "main.svelte-1e9puaw{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1.svelte-1e9puaw{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}@media(min-width: 640px){main.svelte-1e9puaw{max-width:none}}",
                  "",
                ]);
              },
              645: (t) => {
                "use strict";
                t.exports = function (t) {
                  var e = [];
                  return (
                    (e.toString = function () {
                      return this.map(function (e) {
                        var n = t(e);
                        return e[2]
                          ? "@media ".concat(e[2], " {").concat(n, "}")
                          : n;
                      }).join("");
                    }),
                    (e.i = function (t, n, o) {
                      "string" == typeof t && (t = [[null, t, ""]]);
                      var r = {};
                      if (o)
                        for (var i = 0; i < this.length; i++) {
                          var a = this[i][0];
                          null != a && (r[a] = !0);
                        }
                      for (var c = 0; c < t.length; c++) {
                        var s = [].concat(t[c]);
                        (o && r[s[0]]) ||
                          (n &&
                            (s[2]
                              ? (s[2] = "".concat(n, " and ").concat(s[2]))
                              : (s[2] = n)),
                          e.push(s));
                      }
                    }),
                    e
                  );
                };
              },
              414: (t, e, n) => {
                (0, n(722).s)(3);
              },
              722: (t, e, n) => {
                const o = n(905).R;
                e.s = function (t) {
                  if ((t || (t = 1), !n.y.meta || !n.y.meta.url))
                    throw (
                      (console.error("__system_context__", n.y),
                      Error(
                        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                      ))
                    );
                  n.p = o(n.y.meta.url, t);
                };
              },
              905: (t, e, n) => {
                e.R = function (t, e) {
                  var n = document.createElement("a");
                  n.href = t;
                  for (
                    var o =
                        "/" === n.pathname[0] ? n.pathname : "/" + n.pathname,
                      r = 0,
                      i = o.length;
                    r !== e && i >= 0;

                  )
                    "/" === o[--i] && r++;
                  if (r !== e)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        e +
                        ") is greater than the number of directories (" +
                        r +
                        ") in the URL path " +
                        t
                    );
                  var a = o.slice(0, i + 1);
                  return n.protocol + "//" + n.host + a;
                };
                Number.isInteger;
              },
            },
            n = {};
          function o(e) {
            var r = n[e];
            if (void 0 !== r) return r.exports;
            var i = (n[e] = { id: e, exports: {} });
            return t[e](i, i.exports, o), i.exports;
          }
          (o.y = e),
            (o.n = (t) => {
              var e = t && t.__esModule ? () => t.default : () => t;
              return o.d(e, { a: e }), e;
            }),
            (o.d = (t, e) => {
              for (var n in e)
                o.o(e, n) &&
                  !o.o(t, n) &&
                  Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
            }),
            (o.g = (function () {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (t) {
                if ("object" == typeof window) return window;
              }
            })()),
            (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (o.r = (t) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (() => {
              var t;
              o.g.importScripts && (t = o.g.location + "");
              var e = o.g.document;
              if (
                !t &&
                e &&
                (e.currentScript && (t = e.currentScript.src), !t)
              ) {
                var n = e.getElementsByTagName("script");
                n.length && (t = n[n.length - 1].src);
              }
              if (!t)
                throw new Error(
                  "Automatic publicPath is not supported in this browser"
                );
              (t = t
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (o.p = t);
            })();
          var r = {};
          return (
            (() => {
              "use strict";
              function t() {}
              function e(t) {
                return t();
              }
              function n() {
                return Object.create(null);
              }
              function i(t) {
                t.forEach(e);
              }
              function a(t) {
                return "function" == typeof t;
              }
              function c(t, e) {
                return t != t
                  ? e == e
                  : t !== e ||
                      (t && "object" == typeof t) ||
                      "function" == typeof t;
              }
              function s(t) {
                return 0 === Object.keys(t).length;
              }
              o.r(r), o.d(r, { default: () => L }), o(414), new Set();
              let u,
                l = !1;
              function d(t, e) {
                t.appendChild(e);
              }
              function f(t) {
                t.parentNode && t.parentNode.removeChild(t);
              }
              function p(t) {
                return document.createElement(t);
              }
              function h(t) {
                return document.createTextNode(t);
              }
              function m(t, e, n) {
                null == n
                  ? t.removeAttribute(e)
                  : t.getAttribute(e) !== n && t.setAttribute(e, n);
              }
              function $(t) {
                u = t;
              }
              new Map();
              const g = [],
                y = [],
                b = [],
                w = [],
                v = Promise.resolve();
              let _ = !1;
              function x(t) {
                b.push(t);
              }
              const k = new Set();
              let S = 0;
              function E() {
                if (0 !== S) return;
                const t = u;
                do {
                  try {
                    for (; S < g.length; ) {
                      const t = g[S];
                      S++, $(t), j(t.$$);
                    }
                  } catch (t) {
                    throw ((g.length = 0), (S = 0), t);
                  }
                  for ($(null), g.length = 0, S = 0; y.length; ) y.pop()();
                  for (let t = 0; t < b.length; t += 1) {
                    const e = b[t];
                    k.has(e) || (k.add(e), e());
                  }
                  b.length = 0;
                } while (g.length);
                for (; w.length; ) w.pop()();
                (_ = !1), k.clear(), $(t);
              }
              function j(t) {
                if (null !== t.fragment) {
                  t.update(), i(t.before_update);
                  const e = t.dirty;
                  (t.dirty = [-1]),
                    t.fragment && t.fragment.p(t.ctx, e),
                    t.after_update.forEach(x);
                }
              }
              const T = new Set();
              let O;
              function C(t, e) {
                const n = t.$$;
                null !== n.fragment &&
                  (i(n.on_destroy),
                  n.fragment && n.fragment.d(e),
                  (n.on_destroy = n.fragment = null),
                  (n.ctx = []));
              }
              function M(o, r, c, s, d, p, h, m = [-1]) {
                const y = u;
                $(o);
                const b = (o.$$ = {
                  fragment: null,
                  ctx: [],
                  props: p,
                  update: t,
                  not_equal: d,
                  bound: n(),
                  on_mount: [],
                  on_destroy: [],
                  on_disconnect: [],
                  before_update: [],
                  after_update: [],
                  context: new Map(r.context || (y ? y.$$.context : [])),
                  callbacks: n(),
                  dirty: m,
                  skip_bound: !1,
                  root: r.target || y.$$.root,
                });
                h && h(b.root);
                let w = !1;
                if (
                  ((b.ctx = c
                    ? c(o, r.props || {}, (t, e, ...n) => {
                        const r = n.length ? n[0] : e;
                        return (
                          b.ctx &&
                            d(b.ctx[t], (b.ctx[t] = r)) &&
                            (!b.skip_bound && b.bound[t] && b.bound[t](r),
                            w &&
                              (function (t, e) {
                                -1 === t.$$.dirty[0] &&
                                  (g.push(t),
                                  _ || ((_ = !0), v.then(E)),
                                  t.$$.dirty.fill(0)),
                                  (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                              })(o, t)),
                          e
                        );
                      })
                    : []),
                  b.update(),
                  (w = !0),
                  i(b.before_update),
                  (b.fragment = !!s && s(b.ctx)),
                  r.target)
                ) {
                  if (r.hydrate) {
                    l = !0;
                    const t = ((j = r.target), Array.from(j.childNodes));
                    b.fragment && b.fragment.l(t), t.forEach(f);
                  } else b.fragment && b.fragment.c();
                  r.intro &&
                    (k = o.$$.fragment) &&
                    k.i &&
                    (T.delete(k), k.i(S)),
                    (function (t, n, o, r) {
                      const { fragment: c, after_update: s } = t.$$;
                      c && c.m(n, o),
                        r ||
                          x(() => {
                            const n = t.$$.on_mount.map(e).filter(a);
                            t.$$.on_destroy ? t.$$.on_destroy.push(...n) : i(n),
                              (t.$$.on_mount = []);
                          }),
                        s.forEach(x);
                    })(o, r.target, r.anchor, r.customElement),
                    (l = !1),
                    E();
                }
                var k, S, j;
                $(y);
              }
              "undefined" != typeof window
                ? window
                : "undefined" != typeof globalThis
                ? globalThis
                : global,
                new Set([
                  "allowfullscreen",
                  "allowpaymentrequest",
                  "async",
                  "autofocus",
                  "autoplay",
                  "checked",
                  "controls",
                  "default",
                  "defer",
                  "disabled",
                  "formnovalidate",
                  "hidden",
                  "inert",
                  "ismap",
                  "itemscope",
                  "loop",
                  "multiple",
                  "muted",
                  "nomodule",
                  "novalidate",
                  "open",
                  "playsinline",
                  "readonly",
                  "required",
                  "reversed",
                  "selected",
                ]),
                "function" == typeof HTMLElement &&
                  (O = class extends HTMLElement {
                    constructor() {
                      super(), this.attachShadow({ mode: "open" });
                    }
                    connectedCallback() {
                      const { on_mount: t } = this.$$;
                      this.$$.on_disconnect = t.map(e).filter(a);
                      for (const t in this.$$.slotted)
                        this.appendChild(this.$$.slotted[t]);
                    }
                    attributeChangedCallback(t, e, n) {
                      this[t] = n;
                    }
                    disconnectedCallback() {
                      i(this.$$.on_disconnect);
                    }
                    $destroy() {
                      C(this, 1), (this.$destroy = t);
                    }
                    $on(e, n) {
                      if (!a(n)) return t;
                      const o =
                        this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                      return (
                        o.push(n),
                        () => {
                          const t = o.indexOf(n);
                          -1 !== t && o.splice(t, 1);
                        }
                      );
                    }
                    $set(t) {
                      this.$$set &&
                        !s(t) &&
                        ((this.$$.skip_bound = !0),
                        this.$$set(t),
                        (this.$$.skip_bound = !1));
                    }
                  });
              class N {
                $destroy() {
                  C(this, 1), (this.$destroy = t);
                }
                $on(e, n) {
                  if (!a(n)) return t;
                  const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                  return (
                    o.push(n),
                    () => {
                      const t = o.indexOf(n);
                      -1 !== t && o.splice(t, 1);
                    }
                  );
                }
                $set(t) {
                  this.$$set &&
                    !s(t) &&
                    ((this.$$.skip_bound = !0),
                    this.$$set(t),
                    (this.$$.skip_bound = !1));
                }
              }
              function P(e) {
                let n, o, r, i, a;
                return {
                  c() {
                    (n = p("main")),
                      (o = p("h1")),
                      (r = h("Hello ")),
                      (i = h(e[0])),
                      (a = h("!")),
                      m(o, "class", "svelte-1e9puaw"),
                      m(n, "class", "svelte-1e9puaw");
                  },
                  m(t, e) {
                    (function (t, e, n) {
                      t.insertBefore(e, n || null);
                    })(t, n, e),
                      d(n, o),
                      d(o, r),
                      d(o, i),
                      d(o, a);
                  },
                  p(t, [e]) {
                    var n, o;
                    1 & e &&
                      ((n = i),
                      (o = "" + (o = t[0])),
                      n.wholeText !== o && (n.data = o));
                  },
                  i: t,
                  o: t,
                  d(t) {
                    t && f(n);
                  },
                };
              }
              function A(t, e, n) {
                let { name: o = "World" } = e;
                return (
                  (t.$$set = (t) => {
                    "name" in t && n(0, (o = t.name));
                  }),
                  [o]
                );
              }
              o(362);
              const L = new (class extends N {
                constructor(t) {
                  super(), M(this, t, A, P, c, { name: 0 });
                }
              })({ target: document.body });
            })(),
            r
          );
        })()
      );
    },
  };
});
