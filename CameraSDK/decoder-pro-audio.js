!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(require('path'), require('fs'), require('crypto'))
    : 'function' == typeof define && define.amd
    ? define(['path', 'fs', 'crypto'], t)
    : t(
        (e = 'undefined' != typeof globalThis ? globalThis : e || self).path,
        e.fs,
        e.crypto$1
      );
})(this, function (e, f, p) {
  'use strict';
  function c(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var Bt = c(e),
    At = c(f),
    kt = c(p);
  function m(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var _ = m(function (z) {
      var _;
      (_ = void 0 !== (_ = void 0 !== _ ? _ : {}) ? _ : {}).locateFile =
        function (e) {
          return 'decoder-pro-audio.wasm' == e &&
            'undefined' != typeof JESSIBUCA_PRO_AUDIO_WASM_URL &&
            '' != JESSIBUCA_PRO_AUDIO_WASM_URL
            ? JESSIBUCA_PRO_AUDIO_WASM_URL
            : e;
        };
      var t,
        m,
        R,
        M,
        N,
        O,
        G = Object.assign({}, _),
        H = './this.program',
        V = 'object' == typeof window,
        h = 'function' == typeof importScripts,
        $ =
          'object' == typeof process &&
          'object' == typeof process.versions &&
          'string' == typeof process.versions.node,
        e = '',
        j =
          ($
            ? ((e = h ? Bt.default.dirname(e) + '/' : __dirname + '/'),
              (O = () => {
                N || ((M = At.default), (N = Bt.default));
              }),
              (t = function (e, t) {
                return (
                  O(),
                  (e = N.normalize(e)),
                  M.readFileSync(e, t ? void 0 : 'utf8')
                );
              }),
              (R = (e) => {
                e = t(e, !0);
                return (e = e.buffer ? e : new Uint8Array(e));
              }),
              (m = (e, r, i) => {
                O(),
                  (e = N.normalize(e)),
                  M.readFile(e, function (e, t) {
                    e ? i(e) : r(t.buffer);
                  });
              }),
              1 < process.argv.length &&
                (H = process.argv[1].replace(/\\/g, '/')),
              process.argv.slice(2),
              (z.exports = _),
              process.on('uncaughtException', function (e) {
                throw e;
              }),
              process.on('unhandledRejection', function (e) {
                throw e;
              }),
              (_.inspect = function () {
                return '[Emscripten Module object]';
              }))
            : (V || h) &&
              (h
                ? (e = self.location.href)
                : 'undefined' != typeof document &&
                  document.currentScript &&
                  (e = document.currentScript.src),
              (e =
                0 !== e.indexOf('blob:')
                  ? e.substr(0, e.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                  : ''),
              (t = (e) => {
                var t = new XMLHttpRequest();
                return t.open('GET', e, !1), t.send(null), t.responseText;
              }),
              h &&
                (R = (e) => {
                  var t = new XMLHttpRequest();
                  return (
                    t.open('GET', e, !1),
                    (t.responseType = 'arraybuffer'),
                    t.send(null),
                    new Uint8Array(t.response)
                  );
                }),
              (m = (e, t, r) => {
                var i = new XMLHttpRequest();
                i.open('GET', e, !0),
                  (i.responseType = 'arraybuffer'),
                  (i.onload = () => {
                    200 == i.status || (0 == i.status && i.response)
                      ? t(i.response)
                      : r();
                  }),
                  (i.onerror = r),
                  i.send(null);
              })),
          _.print || console.log.bind(console)),
        o = _.printErr || console.warn.bind(console);
      Object.assign(_, G),
        _.arguments && _.arguments,
        _.thisProgram && (H = _.thisProgram),
        _.quit && _.quit;
      _.wasmBinary && (n = _.wasmBinary),
        _.noExitRuntime,
        'object' != typeof WebAssembly && c('no native wasm support detected');
      var n,
        W = !1;
      function Y(e, t) {
        e || c(t);
      }
      var q,
        u,
        f,
        l,
        K,
        d,
        p,
        X,
        Z,
        J,
        Q =
          'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
      function a(e, t, r) {
        for (var i = t + r, s = t; e[s] && !(i <= s); ) ++s;
        if (16 < s - t && e.buffer && Q) return Q.decode(e.subarray(t, s));
        for (var n = ''; t < s; ) {
          var a,
            o,
            l = e[t++];
          128 & l
            ? ((a = 63 & e[t++]),
              192 != (224 & l)
                ? ((o = 63 & e[t++]),
                  (l =
                    224 == (240 & l)
                      ? ((15 & l) << 12) | (a << 6) | o
                      : ((7 & l) << 18) |
                        (a << 12) |
                        (o << 6) |
                        (63 & e[t++])) < 65536
                    ? (n += String.fromCharCode(l))
                    : ((o = l - 65536),
                      (n += String.fromCharCode(
                        55296 | (o >> 10),
                        56320 | (1023 & o)
                      ))))
                : (n += String.fromCharCode(((31 & l) << 6) | a)))
            : (n += String.fromCharCode(l));
        }
        return n;
      }
      function ee(e, t) {
        return e ? a(f, e, t) : '';
      }
      function te(e, t, r, i) {
        if (!(0 < i)) return 0;
        for (var s = r, n = r + i - 1, a = 0; a < e.length; ++a) {
          var o = e.charCodeAt(a);
          if (
            (o =
              55296 <= o && o <= 57343
                ? (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))
                : o) <= 127
          ) {
            if (n <= r) break;
            t[r++] = o;
          } else {
            if (o <= 2047) {
              if (n <= r + 1) break;
              t[r++] = 192 | (o >> 6);
            } else {
              if (o <= 65535) {
                if (n <= r + 2) break;
                t[r++] = 224 | (o >> 12);
              } else {
                if (n <= r + 3) break;
                (t[r++] = 240 | (o >> 18)), (t[r++] = 128 | ((o >> 12) & 63));
              }
              t[r++] = 128 | ((o >> 6) & 63);
            }
            t[r++] = 128 | (63 & o);
          }
        }
        return (t[r] = 0), r - s;
      }
      function re(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var i = e.charCodeAt(r);
          i <= 127
            ? t++
            : i <= 2047
            ? (t += 2)
            : 55296 <= i && i <= 57343
            ? ((t += 4), ++r)
            : (t += 3);
        }
        return t;
      }
      _.INITIAL_MEMORY;
      var ie = [],
        se = [],
        ne = [],
        r = 0,
        i = null;
      function ae() {
        r++, _.monitorRunDependencies && _.monitorRunDependencies(r);
      }
      function oe() {
        var e;
        r--,
          _.monitorRunDependencies && _.monitorRunDependencies(r),
          0 == r && i && ((e = i), (i = null), e());
      }
      function c(e) {
        throw (
          (_.onAbort && _.onAbort(e),
          o((e = 'Aborted(' + e + ')')),
          (W = !0),
          (e += '. Build with -sASSERTIONS for more info.'),
          new WebAssembly.RuntimeError(e))
        );
      }
      var g, y, b;
      function le(e) {
        return e.startsWith('data:application/octet-stream;base64,');
      }
      function de(e) {
        return e.startsWith('file://');
      }
      function he(e) {
        try {
          if (e == g && n) return new Uint8Array(n);
          if (R) return R(e);
          throw 'both async and sync fetching of the wasm failed';
        } catch (e) {
          c(e);
        }
      }
      function ue(e) {
        for (; 0 < e.length; ) e.shift()(_);
      }
      function fe(e) {
        (this.excPtr = e),
          (this.ptr = e - 24),
          (this.set_type = function (e) {
            p[(this.ptr + 4) >> 2] = e;
          }),
          (this.get_type = function () {
            return p[(this.ptr + 4) >> 2];
          }),
          (this.set_destructor = function (e) {
            p[(this.ptr + 8) >> 2] = e;
          }),
          (this.get_destructor = function () {
            return p[(this.ptr + 8) >> 2];
          }),
          (this.set_refcount = function (e) {
            d[this.ptr >> 2] = e;
          }),
          (this.set_caught = function (e) {
            u[(this.ptr + 12) | 0] = e = e ? 1 : 0;
          }),
          (this.get_caught = function () {
            return 0 != u[(this.ptr + 12) | 0];
          }),
          (this.set_rethrown = function (e) {
            u[(this.ptr + 13) | 0] = e = e ? 1 : 0;
          }),
          (this.get_rethrown = function () {
            return 0 != u[(this.ptr + 13) | 0];
          }),
          (this.init = function (e, t) {
            this.set_adjusted_ptr(0),
              this.set_type(e),
              this.set_destructor(t),
              this.set_refcount(0),
              this.set_caught(!1),
              this.set_rethrown(!1);
          }),
          (this.add_ref = function () {
            var e = d[this.ptr >> 2];
            d[this.ptr >> 2] = e + 1;
          }),
          (this.release_ref = function () {
            var e = d[this.ptr >> 2];
            return (d[this.ptr >> 2] = e - 1), 1 === e;
          }),
          (this.set_adjusted_ptr = function (e) {
            p[(this.ptr + 16) >> 2] = e;
          }),
          (this.get_adjusted_ptr = function () {
            return p[(this.ptr + 16) >> 2];
          }),
          (this.get_exception_ptr = function () {
            var e;
            return Ut(this.get_type())
              ? p[this.excPtr >> 2]
              : 0 !== (e = this.get_adjusted_ptr())
              ? e
              : this.excPtr;
          });
      }
      le((g = 'decoder-pro-audio.wasm')) ||
        ((G = g), (g = _.locateFile ? _.locateFile(G, e) : e + G));
      var v = {
          isAbs: (e) => '/' === e.charAt(0),
          splitPath: (e) =>
            /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
              .exec(e)
              .slice(1),
          normalizeArray: (e, t) => {
            for (var r = 0, i = e.length - 1; 0 <= i; i--) {
              var s = e[i];
              '.' === s
                ? e.splice(i, 1)
                : '..' === s
                ? (e.splice(i, 1), r++)
                : r && (e.splice(i, 1), r--);
            }
            if (t) for (; r; r--) e.unshift('..');
            return e;
          },
          normalize: (e) => {
            var t = v.isAbs(e),
              r = '/' === e.substr(-1);
            return (
              (e =
                (e = v
                  .normalizeArray(
                    e.split('/').filter((e) => !!e),
                    !t
                  )
                  .join('/')) || t
                  ? e
                  : '.') &&
                r &&
                (e += '/'),
              (t ? '/' : '') + e
            );
          },
          dirname: (e) => {
            var e = v.splitPath(e),
              t = e[0],
              e = e[1];
            return t || e ? t + (e = e && e.substr(0, e.length - 1)) : '.';
          },
          basename: (e) => {
            var t;
            return '/' === e
              ? '/'
              : -1 ===
                (t = (e = (e = v.normalize(e)).replace(/\/$/, '')).lastIndexOf(
                  '/'
                ))
              ? e
              : e.substr(t + 1);
          },
          join: function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return v.normalize(e.join('/'));
          },
          join2: (e, t) => v.normalize(e + '/' + t),
        },
        w = {
          resolve: function () {
            for (
              var e = '', t = !1, r = arguments.length - 1;
              -1 <= r && !t;
              r--
            ) {
              var i = 0 <= r ? arguments[r] : E.cwd();
              if ('string' != typeof i)
                throw new TypeError(
                  'Arguments to path.resolve must be strings'
                );
              if (!i) return '';
              (e = i + '/' + e), (t = v.isAbs(i));
            }
            return (
              (t ? '/' : '') +
                v
                  .normalizeArray(
                    e.split('/').filter((e) => !!e),
                    !t
                  )
                  .join('/') || '.'
            );
          },
          relative: (e, t) => {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var r = e.length - 1; 0 <= r && '' === e[r]; r--);
              return r < t ? [] : e.slice(t, r - t + 1);
            }
            (e = w.resolve(e).substr(1)), (t = w.resolve(t).substr(1));
            for (
              var i = r(e.split('/')),
                s = r(t.split('/')),
                n = Math.min(i.length, s.length),
                a = n,
                o = 0;
              o < n;
              o++
            )
              if (i[o] !== s[o]) {
                a = o;
                break;
              }
            for (var l = [], o = a; o < i.length; o++) l.push('..');
            return (l = l.concat(s.slice(a))).join('/');
          },
        };
      function pe(e, t, r) {
        (r = 0 < r ? r : re(e) + 1),
          (r = new Array(r)),
          (e = te(e, r, 0, r.length));
        return t && (r.length = e), r;
      }
      var s = {
        ttys: [],
        init: function () {},
        shutdown: function () {},
        register: function (e, t) {
          (s.ttys[e] = { input: [], output: [], ops: t }),
            E.registerDevice(e, s.stream_ops);
        },
        stream_ops: {
          open: function (e) {
            var t = s.ttys[e.node.rdev];
            if (!t) throw new E.ErrnoError(43);
            (e.tty = t), (e.seekable = !1);
          },
          close: function (e) {
            e.tty.ops.flush(e.tty);
          },
          flush: function (e) {
            e.tty.ops.flush(e.tty);
          },
          read: function (e, t, r, i, s) {
            if (!e.tty || !e.tty.ops.get_char) throw new E.ErrnoError(60);
            for (var n, a = 0, o = 0; o < i; o++) {
              try {
                n = e.tty.ops.get_char(e.tty);
              } catch (e) {
                throw new E.ErrnoError(29);
              }
              if (void 0 === n && 0 === a) throw new E.ErrnoError(6);
              if (null == n) break;
              a++, (t[r + o] = n);
            }
            return a && (e.node.timestamp = Date.now()), a;
          },
          write: function (e, t, r, i, s) {
            if (!e.tty || !e.tty.ops.put_char) throw new E.ErrnoError(60);
            try {
              for (var n = 0; n < i; n++) e.tty.ops.put_char(e.tty, t[r + n]);
            } catch (e) {
              throw new E.ErrnoError(29);
            }
            return i && (e.node.timestamp = Date.now()), n;
          },
        },
        default_tty_ops: {
          get_char: function (e) {
            if (!e.input.length) {
              var t = null;
              if ($) {
                var r = Buffer.alloc(256),
                  i = 0;
                try {
                  i = M.readSync(process.stdin.fd, r, 0, 256, -1);
                } catch (e) {
                  if (!e.toString().includes('EOF')) throw e;
                  i = 0;
                }
                t = 0 < i ? r.slice(0, i).toString('utf-8') : null;
              } else
                'undefined' != typeof window &&
                'function' == typeof global.prompt
                  ? null !== (t = global.prompt('Input: ')) && (t += '\n')
                  : 'function' == typeof readline &&
                    null !== (t = readline()) &&
                    (t += '\n');
              if (!t) return null;
              e.input = pe(t, !0);
            }
            return e.input.shift();
          },
          put_char: function (e, t) {
            null === t || 10 === t
              ? (j(a(e.output, 0)), (e.output = []))
              : 0 != t && e.output.push(t);
          },
          flush: function (e) {
            e.output &&
              0 < e.output.length &&
              (j(a(e.output, 0)), (e.output = []));
          },
        },
        default_tty1_ops: {
          put_char: function (e, t) {
            null === t || 10 === t
              ? (o(a(e.output, 0)), (e.output = []))
              : 0 != t && e.output.push(t);
          },
          flush: function (e) {
            e.output &&
              0 < e.output.length &&
              (o(a(e.output, 0)), (e.output = []));
          },
        },
      };
      function ce(e) {
        (t = e), (e = 65536 * Math.ceil(t / 65536));
        var t = Et(65536, e);
        return t ? ((e = e), f.fill(0, t, t + e), t) : 0;
      }
      var S = {
          ops_table: null,
          mount: function (e) {
            return S.createNode(null, '/', 16895, 0);
          },
          createNode: function (e, t, r, i) {
            if (E.isBlkdev(r) || E.isFIFO(r)) throw new E.ErrnoError(63);
            S.ops_table ||
              (S.ops_table = {
                dir: {
                  node: {
                    getattr: S.node_ops.getattr,
                    setattr: S.node_ops.setattr,
                    lookup: S.node_ops.lookup,
                    mknod: S.node_ops.mknod,
                    rename: S.node_ops.rename,
                    unlink: S.node_ops.unlink,
                    rmdir: S.node_ops.rmdir,
                    readdir: S.node_ops.readdir,
                    symlink: S.node_ops.symlink,
                  },
                  stream: { llseek: S.stream_ops.llseek },
                },
                file: {
                  node: {
                    getattr: S.node_ops.getattr,
                    setattr: S.node_ops.setattr,
                  },
                  stream: {
                    llseek: S.stream_ops.llseek,
                    read: S.stream_ops.read,
                    write: S.stream_ops.write,
                    allocate: S.stream_ops.allocate,
                    mmap: S.stream_ops.mmap,
                    msync: S.stream_ops.msync,
                  },
                },
                link: {
                  node: {
                    getattr: S.node_ops.getattr,
                    setattr: S.node_ops.setattr,
                    readlink: S.node_ops.readlink,
                  },
                  stream: {},
                },
                chrdev: {
                  node: {
                    getattr: S.node_ops.getattr,
                    setattr: S.node_ops.setattr,
                  },
                  stream: E.chrdev_stream_ops,
                },
              });
            r = E.createNode(e, t, r, i);
            return (
              E.isDir(r.mode)
                ? ((r.node_ops = S.ops_table.dir.node),
                  (r.stream_ops = S.ops_table.dir.stream),
                  (r.contents = {}))
                : E.isFile(r.mode)
                ? ((r.node_ops = S.ops_table.file.node),
                  (r.stream_ops = S.ops_table.file.stream),
                  (r.usedBytes = 0),
                  (r.contents = null))
                : E.isLink(r.mode)
                ? ((r.node_ops = S.ops_table.link.node),
                  (r.stream_ops = S.ops_table.link.stream))
                : E.isChrdev(r.mode) &&
                  ((r.node_ops = S.ops_table.chrdev.node),
                  (r.stream_ops = S.ops_table.chrdev.stream)),
              (r.timestamp = Date.now()),
              e && ((e.contents[t] = r), (e.timestamp = r.timestamp)),
              r
            );
          },
          getFileDataAsTypedArray: function (e) {
            return e.contents
              ? e.contents.subarray
                ? e.contents.subarray(0, e.usedBytes)
                : new Uint8Array(e.contents)
              : new Uint8Array(0);
          },
          expandFileStorage: function (e, t) {
            var r = e.contents ? e.contents.length : 0;
            t <= r ||
              ((t = Math.max(t, (r * (r < 1048576 ? 2 : 1.125)) >>> 0)),
              0 != r && (t = Math.max(t, 256)),
              (r = e.contents),
              (e.contents = new Uint8Array(t)),
              0 < e.usedBytes && e.contents.set(r.subarray(0, e.usedBytes), 0));
          },
          resizeFileStorage: function (e, t) {
            var r;
            e.usedBytes != t &&
              (0 == t
                ? ((e.contents = null), (e.usedBytes = 0))
                : ((r = e.contents),
                  (e.contents = new Uint8Array(t)),
                  r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))),
                  (e.usedBytes = t)));
          },
          node_ops: {
            getattr: function (e) {
              var t = {};
              return (
                (t.dev = E.isChrdev(e.mode) ? e.id : 1),
                (t.ino = e.id),
                (t.mode = e.mode),
                (t.nlink = 1),
                (t.uid = 0),
                (t.gid = 0),
                (t.rdev = e.rdev),
                E.isDir(e.mode)
                  ? (t.size = 4096)
                  : E.isFile(e.mode)
                  ? (t.size = e.usedBytes)
                  : E.isLink(e.mode)
                  ? (t.size = e.link.length)
                  : (t.size = 0),
                (t.atime = new Date(e.timestamp)),
                (t.mtime = new Date(e.timestamp)),
                (t.ctime = new Date(e.timestamp)),
                (t.blksize = 4096),
                (t.blocks = Math.ceil(t.size / t.blksize)),
                t
              );
            },
            setattr: function (e, t) {
              void 0 !== t.mode && (e.mode = t.mode),
                void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                void 0 !== t.size && S.resizeFileStorage(e, t.size);
            },
            lookup: function (e, t) {
              throw E.genericErrors[44];
            },
            mknod: function (e, t, r, i) {
              return S.createNode(e, t, r, i);
            },
            rename: function (e, t, r) {
              if (E.isDir(e.mode)) {
                var i;
                try {
                  i = E.lookupNode(t, r);
                } catch (e) {}
                if (i) for (var s in i.contents) throw new E.ErrnoError(55);
              }
              delete e.parent.contents[e.name],
                (e.parent.timestamp = Date.now()),
                (e.name = r),
                (t.contents[r] = e),
                (t.timestamp = e.parent.timestamp),
                (e.parent = t);
            },
            unlink: function (e, t) {
              delete e.contents[t], (e.timestamp = Date.now());
            },
            rmdir: function (e, t) {
              for (var r in E.lookupNode(e, t).contents)
                throw new E.ErrnoError(55);
              delete e.contents[t], (e.timestamp = Date.now());
            },
            readdir: function (e) {
              var t,
                r = ['.', '..'];
              for (t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
              return r;
            },
            symlink: function (e, t, r) {
              e = S.createNode(e, t, 41471, 0);
              return (e.link = r), e;
            },
            readlink: function (e) {
              if (E.isLink(e.mode)) return e.link;
              throw new E.ErrnoError(28);
            },
          },
          stream_ops: {
            read: function (e, t, r, i, s) {
              var n = e.node.contents;
              if (s >= e.node.usedBytes) return 0;
              var a = Math.min(e.node.usedBytes - s, i);
              if (8 < a && n.subarray) t.set(n.subarray(s, s + a), r);
              else for (var o = 0; o < a; o++) t[r + o] = n[s + o];
              return a;
            },
            write: function (e, t, r, i, s, n) {
              if (!i) return 0;
              var a = e.node;
              if (
                ((a.timestamp = Date.now()),
                t.subarray && (!a.contents || a.contents.subarray))
              ) {
                if (n)
                  return (a.contents = t.subarray(r, r + i)), (a.usedBytes = i);
                if (0 === a.usedBytes && 0 === s)
                  return (a.contents = t.slice(r, r + i)), (a.usedBytes = i);
                if (s + i <= a.usedBytes)
                  return a.contents.set(t.subarray(r, r + i), s), i;
              }
              if (
                (S.expandFileStorage(a, s + i),
                a.contents.subarray && t.subarray)
              )
                a.contents.set(t.subarray(r, r + i), s);
              else for (var o = 0; o < i; o++) a.contents[s + o] = t[r + o];
              return (a.usedBytes = Math.max(a.usedBytes, s + i)), i;
            },
            llseek: function (e, t, r) {
              if (
                (1 === r
                  ? (t += e.position)
                  : 2 === r && E.isFile(e.node.mode) && (t += e.node.usedBytes),
                t < 0)
              )
                throw new E.ErrnoError(28);
              return t;
            },
            allocate: function (e, t, r) {
              S.expandFileStorage(e.node, t + r),
                (e.node.usedBytes = Math.max(e.node.usedBytes, t + r));
            },
            mmap: function (e, t, r, i, s) {
              if (!E.isFile(e.node.mode)) throw new E.ErrnoError(43);
              var n,
                a,
                e = e.node.contents;
              if (2 & s || e.buffer !== q) {
                if (
                  ((0 < r || r + t < e.length) &&
                    (e = e.subarray
                      ? e.subarray(r, r + t)
                      : Array.prototype.slice.call(e, r, r + t)),
                  (a = !0),
                  !(n = ce(t)))
                )
                  throw new E.ErrnoError(48);
                u.set(e, n);
              } else (a = !1), (n = e.byteOffset);
              return { ptr: n, allocated: a };
            },
            msync: function (e, t, r, i, s) {
              if (E.isFile(e.node.mode))
                return 2 & s || S.stream_ops.write(e, t, 0, i, r, !1), 0;
              throw new E.ErrnoError(43);
            },
          },
        },
        E = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: '/',
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath: function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (!(e = w.resolve(E.cwd(), e))) return { path: '', node: null };
            if (
              8 <
              (t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t))
                .recurse_count
            )
              throw new E.ErrnoError(32);
            for (
              var r = v.normalizeArray(
                  e.split('/').filter((e) => !!e),
                  !1
                ),
                i = E.root,
                s = '/',
                n = 0;
              n < r.length;
              n++
            ) {
              var a = n === r.length - 1;
              if (a && t.parent) break;
              if (
                ((i = E.lookupNode(i, r[n])),
                (s = v.join2(s, r[n])),
                !E.isMountpoint(i) ||
                  (a && !t.follow_mount) ||
                  (i = i.mounted.root),
                !a || t.follow)
              )
                for (var o = 0; E.isLink(i.mode); ) {
                  var l = E.readlink(s),
                    s = w.resolve(v.dirname(s), l),
                    i = E.lookupPath(s, {
                      recurse_count: t.recurse_count + 1,
                    }).node;
                  if (40 < o++) throw new E.ErrnoError(32);
                }
            }
            return { path: s, node: i };
          },
          getPath: (e) => {
            for (var t, r; ; ) {
              if (E.isRoot(e))
                return (
                  (r = e.mount.mountpoint),
                  t ? ('/' !== r[r.length - 1] ? r + '/' + t : r + t) : r
                );
              (t = t ? e.name + '/' + t : e.name), (e = e.parent);
            }
          },
          hashName: (e, t) => {
            for (var r = 0, i = 0; i < t.length; i++)
              r = ((r << 5) - r + t.charCodeAt(i)) | 0;
            return ((e + r) >>> 0) % E.nameTable.length;
          },
          hashAddNode: (e) => {
            var t = E.hashName(e.parent.id, e.name);
            (e.name_next = E.nameTable[t]), (E.nameTable[t] = e);
          },
          hashRemoveNode: (e) => {
            var t = E.hashName(e.parent.id, e.name);
            if (E.nameTable[t] === e) E.nameTable[t] = e.name_next;
            else
              for (var r = E.nameTable[t]; r; ) {
                if (r.name_next === e) {
                  r.name_next = e.name_next;
                  break;
                }
                r = r.name_next;
              }
          },
          lookupNode: (e, t) => {
            var r = E.mayLookup(e);
            if (r) throw new E.ErrnoError(r, e);
            for (
              var r = E.hashName(e.id, t), i = E.nameTable[r];
              i;
              i = i.name_next
            ) {
              var s = i.name;
              if (i.parent.id === e.id && s === t) return i;
            }
            return E.lookup(e, t);
          },
          createNode: (e, t, r, i) => {
            e = new E.FSNode(e, t, r, i);
            return E.hashAddNode(e), e;
          },
          destroyNode: (e) => {
            E.hashRemoveNode(e);
          },
          isRoot: (e) => e === e.parent,
          isMountpoint: (e) => !!e.mounted,
          isFile: (e) => 32768 == (61440 & e),
          isDir: (e) => 16384 == (61440 & e),
          isLink: (e) => 40960 == (61440 & e),
          isChrdev: (e) => 8192 == (61440 & e),
          isBlkdev: (e) => 24576 == (61440 & e),
          isFIFO: (e) => 4096 == (61440 & e),
          isSocket: (e) => !(49152 & ~e),
          flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
          modeStringToFlags: (e) => {
            var t = E.flagModes[e];
            if (void 0 === t) throw new Error('Unknown file open mode: ' + e);
            return t;
          },
          flagsToPermissionString: (e) => {
            var t = ['r', 'w', 'rw'][3 & e];
            return 512 & e && (t += 'w'), t;
          },
          nodePermissions: (e, t) =>
            E.ignorePermissions ||
            ((!t.includes('r') || 292 & e.mode) &&
              (!t.includes('w') || 146 & e.mode) &&
              (!t.includes('x') || 73 & e.mode))
              ? 0
              : 2,
          mayLookup: (e) => {
            return E.nodePermissions(e, 'x') || (e.node_ops.lookup ? 0 : 2);
          },
          mayCreate: (e, t) => {
            try {
              return E.lookupNode(e, t), 20;
            } catch (e) {}
            return E.nodePermissions(e, 'wx');
          },
          mayDelete: (e, t, r) => {
            var i;
            try {
              i = E.lookupNode(e, t);
            } catch (e) {
              return e.errno;
            }
            t = E.nodePermissions(e, 'wx');
            if (t) return t;
            if (r) {
              if (!E.isDir(i.mode)) return 54;
              if (E.isRoot(i) || E.getPath(i) === E.cwd()) return 10;
            } else if (E.isDir(i.mode)) return 31;
            return 0;
          },
          mayOpen: (e, t) =>
            e
              ? E.isLink(e.mode)
                ? 32
                : E.isDir(e.mode) &&
                  ('r' !== E.flagsToPermissionString(t) || 512 & t)
                ? 31
                : E.nodePermissions(e, E.flagsToPermissionString(t))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd: function () {
            for (
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : E.MAX_OPEN_FDS,
                r = e;
              r <= t;
              r++
            )
              if (!E.streams[r]) return r;
            throw new E.ErrnoError(33);
          },
          getStream: (e) => E.streams[e],
          createStream: (e, t, r) => {
            E.FSStream ||
              ((E.FSStream = function () {
                this.shared = {};
              }),
              (E.FSStream.prototype = {}),
              Object.defineProperties(E.FSStream.prototype, {
                object: {
                  get: function () {
                    return this.node;
                  },
                  set: function (e) {
                    this.node = e;
                  },
                },
                isRead: {
                  get: function () {
                    return 1 != (2097155 & this.flags);
                  },
                },
                isWrite: {
                  get: function () {
                    return !!(2097155 & this.flags);
                  },
                },
                isAppend: {
                  get: function () {
                    return 1024 & this.flags;
                  },
                },
                flags: {
                  get: function () {
                    return this.shared.flags;
                  },
                  set: function (e) {
                    this.shared.flags = e;
                  },
                },
                position: {
                  get: function () {
                    return this.shared.position;
                  },
                  set: function (e) {
                    this.shared.position = e;
                  },
                },
              })),
              (e = Object.assign(new E.FSStream(), e));
            t = E.nextfd(t, r);
            return (e.fd = t), (E.streams[t] = e);
          },
          closeStream: (e) => {
            E.streams[e] = null;
          },
          chrdev_stream_ops: {
            open: (e) => {
              var t = E.getDevice(e.node.rdev);
              (e.stream_ops = t.stream_ops),
                e.stream_ops.open && e.stream_ops.open(e);
            },
            llseek: () => {
              throw new E.ErrnoError(70);
            },
          },
          major: (e) => e >> 8,
          minor: (e) => 255 & e,
          makedev: (e, t) => (e << 8) | t,
          registerDevice: (e, t) => {
            E.devices[e] = { stream_ops: t };
          },
          getDevice: (e) => E.devices[e],
          getMounts: (e) => {
            for (var t = [], r = [e]; r.length; ) {
              var i = r.pop();
              t.push(i), r.push.apply(r, i.mounts);
            }
            return t;
          },
          syncfs: (t, r) => {
            'function' == typeof t && ((r = t), (t = !1)),
              E.syncFSRequests++,
              1 < E.syncFSRequests &&
                o(
                  'warning: ' +
                    E.syncFSRequests +
                    ' FS.syncfs operations in flight at once, probably just doing extra work'
                );
            var i = E.getMounts(E.root.mount),
              s = 0;
            function n(e) {
              return E.syncFSRequests--, r(e);
            }
            function a(e) {
              if (e) return a.errored ? void 0 : ((a.errored = !0), n(e));
              ++s >= i.length && n(null);
            }
            i.forEach((e) => {
              if (!e.type.syncfs) return a(null);
              e.type.syncfs(e, t, a);
            });
          },
          mount: (e, t, r) => {
            var i,
              s = '/' === r,
              n = !r;
            if (s && E.root) throw new E.ErrnoError(10);
            if (!s && !n) {
              n = E.lookupPath(r, { follow_mount: !1 });
              if (((r = n.path), (i = n.node), E.isMountpoint(i)))
                throw new E.ErrnoError(10);
              if (!E.isDir(i.mode)) throw new E.ErrnoError(54);
            }
            (n = { type: e, opts: t, mountpoint: r, mounts: [] }),
              (t = e.mount(n));
            return (
              ((t.mount = n).root = t),
              s
                ? (E.root = t)
                : i && ((i.mounted = n), i.mount) && i.mount.mounts.push(n),
              t
            );
          },
          unmount: (e) => {
            e = E.lookupPath(e, { follow_mount: !1 });
            if (!E.isMountpoint(e.node)) throw new E.ErrnoError(28);
            var e = e.node,
              t = e.mounted,
              i = E.getMounts(t),
              t =
                (Object.keys(E.nameTable).forEach((e) => {
                  for (var t = E.nameTable[e]; t; ) {
                    var r = t.name_next;
                    i.includes(t.mount) && E.destroyNode(t), (t = r);
                  }
                }),
                (e.mounted = null),
                e.mount.mounts.indexOf(t));
            e.mount.mounts.splice(t, 1);
          },
          lookup: (e, t) => e.node_ops.lookup(e, t),
          mknod: (e, t, r) => {
            var i = E.lookupPath(e, { parent: !0 }).node,
              e = v.basename(e);
            if (!e || '.' === e || '..' === e) throw new E.ErrnoError(28);
            var s = E.mayCreate(i, e);
            if (s) throw new E.ErrnoError(s);
            if (i.node_ops.mknod) return i.node_ops.mknod(i, e, t, r);
            throw new E.ErrnoError(63);
          },
          create: (e, t) =>
            E.mknod(e, (t = ((t = void 0 !== t ? t : 438) & 4095) | 32768), 0),
          mkdir: (e, t) =>
            E.mknod(e, (t = ((t = void 0 !== t ? t : 511) & 1023) | 16384), 0),
          mkdirTree: (e, t) => {
            for (var r = e.split('/'), i = '', s = 0; s < r.length; ++s)
              if (r[s]) {
                i += '/' + r[s];
                try {
                  E.mkdir(i, t);
                } catch (e) {
                  if (20 != e.errno) throw e;
                }
              }
          },
          mkdev: (e, t, r) => (
            void 0 === r && ((r = t), (t = 438)), E.mknod(e, (t |= 8192), r)
          ),
          symlink: (e, t) => {
            if (!w.resolve(e)) throw new E.ErrnoError(44);
            var r = E.lookupPath(t, { parent: !0 }).node;
            if (!r) throw new E.ErrnoError(44);
            var t = v.basename(t),
              i = E.mayCreate(r, t);
            if (i) throw new E.ErrnoError(i);
            if (r.node_ops.symlink) return r.node_ops.symlink(r, t, e);
            throw new E.ErrnoError(63);
          },
          rename: (e, t) => {
            var r = v.dirname(e),
              i = v.dirname(t),
              s = v.basename(e),
              n = v.basename(t),
              a = E.lookupPath(e, { parent: !0 }).node,
              o = E.lookupPath(t, { parent: !0 }).node;
            if (!a || !o) throw new E.ErrnoError(44);
            if (a.mount !== o.mount) throw new E.ErrnoError(75);
            var l,
              d = E.lookupNode(a, s);
            if ('.' !== w.relative(e, i).charAt(0)) throw new E.ErrnoError(28);
            if ('.' !== w.relative(t, r).charAt(0)) throw new E.ErrnoError(55);
            try {
              l = E.lookupNode(o, n);
            } catch (e) {}
            if (d !== l) {
              (i = E.isDir(d.mode)), (t = E.mayDelete(a, s, i));
              if (t) throw new E.ErrnoError(t);
              if ((t = l ? E.mayDelete(o, n, i) : E.mayCreate(o, n)))
                throw new E.ErrnoError(t);
              if (!a.node_ops.rename) throw new E.ErrnoError(63);
              if (E.isMountpoint(d) || (l && E.isMountpoint(l)))
                throw new E.ErrnoError(10);
              if (o !== a && (t = E.nodePermissions(a, 'w')))
                throw new E.ErrnoError(t);
              E.hashRemoveNode(d);
              try {
                a.node_ops.rename(d, o, n);
              } catch (e) {
                throw e;
              } finally {
                E.hashAddNode(d);
              }
            }
          },
          rmdir: (e) => {
            var t = E.lookupPath(e, { parent: !0 }).node,
              e = v.basename(e),
              r = E.lookupNode(t, e),
              i = E.mayDelete(t, e, !0);
            if (i) throw new E.ErrnoError(i);
            if (!t.node_ops.rmdir) throw new E.ErrnoError(63);
            if (E.isMountpoint(r)) throw new E.ErrnoError(10);
            t.node_ops.rmdir(t, e), E.destroyNode(r);
          },
          readdir: (e) => {
            e = E.lookupPath(e, { follow: !0 }).node;
            if (e.node_ops.readdir) return e.node_ops.readdir(e);
            throw new E.ErrnoError(54);
          },
          unlink: (e) => {
            var t = E.lookupPath(e, { parent: !0 }).node;
            if (!t) throw new E.ErrnoError(44);
            var e = v.basename(e),
              r = E.lookupNode(t, e),
              i = E.mayDelete(t, e, !1);
            if (i) throw new E.ErrnoError(i);
            if (!t.node_ops.unlink) throw new E.ErrnoError(63);
            if (E.isMountpoint(r)) throw new E.ErrnoError(10);
            t.node_ops.unlink(t, e), E.destroyNode(r);
          },
          readlink: (e) => {
            e = E.lookupPath(e).node;
            if (!e) throw new E.ErrnoError(44);
            if (e.node_ops.readlink)
              return w.resolve(E.getPath(e.parent), e.node_ops.readlink(e));
            throw new E.ErrnoError(28);
          },
          stat: (e, t) => {
            e = E.lookupPath(e, { follow: !t }).node;
            if (!e) throw new E.ErrnoError(44);
            if (e.node_ops.getattr) return e.node_ops.getattr(e);
            throw new E.ErrnoError(63);
          },
          lstat: (e) => E.stat(e, !0),
          chmod: (e, t, r) => {
            r = 'string' == typeof e ? E.lookupPath(e, { follow: !r }).node : e;
            if (!r.node_ops.setattr) throw new E.ErrnoError(63);
            r.node_ops.setattr(r, {
              mode: (4095 & t) | (-4096 & r.mode),
              timestamp: Date.now(),
            });
          },
          lchmod: (e, t) => {
            E.chmod(e, t, !0);
          },
          fchmod: (e, t) => {
            e = E.getStream(e);
            if (!e) throw new E.ErrnoError(8);
            E.chmod(e.node, t);
          },
          chown: (e, t, r, i) => {
            i = 'string' == typeof e ? E.lookupPath(e, { follow: !i }).node : e;
            if (!i.node_ops.setattr) throw new E.ErrnoError(63);
            i.node_ops.setattr(i, { timestamp: Date.now() });
          },
          lchown: (e, t, r) => {
            E.chown(e, t, r, !0);
          },
          fchown: (e, t, r) => {
            e = E.getStream(e);
            if (!e) throw new E.ErrnoError(8);
            E.chown(e.node, t, r);
          },
          truncate: (e, t) => {
            if (t < 0) throw new E.ErrnoError(28);
            e = 'string' == typeof e ? E.lookupPath(e, { follow: !0 }).node : e;
            if (!e.node_ops.setattr) throw new E.ErrnoError(63);
            if (E.isDir(e.mode)) throw new E.ErrnoError(31);
            if (!E.isFile(e.mode)) throw new E.ErrnoError(28);
            var r = E.nodePermissions(e, 'w');
            if (r) throw new E.ErrnoError(r);
            e.node_ops.setattr(e, { size: t, timestamp: Date.now() });
          },
          ftruncate: (e, t) => {
            e = E.getStream(e);
            if (!e) throw new E.ErrnoError(8);
            if (!(2097155 & e.flags)) throw new E.ErrnoError(28);
            E.truncate(e.node, t);
          },
          utime: (e, t, r) => {
            e = E.lookupPath(e, { follow: !0 }).node;
            e.node_ops.setattr(e, { timestamp: Math.max(t, r) });
          },
          open: (e, t, r) => {
            if ('' === e) throw new E.ErrnoError(44);
            var i;
            if (
              ((r = void 0 === r ? 438 : r),
              (r =
                64 & (t = 'string' == typeof t ? E.modeStringToFlags(t) : t)
                  ? (4095 & r) | 32768
                  : 0),
              'object' == typeof e)
            )
              i = e;
            else {
              e = v.normalize(e);
              try {
                i = E.lookupPath(e, { follow: !(131072 & t) }).node;
              } catch (e) {}
            }
            var s = !1;
            if (64 & t)
              if (i) {
                if (128 & t) throw new E.ErrnoError(20);
              } else (i = E.mknod(e, r, 0)), (s = !0);
            if (!i) throw new E.ErrnoError(44);
            if (
              (E.isChrdev(i.mode) && (t &= -513), 65536 & t && !E.isDir(i.mode))
            )
              throw new E.ErrnoError(54);
            if (!s) {
              r = E.mayOpen(i, t);
              if (r) throw new E.ErrnoError(r);
            }
            512 & t && !s && E.truncate(i, 0), (t &= -131713);
            r = E.createStream({
              node: i,
              path: E.getPath(i),
              flags: t,
              seekable: !0,
              position: 0,
              stream_ops: i.stream_ops,
              ungotten: [],
              error: !1,
            });
            return (
              r.stream_ops.open && r.stream_ops.open(r),
              !_.logReadFiles ||
                1 & t ||
                (E.readFiles || (E.readFiles = {}), e in E.readFiles) ||
                (E.readFiles[e] = 1),
              r
            );
          },
          close: (e) => {
            if (E.isClosed(e)) throw new E.ErrnoError(8);
            e.getdents && (e.getdents = null);
            try {
              e.stream_ops.close && e.stream_ops.close(e);
            } catch (e) {
              throw e;
            } finally {
              E.closeStream(e.fd);
            }
            e.fd = null;
          },
          isClosed: (e) => null === e.fd,
          llseek: (e, t, r) => {
            if (E.isClosed(e)) throw new E.ErrnoError(8);
            if (!e.seekable || !e.stream_ops.llseek) throw new E.ErrnoError(70);
            if (0 != r && 1 != r && 2 != r) throw new E.ErrnoError(28);
            return (
              (e.position = e.stream_ops.llseek(e, t, r)),
              (e.ungotten = []),
              e.position
            );
          },
          read: (e, t, r, i, s) => {
            if (i < 0 || s < 0) throw new E.ErrnoError(28);
            if (E.isClosed(e)) throw new E.ErrnoError(8);
            if (1 == (2097155 & e.flags)) throw new E.ErrnoError(8);
            if (E.isDir(e.node.mode)) throw new E.ErrnoError(31);
            if (!e.stream_ops.read) throw new E.ErrnoError(28);
            var n = void 0 !== s;
            if (n) {
              if (!e.seekable) throw new E.ErrnoError(70);
            } else s = e.position;
            t = e.stream_ops.read(e, t, r, i, s);
            return n || (e.position += t), t;
          },
          write: (e, t, r, i, s, n) => {
            if (i < 0 || s < 0) throw new E.ErrnoError(28);
            if (E.isClosed(e)) throw new E.ErrnoError(8);
            if (!(2097155 & e.flags)) throw new E.ErrnoError(8);
            if (E.isDir(e.node.mode)) throw new E.ErrnoError(31);
            if (!e.stream_ops.write) throw new E.ErrnoError(28);
            e.seekable && 1024 & e.flags && E.llseek(e, 0, 2);
            var a = void 0 !== s;
            if (a) {
              if (!e.seekable) throw new E.ErrnoError(70);
            } else s = e.position;
            t = e.stream_ops.write(e, t, r, i, s, n);
            return a || (e.position += t), t;
          },
          allocate: (e, t, r) => {
            if (E.isClosed(e)) throw new E.ErrnoError(8);
            if (t < 0 || r <= 0) throw new E.ErrnoError(28);
            if (!(2097155 & e.flags)) throw new E.ErrnoError(8);
            if (!E.isFile(e.node.mode) && !E.isDir(e.node.mode))
              throw new E.ErrnoError(43);
            if (!e.stream_ops.allocate) throw new E.ErrnoError(138);
            e.stream_ops.allocate(e, t, r);
          },
          mmap: (e, t, r, i, s) => {
            if (2 & i && !(2 & s) && 2 != (2097155 & e.flags))
              throw new E.ErrnoError(2);
            if (1 == (2097155 & e.flags)) throw new E.ErrnoError(2);
            if (e.stream_ops.mmap) return e.stream_ops.mmap(e, t, r, i, s);
            throw new E.ErrnoError(43);
          },
          msync: (e, t, r, i, s) =>
            e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, i, s) : 0,
          munmap: (e) => 0,
          ioctl: (e, t, r) => {
            if (e.stream_ops.ioctl) return e.stream_ops.ioctl(e, t, r);
            throw new E.ErrnoError(59);
          },
          readFile: function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (
              ((t.flags = t.flags || 0),
              (t.encoding = t.encoding || 'binary'),
              'utf8' !== t.encoding && 'binary' !== t.encoding)
            )
              throw new Error('Invalid encoding type "' + t.encoding + '"');
            var r,
              i = E.open(e, t.flags),
              e = E.stat(e).size,
              s = new Uint8Array(e);
            return (
              E.read(i, s, 0, e, 0),
              'utf8' === t.encoding
                ? (r = a(s, 0))
                : 'binary' === t.encoding && (r = s),
              E.close(i),
              r
            );
          },
          writeFile: function (e, t) {
            var r =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              e = ((r.flags = r.flags || 577), E.open(e, r.flags, r.mode));
            if ('string' == typeof t) {
              var i = new Uint8Array(re(t) + 1),
                s = te(t, i, 0, i.length);
              E.write(e, i, 0, s, void 0, r.canOwn);
            } else {
              if (!ArrayBuffer.isView(t))
                throw new Error('Unsupported data type');
              E.write(e, t, 0, t.byteLength, void 0, r.canOwn);
            }
            E.close(e);
          },
          cwd: () => E.currentPath,
          chdir: (e) => {
            e = E.lookupPath(e, { follow: !0 });
            if (null === e.node) throw new E.ErrnoError(44);
            if (!E.isDir(e.node.mode)) throw new E.ErrnoError(54);
            var t = E.nodePermissions(e.node, 'x');
            if (t) throw new E.ErrnoError(t);
            E.currentPath = e.path;
          },
          createDefaultDirectories: () => {
            E.mkdir('/tmp'), E.mkdir('/home'), E.mkdir('/home/web_user');
          },
          createDefaultDevices: () => {
            E.mkdir('/dev'),
              E.registerDevice(E.makedev(1, 3), {
                read: () => 0,
                write: (e, t, r, i, s) => i,
              }),
              E.mkdev('/dev/null', E.makedev(1, 3)),
              s.register(E.makedev(5, 0), s.default_tty_ops),
              s.register(E.makedev(6, 0), s.default_tty1_ops),
              E.mkdev('/dev/tty', E.makedev(5, 0)),
              E.mkdev('/dev/tty1', E.makedev(6, 0));
            var e = (function () {
              var e;
              if (
                'object' == typeof crypto &&
                'function' == typeof crypto.getRandomValues
              )
                return (
                  (e = new Uint8Array(1)),
                  () => (crypto.getRandomValues(e), e[0])
                );
              if ($)
                try {
                  var t = kt.default;
                  return () => t.randomBytes(1)[0];
                } catch (e) {}
              return () => c('randomDevice');
            })();
            E.createDevice('/dev', 'random', e),
              E.createDevice('/dev', 'urandom', e),
              E.mkdir('/dev/shm'),
              E.mkdir('/dev/shm/tmp');
          },
          createSpecialDirectories: () => {
            E.mkdir('/proc');
            var t = E.mkdir('/proc/self');
            E.mkdir('/proc/self/fd'),
              E.mount(
                {
                  mount: () => {
                    var e = E.createNode(t, 'fd', 16895, 73);
                    return (
                      (e.node_ops = {
                        lookup: (e, t) => {
                          var r = E.getStream(+t);
                          if (r)
                            return ((t = {
                              parent: null,
                              mount: { mountpoint: 'fake' },
                              node_ops: { readlink: () => r.path },
                            }).parent = t);
                          throw new E.ErrnoError(8);
                        },
                      }),
                      e
                    );
                  },
                },
                {},
                '/proc/self/fd'
              );
          },
          createStandardStreams: () => {
            _.stdin
              ? E.createDevice('/dev', 'stdin', _.stdin)
              : E.symlink('/dev/tty', '/dev/stdin'),
              _.stdout
                ? E.createDevice('/dev', 'stdout', null, _.stdout)
                : E.symlink('/dev/tty', '/dev/stdout'),
              _.stderr
                ? E.createDevice('/dev', 'stderr', null, _.stderr)
                : E.symlink('/dev/tty1', '/dev/stderr'),
              E.open('/dev/stdin', 0),
              E.open('/dev/stdout', 1),
              E.open('/dev/stderr', 1);
          },
          ensureErrnoError: () => {
            E.ErrnoError ||
              ((E.ErrnoError = function (e, t) {
                (this.node = t),
                  (this.setErrno = function (e) {
                    this.errno = e;
                  }),
                  this.setErrno(e),
                  (this.message = 'FS error');
              }),
              (E.ErrnoError.prototype = new Error()),
              (E.ErrnoError.prototype.constructor = E.ErrnoError),
              [44].forEach((e) => {
                (E.genericErrors[e] = new E.ErrnoError(e)),
                  (E.genericErrors[e].stack = '<generic error, no stack>');
              }));
          },
          staticInit: () => {
            E.ensureErrnoError(),
              (E.nameTable = new Array(4096)),
              E.mount(S, {}, '/'),
              E.createDefaultDirectories(),
              E.createDefaultDevices(),
              E.createSpecialDirectories(),
              (E.filesystems = { MEMFS: S });
          },
          init: (e, t, r) => {
            (E.init.initialized = !0),
              E.ensureErrnoError(),
              (_.stdin = e || _.stdin),
              (_.stdout = t || _.stdout),
              (_.stderr = r || _.stderr),
              E.createStandardStreams();
          },
          quit: () => {
            E.init.initialized = !1;
            for (var e = 0; e < E.streams.length; e++) {
              var t = E.streams[e];
              t && E.close(t);
            }
          },
          getMode: (e, t) => {
            var r = 0;
            return e && (r |= 365), t && (r |= 146), r;
          },
          findObject: (e, t) => {
            e = E.analyzePath(e, t);
            return e.exists ? e.object : null;
          },
          analyzePath: (e, t) => {
            try {
              e = (i = E.lookupPath(e, { follow: !t })).path;
            } catch (e) {}
            var r = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            };
            try {
              var i = E.lookupPath(e, { parent: !0 });
              (r.parentExists = !0),
                (r.parentPath = i.path),
                (r.parentObject = i.node),
                (r.name = v.basename(e)),
                (i = E.lookupPath(e, { follow: !t })),
                (r.exists = !0),
                (r.path = i.path),
                (r.object = i.node),
                (r.name = i.node.name),
                (r.isRoot = '/' === i.path);
            } catch (e) {
              r.error = e.errno;
            }
            return r;
          },
          createPath: (e, t, r, i) => {
            e = 'string' == typeof e ? e : E.getPath(e);
            for (var s = t.split('/').reverse(); s.length; ) {
              var n = s.pop();
              if (n) {
                var a = v.join2(e, n);
                try {
                  E.mkdir(a);
                } catch (e) {}
                e = a;
              }
            }
            return a;
          },
          createFile: (e, t, r, i, s) => {
            (e = v.join2('string' == typeof e ? e : E.getPath(e), t)),
              (t = E.getMode(i, s));
            return E.create(e, t);
          },
          createDataFile: (e, t, r, i, s, n) => {
            var a = t,
              t =
                (e &&
                  ((e = 'string' == typeof e ? e : E.getPath(e)),
                  (a = t ? v.join2(e, t) : e)),
                E.getMode(i, s)),
              e = E.create(a, t);
            if (r) {
              if ('string' == typeof r) {
                for (
                  var o = new Array(r.length), l = 0, d = r.length;
                  l < d;
                  ++l
                )
                  o[l] = r.charCodeAt(l);
                r = o;
              }
              E.chmod(e, 146 | t);
              i = E.open(e, 577);
              E.write(i, r, 0, r.length, 0, n), E.close(i), E.chmod(e, t);
            }
            return e;
          },
          createDevice: (e, t, l, a) => {
            var e = v.join2('string' == typeof e ? e : E.getPath(e), t),
              t = E.getMode(!!l, !!a),
              r =
                (E.createDevice.major || (E.createDevice.major = 64),
                E.makedev(E.createDevice.major++, 0));
            return (
              E.registerDevice(r, {
                open: (e) => {
                  e.seekable = !1;
                },
                close: (e) => {
                  a && a.buffer && a.buffer.length && a(10);
                },
                read: (e, t, r, i, s) => {
                  for (var n, a = 0, o = 0; o < i; o++) {
                    try {
                      n = l();
                    } catch (e) {
                      throw new E.ErrnoError(29);
                    }
                    if (void 0 === n && 0 === a) throw new E.ErrnoError(6);
                    if (null == n) break;
                    a++, (t[r + o] = n);
                  }
                  return a && (e.node.timestamp = Date.now()), a;
                },
                write: (e, t, r, i, s) => {
                  for (var n = 0; n < i; n++)
                    try {
                      a(t[r + n]);
                    } catch (e) {
                      throw new E.ErrnoError(29);
                    }
                  return i && (e.node.timestamp = Date.now()), n;
                },
              }),
              E.mkdev(e, t, r)
            );
          },
          forceLoadFile: (e) => {
            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
            if ('undefined' != typeof XMLHttpRequest)
              throw new Error(
                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
              );
            if (!t)
              throw new Error('Cannot load without read() or XMLHttpRequest.');
            try {
              (e.contents = pe(t(e.url), !0)),
                (e.usedBytes = e.contents.length);
            } catch (e) {
              throw new E.ErrnoError(29);
            }
          },
          createLazyFile: (e, t, a, r, i) => {
            function s() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            if (
              ((s.prototype.get = function (e) {
                var t;
                if (!(e > this.length - 1 || e < 0))
                  return (
                    (t = e % this.chunkSize),
                    (e = (e / this.chunkSize) | 0),
                    this.getter(e)[t]
                  );
              }),
              (s.prototype.setDataGetter = function (e) {
                this.getter = e;
              }),
              (s.prototype.cacheLength = function () {
                var e = new XMLHttpRequest();
                if (
                  (e.open('HEAD', a, !1),
                  e.send(null),
                  !((200 <= e.status && e.status < 300) || 304 === e.status))
                )
                  throw new Error(
                    "Couldn't load " + a + '. Status: ' + e.status
                  );
                var t,
                  i = Number(e.getResponseHeader('Content-length')),
                  r =
                    (t = e.getResponseHeader('Accept-Ranges')) && 'bytes' === t,
                  e =
                    (t = e.getResponseHeader('Content-Encoding')) &&
                    'gzip' === t,
                  s = 1048576,
                  n = (r || (s = i), this);
                n.setDataGetter((e) => {
                  var t = e * s,
                    r = (e + 1) * s - 1,
                    r = Math.min(r, i - 1);
                  if (
                    (void 0 === n.chunks[e] &&
                      (n.chunks[e] = ((e, t) => {
                        if (t < e)
                          throw new Error(
                            'invalid range (' +
                              e +
                              ', ' +
                              t +
                              ') or no bytes requested!'
                          );
                        if (i - 1 < t)
                          throw new Error(
                            'only ' + i + ' bytes available! programmer error!'
                          );
                        var r = new XMLHttpRequest();
                        if (
                          (r.open('GET', a, !1),
                          i !== s &&
                            r.setRequestHeader('Range', 'bytes=' + e + '-' + t),
                          (r.responseType = 'arraybuffer'),
                          r.overrideMimeType &&
                            r.overrideMimeType(
                              'text/plain; charset=x-user-defined'
                            ),
                          r.send(null),
                          (200 <= r.status && r.status < 300) ||
                            304 === r.status)
                        )
                          return void 0 !== r.response
                            ? new Uint8Array(r.response || [])
                            : pe(r.responseText || '', !0);
                        throw new Error(
                          "Couldn't load " + a + '. Status: ' + r.status
                        );
                      })(t, r)),
                    void 0 === n.chunks[e])
                  )
                    throw new Error('doXHR failed!');
                  return n.chunks[e];
                }),
                  (!e && i) ||
                    ((s = i = 1),
                    (i = this.getter(0).length),
                    (s = i),
                    j(
                      'LazyFiles on gzip forces download of the whole file when length is accessed'
                    )),
                  (this._length = i),
                  (this._chunkSize = s),
                  (this.lengthKnown = !0);
              }),
              'undefined' != typeof XMLHttpRequest)
            ) {
              if (!h)
                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
              var n = new s(),
                n =
                  (Object.defineProperties(n, {
                    length: {
                      get: function () {
                        return (
                          this.lengthKnown || this.cacheLength(), this._length
                        );
                      },
                    },
                    chunkSize: {
                      get: function () {
                        return (
                          this.lengthKnown || this.cacheLength(),
                          this._chunkSize
                        );
                      },
                    },
                  }),
                  { isDevice: !1, contents: n });
            } else n = { isDevice: !1, url: a };
            var o = E.createFile(e, t, n, r, i),
              l =
                (n.contents
                  ? (o.contents = n.contents)
                  : n.url && ((o.contents = null), (o.url = n.url)),
                Object.defineProperties(o, {
                  usedBytes: {
                    get: function () {
                      return this.contents.length;
                    },
                  },
                }),
                {});
            function d(e, t, r, i, s) {
              var n = e.node.contents;
              if (s >= n.length) return 0;
              var a = Math.min(n.length - s, i);
              if (n.slice) for (var o = 0; o < a; o++) t[r + o] = n[s + o];
              else for (o = 0; o < a; o++) t[r + o] = n.get(s + o);
              return a;
            }
            return (
              Object.keys(o.stream_ops).forEach((e) => {
                var t = o.stream_ops[e];
                l[e] = function () {
                  return E.forceLoadFile(o), t.apply(null, arguments);
                };
              }),
              (l.read = (e, t, r, i, s) => (
                E.forceLoadFile(o), d(e, t, r, i, s)
              )),
              (l.mmap = (e, t, r, i, s) => {
                E.forceLoadFile(o);
                var n = ce(t);
                if (n) return d(e, u, n, t, r), { ptr: n, allocated: !0 };
                throw new E.ErrnoError(48);
              }),
              (o.stream_ops = l),
              o
            );
          },
          createPreloadedFile: (r, i, e, s, n, a, o, l, d, h) => {
            var t,
              u,
              f,
              p = i ? w.resolve(v.join2(r, i)) : r;
            function c(e) {
              function t(e) {
                h && h(),
                  l || E.createDataFile(r, i, e, s, n, d),
                  a && a(),
                  oe();
              }
              Browser.handledByPreloadPlugin(e, p, t, () => {
                o && o(), oe();
              }) || t(e);
            }
            ae(),
              'string' == typeof e
                ? ((u = o),
                  (f = 'al ' + (t = e)),
                  m(
                    t,
                    (e) => {
                      Y(
                        e,
                        'Loading data file "' + t + '" failed (no arrayBuffer).'
                      ),
                        c(new Uint8Array(e)),
                        f && oe();
                    },
                    (e) => {
                      if (!u) throw 'Loading data file "' + t + '" failed.';
                      u();
                    }
                  ),
                  f && ae())
                : c(e);
          },
          indexedDB: () =>
            global.indexedDB ||
            global.mozIndexedDB ||
            global.webkitIndexedDB ||
            global.msIndexedDB,
          DB_NAME: () => 'EM_FS_' + global.location.pathname,
          DB_VERSION: 20,
          DB_STORE_NAME: 'FILE_DATA',
          saveFilesToDB: (a, o, l) => {
            (o = o || (() => {})), (l = l || (() => {}));
            var e = E.indexedDB();
            try {
              var d = e.open(E.DB_NAME(), E.DB_VERSION);
            } catch (a) {
              return l(a);
            }
            (d.onupgradeneeded = () => {
              j('creating db'), d.result.createObjectStore(E.DB_STORE_NAME);
            }),
              (d.onsuccess = () => {
                var e = d.result.transaction([E.DB_STORE_NAME], 'readwrite'),
                  t = e.objectStore(E.DB_STORE_NAME),
                  r = 0,
                  i = 0,
                  s = a.length;
                function n() {
                  (0 == i ? o : l)();
                }
                a.forEach((e) => {
                  e = t.put(E.analyzePath(e).object.contents, e);
                  (e.onsuccess = () => {
                    ++r + i == s && n();
                  }),
                    (e.onerror = () => {
                      r + ++i == s && n();
                    });
                }),
                  (e.onerror = l);
              }),
              (d.onerror = l);
          },
          loadFilesFromDB: (o, l, d) => {
            (l = l || (() => {})), (d = d || (() => {}));
            var e = E.indexedDB();
            try {
              var h = e.open(E.DB_NAME(), E.DB_VERSION);
            } catch (o) {
              return d(o);
            }
            (h.onupgradeneeded = d),
              (h.onsuccess = () => {
                var e = h.result;
                try {
                  var t = e.transaction([E.DB_STORE_NAME], 'readonly');
                } catch (e) {
                  return void d(e);
                }
                var r = t.objectStore(E.DB_STORE_NAME),
                  i = 0,
                  s = 0,
                  n = o.length;
                function a() {
                  (0 == s ? l : d)();
                }
                o.forEach((e) => {
                  var t = r.get(e);
                  (t.onsuccess = () => {
                    E.analyzePath(e).exists && E.unlink(e),
                      E.createDataFile(
                        v.dirname(e),
                        v.basename(e),
                        t.result,
                        !0,
                        !0,
                        !0
                      ),
                      ++i + s == n && a();
                  }),
                    (t.onerror = () => {
                      i + ++s == n && a();
                    });
                }),
                  (t.onerror = d);
              }),
              (h.onerror = d);
          },
        },
        U = {
          DEFAULT_POLLMASK: 5,
          calculateAt: function (e, t, r) {
            if (v.isAbs(t)) return t;
            var i;
            if (-100 === e) i = E.cwd();
            else {
              e = E.getStream(e);
              if (!e) throw new E.ErrnoError(8);
              i = e.path;
            }
            if (0 != t.length) return v.join2(i, t);
            if (r) return i;
            throw new E.ErrnoError(44);
          },
          doStat: function (e, t, r) {
            try {
              var i = e(t);
            } catch (e) {
              if (
                e &&
                e.node &&
                v.normalize(t) !== v.normalize(E.getPath(e.node))
              )
                return -54;
              throw e;
            }
            return (
              (d[r >> 2] = i.dev),
              (d[(r + 4) >> 2] = 0),
              (d[(r + 8) >> 2] = i.ino),
              (d[(r + 12) >> 2] = i.mode),
              (d[(r + 16) >> 2] = i.nlink),
              (d[(r + 20) >> 2] = i.uid),
              (d[(r + 24) >> 2] = i.gid),
              (d[(r + 28) >> 2] = i.rdev),
              (d[(r + 32) >> 2] = 0),
              (b = [
                i.size >>> 0,
                ((y = i.size),
                1 <= +Math.abs(y)
                  ? 0 < y
                    ? (0 |
                        Math.min(+Math.floor(y / 4294967296), 4294967295)) >>>
                      0
                    : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (d[(r + 40) >> 2] = b[0]),
              (d[(r + 44) >> 2] = b[1]),
              (d[(r + 48) >> 2] = 4096),
              (d[(r + 52) >> 2] = i.blocks),
              (b = [
                Math.floor(i.atime.getTime() / 1e3) >>> 0,
                ((y = Math.floor(i.atime.getTime() / 1e3)),
                1 <= +Math.abs(y)
                  ? 0 < y
                    ? (0 |
                        Math.min(+Math.floor(y / 4294967296), 4294967295)) >>>
                      0
                    : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (d[(r + 56) >> 2] = b[0]),
              (d[(r + 60) >> 2] = b[1]),
              (d[(r + 64) >> 2] = 0),
              (b = [
                Math.floor(i.mtime.getTime() / 1e3) >>> 0,
                ((y = Math.floor(i.mtime.getTime() / 1e3)),
                1 <= +Math.abs(y)
                  ? 0 < y
                    ? (0 |
                        Math.min(+Math.floor(y / 4294967296), 4294967295)) >>>
                      0
                    : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (d[(r + 72) >> 2] = b[0]),
              (d[(r + 76) >> 2] = b[1]),
              (d[(r + 80) >> 2] = 0),
              (b = [
                Math.floor(i.ctime.getTime() / 1e3) >>> 0,
                ((y = Math.floor(i.ctime.getTime() / 1e3)),
                1 <= +Math.abs(y)
                  ? 0 < y
                    ? (0 |
                        Math.min(+Math.floor(y / 4294967296), 4294967295)) >>>
                      0
                    : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (d[(r + 88) >> 2] = b[0]),
              (d[(r + 92) >> 2] = b[1]),
              (d[(r + 96) >> 2] = 0),
              (b = [
                i.ino >>> 0,
                ((y = i.ino),
                1 <= +Math.abs(y)
                  ? 0 < y
                    ? (0 |
                        Math.min(+Math.floor(y / 4294967296), 4294967295)) >>>
                      0
                    : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (d[(r + 104) >> 2] = b[0]),
              (d[(r + 108) >> 2] = b[1]),
              0
            );
          },
          doMsync: function (e, t, r, i, s) {
            e = f.slice(e, e + r);
            E.msync(t, e, s, r, i);
          },
          varargs: void 0,
          get: function () {
            return (U.varargs += 4), d[(U.varargs - 4) >> 2];
          },
          getStr: function (e) {
            return ee(e);
          },
          getStreamFromFD: function (e) {
            e = E.getStream(e);
            if (e) return e;
            throw new E.ErrnoError(8);
          },
        };
      function me(e) {
        switch (e) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError('Unknown type size: ' + e);
        }
      }
      var _e = void 0;
      function x(e) {
        for (var t = '', r = e; f[r]; ) t += _e[f[r++]];
        return t;
      }
      var B = {},
        A = {},
        ge = {},
        ye = 48,
        be = 57;
      function ve(e) {
        var t;
        return void 0 === e
          ? '_unknown'
          : ((t = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0)),
            ye <= t && t <= be ? '_' + e : e);
      }
      function we(e, t) {
        return (
          (e = ve(e)),
          new Function(
            'body',
            'return function ' +
              e +
              '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
          )(t)
        );
      }
      function Se(e, t) {
        var r = we(t, function (e) {
          (this.name = t), (this.message = e);
          e = new Error(e).stack;
          void 0 !== e &&
            (this.stack =
              this.toString() + '\n' + e.replace(/^Error(:[^\n]*)?\n/, ''));
        });
        return (
          (r.prototype = Object.create(e.prototype)),
          ((r.prototype.constructor = r).prototype.toString = function () {
            return void 0 === this.message
              ? this.name
              : this.name + ': ' + this.message;
          }),
          r
        );
      }
      var k = void 0;
      function T(e) {
        throw new k(e);
      }
      var Ee = void 0;
      function Ue(e) {
        throw new Ee(e);
      }
      function xe(i, t, s) {
        function r(e) {
          var t = s(e);
          t.length !== i.length && Ue('Mismatched type converter count');
          for (var r = 0; r < i.length; ++r) C(i[r], t[r]);
        }
        i.forEach(function (e) {
          ge[e] = t;
        });
        var n = new Array(t.length),
          a = [],
          o = 0;
        t.forEach((e, t) => {
          A.hasOwnProperty(e)
            ? (n[t] = A[e])
            : (a.push(e),
              B.hasOwnProperty(e) || (B[e] = []),
              B[e].push(() => {
                (n[t] = A[e]), ++o === a.length && r(n);
              }));
        }),
          0 === a.length && r(n);
      }
      function C(e, t, r) {
        r = 2 < arguments.length && void 0 !== r ? r : {};
        if (!('argPackAdvance' in t))
          throw new TypeError(
            'registerType registeredInstance requires argPackAdvance'
          );
        var i = t.name;
        if (
          (e ||
            T('type "' + i + '" must have a positive integer typeid pointer'),
          A.hasOwnProperty(e))
        ) {
          if (r.ignoreDuplicateRegistrations) return;
          T("Cannot register type '" + i + "' twice");
        }
        (A[e] = t),
          delete ge[e],
          B.hasOwnProperty(e) &&
            ((r = B[e]), delete B[e], r.forEach((e) => e()));
      }
      function Be(e) {
        T(e.$$.ptrType.registeredClass.name + ' instance already deleted');
      }
      var Ae = !1;
      function ke(e) {}
      function Te(e) {
        --e.count.value,
          0 === e.count.value &&
            ((e = e).smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr));
      }
      var Ce = {};
      var Fe = [];
      function De() {
        for (; Fe.length; ) {
          var e = Fe.pop();
          (e.$$.deleteScheduled = !1), e.delete();
        }
      }
      var Ie = void 0;
      var Pe = {};
      function Le(e, t) {
        return (
          (t.ptrType && t.ptr) ||
            Ue('makeClassHandle requires ptr and ptrType'),
          !!t.smartPtrType != !!t.smartPtr &&
            Ue('Both smartPtrType and smartPtr must be specified'),
          (t.count = { value: 1 }),
          ze(Object.create(e, { $$: { value: t } }))
        );
      }
      function ze(e) {
        return 'undefined' == typeof FinalizationRegistry
          ? ((ze = (e) => e), e)
          : ((Ae = new FinalizationRegistry((e) => {
              Te(e.$$);
            })),
            (ke = (e) => Ae.unregister(e)),
            (ze = (e) => {
              var t = e.$$;
              return t.smartPtr && Ae.register(e, { $$: t }, e), e;
            })(e));
      }
      function F() {}
      function Re(e, t, r) {
        var i;
        void 0 === e[t].overloadTable &&
          ((i = e[t]),
          (e[t] = function () {
            return (
              e[t].overloadTable.hasOwnProperty(arguments.length) ||
                T(
                  "Function '" +
                    r +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ') - expects one of (' +
                    e[t].overloadTable +
                    ')!'
                ),
              e[t].overloadTable[arguments.length].apply(this, arguments)
            );
          }),
          (e[t].overloadTable = []),
          (e[t].overloadTable[i.argCount] = i));
      }
      function Me(e, t, r, i, s, n, a, o) {
        (this.name = e),
          (this.constructor = t),
          (this.instancePrototype = r),
          (this.rawDestructor = i),
          (this.baseClass = s),
          (this.getActualType = n),
          (this.upcast = a),
          (this.downcast = o),
          (this.pureVirtualFunctions = []);
      }
      function Ne(e, t, r) {
        for (; t !== r; )
          t.upcast ||
            T(
              'Expected null or instance of ' +
                r.name +
                ', got an instance of ' +
                t.name
            ),
            (e = t.upcast(e)),
            (t = t.baseClass);
        return e;
      }
      function Oe(e, t) {
        if (null === t)
          return this.isReference && T('null is not a valid ' + this.name), 0;
        t.$$ || T('Cannot pass "' + rt(t) + '" as a ' + this.name),
          t.$$.ptr ||
            T('Cannot pass deleted object as a pointer of type ' + this.name);
        var r = t.$$.ptrType.registeredClass;
        return Ne(t.$$.ptr, r, this.registeredClass);
      }
      function Ge(e, t) {
        if (null === t)
          return (
            this.isReference && T('null is not a valid ' + this.name),
            this.isSmartPointer
              ? ((i = this.rawConstructor()),
                null !== e && e.push(this.rawDestructor, i),
                i)
              : 0
          );
        t.$$ || T('Cannot pass "' + rt(t) + '" as a ' + this.name),
          t.$$.ptr ||
            T('Cannot pass deleted object as a pointer of type ' + this.name),
          !this.isConst &&
            t.$$.ptrType.isConst &&
            T(
              'Cannot convert argument of type ' +
                (t.$$.smartPtrType || t.$$.ptrType).name +
                ' to parameter type ' +
                this.name
            );
        var r,
          i,
          s = t.$$.ptrType.registeredClass;
        if (((i = Ne(t.$$.ptr, s, this.registeredClass)), this.isSmartPointer))
          switch (
            (void 0 === t.$$.smartPtr &&
              T('Passing raw pointer to smart pointer is illegal'),
            this.sharingPolicy)
          ) {
            case 0:
              t.$$.smartPtrType === this
                ? (i = t.$$.smartPtr)
                : T(
                    'Cannot convert argument of type ' +
                      (t.$$.smartPtrType || t.$$.ptrType).name +
                      ' to parameter type ' +
                      this.name
                  );
              break;
            case 1:
              i = t.$$.smartPtr;
              break;
            case 2:
              t.$$.smartPtrType === this
                ? (i = t.$$.smartPtr)
                : ((r = t.clone()),
                  (i = this.rawShare(
                    i,
                    tt.toHandle(function () {
                      r.delete();
                    })
                  )),
                  null !== e && e.push(this.rawDestructor, i));
              break;
            default:
              T('Unsupporting sharing policy');
          }
        return i;
      }
      function He(e, t) {
        if (null === t)
          return this.isReference && T('null is not a valid ' + this.name), 0;
        t.$$ || T('Cannot pass "' + rt(t) + '" as a ' + this.name),
          t.$$.ptr ||
            T('Cannot pass deleted object as a pointer of type ' + this.name),
          t.$$.ptrType.isConst &&
            T(
              'Cannot convert argument of type ' +
                t.$$.ptrType.name +
                ' to parameter type ' +
                this.name
            );
        var r = t.$$.ptrType.registeredClass;
        return Ne(t.$$.ptr, r, this.registeredClass);
      }
      function Ve(e) {
        return this.fromWireType(d[e >> 2]);
      }
      function D(e, t, r, i, s, n, a, o, l, d, h) {
        (this.name = e),
          (this.registeredClass = t),
          (this.isReference = r),
          (this.isConst = i),
          (this.isSmartPointer = s),
          (this.pointeeType = n),
          (this.sharingPolicy = a),
          (this.rawGetPointee = o),
          (this.rawConstructor = l),
          (this.rawShare = d),
          (this.rawDestructor = h),
          s || void 0 !== t.baseClass
            ? (this.toWireType = Ge)
            : ((this.toWireType = i ? Oe : He),
              (this.destructorFunction = null));
      }
      var $e = [];
      function je(e) {
        var t = $e[e];
        return (
          t || (e >= $e.length && ($e.length = e + 1), ($e[e] = t = J.get(e))),
          t
        );
      }
      function I(e, t) {
        var s,
          n,
          a,
          r = (e = x(e)).includes('j')
            ? ((s = e),
              (n = t),
              (a = []),
              function () {
                return (
                  (a.length = 0),
                  Object.assign(a, arguments),
                  (t = n),
                  (r = a),
                  (e = s).includes('j')
                    ? ((i = t),
                      (e = _['dynCall_' + e]),
                      r && r.length
                        ? e.apply(null, [i].concat(r))
                        : e.call(null, i))
                    : je(t).apply(null, r)
                );
                var e, t, r, i;
              })
            : je(t);
        return (
          'function' != typeof r &&
            T('unknown function pointer with signature ' + e + ': ' + t),
          r
        );
      }
      var We = void 0;
      function Ye(e) {
        var e = vt(e),
          t = x(e);
        return L(e), t;
      }
      function qe(e, t) {
        var r = [],
          i = {};
        throw (
          (t.forEach(function e(t) {
            i[t] ||
              A[t] ||
              (ge[t] ? ge[t].forEach(e) : (r.push(t), (i[t] = !0)));
          }),
          new We(e + ': ' + r.map(Ye).join([', '])))
        );
      }
      function Ke(e, t) {
        for (var r = [], i = 0; i < e; i++) r.push(p[(t + 4 * i) >> 2]);
        return r;
      }
      function Xe(e) {
        for (; e.length; ) {
          var t = e.pop();
          e.pop()(t);
        }
      }
      function Ze(e, t) {
        var r;
        if (e instanceof Function)
          return (
            ((r = we(
              e.name || 'unknownFunctionName',
              function () {}
            )).prototype = e.prototype),
            (r = new r()),
            (t = e.apply(r, t)) instanceof Object ? t : r
          );
        throw new TypeError(
          'new_ called with constructor type ' +
            typeof e +
            ' which is not a function'
        );
      }
      function Je(e, t, r, i, s) {
        var n = t.length;
        n < 2 &&
          T(
            "argTypes array size mismatch! Must at least get return value and 'this' types!"
          );
        for (
          var r = null !== t[1] && null !== r, a = !1, o = 1;
          o < t.length;
          ++o
        )
          if (null !== t[o] && void 0 === t[o].destructorFunction) {
            a = !0;
            break;
          }
        for (
          var l = 'void' !== t[0].name, d = '', h = '', o = 0;
          o < n - 2;
          ++o
        )
          (d += (0 !== o ? ', ' : '') + 'arg' + o),
            (h += (0 !== o ? ', ' : '') + 'arg' + o + 'Wired');
        var u =
            'return function ' +
            ve(e) +
            '(' +
            d +
            ') {\nif (arguments.length !== ' +
            (n - 2) +
            ") {\nthrowBindingError('function " +
            e +
            " called with ' + arguments.length + ' arguments, expected " +
            (n - 2) +
            " args!');\n}\n",
          f =
            (a && (u += 'var destructors = [];\n'), a ? 'destructors' : 'null'),
          p = [
            'throwBindingError',
            'invoker',
            'fn',
            'runDestructors',
            'retType',
            'classParam',
          ],
          c = [T, i, s, Xe, t[0], t[1]];
        for (
          r &&
            (u += 'var thisWired = classParam.toWireType(' + f + ', this);\n'),
            o = 0;
          o < n - 2;
          ++o
        )
          (u +=
            'var arg' +
            o +
            'Wired = argType' +
            o +
            '.toWireType(' +
            f +
            ', arg' +
            o +
            '); // ' +
            t[o + 2].name +
            '\n'),
            p.push('argType' + o),
            c.push(t[o + 2]);
        if (
          ((u +=
            (l ? 'var rv = ' : '') +
            'invoker(fn' +
            (0 <
            (h = r ? 'thisWired' + (0 < h.length ? ', ' : '') + h : h).length
              ? ', '
              : '') +
            h +
            ');\n'),
          a)
        )
          u += 'runDestructors(destructors);\n';
        else
          for (o = r ? 1 : 2; o < t.length; ++o) {
            var m = 1 === o ? 'thisWired' : 'arg' + (o - 2) + 'Wired';
            null !== t[o].destructorFunction &&
              ((u += m + '_dtor(' + m + '); // ' + t[o].name + '\n'),
              p.push(m + '_dtor'),
              c.push(t[o].destructorFunction));
          }
        return (
          l && (u += 'var ret = retType.fromWireType(rv);\nreturn ret;\n'),
          p.push((u += '}\n')),
          Ze(Function, p).apply(null, c)
        );
      }
      var Qe = [],
        P = [
          {},
          { value: void 0 },
          { value: null },
          { value: !0 },
          { value: !1 },
        ];
      function et(e) {
        4 < e && 0 == --P[e].refcount && ((P[e] = void 0), Qe.push(e));
      }
      var tt = {
        toValue: (e) => (
          e || T('Cannot use deleted val. handle = ' + e), P[e].value
        ),
        toHandle: (e) => {
          switch (e) {
            case void 0:
              return 1;
            case null:
              return 2;
            case !0:
              return 3;
            case !1:
              return 4;
            default:
              var t = Qe.length ? Qe.pop() : P.length;
              return (P[t] = { refcount: 1, value: e }), t;
          }
        },
      };
      function rt(e) {
        var t;
        return null === e
          ? 'null'
          : 'object' == (t = typeof e) || 'array' == t || 'function' == t
          ? e.toString()
          : '' + e;
      }
      var it =
        'undefined' != typeof TextDecoder
          ? new TextDecoder('utf-16le')
          : void 0;
      function st(e, t) {
        for (var r, i = e >> 1, s = i + t / 2; !(s <= i) && K[i]; ) ++i;
        if (32 < (r = i << 1) - e && it) return it.decode(f.subarray(e, r));
        for (var n = '', a = 0; !(t / 2 <= a); ++a) {
          var o = l[(e + 2 * a) >> 1];
          if (0 == o) break;
          n += String.fromCharCode(o);
        }
        return n;
      }
      function nt(e, t, r) {
        if ((r = void 0 === r ? 2147483647 : r) < 2) return 0;
        for (
          var i = t, s = (r -= 2) < 2 * e.length ? r / 2 : e.length, n = 0;
          n < s;
          ++n
        ) {
          var a = e.charCodeAt(n);
          (l[t >> 1] = a), (t += 2);
        }
        return (l[t >> 1] = 0), t - i;
      }
      function at(e) {
        return 2 * e.length;
      }
      function ot(e, t) {
        for (var r = 0, i = ''; !(t / 4 <= r); ) {
          var s,
            n = d[(e + 4 * r) >> 2];
          if (0 == n) break;
          ++r,
            65536 <= n
              ? ((s = n - 65536),
                (i += String.fromCharCode(
                  55296 | (s >> 10),
                  56320 | (1023 & s)
                )))
              : (i += String.fromCharCode(n));
        }
        return i;
      }
      function lt(e, t, r) {
        if ((r = void 0 === r ? 2147483647 : r) < 4) return 0;
        for (var i = t, s = i + r - 4, n = 0; n < e.length; ++n) {
          var a = e.charCodeAt(n);
          if (
            (55296 <= a &&
              a <= 57343 &&
              (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++n))),
            (d[t >> 2] = a),
            (t += 4) + 4 > s)
          )
            break;
        }
        return (d[t >> 2] = 0), t - i;
      }
      function dt(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var i = e.charCodeAt(r);
          55296 <= i && i <= 57343 && ++r, (t += 4);
        }
        return t;
      }
      var ht = {},
        ut = [],
        ft = [],
        pt = {};
      function ct() {
        if (!ct.strings) {
          var e = {
            USER: 'web_user',
            LOGNAME: 'web_user',
            PATH: '/',
            PWD: '/',
            HOME: '/home/web_user',
            LANG:
              (
                ('object' == typeof navigator &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                'C'
              ).replace('-', '_') + '.UTF-8',
            _: H || './this.program',
          };
          for (t in pt) void 0 === pt[t] ? delete e[t] : (e[t] = pt[t]);
          var t,
            r = [];
          for (t in e) r.push(t + '=' + e[t]);
          ct.strings = r;
        }
        return ct.strings;
      }
      function mt(e, t, r, i) {
        (this.parent = e = e || this),
          (this.mount = e.mount),
          (this.mounted = null),
          (this.id = E.nextInode++),
          (this.name = t),
          (this.mode = r),
          (this.node_ops = {}),
          (this.stream_ops = {}),
          (this.rdev = i);
      }
      Object.defineProperties(mt.prototype, {
        read: {
          get: function () {
            return 365 == (365 & this.mode);
          },
          set: function (e) {
            e ? (this.mode |= 365) : (this.mode &= -366);
          },
        },
        write: {
          get: function () {
            return 146 == (146 & this.mode);
          },
          set: function (e) {
            e ? (this.mode |= 146) : (this.mode &= -147);
          },
        },
        isFolder: {
          get: function () {
            return E.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return E.isChrdev(this.mode);
          },
        },
      }),
        (E.FSNode = mt),
        E.staticInit();
      for (var _t = new Array(256), gt = 0; gt < 256; ++gt)
        _t[gt] = String.fromCharCode(gt);
      (_e = _t),
        (k = _.BindingError = Se(Error, 'BindingError')),
        (Ee = _.InternalError = Se(Error, 'InternalError')),
        (F.prototype.isAliasOf = function (e) {
          if (!(this instanceof F)) return !1;
          if (!(e instanceof F)) return !1;
          for (
            var t = this.$$.ptrType.registeredClass,
              r = this.$$.ptr,
              i = e.$$.ptrType.registeredClass,
              s = e.$$.ptr;
            t.baseClass;

          )
            (r = t.upcast(r)), (t = t.baseClass);
          for (; i.baseClass; ) (s = i.upcast(s)), (i = i.baseClass);
          return t === i && r === s;
        }),
        (F.prototype.clone = function () {
          var e;
          return (
            this.$$.ptr || Be(this),
            this.$$.preservePointerOnDelete
              ? ((this.$$.count.value += 1), this)
              : (((e = ze(
                  Object.create(Object.getPrototypeOf(this), {
                    $$: {
                      value: {
                        count: (e = this.$$).count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType,
                      },
                    },
                  })
                )).$$.count.value += 1),
                (e.$$.deleteScheduled = !1),
                e)
          );
        }),
        (F.prototype.delete = function () {
          this.$$.ptr || Be(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              T('Object already scheduled for deletion'),
            ke(this),
            Te(this.$$),
            this.$$.preservePointerOnDelete ||
              ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
        }),
        (F.prototype.isDeleted = function () {
          return !this.$$.ptr;
        }),
        (F.prototype.deleteLater = function () {
          return (
            this.$$.ptr || Be(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              T('Object already scheduled for deletion'),
            Fe.push(this),
            1 === Fe.length && Ie && Ie(De),
            (this.$$.deleteScheduled = !0),
            this
          );
        }),
        (_.getInheritedInstanceCount = function () {
          return Object.keys(Pe).length;
        }),
        (_.getLiveInheritedInstances = function () {
          var e,
            t = [];
          for (e in Pe) Pe.hasOwnProperty(e) && t.push(Pe[e]);
          return t;
        }),
        (_.flushPendingDeletes = De),
        (_.setDelayFunction = function (e) {
          (Ie = e), Fe.length && Ie && Ie(De);
        }),
        (D.prototype.getPointee = function (e) {
          return (e = this.rawGetPointee ? this.rawGetPointee(e) : e);
        }),
        (D.prototype.destructor = function (e) {
          this.rawDestructor && this.rawDestructor(e);
        }),
        (D.prototype.argPackAdvance = 8),
        (D.prototype.readValueFromPointer = Ve),
        (D.prototype.deleteObject = function (e) {
          null !== e && e.delete();
        }),
        (D.prototype.fromWireType = function (e) {
          var t,
            r,
            i = this.getPointee(e);
          return i
            ? ((t = (function (e, t) {
                for (
                  void 0 === t && T('ptr should not be undefined');
                  e.baseClass;

                )
                  (t = e.upcast(t)), (e = e.baseClass);
                return t;
              })((t = this.registeredClass), (t = i))),
              void 0 !== (t = Pe[t])
                ? 0 === t.$$.count.value
                  ? ((t.$$.ptr = i), (t.$$.smartPtr = e), t.clone())
                  : ((t = t.clone()), this.destructor(e), t)
                : ((t = this.registeredClass.getActualType(i)),
                  !(t = Ce[t]) ||
                  ((t = this.isConst ? t.constPointerType : t.pointerType),
                  null ===
                    (r = (function e(t, r, i) {
                      return r === i
                        ? t
                        : void 0 === i.baseClass ||
                          null === (t = e(t, r, i.baseClass))
                        ? null
                        : i.downcast(t);
                    })(i, this.registeredClass, t.registeredClass)))
                    ? s.call(this)
                    : this.isSmartPointer
                    ? Le(t.registeredClass.instancePrototype, {
                        ptrType: t,
                        ptr: r,
                        smartPtrType: this,
                        smartPtr: e,
                      })
                    : Le(t.registeredClass.instancePrototype, {
                        ptrType: t,
                        ptr: r,
                      })))
            : (this.destructor(e), null);
          function s() {
            return this.isSmartPointer
              ? Le(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: i,
                  smartPtrType: this,
                  smartPtr: e,
                })
              : Le(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: e,
                });
          }
        }),
        (We = _.UnboundTypeError = Se(Error, 'UnboundTypeError')),
        (_.count_emval_handles = function () {
          for (var e = 0, t = 5; t < P.length; ++t) void 0 !== P[t] && ++e;
          return e;
        }),
        (_.get_first_emval = function () {
          for (var e = 5; e < P.length; ++e) if (void 0 !== P[e]) return P[e];
          return null;
        });
      var yt = {
          q: function (e) {
            return St(e + 24) + 24;
          },
          p: function (e, t, r) {
            throw (new fe(e).init(t, r), e);
          },
          C: function (e, t, r) {
            U.varargs = r;
            try {
              var i = U.getStreamFromFD(e);
              switch (t) {
                case 0:
                  return (s = U.get()) < 0 ? -28 : E.createStream(i, s).fd;
                case 1:
                case 2:
                case 6:
                case 7:
                  return 0;
                case 3:
                  return i.flags;
                case 4:
                  var s = U.get();
                  return (i.flags |= s), 0;
                case 5:
                  return (s = U.get()), (l[(s + 0) >> 1] = 2), 0;
                case 16:
                case 8:
                default:
                  return -28;
                case 9:
                  return (d[bt() >> 2] = 28), -1;
              }
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return -e.errno;
              throw e;
            }
          },
          w: function (e, t, r, i) {
            U.varargs = i;
            try {
              (t = U.getStr(t)), (t = U.calculateAt(e, t));
              var s = i ? U.get() : 0;
              return E.open(t, r, s).fd;
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return -e.errno;
              throw e;
            }
          },
          u: function (e, t, r, i, s) {},
          E: function (e, r, i, s, n) {
            var a = me(i);
            C(e, {
              name: (r = x(r)),
              fromWireType: function (e) {
                return !!e;
              },
              toWireType: function (e, t) {
                return t ? s : n;
              },
              argPackAdvance: 8,
              readValueFromPointer: function (e) {
                var t;
                if (1 === i) t = u;
                else if (2 === i) t = l;
                else {
                  if (4 !== i)
                    throw new TypeError('Unknown boolean type size: ' + r);
                  t = d;
                }
                return this.fromWireType(t[e >> a]);
              },
              destructorFunction: null,
            });
          },
          t: function (l, e, t, d, r, h, i, u, s, f, p, n, c) {
            (p = x(p)),
              (h = I(r, h)),
              (u = u && I(i, u)),
              (f = f && I(s, f)),
              (c = I(n, c));
            var a,
              m = ve(p);
            (r = m),
              (i = function () {
                qe('Cannot construct ' + p + ' due to unbound types', [d]);
              }),
              _.hasOwnProperty(r)
                ? (T("Cannot register public name '" + r + "' twice"),
                  Re(_, r, r),
                  _.hasOwnProperty(a) &&
                    T(
                      'Cannot register multiple overloads of a function with the same number of arguments (' +
                        a +
                        ')!'
                    ),
                  (_[r].overloadTable[a] = i))
                : (_[r] = i),
              xe([l, e, t], d ? [d] : [], function (e) {
                (e = e[0]),
                  (e = d
                    ? (a = e.registeredClass).instancePrototype
                    : F.prototype);
                var t,
                  r,
                  i = we(m, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new k("Use 'new' to construct " + p);
                    if (void 0 === n.constructor_body)
                      throw new k(p + ' has no accessible constructor');
                    var e = n.constructor_body[arguments.length];
                    if (void 0 === e)
                      throw new k(
                        'Tried to invoke ctor of ' +
                          p +
                          ' with invalid number of parameters (' +
                          arguments.length +
                          ') - expected (' +
                          Object.keys(n.constructor_body).toString() +
                          ') parameters instead!'
                      );
                    return e.apply(this, arguments);
                  }),
                  s = Object.create(e, { constructor: { value: i } }),
                  n = ((i.prototype = s), new Me(p, i, s, c, a, h, u, f)),
                  e = new D(p, n, !0, !1, !1),
                  a = new D(p + '*', n, !1, !1, !1),
                  o = new D(p + ' const*', n, !1, !0, !1);
                return (
                  (Ce[l] = { pointerType: a, constPointerType: o }),
                  (t = m),
                  (i = i),
                  _.hasOwnProperty(t) ||
                    Ue('Replacing nonexistant public symbol'),
                  _[t].overloadTable,
                  (_[t] = i),
                  (_[t].argCount = r),
                  [e, a, o]
                );
              });
          },
          r: function (e, i, t, r, s, n) {
            Y(0 < i);
            var a = Ke(i, t);
            (s = I(r, s)),
              xe([], [e], function (t) {
                var r = 'constructor ' + (t = t[0]).name;
                if (
                  (void 0 === t.registeredClass.constructor_body &&
                    (t.registeredClass.constructor_body = []),
                  void 0 !== t.registeredClass.constructor_body[i - 1])
                )
                  throw new k(
                    'Cannot register multiple constructors with identical number of parameters (' +
                      (i - 1) +
                      ") for class '" +
                      t.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                  );
                return (
                  (t.registeredClass.constructor_body[i - 1] = () => {
                    qe(
                      'Cannot construct ' + t.name + ' due to unbound types',
                      a
                    );
                  }),
                  xe([], a, function (e) {
                    return (
                      e.splice(1, 0, null),
                      (t.registeredClass.constructor_body[i - 1] = Je(
                        r,
                        e,
                        null,
                        s,
                        n
                      )),
                      []
                    );
                  }),
                  []
                );
              });
          },
          d: function (e, n, a, t, r, o, l, d) {
            var h = Ke(a, t);
            (n = x(n)),
              (o = I(r, o)),
              xe([], [e], function (t) {
                var r = (t = t[0]).name + '.' + n;
                function e() {
                  qe('Cannot call ' + r + ' due to unbound types', h);
                }
                n.startsWith('@@') && (n = Symbol[n.substring(2)]),
                  d && t.registeredClass.pureVirtualFunctions.push(n);
                var i = t.registeredClass.instancePrototype,
                  s = i[n];
                return (
                  void 0 === s ||
                  (void 0 === s.overloadTable &&
                    s.className !== t.name &&
                    s.argCount === a - 2)
                    ? ((e.argCount = a - 2), (e.className = t.name), (i[n] = e))
                    : (Re(i, n, r), (i[n].overloadTable[a - 2] = e)),
                  xe([], h, function (e) {
                    e = Je(r, e, t, o, l);
                    return (
                      void 0 === i[n].overloadTable
                        ? ((e.argCount = a - 2), (i[n] = e))
                        : (i[n].overloadTable[a - 2] = e),
                      []
                    );
                  }),
                  []
                );
              });
          },
          D: function (e, t) {
            C(e, {
              name: (t = x(t)),
              fromWireType: function (e) {
                var t = tt.toValue(e);
                return et(e), t;
              },
              toWireType: function (e, t) {
                return tt.toHandle(t);
              },
              argPackAdvance: 8,
              readValueFromPointer: Ve,
              destructorFunction: null,
            });
          },
          n: function (e, t, r) {
            r = me(r);
            C(e, {
              name: (t = x(t)),
              fromWireType: function (e) {
                return e;
              },
              toWireType: function (e, t) {
                return t;
              },
              argPackAdvance: 8,
              readValueFromPointer: (function (e, t) {
                switch (t) {
                  case 2:
                    return function (e) {
                      return this.fromWireType(X[e >> 2]);
                    };
                  case 3:
                    return function (e) {
                      return this.fromWireType(Z[e >> 3]);
                    };
                  default:
                    throw new TypeError('Unknown float type: ' + e);
                }
              })(t, r),
              destructorFunction: null,
            });
          },
          c: function (e, t, r, i, s) {
            t = x(t);
            var n,
              a = me(r),
              o = (e) => e,
              r =
                (0 === i && ((n = 32 - 8 * r), (o = (e) => (e << n) >>> n)),
                t.includes('unsigned'));
            C(e, {
              name: t,
              fromWireType: o,
              toWireType: r
                ? function (e, t) {
                    return this.name, t >>> 0;
                  }
                : function (e, t) {
                    return this.name, t;
                  },
              argPackAdvance: 8,
              readValueFromPointer: (function (e, t, r) {
                switch (t) {
                  case 0:
                    return r
                      ? function (e) {
                          return u[e];
                        }
                      : function (e) {
                          return f[e];
                        };
                  case 1:
                    return r
                      ? function (e) {
                          return l[e >> 1];
                        }
                      : function (e) {
                          return K[e >> 1];
                        };
                  case 2:
                    return r
                      ? function (e) {
                          return d[e >> 2];
                        }
                      : function (e) {
                          return p[e >> 2];
                        };
                  default:
                    throw new TypeError('Unknown integer type: ' + e);
                }
              })(t, a, 0 !== i),
              destructorFunction: null,
            });
          },
          b: function (e, t, r) {
            var i = [
              Int8Array,
              Uint8Array,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
            ][t];
            function s(e) {
              var t = p,
                r = t[(e >>= 2)],
                t = t[e + 1];
              return new i(q, t, r);
            }
            C(
              e,
              {
                name: (r = x(r)),
                fromWireType: s,
                argPackAdvance: 8,
                readValueFromPointer: s,
              },
              { ignoreDuplicateRegistrations: !0 }
            );
          },
          m: function (e, t) {
            var d = 'std::string' === (t = x(t));
            C(e, {
              name: t,
              fromWireType: function (e) {
                var t,
                  r = p[e >> 2],
                  i = e + 4;
                if (d)
                  for (var s = i, n = 0; n <= r; ++n) {
                    var a,
                      o = i + n;
                    (n != r && 0 != f[o]) ||
                      ((a = ee(s, o - s)),
                      void 0 === t
                        ? (t = a)
                        : (t = t + String.fromCharCode(0) + a),
                      (s = o + 1));
                  }
                else {
                  for (var l = new Array(r), n = 0; n < r; ++n)
                    l[n] = String.fromCharCode(f[i + n]);
                  t = l.join('');
                }
                return L(e), t;
              },
              toWireType: function (e, t) {
                var r,
                  i =
                    'string' ==
                    typeof (t =
                      t instanceof ArrayBuffer ? new Uint8Array(t) : t),
                  s =
                    (i ||
                      t instanceof Uint8Array ||
                      t instanceof Uint8ClampedArray ||
                      t instanceof Int8Array ||
                      T('Cannot pass non-string to std::string'),
                    (r = d && i ? re(t) : t.length),
                    St(4 + r + 1)),
                  n = s + 4;
                if (((p[s >> 2] = r), d && i)) te(t, f, n, r + 1);
                else if (i)
                  for (var a = 0; a < r; ++a) {
                    var o = t.charCodeAt(a);
                    255 < o &&
                      (L(n),
                      T(
                        'String has UTF-16 code units that do not fit in 8 bits'
                      )),
                      (f[n + a] = o);
                  }
                else for (a = 0; a < r; ++a) f[n + a] = t[a];
                return null !== e && e.push(L, s), s;
              },
              argPackAdvance: 8,
              readValueFromPointer: Ve,
              destructorFunction: function (e) {
                L(e);
              },
            });
          },
          h: function (e, l, s) {
            var d, n, h, a, u;
            (s = x(s)),
              2 === l
                ? ((d = st), (n = nt), (a = at), (h = () => K), (u = 1))
                : 4 === l &&
                  ((d = ot), (n = lt), (a = dt), (h = () => p), (u = 2)),
              C(e, {
                name: s,
                fromWireType: function (e) {
                  for (
                    var t, r = p[e >> 2], i = h(), s = e + 4, n = 0;
                    n <= r;
                    ++n
                  ) {
                    var a,
                      o = e + 4 + n * l;
                    (n != r && 0 != i[o >> u]) ||
                      ((a = d(s, o - s)),
                      void 0 === t
                        ? (t = a)
                        : (t = t + String.fromCharCode(0) + a),
                      (s = o + l));
                  }
                  return L(e), t;
                },
                toWireType: function (e, t) {
                  'string' != typeof t &&
                    T('Cannot pass non-string to C++ string type ' + s);
                  var r = a(t),
                    i = St(4 + r + l);
                  return (
                    (p[i >> 2] = r >> u),
                    n(t, i + 4, r + l),
                    null !== e && e.push(L, i),
                    i
                  );
                },
                argPackAdvance: 8,
                readValueFromPointer: Ve,
                destructorFunction: function (e) {
                  L(e);
                },
              });
          },
          o: function (e, t) {
            C(e, {
              isVoid: !0,
              name: (t = x(t)),
              argPackAdvance: 0,
              fromWireType: function () {},
              toWireType: function (e, t) {},
            });
          },
          f: function () {
            return Date.now();
          },
          g: function (e, t, r, i) {
            (e = ut[e])(
              (t = tt.toValue(t)),
              (r = void 0 === (t = ht[(e = r)]) ? x(e) : t),
              null,
              i
            );
          },
          j: et,
          i: function (e, t) {
            var r = (function (e, t) {
                for (var r, i, s = new Array(e), n = 0; n < e; ++n)
                  s[n] =
                    ((r = p[(t + 4 * n) >> 2]),
                    void 0 === (i = A[r]) &&
                      T('parameter ' + n + ' has unknown type ' + Ye(r)),
                    i);
                return s;
              })(e, t),
              t = r[0],
              i =
                t.name +
                '_$' +
                r
                  .slice(1)
                  .map(function (e) {
                    return e.name;
                  })
                  .join('_') +
                '$',
              s = ft[i];
            if (void 0 === s) {
              for (var n = ['retType'], a = [t], o = '', l = 0; l < e - 1; ++l)
                (o += (0 !== l ? ', ' : '') + 'arg' + l),
                  n.push('argType' + l),
                  a.push(r[1 + l]);
              for (
                var d =
                    'return function ' +
                    ve('methodCaller_' + i) +
                    '(handle, name, destructors, args) {\n',
                  h = 0,
                  l = 0;
                l < e - 1;
                ++l
              )
                (d +=
                  '    var arg' +
                  l +
                  ' = argType' +
                  l +
                  '.readValueFromPointer(args' +
                  (h ? '+' + h : '') +
                  ');\n'),
                  (h += r[l + 1].argPackAdvance);
              for (
                d += '    var rv = handle[name](' + o + ');\n', l = 0;
                l < e - 1;
                ++l
              )
                r[l + 1].deleteObject &&
                  (d += '    argType' + l + '.deleteObject(arg' + l + ');\n');
              t.isVoid ||
                (d += '    return retType.toWireType(destructors, rv);\n'),
                n.push((d += '};\n'));
              var t = Ze(Function, n).apply(null, a),
                u = ut.length;
              ut.push(t), (ft[i] = s = u);
            }
            return s;
          },
          a: function () {
            c('');
          },
          A: function (e, t, r) {
            f.copyWithin(e, t, t + r);
          },
          v: function (e) {
            f.length, c('OOM');
          },
          y: function (a, o) {
            var l = 0;
            return (
              ct().forEach(function (e, t) {
                for (
                  var r = o + l,
                    i = ((p[(a + 4 * t) >> 2] = r), e),
                    s = r,
                    n = 0;
                  n < i.length;
                  ++n
                )
                  u[0 | s++] = i.charCodeAt(n);
                (u[0 | s] = 0), (l += e.length + 1);
              }),
              0
            );
          },
          z: function (e, t) {
            var r = ct(),
              i = ((p[e >> 2] = r.length), 0);
            return (
              r.forEach(function (e) {
                i += e.length + 1;
              }),
              (p[t >> 2] = i),
              0
            );
          },
          l: function (e) {
            try {
              var t = U.getStreamFromFD(e);
              return E.close(t), 0;
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return e.errno;
              throw e;
            }
          },
          x: function (e, t) {
            try {
              var r = U.getStreamFromFD(e),
                i = r.tty ? 2 : E.isDir(r.mode) ? 3 : E.isLink(r.mode) ? 7 : 4;
              return (u[0 | t] = i), 0;
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return e.errno;
              throw e;
            }
          },
          B: function (e, t, r, i) {
            try {
              var s = (function (e, t, r) {
                for (var i = 0, s = 0; s < r; s++) {
                  var n = p[t >> 2],
                    a = p[(t + 4) >> 2],
                    n = ((t += 8), E.read(e, u, n, a, void 0));
                  if (n < 0) return -1;
                  if (((i += n), n < a)) break;
                }
                return i;
              })(U.getStreamFromFD(e), t, r);
              return (d[i >> 2] = s), 0;
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return e.errno;
              throw e;
            }
          },
          s: function (e, t, r, i, s) {
            try {
              var n,
                a =
                  (r + 2097152) >>> 0 < 4194305 - !!t
                    ? (t >>> 0) + 4294967296 * r
                    : NaN;
              return isNaN(a)
                ? 61
                : ((n = U.getStreamFromFD(e)),
                  E.llseek(n, a, i),
                  (b = [
                    n.position >>> 0,
                    ((y = n.position),
                    1 <= +Math.abs(y)
                      ? 0 < y
                        ? (0 |
                            Math.min(
                              +Math.floor(y / 4294967296),
                              4294967295
                            )) >>>
                          0
                        : ~~+Math.ceil((y - (~~y >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (d[s >> 2] = b[0]),
                  (d[(s + 4) >> 2] = b[1]),
                  n.getdents && 0 === a && 0 === i && (n.getdents = null),
                  0);
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return e.errno;
              throw e;
            }
          },
          k: function (e, t, r, i) {
            try {
              var s = (function (e, t, r) {
                for (var i = 0, s = 0; s < r; s++) {
                  var n = p[t >> 2],
                    a = p[(t + 4) >> 2],
                    n = ((t += 8), E.write(e, u, n, a, void 0));
                  if (n < 0) return -1;
                  i += n;
                }
                return i;
              })(U.getStreamFromFD(e), t, r);
              return (p[i >> 2] = s), 0;
            } catch (e) {
              if (void 0 !== E && e instanceof E.ErrnoError) return e.errno;
              throw e;
            }
          },
          e: function (e) {},
        },
        L =
          (!(function () {
            var t = { a: yt };
            function r(e, t) {
              var e = e.exports;
              (_.asm = e),
                (e = _.asm.F.buffer),
                (q = e),
                (_.HEAP8 = u = new Int8Array(e)),
                (_.HEAP16 = l = new Int16Array(e)),
                (_.HEAP32 = d = new Int32Array(e)),
                (_.HEAPU8 = f = new Uint8Array(e)),
                (_.HEAPU16 = K = new Uint16Array(e)),
                (_.HEAPU32 = p = new Uint32Array(e)),
                (_.HEAPF32 = X = new Float32Array(e)),
                (_.HEAPF64 = Z = new Float64Array(e)),
                (J = _.asm.I),
                (e = _.asm.G),
                se.unshift(e),
                oe();
            }
            function i(e) {
              r(e.instance);
            }
            function s(e) {
              return (function () {
                if (!n && (V || h)) {
                  if ('function' == typeof fetch && !de(g))
                    return fetch(g, { credentials: 'same-origin' })
                      .then(function (e) {
                        if (e.ok) return e.arrayBuffer();
                        throw "failed to load wasm binary file at '" + g + "'";
                      })
                      .catch(function () {
                        return he(g);
                      });
                  if (m)
                    return new Promise(function (t, e) {
                      m(
                        g,
                        function (e) {
                          t(new Uint8Array(e));
                        },
                        e
                      );
                    });
                }
                return Promise.resolve().then(function () {
                  return he(g);
                });
              })()
                .then(function (e) {
                  return WebAssembly.instantiate(e, t);
                })
                .then(function (e) {
                  return e;
                })
                .then(e, function (e) {
                  o('failed to asynchronously prepare wasm: ' + e), c(e);
                });
            }
            if ((ae(), _.instantiateWasm))
              try {
                return _.instantiateWasm(t, r);
              } catch (t) {
                return o(
                  'Module.instantiateWasm callback failed with error: ' + t
                );
              }
            n ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            le(g) ||
            de(g) ||
            $ ||
            'function' != typeof fetch
              ? s(i)
              : fetch(g, { credentials: 'same-origin' }).then(function (e) {
                  return WebAssembly.instantiateStreaming(e, t).then(
                    i,
                    function (e) {
                      return (
                        o('wasm streaming compile failed: ' + e),
                        o('falling back to ArrayBuffer instantiation'),
                        s(i)
                      );
                    }
                  );
                });
          })(),
          (_.___wasm_call_ctors = function () {
            return (_.___wasm_call_ctors = _.asm.G).apply(null, arguments);
          }),
          (_._free = function () {
            return (L = _._free = _.asm.H).apply(null, arguments);
          })),
        bt = (_.___errno_location = function () {
          return (bt = _.___errno_location = _.asm.J).apply(null, arguments);
        }),
        vt = (_.___getTypeName = function () {
          return (vt = _.___getTypeName = _.asm.K).apply(null, arguments);
        });
      _.___embind_register_native_and_builtin_types = function () {
        return (_.___embind_register_native_and_builtin_types = _.asm.L).apply(
          null,
          arguments
        );
      };
      var wt,
        St = (_._malloc = function () {
          return (St = _._malloc = _.asm.M).apply(null, arguments);
        }),
        Et = (_._emscripten_builtin_memalign = function () {
          return (Et = _._emscripten_builtin_memalign = _.asm.N).apply(
            null,
            arguments
          );
        }),
        Ut = (_.___cxa_is_pointer_type = function () {
          return (Ut = _.___cxa_is_pointer_type = _.asm.O).apply(
            null,
            arguments
          );
        });
      function xt() {
        function e() {
          if (!wt && ((wt = !0), (_.calledRun = !0), !W)) {
            if (
              (_.noFSInit || E.init.initialized || E.init(),
              (E.ignorePermissions = !1),
              ue(se),
              _.onRuntimeInitialized && _.onRuntimeInitialized(),
              _.postRun)
            )
              for (
                'function' == typeof _.postRun && (_.postRun = [_.postRun]);
                _.postRun.length;

              )
                (e = _.postRun.shift()), ne.unshift(e);
            var e;
            ue(ne);
          }
        }
        0 < r ||
          ((function () {
            if (_.preRun)
              for (
                'function' == typeof _.preRun && (_.preRun = [_.preRun]);
                _.preRun.length;

              )
                (e = _.preRun.shift()), ie.unshift(e);
            var e;
            ue(ie);
          })(),
          0 < r) ||
          (_.setStatus
            ? (_.setStatus('Running...'),
              setTimeout(function () {
                setTimeout(function () {
                  _.setStatus('');
                }, 1),
                  e();
              }, 1))
            : e());
      }
      if (
        ((_.dynCall_viiijj = function () {
          return (_.dynCall_viiijj = _.asm.P).apply(null, arguments);
        }),
        (_.dynCall_jij = function () {
          return (_.dynCall_jij = _.asm.Q).apply(null, arguments);
        }),
        (_.dynCall_jii = function () {
          return (_.dynCall_jii = _.asm.R).apply(null, arguments);
        }),
        (_.dynCall_jiji = function () {
          return (_.dynCall_jiji = _.asm.S).apply(null, arguments);
        }),
        (i = function e() {
          wt || xt(), wt || (i = e);
        }),
        _.preInit)
      )
        for (
          'function' == typeof _.preInit && (_.preInit = [_.preInit]);
          0 < _.preInit.length;

        )
          _.preInit.pop()();
      xt(), (z.exports = _);
    }),
    E = 1e-6,
    s = 'undefined' != typeof Float32Array ? Float32Array : Array;
  function A() {
    var e = new s(16);
    return (
      s != Float32Array &&
        ((e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0)),
      (e[0] = 1),
      (e[5] = 1),
      (e[10] = 1),
      (e[15] = 1),
      e
    );
  }
  function k(e) {
    (e[0] = 1),
      (e[1] = 0),
      (e[2] = 0),
      (e[3] = 0),
      (e[4] = 0),
      (e[5] = 1),
      (e[6] = 0),
      (e[7] = 0),
      (e[8] = 0),
      (e[9] = 0),
      (e[10] = 1),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1);
  }
  Math.hypot ||
    (Math.hypot = function () {
      for (var e = 0, t = arguments.length; t--; )
        e += arguments[t] * arguments[t];
      return Math.sqrt(e);
    });
  var T = function (e, t, r, i, s, n, a) {
    var o = 1 / (t - r),
      l = 1 / (i - s),
      d = 1 / (n - a);
    return (
      (e[0] = -2 * o),
      (e[1] = 0),
      (e[2] = 0),
      (e[3] = 0),
      (e[4] = 0),
      (e[5] = -2 * l),
      (e[6] = 0),
      (e[7] = 0),
      (e[8] = 0),
      (e[9] = 0),
      (e[10] = 2 * d),
      (e[11] = 0),
      (e[12] = (t + r) * o),
      (e[13] = (s + i) * l),
      (e[14] = (a + n) * d),
      (e[15] = 1),
      e
    );
  };
  function C(e, t, r) {
    var i = new s(3);
    return (i[0] = e), (i[1] = t), (i[2] = r), i;
  }
  (e = new s(3)), s != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0));
  var le = (g, e) => {
    e && g.pixelStorei(g.UNPACK_ALIGNMENT, 1);
    (e = n(
      g.VERTEX_SHADER,
      '\n            attribute vec4 aVertexPosition;\n            attribute vec2 aTexturePosition;\n            uniform mat4 uModelMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uProjectionMatrix;\n            varying lowp vec2 vTexturePosition;\n            void main(void) {\n              gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\n              vTexturePosition = aTexturePosition;\n            }\n        '
    )),
      (t = n(
        g.FRAGMENT_SHADER,
        '\n            precision highp float;\n            varying highp vec2 vTexturePosition;\n            uniform int isyuv;\n            uniform sampler2D rgbaTexture;\n            uniform sampler2D yTexture;\n            uniform sampler2D uTexture;\n            uniform sampler2D vTexture;\n\n            const mat4 YUV2RGB = mat4( 1.1643828125, 0, 1.59602734375, -.87078515625,\n                                       1.1643828125, -.39176171875, -.81296875, .52959375,\n                                       1.1643828125, 2.017234375, 0, -1.081390625,\n                                       0, 0, 0, 1);\n\n\n            void main(void) {\n\n                if (isyuv>0) {\n\n                    highp float y = texture2D(yTexture,  vTexturePosition).r;\n                    highp float u = texture2D(uTexture,  vTexturePosition).r;\n                    highp float v = texture2D(vTexture,  vTexturePosition).r;\n                    gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;\n\n                } else {\n                    gl_FragColor =  texture2D(rgbaTexture, vTexturePosition);\n                }\n            }\n        '
      )),
      (r = g.createProgram()),
      g.attachShader(r, e),
      g.attachShader(r, t),
      g.linkProgram(r);
    var t,
      r,
      e = g.getProgramParameter(r, g.LINK_STATUS)
        ? r
        : (console.log(
            'Unable to initialize the shader program: ' + g.getProgramInfoLog(r)
          ),
          null);
    let y = {
        program: e,
        attribLocations: {
          vertexPosition: g.getAttribLocation(e, 'aVertexPosition'),
          texturePosition: g.getAttribLocation(e, 'aTexturePosition'),
        },
        uniformLocations: {
          projectionMatrix: g.getUniformLocation(e, 'uProjectionMatrix'),
          modelMatrix: g.getUniformLocation(e, 'uModelMatrix'),
          viewMatrix: g.getUniformLocation(e, 'uViewMatrix'),
          rgbatexture: g.getUniformLocation(e, 'rgbaTexture'),
          ytexture: g.getUniformLocation(e, 'yTexture'),
          utexture: g.getUniformLocation(e, 'uTexture'),
          vtexture: g.getUniformLocation(e, 'vTexture'),
          isyuv: g.getUniformLocation(e, 'isyuv'),
        },
      },
      b =
        ((t = g.createBuffer()),
        g.bindBuffer(g.ARRAY_BUFFER, t),
        g.bufferData(
          g.ARRAY_BUFFER,
          new Float32Array([-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1]),
          g.STATIC_DRAW
        ),
        (r = (r = []).concat([0, 1], [1, 1], [1, 0], [0, 0])),
        (e = g.createBuffer()),
        g.bindBuffer(g.ARRAY_BUFFER, e),
        g.bufferData(g.ARRAY_BUFFER, new Float32Array(r), g.STATIC_DRAW),
        (r = g.createBuffer()),
        g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, r),
        g.bufferData(
          g.ELEMENT_ARRAY_BUFFER,
          new Uint16Array([0, 1, 2, 0, 2, 3]),
          g.STATIC_DRAW
        ),
        { position: t, texPosition: e, indices: r }),
      i = s(),
      v = s(),
      w = s(),
      S = s();
    function s() {
      var e = g.createTexture();
      return (
        g.bindTexture(g.TEXTURE_2D, e),
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR),
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR),
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE),
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE),
        e
      );
    }
    function n(e, t) {
      e = g.createShader(e);
      return (
        g.shaderSource(e, t),
        g.compileShader(e),
        g.getShaderParameter(e, g.COMPILE_STATUS)
          ? e
          : (console.log(
              'An error occurred compiling the shaders: ' +
                g.getShaderInfoLog(e)
            ),
            g.deleteShader(e),
            null)
      );
    }
    function a(e, t) {
      g.viewport(0, 0, e, t),
        g.clearColor(0, 0, 0, 0),
        g.clearDepth(1),
        g.enable(g.DEPTH_TEST),
        g.depthFunc(g.LEQUAL),
        g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
      const r = A();
      T(r, -1, 1, -1, 1, 0.1, 100);
      var i,
        s,
        n,
        a,
        o,
        l,
        d,
        h,
        u,
        f,
        p,
        c,
        m,
        _,
        e = A(),
        t = (k(e), A());
      (i = t),
        (s = C(0, 0, 0)),
        (n = C(0, 0, -1)),
        (a = C(0, 1, 0)),
        (u = s[0]),
        (f = s[1]),
        (s = s[2]),
        (p = a[0]),
        (c = a[1]),
        (a = a[2]),
        (m = n[0]),
        (_ = n[1]),
        (n = n[2]),
        Math.abs(u - m) < E && Math.abs(f - _) < E && Math.abs(s - n) < E
          ? k(i)
          : ((m = u - m),
            (_ = f - _),
            (n = s - n),
            (o = c * (n *= h = 1 / Math.hypot(m, _, n)) - a * (_ *= h)),
            (a = a * (m *= h) - p * n),
            (p = p * _ - c * m),
            (h = Math.hypot(o, a, p))
              ? ((o *= h = 1 / h), (a *= h), (p *= h))
              : (p = a = o = 0),
            (c = _ * p - n * a),
            (l = n * o - m * p),
            (d = m * a - _ * o),
            (h = Math.hypot(c, l, d))
              ? ((c *= h = 1 / h), (l *= h), (d *= h))
              : (d = l = c = 0),
            (i[0] = o),
            (i[1] = c),
            (i[2] = m),
            (i[3] = 0),
            (i[4] = a),
            (i[5] = l),
            (i[6] = _),
            (i[7] = 0),
            (i[8] = p),
            (i[9] = d),
            (i[10] = n),
            (i[11] = 0),
            (i[12] = -(o * u + a * f + p * s)),
            (i[13] = -(c * u + l * f + d * s)),
            (i[14] = -(m * u + _ * f + n * s)),
            (i[15] = 1));
      {
        const e = 3,
          t = g.FLOAT,
          r = !1,
          v = 0,
          w = 0;
        g.bindBuffer(g.ARRAY_BUFFER, b.position),
          g.vertexAttribPointer(
            y.attribLocations.vertexPosition,
            3,
            t,
            !1,
            0,
            0
          ),
          g.enableVertexAttribArray(y.attribLocations.vertexPosition);
      }
      {
        const e = 2,
          t = g.FLOAT,
          r = !1,
          v = 0,
          w = 0;
        g.bindBuffer(g.ARRAY_BUFFER, b.texPosition),
          g.vertexAttribPointer(
            y.attribLocations.texturePosition,
            2,
            t,
            !1,
            0,
            0
          ),
          g.enableVertexAttribArray(y.attribLocations.texturePosition);
      }
      g.activeTexture(g.TEXTURE0 + 3),
        g.bindTexture(g.TEXTURE_2D, v),
        g.activeTexture(g.TEXTURE0 + 4),
        g.bindTexture(g.TEXTURE_2D, w),
        g.activeTexture(g.TEXTURE0 + 5),
        g.bindTexture(g.TEXTURE_2D, S),
        g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, b.indices),
        g.useProgram(y.program),
        g.uniformMatrix4fv(y.uniformLocations.projectionMatrix, !1, r),
        g.uniformMatrix4fv(y.uniformLocations.modelMatrix, !1, e),
        g.uniformMatrix4fv(y.uniformLocations.viewMatrix, !1, t),
        g.uniform1i(y.uniformLocations.rgbatexture, 2),
        g.uniform1i(y.uniformLocations.ytexture, 3),
        g.uniform1i(y.uniformLocations.utexture, 4),
        g.uniform1i(y.uniformLocations.vtexture, 5),
        g.uniform1i(y.uniformLocations.isyuv, 1);
      {
        const e = 6,
          t = g.UNSIGNED_SHORT,
          y = 0;
        g.drawElements(g.TRIANGLES, 6, t, 0);
      }
    }
    return {
      render: function (e, t, r, i, s) {
        g.activeTexture(g.TEXTURE0),
          g.bindTexture(g.TEXTURE_2D, v),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e,
            t,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            r
          ),
          g.activeTexture(g.TEXTURE1),
          g.bindTexture(g.TEXTURE_2D, w),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e / 2,
            t / 2,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            i
          ),
          g.activeTexture(g.TEXTURE2),
          g.bindTexture(g.TEXTURE_2D, S),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e / 2,
            t / 2,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            s
          ),
          a(e, t);
      },
      renderYUV: function (e, t, r) {
        var i = r.slice(0, e * t),
          s = r.slice(e * t, (e * t * 5) / 4),
          r = r.slice((e * t * 5) / 4, (e * t * 3) / 2);
        g.activeTexture(g.TEXTURE0),
          g.bindTexture(g.TEXTURE_2D, v),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e,
            t,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            i
          ),
          g.activeTexture(g.TEXTURE1),
          g.bindTexture(g.TEXTURE_2D, w),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e / 2,
            t / 2,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            s
          ),
          g.activeTexture(g.TEXTURE2),
          g.bindTexture(g.TEXTURE_2D, S),
          g.texImage2D(
            g.TEXTURE_2D,
            0,
            g.LUMINANCE,
            e / 2,
            t / 2,
            0,
            g.LUMINANCE,
            g.UNSIGNED_BYTE,
            r
          ),
          a(e, t);
      },
      destroy: function () {
        g.deleteProgram(y.program),
          g.deleteBuffer(b.position),
          g.deleteBuffer(b.texPosition),
          g.deleteBuffer(b.indices),
          g.deleteTexture(i),
          g.deleteTexture(v),
          g.deleteTexture(w),
          g.deleteTexture(S),
          (y = null),
          (b = null),
          (i = null),
          (v = null),
          (w = null),
          (S = null);
      },
    };
  };
  const de = 'fetch',
    he = 'player',
    H = 'mp4',
    g = 'debug',
    y = 'warn',
    ue = {
      playType: he,
      container: '',
      videoBuffer: 1e3,
      videoBufferDelay: 1e3,
      networkDelay: 1e4,
      isResize: !0,
      isFullResize: !1,
      isFlv: !1,
      isHls: !1,
      isFmp4: !1,
      isFmp4Private: !1,
      isWebrtc: !1,
      isWebrtcForZLM: !1,
      isWebrtcForSRS: !1,
      isWebrtcForOthers: !1,
      isNakedFlow: !1,
      isMpeg4: !1,
      debug: !1,
      debugLevel: y,
      debugUuid: '',
      isMulti: !0,
      multiIndex: -1,
      hotKey: !1,
      loadingTimeout: 10,
      heartTimeout: 10,
      timeout: 10,
      pageVisibilityHiddenTimeout: 300,
      loadingTimeoutReplay: !0,
      heartTimeoutReplay: !0,
      loadingTimeoutReplayTimes: 3,
      heartTimeoutReplayTimes: 3,
      heartTimeoutReplayUseLastFrameShow: !1,
      replayUseLastFrameShow: !1,
      supportDblclickFullscreen: !1,
      showBandwidth: !1,
      showPerformance: !1,
      mseCorrectTimeDuration: 20,
      keepScreenOn: !0,
      isNotMute: !1,
      hasAudio: !0,
      hasVideo: !0,
      operateBtns: {
        fullscreen: !1,
        screenshot: !1,
        play: !1,
        audio: !1,
        record: !1,
        ptz: !1,
        quality: !1,
        zoom: !1,
        close: !1,
        scale: !1,
        performance: !1,
        logSave: !1,
        aiFace: !1,
        aiObject: !1,
        fullscreenFn: null,
        fullscreenExitFn: null,
        screenshotFn: null,
        playFn: null,
        pauseFn: null,
        recordFn: null,
        recordStopFn: null,
      },
      extendOperateBtns: [],
      contextmenuBtns: [],
      watermarkConfig: {},
      controlAutoHide: !1,
      hasControl: !1,
      loadingIcon: !0,
      loadingText: '',
      background: '',
      backgroundLoadingShow: !1,
      loadingBackground: '',
      loadingBackgroundWidth: 0,
      loadingBackgroundHeight: 0,
      decoder: 'decoder-pro.js',
      decoderAudio: 'decoder-pro-audio.js',
      decoderHard: 'decoder-pro-hard.js',
      wasmMp4RecorderDecoder: 'jessibuca-pro-mp4-recorder-decoder.js',
      decoderWASM: '',
      isDecoderUseCDN: !1,
      url: '',
      rotate: 0,
      mirrorRotate: 'none',
      aspectRatio: 'default',
      playbackConfig: {
        playList: [],
        fps: '',
        showControl: !0,
        controlType: 'normal',
        duration: 0,
        startTime: '',
        showRateBtn: !1,
        rateConfig: [],
        showPrecision: '',
        showPrecisionBtn: !0,
        isCacheBeforeDecodeForFpsRender: !1,
        uiUsePlaybackPause: !1,
        isPlaybackPauseClearCache: !0,
        isUseFpsRender: !1,
        isUseLocalCalculateTime: !1,
        localOneFrameTimestamp: 40,
        supportWheel: !1,
        useWCS: !1,
        useMSE: !1,
      },
      qualityConfig: [],
      defaultStreamQuality: '',
      scaleConfig: ['拉伸', '缩放', '正常'],
      forceNoOffscreen: !0,
      hiddenAutoPause: !1,
      protocol: 2,
      demuxType: 'flv',
      useWasm: !1,
      useMSE: !1,
      useWCS: !1,
      useSIMD: !0,
      wcsUseVideoRender: !0,
      wcsUseWebgl2Render: !0,
      wasmUseVideoRender: !0,
      mseUseCanvasRender: !1,
      hlsUseCanvasRender: !1,
      webrtcUseCanvasRender: !1,
      useOffscreen: !1,
      useWebGPU: !1,
      mseDecodeErrorReplay: !0,
      wcsDecodeErrorReplay: !0,
      wasmDecodeErrorReplay: !0,
      simdDecodeErrorReplay: !0,
      autoWasm: !0,
      webglAlignmentErrorReplay: !0,
      webglContextLostErrorReplay: !0,
      openWebglAlignment: !1,
      syncAudioAndVideo: !1,
      playbackDelayTime: 1e3,
      playbackFps: 25,
      playbackForwardMaxRateDecodeIFrame: 4,
      playbackCurrentTimeMove: !0,
      useVideoRender: !0,
      useCanvasRender: !1,
      networkDelayTimeoutReplay: !1,
      recordType: H,
      checkFirstIFrame: !0,
      nakedFlowFps: 25,
      audioEngine: null,
      isShowRecordingUI: !0,
      isShowZoomingUI: !0,
      useFaceDetector: !1,
      useObjectDetector: !1,
      ptzClickType: 'click',
      ptzStopEmitDelay: 0.3,
      ptzZoomShow: !1,
      ptzApertureShow: !1,
      ptzFocusShow: !1,
      ptzMoreArrowShow: !1,
      weiXinInAndroidAudioBufferSize: 4800,
      isCrypto: !1,
      isM7sCrypto: !1,
      isSm4Crypto: !1,
      sm4CryptoKey: '',
      cryptoKey: '',
      cryptoIV: '',
      cryptoKeyUrl: '',
      autoResize: !1,
      useWebFullScreen: !1,
      ptsMaxDiff: 3600,
      aiFaceDetectLevel: 2,
      aiFaceDetectWidth: 240,
      aiFaceDetectShowRect: !0,
      aiFaceDetectInterval: 1e3,
      aiFaceDetectRectConfig: {},
      aiObjectDetectLevel: 2,
      aiObjectDetectWidth: 240,
      aiObjectDetectShowRect: !0,
      aiObjectDetectInterval: 1e3,
      aiObjectDetectRectConfig: {},
      videoRenderSupportScale: !0,
      mediaSourceTsIsMaxDiffReplay: !0,
      controlHtml: '',
      isH265: !1,
      isWebrtcH265: !1,
      supportLockScreenPlayAudio: !0,
      supportHls265: !1,
      isEmitSEI: !1,
      pauseAndNextPlayUseLastFrameShow: !1,
      demuxUseWorker: !1,
      playFailedAndPausedReplay: !1,
      videoElementPlayingFailedReplay: !0,
      mp4RecordUseWasm: !0,
      mseAutoCleanupSourceBuffer: !0,
      mseAutoCleanupMaxBackwardDuration: 30,
      mseAutoCleanupMinBackwardDuration: 10,
      isNewMseDecoder: !1,
    },
    fe = 'initVideo',
    V = 'render',
    pe = 'playAudio',
    ce = 'videoCode',
    me = 'videoCodec',
    $ = 'workerFetch',
    _e = 'streamEnd',
    ge = 'streamAbps',
    j = 'streamVbps',
    W = 'streamDts',
    ye = 'streamSuccess',
    Y = 'fetchError',
    q = { h264: 'H264(AVC)', h265: 'H265(HEVC)' },
    K = { AAC: 10, ALAW: 7, MULAW: 8, MP3: 2 },
    X = {
      sps: 7,
      pps: 8,
      iFrame: 5,
      kUnspecified: 0,
      kSliceNonIDR: 1,
      kSliceDPA: 2,
      kSliceDPB: 3,
      kSliceDPC: 4,
      kSliceIDR: 5,
      kSliceSEI: 6,
      kSliceSPS: 7,
      kSlicePPS: 8,
      kSliceAUD: 9,
      kEndOfSequence: 10,
      kEndOfStream: 11,
      kFiller: 12,
      kSPSExt: 13,
      kReserved0: 14,
    },
    Z = { vps: 32, sps: 33, pps: 34, sei: 39, prefixSei: 39, suffixSei: 40 },
    be = { h264: 'avc', h265: 'hevc' },
    ve = 'AbortError',
    b = { sequenceHeader: 0, nalu: 1 },
    v = { keyFrame: 1, interFrame: 2 };
  function we(e) {
    return Se(e) && e[1] === b.sequenceHeader;
  }
  function Se(e) {
    return e[0] >> 4 === K.AAC;
  }
  m(function (e) {
    var a, t, o, r, i;
    (a =
      'undefined' != typeof window && void 0 !== global.document
        ? global.document
        : {}),
      (t = e.exports),
      (o = (function () {
        for (
          var e,
            t = [
              [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror',
              ],
              [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror',
              ],
              [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror',
              ],
              [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror',
              ],
              [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError',
              ],
            ],
            r = 0,
            i = t.length,
            s = {};
          r < i;
          r++
        )
          if ((e = t[r]) && e[1] in a) {
            for (r = 0; r < e.length; r++) s[t[0][r]] = e[r];
            return s;
          }
        return !1;
      })()),
      (r = { change: o.fullscreenchange, error: o.fullscreenerror }),
      (i = {
        request: function (s, n) {
          return new Promise(
            function (e, t) {
              var r = function () {
                  this.off('change', r), e();
                }.bind(this),
                i =
                  (this.on('change', r),
                  (s = s || a.documentElement)[o.requestFullscreen](n));
              i instanceof Promise && i.then(r).catch(t);
            }.bind(this)
          );
        },
        exit: function () {
          return new Promise(
            function (e, t) {
              var r, i;
              this.isFullscreen
                ? ((r = function () {
                    this.off('change', r), e();
                  }.bind(this)),
                  this.on('change', r),
                  (i = a[o.exitFullscreen]()) instanceof Promise &&
                    i.then(r).catch(t))
                : e();
            }.bind(this)
          );
        },
        toggle: function (e, t) {
          return this.isFullscreen ? this.exit() : this.request(e, t);
        },
        onchange: function (e) {
          this.on('change', e);
        },
        onerror: function (e) {
          this.on('error', e);
        },
        on: function (e, t) {
          e = r[e];
          e && a.addEventListener(e, t, !1);
        },
        off: function (e, t) {
          e = r[e];
          e && a.removeEventListener(e, t, !1);
        },
        raw: o,
      }),
      o
        ? (Object.defineProperties(i, {
            isFullscreen: {
              get: function () {
                return Boolean(a[o.fullscreenElement]);
              },
            },
            element: {
              enumerable: !0,
              get: function () {
                return a[o.fullscreenElement];
              },
            },
            isEnabled: {
              enumerable: !0,
              get: function () {
                return Boolean(a[o.fullscreenEnabled]);
              },
            },
          }),
          t ? (e.exports = i) : (global.screenfull = i))
        : t
        ? (e.exports = { isEnabled: !1 })
        : (global.screenfull = { isEnabled: !1 });
  }).isEnabled;
  const Ee = [
    96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3,
    7350,
  ];
  function J() {
    return new Date().getTime();
  }
  function Ue() {
    return (
      performance && 'function' == typeof performance.now ? performance : Date
    ).now();
  }
  function Q(e) {
    return null == e;
  }
  function xe(e) {
    e.close();
  }
  function Be(r, i) {
    let s = (r = i ? r.filter((e) => e.type === i) : r)[0],
      n = null,
      e = 1;
    var t;
    if (
      (0 < r.length && (t = r[1]) && 1e5 < t.ts - s.ts && ((s = t), (e = 2)), s)
    )
      for (let t = e; t < r.length; t++) {
        let e = r[t];
        !(e = i && e.type !== i ? null : e) ||
          (1e3 <= e.ts - s.ts && r[t - 1].ts - s.ts < 1e3 && (n = t + 1));
      }
    return n;
  }
  function ee(e) {
    return e[0] >> 4 === v.keyFrame && e[1] === b.sequenceHeader;
  }
  function te(e) {
    return !0 === e || 'true' === e;
  }
  function Ae(e) {
    return !0 !== e && 'true' !== e;
  }
  try {
    if (
      'object' == typeof WebAssembly &&
      'function' == typeof WebAssembly.instantiate
    ) {
      var w = new WebAssembly.Module(
        Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
      );
      if (w instanceof WebAssembly.Module)
        new WebAssembly.Instance(w) instanceof WebAssembly.Instance;
    }
  } catch (e) {}
  const S = Symbol(32),
    F = Symbol(16),
    D = Symbol(8);
  class re {
    constructor(e) {
      (this.g = e), (this.consumed = 0), e && (this.need = e.next().value);
    }
    setG(e) {
      (this.g = e), this.demand(e.next().value, !0);
    }
    consume() {
      this.buffer &&
        this.consumed &&
        (this.buffer.copyWithin(0, this.consumed),
        (this.buffer = this.buffer.subarray(
          0,
          this.buffer.length - this.consumed
        )),
        (this.consumed = 0));
    }
    demand(e, t) {
      return t && this.consume(), (this.need = e), this.flush();
    }
    read(r) {
      return (
        (e = this),
        (l = function* () {
          return (
            this.lastReadPromise && (yield this.lastReadPromise),
            (this.lastReadPromise = new Promise((t, e) => {
              (this.reject = e),
                (this.resolve = (e) => {
                  delete this.lastReadPromise,
                    delete this.resolve,
                    delete this.need,
                    t(e);
                }),
                this.demand(r, !0) ||
                  null == (e = this.pull) ||
                  e.call(this, r);
            }))
          );
        }),
        new (o = (o = a = void 0) || Promise)(function (r, t) {
          function i(e) {
            try {
              n(l.next(e));
            } catch (e) {
              t(e);
            }
          }
          function s(e) {
            try {
              n(l.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function n(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof o
                  ? t
                  : new o(function (e) {
                      e(t);
                    })
                ).then(i, s);
          }
          n((l = l.apply(e, a || [])).next());
        })
      );
      var e, a, o, l;
    }
    readU32() {
      return this.read(S);
    }
    readU16() {
      return this.read(F);
    }
    readU8() {
      return this.read(D);
    }
    close() {
      var e;
      this.g && this.g.return(),
        this.buffer && this.buffer.subarray(0, 0),
        null != (e = this.reject) && e.call(this, new Error('EOF')),
        delete this.lastReadPromise;
    }
    flush() {
      if (this.buffer && this.need) {
        let e = null;
        const i = this.buffer.subarray(this.consumed);
        let t = 0;
        var r = (e) => i.length < (t = e);
        if ('number' == typeof this.need) {
          if (r(this.need)) return;
          e = i.subarray(0, t);
        } else if (this.need === S) {
          if (r(4)) return;
          e = (i[0] << 24) | (i[1] << 16) | (i[2] << 8) | i[3];
        } else if (this.need === F) {
          if (r(2)) return;
          e = (i[0] << 8) | i[1];
        } else if (this.need === D) {
          if (r(1)) return;
          e = i[0];
        } else if ('buffer' in this.need) {
          if ('byteOffset' in this.need) {
            if (r(this.need.byteLength - this.need.byteOffset)) return;
            new Uint8Array(this.need.buffer, this.need.byteOffset).set(
              i.subarray(0, t)
            ),
              (e = this.need);
          } else if (this.g)
            return void this.g.throw(new Error('Unsupported type'));
        } else {
          if (r(this.need.byteLength)) return;
          new Uint8Array(this.need).set(i.subarray(0, t)), (e = this.need);
        }
        return (
          (this.consumed += t),
          this.g
            ? this.demand(this.g.next(e).value, !0)
            : this.resolve && this.resolve(e),
          e
        );
      }
    }
    write(e) {
      if (
        (e instanceof Uint8Array
          ? this.malloc(e.length).set(e)
          : 'buffer' in e
          ? this.malloc(e.byteLength).set(
              new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            )
          : this.malloc(e.byteLength).set(new Uint8Array(e)),
        !this.g && !this.resolve)
      )
        return new Promise((e) => (this.pull = e));
      this.flush();
    }
    writeU32(e) {
      this.malloc(4).set([
        (e >> 24) & 255,
        (e >> 16) & 255,
        (e >> 8) & 255,
        255 & e,
      ]),
        this.flush();
    }
    writeU16(e) {
      this.malloc(2).set([(e >> 8) & 255, 255 & e]), this.flush();
    }
    writeU8(e) {
      (this.malloc(1)[0] = e), this.flush();
    }
    malloc(e) {
      if (this.buffer) {
        var t = this.buffer.length,
          r = t + e;
        if (r <= this.buffer.buffer.byteLength - this.buffer.byteOffset)
          this.buffer = new Uint8Array(
            this.buffer.buffer,
            this.buffer.byteOffset,
            r
          );
        else {
          const e = new Uint8Array(r);
          e.set(this.buffer), (this.buffer = e);
        }
        return this.buffer.subarray(t, r);
      }
      return (this.buffer = new Uint8Array(e)), this.buffer;
    }
  }
  (re.U32 = S), (re.U16 = F), (re.U8 = D);
  class ke {
    constructor(n) {
      (this.log = function (e) {
        if (n._opt.debug && n._opt.debugLevel == g) {
          for (
            var t = n._opt.debugUuid ? `[${n._opt.debugUuid}]` : '',
              r = arguments.length,
              i = new Array(1 < r ? r - 1 : 0),
              s = 1;
            s < r;
            s++
          )
            i[s - 1] = arguments[s];
          console.log(`JbPro${t}[✅✅✅][${e}]`, ...i);
        }
      }),
        (this.warn = function (e) {
          if (
            n._opt.debug &&
            (n._opt.debugLevel == g || n._opt.debugLevel == y)
          ) {
            for (
              var t = n._opt.debugUuid ? `[${n._opt.debugUuid}]` : '',
                r = arguments.length,
                i = new Array(1 < r ? r - 1 : 0),
                s = 1;
              s < r;
              s++
            )
              i[s - 1] = arguments[s];
            console.log(`JbPro${t}[❗❗❗][${e}]`, ...i);
          }
        }),
        (this.error = function (e) {
          for (
            var t = n._opt.debugUuid ? `[${n._opt.debugUuid}]` : '',
              r = arguments.length,
              i = new Array(1 < r ? r - 1 : 0),
              s = 1;
            s < r;
            s++
          )
            i[s - 1] = arguments[s];
          console.error(`JbPro${t}[❌❌❌][${e}]`, ...i);
        });
    }
  }
  class ie {
    constructor(e) {
      (this._buffer = e),
        (this._buffer_index = 0),
        (this._total_bytes = e.byteLength),
        (this._total_bits = 8 * e.byteLength),
        (this._current_word = 0),
        (this._current_word_bits_left = 0);
    }
    destroy() {
      this._buffer = null;
    }
    _fillCurrentWord() {
      var e,
        t = this._total_bytes - this._buffer_index;
      t <= 0
        ? console.error(
            'ExpGolomb: _fillCurrentWord() but no bytes available',
            this._total_bytes,
            this._buffer_index
          )
        : ((t = Math.min(4, t)),
          (e = new Uint8Array(4)).set(
            this._buffer.subarray(this._buffer_index, this._buffer_index + t)
          ),
          (this._current_word = new DataView(e.buffer).getUint32(0, !1)),
          (this._buffer_index += t),
          (this._current_word_bits_left = 8 * t));
    }
    readBits(e) {
      var t, r;
      return (
        32 < e &&
          console.error('ExpGolomb: readBits() bits exceeded max 32bits!'),
        e <= this._current_word_bits_left
          ? ((t = this._current_word >>> (32 - e)),
            (this._current_word <<= e),
            (this._current_word_bits_left -= e),
            t)
          : ((t = this._current_word_bits_left ? this._current_word : 0),
            (t >>>= 32 - this._current_word_bits_left),
            (e = e - this._current_word_bits_left),
            this._fillCurrentWord(),
            (e = Math.min(e, this._current_word_bits_left)),
            (r = this._current_word >>> (32 - e)),
            (this._current_word <<= e),
            (this._current_word_bits_left -= e),
            (t << e) | r)
      );
    }
    readBool() {
      return 1 === this.readBits(1);
    }
    readByte() {
      return this.readBits(8);
    }
    _skipLeadingZero() {
      let e;
      for (e = 0; e < this._current_word_bits_left; e++)
        if (this._current_word & (2147483648 >>> e))
          return (
            (this._current_word <<= e), (this._current_word_bits_left -= e), e
          );
      return this._fillCurrentWord(), e + this._skipLeadingZero();
    }
    readUEG() {
      var e = this._skipLeadingZero();
      return this.readBits(e + 1) - 1;
    }
    readSEG() {
      var e = this.readUEG();
      return 1 & e ? (e + 1) >>> 1 : -1 * (e >>> 1);
    }
  }
  class I {
    static _ebsp2rbsp(e) {
      let t = e,
        r = t.byteLength,
        i = new Uint8Array(r),
        s = 0;
      for (let e = 0; e < r; e++)
        (2 <= e && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2]) ||
          ((i[s] = t[e]), s++);
      return new Uint8Array(i.buffer, 0, s);
    }
    static parseSPS(e) {
      let t = I._ebsp2rbsp(e),
        r = new ie(t);
      r.readByte();
      var e = r.readByte(),
        i = (r.readByte(), r.readByte());
      r.readUEG();
      let s = I.getProfileString(e),
        n = I.getLevelString(i),
        a = 1,
        o = 420,
        l = 8;
      if (
        (100 === e ||
          110 === e ||
          122 === e ||
          244 === e ||
          44 === e ||
          83 === e ||
          86 === e ||
          118 === e ||
          128 === e ||
          138 === e ||
          144 === e) &&
        (3 === (a = r.readUEG()) && r.readBits(1),
        a <= 3 && (o = [0, 420, 422, 444][a]),
        (l = r.readUEG() + 8),
        r.readUEG(),
        r.readBits(1),
        r.readBool())
      ) {
        var d = 3 !== a ? 8 : 12;
        for (let e = 0; e < d; e++)
          r.readBool() &&
            (e < 6 ? I._skipScalingList(r, 16) : I._skipScalingList(r, 64));
      }
      r.readUEG();
      i = r.readUEG();
      if (0 === i) r.readUEG();
      else if (1 === i) {
        r.readBits(1), r.readSEG(), r.readSEG();
        var h = r.readUEG();
        for (let e = 0; e < h; e++) r.readSEG();
      }
      var e = r.readUEG(),
        i = (r.readBits(1), r.readUEG()),
        u = r.readUEG(),
        f = r.readBits(1);
      0 === f && r.readBits(1), r.readBits(1);
      let p = 0,
        c = 0,
        m = 0,
        _ = 0,
        g =
          (r.readBool() &&
            ((p = r.readUEG()),
            (c = r.readUEG()),
            (m = r.readUEG()),
            (_ = r.readUEG())),
          1),
        y = 1,
        b = 0,
        v = !0,
        w = 0,
        S = 0,
        E =
          (r.readBool() &&
            (r.readBool() &&
              (0 < (A = r.readByte()) && A < 16
                ? ((g = [
                    1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2,
                  ][A - 1]),
                  (y = [
                    1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1,
                  ][A - 1]))
                : 255 === A &&
                  ((g = (r.readByte() << 8) | r.readByte()),
                  (y = (r.readByte() << 8) | r.readByte()))),
            r.readBool() && r.readBool(),
            r.readBool() && (r.readBits(4), r.readBool()) && r.readBits(24),
            r.readBool() && (r.readUEG(), r.readUEG()),
            r.readBool()) &&
            ((A = r.readBits(32)),
            (B = r.readBits(32)),
            (v = r.readBool()),
            (w = B),
            (S = 2 * A),
            (b = w / S)),
          1),
        U = ((1 === g && 1 === y) || (E = g / y), 0),
        x = 0;
      x =
        0 === a
          ? ((U = 1), 2 - f)
          : ((U = 3 === a ? 1 : 2), (1 === a ? 2 : 1) * (2 - f));
      var B = 16 * (i + 1),
        A = 16 * (u + 1) * (2 - f),
        i = ((B -= (p + c) * U), (A -= (m + _) * x), Math.ceil(B * E));
      return (
        r.destroy(),
        (r = null),
        {
          profile_string: s,
          level_string: n,
          bit_depth: l,
          ref_frames: e,
          chroma_format: o,
          chroma_format_string: I.getChromaFormatString(o),
          frame_rate: { fixed: v, fps: b, fps_den: S, fps_num: w },
          sar_ratio: { width: g, height: y },
          codec_size: { width: B, height: A },
          present_size: { width: i, height: A },
        }
      );
    }
    static parseSPS$2(e) {
      let r = e.subarray(1, 4),
        i = 'avc1.';
      for (let t = 0; t < 3; t++) {
        let e = r[t].toString(16);
        e.length < 2 && (e = '0' + e), (i += e);
      }
      let t = I._ebsp2rbsp(e),
        s = new ie(t);
      s.readByte();
      var e = s.readByte(),
        n = (s.readByte(), s.readByte());
      s.readUEG();
      let a = I.getProfileString(e),
        o = I.getLevelString(n),
        l = 1,
        d = 420,
        h = 8,
        u = 8;
      if (
        (100 === e ||
          110 === e ||
          122 === e ||
          244 === e ||
          44 === e ||
          83 === e ||
          86 === e ||
          118 === e ||
          128 === e ||
          138 === e ||
          144 === e) &&
        (3 === (l = s.readUEG()) && s.readBits(1),
        l <= 3 && (d = [0, 420, 422, 444][l]),
        (h = s.readUEG() + 8),
        (u = s.readUEG() + 8),
        s.readBits(1),
        s.readBool())
      ) {
        var f = 3 !== l ? 8 : 12;
        for (let e = 0; e < f; e++)
          s.readBool() &&
            (e < 6 ? I._skipScalingList(s, 16) : I._skipScalingList(s, 64));
      }
      s.readUEG();
      var p = s.readUEG();
      if (0 === p) s.readUEG();
      else if (1 === p) {
        s.readBits(1), s.readSEG(), s.readSEG();
        var c = s.readUEG();
        for (let e = 0; e < c; e++) s.readSEG();
      }
      var p = s.readUEG(),
        m = (s.readBits(1), s.readUEG()),
        _ = s.readUEG(),
        g = s.readBits(1);
      0 === g && s.readBits(1), s.readBits(1);
      let y = 0,
        b = 0,
        v = 0,
        w = 0,
        S =
          (s.readBool() &&
            ((y = s.readUEG()),
            (b = s.readUEG()),
            (v = s.readUEG()),
            (w = s.readUEG())),
          1),
        E = 1,
        U = 0,
        x = !0,
        B = 0,
        A = 0,
        k =
          (s.readBool() &&
            (s.readBool() &&
              (0 < (D = s.readByte()) && D < 16
                ? ((S = [
                    1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2,
                  ][D - 1]),
                  (E = [
                    1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1,
                  ][D - 1]))
                : 255 === D &&
                  ((S = (s.readByte() << 8) | s.readByte()),
                  (E = (s.readByte() << 8) | s.readByte()))),
            s.readBool() && s.readBool(),
            s.readBool() && (s.readBits(4), s.readBool()) && s.readBits(24),
            s.readBool() && (s.readUEG(), s.readUEG()),
            s.readBool()) &&
            ((D = s.readBits(32)),
            (F = s.readBits(32)),
            (x = s.readBool()),
            (B = F),
            (A = 2 * D),
            (U = B / A)),
          1),
        T = ((1 === S && 1 === E) || (k = S / E), 0),
        C = 0;
      C =
        0 === l
          ? ((T = 1), 2 - g)
          : ((T = 3 === l ? 1 : 2), (1 === l ? 2 : 1) * (2 - g));
      var F = 16 * (m + 1),
        D = 16 * (_ + 1) * (2 - g),
        m = ((F -= (y + b) * T), (D -= (v + w) * C), Math.ceil(F * k));
      return (
        s.destroy(),
        (s = null),
        {
          codec_mimetype: i,
          profile_idc: e,
          level_idc: n,
          profile_string: a,
          level_string: o,
          chroma_format_idc: l,
          bit_depth: h,
          bit_depth_luma: h,
          bit_depth_chroma: u,
          ref_frames: p,
          chroma_format: d,
          chroma_format_string: I.getChromaFormatString(d),
          frame_rate: { fixed: x, fps: U, fps_den: A, fps_num: B },
          sar_ratio: { width: S, height: E },
          codec_size: { width: F, height: D },
          present_size: { width: m, height: D },
        }
      );
    }
    static _skipScalingList(t, r) {
      let i = 8,
        s = 8,
        n;
      for (let e = 0; e < r; e++)
        0 !== s && ((n = t.readSEG()), (s = (i + n + 256) % 256)),
          (i = 0 === s ? i : s);
    }
    static getProfileString(e) {
      switch (e) {
        case 66:
          return 'Baseline';
        case 77:
          return 'Main';
        case 88:
          return 'Extended';
        case 100:
          return 'High';
        case 110:
          return 'High10';
        case 122:
          return 'High422';
        case 244:
          return 'High444';
        default:
          return 'Unknown';
      }
    }
    static getLevelString(e) {
      return (e / 10).toFixed(1);
    }
    static getChromaFormatString(e) {
      switch (e) {
        case 420:
          return '4:2:0';
        case 422:
          return '4:2:2';
        case 444:
          return '4:4:4';
        default:
          return 'Unknown';
      }
    }
  }
  class Te {
    constructor(e) {
      (this.buffer = e),
        (this.buflen = e.length),
        (this.bufpos = 0),
        (this.bufoff = 0),
        (this.iserro = !1);
    }
    read(e) {
      let t = 0,
        r;
      for (; e; ) {
        if (e < 0 || this.bufpos >= this.buflen) return (this.iserro = !0), 0;
        (this.iserro = !1),
          (r = 8 < this.bufoff + e ? 8 - this.bufoff : e),
          (t =
            (t <<= r) +
            ((this.buffer[this.bufpos] >> (8 - this.bufoff - r)) &
              (255 >> (8 - r)))),
          (this.bufoff += r),
          (e -= r),
          8 == this.bufoff && (this.bufpos++, (this.bufoff = 0));
      }
      return t;
    }
    look(e) {
      var t = this.bufpos,
        r = this.bufoff,
        e = this.read(e);
      return (this.bufpos = t), (this.bufoff = r), e;
    }
    read_golomb() {
      let e;
      for (e = 0; 0 === this.read(1) && !this.iserro; e++);
      return (1 << e) + this.read(e) - 1;
    }
  }
  function Ce(t) {
    const s = {},
      r = new DataView(t.buffer);
    let e = r.getUint8(0),
      i = r.getUint8(1);
    if ((r.getUint8(2), r.getUint8(3), 1 !== e || 0 === i)) return {};
    var n = 1 + (3 & r.getUint8(4));
    if (3 != n && 4 != n) return {};
    var a = 31 & r.getUint8(5);
    if (0 == a) return {};
    let o = 6;
    for (let e = 0; e < a; e++) {
      var l = r.getUint16(o, !1);
      if (((o += 2), 0 !== l)) {
        var d = new Uint8Array(t.buffer, o, l),
          l = ((o += l), I.parseSPS(d));
        if (0 === e) {
          (s.sps = d),
            (s.timescale = 1e3),
            (s.codecWidth = l.codec_size.width),
            (s.codecHeight = l.codec_size.height),
            (s.presentWidth = l.present_size.width),
            (s.presentHeight = l.present_size.height),
            (s.profile = l.profile_string),
            (s.level = l.level_string),
            (s.bitDepth = l.bit_depth),
            (s.chromaFormat = l.chroma_format),
            (s.sarRatio = l.sar_ratio),
            (s.frameRate = l.frame_rate),
            (!1 !== l.frame_rate.fixed &&
              0 !== l.frame_rate.fps_num &&
              0 !== l.frame_rate.fps_den) ||
              (s.frameRate = {
                fixed: !0,
                fps: 23.976,
                fps_num: 23976,
                fps_den: 1e3,
              });
          var l = s.frameRate.fps_den,
            h = s.frameRate.fps_num;
          s.refSampleDuration = s.timescale * (l / h);
          let r = d.subarray(1, 4),
            i = 'avc1.';
          for (let t = 0; t < 3; t++) {
            let e = r[t].toString(16);
            e.length < 2 && (e = '0' + e), (i += e);
          }
          s.codec = i;
        }
      }
    }
    var u = r.getUint8(o);
    if (0 === u) return {};
    o++;
    for (let e = 0; e < u; e++) {
      var f,
        p = r.getUint16(o, !1);
      (o += 2),
        0 !== p &&
          ((f = new Uint8Array(t.buffer, o, p)), (o += p), (s.pps = f));
    }
    if (((s.videoType = 'avc'), s.sps)) {
      const t = s.sps.byteLength,
        r = new Uint8Array([
          (t >>> 24) & 255,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ]),
        e = new Uint8Array(t + 4);
      e.set(r, 0), e.set(s.sps, 4), (s.sps = e);
    }
    if (s.pps) {
      const t = s.pps.byteLength,
        r = new Uint8Array([
          (t >>> 24) & 255,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ]),
        e = new Uint8Array(t + 4);
      e.set(r, 0), e.set(s.pps, 4), (s.pps = e);
    }
    return s;
  }
  function Fe(e) {
    var { sps: e, pps: t } = e,
      r = [23, 0, 0, 0, 0, 1, 66, 0, 30, 255];
    return (
      (r[0] = 23),
      (r[6] = e[1]),
      (r[7] = e[2]),
      (r[8] = e[3]),
      (r[10] = 225),
      (r[11] = (e.byteLength >> 8) & 255),
      (r[12] = 255 & e.byteLength),
      r.push(...e, 1, (t.byteLength >> 8) & 255, 255 & t.byteLength, ...t),
      new Uint8Array(r)
    );
  }
  function De(e, t) {
    var r = [],
      t =
        ((r[0] = t ? 23 : 39),
        (r[1] = 1),
        (r[2] = 0),
        (r[3] = 0),
        (r[4] = 0),
        new Uint8Array(r.length + e.byteLength));
    return t.set(r, 0), t.set(e, r.length), t;
  }
  function se(e) {
    return 31 & e[0];
  }
  function Ie(e) {
    return e === X.kSliceSEI;
  }
  function Pe(e) {
    return (t = e) !== X.sps && t !== X.pps && !Ie(e);
    var t;
  }
  function Le(e) {
    return e === X.iFrame;
  }
  const ze = (e) => {
      let t = e,
        r = t.byteLength,
        i = new Uint8Array(r),
        s = 0;
      for (let e = 0; e < r; e++)
        (2 <= e && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2]) ||
          ((i[s] = t[e]), s++);
      return new Uint8Array(i.buffer, 0, s);
    },
    P = (e) => {
      let t = ze(e),
        n = new ie(t),
        r = (n.readByte(), n.readByte(), 0),
        i = 0,
        s = 0,
        a = 0;
      n.readBits(4);
      var o = n.readBits(3),
        e = (n.readBool(), n.readBits(2)),
        l = n.readBool(),
        d = n.readBits(5),
        h = n.readByte(),
        u = n.readByte(),
        f = n.readByte(),
        p = n.readByte(),
        c = n.readByte(),
        m = n.readByte(),
        _ = n.readByte(),
        z = n.readByte(),
        R = n.readByte(),
        M = n.readByte(),
        g = n.readByte(),
        y = [],
        N = [];
      for (let e = 0; e < o; e++) y.push(n.readBool()), N.push(n.readBool());
      if (0 < o) for (let e = o; e < 8; e++) n.readBits(2);
      for (let e = 0; e < o; e++)
        y[e] &&
          (n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte(),
          n.readByte()),
          y[e] && n.readByte();
      n.readUEG();
      var b,
        v = n.readUEG(),
        O = (3 == v && n.readBits(1), n.readUEG()),
        G = n.readUEG(),
        w =
          (n.readBool() &&
            ((r += n.readUEG()),
            (i += n.readUEG()),
            (s += n.readUEG()),
            (a += n.readUEG())),
          n.readUEG()),
        H = n.readUEG(),
        V = n.readUEG();
      for (let e = n.readBool() ? 0 : o; e <= o; e++)
        n.readUEG(), n.readUEG(), n.readUEG();
      if (
        (n.readUEG(),
        n.readUEG(),
        n.readUEG(),
        n.readUEG(),
        n.readUEG(),
        n.readUEG(),
        n.readBool() && n.readBool())
      )
        for (let t = 0; t < 4; t++)
          for (let e = 0; e < (3 === t ? 2 : 6); e++)
            if (n.readBool()) {
              var $ = Math.min(64, 1 << (4 + (t << 1)));
              1 < t && n.readSEG();
              for (let e = 0; e < $; e++) n.readSEG();
            } else n.readUEG();
      n.readBool(),
        n.readBool(),
        n.readBool() && (n.readByte(), n.readUEG(), n.readUEG(), n.readBool());
      let S = n.readUEG(),
        E = 0;
      for (let t = 0; t < S; t++) {
        let e = !1;
        if ((e = 0 !== t ? n.readBool() : e)) {
          t === S && n.readUEG(), n.readBool(), n.readUEG();
          let r = 0;
          for (let e = 0; e <= E; e++) {
            let e = n.readBool(),
              t = !1;
            e || (t = n.readBool()), (e || t) && r++;
          }
          E = r;
        } else {
          var U = n.readUEG(),
            x = n.readUEG();
          E = U + x;
          for (let e = 0; e < U; e++) n.readUEG(), n.readBool();
          for (let e = 0; e < x; e++) n.readUEG(), n.readBool();
        }
      }
      if (n.readBool()) {
        var j = n.readUEG();
        for (let e = 0; e < j; e++) {
          for (let e = 0; e < V + 4; e++) n.readBits(1);
          n.readBits(1);
        }
      }
      let B = 0,
        A = 1,
        k = 1,
        T = !1,
        C = 1,
        F = 1;
      if ((n.readBool(), n.readBool(), n.readBool())) {
        if (
          (n.readBool() &&
            (0 < (b = n.readByte()) && b < 16
              ? ((A = [
                  1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2,
                ][b - 1]),
                (k = [
                  1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1,
                ][b - 1]))
              : 255 === b && ((A = n.readBits(16)), (k = n.readBits(16)))),
          n.readBool() && n.readBool(),
          n.readBool() &&
            (n.readBits(3), n.readBool(), n.readBool()) &&
            (n.readByte(), n.readByte(), n.readByte()),
          n.readBool() && (n.readUEG(), n.readUEG()),
          n.readBool(),
          n.readBool(),
          n.readBool(),
          n.readBool() &&
            ((r += n.readUEG()),
            (i += n.readUEG()),
            (s += n.readUEG()),
            (a += n.readUEG())),
          n.readBool() &&
            ((C = n.readBits(32)), (F = n.readBits(32)), n.readBool()) &&
            (n.readUEG(), n.readBool()))
        ) {
          let r,
            i,
            s = !1;
          (r = n.readBool()),
            (i = n.readBool()),
            (r || i) &&
              ((s = n.readBool()) &&
                (n.readByte(), n.readBits(5), n.readBool(), n.readBits(5)),
              n.readBits(4),
              n.readBits(4),
              s && n.readBits(4),
              n.readBits(5),
              n.readBits(5),
              n.readBits(5));
          for (let e = 0; e <= o; e++) {
            var D = n.readBool();
            T = D;
            let e = !1,
              t = !1;
            if (
              ((e = D ? e : n.readBool()) ? n.readSEG() : (t = n.readBool()),
              t || (cpbcnt = n.readUEG() + 1),
              r)
            )
              for (let e = 0; e < 1; e++)
                n.readUEG(), n.readUEG(), s && (n.readUEG(), n.readUEG());
            if (i)
              for (let e = 0; e < 1; e++)
                n.readUEG(), n.readUEG(), s && (n.readUEG(), n.readUEG());
          }
        }
        n.readBool() &&
          (n.readBool(),
          n.readBool(),
          n.readBool(),
          (B = n.readUEG()),
          n.readUEG(),
          n.readUEG(),
          n.readUEG(),
          n.readUEG());
      }
      n.readBool();
      let W = `hvc1.${d}.1.L${g}.B0`,
        I = O,
        P = G,
        L = 1;
      return (
        1 !== A && 1 !== k && (L = A / k),
        n.destroy(),
        (n = null),
        {
          codec_mimetype: W,
          level_string: (g / 30).toFixed(1),
          profile_idc: d,
          bit_depth: w + 8,
          ref_frames: 1,
          chroma_format: v,
          chroma_format_string: ((e) => {
            switch (e) {
              case 0:
                return '4:0:0';
              case 1:
                return '4:2:0';
              case 2:
                return '4:2:2';
              case 3:
                return '4:4:4';
              default:
                return 'Unknown';
            }
          })(v),
          general_level_idc: g,
          general_profile_space: e,
          general_tier_flag: l,
          general_profile_idc: d,
          general_profile_compatibility_flags_1: h,
          general_profile_compatibility_flags_2: u,
          general_profile_compatibility_flags_3: f,
          general_profile_compatibility_flags_4: p,
          general_constraint_indicator_flags_1: c,
          general_constraint_indicator_flags_2: m,
          general_constraint_indicator_flags_3: _,
          general_constraint_indicator_flags_4: z,
          general_constraint_indicator_flags_5: R,
          general_constraint_indicator_flags_6: M,
          min_spatial_segmentation_idc: B,
          constant_frame_rate: 0,
          chroma_format_idc: v,
          bit_depth_luma_minus8: w,
          bit_depth_chroma_minus8: H,
          frame_rate: { fixed: T, fps: F / C, fps_den: C, fps_num: F },
          sar_ratio: { width: A, height: k },
          codec_size: { width: I, height: P },
          present_size: { width: I * L, height: P },
        }
      );
    },
    L = (e) => {
      (e = ze(e)), (e = new ie(e));
      return (
        e.readByte(),
        e.readByte(),
        e.readBits(4),
        e.readBits(2),
        e.readBits(6),
        {
          num_temporal_layers: e.readBits(3) + 1,
          temporal_id_nested: e.readBool(),
        }
      );
    },
    z = (e) => {
      (e = ze(e)), (e = new ie(e));
      e.readByte(),
        e.readByte(),
        e.readUEG(),
        e.readUEG(),
        e.readBool(),
        e.readBool(),
        e.readBits(3),
        e.readBool(),
        e.readBool(),
        e.readUEG(),
        e.readUEG(),
        e.readSEG(),
        e.readBool(),
        e.readBool(),
        e.readBool() && e.readUEG(),
        e.readSEG(),
        e.readSEG(),
        e.readBool(),
        e.readBool(),
        e.readBool(),
        e.readBool();
      let t = e.readBool(),
        r = e.readBool(),
        i = 1;
      return (
        r && t ? (i = 0) : r ? (i = 3) : t && (i = 2), { parallelismType: i }
      );
    };
  function ne(e) {
    var t = e.byteLength,
      r = new Uint8Array(4),
      t =
        ((r[0] = (t >>> 24) & 255),
        (r[1] = (t >>> 16) & 255),
        (r[2] = (t >>> 8) & 255),
        (r[3] = 255 & t),
        new Uint8Array(t + 4));
    return t.set(r, 0), t.set(e, 4), t;
  }
  function Re(e) {
    var { vps: e, pps: t, sps: r } = e,
      i = { configurationVersion: 1 },
      s = L(e),
      n = P(r),
      a = z(t),
      i = Object.assign(i, s, n, a),
      s = 23 + (5 + e.byteLength) + (5 + r.byteLength) + (5 + t.byteLength),
      n = new Uint8Array(s),
      a =
        ((n[0] = 1),
        (n[1] =
          ((3 & i.general_profile_space) << 6) |
          ((i.general_tier_flag ? 1 : 0) << 5) |
          (31 & i.general_profile_idc)),
        (n[2] = i.general_profile_compatibility_flags_1 || 0),
        (n[3] = i.general_profile_compatibility_flags_2 || 0),
        (n[4] = i.general_profile_compatibility_flags_3 || 0),
        (n[5] = i.general_profile_compatibility_flags_4 || 0),
        (n[6] = i.general_constraint_indicator_flags_1 || 0),
        (n[7] = i.general_constraint_indicator_flags_2 || 0),
        (n[8] = i.general_constraint_indicator_flags_3 || 0),
        (n[9] = i.general_constraint_indicator_flags_4 || 0),
        (n[10] = i.general_constraint_indicator_flags_5 || 0),
        (n[11] = i.general_constraint_indicator_flags_6 || 0),
        (n[12] = 60),
        (n[13] = 240 | ((3840 & i.min_spatial_segmentation_idc) >> 8)),
        (n[14] = 255 & i.min_spatial_segmentation_idc),
        (n[15] = 252 | (3 & i.parallelismType)),
        (n[16] = 252 | (3 & i.chroma_format_idc)),
        (n[17] = 248 | (7 & i.bit_depth_luma_minus8)),
        (n[18] = 248 | (7 & i.bit_depth_chroma_minus8)),
        (n[19] = 0),
        (n[20] = 0),
        (n[21] =
          ((3 & i.constant_frame_rate) << 6) |
          ((7 & i.num_temporal_layers) << 3) |
          ((i.temporal_id_nested ? 1 : 0) << 2) |
          3),
        (n[22] = 3),
        (n[23] = 128 | Z.vps),
        (n[24] = 0),
        (n[25] = 1),
        (n[26] = (65280 & e.byteLength) >> 8),
        (n[27] = 255 & e.byteLength),
        n.set(e, 28),
        (n[23 + (5 + e.byteLength) + 0] = 128 | Z.sps),
        (n[23 + (5 + e.byteLength) + 1] = 0),
        (n[23 + (5 + e.byteLength) + 2] = 1),
        (n[23 + (5 + e.byteLength) + 3] = (65280 & r.byteLength) >> 8),
        (n[23 + (5 + e.byteLength) + 4] = 255 & r.byteLength),
        n.set(r, 23 + (5 + e.byteLength) + 5),
        (n[23 + (5 + e.byteLength + 5 + r.byteLength) + 0] = 128 | Z.pps),
        (n[23 + (5 + e.byteLength + 5 + r.byteLength) + 1] = 0),
        (n[23 + (5 + e.byteLength + 5 + r.byteLength) + 2] = 1),
        (n[23 + (5 + e.byteLength + 5 + r.byteLength) + 3] =
          (65280 & t.byteLength) >> 8),
        (n[23 + (5 + e.byteLength + 5 + r.byteLength) + 4] =
          255 & t.byteLength),
        n.set(t, 23 + (5 + e.byteLength + 5 + r.byteLength) + 5),
        [28, 0, 0, 0, 0]),
      s = new Uint8Array(a.length + n.byteLength);
    return s.set(a, 0), s.set(n, a.length), s;
  }
  function Me(e, t) {
    var r = [],
      t =
        ((r[0] = t ? 28 : 44),
        (r[1] = 1),
        (r[2] = 0),
        (r[3] = 0),
        (r[4] = 0),
        new Uint8Array(r.length + e.byteLength));
    return t.set(r, 0), t.set(e, r.length), t;
  }
  function ae(e) {
    return (126 & e[0]) >> 1;
  }
  function Ne(e) {
    return !(32 <= e && e <= 40);
  }
  function Oe(e) {
    return 16 <= e && e <= 21;
  }
  function R(e) {
    return parseInt(e) === e;
  }
  function M(e) {
    if (R(e.length)) {
      for (var t = 0; t < e.length; t++)
        if (!R(e[t]) || e[t] < 0 || 255 < e[t]) return;
      return 1;
    }
  }
  function n(e, t) {
    if (e.buffer && 'Uint8Array' === e.name)
      return (e = t
        ? e.slice
          ? e.slice()
          : Array.prototype.slice.call(e)
        : e);
    if (Array.isArray(e)) {
      if (M(e)) return new Uint8Array(e);
      throw new Error('Array contains invalid value: ' + e);
    }
    if (R(e.length) && M(e)) return new Uint8Array(e);
    throw new Error('unsupported array-like object');
  }
  function l(e) {
    return new Uint8Array(e);
  }
  function a(e, t, r, i, s) {
    (null == i && null == s) ||
      (e = e.slice ? e.slice(i, s) : Array.prototype.slice.call(e, i, s)),
      t.set(e, r);
  }
  var N,
    f = {
      toBytes: function (e) {
        var t = [],
          r = 0;
        for (e = encodeURI(e); r < e.length; ) {
          var i = e.charCodeAt(r++);
          37 === i
            ? (t.push(parseInt(e.substr(r, 2), 16)), (r += 2))
            : t.push(i);
        }
        return n(t);
      },
      fromBytes: function (e) {
        for (var t = [], r = 0; r < e.length; ) {
          var i = e[r];
          i < 128
            ? (t.push(String.fromCharCode(i)), r++)
            : 191 < i && i < 224
            ? (t.push(String.fromCharCode(((31 & i) << 6) | (63 & e[r + 1]))),
              (r += 2))
            : (t.push(
                String.fromCharCode(
                  ((15 & i) << 12) | ((63 & e[r + 1]) << 6) | (63 & e[r + 2])
                )
              ),
              (r += 3));
        }
        return t.join('');
      },
    },
    p =
      ((N = '0123456789abcdef'),
      {
        toBytes: function (e) {
          for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substr(r, 2), 16));
          return t;
        },
        fromBytes: function (e) {
          for (var t = [], r = 0; r < e.length; r++) {
            var i = e[r];
            t.push(N[(240 & i) >> 4] + N[15 & i]);
          }
          return t.join('');
        },
      }),
    O = { 16: 10, 24: 12, 32: 14 },
    G = [
      1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188,
      99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
    ],
    u = [
      99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118,
      202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114,
      192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49,
      21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117,
      9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83,
      209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208,
      239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81,
      163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210,
      205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115,
      96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219,
      224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121,
      231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
      186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138,
      112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158,
      225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40,
      223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187,
      22,
    ],
    d = [
      82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251,
      124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203,
      84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8,
      46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114,
      248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146,
      108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132,
      144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6,
      208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58,
      145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115,
      150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223,
      110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
      27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90,
      244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95,
      96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239,
      160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
      23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
    ],
    Ge = [
      3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157,
      3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757,
      3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813,
      2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307,
      1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063,
      3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618,
      1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420,
      3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767,
      134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841,
      168101135, 798661301, 235341577, 605164086, 461406363, 3756188221,
      3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174,
      1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627,
      2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
      1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264,
      3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945,
      1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235,
      3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509,
      293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160,
      2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528,
      93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503,
      2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118,
      3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505,
      899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354,
      2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664,
      427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963,
      193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017,
      3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070,
      336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085,
      3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207,
      4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028,
      2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743,
      3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501,
      4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599,
      2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021,
      1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956,
      3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891,
      1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535,
      664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707,
      2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602,
      3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671,
      1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982,
      3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163,
      2824099068, 1841019862, 739644986,
    ],
    He = [
      2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
      2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
      434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
      1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
      3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
      2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398,
      1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525,
      886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517,
      201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806,
      252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786,
      651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339,
      1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112,
      4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187,
      1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264,
      535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910,
      1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800,
      717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139,
      2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160,
      1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528,
      2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548,
      3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083,
      1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855,
      2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534,
      1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144,
      2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568,
      2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702,
      3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930,
      504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170,
      1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572,
      2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013,
      1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468,
      634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306,
      2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884,
      1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411,
      3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421,
      2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121,
      1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965,
      3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937,
      1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487,
      550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476,
      4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482,
      3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008,
      4238890068, 3597515707, 975967766,
    ],
    Ve = [
      1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307,
      1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347,
      4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298,
      3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232,
      2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228,
      1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518,
      911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325,
      3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077,
      67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926,
      84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826,
      3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539,
      745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552,
      1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067,
      795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
      4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910,
      961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
      4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
      2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
      1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568,
      2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668,
      3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003,
      3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855,
      2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534,
      1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744,
      2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008,
      2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782,
      1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090,
      169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650,
      3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972,
      2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893,
      3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908,
      3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946,
      2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164,
      3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131,
      3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261,
      1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081,
      895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045,
      2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777,
      3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927,
      3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796,
      2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242,
      1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488,
      1425844308, 3151392187, 372911126,
    ],
    $e = [
      1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062,
      1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422,
      4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983,
      3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547,
      2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643,
      1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788,
      909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625,
      3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962,
      67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071,
      84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791,
      3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989,
      741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667,
      1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797,
      791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
      4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535,
      960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
      4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
      2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
      1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408,
      2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563,
      3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573,
      3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230,
      2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284,
      1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344,
      2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123,
      2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087,
      1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700,
      168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855,
      3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747,
      2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873,
      3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523,
      3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511,
      2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419,
      3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126,
      3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401,
      1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866,
      892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850,
      2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042,
      3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917,
      3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891,
      2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452,
      1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443,
      1414855848, 3149649517, 370555436,
    ],
    je = [
      1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
      2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
      1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
      1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150,
      59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843,
      1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733,
      3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
      2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228,
      1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562,
      3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269,
      807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154,
      4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474,
      875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634,
      1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
      2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
      2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
      2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436,
      1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852,
      1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058,
      463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234,
      3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465,
      337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775,
      1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960,
      3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733,
      3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860,
      2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396,
      2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238,
      2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012,
      1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814,
      2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619,
      270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369,
      2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889,
      1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144,
      899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186,
      1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980,
      3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204,
      25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971,
      1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302,
      3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761,
      1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
      3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
      4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
      3576870512, 1215061108, 3501741890,
    ],
    We = [
      1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933,
      2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900,
      4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723,
      2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385,
      3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473,
      692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
      3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529,
      1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523,
      1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122,
      1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824,
      4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204,
      4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614,
      2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839,
      106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461,
      3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937,
      3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598,
      1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696,
      1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017,
      560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918,
      2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114,
      3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840,
      3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030,
      3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940,
      1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268,
      4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330,
      3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036,
      446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778,
      915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837,
      223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799,
      4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129,
      2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319,
      2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859,
      3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884,
      3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336,
      4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085,
      3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314,
      1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086,
      325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127,
      901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326,
      3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179,
      1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897,
      1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980,
      1893020342, 1950903388, 1120974935,
    ],
    Ye = [
      2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173,
      1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970,
      3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698,
      244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515,
      1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868,
      1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033,
      1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914,
      861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368,
      1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827,
      2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239,
      2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009,
      4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174,
      1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224,
      2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286,
      2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237,
      1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968,
      172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081,
      1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047,
      2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278,
      2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539,
      719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150,
      2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665,
      4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005,
      4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898,
      1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670,
      3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556,
      1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178,
      188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
      2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
      2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
      2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
      2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639,
      919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549,
      1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196,
      3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
      81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974,
      895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576,
      1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897,
      3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516,
      935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519,
      3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572,
      2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195,
      3060847922, 1551124588, 1463996600,
    ],
    qe = [
      4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
      4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
      3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
      3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
      2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848,
      3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
      3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389,
      1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913,
      1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242,
      529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619,
      679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159,
      133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524,
      777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424,
      1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981,
      1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582,
      1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953,
      2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766,
      1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162,
      1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748,
      2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234,
      2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765,
      514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535,
      1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070,
      3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413,
      3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325,
      3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
      4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
      3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
      2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
      3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
      410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
      1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
      1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454,
      2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521,
      3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700,
      2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909,
      2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841,
      3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542,
      1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736,
      3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274,
      1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712,
      227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555,
      850817237, 1817998408, 3092726480,
    ],
    Ke = [
      0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
      708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
      1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990,
      4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216,
      2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058,
      3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
      3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
      3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995,
      899835584, 666464733, 699432150, 59727847, 226906860, 530400753,
      294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775,
      2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520,
      3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422,
      3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
      4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
      2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
      800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
      2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311,
      1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657,
      807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971,
      2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
      3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751,
      3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483,
      2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465,
      599762354, 159417987, 126454664, 361929877, 463180190, 2709260871,
      2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
      2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
      3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178,
      2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284,
      3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302,
      3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
      1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
      404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
      3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
      3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557,
      2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487,
      504459436, 875451293, 975658646, 675039627, 641025152, 2084704233,
      1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843,
      1451044056, 933301370, 967311729, 733156972, 632953703, 260388950,
      25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500,
      1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226,
      3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432,
      4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
      2438237621, 2203032232, 2370213795,
    ],
    Xe = [
      0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
      824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
      2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410,
      2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776,
      3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918,
      3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
      1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
      1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355,
      3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
      4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895,
      3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975,
      3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917,
      2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523,
      2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
      1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
      53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
      2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216,
      3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602,
      4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276,
      545572369, 296679730, 446754879, 129166120, 213705253, 1709610350,
      1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296,
      1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598,
      3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
      2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386,
      1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268,
      1988838185, 533804130, 350174575, 164439672, 46346101, 870912086,
      954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643,
      2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929,
      3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127,
      3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309,
      457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035,
      2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319,
      182621114, 401639597, 486441376, 768917123, 651868046, 1003007129,
      818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
      2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917,
      2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703,
      3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473,
      3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720,
      1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390,
      1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636,
      3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
      4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200,
      3046200461, 2827177882, 2743944855,
    ],
    Ze = [
      0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
      590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
      1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250,
      3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176,
      3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278,
      2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
      2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
      3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195,
      1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173,
      1224348052, 59984867, 244860394, 428169201, 344873464, 935293895,
      984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180,
      2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982,
      145085239, 532201772, 313773861, 830661914, 1015671571, 731183368,
      648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554,
      2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
      3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
      3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771,
      4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177,
      2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631,
      287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925,
      1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571,
      1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968,
      3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150,
      2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556,
      122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898,
      695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
      1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613,
      1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639,
      81781910, 331544205, 516552836, 1039717051, 821288114, 669961897,
      719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299,
      2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885,
      3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634,
      3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
      2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702,
      3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632,
      1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938,
      48394827, 369057872, 418672217, 1002783846, 919489135, 567498868,
      752375421, 209336225, 24197544, 376187827, 459744698, 945164165,
      895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635,
      1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881,
      3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
      4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285,
      2377486676, 2594734927, 2544078150,
    ],
    Je = [
      0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
      1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408,
      1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100,
      2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816,
      3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748,
      3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843,
      377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439,
      1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
      2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623,
      2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475,
      3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905,
      1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837,
      923313619, 740276417, 621982671, 439452389, 322734571, 137073913,
      19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
      3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
      3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550,
      1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426,
      1928707164, 96392454, 213114376, 396673818, 514443284, 562755902,
      679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866,
      3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230,
      2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026,
      2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
      3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765,
      3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481,
      1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413,
      1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841,
      425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038,
      3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674,
      2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
      2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834,
      1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990,
      349075736, 736970802, 585122620, 972512814, 821712160, 2595684844,
      2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464,
      2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212,
      4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952,
      292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068,
      1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848,
      2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
      2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155,
      4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431,
      953270745, 600235211, 718002117, 367585007, 484830689, 133361907,
      251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495,
      1418573201, 1335535747, 1184342925,
    ];
  function Qe(e) {
    for (var t = [], r = 0; r < e.length; r += 4)
      t.push((e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]);
    return t;
  }
  function i(e) {
    if (!(this instanceof i))
      throw Error('AES must be instanitated with `new`');
    Object.defineProperty(this, 'key', { value: n(e, !0) }), this._prepare();
  }
  function t(e) {
    if (!(this instanceof t))
      throw Error('AES must be instanitated with `new`');
    (this.description = 'Electronic Code Block'),
      (this.name = 'ecb'),
      (this._aes = new i(e));
  }
  function et(e, t) {
    if (!(this instanceof et))
      throw Error('AES must be instanitated with `new`');
    if (
      ((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), t)
    ) {
      if (16 != t.length)
        throw new Error('invalid initialation vector size (must be 16 bytes)');
    } else t = l(16);
    (this._lastCipherblock = n(t, !0)), (this._aes = new i(e));
  }
  function tt(e, t, r) {
    if (!(this instanceof tt))
      throw Error('AES must be instanitated with `new`');
    if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), t)) {
      if (16 != t.length)
        throw new Error('invalid initialation vector size (must be 16 size)');
    } else t = l(16);
    (this.segmentSize = r = r || 1),
      (this._shiftRegister = n(t, !0)),
      (this._aes = new i(e));
  }
  function rt(e, t) {
    if (!(this instanceof rt))
      throw Error('AES must be instanitated with `new`');
    if (((this.description = 'Output Feedback'), (this.name = 'ofb'), t)) {
      if (16 != t.length)
        throw new Error('invalid initialation vector size (must be 16 bytes)');
    } else t = l(16);
    (this._lastPrecipher = n(t, !0)),
      (this._lastPrecipherIndex = 16),
      (this._aes = new i(e));
  }
  function r(e) {
    if (!(this instanceof r))
      throw Error('Counter must be instanitated with `new`');
    'number' == typeof (e = 0 !== e ? e || 1 : e)
      ? ((this._counter = l(16)), this.setValue(e))
      : this.setBytes(e);
  }
  function it(e, t) {
    if (!(this instanceof it))
      throw Error('AES must be instanitated with `new`');
    (this.description = 'Counter'),
      (this.name = 'ctr'),
      t instanceof r || (t = new r(t)),
      (this._counter = t),
      (this._remainingCounter = null),
      (this._remainingCounterIndex = 16),
      (this._aes = new i(e));
  }
  (i.prototype._prepare = function () {
    var e = O[this.key.length];
    if (null == e)
      throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
    (this._Ke = []), (this._Kd = []);
    for (var t = 0; t <= e; t++)
      this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
    for (
      var r, i = 4 * (e + 1), s = this.key.length / 4, n = Qe(this.key), t = 0;
      t < s;
      t++
    )
      (this._Ke[(r = t >> 2)][t % 4] = n[t]), (this._Kd[e - r][t % 4] = n[t]);
    for (var a, o = 0, l = s; l < i; ) {
      if (
        ((a = n[s - 1]),
        (n[0] ^=
          (u[(a >> 16) & 255] << 24) ^
          (u[(a >> 8) & 255] << 16) ^
          (u[255 & a] << 8) ^
          u[(a >> 24) & 255] ^
          (G[o] << 24)),
        (o += 1),
        8 != s)
      )
        for (t = 1; t < s; t++) n[t] ^= n[t - 1];
      else {
        for (t = 1; t < s / 2; t++) n[t] ^= n[t - 1];
        for (
          a = n[s / 2 - 1],
            n[s / 2] ^=
              u[255 & a] ^
              (u[(a >> 8) & 255] << 8) ^
              (u[(a >> 16) & 255] << 16) ^
              (u[(a >> 24) & 255] << 24),
            t = s / 2 + 1;
          t < s;
          t++
        )
          n[t] ^= n[t - 1];
      }
      for (t = 0; t < s && l < i; )
        (this._Ke[(d = l >> 2)][(h = l % 4)] = n[t]),
          (this._Kd[e - d][h] = n[t++]),
          l++;
    }
    for (var d = 1; d < e; d++)
      for (var h = 0; h < 4; h++)
        (a = this._Kd[d][h]),
          (this._Kd[d][h] =
            Ke[(a >> 24) & 255] ^
            Xe[(a >> 16) & 255] ^
            Ze[(a >> 8) & 255] ^
            Je[255 & a]);
  }),
    (i.prototype.encrypt = function (e) {
      if (16 != e.length)
        throw new Error('invalid plaintext size (must be 16 bytes)');
      for (
        var t = this._Ke.length - 1, r = [0, 0, 0, 0], i = Qe(e), s = 0;
        s < 4;
        s++
      )
        i[s] ^= this._Ke[0][s];
      for (var n = 1; n < t; n++) {
        for (s = 0; s < 4; s++)
          r[s] =
            Ge[(i[s] >> 24) & 255] ^
            He[(i[(s + 1) % 4] >> 16) & 255] ^
            Ve[(i[(s + 2) % 4] >> 8) & 255] ^
            $e[255 & i[(s + 3) % 4]] ^
            this._Ke[n][s];
        i = r.slice();
      }
      for (var a, o = l(16), s = 0; s < 4; s++)
        (a = this._Ke[t][s]),
          (o[4 * s] = 255 & (u[(i[s] >> 24) & 255] ^ (a >> 24))),
          (o[4 * s + 1] = 255 & (u[(i[(s + 1) % 4] >> 16) & 255] ^ (a >> 16))),
          (o[4 * s + 2] = 255 & (u[(i[(s + 2) % 4] >> 8) & 255] ^ (a >> 8))),
          (o[4 * s + 3] = 255 & (u[255 & i[(s + 3) % 4]] ^ a));
      return o;
    }),
    (i.prototype.decrypt = function (e) {
      if (16 != e.length)
        throw new Error('invalid ciphertext size (must be 16 bytes)');
      for (
        var t = this._Kd.length - 1, r = [0, 0, 0, 0], i = Qe(e), s = 0;
        s < 4;
        s++
      )
        i[s] ^= this._Kd[0][s];
      for (var n = 1; n < t; n++) {
        for (s = 0; s < 4; s++)
          r[s] =
            je[(i[s] >> 24) & 255] ^
            We[(i[(s + 3) % 4] >> 16) & 255] ^
            Ye[(i[(s + 2) % 4] >> 8) & 255] ^
            qe[255 & i[(s + 1) % 4]] ^
            this._Kd[n][s];
        i = r.slice();
      }
      for (var a, o = l(16), s = 0; s < 4; s++)
        (a = this._Kd[t][s]),
          (o[4 * s] = 255 & (d[(i[s] >> 24) & 255] ^ (a >> 24))),
          (o[4 * s + 1] = 255 & (d[(i[(s + 3) % 4] >> 16) & 255] ^ (a >> 16))),
          (o[4 * s + 2] = 255 & (d[(i[(s + 2) % 4] >> 8) & 255] ^ (a >> 8))),
          (o[4 * s + 3] = 255 & (d[255 & i[(s + 1) % 4]] ^ a));
      return o;
    }),
    (t.prototype.encrypt = function (e) {
      if ((e = n(e)).length % 16 != 0)
        throw new Error(
          'invalid plaintext size (must be multiple of 16 bytes)'
        );
      for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16)
        a(e, r, 0, i, i + 16), a((r = this._aes.encrypt(r)), t, i);
      return t;
    }),
    (t.prototype.decrypt = function (e) {
      if ((e = n(e)).length % 16 != 0)
        throw new Error(
          'invalid ciphertext size (must be multiple of 16 bytes)'
        );
      for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16)
        a(e, r, 0, i, i + 16), a((r = this._aes.decrypt(r)), t, i);
      return t;
    }),
    (et.prototype.encrypt = function (e) {
      if ((e = n(e)).length % 16 != 0)
        throw new Error(
          'invalid plaintext size (must be multiple of 16 bytes)'
        );
      for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) {
        a(e, r, 0, i, i + 16);
        for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
        (this._lastCipherblock = this._aes.encrypt(r)),
          a(this._lastCipherblock, t, i);
      }
      return t;
    }),
    (et.prototype.decrypt = function (e) {
      if ((e = n(e)).length % 16 != 0)
        throw new Error(
          'invalid ciphertext size (must be multiple of 16 bytes)'
        );
      for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) {
        a(e, r, 0, i, i + 16);
        for (var r = this._aes.decrypt(r), s = 0; s < 16; s++)
          t[i + s] = r[s] ^ this._lastCipherblock[s];
        a(e, this._lastCipherblock, 0, i, i + 16);
      }
      return t;
    }),
    (tt.prototype.encrypt = function (e) {
      if (e.length % this.segmentSize != 0)
        throw new Error('invalid plaintext size (must be segmentSize bytes)');
      for (var t = n(e, !0), r = 0; r < t.length; r += this.segmentSize) {
        for (
          var i = this._aes.encrypt(this._shiftRegister), s = 0;
          s < this.segmentSize;
          s++
        )
          t[r + s] ^= i[s];
        a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
          a(
            t,
            this._shiftRegister,
            16 - this.segmentSize,
            r,
            r + this.segmentSize
          );
      }
      return t;
    }),
    (tt.prototype.decrypt = function (e) {
      if (e.length % this.segmentSize != 0)
        throw new Error('invalid ciphertext size (must be segmentSize bytes)');
      for (var t = n(e, !0), r = 0; r < t.length; r += this.segmentSize) {
        for (
          var i = this._aes.encrypt(this._shiftRegister), s = 0;
          s < this.segmentSize;
          s++
        )
          t[r + s] ^= i[s];
        a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
          a(
            e,
            this._shiftRegister,
            16 - this.segmentSize,
            r,
            r + this.segmentSize
          );
      }
      return t;
    }),
    (rt.prototype.decrypt = rt.prototype.encrypt =
      function (e) {
        for (var t = n(e, !0), r = 0; r < t.length; r++)
          16 === this._lastPrecipherIndex &&
            ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
            (this._lastPrecipherIndex = 0)),
            (t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
        return t;
      }),
    (r.prototype.setValue = function (e) {
      if ('number' != typeof e || parseInt(e) != e)
        throw new Error('invalid counter value (must be an integer)');
      if (e > Number.MAX_SAFE_INTEGER)
        throw new Error('integer value out of safe range');
      for (var t = 15; 0 <= t; --t)
        (this._counter[t] = e % 256), (e = parseInt(e / 256));
    }),
    (r.prototype.setBytes = function (e) {
      if (16 != (e = n(e, !0)).length)
        throw new Error('invalid counter bytes size (must be 16 bytes)');
      this._counter = e;
    }),
    (r.prototype.increment = function () {
      for (var e = 15; 0 <= e; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    });
  it.prototype.decrypt = it.prototype.encrypt = function (e) {
    for (var t = n(e, !0), r = 0; r < t.length; r++)
      16 === this._remainingCounterIndex &&
        ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
        (this._remainingCounterIndex = 0),
        this._counter.increment()),
        (t[r] ^= this._remainingCounter[this._remainingCounterIndex++]);
    return t;
  };
  const st = {
    AES: i,
    Counter: r,
    ModeOfOperation: { ecb: t, cbc: et, cfb: tt, ofb: rt, ctr: it },
    utils: { hex: p, utf8: f },
    padding: {
      pkcs7: {
        pad: function (e) {
          var t = 16 - ((e = n(e, !0)).length % 16),
            r = l(e.length + t);
          a(e, r);
          for (var i = e.length; i < r.length; i++) r[i] = t;
          return r;
        },
        strip: function (e) {
          if ((e = n(e, !0)).length < 16)
            throw new Error('PKCS#7 invalid length');
          var t = e[e.length - 1];
          if (16 < t) throw new Error('PKCS#7 padding byte out of range');
          for (var r = e.length - t, i = 0; i < t; i++)
            if (e[r + i] !== t) throw new Error('PKCS#7 invalid padding byte');
          var s = l(r);
          return a(e, s, 0, 0, r), s;
        },
      },
    },
    _arrayTest: { coerceArray: n, createArray: l, copyArray: a },
  };
  var oe = m(function (e, t) {
    function u(e) {
      if (!(e instanceof ArrayBuffer)) throw 'Needs an array buffer';
      (this.buffer = e), (this.dataview = new DataView(e)), (this.position = 0);
    }
    function l(e, t, r) {
      (this._byteOffset = t || 0),
        e instanceof ArrayBuffer
          ? (this.buffer = e)
          : 'object' == typeof e
          ? ((this.dataView = e), t && (this._byteOffset += t))
          : (this.buffer = new ArrayBuffer(e || 0)),
        (this.position = 0),
        (this.endianness = null == r ? l.LITTLE_ENDIAN : r);
    }
    function r(e) {
      (this.buffers = []),
        (this.bufferIndex = -1),
        e && (this.insertBuffer(e), (this.bufferIndex = 0));
    }
    function i() {
      var s = [],
        i =
          ((s[3] = 'ES_Descriptor'),
          (s[4] = 'DecoderConfigDescriptor'),
          (s[5] = 'DecoderSpecificInfo'),
          (s[6] = 'SLConfigDescriptor'),
          (this.getDescriptorName = function (e) {
            return s[e];
          }),
          this),
        n = {};
      return (
        (this.parseOneDescriptor = function (e) {
          for (var t = 0, r = e.readUint8(), i = e.readUint8(); 128 & i; )
            (t = (127 & i) << 7), (i = e.readUint8());
          return (
            f.debug(
              'MPEG4DescriptorParser',
              'Found ' +
                (s[r] || 'Descriptor ' + r) +
                ', size ' +
                (t += 127 & i) +
                ' at position ' +
                e.getPosition()
            ),
            (r = new (s[r] ? n[s[r]] : n.Descriptor)(t)).parse(e),
            r
          );
        }),
        (n.Descriptor = function (e, t) {
          (this.tag = e), (this.size = t), (this.descs = []);
        }),
        (n.Descriptor.prototype.parse = function (e) {
          this.data = e.readUint8Array(this.size);
        }),
        (n.Descriptor.prototype.findDescriptor = function (e) {
          for (var t = 0; t < this.descs.length; t++)
            if (this.descs[t].tag == e) return this.descs[t];
          return null;
        }),
        (n.Descriptor.prototype.parseRemainingDescriptors = function (e) {
          for (var t = e.position; e.position < t + this.size; ) {
            var r = i.parseOneDescriptor(e);
            this.descs.push(r);
          }
        }),
        (n.ES_Descriptor = function (e) {
          n.Descriptor.call(this, 3, e);
        }),
        (n.ES_Descriptor.prototype = new n.Descriptor()),
        (n.ES_Descriptor.prototype.parse = function (e) {
          var t;
          (this.ES_ID = e.readUint16()),
            (this.flags = e.readUint8()),
            (this.size -= 3),
            128 & this.flags
              ? ((this.dependsOn_ES_ID = e.readUint16()), (this.size -= 2))
              : (this.dependsOn_ES_ID = 0),
            64 & this.flags
              ? ((t = e.readUint8()),
                (this.URL = e.readString(t)),
                (this.size -= t + 1))
              : (this.URL = ''),
            32 & this.flags
              ? ((this.OCR_ES_ID = e.readUint16()), (this.size -= 2))
              : (this.OCR_ES_ID = 0),
            this.parseRemainingDescriptors(e);
        }),
        (n.ES_Descriptor.prototype.getOTI = function (e) {
          var t = this.findDescriptor(4);
          return t ? t.oti : 0;
        }),
        (n.ES_Descriptor.prototype.getAudioConfig = function (e) {
          var t,
            r = this.findDescriptor(4);
          return (r = r && r.findDescriptor(5)) && r.data
            ? 31 === (t = (248 & r.data[0]) >> 3) && 2 <= r.data.length
              ? 32 + ((7 & r.data[0]) << 3) + ((224 & r.data[1]) >> 5)
              : t
            : null;
        }),
        (n.DecoderConfigDescriptor = function (e) {
          n.Descriptor.call(this, 4, e);
        }),
        (n.DecoderConfigDescriptor.prototype = new n.Descriptor()),
        (n.DecoderConfigDescriptor.prototype.parse = function (e) {
          (this.oti = e.readUint8()),
            (this.streamType = e.readUint8()),
            (this.bufferSize = e.readUint24()),
            (this.maxBitrate = e.readUint32()),
            (this.avgBitrate = e.readUint32()),
            (this.size -= 13),
            this.parseRemainingDescriptors(e);
        }),
        (n.DecoderSpecificInfo = function (e) {
          n.Descriptor.call(this, 5, e);
        }),
        (n.DecoderSpecificInfo.prototype = new n.Descriptor()),
        (n.SLConfigDescriptor = function (e) {
          n.Descriptor.call(this, 6, e);
        }),
        (n.SLConfigDescriptor.prototype = new n.Descriptor()),
        this
      );
    }
    function s() {}
    function n() {}
    function B(e) {
      (this.stream = e || new r()),
        (this.boxes = []),
        (this.mdats = []),
        (this.moofs = []),
        (this.isProgressive = !1),
        (this.moovStartFound = !1),
        (this.onMoovStart = null),
        (this.moovStartSent = !1),
        (this.onReady = null),
        (this.readySent = !1),
        (this.onSegment = null),
        (this.onSamples = null),
        (this.onError = null),
        (this.sampleListBuilt = !1),
        (this.fragmentedTracks = []),
        (this.extractedTracks = []),
        (this.isFragmentationInitialized = !1),
        (this.sampleProcessingStarted = !1),
        (this.nextMoofNumber = 0),
        (this.itemListBuilt = !1),
        (this.onSidx = null),
        (this.sidxSent = !1);
    }
    (a = new Date()), (o = 4);
    var a,
      o,
      f = {
        setLogLevel: function (e) {
          o =
            e == this.debug
              ? 1
              : e == this.info
              ? 2
              : e == this.warn
              ? 3
              : (this.error, 4);
        },
        debug: function (e, t) {
          void 0 === console.debug && (console.debug = console.log),
            o <= 1 &&
              console.debug(
                '[' + f.getDurationString(new Date() - a, 1e3) + ']',
                '[' + e + ']',
                t
              );
        },
        log: function (e, t) {
          this.debug(e.msg);
        },
        info: function (e, t) {
          o <= 2 &&
            console.info(
              '[' + f.getDurationString(new Date() - a, 1e3) + ']',
              '[' + e + ']',
              t
            );
        },
        warn: function (e, t) {
          o <= 3 &&
            console.warn(
              '[' + f.getDurationString(new Date() - a, 1e3) + ']',
              '[' + e + ']',
              t
            );
        },
        error: function (e, t) {
          o <= 4 &&
            console.error(
              '[' + f.getDurationString(new Date() - a, 1e3) + ']',
              '[' + e + ']',
              t
            );
        },
      },
      d =
        ((f.getDurationString = function (e, t) {
          var r;
          function i(e, t) {
            for (var r = ('' + e).split('.'); r[0].length < t; )
              r[0] = '0' + r[0];
            return r.join('.');
          }
          e < 0 ? ((r = !0), (e = -e)) : (r = !1);
          var e = e / (t || 1),
            t = Math.floor(e / 3600),
            s = ((e -= 3600 * t), Math.floor(e / 60)),
            n = 1e3 * (e -= 60 * s);
          return (
            (n -= 1e3 * (e = Math.floor(e))),
            (n = Math.floor(n)),
            (r ? '-' : '') + t + ':' + i(s, 2) + ':' + i(e, 2) + '.' + i(n, 3)
          );
        }),
        (f.printRanges = function (e) {
          var t = e.length;
          if (0 < t) {
            for (var r = '', i = 0; i < t; i++)
              0 < i && (r += ','),
                (r +=
                  '[' +
                  f.getDurationString(e.start(i)) +
                  ',' +
                  f.getDurationString(e.end(i)) +
                  ']');
            return r;
          }
          return '(empty)';
        }),
        (t.Log = f),
        (u.prototype.getPosition = function () {
          return this.position;
        }),
        (u.prototype.getEndPosition = function () {
          return this.buffer.byteLength;
        }),
        (u.prototype.getLength = function () {
          return this.buffer.byteLength;
        }),
        (u.prototype.seek = function (e) {
          e = Math.max(0, Math.min(this.buffer.byteLength, e));
          return (this.position = isNaN(e) || !isFinite(e) ? 0 : e), !0;
        }),
        (u.prototype.isEos = function () {
          return this.getPosition() >= this.getEndPosition();
        }),
        (u.prototype.readAnyInt = function (e, t) {
          var r = 0;
          if (this.position + e <= this.buffer.byteLength) {
            switch (e) {
              case 1:
                r = t
                  ? this.dataview.getInt8(this.position)
                  : this.dataview.getUint8(this.position);
                break;
              case 2:
                r = t
                  ? this.dataview.getInt16(this.position)
                  : this.dataview.getUint16(this.position);
                break;
              case 3:
                if (t) throw 'No method for reading signed 24 bits values';
                (r = this.dataview.getUint8(this.position) << 16),
                  (r =
                    (r |= this.dataview.getUint8(this.position + 1) << 8) |
                    this.dataview.getUint8(this.position + 2));
                break;
              case 4:
                r = t
                  ? this.dataview.getInt32(this.position)
                  : this.dataview.getUint32(this.position);
                break;
              case 8:
                if (t) throw 'No method for reading signed 64 bits values';
                (r = this.dataview.getUint32(this.position) << 32),
                  (r |= this.dataview.getUint32(this.position + 4));
                break;
              default:
                throw 'readInt method not implemented for size: ' + e;
            }
            return (this.position += e), r;
          }
          throw 'Not enough bytes in buffer';
        }),
        (u.prototype.readUint8 = function () {
          return this.readAnyInt(1, !1);
        }),
        (u.prototype.readUint16 = function () {
          return this.readAnyInt(2, !1);
        }),
        (u.prototype.readUint24 = function () {
          return this.readAnyInt(3, !1);
        }),
        (u.prototype.readUint32 = function () {
          return this.readAnyInt(4, !1);
        }),
        (u.prototype.readUint64 = function () {
          return this.readAnyInt(8, !1);
        }),
        (u.prototype.readString = function (e) {
          if (this.position + e <= this.buffer.byteLength) {
            for (var t = '', r = 0; r < e; r++)
              t += String.fromCharCode(this.readUint8());
            return t;
          }
          throw 'Not enough bytes in buffer';
        }),
        (u.prototype.readCString = function () {
          for (var e = []; ; ) {
            var t = this.readUint8();
            if (0 === t) break;
            e.push(t);
          }
          return String.fromCharCode.apply(null, e);
        }),
        (u.prototype.readInt8 = function () {
          return this.readAnyInt(1, !0);
        }),
        (u.prototype.readInt16 = function () {
          return this.readAnyInt(2, !0);
        }),
        (u.prototype.readInt32 = function () {
          return this.readAnyInt(4, !0);
        }),
        (u.prototype.readInt64 = function () {
          return this.readAnyInt(8, !1);
        }),
        (u.prototype.readUint8Array = function (e) {
          for (var t = new Uint8Array(e), r = 0; r < e; r++)
            t[r] = this.readUint8();
          return t;
        }),
        (u.prototype.readInt16Array = function (e) {
          for (var t = new Int16Array(e), r = 0; r < e; r++)
            t[r] = this.readInt16();
          return t;
        }),
        (u.prototype.readUint16Array = function (e) {
          for (var t = new Int16Array(e), r = 0; r < e; r++)
            t[r] = this.readUint16();
          return t;
        }),
        (u.prototype.readUint32Array = function (e) {
          for (var t = new Uint32Array(e), r = 0; r < e; r++)
            t[r] = this.readUint32();
          return t;
        }),
        (u.prototype.readInt32Array = function (e) {
          for (var t = new Int32Array(e), r = 0; r < e; r++)
            t[r] = this.readInt32();
          return t;
        }),
        (t.MP4BoxStream = u),
        ((l.prototype = {}).getPosition = function () {
          return this.position;
        }),
        (l.prototype._realloc = function (e) {
          if (this._dynamicSize) {
            var t = this._byteOffset + this.position + e,
              r = this._buffer.byteLength;
            if (t <= r) t > this._byteLength && (this._byteLength = t);
            else {
              for (r < 1 && (r = 1); r < t; ) r *= 2;
              var e = new ArrayBuffer(r),
                i = new Uint8Array(this._buffer);
              new Uint8Array(e, 0, i.length).set(i),
                (this.buffer = e),
                (this._byteLength = t);
            }
          }
        }),
        (l.prototype._trimAlloc = function () {
          var e, t, r;
          this._byteLength != this._buffer.byteLength &&
            ((e = new ArrayBuffer(this._byteLength)),
            (t = new Uint8Array(e)),
            (r = new Uint8Array(this._buffer, 0, t.length)),
            t.set(r),
            (this.buffer = e));
        }),
        (l.BIG_ENDIAN = !1),
        (l.LITTLE_ENDIAN = !0),
        (l.prototype._byteLength = 0),
        Object.defineProperty(l.prototype, 'byteLength', {
          get: function () {
            return this._byteLength - this._byteOffset;
          },
        }),
        Object.defineProperty(l.prototype, 'buffer', {
          get: function () {
            return this._trimAlloc(), this._buffer;
          },
          set: function (e) {
            (this._buffer = e),
              (this._dataView = new DataView(this._buffer, this._byteOffset)),
              (this._byteLength = this._buffer.byteLength);
          },
        }),
        Object.defineProperty(l.prototype, 'byteOffset', {
          get: function () {
            return this._byteOffset;
          },
          set: function (e) {
            (this._byteOffset = e),
              (this._dataView = new DataView(this._buffer, this._byteOffset)),
              (this._byteLength = this._buffer.byteLength);
          },
        }),
        Object.defineProperty(l.prototype, 'dataView', {
          get: function () {
            return this._dataView;
          },
          set: function (e) {
            (this._byteOffset = e.byteOffset),
              (this._buffer = e.buffer),
              (this._dataView = new DataView(this._buffer, this._byteOffset)),
              (this._byteLength = this._byteOffset + e.byteLength);
          },
        }),
        (l.prototype.seek = function (e) {
          e = Math.max(0, Math.min(this.byteLength, e));
          this.position = isNaN(e) || !isFinite(e) ? 0 : e;
        }),
        (l.prototype.isEof = function () {
          return this.position >= this._byteLength;
        }),
        (l.prototype.mapUint8Array = function (e) {
          this._realloc(+e);
          var t = new Uint8Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (this.position += +e), t;
        }),
        (l.prototype.readInt32Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 4 : e;
          var r = new Int32Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readInt16Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 2 : e;
          var r = new Int16Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readInt8Array = function (e) {
          e = null == e ? this.byteLength - this.position : e;
          var t = new Int8Array(e);
          return (
            l.memcpy(
              t.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * t.BYTES_PER_ELEMENT
            ),
            (this.position += t.byteLength),
            t
          );
        }),
        (l.prototype.readUint32Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 4 : e;
          var r = new Uint32Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readUint16Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 2 : e;
          var r = new Uint16Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readUint8Array = function (e) {
          e = null == e ? this.byteLength - this.position : e;
          var t = new Uint8Array(e);
          return (
            l.memcpy(
              t.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * t.BYTES_PER_ELEMENT
            ),
            (this.position += t.byteLength),
            t
          );
        }),
        (l.prototype.readFloat64Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 8 : e;
          var r = new Float64Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readFloat32Array = function (e, t) {
          e = null == e ? this.byteLength - this.position / 4 : e;
          var r = new Float32Array(e);
          return (
            l.memcpy(
              r.buffer,
              0,
              this.buffer,
              this.byteOffset + this.position,
              e * r.BYTES_PER_ELEMENT
            ),
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += r.byteLength),
            r
          );
        }),
        (l.prototype.readInt32 = function (e) {
          e = this._dataView.getInt32(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 4), e;
        }),
        (l.prototype.readInt16 = function (e) {
          e = this._dataView.getInt16(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 2), e;
        }),
        (l.prototype.readInt8 = function () {
          var e = this._dataView.getInt8(this.position);
          return (this.position += 1), e;
        }),
        (l.prototype.readUint32 = function (e) {
          e = this._dataView.getUint32(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 4), e;
        }),
        (l.prototype.readUint16 = function (e) {
          e = this._dataView.getUint16(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 2), e;
        }),
        (l.prototype.readUint8 = function () {
          var e = this._dataView.getUint8(this.position);
          return (this.position += 1), e;
        }),
        (l.prototype.readFloat32 = function (e) {
          e = this._dataView.getFloat32(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 4), e;
        }),
        (l.prototype.readFloat64 = function (e) {
          e = this._dataView.getFloat64(
            this.position,
            null == e ? this.endianness : e
          );
          return (this.position += 8), e;
        }),
        (l.endianness = 0 < new Int8Array(new Int16Array([1]).buffer)[0]),
        (l.memcpy = function (e, t, r, i, s) {
          (e = new Uint8Array(e, t, s)), (t = new Uint8Array(r, i, s));
          e.set(t);
        }),
        (l.arrayToNative = function (e, t) {
          return t == this.endianness ? e : this.flipArrayEndianness(e);
        }),
        (l.nativeToEndian = function (e, t) {
          return this.endianness == t ? e : this.flipArrayEndianness(e);
        }),
        (l.flipArrayEndianness = function (e) {
          for (
            var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = 0;
            r < e.byteLength;
            r += e.BYTES_PER_ELEMENT
          )
            for (var i = r + e.BYTES_PER_ELEMENT - 1, s = r; s < i; i--, s++) {
              var n = t[s];
              (t[s] = t[i]), (t[i] = n);
            }
          return e;
        }),
        (l.prototype.failurePosition = 0),
        (String.fromCharCodeUint8 = function (e) {
          for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
          return String.fromCharCode.apply(null, t);
        }),
        (l.prototype.readString = function (e, t) {
          return null == t || 'ASCII' == t
            ? String.fromCharCodeUint8.apply(null, [
                this.mapUint8Array(
                  null == e ? this.byteLength - this.position : e
                ),
              ])
            : new TextDecoder(t).decode(this.mapUint8Array(e));
        }),
        (l.prototype.readCString = function (e) {
          var t = this.byteLength - this.position,
            r = new Uint8Array(this._buffer, this._byteOffset + this.position),
            i = t;
          null != e && (i = Math.min(e, t));
          for (var s = 0; s < i && 0 !== r[s]; s++);
          var n = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(s)]);
          return (
            null != e
              ? (this.position += i - s)
              : s != t && (this.position += 1),
            n
          );
        }),
        Math.pow(2, 32)),
      b =
        ((l.prototype.readInt64 = function () {
          return this.readInt32() * d + this.readUint32();
        }),
        (l.prototype.readUint64 = function () {
          return this.readUint32() * d + this.readUint32();
        }),
        (l.prototype.readInt64 = function () {
          return this.readUint32() * d + this.readUint32();
        }),
        (l.prototype.readUint24 = function () {
          return (
            (this.readUint8() << 16) +
            (this.readUint8() << 8) +
            this.readUint8()
          );
        }),
        ((t.DataStream = l).prototype.save = function (e) {
          var t = new Blob([this.buffer]);
          if (!global.URL || !URL.createObjectURL)
            throw "DataStream.save: Can't create object URL.";
          var t = global.URL.createObjectURL(t),
            r = document.createElement('a');
          document.body.appendChild(r),
            r.setAttribute('href', t),
            r.setAttribute('download', e),
            r.setAttribute('target', '_self'),
            r.click(),
            global.URL.revokeObjectURL(t);
        }),
        (l.prototype._dynamicSize = !0),
        Object.defineProperty(l.prototype, 'dynamicSize', {
          get: function () {
            return this._dynamicSize;
          },
          set: function (e) {
            e || this._trimAlloc(), (this._dynamicSize = e);
          },
        }),
        (l.prototype.shift = function (e) {
          var t = new ArrayBuffer(this._byteLength - e),
            r = new Uint8Array(t),
            i = new Uint8Array(this._buffer, e, r.length);
          r.set(i), (this.buffer = t), (this.position -= e);
        }),
        (l.prototype.writeInt32Array = function (e, t) {
          if (
            (this._realloc(4 * e.length),
            e instanceof Int32Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapInt32Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeInt32(e[r], t);
        }),
        (l.prototype.writeInt16Array = function (e, t) {
          if (
            (this._realloc(2 * e.length),
            e instanceof Int16Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapInt16Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeInt16(e[r], t);
        }),
        (l.prototype.writeInt8Array = function (e) {
          if (
            (this._realloc(+e.length),
            e instanceof Int8Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapInt8Array(e.length);
          else for (var t = 0; t < e.length; t++) this.writeInt8(e[t]);
        }),
        (l.prototype.writeUint32Array = function (e, t) {
          if (
            (this._realloc(4 * e.length),
            e instanceof Uint32Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapUint32Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeUint32(e[r], t);
        }),
        (l.prototype.writeUint16Array = function (e, t) {
          if (
            (this._realloc(2 * e.length),
            e instanceof Uint16Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapUint16Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeUint16(e[r], t);
        }),
        (l.prototype.writeUint8Array = function (e) {
          if (
            (this._realloc(+e.length),
            e instanceof Uint8Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapUint8Array(e.length);
          else for (var t = 0; t < e.length; t++) this.writeUint8(e[t]);
        }),
        (l.prototype.writeFloat64Array = function (e, t) {
          if (
            (this._realloc(8 * e.length),
            e instanceof Float64Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapFloat64Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeFloat64(e[r], t);
        }),
        (l.prototype.writeFloat32Array = function (e, t) {
          if (
            (this._realloc(4 * e.length),
            e instanceof Float32Array &&
              this.byteOffset + (this.position % e.BYTES_PER_ELEMENT) === 0)
          )
            l.memcpy(
              this._buffer,
              this.byteOffset + this.position,
              e.buffer,
              0,
              e.byteLength
            ),
              this.mapFloat32Array(e.length, t);
          else for (var r = 0; r < e.length; r++) this.writeFloat32(e[r], t);
        }),
        (l.prototype.writeInt32 = function (e, t) {
          this._realloc(4),
            this._dataView.setInt32(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 4);
        }),
        (l.prototype.writeInt16 = function (e, t) {
          this._realloc(2),
            this._dataView.setInt16(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 2);
        }),
        (l.prototype.writeInt8 = function (e) {
          this._realloc(1),
            this._dataView.setInt8(this.position, e),
            (this.position += 1);
        }),
        (l.prototype.writeUint32 = function (e, t) {
          this._realloc(4),
            this._dataView.setUint32(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 4);
        }),
        (l.prototype.writeUint16 = function (e, t) {
          this._realloc(2),
            this._dataView.setUint16(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 2);
        }),
        (l.prototype.writeUint8 = function (e) {
          this._realloc(1),
            this._dataView.setUint8(this.position, e),
            (this.position += 1);
        }),
        (l.prototype.writeFloat32 = function (e, t) {
          this._realloc(4),
            this._dataView.setFloat32(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 4);
        }),
        (l.prototype.writeFloat64 = function (e, t) {
          this._realloc(8),
            this._dataView.setFloat64(
              this.position,
              e,
              null == t ? this.endianness : t
            ),
            (this.position += 8);
        }),
        (l.prototype.writeUCS2String = function (e, t, r) {
          null == r && (r = e.length);
          for (var i = 0; i < e.length && i < r; i++)
            this.writeUint16(e.charCodeAt(i), t);
          for (; i < r; i++) this.writeUint16(0);
        }),
        (l.prototype.writeString = function (e, t, r) {
          var i = 0;
          if (null == t || 'ASCII' == t)
            if (null != r) {
              for (var s = Math.min(e.length, r), i = 0; i < s; i++)
                this.writeUint8(e.charCodeAt(i));
              for (; i < r; i++) this.writeUint8(0);
            } else
              for (i = 0; i < e.length; i++) this.writeUint8(e.charCodeAt(i));
          else
            this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, r)));
        }),
        (l.prototype.writeCString = function (e, t) {
          var r = 0;
          if (null != t) {
            for (var i = Math.min(e.length, t), r = 0; r < i; r++)
              this.writeUint8(e.charCodeAt(r));
            for (; r < t; r++) this.writeUint8(0);
          } else {
            for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
            this.writeUint8(0);
          }
        }),
        (l.prototype.writeStruct = function (e, t) {
          for (var r = 0; r < e.length; r += 2) {
            var i = e[r + 1];
            this.writeType(i, t[e[r]], t);
          }
        }),
        (l.prototype.writeType = function (e, t, r) {
          var i;
          if ('function' == typeof e) return e(this, t);
          if ('object' == typeof e && !(e instanceof Array))
            return e.set(this, t, r);
          var s = null,
            n = 'ASCII',
            r = this.position;
          switch (
            ('string' == typeof e &&
              /:/.test(e) &&
              ((e = (i = e.split(':'))[0]), (s = parseInt(i[1]))),
            'string' == typeof e &&
              /,/.test(e) &&
              ((e = (i = e.split(','))[0]), (n = parseInt(i[1]))),
            e)
          ) {
            case 'uint8':
              this.writeUint8(t);
              break;
            case 'int8':
              this.writeInt8(t);
              break;
            case 'uint16':
              this.writeUint16(t, this.endianness);
              break;
            case 'int16':
              this.writeInt16(t, this.endianness);
              break;
            case 'uint32':
              this.writeUint32(t, this.endianness);
              break;
            case 'int32':
              this.writeInt32(t, this.endianness);
              break;
            case 'float32':
              this.writeFloat32(t, this.endianness);
              break;
            case 'float64':
              this.writeFloat64(t, this.endianness);
              break;
            case 'uint16be':
              this.writeUint16(t, l.BIG_ENDIAN);
              break;
            case 'int16be':
              this.writeInt16(t, l.BIG_ENDIAN);
              break;
            case 'uint32be':
              this.writeUint32(t, l.BIG_ENDIAN);
              break;
            case 'int32be':
              this.writeInt32(t, l.BIG_ENDIAN);
              break;
            case 'float32be':
              this.writeFloat32(t, l.BIG_ENDIAN);
              break;
            case 'float64be':
              this.writeFloat64(t, l.BIG_ENDIAN);
              break;
            case 'uint16le':
              this.writeUint16(t, l.LITTLE_ENDIAN);
              break;
            case 'int16le':
              this.writeInt16(t, l.LITTLE_ENDIAN);
              break;
            case 'uint32le':
              this.writeUint32(t, l.LITTLE_ENDIAN);
              break;
            case 'int32le':
              this.writeInt32(t, l.LITTLE_ENDIAN);
              break;
            case 'float32le':
              this.writeFloat32(t, l.LITTLE_ENDIAN);
              break;
            case 'float64le':
              this.writeFloat64(t, l.LITTLE_ENDIAN);
              break;
            case 'cstring':
              this.writeCString(t, s);
              break;
            case 'string':
              this.writeString(t, n, s);
              break;
            case 'u16string':
              this.writeUCS2String(t, this.endianness, s);
              break;
            case 'u16stringle':
              this.writeUCS2String(t, l.LITTLE_ENDIAN, s);
              break;
            case 'u16stringbe':
              this.writeUCS2String(t, l.BIG_ENDIAN, s);
              break;
            default:
              if (3 == e.length)
                for (var a = e[1], o = 0; o < t.length; o++)
                  this.writeType(a, t[o]);
              else this.writeStruct(e, t);
          }
          null != s &&
            ((this.position = r), this._realloc(s), (this.position = r + s));
        }),
        (l.prototype.writeUint64 = function (e) {
          var t = Math.floor(e / d);
          this.writeUint32(t), this.writeUint32(4294967295 & e);
        }),
        (l.prototype.writeUint24 = function (e) {
          this.writeUint8((16711680 & e) >> 16),
            this.writeUint8((65280 & e) >> 8),
            this.writeUint8(255 & e);
        }),
        (l.prototype.adjustUint32 = function (e, t) {
          var r = this.position;
          this.seek(e), this.writeUint32(t), this.seek(r);
        }),
        (l.prototype.mapInt32Array = function (e, t) {
          this._realloc(4 * e);
          var r = new Int32Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 4 * e),
            r
          );
        }),
        (l.prototype.mapInt16Array = function (e, t) {
          this._realloc(2 * e);
          var r = new Int16Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 2 * e),
            r
          );
        }),
        (l.prototype.mapInt8Array = function (e) {
          this._realloc(+e);
          var t = new Int8Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (this.position += +e), t;
        }),
        (l.prototype.mapUint32Array = function (e, t) {
          this._realloc(4 * e);
          var r = new Uint32Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 4 * e),
            r
          );
        }),
        (l.prototype.mapUint16Array = function (e, t) {
          this._realloc(2 * e);
          var r = new Uint16Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 2 * e),
            r
          );
        }),
        (l.prototype.mapFloat64Array = function (e, t) {
          this._realloc(8 * e);
          var r = new Float64Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 8 * e),
            r
          );
        }),
        (l.prototype.mapFloat32Array = function (e, t) {
          this._realloc(4 * e);
          var r = new Float32Array(
            this._buffer,
            this.byteOffset + this.position,
            e
          );
          return (
            l.arrayToNative(r, null == t ? this.endianness : t),
            (this.position += 4 * e),
            r
          );
        }),
        ((r.prototype = new l(new ArrayBuffer(), 0, l.BIG_ENDIAN)).initialized =
          function () {
            var e;
            return (
              -1 < this.bufferIndex ||
              (0 < this.buffers.length
                ? 0 === (e = this.buffers[0]).fileStart
                  ? ((this.buffer = e),
                    (this.bufferIndex = 0),
                    f.debug('MultiBufferStream', 'Stream ready for parsing'),
                    !0)
                  : (f.warn(
                      'MultiBufferStream',
                      'The first buffer should have a fileStart of 0'
                    ),
                    this.logBufferLevel(),
                    !1)
                : (f.warn(
                    'MultiBufferStream',
                    'No buffer to start parsing from'
                  ),
                  this.logBufferLevel(),
                  !1))
            );
          }),
        (ArrayBuffer.concat = function (e, t) {
          f.debug(
            'ArrayBuffer',
            'Trying to create a new buffer of size: ' +
              (e.byteLength + t.byteLength)
          );
          var r = new Uint8Array(e.byteLength + t.byteLength);
          return (
            r.set(new Uint8Array(e), 0),
            r.set(new Uint8Array(t), e.byteLength),
            r.buffer
          );
        }),
        (r.prototype.reduceBuffer = function (e, t, r) {
          var i;
          return (
            (i = new Uint8Array(r)).set(new Uint8Array(e, t, r)),
            (i.buffer.fileStart = e.fileStart + t),
            (i.buffer.usedBytes = 0),
            i.buffer
          );
        }),
        (r.prototype.insertBuffer = function (e) {
          for (var t = !0, r = 0; r < this.buffers.length; r++) {
            var i = this.buffers[r];
            if (e.fileStart <= i.fileStart) {
              if (e.fileStart === i.fileStart) {
                if (e.byteLength > i.byteLength) {
                  this.buffers.splice(r, 1), r--;
                  continue;
                }
                f.warn(
                  'MultiBufferStream',
                  'Buffer (fileStart: ' +
                    e.fileStart +
                    ' - Length: ' +
                    e.byteLength +
                    ') already appended, ignoring'
                );
              } else
                e.fileStart + e.byteLength <= i.fileStart ||
                  (e = this.reduceBuffer(e, 0, i.fileStart - e.fileStart)),
                  f.debug(
                    'MultiBufferStream',
                    'Appending new buffer (fileStart: ' +
                      e.fileStart +
                      ' - Length: ' +
                      e.byteLength +
                      ')'
                  ),
                  this.buffers.splice(r, 0, e),
                  0 === r && (this.buffer = e);
              t = !1;
              break;
            }
            if (e.fileStart < i.fileStart + i.byteLength) {
              var i = i.fileStart + i.byteLength - e.fileStart,
                s = e.byteLength - i;
              if (!(0 < s)) {
                t = !1;
                break;
              }
              e = this.reduceBuffer(e, i, s);
            }
          }
          t &&
            (f.debug(
              'MultiBufferStream',
              'Appending new buffer (fileStart: ' +
                e.fileStart +
                ' - Length: ' +
                e.byteLength +
                ')'
            ),
            this.buffers.push(e),
            0 === r) &&
            (this.buffer = e);
        }),
        (r.prototype.logBufferLevel = function (e) {
          for (
            var t, r, i = [], s = '', n = 0, a = 0, o = 0;
            o < this.buffers.length;
            o++
          )
            (t = this.buffers[o]),
              0 === o
                ? (i.push((r = {})),
                  (r.start = t.fileStart),
                  (r.end = t.fileStart + t.byteLength),
                  (s += '[' + r.start + '-'))
                : r.end === t.fileStart
                ? (r.end = t.fileStart + t.byteLength)
                : (((r = {}).start = t.fileStart),
                  (s += i[i.length - 1].end - 1 + '], [' + r.start + '-'),
                  (r.end = t.fileStart + t.byteLength),
                  i.push(r)),
              (n += t.usedBytes),
              (a += t.byteLength);
          0 < i.length && (s += r.end - 1 + ']');
          e = e ? f.info : f.debug;
          0 === this.buffers.length
            ? e('MultiBufferStream', 'No more buffer in memory')
            : e(
                'MultiBufferStream',
                this.buffers.length +
                  ' stored buffer(s) (' +
                  n +
                  '/' +
                  a +
                  ' bytes), continuous ranges: ' +
                  s
              );
        }),
        (r.prototype.cleanBuffers = function () {
          for (var e, t = 0; t < this.buffers.length; t++)
            (e = this.buffers[t]).usedBytes === e.byteLength &&
              (f.debug('MultiBufferStream', 'Removing buffer #' + t),
              this.buffers.splice(t, 1),
              t--);
        }),
        (r.prototype.mergeNextBuffer = function () {
          var e, t, r, i;
          return (
            this.bufferIndex + 1 < this.buffers.length &&
            (e = this.buffers[this.bufferIndex + 1]).fileStart ===
              this.buffer.fileStart + this.buffer.byteLength &&
            ((t = this.buffer.byteLength),
            (r = this.buffer.usedBytes),
            (i = this.buffer.fileStart),
            (this.buffers[this.bufferIndex] = ArrayBuffer.concat(
              this.buffer,
              e
            )),
            (this.buffer = this.buffers[this.bufferIndex]),
            this.buffers.splice(this.bufferIndex + 1, 1),
            (this.buffer.usedBytes = r),
            (this.buffer.fileStart = i),
            f.debug(
              'ISOFile',
              'Concatenating buffer for box parsing (length: ' +
                t +
                '->' +
                this.buffer.byteLength +
                ')'
            ),
            !0)
          );
        }),
        (r.prototype.findPosition = function (e, t, r) {
          for (
            var i = null, s = -1, n = !0 === e ? 0 : this.bufferIndex;
            n < this.buffers.length && (i = this.buffers[n]).fileStart <= t;

          )
            (s = n),
              r &&
                (i.fileStart + i.byteLength <= t
                  ? (i.usedBytes = i.byteLength)
                  : (i.usedBytes = t - i.fileStart),
                this.logBufferLevel()),
              n++;
          return -1 !== s && (i = this.buffers[s]).fileStart + i.byteLength >= t
            ? (f.debug(
                'MultiBufferStream',
                'Found position in existing buffer #' + s
              ),
              s)
            : -1;
        }),
        (r.prototype.findEndContiguousBuf = function (e) {
          var t,
            r,
            e = void 0 !== e ? e : this.bufferIndex,
            i = this.buffers[e];
          if (this.buffers.length > e + 1)
            for (
              t = e + 1;
              t < this.buffers.length &&
              (r = this.buffers[t]).fileStart === i.fileStart + i.byteLength;
              t++
            )
              i = r;
          return i.fileStart + i.byteLength;
        }),
        (r.prototype.getEndFilePositionAfter = function (e) {
          var t = this.findPosition(!0, e, !1);
          return -1 !== t ? this.findEndContiguousBuf(t) : e;
        }),
        (r.prototype.addUsedBytes = function (e) {
          (this.buffer.usedBytes += e), this.logBufferLevel();
        }),
        (r.prototype.setAllUsedBytes = function () {
          (this.buffer.usedBytes = this.buffer.byteLength),
            this.logBufferLevel();
        }),
        (r.prototype.seek = function (e, t, r) {
          return -1 !== (t = this.findPosition(t, e, r))
            ? ((this.buffer = this.buffers[t]),
              (this.bufferIndex = t),
              (this.position = e - this.buffer.fileStart),
              f.debug(
                'MultiBufferStream',
                'Repositioning parser at buffer position: ' + this.position
              ),
              !0)
            : (f.debug(
                'MultiBufferStream',
                'Position ' + e + ' not found in buffered data'
              ),
              !1);
        }),
        (r.prototype.getPosition = function () {
          if (
            -1 === this.bufferIndex ||
            null === this.buffers[this.bufferIndex]
          )
            throw 'Error accessing position in the MultiBufferStream';
          return this.buffers[this.bufferIndex].fileStart + this.position;
        }),
        (r.prototype.getLength = function () {
          return this.byteLength;
        }),
        (r.prototype.getEndPosition = function () {
          if (
            -1 === this.bufferIndex ||
            null === this.buffers[this.bufferIndex]
          )
            throw 'Error accessing position in the MultiBufferStream';
          return this.buffers[this.bufferIndex].fileStart + this.byteLength;
        }),
        (t.MultiBufferStream = r),
        (t.MPEG4DescriptorParser = i),
        {
          ERR_INVALID_DATA: -1,
          ERR_NOT_ENOUGH_DATA: 0,
          OK: 1,
          BASIC_BOXES: ['mdat', 'idat', 'free', 'skip', 'meco', 'strk'],
          FULL_BOXES: ['hmhd', 'nmhd', 'iods', 'xml ', 'bxml', 'ipro', 'mere'],
          CONTAINER_BOXES: [
            ['moov', ['trak', 'pssh']],
            ['trak'],
            ['edts'],
            ['mdia'],
            ['minf'],
            ['dinf'],
            ['stbl', ['sgpd', 'sbgp']],
            ['mvex', ['trex']],
            ['moof', ['traf']],
            ['traf', ['trun', 'sgpd', 'sbgp']],
            ['vttc'],
            ['tref'],
            ['iref'],
            ['mfra', ['tfra']],
            ['meco'],
            ['hnti'],
            ['hinf'],
            ['strk'],
            ['strd'],
            ['sinf'],
            ['rinf'],
            ['schi'],
            ['trgr'],
            ['udta', ['kind']],
            ['iprp', ['ipma']],
            ['ipco'],
          ],
          boxCodes: [],
          fullBoxCodes: [],
          containerBoxCodes: [],
          sampleEntryCodes: {},
          sampleGroupEntryCodes: [],
          trackGroupTypes: [],
          UUIDBoxes: {},
          UUIDs: [],
          initialize: function () {
            (b.FullBox.prototype = new b.Box()),
              (b.ContainerBox.prototype = new b.Box()),
              (b.SampleEntry.prototype = new b.Box()),
              (b.TrackGroupTypeBox.prototype = new b.FullBox()),
              b.BASIC_BOXES.forEach(function (e) {
                b.createBoxCtor(e);
              }),
              b.FULL_BOXES.forEach(function (e) {
                b.createFullBoxCtor(e);
              }),
              b.CONTAINER_BOXES.forEach(function (e) {
                b.createContainerBoxCtor(e[0], null, e[1]);
              });
          },
          Box: function (e, t, r) {
            (this.type = e), (this.size = t), (this.uuid = r);
          },
          FullBox: function (e, t, r) {
            b.Box.call(this, e, t, r), (this.flags = 0), (this.version = 0);
          },
          ContainerBox: function (e, t, r) {
            b.Box.call(this, e, t, r), (this.boxes = []);
          },
          SampleEntry: function (e, t, r, i) {
            b.ContainerBox.call(this, e, t),
              (this.hdr_size = r),
              (this.start = i);
          },
          SampleGroupEntry: function (e) {
            this.grouping_type = e;
          },
          TrackGroupTypeBox: function (e, t) {
            b.FullBox.call(this, e, t);
          },
          createBoxCtor: function (t, e) {
            b.boxCodes.push(t),
              (b[t + 'Box'] = function (e) {
                b.Box.call(this, t, e);
              }),
              (b[t + 'Box'].prototype = new b.Box()),
              e && (b[t + 'Box'].prototype.parse = e);
          },
          createFullBoxCtor: function (t, r) {
            (b[t + 'Box'] = function (e) {
              b.FullBox.call(this, t, e);
            }),
              (b[t + 'Box'].prototype = new b.FullBox()),
              (b[t + 'Box'].prototype.parse = function (e) {
                this.parseFullHeader(e), r && r.call(this, e);
              });
          },
          addSubBoxArrays: function (e) {
            if (e)
              for (var t = (this.subBoxNames = e).length, r = 0; r < t; r++)
                this[e[r] + 's'] = [];
          },
          createContainerBoxCtor: function (t, e, r) {
            (b[t + 'Box'] = function (e) {
              b.ContainerBox.call(this, t, e), b.addSubBoxArrays.call(this, r);
            }),
              (b[t + 'Box'].prototype = new b.ContainerBox()),
              e && (b[t + 'Box'].prototype.parse = e);
          },
          createMediaSampleEntryCtor: function (e, t, r) {
            (b.sampleEntryCodes[e] = []),
              (b[e + 'SampleEntry'] = function (e, t) {
                b.SampleEntry.call(this, e, t), b.addSubBoxArrays.call(this, r);
              }),
              (b[e + 'SampleEntry'].prototype = new b.SampleEntry()),
              t && (b[e + 'SampleEntry'].prototype.parse = t);
          },
          createSampleEntryCtor: function (t, r, e, i) {
            b.sampleEntryCodes[t].push(r),
              (b[r + 'SampleEntry'] = function (e) {
                b[t + 'SampleEntry'].call(this, r, e),
                  b.addSubBoxArrays.call(this, i);
              }),
              (b[r + 'SampleEntry'].prototype = new b[t + 'SampleEntry']()),
              e && (b[r + 'SampleEntry'].prototype.parse = e);
          },
          createEncryptedSampleEntryCtor: function (e, t, r) {
            b.createSampleEntryCtor.call(this, e, t, r, ['sinf']);
          },
          createSampleGroupCtor: function (t, e) {
            (b[t + 'SampleGroupEntry'] = function (e) {
              b.SampleGroupEntry.call(this, t, e);
            }),
              (b[t + 'SampleGroupEntry'].prototype = new b.SampleGroupEntry()),
              e && (b[t + 'SampleGroupEntry'].prototype.parse = e);
          },
          createTrackGroupCtor: function (t, e) {
            (b[t + 'TrackGroupTypeBox'] = function (e) {
              b.TrackGroupTypeBox.call(this, t, e);
            }),
              (b[t + 'TrackGroupTypeBox'].prototype =
                new b.TrackGroupTypeBox()),
              e && (b[t + 'TrackGroupTypeBox'].prototype.parse = e);
          },
          createUUIDBox: function (t, r, i, s) {
            b.UUIDs.push(t),
              (b.UUIDBoxes[t] = function (e) {
                (r ? b.FullBox : i ? b.ContainerBox : b.Box).call(
                  this,
                  'uuid',
                  e,
                  t
                );
              }),
              (b.UUIDBoxes[t].prototype = new (
                r ? b.FullBox : i ? b.ContainerBox : b.Box
              )()),
              s &&
                (b.UUIDBoxes[t].prototype.parse = r
                  ? function (e) {
                      this.parseFullHeader(e), s && s.call(this, e);
                    }
                  : s);
          },
        });
    b.initialize(),
      (b.TKHD_FLAG_ENABLED = 1),
      (b.TKHD_FLAG_IN_MOVIE = 2),
      (b.TKHD_FLAG_IN_PREVIEW = 4),
      (b.TFHD_FLAG_BASE_DATA_OFFSET = 1),
      (b.TFHD_FLAG_SAMPLE_DESC = 2),
      (b.TFHD_FLAG_SAMPLE_DUR = 8),
      (b.TFHD_FLAG_SAMPLE_SIZE = 16),
      (b.TFHD_FLAG_SAMPLE_FLAGS = 32),
      (b.TFHD_FLAG_DUR_EMPTY = 65536),
      (b.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072),
      (b.TRUN_FLAGS_DATA_OFFSET = 1),
      (b.TRUN_FLAGS_FIRST_FLAG = 4),
      (b.TRUN_FLAGS_DURATION = 256),
      (b.TRUN_FLAGS_SIZE = 512),
      (b.TRUN_FLAGS_FLAGS = 1024),
      (b.TRUN_FLAGS_CTS_OFFSET = 2048),
      (b.Box.prototype.add = function (e) {
        return this.addBox(new b[e + 'Box']());
      }),
      (b.Box.prototype.addBox = function (e) {
        return (
          this.boxes.push(e),
          this[e.type + 's'] ? this[e.type + 's'].push(e) : (this[e.type] = e),
          e
        );
      }),
      (b.Box.prototype.set = function (e, t) {
        return (this[e] = t), this;
      }),
      (b.Box.prototype.addEntry = function (e, t) {
        t = t || 'entries';
        return this[t] || (this[t] = []), this[t].push(e), this;
      }),
      ((t.BoxParser = b).parseUUID = function (e) {
        return b.parseHex16(e);
      }),
      (b.parseHex16 = function (e) {
        for (var t = '', r = 0; r < 16; r++) {
          var i = e.readUint8().toString(16);
          t += 1 === i.length ? '0' + i : i;
        }
        return t;
      }),
      (b.parseOneBox = function (e, t, r) {
        var i,
          s,
          n = e.getPosition(),
          a = 0;
        if (e.getEndPosition() - n < 8)
          return (
            f.debug(
              'BoxParser',
              'Not enough data in stream to parse the type and size of the box'
            ),
            { code: b.ERR_NOT_ENOUGH_DATA }
          );
        if (r && r < 8)
          return (
            f.debug(
              'BoxParser',
              'Not enough bytes left in the parent box to parse a new box'
            ),
            { code: b.ERR_NOT_ENOUGH_DATA }
          );
        var o = e.readUint32(),
          l = e.readString(4),
          d = l;
        if (
          (f.debug(
            'BoxParser',
            "Found box of type '" + l + "' and size " + o + ' at position ' + n
          ),
          (a = 8),
          'uuid' == l)
        ) {
          if (e.getEndPosition() - e.getPosition() < 16 || r - a < 16)
            return (
              e.seek(n),
              f.debug(
                'BoxParser',
                'Not enough bytes left in the parent box to parse a UUID box'
              ),
              { code: b.ERR_NOT_ENOUGH_DATA }
            );
          (a += 16), (d = s = b.parseUUID(e));
        }
        if (1 == o) {
          if (e.getEndPosition() - e.getPosition() < 8 || (r && r - a < 8))
            return (
              e.seek(n),
              f.warn(
                'BoxParser',
                'Not enough data in stream to parse the extended size of the "' +
                  l +
                  '" box'
              ),
              { code: b.ERR_NOT_ENOUGH_DATA }
            );
          (o = e.readUint64()), (a += 8);
        } else if (0 === o)
          if (r) o = r;
          else if ('mdat' !== l)
            return (
              f.error(
                'BoxParser',
                "Unlimited box size not supported for type: '" + l + "'"
              ),
              (i = new b.Box(l, o)),
              { code: b.OK, box: i, size: i.size }
            );
        return 0 !== o && o < a
          ? (f.error(
              'BoxParser',
              'Box of type ' +
                l +
                ' has an invalid size ' +
                o +
                ' (too small to be a box)'
            ),
            {
              code: b.ERR_NOT_ENOUGH_DATA,
              type: l,
              size: o,
              hdr_size: a,
              start: n,
            })
          : 0 !== o && r && r < o
          ? (f.error(
              'BoxParser',
              "Box of type '" +
                l +
                "' has a size " +
                o +
                ' greater than its container size ' +
                r
            ),
            {
              code: b.ERR_NOT_ENOUGH_DATA,
              type: l,
              size: o,
              hdr_size: a,
              start: n,
            })
          : 0 !== o && n + o > e.getEndPosition()
          ? (e.seek(n),
            f.info(
              'BoxParser',
              "Not enough data in stream to parse the entire '" + l + "' box"
            ),
            {
              code: b.ERR_NOT_ENOUGH_DATA,
              type: l,
              size: o,
              hdr_size: a,
              start: n,
            })
          : t
          ? { code: b.OK, type: l, size: o, hdr_size: a, start: n }
          : (b[l + 'Box']
              ? (i = new b[l + 'Box'](o))
              : 'uuid' !== l
              ? (f.warn('BoxParser', "Unknown box type: '" + l + "'"),
                ((i = new b.Box(l, o)).has_unparsed_data = !0))
              : b.UUIDBoxes[s]
              ? (i = new b.UUIDBoxes[s](o))
              : (f.warn('BoxParser', "Unknown uuid type: '" + s + "'"),
                ((i = new b.Box(l, o)).uuid = s),
                (i.has_unparsed_data = !0)),
            (i.hdr_size = a),
            (i.start = n),
            i.write === b.Box.prototype.write &&
              'mdat' !== i.type &&
              (f.info(
                'BoxParser',
                "'" +
                  d +
                  "' box writing not yet implemented, keeping unparsed data in memory for later write"
              ),
              i.parseDataAndRewind(e)),
            i.parse(e),
            (r = e.getPosition() - (i.start + i.size)) < 0
              ? (f.warn(
                  'BoxParser',
                  "Parsing of box '" +
                    d +
                    "' did not read the entire indicated box data size (missing " +
                    -r +
                    ' bytes), seeking forward'
                ),
                e.seek(i.start + i.size))
              : 0 < r &&
                (f.error(
                  'BoxParser',
                  "Parsing of box '" +
                    d +
                    "' read " +
                    r +
                    ' more bytes than the indicated box data size, seeking backwards'
                ),
                0 !== i.size) &&
                e.seek(i.start + i.size),
            { code: b.OK, box: i, size: i.size });
      }),
      (b.Box.prototype.parse = function (e) {
        'mdat' != this.type
          ? (this.data = e.readUint8Array(this.size - this.hdr_size))
          : 0 === this.size
          ? e.seek(e.getEndPosition())
          : e.seek(this.start + this.size);
      }),
      (b.Box.prototype.parseDataAndRewind = function (e) {
        (this.data = e.readUint8Array(this.size - this.hdr_size)),
          (e.position -= this.size - this.hdr_size);
      }),
      (b.FullBox.prototype.parseDataAndRewind = function (e) {
        this.parseFullHeader(e),
          (this.data = e.readUint8Array(this.size - this.hdr_size)),
          (this.hdr_size -= 4),
          (e.position -= this.size - this.hdr_size);
      }),
      (b.FullBox.prototype.parseFullHeader = function (e) {
        (this.version = e.readUint8()),
          (this.flags = e.readUint24()),
          (this.hdr_size += 4);
      }),
      (b.FullBox.prototype.parse = function (e) {
        this.parseFullHeader(e),
          (this.data = e.readUint8Array(this.size - this.hdr_size));
      }),
      (b.ContainerBox.prototype.parse = function (e) {
        for (; e.getPosition() < this.start + this.size; ) {
          if (
            (r = b.parseOneBox(
              e,
              !1,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          var t,
            r = r.box;
          this.boxes.push(r),
            this.subBoxNames && -1 != this.subBoxNames.indexOf(r.type)
              ? this[
                  this.subBoxNames[this.subBoxNames.indexOf(r.type)] + 's'
                ].push(r)
              : this[(t = 'uuid' !== r.type ? r.type : r.uuid)]
              ? f.warn(
                  'Box of type ' + t + ' already stored in field of this type'
                )
              : (this[t] = r);
        }
      }),
      (b.Box.prototype.parseLanguage = function (e) {
        this.language = e.readUint16();
        e = [];
        (e[0] = (this.language >> 10) & 31),
          (e[1] = (this.language >> 5) & 31),
          (e[2] = 31 & this.language),
          (this.languageString = String.fromCharCode(
            e[0] + 96,
            e[1] + 96,
            e[2] + 96
          ));
      }),
      (b.SAMPLE_ENTRY_TYPE_VISUAL = 'Visual'),
      (b.SAMPLE_ENTRY_TYPE_AUDIO = 'Audio'),
      (b.SAMPLE_ENTRY_TYPE_HINT = 'Hint'),
      (b.SAMPLE_ENTRY_TYPE_METADATA = 'Metadata'),
      (b.SAMPLE_ENTRY_TYPE_SUBTITLE = 'Subtitle'),
      (b.SAMPLE_ENTRY_TYPE_SYSTEM = 'System'),
      (b.SAMPLE_ENTRY_TYPE_TEXT = 'Text'),
      (b.SampleEntry.prototype.parseHeader = function (e) {
        e.readUint8Array(6),
          (this.data_reference_index = e.readUint16()),
          (this.hdr_size += 8);
      }),
      (b.SampleEntry.prototype.parse = function (e) {
        this.parseHeader(e),
          (this.data = e.readUint8Array(this.size - this.hdr_size));
      }),
      (b.SampleEntry.prototype.parseDataAndRewind = function (e) {
        this.parseHeader(e),
          (this.data = e.readUint8Array(this.size - this.hdr_size)),
          (this.hdr_size -= 8),
          (e.position -= this.size - this.hdr_size);
      }),
      (b.SampleEntry.prototype.parseFooter = function (e) {
        b.ContainerBox.prototype.parse.call(this, e);
      }),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_HINT),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_METADATA),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_SUBTITLE),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_SYSTEM),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_TEXT),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, function (e) {
        var t;
        this.parseHeader(e),
          e.readUint16(),
          e.readUint16(),
          e.readUint32Array(3),
          (this.width = e.readUint16()),
          (this.height = e.readUint16()),
          (this.horizresolution = e.readUint32()),
          (this.vertresolution = e.readUint32()),
          e.readUint32(),
          (this.frame_count = e.readUint16()),
          (t = Math.min(31, e.readUint8())),
          (this.compressorname = e.readString(t)),
          t < 31 && e.readString(31 - t),
          (this.depth = e.readUint16()),
          e.readUint16(),
          this.parseFooter(e);
      }),
      b.createMediaSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, function (e) {
        this.parseHeader(e),
          e.readUint32Array(2),
          (this.channel_count = e.readUint16()),
          (this.samplesize = e.readUint16()),
          e.readUint16(),
          e.readUint16(),
          (this.samplerate = e.readUint32() / 65536),
          this.parseFooter(e);
      }),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'avc1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'avc2'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'avc3'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'avc4'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'av01'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'hvc1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'hev1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vvc1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vvi1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vvs1'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vvcN'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vp08'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'vp09'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, 'mp4a'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, 'ac-3'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, 'ec-3'),
      b.createSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, 'Opus'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_VISUAL, 'encv'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_AUDIO, 'enca'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_SUBTITLE, 'encu'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_SYSTEM, 'encs'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_TEXT, 'enct'),
      b.createEncryptedSampleEntryCtor(b.SAMPLE_ENTRY_TYPE_METADATA, 'encm'),
      b.createBoxCtor('a1lx', function (e) {
        var t = 16 * (1 + (1 & e.readUint8()));
        this.layer_size = [];
        for (var r = 0; r < 3; r++)
          this.layer_size[r] = 16 == t ? e.readUint16() : e.readUint32();
      }),
      b.createBoxCtor('a1op', function (e) {
        this.op_index = e.readUint8();
      }),
      b.createFullBoxCtor('auxC', function (e) {
        this.aux_type = e.readCString();
        var t = this.size - this.hdr_size - (this.aux_type.length + 1);
        this.aux_subtype = e.readUint8Array(t);
      }),
      b.createBoxCtor('av1C', function (e) {
        var t = e.readUint8();
        if ((t >> 7) & !1) f.error('av1C marker problem');
        else if (((this.version = 127 & t), 1 === this.version))
          if (
            ((t = e.readUint8()),
            (this.seq_profile = (t >> 5) & 7),
            (this.seq_level_idx_0 = 31 & t),
            (t = e.readUint8()),
            (this.seq_tier_0 = (t >> 7) & 1),
            (this.high_bitdepth = (t >> 6) & 1),
            (this.twelve_bit = (t >> 5) & 1),
            (this.monochrome = (t >> 4) & 1),
            (this.chroma_subsampling_x = (t >> 3) & 1),
            (this.chroma_subsampling_y = (t >> 2) & 1),
            (this.chroma_sample_position = 3 & t),
            (t = e.readUint8()),
            (this.reserved_1 = (t >> 5) & 7),
            0 === this.reserved_1)
          ) {
            if (
              ((this.initial_presentation_delay_present = (t >> 4) & 1),
              1 === this.initial_presentation_delay_present)
            )
              this.initial_presentation_delay_minus_one = 15 & t;
            else if (((this.reserved_2 = 15 & t), 0 !== this.reserved_2))
              return void f.error('av1C reserved_2 parsing problem');
            t = this.size - this.hdr_size - 4;
            this.configOBUs = e.readUint8Array(t);
          } else f.error('av1C reserved_1 parsing problem');
        else f.error('av1C version ' + this.version + ' not supported');
      }),
      b.createBoxCtor('avcC', function (e) {
        var t, r;
        for (
          this.configurationVersion = e.readUint8(),
            this.AVCProfileIndication = e.readUint8(),
            this.profile_compatibility = e.readUint8(),
            this.AVCLevelIndication = e.readUint8(),
            this.lengthSizeMinusOne = 3 & e.readUint8(),
            this.nb_SPS_nalus = 31 & e.readUint8(),
            r = this.size - this.hdr_size - 6,
            this.SPS = [],
            t = 0;
          t < this.nb_SPS_nalus;
          t++
        )
          (this.SPS[t] = {}),
            (this.SPS[t].length = e.readUint16()),
            (this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length)),
            (r -= 2 + this.SPS[t].length);
        for (
          this.nb_PPS_nalus = e.readUint8(), r--, this.PPS = [], t = 0;
          t < this.nb_PPS_nalus;
          t++
        )
          (this.PPS[t] = {}),
            (this.PPS[t].length = e.readUint16()),
            (this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length)),
            (r -= 2 + this.PPS[t].length);
        0 < r && (this.ext = e.readUint8Array(r));
      }),
      b.createBoxCtor('btrt', function (e) {
        (this.bufferSizeDB = e.readUint32()),
          (this.maxBitrate = e.readUint32()),
          (this.avgBitrate = e.readUint32());
      }),
      b.createBoxCtor('clap', function (e) {
        (this.cleanApertureWidthN = e.readUint32()),
          (this.cleanApertureWidthD = e.readUint32()),
          (this.cleanApertureHeightN = e.readUint32()),
          (this.cleanApertureHeightD = e.readUint32()),
          (this.horizOffN = e.readUint32()),
          (this.horizOffD = e.readUint32()),
          (this.vertOffN = e.readUint32()),
          (this.vertOffD = e.readUint32());
      }),
      b.createBoxCtor('clli', function (e) {
        (this.max_content_light_level = e.readUint16()),
          (this.max_pic_average_light_level = e.readUint16());
      }),
      b.createFullBoxCtor('co64', function (e) {
        var t,
          r = e.readUint32();
        if (((this.chunk_offsets = []), 0 === this.version))
          for (t = 0; t < r; t++) this.chunk_offsets.push(e.readUint64());
      }),
      b.createFullBoxCtor('CoLL', function (e) {
        (this.maxCLL = e.readUint16()), (this.maxFALL = e.readUint16());
      }),
      b.createBoxCtor('colr', function (e) {
        var t;
        (this.colour_type = e.readString(4)),
          'nclx' === this.colour_type
            ? ((this.colour_primaries = e.readUint16()),
              (this.transfer_characteristics = e.readUint16()),
              (this.matrix_coefficients = e.readUint16()),
              (t = e.readUint8()),
              (this.full_range_flag = t >> 7))
            : ('rICC' !== this.colour_type && 'prof' !== this.colour_type) ||
              (this.ICC_profile = e.readUint8Array(this.size - 4));
      }),
      b.createFullBoxCtor('cprt', function (e) {
        this.parseLanguage(e), (this.notice = e.readCString());
      }),
      b.createFullBoxCtor('cslg', function (e) {
        0 === this.version &&
          ((this.compositionToDTSShift = e.readInt32()),
          (this.leastDecodeToDisplayDelta = e.readInt32()),
          (this.greatestDecodeToDisplayDelta = e.readInt32()),
          (this.compositionStartTime = e.readInt32()),
          (this.compositionEndTime = e.readInt32()));
      }),
      b.createFullBoxCtor('ctts', function (e) {
        var t,
          r = e.readUint32();
        if (
          ((this.sample_counts = []),
          (this.sample_offsets = []),
          0 === this.version)
        )
          for (t = 0; t < r; t++) {
            this.sample_counts.push(e.readUint32());
            var i = e.readInt32();
            i < 0 &&
              f.warn(
                'BoxParser',
                'ctts box uses negative values without using version 1'
              ),
              this.sample_offsets.push(i);
          }
        else if (1 == this.version)
          for (t = 0; t < r; t++)
            this.sample_counts.push(e.readUint32()),
              this.sample_offsets.push(e.readInt32());
      }),
      b.createBoxCtor('dac3', function (e) {
        var t = e.readUint8(),
          r = e.readUint8(),
          e = e.readUint8();
        (this.fscod = t >> 6),
          (this.bsid = (t >> 1) & 31),
          (this.bsmod = ((1 & t) << 2) | ((r >> 6) & 3)),
          (this.acmod = (r >> 3) & 7),
          (this.lfeon = (r >> 2) & 1),
          (this.bit_rate_code = (3 & r) | ((e >> 5) & 7));
      }),
      b.createBoxCtor('dec3', function (e) {
        var t = e.readUint16();
        (this.data_rate = t >> 3),
          (this.num_ind_sub = 7 & t),
          (this.ind_subs = []);
        for (var r = 0; r < this.num_ind_sub + 1; r++) {
          var i = {},
            s = (this.ind_subs.push(i), e.readUint8()),
            n = e.readUint8(),
            a = e.readUint8();
          (i.fscod = s >> 6),
            (i.bsid = (s >> 1) & 31),
            (i.bsmod = ((1 & s) << 4) | ((n >> 4) & 15)),
            (i.acmod = (n >> 1) & 7),
            (i.lfeon = 1 & n),
            (i.num_dep_sub = (a >> 1) & 15),
            0 < i.num_dep_sub && (i.chan_loc = ((1 & a) << 8) | e.readUint8());
        }
      }),
      b.createFullBoxCtor('dfLa', function (e) {
        var t = [],
          r = [
            'STREAMINFO',
            'PADDING',
            'APPLICATION',
            'SEEKTABLE',
            'VORBIS_COMMENT',
            'CUESHEET',
            'PICTURE',
            'RESERVED',
          ];
        for (this.parseFullHeader(e); ; ) {
          var i = e.readUint8(),
            s = Math.min(127 & i, r.length - 1);
          if (
            (s
              ? e.readUint8Array(e.readUint24())
              : (e.readUint8Array(13),
                (this.samplerate = e.readUint32() >> 12),
                e.readUint8Array(20)),
            t.push(r[s]),
            128 & i)
          )
            break;
        }
        this.numMetadataBlocks = t.length + ' (' + t.join(', ') + ')';
      }),
      b.createBoxCtor('dimm', function (e) {
        this.bytessent = e.readUint64();
      }),
      b.createBoxCtor('dmax', function (e) {
        this.time = e.readUint32();
      }),
      b.createBoxCtor('dmed', function (e) {
        this.bytessent = e.readUint64();
      }),
      b.createBoxCtor('dOps', function (e) {
        if (
          ((this.Version = e.readUint8()),
          (this.OutputChannelCount = e.readUint8()),
          (this.PreSkip = e.readUint16()),
          (this.InputSampleRate = e.readUint32()),
          (this.OutputGain = e.readInt16()),
          (this.ChannelMappingFamily = e.readUint8()),
          0 !== this.ChannelMappingFamily)
        ) {
          (this.StreamCount = e.readUint8()),
            (this.CoupledCount = e.readUint8()),
            (this.ChannelMapping = []);
          for (var t = 0; t < this.OutputChannelCount; t++)
            this.ChannelMapping[t] = e.readUint8();
        }
      }),
      b.createFullBoxCtor('dref', function (e) {
        var t;
        this.entries = [];
        for (var r = e.readUint32(), i = 0; i < r; i++) {
          if (
            (t = b.parseOneBox(
              e,
              !1,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          (t = t.box), this.entries.push(t);
        }
      }),
      b.createBoxCtor('drep', function (e) {
        this.bytessent = e.readUint64();
      }),
      b.createFullBoxCtor('elng', function (e) {
        this.extended_language = e.readString(this.size - this.hdr_size);
      }),
      b.createFullBoxCtor('elst', function (e) {
        this.entries = [];
        for (var t = e.readUint32(), r = 0; r < t; r++) {
          var i = {};
          this.entries.push(i),
            1 === this.version
              ? ((i.segment_duration = e.readUint64()),
                (i.media_time = e.readInt64()))
              : ((i.segment_duration = e.readUint32()),
                (i.media_time = e.readInt32())),
            (i.media_rate_integer = e.readInt16()),
            (i.media_rate_fraction = e.readInt16());
        }
      }),
      b.createFullBoxCtor('emsg', function (e) {
        1 == this.version
          ? ((this.timescale = e.readUint32()),
            (this.presentation_time = e.readUint64()),
            (this.event_duration = e.readUint32()),
            (this.id = e.readUint32()),
            (this.scheme_id_uri = e.readCString()),
            (this.value = e.readCString()))
          : ((this.scheme_id_uri = e.readCString()),
            (this.value = e.readCString()),
            (this.timescale = e.readUint32()),
            (this.presentation_time_delta = e.readUint32()),
            (this.event_duration = e.readUint32()),
            (this.id = e.readUint32()));
        var t =
          this.size -
          this.hdr_size -
          (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
        1 == this.version && (t -= 4),
          (this.message_data = e.readUint8Array(t));
      }),
      b.createFullBoxCtor('esds', function (e) {
        var e = e.readUint8Array(this.size - this.hdr_size),
          t = new i();
        this.esd = t.parseOneDescriptor(new l(e.buffer, 0, l.BIG_ENDIAN));
      }),
      b.createBoxCtor('fiel', function (e) {
        (this.fieldCount = e.readUint8()), (this.fieldOrdering = e.readUint8());
      }),
      b.createBoxCtor('frma', function (e) {
        this.data_format = e.readString(4);
      }),
      b.createBoxCtor('ftyp', function (e) {
        var t = this.size - this.hdr_size;
        (this.major_brand = e.readString(4)),
          (this.minor_version = e.readUint32()),
          (t -= 8),
          (this.compatible_brands = []);
        for (var r = 0; 4 <= t; )
          (this.compatible_brands[r] = e.readString(4)), (t -= 4), r++;
      }),
      b.createFullBoxCtor('hdlr', function (e) {
        0 === this.version &&
          (e.readUint32(),
          (this.handler = e.readString(4)),
          e.readUint32Array(3),
          (this.name = e.readString(this.size - this.hdr_size - 20)),
          '\0' === this.name[this.name.length - 1]) &&
          (this.name = this.name.slice(0, -1));
      }),
      b.createBoxCtor('hvcC', function (e) {
        (this.configurationVersion = e.readUint8()),
          (r = e.readUint8()),
          (this.general_profile_space = r >> 6),
          (this.general_tier_flag = (32 & r) >> 5),
          (this.general_profile_idc = 31 & r),
          (this.general_profile_compatibility = e.readUint32()),
          (this.general_constraint_indicator = e.readUint8Array(6)),
          (this.general_level_idc = e.readUint8()),
          (this.min_spatial_segmentation_idc = 4095 & e.readUint16()),
          (this.parallelismType = 3 & e.readUint8()),
          (this.chroma_format_idc = 3 & e.readUint8()),
          (this.bit_depth_luma_minus8 = 7 & e.readUint8()),
          (this.bit_depth_chroma_minus8 = 7 & e.readUint8()),
          (this.avgFrameRate = e.readUint16()),
          (r = e.readUint8()),
          (this.constantFrameRate = r >> 6),
          (this.numTemporalLayers = (13 & r) >> 3),
          (this.temporalIdNested = (4 & r) >> 2),
          (this.lengthSizeMinusOne = 3 & r),
          (this.nalu_arrays = []);
        for (var t, r, i = e.readUint8(), s = 0; s < i; s++)
          for (
            var n = [],
              a =
                (this.nalu_arrays.push(n),
                (r = e.readUint8()),
                (n.completeness = (128 & r) >> 7),
                (n.nalu_type = 63 & r),
                e.readUint16()),
              o = 0;
            o < a;
            o++
          ) {
            var l = {};
            n.push(l), (t = e.readUint16()), (l.data = e.readUint8Array(t));
          }
      }),
      b.createFullBoxCtor('iinf', function (e) {
        var t;
        0 === this.version
          ? (this.entry_count = e.readUint16())
          : (this.entry_count = e.readUint32()),
          (this.item_infos = []);
        for (var r = 0; r < this.entry_count; r++) {
          if (
            (t = b.parseOneBox(
              e,
              !1,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          'infe' !== t.box.type &&
            f.error('BoxParser', "Expected 'infe' box, got " + t.box.type),
            (this.item_infos[r] = t.box);
        }
      }),
      b.createFullBoxCtor('iloc', function (e) {
        var t = e.readUint8(),
          r =
            ((this.offset_size = (t >> 4) & 15),
            (this.length_size = 15 & t),
            (t = e.readUint8()),
            (this.base_offset_size = (t >> 4) & 15),
            1 === this.version || 2 === this.version
              ? (this.index_size = 15 & t)
              : (this.index_size = 0),
            (this.items = []),
            0);
        if (this.version < 2) r = e.readUint16();
        else {
          if (2 !== this.version) throw 'version of iloc box not supported';
          r = e.readUint32();
        }
        for (var i = 0; i < r; i++) {
          var s = {};
          if ((this.items.push(s), !(this.version < 2) && 2 !== this.version))
            throw 'version of iloc box not supported';
          switch (
            ((s.item_ID = e.readUint16()),
            1 === this.version || 2 === this.version
              ? (s.construction_method = 15 & e.readUint16())
              : (s.construction_method = 0),
            (s.data_reference_index = e.readUint16()),
            this.base_offset_size)
          ) {
            case 0:
              s.base_offset = 0;
              break;
            case 4:
              s.base_offset = e.readUint32();
              break;
            case 8:
              s.base_offset = e.readUint64();
              break;
            default:
              throw 'Error reading base offset size';
          }
          var n = e.readUint16();
          s.extents = [];
          for (var a = 0; a < n; a++) {
            var o = {};
            if ((s.extents.push(o), 1 === this.version || 2 === this.version))
              switch (this.index_size) {
                case 0:
                  o.extent_index = 0;
                  break;
                case 4:
                  o.extent_index = e.readUint32();
                  break;
                case 8:
                  o.extent_index = e.readUint64();
                  break;
                default:
                  throw 'Error reading extent index';
              }
            switch (this.offset_size) {
              case 0:
                o.extent_offset = 0;
                break;
              case 4:
                o.extent_offset = e.readUint32();
                break;
              case 8:
                o.extent_offset = e.readUint64();
                break;
              default:
                throw 'Error reading extent index';
            }
            switch (this.length_size) {
              case 0:
                o.extent_length = 0;
                break;
              case 4:
                o.extent_length = e.readUint32();
                break;
              case 8:
                o.extent_length = e.readUint64();
                break;
              default:
                throw 'Error reading extent index';
            }
          }
        }
      }),
      b.createBoxCtor('imir', function (e) {
        e = e.readUint8();
        (this.reserved = e >> 7), (this.axis = 1 & e);
      }),
      b.createFullBoxCtor('infe', function (e) {
        (0 !== this.version && 1 !== this.version) ||
          ((this.item_ID = e.readUint16()),
          (this.item_protection_index = e.readUint16()),
          (this.item_name = e.readCString()),
          (this.content_type = e.readCString()),
          (this.content_encoding = e.readCString())),
          1 === this.version
            ? ((this.extension_type = e.readString(4)),
              f.warn('BoxParser', 'Cannot parse extension type'),
              e.seek(this.start + this.size))
            : 2 <= this.version &&
              (2 === this.version
                ? (this.item_ID = e.readUint16())
                : 3 === this.version && (this.item_ID = e.readUint32()),
              (this.item_protection_index = e.readUint16()),
              (this.item_type = e.readString(4)),
              (this.item_name = e.readCString()),
              'mime' === this.item_type
                ? ((this.content_type = e.readCString()),
                  (this.content_encoding = e.readCString()))
                : 'uri ' === this.item_type &&
                  (this.item_uri_type = e.readCString()));
      }),
      b.createFullBoxCtor('ipma', function (e) {
        var t, r;
        for (
          entry_count = e.readUint32(), this.associations = [], t = 0;
          t < entry_count;
          t++
        ) {
          var i = {},
            s =
              (this.associations.push(i),
              this.version < 1
                ? (i.id = e.readUint16())
                : (i.id = e.readUint32()),
              e.readUint8());
          for (i.props = [], r = 0; r < s; r++) {
            var n = e.readUint8(),
              a = {};
            i.props.push(a),
              (a.essential = (128 & n) >> 7 == 1),
              1 & this.flags
                ? (a.property_index = ((127 & n) << 8) | e.readUint8())
                : (a.property_index = 127 & n);
          }
        }
      }),
      b.createFullBoxCtor('iref', function (e) {
        var t;
        for (this.references = []; e.getPosition() < this.start + this.size; ) {
          if (
            (t = b.parseOneBox(
              e,
              !0,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          (t = new (
            0 === this.version
              ? b.SingleItemTypeReferenceBox
              : b.SingleItemTypeReferenceBoxLarge
          )(t.type, t.size, t.hdr_size, t.start)).write ===
            b.Box.prototype.write &&
            'mdat' !== t.type &&
            (f.warn(
              'BoxParser',
              t.type +
                ' box writing not yet implemented, keeping unparsed data in memory for later write'
            ),
            t.parseDataAndRewind(e)),
            t.parse(e),
            this.references.push(t);
        }
      }),
      b.createBoxCtor('irot', function (e) {
        this.angle = 3 & e.readUint8();
      }),
      b.createFullBoxCtor('ispe', function (e) {
        (this.image_width = e.readUint32()),
          (this.image_height = e.readUint32());
      }),
      b.createFullBoxCtor('kind', function (e) {
        (this.schemeURI = e.readCString()), (this.value = e.readCString());
      }),
      b.createFullBoxCtor('leva', function (e) {
        var t = e.readUint8();
        this.levels = [];
        for (var r = 0; r < t; r++) {
          var i = {},
            s =
              (((this.levels[r] = i).track_ID = e.readUint32()), e.readUint8());
          switch (
            ((i.padding_flag = s >> 7),
            (i.assignment_type = 127 & s),
            i.assignment_type)
          ) {
            case 0:
              i.grouping_type = e.readString(4);
              break;
            case 1:
              (i.grouping_type = e.readString(4)),
                (i.grouping_type_parameter = e.readUint32());
              break;
            case 2:
            case 3:
              break;
            case 4:
              i.sub_track_id = e.readUint32();
              break;
            default:
              f.warn('BoxParser', 'Unknown leva assignement type');
          }
        }
      }),
      b.createBoxCtor('lsel', function (e) {
        this.layer_id = e.readUint16();
      }),
      b.createBoxCtor('maxr', function (e) {
        (this.period = e.readUint32()), (this.bytes = e.readUint32());
      }),
      b.createBoxCtor('mdcv', function (e) {
        (this.display_primaries = []),
          (this.display_primaries[0] = {}),
          (this.display_primaries[0].x = e.readUint16()),
          (this.display_primaries[0].y = e.readUint16()),
          (this.display_primaries[1] = {}),
          (this.display_primaries[1].x = e.readUint16()),
          (this.display_primaries[1].y = e.readUint16()),
          (this.display_primaries[2] = {}),
          (this.display_primaries[2].x = e.readUint16()),
          (this.display_primaries[2].y = e.readUint16()),
          (this.white_point = {}),
          (this.white_point.x = e.readUint16()),
          (this.white_point.y = e.readUint16()),
          (this.max_display_mastering_luminance = e.readUint32()),
          (this.min_display_mastering_luminance = e.readUint32());
      }),
      b.createFullBoxCtor('mdhd', function (e) {
        1 == this.version
          ? ((this.creation_time = e.readUint64()),
            (this.modification_time = e.readUint64()),
            (this.timescale = e.readUint32()),
            (this.duration = e.readUint64()))
          : ((this.creation_time = e.readUint32()),
            (this.modification_time = e.readUint32()),
            (this.timescale = e.readUint32()),
            (this.duration = e.readUint32())),
          this.parseLanguage(e),
          e.readUint16();
      }),
      b.createFullBoxCtor('mehd', function (e) {
        1 & this.flags &&
          (f.warn(
            'BoxParser',
            'mehd box incorrectly uses flags set to 1, converting version to 1'
          ),
          (this.version = 1)),
          1 == this.version
            ? (this.fragment_duration = e.readUint64())
            : (this.fragment_duration = e.readUint32());
      }),
      b.createFullBoxCtor('meta', function (e) {
        (this.boxes = []), b.ContainerBox.prototype.parse.call(this, e);
      }),
      b.createFullBoxCtor('mfhd', function (e) {
        this.sequence_number = e.readUint32();
      }),
      b.createFullBoxCtor('mfro', function (e) {
        this._size = e.readUint32();
      }),
      b.createFullBoxCtor('mvhd', function (e) {
        1 == this.version
          ? ((this.creation_time = e.readUint64()),
            (this.modification_time = e.readUint64()),
            (this.timescale = e.readUint32()),
            (this.duration = e.readUint64()))
          : ((this.creation_time = e.readUint32()),
            (this.modification_time = e.readUint32()),
            (this.timescale = e.readUint32()),
            (this.duration = e.readUint32())),
          (this.rate = e.readUint32()),
          (this.volume = e.readUint16() >> 8),
          e.readUint16(),
          e.readUint32Array(2),
          (this.matrix = e.readUint32Array(9)),
          e.readUint32Array(6),
          (this.next_track_id = e.readUint32());
      }),
      b.createBoxCtor('npck', function (e) {
        this.packetssent = e.readUint32();
      }),
      b.createBoxCtor('nump', function (e) {
        this.packetssent = e.readUint64();
      }),
      b.createFullBoxCtor('padb', function (e) {
        var t = e.readUint32();
        this.padbits = [];
        for (var r = 0; r < Math.floor((t + 1) / 2); r++)
          this.padbits = e.readUint8();
      }),
      b.createBoxCtor('pasp', function (e) {
        (this.hSpacing = e.readUint32()), (this.vSpacing = e.readUint32());
      }),
      b.createBoxCtor('payl', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
      }),
      b.createBoxCtor('payt', function (e) {
        this.payloadID = e.readUint32();
        var t = e.readUint8();
        this.rtpmap_string = e.readString(t);
      }),
      b.createFullBoxCtor('pdin', function (e) {
        var t = (this.size - this.hdr_size) / 8;
        (this.rate = []), (this.initial_delay = []);
        for (var r = 0; r < t; r++)
          (this.rate[r] = e.readUint32()),
            (this.initial_delay[r] = e.readUint32());
      }),
      b.createFullBoxCtor('pitm', function (e) {
        0 === this.version
          ? (this.item_id = e.readUint16())
          : (this.item_id = e.readUint32());
      }),
      b.createFullBoxCtor('pixi', function (e) {
        var t;
        for (
          this.num_channels = e.readUint8(), this.bits_per_channels = [], t = 0;
          t < this.num_channels;
          t++
        )
          this.bits_per_channels[t] = e.readUint8();
      }),
      b.createBoxCtor('pmax', function (e) {
        this.bytes = e.readUint32();
      }),
      b.createFullBoxCtor('prft', function (e) {
        (this.ref_track_id = e.readUint32()),
          (this.ntp_timestamp = e.readUint64()),
          0 === this.version
            ? (this.media_time = e.readUint32())
            : (this.media_time = e.readUint64());
      }),
      b.createFullBoxCtor('pssh', function (e) {
        if (((this.system_id = b.parseHex16(e)), 0 < this.version)) {
          var t = e.readUint32();
          this.kid = [];
          for (var r = 0; r < t; r++) this.kid[r] = b.parseHex16(e);
        }
        var i = e.readUint32();
        0 < i && (this.data = e.readUint8Array(i));
      }),
      b.createFullBoxCtor('clef', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
      }),
      b.createFullBoxCtor('enof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
      }),
      b.createFullBoxCtor('prof', function (e) {
        (this.width = e.readUint32()), (this.height = e.readUint32());
      }),
      b.createContainerBoxCtor('tapt', null, ['clef', 'prof', 'enof']),
      b.createBoxCtor('rtp ', function (e) {
        (this.descriptionformat = e.readString(4)),
          (this.sdptext = e.readString(this.size - this.hdr_size - 4));
      }),
      b.createFullBoxCtor('saio', function (e) {
        1 & this.flags &&
          ((this.aux_info_type = e.readUint32()),
          (this.aux_info_type_parameter = e.readUint32()));
        var t = e.readUint32();
        this.offset = [];
        for (var r = 0; r < t; r++)
          0 === this.version
            ? (this.offset[r] = e.readUint32())
            : (this.offset[r] = e.readUint64());
      }),
      b.createFullBoxCtor('saiz', function (e) {
        1 & this.flags &&
          ((this.aux_info_type = e.readUint32()),
          (this.aux_info_type_parameter = e.readUint32())),
          (this.default_sample_info_size = e.readUint8());
        var t = e.readUint32();
        if (((this.sample_info_size = []), 0 === this.default_sample_info_size))
          for (var r = 0; r < t; r++) this.sample_info_size[r] = e.readUint8();
      }),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_METADATA,
        'mett',
        function (e) {
          this.parseHeader(e),
            (this.content_encoding = e.readCString()),
            (this.mime_format = e.readCString()),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_METADATA,
        'metx',
        function (e) {
          this.parseHeader(e),
            (this.content_encoding = e.readCString()),
            (this.namespace = e.readCString()),
            (this.schema_location = e.readCString()),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_SUBTITLE,
        'sbtt',
        function (e) {
          this.parseHeader(e),
            (this.content_encoding = e.readCString()),
            (this.mime_format = e.readCString()),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_SUBTITLE,
        'stpp',
        function (e) {
          this.parseHeader(e),
            (this.namespace = e.readCString()),
            (this.schema_location = e.readCString()),
            (this.auxiliary_mime_types = e.readCString()),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_SUBTITLE,
        'stxt',
        function (e) {
          this.parseHeader(e),
            (this.content_encoding = e.readCString()),
            (this.mime_format = e.readCString()),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_SUBTITLE,
        'tx3g',
        function (e) {
          this.parseHeader(e),
            (this.displayFlags = e.readUint32()),
            (this.horizontal_justification = e.readInt8()),
            (this.vertical_justification = e.readInt8()),
            (this.bg_color_rgba = e.readUint8Array(4)),
            (this.box_record = e.readInt16Array(4)),
            (this.style_record = e.readUint8Array(12)),
            this.parseFooter(e);
        }
      ),
      b.createSampleEntryCtor(
        b.SAMPLE_ENTRY_TYPE_METADATA,
        'wvtt',
        function (e) {
          this.parseHeader(e), this.parseFooter(e);
        }
      ),
      b.createSampleGroupCtor('alst', function (e) {
        var t,
          r = e.readUint16();
        for (
          this.first_output_sample = e.readUint16(),
            this.sample_offset = [],
            t = 0;
          t < r;
          t++
        )
          this.sample_offset[t] = e.readUint32();
        var i = this.description_length - 4 - 4 * r;
        for (
          this.num_output_samples = [], this.num_total_samples = [], t = 0;
          t < i / 4;
          t++
        )
          (this.num_output_samples[t] = e.readUint16()),
            (this.num_total_samples[t] = e.readUint16());
      }),
      b.createSampleGroupCtor('avll', function (e) {
        (this.layerNumber = e.readUint8()),
          (this.accurateStatisticsFlag = e.readUint8()),
          (this.avgBitRate = e.readUint16()),
          (this.avgFrameRate = e.readUint16());
      }),
      b.createSampleGroupCtor('avss', function (e) {
        (this.subSequenceIdentifier = e.readUint16()),
          (this.layerNumber = e.readUint8());
        var t = e.readUint8();
        (this.durationFlag = t >> 7),
          (this.avgRateFlag = (t >> 6) & 1),
          this.durationFlag && (this.duration = e.readUint32()),
          this.avgRateFlag &&
            ((this.accurateStatisticsFlag = e.readUint8()),
            (this.avgBitRate = e.readUint16()),
            (this.avgFrameRate = e.readUint16())),
          (this.dependency = []);
        for (var r = e.readUint8(), i = 0; i < r; i++) {
          var s = {};
          this.dependency.push(s),
            (s.subSeqDirectionFlag = e.readUint8()),
            (s.layerNumber = e.readUint8()),
            (s.subSequenceIdentifier = e.readUint16());
        }
      }),
      b.createSampleGroupCtor('dtrt', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('mvif', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('prol', function (e) {
        this.roll_distance = e.readInt16();
      }),
      b.createSampleGroupCtor('rap ', function (e) {
        e = e.readUint8();
        (this.num_leading_samples_known = e >> 7),
          (this.num_leading_samples = 127 & e);
      }),
      b.createSampleGroupCtor('rash', function (e) {
        if (
          ((this.operation_point_count = e.readUint16()),
          this.description_length !==
            2 +
              (1 === this.operation_point_count
                ? 2
                : 6 * this.operation_point_count) +
              9)
        )
          f.warn(
            'BoxParser',
            'Mismatch in ' + this.grouping_type + ' sample group length'
          ),
            (this.data = e.readUint8Array(this.description_length - 2));
        else {
          if (1 === this.operation_point_count)
            this.target_rate_share = e.readUint16();
          else {
            (this.target_rate_share = []), (this.available_bitrate = []);
            for (var t = 0; t < this.operation_point_count; t++)
              (this.available_bitrate[t] = e.readUint32()),
                (this.target_rate_share[t] = e.readUint16());
          }
          (this.maximum_bitrate = e.readUint32()),
            (this.minimum_bitrate = e.readUint32()),
            (this.discard_priority = e.readUint8());
        }
      }),
      b.createSampleGroupCtor('roll', function (e) {
        this.roll_distance = e.readInt16();
      }),
      (b.SampleGroupEntry.prototype.parse = function (e) {
        f.warn('BoxParser', 'Unknown Sample Group type: ' + this.grouping_type),
          (this.data = e.readUint8Array(this.description_length));
      }),
      b.createSampleGroupCtor('scif', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('scnm', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('seig', function (e) {
        this.reserved = e.readUint8();
        var t = e.readUint8();
        (this.crypt_byte_block = t >> 4),
          (this.skip_byte_block = 15 & t),
          (this.isProtected = e.readUint8()),
          (this.Per_Sample_IV_Size = e.readUint8()),
          (this.KID = b.parseHex16(e)),
          (this.constant_IV_size = 0),
          (this.constant_IV = 0),
          1 === this.isProtected &&
            0 === this.Per_Sample_IV_Size &&
            ((this.constant_IV_size = e.readUint8()),
            (this.constant_IV = e.readUint8Array(this.constant_IV_size)));
      }),
      b.createSampleGroupCtor('stsa', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('sync', function (e) {
        e = e.readUint8();
        this.NAL_unit_type = 63 & e;
      }),
      b.createSampleGroupCtor('tele', function (e) {
        e = e.readUint8();
        this.level_independently_decodable = e >> 7;
      }),
      b.createSampleGroupCtor('tsas', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('tscl', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createSampleGroupCtor('vipr', function (e) {
        f.warn(
          'BoxParser',
          'Sample Group type: ' + this.grouping_type + ' not fully parsed'
        );
      }),
      b.createFullBoxCtor('sbgp', function (e) {
        (this.grouping_type = e.readString(4)),
          1 === this.version
            ? (this.grouping_type_parameter = e.readUint32())
            : (this.grouping_type_parameter = 0),
          (this.entries = []);
        for (var t = e.readUint32(), r = 0; r < t; r++) {
          var i = {};
          this.entries.push(i),
            (i.sample_count = e.readInt32()),
            (i.group_description_index = e.readInt32());
        }
      }),
      b.createFullBoxCtor('schm', function (e) {
        (this.scheme_type = e.readString(4)),
          (this.scheme_version = e.readUint32()),
          1 & this.flags &&
            (this.scheme_uri = e.readString(this.size - this.hdr_size - 8));
      }),
      b.createBoxCtor('sdp ', function (e) {
        this.sdptext = e.readString(this.size - this.hdr_size);
      }),
      b.createFullBoxCtor('sdtp', function (e) {
        var t,
          r = this.size - this.hdr_size;
        (this.is_leading = []),
          (this.sample_depends_on = []),
          (this.sample_is_depended_on = []),
          (this.sample_has_redundancy = []);
        for (var i = 0; i < r; i++)
          (t = e.readUint8()),
            (this.is_leading[i] = t >> 6),
            (this.sample_depends_on[i] = (t >> 4) & 3),
            (this.sample_is_depended_on[i] = (t >> 2) & 3),
            (this.sample_has_redundancy[i] = 3 & t);
      }),
      b.createFullBoxCtor('senc'),
      b.createFullBoxCtor('sgpd', function (e) {
        (this.grouping_type = e.readString(4)),
          f.debug(
            'BoxParser',
            'Found Sample Groups of type ' + this.grouping_type
          ),
          1 === this.version
            ? (this.default_length = e.readUint32())
            : (this.default_length = 0),
          2 <= this.version &&
            (this.default_group_description_index = e.readUint32()),
          (this.entries = []);
        for (var t = e.readUint32(), r = 0; r < t; r++) {
          var i = new (
            b[this.grouping_type + 'SampleGroupEntry']
              ? b[this.grouping_type + 'SampleGroupEntry']
              : b.SampleGroupEntry
          )(this.grouping_type);
          this.entries.push(i),
            1 === this.version && 0 === this.default_length
              ? (i.description_length = e.readUint32())
              : (i.description_length = this.default_length),
            i.write === b.SampleGroupEntry.prototype.write &&
              (f.info(
                'BoxParser',
                'SampleGroup for type ' +
                  this.grouping_type +
                  ' writing not yet implemented, keeping unparsed data in memory for later write'
              ),
              (i.data = e.readUint8Array(i.description_length)),
              (e.position -= i.description_length)),
            i.parse(e);
        }
      }),
      b.createFullBoxCtor('sidx', function (e) {
        (this.reference_ID = e.readUint32()),
          (this.timescale = e.readUint32()),
          0 === this.version
            ? ((this.earliest_presentation_time = e.readUint32()),
              (this.first_offset = e.readUint32()))
            : ((this.earliest_presentation_time = e.readUint64()),
              (this.first_offset = e.readUint64())),
          e.readUint16(),
          (this.references = []);
        for (var t = e.readUint16(), r = 0; r < t; r++) {
          var i = {},
            s = (this.references.push(i), e.readUint32());
          (i.reference_type = (s >> 31) & 1),
            (i.referenced_size = 2147483647 & s),
            (i.subsegment_duration = e.readUint32()),
            (s = e.readUint32()),
            (i.starts_with_SAP = (s >> 31) & 1),
            (i.SAP_type = (s >> 28) & 7),
            (i.SAP_delta_time = 268435455 & s);
        }
      }),
      (b.SingleItemTypeReferenceBox = function (e, t, r, i) {
        b.Box.call(this, e, t), (this.hdr_size = r), (this.start = i);
      }),
      (b.SingleItemTypeReferenceBox.prototype = new b.Box()),
      (b.SingleItemTypeReferenceBox.prototype.parse = function (e) {
        this.from_item_ID = e.readUint16();
        var t = e.readUint16();
        this.references = [];
        for (var r = 0; r < t; r++) this.references[r] = e.readUint16();
      }),
      (b.SingleItemTypeReferenceBoxLarge = function (e, t, r, i) {
        b.Box.call(this, e, t), (this.hdr_size = r), (this.start = i);
      }),
      (b.SingleItemTypeReferenceBoxLarge.prototype = new b.Box()),
      (b.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
        this.from_item_ID = e.readUint32();
        var t = e.readUint16();
        this.references = [];
        for (var r = 0; r < t; r++) this.references[r] = e.readUint32();
      }),
      b.createFullBoxCtor('SmDm', function (e) {
        (this.primaryRChromaticity_x = e.readUint16()),
          (this.primaryRChromaticity_y = e.readUint16()),
          (this.primaryGChromaticity_x = e.readUint16()),
          (this.primaryGChromaticity_y = e.readUint16()),
          (this.primaryBChromaticity_x = e.readUint16()),
          (this.primaryBChromaticity_y = e.readUint16()),
          (this.whitePointChromaticity_x = e.readUint16()),
          (this.whitePointChromaticity_y = e.readUint16()),
          (this.luminanceMax = e.readUint32()),
          (this.luminanceMin = e.readUint32());
      }),
      b.createFullBoxCtor('smhd', function (e) {
        (this.balance = e.readUint16()), e.readUint16();
      }),
      b.createFullBoxCtor('ssix', function (e) {
        this.subsegments = [];
        for (var t = e.readUint32(), r = 0; r < t; r++) {
          var i = {};
          this.subsegments.push(i), (i.ranges = []);
          for (var s = e.readUint32(), n = 0; n < s; n++) {
            var a = {};
            i.ranges.push(a),
              (a.level = e.readUint8()),
              (a.range_size = e.readUint24());
          }
        }
      }),
      b.createFullBoxCtor('stco', function (e) {
        var t = e.readUint32();
        if (((this.chunk_offsets = []), 0 === this.version))
          for (var r = 0; r < t; r++) this.chunk_offsets.push(e.readUint32());
      }),
      b.createFullBoxCtor('stdp', function (e) {
        var t = (this.size - this.hdr_size) / 2;
        this.priority = [];
        for (var r = 0; r < t; r++) this.priority[r] = e.readUint16();
      }),
      b.createFullBoxCtor('sthd'),
      b.createFullBoxCtor('stri', function (e) {
        (this.switch_group = e.readUint16()),
          (this.alternate_group = e.readUint16()),
          (this.sub_track_id = e.readUint32());
        var t = (this.size - this.hdr_size - 8) / 4;
        this.attribute_list = [];
        for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32();
      }),
      b.createFullBoxCtor('stsc', function (e) {
        var t,
          r = e.readUint32();
        if (
          ((this.first_chunk = []),
          (this.samples_per_chunk = []),
          (this.sample_description_index = []),
          0 === this.version)
        )
          for (t = 0; t < r; t++)
            this.first_chunk.push(e.readUint32()),
              this.samples_per_chunk.push(e.readUint32()),
              this.sample_description_index.push(e.readUint32());
      }),
      b.createFullBoxCtor('stsd', function (e) {
        var t, r, i, s;
        for (this.entries = [], i = e.readUint32(), t = 1; t <= i; t++) {
          if (
            (r = b.parseOneBox(
              e,
              !0,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          b[r.type + 'SampleEntry']
            ? (((s = new b[r.type + 'SampleEntry'](r.size)).hdr_size =
                r.hdr_size),
              (s.start = r.start))
            : (f.warn('BoxParser', 'Unknown sample entry type: ' + r.type),
              (s = new b.SampleEntry(r.type, r.size, r.hdr_size, r.start))),
            s.write === b.SampleEntry.prototype.write &&
              (f.info(
                'BoxParser',
                'SampleEntry ' +
                  s.type +
                  ' box writing not yet implemented, keeping unparsed data in memory for later write'
              ),
              s.parseDataAndRewind(e)),
            s.parse(e),
            this.entries.push(s);
        }
      }),
      b.createFullBoxCtor('stsg', function (e) {
        this.grouping_type = e.readUint32();
        var t = e.readUint16();
        this.group_description_index = [];
        for (var r = 0; r < t; r++)
          this.group_description_index[r] = e.readUint32();
      }),
      b.createFullBoxCtor('stsh', function (e) {
        var t,
          r = e.readUint32();
        if (
          ((this.shadowed_sample_numbers = []),
          (this.sync_sample_numbers = []),
          0 === this.version)
        )
          for (t = 0; t < r; t++)
            this.shadowed_sample_numbers.push(e.readUint32()),
              this.sync_sample_numbers.push(e.readUint32());
      }),
      b.createFullBoxCtor('stss', function (e) {
        var t,
          r = e.readUint32();
        if (0 === this.version)
          for (this.sample_numbers = [], t = 0; t < r; t++)
            this.sample_numbers.push(e.readUint32());
      }),
      b.createFullBoxCtor('stsz', function (e) {
        var t;
        if (((this.sample_sizes = []), 0 === this.version))
          for (
            this.sample_size = e.readUint32(),
              this.sample_count = e.readUint32(),
              t = 0;
            t < this.sample_count;
            t++
          )
            0 === this.sample_size
              ? this.sample_sizes.push(e.readUint32())
              : (this.sample_sizes[t] = this.sample_size);
      }),
      b.createFullBoxCtor('stts', function (e) {
        var t,
          r,
          i = e.readUint32();
        if (
          ((this.sample_counts = []),
          (this.sample_deltas = []),
          0 === this.version)
        )
          for (t = 0; t < i; t++)
            this.sample_counts.push(e.readUint32()),
              (r = e.readInt32()) < 0 &&
                (f.warn(
                  'BoxParser',
                  'File uses negative stts sample delta, using value 1 instead, sync may be lost!'
                ),
                (r = 1)),
              this.sample_deltas.push(r);
      }),
      b.createFullBoxCtor('stvi', function (e) {
        var t = e.readUint32();
        (this.single_view_allowed = 3 & t),
          (this.stereo_scheme = e.readUint32());
        var r,
          t = e.readUint32();
        for (
          this.stereo_indication_type = e.readString(t), this.boxes = [];
          e.getPosition() < this.start + this.size;

        ) {
          if (
            (r = b.parseOneBox(
              e,
              !1,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          (r = r.box), this.boxes.push(r), (this[r.type] = r);
        }
      }),
      b.createBoxCtor('styp', function (e) {
        b.ftypBox.prototype.parse.call(this, e);
      }),
      b.createFullBoxCtor('stz2', function (e) {
        var t, r;
        if (((this.sample_sizes = []), 0 === this.version))
          if (
            ((this.reserved = e.readUint24()),
            (this.field_size = e.readUint8()),
            (r = e.readUint32()),
            4 === this.field_size)
          )
            for (t = 0; t < r; t += 2) {
              var i = e.readUint8();
              (this.sample_sizes[t] = (i >> 4) & 15),
                (this.sample_sizes[t + 1] = 15 & i);
            }
          else if (8 === this.field_size)
            for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint8();
          else if (16 === this.field_size)
            for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint16();
          else f.error('BoxParser', 'Error in length field in stz2 box');
      }),
      b.createFullBoxCtor('subs', function (e) {
        var t,
          r,
          i,
          s = e.readUint32();
        for (this.entries = [], t = 0; t < s; t++) {
          var n = {};
          if (
            (((this.entries[t] = n).sample_delta = e.readUint32()),
            (n.subsamples = []),
            0 < (i = e.readUint16()))
          )
            for (r = 0; r < i; r++) {
              var a = {};
              n.subsamples.push(a),
                1 == this.version
                  ? (a.size = e.readUint32())
                  : (a.size = e.readUint16()),
                (a.priority = e.readUint8()),
                (a.discardable = e.readUint8()),
                (a.codec_specific_parameters = e.readUint32());
            }
        }
      }),
      b.createFullBoxCtor('tenc', function (e) {
        var t;
        e.readUint8(),
          0 === this.version
            ? e.readUint8()
            : ((t = e.readUint8()),
              (this.default_crypt_byte_block = (t >> 4) & 15),
              (this.default_skip_byte_block = 15 & t)),
          (this.default_isProtected = e.readUint8()),
          (this.default_Per_Sample_IV_Size = e.readUint8()),
          (this.default_KID = b.parseHex16(e)),
          1 === this.default_isProtected &&
            0 === this.default_Per_Sample_IV_Size &&
            ((this.default_constant_IV_size = e.readUint8()),
            (this.default_constant_IV = e.readUint8Array(
              this.default_constant_IV_size
            )));
      }),
      b.createFullBoxCtor('tfdt', function (e) {
        1 == this.version
          ? (this.baseMediaDecodeTime = e.readUint64())
          : (this.baseMediaDecodeTime = e.readUint32());
      }),
      b.createFullBoxCtor('tfhd', function (e) {
        var t = 0;
        (this.track_id = e.readUint32()),
          this.size - this.hdr_size > t &&
          this.flags & b.TFHD_FLAG_BASE_DATA_OFFSET
            ? ((this.base_data_offset = e.readUint64()), (t += 8))
            : (this.base_data_offset = 0),
          this.size - this.hdr_size > t && this.flags & b.TFHD_FLAG_SAMPLE_DESC
            ? ((this.default_sample_description_index = e.readUint32()),
              (t += 4))
            : (this.default_sample_description_index = 0),
          this.size - this.hdr_size > t && this.flags & b.TFHD_FLAG_SAMPLE_DUR
            ? ((this.default_sample_duration = e.readUint32()), (t += 4))
            : (this.default_sample_duration = 0),
          this.size - this.hdr_size > t && this.flags & b.TFHD_FLAG_SAMPLE_SIZE
            ? ((this.default_sample_size = e.readUint32()), (t += 4))
            : (this.default_sample_size = 0),
          this.size - this.hdr_size > t && this.flags & b.TFHD_FLAG_SAMPLE_FLAGS
            ? (this.default_sample_flags = e.readUint32())
            : (this.default_sample_flags = 0);
      }),
      b.createFullBoxCtor('tfra', function (e) {
        (this.track_ID = e.readUint32()), e.readUint24();
        var t = e.readUint8();
        (this.length_size_of_traf_num = (t >> 4) & 3),
          (this.length_size_of_trun_num = (t >> 2) & 3),
          (this.length_size_of_sample_num = 3 & t),
          (this.entries = []);
        for (var r = e.readUint32(), i = 0; i < r; i++)
          1 === this.version
            ? ((this.time = e.readUint64()),
              (this.moof_offset = e.readUint64()))
            : ((this.time = e.readUint32()),
              (this.moof_offset = e.readUint32())),
            (this.traf_number =
              e['readUint' + 8 * (this.length_size_of_traf_num + 1)]()),
            (this.trun_number =
              e['readUint' + 8 * (this.length_size_of_trun_num + 1)]()),
            (this.sample_number =
              e['readUint' + 8 * (this.length_size_of_sample_num + 1)]());
      }),
      b.createFullBoxCtor('tkhd', function (e) {
        1 == this.version
          ? ((this.creation_time = e.readUint64()),
            (this.modification_time = e.readUint64()),
            (this.track_id = e.readUint32()),
            e.readUint32(),
            (this.duration = e.readUint64()))
          : ((this.creation_time = e.readUint32()),
            (this.modification_time = e.readUint32()),
            (this.track_id = e.readUint32()),
            e.readUint32(),
            (this.duration = e.readUint32())),
          e.readUint32Array(2),
          (this.layer = e.readInt16()),
          (this.alternate_group = e.readInt16()),
          (this.volume = e.readInt16() >> 8),
          e.readUint16(),
          (this.matrix = e.readInt32Array(9)),
          (this.width = e.readUint32()),
          (this.height = e.readUint32());
      }),
      b.createBoxCtor('tmax', function (e) {
        this.time = e.readUint32();
      }),
      b.createBoxCtor('tmin', function (e) {
        this.time = e.readUint32();
      }),
      b.createBoxCtor('totl', function (e) {
        this.bytessent = e.readUint32();
      }),
      b.createBoxCtor('tpay', function (e) {
        this.bytessent = e.readUint32();
      }),
      b.createBoxCtor('tpyl', function (e) {
        this.bytessent = e.readUint64();
      }),
      (b.TrackGroupTypeBox.prototype.parse = function (e) {
        this.parseFullHeader(e), (this.track_group_id = e.readUint32());
      }),
      b.createTrackGroupCtor('msrc'),
      (b.TrackReferenceTypeBox = function (e, t, r, i) {
        b.Box.call(this, e, t), (this.hdr_size = r), (this.start = i);
      }),
      (b.TrackReferenceTypeBox.prototype = new b.Box()),
      (b.TrackReferenceTypeBox.prototype.parse = function (e) {
        this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4);
      }),
      (b.trefBox.prototype.parse = function (e) {
        for (var t; e.getPosition() < this.start + this.size; ) {
          if (
            (t = b.parseOneBox(
              e,
              !0,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          (t = new b.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start))
            .write === b.Box.prototype.write &&
            'mdat' !== t.type &&
            (f.info(
              'BoxParser',
              'TrackReference ' +
                t.type +
                ' box writing not yet implemented, keeping unparsed data in memory for later write'
            ),
            t.parseDataAndRewind(e)),
            t.parse(e),
            this.boxes.push(t);
        }
      }),
      b.createFullBoxCtor('trep', function (e) {
        for (
          this.track_ID = e.readUint32(), this.boxes = [];
          e.getPosition() < this.start + this.size;

        ) {
          if (
            (ret = b.parseOneBox(
              e,
              !1,
              this.size - (e.getPosition() - this.start)
            )).code !== b.OK
          )
            return;
          (box = ret.box), this.boxes.push(box);
        }
      }),
      b.createFullBoxCtor('trex', function (e) {
        (this.track_id = e.readUint32()),
          (this.default_sample_description_index = e.readUint32()),
          (this.default_sample_duration = e.readUint32()),
          (this.default_sample_size = e.readUint32()),
          (this.default_sample_flags = e.readUint32());
      }),
      b.createBoxCtor('trpy', function (e) {
        this.bytessent = e.readUint64();
      }),
      b.createFullBoxCtor('trun', function (e) {
        var t = 0;
        if (
          ((this.sample_count = e.readUint32()),
          this.size - this.hdr_size > (t += 4) &&
          this.flags & b.TRUN_FLAGS_DATA_OFFSET
            ? ((this.data_offset = e.readInt32()), (t += 4))
            : (this.data_offset = 0),
          this.size - this.hdr_size > t && this.flags & b.TRUN_FLAGS_FIRST_FLAG
            ? ((this.first_sample_flags = e.readUint32()), (t += 4))
            : (this.first_sample_flags = 0),
          (this.sample_duration = []),
          (this.sample_size = []),
          (this.sample_flags = []),
          (this.sample_composition_time_offset = []),
          this.size - this.hdr_size > t)
        )
          for (var r = 0; r < this.sample_count; r++)
            this.flags & b.TRUN_FLAGS_DURATION &&
              (this.sample_duration[r] = e.readUint32()),
              this.flags & b.TRUN_FLAGS_SIZE &&
                (this.sample_size[r] = e.readUint32()),
              this.flags & b.TRUN_FLAGS_FLAGS &&
                (this.sample_flags[r] = e.readUint32()),
              this.flags & b.TRUN_FLAGS_CTS_OFFSET &&
                (0 === this.version
                  ? (this.sample_composition_time_offset[r] = e.readUint32())
                  : (this.sample_composition_time_offset[r] = e.readInt32()));
      }),
      b.createFullBoxCtor('tsel', function (e) {
        this.switch_group = e.readUint32();
        var t = (this.size - this.hdr_size - 4) / 4;
        this.attribute_list = [];
        for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32();
      }),
      b.createFullBoxCtor('txtC', function (e) {
        this.config = e.readCString();
      }),
      b.createFullBoxCtor('url ', function (e) {
        1 !== this.flags && (this.location = e.readCString());
      }),
      b.createFullBoxCtor('urn ', function (e) {
        (this.name = e.readCString()),
          0 < this.size - this.hdr_size - this.name.length - 1 &&
            (this.location = e.readCString());
      }),
      b.createUUIDBox('a5d40b30e81411ddba2f0800200c9a66', !0, !1, function (e) {
        this.LiveServerManifest = e
          .readString(this.size - this.hdr_size)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }),
      b.createUUIDBox('d08a4f1810f34a82b6c832d8aba183d3', !0, !1, function (e) {
        this.system_id = b.parseHex16(e);
        var t = e.readUint32();
        0 < t && (this.data = e.readUint8Array(t));
      }),
      b.createUUIDBox('a2394f525a9b4f14a2446c427c648df4', !0, !1),
      b.createUUIDBox('8974dbce7be74c5184f97148f9882554', !0, !1, function (e) {
        (this.default_AlgorithmID = e.readUint24()),
          (this.default_IV_size = e.readUint8()),
          (this.default_KID = b.parseHex16(e));
      }),
      b.createUUIDBox('d4807ef2ca3946958e5426cb9e46a79f', !0, !1, function (e) {
        (this.fragment_count = e.readUint8()), (this.entries = []);
        for (var t = 0; t < this.fragment_count; t++) {
          var r = {},
            i = 0,
            s = 0,
            s =
              1 === this.version
                ? ((i = e.readUint64()), e.readUint64())
                : ((i = e.readUint32()), e.readUint32());
          (r.absolute_time = i),
            (r.absolute_duration = s),
            this.entries.push(r);
        }
      }),
      b.createUUIDBox('6d1d9b0542d544e680e2141daff757b2', !0, !1, function (e) {
        1 === this.version
          ? ((this.absolute_time = e.readUint64()),
            (this.duration = e.readUint64()))
          : ((this.absolute_time = e.readUint32()),
            (this.duration = e.readUint32()));
      }),
      b.createFullBoxCtor('vmhd', function (e) {
        (this.graphicsmode = e.readUint16()),
          (this.opcolor = e.readUint16Array(3));
      }),
      b.createFullBoxCtor('vpcC', function (e) {
        var t;
        1 === this.version
          ? ((this.profile = e.readUint8()),
            (this.level = e.readUint8()),
            (t = e.readUint8()),
            (this.bitDepth = t >> 4),
            (this.chromaSubsampling = (t >> 1) & 7),
            (this.videoFullRangeFlag = 1 & t),
            (this.colourPrimaries = e.readUint8()),
            (this.transferCharacteristics = e.readUint8()),
            (this.matrixCoefficients = e.readUint8()))
          : ((this.profile = e.readUint8()),
            (this.level = e.readUint8()),
            (t = e.readUint8()),
            (this.bitDepth = (t >> 4) & 15),
            (this.colorSpace = 15 & t),
            (t = e.readUint8()),
            (this.chromaSubsampling = (t >> 4) & 15),
            (this.transferFunction = (t >> 1) & 7),
            (this.videoFullRangeFlag = 1 & t)),
          (this.codecIntializationDataSize = e.readUint16()),
          (this.codecIntializationData = e.readUint8Array(
            this.codecIntializationDataSize
          ));
      }),
      b.createBoxCtor('vttC', function (e) {
        this.text = e.readString(this.size - this.hdr_size);
      }),
      b.createFullBoxCtor('vvcC', function (e) {
        var t,
          r = {
            held_bits: void 0,
            num_held_bits: 0,
            stream_read_1_bytes: function (e) {
              (this.held_bits = e.readUint8()), (this.num_held_bits = 8);
            },
            stream_read_2_bytes: function (e) {
              (this.held_bits = e.readUint16()), (this.num_held_bits = 16);
            },
            extract_bits: function (e) {
              var t =
                (this.held_bits >> (this.num_held_bits - e)) & ((1 << e) - 1);
              return (this.num_held_bits -= e), t;
            },
          };
        if (
          (r.stream_read_1_bytes(e),
          r.extract_bits(5),
          (this.lengthSizeMinusOne = r.extract_bits(2)),
          (this.ptl_present_flag = r.extract_bits(1)),
          this.ptl_present_flag)
        ) {
          if (
            (r.stream_read_2_bytes(e),
            (this.ols_idx = r.extract_bits(9)),
            (this.num_sublayers = r.extract_bits(3)),
            (this.constant_frame_rate = r.extract_bits(2)),
            (this.chroma_format_idc = r.extract_bits(2)),
            r.stream_read_1_bytes(e),
            (this.bit_depth_minus8 = r.extract_bits(3)),
            r.extract_bits(5),
            r.stream_read_2_bytes(e),
            r.extract_bits(2),
            (this.num_bytes_constraint_info = r.extract_bits(6)),
            (this.general_profile_idc = r.extract_bits(7)),
            (this.general_tier_flag = r.extract_bits(1)),
            (this.general_level_idc = e.readUint8()),
            r.stream_read_1_bytes(e),
            (this.ptl_frame_only_constraint_flag = r.extract_bits(1)),
            (this.ptl_multilayer_enabled_flag = r.extract_bits(1)),
            (this.general_constraint_info = new Uint8Array(
              this.num_bytes_constraint_info
            )),
            this.num_bytes_constraint_info)
          ) {
            for (o = 0; o < this.num_bytes_constraint_info - 1; o++) {
              var i = r.extract_bits(6),
                s = (r.stream_read_1_bytes(e), r.extract_bits(2));
              this.general_constraint_info[o] = (i << 2) | s;
            }
            this.general_constraint_info[this.num_bytes_constraint_info - 1] =
              r.extract_bits(6);
          } else r.extract_bits(6);
          for (
            r.stream_read_1_bytes(e),
              this.ptl_sublayer_present_mask = 0,
              t = this.num_sublayers - 2;
            0 <= t;
            --t
          ) {
            var n = r.extract_bits(1);
            this.ptl_sublayer_present_mask |= n << t;
          }
          for (t = this.num_sublayers; t <= 8 && 1 < this.num_sublayers; ++t)
            r.extract_bits(1);
          for (t = this.num_sublayers - 2; 0 <= t; --t)
            this.ptl_sublayer_present_mask & (1 << t) &&
              (this.sublayer_level_idc[t] = e.readUint8());
          if (
            ((this.ptl_num_sub_profiles = e.readUint8()),
            (this.general_sub_profile_idc = []),
            this.ptl_num_sub_profiles)
          )
            for (o = 0; o < this.ptl_num_sub_profiles; o++)
              this.general_sub_profile_idc.push(e.readUint32());
          (this.max_picture_width = e.readUint16()),
            (this.max_picture_height = e.readUint16()),
            (this.avg_frame_rate = e.readUint16());
        }
        this.nalu_arrays = [];
        for (var a = e.readUint8(), o = 0; o < a; o++) {
          var l = [],
            d =
              (this.nalu_arrays.push(l),
              r.stream_read_1_bytes(e),
              (l.completeness = r.extract_bits(1)),
              r.extract_bits(2),
              (l.nalu_type = r.extract_bits(5)),
              1);
          for (
            13 != l.nalu_type && 12 != l.nalu_type && (d = e.readUint16()),
              t = 0;
            t < d;
            t++
          ) {
            var h = e.readUint16();
            l.push({ data: e.readUint8Array(h), length: h });
          }
        }
      }),
      b.createFullBoxCtor('vvnC', function (e) {
        var t = strm.readUint8();
        this.lengthSizeMinusOne = 3 & t;
      }),
      (b.SampleEntry.prototype.isVideo = function () {
        return !1;
      }),
      (b.SampleEntry.prototype.isAudio = function () {
        return !1;
      }),
      (b.SampleEntry.prototype.isSubtitle = function () {
        return !1;
      }),
      (b.SampleEntry.prototype.isMetadata = function () {
        return !1;
      }),
      (b.SampleEntry.prototype.isHint = function () {
        return !1;
      }),
      (b.SampleEntry.prototype.getCodec = function () {
        return this.type.replace('.', '');
      }),
      (b.SampleEntry.prototype.getWidth = function () {
        return '';
      }),
      (b.SampleEntry.prototype.getHeight = function () {
        return '';
      }),
      (b.SampleEntry.prototype.getChannelCount = function () {
        return '';
      }),
      (b.SampleEntry.prototype.getSampleRate = function () {
        return '';
      }),
      (b.SampleEntry.prototype.getSampleSize = function () {
        return '';
      }),
      (b.VisualSampleEntry.prototype.isVideo = function () {
        return !0;
      }),
      (b.VisualSampleEntry.prototype.getWidth = function () {
        return this.width;
      }),
      (b.VisualSampleEntry.prototype.getHeight = function () {
        return this.height;
      }),
      (b.AudioSampleEntry.prototype.isAudio = function () {
        return !0;
      }),
      (b.AudioSampleEntry.prototype.getChannelCount = function () {
        return this.channel_count;
      }),
      (b.AudioSampleEntry.prototype.getSampleRate = function () {
        return this.samplerate;
      }),
      (b.AudioSampleEntry.prototype.getSampleSize = function () {
        return this.samplesize;
      }),
      (b.SubtitleSampleEntry.prototype.isSubtitle = function () {
        return !0;
      }),
      (b.MetadataSampleEntry.prototype.isMetadata = function () {
        return !0;
      }),
      (b.decimalToHex = function (e, t) {
        var r = Number(e).toString(16);
        for (t = null == t ? 2 : t; r.length < t; ) r = '0' + r;
        return r;
      }),
      (b.avc1SampleEntry.prototype.getCodec =
        b.avc2SampleEntry.prototype.getCodec =
        b.avc3SampleEntry.prototype.getCodec =
        b.avc4SampleEntry.prototype.getCodec =
          function () {
            var e = b.SampleEntry.prototype.getCodec.call(this);
            return this.avcC
              ? e +
                  '.' +
                  b.decimalToHex(this.avcC.AVCProfileIndication) +
                  b.decimalToHex(this.avcC.profile_compatibility) +
                  b.decimalToHex(this.avcC.AVCLevelIndication)
              : e;
          }),
      (b.hev1SampleEntry.prototype.getCodec =
        b.hvc1SampleEntry.prototype.getCodec =
          function () {
            var e = b.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
              switch (((e += '.'), this.hvcC.general_profile_space)) {
                case 0:
                  e += '';
                  break;
                case 1:
                  e += 'A';
                  break;
                case 2:
                  e += 'B';
                  break;
                case 3:
                  e += 'C';
              }
              for (
                var e = e + this.hvcC.general_profile_idc + '.',
                  t = this.hvcC.general_profile_compatibility,
                  r = 0,
                  i = 0;
                i < 32 && ((r |= 1 & t), 31 != i);
                i++
              )
                (r <<= 1), (t >>= 1);
              (e = e + b.decimalToHex(r, 0) + '.'),
                0 === this.hvcC.general_tier_flag ? (e += 'L') : (e += 'H'),
                (e += this.hvcC.general_level_idc);
              var s = !1,
                n = '';
              for (i = 5; 0 <= i; i--)
                (this.hvcC.general_constraint_indicator[i] || s) &&
                  ((n =
                    '.' +
                    b.decimalToHex(
                      this.hvcC.general_constraint_indicator[i],
                      0
                    ) +
                    n),
                  (s = !0));
              e += n;
            }
            return e;
          }),
      (b.vvc1SampleEntry.prototype.getCodec =
        b.vvi1SampleEntry.prototype.getCodec =
          function () {
            var e = b.SampleEntry.prototype.getCodec.call(this);
            if (this.vvcC) {
              (e += '.' + this.vvcC.general_profile_idc),
                this.vvcC.general_tier_flag ? (e += '.H') : (e += '.L'),
                (e += this.vvcC.general_level_idc);
              var t = '';
              if (this.vvcC.general_constraint_info) {
                var r,
                  i = [],
                  s = 0,
                  s =
                    (s |= this.vvcC.ptl_frame_only_constraint << 7) |
                    (this.vvcC.ptl_multilayer_enabled << 6);
                for (l = 0; l < this.vvcC.general_constraint_info.length; ++l)
                  (s |= (this.vvcC.general_constraint_info[l] >> 2) & 63),
                    i.push(s),
                    s && (r = l),
                    (s = (this.vvcC.general_constraint_info[l] >> 2) & 3);
                if (void 0 === r) t = '.CA';
                else {
                  for (
                    var t = '.C',
                      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
                      a = 0,
                      o = 0,
                      l = 0;
                    l <= r;
                    ++l
                  )
                    for (a = (a << 8) | i[l], o += 8; 5 <= o; )
                      (t += n[(a >> (o - 5)) & 31]), (a &= (1 << (o -= 5)) - 1);
                  o && (t += n[31 & (a <<= 5 - o)]);
                }
              }
              e += t;
            }
            return e;
          }),
      (b.mp4aSampleEntry.prototype.getCodec = function () {
        var e,
          t,
          r = b.SampleEntry.prototype.getCodec.call(this);
        return this.esds && this.esds.esd
          ? ((e = this.esds.esd.getOTI()),
            (t = this.esds.esd.getAudioConfig()),
            r + '.' + b.decimalToHex(e) + (t ? '.' + t : ''))
          : r;
      }),
      (b.stxtSampleEntry.prototype.getCodec = function () {
        var e = b.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? e + '.' + this.mime_format : e;
      }),
      (b.vp08SampleEntry.prototype.getCodec =
        b.vp09SampleEntry.prototype.getCodec =
          function () {
            var e = b.SampleEntry.prototype.getCodec.call(this),
              t = this.vpcC.level,
              r = this.vpcC.bitDepth;
            return (
              e +
              '.0' +
              this.vpcC.profile +
              '.' +
              (t = 0 == t ? '00' : t) +
              '.' +
              (r = 8 == r ? '08' : r)
            );
          }),
      (b.av01SampleEntry.prototype.getCodec = function () {
        var e,
          t = b.SampleEntry.prototype.getCodec.call(this),
          r = this.av1C.seq_level_idx_0;
        return (
          2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth
            ? (e = 1 === this.av1C.twelve_bit ? '12' : '10')
            : this.av1C.seq_profile <= 2 &&
              (e = 1 === this.av1C.high_bitdepth ? '10' : '08'),
          t +
            '.' +
            this.av1C.seq_profile +
            '.' +
            (r = r < 10 ? '0' + r : r) +
            (this.av1C.seq_tier_0 ? 'H' : 'M') +
            '.' +
            e
        );
      }),
      (b.Box.prototype.writeHeader = function (e, t) {
        (this.size += 8),
          this.size > d && (this.size += 8),
          'uuid' === this.type && (this.size += 16),
          f.debug(
            'BoxWriter',
            'Writing box ' +
              this.type +
              ' of size: ' +
              this.size +
              ' at position ' +
              e.getPosition() +
              (t || '')
          ),
          this.size > d
            ? e.writeUint32(1)
            : ((this.sizePosition = e.getPosition()), e.writeUint32(this.size)),
          e.writeString(this.type, null, 4),
          'uuid' === this.type && e.writeUint8Array(this.uuid),
          this.size > d && e.writeUint64(this.size);
      }),
      (b.FullBox.prototype.writeHeader = function (e) {
        (this.size += 4),
          b.Box.prototype.writeHeader.call(
            this,
            e,
            ' v=' + this.version + ' f=' + this.flags
          ),
          e.writeUint8(this.version),
          e.writeUint24(this.flags);
      }),
      (b.Box.prototype.write = function (e) {
        'mdat' === this.type
          ? this.data &&
            ((this.size = this.data.length),
            this.writeHeader(e),
            e.writeUint8Array(this.data))
          : ((this.size = this.data ? this.data.length : 0),
            this.writeHeader(e),
            this.data && e.writeUint8Array(this.data));
      }),
      (b.ContainerBox.prototype.write = function (e) {
        (this.size = 0), this.writeHeader(e);
        for (var t = 0; t < this.boxes.length; t++)
          this.boxes[t] &&
            (this.boxes[t].write(e), (this.size += this.boxes[t].size));
        f.debug(
          'BoxWriter',
          'Adjusting box ' + this.type + ' with new size ' + this.size
        ),
          e.adjustUint32(this.sizePosition, this.size);
      }),
      (b.TrackReferenceTypeBox.prototype.write = function (e) {
        (this.size = 4 * this.track_ids.length),
          this.writeHeader(e),
          e.writeUint32Array(this.track_ids);
      }),
      (b.avcCBox.prototype.write = function (e) {
        var t;
        for (this.size = 7, t = 0; t < this.SPS.length; t++)
          this.size += 2 + this.SPS[t].length;
        for (t = 0; t < this.PPS.length; t++)
          this.size += 2 + this.PPS[t].length;
        for (
          this.ext && (this.size += this.ext.length),
            this.writeHeader(e),
            e.writeUint8(this.configurationVersion),
            e.writeUint8(this.AVCProfileIndication),
            e.writeUint8(this.profile_compatibility),
            e.writeUint8(this.AVCLevelIndication),
            e.writeUint8(this.lengthSizeMinusOne + 252),
            e.writeUint8(this.SPS.length + 224),
            t = 0;
          t < this.SPS.length;
          t++
        )
          e.writeUint16(this.SPS[t].length),
            e.writeUint8Array(this.SPS[t].nalu);
        for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++)
          e.writeUint16(this.PPS[t].length),
            e.writeUint8Array(this.PPS[t].nalu);
        this.ext && e.writeUint8Array(this.ext);
      }),
      (b.co64Box.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 4 + 8 * this.chunk_offsets.length,
            this.writeHeader(e),
            e.writeUint32(this.chunk_offsets.length),
            t = 0;
          t < this.chunk_offsets.length;
          t++
        )
          e.writeUint64(this.chunk_offsets[t]);
      }),
      (b.cslgBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 20),
          this.writeHeader(e),
          e.writeInt32(this.compositionToDTSShift),
          e.writeInt32(this.leastDecodeToDisplayDelta),
          e.writeInt32(this.greatestDecodeToDisplayDelta),
          e.writeInt32(this.compositionStartTime),
          e.writeInt32(this.compositionEndTime);
      }),
      (b.cttsBox.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 4 + 8 * this.sample_counts.length,
            this.writeHeader(e),
            e.writeUint32(this.sample_counts.length),
            t = 0;
          t < this.sample_counts.length;
          t++
        )
          e.writeUint32(this.sample_counts[t]),
            1 === this.version
              ? e.writeInt32(this.sample_offsets[t])
              : e.writeUint32(this.sample_offsets[t]);
      }),
      (b.drefBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4),
          this.writeHeader(e),
          e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++)
          this.entries[t].write(e), (this.size += this.entries[t].size);
        f.debug(
          'BoxWriter',
          'Adjusting box ' + this.type + ' with new size ' + this.size
        ),
          e.adjustUint32(this.sizePosition, this.size);
      }),
      (b.elngBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = this.extended_language.length),
          this.writeHeader(e),
          e.writeString(this.extended_language);
      }),
      (b.elstBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4 + 12 * this.entries.length),
          this.writeHeader(e),
          e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
          var r = this.entries[t];
          e.writeUint32(r.segment_duration),
            e.writeInt32(r.media_time),
            e.writeInt16(r.media_rate_integer),
            e.writeInt16(r.media_rate_fraction);
        }
      }),
      (b.emsgBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size =
            16 +
            this.message_data.length +
            (this.scheme_id_uri.length + 1) +
            (this.value.length + 1)),
          this.writeHeader(e),
          e.writeCString(this.scheme_id_uri),
          e.writeCString(this.value),
          e.writeUint32(this.timescale),
          e.writeUint32(this.presentation_time_delta),
          e.writeUint32(this.event_duration),
          e.writeUint32(this.id),
          e.writeUint8Array(this.message_data);
      }),
      (b.ftypBox.prototype.write = function (e) {
        (this.size = 8 + 4 * this.compatible_brands.length),
          this.writeHeader(e),
          e.writeString(this.major_brand, null, 4),
          e.writeUint32(this.minor_version);
        for (var t = 0; t < this.compatible_brands.length; t++)
          e.writeString(this.compatible_brands[t], null, 4);
      }),
      (b.hdlrBox.prototype.write = function (e) {
        (this.size = 20 + this.name.length + 1),
          (this.version = 0),
          (this.flags = 0),
          this.writeHeader(e),
          e.writeUint32(0),
          e.writeString(this.handler, null, 4),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeCString(this.name);
      }),
      (b.kindBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = this.schemeURI.length + 1 + (this.value.length + 1)),
          this.writeHeader(e),
          e.writeCString(this.schemeURI),
          e.writeCString(this.value);
      }),
      (b.mdhdBox.prototype.write = function (e) {
        (this.size = 20),
          (this.flags = 0),
          (this.version = 0),
          this.writeHeader(e),
          e.writeUint32(this.creation_time),
          e.writeUint32(this.modification_time),
          e.writeUint32(this.timescale),
          e.writeUint32(this.duration),
          e.writeUint16(this.language),
          e.writeUint16(0);
      }),
      (b.mehdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4),
          this.writeHeader(e),
          e.writeUint32(this.fragment_duration);
      }),
      (b.mfhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4),
          this.writeHeader(e),
          e.writeUint32(this.sequence_number);
      }),
      (b.mvhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 96),
          this.writeHeader(e),
          e.writeUint32(this.creation_time),
          e.writeUint32(this.modification_time),
          e.writeUint32(this.timescale),
          e.writeUint32(this.duration),
          e.writeUint32(this.rate),
          e.writeUint16(this.volume << 8),
          e.writeUint16(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32Array(this.matrix),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(this.next_track_id);
      }),
      (b.SampleEntry.prototype.writeHeader = function (e) {
        (this.size = 8),
          b.Box.prototype.writeHeader.call(this, e),
          e.writeUint8(0),
          e.writeUint8(0),
          e.writeUint8(0),
          e.writeUint8(0),
          e.writeUint8(0),
          e.writeUint8(0),
          e.writeUint16(this.data_reference_index);
      }),
      (b.SampleEntry.prototype.writeFooter = function (e) {
        for (var t = 0; t < this.boxes.length; t++)
          this.boxes[t].write(e), (this.size += this.boxes[t].size);
        f.debug(
          'BoxWriter',
          'Adjusting box ' + this.type + ' with new size ' + this.size
        ),
          e.adjustUint32(this.sizePosition, this.size);
      }),
      (b.SampleEntry.prototype.write = function (e) {
        this.writeHeader(e),
          e.writeUint8Array(this.data),
          (this.size += this.data.length),
          f.debug(
            'BoxWriter',
            'Adjusting box ' + this.type + ' with new size ' + this.size
          ),
          e.adjustUint32(this.sizePosition, this.size);
      }),
      (b.VisualSampleEntry.prototype.write = function (e) {
        this.writeHeader(e),
          (this.size += 70),
          e.writeUint16(0),
          e.writeUint16(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint16(this.width),
          e.writeUint16(this.height),
          e.writeUint32(this.horizresolution),
          e.writeUint32(this.vertresolution),
          e.writeUint32(0),
          e.writeUint16(this.frame_count),
          e.writeUint8(Math.min(31, this.compressorname.length)),
          e.writeString(this.compressorname, null, 31),
          e.writeUint16(this.depth),
          e.writeInt16(-1),
          this.writeFooter(e);
      }),
      (b.AudioSampleEntry.prototype.write = function (e) {
        this.writeHeader(e),
          (this.size += 20),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeUint16(this.channel_count),
          e.writeUint16(this.samplesize),
          e.writeUint16(0),
          e.writeUint16(0),
          e.writeUint32(this.samplerate << 16),
          this.writeFooter(e);
      }),
      (b.stppSampleEntry.prototype.write = function (e) {
        this.writeHeader(e),
          (this.size +=
            this.namespace.length +
            1 +
            this.schema_location.length +
            1 +
            this.auxiliary_mime_types.length +
            1),
          e.writeCString(this.namespace),
          e.writeCString(this.schema_location),
          e.writeCString(this.auxiliary_mime_types),
          this.writeFooter(e);
      }),
      (b.SampleGroupEntry.prototype.write = function (e) {
        e.writeUint8Array(this.data);
      }),
      (b.sbgpBox.prototype.write = function (e) {
        (this.version = 1),
          (this.flags = 0),
          (this.size = 12 + 8 * this.entries.length),
          this.writeHeader(e),
          e.writeString(this.grouping_type, null, 4),
          e.writeUint32(this.grouping_type_parameter),
          e.writeUint32(this.entries.length);
        for (var t = 0; t < this.entries.length; t++) {
          var r = this.entries[t];
          e.writeInt32(r.sample_count), e.writeInt32(r.group_description_index);
        }
      }),
      (b.sgpdBox.prototype.write = function (e) {
        var t, r;
        for (
          this.flags = 0, this.size = 12, t = 0;
          t < this.entries.length;
          t++
        )
          (r = this.entries[t]),
            1 === this.version &&
              (0 === this.default_length && (this.size += 4),
              (this.size += r.data.length));
        for (
          this.writeHeader(e),
            e.writeString(this.grouping_type, null, 4),
            1 === this.version && e.writeUint32(this.default_length),
            2 <= this.version &&
              e.writeUint32(this.default_sample_description_index),
            e.writeUint32(this.entries.length),
            t = 0;
          t < this.entries.length;
          t++
        )
          (r = this.entries[t]),
            1 === this.version &&
              0 === this.default_length &&
              e.writeUint32(r.description_length),
            r.write(e);
      }),
      (b.sidxBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 20 + 12 * this.references.length),
          this.writeHeader(e),
          e.writeUint32(this.reference_ID),
          e.writeUint32(this.timescale),
          e.writeUint32(this.earliest_presentation_time),
          e.writeUint32(this.first_offset),
          e.writeUint16(0),
          e.writeUint16(this.references.length);
        for (var t = 0; t < this.references.length; t++) {
          var r = this.references[t];
          e.writeUint32((r.reference_type << 31) | r.referenced_size),
            e.writeUint32(r.subsegment_duration),
            e.writeUint32(
              (r.starts_with_SAP << 31) | (r.SAP_type << 28) | r.SAP_delta_time
            );
        }
      }),
      (b.smhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 1),
          (this.size = 4),
          this.writeHeader(e),
          e.writeUint16(this.balance),
          e.writeUint16(0);
      }),
      (b.stcoBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4 + 4 * this.chunk_offsets.length),
          this.writeHeader(e),
          e.writeUint32(this.chunk_offsets.length),
          e.writeUint32Array(this.chunk_offsets);
      }),
      (b.stscBox.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 4 + 12 * this.first_chunk.length,
            this.writeHeader(e),
            e.writeUint32(this.first_chunk.length),
            t = 0;
          t < this.first_chunk.length;
          t++
        )
          e.writeUint32(this.first_chunk[t]),
            e.writeUint32(this.samples_per_chunk[t]),
            e.writeUint32(this.sample_description_index[t]);
      }),
      (b.stsdBox.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 0,
            this.writeHeader(e),
            e.writeUint32(this.entries.length),
            this.size += 4,
            t = 0;
          t < this.entries.length;
          t++
        )
          this.entries[t].write(e), (this.size += this.entries[t].size);
        f.debug(
          'BoxWriter',
          'Adjusting box ' + this.type + ' with new size ' + this.size
        ),
          e.adjustUint32(this.sizePosition, this.size);
      }),
      (b.stshBox.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 4 + 8 * this.shadowed_sample_numbers.length,
            this.writeHeader(e),
            e.writeUint32(this.shadowed_sample_numbers.length),
            t = 0;
          t < this.shadowed_sample_numbers.length;
          t++
        )
          e.writeUint32(this.shadowed_sample_numbers[t]),
            e.writeUint32(this.sync_sample_numbers[t]);
      }),
      (b.stssBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 4 + 4 * this.sample_numbers.length),
          this.writeHeader(e),
          e.writeUint32(this.sample_numbers.length),
          e.writeUint32Array(this.sample_numbers);
      }),
      (b.stszBox.prototype.write = function (e) {
        var t,
          r = !0;
        if (((this.version = 0), (this.flags = 0) < this.sample_sizes.length))
          for (t = 0; t + 1 < this.sample_sizes.length; ) {
            if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
              r = !1;
              break;
            }
            t++;
          }
        else r = !1;
        (this.size = 8),
          r || (this.size += 4 * this.sample_sizes.length),
          this.writeHeader(e),
          r ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0),
          e.writeUint32(this.sample_sizes.length),
          r || e.writeUint32Array(this.sample_sizes);
      }),
      (b.sttsBox.prototype.write = function (e) {
        var t;
        for (
          this.version = 0,
            this.flags = 0,
            this.size = 4 + 8 * this.sample_counts.length,
            this.writeHeader(e),
            e.writeUint32(this.sample_counts.length),
            t = 0;
          t < this.sample_counts.length;
          t++
        )
          e.writeUint32(this.sample_counts[t]),
            e.writeUint32(this.sample_deltas[t]);
      }),
      (b.tfdtBox.prototype.write = function (e) {
        var t = Math.pow(2, 32) - 1;
        (this.version = this.baseMediaDecodeTime > t ? 1 : 0),
          (this.flags = 0),
          (this.size = 4),
          1 === this.version && (this.size += 4),
          this.writeHeader(e),
          1 === this.version
            ? e.writeUint64(this.baseMediaDecodeTime)
            : e.writeUint32(this.baseMediaDecodeTime);
      }),
      (b.tfhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.size = 4),
          this.flags & b.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8),
          this.flags & b.TFHD_FLAG_SAMPLE_DESC && (this.size += 4),
          this.flags & b.TFHD_FLAG_SAMPLE_DUR && (this.size += 4),
          this.flags & b.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4),
          this.flags & b.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4),
          this.writeHeader(e),
          e.writeUint32(this.track_id),
          this.flags & b.TFHD_FLAG_BASE_DATA_OFFSET &&
            e.writeUint64(this.base_data_offset),
          this.flags & b.TFHD_FLAG_SAMPLE_DESC &&
            e.writeUint32(this.default_sample_description_index),
          this.flags & b.TFHD_FLAG_SAMPLE_DUR &&
            e.writeUint32(this.default_sample_duration),
          this.flags & b.TFHD_FLAG_SAMPLE_SIZE &&
            e.writeUint32(this.default_sample_size),
          this.flags & b.TFHD_FLAG_SAMPLE_FLAGS &&
            e.writeUint32(this.default_sample_flags);
      }),
      (b.tkhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.size = 80),
          this.writeHeader(e),
          e.writeUint32(this.creation_time),
          e.writeUint32(this.modification_time),
          e.writeUint32(this.track_id),
          e.writeUint32(0),
          e.writeUint32(this.duration),
          e.writeUint32(0),
          e.writeUint32(0),
          e.writeInt16(this.layer),
          e.writeInt16(this.alternate_group),
          e.writeInt16(this.volume << 8),
          e.writeUint16(0),
          e.writeInt32Array(this.matrix),
          e.writeUint32(this.width),
          e.writeUint32(this.height);
      }),
      (b.trexBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size = 20),
          this.writeHeader(e),
          e.writeUint32(this.track_id),
          e.writeUint32(this.default_sample_description_index),
          e.writeUint32(this.default_sample_duration),
          e.writeUint32(this.default_sample_size),
          e.writeUint32(this.default_sample_flags);
      }),
      (b.trunBox.prototype.write = function (e) {
        (this.version = 0),
          (this.size = 4),
          this.flags & b.TRUN_FLAGS_DATA_OFFSET && (this.size += 4),
          this.flags & b.TRUN_FLAGS_FIRST_FLAG && (this.size += 4),
          this.flags & b.TRUN_FLAGS_DURATION &&
            (this.size += 4 * this.sample_duration.length),
          this.flags & b.TRUN_FLAGS_SIZE &&
            (this.size += 4 * this.sample_size.length),
          this.flags & b.TRUN_FLAGS_FLAGS &&
            (this.size += 4 * this.sample_flags.length),
          this.flags & b.TRUN_FLAGS_CTS_OFFSET &&
            (this.size += 4 * this.sample_composition_time_offset.length),
          this.writeHeader(e),
          e.writeUint32(this.sample_count),
          this.flags & b.TRUN_FLAGS_DATA_OFFSET &&
            ((this.data_offset_position = e.getPosition()),
            e.writeInt32(this.data_offset)),
          this.flags & b.TRUN_FLAGS_FIRST_FLAG &&
            e.writeUint32(this.first_sample_flags);
        for (var t = 0; t < this.sample_count; t++)
          this.flags & b.TRUN_FLAGS_DURATION &&
            e.writeUint32(this.sample_duration[t]),
            this.flags & b.TRUN_FLAGS_SIZE &&
              e.writeUint32(this.sample_size[t]),
            this.flags & b.TRUN_FLAGS_FLAGS &&
              e.writeUint32(this.sample_flags[t]),
            this.flags & b.TRUN_FLAGS_CTS_OFFSET &&
              (0 === this.version
                ? e.writeUint32(this.sample_composition_time_offset[t])
                : e.writeInt32(this.sample_composition_time_offset[t]));
      }),
      (b['url Box'].prototype.write = function (e) {
        (this.version = 0),
          this.location
            ? ((this.flags = 0), (this.size = this.location.length + 1))
            : ((this.flags = 1), (this.size = 0)),
          this.writeHeader(e),
          this.location && e.writeCString(this.location);
      }),
      (b['urn Box'].prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 0),
          (this.size =
            this.name.length +
            1 +
            (this.location ? this.location.length + 1 : 0)),
          this.writeHeader(e),
          e.writeCString(this.name),
          this.location && e.writeCString(this.location);
      }),
      (b.vmhdBox.prototype.write = function (e) {
        (this.version = 0),
          (this.flags = 1),
          (this.size = 8),
          this.writeHeader(e),
          e.writeUint16(this.graphicsmode),
          e.writeUint16Array(this.opcolor);
      }),
      (b.cttsBox.prototype.unpack = function (e) {
        for (var t, r = 0, i = 0; i < this.sample_counts.length; i++)
          for (t = 0; t < this.sample_counts[i]; t++)
            (e[r].pts = e[r].dts + this.sample_offsets[i]), r++;
      }),
      (b.sttsBox.prototype.unpack = function (e) {
        for (var t, r = 0, i = 0; i < this.sample_counts.length; i++)
          for (t = 0; t < this.sample_counts[i]; t++)
            (e[r].dts = 0 === r ? 0 : e[r - 1].dts + this.sample_deltas[i]),
              r++;
      }),
      (b.stcoBox.prototype.unpack = function (e) {
        for (var t = 0; t < this.chunk_offsets.length; t++)
          e[t].offset = this.chunk_offsets[t];
      }),
      (b.stscBox.prototype.unpack = function (e) {
        for (var t, r, i = 0, s = 0, n = 0; n < this.first_chunk.length; n++)
          for (
            t = 0;
            t <
            (n + 1 < this.first_chunk.length ? this.first_chunk[n + 1] : 1 / 0);
            t++
          )
            for (s++, r = 0; r < this.samples_per_chunk[n]; r++) {
              if (!e[i]) return;
              (e[i].description_index = this.sample_description_index[n]),
                (e[i].chunk_index = s),
                i++;
            }
      }),
      (b.stszBox.prototype.unpack = function (e) {
        for (var t = 0; t < this.sample_sizes.length; t++)
          e[t].size = this.sample_sizes[t];
      }),
      (b.DIFF_BOXES_PROP_NAMES = [
        'boxes',
        'entries',
        'references',
        'subsamples',
        'items',
        'item_infos',
        'extents',
        'associations',
        'subsegments',
        'ranges',
        'seekLists',
        'seekPoints',
        'esd',
        'levels',
      ]),
      (b.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [
        'compatible_brands',
        'matrix',
        'opcolor',
        'sample_counts',
        'sample_counts',
        'sample_deltas',
        'first_chunk',
        'samples_per_chunk',
        'sample_sizes',
        'chunk_offsets',
        'sample_offsets',
        'sample_description_index',
        'sample_duration',
      ]),
      (b.boxEqualFields = function (e, t) {
        if (e && !t) return !1;
        for (var r in e)
          if (
            !(
              -1 < b.DIFF_BOXES_PROP_NAMES.indexOf(r) ||
              e[r] instanceof b.Box ||
              t[r] instanceof b.Box ||
              void 0 === e[r] ||
              void 0 === t[r] ||
              'function' == typeof e[r] ||
              'function' == typeof t[r] ||
              (e.subBoxNames && -1 < e.subBoxNames.indexOf(r.slice(0, 4))) ||
              (t.subBoxNames && -1 < t.subBoxNames.indexOf(r.slice(0, 4))) ||
              'data' === r ||
              'start' === r ||
              'size' === r ||
              'creation_time' === r ||
              'modification_time' === r ||
              -1 < b.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(r) ||
              e[r] === t[r]
            )
          )
            return !1;
        return !0;
      }),
      (b.boxEqual = function (e, t) {
        if (!b.boxEqualFields(e, t)) return !1;
        for (var r = 0; r < b.DIFF_BOXES_PROP_NAMES.length; r++) {
          var i = b.DIFF_BOXES_PROP_NAMES[r];
          if (e[i] && t[i] && !b.boxEqual(e[i], t[i])) return !1;
        }
        return !0;
      }),
      (s.prototype.parseSample = function (e) {
        var t,
          r = { resources: [] },
          i = new u(e.data.buffer);
        if (e.subsamples && 0 !== e.subsamples.length) {
          if (
            ((r.documentString = i.readString(e.subsamples[0].size)),
            1 < e.subsamples.length)
          )
            for (t = 1; t < e.subsamples.length; t++)
              r.resources[t] = i.readUint8Array(e.subsamples[t].size);
        } else r.documentString = i.readString(e.data.length);
        return (
          'undefined' != typeof DOMParser &&
            (r.document = new DOMParser().parseFromString(
              r.documentString,
              'application/xml'
            )),
          r
        );
      }),
      (n.prototype.parseSample = function (e) {
        return new u(e.data.buffer).readString(e.data.length);
      }),
      (n.prototype.parseConfig = function (e) {
        e = new u(e.buffer);
        return e.readUint32(), e.readCString();
      }),
      (t.XMLSubtitlein4Parser = s),
      (t.Textin4Parser = n);
    (B.prototype.setSegmentOptions = function (e, t, r) {
      var i,
        s = this.getTrackById(e);
      s &&
        (this.fragmentedTracks.push((i = {})),
        (i.id = e),
        (i.user = t),
        ((i.trak = s).nextSample = 0),
        (i.segmentStream = null),
        (i.nb_samples = 1e3),
        (i.rapAlignement = !0),
        r) &&
        (r.nbSamples && (i.nb_samples = r.nbSamples), r.rapAlignement) &&
        (i.rapAlignement = r.rapAlignement);
    }),
      (B.prototype.unsetSegmentOptions = function (e) {
        for (var t = -1, r = 0; r < this.fragmentedTracks.length; r++)
          this.fragmentedTracks[r].id == e && (t = r);
        -1 < t && this.fragmentedTracks.splice(t, 1);
      }),
      (B.prototype.setExtractionOptions = function (e, t, r) {
        var i,
          s = this.getTrackById(e);
        s &&
          (this.extractedTracks.push((i = {})),
          (i.id = e),
          (i.user = t),
          ((i.trak = s).nextSample = 0),
          (i.nb_samples = 1e3),
          (i.samples = []),
          r) &&
          r.nbSamples &&
          (i.nb_samples = r.nbSamples);
      }),
      (B.prototype.unsetExtractionOptions = function (e) {
        for (var t = -1, r = 0; r < this.extractedTracks.length; r++)
          this.extractedTracks[r].id == e && (t = r);
        -1 < t && this.extractedTracks.splice(t, 1);
      }),
      (B.prototype.parse = function () {
        var e, t;
        if (!this.restoreParsePosition || this.restoreParsePosition())
          for (;;) {
            if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
              if (this.processIncompleteMdat()) continue;
              return;
            }
            if (
              (this.saveParsePosition && this.saveParsePosition(),
              (e = b.parseOneBox(this.stream, !1)).code ===
                b.ERR_NOT_ENOUGH_DATA)
            ) {
              if (this.processIncompleteBox) {
                if (this.processIncompleteBox(e)) continue;
                return;
              }
              return;
            }
            var r = 'uuid' !== (t = e.box).type ? t.type : t.uuid;
            switch ((this.boxes.push(t), r)) {
              case 'mdat':
                this.mdats.push(t);
                break;
              case 'moof':
                this.moofs.push(t);
                break;
              case 'moov':
                (this.moovStartFound = !0),
                  0 === this.mdats.length && (this.isProgressive = !0);
              default:
                void 0 !== this[r] &&
                  f.warn(
                    'ISOFile',
                    'Duplicate Box of type: ' +
                      r +
                      ', overriding previous occurrence'
                  ),
                  (this[r] = t);
            }
            this.updateUsedBytes && this.updateUsedBytes(t, e);
          }
      }),
      (B.prototype.checkBuffer = function (e) {
        if (null == e) throw 'Buffer must be defined and non empty';
        if (void 0 === e.fileStart)
          throw 'Buffer must have a fileStart property';
        return 0 === e.byteLength
          ? (f.warn(
              'ISOFile',
              'Ignoring empty buffer (fileStart: ' + e.fileStart + ')'
            ),
            this.stream.logBufferLevel(),
            !1)
          : (f.info(
              'ISOFile',
              'Processing buffer (fileStart: ' + e.fileStart + ')'
            ),
            (e.usedBytes = 0),
            this.stream.insertBuffer(e),
            this.stream.logBufferLevel(),
            !!this.stream.initialized() ||
              (f.warn('ISOFile', 'Not ready to start parsing'), !1));
      }),
      (B.prototype.appendBuffer = function (e, t) {
        var r;
        if (this.checkBuffer(e))
          return (
            this.parse(),
            this.moovStartFound &&
              !this.moovStartSent &&
              ((this.moovStartSent = !0), this.onMoovStart) &&
              this.onMoovStart(),
            this.moov
              ? (this.sampleListBuilt ||
                  (this.buildSampleLists(), (this.sampleListBuilt = !0)),
                this.updateSampleLists(),
                this.onReady &&
                  !this.readySent &&
                  ((this.readySent = !0), this.onReady(this.getInfo())),
                this.processSamples(t),
                this.nextSeekPosition
                  ? ((r = this.nextSeekPosition),
                    (this.nextSeekPosition = void 0))
                  : (r = this.nextParsePosition),
                this.stream.getEndFilePositionAfter &&
                  (r = this.stream.getEndFilePositionAfter(r)))
              : (r = this.nextParsePosition || 0),
            this.sidx &&
              this.onSidx &&
              !this.sidxSent &&
              (this.onSidx(this.sidx), (this.sidxSent = !0)),
            this.meta &&
              (this.flattenItemInfo &&
                !this.itemListBuilt &&
                (this.flattenItemInfo(), (this.itemListBuilt = !0)),
              this.processItems) &&
              this.processItems(this.onItem),
            this.stream.cleanBuffers &&
              (f.info(
                'ISOFile',
                'Done processing buffer (fileStart: ' +
                  e.fileStart +
                  ') - next buffer to fetch should have a fileStart position of ' +
                  r
              ),
              this.stream.logBufferLevel(),
              this.stream.cleanBuffers(),
              this.stream.logBufferLevel(!0),
              f.info(
                'ISOFile',
                'Sample data size in memory: ' +
                  this.getAllocatedSampleDataSize()
              )),
            r
          );
      }),
      (B.prototype.getInfo = function () {
        var e,
          t,
          r,
          i,
          s,
          n,
          a = {},
          o = new Date('1904-01-01T00:00:00Z').getTime();
        if (this.moov)
          for (
            a.hasMoov = !0,
              a.duration = this.moov.mvhd.duration,
              a.timescale = this.moov.mvhd.timescale,
              a.isFragmented = null != this.moov.mvex,
              a.isFragmented &&
                this.moov.mvex.mehd &&
                (a.fragment_duration = this.moov.mvex.mehd.fragment_duration),
              a.isProgressive = this.isProgressive,
              a.hasIOD = null != this.moov.iods,
              a.brands = [],
              a.brands.push(this.ftyp.major_brand),
              a.brands = a.brands.concat(this.ftyp.compatible_brands),
              a.created = new Date(o + 1e3 * this.moov.mvhd.creation_time),
              a.modified = new Date(o + 1e3 * this.moov.mvhd.modification_time),
              a.tracks = [],
              a.audioTracks = [],
              a.videoTracks = [],
              a.subtitleTracks = [],
              a.metadataTracks = [],
              a.hintTracks = [],
              a.otherTracks = [],
              e = 0;
            e < this.moov.traks.length;
            e++
          ) {
            if (
              ((n = (r = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0]),
              a.tracks.push((i = {})),
              (i.id = r.tkhd.track_id),
              (i.name = r.mdia.hdlr.name),
              (i.references = []),
              r.tref)
            )
              for (t = 0; t < r.tref.boxes.length; t++)
                i.references.push((s = {})),
                  (s.type = r.tref.boxes[t].type),
                  (s.track_ids = r.tref.boxes[t].track_ids);
            r.edts && (i.edits = r.edts.elst.entries),
              (i.created = new Date(o + 1e3 * r.tkhd.creation_time)),
              (i.modified = new Date(o + 1e3 * r.tkhd.modification_time)),
              (i.movie_duration = r.tkhd.duration),
              (i.movie_timescale = a.timescale),
              (i.layer = r.tkhd.layer),
              (i.alternate_group = r.tkhd.alternate_group),
              (i.volume = r.tkhd.volume),
              (i.matrix = r.tkhd.matrix),
              (i.track_width = r.tkhd.width / 65536),
              (i.track_height = r.tkhd.height / 65536),
              (i.timescale = r.mdia.mdhd.timescale),
              (i.cts_shift = r.mdia.minf.stbl.cslg),
              (i.duration = r.mdia.mdhd.duration),
              (i.samples_duration = r.samples_duration),
              (i.codec = n.getCodec()),
              (i.kind =
                r.udta && r.udta.kinds.length
                  ? r.udta.kinds[0]
                  : { schemeURI: '', value: '' }),
              (i.language = r.mdia.elng
                ? r.mdia.elng.extended_language
                : r.mdia.mdhd.languageString),
              (i.nb_samples = r.samples.length),
              (i.size = r.samples_size),
              (i.bitrate = (8 * i.size * i.timescale) / i.samples_duration),
              n.isAudio()
                ? ((i.type = 'audio'),
                  a.audioTracks.push(i),
                  (i.audio = {}),
                  (i.audio.sample_rate = n.getSampleRate()),
                  (i.audio.channel_count = n.getChannelCount()),
                  (i.audio.sample_size = n.getSampleSize()))
                : n.isVideo()
                ? ((i.type = 'video'),
                  a.videoTracks.push(i),
                  (i.video = {}),
                  (i.video.width = n.getWidth()),
                  (i.video.height = n.getHeight()))
                : (n.isSubtitle()
                    ? ((i.type = 'subtitles'), a.subtitleTracks)
                    : n.isHint()
                    ? ((i.type = 'metadata'), a.hintTracks)
                    : n.isMetadata()
                    ? ((i.type = 'metadata'), a.metadataTracks)
                    : ((i.type = 'metadata'), a.otherTracks)
                  ).push(i);
          }
        else a.hasMoov = !1;
        if (((a.mime = ''), a.hasMoov && a.tracks)) {
          for (
            a.videoTracks && 0 < a.videoTracks.length
              ? (a.mime += 'video/mp4; codecs="')
              : a.audioTracks && 0 < a.audioTracks.length
              ? (a.mime += 'audio/mp4; codecs="')
              : (a.mime += 'application/mp4; codecs="'),
              e = 0;
            e < a.tracks.length;
            e++
          )
            0 !== e && (a.mime += ','), (a.mime += a.tracks[e].codec);
          (a.mime += '"; profiles="'),
            (a.mime += this.ftyp.compatible_brands.join()),
            (a.mime += '"');
        }
        return a;
      }),
      (B.prototype.processSamples = function (e) {
        var t;
        if (this.sampleProcessingStarted) {
          if (this.isFragmentationInitialized && null !== this.onSegment)
            for (t = 0; t < this.fragmentedTracks.length; t++)
              for (
                var r = this.fragmentedTracks[t], i = r.trak;
                i.nextSample < i.samples.length && this.sampleProcessingStarted;

              ) {
                f.debug(
                  'ISOFile',
                  'Creating media fragment on track #' +
                    r.id +
                    ' for sample ' +
                    i.nextSample
                );
                var s = this.createFragment(
                  r.id,
                  i.nextSample,
                  r.segmentStream
                );
                if (!s) break;
                if (
                  ((r.segmentStream = s),
                  i.nextSample++,
                  (i.nextSample % r.nb_samples == 0 ||
                    e ||
                    i.nextSample >= i.samples.length) &&
                    (f.info(
                      'ISOFile',
                      'Sending fragmented data on track #' +
                        r.id +
                        ' for samples [' +
                        Math.max(0, i.nextSample - r.nb_samples) +
                        ',' +
                        (i.nextSample - 1) +
                        ']'
                    ),
                    f.info(
                      'ISOFile',
                      'Sample data size in memory: ' +
                        this.getAllocatedSampleDataSize()
                    ),
                    this.onSegment &&
                      this.onSegment(
                        r.id,
                        r.user,
                        r.segmentStream.buffer,
                        i.nextSample,
                        e || i.nextSample >= i.samples.length
                      ),
                    (r.segmentStream = null),
                    r !== this.fragmentedTracks[t]))
                )
                  break;
              }
          if (null !== this.onSamples)
            for (t = 0; t < this.extractedTracks.length; t++) {
              var n = this.extractedTracks[t];
              for (
                i = n.trak;
                i.nextSample < i.samples.length && this.sampleProcessingStarted;

              ) {
                f.debug(
                  'ISOFile',
                  'Exporting on track #' + n.id + ' sample #' + i.nextSample
                );
                var a = this.getSample(i, i.nextSample);
                if (!a) break;
                if (
                  (i.nextSample++,
                  n.samples.push(a),
                  (i.nextSample % n.nb_samples == 0 ||
                    i.nextSample >= i.samples.length) &&
                    (f.debug(
                      'ISOFile',
                      'Sending samples on track #' +
                        n.id +
                        ' for sample ' +
                        i.nextSample
                    ),
                    this.onSamples && this.onSamples(n.id, n.user, n.samples),
                    (n.samples = []),
                    n !== this.extractedTracks[t]))
                )
                  break;
              }
            }
        }
      }),
      (B.prototype.getBox = function (e) {
        e = this.getBoxes(e, !0);
        return e.length ? e[0] : null;
      }),
      (B.prototype.getBoxes = function (e, t) {
        var r = [];
        return B._sweep.call(this, e, r, t), r;
      }),
      (B._sweep = function (e, t, r) {
        for (var i in (this.type && this.type == e && t.push(this),
        this.boxes)) {
          if (t.length && r) return;
          B._sweep.call(this.boxes[i], e, t, r);
        }
      }),
      (B.prototype.getTrackSamplesInfo = function (e) {
        e = this.getTrackById(e);
        return e ? e.samples : void 0;
      }),
      (B.prototype.getTrackSample = function (e, t) {
        e = this.getTrackById(e);
        return this.getSample(e, t);
      }),
      (B.prototype.releaseUsedSamples = function (e, t) {
        var r = 0,
          i = this.getTrackById(e);
        i.lastValidSample || (i.lastValidSample = 0);
        for (var s = i.lastValidSample; s < t; s++)
          r += this.releaseSample(i, s);
        f.info(
          'ISOFile',
          'Track #' +
            e +
            ' released samples up to ' +
            t +
            ' (released size: ' +
            r +
            ', remaining: ' +
            this.samplesDataSize +
            ')'
        ),
          (i.lastValidSample = t);
      }),
      (B.prototype.start = function () {
        (this.sampleProcessingStarted = !0), this.processSamples(!1);
      }),
      (B.prototype.stop = function () {
        this.sampleProcessingStarted = !1;
      }),
      (B.prototype.flush = function () {
        f.info('ISOFile', 'Flushing remaining samples'),
          this.updateSampleLists(),
          this.processSamples(!0),
          this.stream.cleanBuffers(),
          this.stream.logBufferLevel(!0);
      }),
      (B.prototype.seekTrack = function (e, t, r) {
        var i,
          s,
          n,
          a,
          o = 0,
          l = 0;
        if (0 === r.samples.length)
          return (
            f.info(
              'ISOFile',
              'No sample in track, cannot seek! Using time ' +
                f.getDurationString(0, 1) +
                ' and offset: 0'
            ),
            { offset: 0, time: 0 }
          );
        for (i = 0; i < r.samples.length; i++) {
          if (((s = r.samples[i]), 0 === i)) (l = 0), (a = s.timescale);
          else if (s.cts > e * s.timescale) {
            l = i - 1;
            break;
          }
          t && s.is_sync && (o = i);
        }
        for (
          t && (l = o), e = r.samples[l].cts, r.nextSample = l;
          r.samples[l].alreadyRead === r.samples[l].size && r.samples[l + 1];

        )
          l++;
        return (
          (n = r.samples[l].offset + r.samples[l].alreadyRead),
          f.info(
            'ISOFile',
            'Seeking to ' +
              (t ? 'RAP' : '') +
              ' sample #' +
              r.nextSample +
              ' on track ' +
              r.tkhd.track_id +
              ', time ' +
              f.getDurationString(e, a) +
              ' and offset: ' +
              n
          ),
          { offset: n, time: e / a }
        );
      }),
      (B.prototype.seek = function (e, t) {
        var r,
          i,
          s = this.moov,
          n = { offset: 1 / 0, time: 1 / 0 };
        if (this.moov) {
          for (i = 0; i < s.traks.length; i++)
            (r = s.traks[i]),
              (r = this.seekTrack(e, t, r)).offset < n.offset &&
                (n.offset = r.offset),
              r.time < n.time && (n.time = r.time);
          return (
            f.info(
              'ISOFile',
              'Seeking at time ' +
                f.getDurationString(n.time, 1) +
                ' needs a buffer with a fileStart position of ' +
                n.offset
            ),
            n.offset === 1 / 0
              ? (n = { offset: this.nextParsePosition, time: 0 })
              : (n.offset = this.stream.getEndFilePositionAfter(n.offset)),
            f.info(
              'ISOFile',
              'Adjusted seek position (after checking data already in buffer): ' +
                n.offset
            ),
            n
          );
        }
        throw 'Cannot seek: moov not received!';
      }),
      (B.prototype.equal = function (e) {
        for (var t = 0; t < this.boxes.length && t < e.boxes.length; ) {
          var r = this.boxes[t],
            i = e.boxes[t];
          if (!b.boxEqual(r, i)) return !1;
          t++;
        }
        return !0;
      }),
      ((t.ISOFile = B).prototype.lastBoxStartPosition = 0),
      (B.prototype.parsingMdat = null),
      (B.prototype.nextParsePosition = 0),
      (B.prototype.discardMdatData = !1),
      (B.prototype.processIncompleteBox = function (e) {
        var t;
        return 'mdat' === e.type
          ? ((t = new b[e.type + 'Box'](e.size)),
            (this.parsingMdat = t),
            this.boxes.push(t),
            this.mdats.push(t),
            (t.start = e.start),
            (t.hdr_size = e.hdr_size),
            this.stream.addUsedBytes(t.hdr_size),
            (this.lastBoxStartPosition = t.start + t.size),
            this.stream.seek(t.start + t.size, !1, this.discardMdatData)
              ? !(this.parsingMdat = null)
              : (this.moovStartFound
                  ? (this.nextParsePosition =
                      this.stream.findEndContiguousBuf())
                  : (this.nextParsePosition = t.start + t.size),
                !1))
          : ('moov' === e.type &&
              ((this.moovStartFound = !0), 0 === this.mdats.length) &&
              (this.isProgressive = !0),
            this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()
              ? ((this.nextParsePosition = this.stream.getEndPosition()), !0)
              : (!e.type || this.moovStartFound
                  ? (this.nextParsePosition = this.stream.getEndPosition())
                  : (this.nextParsePosition =
                      this.stream.getPosition() + e.size),
                !1));
      }),
      (B.prototype.hasIncompleteMdat = function () {
        return null !== this.parsingMdat;
      }),
      (B.prototype.processIncompleteMdat = function () {
        var e = this.parsingMdat;
        return this.stream.seek(e.start + e.size, !1, this.discardMdatData)
          ? (f.debug('ISOFile', "Found 'mdat' end in buffered data"),
            !(this.parsingMdat = null))
          : ((this.nextParsePosition = this.stream.findEndContiguousBuf()), !1);
      }),
      (B.prototype.restoreParsePosition = function () {
        return this.stream.seek(
          this.lastBoxStartPosition,
          !0,
          this.discardMdatData
        );
      }),
      (B.prototype.saveParsePosition = function () {
        this.lastBoxStartPosition = this.stream.getPosition();
      }),
      (B.prototype.updateUsedBytes = function (e, t) {
        this.stream.addUsedBytes &&
          ('mdat' === e.type
            ? (this.stream.addUsedBytes(e.hdr_size),
              this.discardMdatData &&
                this.stream.addUsedBytes(e.size - e.hdr_size))
            : this.stream.addUsedBytes(e.size));
      }),
      (B.prototype.add = b.Box.prototype.add),
      (B.prototype.addBox = b.Box.prototype.addBox),
      (B.prototype.init = function (e) {
        var e = e || {},
          t =
            (this.add('ftyp')
              .set('major_brand', (e.brands && e.brands[0]) || 'iso4')
              .set('minor_version', 0)
              .set('compatible_brands', e.brands || ['iso4']),
            this.add('moov'));
        return (
          t
            .add('mvhd')
            .set('timescale', e.timescale || 600)
            .set('rate', e.rate || 65536)
            .set('creation_time', 0)
            .set('modification_time', 0)
            .set('duration', e.duration || 0)
            .set('volume', e.width ? 0 : 256)
            .set('matrix', [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824])
            .set('next_track_id', 1),
          t.add('mvex'),
          this
        );
      }),
      (B.prototype.addTrack = function (e) {
        this.moov || this.init(e);
        var t = e || {},
          e =
            ((t.width = t.width || 320),
            (t.height = t.height || 320),
            (t.id = t.id || this.moov.mvhd.next_track_id),
            (t.type = t.type || 'avc1'),
            this.moov.add('trak')),
          r =
            ((this.moov.mvhd.next_track_id = t.id + 1),
            e
              .add('tkhd')
              .set(
                'flags',
                b.TKHD_FLAG_ENABLED |
                  b.TKHD_FLAG_IN_MOVIE |
                  b.TKHD_FLAG_IN_PREVIEW
              )
              .set('creation_time', 0)
              .set('modification_time', 0)
              .set('track_id', t.id)
              .set('duration', t.duration || 0)
              .set('layer', t.layer || 0)
              .set('alternate_group', 0)
              .set('volume', 1)
              .set('matrix', [0, 0, 0, 0, 0, 0, 0, 0, 0])
              .set('width', t.width << 16)
              .set('height', t.height << 16),
            e.add('mdia')),
          i =
            (r
              .add('mdhd')
              .set('creation_time', 0)
              .set('modification_time', 0)
              .set('timescale', t.timescale || 1)
              .set('duration', t.media_duration || 0)
              .set('language', t.language || 'und'),
            r
              .add('hdlr')
              .set('handler', t.hdlr || 'vide')
              .set('name', t.name || 'Track created with MP4Box.js'),
            r.add('elng').set('extended_language', t.language || 'fr-FR'),
            r.add('minf'));
        if (void 0 !== b[t.type + 'SampleEntry']) {
          var s,
            n,
            a,
            o = new b[t.type + 'SampleEntry'](),
            l = ((o.data_reference_index = 1), '');
          for (s in b.sampleEntryCodes)
            for (var d = b.sampleEntryCodes[s], h = 0; h < d.length; h++)
              if (-1 < d.indexOf(t.type)) {
                l = s;
                break;
              }
          switch (l) {
            case 'Visual':
              i.add('vmhd').set('graphicsmode', 0).set('opcolor', [0, 0, 0]),
                o
                  .set('width', t.width)
                  .set('height', t.height)
                  .set('horizresolution', 72 << 16)
                  .set('vertresolution', 72 << 16)
                  .set('frame_count', 1)
                  .set('compressorname', t.type + ' Compressor')
                  .set('depth', 24),
                t.avcDecoderConfigRecord &&
                  ((n = new b.avcCBox()),
                  (a = new u(t.avcDecoderConfigRecord)),
                  n.parse(a),
                  o.addBox(n));
              break;
            case 'Audio':
              i.add('smhd').set('balance', t.balance || 0),
                o
                  .set('channel_count', t.channel_count || 2)
                  .set('samplesize', t.samplesize || 16)
                  .set('samplerate', t.samplerate || 65536);
              break;
            case 'Hint':
              i.add('hmhd');
              break;
            case 'Subtitle':
              i.add('sthd'),
                'stpp' === t.type &&
                  o
                    .set('namespace', t.namespace || 'nonamespace')
                    .set('schema_location', t.schema_location || '')
                    .set('auxiliary_mime_types', t.auxiliary_mime_types || '');
              break;
            default:
              i.add('nmhd');
          }
          t.description && o.addBox(t.description),
            t.description_boxes &&
              t.description_boxes.forEach(function (e) {
                o.addBox(e);
              }),
            i
              .add('dinf')
              .add('dref')
              .addEntry(new b['url Box']().set('flags', 1));
          r = i.add('stbl');
          return (
            r.add('stsd').addEntry(o),
            r.add('stts').set('sample_counts', []).set('sample_deltas', []),
            r
              .add('stsc')
              .set('first_chunk', [])
              .set('samples_per_chunk', [])
              .set('sample_description_index', []),
            r.add('stco').set('chunk_offsets', []),
            r.add('stsz').set('sample_sizes', []),
            this.moov.mvex
              .add('trex')
              .set('track_id', t.id)
              .set(
                'default_sample_description_index',
                t.default_sample_description_index || 1
              )
              .set('default_sample_duration', t.default_sample_duration || 0)
              .set('default_sample_size', t.default_sample_size || 0)
              .set('default_sample_flags', t.default_sample_flags || 0),
            this.buildTrakSampleLists(e),
            t.id
          );
        }
      }),
      (b.Box.prototype.computeSize = function (e) {
        e = e || new l();
        (e.endianness = l.BIG_ENDIAN), this.write(e);
      }),
      (B.prototype.addSample = function (e, t, r) {
        var r = r || {},
          i = {},
          e = this.getTrackById(e);
        if (null !== e)
          return (
            (i.number = e.samples.length),
            (i.track_id = e.tkhd.track_id),
            (i.timescale = e.mdia.mdhd.timescale),
            (i.description_index = r.sample_description_index
              ? r.sample_description_index - 1
              : 0),
            (i.description =
              e.mdia.minf.stbl.stsd.entries[i.description_index]),
            (i.data = t),
            (i.size = t.byteLength),
            (i.alreadyRead = i.size),
            (i.duration = r.duration || 1),
            (i.cts = r.cts || 0),
            (i.dts = r.dts || 0),
            (i.is_sync = r.is_sync || !1),
            (i.is_leading = r.is_leading || 0),
            (i.depends_on = r.depends_on || 0),
            (i.is_depended_on = r.is_depended_on || 0),
            (i.has_redundancy = r.has_redundancy || 0),
            (i.degradation_priority = r.degradation_priority || 0),
            (i.offset = 0),
            (i.subsamples = r.subsamples),
            e.samples.push(i),
            (e.samples_size += i.size),
            (e.samples_duration += i.duration),
            e.first_dts || (e.first_dts = r.dts),
            this.processSamples(),
            (e = this.createSingleSampleMoof(i)),
            this.addBox(e),
            e.computeSize(),
            (e.trafs[0].truns[0].data_offset = e.size + 8),
            (this.add('mdat').data = new Uint8Array(t)),
            i
          );
      }),
      (B.prototype.createSingleSampleMoof = function (e) {
        var t = e.is_sync ? 1 << 25 : 65536,
          r = new b.moofBox(),
          i =
            (r.add('mfhd').set('sequence_number', this.nextMoofNumber),
            this.nextMoofNumber++,
            r.add('traf')),
          s = this.getTrackById(e.track_id);
        return (
          i
            .add('tfhd')
            .set('track_id', e.track_id)
            .set('flags', b.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
          i.add('tfdt').set('baseMediaDecodeTime', e.dts - (s.first_dts || 0)),
          i
            .add('trun')
            .set(
              'flags',
              b.TRUN_FLAGS_DATA_OFFSET |
                b.TRUN_FLAGS_DURATION |
                b.TRUN_FLAGS_SIZE |
                b.TRUN_FLAGS_FLAGS |
                b.TRUN_FLAGS_CTS_OFFSET
            )
            .set('data_offset', 0)
            .set('first_sample_flags', 0)
            .set('sample_count', 1)
            .set('sample_duration', [e.duration])
            .set('sample_size', [e.size])
            .set('sample_flags', [t])
            .set('sample_composition_time_offset', [e.cts - e.dts]),
          r
        );
      }),
      (B.prototype.lastMoofIndex = 0),
      (B.prototype.samplesDataSize = 0),
      (B.prototype.resetTables = function () {
        var e, t;
        for (
          this.initial_duration = this.moov.mvhd.duration,
            e = this.moov.mvhd.duration = 0;
          e < this.moov.traks.length;
          e++
        ) {
          ((t = this.moov.traks[e]).tkhd.duration = 0),
            (t.mdia.mdhd.duration = 0),
            ((t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets =
              []),
            ((r = t.mdia.minf.stbl.stsc).first_chunk = []),
            (r.samples_per_chunk = []),
            (r.sample_description_index = []),
            ((t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes =
              []),
            ((r = t.mdia.minf.stbl.stts).sample_counts = []),
            (r.sample_deltas = []),
            (r = t.mdia.minf.stbl.ctts) &&
              ((r.sample_counts = []), (r.sample_offsets = []));
          var r = t.mdia.minf.stbl.stss,
            r = t.mdia.minf.stbl.boxes.indexOf(r);
          -1 != r && (t.mdia.minf.stbl.boxes[r] = null);
        }
      }),
      (B.initSampleGroups = function (e, t, r, i, s) {
        var n, a, o, l;
        function d(e, t, r) {
          (this.grouping_type = e),
            (this.grouping_type_parameter = t),
            (this.sbgp = r),
            (this.last_sample_in_run = -1),
            (this.entry_index = -1);
        }
        for (
          t && (t.sample_groups_info = []),
            e.sample_groups_info || (e.sample_groups_info = []),
            a = 0;
          a < r.length;
          a++
        ) {
          for (
            l = r[a].grouping_type + '/' + r[a].grouping_type_parameter,
              o = new d(r[a].grouping_type, r[a].grouping_type_parameter, r[a]),
              t && (t.sample_groups_info[l] = o),
              e.sample_groups_info[l] || (e.sample_groups_info[l] = o),
              n = 0;
            n < i.length;
            n++
          )
            i[n].grouping_type === r[a].grouping_type &&
              ((o.description = i[n]), (o.description.used = !0));
          if (s)
            for (n = 0; n < s.length; n++)
              s[n].grouping_type === r[a].grouping_type &&
                ((o.fragment_description = s[n]),
                (o.fragment_description.used = !0),
                (o.is_fragment = !0));
        }
        if (t) {
          if (s)
            for (a = 0; a < s.length; a++)
              !s[a].used &&
                2 <= s[a].version &&
                ((l = s[a].grouping_type + '/0'),
                ((o = new d(s[a].grouping_type, 0)).is_fragment = !0),
                t.sample_groups_info[l] || (t.sample_groups_info[l] = o));
        } else
          for (a = 0; a < i.length; a++)
            !i[a].used &&
              2 <= i[a].version &&
              ((l = i[a].grouping_type + '/0'),
              (o = new d(i[a].grouping_type, 0)),
              e.sample_groups_info[l] || (e.sample_groups_info[l] = o));
      }),
      (B.setSampleGroupProperties = function (e, t, r, i) {
        var s, n, a;
        for (s in ((t.sample_groups = []), i))
          (t.sample_groups[s] = {}),
            (t.sample_groups[s].grouping_type = i[s].grouping_type),
            (t.sample_groups[s].grouping_type_parameter =
              i[s].grouping_type_parameter),
            r >= i[s].last_sample_in_run &&
              (i[s].last_sample_in_run < 0 && (i[s].last_sample_in_run = 0),
              i[s].entry_index++,
              i[s].entry_index <= i[s].sbgp.entries.length - 1) &&
              (i[s].last_sample_in_run +=
                i[s].sbgp.entries[i[s].entry_index].sample_count),
            i[s].entry_index <= i[s].sbgp.entries.length - 1
              ? (t.sample_groups[s].group_description_index =
                  i[s].sbgp.entries[i[s].entry_index].group_description_index)
              : (t.sample_groups[s].group_description_index = -1),
            0 !== t.sample_groups[s].group_description_index &&
              ((a = i[s].fragment_description || i[s].description),
              0 < t.sample_groups[s].group_description_index
                ? ((n =
                    65535 < t.sample_groups[s].group_description_index
                      ? (t.sample_groups[s].group_description_index >> 16) - 1
                      : t.sample_groups[s].group_description_index - 1),
                  a &&
                    0 <= n &&
                    (t.sample_groups[s].description = a.entries[n]))
                : a &&
                  2 <= a.version &&
                  0 < a.default_group_description_index &&
                  (t.sample_groups[s].description =
                    a.entries[a.default_group_description_index - 1]));
      }),
      (B.process_sdtp = function (e, t, r) {
        t &&
          (e
            ? ((t.is_leading = e.is_leading[r]),
              (t.depends_on = e.sample_depends_on[r]),
              (t.is_depended_on = e.sample_is_depended_on[r]),
              (t.has_redundancy = e.sample_has_redundancy[r]))
            : ((t.is_leading = 0),
              (t.depends_on = 0),
              (t.is_depended_on = 0),
              (t.has_redundancy = 0)));
      }),
      (B.prototype.buildSampleLists = function () {
        for (var e, t = 0; t < this.moov.traks.length; t++)
          (e = this.moov.traks[t]), this.buildTrakSampleLists(e);
      }),
      (B.prototype.buildTrakSampleLists = function (e) {
        var t,
          r,
          i,
          s,
          n,
          a,
          o,
          l,
          d,
          h,
          u,
          f,
          p,
          c,
          m,
          _,
          g,
          y,
          b,
          v,
          w,
          S,
          E,
          U;
        if (
          ((e.samples = []),
          (e.samples_duration = 0),
          (e.samples_size = 0),
          (r = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64),
          (i = e.mdia.minf.stbl.stsc),
          (s = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2),
          (n = e.mdia.minf.stbl.stts),
          (a = e.mdia.minf.stbl.ctts),
          (o = e.mdia.minf.stbl.stss),
          (l = e.mdia.minf.stbl.stsd),
          (d = e.mdia.minf.stbl.subs),
          (f = e.mdia.minf.stbl.stdp),
          (h = e.mdia.minf.stbl.sbgps),
          (u = e.mdia.minf.stbl.sgpds),
          (w = v = b = y = -1),
          (U = E = S = 0),
          B.initSampleGroups(e, null, h, u),
          void 0 !== s)
        ) {
          for (t = 0; t < s.sample_sizes.length; t++) {
            var x = {};
            (x.number = t),
              (x.track_id = e.tkhd.track_id),
              (x.timescale = e.mdia.mdhd.timescale),
              (x.alreadyRead = 0),
              ((e.samples[t] = x).size = s.sample_sizes[t]),
              (e.samples_size += x.size),
              0 === t
                ? ((p = 0),
                  (x.chunk_index = c = 1),
                  (x.chunk_run_index = p),
                  (g = i.samples_per_chunk[p]),
                  (_ = 0),
                  (m =
                    p + 1 < i.first_chunk.length
                      ? i.first_chunk[p + 1] - 1
                      : 1 / 0))
                : t < g
                ? ((x.chunk_index = c), (x.chunk_run_index = p))
                : ((_ = 0),
                  (x.chunk_index = ++c) <= m ||
                    (m =
                      ++p + 1 < i.first_chunk.length
                        ? i.first_chunk[p + 1] - 1
                        : 1 / 0),
                  (x.chunk_run_index = p),
                  (g += i.samples_per_chunk[p])),
              (x.description_index =
                i.sample_description_index[x.chunk_run_index] - 1),
              (x.description = l.entries[x.description_index]),
              (x.offset = r.chunk_offsets[x.chunk_index - 1] + _),
              (_ += x.size),
              y < t && (b++, y < 0 && (y = 0), (y += n.sample_counts[b])),
              0 < t
                ? ((e.samples[t - 1].duration = n.sample_deltas[b]),
                  (e.samples_duration += e.samples[t - 1].duration),
                  (x.dts = e.samples[t - 1].dts + e.samples[t - 1].duration))
                : (x.dts = 0),
              a
                ? (v <= t && (w++, v < 0 && (v = 0), (v += a.sample_counts[w])),
                  (x.cts = e.samples[t].dts + a.sample_offsets[w]))
                : (x.cts = x.dts),
              o
                ? (t == o.sample_numbers[S] - 1
                    ? ((x.is_sync = !0), S++)
                    : ((x.is_sync = !1), (x.degradation_priority = 0)),
                  d &&
                    d.entries[E].sample_delta + U == t + 1 &&
                    ((x.subsamples = d.entries[E].subsamples),
                    (U += d.entries[E].sample_delta),
                    E++))
                : (x.is_sync = !0),
              B.process_sdtp(e.mdia.minf.stbl.sdtp, x, x.number),
              (x.degradation_priority = f ? f.priority[t] : 0),
              d &&
                d.entries[E].sample_delta + U == t &&
                ((x.subsamples = d.entries[E].subsamples),
                (U += d.entries[E].sample_delta)),
              (0 < h.length || 0 < u.length) &&
                B.setSampleGroupProperties(e, x, t, e.sample_groups_info);
          }
          0 < t &&
            ((e.samples[t - 1].duration = Math.max(
              e.mdia.mdhd.duration - e.samples[t - 1].dts,
              0
            )),
            (e.samples_duration += e.samples[t - 1].duration));
        }
      }),
      (B.prototype.updateSampleLists = function () {
        var e, t, r, i, s, n, a, o, l, d, h, u;
        if (void 0 !== this.moov)
          for (; this.lastMoofIndex < this.moofs.length; )
            if (
              ((a = this.moofs[this.lastMoofIndex]),
              this.lastMoofIndex++,
              'moof' == a.type)
            )
              for (o = a, e = 0; e < o.trafs.length; e++) {
                for (
                  l = o.trafs[e],
                    d = this.getTrackById(l.tfhd.track_id),
                    h = this.getTrexById(l.tfhd.track_id),
                    t =
                      l.tfhd.flags & b.TFHD_FLAG_SAMPLE_DESC
                        ? l.tfhd.default_sample_description_index
                        : h
                        ? h.default_sample_description_index
                        : 1,
                    r =
                      l.tfhd.flags & b.TFHD_FLAG_SAMPLE_DUR
                        ? l.tfhd.default_sample_duration
                        : h
                        ? h.default_sample_duration
                        : 0,
                    i =
                      l.tfhd.flags & b.TFHD_FLAG_SAMPLE_SIZE
                        ? l.tfhd.default_sample_size
                        : h
                        ? h.default_sample_size
                        : 0,
                    s =
                      l.tfhd.flags & b.TFHD_FLAG_SAMPLE_FLAGS
                        ? l.tfhd.default_sample_flags
                        : h
                        ? h.default_sample_flags
                        : 0,
                    (l.sample_number = 0) < l.sbgps.length &&
                      B.initSampleGroups(
                        d,
                        l,
                        l.sbgps,
                        d.mdia.minf.stbl.sgpds,
                        l.sgpds
                      ),
                    y = 0;
                  y < l.truns.length;
                  y++
                )
                  for (var f = l.truns[y], p = 0; p < f.sample_count; p++) {
                    ((u = {}).moof_number = this.lastMoofIndex),
                      (u.number_in_traf = l.sample_number),
                      l.sample_number++,
                      (u.number = d.samples.length),
                      (l.first_sample_index = d.samples.length),
                      d.samples.push(u),
                      (u.track_id = d.tkhd.track_id),
                      (u.timescale = d.mdia.mdhd.timescale),
                      (u.description_index = t - 1),
                      (u.description =
                        d.mdia.minf.stbl.stsd.entries[u.description_index]),
                      (u.size = i),
                      f.flags & b.TRUN_FLAGS_SIZE &&
                        (u.size = f.sample_size[p]),
                      (d.samples_size += u.size),
                      (u.duration = r),
                      f.flags & b.TRUN_FLAGS_DURATION &&
                        (u.duration = f.sample_duration[p]),
                      (d.samples_duration += u.duration),
                      d.first_traf_merged || 0 < p
                        ? (u.dts =
                            d.samples[d.samples.length - 2].dts +
                            d.samples[d.samples.length - 2].duration)
                        : (l.tfdt
                            ? (u.dts = l.tfdt.baseMediaDecodeTime)
                            : (u.dts = 0),
                          (d.first_traf_merged = !0)),
                      (u.cts = u.dts),
                      f.flags & b.TRUN_FLAGS_CTS_OFFSET &&
                        (u.cts = u.dts + f.sample_composition_time_offset[p]),
                      (c = s),
                      f.flags & b.TRUN_FLAGS_FLAGS
                        ? (c = f.sample_flags[p])
                        : 0 === p &&
                          f.flags & b.TRUN_FLAGS_FIRST_FLAG &&
                          (c = f.first_sample_flags),
                      (u.is_sync = !((c >> 16) & 1)),
                      (u.is_leading = (c >> 26) & 3),
                      (u.depends_on = (c >> 24) & 3),
                      (u.is_depended_on = (c >> 22) & 3),
                      (u.has_redundancy = (c >> 20) & 3),
                      (u.degradation_priority = 65535 & c);
                    var c = !!(l.tfhd.flags & b.TFHD_FLAG_BASE_DATA_OFFSET),
                      m = !!(l.tfhd.flags & b.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                      _ = !!(f.flags & b.TRUN_FLAGS_DATA_OFFSET),
                      c = c
                        ? l.tfhd.base_data_offset
                        : m || 0 === y
                        ? o.start
                        : n;
                    (u.offset =
                      0 === y && 0 === p ? (_ ? c + f.data_offset : c) : n),
                      (n = u.offset + u.size),
                      (0 < l.sbgps.length ||
                        0 < l.sgpds.length ||
                        0 < d.mdia.minf.stbl.sbgps.length ||
                        0 < d.mdia.minf.stbl.sgpds.length) &&
                        B.setSampleGroupProperties(
                          d,
                          u,
                          u.number_in_traf,
                          l.sample_groups_info
                        );
                  }
                if (l.subs) {
                  d.has_fragment_subsamples = !0;
                  for (
                    var g = l.first_sample_index, y = 0;
                    y < l.subs.entries.length;
                    y++
                  )
                    (g += l.subs.entries[y].sample_delta),
                      ((u = d.samples[g - 1]).subsamples =
                        l.subs.entries[y].subsamples);
                }
              }
      }),
      (B.prototype.getSample = function (e, t) {
        var r = e.samples[t];
        if (!this.moov) return null;
        if (r.data) {
          if (r.alreadyRead == r.size) return r;
        } else
          (r.data = new Uint8Array(r.size)),
            (r.alreadyRead = 0),
            (this.samplesDataSize += r.size),
            f.debug(
              'ISOFile',
              'Allocating sample #' +
                t +
                ' on track #' +
                e.tkhd.track_id +
                ' of size ' +
                r.size +
                ' (total: ' +
                this.samplesDataSize +
                ')'
            );
        for (;;) {
          var i = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
          if (!(-1 < i)) return null;
          var s =
            (i = this.stream.buffers[i]).byteLength -
            (r.offset + r.alreadyRead - i.fileStart);
          if (r.size - r.alreadyRead <= s)
            return (
              f.debug(
                'ISOFile',
                'Getting sample #' +
                  t +
                  ' data (alreadyRead: ' +
                  r.alreadyRead +
                  ' offset: ' +
                  (r.offset + r.alreadyRead - i.fileStart) +
                  ' read size: ' +
                  (r.size - r.alreadyRead) +
                  ' full size: ' +
                  r.size +
                  ')'
              ),
              l.memcpy(
                r.data.buffer,
                r.alreadyRead,
                i,
                r.offset + r.alreadyRead - i.fileStart,
                r.size - r.alreadyRead
              ),
              (i.usedBytes += r.size - r.alreadyRead),
              this.stream.logBufferLevel(),
              (r.alreadyRead = r.size),
              r
            );
          if (0 == s) return null;
          f.debug(
            'ISOFile',
            'Getting sample #' +
              t +
              ' partial data (alreadyRead: ' +
              r.alreadyRead +
              ' offset: ' +
              (r.offset + r.alreadyRead - i.fileStart) +
              ' read size: ' +
              s +
              ' full size: ' +
              r.size +
              ')'
          ),
            l.memcpy(
              r.data.buffer,
              r.alreadyRead,
              i,
              r.offset + r.alreadyRead - i.fileStart,
              s
            ),
            (r.alreadyRead += s),
            (i.usedBytes += s),
            this.stream.logBufferLevel();
        }
      }),
      (B.prototype.releaseSample = function (e, t) {
        e = e.samples[t];
        return e.data
          ? ((this.samplesDataSize -= e.size),
            (e.data = null),
            (e.alreadyRead = 0),
            e.size)
          : 0;
      }),
      (B.prototype.getAllocatedSampleDataSize = function () {
        return this.samplesDataSize;
      }),
      (B.prototype.getCodecs = function () {
        for (var e = '', t = 0; t < this.moov.traks.length; t++)
          0 < t && (e += ','),
            (e += this.moov.traks[t].mdia.minf.stbl.stsd.entries[0].getCodec());
        return e;
      }),
      (B.prototype.getTrexById = function (e) {
        var t;
        if (this.moov && this.moov.mvex)
          for (t = 0; t < this.moov.mvex.trexs.length; t++) {
            var r = this.moov.mvex.trexs[t];
            if (r.track_id == e) return r;
          }
        return null;
      }),
      (B.prototype.getTrackById = function (e) {
        if (void 0 !== this.moov)
          for (var t = 0; t < this.moov.traks.length; t++) {
            var r = this.moov.traks[t];
            if (r.tkhd.track_id == e) return r;
          }
        return null;
      }),
      (B.prototype.items = []),
      (B.prototype.itemsDataSize = 0),
      (B.prototype.flattenItemInfo = function () {
        var e = this.items,
          t = this.meta;
        if (null != t && void 0 !== t.hdlr && void 0 !== t.iinf) {
          for (l = 0; l < t.iinf.item_infos.length; l++)
            ((i = {}).id = t.iinf.item_infos[l].item_ID),
              ((e[i.id] = i).ref_to = []),
              (i.name = t.iinf.item_infos[l].item_name),
              0 < t.iinf.item_infos[l].protection_index &&
                (i.protection =
                  t.ipro.protections[
                    t.iinf.item_infos[l].protection_index - 1
                  ]),
              t.iinf.item_infos[l].item_type
                ? (i.type = t.iinf.item_infos[l].item_type)
                : (i.type = 'mime'),
              (i.content_type = t.iinf.item_infos[l].content_type),
              (i.content_encoding = t.iinf.item_infos[l].content_encoding);
          if (t.iloc)
            for (l = 0; l < t.iloc.items.length; l++) {
              var r = t.iloc.items[l],
                i = e[r.item_ID];
              switch (
                (0 !== r.data_reference_index &&
                  (f.warn(
                    'Item storage with reference to other files: not supported'
                  ),
                  (i.source = t.dinf.boxes[r.data_reference_index - 1])),
                r.construction_method)
              ) {
                case 0:
                  break;
                case 1:
                case 2:
                  f.warn(
                    'Item storage with construction_method : not supported'
                  );
              }
              for (i.extents = [], n = i.size = 0; n < r.extents.length; n++)
                (i.extents[n] = {}),
                  (i.extents[n].offset =
                    r.extents[n].extent_offset + r.base_offset),
                  (i.extents[n].length = r.extents[n].extent_length),
                  (i.extents[n].alreadyRead = 0),
                  (i.size += i.extents[n].length);
            }
          if ((t.pitm && (e[t.pitm.item_id].primary = !0), t.iref))
            for (l = 0; l < t.iref.references.length; l++)
              for (
                var s = t.iref.references[l], n = 0;
                n < s.references.length;
                n++
              )
                e[s.from_item_ID].ref_to.push({
                  type: s.type,
                  id: s.references[n],
                });
          if (t.iprp)
            for (var a = 0; a < t.iprp.ipmas.length; a++)
              for (
                var o = t.iprp.ipmas[a], l = 0;
                l < o.associations.length;
                l++
              ) {
                var d = o.associations[l];
                for (
                  void 0 === (i = e[d.id]).properties &&
                    ((i.properties = {}), (i.properties.boxes = [])),
                    n = 0;
                  n < d.props.length;
                  n++
                ) {
                  var h = d.props[n];
                  0 < h.property_index &&
                    h.property_index - 1 < t.iprp.ipco.boxes.length &&
                    ((h = t.iprp.ipco.boxes[h.property_index - 1]),
                    (i.properties[h.type] = h),
                    i.properties.boxes.push(h));
                }
              }
        }
      }),
      (B.prototype.getItem = function (e) {
        var t;
        if (!this.meta) return null;
        if (!(t = this.items[e]).data && t.size)
          (t.data = new Uint8Array(t.size)),
            (t.alreadyRead = 0),
            (this.itemsDataSize += t.size),
            f.debug(
              'ISOFile',
              'Allocating item #' +
                e +
                ' of size ' +
                t.size +
                ' (total: ' +
                this.itemsDataSize +
                ')'
            );
        else if (t.alreadyRead === t.size) return t;
        for (var r = 0; r < t.extents.length; r++) {
          var i = t.extents[r];
          if (i.alreadyRead !== i.length) {
            var s = this.stream.findPosition(!0, i.offset + i.alreadyRead, !1);
            if (!(-1 < s)) return null;
            var n =
              (s = this.stream.buffers[s]).byteLength -
              (i.offset + i.alreadyRead - s.fileStart);
            if (!(i.length - i.alreadyRead <= n))
              return (
                f.debug(
                  'ISOFile',
                  'Getting item #' +
                    e +
                    ' extent #' +
                    r +
                    ' partial data (alreadyRead: ' +
                    i.alreadyRead +
                    ' offset: ' +
                    (i.offset + i.alreadyRead - s.fileStart) +
                    ' read size: ' +
                    n +
                    ' full extent size: ' +
                    i.length +
                    ' full item size: ' +
                    t.size +
                    ')'
                ),
                l.memcpy(
                  t.data.buffer,
                  t.alreadyRead,
                  s,
                  i.offset + i.alreadyRead - s.fileStart,
                  n
                ),
                (i.alreadyRead += n),
                (t.alreadyRead += n),
                (s.usedBytes += n),
                this.stream.logBufferLevel(),
                null
              );
            f.debug(
              'ISOFile',
              'Getting item #' +
                e +
                ' extent #' +
                r +
                ' data (alreadyRead: ' +
                i.alreadyRead +
                ' offset: ' +
                (i.offset + i.alreadyRead - s.fileStart) +
                ' read size: ' +
                (i.length - i.alreadyRead) +
                ' full extent size: ' +
                i.length +
                ' full item size: ' +
                t.size +
                ')'
            ),
              l.memcpy(
                t.data.buffer,
                t.alreadyRead,
                s,
                i.offset + i.alreadyRead - s.fileStart,
                i.length - i.alreadyRead
              ),
              (s.usedBytes += i.length - i.alreadyRead),
              this.stream.logBufferLevel(),
              (t.alreadyRead += i.length - i.alreadyRead),
              (i.alreadyRead = i.length);
          }
        }
        return t.alreadyRead === t.size ? t : null;
      }),
      (B.prototype.releaseItem = function (e) {
        var t = this.items[e];
        if (t.data) {
          (this.itemsDataSize -= t.size), (t.data = null);
          for (var r = (t.alreadyRead = 0); r < t.extents.length; r++)
            t.extents[r].alreadyRead = 0;
          return t.size;
        }
        return 0;
      }),
      (B.prototype.processItems = function (e) {
        for (var t in this.items) {
          t = this.items[t];
          this.getItem(t.id),
            e && !t.sent && (e(t), (t.sent = !0), (t.data = null));
        }
      }),
      (B.prototype.hasItem = function (e) {
        for (var t in this.items) {
          t = this.items[t];
          if (t.name === e) return t.id;
        }
        return -1;
      }),
      (B.prototype.getMetaHandler = function () {
        return this.meta ? this.meta.hdlr.handler : null;
      }),
      (B.prototype.getPrimaryItem = function () {
        return this.meta && this.meta.pitm
          ? this.getItem(this.meta.pitm.item_id)
          : null;
      }),
      (B.prototype.itemToFragmentedTrackFile = function (e) {
        var t,
          r,
          e = e || {};
        return null !=
          (e = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem()) &&
          (((t = new B()).discardMdatData = !1),
          (r = { type: e.type, description_boxes: e.properties.boxes }),
          e.properties.ispe &&
            ((r.width = e.properties.ispe.image_width),
            (r.height = e.properties.ispe.image_height)),
          (r = t.addTrack(r)))
          ? (t.addSample(r, e.data), t)
          : null;
      }),
      (B.prototype.write = function (e) {
        for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e);
      }),
      (B.prototype.createFragment = function (e, t, r) {
        var e = this.getTrackById(e),
          i = this.getSample(e, t);
        return null == i
          ? ((i = e.samples[t]),
            this.nextSeekPosition
              ? (this.nextSeekPosition = Math.min(
                  i.offset + i.alreadyRead,
                  this.nextSeekPosition
                ))
              : (this.nextSeekPosition = e.samples[t].offset + i.alreadyRead),
            null)
          : (((e = r || new l()).endianness = l.BIG_ENDIAN),
            (t = this.createSingleSampleMoof(i)).write(e),
            (t.trafs[0].truns[0].data_offset = t.size + 8),
            f.debug(
              'MP4Box',
              'Adjusting data_offset with new value ' +
                t.trafs[0].truns[0].data_offset
            ),
            e.adjustUint32(
              t.trafs[0].truns[0].data_offset_position,
              t.trafs[0].truns[0].data_offset
            ),
            ((r = new b.mdatBox()).data = i.data),
            r.write(e),
            e);
      }),
      (B.writeInitializationSegment = function (e, t, r, i) {
        f.debug('ISOFile', 'Generating initialization segment');
        var s,
          n = new l(),
          a = ((n.endianness = l.BIG_ENDIAN), e.write(n), t.add('mvex'));
        for (
          r && a.add('mehd').set('fragment_duration', r), s = 0;
          s < t.traks.length;
          s++
        )
          a.add('trex')
            .set('track_id', t.traks[s].tkhd.track_id)
            .set('default_sample_description_index', 1)
            .set('default_sample_duration', i)
            .set('default_sample_size', 0)
            .set('default_sample_flags', 65536);
        return t.write(n), n.buffer;
      }),
      (B.prototype.save = function (e) {
        var t = new l();
        (t.endianness = l.BIG_ENDIAN), this.write(t), t.save(e);
      }),
      (B.prototype.getBuffer = function () {
        var e = new l();
        return (e.endianness = l.BIG_ENDIAN), this.write(e), e.buffer;
      }),
      (B.prototype.initializeSegmentation = function () {
        var e, t, r, i;
        for (
          null === this.onSegment &&
            f.warn('MP4Box', 'No segmentation callback set!'),
            this.isFragmentationInitialized ||
              ((this.isFragmentationInitialized = !0),
              (this.nextMoofNumber = 0),
              this.resetTables()),
            t = [],
            e = 0;
          e < this.fragmentedTracks.length;
          e++
        ) {
          var s = new b.moovBox();
          (s.mvhd = this.moov.mvhd),
            s.boxes.push(s.mvhd),
            (r = this.getTrackById(this.fragmentedTracks[e].id)),
            s.boxes.push(r),
            s.traks.push(r),
            ((i = {}).id = r.tkhd.track_id),
            (i.user = this.fragmentedTracks[e].user),
            (i.buffer = B.writeInitializationSegment(
              this.ftyp,
              s,
              this.moov.mvex && this.moov.mvex.mehd
                ? this.moov.mvex.mehd.fragment_duration
                : void 0,
              0 < this.moov.traks[e].samples.length
                ? this.moov.traks[e].samples[0].duration
                : 0
            )),
            t.push(i);
        }
        return t;
      }),
      (b.Box.prototype.printHeader = function (e) {
        (this.size += 8),
          this.size > d && (this.size += 8),
          'uuid' === this.type && (this.size += 16),
          e.log(e.indent + 'size:' + this.size),
          e.log(e.indent + 'type:' + this.type);
      }),
      (b.FullBox.prototype.printHeader = function (e) {
        (this.size += 4),
          b.Box.prototype.printHeader.call(this, e),
          e.log(e.indent + 'version:' + this.version),
          e.log(e.indent + 'flags:' + this.flags);
      }),
      (b.Box.prototype.print = function (e) {
        this.printHeader(e);
      }),
      (b.ContainerBox.prototype.print = function (e) {
        this.printHeader(e);
        for (var t, r = 0; r < this.boxes.length; r++)
          this.boxes[r] &&
            ((t = e.indent),
            (e.indent += ' '),
            this.boxes[r].print(e),
            (e.indent = t));
      }),
      (B.prototype.print = function (e) {
        e.indent = '';
        for (var t = 0; t < this.boxes.length; t++)
          this.boxes[t] && this.boxes[t].print(e);
      }),
      (b.mvhdBox.prototype.print = function (e) {
        b.FullBox.prototype.printHeader.call(this, e),
          e.log(e.indent + 'creation_time: ' + this.creation_time),
          e.log(e.indent + 'modification_time: ' + this.modification_time),
          e.log(e.indent + 'timescale: ' + this.timescale),
          e.log(e.indent + 'duration: ' + this.duration),
          e.log(e.indent + 'rate: ' + this.rate),
          e.log(e.indent + 'volume: ' + (this.volume >> 8)),
          e.log(e.indent + 'matrix: ' + this.matrix.join(', ')),
          e.log(e.indent + 'next_track_id: ' + this.next_track_id);
      }),
      (b.tkhdBox.prototype.print = function (e) {
        b.FullBox.prototype.printHeader.call(this, e),
          e.log(e.indent + 'creation_time: ' + this.creation_time),
          e.log(e.indent + 'modification_time: ' + this.modification_time),
          e.log(e.indent + 'track_id: ' + this.track_id),
          e.log(e.indent + 'duration: ' + this.duration),
          e.log(e.indent + 'volume: ' + (this.volume >> 8)),
          e.log(e.indent + 'matrix: ' + this.matrix.join(', ')),
          e.log(e.indent + 'layer: ' + this.layer),
          e.log(e.indent + 'alternate_group: ' + this.alternate_group),
          e.log(e.indent + 'width: ' + this.width),
          e.log(e.indent + 'height: ' + this.height);
      });
    var h = function (e, t) {
      (e = void 0 === e || e), (t = new B(t));
      return (t.discardMdatData = !e), t;
    };
    t.createFile = h;
  });
  function nt(e) {
    return e.reduce((e, t) => 256 * e + t);
  }
  function at(e) {
    const t = [101, 103, 119, 99],
      r = e.length - 28,
      i = e.slice(r, r + t.length);
    return t.every((e, t) => e === i[t]);
  }
  oe.Log,
    oe.MP4BoxStream,
    oe.DataStream,
    oe.MultiBufferStream,
    oe.MPEG4DescriptorParser,
    oe.BoxParser,
    oe.XMLSubtitlein4Parser,
    oe.Textin4Parser,
    oe.ISOFile,
    oe.createFile;
  class ot {
    constructor() {
      (this.s = null),
        (this.a = null),
        (this.l = 0),
        (this.c = 0),
        (this.u = 1 / 0),
        (this.A = !1),
        (this.d = !1),
        (this.r = 4194304),
        (this.n = new Uint8Array([
          30, 158, 90, 33, 244, 57, 83, 165, 2, 70, 35, 87, 215, 231, 226, 108,
        ])),
        (this.t = this.n.slice().reverse());
    }
    destroy() {
      (this.s = null),
        (this.a = null),
        (this.l = 0),
        (this.c = 0),
        (this.u = 1 / 0),
        (this.A = !1),
        (this.d = !1),
        (this.r = 4194304),
        (this.n = null),
        (this.t = null);
    }
    transport(e) {
      if ((this.s || !(50 < this.l)) && (this.l++, !this.d)) {
        var t = new Uint8Array(e);
        if (this.A) {
          if (!(this.c < this.u))
            return this.a && this.s
              ? (this.a.set(t, this.r),
                this.s.parse(null, this.r, t.byteLength),
                this.a.slice(this.r, this.r + t.byteLength))
              : (console.error('video_error_2'), (this.d = !0), e);
          at(t) && this.c++;
        } else {
          var r = (function (e, t) {
            var r = (function (r, i) {
              for (let t = 0; t < r.byteLength - i.length; t++)
                for (let e = 0; e < i.length && r[t + e] === i[e]; e++)
                  if (e === i.length - 1) return t;
              return null;
            })(e, t);
            if (r) {
              const t = nt(e.slice(r + 16, r + 16 + 8));
              return [
                t,
                nt(e.slice(r + 24, r + 24 + 8)),
                e.slice(r + 32, r + 32 + t).map((e) => ~e),
              ];
            }
            return null;
          })(t, this.t);
          if (!r) return e;
          var i = (function (e) {
            try {
              if (
                'object' != typeof WebAssembly ||
                'function' != typeof WebAssembly.instantiate
              )
                throw null;
              {
                const e = new WebAssembly.Module(
                  Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
                );
                if (
                  !(
                    e instanceof WebAssembly.Module &&
                    new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                  )
                )
                  throw null;
              }
            } catch (e) {
              return new Error('video_error_4');
            }
            let t;
            try {
              t = {
                env: {
                  __handle_stack_overflow: () => e(new Error('video_error_1')),
                  memory: new WebAssembly.Memory({
                    initial: 256,
                    maximum: 256,
                  }),
                },
              };
            } catch (e) {
              return new Error('video_error_5');
            }
            return t;
          })(e);
          if (i instanceof Error)
            return console.error(i.message), (this.d = !0), e;
          (this.A = !0),
            (this.u = r[1]),
            at(t) && this.c++,
            WebAssembly.instantiate(r[2], i)
              .then((e) => {
                var t;
                'function' != typeof (t = e.instance.exports).parse ||
                'object' != typeof t.memory
                  ? ((this.d = !0), console.error('video_error_3'))
                  : ((this.s = e.instance.exports),
                    (this.a = new Uint8Array(this.s.memory.buffer)));
              })
              .catch((e) => {
                (this.d = !0), console.error('video_error_6');
              });
        }
      }
      return e;
    }
  }
  const U = 0,
    lt = 32,
    x = 16,
    dt = [
      214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5,
      43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156,
      66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228,
      179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71,
      7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104,
      107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30,
      36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0,
      70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191,
      138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224,
      174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29,
      246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213,
      219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141,
      27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10,
      193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176,
      137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198,
      132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57,
      72,
    ],
    ht = [
      462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617,
      2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825,
      1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337,
      4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545,
      2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753,
      1213159005, 1684763257,
    ];
  function ut(r) {
    var i = [];
    for (let e = 0, t = r.length; e < t; e += 2)
      i.push(parseInt(r.substr(e, 2), 16));
    return i;
  }
  function o(e, t) {
    t &= 31;
    return (e << t) | (e >>> (32 - t));
  }
  function B(e) {
    return (
      ((255 & dt[(e >>> 24) & 255]) << 24) |
      ((255 & dt[(e >>> 16) & 255]) << 16) |
      ((255 & dt[(e >>> 8) & 255]) << 8) |
      (255 & dt[255 & e])
    );
  }
  function ft(e) {
    return e ^ o(e, 2) ^ o(e, 10) ^ o(e, 18) ^ o(e, 24);
  }
  function pt(e) {
    return e ^ o(e, 13) ^ o(e, 23);
  }
  function ct(t, r, i, e) {
    let {
      padding: s = 'pkcs#7',
      mode: n,
      iv: a = [],
      output: o = 'string',
    } = 3 < arguments.length && void 0 !== e ? e : {};
    if ('cbc' === n && 16 !== (a = 'string' == typeof a ? ut(a) : a).length)
      throw new Error('iv is invalid');
    if (16 !== (r = 'string' == typeof r ? ut(r) : r).length)
      throw new Error('key is invalid');
    if (
      ((t =
        'string' == typeof t
          ? (i !== U
              ? function (r) {
                  var i = [];
                  for (let e = 0, t = r.length; e < t; e++) {
                    var s = r.codePointAt(e);
                    if (s <= 127) i.push(s);
                    else {
                      if (s <= 2047) i.push(192 | (s >>> 6));
                      else {
                        if (s <= 55295 || (57344 <= s && s <= 65535))
                          i.push(224 | (s >>> 12));
                        else {
                          if (!(65536 <= s && s <= 1114111))
                            throw (
                              (i.push(s), new Error('input is not supported'))
                            );
                          e++,
                            i.push(240 | ((s >>> 18) & 28)),
                            i.push(128 | ((s >>> 12) & 63));
                        }
                        i.push(128 | ((s >>> 6) & 63));
                      }
                      i.push(128 | (63 & s));
                    }
                  }
                  return i;
                }
              : ut)(t)
          : [...t]),
      ('pkcs#5' === s || 'pkcs#7' === s) && i !== U)
    ) {
      const r = x - (t.length % x);
      for (let e = 0; e < r; e++) t.push(r);
    }
    var l = new Array(lt),
      d = r,
      h = l,
      e = i,
      u = new Array(4),
      f = new Array(4);
    for (let e = 0; e < 4; e++)
      (f[0] = 255 & d[0 + 4 * e]),
        (f[1] = 255 & d[1 + 4 * e]),
        (f[2] = 255 & d[2 + 4 * e]),
        (f[3] = 255 & d[3 + 4 * e]),
        (u[e] = (f[0] << 24) | (f[1] << 16) | (f[2] << 8) | f[3]);
    (u[0] ^= 2746333894),
      (u[1] ^= 1453994832),
      (u[2] ^= 1736282519),
      (u[3] ^= 2993693404);
    for (let e, t = 0; t < 32; t += 4)
      (e = u[1] ^ u[2] ^ u[3] ^ ht[t + 0]),
        (h[t + 0] = u[0] ^= pt(B(e))),
        (e = u[2] ^ u[3] ^ u[0] ^ ht[t + 1]),
        (h[t + 1] = u[1] ^= pt(B(e))),
        (e = u[3] ^ u[0] ^ u[1] ^ ht[t + 2]),
        (h[t + 2] = u[2] ^= pt(B(e))),
        (e = u[0] ^ u[1] ^ u[2] ^ ht[t + 3]),
        (h[t + 3] = u[3] ^= pt(B(e)));
    if (e === U)
      for (let e, t = 0; t < 16; t++)
        (e = h[t]), (h[t] = h[31 - t]), (h[31 - t] = e);
    var p = [];
    let c = a,
      m = t.length,
      _ = 0;
    for (; m >= x; ) {
      const r = t.slice(_, _ + 16),
        s = new Array(16);
      if ('cbc' === n) for (let e = 0; e < x; e++) i !== U && (r[e] ^= c[e]);
      w = v = b = y = g = void 0;
      var g = r,
        y = s,
        b = l,
        v = new Array(4),
        w = new Array(4);
      for (let e = 0; e < 4; e++)
        (w[0] = 255 & g[4 * e]),
          (w[1] = 255 & g[4 * e + 1]),
          (w[2] = 255 & g[4 * e + 2]),
          (w[3] = 255 & g[4 * e + 3]),
          (v[e] = (w[0] << 24) | (w[1] << 16) | (w[2] << 8) | w[3]);
      for (let e, t = 0; t < 32; t += 4)
        (e = v[1] ^ v[2] ^ v[3] ^ b[t + 0]),
          (v[0] ^= ft(B(e))),
          (e = v[2] ^ v[3] ^ v[0] ^ b[t + 1]),
          (v[1] ^= ft(B(e))),
          (e = v[3] ^ v[0] ^ v[1] ^ b[t + 2]),
          (v[2] ^= ft(B(e))),
          (e = v[0] ^ v[1] ^ v[2] ^ b[t + 3]),
          (v[3] ^= ft(B(e)));
      for (let e = 0; e < 16; e += 4)
        (y[e] = (v[3 - e / 4] >>> 24) & 255),
          (y[e + 1] = (v[3 - e / 4] >>> 16) & 255),
          (y[e + 2] = (v[3 - e / 4] >>> 8) & 255),
          (y[e + 3] = 255 & v[3 - e / 4]);
      for (let e = 0; e < x; e++)
        'cbc' === n && i === U && (s[e] ^= c[e]), (p[_ + e] = s[e]);
      'cbc' === n && (c = i !== U ? s : r), (m -= x), (_ += x);
    }
    if (('pkcs#5' === s || 'pkcs#7' === s) && i === U) {
      const t = p.length,
        r = p[t - 1];
      for (let e = 1; e <= r; e++)
        if (p[t - e] !== r) throw new Error('padding is invalid');
      p.splice(t - r, r);
    }
    {
      if ('array' === o) return p;
      if (i !== U)
        return p
          .map((e) => (1 === (e = e.toString(16)).length ? '0' + e : e))
          .join('');
      var S = p,
        E = [];
      for (let e = 0, t = S.length; e < t; e++)
        240 <= S[e] && S[e] <= 247
          ? (E.push(
              String.fromCodePoint(
                ((7 & S[e]) << 18) +
                  ((63 & S[e + 1]) << 12) +
                  ((63 & S[e + 2]) << 6) +
                  (63 & S[e + 3])
              )
            ),
            (e += 3))
          : 224 <= S[e] && S[e] <= 239
          ? (E.push(
              String.fromCodePoint(
                ((15 & S[e]) << 12) + ((63 & S[e + 1]) << 6) + (63 & S[e + 2])
              )
            ),
            (e += 2))
          : 192 <= S[e] && S[e] <= 223
          ? (E.push(String.fromCodePoint(((31 & S[e]) << 6) + (63 & S[e + 1]))),
            e++)
          : E.push(String.fromCodePoint(S[e]));
      return E.join('');
    }
  }
  const h = { init: 0, findFirstStartCode: 1, findSecondStartCode: 2 };
  class mt extends class {
    on(e, t, r) {
      var i = this.e || (this.e = {});
      return (i[e] || (i[e] = [])).push({ fn: t, ctx: r }), this;
    }
    once(i, s, n) {
      const a = this;
      function o() {
        a.off(i, o);
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        s.apply(n, t);
      }
      return (o._ = s), this.on(i, o, n);
    }
    emit(e) {
      for (
        var t = ((this.e || (this.e = {}))[e] || []).slice(),
          r = arguments.length,
          i = new Array(1 < r ? r - 1 : 0),
          s = 1;
        s < r;
        s++
      )
        i[s - 1] = arguments[s];
      for (let e = 0; e < t.length; e += 1) t[e].fn.apply(t[e].ctx, i);
      return this;
    }
    off(e, r) {
      const t = this.e || (this.e = {});
      if (e) {
        var i = t[e],
          s = [];
        if (i && r)
          for (let e = 0, t = i.length; e < t; e += 1)
            i[e].fn !== r && i[e].fn._ !== r && s.push(i[e]);
        return s.length ? (t[e] = s) : delete t[e], this;
      }
      Object.keys(t).forEach((e) => {
        delete t[e];
      }),
        delete this.e;
    }
  } {
    constructor(e) {
      super(), (this.player = e), (this.isDestroyed = !1), this.reset();
    }
    destroy() {
      (this.isDestroyed = !1), this.off(), this.reset();
    }
    reset() {
      (this.stats = h.init),
        (this.tempBuffer = new Uint8Array(0)),
        (this.parsedOffset = 0),
        (this.versionLayer = 0);
    }
    dispatch(e, t) {
      var r,
        i = new Uint8Array(this.tempBuffer.length + e.length);
      for (
        i.set(this.tempBuffer, 0),
          i.set(e, this.tempBuffer.length),
          this.tempBuffer = i;
        !this.isDestroyed;

      ) {
        if (this.state == h.Init) {
          let e = !1;
          for (
            ;
            2 <= this.tempBuffer.length - this.parsedOffset &&
            !this.isDestroyed;

          ) {
            if (
              255 == this.tempBuffer[this.parsedOffset] &&
              !(!1 & this.tempBuffer[this.parsedOffset + 1])
            ) {
              (this.versionLayer = this.tempBuffer[this.parsedOffset + 1]),
                (this.state = h.findFirstStartCode),
                (this.fisrtStartCodeOffset = this.parsedOffset),
                (this.parsedOffset += 2),
                (e = !0);
              break;
            }
            this.parsedOffset++;
          }
          if (e) continue;
          break;
        }
        if (this.state == h.findFirstStartCode) {
          let e = !1;
          for (
            ;
            2 <= this.tempBuffer.length - this.parsedOffset &&
            !this.isDestroyed;

          ) {
            if (
              255 == this.tempBuffer[this.parsedOffset] &&
              this.tempBuffer[this.parsedOffset + 1] == this.versionLayer
            ) {
              (this.state = h.findSecondStartCode),
                (this.secondStartCodeOffset = this.parsedOffset),
                (this.parsedOffset += 2),
                (e = !0);
              break;
            }
            this.parsedOffset++;
          }
          if (e) continue;
          break;
        }
        this.state == h.findSecondStartCode &&
          ((r = this.tempBuffer.slice(
            this.fisrtStartCodeOffset,
            this.secondStartCodeOffset
          )),
          this.emit('data', r, t),
          (this.tempBuffer = this.tempBuffer.slice(this.secondStartCodeOffset)),
          (this.fisrtStartCodeOffset = 0),
          (this.parsedOffset = 2),
          (this.state = h.findFirstStartCode));
      }
    }
  }
  function _t(l, z) {
    function s() {
      if (t)
        try {
          t.abort(), (t = null);
        } catch (e) {
          I.debug.log('worker', 'abort catch', e);
        }
    }
    let n = 1 < arguments.length && void 0 !== z && z,
      a = [],
      d = [],
      o = {},
      t = new AbortController(),
      r = null,
      h = null,
      e = null,
      u = null,
      f = null,
      p = null,
      c = !1,
      m = !1,
      _ = !!te(n),
      i = !1,
      g = null,
      y = null,
      b = null,
      v = [],
      w = null,
      S = null,
      E = 0,
      U = 0,
      x = null,
      B = null,
      A = 0,
      R = 0,
      k = !1,
      M = !1,
      N = !1,
      T = !1,
      O = null,
      G = () => {
        var e = (function () {
          {
            var r = ue;
            let t = '';
            if ('object' == typeof r)
              try {
                (t = JSON.stringify(r)), (t = JSON.parse(t));
              } catch (e) {
                t = r;
              }
            else t = r;
            return t;
          }
        })();
        return {
          debug: e.debug,
          debugLevel: e.debugLevel,
          debugUuid: e.debugUuid,
          useOffscreen: e.useOffscreen,
          useWCS: e.useWCS,
          videoBuffer: e.videoBuffer,
          videoBufferDelay: e.videoBufferDelay,
          openWebglAlignment: e.openWebglAlignment,
          playType: e.playType,
          hasAudio: e.hasAudio,
          hasVideo: e.hasVideo,
          playbackRate: 1,
          playbackForwardMaxRateDecodeIFrame:
            e.playbackForwardMaxRateDecodeIFrame,
          playbackIsCacheBeforeDecodeForFpsRender:
            e.playbackConfig.isCacheBeforeDecodeForFpsRender,
          sampleRate: 0,
          networkDelay: e.networkDelay,
          visibility: !0,
          useSIMD: e.useSIMD,
          isRecording: !1,
          recordType: e.recordType,
          isNakedFlow: e.isNakedFlow,
          checkFirstIFrame: e.checkFirstIFrame,
          audioBufferSize: 1024,
          isCrypto: e.isCrypto,
          cryptoKey: e.cryptoKey,
          cryptoIV: e.cryptoIV,
          isSm4Crypto: e.isSm4Crypto,
          sm4CryptoKey: e.sm4CryptoKey,
          isHls265: !1,
          isFlv: e.isFlv,
          isFmp4: e.isFmp4,
          isMpeg4: e.isMpeg4,
          isFmp4Private: e.isFmp4Private,
          isEmitSEI: e.isEmitSEI,
          isRecordTypeFlv: !1,
          isWasmMp4: !1,
        };
      },
      C =
        ('VideoEncoder' in self &&
          (o = {
            hasInit: !1,
            isEmitInfo: !1,
            offscreenCanvas: null,
            offscreenCanvasCtx: null,
            decoder: new VideoDecoder({
              output: function (t) {
                var e;
                o.isEmitInfo ||
                  (I.debug.log('worker', 'Webcodecs Video Decoder initSize'),
                  postMessage({ cmd: fe, w: t.codedWidth, h: t.codedHeight }),
                  (o.isEmitInfo = !0),
                  (o.offscreenCanvas = new OffscreenCanvas(
                    t.codedWidth,
                    t.codedHeight
                  )),
                  (o.offscreenCanvasCtx = o.offscreenCanvas.getContext('2d'))),
                  'function' == typeof t.createImageBitmap
                    ? t.createImageBitmap().then((e) => {
                        o.offscreenCanvasCtx.drawImage(
                          e,
                          0,
                          0,
                          t.codedWidth,
                          t.codedHeight
                        );
                        e = o.offscreenCanvas.transferToImageBitmap();
                        postMessage(
                          { cmd: V, buffer: e, delay: I.delay, ts: 0 },
                          [e]
                        ),
                          xe(t);
                      })
                    : (o.offscreenCanvasCtx.drawImage(
                        t,
                        0,
                        0,
                        t.codedWidth,
                        t.codedHeight
                      ),
                      (e = o.offscreenCanvas.transferToImageBitmap()),
                      postMessage(
                        { cmd: V, buffer: e, delay: I.delay, ts: 0 },
                        [e]
                      ),
                      xe(t));
              },
              error: function (e) {
                I.debug.error('worker', 'VideoDecoder error', e);
              },
            }),
            decode: function (e, t, r) {
              var i = e[0] >> 4 == 1;
              if (o.hasInit) {
                const r = new EncodedVideoChunk({
                  data: e.slice(5),
                  timestamp: t,
                  type: i ? 'key' : 'delta',
                });
                o.decoder.decode(r);
              } else if (i && 0 === e[1]) {
                const t = 15 & e[0],
                  r =
                    (postMessage({ cmd: ce, code: t }),
                    (function (e) {
                      let r = e.subarray(1, 4),
                        i = 'avc1.';
                      for (let t = 0; t < 3; t++) {
                        let e = r[t].toString(16);
                        e.length < 2 && (e = '0' + e), (i += e);
                      }
                      return { codec: i, description: e };
                    })(e.slice(5)));
                I._opt.recordType === H &&
                  postMessage({ cmd: me, buffer: e, codecId: t }, [e.buffer]),
                  o.decoder.configure(r),
                  (o.hasInit = !0);
              }
            },
            reset() {
              (o.hasInit = !1),
                (o.isEmitInfo = !1),
                (o.offscreenCanvas = null),
                (o.offscreenCanvasCtx = null);
            },
          }),
        {
          init() {
            (C.lastBuf = null),
              (C.vps = null),
              (C.sps = null),
              (C.pps = null),
              (C.streamType = null),
              (C.localDts = 0),
              (C.isSendSeqHeader = !1);
          },
          destroy() {
            (C.lastBuf = null),
              (C.vps = null),
              (C.sps = null),
              (C.pps = null),
              (C.streamType = null),
              (C.localDts = 0),
              (C.isSendSeqHeader = !1);
          },
          dispatch(e) {
            e = new Uint8Array(e);
            C.extractNALu$2(e);
          },
          getNaluDts() {
            var e = C.localDts;
            return (C.localDts = C.localDts + 40), e;
          },
          getNaluAudioDts() {
            var e = I._opt.sampleRate,
              t = I._opt.audioBufferSize;
            return C.localDts + parseInt((t / e) * 1e3);
          },
          extractNALu(e) {
            let t,
              r,
              i = 0,
              s = e.byteLength,
              n = 0,
              a = [];
            for (; i < s; )
              switch (((t = e[i++]), n)) {
                case 0:
                  0 === t && (n = 1);
                  break;
                case 1:
                  n = 0 === t ? 2 : 0;
                  break;
                case 2:
                case 3:
                  n =
                    0 === t
                      ? 3
                      : (1 === t &&
                          i < s &&
                          (r && a.push(e.subarray(r, i - n - 1)), (r = i)),
                        0);
              }
            return r && a.push(e.subarray(r, s)), a;
          },
          extractNALu$2(t) {
            let n = null;
            if (t && !(t.byteLength < 1)) {
              C.lastBuf
                ? ((n = new Uint8Array(t.byteLength + C.lastBuf.length)).set(
                    C.lastBuf
                  ),
                  n.set(new Uint8Array(t), C.lastBuf.length))
                : (n = new Uint8Array(t));
              let r = 0,
                i = -1,
                s = -2;
              var a = new Array();
              for (let t = 0; t < n.length; t += 2) {
                const e = n[t],
                  o = n[t + 1];
                0 == i && 0 == e && 0 == o
                  ? a.push(t - 1)
                  : 1 == o && 0 == e && 0 == i && 0 == s && a.push(t - 2),
                  (s = e),
                  (i = o);
              }
              if (1 < a.length)
                for (let t = 0; t < a.length - 1; ++t) {
                  const e = n.subarray(a[t], a[t + 1] + 1);
                  C.handleNALu(e), (r = a[t + 1]);
                }
              else r = a[0];
              if (0 != r && r < n.length) C.lastBuf = n.subarray(r);
              else {
                C.lastBuf || (C.lastBuf = n);
                const e = new Uint8Array(C.lastBuf.length + t.byteLength);
                e.set(C.lastBuf),
                  e.set(new Uint8Array(t), C.lastBuf.length),
                  (C.lastBuf = e);
              }
            }
          },
          handleNALu(e) {
            e.byteLength <= 4
              ? I.debug.warn(
                  'worker',
                  `handleNALu nalu byteLength is ${e.byteLength} <= 4`
                )
              : ((e = e.slice(4)), C.handleVideoNalu(e));
          },
          handleVideoNalu(e) {
            if (
              (C.streamType ||
                (C.streamType = (function (e) {
                  let t = null,
                    r = 31 & e[0];
                  return (t =
                    (t = r !== X.sps && r !== X.pps ? t : q.h264) ||
                    ((r = (126 & e[0]) >> 1) !== Z.vps &&
                      r !== Z.sps &&
                      r !== Z.pps)
                      ? t
                      : q.h265);
                })(e)),
              C.streamType === q.h264)
            ) {
              var t = C.handleAddNaluStartCode(e),
                t = C.extractNALu(t);
              if (0 === t.length)
                I.debug.warn(
                  'worker',
                  'handleVideoNalu',
                  'h264 naluList.length === 0'
                );
              else {
                const r = [];
                if (
                  (t.forEach((e) => {
                    var t = se(e);
                    t === X.pps || t === X.sps
                      ? C.handleVideoH264Nalu(e)
                      : Pe(t) && r.push(e);
                  }),
                  1 === r.length)
                )
                  C.handleVideoH264Nalu(r[0]);
                else {
                  const e = (function (t) {
                    if (0 === t.length) return !1;
                    var r = se(t[0]);
                    for (let e = 1; e < t.length; e++)
                      if (r !== se(t[e])) return !1;
                    return !0;
                  })(r);
                  if (e) {
                    const e = se(r[0]),
                      i = Le(e);
                    C.handleVideoH264NaluList(r, i, e);
                  } else
                    r.forEach((e) => {
                      C.handleVideoH264Nalu(e);
                    });
                }
              }
            } else if (C.streamType === q.h265) {
              (t = C.handleAddNaluStartCode(e)), (e = C.extractNALu(t));
              if (0 === e.length)
                I.debug.warn(
                  'worker',
                  'handleVideoNalu',
                  'h265 naluList.length === 0'
                );
              else {
                const s = [];
                if (
                  (e.forEach((e) => {
                    var t = ae(e);
                    t === Z.pps || t === Z.sps || t === Z.vps
                      ? C.handleVideoH265Nalu(e)
                      : Ne(t) && s.push(e);
                  }),
                  1 === s.length)
                )
                  C.handleVideoH265Nalu(s[0]);
                else {
                  const e = (function (t) {
                    if (0 === t.length) return !1;
                    var r = ae(t[0]);
                    for (let e = 1; e < t.length; e++)
                      if (r !== ae(t[e])) return !1;
                    return !0;
                  })(s);
                  if (e) {
                    const e = ae(s[0]),
                      n = Oe(e);
                    C.handleVideoH265NaluList(s, n, e);
                  } else
                    s.forEach((e) => {
                      this.handleVideoH265Nalu(e);
                    });
                }
              }
            }
          },
          extractH264PPS(e) {
            e = C.handleAddNaluStartCode(e);
            C.extractNALu(e).forEach((e) => {
              Ie(se(e)) ? C.extractH264SEI(e) : C.handleVideoH264Nalu(e);
            });
          },
          extractH265PPS(e) {
            e = C.handleAddNaluStartCode(e);
            C.extractNALu(e).forEach((e) => {
              ae(e) === Z.sei ? C.extractH265SEI(e) : C.handleVideoH265Nalu(e);
            });
          },
          extractH264SEI(e) {
            e = C.handleAddNaluStartCode(e);
            C.extractNALu(e).forEach((e) => {
              C.handleVideoH264Nalu(e);
            });
          },
          extractH265SEI(e) {
            e = C.handleAddNaluStartCode(e);
            C.extractNALu(e).forEach((e) => {
              C.handleVideoH265Nalu(e);
            });
          },
          handleAddNaluStartCode(e) {
            var t = [0, 0, 0, 1],
              r = new Uint8Array(e.length + t.length);
            return r.set(t), r.set(e, t.length), r;
          },
          handleVideoH264Nalu(e) {
            const t = se(e);
            switch (t) {
              case X.sps:
                C.sps = e;
                break;
              case X.pps:
                C.pps = e;
            }
            if (C.isSendSeqHeader) {
              if (C.sps && C.pps) {
                const e = Fe({ sps: C.sps, pps: C.pps }),
                  t = C.getNaluDts();
                I.decode(e, { type: 2, ts: t, isIFrame: !0, cts: 0 }),
                  (C.sps = null),
                  (C.pps = null);
              }
              if (Pe(t)) {
                const n = Le(t),
                  a = C.getNaluDts(),
                  o =
                    ((r = e),
                    ((i = [])[0] = n ? 23 : 39),
                    (i[1] = 1),
                    (i[2] = 0),
                    (i[3] = 0),
                    (i[4] = 0),
                    (i[5] = (r.byteLength >> 24) & 255),
                    (i[6] = (r.byteLength >> 16) & 255),
                    (i[7] = (r.byteLength >> 8) & 255),
                    (i[8] = 255 & r.byteLength),
                    (s = new Uint8Array(i.length + r.byteLength)).set(i, 0),
                    s.set(r, i.length),
                    s);
                C.doDecode(o, { type: 2, ts: a, isIFrame: n, cts: 0 });
              } else
                I.debug.warn(
                  'work',
                  'handleVideoH264Nalu Avc Seq Head is ' + t
                );
            } else if (C.sps && C.pps) {
              C.isSendSeqHeader = !0;
              const e = Fe({ sps: C.sps, pps: C.pps });
              I.decode(e, { type: 2, ts: 0, isIFrame: !0, cts: 0 }),
                (C.sps = null),
                (C.pps = null);
            }
            var r, i, s;
          },
          handleVideoH264NaluList(e, t, r) {
            var i, s;
            C.isSendSeqHeader
              ? ((i = C.getNaluDts()),
                (s = De(
                  e.reduce((e, t) => {
                    var e = ne(e),
                      t = ne(t),
                      r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(e, 0), r.set(t, e.byteLength), r;
                  }),
                  t
                )),
                C.doDecode(s, { type: 2, ts: i, isIFrame: t, cts: 0 }),
                I.debug.log(
                  'worker',
                  `handleVideoH264NaluList list size is ${e.length} package length is ${s.byteLength} isIFrame is ${t},nalu type is ${r}, dts is ` +
                    i
                ))
              : I.debug.warn(
                  'worker',
                  'handleVideoH264NaluList isSendSeqHeader is false'
                );
          },
          handleVideoH265Nalu(e) {
            const t = ae(e);
            switch (t) {
              case Z.vps:
                C.vps = e;
                break;
              case Z.sps:
                C.sps = e;
                break;
              case Z.pps:
                C.pps = e;
            }
            if (C.isSendSeqHeader) {
              if (C.vps && C.sps && C.pps) {
                const e = Re({ vps: C.vps, sps: C.sps, pps: C.pps }),
                  t = C.getNaluDts();
                I.decode(e, { type: 2, ts: t, isIFrame: !0, cts: 0 }),
                  (C.vps = null),
                  (C.sps = null),
                  (C.pps = null);
              }
              if (Ne(t)) {
                const n = Oe(t),
                  a = C.getNaluDts(),
                  o =
                    ((r = e),
                    ((i = [])[0] = n ? 28 : 44),
                    (i[1] = 1),
                    (i[2] = 0),
                    (i[3] = 0),
                    (i[4] = 0),
                    (i[5] = (r.byteLength >> 24) & 255),
                    (i[6] = (r.byteLength >> 16) & 255),
                    (i[7] = (r.byteLength >> 8) & 255),
                    (i[8] = 255 & r.byteLength),
                    (s = new Uint8Array(i.length + r.byteLength)).set(i, 0),
                    s.set(r, i.length),
                    s);
                C.doDecode(o, { type: 2, ts: a, isIFrame: n, cts: 0 });
              } else
                I.debug.warn('work', 'handleVideoH265Nalu HevcSeqHead is ' + t);
            } else if (C.vps && C.sps && C.pps) {
              C.isSendSeqHeader = !0;
              const e = Re({ vps: C.vps, sps: C.sps, pps: C.pps });
              I.decode(e, { type: 2, ts: 0, isIFrame: !0, cts: 0 }),
                (C.vps = null),
                (C.sps = null),
                (C.pps = null);
            }
            var r, i, s;
          },
          handleVideoH265NaluList(e, t, r) {
            var i, s;
            C.isSendSeqHeader
              ? ((i = C.getNaluDts()),
                (s = Me(
                  e.reduce((e, t) => {
                    var e = ne(e),
                      t = ne(t),
                      r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(e, 0), r.set(t, e.byteLength), r;
                  }),
                  t
                )),
                C.doDecode(s, { type: 2, ts: i, isIFrame: t, cts: 0 }),
                I.debug.log(
                  'worker',
                  `handleVideoH265NaluList list size is ${e.length} package length is ${s.byteLength} isIFrame is ${t},nalu type is ${r}, dts is ` +
                    i
                ))
              : I.debug.warn(
                  'worker',
                  'handleVideoH265NaluList isSendSeqHeader is false'
                );
          },
          doDecode(e, t) {
            I.calcNetworkDelay(t.ts),
              t.isIFrame && I.calcIframeIntervalTimestamp(t.ts),
              I._opt.isEmitSEI && I.findSei(e, t.ts),
              postMessage({ cmd: $, type: j, value: e.byteLength }),
              postMessage({ cmd: $, type: W, value: t.ts }),
              I.decode(e, t);
          },
        }),
      F = {
        LOG_NAME: 'worker fmp4Demuxer',
        mp4Box: oe.createFile(),
        offset: 0,
        videoTrackId: null,
        audioTrackId: null,
        isHevc: !1,
        listenMp4Box() {
          (F.mp4Box.onReady = F.onReady),
            (F.mp4Box.onError = F.onError),
            (F.mp4Box.onSamples = F.onSamples);
        },
        initTransportDescarmber() {
          F.transportDescarmber = new ot();
        },
        _getSeqHeader(t) {
          const r = F.mp4Box.getTrackById(t.id);
          for (const t of r.mdia.minf.stbl.stsd.entries)
            if (t.avcC || t.hvcC) {
              const r = new oe.DataStream(void 0, 0, oe.DataStream.BIG_ENDIAN);
              let e = [];
              e = t.avcC
                ? (t.avcC.write(r), [23, 0, 0, 0, 0])
                : ((F.isHevc = !0), t.hvcC.write(r), [28, 0, 0, 0, 0]);
              var i = new Uint8Array(r.buffer, 8),
                s = new Uint8Array(e.length + i.length);
              return s.set(e, 0), s.set(i, e.length), s;
            }
          return null;
        },
        onReady(i) {
          I.debug.log(F.LOG_NAME, 'onReady()', i);
          const s = i.videoTracks[0],
            e = i.audioTracks[0];
          if (s) {
            F.videoTrackId = s.id;
            const i = F._getSeqHeader(s);
            i &&
              (I.debug.log(F.LOG_NAME, 'seqHeader'),
              I.decodeVideo(i, 0, !0, 0)),
              F.mp4Box.setExtractionOptions(s.id);
          }
          if (e) {
            F.audioTrackId = e.id;
            const i = e.audio || {},
              s = Ee.indexOf(i.sample_rate),
              n = e.codec.replace('mp4a.40.', '');
            F.mp4Box.setExtractionOptions(e.id);
            var t = (function () {
              var {
                profile: e,
                sampleRate: t,
                channel: r,
              } = {
                profile: parseInt(n, 10),
                sampleRate: s,
                channel: i.channel_count,
              };
              return new Uint8Array([
                175,
                0,
                (e << 3) | ((14 & t) >> 1),
                ((1 & t) << 7) | (r << 3),
              ]);
            })();
            I.debug.log(F.LOG_NAME, 'aacADTSHeader'), I.decodeAudio(t, 0);
          }
          F.mp4Box.start();
        },
        onError(e) {
          I.debug.error(F.LOG_NAME, 'mp4Box onError', e);
        },
        onSamples(e, t, r) {
          if (e === F.videoTrackId)
            for (const e of r) {
              const t = e.data,
                r = e.is_sync,
                n = (1e3 * e.cts) / e.timescale;
              e.duration, e.timescale, r && I.calcIframeIntervalTimestamp(n);
              var i = (F.isHevc ? Me : De)(t, r);
              I._opt.isEmitSEI && I.findSei(i, n),
                postMessage({ cmd: $, type: j, value: i.byteLength }),
                postMessage({ cmd: $, type: W, value: n }),
                I.decode(i, { type: 2, ts: n, isIFrame: r, cts: 0 });
            }
          else if (e === F.audioTrackId) {
            if (I._opt.hasAudio)
              for (const e of r) {
                const t = e.data,
                  r = (1e3 * e.cts) / e.timescale;
                e.duration, e.timescale;
                var s = new Uint8Array(t.byteLength + 2);
                s.set([175, 1], 0),
                  s.set(t, 2),
                  postMessage({ cmd: $, type: ge, value: s.byteLength }),
                  I.decode(s, { type: 1, ts: r, isIFrame: !1, cts: 0 });
              }
          } else I.debug.warn(F.LOG_NAME, 'onSamples() trackId error', e);
        },
        dispatch(e) {
          let t = e;
          'string' != typeof e
            ? 'object' == typeof e
              ? (((t = F.transportDescarmber
                  ? F.transportDescarmber.transport(t)
                  : t).buffer.fileStart = F.offset),
                (F.offset += t.byteLength),
                F.mp4Box.appendBuffer(t.buffer))
              : I.debug.warn(F.LOG_NAME, 'dispatch()', 'data is not object', e)
            : I.debug.warn(F.LOG_NAME, 'dispatch()', 'data is string', e);
        },
        destroy() {
          F.mp4Box && (F.mp4Box.flush(), (F.mp4Box = null)),
            F.transportDescarmber &&
              (F.transportDescarmber.destroy(), (F.transportDescarmber = null)),
            (F.offset = 0),
            (F.videoTrackId = null),
            (F.audioTrackId = null),
            (F.isHevc = !1);
        },
      },
      D = {
        LOG_NAME: 'worker mpeg4Demuxer',
        lastBuffer: new Uint8Array(0),
        parsedOffset: 0,
        firstStartCodeOffset: 0,
        secondStartCodeOffset: 0,
        state: 'init',
        hasInitVideoCodec: !1,
        localDts: 0,
        dispatch(e) {
          e = new Uint8Array(e);
          D.extractNALu(e);
        },
        destroy() {
          (D.lastBuffer = new Uint8Array(0)),
            (D.parsedOffset = 0),
            (D.firstStartCodeOffset = 0),
            (D.secondStartCodeOffset = 0),
            (D.state = 'init'),
            (D.hasInitVideoCodec = !1),
            (D.localDts = 0);
        },
        extractNALu(e) {
          if (!e || e.byteLength < 1)
            I.debug.warn(D.LOG_NAME, 'extractNALu() buffer error', e);
          else {
            var t = new Uint8Array(D.lastBuffer.length + e.length);
            for (
              t.set(D.lastBuffer, 0),
                t.set(new Uint8Array(e), D.lastBuffer.length),
                D.lastBuffer = t;
              ;

            ) {
              if ('init' === D.state) {
                let e = !1;
                for (; 4 <= D.lastBuffer.length - D.parsedOffset; ) {
                  if (
                    0 === D.lastBuffer[D.parsedOffset] &&
                    0 === D.lastBuffer[D.parsedOffset + 1] &&
                    1 === D.lastBuffer[D.parsedOffset + 2] &&
                    182 === D.lastBuffer[D.parsedOffset + 3]
                  ) {
                    (D.state = 'findFirstStartCode'),
                      (D.firstStartCodeOffset = D.parsedOffset),
                      (D.parsedOffset += 4),
                      (e = !0);
                    break;
                  }
                  D.parsedOffset++;
                }
                if (e) continue;
                break;
              }
              if ('findFirstStartCode' === D.state) {
                let e = !1;
                for (; 4 <= D.lastBuffer.length - D.parsedOffset; ) {
                  if (
                    0 === D.lastBuffer[D.parsedOffset] &&
                    0 === D.lastBuffer[D.parsedOffset + 1] &&
                    1 === D.lastBuffer[D.parsedOffset + 2] &&
                    182 === D.lastBuffer[D.parsedOffset + 3]
                  ) {
                    (D.state = 'findSecondStartCode'),
                      (D.secondStartCodeOffset = D.parsedOffset),
                      (D.parsedOffset += 4),
                      (e = !0);
                    break;
                  }
                  D.parsedOffset++;
                }
                if (e) continue;
                break;
              }
              if ('findSecondStartCode' === D.state) {
                if (!(0 < D.lastBuffer.length - D.parsedOffset)) break;
                {
                  let e,
                    t,
                    r = 192 & D.lastBuffer[D.parsedOffset];
                  e =
                    0 == r
                      ? D.secondStartCodeOffset - 14
                      : D.secondStartCodeOffset;
                  var i = 0 == (192 & D.lastBuffer[D.firstStartCodeOffset + 4]);
                  if (i) {
                    if (D.firstStartCodeOffset - 14 < 0)
                      return void I.debug.warn(
                        D.LOG_NAME,
                        'firstStartCodeOffset -14 is',
                        D.firstStartCodeOffset - 14
                      );
                    D.hasInitVideoCodec ||
                      ((D.hasInitVideoCodec = !0),
                      I.debug.log(D.LOG_NAME, 'setCodec'),
                      L.setCodec(99, '')),
                      (t = D.lastBuffer.subarray(
                        D.firstStartCodeOffset - 14,
                        e
                      ));
                  } else t = D.lastBuffer.subarray(D.firstStartCodeOffset, e);
                  var s = D.getNaluDts();
                  D.hasInitVideoCodec
                    ? (postMessage({ cmd: $, type: j, value: t.byteLength }),
                      postMessage({ cmd: $, type: W, value: s }),
                      L.decode(t, i ? 1 : 0, s))
                    : I.debug.warn(D.LOG_NAME, 'has not init video codec'),
                    (D.lastBuffer = D.lastBuffer.subarray(e)),
                    (D.firstStartCodeOffset = 0 == r ? 14 : 0),
                    (D.parsedOffset = D.firstStartCodeOffset + 4),
                    (D.state = 'findFirstStartCode');
                }
              }
            }
          }
        },
        getNaluDts() {
          var e = D.localDts;
          return (D.localDts = D.localDts + 40), e;
        },
      },
      I = {
        isPlayer: !0,
        isPlayback: !1,
        isPushDropping: !1,
        isDestroyed: !1,
        _opt: G(),
        mp3Demuxer: null,
        startStreamRateAndStatsInterval: function () {
          I.stopStreamRateAndStatsInterval(),
            (e = setInterval(() => {
              h && h(0);
              var e = JSON.stringify({
                demuxBufferDelay: I.getVideoBufferLength(),
                audioDemuxBufferDelay: I.getAudioBufferLength(),
                flvBufferByteLength: I.getFlvBufferLength(),
                netBuf: I.networkDelay || 0,
                pushLatestDelay: I.pushLatestDelay || 0,
                isDropping: te(I.dropping) || te(I.isPushDropping),
                isStreamTsMoreThanLocal: i,
              });
              postMessage({ cmd: $, type: 'streamStats', value: e });
            }, 1e3));
        },
        stopStreamRateAndStatsInterval: function () {
          e && (clearInterval(e), (e = null));
        },
        useOffscreen: function () {
          return I._opt.useOffscreen && 'undefined' != typeof OffscreenCanvas;
        },
        getDelay: function (e) {
          var t, r;
          return !e || (I._opt.hasVideo && !_)
            ? -1
            : (I.preDelayTimestamp && I.preDelayTimestamp > e
                ? 1e3 < I.preDelayTimestamp - e &&
                  I.debug.warn(
                    'worker',
                    `getDelay() and preDelayTimestamp is ${
                      I.preDelayTimestamp
                    } > timestamp is ${e} more than ${
                      I.preDelayTimestamp - e
                    }ms`
                  )
                : I.firstTimestamp
                ? e &&
                  ((t = Date.now() - I.startTimestamp),
                  (r = e - I.firstTimestamp) <= t
                    ? ((i = !1), (I.delay = t - r))
                    : ((i = !0), (I.delay = r - t)))
                : ((I.firstTimestamp = e),
                  (I.startTimestamp = Date.now()),
                  (I.delay = -1)),
              (I.preDelayTimestamp = e),
              I.delay);
        },
        getDelayNotUpdateDelay: function (t) {
          if (t && (!I._opt.hasVideo || _))
            if (I.preDelayTimestamp && 1e3 < I.preDelayTimestamp - t)
              I.debug.warn(
                'worker',
                `getDelayNotUpdateDelay and preDelayTimestamp is ${
                  I.preDelayTimestamp
                } > timestamp is ${t} more than ${I.preDelayTimestamp - t}ms`
              );
            else if (I.firstTimestamp) {
              let e = -1;
              var r;
              return (
                t &&
                  ((r = Date.now() - I.startTimestamp),
                  (t = t - I.firstTimestamp),
                  (e = t <= r ? ((i = !1), r - t) : ((i = !0), t - r))),
                e
              );
            }
          return -1;
        },
        resetDelay: function () {
          (I.firstTimestamp = null), (I.startTimestamp = null), (I.delay = -1);
        },
        resetAllDelay: function () {
          I.resetDelay(), (I.preDelayTimestamp = null);
        },
        doDecode: function (e) {
          I._opt.useWCS && I.useOffscreen() && 2 === e.type && o.decode
            ? o.decode(e.payload, e.ts, e.cts)
            : e.decoder.decode(e.payload, e.ts, e.isIFrame, e.cts);
        },
        decodeNext(e) {
          if (0 !== a.length && !I.isPlayback) {
            var t = e.ts,
              r = a[0],
              i = 2 === e.type && ee(e.payload);
            if (Ae(n))
              i &&
                (I.debug.log(
                  'worker',
                  `decode data type is ${e.type} and
                ts is ${t} next data type is ${r.type} ts is ${r.ts}
                isVideoSqeHeader is ` + i
                ),
                a.shift(),
                I.doDecode(r));
            else {
              const n = r.ts - t,
                s = 1 === r.type && 2 === e.type;
              (n <= 20 || s || i) &&
                (I.debug.log(
                  'worker',
                  `decode data type is ${e.type} and
                ts is ${t} next data type is ${r.type} ts is ${r.ts}
                diff is ${n} and isVideoAndNextAudio is ${s} and isVideoSqeHeader is ` +
                    i
                ),
                a.shift(),
                I.doDecode(r));
            }
          }
        },
        init: function () {
          I.debug.log('worker', 'init and opt is', JSON.stringify(I._opt));
          const t = I._opt.playType === he,
            r = 'playbackTF' === I._opt.playType;
          if (
            (C.init(),
            (I.isPlayer = t),
            (I.isPlayback = r),
            I.isPlaybackCacheBeforeDecodeForFpsRender())
          )
            I.debug.log(
              'worker',
              'playback and playbackIsCacheBeforeDecodeForFpsRender is true'
            );
          else {
            const r = () => {
              let e = null;
              if (a.length)
                if (I.isPushDropping)
                  I.debug.warn(
                    'worker',
                    'loop() isPushDropping is true and bufferList length is ' +
                      a.length
                  );
                else if (I.dropping) {
                  for (
                    e = a.shift(),
                      I.debug.warn(
                        'worker',
                        `loop() dropBuffer is dropping and isIFrame ${e.isIFrame} and delay is ${I.delay} and bufferlist is ` +
                          a.length
                      );
                    !e.isIFrame && a.length;

                  )
                    e = a.shift();
                  const t = I.getDelayNotUpdateDelay(e.ts);
                  e.isIFrame &&
                    t <= I.getNotDroppingDelayTs() &&
                    (I.debug.log(
                      'worker',
                      'loop() is dropping = false, is iFrame'
                    ),
                    (I.dropping = !1),
                    I.doDecode(e),
                    I.decodeNext(e));
                } else if (
                  ((e = a[0]), -1 === I.getDelay(e.ts) || I.isPlayback)
                )
                  I.isPlayer &&
                    I.debug.log(
                      'worker',
                      'loop() common dumex delay is -1 ,data.ts is',
                      e.ts
                    ),
                    a.shift(),
                    I.doDecode(e),
                    I.decodeNext(e);
                else if (
                  I.delay > I._opt.videoBuffer + I._opt.videoBufferDelay &&
                  t
                )
                  I.hasIframeInBufferList()
                    ? (I.debug.log(
                        'worker',
                        `delay is ${I.delay}, set dropping is true`
                      ),
                      I.resetAllDelay(),
                      (I.dropping = !0))
                    : (a.shift(), I.doDecode(e), I.decodeNext(e));
                else
                  for (; a.length; ) {
                    if (
                      ((e = a[0]), !(I.getDelay(e.ts) > I._opt.videoBuffer))
                    ) {
                      I.delay < 0 &&
                        I.debug.warn(
                          'worker',
                          `loop() do not decode and delay is ${I.delay}, bufferList is ` +
                            a.length
                        );
                      break;
                    }
                    a.shift(), I.doDecode(e);
                  }
              else
                -1 !== I.delay &&
                  I.debug.log(
                    'worker',
                    'loop() bufferList is empty and reset delay'
                  ),
                  I.resetAllDelay();
            };
            I.stopId = setInterval(() => {
              var e = new Date().getTime(),
                e = e - (g = g || e);
              100 < e && I.debug.warn('worker', 'loop demux diff time is ' + e),
                r(),
                (g = new Date().getTime());
            }, 20);
          }
          Ae(I._opt.checkFirstIFrame) && (_ = !0);
        },
        playbackCacheLoop: function () {
          I.stopId && (clearInterval(I.stopId), (I.stopId = null));
          var e = () => {
              var e;
              a.length && ((e = a.shift()), I.doDecode(e));
            },
            t = (e(), Math.ceil(1e3 / (I.streamFps * I._opt.playbackRate)));
          I.debug.log(
            'worker',
            `playbackCacheLoop fragDuration is ${t}, streamFps is ${I.streamFps}, playbackRate is ` +
              I._opt.playbackRate
          ),
            (I.stopId = setInterval(e, t));
        },
        close: function () {
          if (
            (I.debug.log('worker', 'close'),
            (I.isDestroyed = !0),
            I.stopStreamRateAndStatsInterval(),
            I.stopId && (clearInterval(I.stopId), (I.stopId = null)),
            I.mp3Demuxer && (I.mp3Demuxer.destroy(), (I.mp3Demuxer = null)),
            P)
          )
            try {
              P.clear && P.clear(), (P = null);
            } catch (e) {
              I.debug.warn('worker', 'close() and audioDecoder.clear error', e);
            }
          if (L)
            try {
              L.clear && L.clear(), (L = null);
            } catch (e) {
              I.debug.warn('worker', 'close() and videoDecoder.clear error', e);
            }
          (h = null),
            (g = null),
            (i = !1),
            o && (o.reset && o.reset(), (o = null)),
            (I.firstTimestamp = null),
            (I.startTimestamp = null),
            (I.networkDelay = 0),
            (I.streamFps = null),
            (I.streamAudioFps = null),
            (I.streamVideoFps = null),
            (I.delay = -1),
            (I.pushLatestDelay = -1),
            (I.preDelayTimestamp = null),
            (I.dropping = !1),
            (I.isPushDropping = !1),
            (I.isPlayer = !0),
            (I.isPlayback = !1),
            (I._opt = G()),
            I.webglObj &&
              (I.webglObj.destroy(),
              I.offscreenCanvas.removeEventListener(
                'webglcontextlost',
                I.onOffscreenCanvasWebglContextLost
              ),
              I.offscreenCanvas.removeEventListener(
                'webglcontextrestored',
                I.onOffscreenCanvasWebglContextRestored
              ),
              (I.offscreenCanvas = null),
              (I.offscreenCanvasGL = null),
              (I.offscreenCanvasCtx = null)),
            (a = []),
            (d = []),
            s(),
            (u = null),
            r && (r.close(1e3, 'Client disconnecting'), (r = null)),
            (f = null),
            (p = null),
            (c = !1),
            (m = !1),
            (_ = !1),
            (k = !1),
            (M = !1),
            (N = !1),
            (T = !1),
            (v = []),
            (E = 0),
            (U = 0),
            (y = null),
            (b = null),
            (x = null),
            (B = null),
            (O = null),
            (A = 0),
            (R = 0),
            (w = null),
            (S = null),
            C.destroy(),
            F.destroy(),
            D.destroy(),
            postMessage({ cmd: 'closeEnd' });
        },
        pushBuffer: function (e, t) {
          if (1 === t.type && we(e)) {
            if (
              (I.debug.log(
                'worker',
                `pushBuffer audio ts is ${t.ts}, isAacCodecPacket is true`
              ),
              I._opt.isRecordTypeFlv)
            ) {
              const t = new Uint8Array(e);
              postMessage({ cmd: 'aacSequenceHeader', buffer: t }, [t.buffer]);
            }
            I.decodeAudio(e, t.ts);
          } else if (2 === t.type && t.isIFrame && ee(e)) {
            if (
              (I.debug.log(
                'worker',
                `pushBuffer video ts is ${t.ts}, isVideoSequenceHeader is true`
              ),
              I._opt.isRecordTypeFlv)
            ) {
              const t = new Uint8Array(e);
              postMessage({ cmd: 'videoSequenceHeader', buffer: t }, [
                t.buffer,
              ]);
            }
            I.decodeVideo(e, t.ts, t.isIFrame, t.cts);
          } else {
            if (I._opt.isRecording)
              if (I._opt.isRecordTypeFlv) {
                const a = new Uint8Array(e);
                postMessage(
                  { cmd: 'flvBufferData', type: t.type, buffer: a, ts: t.ts },
                  [a.buffer]
                );
              } else if (I._opt.recordType === H)
                if (2 === t.type) {
                  const a = new Uint8Array(e).slice(5);
                  postMessage(
                    {
                      cmd: 'videoNalu',
                      buffer: a,
                      isIFrame: t.isIFrame,
                      ts: t.ts,
                      cts: t.cts,
                    },
                    [a.buffer]
                  );
                } else if (1 === t.type && I._opt.isWasmMp4) {
                  const a = new Uint8Array(e),
                    r = Se(a) ? a.slice(2) : a.slice(1);
                  postMessage({ cmd: 'audioNalu', buffer: r, ts: t.ts }, [
                    r.buffer,
                  ]);
                }
            if (I.isPlayer && 0 < A && 0 < B && 2 === t.type) {
              const e = t.ts - B;
              e > 2 * A - 5 &&
                I.debug.warn(
                  'worker',
                  `pushBuffer video
                    ts is ${t.ts}, preTimestamp is ${B},
                    diff is ${e} and preTimestampDuration is ${A}
                    maybe trigger black screen or flower screen
                    `
                );
            }
            if (
              (I.isPlayer &&
                0 < B &&
                2 === t.type &&
                t.ts < B &&
                36e5 < B - t.ts &&
                (I.debug.warn(
                  'worker',
                  `pushBuffer,
                preTimestamp is ${B}, options.ts is ${t.ts},
                diff is ${B - t.ts} more than 3600000,
                and resetAllDelay`
                ),
                I.resetAllDelay()),
              I.isPlayer &&
                t.ts <= B &&
                0 < B &&
                2 === t.type &&
                I.debug.warn(
                  'worker',
                  `pushBuffer,
                options.ts is ${t.ts} less than (or equal) preTimestamp is ${B} and
                payloadBufferSize is ${e.byteLength} and prevPayloadBufferSize is ` +
                    R
                ),
              I.isPlayer && _)
            ) {
              const e = I._opt.videoBuffer + I._opt.videoBufferDelay,
                a = I.getDelayNotUpdateDelay(t.ts);
              (I.pushLatestDelay = a) > e &&
                I.delay < e &&
                0 < I.delay &&
                I.hasIframeInBufferList() &&
                !1 === I.isPushDropping &&
                (I.debug.log(
                  'worker',
                  `pushBuffer, pushLatestDelay is ${a} more than ${e} and decoder.delay is ${I.delay} and has iIframe and next decoder.dropBuffer$2()`
                ),
                I.dropBuffer$2());
            }
            if (
              (2 === t.type &&
                (0 < B && (A = t.ts - B), (R = e.byteLength), (B = t.ts)),
              1 === t.type
                ? a.push({
                    ts: t.ts,
                    payload: e,
                    decoder: { decode: I.decodeAudio },
                    type: 1,
                    isIFrame: !1,
                  })
                : 2 === t.type &&
                  a.push({
                    ts: t.ts,
                    cts: t.cts,
                    payload: e,
                    decoder: { decode: I.decodeVideo },
                    type: 2,
                    isIFrame: t.isIFrame,
                  }),
              I.isPlaybackCacheBeforeDecodeForFpsRender() &&
                (Q(I.streamVideoFps) || Q(I.streamAudioFps)))
            ) {
              let e = I.streamVideoFps,
                t = I.streamAudioFps;
              Q(I.streamVideoFps) &&
                (e = Be(a, 2)) &&
                ((I.streamVideoFps = e),
                postMessage({
                  cmd: 'playbackStreamVideoFps',
                  value: I.streamVideoFps,
                }),
                (I.streamFps = t ? e + t : e),
                I.playbackCacheLoop()),
                Q(I.streamAudioFps) &&
                  (t = Be(a, 1)) &&
                  ((I.streamAudioFps = t),
                  (I.streamFps = e ? e + t : t),
                  I.playbackCacheLoop()),
                Q(I.streamVideoFps) &&
                  Q(I.streamAudioFps) &&
                  I.debug.log(
                    'worker',
                    `playbackCacheBeforeDecodeForFpsRender, calc streamAudioFps is ${t}, streamVideoFps is ${e}, bufferListLength  is ` +
                      a.length
                  );
            }
          }
        },
        getVideoBufferLength() {
          let t = 0;
          return (
            a.forEach((e) => {
              2 === e.type && (t += 1);
            }),
            t
          );
        },
        hasIframeInBufferList: () => a.some((e) => 2 === e.type && e.isIFrame),
        isAllIframeInBufferList() {
          var e = I.getVideoBufferLength();
          let t = 0;
          return (
            a.forEach((e) => {
              2 === e.type && e.isIFrame && (t += 1);
            }),
            e === t
          );
        },
        getNotDroppingDelayTs: () =>
          I._opt.videoBuffer + I._opt.videoBufferDelay / 2,
        getAudioBufferLength() {
          let t = 0;
          return (
            a.forEach((e) => {
              1 === e.type && (t += 1);
            }),
            t
          );
        },
        getFlvBufferLength() {
          let e = 0;
          return (
            u && u.buffer && (e = u.buffer.byteLength),
            (e = I._opt.isNakedFlow && C.lastBuf ? C.lastBuf.byteLength : e)
          );
        },
        fetchStream: function (e, i) {
          I.debug.log(
            'worker',
            'fetchStream, url is ' + e,
            'options:',
            JSON.stringify(i)
          ),
            i.isFlv
              ? (I._opt.isFlv = !0)
              : i.isFmp4
              ? (I._opt.isFmp4 = !0)
              : i.isMpeg4
              ? (I._opt.isMpeg4 = !0)
              : i.isNakedFlow && (I._opt.isNakedFlow = !0),
            (h = (function (r) {
              let i = 0,
                s = Ue();
              return (e) => {
                var t;
                '[object Number]' === Object.prototype.toString.call(e) &&
                  ((i += e), 1e3 <= (t = (e = Ue()) - s)) &&
                  (r((i / t) * 1e3), (s = e), (i = 0));
              };
            })((e) => {
              postMessage({ cmd: $, type: 'streamRate', value: e });
            })),
            I.startStreamRateAndStatsInterval(),
            i.isFmp4 &&
              (F.listenMp4Box(), I._opt.isFmp4Private) &&
              F.initTransportDescarmber(),
            2 === i.protocol
              ? ((u = new re(I.demuxFlv())),
                fetch(e, { signal: t.signal })
                  .then((e) => {
                    if (e.ok && 200 <= e.status && e.status <= 299)
                      if (
                        (postMessage({ cmd: $, type: ye }),
                        'undefined' != typeof WritableStream)
                      )
                        e.body.pipeTo(
                          new WritableStream({
                            write: (e) => {
                              h(e.byteLength),
                                i.isFlv
                                  ? u.write(e)
                                  : i.isFmp4
                                  ? I.demuxFmp4(e)
                                  : i.isMpeg4 && I.demuxMpeg4(e);
                            },
                            close: () => {
                              (u = null),
                                s(),
                                postMessage({ cmd: $, type: _e, value: de });
                            },
                            abort: (e) => {
                              (u = null),
                                e.name !== ve &&
                                  (s(),
                                  postMessage({
                                    cmd: $,
                                    type: Y,
                                    value: e.toString(),
                                  }));
                            },
                          })
                        );
                      else {
                        const t = e.body.getReader(),
                          r = () => {
                            t.read()
                              .then((e) => {
                                var { done: e, value: t } = e;
                                e
                                  ? ((u = null),
                                    s(),
                                    postMessage({
                                      cmd: $,
                                      type: _e,
                                      value: de,
                                    }))
                                  : (h(t.byteLength),
                                    i.isFlv
                                      ? u.write(t)
                                      : i.isFmp4
                                      ? I.demuxFmp4(t)
                                      : i.isMpeg4 && I.demuxMpeg4(t),
                                    r());
                              })
                              .catch((e) => {
                                (u = null),
                                  e.name !== ve &&
                                    (s(),
                                    postMessage({
                                      cmd: $,
                                      type: Y,
                                      value: e.toString(),
                                    }));
                              });
                          };
                        r();
                      }
                    else
                      I.debug.warn(
                        'worker',
                        `fetch response status is ${e.status} and ok is ${e.ok} and emit error and next abort()`
                      ),
                        s(),
                        postMessage({
                          cmd: $,
                          type: Y,
                          value:
                            `fetch response status is ${e.status} and ok is ` +
                            e.ok,
                        });
                  })
                  .catch((e) => {
                    e.name !== ve &&
                      (s(),
                      postMessage({ cmd: $, type: Y, value: e.toString() }),
                      (u = null));
                  }))
              : 1 === i.protocol &&
                (i.isFlv && (u = new re(I.demuxFlv())),
                ((r = new WebSocket(e)).binaryType = 'arraybuffer'),
                (r.onopen = () => {
                  I.debug.log(
                    'worker',
                    'fetchStream, WebsocketStream  socket open'
                  ),
                    postMessage({ cmd: $, type: ye }),
                    postMessage({ cmd: $, type: 'websocketOpen' });
                }),
                (r.onclose = (e) => {
                  I.debug.log(
                    'worker',
                    'fetchStream, WebsocketStream socket close and code is ' +
                      e.code
                  ),
                    1006 === e.code &&
                      I.debug.error(
                        'worker',
                        'fetchStream, WebsocketStream socket close abnormally and code is ' +
                          e.code
                      ),
                    (u = null),
                    postMessage({ cmd: $, type: _e, value: 'websocket' });
                }),
                (r.onerror = (e) => {
                  I.debug.error(
                    'worker',
                    'fetchStream, WebsocketStream socket error',
                    e
                  ),
                    (u = null),
                    postMessage({
                      cmd: $,
                      type: 'websocketError',
                      value: e.isTrusted
                        ? 'websocket user aborted'
                        : 'websocket error',
                    });
                }),
                (r.onmessage = (e) => {
                  h(e.data.byteLength),
                    i.isFlv
                      ? u.write(e.data)
                      : i.isFmp4
                      ? I.demuxFmp4(e.data)
                      : i.isMpeg4
                      ? I.demuxMpeg4(e.data)
                      : I._opt.isNakedFlow
                      ? I.demuxNakedFlow(e.data)
                      : I.demuxM7s(e.data);
                }));
        },
        demuxFlv: function* () {
          yield 9;
          const r = new ArrayBuffer(4),
            i = new Uint8Array(r),
            s = new Uint32Array(r);
          for (;;) {
            i[3] = 0;
            const r = yield 15,
              t = r[4];
            (i[0] = r[7]), (i[1] = r[6]), (i[2] = r[5]);
            var e = s[0],
              n =
                ((i[0] = r[10]),
                (i[1] = r[9]),
                (i[2] = r[8]),
                (i[3] = r[11]),
                s[0]),
              a = (yield e).slice();
            switch (t) {
              case 8:
                I.decode(a, { type: 1, ts: n });
                break;
              case 9:
                if (0 < a.byteLength) {
                  const r = a[0] >> 4 == 1;
                  I.isPlayer &&
                    (I.calcNetworkDelay(n), r) &&
                    I.calcIframeIntervalTimestamp(n),
                    (s[0] = a[4]),
                    (s[1] = a[3]),
                    (s[2] = a[2]),
                    (s[3] = 0);
                  let e = s[0],
                    t = a;
                  if (I._opt.isCrypto)
                    if (
                      I._opt.cryptoIV &&
                      0 < I._opt.cryptoIV.byteLength &&
                      I._opt.cryptoKey &&
                      0 < I._opt.cryptoKey.byteLength
                    ) {
                      if (r && ee(a)) {
                        const i = 15 & a[0];
                        (T = 12 == i),
                          I.debug.log(
                            'worker',
                            `demuxFlv() isCrypto isIFrame is ${r} and isVideoSequenceHeader is true and videoCodec is ${i} and isHevc is ` +
                              T
                          );
                      }
                      t = (function (r, i, s, e) {
                        let n = 3 < arguments.length && void 0 !== e && e;
                        (i = new Uint8Array(i)), (s = new Uint8Array(s));
                        var a,
                          o = r.byteLength;
                        let l = 5;
                        for (; l < o; ) {
                          var d =
                            (a = r.slice(l, l + 4))[3] |
                            (a[2] << 8) |
                            (a[1] << 16) |
                            (a[0] << 24);
                          if (o < d) break;
                          let e = r[l + 4],
                            t = !1;
                          if (
                            (t = n
                              ? ((e = (e >>> 1) & 63),
                                [
                                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19,
                                  20,
                                ].includes(e))
                              : 1 === (e &= 31) || 5 === e)
                          ) {
                            const n = r.slice(l + 4 + 2, l + 4 + d);
                            let e = new st.ModeOfOperation.ctr(
                              i,
                              new st.Counter(s)
                            );
                            const a = e.decrypt(n);
                            (e = null), r.set(a, l + 4 + 2);
                          }
                          l = l + 4 + d;
                        }
                        return r;
                      })(a, I._opt.cryptoKey, I._opt.cryptoIV, T);
                    } else
                      I.debug.error(
                        'worker',
                        `cryptoKey.length is ${
                          I._opt.cryptoKey && I._opt.cryptoKey.byteLength
                        } or cryptoIV.length is ${
                          I._opt.cryptoIV && I._opt.cryptoIV.byteLength
                        } null`
                      );
                  else
                    I._opt.isSm4Crypto &&
                      (I._opt.sm4CryptoKey && r
                        ? (t = (function (e, t) {
                            const r = e.byteLength;
                            let i = 5;
                            for (; i < r; ) {
                              n =
                                (n = e.slice(i, i + 4))[3] |
                                (n[2] << 8) |
                                (n[1] << 16) |
                                (n[0] << 24);
                              if (n > r) break;
                              var s = e[i + 4];
                              if (1 == (s &= 31) || 5 == s) {
                                const r = ct(
                                  e.slice(i + 4 + 2, i + 4 + n),
                                  t,
                                  0,
                                  { padding: 'none', output: 'array' }
                                );
                                e.set(r, i + 4 + 2);
                              }
                              i = i + 4 + n;
                            }
                            var n;
                            return e;
                          })(a, I._opt.sm4CryptoKey))
                        : I._opt.sm4CryptoKey ||
                          I.debug.error('worker', 'opt.sm4CryptoKey is null'));
                  I._opt.isEmitSEI && I.findSei(t, n),
                    I.decode(t, { type: 2, ts: n, isIFrame: r, cts: e });
                }
                break;
              case 18:
                postMessage({ cmd: 'flvScriptData', buffer: a }, [a.buffer]);
                break;
              default:
                I.debug.log('worker', 'demuxFlv() type is ' + t);
            }
          }
        },
        decode: function (e, t) {
          1 === t.type
            ? I._opt.hasAudio &&
              (postMessage({ cmd: $, type: ge, value: e.byteLength }),
              I.isPlayer
                ? I.pushBuffer(e, { type: t.type, ts: t.ts, cts: t.cts })
                : I.isPlayback &&
                  (I.isPlaybackCacheBeforeDecodeForFpsRender() ||
                  1 === I._opt.playbackRate
                    ? I.pushBuffer(e, { type: t.type, ts: t.ts, cts: t.cts })
                    : I.decodeAudio(e, t.ts)))
            : 2 === t.type &&
              I._opt.hasVideo &&
              (postMessage({ cmd: $, type: j, value: e.byteLength }),
              postMessage({ cmd: $, type: W, value: t.ts }),
              I.isPlayer
                ? I.pushBuffer(e, {
                    type: t.type,
                    ts: t.ts,
                    isIFrame: t.isIFrame,
                    cts: t.cts,
                  })
                : I.isPlayback &&
                  (I.isPlaybackOnlyDecodeIFrame()
                    ? t.isIFrame &&
                      I.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts,
                        isIFrame: t.isIFrame,
                      })
                    : (I.isPlaybackCacheBeforeDecodeForFpsRender(),
                      I.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts,
                        isIFrame: t.isIFrame,
                      }))));
        },
        setCodecAudio: function (e, t) {
          const r = e[0] >> 4,
            i = (e[0] >> 1) & 1;
          if (
            ((O = r === K.AAC ? (i ? 16 : 8) : 0 === i ? 8 : 16),
            P && P.setCodec)
          )
            if (we(e) || r === K.ALAW || r === K.MULAW || r === K.MP3) {
              I.debug.log(
                'worker',
                'setCodecAudio: init audio codec, codeId is ' + r
              );
              const i = r === K.AAC ? e.slice(2) : new Uint8Array(0);
              P.setCodec(r, I._opt.sampleRate, i),
                postMessage({ cmd: 'audioAACSequenceHeader', buffer: i }, [
                  i.buffer,
                ]),
                (m = !0),
                r !== K.AAC &&
                  (r === K.MP3
                    ? (I.mp3Demuxer ||
                        ((I.mp3Demuxer = new mt(I)),
                        I.mp3Demuxer.on('data', (e, t) => {
                          P.decode(e, t);
                        })),
                      I.mp3Demuxer.dispatch(e.slice(1), t))
                    : P.decode(e.slice(1), t));
            } else
              I.debug.warn(
                'worker',
                'setCodecAudio: hasInitAudioCodec is false, codecId is ',
                r
              );
          else
            I.debug.error(
              'worker',
              'setCodecAudio: audioDecoder or audioDecoder.setCodec is null'
            );
        },
        decodeAudio: function (e, t) {
          var r = e[0] >> 4;
          m
            ? r === K.MP3
              ? I.mp3Demuxer.dispatch(e.slice(1), t)
              : P.decode(r === K.AAC ? e.slice(2) : e.slice(1), t)
            : I.setCodecAudio(e, t);
        },
        setCodecVideo: function (e) {
          var t = 15 & e[0];
          if (L && L.setCodec)
            if (ee(e))
              if (7 == t || 12 == t) {
                (T = 12 == t),
                  I.debug.log(
                    'worker',
                    'setCodecVideo: init video codec , codecId is ' + t
                  );
                var r = e.slice(5);
                if (7 == t && I._opt.useSIMD) {
                  const e = Ce(r);
                  if (4080 < e.codecWidth || 4080 < e.codecHeight)
                    return (
                      postMessage({
                        cmd: 'simdH264DecodeVideoWidthIsTooLarge',
                      }),
                      void I.debug.warn(
                        'worker',
                        `setCodecVideo: SIMD H264 decode video width is too large, width is ${e.codecWidth}, height is ` +
                          e.codecHeight
                      )
                    );
                }
                (c = !0),
                  L.setCodec(t, r),
                  I._opt.recordType === H &&
                    postMessage({ cmd: me, buffer: e, codecId: t }, [e.buffer]);
              } else
                I.debug.warn(
                  'worker',
                  `setCodecVideo: hasInitVideoCodec is false, codecId is ${t} is not H264 or H265`
                );
            else
              I.debug.warn(
                'worker',
                `decodeVideo: hasInitVideoCodec is false, codecId is ${t} and frameType is ${
                  e[0] >> 4
                } and packetType is ` + e[1]
              );
          else
            I.debug.error(
              'worker',
              'setCodecVideo: videoDecoder or videoDecoder.setCodec is null'
            );
        },
        decodeVideo: function (t, e, r) {
          var i =
            3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
          if (te(n))
            postMessage(
              {
                cmd: 'videoPayload',
                payload: t,
                isIFrame: r,
                ts: e,
                cts: i,
                delay: I.delay,
              },
              [t.buffer]
            );
          else if (c)
            if ((_ = !_ && r ? !0 : _)) {
              if (r && ee(t)) {
                const n = 15 & t[0];
                let e = {};
                7 == n
                  ? (e = Ce(t.slice(5)))
                  : 12 == n &&
                    (e = (function (e) {
                      var i = { width: 0, height: 0, profile: 0, level: 0 };
                      e = e.slice(5);
                      do {
                        var s = {};
                        if (e.length < 23) {
                          console.warn(
                            'parseHEVCDecoderConfigurationRecord$2',
                            `arrayBuffer.length ${e.length} < 23`
                          );
                          break;
                        }
                        if (
                          ((s.configurationVersion = e[0]),
                          1 != s.configurationVersion)
                        )
                          break;
                        (s.general_profile_space = (e[1] >> 6) & 3),
                          (s.general_tier_flag = (e[1] >> 5) & 1),
                          (s.general_profile_idc = 31 & e[1]),
                          (s.general_profile_compatibility_flags =
                            (e[2] << 24) | (e[3] << 16) | (e[4] << 8) | e[5]),
                          (s.general_constraint_indicator_flags =
                            (e[6] << 24) | (e[7] << 16) | (e[8] << 8) | e[9]),
                          (s.general_constraint_indicator_flags =
                            (s.general_constraint_indicator_flags << 16) |
                            (e[10] << 8) |
                            e[11]),
                          (s.general_level_idc = e[12]),
                          (s.min_spatial_segmentation_idc =
                            ((15 & e[13]) << 8) | e[14]),
                          (s.parallelismType = 3 & e[15]),
                          (s.chromaFormat = 3 & e[16]),
                          (s.bitDepthLumaMinus8 = 7 & e[17]),
                          (s.bitDepthChromaMinus8 = 7 & e[18]),
                          (s.avgFrameRate = (e[19] << 8) | e[20]),
                          (s.constantFrameRate = (e[21] >> 6) & 3),
                          (s.numTemporalLayers = (e[21] >> 3) & 7),
                          (s.temporalIdNested = (e[21] >> 2) & 1),
                          (s.lengthSizeMinusOne = 3 & e[21]);
                        let t = e[22],
                          r = e.slice(23);
                        for (let e = 0; e < t && !(r.length < 3); e++) {
                          var n = 63 & r[0],
                            a = (r[1] << 8) | r[2];
                          r = r.slice(3);
                          for (let e = 0; e < a && !(r.length < 2); e++) {
                            var o,
                              l = (r[0] << 8) | r[1];
                            if (r.length < 2 + l) break;
                            (r = r.slice(2)),
                              33 == n &&
                                ((o = new Uint8Array(l)).set(r.slice(0, l), 0),
                                (s.psps = (function (e) {
                                  var t = {},
                                    r = e.length,
                                    i = [],
                                    s = new Te(e);
                                  s.read(1), s.read(6), s.read(6), s.read(3);
                                  for (let e = 2; e < r; e++)
                                    e + 2 < r && 3 == s.look(24)
                                      ? (i.push(s.read(8)),
                                        i.push(s.read(8)),
                                        (e += 2),
                                        s.read(8))
                                      : i.push(s.read(8));
                                  var n,
                                    a,
                                    e = new Uint8Array(i),
                                    e = new Te(e);
                                  return (
                                    (t.sps_video_parameter_set_id = e.read(4)),
                                    (t.sps_max_sub_layers_minus1 = e.read(3)),
                                    (t.sps_temporal_id_nesting_flag =
                                      e.read(1)),
                                    (t.profile_tier_level = (function (t, r) {
                                      var i = {};
                                      (i.profile_space = t.read(2)),
                                        (i.tier_flag = t.read(1)),
                                        (i.profile_idc = t.read(5)),
                                        (i.profile_compatibility_flags =
                                          t.read(32)),
                                        (i.general_progressive_source_flag =
                                          t.read(1)),
                                        (i.general_interlaced_source_flag =
                                          t.read(1)),
                                        (i.general_non_packed_constraint_flag =
                                          t.read(1)),
                                        (i.general_frame_only_constraint_flag =
                                          t.read(1)),
                                        t.read(32),
                                        t.read(12),
                                        (i.level_idc = t.read(8)),
                                        (i.sub_layer_profile_present_flag = []),
                                        (i.sub_layer_level_present_flag = []);
                                      for (let e = 0; e < r; e++)
                                        (i.sub_layer_profile_present_flag[e] =
                                          t.read(1)),
                                          (i.sub_layer_level_present_flag[e] =
                                            t.read(1));
                                      if (0 < r)
                                        for (let e = r; e < 8; e++) t.read(2);
                                      (i.sub_layer_profile_space = []),
                                        (i.sub_layer_tier_flag = []),
                                        (i.sub_layer_profile_idc = []),
                                        (i.sub_layer_profile_compatibility_flag =
                                          []),
                                        (i.sub_layer_progressive_source_flag =
                                          []),
                                        (i.sub_layer_interlaced_source_flag =
                                          []),
                                        (i.sub_layer_non_packed_constraint_flag =
                                          []),
                                        (i.sub_layer_frame_only_constraint_flag =
                                          []),
                                        (i.sub_layer_level_idc = []);
                                      for (let e = 0; e < r; e++)
                                        i.sub_layer_profile_present_flag[e] &&
                                          ((i.sub_layer_profile_space[e] =
                                            t.read(2)),
                                          (i.sub_layer_tier_flag[e] =
                                            t.read(1)),
                                          (i.sub_layer_profile_idc[e] =
                                            t.read(5)),
                                          (i.sub_layer_profile_compatibility_flag[
                                            e
                                          ] = t.read(32)),
                                          (i.sub_layer_progressive_source_flag[
                                            e
                                          ] = t.read(1)),
                                          (i.sub_layer_interlaced_source_flag[
                                            e
                                          ] = t.read(1)),
                                          (i.sub_layer_non_packed_constraint_flag[
                                            e
                                          ] = t.read(1)),
                                          (i.sub_layer_frame_only_constraint_flag[
                                            e
                                          ] = t.read(1)),
                                          t.read(32),
                                          t.read(12)),
                                          i.sub_layer_level_present_flag[e]
                                            ? (i.sub_layer_level_idc[e] =
                                                t.read(8))
                                            : (i.sub_layer_level_idc[e] = 1);
                                      return i;
                                    })(e, t.sps_max_sub_layers_minus1)),
                                    (t.sps_seq_parameter_set_id =
                                      e.read_golomb()),
                                    (t.chroma_format_idc = e.read_golomb()),
                                    (t.separate_colour_plane_flag =
                                      3 == t.chroma_format_idc ? e.read(1) : 0),
                                    (t.pic_width_in_luma_samples =
                                      e.read_golomb()),
                                    (t.pic_height_in_luma_samples =
                                      e.read_golomb()),
                                    (t.conformance_window_flag = e.read(1)),
                                    t.conformance_window_flag
                                      ? ((n = 1 + (t.chroma_format_idc < 2)),
                                        (a = 1 + (t.chroma_format_idc < 3)),
                                        (t.conf_win_left_offset =
                                          e.read_golomb() * a),
                                        (t.conf_win_right_offset =
                                          e.read_golomb() * a),
                                        (t.conf_win_top_offset =
                                          e.read_golomb() * n),
                                        (t.conf_win_bottom_offset =
                                          e.read_golomb() * n))
                                      : ((t.conf_win_left_offset = 0),
                                        (t.conf_win_right_offset = 0),
                                        (t.conf_win_top_offset = 0),
                                        (t.conf_win_bottom_offset = 0)),
                                    t
                                  );
                                })(o)),
                                (i.profile = s.general_profile_idc),
                                (i.level = s.general_level_idc / 30),
                                (i.width =
                                  s.psps.pic_width_in_luma_samples -
                                  (s.psps.conf_win_left_offset +
                                    s.psps.conf_win_right_offset)),
                                (i.height =
                                  s.psps.pic_height_in_luma_samples -
                                  (s.psps.conf_win_top_offset +
                                    s.psps.conf_win_bottom_offset))),
                              (r = r.slice(l));
                          }
                        }
                      } while (0);
                      return (
                        (i.codecWidth = i.width || 1920),
                        (i.codecHeight = i.height || 1080),
                        (i.presentHeight = i.codecHeight),
                        (i.presentWidth = i.codecWidth),
                        (i.timescale = 1e3),
                        (i.refSampleDuration = (1e3 / 23976) * 1e3),
                        (i.videoType = be.h265),
                        i
                      );
                    })(t)),
                  e.codecWidth &&
                    e.codecHeight &&
                    f &&
                    p &&
                    (e.codecWidth !== f || e.codecHeight !== p) &&
                    (I.debug.warn(
                      'worker',
                      `
                            decodeVideo: video width or height is changed,
                            old width is ${f}, old height is ${p},
                            new width is ${e.codecWidth}, new height is ${e.codecHeight},
                            and emit change event`
                    ),
                    (M = !0),
                    postMessage({ cmd: 'wasmWidthOrHeightChange' }));
              }
              if (M)
                I.debug.warn(
                  'worker',
                  'decodeVideo: video width or height is changed, and return'
                );
              else if (N)
                I.debug.warn(
                  'worker',
                  'decodeVideo: simd decode error, and return'
                );
              else if (ee(t))
                I.debug.warn(
                  'worker',
                  'decodeVideo and payload is video sequence header so drop this frame'
                );
              else if (t.byteLength < 12)
                I.debug.warn(
                  'worker',
                  'decodeVideo and payload is too small , payload length is ' +
                    t.byteLength
                );
              else {
                const n = t.slice(5);
                L.decode(n, r ? 1 : 0, e);
              }
            } else
              I.debug.warn('worker', 'decodeVideo: first frame is not iframe');
          else I.setCodecVideo(t);
        },
        clearBuffer: function () {
          var e =
            0 < arguments.length && void 0 !== arguments[0] && arguments[0];
          I.debug.log(
            'worker',
            `clearBuffer,bufferList length is ${a.length}, need clear is ` + e
          ),
            e && (a = []),
            I.resetAllDelay(),
            (I.dropping = !0);
        },
        dropBuffer$2: function () {
          if (0 < a.length) {
            I.isPushDropping = !0;
            let t = a.findIndex((e) => te(e.isIFrame) && 2 === e.type);
            if (I.isAllIframeInBufferList())
              for (let e = 0; e < a.length; e++) {
                var r = a[e],
                  r = I.getDelayNotUpdateDelay(r.ts);
                if (r >= I.getNotDroppingDelayTs()) {
                  I.debug.log(
                    'worker',
                    `dropBuffer$2() isAllIframeInBufferList() is true, and index is ${e} and tempDelay is ${r} and notDroppingDelayTs is ` +
                      I.getNotDroppingDelayTs()
                  ),
                    (t = e);
                  break;
                }
              }
            var e, i, s;
            0 <= t
              ? ((e = a.length),
                (i = (a = a.slice(t)).shift()),
                (s = I.getDelayNotUpdateDelay(i.ts)),
                I.doDecode(i),
                (I.isPushDropping = !1),
                I.debug.log(
                  'worker',
                  `dropBuffer$2() iFrameIndex is ${t},and prev bufferList length is ${e} ,new bufferList is ${a.length} and tempDelay is ${s} ,delay is ${I.delay} `
                ))
              : (I.isPushDropping = !1);
          }
          0 === a.length && (I.isPushDropping = !1);
        },
        demuxM7s: function (e) {
          var t,
            r,
            i = new DataView(e),
            s = i.getUint32(1, !1);
          switch (i.getUint8(0)) {
            case 1:
              I.decode(new Uint8Array(e, 5), { type: 1, ts: s });
              break;
            case 2:
              5 < i.byteLength &&
                ((t = new Uint8Array(e, 5)),
                (r = i.getUint8(5) >> 4 == 1),
                I.isPlayer &&
                  (I.calcNetworkDelay(s), r) &&
                  I.calcIframeIntervalTimestamp(s),
                I._opt.isEmitSEI && I.findSei(t, s),
                I.decode(t, { type: 2, ts: s, isIFrame: r }));
          }
        },
        demuxNakedFlow: function (e) {
          C.dispatch(e);
        },
        demuxFmp4: function (e) {
          e = new Uint8Array(e);
          F.dispatch(e);
        },
        demuxMpeg4: function (e) {
          D.dispatch(e);
        },
        findSei: function (e, r) {
          (function (r, e) {
            var i = 1 < arguments.length && void 0 !== e ? e : 4;
            if (!(r.length < 4)) {
              var s = r.length,
                n = [];
              let e,
                t = 0;
              for (; t + i < s; )
                if (
                  ((e = (function (e, t) {
                    return (
                      ((e[(t = 1 < arguments.length && void 0 !== t ? t : 0)] <<
                        24) >>>
                        0) +
                      (e[t + 1] << 16) +
                      (e[t + 2] << 8) +
                      (e[t + 3] || 0)
                    );
                  })(r, t)),
                  3 === i && (e >>>= 8),
                  (t += i),
                  e)
                ) {
                  if (t + e > s) break;
                  n.push(r.subarray(t, t + e)), (t += e);
                }
              return n;
            }
          })(e.slice(5)).forEach((e) => {
            var t = T ? (e[0] >>> 1) & 63 : 31 & e[0];
            ((T && (t === Z.suffixSei || t === Z.prefixSei)) ||
              (Ae(T) && t === X.kSliceSEI)) &&
              postMessage({ cmd: 'videoSEI', buffer: e, ts: r }, [e.buffer]);
          });
        },
        calcNetworkDelay: function (e) {
          var t, r, i;
          _ &&
            0 < e &&
            (null === y
              ? ((y = e), (b = J()))
              : e < y &&
                (I.debug.warn(
                  'worker',
                  `calcNetworkDelay, dts is ${e} less than bufferStartDts is ` +
                    y
                ),
                (y = e),
                (b = J())),
            (i = (t = e - y) < (r = J() - b) ? r - t : 0),
            (I.networkDelay = i) > I._opt.networkDelay) &&
            I._opt.playType === he &&
            (I.debug.warn(
              'worker',
              `calcNetworkDelay now dts:${e}, start dts is ${y} vs start is ${t},local diff is ${r} ,delay is ` +
                i
            ),
            postMessage({ cmd: $, type: 'networkDelayTimeout', value: i }));
        },
        calcIframeIntervalTimestamp: function (e) {
          null === x
            ? (x = e)
            : x < e &&
              ((S = e - x),
              postMessage({ cmd: 'iframeIntervalTs', value: S }),
              (x = e));
        },
        canVisibilityDecodeNotDrop: function () {
          return I._opt.visibility && f * p <= 2073600;
        },
        isPlaybackCacheBeforeDecodeForFpsRender: function () {
          return I.isPlayback && I._opt.playbackIsCacheBeforeDecodeForFpsRender;
        },
        isPlaybackOnlyDecodeIFrame: function () {
          return (
            I._opt.playbackRate >= I._opt.playbackForwardMaxRateDecodeIFrame
          );
        },
        playbackUpdatePlaybackRate: function () {
          I.clearBuffer(!0);
        },
        onOffscreenCanvasWebglContextLost: function (e) {
          I.debug.error(
            'worker',
            'handleOffscreenCanvasWebglContextLost and next try to create webgl'
          ),
            e.preventDefault(),
            (k = !0),
            I.webglObj.destroy(),
            (I.webglObj = null),
            (I.offscreenCanvasGL = null),
            setTimeout(() => {
              (I.offscreenCanvasGL = I.offscreenCanvas.getContext('webgl')),
                I.offscreenCanvasGL &&
                I.offscreenCanvasGL.getContextAttributes().stencil
                  ? ((I.webglObj = le(
                      I.offscreenCanvasGL,
                      I._opt.openWebglAlignment
                    )),
                    (k = !1))
                  : I.debug.error(
                      'worker',
                      'handleOffscreenCanvasWebglContextLost, stencil is false'
                    );
            }, 500);
        },
        onOffscreenCanvasWebglContextRestored: function (e) {
          I.debug.log('worker', 'handleOffscreenCanvasWebglContextRestored'),
            e.preventDefault();
        },
        videoInfo: function (e, t, r) {
          postMessage({ cmd: ce, code: e }),
            postMessage({ cmd: fe, w: t, h: r }),
            (f = t),
            (p = r),
            I.useOffscreen() &&
              ((I.offscreenCanvas = new OffscreenCanvas(t, r)),
              (I.offscreenCanvasGL = I.offscreenCanvas.getContext('webgl')),
              (I.webglObj = le(I.offscreenCanvasGL, I._opt.openWebglAlignment)),
              I.offscreenCanvas.addEventListener(
                'webglcontextlost',
                I.onOffscreenCanvasWebglContextLost,
                !1
              ),
              I.offscreenCanvas.addEventListener(
                'webglcontextrestored',
                I.onOffscreenCanvasWebglContextRestored,
                !1
              ));
        },
        audioInfo: function (e, t, r) {
          postMessage({ cmd: 'audioCode', code: e }),
            postMessage({
              cmd: 'initAudio',
              sampleRate: t,
              channels: r,
              depth: O,
            }),
            (U = r);
        },
        yuvData: function (e, t) {
          if (I.isDestroyed)
            I.debug.log('worker', 'yuvData, decoder is destroyed and return');
          else {
            var r,
              i = (f * p * 3) / 2,
              e = l.HEAPU8.subarray(e, e + i),
              i = new Uint8Array(e);
            if (((w = null), I.useOffscreen()))
              try {
                k ||
                  (I.webglObj.renderYUV(f, p, i),
                  (r = I.offscreenCanvas.transferToImageBitmap()),
                  postMessage({ cmd: V, buffer: r, delay: I.delay, ts: t }, [
                    r,
                  ]));
              } catch (e) {
                I.debug.error(
                  'worker',
                  'yuvData, transferToImageBitmap error is',
                  e
                );
              }
            else
              postMessage({ cmd: V, output: i, delay: I.delay, ts: t }, [
                i.buffer,
              ]);
          }
        },
        pcmData: function (s, n, a) {
          if (I.isDestroyed)
            I.debug.log('worker', 'pcmData, decoder is destroyed and return');
          else {
            let t = n,
              r = [],
              e = 0,
              i = I._opt.audioBufferSize;
            for (let e = 0; e < 2; e++) {
              var o = l.HEAPU32[(s >> 2) + e] >> 2;
              r[e] = l.HEAPF32.subarray(o, o + t);
            }
            if (E) {
              if (!(t >= (n = i - E)))
                return (
                  (E += t),
                  (d[0] = Float32Array.of(...d[0], ...r[0])),
                  void (2 == U && (d[1] = Float32Array.of(...d[1], ...r[1])))
                );
              (v[0] = Float32Array.of(...d[0], ...r[0].subarray(0, n))),
                2 == U &&
                  (v[1] = Float32Array.of(...d[1], ...r[1].subarray(0, n))),
                postMessage(
                  { cmd: pe, buffer: v, ts: a },
                  v.map((e) => e.buffer)
                ),
                (e = n),
                (t -= n);
            }
            for (E = t; E >= i; E -= i)
              (v[0] = r[0].slice(e, (e += i))),
                2 == U && (v[1] = r[1].slice(e - i, e)),
                postMessage(
                  { cmd: pe, buffer: v, ts: a },
                  v.map((e) => e.buffer)
                );
            E && ((d[0] = r[0].slice(e)), 2 == U) && (d[1] = r[1].slice(e));
          }
        },
        errorInfo: function (e) {
          null === w && (w = J());
          var t = J(),
            r =
              ((r = 0 < S ? 2 * S : 5e3),
              Math.max(Math.min(r, Math.max(1e3, 5e3)), Math.min(1e3, 5e3))),
            t = t - w;
          I.debug.log(
            'worker',
            'errorInfo()',
            'iframeIntervalTimestamp is',
            S,
            'diff is ',
            t,
            'max diff is ',
            r,
            'wasm decode error:',
            e.desc
          ),
            r < t &&
              (I.debug.warn(
                'worker',
                'errorInfo() emit simdDecodeError and replay'
              ),
              (N = !0),
              postMessage({ cmd: 'simdDecodeError' }));
        },
        sendWebsocketMessage: function (e) {
          r
            ? 1 === r.readyState
              ? r.send(e)
              : I.debug.error('worker', 'socket is not open')
            : I.debug.error('worker', 'socket is null');
        },
        timeEnd: function () {},
        postStreamToMain(e, t) {
          postMessage({ cmd: 'tempStream', type: t, buffer: e }, [e.buffer]);
        },
      },
      P = ((I.debug = new ke(I)), null),
      L = (l.AudioDecoder && (P = new l.AudioDecoder(I)), null);
    l.VideoDecoder && (L = new l.VideoDecoder(I)),
      postMessage({ cmd: 'init' }),
      (self.onmessage = function (e) {
        var t = e.data;
        switch (t.cmd) {
          case 'init':
            try {
              I._opt = Object.assign(I._opt, JSON.parse(t.opt));
            } catch (e) {}
            I.init();
            break;
          case 'decode':
            I.pushBuffer(t.buffer, t.options);
            break;
          case 'audioDecode':
            I.decodeAudio(t.buffer, t.ts);
            break;
          case 'videoDecode':
            I.decodeVideo(t.buffer, t.ts, t.isIFrame);
            break;
          case 'clearBuffer':
            I.clearBuffer(t.needClear);
            break;
          case 'fetchStream':
            I.fetchStream(t.url, JSON.parse(t.opt));
            break;
          case 'close':
            I.close();
            break;
          case 'updateConfig':
            I.debug.log('worker', 'updateConfig', t.key, t.value),
              (I._opt[t.key] = t.value),
              'playbackRate' === t.key &&
                (I.playbackUpdatePlaybackRate(),
                I.isPlaybackCacheBeforeDecodeForFpsRender()) &&
                I.playbackCacheLoop();
            break;
          case 'sendWsMessage':
            I.sendWebsocketMessage(t.message);
        }
      });
  }
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    }),
    (_.postRun = function () {
      _t(_);
    });
});
