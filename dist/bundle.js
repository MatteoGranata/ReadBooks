(() => {
  'use strict';
  var e = {
    d: (t, n) => {
      for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    },
  };
  (e.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + '');
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var r = n.getElementsByTagName('script');
        if (r.length) for (var o = r.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); ) t = r[o--].src;
      }
      if (!t) throw new Error('Automatic publicPath is not supported in this browser');
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = t);
    })();
  var t = {};
  function n(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  e.r(t),
    e.d(t, { hasBrowserEnv: () => ee, hasStandardBrowserEnv: () => te, hasStandardBrowserWebWorkerEnv: () => re });
  const { toString: r } = Object.prototype,
    { getPrototypeOf: o } = Object,
    i = ((e) => (t) => {
      const n = r.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    a = (e) => ((e = e.toLowerCase()), (t) => i(t) === e),
    s = (e) => (t) => typeof t === e,
    { isArray: c } = Array,
    u = s('undefined'),
    l = a('ArrayBuffer'),
    f = s('string'),
    d = s('function'),
    p = s('number'),
    h = (e) => null !== e && 'object' == typeof e,
    m = (e) => {
      if ('object' !== i(e)) return !1;
      const t = o(e);
      return !(
        (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    g = a('Date'),
    y = a('File'),
    v = a('Blob'),
    b = a('FileList'),
    w = a('URLSearchParams');
  function E(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null == e) return;
    let r, o;
    if (('object' != typeof e && (e = [e]), c(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        i = o.length;
      let a;
      for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
    }
  }
  function O(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const S =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
            ? window
            : global,
    A = (e) => !u(e) && e !== S,
    T = ((x = 'undefined' != typeof Uint8Array && o(Uint8Array)), (e) => x && e instanceof x);
  var x;
  const R = a('HTMLFormElement'),
    C = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    N = a('RegExp'),
    j = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      E(n, (n, o) => {
        let i;
        !1 !== (i = t(n, o, e)) && (r[o] = i || n);
      }),
        Object.defineProperties(e, r);
    },
    P = 'abcdefghijklmnopqrstuvwxyz',
    L = '0123456789',
    B = { DIGIT: L, ALPHA: P, ALPHA_DIGIT: P + P.toUpperCase() + L },
    _ = a('AsyncFunction'),
    k = {
      isArray: c,
      isArrayBuffer: l,
      isBuffer: function (e) {
        return (
          null !== e &&
          !u(e) &&
          null !== e.constructor &&
          !u(e.constructor) &&
          d(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (('function' == typeof FormData && e instanceof FormData) ||
            (d(e.append) &&
              ('formdata' === (t = i(e)) || ('object' === t && d(e.toString) && '[object FormData]' === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && l(e.buffer)),
          t
        );
      },
      isString: f,
      isNumber: p,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: h,
      isPlainObject: m,
      isUndefined: u,
      isDate: g,
      isFile: y,
      isBlob: v,
      isRegExp: N,
      isFunction: d,
      isStream: (e) => h(e) && d(e.pipe),
      isURLSearchParams: w,
      isTypedArray: T,
      isFileList: b,
      forEach: E,
      merge: function e() {
        const { caseless: t } = (A(this) && this) || {},
          n = {},
          r = (r, o) => {
            const i = (t && O(n, o)) || o;
            m(n[i]) && m(r) ? (n[i] = e(n[i], r)) : m(r) ? (n[i] = e({}, r)) : c(r) ? (n[i] = r.slice()) : (n[i] = r);
          };
        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && E(arguments[e], r);
        return n;
      },
      extend: (e, t, r, { allOwnKeys: o } = {}) => (
        E(
          t,
          (t, o) => {
            r && d(t) ? (e[o] = n(t, r)) : (e[o] = t);
          },
          { allOwnKeys: o },
        ),
        e
      ),
      trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, 'super', { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let i, a, s;
        const c = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
            (s = i[a]), (r && !r(s, e, t)) || c[s] || ((t[s] = e[s]), (c[s] = !0));
          e = !1 !== n && o(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: i,
      kindOfTest: a,
      endsWith: (e, t, n) => {
        (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (c(e)) return e;
        let t = e.length;
        if (!p(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: R,
      hasOwnProperty: C,
      hasOwnProp: C,
      reduceDescriptors: j,
      freezeMethods: (e) => {
        j(e, (t, n) => {
          if (d(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(n)) return !1;
          const r = e[n];
          d(r) &&
            ((t.enumerable = !1),
            'writable' in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return c(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
      findKey: O,
      global: S,
      isContextDefined: A,
      ALPHABET: B,
      generateString: (e = 16, t = B.ALPHA_DIGIT) => {
        let n = '';
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(e && d(e.append) && 'FormData' === e[Symbol.toStringTag] && e[Symbol.iterator]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (h(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!('toJSON' in e)) {
                t[r] = e;
                const o = c(e) ? [] : {};
                return (
                  E(e, (e, t) => {
                    const i = n(e, r + 1);
                    !u(i) && (o[t] = i);
                  }),
                  (t[r] = void 0),
                  o
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: _,
      isThenable: (e) => e && (h(e) || d(e)) && d(e.then) && d(e.catch),
    };
  function F(e, t, n, r, o) {
    Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && (this.response = o);
  }
  k.inherits(F, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: k.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const D = F.prototype,
    M = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((e) => {
    M[e] = { value: e };
  }),
    Object.defineProperties(F, M),
    Object.defineProperty(D, 'isAxiosError', { value: !0 }),
    (F.from = (e, t, n, r, o, i) => {
      const a = Object.create(D);
      return (
        k.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => 'isAxiosError' !== e,
        ),
        F.call(a, e.message, t, n, r, o),
        (a.cause = e),
        (a.name = e.name),
        i && Object.assign(a, i),
        a
      );
    });
  const I = F;
  function U(e) {
    return k.isPlainObject(e) || k.isArray(e);
  }
  function q(e) {
    return k.endsWith(e, '[]') ? e.slice(0, -2) : e;
  }
  function H(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = q(e)), !n && t ? '[' + e + ']' : e;
          })
          .join(n ? '.' : '')
      : t;
  }
  const z = k.toFlatObject(k, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    }),
    V = function (e, t, n) {
      if (!k.isObject(e)) throw new TypeError('target must be an object');
      t = t || new FormData();
      const r = (n = k.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
          return !k.isUndefined(t[e]);
        })).metaTokens,
        o = n.visitor || u,
        i = n.dots,
        a = n.indexes,
        s = (n.Blob || ('undefined' != typeof Blob && Blob)) && k.isSpecCompliantForm(t);
      if (!k.isFunction(o)) throw new TypeError('visitor must be a function');
      function c(e) {
        if (null === e) return '';
        if (k.isDate(e)) return e.toISOString();
        if (!s && k.isBlob(e)) throw new I('Blob is not supported. Use a Buffer instead.');
        return k.isArrayBuffer(e) || k.isTypedArray(e)
          ? s && 'function' == typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      function u(e, n, o) {
        let s = e;
        if (e && !o && 'object' == typeof e)
          if (k.endsWith(n, '{}')) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
            (k.isArray(e) &&
              (function (e) {
                return k.isArray(e) && !e.some(U);
              })(e)) ||
            ((k.isFileList(e) || k.endsWith(n, '[]')) && (s = k.toArray(e)))
          )
            return (
              (n = q(n)),
              s.forEach(function (e, r) {
                !k.isUndefined(e) && null !== e && t.append(!0 === a ? H([n], r, i) : null === a ? n : n + '[]', c(e));
              }),
              !1
            );
        return !!U(e) || (t.append(H(o, n, i), c(e)), !1);
      }
      const l = [],
        f = Object.assign(z, { defaultVisitor: u, convertValue: c, isVisitable: U });
      if (!k.isObject(e)) throw new TypeError('data must be an object');
      return (
        (function e(n, r) {
          if (!k.isUndefined(n)) {
            if (-1 !== l.indexOf(n)) throw Error('Circular reference detected in ' + r.join('.'));
            l.push(n),
              k.forEach(n, function (n, i) {
                !0 === (!(k.isUndefined(n) || null === n) && o.call(t, n, k.isString(i) ? i.trim() : i, r, f)) &&
                  e(n, r ? r.concat(i) : [i]);
              }),
              l.pop();
          }
        })(e),
        t
      );
    };
  function W(e) {
    const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function $(e, t) {
    (this._pairs = []), e && V(e, this, t);
  }
  const K = $.prototype;
  (K.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (K.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, W);
          }
        : W;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + '=' + t(e[1]);
        }, '')
        .join('&');
    });
  const J = $;
  function X(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function G(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || X,
      o = n && n.serialize;
    let i;
    if (((i = o ? o(t, n) : k.isURLSearchParams(t) ? t.toString() : new J(t, n).toString(r)), i)) {
      const t = e.indexOf('#');
      -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf('?') ? '?' : '&') + i);
    }
    return e;
  }
  const Y = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        k.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    Q = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Z = {
      isBrowser: !0,
      classes: {
        URLSearchParams: 'undefined' != typeof URLSearchParams ? URLSearchParams : J,
        FormData: 'undefined' != typeof FormData ? FormData : null,
        Blob: 'undefined' != typeof Blob ? Blob : null,
      },
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    ee = 'undefined' != typeof window && 'undefined' != typeof document,
    te =
      ((ne = 'undefined' != typeof navigator && navigator.product),
      ee && ['ReactNative', 'NativeScript', 'NS'].indexOf(ne) < 0);
  var ne;
  const re =
      'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      'function' == typeof self.importScripts,
    oe = { ...t, ...Z },
    ie = function (e) {
      function t(e, n, r, o) {
        let i = e[o++];
        if ('__proto__' === i) return !0;
        const a = Number.isFinite(+i),
          s = o >= e.length;
        return (
          (i = !i && k.isArray(r) ? r.length : i),
          s
            ? (k.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a)
            : ((r[i] && k.isObject(r[i])) || (r[i] = []),
              t(e, n, r[i], o) &&
                k.isArray(r[i]) &&
                (r[i] = (function (e) {
                  const t = {},
                    n = Object.keys(e);
                  let r;
                  const o = n.length;
                  let i;
                  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
                  return t;
                })(r[i])),
              !a)
        );
      }
      if (k.isFormData(e) && k.isFunction(e.entries)) {
        const n = {};
        return (
          k.forEachEntry(e, (e, r) => {
            t(
              (function (e) {
                return k.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ('[]' === e[0] ? '' : e[1] || e[0]));
              })(e),
              r,
              n,
              0,
            );
          }),
          n
        );
      }
      return null;
    },
    ae = {
      transitional: Q,
      adapter: ['xhr', 'http'],
      transformRequest: [
        function (e, t) {
          const n = t.getContentType() || '',
            r = n.indexOf('application/json') > -1,
            o = k.isObject(e);
          if ((o && k.isHTMLForm(e) && (e = new FormData(e)), k.isFormData(e))) return r ? JSON.stringify(ie(e)) : e;
          if (k.isArrayBuffer(e) || k.isBuffer(e) || k.isStream(e) || k.isFile(e) || k.isBlob(e)) return e;
          if (k.isArrayBufferView(e)) return e.buffer;
          if (k.isURLSearchParams(e))
            return t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), e.toString();
          let i;
          if (o) {
            if (n.indexOf('application/x-www-form-urlencoded') > -1)
              return (function (e, t) {
                return V(
                  e,
                  new oe.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, r) {
                        return oe.isNode && k.isBuffer(e)
                          ? (this.append(t, e.toString('base64')), !1)
                          : r.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t,
                  ),
                );
              })(e, this.formSerializer).toString();
            if ((i = k.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
              const t = this.env && this.env.FormData;
              return V(i ? { 'files[]': e } : e, t && new t(), this.formSerializer);
            }
          }
          return o || r
            ? (t.setContentType('application/json', !1),
              (function (e, t, n) {
                if (k.isString(e))
                  try {
                    return (0, JSON.parse)(e), k.trim(e);
                  } catch (e) {
                    if ('SyntaxError' !== e.name) throw e;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          const t = this.transitional || ae.transitional,
            n = t && t.forcedJSONParsing,
            r = 'json' === this.responseType;
          if (e && k.isString(e) && ((n && !this.responseType) || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (n) {
                if ('SyntaxError' === e.name) throw I.from(e, I.ERR_BAD_RESPONSE, this, null, this.response);
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: oe.classes.FormData, Blob: oe.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
    };
  k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    ae.headers[e] = {};
  });
  const se = ae,
    ce = k.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]),
    ue = Symbol('internals');
  function le(e) {
    return e && String(e).trim().toLowerCase();
  }
  function fe(e) {
    return !1 === e || null == e ? e : k.isArray(e) ? e.map(fe) : String(e);
  }
  function de(e, t, n, r, o) {
    return k.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        k.isString(t) ? (k.isString(r) ? -1 !== t.indexOf(r) : k.isRegExp(r) ? r.test(t) : void 0) : void 0);
  }
  class pe {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = le(t);
        if (!o) throw new Error('header name must be a non-empty string');
        const i = k.findKey(r, o);
        (!i || void 0 === r[i] || !0 === n || (void 0 === n && !1 !== r[i])) && (r[i || t] = fe(e));
      }
      const i = (e, t) => k.forEach(e, (e, n) => o(e, n, t));
      return (
        k.isPlainObject(e) || e instanceof this.constructor
          ? i(e, t)
          : k.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
            ? i(
                ((e) => {
                  const t = {};
                  let n, r, o;
                  return (
                    e &&
                      e.split('\n').forEach(function (e) {
                        (o = e.indexOf(':')),
                          (n = e.substring(0, o).trim().toLowerCase()),
                          (r = e.substring(o + 1).trim()),
                          !n ||
                            (t[n] && ce[n]) ||
                            ('set-cookie' === n
                              ? t[n]
                                ? t[n].push(r)
                                : (t[n] = [r])
                              : (t[n] = t[n] ? t[n] + ', ' + r : r));
                      }),
                    t
                  );
                })(e),
                t,
              )
            : null != e && o(t, e, n),
        this
      );
    }
    get(e, t) {
      if ((e = le(e))) {
        const n = k.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (k.isFunction(t)) return t.call(this, e, n);
          if (k.isRegExp(t)) return t.exec(e);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(e, t) {
      if ((e = le(e))) {
        const n = k.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !de(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = le(e))) {
          const o = k.findKey(n, e);
          !o || (t && !de(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return k.isArray(e) ? e.forEach(o) : o(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !de(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        k.forEach(this, (r, o) => {
          const i = k.findKey(n, o);
          if (i) return (t[i] = fe(r)), void delete t[o];
          const a = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          a !== o && delete t[o], (t[a] = fe(r)), (n[a] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        k.forEach(this, (n, r) => {
          null != n && !1 !== n && (t[r] = e && k.isArray(n) ? n.join(', ') : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ': ' + t)
        .join('\n');
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return t.forEach((e) => n.set(e)), n;
    }
    static accessor(e) {
      const t = (this[ue] = this[ue] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = le(e);
        t[r] ||
          ((function (e, t) {
            const n = k.toCamelCase(' ' + t);
            ['get', 'set', 'has'].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return k.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  pe.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']),
    k.reduceDescriptors(pe.prototype, ({ value: e }, t) => {
      let n = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(e) {
          this[n] = e;
        },
      };
    }),
    k.freezeMethods(pe);
  const he = pe;
  function me(e, t) {
    const n = this || se,
      r = t || n,
      o = he.from(r.headers);
    let i = r.data;
    return (
      k.forEach(e, function (e) {
        i = e.call(n, i, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      i
    );
  }
  function ge(e) {
    return !(!e || !e.__CANCEL__);
  }
  function ye(e, t, n) {
    I.call(this, null == e ? 'canceled' : e, I.ERR_CANCELED, t, n), (this.name = 'CanceledError');
  }
  k.inherits(ye, I, { __CANCEL__: !0 });
  const ve = ye,
    be = oe.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, o, i) {
            const a = [e + '=' + encodeURIComponent(t)];
            k.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
              k.isString(r) && a.push('path=' + r),
              k.isString(o) && a.push('domain=' + o),
              !0 === i && a.push('secure'),
              (document.cookie = a.join('; '));
          },
          read(e) {
            const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, '', Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function we(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
        })(e, t)
      : t;
  }
  const Ee = oe.hasStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement('a');
        let n;
        function r(n) {
          let r = n;
          return (
            e && (t.setAttribute('href', r), (r = t.href)),
            t.setAttribute('href', r),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname: '/' === t.pathname.charAt(0) ? t.pathname : '/' + t.pathname,
            }
          );
        }
        return (
          (n = r(window.location.href)),
          function (e) {
            const t = k.isString(e) ? r(e) : e;
            return t.protocol === n.protocol && t.host === n.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  function Oe(e, t) {
    let n = 0;
    const r = (function (e, t) {
      e = e || 10;
      const n = new Array(e),
        r = new Array(e);
      let o,
        i = 0,
        a = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (s) {
          const c = Date.now(),
            u = r[a];
          o || (o = c), (n[i] = s), (r[i] = c);
          let l = a,
            f = 0;
          for (; l !== i; ) (f += n[l++]), (l %= e);
          if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
          const d = u && c - u;
          return d ? Math.round((1e3 * f) / d) : void 0;
        }
      );
    })(50, 250);
    return (o) => {
      const i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        s = i - n,
        c = r(s);
      n = i;
      const u = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: c || void 0,
        estimated: c && a && i <= a ? (a - i) / c : void 0,
        event: o,
      };
      (u[t ? 'download' : 'upload'] = !0), e(u);
    };
  }
  const Se = {
    http: null,
    xhr:
      'undefined' != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          let r = e.data;
          const o = he.from(e.headers).normalize();
          let i,
            a,
            { responseType: s, withXSRFToken: c } = e;
          function u() {
            e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener('abort', i);
          }
          if (k.isFormData(r))
            if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv) o.setContentType(!1);
            else if (!1 !== (a = o.getContentType())) {
              const [e, ...t] = a
                ? a
                    .split(';')
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              o.setContentType([e || 'multipart/form-data', ...t].join('; '));
            }
          let l = new XMLHttpRequest();
          if (e.auth) {
            const t = e.auth.username || '',
              n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
            o.set('Authorization', 'Basic ' + btoa(t + ':' + n));
          }
          const f = we(e.baseURL, e.url);
          function d() {
            if (!l) return;
            const r = he.from('getAllResponseHeaders' in l && l.getAllResponseHeaders());
            !(function (e, t, n) {
              const r = n.config.validateStatus;
              n.status && r && !r(n.status)
                ? t(
                    new I(
                      'Request failed with status code ' + n.status,
                      [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                      n.config,
                      n.request,
                      n,
                    ),
                  )
                : e(n);
            })(
              function (e) {
                t(e), u();
              },
              function (e) {
                n(e), u();
              },
              {
                data: s && 'text' !== s && 'json' !== s ? l.response : l.responseText,
                status: l.status,
                statusText: l.statusText,
                headers: r,
                config: e,
                request: l,
              },
            ),
              (l = null);
          }
          if (
            (l.open(e.method.toUpperCase(), G(f, e.params, e.paramsSerializer), !0),
            (l.timeout = e.timeout),
            'onloadend' in l
              ? (l.onloadend = d)
              : (l.onreadystatechange = function () {
                  l &&
                    4 === l.readyState &&
                    (0 !== l.status || (l.responseURL && 0 === l.responseURL.indexOf('file:'))) &&
                    setTimeout(d);
                }),
            (l.onabort = function () {
              l && (n(new I('Request aborted', I.ECONNABORTED, e, l)), (l = null));
            }),
            (l.onerror = function () {
              n(new I('Network Error', I.ERR_NETWORK, e, l)), (l = null);
            }),
            (l.ontimeout = function () {
              let t = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
              const r = e.transitional || Q;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(new I(t, r.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED, e, l)),
                (l = null);
            }),
            oe.hasStandardBrowserEnv && (c && k.isFunction(c) && (c = c(e)), c || (!1 !== c && Ee(f))))
          ) {
            const t = e.xsrfHeaderName && e.xsrfCookieName && be.read(e.xsrfCookieName);
            t && o.set(e.xsrfHeaderName, t);
          }
          void 0 === r && o.setContentType(null),
            'setRequestHeader' in l &&
              k.forEach(o.toJSON(), function (e, t) {
                l.setRequestHeader(t, e);
              }),
            k.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
            s && 'json' !== s && (l.responseType = e.responseType),
            'function' == typeof e.onDownloadProgress && l.addEventListener('progress', Oe(e.onDownloadProgress, !0)),
            'function' == typeof e.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener('progress', Oe(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((i = (t) => {
                l && (n(!t || t.type ? new ve(null, e, l) : t), l.abort(), (l = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(i),
              e.signal && (e.signal.aborted ? i() : e.signal.addEventListener('abort', i)));
          const p = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || '';
          })(f);
          p && -1 === oe.protocols.indexOf(p)
            ? n(new I('Unsupported protocol ' + p + ':', I.ERR_BAD_REQUEST, e))
            : l.send(r || null);
        });
      },
  };
  k.forEach(Se, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t });
      } catch (e) {}
      Object.defineProperty(e, 'adapterName', { value: t });
    }
  });
  const Ae = (e) => `- ${e}`,
    Te = (e) => k.isFunction(e) || null === e || !1 === e,
    xe = (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        let t;
        if (((n = e[i]), (r = n), !Te(n) && ((r = Se[(t = String(n)).toLowerCase()]), void 0 === r)))
          throw new I(`Unknown adapter '${t}'`);
        if (r) break;
        o[t || '#' + i] = r;
      }
      if (!r) {
        const e = Object.entries(o).map(
          ([e, t]) =>
            `adapter ${e} ` + (!1 === t ? 'is not supported by the environment' : 'is not available in the build'),
        );
        let n = t ? (e.length > 1 ? 'since :\n' + e.map(Ae).join('\n') : ' ' + Ae(e[0])) : 'as no adapter specified';
        throw new I('There is no suitable adapter to dispatch the request ' + n, 'ERR_NOT_SUPPORT');
      }
      return r;
    };
  function Re(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new ve(null, e);
  }
  function Ce(e) {
    return (
      Re(e),
      (e.headers = he.from(e.headers)),
      (e.data = me.call(e, e.transformRequest)),
      -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1),
      xe(e.adapter || se.adapter)(e).then(
        function (t) {
          return Re(e), (t.data = me.call(e, e.transformResponse, t)), (t.headers = he.from(t.headers)), t;
        },
        function (t) {
          return (
            ge(t) ||
              (Re(e),
              t &&
                t.response &&
                ((t.response.data = me.call(e, e.transformResponse, t.response)),
                (t.response.headers = he.from(t.response.headers)))),
            Promise.reject(t)
          );
        },
      )
    );
  }
  const Ne = (e) => (e instanceof he ? { ...e } : e);
  function je(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return k.isPlainObject(e) && k.isPlainObject(t)
        ? k.merge.call({ caseless: n }, e, t)
        : k.isPlainObject(t)
          ? k.merge({}, t)
          : k.isArray(t)
            ? t.slice()
            : t;
    }
    function o(e, t, n) {
      return k.isUndefined(t) ? (k.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
    }
    function i(e, t) {
      if (!k.isUndefined(t)) return r(void 0, t);
    }
    function a(e, t) {
      return k.isUndefined(t) ? (k.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
    }
    function s(n, o, i) {
      return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
    }
    const c = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: (e, t) => o(Ne(e), Ne(t), !0),
    };
    return (
      k.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const i = c[r] || o,
          a = i(e[r], t[r], r);
        (k.isUndefined(a) && i !== s) || (n[r] = a);
      }),
      n
    );
  }
  const Pe = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    Pe[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  });
  const Le = {};
  Pe.transitional = function (e, t, n) {
    function r(e, t) {
      return "[Axios v1.6.8] Transitional option '" + e + "'" + t + (n ? '. ' + n : '');
    }
    return (n, o, i) => {
      if (!1 === e) throw new I(r(o, ' has been removed' + (t ? ' in ' + t : '')), I.ERR_DEPRECATED);
      return (
        t &&
          !Le[o] &&
          ((Le[o] = !0),
          console.warn(r(o, ' has been deprecated since v' + t + ' and will be removed in the near future'))),
        !e || e(n, o, i)
      );
    };
  };
  const Be = {
      assertOptions: function (e, t, n) {
        if ('object' != typeof e) throw new I('options must be an object', I.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const i = r[o],
            a = t[i];
          if (a) {
            const t = e[i],
              n = void 0 === t || a(t, i, e);
            if (!0 !== n) throw new I('option ' + i + ' must be ' + n, I.ERR_BAD_OPTION_VALUE);
          } else if (!0 !== n) throw new I('Unknown option ' + i, I.ERR_BAD_OPTION);
        }
      },
      validators: Pe,
    },
    _e = Be.validators;
  class ke {
    constructor(e) {
      (this.defaults = e), (this.interceptors = { request: new Y(), response: new Y() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t;
          Error.captureStackTrace ? Error.captureStackTrace((t = {})) : (t = new Error());
          const n = t.stack ? t.stack.replace(/^.+\n/, '') : '';
          e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, '')) && (e.stack += '\n' + n) : (e.stack = n);
        }
        throw e;
      }
    }
    _request(e, t) {
      'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = je(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      void 0 !== n &&
        Be.assertOptions(
          n,
          {
            silentJSONParsing: _e.transitional(_e.boolean),
            forcedJSONParsing: _e.transitional(_e.boolean),
            clarifyTimeoutError: _e.transitional(_e.boolean),
          },
          !1,
        ),
        null != r &&
          (k.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Be.assertOptions(r, { encode: _e.function, serialize: _e.function }, !0)),
        (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
      let i = o && k.merge(o.common, o[t.method]);
      o &&
        k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (e) => {
          delete o[e];
        }),
        (t.headers = he.concat(i, o));
      const a = [];
      let s = !0;
      this.interceptors.request.forEach(function (e) {
        ('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((s = s && e.synchronous), a.unshift(e.fulfilled, e.rejected));
      });
      const c = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        f = 0;
      if (!s) {
        const e = [Ce.bind(this), void 0];
        for (e.unshift.apply(e, a), e.push.apply(e, c), l = e.length, u = Promise.resolve(t); f < l; )
          u = u.then(e[f++], e[f++]);
        return u;
      }
      l = a.length;
      let d = t;
      for (f = 0; f < l; ) {
        const e = a[f++],
          t = a[f++];
        try {
          d = e(d);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        u = Ce.call(this, d);
      } catch (e) {
        return Promise.reject(e);
      }
      for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
      return u;
    }
    getUri(e) {
      return G(we((e = je(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  }
  k.forEach(['delete', 'get', 'head', 'options'], function (e) {
    ke.prototype[e] = function (t, n) {
      return this.request(je(n || {}, { method: e, url: t, data: (n || {}).data }));
    };
  }),
    k.forEach(['post', 'put', 'patch'], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            je(o || {}, { method: e, headers: t ? { 'Content-Type': 'multipart/form-data' } : {}, url: n, data: r }),
          );
        };
      }
      (ke.prototype[e] = t()), (ke.prototype[e + 'Form'] = t(!0));
    });
  const Fe = ke;
  class De {
    constructor(e) {
      if ('function' != typeof e) throw new TypeError('executor must be a function.');
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new ve(e, r, o)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    static source() {
      let e;
      return {
        token: new De(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Me = De,
    Ie = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
  Object.entries(Ie).forEach(([e, t]) => {
    Ie[t] = e;
  });
  const Ue = Ie,
    qe = (function e(t) {
      const r = new Fe(t),
        o = n(Fe.prototype.request, r);
      return (
        k.extend(o, Fe.prototype, r, { allOwnKeys: !0 }),
        k.extend(o, r, null, { allOwnKeys: !0 }),
        (o.create = function (n) {
          return e(je(t, n));
        }),
        o
      );
    })(se);
  (qe.Axios = Fe),
    (qe.CanceledError = ve),
    (qe.CancelToken = Me),
    (qe.isCancel = ge),
    (qe.VERSION = '1.6.8'),
    (qe.toFormData = V),
    (qe.AxiosError = I),
    (qe.Cancel = qe.CanceledError),
    (qe.all = function (e) {
      return Promise.all(e);
    }),
    (qe.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (qe.isAxiosError = function (e) {
      return k.isObject(e) && !0 === e.isAxiosError;
    }),
    (qe.mergeConfig = je),
    (qe.AxiosHeaders = he),
    (qe.formToJSON = (e) => ie(k.isHTMLForm(e) ? new FormData(e) : e)),
    (qe.getAdapter = xe),
    (qe.HttpStatusCode = Ue),
    (qe.default = qe);
  const He = qe;
  var ze = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      timelineOffset: 0,
    },
    Ve = { duration: 1e3, delay: 0, endDelay: 0, easing: 'easeOutElastic(1, .5)', round: 0 },
    We = [
      'translateX',
      'translateY',
      'translateZ',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scaleX',
      'scaleY',
      'scaleZ',
      'skew',
      'skewX',
      'skewY',
      'perspective',
      'matrix',
      'matrix3d',
    ],
    $e = { CSS: {}, springs: {} };
  function Ke(e, t, n) {
    return Math.min(Math.max(e, t), n);
  }
  function Je(e, t) {
    return e.indexOf(t) > -1;
  }
  function Xe(e, t) {
    return e.apply(null, t);
  }
  var Ge = {
    arr: function (e) {
      return Array.isArray(e);
    },
    obj: function (e) {
      return Je(Object.prototype.toString.call(e), 'Object');
    },
    pth: function (e) {
      return Ge.obj(e) && e.hasOwnProperty('totalLength');
    },
    svg: function (e) {
      return e instanceof SVGElement;
    },
    inp: function (e) {
      return e instanceof HTMLInputElement;
    },
    dom: function (e) {
      return e.nodeType || Ge.svg(e);
    },
    str: function (e) {
      return 'string' == typeof e;
    },
    fnc: function (e) {
      return 'function' == typeof e;
    },
    und: function (e) {
      return void 0 === e;
    },
    nil: function (e) {
      return Ge.und(e) || null === e;
    },
    hex: function (e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
    },
    rgb: function (e) {
      return /^rgb/.test(e);
    },
    hsl: function (e) {
      return /^hsl/.test(e);
    },
    col: function (e) {
      return Ge.hex(e) || Ge.rgb(e) || Ge.hsl(e);
    },
    key: function (e) {
      return !ze.hasOwnProperty(e) && !Ve.hasOwnProperty(e) && 'targets' !== e && 'keyframes' !== e;
    },
  };
  function Ye(e) {
    var t = /\(([^)]+)\)/.exec(e);
    return t
      ? t[1].split(',').map(function (e) {
          return parseFloat(e);
        })
      : [];
  }
  function Qe(e, t) {
    var n = Ye(e),
      r = Ke(Ge.und(n[0]) ? 1 : n[0], 0.1, 100),
      o = Ke(Ge.und(n[1]) ? 100 : n[1], 0.1, 100),
      i = Ke(Ge.und(n[2]) ? 10 : n[2], 0.1, 100),
      a = Ke(Ge.und(n[3]) ? 0 : n[3], 0.1, 100),
      s = Math.sqrt(o / r),
      c = i / (2 * Math.sqrt(o * r)),
      u = c < 1 ? s * Math.sqrt(1 - c * c) : 0,
      l = c < 1 ? (c * s - a) / u : -a + s;
    function f(e) {
      var n = t ? (t * e) / 1e3 : e;
      return (
        (n =
          c < 1 ? Math.exp(-n * c * s) * (1 * Math.cos(u * n) + l * Math.sin(u * n)) : (1 + l * n) * Math.exp(-n * s)),
        0 === e || 1 === e ? e : 1 - n
      );
    }
    return t
      ? f
      : function () {
          var t = $e.springs[e];
          if (t) return t;
          for (var n = 1 / 6, r = 0, o = 0; ; )
            if (1 === f((r += n))) {
              if (++o >= 16) break;
            } else o = 0;
          var i = r * n * 1e3;
          return ($e.springs[e] = i), i;
        };
  }
  function Ze(e) {
    return (
      void 0 === e && (e = 10),
      function (t) {
        return Math.ceil(Ke(t, 1e-6, 1) * e) * (1 / e);
      }
    );
  }
  var et,
    tt,
    nt = (function () {
      var e = 0.1;
      function t(e, t) {
        return 1 - 3 * t + 3 * e;
      }
      function n(e, t) {
        return 3 * t - 6 * e;
      }
      function r(e) {
        return 3 * e;
      }
      function o(e, o, i) {
        return ((t(o, i) * e + n(o, i)) * e + r(o)) * e;
      }
      function i(e, o, i) {
        return 3 * t(o, i) * e * e + 2 * n(o, i) * e + r(o);
      }
      return function (t, n, r, a) {
        if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
          var s = new Float32Array(11);
          if (t !== n || r !== a) for (var c = 0; c < 11; ++c) s[c] = o(c * e, t, r);
          return function (c) {
            return (t === n && r === a) || 0 === c || 1 === c
              ? c
              : o(
                  (function (n) {
                    for (var a = 0, c = 1; 10 !== c && s[c] <= n; ++c) a += e;
                    --c;
                    var u = a + ((n - s[c]) / (s[c + 1] - s[c])) * e,
                      l = i(u, t, r);
                    return l >= 0.001
                      ? (function (e, t, n, r) {
                          for (var a = 0; a < 4; ++a) {
                            var s = i(t, n, r);
                            if (0 === s) return t;
                            t -= (o(t, n, r) - e) / s;
                          }
                          return t;
                        })(n, u, t, r)
                      : 0 === l
                        ? u
                        : (function (e, t, n, r, i) {
                            var a,
                              s,
                              c = 0;
                            do {
                              (a = o((s = t + (n - t) / 2), r, i) - e) > 0 ? (n = s) : (t = s);
                            } while (Math.abs(a) > 1e-7 && ++c < 10);
                            return s;
                          })(n, a, a + e, t, r);
                  })(c),
                  n,
                  a,
                );
          };
        }
      };
    })(),
    rt =
      ((et = {
        linear: function () {
          return function (e) {
            return e;
          };
        },
      }),
      (tt = {
        Sine: function () {
          return function (e) {
            return 1 - Math.cos((e * Math.PI) / 2);
          };
        },
        Expo: function () {
          return function (e) {
            return e ? Math.pow(2, 10 * e - 10) : 0;
          };
        },
        Circ: function () {
          return function (e) {
            return 1 - Math.sqrt(1 - e * e);
          };
        },
        Back: function () {
          return function (e) {
            return e * e * (3 * e - 2);
          };
        },
        Bounce: function () {
          return function (e) {
            for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
          };
        },
        Elastic: function (e, t) {
          void 0 === e && (e = 1), void 0 === t && (t = 0.5);
          var n = Ke(e, 1, 10),
            r = Ke(t, 0.1, 2);
          return function (e) {
            return 0 === e || 1 === e
              ? e
              : -n *
                  Math.pow(2, 10 * (e - 1)) *
                  Math.sin(((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r);
          };
        },
      }),
      ['Quad', 'Cubic', 'Quart', 'Quint'].forEach(function (e, t) {
        tt[e] = function () {
          return function (e) {
            return Math.pow(e, t + 2);
          };
        };
      }),
      Object.keys(tt).forEach(function (e) {
        var t = tt[e];
        (et['easeIn' + e] = t),
          (et['easeOut' + e] = function (e, n) {
            return function (r) {
              return 1 - t(e, n)(1 - r);
            };
          }),
          (et['easeInOut' + e] = function (e, n) {
            return function (r) {
              return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
            };
          }),
          (et['easeOutIn' + e] = function (e, n) {
            return function (r) {
              return r < 0.5 ? (1 - t(e, n)(1 - 2 * r)) / 2 : (t(e, n)(2 * r - 1) + 1) / 2;
            };
          });
      }),
      et);
  function ot(e, t) {
    if (Ge.fnc(e)) return e;
    var n = e.split('(')[0],
      r = rt[n],
      o = Ye(e);
    switch (n) {
      case 'spring':
        return Qe(e, t);
      case 'cubicBezier':
        return Xe(nt, o);
      case 'steps':
        return Xe(Ze, o);
      default:
        return Xe(r, o);
    }
  }
  function it(e) {
    try {
      return document.querySelectorAll(e);
    } catch (e) {
      return;
    }
  }
  function at(e, t) {
    for (var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, o = [], i = 0; i < n; i++)
      if (i in e) {
        var a = e[i];
        t.call(r, a, i, e) && o.push(a);
      }
    return o;
  }
  function st(e) {
    return e.reduce(function (e, t) {
      return e.concat(Ge.arr(t) ? st(t) : t);
    }, []);
  }
  function ct(e) {
    return Ge.arr(e)
      ? e
      : (Ge.str(e) && (e = it(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
  }
  function ut(e, t) {
    return e.some(function (e) {
      return e === t;
    });
  }
  function lt(e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  }
  function ft(e, t) {
    var n = lt(e);
    for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
    return n;
  }
  function dt(e, t) {
    var n = lt(e);
    for (var r in t) n[r] = Ge.und(e[r]) ? t[r] : e[r];
    return n;
  }
  function pt(e) {
    var t =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        e,
      );
    if (t) return t[1];
  }
  function ht(e, t) {
    return Ge.fnc(e) ? e(t.target, t.id, t.total) : e;
  }
  function mt(e, t) {
    return e.getAttribute(t);
  }
  function gt(e, t, n) {
    if (ut([n, 'deg', 'rad', 'turn'], pt(t))) return t;
    var r = $e.CSS[t + n];
    if (!Ge.und(r)) return r;
    var o = document.createElement(e.tagName),
      i = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
    i.appendChild(o), (o.style.position = 'absolute'), (o.style.width = 100 + n);
    var a = 100 / o.offsetWidth;
    i.removeChild(o);
    var s = a * parseFloat(t);
    return ($e.CSS[t + n] = s), s;
  }
  function yt(e, t, n) {
    if (t in e.style) {
      var r = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        o = e.style[t] || getComputedStyle(e).getPropertyValue(r) || '0';
      return n ? gt(e, o, n) : o;
    }
  }
  function vt(e, t) {
    return Ge.dom(e) && !Ge.inp(e) && (!Ge.nil(mt(e, t)) || (Ge.svg(e) && e[t]))
      ? 'attribute'
      : Ge.dom(e) && ut(We, t)
        ? 'transform'
        : Ge.dom(e) && 'transform' !== t && yt(e, t)
          ? 'css'
          : null != e[t]
            ? 'object'
            : void 0;
  }
  function bt(e) {
    if (Ge.dom(e)) {
      for (var t, n = e.style.transform || '', r = /(\w+)\(([^)]*)\)/g, o = new Map(); (t = r.exec(n)); )
        o.set(t[1], t[2]);
      return o;
    }
  }
  function wt(e, t, n, r) {
    switch (vt(e, t)) {
      case 'transform':
        return (function (e, t, n, r) {
          var o = Je(t, 'scale')
              ? 1
              : 0 +
                (function (e) {
                  return Je(e, 'translate') || 'perspective' === e
                    ? 'px'
                    : Je(e, 'rotate') || Je(e, 'skew')
                      ? 'deg'
                      : void 0;
                })(t),
            i = bt(e).get(t) || o;
          return n && (n.transforms.list.set(t, i), (n.transforms.last = t)), r ? gt(e, i, r) : i;
        })(e, t, r, n);
      case 'css':
        return yt(e, t, n);
      case 'attribute':
        return mt(e, t);
      default:
        return e[t] || 0;
    }
  }
  function Et(e, t) {
    var n = /^(\*=|\+=|-=)/.exec(e);
    if (!n) return e;
    var r = pt(e) || 0,
      o = parseFloat(t),
      i = parseFloat(e.replace(n[0], ''));
    switch (n[0][0]) {
      case '+':
        return o + i + r;
      case '-':
        return o - i + r;
      case '*':
        return o * i + r;
    }
  }
  function Ot(e, t) {
    if (Ge.col(e))
      return (function (e) {
        return Ge.rgb(e)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
            ? 'rgba(' + n[1] + ',1)'
            : t
          : Ge.hex(e)
            ? (function (e) {
                var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
                    return t + t + n + n + r + r;
                  }),
                  n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return 'rgba(' + parseInt(n[1], 16) + ',' + parseInt(n[2], 16) + ',' + parseInt(n[3], 16) + ',1)';
              })(e)
            : Ge.hsl(e)
              ? (function (e) {
                  var t,
                    n,
                    r,
                    o =
                      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                    i = parseInt(o[1], 10) / 360,
                    a = parseInt(o[2], 10) / 100,
                    s = parseInt(o[3], 10) / 100,
                    c = o[4] || 1;
                  function u(e, t, n) {
                    return (
                      n < 0 && (n += 1),
                      n > 1 && (n -= 1),
                      n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                    );
                  }
                  if (0 == a) t = n = r = s;
                  else {
                    var l = s < 0.5 ? s * (1 + a) : s + a - s * a,
                      f = 2 * s - l;
                    (t = u(f, l, i + 1 / 3)), (n = u(f, l, i)), (r = u(f, l, i - 1 / 3));
                  }
                  return 'rgba(' + 255 * t + ',' + 255 * n + ',' + 255 * r + ',' + c + ')';
                })(e)
              : void 0;
        var t, n;
      })(e);
    if (/\s/g.test(e)) return e;
    var n = pt(e),
      r = n ? e.substr(0, e.length - n.length) : e;
    return t ? r + t : r;
  }
  function St(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  }
  function At(e) {
    for (var t, n = e.points, r = 0, o = 0; o < n.numberOfItems; o++) {
      var i = n.getItem(o);
      o > 0 && (r += St(t, i)), (t = i);
    }
    return r;
  }
  function Tt(e) {
    if (e.getTotalLength) return e.getTotalLength();
    switch (e.tagName.toLowerCase()) {
      case 'circle':
        return (function (e) {
          return 2 * Math.PI * mt(e, 'r');
        })(e);
      case 'rect':
        return (function (e) {
          return 2 * mt(e, 'width') + 2 * mt(e, 'height');
        })(e);
      case 'line':
        return (function (e) {
          return St({ x: mt(e, 'x1'), y: mt(e, 'y1') }, { x: mt(e, 'x2'), y: mt(e, 'y2') });
        })(e);
      case 'polyline':
        return At(e);
      case 'polygon':
        return (function (e) {
          var t = e.points;
          return At(e) + St(t.getItem(t.numberOfItems - 1), t.getItem(0));
        })(e);
    }
  }
  function xt(e, t) {
    var n = t || {},
      r =
        n.el ||
        (function (e) {
          for (var t = e.parentNode; Ge.svg(t) && Ge.svg(t.parentNode); ) t = t.parentNode;
          return t;
        })(e),
      o = r.getBoundingClientRect(),
      i = mt(r, 'viewBox'),
      a = o.width,
      s = o.height,
      c = n.viewBox || (i ? i.split(' ') : [0, 0, a, s]);
    return { el: r, viewBox: c, x: c[0] / 1, y: c[1] / 1, w: a, h: s, vW: c[2], vH: c[3] };
  }
  function Rt(e, t, n) {
    function r(n) {
      void 0 === n && (n = 0);
      var r = t + n >= 1 ? t + n : 0;
      return e.el.getPointAtLength(r);
    }
    var o = xt(e.el, e.svg),
      i = r(),
      a = r(-1),
      s = r(1),
      c = n ? 1 : o.w / o.vW,
      u = n ? 1 : o.h / o.vH;
    switch (e.property) {
      case 'x':
        return (i.x - o.x) * c;
      case 'y':
        return (i.y - o.y) * u;
      case 'angle':
        return (180 * Math.atan2(s.y - a.y, s.x - a.x)) / Math.PI;
    }
  }
  function Ct(e, t) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      r = Ot(Ge.pth(e) ? e.totalLength : e, t) + '';
    return {
      original: r,
      numbers: r.match(n) ? r.match(n).map(Number) : [0],
      strings: Ge.str(e) || t ? r.split(n) : [],
    };
  }
  function Nt(e) {
    return at(e ? st(Ge.arr(e) ? e.map(ct) : ct(e)) : [], function (e, t, n) {
      return n.indexOf(e) === t;
    });
  }
  function jt(e) {
    var t = Nt(e);
    return t.map(function (e, n) {
      return { target: e, id: n, total: t.length, transforms: { list: bt(e) } };
    });
  }
  function Pt(e, t) {
    var n = lt(t);
    if ((/^spring/.test(n.easing) && (n.duration = Qe(n.easing)), Ge.arr(e))) {
      var r = e.length;
      2 !== r || Ge.obj(e[0]) ? Ge.fnc(t.duration) || (n.duration = t.duration / r) : (e = { value: e });
    }
    var o = Ge.arr(e) ? e : [e];
    return o
      .map(function (e, n) {
        var r = Ge.obj(e) && !Ge.pth(e) ? e : { value: e };
        return (
          Ge.und(r.delay) && (r.delay = n ? 0 : t.delay),
          Ge.und(r.endDelay) && (r.endDelay = n === o.length - 1 ? t.endDelay : 0),
          r
        );
      })
      .map(function (e) {
        return dt(e, n);
      });
  }
  var Lt = {
    css: function (e, t, n) {
      return (e.style[t] = n);
    },
    attribute: function (e, t, n) {
      return e.setAttribute(t, n);
    },
    object: function (e, t, n) {
      return (e[t] = n);
    },
    transform: function (e, t, n, r, o) {
      if ((r.list.set(t, n), t === r.last || o)) {
        var i = '';
        r.list.forEach(function (e, t) {
          i += t + '(' + e + ') ';
        }),
          (e.style.transform = i);
      }
    },
  };
  function Bt(e, t) {
    jt(e).forEach(function (e) {
      for (var n in t) {
        var r = ht(t[n], e),
          o = e.target,
          i = pt(r),
          a = wt(o, n, i, e),
          s = Et(Ot(r, i || pt(a)), a),
          c = vt(o, n);
        Lt[c](o, n, s, e.transforms, !0);
      }
    });
  }
  function _t(e, t) {
    return at(
      st(
        e.map(function (e) {
          return t.map(function (t) {
            return (function (e, t) {
              var n = vt(e.target, t.name);
              if (n) {
                var r = (function (e, t) {
                    var n;
                    return e.tweens.map(function (r) {
                      var o = (function (e, t) {
                          var n = {};
                          for (var r in e) {
                            var o = ht(e[r], t);
                            Ge.arr(o) &&
                              1 ===
                                (o = o.map(function (e) {
                                  return ht(e, t);
                                })).length &&
                              (o = o[0]),
                              (n[r] = o);
                          }
                          return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
                        })(r, t),
                        i = o.value,
                        a = Ge.arr(i) ? i[1] : i,
                        s = pt(a),
                        c = wt(t.target, e.name, s, t),
                        u = n ? n.to.original : c,
                        l = Ge.arr(i) ? i[0] : u,
                        f = pt(l) || pt(c),
                        d = s || f;
                      return (
                        Ge.und(a) && (a = u),
                        (o.from = Ct(l, d)),
                        (o.to = Ct(Et(a, l), d)),
                        (o.start = n ? n.end : 0),
                        (o.end = o.start + o.delay + o.duration + o.endDelay),
                        (o.easing = ot(o.easing, o.duration)),
                        (o.isPath = Ge.pth(i)),
                        (o.isPathTargetInsideSVG = o.isPath && Ge.svg(t.target)),
                        (o.isColor = Ge.col(o.from.original)),
                        o.isColor && (o.round = 1),
                        (n = o),
                        o
                      );
                    });
                  })(t, e),
                  o = r[r.length - 1];
                return {
                  type: n,
                  property: t.name,
                  animatable: e,
                  tweens: r,
                  duration: o.end,
                  delay: r[0].delay,
                  endDelay: o.endDelay,
                };
              }
            })(e, t);
          });
        }),
      ),
      function (e) {
        return !Ge.und(e);
      },
    );
  }
  function kt(e, t) {
    var n = e.length,
      r = function (e) {
        return e.timelineOffset ? e.timelineOffset : 0;
      },
      o = {};
    return (
      (o.duration = n
        ? Math.max.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.duration;
            }),
          )
        : t.duration),
      (o.delay = n
        ? Math.min.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.delay;
            }),
          )
        : t.delay),
      (o.endDelay = n
        ? o.duration -
          Math.max.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.duration - e.endDelay;
            }),
          )
        : t.endDelay),
      o
    );
  }
  var Ft = 0,
    Dt = [],
    Mt = (function () {
      var e;
      function t(n) {
        for (var r = Dt.length, o = 0; o < r; ) {
          var i = Dt[o];
          i.paused ? (Dt.splice(o, 1), r--) : (i.tick(n), o++);
        }
        e = o > 0 ? requestAnimationFrame(t) : void 0;
      }
      return (
        'undefined' != typeof document &&
          document.addEventListener('visibilitychange', function () {
            Ut.suspendWhenDocumentHidden &&
              (It()
                ? (e = cancelAnimationFrame(e))
                : (Dt.forEach(function (e) {
                    return e._onDocumentVisibility();
                  }),
                  Mt()));
          }),
        function () {
          e || (It() && Ut.suspendWhenDocumentHidden) || !(Dt.length > 0) || (e = requestAnimationFrame(t));
        }
      );
    })();
  function It() {
    return !!document && document.hidden;
  }
  function Ut(e) {
    void 0 === e && (e = {});
    var t,
      n = 0,
      r = 0,
      o = 0,
      i = 0,
      a = null;
    function s(e) {
      var t =
        window.Promise &&
        new Promise(function (e) {
          return (a = e);
        });
      return (e.finished = t), t;
    }
    var c = (function (e) {
      var t = ft(ze, e),
        n = ft(Ve, e),
        r = (function (e, t) {
          var n = [],
            r = t.keyframes;
          for (var o in (r &&
            (t = dt(
              (function (e) {
                for (
                  var t = at(
                      st(
                        e.map(function (e) {
                          return Object.keys(e);
                        }),
                      ),
                      function (e) {
                        return Ge.key(e);
                      },
                    ).reduce(function (e, t) {
                      return e.indexOf(t) < 0 && e.push(t), e;
                    }, []),
                    n = {},
                    r = function (r) {
                      var o = t[r];
                      n[o] = e.map(function (e) {
                        var t = {};
                        for (var n in e) Ge.key(n) ? n == o && (t.value = e[n]) : (t[n] = e[n]);
                        return t;
                      });
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  r(o);
                return n;
              })(r),
              t,
            )),
          t))
            Ge.key(o) && n.push({ name: o, tweens: Pt(t[o], e) });
          return n;
        })(n, e),
        o = jt(e.targets),
        i = _t(o, r),
        a = kt(i, n),
        s = Ft;
      return (
        Ft++,
        dt(t, {
          id: s,
          children: [],
          animatables: o,
          animations: i,
          duration: a.duration,
          delay: a.delay,
          endDelay: a.endDelay,
        })
      );
    })(e);
    function u() {
      var e = c.direction;
      'alternate' !== e && (c.direction = 'normal' !== e ? 'normal' : 'reverse'),
        (c.reversed = !c.reversed),
        t.forEach(function (e) {
          return (e.reversed = c.reversed);
        });
    }
    function l(e) {
      return c.reversed ? c.duration - e : e;
    }
    function f() {
      (n = 0), (r = l(c.currentTime) * (1 / Ut.speed));
    }
    function d(e, t) {
      t && t.seek(e - t.timelineOffset);
    }
    function p(e) {
      for (var t = 0, n = c.animations, r = n.length; t < r; ) {
        var o = n[t],
          i = o.animatable,
          a = o.tweens,
          s = a.length - 1,
          u = a[s];
        s &&
          (u =
            at(a, function (t) {
              return e < t.end;
            })[0] || u);
        for (
          var l = Ke(e - u.start - u.delay, 0, u.duration) / u.duration,
            f = isNaN(l) ? 1 : u.easing(l),
            d = u.to.strings,
            p = u.round,
            h = [],
            m = u.to.numbers.length,
            g = void 0,
            y = 0;
          y < m;
          y++
        ) {
          var v = void 0,
            b = u.to.numbers[y],
            w = u.from.numbers[y] || 0;
          (v = u.isPath ? Rt(u.value, f * b, u.isPathTargetInsideSVG) : w + f * (b - w)),
            p && ((u.isColor && y > 2) || (v = Math.round(v * p) / p)),
            h.push(v);
        }
        var E = d.length;
        if (E) {
          g = d[0];
          for (var O = 0; O < E; O++) {
            d[O];
            var S = d[O + 1],
              A = h[O];
            isNaN(A) || (g += S ? A + S : A + ' ');
          }
        } else g = h[0];
        Lt[o.type](i.target, o.property, g, i.transforms), (o.currentValue = g), t++;
      }
    }
    function h(e) {
      c[e] && !c.passThrough && c[e](c);
    }
    function m(e) {
      var f = c.duration,
        m = c.delay,
        g = f - c.endDelay,
        y = l(e);
      (c.progress = Ke((y / f) * 100, 0, 100)),
        (c.reversePlayback = y < c.currentTime),
        t &&
          (function (e) {
            if (c.reversePlayback) for (var n = i; n--; ) d(e, t[n]);
            else for (var r = 0; r < i; r++) d(e, t[r]);
          })(y),
        !c.began && c.currentTime > 0 && ((c.began = !0), h('begin')),
        !c.loopBegan && c.currentTime > 0 && ((c.loopBegan = !0), h('loopBegin')),
        y <= m && 0 !== c.currentTime && p(0),
        ((y >= g && c.currentTime !== f) || !f) && p(f),
        y > m && y < g
          ? (c.changeBegan || ((c.changeBegan = !0), (c.changeCompleted = !1), h('changeBegin')), h('change'), p(y))
          : c.changeBegan && ((c.changeCompleted = !0), (c.changeBegan = !1), h('changeComplete')),
        (c.currentTime = Ke(y, 0, f)),
        c.began && h('update'),
        e >= f &&
          ((r = 0),
          c.remaining && !0 !== c.remaining && c.remaining--,
          c.remaining
            ? ((n = o), h('loopComplete'), (c.loopBegan = !1), 'alternate' === c.direction && u())
            : ((c.paused = !0),
              c.completed ||
                ((c.completed = !0),
                h('loopComplete'),
                h('complete'),
                !c.passThrough && 'Promise' in window && (a(), s(c)))));
    }
    return (
      s(c),
      (c.reset = function () {
        var e = c.direction;
        (c.passThrough = !1),
          (c.currentTime = 0),
          (c.progress = 0),
          (c.paused = !0),
          (c.began = !1),
          (c.loopBegan = !1),
          (c.changeBegan = !1),
          (c.completed = !1),
          (c.changeCompleted = !1),
          (c.reversePlayback = !1),
          (c.reversed = 'reverse' === e),
          (c.remaining = c.loop),
          (t = c.children);
        for (var n = (i = t.length); n--; ) c.children[n].reset();
        ((c.reversed && !0 !== c.loop) || ('alternate' === e && 1 === c.loop)) && c.remaining++,
          p(c.reversed ? c.duration : 0);
      }),
      (c._onDocumentVisibility = f),
      (c.set = function (e, t) {
        return Bt(e, t), c;
      }),
      (c.tick = function (e) {
        (o = e), n || (n = o), m((o + (r - n)) * Ut.speed);
      }),
      (c.seek = function (e) {
        m(l(e));
      }),
      (c.pause = function () {
        (c.paused = !0), f();
      }),
      (c.play = function () {
        c.paused && (c.completed && c.reset(), (c.paused = !1), Dt.push(c), f(), Mt());
      }),
      (c.reverse = function () {
        u(), (c.completed = !c.reversed), f();
      }),
      (c.restart = function () {
        c.reset(), c.play();
      }),
      (c.remove = function (e) {
        Ht(Nt(e), c);
      }),
      c.reset(),
      c.autoplay && c.play(),
      c
    );
  }
  function qt(e, t) {
    for (var n = t.length; n--; ) ut(e, t[n].animatable.target) && t.splice(n, 1);
  }
  function Ht(e, t) {
    var n = t.animations,
      r = t.children;
    qt(e, n);
    for (var o = r.length; o--; ) {
      var i = r[o],
        a = i.animations;
      qt(e, a), a.length || i.children.length || r.splice(o, 1);
    }
    n.length || r.length || t.pause();
  }
  (Ut.version = '3.2.1'),
    (Ut.speed = 1),
    (Ut.suspendWhenDocumentHidden = !0),
    (Ut.running = Dt),
    (Ut.remove = function (e) {
      for (var t = Nt(e), n = Dt.length; n--; ) Ht(t, Dt[n]);
    }),
    (Ut.get = wt),
    (Ut.set = Bt),
    (Ut.convertPx = gt),
    (Ut.path = function (e, t) {
      var n = Ge.str(e) ? it(e)[0] : e,
        r = t || 100;
      return function (e) {
        return { property: e, el: n, svg: xt(n), totalLength: Tt(n) * (r / 100) };
      };
    }),
    (Ut.setDashoffset = function (e) {
      var t = Tt(e);
      return e.setAttribute('stroke-dasharray', t), t;
    }),
    (Ut.stagger = function (e, t) {
      void 0 === t && (t = {});
      var n = t.direction || 'normal',
        r = t.easing ? ot(t.easing) : null,
        o = t.grid,
        i = t.axis,
        a = t.from || 0,
        s = 'first' === a,
        c = 'center' === a,
        u = 'last' === a,
        l = Ge.arr(e),
        f = l ? parseFloat(e[0]) : parseFloat(e),
        d = l ? parseFloat(e[1]) : 0,
        p = pt(l ? e[1] : e) || 0,
        h = t.start || 0 + (l ? f : 0),
        m = [],
        g = 0;
      return function (e, t, y) {
        if ((s && (a = 0), c && (a = (y - 1) / 2), u && (a = y - 1), !m.length)) {
          for (var v = 0; v < y; v++) {
            if (o) {
              var b = c ? (o[0] - 1) / 2 : a % o[0],
                w = c ? (o[1] - 1) / 2 : Math.floor(a / o[0]),
                E = b - (v % o[0]),
                O = w - Math.floor(v / o[0]),
                S = Math.sqrt(E * E + O * O);
              'x' === i && (S = -E), 'y' === i && (S = -O), m.push(S);
            } else m.push(Math.abs(a - v));
            g = Math.max.apply(Math, m);
          }
          r &&
            (m = m.map(function (e) {
              return r(e / g) * g;
            })),
            'reverse' === n &&
              (m = m.map(function (e) {
                return i ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
              }));
        }
        return h + (l ? (d - f) / g : f) * (Math.round(100 * m[t]) / 100) + p;
      };
    }),
    (Ut.timeline = function (e) {
      void 0 === e && (e = {});
      var t = Ut(e);
      return (
        (t.duration = 0),
        (t.add = function (n, r) {
          var o = Dt.indexOf(t),
            i = t.children;
          function a(e) {
            e.passThrough = !0;
          }
          o > -1 && Dt.splice(o, 1);
          for (var s = 0; s < i.length; s++) a(i[s]);
          var c = dt(n, ft(Ve, e));
          c.targets = c.targets || e.targets;
          var u = t.duration;
          (c.autoplay = !1),
            (c.direction = t.direction),
            (c.timelineOffset = Ge.und(r) ? u : Et(r, u)),
            a(t),
            t.seek(c.timelineOffset);
          var l = Ut(c);
          a(l), i.push(l);
          var f = kt(i, e);
          return (
            (t.delay = f.delay),
            (t.endDelay = f.endDelay),
            (t.duration = f.duration),
            t.seek(0),
            t.reset(),
            t.autoplay && t.play(),
            t
          );
        }),
        t
      );
    }),
    (Ut.easing = ot),
    (Ut.penner = rt),
    (Ut.random = function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    });
  const zt = Ut,
    Vt = (e, t, n) => {
      const r = e.textContent.trim(),
        o = r.length,
        i = [];
      e.textContent = '';
      for (let a = 0; a < o; a++) {
        const o = document.createElement(t);
        n && n.length && o.classList.add(n), (o.textContent = ' ' === r[a] ? ' ' : r[a]), e.before(o), i.push(o);
      }
      return i;
    },
    Wt = (e, t, n, r, o, i, a, s) => {
      if ((Array.isArray(t.letterize_id) || (t.letterize_id = []), !t.letterize_id.includes(s))) {
        t.letterize_id.push(s);
        const c = [...t.childNodes],
          u = c.length;
        for (let t = 0; t < u; t++) {
          let u;
          switch (c[t].nodeType) {
            case 1:
              -1 === Array.prototype.indexOf.call(e, c[t]) && Wt(e, c[t], n, r, o, i, a, s);
              break;
            case 3:
              (u = Vt(c[t], n, r)), i.push(...u), o[a].push(...u);
          }
        }
      }
    };
  class $t {
    constructor(e) {
      const t = ((e) =>
        e instanceof NodeList || e instanceof HTMLCollection || Array.isArray(e)
          ? e
          : e instanceof HTMLElement
            ? [e]
            : 'string' == typeof e
              ? document.querySelectorAll(e)
              : null)(e.targets);
      if (!t || !t.length) return void console.error(`Letterize: targets '${t}' not found or not specified`);
      const n = t.length;
      $t.numInstances = ($t.numInstances || 0) + 1;
      const r = e.wrapper || 'span',
        o = e.className,
        i = $t.numInstances,
        a = [],
        s = [];
      for (let e = 0; e < n; e++) (a[e] = []), Wt(t, t[e], r, o, a, s, e, i);
      (this._wrapper = r), (this._targets = t), (this._list = a), (this._listAll = s), (this._className = o);
    }
    get listAll() {
      return this._listAll;
    }
    get list() {
      return this._list;
    }
    get targets() {
      return this._targets;
    }
    get className() {
      return this._className;
    }
    get wrapper() {
      return this._wrapper;
    }
    deletterize() {
      const e = this.listAll.length;
      for (let t = 0; t < e; t++)
        this.listAll[t].before(...Array.from(this.listAll[t].childNodes)), this.listAll[t].remove();
      (this._wrapper = void 0),
        (this._targets = void 0),
        (this._list = void 0),
        (this._listAll = void 0),
        (this._className = void 0),
        (this.deletterize = void 0);
    }
  }
  const Kt = $t,
    Jt = e.p + '78555b41ff763079100c.jpg',
    Xt = document.getElementById('searchButton'),
    Gt = document.getElementById('searchInput'),
    Yt = document.getElementById('results'),
    Qt = document.getElementById('descriptionContainer'),
    Zt = document.getElementById('description'),
    en = document.getElementById('error');
  async function tn() {
    const e = Gt.value.toLowerCase().trim(),
      t = document.createElement('div');
    t.classList.add('loader'), Yt.appendChild(t);
    try {
      t.style.display = 'block';
      const r = await He.get(`https://openlibrary.org/subjects/${e}.json?limit=20`);
      (n = r.data.works),
        (Yt.innerHTML = ''),
        Yt.classList.add('results'),
        n.forEach((e) => {
          const t = document.createElement('div');
          t.classList.add('card');
          const n = document.createElement('div');
          n.classList.add('img-loader');
          const r = document.createElement('img');
          r.classList.add('cover'),
            zt({
              targets: '.card',
              translateX: [100, 0],
              duration: 1200,
              opacity: [0, 1],
              delay: (e, t) => 300 + 100 * t,
            });
          try {
            const t = e.cover_id;
            (r.onload = function () {
              n.style.display = 'none';
            }),
              (r.src = t ? `https://covers.openlibrary.org/b/id/${t}.jpg` : Jt);
          } catch (t) {
            (r.src = Jt), console.error('Image not found:', e.title);
          }
          t.appendChild(r), t.appendChild(n);
          const o = document.createElement('h1');
          o.classList.add('title'), (o.textContent = e.title), t.appendChild(o);
          const i = document.createElement('p');
          i.classList.add('authors'),
            (i.textContent = e.authors[0].name || 'Unknown Author'),
            t.appendChild(i),
            t.addEventListener('click', async () => {
              const t = e.key.replace('/works/', '');
              console.log(e);
              try {
                const e = await He.get(`https://openlibrary.org/works/${t}.json`),
                  n = e.data.description?.value || e.data.description || 'No description available.';
                Qt.classList.add('container-description-div'),
                  Zt.classList.add('description-div'),
                  (Zt.innerHTML = n),
                  Qt.addEventListener('click', () => {
                    (Zt.textContent = ''), Qt.classList.remove(...Qt.classList), Zt.classList.remove(...Zt.classList);
                  });
              } catch (e) {
                console.error('Error fetching description:', e), (Zt.textContent = e);
              }
            }),
            Yt.appendChild(t);
        }),
        console.log(r.data),
        0 === r.data.works.length
          ? nn('No results found. Please try again.')
          : Yt.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      nn('');
    } finally {
      t.style.display = 'none';
    }
    var n;
  }
  function nn(e) {
    en.classList.add('error'),
      (en.innerHTML = e),
      Yt.classList.remove('results'),
      (Yt.innerHTML = ''),
      Yt.appendChild(en);
  }
  zt({
    targets: '.search-input',
    translateX: [100, 0],
    duration: 1200,
    opacity: [0, 1],
    delay: (e, t) => 300 + 100 * t,
  }),
    zt({
      targets: '.search-button',
      translateX: [100, 0],
      duration: 1200,
      opacity: [0, 1],
      delay: (e, t) => 300 + 100 * t,
    }),
    Gt.addEventListener('keyup', (e) => {
      'Enter' === e.key && tn();
    }),
    Xt.addEventListener('click', () => {
      tn();
    });
  const rn = document.createElement('div'),
    on = document.createElement('p'),
    an = document.createElement('p');
  rn.classList.add('container-animated'),
    (on.textContent = 'BOOK-FIND-YOUR-NEXT-BOOK-FIND-YOUR-NEXT-BOOK-FIND'),
    (an.textContent = 'FIND-BOOK-YOUR-BOOK-NEXT-FIND-BOOK-NEXT-FIND-BOOK');
  for (var sn = 0; sn < 12; sn++) {
    var cn = on.cloneNode(!0),
      un = an.cloneNode(!0);
    cn.classList.add('animate-me'),
      un.classList.add('animate-me'),
      rn.appendChild(cn),
      rn.appendChild(un),
      document.body.appendChild(rn);
  }
  const ln = new Kt({ targets: '.animate-me' });
  zt.timeline({
    targets: ln.listAll,
    delay: zt.stagger(100, { grid: [ln.list[0].length, ln.list.length], from: 'center' }),
    loop: !0,
  })
    .add({ scale: 1.2 })
    .add({ rotate: '1turn' })
    .add({ scale: 0.8 })
    .add({ rotate: '2turn', scale: 1 });
})();
