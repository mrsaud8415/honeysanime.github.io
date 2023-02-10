/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n), r
                },
                set: function(e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function() {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function(e) {
            return e
        }, s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k), A
            },
            set: function(e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function(e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
var WPMLLanguageSwitcherDropdown = (function() {
    "use strict";
    var toggleSelector = '.js-wpml-ls-legacy-dropdown a.js-wpml-ls-item-toggle';
    var preventDefault = function(e) {
        var evt = e ? e : window.event;
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = false;
    };
    var init = function() {
        var links = document.querySelectorAll(toggleSelector);
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', preventDefault);
        }
    };
    return {
        'init': init
    };
})();
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    WPMLLanguageSwitcherDropdown.init();
});
var wpp_params = null,
    WordPressPopularPosts = function() {
        "use strict";
        var a = function() {},
            b = !!HTMLElement.prototype.attachShadow,
            c = function(a, b, c, d) {
                var e = new XMLHttpRequest,
                    f = c;
                a = -1 == ["GET", "POST"].indexOf(a) ? "GET" : a, e.open(a, b + ("GET" == a ? "?" + f : ""), !0), "POST" == a && e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.onreadystatechange = function() {
                    4 === e.readyState && 200 <= e.status && 300 > e.status && "function" == typeof d && d.call(void 0, e.response)
                }, e.send("POST" == a ? f : null)
            };
        return {
            get: function(b, d, e) {
                e = "function" == typeof e ? e : a, c("GET", b, d, e)
            },
            post: function(b, d, e) {
                e = "function" == typeof e ? e : a, c("POST", b, d, e)
            },
            ajax: c,
            theme: function(a) {
                if (b) {
                    let b = document.createElement("style"),
                        c = document.createElement("ul");
                    c.innerHTML = "<li><a href=\"#\"></a></li>", a.parentNode.appendChild(c);
                    let d = getComputedStyle(c.querySelector("li")),
                        e = getComputedStyle(c.querySelector("li a"));
                    b.innerHTML = ".wpp-list li {font-size: " + d.fontSize + "}", b.innerHTML += ".wpp-list li a {color: " + e.color + "}", a.parentNode.removeChild(c);
                    let f = a.attachShadow({
                        mode: "open"
                    });
                    for (f.append(b); a.firstElementChild;) f.append(a.firstElementChild)
                }
            }
        }
    }();
