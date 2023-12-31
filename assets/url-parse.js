!(function (e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : (('undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : this
      ).URLParse = e())
})(function () {
  return (function n(r, s, a) {
    function i(o, e) {
      if (!s[o]) {
        if (!r[o]) {
          var t = 'function' == typeof require && require
          if (!e && t) return t(o, !0)
          if (p) return p(o, !0)
          throw (
            (((e = new Error("Cannot find module '" + o + "'")).code =
              'MODULE_NOT_FOUND'),
            e)
          )
        }
        ;(t = s[o] = { exports: {} }),
          r[o][0].call(
            t.exports,
            function (e) {
              return i(r[o][1][e] || e)
            },
            t,
            t.exports,
            n,
            r,
            s,
            a
          )
      }
      return s[o].exports
    }
    for (
      var p = 'function' == typeof require && require, e = 0;
      e < a.length;
      e++
    )
      i(a[e])
    return i
  })(
    {
      1: [
        function (e, t, o) {
          !function (a) {
            !function () {
              'use strict'
              var f = e('requires-port'),
                h = e('querystringify'),
                o =
                  /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
                d = /[\n\r\t]/g,
                s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                i = /:\d+$/,
                p = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                v = /^[a-zA-Z]:/
              function m(e) {
                return (e || '').toString().replace(o, '')
              }
              var w = [
                  ['#', 'hash'],
                  ['?', 'query'],
                  function (e, o) {
                    return g(o.protocol) ? e.replace(/\\/g, '/') : e
                  },
                  ['/', 'pathname'],
                  ['@', 'auth', 1],
                  [NaN, 'host', void 0, 1, 1],
                  [/:(\d*)$/, 'port', void 0, 1],
                  [NaN, 'hostname', void 0, 1, 1],
                ],
                r = { hash: 1, query: 1 }
              function y(e) {
                var o,
                  t =
                    'undefined' != typeof window
                      ? window
                      : void 0 !== a
                      ? a
                      : 'undefined' != typeof self
                      ? self
                      : {},
                  t = t.location || {},
                  n = {},
                  t = typeof (e = e || t)
                if ('blob:' === e.protocol) n = new C(unescape(e.pathname), {})
                else if ('string' == t)
                  for (o in ((n = new C(e, {})), r)) delete n[o]
                else if ('object' == t) {
                  for (o in e) o in r || (n[o] = e[o])
                  void 0 === n.slashes && (n.slashes = s.test(e.href))
                }
                return n
              }
              function g(e) {
                return (
                  'file:' === e ||
                  'ftp:' === e ||
                  'http:' === e ||
                  'https:' === e ||
                  'ws:' === e ||
                  'wss:' === e
                )
              }
              function b(e, o) {
                ;(e = (e = m(e)).replace(d, '')), (o = o || {})
                var t,
                  e = p.exec(e),
                  n = e[1] ? e[1].toLowerCase() : '',
                  r = !!e[2],
                  s = !!e[3],
                  a = 0
                return (
                  r
                    ? (a = s
                        ? ((t = e[2] + e[3] + e[4]), e[2].length + e[3].length)
                        : ((t = e[2] + e[4]), e[2].length))
                    : s
                    ? ((t = e[3] + e[4]), (a = e[3].length))
                    : (t = e[4]),
                  'file:' === n
                    ? 2 <= a && (t = t.slice(2))
                    : g(n)
                    ? (t = e[4])
                    : n
                    ? r && (t = t.slice(2))
                    : 2 <= a && g(o.protocol) && (t = e[4]),
                  { protocol: n, slashes: r || g(n), slashesCount: a, rest: t }
                )
              }
              function C(e, o, t) {
                if (((e = (e = m(e)).replace(d, '')), !(this instanceof C)))
                  return new C(e, o, t)
                var n,
                  r,
                  s,
                  a,
                  i,
                  u = w.slice(),
                  p = typeof o,
                  c = this,
                  l = 0
                for (
                  'object' != p && 'string' != p && ((t = o), (o = null)),
                    t && 'function' != typeof t && (t = h.parse),
                    n = !(p = b(e || '', (o = y(o)))).protocol && !p.slashes,
                    c.slashes = p.slashes || (n && o.slashes),
                    c.protocol = p.protocol || o.protocol || '',
                    e = p.rest,
                    (('file:' === p.protocol &&
                      (2 !== p.slashesCount || v.test(e))) ||
                      (!p.slashes &&
                        (p.protocol ||
                          p.slashesCount < 2 ||
                          !g(c.protocol)))) &&
                      (u[3] = [/(.*)/, 'pathname']);
                  l < u.length;
                  l++
                )
                  'function' != typeof (s = u[l])
                    ? ((r = s[0]),
                      (i = s[1]),
                      r != r
                        ? (c[i] = e)
                        : 'string' == typeof r
                        ? ~(a = '@' === r ? e.lastIndexOf(r) : e.indexOf(r)) &&
                          (e =
                            'number' == typeof s[2]
                              ? ((c[i] = e.slice(0, a)), e.slice(a + s[2]))
                              : ((c[i] = e.slice(a)), e.slice(0, a)))
                        : (a = r.exec(e)) &&
                          ((c[i] = a[1]), (e = e.slice(0, a.index))),
                      (c[i] = c[i] || (n && s[3] && o[i]) || ''),
                      s[4] && (c[i] = c[i].toLowerCase()))
                    : (e = s(e, c))
                t && (c.query = t(c.query)),
                  n &&
                    o.slashes &&
                    '/' !== c.pathname.charAt(0) &&
                    ('' !== c.pathname || '' !== o.pathname) &&
                    (c.pathname = (function (e, o) {
                      if ('' === e) return o
                      for (
                        var t = (o || '/')
                            .split('/')
                            .slice(0, -1)
                            .concat(e.split('/')),
                          n = t.length,
                          o = t[n - 1],
                          r = !1,
                          s = 0;
                        n--;

                      )
                        '.' === t[n]
                          ? t.splice(n, 1)
                          : '..' === t[n]
                          ? (t.splice(n, 1), s++)
                          : s && (0 === n && (r = !0), t.splice(n, 1), s--)
                      return (
                        r && t.unshift(''),
                        ('.' !== o && '..' !== o) || t.push(''),
                        t.join('/')
                      )
                    })(c.pathname, o.pathname)),
                  '/' !== c.pathname.charAt(0) &&
                    g(c.protocol) &&
                    (c.pathname = '/' + c.pathname),
                  f(c.port, c.protocol) ||
                    ((c.host = c.hostname), (c.port = '')),
                  (c.username = c.password = ''),
                  c.auth &&
                    (~(a = c.auth.indexOf(':'))
                      ? ((c.username = c.auth.slice(0, a)),
                        (c.username = encodeURIComponent(
                          decodeURIComponent(c.username)
                        )),
                        (c.password = c.auth.slice(a + 1)),
                        (c.password = encodeURIComponent(
                          decodeURIComponent(c.password)
                        )))
                      : (c.username = encodeURIComponent(
                          decodeURIComponent(c.auth)
                        )),
                    (c.auth = c.password
                      ? c.username + ':' + c.password
                      : c.username)),
                  (c.origin =
                    'file:' !== c.protocol && g(c.protocol) && c.host
                      ? c.protocol + '//' + c.host
                      : 'null'),
                  (c.href = c.toString())
              }
              ;(C.prototype = {
                set: function (e, o, t) {
                  var n = this
                  switch (e) {
                    case 'query':
                      'string' == typeof o &&
                        o.length &&
                        (o = (t || h.parse)(o)),
                        (n[e] = o)
                      break
                    case 'port':
                      ;(n[e] = o),
                        f(o, n.protocol)
                          ? o && (n.host = n.hostname + ':' + o)
                          : ((n.host = n.hostname), (n[e] = ''))
                      break
                    case 'hostname':
                      ;(n[e] = o), n.port && (o += ':' + n.port), (n.host = o)
                      break
                    case 'host':
                      ;(n[e] = o),
                        i.test(o)
                          ? ((o = o.split(':')),
                            (n.port = o.pop()),
                            (n.hostname = o.join(':')))
                          : ((n.hostname = o), (n.port = ''))
                      break
                    case 'protocol':
                      ;(n.protocol = o.toLowerCase()), (n.slashes = !t)
                      break
                    case 'pathname':
                    case 'hash':
                      o
                        ? ((r = 'pathname' === e ? '/' : '#'),
                          (n[e] = o.charAt(0) !== r ? r + o : o))
                        : (n[e] = o)
                      break
                    case 'username':
                    case 'password':
                      n[e] = encodeURIComponent(o)
                      break
                    case 'auth':
                      var r = o.indexOf(':')
                      ~r
                        ? ((n.username = o.slice(0, r)),
                          (n.username = encodeURIComponent(
                            decodeURIComponent(n.username)
                          )),
                          (n.password = o.slice(r + 1)),
                          (n.password = encodeURIComponent(
                            decodeURIComponent(n.password)
                          )))
                        : (n.username = encodeURIComponent(
                            decodeURIComponent(o)
                          ))
                  }
                  for (var s = 0; s < w.length; s++) {
                    var a = w[s]
                    a[4] && (n[a[1]] = n[a[1]].toLowerCase())
                  }
                  return (
                    (n.auth = n.password
                      ? n.username + ':' + n.password
                      : n.username),
                    (n.origin =
                      'file:' !== n.protocol && g(n.protocol) && n.host
                        ? n.protocol + '//' + n.host
                        : 'null'),
                    (n.href = n.toString()),
                    n
                  )
                },
                toString: function (e) {
                  ;(e && 'function' == typeof e) || (e = h.stringify)
                  var o = this,
                    t = o.host,
                    n =
                      ((n = o.protocol) &&
                        ':' !== n.charAt(n.length - 1) &&
                        (n += ':'),
                      n +
                        ((o.protocol && o.slashes) || g(o.protocol)
                          ? '//'
                          : ''))
                  return (
                    o.username
                      ? ((n += o.username),
                        o.password && (n += ':' + o.password),
                        (n += '@'))
                      : o.password
                      ? (n = n + (':' + o.password) + '@')
                      : 'file:' !== o.protocol &&
                        g(o.protocol) &&
                        !t &&
                        '/' !== o.pathname &&
                        (n += '@'),
                    (':' === t[t.length - 1] ||
                      (i.test(o.hostname) && !o.port)) &&
                      (t += ':'),
                    (n += t + o.pathname),
                    (t = 'object' == typeof o.query ? e(o.query) : o.query) &&
                      (n += '?' !== t.charAt(0) ? '?' + t : t),
                    o.hash && (n += o.hash),
                    n
                  )
                },
              }),
                (C.extractProtocol = b),
                (C.location = y),
                (C.trimLeft = m),
                (C.qs = h),
                (t.exports = C)
            }.call(this)
          }.call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          )
        },
        { querystringify: 2, 'requires-port': 3 },
      ],
      2: [
        function (e, o, t) {
          'use strict'
          var s = Object.prototype.hasOwnProperty
          function a(e) {
            try {
              return decodeURIComponent(e.replace(/\+/g, ' '))
            } catch (e) {
              return null
            }
          }
          function i(e) {
            try {
              return encodeURIComponent(e)
            } catch (e) {
              return null
            }
          }
          ;(t.stringify = function (e, o) {
            var t,
              n,
              r = []
            for (n in ('string' != typeof (o = o || '') && (o = '?'), e))
              s.call(e, n) &&
                ((t = e[n]) || (null != t && !isNaN(t)) || (t = ''),
                (n = i(n)),
                (t = i(t)),
                null !== n && null !== t && r.push(n + '=' + t))
            return r.length ? o + r.join('&') : ''
          }),
            (t.parse = function (e) {
              for (var o = /([^=?#&]+)=?([^&]*)/g, t = {}; (r = o.exec(e)); ) {
                var n = a(r[1]),
                  r = a(r[2])
                null === n || null === r || n in t || (t[n] = r)
              }
              return t
            })
        },
        {},
      ],
      3: [
        function (e, o, t) {
          'use strict'
          o.exports = function (e, o) {
            if (((o = o.split(':')[0]), !(e = +e))) return !1
            switch (o) {
              case 'http':
              case 'ws':
                return 80 !== e
              case 'https':
              case 'wss':
                return 443 !== e
              case 'ftp':
                return 21 !== e
              case 'gopher':
                return 70 !== e
              case 'file':
                return !1
            }
            return 0 !== e
          }
        },
        {},
      ],
    },
    {},
    [1]
  )(1)
})
