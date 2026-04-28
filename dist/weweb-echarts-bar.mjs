import { computed as Wy, openBlock as Uy, createBlock as Yy, unref as $y } from "vue";
import Xy from "vue-echarts";
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
var nu = function(r, t) {
  return nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, nu(r, t);
};
function k(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  nu(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Zy = function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
}(), qy = function() {
  function r() {
    this.browser = new Zy(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), $e = new qy();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? ($e.wxa = !0, $e.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? $e.worker = !0 : !$e.hasGlobalWindow || "Deno" in window ? ($e.node = !0, $e.svgSupported = !0) : Ky(navigator.userAgent, $e);
function Ky(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
const $ = $e;
var ll = 12, Qy = "sans-serif", kr = ll + "px " + Qy, Jy = 20, jy = 100, tm = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function em(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - Jy) / jy;
    t[i] = n;
  }
  return t;
}
var rm = em(tm), Ai = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = Ai.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || kr), r.measureText(e);
      e = e || "", i = i || kr;
      var a = /((?:\d+)?\.?\d*)px/.exec(i), o = a && +a[1] || ll, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = rm[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  }
}, Xv = Li([
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
}, {}), Zv = Li([
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
}, {}), Ei = Object.prototype.toString, vo = Array.prototype, im = vo.forEach, nm = vo.filter, fl = vo.slice, am = vo.map, gf = (function() {
}).constructor, $n = gf ? gf.prototype : null, hl = "__proto__", om = 2311;
function qv() {
  return om++;
}
function Pr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function Q(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Ei.call(r);
  if (e === "[object Array]") {
    if (!cn(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = Q(r[i]);
    }
  } else if (Zv[e]) {
    if (!cn(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!Xv[e] && !cn(r) && !Tn(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== hl && (t[o] = Q(r[o]));
  }
  return t;
}
function tt(r, t, e) {
  if (!V(t) || !V(r))
    return e ? Q(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== hl) {
      var n = r[i], a = t[i];
      V(a) && V(n) && !N(a) && !N(n) && !Tn(a) && !Tn(n) && !yf(a) && !yf(n) && !cn(a) && !cn(n) ? tt(n, a, e) : (e || !(i in r)) && (r[i] = Q(t[i]));
    }
  return r;
}
function O(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== hl && (r[e] = t[e]);
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
function sm(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var n in e)
    e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  r.prototype.constructor = r, r.superClass = t;
}
function Ce(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else
    at(r, t, e);
}
function Ht(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function T(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === im)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function H(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return cl(r);
  if (r.map && r.map === am)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function Li(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function wt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return cl(r);
  if (r.filter && r.filter === nm)
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
function um(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(fl.call(arguments)));
  };
}
var ft = $n && U($n.bind) ? $n.call.bind($n.bind) : um;
function vt(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(fl.call(arguments)));
  };
}
function N(r) {
  return Array.isArray ? Array.isArray(r) : Ei.call(r) === "[object Array]";
}
function U(r) {
  return typeof r == "function";
}
function F(r) {
  return typeof r == "string";
}
function Wa(r) {
  return Ei.call(r) === "[object String]";
}
function ht(r) {
  return typeof r == "number";
}
function V(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function yf(r) {
  return !!Xv[Ei.call(r)];
}
function Rt(r) {
  return !!Zv[Ei.call(r)];
}
function Tn(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function po(r) {
  return r.colorStops != null;
}
function lm(r) {
  return r.image != null;
}
function fm(r) {
  return Ei.call(r) === "[object RegExp]";
}
function Cn(r) {
  return r !== r;
}
function Br() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++)
    if (r[e] != null)
      return r[e];
}
function X(r, t) {
  return r ?? t;
}
function ci(r, t, e) {
  return r ?? t ?? e;
}
function cl(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return fl.apply(r, t);
}
function Kv(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function Z(r, t) {
  if (!r)
    throw new Error(t);
}
function Se(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Qv = "__ec_primitive__";
function au(r) {
  r[Qv] = !0;
}
function cn(r) {
  return r[Qv];
}
var hm = function() {
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
}(), Jv = typeof Map == "function";
function cm() {
  return Jv ? /* @__PURE__ */ new Map() : new hm();
}
var vm = function() {
  function r(t) {
    var e = N(t);
    this.data = cm();
    var i = this;
    t instanceof r ? t.each(n) : t && T(t, n);
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
    return Jv ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function q(r) {
  return new vm(r);
}
function dm(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function go(r, t) {
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
function jv(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Fr(r, t) {
  return r.hasOwnProperty(t);
}
function zt() {
}
var pm = 180 / Math.PI;
function Pi(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function gm(r) {
  return [r[0], r[1]];
}
function mf(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function ym(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function mm(r) {
  return Math.sqrt(_m(r));
}
function _m(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function zo(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function wm(r, t) {
  var e = mm(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function ou(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Sm = ou;
function xm(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var vi = xm;
function oe(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function ui(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function li(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var Ur = function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), bm = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Ur(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new Ur(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new Ur(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new Ur(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new Ur(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Ur(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}();
const Tm = bm;
var Cm = function() {
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
const De = Cm;
var Dm = Math.log(2);
function su(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~n) / Dm);
    return r[e][u];
  }
  for (var l = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n || (h += (v % 2 ? -1 : 1) * r[e][c] * su(r, t - 1, f, l, n | d, a), v++);
  }
  return a[o] = h, h;
}
function _f(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = su(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * su(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var wf = "___zrEVENTSAVED", Ho = [];
function Mm(r, t, e, i, n) {
  return uu(Ho, t, i, n, !0) && uu(r, e, Ho[0], Ho[1]);
}
function uu(r, t, e, i, n) {
  if (t.getBoundingClientRect && $.domSupported && !td(t)) {
    var a = t[wf] || (t[wf] = {}), o = Am(t, a), s = Em(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function Am(r, t) {
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
function Em(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && n ? n : (t.srcCoords = o, t[i] = e ? _f(s, o) : _f(o, s));
}
function td(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var Lm = /([&<>"'])/g, Pm = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function kt(r) {
  return r == null ? "" : (r + "").replace(Lm, function(t, e) {
    return Pm[e];
  });
}
var Im = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Go = [], Rm = $.browser.firefox && +$.browser.version.split(".")[0] < 39;
function lu(r, t, e, i) {
  return e = e || {}, i ? Sf(r, t, e) : Rm && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Sf(r, t, e), e;
}
function Sf(r, t, e) {
  if ($.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (td(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (uu(Go, r, i, n)) {
      e.zrX = Go[0], e.zrY = Go[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function vl(r) {
  return r || window.event;
}
function jt(r, t, e) {
  if (t = vl(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && lu(r, o, t, e);
  } else {
    lu(r, t, t, e);
    var a = Om(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && Im.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function Om(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function Nm(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function km(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var ed = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, Bm = function() {
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
        var u = n[o], l = lu(i, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Wo)
      if (Wo.hasOwnProperty(e)) {
        var i = Wo[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
}();
function xf(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function Fm(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var Wo = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = xf(i) / xf(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = Fm(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function di() {
  return [1, 0, 0, 1, 0, 0];
}
function dl(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function Vm(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function pi(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function fu(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function pl(r, t, e, i) {
  i === void 0 && (i = [0, 0]);
  var n = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = n * h + s * f, r[1] = -n * f + s * h, r[2] = a * h + u * f, r[3] = -a * f + h * u, r[4] = h * (o - i[0]) + f * (l - i[1]) + i[0], r[5] = h * (l - i[1]) - f * (o - i[0]) + i[1], r;
}
function zm(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function gl(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * i;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -i * u, r[3] = e * u, r[4] = (i * s - o * n) * u, r[5] = (a * n - e * s) * u, r) : null;
}
var Hm = function() {
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
const nt = Hm;
var Xn = Math.min, Zn = Math.max, ar = new nt(), or = new nt(), sr = new nt(), ur = new nt(), Bi = new nt(), Fi = new nt(), Gm = function() {
  function r(t, e, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }
  return r.prototype.union = function(t) {
    var e = Xn(t.x, this.x), i = Xn(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Zn(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Zn(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, n = t.height / e.height, a = di();
    return fu(a, a, [-e.x, -e.y]), zm(a, a, [i, n]), fu(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < u || l < n || s < f || h < o);
    if (e) {
      var v = 1 / 0, d = 0, y = Math.abs(a - u), p = Math.abs(l - n), g = Math.abs(s - f), m = Math.abs(h - o), _ = Math.min(y, p), w = Math.min(g, m);
      a < u || l < n ? _ > d && (d = _, y < p ? nt.set(Fi, -y, 0) : nt.set(Fi, p, 0)) : _ < v && (v = _, y < p ? nt.set(Bi, y, 0) : nt.set(Bi, -p, 0)), s < f || h < o ? w > d && (d = w, g < m ? nt.set(Fi, 0, -g) : nt.set(Fi, 0, m)) : _ < v && (v = _, g < m ? nt.set(Bi, 0, g) : nt.set(Bi, 0, -m));
    }
    return e && nt.copy(e, c ? Bi : Fi), c;
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
    ar.x = sr.x = e.x, ar.y = ur.y = e.y, or.x = ur.x = e.x + e.width, or.y = sr.y = e.y + e.height, ar.transform(i), ur.transform(i), or.transform(i), sr.transform(i), t.x = Xn(ar.x, or.x, sr.x, ur.x), t.y = Xn(ar.y, or.y, sr.y, ur.y);
    var u = Zn(ar.x, or.x, sr.x, ur.x), l = Zn(ar.y, or.y, sr.y, ur.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r;
}();
const et = Gm;
var rd = "silent";
function Wm(r, t, e) {
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
    stop: Um
  };
}
function Um() {
  ed(this.event);
}
var Ym = function(r) {
  k(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(De), Vi = function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), $m = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Uo = new et(0, 0, 0, 0), id = function(r) {
  k(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new Vi(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new Ym(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new Tm(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (T($m, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = nd(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Vi(i, n) : this.findHover(i, n), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new Vi(0, 0);
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
      for (var o = "on" + i, s = Wm(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new Vi(e, i);
    if (bf(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new et(e - l, i - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== n && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Uo.copy(c.getBoundingRect()), c.transform && Uo.applyTransform(c.transform), Uo.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, y = Math.PI * 2, p = 0; p < l; p += v)
          for (var g = 0; g < y; g += d) {
            var m = e + p * Math.cos(g), _ = i + p * Math.sin(g);
            if (bf(s, o, m, _, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new Bm());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new Vi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(De);
T(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  id.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = nd(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Sm(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function Xm(r, t, e) {
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
    return n ? rd : !0;
  }
  return !1;
}
function bf(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = Xm(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== rd)) {
      t.target = o;
      break;
    }
  }
}
function nd(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
const Zm = id;
var ad = 32, zi = 7;
function qm(r) {
  for (var t = 0; r >= ad; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function Tf(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    Km(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function Km(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function Cf(r, t, e, i, n) {
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
function Yo(r, t, e, i, n, a) {
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
function $o(r, t, e, i, n, a) {
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
function Qm(r, t) {
  var e = zi, i, n, a = 0, o = [];
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
    var m = $o(r[p], r, d, y, 0, t);
    d += m, y -= m, y !== 0 && (g = Yo(r[d + y - 1], r, p, g, g - 1, t), g !== 0 && (y <= g ? h(d, y, p, g) : c(d, y, p, g)));
  }
  function h(v, d, y, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[v + g];
    var m = 0, _ = y, w = v;
    if (r[w++] = r[_++], --p === 0) {
      for (g = 0; g < d; g++)
        r[w + g] = o[m + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[_ + g];
      r[w + p] = o[m];
      return;
    }
    for (var S = e, x, b, D; ; ) {
      x = 0, b = 0, D = !1;
      do
        if (t(r[_], o[m]) < 0) {
          if (r[w++] = r[_++], b++, x = 0, --p === 0) {
            D = !0;
            break;
          }
        } else if (r[w++] = o[m++], x++, b = 0, --d === 1) {
          D = !0;
          break;
        }
      while ((x | b) < S);
      if (D)
        break;
      do {
        if (x = $o(r[_], o, m, d, 0, t), x !== 0) {
          for (g = 0; g < x; g++)
            r[w + g] = o[m + g];
          if (w += x, m += x, d -= x, d <= 1) {
            D = !0;
            break;
          }
        }
        if (r[w++] = r[_++], --p === 0) {
          D = !0;
          break;
        }
        if (b = Yo(o[m], r, _, p, 0, t), b !== 0) {
          for (g = 0; g < b; g++)
            r[w + g] = r[_ + g];
          if (w += b, _ += b, p -= b, p === 0) {
            D = !0;
            break;
          }
        }
        if (r[w++] = o[m++], --d === 1) {
          D = !0;
          break;
        }
        S--;
      } while (x >= zi || b >= zi);
      if (D)
        break;
      S < 0 && (S = 0), S += 2;
    }
    if (e = S, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[_ + g];
      r[w + p] = o[m];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[w + g] = o[m + g];
    }
  }
  function c(v, d, y, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = r[y + g];
    var m = v + d - 1, _ = p - 1, w = y + p - 1, S = 0, x = 0;
    if (r[w--] = r[m--], --d === 0) {
      for (S = w - (p - 1), g = 0; g < p; g++)
        r[S + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, m -= d, x = w + 1, S = m + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[S + g];
      r[w] = o[_];
      return;
    }
    for (var b = e; ; ) {
      var D = 0, M = 0, A = !1;
      do
        if (t(o[_], r[m]) < 0) {
          if (r[w--] = r[m--], D++, M = 0, --d === 0) {
            A = !0;
            break;
          }
        } else if (r[w--] = o[_--], M++, D = 0, --p === 1) {
          A = !0;
          break;
        }
      while ((D | M) < b);
      if (A)
        break;
      do {
        if (D = d - $o(o[_], r, v, d, d - 1, t), D !== 0) {
          for (w -= D, m -= D, d -= D, x = w + 1, S = m + 1, g = D - 1; g >= 0; g--)
            r[x + g] = r[S + g];
          if (d === 0) {
            A = !0;
            break;
          }
        }
        if (r[w--] = o[_--], --p === 1) {
          A = !0;
          break;
        }
        if (M = p - Yo(r[m], o, 0, p, p - 1, t), M !== 0) {
          for (w -= M, _ -= M, p -= M, x = w + 1, S = _ + 1, g = 0; g < M; g++)
            r[x + g] = o[S + g];
          if (p <= 1) {
            A = !0;
            break;
          }
        }
        if (r[w--] = r[m--], --d === 0) {
          A = !0;
          break;
        }
        b--;
      } while (D >= zi || M >= zi);
      if (A)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (e = b, e < 1 && (e = 1), p === 1) {
      for (w -= d, m -= d, x = w + 1, S = m + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[S + g];
      r[w] = o[_];
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
function La(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < ad) {
      a = Tf(r, e, i, t), Cf(r, e, i, e + a, t);
      return;
    }
    var o = Qm(r, t), s = qm(n);
    do {
      if (a = Tf(r, e, i, t), a < s) {
        var u = n;
        u > s && (u = s), Cf(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var $t = 1, nn = 2, oi = 4, Df = !1;
function Xo() {
  Df || (Df = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Mf(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var Jm = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Mf;
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
    i.length = this._displayListLen, La(i, Mf);
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
          t.__dirty && (l.__dirty |= $t), this._updateAndAddDisplayable(l, e, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Xo(), f.z = 0), isNaN(f.z2) && (Xo(), f.z2 = 0), isNaN(f.zlevel) && (Xo(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
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
const jm = Jm;
var od;
od = $.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
const hu = od;
var Pa = {
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
    return 1 - Pa.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? Pa.bounceIn(r * 2) * 0.5 : Pa.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
};
const sd = Pa;
var qn = Math.pow, Qe = Math.sqrt, Ua = 1e-8, ud = 1e-4, Af = Qe(3), Kn = 1 / 3, we = Pi(), re = Pi(), gi = Pi();
function qe(r) {
  return r > -Ua && r < Ua;
}
function ld(r) {
  return r > Ua || r < -Ua;
}
function _t(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function Ef(r, t, e, i, n) {
  var a = 1 - n;
  return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n);
}
function fd(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), u = 3 * (t - r), l = r - n, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (qe(f) && qe(h))
    if (qe(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var y = h * h - 4 * f * c;
    if (qe(y)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (y > 0) {
      var m = Qe(y), _ = f * s + 1.5 * o * (-h + m), w = f * s + 1.5 * o * (-h - m);
      _ < 0 ? _ = -qn(-_, Kn) : _ = qn(_, Kn), w < 0 ? w = -qn(-w, Kn) : w = qn(w, Kn);
      var d = (-s - (_ + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var S = (2 * f * s - 3 * o * h) / (2 * Qe(f * f * f)), x = Math.acos(S) / 3, b = Qe(f), D = Math.cos(x), d = (-s - 2 * b * D) / (3 * o), g = (-s + b * (D + Af * Math.sin(x))) / (3 * o), M = (-s + b * (D - Af * Math.sin(x))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), M >= 0 && M <= 1 && (a[v++] = M);
    }
  }
  return v;
}
function hd(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (qe(o)) {
    if (ld(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (qe(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = Qe(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function Ya(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, u = (i - e) * n + e, l = (s - o) * n + o, f = (u - s) * n + s, h = (f - l) * n + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = i;
}
function t_(r, t, e, i, n, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, y, p, g;
  we[0] = u, we[1] = l;
  for (var m = 0; m < 1; m += 0.05)
    re[0] = _t(r, e, n, o, m), re[1] = _t(t, i, a, s, m), p = vi(we, re), p < v && (h = m, v = p);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(c < ud); _++)
    d = h - c, y = h + c, re[0] = _t(r, e, n, o, d), re[1] = _t(t, i, a, s, d), p = vi(re, we), d >= 0 && p < v ? (h = d, v = p) : (gi[0] = _t(r, e, n, o, y), gi[1] = _t(t, i, a, s, y), g = vi(gi, we), y <= 1 && g < v ? (h = y, v = g) : c *= 0.5);
  return f && (f[0] = _t(r, e, n, o, h), f[1] = _t(t, i, a, s, h)), Qe(v);
}
function e_(r, t, e, i, n, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, y = _t(r, e, n, o, d), p = _t(t, i, a, s, d), g = y - l, m = p - f;
    h += Math.sqrt(g * g + m * m), l = y, f = p;
  }
  return h;
}
function Ct(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function Lf(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function r_(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, u = 0;
  if (qe(a)) {
    if (ld(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (qe(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l);
    } else if (f > 0) {
      var h = Qe(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function cd(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function $a(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function i_(r, t, e, i, n, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  we[0] = o, we[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    re[0] = Ct(r, e, n, c), re[1] = Ct(t, i, a, c);
    var v = vi(we, re);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < ud); d++) {
    var y = l - f, p = l + f;
    re[0] = Ct(r, e, n, y), re[1] = Ct(t, i, a, y);
    var v = vi(re, we);
    if (y >= 0 && v < h)
      l = y, h = v;
    else {
      gi[0] = Ct(r, e, n, p), gi[1] = Ct(t, i, a, p);
      var g = vi(gi, we);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return u && (u[0] = Ct(r, e, n, l), u[1] = Ct(t, i, a, l)), Qe(h);
}
function n_(r, t, e, i, n, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = Ct(r, e, n, c), d = Ct(t, i, a, c), y = v - s, p = d - u;
    l += Math.sqrt(y * y + p * p), s = v, u = d;
  }
  return l;
}
var a_ = /cubic-bezier\(([0-9,\.e ]+)\)/;
function vd(r) {
  var t = r && a_.exec(r);
  if (t) {
    var e = t[1].split(","), i = +Se(e[0]), n = +Se(e[1]), a = +Se(e[2]), o = +Se(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : fd(0, i, a, 1, u, s) && _t(0, n, o, 1, s[0]);
    };
  }
}
var o_ = function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || zt, this.ondestroy = t.ondestroy || zt, this.onrestart = t.onrestart || zt, t.easing && this.setEasing(t.easing);
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
    this.easing = t, this.easingFunc = U(t) ? t : sd[t] || vd(t);
  }, r;
}();
const s_ = o_;
var dd = function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), u_ = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new dd(t);
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
}(), l_ = function() {
  function r(t) {
    this._list = new u_(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = i.head;
        i.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new dd(e), s.key = t, i.insertEntry(s), n[t] = s;
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
const Vn = l_;
var Pf = {
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
function vn(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function If(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Zo(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? vn(parseFloat(t) / 100 * 255) : vn(parseInt(t, 10));
}
function dn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? If(parseFloat(t) / 100) : If(parseFloat(t));
}
function qo(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function Jt(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function cu(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var pd = new Vn(20), Qn = null;
function Yr(r, t) {
  Qn && cu(Qn, t), Qn = pd.put(r, Qn || t.slice());
}
function Ir(r, t) {
  if (r) {
    t = t || [];
    var e = pd.get(r);
    if (e)
      return cu(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in Pf)
      return cu(t, Pf[i]), Yr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          Jt(t, 0, 0, 0, 1);
          return;
        }
        return Jt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), Yr(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          Jt(t, 0, 0, 0, 1);
          return;
        }
        return Jt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), Yr(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o), l = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? Jt(t, +l[0], +l[1], +l[2], 1) : Jt(t, 0, 0, 0, 1);
          f = dn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return Jt(t, Zo(l[0]), Zo(l[1]), Zo(l[2]), l.length === 3 ? f : dn(l[3])), Yr(r, t), t;
          Jt(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            Jt(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = dn(l[3]), Rf(l, t), Yr(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            Jt(t, 0, 0, 0, 1);
            return;
          }
          return Rf(l, t), Yr(r, t), t;
        default:
          return;
      }
    }
    Jt(t, 0, 0, 0, 1);
  }
}
function Rf(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = dn(r[1]), n = dn(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], Jt(t, vn(qo(o, a, e + 1 / 3) * 255), vn(qo(o, a, e) * 255), vn(qo(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function Of(r, t) {
  var e = Ir(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return yl(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function yl(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Xa(r, t) {
  var e = Ir(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var Nf = new Vn(100);
function kf(r) {
  if (F(r)) {
    var t = Nf.get(r);
    return t || (t = Of(r, -0.1), Nf.put(r, t)), t;
  } else if (po(r)) {
    var e = O({}, r);
    return e.colorStops = H(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: Of(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function f_(r) {
  return r.type === "linear";
}
function h_(r) {
  return r.type === "radial";
}
(function() {
  return $.hasGlobalWindow && U(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && Pr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var vu = Array.prototype.slice;
function Le(r, t, e) {
  return (t - r) * e + r;
}
function Ko(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = Le(t[a], e[a], i);
  return r;
}
function c_(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = Le(t[o][s], e[o][s], i);
  }
  return r;
}
function Jn(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function Bf(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function v_(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function d_(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var u = a; u < o; u++)
          i.push(e === 1 ? n[u] : vu.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (e === 1)
        isNaN(i[u]) && (i[u] = n[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function Ia(r) {
  if (Ht(r)) {
    var t = r.length;
    if (Ht(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(vu.call(r[i]));
      return e;
    }
    return vu.call(r);
  }
  return r;
}
function Ra(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function p_(r) {
  return Ht(r && r[0]) ? 2 : 1;
}
var jn = 0, Oa = 1, gd = 2, an = 3, du = 4, pu = 5, Ff = 6;
function Vf(r) {
  return r === du || r === pu;
}
function ta(r) {
  return r === Oa || r === gd;
}
var Hi = [0, 0, 0, 0], g_ = function() {
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
    var n = this.keyframes, a = n.length, o = !1, s = Ff, u = e;
    if (Ht(e)) {
      var l = p_(e);
      s = l, (l === 1 && !ht(e[0]) || l === 2 && !ht(e[0][0])) && (o = !0);
    } else if (ht(e) && !Cn(e))
      s = jn;
    else if (F(e))
      if (!isNaN(+e))
        s = jn;
      else {
        var f = Ir(e);
        f && (u = f, s = an);
      }
    else if (po(e)) {
      var h = O({}, u);
      h.colorStops = H(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Ir(v.color)
        };
      }), f_(e) ? s = du : h_(e) && (s = pu), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Ff) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return i && (c.easing = i, c.easingFunc = U(i) ? i : sd[i] || vd(i)), n.push(c), c;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(y, p) {
      return y.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, u = ta(n), l = Vf(n), f = 0; f < a; f++) {
      var h = i[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? d_(c, v, n) : l && v_(c.colorStops, v.colorStops));
    }
    if (!s && n !== pu && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === jn ? i[f].additiveValue = i[f].value - d : n === an ? i[f].additiveValue = Jn([], i[f].value, d, -1) : ta(n) && (i[f].additiveValue = n === Oa ? Jn([], i[f].value, d, -1) : Bf([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === an, f, h = this._lastFr, c = Math.min, v, d;
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
        var m = i ? this._additiveValue : l ? Hi : t[u];
        if ((ta(a) || l) && !m && (m = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (ta(a))
          a === Oa ? Ko(m, v[n], d[n], g) : c_(m, v[n], d[n], g);
        else if (Vf(a)) {
          var _ = v[n], w = d[n], S = a === du;
          t[u] = {
            type: S ? "linear" : "radial",
            x: Le(_.x, w.x, g),
            y: Le(_.y, w.y, g),
            colorStops: H(_.colorStops, function(b, D) {
              var M = w.colorStops[D];
              return {
                offset: Le(b.offset, M.offset, g),
                color: Ra(Ko([], b.color, M.color, g))
              };
            }),
            global: w.global
          }, S ? (t[u].x2 = Le(_.x2, w.x2, g), t[u].y2 = Le(_.y2, w.y2, g)) : t[u].r = Le(_.r, w.r, g);
        } else if (l)
          Ko(m, v[n], d[n], g), i || (t[u] = Ra(m));
        else {
          var x = Le(v[n], d[n], g);
          i ? this._additiveValue = x : t[u] = x;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === jn ? t[i] = t[i] + n : e === an ? (Ir(t[i], Hi), Jn(Hi, Hi, n, 1), t[i] = Ra(Hi)) : e === Oa ? Jn(t[i], t[i], n, 1) : e === gd && Bf(t[i], t[i], n, 1);
  }, r;
}(), y_ = function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      Pr("Can' use additive animation on looped animation.");
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
        u = a[s] = new g_(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === an && l && (l = Ra(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, Ia(l), n), this._trackKeys.push(s);
      }
      u.addKeyframe(t, Ia(e[s]), n);
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
        var c = new s_({
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
    return H(this._trackKeys, function(e) {
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
          u && (t[a] = Ia(u.rawValue));
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
const ml = y_;
function fi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var m_ = function(r) {
  k(t, r);
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
    for (var i = fi() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (hu(i), !e._paused && e.update());
    }
    hu(i);
  }, t.prototype.start = function() {
    this._running || (this._time = fi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = fi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += fi() - this._pauseStart, this._paused = !1);
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
    var n = new ml(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(De);
const __ = m_;
var w_ = 300, Qo = $.domSupported, Jo = function() {
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
  }, i = H(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
}(), zf = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Hf = !1;
function gu(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function S_(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function jo(r) {
  r && (r.zrByTouch = !0);
}
function x_(r, t) {
  return jt(r.dom, new b_(r, t), !0);
}
function yd(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var b_ = function() {
  function r(t, e) {
    this.stopPropagation = zt, this.stopImmediatePropagation = zt, this.preventDefault = zt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), ce = {
  mousedown: function(r) {
    r = jt(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = jt(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = jt(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = jt(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    yd(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    Hf = !0, r = jt(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    Hf || (r = jt(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = jt(this.dom, r), jo(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), ce.mousemove.call(this, r), ce.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = jt(this.dom, r), jo(r), this.handler.processGesture(r, "change"), ce.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = jt(this.dom, r), jo(r), this.handler.processGesture(r, "end"), ce.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < w_ && ce.click.call(this, r);
  },
  pointerdown: function(r) {
    ce.mousedown.call(this, r);
  },
  pointermove: function(r) {
    gu(r) || ce.mousemove.call(this, r);
  },
  pointerup: function(r) {
    ce.mouseup.call(this, r);
  },
  pointerout: function(r) {
    gu(r) || ce.mouseout.call(this, r);
  }
};
T(["click", "dblclick", "contextmenu"], function(r) {
  ce[r] = function(t) {
    t = jt(this.dom, t), this.trigger(r, t);
  };
});
var yu = {
  pointermove: function(r) {
    gu(r) || yu.mousemove.call(this, r);
  },
  pointerup: function(r) {
    yu.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function T_(r, t) {
  var e = t.domHandlers;
  $.pointerEventsSupported ? T(Jo.pointer, function(i) {
    Na(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : ($.touchEventsSupported && T(Jo.touch, function(i) {
    Na(t, i, function(n) {
      e[i].call(r, n), S_(t);
    });
  }), T(Jo.mouse, function(i) {
    Na(t, i, function(n) {
      n = vl(n), t.touching || e[i].call(r, n);
    });
  }));
}
function C_(r, t) {
  $.pointerEventsSupported ? T(zf.pointer, e) : $.touchEventsSupported || T(zf.mouse, e);
  function e(i) {
    function n(a) {
      a = vl(a), yd(r, a.target) || (a = x_(r, a), t.domHandlers[i].call(r, a));
    }
    Na(t, i, n, { capture: !0 });
  }
}
function Na(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, Nm(r.domTarget, t, e, i);
}
function ts(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && km(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Gf = function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), D_ = function(r) {
  k(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new Gf(e, ce), Qo && (n._globalHandlerScope = new Gf(document, yu)), T_(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    ts(this._localHandlerScope), Qo && ts(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, Qo && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? C_(this, i) : ts(i);
    }
  }, t;
}(De);
const M_ = D_;
var md = 1;
$.hasGlobalWindow && (md = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Za = md, mu = 0.4, _u = "#333", wu = "#ccc", A_ = "#eee", Wf = dl, Uf = 5e-5;
function lr(r) {
  return r > Uf || r < -Uf;
}
var fr = [], $r = [], es = di(), rs = Math.abs, E_ = function() {
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
    return lr(this.rotation) || lr(this.x) || lr(this.y) || lr(this.scaleX - 1) || lr(this.scaleY - 1) || lr(this.skewX) || lr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (Wf(i), this.invTransform = null);
      return;
    }
    i = i || di(), e ? this.getLocalTransform(i) : Wf(i), t && (e ? pi(i, t, i) : Vm(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(fr);
      var i = fr[0] < 0 ? -1 : 1, n = fr[1] < 0 ? -1 : 1, a = ((fr[0] - i) * e + i) / fr[0] || 0, o = ((fr[1] - n) * e + n) / fr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || di(), gl(this.invTransform, t);
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
      t && t.transform && (t.invTransform = t.invTransform || di(), pi($r, t.invTransform, e), e = $r);
      var i = this.originX, n = this.originY;
      (i || n) && (es[4] = i, es[5] = n, pi($r, e, es), $r[4] -= i, $r[5] -= n, e = $r), this.setLocalTransform(e);
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
    return t && rs(t[0] - 1) > 1e-10 && rs(t[3] - 1) > 1e-10 ? Math.sqrt(rs(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    L_(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || u) {
      var d = i + s, y = n + u;
      e[4] = -d * a - c * y * o, e[5] = -y * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, l && pl(e, e, l), e[4] += i + f, e[5] += n + h, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), Dn = [
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
function L_(r, t) {
  for (var e = 0; e < Dn.length; e++) {
    var i = Dn[e];
    r[i] = t[i];
  }
}
const _l = E_;
var Yf = {};
function Xt(r, t) {
  t = t || kr;
  var e = Yf[t];
  e || (e = Yf[t] = new Vn(500));
  var i = e.get(r);
  return i == null && (i = Ai.measureText(r, t).width, e.put(r, i)), i;
}
function $f(r, t, e, i) {
  var n = Xt(r, t), a = Sl(t), o = on(0, n, e), s = si(0, a, i), u = new et(o, s, n, a);
  return u;
}
function wl(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return $f(n[0], t, e, i);
  for (var o = new et(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = $f(n[s], t, e, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function on(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function si(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function Sl(r) {
  return Xt("国", r);
}
function Je(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function qa(r, t, e) {
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
var is = "__zr_normal__", ns = Dn.concat(["ignore"]), P_ = Li(Dn, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Xr = {}, I_ = new et(0, 0, 0, 0), xl = function() {
  function r(t) {
    this.id = qv(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
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
        var f = I_;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Xr, i, f) : qa(Xr, i, f), a.x = Xr.x, a.y = Xr.y, o = Xr.align, s = Xr.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var c = void 0, v = void 0;
          h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Je(h[0], f.width), v = Je(h[1], f.height)), l = !0, a.originX = -a.x + c + (n ? 0 : f.x), a.originY = -a.y + v + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var y = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, m = void 0, _ = void 0;
      y && this.canBeInsideText() ? (g = i.insideFill, m = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(g), _ = !0)) : (g = i.outsideFill, m = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(g), _ = !0)), g = g || "#000", (g !== p.fill || m !== p.stroke || _ !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = m, p.autoStroke = _, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= $t, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? wu : _u;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Ir(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, yl(i, "rgba");
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
      if (!(n.getLoop() || a && a !== is)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ns);
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
    this.useState(is, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === is, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(it(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          Pr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !i && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, c = this._textGuide;
        return h && h.useState(t, e, i, f), c && c.useState(t, e, i, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~$t), l;
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
      y && y.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~$t);
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
    for (var u = {}, l = !1, f = 0; f < ns.length; f++) {
      var h = ns[f], c = a && P_[h];
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
      t.innerTransformable = new _l(), this._attachComponent(t), this._textContent = t, this.markRedraw();
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
    this.__dirty |= $t;
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
      Pr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new ml(n, e, i);
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
    as(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    as(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = as(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = $t;
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
Ce(xl, De);
Ce(xl, _l);
function as(r, t, e, i, n) {
  e = e || {};
  var a = [];
  _d(r, "", r, t, e, i, a, n);
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
function os(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function R_(r) {
  return Ht(r[0]);
}
function O_(r, t, e) {
  if (Ht(t[e]))
    if (Ht(r[e]) || (r[e] = []), Rt(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), os(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (R_(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? os(a[u], n[u], s) : a[u] = Array.prototype.slice.call(n[u]);
      else
        os(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function N_(r, t) {
  return r === t || Ht(r) && Ht(t) && k_(r, t);
}
function k_(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function _d(r, t, e, i, n, a, o, s) {
  for (var u = lt(i), l = n.duration, f = n.delay, h = n.additive, c = n.setToFinal, v = !V(a), d = r.animators, y = [], p = 0; p < u.length; p++) {
    var g = u[p], m = i[g];
    if (m != null && e[g] != null && (v || a[g]))
      if (V(m) && !Ht(m) && !po(m)) {
        if (t) {
          s || (e[g] = m, r.updateDuringAnimation(t));
          continue;
        }
        _d(r, g, e[g], m, n, a && a[g], o, s);
      } else
        y.push(g);
    else
      s || (e[g] = m, r.updateDuringAnimation(t), y.push(g));
  }
  var _ = y.length;
  if (!h && _)
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
  if (n.force || (y = wt(y, function(C) {
    return !N_(i[C], e[C]);
  }), _ = y.length), _ > 0 || n.force && !o.length) {
    var D = void 0, M = void 0, A = void 0;
    if (s) {
      M = {}, c && (D = {});
      for (var w = 0; w < _; w++) {
        var g = y[w];
        M[g] = e[g], c ? D[g] = i[g] : e[g] = i[g];
      }
    } else if (c) {
      A = {};
      for (var w = 0; w < _; w++) {
        var g = y[w];
        A[g] = Ia(e[g]), O_(e, i, g);
      }
    }
    var S = new ml(e, !1, !1, h ? wt(d, function(E) {
      return E.targetName === t;
    }) : null);
    S.targetName = t, n.scope && (S.scope = n.scope), c && D && S.whenWithKeys(0, D, y), A && S.whenWithKeys(0, A, y), S.whenWithKeys(l ?? 500, s ? M : i, y).delay(f || 0), r.addAnimator(S, t), o.push(S);
  }
}
const wd = xl;
var Sd = function(r) {
  k(t, r);
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
    for (var i = new et(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (et.applyTransform(i, l, f), o = o || i.clone(), o.union(i)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || i;
  }, t;
}(wd);
Sd.prototype.type = "group";
const se = Sd;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var sn = {}, xd = {};
function B_(r) {
  delete xd[r];
}
function F_(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Xa(r, 1) < mu;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += Xa(t[n].color, 1);
    return e /= i, e < mu;
  }
  return !1;
}
var V_ = function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new jm(), o = i.renderer || "canvas";
    if (sn[o] || (o = lt(sn)[0]), process.env.NODE_ENV !== "production" && !sn[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new sn[o](e, a, i, t), u = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !$.node && !$.worker && !u ? new M_(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, h = f == null || f === "auto" ? $.touchEventsSupported : !!f, c = 44, v;
    h && (v = X(i.pointerSize, c)), this.handler = new Zm(a, s, l, s.root, v), this.animation = new __({
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
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = F_(t));
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
    var e, i = fi();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var n = fi();
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
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, B_(this.id));
  }, r;
}();
function Xf(r, t) {
  var e = new V_(qv(), r, t);
  return xd[e.id] = e, e;
}
function z_(r, t) {
  sn[r] = t;
}
var Zf = 1e-4, bd = 20;
function H_(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function qf(r, t, e, i) {
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
function Pt(r, t) {
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
  return F(r) ? H_(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function gt(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), bd), r = (+r).toFixed(t), e ? r : +r;
}
function Mn(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return Su(r);
}
function Su(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function G_(r, t) {
  var e = Math.log, i = Math.LN10, n = Math.floor(e(r[1] - r[0]) / i), a = Math.round(e(Math.abs(t[1] - t[0])) / i), o = Math.min(Math.max(-n + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function W_(r, t) {
  var e = Math.max(Mn(r), Mn(t)), i = r + t;
  return e > bd ? i : gt(i, e);
}
function Td(r) {
  var t = Math.PI * 2;
  return (r % t + t) % t;
}
function Ka(r) {
  return r > -Zf && r < Zf;
}
var U_ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Oe(r) {
  if (r instanceof Date)
    return r;
  if (F(r)) {
    var t = U_.exec(r);
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
function Y_(r) {
  return Math.pow(10, yo(r));
}
function yo(r) {
  if (r === 0)
    return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function Cd(r, t) {
  var e = yo(r), i = Math.pow(10, e), n = r / i, a;
  return t ? n < 1.5 ? a = 1 : n < 2.5 ? a = 2 : n < 4 ? a = 3 : n < 7 ? a = 5 : a = 10 : n < 1 ? a = 1 : n < 2 ? a = 2 : n < 3 ? a = 3 : n < 5 ? a = 5 : a = 10, r = a * i, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
}
function Qa(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !F(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function Dd(r) {
  return !isNaN(Qa(r));
}
function Md() {
  return Math.round(Math.random() * 9);
}
function Ad(r, t) {
  return t === 0 ? r : Ad(t, r % t);
}
function Kf(r, t) {
  return r == null ? t : t == null ? r : r * t / Ad(r, t);
}
var $_ = "[ECharts] ", Qf = {}, X_ = typeof console < "u" && console.warn && console.log;
function mo(r, t, e) {
  if (X_) {
    if (e) {
      if (Qf[t])
        return;
      Qf[t] = !0;
    }
    console[r]($_ + t);
  }
}
function Z_(r, t) {
  mo("log", r, t);
}
function Bt(r, t) {
  mo("warn", r, t);
}
function At(r, t) {
  mo("error", r, t);
}
function Te(r) {
  process.env.NODE_ENV !== "production" && mo("warn", "DEPRECATED: " + r, !0);
}
function pt(r, t, e) {
  process.env.NODE_ENV !== "production" && Te((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function Ja() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : Cn(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : U(n) ? "function () { ... }" : fm(n) ? n + "" : null;
    };
    e = H(r, function(n) {
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
function Ft(r) {
  throw new Error(r);
}
var Ed = "series\0", q_ = "\0_ec_\0";
function It(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function Jf(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var jf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function zn(r) {
  return V(r) && !N(r) && !(r instanceof Date) ? r.value : r;
}
function K_(r) {
  return V(r) && !(r instanceof Array);
}
function Q_(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = q();
  T(t, function(u, l) {
    if (!V(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !eh(u.id) && th(u.id), u.name != null && !eh(u.name) && th(u.name));
  });
  var s = J_(r, o, e);
  return (i || n) && j_(s, r, o, t), i && t0(s, t), i || n ? e0(s, t, n) : a && r0(s, t), i0(s), s;
}
function J_(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || Si(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function j_(r, t, e, i) {
  T(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = pn(n.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        Z(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = n, u.existing = t[s], i[a] = null;
      }
    }
  });
}
function t0(r, t) {
  T(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !Si(e) && !Si(a) && Ld("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function e0(r, t, e) {
  T(t, function(i) {
    if (i) {
      for (
        var n, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (n = r[a]) && (n.newOption || Si(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !Ld("id", i, n.existing));
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
function r0(r, t) {
  T(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function i0(r) {
  var t = q();
  T(r, function(e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }), T(r, function(e) {
    var i = e.newOption;
    Z(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {});
  }), T(r, function(e, i) {
    var n = e.existing, a = e.newOption, o = e.keyInfo;
    if (V(a)) {
      if (o.name = a.name != null ? pn(a.name) : n ? n.name : Ed + i, n)
        o.id = pn(n.id);
      else if (a.id != null)
        o.id = pn(a.id);
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
function Ld(r, t, e) {
  var i = be(t[r], null), n = be(e[r], null);
  return i != null && n != null && i === n;
}
function pn(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return be(r, "");
}
function be(r, t) {
  return r == null ? t : F(r) ? r : ht(r) || Wa(r) ? r + "" : t;
}
function th(r) {
  process.env.NODE_ENV !== "production" && Bt("`" + r + "` is invalid id or name. Must be a string or number.");
}
function eh(r) {
  return Wa(r) || Dd(r);
}
function bl(r) {
  var t = r.name;
  return !!(t && t.indexOf(Ed));
}
function Si(r) {
  return r && r.id != null && pn(r.id).indexOf(q_) === 0;
}
function n0(r, t, e) {
  T(r, function(i) {
    var n = i.newOption;
    V(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = a0(t, n, i.existing, e));
  });
}
function a0(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function Hn(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return N(t.dataIndex) ? H(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return N(t.name) ? H(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function dt() {
  var r = "__ec_inner_" + o0++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var o0 = Md();
function ss(r, t, e) {
  var i = Tl(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, u = e ? e.defaultMainType : null;
  return !n && u && a.set(u, {}), a.each(function(l, f) {
    var h = Gn(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Tl(r, t) {
  var e;
  if (F(r)) {
    var i = {};
    i[r + "Index"] = 0, e = i;
  } else
    e = r;
  var n = q(), a = {}, o = !1;
  return T(e, function(s, u) {
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
var ve = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Gn(r, t, e, i) {
  i = i || ve;
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
function s0(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function u0(r) {
  return r === "auto" ? $.domSupported ? "html" : "richText" : r || "html";
}
var l0 = ".", hr = "___EC__COMPONENT__CONTAINER___", Pd = "___EC__EXTENDED_CLASS___";
function xe(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(l0);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function f0(r) {
  Z(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function h0(r) {
  return !!(r && r[Pd]);
}
function Cl(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && T(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var i = this, n;
    return c0(i) ? n = /** @class */
    function(a) {
      k(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, sm(n, this)), O(n.prototype, e), n[Pd] = !0, n.extend = this.extend, n.superCall = p0, n.superApply = g0, n.superClass = i, n;
  };
}
function c0(r) {
  return U(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function Id(r, t) {
  r.extend = t.extend;
}
var v0 = Math.round(Math.random() * 10);
function d0(r) {
  var t = ["__\0is_clz", v0++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && Z(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function p0(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function g0(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function _o(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      f0(n), i.prototype.type = n;
      var a = xe(n);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = i;
      else if (a.sub !== hr) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, r.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[hr] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(i) {
    var n = xe(i), a = [], o = t[n.main];
    return o && o[hr] ? T(o, function(s, u) {
      u !== hr && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = xe(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return T(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = xe(i), a = t[n.main];
    return a && a[hr];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[hr]) && (n = t[i.main] = {}, n[hr] = !0), n;
  }
}
function An(r, t) {
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
var y0 = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], m0 = An(y0), _0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return m0(this, t, e);
    }, r;
  }()
), xu = new Vn(50);
function w0(r) {
  if (typeof r == "string") {
    var t = xu.get(r);
    return t && t.image;
  } else
    return r;
}
function Rd(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = xu.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !wo(t) && a.pending.push(o)) : (t = Ai.loadImage(r, rh, rh), t.__zrImageSrc = r, xu.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else
    return t;
}
function rh() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function wo(r) {
  return r && r.width && r.height;
}
var us = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function S0(r, t, e, i, n, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Od(e, i, n, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    Nd(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function Od(r, t, e, i) {
  i = i || {};
  var n = O({}, i);
  n.font = t, e = X(e, "..."), n.maxIterations = X(i.maxIterations, 2);
  var a = n.minChar = X(i.minChar, 0);
  n.cnCharWidth = Xt("国", t);
  var o = n.ascCharWidth = Xt("a", t);
  n.placeholder = X(i.placeholder, "");
  for (var s = r = Math.max(0, r - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = Xt(e, t);
  return l > s && (e = "", l = 0), s = r - l, n.ellipsis = e, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = r, n;
}
function Nd(r, t, e) {
  var i = e.containerWidth, n = e.font, a = e.contentWidth;
  if (!i) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = Xt(t, n);
  if (o <= i) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var u = s === 0 ? x0(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, u), o = Xt(t, n);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function x0(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function b0(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, n = t.font, a = e === "truncate", o = Sl(n), s = X(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = !1, h = t.width, c;
  h != null && (e === "break" || e === "breakAll") ? c = r ? kd(r, t.font, h, e === "breakAll", 0).lines : [] : c = r ? r.split(`
`) : [];
  var v = c.length * s, d = X(t.height, v);
  if (v > d && l) {
    var y = Math.floor(d / s);
    f = f || c.length > y, c = c.slice(0, y);
  }
  if (r && a && h != null)
    for (var p = Od(h, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), g = {}, m = 0; m < c.length; m++)
      Nd(g, c[m], p), c[m] = g.textLine, f = f || g.isTruncated;
  for (var _ = d, w = 0, m = 0; m < c.length; m++)
    w = Math.max(Xt(c[m], n), w);
  h == null && (h = w);
  var S = w;
  return i && (_ += i[0] + i[2], S += i[1] + i[3], h += i[1] + i[3]), u && (S = h), {
    lines: c,
    height: d,
    outerWidth: S,
    outerHeight: _,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: w,
    contentHeight: v,
    width: h,
    isTruncated: f
  };
}
var T0 = function() {
  function r() {
  }
  return r;
}(), ih = function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), C0 = function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
}();
function D0(r, t) {
  var e = new C0();
  if (r != null && (r += ""), !r)
    return e;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = us.lastIndex = 0, u; (u = us.exec(r)) != null; ) {
    var l = u.index;
    l > s && ls(e, r.substring(s, l), t, o), ls(e, u[2], t, o, u[1]), s = us.lastIndex;
  }
  s < r.length && ls(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", y = t.lineOverflow === "truncate", p = {};
  function g(Y, J, rt) {
    Y.width = J, Y.lineHeight = rt, h += rt, c = Math.max(c, J);
  }
  t:
    for (var m = 0; m < e.lines.length; m++) {
      for (var _ = e.lines[m], w = 0, S = 0, x = 0; x < _.tokens.length; x++) {
        var b = _.tokens[x], D = b.styleName && t.rich[b.styleName] || {}, M = b.textPadding = D.padding, A = M ? M[1] + M[3] : 0, C = b.font = D.font || t.font;
        b.contentHeight = Sl(C);
        var E = X(D.height, b.contentHeight);
        if (b.innerHeight = E, M && (E += M[0] + M[2]), b.height = E, b.lineHeight = ci(D.lineHeight, t.lineHeight, E), b.align = D && D.align || t.align, b.verticalAlign = D && D.verticalAlign || "middle", y && n != null && h + b.lineHeight > n) {
          var L = e.lines.length;
          x > 0 ? (_.tokens = _.tokens.slice(0, x), g(_, S, w), e.lines = e.lines.slice(0, m + 1)) : e.lines = e.lines.slice(0, m), e.isTruncated = e.isTruncated || e.lines.length < L;
          break t;
        }
        var P = D.width, I = P == null || P === "auto";
        if (typeof P == "string" && P.charAt(P.length - 1) === "%")
          b.percentWidth = P, f.push(b), b.contentWidth = Xt(b.text, C);
        else {
          if (I) {
            var R = D.backgroundColor, G = R && R.image;
            G && (G = w0(G), wo(G) && (b.width = Math.max(b.width, G.width * E / G.height)));
          }
          var B = d && i != null ? i - S : null;
          B != null && B < b.width ? !I || B < A ? (b.text = "", b.width = b.contentWidth = 0) : (S0(p, b.text, B - A, C, t.ellipsis, { minChar: t.truncateMinChar }), b.text = p.text, e.isTruncated = e.isTruncated || p.isTruncated, b.width = b.contentWidth = Xt(b.text, C)) : b.contentWidth = Xt(b.text, C);
        }
        b.width += A, S += b.width, D && (w = Math.max(w, b.lineHeight));
      }
      g(_, S, w);
    }
  e.outerWidth = e.width = X(i, c), e.outerHeight = e.height = X(n, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
  for (var m = 0; m < f.length; m++) {
    var b = f[m], z = b.percentWidth;
    b.width = parseInt(z, 10) / 100 * e.width;
  }
  return e;
}
function ls(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (i) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Je(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), l = !0), i.accumWidth = d;
    } else {
      var y = kd(t, u, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = y.accumWidth + v, h = y.linesWidths, f = y.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], m = new T0();
    if (m.styleName = n, m.text = g, m.isLineHolder = !g && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[p] : Xt(g, u), !p && !l) {
      var _ = (s[s.length - 1] || (s[0] = new ih())).tokens, w = _.length;
      w === 1 && _[0].isLineHolder ? _[0] = m : (g || !w || a) && _.push(m);
    } else
      s.push(new ih([m]));
  }
}
function M0(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var A0 = Li(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function E0(r) {
  return M0(r) ? !!A0[r] : !0;
}
function kd(r, t, e, i, n) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < r.length; h++) {
    var c = r.charAt(h);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var v = Xt(c, t), d = i ? !1 : !E0(c);
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
var bu = "__zr_style_" + Math.round(Math.random() * 10), Rr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, So = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Rr[bu] = !0;
var nh = ["z", "z2", "invisible"], L0 = ["invisible"], P0 = function(r) {
  k(t, r);
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
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && I0(this, e, i) || o && !o[0] && !o[3])
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
      e = this._paintRect || (this._paintRect = new et(0, 0, 0, 0)), i ? et.applyTransform(e, n, i) : e.copy(n), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new et(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
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
    e || this.markRedraw(), this.__dirty |= nn, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & nn);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~nn;
  }, t.prototype.createStyle = function(e) {
    return go(Rr, e);
  }, t.prototype.useStyle = function(e) {
    e[bu] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[bu];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, nh);
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
    for (var y = this.__inHover ? L0 : nh, c = 0; c < y.length; c++) {
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
    return So;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = $t | nn;
  }(), t;
}(wd), fs = new et(0, 0, 0, 0), hs = new et(0, 0, 0, 0);
function I0(r, t, e) {
  return fs.copy(r.getBoundingRect()), r.transform && fs.applyTransform(r.transform), hs.width = t, hs.height = e, !fs.intersect(hs);
}
const Wn = P0;
var ie = Math.min, ne = Math.max, cs = Math.sin, vs = Math.cos, cr = Math.PI * 2, ea = Pi(), ra = Pi(), ia = Pi();
function ah(r, t, e, i, n, a) {
  n[0] = ie(r, e), n[1] = ie(t, i), a[0] = ne(r, e), a[1] = ne(t, i);
}
var oh = [], sh = [];
function R0(r, t, e, i, n, a, o, s, u, l) {
  var f = hd, h = _t, c = f(r, e, n, o, oh);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(r, e, n, o, oh[v]);
    u[0] = ie(d, u[0]), l[0] = ne(d, l[0]);
  }
  c = f(t, i, a, s, sh);
  for (var v = 0; v < c; v++) {
    var y = h(t, i, a, s, sh[v]);
    u[1] = ie(y, u[1]), l[1] = ne(y, l[1]);
  }
  u[0] = ie(r, u[0]), l[0] = ne(r, l[0]), u[0] = ie(o, u[0]), l[0] = ne(o, l[0]), u[1] = ie(t, u[1]), l[1] = ne(t, l[1]), u[1] = ie(s, u[1]), l[1] = ne(s, l[1]);
}
function O0(r, t, e, i, n, a, o, s) {
  var u = cd, l = Ct, f = ne(ie(u(r, e, n), 1), 0), h = ne(ie(u(t, i, a), 1), 0), c = l(r, e, n, f), v = l(t, i, a, h);
  o[0] = ie(r, n, c), o[1] = ie(t, a, v), s[0] = ne(r, n, c), s[1] = ne(t, a, v);
}
function N0(r, t, e, i, n, a, o, s, u) {
  var l = ui, f = li, h = Math.abs(n - a);
  if (h % cr < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - i, u[0] = r + e, u[1] = t + i;
    return;
  }
  if (ea[0] = vs(n) * e + r, ea[1] = cs(n) * i + t, ra[0] = vs(a) * e + r, ra[1] = cs(a) * i + t, l(s, ea, ra), f(u, ea, ra), n = n % cr, n < 0 && (n = n + cr), a = a % cr, a < 0 && (a = a + cr), n > a && !o ? a += cr : n < a && o && (n += cr), o) {
    var c = a;
    a = n, n = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (ia[0] = vs(v) * e + r, ia[1] = cs(v) * i + t, l(s, ia, s), f(u, ia, u));
}
var j = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, vr = [], dr = [], pe = [], ze = [], ge = [], ye = [], ds = Math.min, ps = Math.max, pr = Math.cos, gr = Math.sin, Ae = Math.abs, Tu = Math.PI, Xe = Tu * 2, gs = typeof Float32Array < "u", Gi = [];
function ys(r) {
  var t = Math.round(r / Tu * 1e8) / 1e8;
  return t % 2 * Tu;
}
function k0(r, t) {
  var e = ys(r[0]);
  e < 0 && (e += Xe);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= Xe ? n = e + Xe : t && e - n >= Xe ? n = e - Xe : !t && e > n ? n = e + (Xe - ys(e - n)) : t && e < n && (n = e - (Xe - ys(n - e))), r[0] = e, r[1] = n;
}
var B0 = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = Ae(i / Za / t) || 0, this._uy = Ae(i / Za / e) || 0);
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
    return this._drawPendingPt(), this.addData(j.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = Ae(t - this._xi), n = Ae(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(j.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(j.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(j.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), Gi[0] = n, Gi[1] = a, k0(Gi, o), n = Gi[0], a = Gi[1];
    var s = a - n;
    return this.addData(j.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = pr(a) * i + t, this._yi = gr(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(j.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(j.Z);
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
    !(this.data && this.data.length === e) && gs && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++)
      this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
      i += t[a].len();
    gs && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
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
      t instanceof Array && (t.length = this._len, gs && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    pe[0] = pe[1] = ge[0] = ge[1] = Number.MAX_VALUE, ze[0] = ze[1] = ye[0] = ye[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case j.M:
          e = n = t[o++], i = a = t[o++], ge[0] = n, ge[1] = a, ye[0] = n, ye[1] = a;
          break;
        case j.L:
          ah(e, i, t[o], t[o + 1], ge, ye), e = t[o++], i = t[o++];
          break;
        case j.C:
          R0(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ge, ye), e = t[o++], i = t[o++];
          break;
        case j.Q:
          O0(e, i, t[o++], t[o++], t[o], t[o + 1], ge, ye), e = t[o++], i = t[o++];
          break;
        case j.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var y = !t[o++];
          u && (n = pr(v) * h + l, a = gr(v) * c + f), N0(l, f, h, c, v, d, y, ge, ye), e = pr(d) * h + l, i = gr(d) * c + f;
          break;
        case j.R:
          n = e = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          ah(n, a, n + p, a + g, ge, ye);
          break;
        case j.Z:
          e = n, i = a;
          break;
      }
      ui(pe, pe, ge), li(ze, ze, ye);
    }
    return o === 0 && (pe[0] = pe[1] = ze[0] = ze[1] = 0), new et(pe[0], pe[1], ze[0] - pe[0], ze[1] - pe[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var y = -1;
      switch (v) {
        case j.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case j.L: {
          var p = t[c++], g = t[c++], m = p - a, _ = g - o;
          (Ae(m) > i || Ae(_) > n || c === e - 1) && (y = Math.sqrt(m * m + _ * _), a = p, o = g);
          break;
        }
        case j.C: {
          var w = t[c++], S = t[c++], p = t[c++], g = t[c++], x = t[c++], b = t[c++];
          y = e_(a, o, w, S, p, g, x, b, 10), a = x, o = b;
          break;
        }
        case j.Q: {
          var w = t[c++], S = t[c++], p = t[c++], g = t[c++];
          y = n_(a, o, w, S, p, g, 10), a = p, o = g;
          break;
        }
        case j.A:
          var D = t[c++], M = t[c++], A = t[c++], C = t[c++], E = t[c++], L = t[c++], P = L + E;
          c += 1, d && (s = pr(E) * A + D, u = gr(E) * C + M), y = ps(A, C) * ds(Xe, Math.abs(L)), a = pr(P) * A + D, o = gr(P) * C + M;
          break;
        case j.R: {
          s = a = t[c++], u = o = t[c++];
          var I = t[c++], R = t[c++];
          y = I * 2 + R * 2;
          break;
        }
        case j.Z: {
          var m = s - a, _ = u - o;
          y = Math.sqrt(m * m + _ * _), a = s, o = u;
          break;
        }
      }
      y >= 0 && (l[h++] = y, f += y);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = e < 1, d, y, p = 0, g = 0, m, _ = 0, w, S;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, y = this._pathLen, m = e * y, !m)))
      t:
        for (var x = 0; x < o; ) {
          var b = i[x++], D = x === 1;
          switch (D && (l = i[x], f = i[x + 1], s = l, u = f), b !== j.L && _ > 0 && (t.lineTo(w, S), _ = 0), b) {
            case j.M:
              s = l = i[x++], u = f = i[x++], t.moveTo(l, f);
              break;
            case j.L: {
              h = i[x++], c = i[x++];
              var M = Ae(h - l), A = Ae(c - f);
              if (M > n || A > a) {
                if (v) {
                  var C = d[g++];
                  if (p + C > m) {
                    var E = (m - p) / C;
                    t.lineTo(l * (1 - E) + h * E, f * (1 - E) + c * E);
                    break t;
                  }
                  p += C;
                }
                t.lineTo(h, c), l = h, f = c, _ = 0;
              } else {
                var L = M * M + A * A;
                L > _ && (w = h, S = c, _ = L);
              }
              break;
            }
            case j.C: {
              var P = i[x++], I = i[x++], R = i[x++], G = i[x++], B = i[x++], z = i[x++];
              if (v) {
                var C = d[g++];
                if (p + C > m) {
                  var E = (m - p) / C;
                  Ya(l, P, R, B, E, vr), Ya(f, I, G, z, E, dr), t.bezierCurveTo(vr[1], dr[1], vr[2], dr[2], vr[3], dr[3]);
                  break t;
                }
                p += C;
              }
              t.bezierCurveTo(P, I, R, G, B, z), l = B, f = z;
              break;
            }
            case j.Q: {
              var P = i[x++], I = i[x++], R = i[x++], G = i[x++];
              if (v) {
                var C = d[g++];
                if (p + C > m) {
                  var E = (m - p) / C;
                  $a(l, P, R, E, vr), $a(f, I, G, E, dr), t.quadraticCurveTo(vr[1], dr[1], vr[2], dr[2]);
                  break t;
                }
                p += C;
              }
              t.quadraticCurveTo(P, I, R, G), l = R, f = G;
              break;
            }
            case j.A:
              var Y = i[x++], J = i[x++], rt = i[x++], St = i[x++], Zt = i[x++], Ve = i[x++], rr = i[x++], ir = !i[x++], Wr = rt > St ? rt : St, Wt = Ae(rt - St) > 1e-3, mt = Zt + Ve, W = !1;
              if (v) {
                var C = d[g++];
                p + C > m && (mt = Zt + Ve * (m - p) / C, W = !0), p += C;
              }
              if (Wt && t.ellipse ? t.ellipse(Y, J, rt, St, rr, Zt, mt, ir) : t.arc(Y, J, Wr, Zt, mt, ir), W)
                break t;
              D && (s = pr(Zt) * rt + Y, u = gr(Zt) * St + J), l = pr(mt) * rt + Y, f = gr(mt) * St + J;
              break;
            case j.R:
              s = l = i[x], u = f = i[x + 1], h = i[x++], c = i[x++];
              var K = i[x++], nr = i[x++];
              if (v) {
                var C = d[g++];
                if (p + C > m) {
                  var Et = m - p;
                  t.moveTo(h, c), t.lineTo(h + ds(Et, K), c), Et -= K, Et > 0 && t.lineTo(h + K, c + ds(Et, nr)), Et -= nr, Et > 0 && t.lineTo(h + ps(K - Et, 0), c + nr), Et -= K, Et > 0 && t.lineTo(h, c + ps(nr - Et, 0));
                  break t;
                }
                p += C;
              }
              t.rect(h, c, K, nr);
              break;
            case j.Z:
              if (v) {
                var C = d[g++];
                if (p + C > m) {
                  var E = (m - p) / C;
                  t.lineTo(l * (1 - E) + s * E, f * (1 - E) + u * E);
                  break t;
                }
                p += C;
              }
              t.closePath(), l = s, f = u;
          }
        }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = j, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
const xi = B0;
function Zr(r, t, e, i, n, a, o) {
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
function F0(r, t, e, i, n, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || l > r + h && l > e + h && l > n + h && l > o + h || l < r - h && l < e - h && l < n - h && l < o - h)
    return !1;
  var c = t_(r, t, e, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function V0(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > i + l && u > a + l || u < t - l && u < i - l && u < a - l || s > r + l && s > e + l && s > n + l || s < r - l && s < e - l && s < n - l)
    return !1;
  var f = i_(r, t, e, i, n, a, s, u, null);
  return f <= l / 2;
}
var uh = Math.PI * 2;
function na(r) {
  return r %= uh, r < 0 && (r += uh), r;
}
var Wi = Math.PI * 2;
function z0(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(i - n) % Wi < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = na(n), n = na(h);
  } else
    i = na(i), n = na(n);
  i > n && (n += Wi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += Wi), c >= i && c <= n || c + Wi >= i && c + Wi <= n;
}
function yr(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var He = xi.CMD, mr = Math.PI * 2, H0 = 1e-4;
function G0(r, t) {
  return Math.abs(r - t) < H0;
}
var Lt = [-1, -1, -1], ee = [-1, -1];
function W0() {
  var r = ee[0];
  ee[0] = ee[1], ee[1] = r;
}
function U0(r, t, e, i, n, a, o, s, u, l) {
  if (l > t && l > i && l > a && l > s || l < t && l < i && l < a && l < s)
    return 0;
  var f = fd(t, i, a, s, l, Lt);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, y = 0; y < f; y++) {
    var p = Lt[y], g = p === 0 || p === 1 ? 0.5 : 1, m = _t(r, e, n, o, p);
    m < u || (c < 0 && (c = hd(t, i, a, s, ee), ee[1] < ee[0] && c > 1 && W0(), v = _t(t, i, a, s, ee[0]), c > 1 && (d = _t(t, i, a, s, ee[1]))), c === 2 ? p < ee[0] ? h += v < t ? g : -g : p < ee[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < ee[0] ? h += v < t ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function Y0(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var u = r_(t, i, a, s, Lt);
  if (u === 0)
    return 0;
  var l = cd(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Ct(t, i, a, l), c = 0; c < u; c++) {
      var v = Lt[c] === 0 || Lt[c] === 1 ? 0.5 : 1, d = Ct(r, e, n, Lt[c]);
      d < o || (Lt[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = Lt[0] === 0 || Lt[0] === 1 ? 0.5 : 1, d = Ct(r, e, n, Lt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function $0(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  Lt[0] = -u, Lt[1] = u;
  var l = Math.abs(i - n);
  if (l < 1e-4)
    return 0;
  if (l >= mr - 1e-4) {
    i = 0, n = mr;
    var f = a ? 1 : -1;
    return o >= Lt[0] + r && o <= Lt[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += mr, n += mr);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Lt[v];
    if (d + r > o) {
      var y = Math.atan2(s, d), f = a ? 1 : -1;
      y < 0 && (y = mr + y), (y >= i && y <= n || y + mr >= i && y + mr <= n) && (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Bd(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var y = a[d++], p = d === 1;
    switch (y === He.M && d > 1 && (e || (s += yr(u, l, f, h, i, n))), p && (u = a[d], l = a[d + 1], f = u, h = l), y) {
      case He.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case He.L:
        if (e) {
          if (Zr(u, l, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += yr(u, l, a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case He.C:
        if (e) {
          if (F0(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += U0(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case He.Q:
        if (e) {
          if (V0(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Y0(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case He.A:
        var g = a[d++], m = a[d++], _ = a[d++], w = a[d++], S = a[d++], x = a[d++];
        d += 1;
        var b = !!(1 - a[d++]);
        c = Math.cos(S) * _ + g, v = Math.sin(S) * w + m, p ? (f = c, h = v) : s += yr(u, l, c, v, i, n);
        var D = (i - g) * w / _ + g;
        if (e) {
          if (z0(g, m, w, S, S + x, b, t, D, n))
            return !0;
        } else
          s += $0(g, m, w, S, S + x, b, D, n);
        u = Math.cos(S + x) * _ + g, l = Math.sin(S + x) * w + m;
        break;
      case He.R:
        f = u = a[d++], h = l = a[d++];
        var M = a[d++], A = a[d++];
        if (c = f + M, v = h + A, e) {
          if (Zr(f, h, c, h, t, i, n) || Zr(c, h, c, v, t, i, n) || Zr(c, v, f, v, t, i, n) || Zr(f, v, f, h, t, i, n))
            return !0;
        } else
          s += yr(c, h, c, v, i, n), s += yr(f, v, f, h, i, n);
        break;
      case He.Z:
        if (e) {
          if (Zr(u, l, f, h, t, i, n))
            return !0;
        } else
          s += yr(u, l, f, h, i, n);
        u = f, l = h;
        break;
    }
  }
  return !e && !G0(l, h) && (s += yr(u, l, f, h, i, n) || 0), s !== 0;
}
function X0(r, t, e) {
  return Bd(r, 0, !1, t, e);
}
function Z0(r, t, e, i) {
  return Bd(r, t, !0, e, i);
}
var Fd = at({
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
}, Rr), q0 = {
  style: at({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, So.style)
}, ms = Dn.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), K0 = function(r) {
  k(t, r);
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
      for (var s = 0; s < ms.length; ++s)
        n[ms[s]] = this[ms[s]];
      n.__dirty |= $t;
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
        var i = Xa(e, 0);
        return i > 0.5 ? _u : i > 0.2 ? A_ : wu;
      } else if (e)
        return wu;
    }
    return _u;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (F(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = Xa(e, 0) < mu;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~oi;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new xi(!1);
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
      (a || this.__dirty & oi) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
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
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Z0(s, u / l, e, i)))
          return !0;
      }
      if (this.hasFill())
        return X0(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= oi, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
    return !!(this.__dirty & oi);
  }, t.prototype.createStyle = function(e) {
    return go(Fd, e);
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
    return q0;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = function(a) {
      k(o, a);
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
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = $t | nn | oi;
  }(), t;
}(Wn);
const ot = K0;
var Q0 = at({
  strokeFirst: !0,
  font: kr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Fd), Vd = function(r) {
  k(t, r);
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
    return go(Q0, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var n = wl(i, e.font, e.textAlign, e.textBaseline);
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
}(Wn);
Vd.prototype.type = "tspan";
const Cu = Vd;
var J0 = at({
  x: 0,
  y: 0
}, Rr), j0 = {
  style: at({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, So.style)
};
function t1(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var zd = function(r) {
  k(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return go(J0, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = t1(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return j0;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new et(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(Wn);
zd.prototype.type = "image";
const Ii = zd;
function e1(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, u, l, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > n && (h = s + u, s *= n / h, u *= n / h), l + f > n && (h = l + f, l *= n / h, f *= n / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, i), r.lineTo(e + n - u, i), u !== 0 && r.arc(e + n - u, i + u, u, -Math.PI / 2, 0), r.lineTo(e + n, i + a - l), l !== 0 && r.arc(e + n - l, i + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var hi = Math.round;
function Hd(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (hi(i * 2) === hi(n * 2) && (r.x1 = r.x2 = Ar(i, s, !0)), hi(a * 2) === hi(o * 2) && (r.y1 = r.y2 = Ar(a, s, !0))), r;
  }
}
function Gd(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Ar(i, s, !0), r.y = Ar(n, s, !0), r.width = Math.max(Ar(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Ar(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Ar(r, t, e) {
  if (!t)
    return r;
  var i = hi(r * 2);
  return (i + hi(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var r1 = function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), i1 = {}, Wd = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new r1();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Gd(i1, i, this.style);
      n = u.x, a = u.y, o = u.width, s = u.height, u.r = i.r, i = u;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? e1(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(ot);
Wd.prototype.type = "rect";
const yt = Wd;
var lh = {
  fill: "#000"
}, fh = 2, n1 = {
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
  }, So.style)
}, Ud = function(r) {
  k(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = lh, i.attr(e), i;
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
    this._childCursor = 0, l1(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
      for (var e = new et(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], u = s.getBoundingRect(), l = s.getLocalTransform(n);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || lh;
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
    return n1;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || kr, n = e.padding, a = yh(e), o = b0(a, e), s = _s(e), u = !!e.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var y = e.x || 0, p = e.y || 0, g = e.align || d.align || "left", m = e.verticalAlign || d.verticalAlign || "top", _ = y, w = si(p, o.contentHeight, m);
    if (s || n) {
      var S = on(y, f, g), x = si(p, l, m);
      s && this._renderBackground(e, e, S, x, f, l);
    }
    w += v / 2, n && (_ = gh(y, g, n), m === "top" ? w += n[0] : m === "bottom" && (w -= n[2]));
    for (var b = 0, D = !1, M = ph("fill" in e ? e.fill : (D = !0, d.fill)), A = dh("stroke" in e ? e.stroke : !u && (!d.autoStroke || D) ? (b = fh, d.stroke) : null), C = e.textShadowBlur > 0, E = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), L = o.calculatedLineHeight, P = 0; P < c.length; P++) {
      var I = this._getOrCreateChild(Cu), R = I.createStyle();
      I.useStyle(R), R.text = c[P], R.x = _, R.y = w, g && (R.textAlign = g), R.textBaseline = "middle", R.opacity = e.opacity, R.strokeFirst = !0, C && (R.shadowBlur = e.textShadowBlur || 0, R.shadowColor = e.textShadowColor || "transparent", R.shadowOffsetX = e.textShadowOffsetX || 0, R.shadowOffsetY = e.textShadowOffsetY || 0), R.stroke = A, R.fill = M, A && (R.lineWidth = e.lineWidth || b, R.lineDash = e.lineDash, R.lineDashOffset = e.lineDashOffset || 0), R.font = i, ch(R, e), w += v, E && I.setBoundingRect(new et(on(R.x, h, R.textAlign), si(R.y, L, R.textBaseline), h, L));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = yh(e), n = D0(i, e), a = n.width, o = n.outerWidth, s = n.outerHeight, u = e.padding, l = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign;
    this.isTruncated = !!n.isTruncated;
    var d = on(l, o, c), y = si(f, s, v), p = d, g = y;
    u && (p += u[3], g += u[0]);
    var m = p + a;
    _s(e) && this._renderBackground(e, e, d, y, o, s);
    for (var _ = !!e.backgroundColor, w = 0; w < n.lines.length; w++) {
      for (var S = n.lines[w], x = S.tokens, b = x.length, D = S.lineHeight, M = S.width, A = 0, C = p, E = m, L = b - 1, P = void 0; A < b && (P = x[A], !P.align || P.align === "left"); )
        this._placeToken(P, e, D, g, C, "left", _), M -= P.width, C += P.width, A++;
      for (; L >= 0 && (P = x[L], P.align === "right"); )
        this._placeToken(P, e, D, g, E, "right", _), M -= P.width, E -= P.width, L--;
      for (C += (a - (C - p) - (m - E) - M) / 2; A <= L; )
        P = x[A], this._placeToken(P, e, D, g, C + P.width / 2, "center", _), C += P.width, A++;
      g += D;
    }
  }, t.prototype._placeToken = function(e, i, n, a, o, s, u) {
    var l = i.rich[e.styleName] || {};
    l.text = e.text;
    var f = e.verticalAlign, h = a + n / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + n - e.height / 2);
    var c = !e.isLineHolder && _s(l);
    c && this._renderBackground(l, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var v = !!l.backgroundColor, d = e.textPadding;
    d && (o = gh(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var y = this._getOrCreateChild(Cu), p = y.createStyle();
    y.useStyle(p);
    var g = this._defaultStyle, m = !1, _ = 0, w = ph("fill" in l ? l.fill : "fill" in i ? i.fill : (m = !0, g.fill)), S = dh("stroke" in l ? l.stroke : "stroke" in i ? i.stroke : !v && !u && (!g.autoStroke || m) ? (_ = fh, g.stroke) : null), x = l.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = e.text, p.x = o, p.y = h, x && (p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = l.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || kr, p.opacity = ci(l.opacity, i.opacity, 1), ch(p, l), S && (p.lineWidth = ci(l.lineWidth, i.lineWidth, _), p.lineDash = X(l.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = S), w && (p.fill = w);
    var b = e.contentWidth, D = e.contentHeight;
    y.setBoundingRect(new et(on(p.x, b, p.textAlign), si(p.y, D, p.textBaseline), b, D));
  }, t.prototype._renderBackground = function(e, i, n, a, o, s) {
    var u = e.backgroundColor, l = e.borderWidth, f = e.borderColor, h = u && u.image, c = u && !h, v = e.borderRadius, d = this, y, p;
    if (c || e.lineHeight || l && f) {
      y = this._getOrCreateChild(yt), y.useStyle(y.createStyle()), y.style.fill = null;
      var g = y.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = v, y.dirtyShape();
    }
    if (c) {
      var m = y.style;
      m.fill = u || null, m.fillOpacity = X(e.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(Ii), p.onload = function() {
        d.dirtyStyle();
      };
      var _ = p.style;
      _.image = u.image, _.x = n, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var m = y.style;
      m.lineWidth = l, m.stroke = f, m.strokeOpacity = X(e.strokeOpacity, 1), m.lineDash = e.borderDash, m.lineDashOffset = e.borderDashOffset || 0, y.strokeContainThreshold = 0, y.hasFill() && y.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2);
    }
    var w = (y || p).style;
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = ci(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return u1(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      s1(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && Se(i) || e.textFont || e.font;
  }, t;
}(Wn), a1 = { left: !0, right: 1, center: 1 }, o1 = { top: 1, bottom: 1, middle: 1 }, hh = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function s1(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? ll + "px" : r + "px";
}
function ch(r, t) {
  for (var e = 0; e < hh.length; e++) {
    var i = hh[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function u1(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function l1(r) {
  return vh(r), T(r.rich, vh), r;
}
function vh(r) {
  if (r) {
    r.font = Ud.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || a1[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || o1[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = Kv(r.padding));
  }
}
function dh(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function ph(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function gh(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function yh(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function _s(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
const ue = Ud;
var st = dt(), f1 = function(r, t, e, i) {
  if (i) {
    var n = st(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, n.ssrType = "chart", i.type === "group" && i.traverse(function(a) {
      var o = st(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, mh = 1, _h = {}, Yd = dt(), Dl = dt(), $d = 0, Ml = 1, Al = 2, je = ["emphasis", "blur", "select"], wh = ["normal", "emphasis", "blur", "select"], h1 = 10, c1 = 9, Or = "highlight", ka = "downplay", gn = "select", Ba = "unselect", yn = "toggleSelect";
function qr(r) {
  return r != null && r !== "none";
}
function xo(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Xd(r) {
  xo(r, "emphasis", Al);
}
function Zd(r) {
  r.hoverState === Al && xo(r, "normal", $d);
}
function El(r) {
  xo(r, "blur", Ml);
}
function qd(r) {
  r.hoverState === Ml && xo(r, "normal", $d);
}
function v1(r) {
  r.selected = !0;
}
function d1(r) {
  r.selected = !1;
}
function Sh(r, t, e) {
  t(r, e);
}
function ke(r, t, e) {
  Sh(r, t, e), r.isGroup && r.traverse(function(i) {
    Sh(i, t, e);
  });
}
function p1(r, t, e, i) {
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
function g1(r, t, e, i) {
  var n = e && it(e, "select") >= 0, a = !1;
  if (r instanceof ot) {
    var o = Yd(r), s = n && o.selectFill || o.normalFill, u = n && o.selectStroke || o.normalStroke;
    if (qr(s) || qr(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit" ? (a = !0, i = O({}, i), l = O({}, l), l.fill = s) : !qr(l.fill) && qr(s) ? (a = !0, i = O({}, i), l = O({}, l), l.fill = kf(s)) : !qr(l.stroke) && qr(u) && (a || (i = O({}, i), l = O({}, l)), l.stroke = kf(u)), i.style = l;
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? h1);
  }
  return i;
}
function y1(r, t, e) {
  if (e && e.z2 == null) {
    e = O({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? c1);
  }
  return e;
}
function m1(r, t, e) {
  var i = it(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : p1(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = O({}, e), o = O({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function ws(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return g1(this, r, t, e);
    if (r === "blur")
      return m1(this, r, e);
    if (r === "select")
      return y1(this, r, e);
  }
  return e;
}
function _1(r) {
  r.stateProxy = ws;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = ws), e && (e.stateProxy = ws);
}
function xh(r, t) {
  !jd(r, t) && !r.__highByOuter && ke(r, Xd);
}
function bh(r, t) {
  !jd(r, t) && !r.__highByOuter && ke(r, Zd);
}
function Du(r, t) {
  r.__highByOuter |= 1 << (t || 0), ke(r, Xd);
}
function Mu(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && ke(r, Zd);
}
function w1(r) {
  ke(r, El);
}
function Kd(r) {
  ke(r, qd);
}
function Qd(r) {
  ke(r, v1);
}
function Jd(r) {
  ke(r, d1);
}
function jd(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function tp(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = Dl(a), s = n === "series", u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(u), o.isBlured && (u.group.traverse(function(l) {
      qd(l);
    }), s && e.push(a)), o.isBlured = !1;
  }), T(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function Au(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && Kd(c);
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
          p.__highByOuter && f && t === "self" || El(p);
        }), Ht(t))
          a(l.getData(), t);
        else if (V(t))
          for (var d = lt(t), y = 0; y < d.length; y++)
            a(l.getData(d[y]), t[d[y]]);
        u.push(l), Dl(l).isBlured = !0;
      }
    }), n.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
      }
    });
  }
}
function Eu(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      Dl(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        El(a);
      });
    }
  }
}
function S1(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && At("Unknown dataType " + t.dataType);
    return;
  }
  var a = Hn(n, t);
  a = (N(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), u = 0; !o && u < s; )
      o = n.getItemGraphicEl(u++);
  if (o) {
    var l = st(o);
    Au(i, l.focus, l.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && Au(i, f, h, e);
  }
}
function Ll(r, t, e, i) {
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
    if (process.env.NODE_ENV !== "production" && !bi(s[l]) && At("param should be highDownDispatcher"), st(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function x1(r, t, e) {
  process.env.NODE_ENV !== "production" && !bi(r) && At("param should be highDownDispatcher");
  var i = st(r), n = Ll(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && Eu(i.componentMainType, i.componentIndex, e), T(a, function(s) {
    return xh(s, t);
  })) : (Au(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && Eu(i.componentMainType, i.componentIndex, e), xh(r, t));
}
function b1(r, t, e) {
  process.env.NODE_ENV !== "production" && !bi(r) && At("param should be highDownDispatcher"), tp(e);
  var i = st(r), n = Ll(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? T(n, function(a) {
    return bh(a, t);
  }) : bh(r, t);
}
function T1(r, t, e) {
  if (Pu(t)) {
    var i = t.dataType, n = r.getData(i), a = Hn(n, t);
    N(a) || (a = [a]), r[t.type === yn ? "toggleSelect" : t.type === gn ? "select" : "unselect"](a, i);
  }
}
function Th(r) {
  var t = r.getAllData();
  T(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? Qd(a) : Jd(a);
    });
  });
}
function C1(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var i = e.getAllData();
    T(i, function(n) {
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
function Lu(r, t, e) {
  ep(r, !0), ke(r, _1), A1(r, t, e);
}
function D1(r) {
  ep(r, !1);
}
function M1(r, t, e, i) {
  i ? D1(r) : Lu(r, t, e);
}
function A1(r, t, e) {
  var i = st(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
var Ch = ["emphasis", "blur", "select"], E1 = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function L1(r, t, e, i) {
  e = e || "itemStyle";
  for (var n = 0; n < Ch.length; n++) {
    var a = Ch[n], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = i ? i(o) : o[E1[e]]();
  }
}
function ep(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function bi(r) {
  return !!(r && r.__highDownDispatcher);
}
function P1(r) {
  var t = _h[r];
  return t == null && mh <= 32 && (t = _h[r] = mh++), t;
}
function Pu(r) {
  var t = r.type;
  return t === gn || t === Ba || t === yn;
}
function Dh(r) {
  var t = r.type;
  return t === Or || t === ka;
}
function I1(r) {
  var t = Yd(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Kr = xi.CMD, R1 = [[], [], []], Mh = Math.sqrt, O1 = Math.atan2;
function N1(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, u, l, f = Kr.M, h = Kr.C, c = Kr.L, v = Kr.R, d = Kr.A, y = Kr.Q;
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
          var p = t[4], g = t[5], m = Mh(t[0] * t[0] + t[1] * t[1]), _ = Mh(t[2] * t[2] + t[3] * t[3]), w = O1(-t[1] / _, t[0] / m);
          e[o] *= m, e[o++] += p, e[o] *= _, e[o++] += g, e[o++] *= m, e[o++] *= _, e[o++] += w, e[o++] += w, o += 2, s = o;
          break;
        case v:
          l[0] = e[o++], l[1] = e[o++], oe(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], oe(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var S = R1[u];
        S[0] = e[o++], S[1] = e[o++], oe(S, S, t), e[s++] = S[0], e[s++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var Ss = Math.sqrt, aa = Math.sin, oa = Math.cos, Ui = Math.PI;
function Ah(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function Iu(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Ah(r) * Ah(t));
}
function Eh(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(Iu(r, t));
}
function Lh(r, t, e, i, n, a, o, s, u, l, f) {
  var h = u * (Ui / 180), c = oa(h) * (r - e) / 2 + aa(h) * (t - i) / 2, v = -1 * aa(h) * (r - e) / 2 + oa(h) * (t - i) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= Ss(d), s *= Ss(d));
  var y = (n === a ? -1 : 1) * Ss((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = y * o * v / s, g = y * -s * c / o, m = (r + e) / 2 + oa(h) * p - aa(h) * g, _ = (t + i) / 2 + aa(h) * p + oa(h) * g, w = Eh([1, 0], [(c - p) / o, (v - g) / s]), S = [(c - p) / o, (v - g) / s], x = [(-1 * c - p) / o, (-1 * v - g) / s], b = Eh(S, x);
  if (Iu(S, x) <= -1 && (b = Ui), Iu(S, x) >= 1 && (b = 0), b < 0) {
    var D = Math.round(b / Ui * 1e6) / 1e6;
    b = Ui * 2 + D % 2 * Ui;
  }
  f.addData(l, m, _, o, s, w, b, h, a);
}
var k1 = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, B1 = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function F1(r) {
  var t = new xi();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = xi.CMD, u = r.match(k1);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(B1) || [], d = v.length, y = 0; y < d; y++)
      v[y] = parseFloat(v[y]);
    for (var p = 0; p < d; ) {
      var g = void 0, m = void 0, _ = void 0, w = void 0, S = void 0, x = void 0, b = void 0, D = e, M = i, A = void 0, C = void 0;
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
          g = e, m = i, A = t.len(), C = t.data, o === s.C && (g += e - C[A - 4], m += i - C[A - 3]), c = s.C, D = v[p++], M = v[p++], e = v[p++], i = v[p++], t.addData(c, g, m, D, M, e, i);
          break;
        case "s":
          g = e, m = i, A = t.len(), C = t.data, o === s.C && (g += e - C[A - 4], m += i - C[A - 3]), c = s.C, D = e + v[p++], M = i + v[p++], e += v[p++], i += v[p++], t.addData(c, g, m, D, M, e, i);
          break;
        case "Q":
          D = v[p++], M = v[p++], e = v[p++], i = v[p++], c = s.Q, t.addData(c, D, M, e, i);
          break;
        case "q":
          D = v[p++] + e, M = v[p++] + i, e += v[p++], i += v[p++], c = s.Q, t.addData(c, D, M, e, i);
          break;
        case "T":
          g = e, m = i, A = t.len(), C = t.data, o === s.Q && (g += e - C[A - 4], m += i - C[A - 3]), e = v[p++], i = v[p++], c = s.Q, t.addData(c, g, m, e, i);
          break;
        case "t":
          g = e, m = i, A = t.len(), C = t.data, o === s.Q && (g += e - C[A - 4], m += i - C[A - 3]), e += v[p++], i += v[p++], c = s.Q, t.addData(c, g, m, e, i);
          break;
        case "A":
          _ = v[p++], w = v[p++], S = v[p++], x = v[p++], b = v[p++], D = e, M = i, e = v[p++], i = v[p++], c = s.A, Lh(D, M, e, i, x, b, _, w, S, c, t);
          break;
        case "a":
          _ = v[p++], w = v[p++], S = v[p++], x = v[p++], b = v[p++], D = e, M = i, e += v[p++], i += v[p++], c = s.A, Lh(D, M, e, i, x, b, _, w, S, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = n, i = a), o = c;
  }
  return t.toStatic(), t;
}
var rp = function(r) {
  k(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(ot);
function ip(r) {
  return r.setData != null;
}
function np(r, t) {
  var e = F1(r), i = O({}, t);
  return i.buildPath = function(n) {
    if (ip(n)) {
      n.setData(e.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      e.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    N1(e, n), this.dirtyShape();
  }, i;
}
function V1(r, t) {
  return new rp(np(r, t));
}
function z1(r, t) {
  var e = np(r, t), i = function(n) {
    k(a, n);
    function a(o) {
      var s = n.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  }(rp);
  return i;
}
function H1(r, t) {
  for (var e = [], i = r.length, n = 0; n < i; n++) {
    var a = r[n];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new ot(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (ip(s)) {
      s.appendPath(e);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var G1 = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), ap = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new G1();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(ot);
ap.prototype.type = "circle";
const Pl = ap;
var W1 = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
}(), op = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new W1();
  }, t.prototype.buildPath = function(e, i) {
    var n = 0.5522848, a = i.cx, o = i.cy, s = i.rx, u = i.ry, l = s * n, f = u * n;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), e.closePath();
  }, t;
}(ot);
op.prototype.type = "ellipse";
const sp = op;
var up = Math.PI, xs = up * 2, _r = Math.sin, Qr = Math.cos, U1 = Math.acos, xt = Math.atan2, Ph = Math.abs, mn = Math.sqrt, un = Math.max, me = Math.min, he = 1e-4;
function Y1(r, t, e, i, n, a, o, s) {
  var u = e - r, l = i - t, f = o - n, h = s - a, c = h * u - f * l;
  if (!(c * c < he))
    return c = (f * (t - a) - h * (r - n)) / c, [r + c * u, t + c * l];
}
function sa(r, t, e, i, n, a, o) {
  var s = r - e, u = t - i, l = (o ? a : -a) / mn(s * s + u * u), f = l * u, h = -l * s, c = r + f, v = t + h, d = e + f, y = i + h, p = (c + d) / 2, g = (v + y) / 2, m = d - c, _ = y - v, w = m * m + _ * _, S = n - a, x = c * y - d * v, b = (_ < 0 ? -1 : 1) * mn(un(0, S * S * w - x * x)), D = (x * _ - m * b) / w, M = (-x * m - _ * b) / w, A = (x * _ + m * b) / w, C = (-x * m + _ * b) / w, E = D - p, L = M - g, P = A - p, I = C - g;
  return E * E + L * L > P * P + I * I && (D = A, M = C), {
    cx: D,
    cy: M,
    x0: -f,
    y0: -h,
    x1: D * (n / S - 1),
    y1: M * (n / S - 1)
  };
}
function $1(r) {
  var t;
  if (N(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function X1(r, t) {
  var e, i = un(t.r, 0), n = un(t.r0 || 0, 0), a = i > 0, o = n > 0;
  if (!(!a && !o)) {
    if (a || (i = n, n = 0), n > i) {
      var s = i;
      i = n, n = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, c = !!t.clockwise, v = Ph(l - u), d = v > xs && v % xs;
      if (d > he && (v = d), !(i > he))
        r.moveTo(f, h);
      else if (v > xs - he)
        r.moveTo(f + i * Qr(u), h + i * _r(u)), r.arc(f, h, i, u, l, !c), n > he && (r.moveTo(f + n * Qr(l), h + n * _r(l)), r.arc(f, h, n, l, u, c));
      else {
        var y = void 0, p = void 0, g = void 0, m = void 0, _ = void 0, w = void 0, S = void 0, x = void 0, b = void 0, D = void 0, M = void 0, A = void 0, C = void 0, E = void 0, L = void 0, P = void 0, I = i * Qr(u), R = i * _r(u), G = n * Qr(l), B = n * _r(l), z = v > he;
        if (z) {
          var Y = t.cornerRadius;
          Y && (e = $1(Y), y = e[0], p = e[1], g = e[2], m = e[3]);
          var J = Ph(i - n) / 2;
          if (_ = me(J, g), w = me(J, m), S = me(J, y), x = me(J, p), M = b = un(_, w), A = D = un(S, x), (b > he || D > he) && (C = i * Qr(l), E = i * _r(l), L = n * Qr(u), P = n * _r(u), v < up)) {
            var rt = Y1(I, R, L, P, C, E, G, B);
            if (rt) {
              var St = I - rt[0], Zt = R - rt[1], Ve = C - rt[0], rr = E - rt[1], ir = 1 / _r(U1((St * Ve + Zt * rr) / (mn(St * St + Zt * Zt) * mn(Ve * Ve + rr * rr))) / 2), Wr = mn(rt[0] * rt[0] + rt[1] * rt[1]);
              M = me(b, (i - Wr) / (ir + 1)), A = me(D, (n - Wr) / (ir - 1));
            }
          }
        }
        if (!z)
          r.moveTo(f + I, h + R);
        else if (M > he) {
          var Wt = me(g, M), mt = me(m, M), W = sa(L, P, I, R, i, Wt, c), K = sa(C, E, G, B, i, mt, c);
          r.moveTo(f + W.cx + W.x0, h + W.cy + W.y0), M < b && Wt === mt ? r.arc(f + W.cx, h + W.cy, M, xt(W.y0, W.x0), xt(K.y0, K.x0), !c) : (Wt > 0 && r.arc(f + W.cx, h + W.cy, Wt, xt(W.y0, W.x0), xt(W.y1, W.x1), !c), r.arc(f, h, i, xt(W.cy + W.y1, W.cx + W.x1), xt(K.cy + K.y1, K.cx + K.x1), !c), mt > 0 && r.arc(f + K.cx, h + K.cy, mt, xt(K.y1, K.x1), xt(K.y0, K.x0), !c));
        } else
          r.moveTo(f + I, h + R), r.arc(f, h, i, u, l, !c);
        if (!(n > he) || !z)
          r.lineTo(f + G, h + B);
        else if (A > he) {
          var Wt = me(y, A), mt = me(p, A), W = sa(G, B, C, E, n, -mt, c), K = sa(I, R, L, P, n, -Wt, c);
          r.lineTo(f + W.cx + W.x0, h + W.cy + W.y0), A < D && Wt === mt ? r.arc(f + W.cx, h + W.cy, A, xt(W.y0, W.x0), xt(K.y0, K.x0), !c) : (mt > 0 && r.arc(f + W.cx, h + W.cy, mt, xt(W.y0, W.x0), xt(W.y1, W.x1), !c), r.arc(f, h, n, xt(W.cy + W.y1, W.cx + W.x1), xt(K.cy + K.y1, K.cx + K.x1), c), Wt > 0 && r.arc(f + K.cx, h + K.cy, Wt, xt(K.y1, K.x1), xt(K.y0, K.x0), !c));
        } else
          r.lineTo(f + G, h + B), r.arc(f, h, n, l, u, c);
      }
      r.closePath();
    }
  }
}
var Z1 = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
}(), lp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Z1();
  }, t.prototype.buildPath = function(e, i) {
    X1(e, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(ot);
lp.prototype.type = "sector";
const Un = lp;
var q1 = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
}(), fp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new q1();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.PI * 2;
    e.moveTo(n + i.r, a), e.arc(n, a, i.r, 0, o, !1), e.moveTo(n + i.r0, a), e.arc(n, a, i.r0, 0, o, !0);
  }, t;
}(ot);
fp.prototype.type = "ring";
const hp = fp;
function K1(r, t, e, i) {
  var n = [], a = [], o = [], s = [], u, l, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = r.length; c < v; c++)
      ui(f, f, r[c]), li(h, h, r[c]);
    ui(f, f, i[0]), li(h, h, i[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e)
      u = r[c ? c - 1 : v - 1], l = r[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      n.push(gm(r[c]));
      continue;
    } else
      u = r[c - 1], l = r[c + 1];
    ym(a, l, u), zo(a, a, t);
    var y = ou(d, u), p = ou(d, l), g = y + p;
    g !== 0 && (y /= g, p /= g), zo(o, a, -y), zo(s, a, p);
    var m = mf([], d, o), _ = mf([], d, s);
    i && (li(m, m, f), ui(m, m, h), li(_, _, f), ui(_, _, h)), n.push(m), n.push(_);
  }
  return e && n.push(n.shift()), n;
}
function cp(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = K1(n, i, e, t.smoothConstraint);
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
var Q1 = function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), vp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Q1();
  }, t.prototype.buildPath = function(e, i) {
    cp(e, i, !0);
  }, t;
}(ot);
vp.prototype.type = "polygon";
const dp = vp;
var J1 = function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), pp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new J1();
  }, t.prototype.buildPath = function(e, i) {
    cp(e, i, !1);
  }, t;
}(ot);
pp.prototype.type = "polyline";
const gp = pp;
var j1 = {}, tw = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), yp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new tw();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Hd(j1, i, this.style);
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
yp.prototype.type = "line";
const Vr = yp;
var Ot = [], ew = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
}();
function Ih(r, t, e) {
  var i = r.cpx2, n = r.cpy2;
  return i != null || n != null ? [
    (e ? Ef : _t)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Ef : _t)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? Lf : Ct)(r.x1, r.cpx1, r.x2, t),
    (e ? Lf : Ct)(r.y1, r.cpy1, r.y2, t)
  ];
}
var mp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new ew();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.x1, a = i.y1, o = i.x2, s = i.y2, u = i.cpx1, l = i.cpy1, f = i.cpx2, h = i.cpy2, c = i.percent;
    c !== 0 && (e.moveTo(n, a), f == null || h == null ? (c < 1 && ($a(n, u, o, c, Ot), u = Ot[1], o = Ot[2], $a(a, l, s, c, Ot), l = Ot[1], s = Ot[2]), e.quadraticCurveTo(u, l, o, s)) : (c < 1 && (Ya(n, u, f, o, c, Ot), u = Ot[1], f = Ot[2], o = Ot[3], Ya(a, l, h, s, c, Ot), l = Ot[1], h = Ot[2], s = Ot[3]), e.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return Ih(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var i = Ih(this.shape, e, !0);
    return wm(i, i);
  }, t;
}(ot);
mp.prototype.type = "bezier-curve";
const _p = mp;
var rw = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
}(), wp = function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new rw();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, u = i.endAngle, l = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, u, !l);
  }, t;
}(ot);
wp.prototype.type = "arc";
const Il = wp;
var iw = function(r) {
  k(t, r);
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
const nw = iw;
var aw = function() {
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
const Sp = aw;
var ow = function(r) {
  k(t, r);
  function t(e, i, n, a, o, s) {
    var u = r.call(this, o) || this;
    return u.x = e ?? 0, u.y = i ?? 0, u.x2 = n ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
}(Sp);
const sw = ow;
var uw = function(r) {
  k(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = i ?? 0.5, s.r = n ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(Sp);
const lw = uw;
var wr = [0, 0], Sr = [0, 0], ua = new nt(), la = new nt(), fw = function() {
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
    return ua.set(1 / 0, 1 / 0), la.set(0, 0), !this._intersectCheckOneSide(this, t, ua, la, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, ua, la, n, -1) && (i = !1, n) || n || nt.copy(e, i ? ua : la), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, n, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, wr), this._getProjMinMaxOnAxis(u, e._corners, Sr), wr[1] < Sr[0] || wr[0] > Sr[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(Sr[0] - wr[1]), h = Math.abs(wr[0] - Sr[1]);
        Math.min(f, h) > n.len() && (f < h ? nt.scale(n, l, -f * o) : nt.scale(n, l, h * o));
      } else if (i) {
        var f = Math.abs(Sr[0] - wr[1]), h = Math.abs(wr[0] - Sr[1]);
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
const ja = fw;
var hw = [], cw = function(r) {
  k(t, r);
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
      for (var e = new et(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var n = this._displayables[i], a = n.getBoundingRect().clone();
        n.needLocalTransform() && a.applyTransform(n.getLocalTransform(hw)), e.union(a);
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
}(Wn);
const vw = cw;
var dw = dt();
function pw(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    i ? (l = X(i.duration, 200), f = X(i.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), U(h) && (h = h(e, n)), U(l) && (l = l(e));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Rl(r, t, e, i, n, a, o) {
  var s = !1, u;
  U(n) ? (o = a, a = n, n = null) : V(n) && (a = n.cb, o = n.during, s = n.isFrom, u = n.removeOpt, n = n.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = pw(r, i, n, l ? u || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
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
function Ne(r, t, e, i, n, a) {
  Rl("update", r, t, e, i, n, a);
}
function zr(r, t, e, i, n, a) {
  Rl("enter", r, t, e, i, n, a);
}
function _n(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function xp(r, t, e, i, n, a) {
  _n(r) || Rl("leave", r, t, e, i, n, a);
}
function Rh(r, t, e, i) {
  r.removeTextContent(), r.removeTextGuideLine(), xp(r, {
    style: {
      opacity: 0
    }
  }, t, e, i);
}
function Ru(r, t, e) {
  function i() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(n) {
    n.isGroup || Rh(n, t, e, i);
  }) : Rh(r, t, e, i);
}
function gw(r) {
  dw(r).oldStyle = r.style;
}
var to = Math.max, eo = Math.min, Ou = {};
function yw(r) {
  return ot.extend(r);
}
var mw = z1;
function _w(r, t) {
  return mw(r, t);
}
function de(r, t) {
  Ou[r] = t;
}
function ww(r) {
  if (Ou.hasOwnProperty(r))
    return Ou[r];
}
function Ol(r, t, e, i) {
  var n = V1(r, t);
  return e && (i === "center" && (e = Tp(e, n.getBoundingRect())), Cp(n, e)), n;
}
function bp(r, t, e) {
  var i = new Ii({
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
        i.setStyle(Tp(t, a));
      }
    }
  });
  return i;
}
function Tp(r, t) {
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
var Sw = H1;
function Cp(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function En(r, t) {
  return Hd(r, r, {
    lineWidth: t
  }), r;
}
function xw(r) {
  return Gd(r.shape, r.shape, r.style), r;
}
var bw = Ar;
function Tw(r, t) {
  for (var e = dl([]); r && r !== t; )
    pi(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function Nl(r, t, e) {
  return t && !Ht(t) && (t = _l.getLocalTransform(t)), e && (t = gl([], t)), oe([], r, t);
}
function Cw(r, t, e) {
  var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -i : r === "right" ? i : 0, r === "top" ? -n : r === "bottom" ? n : 0];
  return a = Nl(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Oh(r) {
  return !r.isGroup;
}
function Dw(r) {
  return r.shape != null;
}
function Dp(r, t, e) {
  if (!r || !t)
    return;
  function i(o) {
    var s = {};
    return o.traverse(function(u) {
      Oh(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function n(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return Dw(o) && (s.shape = O({}, o.shape)), s;
  }
  var a = i(r);
  t.traverse(function(o) {
    if (Oh(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = n(o);
        o.attr(n(s)), Ne(o, u, e, st(o).dataIndex);
      }
    }
  });
}
function Mw(r, t) {
  return H(r, function(e) {
    var i = e[0];
    i = to(i, t.x), i = eo(i, t.x + t.width);
    var n = e[1];
    return n = to(n, t.y), n = eo(n, t.y + t.height), [i, n];
  });
}
function Aw(r, t) {
  var e = to(r.x, t.x), i = eo(r.x + r.width, t.x + t.width), n = to(r.y, t.y), a = eo(r.y + r.height, t.y + t.height);
  if (i >= e && a >= n)
    return {
      x: e,
      y: n,
      width: i - e,
      height: a - n
    };
}
function kl(r, t, e) {
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
    return r.indexOf("image://") === 0 ? (n.image = r.slice(8), at(n, e), new Ii(i)) : Ol(r.replace("path://", ""), i, e, "center");
}
function Ew(r, t, e, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (Mp(r, t, e, i, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function Mp(r, t, e, i, n, a, o, s) {
  var u = e - r, l = i - t, f = o - n, h = s - a, c = bs(f, h, u, l);
  if (Lw(c))
    return !1;
  var v = r - n, d = t - a, y = bs(v, d, u, l) / c;
  if (y < 0 || y > 1)
    return !1;
  var p = bs(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function bs(r, t, e, i) {
  return r * i - e * t;
}
function Lw(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function bo(r) {
  var t = r.itemTooltipOption, e = r.componentModel, i = r.itemName, n = F(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: i,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u && T(lt(u), function(f) {
    Fr(s, f) || (s[f] = u[f], s.$vars.push(f));
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
function Nh(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function Bl(r, t) {
  if (r)
    if (N(r))
      for (var e = 0; e < r.length; e++)
        Nh(r[e], t);
    else
      Nh(r, t);
}
de("circle", Pl);
de("ellipse", sp);
de("sector", Un);
de("ring", hp);
de("polygon", dp);
de("polyline", gp);
de("rect", yt);
de("line", Vr);
de("bezierCurve", _p);
de("arc", Il);
const Pw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Il,
  BezierCurve: _p,
  BoundingRect: et,
  Circle: Pl,
  CompoundPath: nw,
  Ellipse: sp,
  Group: se,
  Image: Ii,
  IncrementalDisplayable: vw,
  Line: Vr,
  LinearGradient: sw,
  OrientedBoundingRect: ja,
  Path: ot,
  Point: nt,
  Polygon: dp,
  Polyline: gp,
  RadialGradient: lw,
  Rect: yt,
  Ring: hp,
  Sector: Un,
  Text: ue,
  applyTransform: Nl,
  clipPointsByRect: Mw,
  clipRectByRect: Aw,
  createIcon: kl,
  extendPath: _w,
  extendShape: yw,
  getShapeClass: ww,
  getTransform: Tw,
  groupTransition: Dp,
  initProps: zr,
  isElementRemoved: _n,
  lineLineIntersect: Mp,
  linePolygonIntersect: Ew,
  makeImage: bp,
  makePath: Ol,
  mergePath: Sw,
  registerShape: de,
  removeElement: xp,
  removeElementWithFadeOut: Ru,
  resizePath: Cp,
  setTooltipConfig: bo,
  subPixelOptimize: bw,
  subPixelOptimizeLine: En,
  subPixelOptimizeRect: xw,
  transformDirection: Cw,
  traverseElements: Bl,
  updateProps: Ne
}, Symbol.toStringTag, { value: "Module" }));
var To = {};
function Iw(r, t) {
  for (var e = 0; e < je.length; e++) {
    var i = je[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function kh(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = U(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < je.length; l++) {
    var f = je[l], h = t[f];
    u[f] = X(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function Ap(r, t, e, i) {
  e = e || To;
  for (var n = r instanceof ue, a = !1, o = 0; o < wh.length; o++) {
    var s = t[wh[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = n ? r : r.getTextContent();
  if (a) {
    n || (u || (u = new ue(), r.setTextContent(u)), r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = kh(e, t), f = t.normal, h = !!f.getShallow("show"), c = Ti(f, i && i.normal, e, !1, !n);
    c.text = l.normal, n || r.setTextConfig(Bh(f, e, !1));
    for (var o = 0; o < je.length; o++) {
      var v = je[o], s = t[v];
      if (s) {
        var d = u.ensureState(v), y = !!X(s.getShallow("show"), h);
        if (y !== h && (d.ignore = !y), d.style = Ti(s, i && i[v], e, !0, !n), d.style.text = l[v], !n) {
          var p = r.ensureState(v);
          p.textConfig = Bh(s, e, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), e.enableTextSetter && (Fl(u).setLabelText = function(g) {
      var m = kh(e, t, g);
      Iw(u, m);
    });
  } else
    u && (u.ignore = !0);
  r.dirty();
}
function Rw(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < je.length; i++) {
    var n = je[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function Ti(r, t, e, i, n) {
  var a = {};
  return Ow(a, r, e, i, n), t && O(a, t), a;
}
function Bh(r, t, e) {
  t = t || {};
  var i = {}, n, a = r.getShallow("rotate"), o = X(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return n = r.getShallow("position") || (e ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", i;
}
function Ow(r, t, e, i, n) {
  e = e || To;
  var a = t.ecModel, o = a && a.option.textStyle, s = Nw(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        Hh(u[l] = {}, f, o, e, i, n, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), Hh(r, t, o, e, i, n, !0, !1);
}
function Nw(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || To).rich;
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
var Fh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Vh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], zh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Hh(r, t, e, i, n, a, o, s) {
  e = !n && e || To;
  var u = i && i.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = X(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && pt("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && pt("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || e.color, f = f || e.textBorderColor), l != null && (r.fill = l), f != null && (r.stroke = f);
  var c = X(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = X(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = X(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (r.opacity = h), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var y = 0; y < Fh.length; y++) {
    var p = Fh[y], g = X(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var y = 0; y < Vh.length; y++) {
    var p = Vh[y], g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var m = t.getShallow("baseline");
    m != null && (r.verticalAlign = m);
  }
  if (!o || !i.disableBox) {
    for (var y = 0; y < zh.length; y++) {
      var p = zh[y], g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var _ = t.getShallow("borderType");
    _ != null && (r.borderDash = _), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && pt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = u), (r.borderColor === "auto" || r.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && pt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = u);
  }
}
function kw(r, t) {
  var e = t && t.getModel("textStyle");
  return Se([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Fl = dt();
function Bw(r, t, e, i) {
  if (r) {
    var n = Fl(r);
    n.prevValue = n.value, n.value = e;
    var a = t.normal;
    n.valueAnimation = a.get("valueAnimation"), n.valueAnimation && (n.precision = a.get("precision"), n.defaultInterpolatedText = i, n.statesModels = t);
  }
}
var Fw = ["textStyle", "color"], Ts = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Cs = new ue(), Vw = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(Fw) : null);
    }, r.prototype.getFont = function() {
      return kw({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < Ts.length; i++)
        e[Ts[i]] = this.getShallow(Ts[i]);
      return Cs.useStyle(e), Cs.update(), Cs.getBoundingRect();
    }, r;
  }()
);
const zw = Vw;
var Ep = [
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
], Hw = An(Ep), Gw = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return Hw(this, t);
    }, r;
  }()
), Lp = [
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
], Ww = An(Lp), Uw = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return Ww(this, t, e);
    }, r;
  }()
), Hr = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.parentModel = e, this.ecModel = i, this.option = t;
    }
    return r.prototype.init = function(t, e, i) {
    }, r.prototype.mergeOption = function(t, e) {
      tt(this.option, t, !0);
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
Cl(Hr);
d0(Hr);
Ce(Hr, Gw);
Ce(Hr, Uw);
Ce(Hr, _0);
Ce(Hr, zw);
const Mt = Hr;
var Yw = Math.round(Math.random() * 10);
function Co(r) {
  return [r || "", Yw++].join("_");
}
function $w(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = xe(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = xe(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function Xw(r, t) {
  r.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = e(o), f = l.graph, h = l.noEntryList, c = {};
    for (T(a, function(m) {
      c[m] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], y = !!c[v];
      y && (s.call(u, v, d.originalDeps.slice()), delete c[v]), T(d.successor, y ? g : p);
    }
    T(c, function() {
      var m = "";
      throw process.env.NODE_ENV !== "production" && (m = Ja("Circular dependency may exists: ", c, a, o)), new Error(m);
    });
    function p(m) {
      f[m].entryCount--, f[m].entryCount === 0 && h.push(m);
    }
    function g(m) {
      c[m] = !0, p(m);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return T(a, function(u) {
      var l = i(o, u), f = l.originalDeps = t(u), h = n(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), T(h, function(c) {
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
    return T(a, function(u) {
      it(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function Pp(r, t) {
  return tt(tt({}, r, !0), t, !0);
}
const Zw = {
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
}, qw = {
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
var ro = "ZH", Vl = "EN", yi = Vl, Fa = {}, zl = {}, Ip = $.domSupported ? function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || yi).toUpperCase()
  );
  return r.indexOf(ro) > -1 ? ro : yi;
}() : yi;
function Rp(r, t) {
  r = r.toUpperCase(), zl[r] = new Mt(t), Fa[r] = t;
}
function Kw(r) {
  if (F(r)) {
    var t = Fa[r.toUpperCase()] || {};
    return r === ro || r === Vl ? Q(t) : tt(Q(t), Q(Fa[yi]), !1);
  } else
    return tt(Q(r), Q(Fa[yi]), !1);
}
function Qw(r) {
  return zl[r];
}
function Jw() {
  return zl[yi];
}
Rp(Vl, Zw);
Rp(ro, qw);
var Hl = 1e3, Gl = Hl * 60, wn = Gl * 60, ae = wn * 24, Gh = ae * 365, ln = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, fa = "{yyyy}-{MM}-{dd}", Wh = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: fa,
  hour: fa + " " + ln.hour,
  minute: fa + " " + ln.minute,
  second: fa + " " + ln.second,
  millisecond: ln.none
}, Ds = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Op = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Ge(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function mi(r) {
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
function jw(r) {
  return r === mi(r);
}
function tS(r) {
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
function Do(r, t, e, i) {
  var n = Oe(r), a = n[Wl(e)](), o = n[_i(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = n[Mo(e)](), l = n["get" + (e ? "UTC" : "") + "Day"](), f = n[Ln(e)](), h = (f - 1) % 12 + 1, c = n[Ao(e)](), v = n[Eo(e)](), d = n[Lo(e)](), y = f >= 12 ? "pm" : "am", p = y.toUpperCase(), g = i instanceof Mt ? i : Qw(i || Ip) || Jw(), m = g.getModel("time"), _ = m.get("month"), w = m.get("monthAbbr"), S = m.get("dayOfWeek"), x = m.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, y + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Ge(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, w[o - 1]).replace(/{MM}/g, Ge(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Ge(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, S[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Ge(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Ge(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Ge(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Ge(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Ge(d, 3)).replace(/{S}/g, d + "");
}
function eS(r, t, e, i, n) {
  var a = null;
  if (F(e))
    a = e;
  else if (U(e))
    a = e(r.value, t, {
      level: r.level
    });
  else {
    var o = O({}, ln);
    if (r.level > 0)
      for (var s = 0; s < Ds.length; ++s)
        o[Ds[s]] = "{primary|" + o[Ds[s]] + "}";
    var u = e ? e.inherit === !1 ? e : at(e, o) : o, l = Np(r.value, n);
    if (u[l])
      a = u[l];
    else if (u.inherit) {
      for (var f = Op.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (N(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      h = Math.min(h, a.length - 1), a = a[h];
    }
  }
  return Do(new Date(r.value), a, n, i);
}
function Np(r, t) {
  var e = Oe(r), i = e[_i(t)]() + 1, n = e[Mo(t)](), a = e[Ln(t)](), o = e[Ao(t)](), s = e[Eo(t)](), u = e[Lo(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, c = h && a === 0, v = c && n === 1, d = v && i === 1;
  return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function Uh(r, t, e) {
  var i = ht(r) ? Oe(r) : r;
  switch (t = t || Np(r, e), t) {
    case "year":
      return i[Wl(e)]();
    case "half-year":
      return i[_i(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((i[_i(e)]() + 1) / 4);
    case "month":
      return i[_i(e)]();
    case "day":
      return i[Mo(e)]();
    case "half-day":
      return i[Ln(e)]() / 24;
    case "hour":
      return i[Ln(e)]();
    case "minute":
      return i[Ao(e)]();
    case "second":
      return i[Eo(e)]();
    case "millisecond":
      return i[Lo(e)]();
  }
}
function Wl(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function _i(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function Mo(r) {
  return r ? "getUTCDate" : "getDate";
}
function Ln(r) {
  return r ? "getUTCHours" : "getHours";
}
function Ao(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function Eo(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Lo(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function rS(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function kp(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function Bp(r) {
  return r ? "setUTCDate" : "setDate";
}
function Fp(r) {
  return r ? "setUTCHours" : "setHours";
}
function Vp(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function zp(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function Hp(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function Gp(r) {
  if (!Dd(r))
    return F(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function Wp(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, i) {
    return i.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var Po = Kv;
function Nu(r, t, e) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && Se(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var u = o ? Oe(r) : r;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else
      return Do(u, i, e);
  }
  if (t === "ordinal")
    return Wa(r) ? n(r) : ht(r) && a(r) ? r + "" : "-";
  var l = Qa(r);
  return a(l) ? Gp(l) : Wa(r) ? n(r) : typeof r == "boolean" ? r + "" : "-";
}
var Yh = ["a", "b", "c", "d", "e", "f", "g"], Ms = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function Up(r, t, e) {
  N(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = Yh[a];
    r = r.replace(Ms(o), Ms(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      r = r.replace(Ms(Yh[u], s), e ? kt(l) : l);
    }
  return r;
}
function iS(r, t) {
  var e = F(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, i = e.color, n = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!i)
    return "";
  if (a === "html")
    return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + kt(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + kt(i) + ";" + (t || "") + '"></span>';
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
function Pn(r, t) {
  return t = t || "transparent", F(r) ? r : V(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var Va = T, nS = ["left", "right", "top", "bottom", "width", "height"], ha = [["width", "left", "right"], ["height", "top", "bottom"]];
function Ul(r, t, e, i, n) {
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
var Sn = Ul;
vt(Ul, "vertical");
vt(Ul, "horizontal");
function io(r, t, e) {
  e = Po(e || 0);
  var i = t.width, n = t.height, a = Pt(r.left, i), o = Pt(r.top, n), s = Pt(r.right, i), u = Pt(r.bottom, n), l = Pt(r.width, i), f = Pt(r.height, n), h = e[2] + e[0], c = e[1] + e[3], v = r.aspect;
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
  var d = new et(a + e[3], o + e[0], l, f);
  return d.margin = e, d;
}
function In(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return V(t) ? t : t ? {
    type: t
  } : null;
}
function Ci(r, t, e) {
  var i = e && e.ignoreSize;
  !N(i) && (i = [i, i]);
  var n = o(ha[0], 0), a = o(ha[1], 1);
  l(ha[0], r, n), l(ha[1], r, a);
  function o(f, h) {
    var c = {}, v = 0, d = {}, y = 0, p = 2;
    if (Va(f, function(_) {
      d[_] = r[_];
    }), Va(f, function(_) {
      s(t, _) && (c[_] = d[_] = t[_]), u(c, _) && v++, u(d, _) && y++;
    }), i[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (y === p || !v)
      return d;
    if (v >= p)
      return c;
    for (var g = 0; g < f.length; g++) {
      var m = f[g];
      if (!s(c, m) && s(r, m)) {
        c[m] = r[m];
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
    Va(f, function(v) {
      h[v] = c[v];
    });
  }
}
function Io(r) {
  return aS({}, r);
}
function aS(r, t) {
  return t && r && Va(nS, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var oS = dt(), Ri = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = Co("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = In(this), a = n ? Io(e) : {}, o = i.getTheme();
      tt(e, o.get(this.mainType)), tt(e, this.getDefaultOption()), n && Ci(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      tt(this.option, e, !0);
      var n = In(this);
      n && Ci(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!h0(e))
        return e.defaultOption;
      var i = oS(this);
      if (!i.defaultOption) {
        for (var n = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && n.push(o), a = a.superClass;
        }
        for (var s = {}, u = n.length - 1; u >= 0; u--)
          s = tt(s, n[u], !0);
        i.defaultOption = s;
      }
      return i.defaultOption;
    }, t.prototype.getReferringComponents = function(e, i) {
      var n = e + "Index", a = e + "Id";
      return Gn(this.ecModel, e, {
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
  }(Mt)
);
Id(Ri, Mt);
_o(Ri);
$w(Ri);
Xw(Ri, sS);
function sS(r) {
  var t = [];
  return T(Ri.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = H(t, function(e) {
    return xe(e).main;
  }), r !== "dataset" && it(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
const ut = Ri;
var Yp = "";
typeof navigator < "u" && (Yp = navigator.platform || "");
var Jr = "rgba(0, 0, 0, 0.2)";
const uS = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: Jr,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Jr,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Jr,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Jr,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Jr,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Jr,
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
    fontFamily: Yp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var ku = q(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), le = "original", Gt = "arrayRows", Me = "objectRows", Be = "keyedColumns", Ie = "typedArray", $p = "unknown", Re = "column", Oi = "row", Yt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Xp = dt();
function lS(r) {
  Xp(r).datasetMap = q();
}
function fS(r, t, e) {
  var i = {}, n = Zp(t);
  if (!n || !r)
    return i;
  var a = [], o = [], s = t.ecModel, u = Xp(s).datasetMap, l = n.uid + "_" + e.seriesLayoutBy, f, h;
  r = r.slice(), T(r, function(y, p) {
    var g = V(y) ? y : r[p] = {
      name: y
    };
    g.type === "ordinal" && f == null && (f = p, h = d(g)), i[g.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  T(r, function(y, p) {
    var g = y.name, m = d(y);
    if (f == null) {
      var _ = c.valueWayDim;
      v(i[g], _, m), v(o, _, m), c.valueWayDim += m;
    } else if (f === p)
      v(i[g], 0, m), v(a, 0, m);
    else {
      var _ = c.categoryWayDim;
      v(i[g], _, m), v(o, _, m), c.categoryWayDim += m;
    }
  });
  function v(y, p, g) {
    for (var m = 0; m < g; m++)
      y.push(p + m);
  }
  function d(y) {
    var p = y.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (i.itemName = a), o.length && (i.seriesName = o), i;
}
function Zp(r) {
  var t = r.get("data", !0);
  if (!t)
    return Gn(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, ve).models[0];
}
function hS(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Gn(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, ve).models;
}
function qp(r, t) {
  return cS(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function cS(r, t, e, i, n, a) {
  var o, s = 5;
  if (Rt(r))
    return Yt.Not;
  var u, l;
  if (i) {
    var f = i[a];
    V(f) ? (u = f.name, l = f.type) : F(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? Yt.Must : Yt.Not;
  if (t === Gt) {
    var h = r;
    if (e === Oi) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === Me) {
    var y = r;
    if (!u)
      return Yt.Not;
    for (var v = 0; v < y.length && v < s; v++) {
      var p = y[v];
      if (p && (o = w(p[u])) != null)
        return o;
    }
  } else if (t === Be) {
    var g = r;
    if (!u)
      return Yt.Not;
    var c = g[u];
    if (!c || Rt(c))
      return Yt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null)
        return o;
  } else if (t === le)
    for (var m = r, v = 0; v < m.length && v < s; v++) {
      var p = m[v], _ = zn(p);
      if (!N(_))
        return Yt.Not;
      if ((o = w(_[a])) != null)
        return o;
    }
  function w(S) {
    var x = F(S);
    if (S != null && Number.isFinite(Number(S)) && S !== "")
      return x ? Yt.Might : Yt.Not;
    if (x && S !== "-")
      return Yt.Must;
  }
  return Yt.Not;
}
var vS = q();
function dS(r, t, e) {
  var i = vS.get(t);
  if (!i)
    return e;
  var n = i(r);
  if (!n)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      Z(Si(n[a]));
  return e.concat(n);
}
var $h = dt();
dt();
var Yl = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = It(this.get("color", !0)), a = this.get("colorLayer", !0);
      return gS(this, $h, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      yS(this, $h);
    }, r;
  }()
);
function pS(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function gS(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(n))
    return l[n];
  var f = o == null || !i ? e : pS(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return n && (l[n] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function yS(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var ca, Yi, Xh, As = "\0_ec_inner", Zh = 1, mS = {
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
}, _S = {
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
}, no = {};
function wS(r) {
  T(r, function(t, e) {
    if (!ut.hasClass(e)) {
      var i = mS[e];
      i && !no[i] && (At("Component " + e + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), no[i] = !0);
    }
  });
}
var Kp = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Mt(a), this._locale = new Mt(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      process.env.NODE_ENV !== "production" && (Z(e != null, "option is null/undefined"), Z(e[As] !== Zh, "please use chart.getOption()"));
      var a = Qh(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, Qh(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && wS(o), !this.option || e === "recreate" ? Xh(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (n = !0, this._mergeOption(s, i));
      }
      if (!e || e === "recreate" || e === "media") {
        var u = a.getMediaOption(this);
        u.length && T(u, function(l) {
          n = !0, this._mergeOption(l, i);
        }, this);
      }
      return n;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, i) {
      var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = q(), l = i && i.replaceMergeMainTypeMap;
      lS(this), T(e, function(h, c) {
        h != null && (ut.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : n[c] = n[c] == null ? Q(h) : tt(n[c], h, !0));
      }), l && l.each(function(h, c) {
        ut.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), ut.topologicalTravel(s, ut.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = dS(this, h, It(e[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), y = Q_(v, c, d);
        n0(y, h, ut), n[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], m = 0, _, w;
        T(y, function(S, x) {
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
                var C = S.keyInfo.subType, E = _S[C];
                no[C] || (no[C] = !0, At(E ? "Series " + C + ` is used but not imported.
import { ` + E + ` } from 'echarts/charts';
echarts.use([` + E + "]);" : "Unknown series " + C));
              }
              return;
            }
            if (h === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (w || (Bt("Currently only one tooltip component is allowed."), w = !0));
                return;
              }
              _ = !0;
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
          b ? (p.push(b.option), g.push(b), m++) : (p.push(void 0), g.push(void 0));
        }, this), n[h] = p, a.set(h, g), o.set(h, m), h === "series" && ca(this);
      }
      this._seriesIndices || ca(this);
    }, t.prototype.getOption = function() {
      var e = Q(this.option);
      return T(e, function(i, n) {
        if (ut.hasClass(n)) {
          for (var a = It(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Si(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[As], e;
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
      return n != null ? (u = [], T(It(n), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = qh("id", a, s) : o != null ? u = qh("name", o, s) : u = wt(s, function(l) {
        return !!l;
      }), Kh(u, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : wt(this._componentsMap.get(n), function(l) {
        return !!l;
      });
      return u(Kh(o, e));
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
        return e.filter ? wt(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (U(e)) {
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
      var i = be(e, null);
      return wt(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return wt(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return wt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      Yi(this), T(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      T(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      Yi(this), T(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return T(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return Yi(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      Yi(this);
      var n = [];
      T(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = q(n);
    }, t.prototype.restoreData = function(e) {
      ca(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        ut.hasClass(o) && n.push(o);
      }), ut.topologicalTravel(n, ut.getAllClassMainTypes(), function(a) {
        T(i.get(a), function(o) {
          o && (a !== "series" || !SS(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      ca = function(e) {
        var i = e._seriesIndices = [];
        T(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = q(i);
      }, Yi = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, Xh = function(e, i) {
        e.option = {}, e.option[As] = Zh, e._componentsMap = q({
          series: []
        }), e._componentsCount = q();
        var n = i.aria;
        V(n) && n.enabled == null && (n.enabled = !0), xS(i, e._theme.option), tt(i, uS, !1), e._mergeOption(i, null);
      };
    }(), t;
  }(Mt)
);
function SS(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function xS(r, t) {
  var e = r.color && !r.colorLayer;
  T(t, function(i, n) {
    n === "colorLayer" && e || ut.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? tt(r[n], i, !1) : Q(i) : r[n] == null && (r[n] = i));
  });
}
function qh(r, t, e) {
  if (N(t)) {
    var i = q();
    return T(t, function(a) {
      if (a != null) {
        var o = be(a, null);
        o != null && i.set(a, !0);
      }
    }), wt(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = be(t, null);
    return wt(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function Kh(r, t) {
  return t.hasOwnProperty("subType") ? wt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function Qh(r) {
  var t = q();
  return r && T(It(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && Z(ut.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Ce(Kp, Yl);
const Qp = Kp;
var bS = [
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
], TS = (
  /** @class */
  function() {
    function r(t) {
      T(bS, function(e) {
        this[e] = ft(t[e], t);
      }, this);
    }
    return r;
  }()
);
const Jp = TS;
var Es = {}, CS = (
  /** @class */
  function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var i = [];
      T(Es, function(n, a) {
        var o = n.create(t, e);
        i = i.concat(o || []);
      }), this._coordinateSystems = i;
    }, r.prototype.update = function(t, e) {
      T(this._coordinateSystems, function(i) {
        i.update && i.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      Es[t] = e;
    }, r.get = function(t) {
      return Es[t];
    }, r;
  }()
);
const $l = CS;
var DS = /^(min|max)?(.+)$/, MS = (
  /** @class */
  function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (T(It(t.series), function(o) {
        o && o.data && Rt(o.data) && au(o.data);
      }), T(It(t.dataset), function(o) {
        o && o.source && Rt(o.source) && au(o.source);
      })), t = Q(t);
      var n = this._optionBackup, a = AS(t, e, !n);
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
        ES(n[u].query, e, i) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !PS(o, this._currentMediaIndices) && (s = H(o, function(f) {
        return Q(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  }()
);
function AS(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (N(l) ? T(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && V(v.query) && V(v.query.option) && At("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? i.push(v) : n || (n = v));
  }) : process.env.NODE_ENV !== "production" && At("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), T(u, function(v) {
    return c(v);
  }), T(i, function(v) {
    return c(v.option);
  });
  function c(v) {
    T(t, function(d) {
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
function ES(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return T(r, function(a, o) {
    var s = o.match(DS);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      LS(i[l], a, u) || (n = !1);
    }
  }), n;
}
function LS(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function PS(r, t) {
  return r.join(",") === t.join(",");
}
const IS = MS;
var qt = T, Rn = V, Jh = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Ls(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = Jh.length; e < i; e++) {
      var n = Jh[e], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && pt("itemStyle.normal." + n, n), r[n] = r[n] || {}, r[n].normal ? tt(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && pt("itemStyle.emphasis." + n, "emphasis." + n), r[n] = r[n] || {}, r[n].emphasis ? tt(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function Dt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && Te("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, at(r[t], i)) : r[t] = i), n && (process.env.NODE_ENV !== "production" && Te(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function fn(r) {
  Dt(r, "itemStyle"), Dt(r, "lineStyle"), Dt(r, "areaStyle"), Dt(r, "label"), Dt(r, "labelLine"), Dt(r, "upperLabel"), Dt(r, "edgeLabel");
}
function ct(r, t) {
  var e = Rn(r) && r[t], i = Rn(e) && e.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && Te("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = jf.length; n < a; n++) {
      var o = jf[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
  }
}
function te(r) {
  r && (fn(r), ct(r, "label"), r.emphasis && ct(r.emphasis, "label"));
}
function RS(r) {
  if (Rn(r)) {
    Ls(r), fn(r), ct(r, "label"), ct(r, "upperLabel"), ct(r, "edgeLabel"), r.emphasis && (ct(r.emphasis, "label"), ct(r.emphasis, "upperLabel"), ct(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (Ls(t), te(t));
    var e = r.markLine;
    e && (Ls(e), te(e));
    var i = r.markArea;
    i && te(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Rt(a))
        for (var o = 0; o < a.length; o++)
          te(a[o]);
      T(r.categories, function(l) {
        fn(l);
      });
    }
    if (n && !Rt(n))
      for (var o = 0; o < n.length; o++)
        te(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        te(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        N(u[o]) ? (te(u[o][0]), te(u[o][1])) : te(u[o]);
    r.type === "gauge" ? (ct(r, "axisLabel"), ct(r, "title"), ct(r, "detail")) : r.type === "treemap" ? (Dt(r.breadcrumb, "itemStyle"), T(r.levels, function(l) {
      fn(l);
    })) : r.type === "tree" && fn(r.leaves);
  }
}
function Ee(r) {
  return N(r) ? r : r ? [r] : [];
}
function jh(r) {
  return (N(r) ? r[0] : r) || {};
}
function OS(r, t) {
  qt(Ee(r.series), function(i) {
    Rn(i) && RS(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), qt(e, function(i) {
    qt(Ee(r[i]), function(n) {
      n && (ct(n, "axisLabel"), ct(n.axisPointer, "label"));
    });
  }), qt(Ee(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    ct(n, "axisLabel"), ct(n && n.axisPointer, "label");
  }), qt(Ee(r.calendar), function(i) {
    Dt(i, "itemStyle"), ct(i, "dayLabel"), ct(i, "monthLabel"), ct(i, "yearLabel");
  }), qt(Ee(r.radar), function(i) {
    ct(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && Te("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && Te("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && qt(i.indicator, function(n) {
      n.text && pt("text", "name", "radar.indicator");
    });
  }), qt(Ee(r.geo), function(i) {
    Rn(i) && (te(i), qt(Ee(i.regions), function(n) {
      te(n);
    }));
  }), qt(Ee(r.timeline), function(i) {
    te(i), Dt(i, "label"), Dt(i, "itemStyle"), Dt(i, "controlStyle", !0);
    var n = i.data;
    N(n) && T(n, function(a) {
      V(a) && (Dt(a, "label"), Dt(a, "itemStyle"));
    });
  }), qt(Ee(r.toolbox), function(i) {
    Dt(i, "iconStyle"), qt(i.feature, function(n) {
      Dt(n, "iconStyle");
    });
  }), ct(jh(r.axisPointer), "label"), ct(jh(r.tooltip).axisPointer, "label");
}
function NS(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function kS(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  (i || a[n[s]] == null) && (a[n[s]] = e);
}
function tc(r) {
  r && T(BS, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var BS = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], FS = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Ps = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function $i(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Ps.length; e++) {
      var i = Ps[e][1], n = Ps[e][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && pt(i, n));
    }
}
function ec(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && pt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function rc(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && pt("downplay", "blur", "sunburst"));
}
function VS(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && pt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function jp(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && jp(r[e].children, t);
}
function tg(r, t) {
  OS(r, t), r.series = It(r.series), T(r.series, function(e) {
    if (V(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && pt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && pt("clockWise", "clockwise")), ec(e.label);
        var n = e.data;
        if (n && !Rt(n))
          for (var a = 0; a < n.length; a++)
            ec(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && pt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = NS(e, "pointer.color");
        o != null && kS(e, "itemStyle.color", o);
      } else if (i === "bar") {
        $i(e), $i(e.backgroundStyle), $i(e.emphasis);
        var n = e.data;
        if (n && !Rt(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && ($i(n[a]), $i(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && pt("highlightPolicy", "emphasis.focus", "sunburst"))), rc(e), jp(e.data, rc);
      } else
        i === "graph" || i === "sankey" ? VS(e) : i === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && pt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && Te("`mapLocation` is not used anymore."), at(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && pt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), tc(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), T(FS, function(e) {
    var i = r[e];
    i && (N(i) || (i = [i]), T(i, function(n) {
      tc(n);
    }));
  });
}
function zS(r) {
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
  }), t.each(HS);
}
function HS(r) {
  T(r, function(t, e) {
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
          var m = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && m > 0 || u === "negative" && m < 0 || u === "samesign" && c >= 0 && m > 0 || u === "samesign" && c <= 0 && m < 0) {
            c = W_(c, m), y = m;
            break;
          }
        }
      }
      return i[0] = c, i[1] = y, i;
    });
  });
}
var Ro = (
  /** @class */
  function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === Be ? {} : []), this.sourceFormat = t.sourceFormat || $p, this.seriesLayoutBy = t.seriesLayoutBy || Re, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && qp(this, i) === Yt.Must && (n.type = "ordinal");
        }
    }
    return r;
  }()
);
function Xl(r) {
  return r instanceof Ro;
}
function Bu(r, t, e) {
  e = e || eg(r);
  var i = t.seriesLayoutBy, n = WS(r, e, i, t.sourceHeader, t.dimensions), a = new Ro({
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
function Zl(r) {
  return new Ro({
    data: r,
    sourceFormat: Rt(r) ? Ie : le
  });
}
function GS(r) {
  return new Ro({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: Q(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function eg(r) {
  var t = $p;
  if (Rt(r))
    t = Ie;
  else if (N(r)) {
    r.length === 0 && (t = Gt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (N(n) || Rt(n)) {
          t = Gt;
          break;
        } else if (V(n)) {
          t = Me;
          break;
        }
      }
    }
  } else if (V(r)) {
    for (var a in r)
      if (Fr(r, a) && Ht(r[a])) {
        t = Be;
        break;
      }
  }
  return t;
}
function WS(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: ic(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Gt) {
    var s = r;
    i === "auto" || i == null ? nc(function(l) {
      l != null && l !== "-" && (F(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = ht(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], nc(function(l, f) {
      n[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === Oi ? s.length : s[0] ? s[0].length : null;
  } else if (t === Me)
    n || (n = US(r));
  else if (t === Be)
    n || (n = [], T(r, function(l, f) {
      n.push(f);
    }));
  else if (t === le) {
    var u = zn(r[0]);
    a = N(u) && u.length || 1;
  } else
    t === Ie && process.env.NODE_ENV !== "production" && Z(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: ic(n),
    dimensionsDetectedCount: a
  };
}
function US(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return lt(e);
}
function ic(r) {
  if (r) {
    var t = q();
    return H(r, function(e, i) {
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
function nc(r, t, e, i) {
  if (t === Oi)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function rg(r) {
  var t = r.sourceFormat;
  return t === Me || t === Be;
}
var xr, br, Tr, ac, oc, ig = (
  /** @class */
  function() {
    function r(t, e) {
      var i = Xl(t) ? t : Zl(t);
      this._source = i;
      var n = this._data = i.data;
      if (i.sourceFormat === Ie) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = n;
      }
      oc(this, n, i);
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
      oc = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = ac[ql(l, f)];
        if (process.env.NODE_ENV !== "production" && Z(v, "Invalide sourceFormat: " + l), O(o, v), l === Ie)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = ng(l, f);
          o.getItem = ft(d, null, s, h, c);
          var y = ag(l, f);
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
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], y = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], m = 0; m < p; m++) {
            var _ = f[m * h + c];
            g[o + m] = _, _ < d && (d = _), _ > y && (y = _);
          }
          v[0] = d, v[1] = y;
        }
      }, n = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      ac = (t = {}, t[Gt + "_" + Re] = {
        pure: !0,
        appendData: a
      }, t[Gt + "_" + Oi] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Me] = {
        pure: !0,
        appendData: a
      }, t[Be] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          T(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[le] = {
        appendData: a
      }, t[Ie] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && Z(Rt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
), sc = function(r, t, e, i) {
  return r[i];
}, YS = (xr = {}, xr[Gt + "_" + Re] = function(r, t, e, i) {
  return r[i + t];
}, xr[Gt + "_" + Oi] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[i] : null;
  }
  return a;
}, xr[Me] = sc, xr[Be] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = r[s];
    a[o] = u ? u[i] : null;
  }
  return a;
}, xr[le] = sc, xr);
function ng(r, t) {
  var e = YS[ql(r, t)];
  return process.env.NODE_ENV !== "production" && Z(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var uc = function(r, t, e) {
  return r.length;
}, $S = (br = {}, br[Gt + "_" + Re] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, br[Gt + "_" + Oi] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, br[Me] = uc, br[Be] = function(r, t, e) {
  var i = e[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = r[i];
  return n ? n.length : 0;
}, br[le] = uc, br);
function ag(r, t) {
  var e = $S[ql(r, t)];
  return process.env.NODE_ENV !== "production" && Z(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var Is = function(r, t, e) {
  return r[t];
}, XS = (Tr = {}, Tr[Gt] = Is, Tr[Me] = function(r, t, e) {
  return r[e];
}, Tr[Be] = Is, Tr[le] = function(r, t, e) {
  var i = zn(r);
  return i instanceof Array ? i[t] : i;
}, Tr[Ie] = Is, Tr);
function og(r) {
  var t = XS[r];
  return process.env.NODE_ENV !== "production" && Z(t, 'Do not support get value on "' + r + '".'), t;
}
function ql(r, t) {
  return r === Gt ? r + "_" + t : r;
}
function Di(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return og(a)(i, o, s);
      } else {
        var u = i;
        return a === le && (u = zn(i)), u;
      }
    }
  }
}
var ZS = /\{@(.+?)\}/g, qS = (
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
      if (o && (u.value = o.interpolatedValue), n != null && N(u.value) && (u.value = u.value[n]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (U(a))
        return u.status = e, u.dimensionIndex = n, a(u);
      if (F(a)) {
        var f = Up(a, u);
        return f.replace(ZS, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && At("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var y = Di(s, t, d);
          if (o && N(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (y = o.interpolatedValue[p]);
          }
          return y != null ? y + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Di(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  }()
);
function lc(r) {
  var t, e;
  return V(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + Ja(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function xn(r) {
  return new KS(r);
}
var KS = (
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
      function f(m) {
        return !(m >= 1) && (m = 1), m;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(i)), this._modBy = u, this._modDataCount = l;
      var c = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && Z(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && Z(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!i && (h || v < d)) {
          var y = this._progress;
          if (N(y))
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
      fc.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: fc.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), N(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
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
), fc = function() {
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
function za(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !ht(r) && r != null && r !== "-" && (r = +Oe(r)), r == null || r === "" ? NaN : Number(r));
}
q({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Oe(r);
  },
  trim: function(r) {
    return F(r) ? Se(r) : r;
  }
});
var QS = (
  /** @class */
  function() {
    function r(t, e) {
      var i = t === "desc";
      this._resultLT = i ? 1 : -1, e == null && (e = i ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var i = ht(t) ? t : Qa(t), n = ht(e) ? e : Qa(e), a = isNaN(i), o = isNaN(n);
      if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
        var s = F(t), u = F(e);
        s && (i = u ? t : 0), u && (n = s ? e : 0);
      }
      return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
    }, r;
  }()
), JS = (
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
      return za(t, e);
    }, r;
  }()
);
function jS(r, t) {
  var e = new JS(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Re && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Ft(o));
  var s = [], u = {}, l = r.dimensionsDefine;
  if (l)
    T(l, function(y, p) {
      var g = y.name, m = {
        index: p,
        name: g,
        displayName: y.displayName
      };
      if (s.push(m), g != null) {
        var _ = "";
        Fr(u, g) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + g + '" duplicated.'), Ft(_)), u[g] = m;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = ng(n, Re);
  t.__isBuiltIn && (e.getRawDataItem = function(y) {
    return h(i, a, s, y);
  }, e.getRawData = ft(tx, null, r)), e.cloneRawData = ft(ex, null, r);
  var c = ag(n, Re);
  e.count = ft(c, null, i, a, s);
  var v = og(n);
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
  return e.getDimensionInfo = ft(rx, null, s, u), e.cloneAllDimensionInfo = ft(ix, null, s), e;
}
function tx(r) {
  var t = r.sourceFormat;
  if (!Kl(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), Ft(e);
  }
  return r.data;
}
function ex(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Kl(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), Ft(i);
  }
  if (t === Gt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === Me) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(O({}, e[a]));
    return n;
  }
}
function rx(r, t, e) {
  if (e != null) {
    if (ht(e) || !isNaN(e) && !Fr(t, e))
      return r[e];
    if (Fr(t, e))
      return t[e];
  }
}
function ix(r) {
  return Q(r);
}
var sg = q();
function nx(r) {
  r = Q(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), Ft(e));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), Ft(e));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, sg.set(t, r);
}
function ax(r, t, e) {
  var i = It(r), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Ft(a));
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    t = ox(u, t, e, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function ox(r, t, e, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), Ft(n)), V(r) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof r + "."), Ft(n));
  var a = r.type, o = sg.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), Ft(n));
  var s = H(t, function(f) {
    return jS(f, o);
  }), u = It(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: Q(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var l = H(u, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", Ja(f.data), "- transform result dimensions:", Ja(f.dimensions)].join(`
`);
    }).join(`
`);
    Z_(l);
  }
  return H(u, function(f, h) {
    var c = "";
    V(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), Ft(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), Ft(c));
    var v = eg(f.data);
    Kl(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), Ft(c));
    var d, y = t[0];
    if (y && h === 0 && !f.dimensions) {
      var p = y.startIndex;
      p && (f.data = y.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: Re,
        sourceHeader: p,
        dimensions: y.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Re,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return Bu(f.data, d, null);
  });
}
function Kl(r) {
  return r === Gt || r === Me;
}
var Oo = "undefined", sx = typeof Uint32Array === Oo ? Array : Uint32Array, ux = typeof Uint16Array === Oo ? Array : Uint16Array, ug = typeof Int32Array === Oo ? Array : Int32Array, hc = typeof Float64Array === Oo ? Array : Float64Array, lg = {
  float: hc,
  int: ug,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: hc
}, Rs;
function jr(r) {
  return r > 65535 ? sx : ux;
}
function ti() {
  return [1 / 0, -1 / 0];
}
function lx(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function cc(r, t, e, i, n) {
  var a = lg[e || "float"];
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
var Fu = (
  /** @class */
  function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = q();
    }
    return r.prototype.initData = function(t, e, i) {
      process.env.NODE_ENV !== "production" && Z(U(t.getItem) && U(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = Rs[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [];
      var o = rg(n);
      this._dimensions = H(e, function(s) {
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
      }, i.set(t, a), this._chunks[a] = new lg[e || "float"](this._rawCount), this._rawExtent[a] = ti(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = ti());
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
        cc(i, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = n[d], y = Rs.arrayRows.call(this, t[v] || h, f.property, v, d);
          i[d][c] = y;
          var p = o[d];
          y < p[0] && (p[0] = y), y > p[1] && (p[1] = y);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = H(o, function(m) {
        return m.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = ti()), cc(a, f, h.type, e, i);
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
        var i = jr(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = jr(i._rawCount), o = new a(n), s = [], u = t.length, l = 0, f = t[0], h = i._chunks, c = 0; c < n; c++) {
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
      var o = e.count(), s = jr(e._rawCount), u = new s(o), l = 0, f = n[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
      if (!e._indices) {
        var y = 0;
        if (a === 1) {
          for (var p = v[n[0]], g = 0; g < i; g++) {
            var m = p[g];
            (m >= h && m <= c || isNaN(m)) && (u[l++] = y), y++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = v[n[0]], _ = v[n[1]], w = t[n[1]][0], S = t[n[1]][1], g = 0; g < i; g++) {
            var m = p[g], x = _[g];
            (m >= h && m <= c || isNaN(m)) && (x >= w && x <= S || isNaN(x)) && (u[l++] = y), y++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var b = e.getRawIndex(g), m = v[n[0]][b];
            (m >= h && m <= c || isNaN(m)) && (u[l++] = b);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var D = !0, b = e.getRawIndex(g), M = 0; M < a; M++) {
              var A = n[M], m = v[A][b];
              (m < t[A][0] || m > t[A][1]) && (D = !1);
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
        l[e[f]] = ti();
      for (var h = 0; h < s; h++) {
        for (var c = t.getRawIndex(h), v = 0; v < o; v++)
          u[v] = n[e[v]][c];
        u[o] = h;
        var d = i && i.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var y = e[f], p = d[f], g = l[y], m = n[y];
            m && (m[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, c, v = new (jr(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var y = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + y) / 2, m = 0, _ = y; _ < p; _++) {
          var w = this.getRawIndex(_), S = a[w];
          isNaN(S) || (m += S);
        }
        m /= p - y;
        var x = d, b = Math.min(d + u, o), D = d - 1, M = a[l];
        f = -1, c = x;
        for (var A = -1, C = 0, _ = x; _ < b; _++) {
          var w = this.getRawIndex(_), S = a[w];
          if (isNaN(S)) {
            C++, A < 0 && (A = w);
            continue;
          }
          h = Math.abs((D - g) * (S - M) - (D - _) * (m - M)), h > f && (f = h, c = w);
        }
        C > 0 && C < b - x && (v[s++] = Math.min(A, c), c = Math.max(A, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = v, i.getRawIndex = this._getRawIdx, i;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var i = this.clone([t], !0), n = i._chunks, a = Math.floor(1 / e), o = n[t], s = this.count(), u = new (jr(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, c = o[this.getRawIndex(h)], v = f, d = o[this.getRawIndex(v)], y = a;
        f + a > s && (y = s - f);
        for (var p = 0; p < y; p++) {
          var g = this.getRawIndex(f + p), m = o[g];
          m < c && (c = m, h = f + p), m > d && (d = m, v = f + p);
        }
        var _ = this.getRawIndex(h), w = this.getRawIndex(v);
        h < v ? (u[l++] = _, u[l++] = w) : (u[l++] = w, u[l++] = _);
      }
      return i._count = l, i._indices = u, i._updateGetRawIdx(), i;
    }, r.prototype.downSample = function(t, e, i, n) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = ti(), c = new (jr(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var y = 0; y < u; y++) {
          var p = this.getRawIndex(d + y);
          s[y] = l[p];
        }
        var g = i(s), m = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
        l[m] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = m;
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
      var e = this._chunks[t], i = ti();
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
      var i = new r(), n = this._chunks, a = t && Li(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? lx(n[o]) : n[o];
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
        return za(e[a], this._dimensions[a]);
      }
      Rs = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return za(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return za(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    }(), r;
  }()
), fx = (
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
      if (Xi(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Rt(s) ? Ie : le, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = X(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = X(h.sourceHeader, c.sourceHeader), y = X(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || y;
        n = p ? [Bu(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: y
        }, u)] : [];
      } else {
        var g = t;
        if (i) {
          var m = this._applyTransform(e);
          n = m.sourceList, a = m.upstreamSignList;
        } else {
          var _ = g.get("source", !0);
          n = [Bu(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && Z(n && a), this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && Z(n != null || i != null), n != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), vc(a));
      }
      var o, s = [], u = [];
      return T(t, function(l) {
        l.prepareSource();
        var f = l.getSource(n || 0), h = "";
        n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), vc(h)), s.push(f), u.push(l._getVersionSign());
      }), i ? o = ax(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [GS(s[0])]), {
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
      process.env.NODE_ENV !== "production" && Z(Xi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Xi(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, i) : (s = new Fu(), s.initData(new ig(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (Xi(t)) {
        var e = Zp(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return H(hS(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (Xi(t))
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
function Xi(r) {
  return r.mainType === "series";
}
function vc(r) {
  throw new Error(r);
}
var hx = "line-height:1";
function fg(r) {
  var t = r.lineHeight;
  return t == null ? hx : "line-height:" + kt(t + "") + "px";
}
function hg(r, t) {
  var e = r.color || "#6e7079", i = r.fontSize || 12, n = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + kt(i + "") + "px;color:" + kt(e) + ";font-weight:" + kt(n + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + kt(o + "") + "px;color:" + kt(a) + ";font-weight:" + kt(s + "")
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
var cx = [0, 10, 20, 30], vx = ["", `
`, `

`, `


`];
function On(r, t) {
  return t.type = r, t;
}
function Vu(r) {
  return r.type === "section";
}
function cg(r) {
  return Vu(r) ? dx : px;
}
function vg(r) {
  if (Vu(r)) {
    var t = 0, e = r.blocks.length, i = e > 1 || e > 0 && !r.noHeader;
    return T(r.blocks, function(n) {
      var a = vg(n);
      a >= t && (t = a + +(i && // 0 always can not be readable gap level.
      (!a || Vu(n) && !n.noHeader)));
    }), t;
  }
  return 0;
}
function dx(r, t, e, i) {
  var n = t.noHeader, a = gx(vg(t)), o = [], s = t.blocks || [];
  Z(!s || N(s)), s = s || [];
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (Fr(l, u)) {
      var f = new QS(l[u], null);
      s.sort(function(y, p) {
        return f.evaluate(y.sortParam, p.sortParam);
      });
    } else
      u === "seriesDesc" && s.reverse();
  }
  T(s, function(y, p) {
    var g = t.valueFormatter, m = cg(y)(
      // Inherit valueFormatter
      g ? O(O({}, r), {
        valueFormatter: g
      }) : r,
      y,
      p > 0 ? a.html : 0,
      i
    );
    m != null && o.push(m);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : zu(i, o.join(""), n ? e : a.html);
  if (n)
    return h;
  var c = Nu(t.header, "ordinal", r.useUTC), v = hg(i, r.renderMode).nameStyle, d = fg(i);
  return r.renderMode === "richText" ? dg(r, c, v) + a.richText + h : zu(i, '<div style="' + v + ";" + d + ';">' + kt(c) + "</div>" + h, e);
}
function px(r, t, e, i) {
  var n = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(w) {
    return w = N(w) ? w : [w], H(w, function(S, x) {
      return Nu(S, N(v) ? v[x] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", n), c = a ? "" : Nu(u, "ordinal", l), v = t.valueType, d = o ? [] : f(t.value, t.dataIndex), y = !s || !a, p = !s && a, g = hg(i, n), m = g.nameStyle, _ = g.valueStyle;
    return n === "richText" ? (s ? "" : h) + (a ? "" : dg(r, c, m)) + (o ? "" : _x(r, d, y, p, _)) : zu(i, (s ? "" : h) + (a ? "" : yx(c, !s, m)) + (o ? "" : mx(d, y, p, _)), e);
  }
}
function dc(r, t, e, i, n, a) {
  if (r) {
    var o = cg(r), s = {
      useUTC: n,
      renderMode: e,
      orderMode: i,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function gx(r) {
  return {
    html: cx[r],
    richText: vx[r]
  };
}
function zu(r, t, e) {
  var i = '<div style="clear:both"></div>', n = "margin: " + e + "px 0 0", a = fg(r);
  return '<div style="' + n + ";" + a + ';">' + t + i + "</div>";
}
function yx(r, t, e) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + i + '">' + kt(r) + "</span>";
}
function mx(r, t, e, i) {
  var n = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + n : "";
  return r = N(r) ? r : [r], '<span style="' + a + ";" + i + '">' + H(r, function(o) {
    return kt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function dg(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function _x(r, t, e, i, n) {
  var a = [n], o = i ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(N(t) ? t.join("  ") : t, a);
}
function Sx(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return Pn(i);
}
function pg(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var Os = (
  /** @class */
  function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = Md();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, i) {
      var n = i === "richText" ? this._generateStyleName() : null, a = iS({
        color: e,
        type: t,
        renderMode: i,
        markerId: n
      });
      return F(a) ? a : (process.env.NODE_ENV !== "production" && Z(n), this.richTextStyles[n] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var i = {};
      N(e) ? T(e, function(a) {
        return O(i, a);
      }) : O(i, e);
      var n = this._generateStyleName();
      return this.richTextStyles[n] = i, "{" + n + "|" + t + "}";
    }, r;
  }()
);
function xx(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = N(s), l = Sx(t, e), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = bx(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var y = n.getDimensionInfo(a[0]);
    v = f = Di(n, e, a[0]), h = y.type;
  } else
    v = f = u ? s[0] : s;
  var p = bl(t), g = p && t.name || "", m = n.getName(e), _ = i ? g : m;
  return On("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !p,
    sortParam: v,
    blocks: [On("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Se(_),
      value: f,
      valueType: h,
      dataIndex: e
    })].concat(c || [])
  });
}
function bx(r, t, e, i, n) {
  var a = t.getData(), o = Li(r, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  i.length ? T(i, function(h) {
    f(Di(a, e, h), h);
  }) : T(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(On("nameValue", {
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
var We = dt();
function va(r, t) {
  return r.getName(t) || r.getId(t);
}
var Tx = "__universalTransitionEnabled", No = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = xn({
        count: Dx,
        reset: Mx
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = We(this).sourceManager = new fx(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      gc(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && Z(o, "getInitialData returned invalid data."), We(this).dataBeforeProcessed = o, pc(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = In(this), a = n ? Io(e) : {}, o = this.subType;
      ut.hasClass(o) && (o += "Series"), tt(e, i.getTheme().get(this.subType)), tt(e, this.getDefaultOption()), Jf(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && Ci(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = tt(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = In(this);
      n && Ci(this.option, e, n);
      var a = We(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      gc(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, We(this).dataBeforeProcessed = o, pc(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Rt(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && Jf(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = Hu(this);
      if (i) {
        var n = i.context.data;
        return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
      } else
        return We(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var i = Hu(this);
      if (i) {
        var n = i.context;
        n.outputData = e, i !== this.dataTask && (n.data = e);
      }
      We(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return q(e);
    }, t.prototype.getSourceManager = function() {
      return We(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return We(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, i, n) {
      return xx({
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
      var a = this.ecModel, o = Yl.prototype.getColorFromPalette.call(this, e, i, n);
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
          var u = e[s], l = va(o, u);
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
      return (n === "all" || n[va(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[Tx])
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
            var h = i[f], c = va(e, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = i[u - 1], c = va(e, v);
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
Ce(No, qS);
Ce(No, Yl);
Id(No, ut);
function pc(r) {
  var t = r.name;
  bl(r) || (r.name = Cx(r) || t);
}
function Cx(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return T(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function Dx(r) {
  return r.model.getRawData().count();
}
function Mx(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), Ax;
}
function Ax(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function gc(r, t) {
  T(dm(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, vt(Ex, t));
  });
}
function Ex(r, t) {
  var e = Hu(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function Hu(r) {
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
const Mi = No;
var Ql = (
  /** @class */
  function() {
    function r() {
      this.group = new se(), this.uid = Co("viewComponent");
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
Cl(Ql);
_o(Ql);
const tr = Ql;
function gg() {
  var r = dt();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var yg = dt(), Lx = gg(), Jl = (
  /** @class */
  function() {
    function r() {
      this.group = new se(), this.uid = Co("viewChart"), this.renderTask = xn({
        plan: Px,
        reset: Ix
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
        process.env.NODE_ENV !== "production" && At("Unknown dataType " + n.dataType);
        return;
      }
      mc(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && At("Unknown dataType " + n.dataType);
        return;
      }
      mc(a, n, "normal");
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
      Bl(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      yg(t).updateMethod = e;
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.type = "chart";
    }(), r;
  }()
);
function yc(r, t, e) {
  r && bi(r) && (t === "emphasis" ? Du : Mu)(r, e);
}
function mc(r, t, e) {
  var i = Hn(r, t), n = t && t.highlightKey != null ? P1(t.highlightKey) : null;
  i != null ? T(It(i), function(a) {
    yc(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    yc(a, e, n);
  });
}
Cl(Jl, ["dispose"]);
_o(Jl);
function Px(r) {
  return Lx(r.model);
}
function Ix(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && yg(n).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, i, n), Rx[u];
}
var Rx = {
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
const wi = Jl;
var ao = "\0__throttleOriginMethod", _c = "\0__throttleRate", wc = "\0__throttleType";
function jl(r, t, e) {
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
function mg(r, t, e, i) {
  var n = r[t];
  if (n) {
    var a = n[ao] || n, o = n[wc], s = n[_c];
    if (s !== e || o !== i) {
      if (e == null || !i)
        return r[t] = a;
      n = r[t] = jl(a, e, i === "debounce"), n[ao] = a, n[wc] = i, n[_c] = e;
    }
    return n;
  }
}
function Gu(r, t) {
  var e = r[t];
  e && e[ao] && (e.clear && e.clear(), r[t] = e[ao]);
}
var Sc = dt(), xc = {
  itemStyle: An(Lp, !0),
  lineStyle: An(Ep, !0)
}, Ox = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function _g(r, t) {
  var e = r.visualStyleMapper || xc[t];
  return e || (console.warn("Unknown style type '" + t + "'."), xc.itemStyle);
}
function wg(r, t) {
  var e = r.visualDrawType || Ox[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var Nx = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = _g(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = wg(r, i), l = o[u], f = U(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || U(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || U(o.stroke) ? c : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var y = r.getDataParams(d), p = O({}, o);
          p[u] = f(y), v.setItemVisual(d, "style", p);
        }
      };
  }
}, Zi = new Mt(), kx = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = _g(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[i]) {
            Zi.option = u[i];
            var l = n(Zi), f = o.ensureUniqueItemVisual(s, "style");
            O(f, l), Zi.option.decal && (o.setItemVisual(s, "decal", Zi.option.decal), Zi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, Bx = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = q();
    r.eachSeries(function(e) {
      var i = e.getColorBy();
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), Sc(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = Sc(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = wg(e, s);
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
}, da = Math.PI;
function Fx(r, t) {
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
  var e = new se(), i = new yt({
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
  }), a = new yt({
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
  return t.showSpinner && (o = new Il({
    shape: {
      startAngle: -da / 2,
      endAngle: -da / 2 + 0.1,
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
    endAngle: da * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: da * 3 / 2
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
var Vx = (
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
      T(this._allHandlers, function(n) {
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
      T(t, function(u, l) {
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
              var m = o.getPerformArgs(p, n.block);
              m.skip = !u.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(m) && (a = !0);
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
        var c = h.uid, v = s.set(c, o && o.get(c) || xn({
          plan: Ux,
          reset: Yx,
          count: Xx
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
      var a = this, o = e.overallTask = e.overallTask || xn({
        reset: zx
      });
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = q(), l = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), Z(!t.createOnAllSeries, v), l ? i.eachRawSeriesByType(l, d) : f ? f(i, n).each(d) : (h = !1, T(i.getSeries(), d));
      function d(y) {
        var p = y.uid, g = u.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, xn({
          reset: Hx,
          onDirty: Wx
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
      return U(t) && (t = {
        overallReset: t,
        seriesType: Zx(t)
      }), t.uid = Co("stageHandler"), e && (t.visualType = e), t;
    }, r;
  }()
);
function zx(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function Hx(r) {
  return r.overallProgress && Gx;
}
function Gx() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function Wx() {
  this.agent && this.agent.dirty();
}
function Ux(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function Yx(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = It(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? H(t, function(e, i) {
    return Sg(i);
  }) : $x;
}
var $x = Sg(0);
function Sg(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else
      n && n.progress && n.progress(t, i);
  };
}
function Xx(r) {
  return r.data.count();
}
function Zx(r) {
  oo = null;
  try {
    r(Nn, xg);
  } catch {
  }
  return oo;
}
var Nn = {}, xg = {}, oo;
bg(Nn, Qp);
bg(xg, Jp);
Nn.eachSeriesByType = Nn.eachRawSeriesByType = function(r) {
  oo = r;
};
Nn.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (oo = r.subType);
};
function bg(r, t) {
  for (var e in t.prototype)
    r[e] = zt;
}
const Tg = Vx;
var bc = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const qx = {
  color: bc,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], bc]
};
var Tt = "#B9B8CE", Tc = "#100C2A", pa = function() {
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
}, Cc = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], Cg = {
  darkMode: !0,
  color: Cc,
  backgroundColor: Tc,
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
      color: Tc
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
  timeAxis: pa(),
  logAxis: pa(),
  valueAxis: pa(),
  categoryAxis: pa(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Cc
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
Cg.categoryAxis.splitLine.show = !1;
const Kx = Cg;
var Qx = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (F(t)) {
        var a = xe(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        T(t, function(u, l) {
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
), Wu = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Dc = Wu.concat(["symbolKeepAspect"]), Jx = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < Wu.length; o++) {
      var s = Wu[o], u = r.get(s);
      U(u) ? (a = !0, n[s] = u) : i[s] = u;
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
}, jx = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < Dc.length; s++) {
        var u = Dc[s], l = o.getShallow(u, !0);
        l != null && n.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function tb(r, t, e) {
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
function eb(r, t) {
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
function ei(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && Te("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Hn(h, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: N(c) ? h.getName(c[0]) : h.getName(c),
          selected: F(u) ? u : O({}, u)
        });
      }
  }));
}
function rb(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (ei("map", "selectchanged", t, n, i), ei("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (ei("map", "selected", t, n, i), ei("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (ei("map", "unselected", t, n, i), ei("pie", "unselected", t, n, i));
  });
}
function hn(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var ib = Math.round(Math.random() * 9), nb = typeof Object.defineProperty == "function", ab = function() {
  function r() {
    this._id = "__ec_inner_" + ib++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return nb ? Object.defineProperty(i, this._id, {
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
const ob = ab;
var sb = ot.extend({
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
}), ub = ot.extend({
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
}), lb = ot.extend({
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
}), fb = ot.extend({
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
}), hb = {
  line: Vr,
  rect: yt,
  roundRect: yt,
  square: yt,
  circle: Pl,
  diamond: ub,
  pin: lb,
  arrow: fb,
  triangle: sb
}, cb = {
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
}, Uu = {};
T(hb, function(r, t) {
  Uu[t] = new r();
});
var vb = ot.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = qa(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = Uu[i];
      n || (i = "rect", n = Uu[i]), cb[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function db(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function tf(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = bp(r.slice(8), new et(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = Ol(r.slice(7), {}, new et(t, e, i, n), o ? "center" : "cover") : u = new vb({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), u.__isEmptyBrush = s, u.setColor = db, a && u.setColor(a), u;
}
function pb(r, t) {
  if (r != null)
    return N(r) || (r = [r, r]), [Pt(r[0], t[0]) || 0, Pt(X(r[1], r[0]), t[1]) || 0];
}
function Er(r) {
  return isFinite(r);
}
function gb(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = Er(i) ? i : 0, n = Er(n) ? n : 1, a = Er(a) ? a : 0, o = Er(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function yb(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, u = u * a), o = Er(o) ? o : 0.5, s = Er(s) ? s : 0.5, u = u >= 0 && Er(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Yu(r, t, e) {
  for (var i = t.type === "radial" ? yb(r, t, e) : gb(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function mb(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function ga(r) {
  return parseInt(r, 10);
}
function ya(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || ga(s[i]) || ga(r.style[i])) - (ga(s[a]) || 0) - (ga(s[o]) || 0) | 0;
}
function _b(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : ht(r) ? [r] : N(r) ? r : null;
}
function Dg(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && _b(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = H(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var wb = new xi(!0);
function so(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Mc(r) {
  return typeof r == "string" && r !== "none";
}
function uo(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Ac(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function Ec(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function $u(r, t, e) {
  var i = Rd(t.image, t.__image, e);
  if (wo(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * pm), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function Sb(r, t, e, i) {
  var n, a = so(e), o = uo(e), s = e.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || wb, h = t.__dirty;
  if (!i) {
    var c = e.fill, v = e.stroke, d = o && !!c.colorStops, y = a && !!v.colorStops, p = o && !!c.image, g = a && !!v.image, m = void 0, _ = void 0, w = void 0, S = void 0, x = void 0;
    (d || y) && (x = t.getBoundingRect()), d && (m = h ? Yu(r, c, x) : t.__canvasFillGradient, t.__canvasFillGradient = m), y && (_ = h ? Yu(r, v, x) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), p && (w = h || !t.__canvasFillPattern ? $u(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (S = h || !t.__canvasStrokePattern ? $u(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? r.fillStyle = m : p && (w ? r.fillStyle = w : o = !1), y ? r.strokeStyle = _ : g && (S ? r.strokeStyle = S : a = !1);
  }
  var b = t.getGlobalScale();
  f.setScale(b[0], b[1], t.segmentIgnoreThreshold);
  var D, M;
  r.setLineDash && e.lineDash && (n = Dg(t), D = n[0], M = n[1]);
  var A = !0;
  (l || h & oi) && (f.setDPR(r.dpr), u ? f.setContext(null) : (f.setContext(r), A = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), A && f.rebuildPath(r, u ? s : 1), D && (r.setLineDash(D), r.lineDashOffset = M), i || (e.strokeFirst ? (a && Ec(r, e), o && Ac(r, e)) : (o && Ac(r, e), a && Ec(r, e))), D && r.setLineDash([]);
}
function xb(r, t, e) {
  var i = t.__image = Rd(e.image, t.__image, t, t.onload);
  if (!(!i || !wo(i))) {
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
function bb(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || kr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = Dg(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (so(e) && r.strokeText(n, e.x, e.y), uo(e) && r.fillText(n, e.x, e.y)) : (uo(e) && r.fillText(n, e.x, e.y), so(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var Lc = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Pc = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Mg(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    Vt(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Rr.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (Vt(r, n), a = !0), r.globalCompositeOperation = t.blend || Rr.blend);
  for (var s = 0; s < Lc.length; s++) {
    var u = Lc[s];
    (i || t[u] !== e[u]) && (a || (Vt(r, n), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (Vt(r, n), a = !0), r.shadowColor = t.shadowColor || Rr.shadowColor), a;
}
function Ic(r, t, e, i, n) {
  var a = kn(t, n.inHover), o = i ? null : e && kn(e, n.inHover) || {};
  if (a === o)
    return !1;
  var s = Mg(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (Vt(r, n), s = !0), Mc(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (Vt(r, n), s = !0), Mc(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (Vt(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Vt(r, n), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < Pc.length; f++) {
    var h = Pc[f], c = h[0];
    (i || a[c] !== o[c]) && (s || (Vt(r, n), s = !0), r[c] = a[c] || h[1]);
  }
  return s;
}
function Tb(r, t, e, i, n) {
  return Mg(r, kn(t, n.inHover), e && kn(e, n.inHover), i, n);
}
function Ag(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function Cb(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), Ag(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function Db(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Rc = 1, Oc = 2, Nc = 3, kc = 4;
function Mb(r) {
  var t = uo(r), e = so(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Vt(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function kn(r, t) {
  return t && r.__hoverStyle || r.style;
}
function Eg(r, t) {
  Lr(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Lr(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~$t, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, u = !1;
  if ((!o || mb(a, o)) && (o && o.length && (Vt(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (Vt(r, e), r.save(), Cb(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof ot && t.autoBatch && Mb(t.style);
  s || Db(n, l.transform) ? (Vt(r, e), Ag(r, t)) : f || Vt(r, e);
  var h = kn(t, e.inHover);
  t instanceof ot ? (e.lastDrawType !== Rc && (u = !0, e.lastDrawType = Rc), Ic(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), Sb(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Cu ? (e.lastDrawType !== Nc && (u = !0, e.lastDrawType = Nc), Ic(r, t, l, u, e), bb(r, t, h)) : t instanceof Ii ? (e.lastDrawType !== Oc && (u = !0, e.lastDrawType = Oc), Tb(r, t, l, u, e), xb(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== kc && (u = !0, e.lastDrawType = kc), Ab(r, t, e)), f && i && Vt(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function Ab(r, t, e) {
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
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Lr(r, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Lr(r, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var Ns = new ob(), Bc = new Vn(100), Fc = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Xu(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && Ns.delete(r);
  var a = Ns.get(r);
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
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, Ns.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < Fc.length; ++c) {
      var v = o[Fc[c]];
      if (v != null && !N(v) && !F(v) && !ht(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var y = Bc.get(d);
      y && (n ? l.svgElement = y : l.image = y);
    }
    var p = Pg(o.dashArrayX), g = Eb(o.dashArrayY), m = Lg(o.symbol), _ = Lb(p), w = Ig(g), S = !n && Ai.createCanvas(), x = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, b = M(), D;
    S && (S.width = b.width * e, S.height = b.height * e, D = S.getContext("2d")), A(), h && Bc.put(d, S || x), l.image = S, l.svgElement = x, l.svgWidth = b.width, l.svgHeight = b.height;
    function M() {
      for (var C = 1, E = 0, L = _.length; E < L; ++E)
        C = Kf(C, _[E]);
      for (var P = 1, E = 0, L = m.length; E < L; ++E)
        P = Kf(P, m[E].length);
      C *= P;
      var I = w * _.length * m.length;
      if (process.env.NODE_ENV !== "production") {
        var R = function(G) {
          console.warn("Calculated decal size is greater than " + G + " due to decal option settings so " + G + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + G + " to be larger to avoid incontinuity.");
        };
        C > o.maxTileWidth && R("maxTileWidth"), I > o.maxTileHeight && R("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(C, o.maxTileWidth)),
        height: Math.max(1, Math.min(I, o.maxTileHeight))
      };
    }
    function A() {
      D && (D.clearRect(0, 0, S.width, S.height), o.backgroundColor && (D.fillStyle = o.backgroundColor, D.fillRect(0, 0, S.width, S.height)));
      for (var C = 0, E = 0; E < g.length; ++E)
        C += g[E];
      if (C <= 0)
        return;
      for (var L = -w, P = 0, I = 0, R = 0; L < b.height; ) {
        if (P % 2 === 0) {
          for (var G = I / 2 % m.length, B = 0, z = 0, Y = 0; B < b.width * 2; ) {
            for (var J = 0, E = 0; E < p[R].length; ++E)
              J += p[R][E];
            if (J <= 0)
              break;
            if (z % 2 === 0) {
              var rt = (1 - o.symbolSize) * 0.5, St = B + p[R][z] * rt, Zt = L + g[P] * rt, Ve = p[R][z] * o.symbolSize, rr = g[P] * o.symbolSize, ir = Y / 2 % m[G].length;
              Wr(St, Zt, Ve, rr, m[G][ir]);
            }
            B += p[R][z], ++Y, ++z, z === p[R].length && (z = 0);
          }
          ++R, R === p.length && (R = 0);
        }
        L += g[P], ++I, ++P, P === g.length && (P = 0);
      }
      function Wr(Wt, mt, W, K, nr) {
        var Et = n ? 1 : e, df = tf(nr, Wt * Et, mt * Et, W * Et, K * Et, o.color, o.symbolKeepAspect);
        if (n) {
          var pf = i.painter.renderOneToVNode(df);
          pf && x.children.push(pf);
        } else
          Eg(D, df);
      }
    }
  }
}
function Lg(r) {
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
    return Lg([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    F(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function Pg(r) {
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
    return Pg([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (ht(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = H(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function Eb(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (ht(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = H(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function Lb(r) {
  return H(r, function(t) {
    return Ig(t);
  });
}
function Ig(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function Pb(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var u = i.ensureUniqueItemVisual(o, "style");
          u.decal = Xu(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = Xu(n, t);
      }
    }
  });
}
var Ib = new De();
const _e = Ib;
var lo = {};
function Rb(r, t) {
  process.env.NODE_ENV !== "production" && lo[r] && At("Already has an implementation of " + r + "."), lo[r] = t;
}
function Ob(r) {
  return process.env.NODE_ENV !== "production" && (lo[r] || At("Implementation of " + r + " doesn't exists.")), lo[r];
}
var Nb = 1, kb = 800, Bb = 900, Fb = 1e3, Vb = 2e3, zb = 5e3, Rg = 1e3, Hb = 1100, ef = 2e3, Og = 3e3, Gb = 4e3, ko = 4500, Wb = 4600, Ub = 5e3, Yb = 6e3, Ng = 7e3, $b = {
  PROCESSOR: {
    FILTER: Fb,
    SERIES_FILTER: kb,
    STATISTIC: zb
  },
  VISUAL: {
    LAYOUT: Rg,
    PROGRESSIVE_LAYOUT: Hb,
    GLOBAL: ef,
    CHART: Og,
    POST_CHART_LAYOUT: Wb,
    COMPONENT: Gb,
    BRUSH: Ub,
    CHART_ITEM: ko,
    ARIA: Yb,
    DECAL: Ng
  }
}, bt = "__flagInMainProcess", Nt = "__pendingUpdate", ks = "__needsUpdateStatus", Vc = /^[a-zA-Z0-9_]+$/;
function kg(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      Ut(this.id);
      return;
    }
    return Fg(this, r, t);
  };
}
function Bg(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Fg(this, r, t);
  };
}
function Fg(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), De.prototype[t].apply(r, e);
}
var Vg = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  }(De)
), zg = Vg.prototype;
zg.on = Bg("on");
zg.off = Bg("off");
var ri, Bs, ma, Ue, Fs, Vs, zs, qi, Ki, zc, Hc, Hs, Gc, _a, Wc, Kt, Uc, Xb = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e, i, n) {
      var a = r.call(this, new Qx()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, F(i) && (i = Hg[i]), a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          $.hasGlobalWindow ? window : global
        );
        l && (o = X(l.__ECHARTS__DEFAULT__RENDERER__, o), s = X(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = X(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      n.ssr;
      var f = a._zr = Xf(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: X(n.useDirtyRect, u),
        useCoarsePointer: X(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = jl(ft(f.flush, f), 17), i = Q(i), i && tg(i, !0), a._theme = i, a._locale = Kw(n.locale || Ip), a._coordSysMgr = new $l();
      var h = a._api = Wc(a);
      function c(v, d) {
        return v.__prio - d.__prio;
      }
      return La(co, c), La(Zu, c), a._scheduler = new Tg(a, h, Zu, co), a._messageCenter = new Vg(), a._initEvents(), a.resize = ft(a.resize, a), f.animation.on("frame", a._onframe, a), zc(f, a), Hc(f, a), au(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        Uc(this);
        var e = this._scheduler;
        if (this[Nt]) {
          var i = this[Nt].silent;
          this[bt] = !0;
          try {
            ri(this), Ue.update.call(this, null, this[Nt].updateParams);
          } catch (u) {
            throw this[bt] = !1, this[Nt] = null, u;
          }
          this._zr.flush(), this[bt] = !1, this[Nt] = null, qi.call(this, i), Ki.call(this, i);
        } else if (e.unfinished) {
          var n = Nb, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), Vs(this, a), e.performVisualTasks(a), _a(this, this._model, o, "remain", {}), n -= +/* @__PURE__ */ new Date() - s;
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
        process.env.NODE_ENV !== "production" && At("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      var a, o, s;
      if (V(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[bt] = !0, !this._model || i) {
        var u = new IS(this._api), l = this._theme, f = this._model = new Qp();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, qu);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (n)
        this[Nt] = {
          silent: a,
          updateParams: h
        }, this[bt] = !1, this.getZr().wakeUp();
      else {
        try {
          ri(this), Ue.update.call(this, null, h);
        } catch (c) {
          throw this[Nt] = null, this[bt] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Nt] = null, this[bt] = !1, qi.call(this, a), Ki.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      Te("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
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
      return process.env.NODE_ENV !== "production" && pt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
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
        return T(i, function(n) {
          n.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      e = e || {};
      var i = e.excludeComponents, n = this._model, a = [], o = this;
      T(i, function(u) {
        n.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return T(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (qb[n]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        T(Yc, function(_, w) {
          if (_.group === n) {
            var S = i ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(Q(e)), x = _.getDom().getBoundingClientRect();
            u = a(x.left, u), l = a(x.top, l), f = o(x.right, f), h = o(x.bottom, h), c.push({
              dom: S,
              left: x.left,
              top: x.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, y = h - l, p = Ai.createCanvas(), g = Xf(p, {
          renderer: i ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: y
        }), i) {
          var m = "";
          return T(c, function(_) {
            var w = _.left - u, S = _.top - l;
            m += '<g transform="translate(' + w + "," + S + ')">' + _.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = m, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new yt({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: y
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), T(c, function(_) {
            var w = new Ii({
              style: {
                x: _.left * v - u,
                y: _.top * v - l,
                image: _.dom
              }
            });
            g.add(w);
          }), g.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, i) {
      return Fs(this, "convertToPixel", e, i);
    }, t.prototype.convertFromPixel = function(e, i) {
      return Fs(this, "convertFromPixel", e, i);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      var n = this._model, a, o = ss(n, e);
      return T(o, function(s, u) {
        u.indexOf("Models") >= 0 && T(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(i);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(i, l) : process.env.NODE_ENV !== "production" && Bt(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && Bt(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, i) {
      var n = this._model, a = ss(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Bt("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? tb(s, u, i) : eb(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      T(Zb, function(i) {
        var n = function(a) {
          var o = e.getModel(), s = a.target, u, l = i === "globalout";
          if (l ? u = {} : s && hn(s, function(d) {
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
            process.env.NODE_ENV !== "production" && !l && !(c && v) && Bt("model or view can not be found by params"), u.event = a, u.type = i, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: u,
              model: c,
              view: v
            }, e.trigger(i, u);
          }
        };
        n.zrEventfulCallAtLast = !0, e._zr.on(i, n, e);
      }), T(ho, function(i, n) {
        e._messageCenter.on(n, function(a) {
          this.trigger(n, a);
        }, e);
      }), T(["selectchanged"], function(i) {
        e._messageCenter.on(i, function(n) {
          this.trigger(i, n);
        }, e);
      }), rb(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && s0(this.getDom(), Kb, "");
      var i = this, n = i._api, a = i._model;
      T(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), T(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete Yc[i.id];
    }, t.prototype.resize = function(e) {
      if (this[bt]) {
        process.env.NODE_ENV !== "production" && At("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      this._zr.resize(e);
      var i = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!i) {
        var n = i.resetOption("media"), a = e && e.silent;
        this[Nt] && (a == null && (a = this[Nt].silent), n = !0, this[Nt] = null), this[bt] = !0;
        try {
          n && ri(this), Ue.update.call(this, {
            type: "resize",
            animation: O({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[bt] = !1, o;
        }
        this[bt] = !1, qi.call(this, a), Ki.call(this, a);
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      if (V(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !Ku[e]) {
        process.env.NODE_ENV !== "production" && Bt("Loading effects " + e + " not exists.");
        return;
      }
      var n = Ku[e](this._api, i), a = this._zr;
      this._loadingFX = n, a.add(n);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = O({}, e);
      return i.type = ho[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      if (V(i) || (i = {
        silent: !!i
      }), !!fo[e.type] && this._model) {
        if (this[bt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        zs.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && $.browser.weChat && this._throttledZrFlush(), qi.call(this, n), Ki.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      _e.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        Ut(this.id);
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      process.env.NODE_ENV !== "production" && Z(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      ri = function(h) {
        var c = h._scheduler;
        c.restorePipelines(h._model), c.prepareStageTasks(), Bs(h, !0), Bs(h, !1), c.plan();
      }, Bs = function(h, c) {
        for (var v = h._model, d = h._scheduler, y = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, m = h._api, _ = 0; _ < y.length; _++)
          y[_].__alive = !1;
        c ? v.eachComponent(function(x, b) {
          x !== "series" && w(b);
        }) : v.eachSeries(w);
        function w(x) {
          var b = x.__requireNewView;
          x.__requireNewView = !1;
          var D = "_ec_" + x.id + "_" + x.type, M = !b && p[D];
          if (!M) {
            var A = xe(x.type), C = c ? tr.getClass(A.main, A.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              wi.getClass(A.sub)
            );
            process.env.NODE_ENV !== "production" && Z(C, A.sub + " does not exist."), M = new C(), M.init(v, m), p[D] = M, y.push(M), g.add(M.group);
          }
          x.__viewId = M.__id = D, M.__alive = !0, M.__model = x, M.group.__ecComponentInfo = {
            mainType: x.mainType,
            index: x.componentIndex
          }, !c && d.prepareView(M, x, v, m);
        }
        for (var _ = 0; _ < y.length; ) {
          var S = y[_];
          S.__alive ? _++ : (!c && S.renderTask.dispose(), g.remove(S.group), S.dispose(v, m), y.splice(_, 1), p[S.__id] === S && delete p[S.__id], S.__id = S.group.__ecComponentInfo = null);
        }
      }, ma = function(h, c, v, d, y) {
        var p = h._model;
        if (p.setUpdatePayload(v), !d) {
          T([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var g = {};
        g[d + "Id"] = v[d + "Id"], g[d + "Index"] = v[d + "Index"], g[d + "Name"] = v[d + "Name"];
        var m = {
          mainType: d,
          query: g
        };
        y && (m.subType = y);
        var _ = v.excludeSeriesId, w;
        _ != null && (w = q(), T(It(_), function(x) {
          var b = be(x, null);
          b != null && w.set(b, !0);
        })), p && p.eachComponent(m, function(x) {
          var b = w && w.get(x.id) != null;
          if (!b)
            if (Dh(v))
              if (x instanceof Mi)
                v.type === Or && !v.notBlur && !x.get(["emphasis", "disabled"]) && S1(x, v, h._api);
              else {
                var D = Ll(x.mainType, x.componentIndex, v.name, h._api), M = D.focusSelf, A = D.dispatchers;
                v.type === Or && M && !v.notBlur && Eu(x.mainType, x.componentIndex, h._api), A && T(A, function(C) {
                  v.type === Or ? Du(C) : Mu(C);
                });
              }
            else
              Pu(v) && x instanceof Mi && (T1(x, v, h._api), Th(x), Kt(h));
        }, h), p && p.eachComponent(m, function(x) {
          var b = w && w.get(x.id) != null;
          b || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][x.__viewId]);
        }, h);
        function S(x) {
          x && x.__alive && x[c] && x[c](x.__model, p, h._api, v);
        }
      }, Ue = {
        prepareAndUpdate: function(h) {
          ri(this), Ue.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, y = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (v) {
            v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), Vs(this, v), p.update(v, d), e(v), g.performVisualTasks(v, h), Hs(this, v, d, h, c);
            var m = v.get("backgroundColor") || "transparent", _ = v.get("darkMode");
            y.setBackgroundColor(m), _ != null && _ !== "auto" && y.setDarkMode(_), _e.trigger("afterupdate", v, d);
          }
        },
        updateTransform: function(h) {
          var c = this, v = this._model, d = this._api;
          if (v) {
            v.setUpdatePayload(h);
            var y = [];
            v.eachComponent(function(g, m) {
              if (g !== "series") {
                var _ = c.getViewOfComponentModel(m);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var w = _.updateTransform(m, v, d, h);
                    w && w.update && y.push(_);
                  } else
                    y.push(_);
              }
            });
            var p = q();
            v.eachSeries(function(g) {
              var m = c._chartsMap[g.__viewId];
              if (m.updateTransform) {
                var _ = m.updateTransform(g, v, d, h);
                _ && _.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), e(v), this._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: p
            }), _a(this, v, d, h, {}, p), _e.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), wi.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), Hs(this, c, this._api, h, {}), _e.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), wi.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
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
          }), _e.trigger("afterupdate", v, this._api));
        },
        updateLayout: function(h) {
          Ue.update.call(this, h);
        }
      }, Fs = function(h, c, v, d) {
        if (h._disposed) {
          Ut(h.id);
          return;
        }
        for (var y = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, m = ss(y, v), _ = 0; _ < p.length; _++) {
          var w = p[_];
          if (w[c] && (g = w[c](y, m, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && Bt("No coordinate system that supports " + c + " found by the given finder.");
      }, Vs = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(y) {
          d.updateStreamModes(y, v[y.__viewId]);
        });
      }, zs = function(h, c) {
        var v = this, d = this.getModel(), y = h.type, p = h.escapeConnect, g = fo[y], m = g.actionInfo, _ = (m.update || "update").split(":"), w = _.pop(), S = _[0] != null && xe(_[0]);
        this[bt] = !0;
        var x = [h], b = !1;
        h.batch && (b = !0, x = H(h.batch, function(P) {
          return P = at(O({}, P), h), P.batch = null, P;
        }));
        var D = [], M, A = Pu(h), C = Dh(h);
        if (C && tp(this._api), T(x, function(P) {
          if (M = g.action(P, v._model, v._api), M = M || O({}, P), M.type = m.event || M.type, D.push(M), C) {
            var I = Tl(h), R = I.queryOptionMap, G = I.mainTypeSpecified, B = G ? R.keys()[0] : "series";
            ma(v, w, P, B), Kt(v);
          } else
            A ? (ma(v, w, P, "series"), Kt(v)) : S && ma(v, w, P, S.main, S.sub);
        }), w !== "none" && !C && !A && !S)
          try {
            this[Nt] ? (ri(this), Ue.update.call(this, h), this[Nt] = null) : Ue[w].call(this, h);
          } catch (P) {
            throw this[bt] = !1, P;
          }
        if (b ? M = {
          type: m.event || y,
          escapeConnect: p,
          batch: D
        } : M = D[0], this[bt] = !1, !c) {
          var E = this._messageCenter;
          if (E.trigger(M.type, M), A) {
            var L = {
              type: "selectchanged",
              escapeConnect: p,
              selected: C1(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            E.trigger(L.type, L);
          }
        }
      }, qi = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          zs.call(this, v, h);
        }
      }, Ki = function(h) {
        !h && this.trigger("updated");
      }, zc = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Nt] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
        });
      }, Hc = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, y = hn(d, bi);
          y && (x1(y, v, c._api), Kt(c));
        }).on("mouseout", function(v) {
          var d = v.target, y = hn(d, bi);
          y && (b1(y, v, c._api), Kt(c));
        }).on("click", function(v) {
          var d = v.target, y = hn(d, function(m) {
            return st(m).dataIndex != null;
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
        if (h.eachComponent(function(m, _) {
          var w = _.get("zlevel") || 0, S = _.get("z") || 0, x = _.getZLevelKey();
          d = d || !!x, (m === "series" ? v : c).push({
            zlevel: w,
            z: S,
            idx: _.componentIndex,
            type: m,
            key: x
          });
        }), d) {
          var y = c.concat(v), p, g;
          La(y, function(m, _) {
            return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
          }), T(y, function(m) {
            var _ = h.getComponent(m.type, m.idx), w = m.zlevel, S = m.key;
            p != null && (w = Math.max(p, w)), S ? (w === p && S !== g && w++, g = S) : g && (w === p && w++, g = ""), p = w, _.setZLevel(w);
          });
        }
      }
      Hs = function(h, c, v, d, y) {
        i(c), Gc(h, c, v, d, y), T(h._chartsViews, function(p) {
          p.__alive = !1;
        }), _a(h, c, v, d, y), T(h._chartsViews, function(p) {
          p.__alive || p.remove(c, v);
        });
      }, Gc = function(h, c, v, d, y, p) {
        T(p || h._componentsViews, function(g) {
          var m = g.__model;
          l(m, g), g.render(m, c, v, d), s(m, g), f(m, g);
        });
      }, _a = function(h, c, v, d, y, p) {
        var g = h._scheduler;
        y = O(y || {}, {
          updatedSeries: c.getSeries()
        }), _e.trigger("series:beforeupdate", c, v, y);
        var m = !1;
        c.eachSeries(function(_) {
          var w = h._chartsMap[_.__viewId];
          w.__alive = !0;
          var S = w.renderTask;
          g.updatePayload(S, d), l(_, w), p && p.get(_.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (m = !0), w.group.silent = !!_.get("silent"), o(_, w), Th(_);
        }), g.unfinished = m || g.unfinished, _e.trigger("series:layoutlabels", c, v, y), _e.trigger("series:transition", c, v, y), c.eachSeries(function(_) {
          var w = h._chartsMap[_.__viewId];
          s(_, w), f(_, w);
        }), a(h, c), _e.trigger("series:afterupdate", c, v, y);
      }, Kt = function(h) {
        h[ks] = !0, h.getZr().wakeUp();
      }, Uc = function(h) {
        h[ks] && (h.getZr().storage.traverse(function(c) {
          _n(c) || n(c);
        }), h[ks] = !1);
      };
      function n(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var y = v[d];
          y === "emphasis" || y === "blur" || y === "select" || c.push(y);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === Al && h.states.emphasis ? c.push("emphasis") : h.hoverState === Ml && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function a(h, c) {
        var v = h._zr, d = v.storage, y = 0;
        d.traverse(function(p) {
          p.isGroup || y++;
        }), y > c.get("hoverLayerThreshold") && !$.node && !$.worker && c.eachSeries(function(p) {
          if (!p.preventUsingHoverLayer) {
            var g = h._chartsMap[p.__viewId];
            g.__alive && g.eachRendered(function(m) {
              m.states.emphasis && (m.states.emphasis.hoverLayer = !0);
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
          for (var m = h.childrenRef(), _ = 0; _ < m.length; _++)
            d = Math.max(u(m[_], c, v, d), d);
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
          if (!_n(v)) {
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
            if (_n(g))
              return;
            if (g instanceof ot && I1(g), g.__dirty) {
              var m = g.prevStates;
              m && g.useStates(m);
            }
            if (d) {
              g.stateTransition = p;
              var _ = g.getTextContent(), w = g.getTextGuideLine();
              _ && (_.stateTransition = p), w && (w.stateTransition = p);
            }
            g.__dirty && n(g);
          }
        });
      }
      Wc = function(h) {
        return new /** @class */
        (function(c) {
          k(v, c);
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
            Du(d, y), Kt(h);
          }, v.prototype.leaveEmphasis = function(d, y) {
            Mu(d, y), Kt(h);
          }, v.prototype.enterBlur = function(d) {
            w1(d), Kt(h);
          }, v.prototype.leaveBlur = function(d) {
            Kd(d), Kt(h);
          }, v.prototype.enterSelect = function(d) {
            Qd(d), Kt(h);
          }, v.prototype.leaveSelect = function(d) {
            Jd(d), Kt(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v;
        }(Jp))(h);
      };
    }(), t;
  }(De)
), rf = Xb.prototype;
rf.on = kg("on");
rf.off = kg("off");
rf.one = function(r, t, e) {
  var i = this;
  Te("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var Zb = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Ut(r) {
  process.env.NODE_ENV !== "production" && Bt("Instance " + r + " has been disposed");
}
var fo = {}, ho = {}, Zu = [], qu = [], co = [], Hg = {}, Ku = {}, Yc = {}, qb = {}, Kb = "_echarts_instance_";
function Gg(r, t) {
  Hg[r] = t;
}
function Wg(r) {
  it(qu, r) < 0 && qu.push(r);
}
function Ug(r, t) {
  af(Zu, r, t, Vb);
}
function Qb(r) {
  nf("afterinit", r);
}
function Jb(r) {
  nf("afterupdate", r);
}
function nf(r, t) {
  _e.on(r, t);
}
function Ni(r, t, e) {
  U(t) && (e = t, t = "");
  var i = V(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || i).toLowerCase(), t = r.event, !ho[t] && (Z(Vc.test(i) && Vc.test(t)), fo[i] || (fo[i] = {
    action: e,
    actionInfo: r
  }), ho[t] = i);
}
function jb(r, t) {
  $l.register(r, t);
}
function tT(r, t) {
  af(co, r, t, Rg, "layout");
}
function Gr(r, t) {
  af(co, r, t, Og, "visual");
}
var $c = [];
function af(r, t, e, i, n) {
  if ((U(t) || V(t)) && (e = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    T(r, function(o) {
      Z(o.__raw !== e);
    });
  }
  if (!(it($c, e) >= 0)) {
    $c.push(e);
    var a = Tg.wrapStageHandler(e, n);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function Yg(r, t) {
  Ku[r] = t;
}
function eT(r, t, e) {
  var i = Ob("registerMap");
  i && i(r, t, e);
}
var rT = nx;
Gr(ef, Nx);
Gr(ko, kx);
Gr(ko, Bx);
Gr(ef, Jx);
Gr(ko, jx);
Gr(Ng, Pb);
Wg(tg);
Ug(Bb, zS);
Yg("default", Fx);
Ni({
  type: Or,
  event: Or,
  update: Or
}, zt);
Ni({
  type: ka,
  event: ka,
  update: ka
}, zt);
Ni({
  type: gn,
  event: gn,
  update: gn
}, zt);
Ni({
  type: Ba,
  event: Ba,
  update: Ba
}, zt);
Ni({
  type: yn,
  event: yn,
  update: yn
}, zt);
Gg("light", qx);
Gg("dark", Kx);
function Qi(r) {
  return r == null ? 0 : r.length || 1;
}
function Xc(r) {
  return r;
}
var iT = (
  /** @class */
  function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || Xc, this._newKeyGetter = n || Xc, this.context = a, this._diffModeMultiple = o === "multiple";
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
        var s = n[o], u = i[s], l = Qi(u);
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
        var u = a[s], l = i[u], f = n[u], h = Qi(l), c = Qi(f);
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
        var n = t[i], a = e[n], o = Qi(a);
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
          var u = e[s], l = Qi(u);
          l === 0 ? (e[s] = o, a && i.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  }()
);
const nT = iT;
var aT = (
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
function oT(r, t) {
  var e = {}, i = e.encode = {}, n = q(), a = [], o = [], s = {};
  T(r.dimensions, function(c) {
    var v = r.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && Z(ku.get(d) == null);
      var y = v.coordDimIndex;
      Gs(i, d)[y] = c, v.isExtraCoord || (n.set(d, 1), uT(v.type) && (a[0] = c), Gs(s, d)[y] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    ku.each(function(p, g) {
      var m = Gs(i, g), _ = v.otherDims[g];
      _ != null && _ !== !1 && (m[_] = v.name);
    });
  });
  var u = [], l = {};
  n.each(function(c, v) {
    var d = i[v];
    l[v] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = H(u, function(c) {
    return r.getDimensionInfo(c).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new aT(s, t), e;
}
function Gs(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function sT(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function uT(r) {
  return !(r === "ordinal" || r === "time");
}
var lT = (
  /** @class */
  function() {
    function r(t) {
      this.otherDims = {}, t != null && O(this, t);
    }
    return r;
  }()
);
const Ha = lT;
var fT = dt(), hT = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, $g = (
  /** @class */
  function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = qg(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return X(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = rg(this.source), i = !Kg(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
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
        }), e && u != null && (!h || !h.isCalculationCoord) && (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), n += "$", n += hT[l] || "f", f && (n += f.uid), n += "$";
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
function Xg(r) {
  return r instanceof $g;
}
function Zg(r) {
  for (var t = q(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = V(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function qg(r) {
  var t = fT(r);
  return t.dimNameMap || (t.dimNameMap = Zg(r.dimensionsDefine));
}
function Kg(r) {
  return r > 30;
}
var Ji = V, Ye = H, cT = typeof Int32Array > "u" ? Array : Int32Array, vT = "e\0\0", Zc = -1, dT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], pT = ["_approximateExtent"], qc, wa, ji, ii, Ws, tn, Us, gT = (
  /** @class */
  function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var i, n = !1;
      Xg(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < i.length; f++) {
        var h = i[f], c = F(h) ? new Ha({
          name: h
        }) : h instanceof Ha ? h : new Ha(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && Z(n || c.storeDimIndex >= 0), n && (c.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var y = this._dimIdxToName = q();
        T(o, function(p) {
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
      if (t instanceof Fu && (a = t), !a) {
        var o = this.dimensions, s = Xl(t) || Ht(t) ? new ig(t, o.length) : t;
        a = new Fu();
        var u = Ye(o, function(l) {
          return {
            type: n._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = oT(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e && e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var u = s - n;
          this._nameList[s] = e[u], o && Us(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
        var n = this._dimInfos[e[i]];
        n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Ie && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var i = this._store, n = i.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, u = s === le;
        if (u && !n.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = n.getItem(f, l);
            if (!this.hasItemOption && K_(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = be(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = be(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Us(this, f);
        qc(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Ji(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = ji(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return wa(this, this.getRawIndex(t));
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
      return N(t) ? n.getValues(Ye(t, function(a) {
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
      return n == null || isNaN(n) ? Zc : n;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
    }, r.prototype.each = function(t, e, i) {
      U(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ye(ii(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? ft(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      U(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ye(ii(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? ft(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = lt(t);
      return T(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      U(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = Ye(ii(t), this._getStoreDimIndex, this), s = tn(this);
      return s._store = this._store.map(o, a ? ft(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = this, o = i || n || this;
      process.env.NODE_ENV !== "production" && T(ii(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = Ye(ii(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? ft(e, o) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = tn(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var i = tn(this);
      return i._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = tn(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new Mt(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new nT(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return wa(t, i);
      }, function(i) {
        return wa(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Ji(t) ? O(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), N(a) ? a = a.slice() : Ji(a) && (a = O({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, Ji(e) ? O(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Ji(t) ? O(this._layout, t) : this._layout[t] = e;
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
      f1(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      T(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : Ye(this.dimensions, this._getDimInfo, this), this.hostModel)), Ws(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      U(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(cl(arguments)));
      });
    }, r.internalField = function() {
      qc = function(t) {
        var e = t._invertedIndicesMap;
        T(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new cT(o.categories.length);
            for (var u = 0; u < i.length; u++)
              i[u] = Zc;
            for (var u = 0; u < s.count(); u++)
              i[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, ji = function(t, e, i) {
        return be(t._getCategory(e, i), null);
      }, wa = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = ji(t, t._idDimIdx, e)), i == null && (i = vT + e), i;
      }, ii = function(t) {
        return N(t) || (t = t != null ? [t] : []), t;
      }, tn = function(t) {
        var e = new r(t._schema ? t._schema : Ye(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Ws(e, t), e;
      }, Ws = function(t, e) {
        T(dT.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, T(pT, function(i) {
          t[i] = Q(e[i]);
        }), t._calculationInfo = O({}, e._calculationInfo);
      }, Us = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], u = n[e];
        if (s == null && a != null && (i[e] = s = ji(t, a, e)), u == null && o != null && (n[e] = u = ji(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), n[e] = u;
        }
      };
    }(), r;
  }()
);
const yT = gT;
function mT(r, t) {
  Xl(r) || (r = Zl(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = q(), a = [], o = wT(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && Kg(o), u = i === r.dimensionsDefine, l = u ? qg(r) : Zg(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = q(f), c = new ug(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(M) {
    var A = c[M];
    if (A < 0) {
      var C = i[M], E = V(C) ? C : {
        name: C
      }, L = new Ha(), P = E.name;
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
    var C = It(M).slice();
    if (C.length === 1 && !F(C[0]) && C[0] < 0) {
      h.set(A, !1);
      return;
    }
    var E = h.set(A, []);
    T(C, function(L, P) {
      var I = F(L) ? l.get(L) : L;
      I != null && I < o && (E[P] = I, p(d(I), A, P));
    });
  });
  var y = 0;
  T(e, function(M) {
    var A, C, E, L;
    if (F(M))
      A = M, L = {};
    else {
      L = M, A = L.name;
      var P = L.ordinalMeta;
      L.ordinalMeta = null, L = O({}, L), L.ordinalMeta = P, C = L.dimsDef, E = L.otherDims, L.name = L.coordDim = L.coordDimIndex = L.dimsDef = L.otherDims = null;
    }
    var I = h.get(A);
    if (I !== !1) {
      if (I = It(I), !I.length)
        for (var R = 0; R < (C && C.length || 1); R++) {
          for (; y < o && d(y).coordDim != null; )
            y++;
          y < o && I.push(y++);
        }
      T(I, function(G, B) {
        var z = d(G);
        if (u && L.type != null && (z.type = L.type), p(at(z, L), A, B), z.name == null && C) {
          var Y = C[B];
          !V(Y) && (Y = {
            name: Y
          }), z.name = z.displayName = Y.name, z.defaultTooltip = Y.defaultTooltip;
        }
        E && at(z.otherDims, E);
      });
    }
  });
  function p(M, A, C) {
    ku.get(A) != null ? M.otherDims[A] = C : (M.coordDim = A, M.coordDimIndex = C, n.set(A, !0));
  }
  var g = t.generateCoord, m = t.generateCoordCount, _ = m != null;
  m = g ? m || 1 : 0;
  var w = g || "value";
  function S(M) {
    M.name == null && (M.name = M.coordDim);
  }
  if (s)
    T(a, function(M) {
      S(M);
    }), a.sort(function(M, A) {
      return M.storeDimIndex - A.storeDimIndex;
    });
  else
    for (var x = 0; x < o; x++) {
      var b = d(x), D = b.coordDim;
      D == null && (b.coordDim = ST(w, n, _), b.coordDimIndex = 0, (!g || m <= 0) && (b.isExtraCoord = !0), m--), S(b), b.type == null && (qp(r, x) === Yt.Must || b.isExtraCoord && (b.otherDims.itemName != null || b.otherDims.seriesName != null)) && (b.type = "ordinal");
    }
  return _T(a), new $g({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function _T(r) {
  for (var t = q(), e = 0; e < r.length; e++) {
    var i = r[e], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function wT(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return T(t, function(a) {
    var o;
    V(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function ST(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
var xT = (
  /** @class */
  function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = q(), this.categoryAxisMap = q(), this.coordSysName = t;
    }
    return r;
  }()
);
function bT(r) {
  var t = r.get("coordinateSystem"), e = new xT(t), i = TT[t];
  if (i)
    return i(r, e, e.axisMap, e.categoryAxisMap), e;
}
var TT = {
  cartesian2d: function(r, t, e, i) {
    var n = r.getReferringComponents("xAxis", ve).models[0], a = r.getReferringComponents("yAxis", ve).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error('xAxis "' + Br(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + Br(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], e.set("x", n), e.set("y", a), ni(n) && (i.set("x", n), t.firstCategoryDimIndex = 0), ni(a) && (i.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, i) {
    var n = r.getReferringComponents("singleAxis", ve).models[0];
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], e.set("single", n), ni(n) && (i.set("single", n), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, i) {
    var n = r.getReferringComponents("polar", ve).models[0], a = n.findAxisModel("radiusAxis"), o = n.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), ni(a) && (i.set("radius", a), t.firstCategoryDimIndex = 0), ni(o) && (i.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, i) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, i) {
    var n = r.ecModel, a = n.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    T(a.parallelAxisIndex, function(s, u) {
      var l = n.getComponent("parallelAxis", s), f = o[u];
      e.set(f, l), ni(l) && (i.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  }
};
function ni(r) {
  return r.get("type") === "category";
}
function CT(r, t, e) {
  e = e || {};
  var i = e.byIndex, n = e.stackedCoordDimension, a, o, s;
  DT(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(r && r.get("stack")), l, f, h, c;
  if (T(a, function(m, _) {
    F(m) && (a[_] = m = {
      name: m
    }), u && !m.isExtraCoord && (!i && !l && m.ordinalMeta && (l = m), !f && m.type !== "ordinal" && m.type !== "time" && (!n || n === m.coordDim) && (f = m));
  }), f && !i && !l && (i = !0), f) {
    h = "__\0ecstackresult_" + r.id, c = "__\0ecstackedover_" + r.id, l && (l.createInvertedIndices = !0);
    var v = f.coordDim, d = f.type, y = 0;
    T(a, function(m) {
      m.coordDim === v && y++;
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
function DT(r) {
  return !Xg(r.schema);
}
function Qg(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function MT(r, t) {
  return Qg(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function AT(r, t) {
  var e = r.get("coordinateSystem"), i = $l.get(e), n;
  return t && t.coordSysDims && (n = H(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = sT(u);
    }
    return o;
  })), n || (n = i && (i.getDimensionsInfo ? i.getDimensionsInfo() : i.dimensions.slice()) || ["x", "y"]), n;
}
function ET(r, t, e) {
  var i, n;
  return e && T(r, function(a, o) {
    var s = a.coordDim, u = e.categoryAxisMap.get(s);
    u && (i == null && (i = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (n = !0);
  }), !n && i != null && (r[i].otherDims.itemName = 0), i;
}
function Jg(r, t, e) {
  e = e || {};
  var i = t.getSourceManager(), n, a = !1;
  r ? (a = !0, n = Zl(r)) : (n = i.getSource(), a = n.sourceFormat === le);
  var o = bT(t), s = AT(t, o), u = e.useEncodeDefaulter, l = U(u) ? u : u ? vt(fS, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = mT(n, f), c = ET(h.dimensions, e.createInvertedIndices, o), v = a ? null : i.getSharedDataStore(h), d = CT(t, {
    schema: h,
    store: v
  }), y = new yT(h, t);
  y.setCalculationInfo(d);
  var p = c != null && LT(n) ? function(g, m, _, w) {
    return w === c ? _ : this.defaultDimValueGetter(g, m, _, w);
  } : null;
  return y.hasItemOption = !1, y.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? n : v,
    null,
    p
  ), y;
}
function LT(r) {
  if (r.sourceFormat === le) {
    var t = PT(r.data || []);
    return !N(zn(t));
  }
}
function PT(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var jg = (
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
_o(jg);
const Fe = jg;
var IT = 0, RT = (
  /** @class */
  function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++IT;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, i = e.data, n = i && H(i, OT);
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
function OT(r) {
  return V(r) && r.value != null ? r.value : r + "";
}
const Qu = RT;
function NT(r) {
  var t = Math.pow(10, yo(Math.abs(r))), e = Math.abs(r / t);
  return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
}
function Ju(r) {
  return r.type === "interval" || r.type === "log";
}
function kT(r, t, e, i) {
  var n = {}, a = r[1] - r[0], o = n.interval = Cd(a / t, !0);
  e != null && o < e && (o = n.interval = e), i != null && o > i && (o = n.interval = i);
  var s = n.intervalPrecision = ty(o), u = n.niceTickExtent = [gt(Math.ceil(r[0] / o) * o, s), gt(Math.floor(r[1] / o) * o, s)];
  return BT(u, r), n;
}
function Ys(r) {
  var t = Math.pow(10, yo(r)), e = r / t;
  return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, gt(e * t);
}
function ty(r) {
  return Mn(r) + 2;
}
function Kc(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function BT(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), Kc(r, 0, t), Kc(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
}
function Bo(r, t) {
  return r >= t[0] && r <= t[1];
}
function Fo(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function Vo(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var ey = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      i.type = "ordinal";
      var n = i.getSetting("ordinalMeta");
      return n || (n = new Qu({})), N(n) && (n = new Qu({
        categories: H(n, function(a) {
          return V(a) ? a.value : a;
        })
      })), i._ordinalMeta = n, i._extent = i.getSetting("extent") || [0, n.categories.length - 1], i;
    }
    return t.prototype.parse = function(e) {
      return e == null ? NaN : F(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
    }, t.prototype.contain = function(e) {
      return e = this.parse(e), Bo(e, this._extent) && this._ordinalMeta.categories[e] != null;
    }, t.prototype.normalize = function(e) {
      return e = this._getTickNumber(this.parse(e)), Fo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Math.round(Vo(e, this._extent)), this.getRawOrdinalNumber(e);
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
  }(Fe)
);
Fe.registerClass(ey);
const ry = ey;
var Cr = gt, iy = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
    }
    return t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return Bo(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return Fo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return Vo(e, this._extent);
    }, t.prototype.setExtent = function(e, i) {
      var n = this._extent;
      isNaN(e) || (n[0] = parseFloat(e)), isNaN(i) || (n[1] = parseFloat(i));
    }, t.prototype.unionExtent = function(e) {
      var i = this._extent;
      e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]), this.setExtent(i[0], i[1]);
    }, t.prototype.getInterval = function() {
      return this._interval;
    }, t.prototype.setInterval = function(e) {
      this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = ty(e);
    }, t.prototype.getTicks = function(e) {
      var i = this._interval, n = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
      if (!i)
        return s;
      var u = 1e4;
      n[0] < a[0] && (e ? s.push({
        value: Cr(a[0] - i, o)
      }) : s.push({
        value: n[0]
      }));
      for (var l = a[0]; l <= a[1] && (s.push({
        value: l
      }), l = Cr(l + i, o), l !== s[s.length - 1].value); )
        if (s.length > u)
          return [];
      var f = s.length ? s[s.length - 1].value : a[1];
      return n[1] > f && (e ? s.push({
        value: Cr(f + i, o)
      }) : s.push({
        value: n[1]
      })), s;
    }, t.prototype.getMinorTicks = function(e) {
      for (var i = this.getTicks(!0), n = [], a = this.getExtent(), o = 1; o < i.length; o++) {
        for (var s = i[o], u = i[o - 1], l = 0, f = [], h = s.value - u.value, c = h / e; l < e - 1; ) {
          var v = Cr(u.value + (l + 1) * c);
          v > a[0] && v < a[1] && f.push(v), l++;
        }
        n.push(f);
      }
      return n;
    }, t.prototype.getLabel = function(e, i) {
      if (e == null)
        return "";
      var n = i && i.precision;
      n == null ? n = Mn(e.value) || 0 : n === "auto" && (n = this._intervalPrecision);
      var a = Cr(e.value, n, !0);
      return Gp(a);
    }, t.prototype.calcNiceTicks = function(e, i, n) {
      e = e || 5;
      var a = this._extent, o = a[1] - a[0];
      if (isFinite(o)) {
        o < 0 && (o = -o, a.reverse());
        var s = kT(a, e, i, n);
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
      e.fixMin || (i[0] = Cr(Math.floor(i[0] / o) * o)), e.fixMax || (i[1] = Cr(Math.ceil(i[1] / o) * o));
    }, t.prototype.setNiceExtent = function(e, i) {
      this._niceExtent = [e, i];
    }, t.type = "interval", t;
  }(Fe)
);
Fe.registerClass(iy);
const Yn = iy;
var ny = typeof Float32Array < "u", FT = ny ? Float32Array : Array;
function $s(r) {
  return N(r) ? ny ? new Float32Array(r) : r : new FT(r);
}
var VT = "__ec_stack_";
function of(r) {
  return r.get("stack") || VT + r.seriesIndex;
}
function sf(r) {
  return r.dim + r.index;
}
function ay(r, t) {
  var e = [];
  return t.eachSeriesByType(r, function(i) {
    sy(i) && e.push(i);
  }), e;
}
function zT(r) {
  var t = {};
  T(r, function(u) {
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
function oy(r) {
  var t = zT(r), e = [];
  return T(r, function(i) {
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
    var d = Pt(i.get("barWidth"), s), y = Pt(i.get("barMaxWidth"), s), p = Pt(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      i.get("barMinWidth") || (uy(i) ? 0.5 : 1),
      s
    ), g = i.get("barGap"), m = i.get("barCategoryGap");
    e.push({
      bandWidth: s,
      barWidth: d,
      barMaxWidth: y,
      barMinWidth: p,
      barGap: g,
      barCategoryGap: m,
      axisKey: sf(a),
      stackId: of(i)
    });
  }), HT(e);
}
function HT(r) {
  var t = {};
  T(r, function(i, n) {
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
  return T(t, function(i, n) {
    e[n] = {};
    var a = i.stacks, o = i.bandWidth, s = i.categoryGap;
    if (s == null) {
      var u = lt(a).length;
      s = Math.max(35 - u * 4, 15) + "%";
    }
    var l = Pt(s, o), f = Pt(i.gap, 1), h = i.remainedWidth, c = i.autoWidthCount, v = (h - l) / (c + (c - 1) * f);
    v = Math.max(v, 0), T(a, function(g) {
      var m = g.maxWidth, _ = g.minWidth;
      if (g.width) {
        var w = g.width;
        m && (w = Math.min(w, m)), _ && (w = Math.max(w, _)), g.width = w, h -= w + f * w, c--;
      } else {
        var w = v;
        m && m < w && (w = Math.min(m, h)), _ && _ > w && (w = _), w !== v && (g.width = w, h -= w + f * w, c--);
      }
    }), v = (h - l) / (c + (c - 1) * f), v = Math.max(v, 0);
    var d = 0, y;
    T(a, function(g, m) {
      g.width || (g.width = v), y = g, d += g.width * (1 + f);
    }), y && (d -= y.width * f);
    var p = -d / 2;
    T(a, function(g, m) {
      e[n][m] = e[n][m] || {
        bandWidth: o,
        offset: p,
        width: g.width
      }, p += g.width * (1 + f);
    });
  }), e;
}
function GT(r, t, e) {
  if (r && t) {
    var i = r[sf(t)];
    return i != null && e != null ? i[of(e)] : i;
  }
}
function WT(r, t) {
  var e = ay(r, t), i = oy(e);
  T(e, function(n) {
    var a = n.getData(), o = n.coordinateSystem, s = o.getBaseAxis(), u = of(n), l = i[sf(s)][u], f = l.offset, h = l.width;
    a.setLayout({
      bandWidth: l.bandWidth,
      offset: f,
      size: h
    });
  });
}
function UT(r) {
  return {
    seriesType: r,
    plan: gg(),
    reset: function(t) {
      if (sy(t)) {
        var e = t.getData(), i = t.coordinateSystem, n = i.getBaseAxis(), a = i.getOtherAxis(n), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(n.dim)), u = t.get("showBackground", !0), l = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = Qg(e, l) && !!e.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = YT(n, a), d = uy(t), y = t.get("barMinHeight") || 0, p = f && e.getDimensionIndex(f), g = e.getLayout("size"), m = e.getLayout("offset");
        return {
          progress: function(_, w) {
            for (var S = _.count, x = d && $s(S * 3), b = d && u && $s(S * 3), D = d && $s(S), M = i.master.getRect(), A = c ? M.width : M.height, C, E = w.getStore(), L = 0; (C = _.next()) != null; ) {
              var P = E.get(h ? p : o, C), I = E.get(s, C), R = v, G = void 0;
              h && (G = +P - E.get(o, C));
              var B = void 0, z = void 0, Y = void 0, J = void 0;
              if (c) {
                var rt = i.dataToPoint([P, I]);
                if (h) {
                  var St = i.dataToPoint([G, I]);
                  R = St[0];
                }
                B = R, z = rt[1] + m, Y = rt[0] - R, J = g, Math.abs(Y) < y && (Y = (Y < 0 ? -1 : 1) * y);
              } else {
                var rt = i.dataToPoint([I, P]);
                if (h) {
                  var St = i.dataToPoint([I, G]);
                  R = St[1];
                }
                B = rt[0] + m, z = R, Y = g, J = rt[1] - R, Math.abs(J) < y && (J = (J <= 0 ? -1 : 1) * y);
              }
              d ? (x[L] = B, x[L + 1] = z, x[L + 2] = c ? Y : J, b && (b[L] = c ? M.x : B, b[L + 1] = c ? z : M.y, b[L + 2] = A), D[C] = C) : w.setItemLayout(C, {
                x: B,
                y: z,
                width: Y,
                height: J
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
function sy(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function uy(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function YT(r, t) {
  var e = t.model.get("startValue");
  return e || (e = 0), t.toGlobalCoord(t.dataToCoord(t.type === "log" ? e > 0 ? e : 1 : e));
}
var $T = function(r, t, e, i) {
  for (; e < i; ) {
    var n = e + i >>> 1;
    r[n][1] < t ? e = n + 1 : i = n;
  }
  return e;
}, ly = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "time", i;
    }
    return t.prototype.getLabel = function(e) {
      var i = this.getSetting("useUTC");
      return Do(e.value, Wh[tS(mi(this._minLevelUnit))] || Wh.second, i, this.getSetting("locale"));
    }, t.prototype.getFormattedLabel = function(e, i, n) {
      var a = this.getSetting("useUTC"), o = this.getSetting("locale");
      return eS(e, i, n, o, a);
    }, t.prototype.getTicks = function() {
      var e = this._interval, i = this._extent, n = [];
      if (!e)
        return n;
      n.push({
        value: i[0],
        level: 0
      });
      var a = this.getSetting("useUTC"), o = jT(this._minLevelUnit, this._approxInterval, a, i);
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
      var s = Sa.length, u = Math.min($T(Sa, this._approxInterval, 0, s), s - 1);
      this._interval = Sa[u][1], this._minLevelUnit = Sa[Math.max(u - 1, 0)][0];
    }, t.prototype.parse = function(e) {
      return ht(e) ? e : +Oe(e);
    }, t.prototype.contain = function(e) {
      return Bo(this.parse(e), this._extent);
    }, t.prototype.normalize = function(e) {
      return Fo(this.parse(e), this._extent);
    }, t.prototype.scale = function(e) {
      return Vo(e, this._extent);
    }, t.type = "time", t;
  }(Yn)
), Sa = [
  // Format                           interval
  ["second", Hl],
  ["minute", Gl],
  ["hour", wn],
  ["quarter-day", wn * 6],
  ["half-day", wn * 12],
  ["day", ae * 1.2],
  ["half-week", ae * 3.5],
  ["week", ae * 7],
  ["month", ae * 31],
  ["quarter", ae * 95],
  ["half-year", Gh / 2],
  ["year", Gh]
  // 1Y
];
function XT(r, t, e, i) {
  var n = Oe(t), a = Oe(e), o = function(d) {
    return Uh(n, d, i) === Uh(a, d, i);
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
function ZT(r, t) {
  return r /= ae, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function qT(r) {
  var t = 30 * ae;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function KT(r) {
  return r /= wn, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function Qc(r, t) {
  return r /= t ? Gl : Hl, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function QT(r) {
  return Cd(r, !0);
}
function JT(r, t, e) {
  var i = new Date(r);
  switch (mi(t)) {
    case "year":
    case "month":
      i[kp(e)](0);
    case "day":
      i[Bp(e)](1);
    case "hour":
      i[Fp(e)](0);
    case "minute":
      i[Vp(e)](0);
    case "second":
      i[zp(e)](0), i[Hp(e)](0);
  }
  return i.getTime();
}
function jT(r, t, e, i) {
  var n = 1e4, a = Op, o = 0;
  function s(A, C, E, L, P, I, R) {
    for (var G = new Date(C), B = C, z = G[L](); B < E && B <= i[1]; )
      R.push({
        value: B
      }), z += A, G[P](z), B = G.getTime();
    R.push({
      value: B,
      notAdd: !0
    });
  }
  function u(A, C, E) {
    var L = [], P = !C.length;
    if (!XT(mi(A), i[0], i[1], e)) {
      P && (C = [{
        // TODO Optimize. Not include so may ticks.
        value: JT(new Date(i[0]), A, e)
      }, {
        value: i[1]
      }]);
      for (var I = 0; I < C.length - 1; I++) {
        var R = C[I].value, G = C[I + 1].value;
        if (R !== G) {
          var B = void 0, z = void 0, Y = void 0, J = !1;
          switch (A) {
            case "year":
              B = Math.max(1, Math.round(t / ae / 365)), z = Wl(e), Y = rS(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              B = qT(t), z = _i(e), Y = kp(e);
              break;
            case "week":
            case "half-week":
            case "day":
              B = ZT(t), z = Mo(e), Y = Bp(e), J = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              B = KT(t), z = Ln(e), Y = Fp(e);
              break;
            case "minute":
              B = Qc(t, !0), z = Ao(e), Y = Vp(e);
              break;
            case "second":
              B = Qc(t, !1), z = Eo(e), Y = zp(e);
              break;
            case "millisecond":
              B = QT(t), z = Lo(e), Y = Hp(e);
              break;
          }
          s(B, R, G, z, Y, J, L), A === "year" && E.length > 1 && I === 0 && E.unshift({
            value: E[0].value - B
          });
        }
      }
      for (var I = 0; I < L.length; I++)
        E.push(L[I]);
      return L;
    }
  }
  for (var l = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < n; ++v) {
    var d = mi(a[v]);
    if (jw(a[v])) {
      u(a[v], l[l.length - 1] || [], f);
      var y = a[v + 1] ? mi(a[v + 1]) : null;
      if (d !== y) {
        if (f.length) {
          c = h, f.sort(function(A, C) {
            return A.value - C.value;
          });
          for (var p = [], g = 0; g < f.length; ++g) {
            var m = f[g].value;
            (g === 0 || f[g - 1].value !== m) && (p.push(f[g]), m >= i[0] && m <= i[1] && h++);
          }
          var _ = (i[1] - i[0]) / t;
          if (h > _ * 1.5 && c > _ / 1.5 || (l.push(p), h > _ || r === a[v]))
            break;
        }
        f = [];
      }
    }
  }
  process.env.NODE_ENV !== "production" && o >= n && Bt("Exceed safe limit.");
  for (var w = wt(H(l, function(A) {
    return wt(A, function(C) {
      return C.value >= i[0] && C.value <= i[1] && !C.notAdd;
    });
  }), function(A) {
    return A.length > 0;
  }), S = [], x = w.length - 1, v = 0; v < w.length; ++v)
    for (var b = w[v], D = 0; D < b.length; ++D)
      S.push({
        value: b[D].value,
        level: x - v
      });
  S.sort(function(A, C) {
    return A.value - C.value;
  });
  for (var M = [], v = 0; v < S.length; ++v)
    (v === 0 || S[v].value !== S[v - 1].value) && M.push(S[v]);
  return M;
}
Fe.registerClass(ly);
const tC = ly;
var Jc = Fe.prototype, bn = Yn.prototype, eC = gt, rC = Math.floor, iC = Math.ceil, xa = Math.pow, fe = Math.log, uf = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "log", e.base = 10, e._originalScale = new Yn(), e._interval = 0, e;
    }
    return t.prototype.getTicks = function(e) {
      var i = this._originalScale, n = this._extent, a = i.getExtent(), o = bn.getTicks.call(this, e);
      return H(o, function(s) {
        var u = s.value, l = gt(xa(this.base, u));
        return l = u === n[0] && this._fixMin ? ba(l, a[0]) : l, l = u === n[1] && this._fixMax ? ba(l, a[1]) : l, {
          value: l
        };
      }, this);
    }, t.prototype.setExtent = function(e, i) {
      var n = fe(this.base);
      e = fe(Math.max(0, e)) / n, i = fe(Math.max(0, i)) / n, bn.setExtent.call(this, e, i);
    }, t.prototype.getExtent = function() {
      var e = this.base, i = Jc.getExtent.call(this);
      i[0] = xa(e, i[0]), i[1] = xa(e, i[1]);
      var n = this._originalScale, a = n.getExtent();
      return this._fixMin && (i[0] = ba(i[0], a[0])), this._fixMax && (i[1] = ba(i[1], a[1])), i;
    }, t.prototype.unionExtent = function(e) {
      this._originalScale.unionExtent(e);
      var i = this.base;
      e[0] = fe(e[0]) / fe(i), e[1] = fe(e[1]) / fe(i), Jc.unionExtent.call(this, e);
    }, t.prototype.unionExtentFromData = function(e, i) {
      this.unionExtent(e.getApproximateExtent(i));
    }, t.prototype.calcNiceTicks = function(e) {
      e = e || 10;
      var i = this._extent, n = i[1] - i[0];
      if (!(n === 1 / 0 || n <= 0)) {
        var a = Y_(n), o = e / n * a;
        for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
          a *= 10;
        var s = [gt(iC(i[0] / a) * a), gt(rC(i[1] / a) * a)];
        this._interval = a, this._niceExtent = s;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      bn.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
    }, t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return e = fe(e) / fe(this.base), Bo(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return e = fe(e) / fe(this.base), Fo(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Vo(e, this._extent), xa(this.base, e);
    }, t.type = "log", t;
  }(Fe)
), fy = uf.prototype;
fy.getMinorTicks = bn.getMinorTicks;
fy.getLabel = bn.getLabel;
function ba(r, t) {
  return eC(r, Mn(t));
}
Fe.registerClass(uf);
const nC = uf;
var aC = (
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
      U(o) ? this._modelMinNum = Ta(t, o({
        min: i[0],
        max: i[1]
      })) : o !== "dataMin" && (this._modelMinNum = Ta(t, o));
      var s = this._modelMaxRaw = e.get("max", !0);
      if (U(s) ? this._modelMaxNum = Ta(t, s({
        min: i[0],
        max: i[1]
      })) : s !== "dataMax" && (this._modelMaxNum = Ta(t, s)), n)
        this._axisDataLen = e.getCategories().length;
      else {
        var u = e.get("boundaryGap"), l = N(u) ? u : [u || 0, u || 0];
        typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (process.env.NODE_ENV !== "production" && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Je(l[0], 1), Je(l[1], 1)];
      }
    }, r.prototype.calculate = function() {
      var t = this._isOrdinal, e = this._dataMin, i = this._dataMax, n = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : i - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, u = this._modelMaxRaw === "dataMax" ? i : this._modelMaxNum, l = s != null, f = u != null;
      s == null && (s = t ? n ? 0 : NaN : e - a[0] * o), u == null && (u = t ? n ? n - 1 : NaN : i + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN);
      var h = Cn(s) || Cn(u) || t && !n;
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
      process.env.NODE_ENV !== "production" && Z(!this.frozen), this[sC[t]] = e;
    }, r.prototype.setDeterminedMinMax = function(t, e) {
      var i = oC[t];
      process.env.NODE_ENV !== "production" && Z(!this.frozen && this[i] == null), this[i] = e;
    }, r.prototype.freeze = function() {
      this.frozen = !0;
    }, r;
  }()
), oC = {
  min: "_determinedMin",
  max: "_determinedMax"
}, sC = {
  min: "_dataMin",
  max: "_dataMax"
};
function uC(r, t, e) {
  var i = r.rawExtentInfo;
  return i || (i = new aC(r, t, e), r.rawExtentInfo = i, i);
}
function Ta(r, t) {
  return t == null ? null : Cn(t) ? NaN : r.parse(t);
}
function hy(r, t) {
  var e = r.type, i = uC(r, t, r.getExtent()).calculate();
  r.setBlank(i.isBlank);
  var n = i.min, a = i.max, o = t.ecModel;
  if (o && e === "time") {
    var s = ay("bar", o), u = !1;
    if (T(s, function(h) {
      u = u || h.getBaseAxis() === t.axis;
    }), u) {
      var l = oy(s), f = lC(n, a, t, l);
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
function lC(r, t, e, i) {
  var n = e.axis.getExtent(), a = Math.abs(n[1] - n[0]), o = GT(i, e.axis);
  if (o === void 0)
    return {
      min: r,
      max: t
    };
  var s = 1 / 0;
  T(o, function(v) {
    s = Math.min(v.offset, s);
  });
  var u = -1 / 0;
  T(o, function(v) {
    u = Math.max(v.offset + v.width, u);
  }), s = Math.abs(s), u = Math.abs(u);
  var l = s + u, f = t - r, h = 1 - (s + u) / a, c = f / h - f;
  return t += c * (u / l), r -= c * (s / l), {
    min: r,
    max: t
  };
}
function jc(r, t) {
  var e = t, i = hy(r, e), n = i.extent, a = e.get("splitNumber");
  r instanceof nC && (r.base = e.get("logBase"));
  var o = r.type, s = e.get("interval"), u = o === "interval" || o === "time";
  r.setExtent(n[0], n[1]), r.calcNiceExtent({
    splitNumber: a,
    fixMin: i.fixMin,
    fixMax: i.fixMax,
    minInterval: u ? e.get("minInterval") : null,
    maxInterval: u ? e.get("maxInterval") : null
  }), s != null && r.setInterval && r.setInterval(s);
}
function fC(r, t) {
  if (t = t || r.get("type"), t)
    switch (t) {
      case "category":
        return new ry({
          ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new tC({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC")
        });
      default:
        return new (Fe.getClass(t) || Yn)();
    }
}
function hC(r) {
  var t = r.scale.getExtent(), e = t[0], i = t[1];
  return !(e > 0 && i > 0 || e < 0 && i < 0);
}
function ki(r) {
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
  }(t) : U(t) ? function(i) {
    return function(n, a) {
      return e != null && (a = n.value - e), i(lf(r, n), a, n.level != null ? {
        level: n.level
      } : null);
    };
  }(t) : function(i) {
    return r.scale.getLabel(i);
  };
}
function lf(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function cC(r) {
  var t = r.model, e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var i, n, a = e.getExtent();
    e instanceof ry ? n = e.count() : (i = e.getTicks(), n = i.length);
    var o = r.getLabelModel(), s = ki(r), u, l = 1;
    n > 40 && (l = Math.ceil(n / 40));
    for (var f = 0; f < n; f += l) {
      var h = i ? i[f] : {
        value: a[0] + f
      }, c = s(h, f), v = o.getTextRect(c), d = vC(v, o.get("rotate") || 0);
      u ? u.union(d) : u = d;
    }
    return u;
  }
}
function vC(r, t) {
  var e = t * Math.PI / 180, i = r.width, n = r.height, a = i * Math.abs(Math.cos(e)) + Math.abs(n * Math.sin(e)), o = i * Math.abs(Math.sin(e)) + Math.abs(n * Math.cos(e)), s = new et(r.x, r.y, a, o);
  return s;
}
function ff(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function cy(r) {
  return r.type === "category" && ff(r.getLabelModel()) === 0;
}
function dC(r, t) {
  var e = {};
  return T(r.mapDimensionsAll(t), function(i) {
    e[MT(r, i)] = !0;
  }), lt(e);
}
var pC = (
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
), tv = [], gC = {
  registerPreprocessor: Wg,
  registerProcessor: Ug,
  registerPostInit: Qb,
  registerPostUpdate: Jb,
  registerUpdateLifecycle: nf,
  registerAction: Ni,
  registerCoordinateSystem: jb,
  registerLayout: tT,
  registerVisual: Gr,
  registerTransform: rT,
  registerLoading: Yg,
  registerMap: eT,
  registerImpl: Rb,
  PRIORITY: $b,
  ComponentModel: ut,
  ComponentView: tr,
  SeriesModel: Mi,
  ChartView: wi,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    ut.registerClass(r);
  },
  registerComponentView: function(r) {
    tr.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Mi.registerClass(r);
  },
  registerChartView: function(r) {
    wi.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    ut.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    z_(r, t);
  }
};
function er(r) {
  if (N(r)) {
    T(r, function(t) {
      er(t);
    });
    return;
  }
  it(tv, r) >= 0 || (tv.push(r), U(r) && (r = {
    install: r
  }), r.install(gC));
}
var Bn = dt();
function vy(r, t) {
  var e = H(t, function(i) {
    return r.scale.parse(i);
  });
  return r.type === "time" && e.length > 0 && (e.sort(), e.unshift(e[0]), e.push(e[e.length - 1])), e;
}
function yC(r) {
  var t = r.getLabelModel().get("customValues");
  if (t) {
    var e = ki(r), i = r.scale.getExtent(), n = vy(r, t), a = wt(n, function(o) {
      return o >= i[0] && o <= i[1];
    });
    return {
      labels: H(a, function(o) {
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
  return r.type === "category" ? _C(r) : SC(r);
}
function mC(r, t) {
  var e = r.getTickModel().get("customValues");
  if (e) {
    var i = r.scale.getExtent(), n = vy(r, e);
    return {
      ticks: wt(n, function(a) {
        return a >= i[0] && a <= i[1];
      })
    };
  }
  return r.type === "category" ? wC(r, t) : {
    ticks: H(r.scale.getTicks(), function(a) {
      return a.value;
    })
  };
}
function _C(r) {
  var t = r.getLabelModel(), e = dy(r, t);
  return !t.get("show") || r.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: e.labelCategoryInterval
  } : e;
}
function dy(r, t) {
  var e = py(r, "labels"), i = ff(t), n = gy(e, i);
  if (n)
    return n;
  var a, o;
  return U(i) ? a = _y(r, i) : (o = i === "auto" ? xC(r) : i, a = my(r, o)), yy(e, i, {
    labels: a,
    labelCategoryInterval: o
  });
}
function wC(r, t) {
  var e = py(r, "ticks"), i = ff(t), n = gy(e, i);
  if (n)
    return n;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), U(i))
    a = _y(r, i, !0);
  else if (i === "auto") {
    var s = dy(r, r.getLabelModel());
    o = s.labelCategoryInterval, a = H(s.labels, function(u) {
      return u.tickValue;
    });
  } else
    o = i, a = my(r, o, !0);
  return yy(e, i, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function SC(r) {
  var t = r.scale.getTicks(), e = ki(r);
  return {
    labels: H(t, function(i, n) {
      return {
        level: i.level,
        formattedLabel: e(i, n),
        rawLabel: r.scale.getLabel(i),
        tickValue: i.value
      };
    })
  };
}
function py(r, t) {
  return Bn(r)[t] || (Bn(r)[t] = []);
}
function gy(r, t) {
  for (var e = 0; e < r.length; e++)
    if (r[e].key === t)
      return r[e].value;
}
function yy(r, t, e) {
  return r.push({
    key: t,
    value: e
  }), e;
}
function xC(r) {
  var t = Bn(r).autoInterval;
  return t ?? (Bn(r).autoInterval = r.calculateCategoryInterval());
}
function bC(r) {
  var t = TC(r), e = ki(r), i = (t.axisRotate - t.labelRotate) / 180 * Math.PI, n = r.scale, a = n.getExtent(), o = n.count();
  if (a[1] - a[0] < 1)
    return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (var u = a[0], l = r.dataToCoord(u + 1) - r.dataToCoord(u), f = Math.abs(l * Math.cos(i)), h = Math.abs(l * Math.sin(i)), c = 0, v = 0; u <= a[1]; u += s) {
    var d = 0, y = 0, p = wl(e({
      value: u
    }), t.font, "center", "top");
    d = p.width * 1.3, y = p.height * 1.3, c = Math.max(c, d, 7), v = Math.max(v, y, 7);
  }
  var g = c / f, m = v / h;
  isNaN(g) && (g = 1 / 0), isNaN(m) && (m = 1 / 0);
  var _ = Math.max(0, Math.floor(Math.min(g, m))), w = Bn(r.model), S = r.getExtent(), x = w.lastAutoInterval, b = w.lastTickCount;
  return x != null && b != null && Math.abs(x - _) <= 1 && Math.abs(b - o) <= 1 && x > _ && w.axisExtent0 === S[0] && w.axisExtent1 === S[1] ? _ = x : (w.lastTickCount = o, w.lastAutoInterval = _, w.axisExtent0 = S[0], w.axisExtent1 = S[1]), _;
}
function TC(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function my(r, t, e) {
  var i = ki(r), n = r.scale, a = n.getExtent(), o = r.getLabelModel(), s = [], u = Math.max((t || 0) + 1, 1), l = a[0], f = n.count();
  l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
  var h = cy(r), c = o.get("showMinLabel") || h, v = o.get("showMaxLabel") || h;
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
function _y(r, t, e) {
  var i = r.scale, n = ki(r), a = [];
  return T(i.getTicks(), function(o) {
    var s = i.getLabel(o), u = o.value;
    t(o.value, s) && a.push(e ? u : {
      formattedLabel: n(o),
      rawLabel: s,
      tickValue: u
    });
  }), a;
}
var ev = [0, 1], CC = (
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
      return G_(t || this.scale.getExtent(), this._extent);
    }, r.prototype.setExtent = function(t, e) {
      var i = this._extent;
      i[0] = t, i[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var i = this._extent, n = this.scale;
      return t = n.normalize(t), this.onBand && n.type === "ordinal" && (i = i.slice(), rv(i, n.count())), qf(t, ev, i, e);
    }, r.prototype.coordToData = function(t, e) {
      var i = this._extent, n = this.scale;
      this.onBand && n.type === "ordinal" && (i = i.slice(), rv(i, n.count()));
      var a = qf(t, i, ev, e);
      return this.scale.scale(a);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), i = mC(this, e), n = i.ticks, a = H(n, function(s) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
          tickValue: s
        };
      }, this), o = e.get("alignWithLabel");
      return DC(this, a, o, t.clamp), a;
    }, r.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal")
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var i = this.scale.getMinorTicks(e), n = H(i, function(a) {
        return H(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return n;
    }, r.prototype.getViewLabels = function() {
      return yC(this).labels;
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
      return bC(this);
    }, r;
  }()
);
function rv(r, t) {
  var e = r[1] - r[0], i = t, n = e / i / 2;
  r[0] += n, r[1] -= n;
}
function DC(r, t, e, i) {
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
    T(t, function(v) {
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
    return v = gt(v), d = gt(d), h ? v > d : v < d;
  }
}
const MC = CC;
function AC(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = n.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new ja(o, a) : null;
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
function EC(r) {
  var t = [];
  r.sort(function(y, p) {
    return p.priority - y.priority;
  });
  var e = new et(0, 0, 0, 0);
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
        if (d.obb || (d.obb = new ja(d.localRect, d.transform)), h || (h = new ja(s, u)), h.intersect(d.obb)) {
          c = !0;
          break;
        }
      }
    }
    c ? (i(l), f && i(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function iv(r, t, e) {
  var i = Ai.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
var LC = function(r) {
  k(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || Za, typeof e == "string" ? o = iv(e, i, n) : V(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (jv(o), o.onselectstart = function() {
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
    this.domBack = iv("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new et(0, 0, 0, 0);
    function f(m) {
      if (!(!m.isFinite() || m.isZero()))
        if (o.length === 0) {
          var _ = new et(0, 0, 0, 0);
          _.copy(m), o.push(_);
        } else {
          for (var w = !1, S = 1 / 0, x = 0, b = 0; b < o.length; ++b) {
            var D = o[b];
            if (D.intersect(m)) {
              var M = new et(0, 0, 0, 0);
              M.copy(D), M.union(m), o[b] = M, w = !0;
              break;
            } else if (u) {
              l.copy(m), l.union(D);
              var A = m.width * m.height, C = D.width * D.height, E = l.width * l.height, L = E - A - C;
              L < S && (S = L, x = b);
            }
          }
          if (u && (o[x].union(m), w = !0), !w) {
            var _ = new et(0, 0, 0, 0);
            _.copy(m), o.push(_);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var c = e[h];
      if (c) {
        var v = c.shouldBePainted(n, a, !0, !0), d = c.__isRendered && (c.__dirty & $t || !v) ? c.getPrevPaintRect() : null;
        d && f(d);
        var y = v && (c.__dirty & $t || !c.__isRendered) ? c.getPaintRect() : null;
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
    function d(y, p, g, m) {
      if (o.clearRect(y, p, g, m), i && i !== "transparent") {
        var _ = void 0;
        if (po(i)) {
          var w = i.global || i.__width === g && i.__height === m;
          _ = w && i.__canvasGradient || Yu(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: m
          }), i.__canvasGradient = _, i.__width = g, i.__height = m;
        } else
          lm(i) && (i.scaleX = i.scaleX || h, i.scaleY = i.scaleY || h, _ = $u(o, i, {
            dirty: function() {
              c.setUnpainted(), c.painter.refresh();
            }
          }));
        o.save(), o.fillStyle = _ || i, o.fillRect(y, p, g, m), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, y, p, g, m), o.restore());
    }
    !n || l ? d(0, 0, s, u) : n.length && T(n, function(y) {
      d(y.x * h, y.y * h, y.width * h, y.height * h);
    });
  }, t;
}(De);
const Xs = LC;
var nv = 1e5, Dr = 314159, Ca = 0.01, PC = 1e-3;
function IC(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function RC(r, t) {
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
var OC = function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || Za, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (jv(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, c = f.height;
      i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
      var v = new Xs(f, this, this.dpr);
      v.__builtin__ = !0, v.initContext(), u[Dr] = v, v.zlevel = Dr, s.push(Dr), this._domRoot = t;
    } else {
      this._width = ya(t, 0, i), this._height = ya(t, 1, i);
      var l = this._domRoot = RC(this._width, this._height);
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
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(nv)), a || (a = i.ctx, a.save()), Lr(a, s, n, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(nv);
  }, r.prototype.paintOne = function(t, e) {
    Eg(t, e);
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
        hu(function() {
          u._paintList(t, e, i, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(Dr).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, e, i);
    });
  }, r.prototype._doPaintList = function(t, e, i) {
    for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var u = this._zlevelList[s], l = this._layers[u];
      l.__builtin__ && l !== this._hoverlayer && (l.__dirty || i) && a.push(l);
    }
    for (var f = !0, h = !1, c = function(y) {
      var p = a[y], g = p.ctx, m = o && p.createRepaintRects(t, e, v._width, v._height), _ = i ? p.__startIndex : p.__drawIndex, w = !i && p.incremental && Date.now, S = w && Date.now(), x = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, x, m);
      else if (_ === p.__startIndex) {
        var b = t[_];
        (!b.incremental || !b.notClear || i) && p.clear(!1, x, m);
      }
      _ === -1 && (console.error("For some unknown reason. drawIndex is -1"), _ = p.__startIndex);
      var D, M = function(L) {
        var P = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: n._width,
          viewHeight: n._height
        };
        for (D = _; D < p.__endIndex; D++) {
          var I = t[D];
          if (I.__inHover && (h = !0), n._doPaintEl(I, p, o, L, P, D === p.__endIndex - 1), w) {
            var R = Date.now() - S;
            if (R > 15)
              break;
          }
        }
        P.prevElClipPaths && g.restore();
      };
      if (m)
        if (m.length === 0)
          D = p.__endIndex;
        else
          for (var A = v.dpr, C = 0; C < m.length; ++C) {
            var E = m[C];
            g.save(), g.beginPath(), g.rect(E.x * A, E.y * A, E.width * A, E.height * A), g.clip(), M(E), g.restore();
          }
      else
        g.save(), M(), g.restore();
      p.__drawIndex = D, p.__drawIndex < p.__endIndex && (f = !1);
    }, v = this, d = 0; d < a.length; d++)
      c(d);
    return $.wxa && T(this._layers, function(y) {
      y && y.ctx && y.ctx.draw && y.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, i, n, a, o) {
    var s = e.ctx;
    if (i) {
      var u = t.getPaintRect();
      (!n || u && u.intersect(n)) && (Lr(s, t, a, o), t.setPrevPaintRect(u));
    } else
      Lr(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = Dr);
    var i = this._layers[t];
    return i || (i = new Xs("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? tt(i, this._layerConfig[t], !0) : this._layerConfig[t - Ca] && tt(i, this._layerConfig[t - Ca], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, u = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && Pr("ZLevel " + t + " has been used already");
      return;
    }
    if (!IC(e)) {
      process.env.NODE_ENV !== "production" && Pr("Layer of zlevel " + t + " is not valid");
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
      s !== l && (s = l, o = 0), n.incremental ? (f = this.getLayer(l + PC, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? Ca : 0), this._needsManuallyCompositing), f.__builtin__ || Pr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, e(u), a = f), n.__dirty & $t && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
    }
    e(u), this.eachBuiltinLayer(function(h, c) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, T(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? tt(i[t], e, !0) : i[t] = e;
      for (var n = 0; n < this._zlevelList.length; n++) {
        var a = this._zlevelList[n];
        if (a === t || a === t + Ca) {
          var o = this._layers[a];
          tt(o, i[t], !0);
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
      if (t != null && (n.width = t), e != null && (n.height = e), t = ya(a, 0, n), e = ya(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
        i.style.width = t + "px", i.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(Dr).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[Dr].dom;
    var e = new Xs("image", this, t.pixelRatio || this.dpr);
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
        Lr(i, f, o, u === l - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
const NC = OC;
function kC(r) {
  r.registerPainter("canvas", NC);
}
function BC(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), i = e.length;
  if (i === 1) {
    var n = Di(r, t, e[0]);
    return n != null ? n + "" : null;
  } else if (i) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(Di(r, t, e[o]));
    return a.join(" ");
  }
}
function FC(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!N(t))
    return t + "";
  for (var i = [], n = 0; n < e.length; n++) {
    var a = r.getDimensionIndex(e[n]);
    a >= 0 && i.push(t[a]);
  }
  return i.join(" ");
}
function VC(r, t, e, i, n) {
  var a = r.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new yt({
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
    var y = U(n) ? function(p) {
      n(p, h);
    } : null;
    zr(h, {
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
function zC(r, t, e) {
  var i = r.getArea(), n = gt(i.r0, 1), a = gt(i.r, 1), o = new Un({
    shape: {
      cx: gt(r.cx, 1),
      cy: gt(r.cy, 1),
      r0: n,
      r: a,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = i.startAngle : o.shape.r = n, zr(o, {
      shape: {
        endAngle: i.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function HC(r, t, e, i, n) {
  if (r) {
    if (r.type === "polar")
      return zC(r, t, e);
    if (r.type === "cartesian2d")
      return VC(r, t, e, i, n);
  } else
    return null;
  return null;
}
function wy(r, t) {
  return r.type === t;
}
var GC = {
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
}, WC = function(r) {
  return Math.round(r.length / 2);
};
function UC(r) {
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
          F(a) ? d = GC[a] : U(a) && (d = a), d && t.setData(n.downSample(n.mapDimension(l.dim), 1 / v, d, WC));
        }
      }
    }
  };
}
var Sy = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, i) {
      return Jg(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(e, i, n) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(e), s = a.dataToPoint(o);
        if (n)
          T(a.getAxes(), function(c, v) {
            if (c.type === "category" && i != null) {
              var d = c.getTicksCoords(), y = c.getTickModel().get("alignWithLabel"), p = o[v], g = i[v] === "x1" || i[v] === "y1";
              if (g && !y && (p += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[v] = c.toGlobalCoord(c.getExtent()[g ? 1 : 0]);
                return;
              }
              for (var m = void 0, _ = void 0, w = 1, S = 0; S < d.length; S++) {
                var x = d[S].coord, b = S === d.length - 1 ? d[S - 1].tickValue + w : d[S].tickValue;
                if (b === p) {
                  _ = x;
                  break;
                } else if (b < p)
                  m = x;
                else if (m != null && b > p) {
                  _ = (x + m) / 2;
                  break;
                }
                S === 1 && (w = b - d[0].tickValue);
              }
              _ == null && (m ? m && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[v] = c.toGlobalCoord(_);
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
  }(Mi)
);
Mi.registerClass(Sy);
const av = Sy;
var YC = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function() {
      return Jg(null, this, {
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
    }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = Pp(av.defaultOption, {
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
  }(av)
);
const $C = YC;
var XC = (
  /** @class */
  function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  }()
), ZC = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "sausage", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new XC();
    }, t.prototype.buildPath = function(e, i) {
      var n = i.cx, a = i.cy, o = Math.max(i.r0 || 0, 0), s = Math.max(i.r, 0), u = (s - o) * 0.5, l = o + u, f = i.startAngle, h = i.endAngle, c = i.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
      d || (f = h - (c ? v : -v));
      var y = Math.cos(f), p = Math.sin(f), g = Math.cos(h), m = Math.sin(h);
      d ? (e.moveTo(y * o + n, p * o + a), e.arc(y * l + n, p * l + a, u, -Math.PI + f, f, !c)) : e.moveTo(y * s + n, p * s + a), e.arc(n, a, s, f, h, !c), e.arc(g * l + n, m * l + a, u, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && e.arc(n, a, o, h, f, c);
    }, t;
  }(ot)
);
const ov = ZC;
function qC(r, t) {
  t = t || {};
  var e = t.isRoundCap;
  return function(i, n, a) {
    var o = n.position;
    if (!o || o instanceof Array)
      return qa(i, n, a);
    var s = r(o), u = n.distance != null ? n.distance : 5, l = this.shape, f = l.cx, h = l.cy, c = l.r, v = l.r0, d = (c + v) / 2, y = l.startAngle, p = l.endAngle, g = (y + p) / 2, m = e ? Math.abs(c - v) / 2 : 0, _ = Math.cos, w = Math.sin, S = f + c * _(y), x = h + c * w(y), b = "left", D = "top";
    switch (s) {
      case "startArc":
        S = f + (v - u) * _(g), x = h + (v - u) * w(g), b = "center", D = "top";
        break;
      case "insideStartArc":
        S = f + (v + u) * _(g), x = h + (v + u) * w(g), b = "center", D = "bottom";
        break;
      case "startAngle":
        S = f + d * _(y) + Da(y, u + m, !1), x = h + d * w(y) + Ma(y, u + m, !1), b = "right", D = "middle";
        break;
      case "insideStartAngle":
        S = f + d * _(y) + Da(y, -u + m, !1), x = h + d * w(y) + Ma(y, -u + m, !1), b = "left", D = "middle";
        break;
      case "middle":
        S = f + d * _(g), x = h + d * w(g), b = "center", D = "middle";
        break;
      case "endArc":
        S = f + (c + u) * _(g), x = h + (c + u) * w(g), b = "center", D = "bottom";
        break;
      case "insideEndArc":
        S = f + (c - u) * _(g), x = h + (c - u) * w(g), b = "center", D = "top";
        break;
      case "endAngle":
        S = f + d * _(p) + Da(p, u + m, !0), x = h + d * w(p) + Ma(p, u + m, !0), b = "left", D = "middle";
        break;
      case "insideEndAngle":
        S = f + d * _(p) + Da(p, -u + m, !0), x = h + d * w(p) + Ma(p, -u + m, !0), b = "right", D = "middle";
        break;
      default:
        return qa(i, n, a);
    }
    return i = i || {}, i.x = S, i.y = x, i.align = b, i.verticalAlign = D, i;
  };
}
function KC(r, t, e, i) {
  if (ht(i)) {
    r.setTextConfig({
      rotation: i
    });
    return;
  } else if (N(t)) {
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
function Da(r, t, e) {
  return t * Math.sin(r) * (e ? -1 : 1);
}
function Ma(r, t, e) {
  return t * Math.cos(r) * (e ? 1 : -1);
}
function QC(r, t, e) {
  var i = r.get("borderRadius");
  if (i == null)
    return e ? {
      cornerRadius: 0
    } : null;
  N(i) || (i = [i, i, i, i]);
  var n = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: H(i, function(a) {
      return Je(a, n);
    })
  };
}
var Zs = Math.max, qs = Math.min;
function JC(r, t) {
  var e = r.getArea && r.getArea();
  if (wy(r, "cartesian2d")) {
    var i = r.getBaseAxis();
    if (i.type !== "category" || !i.onBand) {
      var n = t.getLayout("bandWidth");
      i.isHorizontal() ? (e.x -= n, e.width += n * 2) : (e.y -= n, e.height += n * 2);
    }
  }
  return e;
}
var jC = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r.call(this) || this;
      return e.type = t.type, e._isFirstFrame = !0, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this._model = e, this._removeOnRenderedListener(n), this._updateDrawMode(e);
      var o = e.get("coordinateSystem");
      o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, i, n) : this._renderNormal(e, i, n, a)) : process.env.NODE_ENV !== "production" && Bt("Only cartesian2d and polar supported for bar.");
    }, t.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, t.prototype.incrementalRender = function(e, i) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, i);
    }, t.prototype.eachRendered = function(e) {
      Bl(this._progressiveEls || this.group, e);
    }, t.prototype._updateDrawMode = function(e) {
      var i = e.pipelineContext.large;
      (this._isLargeDraw == null || i !== this._isLargeDraw) && (this._isLargeDraw = i, this._clear());
    }, t.prototype._renderNormal = function(e, i, n, a) {
      var o = this.group, s = e.getData(), u = this._data, l = e.coordinateSystem, f = l.getBaseAxis(), h;
      l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
      var c = e.isAnimationEnabled() ? e : null, v = tD(e, l);
      v && this._enableRealtimeSort(v, s, n);
      var d = e.get("clip", !0) || v, y = JC(l, s);
      o.removeClipPath();
      var p = e.get("roundCap", !0), g = e.get("showBackground", !0), m = e.getModel("backgroundStyle"), _ = m.get("borderRadius") || 0, w = [], S = this._backgroundEls, x = a && a.isInitSort, b = a && a.type === "changeAxisOrder";
      function D(C) {
        var E = Aa[l.type](s, C), L = sD(l, h, E);
        return L.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? L.setShape("r", _) : L.setShape("cornerRadius", _), w[C] = L, L;
      }
      s.diff(u).add(function(C) {
        var E = s.getItemModel(C), L = Aa[l.type](s, C, E);
        if (g && D(C), !(!s.hasValue(C) || !hv[l.type](L))) {
          var P = !1;
          d && (P = sv[l.type](y, L));
          var I = uv[l.type](e, s, C, L, h, c, f.model, !1, p);
          v && (I.forceLabelAnimation = !0), cv(I, s, C, E, L, e, h, l.type === "polar"), x ? I.attr({
            shape: L
          }) : v ? lv(v, c, I, L, C, h, !1, !1) : zr(I, {
            shape: L
          }, e, C), s.setItemGraphicEl(C, I), o.add(I), I.ignore = P;
        }
      }).update(function(C, E) {
        var L = s.getItemModel(C), P = Aa[l.type](s, C, L);
        if (g) {
          var I = void 0;
          S.length === 0 ? I = D(E) : (I = S[E], I.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? I.setShape("r", _) : I.setShape("cornerRadius", _), w[C] = I);
          var R = Aa[l.type](s, C), G = by(h, R, l);
          Ne(I, {
            shape: G
          }, c, C);
        }
        var B = u.getItemGraphicEl(E);
        if (!s.hasValue(C) || !hv[l.type](P)) {
          o.remove(B);
          return;
        }
        var z = !1;
        if (d && (z = sv[l.type](y, P), z && o.remove(B)), B ? gw(B) : B = uv[l.type](e, s, C, P, h, c, f.model, !!B, p), v && (B.forceLabelAnimation = !0), b) {
          var Y = B.getTextContent();
          if (Y) {
            var J = Fl(Y);
            J.prevValue != null && (J.prevValue = J.value);
          }
        } else
          cv(B, s, C, L, P, e, h, l.type === "polar");
        x ? B.attr({
          shape: P
        }) : v ? lv(v, c, B, P, C, h, !0, b) : Ne(B, {
          shape: P
        }, e, C, null), s.setItemGraphicEl(C, B), B.ignore = z, o.add(B);
      }).remove(function(C) {
        var E = u.getItemGraphicEl(C);
        E && Ru(E, e, C);
      }).execute();
      var M = this._backgroundGroup || (this._backgroundGroup = new se());
      M.removeAll();
      for (var A = 0; A < w.length; ++A)
        M.add(w[A]);
      o.add(M), this._backgroundEls = w, this._data = s;
    }, t.prototype._renderLarge = function(e, i, n) {
      this._clear(), dv(e, this.group), this._updateLargeClip(e);
    }, t.prototype._incrementalRenderLarge = function(e, i) {
      this._removeBackground(), dv(i, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(e) {
      var i = e.get("clip", !0) && HC(e.coordinateSystem, !1, e), n = this.group;
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
        ordinalNumbers: H(a, function(o) {
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
        Ru(a, e, st(a).dataIndex);
      })) : i.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = "bar", t;
  }(wi)
), sv = {
  cartesian2d: function(r, t) {
    var e = t.width < 0 ? -1 : 1, i = t.height < 0 ? -1 : 1;
    e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height);
    var n = r.x + r.width, a = r.y + r.height, o = Zs(t.x, r.x), s = qs(t.x + t.width, n), u = Zs(t.y, r.y), l = qs(t.y + t.height, a), f = s < o, h = l < u;
    return t.x = f && o > n ? s : o, t.y = h && u > a ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(r, t) {
    var e = t.r0 <= t.r ? 1 : -1;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    var n = qs(t.r, r.r), a = Zs(t.r0, r.r0);
    t.r = n, t.r0 = a;
    var o = n - a < 0;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    return o;
  }
}, uv = {
  cartesian2d: function(r, t, e, i, n, a, o, s, u) {
    var l = new yt({
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
    var l = !n && u ? ov : Un, f = new l({
      shape: i,
      z2: 1
    });
    f.name = "item";
    var h = xy(n);
    if (f.calculateTextPosition = qC(h, {
      isRoundCap: l === ov
    }), a) {
      var c = f.shape, v = n ? "r" : "endAngle", d = {};
      c[v] = n ? i.r0 : i.startAngle, d[v] = i[v], (s ? Ne : zr)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function tD(r, t) {
  var e = r.get("realtimeSort", !0), i = t.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && e && (i.type !== "category" && Bt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Bt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && i.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: i,
      otherAxis: t.getOtherAxis(i)
    };
}
function lv(r, t, e, i, n, a, o, s) {
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
  }), s || (o ? Ne : zr)(e, {
    shape: u
  }, t, n, null);
  var f = t ? r.baseAxis.model : null;
  (o ? Ne : zr)(e, {
    shape: l
  }, f, n);
}
function fv(r, t) {
  for (var e = 0; e < t.length; e++)
    if (!isFinite(r[t[e]]))
      return !0;
  return !1;
}
var eD = ["x", "y", "width", "height"], rD = ["cx", "cy", "r", "startAngle", "endAngle"], hv = {
  cartesian2d: function(r) {
    return !fv(r, eD);
  },
  polar: function(r) {
    return !fv(r, rD);
  }
}, Aa = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(r, t, e) {
    var i = r.getItemLayout(t), n = e ? nD(e, i) : 0, a = i.width > 0 ? 1 : -1, o = i.height > 0 ? 1 : -1;
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
function iD(r) {
  return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
}
function xy(r) {
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
function cv(r, t, e, i, n, a, o, s) {
  var u = t.getItemVisual(e, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = r.shape, h = QC(i.getModel("itemStyle"), f, !0);
      O(f, h), r.setShape(f);
    }
  } else {
    var l = i.get(["itemStyle", "borderRadius"]) || 0;
    r.setShape("r", l);
  }
  r.useStyle(u);
  var c = i.getShallow("cursor");
  c && r.attr("cursor", c);
  var v = s ? o ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : o ? n.height >= 0 ? "bottom" : "top" : n.width >= 0 ? "right" : "left", d = Rw(i);
  Ap(r, d, {
    labelFetcher: a,
    labelDataIndex: e,
    defaultText: BC(a.getData(), e),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: v
  });
  var y = r.getTextContent();
  if (s && y) {
    var p = i.get(["label", "position"]);
    r.textConfig.inside = p === "middle" ? !0 : null, KC(r, p === "outside" ? v : p, xy(o), i.get(["label", "rotate"]));
  }
  Bw(y, d, a.getRawValue(e), function(m) {
    return FC(t, m);
  });
  var g = i.getModel(["emphasis"]);
  M1(r, g.get("focus"), g.get("blurScope"), g.get("disabled")), L1(r, i), iD(n) && (r.style.fill = "none", r.style.stroke = "none", T(r.states, function(m) {
    m.style && (m.style.fill = m.style.stroke = "none");
  }));
}
function nD(r, t) {
  var e = r.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var i = r.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(i, n, a);
}
var aD = (
  /** @class */
  function() {
    function r() {
    }
    return r;
  }()
), vv = (
  /** @class */
  function(r) {
    k(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "largeBar", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new aD();
    }, t.prototype.buildPath = function(e, i) {
      for (var n = i.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < n.length; f += 3)
        u[a] = l, u[o] = n[f + 2], s[a] = n[f + a], s[o] = n[f + o], e.rect(s[0], s[1], u[0], u[1]);
    }, t;
  }(ot)
);
function dv(r, t, e, i) {
  var n = r.getData(), a = n.getLayout("valueAxisHorizontal") ? 1 : 0, o = n.getLayout("largeDataIndices"), s = n.getLayout("size"), u = r.getModel("backgroundStyle"), l = n.getLayout("largeBackgroundPoints");
  if (l) {
    var f = new vv({
      shape: {
        points: l
      },
      incremental: !!i,
      silent: !0,
      z2: 0
    });
    f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(u.getItemStyle()), t.add(f), e && e.push(f);
  }
  var h = new vv({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: !!i,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(n.getVisual("style")), h.style.stroke = null, st(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", pv), h.on("mousemove", pv)), e && e.push(h);
}
var pv = jl(function(r) {
  var t = this, e = oD(t, r.offsetX, r.offsetY);
  st(t).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function oD(r, t, e) {
  for (var i = r.baseDimIdx, n = 1 - i, a = r.shape.points, o = r.largeDataIndices, s = [], u = [], l = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var c = f * 3;
    if (u[i] = l, u[n] = a[c + 2], s[i] = a[c + i], s[n] = a[c + n], u[n] < 0 && (s[n] += u[n], u[n] = -u[n]), t >= s[0] && t <= s[0] + u[0] && e >= s[1] && e <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function by(r, t, e) {
  if (wy(e, "cartesian2d")) {
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
function sD(r, t, e) {
  var i = r.type === "polar" ? Un : yt;
  return new i({
    shape: by(t, e, r),
    silent: !0,
    z2: 0
  });
}
const uD = jC;
function lD(r) {
  r.registerChartView(uD), r.registerSeriesModel($C), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, vt(WT, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, UT("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, UC("bar")), r.registerAction({
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
var fD = (
  /** @class */
  function(r) {
    k(t, r);
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
const hD = fD;
var ju = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", ve).models[0];
    }, t.type = "cartesian2dAxis", t;
  }(ut)
);
Ce(ju, pC);
var Ty = {
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
}, cD = tt({
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
}, Ty), hf = tt({
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
}, Ty), vD = tt({
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
}, hf), dD = at({
  logBase: 10
}, hf);
const pD = {
  category: cD,
  value: hf,
  time: vD,
  log: dD
};
var gD = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function gv(r, t, e, i) {
  T(gD, function(n, a) {
    var o = tt(tt({}, pD[a], !0), i, !0), s = (
      /** @class */
      function(u) {
        k(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var c = In(this), v = c ? Io(f) : {}, d = h.getTheme();
          tt(f, d.get(a + "Axis")), tt(f, this.getDefaultOption()), f.type = yv(f), c && Ci(f, v, c);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Qu.createByAxisModel(this));
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
  }), r.registerSubTypeDefaulter(t + "Axis", yv);
}
function yv(r) {
  return r.type || (r.data ? "category" : "value");
}
var yD = (
  /** @class */
  function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return H(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), wt(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  }()
);
const mD = yD;
var tl = ["x", "y"];
function mv(r) {
  return r.type === "interval" || r.type === "time";
}
var _D = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "cartesian2d", e.dimensions = tl, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, i = this.getAxis("y").scale;
      if (!(!mv(e) || !mv(i))) {
        var n = e.getExtent(), a = i.getExtent(), o = this.dataToPoint([n[0], a[0]]), s = this.dataToPoint([n[1], a[1]]), u = n[1] - n[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, c = o[0] - n[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
          this._invTransform = gl([], d);
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
      var n = this.dataToPoint(e), a = this.dataToPoint(i), o = this.getArea(), s = new et(n[0], n[1], a[0] - n[0], a[1] - n[1]);
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
      return new et(a, o, s, u);
    }, t;
  }(mD)
), wD = (
  /** @class */
  function(r) {
    k(t, r);
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
  }(MC)
);
const SD = wD;
function el(r, t, e) {
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
  a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Br(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var g = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = u === "top" ? -g : g, a.z2 = 1, a;
}
function _v(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function wv(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return T(t, function(e, i) {
    var n = i.replace(/Model$/, ""), a = r.getReferringComponents(n, ve).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(n + ' "' + ci(r.get(n + "Index"), r.get(n + "Id"), 0) + '" not found');
    t[i] = a;
  }), t;
}
var Ks = Math.log;
function xD(r, t, e) {
  var i = Yn.prototype, n = i.getTicks.call(e), a = i.getTicks.call(e, !0), o = n.length - 1, s = i.getInterval.call(e), u = hy(r, t), l = u.extent, f = u.fixMin, h = u.fixMax;
  if (r.type === "log") {
    var c = Ks(r.base);
    l = [Ks(l[0]) / c, Ks(l[1]) / c];
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
      d = Ys(d), p = l[0] + d * o;
  else if (h)
    for (y = l[1] - d * o; y > l[0] && isFinite(y) && isFinite(l[0]); )
      d = Ys(d), y = l[1] - d * o;
  else {
    var g = r.getTicks().length - 1;
    g > o && (d = Ys(d));
    var m = d * o;
    p = Math.ceil(l[1] / d) * d, y = gt(p - m), y < 0 && l[0] >= 0 ? (y = 0, p = gt(m)) : p > 0 && l[1] <= 0 && (p = 0, y = -gt(m));
  }
  var _ = (n[0].value - a[0].value) / s, w = (n[o].value - a[o].value) / s;
  if (i.setExtent.call(r, y + d * _, p + d * w), i.setInterval.call(r, d), (_ || w) && i.setNiceExtent.call(r, y + d, p - d), process.env.NODE_ENV !== "production") {
    var S = i.getTicks.call(r);
    S[1] && (!NT(d) || Su(S[1].value) > Su(d)) && Bt(
      // eslint-disable-next-line
      "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
    );
  }
}
var bD = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = tl, this._initCartesian(t, e, i), this.model = t;
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
            Ju(y) && d.get("alignTicks") && d.get("interval") == null ? f.push(v) : (jc(y, d), Ju(y) && (s = v));
          }
          f.length && (s || (s = f.pop(), jc(s.scale, s.model)), T(f, function(p) {
            xD(p.scale, p.model, s.scale);
          }));
        }
      }
      n(i.x), n(i.y);
      var a = {};
      T(i.x, function(o) {
        Sv(i, "y", o, a);
      }), T(i.y, function(o) {
        Sv(i, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, i) {
      var n = t.getBoxLayoutParams(), a = !i && t.get("containLabel"), o = io(n, {
        width: e.getWidth(),
        height: e.getHeight()
      });
      this._rect = o;
      var s = this._axesList;
      u(), a && (T(s, function(l) {
        if (!l.model.get(["axisLabel", "inside"])) {
          var f = cC(l);
          if (f) {
            var h = l.isHorizontal() ? "height" : "width", c = l.model.get(["axisLabel", "margin"]);
            o[h] -= f[h] + c, l.position === "top" ? o.y += f.height + c : l.position === "left" && (o.x += f.width + c);
          }
        }
      }), u()), T(this._coordsList, function(l) {
        l.calcAffineTransform();
      });
      function u() {
        T(s, function(l) {
          var f = l.isHorizontal(), h = f ? [0, o.width] : [0, o.height], c = l.inverse ? 1 : 0;
          l.setExtent(h[c], h[1 - c]), TD(l, f ? o.x : o.y);
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
      var e = t.seriesModel, i = t.xAxisModel || e && e.getReferringComponents("xAxis", ve).models[0], n = t.yAxisModel || e && e.getReferringComponents("yAxis", ve).models[0], a = t.gridModel, o = this._coordsList, s, u;
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
      this._axesMap = s, T(s.x, function(f, h) {
        T(s.y, function(c, v) {
          var d = "x" + h + "y" + v, y = new _D(d);
          y.master = n, y.model = t, n._coordsMap[d] = y, n._coordsList.push(y), y.addAxis(f), y.addAxis(c);
        });
      });
      function l(f) {
        return function(h, c) {
          if (Qs(h, t)) {
            var v = h.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = new SD(f, fC(h), [0, 0], h.get("type"), v), y = d.type === "category";
            d.onBand = y && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = a, d.index = c, a._axesList.push(d), s[f][c] = d, u[f]++;
          }
        };
      }
    }, r.prototype._updateScale = function(t, e) {
      T(this._axesList, function(n) {
        if (n.scale.setExtent(1 / 0, -1 / 0), n.type === "category") {
          var a = n.model.get("categorySortInfo");
          n.scale.setSortInfo(a);
        }
      }), t.eachSeries(function(n) {
        if (_v(n)) {
          var a = wv(n), o = a.xAxisModel, s = a.yAxisModel;
          if (!Qs(o, e) || !Qs(s, e))
            return;
          var u = this.getCartesian(o.componentIndex, s.componentIndex), l = n.getData(), f = u.getAxis("x"), h = u.getAxis("y");
          i(l, f), i(l, h);
        }
      }, this);
      function i(n, a) {
        T(dC(n, a.dim), function(o) {
          a.scale.unionExtentFromData(n, o);
        });
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], i = [];
      return T(this.getCartesians(), function(n) {
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
        if (_v(n)) {
          var a = wv(n), o = a.xAxisModel, s = a.yAxisModel, u = o.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!u)
              throw new Error('Grid "' + ci(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
            if (o.getCoordSysModel() !== s.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var l = u.coordinateSystem;
          n.coordinateSystem = l.getCartesian(o.componentIndex, s.componentIndex);
        }
      }), i;
    }, r.dimensions = tl, r;
  }()
);
function Qs(r, t) {
  return r.getCoordSysModel() === t;
}
function Sv(r, t, e, i) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var n = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    xv(n[u]) && (a = n[u]);
  else
    for (var l in n)
      if (n.hasOwnProperty(l) && xv(n[l]) && !i[f(n[l])]) {
        a = n[l];
        break;
      }
  a && (i[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function xv(r) {
  return r && r.type !== "category" && r.type !== "time" && hC(r);
}
function TD(r, t) {
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
const CD = bD;
var Ke = Math.PI, Nr = (
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
      return !!bv[t];
    }, r.prototype.add = function(t) {
      bv[t](this.opt, this.axisModel, this.group, this._transformGroup);
    }, r.prototype.getGroup = function() {
      return this.group;
    }, r.innerTextLayout = function(t, e, i) {
      var n = Td(e - t), a, o;
      return Ka(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : Ka(n - Ke) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < Ke ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
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
), bv = {
  axisLine: function(r, t, e, i) {
    var n = t.get(["axisLine", "show"]);
    if (n === "auto" && r.handleAutoShown && (n = r.handleAutoShown("axisLine")), !!n) {
      var a = t.axis.getExtent(), o = i.transform, s = [a[0], 0], u = [a[1], 0], l = s[0] > u[0];
      o && (oe(s, s, o), oe(u, u, o));
      var f = O({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new Vr({
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
      En(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
      var c = t.get(["axisLine", "symbol"]);
      if (c != null) {
        var v = t.get(["axisLine", "symbolSize"]);
        F(c) && (c = [c, c]), (F(v) || ht(v)) && (v = [v, v]);
        var d = pb(t.get(["axisLine", "symbolOffset"]) || 0, v), y = v[0], p = v[1];
        T([{
          rotate: r.rotation + Math.PI / 2,
          offset: d[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: d[1],
          r: Math.sqrt((s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1]))
        }], function(g, m) {
          if (c[m] !== "none" && c[m] != null) {
            var _ = tf(c[m], -y / 2, -p / 2, y, p, f.stroke, !0), w = g.r + g.offset, S = l ? u : s;
            _.attr({
              rotation: g.rotate,
              x: S[0] + w * Math.cos(r.rotation),
              y: S[1] - w * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), e.add(_);
          }
        });
      }
    }
  },
  axisTickLabel: function(r, t, e, i) {
    var n = AD(e, i, t, r), a = LD(e, i, t, r);
    if (MD(t, a, n), ED(e, i, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = AC(H(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      EC(o);
    }
  },
  axisName: function(r, t, e, i) {
    var n = Br(r.axisName, t.get("name"));
    if (n) {
      var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), u = t.get("nameGap") || 0, l = t.axis.getExtent(), f = l[0] > l[1] ? -1 : 1, h = [
        a === "start" ? l[0] - f * u : a === "end" ? l[1] + f * u : (l[0] + l[1]) / 2,
        // Reuse labelOffset.
        Cv(a) ? r.labelOffset + o * u : 0
      ], c, v = t.get("nameRotate");
      v != null && (v = v * Ke / 180);
      var d;
      Cv(a) ? c = Nr.innerTextLayout(
        r.rotation,
        v ?? r.rotation,
        // Adapt to axis.
        o
      ) : (c = DD(r.rotation, a, v || 0, l), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
      var y = s.getFont(), p = t.get("nameTruncate", !0) || {}, g = p.ellipsis, m = Br(r.nameTruncateMaxWidth, p.maxWidth, d), _ = new ue({
        x: h[0],
        y: h[1],
        rotation: c.rotation,
        silent: Nr.isLabelSilent(t),
        style: Ti(s, {
          text: n,
          font: y,
          overflow: "truncate",
          width: m,
          ellipsis: g,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || c.textAlign,
          verticalAlign: s.get("verticalAlign") || c.textVerticalAlign
        }),
        z2: 1
      });
      if (bo({
        el: _,
        componentModel: t,
        itemName: n
      }), _.__fullText = n, _.anid = "name", t.get("triggerEvent")) {
        var w = Nr.makeAxisEventDataBase(t);
        w.targetType = "axisName", w.name = n, st(_).eventData = w;
      }
      i.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
    }
  }
};
function DD(r, t, e, i) {
  var n = Td(e - r), a, o, s = i[0] > i[1], u = t === "start" && !s || t !== "start" && s;
  return Ka(n - Ke / 2) ? (o = u ? "bottom" : "top", a = "center") : Ka(n - Ke * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", n < Ke * 1.5 && n > Ke / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: n,
    textAlign: a,
    textVerticalAlign: o
  };
}
function MD(r, t, e) {
  if (!cy(r.axis)) {
    var i = r.get(["axisLabel", "showMinLabel"]), n = r.get(["axisLabel", "showMaxLabel"]);
    t = t || [], e = e || [];
    var a = t[0], o = t[1], s = t[t.length - 1], u = t[t.length - 2], l = e[0], f = e[1], h = e[e.length - 1], c = e[e.length - 2];
    i === !1 ? (Qt(a), Qt(l)) : Tv(a, o) && (i ? (Qt(o), Qt(f)) : (Qt(a), Qt(l))), n === !1 ? (Qt(s), Qt(h)) : Tv(u, s) && (n ? (Qt(u), Qt(c)) : (Qt(s), Qt(h)));
  }
}
function Qt(r) {
  r && (r.ignore = !0);
}
function Tv(r, t) {
  var e = r && r.getBoundingRect().clone(), i = t && t.getBoundingRect().clone();
  if (!(!e || !i)) {
    var n = dl([]);
    return pl(n, n, -r.rotation), e.applyTransform(pi([], n, r.getLocalTransform())), i.applyTransform(pi([], n, t.getLocalTransform())), e.intersect(i);
  }
}
function Cv(r) {
  return r === "middle" || r === "center";
}
function Cy(r, t, e, i, n) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = e, t && (oe(o, o, t), oe(s, s, t));
    var f = new Vr({
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
    En(f.shape, f.style.lineWidth), f.anid = n + "_" + r[u].tickValue, a.push(f);
  }
  return a;
}
function AD(r, t, e, i) {
  var n = e.axis, a = e.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")), !(!o || n.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), u = i.tickDirection * a.get("length"), l = n.getTicksCoords(), f = Cy(l, t.transform, u, at(s.getLineStyle(), {
      stroke: e.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      r.add(f[h]);
    return f;
  }
}
function ED(r, t, e, i) {
  var n = e.axis, a = e.getModel("minorTick");
  if (!(!a.get("show") || n.scale.isBlank())) {
    var o = n.getMinorTicksCoords();
    if (o.length)
      for (var s = a.getModel("lineStyle"), u = i * a.get("length"), l = at(s.getLineStyle(), at(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = Cy(o[f], t.transform, u, l, "minorticks_" + f), c = 0; c < h.length; c++)
          r.add(h[c]);
  }
}
function LD(r, t, e, i) {
  var n = e.axis, a = Br(i.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || n.scale.isBlank())) {
    var o = e.getModel("axisLabel"), s = o.get("margin"), u = n.getViewLabels(), l = (Br(i.labelRotate, o.get("rotate")) || 0) * Ke / 180, f = Nr.innerTextLayout(i.rotation, l, i.labelDirection), h = e.getCategories && e.getCategories(!0), c = [], v = Nr.isLabelSilent(e), d = e.get("triggerEvent");
    return T(u, function(y, p) {
      var g = n.scale.type === "ordinal" ? n.scale.getRawOrdinalNumber(y.tickValue) : y.tickValue, m = y.formattedLabel, _ = y.rawLabel, w = o;
      if (h && h[g]) {
        var S = h[g];
        V(S) && S.textStyle && (w = new Mt(S.textStyle, o, e.ecModel));
      }
      var x = w.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), b = n.dataToCoord(g), D = w.getShallow("align", !0) || f.textAlign, M = X(w.getShallow("alignMinLabel", !0), D), A = X(w.getShallow("alignMaxLabel", !0), D), C = w.getShallow("verticalAlign", !0) || w.getShallow("baseline", !0) || f.textVerticalAlign, E = X(w.getShallow("verticalAlignMinLabel", !0), C), L = X(w.getShallow("verticalAlignMaxLabel", !0), C), P = new ue({
        x: b,
        y: i.labelOffset + i.labelDirection * s,
        rotation: f.rotation,
        silent: v,
        z2: 10 + (y.level || 0),
        style: Ti(w, {
          text: m,
          align: p === 0 ? M : p === u.length - 1 ? A : D,
          verticalAlign: p === 0 ? E : p === u.length - 1 ? L : C,
          fill: U(x) ? x(
            // (1) In category axis with data zoom, tick is not the original
            // index of axis.data. So tick should not be exposed to user
            // in category axis.
            // (2) Compatible with previous version, which always use formatted label as
            // input. But in interval scale the formatted label is like '223,445', which
            // maked user replace ','. So we modify it to return original val but remain
            // it as 'string' to avoid error in replacing.
            n.type === "category" ? _ : n.type === "value" ? g + "" : g,
            p
          ) : x
        })
      });
      if (P.anid = "label_" + g, bo({
        el: P,
        componentModel: e,
        itemName: m,
        formatterParamsExtra: {
          isTruncated: function() {
            return P.isTruncated;
          },
          value: _,
          tickIndex: p
        }
      }), d) {
        var I = Nr.makeAxisEventDataBase(e);
        I.targetType = "axisLabel", I.value = _, I.tickIndex = p, n.type === "category" && (I.dataIndex = g), st(P).eventData = I;
      }
      t.add(P), P.updateTransform(), c.push(P), r.add(P), P.decomposeTransform();
    }), c;
  }
}
const Dy = Nr;
function PD(r, t) {
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
  return ID(e, r, t), e.seriesInvolved && OD(e, r), e;
}
function ID(r, t, e) {
  var i = t.getComponent("tooltip"), n = t.getComponent("axisPointer"), a = n.get("link", !0) || [], o = [];
  T(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Fn(s.model), l = r.coordSysAxesInfo[u] = {};
    r.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", i);
    if (T(s.getAxes(), vt(y, !1, null)), s.getTooltipAxes && i && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && T(d.baseAxes, vt(y, v ? "cross" : !0, c)), v && T(d.otherAxes, vt(y, "cross", !1));
    }
    function y(p, g, m) {
      var _ = m.model.getModel("axisPointer", n), w = _.get("show");
      if (!(!w || w === "auto" && !p && !rl(_))) {
        g == null && (g = _.get("triggerTooltip")), _ = p ? RD(m, h, n, t, p, g) : _;
        var S = _.get("snap"), x = _.get("triggerEmphasis"), b = Fn(m.model), D = g || S || m.type === "category", M = r.axesInfo[b] = {
          key: b,
          axis: m,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: g,
          triggerEmphasis: x,
          involveSeries: D,
          snap: S,
          useHandle: rl(_),
          seriesModels: [],
          linkGroup: null
        };
        l[b] = M, r.seriesInvolved = r.seriesInvolved || D;
        var A = ND(a, m);
        if (A != null) {
          var C = o[A] || (o[A] = {
            axesInfo: {}
          });
          C.axesInfo[b] = M, C.mapper = a[A].mapper, M.linkGroup = C;
        }
      }
    }
  });
}
function RD(r, t, e, i, n, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  T(s, function(c) {
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
  return r.model.getModel("axisPointer", new Mt(u, e, i));
}
function OD(r, t) {
  t.eachSeries(function(e) {
    var i = e.coordinateSystem, n = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !i || n === "none" || n === !1 || n === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || T(r.coordSysAxesInfo[Fn(i.model)], function(o) {
      var s = o.axis;
      i.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function ND(r, t) {
  for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
    var a = r[n] || {};
    if (Js(a[i + "AxisId"], e.id) || Js(a[i + "AxisIndex"], e.componentIndex) || Js(a[i + "AxisName"], e.name))
      return n;
  }
}
function Js(r, t) {
  return r === "all" || N(r) && it(r, t) >= 0 || r === t;
}
function kD(r) {
  var t = cf(r);
  if (t) {
    var e = t.axisPointerModel, i = t.axis.scale, n = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = i.parse(o));
    var s = rl(e);
    a == null && (n.status = s ? "show" : "hide");
    var u = i.getExtent().slice();
    u[0] > u[1] && u.reverse(), // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function cf(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Fn(r)];
}
function BD(r) {
  var t = cf(r);
  return t && t.axisPointerModel;
}
function rl(r) {
  return !!r.get(["handle", "show"]);
}
function Fn(r) {
  return r.type + "||" + r.id;
}
var js = {}, FD = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.axisPointerClass && kD(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, n, !0);
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
        var o = BD(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, i, n) : this._disposeAxisPointer(i);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, i) {
      if (process.env.NODE_ENV !== "production" && js[e])
        throw new Error("axisPointer " + e + " exists");
      js[e] = i;
    }, t.getAxisPointerClass = function(e) {
      return e && js[e];
    }, t.type = "axis", t;
  }(tr)
);
const My = FD;
var il = dt();
function VD(r, t, e, i) {
  var n = e.axis;
  if (!n.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = i.coordinateSystem.getRect(), l = n.getTicksCoords({
      tickModel: a,
      clamp: !0
    });
    if (l.length) {
      var f = s.length, h = il(r).splitAreaColors, c = q(), v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var y = h.get(l[d].tickValue);
          if (y != null) {
            v = (y + (f - 1) * d) % f;
            break;
          }
        }
      var p = n.toGlobalCoord(l[0].coord), g = o.getAreaStyle();
      s = N(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var m = n.toGlobalCoord(l[d].coord), _ = void 0, w = void 0, S = void 0, x = void 0;
        n.isHorizontal() ? (_ = p, w = u.y, S = m - _, x = u.height, p = _ + S) : (_ = u.x, w = p, S = u.width, x = m - w, p = w + x);
        var b = l[d - 1].tickValue;
        b != null && c.set(b, v), t.add(new yt({
          anid: b != null ? "area_" + b : null,
          shape: {
            x: _,
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
      il(r).splitAreaColors = c;
    }
  }
}
function zD(r) {
  il(r).splitAreaColors = null;
}
var HD = ["axisLine", "axisTickLabel", "axisName"], GD = ["splitArea", "splitLine", "minorSplitLine"], Ay = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new se(), this.group.add(this._axisGroup), !!e.get("show")) {
        var s = e.getCoordSysModel(), u = el(s, e), l = new Dy(e, O({
          handleAutoShown: function(h) {
            for (var c = s.coordinateSystem.getCartesians(), v = 0; v < c.length; v++)
              if (Ju(c[v].getOtherAxis(e.axis).scale))
                return !0;
            return !1;
          }
        }, u));
        T(HD, l.add, l), this._axisGroup.add(l.getGroup()), T(GD, function(h) {
          e.get([h, "show"]) && WD[h](this, this._axisGroup, e, s);
        }, this);
        var f = a && a.type === "changeAxisOrder" && a.isInitSort;
        f || Dp(o, this._axisGroup, e), r.prototype.render.call(this, e, i, n, a);
      }
    }, t.prototype.remove = function() {
      zD(this);
    }, t.type = "cartesianAxis", t;
  }(My)
), WD = {
  splitLine: function(r, t, e, i) {
    var n = e.axis;
    if (!n.scale.isBlank()) {
      var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color"), u = a.get("showMinLine") !== !1, l = a.get("showMaxLine") !== !1;
      s = N(s) ? s : [s];
      for (var f = i.coordinateSystem.getRect(), h = n.isHorizontal(), c = 0, v = n.getTicksCoords({
        tickModel: a
      }), d = [], y = [], p = o.getLineStyle(), g = 0; g < v.length; g++) {
        var m = n.toGlobalCoord(v[g].coord);
        if (!(g === 0 && !u || g === v.length - 1 && !l)) {
          var _ = v[g].tickValue;
          h ? (d[0] = m, d[1] = f.y, y[0] = m, y[1] = f.y + f.height) : (d[0] = f.x, d[1] = m, y[0] = f.x + f.width, y[1] = m);
          var w = c++ % s.length, S = new Vr({
            anid: _ != null ? "line_" + _ : null,
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
          En(S.shape, p.lineWidth), t.add(S);
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
          var p = new Vr({
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
          En(p.shape, c.lineWidth), t.add(p);
        }
  },
  splitArea: function(r, t, e, i) {
    VD(r, t, e, i);
  }
}, Ey = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  }(Ay)
), UD = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = Ey.type, e;
    }
    return t.type = "yAxis", t;
  }(Ay)
), YD = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, i) {
      this.group.removeAll(), e.get("show") && this.group.add(new yt({
        shape: e.coordinateSystem.getRect(),
        style: at({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  }(tr)
), Dv = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function $D(r) {
  r.registerComponentView(YD), r.registerComponentModel(hD), r.registerCoordinateSystem("cartesian2d", CD), gv(r, "x", ju, Dv), gv(r, "y", ju, Dv), r.registerComponentView(Ey), r.registerComponentView(UD), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var Mr = dt(), Mv = Q, tu = ft, XD = (
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
          var c = vt(Av, e, h);
          this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, e);
        }
        Lv(s, e, !0), this._renderHandle(a);
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
          var u = cf(t).seriesDataCount, l = n.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return i === !0;
    }, r.prototype.makeElOption = function(t, e, i, n, a) {
    }, r.prototype.createPointerEl = function(t, e, i, n) {
      var a = e.pointer;
      if (a) {
        var o = Mr(t).pointerEl = new Pw[a.type](Mv(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, i, n) {
      if (e.label) {
        var a = Mr(t).labelEl = new ue(Mv(e.label));
        t.add(a), Ev(a, n);
      }
    }, r.prototype.updatePointerEl = function(t, e, i) {
      var n = Mr(t).pointerEl;
      n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, i, n) {
      var a = Mr(t).labelEl;
      a && (a.setStyle(e.label.style), i(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), Ev(a, n));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          n && i.remove(n), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, n = this._handle = kl(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            ed(l.event);
          },
          onmousedown: tu(this._onHandleDragMove, this, 0, 0),
          drift: tu(this._onHandleDragMove, this),
          ondragend: tu(this._onHandleDragEnd, this)
        }), i.add(n)), Lv(n, e, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        N(u) || (u = [u, u]), n.scaleX = u[0] / 2, n.scaleY = u[1] / 2, mg(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      Av(this._axisPointerModel, !e && this._moveAnimation, this._handle, eu(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var i = this._handle;
      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform(eu(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr(eu(n)), Mr(i).lastProp = null, this._doDispatchAxisPointer();
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
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), Gu(this, "_doDispatchAxisPointer");
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
function Av(r, t, e, i) {
  Ly(Mr(e).lastProp, i) || (Mr(e).lastProp = i, t ? Ne(e, i, r) : (e.stopAnimation(), e.attr(i)));
}
function Ly(r, t) {
  if (V(r) && V(t)) {
    var e = !0;
    return T(t, function(i, n) {
      e = e && Ly(r[n], i);
    }), !!e;
  } else
    return r === t;
}
function Ev(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function eu(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function Lv(r, t, e) {
  var i = t.get("z"), n = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = e);
  });
}
const ZD = XD;
function qD(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), i;
  return t === "line" ? (i = e.getLineStyle(), i.fill = null) : t === "shadow" && (i = e.getAreaStyle(), i.stroke = null), i;
}
function KD(r, t, e, i, n) {
  var a = e.get("value"), o = Py(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), u = Po(s.get("padding") || 0), l = s.getFont(), f = wl(o, l), h = n.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = n.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var y = n.verticalAlign;
  y === "bottom" && (h[1] -= v), y === "middle" && (h[1] -= v / 2), QD(h, c, v, i);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: Ti(s, {
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
function QD(r, t, e, i) {
  var n = i.getWidth(), a = i.getHeight();
  r[0] = Math.min(r[0] + t, n) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function Py(r, t, e, i, n) {
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
      value: lf(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    T(i, function(u) {
      var l = e.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), F(o) ? a = o.replace("{value}", a) : U(o) && (a = o(s));
  }
  return a;
}
function Iy(r, t, e) {
  var i = di();
  return pl(i, i, e.rotation), fu(i, i, e.position), Nl([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], i);
}
function JD(r, t, e, i, n, a) {
  var o = Dy.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = n.get(["label", "margin"]), KD(t, i, n, a, {
    position: Iy(i.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function jD(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function tM(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
var eM = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, i, n, a, o) {
      var s = n.axis, u = s.grid, l = a.get("type"), f = Pv(u, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(i, !0));
      if (l && l !== "none") {
        var c = qD(a), v = rM[l](s, h, f);
        v.style = c, e.graphicKey = v.type, e.pointer = v;
      }
      var d = el(u.model, n);
      JD(
        // @ts-ignore
        i,
        e,
        d,
        n,
        a,
        o
      );
    }, t.prototype.getHandleTransform = function(e, i, n) {
      var a = el(i.axis.grid.model, i, {
        labelInside: !1
      });
      a.labelMargin = n.get(["handle", "margin"]);
      var o = Iy(i.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, i, n, a) {
      var o = n.axis, s = o.grid, u = o.getGlobalExtent(!0), l = Pv(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
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
  }(ZD)
);
function Pv(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var rM = {
  line: function(r, t, e) {
    var i = jD([t, e[0]], [t, e[1]], Iv(r));
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
      shape: tM([t - i / 2, e[0]], [i, n], Iv(r))
    };
  }
};
function Iv(r) {
  return r.dim === "x" ? 0 : 1;
}
const iM = eM;
var nM = (
  /** @class */
  function(r) {
    k(t, r);
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
const aM = nM;
var Pe = dt(), oM = T;
function Ry(r, t, e) {
  if (!$.node) {
    var i = t.getZr();
    Pe(i).records || (Pe(i).records = {}), sM(i, t);
    var n = Pe(i).records[r] || (Pe(i).records[r] = {});
    n.handler = e;
  }
}
function sM(r, t) {
  if (Pe(r).initialized)
    return;
  Pe(r).initialized = !0, e("click", vt(Rv, "click")), e("mousemove", vt(Rv, "mousemove")), e("globalout", lM);
  function e(i, n) {
    r.on(i, function(a) {
      var o = fM(t);
      oM(Pe(r).records, function(s) {
        s && n(s, a, o.dispatchAction);
      }), uM(o.pendings, t);
    });
  }
}
function uM(r, t) {
  var e = r.showTip.length, i = r.hideTip.length, n;
  e ? n = r.showTip[e - 1] : i && (n = r.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n));
}
function lM(r, t, e) {
  r.handler("leave", null, e);
}
function Rv(r, t, e, i) {
  t.handler(r, e, i);
}
function fM(r) {
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
function nl(r, t) {
  if (!$.node) {
    var e = t.getZr(), i = (Pe(e).records || {})[r];
    i && (Pe(e).records[r] = null);
  }
}
var hM = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n) {
      var a = i.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
      Ry("axisPointer", n, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, t.prototype.remove = function(e, i) {
      nl("axisPointer", i);
    }, t.prototype.dispose = function(e, i) {
      nl("axisPointer", i);
    }, t.type = "axisPointer", t;
  }(tr)
);
const cM = hM;
function Oy(r, t) {
  var e = [], i = r.seriesIndex, n;
  if (i == null || !(n = t.getSeriesByIndex(i)))
    return {
      point: []
    };
  var a = n.getData(), o = Hn(a, r);
  if (o == null || o < 0 || N(o))
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
      e = u.dataToPoint(a.getValues(H(u.dimensions, function(g) {
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
var Ov = dt();
function vM(r, t, e) {
  var i = r.currTrigger, n = [r.x, r.y], a = r, o = r.dispatchAction || ft(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Ga(n) && (n = Oy({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var u = Ga(n), l = a.axesInfo, f = s.axesInfo, h = i === "leave" || Ga(n), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, y = {
      showPointer: vt(pM, v),
      showTooltip: vt(gM, d)
    };
    T(s.coordSysMap, function(g, m) {
      var _ = u || g.containPoint(n);
      T(s.coordSysAxesInfo[m], function(w, S) {
        var x = w.axis, b = wM(l, w);
        if (!h && _ && (!l || b)) {
          var D = b && b.value;
          D == null && !u && (D = x.pointToData(n)), D != null && Nv(w, D, y, !1, c);
        }
      });
    });
    var p = {};
    return T(f, function(g, m) {
      var _ = g.linkGroup;
      _ && !v[m] && T(_.axesInfo, function(w, S) {
        var x = v[S];
        if (w !== g && x) {
          var b = x.value;
          _.mapper && (b = g.axis.scale.parse(_.mapper(b, kv(w), kv(g)))), p[g.key] = b;
        }
      });
    }), T(p, function(g, m) {
      Nv(f[m], g, y, !0, c);
    }), yM(v, f, c), mM(d, n, r, o), _M(f, o, e), c;
  }
}
function Nv(r, t, e, i, n) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = dM(t, r), s = o.payloadBatch, u = o.snapToValue;
    s[0] && n.seriesIndex == null && O(n, s[0]), !i && r.snap && a.containData(u) && u != null && (t = u), e.showPointer(r, t, s), e.showTooltip(r, o, u);
  }
}
function dM(r, t) {
  var e = t.axis, i = e.dim, n = r, a = [], o = Number.MAX_VALUE, s = -1;
  return T(t.seriesModels, function(u, l) {
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
      y <= o && ((y < o || d >= 0 && s < 0) && (o = y, s = d, n = h, a.length = 0), T(c, function(p) {
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
function pM(r, t, e, i) {
  r[t.key] = {
    value: e,
    payloadBatch: i
  };
}
function gM(r, t, e, i) {
  var n = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var u = t.coordSys.model, l = Fn(u), f = r.map[l];
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
function yM(r, t, e) {
  var i = e.axesInfo = [];
  T(t, function(n, a) {
    var o = n.axisPointerModel.option, s = r[a];
    s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
      axisDim: n.axis.dim,
      axisIndex: n.axis.model.componentIndex,
      value: o.value
    });
  });
}
function mM(r, t, e, i) {
  if (Ga(t) || !r.list.length) {
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
function _M(r, t, e) {
  var i = e.getZr(), n = "axisPointerLastHighlights", a = Ov(i)[n] || {}, o = Ov(i)[n] = {};
  T(r, function(l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" && l.triggerEmphasis && T(h.seriesDataIndices, function(c) {
      var v = c.seriesIndex + " | " + c.dataIndex;
      o[v] = c;
    });
  });
  var s = [], u = [];
  T(a, function(l, f) {
    !o[f] && u.push(l);
  }), T(o, function(l, f) {
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
function wM(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var i = r[e];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function kv(r) {
  var t = r.axis.model, e = {}, i = e.axisDim = r.axis.dim;
  return e.axisIndex = e[i + "AxisIndex"] = t.componentIndex, e.axisName = e[i + "AxisName"] = t.name, e.axisId = e[i + "AxisId"] = t.id, e;
}
function Ga(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function Ny(r) {
  My.registerAxisPointerClass("CartesianAxisPointer", iM), r.registerComponentModel(aM), r.registerComponentView(cM), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !N(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = PD(t, e);
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, vM);
}
function SM(r) {
  er($D), er(Ny);
}
function xM(r, t) {
  var e = Po(t.get("padding")), i = t.getItemStyle(["color", "opacity"]);
  return i.fill = t.get("backgroundColor"), r = new yt({
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
var bM = (
  /** @class */
  function(r) {
    k(t, r);
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
const TM = bM;
function ky(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function By(r) {
  if ($.domSupported) {
    for (var t = document.documentElement.style, e = 0, i = r.length; e < i; e++)
      if (r[e] in t)
        return r[e];
  }
}
var Fy = By(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), CM = By(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function Vy(r, t) {
  if (!r)
    return t;
  t = Wp(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function DM(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? t ? e[t] : e : null;
}
var MM = Vy(CM, "transition"), vf = Vy(Fy, "transform"), AM = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + ($.transform3dSupported ? "will-change:transform;" : "");
function EM(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function LM(r, t, e) {
  if (!F(e) || e === "inside")
    return "";
  var i = r.get("backgroundColor"), n = r.get("borderWidth");
  t = Pn(t);
  var a = EM(e), o = Math.max(Math.round(n) * 1.5, 6), s = "", u = vf + ":", l;
  it(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + n, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + n + "px;", y = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
  return '<div style="' + y.join("") + '"></div>';
}
function PM(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)", i = " " + r / 2 + "s " + e, n = "opacity" + i + ",visibility" + i;
  return t || (i = " " + r + "s " + e, n += $.transformSupported ? "," + vf + i : ",left" + i + ",top" + i), MM + ":" + n;
}
function Bv(r, t, e) {
  var i = r.toFixed(0) + "px", n = t.toFixed(0) + "px";
  if (!$.transformSupported)
    return e ? "top:" + n + ";left:" + i + ";" : [["top", n], ["left", i]];
  var a = $.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + vf + ":" + o + ";" : [["top", 0], ["left", 0], [Fy, o]];
}
function IM(r) {
  var t = [], e = r.get("fontSize"), i = r.getTextColor();
  i && t.push("color:" + i), t.push("font:" + r.getFont());
  var n = X(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + n + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, u = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), T(["decoration", "align"], function(l) {
    var f = r.get(l);
    f && t.push("text-" + l + ":" + f);
  }), t.join(";");
}
function RM(r, t, e) {
  var i = [], n = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), u = r.get("shadowOffsetX"), l = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = pg(r, "html"), c = u + "px " + l + "px " + o + "px " + s;
  return i.push("box-shadow:" + c), t && n && i.push(PM(n, e)), a && i.push("background-color:" + a), T(["width", "color", "radius"], function(v) {
    var d = "border-" + v, y = Wp(d), p = r.get(y);
    p != null && i.push(d + ":" + p + (v === "color" ? "" : "px"));
  }), i.push(IM(f)), h != null && i.push("padding:" + Po(h).join("px ") + "px"), i.join(";") + ";";
}
function Fv(r, t, e, i, n) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && Mm(r, o, e, i, n);
  } else {
    r[0] = i, r[1] = n;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var OM = (
  /** @class */
  function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, $.wxa)
        return null;
      var i = document.createElement("div");
      i.domBelongToZr = !0, this.el = i;
      var n = this._zr = t.getZr(), a = e.appendTo, o = a && (F(a) ? document.querySelector(a) : Tn(a) ? a : U(a) && a(t.getDom()));
      Fv(this._styleCoord, n, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(i), this._api = t, this._container = o;
      var s = this;
      i.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, i.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = n.handler, f = n.painter.getViewportRoot();
          jt(f, u, !0), l.dispatch("mousemove", u);
        }
      }, i.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), i = DM(e, "position"), n = e.style;
        n.position !== "absolute" && i !== "absolute" && (n.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var i = this.el, n = i.style, a = this._styleCoord;
      i.innerHTML ? n.cssText = AM + RM(t, !this._firstShow, this._longHide) + Bv(a[0], a[1], !0) + ("border-color:" + Pn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (F(a) && i.get("trigger") === "item" && !ky(i) && (s = LM(i, n, a)), F(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", N(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          Tn(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
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
        if (Fv(i, this._zr, this._container, t, e), i[0] != null && i[1] != null) {
          var n = this.el.style, a = Bv(i[0], i[1]);
          T(a, function(o) {
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
const NM = OM;
var kM = (
  /** @class */
  function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), zv(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this;
      V(t) && Ft(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
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
          padding: pg(i, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: i.get("z")
      }), T(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = i.get(l);
      }), T(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
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
      var t = this.el, e = this.el.getBoundingRect(), i = Vv(t.style);
      return [e.width + i.left + i.right, e.height + i.top + i.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var i = this.el;
      if (i) {
        var n = this._styleCoord;
        zv(n, this._zr, t, e), t = n[0], e = n[1];
        var a = i.style, o = Ze(a.borderWidth || 0), s = Vv(a);
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
function Ze(r) {
  return Math.max(0, r);
}
function Vv(r) {
  var t = Ze(r.shadowBlur || 0), e = Ze(r.shadowOffsetX || 0), i = Ze(r.shadowOffsetY || 0);
  return {
    left: Ze(t - e),
    right: Ze(t + e),
    top: Ze(t - i),
    bottom: Ze(t + i)
  };
}
function zv(r, t, e, i) {
  r[0] = e, r[1] = i, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
const BM = kM;
var FM = new yt({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), VM = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, i) {
      if (!($.node || !i.getDom())) {
        var n = e.getComponent("tooltip"), a = this._renderMode = u0(n.get("renderMode"));
        this._tooltipContent = a === "richText" ? new BM(i) : new NM(i, {
          appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, i, n) {
      if (!($.node || !n.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = i, this._api = n;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? mg(this, "_updatePosition", 50, "fixRate") : Gu(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, i = e.get("triggerOn");
      Ry("itemTooltip", this._api, ft(function(n, a, o) {
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
        var o = Hv(a, n);
        this._ticket = "";
        var s = a.dataByCoordSys, u = WM(a, i, n);
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
          var f = FM;
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
          var h = Oy(a, i), c = h.point[0], v = h.point[1];
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
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(Hv(a, n));
    }, t.prototype._manuallyAxisShowTip = function(e, i, n, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = i.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = i.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = en([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
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
          hn(n, function(f) {
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
      var n = this._ecModel, a = this._tooltipModel, o = [i.offsetX, i.offsetY], s = en([i.tooltipOption], a), u = this._renderMode, l = [], f = On("section", {
        blocks: [],
        noHeader: !0
      }), h = [], c = new Os();
      T(e, function(m) {
        T(m.dataByAxis, function(_) {
          var w = n.getComponent(_.axisDim + "Axis", _.axisIndex), S = _.value;
          if (!(!w || S == null)) {
            var x = Py(S, w.axis, n, _.seriesDataIndices, _.valueLabelOpt), b = On("section", {
              header: x,
              noHeader: !Se(x),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(b), T(_.seriesDataIndices, function(D) {
              var M = n.getSeriesByIndex(D.seriesIndex), A = D.dataIndexInside, C = M.getDataParams(A);
              if (!(C.dataIndex < 0)) {
                C.axisDim = _.axisDim, C.axisIndex = _.axisIndex, C.axisType = _.axisType, C.axisId = _.axisId, C.axisValue = lf(w.axis, {
                  value: S
                }), C.axisValueLabel = x, C.marker = c.makeTooltipMarker("item", Pn(C.color), u);
                var E = lc(M.formatTooltip(A, !0, null)), L = E.frag;
                if (L) {
                  var P = en([M], a).get("valueFormatter");
                  b.blocks.push(P ? O({
                    valueFormatter: P
                  }, L) : L);
                }
                E.text && h.push(E.text), l.push(C);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var v = i.position, d = s.get("order"), y = dc(f, c, u, d, n.get("useUTC"), s.get("textStyle"));
      y && h.unshift(y);
      var p = u === "richText" ? `

` : "<br/>", g = h.join(p);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, g, l, Math.random() + "", o[0], o[1], v, null, c);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, i, n) {
      var a = this._ecModel, o = st(i), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = e.positionDefault, y = en([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), p = y.get("trigger");
      if (!(p != null && p !== "item")) {
        var g = l.getDataParams(f, h), m = new Os();
        g.marker = m.makeTooltipMarker("item", Pn(g.color), v);
        var _ = lc(l.formatTooltip(f, !1, h)), w = y.get("order"), S = y.get("valueFormatter"), x = _.frag, b = x ? dc(S ? O({
          valueFormatter: S
        }, x) : x, m, v, w, a.get("useUTC"), y.get("textStyle")) : _.text, D = "item_" + l.name + "_" + f;
        this._showOrMove(y, function() {
          this._showTooltipContent(y, b, g, D, e.offsetX, e.offsetY, e.position, e.target, m);
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
      l && a && u.content && (u = Q(u), u.content = kt(u.content));
      var h = [u], c = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      c && h.push(c), h.push({
        formatter: u.content
      });
      var v = e.positionDefault, d = en(h, this._tooltipModel, v ? {
        position: v
      } : null), y = d.get("content"), p = Math.random() + "", g = new Os();
      this._showOrMove(d, function() {
        var m = Q(d.get("formatterParams") || {});
        this._showTooltipContent(d, y, m, p, e.offsetX, e.offsetY, e.position, i, g);
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
            var p = e.ecModel.get("useUTC"), g = N(n) ? n[0] : n, m = g && g.axisType && g.axisType.indexOf("time") >= 0;
            v = c, m && (v = Do(g.axisValue, v, p)), v = Up(v, n, !0);
          } else if (U(c)) {
            var _ = ft(function(w, S) {
              w === this._ticket && (h.setContent(S, f, e, y, u), this._updatePosition(e, u, o, s, h, n, l));
            }, this);
            this._ticket = a, v = c(n, a, _);
          } else
            v = c;
        h.setContent(v, f, e, y, u), h.show(e, y), this._updatePosition(e, u, o, s, h, n, l);
      }
    }, t.prototype._getNearestPoint = function(e, i, n, a) {
      if (n === "axis" || N(i))
        return {
          color: a || (this._renderMode === "html" ? "#fff" : "none")
        };
      if (!N(i))
        return {
          color: a || i.color || i.borderColor
        };
    }, t.prototype._updatePosition = function(e, i, n, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      i = i || e.get("position");
      var h = o.getSize(), c = e.get("align"), v = e.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), U(i) && (i = i([n, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), N(i))
        n = Pt(i[0], l), a = Pt(i[1], f);
      else if (V(i)) {
        var y = i;
        y.width = h[0], y.height = h[1];
        var p = io(y, {
          width: l,
          height: f
        });
        n = p.x, a = p.y, c = null, v = null;
      } else if (F(i) && u) {
        var g = GM(i, d, h, e.get("borderWidth"));
        n = g[0], a = g[1];
      } else {
        var g = zM(n, a, o, l, f, c ? null : 20, v ? null : 20);
        n = g[0], a = g[1];
      }
      if (c && (n -= Gv(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= Gv(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), ky(e)) {
        var g = HM(n, a, o, l, f);
        n = g[0], a = g[1];
      }
      o.moveTo(n, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, i) {
      var n = this._lastDataByCoordSys, a = this._cbParamsList, o = !!n && n.length === e.length;
      return o && T(n, function(s, u) {
        var l = s.dataByAxis || [], f = e[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && T(l, function(c, v) {
          var d = h[v] || {}, y = c.seriesDataIndices || [], p = d.seriesDataIndices || [];
          o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && y.length === p.length, o && T(y, function(g, m) {
            var _ = p[m];
            o = o && g.seriesIndex === _.seriesIndex && g.dataIndex === _.dataIndex;
          }), a && T(c.seriesDataIndices, function(g) {
            var m = g.seriesIndex, _ = i[m], w = a[m];
            _ && w && w.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = i, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, i) {
      $.node || !i.getDom() || (Gu(this, "_updatePosition"), this._tooltipContent.dispose(), nl("itemTooltip", i));
    }, t.type = "tooltip", t;
  }(tr)
);
function en(r, t, e) {
  var i = t.ecModel, n;
  e ? (n = new Mt(e, i, i), n = new Mt(t.option, n, i)) : n = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof Mt && (o = o.get("tooltip", !0)), F(o) && (o = {
      formatter: o
    }), o && (n = new Mt(o, n, i)));
  }
  return n;
}
function Hv(r, t) {
  return r.dispatchAction || ft(t.dispatchAction, t);
}
function zM(r, t, e, i, n, a, o) {
  var s = e.getSize(), u = s[0], l = s[1];
  return a != null && (r + u + a + 2 > i ? r -= u + a : r += a), o != null && (t + l + o > n ? t -= l + o : t += o), [r, t];
}
function HM(r, t, e, i, n) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, i) - o, t = Math.min(t + s, n) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function GM(r, t, e, i) {
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
function Gv(r) {
  return r === "center" || r === "middle";
}
function WM(r, t, e) {
  var i = Tl(r).queryOptionMap, n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = Gn(t, n, i.get(n), {
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
const UM = VM;
function YM(r) {
  er(Ny), r.registerComponentModel(TM), r.registerComponentView(UM), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, zt), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, zt);
}
var $M = function(r, t) {
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
}, XM = (
  /** @class */
  function(r) {
    k(t, r);
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
      i === !0 && (i = e.selector = ["all", "inverse"]), N(i) && T(i, function(a, o) {
        F(a) && (a = {
          type: a
        }), i[o] = tt(a, $M(n, a.type));
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
        f && bl(u) && i.push(u.name);
      }), this._availableNames = n;
      var a = this.get("data") || i, o = q(), s = H(a, function(u) {
        return (F(u) || ht(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new Mt(u, this, this.ecModel));
      }, this);
      this._data = wt(s, function(u) {
        return !!u;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var i = this.option.selected, n = this.get("selectedMode");
      if (n === "single") {
        var a = this._data;
        T(a, function(o) {
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
      T(e, function(n) {
        i[n.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, i = this.option.selected;
      T(e, function(n) {
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
const al = XM;
var ai = vt, ol = T, Ea = se, ZM = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new Ea()), this.group.add(this._selectorGroup = new Ea()), this._isFirstRender = !0;
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
        }, c = e.get("padding"), v = io(f, h, c), d = this.layoutInner(e, o, v, a, u, l), y = io(at({
          width: d.width,
          height: d.height
        }, f), h, c);
        this.group.x = y.x - d.x, this.group.y = y.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = xM(d, e));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, i, n, a, o, s, u) {
      var l = this.getContentGroup(), f = q(), h = i.get("selectedMode"), c = [];
      n.eachRawSeries(function(v) {
        !v.get("legendHoverLink") && c.push(v.id);
      }), ol(i.getData(), function(v, d) {
        var y = v.get("name");
        if (!this.newlineDisabled && (y === "" || y === `
`)) {
          var p = new Ea();
          p.newline = !0, l.add(p);
          return;
        }
        var g = n.getSeriesByName(y)[0];
        if (!f.get(y)) {
          if (g) {
            var m = g.getData(), _ = m.getVisual("legendLineStyle") || {}, w = m.getVisual("legendIcon"), S = m.getVisual("style"), x = this._createItem(g, y, d, v, i, e, _, S, w, h, a);
            x.on("click", ai(Wv, y, null, a, c)).on("mouseover", ai(sl, g.name, null, a, c)).on("mouseout", ai(ul, g.name, null, a, c)), n.ssr && x.eachChild(function(b) {
              var D = st(b);
              D.seriesIndex = g.seriesIndex, D.dataIndex = d, D.ssrType = "legend";
            }), f.set(y, !0);
          } else
            n.eachRawSeries(function(b) {
              if (!f.get(y) && b.legendVisualProvider) {
                var D = b.legendVisualProvider;
                if (!D.containName(y))
                  return;
                var M = D.indexOfName(y), A = D.getItemVisual(M, "style"), C = D.getItemVisual(M, "legendIcon"), E = Ir(A.fill);
                E && E[3] === 0 && (E[3] = 0.2, A = O(O({}, A), {
                  fill: yl(E, "rgba")
                }));
                var L = this._createItem(b, y, d, v, i, e, {}, A, C, h, a);
                L.on("click", ai(Wv, null, y, a, c)).on("mouseover", ai(sl, null, y, a, c)).on("mouseout", ai(ul, null, y, a, c)), n.ssr && L.eachChild(function(P) {
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
      ol(e, function(l) {
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
        Ap(h, {
          normal: c,
          emphasis: v
        }, {
          defaultText: l.title
        }), Lu(h);
      });
    }, t.prototype._createItem = function(e, i, n, a, o, s, u, l, f, h, c) {
      var v = e.visualDrawType, d = o.get("itemWidth"), y = o.get("itemHeight"), p = o.isSelected(i), g = a.get("symbolRotate"), m = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var w = qM(f, a, u, l, v, p, c), S = new Ea(), x = a.getModel("textStyle");
      if (U(e.getLegendIcon) && (!_ || _ === "inherit"))
        S.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: g,
          itemStyle: w.itemStyle,
          lineStyle: w.lineStyle,
          symbolKeepAspect: m
        }));
      else {
        var b = _ === "inherit" && e.getData().getVisual("symbol") ? g === "inherit" ? e.getData().getVisual("symbolRotate") : g : 0;
        S.add(KM({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: b,
          itemStyle: w.itemStyle,
          lineStyle: w.lineStyle,
          symbolKeepAspect: m
        }));
      }
      var D = s === "left" ? d + 5 : -5, M = s, A = o.get("formatter"), C = i;
      F(A) && A ? C = A.replace("{name}", i ?? "") : U(A) && (C = A(i));
      var E = p ? x.getTextColor() : a.get("inactiveColor");
      S.add(new ue({
        style: Ti(x, {
          text: C,
          x: D,
          y: y / 2,
          fill: E,
          align: M,
          verticalAlign: "middle"
        }, {
          inheritColor: E
        })
      }));
      var L = new yt({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && bo({
        el: L,
        componentModel: o,
        itemName: i,
        itemTooltipOption: P.option
      }), S.add(L), S.eachChild(function(I) {
        I.silent = !0;
      }), L.silent = !h, this.getContentGroup().add(S), Lu(S), S.__legendDataIndex = n, S;
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      Sn(e.get("orient"), u, e.get("itemGap"), n.width, n.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        Sn(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var c = l.getBoundingRect(), v = [-c.x, -c.y], d = e.get("selectorButtonGap", !0), y = e.getOrient().index, p = y === 0 ? "width" : "height", g = y === 0 ? "height" : "width", m = y === 0 ? "y" : "x";
        s === "end" ? v[y] += f[p] + d : h[y] += c[p] + d, v[1 - y] += f[g] / 2 - c[g] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[p] = f[p] + d + c[p], _[g] = Math.max(f[g], c[g]), _[m] = Math.min(0, c[m] + v[1 - y]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  }(tr)
);
function qM(r, t, e, i, n, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0), ol(p, function(m, _) {
      p[_] === "inherit" && (p[_] = g[_]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? i.decal : Xu(h, o), l.fill === "inherit" && (l.fill = i[n]), l.stroke === "inherit" && (l.stroke = i[f]), l.opacity === "inherit" && (l.opacity = (n === "fill" ? i : e).opacity), s(l, i);
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
function KM(r) {
  var t = r.icon || "roundRect", e = tf(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function Wv(r, t, e, i) {
  ul(r, t, e, i), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), sl(r, t, e, i);
}
function zy(r) {
  for (var t = r.getZr().storage.getDisplayList(), e, i = 0, n = t.length; i < n && !(e = t[i].states.emphasis); )
    i++;
  return e && e.hoverLayer;
}
function sl(r, t, e, i) {
  zy(e) || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function ul(r, t, e, i) {
  zy(e) || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
const Hy = ZM;
function QM(r) {
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
function rn(r, t, e) {
  var i = r === "allSelect" || r === "inverseSelect", n = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    i ? s[r]() : s[r](t.name), Uv(s, n), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    T(n, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), Uv(s, o);
  }), i ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Uv(r, t) {
  var e = t || {};
  return T(r.getData(), function(i) {
    var n = i.get("name");
    if (!(n === `
` || n === "")) {
      var a = r.isSelected(n);
      Fr(e, n) ? e[n] = e[n] && a : e[n] = a;
    }
  }), e;
}
function JM(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", vt(rn, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", vt(rn, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", vt(rn, "inverseSelect")), r.registerAction("legendSelect", "legendselected", vt(rn, "select")), r.registerAction("legendUnSelect", "legendunselected", vt(rn, "unSelect"));
}
function Gy(r) {
  r.registerComponentModel(al), r.registerComponentView(Hy), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, QM), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), JM(r);
}
var jM = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, i, n) {
      var a = Io(e);
      r.prototype.init.call(this, e, i, n), Yv(this, e, a);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), Yv(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = Pp(al.defaultOption, {
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
  }(al)
);
function Yv(r, t, e) {
  var i = r.getOrient(), n = [1, 1];
  n[i.index] = 0, Ci(t, e, {
    type: "box",
    ignoreSize: !!n
  });
}
const tA = jM;
var $v = se, ru = ["width", "height"], iu = ["x", "y"], eA = (
  /** @class */
  function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new $v()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new $v());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, i, n, a, o, s, u) {
      var l = this;
      r.prototype.renderInner.call(this, e, i, n, a, o, s, u);
      var f = this._controllerGroup, h = i.get("pageIconSize", !0), c = N(h) ? h : [h, h];
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
        var g = y + "DataIndex", m = kl(i.get("pageIcons", !0)[i.getOrient().name][p], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: ft(l._pageGo, l, g, i, a)
        }, {
          x: -c[0] / 2,
          y: -c[1] / 2,
          width: c[0],
          height: c[1]
        });
        m.name = y, f.add(m);
      }
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var u = this.getSelectorGroup(), l = e.getOrient().index, f = ru[l], h = iu[l], c = ru[1 - l], v = iu[1 - l];
      o && Sn(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), y = u.getBoundingRect(), p = [-y.x, -y.y], g = Q(n);
      o && (g[f] = n[f] - y[f] - d);
      var m = this._layoutContentAndController(e, a, g, l, f, c, v, h);
      if (o) {
        if (s === "end")
          p[l] += m[f] + d;
        else {
          var _ = y[f] + d;
          p[l] -= _, m[h] -= _;
        }
        m[f] += y[f] + d, p[1 - l] += m[v] + m[c] / 2 - y[c] / 2, m[c] = Math.max(m[c], y[c]), m[v] = Math.min(m[v], y[v] + p[1 - l]), u.x = p[0], u.y = p[1], u.markRedraw();
      }
      return m;
    }, t.prototype._layoutContentAndController = function(e, i, n, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
      Sn(e.get("orient"), f, e.get("itemGap"), a ? n.width : null, a ? null : n.height), Sn(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        c,
        e.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = c.getBoundingRect(), y = this._showController = v[o] > n[o], p = [-v.x, -v.y];
      i || (p[a] = f[l]);
      var g = [0, 0], m = [-d.x, -d.y], _ = X(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (y) {
        var w = e.get("pageButtonPosition", !0);
        w === "end" ? m[a] += n[o] - d[o] : g[a] += d[o] + _;
      }
      m[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(g), c.setPosition(m);
      var S = {
        x: 0,
        y: 0
      };
      if (S[o] = y ? n[o] : v[o], S[s] = Math.max(v[s], d[s]), S[u] = Math.min(0, d[u] + m[1 - a]), h.__rectSize = n[o], y) {
        var x = {
          x: 0,
          y: 0
        };
        x[o] = Math.max(n[o] - d[o] - _, 0), x[s] = S[s], h.setClipPath(new yt({
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
      return b.pageIndex != null && Ne(
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
      T(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", c = i[h] != null, v = n.childOfName(f);
        v && (v.setStyle("fill", c ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
      });
      var a = n.childOfName("pageText"), o = e.get("pageFormatter"), s = i.pageIndex, u = s != null ? s + 1 : 0, l = i.pageCount;
      a && o && a.setStyle("text", F(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, t.prototype._getPageInfo = function(e) {
      var i = e.get("scrollDataIndex", !0), n = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = ru[o], u = iu[o], l = this._findTargetItemIndex(i), f = n.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
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
      for (var p = l + 1, g = y, m = y, _ = null; p <= c; ++p)
        _ = w(f[p]), // Half of the last item is out of the window.
        (!_ && m.e > g.s + a || _ && !S(_, g.s)) && (m.i > g.i ? g = m : g = _, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), m = _;
      for (var p = l - 1, g = y, m = y, _ = null; p >= -1; --p)
        _ = w(f[p]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !S(m, _.s)) && g.i < m.i && (m = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = _;
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
  }(Hy)
);
const rA = eA;
function iA(r) {
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
function nA(r) {
  er(Gy), r.registerComponentModel(tA), r.registerComponentView(rA), iA(r);
}
function aA(r) {
  er(Gy), er(nA);
}
const uA = {
  __name: "wwElement",
  props: {
    content: { type: Object, default: () => ({}) }
  },
  setup(r) {
    er([kC, lD, SM, YM, aA]);
    const t = r, e = Wy(() => ({
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
    return (i, n) => (Uy(), Yy($y(Xy), {
      option: e.value,
      autoresize: "",
      style: { height: "100%", width: "100%", "min-height": "300px" }
    }, null, 8, ["option"]));
  }
};
export {
  uA as default
};