(function() {
    try {
        var a = document.querySelector("script#wpp-json"),
            b = !0;
        if (wpp_params = JSON.parse(a.textContent), wpp_params.ID) {
            if ("1" == wpp_params.sampling_active) {
                var c = Math.floor(Math.random() * wpp_params.sampling_rate) + 1;
                b = 1 === c
            }
            b && WordPressPopularPosts.post(wpp_params.ajax_url, "_wpnonce=" + wpp_params.token + "&wpp_id=" + wpp_params.ID + "&sampling=" + wpp_params.sampling_active + "&sampling_rate=" + wpp_params.sampling_rate, function(a) {
                wpp_params.debug && window.console && window.console.log && window.console.log(JSON.parse(a))
            })
        }
    } catch (a) {
        console.error("WPP: Couldn't read JSON data")
    }
})(), document.addEventListener("DOMContentLoaded", function() {
    function a(a) {
        WordPressPopularPosts.get(wpp_params.ajax_url + "/widget/" + a.getAttribute("data-widget-id").split("-")[1], "is_single=" + wpp_params.ID + (wpp_params.lang ? "&lang=" + wpp_params.lang : ""), function(b) {
            a.insertAdjacentHTML("afterend", JSON.parse(b).widget);
            let c = a.parentNode,
                d = c.querySelector(".popular-posts-sr");
            c.removeChild(a), d && WordPressPopularPosts.theme(d);
            let e = null;
            "function" == typeof Event ? e = new Event("wpp-onload", {
                bubbles: !0,
                cancelable: !1
            }) : document.createEvent && (e = document.createEvent("Event"), e.initEvent("wpp-onload", !0, !1)), e && c.dispatchEvent(e)
        })
    }
    var b = document.querySelectorAll(".wpp-widget-placeholder");
    if (b.length)
        for (var c = 0; c < b.length; c++) a(b[c]);
    else {
        var d = document.querySelectorAll(".popular-posts-sr");
        if (d.length)
            for (var e = 0; e < d.length; e++) WordPressPopularPosts.theme(d[e])
    }
});
jQuery(document).ready(function() {
    if (typeof(edButtons) !== 'undefined') {
        edButtons[110] = new QTags.TagButton('code', 'code', '`', '`', 'c');
        QTags._buttonsInit();
    }
    jQuery('#bbp_topic_title').bind('keydown.editor-focus', function(e) {
        if (e.which !== 9)
            return;
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
            if (typeof(tinymce) !== 'undefined') {
                if (!tinymce.activeEditor.isHidden()) {
                    var editor = tinymce.activeEditor.editorContainer;
                    jQuery('#' + editor + ' td.mceToolbar > a').focus();
                } else {
                    jQuery('textarea.bbp-the-content').focus();
                }
            } else {
                jQuery('textarea.bbp-the-content').focus();
            }
            e.preventDefault();
        }
    });
    jQuery('#bbp_topic_tags').bind('keydown.editor-focus', function(e) {
        if (e.which !== 9)
            return;
        if (e.shiftKey && !e.ctrlKey && !e.altKey) {
            if (typeof(tinymce) !== 'undefined') {
                if (!tinymce.activeEditor.isHidden()) {
                    var editor = tinymce.activeEditor.editorContainer;
                    jQuery('#' + editor + ' td.mceToolbar > a').focus();
                } else {
                    jQuery('textarea.bbp-the-content').focus();
                }
            } else {
                jQuery('textarea.bbp-the-content').focus();
            }
            e.preventDefault();
        }
    });
});
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
                f.resetForm()
            }), t.clearForm && x.push(function() {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
(function($) {
    'use strict';
    if (typeof _wpcf7 == 'undefined' || _wpcf7 === null) {
        return;
    }
    _wpcf7 = $.extend({
        cached: 0
    }, _wpcf7);
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: {
                '_wpcf7_is_ajax_call': 1
            },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    };
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).trigger('wpcf7:invalid');
            $(data.into).trigger('invalid.wpcf7');
        } else if (1 == data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if ('' == $(this).val()) {
                    var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            });
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).trigger('wpcf7:spam');
            $(data.into).trigger('spam.wpcf7');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            }
            $(data.into).trigger('wpcf7:mailsent');
            $(data.into).trigger('mailsent.wpcf7');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).trigger('wpcf7:mailfailed');
            $(data.into).trigger('mailfailed.wpcf7');
        }
        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        }
        $(data.into).trigger('wpcf7:submit');
        $(data.into).trigger('submit.wpcf7');
        if (1 == data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld'))
                    $(this).val('').removeClass('placeheld');
            });
            $(this).blur(function() {
                if ('' == $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        });
    };
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }
            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit = form.find('input:submit');
            if (!submit.length) return;
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) return;
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({
                    'z-index': -100
                });
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {
                _wpcf7_is_ajax_call: 1,
                _wpcf7: id,
                _wpcf7_request_ver: $.now()
            }, function(data) {
                if (data && data.captcha) {
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if (data && data.quiz) {
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                }
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        });
    };
    $.fn.wpcf7Recaptcha = function() {
        return this.each(function() {
            var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if (recaptchaWidgets && grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    });
                }
            });
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder' in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
})(jQuery);
var disqus_shortname = countVars.disqusShortname;
(function() {
    var nodes = document.getElementsByTagName('span');
    for (var i = 0, url; i < nodes.length; i++) {
        if (nodes[i].className.indexOf('dsq-postid') != -1 && nodes[i].parentNode.tagName == 'A') {
            nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
            url = nodes[i].parentNode.href.split('#', 1);
            if (url.length == 1) {
                url = url[0];
            } else {
                url = url[1];
            }
            nodes[i].parentNode.href = url + '#disqus_thread';
        }
    }
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = 'https://' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
! function(t, e, i, s) {
    "use strict";
    var n = "WordpressUlikeNotifications",
        a = {
            messageType: "success",
            messageText: "Hello World!",
            messageElement: "wpulike-message",
            notifContainer: "wpulike-notification"
        };

    function o(e, i) {
        this.element = e, this.$element = t(e), this.settings = t.extend({}, a, i), this._defaults = a, this._name = n, this.init()
    }
    t.extend(o.prototype, {
        init: function() {
            this._message(), this._container(), this._append(), this._remove()
        },
        _message: function() {
            this.$messageElement = t("<div/>").addClass(this.settings.messageElement + " wpulike-" + this.settings.messageType).text(this.settings.messageText)
        },
        _container: function() {
            t("." + this.settings.notifContainer).length || this.$element.append(t("<div/>").addClass(this.settings.notifContainer)), this.$notifContainer = this.$element.find("." + this.settings.notifContainer)
        },
        _append: function() {
            this.$notifContainer.append(this.$messageElement).trigger("WordpressUlikeNotificationAppend")
        },
        _remove: function() {
            var e = this;
            this.$messageElement.click(function() {
                t(this).fadeOut(300, function() {
                    t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove()
                }).trigger("WordpressUlikeRemoveNotification")
            }), setTimeout(function() {
                e.$messageElement.fadeOut(300, function() {
                    t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove()
                }).trigger("WordpressUlikeRemoveNotification")
            }, 8e3)
        }
    }), t.fn[n] = function(t) {
        return this.each(function() {
            new o(this, t)
        })
    }
}(jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = "WordpressUlike",
        a = (t(e), t(i)),
        o = {
            ID: 0,
            nonce: 0,
            type: "",
            likeStatus: 0,
            counterSelector: wp_ulike_params.counter_selector,
            generalSelector: wp_ulike_params.general_selector,
            buttonSelector: wp_ulike_params.button_selector
        },
        l = {
            "ulike-id": "ID",
            "ulike-nonce": "nonce",
            "ulike-type": "type",
            "ulike-status": "likeStatus"
        };

    function r(e, i) {
        for (var a in this.element = e, this.$element = t(e), this.settings = t.extend({}, o, i), this._defaults = o, this._name = n, this.buttonElement = this.$element.find(this.settings.buttonSelector), this.generalElement = this.$element.find(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector), l) {
            var r = this.buttonElement.data(a);
            r !== s && (this.settings[l[a]] = r)
        }
        this.init()
    }
    t.extend(r.prototype, {
        init: function() {
            this.buttonElement.click(this._ajaxify.bind(this))
        },
        _ajaxify: function() {
            t.ajax({
                type: "POST",
                cache: !1,
                dataType: "json",
                url: wp_ulike_params.ajax_url,
                data: {
                    action: "wp_ulike_process",
                    id: this.settings.ID,
                    nonce: this.settings.nonce,
                    status: this.settings.likeStatus,
                    type: this.settings.type
                },
                beforeSend: function() {
                    a.trigger("WordpressUlikeLoading"), this.generalElement.addClass("wp_ulike_is_loading")
                }.bind(this),
                success: function(t) {
                    this.generalElement.removeClass("wp_ulike_is_loading"), t.success ? this._update(t) : this._notif("error", t.data), a.trigger("WordpressUlikeUpdated")
                }.bind(this)
            })
        },
        _update: function(t) {
            switch (this.settings.likeStatus) {
                case 1:
                    this.buttonElement.attr("data-ulike-status", 4), this.settings.likeStatus = 4, this.generalElement.addClass("wp_ulike_is_liked").removeClass("wp_ulike_is_not_liked"), this.generalElement.children().first().addClass("wp_ulike_click_is_disabled"), this.counterElement.text(t.data.data), this._actions("success", t.data.message, t.data.btnText, 4);
                    break;
                case 2:
                    this.buttonElement.attr("data-ulike-status", 3), this.settings.likeStatus = 3, this.generalElement.addClass("wp_ulike_is_unliked").removeClass("wp_ulike_is_liked"), this.counterElement.text(t.data.data), this._actions("error", t.data.message, t.data.btnText, 3);
                    break;
                case 3:
                    this.buttonElement.attr("data-ulike-status", 2), this.settings.likeStatus = 2, this.generalElement.addClass("wp_ulike_is_liked").removeClass("wp_ulike_is_unliked"), this.counterElement.text(t.data.data), this._actions("success", t.data.message, t.data.btnText, 2);
                    break;
                case 4:
                    this._actions("info", t.data.message, t.data.btnText, 4), this.generalElement.children().first().addClass("wp_ulike_click_is_disabled");
                    break;
                default:
                    this._actions("warning", t.data.message, t.data.btnText, 0)
            }
        },
        _actions: function(t, e, i, s) {
            "image" === wp_ulike_params.button_type ? 3 !== s && 2 !== s || this.buttonElement.toggleClass("image-unlike") : "text" === wp_ulike_params.button_type && this.buttonElement.find("span").html(i), this._notif(t, e)
        },
        _notif: function(e, s) {
            "1" === wp_ulike_params.notifications && t(i.body).WordpressUlikeNotifications({
                messageType: e,
                messageText: s
            })
        }
    }), t.fn[n] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new r(this, e))
        })
    }
}(jQuery, window, document),
function(t) {
    t(function() {
        t(this).bind("DOMNodeInserted", function(e) {
            t(".wpulike").WordpressUlike()
        })
    }), t(".wpulike").WordpressUlike(), t("p").filter(function() {
        return "" == this.innerHTML
    }).remove()
}(jQuery);
/*! jQuery UI - v1.12.1 - 2020-09-25
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    var t, e, n, W, C, o, s, r, l, a, i, h;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function H(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    x.ui = x.ui || {}, x.ui.version = "1.12.1",
        /*!
         * jQuery UI :data 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
                return function(t) {
                    return !!x.data(t, e)
                }
            }) : function(t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
         * jQuery UI Disable Selection 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }), x.ui.escapeSelector = (e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
            return t.replace(e, "\\$1")
        }),
        /*!
         * jQuery UI Focusable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.focusable = function(t, e) {
            var i, n, o, s, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (0 < (n = x("img[usemap='#" + n + "']")).length && n.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (o = !t.disabled) && (s = x(t).closest("fieldset")[0]) && (o = !s.disabled) : o = "a" === r && t.href || e, o && x(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "hidden" !== e
            }(x(t)))
        }, x.extend(x.expr[":"], {
            focusable: function(t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }), x.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        },
        /*!
         * jQuery UI Form Reset Mixin 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = x(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element.form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
         * jQuery UI Support for jQuery core 1.7.x 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
        "1.7" === x.fn.jquery.substring(0, 3) && (x.each(["Width", "Height"], function(t, i) {
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                n = i.toLowerCase(),
                s = {
                    innerWidth: x.fn.innerWidth,
                    innerHeight: x.fn.innerHeight,
                    outerWidth: x.fn.outerWidth,
                    outerHeight: x.fn.outerHeight
                };

            function r(t, e, i, n) {
                return x.each(o, function() {
                    e -= parseFloat(x.css(t, "padding" + this)) || 0, i && (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(x.css(t, "margin" + this)) || 0)
                }), e
            }
            x.fn["inner" + i] = function(t) {
                return void 0 === t ? s["inner" + i].call(this) : this.each(function() {
                    x(this).css(n, r(this, t) + "px")
                })
            }, x.fn["outer" + i] = function(t, e) {
                return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                    x(this).css(n, r(this, t, !0, e) + "px")
                })
            }
        }), x.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }),
        /*!
         * jQuery UI Keycode 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
         * jQuery UI Labels 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.labels = function() {
            var t, e, i;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.ui.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e))
        }, x.ui.plugin = {
            add: function(t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
         * jQuery UI Position 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, i = x.fn.position, x.position = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var t, e = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = e.children()[0];
                return x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    i = x.isWindow(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, x.fn.position = function(f) {
            if (!f || !f.of) return i.apply(this, arguments);
            f = x.extend({}, f);
            var u, d, p, g, m, t, v = x(f.of),
                b = x.position.getWithinInfo(f.within),
                w = x.position.getScrollInfo(b),
                y = (f.collision || "flip").split(" "),
                _ = {},
                e = 9 === (t = (e = v)[0]).nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : x.isWindow(t) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : t.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: t.pageY,
                        left: t.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                };
            return v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, g = e.offset, m = x.extend({}, g), x.each(["my", "at"], function() {
                var t, e, i = (f[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
            }), 1 === y.length && (y[1] = y[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), u = E(_.at, d, p), m.left += u[0], m.top += u[1], this.each(function() {
                var i, t, r = x(this),
                    l = r.outerWidth(),
                    a = r.outerHeight(),
                    e = H(this, "marginLeft"),
                    n = H(this, "marginTop"),
                    o = l + e + H(this, "marginRight") + w.width,
                    s = a + n + H(this, "marginBottom") + w.height,
                    h = x.extend({}, m),
                    c = E(_.my, r.outerWidth(), r.outerHeight());
                "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += c[0], h.top += c[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[y[t]] && x.ui.position[y[t]][e](h, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: a,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: s,
                        offset: [u[0] + c[0], u[1] + c[1]],
                        my: f.my,
                        at: f.at,
                        within: b,
                        elem: r
                    })
                }), f.using && (t = function(t) {
                    var e = g.left - h.left,
                        i = e + d - l,
                        n = g.top - h.top,
                        o = n + p - a,
                        s = {
                            target: {
                                element: v,
                                left: g.left,
                                top: g.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: h.left,
                                top: h.top,
                                width: l,
                                height: a
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                    d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
                }), r.offset(x.extend(h, {
                    using: t
                }))
            })
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollLeft : i.offset.left,
                        o = i.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = n - s,
                        l = s + e.collisionWidth - o - n;
                    e.collisionWidth > o ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - o - n, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollTop : i.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        s = i.isWindow ? i.scrollLeft : i.offset.left,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = r - s,
                        a = r + e.collisionWidth - o - s,
                        h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        r = -2 * e.offset[0];
                    l < 0 ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 || n < C(l)) && (t.left += h + i + r) : 0 < a && (0 < (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) || C(s) < a) && (t.left += h + i + r)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        s = i.isWindow ? i.scrollTop : i.offset.top,
                        r = t.top - e.collisionPosition.marginTop,
                        l = r - s,
                        a = r + e.collisionHeight - o - s,
                        h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        r = -2 * e.offset[1];
                    l < 0 ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 || n < C(l)) && (t.top += h + i + r) : 0 < a && (0 < (s = t.top - e.collisionPosition.marginTop + h + i + r - s) || C(s) < a) && (t.top += h + i + r)
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, x.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = !(i = i || e.body).nodeName ? e.body : i
        }, x.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        },
        /*!
         * jQuery UI Scroll Parent 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
         * jQuery UI Tabbable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            tabbable: function(t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
         * jQuery UI Unique ID 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            uniqueId: (h = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++h)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var c, f = 0,
        u = Array.prototype.slice;
    x.cleanData = (c = x.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++) try {
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove")
        } catch (t) {}
        c(t)
    }), x.widget = function(t, i, e) {
        var n, o, s, r = {},
            l = t.split(".")[0],
            a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), x.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr[":"][a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            x.isFunction(n) ? r[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            } : r[e] = n
        }), o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function(t) {
        for (var e, i, n = u.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o]) i = n[o][e], n[o].hasOwnProperty(e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i,
                n = u.call(arguments, 1),
                o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? x.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("no such method '" + i + "' for " + s + " widget instance") : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function() {}, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = [],
                r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? x(x.unique(i.get().concat(o.element.get()))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o), this._on(o.element, {
                remove: "_untrackClassesElement"
            }), o.keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var o = "string" == typeof t || null === t,
                t = {
                    extra: o ? e : i,
                    keys: o ? t : e,
                    element: o ? this.element : t,
                    add: n
                };
            return t.element.toggleClass(this._classes(t), n), this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = n[1] + l.eventNamespace,
                    n = n[2];
                n ? r.on(t, n, i) : s.on(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !(x.isFunction(s) && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof(t = t || {}) && (t = {
                duration: t
            }), n = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
}(function(l) {
    var a;
    return l.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (a = /#.*$/, function(t) {
            var e = t.href.replace(a, ""),
                i = location.href.replace(a, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }),
        _create: function() {
            var e = this,
                t = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), l.isArray(t.disabled) && (t.disabled = l.unique(t.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = l(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                t = this.options.collapsible,
                a = location.hash.substring(1);
            return null === i && (a && this.tabs.each(function(t, e) {
                if (l(e).attr("aria-controls") === a) return i = t, !1
            }), null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), i = !t && !1 === i && this.anchors.length ? 0 : i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : l()
            }
        },
        _tabKeydown: function(t) {
            var e = l(l.ui.safeActiveElement(this.document[0])).closest("li"),
                i = this.tabs.index(e),
                a = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case l.ui.keyCode.RIGHT:
                    case l.ui.keyCode.DOWN:
                        i++;
                        break;
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.LEFT:
                        a = !1, i--;
                        break;
                    case l.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case l.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case l.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case l.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, a), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === l.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, e) {
            var i = this.tabs.length - 1;
            for (; - 1 !== l.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function(t, e) {
            "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                e = this.tablist.children(":has(a[href])");
            t.disabled = l.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !l.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = l()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = l()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var o = this,
                t = this.tabs,
                e = this.anchors,
                i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                l(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                l(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return l("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = l(), this.anchors.each(function(t, e) {
                var i, a, s, n = l(e).uniqueId().attr("id"),
                    h = l(e).closest("li"),
                    r = h.attr("aria-controls");
                o._isLocal(e) ? (s = (i = e.hash).substring(1), a = o.element.find(o._sanitizeSelector(i))) : (i = "#" + (s = h.attr("aria-controls") || l({}).uniqueId()[0].id), (a = o.element.find(i)).length || (a = o._createPanel(s)).insertAfter(o.panels[t - 1] || o.tablist), a.attr("aria-live", "polite")), a.length && (o.panels = o.panels.add(a)), r && h.data("ui-tabs-aria-controls", r), h.attr({
                    "aria-controls": s,
                    "aria-labelledby": n
                }), a.attr("aria-labelledby", n)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return l("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var e, i;
            for (l.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), i = 0; e = this.tabs[i]; i++) e = l(e), !0 === t || -1 !== l.inArray(i, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && l.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = l(this),
                    e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= l(this).outerHeight(!0)
            }), this.panels.each(function() {
                l(this).height(Math.max(0, i - l(this).innerHeight() + l(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, l(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options,
                i = this.active,
                a = l(t.currentTarget).closest("li"),
                s = a[0] === i[0],
                n = s && e.collapsible,
                h = n ? l() : this._getPanelForTab(a),
                r = i.length ? this._getPanelForTab(i) : l(),
                i = {
                    oldTab: i,
                    oldPanel: r,
                    newTab: n ? l() : a,
                    newPanel: h
                };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !n && this.tabs.index(a), this.active = s ? l() : a, this.xhr && this.xhr.abort(), r.length || h.length || l.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, i))
        },
        _toggle: function(t, e) {
            var i = this,
                a = e.newPanel,
                s = e.oldPanel;

            function n() {
                i.running = !1, i._trigger("activate", t, e)
            }

            function h() {
                i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && i.options.show ? i._show(a, i.options.show, n) : (a.show(), n())
            }
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), h()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s.hide(), h()), s.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && s.length ? e.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === l(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0], this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: l.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? l() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + l.ui.escapeSelector(t) + "']")) : t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                l.data(this, "ui-tabs-destroy") ? l(this).remove() : l(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var t = l(this),
                    e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), l.isArray(t) ? l.map(t, function(t) {
                return t !== i ? t : null
            }) : l.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setOptionDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0;
                else {
                    if (t = this._getIndex(t), -1 !== l.inArray(t, e)) return;
                    e = l.isArray(e) ? l.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function(t, a) {
            t = this._getIndex(t);

            function s(t, e) {
                "abort" === e && n.panels.stop(!1, !0), n._removeClass(i, "ui-tabs-loading"), h.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }
            var n = this,
                i = this.tabs.eq(t),
                t = i.find(".ui-tabs-anchor"),
                h = this._getPanelForTab(i),
                r = {
                    tab: i,
                    panel: h
                };
            this._isLocal(t[0]) || (this.xhr = l.ajax(this._ajaxSettings(t, a, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    h.html(t), n._trigger("load", a, r), s(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    s(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, a) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, e) {
                    return s._trigger("beforeLoad", i, l.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, a))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = l(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    }), !1 !== l.uiBackCompat && l.widget("ui.tabs", l.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), l.ui.tabs
});
/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], e) : e(jQuery)
}(function(o) {
    return o.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = o(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : o()
            }
        },
        _createIcons: function() {
            var e, t = this.options.icons;
            t && (e = o("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + t.header), e.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, t.header)._addClass(e, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) {
            "active" !== e ? ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || !1 !== this.options.active || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons())) : this._activate(t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var t = o.ui.keyCode,
                    i = this.headers.length,
                    a = this.headers.index(e.target),
                    s = !1;
                switch (e.keyCode) {
                    case t.RIGHT:
                    case t.DOWN:
                        s = this.headers[(a + 1) % i];
                        break;
                    case t.LEFT:
                    case t.UP:
                        s = this.headers[(a - 1 + i) % i];
                        break;
                    case t.SPACE:
                    case t.ENTER:
                        this._eventHandler(e);
                        break;
                    case t.HOME:
                        s = this.headers[0];
                        break;
                    case t.END:
                        s = this.headers[i - 1]
                }
                s && (o(e.target).attr("tabIndex", -1), o(s).attr("tabIndex", 0), o(s).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === o.ui.keyCode.UP && e.ctrlKey && o(e.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = o()) : !1 === e.active ? this._activate(0) : this.active.length && !o.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = o()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var e = this.headers,
                t = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
        },
        _refresh: function() {
            var i, e = this.options,
                t = e.heightStyle,
                a = this.element.parent();
            this.active = this._findActive(e.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = o(this),
                    t = e.uniqueId().attr("id"),
                    i = e.next(),
                    a = i.uniqueId().attr("id");
                e.attr("aria-controls", a), i.attr("aria-labelledby", t)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === t ? (i = a.height(), this.element.siblings(":visible").each(function() {
                var e = o(this),
                    t = e.css("position");
                "absolute" !== t && "fixed" !== t && (i -= e.outerHeight(!0))
            }), this.headers.each(function() {
                i -= o(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                o(this).height(Math.max(0, i - o(this).innerHeight() + o(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.headers.next().each(function() {
                var e = o(this).is(":visible");
                e || o(this).show(), i = Math.max(i, o(this).css("height", "").height()), e || o(this).hide()
            }).height(i))
        },
        _activate: function(e) {
            e = this._findActive(e)[0];
            e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: o.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : o()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && o.each(e.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var t = this.options,
                i = this.active,
                a = o(e.currentTarget),
                s = a[0] === i[0],
                n = s && t.collapsible,
                h = n ? o() : a.next(),
                r = i.next(),
                h = {
                    oldHeader: i,
                    oldPanel: r,
                    newHeader: n ? o() : a,
                    newPanel: h
                };
            e.preventDefault(), s && !t.collapsible || !1 === this._trigger("beforeActivate", e, h) || (t.active = !n && this.headers.index(a), this.active = s ? o() : a, this._toggle(h), this._removeClass(i, "ui-accordion-header-active", "ui-state-active"), t.icons && (i = i.children(".ui-accordion-header-icon"), this._removeClass(i, null, t.icons.activeHeader)._addClass(i, null, t.icons.header)), s || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), t.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, t.icons.header)._addClass(s, null, t.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var t = e.newPanel,
                i = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = t, this.prevHide = i, this.options.animate ? this._animate(t, i, e) : (i.hide(), t.show(), this._toggleComplete(e)), i.attr({
                "aria-hidden": "true"
            }), i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), t.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : t.length && this.headers.filter(function() {
                return 0 === parseInt(o(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), t.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, i, t) {
            var a, s, n, h = this,
                r = 0,
                o = e.css("box-sizing"),
                d = e.length && (!i.length || e.index() < i.index()),
                c = this.options.animate || {},
                l = d && c.down || c,
                d = function() {
                    h._toggleComplete(t)
                };
            return s = (s = "string" == typeof l ? l : s) || l.easing || c.easing, n = (n = "number" == typeof l ? l : n) || l.duration || c.duration, i.length ? e.length ? (a = e.show().outerHeight(), i.animate(this.hideProps, {
                duration: n,
                easing: s,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }), void e.hide().animate(this.showProps, {
                duration: n,
                easing: s,
                complete: d,
                step: function(e, t) {
                    t.now = Math.round(e), "height" !== t.prop ? "content-box" === o && (r += t.now) : "content" !== h.options.heightStyle && (t.now = Math.round(a - i.outerHeight() - r), r = 0)
                }
            })) : i.animate(this.hideProps, n, s, d) : e.animate(this.showProps, n, s, d)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel,
                i = t.prev();
            this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
});

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString()) + '; path=/';
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
};

function wpi_dropdownnav(selector) {
    jQuery(function($) {
        var o = $(selector);
        var menu_char = '&#8801;';
        var u = $(selector + ' > div > ul');
        if (typeof(u) === 'undefined') {
            return;
        }
        o.addClass('wpi_dropdownnav');
        var href = '';
        if ($('#header-line-3.floating').length != 0) {
            href = ' href="#"';
        }
        o.prepend($('<a class="wpi-dropdown-nav-toggle responsive-elements"' + href + '>' + menu_char + '</a>'));
        o.find('.wpi-dropdown-nav-toggle').click(function() {
            if (u.is('.de_res_nav') || u.css('display') == 'none') {
                u.slideDown(300, function() {
                    $(this).removeClass('de_res_nav');
                    if ($('#header-line-3.floating').length != 0) {
                        $('#header-line-3.floating').addClass('header-static');
                        $("html, body").animate({
                            scrollTop: 0
                        }, 600);
                    }
                })
            } else {
                u.slideUp(200, function() {
                    $(this).addClass('de_res_nav').attr('style', '');
                    if ($('#header-line-3.floating').length != 0) {
                        $('#header-line-3.floating').removeClass('header-static');
                    }
                })
            }
        });
    });
};
jQuery(function($) {
    $.fn.wpi_snow_ticker = function(options) {
        var defaults = {
            animation: 'default',
            speed: 400,
            pause_time: 3000,
            control: 'none'
        }
        var settings = $.extend({}, defaults, options);
        var o = $(this);
        var aindex = 0;
        var tindex = 1;
        var ticker_timer;
        var index_limit = o.find('ul > li').length;
        var item = o.find('ul > li');
        var ctrl = null;
        var ctrl_html = '';
        var safe_bounce = true;
        var hovering = false;
        var rtl = false;
        $('html[dir="rtl"]').each(function() {
            rtl = true;
        });
        o.addClass('wpi_snow_ticker');
        o.find('ul').css('height', o.css('height'));
        item.css({
            'height': o.css('height'),
            'line-height': o.css('height')
        });
        $(item[0]).addClass('active');
        if (settings.control != 'none') {
            switch (settings.control) {
                case 'next_prev':
                    if (rtl) {
                        ctrl_html += '<a class="fa fa-chevron-right ctrl-next ctrl-nav"></a> <a class="fa fa-chevron-left ctrl-prev ctrl-nav"></a>';
                    } else {
                        ctrl_html += '<a class="fa fa-chevron-left ctrl-prev ctrl-nav"></a> <a class="fa fa-chevron-right ctrl-next ctrl-nav"></a>';
                    }
                    break;
                case 'points':
                    for (var i = 0; i < item.length; i++) {
                        ctrl_html += '<a class="ctrl-point"></a> ';
                    }
                    break;
                case 'number':
                    for (var i = 0; i < item.length; i++) {
                        ctrl_html += '<a class="ctrl-number">' + (i + 1) + '</a> ';
                    }
                    break;
                default:
                    break;
            }
        }
        if (ctrl_html && item.length > 1) {
            o.append('<div class="ctrl ' + settings.control + '"><div class="inner">' + ctrl_html + '</div></div>');
            ctrl = o.find('.ctrl');
            ctrl.find('.ctrl-point').each(function() {
                if (0 == $(this).index()) {
                    $(this).addClass('active');
                }
            });
            ctrl.find('.ctrl-number').each(function() {
                if (0 == $(this).index()) {
                    $(this).addClass('active');
                }
            });
        }

        function main(_aindex, _tindex) {
            if (typeof(ticker_timer) != 'undefined') {
                clearTimeout(ticker_timer);
            }
            if (!safe_bounce) {
                return;
            }
            safe_bounce = false;
            if (_tindex >= index_limit) {
                _tindex = 0;
            }
            if (_tindex < 0) {
                _tindex = index_limit - 1;
            }
            aindex = _tindex;
            if (ctrl) {
                ctrl.find('.active').removeClass('active');
                ctrl.find('.ctrl-point').each(function() {
                    if (_tindex == $(this).index()) {
                        $(this).addClass('active');
                    }
                });
                ctrl.find('.ctrl-number').each(function() {
                    if (_tindex == $(this).index()) {
                        $(this).addClass('active');
                    }
                });
            }
            $(item[_aindex]).removeClass('active');
            if (settings.animation == 'fade') {
                $(item[_aindex]).fadeOut(settings.speed / 2, function() {
                    $(item[_tindex]).fadeIn(settings.speed / 2, function() {
                        $(item[_tindex]).addClass('active');
                        if (!hovering) {
                            ticker_timer = setTimeout(function() {
                                main(_tindex, _tindex + 1);
                            }, settings.pause_time);
                        }
                        safe_bounce = true;
                    });
                });
            } else if (settings.animation == 'typing') {
                $(item[_tindex]).append('<div class="hider"><div class="typer"></div></div>');
                var hider = $(item[_tindex]).find('.hider');
                var typer = $(item[_tindex]).find('.typer');
                $(item[_tindex]).addClass('active');
                $(hider).animate({
                    width: 0
                }, settings.speed, function() {
                    hider.remove();
                    typer.remove();
                    if (!hovering) {
                        ticker_timer = setTimeout(function() {
                            main(_tindex, _tindex + 1);
                        }, settings.pause_time);
                    }
                    safe_bounce = true;
                });
            } else {
                $(item[_tindex]).css('top', '100%').addClass('active').animate({
                    'top': 0
                }, settings.speed, function() {
                    if (!hovering) {
                        ticker_timer = setTimeout(function() {
                            main(_tindex, _tindex + 1);
                        }, settings.pause_time);
                    }
                    safe_bounce = true;
                });
            }
        }
        ticker_timer = setTimeout(function() {
            main(aindex, tindex);
        }, settings.pause_time);
        o.mouseenter(function() {
            if (typeof(ticker_timer) != 'undefined') {
                clearTimeout(ticker_timer);
            }
            hovering = true;
        }).mouseleave(function() {
            hovering = false;
            if (typeof(ticker_timer) != 'undefined') {
                clearTimeout(ticker_timer);
            }
            ticker_timer = setTimeout(function() {
                main(aindex, aindex + 1);
            }, settings.pause_time);
        });
        if (ctrl) {
            ctrl.find('.ctrl-nav').click(function() {
                if ($(this).is('.ctrl-prev')) {
                    tindex = aindex - 1;
                } else {
                    tindex = aindex + 1;
                }
                main(aindex, tindex);
            });
            ctrl.find('.ctrl-point').click(function() {
                main(aindex, $(this).index());
            });
            ctrl.find('.ctrl-number').click(function() {
                main(aindex, $(this).index());
            });
        }
    }
});
jQuery(function($) {
    $.fn.wpi_snow_slider = function(options) {
        var defaults = {
            animation: 'default',
            speed: 2000,
            pause_time: 5000,
            control: 'none',
            next_prev: '',
            thumb_nav: '',
            bar_nav: '',
            corner_border: ''
        }
        var settings = $.extend({}, defaults, options);
        var o = $(this);
        var aindex = 0;
        var tindex = 1;
        var slider_timer;
        var item = o.find('ul.content > li');
        var content = o.find('ul.content');
        var index_limit = item.length;
        var safe_bounce = true;
        var hovering = false;
        var ctrl_bottom = 0;
        var thumb_html = '';
        var bar_html = '';
        var thumb = null;
        var bar = null;
        var rtl = false;
        o.addClass('wpi_snow_slider');
        if (item.length < 2) {
            return;
        }
        $('html[dir="rtl"]').each(function() {
            rtl = true;
        });
        if (settings.animation == 'fade') {
            for (var i = 0; i < item.length; i++) {
                if (i == 0) {
                    $(item[0]).fadeTo(100, 1);
                    $(item[0]).css('z-index', 1);
                } else {
                    $(item[i]).fadeTo(100, 0);
                    $(item[i]).css('z-index', 0);
                }
            }
        } else {
            content.css('width', (item.length * 100) + '%');
            for (var i = 0; i < item.length; i++) {
                if (rtl) {
                    $(item[i]).css('right', (i * (100 / item.length)) + '%').css('width', (100 / item.length) + '%');
                } else {
                    $(item[i]).css('left', (i * (100 / item.length)) + '%').css('width', (100 / item.length) + '%');
                }
            }
        }
        item.find('.title-wrapper').each(function() {
            $(this).css('width', $(this).width() + 'px');
        });
        if (settings.next_prev) {
            if (rtl) {
                o.append('<div class="next_prev"><a class="ctrl_button ctrl-right"><i class="fa fa-chevron-right"></i></a><a class="ctrl_button ctrl-left"><i class="fa fa-chevron-left"></i></a></div>');
            } else {
                o.append('<div class="next_prev"><a class="ctrl_button ctrl-left"><i class="fa fa-chevron-left"></i></a><a class="ctrl_button ctrl-right"><i class="fa fa-chevron-right"></i></a></div>');
            }
        }
        if (settings.bar_nav) {
            for (var i = 0; i < item.length; i++) {
                bar_html += '<li></li>';
            }
            if (bar_html) {
                o.append('<div class="clear"></div><ul class="bar_nav">' + bar_html + '</ul>');
                bar = o.find('.bar_nav li');
                bar.css('width', (100 / item.length) + '%');
                $(bar[0]).addClass('active');
                bar.find('a').removeAttr('href');
            }
        }
        if (settings.thumb_nav) {
            item.find('.media-wrapper').each(function() {
                thumb_html += '<li>' + $(this).html() + '<div class="inner-shadow"></div></li>';
            });
            if (thumb_html) {
                o.append('<div class="clear"></div><ul class="thumb_nav">' + thumb_html + '</ul>');
                thumb = o.find('.thumb_nav li');
                thumb.css('width', (100 / item.length) + '%');
                $(thumb[0]).addClass('active');
                thumb.find('a').removeAttr('href');
            }
        }
        if (settings.corner_border) {
            content.wrap('<div class="corner-border"></div>');
            o.find('.corner-border').append('<div class="corner border-color corner-left-top"></div>');
            o.find('.corner-border').append('<div class="corner border-color corner-right-top"></div>');
            o.find('.corner-border').append('<div class="corner border-color corner-left-bottom"></div>');
            o.find('.corner-border').append('<div class="corner border-color corner-right-bottom"></div>');
        }

        function main(_aindex, _tindex) {
            if (index_limit < 2) {
                return;
            }
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (!safe_bounce) {
                return;
            }
            safe_bounce = false;
            if (_tindex >= index_limit) {
                _tindex = 0;
            }
            if (_tindex < 0) {
                _tindex = index_limit - 1;
            }
            aindex = _tindex;
            if (typeof(thumb) != 'undefined' && thumb != null && (settings.thumb_nav)) {
                if (settings.thumb_nav) {
                    thumb.removeClass('active');
                    $(thumb[_tindex]).addClass('active');
                }
            }
            if (typeof(bar) != 'undefined' && bar != null && (settings.bar_nav)) {
                if (settings.bar_nav) {
                    bar.removeClass('active');
                    $(bar[_tindex]).addClass('active');
                }
            }
            if (settings.animation == 'slide') {
                var t_item = $(item[_tindex]);
                var t_meta = t_item.find('.effect-line-1');
                var t_title = t_item.find('.effect-line-2');
                var a_item = $(item[_aindex]);
                var a_meta = a_item.find('.effect-line-1');
                var a_title = a_item.find('.effect-line-2');
                if (rtl) {
                    t_title.css('right', '-100%');
                    t_meta.css('right', '-100%');
                } else {
                    t_title.css('left', '-100%');
                    t_meta.css('left', '-100%');
                }
                t_title.fadeTo(1, 0);
                t_meta.fadeTo(1, 0);
                if (rtl) {
                    a_meta.animate({
                        'right': '-100%',
                        'opacity': 0
                    }, settings.speed / 3);
                    a_title.animate({
                        'right': '-100%',
                        'opacity': 0
                    }, settings.speed / 3, function() {
                        content.animate({
                            'right': '-' + (_tindex * 100) + '%'
                        }, settings.speed / 3, function() {
                            t_meta.animate({
                                'right': 0,
                                'opacity': 1
                            }, settings.speed / 3);
                            t_title.animate({
                                'right': 0,
                                'opacity': 1
                            }, settings.speed / 3, function() {
                                safe_bounce = true;
                                if (!hovering) {
                                    slider_timer = setTimeout(function() {
                                        main(_tindex, _tindex + 1);
                                    }, settings.pause_time);
                                }
                            });
                        });
                    });
                } else {
                    a_meta.animate({
                        'left': '-100%',
                        'opacity': 0
                    }, settings.speed / 3);
                    a_title.animate({
                        'left': '-100%',
                        'opacity': 0
                    }, settings.speed / 3, function() {
                        content.animate({
                            'left': '-' + (_tindex * 100) + '%'
                        }, settings.speed / 3, function() {
                            t_meta.animate({
                                'left': 0,
                                'opacity': 1
                            }, settings.speed / 3);
                            t_title.animate({
                                'left': 0,
                                'opacity': 1
                            }, settings.speed / 3, function() {
                                safe_bounce = true;
                                if (!hovering) {
                                    slider_timer = setTimeout(function() {
                                        main(_tindex, _tindex + 1);
                                    }, settings.pause_time);
                                }
                            });
                        });
                    });
                }
            } else {
                var t_item = $(item[_tindex]);
                var t_meta = t_item.find('.effect-line-1');
                var t_title = t_item.find('.effect-line-2');
                var a_item = $(item[_aindex]);
                var a_meta = a_item.find('.effect-line-1');
                var a_title = a_item.find('.effect-line-2');
                t_item.fadeTo(1, 1)
                t_meta.fadeTo(1, 0);
                t_title.fadeTo(1, 0);
                a_title.fadeTo(settings.speed / 4, 0, function() {
                    a_item.fadeTo(settings.speed / 4, 0, function() {
                        t_title.fadeTo(settings.speed / 4, 1, function() {
                            t_meta.fadeTo(settings.speed / 4, 1);
                            t_item.css('z-index', 1);
                            a_item.css('z-index', 0);
                            safe_bounce = true;
                            if (!hovering) {
                                slider_timer = setTimeout(function() {
                                    main(_tindex, _tindex + 1);
                                }, settings.pause_time);
                            }
                        });
                    });
                });
            }
        }
        slider_timer = setTimeout(function() {
            main(aindex, tindex);
        }, settings.pause_time);
        o.mouseenter(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (rtl) {
                o.find('.next_prev').animate({
                    left: 0
                }, 200);
            } else {
                o.find('.next_prev').animate({
                    right: 0
                }, 200);
            }
            hovering = true;
        }).mouseleave(function() {
            hovering = false;
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (rtl) {
                o.find('.next_prev').animate({
                    left: '-100%'
                }, 200);
            } else {
                o.find('.next_prev').animate({
                    right: '-100%'
                }, 200);
            }
            slider_timer = setTimeout(function() {
                main(aindex, aindex + 1);
            }, settings.pause_time);
        });
        $("body").keydown(function(e) {
            if (e.keyCode == 37 && e.which == 37) {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                main(aindex, aindex - 1);
            } else if (e.keyCode == 39 && e.which == 39) {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                main(aindex, aindex + 1);
            }
        });
        $('.ctrl-left').click(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            main(aindex, aindex - 1);
        });
        $('.ctrl-right').click(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            main(aindex, aindex + 1);
        });
        if (typeof(thumb) != 'undefined' && thumb != null && settings.thumb_nav) {
            thumb.click(function() {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                if ($(this).index() != aindex) {
                    main(aindex, $(this).index());
                }
            });
        }
        if (typeof(bar) != 'undefined' && bar != null && settings.bar_nav) {
            bar.click(function() {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                if ($(this).index() != aindex) {
                    main(aindex, $(this).index());
                }
            });
        }
    }
});
jQuery(function($) {
    $.fn.wpi_snow_carousel = function(options) {
        var defaults = {
            speed: 2000,
            pause_time: 5000,
            next_prev: '',
            columns: 3
        }
        var settings = $.extend({}, defaults, options);
        var o = $(this);
        var aindex = 0;
        var tindex = 1;
        var slider_timer;
        var item = o.find('ul.content > li');
        var content = o.find('ul.content');
        var index_limit = item.length - settings.columns + 1;
        var safe_bounce = true;
        var hovering = false;
        var travel_offset = 100 / settings.columns;
        var rtl = false;
        $('html[dir="rtl"]').each(function() {
            rtl = true;
        });
        o.addClass('wpi_snow_carousel');
        content.css('width', ((100 / settings.columns) * item.length) + '%');
        content.css('height', 'auto');
        if (rtl) {
            content.css('right', '0');
        } else {
            content.css('left', '0');
        }
        item.css('width', (100 / item.length) + '%');
        var item_width = 100 / item.length;
        var item_width = Math.floor(item_width * 10);
        if (item_width * item.length < 1000) {
            var fill_up = 1000 - item_width * item.length;
            for (var i = 0; i < item.length; i++) {
                if (fill_up) {
                    $(item[i]).css('width', (item_width + 1) / 10 + '%');
                    fill_up -= 1;
                } else {
                    $(item[i]).css('width', (item_width / 10) + '%');
                }
            }
        }
        if (settings.columns == 0 || item.length < 2) {
            return;
        }
        $(item[item.length - 1]).addClass('last');
        if (settings.next_prev) {
            if (rtl) {
                o.append('<div class="next_prev ease"><a class="ctrl_button ctrl-right"><i class="fa fa-chevron-right"></i></a><a class="ctrl_button ctrl-left"><i class="fa fa-chevron-left"></i></a></div>');
            } else {
                o.append('<div class="next_prev ease"><a class="ctrl_button ctrl-left"><i class="fa fa-chevron-left"></i></a><a class="ctrl_button ctrl-right"><i class="fa fa-chevron-right"></i></a></div>');
            }
        }

        function wpi_snow_carousel_main(_aindex, _tindex) {
            if (index_limit < 1) {
                return;
            }
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (!safe_bounce) {
                return;
            }
            safe_bounce = false;
            if (_tindex >= index_limit) {
                _tindex = 0;
            }
            if (_tindex < 0) {
                _tindex = index_limit - 1;
            }
            aindex = _tindex;
            if (rtl) {
                content.animate({
                    'margin-right': '-' + (travel_offset * _tindex) + '%'
                }, settings.speed, function() {
                    safe_bounce = true;
                    if (!hovering) {
                        slider_timer = setTimeout(function() {
                            wpi_snow_carousel_main(_tindex, _tindex + 1);
                        }, settings.pause_time);
                    }
                });
            } else {
                content.animate({
                    'margin-left': '-' + (travel_offset * _tindex) + '%'
                }, settings.speed, function() {
                    safe_bounce = true;
                    if (!hovering) {
                        slider_timer = setTimeout(function() {
                            wpi_snow_carousel_main(_tindex, _tindex + 1);
                        }, settings.pause_time);
                    }
                });
            }
        }
        slider_timer = setTimeout(function() {
            wpi_snow_carousel_main(aindex, tindex);
        }, settings.pause_time);
        o.mouseenter(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (rtl) {
                o.find('.ctrl-left').animate({
                    right: 0
                }, 200);
                o.find('.ctrl-right').animate({
                    left: 0
                }, 200);
            } else {
                o.find('.ctrl-left').animate({
                    left: 0
                }, 200);
                o.find('.ctrl-right').animate({
                    right: 0
                }, 200);
            }
            hovering = true;
        }).mouseleave(function() {
            hovering = false;
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            if (rtl) {
                o.find('.ctrl-left').animate({
                    'right': '-100%'
                }, 200);
                o.find('.ctrl-right').animate({
                    'left': '-100%'
                }, 200);
            } else {
                o.find('.ctrl-left').animate({
                    'left': '-100%'
                }, 200);
                o.find('.ctrl-right').animate({
                    'right': '-100%'
                }, 200);
            }
            slider_timer = setTimeout(function() {
                wpi_snow_carousel_main(aindex, aindex + 1);
            }, settings.pause_time);
        });
        $("body").keydown(function(e) {
            if (e.keyCode == 37 && e.which == 37) {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                wpi_snow_carousel_main(aindex, aindex - 1);
            } else if (e.keyCode == 39 && e.which == 39) {
                if (typeof(slider_timer) != 'undefined') {
                    clearTimeout(slider_timer);
                }
                wpi_snow_carousel_main(aindex, aindex + 1);
            }
        });
        o.find('.ctrl-left').click(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            wpi_snow_carousel_main(aindex, aindex - 1);
        });
        o.find('.ctrl-right').click(function() {
            if (typeof(slider_timer) != 'undefined') {
                clearTimeout(slider_timer);
            }
            wpi_snow_carousel_main(aindex, aindex + 1);
        });
    }
});

function auto_two_grid(box) {
    if (box.find('.item .item-natural-thumbnail img').length != box.find('.item .item-natural-thumbnail img.loaded').length) {
        return;
    }
    var content = box.find('ul.content');
    if (box.find('.col').length == 0) {
        jQuery('<li class="col col-left"><ul class="col-inner"></ul></li><li class="col col-right"><ul class="col-inner"></ul></li>').appendTo(content);
    }
    var index = 0;
    var left_col = content.find('.col-left').find('.col-inner');
    var right_col = content.find('.col-right').find('.col-inner');
    content.find('.item').each(function() {
        if (index % 2) {
            jQuery(this).appendTo(right_col);
        } else {
            jQuery(this).appendTo(left_col);
        }
        index++;
    });
}

function new_box_two_rearrange() {
    jQuery('.news-box.two').each(function() {
        var box = jQuery(this);
        box.find('.item .item-natural-thumbnail img').each(function() {
            if (jQuery(this).is('.loaded')) {
                auto_two_grid(box);
            } else {
                jQuery(this).on('load', function() {
                    jQuery(this).addClass('loaded');
                    auto_two_grid(box);
                }).each(function() {
                    if (this.complete) {
                        jQuery(this).trigger('load');
                    }
                    this.src = this.src;
                });
            }
        });
    });
}
new_box_two_rearrange();
jQuery(function($) {
    $('.popular-category-list.two').each(function() {
        var box = $(this);
        if (box.find('.col').length == 0) {
            jQuery('<li class="col col-left"><ul class="col-inner"></ul></li><li class="col col-right"><ul class="col-inner"></ul></li>').appendTo(box);
        }
        var index = 0;
        var left_col = box.find('.col-left').find('.col-inner');
        var right_col = box.find('.col-right').find('.col-inner');
        box.find('.item').each(function() {
            if (index % 2) {
                jQuery(this).appendTo(right_col);
            } else {
                jQuery(this).appendTo(left_col);
            }
            index++;
        });
    });
});
jQuery(function($) {
    function wpi_pick_menu_color(obj) {
        var menu_class = $(obj).attr('class');
        if (menu_class && typeof(menu_class) != 'undefined') {
            menu_classes = menu_class.split(' ');
            for (var i = 0; i < menu_classes.length; i++) {
                if (menu_classes[i].indexOf('menu') == -1) {
                    return menu_classes[i];
                }
            }
        }
        return null;
    }
    $('li.menu-item').mouseover(function() {
        $(this).find('.mega-menu').css('z-index', 998);
    });
    $('li.menu-item').mouseout(function() {
        $(this).find('.mega-menu').css('z-index', 900);
    });
    $('#nav-main-menu .mega-menu .sub-menu .sub-menu li a').prepend('<i class="fa fa-angle-right"></i> ');
    $('#header-line-3.floating').each(function() {
        var nav = $(this);
        var navHomeY = nav.offset().top;
        var isFixed = false;
        var $w = $(window);
        $w.scroll(function() {
            var scrollTop = $w.scrollTop();
            var shouldBeFixed = scrollTop > navHomeY;
            if (shouldBeFixed && !isFixed) {
                nav.css({
                    position: 'fixed',
                    top: 0,
                    left: nav.offset().left,
                    width: nav.width(),
                    'margin-top': $('html').css('margin-top')
                });
                isFixed = true;
            } else if (!shouldBeFixed && isFixed) {
                nav.css({
                    position: 'static',
                    'margin-top': 0
                });
                isFixed = false;
            }
        });
    });
    if (typeof(selectnav) != 'undefined') {
        $('#nav-top-menu > div > ul').attr('id', 'res-menu-1');
        $('#nav-main-menu > div > ul').attr('id', 'res-menu-2');
        $('#nav-footer-menu > div > ul').attr('id', 'res-menu-3');
        selectnav('res-menu-1');
        selectnav('res-menu-2');
        selectnav('res-menu-3');
        $('.selectnav option').removeAttr('selected');
        $('.selectnav option').first().attr('selected', 'selected');
    } else if (typeof(wpi_dropdownnav) != 'undefined') {
        wpi_dropdownnav('#nav-top-menu');
        wpi_dropdownnav('#nav-main-menu');
        wpi_dropdownnav('#nav-footer-menu');
    }
    $('.news-box.break').each(function() {
        var animation = $(this).attr('data-animation');
        var speed = $(this).attr('data-speed');
        var pause_time = $(this).attr('data-pause_time');
        var control = $(this).attr('data-control');
        if (typeof(animation) == 'undefined') {
            animation = 'slide';
        }
        if (typeof(speed) == 'undefined') {
            speed = 400;
        }
        if (typeof(pause_time) == 'undefined') {
            pause_time = 3000;
        }
        if (typeof(control) == 'undefined') {
            control = 'none';
        }
        if (isNaN(Number(speed))) {
            speed = 400;
        }
        speed = Number(speed);
        if (isNaN(Number(pause_time))) {
            pause_time = 3000;
        }
        pause_time = Number(pause_time);
        $(this).find('.outer').wpi_snow_ticker({
            animation: animation,
            speed: speed,
            pause_time: pause_time,
            control: control
        });
    });
    $('.news-box.slider').each(function() {
        var animation = $(this).attr('data-animation');
        var speed = $(this).attr('data-speed');
        var pause_time = $(this).attr('data-pause_time');
        var control = $(this).attr('data-control');
        var flexible = $(this).attr('data-flexible');
        var next_prev = $(this).attr('data-next_prev');
        var thumb_nav = $(this).attr('data-thumb_nav');
        var corner_border = $(this).attr('data-corner_border');
        var bar_nav = $(this).attr('data-bar_nav');
        if (typeof(animation) == 'undefined') {
            animation = 'slide';
        }
        if (typeof(speed) == 'undefined') {
            speed = 400;
        }
        if (typeof(pause_time) == 'undefined') {
            pause_time = 3000;
        }
        if (typeof(control) == 'undefined') {
            control = 'both';
        }
        if (typeof(flexible) == 'undefined') {
            flexible = 'fixed';
        }
        if (typeof(next_prev) == 'undefined') {
            next_prev = '';
        }
        if (typeof(thumb_nav) == 'undefined') {
            thumb_nav = '';
        }
        if (typeof(bar_nav) == 'undefined') {
            bar_nav = '';
        }
        if (typeof(corner_border) == 'undefined') {
            corner_border = '';
        }
        if (isNaN(Number(speed))) {
            speed = 400;
        }
        speed = Number(speed);
        if (isNaN(Number(pause_time))) {
            pause_time = 3000;
        }
        pause_time = Number(pause_time);
        $(this).find('.outer').wpi_snow_slider({
            animation: animation,
            speed: speed,
            pause_time: pause_time,
            control: control,
            flexible: flexible,
            next_prev: next_prev,
            thumb_nav: thumb_nav,
            bar_nav: bar_nav,
            corner_border: corner_border
        });
    });
    $('.news-box.carousel').each(function() {
        var speed = $(this).attr('data-speed');
        var pause_time = $(this).attr('data-pause_time');
        var next_prev = $(this).attr('data-next_prev');
        var columns = $(this).attr('data-columns');
        if (typeof(speed) == 'undefined') {
            speed = 400;
        }
        if (typeof(pause_time) == 'undefined') {
            pause_time = 3000;
        }
        if (isNaN(Number(speed))) {
            speed = 400;
        }
        speed = Number(speed);
        if (isNaN(Number(pause_time))) {
            pause_time = 3000;
        }
        if (isNaN(Number(columns))) {
            columns = 3;
        }
        if (columns < 1) {
            columns = 1;
        }
        if (columns > 5) {
            columns = 5;
        }
        if (typeof(next_prev) == 'undefined') {
            next_prev = '';
        }
        pause_time = Number(pause_time);
        $(this).find('.outer').wpi_snow_carousel({
            speed: speed,
            pause_time: pause_time,
            next_prev: next_prev,
            columns: columns
        });
    });
    $('.news-box.tabs .tabs-header a').click(function() {
        var sel = $(this).attr('href');
        sel = sel.replace('#', '.');
        $(this).parents('.news-box.tabs').find('.tabs-content-outer').removeClass('active');
        $(this).parents('.news-box.tabs').find('.tab-header').removeClass('active');
        $(this).parents('.news-box.tabs').find(sel).addClass('active');
        $(this).parents('.tab-header').addClass('active');
    });
    var cfs = getCookie('font_size');
    if (cfs != '' && cfs != null) {
        $('.single-content .post-content-body').css('font-size', cfs + 'px')
    }
    $('.post-app .zoom').click(function() {
        var fs = $('.single-content .post-content-body').css('font-size');
        fs = fs.replace('px', '');
        var fs_num = Number(fs);
        if ($(this).hasClass('zoom-in')) {
            fs_num++;
        } else {
            fs_num -= 1;
        }
        setCookie('font_size', fs_num);
        $('.post-content-body').css('font-size', fs_num + 'px')
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').css('bottom', '10px');
        } else {
            $('.scrollup').css('bottom', '-100px');
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $('.wpi_tabs').each(function() {
        var id = $(this).attr('id');
        if (id) {
            $('#' + id).tabs();
        }
    });
    $('.wpi_accordions').each(function() {
        var id = $(this).attr('id');
        if (id) {
            $('#' + id).accordion({
                icons: {
                    'header': 'ui-icon-plus sprites',
                    'activeHeader': 'ui-icon-minus sprites'
                },
                collapsible: true
            });
        }
    });
    $('.hentry .content a').each(function() {
        var src = $(this).find('img').attr('src');
        var href = $(this).attr('href');
        if (src && href) {
            for (var i = 0; i < src.length && i < href.length; i++) {
                if (src[i] != href[i]) {
                    break;
                }
            }
            for (var j = 1; j < 5 && src.length > 5 && href.length > 5; j++) {
                if (src[src.length - j] != href[href.length - j]) {
                    break;
                }
            }
            if ((i / href.length > 0.7 || i / src.length) && j >= 5) {
                $(this).addClass('thickbox');
                $(this).attr('rel', 'gallery-post');
            }
        }
    });
    var footer_widget_index = 0;
    $('#footer .widget').each(function() {
        $(this).addClass('widget-' + footer_widget_index);
        if (footer_widget_index % 3 == 0) {
            $(this).addClass('widget-triple');
        }
        footer_widget_index++;
    });
    $('.search-form-top-button').click(function() {
        var wrapper = $('.search-form-top-wrapper');
        var cur_display = wrapper.css('display');
        if (cur_display === 'none') {
            wrapper.slideDown(100);
        } else {
            wrapper.slideUp(100);
        }
    });
    $('.search-form-top-button').mouseenter(function() {
        var wrapper = $('.search-form-top-wrapper');
        wrapper.slideDown(100);
    });
    $('.search-form-top').mouseleave(function() {
        var wrapper = $('.search-form-top-wrapper');
        wrapper.slideUp(100);
    });
    $('#header-line-1 .top-social-icons').each(function() {
        $(this).clone().addClass('responsive-elements').prependTo($('#header-line-1 .wide'));
    });
    $('#header-line-1 .top-social-icons.responsive-elements').each(function() {
        $('<a href="#" class="responsive-elements social-toggle background-color"><i class="fa fa-globe"></i></a>').insertAfter($(this));
    });
    $('.social-toggle').click(function() {
        if ($('#header-line-1 .top-social-icons.responsive-elements').css('display') == 'none') {
            $('#header-line-1 .top-social-icons.responsive-elements').addClass('active');
        } else {
            $('#header-line-1 .top-social-icons.responsive-elements').removeClass('active');
        }
    });
});
jQuery(function() {
    jQuery('a#to-comment-this-post').click(function() {
        var speed = 500;
        var href = jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        jQuery("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});
// // auto resize thumbnail
// function optimize_thumbnail_image(img) {

// 	// clear margin style
// 	jQuery(img).css('margin-left', '0');
// 	jQuery(img).css('margin-top', '0');

// 	var image_height = Number(jQuery(img).attr('h'));
// 	var image_width = Number(jQuery(img).attr('w'));

// 	var thumbnail_height = Number(jQuery(img).parents('.item-thumbnail').height());
// 	var thumbnail_width = Number(jQuery(img).parents('.item-thumbnail').width());

// 	// set image height = thumbnail wrapper height
// 	// img_w / img_h = new_img_w / new_img_h
// 	var new_image_height = thumbnail_height;
// 	var new_image_width = (image_width/image_height)*new_image_height;

// 	var style = '';
// 	if (new_image_width < thumbnail_width) {
// 		// if new width lower than thumbnail width
// 		// we must set width to thumbnail width
// 		// and generate new height
// 		new_image_width = thumbnail_width;
// 		new_image_height = (image_height/image_width)*new_image_width;
// 		var margin_top = -((new_image_height - thumbnail_height) / 2);

// 		//jQuery(img).css('width', new_image_width + 'px!important');
// 		//jQuery(img).css('height', new_image_height + 'px!important');

// 		// if height of image is too high (magazine cover)
// 		// not margin to it, to sure display face on image
// 		// < 1.3 is not magazine cover, >= 1.3 is magazine cover
// 		if (new_image_height / new_image_width < 1.3) {
// 			//jQuery(img).css('margin-top', margin_top + 'px');
// 			style += 'margin-top:' + margin_top + 'px!important;';
// 		} else {
// 			//jQuery(img).css('margin-top', '0px');
// 			style += 'margin-top:0px!important;';
// 		}
// 	} else {
// 		// if new width larger than thumbnail
// 		// height is already enough, so just margin left;
// 		var margin_left = -((new_image_width - thumbnail_width) / 2);
// 		//jQuery(img).css('width', new_image_width + 'px!important');
// 		//jQuery(img).css('height', new_image_height + 'px!important');

// 		// jQuery(img).css('margin-left', margin_left + 'px');
// 		style += 'margin-left:' + margin_left + 'px!important;';
// 	}
// 	style += 'width:' + new_image_width + 'px!important;';
// 	style += 'height:' + new_image_height + 'px!important;';
// 	jQuery(img).attr('style', style);
// }
// function optimize_thumbnail() {
// 	// replace small images first
// 	jQuery('.item-thumbnail img').each(function(){
// 		jQuery(this).removeAttr('height');
// 		jQuery(this).removeAttr('width');

// 		var src = jQuery(this).attr('src');
// 		if (src != null) {
// 			if (src.indexOf('/s72-c/') != -1) {
// 				src = src.replace('/s72-c/', '/s1600/');
// 				jQuery(this).after('<img src="'+src+'" class="replaced"/>');
// 				jQuery(this).remove();
// 			} else if (src.indexOf('youtube.com') != -1) {
// 				if (src.indexOf('/default.') != -1) {
// 					src = src.replace('/default.', '/mqdefault.');
// 					jQuery(this).after('<img src="'+src+'" class="replaced"/>');
// 					jQuery(this).remove();
// 				}
// 			}
// 		}
// 	});

// 	// waiting loaded all images
// 	jQuery('.item-thumbnail img').each(function(){
// 		if (jQuery(this).attr('w') && jQuery(this).attr('h')) {
// 			optimize_thumbnail_image(this);
// 		} else {
// 			jQuery(this).on('load', function (){
// 				var w = this.width;
// 				var h = this.height;
// 				jQuery(this).attr('w', w);
// 				jQuery(this).attr('h', h);
// 				optimize_thumbnail_image(this);
// 			})
// 			.each(function (){
// 				// Trigger load event (for Gecko and MSIE)
// 				if (this.complete) {
// 					jQuery(this).trigger('load');
// 				}
// 				// This fixes IE9 issue
// 				this.src = this.src;
// 			});
// 		}
// 	});
// }
// jQuery(function($) {

// 	optimize_thumbnail();


// 	$(window).resize(function(){
// 		optimize_thumbnail();
// 	});

// 	$('.news-box.tabs .tab-header a').click(function () {
// 		optimize_thumbnail();
// 	});
// });
var Page_Padding = 5;
jQuery(function($) {
    if (typeof(ajaxurl) == 'undefined') {
        ajaxurl = wpi_dynamic_js.ajaxurl;
    }
    $('.article-box-pagination').each(function() {
        var cur_page = Number($(this).attr('data-page'));
        var max_page = Number($(this).attr('data-maxpage'));
        var pnav_type = $(this).attr('data-pbpnav');
        if (max_page == 1) {
            $(this).remove();
            return;
        }
        if (cur_page >= max_page) {
            return;
        }
        var pnav_html = '';
        pnav_html += '<div class="inner">';
        switch (pnav_type) {
            case 'more':
                pnav_html += '<span class="nav-item more sfont background-color-hover">' + wpi_dynamic_js.txt_loadmore + '</span>';
                break;
            case 'newer_older':
                pnav_html += '<span class="sfont background-color-hover newer nav-item newer_older">' + wpi_dynamic_js.txt_newernews + '</span>';
                pnav_html += '<span class="sfont background-color-hover older nav-item newer_older">' + wpi_dynamic_js.txt_oldernews + '</span>';
                break;
            case 'number':
                for (var i = 0; i < max_page; i++) {
                    pnav_html += '<span class="sfont background-color nav-item number nav-item-' + (i + 1) + '" data-page="' + (i + 1) + '">' + (i + 1) + '</span>';
                    pnav_html += '<span class="dots dots-' + (i + 1) + '">...</span>';
                }
                break;
        }
        pnav_html += '<img src="' + wpi_dynamic_js.theme_url + '/img/loading.gif" style="display:none" class="loading"/><div class="clear"></div></div>';
        $(this).html(pnav_html);
        $(this).find('.nav-item').hide();
        $(this).find('.dots').hide();
        $(this).find('.nav-item.more').show();
        $(this).find('.nav-item.older').show();
        $(this).find('.nav-item-1').addClass('active');
        for (var i = 0; i < Page_Padding; i++) {
            $(this).find('.nav-item-' + (i + 1)).show();
            $(this).find('.nav-item-' + (max_page - i)).show();
        }
        if (max_page - (Page_Padding - 1) > (Page_Padding + 1)) {
            $(this).find('.dots-' + (Page_Padding + 1)).show();
        }
    });
    $('.article-box-pagination span.nav-item').click(function() {
        var cur = $(this);
        var par = cur.parents('.article-box-pagination');
        var box = par.parents('.news-box');
        var cur_page = Number(par.attr('data-page'));
        var max_page = Number(par.attr('data-maxpage'));
        var pnav_type = par.attr('data-pbpnav');
        switch (pnav_type) {
            case 'more':
                cur_page++;
                cur.hide();
                break;
            case 'newer_older':
                if (cur.is('.older')) {
                    cur_page++;
                } else if (cur.is('.newer')) {
                    cur_page -= 1;
                }
                par.find('.nav-item').hide();
                break;
            case 'number':
                if (cur.is('.active')) {
                    return;
                }
                cur_page = Number(cur.attr('data-page'));
                par.find('.nav-item').hide();
                par.find('.dots').hide();
                break;
        }
        par.find('.loading').show();
        $.post(ajaxurl, {
            action: 'wpi_article_box',
            type: par.attr('data-type'),
            count: par.attr('data-count'),
            category: par.attr('data-category'),
            sort: par.attr('data-sort'),
            author: par.attr('data-author'),
            exclude_loaded_posts: par.attr('data-exclude_loaded_posts'),
            show_category: par.attr('data-show_category'),
            show_date: par.attr('data-show_date'),
            show_comment_number: par.attr('data-show_comment_number'),
            show_snippet: par.attr('data-show_snippet'),
            snippet_length: par.attr('data-snippet_length'),
            full_first_thumb: par.attr('data-full_first_thumb'),
            exclude_post_list: par.attr('data-exclude_post_list'),
            pn: cur_page
        }).done(function(data) {
            if (data.indexOf('error') == -1 && data != '0' && data != '-1' && data != '') {
                par.find('.loading').hide();
                switch (pnav_type) {
                    case 'more':
                        box.find('ul.content').append(data);
                        cur.show();
                        par.attr('data-page', cur_page);
                        if (cur_page >= max_page) {
                            par.remove();
                        }
                        break;
                    case 'newer_older':
                        box.find('ul.content').html(data);
                        par.find('.nav-item').show();
                        par.attr('data-page', cur_page);
                        if (cur_page >= max_page) {
                            par.find('.nav-item.older').hide();
                        }
                        if (cur_page <= 1) {
                            par.find('.nav-item.newer').hide();
                        }
                        $("html, body").animate({
                            scrollTop: (box.offset().top)
                        }, 300);
                        break;
                    case 'number':
                        box.find('ul.content').html(data);
                        par.find('.nav-item.active').removeClass('active');
                        par.find('.nav-item-' + (cur_page)).addClass('active');
                        for (var i = 0; i < Page_Padding; i++) {
                            par.find('.nav-item-' + (i + 1)).show();
                            par.find('.nav-item-' + (cur_page + i - Math.floor(Page_Padding / 2))).show();
                            par.find('.nav-item-' + (max_page - i)).show();
                        }
                        if ((cur_page - (Page_Padding - 3)) > (Page_Padding + 1)) {
                            par.find('.dots-' + (Page_Padding + 1)).show();
                        }
                        if ((cur_page + (Page_Padding - 3)) < max_page - Page_Padding) {
                            par.find('.dots-' + (max_page - Page_Padding)).show();
                        }
                        $("html, body").animate({
                            scrollTop: (box.offset().top)
                        }, 300);
                        break;
                }
                optimize_thumbnail();
                new_box_two_rearrange();
            } else {
                alert('Pagination load fail, data errors from server!');
            }
        }).fail(function() {
            alert('Pagination load fail, some errors from server!');
        });
    });
});
jQuery(function($) {
    if (typeof(ajaxurl) == 'undefined') {
        ajaxurl = wpi_dynamic_js.ajaxurl;
    }
    $(document).ready(function() {
        var com_likes = getCookie('com_likes');
        if (com_likes == null) {
            com_likes = '';
        }
        $('.comment-likes a').each(function() {
            var link = $(this);
            var com_id = link.attr('href');
            com_id = com_id.split('-');
            com_id = com_id[1];
            if (com_likes.indexOf(',' + com_id + ',') != -1) {
                $(this).parent().parent().find('.comment-likes').find('a').remove();
            }
        });
        $('.comment-likes a').click(function() {
            var link = $(this);
            var com_id = link.attr('href');
            com_id = com_id.split('-');
            com_id = com_id[1];
            link.parent().find('.count').html('...');
            link.parent().parent().find('.comment-likes').find('a').hide();
            $.post(ajaxurl, {
                action: 'wpi_comment_like',
                id: com_id,
                act: 'like'
            }).done(function(data) {
                if (data.indexOf('error') == -1 && data != '0' && data != '-1') {
                    com_likes += ',' + com_id + ',';
                    setCookie('com_likes', com_likes, 365);
                    var count = Number(data);
                    var count_span = link.parent().find('.count');
                    if (typeof('count') !== 'undefined' && count_span) {
                        var title = count_span.attr('title');
                        if (title) {
                            title = title.split('___');
                            if (count < 2) {
                                count_span.html(data + ' ' + title[0]);
                            } else {
                                count_span.html(data + ' ' + title[1]);
                            }
                        } else {
                            count_span.html(data);
                        }
                    }
                    link.parent().parent().find('.comment-likes').find('a').remove();
                } else {
                    link.parent().parent().find('.comment-likes').find('a').show();
                }
            }).fail(function() {
                link.parent().parent().find('.comment-likes').find('a').show();
            });
        });
    });
});
jQuery(function($) {
    if (typeof(ajaxurl) == 'undefined') {
        ajaxurl = wpi_dynamic_js.ajaxurl;
    }
    var rating_type = $('.inner.wpi-user-rating').data('type');
    var rating_id = $('.inner.wpi-user-rating').data('pid');
    var rating_value = 0;
    var rated = false;
    var rated_list = getCookie('rated_list');
    if (typeof(rated_list) != 'undefined' && rated_list) {
        if (rated_list.indexOf(',' + rating_id + ',') != -1) {
            rating_value = getCookie('rated_' + rating_id);
            if (rating_value) {
                var show_rating_value = rating_value;
                if (rating_type === 'point') {
                    show_rating_value = show_rating_value / 10;
                    show_rating_value = show_rating_value.toFixed(1);
                }
                if (rating_type === 'stars') {
                    show_rating_value = Math.floor(show_rating_value / 20);
                }
                $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html(show_rating_value);
                $('.wpi-current-user-rating-wrapper').show();
                $('.inner.wpi-user-rating').css('cursor', 'text');
                $('.inner.wpi-user-rating[data-type="stars"] .value').css('cursor', 'text');
                rated = true;
            }
        }
    } else {
        rated_list = '';
    }
    $('.inner.wpi-user-rating .value-bar .active').each(function() {
        $(this).attr('data-width', $(this).css('width'));
    });
    $('.inner.wpi-user-rating').mousemove(function(e) {
        if (rated) {
            return;
        }
        if (rating_type === 'stars') {
            return;
        }
        var ptr_left = e.pageX;
        var ptr_top = e.pageY;
        $('.inner.wpi-user-rating .value-bar').each(function() {
            var cur_width = $(this).width();
            var cur_left = $(this).offset().left;
            var child_width = ptr_left - cur_left;
            var this_width = $(this).outerWidth();
            if (child_width > this_width) {
                child_width = this_width;
            }
            rating_value = Math.floor(child_width * 100 / cur_width);
            if (rating_value < 0) {
                rating_value = 0;
            }
            if (rating_value > 100) {
                rating_value = 100;
            }
            var show_rating_value = rating_value;
            if (rating_type === 'point') {
                show_rating_value = show_rating_value / 10;
                show_rating_value = show_rating_value.toFixed(1);
            }
            $(this).find('.active').css({
                'width': child_width + 'px'
            });
            $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html(show_rating_value);
            $('.wpi-current-user-rating-wrapper strong').hide();
            $('.wpi-current-user-rating-wrapper').show();
        });
    });
    $('.inner.wpi-user-rating').mouseout(function() {
        if (rated) {
            return;
        }
        var twidth = $(this).find('.active').attr('data-width');
        if (twidth) {
            $(this).find('.active').css('width', twidth);
        }
    });
    $('.inner.wpi-user-rating').click(function() {
        if (rated) {
            return;
        }
        if (rating_type === 'stars') {
            return;
        }
        rated = true;
        $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html('...');
        $.post(ajaxurl, {
            'action': 'wpi_user_post_rating',
            'id': rating_id,
            'value': rating_value
        }).done(function(data) {
            if (isNaN(data) || data == '0' || data == '-1') {
                rated = false;
                alert('Rating fail, some errors from server!');
                return;
            }
            var show_rating_value = rating_value;
            if (rating_type === 'point') {
                show_rating_value = show_rating_value / 10;
                show_rating_value = show_rating_value.toFixed(1);
            }
            $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html(show_rating_value);
            $('.wpi-current-user-rating-wrapper strong').show();
            $('.wpi-current-user-rating-wrapper').show();
            var show_rating_value = Number(data);
            if (rating_type === 'point') {
                show_rating_value = show_rating_value / 10;
                show_rating_value = show_rating_value.toFixed(1);
            }
            $('.wpi-total-user-rating-value').html(show_rating_value);
            var show_rating_votes = $('.wpi-total-user-rating-votes').html();
            show_rating_votes = Number(show_rating_votes);
            show_rating_votes++;
            $('.wpi-total-user-rating-votes').html(show_rating_votes);
            setCookie('rated_list', rated_list + ',' + rating_id + ',', 365);
            setCookie('rated_' + rating_id, rating_value, 365);
            $('.inner.wpi-user-rating').css('cursor', 'text');
        }).fail(function() {
            alert('Rating fail, some errors from server!');
            rated = false;
        });
    });
    $('.inner.wpi-user-rating[data-type="stars"] .value .stars-active').each(function() {
        $(this).attr('data-width', $(this).css('width'));
    });
    $('.inner.wpi-user-rating[data-type="stars"] .value').mousemove(function(e) {
        if (rated) {
            return;
        }
        var ptr_left = e.pageX;
        var ptr_top = e.pageY;
        var cur_width = $(this).width();
        var cur_left = $(this).offset().left;
        var child_width = ptr_left - cur_left;
        rating_value = Math.floor(child_width * 100 / cur_width);
        if (rating_value < 0) {
            rating_value = 0;
        }
        if (rating_value > 100) {
            rating_value = 100;
        }
        var show_rating_value = Math.floor(rating_value / 20) + 1;
        child_width = show_rating_value * 20;
        rating_value = show_rating_value * 20;
        $(this).find('.stars-active').css({
            'width': child_width + '%'
        });
        $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html(show_rating_value);
        $('.wpi-current-user-rating-wrapper strong').hide();
        $('.wpi-current-user-rating-wrapper').show();
    });
    $('.inner.wpi-user-rating[data-type="stars"] .value').mouseout(function() {
        if (rated) {
            return;
        }
        var twidth = $(this).find('.stars-active').attr('data-width');
        if (twidth) {
            $(this).find('.stars-active').css('width', twidth);
        }
    });
    $('.inner.wpi-user-rating[data-type="stars"] .value').click(function() {
        if (rated) {
            return;
        }
        rated = true;
        $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html('...');
        $.post(ajaxurl, {
            'action': 'wpi_user_post_rating',
            'id': rating_id,
            'value': rating_value
        }).done(function(data) {
            if (isNaN(data) || data == '0' || data == '-1') {
                rated = false;
                alert('Rating fail, some errors from server!');
                return;
            }
            var show_rating_value = Math.floor(rating_value / 20);
            $('.wpi-current-user-rating-wrapper .wpi-current-user-rating').html(show_rating_value);
            $('.wpi-current-user-rating-wrapper strong').show();
            $('.wpi-current-user-rating-wrapper').show();
            var show_rating_value = Number(data);
            show_rating_value = show_rating_value / 20;
            show_rating_value = show_rating_value.toFixed(2);
            $('.wpi-total-user-rating-value').html(show_rating_value);
            var show_rating_votes = $('.wpi-total-user-rating-votes').html();
            show_rating_votes = Number(show_rating_votes);
            show_rating_votes++;
            $('.wpi-total-user-rating-votes').html(show_rating_votes);
            setCookie('rated_list', rated_list + ',' + rating_id + ',', 365);
            setCookie('rated_' + rating_id, rating_value, 365);
            $('.inner.wpi-user-rating[data-type="stars"] .value').css('cursor', 'text');
        }).fail(function() {
            alert('Rating fail, some errors from server!');
            rated = false;
        });
    });
});
/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function(core) {
    if (typeof define == "function" && define.amd) { // AMD
        define("uikit", function() {
            var uikit = window.UIkit || core(window, window.jQuery, window.document);
            uikit.load = function(res, req, onload, config) {
                var resources = res.split(','),
                    load = [],
                    i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");
                if (!base) {
                    throw new Error("Please define base path to UIkit in the requirejs config.");
                }
                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base + '/components/' + resource);
                }
                req(load, function() {
                    onload(uikit);
                });
            };
            return uikit;
        });
    }
    if (!window.jQuery) {
        throw new Error("UIkit requires jQuery");
    }
    if (window && window.jQuery) {
        core(window, window.jQuery, window.document);
    }
})(function(global, $, doc) {
    "use strict";
    var UI = {},
        _UI = global.UIkit ? Object.create(global.UIkit) : undefined;
    UI.version = '2.26.4';
    UI.noConflict = function() {
        if (_UI) {
            global.UIkit = _UI;
            $.UIkit = _UI;
            $.fn.uk = _UI.fn;
        }
        return UI;
    };
    UI.prefix = function(str) {
        return str;
    };
    UI.$ = $;
    UI.$doc = UI.$(document);
    UI.$win = UI.$(window);
    UI.$html = UI.$('html');
    UI.support = {};
    UI.support.transition = (function() {
        var transitionEnd = (function() {
            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                },
                name;
            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());
        return transitionEnd && {
            end: transitionEnd
        };
    })();
    UI.support.animation = (function() {
        var animationEnd = (function() {
            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd oanimationend',
                    animation: 'animationend'
                },
                name;
            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());
        return animationEnd && {
            end: animationEnd
        };
    })();
    (function() {
        Date.now = Date.now || function() {
            return new Date().getTime();
        };
        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] ||
                window[vp + 'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
            ||
            !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() {
                        callback(lastTime = nextTime);
                    },
                    nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    }());
    UI.support.touch = (
        ('ontouchstart' in document) ||
        (global.DocumentTouch && document instanceof global.DocumentTouch) ||
        (global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0) || //IE 10
        (global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0) || //IE >=11
        false
    );
    UI.support.mutationobserver = (global.MutationObserver || global.WebKitMutationObserver || null);
    UI.Utils = {};
    UI.Utils.isFullscreen = function() {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
    };
    UI.Utils.str2json = function(str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                    .replace(/([\$\w]+)\s*:/g, function(_, $1) {
                        return '"' + $1 + '":';
                    })
                    .replace(/'([^']+)'/g, function(_, $1) {
                        return '"' + $1 + '"';
                    })
                );
            } else {
                return (new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));"))();
            }
        } catch (e) {
            return false;
        }
    };
    UI.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    UI.Utils.throttle = function(func, limit) {
        var wait = false;
        return function() {
            if (!wait) {
                func.call();
                wait = true;
                setTimeout(function() {
                    wait = false;
                }, limit);
            }
        }
    };
    UI.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;
        if (!selectorRegEx) return;
        setTimeout(function() {
            try {
                _ref = document.styleSheets;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    stylesheet = _ref[_i];
                    idxs = [];
                    stylesheet.cssRules = stylesheet.cssRules;
                    for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                        if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                            idxs.unshift(idx);
                        }
                    }
                    for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                        stylesheet.deleteRule(idxs[_k]);
                    }
                }
            } catch (_error) {}
        }, 0);
    };
    UI.Utils.isInView = function(element, options) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }
        var window_left = UI.$win.scrollLeft(),
            window_top = UI.$win.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;
        options = $.extend({
            topoffset: 0,
            leftoffset: 0
        }, options);
        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
            return true;
        } else {
            return false;
        }
    };
    UI.Utils.checkDisplay = function(context, initanimation) {
        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document),
            animated;
        if (context && !elements.length) {
            elements = $(context);
        }
        elements.trigger('display.uk.check');
        if (initanimation) {
            if (typeof(initanimation) != 'string') {
                initanimation = '[class*="uk-animation-"]';
            }
            elements.find(initanimation).each(function() {
                var ele = UI.$(this),
                    cls = ele.attr('class'),
                    anim = cls.match(/uk-animation-(.+)/);
                ele.removeClass(anim[0]).width();
                ele.addClass(anim[0]);
            });
        }
        return elements;
    };
    UI.Utils.options = function(string) {
        if ($.type(string) != 'string') return string;
        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{' + string + '}';
        }
        var start = (string ? string.indexOf("{") : -1),
            options = {};
        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {}
        }
        return options;
    };
    UI.Utils.animate = function(element, cls) {
        var d = $.Deferred();
        element = UI.$(element);
        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
            element.removeClass(cls);
            d.resolve();
        });
        element.css('display', '');
        return d.promise();
    };
    UI.Utils.uid = function(prefix) {
        return (prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
    };
    UI.Utils.template = function(str, data) {
        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
            i = 0,
            toc, cmd, prop, val, fn, output = [],
            openblocks = 0;
        while (i < tokens.length) {
            toc = tokens[i];
            if (toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
                i = i + 1;
                toc = tokens[i];
                cmd = toc[0];
                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0);
                switch (cmd) {
                    case '~':
                        output.push("for(var $i=0;$i<" + prop + ".length;$i++) { var $item = " + prop + "[$i];");
                        openblocks++;
                        break;
                    case ':':
                        output.push("for(var $key in " + prop + ") { var $val = " + prop + "[$key];");
                        openblocks++;
                        break;
                    case '#':
                        output.push("if(" + prop + ") {");
                        openblocks++;
                        break;
                    case '^':
                        output.push("if(!" + prop + ") {");
                        openblocks++;
                        break;
                    case '/':
                        output.push("}");
                        openblocks--;
                        break;
                    case '!':
                        output.push("__ret.push(" + prop + ");");
                        break;
                    default:
                        output.push("__ret.push(escape(" + prop + "));");
                        break;
                }
            } else {
                output.push("__ret.push('" + toc.replace(/\'/g, "\\'") + "');");
            }
            i = i + 1;
        }
        fn = new Function('$data', [
            'var __ret = [];',
            'try {',
            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
            '}catch(e){__ret = [e.message];}',
            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
        ].join("\n"));
        return data ? fn(data) : fn;
    };
    UI.Utils.events = {};
    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';
    global.UIkit = UI;
    UI.fn = function(command, options) {
        var args = arguments,
            cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
            component = cmd[1],
            method = cmd[2];
        if (!UI[component]) {
            $.error("UIkit component [" + component + "] does not exist.");
            return this;
        }
        return this.each(function() {
            var $this = $(this),
                data = $this.data(component);
            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };
    $.UIkit = UI;
    $.fn.uk = UI.fn;
    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";
    UI.components = {};
    UI.component = function(name, def) {
        var fn = function(element, options) {
            var $this = this;
            this.UIkit = UI;
            this.element = element ? UI.$(element) : null;
            this.options = $.extend(true, {}, this.defaults, options);
            this.plugins = {};
            if (this.element) {
                this.element.data(name, this);
            }
            this.init();
            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {
                if (fn.plugins[plugin].init) {
                    fn.plugins[plugin].init($this);
                    $this.plugins[plugin] = true;
                }
            });
            this.trigger('init.uk.component', [name, this]);
            return this;
        };
        fn.plugins = {};
        $.extend(true, fn.prototype, {
            defaults: {
                plugins: []
            },
            boot: function() {},
            init: function() {},
            on: function(a1, a2, a3) {
                return UI.$(this.element || this).on(a1, a2, a3);
            },
            one: function(a1, a2, a3) {
                return UI.$(this.element || this).one(a1, a2, a3);
            },
            off: function(evt) {
                return UI.$(this.element || this).off(evt);
            },
            trigger: function(evt, params) {
                return UI.$(this.element || this).trigger(evt, params);
            },
            find: function(selector) {
                return UI.$(this.element ? this.element : []).find(selector);
            },
            proxy: function(obj, methods) {
                var $this = this;
                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = function() {
                        return obj[method].apply(obj, arguments);
                    };
                });
            },
            mixin: function(obj, methods) {
                var $this = this;
                methods.split(' ').forEach(function(method) {
                    if (!$this[method]) $this[method] = obj[method].bind($this);
                });
            },
            option: function() {
                if (arguments.length == 1) {
                    return this.options[arguments[0]] || undefined;
                } else if (arguments.length == 2) {
                    this.options[arguments[0]] = arguments[1];
                }
            }
        }, def);
        this.components[name] = fn;
        this[name] = function() {
            var element, options;
            if (arguments.length) {
                switch (arguments.length) {
                    case 1:
                        if (typeof arguments[0] === "string" || arguments[0].nodeType || arguments[0] instanceof jQuery) {
                            element = $(arguments[0]);
                        } else {
                            options = arguments[0];
                        }
                        break;
                    case 2:
                        element = $(arguments[0]);
                        options = arguments[1];
                        break;
                }
            }
            if (element && element.data(name)) {
                return element.data(name);
            }
            return (new UI.components[name](element, options));
        };
        if (UI.domready) {
            UI.component.boot(name);
        }
        return fn;
    };
    UI.plugin = function(component, name, def) {
        this.components[component].plugins[name] = def;
    };
    UI.component.boot = function(name) {
        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
            UI.components[name].prototype.boot.apply(UI, []);
            UI.components[name].booted = true;
        }
    };
    UI.component.bootComponents = function() {
        for (var component in UI.components) {
            UI.component.boot(component);
        }
    };
    UI.domObservers = [];
    UI.domready = false;
    UI.ready = function(fn) {
        UI.domObservers.push(fn);
        if (UI.domready) {
            fn(document);
        }
    };
    UI.on = function(a1, a2, a3) {
        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
        }
        return UI.$doc.on(a1, a2, a3);
    };
    UI.one = function(a1, a2, a3) {
        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
            return UI.$doc;
        }
        return UI.$doc.one(a1, a2, a3);
    };
    UI.trigger = function(evt, params) {
        return UI.$doc.trigger(evt, params);
    };
    UI.domObserve = function(selector, fn) {
        if (!UI.support.mutationobserver) return;
        fn = fn || function() {};
        UI.$(selector).each(function() {
            var element = this,
                $element = UI.$(element);
            if ($element.data('observer')) {
                return;
            }
            try {
                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
                    fn.apply(element, []);
                    $element.trigger('changed.uk.dom');
                }, 50), {
                    childList: true,
                    subtree: true
                });
                observer.observe(element, {
                    childList: true,
                    subtree: true
                });
                $element.data('observer', observer);
            } catch (e) {}
        });
    };
    UI.init = function(root) {
        root = root || document;
        UI.domObservers.forEach(function(fn) {
            fn(root);
        });
    };
    UI.on('domready.uk.dom', function() {
        UI.init();
        if (UI.domready) UI.Utils.checkDisplay();
    });
    document.addEventListener('DOMContentLoaded', function() {
        var domReady = function() {
            UI.$body = UI.$('body');
            UI.trigger('beforeready.uk.dom');
            UI.component.bootComponents();
            var rafToken = requestAnimationFrame((function() {
                var memory = {
                    dir: {
                        x: 0,
                        y: 0
                    },
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
                var fn = function() {
                    var wpxo = window.pageXOffset;
                    var wpyo = window.pageYOffset;
                    if (memory.x != wpxo || memory.y != wpyo) {
                        if (wpxo != memory.x) {
                            memory.dir.x = wpxo > memory.x ? 1 : -1;
                        } else {
                            memory.dir.x = 0;
                        }
                        if (wpyo != memory.y) {
                            memory.dir.y = wpyo > memory.y ? 1 : -1;
                        } else {
                            memory.dir.y = 0;
                        }
                        memory.x = wpxo;
                        memory.y = wpyo;
                        UI.$doc.trigger('scrolling.uk.document', [{
                            "dir": {
                                "x": memory.dir.x,
                                "y": memory.dir.y
                            },
                            "x": wpxo,
                            "y": wpyo
                        }]);
                    }
                    cancelAnimationFrame(rafToken);
                    rafToken = requestAnimationFrame(fn);
                };
                if (UI.support.touch) {
                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
                }
                if (memory.x || memory.y) fn();
                return fn;
            })());
            UI.trigger('domready.uk.dom');
            if (UI.support.touch) {
                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
                    UI.$win.on('load orientationchange resize', UI.Utils.debounce((function() {
                        var fn = function() {
                            $('.uk-height-viewport').css('height', window.innerHeight);
                            return fn;
                        };
                        return fn();
                    })(), 100));
                }
            }
            UI.trigger('afterready.uk.dom');
            UI.domready = true;
            if (UI.support.mutationobserver) {
                var initFn = UI.Utils.debounce(function() {
                    requestAnimationFrame(function() {
                        UI.init(document.body);
                    });
                }, 10);
                (new UI.support.mutationobserver(function(mutations) {
                    var init = false;
                    mutations.every(function(mutation) {
                        if (mutation.type != 'childList') return true;
                        for (var i = 0, node; i < mutation.addedNodes.length; ++i) {
                            node = mutation.addedNodes[i];
                            if (node.outerHTML && node.outerHTML.indexOf('data-uk-') !== -1) {
                                return (init = true) && false;
                            }
                        }
                        return true;
                    });
                    if (init) initFn();
                })).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };
        if (document.readyState == 'complete' || document.readyState == 'interactive') {
            setTimeout(domReady);
        }
        return domReady;
    }());
    UI.$html.addClass(UI.support.touch ? "uk-touch" : "uk-notouch");
    if (UI.support.touch) {
        var hoverset = false,
            exclude,
            hovercls = 'uk-hover',
            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';
        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function() {
            if (hoverset) $('.' + hovercls).removeClass(hovercls);
            hoverset = $(this).addClass(hovercls);
        }).on('mouseleave touchend MSPointerUp pointerup', function(e) {
            exclude = $(e.target).parents(selector);
            if (hoverset) {
                hoverset.not(exclude).removeClass(hovercls);
            }
        });
    }
    return UI;
});;
(function($) {
    if ($.fn.swipeLeft) {
        return;
    }
    var touch = {},
        touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750,
        gesture;

    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
    }

    function longTap() {
        longTapTimeout = null;
        if (touch.last) {
            if (touch.el !== undefined) touch.el.trigger('longTap');
            touch = {};
        }
    }

    function cancelLongTap() {
        if (longTapTimeout) clearTimeout(longTapTimeout);
        longTapTimeout = null;
    }

    function cancelAll() {
        if (touchTimeout) clearTimeout(touchTimeout);
        if (tapTimeout) clearTimeout(tapTimeout);
        if (swipeTimeout) clearTimeout(swipeTimeout);
        if (longTapTimeout) clearTimeout(longTapTimeout);
        touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
        touch = {};
    }

    function isPrimaryTouch(event) {
        return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
    }
    $(function() {
        var now, delta, deltaX = 0,
            deltaY = 0,
            firstTouch;
        if ('MSGesture' in window) {
            gesture = new MSGesture();
            gesture.target = document.body;
        }
        $(document)
            .on('MSGestureEnd gestureend', function(e) {
                var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;
                if (swipeDirectionFromVelocity && touch.el !== undefined) {
                    touch.el.trigger('swipe');
                    touch.el.trigger('swipe' + swipeDirectionFromVelocity);
                }
            })
            .on('touchstart MSPointerDown pointerdown', function(e) {
                if (e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;
                firstTouch = (e.type == 'MSPointerDown' || e.type == 'pointerdown') ? e : e.originalEvent.touches[0];
                now = Date.now();
                delta = now - (touch.last || now);
                touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
                if (touchTimeout) clearTimeout(touchTimeout);
                touch.x1 = firstTouch.pageX;
                touch.y1 = firstTouch.pageY;
                if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
                touch.last = now;
                longTapTimeout = setTimeout(longTap, longTapDelay);
                if (gesture && (e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart')) {
                    gesture.addPointer(e.originalEvent.pointerId);
                }
            })
            .on('touchmove MSPointerMove pointermove', function(e) {
                if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;
                firstTouch = (e.type == 'MSPointerMove' || e.type == 'pointermove') ? e : e.originalEvent.touches[0];
                cancelLongTap();
                touch.x2 = firstTouch.pageX;
                touch.y2 = firstTouch.pageY;
                deltaX += Math.abs(touch.x1 - touch.x2);
                deltaY += Math.abs(touch.y1 - touch.y2);
            })
            .on('touchend MSPointerUp pointerup', function(e) {
                if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;
                cancelLongTap();
                if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {
                    swipeTimeout = setTimeout(function() {
                        if (touch.el !== undefined) {
                            touch.el.trigger('swipe');
                            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
                        }
                        touch = {};
                    }, 0);
                } else if ('last' in touch) {
                    if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
                        tapTimeout = setTimeout(function() {
                            var event = $.Event('tap');
                            event.cancelTouch = cancelAll;
                            if (touch.el !== undefined) touch.el.trigger(event);
                            if (touch.isDoubleTap) {
                                if (touch.el !== undefined) touch.el.trigger('doubleTap');
                                touch = {};
                            } else {
                                touchTimeout = setTimeout(function() {
                                    touchTimeout = null;
                                    if (touch.el !== undefined) touch.el.trigger('singleTap');
                                    touch = {};
                                }, 250);
                            }
                        }, 0);
                    } else {
                        touch = {};
                    }
                    deltaX = deltaY = 0;
                }
            })
            .on('touchcancel MSPointerCancel', cancelAll);
        $(window).on('scroll', cancelAll);
    });
    ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName) {
        $.fn[eventName] = function(callback) {
            return $(this).on(eventName, callback);
        };
    });
})(jQuery);
(function(UI) {
    "use strict";
    var stacks = [];
    UI.component('stackMargin', {
        defaults: {
            cls: 'uk-margin-small-top',
            rowfirst: false,
            observe: false
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-margin]", context).each(function() {
                    var ele = UI.$(this);
                    if (!ele.data("stackMargin")) {
                        UI.stackMargin(ele, UI.Utils.options(ele.attr("data-uk-margin")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            UI.$win.on('resize orientationchange', (function() {
                var fn = function() {
                    $this.process();
                };
                UI.$(function() {
                    fn();
                    UI.$win.on("load", fn);
                });
                return UI.Utils.debounce(fn, 20);
            })());
            this.on("display.uk.check", function(e) {
                if (this.element.is(":visible")) this.process();
            }.bind(this));
            if (this.options.observe) {
                UI.domObserve(this.element, function(e) {
                    if ($this.element.is(":visible")) $this.process();
                });
            }
            stacks.push(this);
        },
        process: function() {
            var $this = this,
                columns = this.element.children();
            UI.Utils.stackMargin(columns, this.options);
            if (!this.options.rowfirst || !columns.length) {
                return this;
            }
            var group = {},
                minleft = false;
            columns.removeClass(this.options.rowfirst).each(function(offset, $ele) {
                $ele = UI.$(this);
                if (this.style.display != 'none') {
                    offset = $ele.offset().left;
                    ((group[offset] = group[offset] || []) && group[offset]).push(this);
                    minleft = minleft === false ? offset : Math.min(minleft, offset);
                }
            });
            UI.$(group[minleft]).addClass(this.options.rowfirst);
            return this;
        }
    });
    (function() {
        var elements = [],
            check = function(ele) {
                if (!ele.is(':visible')) return;
                var width = ele.parent().width(),
                    iwidth = ele.data('width'),
                    ratio = (width / iwidth),
                    height = Math.floor(ratio * ele.data('height'));
                ele.css({
                    'height': (width < iwidth) ? height : ele.data('height')
                });
            };
        UI.component('responsiveElement', {
            defaults: {},
            boot: function() {
                UI.ready(function(context) {
                    UI.$("iframe.uk-responsive-width, [data-uk-responsive]", context).each(function() {
                        var ele = UI.$(this),
                            obj;
                        if (!ele.data("responsiveElement")) {
                            obj = UI.responsiveElement(ele, {});
                        }
                    });
                });
            },
            init: function() {
                var ele = this.element;
                if (ele.attr('width') && ele.attr('height')) {
                    ele.data({
                        'width': ele.attr('width'),
                        'height': ele.attr('height')
                    }).on('display.uk.check', function() {
                        check(ele);
                    });
                    check(ele);
                    elements.push(ele);
                }
            }
        });
        UI.$win.on('resize load', UI.Utils.debounce(function() {
            elements.forEach(function(ele) {
                check(ele);
            });
        }, 15));
    })();
    UI.Utils.stackMargin = function(elements, options) {
        options = UI.$.extend({
            'cls': 'uk-margin-small-top'
        }, options);
        elements = UI.$(elements).removeClass(options.cls);
        var min = false;
        elements.each(function(offset, height, pos, $ele) {
            $ele = UI.$(this);
            if ($ele.css('display') != 'none') {
                offset = $ele.offset();
                height = $ele.outerHeight();
                pos = offset.top + height;
                $ele.data({
                    'ukMarginPos': pos,
                    'ukMarginTop': offset.top
                });
                if (min === false || (offset.top < min.top)) {
                    min = {
                        top: offset.top,
                        left: offset.left,
                        pos: pos
                    };
                }
            }
        }).each(function($ele) {
            $ele = UI.$(this);
            if ($ele.css('display') != 'none' && $ele.data('ukMarginTop') > min.top && $ele.data('ukMarginPos') > min.pos) {
                $ele.addClass(options.cls);
            }
        });
    };
    UI.Utils.matchHeights = function(elements, options) {
        elements = UI.$(elements).css('min-height', '');
        options = UI.$.extend({
            row: true
        }, options);
        var matchHeights = function(group) {
            if (group.length < 2) return;
            var max = 0;
            group.each(function() {
                max = Math.max(max, UI.$(this).outerHeight());
            }).each(function() {
                var element = UI.$(this),
                    height = max - (element.css('box-sizing') == 'border-box' ? 0 : (element.outerHeight() - element.height()));
                element.css('min-height', height + 'px');
            });
        };
        if (options.row) {
            elements.first().width(); // force redraw
            setTimeout(function() {
                var lastoffset = false,
                    group = [];
                elements.each(function() {
                    var ele = UI.$(this),
                        offset = ele.offset().top;
                    if (offset != lastoffset && group.length) {
                        matchHeights(UI.$(group));
                        group = [];
                        offset = ele.offset().top;
                    }
                    group.push(ele);
                    lastoffset = offset;
                });
                if (group.length) {
                    matchHeights(UI.$(group));
                }
            }, 0);
        } else {
            matchHeights(elements);
        }
    };
    (function(cacheSvgs) {
        UI.Utils.inlineSvg = function(selector, root) {
            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function() {
                var img = UI.$(this),
                    src = img.attr('src');
                if (!cacheSvgs[src]) {
                    var d = UI.$.Deferred();
                    UI.$.get(src, {
                        nc: Math.random()
                    }, function(data) {
                        d.resolve(UI.$(data).find('svg'));
                    });
                    cacheSvgs[src] = d.promise();
                }
                cacheSvgs[src].then(function(svg) {
                    var $svg = UI.$(svg).clone();
                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
                    if (img.attr('style')) $svg.attr('style', img.attr('style'));
                    if (img.attr('width')) {
                        $svg.attr('width', img.attr('width'));
                        if (!img.attr('height')) $svg.removeAttr('height');
                    }
                    if (img.attr('height')) {
                        $svg.attr('height', img.attr('height'));
                        if (!img.attr('width')) $svg.removeAttr('width');
                    }
                    img.replaceWith($svg);
                });
            });
        };
        UI.ready(function(context) {
            UI.Utils.inlineSvg('[data-uk-svg]', context);
        });
    })({});
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('smoothScroll', {
        boot: function() {
            UI.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("smoothScroll")) {
                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr("data-uk-smooth-scroll")));
                    ele.trigger("click");
                }
                return false;
            });
        },
        init: function() {
            var $this = this;
            this.on("click", function(e) {
                e.preventDefault();
                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$("body"), $this.options);
            });
        }
    });

    function scrollToElement(ele, options) {
        options = UI.$.extend({
            duration: 1000,
            transition: 'easeOutExpo',
            offset: 0,
            complete: function() {}
        }, options);
        var target = ele.offset().top - options.offset,
            docheight = UI.$doc.height(),
            winheight = window.innerHeight;
        if ((target + winheight) > docheight) {
            target = docheight - winheight;
        }
        UI.$("html,body").stop().animate({
            scrollTop: target
        }, options.duration, options.transition).promise().done(options.complete);
    }
    UI.Utils.scrollToElement = scrollToElement;
    if (!UI.$.easing.easeOutExpo) {
        UI.$.easing.easeOutExpo = function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
    }
})(UIkit);
(function(UI) {
    "use strict";
    var $win = UI.$win,
        $doc = UI.$doc,
        scrollspies = [],
        checkScrollSpy = function() {
            for (var i = 0; i < scrollspies.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
            }
        };
    UI.component('scrollspy', {
        defaults: {
            "target": false,
            "cls": "uk-scrollspy-inview",
            "initcls": "uk-scrollspy-init-inview",
            "topoffset": 0,
            "leftoffset": 0,
            "repeat": false,
            "delay": 0
        },
        boot: function() {
            $doc.on("scrolling.uk.document", checkScrollSpy);
            $win.on("load resize orientationchange", UI.Utils.debounce(checkScrollSpy, 50));
            UI.ready(function(context) {
                UI.$("[data-uk-scrollspy]", context).each(function() {
                    var element = UI.$(this);
                    if (!element.data("scrollspy")) {
                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr("data-uk-scrollspy")));
                    }
                });
            });
        },
        init: function() {
            var $this = this,
                inviewstate, initinview, togglecls = this.options.cls.split(/,/),
                fn = function() {
                    var elements = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                        delayIdx = elements.length === 1 ? 1 : 0,
                        toggleclsIdx = 0;
                    elements.each(function(idx) {
                        var element = UI.$(this),
                            inviewstate = element.data('inviewstate'),
                            inview = UI.Utils.isInView(element, $this.options),
                            toggle = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();
                        if (inview && !inviewstate && !element.data('scrollspy-idle')) {
                            if (!initinview) {
                                element.addClass($this.options.initcls);
                                $this.offset = element.offset();
                                initinview = true;
                                element.trigger("init.uk.scrollspy");
                            }
                            element.data('scrollspy-idle', setTimeout(function() {
                                element.addClass("uk-scrollspy-inview").toggleClass(toggle).width();
                                element.trigger("inview.uk.scrollspy");
                                element.data('scrollspy-idle', false);
                                element.data('inviewstate', true);
                            }, $this.options.delay * delayIdx));
                            delayIdx++;
                        }
                        if (!inview && inviewstate && $this.options.repeat) {
                            if (element.data('scrollspy-idle')) {
                                clearTimeout(element.data('scrollspy-idle'));
                                element.data('scrollspy-idle', false);
                            }
                            element.removeClass("uk-scrollspy-inview").toggleClass(toggle);
                            element.data('inviewstate', false);
                            element.trigger("outview.uk.scrollspy");
                        }
                        toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;
                    });
                };
            fn();
            this.check = fn;
            scrollspies.push(this);
        }
    });
    var scrollspynavs = [],
        checkScrollSpyNavs = function() {
            for (var i = 0; i < scrollspynavs.length; i++) {
                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
            }
        };
    UI.component('scrollspynav', {
        defaults: {
            "cls": 'uk-active',
            "closest": false,
            "topoffset": 0,
            "leftoffset": 0,
            "smoothscroll": false
        },
        boot: function() {
            $doc.on("scrolling.uk.document", checkScrollSpyNavs);
            $win.on("resize orientationchange", UI.Utils.debounce(checkScrollSpyNavs, 50));
            UI.ready(function(context) {
                UI.$("[data-uk-scrollspy-nav]", context).each(function() {
                    var element = UI.$(this);
                    if (!element.data("scrollspynav")) {
                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr("data-uk-scrollspy-nav")));
                    }
                });
            });
        },
        init: function() {
            var ids = [],
                links = this.find("a[href^='#']").each(function() {
                    if (this.getAttribute("href").trim() !== '#') ids.push(this.getAttribute("href"));
                }),
                targets = UI.$(ids.join(",")),
                clsActive = this.options.cls,
                clsClosest = this.options.closest || this.options.closest;
            var $this = this,
                inviews, fn = function() {
                    inviews = [];
                    for (var i = 0; i < targets.length; i++) {
                        if (UI.Utils.isInView(targets.eq(i), $this.options)) {
                            inviews.push(targets.eq(i));
                        }
                    }
                    if (inviews.length) {
                        var navitems,
                            scrollTop = $win.scrollTop(),
                            target = (function() {
                                for (var i = 0; i < inviews.length; i++) {
                                    if (inviews[i].offset().top - $this.options.topoffset >= scrollTop) {
                                        return inviews[i];
                                    }
                                }
                            })();
                        if (!target) return;
                        if ($this.options.closest) {
                            links.blur().closest(clsClosest).removeClass(clsActive);
                            navitems = links.filter("a[href='#" + target.attr("id") + "']").closest(clsClosest).addClass(clsActive);
                        } else {
                            navitems = links.removeClass(clsActive).filter("a[href='#" + target.attr("id") + "']").addClass(clsActive);
                        }
                        $this.element.trigger("inview.uk.scrollspynav", [target, navitems]);
                    }
                };
            if (this.options.smoothscroll && UI.smoothScroll) {
                links.each(function() {
                    UI.smoothScroll(this, $this.options.smoothscroll);
                });
            }
            fn();
            this.element.data("scrollspynav", this);
            this.check = fn;
            scrollspynavs.push(this);
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    var toggles = [];
    UI.component('toggle', {
        defaults: {
            target: false,
            cls: 'uk-hidden',
            animation: false,
            duration: 200
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-toggle]", context).each(function() {
                    var ele = UI.$(this);
                    if (!ele.data("toggle")) {
                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr("data-uk-toggle")));
                    }
                });
                setTimeout(function() {
                    toggles.forEach(function(toggle) {
                        toggle.getToggles();
                    });
                }, 0);
            });
        },
        init: function() {
            var $this = this;
            this.aria = (this.options.cls.indexOf('uk-hidden') !== -1);
            this.getToggles();
            this.on("click", function(e) {
                if ($this.element.is('a[href="#"]')) e.preventDefault();
                $this.toggle();
            });
            toggles.push(this);
        },
        toggle: function() {
            if (!this.totoggle.length) return;
            if (this.options.animation && UI.support.animation) {
                var $this = this,
                    animations = this.options.animation.split(',');
                if (animations.length == 1) {
                    animations[1] = animations[0];
                }
                animations[0] = animations[0].trim();
                animations[1] = animations[1].trim();
                this.totoggle.css('animation-duration', this.options.duration + 'ms');
                this.totoggle.each(function() {
                    var ele = UI.$(this);
                    if (ele.hasClass($this.options.cls)) {
                        ele.toggleClass($this.options.cls);
                        UI.Utils.animate(ele, animations[0]).then(function() {
                            ele.css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    } else {
                        UI.Utils.animate(this, animations[1] + ' uk-animation-reverse').then(function() {
                            ele.toggleClass($this.options.cls).css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    }
                });
            } else {
                this.totoggle.toggleClass(this.options.cls);
                UI.Utils.checkDisplay(this.totoggle);
            }
            this.updateAria();
        },
        getToggles: function() {
            this.totoggle = this.options.target ? UI.$(this.options.target) : [];
            this.updateAria();
        },
        updateAria: function() {
            if (this.aria && this.totoggle.length) {
                this.totoggle.each(function() {
                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
                });
            }
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('alert', {
        defaults: {
            "fade": true,
            "duration": 200,
            "trigger": ".uk-alert-close"
        },
        boot: function() {
            UI.$html.on("click.alert.uikit", "[data-uk-alert]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("alert")) {
                    var alert = UI.alert(ele, UI.Utils.options(ele.attr("data-uk-alert")));
                    if (UI.$(e.target).is(alert.options.trigger)) {
                        e.preventDefault();
                        alert.close();
                    }
                }
            });
        },
        init: function() {
            var $this = this;
            this.on("click", this.options.trigger, function(e) {
                e.preventDefault();
                $this.close();
            });
        },
        close: function() {
            var element = this.trigger("close.uk.alert"),
                removeElement = function() {
                    this.trigger("closed.uk.alert").remove();
                }.bind(this);
            if (this.options.fade) {
                element.css("overflow", "hidden").css("max-height", element.height()).animate({
                    "height": 0,
                    "opacity": 0,
                    "padding-top": 0,
                    "padding-bottom": 0,
                    "margin-top": 0,
                    "margin-bottom": 0
                }, this.options.duration, removeElement);
            } else {
                removeElement();
            }
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('buttonRadio', {
        defaults: {
            "activeClass": 'uk-active',
            "target": ".uk-button"
        },
        boot: function() {
            UI.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("buttonRadio")) {
                    var obj = UI.buttonRadio(ele, UI.Utils.options(ele.attr("data-uk-button-radio"))),
                        target = UI.$(e.target);
                    if (target.is(obj.options.target)) {
                        target.trigger("click");
                    }
                }
            });
        },
        init: function() {
            var $this = this;
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');
            this.on("click", this.options.target, function(e) {
                var ele = UI.$(this);
                if (ele.is('a[href="#"]')) e.preventDefault();
                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
                ele.addClass($this.options.activeClass);
                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
                ele.attr('aria-checked', 'true');
                $this.trigger("change.uk.button", [ele]);
            });
        },
        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });
    UI.component('buttonCheckbox', {
        defaults: {
            "activeClass": 'uk-active',
            "target": ".uk-button"
        },
        boot: function() {
            UI.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("buttonCheckbox")) {
                    var obj = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr("data-uk-button-checkbox"))),
                        target = UI.$(e.target);
                    if (target.is(obj.options.target)) {
                        target.trigger("click");
                    }
                }
            });
        },
        init: function() {
            var $this = this;
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');
            this.on("click", this.options.target, function(e) {
                var ele = UI.$(this);
                if (ele.is('a[href="#"]')) e.preventDefault();
                ele.toggleClass($this.options.activeClass).blur();
                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));
                $this.trigger("change.uk.button", [ele]);
            });
        },
        getSelected: function() {
            return this.find('.' + this.options.activeClass);
        }
    });
    UI.component('button', {
        defaults: {},
        boot: function() {
            UI.$html.on("click.button.uikit", "[data-uk-button]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("button")) {
                    var obj = UI.button(ele, UI.Utils.options(ele.attr("data-uk-button")));
                    ele.trigger("click");
                }
            });
        },
        init: function() {
            var $this = this;
            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));
            this.on("click", function(e) {
                if ($this.element.is('a[href="#"]')) e.preventDefault();
                $this.toggle();
                $this.trigger("change.uk.button", [$this.element.blur().hasClass("uk-active")]);
            });
        },
        toggle: function() {
            this.element.toggleClass("uk-active");
            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    var active = false,
        hoverIdle, flips = {
            'x': {
                "bottom-left": 'bottom-right',
                "bottom-right": 'bottom-left',
                "bottom-center": 'bottom-center',
                "top-left": 'top-right',
                "top-right": 'top-left',
                "top-center": 'top-center',
                "left-top": 'right-top',
                "left-bottom": 'right-bottom',
                "left-center": 'right-center',
                "right-top": 'left-top',
                "right-bottom": 'left-bottom',
                "right-center": 'left-center'
            },
            'y': {
                "bottom-left": 'top-left',
                "bottom-right": 'top-right',
                "bottom-center": 'top-center',
                "top-left": 'bottom-left',
                "top-right": 'bottom-right',
                "top-center": 'bottom-center',
                "left-top": 'left-bottom',
                "left-bottom": 'left-top',
                "left-center": 'left-center',
                "right-top": 'right-bottom',
                "right-bottom": 'right-top',
                "right-center": 'right-center'
            },
            'xy': {
                "bottom-left": 'top-right',
                "bottom-right": 'top-left',
                "bottom-center": 'top-center',
                "top-left": 'bottom-right',
                "top-right": 'bottom-left',
                "top-center": 'bottom-center',
                "left-top": 'right-bottom',
                "left-bottom": 'right-top',
                "left-center": 'right-center',
                "right-top": 'left-bottom',
                "right-bottom": 'left-top',
                "right-center": 'left-center'
            }
        };
    UI.component('dropdown', {
        defaults: {
            'mode': 'hover',
            'pos': 'bottom-left',
            'offset': 0,
            'remaintime': 800,
            'justify': false,
            'boundary': UI.$win,
            'delay': 0,
            'dropdownSelector': '.uk-dropdown,.uk-dropdown-blank',
            'hoverDelayIdle': 250,
            'preventflip': false
        },
        remainIdle: false,
        boot: function() {
            var triggerevent = UI.support.touch ? "click" : "mouseenter";
            UI.$html.on(triggerevent + ".dropdown.uikit", "[data-uk-dropdown]", function(e) {
                var ele = UI.$(this);
                if (!ele.data("dropdown")) {
                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr("data-uk-dropdown")));
                    if (triggerevent == "click" || (triggerevent == "mouseenter" && dropdown.options.mode == "hover")) {
                        dropdown.element.trigger(triggerevent);
                    }
                    if (dropdown.element.find(dropdown.options.dropdownSelector).length) {
                        e.preventDefault();
                    }
                }
            });
        },
        init: function() {
            var $this = this;
            this.dropdown = this.find(this.options.dropdownSelector);
            this.offsetParent = this.dropdown.parents().filter(function() {
                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
            }).slice(0, 1);
            this.centered = this.dropdown.hasClass('uk-dropdown-center');
            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
            this.boundary = UI.$(this.options.boundary);
            if (!this.boundary.length) {
                this.boundary = UI.$win;
            }
            if (this.dropdown.hasClass('uk-dropdown-up')) {
                this.options.pos = 'top-left';
            }
            if (this.dropdown.hasClass('uk-dropdown-flip')) {
                this.options.pos = this.options.pos.replace('left', 'right');
            }
            if (this.dropdown.hasClass('uk-dropdown-center')) {
                this.options.pos = this.options.pos.replace(/(left|right)/, 'center');
            }
            this.element.attr('aria-haspopup', 'true');
            this.element.attr('aria-expanded', this.element.hasClass("uk-open"));
            if (this.options.mode == "click" || UI.support.touch) {
                this.on("click.uk.dropdown", function(e) {
                    var $target = UI.$(e.target);
                    if (!$target.parents($this.options.dropdownSelector).length) {
                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || ($this.dropdown.length && !$this.dropdown.is(":visible"))) {
                            e.preventDefault();
                        }
                        $target.blur();
                    }
                    if (!$this.element.hasClass('uk-open')) {
                        $this.show();
                    } else {
                        if (!$this.dropdown.find(e.target).length || $target.is(".uk-dropdown-close") || $target.parents(".uk-dropdown-close").length) {
                            $this.hide();
                        }
                    }
                });
            } else {
                this.on("mouseenter", function(e) {
                    $this.trigger('pointerenter.uk.dropdown', [$this]);
                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }
                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }
                    if (active && active == $this) {
                        return;
                    }
                    if (active && active != $this) {
                        hoverIdle = setTimeout(function() {
                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                        }, $this.options.hoverDelayIdle);
                    } else {
                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                    }
                }).on("mouseleave", function() {
                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }
                    $this.remainIdle = setTimeout(function() {
                        if (active && active == $this) $this.hide();
                    }, $this.options.remaintime);
                    $this.trigger('pointerleave.uk.dropdown', [$this]);
                }).on("click", function(e) {
                    var $target = UI.$(e.target);
                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }
                    if (active && active == $this) {
                        if (!$this.dropdown.find(e.target).length || $target.is(".uk-dropdown-close") || $target.parents(".uk-dropdown-close").length) {
                            $this.hide();
                        }
                        return;
                    }
                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")) {
                        e.preventDefault();
                    }
                    $this.show();
                });
            }
        },
        show: function() {
            UI.$html.off("click.outer.dropdown");
            if (active && active != this) {
                active.hide(true);
            }
            if (hoverIdle) {
                clearTimeout(hoverIdle);
            }
            this.trigger('beforeshow.uk.dropdown', [this]);
            this.checkDimensions();
            this.element.addClass('uk-open');
            this.element.attr('aria-expanded', 'true');
            this.trigger('show.uk.dropdown', [this]);
            UI.Utils.checkDisplay(this.dropdown, true);
            active = this;
            this.registerOuterClick();
        },
        hide: function(force) {
            this.trigger('beforehide.uk.dropdown', [this, force]);
            this.element.removeClass('uk-open');
            if (this.remainIdle) {
                clearTimeout(this.remainIdle);
            }
            this.remainIdle = false;
            this.element.attr('aria-expanded', 'false');
            this.trigger('hide.uk.dropdown', [this, force]);
            if (active == this) active = false;
        },
        registerOuterClick: function() {
            var $this = this;
            UI.$html.off("click.outer.dropdown");
            setTimeout(function() {
                UI.$html.on("click.outer.dropdown", function(e) {
                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }
                    var $target = UI.$(e.target);
                    if (active == $this && !$this.element.find(e.target).length) {
                        $this.hide(true);
                        UI.$html.off("click.outer.dropdown");
                    }
                });
            }, 10);
        },
        checkDimensions: function() {
            if (!this.dropdown.length) return;
            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack').css({
                'top-left': '',
                'left': '',
                'margin-left': '',
                'margin-right': ''
            });
            if (this.justified && this.justified.length) {
                this.dropdown.css("min-width", "");
            }
            var $this = this,
                pos = UI.$.extend({}, this.offsetParent.offset(), {
                    width: this.offsetParent[0].offsetWidth,
                    height: this.offsetParent[0].offsetHeight
                }),
                posoffset = this.options.offset,
                dropdown = this.dropdown,
                offset = dropdown.show().offset() || {
                    left: 0,
                    top: 0
                },
                width = dropdown.outerWidth(),
                height = dropdown.outerHeight(),
                boundarywidth = this.boundary.width(),
                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : {
                    top: 0,
                    left: 0
                },
                dpos = this.options.pos;
            var variants = {
                    "bottom-left": {
                        top: 0 + pos.height + posoffset,
                        left: 0
                    },
                    "bottom-right": {
                        top: 0 + pos.height + posoffset,
                        left: 0 + pos.width - width
                    },
                    "bottom-center": {
                        top: 0 + pos.height + posoffset,
                        left: 0 + pos.width / 2 - width / 2
                    },
                    "top-left": {
                        top: 0 - height - posoffset,
                        left: 0
                    },
                    "top-right": {
                        top: 0 - height - posoffset,
                        left: 0 + pos.width - width
                    },
                    "top-center": {
                        top: 0 - height - posoffset,
                        left: 0 + pos.width / 2 - width / 2
                    },
                    "left-top": {
                        top: 0,
                        left: 0 - width - posoffset
                    },
                    "left-bottom": {
                        top: 0 + pos.height - height,
                        left: 0 - width - posoffset
                    },
                    "left-center": {
                        top: 0 + pos.height / 2 - height / 2,
                        left: 0 - width - posoffset
                    },
                    "right-top": {
                        top: 0,
                        left: 0 + pos.width + posoffset
                    },
                    "right-bottom": {
                        top: 0 + pos.height - height,
                        left: 0 + pos.width + posoffset
                    },
                    "right-center": {
                        top: 0 + pos.height / 2 - height / 2,
                        left: 0 + pos.width + posoffset
                    }
                },
                css = {},
                pp;
            pp = dpos.split('-');
            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
            if (this.justified && this.justified.length) {
                justify(dropdown.css({
                    left: 0
                }), this.justified, boundarywidth);
            } else {
                if (this.options.preventflip !== true) {
                    var fdpos;
                    switch (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                        case "x":
                            if (this.options.preventflip !== 'x') fdpos = flips['x'][dpos] || 'right-top';
                            break;
                        case "y":
                            if (this.options.preventflip !== 'y') fdpos = flips['y'][dpos] || 'top-left';
                            break;
                        case "xy":
                            if (!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
                            break;
                    }
                    if (fdpos) {
                        pp = fdpos.split('-');
                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];
                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                            pp = dpos.split('-');
                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
                        }
                    }
                }
            }
            if (width > boundarywidth) {
                dropdown.addClass("uk-dropdown-stack");
                this.trigger('stack.uk.dropdown', [this]);
            }
            dropdown.css(css).css("display", "").addClass('uk-dropdown-' + pp[0]);
        },
        checkBoundary: function(left, top, width, height, boundarywidth) {
            var axis = "";
            if (left < 0 || ((left - UI.$win.scrollLeft()) + width) > boundarywidth) {
                axis += "x";
            }
            if ((top - UI.$win.scrollTop()) < 0 || ((top - UI.$win.scrollTop()) + height) > window.innerHeight) {
                axis += "y";
            }
            return axis;
        }
    });
    UI.component('dropdownOverlay', {
        defaults: {
            'justify': false,
            'cls': '',
            'duration': 200
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-dropdown-overlay]", context).each(function() {
                    var ele = UI.$(this);
                    if (!ele.data("dropdownOverlay")) {
                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr("data-uk-dropdown-overlay")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
            this.overlay = this.element.find('uk-dropdown-overlay');
            if (!this.overlay.length) {
                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
            }
            this.overlay.addClass(this.options.cls);
            this.on({
                'beforeshow.uk.dropdown': function(e, dropdown) {
                    $this.dropdown = dropdown;
                    if ($this.justified && $this.justified.length) {
                        justify($this.overlay.css({
                            'display': 'block',
                            'margin-left': '',
                            'margin-right': ''
                        }), $this.justified, $this.justified.outerWidth());
                    }
                },
                'show.uk.dropdown': function(e, dropdown) {
                    var h = $this.dropdown.dropdown.outerHeight(true);
                    $this.dropdown.element.removeClass('uk-open');
                    $this.overlay.stop().css('display', 'block').animate({
                        height: h
                    }, $this.options.duration, function() {
                        $this.dropdown.dropdown.css('visibility', '');
                        $this.dropdown.element.addClass('uk-open');
                        UI.Utils.checkDisplay($this.dropdown.dropdown, true);
                    });
                    $this.pointerleave = false;
                },
                'hide.uk.dropdown': function() {
                    $this.overlay.stop().animate({
                        height: 0
                    }, $this.options.duration);
                },
                'pointerenter.uk.dropdown': function(e, dropdown) {
                    clearTimeout($this.remainIdle);
                },
                'pointerleave.uk.dropdown': function(e, dropdown) {
                    $this.pointerleave = true;
                }
            });
            this.overlay.on({
                'mouseenter': function() {
                    if ($this.remainIdle) {
                        clearTimeout($this.dropdown.remainIdle);
                        clearTimeout($this.remainIdle);
                    }
                },
                'mouseleave': function() {
                    if ($this.pointerleave && active) {
                        $this.remainIdle = setTimeout(function() {
                            if (active) active.hide();
                        }, active.options.remaintime);
                    }
                }
            })
        }
    });

    function justify(ele, justifyTo, boundarywidth, offset) {
        ele = UI.$(ele);
        justifyTo = UI.$(justifyTo);
        boundarywidth = boundarywidth || window.innerWidth;
        offset = offset || ele.offset();
        if (justifyTo.length) {
            var jwidth = justifyTo.outerWidth();
            ele.css("min-width", jwidth);
            if (UI.langdirection == 'right') {
                var right1 = boundarywidth - (justifyTo.offset().left + jwidth),
                    right2 = boundarywidth - (ele.offset().left + ele.outerWidth());
                ele.css("margin-right", right1 - right2);
            } else {
                ele.css("margin-left", justifyTo.offset().left - offset.left);
            }
        }
    }
})(UIkit);
(function(UI) {
    "use strict";
    var grids = [];
    UI.component('gridMatchHeight', {
        defaults: {
            "target": false,
            "row": true,
            "ignorestacked": false,
            "observe": false
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-grid-match]", context).each(function() {
                    var grid = UI.$(this),
                        obj;
                    if (!grid.data("gridMatchHeight")) {
                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr("data-uk-grid-match")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            this.columns = this.element.children();
            this.elements = this.options.target ? this.find(this.options.target) : this.columns;
            if (!this.columns.length) return;
            UI.$win.on('load resize orientationchange', (function() {
                var fn = function() {
                    if ($this.element.is(":visible")) $this.match();
                };
                UI.$(function() {
                    fn();
                });
                return UI.Utils.debounce(fn, 50);
            })());
            if (this.options.observe) {
                UI.domObserve(this.element, function(e) {
                    if ($this.element.is(":visible")) $this.match();
                });
            }
            this.on("display.uk.check", function(e) {
                if (this.element.is(":visible")) this.match();
            }.bind(this));
            grids.push(this);
        },
        match: function() {
            var firstvisible = this.columns.filter(":visible:first");
            if (!firstvisible.length) return;
            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;
            if (stacked && !this.options.ignorestacked) {
                this.revert();
            } else {
                UI.Utils.matchHeights(this.elements, this.options);
            }
            return this;
        },
        revert: function() {
            this.elements.css('min-height', '');
            return this;
        }
    });
    UI.component('gridMargin', {
        defaults: {
            cls: 'uk-grid-margin',
            rowfirst: 'uk-row-first'
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-grid-margin]", context).each(function() {
                    var grid = UI.$(this),
                        obj;
                    if (!grid.data("gridMargin")) {
                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr("data-uk-grid-margin")));
                    }
                });
            });
        },
        init: function() {
            var stackMargin = UI.stackMargin(this.element, this.options);
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    var active = false,
        activeCount = 0,
        $html = UI.$html,
        body;
    UI.$win.on("resize orientationchange", UI.Utils.debounce(function() {
        UI.$('.uk-modal.uk-open').each(function() {
            UI.$(this).data('modal').resize();
        });
    }, 150));
    UI.component('modal', {
        defaults: {
            keyboard: true,
            bgclose: true,
            minScrollHeight: 150,
            center: false,
            modal: true
        },
        scrollable: false,
        transition: false,
        hasTransitioned: true,
        init: function() {
            if (!body) body = UI.$('body');
            if (!this.element.length) return;
            var $this = this;
            this.paddingdir = "padding-" + (UI.langdirection == 'left' ? "right" : "left");
            this.dialog = this.find(".uk-modal-dialog");
            this.active = false;
            this.element.attr('aria-hidden', this.element.hasClass("uk-open"));
            this.on("click", ".uk-modal-close", function(e) {
                e.preventDefault();
                $this.hide();
            }).on("click", function(e) {
                var target = UI.$(e.target);
                if (target[0] == $this.element[0] && $this.options.bgclose) {
                    $this.hide();
                }
            });
            UI.domObserve(this.element, function(e) {
                $this.resize();
            });
        },
        toggle: function() {
            return this[this.isActive() ? "hide" : "show"]();
        },
        show: function() {
            if (!this.element.length) return;
            var $this = this;
            if (this.isActive()) return;
            if (this.options.modal && active) {
                active.hide(true);
            }
            this.element.removeClass("uk-open").show();
            this.resize(true);
            if (this.options.modal) {
                active = this;
            }
            this.active = true;
            activeCount++;
            if (UI.support.transition) {
                this.hasTransitioned = false;
                this.element.one(UI.support.transition.end, function() {
                    $this.hasTransitioned = true;
                }).addClass("uk-open");
            } else {
                this.element.addClass("uk-open");
            }
            $html.addClass("uk-modal-page").height(); // force browser engine redraw
            this.element.attr('aria-hidden', 'false');
            this.element.trigger("show.uk.modal");
            UI.Utils.checkDisplay(this.dialog, true);
            return this;
        },
        hide: function(force) {
            if (!force && UI.support.transition && this.hasTransitioned) {
                var $this = this;
                this.one(UI.support.transition.end, function() {
                    $this._hide();
                }).removeClass("uk-open");
            } else {
                this._hide();
            }
            return this;
        },
        resize: function(force) {
            if (!this.isActive() && !force) return;
            var bodywidth = body.width();
            this.scrollbarwidth = window.innerWidth - bodywidth;
            body.css(this.paddingdir, this.scrollbarwidth);
            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');
            if (!this.updateScrollable() && this.options.center) {
                var dh = this.dialog.outerHeight(),
                    pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);
                if ((dh + pad) < window.innerHeight) {
                    this.dialog.css({
                        'top': (window.innerHeight / 2 - dh / 2) - pad
                    });
                } else {
                    this.dialog.css({
                        'top': ''
                    });
                }
            }
        },
        updateScrollable: function() {
            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');
            if (scrollable.length) {
                scrollable.css('height', 0);
                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
                    dh = this.dialog.outerHeight(),
                    wh = window.innerHeight,
                    h = wh - 2 * (offset < 20 ? 20 : offset) - dh;
                scrollable.css({
                    'max-height': (h < this.options.minScrollHeight ? '' : h),
                    'height': ''
                });
                return true;
            }
            return false;
        },
        _hide: function() {
            this.active = false;
            if (activeCount > 0) activeCount--;
            else activeCount = 0;
            this.element.hide().removeClass('uk-open');
            this.element.attr('aria-hidden', 'true');
            if (!activeCount) {
                $html.removeClass('uk-modal-page');
                body.css(this.paddingdir, "");
            }
            if (active === this) active = false;
            this.trigger('hide.uk.modal');
        },
        isActive: function() {
            return this.element.hasClass('uk-open');
        }
    });
    UI.component('modalTrigger', {
        boot: function() {
            UI.$html.on("click.modal.uikit", "[data-uk-modal]", function(e) {
                var ele = UI.$(this);
                if (ele.is("a")) {
                    e.preventDefault();
                }
                if (!ele.data("modalTrigger")) {
                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr("data-uk-modal")));
                    modal.show();
                }
            });
            UI.$html.on('keydown.modal.uikit', function(e) {
                if (active && e.keyCode === 27 && active.options.keyboard) { // ESC
                    e.preventDefault();
                    active.hide();
                }
            });
        },
        init: function() {
            var $this = this;
            this.options = UI.$.extend({
                "target": $this.element.is("a") ? $this.element.attr("href") : false
            }, this.options);
            this.modal = UI.modal(this.options.target, this.options);
            this.on("click", function(e) {
                e.preventDefault();
                $this.show();
            });
            this.proxy(this.modal, "show hide isActive");
        }
    });
    UI.modal.dialog = function(content, options) {
        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo("body"), options);
        modal.on("hide.uk.modal", function() {
            if (modal.persist) {
                modal.persist.appendTo(modal.persist.data("modalPersistParent"));
                modal.persist = false;
            }
            modal.element.remove();
        });
        setContent(content, modal);
        return modal;
    };
    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';
    UI.modal.alert = function(content, options) {
        options = UI.$.extend(true, {
            bgclose: false,
            keyboard: false,
            modal: false,
            labels: UI.modal.labels
        }, options);
        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">' + String(content) + '</div>',
            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + options.labels.Ok + '</button></div>'
        ]).join(""), options);
        modal.on('show.uk.modal', function() {
            setTimeout(function() {
                modal.element.find('button:first').focus();
            }, 50);
        });
        return modal.show();
    };
    UI.modal.confirm = function(content, onconfirm, oncancel) {
        var options = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function() {};
        oncancel = UI.$.isFunction(oncancel) ? oncancel : function() {};
        options = UI.$.extend(true, {
            bgclose: false,
            keyboard: false,
            modal: false,
            labels: UI.modal.labels
        }, UI.$.isFunction(options) ? {} : options);
        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">' + String(content) + '</div>',
            '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + options.labels.Ok + '</button></div>'
        ]).join(""), options);
        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function() {
            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
            modal.hide();
        });
        modal.on('show.uk.modal', function() {
            setTimeout(function() {
                modal.element.find('.js-modal-confirm').focus();
            }, 50);
        });
        return modal.show();
    };
    UI.modal.prompt = function(text, value, onsubmit, options) {
        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function(value) {};
        options = UI.$.extend(true, {
            bgclose: false,
            keyboard: false,
            modal: false,
            labels: UI.modal.labels
        }, options);
        var modal = UI.modal.dialog(([
                text ? '<div class="uk-modal-content uk-form">' + String(text) + '</div>' : '',
                '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
                '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + options.labels.Ok + '</button></div>'
            ]).join(""), options),
            input = modal.element.find("input[type='text']").val(value || '').on('keyup', function(e) {
                if (e.keyCode == 13) {
                    modal.element.find(".js-modal-ok").trigger('click');
                }
            });
        modal.element.find(".js-modal-ok").on("click", function() {
            if (onsubmit(input.val()) !== false) {
                modal.hide();
            }
        });
        modal.on('show.uk.modal', function() {
            setTimeout(function() {
                input.focus();
            }, 50);
        });
        return modal.show();
    };
    UI.modal.blockUI = function(content, options) {
        var modal = UI.modal.dialog(([
            '<div class="uk-margin uk-modal-content">' + String(content || '<div class="uk-text-center">...</div>') + '</div>'
        ]).join(""), UI.$.extend({
            bgclose: false,
            keyboard: false,
            modal: false
        }, options));
        modal.content = modal.element.find('.uk-modal-content:first');
        return modal.show();
    };
    UI.modal.labels = {
        'Ok': 'Ok',
        'Cancel': 'Cancel'
    };

    function setContent(content, modal) {
        if (!modal) return;
        if (typeof content === 'object') {
            content = content instanceof jQuery ? content : UI.$(content);
            if (content.parent().length) {
                modal.persist = content;
                modal.persist.data("modalPersistParent", content.parent());
            }
        } else if (typeof content === 'string' || typeof content === 'number') {
            content = UI.$('<div></div>').html(content);
        } else {
            content = UI.$('<div></div>').html('UIkit.modal Error: Unsupported data type: ' + typeof content);
        }
        content.appendTo(modal.element.find('.uk-modal-dialog'));
        return modal;
    }
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('nav', {
        defaults: {
            "toggle": ">li.uk-parent > a[href='#']",
            "lists": ">li.uk-parent > ul",
            "multiple": false
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-nav]", context).each(function() {
                    var nav = UI.$(this);
                    if (!nav.data("nav")) {
                        var obj = UI.nav(nav, UI.Utils.options(nav.attr("data-uk-nav")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            this.on("click.uk.nav", this.options.toggle, function(e) {
                e.preventDefault();
                var ele = UI.$(this);
                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
            });
            this.find(this.options.lists).each(function() {
                var $ele = UI.$(this),
                    parent = $ele.parent(),
                    active = parent.hasClass("uk-active");
                $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
                parent.data("list-container", $ele.parent()[active ? 'removeClass' : 'addClass']('uk-hidden'));
                parent.attr('aria-expanded', parent.hasClass("uk-open"));
                if (active) $this.open(parent, true);
            });
        },
        open: function(li, noanimation) {
            var $this = this,
                element = this.element,
                $li = UI.$(li),
                $container = $li.data('list-container');
            if (!this.options.multiple) {
                element.children('.uk-open').not(li).each(function() {
                    var ele = UI.$(this);
                    if (ele.data('list-container')) {
                        ele.data('list-container').stop().animate({
                            height: 0
                        }, function() {
                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
                        });
                    }
                });
            }
            $li.toggleClass('uk-open');
            $li.attr('aria-expanded', $li.hasClass('uk-open'));
            if ($container) {
                if ($li.hasClass('uk-open')) {
                    $container.removeClass('uk-hidden');
                }
                if (noanimation) {
                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);
                    if (!$li.hasClass('uk-open')) {
                        $container.addClass('uk-hidden');
                    }
                    this.trigger('display.uk.check');
                } else {
                    $container.stop().animate({
                        height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
                    }, function() {
                        if (!$li.hasClass('uk-open')) {
                            $container.addClass('uk-hidden');
                        } else {
                            $container.css('height', '');
                        }
                        $this.trigger('display.uk.check');
                    });
                }
            }
        }
    });

    function getHeight(ele) {
        var $ele = UI.$(ele),
            height = "auto";
        if ($ele.is(":visible")) {
            height = $ele.outerHeight();
        } else {
            var tmp = {
                position: $ele.css("position"),
                visibility: $ele.css("visibility"),
                display: $ele.css("display")
            };
            height = $ele.css({
                position: 'absolute',
                visibility: 'hidden',
                display: 'block'
            }).outerHeight();
            $ele.css(tmp); // reset element
        }
        return height;
    }
})(UIkit);
(function(UI) {
    "use strict";
    var scrollpos = {
            x: window.scrollX,
            y: window.scrollY
        },
        $win = UI.$win,
        $doc = UI.$doc,
        $html = UI.$html,
        Offcanvas = {
            show: function(element) {
                element = UI.$(element);
                if (!element.length) return;
                var $body = UI.$('body'),
                    bar = element.find(".uk-offcanvas-bar:first"),
                    rtl = (UI.langdirection == "right"),
                    flip = bar.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
                    dir = flip * (rtl ? -1 : 1),
                    scrollbarwidth = window.innerWidth - $body.width();
                scrollpos = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
                element.addClass("uk-active");
                $body.css({
                    "width": window.innerWidth - scrollbarwidth,
                    "height": window.innerHeight
                }).addClass("uk-offcanvas-page");
                $body.css((rtl ? "margin-right" : "margin-left"), (rtl ? -1 : 1) * (bar.outerWidth() * dir)).width(); // .width() - force redraw
                $html.css('margin-top', scrollpos.y * -1);
                bar.addClass("uk-offcanvas-bar-show");
                this._initElement(element);
                bar.trigger('show.uk.offcanvas', [element, bar]);
                element.attr('aria-hidden', 'false');
            },
            hide: function(force) {
                var $body = UI.$('body'),
                    panel = UI.$(".uk-offcanvas.uk-active"),
                    rtl = (UI.langdirection == "right"),
                    bar = panel.find(".uk-offcanvas-bar:first"),
                    finalize = function() {
                        $body.removeClass("uk-offcanvas-page").css({
                            "width": "",
                            "height": "",
                            "margin-left": "",
                            "margin-right": ""
                        });
                        panel.removeClass("uk-active");
                        bar.removeClass("uk-offcanvas-bar-show");
                        $html.css('margin-top', '');
                        window.scrollTo(scrollpos.x, scrollpos.y);
                        bar.trigger('hide.uk.offcanvas', [panel, bar]);
                        panel.attr('aria-hidden', 'true');
                    };
                if (!panel.length) return;
                if (UI.support.transition && !force) {
                    $body.one(UI.support.transition.end, function() {
                        finalize();
                    }).css((rtl ? "margin-right" : "margin-left"), "");
                    setTimeout(function() {
                        bar.removeClass("uk-offcanvas-bar-show");
                    }, 0);
                } else {
                    finalize();
                }
            },
            _initElement: function(element) {
                if (element.data("OffcanvasInit")) return;
                element.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(e) {
                    var target = UI.$(e.target);
                    if (!e.type.match(/swipe/)) {
                        if (!target.hasClass("uk-offcanvas-close")) {
                            if (target.hasClass("uk-offcanvas-bar")) return;
                            if (target.parents(".uk-offcanvas-bar:first").length) return;
                        }
                    }
                    e.stopImmediatePropagation();
                    Offcanvas.hide();
                });
                element.on("click", "a[href*='#']", function(e) {
                    var link = UI.$(this),
                        href = link.attr("href");
                    if (href == "#") {
                        return;
                    }
                    UI.$doc.one('hide.uk.offcanvas', function() {
                        var target;
                        try {
                            target = UI.$(link[0].hash);
                        } catch (e) {
                            target = '';
                        }
                        if (!target.length) {
                            target = UI.$('[name="' + link[0].hash.replace('#', '') + '"]');
                        }
                        if (target.length && UI.Utils.scrollToElement) {
                            UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
                        } else {
                            window.location.href = href;
                        }
                    });
                    Offcanvas.hide();
                });
                element.data("OffcanvasInit", true);
            }
        };
    UI.component('offcanvasTrigger', {
        boot: function() {
            $html.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(e) {
                e.preventDefault();
                var ele = UI.$(this);
                if (!ele.data("offcanvasTrigger")) {
                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr("data-uk-offcanvas")));
                    ele.trigger("click");
                }
            });
            $html.on('keydown.uk.offcanvas', function(e) {
                if (e.keyCode === 27) { // ESC
                    Offcanvas.hide();
                }
            });
        },
        init: function() {
            var $this = this;
            this.options = UI.$.extend({
                "target": $this.element.is("a") ? $this.element.attr("href") : false
            }, this.options);
            this.on("click", function(e) {
                e.preventDefault();
                Offcanvas.show($this.options.target);
            });
        }
    });
    UI.offcanvas = Offcanvas;
})(UIkit);
(function(UI) {
    "use strict";
    var Animations;
    UI.component('switcher', {
        defaults: {
            connect: false,
            toggle: ">*",
            active: 0,
            animation: false,
            duration: 200,
            swiping: true
        },
        animating: false,
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-switcher]", context).each(function() {
                    var switcher = UI.$(this);
                    if (!switcher.data("switcher")) {
                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr("data-uk-switcher")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            this.on("click.uk.switcher", this.options.toggle, function(e) {
                e.preventDefault();
                $this.show(this);
            });
            if (this.options.connect) {
                this.connect = UI.$(this.options.connect);
                this.connect.children().removeClass("uk-active");
                if (this.connect.length) {
                    this.connect.children().attr('aria-hidden', 'true');
                    this.connect.on("click", '[data-uk-switcher-item]', function(e) {
                        e.preventDefault();
                        var item = UI.$(this).attr('data-uk-switcher-item');
                        if ($this.index == item) return;
                        switch (item) {
                            case 'next':
                            case 'previous':
                                $this.show($this.index + (item == 'next' ? 1 : -1));
                                break;
                            default:
                                $this.show(parseInt(item, 10));
                        }
                    });
                    if (this.options.swiping) {
                        this.connect.on('swipeRight swipeLeft', function(e) {
                            e.preventDefault();
                            if (!window.getSelection().toString()) {
                                $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
                            }
                        });
                    }
                }
                var toggles = this.find(this.options.toggle),
                    active = toggles.filter(".uk-active");
                if (active.length) {
                    this.show(active, false);
                } else {
                    if (this.options.active === false) return;
                    active = toggles.eq(this.options.active);
                    this.show(active.length ? active : toggles.eq(0), false);
                }
                toggles.not(active).attr('aria-expanded', 'false');
                active.attr('aria-expanded', 'true');
            }
        },
        show: function(tab, animate) {
            if (this.animating) {
                return;
            }
            if (isNaN(tab)) {
                tab = UI.$(tab);
            } else {
                var toggles = this.find(this.options.toggle);
                tab = tab < 0 ? toggles.length - 1 : tab;
                tab = toggles.eq(toggles[tab] ? tab : 0);
            }
            var $this = this,
                toggles = this.find(this.options.toggle),
                active = UI.$(tab),
                animation = Animations[this.options.animation] || function(current, next) {
                    if (!$this.options.animation) {
                        return Animations.none.apply($this);
                    }
                    var anim = $this.options.animation.split(',');
                    if (anim.length == 1) {
                        anim[1] = anim[0];
                    }
                    anim[0] = anim[0].trim();
                    anim[1] = anim[1].trim();
                    return coreAnimation.apply($this, [anim, current, next]);
                };
            if (animate === false || !UI.support.animation) {
                animation = Animations.none;
            }
            if (active.hasClass("uk-disabled")) return;
            toggles.attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');
            toggles.filter(".uk-active").removeClass("uk-active");
            active.addClass("uk-active");
            if (this.options.connect && this.connect.length) {
                this.index = this.find(this.options.toggle).index(active);
                if (this.index == -1) {
                    this.index = 0;
                }
                this.connect.each(function() {
                    var container = UI.$(this),
                        children = UI.$(container.children()),
                        current = UI.$(children.filter('.uk-active')),
                        next = UI.$(children.eq($this.index));
                    $this.animating = true;
                    animation.apply($this, [current, next]).then(function() {
                        current.removeClass("uk-active");
                        next.addClass("uk-active");
                        current.attr('aria-hidden', 'true');
                        next.attr('aria-hidden', 'false');
                        UI.Utils.checkDisplay(next, true);
                        $this.animating = false;
                    });
                });
            }
            this.trigger("show.uk.switcher", [active]);
        }
    });
    Animations = {
        'none': function() {
            var d = UI.$.Deferred();
            d.resolve();
            return d.promise();
        },
        'fade': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
        },
        'slide-bottom': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
        },
        'slide-top': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
        },
        'slide-vertical': function(current, next, dir) {
            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];
            if (current && current.index() > next.index()) {
                anim.reverse();
            }
            return coreAnimation.apply(this, [anim, current, next]);
        },
        'slide-left': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
        },
        'slide-right': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
        },
        'slide-horizontal': function(current, next, dir) {
            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];
            if (current && current.index() > next.index()) {
                anim.reverse();
            }
            return coreAnimation.apply(this, [anim, current, next]);
        },
        'scale': function(current, next) {
            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
        }
    };
    UI.switcher.animations = Animations;

    function coreAnimation(cls, current, next) {
        var d = UI.$.Deferred(),
            clsIn = cls,
            clsOut = cls,
            release;
        if (next[0] === current[0]) {
            d.resolve();
            return d.promise();
        }
        if (typeof(cls) == 'object') {
            clsIn = cls[0];
            clsOut = cls[1] || cls[0];
        }
        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS
        release = function() {
            if (current) current.hide().removeClass('uk-active ' + clsOut + ' uk-animation-reverse');
            next.addClass(clsIn).one(UI.support.animation.end, function() {
                setTimeout(function() {
                    next.removeClass('' + clsIn + '').css({
                        opacity: '',
                        display: ''
                    });
                }, 0);
                d.resolve();
                UI.$body.css('overflow-x', '');
                if (current) current.css({
                    opacity: '',
                    display: ''
                });
            }.bind(this)).show();
        };
        next.css('animation-duration', this.options.duration + 'ms');
        if (current && current.length) {
            current.css('animation-duration', this.options.duration + 'ms');
            current.css('display', 'none').addClass(clsOut + ' uk-animation-reverse').one(UI.support.animation.end, function() {
                release();
            }.bind(this)).css('display', '');
        } else {
            next.addClass('uk-active');
            release();
        }
        return d.promise();
    }
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('tab', {
        defaults: {
            'target': '>li:not(.uk-tab-responsive, .uk-disabled)',
            'connect': false,
            'active': 0,
            'animation': false,
            'duration': 200,
            'swiping': true
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-tab]", context).each(function() {
                    var tab = UI.$(this);
                    if (!tab.data("tab")) {
                        var obj = UI.tab(tab, UI.Utils.options(tab.attr("data-uk-tab")));
                    }
                });
            });
        },
        init: function() {
            var $this = this;
            this.current = false;
            this.on("click.uk.tab", this.options.target, function(e) {
                e.preventDefault();
                if ($this.switcher && $this.switcher.animating) {
                    return;
                }
                var current = $this.find($this.options.target).not(this);
                current.removeClass("uk-active").blur();
                $this.trigger("change.uk.tab", [UI.$(this).addClass("uk-active"), $this.current]);
                $this.current = UI.$(this);
                if (!$this.options.connect) {
                    current.attr('aria-expanded', 'false');
                    UI.$(this).attr('aria-expanded', 'true');
                }
            });
            if (this.options.connect) {
                this.connect = UI.$(this.options.connect);
            }
            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');
            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
            this.responsivetab.lst = this.responsivetab.dropdown.find('ul');
            this.responsivetab.caption = this.responsivetab.find('a:first');
            if (this.element.hasClass("uk-tab-bottom")) this.responsivetab.dropdown.addClass("uk-dropdown-up");
            this.responsivetab.lst.on('click.uk.tab', 'a', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var link = UI.$(this);
                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
            });
            this.on('show.uk.switcher change.uk.tab', function(e, tab) {
                $this.responsivetab.caption.html(tab.text());
            });
            this.element.append(this.responsivetab);
            if (this.options.connect) {
                this.switcher = UI.switcher(this.element, {
                    'toggle': '>li:not(.uk-tab-responsive)',
                    'connect': this.options.connect,
                    'active': this.options.active,
                    'animation': this.options.animation,
                    'duration': this.options.duration,
                    'swiping': this.options.swiping
                });
            }
            UI.dropdown(this.responsivetab, {
                "mode": "click",
                "preventflip": "y"
            });
            $this.trigger("change.uk.tab", [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);
            this.check();
            UI.$win.on('resize orientationchange', UI.Utils.debounce(function() {
                if ($this.element.is(":visible")) $this.check();
            }, 100));
            this.on('display.uk.check', function() {
                if ($this.element.is(":visible")) $this.check();
            });
        },
        check: function() {
            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');
            if (!children.length) {
                this.responsivetab.addClass('uk-hidden');
                return;
            }
            var top = (children.eq(0).offset().top + Math.ceil(children.eq(0).height() / 2)),
                doresponsive = false,
                item, link, clone;
            this.responsivetab.lst.empty();
            children.each(function() {
                if (UI.$(this).offset().top > top) {
                    doresponsive = true;
                }
            });
            if (doresponsive) {
                for (var i = 0; i < children.length; i++) {
                    item = UI.$(children.eq(i));
                    link = item.find('a');
                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {
                        if (!item.hasClass('uk-disabled')) {
                            clone = item[0].outerHTML.replace('<a ', '<a data-index="' + i + '" ');
                            this.responsivetab.lst.append(clone);
                        }
                        item.addClass('uk-hidden');
                    }
                }
            }
            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass' : 'addClass']('uk-hidden');
        }
    });
})(UIkit);
(function(UI) {
    "use strict";
    UI.component('cover', {
        defaults: {
            automute: true
        },
        boot: function() {
            UI.ready(function(context) {
                UI.$("[data-uk-cover]", context).each(function() {
                    var ele = UI.$(this);
                    if (!ele.data("cover")) {
                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr("data-uk-cover")));
                    }
                });
            });
        },
        init: function() {
            this.parent = this.element.parent();
            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function() {
                this.check();
            }.bind(this), 100));
            this.on("display.uk.check", function(e) {
                if (this.element.is(":visible")) this.check();
            }.bind(this));
            this.check();
            if (this.element.is('iframe') && this.options.automute) {
                var src = this.element.attr('src');
                this.element.attr('src', '').on('load', function() {
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
                }).attr('src', [src, (src.indexOf('?') > -1 ? '&' : '?'), 'enablejsapi=1&api=1'].join(''));
            }
        },
        check: function() {
            this.element.css({
                'width': '',
                'height': ''
            });
            this.dimension = {
                w: this.element.width(),
                h: this.element.height()
            };
            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
                this.dimension.w = this.element.attr('width');
            }
            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
                this.dimension.h = this.element.attr('height');
            }
            this.ratio = this.dimension.w / this.dimension.h;
            var w = this.parent.width(),
                h = this.parent.height(),
                width, height;
            if ((w / this.ratio) < h) {
                width = Math.ceil(h * this.ratio);
                height = h;
            } else {
                width = w;
                height = Math.ceil(w / this.ratio);
            }
            this.element.css({
                'width': width,
                'height': height
            });
        }
    });
})(UIkit);

! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
jQuery(document).ready(function() {
    var ua = navigator.userAgent.toLowerCase();
    var is_android = (ua.indexOf("android") > -1);
    var page_url = location.href;
    var is_ha_home_web = (page_url === "https://honeysanime.com/");
    if (is_android && is_ha_home_web) {
        var str = "<div class=\"app-notice-content\"><div class=\"honeys-icon mr10 ml20 pull-left\"><img src=\"https://honeysanime.com/wp-content/uploads/2016/09/honeys-anime-logo-90x90.jpg\" width=\"45\" height=\"45\" class=\"ma0 mt5 aligncenter border-radius-all-10\" alt=\"honey's anime android app\"/></div><div class=\"mt20 fz10 font-headline pull-left\">Get our App!!</div><div class=\"pull-left\" style=\"max-width:150px;\"><a href=\"https://play.google.com/store/apps/details?id=com.qdopp.honeysanime2&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\" onClick=\"ga('send','event','link','click','to_android_app_@mobile_header');\" target=\"_blank\" rel=\"noopener\"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width=\"150px\" class=\"ma0\"/></a></div><div class=\"clearfix\"></div></div><div id=\"close-app-notice\" class=\"pl10 pr10 pt3 pb3 mt10 border-radius-all-4 pull-right\" onclick=\"document.getElementById('wrap-app-notice').style.display = 'none';\" style=\"background-color: #fff;position:absolute; right:10px; top:5px; border:1px solid #aaaaaa; cursor:pointer;\" >×</div>";
        jQuery("#wrap-app-notice").html(str);
        jQuery(".wrap-site-image").addClass("mt60");
        jQuery("#close-app-notice").click(function() {
            jQuery(".wrap-site-image").removeClass("mt60");
        });
    }
});
jQuery(document).ready(function() {
    var ua = navigator.userAgent.toLowerCase();
    var is_android = (ua.indexOf("android") > -1);
    if (is_android) {
        jQuery(".wrap-ad-nttsolmare").attr("id", "div-gpt-ad-1503290738250-0");
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-1503290738250-0');
        });
    } else {
        jQuery(".wrap-ad-nttsolmare").attr("id", "div-gpt-ad-1503291164557-0");
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-1503291164557-0');
        });
    }
});
(function(e, t, n, r) {
    function w(e, t) {
        return e[t] === r ? l[t] : e[t]
    }

    function E() {
        var e = t.pageYOffset;
        return e === r ? a.scrollTop : e
    }

    function S(e, t) {
        var n = l["on" + e];
        if (n) {
            if (p(n)) {
                n.call(t[0])
            } else {
                if (n.addClass) {
                    t.addClass(n.addClass)
                }
                if (n.removeClass) {
                    t.removeClass(n.removeClass)
                }
            }
        }
        t.trigger("lazy" + e, [t]);
        C()
    }

    function x(t) {
        S(t.type, e(this).off(o, x))
    }

    function T(n) {
        if (!g.length) {
            return
        }
        n = n || l.forceLoad;
        y = Infinity;
        var r = E(),
            s = t.innerHeight || a.clientHeight,
            u = t.innerWidth || a.clientWidth,
            f, c;
        for (f = 0, c = g.length; f < c; f++) {
            var h = g[f],
                d = h[0],
                v = h[i],
                b = false,
                w = n,
                T;
            if (!m(a, d)) {
                b = true
            } else if (n || !v.visibleOnly || d.offsetWidth || d.offsetHeight) {
                if (!w) {
                    var N = d.getBoundingClientRect(),
                        C = v.edgeX,
                        k = v.edgeY;
                    T = N.top + r - k - s;
                    w = T <= r && N.bottom > -k && N.left <= u + C && N.right > -C
                }
                if (w) {
                    S("show", h);
                    var L = v.srcAttr,
                        A = p(L) ? L(h) : d.getAttribute(L);
                    if (A) {
                        h.on(o, x);
                        d.src = A
                    }
                    b = true
                } else {
                    if (T < y) {
                        y = T
                    }
                }
            }
            if (b) {
                g.splice(f--, 1);
                c--
            }
        }
        if (!c) {
            S("complete", e(a))
        }
    }

    function N() {
        if (b > 1) {
            b = 1;
            T();
            setTimeout(N, l.throttle)
        } else {
            b = 0
        }
    }

    function C(e) {
        if (!g.length) {
            return
        }
        if (e && e.type === "scroll" && e.currentTarget === t) {
            if (y >= E()) {
                return
            }
        }
        if (!b) {
            setTimeout(N, 0)
        }
        b = 2
    }

    function k() {
        h.lazyLoadXT()
    }

    function L() {
        T(true)
    }
    var i = "lazyLoadXT",
        s = "lazied",
        o = "load error",
        u = "lazy-hidden",
        a = n.documentElement || n.body,
        f = t.onscroll === r || !!t.operamini || !a.getBoundingClientRect,
        l = {
            autoInit: true,
            selector: "img[data-src]",
            blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            throttle: 99,
            forceLoad: f,
            loadEvent: "pageshow",
            updateEvent: "load orientationchange resize scroll touchmove focus",
            forceEvent: "",
            oninit: {
                removeClass: "lazy"
            },
            onshow: {
                addClass: u
            },
            onload: {
                removeClass: u,
                addClass: "lazy-loaded"
            },
            onerror: {
                removeClass: u
            },
            checkDuplicates: true
        },
        c = {
            srcAttr: "data-src",
            edgeX: 0,
            edgeY: 0,
            visibleOnly: true
        },
        h = e(t),
        p = e.isFunction,
        d = e.extend,
        v = e.data || function(t, n) {
            return e(t).data(n)
        },
        m = e.contains || function(e, t) {
            while (t = t.parentNode) {
                if (t === e) {
                    return true
                }
            }
            return false
        },
        g = [],
        y = 0,
        b = 0;
    e[i] = d(l, c, e[i]);
    e.fn[i] = function(n) {
        n = n || {};
        var r = w(n, "blankImage"),
            o = w(n, "checkDuplicates"),
            u = w(n, "scrollContainer"),
            a = {},
            f;
        e(u).on("scroll", C);
        for (f in c) {
            a[f] = w(n, f)
        }
        return this.each(function(u, f) {
            if (f === t) {
                e(l.selector).lazyLoadXT(n)
            } else {
                if (o && v(f, s)) {
                    return
                }
                var c = e(f).data(s, 1);
                if (r && f.tagName === "IMG" && !f.src) {
                    f.src = r
                }
                c[i] = d({}, a);
                S("init", c);
                g.push(c)
            }
        })
    };
    e(n).ready(function() {
        S("start", h);
        h.on(l.loadEvent, k).on(l.updateEvent, C).on(l.forceEvent, L);
        e(n).on(l.updateEvent, C);
        if (l.autoInit) {
            k()
        }
    })
})(window.jQuery || window.Zepto || window.$, window, document);
(function(e) {
    var t = e.lazyLoadXT;
    t.selector += ",video,iframe[data-src],embed[data-src]";
    t.videoPoster = "data-poster";
    e(document).on("lazyshow", "video", function(n, r) {
        var i = r.lazyLoadXT.srcAttr,
            s = e.isFunction(i);
        r.attr("poster", r.attr(t.videoPoster)).children("source,track").each(function(t, n) {
            var r = e(n);
            r.attr("src", s ? i(r) : r.attr(i))
        });
        if (typeof e(this).attr('preload') !== 'undefined' && 'none' != e(this).attr('preload')) {
            this.load()
        }
        e(this).removeClass("lazy-hidden")
    });
    e(document).on("lazyshow", "embed", function(t, n) {
        e(this).removeClass("lazy-hidden")
    })
})(window.jQuery || window.Zepto || window.$);

! function(t, r, e, n) {
    function s(r, e) {
        return Math[e].apply(null, t.map(r, function(t) {
            return t[o]
        }))
    }

    function a(t) {
        return t[o] >= g[o] || t[o] === d
    }

    function c(t) {
        return t[o] === d
    }

    function i(n) {
        var i = n.attr(u.srcsetAttr);
        if (!i) return !1;
        var l = t.map(i.split(","), function(t) {
            return {
                url: x.exec(t)[1],
                w: parseFloat((f.exec(t) || p)[1]),
                h: parseFloat((w.exec(t) || p)[1]),
                x: parseFloat((h.exec(t) || m)[1])
            }
        });
        if (!l.length) return !1;
        var A, v, E = e.documentElement;
        g = {
            w: r.innerWidth || E.clientWidth,
            h: r.innerHeight || E.clientHeight,
            x: r.devicePixelRatio || 1
        };
        for (A in g) o = A, d = s(l, "max"), l = t.grep(l, a);
        for (A in g) o = A, d = s(l, "min"), l = t.grep(l, c);
        return v = l[0].url, u.srcsetExtended && (v = (n.attr(u.srcsetBaseAttr) || "") + v + (n.attr(u.srcsetExtAttr) || "")), v
    }
    var o, d, u = t.lazyLoadXT,
        l = function() {
            return "srcset" in new Image
        }(),
        x = /^\s*(\S*)/,
        f = /\S\s+(\d+)w/,
        w = /\S\s+(\d+)h/,
        h = /\S\s+([\d\.]+)x/,
        p = [0, 1 / 0],
        m = [0, 1],
        A = {
            srcsetAttr: "data-srcset",
            srcsetExtended: !1,
            srcsetBaseAttr: "data-srcset-base",
            srcsetExtAttr: "data-srcset-ext"
        },
        g = {
            w: 0,
            h: 0,
            x: 0
        };
    for (o in A) u[o] === n && (u[o] = A[o]);
    u.selector += ",img[" + u.srcsetAttr + "]", t(e).on("lazyshow", "img", function(t, r) {
        var e = r.attr(u.srcsetAttr);
        e && (!u.srcsetExtended && l ? (r.attr("srcset", e), r.attr("data-srcset", "")) : r.lazyLoadXT.srcAttr = i)
    })
}(window.jQuery || window.Zepto || window.$, window, document);
jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
jQuery(document).ready(function($) {
    jQuery(document).on('mouseenter', '.site-header-cart', function() {
        jQuery(document).trigger('customlazyloadxtevent');
    });
    jQuery(document).on('mouseenter', '.widget_shopping_cart', function() {
        jQuery(document).trigger('customlazyloadxtevent');
    });
    jQuery(document).on('mouseover', '#wp-admin-bar-top-secondary', function() {
        jQuery(document).trigger('customlazyloadxtevent');
    });
});
jQuery(window).on('ajaxComplete', function() {
    setTimeout(function() {
        jQuery(window).lazyLoadXT();
    }, 1000);
});
/*! This file is auto-generated */
! function(c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
"use strict";
var icl_lang = icl_vars.current_language;
var icl_home = icl_vars.icl_home;

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
};