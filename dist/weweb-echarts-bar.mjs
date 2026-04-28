import { defineComponent as S_, shallowRef as jn, inject as Jn, toRefs as x_, computed as Ar, getCurrentInstance as b_, watch as ta, watchEffect as kf, onMounted as T_, onBeforeUnmount as C_, h as Bf, isRef as D_, unref as md, nextTick as M_, openBlock as A_, createBlock as E_ } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var wu = function(r, t) {
  return wu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, wu(r, t);
};
function B(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  wu(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var L_ = function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
}(), P_ = function() {
  function r() {
    this.browser = new L_(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), Xe = new P_();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (Xe.wxa = !0, Xe.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? Xe.worker = !0 : !Xe.hasGlobalWindow || "Deno" in window ? (Xe.node = !0, Xe.svgSupported = !0) : I_(navigator.userAgent, Xe);
function I_(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
const $ = Xe;
var Ml = 12, R_ = "sans-serif", Fr = Ml + "px " + R_, O_ = 20, N_ = 100, k_ = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function B_(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - O_) / N_;
    t[i] = n;
  }
  return t;
}
var F_ = B_(k_), Pi = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = Pi.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || Fr), r.measureText(e);
      e = e || "", i = i || Fr;
      var a = /((?:\d+)?\.?\d*)px/.exec(i), o = a && +a[1] || Ml, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = F_[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  }
}, wd = Ri([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), Sd = Ri([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), Ii = Object.prototype.toString, Do = Array.prototype, z_ = Do.forEach, V_ = Do.filter, Al = Do.slice, H_ = Do.map, Ff = (function() {
}).constructor, ea = Ff ? Ff.prototype : null, El = "__proto__", G_ = 2311;
function xd() {
  return G_++;
}
function Rr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function Q(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Ii.call(r);
  if (e === "[object Array]") {
    if (!yn(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = Q(r[i]);
    }
  } else if (Sd[e]) {
    if (!yn(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!wd[e] && !yn(r) && !bi(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== El && (t[o] = Q(r[o]));
  }
  return t;
}
function et(r, t, e) {
  if (!V(t) || !V(r))
    return e ? Q(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== El) {
      var n = r[i], a = t[i];
      V(a) && V(n) && !k(a) && !k(n) && !bi(a) && !bi(n) && !zf(a) && !zf(n) && !yn(a) && !yn(n) ? et(n, a, e) : (e || !(i in r)) && (r[i] = Q(t[i]));
    }
  return r;
}
function O(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== El && (r[e] = t[e]);
  return r;
}
function at(r, t, e) {
  for (var i = lt(t), n = 0, a = i.length; n < a; n++) {
    var o = i[n];
    (e ? t[o] != null : r[o] == null) && (r[o] = t[o]);
  }
  return r;
}
function it(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function W_(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var n in e)
    e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  r.prototype.constructor = r, r.superClass = t;
}
function Me(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else
    at(r, t, e);
}
function Gt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function C(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === z_)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function W(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Ll(r);
  if (r.map && r.map === H_)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function Ri(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function St(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Ll(r);
  if (r.filter && r.filter === V_)
    return r.filter(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    t.call(e, r[n], n, r) && i.push(r[n]);
  return i;
}
function lt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function U_(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(Al.call(arguments)));
  };
}
var ft = ea && Y(ea.bind) ? ea.call.bind(ea.bind) : U_;
function dt(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(Al.call(arguments)));
  };
}
function k(r) {
  return Array.isArray ? Array.isArray(r) : Ii.call(r) === "[object Array]";
}
function Y(r) {
  return typeof r == "function";
}
function F(r) {
  return typeof r == "string";
}
function eo(r) {
  return Ii.call(r) === "[object String]";
}
function ht(r) {
  return typeof r == "number";
}
function V(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function zf(r) {
  return !!wd[Ii.call(r)];
}
function Nt(r) {
  return !!Sd[Ii.call(r)];
}
function bi(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function Mo(r) {
  return r.colorStops != null;
}
function Y_(r) {
  return r.image != null;
}
function $_(r) {
  return Ii.call(r) === "[object RegExp]";
}
function Pn(r) {
  return r !== r;
}
function zr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++)
    if (r[e] != null)
      return r[e];
}
function X(r, t) {
  return r ?? t;
}
function di(r, t, e) {
  return r ?? t ?? e;
}
function Ll(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return Al.apply(r, t);
}
function bd(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function Z(r, t) {
  if (!r)
    throw new Error(t);
}
function be(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Td = "__ec_primitive__";
function Su(r) {
  r[Td] = !0;
}
function yn(r) {
  return r[Td];
}
var X_ = function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return lt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var i in e)
      e.hasOwnProperty(i) && t(e[i], i);
  }, r;
}(), Cd = typeof Map == "function";
function Z_() {
  return Cd ? /* @__PURE__ */ new Map() : new X_();
}
var q_ = function() {
  function r(t) {
    var e = k(t);
    this.data = Z_();
    var i = this;
    t instanceof r ? t.each(n) : t && C(t, n);
    function n(a, o) {
      e ? i.set(a, o) : i.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(i, n) {
      t.call(e, i, n);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return Cd ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function q(r) {
  return new q_(r);
}
function K_(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function Ao(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && O(e, t), e;
}
function Dd(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Vr(r, t) {
  return r.hasOwnProperty(t);
}
function Ht() {
}
var Q_ = 180 / Math.PI;
function Oi(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function j_(r) {
  return [r[0], r[1]];
}
function Vf(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function J_(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function tm(r) {
  return Math.sqrt(em(r));
}
function em(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function Jo(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function rm(r, t) {
  var e = tm(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function xu(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var im = xu;
function nm(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var pi = nm;
function oe(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function fi(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function hi(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var $r = function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), am = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new $r(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new $r(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new $r(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new $r(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new $r(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new $r(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}();
const om = am;
var sm = function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, i, n) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (n = i, i = e, e = null), !i || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === i)
        return this;
    var u = {
      h: i,
      query: e,
      ctx: n || this,
      callAtLast: i.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (i[t]) {
        for (var n = [], a = 0, o = i[t].length; a < o; a++)
          i[t][a].h !== e && n.push(i[t][a]);
        i[t] = n;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else
      delete i[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = n.length, u = 0; u < s; u++) {
        var l = n[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, e[0]);
              break;
            case 2:
              l.h.call(l.ctx, e[0], e[1]);
              break;
            default:
              l.h.apply(l.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = e[o - 1], u = n.length, l = 0; l < u; l++) {
        var f = n[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
}();
const Ae = sm;
var um = Math.log(2);
function bu(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~n) / um);
    return r[e][u];
  }
  for (var l = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n || (h += (v % 2 ? -1 : 1) * r[e][c] * bu(r, t - 1, f, l, n | d, a), v++);
  }
  return a[o] = h, h;
}
function Hf(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = bu(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * bu(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var Gf = "___zrEVENTSAVED", ts = [];
function lm(r, t, e, i, n) {
  return Tu(ts, t, i, n, !0) && Tu(r, e, ts[0], ts[1]);
}
function Tu(r, t, e, i, n) {
  if (t.getBoundingClientRect && $.domSupported && !Md(t)) {
    var a = t[Gf] || (t[Gf] = {}), o = fm(t, a), s = hm(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function fm(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[u] + ":0",
      n[l] + ":0",
      i[1 - u] + ":auto",
      n[1 - l] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return e;
}
function hm(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && n ? n : (t.srcCoords = o, t[i] = e ? Hf(s, o) : Hf(o, s));
}
function Md(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var cm = /([&<>"'])/g, vm = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Ft(r) {
  return r == null ? "" : (r + "").replace(cm, function(t, e) {
    return vm[e];
  });
}
var dm = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, es = [], pm = $.browser.firefox && +$.browser.version.split(".")[0] < 39;
function Cu(r, t, e, i) {
  return e = e || {}, i ? Wf(r, t, e) : pm && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Wf(r, t, e), e;
}
function Wf(r, t, e) {
  if ($.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (Md(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (Tu(es, r, i, n)) {
      e.zrX = es[0], e.zrY = es[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Pl(r) {
  return r || window.event;
}
function Jt(r, t, e) {
  if (t = Pl(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Cu(r, o, t, e);
  } else {
    Cu(r, t, t, e);
    var a = gm(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && dm.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function gm(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function ym(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function _m(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var Ad = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, mm = function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, i) {
    return this._doTrack(t, e, i), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, i) {
    var n = t.touches;
    if (n) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = n.length; o < s; o++) {
        var u = n[o], l = Cu(i, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in rs)
      if (rs.hasOwnProperty(e)) {
        var i = rs[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
}();
function Uf(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function wm(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var rs = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = Uf(i) / Uf(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = wm(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function gi() {
  return [1, 0, 0, 1, 0, 0];
}
function Il(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function Sm(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function yi(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function Du(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function Rl(r, t, e, i) {
  i === void 0 && (i = [0, 0]);
  var n = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = n * h + s * f, r[1] = -n * f + s * h, r[2] = a * h + u * f, r[3] = -a * f + h * u, r[4] = h * (o - i[0]) + f * (l - i[1]) + i[0], r[5] = h * (l - i[1]) - f * (o - i[0]) + i[1], r;
}
function xm(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function Ol(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * i;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -i * u, r[3] = e * u, r[4] = (i * s - o * n) * u, r[5] = (a * n - e * s) * u, r) : null;
}
var bm = function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(e * e + i * i);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, i = this.y;
      return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, i) {
    t.x = e, t.y = i;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, i) {
    t.x = e.x + i.x, t.y = e.y + i.y;
  }, r.sub = function(t, e, i) {
    t.x = e.x - i.x, t.y = e.y - i.y;
  }, r.scale = function(t, e, i) {
    t.x = e.x * i, t.y = e.y * i;
  }, r.scaleAndAdd = function(t, e, i, n) {
    t.x = e.x + i.x * n, t.y = e.y + i.y * n;
  }, r.lerp = function(t, e, i, n) {
    var a = 1 - n;
    t.x = a * e.x + n * i.x, t.y = a * e.y + n * i.y;
  }, r;
}();
const nt = bm;
var ra = Math.min, ia = Math.max, or = new nt(), sr = new nt(), ur = new nt(), lr = new nt(), Vi = new nt(), Hi = new nt(), Tm = function() {
  function r(t, e, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }
  return r.prototype.union = function(t) {
    var e = ra(t.x, this.x), i = ra(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = ia(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = ia(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, n = t.height / e.height, a = gi();
    return Du(a, a, [-e.x, -e.y]), xm(a, a, [i, n]), Du(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < u || l < n || s < f || h < o);
    if (e) {
      var v = 1 / 0, d = 0, y = Math.abs(a - u), p = Math.abs(l - n), g = Math.abs(s - f), _ = Math.abs(h - o), m = Math.min(y, p), w = Math.min(g, _);
      a < u || l < n ? m > d && (d = m, y < p ? nt.set(Hi, -y, 0) : nt.set(Hi, p, 0)) : m < v && (v = m, y < p ? nt.set(Vi, y, 0) : nt.set(Vi, -p, 0)), s < f || h < o ? w > d && (d = w, g < _ ? nt.set(Hi, 0, -g) : nt.set(Hi, 0, _)) : m < v && (v = m, g < _ ? nt.set(Vi, 0, g) : nt.set(Vi, 0, -_));
    }
    return e && nt.copy(e, c ? Vi : Hi), c;
  }, r.prototype.contain = function(t, e) {
    var i = this;
    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    r.copy(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t.x, t.y, t.width, t.height);
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
  }, r.applyTransform = function(t, e, i) {
    if (!i) {
      t !== e && r.copy(t, e);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var n = i[0], a = i[3], o = i[4], s = i[5];
      t.x = e.x * n + o, t.y = e.y * a + s, t.width = e.width * n, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    or.x = ur.x = e.x, or.y = lr.y = e.y, sr.x = lr.x = e.x + e.width, sr.y = ur.y = e.y + e.height, or.transform(i), lr.transform(i), sr.transform(i), ur.transform(i), t.x = ra(or.x, sr.x, ur.x, lr.x), t.y = ra(or.y, sr.y, ur.y, lr.y);
    var u = ia(or.x, sr.x, ur.x, lr.x), l = ia(or.y, sr.y, ur.y, lr.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r;
}();
const rt = Tm;
var Ed = "silent";
function Cm(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: Dm
  };
}
function Dm() {
  Ad(this.event);
}
var Mm = function(r) {
  B(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(Ae), Gi = function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), Am = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], is = new rt(0, 0, 0, 0), Ld = function(r) {
  B(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new Gi(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new Mm(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new om(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (C(Am, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = Pd(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Gi(i, n) : this.findHover(i, n), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new Gi(0, 0);
  }, t.prototype.dispatch = function(e, i) {
    var n = this[e];
    n && n.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var i = this.proxy;
    i.setCursor && i.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, i, n) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + i, s = Cm(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new Gi(e, i);
    if (Yf(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new rt(e - l, i - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== n && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (is.copy(c.getBoundingRect()), c.transform && is.applyTransform(c.transform), is.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, y = Math.PI * 2, p = 0; p < l; p += v)
          for (var g = 0; g < y; g += d) {
            var _ = e + p * Math.cos(g), m = i + p * Math.sin(g);
            if (Yf(s, o, _, m, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new mm());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new Gi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(Ae);
C(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Ld.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = Pd(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || im(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function Em(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, n = void 0, a = !1; i; ) {
      if (i.ignoreClip && (a = !0), !a) {
        var o = i.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      i.silent && (n = !0);
      var s = i.__hostTarget;
      i = s || i.parent;
    }
    return n ? Ed : !0;
  }
  return !1;
}
function Yf(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = Em(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== Ed)) {
      t.target = o;
      break;
    }
  }
}
function Pd(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
const Lm = Ld;
var Id = 32, Wi = 7;
function Pm(r) {
  for (var t = 0; r >= Id; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function $f(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    Im(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function Im(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function Xf(r, t, e, i, n) {
  for (i === t && i++; i < e; i++) {
    for (var a = r[i], o = t, s = i, u; o < s; )
      u = o + s >>> 1, n(a, r[u]) < 0 ? s = u : o = u + 1;
    var l = i - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; )
          r[o + l] = r[o + l - 1], l--;
    }
    r[o] = a;
  }
}
function ns(r, t, e, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + n]) > 0) {
    for (s = i - n; u < s && a(r, t[e + n + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  } else {
    for (s = n + 1; u < s && a(r, t[e + n - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function as(r, t, e, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + n]) < 0) {
    for (s = n + 1; u < s && a(r, t[e + n - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  } else {
    for (s = i - n; u < s && a(r, t[e + n + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function Rm(r, t) {
  var e = Wi, i, n, a = 0, o = [];
  i = [], n = [];
  function s(v, d) {
    i[a] = v, n[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && n[v - 1] <= n[v] + n[v + 1] || v >= 2 && n[v - 2] <= n[v] + n[v - 1])
        n[v - 1] < n[v + 1] && v--;
      else if (n[v] > n[v + 1])
        break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && n[v - 1] < n[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = i[v], y = n[v], p = i[v + 1], g = n[v + 1];
    n[v] = y + g, v === a - 3 && (i[v + 1] = i[v + 2], n[v + 1] = n[v + 2]), a--;
    var _ = as(r[p], r, d, y, 0, t);
    d += _, y -= _, y !== 0 && (g = ns(r[d + y - 1], r, p, g, g - 1, t), g !== 0 && (y <= g ? h(d, y, p, g) : c(d, y, p, g)));
  }
  function h(v, d, y, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[v + g];
    var _ = 0, m = y, w = v;
    if (r[w++] = r[m++], --p === 0) {
      for (g = 0; g < d; g++)
        r[w + g] = o[_ + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[_];
      return;
    }
    for (var S = e, x, b, D; ; ) {
      x = 0, b = 0, D = !1;
      do
        if (t(r[m], o[_]) < 0) {
          if (r[w++] = r[m++], b++, x = 0, --p === 0) {
            D = !0;
            break;
          }
        } else if (r[w++] = o[_++], x++, b = 0, --d === 1) {
          D = !0;
          break;
        }
      while ((x | b) < S);
      if (D)
        break;
      do {
        if (x = as(r[m], o, _, d, 0, t), x !== 0) {
          for (g = 0; g < x; g++)
            r[w + g] = o[_ + g];
          if (w += x, _ += x, d -= x, d <= 1) {
            D = !0;
            break;
          }
        }
        if (r[w++] = r[m++], --p === 0) {
          D = !0;
          break;
        }
        if (b = ns(o[_], r, m, p, 0, t), b !== 0) {
          for (g = 0; g < b; g++)
            r[w + g] = r[m + g];
          if (w += b, m += b, p -= b, p === 0) {
            D = !0;
            break;
          }
        }
        if (r[w++] = o[_++], --d === 1) {
          D = !0;
          break;
        }
        S--;
      } while (x >= Wi || b >= Wi);
      if (D)
        break;
      S < 0 && (S = 0), S += 2;
    }
    if (e = S, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[_];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[w + g] = o[_ + g];
    }
  }
  function c(v, d, y, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = r[y + g];
    var _ = v + d - 1, m = p - 1, w = y + p - 1, S = 0, x = 0;
    if (r[w--] = r[_--], --d === 0) {
      for (S = w - (p - 1), g = 0; g < p; g++)
        r[S + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, _ -= d, x = w + 1, S = _ + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[S + g];
      r[w] = o[m];
      return;
    }
    for (var b = e; ; ) {
      var D = 0, M = 0, A = !1;
      do
        if (t(o[m], r[_]) < 0) {
          if (r[w--] = r[_--], D++, M = 0, --d === 0) {
            A = !0;
            break;
          }
        } else if (r[w--] = o[m--], M++, D = 0, --p === 1) {
          A = !0;
          break;
        }
      while ((D | M) < b);
      if (A)
        break;
      do {
        if (D = d - as(o[m], r, v, d, d - 1, t), D !== 0) {
          for (w -= D, _ -= D, d -= D, x = w + 1, S = _ + 1, g = D - 1; g >= 0; g--)
            r[x + g] = r[S + g];
          if (d === 0) {
            A = !0;
            break;
          }
        }
        if (r[w--] = o[m--], --p === 1) {
          A = !0;
          break;
        }
        if (M = p - ns(r[_], o, 0, p, p - 1, t), M !== 0) {
          for (w -= M, m -= M, p -= M, x = w + 1, S = m + 1, g = 0; g < M; g++)
            r[x + g] = o[S + g];
          if (p <= 1) {
            A = !0;
            break;
          }
        }
        if (r[w--] = r[_--], --d === 0) {
          A = !0;
          break;
        }
        b--;
      } while (D >= Wi || M >= Wi);
      if (A)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (e = b, e < 1 && (e = 1), p === 1) {
      for (w -= d, _ -= d, x = w + 1, S = _ + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[S + g];
      r[w] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (S = w - (p - 1), g = 0; g < p; g++)
        r[S + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Ha(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < Id) {
      a = $f(r, e, i, t), Xf(r, e, i, e + a, t);
      return;
    }
    var o = Rm(r, t), s = Pm(n);
    do {
      if (a = $f(r, e, i, t), a < s) {
        var u = n;
        u > s && (u = s), Xf(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Xt = 1, ln = 2, ui = 4, Zf = !1;
function os() {
  Zf || (Zf = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function qf(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var Om = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = qf;
  }
  return r.prototype.traverse = function(t, e) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(e), i;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++)
      this._updateAndAddDisplayable(e[n], null, t);
    i.length = this._displayListLen, Ha(i, qf);
  }, r.prototype._updateAndAddDisplayable = function(t, e, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var n = t.getClipPath();
      if (t.ignoreClip)
        e = null;
      else if (n) {
        e ? e = e.slice() : e = [];
        for (var a = n, o = t; a; )
          a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
          var l = s[u];
          t.__dirty && (l.__dirty |= Xt), this._updateAndAddDisplayable(l, e, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (os(), f.z = 0), isNaN(f.z2) && (os(), f.z2 = 0), isNaN(f.zlevel) && (os(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, e, i);
      var c = t.getTextGuideLine();
      c && this._updateAndAddDisplayable(c, e, i);
      var v = t.getTextContent();
      v && this._updateAndAddDisplayable(v, e, i);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, i = t.length; e < i; e++)
        this.delRoot(t[e]);
      return;
    }
    var n = it(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
}();
const Nm = Om;
var Rd;
Rd = $.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
const Mu = Rd;
var Ga = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - Ga.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? Ga.bounceIn(r * 2) * 0.5 : Ga.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
};
const Od = Ga;
var na = Math.pow, je = Math.sqrt, ro = 1e-8, Nd = 1e-4, Kf = je(3), aa = 1 / 3, xe = Oi(), re = Oi(), _i = Oi();
function Ke(r) {
  return r > -ro && r < ro;
}
function kd(r) {
  return r > ro || r < -ro;
}
function wt(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function Qf(r, t, e, i, n) {
  var a = 1 - n;
  return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n);
}
function Bd(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), u = 3 * (t - r), l = r - n, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (Ke(f) && Ke(h))
    if (Ke(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var y = h * h - 4 * f * c;
    if (Ke(y)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (y > 0) {
      var _ = je(y), m = f * s + 1.5 * o * (-h + _), w = f * s + 1.5 * o * (-h - _);
      m < 0 ? m = -na(-m, aa) : m = na(m, aa), w < 0 ? w = -na(-w, aa) : w = na(w, aa);
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var S = (2 * f * s - 3 * o * h) / (2 * je(f * f * f)), x = Math.acos(S) / 3, b = je(f), D = Math.cos(x), d = (-s - 2 * b * D) / (3 * o), g = (-s + b * (D + Kf * Math.sin(x))) / (3 * o), M = (-s + b * (D - Kf * Math.sin(x))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), M >= 0 && M <= 1 && (a[v++] = M);
    }
  }
  return v;
}
function Fd(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (Ke(o)) {
    if (kd(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Ke(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = je(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function io(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, u = (i - e) * n + e, l = (s - o) * n + o, f = (u - s) * n + s, h = (f - l) * n + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = i;
}
function km(r, t, e, i, n, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, y, p, g;
  xe[0] = u, xe[1] = l;
  for (var _ = 0; _ < 1; _ += 0.05)
    re[0] = wt(r, e, n, o, _), re[1] = wt(t, i, a, s, _), p = pi(xe, re), p < v && (h = _, v = p);
  v = 1 / 0;
  for (var m = 0; m < 32 && !(c < Nd); m++)
    d = h - c, y = h + c, re[0] = wt(r, e, n, o, d), re[1] = wt(t, i, a, s, d), p = pi(re, xe), d >= 0 && p < v ? (h = d, v = p) : (_i[0] = wt(r, e, n, o, y), _i[1] = wt(t, i, a, s, y), g = pi(_i, xe), y <= 1 && g < v ? (h = y, v = g) : c *= 0.5);
  return f && (f[0] = wt(r, e, n, o, h), f[1] = wt(t, i, a, s, h)), je(v);
}
function Bm(r, t, e, i, n, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, y = wt(r, e, n, o, d), p = wt(t, i, a, s, d), g = y - l, _ = p - f;
    h += Math.sqrt(g * g + _ * _), l = y, f = p;
  }
  return h;
}
function Ct(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function jf(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function Fm(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, u = 0;
  if (Ke(a)) {
    if (kd(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Ke(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l);
    } else if (f > 0) {
      var h = je(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function zd(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function no(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function zm(r, t, e, i, n, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  xe[0] = o, xe[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    re[0] = Ct(r, e, n, c), re[1] = Ct(t, i, a, c);
    var v = pi(xe, re);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Nd); d++) {
    var y = l - f, p = l + f;
    re[0] = Ct(r, e, n, y), re[1] = Ct(t, i, a, y);
    var v = pi(re, xe);
    if (y >= 0 && v < h)
      l = y, h = v;
    else {
      _i[0] = Ct(r, e, n, p), _i[1] = Ct(t, i, a, p);
      var g = pi(_i, xe);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return u && (u[0] = Ct(r, e, n, l), u[1] = Ct(t, i, a, l)), je(h);
}
function Vm(r, t, e, i, n, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = Ct(r, e, n, c), d = Ct(t, i, a, c), y = v - s, p = d - u;
    l += Math.sqrt(y * y + p * p), s = v, u = d;
  }
  return l;
}
var Hm = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Vd(r) {
  var t = r && Hm.exec(r);
  if (t) {
    var e = t[1].split(","), i = +be(e[0]), n = +be(e[1]), a = +be(e[2]), o = +be(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : Bd(0, i, a, 1, u, s) && wt(0, n, o, 1, s[0]);
    };
  }
}
var Gm = function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Ht, this.ondestroy = t.ondestroy || Ht, this.onrestart = t.onrestart || Ht, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var i = this._life, n = t - this._startTime - this._pausedTime, a = n / i;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = n % i;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = Y(t) ? t : Od[t] || Vd(t);
  }, r;
}();
const Wm = Gm;
var Hd = function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), Um = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new Hd(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
}(), Ym = function() {
  function r(t) {
    this._list = new Um(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = i.head;
        i.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new Hd(e), s.key = t, i.insertEntry(s), n[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], i = this._list;
    if (e != null)
      return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
}();
const Yn = Ym;
var Jf = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function _n(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function th(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function ss(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? _n(parseFloat(t) / 100 * 255) : _n(parseInt(t, 10));
}
function mn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? th(parseFloat(t) / 100) : th(parseFloat(t));
}
function us(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function jt(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function Au(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var Gd = new Yn(20), oa = null;
function Xr(r, t) {
  oa && Au(oa, t), oa = Gd.put(r, oa || t.slice());
}
function Or(r, t) {
  if (r) {
    t = t || [];
    var e = Gd.get(r);
    if (e)
      return Au(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in Jf)
      return Au(t, Jf[i]), Xr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          jt(t, 0, 0, 0, 1);
          return;
        }
        return jt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), Xr(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          jt(t, 0, 0, 0, 1);
          return;
        }
        return jt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), Xr(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o), l = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? jt(t, +l[0], +l[1], +l[2], 1) : jt(t, 0, 0, 0, 1);
          f = mn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return jt(t, ss(l[0]), ss(l[1]), ss(l[2]), l.length === 3 ? f : mn(l[3])), Xr(r, t), t;
          jt(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            jt(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = mn(l[3]), eh(l, t), Xr(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            jt(t, 0, 0, 0, 1);
            return;
          }
          return eh(l, t), Xr(r, t), t;
        default:
          return;
      }
    }
    jt(t, 0, 0, 0, 1);
  }
}
function eh(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = mn(r[1]), n = mn(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], jt(t, _n(us(o, a, e + 1 / 3) * 255), _n(us(o, a, e) * 255), _n(us(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function rh(r, t) {
  var e = Or(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return Nl(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function Nl(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function ao(r, t) {
  var e = Or(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var ih = new Yn(100);
function nh(r) {
  if (F(r)) {
    var t = ih.get(r);
    return t || (t = rh(r, -0.1), ih.put(r, t)), t;
  } else if (Mo(r)) {
    var e = O({}, r);
    return e.colorStops = W(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: rh(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function $m(r) {
  return r.type === "linear";
}
function Xm(r) {
  return r.type === "radial";
}
(function() {
  return $.hasGlobalWindow && Y(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && Rr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Eu = Array.prototype.slice;
function Ie(r, t, e) {
  return (t - r) * e + r;
}
function ls(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = Ie(t[a], e[a], i);
  return r;
}
function Zm(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = Ie(t[o][s], e[o][s], i);
  }
  return r;
}
function sa(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function ah(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function qm(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Km(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var u = a; u < o; u++)
          i.push(e === 1 ? n[u] : Eu.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (e === 1)
        isNaN(i[u]) && (i[u] = n[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function Wa(r) {
  if (Gt(r)) {
    var t = r.length;
    if (Gt(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(Eu.call(r[i]));
      return e;
    }
    return Eu.call(r);
  }
  return r;
}
function Ua(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Qm(r) {
  return Gt(r && r[0]) ? 2 : 1;
}
var ua = 0, Ya = 1, Wd = 2, fn = 3, Lu = 4, Pu = 5, oh = 6;
function sh(r) {
  return r === Lu || r === Pu;
}
function la(r) {
  return r === Ya || r === Wd;
}
var Ui = [0, 0, 0, 0], jm = function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, i) {
    this._needsSort = !0;
    var n = this.keyframes, a = n.length, o = !1, s = oh, u = e;
    if (Gt(e)) {
      var l = Qm(e);
      s = l, (l === 1 && !ht(e[0]) || l === 2 && !ht(e[0][0])) && (o = !0);
    } else if (ht(e) && !Pn(e))
      s = ua;
    else if (F(e))
      if (!isNaN(+e))
        s = ua;
      else {
        var f = Or(e);
        f && (u = f, s = fn);
      }
    else if (Mo(e)) {
      var h = O({}, u);
      h.colorStops = W(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Or(v.color)
        };
      }), $m(e) ? s = Lu : Xm(e) && (s = Pu), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === oh) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return i && (c.easing = i, c.easingFunc = Y(i) ? i : Od[i] || Vd(i)), n.push(c), c;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(y, p) {
      return y.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, u = la(n), l = sh(n), f = 0; f < a; f++) {
      var h = i[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? Km(c, v, n) : l && qm(c.colorStops, v.colorStops));
    }
    if (!s && n !== Pu && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === ua ? i[f].additiveValue = i[f].value - d : n === fn ? i[f].additiveValue = sa([], i[f].value, d, -1) : la(n) && (i[f].additiveValue = n === Ya ? sa([], i[f].value, d, -1) : ah([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === fn, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var y = c(h + 1, s - 1);
          for (f = y; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = c(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = c(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = e;
        var p = d.percent - v.percent, g = p === 0 ? 1 : c((e - v.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var _ = i ? this._additiveValue : l ? Ui : t[u];
        if ((la(a) || l) && !_ && (_ = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (la(a))
          a === Ya ? ls(_, v[n], d[n], g) : Zm(_, v[n], d[n], g);
        else if (sh(a)) {
          var m = v[n], w = d[n], S = a === Lu;
          t[u] = {
            type: S ? "linear" : "radial",
            x: Ie(m.x, w.x, g),
            y: Ie(m.y, w.y, g),
            colorStops: W(m.colorStops, function(b, D) {
              var M = w.colorStops[D];
              return {
                offset: Ie(b.offset, M.offset, g),
                color: Ua(ls([], b.color, M.color, g))
              };
            }),
            global: w.global
          }, S ? (t[u].x2 = Ie(m.x2, w.x2, g), t[u].y2 = Ie(m.y2, w.y2, g)) : t[u].r = Ie(m.r, w.r, g);
        } else if (l)
          ls(_, v[n], d[n], g), i || (t[u] = Ua(_));
        else {
          var x = Ie(v[n], d[n], g);
          i ? this._additiveValue = x : t[u] = x;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === ua ? t[i] = t[i] + n : e === fn ? (Or(t[i], Ui), sa(Ui, Ui, n, 1), t[i] = Ua(Ui)) : e === Ya ? sa(t[i], t[i], n, 1) : e === Wd && ah(t[i], t[i], n, 1);
  }, r;
}(), Jm = function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      Rr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = n, this._allowDiscrete = i;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, i) {
    return this.whenWithKeys(t, e, lt(e), i);
  }, r.prototype.whenWithKeys = function(t, e, i, n) {
    for (var a = this._tracks, o = 0; o < i.length; o++) {
      var s = i[o], u = a[s];
      if (!u) {
        u = a[s] = new jm(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === fn && l && (l = Ua(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, Wa(l), n), this._trackKeys.push(s);
      }
      u.addKeyframe(t, Wa(e[s]), n);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, i = 0; i < e; i++)
        t[i].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var i = 0; i < e.length; i++)
        e[i].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++)
      t[e[i]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, i = this._additiveAnimators;
    if (i)
      for (var n = 0; n < i.length; n++) {
        var a = i[n].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(n, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            i.push(s);
      }
      if (i.length || this._force) {
        var c = new Wm({
          life: n,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var y = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  y = !0;
                  break;
                }
              y || (e._additiveAnimators = null);
            }
            for (var p = 0; p < i.length; p++)
              i[p].step(e._target, v);
            var g = e._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](e._target, v);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return W(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
      var o = i[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < n.length; a++)
      if (!i[n[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, i) {
    if (t) {
      e = e || this._trackKeys;
      for (var n = 0; n < e.length; n++) {
        var a = e[n], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[i ? 0 : s.length - 1];
          u && (t[a] = Wa(u.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || lt(t);
    for (var i = 0; i < e.length; i++) {
      var n = e[i], a = this._tracks[n];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
}();
const kl = Jm;
function ci() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var t0 = function(r) {
  B(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, e = e || {}, i.stage = e.stage || {}, i;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var i = e.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var i = e.prev, n = e.next;
      i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var i = e.getClip();
    i && this.removeClip(i), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var i = ci() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (Mu(i), !e._paused && e.update());
    }
    Mu(i);
  }, t.prototype.start = function() {
    this._running || (this._time = ci(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = ci(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += ci() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var i = e.next;
      e.prev = e.next = e.animation = null, e = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, i) {
    i = i || {}, this.start();
    var n = new kl(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(Ae);
const e0 = t0;
var r0 = 300, fs = $.domSupported, hs = function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, i = W(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
}(), uh = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, lh = !1;
function Iu(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function i0(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function cs(r) {
  r && (r.zrByTouch = !0);
}
function n0(r, t) {
  return Jt(r.dom, new a0(r, t), !0);
}
function Ud(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var a0 = function() {
  function r(t, e) {
    this.stopPropagation = Ht, this.stopImmediatePropagation = Ht, this.preventDefault = Ht, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), ve = {
  mousedown: function(r) {
    r = Jt(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = Jt(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = Jt(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = Jt(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    Ud(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    lh = !0, r = Jt(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    lh || (r = Jt(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = Jt(this.dom, r), cs(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), ve.mousemove.call(this, r), ve.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = Jt(this.dom, r), cs(r), this.handler.processGesture(r, "change"), ve.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = Jt(this.dom, r), cs(r), this.handler.processGesture(r, "end"), ve.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < r0 && ve.click.call(this, r);
  },
  pointerdown: function(r) {
    ve.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Iu(r) || ve.mousemove.call(this, r);
  },
  pointerup: function(r) {
    ve.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Iu(r) || ve.mouseout.call(this, r);
  }
};
C(["click", "dblclick", "contextmenu"], function(r) {
  ve[r] = function(t) {
    t = Jt(this.dom, t), this.trigger(r, t);
  };
});
var Ru = {
  pointermove: function(r) {
    Iu(r) || Ru.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Ru.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function o0(r, t) {
  var e = t.domHandlers;
  $.pointerEventsSupported ? C(hs.pointer, function(i) {
    $a(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : ($.touchEventsSupported && C(hs.touch, function(i) {
    $a(t, i, function(n) {
      e[i].call(r, n), i0(t);
    });
  }), C(hs.mouse, function(i) {
    $a(t, i, function(n) {
      n = Pl(n), t.touching || e[i].call(r, n);
    });
  }));
}
function s0(r, t) {
  $.pointerEventsSupported ? C(uh.pointer, e) : $.touchEventsSupported || C(uh.mouse, e);
  function e(i) {
    function n(a) {
      a = Pl(a), Ud(r, a.target) || (a = n0(r, a), t.domHandlers[i].call(r, a));
    }
    $a(t, i, n, { capture: !0 });
  }
}
function $a(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, ym(r.domTarget, t, e, i);
}
function vs(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && _m(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var fh = function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), u0 = function(r) {
  B(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new fh(e, ve), fs && (n._globalHandlerScope = new fh(document, Ru)), o0(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    vs(this._localHandlerScope), fs && vs(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, fs && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? s0(this, i) : vs(i);
    }
  }, t;
}(Ae);
const l0 = u0;
var Yd = 1;
$.hasGlobalWindow && (Yd = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var oo = Yd, Ou = 0.4, Nu = "#333", ku = "#ccc", f0 = "#eee", hh = Il, ch = 5e-5;
function fr(r) {
  return r > ch || r < -ch;
}
var hr = [], Zr = [], ds = gi(), ps = Math.abs, Bl = function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return r.getLocalTransform(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return fr(this.rotation) || fr(this.x) || fr(this.y) || fr(this.scaleX - 1) || fr(this.scaleY - 1) || fr(this.skewX) || fr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (hh(i), this.invTransform = null);
      return;
    }
    i = i || gi(), e ? this.getLocalTransform(i) : hh(i), t && (e ? yi(i, t, i) : Sm(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(hr);
      var i = hr[0] < 0 ? -1 : 1, n = hr[1] < 0 ? -1 : 1, a = ((hr[0] - i) * e + i) / hr[0] || 0, o = ((hr[1] - n) * e + n) / hr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || gi(), Ol(this.invTransform, t);
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = Math.atan2(t[1], t[0]), a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || gi(), yi(Zr, t.invTransform, e), e = Zr);
      var i = this.originX, n = this.originY;
      (i || n) && (ds[4] = i, ds[5] = n, yi(Zr, e, ds), Zr[4] -= i, Zr[5] -= n, e = Zr), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], n = this.invTransform;
    return n && oe(i, i, n), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], n = this.transform;
    return n && oe(i, i, n), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && ps(t[0] - 1) > 1e-10 && ps(t[3] - 1) > 1e-10 ? Math.sqrt(ps(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    h0(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || u) {
      var d = i + s, y = n + u;
      e[4] = -d * a - c * y * o, e[5] = -y * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, l && Rl(e, e, l), e[4] += i + f, e[5] += n + h, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), In = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function h0(r, t) {
  for (var e = 0; e < In.length; e++) {
    var i = In[e];
    r[i] = t[i];
  }
}
var vh = {};
function Zt(r, t) {
  t = t || Fr;
  var e = vh[t];
  e || (e = vh[t] = new Yn(500));
  var i = e.get(r);
  return i == null && (i = Pi.measureText(r, t).width, e.put(r, i)), i;
}
function dh(r, t, e, i) {
  var n = Zt(r, t), a = zl(t), o = hn(0, n, e), s = li(0, a, i), u = new rt(o, s, n, a);
  return u;
}
function Fl(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return dh(n[0], t, e, i);
  for (var o = new rt(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = dh(n[s], t, e, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function hn(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function li(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function zl(r) {
  return Zt("国", r);
}
function Je(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function so(r, t, e) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, u = e.x, l = e.y, f = "left", h = "top";
  if (i instanceof Array)
    u += Je(i[0], e.width), l += Je(i[1], e.height), f = null, h = null;
  else
    switch (i) {
      case "left":
        u -= n, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += n + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= n, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + n, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += n, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - n, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += n, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - n, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += n, l += n;
        break;
      case "insideTopRight":
        u += o - n, l += n, f = "right";
        break;
      case "insideBottomLeft":
        u += n, l += a - n, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - n, l += a - n, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = u, r.y = l, r.align = f, r.verticalAlign = h, r;
}
var gs = "__zr_normal__", ys = In.concat(["ignore"]), c0 = Ri(In, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), qr = {}, v0 = new rt(0, 0, 0, 0), Vl = function() {
  function r(t) {
    this.id = xd(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, i) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var n = this.transform;
    n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, n = i.local, a = e.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = n ? this : null;
      var l = !1;
      if (a.copyTransform(e), i.position != null) {
        var f = v0;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(qr, i, f) : so(qr, i, f), a.x = qr.x, a.y = qr.y, o = qr.align, s = qr.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var c = void 0, v = void 0;
          h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Je(h[0], f.width), v = Je(h[1], f.height)), l = !0, a.originX = -a.x + c + (n ? 0 : f.x), a.originY = -a.y + v + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var y = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, _ = void 0, m = void 0;
      y && this.canBeInsideText() ? (g = i.insideFill, _ = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(g), m = !0)) : (g = i.outsideFill, _ = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || _ !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = _, p.autoStroke = m, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= Xt, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? ku : Nu;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Or(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, Nl(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (V(t))
      for (var i = t, n = lt(i), a = 0; a < n.length; a++) {
        var o = n[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
      var n = this.animators[i], a = n.__fromStateTransition;
      if (!(n.getLoop() || a && a !== gs)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ys);
  }, r.prototype._savePrimaryToNormal = function(t, e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(gs, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === gs, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(it(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          Rr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !i && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, c = this._textGuide;
        return h && h.useState(t, e, i, f), c && c.useState(t, e, i, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Xt), l;
      }
    }
  }, r.prototype.useStates = function(t, e, i) {
    if (!t.length)
      this.clearStates();
    else {
      var n = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && n.push(f);
      }
      var h = n[o - 1], c = !!(h && h.hoverLayer || i);
      c && this._toggleHoverLayerFlag(!0);
      var v = this._mergeStates(n), d = this.stateTransition;
      this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
      var y = this._textContent, p = this._textGuide;
      y && y.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Xt);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this.silent, e = this.parent; !t && e; ) {
      if (e.silent) {
        t = !0;
        break;
      }
      e = e.parent;
    }
    return t;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = it(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var n = this.currentStates.slice(), a = it(n, t), o = it(n, e) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      O(e, a), a.textConfig && (i = i || {}, O(i, a.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, n, a, o) {
    var s = !(e && n);
    e && e.textConfig ? (this.textConfig = O({}, n ? this.textConfig : i.textConfig), O(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
    for (var u = {}, l = !1, f = 0; f < ys.length; f++) {
      var h = ys[f], c = a && c0[h];
      e && e[h] != null ? c ? (l = !0, u[h] = e[h]) : this[h] = e[h] : s && i[h] != null && (c ? (l = !0, u[h] = i[h]) : this[h] = i[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var v = this.animators[f], d = v.targetName;
        v.getLoop() || v.__changeFinalValue(d ? (e || i)[d] : e || i);
      }
    l && this._transitionState(t, u, o);
  }, r.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var e = this.__zr;
    e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    if (e !== t) {
      if (e && e !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new Bl(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= Xt;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var e = this._textContent, i = this._textGuide;
    e && (e.__inHover = t), i && (i.__inHover = t);
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.addAnimator(e[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.removeAnimator(e[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, i) {
    var n = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !n) {
      Rr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new kl(n, e, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(e);
    }).done(function() {
      var a = n.animators, o = it(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
      var s = i[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, i) {
    _s(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    _s(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = _s(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Xt;
    var e = {};
    function i(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function n(a, o, s, u) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && i(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && i(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(c) {
            f[s] = c;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(c) {
            f[u] = c;
          }
        });
      }
    }
    Object.defineProperty && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
  }(), r;
}();
Me(Vl, Ae);
Me(Vl, Bl);
function _s(r, t, e, i, n) {
  e = e || {};
  var a = [];
  $d(r, "", r, t, e, i, a, n);
  var o = a.length, s = !1, u = e.done, l = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && e.during && a[0].during(function(d, y) {
    e.during(y);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), e.force && v.duration(e.duration), v.start(e.easing);
  }
  return a;
}
function ms(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function d0(r) {
  return Gt(r[0]);
}
function p0(r, t, e) {
  if (Gt(t[e]))
    if (Gt(r[e]) || (r[e] = []), Nt(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), ms(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (d0(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? ms(a[u], n[u], s) : a[u] = Array.prototype.slice.call(n[u]);
      else
        ms(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function g0(r, t) {
  return r === t || Gt(r) && Gt(t) && y0(r, t);
}
function y0(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function $d(r, t, e, i, n, a, o, s) {
  for (var u = lt(i), l = n.duration, f = n.delay, h = n.additive, c = n.setToFinal, v = !V(a), d = r.animators, y = [], p = 0; p < u.length; p++) {
    var g = u[p], _ = i[g];
    if (_ != null && e[g] != null && (v || a[g]))
      if (V(_) && !Gt(_) && !Mo(_)) {
        if (t) {
          s || (e[g] = _, r.updateDuringAnimation(t));
          continue;
        }
        $d(r, g, e[g], _, n, a && a[g], o, s);
      } else
        y.push(g);
    else
      s || (e[g] = _, r.updateDuringAnimation(t), y.push(g));
  }
  var m = y.length;
  if (!h && m)
    for (var w = 0; w < d.length; w++) {
      var S = d[w];
      if (S.targetName === t) {
        var x = S.stopTracks(y);
        if (x) {
          var b = it(d, S);
          d.splice(b, 1);
        }
      }
    }
  if (n.force || (y = St(y, function(T) {
    return !g0(i[T], e[T]);
  }), m = y.length), m > 0 || n.force && !o.length) {
    var D = void 0, M = void 0, A = void 0;
    if (s) {
      M = {}, c && (D = {});
      for (var w = 0; w < m; w++) {
        var g = y[w];
        M[g] = e[g], c ? D[g] = i[g] : e[g] = i[g];
      }
    } else if (c) {
      A = {};
      for (var w = 0; w < m; w++) {
        var g = y[w];
        A[g] = Wa(e[g]), p0(e, i, g);
      }
    }
    var S = new kl(e, !1, !1, h ? St(d, function(E) {
      return E.targetName === t;
    }) : null);
    S.targetName = t, n.scope && (S.scope = n.scope), c && D && S.whenWithKeys(0, D, y), A && S.whenWithKeys(0, A, y), S.whenWithKeys(l ?? 500, s ? M : i, y).delay(f || 0), r.addAnimator(S, t), o.push(S);
  }
}
const Xd = Vl;
var Zd = function(r) {
  B(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var i = this._children, n = 0; n < i.length; n++)
      if (i[n].name === e)
        return i[n];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), process.env.NODE_ENV !== "production" && e.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(e, i) {
    if (e && e !== this && e.parent !== this && i && i.parent === this) {
      var n = this._children, a = n.indexOf(i);
      a >= 0 && (n.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, i) {
    var n = it(this._children, e);
    return n >= 0 && this.replaceAt(i, n), this;
  }, t.prototype.replaceAt = function(e, i) {
    var n = this._children, a = n[i];
    if (e && e !== this && e.parent !== this && e !== a) {
      n[i] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var i = this.__zr;
    i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(e) {
    var i = this.__zr, n = this._children, a = it(n, e);
    return a < 0 ? this : (n.splice(a, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
      var a = e[n];
      i && a.removeSelfFromZr(i), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, i) {
    for (var n = this._children, a = 0; a < n.length; a++) {
      var o = n[a];
      e.call(i, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, i) {
    for (var n = 0; n < this._children.length; n++) {
      var a = this._children[n], o = e.call(i, a);
      a.isGroup && !o && a.traverse(e, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var i = new rt(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (rt.applyTransform(i, l, f), o = o || i.clone(), o.union(i)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || i;
  }, t;
}(Xd);
Zd.prototype.type = "group";
const se = Zd;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var cn = {}, qd = {};
function _0(r) {
  delete qd[r];
}
function m0(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return ao(r, 1) < Ou;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += ao(t[n].color, 1);
    return e /= i, e < Ou;
  }
  return !1;
}
var w0 = function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new Nm(), o = i.renderer || "canvas";
    if (cn[o] || (o = lt(cn)[0]), process.env.NODE_ENV !== "production" && !cn[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new cn[o](e, a, i, t), u = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !$.node && !$.worker && !u ? new l0(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, h = f == null || f === "auto" ? $.touchEventsSupported : !!f, c = 44, v;
    h && (v = X(i.pointerSize, c)), this.handler = new Lm(a, s, l, s.root, v), this.animation = new e0({
      stage: {
        update: u ? null : function() {
          return n._flush(!0);
        }
      }
    }), u || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = m0(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(!1);
  }, r.prototype._flush = function(t) {
    var e, i = ci();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var n = ci();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: n - i
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed)
      return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, i) {
    return this._disposed || this.handler.on(t, e, i), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof se && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, _0(this.id));
  }, r;
}();
function ph(r, t) {
  var e = new w0(xd(), r, t);
  return qd[e.id] = e, e;
}
function S0(r, t) {
  cn[r] = t;
}
var gh = 1e-4, Kd = 20;
function x0(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function yh(r, t, e, i) {
  var n = t[0], a = t[1], o = e[0], s = e[1], u = a - n, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (i)
    if (u > 0) {
      if (r <= n)
        return o;
      if (r >= a)
        return s;
    } else {
      if (r >= n)
        return o;
      if (r <= a)
        return s;
    }
  else {
    if (r === n)
      return o;
    if (r === a)
      return s;
  }
  return (r - n) / u * l + o;
}
function Rt(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return F(r) ? x0(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function yt(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), Kd), r = (+r).toFixed(t), e ? r : +r;
}
function Rn(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return Bu(r);
}
function Bu(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function b0(r, t) {
  var e = Math.log, i = Math.LN10, n = Math.floor(e(r[1] - r[0]) / i), a = Math.round(e(Math.abs(t[1] - t[0])) / i), o = Math.min(Math.max(-n + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function T0(r, t) {
  var e = Math.max(Rn(r), Rn(t)), i = r + t;
  return e > Kd ? i : yt(i, e);
}
function Qd(r) {
  var t = Math.PI * 2;
  return (r % t + t) % t;
}
function uo(r) {
  return r > -gh && r < gh;
}
var C0 = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function ke(r) {
  if (r instanceof Date)
    return r;
  if (F(r)) {
    var t = C0.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Math.round(r));
}
function D0(r) {
  return Math.pow(10, Eo(r));
}
function Eo(r) {
  if (r === 0)
    return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function jd(r, t) {
  var e = Eo(r), i = Math.pow(10, e), n = r / i, a;
  return t ? n < 1.5 ? a = 1 : n < 2.5 ? a = 2 : n < 4 ? a = 3 : n < 7 ? a = 5 : a = 10 : n < 1 ? a = 1 : n < 2 ? a = 2 : n < 3 ? a = 3 : n < 5 ? a = 5 : a = 10, r = a * i, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
}
function lo(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !F(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function Jd(r) {
  return !isNaN(lo(r));
}
function tp() {
  return Math.round(Math.random() * 9);
}
function ep(r, t) {
  return t === 0 ? r : ep(t, r % t);
}
function _h(r, t) {
  return r == null ? t : t == null ? r : r * t / ep(r, t);
}
var M0 = "[ECharts] ", mh = {}, A0 = typeof console < "u" && console.warn && console.log;
function Lo(r, t, e) {
  if (A0) {
    if (e) {
      if (mh[t])
        return;
      mh[t] = !0;
    }
    console[r](M0 + t);
  }
}
function E0(r, t) {
  Lo("log", r, t);
}
function Mt(r, t) {
  Lo("warn", r, t);
}
function Et(r, t) {
  Lo("error", r, t);
}
function De(r) {
  process.env.NODE_ENV !== "production" && Lo("warn", "DEPRECATED: " + r, !0);
}
function gt(r, t, e) {
  process.env.NODE_ENV !== "production" && De((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function fo() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : Pn(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : Y(n) ? "function () { ... }" : $_(n) ? n + "" : null;
    };
    e = W(r, function(n) {
      if (F(n))
        return n;
      var a = i(n);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(n, function(o, s) {
            var u = i(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return e;
}
function zt(r) {
  throw new Error(r);
}
var rp = "series\0", L0 = "\0_ec_\0";
function Ot(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function wh(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Sh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function $n(r) {
  return V(r) && !k(r) && !(r instanceof Date) ? r.value : r;
}
function P0(r) {
  return V(r) && !(r instanceof Array);
}
function I0(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = q();
  C(t, function(u, l) {
    if (!V(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !bh(u.id) && xh(u.id), u.name != null && !bh(u.name) && xh(u.name));
  });
  var s = R0(r, o, e);
  return (i || n) && O0(s, r, o, t), i && N0(s, t), i || n ? k0(s, t, n) : a && B0(s, t), F0(s), s;
}
function R0(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || Ti(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function O0(r, t, e, i) {
  C(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = wn(n.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        Z(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = n, u.existing = t[s], i[a] = null;
      }
    }
  });
}
function N0(r, t) {
  C(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !Ti(e) && !Ti(a) && ip("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function k0(r, t, e) {
  C(t, function(i) {
    if (i) {
      for (
        var n, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (n = r[a]) && (n.newOption || Ti(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !ip("id", i, n.existing));
      )
        a++;
      n ? (n.newOption = i, n.brandNew = e) : r.push({
        newOption: i,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function B0(r, t) {
  C(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function F0(r) {
  var t = q();
  C(r, function(e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }), C(r, function(e) {
    var i = e.newOption;
    Z(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {});
  }), C(r, function(e, i) {
    var n = e.existing, a = e.newOption, o = e.keyInfo;
    if (V(a)) {
      if (o.name = a.name != null ? wn(a.name) : n ? n.name : rp + i, n)
        o.id = wn(n.id);
      else if (a.id != null)
        o.id = wn(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function ip(r, t, e) {
  var i = Ce(t[r], null), n = Ce(e[r], null);
  return i != null && n != null && i === n;
}
function wn(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return Ce(r, "");
}
function Ce(r, t) {
  return r == null ? t : F(r) ? r : ht(r) || eo(r) ? r + "" : t;
}
function xh(r) {
  process.env.NODE_ENV !== "production" && Mt("`" + r + "` is invalid id or name. Must be a string or number.");
}
function bh(r) {
  return eo(r) || Jd(r);
}
function Hl(r) {
  var t = r.name;
  return !!(t && t.indexOf(rp));
}
function Ti(r) {
  return r && r.id != null && wn(r.id).indexOf(L0) === 0;
}
function z0(r, t, e) {
  C(r, function(i) {
    var n = i.newOption;
    V(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = V0(t, n, i.existing, e));
  });
}
function V0(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function Xn(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return k(t.dataIndex) ? W(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return k(t.name) ? W(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function pt() {
  var r = "__ec_inner_" + H0++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var H0 = tp();
function ws(r, t, e) {
  var i = Gl(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, u = e ? e.defaultMainType : null;
  return !n && u && a.set(u, {}), a.each(function(l, f) {
    var h = Zn(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Gl(r, t) {
  var e;
  if (F(r)) {
    var i = {};
    i[r + "Index"] = 0, e = i;
  } else
    e = r;
  var n = q(), a = {}, o = !1;
  return C(e, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && it(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var c = n.get(f) || n.set(f, {});
      c[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: n,
    others: a
  };
}
var pe = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Zn(r, t, e, i) {
  i = i || pe;
  var n = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: n != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = i.useDefault && (u = r.getComponent(t)) ? [u] : [], s;
  }
  return n === "none" || n === !1 ? (Z(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (n === "all" && (Z(i.enableAll, '`"all"` is not a valid value on index option.'), n = a = o = null), s.models = r.queryComponents({
    mainType: t,
    index: n,
    id: a,
    name: o
  }), s);
}
function np(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function G0(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function W0(r) {
  return r === "auto" ? $.domSupported ? "html" : "richText" : r || "html";
}
var U0 = ".", cr = "___EC__COMPONENT__CONTAINER___", ap = "___EC__EXTENDED_CLASS___";
function Te(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(U0);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Y0(r) {
  Z(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function $0(r) {
  return !!(r && r[ap]);
}
function Wl(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && C(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var i = this, n;
    return X0(i) ? n = /** @class */
    function(a) {
      B(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, W_(n, this)), O(n.prototype, e), n[ap] = !0, n.extend = this.extend, n.superCall = K0, n.superApply = Q0, n.superClass = i, n;
  };
}
function X0(r) {
  return Y(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function op(r, t) {
  r.extend = t.extend;
}
var Z0 = Math.round(Math.random() * 10);
function q0(r) {
  var t = ["__\0is_clz", Z0++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && Z(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function K0(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function Q0(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Po(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      Y0(n), i.prototype.type = n;
      var a = Te(n);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = i;
      else if (a.sub !== cr) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, r.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[cr] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(i) {
    var n = Te(i), a = [], o = t[n.main];
    return o && o[cr] ? C(o, function(s, u) {
      u !== cr && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = Te(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return C(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = Te(i), a = t[n.main];
    return a && a[cr];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[cr]) && (n = t[i.main] = {}, n[cr] = !0), n;
  }
}
function On(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var u = r[s][1];
      if (!(n && it(n, u) >= 0 || a && it(a, u) < 0)) {
        var l = i.getShallow(u, t);
        l != null && (o[r[s][0]] = l);
      }
    }
    return o;
  };
}
var j0 = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], J0 = On(j0), t1 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return J0(this, t, e);
    }, r;
  }()
), Fu = new Yn(50);
function e1(r) {
  if (typeof r == "string") {
    var t = Fu.get(r);
    return t && t.image;
  } else
    return r;
}
function sp(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = Fu.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !Io(t) && a.pending.push(o)) : (t = Pi.loadImage(r, Th, Th), t.__zrImageSrc = r, Fu.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else
    return t;
}
function Th() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function Io(r) {
  return r && r.width && r.height;
}
var Ss = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function r1(r, t, e, i, n, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = up(e, i, n, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    lp(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function up(r, t, e, i) {
  i = i || {};
  var n = O({}, i);
  n.font = t, e = X(e, "..."), n.maxIterations = X(i.maxIterations, 2);
  var a = n.minChar = X(i.minChar, 0);
  n.cnCharWidth = Zt("国", t);
  var o = n.ascCharWidth = Zt("a", t);
  n.placeholder = X(i.placeholder, "");
  for (var s = r = Math.max(0, r - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = Zt(e, t);
  return l > s && (e = "", l = 0), s = r - l, n.ellipsis = e, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = r, n;
}
function lp(r, t, e) {
  var i = e.containerWidth, n = e.font, a = e.contentWidth;
  if (!i) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = Zt(t, n);
  if (o <= i) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var u = s === 0 ? i1(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, u), o = Zt(t, n);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function i1(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function n1(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, n = t.font, a = e === "truncate", o = zl(n), s = X(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = !1, h = t.width, c;
  h != null && (e === "break" || e === "breakAll") ? c = r ? fp(r, t.font, h, e === "breakAll", 0).lines : [] : c = r ? r.split(`
`) : [];
  var v = c.length * s, d = X(t.height, v);
  if (v > d && l) {
    var y = Math.floor(d / s);
    f = f || c.length > y, c = c.slice(0, y);
  }
  if (r && a && h != null)
    for (var p = up(h, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), g = {}, _ = 0; _ < c.length; _++)
      lp(g, c[_], p), c[_] = g.textLine, f = f || g.isTruncated;
  for (var m = d, w = 0, _ = 0; _ < c.length; _++)
    w = Math.max(Zt(c[_], n), w);
  h == null && (h = w);
  var S = w;
  return i && (m += i[0] + i[2], S += i[1] + i[3], h += i[1] + i[3]), u && (S = h), {
    lines: c,
    height: d,
    outerWidth: S,
    outerHeight: m,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: w,
    contentHeight: v,
    width: h,
    isTruncated: f
  };
}
var a1 = function() {
  function r() {
  }
  return r;
}(), Ch = function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), o1 = function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
}();
function s1(r, t) {
  var e = new o1();
  if (r != null && (r += ""), !r)
    return e;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = Ss.lastIndex = 0, u; (u = Ss.exec(r)) != null; ) {
    var l = u.index;
    l > s && xs(e, r.substring(s, l), t, o), xs(e, u[2], t, o, u[1]), s = Ss.lastIndex;
  }
  s < r.length && xs(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", y = t.lineOverflow === "truncate", p = {};
  function g(G, j, J) {
    G.width = j, G.lineHeight = J, h += J, c = Math.max(c, j);
  }
  t:
    for (var _ = 0; _ < e.lines.length; _++) {
      for (var m = e.lines[_], w = 0, S = 0, x = 0; x < m.tokens.length; x++) {
        var b = m.tokens[x], D = b.styleName && t.rich[b.styleName] || {}, M = b.textPadding = D.padding, A = M ? M[1] + M[3] : 0, T = b.font = D.font || t.font;
        b.contentHeight = zl(T);
        var E = X(D.height, b.contentHeight);
        if (b.innerHeight = E, M && (E += M[0] + M[2]), b.height = E, b.lineHeight = di(D.lineHeight, t.lineHeight, E), b.align = D && D.align || t.align, b.verticalAlign = D && D.verticalAlign || "middle", y && n != null && h + b.lineHeight > n) {
          var L = e.lines.length;
          x > 0 ? (m.tokens = m.tokens.slice(0, x), g(m, S, w), e.lines = e.lines.slice(0, _ + 1)) : e.lines = e.lines.slice(0, _), e.isTruncated = e.isTruncated || e.lines.length < L;
          break t;
        }
        var P = D.width, I = P == null || P === "auto";
        if (typeof P == "string" && P.charAt(P.length - 1) === "%")
          b.percentWidth = P, f.push(b), b.contentWidth = Zt(b.text, T);
        else {
          if (I) {
            var R = D.backgroundColor, H = R && R.image;
            H && (H = e1(H), Io(H) && (b.width = Math.max(b.width, H.width * E / H.height)));
          }
          var N = d && i != null ? i - S : null;
          N != null && N < b.width ? !I || N < A ? (b.text = "", b.width = b.contentWidth = 0) : (r1(p, b.text, N - A, T, t.ellipsis, { minChar: t.truncateMinChar }), b.text = p.text, e.isTruncated = e.isTruncated || p.isTruncated, b.width = b.contentWidth = Zt(b.text, T)) : b.contentWidth = Zt(b.text, T);
        }
        b.width += A, S += b.width, D && (w = Math.max(w, b.lineHeight));
      }
      g(m, S, w);
    }
  e.outerWidth = e.width = X(i, c), e.outerHeight = e.height = X(n, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
  for (var _ = 0; _ < f.length; _++) {
    var b = f[_], z = b.percentWidth;
    b.width = parseInt(z, 10) / 100 * e.width;
  }
  return e;
}
function xs(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (i) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Je(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), l = !0), i.accumWidth = d;
    } else {
      var y = fp(t, u, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = y.accumWidth + v, h = y.linesWidths, f = y.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], _ = new a1();
    if (_.styleName = n, _.text = g, _.isLineHolder = !g && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[p] : Zt(g, u), !p && !l) {
      var m = (s[s.length - 1] || (s[0] = new Ch())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = _ : (g || !w || a) && m.push(_);
    } else
      s.push(new Ch([_]));
  }
}
function u1(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var l1 = Ri(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function f1(r) {
  return u1(r) ? !!l1[r] : !0;
}
function fp(r, t, e, i, n) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < r.length; h++) {
    var c = r.charAt(h);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var v = Zt(c, t), d = i ? !1 : !f1(c);
    if (a.length ? f + v > e : n + f + v > e) {
      f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += c, l += v, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = c, f = v)) : d ? (a.push(u), o.push(l), u = c, l = v) : (a.push(c), o.push(v));
      continue;
    }
    f += v, d ? (u += c, l += v) : (u && (s += u, u = "", l = 0), s += c);
  }
  return !a.length && !s && (s = r, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += n), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var zu = "__zr_style_" + Math.round(Math.random() * 10), Nr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Ro = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Nr[zu] = !0;
var Dh = ["z", "z2", "invisible"], h1 = ["invisible"], c1 = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var i = lt(e), n = 0; n < i.length; n++) {
      var a = i[n];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, i, n, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && v1(this, e, i) || o && !o[0] && !o[3])
      return !1;
    if (n && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, i) {
    return this.rectContain(e, i);
  }, t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.rectContain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    return a.contain(n[0], n[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, n = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new rt(0, 0, 0, 0)), i ? rt.applyTransform(e, n, i) : e.copy(n), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new rt(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : O(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= ln, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & ln);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~ln;
  }, t.prototype.createStyle = function(e) {
    return Ao(Nr, e);
  }, t.prototype.useStyle = function(e) {
    e[zu] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[zu];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, Dh);
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.style ? o ? a ? l = i.style : (l = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(l, i.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(l, i.style)) : u && (l = n.style), l)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(u ? {} : f), u)
          for (var h = lt(f), c = 0; c < h.length; c++) {
            var v = h[c];
            v in l && (l[v] = l[v], this.style[v] = f[v]);
          }
        for (var d = lt(l), c = 0; c < d.length; c++) {
          var v = d[c];
          this.style[v] = this.style[v];
        }
        this._transitionState(e, {
          style: l
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(l);
    for (var y = this.__inHover ? h1 : Dh, c = 0; c < y.length; c++) {
      var v = y[c];
      i && i[v] != null ? this[v] = i[v] : u && n[v] != null && (this[v] = n[v]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (n = n || {}, this._mergeStyle(n, o.style));
    }
    return n && (i.style = n), i;
  }, t.prototype._mergeStyle = function(e, i) {
    return O(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return Ro;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Xt | ln;
  }(), t;
}(Xd), bs = new rt(0, 0, 0, 0), Ts = new rt(0, 0, 0, 0);
function v1(r, t, e) {
  return bs.copy(r.getBoundingRect()), r.transform && bs.applyTransform(r.transform), Ts.width = t, Ts.height = e, !bs.intersect(Ts);
}
const qn = c1;
var ie = Math.min, ne = Math.max, Cs = Math.sin, Ds = Math.cos, vr = Math.PI * 2, fa = Oi(), ha = Oi(), ca = Oi();
function Mh(r, t, e, i, n, a) {
  n[0] = ie(r, e), n[1] = ie(t, i), a[0] = ne(r, e), a[1] = ne(t, i);
}
var Ah = [], Eh = [];
function d1(r, t, e, i, n, a, o, s, u, l) {
  var f = Fd, h = wt, c = f(r, e, n, o, Ah);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(r, e, n, o, Ah[v]);
    u[0] = ie(d, u[0]), l[0] = ne(d, l[0]);
  }
  c = f(t, i, a, s, Eh);
  for (var v = 0; v < c; v++) {
    var y = h(t, i, a, s, Eh[v]);
    u[1] = ie(y, u[1]), l[1] = ne(y, l[1]);
  }
  u[0] = ie(r, u[0]), l[0] = ne(r, l[0]), u[0] = ie(o, u[0]), l[0] = ne(o, l[0]), u[1] = ie(t, u[1]), l[1] = ne(t, l[1]), u[1] = ie(s, u[1]), l[1] = ne(s, l[1]);
}
function p1(r, t, e, i, n, a, o, s) {
  var u = zd, l = Ct, f = ne(ie(u(r, e, n), 1), 0), h = ne(ie(u(t, i, a), 1), 0), c = l(r, e, n, f), v = l(t, i, a, h);
  o[0] = ie(r, n, c), o[1] = ie(t, a, v), s[0] = ne(r, n, c), s[1] = ne(t, a, v);
}
function g1(r, t, e, i, n, a, o, s, u) {
  var l = fi, f = hi, h = Math.abs(n - a);
  if (h % vr < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - i, u[0] = r + e, u[1] = t + i;
    return;
  }
  if (fa[0] = Ds(n) * e + r, fa[1] = Cs(n) * i + t, ha[0] = Ds(a) * e + r, ha[1] = Cs(a) * i + t, l(s, fa, ha), f(u, fa, ha), n = n % vr, n < 0 && (n = n + vr), a = a % vr, a < 0 && (a = a + vr), n > a && !o ? a += vr : n < a && o && (n += vr), o) {
    var c = a;
    a = n, n = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (ca[0] = Ds(v) * e + r, ca[1] = Cs(v) * i + t, l(s, ca, s), f(u, ca, u));
}
var tt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, dr = [], pr = [], ye = [], He = [], _e = [], me = [], Ms = Math.min, As = Math.max, gr = Math.cos, yr = Math.sin, Le = Math.abs, Vu = Math.PI, Ze = Vu * 2, Es = typeof Float32Array < "u", Yi = [];
function Ls(r) {
  var t = Math.round(r / Vu * 1e8) / 1e8;
  return t % 2 * Vu;
}
function y1(r, t) {
  var e = Ls(r[0]);
  e < 0 && (e += Ze);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= Ze ? n = e + Ze : t && e - n >= Ze ? n = e - Ze : !t && e > n ? n = e + (Ze - Ls(e - n)) : t && e < n && (n = e - (Ze - Ls(n - e))), r[0] = e, r[1] = n;
}
var _1 = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = Le(i / oo / t) || 0, this._uy = Le(i / oo / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(tt.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = Le(t - this._xi), n = Le(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(tt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(tt.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(tt.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), Yi[0] = n, Yi[1] = a, y1(Yi, o), n = Yi[0], a = Yi[1];
    var s = a - n;
    return this.addData(tt.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = gr(a) * i + t, this._yi = yr(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(tt.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(tt.Z);
    var t = this._ctx, e = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = i, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    var e = t.length;
    !(this.data && this.data.length === e) && Es && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++)
      this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
      i += t[a].len();
    Es && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
    for (var a = 0; a < e; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[n++] = o[s];
    this._len = n;
  }, r.prototype.addData = function(t, e, i, n, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, Es && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    ye[0] = ye[1] = _e[0] = _e[1] = Number.MAX_VALUE, He[0] = He[1] = me[0] = me[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case tt.M:
          e = n = t[o++], i = a = t[o++], _e[0] = n, _e[1] = a, me[0] = n, me[1] = a;
          break;
        case tt.L:
          Mh(e, i, t[o], t[o + 1], _e, me), e = t[o++], i = t[o++];
          break;
        case tt.C:
          d1(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], _e, me), e = t[o++], i = t[o++];
          break;
        case tt.Q:
          p1(e, i, t[o++], t[o++], t[o], t[o + 1], _e, me), e = t[o++], i = t[o++];
          break;
        case tt.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var y = !t[o++];
          u && (n = gr(v) * h + l, a = yr(v) * c + f), g1(l, f, h, c, v, d, y, _e, me), e = gr(d) * h + l, i = yr(d) * c + f;
          break;
        case tt.R:
          n = e = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          Mh(n, a, n + p, a + g, _e, me);
          break;
        case tt.Z:
          e = n, i = a;
          break;
      }
      fi(ye, ye, _e), hi(He, He, me);
    }
    return o === 0 && (ye[0] = ye[1] = He[0] = He[1] = 0), new rt(ye[0], ye[1], He[0] - ye[0], He[1] - ye[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var y = -1;
      switch (v) {
        case tt.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case tt.L: {
          var p = t[c++], g = t[c++], _ = p - a, m = g - o;
          (Le(_) > i || Le(m) > n || c === e - 1) && (y = Math.sqrt(_ * _ + m * m), a = p, o = g);
          break;
        }
        case tt.C: {
          var w = t[c++], S = t[c++], p = t[c++], g = t[c++], x = t[c++], b = t[c++];
          y = Bm(a, o, w, S, p, g, x, b, 10), a = x, o = b;
          break;
        }
        case tt.Q: {
          var w = t[c++], S = t[c++], p = t[c++], g = t[c++];
          y = Vm(a, o, w, S, p, g, 10), a = p, o = g;
          break;
        }
        case tt.A:
          var D = t[c++], M = t[c++], A = t[c++], T = t[c++], E = t[c++], L = t[c++], P = L + E;
          c += 1, d && (s = gr(E) * A + D, u = yr(E) * T + M), y = As(A, T) * Ms(Ze, Math.abs(L)), a = gr(P) * A + D, o = yr(P) * T + M;
          break;
        case tt.R: {
          s = a = t[c++], u = o = t[c++];
          var I = t[c++], R = t[c++];
          y = I * 2 + R * 2;
          break;
        }
        case tt.Z: {
          var _ = s - a, m = u - o;
          y = Math.sqrt(_ * _ + m * m), a = s, o = u;
          break;
        }
      }
      y >= 0 && (l[h++] = y, f += y);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = e < 1, d, y, p = 0, g = 0, _, m = 0, w, S;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, y = this._pathLen, _ = e * y, !_)))
      t:
        for (var x = 0; x < o; ) {
          var b = i[x++], D = x === 1;
          switch (D && (l = i[x], f = i[x + 1], s = l, u = f), b !== tt.L && m > 0 && (t.lineTo(w, S), m = 0), b) {
            case tt.M:
              s = l = i[x++], u = f = i[x++], t.moveTo(l, f);
              break;
            case tt.L: {
              h = i[x++], c = i[x++];
              var M = Le(h - l), A = Le(c - f);
              if (M > n || A > a) {
                if (v) {
                  var T = d[g++];
                  if (p + T > _) {
                    var E = (_ - p) / T;
                    t.lineTo(l * (1 - E) + h * E, f * (1 - E) + c * E);
                    break t;
                  }
                  p += T;
                }
                t.lineTo(h, c), l = h, f = c, m = 0;
              } else {
                var L = M * M + A * A;
                L > m && (w = h, S = c, m = L);
              }
              break;
            }
            case tt.C: {
              var P = i[x++], I = i[x++], R = i[x++], H = i[x++], N = i[x++], z = i[x++];
              if (v) {
                var T = d[g++];
                if (p + T > _) {
                  var E = (_ - p) / T;
                  io(l, P, R, N, E, dr), io(f, I, H, z, E, pr), t.bezierCurveTo(dr[1], pr[1], dr[2], pr[2], dr[3], pr[3]);
                  break t;
                }
                p += T;
              }
              t.bezierCurveTo(P, I, R, H, N, z), l = N, f = z;
              break;
            }
            case tt.Q: {
              var P = i[x++], I = i[x++], R = i[x++], H = i[x++];
              if (v) {
                var T = d[g++];
                if (p + T > _) {
                  var E = (_ - p) / T;
                  no(l, P, R, E, dr), no(f, I, H, E, pr), t.quadraticCurveTo(dr[1], pr[1], dr[2], pr[2]);
                  break t;
                }
                p += T;
              }
              t.quadraticCurveTo(P, I, R, H), l = R, f = H;
              break;
            }
            case tt.A:
              var G = i[x++], j = i[x++], J = i[x++], vt = i[x++], Lt = i[x++], fe = i[x++], ir = i[x++], nr = !i[x++], Yr = J > vt ? J : vt, Ut = Le(J - vt) > 1e-3, mt = Lt + fe, U = !1;
              if (v) {
                var T = d[g++];
                p + T > _ && (mt = Lt + fe * (_ - p) / T, U = !0), p += T;
              }
              if (Ut && t.ellipse ? t.ellipse(G, j, J, vt, ir, Lt, mt, nr) : t.arc(G, j, Yr, Lt, mt, nr), U)
                break t;
              D && (s = gr(Lt) * J + G, u = yr(Lt) * vt + j), l = gr(mt) * J + G, f = yr(mt) * vt + j;
              break;
            case tt.R:
              s = l = i[x], u = f = i[x + 1], h = i[x++], c = i[x++];
              var K = i[x++], ar = i[x++];
              if (v) {
                var T = d[g++];
                if (p + T > _) {
                  var Pt = _ - p;
                  t.moveTo(h, c), t.lineTo(h + Ms(Pt, K), c), Pt -= K, Pt > 0 && t.lineTo(h + K, c + Ms(Pt, ar)), Pt -= ar, Pt > 0 && t.lineTo(h + As(K - Pt, 0), c + ar), Pt -= K, Pt > 0 && t.lineTo(h, c + As(ar - Pt, 0));
                  break t;
                }
                p += T;
              }
              t.rect(h, c, K, ar);
              break;
            case tt.Z:
              if (v) {
                var T = d[g++];
                if (p + T > _) {
                  var E = (_ - p) / T;
                  t.lineTo(l * (1 - E) + s * E, f * (1 - E) + u * E);
                  break t;
                }
                p += T;
              }
              t.closePath(), l = s, f = u;
          }
        }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = tt, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
const Ci = _1;
function Kr(r, t, e, i, n, a, o) {
  if (n === 0)
    return !1;
  var s = n, u = 0, l = r;
  if (o > t + s && o > i + s || o < t - s && o < i - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    u = (t - i) / (r - e), l = (r * i - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function m1(r, t, e, i, n, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || l > r + h && l > e + h && l > n + h && l > o + h || l < r - h && l < e - h && l < n - h && l < o - h)
    return !1;
  var c = km(r, t, e, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function w1(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > i + l && u > a + l || u < t - l && u < i - l && u < a - l || s > r + l && s > e + l && s > n + l || s < r - l && s < e - l && s < n - l)
    return !1;
  var f = zm(r, t, e, i, n, a, s, u, null);
  return f <= l / 2;
}
var Lh = Math.PI * 2;
function va(r) {
  return r %= Lh, r < 0 && (r += Lh), r;
}
var $i = Math.PI * 2;
function S1(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(i - n) % $i < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = va(n), n = va(h);
  } else
    i = va(i), n = va(n);
  i > n && (n += $i);
  var c = Math.atan2(u, s);
  return c < 0 && (c += $i), c >= i && c <= n || c + $i >= i && c + $i <= n;
}
function _r(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var Ge = Ci.CMD, mr = Math.PI * 2, x1 = 1e-4;
function b1(r, t) {
  return Math.abs(r - t) < x1;
}
var It = [-1, -1, -1], ee = [-1, -1];
function T1() {
  var r = ee[0];
  ee[0] = ee[1], ee[1] = r;
}
function C1(r, t, e, i, n, a, o, s, u, l) {
  if (l > t && l > i && l > a && l > s || l < t && l < i && l < a && l < s)
    return 0;
  var f = Bd(t, i, a, s, l, It);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, y = 0; y < f; y++) {
    var p = It[y], g = p === 0 || p === 1 ? 0.5 : 1, _ = wt(r, e, n, o, p);
    _ < u || (c < 0 && (c = Fd(t, i, a, s, ee), ee[1] < ee[0] && c > 1 && T1(), v = wt(t, i, a, s, ee[0]), c > 1 && (d = wt(t, i, a, s, ee[1]))), c === 2 ? p < ee[0] ? h += v < t ? g : -g : p < ee[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < ee[0] ? h += v < t ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function D1(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var u = Fm(t, i, a, s, It);
  if (u === 0)
    return 0;
  var l = zd(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Ct(t, i, a, l), c = 0; c < u; c++) {
      var v = It[c] === 0 || It[c] === 1 ? 0.5 : 1, d = Ct(r, e, n, It[c]);
      d < o || (It[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = It[0] === 0 || It[0] === 1 ? 0.5 : 1, d = Ct(r, e, n, It[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function M1(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  It[0] = -u, It[1] = u;
  var l = Math.abs(i - n);
  if (l < 1e-4)
    return 0;
  if (l >= mr - 1e-4) {
    i = 0, n = mr;
    var f = a ? 1 : -1;
    return o >= It[0] + r && o <= It[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += mr, n += mr);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = It[v];
    if (d + r > o) {
      var y = Math.atan2(s, d), f = a ? 1 : -1;
      y < 0 && (y = mr + y), (y >= i && y <= n || y + mr >= i && y + mr <= n) && (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function hp(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var y = a[d++], p = d === 1;
    switch (y === Ge.M && d > 1 && (e || (s += _r(u, l, f, h, i, n))), p && (u = a[d], l = a[d + 1], f = u, h = l), y) {
      case Ge.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case Ge.L:
        if (e) {
          if (Kr(u, l, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += _r(u, l, a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Ge.C:
        if (e) {
          if (m1(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += C1(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Ge.Q:
        if (e) {
          if (w1(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += D1(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Ge.A:
        var g = a[d++], _ = a[d++], m = a[d++], w = a[d++], S = a[d++], x = a[d++];
        d += 1;
        var b = !!(1 - a[d++]);
        c = Math.cos(S) * m + g, v = Math.sin(S) * w + _, p ? (f = c, h = v) : s += _r(u, l, c, v, i, n);
        var D = (i - g) * w / m + g;
        if (e) {
          if (S1(g, _, w, S, S + x, b, t, D, n))
            return !0;
        } else
          s += M1(g, _, w, S, S + x, b, D, n);
        u = Math.cos(S + x) * m + g, l = Math.sin(S + x) * w + _;
        break;
      case Ge.R:
        f = u = a[d++], h = l = a[d++];
        var M = a[d++], A = a[d++];
        if (c = f + M, v = h + A, e) {
          if (Kr(f, h, c, h, t, i, n) || Kr(c, h, c, v, t, i, n) || Kr(c, v, f, v, t, i, n) || Kr(f, v, f, h, t, i, n))
            return !0;
        } else
          s += _r(c, h, c, v, i, n), s += _r(f, v, f, h, i, n);
        break;
      case Ge.Z:
        if (e) {
          if (Kr(u, l, f, h, t, i, n))
            return !0;
        } else
          s += _r(u, l, f, h, i, n);
        u = f, l = h;
        break;
    }
  }
  return !e && !b1(l, h) && (s += _r(u, l, f, h, i, n) || 0), s !== 0;
}
function A1(r, t, e) {
  return hp(r, 0, !1, t, e);
}
function E1(r, t, e, i) {
  return hp(r, t, !0, e, i);
}
var cp = at({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, Nr), L1 = {
  style: at({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Ro.style)
}, Ps = In.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), P1 = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var n = this._decalEl = this._decalEl || new t();
      n.buildPath === t.prototype.buildPath && (n.buildPath = function(u) {
        e.buildPath(u, e.shape);
      }), n.silent = !0;
      var a = n.style;
      for (var o in i)
        a[o] !== i[o] && (a[o] = i[o]);
      a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Ps.length; ++s)
        n[Ps[s]] = this[Ps[s]];
      n.__dirty |= Xt;
    } else
      this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var i = lt(e);
    this.shape = this.getDefaultShape();
    var n = this.getDefaultStyle();
    n && this.useStyle(n);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = e[o];
      o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (F(e)) {
        var i = ao(e, 0);
        return i > 0.5 ? Nu : i > 0.2 ? f0 : ku;
      } else if (e)
        return ku;
    }
    return Nu;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (F(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = ao(e, 0) < Ou;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~ui;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Ci(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return !(i == null || i === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, i = this.style, n = !e;
    if (n) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & ui) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || n) {
        s.copy(e);
        var u = i.strokeNoScale ? this.getLineScale() : 1, l = i.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect(), o = this.style;
    if (e = n[0], i = n[1], a.contain(e, i)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), E1(s, u / l, e, i)))
          return !0;
      }
      if (this.hasFill())
        return A1(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= ui, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
  }, t.prototype.setShape = function(e, i) {
    var n = this.shape;
    return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : O(n, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & ui);
  }, t.prototype.createStyle = function(e) {
    return Ao(cp, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = O({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.shape ? o ? a ? l = i.shape : (l = O({}, n.shape), O(l, i.shape)) : (l = O({}, a ? this.shape : n.shape), O(l, i.shape)) : u && (l = n.shape), l)
      if (o) {
        this.shape = O({}, this.shape);
        for (var f = {}, h = lt(l), c = 0; c < h.length; c++) {
          var v = h[c];
          typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
        }
        this._transitionState(e, {
          shape: f
        }, s);
      } else
        this.shape = l, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
    }
    return n && (i.shape = n), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return L1;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = function(a) {
      B(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return e.init && e.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return Q(e.style);
      }, o.prototype.getDefaultShape = function() {
        return Q(e.shape);
      }, o;
    }(t);
    for (var n in e)
      typeof e[n] == "function" && (i.prototype[n] = e[n]);
    return i;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = Xt | ln | ui;
  }(), t;
}(qn);
const ot = P1;
var I1 = at({
  strokeFirst: !0,
  font: Fr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, cp), vp = function(r) {
  B(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return i != null && i !== "none" && e.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(e) {
    return Ao(I1, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var n = Fl(i, e.font, e.textAlign, e.textBaseline);
      if (n.x += e.x || 0, n.y += e.y || 0, this.hasStroke()) {
        var a = e.lineWidth;
        n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a;
      }
      this._rect = n;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  }(), t;
}(qn);
vp.prototype.type = "tspan";
const Hu = vp;
var R1 = at({
  x: 0,
  y: 0
}, Nr), O1 = {
  style: at({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Ro.style)
};
function N1(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var dp = function(r) {
  B(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return Ao(R1, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = N1(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return O1;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new rt(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(qn);
dp.prototype.type = "image";
const Ni = dp;
function k1(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, u, l, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > n && (h = s + u, s *= n / h, u *= n / h), l + f > n && (h = l + f, l *= n / h, f *= n / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, i), r.lineTo(e + n - u, i), u !== 0 && r.arc(e + n - u, i + u, u, -Math.PI / 2, 0), r.lineTo(e + n, i + a - l), l !== 0 && r.arc(e + n - l, i + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var vi = Math.round;
function pp(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (vi(i * 2) === vi(n * 2) && (r.x1 = r.x2 = Lr(i, s, !0)), vi(a * 2) === vi(o * 2) && (r.y1 = r.y2 = Lr(a, s, !0))), r;
  }
}
function gp(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Lr(i, s, !0), r.y = Lr(n, s, !0), r.width = Math.max(Lr(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Lr(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Lr(r, t, e) {
  if (!t)
    return r;
  var i = vi(r * 2);
  return (i + vi(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var B1 = function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), F1 = {}, yp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new B1();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = gp(F1, i, this.style);
      n = u.x, a = u.y, o = u.width, s = u.height, u.r = i.r, i = u;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? k1(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(ot);
yp.prototype.type = "rect";
const _t = yp;
var Ph = {
  fill: "#000"
}, Ih = 2, z1 = {
  style: at({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Ro.style)
}, _p = function(r) {
  B(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = Ph, i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var i = this._children[e];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, U1(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new rt(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], u = s.getBoundingRect(), l = s.getLocalTransform(n);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Ph;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i)
      return e;
    var n = i.rich, a = e.rich || n && {};
    return O(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var n = lt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      e[o] = e[o] || {}, O(e[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return z1;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || Fr, n = e.padding, a = zh(e), o = n1(a, e), s = Is(e), u = !!e.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var y = e.x || 0, p = e.y || 0, g = e.align || d.align || "left", _ = e.verticalAlign || d.verticalAlign || "top", m = y, w = li(p, o.contentHeight, _);
    if (s || n) {
      var S = hn(y, f, g), x = li(p, l, _);
      s && this._renderBackground(e, e, S, x, f, l);
    }
    w += v / 2, n && (m = Fh(y, g, n), _ === "top" ? w += n[0] : _ === "bottom" && (w -= n[2]));
    for (var b = 0, D = !1, M = Bh("fill" in e ? e.fill : (D = !0, d.fill)), A = kh("stroke" in e ? e.stroke : !u && (!d.autoStroke || D) ? (b = Ih, d.stroke) : null), T = e.textShadowBlur > 0, E = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), L = o.calculatedLineHeight, P = 0; P < c.length; P++) {
      var I = this._getOrCreateChild(Hu), R = I.createStyle();
      I.useStyle(R), R.text = c[P], R.x = m, R.y = w, g && (R.textAlign = g), R.textBaseline = "middle", R.opacity = e.opacity, R.strokeFirst = !0, T && (R.shadowBlur = e.textShadowBlur || 0, R.shadowColor = e.textShadowColor || "transparent", R.shadowOffsetX = e.textShadowOffsetX || 0, R.shadowOffsetY = e.textShadowOffsetY || 0), R.stroke = A, R.fill = M, A && (R.lineWidth = e.lineWidth || b, R.lineDash = e.lineDash, R.lineDashOffset = e.lineDashOffset || 0), R.font = i, Oh(R, e), w += v, E && I.setBoundingRect(new rt(hn(R.x, h, R.textAlign), li(R.y, L, R.textBaseline), h, L));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = zh(e), n = s1(i, e), a = n.width, o = n.outerWidth, s = n.outerHeight, u = e.padding, l = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign;
    this.isTruncated = !!n.isTruncated;
    var d = hn(l, o, c), y = li(f, s, v), p = d, g = y;
    u && (p += u[3], g += u[0]);
    var _ = p + a;
    Is(e) && this._renderBackground(e, e, d, y, o, s);
    for (var m = !!e.backgroundColor, w = 0; w < n.lines.length; w++) {
      for (var S = n.lines[w], x = S.tokens, b = x.length, D = S.lineHeight, M = S.width, A = 0, T = p, E = _, L = b - 1, P = void 0; A < b && (P = x[A], !P.align || P.align === "left"); )
        this._placeToken(P, e, D, g, T, "left", m), M -= P.width, T += P.width, A++;
      for (; L >= 0 && (P = x[L], P.align === "right"); )
        this._placeToken(P, e, D, g, E, "right", m), M -= P.width, E -= P.width, L--;
      for (T += (a - (T - p) - (_ - E) - M) / 2; A <= L; )
        P = x[A], this._placeToken(P, e, D, g, T + P.width / 2, "center", m), T += P.width, A++;
      g += D;
    }
  }, t.prototype._placeToken = function(e, i, n, a, o, s, u) {
    var l = i.rich[e.styleName] || {};
    l.text = e.text;
    var f = e.verticalAlign, h = a + n / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + n - e.height / 2);
    var c = !e.isLineHolder && Is(l);
    c && this._renderBackground(l, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var v = !!l.backgroundColor, d = e.textPadding;
    d && (o = Fh(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var y = this._getOrCreateChild(Hu), p = y.createStyle();
    y.useStyle(p);
    var g = this._defaultStyle, _ = !1, m = 0, w = Bh("fill" in l ? l.fill : "fill" in i ? i.fill : (_ = !0, g.fill)), S = kh("stroke" in l ? l.stroke : "stroke" in i ? i.stroke : !v && !u && (!g.autoStroke || _) ? (m = Ih, g.stroke) : null), x = l.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = e.text, p.x = o, p.y = h, x && (p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = l.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || Fr, p.opacity = di(l.opacity, i.opacity, 1), Oh(p, l), S && (p.lineWidth = di(l.lineWidth, i.lineWidth, m), p.lineDash = X(l.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = S), w && (p.fill = w);
    var b = e.contentWidth, D = e.contentHeight;
    y.setBoundingRect(new rt(hn(p.x, b, p.textAlign), li(p.y, D, p.textBaseline), b, D));
  }, t.prototype._renderBackground = function(e, i, n, a, o, s) {
    var u = e.backgroundColor, l = e.borderWidth, f = e.borderColor, h = u && u.image, c = u && !h, v = e.borderRadius, d = this, y, p;
    if (c || e.lineHeight || l && f) {
      y = this._getOrCreateChild(_t), y.useStyle(y.createStyle()), y.style.fill = null;
      var g = y.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = v, y.dirtyShape();
    }
    if (c) {
      var _ = y.style;
      _.fill = u || null, _.fillOpacity = X(e.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(Ni), p.onload = function() {
        d.dirtyStyle();
      };
      var m = p.style;
      m.image = u.image, m.x = n, m.y = a, m.width = o, m.height = s;
    }
    if (l && f) {
      var _ = y.style;
      _.lineWidth = l, _.stroke = f, _.strokeOpacity = X(e.strokeOpacity, 1), _.lineDash = e.borderDash, _.lineDashOffset = e.borderDashOffset || 0, y.strokeContainThreshold = 0, y.hasFill() && y.hasStroke() && (_.strokeFirst = !0, _.lineWidth *= 2);
    }
    var w = (y || p).style;
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = di(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return W1(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      G1(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && be(i) || e.textFont || e.font;
  }, t;
}(qn), V1 = { left: !0, right: 1, center: 1 }, H1 = { top: 1, bottom: 1, middle: 1 }, Rh = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function G1(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Ml + "px" : r + "px";
}
function Oh(r, t) {
  for (var e = 0; e < Rh.length; e++) {
    var i = Rh[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function W1(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function U1(r) {
  return Nh(r), C(r.rich, Nh), r;
}
function Nh(r) {
  if (r) {
    r.font = _p.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || V1[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || H1[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = bd(r.padding));
  }
}
function kh(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Bh(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Fh(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function zh(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Is(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
const ue = _p;
var st = pt(), Y1 = function(r, t, e, i) {
  if (i) {
    var n = st(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, n.ssrType = "chart", i.type === "group" && i.traverse(function(a) {
      var o = st(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, Vh = 1, Hh = {}, mp = pt(), Ul = pt(), wp = 0, Yl = 1, $l = 2, tr = ["emphasis", "blur", "select"], Gh = ["normal", "emphasis", "blur", "select"], $1 = 10, X1 = 9, kr = "highlight", Xa = "downplay", Sn = "select", Za = "unselect", xn = "toggleSelect";
function Qr(r) {
  return r != null && r !== "none";
}
function Oo(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Sp(r) {
  Oo(r, "emphasis", $l);
}
function xp(r) {
  r.hoverState === $l && Oo(r, "normal", wp);
}
function Xl(r) {
  Oo(r, "blur", Yl);
}
function bp(r) {
  r.hoverState === Yl && Oo(r, "normal", wp);
}
function Z1(r) {
  r.selected = !0;
}
function q1(r) {
  r.selected = !1;
}
function Wh(r, t, e) {
  t(r, e);
}
function Fe(r, t, e) {
  Wh(r, t, e), r.isGroup && r.traverse(function(i) {
    Wh(i, t, e);
  });
}
function K1(r, t, e, i) {
  for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = n[s];
    a[s] = u ?? (i && i[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(e) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function Q1(r, t, e, i) {
  var n = e && it(e, "select") >= 0, a = !1;
  if (r instanceof ot) {
    var o = mp(r), s = n && o.selectFill || o.normalFill, u = n && o.selectStroke || o.normalStroke;
    if (Qr(s) || Qr(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit" ? (a = !0, i = O({}, i), l = O({}, l), l.fill = s) : !Qr(l.fill) && Qr(s) ? (a = !0, i = O({}, i), l = O({}, l), l.fill = nh(s)) : !Qr(l.stroke) && Qr(u) && (a || (i = O({}, i), l = O({}, l)), l.stroke = nh(u)), i.style = l;
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? $1);
  }
  return i;
}
function j1(r, t, e) {
  if (e && e.z2 == null) {
    e = O({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? X1);
  }
  return e;
}
function J1(r, t, e) {
  var i = it(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : K1(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = O({}, e), o = O({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Rs(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return Q1(this, r, t, e);
    if (r === "blur")
      return J1(this, r, e);
    if (r === "select")
      return j1(this, r, e);
  }
  return e;
}
function tw(r) {
  r.stateProxy = Rs;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Rs), e && (e.stateProxy = Rs);
}
function Uh(r, t) {
  !Mp(r, t) && !r.__highByOuter && Fe(r, Sp);
}
function Yh(r, t) {
  !Mp(r, t) && !r.__highByOuter && Fe(r, xp);
}
function Gu(r, t) {
  r.__highByOuter |= 1 << (t || 0), Fe(r, Sp);
}
function Wu(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Fe(r, xp);
}
function ew(r) {
  Fe(r, Xl);
}
function Tp(r) {
  Fe(r, bp);
}
function Cp(r) {
  Fe(r, Z1);
}
function Dp(r) {
  Fe(r, q1);
}
function Mp(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Ap(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = Ul(a), s = n === "series", u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(u), o.isBlured && (u.group.traverse(function(l) {
      bp(l);
    }), s && e.push(a)), o.isBlured = !1;
  }), C(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function Uu(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && Tp(c);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    n.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !c || t === "series" && f)) {
        var v = i.getViewOfSeriesModel(l);
        if (v.group.traverse(function(p) {
          p.__highByOuter && f && t === "self" || Xl(p);
        }), Gt(t))
          a(l.getData(), t);
        else if (V(t))
          for (var d = lt(t), y = 0; y < d.length; y++)
            a(l.getData(d[y]), t[d[y]]);
        u.push(l), Ul(l).isBlured = !0;
      }
    }), n.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
      }
    });
  }
}
function Yu(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      Ul(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        Xl(a);
      });
    }
  }
}
function rw(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && Et("Unknown dataType " + t.dataType);
    return;
  }
  var a = Xn(n, t);
  a = (k(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), u = 0; !o && u < s; )
      o = n.getItemGraphicEl(u++);
  if (o) {
    var l = st(o);
    Uu(i, l.focus, l.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && Uu(i, f, h, e);
  }
}
function Zl(r, t, e, i) {
  var n = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return n;
  var a = i.getModel().getComponent(r, t);
  if (!a)
    return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return n;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !Di(s[l]) && Et("param should be highDownDispatcher"), st(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function iw(r, t, e) {
  process.env.NODE_ENV !== "production" && !Di(r) && Et("param should be highDownDispatcher");
  var i = st(r), n = Zl(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && Yu(i.componentMainType, i.componentIndex, e), C(a, function(s) {
    return Uh(s, t);
  })) : (Uu(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && Yu(i.componentMainType, i.componentIndex, e), Uh(r, t));
}
function nw(r, t, e) {
  process.env.NODE_ENV !== "production" && !Di(r) && Et("param should be highDownDispatcher"), Ap(e);
  var i = st(r), n = Zl(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? C(n, function(a) {
    return Yh(a, t);
  }) : Yh(r, t);
}
function aw(r, t, e) {
  if (Xu(t)) {
    var i = t.dataType, n = r.getData(i), a = Xn(n, t);
    k(a) || (a = [a]), r[t.type === xn ? "toggleSelect" : t.type === Sn ? "select" : "unselect"](a, i);
  }
}
function $h(r) {
  var t = r.getAllData();
  C(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? Cp(a) : Dp(a);
    });
  });
}
function ow(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var i = e.getAllData();
    C(i, function(n) {
      n.data;
      var a = n.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function $u(r, t, e) {
  Ep(r, !0), Fe(r, tw), lw(r, t, e);
}
function sw(r) {
  Ep(r, !1);
}
function uw(r, t, e, i) {
  i ? sw(r) : $u(r, t, e);
}
function lw(r, t, e) {
  var i = st(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
var Xh = ["emphasis", "blur", "select"], fw = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function hw(r, t, e, i) {
  e = e || "itemStyle";
  for (var n = 0; n < Xh.length; n++) {
    var a = Xh[n], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = i ? i(o) : o[fw[e]]();
  }
}
function Ep(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function Di(r) {
  return !!(r && r.__highDownDispatcher);
}
function cw(r) {
  var t = Hh[r];
  return t == null && Vh <= 32 && (t = Hh[r] = Vh++), t;
}
function Xu(r) {
  var t = r.type;
  return t === Sn || t === Za || t === xn;
}
function Zh(r) {
  var t = r.type;
  return t === kr || t === Xa;
}
function vw(r) {
  var t = mp(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var jr = Ci.CMD, dw = [[], [], []], qh = Math.sqrt, pw = Math.atan2;
function gw(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, u, l, f = jr.M, h = jr.C, c = jr.L, v = jr.R, d = jr.A, y = jr.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (n = e[o++], s = o, a = 0, n) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case y:
          a = 2;
          break;
        case d:
          var p = t[4], g = t[5], _ = qh(t[0] * t[0] + t[1] * t[1]), m = qh(t[2] * t[2] + t[3] * t[3]), w = pw(-t[1] / m, t[0] / _);
          e[o] *= _, e[o++] += p, e[o] *= m, e[o++] += g, e[o++] *= _, e[o++] *= m, e[o++] += w, e[o++] += w, o += 2, s = o;
          break;
        case v:
          l[0] = e[o++], l[1] = e[o++], oe(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], oe(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var S = dw[u];
        S[0] = e[o++], S[1] = e[o++], oe(S, S, t), e[s++] = S[0], e[s++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var Os = Math.sqrt, da = Math.sin, pa = Math.cos, Xi = Math.PI;
function Kh(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function Zu(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Kh(r) * Kh(t));
}
function Qh(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(Zu(r, t));
}
function jh(r, t, e, i, n, a, o, s, u, l, f) {
  var h = u * (Xi / 180), c = pa(h) * (r - e) / 2 + da(h) * (t - i) / 2, v = -1 * da(h) * (r - e) / 2 + pa(h) * (t - i) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= Os(d), s *= Os(d));
  var y = (n === a ? -1 : 1) * Os((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = y * o * v / s, g = y * -s * c / o, _ = (r + e) / 2 + pa(h) * p - da(h) * g, m = (t + i) / 2 + da(h) * p + pa(h) * g, w = Qh([1, 0], [(c - p) / o, (v - g) / s]), S = [(c - p) / o, (v - g) / s], x = [(-1 * c - p) / o, (-1 * v - g) / s], b = Qh(S, x);
  if (Zu(S, x) <= -1 && (b = Xi), Zu(S, x) >= 1 && (b = 0), b < 0) {
    var D = Math.round(b / Xi * 1e6) / 1e6;
    b = Xi * 2 + D % 2 * Xi;
  }
  f.addData(l, _, m, o, s, w, b, h, a);
}
var yw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, _w = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function mw(r) {
  var t = new Ci();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = Ci.CMD, u = r.match(yw);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(_w) || [], d = v.length, y = 0; y < d; y++)
      v[y] = parseFloat(v[y]);
    for (var p = 0; p < d; ) {
      var g = void 0, _ = void 0, m = void 0, w = void 0, S = void 0, x = void 0, b = void 0, D = e, M = i, A = void 0, T = void 0;
      switch (h) {
        case "l":
          e += v[p++], i += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "L":
          e = v[p++], i = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "m":
          e += v[p++], i += v[p++], c = s.M, t.addData(c, e, i), n = e, a = i, h = "l";
          break;
        case "M":
          e = v[p++], i = v[p++], c = s.M, t.addData(c, e, i), n = e, a = i, h = "L";
          break;
        case "h":
          e += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "H":
          e = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "v":
          i += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "V":
          i = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "C":
          c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), e = v[p - 2], i = v[p - 1];
          break;
        case "c":
          c = s.C, t.addData(c, v[p++] + e, v[p++] + i, v[p++] + e, v[p++] + i, v[p++] + e, v[p++] + i), e += v[p - 2], i += v[p - 1];
          break;
        case "S":
          g = e, _ = i, A = t.len(), T = t.data, o === s.C && (g += e - T[A - 4], _ += i - T[A - 3]), c = s.C, D = v[p++], M = v[p++], e = v[p++], i = v[p++], t.addData(c, g, _, D, M, e, i);
          break;
        case "s":
          g = e, _ = i, A = t.len(), T = t.data, o === s.C && (g += e - T[A - 4], _ += i - T[A - 3]), c = s.C, D = e + v[p++], M = i + v[p++], e += v[p++], i += v[p++], t.addData(c, g, _, D, M, e, i);
          break;
        case "Q":
          D = v[p++], M = v[p++], e = v[p++], i = v[p++], c = s.Q, t.addData(c, D, M, e, i);
          break;
        case "q":
          D = v[p++] + e, M = v[p++] + i, e += v[p++], i += v[p++], c = s.Q, t.addData(c, D, M, e, i);
          break;
        case "T":
          g = e, _ = i, A = t.len(), T = t.data, o === s.Q && (g += e - T[A - 4], _ += i - T[A - 3]), e = v[p++], i = v[p++], c = s.Q, t.addData(c, g, _, e, i);
          break;
        case "t":
          g = e, _ = i, A = t.len(), T = t.data, o === s.Q && (g += e - T[A - 4], _ += i - T[A - 3]), e += v[p++], i += v[p++], c = s.Q, t.addData(c, g, _, e, i);
          break;
        case "A":
          m = v[p++], w = v[p++], S = v[p++], x = v[p++], b = v[p++], D = e, M = i, e = v[p++], i = v[p++], c = s.A, jh(D, M, e, i, x, b, m, w, S, c, t);
          break;
        case "a":
          m = v[p++], w = v[p++], S = v[p++], x = v[p++], b = v[p++], D = e, M = i, e += v[p++], i += v[p++], c = s.A, jh(D, M, e, i, x, b, m, w, S, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = n, i = a), o = c;
  }
  return t.toStatic(), t;
}
var Lp = function(r) {
  B(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(ot);
function Pp(r) {
  return r.setData != null;
}
function Ip(r, t) {
  var e = mw(r), i = O({}, t);
  return i.buildPath = function(n) {
    if (Pp(n)) {
      n.setData(e.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      e.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    gw(e, n), this.dirtyShape();
  }, i;
}
function ww(r, t) {
  return new Lp(Ip(r, t));
}
function Sw(r, t) {
  var e = Ip(r, t), i = function(n) {
    B(a, n);
    function a(o) {
      var s = n.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  }(Lp);
  return i;
}
function xw(r, t) {
  for (var e = [], i = r.length, n = 0; n < i; n++) {
    var a = r[n];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new ot(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (Pp(s)) {
      s.appendPath(e);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var bw = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), Rp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new bw();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(ot);
Rp.prototype.type = "circle";
const ql = Rp;
var Tw = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
}(), Op = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Tw();
  }, t.prototype.buildPath = function(e, i) {
    var n = 0.5522848, a = i.cx, o = i.cy, s = i.rx, u = i.ry, l = s * n, f = u * n;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), e.closePath();
  }, t;
}(ot);
Op.prototype.type = "ellipse";
const Np = Op;
var kp = Math.PI, Ns = kp * 2, wr = Math.sin, Jr = Math.cos, Cw = Math.acos, xt = Math.atan2, Jh = Math.abs, bn = Math.sqrt, vn = Math.max, we = Math.min, ce = 1e-4;
function Dw(r, t, e, i, n, a, o, s) {
  var u = e - r, l = i - t, f = o - n, h = s - a, c = h * u - f * l;
  if (!(c * c < ce))
    return c = (f * (t - a) - h * (r - n)) / c, [r + c * u, t + c * l];
}
function ga(r, t, e, i, n, a, o) {
  var s = r - e, u = t - i, l = (o ? a : -a) / bn(s * s + u * u), f = l * u, h = -l * s, c = r + f, v = t + h, d = e + f, y = i + h, p = (c + d) / 2, g = (v + y) / 2, _ = d - c, m = y - v, w = _ * _ + m * m, S = n - a, x = c * y - d * v, b = (m < 0 ? -1 : 1) * bn(vn(0, S * S * w - x * x)), D = (x * m - _ * b) / w, M = (-x * _ - m * b) / w, A = (x * m + _ * b) / w, T = (-x * _ + m * b) / w, E = D - p, L = M - g, P = A - p, I = T - g;
  return E * E + L * L > P * P + I * I && (D = A, M = T), {
    cx: D,
    cy: M,
    x0: -f,
    y0: -h,
    x1: D * (n / S - 1),
    y1: M * (n / S - 1)
  };
}
function Mw(r) {
  var t;
  if (k(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function Aw(r, t) {
  var e, i = vn(t.r, 0), n = vn(t.r0 || 0, 0), a = i > 0, o = n > 0;
  if (!(!a && !o)) {
    if (a || (i = n, n = 0), n > i) {
      var s = i;
      i = n, n = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, c = !!t.clockwise, v = Jh(l - u), d = v > Ns && v % Ns;
      if (d > ce && (v = d), !(i > ce))
        r.moveTo(f, h);
      else if (v > Ns - ce)
        r.moveTo(f + i * Jr(u), h + i * wr(u)), r.arc(f, h, i, u, l, !c), n > ce && (r.moveTo(f + n * Jr(l), h + n * wr(l)), r.arc(f, h, n, l, u, c));
      else {
        var y = void 0, p = void 0, g = void 0, _ = void 0, m = void 0, w = void 0, S = void 0, x = void 0, b = void 0, D = void 0, M = void 0, A = void 0, T = void 0, E = void 0, L = void 0, P = void 0, I = i * Jr(u), R = i * wr(u), H = n * Jr(l), N = n * wr(l), z = v > ce;
        if (z) {
          var G = t.cornerRadius;
          G && (e = Mw(G), y = e[0], p = e[1], g = e[2], _ = e[3]);
          var j = Jh(i - n) / 2;
          if (m = we(j, g), w = we(j, _), S = we(j, y), x = we(j, p), M = b = vn(m, w), A = D = vn(S, x), (b > ce || D > ce) && (T = i * Jr(l), E = i * wr(l), L = n * Jr(u), P = n * wr(u), v < kp)) {
            var J = Dw(I, R, L, P, T, E, H, N);
            if (J) {
              var vt = I - J[0], Lt = R - J[1], fe = T - J[0], ir = E - J[1], nr = 1 / wr(Cw((vt * fe + Lt * ir) / (bn(vt * vt + Lt * Lt) * bn(fe * fe + ir * ir))) / 2), Yr = bn(J[0] * J[0] + J[1] * J[1]);
              M = we(b, (i - Yr) / (nr + 1)), A = we(D, (n - Yr) / (nr - 1));
            }
          }
        }
        if (!z)
          r.moveTo(f + I, h + R);
        else if (M > ce) {
          var Ut = we(g, M), mt = we(_, M), U = ga(L, P, I, R, i, Ut, c), K = ga(T, E, H, N, i, mt, c);
          r.moveTo(f + U.cx + U.x0, h + U.cy + U.y0), M < b && Ut === mt ? r.arc(f + U.cx, h + U.cy, M, xt(U.y0, U.x0), xt(K.y0, K.x0), !c) : (Ut > 0 && r.arc(f + U.cx, h + U.cy, Ut, xt(U.y0, U.x0), xt(U.y1, U.x1), !c), r.arc(f, h, i, xt(U.cy + U.y1, U.cx + U.x1), xt(K.cy + K.y1, K.cx + K.x1), !c), mt > 0 && r.arc(f + K.cx, h + K.cy, mt, xt(K.y1, K.x1), xt(K.y0, K.x0), !c));
        } else
          r.moveTo(f + I, h + R), r.arc(f, h, i, u, l, !c);
        if (!(n > ce) || !z)
          r.lineTo(f + H, h + N);
        else if (A > ce) {
          var Ut = we(y, A), mt = we(p, A), U = ga(H, N, T, E, n, -mt, c), K = ga(I, R, L, P, n, -Ut, c);
          r.lineTo(f + U.cx + U.x0, h + U.cy + U.y0), A < D && Ut === mt ? r.arc(f + U.cx, h + U.cy, A, xt(U.y0, U.x0), xt(K.y0, K.x0), !c) : (mt > 0 && r.arc(f + U.cx, h + U.cy, mt, xt(U.y0, U.x0), xt(U.y1, U.x1), !c), r.arc(f, h, n, xt(U.cy + U.y1, U.cx + U.x1), xt(K.cy + K.y1, K.cx + K.x1), c), Ut > 0 && r.arc(f + K.cx, h + K.cy, Ut, xt(K.y1, K.x1), xt(K.y0, K.x0), !c));
        } else
          r.lineTo(f + H, h + N), r.arc(f, h, n, l, u, c);
      }
      r.closePath();
    }
  }
}
var Ew = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
}(), Bp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Ew();
  }, t.prototype.buildPath = function(e, i) {
    Aw(e, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(ot);
Bp.prototype.type = "sector";
const Kn = Bp;
var Lw = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
}(), Fp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Lw();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.PI * 2;
    e.moveTo(n + i.r, a), e.arc(n, a, i.r, 0, o, !1), e.moveTo(n + i.r0, a), e.arc(n, a, i.r0, 0, o, !0);
  }, t;
}(ot);
Fp.prototype.type = "ring";
const zp = Fp;
function Pw(r, t, e, i) {
  var n = [], a = [], o = [], s = [], u, l, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = r.length; c < v; c++)
      fi(f, f, r[c]), hi(h, h, r[c]);
    fi(f, f, i[0]), hi(h, h, i[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e)
      u = r[c ? c - 1 : v - 1], l = r[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      n.push(j_(r[c]));
      continue;
    } else
      u = r[c - 1], l = r[c + 1];
    J_(a, l, u), Jo(a, a, t);
    var y = xu(d, u), p = xu(d, l), g = y + p;
    g !== 0 && (y /= g, p /= g), Jo(o, a, -y), Jo(s, a, p);
    var _ = Vf([], d, o), m = Vf([], d, s);
    i && (hi(_, _, f), fi(_, _, h), hi(m, m, f), fi(m, m, h)), n.push(_), n.push(m);
  }
  return e && n.push(n.shift()), n;
}
function Vp(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = Pw(n, i, e, t.smoothConstraint);
      r.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = n[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(n[0][0], n[0][1]);
      for (var s = 1, h = n.length; s < h; s++)
        r.lineTo(n[s][0], n[s][1]);
    }
    e && r.closePath();
  }
}
var Iw = function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), Hp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Iw();
  }, t.prototype.buildPath = function(e, i) {
    Vp(e, i, !0);
  }, t;
}(ot);
Hp.prototype.type = "polygon";
const Gp = Hp;
var Rw = function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), Wp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Rw();
  }, t.prototype.buildPath = function(e, i) {
    Vp(e, i, !1);
  }, t;
}(ot);
Wp.prototype.type = "polyline";
const Up = Wp;
var Ow = {}, Nw = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), Yp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Nw();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = pp(Ow, i, this.style);
      n = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      n = i.x1, a = i.y1, o = i.x2, s = i.y2;
    var l = i.percent;
    l !== 0 && (e.moveTo(n, a), l < 1 && (o = n * (1 - l) + o * l, s = a * (1 - l) + s * l), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var i = this.shape;
    return [
      i.x1 * (1 - e) + i.x2 * e,
      i.y1 * (1 - e) + i.y2 * e
    ];
  }, t;
}(ot);
Yp.prototype.type = "line";
const Hr = Yp;
var kt = [], kw = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
}();
function tc(r, t, e) {
  var i = r.cpx2, n = r.cpy2;
  return i != null || n != null ? [
    (e ? Qf : wt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Qf : wt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? jf : Ct)(r.x1, r.cpx1, r.x2, t),
    (e ? jf : Ct)(r.y1, r.cpy1, r.y2, t)
  ];
}
var $p = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new kw();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.x1, a = i.y1, o = i.x2, s = i.y2, u = i.cpx1, l = i.cpy1, f = i.cpx2, h = i.cpy2, c = i.percent;
    c !== 0 && (e.moveTo(n, a), f == null || h == null ? (c < 1 && (no(n, u, o, c, kt), u = kt[1], o = kt[2], no(a, l, s, c, kt), l = kt[1], s = kt[2]), e.quadraticCurveTo(u, l, o, s)) : (c < 1 && (io(n, u, f, o, c, kt), u = kt[1], f = kt[2], o = kt[3], io(a, l, h, s, c, kt), l = kt[1], h = kt[2], s = kt[3]), e.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return tc(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var i = tc(this.shape, e, !0);
    return rm(i, i);
  }, t;
}(ot);
$p.prototype.type = "bezier-curve";
const Xp = $p;
var Bw = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
}(), Zp = function(r) {
  B(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Bw();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, u = i.endAngle, l = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, u, !l);
  }, t;
}(ot);
Zp.prototype.type = "arc";
const Kl = Zp;
var Fw = function(r) {
  B(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, i = this.shapeChanged(), n = 0; n < e.length; n++)
      i = i || e[n].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < e.length; n++)
      e[n].path || e[n].createPathProxy(), e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, i) {
    for (var n = i.paths || [], a = 0; a < n.length; a++)
      n[a].buildPath(e, n[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], i = 0; i < e.length; i++)
      e[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), ot.prototype.getBoundingRect.call(this);
  }, t;
}(ot);
const zw = Fw;
var Vw = function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
}();
const qp = Vw;
var Hw = function(r) {
  B(t, r);
  function t(e, i, n, a, o, s) {
    var u = r.call(this, o) || this;
    return u.x = e ?? 0, u.y = i ?? 0, u.x2 = n ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
}(qp);
const Gw = Hw;
var Ww = function(r) {
  B(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = i ?? 0.5, s.r = n ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(qp);
const Uw = Ww;
var Sr = [0, 0], xr = [0, 0], ya = new nt(), _a = new nt(), Yw = function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++)
      this._corners[i] = new nt();
    for (var i = 0; i < 2; i++)
      this._axes[i] = new nt();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var i = this._corners, n = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, u), i[3].set(a, u), e)
      for (var l = 0; l < 4; l++)
        i[l].transform(e);
    nt.sub(n[0], i[1], i[0]), nt.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = n[l].dot(i[0]);
  }, r.prototype.intersect = function(t, e) {
    var i = !0, n = !e;
    return ya.set(1 / 0, 1 / 0), _a.set(0, 0), !this._intersectCheckOneSide(this, t, ya, _a, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, ya, _a, n, -1) && (i = !1, n) || n || nt.copy(e, i ? ya : _a), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, n, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, Sr), this._getProjMinMaxOnAxis(u, e._corners, xr), Sr[1] < xr[0] || Sr[0] > xr[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(xr[0] - Sr[1]), h = Math.abs(Sr[0] - xr[1]);
        Math.min(f, h) > n.len() && (f < h ? nt.scale(n, l, -f * o) : nt.scale(n, l, h * o));
      } else if (i) {
        var f = Math.abs(xr[0] - Sr[1]), h = Math.abs(Sr[0] - xr[1]);
        Math.min(f, h) < i.len() && (f < h ? nt.scale(i, l, f * o) : nt.scale(i, l, -h * o));
      }
    }
    return s;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, i) {
    for (var n = this._axes[t], a = this._origin, o = e[0].dot(n) + a[t], s = o, u = o, l = 1; l < e.length; l++) {
      var f = e[l].dot(n) + a[t];
      s = Math.min(f, s), u = Math.max(f, u);
    }
    i[0] = s, i[1] = u;
  }, r;
}();
const ho = Yw;
var $w = [], Xw = function(r) {
  B(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, i) {
    i ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, i) {
    i = i || !1;
    for (var n = 0; n < e.length; n++)
      this.addDisplayable(e[n], i);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var i = this._cursor; i < this._displayables.length; i++)
      e && e(this._displayables[i]);
    for (var i = 0; i < this._temporaryDisplayables.length; i++)
      e && e(this._temporaryDisplayables[i]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new rt(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var n = this._displayables[i], a = n.getBoundingRect().clone();
        n.needLocalTransform() && a.applyTransform(n.getLocalTransform($w)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    if (a.contain(n[0], n[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, i))
          return !0;
      }
    return !1;
  }, t;
}(qn);
const Zw = Xw;
var qw = pt();
function Kw(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    i ? (l = X(i.duration, 200), f = X(i.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Y(h) && (h = h(e, n)), Y(l) && (l = l(e));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Ql(r, t, e, i, n, a, o) {
  var s = !1, u;
  Y(n) ? (o = a, a = n, n = null) : V(n) && (a = n.cb, o = n.during, s = n.isFrom, u = n.removeOpt, n = n.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = Kw(r, i, n, l ? u || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
  if (f && f.duration > 0) {
    var h = f.duration, c = f.delay, v = f.easing, d = {
      duration: h,
      delay: c || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function Be(r, t, e, i, n, a) {
  Ql("update", r, t, e, i, n, a);
}
function Gr(r, t, e, i, n, a) {
  Ql("enter", r, t, e, i, n, a);
}
function Tn(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function Kp(r, t, e, i, n, a) {
  Tn(r) || Ql("leave", r, t, e, i, n, a);
}
function ec(r, t, e, i) {
  r.removeTextContent(), r.removeTextGuideLine(), Kp(r, {
    style: {
      opacity: 0
    }
  }, t, e, i);
}
function qu(r, t, e) {
  function i() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(n) {
    n.isGroup || ec(n, t, e, i);
  }) : ec(r, t, e, i);
}
function Qw(r) {
  qw(r).oldStyle = r.style;
}
var co = Math.max, vo = Math.min, Ku = {};
function jw(r) {
  return ot.extend(r);
}
var Jw = Sw;
function tS(r, t) {
  return Jw(r, t);
}
function ge(r, t) {
  Ku[r] = t;
}
function eS(r) {
  if (Ku.hasOwnProperty(r))
    return Ku[r];
}
function jl(r, t, e, i) {
  var n = ww(r, t);
  return e && (i === "center" && (e = jp(e, n.getBoundingRect())), Jp(n, e)), n;
}
function Qp(r, t, e) {
  var i = new Ni({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(n) {
      if (e === "center") {
        var a = {
          width: n.width,
          height: n.height
        };
        i.setStyle(jp(t, a));
      }
    }
  });
  return i;
}
function jp(r, t) {
  var e = t.width / t.height, i = r.height * e, n;
  i <= r.width ? n = r.height : (i = r.width, n = i / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - i / 2,
    y: o - n / 2,
    width: i,
    height: n
  };
}
var rS = xw;
function Jp(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function Nn(r, t) {
  return pp(r, r, {
    lineWidth: t
  }), r;
}
function iS(r) {
  return gp(r.shape, r.shape, r.style), r;
}
var nS = Lr;
function aS(r, t) {
  for (var e = Il([]); r && r !== t; )
    yi(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function Jl(r, t, e) {
  return t && !Gt(t) && (t = Bl.getLocalTransform(t)), e && (t = Ol([], t)), oe([], r, t);
}
function oS(r, t, e) {
  var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -i : r === "right" ? i : 0, r === "top" ? -n : r === "bottom" ? n : 0];
  return a = Jl(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function rc(r) {
  return !r.isGroup;
}
function sS(r) {
  return r.shape != null;
}
function tg(r, t, e) {
  if (!r || !t)
    return;
  function i(o) {
    var s = {};
    return o.traverse(function(u) {
      rc(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function n(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return sS(o) && (s.shape = O({}, o.shape)), s;
  }
  var a = i(r);
  t.traverse(function(o) {
    if (rc(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = n(o);
        o.attr(n(s)), Be(o, u, e, st(o).dataIndex);
      }
    }
  });
}
function uS(r, t) {
  return W(r, function(e) {
    var i = e[0];
    i = co(i, t.x), i = vo(i, t.x + t.width);
    var n = e[1];
    return n = co(n, t.y), n = vo(n, t.y + t.height), [i, n];
  });
}
function lS(r, t) {
  var e = co(r.x, t.x), i = vo(r.x + r.width, t.x + t.width), n = co(r.y, t.y), a = vo(r.y + r.height, t.y + t.height);
  if (i >= e && a >= n)
    return {
      x: e,
      y: n,
      width: i - e,
      height: a - n
    };
}
function tf(r, t, e) {
  var i = O({
    rectHover: !0
  }, t), n = i.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (n.image = r.slice(8), at(n, e), new Ni(i)) : jl(r.replace("path://", ""), i, e, "center");
}
function fS(r, t, e, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (eg(r, t, e, i, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function eg(r, t, e, i, n, a, o, s) {
  var u = e - r, l = i - t, f = o - n, h = s - a, c = ks(f, h, u, l);
  if (hS(c))
    return !1;
  var v = r - n, d = t - a, y = ks(v, d, u, l) / c;
  if (y < 0 || y > 1)
    return !1;
  var p = ks(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function ks(r, t, e, i) {
  return r * i - e * t;
}
function hS(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function No(r) {
  var t = r.itemTooltipOption, e = r.componentModel, i = r.itemName, n = F(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: i,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u && C(lt(u), function(f) {
    Vr(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = st(r.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: i,
    option: at({
      content: i,
      encodeHTMLContent: !0,
      formatterParams: s
    }, n)
  };
}
function ic(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function ef(r, t) {
  if (r)
    if (k(r))
      for (var e = 0; e < r.length; e++)
        ic(r[e], t);
    else
      ic(r, t);
}
ge("circle", ql);
ge("ellipse", Np);
ge("sector", Kn);
ge("ring", zp);
ge("polygon", Gp);
ge("polyline", Up);
ge("rect", _t);
ge("line", Hr);
ge("bezierCurve", Xp);
ge("arc", Kl);
const cS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Kl,
  BezierCurve: Xp,
  BoundingRect: rt,
  Circle: ql,
  CompoundPath: zw,
  Ellipse: Np,
  Group: se,
  Image: Ni,
  IncrementalDisplayable: Zw,
  Line: Hr,
  LinearGradient: Gw,
  OrientedBoundingRect: ho,
  Path: ot,
  Point: nt,
  Polygon: Gp,
  Polyline: Up,
  RadialGradient: Uw,
  Rect: _t,
  Ring: zp,
  Sector: Kn,
  Text: ue,
  applyTransform: Jl,
  clipPointsByRect: uS,
  clipRectByRect: lS,
  createIcon: tf,
  extendPath: tS,
  extendShape: jw,
  getShapeClass: eS,
  getTransform: aS,
  groupTransition: tg,
  initProps: Gr,
  isElementRemoved: Tn,
  lineLineIntersect: eg,
  linePolygonIntersect: fS,
  makeImage: Qp,
  makePath: jl,
  mergePath: rS,
  registerShape: ge,
  removeElement: Kp,
  removeElementWithFadeOut: qu,
  resizePath: Jp,
  setTooltipConfig: No,
  subPixelOptimize: nS,
  subPixelOptimizeLine: Nn,
  subPixelOptimizeRect: iS,
  transformDirection: oS,
  traverseElements: ef,
  updateProps: Be
}, Symbol.toStringTag, { value: "Module" }));
var ko = {};
function vS(r, t) {
  for (var e = 0; e < tr.length; e++) {
    var i = tr[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function nc(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = Y(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < tr.length; l++) {
    var f = tr[l], h = t[f];
    u[f] = X(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function rg(r, t, e, i) {
  e = e || ko;
  for (var n = r instanceof ue, a = !1, o = 0; o < Gh.length; o++) {
    var s = t[Gh[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = n ? r : r.getTextContent();
  if (a) {
    n || (u || (u = new ue(), r.setTextContent(u)), r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = nc(e, t), f = t.normal, h = !!f.getShallow("show"), c = Mi(f, i && i.normal, e, !1, !n);
    c.text = l.normal, n || r.setTextConfig(ac(f, e, !1));
    for (var o = 0; o < tr.length; o++) {
      var v = tr[o], s = t[v];
      if (s) {
        var d = u.ensureState(v), y = !!X(s.getShallow("show"), h);
        if (y !== h && (d.ignore = !y), d.style = Mi(s, i && i[v], e, !0, !n), d.style.text = l[v], !n) {
          var p = r.ensureState(v);
          p.textConfig = ac(s, e, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), e.enableTextSetter && (rf(u).setLabelText = function(g) {
      var _ = nc(e, t, g);
      vS(u, _);
    });
  } else
    u && (u.ignore = !0);
  r.dirty();
}
function dS(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < tr.length; i++) {
    var n = tr[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function Mi(r, t, e, i, n) {
  var a = {};
  return pS(a, r, e, i, n), t && O(a, t), a;
}
function ac(r, t, e) {
  t = t || {};
  var i = {}, n, a = r.getShallow("rotate"), o = X(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return n = r.getShallow("position") || (e ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", i;
}
function pS(r, t, e, i, n) {
  e = e || ko;
  var a = t.ecModel, o = a && a.option.textStyle, s = gS(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        lc(u[l] = {}, f, o, e, i, n, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), lc(r, t, o, e, i, n, !0, !1);
}
function gS(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || ko).rich;
    if (e) {
      t = t || {};
      for (var i = lt(e), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var oc = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], sc = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], uc = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function lc(r, t, e, i, n, a, o, s) {
  e = !n && e || ko;
  var u = i && i.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = X(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || e.color, f = f || e.textBorderColor), l != null && (r.fill = l), f != null && (r.stroke = f);
  var c = X(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = X(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = X(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (r.opacity = h), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var y = 0; y < oc.length; y++) {
    var p = oc[y], g = X(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var y = 0; y < sc.length; y++) {
    var p = sc[y], g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var _ = t.getShallow("baseline");
    _ != null && (r.verticalAlign = _);
  }
  if (!o || !i.disableBox) {
    for (var y = 0; y < uc.length; y++) {
      var p = uc[y], g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (r.borderDash = m), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && gt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = u), (r.borderColor === "auto" || r.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && gt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = u);
  }
}
function yS(r, t) {
  var e = t && t.getModel("textStyle");
  return be([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var rf = pt();
function _S(r, t, e, i) {
  if (r) {
    var n = rf(r);
    n.prevValue = n.value, n.value = e;
    var a = t.normal;
    n.valueAnimation = a.get("valueAnimation"), n.valueAnimation && (n.precision = a.get("precision"), n.defaultInterpolatedText = i, n.statesModels = t);
  }
}
var mS = ["textStyle", "color"], Bs = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Fs = new ue(), wS = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(mS) : null);
    }, r.prototype.getFont = function() {
      return yS({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < Bs.length; i++)
        e[Bs[i]] = this.getShallow(Bs[i]);
      return Fs.useStyle(e), Fs.update(), Fs.getBoundingRect();
    }, r;
  }()
);
const SS = wS;
var ig = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], xS = On(ig), bS = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return xS(this, t);
    }, r;
  }()
), ng = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], TS = On(ng), CS = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return TS(this, t, e);
    }, r;
  }()
), Wr = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.parentModel = e, this.ecModel = i, this.option = t;
    }
    return r.prototype.init = function(t, e, i) {
    }, r.prototype.mergeOption = function(t, e) {
      et(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var i = this.option, n = i == null ? i : i[t];
      if (n == null && !e) {
        var a = this.parentModel;
        a && (n = a.getShallow(t));
      }
      return n;
    }, r.prototype.getModel = function(t, e) {
      var i = t != null, n = i ? this.parsePath(t) : null, a = i ? this._doGet(n) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(Q(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!$.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var i = this.option;
      if (!t)
        return i;
      for (var n = 0; n < t.length && !(t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++)
        ;
      return i == null && e && (i = e._doGet(this.resolveParentPath(t), e.parentModel)), i;
    }, r;
  }()
);
Wl(Wr);
q0(Wr);
Me(Wr, bS);
Me(Wr, CS);
Me(Wr, t1);
Me(Wr, SS);
const At = Wr;
var DS = Math.round(Math.random() * 10);
function Bo(r) {
  return [r || "", DS++].join("_");
}
function MS(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = Te(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = Te(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function AS(r, t) {
  r.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = e(o), f = l.graph, h = l.noEntryList, c = {};
    for (C(a, function(_) {
      c[_] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], y = !!c[v];
      y && (s.call(u, v, d.originalDeps.slice()), delete c[v]), C(d.successor, y ? g : p);
    }
    C(c, function() {
      var _ = "";
      throw process.env.NODE_ENV !== "production" && (_ = fo("Circular dependency may exists: ", c, a, o)), new Error(_);
    });
    function p(_) {
      f[_].entryCount--, f[_].entryCount === 0 && h.push(_);
    }
    function g(_) {
      c[_] = !0, p(_);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return C(a, function(u) {
      var l = i(o, u), f = l.originalDeps = t(u), h = n(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), C(h, function(c) {
        it(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = i(o, c);
        it(v.successor, c) < 0 && v.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function i(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function n(a, o) {
    var s = [];
    return C(a, function(u) {
      it(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function ag(r, t) {
  return et(et({}, r, !0), t, !0);
}
const ES = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, LS = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var po = "ZH", nf = "EN", mi = nf, qa = {}, af = {}, og = $.domSupported ? function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || mi).toUpperCase()
  );
  return r.indexOf(po) > -1 ? po : mi;
}() : mi;
function sg(r, t) {
  r = r.toUpperCase(), af[r] = new At(t), qa[r] = t;
}
function PS(r) {
  if (F(r)) {
    var t = qa[r.toUpperCase()] || {};
    return r === po || r === nf ? Q(t) : et(Q(t), Q(qa[mi]), !1);
  } else
    return et(Q(r), Q(qa[mi]), !1);
}
function IS(r) {
  return af[r];
}
function RS() {
  return af[mi];
}
sg(nf, ES);
sg(po, LS);
var of = 1e3, sf = of * 60, Cn = sf * 60, ae = Cn * 24, fc = ae * 365, dn = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, ma = "{yyyy}-{MM}-{dd}", hc = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: ma,
  hour: ma + " " + dn.hour,
  minute: ma + " " + dn.minute,
  second: ma + " " + dn.second,
  millisecond: dn.none
}, zs = ["year", "month", "day", "hour", "minute", "second", "millisecond"], ug = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function We(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function wi(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function OS(r) {
  return r === wi(r);
}
function NS(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Fo(r, t, e, i) {
  var n = ke(r), a = n[uf(e)](), o = n[Si(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = n[zo(e)](), l = n["get" + (e ? "UTC" : "") + "Day"](), f = n[kn(e)](), h = (f - 1) % 12 + 1, c = n[Vo(e)](), v = n[Ho(e)](), d = n[Go(e)](), y = f >= 12 ? "pm" : "am", p = y.toUpperCase(), g = i instanceof At ? i : IS(i || og) || RS(), _ = g.getModel("time"), m = _.get("month"), w = _.get("monthAbbr"), S = _.get("dayOfWeek"), x = _.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, y + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, We(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, m[o - 1]).replace(/{MMM}/g, w[o - 1]).replace(/{MM}/g, We(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, We(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, S[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, We(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, We(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, We(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, We(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, We(d, 3)).replace(/{S}/g, d + "");
}
function kS(r, t, e, i, n) {
  var a = null;
  if (F(e))
    a = e;
  else if (Y(e))
    a = e(r.value, t, {
      level: r.level
    });
  else {
    var o = O({}, dn);
    if (r.level > 0)
      for (var s = 0; s < zs.length; ++s)
        o[zs[s]] = "{primary|" + o[zs[s]] + "}";
    var u = e ? e.inherit === !1 ? e : at(e, o) : o, l = lg(r.value, n);
    if (u[l])
      a = u[l];
    else if (u.inherit) {
      for (var f = ug.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (k(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      h = Math.min(h, a.length - 1), a = a[h];
    }
  }
  return Fo(new Date(r.value), a, n, i);
}
function lg(r, t) {
  var e = ke(r), i = e[Si(t)]() + 1, n = e[zo(t)](), a = e[kn(t)](), o = e[Vo(t)](), s = e[Ho(t)](), u = e[Go(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, c = h && a === 0, v = c && n === 1, d = v && i === 1;
  return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function cc(r, t, e) {
  var i = ht(r) ? ke(r) : r;
  switch (t = t || lg(r, e), t) {
    case "year":
      return i[uf(e)]();
    case "half-year":
      return i[Si(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((i[Si(e)]() + 1) / 4);
    case "month":
      return i[Si(e)]();
    case "day":
      return i[zo(e)]();
    case "half-day":
      return i[kn(e)]() / 24;
    case "hour":
      return i[kn(e)]();
    case "minute":
      return i[Vo(e)]();
    case "second":
      return i[Ho(e)]();
    case "millisecond":
      return i[Go(e)]();
  }
}
function uf(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function Si(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function zo(r) {
  return r ? "getUTCDate" : "getDate";
}
function kn(r) {
  return r ? "getUTCHours" : "getHours";
}
function Vo(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function Ho(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Go(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function BS(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function fg(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function hg(r) {
  return r ? "setUTCDate" : "setDate";
}
function cg(r) {
  return r ? "setUTCHours" : "setHours";
}
function vg(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function dg(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function pg(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function gg(r) {
  if (!Jd(r))
    return F(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function yg(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, i) {
    return i.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var Wo = bd;
function Qu(r, t, e) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && be(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var u = o ? ke(r) : r;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else
      return Fo(u, i, e);
  }
  if (t === "ordinal")
    return eo(r) ? n(r) : ht(r) && a(r) ? r + "" : "-";
  var l = lo(r);
  return a(l) ? gg(l) : eo(r) ? n(r) : typeof r == "boolean" ? r + "" : "-";
}
var vc = ["a", "b", "c", "d", "e", "f", "g"], Vs = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function _g(r, t, e) {
  k(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = vc[a];
    r = r.replace(Vs(o), Vs(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      r = r.replace(Vs(vc[u], s), e ? Ft(l) : l);
    }
  return r;
}
function FS(r, t) {
  var e = F(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, i = e.color, n = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!i)
    return "";
  if (a === "html")
    return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ft(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Ft(i) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: n === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: i
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: i
    }
  };
}
function Bn(r, t) {
  return t = t || "transparent", F(r) ? r : V(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var Ka = C, zS = ["left", "right", "top", "bottom", "width", "height"], wa = [["width", "left", "right"], ["height", "top", "bottom"]];
function lf(r, t, e, i, n) {
  var a = 0, o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (r === "horizontal") {
      var y = f.width + (c ? -c.x + f.x : 0);
      v = a + y, v > i || u.newline ? (a = 0, v = y, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      d = o + p, d > n || u.newline ? (a += s + e, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), r === "horizontal" ? a = v + e : o = d + e);
  });
}
var Dn = lf;
dt(lf, "vertical");
dt(lf, "horizontal");
function go(r, t, e) {
  e = Wo(e || 0);
  var i = t.width, n = t.height, a = Rt(r.left, i), o = Rt(r.top, n), s = Rt(r.right, i), u = Rt(r.bottom, n), l = Rt(r.width, i), f = Rt(r.height, n), h = e[2] + e[0], c = e[1] + e[3], v = r.aspect;
  switch (isNaN(l) && (l = i - s - c - a), isNaN(f) && (f = n - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > i / n ? l = i * 0.8 : f = n * 0.8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = i - s - l - c), isNaN(o) && (o = n - u - f - h), r.left || r.right) {
    case "center":
      a = i / 2 - l / 2 - e[3];
      break;
    case "right":
      a = i - l - c;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = n / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = n - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = i - c - a - (s || 0)), isNaN(f) && (f = n - h - o - (u || 0));
  var d = new rt(a + e[3], o + e[0], l, f);
  return d.margin = e, d;
}
function Fn(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return V(t) ? t : t ? {
    type: t
  } : null;
}
function Ai(r, t, e) {
  var i = e && e.ignoreSize;
  !k(i) && (i = [i, i]);
  var n = o(wa[0], 0), a = o(wa[1], 1);
  l(wa[0], r, n), l(wa[1], r, a);
  function o(f, h) {
    var c = {}, v = 0, d = {}, y = 0, p = 2;
    if (Ka(f, function(m) {
      d[m] = r[m];
    }), Ka(f, function(m) {
      s(t, m) && (c[m] = d[m] = t[m]), u(c, m) && v++, u(d, m) && y++;
    }), i[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (y === p || !v)
      return d;
    if (v >= p)
      return c;
    for (var g = 0; g < f.length; g++) {
      var _ = f[g];
      if (!s(c, _) && s(r, _)) {
        c[_] = r[_];
        break;
      }
    }
    return c;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, c) {
    Ka(f, function(v) {
      h[v] = c[v];
    });
  }
}
function Uo(r) {
  return VS({}, r);
}
function VS(r, t) {
  return t && r && Ka(zS, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var HS = pt(), ki = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = Bo("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Fn(this), a = n ? Uo(e) : {}, o = i.getTheme();
      et(e, o.get(this.mainType)), et(e, this.getDefaultOption()), n && Ai(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      et(this.option, e, !0);
      var n = Fn(this);
      n && Ai(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!$0(e))
        return e.defaultOption;
      var i = HS(this);
      if (!i.defaultOption) {
        for (var n = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && n.push(o), a = a.superClass;
        }
        for (var s = {}, u = n.length - 1; u >= 0; u--)
          s = et(s, n[u], !0);
        i.defaultOption = s;
      }
      return i.defaultOption;
    }, t.prototype.getReferringComponents = function(e, i) {
      var n = e + "Index", a = e + "Id";
      return Zn(this.ecModel, e, {
        index: this.get(n, !0),
        id: this.get(a, !0)
      }, i);
    }, t.prototype.getBoxLayoutParams = function() {
      var e = this;
      return {
        left: e.get("left"),
        top: e.get("top"),
        right: e.get("right"),
        bottom: e.get("bottom"),
        width: e.get("width"),
        height: e.get("height")
      };
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    }(), t;
  }(At)
);
op(ki, At);
Po(ki);
MS(ki);
AS(ki, GS);
function GS(r) {
  var t = [];
  return C(ki.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = W(t, function(e) {
    return Te(e).main;
  }), r !== "dataset" && it(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
const ut = ki;
var mg = "";
typeof navigator < "u" && (mg = navigator.platform || "");
var ti = "rgba(0, 0, 0, 0.2)";
const WS = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: ti,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: ti,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: ti,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: ti,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: ti,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: ti,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: mg.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var ju = q(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), le = "original", Wt = "arrayRows", Ee = "objectRows", ze = "keyedColumns", Oe = "typedArray", wg = "unknown", Ne = "column", Bi = "row", $t = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Sg = pt();
function US(r) {
  Sg(r).datasetMap = q();
}
function YS(r, t, e) {
  var i = {}, n = xg(t);
  if (!n || !r)
    return i;
  var a = [], o = [], s = t.ecModel, u = Sg(s).datasetMap, l = n.uid + "_" + e.seriesLayoutBy, f, h;
  r = r.slice(), C(r, function(y, p) {
    var g = V(y) ? y : r[p] = {
      name: y
    };
    g.type === "ordinal" && f == null && (f = p, h = d(g)), i[g.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  C(r, function(y, p) {
    var g = y.name, _ = d(y);
    if (f == null) {
      var m = c.valueWayDim;
      v(i[g], m, _), v(o, m, _), c.valueWayDim += _;
    } else if (f === p)
      v(i[g], 0, _), v(a, 0, _);
    else {
      var m = c.categoryWayDim;
      v(i[g], m, _), v(o, m, _), c.categoryWayDim += _;
    }
  });
  function v(y, p, g) {
    for (var _ = 0; _ < g; _++)
      y.push(p + _);
  }
  function d(y) {
    var p = y.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (i.itemName = a), o.length && (i.seriesName = o), i;
}
function xg(r) {
  var t = r.get("data", !0);
  if (!t)
    return Zn(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, pe).models[0];
}
function $S(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Zn(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, pe).models;
}
function bg(r, t) {
  return XS(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function XS(r, t, e, i, n, a) {
  var o, s = 5;
  if (Nt(r))
    return $t.Not;
  var u, l;
  if (i) {
    var f = i[a];
    V(f) ? (u = f.name, l = f.type) : F(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? $t.Must : $t.Not;
  if (t === Wt) {
    var h = r;
    if (e === Bi) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === Ee) {
    var y = r;
    if (!u)
      return $t.Not;
    for (var v = 0; v < y.length && v < s; v++) {
      var p = y[v];
      if (p && (o = w(p[u])) != null)
        return o;
    }
  } else if (t === ze) {
    var g = r;
    if (!u)
      return $t.Not;
    var c = g[u];
    if (!c || Nt(c))
      return $t.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null)
        return o;
  } else if (t === le)
    for (var _ = r, v = 0; v < _.length && v < s; v++) {
      var p = _[v], m = $n(p);
      if (!k(m))
        return $t.Not;
      if ((o = w(m[a])) != null)
        return o;
    }
  function w(S) {
    var x = F(S);
    if (S != null && Number.isFinite(Number(S)) && S !== "")
      return x ? $t.Might : $t.Not;
    if (x && S !== "-")
      return $t.Must;
  }
  return $t.Not;
}
var ZS = q();
function qS(r, t, e) {
  var i = ZS.get(t);
  if (!i)
    return e;
  var n = i(r);
  if (!n)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      Z(Ti(n[a]));
  return e.concat(n);
}
var dc = pt();
pt();
var ff = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = Ot(this.get("color", !0)), a = this.get("colorLayer", !0);
      return QS(this, dc, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      jS(this, dc);
    }, r;
  }()
);
function KS(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function QS(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(n))
    return l[n];
  var f = o == null || !i ? e : KS(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return n && (l[n] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function jS(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var Sa, Zi, pc, Hs = "\0_ec_inner", gc = 1, JS = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, tx = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, yo = {};
function ex(r) {
  C(r, function(t, e) {
    if (!ut.hasClass(e)) {
      var i = JS[e];
      i && !yo[i] && (Et("Component " + e + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), yo[i] = !0);
    }
  });
}
var Tg = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new At(a), this._locale = new At(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      process.env.NODE_ENV !== "production" && (Z(e != null, "option is null/undefined"), Z(e[Hs] !== gc, "please use chart.getOption()"));
      var a = mc(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, mc(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && ex(o), !this.option || e === "recreate" ? pc(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (n = !0, this._mergeOption(s, i));
      }
      if (!e || e === "recreate" || e === "media") {
        var u = a.getMediaOption(this);
        u.length && C(u, function(l) {
          n = !0, this._mergeOption(l, i);
        }, this);
      }
      return n;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, i) {
      var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = q(), l = i && i.replaceMergeMainTypeMap;
      US(this), C(e, function(h, c) {
        h != null && (ut.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : n[c] = n[c] == null ? Q(h) : et(n[c], h, !0));
      }), l && l.each(function(h, c) {
        ut.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), ut.topologicalTravel(s, ut.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = qS(this, h, Ot(e[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), y = I0(v, c, d);
        z0(y, h, ut), n[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], _ = 0, m, w;
        C(y, function(S, x) {
          var b = S.existing, D = S.newOption;
          if (!D)
            b && (b.mergeOption({}, this), b.optionUpdated({}, !1));
          else {
            var M = h === "series", A = ut.getClass(
              h,
              S.keyInfo.subType,
              !M
              // Give a more detailed warn later if series don't exists
            );
            if (!A) {
              if (process.env.NODE_ENV !== "production") {
                var T = S.keyInfo.subType, E = tx[T];
                yo[T] || (yo[T] = !0, Et(E ? "Series " + T + ` is used but not imported.
import { ` + E + ` } from 'echarts/charts';
echarts.use([` + E + "]);" : "Unknown series " + T));
              }
              return;
            }
            if (h === "tooltip") {
              if (m) {
                process.env.NODE_ENV !== "production" && (w || (Mt("Currently only one tooltip component is allowed."), w = !0));
                return;
              }
              m = !0;
            }
            if (b && b.constructor === A)
              b.name = S.keyInfo.name, b.mergeOption(D, this), b.optionUpdated(D, !1);
            else {
              var L = O({
                componentIndex: x
              }, S.keyInfo);
              b = new A(D, this, this, L), O(b, L), S.brandNew && (b.__requireNewView = !0), b.init(D, this, this), b.optionUpdated(null, !0);
            }
          }
          b ? (p.push(b.option), g.push(b), _++) : (p.push(void 0), g.push(void 0));
        }, this), n[h] = p, a.set(h, g), o.set(h, _), h === "series" && Sa(this);
      }
      this._seriesIndices || Sa(this);
    }, t.prototype.getOption = function() {
      var e = Q(this.option);
      return C(e, function(i, n) {
        if (ut.hasClass(n)) {
          for (var a = Ot(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Ti(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[Hs], e;
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, i) {
      var n = this._componentsMap.get(e);
      if (n) {
        var a = n[i || 0];
        if (a)
          return a;
        if (i == null) {
          for (var o = 0; o < n.length; o++)
            if (n[o])
              return n[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var i = e.mainType;
      if (!i)
        return [];
      var n = e.index, a = e.id, o = e.name, s = this._componentsMap.get(i);
      if (!s || !s.length)
        return [];
      var u;
      return n != null ? (u = [], C(Ot(n), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = yc("id", a, s) : o != null ? u = yc("name", o, s) : u = St(s, function(l) {
        return !!l;
      }), _c(u, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : St(this._componentsMap.get(n), function(l) {
        return !!l;
      });
      return u(_c(o, e));
      function s(l) {
        var f = n + "Index", h = n + "Id", c = n + "Name";
        return l && (l[f] != null || l[h] != null || l[c] != null) ? {
          mainType: n,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[c]
        } : null;
      }
      function u(l) {
        return e.filter ? St(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (Y(e)) {
        var o = i, s = e;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = F(e) ? a.get(e) : V(e) ? this.findComponents(e) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && i.call(n, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var i = Ce(e, null);
      return St(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return St(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return St(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      Zi(this), C(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      C(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      Zi(this), C(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return C(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return Zi(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      Zi(this);
      var n = [];
      C(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = q(n);
    }, t.prototype.restoreData = function(e) {
      Sa(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        ut.hasClass(o) && n.push(o);
      }), ut.topologicalTravel(n, ut.getAllClassMainTypes(), function(a) {
        C(i.get(a), function(o) {
          o && (a !== "series" || !rx(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      Sa = function(e) {
        var i = e._seriesIndices = [];
        C(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = q(i);
      }, Zi = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, pc = function(e, i) {
        e.option = {}, e.option[Hs] = gc, e._componentsMap = q({
          series: []
        }), e._componentsCount = q();
        var n = i.aria;
        V(n) && n.enabled == null && (n.enabled = !0), ix(i, e._theme.option), et(i, WS, !1), e._mergeOption(i, null);
      };
    }(), t;
  }(At)
);
function rx(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function ix(r, t) {
  var e = r.color && !r.colorLayer;
  C(t, function(i, n) {
    n === "colorLayer" && e || ut.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? et(r[n], i, !1) : Q(i) : r[n] == null && (r[n] = i));
  });
}
function yc(r, t, e) {
  if (k(t)) {
    var i = q();
    return C(t, function(a) {
      if (a != null) {
        var o = Ce(a, null);
        o != null && i.set(a, !0);
      }
    }), St(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = Ce(t, null);
    return St(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function _c(r, t) {
  return t.hasOwnProperty("subType") ? St(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function mc(r) {
  var t = q();
  return r && C(Ot(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && Z(ut.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Me(Tg, ff);
const Cg = Tg;
var nx = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], ax = (
  /** @class */
  function() {
    function r(t) {
      C(nx, function(e) {
        this[e] = ft(t[e], t);
      }, this);
    }
    return r;
  }()
);
const Dg = ax;
var Gs = {}, ox = (
  /** @class */
  function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var i = [];
      C(Gs, function(n, a) {
        var o = n.create(t, e);
        i = i.concat(o || []);
      }), this._coordinateSystems = i;
    }, r.prototype.update = function(t, e) {
      C(this._coordinateSystems, function(i) {
        i.update && i.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      Gs[t] = e;
    }, r.get = function(t) {
      return Gs[t];
    }, r;
  }()
);
const hf = ox;
var sx = /^(min|max)?(.+)$/, ux = (
  /** @class */
  function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (C(Ot(t.series), function(o) {
        o && o.data && Nt(o.data) && Su(o.data);
      }), C(Ot(t.dataset), function(o) {
        o && o.source && Nt(o.source) && Su(o.source);
      })), t = Q(t);
      var n = this._optionBackup, a = lx(t, e, !n);
      this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], Q(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, i = this._timelineOptions;
      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = Q(
          // FIXME:TS as TimelineModel or quivlant interface
          i[n.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!n.length && !a)
        return s;
      for (var u = 0, l = n.length; u < l; u++)
        fx(n[u].query, e, i) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !cx(o, this._currentMediaIndices) && (s = W(o, function(f) {
        return Q(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  }()
);
function lx(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (k(l) ? C(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && V(v.query) && V(v.query.option) && Et("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? i.push(v) : n || (n = v));
  }) : process.env.NODE_ENV !== "production" && Et("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), C(u, function(v) {
    return c(v);
  }), C(i, function(v) {
    return c(v.option);
  });
  function c(v) {
    C(t, function(d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: n,
    mediaList: i
  };
}
function fx(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return C(r, function(a, o) {
    var s = o.match(sx);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      hx(i[l], a, u) || (n = !1);
    }
  }), n;
}
function hx(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function cx(r, t) {
  return r.join(",") === t.join(",");
}
const vx = ux;
var qt = C, zn = V, wc = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Ws(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = wc.length; e < i; e++) {
      var n = wc[e], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.normal." + n, n), r[n] = r[n] || {}, r[n].normal ? et(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.emphasis." + n, "emphasis." + n), r[n] = r[n] || {}, r[n].emphasis ? et(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function Dt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && De("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, at(r[t], i)) : r[t] = i), n && (process.env.NODE_ENV !== "production" && De(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function pn(r) {
  Dt(r, "itemStyle"), Dt(r, "lineStyle"), Dt(r, "areaStyle"), Dt(r, "label"), Dt(r, "labelLine"), Dt(r, "upperLabel"), Dt(r, "edgeLabel");
}
function ct(r, t) {
  var e = zn(r) && r[t], i = zn(e) && e.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && De("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = Sh.length; n < a; n++) {
      var o = Sh[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
  }
}
function te(r) {
  r && (pn(r), ct(r, "label"), r.emphasis && ct(r.emphasis, "label"));
}
function dx(r) {
  if (zn(r)) {
    Ws(r), pn(r), ct(r, "label"), ct(r, "upperLabel"), ct(r, "edgeLabel"), r.emphasis && (ct(r.emphasis, "label"), ct(r.emphasis, "upperLabel"), ct(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (Ws(t), te(t));
    var e = r.markLine;
    e && (Ws(e), te(e));
    var i = r.markArea;
    i && te(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Nt(a))
        for (var o = 0; o < a.length; o++)
          te(a[o]);
      C(r.categories, function(l) {
        pn(l);
      });
    }
    if (n && !Nt(n))
      for (var o = 0; o < n.length; o++)
        te(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        te(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        k(u[o]) ? (te(u[o][0]), te(u[o][1])) : te(u[o]);
    r.type === "gauge" ? (ct(r, "axisLabel"), ct(r, "title"), ct(r, "detail")) : r.type === "treemap" ? (Dt(r.breadcrumb, "itemStyle"), C(r.levels, function(l) {
      pn(l);
    })) : r.type === "tree" && pn(r.leaves);
  }
}
function Pe(r) {
  return k(r) ? r : r ? [r] : [];
}
function Sc(r) {
  return (k(r) ? r[0] : r) || {};
}
function px(r, t) {
  qt(Pe(r.series), function(i) {
    zn(i) && dx(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), qt(e, function(i) {
    qt(Pe(r[i]), function(n) {
      n && (ct(n, "axisLabel"), ct(n.axisPointer, "label"));
    });
  }), qt(Pe(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    ct(n, "axisLabel"), ct(n && n.axisPointer, "label");
  }), qt(Pe(r.calendar), function(i) {
    Dt(i, "itemStyle"), ct(i, "dayLabel"), ct(i, "monthLabel"), ct(i, "yearLabel");
  }), qt(Pe(r.radar), function(i) {
    ct(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && De("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && De("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && qt(i.indicator, function(n) {
      n.text && gt("text", "name", "radar.indicator");
    });
  }), qt(Pe(r.geo), function(i) {
    zn(i) && (te(i), qt(Pe(i.regions), function(n) {
      te(n);
    }));
  }), qt(Pe(r.timeline), function(i) {
    te(i), Dt(i, "label"), Dt(i, "itemStyle"), Dt(i, "controlStyle", !0);
    var n = i.data;
    k(n) && C(n, function(a) {
      V(a) && (Dt(a, "label"), Dt(a, "itemStyle"));
    });
  }), qt(Pe(r.toolbox), function(i) {
    Dt(i, "iconStyle"), qt(i.feature, function(n) {
      Dt(n, "iconStyle");
    });
  }), ct(Sc(r.axisPointer), "label"), ct(Sc(r.tooltip).axisPointer, "label");
}
function gx(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function yx(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  (i || a[n[s]] == null) && (a[n[s]] = e);
}
function xc(r) {
  r && C(_x, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var _x = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], mx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Us = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function qi(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Us.length; e++) {
      var i = Us[e][1], n = Us[e][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && gt(i, n));
    }
}
function bc(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && gt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function Tc(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && gt("downplay", "blur", "sunburst"));
}
function Sx(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && gt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function Mg(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && Mg(r[e].children, t);
}
function Ag(r, t) {
  px(r, t), r.series = Ot(r.series), C(r.series, function(e) {
    if (V(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && gt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && gt("clockWise", "clockwise")), bc(e.label);
        var n = e.data;
        if (n && !Nt(n))
          for (var a = 0; a < n.length; a++)
            bc(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && gt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = gx(e, "pointer.color");
        o != null && yx(e, "itemStyle.color", o);
      } else if (i === "bar") {
        qi(e), qi(e.backgroundStyle), qi(e.emphasis);
        var n = e.data;
        if (n && !Nt(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (qi(n[a]), qi(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && gt("highlightPolicy", "emphasis.focus", "sunburst"))), Tc(e), Mg(e.data, Tc);
      } else
        i === "graph" || i === "sankey" ? Sx(e) : i === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && gt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && De("`mapLocation` is not used anymore."), at(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && gt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), xc(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), C(mx, function(e) {
    var i = r[e];
    i && (k(i) || (i = [i]), C(i, function(n) {
      xc(n);
    }));
  });
}
function xx(r) {
  var t = q();
  r.eachSeries(function(e) {
    var i = e.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      n.length && a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(o);
    }
  }), t.each(bx);
}
function bx(r) {
  C(r, function(t, e) {
    var i = [], n = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(t.stackedDimension, h);
      if (isNaN(c))
        return n;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
      for (var y = NaN, p = e - 1; p >= 0; p--) {
        var g = r[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var _ = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && _ > 0 || u === "negative" && _ < 0 || u === "samesign" && c >= 0 && _ > 0 || u === "samesign" && c <= 0 && _ < 0) {
            c = T0(c, _), y = _;
            break;
          }
        }
      }
      return i[0] = c, i[1] = y, i;
    });
  });
}
var Yo = (
  /** @class */
  function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === ze ? {} : []), this.sourceFormat = t.sourceFormat || wg, this.seriesLayoutBy = t.seriesLayoutBy || Ne, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && bg(this, i) === $t.Must && (n.type = "ordinal");
        }
    }
    return r;
  }()
);
function cf(r) {
  return r instanceof Yo;
}
function Ju(r, t, e) {
  e = e || Eg(r);
  var i = t.seriesLayoutBy, n = Cx(r, e, i, t.sourceHeader, t.dimensions), a = new Yo({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: Q(t)
  });
  return a;
}
function vf(r) {
  return new Yo({
    data: r,
    sourceFormat: Nt(r) ? Oe : le
  });
}
function Tx(r) {
  return new Yo({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: Q(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function Eg(r) {
  var t = wg;
  if (Nt(r))
    t = Oe;
  else if (k(r)) {
    r.length === 0 && (t = Wt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (k(n) || Nt(n)) {
          t = Wt;
          break;
        } else if (V(n)) {
          t = Ee;
          break;
        }
      }
    }
  } else if (V(r)) {
    for (var a in r)
      if (Vr(r, a) && Gt(r[a])) {
        t = ze;
        break;
      }
  }
  return t;
}
function Cx(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Cc(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Wt) {
    var s = r;
    i === "auto" || i == null ? Dc(function(l) {
      l != null && l !== "-" && (F(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = ht(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Dc(function(l, f) {
      n[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === Bi ? s.length : s[0] ? s[0].length : null;
  } else if (t === Ee)
    n || (n = Dx(r));
  else if (t === ze)
    n || (n = [], C(r, function(l, f) {
      n.push(f);
    }));
  else if (t === le) {
    var u = $n(r[0]);
    a = k(u) && u.length || 1;
  } else
    t === Oe && process.env.NODE_ENV !== "production" && Z(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: Cc(n),
    dimensionsDetectedCount: a
  };
}
function Dx(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return lt(e);
}
function Cc(r) {
  if (r) {
    var t = q();
    return W(r, function(e, i) {
      e = V(e) ? e : {
        name: e
      };
      var n = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (n.name == null)
        return n;
      n.name += "", n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? n.name += "-" + a.count++ : t.set(n.name, {
        count: 1
      }), n;
    });
  }
}
function Dc(r, t, e, i) {
  if (t === Bi)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function Lg(r) {
  var t = r.sourceFormat;
  return t === Ee || t === ze;
}
var br, Tr, Cr, Mc, Ac, Pg = (
  /** @class */
  function() {
    function r(t, e) {
      var i = cf(t) ? t : vf(t);
      this._source = i;
      var n = this._data = i.data;
      if (i.sourceFormat === Oe) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = n;
      }
      Ac(this, n, i);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    }(), r.internalField = function() {
      var t;
      Ac = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = Mc[df(l, f)];
        if (process.env.NODE_ENV !== "production" && Z(v, "Invalide sourceFormat: " + l), O(o, v), l === Oe)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = Ig(l, f);
          o.getItem = ft(d, null, s, h, c);
          var y = Rg(l, f);
          o.count = ft(y, null, s, h, c);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, i = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], y = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], _ = 0; _ < p; _++) {
            var m = f[_ * h + c];
            g[o + _] = m, m < d && (d = m), m > y && (y = m);
          }
          v[0] = d, v[1] = y;
        }
      }, n = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      Mc = (t = {}, t[Wt + "_" + Ne] = {
        pure: !0,
        appendData: a
      }, t[Wt + "_" + Bi] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Ee] = {
        pure: !0,
        appendData: a
      }, t[ze] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          C(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[le] = {
        appendData: a
      }, t[Oe] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && Z(Nt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), r;
  }()
), Ec = function(r, t, e, i) {
  return r[i];
}, Mx = (br = {}, br[Wt + "_" + Ne] = function(r, t, e, i) {
  return r[i + t];
}, br[Wt + "_" + Bi] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[i] : null;
  }
  return a;
}, br[Ee] = Ec, br[ze] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = r[s];
    a[o] = u ? u[i] : null;
  }
  return a;
}, br[le] = Ec, br);
function Ig(r, t) {
  var e = Mx[df(r, t)];
  return process.env.NODE_ENV !== "production" && Z(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var Lc = function(r, t, e) {
  return r.length;
}, Ax = (Tr = {}, Tr[Wt + "_" + Ne] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, Tr[Wt + "_" + Bi] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, Tr[Ee] = Lc, Tr[ze] = function(r, t, e) {
  var i = e[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = r[i];
  return n ? n.length : 0;
}, Tr[le] = Lc, Tr);
function Rg(r, t) {
  var e = Ax[df(r, t)];
  return process.env.NODE_ENV !== "production" && Z(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var Ys = function(r, t, e) {
  return r[t];
}, Ex = (Cr = {}, Cr[Wt] = Ys, Cr[Ee] = function(r, t, e) {
  return r[e];
}, Cr[ze] = Ys, Cr[le] = function(r, t, e) {
  var i = $n(r);
  return i instanceof Array ? i[t] : i;
}, Cr[Oe] = Ys, Cr);
function Og(r) {
  var t = Ex[r];
  return process.env.NODE_ENV !== "production" && Z(t, 'Do not support get value on "' + r + '".'), t;
}
function df(r, t) {
  return r === Wt ? r + "_" + t : r;
}
function Ei(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return Og(a)(i, o, s);
      } else {
        var u = i;
        return a === le && (u = $n(i)), u;
      }
    }
  }
}
var Lx = /\{@(.+?)\}/g, Px = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var i = this.getData(e), n = this.getRawValue(t, e), a = i.getRawIndex(t), o = i.getName(t), s = i.getRawDataItem(t), u = i.getItemVisual(t, "style"), l = u && u[i.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, c = h === "series", v = i.userOutput && i.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: c ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: c ? this.id : null,
        seriesName: c ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: n,
        color: l,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, i, n, a, o) {
      e = e || "normal";
      var s = this.getData(i), u = this.getDataParams(t, i);
      if (o && (u.value = o.interpolatedValue), n != null && k(u.value) && (u.value = u.value[n]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (Y(a))
        return u.status = e, u.dimensionIndex = n, a(u);
      if (F(a)) {
        var f = _g(a, u);
        return f.replace(Lx, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && Et("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var y = Ei(s, t, d);
          if (o && k(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (y = o.interpolatedValue[p]);
          }
          return y != null ? y + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Ei(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  }()
);
function Pc(r) {
  var t, e;
  return V(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + fo(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Mn(r) {
  return new Ix(r);
}
var Ix = (
  /** @class */
  function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, i = t && t.skip;
      if (this._dirty && e) {
        var n = this.context;
        n.data = n.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !i && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(_) {
        return !(_ >= 1) && (_ = 1), _;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(i)), this._modBy = u, this._modDataCount = l;
      var c = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && Z(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && Z(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!i && (h || v < d)) {
          var y = this._progress;
          if (k(y))
            for (var p = 0; p < y.length; p++)
              this._doProgress(y[p], v, d, u, l);
          else
            this._doProgress(y, v, d, u, l);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && Z(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, i, n, a) {
      Ic.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: Ic.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), k(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var n = this._downstream;
      return n && n.dirty(), i;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && Z(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  }()
), Ic = function() {
  var r, t, e, i, n, a = {
    reset: function(u, l, f, h) {
      t = u, r = l, e = f, i = h, n = Math.ceil(i / e), a.next = e > 1 && i > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var u = t % n * e + Math.ceil(t / n), l = t >= r ? null : u < i ? u : t;
    return t++, l;
  }
}();
function Qa(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !ht(r) && r != null && r !== "-" && (r = +ke(r)), r == null || r === "" ? NaN : Number(r));
}
q({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +ke(r);
  },
  trim: function(r) {
    return F(r) ? be(r) : r;
  }
});
var Rx = (
  /** @class */
  function() {
    function r(t, e) {
      var i = t === "desc";
      this._resultLT = i ? 1 : -1, e == null && (e = i ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var i = ht(t) ? t : lo(t), n = ht(e) ? e : lo(e), a = isNaN(i), o = isNaN(n);
      if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
        var s = F(t), u = F(e);
        s && (i = u ? t : 0), u && (n = s ? e : 0);
      }
      return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
    }, r;
  }()
), Ox = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return Qa(t, e);
    }, r;
  }()
);
function Nx(r, t) {
  var e = new Ox(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Ne && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), zt(o));
  var s = [], u = {}, l = r.dimensionsDefine;
  if (l)
    C(l, function(y, p) {
      var g = y.name, _ = {
        index: p,
        name: g,
        displayName: y.displayName
      };
      if (s.push(_), g != null) {
        var m = "";
        Vr(u, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), zt(m)), u[g] = _;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = Ig(n, Ne);
  t.__isBuiltIn && (e.getRawDataItem = function(y) {
    return h(i, a, s, y);
  }, e.getRawData = ft(kx, null, r)), e.cloneRawData = ft(Bx, null, r);
  var c = Rg(n, Ne);
  e.count = ft(c, null, i, a, s);
  var v = Og(n);
  e.retrieveValue = function(y, p) {
    var g = h(i, a, s, y);
    return d(g, p);
  };
  var d = e.retrieveValueFromItem = function(y, p) {
    if (y != null) {
      var g = s[p];
      if (g)
        return v(y, p, g.name);
    }
  };
  return e.getDimensionInfo = ft(Fx, null, s, u), e.cloneAllDimensionInfo = ft(zx, null, s), e;
}
function kx(r) {
  var t = r.sourceFormat;
  if (!pf(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), zt(e);
  }
  return r.data;
}
function Bx(r) {
  var t = r.sourceFormat, e = r.data;
  if (!pf(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), zt(i);
  }
  if (t === Wt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === Ee) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(O({}, e[a]));
    return n;
  }
}
function Fx(r, t, e) {
  if (e != null) {
    if (ht(e) || !isNaN(e) && !Vr(t, e))
      return r[e];
    if (Vr(t, e))
      return t[e];
  }
}
function zx(r) {
  return Q(r);
}
var Ng = q();
function Vx(r) {
  r = Q(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), zt(e));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), zt(e));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, Ng.set(t, r);
}
function Hx(r, t, e) {
  var i = Ot(r), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), zt(a));
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    t = Gx(u, t, e, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function Gx(r, t, e, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), zt(n)), V(r) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof r + "."), zt(n));
  var a = r.type, o = Ng.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), zt(n));
  var s = W(t, function(f) {
    return Nx(f, o);
  }), u = Ot(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: Q(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var l = W(u, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", fo(f.data), "- transform result dimensions:", fo(f.dimensions)].join(`
`);
    }).join(`
`);
    E0(l);
  }
  return W(u, function(f, h) {
    var c = "";
    V(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), zt(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), zt(c));
    var v = Eg(f.data);
    pf(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), zt(c));
    var d, y = t[0];
    if (y && h === 0 && !f.dimensions) {
      var p = y.startIndex;
      p && (f.data = y.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: Ne,
        sourceHeader: p,
        dimensions: y.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Ne,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return Ju(f.data, d, null);
  });
}
function pf(r) {
  return r === Wt || r === Ee;
}
var $o = "undefined", Wx = typeof Uint32Array === $o ? Array : Uint32Array, Ux = typeof Uint16Array === $o ? Array : Uint16Array, kg = typeof Int32Array === $o ? Array : Int32Array, Rc = typeof Float64Array === $o ? Array : Float64Array, Bg = {
  float: Rc,
  int: kg,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Rc
}, $s;
function ei(r) {
  return r > 65535 ? Wx : Ux;
}
function ri() {
  return [1 / 0, -1 / 0];
}
function Yx(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Oc(r, t, e, i, n) {
  var a = Bg[e || "float"];
  if (n) {
    var o = r[t], s = o && o.length;
    if (s !== i) {
      for (var u = new a(i), l = 0; l < s; l++)
        u[l] = o[l];
      r[t] = u;
    }
  } else
    r[t] = new a(i);
}
var tl = (
  /** @class */
  function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = q();
    }
    return r.prototype.initData = function(t, e, i) {
      process.env.NODE_ENV !== "production" && Z(Y(t.getItem) && Y(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = $s[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [];
      var o = Lg(n);
      this._dimensions = W(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && Z(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var i = this._calcDimNameToIdx, n = this._dimensions, a = i.get(t);
      if (a != null) {
        if (n[a].type === e)
          return a;
      } else
        a = n.length;
      return n[a] = {
        type: e
      }, i.set(t, a), this._chunks[a] = new Bg[e || "float"](this._rawCount), this._rawExtent[a] = ri(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = ri());
      for (var u = a[t], l = o; l < s; l++) {
        var f = i[l] = e.parseAndCollect(i[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      n.ordinalMeta = e, n.ordinalOffset = s, n.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], i = e.ordinalMeta;
      return i;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && Z(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, i = this.count();
      e.appendData(t);
      var n = e.count();
      return e.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n];
    }, r.prototype.appendValues = function(t, e) {
      for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, e || 0), l = 0; l < a; l++) {
        var f = n[l];
        Oc(i, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = n[d], y = $s.arrayRows.call(this, t[v] || h, f.property, v, d);
          i[d][c] = y;
          var p = o[d];
          y < p[0] && (p[0] = y), y > p[1] && (p[1] = y);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = W(o, function(_) {
        return _.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = ri()), Oc(a, f, h.type, e, i);
      }
      if (n.fillStorage)
        n.fillStorage(t, e, a, u);
      else
        for (var c = [], v = t; v < e; v++) {
          c = n.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var y = a[d], p = this._dimValueGetter(c, l[d], v, d);
            y[v] = p;
            var g = u[d];
            p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      !n.persistent && n.clean && n.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var i = this._chunks[t];
      return i ? i[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var i = [], n = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          n.push(a);
      } else
        n = t;
      for (var a = 0, o = n.length; a < o; a++)
        i.push(this.get(n[a], e));
      return i;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var i = this._chunks[t];
      return i ? i[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], i = 0;
      if (e)
        for (var n = 0, a = this.count(); n < a; n++) {
          var o = this.get(t, n);
          isNaN(o) || (i += o);
        }
      return i;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(a) {
        isNaN(a) || e.push(a);
      });
      var i = e.sort(function(a, o) {
        return a - o;
      }), n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, i = e[t];
      if (i != null && i < this._count && i === t)
        return t;
      for (var n = 0, a = this._count - 1; n <= a; ) {
        var o = (n + a) / 2 | 0;
        if (e[o] < t)
          n = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      var n = this._chunks, a = n[t], o = [];
      if (!a)
        return o;
      i == null && (i = 1 / 0);
      for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
        var c = this.getRawIndex(f), v = e - a[c], d = Math.abs(v);
        d <= i && ((d < s || d === s && v >= 0 && u < 0) && (s = d, u = v, l = 0), v === u && (o[l++] = f));
      }
      return o.length = l, o;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var i = e.constructor, n = this._count;
        if (i === Array) {
          t = new i(n);
          for (var a = 0; a < n; a++)
            t[a] = e[a];
        } else
          t = new i(e.buffer, 0, n);
      } else {
        var i = ei(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = ei(i._rawCount), o = new a(n), s = [], u = t.length, l = 0, f = t[0], h = i._chunks, c = 0; c < n; c++) {
        var v = void 0, d = i.getRawIndex(c);
        if (u === 0)
          v = e(c);
        else if (u === 1) {
          var y = h[f][d];
          v = e(y, c);
        } else {
          for (var p = 0; p < u; p++)
            s[p] = h[t[p]][d];
          s[p] = c, v = e.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < n && (i._indices = o), i._count = l, i._extent = [], i._updateGetRawIdx(), i;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), i = e._count;
      if (!i)
        return this;
      var n = lt(t), a = n.length;
      if (!a)
        return this;
      var o = e.count(), s = ei(e._rawCount), u = new s(o), l = 0, f = n[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
      if (!e._indices) {
        var y = 0;
        if (a === 1) {
          for (var p = v[n[0]], g = 0; g < i; g++) {
            var _ = p[g];
            (_ >= h && _ <= c || isNaN(_)) && (u[l++] = y), y++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = v[n[0]], m = v[n[1]], w = t[n[1]][0], S = t[n[1]][1], g = 0; g < i; g++) {
            var _ = p[g], x = m[g];
            (_ >= h && _ <= c || isNaN(_)) && (x >= w && x <= S || isNaN(x)) && (u[l++] = y), y++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var b = e.getRawIndex(g), _ = v[n[0]][b];
            (_ >= h && _ <= c || isNaN(_)) && (u[l++] = b);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var D = !0, b = e.getRawIndex(g), M = 0; M < a; M++) {
              var A = n[M], _ = v[A][b];
              (_ < t[A][0] || _ > t[A][1]) && (D = !1);
            }
            D && (u[l++] = e.getRawIndex(g));
          }
      return l < o && (e._indices = u), e._count = l, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var i = this.clone(t);
      return this._updateDims(i, t, e), i;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, i) {
      for (var n = t._chunks, a = [], o = e.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < e.length; f++)
        l[e[f]] = ri();
      for (var h = 0; h < s; h++) {
        for (var c = t.getRawIndex(h), v = 0; v < o; v++)
          u[v] = n[e[v]][c];
        u[o] = h;
        var d = i && i.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var y = e[f], p = d[f], g = l[y], _ = n[y];
            _ && (_[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, c, v = new (ei(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var y = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + y) / 2, _ = 0, m = y; m < p; m++) {
          var w = this.getRawIndex(m), S = a[w];
          isNaN(S) || (_ += S);
        }
        _ /= p - y;
        var x = d, b = Math.min(d + u, o), D = d - 1, M = a[l];
        f = -1, c = x;
        for (var A = -1, T = 0, m = x; m < b; m++) {
          var w = this.getRawIndex(m), S = a[w];
          if (isNaN(S)) {
            T++, A < 0 && (A = w);
            continue;
          }
          h = Math.abs((D - g) * (S - M) - (D - m) * (_ - M)), h > f && (f = h, c = w);
        }
        T > 0 && T < b - x && (v[s++] = Math.min(A, c), c = Math.max(A, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = v, i.getRawIndex = this._getRawIdx, i;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var i = this.clone([t], !0), n = i._chunks, a = Math.floor(1 / e), o = n[t], s = this.count(), u = new (ei(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, c = o[this.getRawIndex(h)], v = f, d = o[this.getRawIndex(v)], y = a;
        f + a > s && (y = s - f);
        for (var p = 0; p < y; p++) {
          var g = this.getRawIndex(f + p), _ = o[g];
          _ < c && (c = _, h = f + p), _ > d && (d = _, v = f + p);
        }
        var m = this.getRawIndex(h), w = this.getRawIndex(v);
        h < v ? (u[l++] = m, u[l++] = w) : (u[l++] = w, u[l++] = m);
      }
      return i._count = l, i._indices = u, i._updateGetRawIdx(), i;
    }, r.prototype.downSample = function(t, e, i, n) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = ri(), c = new (ei(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var y = 0; y < u; y++) {
          var p = this.getRawIndex(d + y);
          s[y] = l[p];
        }
        var g = i(s), _ = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
        l[_] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = _;
      }
      return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (i) {
            case 0:
              e(a);
              break;
            case 1:
              e(n[t[0]][s], a);
              break;
            case 2:
              e(n[t[0]][s], n[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < i; u++)
                l[u] = n[t[u]][s];
              l[u] = a, e.apply(null, l);
          }
        }
    }, r.prototype.getDataExtent = function(t) {
      var e = this._chunks[t], i = ri();
      if (!e)
        return i;
      var n = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = i;
      for (var s = o[0], u = o[1], l = 0; l < n; l++) {
        var f = this.getRawIndex(l), h = e[f];
        h < s && (s = h), h > u && (u = h);
      }
      return o = [s, u], this._extent[t] = o, o;
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
        i.push(n[a][e]);
      return i;
    }, r.prototype.clone = function(t, e) {
      var i = new r(), n = this._chunks, a = t && Ri(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? Yx(n[o]) : n[o];
      else
        i._chunks = n;
      return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = Q(this._extent), t._rawExtent = Q(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var i = this._indices.length;
          e = new t(i);
          for (var n = 0; n < i; n++)
            e[n] = this._indices[n];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = function() {
      function t(e, i, n, a) {
        return Qa(e[a], this._dimensions[a]);
      }
      $s = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return Qa(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return Qa(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    }(), r;
  }()
), $x = (
  /** @class */
  function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), i = !!e.length, n, a;
      if (Ki(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Nt(s) ? Oe : le, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = X(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = X(h.sourceHeader, c.sourceHeader), y = X(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || y;
        n = p ? [Ju(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: y
        }, u)] : [];
      } else {
        var g = t;
        if (i) {
          var _ = this._applyTransform(e);
          n = _.sourceList, a = _.upstreamSignList;
        } else {
          var m = g.get("source", !0);
          n = [Ju(m, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && Z(n && a), this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && Z(n != null || i != null), n != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), Nc(a));
      }
      var o, s = [], u = [];
      return C(t, function(l) {
        l.prepareSource();
        var f = l.getSource(n || 0), h = "";
        n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), Nc(h)), s.push(f), u.push(l._getVersionSign());
      }), i ? o = Hx(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [Tx(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var i = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var i = this._getUpstreamSourceManagers();
        return i[0] && i[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && Z(Ki(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Ki(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, i) : (s = new tl(), s.initData(new Pg(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (Ki(t)) {
        var e = xg(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return W($S(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (Ki(t))
        e = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: i,
        dimensions: n
      };
    }, r;
  }()
);
function Ki(r) {
  return r.mainType === "series";
}
function Nc(r) {
  throw new Error(r);
}
var Xx = "line-height:1";
function Fg(r) {
  var t = r.lineHeight;
  return t == null ? Xx : "line-height:" + Ft(t + "") + "px";
}
function zg(r, t) {
  var e = r.color || "#6e7079", i = r.fontSize || 12, n = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + Ft(i + "") + "px;color:" + Ft(e) + ";font-weight:" + Ft(n + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + Ft(o + "") + "px;color:" + Ft(a) + ";font-weight:" + Ft(s + "")
  } : {
    nameStyle: {
      fontSize: i,
      fill: e,
      fontWeight: n
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var Zx = [0, 10, 20, 30], qx = ["", `
`, `

`, `


`];
function Vn(r, t) {
  return t.type = r, t;
}
function el(r) {
  return r.type === "section";
}
function Vg(r) {
  return el(r) ? Kx : Qx;
}
function Hg(r) {
  if (el(r)) {
    var t = 0, e = r.blocks.length, i = e > 1 || e > 0 && !r.noHeader;
    return C(r.blocks, function(n) {
      var a = Hg(n);
      a >= t && (t = a + +(i && // 0 always can not be readable gap level.
      (!a || el(n) && !n.noHeader)));
    }), t;
  }
  return 0;
}
function Kx(r, t, e, i) {
  var n = t.noHeader, a = jx(Hg(t)), o = [], s = t.blocks || [];
  Z(!s || k(s)), s = s || [];
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (Vr(l, u)) {
      var f = new Rx(l[u], null);
      s.sort(function(y, p) {
        return f.evaluate(y.sortParam, p.sortParam);
      });
    } else
      u === "seriesDesc" && s.reverse();
  }
  C(s, function(y, p) {
    var g = t.valueFormatter, _ = Vg(y)(
      // Inherit valueFormatter
      g ? O(O({}, r), {
        valueFormatter: g
      }) : r,
      y,
      p > 0 ? a.html : 0,
      i
    );
    _ != null && o.push(_);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : rl(i, o.join(""), n ? e : a.html);
  if (n)
    return h;
  var c = Qu(t.header, "ordinal", r.useUTC), v = zg(i, r.renderMode).nameStyle, d = Fg(i);
  return r.renderMode === "richText" ? Gg(r, c, v) + a.richText + h : rl(i, '<div style="' + v + ";" + d + ';">' + Ft(c) + "</div>" + h, e);
}
function Qx(r, t, e, i) {
  var n = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(w) {
    return w = k(w) ? w : [w], W(w, function(S, x) {
      return Qu(S, k(v) ? v[x] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", n), c = a ? "" : Qu(u, "ordinal", l), v = t.valueType, d = o ? [] : f(t.value, t.dataIndex), y = !s || !a, p = !s && a, g = zg(i, n), _ = g.nameStyle, m = g.valueStyle;
    return n === "richText" ? (s ? "" : h) + (a ? "" : Gg(r, c, _)) + (o ? "" : eb(r, d, y, p, m)) : rl(i, (s ? "" : h) + (a ? "" : Jx(c, !s, _)) + (o ? "" : tb(d, y, p, m)), e);
  }
}
function kc(r, t, e, i, n, a) {
  if (r) {
    var o = Vg(r), s = {
      useUTC: n,
      renderMode: e,
      orderMode: i,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function jx(r) {
  return {
    html: Zx[r],
    richText: qx[r]
  };
}
function rl(r, t, e) {
  var i = '<div style="clear:both"></div>', n = "margin: " + e + "px 0 0", a = Fg(r);
  return '<div style="' + n + ";" + a + ';">' + t + i + "</div>";
}
function Jx(r, t, e) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + i + '">' + Ft(r) + "</span>";
}
function tb(r, t, e, i) {
  var n = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + n : "";
  return r = k(r) ? r : [r], '<span style="' + a + ";" + i + '">' + W(r, function(o) {
    return Ft(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function Gg(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function eb(r, t, e, i, n) {
  var a = [n], o = i ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(k(t) ? t.join("  ") : t, a);
}
function rb(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return Bn(i);
}
function Wg(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var Xs = (
  /** @class */
  function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = tp();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, i) {
      var n = i === "richText" ? this._generateStyleName() : null, a = FS({
        color: e,
        type: t,
        renderMode: i,
        markerId: n
      });
      return F(a) ? a : (process.env.NODE_ENV !== "production" && Z(n), this.richTextStyles[n] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var i = {};
      k(e) ? C(e, function(a) {
        return O(i, a);
      }) : O(i, e);
      var n = this._generateStyleName();
      return this.richTextStyles[n] = i, "{" + n + "|" + t + "}";
    }, r;
  }()
);
function ib(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = k(s), l = rb(t, e), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = nb(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var y = n.getDimensionInfo(a[0]);
    v = f = Ei(n, e, a[0]), h = y.type;
  } else
    v = f = u ? s[0] : s;
  var p = Hl(t), g = p && t.name || "", _ = n.getName(e), m = i ? g : _;
  return Vn("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !p,
    sortParam: v,
    blocks: [Vn("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: m,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !be(m),
      value: f,
      valueType: h,
      dataIndex: e
    })].concat(c || [])
  });
}
function nb(r, t, e, i, n) {
  var a = t.getData(), o = Ri(r, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  i.length ? C(i, function(h) {
    f(Ei(a, e, h), h);
  }) : C(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Vn("nameValue", {
      markerType: "subItem",
      markerColor: n,
      name: v.displayName,
      value: h,
      valueType: v.type
    })) : (s.push(h), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Ue = pt();
function xa(r, t) {
  return r.getName(t) || r.getId(t);
}
var ab = "__universalTransitionEnabled", Xo = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Mn({
        count: sb,
        reset: ub
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = Ue(this).sourceManager = new $x(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      Fc(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && Z(o, "getInitialData returned invalid data."), Ue(this).dataBeforeProcessed = o, Bc(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Fn(this), a = n ? Uo(e) : {}, o = this.subType;
      ut.hasClass(o) && (o += "Series"), et(e, i.getTheme().get(this.subType)), et(e, this.getDefaultOption()), wh(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && Ai(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = et(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = Fn(this);
      n && Ai(this.option, e, n);
      var a = Ue(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      Fc(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Ue(this).dataBeforeProcessed = o, Bc(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Nt(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && wh(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = il(this);
      if (i) {
        var n = i.context.data;
        return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
      } else
        return Ue(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var i = il(this);
      if (i) {
        var n = i.context;
        n.outputData = e, i !== this.dataTask && (n.data = e);
      }
      Ue(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return q(e);
    }, t.prototype.getSourceManager = function() {
      return Ue(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Ue(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, i, n) {
      return ib({
        series: this,
        dataIndex: e,
        multipleSeries: i
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if ($.node && !(e && e.ssr))
        return !1;
      var i = this.getShallow("animation");
      return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, i, n) {
      var a = this.ecModel, o = ff.prototype.getColorFromPalette.call(this, e, i, n);
      return o || (o = a.getColorFromPalette(e, i, n)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, i) {
      this._innerSelect(this.getData(i), e);
    }, t.prototype.unselect = function(e, i) {
      var n = this.option.selectedMap;
      if (n) {
        var a = this.option.selectedMode, o = this.getData(i);
        if (a === "series" || n === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var u = e[s], l = xa(o, u);
          n[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, i) {
      for (var n = [], a = 0; a < e.length; a++)
        n[0] = e[a], this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, i = lt(e), n = [], a = 0; a < i.length; a++) {
        var o = e[i[a]];
        o >= 0 && n.push(o);
      }
      return n;
    }, t.prototype.isSelected = function(e, i) {
      var n = this.option.selectedMap;
      if (!n)
        return !1;
      var a = this.getData(i);
      return (n === "all" || n[xa(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[ab])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, i) {
      var n, a, o = this.option, s = o.selectedMode, u = i.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          V(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = i[f], c = xa(e, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = i[u - 1], c = xa(e, v);
          o.selectedMap = (n = {}, n[c] = !0, n), this._selectedDataIndicesMap = (a = {}, a[c] = e.getRawIndex(v), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var i = [];
        e.hasItemOption && e.each(function(n) {
          var a = e.getRawDataItem(n);
          a && a.selected && i.push(n);
        }), i.length > 0 && this._innerSelect(e, i);
      }
    }, t.registerClass = function(e) {
      return ut.registerClass(e);
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    }(), t;
  }(ut)
);
Me(Xo, Px);
Me(Xo, ff);
op(Xo, ut);
function Bc(r) {
  var t = r.name;
  Hl(r) || (r.name = ob(r) || t);
}
function ob(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return C(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function sb(r) {
  return r.model.getRawData().count();
}
function ub(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), lb;
}
function lb(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Fc(r, t) {
  C(K_(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, dt(fb, t));
  });
}
function fb(r, t) {
  var e = il(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function il(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var i = e.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(r.uid));
    }
    return i;
  }
}
const Li = Xo;
var gf = (
  /** @class */
  function() {
    function r() {
      this.group = new se(), this.uid = Bo("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
    }, r.prototype.updateLayout = function(t, e, i, n) {
    }, r.prototype.updateVisual = function(t, e, i, n) {
    }, r.prototype.toggleBlurSeries = function(t, e, i) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  }()
);
Wl(gf);
Po(gf);
const er = gf;
function Ug() {
  var r = pt();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var Yg = pt(), hb = Ug(), yf = (
  /** @class */
  function() {
    function r() {
      this.group = new se(), this.uid = Bo("viewChart"), this.renderTask = Mn({
        plan: cb,
        reset: vb
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, r.prototype.highlight = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Et("Unknown dataType " + n.dataType);
        return;
      }
      Vc(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Et("Unknown dataType " + n.dataType);
        return;
      }
      Vc(a, n, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateLayout = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateVisual = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.eachRendered = function(t) {
      ef(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      Yg(t).updateMethod = e;
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.type = "chart";
    }(), r;
  }()
);
function zc(r, t, e) {
  r && Di(r) && (t === "emphasis" ? Gu : Wu)(r, e);
}
function Vc(r, t, e) {
  var i = Xn(r, t), n = t && t.highlightKey != null ? cw(t.highlightKey) : null;
  i != null ? C(Ot(i), function(a) {
    zc(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    zc(a, e, n);
  });
}
Wl(yf, ["dispose"]);
Po(yf);
function cb(r) {
  return hb(r.model);
}
function vb(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && Yg(n).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, i, n), db[u];
}
var db = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
};
const xi = yf;
var _o = "\0__throttleOriginMethod", Hc = "\0__throttleRate", Gc = "\0__throttleType";
function Zo(r, t, e) {
  var i, n = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    i = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var y = f || t, p = f || e;
    f = null, s = i - (p ? n : a) - y, clearTimeout(o), p ? o = setTimeout(h, y) : s >= 0 ? h() : o = setTimeout(h, -s), n = i;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
function $g(r, t, e, i) {
  var n = r[t];
  if (n) {
    var a = n[_o] || n, o = n[Gc], s = n[Hc];
    if (s !== e || o !== i) {
      if (e == null || !i)
        return r[t] = a;
      n = r[t] = Zo(a, e, i === "debounce"), n[_o] = a, n[Gc] = i, n[Hc] = e;
    }
    return n;
  }
}
function nl(r, t) {
  var e = r[t];
  e && e[_o] && (e.clear && e.clear(), r[t] = e[_o]);
}
var Wc = pt(), Uc = {
  itemStyle: On(ng, !0),
  lineStyle: On(ig, !0)
}, pb = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function Xg(r, t) {
  var e = r.visualStyleMapper || Uc[t];
  return e || (console.warn("Unknown style type '" + t + "'."), Uc.itemStyle);
}
function Zg(r, t) {
  var e = r.visualDrawType || pb[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var gb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = Xg(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = Zg(r, i), l = o[u], f = Y(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Y(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || Y(o.stroke) ? c : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var y = r.getDataParams(d), p = O({}, o);
          p[u] = f(y), v.setItemVisual(d, "style", p);
        }
      };
  }
}, Qi = new At(), yb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = Xg(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[i]) {
            Qi.option = u[i];
            var l = n(Qi), f = o.ensureUniqueItemVisual(s, "style");
            O(f, l), Qi.option.decal && (o.setItemVisual(s, "decal", Qi.option.decal), Qi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, _b = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = q();
    r.eachSeries(function(e) {
      var i = e.getColorBy();
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), Wc(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = Wc(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = Zg(e, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          n[f] = l;
        }), i.each(function(l) {
          var f = n[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var c = a.ensureUniqueItemVisual(f, "style"), v = i.getName(l) || l + "", d = i.count();
            c[u] = e.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, ba = Math.PI;
function mb(r, t) {
  t = t || {}, at(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new se(), i = new _t({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(i);
  var n = new ue({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new _t({
    style: {
      fill: "none"
    },
    textContent: n,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new Kl({
    shape: {
      startAngle: -ba / 2,
      endAngle: -ba / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: ba * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: ba * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = n.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), i.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var wb = (
  /** @class */
  function() {
    function r(t, e, i, n) {
      this._stageTaskMap = q(), this.ecInstance = t, this.api = e, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(i) {
        var n = i.overallTask;
        n && n.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, a = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex, o = a ? i.step : null, s = n && n.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var i = this._pipelineMap.get(t.uid), n = t.getData(), a = n.count(), o = i.progressiveEnabled && e.incrementalPrepareRender && a >= i.threshold, s = t.get("large") && a >= t.get("largeThreshold"), u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = i.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s
      };
    }, r.prototype.restorePipelines = function(t) {
      var e = this, i = e._pipelineMap = q();
      t.eachSeries(function(n) {
        var a = n.getProgressive(), o = n.uid;
        i.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: n.getProgressiveThreshold(),
          progressiveEnabled: a && !(n.preventIncremental && n.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0
        }), e._pipe(n, n.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), i = this.api;
      C(this._allHandlers, function(n) {
        var a = t.get(n.uid) || t.set(n.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), Z(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, e, i), n.overallReset && this._createOverallStageTask(n, a, e, i);
      }, this);
    }, r.prototype.prepareView = function(t, e, i, n) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, i) {
      this._performStageTasks(this._visualHandlers, t, e, i);
    }, r.prototype._performStageTasks = function(t, e, i, n) {
      n = n || {};
      var a = !1, o = this;
      C(t, function(u, l) {
        if (!(n.visualType && n.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
          if (c) {
            var v, d = c.agentStubMap;
            d.each(function(p) {
              s(n, p) && (p.dirty(), v = !0);
            }), v && c.dirty(), o.updatePayload(c, i);
            var y = o.getPerformArgs(c, n.block);
            d.each(function(p) {
              p.perform(y);
            }), c.perform(y) && (a = !0);
          } else
            h && h.each(function(p, g) {
              s(n, p) && p.dirty();
              var _ = o.getPerformArgs(p, n.block);
              _.skip = !u.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(_) && (a = !0);
            });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(i) {
        e = i.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, i, n) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = q(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? i.eachRawSeries(f) : u ? i.eachRawSeriesByType(u, f) : l && l(i, n).each(f);
      function f(h) {
        var c = h.uid, v = s.set(c, o && o.get(c) || Mn({
          plan: Cb,
          reset: Db,
          count: Ab
        }));
        v.context = {
          model: h,
          ecModel: i,
          api: n,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, v);
      }
    }, r.prototype._createOverallStageTask = function(t, e, i, n) {
      var a = this, o = e.overallTask = e.overallTask || Mn({
        reset: Sb
      });
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = q(), l = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), Z(!t.createOnAllSeries, v), l ? i.eachRawSeriesByType(l, d) : f ? f(i, n).each(d) : (h = !1, C(i.getSeries(), d));
      function d(y) {
        var p = y.uid, g = u.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, Mn({
          reset: xb,
          onDirty: Tb
        })));
        g.context = {
          model: y,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(y, g);
      }
      c && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var i = t.uid, n = this._pipelineMap.get(i);
      !n.head && (n.head = e), n.tail && n.tail.pipe(e), n.tail = e, e.__idxInPipeline = n.count++, e.__pipeline = n;
    }, r.wrapStageHandler = function(t, e) {
      return Y(t) && (t = {
        overallReset: t,
        seriesType: Eb(t)
      }), t.uid = Bo("stageHandler"), e && (t.visualType = e), t;
    }, r;
  }()
);
function Sb(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function xb(r) {
  return r.overallProgress && bb;
}
function bb() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function Tb() {
  this.agent && this.agent.dirty();
}
function Cb(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function Db(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Ot(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? W(t, function(e, i) {
    return qg(i);
  }) : Mb;
}
var Mb = qg(0);
function qg(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else
      n && n.progress && n.progress(t, i);
  };
}
function Ab(r) {
  return r.data.count();
}
function Eb(r) {
  mo = null;
  try {
    r(Hn, Kg);
  } catch {
  }
  return mo;
}
var Hn = {}, Kg = {}, mo;
Qg(Hn, Cg);
Qg(Kg, Dg);
Hn.eachSeriesByType = Hn.eachRawSeriesByType = function(r) {
  mo = r;
};
Hn.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (mo = r.subType);
};
function Qg(r, t) {
  for (var e in t.prototype)
    r[e] = Ht;
}
const jg = wb;
var Yc = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Lb = {
  color: Yc,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Yc]
};
var Tt = "#B9B8CE", $c = "#100C2A", Ta = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Tt
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, Xc = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], Jg = {
  darkMode: !0,
  color: Xc,
  backgroundColor: $c,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: Tt
    },
    pageTextStyle: {
      color: Tt
    }
  },
  textStyle: {
    color: Tt
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: Tt
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Tt
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: Tt
    }
  },
  timeline: {
    lineStyle: {
      color: Tt
    },
    label: {
      color: Tt
    },
    controlStyle: {
      color: Tt,
      borderColor: Tt
    }
  },
  calendar: {
    itemStyle: {
      color: $c
    },
    dayLabel: {
      color: Tt
    },
    monthLabel: {
      color: Tt
    },
    yearLabel: {
      color: Tt
    }
  },
  timeAxis: Ta(),
  logAxis: Ta(),
  valueAxis: Ta(),
  categoryAxis: Ta(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Xc
  },
  gauge: {
    title: {
      color: Tt
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Tt
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
Jg.categoryAxis.splitLine.show = !1;
const Pb = Jg;
var Ib = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (F(t)) {
        var a = Te(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        C(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var c = o[h], v = l.lastIndexOf(c);
            if (v > 0 && v === l.length - c.length) {
              var d = l.slice(0, v);
              d !== "data" && (e.mainType = d, e[c.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (i[l] = u, f = !0), f || (n[l] = u);
        });
      }
      return {
        cptQuery: e,
        dataQuery: i,
        otherQuery: n
      };
    }, r.prototype.filter = function(t, e) {
      var i = this.eventInfo;
      if (!i)
        return !0;
      var n = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
      if (!o || !s)
        return !0;
      var u = e.cptQuery, l = e.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, a));
      function f(h, c, v, d) {
        return h[v] == null || c[d || v] === h[v];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  }()
), al = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Zc = al.concat(["symbolKeepAspect"]), Rb = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < al.length; o++) {
      var s = al[o], u = r.get(s);
      Y(u) ? (a = !0, n[s] = u) : i[s] = u;
    }
    if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(O({
      legendIcon: r.legendIcon || i.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, i)), t.isSeriesFiltered(r))
      return;
    var l = lt(n);
    function f(h, c) {
      for (var v = r.getRawValue(c), d = r.getDataParams(c), y = 0; y < l.length; y++) {
        var p = l[y];
        h.setItemVisual(c, p, n[p](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, Ob = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < Zc.length; s++) {
        var u = Zc[s], l = o.getShallow(u, !0);
        l != null && n.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function Nb(r, t, e) {
  switch (e) {
    case "color":
      var i = r.getItemVisual(t, "style");
      return i[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function kb(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function ii(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && De("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Xn(h, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: k(c) ? h.getName(c[0]) : h.getName(c),
          selected: F(u) ? u : O({}, u)
        });
      }
  }));
}
function Bb(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (ii("map", "selectchanged", t, n, i), ii("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (ii("map", "selected", t, n, i), ii("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (ii("map", "unselected", t, n, i), ii("pie", "unselected", t, n, i));
  });
}
function gn(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var Fb = Math.round(Math.random() * 9), zb = typeof Object.defineProperty == "function", Vb = function() {
  function r() {
    this._id = "__ec_inner_" + Fb++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return zb ? Object.defineProperty(i, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : i[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
}();
const Hb = Vb;
var Gb = ot.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i + a), r.lineTo(e - n, i + a), r.closePath();
  }
}), Wb = ot.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i), r.lineTo(e, i + a), r.lineTo(e - n, i), r.closePath();
  }
}), Ub = ot.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, i = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o), u = i - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), c = Math.cos(l), v = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, u + s), r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l), r.bezierCurveTo(e + f - h * v, u + s + c * v, e, i - d, e, i), r.bezierCurveTo(e, i - d, e - f + h * v, u + s + c * v, e - f, u + s), r.closePath();
  }
}), Yb = ot.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, i = t.width, n = t.x, a = t.y, o = i / 3 * 2;
    r.moveTo(n, a), r.lineTo(n + o, a + e), r.lineTo(n, a + e / 4 * 3), r.lineTo(n - o, a + e), r.lineTo(n, a), r.closePath();
  }
}), $b = {
  line: Hr,
  rect: _t,
  roundRect: _t,
  square: _t,
  circle: ql,
  diamond: Wb,
  pin: Ub,
  arrow: Yb,
  triangle: Gb
}, Xb = {
  line: function(r, t, e, i, n) {
    n.x1 = r, n.y1 = t + i / 2, n.x2 = r + e, n.y2 = t + i / 2;
  },
  rect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i;
  },
  roundRect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i, n.r = Math.min(e, i) / 4;
  },
  square: function(r, t, e, i, n) {
    var a = Math.min(e, i);
    n.x = r, n.y = t, n.width = a, n.height = a;
  },
  circle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.r = Math.min(e, i) / 2;
  },
  diamond: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  },
  pin: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  arrow: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  triangle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  }
}, ol = {};
C($b, function(r, t) {
  ol[t] = new r();
});
var Zb = ot.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = so(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = ol[i];
      n || (i = "rect", n = ol[i]), Xb[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function qb(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function _f(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = Qp(r.slice(8), new rt(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = jl(r.slice(7), {}, new rt(t, e, i, n), o ? "center" : "cover") : u = new Zb({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), u.__isEmptyBrush = s, u.setColor = qb, a && u.setColor(a), u;
}
function Kb(r, t) {
  if (r != null)
    return k(r) || (r = [r, r]), [Rt(r[0], t[0]) || 0, Rt(X(r[1], r[0]), t[1]) || 0];
}
function Pr(r) {
  return isFinite(r);
}
function Qb(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = Pr(i) ? i : 0, n = Pr(n) ? n : 1, a = Pr(a) ? a : 0, o = Pr(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function jb(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, u = u * a), o = Pr(o) ? o : 0.5, s = Pr(s) ? s : 0.5, u = u >= 0 && Pr(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function sl(r, t, e) {
  for (var i = t.type === "radial" ? jb(r, t, e) : Qb(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function Jb(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function Ca(r) {
  return parseInt(r, 10);
}
function Da(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || Ca(s[i]) || Ca(r.style[i])) - (Ca(s[a]) || 0) - (Ca(s[o]) || 0) | 0;
}
function tT(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : ht(r) ? [r] : k(r) ? r : null;
}
function ty(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && tT(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = W(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var eT = new Ci(!0);
function wo(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function qc(r) {
  return typeof r == "string" && r !== "none";
}
function So(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Kc(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function Qc(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function ul(r, t, e) {
  var i = sp(t.image, t.__image, e);
  if (Io(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Q_), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function rT(r, t, e, i) {
  var n, a = wo(e), o = So(e), s = e.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || eT, h = t.__dirty;
  if (!i) {
    var c = e.fill, v = e.stroke, d = o && !!c.colorStops, y = a && !!v.colorStops, p = o && !!c.image, g = a && !!v.image, _ = void 0, m = void 0, w = void 0, S = void 0, x = void 0;
    (d || y) && (x = t.getBoundingRect()), d && (_ = h ? sl(r, c, x) : t.__canvasFillGradient, t.__canvasFillGradient = _), y && (m = h ? sl(r, v, x) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (w = h || !t.__canvasFillPattern ? ul(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (S = h || !t.__canvasStrokePattern ? ul(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? r.fillStyle = _ : p && (w ? r.fillStyle = w : o = !1), y ? r.strokeStyle = m : g && (S ? r.strokeStyle = S : a = !1);
  }
  var b = t.getGlobalScale();
  f.setScale(b[0], b[1], t.segmentIgnoreThreshold);
  var D, M;
  r.setLineDash && e.lineDash && (n = ty(t), D = n[0], M = n[1]);
  var A = !0;
  (l || h & ui) && (f.setDPR(r.dpr), u ? f.setContext(null) : (f.setContext(r), A = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), A && f.rebuildPath(r, u ? s : 1), D && (r.setLineDash(D), r.lineDashOffset = M), i || (e.strokeFirst ? (a && Qc(r, e), o && Kc(r, e)) : (o && Kc(r, e), a && Qc(r, e))), D && r.setLineDash([]);
}
function iT(r, t, e) {
  var i = t.__image = sp(e.image, t.__image, t, t.onload);
  if (!(!i || !Io(i))) {
    var n = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), u = i.width / i.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = i.width, s = i.height), e.sWidth && e.sHeight) {
      var l = e.sx || 0, f = e.sy || 0;
      r.drawImage(i, l, f, e.sWidth, e.sHeight, n, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx, f = e.sy, h = o - l, c = s - f;
      r.drawImage(i, l, f, h, c, n, a, o, s);
    } else
      r.drawImage(i, n, a, o, s);
  }
}
function nT(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || Fr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = ty(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (wo(e) && r.strokeText(n, e.x, e.y), So(e) && r.fillText(n, e.x, e.y)) : (So(e) && r.fillText(n, e.x, e.y), wo(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var jc = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Jc = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function ey(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    Vt(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Nr.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (Vt(r, n), a = !0), r.globalCompositeOperation = t.blend || Nr.blend);
  for (var s = 0; s < jc.length; s++) {
    var u = jc[s];
    (i || t[u] !== e[u]) && (a || (Vt(r, n), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (Vt(r, n), a = !0), r.shadowColor = t.shadowColor || Nr.shadowColor), a;
}
function tv(r, t, e, i, n) {
  var a = Gn(t, n.inHover), o = i ? null : e && Gn(e, n.inHover) || {};
  if (a === o)
    return !1;
  var s = ey(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (Vt(r, n), s = !0), qc(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (Vt(r, n), s = !0), qc(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (Vt(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Vt(r, n), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < Jc.length; f++) {
    var h = Jc[f], c = h[0];
    (i || a[c] !== o[c]) && (s || (Vt(r, n), s = !0), r[c] = a[c] || h[1]);
  }
  return s;
}
function aT(r, t, e, i, n) {
  return ey(r, Gn(t, n.inHover), e && Gn(e, n.inHover), i, n);
}
function ry(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function oT(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), ry(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function sT(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var ev = 1, rv = 2, iv = 3, nv = 4;
function uT(r) {
  var t = So(r), e = wo(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Vt(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Gn(r, t) {
  return t && r.__hoverStyle || r.style;
}
function iy(r, t) {
  Ir(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Ir(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~Xt, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, u = !1;
  if ((!o || Jb(a, o)) && (o && o.length && (Vt(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (Vt(r, e), r.save(), oT(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof ot && t.autoBatch && uT(t.style);
  s || sT(n, l.transform) ? (Vt(r, e), ry(r, t)) : f || Vt(r, e);
  var h = Gn(t, e.inHover);
  t instanceof ot ? (e.lastDrawType !== ev && (u = !0, e.lastDrawType = ev), tv(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), rT(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Hu ? (e.lastDrawType !== iv && (u = !0, e.lastDrawType = iv), tv(r, t, l, u, e), nT(r, t, h)) : t instanceof Ni ? (e.lastDrawType !== rv && (u = !0, e.lastDrawType = rv), aT(r, t, l, u, e), iT(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== nv && (u = !0, e.lastDrawType = nv), lT(r, t, e)), f && i && Vt(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function lT(r, t, e) {
  var i = t.getDisplayables(), n = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover
  }, o, s;
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var u = i[o];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Ir(r, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Ir(r, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var Zs = new Hb(), av = new Yn(100), ov = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function ll(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && Zs.delete(r);
  var a = Zs.get(r);
  if (a)
    return a;
  var o = at(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, Zs.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < ov.length; ++c) {
      var v = o[ov[c]];
      if (v != null && !k(v) && !F(v) && !ht(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var y = av.get(d);
      y && (n ? l.svgElement = y : l.image = y);
    }
    var p = ay(o.dashArrayX), g = fT(o.dashArrayY), _ = ny(o.symbol), m = hT(p), w = oy(g), S = !n && Pi.createCanvas(), x = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, b = M(), D;
    S && (S.width = b.width * e, S.height = b.height * e, D = S.getContext("2d")), A(), h && av.put(d, S || x), l.image = S, l.svgElement = x, l.svgWidth = b.width, l.svgHeight = b.height;
    function M() {
      for (var T = 1, E = 0, L = m.length; E < L; ++E)
        T = _h(T, m[E]);
      for (var P = 1, E = 0, L = _.length; E < L; ++E)
        P = _h(P, _[E].length);
      T *= P;
      var I = w * m.length * _.length;
      if (process.env.NODE_ENV !== "production") {
        var R = function(H) {
          console.warn("Calculated decal size is greater than " + H + " due to decal option settings so " + H + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + H + " to be larger to avoid incontinuity.");
        };
        T > o.maxTileWidth && R("maxTileWidth"), I > o.maxTileHeight && R("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(T, o.maxTileWidth)),
        height: Math.max(1, Math.min(I, o.maxTileHeight))
      };
    }
    function A() {
      D && (D.clearRect(0, 0, S.width, S.height), o.backgroundColor && (D.fillStyle = o.backgroundColor, D.fillRect(0, 0, S.width, S.height)));
      for (var T = 0, E = 0; E < g.length; ++E)
        T += g[E];
      if (T <= 0)
        return;
      for (var L = -w, P = 0, I = 0, R = 0; L < b.height; ) {
        if (P % 2 === 0) {
          for (var H = I / 2 % _.length, N = 0, z = 0, G = 0; N < b.width * 2; ) {
            for (var j = 0, E = 0; E < p[R].length; ++E)
              j += p[R][E];
            if (j <= 0)
              break;
            if (z % 2 === 0) {
              var J = (1 - o.symbolSize) * 0.5, vt = N + p[R][z] * J, Lt = L + g[P] * J, fe = p[R][z] * o.symbolSize, ir = g[P] * o.symbolSize, nr = G / 2 % _[H].length;
              Yr(vt, Lt, fe, ir, _[H][nr]);
            }
            N += p[R][z], ++G, ++z, z === p[R].length && (z = 0);
          }
          ++R, R === p.length && (R = 0);
        }
        L += g[P], ++I, ++P, P === g.length && (P = 0);
      }
      function Yr(Ut, mt, U, K, ar) {
        var Pt = n ? 1 : e, Of = _f(ar, Ut * Pt, mt * Pt, U * Pt, K * Pt, o.color, o.symbolKeepAspect);
        if (n) {
          var Nf = i.painter.renderOneToVNode(Of);
          Nf && x.children.push(Nf);
        } else
          iy(D, Of);
      }
    }
  }
}
function ny(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (F(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!F(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return ny([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    F(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function ay(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (ht(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!ht(r[i])) {
      e = !1;
      break;
    }
  if (e)
    return ay([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (ht(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = W(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function fT(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (ht(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = W(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function hT(r) {
  return W(r, function(t) {
    return oy(t);
  });
}
function oy(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function cT(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var u = i.ensureUniqueItemVisual(o, "style");
          u.decal = ll(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = ll(n, t);
      }
    }
  });
}
var vT = new Ae();
const de = vT;
var xo = {};
function dT(r, t) {
  process.env.NODE_ENV !== "production" && xo[r] && Et("Already has an implementation of " + r + "."), xo[r] = t;
}
function pT(r) {
  return process.env.NODE_ENV !== "production" && (xo[r] || Et("Implementation of " + r + " doesn't exists.")), xo[r];
}
var gT = 1, yT = 800, _T = 900, mT = 1e3, wT = 2e3, ST = 5e3, sy = 1e3, xT = 1100, mf = 2e3, uy = 3e3, bT = 4e3, qo = 4500, TT = 4600, CT = 5e3, DT = 6e3, ly = 7e3, MT = {
  PROCESSOR: {
    FILTER: mT,
    SERIES_FILTER: yT,
    STATISTIC: ST
  },
  VISUAL: {
    LAYOUT: sy,
    PROGRESSIVE_LAYOUT: xT,
    GLOBAL: mf,
    CHART: uy,
    POST_CHART_LAYOUT: TT,
    COMPONENT: bT,
    BRUSH: CT,
    CHART_ITEM: qo,
    ARIA: DT,
    DECAL: ly
  }
}, bt = "__flagInMainProcess", Bt = "__pendingUpdate", qs = "__needsUpdateStatus", sv = /^[a-zA-Z0-9_]+$/, Ks = "__connectUpdateStatus", uv = 0, AT = 1, ET = 2;
function fy(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      Yt(this.id);
      return;
    }
    return cy(this, r, t);
  };
}
function hy(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return cy(this, r, t);
  };
}
function cy(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), Ae.prototype[t].apply(r, e);
}
var vy = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  }(Ae)
), dy = vy.prototype;
dy.on = hy("on");
dy.off = hy("off");
var ni, Qs, Ma, Ye, js, Js, tu, ji, Ji, lv, fv, eu, hv, Aa, cv, py, Kt, vv, gy = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e, i, n) {
      var a = r.call(this, new Ib()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, F(i) && (i = yy[i]), a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          $.hasGlobalWindow ? window : global
        );
        l && (o = X(l.__ECHARTS__DEFAULT__RENDERER__, o), s = X(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = X(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      n.ssr;
      var f = a._zr = ph(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: X(n.useDirtyRect, u),
        useCoarsePointer: X(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = Zo(ft(f.flush, f), 17), i = Q(i), i && Ag(i, !0), a._theme = i, a._locale = PS(n.locale || og), a._coordSysMgr = new hf();
      var h = a._api = cv(a);
      function c(v, d) {
        return v.__prio - d.__prio;
      }
      return Ha(To, c), Ha(fl, c), a._scheduler = new jg(a, h, fl, To), a._messageCenter = new vy(), a._initEvents(), a.resize = ft(a.resize, a), f.animation.on("frame", a._onframe, a), lv(f, a), fv(f, a), Su(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        vv(this);
        var e = this._scheduler;
        if (this[Bt]) {
          var i = this[Bt].silent;
          this[bt] = !0;
          try {
            ni(this), Ye.update.call(this, null, this[Bt].updateParams);
          } catch (u) {
            throw this[bt] = !1, this[Bt] = null, u;
          }
          this._zr.flush(), this[bt] = !1, this[Bt] = null, ji.call(this, i), Ji.call(this, i);
        } else if (e.unfinished) {
          var n = gT, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), Js(this, a), e.performVisualTasks(a), Aa(this, this._model, o, "remain", {}), n -= +/* @__PURE__ */ new Date() - s;
          } while (n > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, i, n) {
      if (this[bt]) {
        process.env.NODE_ENV !== "production" && Et("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      var a, o, s;
      if (V(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[bt] = !0, !this._model || i) {
        var u = new vx(this._api), l = this._theme, f = this._model = new Cg();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, hl);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (n)
        this[Bt] = {
          silent: a,
          updateParams: h
        }, this[bt] = !1, this.getZr().wakeUp();
      else {
        try {
          ni(this), Ye.update.call(this, null, h);
        } catch (c) {
          throw this[Bt] = null, this[bt] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Bt] = null, this[bt] = !1, ji.call(this, a), Ji.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      De("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || $.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && gt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return i.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return i.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      if ($.svgSupported) {
        var e = this._zr, i = e.storage.getDisplayList();
        return C(i, function(n) {
          n.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      e = e || {};
      var i = e.excludeComponents, n = this._model, a = [], o = this;
      C(i, function(u) {
        n.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return C(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (dv[n]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        C(En, function(m, w) {
          if (m.group === n) {
            var S = i ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(Q(e)), x = m.getDom().getBoundingClientRect();
            u = a(x.left, u), l = a(x.top, l), f = o(x.right, f), h = o(x.bottom, h), c.push({
              dom: S,
              left: x.left,
              top: x.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, y = h - l, p = Pi.createCanvas(), g = ph(p, {
          renderer: i ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: y
        }), i) {
          var _ = "";
          return C(c, function(m) {
            var w = m.left - u, S = m.top - l;
            _ += '<g transform="translate(' + w + "," + S + ')">' + m.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new _t({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: y
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), C(c, function(m) {
            var w = new Ni({
              style: {
                x: m.left * v - u,
                y: m.top * v - l,
                image: m.dom
              }
            });
            g.add(w);
          }), g.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, i) {
      return js(this, "convertToPixel", e, i);
    }, t.prototype.convertFromPixel = function(e, i) {
      return js(this, "convertFromPixel", e, i);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      var n = this._model, a, o = ws(n, e);
      return C(o, function(s, u) {
        u.indexOf("Models") >= 0 && C(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(i);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(i, l) : process.env.NODE_ENV !== "production" && Mt(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && Mt(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, i) {
      var n = this._model, a = ws(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Mt("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? Nb(s, u, i) : kb(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      C(LT, function(i) {
        var n = function(a) {
          var o = e.getModel(), s = a.target, u, l = i === "globalout";
          if (l ? u = {} : s && gn(s, function(d) {
            var y = st(d);
            if (y && y.dataIndex != null) {
              var p = y.dataModel || o.getSeriesByIndex(y.seriesIndex);
              return u = p && p.getDataParams(y.dataIndex, y.dataType, s) || {}, !0;
            } else if (y.eventData)
              return u = O({}, y.eventData), !0;
          }, !0), u) {
            var f = u.componentType, h = u.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
            var c = f && h != null && o.getComponent(f, h), v = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
            process.env.NODE_ENV !== "production" && !l && !(c && v) && Mt("model or view can not be found by params"), u.event = a, u.type = i, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: u,
              model: c,
              view: v
            }, e.trigger(i, u);
          }
        };
        n.zrEventfulCallAtLast = !0, e._zr.on(i, n, e);
      }), C(An, function(i, n) {
        e._messageCenter.on(n, function(a) {
          this.trigger(n, a);
        }, e);
      }), C(["selectchanged"], function(i) {
        e._messageCenter.on(i, function(n) {
          this.trigger(i, n);
        }, e);
      }), Bb(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && np(this.getDom(), Sf, "");
      var i = this, n = i._api, a = i._model;
      C(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), C(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete En[i.id];
    }, t.prototype.resize = function(e) {
      if (this[bt]) {
        process.env.NODE_ENV !== "production" && Et("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      this._zr.resize(e);
      var i = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!i) {
        var n = i.resetOption("media"), a = e && e.silent;
        this[Bt] && (a == null && (a = this[Bt].silent), n = !0, this[Bt] = null), this[bt] = !0;
        try {
          n && ni(this), Ye.update.call(this, {
            type: "resize",
            animation: O({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[bt] = !1, o;
        }
        this[bt] = !1, ji.call(this, a), Ji.call(this, a);
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      if (V(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !cl[e]) {
        process.env.NODE_ENV !== "production" && Mt("Loading effects " + e + " not exists.");
        return;
      }
      var n = cl[e](this._api, i), a = this._zr;
      this._loadingFX = n, a.add(n);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = O({}, e);
      return i.type = An[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      if (V(i) || (i = {
        silent: !!i
      }), !!bo[e.type] && this._model) {
        if (this[bt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        tu.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && $.browser.weChat && this._throttledZrFlush(), ji.call(this, n), Ji.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      de.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        Yt(this.id);
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      process.env.NODE_ENV !== "production" && Z(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      ni = function(h) {
        var c = h._scheduler;
        c.restorePipelines(h._model), c.prepareStageTasks(), Qs(h, !0), Qs(h, !1), c.plan();
      }, Qs = function(h, c) {
        for (var v = h._model, d = h._scheduler, y = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, _ = h._api, m = 0; m < y.length; m++)
          y[m].__alive = !1;
        c ? v.eachComponent(function(x, b) {
          x !== "series" && w(b);
        }) : v.eachSeries(w);
        function w(x) {
          var b = x.__requireNewView;
          x.__requireNewView = !1;
          var D = "_ec_" + x.id + "_" + x.type, M = !b && p[D];
          if (!M) {
            var A = Te(x.type), T = c ? er.getClass(A.main, A.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              xi.getClass(A.sub)
            );
            process.env.NODE_ENV !== "production" && Z(T, A.sub + " does not exist."), M = new T(), M.init(v, _), p[D] = M, y.push(M), g.add(M.group);
          }
          x.__viewId = M.__id = D, M.__alive = !0, M.__model = x, M.group.__ecComponentInfo = {
            mainType: x.mainType,
            index: x.componentIndex
          }, !c && d.prepareView(M, x, v, _);
        }
        for (var m = 0; m < y.length; ) {
          var S = y[m];
          S.__alive ? m++ : (!c && S.renderTask.dispose(), g.remove(S.group), S.dispose(v, _), y.splice(m, 1), p[S.__id] === S && delete p[S.__id], S.__id = S.group.__ecComponentInfo = null);
        }
      }, Ma = function(h, c, v, d, y) {
        var p = h._model;
        if (p.setUpdatePayload(v), !d) {
          C([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var g = {};
        g[d + "Id"] = v[d + "Id"], g[d + "Index"] = v[d + "Index"], g[d + "Name"] = v[d + "Name"];
        var _ = {
          mainType: d,
          query: g
        };
        y && (_.subType = y);
        var m = v.excludeSeriesId, w;
        m != null && (w = q(), C(Ot(m), function(x) {
          var b = Ce(x, null);
          b != null && w.set(b, !0);
        })), p && p.eachComponent(_, function(x) {
          var b = w && w.get(x.id) != null;
          if (!b)
            if (Zh(v))
              if (x instanceof Li)
                v.type === kr && !v.notBlur && !x.get(["emphasis", "disabled"]) && rw(x, v, h._api);
              else {
                var D = Zl(x.mainType, x.componentIndex, v.name, h._api), M = D.focusSelf, A = D.dispatchers;
                v.type === kr && M && !v.notBlur && Yu(x.mainType, x.componentIndex, h._api), A && C(A, function(T) {
                  v.type === kr ? Gu(T) : Wu(T);
                });
              }
            else
              Xu(v) && x instanceof Li && (aw(x, v, h._api), $h(x), Kt(h));
        }, h), p && p.eachComponent(_, function(x) {
          var b = w && w.get(x.id) != null;
          b || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][x.__viewId]);
        }, h);
        function S(x) {
          x && x.__alive && x[c] && x[c](x.__model, p, h._api, v);
        }
      }, Ye = {
        prepareAndUpdate: function(h) {
          ni(this), Ye.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, y = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (v) {
            v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), Js(this, v), p.update(v, d), e(v), g.performVisualTasks(v, h), eu(this, v, d, h, c);
            var _ = v.get("backgroundColor") || "transparent", m = v.get("darkMode");
            y.setBackgroundColor(_), m != null && m !== "auto" && y.setDarkMode(m), de.trigger("afterupdate", v, d);
          }
        },
        updateTransform: function(h) {
          var c = this, v = this._model, d = this._api;
          if (v) {
            v.setUpdatePayload(h);
            var y = [];
            v.eachComponent(function(g, _) {
              if (g !== "series") {
                var m = c.getViewOfComponentModel(_);
                if (m && m.__alive)
                  if (m.updateTransform) {
                    var w = m.updateTransform(_, v, d, h);
                    w && w.update && y.push(m);
                  } else
                    y.push(m);
              }
            });
            var p = q();
            v.eachSeries(function(g) {
              var _ = c._chartsMap[g.__viewId];
              if (_.updateTransform) {
                var m = _.updateTransform(g, v, d, h);
                m && m.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), e(v), this._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: p
            }), Aa(this, v, d, h, {}, p), de.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), xi.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), eu(this, c, this._api, h, {}), de.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), xi.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, y) {
            if (d !== "series") {
              var p = c.getViewOfComponentModel(y);
              p && p.__alive && p.updateVisual(y, v, c._api, h);
            }
          }), v.eachSeries(function(d) {
            var y = c._chartsMap[d.__viewId];
            y.updateVisual(d, v, c._api, h);
          }), de.trigger("afterupdate", v, this._api));
        },
        updateLayout: function(h) {
          Ye.update.call(this, h);
        }
      }, js = function(h, c, v, d) {
        if (h._disposed) {
          Yt(h.id);
          return;
        }
        for (var y = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, _ = ws(y, v), m = 0; m < p.length; m++) {
          var w = p[m];
          if (w[c] && (g = w[c](y, _, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && Mt("No coordinate system that supports " + c + " found by the given finder.");
      }, Js = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(y) {
          d.updateStreamModes(y, v[y.__viewId]);
        });
      }, tu = function(h, c) {
        var v = this, d = this.getModel(), y = h.type, p = h.escapeConnect, g = bo[y], _ = g.actionInfo, m = (_.update || "update").split(":"), w = m.pop(), S = m[0] != null && Te(m[0]);
        this[bt] = !0;
        var x = [h], b = !1;
        h.batch && (b = !0, x = W(h.batch, function(P) {
          return P = at(O({}, P), h), P.batch = null, P;
        }));
        var D = [], M, A = Xu(h), T = Zh(h);
        if (T && Ap(this._api), C(x, function(P) {
          if (M = g.action(P, v._model, v._api), M = M || O({}, P), M.type = _.event || M.type, D.push(M), T) {
            var I = Gl(h), R = I.queryOptionMap, H = I.mainTypeSpecified, N = H ? R.keys()[0] : "series";
            Ma(v, w, P, N), Kt(v);
          } else
            A ? (Ma(v, w, P, "series"), Kt(v)) : S && Ma(v, w, P, S.main, S.sub);
        }), w !== "none" && !T && !A && !S)
          try {
            this[Bt] ? (ni(this), Ye.update.call(this, h), this[Bt] = null) : Ye[w].call(this, h);
          } catch (P) {
            throw this[bt] = !1, P;
          }
        if (b ? M = {
          type: _.event || y,
          escapeConnect: p,
          batch: D
        } : M = D[0], this[bt] = !1, !c) {
          var E = this._messageCenter;
          if (E.trigger(M.type, M), A) {
            var L = {
              type: "selectchanged",
              escapeConnect: p,
              selected: ow(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            E.trigger(L.type, L);
          }
        }
      }, ji = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          tu.call(this, v, h);
        }
      }, Ji = function(h) {
        !h && this.trigger("updated");
      }, lv = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Bt] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
        });
      }, fv = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, y = gn(d, Di);
          y && (iw(y, v, c._api), Kt(c));
        }).on("mouseout", function(v) {
          var d = v.target, y = gn(d, Di);
          y && (nw(y, v, c._api), Kt(c));
        }).on("click", function(v) {
          var d = v.target, y = gn(d, function(_) {
            return st(_).dataIndex != null;
          }, !0);
          if (y) {
            var p = y.selected ? "unselect" : "select", g = st(y);
            c._api.dispatchAction({
              type: p,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function e(h) {
        h.clearColorPalette(), h.eachSeries(function(c) {
          c.clearColorPalette();
        });
      }
      function i(h) {
        var c = [], v = [], d = !1;
        if (h.eachComponent(function(_, m) {
          var w = m.get("zlevel") || 0, S = m.get("z") || 0, x = m.getZLevelKey();
          d = d || !!x, (_ === "series" ? v : c).push({
            zlevel: w,
            z: S,
            idx: m.componentIndex,
            type: _,
            key: x
          });
        }), d) {
          var y = c.concat(v), p, g;
          Ha(y, function(_, m) {
            return _.zlevel === m.zlevel ? _.z - m.z : _.zlevel - m.zlevel;
          }), C(y, function(_) {
            var m = h.getComponent(_.type, _.idx), w = _.zlevel, S = _.key;
            p != null && (w = Math.max(p, w)), S ? (w === p && S !== g && w++, g = S) : g && (w === p && w++, g = ""), p = w, m.setZLevel(w);
          });
        }
      }
      eu = function(h, c, v, d, y) {
        i(c), hv(h, c, v, d, y), C(h._chartsViews, function(p) {
          p.__alive = !1;
        }), Aa(h, c, v, d, y), C(h._chartsViews, function(p) {
          p.__alive || p.remove(c, v);
        });
      }, hv = function(h, c, v, d, y, p) {
        C(p || h._componentsViews, function(g) {
          var _ = g.__model;
          l(_, g), g.render(_, c, v, d), s(_, g), f(_, g);
        });
      }, Aa = function(h, c, v, d, y, p) {
        var g = h._scheduler;
        y = O(y || {}, {
          updatedSeries: c.getSeries()
        }), de.trigger("series:beforeupdate", c, v, y);
        var _ = !1;
        c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          w.__alive = !0;
          var S = w.renderTask;
          g.updatePayload(S, d), l(m, w), p && p.get(m.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (_ = !0), w.group.silent = !!m.get("silent"), o(m, w), $h(m);
        }), g.unfinished = _ || g.unfinished, de.trigger("series:layoutlabels", c, v, y), de.trigger("series:transition", c, v, y), c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          s(m, w), f(m, w);
        }), a(h, c), de.trigger("series:afterupdate", c, v, y);
      }, Kt = function(h) {
        h[qs] = !0, h.getZr().wakeUp();
      }, vv = function(h) {
        h[qs] && (h.getZr().storage.traverse(function(c) {
          Tn(c) || n(c);
        }), h[qs] = !1);
      };
      function n(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var y = v[d];
          y === "emphasis" || y === "blur" || y === "select" || c.push(y);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === $l && h.states.emphasis ? c.push("emphasis") : h.hoverState === Yl && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function a(h, c) {
        var v = h._zr, d = v.storage, y = 0;
        d.traverse(function(p) {
          p.isGroup || y++;
        }), y > c.get("hoverLayerThreshold") && !$.node && !$.worker && c.eachSeries(function(p) {
          if (!p.preventUsingHoverLayer) {
            var g = h._chartsMap[p.__viewId];
            g.__alive && g.eachRendered(function(_) {
              _.states.emphasis && (_.states.emphasis.hoverLayer = !0);
            });
          }
        });
      }
      function o(h, c) {
        var v = h.get("blendMode") || null;
        c.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function s(h, c) {
        if (!h.preventAutoZ) {
          var v = h.get("z") || 0, d = h.get("zlevel") || 0;
          c.eachRendered(function(y) {
            return u(y, v, d, -1 / 0), !0;
          });
        }
      }
      function u(h, c, v, d) {
        var y = h.getTextContent(), p = h.getTextGuideLine(), g = h.isGroup;
        if (g)
          for (var _ = h.childrenRef(), m = 0; m < _.length; m++)
            d = Math.max(u(_[m], c, v, d), d);
        else
          h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
        if (y && (y.z = c, y.zlevel = v, isFinite(d) && (y.z2 = d + 2)), p) {
          var w = h.textGuideLineConfig;
          p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (w && w.showAbove ? 1 : -1));
        }
        return d;
      }
      function l(h, c) {
        c.eachRendered(function(v) {
          if (!Tn(v)) {
            var d = v.getTextContent(), y = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), y && y.stateTransition && (y.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(h, c) {
        var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), y = v.get("duration"), p = y > 0 ? {
          duration: y,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        c.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (Tn(g))
              return;
            if (g instanceof ot && vw(g), g.__dirty) {
              var _ = g.prevStates;
              _ && g.useStates(_);
            }
            if (d) {
              g.stateTransition = p;
              var m = g.getTextContent(), w = g.getTextGuideLine();
              m && (m.stateTransition = p), w && (w.stateTransition = p);
            }
            g.__dirty && n(g);
          }
        });
      }
      cv = function(h) {
        return new /** @class */
        (function(c) {
          B(v, c);
          function v() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var y = d.__ecComponentInfo;
              if (y != null)
                return h._model.getComponent(y.mainType, y.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, y) {
            Gu(d, y), Kt(h);
          }, v.prototype.leaveEmphasis = function(d, y) {
            Wu(d, y), Kt(h);
          }, v.prototype.enterBlur = function(d) {
            ew(d), Kt(h);
          }, v.prototype.leaveBlur = function(d) {
            Tp(d), Kt(h);
          }, v.prototype.enterSelect = function(d) {
            Cp(d), Kt(h);
          }, v.prototype.leaveSelect = function(d) {
            Dp(d), Kt(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v;
        }(Dg))(h);
      }, py = function(h) {
        function c(v, d) {
          for (var y = 0; y < v.length; y++) {
            var p = v[y];
            p[Ks] = d;
          }
        }
        C(An, function(v, d) {
          h._messageCenter.on(d, function(y) {
            if (dv[h.group] && h[Ks] !== uv) {
              if (y && y.escapeConnect)
                return;
              var p = h.makeActionFromEvent(y), g = [];
              C(En, function(_) {
                _ !== h && _.group === h.group && g.push(_);
              }), c(g, uv), C(g, function(_) {
                _[Ks] !== AT && _.dispatchAction(p);
              }), c(g, ET);
            }
          });
        });
      };
    }(), t;
  }(Ae)
), wf = gy.prototype;
wf.on = fy("on");
wf.off = fy("off");
wf.one = function(r, t, e) {
  var i = this;
  De("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var LT = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Yt(r) {
  process.env.NODE_ENV !== "production" && Mt("Instance " + r + " has been disposed");
}
var bo = {}, An = {}, fl = [], hl = [], To = [], yy = {}, cl = {}, En = {}, dv = {}, PT = +/* @__PURE__ */ new Date() - 0, Sf = "_echarts_instance_";
function IT(r, t, e) {
  var i = !(e && e.ssr);
  if (i) {
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("Initialize failed: invalid dom.");
    var n = RT(r);
    if (n)
      return process.env.NODE_ENV !== "production" && Mt("There is a chart instance already initialized on the dom."), n;
    process.env.NODE_ENV !== "production" && bi(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && Mt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new gy(r, t, e);
  return a.id = "ec_" + PT++, En[a.id] = a, i && np(r, Sf, a.id), py(a), de.trigger("afterinit", a), a;
}
function RT(r) {
  return En[G0(r, Sf)];
}
function _y(r, t) {
  yy[r] = t;
}
function my(r) {
  it(hl, r) < 0 && hl.push(r);
}
function wy(r, t) {
  bf(fl, r, t, wT);
}
function OT(r) {
  xf("afterinit", r);
}
function NT(r) {
  xf("afterupdate", r);
}
function xf(r, t) {
  de.on(r, t);
}
function Fi(r, t, e) {
  Y(t) && (e = t, t = "");
  var i = V(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || i).toLowerCase(), t = r.event, !An[t] && (Z(sv.test(i) && sv.test(t)), bo[i] || (bo[i] = {
    action: e,
    actionInfo: r
  }), An[t] = i);
}
function kT(r, t) {
  hf.register(r, t);
}
function BT(r, t) {
  bf(To, r, t, sy, "layout");
}
function Ur(r, t) {
  bf(To, r, t, uy, "visual");
}
var pv = [];
function bf(r, t, e, i, n) {
  if ((Y(t) || V(t)) && (e = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    C(r, function(o) {
      Z(o.__raw !== e);
    });
  }
  if (!(it(pv, e) >= 0)) {
    pv.push(e);
    var a = jg.wrapStageHandler(e, n);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function Sy(r, t) {
  cl[r] = t;
}
function FT(r, t, e) {
  var i = pT("registerMap");
  i && i(r, t, e);
}
var zT = Vx;
Ur(mf, gb);
Ur(qo, yb);
Ur(qo, _b);
Ur(mf, Rb);
Ur(qo, Ob);
Ur(ly, cT);
my(Ag);
wy(_T, xx);
Sy("default", mb);
Fi({
  type: kr,
  event: kr,
  update: kr
}, Ht);
Fi({
  type: Xa,
  event: Xa,
  update: Xa
}, Ht);
Fi({
  type: Sn,
  event: Sn,
  update: Sn
}, Ht);
Fi({
  type: Za,
  event: Za,
  update: Za
}, Ht);
Fi({
  type: xn,
  event: xn,
  update: xn
}, Ht);
_y("light", Lb);
_y("dark", Pb);
function tn(r) {
  return r == null ? 0 : r.length || 1;
}
function gv(r) {
  return r;
}
var VT = (
  /** @class */
  function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || gv, this._newKeyGetter = n || gv, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, i = {}, n = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(e, i, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = n[o], u = i[s], l = tn(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (i[s] = u[0]), this._update && this._update(f, o);
        } else
          l === 1 ? (i[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, i);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, i = {}, n = {}, a = [], o = [];
      this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(e, n, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = i[u], f = n[u], h = tn(l), c = tn(f);
        if (h > 1 && c === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), n[u] = null;
        else if (h === 1 && c > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), n[u] = null;
        else if (h === 1 && c === 1)
          this._update && this._update(f, l), n[u] = null;
        else if (h > 1 && c > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), n[u] = null;
        else if (h > 1)
          for (var v = 0; v < h; v++)
            this._remove && this._remove(l[v]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, n);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i], a = e[n], o = tn(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else
          o === 1 && this._add && this._add(a);
        e[n] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, i, n) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[n](t[o], o);
        if (a || (i[o] = s), !!e) {
          var u = e[s], l = tn(u);
          l === 0 ? (e[s] = o, a && i.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  }()
);
const HT = VT;
var GT = (
  /** @class */
  function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  }()
);
function WT(r, t) {
  var e = {}, i = e.encode = {}, n = q(), a = [], o = [], s = {};
  C(r.dimensions, function(c) {
    var v = r.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && Z(ju.get(d) == null);
      var y = v.coordDimIndex;
      ru(i, d)[y] = c, v.isExtraCoord || (n.set(d, 1), YT(v.type) && (a[0] = c), ru(s, d)[y] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    ju.each(function(p, g) {
      var _ = ru(i, g), m = v.otherDims[g];
      m != null && m !== !1 && (_[m] = v.name);
    });
  });
  var u = [], l = {};
  n.each(function(c, v) {
    var d = i[v];
    l[v] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = W(u, function(c) {
    return r.getDimensionInfo(c).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new GT(s, t), e;
}
function ru(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function UT(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function YT(r) {
  return !(r === "ordinal" || r === "time");
}
var $T = (
  /** @class */
  function() {
    function r(t) {
      this.otherDims = {}, t != null && O(this, t);
    }
    return r;
  }()
);
const ja = $T;
var XT = pt(), ZT = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, xy = (
  /** @class */
  function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Cy(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return X(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = Lg(this.source), i = !Dy(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = e ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var c = this.getSourceDimension(o);
          c && (u = e ? c.name : null, l = c.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), e && u != null && (!h || !h.isCalculationCoord) && (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), n += "$", n += ZT[l] || "f", f && (n += f.uid), n += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, n].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
        var n = void 0, a = this.dimensions[i];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (n = a.name), i++;
        else {
          var o = this.getSourceDimension(e);
          o && (n = o.name);
        }
        t.push(n);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  }()
);
function by(r) {
  return r instanceof xy;
}
function Ty(r) {
  for (var t = q(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = V(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function Cy(r) {
  var t = XT(r);
  return t.dimNameMap || (t.dimNameMap = Ty(r.dimensionsDefine));
}
function Dy(r) {
  return r > 30;
}
var en = V, $e = W, qT = typeof Int32Array > "u" ? Array : Int32Array, KT = "e\0\0", yv = -1, QT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], jT = ["_approximateExtent"], _v, Ea, rn, ai, iu, nn, nu, JT = (
  /** @class */
  function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var i, n = !1;
      by(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < i.length; f++) {
        var h = i[f], c = F(h) ? new ja({
          name: h
        }) : h instanceof ja ? h : new ja(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && Z(n || c.storeDimIndex >= 0), n && (c.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var y = this._dimIdxToName = q();
        C(o, function(p) {
          y.set(a[p].storeDimIndex, p);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var i = this._dimIdxToName.get(e);
      if (i != null)
        return i;
      var n = this._schema.getSourceDimension(e);
      if (n)
        return n.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var i = this._getDimInfo(t);
      return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (ht(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && e == null)
        throw new Error("Unknown dimension " + t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(i) {
        return e.hasOwnProperty(i) ? e[i] : void 0;
      } : function(i) {
        return e[i];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var i = this._dimSummary;
      if (e == null)
        return i.encodeFirstDimNotExtra[t];
      var n = i.encode[t];
      return n ? n[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, i = e.encode[t];
      return (i || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, i) {
      var n = this, a;
      if (t instanceof tl && (a = t), !a) {
        var o = this.dimensions, s = cf(t) || Gt(t) ? new Pg(t, o.length) : t;
        a = new tl();
        var u = $e(o, function(l) {
          return {
            type: n._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = WT(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e && e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var u = s - n;
          this._nameList[s] = e[u], o && nu(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
        var n = this._dimInfos[e[i]];
        n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Oe && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var i = this._store, n = i.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, u = s === le;
        if (u && !n.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = n.getItem(f, l);
            if (!this.hasItemOption && P0(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = Ce(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = Ce(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            nu(this, f);
        _v(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      en(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = rn(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return Ea(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.get(n.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.getByRawIndex(n.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var i = this, n = this._store;
      return k(t) ? n.getValues($e(t, function(a) {
        return i._getStoreDimIndex(a);
      }), e) : n.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length; i < n; i++)
        if (isNaN(this._store.get(e[i], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, i = this._store.count(); e < i; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var i = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !i)
        throw new Error("Do not supported yet");
      var n = i && i[e];
      return n == null || isNaN(n) ? yv : n;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
    }, r.prototype.each = function(t, e, i) {
      Y(t) && (i = e, e = t, t = []);
      var n = i || this, a = $e(ai(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? ft(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      Y(t) && (i = e, e = t, t = []);
      var n = i || this, a = $e(ai(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? ft(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = lt(t);
      return C(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      Y(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = $e(ai(t), this._getStoreDimIndex, this), s = nn(this);
      return s._store = this._store.map(o, a ? ft(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = this, o = i || n || this;
      process.env.NODE_ENV !== "production" && C(ai(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = $e(ai(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? ft(e, o) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = nn(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var i = nn(this);
      return i._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = nn(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new At(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new HT(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return Ea(t, i);
      }, function(i) {
        return Ea(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, en(t) ? O(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), k(a) ? a = a.slice() : en(a) && (a = O({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, en(e) ? O(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      en(t) ? O(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, i) {
      this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var i = this.hostModel && this.hostModel.seriesIndex;
      Y1(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      C(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : $e(this.dimensions, this._getDimInfo, this), this.hostModel)), iu(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      Y(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(Ll(arguments)));
      });
    }, r.internalField = function() {
      _v = function(t) {
        var e = t._invertedIndicesMap;
        C(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new qT(o.categories.length);
            for (var u = 0; u < i.length; u++)
              i[u] = yv;
            for (var u = 0; u < s.count(); u++)
              i[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, rn = function(t, e, i) {
        return Ce(t._getCategory(e, i), null);
      }, Ea = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = rn(t, t._idDimIdx, e)), i == null && (i = KT + e), i;
      }, ai = function(t) {
        return k(t) || (t = t != null ? [t] : []), t;
      }, nn = function(t) {
        var e = new r(t._schema ? t._schema : $e(t.dimensions, t._getDimInfo, t), t.hostModel);
        return iu(e, t), e;
      }, iu = function(t, e) {
        C(QT.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, C(jT, function(i) {
          t[i] = Q(e[i]);
        }), t._calculationInfo = O({}, e._calculationInfo);
      }, nu = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], u = n[e];
        if (s == null && a != null && (i[e] = s = rn(t, a, e)), u == null && o != null && (n[e] = u = rn(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), n[e] = u;
        }
      };
    }(), r;
  }()
);
const tC = JT;
function eC(r, t) {
  cf(r) || (r = vf(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = q(), a = [], o = iC(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && Dy(o), u = i === r.dimensionsDefine, l = u ? Cy(r) : Ty(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = q(f), c = new kg(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(M) {
    var A = c[M];
    if (A < 0) {
      var T = i[M], E = V(T) ? T : {
        name: T
      }, L = new ja(), P = E.name;
      P != null && l.get(P) != null && (L.name = L.displayName = P), E.type != null && (L.type = E.type), E.displayName != null && (L.displayName = E.displayName);
      var I = a.length;
      return c[M] = I, L.storeDimIndex = M, a.push(L), L;
    }
    return a[A];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(M, A) {
    var T = Ot(M).slice();
    if (T.length === 1 && !F(T[0]) && T[0] < 0) {
      h.set(A, !1);
      return;
    }
    var E = h.set(A, []);
    C(T, function(L, P) {
      var I = F(L) ? l.get(L) : L;
      I != null && I < o && (E[P] = I, p(d(I), A, P));
    });
  });
  var y = 0;
  C(e, function(M) {
    var A, T, E, L;
    if (F(M))
      A = M, L = {};
    else {
      L = M, A = L.name;
      var P = L.ordinalMeta;
      L.ordinalMeta = null, L = O({}, L), L.ordinalMeta = P, T = L.dimsDef, E = L.otherDims, L.name = L.coordDim = L.coordDimIndex = L.dimsDef = L.otherDims = null;
    }
    var I = h.get(A);
    if (I !== !1) {
      if (I = Ot(I), !I.length)
        for (var R = 0; R < (T && T.length || 1); R++) {
          for (; y < o && d(y).coordDim != null; )
            y++;
          y < o && I.push(y++);
        }
      C(I, function(H, N) {
        var z = d(H);
        if (u && L.type != null && (z.type = L.type), p(at(z, L), A, N), z.name == null && T) {
          var G = T[N];
          !V(G) && (G = {
            name: G
          }), z.name = z.displayName = G.name, z.defaultTooltip = G.defaultTooltip;
        }
        E && at(z.otherDims, E);
      });
    }
  });
  function p(M, A, T) {
    ju.get(A) != null ? M.otherDims[A] = T : (M.coordDim = A, M.coordDimIndex = T, n.set(A, !0));
  }
  var g = t.generateCoord, _ = t.generateCoordCount, m = _ != null;
  _ = g ? _ || 1 : 0;
  var w = g || "value";
  function S(M) {
    M.name == null && (M.name = M.coordDim);
  }
  if (s)
    C(a, function(M) {
      S(M);
    }), a.sort(function(M, A) {
      return M.storeDimIndex - A.storeDimIndex;
    });
  else
    for (var x = 0; x < o; x++) {
      var b = d(x), D = b.coordDim;
      D == null && (b.coordDim = nC(w, n, m), b.coordDimIndex = 0, (!g || _ <= 0) && (b.isExtraCoord = !0), _--), S(b), b.type == null && (bg(r, x) === $t.Must || b.isExtraCoord && (b.otherDims.itemName != null || b.otherDims.seriesName != null)) && (b.type = "ordinal");
    }
  return rC(a), new xy({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function rC(r) {
  for (var t = q(), e = 0; e < r.length; e++) {
    var i = r[e], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function iC(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return C(t, function(a) {
    var o;
    V(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function nC(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
var aC = (
  /** @class */
  function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = q(), this.categoryAxisMap = q(), this.coordSysName = t;
    }
    return r;
  }()
);
function oC(r) {
  var t = r.get("coordinateSystem"), e = new aC(t), i = sC[t];
  if (i)
    return i(r, e, e.axisMap, e.categoryAxisMap), e;
}
var sC = {
  cartesian2d: function(r, t, e, i) {
    var n = r.getReferringComponents("xAxis", pe).models[0], a = r.getReferringComponents("yAxis", pe).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error('xAxis "' + zr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + zr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], e.set("x", n), e.set("y", a), oi(n) && (i.set("x", n), t.firstCategoryDimIndex = 0), oi(a) && (i.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, i) {
    var n = r.getReferringComponents("singleAxis", pe).models[0];
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], e.set("single", n), oi(n) && (i.set("single", n), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, i) {
    var n = r.getReferringComponents("polar", pe).models[0], a = n.findAxisModel("radiusAxis"), o = n.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), oi(a) && (i.set("radius", a), t.firstCategoryDimIndex = 0), oi(o) && (i.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, i) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, i) {
    var n = r.ecModel, a = n.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    C(a.parallelAxisIndex, function(s, u) {
      var l = n.getComponent("parallelAxis", s), f = o[u];
      e.set(f, l), oi(l) && (i.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  }
};
function oi(r) {
  return r.get("type") === "category";
}
function uC(r, t, e) {
  e = e || {};
  var i = e.byIndex, n = e.stackedCoordDimension, a, o, s;
  lC(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(r && r.get("stack")), l, f, h, c;
  if (C(a, function(_, m) {
    F(_) && (a[m] = _ = {
      name: _
    }), u && !_.isExtraCoord && (!i && !l && _.ordinalMeta && (l = _), !f && _.type !== "ordinal" && _.type !== "time" && (!n || n === _.coordDim) && (f = _));
  }), f && !i && !l && (i = !0), f) {
    h = "__\0ecstackresult_" + r.id, c = "__\0ecstackedover_" + r.id, l && (l.createInvertedIndices = !0);
    var v = f.coordDim, d = f.type, y = 0;
    C(a, function(_) {
      _.coordDim === v && y++;
    });
    var p = {
      name: h,
      coordDim: v,
      coordDimIndex: y,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, g = {
      name: c,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: c,
      coordDimIndex: y + 1,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(c, d), g.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(g)) : (a.push(p), a.push(g));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: i,
    stackedOverDimension: c,
    stackResultDimension: h
  };
}
function lC(r) {
  return !by(r.schema);
}
function My(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function fC(r, t) {
  return My(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function hC(r, t) {
  var e = r.get("coordinateSystem"), i = hf.get(e), n;
  return t && t.coordSysDims && (n = W(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = UT(u);
    }
    return o;
  })), n || (n = i && (i.getDimensionsInfo ? i.getDimensionsInfo() : i.dimensions.slice()) || ["x", "y"]), n;
}
function cC(r, t, e) {
  var i, n;
  return e && C(r, function(a, o) {
    var s = a.coordDim, u = e.categoryAxisMap.get(s);
    u && (i == null && (i = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (n = !0);
  }), !n && i != null && (r[i].otherDims.itemName = 0), i;
}
function Ay(r, t, e) {
  e = e || {};
  var i = t.getSourceManager(), n, a = !1;
  r ? (a = !0, n = vf(r)) : (n = i.getSource(), a = n.sourceFormat === le);
  var o = oC(t), s = hC(t, o), u = e.useEncodeDefaulter, l = Y(u) ? u : u ? dt(YS, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = eC(n, f), c = cC(h.dimensions, e.createInvertedIndices, o), v = a ? null : i.getSharedDataStore(h), d = uC(t, {
    schema: h,
    store: v
  }), y = new tC(h, t);
  y.setCalculationInfo(d);
  var p = c != null && vC(n) ? function(g, _, m, w) {
    return w === c ? m : this.defaultDimValueGetter(g, _, m, w);
  } : null;
  return y.hasItemOption = !1, y.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? n : v,
    null,
    p
  ), y;
}
function vC(r) {
  if (r.sourceFormat === le) {
    var t = dC(r.data || []);
    return !k($n(t));
  }
}
function dC(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var Ey = (
  /** @class */
  function() {
    function r(t) {
      this._setting = t || {}, this._extent = [1 / 0, -1 / 0];
    }
    return r.prototype.getSetting = function(t) {
      return this._setting[t];
    }, r.prototype.unionExtent = function(t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }, r.prototype.unionExtentFromData = function(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.setExtent = function(t, e) {
      var i = this._extent;
      isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
    }, r.prototype.isInExtentRange = function(t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }, r.prototype.isBlank = function() {
      return this._isBlank;
    }, r.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, r;
  }()
);
Po(Ey);
const Ve = Ey;
var pC = 0, gC = (
  /** @class */
  function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++pC;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, i = e.data, n = i && W(i, yC);
      return new r({
        categories: n,
        needCollect: !n,
        // deduplication is default in axis.
        deduplication: e.dedplication !== !1
      });
    }, r.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, r.prototype.parseAndCollect = function(t) {
      var e, i = this._needCollect;
      if (!F(t) && !i)
        return t;
      if (i && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, e;
      var n = this._getOrCreateMap();
      return e = n.get(t), e == null && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = q(this.categories));
    }, r;
  }()
);
function yC(r) {
  return V(r) && r.value != null ? r.value : r + "";
}
const vl = gC;
function _C(r) {
  var t = Math.pow(10, Eo(Math.abs(r))), e = Math.abs(r / t);
  return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
}
function dl(r) {
  return r.type === "interval" || r.type === "log";
}
function mC(r, t, e, i) {
  var n = {}, a = r[1] - r[0], o = n.interval = jd(a / t, !0);
  e != null && o < e && (o = n.interval = e), i != null && o > i && (o = n.interval = i);
  var s = n.intervalPrecision = Ly(o), u = n.niceTickExtent = [yt(Math.ceil(r[0] / o) * o, s), yt(Math.floor(r[1] / o) * o, s)];
  return wC(u, r), n;
}
function au(r) {
  var t = Math.pow(10, Eo(r)), e = r / t;
  return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, yt(e * t);
}
function Ly(r) {
  return Rn(r) + 2;
}
function mv(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function wC(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), mv(r, 0, t), mv(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
}
function Ko(r, t) {
  return r >= t[0] && r <= t[1];
}
function Qo(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function jo(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var Py = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      i.type = "ordinal";
      var n = i.getSetting("ordinalMeta");
      return n || (n = new vl({})), k(n) && (n = new vl({
        categories: W(n, function(a) {
          return V(a) ? a.value : a;
        })
      })), i._ordinalMeta = n, i._extent = i.getSetting("extent") || [0, n.categories.length - 1], i;
    }
    return t.prototype.parse = function(e) {
      return e == null ? NaN : F(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
    }, t.prototype.contain = function(e) {
      return e = this.parse(e), Ko(e, this._extent) && this._ordinalMeta.categories[e] != null;
    }, t.prototype.normalize = function(e) {
      return e = this._getTickNumber(this.parse(e)), Qo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Math.round(jo(e, this._extent)), this.getRawOrdinalNumber(e);
    }, t.prototype.getTicks = function() {
      for (var e = [], i = this._extent, n = i[0]; n <= i[1]; )
        e.push({
          value: n
        }), n++;
      return e;
    }, t.prototype.getMinorTicks = function(e) {
    }, t.prototype.setSortInfo = function(e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var i = e.ordinalNumbers, n = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = Math.min(s, i.length); o < u; ++o) {
        var l = i[o];
        n[o] = l, a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        n.push(f), a[f] = o;
      }
    }, t.prototype._getTickNumber = function(e) {
      var i = this._ticksByOrdinalNumber;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }, t.prototype.getRawOrdinalNumber = function(e) {
      var i = this._ordinalNumbersByTick;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }, t.prototype.getLabel = function(e) {
      if (!this.isBlank()) {
        var i = this.getRawOrdinalNumber(e.value), n = this._ordinalMeta.categories[i];
        return n == null ? "" : n + "";
      }
    }, t.prototype.count = function() {
      return this._extent[1] - this._extent[0] + 1;
    }, t.prototype.unionExtentFromData = function(e, i) {
      this.unionExtent(e.getApproximateExtent(i));
    }, t.prototype.isInExtentRange = function(e) {
      return e = this._getTickNumber(e), this._extent[0] <= e && this._extent[1] >= e;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.prototype.calcNiceTicks = function() {
    }, t.prototype.calcNiceExtent = function() {
    }, t.type = "ordinal", t;
  }(Ve)
);
Ve.registerClass(Py);
const Iy = Py;
var Dr = yt, Ry = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
    }
    return t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return Ko(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return Qo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return jo(e, this._extent);
    }, t.prototype.setExtent = function(e, i) {
      var n = this._extent;
      isNaN(e) || (n[0] = parseFloat(e)), isNaN(i) || (n[1] = parseFloat(i));
    }, t.prototype.unionExtent = function(e) {
      var i = this._extent;
      e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]), this.setExtent(i[0], i[1]);
    }, t.prototype.getInterval = function() {
      return this._interval;
    }, t.prototype.setInterval = function(e) {
      this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ly(e);
    }, t.prototype.getTicks = function(e) {
      var i = this._interval, n = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
      if (!i)
        return s;
      var u = 1e4;
      n[0] < a[0] && (e ? s.push({
        value: Dr(a[0] - i, o)
      }) : s.push({
        value: n[0]
      }));
      for (var l = a[0]; l <= a[1] && (s.push({
        value: l
      }), l = Dr(l + i, o), l !== s[s.length - 1].value); )
        if (s.length > u)
          return [];
      var f = s.length ? s[s.length - 1].value : a[1];
      return n[1] > f && (e ? s.push({
        value: Dr(f + i, o)
      }) : s.push({
        value: n[1]
      })), s;
    }, t.prototype.getMinorTicks = function(e) {
      for (var i = this.getTicks(!0), n = [], a = this.getExtent(), o = 1; o < i.length; o++) {
        for (var s = i[o], u = i[o - 1], l = 0, f = [], h = s.value - u.value, c = h / e; l < e - 1; ) {
          var v = Dr(u.value + (l + 1) * c);
          v > a[0] && v < a[1] && f.push(v), l++;
        }
        n.push(f);
      }
      return n;
    }, t.prototype.getLabel = function(e, i) {
      if (e == null)
        return "";
      var n = i && i.precision;
      n == null ? n = Rn(e.value) || 0 : n === "auto" && (n = this._intervalPrecision);
      var a = Dr(e.value, n, !0);
      return gg(a);
    }, t.prototype.calcNiceTicks = function(e, i, n) {
      e = e || 5;
      var a = this._extent, o = a[1] - a[0];
      if (isFinite(o)) {
        o < 0 && (o = -o, a.reverse());
        var s = mC(a, e, i, n);
        this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      var i = this._extent;
      if (i[0] === i[1])
        if (i[0] !== 0) {
          var n = Math.abs(i[0]);
          e.fixMax || (i[1] += n / 2), i[0] -= n / 2;
        } else
          i[1] = 1;
      var a = i[1] - i[0];
      isFinite(a) || (i[0] = 0, i[1] = 1), this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      var o = this._interval;
      e.fixMin || (i[0] = Dr(Math.floor(i[0] / o) * o)), e.fixMax || (i[1] = Dr(Math.ceil(i[1] / o) * o));
    }, t.prototype.setNiceExtent = function(e, i) {
      this._niceExtent = [e, i];
    }, t.type = "interval", t;
  }(Ve)
);
Ve.registerClass(Ry);
const Qn = Ry;
var Oy = typeof Float32Array < "u", SC = Oy ? Float32Array : Array;
function ou(r) {
  return k(r) ? Oy ? new Float32Array(r) : r : new SC(r);
}
var xC = "__ec_stack_";
function Tf(r) {
  return r.get("stack") || xC + r.seriesIndex;
}
function Cf(r) {
  return r.dim + r.index;
}
function Ny(r, t) {
  var e = [];
  return t.eachSeriesByType(r, function(i) {
    By(i) && e.push(i);
  }), e;
}
function bC(r) {
  var t = {};
  C(r, function(u) {
    var l = u.coordinateSystem, f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (var h = u.getData(), c = f.dim + "_" + f.index, v = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), y = 0, p = d.count(); y < p; ++y) {
        var g = d.get(v, y);
        t[c] ? t[c].push(g) : t[c] = [g];
      }
  });
  var e = {};
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var n = t[i];
      if (n) {
        n.sort(function(u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < n.length; ++o) {
          var s = n[o] - n[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        e[i] = a;
      }
    }
  return e;
}
function ky(r) {
  var t = bC(r), e = [];
  return C(r, function(i) {
    var n = i.coordinateSystem, a = n.getBaseAxis(), o = a.getExtent(), s;
    if (a.type === "category")
      s = a.getBandWidth();
    else if (a.type === "value" || a.type === "time") {
      var u = a.dim + "_" + a.index, l = t[u], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), c = Math.abs(h[1] - h[0]);
      s = l ? f / c * l : f;
    } else {
      var v = i.getData();
      s = Math.abs(o[1] - o[0]) / v.count();
    }
    var d = Rt(i.get("barWidth"), s), y = Rt(i.get("barMaxWidth"), s), p = Rt(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      i.get("barMinWidth") || (Fy(i) ? 0.5 : 1),
      s
    ), g = i.get("barGap"), _ = i.get("barCategoryGap");
    e.push({
      bandWidth: s,
      barWidth: d,
      barMaxWidth: y,
      barMinWidth: p,
      barGap: g,
      barCategoryGap: _,
      axisKey: Cf(a),
      stackId: Tf(i)
    });
  }), TC(e);
}
function TC(r) {
  var t = {};
  C(r, function(i, n) {
    var a = i.axisKey, o = i.bandWidth, s = t[a] || {
      bandWidth: o,
      remainedWidth: o,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    }, u = s.stacks;
    t[a] = s;
    var l = i.stackId;
    u[l] || s.autoWidthCount++, u[l] = u[l] || {
      width: 0,
      maxWidth: 0
    };
    var f = i.barWidth;
    f && !u[l].width && (u[l].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
    var h = i.barMaxWidth;
    h && (u[l].maxWidth = h);
    var c = i.barMinWidth;
    c && (u[l].minWidth = c);
    var v = i.barGap;
    v != null && (s.gap = v);
    var d = i.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var e = {};
  return C(t, function(i, n) {
    e[n] = {};
    var a = i.stacks, o = i.bandWidth, s = i.categoryGap;
    if (s == null) {
      var u = lt(a).length;
      s = Math.max(35 - u * 4, 15) + "%";
    }
    var l = Rt(s, o), f = Rt(i.gap, 1), h = i.remainedWidth, c = i.autoWidthCount, v = (h - l) / (c + (c - 1) * f);
    v = Math.max(v, 0), C(a, function(g) {
      var _ = g.maxWidth, m = g.minWidth;
      if (g.width) {
        var w = g.width;
        _ && (w = Math.min(w, _)), m && (w = Math.max(w, m)), g.width = w, h -= w + f * w, c--;
      } else {
        var w = v;
        _ && _ < w && (w = Math.min(_, h)), m && m > w && (w = m), w !== v && (g.width = w, h -= w + f * w, c--);
      }
    }), v = (h - l) / (c + (c - 1) * f), v = Math.max(v, 0);
    var d = 0, y;
    C(a, function(g, _) {
      g.width || (g.width = v), y = g, d += g.width * (1 + f);
    }), y && (d -= y.width * f);
    var p = -d / 2;
    C(a, function(g, _) {
      e[n][_] = e[n][_] || {
        bandWidth: o,
        offset: p,
        width: g.width
      }, p += g.width * (1 + f);
    });
  }), e;
}
function CC(r, t, e) {
  if (r && t) {
    var i = r[Cf(t)];
    return i != null && e != null ? i[Tf(e)] : i;
  }
}
function DC(r, t) {
  var e = Ny(r, t), i = ky(e);
  C(e, function(n) {
    var a = n.getData(), o = n.coordinateSystem, s = o.getBaseAxis(), u = Tf(n), l = i[Cf(s)][u], f = l.offset, h = l.width;
    a.setLayout({
      bandWidth: l.bandWidth,
      offset: f,
      size: h
    });
  });
}
function MC(r) {
  return {
    seriesType: r,
    plan: Ug(),
    reset: function(t) {
      if (By(t)) {
        var e = t.getData(), i = t.coordinateSystem, n = i.getBaseAxis(), a = i.getOtherAxis(n), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(n.dim)), u = t.get("showBackground", !0), l = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = My(e, l) && !!e.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = AC(n, a), d = Fy(t), y = t.get("barMinHeight") || 0, p = f && e.getDimensionIndex(f), g = e.getLayout("size"), _ = e.getLayout("offset");
        return {
          progress: function(m, w) {
            for (var S = m.count, x = d && ou(S * 3), b = d && u && ou(S * 3), D = d && ou(S), M = i.master.getRect(), A = c ? M.width : M.height, T, E = w.getStore(), L = 0; (T = m.next()) != null; ) {
              var P = E.get(h ? p : o, T), I = E.get(s, T), R = v, H = void 0;
              h && (H = +P - E.get(o, T));
              var N = void 0, z = void 0, G = void 0, j = void 0;
              if (c) {
                var J = i.dataToPoint([P, I]);
                if (h) {
                  var vt = i.dataToPoint([H, I]);
                  R = vt[0];
                }
                N = R, z = J[1] + _, G = J[0] - R, j = g, Math.abs(G) < y && (G = (G < 0 ? -1 : 1) * y);
              } else {
                var J = i.dataToPoint([I, P]);
                if (h) {
                  var vt = i.dataToPoint([I, H]);
                  R = vt[1];
                }
                N = J[0] + _, z = R, G = g, j = J[1] - R, Math.abs(j) < y && (j = (j <= 0 ? -1 : 1) * y);
              }
              d ? (x[L] = N, x[L + 1] = z, x[L + 2] = c ? G : j, b && (b[L] = c ? M.x : N, b[L + 1] = c ? z : M.y, b[L + 2] = A), D[T] = T) : w.setItemLayout(T, {
                x: N,
                y: z,
                width: G,
                height: j
              }), L += 3;
            }
            d && w.setLayout({
              largePoints: x,
              largeDataIndices: D,
              largeBackgroundPoints: b,
              valueAxisHorizontal: c
            });
          }
        };
      }
    }
  };
}
function By(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function Fy(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function AC(r, t) {
  var e = t.model.get("startValue");
  return e || (e = 0), t.toGlobalCoord(t.dataToCoord(t.type === "log" ? e > 0 ? e : 1 : e));
}
var EC = function(r, t, e, i) {
  for (; e < i; ) {
    var n = e + i >>> 1;
    r[n][1] < t ? e = n + 1 : i = n;
  }
  return e;
}, zy = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "time", i;
    }
    return t.prototype.getLabel = function(e) {
      var i = this.getSetting("useUTC");
      return Fo(e.value, hc[NS(wi(this._minLevelUnit))] || hc.second, i, this.getSetting("locale"));
    }, t.prototype.getFormattedLabel = function(e, i, n) {
      var a = this.getSetting("useUTC"), o = this.getSetting("locale");
      return kS(e, i, n, o, a);
    }, t.prototype.getTicks = function() {
      var e = this._interval, i = this._extent, n = [];
      if (!e)
        return n;
      n.push({
        value: i[0],
        level: 0
      });
      var a = this.getSetting("useUTC"), o = kC(this._minLevelUnit, this._approxInterval, a, i);
      return n = n.concat(o), n.push({
        value: i[1],
        level: 0
      }), n;
    }, t.prototype.calcNiceExtent = function(e) {
      var i = this._extent;
      if (i[0] === i[1] && (i[0] -= ae, i[1] += ae), i[1] === -1 / 0 && i[0] === 1 / 0) {
        var n = /* @__PURE__ */ new Date();
        i[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), i[0] = i[1] - ae;
      }
      this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
    }, t.prototype.calcNiceTicks = function(e, i, n) {
      e = e || 10;
      var a = this._extent, o = a[1] - a[0];
      this._approxInterval = o / e, i != null && this._approxInterval < i && (this._approxInterval = i), n != null && this._approxInterval > n && (this._approxInterval = n);
      var s = La.length, u = Math.min(EC(La, this._approxInterval, 0, s), s - 1);
      this._interval = La[u][1], this._minLevelUnit = La[Math.max(u - 1, 0)][0];
    }, t.prototype.parse = function(e) {
      return ht(e) ? e : +ke(e);
    }, t.prototype.contain = function(e) {
      return Ko(this.parse(e), this._extent);
    }, t.prototype.normalize = function(e) {
      return Qo(this.parse(e), this._extent);
    }, t.prototype.scale = function(e) {
      return jo(e, this._extent);
    }, t.type = "time", t;
  }(Qn)
), La = [
  // Format                           interval
  ["second", of],
  ["minute", sf],
  ["hour", Cn],
  ["quarter-day", Cn * 6],
  ["half-day", Cn * 12],
  ["day", ae * 1.2],
  ["half-week", ae * 3.5],
  ["week", ae * 7],
  ["month", ae * 31],
  ["quarter", ae * 95],
  ["half-year", fc / 2],
  ["year", fc]
  // 1Y
];
function LC(r, t, e, i) {
  var n = ke(t), a = ke(e), o = function(d) {
    return cc(n, d, i) === cc(a, d, i);
  }, s = function() {
    return o("year");
  }, u = function() {
    return s() && o("month");
  }, l = function() {
    return u() && o("day");
  }, f = function() {
    return l() && o("hour");
  }, h = function() {
    return f() && o("minute");
  }, c = function() {
    return h() && o("second");
  }, v = function() {
    return c() && o("millisecond");
  };
  switch (r) {
    case "year":
      return s();
    case "month":
      return u();
    case "day":
      return l();
    case "hour":
      return f();
    case "minute":
      return h();
    case "second":
      return c();
    case "millisecond":
      return v();
  }
}
function PC(r, t) {
  return r /= ae, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function IC(r) {
  var t = 30 * ae;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function RC(r) {
  return r /= Cn, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function wv(r, t) {
  return r /= t ? sf : of, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function OC(r) {
  return jd(r, !0);
}
function NC(r, t, e) {
  var i = new Date(r);
  switch (wi(t)) {
    case "year":
    case "month":
      i[fg(e)](0);
    case "day":
      i[hg(e)](1);
    case "hour":
      i[cg(e)](0);
    case "minute":
      i[vg(e)](0);
    case "second":
      i[dg(e)](0), i[pg(e)](0);
  }
  return i.getTime();
}
function kC(r, t, e, i) {
  var n = 1e4, a = ug, o = 0;
  function s(A, T, E, L, P, I, R) {
    for (var H = new Date(T), N = T, z = H[L](); N < E && N <= i[1]; )
      R.push({
        value: N
      }), z += A, H[P](z), N = H.getTime();
    R.push({
      value: N,
      notAdd: !0
    });
  }
  function u(A, T, E) {
    var L = [], P = !T.length;
    if (!LC(wi(A), i[0], i[1], e)) {
      P && (T = [{
        // TODO Optimize. Not include so may ticks.
        value: NC(new Date(i[0]), A, e)
      }, {
        value: i[1]
      }]);
      for (var I = 0; I < T.length - 1; I++) {
        var R = T[I].value, H = T[I + 1].value;
        if (R !== H) {
          var N = void 0, z = void 0, G = void 0, j = !1;
          switch (A) {
            case "year":
              N = Math.max(1, Math.round(t / ae / 365)), z = uf(e), G = BS(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              N = IC(t), z = Si(e), G = fg(e);
              break;
            case "week":
            case "half-week":
            case "day":
              N = PC(t), z = zo(e), G = hg(e), j = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              N = RC(t), z = kn(e), G = cg(e);
              break;
            case "minute":
              N = wv(t, !0), z = Vo(e), G = vg(e);
              break;
            case "second":
              N = wv(t, !1), z = Ho(e), G = dg(e);
              break;
            case "millisecond":
              N = OC(t), z = Go(e), G = pg(e);
              break;
          }
          s(N, R, H, z, G, j, L), A === "year" && E.length > 1 && I === 0 && E.unshift({
            value: E[0].value - N
          });
        }
      }
      for (var I = 0; I < L.length; I++)
        E.push(L[I]);
      return L;
    }
  }
  for (var l = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < n; ++v) {
    var d = wi(a[v]);
    if (OS(a[v])) {
      u(a[v], l[l.length - 1] || [], f);
      var y = a[v + 1] ? wi(a[v + 1]) : null;
      if (d !== y) {
        if (f.length) {
          c = h, f.sort(function(A, T) {
            return A.value - T.value;
          });
          for (var p = [], g = 0; g < f.length; ++g) {
            var _ = f[g].value;
            (g === 0 || f[g - 1].value !== _) && (p.push(f[g]), _ >= i[0] && _ <= i[1] && h++);
          }
          var m = (i[1] - i[0]) / t;
          if (h > m * 1.5 && c > m / 1.5 || (l.push(p), h > m || r === a[v]))
            break;
        }
        f = [];
      }
    }
  }
  process.env.NODE_ENV !== "production" && o >= n && Mt("Exceed safe limit.");
  for (var w = St(W(l, function(A) {
    return St(A, function(T) {
      return T.value >= i[0] && T.value <= i[1] && !T.notAdd;
    });
  }), function(A) {
    return A.length > 0;
  }), S = [], x = w.length - 1, v = 0; v < w.length; ++v)
    for (var b = w[v], D = 0; D < b.length; ++D)
      S.push({
        value: b[D].value,
        level: x - v
      });
  S.sort(function(A, T) {
    return A.value - T.value;
  });
  for (var M = [], v = 0; v < S.length; ++v)
    (v === 0 || S[v].value !== S[v - 1].value) && M.push(S[v]);
  return M;
}
Ve.registerClass(zy);
const BC = zy;
var Sv = Ve.prototype, Ln = Qn.prototype, FC = yt, zC = Math.floor, VC = Math.ceil, Pa = Math.pow, he = Math.log, Df = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "log", e.base = 10, e._originalScale = new Qn(), e._interval = 0, e;
    }
    return t.prototype.getTicks = function(e) {
      var i = this._originalScale, n = this._extent, a = i.getExtent(), o = Ln.getTicks.call(this, e);
      return W(o, function(s) {
        var u = s.value, l = yt(Pa(this.base, u));
        return l = u === n[0] && this._fixMin ? Ia(l, a[0]) : l, l = u === n[1] && this._fixMax ? Ia(l, a[1]) : l, {
          value: l
        };
      }, this);
    }, t.prototype.setExtent = function(e, i) {
      var n = he(this.base);
      e = he(Math.max(0, e)) / n, i = he(Math.max(0, i)) / n, Ln.setExtent.call(this, e, i);
    }, t.prototype.getExtent = function() {
      var e = this.base, i = Sv.getExtent.call(this);
      i[0] = Pa(e, i[0]), i[1] = Pa(e, i[1]);
      var n = this._originalScale, a = n.getExtent();
      return this._fixMin && (i[0] = Ia(i[0], a[0])), this._fixMax && (i[1] = Ia(i[1], a[1])), i;
    }, t.prototype.unionExtent = function(e) {
      this._originalScale.unionExtent(e);
      var i = this.base;
      e[0] = he(e[0]) / he(i), e[1] = he(e[1]) / he(i), Sv.unionExtent.call(this, e);
    }, t.prototype.unionExtentFromData = function(e, i) {
      this.unionExtent(e.getApproximateExtent(i));
    }, t.prototype.calcNiceTicks = function(e) {
      e = e || 10;
      var i = this._extent, n = i[1] - i[0];
      if (!(n === 1 / 0 || n <= 0)) {
        var a = D0(n), o = e / n * a;
        for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
          a *= 10;
        var s = [yt(VC(i[0] / a) * a), yt(zC(i[1] / a) * a)];
        this._interval = a, this._niceExtent = s;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      Ln.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
    }, t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return e = he(e) / he(this.base), Ko(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return e = he(e) / he(this.base), Qo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = jo(e, this._extent), Pa(this.base, e);
    }, t.type = "log", t;
  }(Ve)
), Vy = Df.prototype;
Vy.getMinorTicks = Ln.getMinorTicks;
Vy.getLabel = Ln.getLabel;
function Ia(r, t) {
  return FC(r, Rn(t));
}
Ve.registerClass(Df);
const HC = Df;
var GC = (
  /** @class */
  function() {
    function r(t, e, i) {
      this._prepareParams(t, e, i);
    }
    return r.prototype._prepareParams = function(t, e, i) {
      i[1] < i[0] && (i = [NaN, NaN]), this._dataMin = i[0], this._dataMax = i[1];
      var n = this._isOrdinal = t.type === "ordinal";
      this._needCrossZero = t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
      var a = e.get("min", !0);
      a == null && (a = e.get("startValue", !0));
      var o = this._modelMinRaw = a;
      Y(o) ? this._modelMinNum = Ra(t, o({
        min: i[0],
        max: i[1]
      })) : o !== "dataMin" && (this._modelMinNum = Ra(t, o));
      var s = this._modelMaxRaw = e.get("max", !0);
      if (Y(s) ? this._modelMaxNum = Ra(t, s({
        min: i[0],
        max: i[1]
      })) : s !== "dataMax" && (this._modelMaxNum = Ra(t, s)), n)
        this._axisDataLen = e.getCategories().length;
      else {
        var u = e.get("boundaryGap"), l = k(u) ? u : [u || 0, u || 0];
        typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (process.env.NODE_ENV !== "production" && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Je(l[0], 1), Je(l[1], 1)];
      }
    }, r.prototype.calculate = function() {
      var t = this._isOrdinal, e = this._dataMin, i = this._dataMax, n = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : i - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, u = this._modelMaxRaw === "dataMax" ? i : this._modelMaxNum, l = s != null, f = u != null;
      s == null && (s = t ? n ? 0 : NaN : e - a[0] * o), u == null && (u = t ? n ? n - 1 : NaN : i + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN);
      var h = Pn(s) || Pn(u) || t && !n;
      this._needCrossZero && (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
      var c = this._determinedMin, v = this._determinedMax;
      return c != null && (s = c, l = !0), v != null && (u = v, f = !0), {
        min: s,
        max: u,
        minFixed: l,
        maxFixed: f,
        isBlank: h
      };
    }, r.prototype.modifyDataMinMax = function(t, e) {
      process.env.NODE_ENV !== "production" && Z(!this.frozen), this[UC[t]] = e;
    }, r.prototype.setDeterminedMinMax = function(t, e) {
      var i = WC[t];
      process.env.NODE_ENV !== "production" && Z(!this.frozen && this[i] == null), this[i] = e;
    }, r.prototype.freeze = function() {
      this.frozen = !0;
    }, r;
  }()
), WC = {
  min: "_determinedMin",
  max: "_determinedMax"
}, UC = {
  min: "_dataMin",
  max: "_dataMax"
};
function YC(r, t, e) {
  var i = r.rawExtentInfo;
  return i || (i = new GC(r, t, e), r.rawExtentInfo = i, i);
}
function Ra(r, t) {
  return t == null ? null : Pn(t) ? NaN : r.parse(t);
}
function Hy(r, t) {
  var e = r.type, i = YC(r, t, r.getExtent()).calculate();
  r.setBlank(i.isBlank);
  var n = i.min, a = i.max, o = t.ecModel;
  if (o && e === "time") {
    var s = Ny("bar", o), u = !1;
    if (C(s, function(h) {
      u = u || h.getBaseAxis() === t.axis;
    }), u) {
      var l = ky(s), f = $C(n, a, t, l);
      n = f.min, a = f.max;
    }
  }
  return {
    extent: [n, a],
    // "fix" means "fixed", the value should not be
    // changed in the subsequent steps.
    fixMin: i.minFixed,
    fixMax: i.maxFixed
  };
}
function $C(r, t, e, i) {
  var n = e.axis.getExtent(), a = Math.abs(n[1] - n[0]), o = CC(i, e.axis);
  if (o === void 0)
    return {
      min: r,
      max: t
    };
  var s = 1 / 0;
  C(o, function(v) {
    s = Math.min(v.offset, s);
  });
  var u = -1 / 0;
  C(o, function(v) {
    u = Math.max(v.offset + v.width, u);
  }), s = Math.abs(s), u = Math.abs(u);
  var l = s + u, f = t - r, h = 1 - (s + u) / a, c = f / h - f;
  return t += c * (u / l), r -= c * (s / l), {
    min: r,
    max: t
  };
}
function xv(r, t) {
  var e = t, i = Hy(r, e), n = i.extent, a = e.get("splitNumber");
  r instanceof HC && (r.base = e.get("logBase"));
  var o = r.type, s = e.get("interval"), u = o === "interval" || o === "time";
  r.setExtent(n[0], n[1]), r.calcNiceExtent({
    splitNumber: a,
    fixMin: i.fixMin,
    fixMax: i.fixMax,
    minInterval: u ? e.get("minInterval") : null,
    maxInterval: u ? e.get("maxInterval") : null
  }), s != null && r.setInterval && r.setInterval(s);
}
function XC(r, t) {
  if (t = t || r.get("type"), t)
    switch (t) {
      case "category":
        return new Iy({
          ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new BC({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC")
        });
      default:
        return new (Ve.getClass(t) || Qn)();
    }
}
function ZC(r) {
  var t = r.scale.getExtent(), e = t[0], i = t[1];
  return !(e > 0 && i > 0 || e < 0 && i < 0);
}
function zi(r) {
  var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
  return r.scale.type === "time" ? function(i) {
    return function(n, a) {
      return r.scale.getFormattedLabel(n, a, i);
    };
  }(t) : F(t) ? function(i) {
    return function(n) {
      var a = r.scale.getLabel(n), o = i.replace("{value}", a ?? "");
      return o;
    };
  }(t) : Y(t) ? function(i) {
    return function(n, a) {
      return e != null && (a = n.value - e), i(Mf(r, n), a, n.level != null ? {
        level: n.level
      } : null);
    };
  }(t) : function(i) {
    return r.scale.getLabel(i);
  };
}
function Mf(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function qC(r) {
  var t = r.model, e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var i, n, a = e.getExtent();
    e instanceof Iy ? n = e.count() : (i = e.getTicks(), n = i.length);
    var o = r.getLabelModel(), s = zi(r), u, l = 1;
    n > 40 && (l = Math.ceil(n / 40));
    for (var f = 0; f < n; f += l) {
      var h = i ? i[f] : {
        value: a[0] + f
      }, c = s(h, f), v = o.getTextRect(c), d = KC(v, o.get("rotate") || 0);
      u ? u.union(d) : u = d;
    }
    return u;
  }
}
function KC(r, t) {
  var e = t * Math.PI / 180, i = r.width, n = r.height, a = i * Math.abs(Math.cos(e)) + Math.abs(n * Math.sin(e)), o = i * Math.abs(Math.sin(e)) + Math.abs(n * Math.cos(e)), s = new rt(r.x, r.y, a, o);
  return s;
}
function Af(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function Gy(r) {
  return r.type === "category" && Af(r.getLabelModel()) === 0;
}
function QC(r, t) {
  var e = {};
  return C(r.mapDimensionsAll(t), function(i) {
    e[fC(r, i)] = !0;
  }), lt(e);
}
var jC = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getNeedCrossZero = function() {
      var t = this.option;
      return !t.scale;
    }, r.prototype.getCoordSysModel = function() {
    }, r;
  }()
), bv = [], JC = {
  registerPreprocessor: my,
  registerProcessor: wy,
  registerPostInit: OT,
  registerPostUpdate: NT,
  registerUpdateLifecycle: xf,
  registerAction: Fi,
  registerCoordinateSystem: kT,
  registerLayout: BT,
  registerVisual: Ur,
  registerTransform: zT,
  registerLoading: Sy,
  registerMap: FT,
  registerImpl: dT,
  PRIORITY: MT,
  ComponentModel: ut,
  ComponentView: er,
  SeriesModel: Li,
  ChartView: xi,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    ut.registerClass(r);
  },
  registerComponentView: function(r) {
    er.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Li.registerClass(r);
  },
  registerChartView: function(r) {
    xi.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    ut.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    S0(r, t);
  }
};
function rr(r) {
  if (k(r)) {
    C(r, function(t) {
      rr(t);
    });
    return;
  }
  it(bv, r) >= 0 || (bv.push(r), Y(r) && (r = {
    install: r
  }), r.install(JC));
}
var Wn = pt();
function Wy(r, t) {
  var e = W(t, function(i) {
    return r.scale.parse(i);
  });
  return r.type === "time" && e.length > 0 && (e.sort(), e.unshift(e[0]), e.push(e[e.length - 1])), e;
}
function tD(r) {
  var t = r.getLabelModel().get("customValues");
  if (t) {
    var e = zi(r), i = r.scale.getExtent(), n = Wy(r, t), a = St(n, function(o) {
      return o >= i[0] && o <= i[1];
    });
    return {
      labels: W(a, function(o) {
        var s = {
          value: o
        };
        return {
          formattedLabel: e(s),
          rawLabel: r.scale.getLabel(s),
          tickValue: o
        };
      })
    };
  }
  return r.type === "category" ? rD(r) : nD(r);
}
function eD(r, t) {
  var e = r.getTickModel().get("customValues");
  if (e) {
    var i = r.scale.getExtent(), n = Wy(r, e);
    return {
      ticks: St(n, function(a) {
        return a >= i[0] && a <= i[1];
      })
    };
  }
  return r.type === "category" ? iD(r, t) : {
    ticks: W(r.scale.getTicks(), function(a) {
      return a.value;
    })
  };
}
function rD(r) {
  var t = r.getLabelModel(), e = Uy(r, t);
  return !t.get("show") || r.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: e.labelCategoryInterval
  } : e;
}
function Uy(r, t) {
  var e = Yy(r, "labels"), i = Af(t), n = $y(e, i);
  if (n)
    return n;
  var a, o;
  return Y(i) ? a = qy(r, i) : (o = i === "auto" ? aD(r) : i, a = Zy(r, o)), Xy(e, i, {
    labels: a,
    labelCategoryInterval: o
  });
}
function iD(r, t) {
  var e = Yy(r, "ticks"), i = Af(t), n = $y(e, i);
  if (n)
    return n;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), Y(i))
    a = qy(r, i, !0);
  else if (i === "auto") {
    var s = Uy(r, r.getLabelModel());
    o = s.labelCategoryInterval, a = W(s.labels, function(u) {
      return u.tickValue;
    });
  } else
    o = i, a = Zy(r, o, !0);
  return Xy(e, i, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function nD(r) {
  var t = r.scale.getTicks(), e = zi(r);
  return {
    labels: W(t, function(i, n) {
      return {
        level: i.level,
        formattedLabel: e(i, n),
        rawLabel: r.scale.getLabel(i),
        tickValue: i.value
      };
    })
  };
}
function Yy(r, t) {
  return Wn(r)[t] || (Wn(r)[t] = []);
}
function $y(r, t) {
  for (var e = 0; e < r.length; e++)
    if (r[e].key === t)
      return r[e].value;
}
function Xy(r, t, e) {
  return r.push({
    key: t,
    value: e
  }), e;
}
function aD(r) {
  var t = Wn(r).autoInterval;
  return t ?? (Wn(r).autoInterval = r.calculateCategoryInterval());
}
function oD(r) {
  var t = sD(r), e = zi(r), i = (t.axisRotate - t.labelRotate) / 180 * Math.PI, n = r.scale, a = n.getExtent(), o = n.count();
  if (a[1] - a[0] < 1)
    return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (var u = a[0], l = r.dataToCoord(u + 1) - r.dataToCoord(u), f = Math.abs(l * Math.cos(i)), h = Math.abs(l * Math.sin(i)), c = 0, v = 0; u <= a[1]; u += s) {
    var d = 0, y = 0, p = Fl(e({
      value: u
    }), t.font, "center", "top");
    d = p.width * 1.3, y = p.height * 1.3, c = Math.max(c, d, 7), v = Math.max(v, y, 7);
  }
  var g = c / f, _ = v / h;
  isNaN(g) && (g = 1 / 0), isNaN(_) && (_ = 1 / 0);
  var m = Math.max(0, Math.floor(Math.min(g, _))), w = Wn(r.model), S = r.getExtent(), x = w.lastAutoInterval, b = w.lastTickCount;
  return x != null && b != null && Math.abs(x - m) <= 1 && Math.abs(b - o) <= 1 && x > m && w.axisExtent0 === S[0] && w.axisExtent1 === S[1] ? m = x : (w.lastTickCount = o, w.lastAutoInterval = m, w.axisExtent0 = S[0], w.axisExtent1 = S[1]), m;
}
function sD(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function Zy(r, t, e) {
  var i = zi(r), n = r.scale, a = n.getExtent(), o = r.getLabelModel(), s = [], u = Math.max((t || 0) + 1, 1), l = a[0], f = n.count();
  l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
  var h = Gy(r), c = o.get("showMinLabel") || h, v = o.get("showMaxLabel") || h;
  c && l !== a[0] && y(a[0]);
  for (var d = l; d <= a[1]; d += u)
    y(d);
  v && d - u !== a[1] && y(a[1]);
  function y(p) {
    var g = {
      value: p
    };
    s.push(e ? p : {
      formattedLabel: i(g),
      rawLabel: n.getLabel(g),
      tickValue: p
    });
  }
  return s;
}
function qy(r, t, e) {
  var i = r.scale, n = zi(r), a = [];
  return C(i.getTicks(), function(o) {
    var s = i.getLabel(o), u = o.value;
    t(o.value, s) && a.push(e ? u : {
      formattedLabel: n(o),
      rawLabel: s,
      tickValue: u
    });
  }), a;
}
var Tv = [0, 1], uD = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = i || [0, 0];
    }
    return r.prototype.contain = function(t) {
      var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
      return t >= i && t <= n;
    }, r.prototype.containData = function(t) {
      return this.scale.contain(t);
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.getPixelPrecision = function(t) {
      return b0(t || this.scale.getExtent(), this._extent);
    }, r.prototype.setExtent = function(t, e) {
      var i = this._extent;
      i[0] = t, i[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var i = this._extent, n = this.scale;
      return t = n.normalize(t), this.onBand && n.type === "ordinal" && (i = i.slice(), Cv(i, n.count())), yh(t, Tv, i, e);
    }, r.prototype.coordToData = function(t, e) {
      var i = this._extent, n = this.scale;
      this.onBand && n.type === "ordinal" && (i = i.slice(), Cv(i, n.count()));
      var a = yh(t, i, Tv, e);
      return this.scale.scale(a);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), i = eD(this, e), n = i.ticks, a = W(n, function(s) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
          tickValue: s
        };
      }, this), o = e.get("alignWithLabel");
      return lD(this, a, o, t.clamp), a;
    }, r.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal")
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var i = this.scale.getMinorTicks(e), n = W(i, function(a) {
        return W(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return n;
    }, r.prototype.getViewLabels = function() {
      return tD(this).labels;
    }, r.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, r.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, r.prototype.getBandWidth = function() {
      var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
      i === 0 && (i = 1);
      var n = Math.abs(t[1] - t[0]);
      return Math.abs(n) / i;
    }, r.prototype.calculateCategoryInterval = function() {
      return oD(this);
    }, r;
  }()
);
function Cv(r, t) {
  var e = r[1] - r[0], i = t, n = e / i / 2;
  r[0] += n, r[1] -= n;
}
function lD(r, t, e, i) {
  var n = t.length;
  if (!r.onBand || e || !n)
    return;
  var a = r.getExtent(), o, s;
  if (n === 1)
    t[0].coord = a[0], o = t[1] = {
      coord: a[1],
      tickValue: t[0].tickValue
    };
  else {
    var u = t[n - 1].tickValue - t[0].tickValue, l = (t[n - 1].coord - t[0].coord) / u;
    C(t, function(v) {
      v.coord -= l / 2;
    });
    var f = r.scale.getExtent();
    s = 1 + f[1] - t[n - 1].tickValue, o = {
      coord: t[n - 1].coord + l * s,
      tickValue: f[1] + 1
    }, t.push(o);
  }
  var h = a[0] > a[1];
  c(t[0].coord, a[0]) && (i ? t[0].coord = a[0] : t.shift()), i && c(a[0], t[0].coord) && t.unshift({
    coord: a[0]
  }), c(a[1], o.coord) && (i ? o.coord = a[1] : t.pop()), i && c(o.coord, a[1]) && t.push({
    coord: a[1]
  });
  function c(v, d) {
    return v = yt(v), d = yt(d), h ? v > d : v < d;
  }
}
const fD = uD;
function hD(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = n.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new ho(o, a) : null;
      t.push({
        label: n,
        labelLine: i.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: i.priority,
        defaultAttr: i.defaultAttr,
        layoutOption: i.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function cD(r) {
  var t = [];
  r.sort(function(y, p) {
    return p.priority - y.priority;
  });
  var e = new rt(0, 0, 0, 0);
  function i(y) {
    if (!y.ignore) {
      var p = y.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    y.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var a = r[n], o = a.axisAligned, s = a.localRect, u = a.transform, l = a.label, f = a.labelLine;
    e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
    for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
      var d = t[v];
      if (e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          c = !0;
          break;
        }
        if (d.obb || (d.obb = new ho(d.localRect, d.transform)), h || (h = new ho(s, u)), h.intersect(d.obb)) {
          c = !0;
          break;
        }
      }
    }
    c ? (i(l), f && i(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function Dv(r, t, e) {
  var i = Pi.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
var vD = function(r) {
  B(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || oo, typeof e == "string" ? o = Dv(e, i, n) : V(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (Dd(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = Dv("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new rt(0, 0, 0, 0);
    function f(_) {
      if (!(!_.isFinite() || _.isZero()))
        if (o.length === 0) {
          var m = new rt(0, 0, 0, 0);
          m.copy(_), o.push(m);
        } else {
          for (var w = !1, S = 1 / 0, x = 0, b = 0; b < o.length; ++b) {
            var D = o[b];
            if (D.intersect(_)) {
              var M = new rt(0, 0, 0, 0);
              M.copy(D), M.union(_), o[b] = M, w = !0;
              break;
            } else if (u) {
              l.copy(_), l.union(D);
              var A = _.width * _.height, T = D.width * D.height, E = l.width * l.height, L = E - A - T;
              L < S && (S = L, x = b);
            }
          }
          if (u && (o[x].union(_), w = !0), !w) {
            var m = new rt(0, 0, 0, 0);
            m.copy(_), o.push(m);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var c = e[h];
      if (c) {
        var v = c.shouldBePainted(n, a, !0, !0), d = c.__isRendered && (c.__dirty & Xt || !v) ? c.getPrevPaintRect() : null;
        d && f(d);
        var y = v && (c.__dirty & Xt || !c.__isRendered) ? c.getPaintRect() : null;
        y && f(y);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var c = i[h], v = c && c.shouldBePainted(n, a, !0, !0);
      if (c && (!v || !c.__zr) && c.__isRendered) {
        var d = c.getPrevPaintRect();
        d && f(d);
      }
    }
    var p;
    do {
      p = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var g = h + 1; g < o.length; )
          o[h].intersect(o[g]) ? (p = !0, o[h].union(o[g]), o.splice(g, 1)) : g++;
        h++;
      }
    } while (p);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, i) {
    var n = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = i + "px"), a.width = e * n, a.height = i * n, s && (s.width = e * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n));
  }, t.prototype.clear = function(e, i, n) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    i = i || this.clearColor;
    var l = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, c = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var v = this.domBack;
    function d(y, p, g, _) {
      if (o.clearRect(y, p, g, _), i && i !== "transparent") {
        var m = void 0;
        if (Mo(i)) {
          var w = i.global || i.__width === g && i.__height === _;
          m = w && i.__canvasGradient || sl(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: _
          }), i.__canvasGradient = m, i.__width = g, i.__height = _;
        } else
          Y_(i) && (i.scaleX = i.scaleX || h, i.scaleY = i.scaleY || h, m = ul(o, i, {
            dirty: function() {
              c.setUnpainted(), c.painter.refresh();
            }
          }));
        o.save(), o.fillStyle = m || i, o.fillRect(y, p, g, _), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, y, p, g, _), o.restore());
    }
    !n || l ? d(0, 0, s, u) : n.length && C(n, function(y) {
      d(y.x * h, y.y * h, y.width * h, y.height * h);
    });
  }, t;
}(Ae);
const su = vD;
var Mv = 1e5, Mr = 314159, Oa = 0.01, dD = 1e-3;
function pD(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function gD(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
var yD = function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || oo, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (Dd(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, c = f.height;
      i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
      var v = new su(f, this, this.dpr);
      v.__builtin__ = !0, v.initContext(), u[Mr] = v, v.zlevel = Mr, s.push(Mr), this._domRoot = t;
    } else {
      this._width = Da(t, 0, i), this._height = Da(t, 1, i);
      var l = this._domRoot = gD(this._width, this._height);
      t.appendChild(l);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e = this.storage.getDisplayList(!0), i = this._prevDisplayList, n = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e, i, t, this._redrawId);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var u = a === 0 ? this._backgroundColor : null;
        s.refresh(u);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
  }, r.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, r.prototype._paintHoverList = function(t) {
    var e = t.length, i = this._hoverlayer;
    if (i && i.clear(), !!e) {
      for (var n = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, a, o = 0; o < e; o++) {
        var s = t[o];
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(Mv)), a || (a = i.ctx, a.save()), Ir(a, s, n, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(Mv);
  }, r.prototype.paintOne = function(t, e) {
    iy(t, e);
  }, r.prototype._paintList = function(t, e, i, n) {
    if (this._redrawId === n) {
      i = i || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, e, i), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(l) {
          l.afterBrush && l.afterBrush();
        });
      else {
        var u = this;
        Mu(function() {
          u._paintList(t, e, i, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(Mr).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, e, i);
    });
  }, r.prototype._doPaintList = function(t, e, i) {
    for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var u = this._zlevelList[s], l = this._layers[u];
      l.__builtin__ && l !== this._hoverlayer && (l.__dirty || i) && a.push(l);
    }
    for (var f = !0, h = !1, c = function(y) {
      var p = a[y], g = p.ctx, _ = o && p.createRepaintRects(t, e, v._width, v._height), m = i ? p.__startIndex : p.__drawIndex, w = !i && p.incremental && Date.now, S = w && Date.now(), x = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, x, _);
      else if (m === p.__startIndex) {
        var b = t[m];
        (!b.incremental || !b.notClear || i) && p.clear(!1, x, _);
      }
      m === -1 && (console.error("For some unknown reason. drawIndex is -1"), m = p.__startIndex);
      var D, M = function(L) {
        var P = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: n._width,
          viewHeight: n._height
        };
        for (D = m; D < p.__endIndex; D++) {
          var I = t[D];
          if (I.__inHover && (h = !0), n._doPaintEl(I, p, o, L, P, D === p.__endIndex - 1), w) {
            var R = Date.now() - S;
            if (R > 15)
              break;
          }
        }
        P.prevElClipPaths && g.restore();
      };
      if (_)
        if (_.length === 0)
          D = p.__endIndex;
        else
          for (var A = v.dpr, T = 0; T < _.length; ++T) {
            var E = _[T];
            g.save(), g.beginPath(), g.rect(E.x * A, E.y * A, E.width * A, E.height * A), g.clip(), M(E), g.restore();
          }
      else
        g.save(), M(), g.restore();
      p.__drawIndex = D, p.__drawIndex < p.__endIndex && (f = !1);
    }, v = this, d = 0; d < a.length; d++)
      c(d);
    return $.wxa && C(this._layers, function(y) {
      y && y.ctx && y.ctx.draw && y.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, i, n, a, o) {
    var s = e.ctx;
    if (i) {
      var u = t.getPaintRect();
      (!n || u && u.intersect(n)) && (Ir(s, t, a, o), t.setPrevPaintRect(u));
    } else
      Ir(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = Mr);
    var i = this._layers[t];
    return i || (i = new su("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? et(i, this._layerConfig[t], !0) : this._layerConfig[t - Oa] && et(i, this._layerConfig[t - Oa], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, u = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && Rr("ZLevel " + t + " has been used already");
      return;
    }
    if (!pD(e)) {
      process.env.NODE_ENV !== "production" && Rr("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > n[0]) {
      for (u = 0; u < a - 1 && !(n[u] < t && n[u + 1] > t); u++)
        ;
      s = i[n[u]];
    }
    if (n.splice(u + 1, 0, t), i[t] = e, !e.virtual)
      if (s) {
        var l = s.dom;
        l.nextSibling ? o.insertBefore(e.dom, l.nextSibling) : o.appendChild(e.dom);
      } else
        o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, r.prototype.eachLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n];
      t.call(e, this._layers[a], a);
    }
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ && t.call(e, o, a);
    }
  }, r.prototype.eachOtherLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ || t.call(e, o, a);
    }
  }, r.prototype.getLayers = function() {
    return this._layers;
  }, r.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(h, c) {
      h.__dirty = h.__used = !1;
    });
    function e(h) {
      a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var n = t[i];
        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var a = null, o = 0, s, u;
    for (u = 0; u < t.length; u++) {
      var n = t[u], l = n.zlevel, f = void 0;
      s !== l && (s = l, o = 0), n.incremental ? (f = this.getLayer(l + dD, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? Oa : 0), this._needsManuallyCompositing), f.__builtin__ || Rr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, e(u), a = f), n.__dirty & Xt && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
    }
    e(u), this.eachBuiltinLayer(function(h, c) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, C(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? et(i[t], e, !0) : i[t] = e;
      for (var n = 0; n < this._zlevelList.length; n++) {
        var a = this._zlevelList[n];
        if (a === t || a === t + Oa) {
          var o = this._layers[a];
          et(o, i[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, i = this._zlevelList, n = e[t];
    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(it(i, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      if (t != null && (n.width = t), e != null && (n.height = e), t = Da(a, 0, n), e = Da(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
        i.style.width = t + "px", i.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(Mr).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[Mr].dom;
    var e = new su("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var i = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var n = e.dom.width, a = e.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? i.drawImage(h.dom, 0, 0, n, a) : h.renderToCanvas && (i.save(), h.renderToCanvas(i), i.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        Ir(i, f, o, u === l - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
const _D = yD;
function mD(r) {
  r.registerPainter("canvas", _D);
}
function wD(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), i = e.length;
  if (i === 1) {
    var n = Ei(r, t, e[0]);
    return n != null ? n + "" : null;
  } else if (i) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(Ei(r, t, e[o]));
    return a.join(" ");
  }
}
function SD(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!k(t))
    return t + "";
  for (var i = [], n = 0; n < e.length; n++) {
    var a = r.getDimensionIndex(e[n]);
    a >= 0 && i.push(t[a]);
  }
  return i.join(" ");
}
function xD(r, t, e, i, n) {
  var a = r.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new _t({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (t) {
    var c = r.getBaseAxis(), v = c.isHorizontal(), d = c.inverse;
    v ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var y = Y(n) ? function(p) {
      n(p, h);
    } : null;
    Gr(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, e, null, i, y);
  }
  return h;
}
function bD(r, t, e) {
  var i = r.getArea(), n = yt(i.r0, 1), a = yt(i.r, 1), o = new Kn({
    shape: {
      cx: yt(r.cx, 1),
      cy: yt(r.cy, 1),
      r0: n,
      r: a,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = i.startAngle : o.shape.r = n, Gr(o, {
      shape: {
        endAngle: i.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function TD(r, t, e, i, n) {
  if (r) {
    if (r.type === "polar")
      return bD(r, t, e);
    if (r.type === "cartesian2d")
      return xD(r, t, e, i, n);
  } else
    return null;
  return null;
}
function Ky(r, t) {
  return r.type === t;
}
var CD = {
  average: function(r) {
    for (var t = 0, e = 0, i = 0; i < r.length; i++)
      isNaN(r[i]) || (t += r[i], e++);
    return e === 0 ? NaN : t / e;
  },
  sum: function(r) {
    for (var t = 0, e = 0; e < r.length; e++)
      t += r[e] || 0;
    return t;
  },
  max: function(r) {
    for (var t = -1 / 0, e = 0; e < r.length; e++)
      r[e] > t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  min: function(r) {
    for (var t = 1 / 0, e = 0; e < r.length; e++)
      r[e] < t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  // TODO
  // Median
  nearest: function(r) {
    return r[0];
  }
}, DD = function(r) {
  return Math.round(r.length / 2);
};
function MD(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, i) {
      var n = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = n.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = i.getDevicePixelRatio(), c = Math.abs(f[1] - f[0]) * (h || 1), v = Math.round(s / c);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? t.setData(n.lttbDownSample(n.mapDimension(l.dim), 1 / v)) : a === "minmax" && t.setData(n.minmaxDownSample(n.mapDimension(l.dim), 1 / v));
          var d = void 0;
          F(a) ? d = CD[a] : Y(a) && (d = a), d && t.setData(n.downSample(n.mapDimension(l.dim), 1 / v, d, DD));
        }
      }
    }
  };
}
var Qy = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, i) {
      return Ay(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(e, i, n) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(e), s = a.dataToPoint(o);
        if (n)
          C(a.getAxes(), function(c, v) {
            if (c.type === "category" && i != null) {
              var d = c.getTicksCoords(), y = c.getTickModel().get("alignWithLabel"), p = o[v], g = i[v] === "x1" || i[v] === "y1";
              if (g && !y && (p += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[v] = c.toGlobalCoord(c.getExtent()[g ? 1 : 0]);
                return;
              }
              for (var _ = void 0, m = void 0, w = 1, S = 0; S < d.length; S++) {
                var x = d[S].coord, b = S === d.length - 1 ? d[S - 1].tickValue + w : d[S].tickValue;
                if (b === p) {
                  m = x;
                  break;
                } else if (b < p)
                  _ = x;
                else if (_ != null && b > p) {
                  m = (x + _) / 2;
                  break;
                }
                S === 1 && (w = b - d[0].tickValue);
              }
              m == null && (_ ? _ && (m = d[d.length - 1].coord) : m = d[0].coord), s[v] = c.toGlobalCoord(m);
            }
          });
        else {
          var u = this.getData(), l = u.getLayout("offset"), f = u.getLayout("size"), h = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[h] += l + f / 2;
        }
        return s;
      }
      return [NaN, NaN];
    }, t.type = "series.__base_bar__", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod"
    }, t;
  }(Li)
);
Li.registerClass(Qy);
const Av = Qy;
var AD = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function() {
      return Ay(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, t.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, t.prototype.getProgressiveThreshold = function() {
      var e = this.get("progressiveThreshold"), i = this.get("largeThreshold");
      return i > e && (e = i), e;
    }, t.prototype.brushSelector = function(e, i, n) {
      return n.rect(i.getItemLayout(e));
    }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = ag(Av.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      },
      realtimeSort: !1
    }), t;
  }(Av)
);
const ED = AD;
var LD = (
  /** @class */
  function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  }()
), PD = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "sausage", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new LD();
    }, t.prototype.buildPath = function(e, i) {
      var n = i.cx, a = i.cy, o = Math.max(i.r0 || 0, 0), s = Math.max(i.r, 0), u = (s - o) * 0.5, l = o + u, f = i.startAngle, h = i.endAngle, c = i.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
      d || (f = h - (c ? v : -v));
      var y = Math.cos(f), p = Math.sin(f), g = Math.cos(h), _ = Math.sin(h);
      d ? (e.moveTo(y * o + n, p * o + a), e.arc(y * l + n, p * l + a, u, -Math.PI + f, f, !c)) : e.moveTo(y * s + n, p * s + a), e.arc(n, a, s, f, h, !c), e.arc(g * l + n, _ * l + a, u, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && e.arc(n, a, o, h, f, c);
    }, t;
  }(ot)
);
const Ev = PD;
function ID(r, t) {
  t = t || {};
  var e = t.isRoundCap;
  return function(i, n, a) {
    var o = n.position;
    if (!o || o instanceof Array)
      return so(i, n, a);
    var s = r(o), u = n.distance != null ? n.distance : 5, l = this.shape, f = l.cx, h = l.cy, c = l.r, v = l.r0, d = (c + v) / 2, y = l.startAngle, p = l.endAngle, g = (y + p) / 2, _ = e ? Math.abs(c - v) / 2 : 0, m = Math.cos, w = Math.sin, S = f + c * m(y), x = h + c * w(y), b = "left", D = "top";
    switch (s) {
      case "startArc":
        S = f + (v - u) * m(g), x = h + (v - u) * w(g), b = "center", D = "top";
        break;
      case "insideStartArc":
        S = f + (v + u) * m(g), x = h + (v + u) * w(g), b = "center", D = "bottom";
        break;
      case "startAngle":
        S = f + d * m(y) + Na(y, u + _, !1), x = h + d * w(y) + ka(y, u + _, !1), b = "right", D = "middle";
        break;
      case "insideStartAngle":
        S = f + d * m(y) + Na(y, -u + _, !1), x = h + d * w(y) + ka(y, -u + _, !1), b = "left", D = "middle";
        break;
      case "middle":
        S = f + d * m(g), x = h + d * w(g), b = "center", D = "middle";
        break;
      case "endArc":
        S = f + (c + u) * m(g), x = h + (c + u) * w(g), b = "center", D = "bottom";
        break;
      case "insideEndArc":
        S = f + (c - u) * m(g), x = h + (c - u) * w(g), b = "center", D = "top";
        break;
      case "endAngle":
        S = f + d * m(p) + Na(p, u + _, !0), x = h + d * w(p) + ka(p, u + _, !0), b = "left", D = "middle";
        break;
      case "insideEndAngle":
        S = f + d * m(p) + Na(p, -u + _, !0), x = h + d * w(p) + ka(p, -u + _, !0), b = "right", D = "middle";
        break;
      default:
        return so(i, n, a);
    }
    return i = i || {}, i.x = S, i.y = x, i.align = b, i.verticalAlign = D, i;
  };
}
function RD(r, t, e, i) {
  if (ht(i)) {
    r.setTextConfig({
      rotation: i
    });
    return;
  } else if (k(t)) {
    r.setTextConfig({
      rotation: 0
    });
    return;
  }
  var n = r.shape, a = n.clockwise ? n.startAngle : n.endAngle, o = n.clockwise ? n.endAngle : n.startAngle, s = (a + o) / 2, u, l = e(t);
  switch (l) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      u = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      u = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      u = o;
      break;
    default:
      r.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - u;
  l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), r.setTextConfig({
    rotation: f
  });
}
function Na(r, t, e) {
  return t * Math.sin(r) * (e ? -1 : 1);
}
function ka(r, t, e) {
  return t * Math.cos(r) * (e ? 1 : -1);
}
function OD(r, t, e) {
  var i = r.get("borderRadius");
  if (i == null)
    return e ? {
      cornerRadius: 0
    } : null;
  k(i) || (i = [i, i, i, i]);
  var n = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: W(i, function(a) {
      return Je(a, n);
    })
  };
}
var uu = Math.max, lu = Math.min;
function ND(r, t) {
  var e = r.getArea && r.getArea();
  if (Ky(r, "cartesian2d")) {
    var i = r.getBaseAxis();
    if (i.type !== "category" || !i.onBand) {
      var n = t.getLayout("bandWidth");
      i.isHorizontal() ? (e.x -= n, e.width += n * 2) : (e.y -= n, e.height += n * 2);
    }
  }
  return e;
}
var kD = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r.call(this) || this;
      return e.type = t.type, e._isFirstFrame = !0, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this._model = e, this._removeOnRenderedListener(n), this._updateDrawMode(e);
      var o = e.get("coordinateSystem");
      o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, i, n) : this._renderNormal(e, i, n, a)) : process.env.NODE_ENV !== "production" && Mt("Only cartesian2d and polar supported for bar.");
    }, t.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, t.prototype.incrementalRender = function(e, i) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, i);
    }, t.prototype.eachRendered = function(e) {
      ef(this._progressiveEls || this.group, e);
    }, t.prototype._updateDrawMode = function(e) {
      var i = e.pipelineContext.large;
      (this._isLargeDraw == null || i !== this._isLargeDraw) && (this._isLargeDraw = i, this._clear());
    }, t.prototype._renderNormal = function(e, i, n, a) {
      var o = this.group, s = e.getData(), u = this._data, l = e.coordinateSystem, f = l.getBaseAxis(), h;
      l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
      var c = e.isAnimationEnabled() ? e : null, v = BD(e, l);
      v && this._enableRealtimeSort(v, s, n);
      var d = e.get("clip", !0) || v, y = ND(l, s);
      o.removeClipPath();
      var p = e.get("roundCap", !0), g = e.get("showBackground", !0), _ = e.getModel("backgroundStyle"), m = _.get("borderRadius") || 0, w = [], S = this._backgroundEls, x = a && a.isInitSort, b = a && a.type === "changeAxisOrder";
      function D(T) {
        var E = Ba[l.type](s, T), L = UD(l, h, E);
        return L.useStyle(_.getItemStyle()), l.type === "cartesian2d" ? L.setShape("r", m) : L.setShape("cornerRadius", m), w[T] = L, L;
      }
      s.diff(u).add(function(T) {
        var E = s.getItemModel(T), L = Ba[l.type](s, T, E);
        if (g && D(T), !(!s.hasValue(T) || !Ov[l.type](L))) {
          var P = !1;
          d && (P = Lv[l.type](y, L));
          var I = Pv[l.type](e, s, T, L, h, c, f.model, !1, p);
          v && (I.forceLabelAnimation = !0), Nv(I, s, T, E, L, e, h, l.type === "polar"), x ? I.attr({
            shape: L
          }) : v ? Iv(v, c, I, L, T, h, !1, !1) : Gr(I, {
            shape: L
          }, e, T), s.setItemGraphicEl(T, I), o.add(I), I.ignore = P;
        }
      }).update(function(T, E) {
        var L = s.getItemModel(T), P = Ba[l.type](s, T, L);
        if (g) {
          var I = void 0;
          S.length === 0 ? I = D(E) : (I = S[E], I.useStyle(_.getItemStyle()), l.type === "cartesian2d" ? I.setShape("r", m) : I.setShape("cornerRadius", m), w[T] = I);
          var R = Ba[l.type](s, T), H = Jy(h, R, l);
          Be(I, {
            shape: H
          }, c, T);
        }
        var N = u.getItemGraphicEl(E);
        if (!s.hasValue(T) || !Ov[l.type](P)) {
          o.remove(N);
          return;
        }
        var z = !1;
        if (d && (z = Lv[l.type](y, P), z && o.remove(N)), N ? Qw(N) : N = Pv[l.type](e, s, T, P, h, c, f.model, !!N, p), v && (N.forceLabelAnimation = !0), b) {
          var G = N.getTextContent();
          if (G) {
            var j = rf(G);
            j.prevValue != null && (j.prevValue = j.value);
          }
        } else
          Nv(N, s, T, L, P, e, h, l.type === "polar");
        x ? N.attr({
          shape: P
        }) : v ? Iv(v, c, N, P, T, h, !0, b) : Be(N, {
          shape: P
        }, e, T, null), s.setItemGraphicEl(T, N), N.ignore = z, o.add(N);
      }).remove(function(T) {
        var E = u.getItemGraphicEl(T);
        E && qu(E, e, T);
      }).execute();
      var M = this._backgroundGroup || (this._backgroundGroup = new se());
      M.removeAll();
      for (var A = 0; A < w.length; ++A)
        M.add(w[A]);
      o.add(M), this._backgroundEls = w, this._data = s;
    }, t.prototype._renderLarge = function(e, i, n) {
      this._clear(), Bv(e, this.group), this._updateLargeClip(e);
    }, t.prototype._incrementalRenderLarge = function(e, i) {
      this._removeBackground(), Bv(i, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(e) {
      var i = e.get("clip", !0) && TD(e.coordinateSystem, !1, e), n = this.group;
      i ? n.setClipPath(i) : n.removeClipPath();
    }, t.prototype._enableRealtimeSort = function(e, i, n) {
      var a = this;
      if (i.count()) {
        var o = e.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(i, e, n), this._isFirstFrame = !1;
        else {
          var s = function(u) {
            var l = i.getItemGraphicEl(u), f = l && l.shape;
            return f && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
          };
          this._onRendered = function() {
            a._updateSortWithinSameData(i, s, o, n);
          }, n.getZr().on("rendered", this._onRendered);
        }
      }
    }, t.prototype._dataSort = function(e, i, n) {
      var a = [];
      return e.each(e.mapDimension(i.dim), function(o, s) {
        var u = n(s);
        u = u ?? NaN, a.push({
          dataIndex: s,
          mappedValue: u,
          ordinalNumber: o
        });
      }), a.sort(function(o, s) {
        return s.mappedValue - o.mappedValue;
      }), {
        ordinalNumbers: W(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, t.prototype._isOrderChangedWithinSameData = function(e, i, n) {
      for (var a = n.scale, o = e.mapDimension(n.dim), s = Number.MAX_VALUE, u = 0, l = a.getOrdinalMeta().categories.length; u < l; ++u) {
        var f = e.rawIndexOf(o, a.getRawOrdinalNumber(u)), h = f < 0 ? Number.MIN_VALUE : i(e.indexOfRawIndex(f));
        if (h > s)
          return !0;
        s = h;
      }
      return !1;
    }, t.prototype._isOrderDifferentInView = function(e, i) {
      for (var n = i.scale, a = n.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], n.getOrdinalMeta().categories.length - 1); o <= s; ++o)
        if (e.ordinalNumbers[o] !== n.getRawOrdinalNumber(o))
          return !0;
    }, t.prototype._updateSortWithinSameData = function(e, i, n, a) {
      if (this._isOrderChangedWithinSameData(e, i, n)) {
        var o = this._dataSort(e, n, i);
        this._isOrderDifferentInView(o, n) && (this._removeOnRenderedListener(a), a.dispatchAction({
          type: "changeAxisOrder",
          componentType: n.dim + "Axis",
          axisId: n.index,
          sortInfo: o
        }));
      }
    }, t.prototype._dispatchInitSort = function(e, i, n) {
      var a = i.baseAxis, o = this._dataSort(e, a, function(s) {
        return e.get(e.mapDimension(i.otherAxis.dim), s);
      });
      n.dispatchAction({
        type: "changeAxisOrder",
        componentType: a.dim + "Axis",
        isInitSort: !0,
        axisId: a.index,
        sortInfo: o
      });
    }, t.prototype.remove = function(e, i) {
      this._clear(this._model), this._removeOnRenderedListener(i);
    }, t.prototype.dispose = function(e, i) {
      this._removeOnRenderedListener(i);
    }, t.prototype._removeOnRenderedListener = function(e) {
      this._onRendered && (e.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, t.prototype._clear = function(e) {
      var i = this.group, n = this._data;
      e && e.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(a) {
        qu(a, e, st(a).dataIndex);
      })) : i.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = "bar", t;
  }(xi)
), Lv = {
  cartesian2d: function(r, t) {
    var e = t.width < 0 ? -1 : 1, i = t.height < 0 ? -1 : 1;
    e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height);
    var n = r.x + r.width, a = r.y + r.height, o = uu(t.x, r.x), s = lu(t.x + t.width, n), u = uu(t.y, r.y), l = lu(t.y + t.height, a), f = s < o, h = l < u;
    return t.x = f && o > n ? s : o, t.y = h && u > a ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(r, t) {
    var e = t.r0 <= t.r ? 1 : -1;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    var n = lu(t.r, r.r), a = uu(t.r0, r.r0);
    t.r = n, t.r0 = a;
    var o = n - a < 0;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    return o;
  }
}, Pv = {
  cartesian2d: function(r, t, e, i, n, a, o, s, u) {
    var l = new _t({
      shape: O({}, i),
      z2: 1
    });
    if (l.__dataIndex = e, l.name = "item", a) {
      var f = l.shape, h = n ? "height" : "width";
      f[h] = 0;
    }
    return l;
  },
  polar: function(r, t, e, i, n, a, o, s, u) {
    var l = !n && u ? Ev : Kn, f = new l({
      shape: i,
      z2: 1
    });
    f.name = "item";
    var h = jy(n);
    if (f.calculateTextPosition = ID(h, {
      isRoundCap: l === Ev
    }), a) {
      var c = f.shape, v = n ? "r" : "endAngle", d = {};
      c[v] = n ? i.r0 : i.startAngle, d[v] = i[v], (s ? Be : Gr)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function BD(r, t) {
  var e = r.get("realtimeSort", !0), i = t.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && e && (i.type !== "category" && Mt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Mt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && i.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: i,
      otherAxis: t.getOtherAxis(i)
    };
}
function Iv(r, t, e, i, n, a, o, s) {
  var u, l;
  a ? (l = {
    x: i.x,
    width: i.width
  }, u = {
    y: i.y,
    height: i.height
  }) : (l = {
    y: i.y,
    height: i.height
  }, u = {
    x: i.x,
    width: i.width
  }), s || (o ? Be : Gr)(e, {
    shape: u
  }, t, n, null);
  var f = t ? r.baseAxis.model : null;
  (o ? Be : Gr)(e, {
    shape: l
  }, f, n);
}
function Rv(r, t) {
  for (var e = 0; e < t.length; e++)
    if (!isFinite(r[t[e]]))
      return !0;
  return !1;
}
var FD = ["x", "y", "width", "height"], zD = ["cx", "cy", "r", "startAngle", "endAngle"], Ov = {
  cartesian2d: function(r) {
    return !Rv(r, FD);
  },
  polar: function(r) {
    return !Rv(r, zD);
  }
}, Ba = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(r, t, e) {
    var i = r.getItemLayout(t), n = e ? HD(e, i) : 0, a = i.width > 0 ? 1 : -1, o = i.height > 0 ? 1 : -1;
    return {
      x: i.x + a * n / 2,
      y: i.y + o * n / 2,
      width: i.width - a * n,
      height: i.height - o * n
    };
  },
  polar: function(r, t, e) {
    var i = r.getItemLayout(t);
    return {
      cx: i.cx,
      cy: i.cy,
      r0: i.r0,
      r: i.r,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    };
  }
};
function VD(r) {
  return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
}
function jy(r) {
  return function(t) {
    var e = t ? "Arc" : "Angle";
    return function(i) {
      switch (i) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return i + e;
        default:
          return i;
      }
    };
  }(r);
}
function Nv(r, t, e, i, n, a, o, s) {
  var u = t.getItemVisual(e, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = r.shape, h = OD(i.getModel("itemStyle"), f, !0);
      O(f, h), r.setShape(f);
    }
  } else {
    var l = i.get(["itemStyle", "borderRadius"]) || 0;
    r.setShape("r", l);
  }
  r.useStyle(u);
  var c = i.getShallow("cursor");
  c && r.attr("cursor", c);
  var v = s ? o ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : o ? n.height >= 0 ? "bottom" : "top" : n.width >= 0 ? "right" : "left", d = dS(i);
  rg(r, d, {
    labelFetcher: a,
    labelDataIndex: e,
    defaultText: wD(a.getData(), e),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: v
  });
  var y = r.getTextContent();
  if (s && y) {
    var p = i.get(["label", "position"]);
    r.textConfig.inside = p === "middle" ? !0 : null, RD(r, p === "outside" ? v : p, jy(o), i.get(["label", "rotate"]));
  }
  _S(y, d, a.getRawValue(e), function(_) {
    return SD(t, _);
  });
  var g = i.getModel(["emphasis"]);
  uw(r, g.get("focus"), g.get("blurScope"), g.get("disabled")), hw(r, i), VD(n) && (r.style.fill = "none", r.style.stroke = "none", C(r.states, function(_) {
    _.style && (_.style.fill = _.style.stroke = "none");
  }));
}
function HD(r, t) {
  var e = r.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var i = r.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(i, n, a);
}
var GD = (
  /** @class */
  function() {
    function r() {
    }
    return r;
  }()
), kv = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "largeBar", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new GD();
    }, t.prototype.buildPath = function(e, i) {
      for (var n = i.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < n.length; f += 3)
        u[a] = l, u[o] = n[f + 2], s[a] = n[f + a], s[o] = n[f + o], e.rect(s[0], s[1], u[0], u[1]);
    }, t;
  }(ot)
);
function Bv(r, t, e, i) {
  var n = r.getData(), a = n.getLayout("valueAxisHorizontal") ? 1 : 0, o = n.getLayout("largeDataIndices"), s = n.getLayout("size"), u = r.getModel("backgroundStyle"), l = n.getLayout("largeBackgroundPoints");
  if (l) {
    var f = new kv({
      shape: {
        points: l
      },
      incremental: !!i,
      silent: !0,
      z2: 0
    });
    f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(u.getItemStyle()), t.add(f), e && e.push(f);
  }
  var h = new kv({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: !!i,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(n.getVisual("style")), h.style.stroke = null, st(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", Fv), h.on("mousemove", Fv)), e && e.push(h);
}
var Fv = Zo(function(r) {
  var t = this, e = WD(t, r.offsetX, r.offsetY);
  st(t).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function WD(r, t, e) {
  for (var i = r.baseDimIdx, n = 1 - i, a = r.shape.points, o = r.largeDataIndices, s = [], u = [], l = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var c = f * 3;
    if (u[i] = l, u[n] = a[c + 2], s[i] = a[c + i], s[n] = a[c + n], u[n] < 0 && (s[n] += u[n], u[n] = -u[n]), t >= s[0] && t <= s[0] + u[0] && e >= s[1] && e <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function Jy(r, t, e) {
  if (Ky(e, "cartesian2d")) {
    var i = t, n = e.getArea();
    return {
      x: r ? i.x : n.x,
      y: r ? n.y : i.y,
      width: r ? i.width : n.width,
      height: r ? n.height : i.height
    };
  } else {
    var n = e.getArea(), a = t;
    return {
      cx: n.cx,
      cy: n.cy,
      r0: r ? n.r0 : a.r0,
      r: r ? n.r : a.r,
      startAngle: r ? a.startAngle : 0,
      endAngle: r ? a.endAngle : Math.PI * 2
    };
  }
}
function UD(r, t, e) {
  var i = r.type === "polar" ? Kn : _t;
  return new i({
    shape: Jy(t, e, r),
    silent: !0,
    z2: 0
  });
}
const YD = kD;
function $D(r) {
  r.registerChartView(YD), r.registerSeriesModel(ED), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, dt(DC, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, MC("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, MD("bar")), r.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(t, e) {
    var i = t.componentType || "series";
    e.eachComponent({
      mainType: i,
      query: t
    }, function(n) {
      t.sortInfo && n.axis.setCategorySortInfo(t.sortInfo);
    });
  });
}
var XD = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      // If grid size contain label
      containLabel: !1,
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }, t;
  }(ut)
);
const ZD = XD;
var pl = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", pe).models[0];
    }, t.type = "cartesian2dAxis", t;
  }(ut)
);
Me(pl, jC);
var t_ = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {},
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: !0,
    onZeroAxisIndex: null,
    lineStyle: {
      color: "#6E7079",
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15]
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: ["#E0E6F1"],
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
    }
  }
}, qD = et({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, t_), Ef = et({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: "#F4F7FD",
      width: 1
    }
  }
}, t_), KD = et({
  splitNumber: 6,
  axisLabel: {
    // To eliminate labels that are not nice
    showMinLabel: !1,
    showMaxLabel: !1,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, Ef), QD = at({
  logBase: 10
}, Ef);
const jD = {
  category: qD,
  value: Ef,
  time: KD,
  log: QD
};
var JD = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function zv(r, t, e, i) {
  C(JD, function(n, a) {
    var o = et(et({}, jD[a], !0), i, !0), s = (
      /** @class */
      function(u) {
        B(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var c = Fn(this), v = c ? Uo(f) : {}, d = h.getTheme();
          et(f, d.get(a + "Axis")), et(f, this.getDefaultOption()), f.type = Vv(f), c && Ai(f, v, c);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = vl.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.type = t + "Axis." + a, l.defaultOption = o, l;
      }(e)
    );
    r.registerComponentModel(s);
  }), r.registerSubTypeDefaulter(t + "Axis", Vv);
}
function Vv(r) {
  return r.type || (r.data ? "category" : "value");
}
var tM = (
  /** @class */
  function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return W(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), St(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  }()
);
const eM = tM;
var gl = ["x", "y"];
function Hv(r) {
  return r.type === "interval" || r.type === "time";
}
var rM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "cartesian2d", e.dimensions = gl, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, i = this.getAxis("y").scale;
      if (!(!Hv(e) || !Hv(i))) {
        var n = e.getExtent(), a = i.getExtent(), o = this.dataToPoint([n[0], a[0]]), s = this.dataToPoint([n[1], a[1]]), u = n[1] - n[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, c = o[0] - n[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
          this._invTransform = Ol([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(e) {
      var i = this.getAxis("x"), n = this.getAxis("y");
      return i.contain(i.toLocalCoord(e[0])) && n.contain(n.toLocalCoord(e[1]));
    }, t.prototype.containData = function(e) {
      return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
    }, t.prototype.containZone = function(e, i) {
      var n = this.dataToPoint(e), a = this.dataToPoint(i), o = this.getArea(), s = new rt(n[0], n[1], a[0] - n[0], a[1] - n[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, i, n) {
      n = n || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return oe(n, e, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return n[0] = s.toGlobalCoord(s.dataToCoord(a, i)), n[1] = u.toGlobalCoord(u.dataToCoord(o, i)), n;
    }, t.prototype.clampData = function(e, i) {
      var n = this.getAxis("x").scale, a = this.getAxis("y").scale, o = n.getExtent(), s = a.getExtent(), u = n.parse(e[0]), l = a.parse(e[1]);
      return i = i || [], i[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), i[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), i;
    }, t.prototype.pointToData = function(e, i) {
      var n = [];
      if (this._invTransform)
        return oe(n, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return n[0] = a.coordToData(a.toLocalCoord(e[0]), i), n[1] = o.coordToData(o.toLocalCoord(e[1]), i), n;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var i = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), a = Math.min(i[0], i[1]) - e, o = Math.min(n[0], n[1]) - e, s = Math.max(i[0], i[1]) - a + e, u = Math.max(n[0], n[1]) - o + e;
      return new rt(a, o, s, u);
    }, t;
  }(eM)
), iM = (
  /** @class */
  function(r) {
    B(t, r);
    function t(e, i, n, a, o) {
      var s = r.call(this, e, i, n) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var e = this.position;
      return e === "top" || e === "bottom";
    }, t.prototype.getGlobalExtent = function(e) {
      var i = this.getExtent();
      return i[0] = this.toGlobalCoord(i[0]), i[1] = this.toGlobalCoord(i[1]), e && i[0] > i[1] && i.reverse(), i;
    }, t.prototype.pointToData = function(e, i) {
      return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), i);
    }, t.prototype.setCategorySortInfo = function(e) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
    }, t;
  }(fD)
);
const nM = iM;
function yl(r, t, e) {
  e = e || {};
  var i = r.coordinateSystem, n = t.axis, a = {}, o = n.getAxesOnZeroOf()[0], s = n.position, u = o ? "onZero" : s, l = n.dim, f = i.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], c = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, v = t.get("offset") || 0, d = l === "x" ? [h[2] - v, h[3] + v] : [h[0] - v, h[1] + v];
  if (o) {
    var y = o.toGlobalCoord(o.dataToCoord(0));
    d[c.onZero] = Math.max(Math.min(y, d[1]), d[0]);
  }
  a.position = [l === "y" ? d[c[u]] : h[0], l === "x" ? d[c[u]] : h[3]], a.rotation = Math.PI / 2 * (l === "x" ? 0 : 1);
  var p = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), zr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var g = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = u === "top" ? -g : g, a.z2 = 1, a;
}
function Gv(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function Wv(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return C(t, function(e, i) {
    var n = i.replace(/Model$/, ""), a = r.getReferringComponents(n, pe).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(n + ' "' + di(r.get(n + "Index"), r.get(n + "Id"), 0) + '" not found');
    t[i] = a;
  }), t;
}
var fu = Math.log;
function aM(r, t, e) {
  var i = Qn.prototype, n = i.getTicks.call(e), a = i.getTicks.call(e, !0), o = n.length - 1, s = i.getInterval.call(e), u = Hy(r, t), l = u.extent, f = u.fixMin, h = u.fixMax;
  if (r.type === "log") {
    var c = fu(r.base);
    l = [fu(l[0]) / c, fu(l[1]) / c];
  }
  r.setExtent(l[0], l[1]), r.calcNiceExtent({
    splitNumber: o,
    fixMin: f,
    fixMax: h
  });
  var v = i.getExtent.call(r);
  f && (l[0] = v[0]), h && (l[1] = v[1]);
  var d = i.getInterval.call(r), y = l[0], p = l[1];
  if (f && h)
    d = (p - y) / o;
  else if (f)
    for (p = l[0] + d * o; p < l[1] && isFinite(p) && isFinite(l[1]); )
      d = au(d), p = l[0] + d * o;
  else if (h)
    for (y = l[1] - d * o; y > l[0] && isFinite(y) && isFinite(l[0]); )
      d = au(d), y = l[1] - d * o;
  else {
    var g = r.getTicks().length - 1;
    g > o && (d = au(d));
    var _ = d * o;
    p = Math.ceil(l[1] / d) * d, y = yt(p - _), y < 0 && l[0] >= 0 ? (y = 0, p = yt(_)) : p > 0 && l[1] <= 0 && (p = 0, y = -yt(_));
  }
  var m = (n[0].value - a[0].value) / s, w = (n[o].value - a[o].value) / s;
  if (i.setExtent.call(r, y + d * m, p + d * w), i.setInterval.call(r, d), (m || w) && i.setNiceExtent.call(r, y + d, p - d), process.env.NODE_ENV !== "production") {
    var S = i.getTicks.call(r);
    S[1] && (!_C(d) || Bu(S[1].value) > Bu(d)) && Mt(
      // eslint-disable-next-line
      "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
    );
  }
}
var oM = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = gl, this._initCartesian(t, e, i), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var i = this._axesMap;
      this._updateScale(t, this.model);
      function n(o) {
        var s, u = lt(o), l = u.length;
        if (l) {
          for (var f = [], h = l - 1; h >= 0; h--) {
            var c = +u[h], v = o[c], d = v.model, y = v.scale;
            // Only value and log axis without interval support alignTicks.
            dl(y) && d.get("alignTicks") && d.get("interval") == null ? f.push(v) : (xv(y, d), dl(y) && (s = v));
          }
          f.length && (s || (s = f.pop(), xv(s.scale, s.model)), C(f, function(p) {
            aM(p.scale, p.model, s.scale);
          }));
        }
      }
      n(i.x), n(i.y);
      var a = {};
      C(i.x, function(o) {
        Uv(i, "y", o, a);
      }), C(i.y, function(o) {
        Uv(i, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, i) {
      var n = t.getBoxLayoutParams(), a = !i && t.get("containLabel"), o = go(n, {
        width: e.getWidth(),
        height: e.getHeight()
      });
      this._rect = o;
      var s = this._axesList;
      u(), a && (C(s, function(l) {
        if (!l.model.get(["axisLabel", "inside"])) {
          var f = qC(l);
          if (f) {
            var h = l.isHorizontal() ? "height" : "width", c = l.model.get(["axisLabel", "margin"]);
            o[h] -= f[h] + c, l.position === "top" ? o.y += f.height + c : l.position === "left" && (o.x += f.width + c);
          }
        }
      }), u()), C(this._coordsList, function(l) {
        l.calcAffineTransform();
      });
      function u() {
        C(s, function(l) {
          var f = l.isHorizontal(), h = f ? [0, o.width] : [0, o.height], c = l.inverse ? 1 : 0;
          l.setExtent(h[c], h[1 - c]), sM(l, f ? o.x : o.y);
        });
      }
    }, r.prototype.getAxis = function(t, e) {
      var i = this._axesMap[t];
      if (i != null)
        return i[e || 0];
    }, r.prototype.getAxes = function() {
      return this._axesList.slice();
    }, r.prototype.getCartesian = function(t, e) {
      if (t != null && e != null) {
        var i = "x" + t + "y" + e;
        return this._coordsMap[i];
      }
      V(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
      for (var n = 0, a = this._coordsList; n < a.length; n++)
        if (a[n].getAxis("x").index === t || a[n].getAxis("y").index === e)
          return a[n];
    }, r.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, r.prototype.convertToPixel = function(t, e, i) {
      var n = this._findConvertTarget(e);
      return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
    }, r.prototype.convertFromPixel = function(t, e, i) {
      var n = this._findConvertTarget(e);
      return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
    }, r.prototype._findConvertTarget = function(t) {
      var e = t.seriesModel, i = t.xAxisModel || e && e.getReferringComponents("xAxis", pe).models[0], n = t.yAxisModel || e && e.getReferringComponents("yAxis", pe).models[0], a = t.gridModel, o = this._coordsList, s, u;
      if (e)
        s = e.coordinateSystem, it(o, s) < 0 && (s = null);
      else if (i && n)
        s = this.getCartesian(i.componentIndex, n.componentIndex);
      else if (i)
        u = this.getAxis("x", i.componentIndex);
      else if (n)
        u = this.getAxis("y", n.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: u
      };
    }, r.prototype.containPoint = function(t) {
      var e = this._coordsList[0];
      if (e)
        return e.containPoint(t);
    }, r.prototype._initCartesian = function(t, e, i) {
      var n = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, u = {
        x: 0,
        y: 0
      };
      if (e.eachComponent("xAxis", l("x"), this), e.eachComponent("yAxis", l("y"), this), !u.x || !u.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, C(s.x, function(f, h) {
        C(s.y, function(c, v) {
          var d = "x" + h + "y" + v, y = new rM(d);
          y.master = n, y.model = t, n._coordsMap[d] = y, n._coordsList.push(y), y.addAxis(f), y.addAxis(c);
        });
      });
      function l(f) {
        return function(h, c) {
          if (hu(h, t)) {
            var v = h.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = new nM(f, XC(h), [0, 0], h.get("type"), v), y = d.type === "category";
            d.onBand = y && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = a, d.index = c, a._axesList.push(d), s[f][c] = d, u[f]++;
          }
        };
      }
    }, r.prototype._updateScale = function(t, e) {
      C(this._axesList, function(n) {
        if (n.scale.setExtent(1 / 0, -1 / 0), n.type === "category") {
          var a = n.model.get("categorySortInfo");
          n.scale.setSortInfo(a);
        }
      }), t.eachSeries(function(n) {
        if (Gv(n)) {
          var a = Wv(n), o = a.xAxisModel, s = a.yAxisModel;
          if (!hu(o, e) || !hu(s, e))
            return;
          var u = this.getCartesian(o.componentIndex, s.componentIndex), l = n.getData(), f = u.getAxis("x"), h = u.getAxis("y");
          i(l, f), i(l, h);
        }
      }, this);
      function i(n, a) {
        C(QC(n, a.dim), function(o) {
          a.scale.unionExtentFromData(n, o);
        });
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], i = [];
      return C(this.getCartesians(), function(n) {
        var a = t != null && t !== "auto" ? n.getAxis(t) : n.getBaseAxis(), o = n.getOtherAxis(a);
        it(e, a) < 0 && e.push(a), it(i, o) < 0 && i.push(o);
      }), {
        baseAxes: e,
        otherAxes: i
      };
    }, r.create = function(t, e) {
      var i = [];
      return t.eachComponent("grid", function(n, a) {
        var o = new r(n, t, e);
        o.name = "grid_" + a, o.resize(n, e, !0), n.coordinateSystem = o, i.push(o);
      }), t.eachSeries(function(n) {
        if (Gv(n)) {
          var a = Wv(n), o = a.xAxisModel, s = a.yAxisModel, u = o.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!u)
              throw new Error('Grid "' + di(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
            if (o.getCoordSysModel() !== s.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var l = u.coordinateSystem;
          n.coordinateSystem = l.getCartesian(o.componentIndex, s.componentIndex);
        }
      }), i;
    }, r.dimensions = gl, r;
  }()
);
function hu(r, t) {
  return r.getCoordSysModel() === t;
}
function Uv(r, t, e, i) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var n = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Yv(n[u]) && (a = n[u]);
  else
    for (var l in n)
      if (n.hasOwnProperty(l) && Yv(n[l]) && !i[f(n[l])]) {
        a = n[l];
        break;
      }
  a && (i[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Yv(r) {
  return r && r.type !== "category" && r.type !== "time" && ZC(r);
}
function sM(r, t) {
  var e = r.getExtent(), i = e[0] + e[1];
  r.toGlobalCoord = r.dim === "x" ? function(n) {
    return n + t;
  } : function(n) {
    return i - n + t;
  }, r.toLocalCoord = r.dim === "x" ? function(n) {
    return n - t;
  } : function(n) {
    return i - n + t;
  };
}
const uM = oM;
var Qe = Math.PI, Br = (
  /** @class */
  function() {
    function r(t, e) {
      this.group = new se(), this.opt = e, this.axisModel = t, at(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function() {
          return !0;
        }
      });
      var i = new se({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation
      });
      i.updateTransform(), this._transformGroup = i;
    }
    return r.prototype.hasBuilder = function(t) {
      return !!$v[t];
    }, r.prototype.add = function(t) {
      $v[t](this.opt, this.axisModel, this.group, this._transformGroup);
    }, r.prototype.getGroup = function() {
      return this.group;
    }, r.innerTextLayout = function(t, e, i) {
      var n = Qd(e - t), a, o;
      return uo(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : uo(n - Qe) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < Qe ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
        rotation: n,
        textAlign: a,
        textVerticalAlign: o
      };
    }, r.makeAxisEventDataBase = function(t) {
      var e = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return e[t.mainType + "Index"] = t.componentIndex, e;
    }, r.isLabelSilent = function(t) {
      var e = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, r;
  }()
), $v = {
  axisLine: function(r, t, e, i) {
    var n = t.get(["axisLine", "show"]);
    if (n === "auto" && r.handleAutoShown && (n = r.handleAutoShown("axisLine")), !!n) {
      var a = t.axis.getExtent(), o = i.transform, s = [a[0], 0], u = [a[1], 0], l = s[0] > u[0];
      o && (oe(s, s, o), oe(u, u, o));
      var f = O({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new Hr({
        shape: {
          x1: s[0],
          y1: s[1],
          x2: u[0],
          y2: u[1]
        },
        style: f,
        strokeContainThreshold: r.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      Nn(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
      var c = t.get(["axisLine", "symbol"]);
      if (c != null) {
        var v = t.get(["axisLine", "symbolSize"]);
        F(c) && (c = [c, c]), (F(v) || ht(v)) && (v = [v, v]);
        var d = Kb(t.get(["axisLine", "symbolOffset"]) || 0, v), y = v[0], p = v[1];
        C([{
          rotate: r.rotation + Math.PI / 2,
          offset: d[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: d[1],
          r: Math.sqrt((s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1]))
        }], function(g, _) {
          if (c[_] !== "none" && c[_] != null) {
            var m = _f(c[_], -y / 2, -p / 2, y, p, f.stroke, !0), w = g.r + g.offset, S = l ? u : s;
            m.attr({
              rotation: g.rotate,
              x: S[0] + w * Math.cos(r.rotation),
              y: S[1] - w * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), e.add(m);
          }
        });
      }
    }
  },
  axisTickLabel: function(r, t, e, i) {
    var n = hM(e, i, t, r), a = vM(e, i, t, r);
    if (fM(t, a, n), cM(e, i, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = hD(W(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      cD(o);
    }
  },
  axisName: function(r, t, e, i) {
    var n = zr(r.axisName, t.get("name"));
    if (n) {
      var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), u = t.get("nameGap") || 0, l = t.axis.getExtent(), f = l[0] > l[1] ? -1 : 1, h = [
        a === "start" ? l[0] - f * u : a === "end" ? l[1] + f * u : (l[0] + l[1]) / 2,
        // Reuse labelOffset.
        Zv(a) ? r.labelOffset + o * u : 0
      ], c, v = t.get("nameRotate");
      v != null && (v = v * Qe / 180);
      var d;
      Zv(a) ? c = Br.innerTextLayout(
        r.rotation,
        v ?? r.rotation,
        // Adapt to axis.
        o
      ) : (c = lM(r.rotation, a, v || 0, l), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
      var y = s.getFont(), p = t.get("nameTruncate", !0) || {}, g = p.ellipsis, _ = zr(r.nameTruncateMaxWidth, p.maxWidth, d), m = new ue({
        x: h[0],
        y: h[1],
        rotation: c.rotation,
        silent: Br.isLabelSilent(t),
        style: Mi(s, {
          text: n,
          font: y,
          overflow: "truncate",
          width: _,
          ellipsis: g,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || c.textAlign,
          verticalAlign: s.get("verticalAlign") || c.textVerticalAlign
        }),
        z2: 1
      });
      if (No({
        el: m,
        componentModel: t,
        itemName: n
      }), m.__fullText = n, m.anid = "name", t.get("triggerEvent")) {
        var w = Br.makeAxisEventDataBase(t);
        w.targetType = "axisName", w.name = n, st(m).eventData = w;
      }
      i.add(m), m.updateTransform(), e.add(m), m.decomposeTransform();
    }
  }
};
function lM(r, t, e, i) {
  var n = Qd(e - r), a, o, s = i[0] > i[1], u = t === "start" && !s || t !== "start" && s;
  return uo(n - Qe / 2) ? (o = u ? "bottom" : "top", a = "center") : uo(n - Qe * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", n < Qe * 1.5 && n > Qe / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: n,
    textAlign: a,
    textVerticalAlign: o
  };
}
function fM(r, t, e) {
  if (!Gy(r.axis)) {
    var i = r.get(["axisLabel", "showMinLabel"]), n = r.get(["axisLabel", "showMaxLabel"]);
    t = t || [], e = e || [];
    var a = t[0], o = t[1], s = t[t.length - 1], u = t[t.length - 2], l = e[0], f = e[1], h = e[e.length - 1], c = e[e.length - 2];
    i === !1 ? (Qt(a), Qt(l)) : Xv(a, o) && (i ? (Qt(o), Qt(f)) : (Qt(a), Qt(l))), n === !1 ? (Qt(s), Qt(h)) : Xv(u, s) && (n ? (Qt(u), Qt(c)) : (Qt(s), Qt(h)));
  }
}
function Qt(r) {
  r && (r.ignore = !0);
}
function Xv(r, t) {
  var e = r && r.getBoundingRect().clone(), i = t && t.getBoundingRect().clone();
  if (!(!e || !i)) {
    var n = Il([]);
    return Rl(n, n, -r.rotation), e.applyTransform(yi([], n, r.getLocalTransform())), i.applyTransform(yi([], n, t.getLocalTransform())), e.intersect(i);
  }
}
function Zv(r) {
  return r === "middle" || r === "center";
}
function e_(r, t, e, i, n) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = e, t && (oe(o, o, t), oe(s, s, t));
    var f = new Hr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    Nn(f.shape, f.style.lineWidth), f.anid = n + "_" + r[u].tickValue, a.push(f);
  }
  return a;
}
function hM(r, t, e, i) {
  var n = e.axis, a = e.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")), !(!o || n.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), u = i.tickDirection * a.get("length"), l = n.getTicksCoords(), f = e_(l, t.transform, u, at(s.getLineStyle(), {
      stroke: e.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      r.add(f[h]);
    return f;
  }
}
function cM(r, t, e, i) {
  var n = e.axis, a = e.getModel("minorTick");
  if (!(!a.get("show") || n.scale.isBlank())) {
    var o = n.getMinorTicksCoords();
    if (o.length)
      for (var s = a.getModel("lineStyle"), u = i * a.get("length"), l = at(s.getLineStyle(), at(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = e_(o[f], t.transform, u, l, "minorticks_" + f), c = 0; c < h.length; c++)
          r.add(h[c]);
  }
}
function vM(r, t, e, i) {
  var n = e.axis, a = zr(i.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || n.scale.isBlank())) {
    var o = e.getModel("axisLabel"), s = o.get("margin"), u = n.getViewLabels(), l = (zr(i.labelRotate, o.get("rotate")) || 0) * Qe / 180, f = Br.innerTextLayout(i.rotation, l, i.labelDirection), h = e.getCategories && e.getCategories(!0), c = [], v = Br.isLabelSilent(e), d = e.get("triggerEvent");
    return C(u, function(y, p) {
      var g = n.scale.type === "ordinal" ? n.scale.getRawOrdinalNumber(y.tickValue) : y.tickValue, _ = y.formattedLabel, m = y.rawLabel, w = o;
      if (h && h[g]) {
        var S = h[g];
        V(S) && S.textStyle && (w = new At(S.textStyle, o, e.ecModel));
      }
      var x = w.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), b = n.dataToCoord(g), D = w.getShallow("align", !0) || f.textAlign, M = X(w.getShallow("alignMinLabel", !0), D), A = X(w.getShallow("alignMaxLabel", !0), D), T = w.getShallow("verticalAlign", !0) || w.getShallow("baseline", !0) || f.textVerticalAlign, E = X(w.getShallow("verticalAlignMinLabel", !0), T), L = X(w.getShallow("verticalAlignMaxLabel", !0), T), P = new ue({
        x: b,
        y: i.labelOffset + i.labelDirection * s,
        rotation: f.rotation,
        silent: v,
        z2: 10 + (y.level || 0),
        style: Mi(w, {
          text: _,
          align: p === 0 ? M : p === u.length - 1 ? A : D,
          verticalAlign: p === 0 ? E : p === u.length - 1 ? L : T,
          fill: Y(x) ? x(
            // (1) In category axis with data zoom, tick is not the original
            // index of axis.data. So tick should not be exposed to user
            // in category axis.
            // (2) Compatible with previous version, which always use formatted label as
            // input. But in interval scale the formatted label is like '223,445', which
            // maked user replace ','. So we modify it to return original val but remain
            // it as 'string' to avoid error in replacing.
            n.type === "category" ? m : n.type === "value" ? g + "" : g,
            p
          ) : x
        })
      });
      if (P.anid = "label_" + g, No({
        el: P,
        componentModel: e,
        itemName: _,
        formatterParamsExtra: {
          isTruncated: function() {
            return P.isTruncated;
          },
          value: m,
          tickIndex: p
        }
      }), d) {
        var I = Br.makeAxisEventDataBase(e);
        I.targetType = "axisLabel", I.value = m, I.tickIndex = p, n.type === "category" && (I.dataIndex = g), st(P).eventData = I;
      }
      t.add(P), P.updateTransform(), c.push(P), r.add(P), P.decomposeTransform();
    }), c;
  }
}
const r_ = Br;
function dM(r, t) {
  var e = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return pM(e, r, t), e.seriesInvolved && yM(e, r), e;
}
function pM(r, t, e) {
  var i = t.getComponent("tooltip"), n = t.getComponent("axisPointer"), a = n.get("link", !0) || [], o = [];
  C(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Un(s.model), l = r.coordSysAxesInfo[u] = {};
    r.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", i);
    if (C(s.getAxes(), dt(y, !1, null)), s.getTooltipAxes && i && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && C(d.baseAxes, dt(y, v ? "cross" : !0, c)), v && C(d.otherAxes, dt(y, "cross", !1));
    }
    function y(p, g, _) {
      var m = _.model.getModel("axisPointer", n), w = m.get("show");
      if (!(!w || w === "auto" && !p && !_l(m))) {
        g == null && (g = m.get("triggerTooltip")), m = p ? gM(_, h, n, t, p, g) : m;
        var S = m.get("snap"), x = m.get("triggerEmphasis"), b = Un(_.model), D = g || S || _.type === "category", M = r.axesInfo[b] = {
          key: b,
          axis: _,
          coordSys: s,
          axisPointerModel: m,
          triggerTooltip: g,
          triggerEmphasis: x,
          involveSeries: D,
          snap: S,
          useHandle: _l(m),
          seriesModels: [],
          linkGroup: null
        };
        l[b] = M, r.seriesInvolved = r.seriesInvolved || D;
        var A = _M(a, _);
        if (A != null) {
          var T = o[A] || (o[A] = {
            axesInfo: {}
          });
          T.axesInfo[b] = M, T.mapper = a[A].mapper, M.linkGroup = T;
        }
      }
    }
  });
}
function gM(r, t, e, i, n, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  C(s, function(c) {
    u[c] = Q(o.get(c));
  }), u.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), n === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && at(l, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new At(u, e, i));
}
function yM(r, t) {
  t.eachSeries(function(e) {
    var i = e.coordinateSystem, n = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !i || n === "none" || n === !1 || n === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || C(r.coordSysAxesInfo[Un(i.model)], function(o) {
      var s = o.axis;
      i.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function _M(r, t) {
  for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
    var a = r[n] || {};
    if (cu(a[i + "AxisId"], e.id) || cu(a[i + "AxisIndex"], e.componentIndex) || cu(a[i + "AxisName"], e.name))
      return n;
  }
}
function cu(r, t) {
  return r === "all" || k(r) && it(r, t) >= 0 || r === t;
}
function mM(r) {
  var t = Lf(r);
  if (t) {
    var e = t.axisPointerModel, i = t.axis.scale, n = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = i.parse(o));
    var s = _l(e);
    a == null && (n.status = s ? "show" : "hide");
    var u = i.getExtent().slice();
    u[0] > u[1] && u.reverse(), // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Lf(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Un(r)];
}
function wM(r) {
  var t = Lf(r);
  return t && t.axisPointerModel;
}
function _l(r) {
  return !!r.get(["handle", "show"]);
}
function Un(r) {
  return r.type + "||" + r.id;
}
var vu = {}, SM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.axisPointerClass && mM(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, n, !0);
    }, t.prototype.updateAxisPointer = function(e, i, n, a) {
      this._doUpdateAxisPointerClass(e, n, !1);
    }, t.prototype.remove = function(e, i) {
      var n = this._axisPointer;
      n && n.remove(i);
    }, t.prototype.dispose = function(e, i) {
      this._disposeAxisPointer(i), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, i, n) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = wM(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, i, n) : this._disposeAxisPointer(i);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, i) {
      if (process.env.NODE_ENV !== "production" && vu[e])
        throw new Error("axisPointer " + e + " exists");
      vu[e] = i;
    }, t.getAxisPointerClass = function(e) {
      return e && vu[e];
    }, t.type = "axis", t;
  }(er)
);
const i_ = SM;
var ml = pt();
function xM(r, t, e, i) {
  var n = e.axis;
  if (!n.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = i.coordinateSystem.getRect(), l = n.getTicksCoords({
      tickModel: a,
      clamp: !0
    });
    if (l.length) {
      var f = s.length, h = ml(r).splitAreaColors, c = q(), v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var y = h.get(l[d].tickValue);
          if (y != null) {
            v = (y + (f - 1) * d) % f;
            break;
          }
        }
      var p = n.toGlobalCoord(l[0].coord), g = o.getAreaStyle();
      s = k(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var _ = n.toGlobalCoord(l[d].coord), m = void 0, w = void 0, S = void 0, x = void 0;
        n.isHorizontal() ? (m = p, w = u.y, S = _ - m, x = u.height, p = m + S) : (m = u.x, w = p, S = u.width, x = _ - w, p = w + x);
        var b = l[d - 1].tickValue;
        b != null && c.set(b, v), t.add(new _t({
          anid: b != null ? "area_" + b : null,
          shape: {
            x: m,
            y: w,
            width: S,
            height: x
          },
          style: at({
            fill: s[v]
          }, g),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      ml(r).splitAreaColors = c;
    }
  }
}
function bM(r) {
  ml(r).splitAreaColors = null;
}
var TM = ["axisLine", "axisTickLabel", "axisName"], CM = ["splitArea", "splitLine", "minorSplitLine"], n_ = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new se(), this.group.add(this._axisGroup), !!e.get("show")) {
        var s = e.getCoordSysModel(), u = yl(s, e), l = new r_(e, O({
          handleAutoShown: function(h) {
            for (var c = s.coordinateSystem.getCartesians(), v = 0; v < c.length; v++)
              if (dl(c[v].getOtherAxis(e.axis).scale))
                return !0;
            return !1;
          }
        }, u));
        C(TM, l.add, l), this._axisGroup.add(l.getGroup()), C(CM, function(h) {
          e.get([h, "show"]) && DM[h](this, this._axisGroup, e, s);
        }, this);
        var f = a && a.type === "changeAxisOrder" && a.isInitSort;
        f || tg(o, this._axisGroup, e), r.prototype.render.call(this, e, i, n, a);
      }
    }, t.prototype.remove = function() {
      bM(this);
    }, t.type = "cartesianAxis", t;
  }(i_)
), DM = {
  splitLine: function(r, t, e, i) {
    var n = e.axis;
    if (!n.scale.isBlank()) {
      var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color"), u = a.get("showMinLine") !== !1, l = a.get("showMaxLine") !== !1;
      s = k(s) ? s : [s];
      for (var f = i.coordinateSystem.getRect(), h = n.isHorizontal(), c = 0, v = n.getTicksCoords({
        tickModel: a
      }), d = [], y = [], p = o.getLineStyle(), g = 0; g < v.length; g++) {
        var _ = n.toGlobalCoord(v[g].coord);
        if (!(g === 0 && !u || g === v.length - 1 && !l)) {
          var m = v[g].tickValue;
          h ? (d[0] = _, d[1] = f.y, y[0] = _, y[1] = f.y + f.height) : (d[0] = f.x, d[1] = _, y[0] = f.x + f.width, y[1] = _);
          var w = c++ % s.length, S = new Hr({
            anid: m != null ? "line_" + m : null,
            autoBatch: !0,
            shape: {
              x1: d[0],
              y1: d[1],
              x2: y[0],
              y2: y[1]
            },
            style: at({
              stroke: s[w]
            }, p),
            silent: !0
          });
          Nn(S.shape, p.lineWidth), t.add(S);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, i) {
    var n = e.axis, a = e.getModel("minorSplitLine"), o = a.getModel("lineStyle"), s = i.coordinateSystem.getRect(), u = n.isHorizontal(), l = n.getMinorTicksCoords();
    if (l.length)
      for (var f = [], h = [], c = o.getLineStyle(), v = 0; v < l.length; v++)
        for (var d = 0; d < l[v].length; d++) {
          var y = n.toGlobalCoord(l[v][d].coord);
          u ? (f[0] = y, f[1] = s.y, h[0] = y, h[1] = s.y + s.height) : (f[0] = s.x, f[1] = y, h[0] = s.x + s.width, h[1] = y);
          var p = new Hr({
            anid: "minor_line_" + l[v][d].tickValue,
            autoBatch: !0,
            shape: {
              x1: f[0],
              y1: f[1],
              x2: h[0],
              y2: h[1]
            },
            style: c,
            silent: !0
          });
          Nn(p.shape, c.lineWidth), t.add(p);
        }
  },
  splitArea: function(r, t, e, i) {
    xM(r, t, e, i);
  }
}, a_ = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  }(n_)
), MM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = a_.type, e;
    }
    return t.type = "yAxis", t;
  }(n_)
), AM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, i) {
      this.group.removeAll(), e.get("show") && this.group.add(new _t({
        shape: e.coordinateSystem.getRect(),
        style: at({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  }(er)
), qv = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function EM(r) {
  r.registerComponentView(AM), r.registerComponentModel(ZD), r.registerCoordinateSystem("cartesian2d", uM), zv(r, "x", pl, qv), zv(r, "y", pl, qv), r.registerComponentView(a_), r.registerComponentView(MM), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var Er = pt(), Kv = Q, du = ft, LM = (
  /** @class */
  function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, i, n) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = i, !(!n && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, t, e, i);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new se(), this.createPointerEl(s, l, t, e), this.createLabelEl(s, l, t, e), i.getZr().add(s);
        else {
          var c = dt(Qv, e, h);
          this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, e);
        }
        Jv(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var i = e.get("animation"), n = t.axis, a = n.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (i === "auto" || i == null) {
        var s = this.animationThreshold;
        if (a && n.getBandWidth() > s)
          return !0;
        if (o) {
          var u = Lf(t).seriesDataCount, l = n.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return i === !0;
    }, r.prototype.makeElOption = function(t, e, i, n, a) {
    }, r.prototype.createPointerEl = function(t, e, i, n) {
      var a = e.pointer;
      if (a) {
        var o = Er(t).pointerEl = new cS[a.type](Kv(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, i, n) {
      if (e.label) {
        var a = Er(t).labelEl = new ue(Kv(e.label));
        t.add(a), jv(a, n);
      }
    }, r.prototype.updatePointerEl = function(t, e, i) {
      var n = Er(t).pointerEl;
      n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, i, n) {
      var a = Er(t).labelEl;
      a && (a.setStyle(e.label.style), i(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), jv(a, n));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          n && i.remove(n), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, n = this._handle = tf(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            Ad(l.event);
          },
          onmousedown: du(this._onHandleDragMove, this, 0, 0),
          drift: du(this._onHandleDragMove, this),
          ondragend: du(this._onHandleDragEnd, this)
        }), i.add(n)), Jv(n, e, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        k(u) || (u = [u, u]), n.scaleX = u[0] / 2, n.scaleY = u[1] / 2, $g(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      Qv(this._axisPointerModel, !e && this._moveAnimation, this._handle, pu(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var i = this._handle;
      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform(pu(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr(pu(n)), Er(i).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, i = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: i.axis.dim,
            axisIndex: i.componentIndex
          }]
        });
      }
    }, r.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, r.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(), i = this._group, n = this._handle;
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), nl(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, i) {
      return i = i || 0, {
        x: t[i],
        y: t[1 - i],
        width: e[i],
        height: e[1 - i]
      };
    }, r;
  }()
);
function Qv(r, t, e, i) {
  o_(Er(e).lastProp, i) || (Er(e).lastProp = i, t ? Be(e, i, r) : (e.stopAnimation(), e.attr(i)));
}
function o_(r, t) {
  if (V(r) && V(t)) {
    var e = !0;
    return C(t, function(i, n) {
      e = e && o_(r[n], i);
    }), !!e;
  } else
    return r === t;
}
function jv(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function pu(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function Jv(r, t, e) {
  var i = t.get("z"), n = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = e);
  });
}
const PM = LM;
function IM(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), i;
  return t === "line" ? (i = e.getLineStyle(), i.fill = null) : t === "shadow" && (i = e.getAreaStyle(), i.stroke = null), i;
}
function RM(r, t, e, i, n) {
  var a = e.get("value"), o = s_(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), u = Wo(s.get("padding") || 0), l = s.getFont(), f = Fl(o, l), h = n.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = n.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var y = n.verticalAlign;
  y === "bottom" && (h[1] -= v), y === "middle" && (h[1] -= v / 2), OM(h, c, v, i);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: Mi(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: p
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function OM(r, t, e, i) {
  var n = i.getWidth(), a = i.getHeight();
  r[0] = Math.min(r[0] + t, n) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function s_(r, t, e, i, n) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: n.precision
  }), o = n.formatter;
  if (o) {
    var s = {
      value: Mf(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    C(i, function(u) {
      var l = e.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), F(o) ? a = o.replace("{value}", a) : Y(o) && (a = o(s));
  }
  return a;
}
function u_(r, t, e) {
  var i = gi();
  return Rl(i, i, e.rotation), Du(i, i, e.position), Jl([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], i);
}
function NM(r, t, e, i, n, a) {
  var o = r_.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = n.get(["label", "margin"]), RM(t, i, n, a, {
    position: u_(i.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function kM(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function BM(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
var FM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, i, n, a, o) {
      var s = n.axis, u = s.grid, l = a.get("type"), f = td(u, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(i, !0));
      if (l && l !== "none") {
        var c = IM(a), v = zM[l](s, h, f);
        v.style = c, e.graphicKey = v.type, e.pointer = v;
      }
      var d = yl(u.model, n);
      NM(
        // @ts-ignore
        i,
        e,
        d,
        n,
        a,
        o
      );
    }, t.prototype.getHandleTransform = function(e, i, n) {
      var a = yl(i.axis.grid.model, i, {
        labelInside: !1
      });
      a.labelMargin = n.get(["handle", "margin"]);
      var o = u_(i.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, i, n, a) {
      var o = n.axis, s = o.grid, u = o.getGlobalExtent(!0), l = td(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
      h[f] += i[f], h[f] = Math.min(u[1], h[f]), h[f] = Math.max(u[0], h[f]);
      var c = (l[1] + l[0]) / 2, v = [c, c];
      v[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: v,
        tooltipOption: d[f]
      };
    }, t;
  }(PM)
);
function td(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var zM = {
  line: function(r, t, e) {
    var i = kM([t, e[0]], [t, e[1]], ed(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(r, t, e) {
    var i = Math.max(1, r.getBandWidth()), n = e[1] - e[0];
    return {
      type: "Rect",
      shape: BM([t - i / 2, e[0]], [i, n], ed(r))
    };
  }
};
function ed(r) {
  return r.dim === "x" ? 0 : 1;
}
const VM = FM;
var HM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    }, t;
  }(ut)
);
const GM = HM;
var Re = pt(), WM = C;
function l_(r, t, e) {
  if (!$.node) {
    var i = t.getZr();
    Re(i).records || (Re(i).records = {}), UM(i, t);
    var n = Re(i).records[r] || (Re(i).records[r] = {});
    n.handler = e;
  }
}
function UM(r, t) {
  if (Re(r).initialized)
    return;
  Re(r).initialized = !0, e("click", dt(rd, "click")), e("mousemove", dt(rd, "mousemove")), e("globalout", $M);
  function e(i, n) {
    r.on(i, function(a) {
      var o = XM(t);
      WM(Re(r).records, function(s) {
        s && n(s, a, o.dispatchAction);
      }), YM(o.pendings, t);
    });
  }
}
function YM(r, t) {
  var e = r.showTip.length, i = r.hideTip.length, n;
  e ? n = r.showTip[e - 1] : i && (n = r.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n));
}
function $M(r, t, e) {
  r.handler("leave", null, e);
}
function rd(r, t, e, i) {
  t.handler(r, e, i);
}
function XM(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(i) {
    var n = t[i.type];
    n ? n.push(i) : (i.dispatchAction = e, r.dispatchAction(i));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function wl(r, t) {
  if (!$.node) {
    var e = t.getZr(), i = (Re(e).records || {})[r];
    i && (Re(e).records[r] = null);
  }
}
var ZM = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n) {
      var a = i.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
      l_("axisPointer", n, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, t.prototype.remove = function(e, i) {
      wl("axisPointer", i);
    }, t.prototype.dispose = function(e, i) {
      wl("axisPointer", i);
    }, t.type = "axisPointer", t;
  }(er)
);
const qM = ZM;
function f_(r, t) {
  var e = [], i = r.seriesIndex, n;
  if (i == null || !(n = t.getSeriesByIndex(i)))
    return {
      point: []
    };
  var a = n.getData(), o = Xn(a, r);
  if (o == null || o < 0 || k(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = n.coordinateSystem;
  if (n.getTooltipPosition)
    e = n.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (r.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, c = l.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), y = [];
      y[v] = a.get(d, o), y[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = u.dataToPoint(y) || [];
    } else
      e = u.dataToPoint(a.getValues(W(u.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform), e = [p.x + p.width / 2, p.y + p.height / 2];
  }
  return {
    point: e,
    el: s
  };
}
var id = pt();
function KM(r, t, e) {
  var i = r.currTrigger, n = [r.x, r.y], a = r, o = r.dispatchAction || ft(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Ja(n) && (n = f_({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var u = Ja(n), l = a.axesInfo, f = s.axesInfo, h = i === "leave" || Ja(n), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, y = {
      showPointer: dt(jM, v),
      showTooltip: dt(JM, d)
    };
    C(s.coordSysMap, function(g, _) {
      var m = u || g.containPoint(n);
      C(s.coordSysAxesInfo[_], function(w, S) {
        var x = w.axis, b = iA(l, w);
        if (!h && m && (!l || b)) {
          var D = b && b.value;
          D == null && !u && (D = x.pointToData(n)), D != null && nd(w, D, y, !1, c);
        }
      });
    });
    var p = {};
    return C(f, function(g, _) {
      var m = g.linkGroup;
      m && !v[_] && C(m.axesInfo, function(w, S) {
        var x = v[S];
        if (w !== g && x) {
          var b = x.value;
          m.mapper && (b = g.axis.scale.parse(m.mapper(b, ad(w), ad(g)))), p[g.key] = b;
        }
      });
    }), C(p, function(g, _) {
      nd(f[_], g, y, !0, c);
    }), tA(v, f, c), eA(d, n, r, o), rA(f, o, e), c;
  }
}
function nd(r, t, e, i, n) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = QM(t, r), s = o.payloadBatch, u = o.snapToValue;
    s[0] && n.seriesIndex == null && O(n, s[0]), !i && r.snap && a.containData(u) && u != null && (t = u), e.showPointer(r, t, s), e.showTooltip(r, o, u);
  }
}
function QM(r, t) {
  var e = t.axis, i = e.dim, n = r, a = [], o = Number.MAX_VALUE, s = -1;
  return C(t.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(i), h, c;
    if (u.getAxisTooltipData) {
      var v = u.getAxisTooltipData(f, r, e);
      c = v.dataIndices, h = v.nestestValue;
    } else {
      if (c = u.getData().indicesOfNearest(
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !c.length)
        return;
      h = u.getData().get(f[0], c[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var d = r - h, y = Math.abs(d);
      y <= o && ((y < o || d >= 0 && s < 0) && (o = y, s = d, n = h, a.length = 0), C(c, function(p) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: p,
          dataIndex: u.getData().getRawIndex(p)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: n
  };
}
function jM(r, t, e, i) {
  r[t.key] = {
    value: e,
    payloadBatch: i
  };
}
function JM(r, t, e, i) {
  var n = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var u = t.coordSys.model, l = Un(u), f = r.map[l];
    f || (f = r.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, r.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: i,
      // Caustion: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: n.slice()
    });
  }
}
function tA(r, t, e) {
  var i = e.axesInfo = [];
  C(t, function(n, a) {
    var o = n.axisPointerModel.option, s = r[a];
    s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
      axisDim: n.axis.dim,
      axisIndex: n.axis.model.componentIndex,
      value: o.value
    });
  });
}
function eA(r, t, e, i) {
  if (Ja(t) || !r.list.length) {
    i({
      type: "hideTip"
    });
    return;
  }
  var n = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  i({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: n.dataIndexInside,
    dataIndex: n.dataIndex,
    seriesIndex: n.seriesIndex,
    dataByCoordSys: r.list
  });
}
function rA(r, t, e) {
  var i = e.getZr(), n = "axisPointerLastHighlights", a = id(i)[n] || {}, o = id(i)[n] = {};
  C(r, function(l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" && l.triggerEmphasis && C(h.seriesDataIndices, function(c) {
      var v = c.seriesIndex + " | " + c.dataIndex;
      o[v] = c;
    });
  });
  var s = [], u = [];
  C(a, function(l, f) {
    !o[f] && u.push(l);
  }), C(o, function(l, f) {
    !a[f] && s.push(l);
  }), u.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: u
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function iA(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var i = r[e];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function ad(r) {
  var t = r.axis.model, e = {}, i = e.axisDim = r.axis.dim;
  return e.axisIndex = e[i + "AxisIndex"] = t.componentIndex, e.axisName = e[i + "AxisName"] = t.name, e.axisId = e[i + "AxisId"] = t.id, e;
}
function Ja(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function h_(r) {
  i_.registerAxisPointerClass("CartesianAxisPointer", VM), r.registerComponentModel(GM), r.registerComponentView(qM), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !k(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = dM(t, e);
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, KM);
}
function nA(r) {
  rr(EM), rr(h_);
}
function aA(r, t) {
  var e = Wo(t.get("padding")), i = t.getItemStyle(["color", "opacity"]);
  return i.fill = t.get("backgroundColor"), r = new _t({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: i,
    silent: !0,
    z2: -1
  }), r;
}
var oA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    }, t;
  }(ut)
);
const sA = oA;
function c_(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function v_(r) {
  if ($.domSupported) {
    for (var t = document.documentElement.style, e = 0, i = r.length; e < i; e++)
      if (r[e] in t)
        return r[e];
  }
}
var d_ = v_(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), uA = v_(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function p_(r, t) {
  if (!r)
    return t;
  t = yg(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function lA(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? t ? e[t] : e : null;
}
var fA = p_(uA, "transition"), Pf = p_(d_, "transform"), hA = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + ($.transform3dSupported ? "will-change:transform;" : "");
function cA(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function vA(r, t, e) {
  if (!F(e) || e === "inside")
    return "";
  var i = r.get("backgroundColor"), n = r.get("borderWidth");
  t = Bn(t);
  var a = cA(e), o = Math.max(Math.round(n) * 1.5, 6), s = "", u = Pf + ":", l;
  it(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + n, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + n + "px;", y = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
  return '<div style="' + y.join("") + '"></div>';
}
function dA(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)", i = " " + r / 2 + "s " + e, n = "opacity" + i + ",visibility" + i;
  return t || (i = " " + r + "s " + e, n += $.transformSupported ? "," + Pf + i : ",left" + i + ",top" + i), fA + ":" + n;
}
function od(r, t, e) {
  var i = r.toFixed(0) + "px", n = t.toFixed(0) + "px";
  if (!$.transformSupported)
    return e ? "top:" + n + ";left:" + i + ";" : [["top", n], ["left", i]];
  var a = $.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + Pf + ":" + o + ";" : [["top", 0], ["left", 0], [d_, o]];
}
function pA(r) {
  var t = [], e = r.get("fontSize"), i = r.getTextColor();
  i && t.push("color:" + i), t.push("font:" + r.getFont());
  var n = X(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + n + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, u = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), C(["decoration", "align"], function(l) {
    var f = r.get(l);
    f && t.push("text-" + l + ":" + f);
  }), t.join(";");
}
function gA(r, t, e) {
  var i = [], n = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), u = r.get("shadowOffsetX"), l = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = Wg(r, "html"), c = u + "px " + l + "px " + o + "px " + s;
  return i.push("box-shadow:" + c), t && n && i.push(dA(n, e)), a && i.push("background-color:" + a), C(["width", "color", "radius"], function(v) {
    var d = "border-" + v, y = yg(d), p = r.get(y);
    p != null && i.push(d + ":" + p + (v === "color" ? "" : "px"));
  }), i.push(pA(f)), h != null && i.push("padding:" + Wo(h).join("px ") + "px"), i.join(";") + ";";
}
function sd(r, t, e, i, n) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && lm(r, o, e, i, n);
  } else {
    r[0] = i, r[1] = n;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var yA = (
  /** @class */
  function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, $.wxa)
        return null;
      var i = document.createElement("div");
      i.domBelongToZr = !0, this.el = i;
      var n = this._zr = t.getZr(), a = e.appendTo, o = a && (F(a) ? document.querySelector(a) : bi(a) ? a : Y(a) && a(t.getDom()));
      sd(this._styleCoord, n, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(i), this._api = t, this._container = o;
      var s = this;
      i.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, i.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = n.handler, f = n.painter.getViewportRoot();
          Jt(f, u, !0), l.dispatch("mousemove", u);
        }
      }, i.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), i = lA(e, "position"), n = e.style;
        n.position !== "absolute" && i !== "absolute" && (n.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var i = this.el, n = i.style, a = this._styleCoord;
      i.innerHTML ? n.cssText = hA + gA(t, !this._firstShow, this._longHide) + od(a[0], a[1], !0) + ("border-color:" + Bn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (F(a) && i.get("trigger") === "item" && !c_(i) && (s = vA(i, n, a)), F(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", k(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          bi(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, r.prototype.moveTo = function(t, e) {
      if (this.el) {
        var i = this._styleCoord;
        if (sd(i, this._zr, this._container, t, e), i[0] != null && i[1] != null) {
          var n = this.el.style, a = od(i[0], i[1]);
          C(a, function(o) {
            n[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      e.visibility = "hidden", e.opacity = "0", $.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(ft(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this.el.parentNode;
      t && t.removeChild(this.el), this.el = this._container = null;
    }, r;
  }()
);
const _A = yA;
var mA = (
  /** @class */
  function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), ld(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this;
      V(t) && zt(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = i.getModel("textStyle");
      this.el = new ue({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: n,
          textShadowColor: s.get("textShadowColor"),
          fill: i.get(["textStyle", "color"]),
          padding: Wg(i, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: i.get("z")
      }), C(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = i.get(l);
      }), C(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), i = ud(t.style);
      return [e.width + i.left + i.right, e.height + i.top + i.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var i = this.el;
      if (i) {
        var n = this._styleCoord;
        ld(n, this._zr, t, e), t = n[0], e = n[1];
        var a = i.style, o = qe(a.borderWidth || 0), s = ud(a);
        i.x = t + o + s.left, i.y = e + o + s.top, i.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(ft(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  }()
);
function qe(r) {
  return Math.max(0, r);
}
function ud(r) {
  var t = qe(r.shadowBlur || 0), e = qe(r.shadowOffsetX || 0), i = qe(r.shadowOffsetY || 0);
  return {
    left: qe(t - e),
    right: qe(t + e),
    top: qe(t - i),
    bottom: qe(t + i)
  };
}
function ld(r, t, e, i) {
  r[0] = e, r[1] = i, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
const wA = mA;
var SA = new _t({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), xA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, i) {
      if (!($.node || !i.getDom())) {
        var n = e.getComponent("tooltip"), a = this._renderMode = W0(n.get("renderMode"));
        this._tooltipContent = a === "richText" ? new wA(i) : new _A(i, {
          appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, i, n) {
      if (!($.node || !n.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = i, this._api = n;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? $g(this, "_updatePosition", 50, "fixRate") : nl(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, i = e.get("triggerOn");
      l_("itemTooltip", this._api, ft(function(n, a, o) {
        i !== "none" && (i.indexOf(n) >= 0 ? this._tryShow(a, o) : n === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, i = this._ecModel, n = this._api, a = e.get("triggerOn");
      if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !n.isDisposed() && o.manuallyShowTip(e, i, n, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, i, n, a) {
      if (!(a.from === this.uid || $.node || !n.getDom())) {
        var o = fd(a, n);
        this._ticket = "";
        var s = a.dataByCoordSys, u = DA(a, i, n);
        if (u) {
          var l = u.el.getBoundingRect().clone();
          l.applyTransform(u.el.transform), this._tryShow({
            offsetX: l.x + l.width / 2,
            offsetY: l.y + l.height / 2,
            target: u.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = SA;
          f.x = a.x, f.y = a.y, f.update(), st(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(e, i, n, a))
            return;
          var h = f_(a, i), c = h.point[0], v = h.point[1];
          c != null && v != null && this._tryShow({
            offsetX: c,
            offsetY: v,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else
          a.x != null && a.y != null && (n.dispatchAction({
            type: "updateAxisPointer",
            x: a.x,
            y: a.y
          }), this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            target: n.getZr().findHover(a.x, a.y).target
          }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, i, n, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(fd(a, n));
    }, t.prototype._manuallyAxisShowTip = function(e, i, n, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = i.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = i.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = an([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return n.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, i) {
      var n = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (n) {
          var s = st(n);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null;
          var u, l;
          gn(n, function(f) {
            if (st(f).dataIndex != null)
              return u = f, !0;
            if (st(f).tooltipConfig != null)
              return l = f, !0;
          }, !0), u ? this._showSeriesItemTooltip(e, u, i) : l ? this._showComponentItemTooltip(e, l, i) : this._hide(i);
        } else
          this._lastDataByCoordSys = null, this._hide(i);
      }
    }, t.prototype._showOrMove = function(e, i) {
      var n = e.get("showDelay");
      i = ft(i, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(i, n) : i();
    }, t.prototype._showAxisTooltip = function(e, i) {
      var n = this._ecModel, a = this._tooltipModel, o = [i.offsetX, i.offsetY], s = an([i.tooltipOption], a), u = this._renderMode, l = [], f = Vn("section", {
        blocks: [],
        noHeader: !0
      }), h = [], c = new Xs();
      C(e, function(_) {
        C(_.dataByAxis, function(m) {
          var w = n.getComponent(m.axisDim + "Axis", m.axisIndex), S = m.value;
          if (!(!w || S == null)) {
            var x = s_(S, w.axis, n, m.seriesDataIndices, m.valueLabelOpt), b = Vn("section", {
              header: x,
              noHeader: !be(x),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(b), C(m.seriesDataIndices, function(D) {
              var M = n.getSeriesByIndex(D.seriesIndex), A = D.dataIndexInside, T = M.getDataParams(A);
              if (!(T.dataIndex < 0)) {
                T.axisDim = m.axisDim, T.axisIndex = m.axisIndex, T.axisType = m.axisType, T.axisId = m.axisId, T.axisValue = Mf(w.axis, {
                  value: S
                }), T.axisValueLabel = x, T.marker = c.makeTooltipMarker("item", Bn(T.color), u);
                var E = Pc(M.formatTooltip(A, !0, null)), L = E.frag;
                if (L) {
                  var P = an([M], a).get("valueFormatter");
                  b.blocks.push(P ? O({
                    valueFormatter: P
                  }, L) : L);
                }
                E.text && h.push(E.text), l.push(T);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var v = i.position, d = s.get("order"), y = kc(f, c, u, d, n.get("useUTC"), s.get("textStyle"));
      y && h.unshift(y);
      var p = u === "richText" ? `

` : "<br/>", g = h.join(p);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, g, l, Math.random() + "", o[0], o[1], v, null, c);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, i, n) {
      var a = this._ecModel, o = st(i), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = e.positionDefault, y = an([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), p = y.get("trigger");
      if (!(p != null && p !== "item")) {
        var g = l.getDataParams(f, h), _ = new Xs();
        g.marker = _.makeTooltipMarker("item", Bn(g.color), v);
        var m = Pc(l.formatTooltip(f, !1, h)), w = y.get("order"), S = y.get("valueFormatter"), x = m.frag, b = x ? kc(S ? O({
          valueFormatter: S
        }, x) : x, _, v, w, a.get("useUTC"), y.get("textStyle")) : m.text, D = "item_" + l.name + "_" + f;
        this._showOrMove(y, function() {
          this._showTooltipContent(y, b, g, D, e.offsetX, e.offsetY, e.position, e.target, _);
        }), n({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: c.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, i, n) {
      var a = this._renderMode === "html", o = st(i), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (F(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = Q(u), u.content = Ft(u.content));
      var h = [u], c = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      c && h.push(c), h.push({
        formatter: u.content
      });
      var v = e.positionDefault, d = an(h, this._tooltipModel, v ? {
        position: v
      } : null), y = d.get("content"), p = Math.random() + "", g = new Xs();
      this._showOrMove(d, function() {
        var _ = Q(d.get("formatterParams") || {});
        this._showTooltipContent(d, y, _, p, e.offsetX, e.offsetY, e.position, i, g);
      }), n({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, i, n, a, o, s, u, l, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(e.get("enterable"));
        var c = e.get("formatter");
        u = u || e.get("position");
        var v = i, d = this._getNearestPoint([o, s], n, e.get("trigger"), e.get("borderColor")), y = d.color;
        if (c)
          if (F(c)) {
            var p = e.ecModel.get("useUTC"), g = k(n) ? n[0] : n, _ = g && g.axisType && g.axisType.indexOf("time") >= 0;
            v = c, _ && (v = Fo(g.axisValue, v, p)), v = _g(v, n, !0);
          } else if (Y(c)) {
            var m = ft(function(w, S) {
              w === this._ticket && (h.setContent(S, f, e, y, u), this._updatePosition(e, u, o, s, h, n, l));
            }, this);
            this._ticket = a, v = c(n, a, m);
          } else
            v = c;
        h.setContent(v, f, e, y, u), h.show(e, y), this._updatePosition(e, u, o, s, h, n, l);
      }
    }, t.prototype._getNearestPoint = function(e, i, n, a) {
      if (n === "axis" || k(i))
        return {
          color: a || (this._renderMode === "html" ? "#fff" : "none")
        };
      if (!k(i))
        return {
          color: a || i.color || i.borderColor
        };
    }, t.prototype._updatePosition = function(e, i, n, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      i = i || e.get("position");
      var h = o.getSize(), c = e.get("align"), v = e.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), Y(i) && (i = i([n, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), k(i))
        n = Rt(i[0], l), a = Rt(i[1], f);
      else if (V(i)) {
        var y = i;
        y.width = h[0], y.height = h[1];
        var p = go(y, {
          width: l,
          height: f
        });
        n = p.x, a = p.y, c = null, v = null;
      } else if (F(i) && u) {
        var g = CA(i, d, h, e.get("borderWidth"));
        n = g[0], a = g[1];
      } else {
        var g = bA(n, a, o, l, f, c ? null : 20, v ? null : 20);
        n = g[0], a = g[1];
      }
      if (c && (n -= hd(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= hd(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), c_(e)) {
        var g = TA(n, a, o, l, f);
        n = g[0], a = g[1];
      }
      o.moveTo(n, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, i) {
      var n = this._lastDataByCoordSys, a = this._cbParamsList, o = !!n && n.length === e.length;
      return o && C(n, function(s, u) {
        var l = s.dataByAxis || [], f = e[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && C(l, function(c, v) {
          var d = h[v] || {}, y = c.seriesDataIndices || [], p = d.seriesDataIndices || [];
          o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && y.length === p.length, o && C(y, function(g, _) {
            var m = p[_];
            o = o && g.seriesIndex === m.seriesIndex && g.dataIndex === m.dataIndex;
          }), a && C(c.seriesDataIndices, function(g) {
            var _ = g.seriesIndex, m = i[_], w = a[_];
            m && w && w.data !== m.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = i, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, i) {
      $.node || !i.getDom() || (nl(this, "_updatePosition"), this._tooltipContent.dispose(), wl("itemTooltip", i));
    }, t.type = "tooltip", t;
  }(er)
);
function an(r, t, e) {
  var i = t.ecModel, n;
  e ? (n = new At(e, i, i), n = new At(t.option, n, i)) : n = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof At && (o = o.get("tooltip", !0)), F(o) && (o = {
      formatter: o
    }), o && (n = new At(o, n, i)));
  }
  return n;
}
function fd(r, t) {
  return r.dispatchAction || ft(t.dispatchAction, t);
}
function bA(r, t, e, i, n, a, o) {
  var s = e.getSize(), u = s[0], l = s[1];
  return a != null && (r + u + a + 2 > i ? r -= u + a : r += a), o != null && (t + l + o > n ? t -= l + o : t += o), [r, t];
}
function TA(r, t, e, i, n) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, i) - o, t = Math.min(t + s, n) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function CA(r, t, e, i) {
  var n = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * i) + 8, s = 0, u = 0, l = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + l / 2 - n / 2, u = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + l / 2 - n / 2, u = t.y - a - o;
      break;
    case "bottom":
      s = t.x + l / 2 - n / 2, u = t.y + f + o;
      break;
    case "left":
      s = t.x - n - o, u = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + l + o, u = t.y + f / 2 - a / 2;
  }
  return [s, u];
}
function hd(r) {
  return r === "center" || r === "middle";
}
function DA(r, t, e) {
  var i = Gl(r).queryOptionMap, n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = Zn(t, n, i.get(n), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = st(l).tooltipConfig;
        if (f && f.name === r.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: n,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
const MA = xA;
function AA(r) {
  rr(h_), r.registerComponentModel(sA), r.registerComponentView(MA), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Ht), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Ht);
}
var EA = function(r, t) {
  if (t === "all")
    return {
      type: "all",
      title: r.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: r.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, LA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var i = e.selector, n = this.ecModel;
      i === !0 && (i = e.selector = ["all", "inverse"]), k(i) && C(i, function(a, o) {
        F(a) && (a = {
          type: a
        }), i[o] = et(a, EA(n, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var i = !1, n = 0; n < e.length; n++) {
          var a = e[n].get("name");
          if (this.isSelected(a)) {
            this.select(a), i = !0;
            break;
          }
        }
        !i && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var i = [], n = [];
      e.eachRawSeries(function(u) {
        var l = u.name;
        n.push(l);
        var f;
        if (u.legendVisualProvider) {
          var h = u.legendVisualProvider, c = h.getAllNames();
          e.isSeriesFiltered(u) || (n = n.concat(c)), c.length ? i = i.concat(c) : f = !0;
        } else
          f = !0;
        f && Hl(u) && i.push(u.name);
      }), this._availableNames = n;
      var a = this.get("data") || i, o = q(), s = W(a, function(u) {
        return (F(u) || ht(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new At(u, this, this.ecModel));
      }, this);
      this._data = St(s, function(u) {
        return !!u;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var i = this.option.selected, n = this.get("selectedMode");
      if (n === "single") {
        var a = this._data;
        C(a, function(o) {
          i[o.get("name")] = !1;
        });
      }
      i[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var i = this.option.selected;
      i.hasOwnProperty(e) || (i[e] = !0), this[i[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, i = this.option.selected;
      C(e, function(n) {
        i[n.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, i = this.option.selected;
      C(e, function(n) {
        var a = n.get("name", !0);
        i.hasOwnProperty(a) || (i[a] = !0), i[a] = !i[a];
      });
    }, t.prototype.isSelected = function(e) {
      var i = this.option.selected;
      return !(i.hasOwnProperty(e) && !i[e]) && it(this._availableNames, e) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      }
    }, t;
  }(ut)
);
const Sl = LA;
var si = dt, xl = C, Fa = se, PA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new Fa()), this.group.add(this._selectorGroup = new Fa()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, i, n) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = e.get("selector", !0), l = e.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, i, n, u, s, l);
        var f = e.getBoxLayoutParams(), h = {
          width: n.getWidth(),
          height: n.getHeight()
        }, c = e.get("padding"), v = go(f, h, c), d = this.layoutInner(e, o, v, a, u, l), y = go(at({
          width: d.width,
          height: d.height
        }, f), h, c);
        this.group.x = y.x - d.x, this.group.y = y.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = aA(d, e));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, i, n, a, o, s, u) {
      var l = this.getContentGroup(), f = q(), h = i.get("selectedMode"), c = [];
      n.eachRawSeries(function(v) {
        !v.get("legendHoverLink") && c.push(v.id);
      }), xl(i.getData(), function(v, d) {
        var y = v.get("name");
        if (!this.newlineDisabled && (y === "" || y === `
`)) {
          var p = new Fa();
          p.newline = !0, l.add(p);
          return;
        }
        var g = n.getSeriesByName(y)[0];
        if (!f.get(y)) {
          if (g) {
            var _ = g.getData(), m = _.getVisual("legendLineStyle") || {}, w = _.getVisual("legendIcon"), S = _.getVisual("style"), x = this._createItem(g, y, d, v, i, e, m, S, w, h, a);
            x.on("click", si(cd, y, null, a, c)).on("mouseover", si(bl, g.name, null, a, c)).on("mouseout", si(Tl, g.name, null, a, c)), n.ssr && x.eachChild(function(b) {
              var D = st(b);
              D.seriesIndex = g.seriesIndex, D.dataIndex = d, D.ssrType = "legend";
            }), f.set(y, !0);
          } else
            n.eachRawSeries(function(b) {
              if (!f.get(y) && b.legendVisualProvider) {
                var D = b.legendVisualProvider;
                if (!D.containName(y))
                  return;
                var M = D.indexOfName(y), A = D.getItemVisual(M, "style"), T = D.getItemVisual(M, "legendIcon"), E = Or(A.fill);
                E && E[3] === 0 && (E[3] = 0.2, A = O(O({}, A), {
                  fill: Nl(E, "rgba")
                }));
                var L = this._createItem(b, y, d, v, i, e, {}, A, T, h, a);
                L.on("click", si(cd, null, y, a, c)).on("mouseover", si(bl, null, y, a, c)).on("mouseout", si(Tl, null, y, a, c)), n.ssr && L.eachChild(function(P) {
                  var I = st(P);
                  I.seriesIndex = b.seriesIndex, I.dataIndex = d, I.ssrType = "legend";
                }), f.set(y, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(y) || console.warn(y + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, i, a, s, u);
    }, t.prototype._createSelector = function(e, i, n, a, o) {
      var s = this.getSelectorGroup();
      xl(e, function(l) {
        var f = l.type, h = new ue({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            n.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: i.id
            });
          }
        });
        s.add(h);
        var c = i.getModel("selectorLabel"), v = i.getModel(["emphasis", "selectorLabel"]);
        rg(h, {
          normal: c,
          emphasis: v
        }, {
          defaultText: l.title
        }), $u(h);
      });
    }, t.prototype._createItem = function(e, i, n, a, o, s, u, l, f, h, c) {
      var v = e.visualDrawType, d = o.get("itemWidth"), y = o.get("itemHeight"), p = o.isSelected(i), g = a.get("symbolRotate"), _ = a.get("symbolKeepAspect"), m = a.get("icon");
      f = m || f || "roundRect";
      var w = IA(f, a, u, l, v, p, c), S = new Fa(), x = a.getModel("textStyle");
      if (Y(e.getLegendIcon) && (!m || m === "inherit"))
        S.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: g,
          itemStyle: w.itemStyle,
          lineStyle: w.lineStyle,
          symbolKeepAspect: _
        }));
      else {
        var b = m === "inherit" && e.getData().getVisual("symbol") ? g === "inherit" ? e.getData().getVisual("symbolRotate") : g : 0;
        S.add(RA({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: b,
          itemStyle: w.itemStyle,
          lineStyle: w.lineStyle,
          symbolKeepAspect: _
        }));
      }
      var D = s === "left" ? d + 5 : -5, M = s, A = o.get("formatter"), T = i;
      F(A) && A ? T = A.replace("{name}", i ?? "") : Y(A) && (T = A(i));
      var E = p ? x.getTextColor() : a.get("inactiveColor");
      S.add(new ue({
        style: Mi(x, {
          text: T,
          x: D,
          y: y / 2,
          fill: E,
          align: M,
          verticalAlign: "middle"
        }, {
          inheritColor: E
        })
      }));
      var L = new _t({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && No({
        el: L,
        componentModel: o,
        itemName: i,
        itemTooltipOption: P.option
      }), S.add(L), S.eachChild(function(I) {
        I.silent = !0;
      }), L.silent = !h, this.getContentGroup().add(S), $u(S), S.__legendDataIndex = n, S;
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      Dn(e.get("orient"), u, e.get("itemGap"), n.width, n.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        Dn(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var c = l.getBoundingRect(), v = [-c.x, -c.y], d = e.get("selectorButtonGap", !0), y = e.getOrient().index, p = y === 0 ? "width" : "height", g = y === 0 ? "height" : "width", _ = y === 0 ? "y" : "x";
        s === "end" ? v[y] += f[p] + d : h[y] += c[p] + d, v[1 - y] += f[g] / 2 - c[g] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
        var m = {
          x: 0,
          y: 0
        };
        return m[p] = f[p] + d + c[p], m[g] = Math.max(f[g], c[g]), m[_] = Math.min(0, c[_] + v[1 - y]), m;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  }(er)
);
function IA(r, t, e, i, n, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0), xl(p, function(_, m) {
      p[m] === "inherit" && (p[m] = g[m]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? i.decal : ll(h, o), l.fill === "inherit" && (l.fill = i[n]), l.stroke === "inherit" && (l.stroke = i[f]), l.opacity === "inherit" && (l.opacity = (n === "fill" ? i : e).opacity), s(l, i);
  var c = t.getModel("lineStyle"), v = c.getLineStyle();
  if (s(v, e), l.fill === "auto" && (l.fill = i.fill), l.stroke === "auto" && (l.stroke = i.fill), v.stroke === "auto" && (v.stroke = i.fill), !a) {
    var d = t.get("inactiveBorderWidth"), y = l[f];
    l.lineWidth = d === "auto" ? i.lineWidth > 0 && y ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function RA(r) {
  var t = r.icon || "roundRect", e = _f(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function cd(r, t, e, i) {
  Tl(r, t, e, i), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), bl(r, t, e, i);
}
function g_(r) {
  for (var t = r.getZr().storage.getDisplayList(), e, i = 0, n = t.length; i < n && !(e = t[i].states.emphasis); )
    i++;
  return e && e.hoverLayer;
}
function bl(r, t, e, i) {
  g_(e) || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function Tl(r, t, e, i) {
  g_(e) || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
const y_ = PA;
function OA(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var i = 0; i < t.length; i++)
      if (!t[i].isSelected(e.name))
        return !1;
    return !0;
  });
}
function on(r, t, e) {
  var i = r === "allSelect" || r === "inverseSelect", n = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    i ? s[r]() : s[r](t.name), vd(s, n), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    C(n, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), vd(s, o);
  }), i ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function vd(r, t) {
  var e = t || {};
  return C(r.getData(), function(i) {
    var n = i.get("name");
    if (!(n === `
` || n === "")) {
      var a = r.isSelected(n);
      Vr(e, n) ? e[n] = e[n] && a : e[n] = a;
    }
  }), e;
}
function NA(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", dt(on, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", dt(on, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", dt(on, "inverseSelect")), r.registerAction("legendSelect", "legendselected", dt(on, "select")), r.registerAction("legendUnSelect", "legendunselected", dt(on, "unSelect"));
}
function __(r) {
  r.registerComponentModel(Sl), r.registerComponentView(y_), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, OA), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), NA(r);
}
var kA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, i, n) {
      var a = Uo(e);
      r.prototype.init.call(this, e, i, n), dd(this, e, a);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), dd(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = ag(Sl.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    }), t;
  }(Sl)
);
function dd(r, t, e) {
  var i = r.getOrient(), n = [1, 1];
  n[i.index] = 0, Ai(t, e, {
    type: "box",
    ignoreSize: !!n
  });
}
const BA = kA;
var pd = se, gu = ["width", "height"], yu = ["x", "y"], FA = (
  /** @class */
  function(r) {
    B(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new pd()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new pd());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, i, n, a, o, s, u) {
      var l = this;
      r.prototype.renderInner.call(this, e, i, n, a, o, s, u);
      var f = this._controllerGroup, h = i.get("pageIconSize", !0), c = k(h) ? h : [h, h];
      d("pagePrev", 0);
      var v = i.getModel("pageTextStyle");
      f.add(new ue({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: v.getTextColor(),
          font: v.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(y, p) {
        var g = y + "DataIndex", _ = tf(i.get("pageIcons", !0)[i.getOrient().name][p], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: ft(l._pageGo, l, g, i, a)
        }, {
          x: -c[0] / 2,
          y: -c[1] / 2,
          width: c[0],
          height: c[1]
        });
        _.name = y, f.add(_);
      }
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var u = this.getSelectorGroup(), l = e.getOrient().index, f = gu[l], h = yu[l], c = gu[1 - l], v = yu[1 - l];
      o && Dn(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), y = u.getBoundingRect(), p = [-y.x, -y.y], g = Q(n);
      o && (g[f] = n[f] - y[f] - d);
      var _ = this._layoutContentAndController(e, a, g, l, f, c, v, h);
      if (o) {
        if (s === "end")
          p[l] += _[f] + d;
        else {
          var m = y[f] + d;
          p[l] -= m, _[h] -= m;
        }
        _[f] += y[f] + d, p[1 - l] += _[v] + _[c] / 2 - y[c] / 2, _[c] = Math.max(_[c], y[c]), _[v] = Math.min(_[v], y[v] + p[1 - l]), u.x = p[0], u.y = p[1], u.markRedraw();
      }
      return _;
    }, t.prototype._layoutContentAndController = function(e, i, n, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
      Dn(e.get("orient"), f, e.get("itemGap"), a ? n.width : null, a ? null : n.height), Dn(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        c,
        e.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = c.getBoundingRect(), y = this._showController = v[o] > n[o], p = [-v.x, -v.y];
      i || (p[a] = f[l]);
      var g = [0, 0], _ = [-d.x, -d.y], m = X(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (y) {
        var w = e.get("pageButtonPosition", !0);
        w === "end" ? _[a] += n[o] - d[o] : g[a] += d[o] + m;
      }
      _[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(g), c.setPosition(_);
      var S = {
        x: 0,
        y: 0
      };
      if (S[o] = y ? n[o] : v[o], S[s] = Math.max(v[s], d[s]), S[u] = Math.min(0, d[u] + _[1 - a]), h.__rectSize = n[o], y) {
        var x = {
          x: 0,
          y: 0
        };
        x[o] = Math.max(n[o] - d[o] - m, 0), x[s] = S[s], h.setClipPath(new _t({
          shape: x
        })), h.__rectSize = x[o];
      } else
        c.eachChild(function(D) {
          D.attr({
            invisible: !0,
            silent: !0
          });
        });
      var b = this._getPageInfo(e);
      return b.pageIndex != null && Be(
        f,
        {
          x: b.contentPosition[0],
          y: b.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        y ? e : null
      ), this._updatePageInfoView(e, b), S;
    }, t.prototype._pageGo = function(e, i, n) {
      var a = this._getPageInfo(i)[e];
      a != null && n.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: i.id
      });
    }, t.prototype._updatePageInfoView = function(e, i) {
      var n = this._controllerGroup;
      C(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", c = i[h] != null, v = n.childOfName(f);
        v && (v.setStyle("fill", c ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
      });
      var a = n.childOfName("pageText"), o = e.get("pageFormatter"), s = i.pageIndex, u = s != null ? s + 1 : 0, l = i.pageCount;
      a && o && a.setStyle("text", F(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, t.prototype._getPageInfo = function(e) {
      var i = e.get("scrollDataIndex", !0), n = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = gu[o], u = yu[o], l = this._findTargetItemIndex(i), f = n.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
        contentPosition: [n.x, n.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var y = w(h);
      d.contentPosition[o] = -y.s;
      for (var p = l + 1, g = y, _ = y, m = null; p <= c; ++p)
        m = w(f[p]), // Half of the last item is out of the window.
        (!m && _.e > g.s + a || m && !S(m, g.s)) && (_.i > g.i ? g = _ : g = m, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), _ = m;
      for (var p = l - 1, g = y, _ = y, m = null; p >= -1; --p)
        m = w(f[p]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!m || !S(_, m.s)) && g.i < _.i && (_ = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = m;
      return d;
      function w(x) {
        if (x) {
          var b = x.getBoundingRect(), D = b[u] + x[u];
          return {
            s: D,
            e: D + b[s],
            i: x.__legendDataIndex
          };
        }
      }
      function S(x, b) {
        return x.e >= b && x.s <= b + a;
      }
    }, t.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var i, n = this.getContentGroup(), a;
      return n.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === e && (i = s);
      }), i ?? a;
    }, t.type = "legend.scroll", t;
  }(y_)
);
const zA = FA;
function VA(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var i = t.scrollDataIndex;
    i != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(n) {
      n.setScrollDataIndex(i);
    });
  });
}
function HA(r) {
  rr(__), r.registerComponentModel(BA), r.registerComponentView(zA), VA(r);
}
function GA(r) {
  rr(__), rr(HA);
}
var _u = null;
function WA(r) {
  return _u || (_u = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
    return setTimeout(t, 16);
  }).bind(window)), _u(r);
}
var mu = null;
function UA(r) {
  mu || (mu = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(t) {
    clearTimeout(t);
  }).bind(window)), mu(r);
}
function YA(r) {
  var t = document.createElement("style");
  return t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(document.createTextNode(r)), (document.querySelector("head") || document.body).appendChild(t), t;
}
function za(r, t) {
  t === void 0 && (t = {});
  var e = document.createElement(r);
  return Object.keys(t).forEach(function(i) {
    e[i] = t[i];
  }), e;
}
function m_(r, t, e) {
  var i = window.getComputedStyle(r, e || null) || {
    display: "none"
  };
  return i[t];
}
function Cl(r) {
  if (!document.documentElement.contains(r))
    return {
      detached: !0,
      rendered: !1
    };
  for (var t = r; t !== document; ) {
    if (m_(t, "display") === "none")
      return {
        detached: !1,
        rendered: !1
      };
    t = t.parentNode;
  }
  return {
    detached: !1,
    rendered: !0
  };
}
var $A = '.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}', Dl = 0, to = null;
function XA(r, t) {
  r.__resize_mutation_handler__ || (r.__resize_mutation_handler__ = KA.bind(r));
  var e = r.__resize_listeners__;
  if (!e) {
    if (r.__resize_listeners__ = [], window.ResizeObserver) {
      var i = r.offsetWidth, n = r.offsetHeight, a = new ResizeObserver(function() {
        !r.__resize_observer_triggered__ && (r.__resize_observer_triggered__ = !0, r.offsetWidth === i && r.offsetHeight === n) || Co(r);
      }), o = Cl(r), s = o.detached, u = o.rendered;
      r.__resize_observer_triggered__ = s === !1 && u === !1, r.__resize_observer__ = a, a.observe(r);
    } else if (r.attachEvent && r.addEventListener)
      r.__resize_legacy_resize_handler__ = function() {
        Co(r);
      }, r.attachEvent("onresize", r.__resize_legacy_resize_handler__), document.addEventListener("DOMSubtreeModified", r.__resize_mutation_handler__);
    else if (Dl || (to = YA($A)), QA(r), r.__resize_rendered__ = Cl(r).rendered, window.MutationObserver) {
      var l = new MutationObserver(r.__resize_mutation_handler__);
      l.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), r.__resize_mutation_observer__ = l;
    }
  }
  r.__resize_listeners__.push(t), Dl++;
}
function ZA(r, t) {
  var e = r.__resize_listeners__;
  if (e) {
    if (t && e.splice(e.indexOf(t), 1), !e.length || !t) {
      if (r.detachEvent && r.removeEventListener) {
        r.detachEvent("onresize", r.__resize_legacy_resize_handler__), document.removeEventListener("DOMSubtreeModified", r.__resize_mutation_handler__);
        return;
      }
      r.__resize_observer__ ? (r.__resize_observer__.unobserve(r), r.__resize_observer__.disconnect(), r.__resize_observer__ = null) : (r.__resize_mutation_observer__ && (r.__resize_mutation_observer__.disconnect(), r.__resize_mutation_observer__ = null), r.removeEventListener("scroll", If), r.removeChild(r.__resize_triggers__.triggers), r.__resize_triggers__ = null), r.__resize_listeners__ = null;
    }
    !--Dl && to && to.parentNode.removeChild(to);
  }
}
function qA(r) {
  var t = r.__resize_last__, e = t.width, i = t.height, n = r.offsetWidth, a = r.offsetHeight;
  return n !== e || a !== i ? {
    width: n,
    height: a
  } : null;
}
function KA() {
  var r = Cl(this), t = r.rendered, e = r.detached;
  t !== this.__resize_rendered__ && (!e && this.__resize_triggers__ && (Rf(this), this.addEventListener("scroll", If, !0)), this.__resize_rendered__ = t, Co(this));
}
function If() {
  var r = this;
  Rf(this), this.__resize_raf__ && UA(this.__resize_raf__), this.__resize_raf__ = WA(function() {
    var t = qA(r);
    t && (r.__resize_last__ = t, Co(r));
  });
}
function Co(r) {
  !r || !r.__resize_listeners__ || r.__resize_listeners__.forEach(function(t) {
    t.call(r, r);
  });
}
function QA(r) {
  var t = m_(r, "position");
  (!t || t === "static") && (r.style.position = "relative"), r.__resize_old_position__ = t, r.__resize_last__ = {};
  var e = za("div", {
    className: "resize-triggers"
  }), i = za("div", {
    className: "resize-expand-trigger"
  }), n = za("div"), a = za("div", {
    className: "resize-contract-trigger"
  });
  i.appendChild(n), e.appendChild(i), e.appendChild(a), r.appendChild(e), r.__resize_triggers__ = {
    triggers: e,
    expand: i,
    expandChild: n,
    contract: a
  }, Rf(r), r.addEventListener("scroll", If, !0), r.__resize_last__ = {
    width: r.offsetWidth,
    height: r.offsetHeight
  };
}
function Rf(r) {
  var t = r.__resize_triggers__, e = t.expand, i = t.expandChild, n = t.contract, a = n.scrollWidth, o = n.scrollHeight, s = e.offsetWidth, u = e.offsetHeight, l = e.scrollWidth, f = e.scrollHeight;
  n.scrollLeft = a, n.scrollTop = o, i.style.width = s + 1 + "px", i.style.height = u + 1 + "px", e.scrollLeft = l, e.scrollTop = f;
}
var Se = function() {
  return Se = Object.assign || function(r) {
    for (var t, e = 1, i = arguments.length; e < i; e++)
      for (var n in t = arguments[e])
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    return r;
  }, Se.apply(this, arguments);
};
var jA = ["getWidth", "getHeight", "getDom", "getOption", "resize", "dispatchAction", "convertToPixel", "convertFromPixel", "containPixel", "getDataURL", "getConnectedDataURL", "appendData", "clear", "isDisposed", "dispose"];
function JA(r) {
  return t = /* @__PURE__ */ Object.create(null), jA.forEach(function(e) {
    t[e] = function(i) {
      return function() {
        for (var n = [], a = 0; a < arguments.length; a++)
          n[a] = arguments[a];
        if (!r.value)
          throw new Error("ECharts is not initialized yet.");
        return r.value[i].apply(r.value, n);
      };
    }(e);
  }), t;
  var t;
}
var tE = { autoresize: [Boolean, Object] }, eE = /^on[^a-z]/, gd = function(r) {
  return eE.test(r);
};
function Va(r, t) {
  var e = D_(r) ? md(r) : r;
  return e && typeof e == "object" && "value" in e ? e.value || t : e || t;
}
var rE = "ecLoadingOptions", iE = { loading: Boolean, loadingOptions: Object }, sn = null, w_ = "x-vue-echarts", yd = [], un = [];
(function(r, t) {
  if (r && typeof document < "u") {
    var e, i = t.prepend === !0 ? "prepend" : "append", n = t.singleTag === !0, a = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (n) {
      var o = yd.indexOf(a);
      o === -1 && (o = yd.push(a) - 1, un[o] = {}), e = un[o] && un[o][i] ? un[o][i] : un[o][i] = s();
    } else
      e = s();
    r.charCodeAt(0) === 65279 && (r = r.substring(1)), e.styleSheet ? e.styleSheet.cssText += r : e.appendChild(document.createTextNode(r));
  }
  function s() {
    var u = document.createElement("style");
    if (u.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        u.setAttribute(l[f], t.attributes[l[f]]);
    var h = i === "prepend" ? "afterbegin" : "beforeend";
    return a.insertAdjacentElement(h, u), u;
  }
})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`, {});
var nE = function() {
  if (sn != null)
    return sn;
  if (typeof HTMLElement > "u" || typeof customElements > "u")
    return sn = !1;
  try {
    new Function("tag", `class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(w_);
  } catch {
    return sn = !1;
  }
  return sn = !0;
}(), aE = "ecTheme", oE = "ecInitOptions", sE = "ecUpdateOptions", _d = /(^&?~?!?)native:/, uE = S_({ name: "echarts", props: Se(Se({ option: Object, theme: { type: [Object, String] }, initOptions: Object, updateOptions: Object, group: String, manualUpdate: Boolean }, tE), iE), emits: {}, inheritAttrs: !1, setup: function(r, t) {
  var e = t.attrs, i = jn(), n = jn(), a = jn(), o = jn(), s = Jn(aE, null), u = Jn(oE, null), l = Jn(sE, null), f = x_(r), h = f.autoresize, c = f.manualUpdate, v = f.loading, d = f.loadingOptions, y = Ar(function() {
    return o.value || r.option || null;
  }), p = Ar(function() {
    return r.theme || Va(s, {});
  }), g = Ar(function() {
    return r.initOptions || Va(u, {});
  }), _ = Ar(function() {
    return r.updateOptions || Va(l, {});
  }), m = Ar(function() {
    return function(T) {
      var E = {};
      for (var L in T)
        gd(L) || (E[L] = T[L]);
      return E;
    }(e);
  }), w = {}, S = b_().proxy.$listeners, x = {};
  function b(T) {
    if (n.value) {
      var E = a.value = IT(n.value, p.value, g.value);
      r.group && (E.group = r.group), Object.keys(x).forEach(function(P) {
        var I = x[P];
        if (I) {
          var R = P.toLowerCase();
          R.charAt(0) === "~" && (R = R.substring(1), I.__once__ = !0);
          var H = E;
          if (R.indexOf("zr:") === 0 && (H = E.getZr(), R = R.substring(3)), I.__once__) {
            delete I.__once__;
            var N = I;
            I = function() {
              for (var z = [], G = 0; G < arguments.length; G++)
                z[G] = arguments[G];
              N.apply(void 0, z), H.off(R, I);
            };
          }
          H.on(R, I);
        }
      }), h.value ? M_(function() {
        E && !E.isDisposed() && E.resize(), L();
      }) : L();
    }
    function L() {
      var P = T || y.value;
      P && E.setOption(P, _.value);
    }
  }
  function D() {
    a.value && (a.value.dispose(), a.value = void 0);
  }
  S ? Object.keys(S).forEach(function(T) {
    _d.test(T) ? w[T.replace(_d, "$1")] = S[T] : x[T] = S[T];
  }) : Object.keys(e).filter(function(T) {
    return gd(T);
  }).forEach(function(T) {
    var E = T.charAt(2).toLowerCase() + T.slice(3);
    if (E.indexOf("native:") !== 0)
      E.substring(E.length - 4) === "Once" && (E = "~".concat(E.substring(0, E.length - 4))), x[E] = e[T];
    else {
      var L = "on".concat(E.charAt(7).toUpperCase()).concat(E.slice(8));
      w[L] = e[T];
    }
  });
  var M = null;
  ta(c, function(T) {
    typeof M == "function" && (M(), M = null), T || (M = ta(function() {
      return r.option;
    }, function(E, L) {
      E && (a.value ? a.value.setOption(E, Se({ notMerge: E !== L }, _.value)) : b());
    }, { deep: !0 }));
  }, { immediate: !0 }), ta([p, g], function() {
    D(), b();
  }, { deep: !0 }), kf(function() {
    r.group && a.value && (a.value.group = r.group);
  });
  var A = JA(a);
  return function(T, E, L) {
    var P = Jn(rE, {}), I = Ar(function() {
      return Se(Se({}, Va(P, {})), L == null ? void 0 : L.value);
    });
    kf(function() {
      var R = T.value;
      R && (E.value ? R.showLoading(I.value) : R.hideLoading());
    });
  }(a, v, d), function(T, E, L) {
    var P = null;
    ta([L, T, E], function(I, R, H) {
      var N = I[0], z = I[1], G = I[2];
      if (N && z && G) {
        var j = G === !0 ? {} : G, J = j.throttle, vt = J === void 0 ? 100 : J, Lt = j.onResize, fe = function() {
          z.resize(), Lt == null || Lt();
        };
        P = vt ? Zo(fe, vt) : fe, XA(N, P);
      }
      H(function() {
        N && P && ZA(N, P);
      });
    });
  }(a, h, n), T_(function() {
    b();
  }), C_(function() {
    nE && i.value ? i.value.__dispose = D : D();
  }), Se({ chart: a, root: i, inner: n, setOption: function(T, E) {
    r.manualUpdate && (o.value = T), a.value ? a.value.setOption(T, E || {}) : b(T);
  }, nonEventAttrs: m, nativeListeners: w }, A);
}, render: function() {
  var r = Se(Se({}, this.nonEventAttrs), this.nativeListeners);
  return r.ref = "root", r.class = r.class ? ["echarts"].concat(r.class) : "echarts", Bf(w_, r, [Bf("div", { ref: "inner", class: "vue-echarts-inner" })]);
} });
const fE = {
  __name: "wwElement",
  props: {
    content: { type: Object, default: () => ({}) }
  },
  setup(r) {
    rr([mD, $D, nA, AA, GA]);
    const t = r, e = Ar(() => ({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "#1F2937",
        borderColor: "transparent",
        textStyle: { color: "#F9FAFB", fontSize: 12 }
      },
      legend: { bottom: 0, textStyle: { color: "#6B7280", fontSize: 11 } },
      grid: { left: 16, right: 16, top: 16, bottom: 48, containLabel: !0 },
      xAxis: {
        type: "category",
        data: (t.content.data || []).map((i) => i.portfolio_name),
        axisLabel: { color: "#9CA3AF", fontSize: 10, rotate: 15 }
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#9CA3AF", formatter: (i) => "€" + i + "M" },
        splitLine: { lineStyle: { color: "#F3F4F6" } }
      },
      series: [
        {
          name: "Budget (€M)",
          type: "bar",
          data: (t.content.data || []).map((i) => i.total_budget_m),
          itemStyle: { color: "#7C3AED", borderRadius: [4, 4, 0, 0] },
          barMaxWidth: 32
        },
        {
          name: "Actual Spend (€M)",
          type: "bar",
          data: (t.content.data || []).map((i) => i.actual_spend_m),
          itemStyle: { color: "#14B8A6", borderRadius: [4, 4, 0, 0] },
          barMaxWidth: 32
        }
      ]
    }));
    return (i, n) => (A_(), E_(md(uE), {
      option: e.value,
      autoresize: "",
      style: { height: "100%", width: "100%", "min-height": "300px" }
    }, null, 8, ["option"]));
  }
};
export {
  fE as default
};
