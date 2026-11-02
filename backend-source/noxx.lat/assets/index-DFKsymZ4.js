(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) r(z);
  new MutationObserver((z) => {
    for (const S of z)
      if (S.type === "childList")
        for (const q of S.addedNodes)
          q.tagName === "LINK" && q.rel === "modulepreload" && r(q);
  }).observe(document, { childList: !0, subtree: !0 });
  function E(z) {
    const S = {};
    return (
      z.integrity && (S.integrity = z.integrity),
      z.referrerPolicy && (S.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === "use-credentials"
        ? (S.credentials = "include")
        : z.crossOrigin === "anonymous"
          ? (S.credentials = "omit")
          : (S.credentials = "same-origin"),
      S
    );
  }
  function r(z) {
    if (z.ep) return;
    z.ep = !0;
    const S = E(z);
    fetch(z.href, S);
  }
})();
function Hh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
var Ho = { exports: {} },
  vu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jh;
function V0() {
  if (jh) return vu;
  jh = 1;
  var f = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.fragment");
  function E(r, z, S) {
    var q = null;
    if (
      (S !== void 0 && (q = "" + S),
      z.key !== void 0 && (q = "" + z.key),
      "key" in z)
    ) {
      S = {};
      for (var G in z) G !== "key" && (S[G] = z[G]);
    } else S = z;
    return (
      (z = S.ref),
      { $$typeof: f, type: r, key: q, ref: z !== void 0 ? z : null, props: S }
    );
  }
  return ((vu.Fragment = p), (vu.jsx = E), (vu.jsxs = E), vu);
}
var Sh;
function X0() {
  return (Sh || ((Sh = 1), (Ho.exports = V0())), Ho.exports);
}
var i = X0(),
  Lo = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eh;
function Q0() {
  if (Eh) return I;
  Eh = 1;
  var f = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    S = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    F = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    x = Symbol.for("react.activity"),
    C = Symbol.for("react.view_transition"),
    $ = Symbol.iterator;
  function te(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = ($ && m[$]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var Se = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    xe = {};
  function Ae(m, O, Z) {
    ((this.props = m),
      (this.context = O),
      (this.refs = xe),
      (this.updater = Z || Se));
  }
  ((Ae.prototype.isReactComponent = {}),
    (Ae.prototype.setState = function (m, O) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, O, "setState");
    }),
    (Ae.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    }));
  function ze() {}
  ze.prototype = Ae.prototype;
  function U(m, O, Z) {
    ((this.props = m),
      (this.context = O),
      (this.refs = xe),
      (this.updater = Z || Se));
  }
  var me = (U.prototype = new ze());
  ((me.constructor = U), _(me, Ae.prototype), (me.isPureReactComponent = !0));
  var fe = Array.isArray;
  function J() {}
  var Q = { H: null, A: null, T: null, S: null },
    Oe = Object.prototype.hasOwnProperty;
  function ve(m, O, Z) {
    var X = Z.ref;
    return {
      $$typeof: f,
      type: m,
      key: O,
      ref: X !== void 0 ? X : null,
      props: Z,
    };
  }
  function Le(m, O) {
    return ve(m.type, O, m.props);
  }
  function ct(m) {
    return typeof m == "object" && m !== null && m.$$typeof === f;
  }
  function kt(m) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (Z) {
        return O[Z];
      })
    );
  }
  var Ft = /\/+/g;
  function Ye(m, O) {
    return typeof m == "object" && m !== null && m.key != null
      ? kt("" + m.key)
      : O.toString(36);
  }
  function A(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(J, J)
            : ((m.status = "pending"),
              m.then(
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = O));
                },
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = O));
                },
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function H(m, O, Z, X, ue) {
    var ye = typeof m;
    (ye === "undefined" || ye === "boolean") && (m = null);
    var pe = !1;
    if (m === null) pe = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case f:
            case p:
              pe = !0;
              break;
            case M:
              return ((pe = m._init), H(pe(m._payload), O, Z, X, ue));
          }
      }
    if (pe)
      return (
        (ue = ue(m)),
        (pe = X === "" ? "." + Ye(m, 0) : X),
        fe(ue)
          ? ((Z = ""),
            pe != null && (Z = pe.replace(Ft, "$&/") + "/"),
            H(ue, O, Z, "", function (rl) {
              return rl;
            }))
          : ue != null &&
            (ct(ue) &&
              (ue = Le(
                ue,
                Z +
                  (ue.key == null || (m && m.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Ft, "$&/") + "/") +
                  pe,
              )),
            O.push(ue)),
        1
      );
    pe = 0;
    var V = X === "" ? "." : X + ":";
    if (fe(m))
      for (var W = 0; W < m.length; W++)
        ((X = m[W]), (ye = V + Ye(X, W)), (pe += H(X, O, Z, ye, ue)));
    else if (((W = te(m)), typeof W == "function"))
      for (m = W.call(m), W = 0; !(X = m.next()).done;)
        ((X = X.value), (ye = V + Ye(X, W++)), (pe += H(X, O, Z, ye, ue)));
    else if (ye === "object") {
      if (typeof m.then == "function") return H(A(m), O, Z, X, ue);
      throw (
        (O = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return pe;
  }
  function B(m, O, Z) {
    if (m == null) return m;
    var X = [],
      ue = 0;
    return (
      H(m, X, "", "", function (ye) {
        return O.call(Z, ye, ue++);
      }),
      X
    );
  }
  function ne(m) {
    if (m._status === -1) {
      var O = m._result,
        Z = O();
      (Z.then(
        function (X) {
          (m._status === 0 || m._status === -1) &&
            ((m._status = 1),
            (m._result = X),
            Z.status === void 0 && ((Z.status = "fulfilled"), (Z.value = X)));
        },
        function (X) {
          (m._status === 0 || m._status === -1) &&
            ((m._status = 2),
            (m._result = X),
            Z.status === void 0 && ((Z.status = "rejected"), (Z.reason = X)));
        },
      ),
        m._status === -1 && ((m._status = 0), (m._result = Z)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var le =
    typeof reportError == "function"
      ? reportError
      : function (m) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof m == "object" &&
                m !== null &&
                typeof m.message == "string"
                  ? String(m.message)
                  : String(m),
              error: m,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", m);
            return;
          }
          console.error(m);
        };
  function We(m) {
    var O = Q.T,
      Z = {};
    ((Z.types = O !== null ? O.types : null), (Q.T = Z));
    try {
      var X = m(),
        ue = Q.S;
      (ue !== null && ue(Z, X),
        typeof X == "object" &&
          X !== null &&
          typeof X.then == "function" &&
          X.then(J, le));
    } catch (ye) {
      le(ye);
    } finally {
      (O !== null && Z.types !== null && (O.types = Z.types), (Q.T = O));
    }
  }
  function st(m) {
    var O = Q.T;
    if (O !== null) {
      var Z = O.types;
      Z === null ? (O.types = [m]) : Z.indexOf(m) === -1 && Z.push(m);
    } else We(st.bind(null, m));
  }
  var ut = {
    map: B,
    forEach: function (m, O, Z) {
      B(
        m,
        function () {
          O.apply(this, arguments);
        },
        Z,
      );
    },
    count: function (m) {
      var O = 0;
      return (
        B(m, function () {
          O++;
        }),
        O
      );
    },
    toArray: function (m) {
      return (
        B(m, function (O) {
          return O;
        }) || []
      );
    },
    only: function (m) {
      if (!ct(m))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return m;
    },
  };
  return (
    (I.Activity = x),
    (I.Children = ut),
    (I.Component = Ae),
    (I.Fragment = E),
    (I.Profiler = z),
    (I.PureComponent = U),
    (I.StrictMode = r),
    (I.Suspense = D),
    (I.ViewTransition = C),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return Q.H.useMemoCache(m);
      },
    }),
    (I.addTransitionType = st),
    (I.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (m, O, Z) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + ".",
        );
      var X = _({}, m.props),
        ue = m.key;
      if (O != null)
        for (ye in (O.key !== void 0 && (ue = "" + O.key), O))
          !Oe.call(O, ye) ||
            ye === "key" ||
            ye === "__self" ||
            ye === "__source" ||
            (ye === "ref" && O.ref === void 0) ||
            (X[ye] = O[ye]);
      var ye = arguments.length - 2;
      if (ye === 1) X.children = Z;
      else if (1 < ye) {
        for (var pe = Array(ye), V = 0; V < ye; V++) pe[V] = arguments[V + 2];
        X.children = pe;
      }
      return ve(m.type, ue, X);
    }),
    (I.createContext = function (m) {
      return (
        (m = {
          $$typeof: q,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: S, _context: m }),
        m
      );
    }),
    (I.createElement = function (m, O, Z) {
      var X,
        ue = {},
        ye = null;
      if (O != null)
        for (X in (O.key !== void 0 && (ye = "" + O.key), O))
          Oe.call(O, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (ue[X] = O[X]);
      var pe = arguments.length - 2;
      if (pe === 1) ue.children = Z;
      else if (1 < pe) {
        for (var V = Array(pe), W = 0; W < pe; W++) V[W] = arguments[W + 2];
        ue.children = V;
      }
      if (m && m.defaultProps)
        for (X in ((pe = m.defaultProps), pe))
          ue[X] === void 0 && (ue[X] = pe[X]);
      return ve(m, ye, ue);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (m) {
      return { $$typeof: G, render: m };
    }),
    (I.isValidElement = ct),
    (I.lazy = function (m) {
      return { $$typeof: M, _payload: { _status: -1, _result: m }, _init: ne };
    }),
    (I.memo = function (m, O) {
      return { $$typeof: F, type: m, compare: O === void 0 ? null : O };
    }),
    (I.startTransition = We),
    (I.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (I.use = function (m) {
      return Q.H.use(m);
    }),
    (I.useActionState = function (m, O, Z) {
      return Q.H.useActionState(m, O, Z);
    }),
    (I.useCallback = function (m, O) {
      return Q.H.useCallback(m, O);
    }),
    (I.useContext = function (m) {
      return Q.H.useContext(m);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (m, O) {
      return Q.H.useDeferredValue(m, O);
    }),
    (I.useEffect = function (m, O) {
      return Q.H.useEffect(m, O);
    }),
    (I.useEffectEvent = function (m) {
      return Q.H.useEffectEvent(m);
    }),
    (I.useId = function () {
      return Q.H.useId();
    }),
    (I.useImperativeHandle = function (m, O, Z) {
      return Q.H.useImperativeHandle(m, O, Z);
    }),
    (I.useInsertionEffect = function (m, O) {
      return Q.H.useInsertionEffect(m, O);
    }),
    (I.useLayoutEffect = function (m, O) {
      return Q.H.useLayoutEffect(m, O);
    }),
    (I.useMemo = function (m, O) {
      return Q.H.useMemo(m, O);
    }),
    (I.useOptimistic = function (m, O) {
      return Q.H.useOptimistic(m, O);
    }),
    (I.useReducer = function (m, O, Z) {
      return Q.H.useReducer(m, O, Z);
    }),
    (I.useRef = function (m) {
      return Q.H.useRef(m);
    }),
    (I.useState = function (m) {
      return Q.H.useState(m);
    }),
    (I.useSyncExternalStore = function (m, O, Z) {
      return Q.H.useSyncExternalStore(m, O, Z);
    }),
    (I.useTransition = function () {
      return Q.H.useTransition();
    }),
    (I.version = "19.3.1"),
    I
  );
}
var Th;
function Jo() {
  return (Th || ((Th = 1), (Lo.exports = Q0())), Lo.exports);
}
var w = Jo();
const Z0 = Hh(w);
var qo = { exports: {} },
  yu = {},
  Bo = { exports: {} },
  wo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nh;
function K0() {
  return (
    Nh ||
      ((Nh = 1),
      (function (f) {
        function p(A, H) {
          var B = A.length;
          A.push(H);
          e: for (; 0 < B;) {
            var ne = (B - 1) >>> 1,
              le = A[ne];
            if (0 < z(le, H)) ((A[ne] = H), (A[B] = le), (B = ne));
            else break e;
          }
        }
        function E(A) {
          return A.length === 0 ? null : A[0];
        }
        function r(A) {
          if (A.length === 0) return null;
          var H = A[0],
            B = A.pop();
          if (B !== H) {
            A[0] = B;
            e: for (var ne = 0, le = A.length, We = le >>> 1; ne < We;) {
              var st = 2 * (ne + 1) - 1,
                ut = A[st],
                m = st + 1,
                O = A[m];
              if (0 > z(ut, B))
                m < le && 0 > z(O, ut)
                  ? ((A[ne] = O), (A[m] = B), (ne = m))
                  : ((A[ne] = ut), (A[st] = B), (ne = st));
              else if (m < le && 0 > z(O, B))
                ((A[ne] = O), (A[m] = B), (ne = m));
              else break e;
            }
          }
          return H;
        }
        function z(A, H) {
          var B = A.sortIndex - H.sortIndex;
          return B !== 0 ? B : A.id - H.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var S = performance;
          f.unstable_now = function () {
            return S.now();
          };
        } else {
          var q = Date,
            G = q.now();
          f.unstable_now = function () {
            return q.now() - G;
          };
        }
        var D = [],
          F = [],
          M = 1,
          x = null,
          C = 3,
          $ = !1,
          te = !1,
          Se = !1,
          _ = !1,
          xe = typeof setTimeout == "function" ? setTimeout : null,
          Ae = typeof clearTimeout == "function" ? clearTimeout : null,
          ze = typeof setImmediate < "u" ? setImmediate : null;
        function U(A) {
          for (var H = E(F); H !== null;) {
            if (H.callback === null) r(F);
            else if (H.startTime <= A)
              (r(F), (H.sortIndex = H.expirationTime), p(D, H));
            else break;
            H = E(F);
          }
        }
        function me(A) {
          if (((Se = !1), U(A), !te))
            if (E(D) !== null) ((te = !0), fe || ((fe = !0), ct()));
            else {
              var H = E(F);
              H !== null && Ye(me, H.startTime - A);
            }
        }
        var fe = !1,
          J = -1,
          Q = 5,
          Oe = -1;
        function ve() {
          return _ ? !0 : !(f.unstable_now() - Oe < Q);
        }
        function Le() {
          if (((_ = !1), fe)) {
            var A = f.unstable_now();
            Oe = A;
            var H = !0;
            try {
              e: {
                ((te = !1), Se && ((Se = !1), Ae(J), (J = -1)), ($ = !0));
                var B = C;
                try {
                  t: {
                    for (
                      U(A), x = E(D);
                      x !== null && !(x.expirationTime > A && ve());
                    ) {
                      var ne = x.callback;
                      if (typeof ne == "function") {
                        ((x.callback = null), (C = x.priorityLevel));
                        var le = ne(x.expirationTime <= A);
                        if (((A = f.unstable_now()), typeof le == "function")) {
                          ((x.callback = le), U(A), (H = !0));
                          break t;
                        }
                        (x === E(D) && r(D), U(A));
                      } else r(D);
                      x = E(D);
                    }
                    if (x !== null) H = !0;
                    else {
                      var We = E(F);
                      (We !== null && Ye(me, We.startTime - A), (H = !1));
                    }
                  }
                  break e;
                } finally {
                  ((x = null), (C = B), ($ = !1));
                }
                H = void 0;
              }
            } finally {
              H ? ct() : (fe = !1);
            }
          }
        }
        var ct;
        if (typeof ze == "function")
          ct = function () {
            ze(Le);
          };
        else if (typeof MessageChannel < "u") {
          var kt = new MessageChannel(),
            Ft = kt.port2;
          ((kt.port1.onmessage = Le),
            (ct = function () {
              Ft.postMessage(null);
            }));
        } else
          ct = function () {
            xe(Le, 0);
          };
        function Ye(A, H) {
          J = xe(function () {
            A(f.unstable_now());
          }, H);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (f.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (f.unstable_next = function (A) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = C;
            }
            var B = C;
            C = H;
            try {
              return A();
            } finally {
              C = B;
            }
          }),
          (f.unstable_requestPaint = function () {
            _ = !0;
          }),
          (f.unstable_runWithPriority = function (A, H) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var B = C;
            C = A;
            try {
              return H();
            } finally {
              C = B;
            }
          }),
          (f.unstable_scheduleCallback = function (A, H, B) {
            var ne = f.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? ne + B : ne))
                : (B = ne),
              A)
            ) {
              case 1:
                var le = -1;
                break;
              case 2:
                le = 250;
                break;
              case 5:
                le = 1073741823;
                break;
              case 4:
                le = 1e4;
                break;
              default:
                le = 5e3;
            }
            return (
              (le = B + le),
              (A = {
                id: M++,
                callback: H,
                priorityLevel: A,
                startTime: B,
                expirationTime: le,
                sortIndex: -1,
              }),
              B > ne
                ? ((A.sortIndex = B),
                  p(F, A),
                  E(D) === null &&
                    A === E(F) &&
                    (Se ? (Ae(J), (J = -1)) : (Se = !0), Ye(me, B - ne)))
                : ((A.sortIndex = le),
                  p(D, A),
                  te || $ || ((te = !0), fe || ((fe = !0), ct()))),
              A
            );
          }),
          (f.unstable_shouldYield = ve),
          (f.unstable_wrapCallback = function (A) {
            var H = C;
            return function () {
              var B = C;
              C = H;
              try {
                return A.apply(this, arguments);
              } finally {
                C = B;
              }
            };
          }));
      })(wo)),
    wo
  );
}
var Ah;
function J0() {
  return (Ah || ((Ah = 1), (Bo.exports = K0())), Bo.exports);
}
var Yo = { exports: {} },
  nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh;
function k0() {
  if (zh) return nt;
  zh = 1;
  var f = Jo();
  function p(M) {
    var x = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        x += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      x +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function E() {}
  var r = {
      d: {
        f: E,
        r: function () {
          throw Error(p(522));
        },
        D: E,
        C: E,
        L: E,
        m: E,
        X: E,
        S: E,
        M: E,
      },
      p: 0,
      findDOMNode: null,
    },
    z = Symbol.for("react.portal"),
    S = Symbol.for("react.recoverable"),
    q = Symbol.for("react.optimistic_key");
  function G(M, x, C) {
    var $ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: $ == null ? null : $ === q ? q : "" + $,
      children: M,
      containerInfo: x,
      implementation: C,
    };
  }
  var D = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function F(M, x) {
    if (M === "font") return "";
    if (typeof x == "string") return x === "use-credentials" ? x : "";
  }
  return (
    (nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (nt.browser = function (M) {
      return { $$typeof: S, _reason: M };
    }),
    (nt.createPortal = function (M, x) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(p(299));
      return G(M, x, null, C);
    }),
    (nt.flushSync = function (M) {
      var x = D.T,
        C = r.p;
      try {
        if (((D.T = null), (r.p = 2), M)) return M();
      } finally {
        ((D.T = x), (r.p = C), r.d.f());
      }
    }),
    (nt.preconnect = function (M, x) {
      typeof M == "string" &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == "string"
                ? x === "use-credentials"
                  ? x
                  : ""
                : void 0))
          : (x = null),
        r.d.C(M, x));
    }),
    (nt.prefetchDNS = function (M) {
      typeof M == "string" && r.d.D(M);
    }),
    (nt.preinit = function (M, x) {
      if (typeof M == "string" && x && typeof x.as == "string") {
        var C = x.as,
          $ = F(C, x.crossOrigin),
          te = typeof x.integrity == "string" ? x.integrity : void 0,
          Se = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        C === "style"
          ? r.d.S(M, typeof x.precedence == "string" ? x.precedence : void 0, {
              crossOrigin: $,
              integrity: te,
              fetchPriority: Se,
            })
          : C === "script" &&
            r.d.X(M, {
              crossOrigin: $,
              integrity: te,
              fetchPriority: Se,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
      }
    }),
    (nt.preinitModule = function (M, x) {
      if (typeof M == "string")
        if (typeof x == "object" && x !== null) {
          if (x.as == null || x.as === "script") {
            var C = F(x.as, x.crossOrigin);
            r.d.M(M, {
              crossOrigin: C,
              integrity: typeof x.integrity == "string" ? x.integrity : void 0,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
              fetchPriority:
                typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
            });
          }
        } else x == null && r.d.M(M);
    }),
    (nt.preload = function (M, x) {
      if (
        typeof M == "string" &&
        typeof x == "object" &&
        x !== null &&
        typeof x.as == "string"
      ) {
        var C = x.as,
          $ = F(C, x.crossOrigin);
        r.d.L(M, C, {
          crossOrigin: $,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0,
        });
      }
    }),
    (nt.preloadModule = function (M, x) {
      if (typeof M == "string")
        if (x) {
          var C = F(x.as, x.crossOrigin);
          r.d.m(M, {
            as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
            crossOrigin: C,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            fetchPriority:
              typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          });
        } else r.d.m(M);
    }),
    (nt.requestFormReset = function (M) {
      r.d.r(M);
    }),
    (nt.unstable_batchedUpdates = function (M, x) {
      return M(x);
    }),
    (nt.useFormState = function (M, x, C) {
      return D.H.useFormState(M, x, C);
    }),
    (nt.useFormStatus = function () {
      return D.H.useHostTransitionStatus();
    }),
    (nt.version = "19.3.1"),
    nt
  );
}
var Mh;
function Lh() {
  if (Mh) return Yo.exports;
  Mh = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return (f(), (Yo.exports = k0()), Yo.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oh;
function F0() {
  if (Oh) return yu;
  Oh = 1;
  var f = J0(),
    p = Jo(),
    E = Lh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function z(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function S(e) {
    for (var t = e, l = t; l && !l.alternate;)
      ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
    for (; t.return;) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function q(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function G(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(e) {
    if (S(e) !== e) throw Error(r(188));
  }
  function F(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = S(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ;) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === l) return (D(n), e);
          if (u === a) return (D(n), t);
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var c = !1, s = n.child; s;) {
          if (s === l) {
            ((c = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((c = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s;) {
            if (s === l) {
              ((c = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((c = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function M(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = M(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function x(e, t, l, a, n, u) {
    for (; e !== null;) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && l(e, a, n, u)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (t || (e.tag !== 5 && e.tag !== 27)) &&
          x(e.child, t, l, a, n, u))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function C(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function $(e) {
    var t = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return t;
  }
  function te(e) {
    var t = [null, null],
      l = C(e);
    return (l === null || Se(t, e, l.child, { foundSelf: !1 }), t);
  }
  function Se(e, t, l, a) {
    for (; l !== null;) {
      if (l === t) a.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (a.foundSelf) return ((e[1] = l), !0);
        e[0] = l;
      } else if (
        (l.tag !== 22 || l.memoizedState === null) &&
        Se(e, t, l.child, a)
      )
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function _(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var xe = null,
    Ae = null;
  function ze(e, t, l) {
    return e === l ? !0 : e === t ? ((xe = e), !0) : !1;
  }
  function U(e, t, l) {
    return e === l
      ? ((Ae = e), !1)
      : e === t
        ? (Ae !== null && (xe = e), !0)
        : !1;
  }
  function me(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function fe(e, t, l) {
    for (var a = 0, n = e; n; n = l(n)) a++;
    n = 0;
    for (var u = t; u; u = l(u)) n++;
    for (; 0 < a - n;) ((e = l(e)), a--);
    for (; 0 < n - a;) ((t = l(t)), n--);
    for (; a--;) {
      if (e === t || (t !== null && e === t.alternate)) return e;
      ((e = l(e)), (t = l(t)));
    }
    return null;
  }
  var J = Object.assign,
    Q = Symbol.for("react.element"),
    Oe = Symbol.for("react.transitional.element"),
    ve = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    ct = Symbol.for("react.strict_mode"),
    kt = Symbol.for("react.profiler"),
    Ft = Symbol.for("react.consumer"),
    Ye = Symbol.for("react.context"),
    A = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    B = Symbol.for("react.suspense_list"),
    ne = Symbol.for("react.memo"),
    le = Symbol.for("react.lazy"),
    We = Symbol.for("react.activity"),
    st = Symbol.for("react.legacy_hidden"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    m = Symbol.for("react.view_transition"),
    O = Symbol.for("react.recoverable"),
    Z = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Z && e[Z]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ue = Symbol.for("react.client.reference");
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case kt:
        return "Profiler";
      case ct:
        return "StrictMode";
      case H:
        return "Suspense";
      case B:
        return "SuspenseList";
      case We:
        return "Activity";
      case m:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ve:
          return "Portal";
        case Ye:
          return e.displayName || "Context";
        case Ft:
          return (e._context.displayName || "Context") + ".Consumer";
        case A:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ne:
          return (
            (t = e.displayName || null),
            t !== null ? t : ye(e.type) || "Memo"
          );
        case le:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  var pe = Array.isArray,
    V = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    rl = { pending: !1, data: null, method: null, action: null },
    Pi = [],
    Aa = -1;
  function Wt(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Aa || ((e.current = Pi[Aa]), (Pi[Aa] = null), Aa--);
  }
  function Ce(e, t) {
    (Aa++, (Pi[Aa] = e.current), (e.current = t));
  }
  var It = Wt(null),
    jn = Wt(null),
    Al = Wt(null),
    bu = Wt(null);
  function xu(e, t) {
    switch ((Ce(Al, t), Ce(jn, e), Ce(It, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Dm(t)), (e = Cm(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Ie(It), Ce(It, e));
  }
  function za() {
    (Ie(It), Ie(jn), Ie(Al));
  }
  function ec(e) {
    var t = e.memoizedState;
    (t !== null && ((vn._currentValue = t.memoizedState), Ce(bu, e)),
      (t = It.current));
    var l = Cm(t, e.type);
    t !== l && (Ce(jn, e), Ce(It, l));
  }
  function ju(e) {
    (jn.current === e && (Ie(It), Ie(jn)),
      bu.current === e && (Ie(bu), (vn._currentValue = rl)));
  }
  var tc, Wo;
  function zl(e) {
    if (tc === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((tc = (t && t[1]) || ""),
          (Wo =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      tc +
      e +
      Wo
    );
  }
  var lc = !1;
  function ac(e, t) {
    if (!e || lc) return "";
    lc = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (R) {
                  var h = R;
                }
                Reflect.construct(e, [], N);
              } else {
                try {
                  N.call();
                } catch (R) {
                  h = R;
                }
                N = !1;
                try {
                  var b = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (N = !0),
                    new e());
                } finally {
                  N &&
                    (b !== void 0
                      ? Object.defineProperty(e.prototype, "props", b)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                h = R;
              }
              (N = e()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
            }
          } catch (R) {
            if (R && h && typeof R.stack == "string") return [R.stack, h.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        s = u[1];
      if (c && s) {
        var o = c.split(`
`),
          y = s.split(`
`);
        for (
          n = a = 0;
          a < o.length && !o[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (a === o.length || n === y.length)
          for (
            a = o.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && o[a] !== y[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || o[a] !== y[n])) {
                  var j =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", e.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((lc = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? zl(l) : "";
  }
  function Kh(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zl(e.type);
      case 16:
        return zl("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? zl("Suspense Fallback")
          : zl("Suspense");
      case 19:
        return zl("SuspenseList");
      case 0:
      case 15:
        return ac(e.type, !1);
      case 11:
        return ac(e.type.render, !1);
      case 1:
        return ac(e.type, !0);
      case 31:
        return zl("Activity");
      case 30:
        return zl("ViewTransition");
      default:
        return "";
    }
  }
  function Io(e) {
    try {
      var t = "",
        l = null;
      do ((t += Kh(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var nc = Object.prototype.hasOwnProperty,
    uc = f.unstable_scheduleCallback,
    ic = f.unstable_cancelCallback,
    Jh = f.unstable_shouldYield,
    kh = f.unstable_requestPaint,
    bt = f.unstable_now,
    Fh = f.unstable_getCurrentPriorityLevel,
    $o = f.unstable_ImmediatePriority,
    Po = f.unstable_UserBlockingPriority,
    Su = f.unstable_NormalPriority,
    Wh = f.unstable_LowPriority,
    er = f.unstable_IdlePriority,
    Ih = f.log,
    $h = f.unstable_setDisableYieldValue,
    Sn = null,
    xt = null;
  function Ml(e) {
    if (
      (typeof Ih == "function" && $h(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(Sn, e);
      } catch {}
  }
  var jt = Math.clz32 ? Math.clz32 : t1,
    Ph = Math.log,
    e1 = Math.LN2;
  function t1(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ph(e) / e1) | 0)) | 0);
  }
  var Eu = 256,
    Tu = 262144,
    Nu = 4194304;
  function la(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Au(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = la(a))
            : ((c &= s),
              c !== 0
                ? (n = la(c))
                : l || ((l = s & ~e), l !== 0 && (n = la(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = la(s))
            : c !== 0
              ? (n = la(c))
              : l || ((l = a & ~e), l !== 0 && (n = la(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function En(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function tr(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l;) {
        var a = 31 - jt(l),
          n = 1 << a;
        ((t |= e[a]), (l &= ~n));
      }
    return t;
  }
  function l1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lr() {
    var e = Nu;
    return ((Nu <<= 1), (Nu & 62914560) === 0 && (Nu = 4194304), e);
  }
  function cc(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Tn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function a1(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      o = e.expirationTimes,
      y = e.hiddenUpdates;
    for (l = c & ~l; 0 < l;) {
      var j = 31 - jt(l),
        N = 1 << j;
      ((s[j] = 0), (o[j] = -1));
      var h = y[j];
      if (h !== null)
        for (y[j] = null, j = 0; j < h.length; j++) {
          var b = h[j];
          b !== null && (b.lane &= -536870913);
        }
      l &= ~N;
    }
    (a !== 0 && ar(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t)));
  }
  function ar(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - jt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function nr(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l;) {
      var a = 31 - jt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function ur(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : sc(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function sc(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function oc(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ir() {
    var e = W.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hh(e.type));
  }
  function cr(e, t) {
    var l = W.p;
    try {
      return ((W.p = e), t());
    } finally {
      W.p = l;
    }
  }
  var fl = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + fl,
    mt = "__reactProps$" + fl,
    Ma = "__reactContainer$" + fl,
    sr = "__reactEvents$" + fl,
    n1 = "__reactListeners$" + fl,
    u1 = "__reactHandles$" + fl,
    or = "__reactResources$" + fl,
    Nn = "__reactMarker$" + fl,
    zu = "__reactLoad$" + fl;
  function Mu(e) {
    (delete e[$e], delete e[mt], delete e[n1], delete e[u1]);
  }
  function aa(e) {
    var t;
    if ((t = e[$e])) return t;
    for (var l = e.parentNode; l;) {
      if ((t = l[Ma] || l[$e])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = km(e); e !== null;) {
            if ((l = e[$e])) return l;
            e = km(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Oa(e) {
    if ((e = e[$e] || e[Ma])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function An(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Da(e) {
    var t = e[or];
    return (
      t ||
        (t = e[or] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ke(e) {
    e[Nn] = !0;
  }
  function rr(e) {
    e[zu] = void 0;
  }
  var fr = new Set(),
    dr = {};
  function na(e, t) {
    (Ca(e, t), Ca(e + "Capture", t));
  }
  function Ca(e, t) {
    for (dr[e] = t, e = 0; e < t.length; e++) fr.add(t[e]);
  }
  var i1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    mr = {},
    hr = {};
  function c1(e) {
    return nc.call(hr, e)
      ? !0
      : nc.call(mr, e)
        ? !1
        : i1.test(e)
          ? (hr[e] = !0)
          : ((mr[e] = !0), !1);
  }
  var ge = !1;
  function vr() {
    var e = ge;
    return ((ge = !1), e);
  }
  function Ou(e, t, l) {
    if (c1(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, l);
      }
  }
  function Du(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, l);
    }
  }
  function dl(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, a);
    }
  }
  function St(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yr(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function s1(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            ((l = "" + c), u.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (c) {
            l = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function rc(e) {
    if (!e._valueTracker) {
      var t = yr(e) ? "checked" : "value";
      e._valueTracker = s1(e, t, "" + e[t]);
    }
  }
  function gr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = yr(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  var o1 = /[\n"\\]/g;
  function Dt(e) {
    return e.replace(o1, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function fc(e, t, l, a, n, u, c, s) {
    ((e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + St(t))
          : e.value !== "" + St(t) && (e.value = "" + St(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? c === "number" && e.value == t
          ? dc(e, St(e.value))
          : dc(e, St(t))
        : l != null
          ? dc(e, St(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + St(s))
        : e.removeAttribute("name"));
  }
  function pr(e, t, l, a, n, u, c, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        rc(e);
        return;
      }
      ((l = l != null ? "" + St(l) : ""),
        (t = t != null ? "" + St(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c),
      rc(e));
  }
  function dc(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function _a(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + St(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function br(e, t, l) {
    if (
      t != null &&
      ((t = "" + St(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function xr(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (pe(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = St(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      rc(e));
  }
  function Ra(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var r1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function jr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || r1.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function Sr(e, t, l) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""),
          (ge = !0));
      for (var n in t)
        ((a = t[n]),
          t.hasOwnProperty(n) && l[n] !== a && (jr(e, n, a), (ge = !0)));
    } else for (var u in t) t.hasOwnProperty(u) && jr(e, u, t[u]);
  }
  function mc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var f1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    d1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(e) {
    return d1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function $t() {}
  var hc = null;
  function vc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ua = null,
    Ha = null;
  function Er(e) {
    var t = Oa(e);
    if (t && (e = t.stateNode)) {
      var l = e[mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (fc(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Dt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[mt] || null;
                if (!n) throw Error(r(90));
                fc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && gr(a));
          }
          break e;
        case "textarea":
          br(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && _a(e, !!l.multiple, t, !1));
      }
    }
  }
  var yc = !1;
  function Tr(e, t, l) {
    if (yc) return e(t, l);
    yc = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((yc = !1),
        (Ua !== null || Ha !== null) &&
          (Ci(), Ua && ((t = Ua), (e = Ha), (Ha = Ua = null), Er(t), e)))
      )
        for (t = 0; t < e.length; t++) Er(e[t]);
    }
  }
  function zn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[mt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(r(231, t, typeof l));
    return l;
  }
  var ml = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    gc = !1;
  if (ml)
    try {
      var Mn = {};
      (Object.defineProperty(Mn, "passive", {
        get: function () {
          gc = !0;
        },
      }),
        window.addEventListener("test", Mn, Mn),
        window.removeEventListener("test", Mn, Mn));
    } catch {
      gc = !1;
    }
  var Ol = null,
    pc = null,
    _u = null;
  function Nr() {
    if (_u) return _u;
    var e,
      t = pc,
      l = t.length,
      a,
      n = "value" in Ol ? Ol.value : Ol.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (_u = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Ru(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Uu() {
    return !0;
  }
  function Ar() {
    return !1;
  }
  function ot(e) {
    function t(l, a, n, u, c) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Uu
          : Ar),
        (this.isPropagationStopped = Ar),
        this
      );
    }
    return (
      J(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Uu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Uu));
        },
        persist: function () {},
        isPersistent: Uu,
      }),
      t
    );
  }
  var Dl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hu = ot(Dl),
    On = J({}, Dl, { view: 0, detail: 0 }),
    m1 = ot(On),
    bc,
    xc,
    Dn,
    Lu = J({}, On, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Dn &&
              (Dn && e.type === "mousemove"
                ? ((bc = e.screenX - Dn.screenX), (xc = e.screenY - Dn.screenY))
                : (xc = bc = 0),
              (Dn = e)),
            bc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : xc;
      },
    }),
    zr = ot(Lu),
    h1 = J({}, Lu, { dataTransfer: 0 }),
    v1 = ot(h1),
    y1 = J({}, On, { relatedTarget: 0 }),
    jc = ot(y1),
    g1 = J({}, Dl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p1 = ot(g1),
    b1 = J({}, Dl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    x1 = ot(b1),
    j1 = J({}, Dl, { data: 0 }),
    Mr = ot(j1),
    S1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    E1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
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
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    T1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function N1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = T1[e])
        ? !!t[e]
        : !1;
  }
  function Sc() {
    return N1;
  }
  var A1 = J({}, On, {
      key: function (e) {
        if (e.key) {
          var t = S1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ru(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? E1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function (e) {
        return e.type === "keypress" ? Ru(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ru(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    z1 = ot(A1),
    M1 = J({}, Lu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Or = ot(M1),
    O1 = J({}, Dl, { submitter: 0 }),
    D1 = ot(O1),
    C1 = J({}, On, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc,
    }),
    _1 = ot(C1),
    R1 = J({}, Dl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    U1 = ot(R1),
    H1 = J({}, Lu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    L1 = ot(H1),
    q1 = J({}, Dl, { newState: 0, oldState: 0, source: 0 }),
    B1 = ot(q1),
    w1 = [9, 13, 27, 32],
    Ec = ml && "CompositionEvent" in window,
    Cn = null;
  ml && "documentMode" in document && (Cn = document.documentMode);
  var Y1 = ml && "TextEvent" in window && !Cn,
    Dr = ml && (!Ec || (Cn && 8 < Cn && 11 >= Cn)),
    Cr = " ",
    _r = !1;
  function Rr(e, t) {
    switch (e) {
      case "keyup":
        return w1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ur(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var La = !1;
  function G1(e, t) {
    switch (e) {
      case "compositionend":
        return Ur(t);
      case "keypress":
        return t.which !== 32 ? null : ((_r = !0), Cr);
      case "textInput":
        return ((e = t.data), e === Cr && _r ? null : e);
      default:
        return null;
    }
  }
  function V1(e, t) {
    if (La)
      return e === "compositionend" || (!Ec && Rr(e, t))
        ? ((e = Nr()), (_u = pc = Ol = null), (La = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Dr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var X1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!X1[e.type] : t === "textarea";
  }
  function Lr(e, t, l, a) {
    (Ua ? (Ha ? Ha.push(a) : (Ha = [a])) : (Ua = a),
      (t = qi(t, "onChange")),
      0 < t.length &&
        ((l = new Hu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var _n = null,
    Rn = null;
  function Q1(e) {
    Tm(e, 0);
  }
  function qu(e) {
    var t = An(e);
    if (gr(t)) return e;
  }
  function qr(e, t) {
    if (e === "change") return t;
  }
  var Br = !1;
  if (ml) {
    var Tc;
    if (ml) {
      var Nc = "oninput" in document;
      if (!Nc) {
        var wr = document.createElement("div");
        (wr.setAttribute("oninput", "return;"),
          (Nc = typeof wr.oninput == "function"));
      }
      Tc = Nc;
    } else Tc = !1;
    Br = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function Yr() {
    _n && (_n.detachEvent("onpropertychange", Gr), (Rn = _n = null));
  }
  function Gr(e) {
    if (e.propertyName === "value" && qu(Rn)) {
      var t = [];
      (Lr(t, Rn, e, vc(e)), Tr(Q1, t));
    }
  }
  function Z1(e, t, l) {
    e === "focusin"
      ? (Yr(), (_n = t), (Rn = l), _n.attachEvent("onpropertychange", Gr))
      : e === "focusout" && Yr();
  }
  function K1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qu(Rn);
  }
  function J1(e, t) {
    if (e === "click") return qu(t);
  }
  function k1(e, t) {
    if (e === "input" || e === "change") return qu(t);
  }
  function F1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : F1;
  function Un(e, t) {
    if (Et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!nc.call(t, n) || !Et(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Ac(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Vr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Xr(e, t) {
    var l = Vr(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Vr(l);
    }
  }
  function Qr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Qr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zr(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ac(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Ac(e.document);
    }
    return t;
  }
  function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var W1 = ml && "documentMode" in document && 11 >= document.documentMode,
    qa = null,
    Mc = null,
    Hn = null,
    Oc = !1;
  function Kr(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Oc ||
      qa == null ||
      qa !== Ac(a) ||
      ((a = qa),
      "selectionStart" in a && zc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Hn && Un(Hn, a)) ||
        ((Hn = a),
        (a = qi(Mc, "onSelect")),
        0 < a.length &&
          ((t = new Hu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = qa))));
  }
  function ua(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var Ba = {
      animationend: ua("Animation", "AnimationEnd"),
      animationiteration: ua("Animation", "AnimationIteration"),
      animationstart: ua("Animation", "AnimationStart"),
      transitionrun: ua("Transition", "TransitionRun"),
      transitionstart: ua("Transition", "TransitionStart"),
      transitioncancel: ua("Transition", "TransitionCancel"),
      transitionend: ua("Transition", "TransitionEnd"),
    },
    Dc = {},
    Jr = {};
  ml &&
    ((Jr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ba.animationend.animation,
      delete Ba.animationiteration.animation,
      delete Ba.animationstart.animation),
    "TransitionEvent" in window || delete Ba.transitionend.transition);
  function ia(e) {
    if (Dc[e]) return Dc[e];
    if (!Ba[e]) return e;
    var t = Ba[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Jr) return (Dc[e] = t[l]);
    return e;
  }
  var kr = ia("animationend"),
    Fr = ia("animationiteration"),
    Wr = ia("animationstart"),
    I1 = ia("transitionrun"),
    $1 = ia("transitionstart"),
    P1 = ia("transitioncancel"),
    Ir = ia("transitionend"),
    $r = new Map(),
    Cc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Cc.push("scrollEnd");
  function Vt(e, t) {
    ($r.set(e, t), na(t, [e]));
  }
  var ev = 0;
  function hl(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Kt.identifierPrefix;
    var l = ev++;
    return ((e = "_" + e + "t_" + l.toString(32) + "_"), (t.autoName = e));
  }
  function Pr(e) {
    if (e == null || typeof e == "string") return e;
    var t = null,
      l = nn;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = e[l[a]];
        if (n != null) {
          if (n === "none") return "none";
          t = t == null ? n : t + (" " + n);
        }
      }
    return t ?? e.default;
  }
  function vl(e, t) {
    return (
      (e = Pr(e)),
      (t = Pr(t)),
      t == null ? (e === "auto" ? null : e) : t === "auto" ? null : t
    );
  }
  var Bu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ct = [],
    wa = 0,
    _c = 0;
  function wu() {
    for (var e = wa, t = (_c = wa = 0); t < e;) {
      var l = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var u = Ct[t];
      if (((Ct[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        (c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n));
      }
      u !== 0 && ef(l, n, u);
    }
  }
  function Yu(e, t, l, a) {
    ((Ct[wa++] = e),
      (Ct[wa++] = t),
      (Ct[wa++] = l),
      (Ct[wa++] = a),
      (_c |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Rc(e, t, l, a) {
    return (Yu(e, t, l, a), Gu(e));
  }
  function ca(e, t) {
    return (Yu(e, null, null, t), Gu(e));
  }
  function ef(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null;)
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - jt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function Gu(e) {
    if (50 < au) throw ((au = 0), (Di = null), Error(r(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ya = {};
  function tv(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ht(e, t, l, a) {
    return new tv(e, t, l, a);
  }
  function Uc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function yl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ht(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 1206910976),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function tf(e, t) {
    e.flags &= 1206910978;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Vu(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof a == "function")) Uc(a) && (c = 1);
    else if (typeof a == "string")
      c = O0(e, l, It.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (a) {
        case We:
          return (
            (e = ht(31, l, t, n)),
            (e.elementType = We),
            (e.lanes = u),
            e
          );
        case Le:
          return sa(l.children, n, u, t);
        case ct:
          ((c = 8), (n |= 24));
          break;
        case kt:
          return (
            (e = ht(12, l, t, n | 2)),
            (e.elementType = kt),
            (e.lanes = u),
            e
          );
        case H:
          return ((e = ht(13, l, t, n)), (e.elementType = H), (e.lanes = u), e);
        case B:
          return ((e = ht(19, l, t, n)), (e.elementType = B), (e.lanes = u), e);
        case st:
        case m:
          return (
            (e = n | 32),
            (e = ht(30, l, t, e)),
            (e.elementType = m),
            (e.lanes = u),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Ye:
                c = 10;
                break e;
              case Ft:
                c = 9;
                break e;
              case A:
                c = 11;
                break e;
              case ne:
                c = 14;
                break e;
              case le:
                ((c = 16), (a = null));
                break e;
            }
          ((c = 29),
            (l = Error(r(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = ht(c, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function sa(e, t, l, a) {
    return ((e = ht(7, e, a, t)), (e.lanes = l), e);
  }
  function Hc(e, t, l) {
    return ((e = ht(6, e, null, t)), (e.lanes = l), e);
  }
  function lf(e) {
    var t = ht(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Lc(e, t, l) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var af = new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = af.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Io(t) }), af.set(e, t), t);
    }
    return { value: e, source: t, stack: Io(t) };
  }
  var Ga = [],
    Va = 0,
    Xu = null,
    Ln = 0,
    Rt = [],
    Ut = 0,
    Cl = null,
    Pt = 1,
    el = "";
  function gl(e, t) {
    ((Ga[Va++] = Ln), (Ga[Va++] = Xu), (Xu = e), (Ln = t));
  }
  function nf(e, t, l) {
    ((Rt[Ut++] = Pt), (Rt[Ut++] = el), (Rt[Ut++] = Cl), (Cl = e));
    var a = Pt;
    e = el;
    var n = 32 - jt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - jt(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      ((u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Pt = (1 << (32 - jt(t) + n)) | (l << n) | a),
        (el = u + e));
    } else ((Pt = (1 << u) | (l << n) | a), (el = e));
  }
  function Qu(e) {
    e.return !== null && (gl(e, 1), nf(e, 1, 0));
  }
  function qc(e) {
    for (; e === Xu;)
      ((Xu = Ga[--Va]), (Ga[Va] = null), (Ln = Ga[--Va]), (Ga[Va] = null));
    for (; e === Cl;)
      ((Cl = Rt[--Ut]),
        (Rt[Ut] = null),
        (el = Rt[--Ut]),
        (Rt[Ut] = null),
        (Pt = Rt[--Ut]),
        (Rt[Ut] = null));
  }
  function uf(e, t) {
    ((Rt[Ut++] = Pt),
      (Rt[Ut++] = el),
      (Rt[Ut++] = Cl),
      (Pt = t.id),
      (el = t.overflow),
      (Cl = e));
  }
  var Je = null,
    _e = null,
    ae = !1,
    _l = null,
    Ht = !1,
    Bc = Error(r(519));
  function Rl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (qn(_t(t, e)), Bc);
  }
  function cf(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[$e] = e), (t[mt] = a), l)) {
      case "dialog":
        (ce("cancel", t), ce("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ce("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < uu.length; l++) ce(uu[l], t);
        break;
      case "source":
        ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ce("error", t), ce("load", t));
        break;
      case "details":
        ce("toggle", t);
        break;
      case "input":
        (ce("invalid", t),
          pr(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ce("invalid", t);
        break;
      case "textarea":
        (ce("invalid", t), xr(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Mm(t.textContent, l)
        ? (a.popover != null && (ce("beforetoggle", t), ce("toggle", t)),
          a.onScroll != null && ce("scroll", t),
          a.onScrollEnd != null && ce("scrollend", t),
          a.onClick != null && (t.onclick = $t),
          (t = !0))
        : (t = !1),
      t || Rl(e, !0));
  }
  function Zu(e) {
    for (Je = e.return; Je;)
      switch (Je.tag) {
        case 5:
        case 31:
        case 13:
          Ht = !1;
          return;
        case 27:
        case 3:
          Ht = !0;
          return;
        default:
          Je = Je.return;
      }
  }
  function Xa(e) {
    if (e !== Je) return !1;
    if (!ae) return (Zu(e), (ae = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || vo(e.type, e.memoizedProps))),
        (l = !l)),
      l && _e && Rl(e),
      Zu(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      _e = Jm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      _e = Jm(e);
    } else
      t === 27
        ? ((t = _e), Fl(e.type) ? ((e = To), (To = null), (_e = e)) : (_e = t))
        : (_e = Je ? qt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function oa() {
    ((_e = Je = null), (ae = !1));
  }
  function wc() {
    var e = _l;
    return (
      e !== null &&
        (gt === null ? (gt = e) : gt.push.apply(gt, e), (_l = null)),
      e
    );
  }
  function qn(e) {
    _l === null ? (_l = [e]) : _l.push(e);
  }
  var Yc = Wt(null),
    ra = null,
    pl = null;
  function Ul(e, t, l) {
    (Ce(Yc, t._currentValue), (t._currentValue = l));
  }
  function bl(e) {
    ((e._currentValue = Yc.current), Ie(Yc));
  }
  function Ku(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Gc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null;) {
          var s = u;
          u = n;
          for (var o = 0; o < t.length; o++)
            if (s.context === t[o]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Ku(u.return, l, e),
                a || (c = null));
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(r(341));
        ((c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          Ku(c, l, e),
          (c = null));
      } else
        n.tag === 13 &&
        n.memoizedState !== null &&
        n.memoizedState.dehydrated === null
          ? ((n.lanes |= l),
            (c = n.alternate),
            c !== null && (c.lanes |= l),
            Ku(n.return, l, e),
            (c = n.child),
            (c = c !== null ? c.sibling : null))
          : (c = n.child);
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null;) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            ((n.return = c.return), (c = n));
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function fa(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = n.type;
          Et(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === bu.current) {
        if (((c = n.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(vn) : (e = [vn]));
      }
      n = n.return;
    }
    return (e !== null && Gc(t, e, l, a), (t.flags |= 262144), e !== null);
  }
  function Ju(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Et(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function da(e) {
    ((ra = e),
      (pl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Pe(e) {
    return sf(ra, e);
  }
  function ku(e, t) {
    return (ra === null && da(e), sf(e, t));
  }
  function sf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), pl === null)) {
      if (e === null) throw Error(r(308));
      ((pl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else pl = pl.next = t;
    return l;
  }
  var lv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    av = f.unstable_scheduleCallback,
    nv = f.unstable_NormalPriority,
    Ge = {
      $$typeof: Ye,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vc() {
    return { controller: new lv(), data: new Map(), refCount: 0 };
  }
  function Bn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        av(nv, function () {
          e.controller.abort();
        }));
  }
  function of(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var l = e.transitionTypes;
      for (
        l === null && (l = e.transitionTypes = []), e = 0;
        e < t.length;
        e++
      ) {
        var a = t[e];
        l.indexOf(a) === -1 && l.push(a);
      }
    }
  }
  var wn = null;
  function uv(e) {
    var t = e.transitionTypes;
    return ((e.transitionTypes = null), t);
  }
  var Yn = null,
    Xc = 0,
    ma = 0,
    Qa = null;
  function iv(e, t) {
    if (Yn === null) {
      var l = (Yn = []);
      ((Xc = 0),
        (ma = uo()),
        (Qa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Xc++, t.then(rf, rf), t);
  }
  function rf() {
    if (--Xc === 0 && ((wn = null), Yn !== null)) {
      Qa !== null && (Qa.status = "fulfilled");
      var e = Yn;
      ((Yn = null), (ma = 0), (Qa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function cv(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var ff = V.S;
  V.S = function (e, t) {
    if (
      ((am = bt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        iv(e, t),
      wn !== null)
    )
      for (var l = on; l !== null;) (of(l, wn), (l = l.next));
    if (((l = e.types), l !== null)) {
      for (var a = on; a !== null;) (of(a, l), (a = a.next));
      if (ma !== 0) {
        ((a = wn), a === null && (a = wn = []));
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    ff !== null && ff(e, t);
  };
  var ha = Wt(null);
  function Qc() {
    var e = ha.current;
    return e !== null ? e : De.pooledCache;
  }
  function Fu(e, t) {
    t === null ? Ce(ha, ha.current) : Ce(ha, t.pool);
  }
  function df() {
    var e = Qc();
    return e === null ? null : { parent: Ge._currentValue, pool: e };
  }
  var Za = Error(r(460)),
    Zc = Error(r(474)),
    Wu = Error(r(542)),
    Iu = { then: function () {} };
  function mf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function hf(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then($t, $t), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (e = t.reason),
          yf(e),
          e === void 0 && !("reason" in t) ? Error(r(600)) : e
        );
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), yf(e), e);
        }
        throw ((ya = t), Za);
    }
  }
  function va(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((ya = l), Za)
        : l;
    }
  }
  var ya = null;
  function vf() {
    if (ya === null) throw Error(r(459));
    var e = ya;
    return ((ya = null), e);
  }
  function yf(e) {
    if (e === Za || e === Wu) throw Error(r(483));
  }
  var Ka = null,
    Gn = 0;
  function $u(e) {
    var t = Gn;
    return ((Gn += 1), Ka === null && (Ka = []), hf(Ka, e, t));
  }
  function Hl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Pu(e, t) {
    throw t.$$typeof === Q
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function gf(e) {
    function t(v, d) {
      if (e) {
        var g = v.deletions;
        g === null ? ((v.deletions = [d]), (v.flags |= 16)) : g.push(d);
      }
    }
    function l(v, d) {
      if (!e) return null;
      for (; d !== null;) (t(v, d), (d = d.sibling));
      return null;
    }
    function a(v) {
      for (var d = new Map(); v !== null;)
        (v.key === null ? d.set(v.index, v) : d.set(v.key, v), (v = v.sibling));
      return d;
    }
    function n(v, d) {
      return ((v = yl(v, d)), (v.index = 0), (v.sibling = null), v);
    }
    function u(v, d, g) {
      return (
        (v.index = g),
        e
          ? ((g = v.alternate),
            g !== null
              ? ((g = g.index), g < d ? ((v.flags |= 2), d) : g)
              : ((v.flags |= 134217730), d))
          : ((v.flags |= 1048576), d)
      );
    }
    function c(v) {
      return (e && v.alternate === null && (v.flags |= 134217730), v);
    }
    function s(v, d, g, T) {
      return d === null || d.tag !== 6
        ? ((d = Hc(g, v.mode, T)), (d.return = v), d)
        : ((d = n(d, g)), (d.return = v), d);
    }
    function o(v, d, g, T) {
      var L = g.type;
      return L === Le
        ? ((v = j(v, d, g.props.children, T, g.key)), Hl(v, g), v)
        : d !== null &&
            (d.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === le &&
                va(L) === d.type))
          ? ((d = n(d, g.props)), Hl(d, g), (d.return = v), d)
          : ((d = Vu(g.type, g.key, g.props, null, v.mode, T)),
            Hl(d, g),
            (d.return = v),
            d);
    }
    function y(v, d, g, T) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== g.containerInfo ||
        d.stateNode.implementation !== g.implementation
        ? ((d = Lc(g, v.mode, T)), (d.return = v), d)
        : ((d = n(d, g.children || [])), (d.return = v), d);
    }
    function j(v, d, g, T, L) {
      return d === null || d.tag !== 7
        ? ((d = sa(g, v.mode, T, L)), (d.return = v), d)
        : ((d = n(d, g)), (d.return = v), d);
    }
    function N(v, d, g) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Hc("" + d, v.mode, g)), (d.return = v), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Oe:
            return (
              (g = Vu(d.type, d.key, d.props, null, v.mode, g)),
              Hl(g, d),
              (g.return = v),
              g
            );
          case ve:
            return ((d = Lc(d, v.mode, g)), (d.return = v), d);
          case le:
            return ((d = va(d)), N(v, d, g));
        }
        if (pe(d) || X(d))
          return ((d = sa(d, v.mode, g, null)), (d.return = v), d);
        if (typeof d.then == "function") return N(v, $u(d), g);
        if (d.$$typeof === Ye) return N(v, ku(v, d), g);
        Pu(v, d);
      }
      return null;
    }
    function h(v, d, g, T) {
      var L = d !== null ? d.key : null;
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return L !== null ? null : s(v, d, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Oe:
            return g.key === L ? o(v, d, g, T) : null;
          case ve:
            return g.key === L ? y(v, d, g, T) : null;
          case le:
            return ((g = va(g)), h(v, d, g, T));
        }
        if (pe(g) || X(g)) return L !== null ? null : j(v, d, g, T, null);
        if (typeof g.then == "function") return h(v, d, $u(g), T);
        if (g.$$typeof === Ye) return h(v, d, ku(v, g), T);
        Pu(v, g);
      }
      return null;
    }
    function b(v, d, g, T, L) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((v = v.get(g) || null), s(d, v, "" + T, L));
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Oe:
            return (
              (v = v.get(T.key === null ? g : T.key) || null),
              o(d, v, T, L)
            );
          case ve:
            return (
              (v = v.get(T.key === null ? g : T.key) || null),
              y(d, v, T, L)
            );
          case le:
            return ((T = va(T)), b(v, d, g, T, L));
        }
        if (pe(T) || X(T)) return ((v = v.get(g) || null), j(d, v, T, L, null));
        if (typeof T.then == "function") return b(v, d, g, $u(T), L);
        if (T.$$typeof === Ye) return b(v, d, g, ku(d, T), L);
        Pu(d, T);
      }
      return null;
    }
    function R(v, d, g, T) {
      for (
        var L = null, oe = null, K = d, k = (d = 0), Qe = null;
        K !== null && k < g.length;
        k++
      ) {
        K.index > k ? ((Qe = K), (K = null)) : (Qe = K.sibling);
        var de = h(v, K, g[k], T);
        if (de === null) {
          K === null && (K = Qe);
          break;
        }
        (e && K && de.alternate === null && t(v, K),
          (d = u(de, d, k)),
          oe === null ? (L = de) : (oe.sibling = de),
          (oe = de),
          (K = Qe));
      }
      if (k === g.length) return (l(v, K), ae && gl(v, k), L);
      if (K === null) {
        for (; k < g.length; k++)
          ((K = N(v, g[k], T)),
            K !== null &&
              ((d = u(K, d, k)),
              oe === null ? (L = K) : (oe.sibling = K),
              (oe = K)));
        return (ae && gl(v, k), L);
      }
      for (K = a(K); k < g.length; k++)
        ((Qe = b(K, v, k, g[k], T)),
          Qe !== null &&
            (e &&
              ((de = Qe.alternate),
              de !== null && K.delete(de.key === null ? k : de.key)),
            (d = u(Qe, d, k)),
            oe === null ? (L = Qe) : (oe.sibling = Qe),
            (oe = Qe)));
      return (
        e &&
          K.forEach(function (ea) {
            return t(v, ea);
          }),
        ae && gl(v, k),
        L
      );
    }
    function Y(v, d, g, T) {
      if (g == null) throw Error(r(151));
      for (
        var L = null, oe = null, K = d, k = (d = 0), Qe = null, de = g.next();
        K !== null && !de.done;
        k++, de = g.next()
      ) {
        K.index > k ? ((Qe = K), (K = null)) : (Qe = K.sibling);
        var ea = h(v, K, de.value, T);
        if (ea === null) {
          K === null && (K = Qe);
          break;
        }
        (e && K && ea.alternate === null && t(v, K),
          (d = u(ea, d, k)),
          oe === null ? (L = ea) : (oe.sibling = ea),
          (oe = ea),
          (K = Qe));
      }
      if (de.done) return (l(v, K), ae && gl(v, k), L);
      if (K === null) {
        for (; !de.done; k++, de = g.next())
          ((de = N(v, de.value, T)),
            de !== null &&
              ((d = u(de, d, k)),
              oe === null ? (L = de) : (oe.sibling = de),
              (oe = de)));
        return (ae && gl(v, k), L);
      }
      for (K = a(K); !de.done; k++, de = g.next())
        ((de = b(K, v, k, de.value, T)),
          de !== null &&
            (e &&
              ((Qe = de.alternate),
              Qe !== null && K.delete(Qe.key === null ? k : Qe.key)),
            (d = u(de, d, k)),
            oe === null ? (L = de) : (oe.sibling = de),
            (oe = de)));
      return (
        e &&
          K.forEach(function (G0) {
            return t(v, G0);
          }),
        ae && gl(v, k),
        L
      );
    }
    function ee(v, d, g, T) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === Le &&
          g.key === null &&
          g.props.ref === void 0 &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case Oe:
            e: {
              for (var L = g.key; d !== null;) {
                if (d.key === L) {
                  if (((L = g.type), L === Le)) {
                    if (d.tag === 7) {
                      (l(v, d.sibling),
                        (T = n(d, g.props.children)),
                        Hl(T, g),
                        (T.return = v),
                        (v = T));
                      break e;
                    }
                  } else if (
                    d.elementType === L ||
                    (typeof L == "object" &&
                      L !== null &&
                      L.$$typeof === le &&
                      va(L) === d.type)
                  ) {
                    (l(v, d.sibling),
                      (T = n(d, g.props)),
                      Hl(T, g),
                      (T.return = v),
                      (v = T));
                    break e;
                  }
                  l(v, d);
                  break;
                } else t(v, d);
                d = d.sibling;
              }
              g.type === Le
                ? ((T = sa(g.props.children, v.mode, T, g.key)),
                  Hl(T, g),
                  (T.return = v),
                  (v = T))
                : ((T = Vu(g.type, g.key, g.props, null, v.mode, T)),
                  Hl(T, g),
                  (T.return = v),
                  (v = T));
            }
            return c(v);
          case ve:
            e: {
              for (L = g.key; d !== null;) {
                if (d.key === L)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === g.containerInfo &&
                    d.stateNode.implementation === g.implementation
                  ) {
                    (l(v, d.sibling),
                      (T = n(d, g.children || [])),
                      (T.return = v),
                      (v = T));
                    break e;
                  } else {
                    l(v, d);
                    break;
                  }
                else t(v, d);
                d = d.sibling;
              }
              ((T = Lc(g, v.mode, T)), (T.return = v), (v = T));
            }
            return c(v);
          case le:
            return ((g = va(g)), ee(v, d, g, T));
        }
        if (pe(g)) return R(v, d, g, T);
        if (X(g)) {
          if (((L = X(g)), typeof L != "function")) throw Error(r(150));
          return ((g = L.call(g)), Y(v, d, g, T));
        }
        if (typeof g.then == "function") return ee(v, d, $u(g), T);
        if (g.$$typeof === Ye) return ee(v, d, ku(v, g), T);
        Pu(v, g);
      }
      return (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
        ? ((g = "" + g),
          d !== null && d.tag === 6
            ? (l(v, d.sibling), (T = n(d, g)), (T.return = v), (v = T))
            : (l(v, d), (T = Hc(g, v.mode, T)), (T.return = v), (v = T)),
          c(v))
        : l(v, d);
    }
    return function (v, d, g, T) {
      try {
        Gn = 0;
        var L = ee(v, d, g, T);
        return ((Ka = null), L);
      } catch (K) {
        if (K === Za || K === Wu) throw K;
        var oe = ht(29, K, null, v.mode);
        return ((oe.lanes = T), (oe.return = v), oe);
      } finally {
      }
    };
  }
  var ga = gf(!0),
    pf = gf(!1),
    Ll = !1;
  function Kc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ql(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Bl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (be & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Gu(e)),
        ef(e, null, l),
        t
      );
    }
    return (Yu(e, a, t, l), Gu(e));
  }
  function Vn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), nr(e, l));
    }
  }
  function kc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = c) : (u = u.next = c), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Fc = !1;
  function Xn() {
    if (Fc) {
      var e = Qa;
      if (e !== null) throw e;
    }
  }
  function Qn(e, t, l, a) {
    Fc = !1;
    var n = e.updateQueue;
    Ll = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var o = s,
        y = o.next;
      ((o.next = null), c === null ? (u = y) : (c.next = y), (c = o));
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (s = j.lastBaseUpdate),
        s !== c &&
          (s === null ? (j.firstBaseUpdate = y) : (s.next = y),
          (j.lastBaseUpdate = o)));
    }
    if (u !== null) {
      var N = n.baseState;
      ((c = 0), (j = y = o = null), (s = u));
      do {
        var h = s.lane & -536870913,
          b = h !== s.lane;
        if (b ? (se & h) === h : (a & h) === h) {
          (h !== 0 && h === ma && (Fc = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var R = e,
              Y = s;
            h = t;
            var ee = l;
            switch (Y.tag) {
              case 1:
                if (((R = Y.payload), typeof R == "function")) {
                  N = R.call(ee, N, h);
                  break e;
                }
                N = R;
                break e;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (
                  ((R = Y.payload),
                  (h = typeof R == "function" ? R.call(ee, N, h) : R),
                  h == null)
                )
                  break e;
                N = J({}, N, h);
                break e;
              case 2:
                Ll = !0;
            }
          }
          ((h = s.callback),
            h !== null &&
              ((e.flags |= 64),
              b && (e.flags |= 8192),
              (b = n.callbacks),
              b === null ? (n.callbacks = [h]) : b.push(h)));
        } else
          ((b = {
            lane: h,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            j === null ? ((y = j = b), (o = N)) : (j = j.next = b),
            (c |= h));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((b = s),
            (s = b.next),
            (b.next = null),
            (n.lastBaseUpdate = b),
            (n.shared.pending = null));
        }
      } while (!0);
      (j === null && (o = N),
        (n.baseState = o),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = j),
        u === null && (n.shared.lanes = 0),
        (Zl |= c),
        (e.lanes = c),
        (e.memoizedState = N));
    }
  }
  function bf(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) bf(l[e], t);
  }
  var wl = Wt(null),
    ei = Wt(0);
  function jf(e, t) {
    ((e = Tl), Ce(ei, e), Ce(wl, t), (Tl = e | t.baseLanes));
  }
  function Wc() {
    (Ce(ei, Tl), Ce(wl, wl.current));
  }
  function Ic() {
    ((Tl = ei.current), Ie(wl), Ie(ei));
  }
  var et = Wt(null),
    it = null;
  function Yl(e) {
    var t = e.alternate;
    (Ce(tt, tt.current & 1),
      Ce(et, e),
      it === null &&
        (t === null || wl.current !== null || t.memoizedState !== null) &&
        (it = e));
  }
  function $c(e) {
    (Ce(tt, tt.current), Ce(et, e), it === null && (it = e));
  }
  function Sf(e) {
    e.tag === 22
      ? (Ce(tt, tt.current), Ce(et, e), it === null && (it = e))
      : Gl();
  }
  function Gl() {
    (Ce(tt, tt.current), Ce(et, et.current));
  }
  function Tt(e) {
    (Ie(et), it === e && (it = null), Ie(tt));
  }
  var tt = Wt(0);
  function Zn(e, t) {
    (Ce(et, et.current), Ce(tt, t));
  }
  function Pc(e) {
    (Ie(tt), Ie(et), it === e && (it = null));
  }
  function ti(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || So(l) || Eo(l)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var xl = 0,
    P = null,
    Me = null,
    Ve = null,
    li = !1,
    Ja = !1,
    pa = !1,
    ai = 0,
    Kn = 0,
    ka = null,
    sv = 0;
  function qe() {
    throw Error(r(321));
  }
  function es(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Et(e[l], t[l])) return !1;
    return !0;
  }
  function ts(e, t, l, a, n, u) {
    return (
      (xl = u),
      (P = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? ud : id),
      (pa = !1),
      (u = l(a, n)),
      (pa = !1),
      Ja && (u = Tf(t, l, a, n)),
      Ef(e),
      u
    );
  }
  function Ef(e) {
    V.H = ri;
    var t = Me !== null && Me.next !== null;
    if (((xl = 0), (Ve = Me = P = null), (li = !1), (Kn = 0), (ka = null), t))
      throw Error(r(300));
    e === null ||
      Xe ||
      ((e = e.dependencies), e !== null && Ju(e) && (Xe = !0));
  }
  function Tf(e, t, l, a) {
    P = e;
    var n = 0;
    do {
      if ((Ja && (ka = null), (Kn = 0), (Ja = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (Ve = Me = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((V.H = yv), (u = t(l, a)));
    } while (Ja);
    return u;
  }
  function ov() {
    var e = V.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Jn(t) : t),
      (e = e.useState()[0]),
      (Me !== null ? Me.memoizedState : null) !== e && (P.flags |= 1024),
      t
    );
  }
  function ls() {
    var e = ai !== 0;
    return ((ai = 0), e);
  }
  function as(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function ns(e) {
    if (li) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      li = !1;
    }
    ((xl = 0), (Ve = Me = P = null), (Ja = !1), (Kn = ai = 0), (ka = null));
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ve === null ? (P.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve);
  }
  function we() {
    if (Me === null) {
      var e = P.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Ve === null ? P.memoizedState : Ve.next;
    if (t !== null) ((Ve = t), (Me = e));
    else {
      if (e === null)
        throw P.alternate === null ? Error(r(467)) : Error(r(310));
      ((Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        Ve === null ? (P.memoizedState = Ve = e) : (Ve = Ve.next = e));
    }
    return Ve;
  }
  function ni() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Jn(e) {
    var t = Kn;
    return (
      (Kn += 1),
      ka === null && (ka = []),
      (e = hf(ka, e, t)),
      (t = P),
      (Ve === null ? t.memoizedState : Ve.next) === null &&
        ((t = t.alternate),
        (V.H = t === null || t.memoizedState === null ? ud : id)),
      e
    );
  }
  function ui(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Jn(e);
      if (e.$$typeof === O) return;
      if (e.$$typeof === Ye) return Pe(e);
    }
    throw Error(r(438, String(e)));
  }
  function us(e) {
    var t = null,
      l = P.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = ni()), (P.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = ut;
    return (t.index++, l);
  }
  function jl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ii(e) {
    var t = we();
    return is(t, Me, e);
  }
  function is(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        ((n.next = u.next), (u.next = c));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (c = null),
        o = null,
        y = t,
        j = !1;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (se & N) === N : (xl & N) === N) {
          var h = y.revertLane;
          if (h === 0)
            (o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              N === ma && (j = !0));
          else if ((xl & h) === h) {
            ((y = y.next), h === ma && (j = !0));
            continue;
          } else
            ((N = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              o === null ? ((s = o = N), (c = u)) : (o = o.next = N),
              (P.lanes |= h),
              (Zl |= h));
          ((N = y.action),
            pa && l(u, N),
            (u = y.hasEagerState ? y.eagerState : l(u, N)));
        } else
          ((h = {
            lane: N,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            o === null ? ((s = o = h), (c = u)) : (o = o.next = h),
            (P.lanes |= N),
            (Zl |= N));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (o === null ? (c = u) : (o.next = s),
        !Et(u, e.memoizedState) && ((Xe = !0), j && ((l = Qa), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = o),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function cs(e) {
    var t = we(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do ((u = e(u, c.action)), (c = c.next));
      while (c !== n);
      (Et(u, t.memoizedState) || (Xe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Nf(e, t, l) {
    var a = P,
      n = we(),
      u = ae;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var c = !Et((Me || n).memoizedState, l);
    if (
      (c && ((n.memoizedState = l), (Xe = !0)),
      (n = n.queue),
      rs(Mf.bind(null, a, n, e), [e]),
      (e =
        n.getSnapshot !== t ||
        c ||
        (Ve !== null && (Ve.memoizedState.tag & 1) !== 0)),
      Fa(e ? 9 : 8, { destroy: void 0 }, zf.bind(null, a, n, l, t), null),
      e)
    ) {
      if (((a.flags |= 2048), De === null)) throw Error(r(349));
      u || (xl & 127) !== 0 || Af(a, t, l);
    }
    return l;
  }
  function Af(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = P.updateQueue),
      t === null
        ? ((t = ni()), (P.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function zf(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Of(t) && Df(e));
  }
  function Mf(e, t, l) {
    return l(function () {
      Of(t) && Df(e);
    });
  }
  function Of(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Et(e, l);
    } catch {
      return !0;
    }
  }
  function Df(e) {
    var t = ca(e, 2);
    t !== null && pt(t, e, 2);
  }
  function ss(e) {
    var t = rt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), pa)) {
        Ml(!0);
        try {
          l();
        } finally {
          Ml(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Cf(e, t, l, a) {
    return ((e.baseState = l), is(e, Me, typeof a == "function" ? a : jl));
  }
  function rv(e, t, l, a, n) {
    if (oi(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      (V.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), _f(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function _f(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = V.T,
        c = {};
      ((c.types = u !== null ? u.types : null), (V.T = c));
      try {
        var s = l(n, a),
          o = V.S;
        (o !== null && o(c, s), Rf(e, t, s));
      } catch (y) {
        os(e, t, y);
      } finally {
        (u !== null && c.types !== null && (u.types = c.types), (V.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Rf(e, t, u));
      } catch (y) {
        os(e, t, y);
      }
  }
  function Rf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Uf(e, t, a);
          },
          function (a) {
            return os(e, t, a);
          },
        )
      : Uf(e, t, l);
  }
  function Uf(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      Hf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), _f(e, l))));
  }
  function os(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), Hf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Hf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Lf(e, t) {
    return t;
  }
  function qf(e, t) {
    if (ae) {
      var l = De.formState;
      if (l !== null) {
        e: {
          var a = P;
          if (ae) {
            if (_e) {
              t: {
                for (var n = _e, u = Ht; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = qt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((_e = qt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            Rl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = rt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = ld.bind(null, P, a)),
      (a.dispatch = l),
      (a = ss(!1)),
      (u = vs.bind(null, P, !1, a.queue)),
      (a = rt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = rv.bind(null, P, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Bf(e) {
    var t = we();
    return wf(t, Me, e);
  }
  function wf(e, t, l) {
    if (
      ((t = is(e, t, Lf)[0]),
      (e = ii(jl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Jn(t);
      } catch (c) {
        throw c === Za ? Wu : c;
      }
    else a = t;
    t = we();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((P.flags |= 2048),
        Fa(9, { destroy: void 0 }, fv.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function fv(e, t) {
    e.action = t;
  }
  function Yf(e) {
    var t = we(),
      l = Me;
    if (l !== null) return wf(t, l, e);
    (we(), (t = t.memoizedState), (l = we()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Fa(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = P.updateQueue),
      t === null && ((t = ni()), (P.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Gf() {
    return we().memoizedState;
  }
  function ci(e, t, l, a) {
    var n = rt();
    ((P.flags |= e),
      (n.memoizedState = Fa(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function si(e, t, l, a) {
    var n = we();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Me !== null && a !== null && es(a, Me.memoizedState.deps)
      ? (n.memoizedState = Fa(t, u, l, a))
      : ((P.flags |= e), (n.memoizedState = Fa(1 | t, u, l, a)));
  }
  function Vf(e, t) {
    ci(8390656, 8, e, t);
  }
  function rs(e, t) {
    si(2048, 8, e, t);
  }
  function dv(e) {
    P.flags |= 4;
    var t = P.updateQueue;
    if (t === null) ((t = ni()), (P.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Xf(e) {
    var t = we().memoizedState;
    return (
      dv({ ref: t, nextImpl: e }),
      function () {
        if ((be & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Qf(e, t) {
    return si(4, 2, e, t);
  }
  function Zf(e, t) {
    return si(4, 4, e, t);
  }
  function Kf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Jf(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), si(4, 4, Kf.bind(null, t, e), l));
  }
  function fs() {}
  function kf(e, t) {
    var l = we();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && es(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Ff(e, t) {
    var l = we();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && es(t, a[1])) return a[0];
    if (((a = e()), pa)) {
      Ml(!0);
      try {
        e();
      } finally {
        Ml(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function ds(e, t, l) {
    return l === void 0 || ((xl & 1073741824) !== 0 && (se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = um()), (P.lanes |= e), (Zl |= e), l);
  }
  function Wf(e, t, l, a) {
    return Et(l, t)
      ? l
      : wl.current !== null
        ? ((e = ds(e, l, a)), Et(e, t) || (Xe = !0), e)
        : (xl & 106) === 0 || ((xl & 1073741824) !== 0 && (se & 261930) === 0)
          ? ((Xe = !0), (e.memoizedState = l))
          : ((e = um()), (P.lanes |= e), (Zl |= e), t);
  }
  function If(e, t, l, a, n) {
    var u = W.p;
    W.p = u !== 0 && 8 > u ? u : 8;
    var c = V.T,
      s = {};
    ((s.types = c !== null ? c.types : null), (V.T = s), vs(e, !1, t, l));
    try {
      var o = n(),
        y = V.S;
      if (
        (y !== null && y(s, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var j = cv(o, a);
        kn(e, t, j, Mt(e));
      } else kn(e, t, a, Mt(e));
    } catch (N) {
      kn(e, t, { then: function () {}, status: "rejected", reason: N }, Mt());
    } finally {
      ((W.p = u),
        c !== null && s.types !== null && (c.types = s.types),
        (V.T = c));
    }
  }
  function mv() {}
  function ms(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = $f(e).queue;
    If(
      e,
      n,
      t,
      rl,
      l === null
        ? mv
        : function () {
            return (Pf(e), l(a));
          },
    );
  }
  function $f(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: rl,
      baseState: rl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: rl,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Pf(e) {
    var t = $f(e);
    (t.next === null && (t = e.alternate.memoizedState),
      kn(e, t.next.queue, {}, Mt()));
  }
  function hs() {
    return Pe(vn);
  }
  function ed() {
    return we().memoizedState;
  }
  function td() {
    return we().memoizedState;
  }
  function hv(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Mt();
          e = ql(l);
          var a = Bl(t, e, l);
          (a !== null && (pt(a, t, l), Vn(a, t, l)),
            (t = { cache: Vc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function vv(e, t, l) {
    var a = Mt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      oi(e)
        ? ad(t, l)
        : ((l = Rc(e, t, l, a)), l !== null && (pt(l, e, a), nd(l, t, a))));
  }
  function ld(e, t, l) {
    var a = Mt();
    kn(e, t, l, a);
  }
  function kn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (oi(e)) ad(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            s = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), Et(s, c)))
            return (Yu(e, t, n, 0), De === null && wu(), !1);
        } catch {
        } finally {
        }
      if (((l = Rc(e, t, n, a)), l !== null))
        return (pt(l, e, a), nd(l, t, a), !0);
    }
    return !1;
  }
  function vs(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: uo(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      oi(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = Rc(e, l, a, 2)), t !== null && pt(t, e, 2));
  }
  function oi(e) {
    var t = e.alternate;
    return e === P || (t !== null && t === P);
  }
  function ad(e, t) {
    Ja = li = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function nd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), nr(e, l));
    }
  }
  var ri = {
      readContext: Pe,
      use: ui,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useLayoutEffect: qe,
      useInsertionEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useSyncExternalStore: qe,
      useId: qe,
      useHostTransitionStatus: qe,
      useFormState: qe,
      useActionState: qe,
      useOptimistic: qe,
      useMemoCache: qe,
      useCacheRefresh: qe,
      useEffectEvent: qe,
    },
    ud = {
      readContext: Pe,
      use: ui,
      useCallback: function (e, t) {
        return ((rt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: Vf,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          ci(4194308, 4, Kf.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return ci(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ci(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var a = e();
        if (pa) {
          Ml(!0);
          try {
            e();
          } finally {
            Ml(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = rt();
        if (l !== void 0) {
          var n = l(t);
          if (pa) {
            Ml(!0);
            try {
              l(t);
            } finally {
              Ml(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = vv.bind(null, P, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ss(e);
        var t = e.queue,
          l = ld.bind(null, P, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: fs,
      useDeferredValue: function (e, t) {
        var l = rt();
        return ds(l, e, t);
      },
      useTransition: function () {
        var e = ss(!1);
        return (
          (e = If.bind(null, P, e.queue, !0, !1)),
          (rt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = P,
          n = rt();
        if (ae) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = t()), De === null)) throw Error(r(349));
          (se & 127) !== 0 || Af(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          Vf(Mf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Fa(9, { destroy: void 0 }, zf.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = rt(),
          t = De.identifierPrefix;
        if (ae) {
          var l = el,
            a = Pt;
          ((l = (a & ~(1 << (32 - jt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = ai++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = sv++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: hs,
      useFormState: qf,
      useActionState: qf,
      useOptimistic: function (e) {
        var t = rt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = vs.bind(null, P, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: us,
      useCacheRefresh: function () {
        return (rt().memoizedState = hv.bind(null, P));
      },
      useEffectEvent: function (e) {
        var t = rt(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((be & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    id = {
      readContext: Pe,
      use: ui,
      useCallback: kf,
      useContext: Pe,
      useEffect: rs,
      useImperativeHandle: Jf,
      useInsertionEffect: Qf,
      useLayoutEffect: Zf,
      useMemo: Ff,
      useReducer: ii,
      useRef: Gf,
      useState: function () {
        return ii(jl);
      },
      useDebugValue: fs,
      useDeferredValue: function (e, t) {
        var l = we();
        return Wf(l, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ii(jl)[0],
          t = we().memoizedState;
        return [typeof e == "boolean" ? e : Jn(e), t];
      },
      useSyncExternalStore: Nf,
      useId: ed,
      useHostTransitionStatus: hs,
      useFormState: Bf,
      useActionState: Bf,
      useOptimistic: function (e, t) {
        var l = we();
        return Cf(l, Me, e, t);
      },
      useMemoCache: us,
      useCacheRefresh: td,
      useEffectEvent: Xf,
    },
    yv = {
      readContext: Pe,
      use: ui,
      useCallback: kf,
      useContext: Pe,
      useEffect: rs,
      useImperativeHandle: Jf,
      useInsertionEffect: Qf,
      useLayoutEffect: Zf,
      useMemo: Ff,
      useReducer: cs,
      useRef: Gf,
      useState: function () {
        return cs(jl);
      },
      useDebugValue: fs,
      useDeferredValue: function (e, t) {
        var l = we();
        return Me === null ? ds(l, e, t) : Wf(l, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cs(jl)[0],
          t = we().memoizedState;
        return [typeof e == "boolean" ? e : Jn(e), t];
      },
      useSyncExternalStore: Nf,
      useId: ed,
      useHostTransitionStatus: hs,
      useFormState: Yf,
      useActionState: Yf,
      useOptimistic: function (e, t) {
        var l = we();
        return Me !== null
          ? Cf(l, Me, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: us,
      useCacheRefresh: td,
      useEffectEvent: Xf,
    };
  function ys(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : J({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var gs = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Mt(),
        n = ql(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = Bl(e, n, a)),
        t !== null && (pt(t, e, a), Vn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Mt(),
        n = ql(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Bl(e, n, a)),
        t !== null && (pt(t, e, a), Vn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Mt(),
        a = ql(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Bl(e, a, l)),
        t !== null && (pt(t, e, l), Vn(t, e, l)));
    },
  };
  function cd(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Un(l, a) || !Un(n, u)
          : !0
    );
  }
  function sd(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && gs.enqueueReplaceState(t, t.state, null));
  }
  function ba(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = J({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function od(e) {
    Bu(e);
  }
  function rd(e) {
    console.error(e);
  }
  function fd(e) {
    Bu(e);
  }
  function fi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function dd(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function ps(e, t, l) {
    return (
      (l = ql(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        fi(e, t);
      }),
      l
    );
  }
  function md(e) {
    return ((e = ql(e)), (e.tag = 3), e);
  }
  function hd(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          dd(t, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        (dd(t, l, a),
          typeof n != "function" &&
            (Kl === null ? (Kl = new Set([this])) : Kl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function gv(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && fa(t, l, n, !0),
        (l = et.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return (
              it === null ? _i() : l.alternate === null && Be === 0 && (Be = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Iu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  lo(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Iu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  lo(e, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (lo(e, a, n), _i(), !1);
    }
    if (ae)
      return (
        (t = et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Bc && ((e = Error(r(422), { cause: a })), qn(_t(e, l))))
          : (a !== Bc && ((t = Error(r(423), { cause: a })), qn(_t(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = _t(a, l)),
            (n = ps(e.stateNode, a, n)),
            kc(e, n),
            Be !== 4 && (Be = 2)),
        !1
      );
    var u = Error(r(520), { cause: a });
    if (
      ((u = _t(u, l)),
      lu === null ? (lu = [u]) : lu.push(u),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    ((a = _t(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = ps(l.stateNode, a, e)),
            kc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Kl === null || !Kl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = md(n)),
              hd(n, e, l, a),
              kc(l, n),
              !1
            );
          break;
        case 22:
          if (l.memoizedState !== null) return ((l.flags |= 65536), !1);
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var bs = Error(r(461)),
    Xe = !1;
  function Ze(e, t, l, a) {
    t.child = e === null ? pf(t, null, l, a) : ga(t, e.child, l, a);
  }
  function vd(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a) s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return (
      da(t),
      (a = ts(e, t, l, c, u, n)),
      (s = ls()),
      e !== null && !Xe
        ? (as(e, t, n), Sl(e, t, n))
        : (ae && s && Qu(t), (t.flags |= 1), Ze(e, t, a, n), t.child)
    );
  }
  function yd(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Uc(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), gd(e, t, u, a, n))
        : ((e = Vu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !zs(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Un), l(c, a) && e.ref === t.ref)
      )
        return Sl(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = yl(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function gd(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Un(u, a) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = a = u), zs(e, n)))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else return ((t.lanes = e.lanes), Sl(e, t, n));
    }
    return xs(e, t, l, a, n);
  }
  function pd(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null;)
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return bd(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fu(t, u !== null ? u.cachePool : null),
          u !== null ? jf(t, u) : Wc(),
          Sf(t));
      else
        return (
          (a = t.lanes = 536870912),
          bd(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (Fu(t, u.cachePool), jf(t, u), Gl(), (t.memoizedState = null))
        : (e !== null && Fu(t, null), Wc(), Gl());
    return (Ze(e, t, n, l), t.child);
  }
  function Fn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function bd(e, t, l, a, n) {
    var u = Qc();
    return (
      (u = u === null ? null : { parent: Ge._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Fu(t, null),
      Wc(),
      Sf(t),
      e !== null && fa(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function di(e, t) {
    return (
      (t = mi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function xd(e, t, l) {
    return (
      ga(t, e.child, null, l),
      (e = di(t, t.pendingProps)),
      (e.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      e
    );
  }
  function pv(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ae) {
        if (a.mode === "hidden")
          return (
            (e = di(t, a)),
            (t.lanes = 536870912),
            (e.memoizedState = { baseLanes: 0, cachePool: null }),
            Fn(null, e)
          );
        if (
          ($c(t),
          (e = _e)
            ? ((e = Km(e, Ht)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Cl !== null ? { id: Pt, overflow: el } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = lf(e)),
                (l.return = t),
                (t.child = l),
                (Je = t),
                (_e = null)))
            : (e = null),
          e === null)
        )
          throw Rl(t);
        return ((t.lanes = 536870912), null);
      }
      return di(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (($c(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = xd(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (Xe || fa(e, t, l, !1), (n = (l & e.childLanes) !== 0), Xe || n)
      ) {
        if (wl.current === null) {
          if (
            ((a = De),
            a !== null && ((c = ur(a, l)), c !== 0 && c !== u.retryLane))
          )
            throw ((u.retryLane = c), ca(e, c), pt(a, e, c), bs);
          _i();
        }
        t = xd(e, t, l);
      } else
        ((e = u.treeContext),
          (_e = qt(c.nextSibling)),
          (Je = t),
          (ae = !0),
          (_l = null),
          (Ht = !1),
          e !== null && uf(t, e),
          (t = di(t, a)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (e = yl(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Wa(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function xs(e, t, l, a, n) {
    return (
      da(t),
      (l = ts(e, t, l, a, void 0, n)),
      (a = ls()),
      e !== null && !Xe
        ? (as(e, t, n), Sl(e, t, n))
        : (ae && a && Qu(t), (t.flags |= 1), Ze(e, t, l, n), t.child)
    );
  }
  function jd(e, t, l, a, n, u) {
    return (
      da(t),
      (t.updateQueue = null),
      (l = Tf(t, a, l, n)),
      Ef(e),
      (a = ls()),
      e !== null && !Xe
        ? (as(e, t, u), Sl(e, t, u))
        : (ae && a && Qu(t), (t.flags |= 1), Ze(e, t, l, u), t.child)
    );
  }
  function Sd(e, t, l, a, n) {
    if ((da(t), t.stateNode === null)) {
      var u = Ya,
        c = l.contextType;
      (typeof c == "object" && c !== null && (u = Pe(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = gs),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Kc(t),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? Pe(c) : Ya),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (ys(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && gs.enqueueReplaceState(u, u.state, null),
          Qn(t, a, u, n),
          Xn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        o = ba(l, s);
      u.props = o;
      var y = u.context,
        j = l.contextType;
      ((c = Ya), typeof j == "object" && j !== null && (c = Pe(j)));
      var N = l.getDerivedStateFromProps;
      ((j =
        typeof N == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        j ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || y !== c) && sd(t, u, a, c)),
        (Ll = !1));
      var h = t.memoizedState;
      ((u.state = h),
        Qn(t, a, u, n),
        Xn(),
        (y = t.memoizedState),
        s || h !== y || Ll
          ? (typeof N == "function" && (ys(t, l, N, a), (y = t.memoizedState)),
            (o = Ll || cd(t, l, o, a, h, y, c))
              ? (j ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = c),
            (a = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        Jc(e, t),
        (c = t.memoizedProps),
        (j = ba(l, c)),
        (u.props = j),
        (N = t.pendingProps),
        (h = u.context),
        (y = l.contextType),
        (o = Ya),
        typeof y == "object" && y !== null && (o = Pe(y)),
        (s = l.getDerivedStateFromProps),
        (y =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== N || h !== o) && sd(t, u, a, o)),
        (Ll = !1),
        (h = t.memoizedState),
        (u.state = h),
        Qn(t, a, u, n),
        Xn());
      var b = t.memoizedState;
      c !== N ||
      h !== b ||
      Ll ||
      (e !== null && e.dependencies !== null && Ju(e.dependencies))
        ? (typeof s == "function" && (ys(t, l, s, a), (b = t.memoizedState)),
          (j =
            Ll ||
            cd(t, l, j, a, h, b, o) ||
            (e !== null && e.dependencies !== null && Ju(e.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, b, o),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, b, o)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = b)),
          (u.props = a),
          (u.state = b),
          (u.context = o),
          (a = j))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Wa(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ga(t, e.child, null, n)),
              (t.child = ga(t, null, l, n)))
            : Ze(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Sl(e, t, n)),
      e
    );
  }
  function Ed(e, t, l, a) {
    return (oa(), (t.flags |= 256), Ze(e, t, l, a), t.child);
  }
  var js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ss(e) {
    return { baseLanes: e, cachePool: df() };
  }
  function Es(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= zt), e);
  }
  function Td(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ae) {
        if (
          (n ? Yl(t) : Gl(),
          (e = _e)
            ? ((e = Km(e, Ht)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Cl !== null ? { id: Pt, overflow: el } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = lf(e)),
                (l.return = t),
                (t.child = l),
                (Je = t),
                (_e = null)))
            : (e = null),
          e === null)
        )
          throw Rl(t);
        return (Eo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (u = a.children),
        (a = a.fallback),
        n
          ? (Gl(),
            (n = t.mode),
            (u = mi({ mode: "hidden", children: u }, n)),
            (a = sa(a, n, l, null)),
            (u.return = t),
            (a.return = t),
            (u.sibling = a),
            (t.child = u),
            (a = t.child),
            (a.memoizedState = Ss(l)),
            (a.childLanes = Es(e, c, l)),
            (t.memoizedState = js),
            Fn(null, a))
          : (Yl(t), Ts(t, u))
      );
    }
    var s = e.memoizedState;
    if (s !== null) {
      var o = s.dehydrated;
      if (o !== null) return bv(e, t, u, c, a, o, s, l);
    }
    return n
      ? (Gl(),
        (n = a.fallback),
        (u = t.mode),
        (s = e.child),
        (o = s.sibling),
        (a = yl(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 1206910976),
        o !== null ? (n = yl(o, n)) : ((n = sa(n, u, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        Fn(null, a),
        (a = t.child),
        (n = e.child.memoizedState),
        n === null
          ? (n = Ss(l))
          : ((u = n.cachePool),
            u !== null
              ? ((s = Ge._currentValue),
                (u = u.parent !== s ? { parent: s, pool: s } : u))
              : (u = df()),
            (n = { baseLanes: n.baseLanes | l, cachePool: u })),
        (a.memoizedState = n),
        (a.childLanes = Es(e, c, l)),
        (t.memoizedState = js),
        Fn(e.child, a))
      : (Yl(t),
        (l = e.child),
        (e = l.sibling),
        (l = yl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Ts(e, t) {
    return (
      (t = mi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function mi(e, t) {
    return ((e = ht(22, e, null, t)), (e.lanes = 0), e);
  }
  function hi(e, t, l) {
    return (
      ga(t, e.child, null, l),
      (e = Ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bv(e, t, l, a, n, u, c, s) {
    if (l)
      return t.flags & 256
        ? (Yl(t), (t.flags &= -257), hi(e, t, s))
        : t.memoizedState !== null
          ? (Gl(), (t.child = e.child), (t.flags |= 128), null)
          : (Gl(),
            (u = n.fallback),
            (c = t.mode),
            (n = mi({ mode: "visible", children: n.children }, c)),
            (u = sa(u, c, s, null)),
            (u.flags |= 2),
            (n.return = t),
            (u.return = t),
            (n.sibling = u),
            (t.child = n),
            ga(t, e.child, null, s),
            (n = t.child),
            (n.memoizedState = Ss(s)),
            (n.childLanes = Es(e, a, s)),
            (t.memoizedState = js),
            Fn(null, n));
    if ((Yl(t), Eo(u))) {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var o = a.dgst;
      return (
        (a = o),
        a !== "" &&
          ((n = Error(r(419))),
          (n.stack = ""),
          (n.digest = a),
          qn({ value: n, source: null, stack: null })),
        hi(e, t, s)
      );
    }
    if ((Xe || fa(e, t, s, !1), (a = (s & e.childLanes) !== 0), Xe || a)) {
      if (wl.current !== null) return hi(e, t, s);
      if (
        ((a = De), a !== null && ((n = ur(a, s)), n !== 0 && n !== c.retryLane))
      )
        throw ((c.retryLane = n), ca(e, n), pt(a, e, n), bs);
      return (So(u) || _i(), hi(e, t, s));
    }
    return So(u)
      ? ((t.flags |= 192), (t.child = e.child), null)
      : ((e = c.treeContext),
        (_e = qt(u.nextSibling)),
        (Je = t),
        (ae = !0),
        (_l = null),
        (Ht = !1),
        e !== null && uf(t, e),
        (t = Ts(t, n.children)),
        (t.flags |= 134221824),
        t);
  }
  function Nd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Ku(e.return, t, l));
  }
  function Ad(e) {
    for (var t = null; e !== null;) {
      var l = e.alternate;
      (l !== null && ti(l) === null && (t = e), (e = e.sibling));
    }
    return t;
  }
  function vi(e, t, l, a, n, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = l),
        (c.tailMode = n),
        (c.treeForkCount = u));
  }
  function Ns(e) {
    var t = e.child;
    for (e.child = null; t !== null;) {
      var l = t.sibling;
      ((t.sibling = e.child), (e.child = t), (t = l));
    }
  }
  function As(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var c = tt.current;
    if (t.flags & 128) return (Zn(t, c), null);
    var s = (c & 2) !== 0;
    if (
      (s ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      Zn(t, c),
      n === "backwards" && e !== null
        ? (Ns(e), Ze(e, t, a, l), Ns(e))
        : Ze(e, t, a, l),
      (a = ae ? Ln : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Nd(e, l, t);
        else if (e.tag === 19) Nd(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "backwards":
        ((l = Ad(t.child)),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null), Ns(t)),
          vi(t, !0, n, null, u, a));
        break;
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null;) {
          if (((e = n.alternate), e !== null && ti(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        vi(t, !0, l, null, u, a);
        break;
      case "together":
        vi(t, !1, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((l = Ad(t.child)),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          vi(t, !1, n, l, u, a));
    }
    return t.child;
  }
  function zd(e, t, l) {
    var a = t.pendingProps;
    return (Ul(t, t.type, a.value), Ze(e, t, a.children, l), t.child);
  }
  function Sl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Zl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((fa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, l = yl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = yl(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function zs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ju(e)));
  }
  function xv(e, t, l) {
    switch (t.tag) {
      case 3:
        (xu(t, t.stateNode.containerInfo),
          Ul(t, Ge, e.memoizedState.cache),
          oa());
        break;
      case 27:
      case 5:
        ec(t);
        break;
      case 4:
        xu(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ul(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), $c(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (Yl(t), (t.flags |= 128), null);
          a = fa(e, t, l, !1);
          var n = t.child.childLanes;
          return a || (l & n) !== 0
            ? Td(e, t, l)
            : (Yl(t), (e = Sl(e, t, l)), e !== null ? e.sibling : null);
        }
        Yl(t);
        break;
      case 19:
        if (t.flags & 128) return As(e, t, l);
        if (
          ((n = (e.flags & 128) !== 0),
          (a = (l & t.childLanes) !== 0),
          a || (fa(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return As(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Zn(t, tt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), pd(e, t, l, t.pendingProps));
      case 24:
        Ul(t, Ge, e.memoizedState.cache);
    }
    return Sl(e, t, l);
  }
  function Md(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!zs(e, l) && (t.flags & 128) === 0) return ((Xe = !1), xv(e, t, l));
        Xe = (e.flags & 131072) !== 0;
      }
    else ((Xe = !1), ae && (t.flags & 1048576) !== 0 && nf(t, Ln, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = va(t.elementType)), (t.type = e), typeof e == "function"))
            Uc(e)
              ? ((a = ba(e, a)), (t.tag = 1), (t = Sd(null, t, e, a, l)))
              : ((t.tag = 0), (t = xs(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === A) {
                ((t.tag = 11), (t = vd(null, t, e, a, l)));
                break e;
              } else if (n === ne) {
                ((t.tag = 14), (t = yd(null, t, e, a, l)));
                break e;
              } else if (n === Ye) {
                ((t.tag = 10), (t.type = e), (t = zd(null, t, l)));
                break e;
              }
            }
            throw ((t = ye(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return xs(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = ba(a, t.pendingProps)), Sd(e, t, a, n, l));
      case 3:
        e: {
          if ((xu(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Jc(e, t), Qn(t, a, null, l));
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            Ul(t, Ge, a),
            a !== u.cache && Gc(t, [Ge], l, !0),
            Xn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Ed(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = _t(Error(r(424)), t)), qn(n), (t = Ed(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                _e = qt(e.firstChild),
                  Je = t,
                  ae = !0,
                  _l = null,
                  Ht = !0,
                  l = pf(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 134221824), (l = l.sibling));
            }
          else {
            if ((oa(), a === n)) {
              t = Sl(e, t, l);
              break e;
            }
            Ze(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Wa(e, t),
          e === null
            ? (l = Pm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ae || (t.stateNode = _m(t.type, t.pendingProps, Al.current, t))
            : (t.memoizedState = Pm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ec(t),
          e === null &&
            ae &&
            ((a = t.stateNode = Fm(t.type, t.pendingProps, Al.current)),
            (Je = t),
            (Ht = !0),
            (n = _e),
            Fl(t.type) ? ((To = n), (_e = qt(a.firstChild))) : (_e = n)),
          Ze(e, t, t.pendingProps.children, l),
          Wa(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ae &&
            ((n = a = _e) &&
              ((a = h0(a, t.type, t.pendingProps, Ht)),
              a !== null
                ? ((t.stateNode = a),
                  (Je = t),
                  (_e = qt(a.firstChild)),
                  (Ht = !1),
                  (n = !0))
                : (n = !1)),
            n || Rl(t)),
          ec(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          vo(n, u) ? (a = null) : c !== null && vo(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = ts(e, t, ov, null, null, l)), (vn._currentValue = n)),
          Wa(e, t),
          Ze(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ae &&
            ((e = l = _e) &&
              ((l = v0(l, t.pendingProps, Ht)),
              l !== null
                ? ((t.stateNode = l), (Je = t), (_e = null), (e = !0))
                : (e = !1)),
            e || Rl(t)),
          null
        );
      case 13:
        return Td(e, t, l);
      case 4:
        return (
          xu(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ga(t, null, a, l)) : Ze(e, t, a, l),
          t.child
        );
      case 11:
        return vd(e, t, t.type, t.pendingProps, l);
      case 7:
        return ((a = t.pendingProps), Wa(e, t), Ze(e, t, a, l), t.child);
      case 8:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ze(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return zd(e, t, l);
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          da(t),
          (n = Pe(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ze(e, t, a, l),
          t.child
        );
      case 14:
        return yd(e, t, t.type, t.pendingProps, l);
      case 15:
        return gd(e, t, t.type, t.pendingProps, l);
      case 19:
        return As(e, t, l);
      case 31:
        return pv(e, t, l);
      case 22:
        return pd(e, t, l, t.pendingProps);
      case 24:
        return (
          da(t),
          (a = Pe(Ge)),
          e === null
            ? ((n = Qc()),
              n === null &&
                ((n = De),
                (u = Vc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Kc(t),
              Ul(t, Ge, n))
            : ((e.lanes & l) !== 0 && (Jc(e, t), Qn(t, null, null, l), Xn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Ul(t, Ge, a))
                : ((a = u.cache),
                  Ul(t, Ge, a),
                  a !== n.cache && Gc(t, [Ge], l, !0))),
          Ze(e, t, t.pendingProps.children, l),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = t.pendingProps),
          a.name != null && a.name !== "auto"
            ? (t.flags |= e === null ? 18882560 : 18874368)
            : ae && Qu(t),
          e !== null && e.memoizedProps.name !== a.name
            ? (t.flags |= 4194816)
            : Wa(e, t),
          Ze(e, t, a.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function El(e) {
    e.flags |= 4;
  }
  function Ms(e, t, l, a, n) {
    var u;
    if (
      ((u = (e.mode & 32) !== 0) &&
        (u =
          l === null
            ? ah(t, a)
            : ah(t, a) && (a.src !== l.src || a.srcSet !== l.srcSet)),
      u)
    ) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (om()) e.flags |= 8192;
        else throw ((ya = Iu), Zc);
    } else e.flags &= -16777217;
  }
  function Od(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !nh(t)))
      if (om()) e.flags |= 8192;
      else throw ((ya = Iu), Zc);
  }
  function yi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? lr() : 536870912), (e.lanes |= t), (tn |= t)));
  }
  function Wn(e, t) {
    if (!ae)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = e.tail, a = null; l !== null;)
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (t = e.tail, l = null; t !== null;)
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 1206910976),
          (a |= n.flags & 1206910976),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function jv(e, t, l) {
    var a = t.pendingProps;
    switch ((qc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Re(t), null);
      case 1:
        return (Re(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          bl(Ge),
          za(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Xa(t)
              ? El(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wc())),
          Re(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (El(t),
              u !== null ? (Re(t), Od(t, u)) : (Re(t), Ms(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (El(t), Re(t), Od(t, u))
                : (Re(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && El(t),
                Re(t),
                Ms(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (ju(t),
          (l = Al.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && El(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Re(t), (t.subtreeFlags &= -33554433), null);
          }
          ((e = It.current),
            Xa(t) ? cf(t) : ((e = Fm(n, a, l)), (t.stateNode = e), El(t)));
        }
        return (Re(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((ju(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && El(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Re(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((u = It.current), Xa(t))) cf(t);
          else {
            var c = cu(Al.current);
            switch (u) {
              case 1:
                u = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = c.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? c.createElement("select", { is: a.is })
                        : c.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? c.createElement(n, { is: a.is })
                        : c.createElement(n);
                }
            }
            ((u[$e] = t), (u[mt] = a));
            e: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = u;
            e: switch ((at(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && El(t);
          }
        }
        return (
          Re(t),
          (t.subtreeFlags &= -33554433),
          Ms(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && El(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = Al.current), Xa(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Je),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[$e] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Mm(e.nodeValue, l)
              )),
              e || Rl(t, !0));
          } else
            ((e = cu(e).createTextNode(a)), (e[$e] = t), (t.stateNode = e));
        }
        return (Re(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Xa(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[$e] = t;
            } else
              (oa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Re(t), (e = !1));
          } else
            ((l = wc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Re(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Xa(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[$e] = t;
            } else
              (oa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Re(t), (n = !1));
          } else
            ((n = wc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              yi(t, t.updateQueue),
              Re(t),
              null)
        );
      case 4:
        return (
          za(),
          e === null && oo(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          Re(t),
          null
        );
      case 10:
        return (bl(t.type), Re(t), null);
      case 19:
        if ((Pc(t), (a = t.memoizedState), a === null)) return (Re(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Wn(a, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = ti(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Wn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      yi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (tf(l, e), (l = l.sibling));
                  return (
                    Zn(t, (tt.current & 1) | 2),
                    ae && gl(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              bt() > Mi &&
              ((t.flags |= 128), (n = !0), Wn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = ti(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yi(t, e),
                Wn(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !u.alternate &&
                  !ae)
              )
                return (Re(t), null);
            } else
              2 * bt() - a.renderingStartTime > Mi &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Wn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        if (a.tail !== null) {
          e = a.tail;
          e: {
            for (l = e; l !== null;) {
              if (l.alternate !== null) {
                l = !1;
                break e;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return (
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = bt()),
            (e.sibling = null),
            (u = tt.current),
            (u = n ? (u & 1) | 2 : u & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !l || ae
              ? Zn(t, u)
              : ((l = u), Ce(et, t), Ce(tt, l), it === null && (it = t)),
            ae && gl(t, a.treeForkCount),
            e
          );
        }
        return (Re(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Ic(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Re(t),
          (l = t.updateQueue),
          l !== null && yi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && Ie(ha),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          bl(Ge),
          Re(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), Re(t), null);
    }
    throw Error(r(156, t.tag));
  }
  function Sv(e, t) {
    switch ((qc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          bl(Ge),
          za(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ju(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(r(340));
          oa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          oa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (
          Pc(t),
          (e = t.flags),
          e & 65536
            ? ((t.flags = (e & -65537) | 128),
              (e = t.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (za(), null);
      case 10:
        return (bl(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Ic(),
          e !== null && Ie(ha),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (bl(Ge), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dd(e, t) {
    switch ((qc(t), t.tag)) {
      case 3:
        (bl(Ge), za());
        break;
      case 26:
      case 27:
      case 5:
        ju(t);
        break;
      case 4:
        za();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        Pc(t);
        break;
      case 10:
        bl(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), Ic(), e !== null && Ie(ha));
        break;
      case 24:
        bl(Ge);
    }
  }
  function In(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            ((a = u()), (c.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      Te(t, t.return, s);
    }
  }
  function Vl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              s = c.destroy;
            if (s !== void 0) {
              ((c.destroy = void 0), (n = t));
              var o = l,
                y = s;
              try {
                y();
              } catch (j) {
                Te(n, o, j);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (j) {
      Te(t, t.return, j);
    }
  }
  function Cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        xf(t, l);
      } catch (a) {
        Te(e, e.return, a);
      }
    }
  }
  function _d(e, t, l) {
    ((l.props = ba(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Te(e, t, a);
    }
  }
  function tl(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            var n = e.stateNode,
              u = hl(e.memoizedProps, n);
            ((n.ref === null || n.ref.name !== u) && (n.ref = wm(u)),
              (a = n.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new Ot(e);
              (x(e.child, !1, d0, c, void 0, void 0), (e.stateNode = c));
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (s) {
      Te(e, t, s);
    }
  }
  function lt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Te(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Te(e, t, n);
        }
      else l.current = null;
  }
  function gi(e, t) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      t !== null
    )
      for (var l = 0; l < t.length; l++) Zm(e.stateNode, t[l]);
  }
  function Rd(e) {
    for (
      var t = e.return;
      t !== null && (Ds(t) && Zm(e.stateNode, t.stateNode), !Os(t));
    )
      t = t.return;
  }
  function $n(e) {
    for (
      var t = e.return;
      t !== null && (Ds(t) && m0(e.stateNode, t.stateNode), !Os(t));
    )
      t = t.return;
  }
  function Os(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Ds(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Cs(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function _s(e, t, l) {
    try {
      var a = e.stateNode;
      (kv(a, e.type, l, t), (a[mt] = t));
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function Ud(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Fl(e.type)) ||
      e.tag === 4
    );
  }
  function Rs(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Ud(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Fl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Us(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((n = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(n, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(n),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = $t)),
        gi(e, a),
        (ge = !0));
    else if (
      n !== 4 &&
      (n === 27 &&
        (gi(e, a), (a = null), Fl(e.type) && ((l = e.stateNode), (t = null))),
      (e = e.child),
      e !== null)
    )
      for (Us(e, t, l, a), e = e.sibling; e !== null;)
        (Us(e, t, l, a), (e = e.sibling));
  }
  function pi(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((n = e.stateNode),
        t ? l.insertBefore(n, t) : l.appendChild(n),
        gi(e, a),
        (ge = !0));
    else if (
      n !== 4 &&
      (n === 27 && (gi(e, a), (a = null), Fl(e.type) && (l = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (pi(e, t, l, a), e = e.sibling; e !== null;)
        (pi(e, t, l, a), (e = e.sibling));
  }
  function Hd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length;)
        t.removeAttributeNode(n[0]);
      (at(t, a, l), (t[$e] = e), (t[mt] = l));
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var bi = !1,
    Nt = null;
  function Ld(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (bi = !0);
  }
  var ll = null;
  function qd() {
    var e = ll;
    return ((ll = null), e);
  }
  var vt = 0;
  function Ia(e, t, l, a, n) {
    return ((vt = 0), Bd(e.child, t, l, a, n));
  }
  function Bd(e, t, l, a, n) {
    for (var u = !1; e !== null;) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var s = po(c);
          (a.push(s), s.view && (u = !0));
        } else u || (po(c).view && (u = !0));
        ((bi = !0), qm(c, vt === 0 ? t : t + "_" + vt, l), vt++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && n) || (Bd(e.child, t, l, a, n) && (u = !0)));
      e = e.sibling;
    }
    return u;
  }
  function al(e, t) {
    for (; e !== null;)
      (e.tag === 5
        ? Bm(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && t) || al(e.child, t)),
        (e = e.sibling));
  }
  function xi(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (xi(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(r(544));
          var l = t.name;
          ((t = vl(t.default, t.share)),
            t !== "none" && (Ia(e, l, t, null, !1) || al(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function Hs(e, t) {
    if (e.tag === 30) {
      var l = e.stateNode,
        a = e.memoizedProps,
        n = hl(a, l),
        u = vl(a.default, l.paired ? a.share : a.enter);
      u !== "none"
        ? Ia(e, n, u, null, !1)
          ? (xi(e), l.paired || t || un(e, a.onEnter))
          : al(e.child, !1)
        : xi(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Hs(e, t), (e = e.sibling));
    else xi(e);
  }
  function Ls(e) {
    if (Nt !== null && Nt.size !== 0) {
      var t = Nt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var l = e.memoizedProps,
                a = l.name;
              if (a != null && a !== "auto") {
                var n = t.get(a);
                if (n !== void 0) {
                  var u = vl(l.default, l.share);
                  if (
                    (u !== "none" &&
                      (Ia(e, a, u, null, !1)
                        ? ((u = e.stateNode),
                          (n.paired = u),
                          (u.paired = n),
                          un(e, l.onShare))
                        : al(e.child, !1)),
                    t.delete(a),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Ls(e);
          }
          e = e.sibling;
        }
    }
  }
  function qs(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        l = hl(t, e.stateNode),
        a = Nt !== null ? Nt.get(l) : void 0,
        n = vl(t.default, a !== void 0 ? t.share : t.exit);
      (n !== "none" &&
        (Ia(e, l, n, null, !1)
          ? a !== void 0
            ? ((n = e.stateNode),
              (a.paired = n),
              (n.paired = a),
              Nt.delete(l),
              un(e, t.onShare))
            : un(e, t.onExit)
          : al(e.child, !1)),
        Nt !== null && Ls(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (qs(e), (e = e.sibling));
    else Nt !== null && Ls(e);
  }
  function wd(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          l = hl(t, e.stateNode);
        ((t = vl(t.default, t.update)),
          (e.flags &= -5),
          t !== "none" && Ia(e, l, t, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && wd(e);
      e = e.sibling;
    }
  }
  function Bs(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && ((t.paired = null), al(e.child, !1));
          }
          Bs(e);
        }
        e = e.sibling;
      }
  }
  function ji(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), al(e.child, !1), Bs(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (ji(e), (e = e.sibling));
    else Bs(e);
  }
  function Yd(e) {
    for (e = e.child; e !== null;)
      (e.tag === 30
        ? al(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && Yd(e),
        (e = e.sibling));
  }
  function ws(e, t, l, a, n, u, c) {
    for (var s = !1; t !== null;) {
      if (t.tag === 5) {
        var o = t.stateNode;
        if (u !== null && vt < u.length) {
          var y = u[vt],
            j = po(o);
          (y.view || j.view) && (s = !0);
          var N;
          if ((N = (e.flags & 4) === 0))
            if (j.clip) N = !0;
            else {
              N = y.rect;
              var h = j.rect;
              N =
                N.y !== h.y ||
                N.x !== h.x ||
                N.height !== h.height ||
                N.width !== h.width;
            }
          (N && (e.flags |= 4),
            j.abs
              ? (j = !y.abs)
              : ((y = y.rect),
                (j = j.rect),
                (j = y.height !== j.height || y.width !== j.width)),
            j && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && qm(o, vt === 0 ? l : l + "_" + vt, n),
          (s && (e.flags & 4) !== 0) ||
            (ll === null && (ll = []),
            ll.push(o, vt === 0 ? a : a + "_" + vt, t.memoizedProps)),
          vt++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && c
            ? (e.flags |= t.flags & 32)
            : ws(e, t.child, l, a, n, u, c) && (s = !0));
      t = t.sibling;
    }
    return s;
  }
  function Gd(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var l = e.memoizedProps,
          a = e.stateNode,
          n = hl(l, a),
          u = vl(l.default, l.update),
          c;
        ((c = e.memoizedState), (e.memoizedState = null), (a = e));
        var s = e.child;
        ((vt = 0),
          (n = ws(a, s, n, n, u, c, !1)),
          (e.flags & 4) !== 0 && n && un(e, l.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && Gd(e);
      e = e.sibling;
    }
  }
  var ke = !1,
    je = !1,
    nl = !1,
    Ys = !1,
    Vd = typeof WeakSet == "function" ? WeakSet : Set,
    Fe = null,
    ul = !1,
    Pn = !1,
    Si = !1,
    Gs = !1;
  function Ev(e, t, l) {
    if (((e = e.containerInfo), (mo = yn), (e = Zr(e)), zc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var u = n.anchorOffset,
              c = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, c.nodeType);
            } catch {
              a = null;
              break e;
            }
            var s = 0,
              o = -1,
              y = -1,
              j = 0,
              N = 0,
              h = e,
              b = null;
            t: for (;;) {
              for (
                var R;
                h !== a || (u !== 0 && h.nodeType !== 3) || (o = s + u),
                  h !== c || (n !== 0 && h.nodeType !== 3) || (y = s + n),
                  h.nodeType === 3 && (s += h.nodeValue.length),
                  (R = h.firstChild) !== null;
              )
                ((b = h), (h = R));
              for (;;) {
                if (h === e) break t;
                if (
                  (b === a && ++j === u && (o = s),
                  b === c && ++N === n && (y = s),
                  (R = h.nextSibling) !== null)
                )
                  break;
                ((h = b), (b = h.parentNode));
              }
              h = R;
            }
            a = o === -1 || y === -1 ? null : { start: o, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      ho = { focusedElem: e, selectionRange: a },
        yn = !1,
        l = (l & 335544064) === l,
        Fe = t,
        t = l ? 9270 : 1024;
      Fe !== null;
    ) {
      if (((e = Fe), l && ((a = e.deletions), a !== null)))
        for (u = 0; u < a.length; u++) l && qs(a[u]);
      if (e.alternate === null && (e.flags & 2) !== 0) (l && Ld(e), Ei(l));
      else {
        if (e.tag === 22) {
          if (((a = e.alternate), e.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && l && qs(a), Ei(l));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (l && Ld(e), Ei(l));
            continue;
          }
        }
        ((a = e.child),
          (e.subtreeFlags & t) !== 0 && a !== null
            ? ((a.return = e), (Fe = a))
            : (l && wd(e), Ei(l)));
      }
    }
    Nt = null;
  }
  function Ei(e) {
    for (; Fe !== null;) {
      var t = Fe,
        l = e,
        a = t.alternate,
        n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            ((l = void 0), (n = a.memoizedProps), (a = a.memoizedState));
            var u = t.stateNode;
            try {
              var c = ba(t.type, n);
              ((l = u.getSnapshotBeforeUpdate(c, a)),
                (u.__reactInternalSnapshotBeforeUpdate = l));
            } catch (s) {
              Te(t, t.return, s);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (((a = t.stateNode.containerInfo), (l = a.nodeType), l === 9))
              jo(a);
            else if (l === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  jo(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          l &&
            a !== null &&
            ((l = hl(a.memoizedProps, a.stateNode)),
            (n = t.memoizedProps),
            (n = vl(n.default, n.update)),
            n !== "none" && Ia(a, l, n, (a.memoizedState = []), !0));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(r(163));
      }
      if (((a = t.sibling), a !== null)) {
        ((a.return = t.return), (Fe = a));
        break;
      }
      Fe = t.return;
    }
  }
  function Xd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (il(e, l), a & 4 && In(5, l));
        break;
      case 1:
        if ((il(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              Te(l, l.return, c);
            }
          else {
            var n = ba(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Te(l, l.return, c);
            }
          }
        (a & 64 && Cd(l), a & 512 && tl(l, l.return));
        break;
      case 3:
        if ((il(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            xf(e, t);
          } catch (c) {
            Te(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Hd(l);
      case 26:
      case 5:
        (il(e, l), t === null && a & 4 && Cs(l), a & 512 && tl(l, l.return));
        break;
      case 12:
        il(e, l);
        break;
      case 31:
        (il(e, l), a & 4 && Jd(e, l));
        break;
      case 13:
        (il(e, l),
          a & 4 && kd(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Hv.bind(null, l)), y0(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ke), !a)) {
          var u = (t !== null && t.memoizedState !== null) || je;
          ((t = ke),
            (n = je),
            (ke = a),
            (je = u) && !n
              ? ((a = 2),
                (l.subtreeFlags & 8772) !== 0 && (a |= 1),
                Zt(e, l, a))
              : il(e, l),
            (ke = t),
            (je = n));
        }
        break;
      case 30:
        (il(e, l), a & 512 && tl(l, l.return));
        break;
      case 7:
        a & 512 && tl(l, l.return);
      default:
        il(e, l);
    }
  }
  function Vs(e, t) {
    for (e = e.child; e !== null;) (Qd(e, t), (e = e.sibling));
  }
  function Qd(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var l = e.stateNode;
          if (t) {
            var a = l.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var n = e.stateNode,
              u = e.memoizedProps.style,
              c = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display =
              c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (o) {
          Te(e, e.return, o);
        }
        Xs(e, t);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = t ? "" : e.memoizedProps), (ge = !0));
        } catch (o) {
          Te(e, e.return, o);
        }
        break;
      case 18:
        try {
          var s = e.stateNode;
          t ? Lm(s, !0) : Lm(e.stateNode, !1);
        } catch (o) {
          Te(e, e.return, o);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Vs(e, t);
        break;
      default:
        Vs(e, t);
    }
  }
  function Xs(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null;) {
        e: {
          var l = e,
            a = t;
          switch (l.tag) {
            case 4:
              Qd(l, a);
              break e;
            case 22:
              l.memoizedState === null && Xs(l, a);
              break e;
            default:
              Xs(l, a);
          }
        }
        e = e.sibling;
      }
  }
  function Zd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Zd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Mu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ue = null,
    yt = !1;
  function Xt(e, t, l) {
    for (l = l.child; l !== null;) (Kd(e, t, l), (l = l.sibling));
  }
  function Kd(e, t, l) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Sn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (je || lt(l, t),
          Xt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode &&
              !je &&
              ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        (je || lt(l, t), $n(l));
        var a = Ue,
          n = yt;
        (Fl(l.type) && ((Ue = l.stateNode), (yt = !1)),
          Xt(e, t, l),
          Wm(l.stateNode, l.type, l.memoizedProps),
          (Ue = a),
          (yt = n));
        break;
      case 5:
        (je || lt(l, t), $n(l));
      case 6:
        if (
          (l.tag === 6 && $n(l),
          (a = Ue),
          (n = yt),
          (Ue = null),
          Xt(e, t, l),
          (Ue = a),
          (yt = n),
          Ue !== null)
        )
          if (yt)
            try {
              ((Ue.nodeType === 9
                ? Ue.body
                : Ue.nodeName === "HTML"
                  ? Ue.ownerDocument.body
                  : Ue
              ).removeChild(l.stateNode),
                (ge = !0));
            } catch (u) {
              Te(l, t, u);
            }
          else
            try {
              (Ue.removeChild(l.stateNode), (ge = !0));
            } catch (u) {
              Te(l, t, u);
            }
        break;
      case 18:
        Ue !== null &&
          (yt
            ? ((e = Ue),
              Hm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              gn(e))
            : Hm(Ue, l.stateNode));
        break;
      case 4:
        ((a = Ue),
          (n = yt),
          (Ue = l.stateNode.containerInfo),
          (yt = !0),
          Xt(e, t, l),
          (Ue = a),
          (yt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Vl(2, l, t), je || Vl(4, l, t), Xt(e, t, l));
        break;
      case 1:
        (je ||
          (lt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && _d(l, t, a)),
          Xt(e, t, l));
        break;
      case 21:
        Xt(e, t, l);
        break;
      case 22:
        ((je = (a = je) || l.memoizedState !== null), Xt(e, t, l), (je = a));
        break;
      case 30:
        (lt(l, t), Xt(e, t, l));
        break;
      case 7:
        (je || lt(l, t), Xt(e, t, l));
        break;
      default:
        Xt(e, t, l);
    }
  }
  function Jd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        gn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function kd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        gn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Tv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Vd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Vd()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ti(e, t) {
    var l = Tv(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Lv.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ft(e, t, l) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n],
          c = e,
          s = t,
          o = s;
        e: for (; o !== null;) {
          switch (o.tag) {
            case 27:
              if (Fl(o.type)) {
                ((Ue = o.stateNode), (yt = !1));
                break e;
              }
              break;
            case 5:
              ((Ue = o.stateNode), (yt = !1));
              break e;
            case 3:
            case 4:
              ((Ue = o.stateNode.containerInfo), (yt = !0));
              break e;
          }
          o = o.return;
        }
        if (Ue === null) throw Error(r(160));
        (Kd(c, s, u),
          (Ue = null),
          (yt = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (Fd(t, e, l), (t = t.sibling));
  }
  var Qt = null;
  function Fd(e, t, l) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          n & 4 &&
          ((a = e.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var u = 0; u < a.length; u++) {
            var c = a[u];
            c.ref.impl = c.nextImpl;
          }
        (ft(t, e, l),
          dt(e),
          n & 4 && (Vl(3, e, e.return), In(3, e), Vl(5, e, e.return)));
        break;
      case 1:
        (ft(t, e, l),
          dt(e),
          n & 512 && (je || a === null || lt(a, a.return)),
          n & 64 &&
            ke &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? t : l.concat(t))))));
        break;
      case 26:
        if (
          ((u = Qt),
          ft(t, e, l),
          dt(e),
          n & 512 && (je || a === null || lt(a, a.return)),
          n & 4)
        )
          if (
            ((n = a !== null ? a.memoizedState : null),
            (l = e.memoizedState),
            a === null)
          )
            if (l === null)
              if (e.stateNode === null)
                if (ke)
                  e.stateNode = _m(e.type, e.memoizedProps, t.containerInfo, e);
                else {
                  e: {
                    ((t = e.type),
                      (l = e.memoizedProps),
                      (n = u.ownerDocument || u));
                    t: switch (t) {
                      case "title":
                        ((a = n.getElementsByTagName("title")[0]),
                          (!a ||
                            a[Nn] ||
                            a[$e] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = n.createElement(t)),
                            n.head.insertBefore(
                              a,
                              n.querySelector("head > title"),
                            )),
                          at(a, t, l),
                          (a[$e] = e),
                          Ke(a),
                          (t = a));
                        break e;
                      case "link":
                        if (
                          (u = lh("link", "href", n).get(t + (l.href || "")))
                        ) {
                          for (c = 0; c < u.length; c++)
                            if (
                              ((a = u[c]),
                              a.getAttribute("href") ===
                                (l.href == null || l.href === ""
                                  ? null
                                  : l.href) &&
                                a.getAttribute("rel") ===
                                  (l.rel == null ? null : l.rel) &&
                                a.getAttribute("title") ===
                                  (l.title == null ? null : l.title) &&
                                a.getAttribute("crossorigin") ===
                                  (l.crossOrigin == null
                                    ? null
                                    : l.crossOrigin))
                            ) {
                              u.splice(c, 1);
                              break t;
                            }
                        }
                        ((a = n.createElement(t)),
                          at(a, t, l),
                          n.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (u = lh("meta", "content", n).get(
                            t + (l.content || ""),
                          ))
                        ) {
                          for (c = 0; c < u.length; c++)
                            if (
                              ((a = u[c]),
                              a.getAttribute("content") ===
                                (l.content == null ? null : "" + l.content) &&
                                a.getAttribute("name") ===
                                  (l.name == null ? null : l.name) &&
                                a.getAttribute("property") ===
                                  (l.property == null ? null : l.property) &&
                                a.getAttribute("http-equiv") ===
                                  (l.httpEquiv == null ? null : l.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (l.charSet == null ? null : l.charSet))
                            ) {
                              u.splice(c, 1);
                              break t;
                            }
                        }
                        ((a = n.createElement(t)),
                          at(a, t, l),
                          n.head.appendChild(a));
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    ((a[$e] = e), Ke(a), (t = a));
                  }
                  e.stateNode = t;
                }
              else ke || Mo(u, e.type, e.stateNode);
            else e.stateNode = th(u, l, e.memoizedProps);
          else
            n !== l
              ? (n === null
                  ? ((t = a.stateNode),
                    t === null || je || t.parentNode.removeChild(t))
                  : n.count--,
                l === null
                  ? ke || Mo(u, e.type, e.stateNode)
                  : th(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                _s(e, e.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (ft(t, e, l),
          dt(e),
          n & 512 && (je || a === null || lt(a, a.return)),
          a !== null && n & 4 && _s(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((u = nl),
          (nl = !1),
          ft(t, e, l),
          (nl = u),
          dt(e),
          n & 512 && (je || a === null || lt(a, a.return)),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            (Ra(t, ""), (ge = !0));
          } catch (j) {
            Te(e, e.return, j);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), _s(e, t, a !== null ? a.memoizedProps : t)),
          n & 1024 && (Ys = !0));
        break;
      case 6:
        if ((ft(t, e, l), dt(e), n & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((t = e.memoizedProps), (l = e.stateNode));
          try {
            ((l.nodeValue = t), (ge = !0));
          } catch (j) {
            Te(e, e.return, j);
          }
        }
        break;
      case 3:
        if (
          ((ge = !1),
          (wi = null),
          (u = Qt),
          (Qt = su(t.containerInfo)),
          ft(t, e, l),
          (Qt = u),
          dt(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            gn(t.containerInfo);
          } catch (j) {
            Te(e, e.return, j);
          }
        (Ys && ((Ys = !1), Wd(e)), (ge = !1));
        break;
      case 4:
        ((n = nl),
          (nl = ke),
          (a = vr()),
          (u = Qt),
          (Qt = su(e.stateNode.containerInfo)),
          ft(t, e, l),
          dt(e),
          (Qt = u),
          ge && Pn && (Si = !0),
          (ge = a),
          (nl = n));
        break;
      case 12:
        (ft(t, e, l), dt(e));
        break;
      case 31:
        (ft(t, e, l),
          dt(e),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ti(e, t))));
        break;
      case 13:
        (ft(t, e, l),
          dt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (zi = bt()),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ti(e, t))));
        break;
      case 22:
        ((u = e.memoizedState !== null),
          (c = a !== null && a.memoizedState !== null));
        var s = ke,
          o = je,
          y = nl;
        ((ke = s || u),
          (nl = y || u),
          (je = o || c),
          ft(t, e, l),
          (je = o),
          (nl = y),
          (ke = s),
          dt(e),
          n & 8192 &&
            ((t = e.stateNode),
            (t._visibility = u ? t._visibility & -2 : t._visibility | 1),
            !u ||
              a === null ||
              c ||
              ke ||
              je ||
              ((t = c || je),
              (l = ke),
              (a = je),
              (ke = u || ke),
              (je = t),
              Xl(e, 2),
              (ke = l),
              (je = a)),
            (!u && nl) || Vs(e, u)),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null &&
              ((l = t.retryQueue),
              l !== null && ((t.retryQueue = null), Ti(e, l)))));
        break;
      case 19:
        (ft(t, e, l),
          dt(e),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ti(e, t))));
        break;
      case 30:
        (n & 512 && (je || a === null || lt(a, a.return)),
          (n = vr()),
          (u = Pn),
          (c = (l & 335544064) === l),
          (s = e.memoizedProps),
          (Pn = c && vl(s.default, s.update) !== "none"),
          ft(t, e, l),
          dt(e),
          c && a !== null && ge && (e.flags |= 4),
          (Pn = u),
          (ge = n));
        break;
      case 21:
        break;
      case 7:
        (n & 512 && (je || a === null || lt(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = e));
      default:
        (ft(t, e, l), dt(e));
    }
  }
  function dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (Ud(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = e.return; n !== null;) {
          if (Ds(n)) {
            var u = n.stateNode;
            a === null ? (a = [u]) : a.push(u);
          }
          if (Os(n)) break;
          n = n.return;
        }
        var c = a;
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              o = Rs(e);
            pi(e, o, s, c);
            break;
          case 5:
            var y = l.stateNode;
            l.flags & 32 && (Ra(y, ""), (l.flags &= -33));
            var j = Rs(e);
            pi(e, j, y, c);
            break;
          case 3:
          case 4:
            var N = l.stateNode.containerInfo,
              h = Rs(e);
            Us(e, h, N, c);
            break;
          default:
            throw Error(r(161));
        }
      } catch (b) {
        Te(e, e.return, b);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (Wd(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (yn = !0), t.reset(), (yn = !1)),
          (e = e.sibling));
      }
  }
  function $a(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null;) (Id(t, e), (t = t.sibling));
    else Gd(t);
  }
  function Id(e, t) {
    var l = e.alternate;
    if (l === null) Hs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (((Gs = ul = !1), qd(), $a(t, e), !ul && !Si)) {
            if (((e = ll), e !== null))
              for (var a = 0; a < e.length; a += 3) {
                l = e[a];
                var n = e[a + 1];
                (Bm(l, e[a + 2]),
                  (l = l.ownerDocument.documentElement),
                  l !== null &&
                    l.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + n + ")",
                      },
                    ));
              }
            ((e = t.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                e.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Gs = !0));
          }
          ll = null;
          break;
        case 5:
          $a(t, e);
          break;
        case 4:
          ((a = ul), (ul = !1), $a(t, e), ul && (Si = !0), (ul = a));
          break;
        case 22:
          e.memoizedState === null &&
            (l.memoizedState !== null ? Hs(e, !1) : $a(t, e));
          break;
        case 30:
          ((a = ul), (n = qd()), (ul = !1), $a(t, e), ul && (e.flags |= 4));
          var u = e.memoizedProps,
            c = e.stateNode;
          ((t = hl(u, c)), (c = hl(l.memoizedProps, c)));
          var s = vl(u.default, u.update);
          (s === "none"
            ? (t = !1)
            : ((u = l.memoizedState),
              (l.memoizedState = null),
              (l = e.child),
              (vt = 0),
              (t = ws(e, l, t, c, s, u, !0)),
              vt !== (u === null ? 0 : u.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && t
              ? (un(e, e.memoizedProps.onUpdate), (ll = n))
              : n !== null && (n.push.apply(n, ll), (ll = n)),
            (ul = (e.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          $a(t, e);
      }
  }
  function il(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (Xd(e, t.alternate, t), (t = t.sibling));
  }
  function Xl(e, t) {
    for (e = e.child; e !== null;) {
      var l = e,
        a = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Vl(4, l, l.return), Xl(l, a));
          break;
        case 1:
          lt(l, l.return);
          var n = l.stateNode;
          (typeof n.componentWillUnmount == "function" && _d(l, l.return, n),
            Xl(l, a));
          break;
        case 27:
          (a & 2) !== 0 && Wm(l.stateNode, l.type, l.memoizedProps);
        case 5:
          (lt(l, l.return), (l.tag !== 5 && l.tag !== 27) || $n(l), Xl(l, a));
          break;
        case 6:
          $n(l);
          break;
        case 26:
          (lt(l, l.return),
            (n = l.stateNode),
            l.memoizedState !== null ||
              n === null ||
              je ||
              n.parentNode.removeChild(n),
            Xl(l, a));
          break;
        case 22:
          l.memoizedState === null && Xl(l, a);
          break;
        case 30:
          (lt(l, l.return), Xl(l, a));
          break;
        case 7:
          lt(l, l.return);
        default:
          Xl(l, a);
      }
      e = e.sibling;
    }
  }
  function Zt(e, t, l) {
    for (
      l = (t.subtreeFlags & 8772) !== 0 ? l : l & -2, t = t.child;
      t !== null;
    ) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags,
        s = (l & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Zt(n, u, l), In(4, u));
          break;
        case 1:
          if (
            (Zt(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (j) {
              Te(a, a.return, j);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var o = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  bf(y[n], o);
            } catch (j) {
              Te(a, a.return, j);
            }
          }
          (s && c & 64 && Cd(u), tl(u, u.return));
          break;
        case 27:
          (l & 2) !== 0 && Hd(u);
        case 5:
          ((u.tag !== 5 && u.tag !== 27) || Rd(u),
            Zt(n, u, l),
            s && a === null && c & 4 && Cs(u),
            tl(u, u.return));
          break;
        case 6:
          Rd(u);
          break;
        case 26:
          ((o = u.stateNode),
            u.memoizedState !== null ||
              o === null ||
              ke ||
              Mo(su(o.ownerDocument), u.type, o),
            Zt(n, u, l),
            s && a === null && c & 4 && Cs(u),
            tl(u, u.return));
          break;
        case 12:
          Zt(n, u, l);
          break;
        case 31:
          (Zt(n, u, l), s && c & 4 && Jd(n, u));
          break;
        case 13:
          (Zt(n, u, l), s && c & 4 && kd(n, u));
          break;
        case 22:
          (u.memoizedState === null && Zt(n, u, l), tl(u, u.return));
          break;
        case 30:
          (Zt(n, u, l), tl(u, u.return));
          break;
        case 7:
          tl(u, u.return);
        default:
          Zt(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Qs(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Bn(l)));
  }
  function Zs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Bn(e)));
  }
  function Lt(e, t, l, a) {
    var n = (l & 335544064) === l;
    if (t.subtreeFlags & (n ? 10262 : 10256))
      for (t = t.child; t !== null;) ($d(e, t, l, a), (t = t.sibling));
    else n && Yd(t);
  }
  function $d(e, t, l, a) {
    var n = (l & 335544064) === l;
    n &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      ji(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(e, t, l, a), u & 2048 && In(9, t));
        break;
      case 1:
        Lt(e, t, l, a);
        break;
      case 3:
        (Lt(e, t, l, a),
          n &&
            Gs &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          u & 2048 &&
            ((u = null),
            t.alternate !== null && (u = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== u && (t.refCount++, u != null && Bn(u))));
        break;
      case 12:
        if (u & 2048) {
          (Lt(e, t, l, a), (u = t.stateNode));
          try {
            var c = t.memoizedProps,
              s = c.id,
              o = c.onPostCommit;
            typeof o == "function" &&
              o(
                s,
                t.alternate === null ? "mount" : "update",
                u.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            Te(t, t.return, y);
          }
        } else Lt(e, t, l, a);
        break;
      case 31:
        Lt(e, t, l, a);
        break;
      case 13:
        Lt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (s = t.alternate),
          t.memoizedState !== null
            ? (n && s !== null && s.memoizedState === null && ji(s),
              c._visibility & 2 ? Lt(e, t, l, a) : eu(e, t))
            : (n && s !== null && s.memoizedState !== null && ji(t),
              c._visibility & 2
                ? Lt(e, t, l, a)
                : ((c._visibility |= 2),
                  Pa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1))),
          u & 2048 && Qs(s, t));
        break;
      case 24:
        (Lt(e, t, l, a), u & 2048 && Zs(t.alternate, t));
        break;
      case 30:
        (n &&
          ((u = t.alternate), u !== null && (al(u.child, !0), al(t.child, !0))),
          Lt(e, t, l, a));
        break;
      default:
        Lt(e, t, l, a);
    }
  }
  function Pa(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        c = t,
        s = l,
        o = a,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Pa(u, c, s, o, n), In(8, c));
          break;
        case 23:
          break;
        case 22:
          var j = c.stateNode;
          (c.memoizedState !== null
            ? j._visibility & 2
              ? Pa(u, c, s, o, n)
              : eu(u, c)
            : ((j._visibility |= 2), Pa(u, c, s, o, n)),
            n && y & 2048 && Qs(c.alternate, c));
          break;
        case 24:
          (Pa(u, c, s, o, n), n && y & 2048 && Zs(c.alternate, c));
          break;
        default:
          Pa(u, c, s, o, n);
      }
      t = t.sibling;
    }
  }
  function eu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (eu(l, a), n & 2048 && Qs(a.alternate, a));
            break;
          case 24:
            (eu(l, a), n & 2048 && Zs(a.alternate, a));
            break;
          default:
            eu(l, a);
        }
        t = t.sibling;
      }
  }
  var xa = 8192;
  function ja(e, t, l) {
    if (e.subtreeFlags & xa)
      for (e = e.child; e !== null;) (Pd(e, t, l), (e = e.sibling));
  }
  function Pd(e, t, l) {
    switch (e.tag) {
      case 26:
        (ja(e, t, l),
          e.flags & xa &&
            (e.memoizedState !== null
              ? D0(l, Qt, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (t & 335544128) === t && ih(l, e))));
        break;
      case 5:
        (ja(e, t, l),
          e.flags & xa &&
            ((e = e.stateNode), (t & 335544128) === t && ih(l, e)));
        break;
      case 3:
      case 4:
        var a = Qt;
        ((Qt = su(e.stateNode.containerInfo)), ja(e, t, l), (Qt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = xa), (xa = 16777216), ja(e, t, l), (xa = a))
            : ja(e, t, l));
        break;
      case 30:
        if (
          (e.flags & xa) !== 0 &&
          ((a = e.memoizedProps.name), a != null && a !== "auto")
        ) {
          var n = e.stateNode;
          ((n.paired = null), Nt === null && (Nt = new Map()), Nt.set(a, n));
        }
        ja(e, t, l);
        break;
      default:
        ja(e, t, l);
    }
  }
  function em(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function tu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Fe = a), lm(a, e));
        }
      em(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (tm(e), (e = e.sibling));
  }
  function tm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (tu(e), e.flags & 2048 && Vl(9, e, e.return));
        break;
      case 3:
        tu(e);
        break;
      case 12:
        tu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ni(e))
          : tu(e);
        break;
      default:
        tu(e);
    }
  }
  function Ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Fe = a), lm(a, e));
        }
      em(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Vl(8, t, t.return), Ni(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ni(t)));
          break;
        default:
          Ni(t);
      }
      e = e.sibling;
    }
  }
  function lm(e, t) {
    for (; Fe !== null;) {
      var l = Fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Vl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Bn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Fe = a));
      else
        e: for (l = e; Fe !== null;) {
          a = Fe;
          var n = a.sibling,
            u = a.return;
          if ((Zd(a), a === l)) {
            Fe = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Fe = n));
            break e;
          }
          Fe = u;
        }
    }
  }
  var Nv = {
      getCacheForType: function (e) {
        var t = Pe(Ge),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Pe(Ge).controller.signal;
      },
    },
    Av = typeof WeakMap == "function" ? WeakMap : Map,
    be = 0,
    De = null,
    ie = null,
    se = 0,
    Ee = 0,
    At = null,
    Ql = !1,
    en = !1,
    Ks = !1,
    Tl = 0,
    Be = 0,
    Zl = 0,
    Sa = 0,
    Ai = 0,
    zt = 0,
    tn = 0,
    lu = null,
    gt = null,
    Js = !1,
    zi = 0,
    am = 0,
    Mi = 1 / 0,
    Oi = null,
    Kl = null,
    He = 0,
    Kt = null,
    Ea = null,
    cl = 0,
    ks = 0,
    Fs = null,
    nm = null,
    ln = null,
    an = null,
    nn = null,
    au = 0,
    Di = null;
  function Mt() {
    return (be & 2) !== 0 && se !== 0 ? se & -se : V.T !== null ? uo() : ir();
  }
  function um() {
    if (zt === 0)
      if ((se & 536870912) === 0 || ae) {
        var e = Tu;
        ((Tu <<= 1), (Tu & 3932160) === 0 && (Tu = 262144), (zt = e));
      } else zt = 536870912;
    return ((e = et.current), e !== null && (e.flags |= 32), zt);
  }
  function un(e, t) {
    if (t != null) {
      var l = e.stateNode,
        a = l.ref;
      (a === null && (a = l.ref = wm(hl(e.memoizedProps, l))),
        an === null && (an = []),
        an.push(t.bind(null, a)));
    }
  }
  function pt(e, t, l) {
    (((e === De && (Ee === 2 || Ee === 9)) || e.cancelPendingCommit !== null) &&
      (cn(e, 0), Jl(e, se, zt, !1)),
      Tn(e, l),
      ((be & 2) === 0 || e !== De) &&
        (e === De &&
          ((be & 2) === 0 && (Sa |= l), Be === 4 && Jl(e, se, zt, !1)),
        sl(e)));
  }
  function im(e, t, l) {
    if ((be & 6) !== 0) throw Error(r(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || En(e, t),
      n = a ? Ov(e, t) : Is(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        en && !a && Jl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !zv(l))) {
          ((n = Is(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            ((c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            e: {
              var s = e;
              n = lu;
              var o = s.current.memoizedState.isDehydrated;
              if (
                (o && (cn(s, c).flags |= 256),
                (c = Is(s, c, !1)),
                c !== 2 && c !== 6)
              ) {
                if (Ks && !o) {
                  ((s.errorRecoveryDisabledLanes |= u), (Sa |= u), (n = 4));
                  break e;
                }
                ((u = gt),
                  (gt = n),
                  u !== null &&
                    (gt === null ? (gt = u) : gt.push.apply(gt, u)));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (cn(e, 0), Jl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Jl(a, t, zt, !Ql);
              break e;
            case 2:
              gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = zi + 300 - bt()), 10 < n)) {
            if ((Jl(a, t, zt, !Ql), Au(a, 0, !0) !== 0)) break e;
            ((cl = t),
              (a.timeoutHandle = go(
                cm.bind(
                  null,
                  a,
                  l,
                  gt,
                  Oi,
                  Js,
                  t,
                  zt,
                  Sa,
                  tn,
                  Ql,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          cm(a, l, gt, Oi, Js, t, zt, Sa, tn, Ql, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    sl(e);
  }
  function cm(e, t, l, a, n, u, c, s, o, y, j, N, h, b) {
    e.timeoutHandle = -1;
    var R = t.subtreeFlags,
      Y = (u & 335544064) === u;
    if (
      ((N = null),
      (Y || R & 8192 || (R & 16785408) === 16785408) &&
        ((N = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: $t,
        }),
        (Nt = null),
        Pd(t, u, N),
        Y &&
          ((R = N),
          (Y = e.containerInfo),
          (Y = (Y.nodeType === 9 ? Y : Y.ownerDocument).__reactViewTransition),
          Y != null &&
            (R.count++,
            (R.waitingForViewTransition = !0),
            (R = fu.bind(R)),
            Y.finished.then(R, R))),
        (R =
          (u & 62914560) === u
            ? zi - bt()
            : (u & 4194048) === u
              ? am - bt()
              : 0),
        (R = C0(N, R)),
        R !== null))
    ) {
      ((cl = u),
        (e.cancelPendingCommit = R(
          vm.bind(null, e, t, u, l, a, n, c, s, o, y, j, N, null, h, b),
        )),
        Jl(e, u, c, !y));
      return;
    }
    vm(e, t, u, l, a, n, c, s, o, y, j, N);
  }
  function zv(e) {
    for (var t = e; ;) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!Et(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Jl(e, t, l, a) {
    ((t = tr(e, t)),
      (t &= ~Ai),
      (t &= ~Sa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n;) {
      var u = 31 - jt(n),
        c = 1 << u;
      ((a[u] = -1), (n &= ~c));
    }
    l !== 0 && ar(e, l, t);
  }
  function Ci() {
    return (be & 6) === 0 ? (nu(0), !1) : !0;
  }
  function Ws() {
    if (ie !== null) {
      if (Ee === 0) var e = ie.return;
      else ((e = ie), (pl = ra = null), ns(e), (Ka = null), (Gn = 0), (e = ie));
      for (; e !== null;) (Dd(e.alternate, e), (e = e.return));
      ie = null;
    }
  }
  function cn(e, t) {
    var l = e.timeoutHandle;
    return (
      l !== -1 && ((e.timeoutHandle = -1), Iv(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (cl = 0),
      Ws(),
      (De = e),
      (ie = l = yl(e.current, null)),
      (se = t),
      (Ee = 0),
      (At = null),
      (Ql = !1),
      (en = En(e, t)),
      (Ks = !1),
      (tn = zt = Ai = Sa = Zl = Be = 0),
      (gt = lu = null),
      (Js = !1),
      (Tl = tr(e, t)),
      wu(),
      l
    );
  }
  function sm(e, t) {
    ((P = null),
      (V.H = ri),
      t === Za || t === Wu
        ? ((t = vf()), (Ee = 3))
        : t === Zc
          ? ((t = vf()), (Ee = 4))
          : (Ee =
              t === bs
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (At = t),
      ie === null && ((Be = 1), fi(e, _t(t, e.current))));
  }
  function om() {
    var e = et.current;
    return e === null
      ? !0
      : (se & 4194048) === se
        ? it === null
        : (se & 62914560) === se || (se & 536870912) !== 0
          ? e === it
          : !1;
  }
  function rm() {
    var e = V.H;
    return ((V.H = ri), e === null ? ri : e);
  }
  function fm() {
    var e = V.A;
    return ((V.A = Nv), e);
  }
  function _i() {
    ((Be = 4),
      Ql || ((se & 4194048) !== se && et.current !== null) || (en = !0),
      ((Zl & 134217727) === 0 && (Sa & 134217727) === 0) ||
        De === null ||
        Jl(De, se, zt, !1));
  }
  function Is(e, t, l) {
    var a = be;
    be |= 2;
    var n = rm(),
      u = fm();
    ((De !== e || se !== t) && ((Oi = null), cn(e, t)), (t = !1));
    var c = Be;
    e: do
      try {
        if (Ee !== 0 && ie !== null) {
          var s = ie,
            o = At;
          switch (Ee) {
            case 8:
              (Ws(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var y = Ee;
              if (((Ee = 0), (At = null), sn(e, s, o, y), l && en)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((y = Ee), (Ee = 0), (At = null), sn(e, s, o, y));
          }
        }
        (Mv(), (c = Be));
        break;
      } catch (j) {
        sm(e, j);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (pl = ra = null),
      (be = a),
      (V.H = n),
      (V.A = u),
      ie === null && ((De = null), (se = 0), wu()),
      c
    );
  }
  function Mv() {
    for (; ie !== null;) dm(ie);
  }
  function Ov(e, t) {
    var l = be;
    be |= 2;
    var a = rm(),
      n = fm();
    De !== e || se !== t
      ? ((Oi = null), (Mi = bt() + 500), cn(e, t))
      : (en = En(e, t));
    e: do
      try {
        if (Ee !== 0 && ie !== null) {
          t = ie;
          var u = At;
          t: switch (Ee) {
            case 1:
              ((Ee = 0), (At = null), sn(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (mf(u)) {
                ((Ee = 0), (At = null), mm(t));
                break;
              }
              ((t = function () {
                ((Ee !== 2 && Ee !== 9) || De !== e || (Ee = 7), sl(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              mf(u)
                ? ((Ee = 0), (At = null), mm(t))
                : ((Ee = 0), (At = null), sn(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ie.tag) {
                case 26:
                  c = ie.memoizedState;
                case 5:
                case 27:
                  var s = ie;
                  if (c ? nh(c) : s.stateNode.complete) {
                    ((Ee = 0), (At = null));
                    var o = s.sibling;
                    if (o !== null) ie = o;
                    else {
                      var y = s.return;
                      y !== null ? ((ie = y), Ri(y)) : (ie = null);
                    }
                    break t;
                  }
              }
              ((Ee = 0), (At = null), sn(e, t, u, 5));
              break;
            case 6:
              ((Ee = 0), (At = null), sn(e, t, u, 6));
              break;
            case 8:
              (Ws(), (Be = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        Dv();
        break;
      } catch (j) {
        sm(e, j);
      }
    while (!0);
    return (
      (pl = ra = null),
      (V.H = a),
      (V.A = n),
      (be = l),
      ie !== null ? 0 : ((De = null), (se = 0), wu(), Be)
    );
  }
  function Dv() {
    for (; ie !== null && !Jh();) dm(ie);
  }
  function dm(e) {
    var t = Md(e.alternate, e, Tl);
    ((e.memoizedProps = e.pendingProps), t === null ? Ri(e) : (ie = t));
  }
  function mm(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jd(l, t, t.pendingProps, t.type, void 0, se);
        break;
      case 11:
        t = jd(l, t, t.pendingProps, t.type.render, t.ref, se);
        break;
      case 5:
        ns(t);
        var a = t;
        a === Je &&
          (ae
            ? (Zu(a), a.tag === 5 && a.stateNode != null && (_e = a.stateNode))
            : (Zu(a), (ae = !0)));
      default:
        (Dd(l, t), (t = ie = tf(t, Tl)), (t = Md(l, t, Tl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ri(e) : (ie = t));
  }
  function sn(e, t, l, a) {
    ((pl = ra = null), ns(t), (Ka = null), (Gn = 0));
    var n = t.return;
    try {
      if (gv(e, n, t, l, se)) {
        ((Be = 1), fi(e, _t(l, e.current)), (ie = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ie = n), u);
      ((Be = 1), fi(e, _t(l, e.current)), (ie = null));
      return;
    }
    t.flags & 32768
      ? (ae || a === 1
          ? (e = !0)
          : en || (se & 536870912) !== 0
            ? (e = !1)
            : ((Ql = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = et.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        hm(t, e))
      : Ri(t);
  }
  function Ri(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        hm(t, Ql);
        return;
      }
      e = t.return;
      var l = jv(t.alternate, t, Tl);
      if (l !== null) {
        ie = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ie = t;
        return;
      }
      ie = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function hm(e, t) {
    do {
      var l = Sv(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ie = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ie = e;
        return;
      }
      ie = e = l;
    } while (e !== null);
    ((Be = 6), (ie = null));
  }
  function vm(e, t, l, a, n, u, c, s, o, y, j, N) {
    e.cancelPendingCommit = null;
    do Ui();
    while (He !== 0);
    if ((be & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      (e === De && ((ie = De = null), (se = 0)),
        (Ea = t),
        (Kt = e),
        (cl = l),
        (Fs = n),
        (nm = a),
        Cv(e, t, l, c, s, o, N));
    }
  }
  function Cv(e, t, l, a, n, u, c) {
    var s = t.lanes | t.childLanes;
    if (
      ((ks = s),
      (s |= _c),
      a1(e, l, s, a, n, u),
      (an = null),
      (l & 335544064) === l
        ? ((nn = uv(e)), (a = 10262))
        : ((nn = null), (a = 10256)),
      (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          qv(Su, function () {
            return (to(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (bi = !1),
      (a = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = V.T), (V.T = null), (n = W.p), (W.p = 2), (u = be), (be |= 4));
      try {
        Ev(e, t, l);
      } finally {
        ((be = u), (W.p = n), (V.T = a));
      }
    }
    ((He = 1),
      bi
        ? (ln = a0(c, e.containerInfo, nn, $s, Ps, Rv, eo, to, _v))
        : ($s(), Ps(), eo()));
  }
  function _v(e) {
    if (He !== 0) {
      var t = Kt.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Rv() {
    He === 3 && ((He = 0), Id(Ea, Kt), (He = 4));
  }
  function $s() {
    if (He === 1) {
      He = 0;
      var e = Kt,
        t = Ea,
        l = cl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = V.T), (V.T = null));
        var n = W.p;
        W.p = 2;
        var u = be;
        be |= 4;
        try {
          ((Pn = Si = !1), Fd(t, e, l), (l = ho));
          var c = Zr(e.containerInfo),
            s = l.focusedElem,
            o = l.selectionRange;
          if (
            c !== s &&
            s &&
            s.ownerDocument &&
            Qr(s.ownerDocument.documentElement, s)
          ) {
            if (o !== null && zc(s)) {
              var y = o.start,
                j = o.end;
              if ((j === void 0 && (j = y), "selectionStart" in s))
                ((s.selectionStart = y),
                  (s.selectionEnd = Math.min(j, s.value.length)));
              else {
                var N = s.ownerDocument || document,
                  h = (N && N.defaultView) || window;
                if (h.getSelection) {
                  var b = h.getSelection(),
                    R = s.textContent.length,
                    Y = Math.min(o.start, R),
                    ee = o.end === void 0 ? Y : Math.min(o.end, R);
                  !b.extend && Y > ee && ((c = ee), (ee = Y), (Y = c));
                  var v = Xr(s, Y),
                    d = Xr(s, ee);
                  if (
                    v &&
                    d &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== v.node ||
                      b.anchorOffset !== v.offset ||
                      b.focusNode !== d.node ||
                      b.focusOffset !== d.offset)
                  ) {
                    var g = N.createRange();
                    (g.setStart(v.node, v.offset),
                      b.removeAllRanges(),
                      Y > ee
                        ? (b.addRange(g), b.extend(d.node, d.offset))
                        : (g.setEnd(d.node, d.offset), b.addRange(g)));
                  }
                }
              }
            }
            for (N = [], b = s; (b = b.parentNode);)
              b.nodeType === 1 &&
                N.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < N.length;
              s++
            ) {
              var T = N[s];
              ((T.element.scrollLeft = T.left), (T.element.scrollTop = T.top));
            }
          }
          ((yn = !!mo), (ho = mo = null));
        } finally {
          ((be = u), (W.p = n), (V.T = a));
        }
      }
      ((e.current = t), (He = 2));
    }
  }
  function Ps() {
    if (He === 2) {
      He = 0;
      var e = Kt,
        t = Ea,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = V.T), (V.T = null));
        var a = W.p;
        W.p = 2;
        var n = be;
        be |= 4;
        try {
          Xd(e, t.alternate, t);
        } finally {
          ((be = n), (W.p = a), (V.T = l));
        }
      }
      He = 3;
    }
  }
  function eo() {
    if (He === 4 || He === 3) {
      He = 0;
      var e = ln;
      ((ln = null), kh());
      var t = Kt,
        l = Ea,
        a = cl,
        n = nm,
        u = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0
          ? (He = 5)
          : ((He = 0), (Ea = Kt = null), ym(t, t.pendingLanes)),
        (u = t.pendingLanes),
        u === 0 && (Kl = null),
        oc(a),
        (l = l.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(Sn, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((l = V.T), (u = W.p), (W.p = 2), (V.T = null));
        try {
          for (var c = t.onRecoverableError, s = 0; s < n.length; s++) {
            var o = n[s];
            c(o.value, { componentStack: o.stack });
          }
        } finally {
          ((V.T = l), (W.p = u));
        }
      }
      if (
        ((n = an),
        (c = nn),
        (nn = null),
        n !== null && ((an = null), c === null && (c = []), e !== null))
      )
        for (o = 0; o < n.length; o++)
          ((l = (0, n[o])(c)), l !== void 0 && e.finished.finally(l));
      ((cl & 3) !== 0 && Ui(),
        sl(t),
        (u = t.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? t === Di
            ? au++
            : ((au = 0), (Di = t))
          : ((au = 0), (Di = null)),
        nu(0));
    }
  }
  function ym(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Bn(t)));
  }
  function Ui() {
    return (
      ln !== null && (ln.skipTransition(), (ln = null)),
      $s(),
      Ps(),
      eo(),
      to()
    );
  }
  function to() {
    if (He !== 5) return !1;
    var e = Kt,
      t = ks;
    ks = 0;
    var l = oc(cl),
      a = V.T,
      n = W.p;
    try {
      ((W.p = 32 > l ? 32 : l), (V.T = null), (l = Fs), (Fs = null));
      var u = Kt,
        c = cl;
      if (((He = 0), (Ea = Kt = null), (cl = 0), (be & 6) !== 0))
        throw Error(r(331));
      var s = be;
      if (
        ((be |= 4),
        tm(u.current),
        $d(u, u.current, c, l),
        (be = s),
        nu(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(Sn, u);
        } catch {}
      return !0;
    } finally {
      ((W.p = n), (V.T = a), ym(e, t));
    }
  }
  function gm(e, t, l) {
    ((t = _t(l, t)),
      (t = ps(e.stateNode, t, 2)),
      (e = Bl(e, t, 2)),
      e !== null && (Tn(e, 2), sl(e)));
  }
  function Te(e, t, l) {
    if (e.tag === 3) gm(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          gm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Kl === null || !Kl.has(a)))
          ) {
            ((e = _t(l, e)),
              (l = md(2)),
              (a = Bl(t, l, 2)),
              a !== null && (hd(l, a, t, e), Tn(a, 2), sl(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function lo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Av();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Ks = !0), n.add(l), (e = Uv.bind(null, e, t, l)), t.then(e, e));
  }
  function Uv(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      De === e &&
        (se & l) === l &&
        ((Be === 4 ||
          (Be === 3 && (se & 62914560) === se && 300 > bt() - zi)) &&
        (be & 2) === 0
          ? cn(e, 0)
          : (Ai |= l),
        tn === se && (tn = 0)),
      sl(e));
  }
  function pm(e, t) {
    (t === 0 && (t = lr()), (e = ca(e, t)), e !== null && (Tn(e, t), sl(e)));
  }
  function Hv(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), pm(e, l));
  }
  function Lv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), pm(e, l));
  }
  function qv(e, t) {
    return uc(e, t);
  }
  var on = null,
    rn = null,
    ao = !1,
    Hi = !1,
    no = !1,
    kl = 0;
  function sl(e) {
    (e !== rn &&
      e.next === null &&
      (rn === null ? (on = rn = e) : (rn = rn.next = e)),
      (Hi = !0),
      ao || ((ao = !0), wv()));
  }
  function nu(e, t) {
    if (!no && Hi) {
      no = !0;
      do
        for (var l = !1, a = on; a !== null;) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - jt(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Sm(a, u));
          } else
            ((u = se),
              (u = Au(
                a,
                a === De ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || En(a, u) || ((l = !0), Sm(a, u)));
          a = a.next;
        }
      while (l);
      no = !1;
    }
  }
  function Bv() {
    bm();
  }
  function bm() {
    Hi = ao = !1;
    var e = 0;
    kl !== 0 && Wv() && (e = kl);
    for (var t = bt(), l = null, a = on; a !== null;) {
      var n = a.next,
        u = xm(a, t);
      (u === 0
        ? ((a.next = null),
          l === null ? (on = n) : (l.next = n),
          n === null && (rn = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Hi = !0)),
        (a = n));
    }
    ((He !== 0 && He !== 5) || nu(e), kl !== 0 && (kl = 0));
  }
  function xm(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var c = 31 - jt(u),
        s = 1 << c,
        o = n[c];
      (o === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = l1(s, t))
        : o <= t && (e.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((t = De),
      (l = se),
      (l = Au(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Ee === 2 || Ee === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ic(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || En(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && ic(a), oc(l))) {
        case 2:
        case 8:
          l = Po;
          break;
        case 32:
          l = Su;
          break;
        case 268435456:
          l = er;
          break;
        default:
          l = Su;
      }
      return (
        (a = jm.bind(null, e)),
        (l = uc(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && ic(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function jm(e, t) {
    if (He !== 0 && He !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Ui() && e.callbackNode !== l) return null;
    var a = se;
    return (
      (a = Au(
        e,
        e === De ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (im(e, a, t),
          xm(e, bt()),
          e.callbackNode != null && e.callbackNode === l
            ? jm.bind(null, e)
            : null)
    );
  }
  function Sm(e, t) {
    if (Ui()) return null;
    im(e, t, !0);
  }
  function wv() {
    $v(function () {
      (be & 6) !== 0 ? uc($o, Bv) : bm();
    });
  }
  function uo() {
    if (kl === 0) {
      var e = ma;
      (e === 0 && ((e = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)),
        (kl = e));
    }
    return kl;
  }
  function Em(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Cu(e);
  }
  function Yv(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Em((n[mt] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[mt] || null)
          ? Em(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((u = t), (c = null)));
      var s = new Hu("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (kl !== 0) {
                  var o = new FormData(n, c);
                  ms(
                    l,
                    { pending: !0, data: o, method: n.method, action: u },
                    null,
                    o,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (o = new FormData(n, c)),
                  ms(
                    l,
                    { pending: !0, data: o, method: n.method, action: u },
                    u,
                    o,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var io = 0; io < Cc.length; io++) {
    var co = Cc[io],
      Gv = co.toLowerCase(),
      Vv = co[0].toUpperCase() + co.slice(1);
    Vt(Gv, "on" + Vv);
  }
  (Vt(kr, "onAnimationEnd"),
    Vt(Fr, "onAnimationIteration"),
    Vt(Wr, "onAnimationStart"),
    Vt("dblclick", "onDoubleClick"),
    Vt("focusin", "onFocus"),
    Vt("focusout", "onBlur"),
    Vt(I1, "onTransitionRun"),
    Vt($1, "onTransitionStart"),
    Vt(P1, "onTransitionCancel"),
    Vt(Ir, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    na(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    na(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    na("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    na(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    na(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    na(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var uu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Xv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(uu),
    );
  function Tm(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c],
              o = s.instance,
              y = s.currentTarget;
            if (((s = s.listener), o !== u && n.isPropagationStopped()))
              break e;
            ((u = s), (n.currentTarget = y));
            try {
              u(n);
            } catch (j) {
              Bu(j);
            }
            ((n.currentTarget = null), (u = o));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((s = a[c]),
              (o = s.instance),
              (y = s.currentTarget),
              (s = s.listener),
              o !== u && n.isPropagationStopped())
            )
              break e;
            ((u = s), (n.currentTarget = y));
            try {
              u(n);
            } catch (j) {
              Bu(j);
            }
            ((n.currentTarget = null), (u = o));
          }
      }
    }
  }
  function ce(e, t) {
    var l = t[sr];
    l === void 0 && (l = t[sr] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Nm(t, e, 2, !1), l.add(a));
  }
  function so(e, t, l) {
    var a = 0;
    (t && (a |= 4), Nm(l, e, a, t));
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(e) {
    if (!e[Li]) {
      ((e[Li] = !0),
        fr.forEach(function (l) {
          l !== "selectionchange" && (Xv.has(l) || so(l, !1, e), so(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || ((t[Li] = !0), so("selectionchange", !1, t));
    }
  }
  function Nm(e, t, l, a) {
    switch (hh(t)) {
      case 2:
        var n = H0;
        break;
      case 8:
        n = L0;
        break;
      default:
        n = Do;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !gc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function ro(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null;) {
              var o = c.tag;
              if ((o === 3 || o === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null;) {
            if (((c = aa(s)), c === null)) return;
            if (((o = c.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              a = u = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Tr(function () {
      var y = u,
        j = vc(l),
        N = [];
      e: {
        var h = $r.get(e);
        if (h !== void 0) {
          var b = Hu,
            R = e;
          switch (e) {
            case "keypress":
              if (Ru(l) === 0) break e;
            case "keydown":
            case "keyup":
              b = z1;
              break;
            case "focusin":
              ((R = "focus"), (b = jc));
              break;
            case "focusout":
              ((R = "blur"), (b = jc));
              break;
            case "beforeblur":
            case "afterblur":
              b = jc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = zr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = v1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = _1;
              break;
            case kr:
            case Fr:
            case Wr:
              b = p1;
              break;
            case Ir:
              b = U1;
              break;
            case "scroll":
            case "scrollend":
              b = m1;
              break;
            case "wheel":
              b = L1;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = x1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Or;
              break;
            case "submit":
              b = D1;
              break;
            case "toggle":
            case "beforetoggle":
              b = B1;
          }
          var Y = (t & 4) !== 0,
            ee = !Y && (e === "scroll" || e === "scrollend"),
            v = Y ? (h !== null ? h + "Capture" : null) : h;
          Y = [];
          for (var d = y, g; d !== null;) {
            var T = d;
            if (
              ((g = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                g === null ||
                v === null ||
                ((T = zn(d, v)), T != null && Y.push(iu(d, T, g))),
              ee)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((h = new b(h, R, null, l, j)), N.push({ event: h, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((b = e === "mouseover" || e === "pointerover"),
            (h = e === "mouseout" || e === "pointerout"),
            b &&
              l !== hc &&
              (R = l.relatedTarget || l.fromElement) &&
              (aa(R) || R[Ma]))
          )
            break e;
          (h || b) &&
            ((R =
              j.window === j
                ? j
                : (b = j.ownerDocument)
                  ? b.defaultView || b.parentWindow
                  : window),
            h
              ? ((b = l.relatedTarget || l.toElement),
                (h = y),
                (b = b ? aa(b) : null),
                b !== null &&
                  ((ee = S(b)),
                  (Y = b.tag),
                  b !== ee || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (b = null))
              : ((h = null), (b = y)),
            h !== b &&
              ((Y = zr),
              (T = "onMouseLeave"),
              (v = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Y = Or),
                (T = "onPointerLeave"),
                (v = "onPointerEnter"),
                (d = "pointer")),
              (ee = h == null ? R : An(h)),
              (g = b == null ? R : An(b)),
              (R = new Y(T, d + "leave", h, l, j)),
              (R.target = ee),
              (R.relatedTarget = g),
              (T = null),
              aa(j) === y &&
                ((Y = new Y(v, d + "enter", b, l, j)),
                (Y.target = g),
                (Y.relatedTarget = ee),
                (T = Y)),
              (ee = T),
              (Y = h && b ? fe(h, b, Qv) : null),
              h !== null && Am(N, R, h, Y, !1),
              b !== null && ee !== null && Am(N, ee, b, Y, !0)));
        }
        e: {
          if (
            ((h = y ? An(y) : window),
            (b = h.nodeName && h.nodeName.toLowerCase()),
            b === "select" || (b === "input" && h.type === "file"))
          )
            var L = qr;
          else if (Hr(h))
            if (Br) L = k1;
            else {
              L = K1;
              var oe = Z1;
            }
          else
            ((b = h.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? y && mc(y.elementType) && (L = qr)
                : (L = J1));
          if (L && (L = L(e, y))) {
            Lr(N, L, l, j);
            break e;
          }
          oe && oe(e, h, y);
        }
        switch (((oe = y ? An(y) : window), e)) {
          case "focusin":
            (Hr(oe) || oe.contentEditable === "true") &&
              ((qa = oe), (Mc = y), (Hn = null));
            break;
          case "focusout":
            Hn = Mc = qa = null;
            break;
          case "mousedown":
            Oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Oc = !1), Kr(N, l, j));
            break;
          case "selectionchange":
            if (W1) break;
          case "keydown":
          case "keyup":
            Kr(N, l, j);
        }
        var K;
        if (Ec)
          e: {
            switch (e) {
              case "compositionstart":
                var k = "onCompositionStart";
                break e;
              case "compositionend":
                k = "onCompositionEnd";
                break e;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break e;
            }
            k = void 0;
          }
        else
          La
            ? Rr(e, l) && (k = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (k = "onCompositionStart");
        (k &&
          (Dr &&
            l.locale !== "ko" &&
            (La || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && La && (K = Nr())
              : ((Ol = j),
                (pc = "value" in Ol ? Ol.value : Ol.textContent),
                (La = !0))),
          (oe = qi(y, k)),
          0 < oe.length &&
            ((k = new Mr(k, e, null, l, j)),
            N.push({ event: k, listeners: oe }),
            K ? (k.data = K) : ((K = Ur(l)), K !== null && (k.data = K)))),
          (K = Y1 ? G1(e, l) : V1(e, l)) &&
            ((k = qi(y, "onBeforeInput")),
            0 < k.length &&
              ((oe = new Mr("onBeforeInput", "beforeinput", null, l, j)),
              N.push({ event: oe, listeners: k }),
              (oe.data = K))),
          Yv(N, e, y, l, j));
      }
      Tm(N, t);
    });
  }
  function iu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function qi(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = zn(e, l)),
          n != null && a.unshift(iu(e, n, u)),
          (n = zn(e, t)),
          n != null && a.push(iu(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Qv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Am(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a;) {
      var s = l,
        o = s.alternate,
        y = s.stateNode;
      if (((s = s.tag), o !== null && o === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        y === null ||
        ((o = y),
        n
          ? ((y = zn(l, u)), y != null && c.unshift(iu(l, y, o)))
          : n || ((y = zn(l, u)), y != null && c.push(iu(l, y, o)))),
        (l = l.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Zv = /\r\n?/g,
    Kv = /\u0000|\uFFFD/g;
  function zm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zv,
        `
`,
      )
      .replace(Kv, "");
  }
  function Mm(e, t) {
    return ((t = zm(t)), zm(e) === t);
  }
  function Ne(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        if (typeof a == "string")
          t === "body" || (t === "textarea" && a === "") || Ra(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Ra(e, "" + a);
        else return;
        break;
      case "className":
        Du(e, "class", a);
        break;
      case "tabIndex":
        Du(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(e, l, a);
        break;
      case "style":
        Sr(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          Du(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = Cu(a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && Ne(e, t, "name", n.name, n, null),
                Ne(e, t, "formEncType", n.formEncType, n, null),
                Ne(e, t, "formMethod", n.formMethod, n, null),
                Ne(e, t, "formTarget", n.formTarget, n, null))
              : (Ne(e, t, "encType", n.encType, n, null),
                Ne(e, t, "method", n.method, n, null),
                Ne(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = Cu(a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = $t);
        return;
      case "onScroll":
        a != null && ce("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ce("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            (u != null ? u.__html : void 0) !== l && (e.innerHTML = l);
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = Cu(a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (ce("beforetoggle", e), ce("toggle", e), Ou(e, "popover", a));
        break;
      case "xlinkActuate":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        dl(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        dl(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        dl(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        dl(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ou(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")
        )
          ((l = f1.get(l) || l), Ou(e, l, a));
        else return;
    }
    ge = !0;
  }
  function fo(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Sr(e, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            (u != null ? u.__html : void 0) !== l && (e.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Ra(e, a);
        else if (typeof a == "number" || typeof a == "bigint") Ra(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && ce("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ce("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = $t);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!dr.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (u = l.slice(2, n ? l.length - 7 : void 0)),
              (t = e[mt] || null),
              (t = t != null ? t[l] : null),
              typeof t == "function" && e.removeEventListener(u, t, n),
              typeof a == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(u, a, n));
              break e;
            }
            ((ge = !0),
              l in e
                ? (e[l] = a)
                : a === !0
                  ? e.setAttribute(l, "")
                  : Ou(e, l, a));
          }
        return;
    }
    ge = !0;
  }
  function at(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ce("error", e), ce("load", e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Ne(e, t, u, c, l, null);
              }
          }
        (n && Ne(e, t, "srcSet", l.srcSet, l, null),
          a && Ne(e, t, "src", l.src, l, null));
        return;
      case "input":
        ce("invalid", e);
        var s = (u = c = n = null),
          o = null,
          y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case "name":
                  n = j;
                  break;
                case "type":
                  c = j;
                  break;
                case "checked":
                  o = j;
                  break;
                case "defaultChecked":
                  y = j;
                  break;
                case "value":
                  u = j;
                  break;
                case "defaultValue":
                  s = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(r(137, t));
                  break;
                default:
                  Ne(e, t, a, j, l, null);
              }
          }
        pr(e, u, s, o, y, c, n, !1);
        return;
      case "select":
        (ce("invalid", e), (a = c = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                Ne(e, t, n, s, l, null);
            }
        ((t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? _a(e, !!a, t, !1) : l != null && _a(e, !!a, l, !0));
        return;
      case "textarea":
        (ce("invalid", e), (u = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                Ne(e, t, c, s, l, null);
            }
        xr(e, a, n, u);
        return;
      case "option":
        for (o in l)
          if (l.hasOwnProperty(o) && ((a = l[o]), a != null))
            switch (o) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, o, a, l, null);
            }
        return;
      case "dialog":
        (ce("beforetoggle", e),
          ce("toggle", e),
          ce("cancel", e),
          ce("close", e));
        break;
      case "iframe":
      case "object":
        ce("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < uu.length; a++) ce(uu[a], e);
        break;
      case "image":
        (ce("error", e), ce("load", e));
        break;
      case "details":
        ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ce("error", e), ce("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ne(e, t, y, a, l, null);
            }
        return;
      default:
        if (mc(t)) {
          for (j in l)
            l.hasOwnProperty(j) &&
              ((a = l[j]), a !== void 0 && fo(e, t, j, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && Ne(e, t, s, a, l, null));
  }
  var Jv = {};
  function kv(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          s = null,
          o = null,
          y = null,
          j = null;
        for (b in l) {
          var N = l[b];
          if (l.hasOwnProperty(b) && N != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = N;
              default:
                a.hasOwnProperty(b) || Ne(e, t, b, null, a, N);
            }
        }
        for (var h in a) {
          var b = a[h];
          if (((N = l[h]), a.hasOwnProperty(h) && (b != null || N != null)))
            switch (h) {
              case "type":
                (b !== N && (ge = !0), (u = b));
                break;
              case "name":
                (b !== N && (ge = !0), (n = b));
                break;
              case "checked":
                (b !== N && (ge = !0), (y = b));
                break;
              case "defaultChecked":
                (b !== N && (ge = !0), (j = b));
                break;
              case "value":
                (b !== N && (ge = !0), (c = b));
                break;
              case "defaultValue":
                (b !== N && (ge = !0), (s = b));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(137, t));
                break;
              default:
                b !== N && Ne(e, t, h, b, a, N);
            }
        }
        fc(e, c, s, o, y, j, u, n);
        return;
      case "select":
        b = c = s = h = null;
        for (u in l)
          if (((o = l[u]), l.hasOwnProperty(u) && o != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                b = o;
              default:
                a.hasOwnProperty(u) || Ne(e, t, u, null, a, o);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (o = l[n]),
            a.hasOwnProperty(n) && (u != null || o != null))
          )
            switch (n) {
              case "value":
                (u !== o && (ge = !0), (h = u));
                break;
              case "defaultValue":
                (u !== o && (ge = !0), (s = u));
                break;
              case "multiple":
                (u !== o && (ge = !0), (c = u));
              default:
                u !== o && Ne(e, t, n, u, a, o);
            }
        ((t = s),
          (l = c),
          (a = b),
          h != null
            ? _a(e, !!l, h, !1)
            : !!a != !!l &&
              (t != null ? _a(e, !!l, t, !0) : _a(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        b = h = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, s, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                (n !== u && (ge = !0), (h = n));
                break;
              case "defaultValue":
                (n !== u && (ge = !0), (b = n));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && Ne(e, t, c, n, a, u);
            }
        br(e, h, b);
        return;
      case "option":
        for (var R in l)
          if (
            ((h = l[R]),
            l.hasOwnProperty(R) && h != null && !a.hasOwnProperty(R))
          )
            switch (R) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(e, t, R, null, a, h);
            }
        for (o in a)
          if (
            ((h = a[o]),
            (b = l[o]),
            a.hasOwnProperty(o) && h !== b && (h != null || b != null))
          )
            switch (o) {
              case "selected":
                (h !== b && (ge = !0),
                  (e.selected =
                    h && typeof h != "function" && typeof h != "symbol"));
                break;
              default:
                Ne(e, t, o, h, a, b);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in l)
          ((h = l[Y]),
            l.hasOwnProperty(Y) &&
              h != null &&
              !a.hasOwnProperty(Y) &&
              Ne(e, t, Y, null, a, h));
        for (y in a)
          if (
            ((h = a[y]),
            (b = l[y]),
            a.hasOwnProperty(y) && h !== b && (h != null || b != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(r(137, t));
                break;
              default:
                Ne(e, t, y, h, a, b);
            }
        return;
      default:
        if (mc(t)) {
          for (var ee in l)
            ((h = l[ee]),
              l.hasOwnProperty(ee) &&
                h !== void 0 &&
                !a.hasOwnProperty(ee) &&
                fo(e, t, ee, void 0, a, h));
          for (j in a)
            ((h = a[j]),
              (b = l[j]),
              !a.hasOwnProperty(j) ||
                h === b ||
                (h === void 0 && b === void 0) ||
                fo(e, t, j, h, a, b));
          return;
        }
    }
    for (var v in l)
      ((h = l[v]),
        l.hasOwnProperty(v) &&
          h != null &&
          !a.hasOwnProperty(v) &&
          Ne(e, t, v, null, a, h));
    for (N in a)
      ((h = a[N]),
        (b = l[N]),
        !a.hasOwnProperty(N) ||
          h === b ||
          (h == null && b == null) ||
          Ne(e, t, N, h, a, b));
  }
  function Om(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Fv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          c = n.initiatorType,
          s = n.duration;
        if (u && s && Om(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var o = l[a],
              y = o.startTime;
            if (y > s) break;
            var j = o.transferSize,
              N = o.initiatorType;
            j &&
              Om(N) &&
              ((o = o.responseEnd), (c += j * (o < s ? 1 : (s - y) / (o - y))));
          }
          if ((--a, (t += (8 * (u + c)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var mo = null,
    ho = null;
  function cu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function _m(e, t, l, a) {
    return (
      (l = cu(l).createElement(e)),
      (l[$e] = a),
      (l[mt] = t),
      at(l, e, t),
      Ke(l),
      l
    );
  }
  function vo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yo = null;
  function Wv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yo
        ? !1
        : ((yo = e), !0)
      : ((yo = null), !1);
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0,
    Iv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rm = typeof Promise == "function" ? Promise : void 0,
    Um =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : go,
    $v =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rm < "u"
          ? function (e) {
              return Rm.resolve(null).then(e).catch(Pv);
            }
          : go;
  function Pv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Fl(e) {
    return e === "head";
  }
  function Hm(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), gn(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") No(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), No(l));
          for (var u = l.firstChild; u;) {
            var c = u.nextSibling,
              s = u.nodeName;
            (u[Nn] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = c));
          }
        } else l === "body" && No(e.ownerDocument.body);
      l = n;
    } while (l);
    gn(t);
  }
  function Lm(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function qm(e, t, l) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (e.style.viewTransitionName = t),
      l != null && (e.style.viewTransitionClass = l),
      (l = getComputedStyle(e)),
      l.display === "inline")
    ) {
      if (((t = e.getClientRects()), t.length === 1)) var a = 1;
      else
        for (var n = (a = 0); n < t.length; n++) {
          var u = t[n];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 &&
        ((e = e.style),
        (e.display = t.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + l.paddingTop),
        (e.marginBottom = "-" + l.paddingBottom));
    }
  }
  function Bm(e, t) {
    ((e = e.style), (t = t.style));
    var l =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      (l =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      e.display === "inline-block" &&
        (t == null
          ? (e.display = e.margin = "")
          : ((l = t.display),
            (e.display = l == null || typeof l == "boolean" ? "" : l),
            (l = t.margin),
            l != null
              ? (e.margin = l)
              : ((l = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (e.marginTop = l == null || typeof l == "boolean" ? "" : l),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (e.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function e0(e, t, l) {
    return (
      (l = l.ownerDocument.defaultView),
      {
        rect: e,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= l.innerHeight &&
          e.left <= l.innerWidth,
      }
    );
  }
  function po(e) {
    var t = e.getBoundingClientRect(),
      l = getComputedStyle(e);
    return e0(t, l, e);
  }
  function t0(e) {
    return e.documentElement.clientHeight;
  }
  function l0(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function a0(e, t, l, a, n, u, c, s, o) {
    var y = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var j = y.startViewTransition({
        update: function () {
          var h = y.defaultView,
            b = h.navigation && h.navigation.transition,
            R = y.fonts.status;
          a();
          var Y = [];
          if (
            (R === "loaded" &&
              (t0(y), y.fonts.status === "loading" && Y.push(y.fonts.ready)),
            (R = Y.length),
            e !== null)
          )
            for (var ee = e.suspenseyImages, v = 0, d = 0; d < ee.length; d++) {
              var g = ee[d];
              if (!g.complete) {
                var T = g.getBoundingClientRect();
                if (
                  0 < T.bottom &&
                  0 < T.right &&
                  T.top < h.innerHeight &&
                  T.left < h.innerWidth
                ) {
                  if (((v += uh(g)), v > Yi)) {
                    Y.length = R;
                    break;
                  }
                  ((g = new Promise(l0.bind(g))), Y.push(g));
                }
              }
            }
          if (0 < Y.length)
            return (
              (h = Promise.race([
                Promise.all(Y),
                new Promise(function (L) {
                  return setTimeout(L, 500);
                }),
              ]).then(n, n)),
              (b ? Promise.allSettled([b.finished, h]) : h).then(u, u)
            );
          if ((n(), b)) return b.finished.then(u, u);
          u();
        },
        types: l,
      });
      y.__reactViewTransition = j;
      var N = [];
      return (
        j.ready.then(
          function () {
            for (
              var h = y.documentElement.getAnimations({ subtree: !0 }), b = 0;
              b < h.length;
              b++
            ) {
              var R = h[b],
                Y = R.effect,
                ee = Y.pseudoElement;
              if (ee != null && ee.startsWith("::view-transition")) {
                (N.push(R), (R = Y.getKeyframes()));
                for (var v = (ee = void 0), d = !0, g = 0; g < R.length; g++) {
                  var T = R[g],
                    L = T.width;
                  if (ee === void 0) ee = L;
                  else if (ee !== L) {
                    d = !1;
                    break;
                  }
                  if (((L = T.height), v === void 0)) v = L;
                  else if (v !== L) {
                    d = !1;
                    break;
                  }
                  (delete T.width,
                    delete T.height,
                    T.transform === "none" && delete T.transform);
                }
                d &&
                  ee !== void 0 &&
                  v !== void 0 &&
                  (Y.setKeyframes(R),
                  (d = getComputedStyle(Y.target, Y.pseudoElement)),
                  d.width !== ee || d.height !== v) &&
                  ((d = R[0]),
                  (d.width = ee),
                  (d.height = v),
                  (d = R[R.length - 1]),
                  (d.width = ee),
                  (d.height = v),
                  Y.setKeyframes(R));
              }
            }
            c();
          },
          function (h) {
            y.__reactViewTransition === j && (y.__reactViewTransition = null);
            try {
              if (typeof h == "object" && h !== null)
                switch (h.name) {
                  case "InvalidStateError":
                    (h.message ===
                      "View transition was skipped because document visibility state is hidden." ||
                      h.message ===
                        "Skipping view transition because document visibility state has become hidden." ||
                      h.message ===
                        "Skipping view transition because viewport size changed." ||
                      h.message ===
                        "Transition was aborted because of invalid state") &&
                      (h = null);
                }
              h !== null && o(h);
            } finally {
              (a(), n(), c());
            }
          },
        ),
        j.finished.finally(function () {
          for (var h = 0; h < N.length; h++) N[h].cancel();
          (y.__reactViewTransition === j && (y.__reactViewTransition = null),
            s());
        }),
        j
      );
    } catch {
      return (a(), n(), c(), null);
    }
  }
  function Ta(e, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + t + ")"));
  }
  ((Ta.prototype.animate = function (e, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : J({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(e, t)
    );
  }),
    (Ta.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          t = this._selector,
          l = e.getAnimations({ subtree: !0 }),
          a = [],
          n = 0;
        n < l.length;
        n++
      ) {
        var u = l[n].effect;
        u !== null && u.target === e && u.pseudoElement === t && a.push(l[n]);
      }
      return a;
    }),
    (Ta.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function wm(e) {
    return {
      name: e,
      group: new Ta("group", e),
      imagePair: new Ta("image-pair", e),
      old: new Ta("old", e),
      new: new Ta("new", e),
    };
  }
  function Ot(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  Ot.prototype.addEventListener = function (e, t, l) {
    var a = null,
      n = null;
    if (!(
      l != null &&
      typeof l != "boolean" &&
      ((a = l.signal || null), a !== null && a.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Gm(u, e, t, l) === -1) {
        var c = this,
          s = t;
        (l != null &&
          typeof l != "boolean" &&
          l.once === !0 &&
          (s = function (o) {
            (c.removeEventListener(e, t, l),
              typeof t == "function" ? t.call(this, o) : t.handleEvent(o));
          }),
          a !== null &&
            ((n = c.removeEventListener.bind(c, e, t, l)),
            a.addEventListener("abort", n, { once: !0 }),
            (n = a.removeEventListener.bind(a, "abort", n))),
          (a = fn(l)),
          u.push({
            type: e,
            listener: t,
            optionsOrUseCapture: l,
            attachedListener: s,
            cleanup: n,
          }),
          x(this._fragmentFiber.child, !1, n0, e, s, a));
      }
      this._eventListeners = u;
    }
  };
  function n0(e, t, l, a) {
    return (_(e).addEventListener(t, l, a), !1);
  }
  Ot.prototype.removeEventListener = function (e, t, l) {
    var a = this._eventListeners;
    if (a !== null && ((t = Gm(a, e, t, l)), t !== -1)) {
      var n = a[t];
      l = n.attachedListener;
      var u = n.cleanup;
      ((n = fn(n.optionsOrUseCapture)),
        x(this._fragmentFiber.child, !1, u0, e, l, n),
        a.splice(t, 1),
        u !== null && u());
    }
  };
  function u0(e, t, l, a) {
    return (_(e).removeEventListener(t, l, a), !1);
  }
  function fn(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? { capture: e.capture, passive: e.passive }
      : e;
  }
  function Ym(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function Gm(e, t, l, a) {
    if (e.length === 0) return -1;
    a = Ym(a);
    for (var n = 0; n < e.length; n++) {
      var u = e[n];
      if (u.type === t && u.listener === l && Ym(u.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  ((Ot.prototype.dispatchEvent = function (e) {
    var t = C(this._fragmentFiber);
    if (t === null) return !0;
    t = _(t);
    var l = this._eventListeners;
    if ((l !== null && 0 < l.length) || !e.bubbles) {
      var a =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (l)
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.addEventListener(
            u.type,
            u.attachedListener,
            fn(u.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(a), (e = a.dispatchEvent(e)), l))
        for (n = 0; n < l.length; n++)
          ((u = l[n]),
            a.removeEventListener(
              u.type,
              u.attachedListener,
              fn(u.optionsOrUseCapture),
            ));
      return (t.removeChild(a), e);
    }
    return t.dispatchEvent(e);
  }),
    (Ot.prototype.focus = function (e) {
      x(this._fragmentFiber.child, !0, Vm, e, void 0, void 0);
    }));
  function Vm(e, t) {
    return e.tag === 6 ? !1 : ((e = _(e)), g0(e, t));
  }
  Ot.prototype.focusLast = function (e) {
    var t = [];
    x(this._fragmentFiber.child, !0, bo, t, void 0, void 0);
    for (var l = t.length - 1; 0 <= l && !Vm(t[l], e); l--);
  };
  function bo(e, t) {
    return (t.push(e), !1);
  }
  Ot.prototype.blur = function () {
    var e = C(this._fragmentFiber);
    e !== null &&
      ((e = _(e)),
      (e = cu(e).activeElement),
      e !== null && x(this._fragmentFiber.child, !1, i0, e, void 0, void 0));
  };
  function i0(e, t) {
    return e.tag === 6
      ? !1
      : ((e = _(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Ot.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      x(this._fragmentFiber.child, !1, c0, e, void 0, void 0));
  };
  function c0(e, t) {
    return (e.tag === 6 || ((e = _(e)), t.observe(e)), !1);
  }
  Ot.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      (t.delete(e), x(this._fragmentFiber.child, !1, s0, e, void 0, void 0));
      for (var l = (t = 0); l < Jt.length; l++) {
        var a = Jt[l];
        a.fragmentInstance === this && a.observer === e
          ? e.unobserve(a.instance)
          : (Jt[t++] = a);
      }
      Jt.length = t;
    }
  };
  function s0(e, t) {
    return (e.tag === 6 || ((e = _(e)), t.unobserve(e)), !1);
  }
  var Jt = [],
    xo = !1;
  function o0(e, t, l) {
    (Jt.push({ fragmentInstance: e, observer: t, instance: l }),
      xo ||
        ((xo = !0),
        p0(function () {
          xo = !1;
          var a = Jt;
          Jt = [];
          for (var n = 0; n < a.length; n++) {
            var u = a[n];
            u.observer.unobserve(u.instance);
          }
        })));
  }
  Ot.prototype.getClientRects = function () {
    var e = [];
    return (x(this._fragmentFiber.child, !1, r0, e, void 0, void 0), e);
  };
  function r0(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var l = e.ownerDocument.createRange();
      (l.selectNodeContents(e), t.push.apply(t, l.getClientRects()));
    } else ((e = _(e)), t.push.apply(t, e.getClientRects()));
    return !1;
  }
  ((Ot.prototype.getRootNode = function (e) {
    var t = C(this._fragmentFiber);
    return t === null ? this : _(t).getRootNode(e);
  }),
    (Ot.prototype.compareDocumentPosition = function (e) {
      var t = C(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var l = [];
      x(this._fragmentFiber.child, !1, bo, l, void 0, void 0);
      var a = _(t);
      if (l.length === 0) {
        if (((l = a), $(this._fragmentFiber))) {
          e: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break e;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (l = t);
        }
        t = this._fragmentFiber;
        var n = (a = l.compareDocumentPosition(e));
        return (
          l === e
            ? (n = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((l = te(t)[1]),
              l === null
                ? (n = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = _(l).compareDocumentPosition(e)),
                  (n =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = _(l[0])), (n = _(l[l.length - 1])));
      var u = $(this._fragmentFiber) ? t.parentElement : a;
      if (u == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (u =
          u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var c = t.compareDocumentPosition(e),
        s = n.compareDocumentPosition(e),
        o =
          c & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          s & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (s =
          a &&
          u &&
          c & Node.DOCUMENT_POSITION_FOLLOWING &&
          s & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (a && t === e) || (u && n === e) || o || s
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && t === e) || (!u && n === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : c),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        f0(t, this._fragmentFiber, l[0], l[l.length - 1], e)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function f0(e, t, l, a, n) {
    var u = aa(n);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((l = !!u))
        e: {
          for (; u !== null;) {
            if (u.tag === 7 && (u === t || u.alternate === t)) {
              l = !0;
              break e;
            }
            u = u.return;
          }
          l = !1;
        }
      return l;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return (
          (u = n.ownerDocument),
          n === u || n === u.documentElement || n === u.body
        );
      e: {
        for (u = t, t = C(t); u !== null;) {
          if (!(
            (u.tag !== 5 && u.tag !== 3 && u.tag !== 27) ||
            (u !== t && u.alternate !== t)
          )) {
            u = !0;
            break e;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!u) &&
          !(t = u === l) &&
          ((t = fe(l, u, me)),
          t === null
            ? (t = !1)
            : (x(t, !0, ze, u, l), (u = xe), (xe = null), (t = u !== null))),
        t)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!u) &&
            !(t = u === a) &&
            ((t = fe(a, u, me)),
            t === null
              ? (t = !1)
              : (x(t, !0, U, u, a),
                (u = xe),
                (Ae = xe = null),
                (t = u !== null))),
          t)
        : !1;
  }
  function Xm(e, t) {
    var l = e.ownerDocument.createRange();
    (l.selectNodeContents(e),
      (e = l.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        t
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight,
      ));
  }
  Ot.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(r(566));
    var t = [];
    x(this._fragmentFiber.child, !1, bo, t, void 0, void 0);
    var l = e !== !1;
    if (t.length === 0) {
      var a = te(this._fragmentFiber);
      if (
        ((a = l ? a[1] || a[0] || C(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((e = _(a)), Xm(e, l));
        return;
      }
      if (((a = _(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((l = "host" in a ? a.host : null),
            l !== null && l.scrollIntoView(e));
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = l ? t.length - 1 : 0; a !== (l ? -1 : t.length);) {
      var n = t[a];
      (n.tag === 6 ? ((n = _(n)), Xm(n, l)) : _(n).scrollIntoView(e),
        (a += l ? -1 : 1));
    }
  };
  function d0(e, t) {
    return ((e = _(e)), Qm(e, t), !1);
  }
  function Qm(e, t) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(t));
  }
  function Zm(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.addEventListener(
          n.type,
          n.attachedListener,
          fn(n.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((l = t._observers),
      l !== null &&
        l.forEach(function (u) {
          for (var c = 0, s = 0; s < Jt.length; s++) {
            var o = Jt[s];
            (o.fragmentInstance !== t ||
              o.observer !== u ||
              o.instance !== e) &&
              (Jt[c++] = o);
          }
          ((Jt.length = c), u.observe(e));
        }),
      Qm(e, t));
  }
  function m0(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.removeEventListener(
          n.type,
          n.attachedListener,
          fn(n.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((l = t._observers),
      l !== null &&
        l.forEach(function (u) {
          typeof u.rootMargin == "string" ? o0(t, u, e) : u.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(t));
  }
  function jo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (jo(l), Mu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function h0(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Nn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = qt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function v0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Km(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function So(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Eo(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function y0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function qt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var To = null;
  function Jm(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return qt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function km(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function g0(e, t) {
    function l() {
      a = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var a = !1;
    try {
      (e.ownerDocument.addEventListener("focus", l, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, t));
    } finally {
      e.ownerDocument.removeEventListener("focus", l, !0);
    }
    return a;
  }
  function p0(e) {
    Um(function () {
      Um(function (t) {
        return e(t);
      });
    });
  }
  function Fm(e, t, l) {
    switch (((t = cu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Wm(e, t, l) {
    for (var a in l) {
      var n = l[a];
      l.hasOwnProperty(a) && n != null && Ne(e, t, a, null, Jv, n);
    }
    (l.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === $t && (e.onclick = null),
      Mu(e));
  }
  function No(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    Mu(e);
  }
  var Bt = new Map(),
    Im = new Set();
  function su(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Nl = W.d;
  W.d = { f: b0, r: x0, D: j0, C: S0, L: E0, m: T0, X: A0, S: N0, M: z0 };
  function b0() {
    var e = Nl.f(),
      t = Ci();
    return e || t;
  }
  function x0(e) {
    var t = Oa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pf(t) : Nl.r(e);
  }
  var dn = typeof document > "u" ? null : document;
  function $m(e, t, l) {
    var a = dn;
    if (a && typeof t == "string" && t) {
      var n = Dt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Im.has(n) ||
          (Im.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            at(t, "link", e),
            Ke(t),
            a.head.appendChild(t))));
    }
  }
  function j0(e) {
    (Nl.D(e), $m("dns-prefetch", e, null));
  }
  function S0(e, t) {
    (Nl.C(e, t), $m("preconnect", e, t));
  }
  function E0(e, t, l) {
    Nl.L(e, t, l);
    var a = dn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Dt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Dt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Dt(l.imageSizes) + '"]'))
        : (n += '[href="' + Dt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = mn(e);
          break;
        case "script":
          u = hn(e);
      }
      if (!(
        Bt.has(u) ||
        ((e = J(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Bt.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(ou(u))) ||
          (t === "script" && a.querySelector(ru(u))))
      )) {
        var c = a.createElement("link");
        (at(c, "link", e),
          t === "style" &&
            ((c[zu] = !0),
            (c.onload = c.onerror =
              function () {
                rr(c);
              })),
          Ke(c),
          a.head.appendChild(c));
      }
    }
  }
  function T0(e, t) {
    Nl.m(e, t);
    var l = dn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Dt(a) + '"][href="' + Dt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = hn(e);
      }
      if (
        !Bt.has(u) &&
        ((e = J({ rel: "modulepreload", href: e }, t)),
        Bt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ru(u))) return;
        }
        ((a = l.createElement("link")),
          at(a, "link", e),
          Ke(a),
          l.head.appendChild(a));
      }
    }
  }
  function N0(e, t, l) {
    Nl.S(e, t, l);
    var a = dn;
    if (a && e) {
      var n = Da(a).hoistableStyles,
        u = mn(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = a.querySelector(ou(u)))) s.loading = 5;
        else {
          ((e = J({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Bt.get(u)) && Ao(e, l));
          var o = (c = a.createElement("link"));
          (Ke(o),
            at(o, "link", e),
            (o._p = new Promise(function (y, j) {
              ((o.onload = y), (o.onerror = j));
            })),
            o.addEventListener("load", function () {
              s.loading |= 1;
            }),
            o.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Bi(c, t, a));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: s }),
          n.set(u, c));
      }
    }
  }
  function A0(e, t) {
    Nl.X(e, t);
    var l = dn;
    if (l && e) {
      var a = Da(l).hoistableScripts,
        n = hn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(ru(n))),
        u ||
          ((e = J({ src: e, async: !0 }, t)),
          (t = Bt.get(n)) && zo(e, t),
          (u = l.createElement("script")),
          Ke(u),
          at(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function z0(e, t) {
    Nl.M(e, t);
    var l = dn;
    if (l && e) {
      var a = Da(l).hoistableScripts,
        n = hn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(ru(n))),
        u ||
          ((e = J({ src: e, async: !0, type: "module" }, t)),
          (t = Bt.get(n)) && zo(e, t),
          (u = l.createElement("script")),
          Ke(u),
          at(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Pm(e, t, l, a) {
    var n = (n = Al.current) ? su(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((l = mn(l.href)),
            (t = Da(n).hoistableStyles),
            (a = t.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = mn(l.href);
          var u = Da(n).hoistableStyles,
            c = u.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, c),
              (u = n.querySelector(ou(e)))
                ? u._p || ((c.instance = u), (c.state.loading = 5))
                : ((u = Bt.get(e)),
                  u ||
                    ((u = {
                      rel: "preload",
                      as: "style",
                      href: l.href,
                      crossOrigin: l.crossOrigin,
                      integrity: l.integrity,
                      media: l.media,
                      hrefLang: l.hrefLang,
                      referrerPolicy: l.referrerPolicy,
                    }),
                    Bt.set(e, u)),
                  M0(n, e, u, c.state))),
            t && a === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((l = hn(l)),
              (t = Da(n).hoistableScripts),
              (a = t.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function mn(e) {
    return 'href="' + Dt(e) + '"';
  }
  function ou(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function eh(e) {
    return J({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function M0(e, t, l, a) {
    if ((t = e.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[zu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((t = e.createElement("link")),
        (t[zu] = !0),
        (t.onload = t.onerror = rr.bind(null, t)),
        at(t, "link", l),
        Ke(t),
        e.head.appendChild(t));
    ((a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function hn(e) {
    return '[src="' + Dt(e) + '"]';
  }
  function ru(e) {
    return "script[async]" + e;
  }
  function th(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Dt(l.href) + '"]');
          if (a) return ((t.instance = a), Ke(a), a);
          var n = J({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Ke(a),
            at(a, "style", n),
            Bi(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = mn(l.href);
          var u = e.querySelector(ou(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Ke(u), u);
          ((a = eh(l)),
            (n = Bt.get(n)) && Ao(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Ke(u));
          var c = u;
          return (
            (c._p = new Promise(function (s, o) {
              ((c.onload = s), (c.onerror = o));
            })),
            at(u, "link", a),
            (t.state.loading |= 4),
            Bi(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = hn(l.src)),
            (n = e.querySelector(ru(u)))
              ? ((t.instance = n), Ke(n), n)
              : ((a = l),
                (n = Bt.get(u)) && ((a = J({}, l)), zo(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Ke(n),
                at(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Bi(a, l.precedence, e));
    return t.instance;
  }
  function Bi(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var s = a[c];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Ao(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function zo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var wi = null;
  function lh(e, t, l) {
    if (wi === null) {
      var a = new Map(),
        n = (wi = new Map());
      n.set(l, a);
    } else ((n = wi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Nn] ||
          u[$e] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Mo(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function O0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ah(e, t) {
    return (
      e === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function nh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function uh(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function ih(e, t) {
    typeof t.decode == "function" &&
      (e.imgCount++,
      t.complete || ((e.imgBytes += uh(t)), e.suspenseyImages.push(t)),
      (e = _0.bind(e)),
      t.decode().then(e, e));
  }
  function D0(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = mn(a.href),
          u = t.querySelector(ou(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = fu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Ke(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = eh(a)),
          (n = Bt.get(n)) && Ao(a, n),
          (u = u.createElement("link")),
          Ke(u));
        var c = u;
        ((c._p = new Promise(function (s, o) {
          ((c.onload = s), (c.onerror = o));
        })),
          at(u, "link", a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = fu.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Yi = 0;
  function C0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Vi(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Vi(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Yi === 0 && (Yi = 62500 * Fv());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Vi(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Yi ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ch(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Vi(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        ((e.unsuspend = null), t());
      }
    }
  }
  function fu() {
    (this.count--, ch(this));
  }
  function _0() {
    (this.imgCount--, ch(this));
  }
  var Gi = null;
  function Vi(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Gi = new Map()),
        t.forEach(R0, e),
        (Gi = null),
        fu.call(e)));
  }
  function R0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Gi.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Gi.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = fu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var vn = {
    $$typeof: Ye,
    Provider: null,
    Consumer: null,
    _currentValue: rl,
    _currentValue2: rl,
    _threadCount: 0,
  };
  function U0(e, t, l, a, n, u, c, s, o) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = cc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cc(0)),
      (this.hiddenUpdates = cc(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function sh(e, t, l, a, n, u, c, s, o, y, j, N) {
    return (
      (e = new U0(e, t, l, c, o, y, j, N, s)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Vc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Kc(u),
      e
    );
  }
  function oh(e) {
    return e ? ((e = Ya), e) : Ya;
  }
  function rh(e, t, l, a, n, u) {
    ((n = oh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ql(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = Bl(e, a, t)),
      l !== null && (pt(l, e, t), Vn(l, e, t)));
  }
  function fh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Oo(e, t) {
    (fh(e, t), (e = e.alternate) && fh(e, t));
  }
  function dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ca(e, 67108864);
      (t !== null && pt(t, e, 67108864), Oo(e, 67108864));
    }
  }
  function mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mt();
      t = sc(t);
      var l = ca(e, t);
      (l !== null && pt(l, e, t), Oo(e, t));
    }
  }
  var yn = !0;
  function H0(e, t, l, a) {
    var n = V.T;
    V.T = null;
    var u = W.p;
    try {
      ((W.p = 2), Do(e, t, l, a));
    } finally {
      ((W.p = u), (V.T = n));
    }
  }
  function L0(e, t, l, a) {
    var n = V.T;
    V.T = null;
    var u = W.p;
    try {
      ((W.p = 8), Do(e, t, l, a));
    } finally {
      ((W.p = u), (V.T = n));
    }
  }
  function Do(e, t, l, a) {
    if (yn) {
      var n = Co(a);
      if (n === null) (ro(e, t, a, Xi, l), vh(e, a));
      else if (B0(n, e, t, l, a)) a.stopPropagation();
      else if ((vh(e, a), t & 4 && -1 < q0.indexOf(e))) {
        for (; n !== null;) {
          var u = Oa(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = la(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c;) {
                      var o = 1 << (31 - jt(c));
                      ((s.entanglements[1] |= o), (c &= ~o));
                    }
                    (sl(u), (be & 6) === 0 && ((Mi = bt() + 500), nu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = ca(u, 2)), s !== null && pt(s, u, 2), Ci(), Oo(u, 2));
            }
          if (((u = Co(a)), u === null && ro(e, t, a, Xi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else ro(e, t, a, null, l);
    }
  }
  function Co(e) {
    return ((e = vc(e)), _o(e));
  }
  var Xi = null;
  function _o(e) {
    if (((Xi = null), (e = aa(e)), e !== null)) {
      var t = S(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = q(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = G(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Xi = e), null);
  }
  function hh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Fh()) {
          case $o:
            return 2;
          case Po:
            return 8;
          case Su:
          case Wh:
            return 32;
          case er:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ro = !1,
    Wl = null,
    Il = null,
    $l = null,
    du = new Map(),
    mu = new Map(),
    Pl = [],
    q0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function vh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wl = null;
        break;
      case "dragenter":
      case "dragleave":
        Il = null;
        break;
      case "mouseover":
      case "mouseout":
        $l = null;
        break;
      case "pointerover":
      case "pointerout":
        du.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mu.delete(t.pointerId);
    }
  }
  function hu(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Oa(t)), t !== null && dh(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function B0(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Wl = hu(Wl, e, t, l, a, n)), !0);
      case "dragenter":
        return ((Il = hu(Il, e, t, l, a, n)), !0);
      case "mouseover":
        return (($l = hu($l, e, t, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (du.set(u, hu(du.get(u) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          mu.set(u, hu(mu.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function yh(e) {
    var t = aa(e.target);
    if (t !== null) {
      var l = S(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = q(l)), t !== null)) {
            ((e.blockedOn = t),
              cr(e.priority, function () {
                mh(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = G(l)), t !== null)) {
            ((e.blockedOn = t),
              cr(e.priority, function () {
                mh(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = Co(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((hc = a), l.target.dispatchEvent(a), (hc = null));
      } else return ((t = Oa(l)), t !== null && dh(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function gh(e, t, l) {
    Qi(e) && l.delete(t);
  }
  function w0() {
    ((Ro = !1),
      Wl !== null && Qi(Wl) && (Wl = null),
      Il !== null && Qi(Il) && (Il = null),
      $l !== null && Qi($l) && ($l = null),
      du.forEach(gh),
      mu.forEach(gh));
  }
  function Zi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ro ||
        ((Ro = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, w0)));
  }
  var Ki = null;
  function ph(e) {
    Ki !== e &&
      ((Ki = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Ki === e && (Ki = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (_o(a || l) === null) continue;
            break;
          }
          var u = Oa(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ms(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function gn(e) {
    function t(o) {
      return Zi(o, e);
    }
    (Wl !== null && Zi(Wl, e),
      Il !== null && Zi(Il, e),
      $l !== null && Zi($l, e),
      du.forEach(t),
      mu.forEach(t));
    for (var l = 0; l < Pl.length; l++) {
      var a = Pl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Pl.length && ((l = Pl[0]), l.blockedOn === null);)
      (yh(l), l.blockedOn === null && Pl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[mt] || null;
        if (typeof u == "function") c || ph(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[mt] || null))) s = c.formAction;
            else if (_o(n) !== null) continue;
          } else s = c.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            ph(l));
        }
      }
  }
  function bh() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (n = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Uo(e) {
    this._internalRoot = e;
  }
  ((Ji.prototype.render = Uo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current,
        a = Mt();
      rh(l, a, e, t, null, null);
    }),
    (Ji.prototype.unmount = Uo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rh(e.current, 2, null, e, null, null), Ci(), (t[Ma] = null));
        }
      }));
  function Ji(e) {
    this._internalRoot = e;
  }
  Ji.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ir();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Pl.length && t !== 0 && t < Pl[l].priority; l++);
      (Pl.splice(l, 0, e), l === 0 && yh(e));
    }
  };
  var xh = p.version;
  if (xh !== "19.3.1") throw Error(r(527, xh, "19.3.1"));
  W.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = F(t)),
      (e = e !== null ? M(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Y0 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ki.isDisabled && ki.supportsFiber)
      try {
        ((Sn = ki.inject(Y0)), (xt = ki));
      } catch {}
  }
  return (
    (yu.createRoot = function (e, t) {
      if (!z(e)) throw Error(r(299));
      var l = !1,
        a = "",
        n = od,
        u = rd,
        c = fd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = sh(e, 1, !1, null, null, l, a, null, n, u, c, bh)),
        (e[Ma] = t.current),
        oo(e),
        new Uo(t)
      );
    }),
    (yu.hydrateRoot = function (e, t, l) {
      if (!z(e)) throw Error(r(299));
      var a = !1,
        n = "",
        u = od,
        c = rd,
        s = fd,
        o = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (o = l.formState)),
        (t = sh(e, 1, !0, t, l ?? null, a, n, o, u, c, s, bh)),
        (t.context = oh(null)),
        (l = t.current),
        (a = Mt()),
        (a = sc(a)),
        (n = ql(a)),
        (n.callback = null),
        Bl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Tn(t, l),
        sl(t),
        (e[Ma] = t.current),
        oo(e),
        new Ji(t)
      );
    }),
    (yu.version = "19.3.1"),
    yu
  );
}
var Dh;
function W0() {
  if (Dh) return qo.exports;
  Dh = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return (f(), (qo.exports = F0()), qo.exports);
}
var I0 = W0();
const $0 = Hh(I0);
var P0 = Lh();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  qh = (...f) =>
    f
      .filter((p, E, r) => !!p && p.trim() !== "" && r.indexOf(p) === E)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ty = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ly = w.forwardRef(
  (
    {
      color: f = "currentColor",
      size: p = 24,
      strokeWidth: E = 2,
      absoluteStrokeWidth: r,
      className: z = "",
      children: S,
      iconNode: q,
      ...G
    },
    D,
  ) =>
    w.createElement(
      "svg",
      {
        ref: D,
        ...ty,
        width: p,
        height: p,
        stroke: f,
        strokeWidth: r ? (Number(E) * 24) / Number(p) : E,
        className: qh("lucide", z),
        ...G,
      },
      [
        ...q.map(([F, M]) => w.createElement(F, M)),
        ...(Array.isArray(S) ? S : [S]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = (f, p) => {
  const E = w.forwardRef(({ className: r, ...z }, S) =>
    w.createElement(ly, {
      ref: S,
      iconNode: p,
      className: qh(`lucide-${ey(f)}`, r),
      ...z,
    }),
  );
  return ((E.displayName = `${f}`), E);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ay = he("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = he("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wt = he("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ny = he("AudioLines", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uy = he("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iy = he("BriefcaseBusiness", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fi = he("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xo = he("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wh = he("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gu = he("Disc3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = he("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa",
    },
  ],
  [
    "path",
    {
      d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
      key: "14pb5j",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $i = he("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pu = he("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ko = he("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = he("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oy = he("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = he("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fy = he("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wi = he("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = he("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yh = he("Music2", [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gh = he("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const my = he("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vh = he("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hy = he("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vy = he("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = he("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = he("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const py = he("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = he("Tv", [
  [
    "rect",
    {
      width: "20",
      height: "15",
      x: "2",
      y: "7",
      rx: "2",
      ry: "2",
      key: "10ag99",
    },
  ],
  ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = he("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = he("VolumeX", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = he("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  re = {
    name: "Alexey",
    nickname: "noxx",
    username: "@noxx",
    motto: "Seek your happiness before you die.",
    avatar: "/media/discord-avatar.jpg",
    availableForWork: !0,
    experience: {
      "pt-br": "1 ano e 6 meses",
      en: "1 year and 6 months",
      es: "1 año y 6 meses",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "discord.js",
      "REST API",
    ],
    favoriteLanguage: "JavaScript",
    intro: {
      "pt-br":
        "Desenvolvo bots, sites, aplicativos, APIs e sistemas. Aprendi com videoaulas no YouTube e hoje transformo ideias em projetos próprios e trabalhos para clientes.",
      en: "I build bots, websites, apps, APIs and systems. I started learning from YouTube tutorials and now turn ideas into projects and freelance work.",
      es: "Desarrollo bots, sitios web, aplicaciones, APIs y sistemas. Empecé con tutoriales de YouTube y hoy convierto ideas en proyectos y encargos.",
    },
    about: {
      "pt-br":
        "Sou Alexey, também conhecido como noxx. Programo há 1 ano e 6 meses: comecei assistindo a videoaulas no YouTube e fui aprendendo enquanto criava. Gosto principalmente de desenvolver bots, websites, APIs e aplicativos. Trabalho como freelancer e estou disponível para novos projetos. Fora do código, gosto de música, jogar, assistir animes e jogar futebol.",
      en: "I’m Alexey, also known as noxx. I’ve been coding for a year and a half, starting with YouTube lessons and learning as I built. I enjoy making bots, websites, APIs and apps. I work freelance and am open for projects. Outside coding, I’m into music, games, anime and football.",
      es: "Soy Alexey, también conocido como noxx. Llevo un año y medio programando: empecé con tutoriales de YouTube y aprendí construyendo. Me gustan los bots, sitios web, APIs y aplicaciones. Trabajo como freelancer y acepto nuevos proyectos. Fuera del código, me gustan la música, los videojuegos, el anime y el fútbol.",
    },
    interests: ["Programação", "Música", "Jogos", "Animes", "Futebol"],
    favorites: [
      { key: "anime", value: "Jujutsu Kaisen · Naruto" },
      { key: "series", value: "The Last of Us" },
      { key: "character", value: "Sasuke Uchiha" },
      { key: "game", value: "Minecraft" },
      { key: "language", value: "JavaScript" },
    ],
    services: ["Websites", "Bots", "APIs", "Aplicativos"],
    socials: {
      instagram: "https://instagram.com/eliminacoes",
      tiktok: "https://www.tiktok.com/@ihlst",
      discordProfile: "https://discord.com/users/1390503484675063939",
      discordHandle: "@noxx.lat",
      discordId: "1390503484675063939",
      community: "https://discord.gg/lyabot",
      project: "https://lya.lat",
      github: "https://github.com/alexeycodex",
      lastfm: "https://www.last.fm/user/noxxtopi",
    },
    discord: {
      avatar: "/media/discord-avatar.jpg",
      banner: "/media/discord-banner.gif",
      badges: [
        {
          image: "/media/discord-badge-nitro-prata.png",
          name: "Nitro Prata",
          rarity: "Rara",
          unlocked: "25/08/2026",
          detail: "Assinante desde 25/05/2026",
        },
        {
          image: "/media/discord-badge-inabalavel.png",
          name: "Inabalável",
          rarity: "Épica",
          unlocked: "29/10/2026",
          detail: "4.792 horas registradas em 29/10/2026",
        },
      ],
    },
    contact: {
      whatsapp: "5514982117308",
      text: "Olá, Alexey! Vi seu portfólio e gostaria de conversar sobre um projeto.",
    },
  },
  pn = [
    {
      id: "lya",
      title: "Lya",
      category: "bots",
      status: "active",
      technologies: [
        "JavaScript",
        "Node.js",
        "discord.js",
        "Express",
        "REST API",
      ],
      summary: {
        "pt-br":
          "Meu projeto de bot para Discord: moderação, automações, utilidades e recursos para comunidades.",
        en: "My Discord bot project: moderation, automation, utilities and tools for communities.",
        es: "Mi proyecto de bot de Discord: moderación, automatización, utilidades y funciones para comunidades.",
      },
      details: {
        "pt-br":
          "Lya é meu projeto principal. Reúne recursos de moderação, proteção, automação, interação e utilidades para servidores do Discord. Desenvolvo a experiência do bot, suas integrações e o site do projeto. Conheça os recursos disponíveis no site oficial.",
        en: "Lya is my main project. It brings moderation, protection, automation, interaction and utilities to Discord servers. I build the bot experience, integrations and its website. Explore the available features on its official site.",
        es: "Lya es mi proyecto principal. Reúne moderación, protección, automatizaciones, interacción y utilidades para servidores de Discord. Desarrollo el bot, las integraciones y su sitio web. Descubre sus funciones en la web oficial.",
      },
      url: "https://lya.lat",
      screenshot: "/media/lya-character.png",
    },
    {
      id: "nulltools",
      title: "Null Tools",
      category: "tools",
      status: "building",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SVG",
        "Web APIs",
        "Node.js",
        "Express",
        "REST API",
        "dotenv",
        "Multer",
        "Helmet",
        "express-rate-limit",
        "FFmpeg",
        "FFprobe",
        "yt-dlp",
        "Sharp",
        "PDF-lib",
        "JSZip",
        "Spotify Web API",
      ],
      summary: {
        "pt-br":
          "Plataforma de ferramentas digitais para baixar, converter, editar e processar mídias, imagens, documentos e arquivos diretamente no navegador.",
        en: "An all-in-one toolkit to download, convert, edit and process media, images, documents and files from your browser.",
        es: "Una plataforma de herramientas digitales para descargar, convertir, editar y procesar multimedia, imágenes, documentos y archivos desde el navegador.",
      },
      details: {
        "pt-br":
          "Null Tools reúne downloads de mídias compatíveis, conversões e edição de áudio e vídeo, ferramentas de imagem, recursos para PDFs e ZIPs e utilitários para desenvolvedores. A plataforma tem interface monocromática, mascote Miaubyte e foco em privacidade, simplicidade e desempenho. Versão 1.0.0 do código-fonte concluída; o projeto permanece em desenvolvimento, aguardando testes completos na hospedagem. Algumas funções dependem de programas externos ou integrações opcionais.",
        en: "Null Tools brings together downloads from compatible media sources, audio and video conversion and editing, image tools, PDF and ZIP utilities, and tools for developers. It features a minimalist monochrome interface and the Miaubyte mascot, with a focus on privacy, simplicity and performance. Version 1.0.0 of the source code is complete; the project is still in development pending full hosting tests. Some features depend on external programs or optional integrations.",
        es: "Null Tools reúne descargas de fuentes compatibles, conversión y edición de audio y video, herramientas de imagen, utilidades para PDF y ZIP y funciones para desarrolladores. Su interfaz monocromática incluye a la mascota Miaubyte y prioriza la privacidad, la sencillez y el rendimiento. El código fuente v1.0.0 está terminado, pero el proyecto sigue en desarrollo a la espera de pruebas completas en el alojamiento. Algunas funciones requieren programas externos o integraciones opcionales.",
      },
      url: "https://nulltools.shardweb.app/",
      logo: "/media/nulltools-logo.jpg",
      screenshot: "/media/nulltools-banner.jpg",
    },
  ],
  Ey = { albums: [], artists: [], tracks: [], playlists: [], favorites: [] },
  Na = (f) =>
    `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${f}/header.jpg`,
  Go = [
    {
      title: "Minecraft",
      platform: "PC · Mobile · Xbox",
      cover:
        "https://store-images.s-microsoft.com/image/apps.53095.13850085746326678.06e2dc5c-7997-46e9-a8e6-0e48b57cb13b.419e3c9d-9dd3-4a28-a9f3-a12350215871",
      coverFallback:
        "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A448%2Ccw%3A1152%2Cch%3A1152%2Cq%3A80%2Cw%3A1152/rpPGiw7RjFaeJCCDBC4Bna.jpg",
      status: ["playing", "favorite", "completed"],
      theme: "#5c8950",
      tagline: "O jogo que mais me marcou",
    },
    {
      title: "Roblox",
      platform: "PC · Mobile",
      cover:
        "https://store-images.s-microsoft.com/image/apps.58700.68327322396008232.bebf9df1-1c64-4f6c-b0af-31eb22f07ff3.ca76e906-0122-4627-925b-3feb7422154f",
      status: ["playing", "favorite"],
      theme: "#667586",
    },
    {
      title: "Counter-Strike 2",
      platform: "PC",
      status: ["playing", "favorite"],
      cover: Na(730),
      theme: "#a88a52",
    },
    {
      title: "Valorant",
      platform: "PC",
      cover:
        "https://image.api.playstation.com/vulcan/ap/rnd/202408/0100/977387041ffee1b30e7b3870b29aaa3eaf533b2e7031939e.png",
      status: ["favorite"],
      theme: "#dc586c",
    },
    {
      title: "Hollow Knight: Silksong",
      platform: "PC",
      status: ["favorite", "completed"],
      cover: Na(1030300),
      theme: "#aa4556",
    },
    {
      title: "The Last of Us Part II",
      platform: "PC · PlayStation",
      status: ["favorite"],
      cover: Na(2531310),
      theme: "#6c8877",
    },
    {
      title: "FiveM (GTA RP)",
      platform: "PC",
      cover: "https://ccdn.g-portal.com/header_cover_Five_M_c82d1daf1c.jpg",
      status: ["favorite"],
      theme: "#c58c62",
    },
    {
      title: "Hollow Knight",
      platform: "PC",
      status: ["completed"],
      cover: Na(367520),
      theme: "#6e809a",
    },
    {
      title: "The Last of Us Part I",
      platform: "PC",
      status: ["completed"],
      cover: Na(1888930),
      theme: "#627f6e",
    },
    {
      title: "GTA V",
      platform: "PC · Xbox",
      status: ["completed"],
      cover: Na(271590),
      theme: "#698760",
    },
    {
      title: "GTA: San Andreas",
      platform: "PC · Xbox",
      status: ["completed"],
      cover: Na(12110),
      theme: "#9b7f5f",
    },
    {
      title: "GTA VI",
      platform: "A definir",
      cover: "https://gtabites.b-cdn.net/artworks/gta6-cover-reveal-grid.jpg",
      status: ["wishlist"],
      theme: "#cb7d94",
    },
  ],
  Ty = {
    nav: ["início", "sobre", "projetos", "música", "jogos", "discord", "mais"],
    settings: "Aparência",
    contact: "contato",
    hire: "Contratar meus serviços",
    viewProjects: "Explorar projetos",
    learnMore: "Quem sou eu",
    available: "Disponível para projetos",
    privateStatus: "Status não conectado",
    open: "Abrir",
    details: "Ver detalhes",
    projects: "projetos",
    music: "música",
    games: "jogos",
    discord: "discord",
    about: "sobre mim",
    homeLabel: "PRAZER, EU SOU O",
    hero1: "Eu sou",
    hero2: "o noxx.",
    hero3: "Faço bots, sites e APIs.",
    homeNote:
      "Programador freelancer. No tempo livre: música, jogos, animes e futebol.",
    live: "EM DESTAQUE",
    myWork: "Meu trabalho",
    lyaLabel: "PROJETO EM DESTAQUE",
    lyaDescription:
      "Meu bot para Discord: moderação, ferramentas e automação para comunidades.",
    explore: "explorar",
    tech: "tecnologias",
    seeAll: "Ver todos os projetos",
    soundtrack: "NA MINHA PLAYLIST",
    notConnected: "Integração ainda não conectada",
    musicEmptyShort: "Minhas músicas no Last.fm.",
    gamesEmptyShort: "Minecraft, Roblox, CS2 e mais.",
    discordMini: "NO DISCORD",
    findMe: "Me encontre por lá",
    aboutEyebrow: "ALÉM DO EDITOR",
    aboutTitle: "Mais do que linhas de código.",
    aboutLead:
      "Como comecei a programar, o que desenvolvo e o que gosto de fazer longe do editor.",
    aboutMe: "um pouco sobre mim",
    philosophy: "UMA FRASE QUE LEVO COMIGO",
    thingsLike: "Coisas que fazem parte de mim",
    skills: "No meu repertório",
    favoriteLang: "Linguagem favorita",
    favorites: "Meus favoritos",
    noFavorites: "Ainda não publiquei essa lista.",
    facts: "Pequenos fatos",
    noFacts: "Em breve, mais sobre mim.",
    projectEyebrow: "IDEIAS QUE SAÍRAM DO PAPEL",
    projectTitle: "Projetos com identidade.",
    projectLead:
      "Da Lya, meu bot para Discord, à Null Tools, minha plataforma de ferramentas digitais.",
    all: "Todos",
    bots: "Bots",
    sites: "Sites",
    tools: "Ferramentas",
    apis: "APIs",
    experiments: "Experimentos",
    active: "Ativo",
    building: "Em desenvolvimento",
    archived: "Arquivado",
    concept: "Prévia ilustrativa · não representa uma captura do produto",
    visit: "Visitar projeto",
    code: "Ver código",
    stack: "Tecnologias",
    status: "Status",
    noProjects: "Nenhum projeto nesta categoria.",
    aboutProject: "Sobre o projeto",
    projectOpen: "Abrir projeto",
    projectBack: "Voltar aos projetos",
    close: "Fechar",
    share: "Compartilhar",
    copied: "Copiado!",
    musicEyebrow: "SOM DE FUNDO PARA TUDO",
    musicTitle: "O que me acompanha nos fones.",
    musicLead: "As músicas que eu ouço, registradas no Last.fm @noxxtopi.",
    nowPlaying: "TOCANDO AGORA",
    lastPlayed: "ÚLTIMA REPRODUÇÃO",
    manual: "COLEÇÃO PESSOAL",
    noTrack: "Ainda sem atividade musical publicada",
    musicDescription:
      "Quando eu conectar minha biblioteca ou adicionar meus favoritos, eles vão aparecer aqui.",
    albums: "Álbuns",
    artists: "Artistas",
    tracks: "Faixas",
    playlists: "Playlists",
    favoriteTab: "Favoritos",
    allTime: "minha coleção",
    dataSource: "Dados exibidos somente quando disponíveis de forma legítima.",
    noMusicItems: "Nenhum item publicado nesta categoria.",
    scrobbles: "reproduções registradas",
    listening: "Ouvindo agora",
    gamesEyebrow: "SAVE POINT",
    gamesTitle: "Meu lado gamer.",
    gamesLead: "Dos jogos que marcaram época aos que ainda quero descobrir.",
    playing: "Jogando",
    gameFavorites: "Favoritos",
    completed: "Zerados",
    wishlist: "Quero jogar",
    gameEmptyTitle: "Minha biblioteca está sendo montada.",
    gameEmptyDesc:
      "Meus jogos, capas, horas reais e opiniões vão aparecer aqui assim que eu adicioná-los.",
    noGames: "Não há jogos nesta categoria.",
    gameStatus: "Estado",
    gamePlatform: "Plataforma",
    discordEyebrow: "ME ENCONTRE ONLINE",
    discordTitle: "Meu perfil no Discord.",
    discordLead:
      "Meu perfil, banner e insígnias — do jeito que estão nas minhas capturas.",
    discordProfile: "Perfil do Discord",
    discordHandle: "Meu usuário",
    noActivity: "Nenhuma atividade pública disponível",
    noActivityDesc:
      "A presença em tempo real não está conectada. Nenhum status é simulado.",
    community: "Minha comunidade",
    communityDesc:
      "Conheça a comunidade da Lya e acompanhe o projeto mais de perto.",
    enterCommunity: "Entrar na comunidade",
    copyUser: "Copiar usuário",
    moreEyebrow: "UM ÚLTIMO DETALHE",
    moreTitle: "Conexões & preferências.",
    moreLead:
      "Escolha como explorar este espaço ou fale comigo sobre uma ideia.",
    social: "Onde me encontrar",
    message: "Tem um projeto em mente?",
    messageDesc:
      "Desenvolvo sites, bots, APIs e aplicativos. Vamos conversar sobre o seu projeto.",
    whatsapp: "Conversar no WhatsApp",
    appearance: "Personalizar experiência",
    appearanceDesc: "Cores, movimento, tema e idioma. Deixe tudo do seu jeito.",
    settingsSubtitle: "deixe do seu jeito",
    theme: "tema",
    dark: "escuro",
    light: "claro",
    ambient: "fundo ambiente",
    ambientDesc: "camadas sutis de luz ao fundo.",
    animations: "animações",
    animationsDesc: "transições e movimento nas interações.",
    sound: "sons de interface",
    soundDesc: "toques discretos, desligados por padrão.",
    volume: "volume",
    language: "idioma",
    accent: "cor de destaque",
    neutral: "neutro",
    honey: "mel",
    sage: "sálvia",
    ice: "gelo",
    reset: "Restaurar padrões",
    privacyNote:
      "Preferências salvas somente neste dispositivo. Nenhum dado pessoal é coletado por este painel.",
    footer: "Feito com cuidado, linha por linha.",
    year: "2026",
    rights: "Todos os direitos reservados.",
    githubEmpty: "GitHub não conectado",
    githubDesc: "Atividade pública aparecerá aqui quando configurada.",
    githubRepos: "repositórios públicos",
    followers: "seguidores",
    external: "Abre uma página externa",
    menu: "Navegação",
    loading: "Carregando dados públicos…",
    retry: "Tentar novamente",
    availableNow: "DISPONÍVEL PARA CRIAR",
    notFound: "Essa seção não está disponível.",
    back: "Voltar ao início",
  },
  Ny = {
    nav: ["home", "about", "projects", "music", "games", "discord", "more"],
    settings: "Appearance",
    contact: "contact",
    hire: "Hire me",
    viewProjects: "Explore projects",
    learnMore: "About me",
    available: "Available for projects",
    privateStatus: "Status not connected",
    open: "Open",
    details: "View details",
    projects: "projects",
    music: "music",
    games: "games",
    discord: "discord",
    about: "about me",
    homeLabel: "NICE TO MEET YOU, I AM",
    hero1: "You can call me",
    hero2: "noxx.",
    hero3: "Bots, sites and APIs.",
    homeNote:
      "This space brings together what I build and what I enjoy. Come in, explore, make yourself at home.",
    live: "FEATURED",
    myWork: "My work",
    lyaLabel: "FEATURED PROJECT",
    lyaDescription:
      "My Discord bot: moderation, tools and automation for communities.",
    explore: "explore",
    tech: "technologies",
    seeAll: "All projects",
    soundtrack: "IN MY PLAYLIST",
    notConnected: "Integration not connected yet",
    musicEmptyShort: "My soundtrack will be here soon.",
    gamesEmptyShort: "I have not shared my favorite games yet.",
    discordMini: "ON DISCORD",
    findMe: "Find me there",
    aboutEyebrow: "BEYOND THE EDITOR",
    aboutTitle: "More than lines of code.",
    aboutLead:
      "How I started coding, what I build and what I enjoy beyond my editor.",
    aboutMe: "a little about me",
    philosophy: "WORDS I LIVE BY",
    thingsLike: "Things that are part of me",
    skills: "My toolkit",
    favoriteLang: "Favorite language",
    favorites: "My favorites",
    noFavorites: "I have not shared this list yet.",
    facts: "Little facts",
    noFacts: "More about me soon.",
    projectEyebrow: "IDEAS BROUGHT TO LIFE",
    projectTitle: "Projects with character.",
    projectLead:
      "From Lya, my Discord bot, to Null Tools, my digital toolkit platform.",
    all: "All",
    bots: "Bots",
    sites: "Sites",
    tools: "Tools",
    apis: "APIs",
    experiments: "Experiments",
    active: "Live",
    building: "In progress",
    archived: "Archived",
    concept: "Concept illustration · not an actual product screenshot",
    visit: "Visit project",
    code: "View code",
    stack: "Technologies",
    status: "Status",
    noProjects: "No projects in this category.",
    aboutProject: "About this project",
    projectOpen: "Open project",
    projectBack: "Back to projects",
    close: "Close",
    share: "Share",
    copied: "Copied!",
    musicEyebrow: "THE SOUNDTRACK TO IT ALL",
    musicTitle: "What is in my headphones.",
    musicLead: "The songs I listen to, logged on Last.fm @noxxtopi.",
    nowPlaying: "NOW PLAYING",
    lastPlayed: "LAST PLAYED",
    manual: "PERSONAL COLLECTION",
    noTrack: "No listening activity published yet",
    musicDescription:
      "My library or favorites will appear here when I choose to share them.",
    albums: "Albums",
    artists: "Artists",
    tracks: "Tracks",
    playlists: "Playlists",
    favoriteTab: "Favorites",
    allTime: "my collection",
    dataSource: "Data only appears when it comes from legitimate sources.",
    noMusicItems: "Nothing published in this category.",
    scrobbles: "recorded scrobbles",
    listening: "Listening now",
    gamesEyebrow: "SAVE POINT",
    gamesTitle: "My gaming side.",
    gamesLead:
      "From the games that shaped me to the ones I have yet to discover.",
    playing: "Playing",
    gameFavorites: "Favorites",
    completed: "Completed",
    wishlist: "Wishlist",
    gameEmptyTitle: "My library is in the making.",
    gameEmptyDesc:
      "Games, covers, real playtime and my thoughts will appear as I add them.",
    noGames: "There are no games in this category.",
    gameStatus: "Status",
    gamePlatform: "Platform",
    discordEyebrow: "FIND ME ONLINE",
    discordTitle: "My Discord profile.",
    discordLead:
      "My profile, animated banner and the badges from my screenshots.",
    discordProfile: "Discord profile",
    discordHandle: "My username",
    noActivity: "No public activity available",
    noActivityDesc:
      "Live presence is not connected. No statuses are simulated.",
    community: "My community",
    communityDesc:
      "Join the Lya community and follow the project more closely.",
    enterCommunity: "Join the community",
    copyUser: "Copy username",
    moreEyebrow: "ONE LAST DETAIL",
    moreTitle: "Connections & preferences.",
    moreLead: "Choose how to explore this space or tell me about an idea.",
    social: "Find me online",
    message: "Have a project in mind?",
    messageDesc:
      "Bots, websites, tools or new ideas. I am open to discussing projects.",
    whatsapp: "Chat on WhatsApp",
    appearance: "Personalize your experience",
    appearanceDesc: "Color, motion, theme and language. Make it yours.",
    settingsSubtitle: "make it yours",
    theme: "theme",
    dark: "dark",
    light: "light",
    ambient: "ambient background",
    ambientDesc: "subtle background lighting.",
    animations: "animations",
    animationsDesc: "transitions and interaction motion.",
    sound: "interface sounds",
    soundDesc: "subtle clicks, off by default.",
    volume: "volume",
    language: "language",
    accent: "accent color",
    neutral: "neutral",
    honey: "honey",
    sage: "sage",
    ice: "ice",
    reset: "Restore defaults",
    privacyNote:
      "Preferences are stored only on this device. This panel does not collect personal data.",
    footer: "Made with care, line by line.",
    year: "2026",
    rights: "All rights reserved.",
    githubEmpty: "GitHub not connected",
    githubDesc: "Public activity will appear here when configured.",
    githubRepos: "public repositories",
    followers: "followers",
    external: "Opens an external website",
    menu: "Navigation",
    loading: "Loading public data…",
    retry: "Try again",
    availableNow: "AVAILABLE TO BUILD",
    notFound: "That section is unavailable.",
    back: "Back to home",
  },
  Ay = {
    nav: [
      "inicio",
      "sobre mí",
      "proyectos",
      "música",
      "juegos",
      "discord",
      "más",
    ],
    settings: "Apariencia",
    contact: "contacto",
    hire: "Contratar mis servicios",
    viewProjects: "Explorar proyectos",
    learnMore: "Sobre mí",
    available: "Disponible para proyectos",
    privateStatus: "Estado no conectado",
    open: "Abrir",
    details: "Ver detalles",
    projects: "proyectos",
    music: "música",
    games: "juegos",
    discord: "discord",
    about: "sobre mí",
    homeLabel: "MUCHO GUSTO, SOY",
    hero1: "Me llamo",
    hero2: "noxx.",
    hero3: "Bots, sitios y APIs.",
    homeNote:
      "Desarrollador freelance. Fuera del código: música, juegos, anime y fútbol.",
    live: "DESTACADO",
    myWork: "Mi trabajo",
    lyaLabel: "PROYECTO DESTACADO",
    lyaDescription:
      "Mi bot de Discord: moderación, herramientas y automatización.",
    explore: "explorar",
    tech: "tecnologías",
    seeAll: "Todos los proyectos",
    soundtrack: "EN MI PLAYLIST",
    notConnected: "Integración aún no conectada",
    musicEmptyShort: "Mi banda sonora estará aquí pronto.",
    gamesEmptyShort: "Todavía no he compartido mis juegos favoritos.",
    discordMini: "EN DISCORD",
    findMe: "Encuéntrame allí",
    aboutEyebrow: "MÁS ALLÁ DEL EDITOR",
    aboutTitle: "Más que líneas de código.",
    aboutLead:
      "Cómo aprendí a programar, qué desarrollo y qué me gusta hacer fuera del editor.",
    aboutMe: "un poco sobre mí",
    philosophy: "UNA FRASE QUE ME ACOMPAÑA",
    thingsLike: "Cosas que forman parte de mí",
    skills: "Mis herramientas",
    favoriteLang: "Lenguaje favorito",
    favorites: "Mis favoritos",
    noFavorites: "Aún no he publicado esta lista.",
    facts: "Pequeños datos",
    noFacts: "Más sobre mí próximamente.",
    projectEyebrow: "IDEAS HECHAS REALIDAD",
    projectTitle: "Proyectos con identidad.",
    projectLead:
      "De Lya, mi bot para Discord, a Null Tools, mi plataforma de herramientas digitales.",
    all: "Todos",
    bots: "Bots",
    sites: "Sitios",
    tools: "Herramientas",
    apis: "APIs",
    experiments: "Experimentos",
    active: "Activo",
    building: "En desarrollo",
    archived: "Archivado",
    concept: "Vista conceptual · no es una captura del producto",
    visit: "Visitar proyecto",
    code: "Ver código",
    stack: "Tecnologías",
    status: "Estado",
    noProjects: "No hay proyectos en esta categoría.",
    aboutProject: "Sobre el proyecto",
    projectOpen: "Abrir proyecto",
    projectBack: "Volver a los proyectos",
    close: "Cerrar",
    share: "Compartir",
    copied: "¡Copiado!",
    musicEyebrow: "LA BANDA SONORA DE TODO",
    musicTitle: "Lo que suena en mis auriculares.",
    musicLead: "La música que escucho, registrada en Last.fm @noxxtopi.",
    nowPlaying: "SONANDO AHORA",
    lastPlayed: "ÚLTIMA REPRODUCCIÓN",
    manual: "COLECCIÓN PERSONAL",
    noTrack: "Todavía no hay actividad musical publicada",
    musicDescription:
      "Mi biblioteca o mis favoritos aparecerán aquí cuando decida compartirlos.",
    albums: "Álbumes",
    artists: "Artistas",
    tracks: "Canciones",
    playlists: "Playlists",
    favoriteTab: "Favoritos",
    allTime: "mi colección",
    dataSource: "Los datos solo aparecen si provienen de fuentes legítimas.",
    noMusicItems: "Nada publicado en esta categoría.",
    scrobbles: "reproducciones registradas",
    listening: "Escuchando ahora",
    gamesEyebrow: "SAVE POINT",
    gamesTitle: "Mi lado gamer.",
    gamesLead: "De los juegos que me marcaron a los que aún quiero descubrir.",
    playing: "Jugando",
    gameFavorites: "Favoritos",
    completed: "Completados",
    wishlist: "Quiero jugar",
    gameEmptyTitle: "Mi biblioteca está en preparación.",
    gameEmptyDesc:
      "Mis juegos, portadas, horas reales y opiniones aparecerán cuando los agregue.",
    noGames: "No hay juegos en esta categoría.",
    gameStatus: "Estado",
    gamePlatform: "Plataforma",
    discordEyebrow: "ENCUÉNTRAME ONLINE",
    discordTitle: "Mi perfil de Discord.",
    discordLead: "Mi perfil, banner animado e insignias de mis capturas.",
    discordProfile: "Perfil de Discord",
    discordHandle: "Mi usuario",
    noActivity: "Sin actividad pública disponible",
    noActivityDesc:
      "La presencia en tiempo real no está conectada. No se simula ningún estado.",
    community: "Mi comunidad",
    communityDesc: "Conoce la comunidad de Lya y sigue el proyecto de cerca.",
    enterCommunity: "Entrar en la comunidad",
    copyUser: "Copiar usuario",
    moreEyebrow: "UN ÚLTIMO DETALLE",
    moreTitle: "Conexiones y preferencias.",
    moreLead: "Elige cómo explorar este espacio o háblame de una idea.",
    social: "Dónde encontrarme",
    message: "¿Tienes un proyecto en mente?",
    messageDesc:
      "Bots, sitios, herramientas o ideas nuevas. Estoy abierto a propuestas.",
    whatsapp: "Hablar por WhatsApp",
    appearance: "Personalizar experiencia",
    appearanceDesc: "Color, movimiento, tema e idioma. A tu gusto.",
    settingsSubtitle: "a tu gusto",
    theme: "tema",
    dark: "oscuro",
    light: "claro",
    ambient: "fondo ambiente",
    ambientDesc: "iluminación sutil de fondo.",
    animations: "animaciones",
    animationsDesc: "transiciones y movimiento en interacciones.",
    sound: "sonidos de interfaz",
    soundDesc: "clics sutiles, desactivados por defecto.",
    volume: "volumen",
    language: "idioma",
    accent: "color de acento",
    neutral: "neutro",
    honey: "miel",
    sage: "salvia",
    ice: "hielo",
    reset: "Restablecer valores",
    privacyNote:
      "Las preferencias se guardan solo en este dispositivo. Este panel no recoge datos personales.",
    footer: "Hecho con cuidado, línea por línea.",
    year: "2026",
    rights: "Todos los derechos reservados.",
    githubEmpty: "GitHub no conectado",
    githubDesc: "La actividad pública aparecerá aquí cuando se configure.",
    githubRepos: "repositorios públicos",
    followers: "seguidores",
    external: "Abre una página externa",
    menu: "Navegación",
    loading: "Cargando datos públicos…",
    retry: "Reintentar",
    availableNow: "DISPONIBLE PARA CREAR",
    notFound: "Esa sección no está disponible.",
    back: "Volver al inicio",
  },
  ol = { "pt-br": Ty, en: Ny, es: Ay },
  zy = {
    JavaScript: {
      tone: "#f7df1e",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            width: "24",
            height: "24",
            rx: "3",
            fill: "#f7df1e",
          }),
          i.jsx("text", {
            x: "12",
            y: "18",
            textAnchor: "middle",
            fill: "#1e1e1e",
            fontWeight: "900",
            fontSize: "13",
            children: "JS",
          }),
        ],
      }),
    },
    TypeScript: {
      tone: "#3178c6",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            width: "24",
            height: "24",
            rx: "3",
            fill: "#3178c6",
          }),
          i.jsx("text", {
            x: "12",
            y: "18",
            textAnchor: "middle",
            fill: "white",
            fontWeight: "900",
            fontSize: "13",
            children: "TS",
          }),
        ],
      }),
    },
    Python: {
      tone: "#ffd43b",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "M12 2c-5.8 0-6 2.4-6 4.5v2.8h6.7v2H5.4C2.8 11.3 2 13.4 2 16s1.1 4.3 3.7 4.3h2.2v-3.2c0-2.7 2.4-4.6 5.1-4.6h4.3c2.6 0 4.7-1.8 4.7-4.5V6.5C22 4 19.5 2 15.3 2H12Zm-3.4 3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4",
            fill: "#3776ab",
          }),
          i.jsx("path", {
            d: "M12 22c5.8 0 6-2.4 6-4.5v-2.8h-6.7v-2h7.3c2.6 0 3.4-2.1 3.4-4.7 0-2.6-1.1-4.3-3.7-4.3h-2.2v3.2c0 2.7-2.4 4.6-5.1 4.6H6.7C4.1 11.5 2 13.3 2 16v1.5C2 20 4.5 22 8.7 22H12Zm3.4-3a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4",
            fill: "#ffd43b",
          }),
        ],
      }),
    },
    HTML5: {
      tone: "#e34f26",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            fill: "#e34f26",
            d: "M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z",
          }),
          i.jsx("path", { fill: "#f06529", d: "M12 4h7l-1.2 14.4L12 20V4Z" }),
          i.jsx("path", {
            d: "M7.5 7.5h9l-.25 2.5H10l.2 2.5h5.8l-.5 4-3.5 1-3.5-1-.25-2.5",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.5",
          }),
        ],
      }),
    },
    CSS3: {
      tone: "#1572b6",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            fill: "#1572b6",
            d: "M3 2h18l-1.6 18L12 22l-7.4-2L3 2Z",
          }),
          i.jsx("path", { fill: "#33a9dc", d: "M12 4h7l-1.2 14.4L12 20V4Z" }),
          i.jsx("path", {
            d: "M8 7h8.3L16 9.5h-6l.2 2.5H16l-.5 4-3.5 1-3.5-1-.2-2",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.5",
          }),
        ],
      }),
    },
    React: {
      tone: "#61dafb",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsxs("g", {
            fill: "none",
            stroke: "#61dafb",
            strokeWidth: "1.6",
            children: [
              i.jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4.1" }),
              i.jsx("ellipse", {
                cx: "12",
                cy: "12",
                rx: "10",
                ry: "4.1",
                transform: "rotate(60 12 12)",
              }),
              i.jsx("ellipse", {
                cx: "12",
                cy: "12",
                rx: "10",
                ry: "4.1",
                transform: "rotate(120 12 12)",
              }),
            ],
          }),
          i.jsx("circle", { cx: "12", cy: "12", r: "1.7", fill: "#61dafb" }),
        ],
      }),
    },
    "Next.js": {
      tone: "#e5e5e5",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#f1f1ef" }),
          i.jsx("path", {
            d: "M7 17V7l10 11M17 7v8",
            stroke: "#131313",
            strokeWidth: "2",
            fill: "none",
          }),
          i.jsx("path", {
            d: "m17 7-1 2",
            stroke: "#131313",
            strokeWidth: "2",
          }),
        ],
      }),
    },
    "Node.js": {
      tone: "#75b55b",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "m12 1.5 9.3 5.4v10.2L12 22.5l-9.3-5.4V6.9L12 1.5Z",
            fill: "#75b55b",
          }),
          i.jsx("path", {
            d: "M8 16V8l8 8V8",
            stroke: "#182819",
            strokeWidth: "2",
            fill: "none",
            strokeLinecap: "round",
          }),
        ],
      }),
    },
    Express: {
      tone: "#d0d0d0",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#393c40" }),
          i.jsx("text", {
            x: "12",
            y: "16",
            textAnchor: "middle",
            fill: "#fff",
            fontSize: "14",
            fontWeight: "600",
            children: "ex",
          }),
        ],
      }),
    },
    "discord.js": {
      tone: "#8996ff",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            fill: "#6674e8",
            d: "M5.2 5.8q3.2-2.2 6.8-2.2 3.6 0 6.8 2.2l2.2 11q-3.2 2.7-7 3.6l-.8-1.6q1.5-.5 2.5-1.2-3.7 1.7-7.4 0 1 .7 2.5 1.2L10 20.4q-3.8-.9-7-3.6l2.2-11Z",
          }),
          i.jsx("ellipse", {
            cx: "8.4",
            cy: "12.7",
            rx: "1.4",
            ry: "1.9",
            fill: "white",
          }),
          i.jsx("ellipse", {
            cx: "15.6",
            cy: "12.7",
            rx: "1.4",
            ry: "1.9",
            fill: "white",
          }),
        ],
      }),
    },
    SVG: {
      tone: "#ff9e35",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "4",
            fill: "#e58b31",
          }),
          i.jsx("text", {
            x: "12",
            y: "15.4",
            textAnchor: "middle",
            fontSize: "9",
            fontWeight: "800",
            fill: "white",
            children: "SVG",
          }),
        ],
      }),
    },
    "Web APIs": {
      tone: "#7db7ff",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "9",
            stroke: "#7db7ff",
            strokeWidth: "1.8",
            fill: "none",
          }),
          i.jsx("ellipse", {
            cx: "12",
            cy: "12",
            rx: "4.3",
            ry: "9",
            stroke: "#7db7ff",
            strokeWidth: "1.4",
            fill: "none",
          }),
          i.jsx("path", {
            d: "M3.5 12h17M5 8h14M5 16h14",
            stroke: "#7db7ff",
            strokeWidth: "1.2",
            fill: "none",
          }),
        ],
      }),
    },
    dotenv: {
      tone: "#e9de7a",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "2",
            y: "3",
            width: "20",
            height: "18",
            rx: "3",
            fill: "#423f26",
            stroke: "#e9de7a",
            strokeWidth: "1.3",
          }),
          i.jsx("text", {
            x: "12",
            y: "15",
            textAnchor: "middle",
            fontSize: "8",
            fill: "#e9de7a",
            fontWeight: "800",
            children: ".env",
          }),
        ],
      }),
    },
    Multer: {
      tone: "#aa9ef2",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "M4 16v3h16v-3M12 16V4m-5 5 5-5 5 5",
            fill: "none",
            stroke: "#aa9ef2",
            strokeWidth: "2.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i.jsx("path", { d: "M7 18h10", stroke: "#aa9ef2", strokeWidth: "1" }),
        ],
      }),
    },
    Helmet: {
      tone: "#d9e0e8",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "M12 2 20 5v6c0 5-3 8.6-8 11-5-2.4-8-6-8-11V5l8-3Z",
            fill: "#4b545c",
            stroke: "#d9e0e8",
            strokeWidth: "1.6",
          }),
          i.jsx("path", {
            d: "m8 12 2.6 2.5 5.3-5.3",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
        ],
      }),
    },
    "express-rate-limit": {
      tone: "#c5cbd1",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "9",
            fill: "#464b55",
            stroke: "#c5cbd1",
            strokeWidth: "1.4",
          }),
          i.jsx("path", {
            d: "M12 6v6l4 2",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.9",
            strokeLinecap: "round",
          }),
          i.jsx("path", {
            d: "M7 3 5 5M17 3l2 2",
            stroke: "#c5cbd1",
            strokeWidth: "1.4",
          }),
        ],
      }),
    },
    FFmpeg: {
      tone: "#73cc57",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "m3 3 9 0-6 8-3 0Zm11 0h7l-6 8H8Zm-5 10h8l-6 8H3Zm10 0h2v8h-8Z",
            fill: "#73cc57",
          }),
          i.jsx("path", {
            d: "M4 11h16",
            stroke: "#0b2010",
            strokeWidth: "1.5",
          }),
        ],
      }),
    },
    FFprobe: {
      tone: "#7ccf7e",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", {
            d: "M3 13 8 7l4 6 4-7 5 7",
            fill: "none",
            stroke: "#7ccf7e",
            strokeWidth: "2.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i.jsx("circle", {
            cx: "11",
            cy: "15",
            r: "5.1",
            fill: "#1e3125",
            stroke: "#7ccf7e",
            strokeWidth: "1.5",
          }),
          i.jsx("path", {
            d: "m15 19 5 4",
            stroke: "#7ccf7e",
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
        ],
      }),
    },
    "yt-dlp": {
      tone: "#fb4b53",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "14",
            rx: "5",
            fill: "#dc353e",
          }),
          i.jsx("path", { d: "m10 7 7 4-7 4V7Z", fill: "white" }),
          i.jsx("path", {
            d: "M12 17v5m-3-3 3 3 3-3",
            stroke: "#fb4b53",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          }),
        ],
      }),
    },
    Sharp: {
      tone: "#86d6ef",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "4",
            y: "4",
            width: "13",
            height: "13",
            rx: "2",
            fill: "none",
            stroke: "#86d6ef",
            strokeWidth: "2",
          }),
          i.jsx("path", {
            d: "m8 17 9-9M7 20l13-13",
            stroke: "#86d6ef",
            strokeWidth: "1.8",
            strokeLinecap: "round",
          }),
        ],
      }),
    },
    "PDF-lib": {
      tone: "#e56d6d",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("path", { d: "M6 2h9l5 5v15H6V2Z", fill: "#b74d54" }),
          i.jsx("path", { d: "M15 2v5h5", fill: "#e56d6d" }),
          i.jsx("text", {
            x: "12.5",
            y: "17",
            textAnchor: "middle",
            fill: "white",
            fontSize: "8",
            fontWeight: "800",
            children: "PDF",
          }),
        ],
      }),
    },
    JSZip: {
      tone: "#f5c768",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "3",
            y: "2",
            width: "18",
            height: "20",
            rx: "3",
            fill: "#a47f3f",
          }),
          i.jsx("path", {
            d: "M12 3v13",
            stroke: "#fbe8b4",
            strokeWidth: "3",
            strokeDasharray: "2 2",
          }),
          i.jsx("rect", {
            x: "9",
            y: "15",
            width: "6",
            height: "5",
            rx: "1",
            fill: "#fbe8b4",
          }),
        ],
      }),
    },
    "Spotify Web API": {
      tone: "#1ed760",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#1ed760" }),
          i.jsx("path", {
            d: "M5.5 9c4-1.6 9-1.2 13 1.1M6.5 12.2c3.5-1.2 7.7-.8 11 1.1M7.5 15c2.8-.8 6-.5 9 1",
            stroke: "#12301b",
            strokeWidth: "1.7",
            fill: "none",
            strokeLinecap: "round",
          }),
        ],
      }),
    },
    "REST API": {
      tone: "#d0caa4",
      art: i.jsxs(i.Fragment, {
        children: [
          i.jsx("rect", {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "4",
            fill: "#454b53",
          }),
          i.jsx("path", {
            d: "M7 12h10m-4-4 4 4-4 4",
            stroke: "#d6e1d8",
            strokeWidth: "1.8",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        ],
      }),
    },
  };
function ta({ name: f, size: p = 23 }) {
  const E = zy[f];
  return i.jsx("span", {
    className: "technology-icon",
    style: { "--brand": (E == null ? void 0 : E.tone) ?? "#a5a6aa" },
    title: f,
    "aria-hidden": "true",
    children: E
      ? i.jsx("svg", {
          width: p,
          height: p,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          focusable: "false",
          children: E.art,
        })
      : i.jsx(Xo, { size: p }),
  });
}
const Xh = "noxx-soundtrack-v1",
  My = "/media/audio-nulltools.mp3",
  Ch = { position: 0, volume: 0.22, muted: !1, paused: !1 },
  Oy = {
    "pt-br": {
      title: "trilha do portfólio",
      open: "Abrir player de música",
      close: "Recolher player de música",
      play: "Reproduzir música",
      pause: "Pausar música",
      mute: "Silenciar música",
      unmute: "Ativar som",
      volume: "Volume da música",
    },
    en: {
      title: "portfolio soundtrack",
      open: "Open music player",
      close: "Collapse music player",
      play: "Play music",
      pause: "Pause music",
      mute: "Mute music",
      unmute: "Unmute music",
      volume: "Music volume",
    },
    es: {
      title: "música del portafolio",
      open: "Abrir reproductor",
      close: "Cerrar reproductor",
      play: "Reproducir música",
      pause: "Pausar música",
      mute: "Silenciar música",
      unmute: "Activar sonido",
      volume: "Volumen de la música",
    },
  };
function Dy() {
  try {
    const f = JSON.parse(localStorage.getItem(Xh) || "{}");
    return {
      position:
        typeof f.position == "number" &&
        Number.isFinite(f.position) &&
        f.position >= 0
          ? f.position
          : 0,
      volume:
        typeof f.volume == "number" && Number.isFinite(f.volume)
          ? Math.min(1, Math.max(0, f.volume))
          : Ch.volume,
      muted: f.muted === !0,
      paused: f.paused === !0,
    };
  } catch {
    return { ...Ch };
  }
}
function Cy({ locale: f, waitForEntry: p = !1 }) {
  const [E] = w.useState(Dy),
    [r, z] = w.useState(!1),
    [S, q] = w.useState(!1),
    [G, D] = w.useState(E.volume),
    [F, M] = w.useState(E.muted),
    [x, C] = w.useState(!1),
    $ = w.useRef(null),
    te = w.useRef(null),
    Se = w.useRef(null),
    _ = w.useRef(E.position),
    xe = w.useRef(E.volume),
    Ae = w.useRef(E.muted),
    ze = w.useRef(E.paused),
    U = w.useRef(!p),
    me = w.useRef(0),
    fe = w.useRef(null),
    J = S && !F && G > 0,
    Q = Oy[f],
    Oe = w.useCallback(() => {
      const A = te.current;
      A &&
        A.readyState >= HTMLMediaElement.HAVE_METADATA &&
        Number.isFinite(A.currentTime) &&
        (_.current = A.currentTime);
      const H = {
        position: _.current,
        volume: xe.current,
        muted: Ae.current,
        paused: ze.current,
      };
      try {
        localStorage.setItem(Xh, JSON.stringify(H));
      } catch {}
    }, []),
    ve = w.useCallback(async () => {
      const A = te.current;
      if (!(!A || ze.current))
        try {
          await A.play();
        } catch {
          q(!1);
        }
    }, []),
    Le = w.useCallback(() => {
      const A = te.current;
      if (!(!A || typeof window.AudioContext > "u"))
        try {
          if (!fe.current) {
            const B = new AudioContext(),
              ne = B.createMediaElementSource(A),
              le = B.createAnalyser();
            ((le.fftSize = 512),
              (le.smoothingTimeConstant = 0.72),
              ne.connect(le),
              le.connect(B.destination),
              (fe.current = { context: B, analyser: le }),
              C(!0));
          }
          const H = fe.current.context;
          H.state === "suspended" && H.resume().catch(() => {});
        } catch {}
    }, []);
  (w.useEffect(() => {
    p || (U.current = !0);
  }, [p]),
    w.useEffect(() => {
      const A = te.current;
      if (!A) return;
      ((A.volume = xe.current), (A.muted = Ae.current));
      const H = () => {
        const ut = A.duration;
        if (Number.isFinite(ut) && ut > 0)
          try {
            A.currentTime = _.current % ut;
          } catch {}
        U.current && !ze.current && ve();
      };
      A.readyState >= HTMLMediaElement.HAVE_METADATA
        ? H()
        : A.addEventListener("loadedmetadata", H, { once: !0 });
      const B = () => {
          !U.current || ze.current || (Le(), A.paused && ve());
        },
        ne = () => {
          ((U.current = !0), B());
        },
        le = (ut) => {
          (ut.key === "Enter" || ut.key === " ") && B();
        },
        We = () => Oe(),
        st = () => {
          document.hidden ? Oe() : U.current && !ze.current && A.paused && ve();
        };
      return (
        window.addEventListener("noxx-site-enter", ne),
        document.addEventListener("pointerdown", B, !0),
        document.addEventListener("keydown", le, !0),
        window.addEventListener("pagehide", We),
        document.addEventListener("visibilitychange", st),
        () => {
          (A.removeEventListener("loadedmetadata", H),
            window.removeEventListener("noxx-site-enter", ne),
            document.removeEventListener("pointerdown", B, !0),
            document.removeEventListener("keydown", le, !0),
            window.removeEventListener("pagehide", We),
            document.removeEventListener("visibilitychange", st),
            Oe());
        }
      );
    }, [Oe, ve, Le]),
    w.useEffect(() => {
      if (!r) return;
      const A = (B) => {
          var ne;
          B.target instanceof Node &&
            !((ne = $.current) != null && ne.contains(B.target)) &&
            z(!1);
        },
        H = (B) => {
          B.key === "Escape" && z(!1);
        };
      return (
        document.addEventListener("pointerdown", A),
        document.addEventListener("keydown", H),
        () => {
          (document.removeEventListener("pointerdown", A),
            document.removeEventListener("keydown", H));
        }
      );
    }, [r]),
    w.useEffect(() => {
      if (!J || !x) return;
      const A = fe.current;
      if (!A) return;
      const H = new Uint8Array(A.analyser.frequencyBinCount);
      let B = 0;
      const ne = () => {
        (A.analyser.getByteFrequencyData(H),
          [
            [1, 5],
            [5, 16],
            [16, 45],
          ].forEach(([We, st], ut) => {
            var X;
            let m = 0;
            for (let ue = We; ue < st; ue++) m += H[ue];
            const O = m / (st - We) / 255,
              Z = 3 + Math.round(Math.pow(O, 0.7) * 11);
            (X = Se.current) == null ||
              X.style.setProperty(`--soundtrack-bar-${ut + 1}`, `${Z}px`);
          }),
          (B = requestAnimationFrame(ne)));
      };
      return ((B = requestAnimationFrame(ne)), () => cancelAnimationFrame(B));
    }, [J, x]));
  function ct() {
    const A = te.current;
    A &&
      (A.paused
        ? ((ze.current = !1), Le(), ve(), Oe())
        : ((ze.current = !0), A.pause(), q(!1), Oe()));
  }
  function kt() {
    const A = te.current,
      H = !Ae.current;
    ((Ae.current = H), A && (A.muted = H), M(H), Oe());
  }
  function Ft(A) {
    const H = Math.min(1, Math.max(0, A));
    ((xe.current = H),
      te.current && (te.current.volume = H),
      D(H),
      H > 0 &&
        Ae.current &&
        ((Ae.current = !1), te.current && (te.current.muted = !1), M(!1)),
      Oe());
  }
  function Ye() {
    const A = Date.now();
    A - me.current >= 1e3 && ((me.current = A), Oe());
  }
  return i.jsxs("div", {
    ref: $,
    className: `soundtrack-player${r ? " is-expanded" : ""}${J ? " is-active" : ""}${x ? " has-analyser" : ""}`,
    children: [
      i.jsx("audio", {
        ref: te,
        src: My,
        loop: !0,
        preload: "auto",
        "aria-hidden": "true",
        onPlay: () => q(!0),
        onPause: () => q(!1),
        onTimeUpdate: Ye,
      }),
      i.jsxs("button", {
        type: "button",
        className: "soundtrack-toggle",
        "aria-label": r ? Q.close : Q.open,
        "aria-expanded": r,
        "aria-controls": "soundtrack-controls",
        onClick: () => z((A) => !A),
        children: [
          i.jsxs("svg", {
            className: "soundtrack-disc",
            viewBox: "0 0 32 32",
            fill: "none",
            "aria-hidden": "true",
            children: [
              i.jsx("circle", {
                cx: "16",
                cy: "16",
                r: "13.5",
                stroke: "currentColor",
                strokeWidth: "2.2",
              }),
              i.jsx("circle", {
                cx: "16",
                cy: "16",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "2.1",
              }),
              i.jsx("circle", {
                cx: "16",
                cy: "16",
                r: "1.1",
                fill: "currentColor",
              }),
              i.jsx("path", {
                d: "M9.3 9.7A10 10 0 0 1 14 7.4M17.8 24.3A9.5 9.5 0 0 0 23 20.9",
                stroke: "currentColor",
                strokeWidth: "2.2",
                strokeLinecap: "round",
              }),
            ],
          }),
          i.jsxs("span", {
            className: "soundtrack-bars",
            ref: Se,
            "aria-hidden": "true",
            children: [i.jsx("i", {}), i.jsx("i", {}), i.jsx("i", {})],
          }),
        ],
      }),
      i.jsxs("div", {
        className: "soundtrack-details",
        id: "soundtrack-controls",
        "aria-hidden": !r,
        children: [
          i.jsxs("div", {
            className: "soundtrack-heading",
            children: [
              i.jsx("span", { children: Q.title }),
              i.jsx("button", {
                type: "button",
                className: "soundtrack-play",
                "aria-label": S ? Q.pause : Q.play,
                title: S ? Q.pause : Q.play,
                tabIndex: r ? 0 : -1,
                onClick: ct,
                children: S
                  ? i.jsx(my, { size: 21, strokeWidth: 2.3 })
                  : i.jsx(Vh, {
                      size: 21,
                      fill: "currentColor",
                      strokeWidth: 1.8,
                    }),
              }),
            ],
          }),
          i.jsxs("div", {
            className: "soundtrack-volume",
            children: [
              i.jsx("button", {
                type: "button",
                className: "soundtrack-mute",
                "aria-label": F || G === 0 ? Q.unmute : Q.mute,
                title: F || G === 0 ? Q.unmute : Q.mute,
                tabIndex: r ? 0 : -1,
                onClick: () => {
                  !F && G === 0 ? Ft(0.22) : kt();
                },
                children:
                  F || G === 0
                    ? i.jsx(jy, { size: 20, strokeWidth: 1.9 })
                    : i.jsx(xy, { size: 20, strokeWidth: 1.9 }),
              }),
              i.jsx("input", {
                type: "range",
                min: "0",
                max: "100",
                value: Math.round(G * 100),
                tabIndex: r ? 0 : -1,
                "aria-label": Q.volume,
                onChange: (A) => Ft(Number(A.currentTarget.value) / 100),
                style: { "--soundtrack-volume-percent": `${G * 100}%` },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Qo = ["home", "about", "projects", "music", "games", "discord", "more"],
  Qh = {
    theme: "dark",
    accent: "neutral",
    ambient: !0,
    motion: !0,
    sound: !1,
    volume: 22,
  },
  _y = [oy, uy, $i, gu, pu, Wi, fy],
  Ry = ["all", "bots", "sites", "tools", "apis", "experiments"],
  Uy = ["albums", "artists", "tracks", "playlists", "favorites"],
  Hy = ["playing", "favorite", "completed", "wishlist"],
  Fo = { "pt-br": "pt-BR", en: "en-US", es: "es-ES" };
function _h() {
  const f = location.pathname.toLowerCase().split("/").filter(Boolean)[0],
    p = f === "en" || f === "es" ? f : "pt-br",
    E = new URLSearchParams(location.search).get("tab");
  return { locale: p, tab: Qo.includes(E) ? E : "home" };
}
function Ly() {
  try {
    const f = JSON.parse(localStorage.getItem("alexey-preferences-v1") || "{}");
    return {
      theme: f.theme === "light" ? "light" : "dark",
      accent: ["neutral", "honey", "sage", "ice"].includes(String(f.accent))
        ? f.accent
        : "neutral",
      ambient: typeof f.ambient == "boolean" ? f.ambient : !0,
      motion: typeof f.motion == "boolean" ? f.motion : !0,
      sound: f.sound === !0,
      volume:
        typeof f.volume == "number" && Number.isFinite(f.volume)
          ? Math.max(0, Math.min(100, f.volume))
          : 22,
    };
  } catch {
    return Qh;
  }
}
function Yt(f) {
  if (f) {
    if (f.startsWith("/") && !f.startsWith("//")) return f;
    try {
      const p = new URL(f);
      return p.protocol === "https:" ? p.href : void 0;
    } catch {
      return;
    }
  }
}
function qy() {
  const f = re.contact.whatsapp.replace(/\D/g, "");
  return f
    ? `https://wa.me/${f}?text=${encodeURIComponent(re.contact.text)}`
    : void 0;
}
function Ii() {
  return { target: "_blank", rel: "noopener noreferrer" };
}
function Rh(f, p) {
  const [E, r] = w.useState(p);
  return (
    w.useEffect(() => {
      const z = new AbortController();
      return (
        fetch(f, { signal: z.signal, headers: { Accept: "application/json" } })
          .then((S) =>
            S.ok ? S.json() : Promise.reject(new Error("API unavailable")),
          )
          .then((S) => {
            S && typeof S.enabled == "boolean" && r(S);
          })
          .catch(() => {}),
        () => z.abort()
      );
    }, [f]),
    E
  );
}
function Zo({
  kind: f,
  title: p,
  artist: E,
  cover: r,
  className: z,
  placeholder: S = !0,
  eager: q = !1,
}) {
  const [G, D] = w.useState(() => Yt(r)),
    [F, M] = w.useState(!1);
  return (
    w.useEffect(() => {
      (D(Yt(r)), M(!1));
    }, [f, p, E, r]),
    w.useEffect(() => {
      if (G || F || !p || (f !== "artist" && !E)) return;
      const x = new AbortController(),
        C = new URLSearchParams({ kind: f, title: p, artist: E || "" });
      return (
        fetch(`/api/public/artwork?${C}`, { signal: x.signal })
          .then(($) => ($.ok ? $.json() : null))
          .then(($) => {
            x.signal.aborted ||
              (M(!0), Yt($ == null ? void 0 : $.image) && D(Yt($.image)));
          })
          .catch(() => {
            x.signal.aborted || M(!0);
          }),
        () => x.abort()
      );
    }, [f, p, E, G, F]),
    G
      ? i.jsx("img", {
          className: z,
          src: G,
          alt: "",
          loading: q ? "eager" : "lazy",
          decoding: "async",
          onError: () => D(void 0),
        })
      : S
        ? i.jsx(gu, { size: 52, strokeWidth: 1 })
        : null
  );
}
function Gt({ children: f, dot: p = !1 }) {
  return i.jsxs("span", {
    className: "eyebrow",
    children: [p && i.jsx("i", { className: "tiny-dot" }), f],
  });
}
function Zh({ label: f, icon: p, onClick: E, className: r = "", disabled: z }) {
  return i.jsx("button", {
    className: `icon-button ${r}`,
    title: f,
    "aria-label": f,
    onClick: E,
    disabled: z,
    children: i.jsx(p, { size: 18, strokeWidth: 1.8, "aria-hidden": "true" }),
  });
}
function bn({ href: f, children: p, subtle: E = !1, icon: r = wt }) {
  return Yt(f)
    ? i.jsxs("a", {
        className: E ? "text-link" : "button button-primary",
        href: f,
        ...Ii(),
        children: [p, i.jsx(r, { size: 17, "aria-hidden": "true" })],
      })
    : null;
}
function Ko({ size: f = "medium" }) {
  return i.jsx("div", {
    className: `profile-glyph glyph-${f}`,
    "aria-hidden": "true",
    children: Yt(re.avatar)
      ? i.jsx("img", { src: re.avatar, alt: "", decoding: "async" })
      : i.jsxs("span", {
          children: [
            "A",
            i.jsx("span", { className: "monogram-dot", children: "." }),
          ],
        }),
  });
}
function xn({ eyebrow: f, title: p, description: E, accessory: r }) {
  return i.jsxs("div", {
    className: "page-intro reveal",
    children: [
      i.jsx(Gt, { dot: !0, children: f }),
      i.jsxs("div", {
        className: "heading-row",
        children: [i.jsx("h1", { children: p }), r],
      }),
      i.jsx("p", { children: E }),
    ],
  });
}
function By({ project: f, compact: p = !1, locale: E }) {
  return Yt(f.screenshot)
    ? i.jsx("div", {
        className: `project-art project-image-art ${p ? "art-compact" : ""}`,
        children: i.jsx("img", {
          src: f.screenshot,
          alt:
            f.id === "nulltools"
              ? E === "pt-br"
                ? "Captura da página inicial da Null Tools com o mascote Miaubyte"
                : E === "es"
                  ? "Captura de la página principal de Null Tools con la mascota Miaubyte"
                  : "Screenshot of the Null Tools home page featuring Miaubyte"
              : `${f.title} · arte do projeto`,
          loading: "lazy",
          decoding: "async",
        }),
      })
    : i.jsxs("div", {
        className: `project-art ${p ? "art-compact" : ""}`,
        "aria-label": ol[E].concept,
        children: [
          i.jsx("div", { className: "art-grid" }),
          i.jsx("span", {
            className: "art-corner art-corner-top",
            children: "A PROJECT BY NOXX",
          }),
          i.jsx("span", { className: "art-circle art-circle-one" }),
          i.jsx("span", { className: "art-circle art-circle-two" }),
          i.jsxs("div", {
            className: "art-wordmark",
            children: [
              i.jsx("span", { className: "art-badge", children: "✳" }),
              i.jsxs("strong", {
                children: [
                  f.title.toUpperCase(),
                  i.jsx("span", { children: "." }),
                ],
              }),
              i.jsx("small", {
                children:
                  E === "pt-br"
                    ? "PARA COMUNIDADES MELHORES"
                    : E === "es"
                      ? "PARA MEJORES COMUNIDADES"
                      : "BUILDING BETTER COMMUNITIES",
              }),
            ],
          }),
          i.jsx("span", {
            className: "art-corner art-corner-bottom",
            children: "DIGITAL EXPERIENCES / 01",
          }),
        ],
      });
}
function wy({ locale: f, go: p, music: E, github: r }) {
  var q;
  const z = ol[f],
    S = (q = E.recent) == null ? void 0 : q[0];
  return i.jsxs("div", {
    className: "home-page page-transition",
    children: [
      i.jsx("section", {
        className: "hero-grid",
        children: i.jsxs("div", {
          className: "hero-copy reveal",
          children: [
            i.jsxs("div", {
              className: "intro-person",
              children: [
                i.jsx(Ko, { size: "small" }),
                i.jsxs("div", {
                  children: [
                    i.jsx("b", { children: re.name.toLowerCase() }),
                    i.jsx("span", { children: re.username }),
                  ],
                }),
                i.jsx("span", {
                  className: "identity-pulse",
                  title: z.available,
                }),
              ],
            }),
            i.jsxs(Gt, {
              children: [
                z.homeLabel,
                " ",
                i.jsx("span", {
                  className: "text-high",
                  children: "ALEXEY / NOXX",
                }),
              ],
            }),
            i.jsxs("h1", {
              className: "hero-title",
              children: [
                i.jsx("span", { children: z.hero1 }),
                i.jsx("span", { children: z.hero2 }),
                i.jsx("em", { children: z.hero3 }),
              ],
            }),
            i.jsx("p", {
              className: "hero-description",
              children: re.intro[f],
            }),
            i.jsx("p", { className: "hero-note", children: z.homeNote }),
            i.jsxs("div", {
              className: "hero-actions",
              children: [
                i.jsxs("button", {
                  className: "button button-primary",
                  onClick: () => p("projects"),
                  children: [z.viewProjects, i.jsx(wt, { size: 18 })],
                }),
                i.jsxs("button", {
                  className: "button button-quiet",
                  onClick: () => p("about"),
                  children: [z.learnMore, i.jsx(Bh, { size: 18 })],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "availability",
              children: [
                i.jsx("span", {
                  className: "available-ring",
                  children: i.jsx("span", {}),
                }),
                z.available,
              ],
            }),
          ],
        }),
      }),
      i.jsxs("div", {
        className: "section-head reveal",
        children: [
          i.jsxs("div", {
            children: [
              i.jsx(Gt, { children: z.live }),
              i.jsxs("h2", {
                children: [
                  z.myWork,
                  i.jsx("span", { className: "muted-period", children: "." }),
                ],
              }),
            ],
          }),
          i.jsxs("button", {
            className: "section-link",
            onClick: () => p("projects"),
            children: [z.seeAll, " ", i.jsx(wt, { size: 17 })],
          }),
        ],
      }),
      i.jsxs("section", {
        className: "home-bento",
        children: [
          i.jsxs("button", {
            className: "bento bento-project reveal",
            onClick: () => p("projects"),
            "aria-label": `${z.viewProjects}: Lya`,
            children: [
              i.jsxs("div", {
                className: "bento-top",
                children: [
                  i.jsxs("span", {
                    className: "bento-kicker",
                    children: [i.jsx($i, { size: 16 }), z.lyaLabel],
                  }),
                  i.jsx(wt, { size: 18 }),
                ],
              }),
              i.jsx("div", {
                className: "mini-lya-art",
                children: i.jsx("img", {
                  className: "lya-illustration",
                  src: "/media/lya-character.png",
                  alt: "",
                  loading: "eager",
                }),
              }),
              i.jsxs("div", {
                className: "bento-project-copy",
                children: [
                  i.jsxs("h3", {
                    children: [
                      "Lya",
                      i.jsx("span", {
                        className: "muted-period",
                        children: ".",
                      }),
                    ],
                  }),
                  i.jsx("p", { children: z.lyaDescription }),
                  i.jsxs("div", {
                    className: "stack-chips",
                    children: [
                      i.jsxs("span", {
                        children: [
                          i.jsx(ta, { name: "Node.js", size: 14 }),
                          "Node.js",
                        ],
                      }),
                      i.jsxs("span", {
                        children: [
                          i.jsx(ta, { name: "discord.js", size: 14 }),
                          "Discord",
                        ],
                      }),
                      i.jsxs("span", {
                        children: [
                          i.jsx(ta, { name: "JavaScript", size: 14 }),
                          "JavaScript",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("button", {
            className: "bento bento-music reveal",
            onClick: () => p("music"),
            children: [
              i.jsxs("div", {
                className: "bento-top",
                children: [
                  i.jsxs("span", {
                    className: "bento-kicker",
                    children: [i.jsx(gu, { size: 16 }), z.soundtrack],
                  }),
                  i.jsx(wt, { size: 18 }),
                ],
              }),
              i.jsxs("div", {
                className: "bento-vinyl",
                children: [
                  i.jsx(Zo, {
                    kind: "track",
                    title: S == null ? void 0 : S.name,
                    artist: S == null ? void 0 : S.artist,
                    cover: S == null ? void 0 : S.image,
                    className: "bento-album-image",
                    placeholder: !1,
                  }),
                  i.jsx("span", { className: "vinyl-grooves" }),
                  i.jsx("i", {}),
                ],
              }),
              i.jsxs("div", {
                className: "bento-bottom",
                children: [
                  i.jsx("h3", {
                    children:
                      (S == null ? void 0 : S.name) ||
                      (f === "pt-br"
                        ? "Meu Last.fm"
                        : f === "es"
                          ? "Mi Last.fm"
                          : "My Last.fm"),
                  }),
                  i.jsx("p", {
                    children:
                      (S == null ? void 0 : S.artist) || "@noxxtopi · Last.fm",
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("button", {
            className: "bento bento-small bento-games reveal",
            onClick: () => p("games"),
            children: [
              i.jsxs("div", {
                className: "bento-top",
                children: [
                  i.jsxs("span", {
                    className: "bento-kicker",
                    children: [i.jsx(pu, { size: 16 }), z.games.toUpperCase()],
                  }),
                  i.jsx(wt, { size: 17 }),
                ],
              }),
              i.jsxs("div", {
                className: "bento-small-content",
                children: [
                  i.jsx("div", {
                    className: "outlined-gamepad",
                    children: i.jsx(pu, { size: 55, strokeWidth: 1 }),
                  }),
                  i.jsx("p", {
                    children:
                      f === "pt-br"
                        ? "Minecraft, Roblox e CS2."
                        : f === "es"
                          ? "Minecraft, Roblox y CS2."
                          : "Minecraft, Roblox and CS2.",
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("button", {
            className: "bento bento-small bento-discord reveal",
            onClick: () => p("discord"),
            children: [
              i.jsxs("div", {
                className: "bento-top",
                children: [
                  i.jsxs("span", {
                    className: "bento-kicker",
                    children: [i.jsx(Wi, { size: 16 }), z.discordMini],
                  }),
                  i.jsx(wt, { size: 17 }),
                ],
              }),
              i.jsxs("div", {
                className: "bento-small-content",
                children: [
                  i.jsxs("div", {
                    className: "mini-discord-avatar",
                    children: [
                      i.jsx(Ko, { size: "small" }),
                      i.jsx("span", { children: "@noxx.lat" }),
                    ],
                  }),
                  i.jsx("p", { children: z.findMe }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("section", {
        className: "home-activity reveal",
        children: [
          i.jsxs("div", {
            className: "activity-left",
            children: [
              i.jsx("span", {
                className: "activity-symbol",
                children: i.jsx(ko, { size: 22 }),
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("h3", { children: "GitHub / @alexeycodex" }),
                  i.jsx("p", {
                    children: r.enabled
                      ? `${r.publicRepos ?? 0} ${z.githubRepos} · ${r.followers ?? 0} ${z.followers}`
                      : f === "pt-br"
                        ? "Meus repositórios e código público"
                        : f === "es"
                          ? "Mis repositorios y código público"
                          : "My public code and repositories",
                  }),
                ],
              }),
            ],
          }),
          i.jsx(bn, {
            href: r.url || re.socials.github,
            subtle: !0,
            children: z.open,
          }),
        ],
      }),
    ],
  });
}
function Yy({ locale: f }) {
  const p = ol[f],
    E = {
      Programação: {
        label: ["Programação", "Coding", "Programación"],
        icon: Xo,
      },
      Música: { label: ["Música", "Music", "Música"], icon: Yh },
      Jogos: { label: ["Jogos", "Gaming", "Videojuegos"], icon: pu },
      Animes: { label: ["Animes", "Anime", "Anime"], icon: by },
      Futebol: { label: ["Futebol", "Football", "Fútbol"], icon: py },
    },
    r = f === "pt-br" ? 0 : f === "en" ? 1 : 2,
    z = {
      anime: ["Animes favoritos", "Favorite anime", "Animes favoritos"],
      series: ["Série favorita", "Favorite series", "Serie favorita"],
      character: [
        "Personagem favorito",
        "Favorite character",
        "Personaje favorito",
      ],
      game: [
        "Jogo mais marcante",
        "Most memorable game",
        "Juego más memorable",
      ],
      language: [
        "Linguagem favorita",
        "Favorite language",
        "Lenguaje favorito",
      ],
    },
    S = {
      "pt-br": [
        "Aprendi a programar vendo videoaulas no YouTube.",
        "Hoje desenvolvo sites, bots, APIs e aplicativos como freelancer.",
        "Fora do trabalho: música, jogos, anime e futebol.",
      ],
      en: [
        "I started learning to code with tutorials on YouTube.",
        "Today I build websites, bots, APIs and apps as a freelancer.",
        "Outside work: music, games, anime and football.",
      ],
      es: [
        "Aprendí a programar con tutoriales en YouTube.",
        "Hoy desarrollo sitios, bots, APIs y aplicaciones como freelancer.",
        "Fuera del trabajo: música, juegos, anime y fútbol.",
      ],
    }[f];
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: p.aboutEyebrow,
        title: p.aboutTitle,
        description: p.aboutLead,
      }),
      i.jsxs("div", {
        className: "about-layout",
        children: [
          i.jsxs("section", {
            className: "panel about-main reveal",
            children: [
              i.jsxs("div", {
                className: "panel-annotation",
                children: ["01 / ", p.aboutMe],
              }),
              i.jsxs("div", {
                className: "about-profile",
                children: [
                  i.jsx(Ko, { size: "medium" }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("h2", { children: re.name }),
                      i.jsxs("span", {
                        children: [re.username, " · developer / freelancer"],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("p", {
                className: "about-paragraph",
                children: re.about[f],
              }),
              i.jsxs("div", {
                className: "about-experience",
                children: [
                  i.jsx(Xo, { size: 17 }),
                  i.jsx("strong", { children: re.experience[f] }),
                  i.jsx("span", {
                    children:
                      f === "pt-br"
                        ? "de programação"
                        : f === "es"
                          ? "programando"
                          : "of coding",
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "quote",
                children: [
                  i.jsx(Gt, { children: p.philosophy }),
                  i.jsxs("blockquote", { children: ["“", re.motto, "”"] }),
                ],
              }),
            ],
          }),
          i.jsxs("section", {
            className: "panel about-likes reveal",
            children: [
              i.jsxs("div", {
                className: "panel-annotation",
                children: ["02 / ", p.thingsLike],
              }),
              i.jsxs("h3", {
                children: [
                  p.thingsLike,
                  i.jsx("span", { className: "muted-period", children: "." }),
                ],
              }),
              i.jsx("div", {
                className: "interest-list",
                children: re.interests.map((q) => {
                  const G = E[q],
                    D = G.icon;
                  return i.jsxs(
                    "span",
                    {
                      className: "interest-pill",
                      children: [
                        i.jsx("span", {
                          className: "interest-icon",
                          children: i.jsx(D, { size: 16 }),
                        }),
                        G.label[r],
                      ],
                    },
                    q,
                  );
                }),
              }),
              i.jsxs("div", {
                className: "about-services",
                children: [
                  i.jsx(Gt, {
                    children:
                      f === "pt-br"
                        ? "O QUE EU DESENVOLVO"
                        : f === "es"
                          ? "QUÉ DESARROLLO"
                          : "WHAT I BUILD",
                  }),
                  i.jsx("p", { children: re.services.join(" · ") }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("section", {
        className: "skills-section reveal",
        children: [
          i.jsx("div", {
            className: "section-head section-head-compact",
            children: i.jsxs("div", {
              children: [
                i.jsx(Gt, { children: "03 / STACK" }),
                i.jsxs("h2", {
                  children: [
                    p.skills,
                    i.jsx("span", { className: "muted-period", children: "." }),
                  ],
                }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "skill-row",
            children: re.skills.map((q) =>
              i.jsxs(
                "div",
                {
                  className: "skill-item",
                  children: [
                    i.jsx(ta, { name: q, size: 27 }),
                    i.jsx("b", { children: q }),
                  ],
                },
                q,
              ),
            ),
          }),
          i.jsxs("div", {
            className: "fav-lang",
            children: [
              i.jsxs("span", {
                children: [i.jsx(sy, { size: 16 }), p.favoriteLang],
              }),
              i.jsxs("b", {
                children: [
                  i.jsx(ta, { name: "JavaScript", size: 19 }),
                  re.favoriteLanguage,
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        className: "about-extras personal-extras",
        children: [
          i.jsxs("section", {
            className: "panel reveal",
            children: [
              i.jsxs("div", {
                className: "panel-annotation",
                children: ["04 / ", p.favorites],
              }),
              i.jsx("h3", { children: p.favorites }),
              i.jsx("div", {
                className: "key-value-list",
                children: re.favorites.map((q) =>
                  i.jsxs(
                    "div",
                    {
                      children: [
                        i.jsx("span", { children: z[q.key][r] }),
                        i.jsx("b", { children: q.value }),
                      ],
                    },
                    q.key,
                  ),
                ),
              }),
            ],
          }),
          i.jsxs("section", {
            className: "panel reveal",
            children: [
              i.jsxs("div", {
                className: "panel-annotation",
                children: ["05 / ", p.facts],
              }),
              i.jsx("h3", { children: p.facts }),
              i.jsx("ul", {
                className: "facts-list",
                children: S.map((q) => i.jsx("li", { children: q }, q)),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Gy({ locale: f }) {
  const p = ol[f],
    [E, r] = w.useState("all"),
    [z, S] = w.useState(null),
    [q, G] = w.useState(!1),
    D = w.useRef(null),
    F = pn.filter((_) => E === "all" || _.category === E),
    M = pn.find((_) => _.id === z),
    x = w.useRef(null);
  function C() {
    (x.current !== null && cancelAnimationFrame(x.current),
      (x.current = requestAnimationFrame(() => {
        var _;
        ((_ = D.current) == null ||
          _.scrollIntoView({
            block: "start",
            behavior:
              document.documentElement.dataset.motion === "off" ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
          }),
          (x.current = null));
      })));
  }
  w.useEffect(
    () => () => {
      x.current !== null && cancelAnimationFrame(x.current);
    },
    [],
  );
  function $(_) {
    (S(_.id), G(!1), C());
  }
  function te() {
    (S(null), G(!1), C());
  }
  async function Se(_) {
    const xe = _.url || `${location.origin}${location.pathname}?tab=projects`;
    try {
      (await navigator.clipboard.writeText(xe),
        G(!0),
        setTimeout(() => G(!1), 1800));
    } catch {
      G(!1);
    }
  }
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: p.projectEyebrow,
        title: p.projectTitle,
        description: p.projectLead,
        accessory: i.jsxs("span", {
          className: "page-number",
          children: ["01 — ", String(pn.length).padStart(2, "0")],
        }),
      }),
      i.jsx("div", {
        className: "project-content-anchor",
        ref: D,
        children: M
          ? i.jsxs(
              "div",
              {
                className: "project-expanded",
                children: [
                  i.jsxs("div", {
                    className: "project-expanded-nav",
                    children: [
                      i.jsxs("button", {
                        className: "project-back",
                        onClick: te,
                        children: [
                          i.jsx(ay, { size: 18, "aria-hidden": "true" }),
                          p.projectBack,
                        ],
                      }),
                      i.jsxs("span", {
                        className: "project-expanded-counter",
                        children: [
                          String(pn.indexOf(M) + 1).padStart(2, "0"),
                          " / ",
                          String(pn.length).padStart(2, "0"),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("section", {
                    className: "project-showcase project-showcase-expanded",
                    "aria-label": `${p.aboutProject}: ${M.title}`,
                    children: [
                      i.jsx("div", {
                        className: "project-left",
                        children: i.jsx(By, { project: M, locale: f }),
                      }),
                      i.jsxs("div", {
                        className: "project-right",
                        children: [
                          i.jsxs("div", {
                            children: [
                              i.jsxs(Gt, {
                                children: [p[M.category], " / ", p[M.status]],
                              }),
                              i.jsxs("h2", {
                                children: [
                                  M.logo &&
                                    i.jsx("img", {
                                      className: "project-brand-logo",
                                      src: M.logo,
                                      alt: "",
                                      loading: "lazy",
                                      decoding: "async",
                                    }),
                                  M.title,
                                  i.jsx("span", {
                                    className: "muted-period",
                                    children: ".",
                                  }),
                                ],
                              }),
                              i.jsx("p", { children: M.summary[f] }),
                              i.jsxs("div", {
                                className: "project-facts",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", { children: p.stack }),
                                      i.jsx("b", {
                                        children: M.technologies
                                          .slice(0, 2)
                                          .join(" · "),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", { children: p.status }),
                                      i.jsxs("b", {
                                        className: "status-active",
                                        children: [i.jsx("i", {}), p[M.status]],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "project-actions",
                                children: [
                                  i.jsx(bn, { href: M.url, children: p.visit }),
                                  M.repository &&
                                    i.jsx(bn, {
                                      href: M.repository,
                                      subtle: !0,
                                      icon: ko,
                                      children: p.code,
                                    }),
                                  i.jsxs("button", {
                                    className: "button button-quiet",
                                    onClick: () => Se(M),
                                    children: [
                                      q ? p.copied : p.share,
                                      q
                                        ? i.jsx(Fi, { size: 16 })
                                        : i.jsx(wh, { size: 16 }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className: "project-tags",
                            children: M.technologies
                              .slice(0, 9)
                              .map((_) =>
                                i.jsxs(
                                  "span",
                                  {
                                    children: [
                                      i.jsx(ta, { name: _, size: 16 }),
                                      _,
                                    ],
                                  },
                                  _,
                                ),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "project-expanded-extra",
                    children: [
                      i.jsxs("section", {
                        className: "project-expanded-description",
                        children: [
                          i.jsx(Gt, { children: p.aboutProject }),
                          i.jsx("p", { children: M.details[f] }),
                        ],
                      }),
                      i.jsxs("section", {
                        className: "project-expanded-technologies",
                        children: [
                          i.jsx(Gt, { children: p.stack }),
                          i.jsx("div", {
                            className: "project-tags",
                            children: M.technologies.map((_) =>
                              i.jsxs(
                                "span",
                                {
                                  children: [
                                    i.jsx(ta, { name: _, size: 17 }),
                                    _,
                                  ],
                                },
                                _,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              M.id,
            )
          : i.jsxs(i.Fragment, {
              children: [
                pn.length > 1 &&
                  i.jsx("div", {
                    className: "filter-bar reveal",
                    role: "group",
                    "aria-label": p.projects,
                    children: Ry.map((_) =>
                      i.jsx(
                        "button",
                        {
                          className: `filter-button ${_ === E ? "active" : ""}`,
                          onClick: () => r(_),
                          "aria-pressed": E === _,
                          children: p[_],
                        },
                        _,
                      ),
                    ),
                  }),
                F.length
                  ? i.jsx("div", {
                      className: "project-gallery reveal",
                      "aria-label": p.projects,
                      children: F.map((_, xe) =>
                        i.jsxs(
                          "button",
                          {
                            className: "project-preview",
                            onClick: () => $(_),
                            "aria-label": `${p.projectOpen}: ${_.title}`,
                            children: [
                              i.jsxs("div", {
                                className: "project-preview-cover",
                                children: [
                                  _.screenshot &&
                                    i.jsx("img", {
                                      src: _.screenshot,
                                      alt: "",
                                      loading: "lazy",
                                      decoding: "async",
                                    }),
                                  i.jsxs("span", {
                                    className: "project-preview-number",
                                    children: [
                                      String(xe + 1).padStart(2, "0"),
                                      " / ",
                                      String(F.length).padStart(2, "0"),
                                    ],
                                  }),
                                  i.jsx("span", {
                                    className: "project-preview-arrow",
                                    "aria-hidden": "true",
                                    children: i.jsx(wt, {
                                      size: 18,
                                      strokeWidth: 1.8,
                                    }),
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "project-preview-body",
                                children: [
                                  i.jsxs("div", {
                                    className: "project-preview-heading",
                                    children: [
                                      (_.logo || _.screenshot) &&
                                        i.jsx("span", {
                                          className: "project-preview-logo",
                                          children: i.jsx("img", {
                                            src: _.logo || _.screenshot,
                                            alt: "",
                                            loading: "lazy",
                                            decoding: "async",
                                          }),
                                        }),
                                      i.jsxs("div", {
                                        className: "project-preview-identity",
                                        children: [
                                          i.jsxs("h2", {
                                            children: [
                                              _.title,
                                              i.jsx("span", {
                                                className: "muted-period",
                                                children: ".",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("span", {
                                            children: [
                                              p[_.category],
                                              " ",
                                              i.jsx("i", {
                                                "aria-hidden": "true",
                                              }),
                                              " ",
                                              p[_.status],
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsx("p", { children: _.summary[f] }),
                                  i.jsxs("div", {
                                    className: "project-preview-bottom",
                                    children: [
                                      i.jsx("div", {
                                        className:
                                          "project-preview-technologies",
                                        children: _.technologies
                                          .slice(0, 3)
                                          .map((Ae) =>
                                            i.jsxs(
                                              "span",
                                              {
                                                title: Ae,
                                                children: [
                                                  i.jsx(ta, {
                                                    name: Ae,
                                                    size: 15,
                                                  }),
                                                  Ae,
                                                ],
                                              },
                                              Ae,
                                            ),
                                          ),
                                      }),
                                      i.jsxs("span", {
                                        className: "project-preview-cta",
                                        children: [
                                          p.projectOpen,
                                          i.jsx(Bh, { size: 16 }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          _.id,
                        ),
                      ),
                    })
                  : i.jsxs("div", {
                      className: "empty-state reveal",
                      children: [
                        i.jsx($i, { size: 34 }),
                        i.jsx("p", { children: p.noProjects }),
                      ],
                    }),
              ],
            }),
      }),
    ],
  });
}
function Vy({ locale: f, music: p }) {
  var G;
  const E = ol[f],
    [r, z] = w.useState("albums"),
    S = (G = p.recent) == null ? void 0 : G[0],
    q = w.useMemo(() => {
      const D =
        r === "albums"
          ? p.topAlbums
          : r === "artists"
            ? p.topArtists
            : r === "tracks"
              ? p.topTracks
              : [];
      return D != null && D.length ? D : Ey[r];
    }, [p, r]);
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: E.musicEyebrow,
        title: E.musicTitle,
        description: E.musicLead,
        accessory: i.jsx(gu, {
          className: "page-silhouette",
          size: 59,
          strokeWidth: 1,
        }),
      }),
      i.jsxs("section", {
        className: "music-hero reveal",
        children: [
          i.jsxs("div", {
            className: "music-record-area",
            children: [
              i.jsxs("div", {
                className: "large-vinyl",
                "aria-hidden": "true",
                children: [
                  i.jsx(Zo, {
                    kind: "track",
                    title: S == null ? void 0 : S.name,
                    artist: S == null ? void 0 : S.artist,
                    cover: S == null ? void 0 : S.image,
                    placeholder: !1,
                    eager: !0,
                  }),
                  i.jsx("span", {}),
                  i.jsx("i", {}),
                ],
              }),
              i.jsxs("div", {
                className: "vinyl-badge",
                children: [
                  i.jsx(ny, { size: 18 }),
                  i.jsx("span", { children: "LAST.FM / @NOXXTOPI" }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            className: "music-info",
            children: [
              i.jsx(Gt, {
                dot: !!(S != null && S.nowPlaying),
                children:
                  S != null && S.nowPlaying
                    ? E.nowPlaying
                    : S
                      ? E.lastPlayed
                      : E.manual,
              }),
              i.jsx("h2", {
                children:
                  (S == null ? void 0 : S.name) ||
                  (f === "pt-br"
                    ? "Minha trilha sonora"
                    : f === "es"
                      ? "Mi banda sonora"
                      : "My soundtrack"),
              }),
              i.jsx("p", {
                children:
                  (S == null ? void 0 : S.artist) ||
                  (f === "pt-br"
                    ? "Últimas reproduções e favoritos do meu Last.fm."
                    : f === "es"
                      ? "Últimas canciones y favoritos de Last.fm."
                      : "Recent tracks and favorites from Last.fm."),
              }),
              i.jsxs("div", {
                className: "music-hero-bottom",
                children: [
                  S &&
                    i.jsx(bn, {
                      href: S.url,
                      subtle: !0,
                      icon: Vh,
                      children: E.open,
                    }),
                  i.jsxs("a", {
                    className: "api-credit lastfm-link",
                    href: re.socials.lastfm,
                    ...Ii(),
                    children: ["LAST.FM / @NOXXTOPI ", i.jsx(wt, { size: 14 })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      p.enabled &&
        typeof p.playcount == "number" &&
        i.jsxs("section", {
          className: "music-stats reveal",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("span", { children: "LAST.FM" }),
                i.jsx("b", { children: p.username }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("span", { children: E.scrobbles }),
                i.jsx("b", {
                  children: new Intl.NumberFormat(Fo[f]).format(p.playcount),
                }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("span", { children: E.dataSource }),
                i.jsx("b", { children: i.jsx(vy, { size: 18 }) }),
              ],
            }),
          ],
        }),
      i.jsxs("section", {
        className: "music-library reveal",
        children: [
          i.jsx("div", {
            className: "section-head section-head-compact",
            children: i.jsxs("div", {
              children: [
                i.jsx(Gt, { children: E.allTime }),
                i.jsxs("h2", {
                  children: [
                    E.music,
                    i.jsx("span", { className: "muted-period", children: "." }),
                  ],
                }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "segmented",
            role: "group",
            "aria-label": E.music,
            children: Uy.map((D) =>
              i.jsx(
                "button",
                {
                  className: r === D ? "selected" : "",
                  onClick: () => z(D),
                  "aria-pressed": r === D,
                  children: D === "favorites" ? E.favoriteTab : E[D],
                },
                D,
              ),
            ),
          }),
          q.length
            ? i.jsx("div", {
                className: "media-grid",
                children: q.map((D, F) =>
                  i.jsxs(
                    "a",
                    {
                      className: "media-card",
                      href: Yt(D.url) || void 0,
                      ...(Yt(D.url) ? Ii() : {}),
                      onClick: Yt(D.url) ? void 0 : (M) => M.preventDefault(),
                      children: [
                        i.jsx("div", {
                          className: "media-cover",
                          children: i.jsx(Zo, {
                            kind:
                              r === "artists"
                                ? "artist"
                                : r === "albums"
                                  ? "album"
                                  : "track",
                            title: D.title,
                            artist: D.artist,
                            cover: D.cover,
                          }),
                        }),
                        i.jsx("strong", { title: D.title, children: D.title }),
                        i.jsx("span", { title: D.artist, children: D.artist }),
                      ],
                    },
                    `${D.title}-${F}`,
                  ),
                ),
              })
            : i.jsxs("div", {
                className: "library-empty",
                children: [
                  i.jsxs("div", {
                    className: "empty-music-graphic",
                    children: [
                      i.jsx("span", {}),
                      i.jsx(gu, { size: 38, strokeWidth: 1.2 }),
                    ],
                  }),
                  i.jsx("h3", { children: E.noMusicItems }),
                  i.jsx("p", {
                    children:
                      f === "pt-br"
                        ? "As listas aparecem aqui após conectar a chave da API do Last.fm na hospedagem."
                        : f === "es"
                          ? "Las listas aparecerán al conectar la clave de API de Last.fm en el servidor."
                          : "Lists will appear after the Last.fm API key is configured on the server.",
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
function Uh({ game: f, featured: p = !1 }) {
  const [E, r] = w.useState(0),
    z = [f.cover, f.coverFallback].filter((S) => !!Yt(S));
  return i.jsxs("div", {
    className: `game-cover ${p ? "game-cover-featured" : ""}`,
    style: { "--game-tone": f.theme },
    children: [
      z[E] &&
        i.jsx("img", {
          src: z[E],
          alt: "",
          loading: p ? "eager" : "lazy",
          decoding: "async",
          onError: () => r((S) => S + 1),
        }),
      i.jsx("span", { className: "game-cover-shine", "aria-hidden": "true" }),
      i.jsx("span", { className: "game-cover-title", children: f.title }),
    ],
  });
}
function Xy({ locale: f }) {
  const p = ol[f],
    [E, r] = w.useState("playing"),
    z = Go.filter((G) => G.status.includes(E)),
    S = Go[0],
    q = {
      "pt-br": "O jogo que mais me marcou.",
      en: "The game that stayed with me.",
      es: "El juego que más me marcó.",
    }[f];
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: p.gamesEyebrow,
        title: p.gamesTitle,
        description: p.gamesLead,
      }),
      i.jsxs("section", {
        className: "game-feature reveal",
        children: [
          i.jsxs("div", {
            className: "game-feature-text",
            children: [
              i.jsxs("span", {
                className: "panel-annotation",
                children: [
                  "01 / ",
                  f === "pt-br"
                    ? "O MAIS MARCANTE"
                    : f === "es"
                      ? "EL MÁS ESPECIAL"
                      : "MOST MEMORABLE",
                ],
              }),
              i.jsxs("h2", {
                children: [
                  "Minecraft",
                  i.jsx("span", { className: "muted-period", children: "." }),
                ],
              }),
              i.jsx("p", { children: q }),
              i.jsxs("div", {
                className: "game-feature-tags",
                children: [
                  i.jsxs("span", {
                    children: [i.jsx(pu, { size: 15 }), " PC"],
                  }),
                  i.jsx("span", { children: "Mobile" }),
                  i.jsx("span", { children: "Xbox" }),
                ],
              }),
            ],
          }),
          i.jsx(Uh, { game: S, featured: !0 }),
        ],
      }),
      i.jsxs("section", {
        className: "game-library reveal",
        children: [
          i.jsx("div", {
            className: "section-head section-head-compact",
            children: i.jsxs("div", {
              children: [
                i.jsxs(Gt, {
                  children: ["LIBRARY / ", String(Go.length).padStart(2, "0")],
                }),
                i.jsxs("h2", {
                  children: [
                    p.games,
                    i.jsx("span", { className: "muted-period", children: "." }),
                  ],
                }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "segmented",
            role: "group",
            "aria-label": p.games,
            children: Hy.map((G) =>
              i.jsx(
                "button",
                {
                  className: E === G ? "selected" : "",
                  onClick: () => r(G),
                  "aria-pressed": E === G,
                  children: G === "favorite" ? p.gameFavorites : p[G],
                },
                G,
              ),
            ),
          }),
          i.jsx("div", {
            className: "media-grid game-media-grid",
            children: z.map((G) =>
              i.jsxs(
                "article",
                {
                  className: "media-card game-media-card",
                  children: [
                    i.jsx(Uh, { game: G }),
                    i.jsx("strong", { children: G.title }),
                    i.jsx("span", {
                      children:
                        E === "playing"
                          ? p.playing
                          : E === "favorite"
                            ? p.gameFavorites
                            : E === "completed"
                              ? p.completed
                              : p.wishlist,
                    }),
                  ],
                },
                G.title,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Qy({ locale: f }) {
  const p = ol[f],
    [E, r] = w.useState(!1),
    [z, S] = w.useState(null),
    [q, G] = w.useState({ top: 0, left: 0 }),
    D = w.useRef(null),
    F = re.discord.badges.find((C) => C.name === z);
  w.useEffect(() => {
    if (!z) return;
    const C = (Se) => {
        var xe;
        const _ = Se.target;
        _ instanceof Element &&
          (_.closest(".discord-badge-trigger") ||
            ((xe = D.current) != null && xe.contains(_)) ||
            S(null));
      },
      $ = (Se) => {
        Se.key === "Escape" && S(null);
      },
      te = () => S(null);
    return (
      document.addEventListener("pointerdown", C),
      document.addEventListener("keydown", $),
      window.addEventListener("scroll", te, !0),
      window.addEventListener("resize", te),
      () => {
        (document.removeEventListener("pointerdown", C),
          document.removeEventListener("keydown", $),
          window.removeEventListener("scroll", te, !0),
          window.removeEventListener("resize", te));
      }
    );
  }, [z]);
  async function M() {
    try {
      (await navigator.clipboard.writeText(re.socials.discordId),
        r(!0),
        setTimeout(() => r(!1), 2e3));
    } catch {
      r(!1);
    }
  }
  function x(C, $) {
    if (z === $) {
      S(null);
      return;
    }
    const te = C.currentTarget.getBoundingClientRect(),
      Se = Math.min(306, window.innerWidth - 24),
      _ = Math.max(12, Math.min(te.left - 16, window.innerWidth - Se - 12)),
      xe = 191,
      ze =
        te.bottom + xe + 12 > window.innerHeight && te.top > xe + 12
          ? te.top - xe - 9
          : Math.min(te.bottom + 9, window.innerHeight - xe - 12);
    (G({ left: _, top: Math.max(12, ze) }), S($));
  }
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: p.discordEyebrow,
        title: p.discordTitle,
        description: p.discordLead,
      }),
      i.jsx("div", {
        className: "discord-profile-layout",
        children: i.jsxs("section", {
          className: "discord-personal-card panel reveal",
          children: [
            i.jsx("div", {
              className: "discord-real-banner",
              children: i.jsx("img", {
                src: re.discord.banner,
                alt: "Banner animado do perfil Discord de Alexey",
              }),
            }),
            i.jsxs("div", {
              className: "discord-real-info",
              children: [
                i.jsx("img", {
                  className: "discord-real-avatar",
                  src: re.discord.avatar,
                  alt: "Avatar do perfil Discord de Alexey",
                }),
                i.jsxs("div", {
                  className: "discord-real-name",
                  children: [
                    i.jsxs("div", {
                      className: "discord-display-row",
                      children: [
                        i.jsx("h2", { children: re.name.toLowerCase() }),
                        i.jsx("div", {
                          className: "discord-inline-badges",
                          "aria-label":
                            f === "pt-br"
                              ? "Insígnias do Discord"
                              : f === "es"
                                ? "Insignias de Discord"
                                : "Discord badges",
                          children: re.discord.badges.map((C) =>
                            i.jsx(
                              "button",
                              {
                                type: "button",
                                className: "discord-badge-trigger",
                                onClick: ($) => x($, C.name),
                                "aria-label": `${f === "pt-br" ? "Ver insígnia" : f === "es" ? "Ver insignia" : "View badge"}: ${C.name}`,
                                "aria-expanded": z === C.name,
                                "aria-haspopup": "dialog",
                                children: i.jsx("img", {
                                  src: C.image,
                                  alt: "",
                                }),
                              },
                              C.name,
                            ),
                          ),
                        }),
                      ],
                    }),
                    i.jsx("p", { children: re.socials.discordHandle }),
                  ],
                }),
                i.jsxs("div", {
                  className: "discord-identifier",
                  children: [
                    i.jsx("span", { children: "DISCORD ID" }),
                    i.jsxs("button", {
                      onClick: M,
                      title:
                        f === "pt-br" || f === "es" ? "Copiar ID" : "Copy ID",
                      children: [
                        re.socials.discordId,
                        E ? i.jsx(Fi, { size: 16 }) : i.jsx(wh, { size: 16 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              className: "discord-real-actions",
              children: i.jsx(bn, {
                href: re.socials.discordProfile,
                children:
                  f === "pt-br" || f === "es" ? "Abrir perfil" : "Open profile",
              }),
            }),
          ],
        }),
      }),
      F &&
        P0.createPortal(
          i.jsxs("div", {
            className: "discord-badge-popover",
            ref: D,
            role: "dialog",
            "aria-label": F.name,
            style: { top: q.top, left: q.left },
            children: [
              i.jsxs("div", {
                className: "discord-badge-popover-heading",
                children: [
                  i.jsx("img", { src: F.image, alt: "" }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: F.name }),
                      i.jsx("span", { children: F.rarity }),
                    ],
                  }),
                ],
              }),
              i.jsx("p", { children: F.detail }),
              i.jsxs("div", {
                className: "discord-badge-popover-date",
                children: [
                  f === "pt-br"
                    ? "Desbloqueada em"
                    : f === "es"
                      ? "Desbloqueada el"
                      : "Unlocked on",
                  " ",
                  F.unlocked,
                ],
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
}
function Zy({ locale: f, openSettings: p }) {
  const E = ol[f],
    r = [
      {
        name: "Instagram",
        icon: ry,
        handle: "@eliminacoes",
        href: re.socials.instagram,
      },
      { name: "TikTok", icon: Yh, handle: "@ihlst", href: re.socials.tiktok },
      {
        name: "Discord",
        icon: Wi,
        handle: "@noxx.lat",
        href: re.socials.discordProfile,
      },
      {
        name: "GitHub",
        icon: ko,
        handle: "@alexeycodex",
        href: re.socials.github,
      },
      { name: "Lya", icon: $i, handle: "lya.lat", href: re.socials.project },
      {
        name: "Comunidade",
        icon: Wi,
        handle: "discord.gg/lyabot",
        href: re.socials.community,
      },
    ];
  return i.jsxs("div", {
    className: "page-transition",
    children: [
      i.jsx(xn, {
        eyebrow: E.moreEyebrow,
        title: E.moreTitle,
        description: E.moreLead,
      }),
      i.jsxs("div", {
        className: "more-layout",
        children: [
          i.jsxs("section", {
            className: "panel more-links reveal",
            children: [
              i.jsxs("div", {
                className: "panel-annotation",
                children: ["01 / ", E.social],
              }),
              i.jsxs("h2", {
                children: [
                  E.social,
                  i.jsx("span", { className: "muted-period", children: "." }),
                ],
              }),
              i.jsx("div", {
                className: "social-list",
                children: r.map(({ name: z, icon: S, handle: q, href: G }) =>
                  i.jsxs(
                    "a",
                    {
                      href: Yt(G),
                      ...Ii(),
                      children: [
                        i.jsx("span", {
                          className: "social-icon",
                          children: i.jsx(S, { size: 19 }),
                        }),
                        i.jsxs("span", {
                          children: [
                            i.jsx("b", { children: z }),
                            i.jsx("small", { children: q }),
                          ],
                        }),
                        i.jsx(wt, { size: 19 }),
                      ],
                    },
                    z,
                  ),
                ),
              }),
            ],
          }),
          i.jsxs("section", {
            className: "more-right",
            children: [
              i.jsxs("div", {
                className: "panel contact-panel reveal",
                children: [
                  i.jsx("div", {
                    className: "panel-annotation",
                    children: "02 / WORK TOGETHER",
                  }),
                  i.jsx("div", {
                    className: "contact-glyph",
                    children: i.jsx(iy, { size: 27 }),
                  }),
                  i.jsxs("h2", {
                    children: [
                      E.message,
                      i.jsx("span", {
                        className: "muted-period",
                        children: ".",
                      }),
                    ],
                  }),
                  i.jsx("p", { children: E.messageDesc }),
                  i.jsx(bn, { href: qy(), children: E.whatsapp }),
                ],
              }),
              i.jsxs("button", {
                className: "panel appearance-panel reveal",
                onClick: p,
                children: [
                  i.jsx("span", {
                    className: "panel-annotation",
                    children: "03 / INTERFACE",
                  }),
                  i.jsx("span", {
                    className: "appearance-icon",
                    children: i.jsx(Gh, { size: 22 }),
                  }),
                  i.jsxs("span", {
                    className: "appearance-title",
                    children: [E.appearance, i.jsx(wt, { size: 20 })],
                  }),
                  i.jsx("span", {
                    className: "appearance-desc",
                    children: E.appearanceDesc,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vo({ checked: f, onChange: p, label: E }) {
  return i.jsx("button", {
    className: `toggle ${f ? "is-on" : ""}`,
    role: "switch",
    "aria-checked": f,
    "aria-label": E,
    onClick: () => p(!f),
    children: i.jsx("span", {}),
  });
}
function Ky({
  dialog: f,
  preferences: p,
  setPreferences: E,
  locale: r,
  changeLocale: z,
}) {
  const S = ol[r],
    q = (D) => E({ ...p, ...D }),
    G = ["neutral", "honey", "sage", "ice"];
  return i.jsxs("dialog", {
    ref: f,
    className: "modal appearance-dialog",
    "aria-label": S.settings,
    children: [
      i.jsxs("div", {
        className: "modal-top settings-top",
        children: [
          i.jsxs("div", {
            children: [
              i.jsx("h2", { children: S.settings.toLowerCase() }),
              i.jsx("p", { children: S.settingsSubtitle }),
            ],
          }),
          i.jsx(Zh, {
            label: S.close,
            icon: Sy,
            onClick: () => {
              var D;
              return (D = f.current) == null ? void 0 : D.close();
            },
          }),
        ],
      }),
      i.jsxs("div", {
        className: "settings-content",
        children: [
          i.jsxs("div", {
            className: "settings-row theme-row",
            children: [
              i.jsx("div", {
                children: i.jsx("strong", { children: S.theme }),
              }),
              i.jsxs("div", {
                className: "theme-select",
                children: [
                  i.jsxs("button", {
                    className: p.theme === "dark" ? "selected" : "",
                    "aria-pressed": p.theme === "dark",
                    onClick: () => q({ theme: "dark" }),
                    children: [i.jsx(dy, { size: 17 }), S.dark],
                  }),
                  i.jsxs("button", {
                    className: p.theme === "light" ? "selected" : "",
                    "aria-pressed": p.theme === "light",
                    onClick: () => q({ theme: "light" }),
                    children: [i.jsx(gy, { size: 17 }), S.light],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            className: "settings-row",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: S.ambient }),
                  i.jsx("p", { children: S.ambientDesc }),
                ],
              }),
              i.jsx(Vo, {
                checked: p.ambient,
                onChange: (D) => q({ ambient: D }),
                label: S.ambient,
              }),
            ],
          }),
          i.jsxs("div", {
            className: "settings-row",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: S.animations }),
                  i.jsx("p", { children: S.animationsDesc }),
                ],
              }),
              i.jsx(Vo, {
                checked: p.motion,
                onChange: (D) => q({ motion: D }),
                label: S.animations,
              }),
            ],
          }),
          i.jsxs("div", {
            className: "settings-row",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: S.sound }),
                  i.jsx("p", { children: S.soundDesc }),
                ],
              }),
              i.jsx(Vo, {
                checked: p.sound,
                onChange: (D) => q({ sound: D }),
                label: S.sound,
              }),
            ],
          }),
          p.sound &&
            i.jsxs("div", {
              className: "settings-volume",
              children: [
                i.jsx("label", { htmlFor: "volume", children: S.volume }),
                i.jsx("input", {
                  id: "volume",
                  type: "range",
                  min: "0",
                  max: "100",
                  value: p.volume,
                  onChange: (D) => q({ volume: Number(D.currentTarget.value) }),
                }),
                i.jsxs("span", { children: [p.volume, "%"] }),
              ],
            }),
          i.jsxs("div", {
            className: "settings-labeled",
            children: [
              i.jsxs("div", {
                className: "settings-label",
                children: [i.jsx(Gh, { size: 16 }), S.accent],
              }),
              i.jsx("div", {
                className: "accent-select",
                children: G.map((D) =>
                  i.jsxs(
                    "button",
                    {
                      className: p.accent === D ? "selected" : "",
                      onClick: () => q({ accent: D }),
                      "aria-pressed": p.accent === D,
                      children: [
                        i.jsx("span", {
                          className: `accent-swatch swatch-${D}`,
                        }),
                        S[D],
                        p.accent === D && i.jsx(Fi, { size: 14 }),
                      ],
                    },
                    D,
                  ),
                ),
              }),
            ],
          }),
          i.jsxs("div", {
            className: "settings-labeled",
            children: [
              i.jsxs("div", {
                className: "settings-label",
                children: [i.jsx(cy, { size: 16 }), S.language],
              }),
              i.jsx("div", {
                className: "language-select",
                children: [
                  ["pt-br", "BR", "Português"],
                  ["en", "US", "English"],
                  ["es", "ES", "Español"],
                ].map(([D, F, M]) =>
                  i.jsxs(
                    "button",
                    {
                      className: r === D ? "selected" : "",
                      onClick: () => z(D),
                      "aria-pressed": r === D,
                      children: [
                        i.jsx("span", { className: "lang-flag", children: F }),
                        i.jsx("span", { children: M }),
                        r === D && i.jsx(Fi, { size: 17 }),
                      ],
                    },
                    D,
                  ),
                ),
              }),
            ],
          }),
          i.jsxs("div", {
            className: "settings-bottom",
            children: [
              i.jsxs("button", {
                onClick: () => E(Qh),
                className: "text-link",
                children: [i.jsx(yy, { size: 16 }), S.reset],
              }),
              i.jsx("p", { children: S.privacyNote }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Jy({ locale: f }) {
  const [p, E] = w.useState(() => new Date());
  w.useEffect(() => {
    const z = setInterval(() => E(new Date()), 6e4);
    return () => clearInterval(z);
  }, []);
  const r = p.toLocaleTimeString(Fo[f], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
  return i.jsxs("time", {
    className: "clock",
    "aria-label": `São Paulo ${r}`,
    children: [r, " ", i.jsx("span", { children: "BRT" })],
  });
}
function ky() {
  const [f, p] = w.useState(_h),
    [E, r] = w.useState("waiting"),
    z = w.useRef(null),
    [S, q] = w.useState(Ly),
    G = w.useRef(null),
    D = Rh("/api/public/music", { enabled: !1 }),
    F = Rh("/api/public/github", { enabled: !1 }),
    { tab: M, locale: x } = f,
    C = ol[x],
    [$, te] = w.useState(
      () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  (w.useEffect(() => {
    const U = window.matchMedia("(prefers-reduced-motion: reduce)"),
      me = (fe) => te(fe.matches);
    return (
      U.addEventListener("change", me),
      () => U.removeEventListener("change", me)
    );
  }, []),
    w.useEffect(() => {
      E === "waiting" && window.scrollTo(0, 0);
    }, []),
    w.useEffect(
      () => () => {
        z.current !== null && clearTimeout(z.current);
      },
      [],
    ),
    w.useEffect(() => {
      const U = () => p(_h());
      return (
        window.addEventListener("popstate", U),
        () => window.removeEventListener("popstate", U)
      );
    }, []),
    w.useEffect(() => {
      var U;
      ((document.documentElement.lang = Fo[x]),
        (document.documentElement.dataset.theme = S.theme),
        (document.documentElement.dataset.accent = S.accent),
        (document.documentElement.dataset.ambient = S.ambient ? "on" : "off"),
        (document.documentElement.dataset.motion =
          S.motion && !$ ? "on" : "off"),
        (U = document.querySelector('meta[name="theme-color"]')) == null ||
          U.setAttribute("content", S.theme === "dark" ? "#090a0b" : "#f6f6f4"),
        (document.title = `${re.name} — ${C.nav[Qo.indexOf(M)]}`));
      try {
        localStorage.setItem("alexey-preferences-v1", JSON.stringify(S));
      } catch {}
    }, [x, S, $, C, M]),
    w.useEffect(() => {
      if (!S.sound) return;
      let U;
      const me = (fe) => {
        const J = fe.target;
        if (!(!(J instanceof Element) || !J.closest("button, a")))
          try {
            U || (U = new AudioContext());
            const Q = U.createOscillator(),
              Oe = U.createGain();
            ((Q.type = "sine"),
              Q.frequency.setValueAtTime(540, U.currentTime),
              Q.frequency.exponentialRampToValueAtTime(
                390,
                U.currentTime + 0.055,
              ));
            const ve = S.volume / 100;
            (Oe.gain.setValueAtTime(Math.max(1e-5, ve * 0.042), U.currentTime),
              Oe.gain.exponentialRampToValueAtTime(1e-5, U.currentTime + 0.065),
              Q.connect(Oe).connect(U.destination),
              Q.start(),
              Q.stop(U.currentTime + 0.068));
          } catch {}
      };
      return (
        document.addEventListener("click", me),
        () => {
          (document.removeEventListener("click", me), U == null || U.close());
        }
      );
    }, [S.sound, S.volume]),
    w.useEffect(() => {
      if (!S.motion || $) return;
      const U = document.getElementById("main-content");
      if (!U) return;
      const me = ".reveal:not(.revealed)",
        fe =
          "IntersectionObserver" in window
            ? new IntersectionObserver(
                (ve) => {
                  ve.forEach((Le) => {
                    Le.isIntersecting &&
                      (Le.target.classList.add("revealed"),
                      fe == null || fe.unobserve(Le.target));
                  });
                },
                { threshold: 0.07, rootMargin: "0px 0px -24px 0px" },
              )
            : null,
        J = (ve) => {
          fe ? fe.observe(ve) : ve.classList.add("revealed");
        },
        Q = (ve) => {
          ve instanceof Element &&
            (ve.matches(me) && J(ve), ve.querySelectorAll(me).forEach(J));
        };
      U.querySelectorAll(me).forEach(J);
      const Oe = new MutationObserver((ve) => {
        ve.forEach((Le) => Le.addedNodes.forEach(Q));
      });
      return (
        Oe.observe(U, { childList: !0, subtree: !0 }),
        () => {
          (fe == null || fe.disconnect(), Oe.disconnect());
        }
      );
    }, [M, S.motion, $]));
  const Se = (U, me = x, fe = !1) => {
    const J = U === "home" ? "" : `?tab=${U}`,
      Q = `/${me}/${J}`;
    (fe
      ? history.replaceState({}, "", Q)
      : `${location.pathname}${location.search}` !== Q &&
        history.pushState({}, "", Q),
      p({ tab: U, locale: me }),
      window.scrollTo({ top: 0, behavior: "auto" }));
  };
  function _(U, me) {
    U.ctrlKey ||
      U.metaKey ||
      U.shiftKey ||
      U.altKey ||
      U.button !== 0 ||
      (U.preventDefault(), Se(me));
  }
  function xe(U) {
    Se(M, U, !0);
  }
  function Ae() {
    E === "waiting" &&
      (window.dispatchEvent(new Event("noxx-site-enter")),
      r("leaving"),
      (z.current = setTimeout(() => {
        (r("closed"), (z.current = null));
      }, 450)));
  }
  const ze = E !== "closed";
  return i.jsxs("div", {
    className: "app-shell",
    children: [
      i.jsx("div", { className: "background-glow", "aria-hidden": "true" }),
      i.jsx("header", {
        className: "site-header",
        inert: ze,
        "aria-hidden": ze,
        children: i.jsxs("div", {
          className: "topbar",
          children: [
            i.jsxs("a", {
              href: `/${x}/`,
              className: "brand",
              onClick: (U) => _(U, "home"),
              "aria-label": `${re.name} - ${C.nav[0]}`,
              children: [
                i.jsxs("span", {
                  className: "brand-mark",
                  children: ["a", i.jsx("span", { children: "." })],
                }),
                i.jsxs("span", {
                  className: "brand-name",
                  children: ["alexey ", i.jsx("small", { children: "/ noxx" })],
                }),
              ],
            }),
            i.jsx("nav", {
              className: "main-nav",
              "aria-label": C.menu,
              children: Qo.map((U, me) => {
                const fe = _y[me];
                return i.jsxs(
                  "a",
                  {
                    href: `/${x}/${U === "home" ? "" : `?tab=${U}`}`,
                    onClick: (J) => _(J, U),
                    className: `nav-item ${M === U ? "active" : ""}`,
                    "aria-current": M === U ? "page" : void 0,
                    title: C.nav[me],
                    children: [
                      i.jsx(fe, {
                        size: 17,
                        strokeWidth: 1.9,
                        "aria-hidden": "true",
                      }),
                      i.jsx("span", {
                        children:
                          M === U
                            ? C.nav[me]
                            : i.jsx("span", {
                                className: "nav-label-desktop",
                                children: C.nav[me],
                              }),
                      }),
                    ],
                  },
                  U,
                );
              }),
            }),
            i.jsxs("div", {
              className: "top-actions",
              children: [
                i.jsx(Jy, { locale: x }),
                i.jsx(Zh, {
                  label: C.settings,
                  icon: hy,
                  onClick: () => {
                    var U;
                    return (U = G.current) == null ? void 0 : U.showModal();
                  },
                  className: "settings-trigger",
                }),
              ],
            }),
          ],
        }),
      }),
      i.jsxs(
        "main",
        {
          id: "main-content",
          className: "main-content",
          inert: ze,
          "aria-hidden": ze,
          children: [
            M === "home" &&
              i.jsx(wy, { locale: x, go: (U) => Se(U), music: D, github: F }),
            M === "about" && i.jsx(Yy, { locale: x }),
            M === "projects" && i.jsx(Gy, { locale: x }),
            M === "music" && i.jsx(Vy, { locale: x, music: D }),
            M === "games" && i.jsx(Xy, { locale: x }),
            M === "discord" && i.jsx(Qy, { locale: x }),
            M === "more" &&
              i.jsx(Zy, {
                locale: x,
                openSettings: () => {
                  var U;
                  return (U = G.current) == null ? void 0 : U.showModal();
                },
              }),
          ],
        },
        `${x}-${M}`,
      ),
      i.jsxs("footer", {
        className: "site-footer",
        inert: ze,
        "aria-hidden": ze,
        children: [
          i.jsxs("div", {
            children: [
              i.jsxs("span", {
                className: "footer-brand",
                children: ["a", i.jsx("span", { children: "." })],
              }),
              i.jsx("p", { children: C.footer }),
            ],
          }),
          i.jsxs("span", { children: ["© ", C.year, " NOXX — ", C.rights] }),
          i.jsxs("a", {
            href: `/${x}/`,
            onClick: (U) => _(U, "home"),
            children: ["BACK TO TOP ", i.jsx(wt, { size: 15 })],
          }),
        ],
      }),
      i.jsx("div", {
        inert: ze,
        "aria-hidden": ze,
        children: i.jsx(Cy, { locale: x, waitForEntry: ze }),
      }),
      i.jsx(Ky, {
        dialog: G,
        preferences: S,
        setPreferences: q,
        locale: x,
        changeLocale: xe,
      }),
      ze &&
        i.jsx("button", {
          type: "button",
          className: `entry-gate${E === "leaving" ? " is-leaving" : ""}`,
          onClick: Ae,
          "aria-label": "click to enter",
          disabled: E === "leaving",
          children: i.jsx("span", {
            className: "entry-gate-label",
            children: "click to enter",
          }),
        }),
    ],
  });
}
$0.createRoot(document.getElementById("root")).render(
  i.jsx(Z0.StrictMode, { children: i.jsx(ky, {}) }),
);
