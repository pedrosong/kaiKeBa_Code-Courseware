webpackJsonp([0], [, , , , , ,
    function(t, e, i) {
        function a(t) {
            return i(l(t))
        }
        function l(t) {
            var e = o[t];
            if (! (e + 1)) throw new Error("Cannot find module '" + t + "'.");
            return e
        }
        var o = {
            "./back.svg": 30,
            "./fall.jpeg": 31,
            "./form-list-en.jpeg": 93,
            "./form-list.jpeg": 94,
            "./free-scroll.jpeg": 95,
            "./full-page-slide.jpeg": 96,
            "./github.svg": 50,
            "./goods-list.jpeg": 97,
            "./index-list.jpeg": 98,
            "./infinity-scroll.png": 99,
            "./navigator-en.jpg": 100,
            "./navigator-zh.jpg": 101,
            "./picker-en.jpeg": 102,
            "./picker.jpeg": 103,
            "./slide.jpeg": 104,
            "./spring.jpeg": 32,
            "./summer.jpeg": 33,
            "./vertical-scroll-en.jpeg": 105,
            "./vertical-scroll.jpeg": 51,
            "./winter.jpeg": 34
        };
        a.keys = function() {
            return Object.keys(o)
        },
        a.resolve = l,
        t.exports = a,
        a.id = 6
    },
    function(t, e, i) {
        i(204);
        var a = i(0)(i(206), i(207), "data-v-4a3c788e", null);
        t.exports = a.exports
    },
    ,
    function(t, e, i) {
        i(116);
        var a = i(0)(i(118), i(185), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return ! 1 !== g && ("standard" === g ? "transitionEnd" === t ? "transitionend": t: g + t.charAt(0).toUpperCase() + t.substr(1))
        }
        function l(t, e, i, a) {
            t.addEventListener(e, i, {
                passive: !1,
                capture: !!a
            })
        }
        function o(t, e, i, a) {
            t.removeEventListener(e, i, {
                passive: !1,
                capture: !!a
            })
        }
        function c(t) {
            for (var e = 0,
            i = 0; t;) e -= t.offsetLeft,
            i -= t.offsetTop,
            t = t.offsetParent;
            return {
                left: e,
                top: i
            }
        }
        function s(t) {
            var e = t.getBoundingClientRect();
            return {
                left: -(e.left + window.pageXOffset),
                top: -(e.top + window.pageYOffset)
            }
        }
        function n(t) {
            if (t instanceof window.SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
        function r(t, e) {
            for (var i in e) if (e[i].test(t[i])) return ! 0;
            return ! 1
        }
        function u(t, e) {
            var i = document.createEvent("Event");
            i.initEvent(e, !0, !0),
            i.pageX = t.pageX,
            i.pageY = t.pageY,
            t.target.dispatchEvent(i)
        }
        function v(t) {
            function e() {
                o = document.createEvent("Event"),
                o.initEvent(i, c, s),
                (0, f.extend)(o, l)
            }
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
            a = void 0;
            "mouseup" === t.type || "mousecancel" === t.type ? a = t: "touchend" !== t.type && "touchcancel" !== t.type || (a = t.changedTouches[0]);
            var l = {};
            a && (l.screenX = a.screenX || 0, l.screenY = a.screenY || 0, l.clientX = a.clientX || 0, l.clientY = a.clientY || 0);
            var o = void 0,
            c = !0,
            s = !0;
            if ("undefined" != typeof MouseEvent) try {
                o = new MouseEvent(i, (0, f.extend)({
                    bubbles: c,
                    cancelable: s
                },
                l))
            } catch(t) {
                e()
            } else e();
            o.forwardedTouchEvent = !0,
            o._constructed = !0,
            t.target.dispatchEvent(o)
        }
        function x(t) {
            v(t, "dblclick")
        }
        function p(t, e) {
            e.firstChild ? d(t, e.firstChild) : e.appendChild(t)
        }
        function d(t, e) {
            e.parentNode.insertBefore(t, e)
        }
        function h(t, e) {
            t.removeChild(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.eventType = e.MOUSE_EVENT = e.TOUCH_EVENT = e.style = e.hasTransition = e.hasTransform = e.hasTouch = e.hasPerspective = e.cssVendor = void 0,
        e.addEvent = l,
        e.removeEvent = o,
        e.offset = c,
        e.offsetToBody = s,
        e.getRect = n,
        e.preventDefaultException = r,
        e.tap = u,
        e.click = v,
        e.dblclick = x,
        e.prepend = p,
        e.before = d,
        e.removeChild = h;
        var y = i(48),
        f = i(17),
        m = y.inBrowser && document.createElement("div").style,
        g = function() {
            if (!y.inBrowser) return ! 1;
            var t = {
                standard: "transform",
                webkit: "webkitTransform",
                Moz: "MozTransform",
                O: "OTransform",
                ms: "msTransform"
            };
            for (var e in t) if (void 0 !== m[t[e]]) return e;
            return ! 1
        } (),
        b = (e.cssVendor = g && "standard" !== g ? "-" + g.toLowerCase() + "-": "", a("transform")),
        w = a("transition"),
        k = (e.hasPerspective = y.inBrowser && a("perspective") in m, e.hasTouch = y.inBrowser && ("ontouchstart" in window || y.isWeChatDevTools), e.hasTransform = !1 !== b, e.hasTransition = y.inBrowser && w in m, e.style = {
            transform: b,
            transition: w,
            transitionTimingFunction: a("transitionTimingFunction"),
            transitionDuration: a("transitionDuration"),
            transitionDelay: a("transitionDelay"),
            transformOrigin: a("transformOrigin"),
            transitionEnd: a("transitionEnd")
        },
        e.TOUCH_EVENT = 1),
        T = e.MOUSE_EVENT = 2;
        e.eventType = {
            touchstart: k,
            touchmove: k,
            touchend: k,
            mousedown: T,
            mousemove: T,
            mouseup: T
        }
    },
    , , , , ,
    function(t, e, i) {
        "use strict";
        function a(t, e) {
            this.wrapper = "string" == typeof t ? document.querySelector(t) : t,
            this.wrapper || (0, h.warn)("Can not resolve the wrapper DOM."),
            this.scroller = this.wrapper.children[0],
            this.scroller || (0, h.warn)("The wrapper need at least one child element to be scroller."),
            this.scrollerStyle = this.scroller.style,
            this._init(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(147),
        o = i(159),
        c = i(163),
        s = i(166),
        n = i(167),
        r = i(168),
        u = i(169),
        v = i(170),
        x = i(171),
        p = i(172),
        d = i(173),
        h = i(27); (0, o.initMixin)(a),
        (0, c.coreMixin)(a),
        (0, l.eventMixin)(a),
        (0, s.snapMixin)(a),
        (0, n.wheelMixin)(a),
        (0, r.scrollbarMixin)(a),
        (0, u.pullDownMixin)(a),
        (0, v.pullUpMixin)(a),
        (0, x.mouseWheelMixin)(a),
        (0, p.zoomMixin)(a),
        (0, d.infiniteMixin)(a),
        a.Version = "1.15.1",
        e.
    default = a,
        t.exports = e.
    default
    },
    function(t, e, i) {
        "use strict";
        function a() {
            return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart: +new Date
        }
        function l(t) {
            for (var e = arguments.length,
            i = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
            for (var l = 0; l < i.length; l++) {
                var o = i[l];
                for (var c in o) t[c] = o[c]
            }
            return t
        }
        function o(t) {
            return void 0 === t || null === t
        }
        function c(t, e) {
            return Math.sqrt(t * t + e * e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.getNow = a,
        e.extend = l,
        e.isUndef = o,
        e.getDistance = c
    },
    , , ,
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.ease = {
            swipe: {
                style: "cubic-bezier(0.23, 1, 0.32, 1)",
                fn: function(t) {
                    return 1 + --t * t * t * t * t
                }
            },
            swipeBounce: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            bounce: {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(t) {
                    return 1 - --t * t * t * t
                }
            }
        }
    },
    , , , , ,
    function(t, e, i) {
        "use strict";
        function a(t) {
            console.error("[BScroll warn]: " + t)
        }
        function l(t, e) {
            if (!t) throw new Error("[BScroll] " + e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.warn = a,
        e.assert = l
    },
    function(t, e, i) {
        "use strict";
        function a(t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        }
        function l(t, e) {
            if (!a(t, e)) {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        }
        function o(t, e) {
            if (a(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                t.className = t.className.replace(i, " ")
            }
        }
        function c(t, e, i) {
            return i ? t.setAttribute("data-" + e, i) : t.getAttribute("data-" + e)
        }
        function s(t) {
            if (t instanceof window.SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.hasClass = a,
        e.addClass = l,
        e.removeClass = o,
        e.getData = c,
        e.getRect = s
    },
    ,
    function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0ODY0NDU5NjU4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzNjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2My44NDA5MTkgNDcyLjk3ODczN0MzMzYuOTM4NzE0IDQ5Ny4zNTg4NjEgMzM3LjMwMTgwNyA1MzcuNDg2MTM4IDM2NC43MzAzNzkgNTYxLjQ4NjEzOEw2NzMuOTUxOTAyIDgzMi4wNTQ5N0M2ODIuODE4ODE2IDgzOS44MTM1MTkgNjk2LjI5NjQxOCA4MzguOTE1MDEyIDcwNC4wNTQ5NyA4MzAuMDQ4MDk4IDcxMS44MTM1MTkgODIxLjE4MTE4NCA3MTAuOTE1MDEyIDgwNy43MDM1ODIgNzAyLjA0ODA5OCA3OTkuOTQ1MDNMMzkyLjgyNjU3NyA1MjkuMzc2MTk4QzM4NC41OTU3OCA1MjIuMTc0MjUzIDM4NC41MDIyMjcgNTExLjgzNTI4NyAzOTIuNDkyNDE0IDUwNC41OTQxOEw3MDIuMzI1NzQ3IDIyMy44MDc3MjNDNzExLjA1NjExMSAyMTUuODk1ODI5IDcxMS43MTk2MTQgMjAyLjQwNDYxNiA3MDMuODA3NzIzIDE5My42NzQyNTIgNjk1Ljg5NTgyOSAxODQuOTQzODg5IDY4Mi40MDQ2MTcgMTg0LjI4MDM4NiA2NzMuNjc0MjUzIDE5Mi4xOTIyNzhMMzYzLjg0MDkxOSA0NzIuOTc4NzM3WiIgcC1pZD0iMzM2NyIgZmlsbD0iIzAwN2JmZiI+PC9wYXRoPjwvc3ZnPg=="
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/fall.0e0be3c.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/spring.8396ee1.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/summer.1b31a24.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/winter.74aecef.jpeg"
    },
    , , , , , , , , , , , , ,
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = e.inBrowser = "undefined" != typeof window,
        l = e.ua = a && navigator.userAgent.toLowerCase();
        e.isWeChatDevTools = l && /wechatdevtools/.test(l),
        e.isAndroid = l && l.indexOf("android") > 0
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.DIRECTION_UP = 1,
        e.DIRECTION_DOWN = -1,
        e.DIRECTION_LEFT = 1,
        e.DIRECTION_RIGHT = -1,
        e.PROBE_DEBOUNCE = 1,
        e.PROBE_NORMAL = 2,
        e.PROBE_REALTIME = 3
    },
    function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0NjgwOTI2NTgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMzIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAxLjU2MjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDUxNS44NzJDMCA3NDEuMTIgMTQ0LjM1MiA5MzIuNjQgMzQ1LjU4NCAxMDAyLjk3NmMyNy4xMiA2Ljg5NiAyMi44OTYtMTIuNTQ0IDIyLjg5Ni0yNS42MTZsMC04OS40MjRjLTE1Ni40NjQgMTguMzA0LTE2Mi43MzYtODUuMjgtMTczLjI5Ni0xMDIuNjA4LTIxLjMxMi0zNi4yNzItNzEuMzkyLTQ1LjQ4OC01Ni40MzItNjIuNzUyIDM1LjY5Ni0xOC40MzIgNzEuOTY4IDQuNjA4IDExNCA2Ni43ODQgMzAuNDY0IDQ1LjA3MiA4OS42NjQgMzcuNTA0IDExOS45MzYgMjkuOTM2IDYuNjI0LTI3LjA1NiAyMC43MDQtNTEuMiAzOS45NTItNzAuMDgtMTYxLjg4OC0yOC44MTYtMjI5LjU1Mi0xMjcuNzkyLTIyOS41NTItMjQ1LjQ0IDAtNTYuOTQ0IDE4LjgtMTA5LjUwNCA1NS44MDgtMTUxLjg1Ni0yMy40MDgtNjkuODg4IDIuMjU2LTEyOS40NzIgNS42MTYtMTM4LjQxNiA2Ni45MjgtNi4wOCAxMzYuNTEyIDQ3Ljg3MiAxNDEuODcyIDUyLjEyOCAzOC4xMjgtMTAuMTkyIDgxLjUyLTE1Ljc2IDEzMC4wNjQtMTUuNzYgNDguODQ4IDAgOTIuNDggNS42MzIgMTMwLjc4NCAxNS45NTIgMTMuMDcyLTkuOTUyIDc3LjU4NC01Ni4xOTIgMTM5LjgyNC01MC41NDQgMy4zMTIgOC44NDggMjguNDE2IDY3LjE2OCA2LjQgMTM2LjAxNiAzNy4zNzYgNDIuNDY0IDU2LjM1MiA5NS4yNjQgNTYuMzUyIDE1Mi40OCAwIDExNy44ODgtNjcuOTUyIDIxNy4wMDgtMjMwLjUyOCAyNDUuNiAyNy4xNTIgMjYuNzM2IDQzLjk4NCA2My45MiA0My45ODQgMTA1LjA0bDAgMTI5LjcxMmMwLjg2NCAxMC4zMzYgMCAyMC43MzYgMTcuMzYgMjAuNzM2IDIwNC4xMTItNjguNzUyIDM1MS4xMi0yNjEuNzEyIDM1MS4xMi00ODkuMDA4QzEwMzEuNzQ0IDIzMC45NiA4MDAuNzg0IDAgNTE1Ljg3MiAwIDIzMC45NiAwIDAgMjMwLjk2IDAgNTE1Ljg3MkwwIDUxNS44NzJ6TTAgNTE1Ljg3MiIgcC1pZD0iNDI3MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/vertical-scroll.c391260.jpeg"
    },
    , , , , , , , , , , , , , , , , ,
    function(t, e, i) {
        i(186);
        var a = i(0)(i(188), i(189), "data-v-5c4699cc", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(190);
        var a = i(0)(i(192), i(193), "data-v-6bb7192e", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.ease = {
            swipe: {
                style: "cubic-bezier(0.23, 1, 0.32, 1)",
                fn: function(t) {
                    return 1 + --t * t * t * t * t
                }
            },
            swipeBounce: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            bounce: {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(t) {
                    return 1 - --t * t * t * t
                }
            }
        }
    },
    function(t, e, i) {
        i(217);
        var a = i(0)(i(219), i(228), "data-v-0d673272", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(220);
        var a = i(0)(i(222), i(223), "data-v-9abbdfa4", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(234);
        var a = i(0)(i(236), i(246), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(237);
        var a = i(0)(i(239), i(240), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(280);
        var a = i(0)(i(282), i(283), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        i(287);
        var a = i(0)(i(289), i(291), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var l = i(18),
        o = a(l),
        c = i(81),
        s = a(c),
        n = i(314),
        r = a(n),
        u = i(319),
        v = a(u),
        x = i(323),
        p = a(x);
        i(324),
        p.
    default.attach(document.body),
        new o.
    default({
            el:
            "#app",
            router: s.
        default,
            i18n: v.
        default,
            render: function(t) {
                return t(r.
            default)
            }
        })
    },
    , ,
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(18),
        o = a(l),
        c = i(82),
        s = a(c),
        n = i(83),
        r = a(n),
        u = i(89),
        v = a(u),
        x = i(107),
        p = a(x),
        d = i(200),
        h = a(d),
        y = i(215),
        f = a(y),
        m = i(230),
        g = a(m),
        b = i(248),
        w = a(b),
        k = i(258),
        T = a(k),
        _ = i(273),
        j = a(_),
        S = i(278),
        M = a(S),
        I = i(285),
        P = a(I),
        C = i(293),
        D = a(C),
        A = i(303),
        L = a(A),
        E = i(74),
        N = a(E),
        O = i(76),
        z = a(O),
        R = i(309),
        Y = a(R),
        U = i(77),
        $ = a(U),
        W = i(72),
        X = a(W);
        o.
    default.use(s.
    default),
        e.
    default = new s.
    default({
            routes:
            [{
                path:
                "/",
                component: r.
            default
            },
            {
                path: "/:lang",
                component: r.
            default
            },
            {
                path: "/examples/:lang",
                component: v.
            default
            },
            {
                path: "/examples",
                component: v.
            default,
                children: [{
                    path: "vertical-scroll/:lang",
                    component: p.
                default
                },
                {
                    path: "index-view/:lang",
                    component: h.
                default
                },
                {
                    path: "picker/:lang",
                    component: f.
                default
                },
                {
                    path: "slide/:lang",
                    component: g.
                default
                },
                {
                    path: "full-page-slide/:lang",
                    component: w.
                default
                },
                {
                    path: "full-page-vertical-slide/:lang",
                    component: T.
                default
                },
                {
                    path: "free-scroll/:lang",
                    component: j.
                default
                },
                {
                    path: "form-list/:lang",
                    component: M.
                default
                },
                {
                    path: "goods-list/:lang",
                    component: P.
                default
                },
                {
                    path: "nav-list",
                    component: D.
                default,
                    children: [{
                        path: "1/:lang",
                        component: N.
                    default
                    },
                    {
                        path: "2/:lang",
                        component: z.
                    default
                    },
                    {
                        path: "3/:lang",
                        component: Y.
                    default
                    },
                    {
                        path: "4/:lang",
                        component: $.
                    default
                    },
                    {
                        path: "5/:lang",
                        component: X.
                    default
                    }]
                },
                {
                    path: "infinity/:lang",
                    component: L.
                default
                }]
            }]
        }),
        t.exports = e.
    default
    },
    ,
    function(t, e, i) {
        i(84);
        var a = i(0)(i(87), i(88), "data-v-f6d1d940", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(85);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("4a69b651", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".feature .feature-list[data-v-f6d1d940]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width:42rem){.feature .feature-list[data-v-f6d1d940]{margin:2rem 0}}@media screen and (max-width:42rem){.feature .feature-list[data-v-f6d1d940]{margin:1rem 0}}.feature .feature-list .feature-item[data-v-f6d1d940]{text-align:left;padding:.8rem;margin-bottom:1rem}@media screen and (min-width:64rem){.feature .feature-list .feature-item[data-v-f6d1d940]{-webkit-box-flex:0;-webkit-flex:0 1 27%;-ms-flex:0 1 27%;flex:0 1 27%}}@media screen and (max-width:64rem){.feature .feature-list .feature-item[data-v-f6d1d940]{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%}}.feature .feature-list .feature-item .title[data-v-f6d1d940]{margin-bottom:15px;color:#333;font-size:24px;line-height:28px;font-weight:400}.feature .feature-list .feature-item p[data-v-f6d1d940]{line-height:180%}.feature .feature-list .feature-item p.zh[data-v-f6d1d940]{text-align:justify}", ""])
    },
    ,
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            data: function() {
                return {}
            },
            computed: {
                lang: function() {
                    return this.$i18n.locale
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "feature"
                },
                [i("ul", {
                    staticClass: "feature-list"
                },
                [i("li", {
                    staticClass: "feature-item"
                },
                [i("div", {
                    staticClass: "title"
                },
                [t._v(t._s(t.$t("features.userExperience.title")))]), t._v(" "), i("p", {
                    class: t.lang
                },
                [t._v(t._s(t.$t("features.userExperience.desc")))])]), t._v(" "), i("li", {
                    staticClass: "feature-item"
                },
                [i("div", {
                    staticClass: "title"
                },
                [t._v(t._s(t.$t("features.application.title")))]), t._v(" "), i("p", {
                    class: t.lang
                },
                [t._v(t._s(t.$t("features.application.desc")))])]), t._v(" "), i("li", {
                    staticClass: "feature-item"
                },
                [i("div", {
                    staticClass: "title"
                },
                [t._v(t._s(t.$t("features.dependence.title")))]), t._v(" "), i("p", {
                    class: t.lang
                },
                [t._v(t._s(t.$t("features.dependence.desc")))])])])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(90);
        var a = i(0)(i(92), i(106), "data-v-3734656c", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(91);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("67a10f88", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".example .example-list[data-v-3734656c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width:42rem){.example .example-list[data-v-3734656c]{margin:2rem 0}}@media screen and (max-width:42rem){.example .example-list[data-v-3734656c]{margin:1rem 0}}.example .example-list .example-item[data-v-3734656c]{background-color:#fff;padding:.8rem;border:1px solid rgba(0,0,0,.1);-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 1px 2px 0 rgba(0,0,0,.1);text-align:center;margin-bottom:2rem}.example .example-list .example-item.placeholder[data-v-3734656c]{visibility:hidden;height:0;margin:0;padding:0}@media screen and (min-width:42rem){.example .example-list .example-item[data-v-3734656c]{-webkit-box-flex:0;-webkit-flex:0 1 28%;-ms-flex:0 1 28%;flex:0 1 28%}}@media screen and (max-width:42rem){.example .example-list .example-item[data-v-3734656c]{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-bottom:2rem}}.example .example-list .example-item img[data-v-3734656c]{border:1px solid rgba(0,0,0,.1)}.example .example-list .example-item a[data-v-3734656c]{line-height:3rem;color:#606c71}.example .view[data-v-3734656c]{-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateZ(0);transform:translateZ(0)}.example .view.move-enter-active[data-v-3734656c],.example .view.move-leave-active[data-v-3734656c]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            data: function() {
                return {}
            },
            computed: {
                verticalScrollImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.verticalScrollImg"))
                },
                indexListImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.indexListImg"))
                },
                pickerImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.pickerImg"))
                },
                slideImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.slideImg"))
                },
                startGuidanceImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.startGuidanceImg"))
                },
                freeScrollImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.freeScrollImg"))
                },
                formListImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.formListImg"))
                },
                goodsListImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.goodsListImg"))
                },
                navListImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.navListImg"))
                },
                infinityScrollImg: function() {
                    return i(6)("./" + this.$i18n.t("examples.infinityScrollImg"))
                },
                verticalScrollPath: function() {
                    return "/examples/vertical-scroll/" + this.$i18n.locale
                },
                indexListPath: function() {
                    return "/examples/index-view/" + this.$i18n.locale
                },
                pickerPath: function() {
                    return "/examples/picker/" + this.$i18n.locale
                },
                slidePath: function() {
                    return "/examples/slide/" + this.$i18n.locale
                },
                startGuidancePath: function() {
                    return "/examples/full-page-slide/" + this.$i18n.locale
                },
                fullPageVerticalSlide: function() {
                    return "/examples/full-page-vertical-slide/" + this.$i18n.locale
                },
                freeScrollPath: function() {
                    return "/examples/free-scroll/" + this.$i18n.locale
                },
                formListPath: function() {
                    return "/examples/form-list/" + this.$i18n.locale
                },
                goodsListPath: function() {
                    return "/examples/goods-list/" + this.$i18n.locale
                },
                navListPath: function() {
                    return "/examples/nav-list/1/" + this.$i18n.locale
                },
                infinityPath: function() {
                    return "/examples/infinity/" + this.$i18n.locale
                }
            },
            created: function() {
                this.$i18n.locale = "zh" === this.$route.params.lang ? "zh": "en"
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/form-list-en.449be1f.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/form-list.7a7f632.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/free-scroll.6b12f45.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/full-page-slide.2d95225.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/goods-list.6faa41f.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/index-list.9a97932.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/infinity-scroll.8520372.png"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/navigator-en.17430c2.jpg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/navigator-zh.4550ce1.jpg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/picker-en.c2670b3.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/picker.8b65adc.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/slide.86fdd59.jpeg"
    },
    function(t, e, i) {
        t.exports = i.p + "static/img/vertical-scroll-en.5a92a9a.jpeg"
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "example"
                },
                [i("ul", {
                    staticClass: "example-list"
                },
                [i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.verticalScrollPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.verticalScrollImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.normalScrollList")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.indexListPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.indexListImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.indexList")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.pickerPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.pickerImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.picker")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.slidePath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.slideImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.slide")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.startGuidancePath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.startGuidanceImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.startGuidance")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.fullPageVerticalSlide
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.startGuidanceImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.fullPageVerticalSlide")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.freeScrollPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.freeScrollImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.freeScroll")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.formListPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.formListImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.formList")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.goodsListPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.goodsListImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.goodsList")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.navListPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.navListImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.navList")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item"
                },
                [i("router-link", {
                    attrs: {
                        to: t.infinityPath
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.infinityScrollImg
                    }
                }), t._v(" "), i("span", [t._v(t._s(t.$t("examples.infinity")))])])], 1), t._v(" "), i("li", {
                    staticClass: "example-item placeholder"
                })]), t._v(" "), i("transition", {
                    attrs: {
                        name: "move"
                    }
                },
                [i("router-view", {
                    staticClass: "view"
                })], 1)], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(108);
        var a = i(0)(i(110), i(199), "data-v-0812f431", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(109);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("30ffd21b", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, "", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(18),
        o = a(l),
        c = i(111),
        s = a(c),
        n = i(9),
        r = a(n),
        u = i(69),
        v = a(u),
        x = i(70),
        p = a(x),
        d = i(194),
        h = a(d),
        y = i(71);
        e.
    default = {
            data: function() {
                return {
                    scrollbar: !0,
                    scrollbarFade: !0,
                    pullDownRefresh: !0,
                    pullDownRefreshThreshold: 90,
                    pullDownRefreshStop: 40,
                    pullUpLoad: !0,
                    pullUpLoadThreshold: 0,
                    pullUpLoadMoreTxt: this.$i18n.t("scrollComponent.defaultLoadTxtMore"),
                    pullUpLoadNoMoreTxt: this.$i18n.t("scrollComponent.defaultLoadTxtNoMore"),
                    startY: 0,
                    scrollToX: 0,
                    scrollToY: -200,
                    scrollToTime: 700,
                    scrollToEasing: "bounce",
                    scrollToEasingOptions: ["bounce", "swipe", "swipeBounce"],
                    items: [],
                    itemIndex: 0
                }
            },
            created: function() {
                for (var t = 0; t < 2; t++) this.items.push(this.$i18n.t("normalScrollListPage.previousTxt") + ++this.itemIndex + this.$i18n.t("normalScrollListPage.followingTxt"))
            },
            components: {
                OptionalDemo: s.
            default,
                Scroll: r.
            default,
                SwitchOption: v.
            default,
                InputOption: p.
            default,
                SelectOption: h.
            default
            },
            watch: {
                scrollbarObj: {
                    handler: function() {
                        this.rebuildScroll()
                    },
                    deep: !0
                },
                pullDownRefreshObj: {
                    handler: function(t) {
                        var e = this.$refs.scroll.scroll;
                        t ? e.openPullDown() : e.closePullDown()
                    },
                    deep: !0
                },
                pullUpLoadObj: {
                    handler: function(t) {
                        var e = this.$refs.scroll.scroll;
                        t ? e.openPullUp() : e.closePullUp()
                    },
                    deep: !0
                },
                startY: function() {
                    this.rebuildScroll()
                }
            },
            computed: {
                scrollbarObj: function() {
                    return !! this.scrollbar && {
                        fade: this.scrollbarFade
                    }
                },
                pullDownRefreshObj: function() {
                    return !! this.pullDownRefresh && {
                        threshold: parseInt(this.pullDownRefreshThreshold),
                        stop: parseInt(this.pullDownRefreshStop)
                    }
                },
                pullUpLoadObj: function() {
                    return !! this.pullUpLoad && {
                        threshold: parseInt(this.pullUpLoadThreshold),
                        txt: {
                            more: this.pullUpLoadMoreTxt,
                            noMore: this.pullUpLoadNoMoreTxt
                        }
                    }
                }
            },
            methods: {
                scrollTo: function() {
                    var t = Number(this.scrollToTime),
                    e = Number(this.scrollToY),
                    i = Number(this.scrollToX);
                    this.$refs.scroll.scrollTo(i, e, t, y.ease[this.scrollToEasing])
                },
                autoPullDownRefresh: function() {
                    this.$refs.scroll.autoPullDownRefresh()
                },
                onPullingDown: function() {
                    var t = this;
                    console.log("pulling down and load data"),
                    setTimeout(function() {
                        t._isDestroyed || (Math.random() > .5 ? t.items.unshift(t.$i18n.t("normalScrollListPage.newDataTxt") + +new Date) : t.$refs.scroll.forceUpdate())
                    },
                    2e3)
                },
                onPullingUp: function() {
                    var t = this;
                    console.log("pulling up and load data"),
                    setTimeout(function() {
                        if (!t._isDestroyed) if (Math.random() > .5) {
                            for (var e = [], i = 0; i < 10; i++) e.push(t.$i18n.t("normalScrollListPage.previousTxt") + ++t.itemIndex + t.$i18n.t("normalScrollListPage.followingTxt"));
                            t.items = t.items.concat(e)
                        } else t.$refs.scroll.forceUpdate()
                    },
                    1500)
                },
                clickItem: function() {
                    this.$router.back()
                },
                updateScrollbar: function(t) {
                    this.scrollbar = t
                },
                updateScrollbarFade: function(t) {
                    this.scrollbarFade = t
                },
                updatePullDownRefresh: function(t) {
                    this.pullDownRefresh = t
                },
                updatePullDownRefreshThreshold: function(t) {
                    this.pullDownRefreshThreshold = t
                },
                updatePullDownRefreshStop: function(t) {
                    this.pullDownRefreshStop = t
                },
                updatePullUpLoad: function(t) {
                    this.pullUpLoad = t
                },
                updatePullUpLoadThreshold: function(t) {
                    this.pullUpLoadThreshold = t
                },
                updatePullUpLoadMoreTxt: function(t) {
                    this.pullUpLoadMoreTxt = t
                },
                updatePullUpLoadNoMoreTxt: function(t) {
                    this.pullUpLoadNoMoreTxt = t
                },
                updateStartY: function(t) {
                    this.startY = t
                },
                updateScrollToX: function(t) {
                    this.scrollToX = t
                },
                updateScrollToY: function(t) {
                    this.scrollToY = t
                },
                updateScrollToTime: function(t) {
                    this.scrollToTime = t
                },
                updateScrollToEasing: function(t) {
                    this.scrollToEasing = t
                },
                rebuildScroll: function() {
                    var t = this;
                    o.
                default.nextTick(function() {
                        t.$refs.scroll.destroy(),
                        t.$refs.scroll.initScroll()
                    })
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        i(112);
        var a = i(0)(i(114), i(115), "data-v-5ff13a50", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(113);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("46709094", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".page[data-v-5ff13a50]{position:fixed;z-index:20;top:0;left:0;width:100%;height:100%;background:#fff}.page .flex-box[data-v-5ff13a50]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.page .flex-box .header[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 0 44px;-ms-flex:0 0 44px;flex:0 0 44px;line-height:44px;text-align:center;-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:99}.page .flex-box .header h1[data-v-5ff13a50]{margin:0;font-size:16px;color:#007bff}.page .flex-box .header .back[data-v-5ff13a50]{position:absolute;top:9px;left:15px;width:26px;color:#007bff}.page .flex-box .page-content[data-v-5ff13a50]{-webkit-box-flex:1;-webkit-flex:1 0 95%;-ms-flex:1 0 95%;flex:1 0 95%;overflow:auto;-webkit-overflow-scrolling:touch}.page .flex-box .page-content .title[data-v-5ff13a50]{font-size:1.5rem;font-weight:500;color:#333;padding:1rem;border-bottom:1px solid rgba(0,0,0,.1);margin-bottom:1rem}.page .flex-box .page-content .main-content[data-v-5ff13a50]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.page .flex-box .page-content .main-content .desc[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin:.7rem 0}@media screen and (min-width:42rem){.page .flex-box .page-content .main-content .desc[data-v-5ff13a50]{margin:2rem 0}}@media screen and (min-width:42rem){.page .flex-box .page-content .main-content .options[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 1 25%;-ms-flex:0 1 25%;flex:0 1 25%}}@media screen and (max-width:42rem){.page .flex-box .page-content .main-content .options[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-bottom:1rem}}.page .flex-box .page-content .main-content .options .option-list .group[data-v-5ff13a50]{margin-bottom:1rem;border:1px solid rgba(0,0,0,.1);border-radius:.3rem}.page .flex-box .page-content .main-content .options .option-list .item[data-v-5ff13a50]{height:3.2rem;border-bottom:1px solid rgba(0,0,0,.1)}.page .flex-box .page-content .main-content .options .option-list .item.sub[data-v-5ff13a50]{font-size:14px;background-color:rgba(0,0,0,.04)}.page .flex-box .page-content .main-content .options .option-list .item.sub.first[data-v-5ff13a50]{-webkit-box-shadow:0 1px 1px 1px #eee inset;box-shadow:inset 0 1px 1px 1px #eee}.page .flex-box .page-content .main-content .options .option-list .item.sub.last[data-v-5ff13a50]{border-bottom:none}@media screen and (min-width:42rem){.page .flex-box .page-content .main-content .demo[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 0 23rem;-ms-flex:0 0 23rem;flex:0 0 23rem}}@media screen and (max-width:42rem){.page .flex-box .page-content .main-content .demo[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:1rem}}.page .flex-box .page-content .main-content .demo .scroll-list-wrap[data-v-5ff13a50]{position:relative;height:200px;border:1px solid rgba(0,0,0,.1);border-radius:.3rem;-webkit-transform:rotate(0deg);transform:rotate(0deg);overflow:hidden}@media screen and (min-width:42rem){.page .flex-box .page-content .main-content .demo .scroll-list-wrap[data-v-5ff13a50]{height:30rem}}@media screen and (max-width:42rem){.page .flex-box .page-content .main-content .demo .scroll-list-wrap[data-v-5ff13a50]{height:26rem}}@media screen and (min-width:42rem){.page .flex-box .page-content .main-content .methods[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 1 25%;-ms-flex:0 1 25%;flex:0 1 25%}}@media screen and (max-width:42rem){.page .flex-box .page-content .main-content .methods[data-v-5ff13a50]{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%}}.page .flex-box .page-content .main-content .methods .method-list .group[data-v-5ff13a50]{margin-bottom:1rem;border:1px solid rgba(0,0,0,.1);border-radius:.3rem}.page .flex-box .page-content .main-content .methods .method-list .item[data-v-5ff13a50],.page .flex-box .page-content .main-content .methods .method-list button[data-v-5ff13a50]{width:100%;height:2.5rem}.page .flex-box .page-content .main-content .methods .method-list .item[data-v-5ff13a50]{background-color:rgba(0,0,0,.04);border-bottom:1px solid rgba(0,0,0,.1)}.page .flex-box .page-content .main-content .methods .method-list button[data-v-5ff13a50]{width:100%;height:2.5rem;border-bottom-left-radius:.3rem;border-bottom-right-radius:.3rem;background-color:#3b99fc;-webkit-box-shadow:0 0 0 1px #3b99fc;box-shadow:0 0 0 1px #3b99fc;border:none;outline:none;color:#fff}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.
    default = {
            name: "optional-demo",
            props: {
                title: {
                    type: String,
                default:
                    "",
                    required: !0
                },
                desc: {
                    type: String,
                default:
                    ""
                }
            },
            data: function() {
                return {
                    backIcon: i(30)
                }
            },
            methods: {
                back: function() {
                    this.$router.back()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "page"
                },
                [i("div", {
                    staticClass: "flex-box"
                },
                [i("header", {
                    staticClass: "header"
                },
                [i("h1", [t._v(t._s(t.title))]), t._v(" "), i("img", {
                    staticClass: "back",
                    attrs: {
                        src: t.backIcon,
                        alt: "back"
                    },
                    on: {
                        click: t.back
                    }
                })]), t._v(" "), i("div", {
                    ref: "wrapper",
                    staticClass: "page-content"
                },
                [i("main", {
                    staticClass: "main-content"
                },
                [i("section", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.desc,
                        expression: "desc"
                    }],
                    staticClass: "desc"
                },
                [i("span", [t._v(t._s(t.desc))])]), t._v(" "), i("div", {
                    staticClass: "options"
                },
                [i("div", {
                    staticClass: "title sub"
                },
                [t._v("Options")]), t._v(" "), i("div", {
                    staticClass: "option-list"
                },
                [t._t("options")], 2)]), t._v(" "), i("div", {
                    staticClass: "demo"
                },
                [i("div", {
                    staticClass: "title sub"
                },
                [t._v("Demo")]), t._v(" "), t._t("demo")], 2), t._v(" "), i("div", {
                    staticClass: "methods"
                },
                [i("div", {
                    staticClass: "title sub"
                },
                [t._v("Methods")]), t._v(" "), i("ul", {
                    staticClass: "method-list"
                },
                [t._t("methods")], 2)])])])])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(117);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("37c3caec", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".list-wrapper{position:relative;height:100%;overflow:hidden;background:#fff}.list-wrapper .scroll-content{position:relative;z-index:1}.list-wrapper .list-content{position:relative;z-index:10;background:#fff}.list-wrapper .list-content .list-item{height:60px;line-height:60px;font-size:18px;padding-left:20px;border-bottom:1px solid #e5e5e5}.pulldown-wrapper{position:absolute;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transition:all;transition:all}.pulldown-wrapper .after-trigger{margin-top:10px}.pullup-wrapper{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:16px 0}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(52),
        o = a(l),
        c = i(16),
        s = a(c),
        n = i(174),
        r = a(n),
        u = i(180),
        v = a(u),
        x = i(28);
        e.
    default = {
            name: "scroll",
            props: {
                data: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                probeType: {
                    type: Number,
                default:
                    1
                },
                click: {
                    type: Boolean,
                default:
                    !0
                },
                listenScroll: {
                    type: Boolean,
                default:
                    !1
                },
                listenBeforeScroll: {
                    type: Boolean,
                default:
                    !1
                },
                listenScrollEnd: {
                    type: Boolean,
                default:
                    !1
                },
                direction: {
                    type: String,
                default:
                    "vertical"
                },
                scrollbar: {
                    type: null,
                default:
                    !1
                },
                pullDownRefresh: {
                    type: null,
                default:
                    !1
                },
                pullUpLoad: {
                    type: null,
                default:
                    !1
                },
                startY: {
                    type: Number,
                default:
                    0
                },
                refreshDelay: {
                    type: Number,
                default:
                    20
                },
                freeScroll: {
                    type: Boolean,
                default:
                    !1
                },
                mouseWheel: {
                    type: Boolean,
                default:
                    !1
                },
                bounce: {
                default:
                    !0
                },
                zoom: {
                default:
                    !1
                }
            },
            data: function() {
                return {
                    beforePullDown: !0,
                    isRebounding: !1,
                    isPullingDown: !1,
                    isPullUpLoad: !1,
                    pullUpDirty: !0,
                    pullDownStyle: "",
                    bubbleY: 0
                }
            },
            computed: {
                pullUpTxt: function() {
                    var t = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || this.$i18n.t("scrollComponent.defaultLoadTxtMore"),
                    e = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || this.$i18n.t("scrollComponent.defaultLoadTxtNoMore");
                    return this.pullUpDirty ? t: e
                },
                refreshTxt: function() {
                    return this.pullDownRefresh && this.pullDownRefresh.txt || this.$i18n.t("scrollComponent.defaultRefreshTxt")
                }
            },
            created: function() {
                this.pullDownInitTop = -50
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.initScroll()
                },
                20)
            },
            destroyed: function() {
                this.$refs.scroll && this.$refs.scroll.destroy()
            },
            methods: {
                initScroll: function() {
                    var t = this;
                    if (this.$refs.wrapper) {
                        this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad) && (this.$refs.listWrapper.style.minHeight = (0, x.getRect)(this.$refs.wrapper).height + 1 + "px");
                        var e = {
                            probeType: this.probeType,
                            click: this.click,
                            scrollY: this.freeScroll || "vertical" === this.direction,
                            scrollX: this.freeScroll || "horizontal" === this.direction,
                            scrollbar: this.scrollbar,
                            pullDownRefresh: this.pullDownRefresh,
                            pullUpLoad: this.pullUpLoad,
                            startY: this.startY,
                            freeScroll: this.freeScroll,
                            mouseWheel: this.mouseWheel,
                            bounce: this.bounce,
                            zoom: this.zoom
                        };
                        this.scroll = new s.
                    default(this.$refs.wrapper, e),
                        this.listenScroll && this.scroll.on("scroll",
                        function(e) {
                            t.$emit("scroll", e)
                        }),
                        this.listenScrollEnd && this.scroll.on("scrollEnd",
                        function(e) {
                            t.$emit("scroll-end", e)
                        }),
                        this.listenBeforeScroll && (this.scroll.on("beforeScrollStart",
                        function() {
                            t.$emit("beforeScrollStart")
                        }), this.scroll.on("scrollStart",
                        function() {
                            t.$emit("scroll-start")
                        })),
                        this.pullDownRefresh && this._initPullDownRefresh(),
                        this.pullUpLoad && this._initPullUpLoad()
                    }
                },
                disable: function() {
                    this.scroll && this.scroll.disable()
                },
                enable: function() {
                    this.scroll && this.scroll.enable()
                },
                refresh: function() {
                    this.scroll && this.scroll.refresh()
                },
                scrollTo: function() {
                    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
                },
                autoPullDownRefresh: function() {
                    this.scroll && this.scroll.autoPullDownRefresh()
                },
                scrollToElement: function() {
                    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
                },
                clickItem: function(t, e) {
                    console.log(t),
                    this.$emit("click", e)
                },
                destroy: function() {
                    this.scroll.destroy()
                },
                forceUpdate: function(t) {
                    var e = this;
                    this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this._reboundPullDown().then(function() {
                        e._afterPullDown()
                    })) : this.pullUpLoad && this.isPullUpLoad ? (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpDirty = t, this.refresh()) : this.refresh()
                },
                _initPullDownRefresh: function() {
                    var t = this;
                    this.scroll.on("pullingDown",
                    function() {
                        t.beforePullDown = !1,
                        t.isPullingDown = !0,
                        t.$emit("pullingDown")
                    }),
                    this.scroll.on("scroll",
                    function(e) {
                        t.pullDownRefresh && (t.beforePullDown ? (t.bubbleY = Math.max(0, e.y + t.pullDownInitTop), t.pullDownStyle = "top:" + Math.min(e.y + t.pullDownInitTop, 10) + "px") : t.bubbleY = 0, t.isRebounding && (t.pullDownStyle = "top:" + (10 - (t.pullDownRefresh.stop - e.y)) + "px"))
                    })
                },
                _initPullUpLoad: function() {
                    var t = this;
                    this.scroll.on("pullingUp",
                    function() {
                        t.isPullUpLoad = !0,
                        t.$emit("pullingUp")
                    })
                },
                _reboundPullDown: function() {
                    var t = this,
                    e = this.pullDownRefresh.stopTime,
                    i = void 0 === e ? 600 : e;
                    return new o.
                default(function(e) {
                        setTimeout(function() {
                            t.isRebounding = !0,
                            t.scroll.finishPullDown(),
                            e()
                        },
                        i)
                    })
                },
                _afterPullDown: function() {
                    var t = this;
                    setTimeout(function() {
                        t.pullDownStyle = "top:" + t.pullDownInitTop + "px",
                        t.beforePullDown = !0,
                        t.isRebounding = !1,
                        t.refresh()
                    },
                    this.scroll.options.bounceTime)
                }
            },
            watch: {
                data: function() {
                    var t = this;
                    setTimeout(function() {
                        t.forceUpdate(!0)
                    },
                    this.refreshDelay)
                }
            },
            components: {
                Loading: r.
            default,
                Bubble: v.
            default
            }
        },
        t.exports = e.
    default
    },
    , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function l(t) {
            t.prototype.on = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
                this._events[t] || (this._events[t] = []),
                this._events[t].push([e, i])
            },
            t.prototype.once = function(t, e) {
                function i() {
                    this.off(t, i),
                    e.apply(a, arguments)
                }
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
                i.fn = e,
                this.on(t, i)
            },
            t.prototype.off = function(t, e) {
                var i = this._events[t];
                if (i) for (var a = i.length; a--;)(i[a][0] === e || i[a][0] && i[a][0].fn === e) && (0, r.spliceOne)(i, a)
            },
            t.prototype.trigger = function(t) {
                var e = this._events[t];
                if (e) for (var i = e.length,
                a = [].concat((0, n.
            default)(e)), l = 0; l < i; l++) {
                    var o = a[l],
                    s = (0, c.
                default)(o, 2),
                    r = s[0],
                    u = s[1];
                    r && r.apply(u, [].slice.call(arguments, 1))
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(67),
        c = a(o),
        s = i(68),
        n = a(s);
        e.eventMixin = l;
        var r = i(158)
    },
    , , , , , , , , , ,
    function(t, e, i) {
        "use strict";
        function a(t, e) {
            for (; e + 1 < t.length; e++) t[e] = t[e + 1];
            t.pop()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.spliceOne = a
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._init = function(t) {
                this._handleOptions(t),
                this._events = {},
                this.x = 0,
                this.y = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.setScale(1),
                this._addDOMEvents(),
                this._initExtFeatures(),
                this._watchTransition(),
                this.options.observeDOM && this._initDOMObserver(),
                this.options.autoBlur && this._handleAutoBlur(),
                this.refresh(),
                this.options.snap || this.scrollTo(this.options.startX, this.options.startY),
                this.enable()
            },
            t.prototype.setScale = function(t) {
                this.lastScale = (0, s.isUndef)(this.scale) ? t: this.scale,
                this.scale = t
            },
            t.prototype._handleOptions = function(t) {
                this.options = (0, s.extend)({},
                n, t),
                this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)": "",
                this.options.useTransition = this.options.useTransition && c.hasTransition,
                this.options.useTransform = this.options.useTransform && c.hasTransform,
                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
                this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX,
                this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY,
                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
                !0 === this.options.tap && (this.options.tap = "tap")
            },
            t.prototype._addDOMEvents = function() {
                var t = c.addEvent;
                this._handleDOMEvents(t)
            },
            t.prototype._removeDOMEvents = function() {
                var t = c.removeEvent;
                this._handleDOMEvents(t)
            },
            t.prototype._handleDOMEvents = function(t) {
                var e = this.options.bindToWrapper ? this.wrapper: window;
                t(window, "orientationchange", this),
                t(window, "resize", this),
                this.options.click && t(this.wrapper, "click", this, !0),
                this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(e, "mousemove", this), t(e, "mousecancel", this), t(e, "mouseup", this)),
                c.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(e, "touchmove", this), t(e, "touchcancel", this), t(e, "touchend", this)),
                t(this.scroller, c.style.transitionEnd, this)
            },
            t.prototype._initExtFeatures = function() {
                this.options.snap && this._initSnap(),
                this.options.scrollbar && this._initScrollbar(),
                this.options.pullUpLoad && this._initPullUp(),
                this.options.pullDownRefresh && this._initPullDown(),
                this.options.wheel && this._initWheel(),
                this.options.mouseWheel && this._initMouseWheel(),
                this.options.zoom && this._initZoom(),
                this.options.infinity && this._initInfinite()
            },
            t.prototype._watchTransition = function() {
                if ("function" == typeof o.
            default) {
                    var t = this,
                    e = !1,
                    i = this.options.useTransition ? "isInTransition": "isAnimating"; (0, o.
                default)(this, i, {
                        get: function() {
                            return e
                        },
                        set: function(i) {
                            e = i;
                            for (var a = t.scroller.children.length ? t.scroller.children: [t.scroller], l = e && !t.pulling ? "none": "auto", o = 0; o < a.length; o++) a[o].style.pointerEvents = l
                        }
                    })
                }
            },
            t.prototype._handleAutoBlur = function() {
                this.on("scrollStart",
                function() {
                    var t = document.activeElement; ! t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
                })
            },
            t.prototype._initDOMObserver = function() {
                var t = this;
                if ("undefined" != typeof MutationObserver) {
                    var e = void 0,
                    i = new MutationObserver(function(i) {
                        if (!t._shouldNotRefresh()) {
                            for (var a = !1,
                            l = !1,
                            o = 0; o < i.length; o++) {
                                var c = i[o];
                                if ("attributes" !== c.type) {
                                    a = !0;
                                    break
                                }
                                if (c.target !== t.scroller) {
                                    l = !0;
                                    break
                                }
                            }
                            a ? t.refresh() : l && (clearTimeout(e), e = setTimeout(function() {
                                t._shouldNotRefresh() || t.refresh()
                            },
                            60))
                        }
                    }),
                    a = {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    };
                    i.observe(this.scroller, a),
                    this.on("destroy",
                    function() {
                        i.disconnect()
                    })
                } else this._checkDOMUpdate()
            },
            t.prototype._shouldNotRefresh = function() {
                var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
                return this.isInTransition || this.stopFromTransition || t
            },
            t.prototype._checkDOMUpdate = function() {
                function t() {
                    if (!this.destroyed) {
                        i = (0, c.getRect)(this.scroller);
                        var t = i.width,
                        o = i.height;
                        a === t && l === o || this.refresh(),
                        a = t,
                        l = o,
                        e.call(this)
                    }
                }
                function e() {
                    var e = this;
                    setTimeout(function() {
                        t.call(e)
                    },
                    1e3)
                }
                var i = (0, c.getRect)(this.scroller),
                a = i.width,
                l = i.height;
                e.call(this)
            },
            t.prototype.handleEvent = function(t) {
                switch (t.type) {
                case "touchstart":
                case "mousedown":
                    this._start(t),
                    this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
                    break;
                case "touchmove":
                case "mousemove":
                    this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
                    break;
                case "touchend":
                case "mouseup":
                case "touchcancel":
                case "mousecancel":
                    this.scaled ? this._zoomEnd(t) : this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && ((0, c.preventDefaultException)(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._onMouseWheel(t)
                }
            },
            t.prototype.refresh = function() {
                var t = "static" === window.getComputedStyle(this.wrapper, null).position,
                e = (0, c.getRect)(this.wrapper);
                this.wrapperWidth = e.width,
                this.wrapperHeight = e.height;
                var i = (0, c.getRect)(this.scroller);
                this.scrollerWidth = Math.round(i.width * this.scale),
                this.scrollerHeight = Math.round(i.height * this.scale),
                this.relativeX = i.left,
                this.relativeY = i.top,
                t && (this.relativeX -= e.left, this.relativeY -= e.top),
                this.minScrollX = 0,
                this.minScrollY = 0;
                var a = this.options.wheel;
                a ? (this.items = this.scroller.children, this._checkWheelAllDisabled(), this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length: 0, void 0 === this.selectedIndex && (this.selectedIndex = a.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)),
                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX,
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY,
                this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth),
                this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight),
                this.endTime = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.wrapperOffset = (0, c.offset)(this.wrapper),
                this.trigger("refresh"),
                !this.scaled && this.resetPosition()
            },
            t.prototype.enable = function() {
                this.enabled = !0
            },
            t.prototype.disable = function() {
                this.enabled = !1
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(160),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (l);
        e.initMixin = a;
        var c = i(10),
        s = i(17),
        n = {
            startX: 0,
            startY: 0,
            scrollX: !1,
            scrollY: !0,
            freeScroll: !1,
            directionLockThreshold: 5,
            eventPassthrough: "",
            click: !1,
            tap: !1,
            bounce: !0,
            bounceTime: 800,
            momentum: !0,
            momentumLimitTime: 300,
            momentumLimitDistance: 15,
            swipeTime: 2500,
            swipeBounceTime: 500,
            deceleration: .0015,
            flickLimitTime: 200,
            flickLimitDistance: 100,
            resizePolling: 60,
            probeType: 0,
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: !1,
            disableMouse: c.hasTouch,
            disableTouch: !c.hasTouch,
            observeDOM: !0,
            autoBlur: !0,
            wheel: !1,
            snap: !1,
            scrollbar: !1,
            pullDownRefresh: !1,
            pullUpLoad: !1,
            mouseWheel: !1,
            stopPropagation: !1,
            zoom: !1,
            infinity: !1,
            dblclick: !1
        }
    },
    , , ,
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._start = function(t) {
                var e = l.eventType[t.type];
                if ((e === l.TOUCH_EVENT || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== e)) {
                    this.initiated = e,
                    this.options.preventDefault && !(0, l.preventDefaultException)(t.target, this.options.preventDefaultException) && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.moved = !1,
                    this.distX = 0,
                    this.distY = 0,
                    this.directionX = 0,
                    this.directionY = 0,
                    this.movingDirectionX = 0,
                    this.movingDirectionY = 0,
                    this.directionLocked = 0,
                    this._transitionTime(),
                    this.startTime = (0, n.getNow)(),
                    this.options.wheel && (this.target = t.target),
                    this.stop();
                    var i = t.touches ? t.touches[0] : t;
                    this.startX = this.x,
                    this.startY = this.y,
                    this.absStartX = this.x,
                    this.absStartY = this.y,
                    this.pointX = i.pageX,
                    this.pointY = i.pageY,
                    this.trigger("beforeScrollStart")
                }
            },
            t.prototype._move = function(t) {
                if (this.enabled && !this.destroyed && l.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation();
                    var e = t.touches ? t.touches[0] : t,
                    i = e.pageX - this.pointX,
                    a = e.pageY - this.pointY;
                    this.pointX = e.pageX,
                    this.pointY = e.pageY,
                    this.distX += i,
                    this.distY += a;
                    var o = Math.abs(this.distX),
                    c = Math.abs(this.distY),
                    s = (0, n.getNow)();
                    if (! (s - this.endTime > this.options.momentumLimitTime && !this.moved && c < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
                        if (this.directionLocked || this.options.freeScroll || (o > c + this.options.directionLockThreshold ? this.directionLocked = "h": c >= o + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" === this.directionLocked) {
                            if ("vertical" === this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" === this.options.eventPassthrough) return void(this.initiated = !1);
                            a = 0
                        } else if ("v" === this.directionLocked) {
                            if ("horizontal" === this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" === this.options.eventPassthrough) return void(this.initiated = !1);
                            i = 0
                        }
                        i = this.hasHorizontalScroll ? i: 0,
                        a = this.hasVerticalScroll ? a: 0,
                        this.movingDirectionX = i > 0 ? r.DIRECTION_RIGHT: i < 0 ? r.DIRECTION_LEFT: 0,
                        this.movingDirectionY = a > 0 ? r.DIRECTION_DOWN: a < 0 ? r.DIRECTION_UP: 0;
                        var u = this.x + i,
                        v = this.y + a,
                        x = !1,
                        p = !1,
                        d = !1,
                        h = !1,
                        y = this.options.bounce; ! 1 !== y && (x = void 0 === y.top || y.top, p = void 0 === y.bottom || y.bottom, d = void 0 === y.left || y.left, h = void 0 === y.right || y.right),
                        (u > this.minScrollX || u < this.maxScrollX) && (u = u > this.minScrollX && d || u < this.maxScrollX && h ? this.x + i / 3 : u > this.minScrollX ? this.minScrollX: this.maxScrollX),
                        (v > this.minScrollY || v < this.maxScrollY) && (v = v > this.minScrollY && x || v < this.maxScrollY && p ? this.y + a / 3 : v > this.minScrollY ? this.minScrollY: this.maxScrollY),
                        this.moved || (this.moved = !0, this.trigger("scrollStart")),
                        this._translate(u, v),
                        s - this.startTime > this.options.momentumLimitTime && (this.startTime = s, this.startX = this.x, this.startY = this.y, this.options.probeType === r.PROBE_DEBOUNCE && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        })),
                        this.options.probeType > r.PROBE_DEBOUNCE && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        });
                        var f = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
                        m = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                        g = this.pointX - f,
                        b = this.pointY - m; (g > document.documentElement.clientWidth - this.options.momentumLimitDistance || g < this.options.momentumLimitDistance || b < this.options.momentumLimitDistance || b > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t)
                    }
                }
            },
            t.prototype._end = function(t) {
                if (this.enabled && !this.destroyed && l.eventType[t.type] === this.initiated) {
                    this.initiated = !1,
                    this.options.preventDefault && !(0, l.preventDefaultException)(t.target, this.options.preventDefaultException) && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.trigger("touchEnd", {
                        x: this.x,
                        y: this.y
                    }),
                    this.isInTransition = !1;
                    var e = Math.round(this.x),
                    i = Math.round(this.y),
                    a = e - this.absStartX,
                    s = i - this.absStartY;
                    if (this.directionX = a > 0 ? r.DIRECTION_RIGHT: a < 0 ? r.DIRECTION_LEFT: 0, this.directionY = s > 0 ? r.DIRECTION_DOWN: s < 0 ? r.DIRECTION_UP: 0, !this.options.pullDownRefresh || !this._checkPullDown()) {
                        if (this._checkClick(t)) return void this.trigger("scrollCancel");
                        if (!this.resetPosition(this.options.bounceTime, o.ease.bounce)) {
                            this._translate(e, i),
                            this.endTime = (0, n.getNow)();
                            var u = this.endTime - this.startTime,
                            v = Math.abs(e - this.startX),
                            x = Math.abs(i - this.startY);
                            if (this._events.flick && u < this.options.flickLimitTime && v < this.options.flickLimitDistance && x < this.options.flickLimitDistance) return void this.trigger("flick");
                            var p = 0;
                            if (this.options.momentum && u < this.options.momentumLimitTime && (x > this.options.momentumLimitDistance || v > this.options.momentumLimitDistance)) {
                                var d = !1,
                                h = !1,
                                y = !1,
                                f = !1,
                                m = this.options.bounce; ! 1 !== m && (d = void 0 === m.top || m.top, h = void 0 === m.bottom || m.bottom, y = void 0 === m.left || m.left, f = void 0 === m.right || m.right);
                                var g = this.directionX === r.DIRECTION_RIGHT && y || this.directionX === r.DIRECTION_LEFT && f ? this.wrapperWidth: 0,
                                b = this.directionY === r.DIRECTION_DOWN && d || this.directionY === r.DIRECTION_UP && h ? this.wrapperHeight: 0,
                                w = this.hasHorizontalScroll ? (0, c.momentum)(this.x, this.startX, u, this.maxScrollX, this.minScrollX, g, this.options, this) : {
                                    destination: e,
                                    duration: 0
                                },
                                k = this.hasVerticalScroll ? (0, c.momentum)(this.y, this.startY, u, this.maxScrollY, this.minScrollY, b, this.options, this) : {
                                    destination: i,
                                    duration: 0
                                };
                                e = w.destination,
                                i = k.destination,
                                p = Math.max(w.duration, k.duration),
                                this.isInTransition = !0
                            } else this.options.wheel && (i = this._findNearestValidWheel(i).y, p = this.options.wheel.adjustTime || 400);
                            var T = o.ease.swipe;
                            if (this.options.snap) {
                                var _ = this._nearestSnap(e, i);
                                this.currentPage = _,
                                p = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(e - _.x), 1e3), Math.min(Math.abs(i - _.y), 1e3)), 300),
                                e = _.x,
                                i = _.y,
                                this.directionX = 0,
                                this.directionY = 0,
                                T = this.options.snap.easing || o.ease.bounce
                            }
                            if (e !== this.x || i !== this.y) return (e > this.minScrollX || e < this.maxScrollX || i > this.minScrollY || i < this.maxScrollY) && (T = o.ease.swipeBounce),
                            void this.scrollTo(e, i, p, T);
                            this.options.wheel && (this.selectedIndex = this._findNearestValidWheel(this.y).index),
                            this.trigger("scrollEnd", {
                                x: this.x,
                                y: this.y
                            })
                        }
                    }
                }
            },
            t.prototype._checkClick = function(t) {
                var e = this.stopFromTransition && !this.pulling;
                if (this.stopFromTransition = !1, !this.moved) {
                    if (this.options.wheel) {
                        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
                            var i = this._findNearestValidWheel(this.y).index,
                            a = Math.round((this.pointY + (0, l.offsetToBody)(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
                            this.target = this.items[i + a]
                        }
                        var c = (0, l.offset)(this.target).top,
                        s = (0, l.offset)(this.target).left;
                        return c -= this.wrapperOffset.top,
                        c -= Math.round(this.target.offsetHeight / 2 - this.wrapper.offsetHeight / 2) || 0,
                        s -= this.wrapperOffset.left,
                        s -= Math.round(this.target.offsetWidth / 2 - this.wrapper.offsetWidth / 2) || 0,
                        c = this._findNearestValidWheel(c).y,
                        this.scrollTo(s, c, this.options.wheel.adjustTime || 400, o.ease.swipe),
                        !0
                    }
                    if (!e) {
                        var r = this.options.dblclick,
                        u = !1;
                        if (r && this.lastClickTime) {
                            var v = r.delay,
                            x = void 0 === v ? 300 : v; (0, n.getNow)() - this.lastClickTime < x && (u = !0, (0, l.dblclick)(t))
                        }
                        return this.options.tap && (0, l.tap)(t, this.options.tap),
                        this.options.click && !(0, l.preventDefaultException)(t.target, this.options.preventDefaultException) && (0, l.click)(t),
                        this.lastClickTime = u ? null: (0, n.getNow)(),
                        !0
                    }
                    return ! 1
                }
                return ! 1
            },
            t.prototype._resize = function() {
                var t = this;
                this.enabled && (u.isAndroid && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                },
                this.options.resizePolling))
            },
            t.prototype._startProbe = function() {
                function t() {
                    var i = e.getComputedPosition();
                    if (e.trigger("scroll", i), !e.isInTransition) return void e.trigger("scrollEnd", i);
                    e.probeTimer = (0, s.requestAnimationFrame)(t)
                } (0, s.cancelAnimationFrame)(this.probeTimer),
                this.probeTimer = (0, s.requestAnimationFrame)(t);
                var e = this
            },
            t.prototype._transitionTime = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.scrollerStyle[l.style.transitionDuration] = t + "ms", this.options.wheel) for (var e = 0; e < this.items.length; e++) this.items[e].style[l.style.transitionDuration] = t + "ms";
                if (this.indicators) for (var i = 0; i < this.indicators.length; i++) this.indicators[i].transitionTime(t)
            },
            t.prototype._transitionTimingFunction = function(t) {
                if (this.scrollerStyle[l.style.transitionTimingFunction] = t, this.options.wheel) for (var e = 0; e < this.items.length; e++) this.items[e].style[l.style.transitionTimingFunction] = t;
                if (this.indicators) for (var i = 0; i < this.indicators.length; i++) this.indicators[i].transitionTimingFunction(t)
            },
            t.prototype._transitionEnd = function(t) {
                if (t.target === this.scroller && this.isInTransition) {
                    this._transitionTime(); (!this.pulling || this.movingDirectionY === r.DIRECTION_UP) && !this.resetPosition(this.options.bounceTime, o.ease.bounce) && (this.isInTransition = !1, this.options.probeType !== r.PROBE_REALTIME && this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                    }))
                }
            },
            t.prototype._translate = function(t, e, i) {
                if ((0, v.assert)(!(0, n.isUndef)(t) && !(0, n.isUndef)(e), "Translate x or y is null or undefined."), (0, n.isUndef)(i) && (i = this.scale), this.options.useTransform ? this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + e + "px) scale(" + i + ")" + this.translateZ: (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.options.wheel) for (var a = this.options.wheel.rotate,
                o = void 0 === a ? 25 : a, c = 0; c < this.items.length; c++) {
                    var s = o * (e / this.itemHeight + c);
                    this.items[c].style[l.style.transform] = "rotateX(" + s + "deg)"
                }
                if (this.x = t, this.y = e, this.setScale(i), this.indicators) for (var r = 0; r < this.indicators.length; r++) this.indicators[r].updatePosition()
            },
            t.prototype._animate = function(t, e, i, a) {
                function l() {
                    var h = (0, n.getNow)();
                    if (h >= d) return o.isAnimating = !1,
                    o._translate(t, e, x),
                    o.trigger("scroll", {
                        x: o.x,
                        y: o.y
                    }),
                    void(o.pulling || o.resetPosition(o.options.bounceTime) || o.trigger("scrollEnd", {
                        x: o.x,
                        y: o.y
                    }));
                    h = (h - p) / i;
                    var y = a(h),
                    f = (t - c) * y + c,
                    m = (e - u) * y + u,
                    g = (x - v) * y + v;
                    o._translate(f, m, g),
                    o.isAnimating && (o.animateTimer = (0, s.requestAnimationFrame)(l)),
                    o.options.probeType === r.PROBE_REALTIME && o.trigger("scroll", {
                        x: o.x,
                        y: o.y
                    })
                }
                var o = this,
                c = this.x,
                u = this.y,
                v = this.lastScale,
                x = this.scale,
                p = (0, n.getNow)(),
                d = p + i;
                this.isAnimating = !0,
                (0, s.cancelAnimationFrame)(this.animateTimer),
                l()
            },
            t.prototype.scrollBy = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.ease.bounce;
                t = this.x + t,
                e = this.y + e,
                this.scrollTo(t, e, i, a)
            },
            t.prototype.scrollTo = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.ease.bounce,
                l = arguments[4];
                if (this.options.wheel && (e = this._findNearestValidWheel(e).y), this.isInTransition = this.options.useTransition && i > 0 && (this.x !== t || this.y !== e), !i || this.options.useTransition) {
                    if (this._transitionTimingFunction(a.style), this._transitionTime(i), this._translate(t, e), i && this.options.probeType === r.PROBE_REALTIME && this._startProbe(), !i && !l) {
                        if (this.options.zoom) return;
                        this.trigger("scroll", {
                            x: t,
                            y: e
                        }),
                        this._reflow = document.body.offsetHeight,
                        this.resetPosition(this.options.bounceTime, o.ease.bounce) || this.trigger("scrollEnd", {
                            x: t,
                            y: e
                        })
                    }
                    this.options.wheel && (this.selectedIndex = this._findNearestValidWheel(e).index)
                } else this._animate(t, e, i, a.fn)
            },
            t.prototype.scrollToElement = function(t, e, i, a, o) {
                if (t && (t = t.nodeType ? t: this.scroller.querySelector(t), !this.options.wheel || t.classList.contains(this.options.wheel.wheelItemClass))) {
                    var c = (0, l.offset)(t);
                    c.left -= this.wrapperOffset.left,
                    c.top -= this.wrapperOffset.top,
                    !0 === i && (i = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                    !0 === a && (a = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                    c.left -= i || 0,
                    c.top -= a || 0,
                    c.left = c.left > this.minScrollX ? this.minScrollX: c.left < this.maxScrollX ? this.maxScrollX: c.left,
                    c.top = c.top > this.minScrollY ? this.minScrollY: c.top < this.maxScrollY ? this.maxScrollY: c.top,
                    this.options.wheel && (c.top = this._findNearestValidWheel(c.top).y),
                    this.scrollTo(c.left, c.top, e, o)
                }
            },
            t.prototype.resetPosition = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.ease.bounce,
                i = this.x,
                a = Math.round(i); ! this.hasHorizontalScroll || a > this.minScrollX ? i = this.minScrollX: a < this.maxScrollX && (i = this.maxScrollX);
                var l = this.y,
                c = Math.round(l);
                return ! this.hasVerticalScroll || c > this.minScrollY ? l = this.minScrollY: c < this.maxScrollY && (l = this.maxScrollY),
                (i !== this.x || l !== this.y) && (this.scrollTo(i, l, t, e), !0)
            },
            t.prototype.getComputedPosition = function() {
                var t = window.getComputedStyle(this.scroller, null),
                e = void 0,
                i = void 0;
                return this.options.useTransform ? (t = t[l.style.transform].split(")")[0].split(", "), e = +(t[12] || t[4]), i = +(t[13] || t[5])) : (e = +t.left.replace(/[^-\d.]/g, ""), i = +t.top.replace(/[^-\d.]/g, "")),
                {
                    x: e,
                    y: i
                }
            },
            t.prototype.stop = function() {
                if (this.options.useTransition && this.isInTransition) {
                    this.isInTransition = !1,
                    (0, s.cancelAnimationFrame)(this.probeTimer);
                    var t = this.getComputedPosition();
                    this._translate(t.x, t.y),
                    this.options.wheel ? this.target = this.items[this._findNearestValidWheel(t.y).index] : this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                    }),
                    this.stopFromTransition = !0
                } else ! this.options.useTransition && this.isAnimating && (this.isAnimating = !1, (0, s.cancelAnimationFrame)(this.animateTimer), this.trigger("scrollEnd", {
                    x: this.x,
                    y: this.y
                }), this.stopFromTransition = !0)
            },
            t.prototype.destroy = function() {
                this.destroyed = !0,
                this.trigger("destroy"),
                this.options.useTransition ? (0, s.cancelAnimationFrame)(this.probeTimer) : (0, s.cancelAnimationFrame)(this.animateTimer),
                this._removeDOMEvents(),
                this._events = {}
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.coreMixin = a;
        var l = i(10),
        o = i(21),
        c = i(164),
        s = i(165),
        n = i(17),
        r = i(49),
        u = i(48),
        v = i(27)
    },
    function(t, e, i) {
        "use strict";
        function a(t, e, i, a, l, o, c, s) {
            var n = t - e,
            r = Math.abs(n) / i,
            u = c.deceleration,
            v = c.itemHeight,
            x = c.swipeBounceTime,
            p = c.wheel,
            d = c.swipeTime,
            h = d,
            y = p ? 4 : 15,
            f = t + r / u * (n < 0 ? -1 : 1);
            return p && v && (f = s._findNearestValidWheel(f).y),
            f < a ? (f = o ? Math.max(a - o / 4, a - o / y * r) : a, h = x) : f > l && (f = o ? Math.min(l + o / 4, l + o / y * r) : l, h = x),
            {
                destination: Math.round(f),
                duration: h
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.momentum = a
    },
    function(t, e, i) {
        "use strict";
        function a() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.cancelAnimationFrame = e.requestAnimationFrame = void 0;
        var l = i(48);
        e.requestAnimationFrame = function() {
            return l.inBrowser ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
            function(t) {
                return window.setTimeout(t, (t.interval || 100 / 60) / 2)
            }: a
        } (),
        e.cancelAnimationFrame = function() {
            return l.inBrowser ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
            function(t) {
                window.clearTimeout(t)
            }: a
        } ()
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initSnap = function() {
                var t = this;
                this.currentPage = {};
                var e = this.options.snap;
                if (e.loop) {
                    var i = this.scroller.children;
                    i.length > 1 ? ((0, l.prepend)(i[i.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(i[1].cloneNode(!0))) : e.loop = !1
                }
                var a = e.el;
                "string" == typeof a && (a = this.scroller.querySelectorAll(a)),
                this.on("refresh",
                function() {
                    if (t.pages = [], t.wrapperWidth && t.wrapperHeight && t.scrollerWidth && t.scrollerHeight) {
                        var i = e.stepX || t.wrapperWidth,
                        o = e.stepY || t.wrapperHeight,
                        c = 0,
                        s = void 0,
                        n = void 0,
                        r = void 0,
                        u = 0,
                        v = void 0,
                        x = 0,
                        p = void 0,
                        d = void 0;
                        if (a) for (v = a.length, p = -1; u < v; u++) d = (0, l.getRect)(a[u]),
                        (0 === u || d.left <= (0, l.getRect)(a[u - 1]).left) && (x = 0, p++),
                        t.pages[x] || (t.pages[x] = []),
                        c = Math.max( - d.left, t.maxScrollX),
                        s = Math.max( - d.top, t.maxScrollY),
                        n = c - Math.round(d.width / 2),
                        r = s - Math.round(d.height / 2),
                        t.pages[x][p] = {
                            x: c,
                            y: s,
                            width: d.width,
                            height: d.height,
                            cx: n,
                            cy: r
                        },
                        c > t.maxScrollX && x++;
                        else for (n = Math.round(i / 2), r = Math.round(o / 2); c > -t.scrollerWidth;) {
                            for (t.pages[u] = [], v = 0, s = 0; s > -t.scrollerHeight;) t.pages[u][v] = {
                                x: Math.max(c, t.maxScrollX),
                                y: Math.max(s, t.maxScrollY),
                                width: i,
                                height: o,
                                cx: c - n,
                                cy: s - r
                            },
                            s -= o,
                            v++;
                            c -= i,
                            u++
                        }
                        t._checkSnapLoop();
                        var h = e._loopX ? 1 : 0,
                        y = e._loopY ? 1 : 0;
                        t._goToPage(t.currentPage.pageX || h, t.currentPage.pageY || y, 0, void 0, !0);
                        var f = e.threshold;
                        f % 1 == 0 ? (t.snapThresholdX = f, t.snapThresholdY = f) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * f), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * f))
                    }
                }),
                this.on("scrollEnd",
                function() {
                    e.loop && (e._loopX ? (0 === t.currentPage.pageX && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0, void 0, !0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0, void 0, !0)) : (0 === t.currentPage.pageY && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0, void 0, !0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0, void 0, !0)))
                }),
                !1 !== e.listenFlick && this.on("flick",
                function() {
                    var i = e.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
                    t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, i)
                }),
                this.on("destroy",
                function() {
                    if (e.loop) {
                        var i = t.scroller.children;
                        i.length > 2 && ((0, l.removeChild)(t.scroller, i[i.length - 1]), (0, l.removeChild)(t.scroller, i[0]))
                    }
                })
            },
            t.prototype._checkSnapLoop = function() {
                var t = this.options.snap;
                t.loop && this.pages && this.pages.length && (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && (0, s.warn)("Loop does not support two direction at the same time."))
            },
            t.prototype._nearestSnap = function(t, e) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var i = 0;
                if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(e - this.absStartY) <= this.snapThresholdY) return this.currentPage;
                t > this.minScrollX ? t = this.minScrollX: t < this.maxScrollX && (t = this.maxScrollX),
                e > this.minScrollY ? e = this.minScrollY: e < this.maxScrollY && (e = this.maxScrollY);
                for (var a = this.pages.length; i < a; i++) if (t >= this.pages[i][0].cx) {
                    t = this.pages[i][0].x;
                    break
                }
                a = this.pages[i].length;
                for (var l = 0; l < a; l++) if (e >= this.pages[0][l].cy) {
                    e = this.pages[0][l].y;
                    break
                }
                return i === this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x),
                l === this.currentPage.pageY && (l += this.directionY, l < 0 ? l = 0 : l >= this.pages[0].length && (l = this.pages[0].length - 1), e = this.pages[0][l].y),
                {
                    x: t,
                    y: e,
                    pageX: i,
                    pageY: l
                }
            },
            t.prototype._goToPage = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments[2],
                a = arguments[3],
                l = arguments[4],
                c = this.options.snap;
                if (c && this.pages && this.pages.length && (a = a || c.easing || o.ease.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), this.pages[t])) {
                    e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                    var s = this.pages[t][e].x,
                    n = this.pages[t][e].y;
                    i = void 0 === i ? c.speed || Math.max(Math.max(Math.min(Math.abs(s - this.x), 1e3), Math.min(Math.abs(n - this.y), 1e3)), 300) : i,
                    this.currentPage = {
                        x: s,
                        y: n,
                        pageX: t,
                        pageY: e
                    },
                    this.scrollTo(s, n, i, a, l)
                }
            },
            t.prototype.goToPage = function(t, e, i, a) {
                var l = this.options.snap;
                if (l && this.pages && this.pages.length) {
                    if (l.loop) {
                        var o = void 0;
                        l._loopX ? (o = this.pages.length - 2, t >= o ? t = o - 1 : t < 0 && (t = 0), t += 1) : (o = this.pages[0].length - 2, e >= o ? e = o - 1 : e < 0 && (e = 0), e += 1)
                    }
                    this._goToPage(t, e, i, a)
                }
            },
            t.prototype.next = function(t, e) {
                if (this.options.snap) {
                    var i = this.currentPage.pageX,
                    a = this.currentPage.pageY;
                    i++,
                    i >= this.pages.length && this.hasVerticalScroll && (i = 0, a++),
                    this._goToPage(i, a, t, e)
                }
            },
            t.prototype.prev = function(t, e) {
                if (this.options.snap) {
                    var i = this.currentPage.pageX,
                    a = this.currentPage.pageY;
                    i--,
                    i < 0 && this.hasVerticalScroll && (i = 0, a--),
                    this._goToPage(i, a, t, e)
                }
            },
            t.prototype.getCurrentPage = function() {
                var t = this.options.snap;
                if (!t) return null;
                if (t.loop) {
                    return t._loopX ? (0, c.extend)({},
                    this.currentPage, {
                        pageX: this.currentPage.pageX - 1
                    }) : (0, c.extend)({},
                    this.currentPage, {
                        pageY: this.currentPage.pageY - 1
                    })
                }
                return this.currentPage
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.snapMixin = a;
        var l = i(10),
        o = i(21),
        c = i(17),
        s = i(27)
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype.wheelTo = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.options.wheel) {
                    var e = -t * this.itemHeight;
                    this.scrollTo(0, e)
                }
            },
            t.prototype.getSelectedIndex = function() {
                return this.options.wheel && this.selectedIndex
            },
            t.prototype._initWheel = function() {
                var t = this.options.wheel;
                t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"),
                t.wheelItemClass || (t.wheelItemClass = "wheel-item"),
                t.wheelDisabledItemClass || (t.wheelDisabledItemClass = "wheel-disabled-item"),
                void 0 === t.selectedIndex && (t.selectedIndex = 0)
            },
            t.prototype._findNearestValidWheel = function(t) {
                t = t > 0 ? 0 : t < this.maxScrollY ? this.maxScrollY: t;
                for (var e = this.options.wheel,
                i = Math.abs(Math.round( - t / this.itemHeight)), a = i, l = this.items; i >= 0 && -1 !== l[i].className.indexOf(e.wheelDisabledItemClass);) i--;
                if (i < 0) for (i = a; i <= l.length - 1 && -1 !== l[i].className.indexOf(e.wheelDisabledItemClass);) i++;
                return i === l.length && (i = a),
                {
                    index: this.wheelItemsAllDisabled ? -1 : i,
                    y: -i * this.itemHeight
                }
            },
            t.prototype._checkWheelAllDisabled = function() {
                var t = this.options.wheel,
                e = this.items;
                this.wheelItemsAllDisabled = !0;
                for (var i = 0; i < e.length; i++) if ( - 1 === e[i].className.indexOf(t.wheelDisabledItemClass)) {
                    this.wheelItemsAllDisabled = !1;
                    break
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.wheelMixin = a
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initScrollbar = function() {
                var t = this,
                e = this.options.scrollbar,
                i = e.fade,
                a = void 0 === i || i,
                c = e.interactive,
                s = void 0 !== c && c;
                this.indicators = [];
                var n = void 0;
                this.options.scrollX && (n = {
                    el: l("horizontal"),
                    direction: "horizontal",
                    fade: a,
                    interactive: s
                },
                this._insertScrollBar(n.el), this.indicators.push(new o(this, n))),
                this.options.scrollY && (n = {
                    el: l("vertical"),
                    direction: "vertical",
                    fade: a,
                    interactive: s
                },
                this._insertScrollBar(n.el), this.indicators.push(new o(this, n))),
                this.on("refresh",
                function() {
                    for (var e = 0; e < t.indicators.length; e++) t.indicators[e].refresh()
                }),
                a && (this.on("scrollEnd",
                function() {
                    for (var e = 0; e < t.indicators.length; e++) t.indicators[e].fade()
                }), this.on("scrollCancel",
                function() {
                    for (var e = 0; e < t.indicators.length; e++) t.indicators[e].fade()
                }), this.on("scrollStart",
                function() {
                    for (var e = 0; e < t.indicators.length; e++) t.indicators[e].fade(!0)
                }), this.on("beforeScrollStart",
                function() {
                    for (var e = 0; e < t.indicators.length; e++) t.indicators[e].fade(!0, !0)
                })),
                this.on("destroy",
                function() {
                    t._removeScrollBars()
                })
            },
            t.prototype._insertScrollBar = function(t) {
                this.wrapper.appendChild(t)
            },
            t.prototype._removeScrollBars = function() {
                for (var t = 0; t < this.indicators.length; t++) this.indicators[t].destroy()
            }
        }
        function l(t) {
            var e = document.createElement("div"),
            i = document.createElement("div");
            return e.style.cssText = "position:absolute;z-index:9999;pointerEvents:none",
            i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",
            i.className = "bscroll-indicator",
            "horizontal" === t ? (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%", e.className = "bscroll-horizontal-scrollbar") : (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%", e.className = "bscroll-vertical-scrollbar"),
            e.style.cssText += ";overflow:hidden",
            e.appendChild(i),
            e
        }
        function o(t, e) {
            this.wrapper = e.el,
            this.wrapperStyle = this.wrapper.style,
            this.indicator = this.wrapper.children[0],
            this.indicatorStyle = this.indicator.style,
            this.scroller = t,
            this.direction = e.direction,
            e.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1,
            this.sizeRatioX = 1,
            this.sizeRatioY = 1,
            this.maxPosX = 0,
            this.maxPosY = 0,
            this.x = 0,
            this.y = 0,
            e.interactive && this._addDOMEvents()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.scrollbarMixin = a;
        var c = i(10),
        s = i(17),
        n = i(21);
        o.prototype.handleEvent = function(t) {
            switch (t.type) {
            case "touchstart":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "mouseup":
            case "touchcancel":
            case "mousecancel":
                this._end(t)
            }
        },
        o.prototype.refresh = function() {
            this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition())
        },
        o.prototype.fade = function(t, e) {
            var i = this;
            if (!e || this.visible) {
                var a = t ? 250 : 500;
                t = t ? "1": "0",
                this.wrapperStyle[c.style.transitionDuration] = a + "ms",
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = setTimeout(function() {
                    i.wrapperStyle.opacity = t,
                    i.visible = +t
                },
                0)
            }
        },
        o.prototype.updatePosition = function() {
            if ("vertical" === this.direction) {
                var t = Math.round(this.sizeRatioY * this.scroller.y);
                if (t < 0) {
                    this.transitionTime(500);
                    var e = Math.max(this.indicatorHeight + 3 * t, 8);
                    this.indicatorStyle.height = e + "px",
                    t = 0
                } else if (t > this.maxPosY) {
                    this.transitionTime(500);
                    var i = Math.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8);
                    this.indicatorStyle.height = i + "px",
                    t = this.maxPosY + this.indicatorHeight - i
                } else this.indicatorStyle.height = this.indicatorHeight + "px";
                this.y = t,
                this.scroller.options.useTransform ? this.indicatorStyle[c.style.transform] = "translateY(" + t + "px)" + this.scroller.translateZ: this.indicatorStyle.top = t + "px"
            } else {
                var a = Math.round(this.sizeRatioX * this.scroller.x);
                if (a < 0) {
                    this.transitionTime(500);
                    var l = Math.max(this.indicatorWidth + 3 * a, 8);
                    this.indicatorStyle.width = l + "px",
                    a = 0
                } else if (a > this.maxPosX) {
                    this.transitionTime(500);
                    var o = Math.max(this.indicatorWidth - 3 * (a - this.maxPosX), 8);
                    this.indicatorStyle.width = o + "px",
                    a = this.maxPosX + this.indicatorWidth - o
                } else this.indicatorStyle.width = this.indicatorWidth + "px";
                this.x = a,
                this.scroller.options.useTransform ? this.indicatorStyle[c.style.transform] = "translateX(" + a + "px)" + this.scroller.translateZ: this.indicatorStyle.left = a + "px"
            }
        },
        o.prototype.transitionTime = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.indicatorStyle[c.style.transitionDuration] = t + "ms"
        },
        o.prototype.transitionTimingFunction = function(t) {
            this.indicatorStyle[c.style.transitionTimingFunction] = t
        },
        o.prototype.destroy = function() {
            this._removeDOMEvents(),
            this.wrapper.parentNode.removeChild(this.wrapper)
        },
        o.prototype._start = function(t) {
            var e = t.touches ? t.touches[0] : t;
            t.preventDefault(),
            t.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = e.pageX,
            this.lastPointY = e.pageY,
            this.startTime = (0, s.getNow)(),
            this._handleMoveEvents(c.addEvent),
            this.scroller.trigger("beforeScrollStart")
        },
        o.prototype._move = function(t) {
            var e = t.touches ? t.touches[0] : t;
            t.preventDefault(),
            t.stopPropagation(),
            this.moved || this.scroller.trigger("scrollStart"),
            this.moved = !0;
            var i = e.pageX - this.lastPointX;
            this.lastPointX = e.pageX;
            var a = e.pageY - this.lastPointY;
            this.lastPointY = e.pageY;
            var l = this.x + i,
            o = this.y + a;
            this._pos(l, o)
        },
        o.prototype._end = function(t) {
            if (this.initiated) {
                this.initiated = !1,
                t.preventDefault(),
                t.stopPropagation(),
                this._handleMoveEvents(c.removeEvent);
                var e = this.scroller.options.snap;
                if (e) {
                    var i = e.speed,
                    a = e.easing,
                    l = void 0 === a ? n.ease.bounce: a,
                    o = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    s = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - o.x), 1e3), Math.min(Math.abs(this.scroller.y - o.y), 1e3)), 300);
                    this.scroller.x === o.x && this.scroller.y === o.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = o, this.scroller.scrollTo(o.x, o.y, s, l))
                }
                this.moved && this.scroller.trigger("scrollEnd", {
                    x: this.scroller.x,
                    y: this.scroller.y
                })
            }
        },
        o.prototype._pos = function(t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
            t = Math.round(t / this.sizeRatioX),
            e = Math.round(e / this.sizeRatioY),
            this.scroller.scrollTo(t, e),
            this.scroller.trigger("scroll", {
                x: this.scroller.x,
                y: this.scroller.y
            })
        },
        o.prototype._shouldShow = function() {
            return "vertical" === this.direction && this.scroller.hasVerticalScroll || "horizontal" === this.direction && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1)
        },
        o.prototype._calculate = function() {
            if ("vertical" === this.direction) {
                var t = this.wrapper.clientHeight;
                this.indicatorHeight = Math.max(Math.round(t * t / (this.scroller.scrollerHeight || t || 1)), 8),
                this.indicatorStyle.height = this.indicatorHeight + "px",
                this.maxPosY = t - this.indicatorHeight,
                this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY
            } else {
                var e = this.wrapper.clientWidth;
                this.indicatorWidth = Math.max(Math.round(e * e / (this.scroller.scrollerWidth || e || 1)), 8),
                this.indicatorStyle.width = this.indicatorWidth + "px",
                this.maxPosX = e - this.indicatorWidth,
                this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX
            }
        },
        o.prototype._addDOMEvents = function() {
            var t = c.addEvent;
            this._handleDOMEvents(t)
        },
        o.prototype._removeDOMEvents = function() {
            var t = c.removeEvent;
            this._handleDOMEvents(t),
            this._handleMoveEvents(t)
        },
        o.prototype._handleMoveEvents = function(t) {
            this.scroller.options.disableTouch || t(window, "touchmove", this),
            this.scroller.options.disableMouse || t(window, "mousemove", this)
        },
        o.prototype._handleDOMEvents = function(t) {
            this.scroller.options.disableTouch || (t(this.indicator, "touchstart", this), t(window, "touchend", this)),
            this.scroller.options.disableMouse || (t(this.indicator, "mousedown", this), t(window, "mouseup", this))
        }
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initPullDown = function() {
                this.options.probeType = o.PROBE_REALTIME
            },
            t.prototype._checkPullDown = function() {
                var t = this.options.pullDownRefresh,
                e = t.threshold,
                i = void 0 === e ? 90 : e,
                a = t.stop,
                c = void 0 === a ? 40 : a;
                return ! (this.directionY !== o.DIRECTION_DOWN || this.y < i) && (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, c, this.options.bounceTime, l.ease.bounce), this.pulling)
            },
            t.prototype.finishPullDown = function() {
                this.pulling = !1,
                this.resetPosition(this.options.bounceTime, l.ease.bounce)
            },
            t.prototype.openPullDown = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.options.pullDownRefresh = t,
                this._initPullDown()
            },
            t.prototype.closePullDown = function() {
                this.options.pullDownRefresh = !1
            },
            t.prototype.autoPullDownRefresh = function() {
                var t = this.options.pullDownRefresh,
                e = t.threshold,
                i = void 0 === e ? 90 : e,
                a = t.stop,
                o = void 0 === a ? 40 : a;
                this.pulling || (this.pulling = !0, this.scrollTo(this.x, i), this.trigger("pullingDown"), this.scrollTo(this.x, o, this.options.bounceTime, l.ease.bounce))
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.pullDownMixin = a;
        var l = i(21),
        o = i(49)
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initPullUp = function() {
                this.options.probeType = l.PROBE_REALTIME,
                this.pullupWatching = !1,
                this._watchPullUp()
            },
            t.prototype._watchPullUp = function() {
                this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd))
            },
            t.prototype._checkToEnd = function(t) {
                var e = this,
                i = this.options.pullUpLoad.threshold,
                a = void 0 === i ? 0 : i;
                this.movingDirectionY === l.DIRECTION_UP && t.y <= this.maxScrollY + a && (this.once("scrollEnd",
                function() {
                    e.pullupWatching = !1
                }), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd))
            },
            t.prototype.finishPullUp = function() {
                var t = this;
                this.pullupWatching ? this.once("scrollEnd",
                function() {
                    t._watchPullUp()
                }) : this._watchPullUp()
            },
            t.prototype.openPullUp = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.options.pullUpLoad = t,
                this._initPullUp()
            },
            t.prototype.closePullUp = function() {
                this.options.pullUpLoad = !1,
                this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd))
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.pullUpMixin = a;
        var l = i(49)
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initMouseWheel = function() {
                var t = this;
                this._handleMouseWheelEvent(l.addEvent),
                this.on("destroy",
                function() {
                    clearTimeout(t.mouseWheelTimer),
                    clearTimeout(t.mouseWheelEndTimer),
                    t._handleMouseWheelEvent(l.removeEvent)
                }),
                this.firstWheelOpreation = !0
            },
            t.prototype._handleMouseWheelEvent = function(t) {
                t(this.wrapper, "wheel", this),
                t(this.wrapper, "mousewheel", this),
                t(this.wrapper, "DOMMouseScroll", this)
            },
            t.prototype._onMouseWheel = function(t) {
                var e = this;
                if (this.enabled) {
                    t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.firstWheelOpreation && this.trigger("scrollStart"),
                    this.firstWheelOpreation = !1;
                    var i = this.options.mouseWheel,
                    a = i.speed,
                    l = void 0 === a ? 20 : a,
                    c = i.invert,
                    s = void 0 !== c && c,
                    n = i.easeTime,
                    r = void 0 === n ? 300 : n;
                    clearTimeout(this.mouseWheelTimer),
                    this.mouseWheelTimer = setTimeout(function() {
                        e.options.snap || r || e.trigger("scrollEnd", {
                            x: e.x,
                            y: e.y
                        }),
                        e.firstWheelOpreation = !0
                    },
                    400);
                    var u = void 0,
                    v = void 0;
                    switch (!0) {
                    case "deltaX" in t: 1 === t.deltaMode ? (u = -t.deltaX * l, v = -t.deltaY * l) : (u = -t.deltaX, v = -t.deltaY);
                        break;
                    case "wheelDeltaX" in t: u = t.wheelDeltaX / 120 * l,
                        v = t.wheelDeltaY / 120 * l;
                        break;
                    case "wheelDelta" in t: u = v = t.wheelDelta / 120 * l;
                        break;
                    case "detail" in t: u = v = -t.detail / 3 * l;
                        break;
                    default:
                        return
                    }
                    var x = s ? -1 : 1;
                    u *= x,
                    v *= x,
                    this.hasVerticalScroll || (u = v, v = 0);
                    var p = void 0,
                    d = void 0;
                    if (this.options.snap) return p = this.currentPage.pageX,
                    d = this.currentPage.pageY,
                    u > 0 ? p--:u < 0 && p++,
                    v > 0 ? d--:v < 0 && d++,
                    void this._goToPage(p, d);
                    p = this.x + Math.round(this.hasHorizontalScroll ? u: 0),
                    d = this.y + Math.round(this.hasVerticalScroll ? v: 0),
                    this.movingDirectionX = this.directionX = u > 0 ? -1 : u < 0 ? 1 : 0,
                    this.movingDirectionY = this.directionY = v > 0 ? -1 : v < 0 ? 1 : 0,
                    p > this.minScrollX ? p = this.minScrollX: p < this.maxScrollX && (p = this.maxScrollX),
                    d > this.minScrollY ? d = this.minScrollY: d < this.maxScrollY && (d = this.maxScrollY);
                    var h = this.y === d;
                    this.scrollTo(p, d, r, o.ease.swipe),
                    this.trigger("scroll", {
                        x: this.x,
                        y: this.y
                    }),
                    clearTimeout(this.mouseWheelEndTimer),
                    h && (this.mouseWheelEndTimer = setTimeout(function() {
                        e.trigger("scrollEnd", {
                            x: e.x,
                            y: e.y
                        })
                    },
                    r))
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.mouseWheelMixin = a;
        var l = i(10),
        o = i(21)
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initZoom = function() {
                var t = this.options.zoom,
                e = t.start,
                i = void 0 === e ? 1 : e,
                a = t.min,
                o = void 0 === a ? 1 : a,
                c = t.max,
                s = void 0 === c ? 4 : c;
                this.scale = Math.min(Math.max(i, o), s),
                this.setScale(this.scale),
                this.scrollerStyle[l.style.transformOrigin] = "0 0"
            },
            t.prototype._zoomTo = function(t, e, i, a) {
                this.scaled = !0;
                var l = t / (a || this.scale);
                this.setScale(t),
                this.refresh();
                var o = Math.round(this.startX - (e - this.relativeX) * (l - 1)),
                c = Math.round(this.startY - (i - this.relativeY) * (l - 1));
                o > this.minScrollX ? o = this.minScrollX: o < this.maxScrollX && (o = this.maxScrollX),
                c > this.minScrollY ? c = this.minScrollY: c < this.maxScrollY && (c = this.maxScrollY),
                this.x === o && this.y === c || this.scrollTo(o, c, this.options.bounceTime),
                this.scaled = !1
            },
            t.prototype.zoomTo = function(t, e, i) {
                var a = (0, l.offsetToBody)(this.wrapper),
                o = a.left,
                c = a.top,
                s = e + o - this.x,
                n = i + c - this.y;
                this._zoomTo(t, s, n)
            },
            t.prototype._zoomStart = function(t) {
                var e = t.touches[0],
                i = t.touches[1],
                a = Math.abs(e.pageX - i.pageX),
                c = Math.abs(e.pageY - i.pageY);
                this.startDistance = (0, o.getDistance)(a, c),
                this.startScale = this.scale;
                var s = (0, l.offsetToBody)(this.wrapper),
                n = s.left,
                r = s.top;
                this.originX = Math.abs(e.pageX + i.pageX) / 2 + n - this.x,
                this.originY = Math.abs(e.pageY + i.pageY) / 2 + r - this.y,
                this.trigger("zoomStart")
            },
            t.prototype._zoom = function(t) {
                if (this.enabled && !this.destroyed && l.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation();
                    var e = t.touches[0],
                    i = t.touches[1],
                    a = Math.abs(e.pageX - i.pageX),
                    c = Math.abs(e.pageY - i.pageY),
                    s = (0, o.getDistance)(a, c),
                    n = s / this.startDistance * this.startScale;
                    this.scaled = !0;
                    var r = this.options.zoom,
                    u = r.min,
                    v = void 0 === u ? 1 : u,
                    x = r.max,
                    p = void 0 === x ? 4 : x;
                    n < v ? n = .5 * v * Math.pow(2, n / v) : n > p && (n = 2 * p * Math.pow(.5, p / n));
                    var d = n / this.startScale,
                    h = this.startX - (this.originX - this.relativeX) * (d - 1),
                    y = this.startY - (this.originY - this.relativeY) * (d - 1);
                    this.setScale(n),
                    this.scrollTo(h, y, 0)
                }
            },
            t.prototype._zoomEnd = function(t) {
                if (this.enabled && !this.destroyed && l.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(),
                    this.options.stopPropagation && t.stopPropagation(),
                    this.isInTransition = !1,
                    this.isAnimating = !1,
                    this.initiated = 0;
                    var e = this.options.zoom,
                    i = e.min,
                    a = void 0 === i ? 1 : i,
                    o = e.max,
                    c = void 0 === o ? 4 : o,
                    s = this.scale > c ? c: this.scale < a ? a: this.scale;
                    this._zoomTo(s, this.originX, this.originY, this.startScale),
                    this.trigger("zoomEnd")
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.zoomMixin = a;
        var l = i(10),
        o = i(17)
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            t.prototype._initInfinite = function() {
                this.options.probeType = 3,
                this.maxScrollY = -n,
                this.infiniteScroller = new o(this, this.options.infinity)
            }
        }
        function l(t) {
            if (t && t.classList) return t.classList.contains("tombstone")
        }
        function o(t, e) {
            var i = this;
            this.options = e,
            (0, s.assert)("function" == typeof this.options.createTombstone, "Infinite scroll need createTombstone Function to create tombstone"),
            (0, s.assert)("function" == typeof this.options.fetch, "Infinite scroll need fetch Function to fetch new data."),
            (0, s.assert)("function" == typeof this.options.render, "Infinite scroll need render Function to render each item."),
            this.firstAttachedItem = 0,
            this.lastAttachedItem = 0,
            this.anchorScrollTop = 0,
            this.anchorItem = {
                index: 0,
                offset: 0
            },
            this.tombstoneHeight = 0,
            this.tombstoneWidth = 0,
            this.tombstones = [],
            this.tombstonesAnimationHandlers = [],
            this.items = [],
            this.loadedItems = 0,
            this.requestInProgress = !1,
            this.hasMore = !0,
            this.scroller = t,
            this.wrapperEl = this.scroller.wrapper,
            this.scrollerEl = this.scroller.scroller,
            this.scroller.on("resize",
            function() {
                i.onResize()
            }),
            this.scroller.on("destroy",
            function() {
                i.destroy()
            }),
            this._onResizeHandler = setTimeout(function() {
                i.onResize(),
                i.scroller.on("scroll",
                function() {
                    i.onScroll()
                })
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.infiniteMixin = a;
        var c = i(10),
        s = i(27),
        n = 2e3;
        o.prototype.destroy = function() {
            var t = this;
            clearTimeout(this._onResizeHandler),
            this.tombstonesAnimationHandlers.forEach(function(t) {
                clearTimeout(t)
            }),
            this.tombstonesAnimationHandlers = null,
            this.items.forEach(function(e) {
                e.node && (t.scrollerEl.removeChild(e.node), e.node = null)
            }),
            this.scroller.infiniteScroller = null,
            this.scroller = null,
            this.wrapperEl = null,
            this.scrollerEl = null,
            this.items = null,
            this.tombstones = null
        },
        o.prototype.onScroll = function() {
            var t = -this.scroller.y,
            e = t - this.anchorScrollTop;
            this.anchorItem = 0 === t ? {
                index: 0,
                offset: 0
            }: this._calculateAnchoredItem(this.anchorItem, e),
            this.anchorScrollTop = t;
            var i = this._calculateAnchoredItem(this.anchorItem, this.scroller.wrapperHeight),
            a = this.anchorItem.index,
            l = i.index;
            e < 0 ? (a -= 30, l += 10) : (a -= 10, l += 30),
            this.fill(a, l),
            this.maybeRequestContent()
        },
        o.prototype.onResize = function() {
            var t = this.options.createTombstone();
            t.style.position = "absolute",
            this.scrollerEl.appendChild(t),
            t.style.display = "",
            this.tombstoneHeight = t.offsetHeight,
            this.tombstoneWidth = t.offsetWidth,
            this.scrollerEl.removeChild(t);
            for (var e = 0; e < this.items.length; e++) this.items[e].height = this.items[e].width = 0;
            this.onScroll()
        },
        o.prototype.fill = function(t, e) {
            this.firstAttachedItem = Math.max(0, t),
            this.hasMore || (e = Math.min(e, this.items.length)),
            this.lastAttachedItem = e,
            this.attachContent()
        },
        o.prototype.maybeRequestContent = function() {
            var t = this;
            if (!this.requestInProgress && this.hasMore) {
                var e = this.lastAttachedItem - this.loadedItems;
                e <= 0 || (this.requestInProgress = !0, this.options.fetch(e).then(function(e) {
                    if (t.requestInProgress = !1, e) t.addContent(e);
                    else {
                        t.hasMore = !1;
                        var i = t._removeTombstones(),
                        a = 0;
                        t.anchorItem.index <= t.items.length ? (a = t._fixScrollPosition(), t._setupAnimations({},
                        a), t.scroller.resetPosition(t.scroller.options.bounceTime)) : (t.anchorItem.index -= i, a = t._fixScrollPosition(), t._setupAnimations({},
                        a), t.scroller.stop(), t.scroller.resetPosition(), t.onScroll())
                    }
                }))
            }
        },
        o.prototype.addContent = function(t) {
            for (var e = 0; e < t.length; e++) this.items.length <= this.loadedItems && this._addItem(),
            this.items[this.loadedItems++].data = t[e];
            this.attachContent(),
            this.maybeRequestContent()
        },
        o.prototype.attachContent = function() {
            var t = this._collectUnusedNodes(),
            e = this._createDOMNodes(t);
            this._cleanupUnusedNodes(t),
            this._cacheNodeSize();
            var i = this._fixScrollPosition();
            this._setupAnimations(e, i)
        },
        o.prototype.resetMore = function() {
            this.hasMore = !0
        },
        o.prototype._removeTombstones = function() {
            for (var t = void 0,
            e = 0,
            i = this.items.length,
            a = 0; a < i; a++) {
                var o = this.items[a].node,
                c = this.items[a].data;
                o && !l(o) || c || (void 0 === t && (t = a), o && this.scrollerEl.removeChild(o))
            }
            return e = i - t,
            this.items.splice(t),
            this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length),
            e
        },
        o.prototype._collectUnusedNodes = function() {
            for (var t = [], e = 0; e < this.items.length; e++) if (e !== this.firstAttachedItem) {
                var i = this.items[e].node;
                i && (l(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : t.push(i)),
                this.items[e].node = null
            } else e = this.lastAttachedItem - 1;
            return t
        },
        o.prototype._createDOMNodes = function(t) {
            for (var e = {},
            i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
                for (; this.items.length <= i;) this._addItem();
                var a = this.items[i].node,
                o = this.items[i].data;
                if (a) {
                    if (!l(a) || !o) continue;
                    a.style.zIndex = 1,
                    e[i] = [a, this.items[i].top - this.anchorScrollTop],
                    this.items[i].node = null
                }
                var c = o ? this.options.render(o, t.pop()) : this._getTombStone();
                c.style.position = "absolute",
                this.items[i].top = -1,
                this.scrollerEl.appendChild(c),
                this.items[i].node = c
            }
            return e
        },
        o.prototype._cleanupUnusedNodes = function(t) {
            for (; t.length;) this.scrollerEl.removeChild(t.pop())
        },
        o.prototype._cacheNodeSize = function() {
            for (var t = this.firstAttachedItem; t < this.lastAttachedItem; t++) {
                var e = this.items[t];
                if (e.data && !e.height) {
                    var i = l(e.node);
                    e.height = i ? this.tombstoneHeight: e.node.offsetHeight,
                    e.width = i ? this.tombstoneWidth: e.node.offsetWidth
                }
            }
        },
        o.prototype._fixScrollPosition = function() {
            this.anchorScrollTop = 0;
            for (var t = 0; t < this.anchorItem.index; t++) this.anchorScrollTop += this.items[t].height || this.tombstoneHeight;
            this.anchorScrollTop += this.anchorItem.offset;
            for (var e = this.anchorScrollTop - this.anchorItem.offset,
            i = this.anchorItem.index; i > this.firstAttachedItem;) e -= this.items[i - 1].height || this.tombstoneHeight,
            i--;
            return e
        },
        o.prototype._setupAnimations = function(t, e) {
            var i = this;
            for (var a in t) {
                var l = t[a];
                this.items[a].node.style[c.style.transform] = "translateY(" + (this.anchorScrollTop + l[1]) + "px) scale(" + this.tombstoneWidth / this.items[a].width + ", " + this.tombstoneHeight / this.items[a].height + ")",
                this.items[a].node.offsetTop,
                l[0].offsetTop,
                this.items[a].node.style[c.style.transition] = c.cssVendor + "transform 200ms"
            }
            for (var o = this.firstAttachedItem; o < this.lastAttachedItem; o++) {
                var s = t[o];
                if (s) {
                    var r = s[0];
                    r.style[c.style.transition] = c.cssVendor + "transform 200ms, opacity 200ms",
                    r.style[c.style.transform] = "translateY(" + e + "px) scale(" + this.items[o].width / this.tombstoneWidth + ", " + this.items[o].height / this.tombstoneHeight + ")",
                    r.style.opacity = 0
                }
                e !== this.items[o].top && (s || (this.items[o].node.style[c.style.transition] = ""), this.items[o].node.style[c.style.transform] = "translateY(" + e + "px)"),
                this.items[o].top = e,
                e += this.items[o].height || this.tombstoneHeight
            }
            this.scroller.maxScrollY = -(e - this.scroller.wrapperHeight + (this.hasMore ? n: 0));
            var u = setTimeout(function() {
                for (var e in t) {
                    var a = t[e];
                    a[0].style.display = "none",
                    i.tombstones.push(a[0])
                }
            },
            200);
            this.tombstonesAnimationHandlers.push(u)
        },
        o.prototype._getTombStone = function() {
            var t = this.tombstones.pop();
            return t ? (t.style.display = "", t.style.opacity = 1, t.style[c.style.transform] = "", t.style[c.style.transition] = "", t) : this.options.createTombstone()
        },
        o.prototype._addItem = function() {
            this.items.push({
                data: null,
                node: null,
                height: 0,
                width: 0,
                top: 0
            })
        },
        o.prototype._calculateAnchoredItem = function(t, e) {
            if (0 === e) return t;
            var i = t.index,
            a = 0;
            if ((e += t.offset) < 0) {
                for (; e < 0 && i > 0 && this.items[i - 1].height;) e += this.items[i - 1].height,
                i--;
                a = Math.max( - i, Math.ceil(Math.min(e, 0) / this.tombstoneHeight))
            } else {
                for (; e > 0 && i < this.items.length && this.items[i].height && this.items[i].height < e;) e -= this.items[i].height,
                i++; (i >= this.items.length || !this.items[i].height) && (a = Math.floor(Math.max(e, 0) / this.tombstoneHeight))
            }
            return i += a,
            e -= a * this.tombstoneHeight,
            {
                index: i,
                offset: e
            }
        }
    },
    function(t, e, i) {
        i(175);
        var a = i(0)(i(177), i(178), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(176);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("6aa9a61f", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".mf-loading-container img{width:20px;height:20px;display:block}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.
    default = {
            name: "loading"
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                a = t._self._c || e;
                return a("div", {
                    staticClass: "mf-loading-container"
                },
                [a("img", {
                    attrs: {
                        src: i(179)
                    }
                })])
            }]
        }
    },
    function(t, e) {
        t.exports = "data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7"
    },
    function(t, e, i) {
        i(181);
        var a = i(0)(i(183), i(184), "data-v-1189166e", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(182);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("8257641c", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, "", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            props: {
                y: {
                    type: Number,
                default:
                    0
                }
            },
            data: function() {
                return {
                    width: 50,
                    height: 80
                }
            },
            computed: {
                distance: function() {
                    return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance))
                },
                style: function() {
                    return "width:" + this.width / this.ratio + "px;height:" + this.height / this.ratio + "px"
                }
            },
            created: function() {
                this.ratio = window.devicePixelRatio,
                this.width *= this.ratio,
                this.height *= this.ratio,
                this.initRadius = 18 * this.ratio,
                this.minHeadRadius = 12 * this.ratio,
                this.minTailRadius = 5 * this.ratio,
                this.initArrowRadius = 10 * this.ratio,
                this.minArrowRadius = 6 * this.ratio,
                this.arrowWidth = 3 * this.ratio,
                this.maxDistance = 40 * this.ratio,
                this.initCenterX = 25 * this.ratio,
                this.initCenterY = 25 * this.ratio,
                this.headCenter = {
                    x: this.initCenterX,
                    y: this.initCenterY
                }
            },
            mounted: function() {
                this._draw()
            },
            methods: {
                _draw: function() {
                    var t = this.$refs.bubble,
                    e = t.getContext("2d");
                    e.clearRect(0, 0, t.width, t.height),
                    this._drawBubble(e),
                    this._drawArrow(e)
                },
                _drawBubble: function(t) {
                    t.save(),
                    t.beginPath();
                    var e = this.distance / this.maxDistance,
                    i = this.initRadius - (this.initRadius - this.minHeadRadius) * e;
                    this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * e,
                    t.arc(this.headCenter.x, this.headCenter.y, i, 0, Math.PI, !0);
                    var a = this.initRadius - (this.initRadius - this.minTailRadius) * e,
                    l = {
                        x: this.headCenter.x,
                        y: this.headCenter.y + this.distance
                    },
                    o = {
                        x: l.x - a,
                        y: l.y
                    },
                    c = {
                        x: o.x,
                        y: o.y - this.distance / 2
                    };
                    t.quadraticCurveTo(c.x, c.y, o.x, o.y),
                    t.arc(l.x, l.y, a, Math.PI, 0, !0);
                    var s = {
                        x: this.headCenter.x + i,
                        y: this.headCenter.y
                    },
                    n = {
                        x: l.x + a,
                        y: s.y + this.distance / 2
                    };
                    t.quadraticCurveTo(n.x, n.y, s.x, s.y),
                    t.fillStyle = "rgb(170,170,170)",
                    t.fill(),
                    t.strokeStyle = "rgb(153,153,153)",
                    t.stroke(),
                    t.restore()
                },
                _drawArrow: function(t) {
                    t.save(),
                    t.beginPath();
                    var e = this.distance / this.maxDistance,
                    i = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * e;
                    t.arc(this.headCenter.x, this.headCenter.y, i - (this.arrowWidth - e), -Math.PI / 2, 0, !0),
                    t.arc(this.headCenter.x, this.headCenter.y, i, 0, 3 * Math.PI / 2, !1),
                    t.lineTo(this.headCenter.x, this.headCenter.y - i - this.arrowWidth / 2 + e),
                    t.lineTo(this.headCenter.x + 2 * this.arrowWidth - 2 * e, this.headCenter.y - i + this.arrowWidth / 2),
                    t.lineTo(this.headCenter.x, this.headCenter.y - i + 3 * this.arrowWidth / 2 - e),
                    t.fillStyle = "rgb(255,255,255)",
                    t.fill(),
                    t.strokeStyle = "rgb(170,170,170)",
                    t.stroke(),
                    t.restore()
                }
            },
            watch: {
                y: function() {
                    this._draw()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("canvas", {
                    ref: "bubble",
                    style: t.style,
                    attrs: {
                        width: t.width,
                        height: t.height
                    }
                })
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    ref: "wrapper",
                    staticClass: "list-wrapper"
                },
                [i("div", {
                    staticClass: "scroll-content"
                },
                [i("div", {
                    ref: "listWrapper"
                },
                [t._t("default", [i("ul", {
                    staticClass: "list-content"
                },
                t._l(t.data,
                function(e) {
                    return i("li", {
                        staticClass: "list-item",
                        on: {
                            click: function(i) {
                                return t.clickItem(i, e)
                            }
                        }
                    },
                    [t._v(t._s(e))])
                }), 0)])], 2), t._v(" "), t._t("pullup", [t.pullUpLoad ? i("div", {
                    staticClass: "pullup-wrapper"
                },
                [t.isPullUpLoad ? i("div", {
                    staticClass: "after-trigger"
                },
                [i("loading")], 1) : i("div", {
                    staticClass: "before-trigger"
                },
                [i("span", [t._v(t._s(t.pullUpTxt))])])]) : t._e()], {
                    pullUpLoad: t.pullUpLoad,
                    isPullUpLoad: t.isPullUpLoad
                })], 2), t._v(" "), t._t("pulldown", [t.pullDownRefresh ? i("div", {
                    ref: "pulldown",
                    staticClass: "pulldown-wrapper",
                    style: t.pullDownStyle
                },
                [t.beforePullDown ? i("div", {
                    staticClass: "before-trigger"
                },
                [i("bubble", {
                    attrs: {
                        y: t.bubbleY
                    }
                })], 1) : i("div", {
                    staticClass: "after-trigger"
                },
                [t.isPullingDown ? i("div", {
                    staticClass: "loading"
                },
                [i("loading")], 1) : i("div", [i("span", [t._v(t._s(t.refreshTxt))])])])]) : t._e()], {
                    pullDownRefresh: t.pullDownRefresh,
                    pullDownStyle: t.pullDownStyle,
                    beforePullDown: t.beforePullDown,
                    isPullingDown: t.isPullingDown,
                    bubbleY: t.bubbleY
                })], 2)
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(187);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("1425ef43", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".switch-option[data-v-5c4699cc]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;padding:0 15px}.switch-option .name[data-v-5c4699cc],.switch-option[data-v-5c4699cc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.switch-option .name[data-v-5c4699cc]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.switch-option .switch-ellipse[data-v-5c4699cc]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-top:5px;display:inline-block;position:relative;height:31px;width:51px;background-color:#fff;border-radius:1000px;border:2px solid rgba(0,0,0,.1);-webkit-transition:all .1s;transition:all .1s}.switch-option .switch-ellipse.active[data-v-5c4699cc]{background-color:#3b99fc;border-color:transparent;-webkit-transition:all .2s ease .2s;transition:all .2s ease .2s}.switch-option .switch-ellipse .switch-circle[data-v-5c4699cc]{position:absolute;display:inline-block;height:27px;width:27px;background:#fff;border-radius:50%;border:1px solid rgba(0,0,0,.1);-webkit-box-shadow:-1px 1px 1px #999;box-shadow:-1px 1px 1px #999;top:0;left:0;-webkit-transition:all .3s;transition:all .3s}.switch-option .switch-ellipse .switch-circle.active[data-v-5c4699cc]{left:21px;-webkit-transition:all .4s ease .1s;transition:all .4s ease .1s}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.
    default = {
            name: "switch-option",
            props: {
                name: {
                    type: String
                },
                value: null
            },
            data: function() {
                return {
                    checked: this.value
                }
            },
            watch: {
                checked: function(t) {
                    this.$emit("update:value", t)
                }
            },
            methods: {
                clickSwitch: function() {
                    this.checked = !this.checked
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "switch-option"
                },
                [i("span", {
                    staticClass: "name"
                },
                [t._v(t._s(t.name))]), t._v(" "), i("div", {
                    staticClass: "switch-ellipse",
                    class: {
                        active: t.checked
                    },
                    on: {
                        click: t.clickSwitch
                    }
                },
                [i("span", {
                    staticClass: "switch-circle",
                    class: {
                        active: t.checked
                    }
                })])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(191);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("4eea4c5f", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".input-option[data-v-6bb7192e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;padding-left:15px}.input-option .name[data-v-6bb7192e]{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-option input[data-v-6bb7192e]{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;width:10rem;padding-left:.8rem;background-color:#fff;border-left:1px solid rgba(0,0,0,.1);-webkit-box-shadow:0 0 1px 1px #eee inset;box-shadow:inset 0 0 1px 1px #eee;outline:none}.input-option input[data-v-6bb7192e]:focus{border:1px solid #007bff}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.
    default = {
            name: "input-option",
            props: {
                name: {
                    type: String
                },
                value: null,
                minValue: null
            },
            data: function() {
                return {
                    inputValue: this.value
                }
            },
            watch: {
                inputValue: function(t) {
                    this.$emit("update:value", this.minValue ? Math.max(t, this.minValue) : t)
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "input-option"
                },
                [i("span", {
                    staticClass: "name"
                },
                [t._v(t._s(t.name))]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.inputValue
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.inputValue = e.target.value)
                        }
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(195);
        var a = i(0)(i(197), i(198), "data-v-17a8423c", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(196);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("1c1cdaa6", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".input-option[data-v-17a8423c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;padding-left:15px}.input-option .name[data-v-17a8423c]{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-option select[data-v-17a8423c]{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;width:10rem;padding-left:.8rem;background-color:#fff;border:none;border-left:1px solid rgba(0,0,0,.1);-webkit-box-shadow:0 0 1px 1px #eee inset;box-shadow:inset 0 0 1px 1px #eee;outline:none;border-radius:0}.input-option select[data-v-17a8423c]:focus{border:1px solid #007bff}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.
    default = {
            name: "select-option",
            props: {
                name: {
                    type: String
                },
                options: {
                    type: Array
                },
                value: null
            },
            data: function() {
                return {
                    selected: this.value
                }
            },
            watch: {
                selected: function(t) {
                    this.$emit("update:value", t)
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "input-option"
                },
                [i("span", {
                    staticClass: "name"
                },
                [t._v(t._s(t.name))]), t._v(" "), i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.selected,
                        expression: "selected"
                    }],
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options,
                            function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value: t.value
                            });
                            t.selected = e.target.multiple ? i: i[0]
                        }
                    }
                },
                t._l(t.options,
                function(e) {
                    return i("option", {
                        domProps: {
                            value: e
                        }
                    },
                    [t._v("\n      " + t._s(e) + "\n    ")])
                }), 0)])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("optional-demo", {
                    staticClass: "scroll-view",
                    attrs: {
                        title: t.$t("examples.normalScrollList"),
                        desc: t.$t("normalScrollListPage.desc")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "options"
                    },
                    slot: "options"
                },
                [i("div", {
                    staticClass: "group"
                },
                [i("switch-option", {
                    staticClass: "item",
                    attrs: {
                        name: t.$t("normalScrollListPage.scrollbar"),
                        value: t.scrollbar
                    },
                    on: {
                        "update:value": t.updateScrollbar
                    }
                }), t._v(" "), t.scrollbar ? i("switch-option", {
                    staticClass: "item sub first last",
                    attrs: {
                        name: "fade",
                        value: t.scrollbarFade
                    },
                    on: {
                        "update:value": t.updateScrollbarFade
                    }
                }) : t._e()], 1), t._v(" "), i("div", {
                    staticClass: "group"
                },
                [i("switch-option", {
                    staticClass: "item",
                    attrs: {
                        name: t.$t("normalScrollListPage.pullDownRefresh"),
                        value: t.pullDownRefresh
                    },
                    on: {
                        "update:value": t.updatePullDownRefresh
                    }
                }), t._v(" "), t.pullDownRefresh ? i("input-option", {
                    staticClass: "item sub first",
                    attrs: {
                        name: "threshold (≥ 40)",
                        value: t.pullDownRefreshThreshold,
                        "min-value": "40"
                    },
                    on: {
                        "update:value": t.updatePullDownRefreshThreshold
                    }
                }) : t._e(), t._v(" "), t.pullDownRefresh ? i("input-option", {
                    staticClass: "item sub last",
                    attrs: {
                        name: "stop (≥ 40)",
                        value: t.pullDownRefreshStop,
                        "min-value": "40"
                    },
                    on: {
                        "update:value": t.updatePullDownRefreshStop
                    }
                }) : t._e()], 1), t._v(" "), i("div", {
                    staticClass: "group"
                },
                [i("switch-option", {
                    staticClass: "item",
                    attrs: {
                        name: t.$t("normalScrollListPage.pullUpLoad"),
                        value: t.pullUpLoad
                    },
                    on: {
                        "update:value": t.updatePullUpLoad
                    }
                }), t._v(" "), t.pullUpLoad ? i("input-option", {
                    staticClass: "item sub first",
                    attrs: {
                        name: "threshold",
                        value: t.pullUpLoadThreshold
                    },
                    on: {
                        "update:value": t.updatePullUpLoadThreshold
                    }
                }) : t._e(), t._v(" "), t.pullUpLoad ? i("input-option", {
                    staticClass: "item sub first",
                    attrs: {
                        name: "moreTxt",
                        value: t.pullUpLoadMoreTxt
                    },
                    on: {
                        "update:value": t.updatePullUpLoadMoreTxt
                    }
                }) : t._e(), t._v(" "), t.pullUpLoad ? i("input-option", {
                    staticClass: "item sub first last",
                    attrs: {
                        name: "noMoreTxt",
                        value: t.pullUpLoadNoMoreTxt
                    },
                    on: {
                        "update:value": t.updatePullUpLoadNoMoreTxt
                    }
                }) : t._e()], 1), t._v(" "), i("div", {
                    staticClass: "group"
                },
                [i("input-option", {
                    staticClass: "item",
                    attrs: {
                        name: "startY",
                        value: t.startY
                    },
                    on: {
                        "update:value": t.updateStartY
                    }
                })], 1)]), t._v(" "), i("div", {
                    staticClass: "scroll-list-wrap",
                    attrs: {
                        slot: "demo"
                    },
                    slot: "demo"
                },
                [i("scroll", {
                    ref: "scroll",
                    attrs: {
                        data: t.items,
                        scrollbar: t.scrollbarObj,
                        pullDownRefresh: t.pullDownRefreshObj,
                        pullUpLoad: t.pullUpLoadObj,
                        startY: parseInt(t.startY)
                    },
                    on: {
                        pullingDown: t.onPullingDown,
                        pullingUp: t.onPullingUp,
                        click: t.clickItem
                    }
                })], 1), t._v(" "), i("div", {
                    attrs: {
                        slot: "methods"
                    },
                    slot: "methods"
                },
                [i("div", {
                    staticClass: "group"
                },
                [i("input-option", {
                    staticClass: "item",
                    attrs: {
                        name: "x",
                        value: t.scrollToX
                    },
                    on: {
                        "update:value": t.updateScrollToX
                    }
                }), t._v(" "), i("input-option", {
                    staticClass: "item",
                    attrs: {
                        name: "y",
                        value: t.scrollToY
                    },
                    on: {
                        "update:value": t.updateScrollToY
                    }
                }), t._v(" "), i("input-option", {
                    staticClass: "item",
                    attrs: {
                        name: "time",
                        value: t.scrollToTime
                    },
                    on: {
                        "update:value": t.updateScrollToTime
                    }
                }), t._v(" "), i("select-option", {
                    staticClass: "item",
                    attrs: {
                        name: "easing",
                        value: t.scrollToEasing,
                        options: t.scrollToEasingOptions
                    },
                    on: {
                        "update:value": t.updateScrollToEasing
                    }
                }), t._v(" "), i("button", {
                    on: {
                        click: t.scrollTo
                    }
                },
                [t._v("scrollTo")])], 1), t._v(" "), i("div", {
                    staticClass: "group"
                },
                [t.pullDownRefresh ? i("input-option", {
                    staticClass: "item sub first",
                    attrs: {
                        name: "threshold",
                        value: t.pullDownRefreshThreshold,
                        "min-value": "40"
                    },
                    on: {
                        "update:value": t.updatePullDownRefreshThreshold
                    }
                }) : t._e(), t._v(" "), t.pullDownRefresh ? i("input-option", {
                    staticClass: "item sub last",
                    attrs: {
                        name: "stop",
                        value: t.pullDownRefreshStop
                    },
                    on: {
                        "update:value": t.updatePullDownRefreshStop
                    }
                }) : t._e(), t._v(" "), i("button", {
                    on: {
                        click: t.autoPullDownRefresh
                    }
                },
                [t._v("autoPullDownRefresh")])], 1)])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(201);
        var a = i(0)(i(203), i(214), "data-v-4319571c", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(202);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("206812fc", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".split[data-v-4319571c]{position:relative;z-index:10;width:100%;height:10px;margin-top:-10px;background:#efeff4}.view-wrapper[data-v-4319571c]{position:fixed;top:54px;left:0;bottom:0;width:100%}.view-wrapper .index-list-wrapper[data-v-4319571c]{height:100%;width:95%;margin:0 auto}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(208),
        s = a(c),
        n = i(213),
        r = a(n);
        e.
    default = {
            components: {
                Page: o.
            default,
                IndexList: s.
            default
            },
            data: function() {
                return {
                    title: this.$i18n.t("indexListPage.title"),
                    cityData: r.
                default
                }
            },
            computed: {
                data: function() {
                    var t = [];
                    return this.cityData.forEach(function(e) {
                        var i = {};
                        i.name = e.name,
                        i.items = [],
                        e.cities.forEach(function(t) {
                            var e = {};
                            e.name = t.name,
                            e.value = t.cityid,
                            i.items.push(e)
                        }),
                        t.push(i)
                    }),
                    t
                }
            },
            methods: {
                selectItem: function(t) {
                    this.$router.back(),
                    console.log(t)
                },
                clickTitle: function(t) {
                    console.log(t)
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(205);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("7373c2b9", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".page[data-v-4a3c788e]{position:fixed;z-index:20;top:0;left:0;width:100%;height:100%;background:#efeff4}.page .header[data-v-4a3c788e]{position:relative;height:44px;line-height:44px;text-align:center;background-color:#f7f7f7;-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:99}.page .header h1[data-v-4a3c788e]{margin:0;font-size:16px;color:#007bff}.page .header .back[data-v-4a3c788e]{position:absolute;top:9px;left:15px;width:26px;color:#007bff}.page .wrapper[data-v-4a3c788e]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:calc(100% - 44px);overflow:hidden;-webkit-overflow-scrolling:touch}.page .wrapper .desc[data-v-4a3c788e]{padding:20px;line-height:20px;font-size:14px}.page .wrapper .content[data-v-4a3c788e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;margin:0 10px 10px}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            props: {
                title: {
                    type: String,
                default:
                    "",
                    required: !0
                },
                desc: {
                    type: String,
                default:
                    ""
                },
                content: {
                    type: String,
                default:
                    ""
                }
            },
            data: function() {
                return {
                    backIcon: i(30)
                }
            },
            methods: {
                back: function() {
                    this.$router.back()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "page"
                },
                [i("header", {
                    staticClass: "header"
                },
                [i("h1", [t._v(t._s(t.title))]), t._v(" "), i("img", {
                    staticClass: "back",
                    attrs: {
                        src: t.backIcon,
                        alt: "back"
                    },
                    on: {
                        click: t.back
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "wrapper"
                },
                [i("section", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.desc,
                        expression: "desc"
                    }],
                    staticClass: "desc"
                },
                [t._t("desc", [t._v(t._s(t.desc))])], 2), t._v(" "), i("main", {
                    staticClass: "content"
                },
                [t._t("content", [t._v(t._s(t.content))])], 2)])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(209);
        var a = i(0)(i(211), i(212), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(210);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("74ee64a8", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, 'body,html{line-height:1;font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;-webkit-tap-highlight-color:transparent}.border-bottom-1px,.border-left-1px,.border-right-1px,.border-top-1px{position:relative}.border-bottom-1px:after,.border-bottom-1px:before,.border-left-1px:after,.border-left-1px:before,.border-right-1px:after,.border-right-1px:before,.border-top-1px:after,.border-top-1px:before{content:"";display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}.border-top-1px:before{border-top:1px solid #ebebeb;left:0;top:0;width:100%;-webkit-transform-origin:0 top;transform-origin:0 top}.border-right-1px:after{border-right:1px solid #f5f5f5;top:0;right:0;height:100%;-webkit-transform-origin:right 0;transform-origin:right 0}.border-bottom-1px:after{border-bottom:1px solid #ebebeb;left:0;bottom:0;width:100%;-webkit-transform-origin:0 bottom;transform-origin:0 bottom}.border-left-1px:before{border-left:1px solid #f5f5f5;top:0;left:0;height:100%;-webkit-transform-origin:left 0;transform-origin:left 0}@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){.border-top-1px:before{width:200%}.border-right-1px:after,.border-top-1px:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.border-right-1px:after{height:200%}.border-bottom-1px:after{width:200%}.border-bottom-1px:after,.border-left-1px:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.border-left-1px:before{height:200%}}@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){.border-top-1px:before{width:300%}.border-right-1px:after,.border-top-1px:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.border-right-1px:after{height:300%}.border-bottom-1px:after{width:300%}.border-bottom-1px:after,.border-left-1px:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.border-left-1px:before{height:300%}}.index-list{position:relative;width:100%;height:100%}.index-list .list-wrapper{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;background:#fff}.index-list .list-wrapper .index-list-content{background:#fff;border-radius:2px}.index-list .list-wrapper .index-list-content .index-list-title{padding:14px 16px;font-size:14px;line-height:1.6;color:#333}.index-list .list-wrapper .index-list-content .index-list-anchor{padding:16px 16px 10px;line-height:1;font-size:14px;color:#999;background:#f7f7f7}.index-list .list-wrapper .index-list-content .index-list-item{position:relative;height:50px;line-height:50px;padding:0 16px;font-size:14px;color:#333}.index-list .list-wrapper .index-list-content .index-list-item:last-child:after,.index-list .list-wrapper .index-list-content .index-list-item:last-child:before{display:none}.index-list .list-wrapper .index-list-content .index-list-item_active{background:rgba(0,0,0,.04)}.index-list .index-list-fixed{position:absolute;z-index:1;top:0;left:0;width:100%;padding:16px 16px 10px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;line-height:1;color:#999;background:#f7f7f7}.index-list .index-list-nav{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-family:Helvetica}.index-list .index-list-nav>ul{padding:0;margin:0}.index-list .index-list-nav>ul>li{padding:6px 16px 0;line-height:1;text-align:center;font-size:12px;color:#666}.index-list .index-list-nav>ul>li.active{color:#3b99fc}@media (max-height:480px){.index-list .index-list-nav>ul>li{padding-top:3px}}', ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(28),
        l = i(9),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (l),
        c = window.innerHeight <= 480 ? 17 : 18;
        e.
    default = {
            name: "index-list",
            props: {
                title: {
                    type: String,
                default:
                    ""
                },
                data: {
                    type: Array,
                default:
                    []
                }
            },
            data: function() {
                return {
                    currentIndex: 0,
                    scrollY: -1,
                    diff: -1
                }
            },
            created: function() {
                this.probeType = 3,
                this.listenScroll = !0,
                this.listHeight = [],
                this.touch = {}
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t._calculateHeight()
                },
                20)
            },
            computed: {
                fixedTitle: function() {
                    return this.scrollY > -50 ? "": this.data[this.currentIndex] ? this.data[this.currentIndex].name: ""
                },
                shortcutList: function() {
                    return this.data.map(function(t) {
                        return t.name.substr(0, 1)
                    })
                }
            },
            methods: {
                refresh: function() {
                    this.$refs.indexList.refresh()
                },
                selectItem: function(t) {
                    this.$emit("select", t)
                },
                scroll: function(t) {
                    this.scrollY = t.y
                },
                titleClick: function() {
                    this.$emit("title-click", this.title)
                },
                onShortcutTouchStart: function(t) {
                    var e = (0, a.getData)(t.target, "index"),
                    i = t.touches[0];
                    this.touch.y1 = i.pageY,
                    this.touch.anchorIndex = e,
                    this._scrollTo(e)
                },
                onShortcutTouchMove: function(t) {
                    var e = t.touches[0];
                    this.touch.y2 = e.pageY;
                    var i = (this.touch.y2 - this.touch.y1) / c | 0,
                    a = parseInt(this.touch.anchorIndex) + i;
                    this._scrollTo(a)
                },
                addActiveCls: function(t) { (0, a.addClass)(t.currentTarget, "index-list-item_active")
                },
                removeActiveCls: function(t) { (0, a.removeClass)(t.currentTarget, "index-list-item_active")
                },
                _calculateHeight: function() {
                    var t = this.$refs.listGroup;
                    if (t) {
                        this.listHeight = [];
                        var e = 50;
                        this.listHeight.push(e);
                        for (var i = 0; i < t.length; i++) {
                            e += t[i].clientHeight,
                            this.listHeight.push(e)
                        }
                    }
                },
                _scrollTo: function(t) { (t || 0 === t) && (t < 0 ? t = 0 : t > this.listHeight.length - 2 && (t = this.listHeight.length - 2), this.$refs.indexList.scrollToElement(this.$refs.listGroup[t], 100), this.scrollY = this.$refs.indexList.scroll.y)
                }
            },
            watch: {
                data: function() {
                    var t = this;
                    setTimeout(function() {
                        t._calculateHeight()
                    },
                    20)
                },
                diff: function(t) {
                    var e = t > 0 && t < 40 ? t - 40 : 0;
                    this.fixedTop !== e && (this.fixedTop = e, this.$refs.fixed.style.transform = "translate3d(0," + e + "px,0)")
                },
                scrollY: function(t) {
                    var e = this.listHeight;
                    if (t > -50) return void(this.currentIndex = 0);
                    for (var i = 0; i < e.length - 1; i++) {
                        var a = e[i],
                        l = e[i + 1];
                        if ( - t >= a && -t < l) return this.currentIndex = i,
                        void(this.diff = l + t)
                    }
                    this.currentIndex = e.length - 2
                }
            },
            components: {
                Scroll: o.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "index-list"
                },
                [i("scroll", {
                    ref: "indexList",
                    attrs: {
                        "listen-scroll": t.listenScroll,
                        "probe-type": t.probeType,
                        data: t.data,
                        click: !0
                    },
                    on: {
                        scroll: t.scroll
                    }
                },
                [i("div", {
                    ref: "content",
                    staticClass: "index-list-content"
                },
                [t.title ? i("div", {
                    ref: "title",
                    staticClass: "index-list-title",
                    on: {
                        click: t.titleClick
                    }
                },
                [t._v("\n        " + t._s(t.title) + "\n      ")]) : t._e(), t._v(" "), i("ul", {
                    ref: "groups"
                },
                t._l(t.data,
                function(e) {
                    return i("li", {
                        ref: "listGroup",
                        refInFor: !0
                    },
                    [i("h2", {
                        staticClass: "index-list-anchor"
                    },
                    [t._v(t._s(e.name))]), t._v(" "), i("ul", t._l(e.items,
                    function(e) {
                        return i("li", {
                            staticClass: "index-list-item border-bottom-1px",
                            on: {
                                touchstart: t.addActiveCls,
                                touchend: t.removeActiveCls,
                                click: function(i) {
                                    return t.selectItem(e)
                                }
                            }
                        },
                        [t._v("\n              " + t._s(e.name) + "\n            ")])
                    }), 0)])
                }), 0)])]), t._v(" "), i("div", {
                    staticClass: "index-list-nav",
                    on: {
                        touchstart: t.onShortcutTouchStart,
                        touchmove: function(e) {
                            return e.stopPropagation(),
                            e.preventDefault(),
                            t.onShortcutTouchMove(e)
                        }
                    }
                },
                [i("ul", t._l(t.shortcutList,
                function(e, a) {
                    return i("li", {
                        class: {
                            active: t.currentIndex === a
                        },
                        attrs: {
                            "data-index": a
                        }
                    },
                    [t._v(t._s(e))])
                }), 0)]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.fixedTitle,
                        expression: "fixedTitle"
                    }],
                    ref: "fixed",
                    staticClass: "index-list-fixed"
                },
                [t._v("\n    " + t._s(t.fixedTitle) + "\n  ")])], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = [{
            name: "★热门城市",
            cities: [{
                name: "北京市",
                tags: "BEIJING,北京市",
                cityid: 1
            },
            {
                name: "上海市",
                tags: "SHANGHAI,上海市",
                cityid: 2
            }]
        },
        {
            name: "A",
            cities: [{
                name: "鞍山市",
                tags: "ANSHAN,鞍山市",
                cityid: 3
            },
            {
                name: "安庆市",
                tags: "ANQING,安庆市",
                cityid: 4
            }]
        },
        {
            name: "B",
            cities: [{
                name: "北京市",
                tags: "BEIJING,北京市",
                cityid: 1
            },
            {
                name: "巴音郭楞州",
                tags: "BAYINGUOLENGZHOU,巴音郭楞州",
                cityid: 5
            },
            {
                name: "博尔塔拉州",
                tags: "BOERTALAZHOU,博尔塔拉州",
                cityid: 6
            }]
        },
        {
            name: "C",
            cities: [{
                name: "成都市",
                tags: "CHENGDU,成都市",
                cityid: 7
            }]
        },
        {
            name: "E",
            cities: [{
                name: "鄂尔多斯市",
                tags: "EERDUOSI,鄂尔多斯市",
                cityid: 8
            },
            {
                name: "鄂州市",
                tags: "EZHOU,鄂州市",
                cityid: 9
            },
            {
                name: "恩施州",
                tags: "ENSHIZHOU,恩施州",
                cityid: 10
            }]
        },
        {
            name: "F",
            cities: [{
                name: "福州市",
                tags: "FUZHOU,福州市",
                cityid: 11
            },
            {
                name: "佛山市",
                tags: "FOSHAN,佛山市",
                cityid: 12
            },
            {
                name: "防城港市",
                tags: "FANGCHENGGANG,防城港市",
                cityid: 13
            }]
        },
        {
            name: "G",
            cities: [{
                name: "广州市",
                tags: "GUANGZHOU,广州市",
                cityid: 14
            },
            {
                name: "贵阳市",
                tags: "GUIYANG,贵阳市",
                cityid: 15
            }]
        },
        {
            name: "H",
            cities: [{
                name: "杭州市",
                tags: "HANGZHOU,杭州市",
                cityid: 16
            },
            {
                name: "和田地区",
                tags: "HETIANDIQU,和田地区",
                cityid: 17
            }]
        },
        {
            name: "Z",
            cities: [{
                name: "郑州市",
                tags: "ZHENGZHOU,郑州市",
                cityid: 18
            },
            {
                name: "张家口市",
                tags: "ZHANGJIAKOU,张家口市",
                cityid: 19
            },
            {
                name: "张家界市",
                tags: "ZHANGJIAJIE,张家界市",
                cityid: 20
            },
            {
                name: "珠海市",
                tags: "ZHUHAI,珠海市",
                cityid: 21
            },
            {
                name: "中山市",
                tags: "ZHONGSHAN,中山市",
                cityid: 22
            },
            {
                name: "自贡市",
                tags: "ZIGONG,自贡市",
                cityid: 23
            },
            {
                name: "资阳市",
                tags: "ZIYANG,资阳市",
                cityid: 24
            },
            {
                name: "枣庄市",
                tags: "ZHAOZHUANG,枣庄市",
                cityid: 25
            },
            {
                name: "舟山",
                tags: "ZHOUSHAN,舟山",
                cityid: 26
            },
            {
                name: "遵义市",
                tags: "ZUNYI,遵义市",
                cityid: 27
            },
            {
                name: "淄博市",
                tags: "ZIBO,淄博市",
                cityid: 28
            },
            {
                name: "株洲市",
                tags: "ZHUZHOU,株洲市",
                cityid: 29
            },
            {
                name: "中卫市",
                tags: "ZHONGWEI,中卫市",
                cityid: 30
            }]
        }]
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        type: "index-list",
                        title: t.$t("examples.indexList")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("div", {
                    staticClass: "split"
                }), t._v(" "), i("div", {
                    staticClass: "view-wrapper"
                },
                [i("div", {
                    staticClass: "index-list-wrapper"
                },
                [i("index-list", {
                    ref: "lal",
                    attrs: {
                        data: t.data,
                        title: t.title
                    },
                    on: {
                        select: t.selectItem,
                        "title-click": t.clickTitle
                    }
                })], 1)])])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(0)(i(216), i(229), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(72),
        s = a(c);
        e.
    default = {
            components: {
                Page: o.
            default,
                PickerRender: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(218);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("6f0396b0", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".picker-render-view .select[data-v-0d673272]{margin:0 10px 40px;height:40px;line-height:40px;border:1px solid #e5e5e5;text-align:center;background:#fff}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(73),
        o = a(l),
        c = i(224),
        s = a(c),
        n = i(227),
        r = [{
            disabled: !0,
            text: "剧毒",
            value: 1
        },
        {
            text: "蚂蚁",
            value: 2
        },
        {
            text: "幽鬼",
            value: 3
        },
        {
            text: "主宰",
            value: 4
        },
        {
            disabled: !0,
            text: "卡尔",
            value: 5
        },
        {
            disabled: !0,
            text: "宙斯",
            value: 6
        },
        {
            disabled: !0,
            text: "巫医",
            value: 7
        },
        {
            disabled: !0,
            text: "巫妖",
            value: 8
        },
        {
            disabled: !0,
            text: "神谕者",
            value: 9
        },
        {
            text: "撼地神牛",
            value: 10
        },
        {
            text: "蓝胖子",
            value: 11
        },
        {
            text: "水晶室女",
            value: 12
        },
        {
            text: "莉娜",
            value: 13
        },
        {
            text: "斯拉克",
            value: 14
        },
        {
            text: "斯拉达",
            value: 15
        }],
        u = [{
            text: "剧毒",
            value: 1
        },
        {
            text: "蚂蚁",
            value: 2
        },
        {
            text: "幽鬼",
            value: 3
        },
        {
            text: "主宰",
            value: 4
        },
        {
            text: "卡尔",
            value: 5
        },
        {
            text: "宙斯",
            value: 6
        },
        {
            text: "巫医",
            value: 7
        },
        {
            text: "巫妖",
            value: 8
        },
        {
            text: "神谕者",
            value: 9
        },
        {
            text: "撼地神牛",
            value: 10
        },
        {
            text: "蓝胖子",
            value: 11
        },
        {
            text: "水晶室女",
            value: 12
        },
        {
            text: "莉娜",
            value: 13
        },
        {
            text: "斯拉克",
            value: 14
        },
        {
            text: "斯拉达",
            value: 15
        }],
        v = [{
            text: "输出",
            value: "a"
        },
        {
            text: "控制",
            value: "b"
        },
        {
            text: "核心",
            value: "c"
        },
        {
            text: "爆发",
            value: "d"
        },
        {
            text: "辅助",
            value: "e"
        },
        {
            text: "打野",
            value: "f"
        },
        {
            text: "逃生",
            value: "g"
        },
        {
            text: "先手",
            value: "h"
        }],
        x = [{
            text: "梅肯",
            value: "s"
        },
        {
            text: "秘法鞋",
            value: "ss"
        },
        {
            text: "假腿",
            value: "sss"
        },
        {
            text: "飞鞋",
            value: "ssss"
        },
        {
            text: "辉耀",
            value: "sssss"
        },
        {
            text: "金箍棒",
            value: "ssssss"
        }];
        e.
    default = {
            mounted: function() {
                this.$refs.picker0.setData([r]),
                this.$refs.picker0.setSelectedIndex([1])
            },
            data: function() {
                return {
                    data: [[r], [u, v], [u, v, x], [n.provinceList, n.cityList, n.areaList]],
                    selectedIndex: [[0], [1, 0], [0, 1, 2], [0, 0, 0]],
                    selectedText: [this.$i18n.tc("pickerPage.oneColumn") + this.$i18n.t("pickerPage.pickerDemo"), this.$i18n.t("pickerPage.twoColumn") + this.$i18n.t("pickerPage.pickerDemo"), this.$i18n.t("pickerPage.threeColumn") + this.$i18n.t("pickerPage.pickerDemo"), this.$i18n.t("pickerPage.linkage") + this.$i18n.t("pickerPage.pickerDemo")],
                    title: [this.$i18n.t("pickerPage.oneColumn") + this.$i18n.t("pickerPage.picker"), this.$i18n.t("pickerPage.twoColumn") + this.$i18n.t("pickerPage.picker"), this.$i18n.t("pickerPage.threeColumn") + this.$i18n.t("pickerPage.picker"), this.$i18n.t("pickerPage.linkage") + this.$i18n.t("pickerPage.picker")]
                }
            },
            methods: {
                showPicker: function(t) {
                    this.$refs["picker" + t].show()
                },
                handleSelect: function(t, e) {
                    this.selectedText.splice(t, 1, e[2].join("，"))
                }
            },
            components: {
                Picker: o.
            default,
                CityPicker: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(221);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("28fdfd28", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".picker[data-v-9abbdfa4]{position:fixed;left:0;top:0;z-index:100;width:100%;height:100%;overflow:hidden;text-align:center;font-size:14px;background-color:rgba(37,38,45,.4)}.picker.picker-fade-enter[data-v-9abbdfa4],.picker.picker-fade-leave-active[data-v-9abbdfa4]{opacity:0}.picker.picker-fade-enter-active[data-v-9abbdfa4],.picker.picker-fade-leave-active[data-v-9abbdfa4]{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.picker .picker-panel[data-v-9abbdfa4]{position:absolute;z-index:600;bottom:0;width:100%;height:273px;background:#fff}.picker .picker-panel.picker-move-enter[data-v-9abbdfa4],.picker .picker-panel.picker-move-leave-active[data-v-9abbdfa4]{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.picker .picker-panel.picker-move-enter-active[data-v-9abbdfa4],.picker .picker-panel.picker-move-leave-active[data-v-9abbdfa4]{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.picker .picker-panel .picker-choose[data-v-9abbdfa4]{position:relative;height:60px;color:#999}.picker .picker-panel .picker-choose .picker-title[data-v-9abbdfa4]{margin:0;line-height:60px;font-weight:400;text-align:center;font-size:18px;color:#333}.picker .picker-panel .picker-choose .cancel[data-v-9abbdfa4],.picker .picker-panel .picker-choose .confirm[data-v-9abbdfa4]{position:absolute;top:6px;padding:16px;font-size:14px}.picker .picker-panel .picker-choose .confirm[data-v-9abbdfa4]{right:0;color:#007bff}.picker .picker-panel .picker-choose .confirm[data-v-9abbdfa4]:active{color:#5aaaff}.picker .picker-panel .picker-choose .cancel[data-v-9abbdfa4]{left:0}.picker .picker-panel .picker-choose .cancel[data-v-9abbdfa4]:active{color:#c2c2c2}.picker .picker-panel .picker-content[data-v-9abbdfa4]{position:relative;top:20px}.picker .picker-panel .picker-content .mask-bottom[data-v-9abbdfa4],.picker .picker-panel .picker-content .mask-top[data-v-9abbdfa4]{z-index:10;width:100%;height:68px;pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0)}.picker .picker-panel .picker-content .mask-top[data-v-9abbdfa4]{position:absolute;top:0;background:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.4)),to(hsla(0,0%,100%,.8)));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8))}.picker .picker-panel .picker-content .mask-bottom[data-v-9abbdfa4]{position:absolute;bottom:1px;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.4)),to(hsla(0,0%,100%,.8)));background:linear-gradient(180deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8))}.picker .picker-panel .wheel-wrapper[data-v-9abbdfa4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px}.picker .picker-panel .wheel-wrapper .wheel[data-v-9abbdfa4]{-ms-flex:1 1 1e-9px;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-basis:1e-9px;-ms-flex-preferred-size:1e-9px;flex-basis:1e-9px;width:1%;height:173px;overflow:hidden;font-size:20px}.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll[data-v-9abbdfa4]{padding:0;margin-top:68px;line-height:36px;list-style:none}.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll .wheel-item[data-v-9abbdfa4]{list-style:none;height:36px;overflow:hidden;white-space:nowrap;color:#333}.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll .wheel-item.wheel-disabled-item[data-v-9abbdfa4]{opacity:.2}.picker .picker-footer[data-v-9abbdfa4]{height:20px}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(16),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            name: "picker",
            props: {
                data: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                title: {
                    type: String
                },
                cancelTxt: {
                    type: String,
                default:
                    "cancel"
                },
                confirmTxt: {
                    type: String,
                default:
                    "confirm"
                },
                selectedIndex: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                value: {
                    type: Boolean,
                default:
                    !1
                }
            },
            data: function() {
                return {
                    state: 0,
                    pickerData: this.data.slice(),
                    pickerSelectedIndex: this.selectedIndex,
                    pickerSelectedVal: [],
                    pickerSelectedText: []
                }
            },
            created: function() {
                if (!this.pickerSelectedIndex.length) {
                    this.pickerSelectedIndex = [];
                    for (var t = 0; t < this.pickerData.length; t++) this.pickerSelectedIndex[t] = 0
                }
            },
            methods: {
                confirm: function() {
                    if (this._canConfirm()) {
                        this.hide();
                        for (var t = !1,
                        e = 0; e < this.pickerData.length; e++) {
                            var i = this.wheels[e].getSelectedIndex();
                            this.pickerSelectedIndex[e] = i;
                            var a = null;
                            this.pickerData[e].length && (a = this.pickerData[e][i].value),
                            this.pickerSelectedVal[e] !== a && (t = !0),
                            this.pickerSelectedText[e] = this.pickerData[e][i].text
                        }
                        this.$emit("select", this.pickerSelectedVal, this.pickerSelectedIndex, this.pickerSelectedText),
                        t && this.$emit("valuechange", this.pickerSelectedVal, this.pickerSelectedIndex, this.pickerSelectedText)
                    }
                },
                cancel: function() {
                    this.hide(),
                    this.$emit("cancel")
                },
                show: function() {
                    var t = this;
                    if (1 !== this.state) if (this.state = 1, !this.wheels || this.dirty) this.$nextTick(function() {
                        t.wheels = [];
                        for (var e = t.$refs.wheelWrapper,
                        i = 0; i < t.pickerData.length; i++) t._createWheel(e, i);
                        t.dirty = !1
                    });
                    else for (var e = 0; e < this.pickerData.length; e++) this.wheels[e].enable(),
                    this.wheels[e].wheelTo(this.pickerSelectedIndex[e])
                },
                hide: function() {
                    this.state = 0;
                    for (var t = 0; t < this.pickerData.length; t++) this.wheels[t].disable()
                },
                setData: function(t) {
                    this.pickerData = t.slice(),
                    this.dirty = !0
                },
                setSelectedIndex: function(t) {
                    this.pickerSelectedIndex = t
                },
                refill: function(t) {
                    var e = this,
                    i = [];
                    return t.length ? (t.forEach(function(t, a) {
                        i[a] = e.refillColumn(a, t)
                    }), i) : i
                },
                refillColumn: function(t, e) {
                    var i = this;
                    if (1 !== this.state) return void console.error("can not use refillColumn when picker is not show");
                    var a = this.$refs.wheelWrapper,
                    l = a.children[t].querySelector(".wheel-scroll"),
                    o = this.wheels[t];
                    if (l && o) {
                        var c = this.pickerData[t];
                        this.$set(this.pickerData, t, e);
                        var s = o.getSelectedIndex(),
                        n = 0;
                        if (c.length) for (var r = c[s].value, u = 0; u < e.length; u++) if (e[u].value === r) {
                            n = u;
                            break
                        }
                        return this.pickerSelectedIndex[t] = n,
                        this.$nextTick(function() {
                            o = i._createWheel(a, t),
                            o.wheelTo(n)
                        }),
                        n
                    }
                },
                scrollTo: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    a = this.wheels[t];
                    this.pickerSelectedIndex[t] = e,
                    a.scrollTo(0, -e * a.itemHeight, i)
                },
                refresh: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.wheels.forEach(function(t, e) {
                            t.refresh()
                        })
                    })
                },
                _createWheel: function(t, e) {
                    var i = this;
                    return this.wheels[e] ? this.wheels[e].refresh() : (this.wheels[e] = new l.
                default(t.children[e], {
                        wheel: {
                            selectedIndex: this.pickerSelectedIndex[e],
                            wheelWrapperClass: "wheel-scroll",
                            wheelItemClass: "wheel-item"
                        },
                        probeType: 3
                    }), this.wheels[e].on("scrollEnd",
                    function() {
                        i.$emit("change", e, i.wheels[e].getSelectedIndex())
                    })),
                    this.wheels[e]
                },
                _canConfirm: function() {
                    return this.wheels.every(function(t) {
                        return ! t.isInTransition
                    })
                }
            },
            watch: {
                data: function(t) {
                    this.setData(t)
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        name: "picker-fade"
                    }
                },
                [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.state,
                        expression: "state===1"
                    }],
                    staticClass: "picker",
                    on: {
                        touchmove: function(t) {
                            t.preventDefault()
                        },
                        click: t.cancel
                    }
                },
                [i("transition", {
                    attrs: {
                        name: "picker-move"
                    }
                },
                [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.state,
                        expression: "state===1"
                    }],
                    staticClass: "picker-panel",
                    on: {
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }
                },
                [i("div", {
                    staticClass: "picker-choose border-bottom-1px"
                },
                [i("span", {
                    staticClass: "cancel",
                    on: {
                        click: t.cancel
                    }
                },
                [t._v(t._s(t.cancelTxt))]), t._v(" "), i("span", {
                    staticClass: "confirm",
                    on: {
                        click: t.confirm
                    }
                },
                [t._v(t._s(t.confirmTxt))]), t._v(" "), i("h1", {
                    staticClass: "picker-title"
                },
                [t._v(t._s(t.title))])]), t._v(" "), i("div", {
                    staticClass: "picker-content"
                },
                [i("div", {
                    staticClass: "mask-top border-bottom-1px"
                }), t._v(" "), i("div", {
                    staticClass: "mask-bottom border-top-1px"
                }), t._v(" "), i("div", {
                    ref: "wheelWrapper",
                    staticClass: "wheel-wrapper"
                },
                t._l(t.pickerData,
                function(e) {
                    return i("div", {
                        staticClass: "wheel"
                    },
                    [i("ul", {
                        staticClass: "wheel-scroll"
                    },
                    t._l(e,
                    function(e) {
                        return i("li", {
                            staticClass: "wheel-item",
                            class: {
                                "wheel-disabled-item": e.disabled
                            }
                        },
                        [t._v(t._s(e.text))])
                    }), 0)])
                }), 0)]), t._v(" "), i("div", {
                    staticClass: "picker-footer"
                })])])], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(0)(i(225), i(226), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(68),
        o = a(l),
        c = i(67),
        s = a(c),
        n = i(73),
        r = a(n);
        e.
    default = {
            name: "city-picker",
            components: {
                Picker: r.
            default
            },
            props: {
                data: {
                    type: Array,
                default:
                    []
                },
                title: {
                    type: String
                },
                selectedIndex: {
                    type: Array,
                default:
                    [0, 0, 0]
                },
                cancelTxt: {
                    type: String
                },
                confirmTxt: {
                    type: String
                }
            },
            data: function() {
                return {
                    tempIndex: [0, 0, 0]
                }
            },
            computed: {
                linkageData: function() {
                    var t = (0, s.
                default)(this.data, 3),
                    e = t[0],
                    i = t[1],
                    a = t[2],
                    l = e,
                    o = i[l[this.tempIndex[0]].value];
                    return [l, o, a[o[this.tempIndex[1]].value]]
                }
            },
            watch: {
                linkageData: function() {
                    this.$refs.picker.refresh()
                }
            },
            methods: {
                show: function() {
                    this.$refs.picker.setData(this.linkageData),
                    this.$refs.picker.show()
                },
                handleSelect: function(t) {
                    this.$emit.apply(this, ["select"].concat((0, o.
                default)(t)))
                },
                handleChange: function(t, e) {
                    if (e !== this.tempIndex[t]) {
                        for (var i = 2; i > t; i--) this.tempIndex.splice(i, 1, 0),
                        this.$refs.picker.scrollTo(i, 0, .1);
                        this.tempIndex.splice(t, 1, e)
                    }
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("picker", {
                    ref: "picker",
                    attrs: {
                        data: t.linkageData,
                        "selected-index": t.selectedIndex,
                        title: t.title,
                        cancelTxt: t.cancelTxt,
                        confirmTxt: t.confirmTxt
                    },
                    on: {
                        select: function(e) {
                            return t.handleSelect(arguments)
                        },
                        change: t.handleChange
                    }
                })
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.provinceList = [{
            text: "北京市",
            value: "110000"
        },
        {
            text: "天津市",
            value: "120000"
        },
        {
            text: "河北省",
            value: "130000"
        },
        {
            text: "山西省",
            value: "140000"
        },
        {
            text: "内蒙古自治区",
            value: "150000"
        },
        {
            text: "辽宁省",
            value: "210000"
        },
        {
            text: "吉林省",
            value: "220000"
        },
        {
            text: "黑龙江省",
            value: "230000"
        },
        {
            text: "上海市",
            value: "310000"
        },
        {
            text: "江苏省",
            value: "320000"
        },
        {
            text: "浙江省",
            value: "330000"
        },
        {
            text: "安徽省",
            value: "340000"
        },
        {
            text: "福建省",
            value: "350000"
        },
        {
            text: "江西省",
            value: "360000"
        },
        {
            text: "山东省",
            value: "370000"
        },
        {
            text: "河南省",
            value: "410000"
        },
        {
            text: "湖北省",
            value: "420000"
        },
        {
            text: "湖南省",
            value: "430000"
        },
        {
            text: "广东省",
            value: "440000"
        },
        {
            text: "广西壮族自治区",
            value: "450000"
        },
        {
            text: "海南省",
            value: "460000"
        },
        {
            text: "重庆市",
            value: "500000"
        },
        {
            text: "四川省",
            value: "510000"
        },
        {
            text: "贵州省",
            value: "520000"
        },
        {
            text: "云南省",
            value: "530000"
        },
        {
            text: "西藏自治区",
            value: "540000"
        },
        {
            text: "陕西省",
            value: "610000"
        },
        {
            text: "甘肃省",
            value: "620000"
        },
        {
            text: "青海省",
            value: "630000"
        },
        {
            text: "宁夏回族自治区",
            value: "640000"
        },
        {
            text: "新疆维吾尔自治区",
            value: "650000"
        }],
        e.cityList = {
            110000 : [{
                province: "北京市",
                text: "北京市",
                value: "110100"
            }],
            120000 : [{
                province: "天津市",
                text: "天津市",
                value: "120100"
            }],
            130000 : [{
                province: "河北省",
                text: "石家庄市",
                value: "130100"
            },
            {
                province: "河北省",
                text: "唐山市",
                value: "130200"
            },
            {
                province: "河北省",
                text: "秦皇岛市",
                value: "130300"
            },
            {
                province: "河北省",
                text: "邯郸市",
                value: "130400"
            },
            {
                province: "河北省",
                text: "邢台市",
                value: "130500"
            },
            {
                province: "河北省",
                text: "保定市",
                value: "130600"
            },
            {
                province: "河北省",
                text: "张家口市",
                value: "130700"
            },
            {
                province: "河北省",
                text: "承德市",
                value: "130800"
            },
            {
                province: "河北省",
                text: "沧州市",
                value: "130900"
            },
            {
                province: "河北省",
                text: "廊坊市",
                value: "131000"
            },
            {
                province: "河北省",
                text: "衡水市",
                value: "131100"
            },
            {
                province: "河北省",
                text: "省直辖县级行政区划",
                value: "139000"
            }],
            140000 : [{
                province: "山西省",
                text: "太原市",
                value: "140100"
            },
            {
                province: "山西省",
                text: "大同市",
                value: "140200"
            },
            {
                province: "山西省",
                text: "阳泉市",
                value: "140300"
            },
            {
                province: "山西省",
                text: "长治市",
                value: "140400"
            },
            {
                province: "山西省",
                text: "晋城市",
                value: "140500"
            },
            {
                province: "山西省",
                text: "朔州市",
                value: "140600"
            },
            {
                province: "山西省",
                text: "晋中市",
                value: "140700"
            },
            {
                province: "山西省",
                text: "运城市",
                value: "140800"
            },
            {
                province: "山西省",
                text: "忻州市",
                value: "140900"
            },
            {
                province: "山西省",
                text: "临汾市",
                value: "141000"
            },
            {
                province: "山西省",
                text: "吕梁市",
                value: "141100"
            }],
            150000 : [{
                province: "内蒙古自治区",
                text: "呼和浩特市",
                value: "150100"
            },
            {
                province: "内蒙古自治区",
                text: "包头市",
                value: "150200"
            },
            {
                province: "内蒙古自治区",
                text: "乌海市",
                value: "150300"
            },
            {
                province: "内蒙古自治区",
                text: "赤峰市",
                value: "150400"
            },
            {
                province: "内蒙古自治区",
                text: "通辽市",
                value: "150500"
            },
            {
                province: "内蒙古自治区",
                text: "鄂尔多斯市",
                value: "150600"
            },
            {
                province: "内蒙古自治区",
                text: "呼伦贝尔市",
                value: "150700"
            },
            {
                province: "内蒙古自治区",
                text: "巴彦淖尔市",
                value: "150800"
            },
            {
                province: "内蒙古自治区",
                text: "乌兰察布市",
                value: "150900"
            },
            {
                province: "内蒙古自治区",
                text: "兴安盟",
                value: "152200"
            },
            {
                province: "内蒙古自治区",
                text: "锡林郭勒盟",
                value: "152500"
            },
            {
                province: "内蒙古自治区",
                text: "阿拉善盟",
                value: "152900"
            }],
            210000 : [{
                province: "辽宁省",
                text: "沈阳市",
                value: "210100"
            },
            {
                province: "辽宁省",
                text: "大连市",
                value: "210200"
            },
            {
                province: "辽宁省",
                text: "鞍山市",
                value: "210300"
            },
            {
                province: "辽宁省",
                text: "抚顺市",
                value: "210400"
            },
            {
                province: "辽宁省",
                text: "本溪市",
                value: "210500"
            },
            {
                province: "辽宁省",
                text: "丹东市",
                value: "210600"
            },
            {
                province: "辽宁省",
                text: "锦州市",
                value: "210700"
            },
            {
                province: "辽宁省",
                text: "营口市",
                value: "210800"
            },
            {
                province: "辽宁省",
                text: "阜新市",
                value: "210900"
            },
            {
                province: "辽宁省",
                text: "辽阳市",
                value: "211000"
            },
            {
                province: "辽宁省",
                text: "盘锦市",
                value: "211100"
            },
            {
                province: "辽宁省",
                text: "铁岭市",
                value: "211200"
            },
            {
                province: "辽宁省",
                text: "朝阳市",
                value: "211300"
            },
            {
                province: "辽宁省",
                text: "葫芦岛市",
                value: "211400"
            }],
            220000 : [{
                province: "吉林省",
                text: "长春市",
                value: "220100"
            },
            {
                province: "吉林省",
                text: "吉林市",
                value: "220200"
            },
            {
                province: "吉林省",
                text: "四平市",
                value: "220300"
            },
            {
                province: "吉林省",
                text: "辽源市",
                value: "220400"
            },
            {
                province: "吉林省",
                text: "通化市",
                value: "220500"
            },
            {
                province: "吉林省",
                text: "白山市",
                value: "220600"
            },
            {
                province: "吉林省",
                text: "松原市",
                value: "220700"
            },
            {
                province: "吉林省",
                text: "白城市",
                value: "220800"
            },
            {
                province: "吉林省",
                text: "延边朝鲜族自治州",
                value: "222400"
            }],
            230000 : [{
                province: "黑龙江省",
                text: "哈尔滨市",
                value: "230100"
            },
            {
                province: "黑龙江省",
                text: "齐齐哈尔市",
                value: "230200"
            },
            {
                province: "黑龙江省",
                text: "鸡西市",
                value: "230300"
            },
            {
                province: "黑龙江省",
                text: "鹤岗市",
                value: "230400"
            },
            {
                province: "黑龙江省",
                text: "双鸭山市",
                value: "230500"
            },
            {
                province: "黑龙江省",
                text: "大庆市",
                value: "230600"
            },
            {
                province: "黑龙江省",
                text: "伊春市",
                value: "230700"
            },
            {
                province: "黑龙江省",
                text: "佳木斯市",
                value: "230800"
            },
            {
                province: "黑龙江省",
                text: "七台河市",
                value: "230900"
            },
            {
                province: "黑龙江省",
                text: "牡丹江市",
                value: "231000"
            },
            {
                province: "黑龙江省",
                text: "黑河市",
                value: "231100"
            },
            {
                province: "黑龙江省",
                text: "绥化市",
                value: "231200"
            },
            {
                province: "黑龙江省",
                text: "大兴安岭地区",
                value: "232700"
            }],
            310000 : [{
                province: "上海市",
                text: "上海市",
                value: "310100"
            }],
            320000 : [{
                province: "江苏省",
                text: "南京市",
                value: "320100"
            },
            {
                province: "江苏省",
                text: "无锡市",
                value: "320200"
            },
            {
                province: "江苏省",
                text: "徐州市",
                value: "320300"
            },
            {
                province: "江苏省",
                text: "常州市",
                value: "320400"
            },
            {
                province: "江苏省",
                text: "苏州市",
                value: "320500"
            },
            {
                province: "江苏省",
                text: "南通市",
                value: "320600"
            },
            {
                province: "江苏省",
                text: "连云港市",
                value: "320700"
            },
            {
                province: "江苏省",
                text: "淮安市",
                value: "320800"
            },
            {
                province: "江苏省",
                text: "盐城市",
                value: "320900"
            },
            {
                province: "江苏省",
                text: "扬州市",
                value: "321000"
            },
            {
                province: "江苏省",
                text: "镇江市",
                value: "321100"
            },
            {
                province: "江苏省",
                text: "泰州市",
                value: "321200"
            },
            {
                province: "江苏省",
                text: "宿迁市",
                value: "321300"
            }],
            330000 : [{
                province: "浙江省",
                text: "杭州市",
                value: "330100"
            },
            {
                province: "浙江省",
                text: "宁波市",
                value: "330200"
            },
            {
                province: "浙江省",
                text: "温州市",
                value: "330300"
            },
            {
                province: "浙江省",
                text: "嘉兴市",
                value: "330400"
            },
            {
                province: "浙江省",
                text: "湖州市",
                value: "330500"
            },
            {
                province: "浙江省",
                text: "绍兴市",
                value: "330600"
            },
            {
                province: "浙江省",
                text: "金华市",
                value: "330700"
            },
            {
                province: "浙江省",
                text: "衢州市",
                value: "330800"
            },
            {
                province: "浙江省",
                text: "舟山市",
                value: "330900"
            },
            {
                province: "浙江省",
                text: "台州市",
                value: "331000"
            },
            {
                province: "浙江省",
                text: "丽水市",
                value: "331100"
            }],
            340000 : [{
                province: "安徽省",
                text: "合肥市",
                value: "340100"
            },
            {
                province: "安徽省",
                text: "芜湖市",
                value: "340200"
            },
            {
                province: "安徽省",
                text: "蚌埠市",
                value: "340300"
            },
            {
                province: "安徽省",
                text: "淮南市",
                value: "340400"
            },
            {
                province: "安徽省",
                text: "马鞍山市",
                value: "340500"
            },
            {
                province: "安徽省",
                text: "淮北市",
                value: "340600"
            },
            {
                province: "安徽省",
                text: "铜陵市",
                value: "340700"
            },
            {
                province: "安徽省",
                text: "安庆市",
                value: "340800"
            },
            {
                province: "安徽省",
                text: "黄山市",
                value: "341000"
            },
            {
                province: "安徽省",
                text: "滁州市",
                value: "341100"
            },
            {
                province: "安徽省",
                text: "阜阳市",
                value: "341200"
            },
            {
                province: "安徽省",
                text: "宿州市",
                value: "341300"
            },
            {
                province: "安徽省",
                text: "六安市",
                value: "341500"
            },
            {
                province: "安徽省",
                text: "亳州市",
                value: "341600"
            },
            {
                province: "安徽省",
                text: "池州市",
                value: "341700"
            },
            {
                province: "安徽省",
                text: "宣城市",
                value: "341800"
            }],
            350000 : [{
                province: "福建省",
                text: "福州市",
                value: "350100"
            },
            {
                province: "福建省",
                text: "厦门市",
                value: "350200"
            },
            {
                province: "福建省",
                text: "莆田市",
                value: "350300"
            },
            {
                province: "福建省",
                text: "三明市",
                value: "350400"
            },
            {
                province: "福建省",
                text: "泉州市",
                value: "350500"
            },
            {
                province: "福建省",
                text: "漳州市",
                value: "350600"
            },
            {
                province: "福建省",
                text: "南平市",
                value: "350700"
            },
            {
                province: "福建省",
                text: "龙岩市",
                value: "350800"
            },
            {
                province: "福建省",
                text: "宁德市",
                value: "350900"
            }],
            360000 : [{
                province: "江西省",
                text: "南昌市",
                value: "360100"
            },
            {
                province: "江西省",
                text: "景德镇市",
                value: "360200"
            },
            {
                province: "江西省",
                text: "萍乡市",
                value: "360300"
            },
            {
                province: "江西省",
                text: "九江市",
                value: "360400"
            },
            {
                province: "江西省",
                text: "新余市",
                value: "360500"
            },
            {
                province: "江西省",
                text: "鹰潭市",
                value: "360600"
            },
            {
                province: "江西省",
                text: "赣州市",
                value: "360700"
            },
            {
                province: "江西省",
                text: "吉安市",
                value: "360800"
            },
            {
                province: "江西省",
                text: "宜春市",
                value: "360900"
            },
            {
                province: "江西省",
                text: "抚州市",
                value: "361000"
            },
            {
                province: "江西省",
                text: "上饶市",
                value: "361100"
            }],
            370000 : [{
                province: "山东省",
                text: "济南市",
                value: "370100"
            },
            {
                province: "山东省",
                text: "青岛市",
                value: "370200"
            },
            {
                province: "山东省",
                text: "淄博市",
                value: "370300"
            },
            {
                province: "山东省",
                text: "枣庄市",
                value: "370400"
            },
            {
                province: "山东省",
                text: "东营市",
                value: "370500"
            },
            {
                province: "山东省",
                text: "烟台市",
                value: "370600"
            },
            {
                province: "山东省",
                text: "潍坊市",
                value: "370700"
            },
            {
                province: "山东省",
                text: "济宁市",
                value: "370800"
            },
            {
                province: "山东省",
                text: "泰安市",
                value: "370900"
            },
            {
                province: "山东省",
                text: "威海市",
                value: "371000"
            },
            {
                province: "山东省",
                text: "日照市",
                value: "371100"
            },
            {
                province: "山东省",
                text: "莱芜市",
                value: "371200"
            },
            {
                province: "山东省",
                text: "临沂市",
                value: "371300"
            },
            {
                province: "山东省",
                text: "德州市",
                value: "371400"
            },
            {
                province: "山东省",
                text: "聊城市",
                value: "371500"
            },
            {
                province: "山东省",
                text: "滨州市",
                value: "371600"
            },
            {
                province: "山东省",
                text: "菏泽市",
                value: "371700"
            }],
            410000 : [{
                province: "河南省",
                text: "郑州市",
                value: "410100"
            },
            {
                province: "河南省",
                text: "开封市",
                value: "410200"
            },
            {
                province: "河南省",
                text: "洛阳市",
                value: "410300"
            },
            {
                province: "河南省",
                text: "平顶山市",
                value: "410400"
            },
            {
                province: "河南省",
                text: "安阳市",
                value: "410500"
            },
            {
                province: "河南省",
                text: "鹤壁市",
                value: "410600"
            },
            {
                province: "河南省",
                text: "新乡市",
                value: "410700"
            },
            {
                province: "河南省",
                text: "焦作市",
                value: "410800"
            },
            {
                province: "河南省",
                text: "濮阳市",
                value: "410900"
            },
            {
                province: "河南省",
                text: "许昌市",
                value: "411000"
            },
            {
                province: "河南省",
                text: "漯河市",
                value: "411100"
            },
            {
                province: "河南省",
                text: "三门峡市",
                value: "411200"
            },
            {
                province: "河南省",
                text: "南阳市",
                value: "411300"
            },
            {
                province: "河南省",
                text: "商丘市",
                value: "411400"
            },
            {
                province: "河南省",
                text: "信阳市",
                value: "411500"
            },
            {
                province: "河南省",
                text: "周口市",
                value: "411600"
            },
            {
                province: "河南省",
                text: "驻马店市",
                value: "411700"
            },
            {
                province: "河南省",
                text: "省直辖县级行政区划",
                value: "419000"
            }],
            420000 : [{
                province: "湖北省",
                text: "武汉市",
                value: "420100"
            },
            {
                province: "湖北省",
                text: "黄石市",
                value: "420200"
            },
            {
                province: "湖北省",
                text: "十堰市",
                value: "420300"
            },
            {
                province: "湖北省",
                text: "宜昌市",
                value: "420500"
            },
            {
                province: "湖北省",
                text: "襄阳市",
                value: "420600"
            },
            {
                province: "湖北省",
                text: "鄂州市",
                value: "420700"
            },
            {
                province: "湖北省",
                text: "荆门市",
                value: "420800"
            },
            {
                province: "湖北省",
                text: "孝感市",
                value: "420900"
            },
            {
                province: "湖北省",
                text: "荆州市",
                value: "421000"
            },
            {
                province: "湖北省",
                text: "黄冈市",
                value: "421100"
            },
            {
                province: "湖北省",
                text: "咸宁市",
                value: "421200"
            },
            {
                province: "湖北省",
                text: "随州市",
                value: "421300"
            },
            {
                province: "湖北省",
                text: "恩施土家族苗族自治州",
                value: "422800"
            },
            {
                province: "湖北省",
                text: "省直辖县级行政区划",
                value: "429000"
            }],
            430000 : [{
                province: "湖南省",
                text: "长沙市",
                value: "430100"
            },
            {
                province: "湖南省",
                text: "株洲市",
                value: "430200"
            },
            {
                province: "湖南省",
                text: "湘潭市",
                value: "430300"
            },
            {
                province: "湖南省",
                text: "衡阳市",
                value: "430400"
            },
            {
                province: "湖南省",
                text: "邵阳市",
                value: "430500"
            },
            {
                province: "湖南省",
                text: "岳阳市",
                value: "430600"
            },
            {
                province: "湖南省",
                text: "常德市",
                value: "430700"
            },
            {
                province: "湖南省",
                text: "张家界市",
                value: "430800"
            },
            {
                province: "湖南省",
                text: "益阳市",
                value: "430900"
            },
            {
                province: "湖南省",
                text: "郴州市",
                value: "431000"
            },
            {
                province: "湖南省",
                text: "永州市",
                value: "431100"
            },
            {
                province: "湖南省",
                text: "怀化市",
                value: "431200"
            },
            {
                province: "湖南省",
                text: "娄底市",
                value: "431300"
            },
            {
                province: "湖南省",
                text: "湘西土家族苗族自治州",
                value: "433100"
            }],
            440000 : [{
                province: "广东省",
                text: "广州市",
                value: "440100"
            },
            {
                province: "广东省",
                text: "韶关市",
                value: "440200"
            },
            {
                province: "广东省",
                text: "深圳市",
                value: "440300"
            },
            {
                province: "广东省",
                text: "珠海市",
                value: "440400"
            },
            {
                province: "广东省",
                text: "汕头市",
                value: "440500"
            },
            {
                province: "广东省",
                text: "佛山市",
                value: "440600"
            },
            {
                province: "广东省",
                text: "江门市",
                value: "440700"
            },
            {
                province: "广东省",
                text: "湛江市",
                value: "440800"
            },
            {
                province: "广东省",
                text: "茂名市",
                value: "440900"
            },
            {
                province: "广东省",
                text: "肇庆市",
                value: "441200"
            },
            {
                province: "广东省",
                text: "惠州市",
                value: "441300"
            },
            {
                province: "广东省",
                text: "梅州市",
                value: "441400"
            },
            {
                province: "广东省",
                text: "汕尾市",
                value: "441500"
            },
            {
                province: "广东省",
                text: "河源市",
                value: "441600"
            },
            {
                province: "广东省",
                text: "阳江市",
                value: "441700"
            },
            {
                province: "广东省",
                text: "清远市",
                value: "441800"
            },
            {
                province: "广东省",
                text: "东莞市",
                value: "441900"
            },
            {
                province: "广东省",
                text: "中山市",
                value: "442000"
            },
            {
                province: "广东省",
                text: "潮州市",
                value: "445100"
            },
            {
                province: "广东省",
                text: "揭阳市",
                value: "445200"
            },
            {
                province: "广东省",
                text: "云浮市",
                value: "445300"
            }],
            450000 : [{
                province: "广西壮族自治区",
                text: "南宁市",
                value: "450100"
            },
            {
                province: "广西壮族自治区",
                text: "柳州市",
                value: "450200"
            },
            {
                province: "广西壮族自治区",
                text: "桂林市",
                value: "450300"
            },
            {
                province: "广西壮族自治区",
                text: "梧州市",
                value: "450400"
            },
            {
                province: "广西壮族自治区",
                text: "北海市",
                value: "450500"
            },
            {
                province: "广西壮族自治区",
                text: "防城港市",
                value: "450600"
            },
            {
                province: "广西壮族自治区",
                text: "钦州市",
                value: "450700"
            },
            {
                province: "广西壮族自治区",
                text: "贵港市",
                value: "450800"
            },
            {
                province: "广西壮族自治区",
                text: "玉林市",
                value: "450900"
            },
            {
                province: "广西壮族自治区",
                text: "百色市",
                value: "451000"
            },
            {
                province: "广西壮族自治区",
                text: "贺州市",
                value: "451100"
            },
            {
                province: "广西壮族自治区",
                text: "河池市",
                value: "451200"
            },
            {
                province: "广西壮族自治区",
                text: "来宾市",
                value: "451300"
            },
            {
                province: "广西壮族自治区",
                text: "崇左市",
                value: "451400"
            }],
            460000 : [{
                province: "海南省",
                text: "海口市",
                value: "460100"
            },
            {
                province: "海南省",
                text: "三亚市",
                value: "460200"
            },
            {
                province: "海南省",
                text: "三沙市",
                value: "460300"
            },
            {
                province: "海南省",
                text: "儋州市",
                value: "460400"
            },
            {
                province: "海南省",
                text: "省直辖县级行政区划",
                value: "469000"
            }],
            500000 : [{
                province: "重庆市",
                text: "重庆市",
                value: "500100"
            },
            {
                province: "重庆市",
                text: "县",
                value: "500200"
            }],
            510000 : [{
                province: "四川省",
                text: "成都市",
                value: "510100"
            },
            {
                province: "四川省",
                text: "自贡市",
                value: "510300"
            },
            {
                province: "四川省",
                text: "攀枝花市",
                value: "510400"
            },
            {
                province: "四川省",
                text: "泸州市",
                value: "510500"
            },
            {
                province: "四川省",
                text: "德阳市",
                value: "510600"
            },
            {
                province: "四川省",
                text: "绵阳市",
                value: "510700"
            },
            {
                province: "四川省",
                text: "广元市",
                value: "510800"
            },
            {
                province: "四川省",
                text: "遂宁市",
                value: "510900"
            },
            {
                province: "四川省",
                text: "内江市",
                value: "511000"
            },
            {
                province: "四川省",
                text: "乐山市",
                value: "511100"
            },
            {
                province: "四川省",
                text: "南充市",
                value: "511300"
            },
            {
                province: "四川省",
                text: "眉山市",
                value: "511400"
            },
            {
                province: "四川省",
                text: "宜宾市",
                value: "511500"
            },
            {
                province: "四川省",
                text: "广安市",
                value: "511600"
            },
            {
                province: "四川省",
                text: "达州市",
                value: "511700"
            },
            {
                province: "四川省",
                text: "雅安市",
                value: "511800"
            },
            {
                province: "四川省",
                text: "巴中市",
                value: "511900"
            },
            {
                province: "四川省",
                text: "资阳市",
                value: "512000"
            },
            {
                province: "四川省",
                text: "阿坝藏族羌族自治州",
                value: "513200"
            },
            {
                province: "四川省",
                text: "甘孜藏族自治州",
                value: "513300"
            },
            {
                province: "四川省",
                text: "凉山彝族自治州",
                value: "513400"
            }],
            520000 : [{
                province: "贵州省",
                text: "贵阳市",
                value: "520100"
            },
            {
                province: "贵州省",
                text: "六盘水市",
                value: "520200"
            },
            {
                province: "贵州省",
                text: "遵义市",
                value: "520300"
            },
            {
                province: "贵州省",
                text: "安顺市",
                value: "520400"
            },
            {
                province: "贵州省",
                text: "毕节市",
                value: "520500"
            },
            {
                province: "贵州省",
                text: "铜仁市",
                value: "520600"
            },
            {
                province: "贵州省",
                text: "黔西南布依族苗族自治州",
                value: "522300"
            },
            {
                province: "贵州省",
                text: "黔东南苗族侗族自治州",
                value: "522600"
            },
            {
                province: "贵州省",
                text: "黔南布依族苗族自治州",
                value: "522700"
            }],
            530000 : [{
                province: "云南省",
                text: "昆明市",
                value: "530100"
            },
            {
                province: "云南省",
                text: "曲靖市",
                value: "530300"
            },
            {
                province: "云南省",
                text: "玉溪市",
                value: "530400"
            },
            {
                province: "云南省",
                text: "保山市",
                value: "530500"
            },
            {
                province: "云南省",
                text: "昭通市",
                value: "530600"
            },
            {
                province: "云南省",
                text: "丽江市",
                value: "530700"
            },
            {
                province: "云南省",
                text: "普洱市",
                value: "530800"
            },
            {
                province: "云南省",
                text: "临沧市",
                value: "530900"
            },
            {
                province: "云南省",
                text: "楚雄彝族自治州",
                value: "532300"
            },
            {
                province: "云南省",
                text: "红河哈尼族彝族自治州",
                value: "532500"
            },
            {
                province: "云南省",
                text: "文山壮族苗族自治州",
                value: "532600"
            },
            {
                province: "云南省",
                text: "西双版纳傣族自治州",
                value: "532800"
            },
            {
                province: "云南省",
                text: "大理白族自治州",
                value: "532900"
            },
            {
                province: "云南省",
                text: "德宏傣族景颇族自治州",
                value: "533100"
            },
            {
                province: "云南省",
                text: "怒江傈僳族自治州",
                value: "533300"
            },
            {
                province: "云南省",
                text: "迪庆藏族自治州",
                value: "533400"
            }],
            540000 : [{
                province: "西藏自治区",
                text: "拉萨市",
                value: "540100"
            },
            {
                province: "西藏自治区",
                text: "日喀则市",
                value: "540200"
            },
            {
                province: "西藏自治区",
                text: "昌都市",
                value: "540300"
            },
            {
                province: "西藏自治区",
                text: "林芝市",
                value: "540400"
            },
            {
                province: "西藏自治区",
                text: "山南市",
                value: "540500"
            },
            {
                province: "西藏自治区",
                text: "那曲地区",
                value: "542400"
            },
            {
                province: "西藏自治区",
                text: "阿里地区",
                value: "542500"
            }],
            610000 : [{
                province: "陕西省",
                text: "西安市",
                value: "610100"
            },
            {
                province: "陕西省",
                text: "铜川市",
                value: "610200"
            },
            {
                province: "陕西省",
                text: "宝鸡市",
                value: "610300"
            },
            {
                province: "陕西省",
                text: "咸阳市",
                value: "610400"
            },
            {
                province: "陕西省",
                text: "渭南市",
                value: "610500"
            },
            {
                province: "陕西省",
                text: "延安市",
                value: "610600"
            },
            {
                province: "陕西省",
                text: "汉中市",
                value: "610700"
            },
            {
                province: "陕西省",
                text: "榆林市",
                value: "610800"
            },
            {
                province: "陕西省",
                text: "安康市",
                value: "610900"
            },
            {
                province: "陕西省",
                text: "商洛市",
                value: "611000"
            }],
            620000 : [{
                province: "甘肃省",
                text: "兰州市",
                value: "620100"
            },
            {
                province: "甘肃省",
                text: "嘉峪关市",
                value: "620200"
            },
            {
                province: "甘肃省",
                text: "金昌市",
                value: "620300"
            },
            {
                province: "甘肃省",
                text: "白银市",
                value: "620400"
            },
            {
                province: "甘肃省",
                text: "天水市",
                value: "620500"
            },
            {
                province: "甘肃省",
                text: "武威市",
                value: "620600"
            },
            {
                province: "甘肃省",
                text: "张掖市",
                value: "620700"
            },
            {
                province: "甘肃省",
                text: "平凉市",
                value: "620800"
            },
            {
                province: "甘肃省",
                text: "酒泉市",
                value: "620900"
            },
            {
                province: "甘肃省",
                text: "庆阳市",
                value: "621000"
            },
            {
                province: "甘肃省",
                text: "定西市",
                value: "621100"
            },
            {
                province: "甘肃省",
                text: "陇南市",
                value: "621200"
            },
            {
                province: "甘肃省",
                text: "临夏回族自治州",
                value: "622900"
            },
            {
                province: "甘肃省",
                text: "甘南藏族自治州",
                value: "623000"
            }],
            630000 : [{
                province: "青海省",
                text: "西宁市",
                value: "630100"
            },
            {
                province: "青海省",
                text: "海东市",
                value: "630200"
            },
            {
                province: "青海省",
                text: "海北藏族自治州",
                value: "632200"
            },
            {
                province: "青海省",
                text: "黄南藏族自治州",
                value: "632300"
            },
            {
                province: "青海省",
                text: "海南藏族自治州",
                value: "632500"
            },
            {
                province: "青海省",
                text: "果洛藏族自治州",
                value: "632600"
            },
            {
                province: "青海省",
                text: "玉树藏族自治州",
                value: "632700"
            },
            {
                province: "青海省",
                text: "海西蒙古族藏族自治州",
                value: "632800"
            }],
            640000 : [{
                province: "宁夏回族自治区",
                text: "银川市",
                value: "640100"
            },
            {
                province: "宁夏回族自治区",
                text: "石嘴山市",
                value: "640200"
            },
            {
                province: "宁夏回族自治区",
                text: "吴忠市",
                value: "640300"
            },
            {
                province: "宁夏回族自治区",
                text: "固原市",
                value: "640400"
            },
            {
                province: "宁夏回族自治区",
                text: "中卫市",
                value: "640500"
            }],
            650000 : [{
                province: "新疆维吾尔自治区",
                text: "乌鲁木齐市",
                value: "650100"
            },
            {
                province: "新疆维吾尔自治区",
                text: "克拉玛依市",
                value: "650200"
            },
            {
                province: "新疆维吾尔自治区",
                text: "吐鲁番市",
                value: "650400"
            },
            {
                province: "新疆维吾尔自治区",
                text: "哈密市",
                value: "650500"
            },
            {
                province: "新疆维吾尔自治区",
                text: "昌吉回族自治州",
                value: "652300"
            },
            {
                province: "新疆维吾尔自治区",
                text: "博尔塔拉蒙古自治州",
                value: "652700"
            },
            {
                province: "新疆维吾尔自治区",
                text: "巴音郭楞蒙古自治州",
                value: "652800"
            },
            {
                province: "新疆维吾尔自治区",
                text: "阿克苏地区",
                value: "652900"
            },
            {
                province: "新疆维吾尔自治区",
                text: "克孜勒苏柯尔克孜自治州",
                value: "653000"
            },
            {
                province: "新疆维吾尔自治区",
                text: "喀什地区",
                value: "653100"
            },
            {
                province: "新疆维吾尔自治区",
                text: "和田地区",
                value: "653200"
            },
            {
                province: "新疆维吾尔自治区",
                text: "伊犁哈萨克自治州",
                value: "654000"
            },
            {
                province: "新疆维吾尔自治区",
                text: "塔城地区",
                value: "654200"
            },
            {
                province: "新疆维吾尔自治区",
                text: "阿勒泰地区",
                value: "654300"
            },
            {
                province: "新疆维吾尔自治区",
                text: "自治区直辖县级行政区划",
                value: "659000"
            }]
        },
        e.areaList = {
            110100 : [{
                city: "市辖区",
                text: "东城区",
                value: "110101"
            },
            {
                city: "市辖区",
                text: "西城区",
                value: "110102"
            },
            {
                city: "市辖区",
                text: "朝阳区",
                value: "110105"
            },
            {
                city: "市辖区",
                text: "丰台区",
                value: "110106"
            },
            {
                city: "市辖区",
                text: "石景山区",
                value: "110107"
            },
            {
                city: "市辖区",
                text: "海淀区",
                value: "110108"
            },
            {
                city: "市辖区",
                text: "门头沟区",
                value: "110109"
            },
            {
                city: "市辖区",
                text: "房山区",
                value: "110111"
            },
            {
                city: "市辖区",
                text: "通州区",
                value: "110112"
            },
            {
                city: "市辖区",
                text: "顺义区",
                value: "110113"
            },
            {
                city: "市辖区",
                text: "昌平区",
                value: "110114"
            },
            {
                city: "市辖区",
                text: "大兴区",
                value: "110115"
            },
            {
                city: "市辖区",
                text: "怀柔区",
                value: "110116"
            },
            {
                city: "市辖区",
                text: "平谷区",
                value: "110117"
            },
            {
                city: "市辖区",
                text: "密云区",
                value: "110118"
            },
            {
                city: "市辖区",
                text: "延庆区",
                value: "110119"
            }],
            120100 : [{
                city: "市辖区",
                text: "和平区",
                value: "120101"
            },
            {
                city: "市辖区",
                text: "河东区",
                value: "120102"
            },
            {
                city: "市辖区",
                text: "河西区",
                value: "120103"
            },
            {
                city: "市辖区",
                text: "南开区",
                value: "120104"
            },
            {
                city: "市辖区",
                text: "河北区",
                value: "120105"
            },
            {
                city: "市辖区",
                text: "红桥区",
                value: "120106"
            },
            {
                city: "市辖区",
                text: "东丽区",
                value: "120110"
            },
            {
                city: "市辖区",
                text: "西青区",
                value: "120111"
            },
            {
                city: "市辖区",
                text: "津南区",
                value: "120112"
            },
            {
                city: "市辖区",
                text: "北辰区",
                value: "120113"
            },
            {
                city: "市辖区",
                text: "武清区",
                value: "120114"
            },
            {
                city: "市辖区",
                text: "宝坻区",
                value: "120115"
            },
            {
                city: "市辖区",
                text: "滨海新区",
                value: "120116"
            },
            {
                city: "市辖区",
                text: "宁河区",
                value: "120117"
            },
            {
                city: "市辖区",
                text: "静海区",
                value: "120118"
            },
            {
                city: "市辖区",
                text: "蓟州区",
                value: "120119"
            }],
            130100 : [{
                city: "石家庄市",
                text: "市辖区",
                value: "130101"
            },
            {
                city: "石家庄市",
                text: "长安区",
                value: "130102"
            },
            {
                city: "石家庄市",
                text: "桥西区",
                value: "130104"
            },
            {
                city: "石家庄市",
                text: "新华区",
                value: "130105"
            },
            {
                city: "石家庄市",
                text: "井陉矿区",
                value: "130107"
            },
            {
                city: "石家庄市",
                text: "裕华区",
                value: "130108"
            },
            {
                city: "石家庄市",
                text: "藁城区",
                value: "130109"
            },
            {
                city: "石家庄市",
                text: "鹿泉区",
                value: "130110"
            },
            {
                city: "石家庄市",
                text: "栾城区",
                value: "130111"
            },
            {
                city: "石家庄市",
                text: "井陉县",
                value: "130121"
            },
            {
                city: "石家庄市",
                text: "正定县",
                value: "130123"
            },
            {
                city: "石家庄市",
                text: "行唐县",
                value: "130125"
            },
            {
                city: "石家庄市",
                text: "灵寿县",
                value: "130126"
            },
            {
                city: "石家庄市",
                text: "高邑县",
                value: "130127"
            },
            {
                city: "石家庄市",
                text: "深泽县",
                value: "130128"
            },
            {
                city: "石家庄市",
                text: "赞皇县",
                value: "130129"
            },
            {
                city: "石家庄市",
                text: "无极县",
                value: "130130"
            },
            {
                city: "石家庄市",
                text: "平山县",
                value: "130131"
            },
            {
                city: "石家庄市",
                text: "元氏县",
                value: "130132"
            },
            {
                city: "石家庄市",
                text: "赵县",
                value: "130133"
            },
            {
                city: "石家庄市",
                text: "晋州市",
                value: "130183"
            },
            {
                city: "石家庄市",
                text: "新乐市",
                value: "130184"
            }],
            130200 : [{
                city: "唐山市",
                text: "市辖区",
                value: "130201"
            },
            {
                city: "唐山市",
                text: "路南区",
                value: "130202"
            },
            {
                city: "唐山市",
                text: "路北区",
                value: "130203"
            },
            {
                city: "唐山市",
                text: "古冶区",
                value: "130204"
            },
            {
                city: "唐山市",
                text: "开平区",
                value: "130205"
            },
            {
                city: "唐山市",
                text: "丰南区",
                value: "130207"
            },
            {
                city: "唐山市",
                text: "丰润区",
                value: "130208"
            },
            {
                city: "唐山市",
                text: "曹妃甸区",
                value: "130209"
            },
            {
                city: "唐山市",
                text: "滦县",
                value: "130223"
            },
            {
                city: "唐山市",
                text: "滦南县",
                value: "130224"
            },
            {
                city: "唐山市",
                text: "乐亭县",
                value: "130225"
            },
            {
                city: "唐山市",
                text: "迁西县",
                value: "130227"
            },
            {
                city: "唐山市",
                text: "玉田县",
                value: "130229"
            },
            {
                city: "唐山市",
                text: "遵化市",
                value: "130281"
            },
            {
                city: "唐山市",
                text: "迁安市",
                value: "130283"
            }],
            130300 : [{
                city: "秦皇岛市",
                text: "市辖区",
                value: "130301"
            },
            {
                city: "秦皇岛市",
                text: "海港区",
                value: "130302"
            },
            {
                city: "秦皇岛市",
                text: "山海关区",
                value: "130303"
            },
            {
                city: "秦皇岛市",
                text: "北戴河区",
                value: "130304"
            },
            {
                city: "秦皇岛市",
                text: "抚宁区",
                value: "130306"
            },
            {
                city: "秦皇岛市",
                text: "青龙满族自治县",
                value: "130321"
            },
            {
                city: "秦皇岛市",
                text: "昌黎县",
                value: "130322"
            },
            {
                city: "秦皇岛市",
                text: "卢龙县",
                value: "130324"
            }],
            130400 : [{
                city: "邯郸市",
                text: "市辖区",
                value: "130401"
            },
            {
                city: "邯郸市",
                text: "邯山区",
                value: "130402"
            },
            {
                city: "邯郸市",
                text: "丛台区",
                value: "130403"
            },
            {
                city: "邯郸市",
                text: "复兴区",
                value: "130404"
            },
            {
                city: "邯郸市",
                text: "峰峰矿区",
                value: "130406"
            },
            {
                city: "邯郸市",
                text: "邯郸县",
                value: "130421"
            },
            {
                city: "邯郸市",
                text: "临漳县",
                value: "130423"
            },
            {
                city: "邯郸市",
                text: "成安县",
                value: "130424"
            },
            {
                city: "邯郸市",
                text: "大名县",
                value: "130425"
            },
            {
                city: "邯郸市",
                text: "涉县",
                value: "130426"
            },
            {
                city: "邯郸市",
                text: "磁县",
                value: "130427"
            },
            {
                city: "邯郸市",
                text: "肥乡县",
                value: "130428"
            },
            {
                city: "邯郸市",
                text: "永年县",
                value: "130429"
            },
            {
                city: "邯郸市",
                text: "邱县",
                value: "130430"
            },
            {
                city: "邯郸市",
                text: "鸡泽县",
                value: "130431"
            },
            {
                city: "邯郸市",
                text: "广平县",
                value: "130432"
            },
            {
                city: "邯郸市",
                text: "馆陶县",
                value: "130433"
            },
            {
                city: "邯郸市",
                text: "魏县",
                value: "130434"
            },
            {
                city: "邯郸市",
                text: "曲周县",
                value: "130435"
            },
            {
                city: "邯郸市",
                text: "武安市",
                value: "130481"
            }],
            130500 : [{
                city: "邢台市",
                text: "市辖区",
                value: "130501"
            },
            {
                city: "邢台市",
                text: "桥东区",
                value: "130502"
            },
            {
                city: "邢台市",
                text: "桥西区",
                value: "130503"
            },
            {
                city: "邢台市",
                text: "邢台县",
                value: "130521"
            },
            {
                city: "邢台市",
                text: "临城县",
                value: "130522"
            },
            {
                city: "邢台市",
                text: "内丘县",
                value: "130523"
            },
            {
                city: "邢台市",
                text: "柏乡县",
                value: "130524"
            },
            {
                city: "邢台市",
                text: "隆尧县",
                value: "130525"
            },
            {
                city: "邢台市",
                text: "任县",
                value: "130526"
            },
            {
                city: "邢台市",
                text: "南和县",
                value: "130527"
            },
            {
                city: "邢台市",
                text: "宁晋县",
                value: "130528"
            },
            {
                city: "邢台市",
                text: "巨鹿县",
                value: "130529"
            },
            {
                city: "邢台市",
                text: "新河县",
                value: "130530"
            },
            {
                city: "邢台市",
                text: "广宗县",
                value: "130531"
            },
            {
                city: "邢台市",
                text: "平乡县",
                value: "130532"
            },
            {
                city: "邢台市",
                text: "威县",
                value: "130533"
            },
            {
                city: "邢台市",
                text: "清河县",
                value: "130534"
            },
            {
                city: "邢台市",
                text: "临西县",
                value: "130535"
            },
            {
                city: "邢台市",
                text: "南宫市",
                value: "130581"
            },
            {
                city: "邢台市",
                text: "沙河市",
                value: "130582"
            }],
            130600 : [{
                city: "保定市",
                text: "市辖区",
                value: "130601"
            },
            {
                city: "保定市",
                text: "竞秀区",
                value: "130602"
            },
            {
                city: "保定市",
                text: "莲池区",
                value: "130606"
            },
            {
                city: "保定市",
                text: "满城区",
                value: "130607"
            },
            {
                city: "保定市",
                text: "清苑区",
                value: "130608"
            },
            {
                city: "保定市",
                text: "徐水区",
                value: "130609"
            },
            {
                city: "保定市",
                text: "涞水县",
                value: "130623"
            },
            {
                city: "保定市",
                text: "阜平县",
                value: "130624"
            },
            {
                city: "保定市",
                text: "定兴县",
                value: "130626"
            },
            {
                city: "保定市",
                text: "唐县",
                value: "130627"
            },
            {
                city: "保定市",
                text: "高阳县",
                value: "130628"
            },
            {
                city: "保定市",
                text: "容城县",
                value: "130629"
            },
            {
                city: "保定市",
                text: "涞源县",
                value: "130630"
            },
            {
                city: "保定市",
                text: "望都县",
                value: "130631"
            },
            {
                city: "保定市",
                text: "安新县",
                value: "130632"
            },
            {
                city: "保定市",
                text: "易县",
                value: "130633"
            },
            {
                city: "保定市",
                text: "曲阳县",
                value: "130634"
            },
            {
                city: "保定市",
                text: "蠡县",
                value: "130635"
            },
            {
                city: "保定市",
                text: "顺平县",
                value: "130636"
            },
            {
                city: "保定市",
                text: "博野县",
                value: "130637"
            },
            {
                city: "保定市",
                text: "雄县",
                value: "130638"
            },
            {
                city: "保定市",
                text: "涿州市",
                value: "130681"
            },
            {
                city: "保定市",
                text: "安国市",
                value: "130683"
            },
            {
                city: "保定市",
                text: "高碑店市",
                value: "130684"
            }],
            130700 : [{
                city: "张家口市",
                text: "市辖区",
                value: "130701"
            },
            {
                city: "张家口市",
                text: "桥东区",
                value: "130702"
            },
            {
                city: "张家口市",
                text: "桥西区",
                value: "130703"
            },
            {
                city: "张家口市",
                text: "宣化区",
                value: "130705"
            },
            {
                city: "张家口市",
                text: "下花园区",
                value: "130706"
            },
            {
                city: "张家口市",
                text: "万全区",
                value: "130708"
            },
            {
                city: "张家口市",
                text: "崇礼区",
                value: "130709"
            },
            {
                city: "张家口市",
                text: "张北县",
                value: "130722"
            },
            {
                city: "张家口市",
                text: "康保县",
                value: "130723"
            },
            {
                city: "张家口市",
                text: "沽源县",
                value: "130724"
            },
            {
                city: "张家口市",
                text: "尚义县",
                value: "130725"
            },
            {
                city: "张家口市",
                text: "蔚县",
                value: "130726"
            },
            {
                city: "张家口市",
                text: "阳原县",
                value: "130727"
            },
            {
                city: "张家口市",
                text: "怀安县",
                value: "130728"
            },
            {
                city: "张家口市",
                text: "怀来县",
                value: "130730"
            },
            {
                city: "张家口市",
                text: "涿鹿县",
                value: "130731"
            },
            {
                city: "张家口市",
                text: "赤城县",
                value: "130732"
            }],
            130800 : [{
                city: "承德市",
                text: "市辖区",
                value: "130801"
            },
            {
                city: "承德市",
                text: "双桥区",
                value: "130802"
            },
            {
                city: "承德市",
                text: "双滦区",
                value: "130803"
            },
            {
                city: "承德市",
                text: "鹰手营子矿区",
                value: "130804"
            },
            {
                city: "承德市",
                text: "承德县",
                value: "130821"
            },
            {
                city: "承德市",
                text: "兴隆县",
                value: "130822"
            },
            {
                city: "承德市",
                text: "平泉县",
                value: "130823"
            },
            {
                city: "承德市",
                text: "滦平县",
                value: "130824"
            },
            {
                city: "承德市",
                text: "隆化县",
                value: "130825"
            },
            {
                city: "承德市",
                text: "丰宁满族自治县",
                value: "130826"
            },
            {
                city: "承德市",
                text: "宽城满族自治县",
                value: "130827"
            },
            {
                city: "承德市",
                text: "围场满族蒙古族自治县",
                value: "130828"
            }],
            130900 : [{
                city: "沧州市",
                text: "市辖区",
                value: "130901"
            },
            {
                city: "沧州市",
                text: "新华区",
                value: "130902"
            },
            {
                city: "沧州市",
                text: "运河区",
                value: "130903"
            },
            {
                city: "沧州市",
                text: "沧县",
                value: "130921"
            },
            {
                city: "沧州市",
                text: "青县",
                value: "130922"
            },
            {
                city: "沧州市",
                text: "东光县",
                value: "130923"
            },
            {
                city: "沧州市",
                text: "海兴县",
                value: "130924"
            },
            {
                city: "沧州市",
                text: "盐山县",
                value: "130925"
            },
            {
                city: "沧州市",
                text: "肃宁县",
                value: "130926"
            },
            {
                city: "沧州市",
                text: "南皮县",
                value: "130927"
            },
            {
                city: "沧州市",
                text: "吴桥县",
                value: "130928"
            },
            {
                city: "沧州市",
                text: "献县",
                value: "130929"
            },
            {
                city: "沧州市",
                text: "孟村回族自治县",
                value: "130930"
            },
            {
                city: "沧州市",
                text: "泊头市",
                value: "130981"
            },
            {
                city: "沧州市",
                text: "任丘市",
                value: "130982"
            },
            {
                city: "沧州市",
                text: "黄骅市",
                value: "130983"
            },
            {
                city: "沧州市",
                text: "河间市",
                value: "130984"
            }],
            131000 : [{
                city: "廊坊市",
                text: "市辖区",
                value: "131001"
            },
            {
                city: "廊坊市",
                text: "安次区",
                value: "131002"
            },
            {
                city: "廊坊市",
                text: "广阳区",
                value: "131003"
            },
            {
                city: "廊坊市",
                text: "固安县",
                value: "131022"
            },
            {
                city: "廊坊市",
                text: "永清县",
                value: "131023"
            },
            {
                city: "廊坊市",
                text: "香河县",
                value: "131024"
            },
            {
                city: "廊坊市",
                text: "大城县",
                value: "131025"
            },
            {
                city: "廊坊市",
                text: "文安县",
                value: "131026"
            },
            {
                city: "廊坊市",
                text: "大厂回族自治县",
                value: "131028"
            },
            {
                city: "廊坊市",
                text: "霸州市",
                value: "131081"
            },
            {
                city: "廊坊市",
                text: "三河市",
                value: "131082"
            }],
            131100 : [{
                city: "衡水市",
                text: "市辖区",
                value: "131101"
            },
            {
                city: "衡水市",
                text: "桃城区",
                value: "131102"
            },
            {
                city: "衡水市",
                text: "冀州区",
                value: "131103"
            },
            {
                city: "衡水市",
                text: "枣强县",
                value: "131121"
            },
            {
                city: "衡水市",
                text: "武邑县",
                value: "131122"
            },
            {
                city: "衡水市",
                text: "武强县",
                value: "131123"
            },
            {
                city: "衡水市",
                text: "饶阳县",
                value: "131124"
            },
            {
                city: "衡水市",
                text: "安平县",
                value: "131125"
            },
            {
                city: "衡水市",
                text: "故城县",
                value: "131126"
            },
            {
                city: "衡水市",
                text: "景县",
                value: "131127"
            },
            {
                city: "衡水市",
                text: "阜城县",
                value: "131128"
            },
            {
                city: "衡水市",
                text: "深州市",
                value: "131182"
            }],
            139000 : [{
                city: "省直辖县级行政区划",
                text: "定州市",
                value: "139001"
            },
            {
                city: "省直辖县级行政区划",
                text: "辛集市",
                value: "139002"
            }],
            140100 : [{
                city: "太原市",
                text: "市辖区",
                value: "140101"
            },
            {
                city: "太原市",
                text: "小店区",
                value: "140105"
            },
            {
                city: "太原市",
                text: "迎泽区",
                value: "140106"
            },
            {
                city: "太原市",
                text: "杏花岭区",
                value: "140107"
            },
            {
                city: "太原市",
                text: "尖草坪区",
                value: "140108"
            },
            {
                city: "太原市",
                text: "万柏林区",
                value: "140109"
            },
            {
                city: "太原市",
                text: "晋源区",
                value: "140110"
            },
            {
                city: "太原市",
                text: "清徐县",
                value: "140121"
            },
            {
                city: "太原市",
                text: "阳曲县",
                value: "140122"
            },
            {
                city: "太原市",
                text: "娄烦县",
                value: "140123"
            },
            {
                city: "太原市",
                text: "古交市",
                value: "140181"
            }],
            140200 : [{
                city: "大同市",
                text: "市辖区",
                value: "140201"
            },
            {
                city: "大同市",
                text: "城区",
                value: "140202"
            },
            {
                city: "大同市",
                text: "矿区",
                value: "140203"
            },
            {
                city: "大同市",
                text: "南郊区",
                value: "140211"
            },
            {
                city: "大同市",
                text: "新荣区",
                value: "140212"
            },
            {
                city: "大同市",
                text: "阳高县",
                value: "140221"
            },
            {
                city: "大同市",
                text: "天镇县",
                value: "140222"
            },
            {
                city: "大同市",
                text: "广灵县",
                value: "140223"
            },
            {
                city: "大同市",
                text: "灵丘县",
                value: "140224"
            },
            {
                city: "大同市",
                text: "浑源县",
                value: "140225"
            },
            {
                city: "大同市",
                text: "左云县",
                value: "140226"
            },
            {
                city: "大同市",
                text: "大同县",
                value: "140227"
            }],
            140300 : [{
                city: "阳泉市",
                text: "市辖区",
                value: "140301"
            },
            {
                city: "阳泉市",
                text: "城区",
                value: "140302"
            },
            {
                city: "阳泉市",
                text: "矿区",
                value: "140303"
            },
            {
                city: "阳泉市",
                text: "郊区",
                value: "140311"
            },
            {
                city: "阳泉市",
                text: "平定县",
                value: "140321"
            },
            {
                city: "阳泉市",
                text: "盂县",
                value: "140322"
            }],
            140400 : [{
                city: "长治市",
                text: "市辖区",
                value: "140401"
            },
            {
                city: "长治市",
                text: "城区",
                value: "140402"
            },
            {
                city: "长治市",
                text: "郊区",
                value: "140411"
            },
            {
                city: "长治市",
                text: "长治县",
                value: "140421"
            },
            {
                city: "长治市",
                text: "襄垣县",
                value: "140423"
            },
            {
                city: "长治市",
                text: "屯留县",
                value: "140424"
            },
            {
                city: "长治市",
                text: "平顺县",
                value: "140425"
            },
            {
                city: "长治市",
                text: "黎城县",
                value: "140426"
            },
            {
                city: "长治市",
                text: "壶关县",
                value: "140427"
            },
            {
                city: "长治市",
                text: "长子县",
                value: "140428"
            },
            {
                city: "长治市",
                text: "武乡县",
                value: "140429"
            },
            {
                city: "长治市",
                text: "沁县",
                value: "140430"
            },
            {
                city: "长治市",
                text: "沁源县",
                value: "140431"
            },
            {
                city: "长治市",
                text: "潞城市",
                value: "140481"
            }],
            140500 : [{
                city: "晋城市",
                text: "市辖区",
                value: "140501"
            },
            {
                city: "晋城市",
                text: "城区",
                value: "140502"
            },
            {
                city: "晋城市",
                text: "沁水县",
                value: "140521"
            },
            {
                city: "晋城市",
                text: "阳城县",
                value: "140522"
            },
            {
                city: "晋城市",
                text: "陵川县",
                value: "140524"
            },
            {
                city: "晋城市",
                text: "泽州县",
                value: "140525"
            },
            {
                city: "晋城市",
                text: "高平市",
                value: "140581"
            }],
            140600 : [{
                city: "朔州市",
                text: "市辖区",
                value: "140601"
            },
            {
                city: "朔州市",
                text: "朔城区",
                value: "140602"
            },
            {
                city: "朔州市",
                text: "平鲁区",
                value: "140603"
            },
            {
                city: "朔州市",
                text: "山阴县",
                value: "140621"
            },
            {
                city: "朔州市",
                text: "应县",
                value: "140622"
            },
            {
                city: "朔州市",
                text: "右玉县",
                value: "140623"
            },
            {
                city: "朔州市",
                text: "怀仁县",
                value: "140624"
            }],
            140700 : [{
                city: "晋中市",
                text: "市辖区",
                value: "140701"
            },
            {
                city: "晋中市",
                text: "榆次区",
                value: "140702"
            },
            {
                city: "晋中市",
                text: "榆社县",
                value: "140721"
            },
            {
                city: "晋中市",
                text: "左权县",
                value: "140722"
            },
            {
                city: "晋中市",
                text: "和顺县",
                value: "140723"
            },
            {
                city: "晋中市",
                text: "昔阳县",
                value: "140724"
            },
            {
                city: "晋中市",
                text: "寿阳县",
                value: "140725"
            },
            {
                city: "晋中市",
                text: "太谷县",
                value: "140726"
            },
            {
                city: "晋中市",
                text: "祁县",
                value: "140727"
            },
            {
                city: "晋中市",
                text: "平遥县",
                value: "140728"
            },
            {
                city: "晋中市",
                text: "灵石县",
                value: "140729"
            },
            {
                city: "晋中市",
                text: "介休市",
                value: "140781"
            }],
            140800 : [{
                city: "运城市",
                text: "市辖区",
                value: "140801"
            },
            {
                city: "运城市",
                text: "盐湖区",
                value: "140802"
            },
            {
                city: "运城市",
                text: "临猗县",
                value: "140821"
            },
            {
                city: "运城市",
                text: "万荣县",
                value: "140822"
            },
            {
                city: "运城市",
                text: "闻喜县",
                value: "140823"
            },
            {
                city: "运城市",
                text: "稷山县",
                value: "140824"
            },
            {
                city: "运城市",
                text: "新绛县",
                value: "140825"
            },
            {
                city: "运城市",
                text: "绛县",
                value: "140826"
            },
            {
                city: "运城市",
                text: "垣曲县",
                value: "140827"
            },
            {
                city: "运城市",
                text: "夏县",
                value: "140828"
            },
            {
                city: "运城市",
                text: "平陆县",
                value: "140829"
            },
            {
                city: "运城市",
                text: "芮城县",
                value: "140830"
            },
            {
                city: "运城市",
                text: "永济市",
                value: "140881"
            },
            {
                city: "运城市",
                text: "河津市",
                value: "140882"
            }],
            140900 : [{
                city: "忻州市",
                text: "市辖区",
                value: "140901"
            },
            {
                city: "忻州市",
                text: "忻府区",
                value: "140902"
            },
            {
                city: "忻州市",
                text: "定襄县",
                value: "140921"
            },
            {
                city: "忻州市",
                text: "五台县",
                value: "140922"
            },
            {
                city: "忻州市",
                text: "代县",
                value: "140923"
            },
            {
                city: "忻州市",
                text: "繁峙县",
                value: "140924"
            },
            {
                city: "忻州市",
                text: "宁武县",
                value: "140925"
            },
            {
                city: "忻州市",
                text: "静乐县",
                value: "140926"
            },
            {
                city: "忻州市",
                text: "神池县",
                value: "140927"
            },
            {
                city: "忻州市",
                text: "五寨县",
                value: "140928"
            },
            {
                city: "忻州市",
                text: "岢岚县",
                value: "140929"
            },
            {
                city: "忻州市",
                text: "河曲县",
                value: "140930"
            },
            {
                city: "忻州市",
                text: "保德县",
                value: "140931"
            },
            {
                city: "忻州市",
                text: "偏关县",
                value: "140932"
            },
            {
                city: "忻州市",
                text: "原平市",
                value: "140981"
            }],
            141000 : [{
                city: "临汾市",
                text: "市辖区",
                value: "141001"
            },
            {
                city: "临汾市",
                text: "尧都区",
                value: "141002"
            },
            {
                city: "临汾市",
                text: "曲沃县",
                value: "141021"
            },
            {
                city: "临汾市",
                text: "翼城县",
                value: "141022"
            },
            {
                city: "临汾市",
                text: "襄汾县",
                value: "141023"
            },
            {
                city: "临汾市",
                text: "洪洞县",
                value: "141024"
            },
            {
                city: "临汾市",
                text: "古县",
                value: "141025"
            },
            {
                city: "临汾市",
                text: "安泽县",
                value: "141026"
            },
            {
                city: "临汾市",
                text: "浮山县",
                value: "141027"
            },
            {
                city: "临汾市",
                text: "吉县",
                value: "141028"
            },
            {
                city: "临汾市",
                text: "乡宁县",
                value: "141029"
            },
            {
                city: "临汾市",
                text: "大宁县",
                value: "141030"
            },
            {
                city: "临汾市",
                text: "隰县",
                value: "141031"
            },
            {
                city: "临汾市",
                text: "永和县",
                value: "141032"
            },
            {
                city: "临汾市",
                text: "蒲县",
                value: "141033"
            },
            {
                city: "临汾市",
                text: "汾西县",
                value: "141034"
            },
            {
                city: "临汾市",
                text: "侯马市",
                value: "141081"
            },
            {
                city: "临汾市",
                text: "霍州市",
                value: "141082"
            }],
            141100 : [{
                city: "吕梁市",
                text: "市辖区",
                value: "141101"
            },
            {
                city: "吕梁市",
                text: "离石区",
                value: "141102"
            },
            {
                city: "吕梁市",
                text: "文水县",
                value: "141121"
            },
            {
                city: "吕梁市",
                text: "交城县",
                value: "141122"
            },
            {
                city: "吕梁市",
                text: "兴县",
                value: "141123"
            },
            {
                city: "吕梁市",
                text: "临县",
                value: "141124"
            },
            {
                city: "吕梁市",
                text: "柳林县",
                value: "141125"
            },
            {
                city: "吕梁市",
                text: "石楼县",
                value: "141126"
            },
            {
                city: "吕梁市",
                text: "岚县",
                value: "141127"
            },
            {
                city: "吕梁市",
                text: "方山县",
                value: "141128"
            },
            {
                city: "吕梁市",
                text: "中阳县",
                value: "141129"
            },
            {
                city: "吕梁市",
                text: "交口县",
                value: "141130"
            },
            {
                city: "吕梁市",
                text: "孝义市",
                value: "141181"
            },
            {
                city: "吕梁市",
                text: "汾阳市",
                value: "141182"
            }],
            150100 : [{
                city: "呼和浩特市",
                text: "市辖区",
                value: "150101"
            },
            {
                city: "呼和浩特市",
                text: "新城区",
                value: "150102"
            },
            {
                city: "呼和浩特市",
                text: "回民区",
                value: "150103"
            },
            {
                city: "呼和浩特市",
                text: "玉泉区",
                value: "150104"
            },
            {
                city: "呼和浩特市",
                text: "赛罕区",
                value: "150105"
            },
            {
                city: "呼和浩特市",
                text: "土默特左旗",
                value: "150121"
            },
            {
                city: "呼和浩特市",
                text: "托克托县",
                value: "150122"
            },
            {
                city: "呼和浩特市",
                text: "和林格尔县",
                value: "150123"
            },
            {
                city: "呼和浩特市",
                text: "清水河县",
                value: "150124"
            },
            {
                city: "呼和浩特市",
                text: "武川县",
                value: "150125"
            }],
            150200 : [{
                city: "包头市",
                text: "市辖区",
                value: "150201"
            },
            {
                city: "包头市",
                text: "东河区",
                value: "150202"
            },
            {
                city: "包头市",
                text: "昆都仑区",
                value: "150203"
            },
            {
                city: "包头市",
                text: "青山区",
                value: "150204"
            },
            {
                city: "包头市",
                text: "石拐区",
                value: "150205"
            },
            {
                city: "包头市",
                text: "白云鄂博矿区",
                value: "150206"
            },
            {
                city: "包头市",
                text: "九原区",
                value: "150207"
            },
            {
                city: "包头市",
                text: "土默特右旗",
                value: "150221"
            },
            {
                city: "包头市",
                text: "固阳县",
                value: "150222"
            },
            {
                city: "包头市",
                text: "达尔罕茂明安联合旗",
                value: "150223"
            }],
            150300 : [{
                city: "乌海市",
                text: "市辖区",
                value: "150301"
            },
            {
                city: "乌海市",
                text: "海勃湾区",
                value: "150302"
            },
            {
                city: "乌海市",
                text: "海南区",
                value: "150303"
            },
            {
                city: "乌海市",
                text: "乌达区",
                value: "150304"
            }],
            150400 : [{
                city: "赤峰市",
                text: "市辖区",
                value: "150401"
            },
            {
                city: "赤峰市",
                text: "红山区",
                value: "150402"
            },
            {
                city: "赤峰市",
                text: "元宝山区",
                value: "150403"
            },
            {
                city: "赤峰市",
                text: "松山区",
                value: "150404"
            },
            {
                city: "赤峰市",
                text: "阿鲁科尔沁旗",
                value: "150421"
            },
            {
                city: "赤峰市",
                text: "巴林左旗",
                value: "150422"
            },
            {
                city: "赤峰市",
                text: "巴林右旗",
                value: "150423"
            },
            {
                city: "赤峰市",
                text: "林西县",
                value: "150424"
            },
            {
                city: "赤峰市",
                text: "克什克腾旗",
                value: "150425"
            },
            {
                city: "赤峰市",
                text: "翁牛特旗",
                value: "150426"
            },
            {
                city: "赤峰市",
                text: "喀喇沁旗",
                value: "150428"
            },
            {
                city: "赤峰市",
                text: "宁城县",
                value: "150429"
            },
            {
                city: "赤峰市",
                text: "敖汉旗",
                value: "150430"
            }],
            150500 : [{
                city: "通辽市",
                text: "市辖区",
                value: "150501"
            },
            {
                city: "通辽市",
                text: "科尔沁区",
                value: "150502"
            },
            {
                city: "通辽市",
                text: "科尔沁左翼中旗",
                value: "150521"
            },
            {
                city: "通辽市",
                text: "科尔沁左翼后旗",
                value: "150522"
            },
            {
                city: "通辽市",
                text: "开鲁县",
                value: "150523"
            },
            {
                city: "通辽市",
                text: "库伦旗",
                value: "150524"
            },
            {
                city: "通辽市",
                text: "奈曼旗",
                value: "150525"
            },
            {
                city: "通辽市",
                text: "扎鲁特旗",
                value: "150526"
            },
            {
                city: "通辽市",
                text: "霍林郭勒市",
                value: "150581"
            }],
            150600 : [{
                city: "鄂尔多斯市",
                text: "市辖区",
                value: "150601"
            },
            {
                city: "鄂尔多斯市",
                text: "东胜区",
                value: "150602"
            },
            {
                city: "鄂尔多斯市",
                text: "康巴什区",
                value: "150603"
            },
            {
                city: "鄂尔多斯市",
                text: "达拉特旗",
                value: "150621"
            },
            {
                city: "鄂尔多斯市",
                text: "准格尔旗",
                value: "150622"
            },
            {
                city: "鄂尔多斯市",
                text: "鄂托克前旗",
                value: "150623"
            },
            {
                city: "鄂尔多斯市",
                text: "鄂托克旗",
                value: "150624"
            },
            {
                city: "鄂尔多斯市",
                text: "杭锦旗",
                value: "150625"
            },
            {
                city: "鄂尔多斯市",
                text: "乌审旗",
                value: "150626"
            },
            {
                city: "鄂尔多斯市",
                text: "伊金霍洛旗",
                value: "150627"
            }],
            150700 : [{
                city: "呼伦贝尔市",
                text: "市辖区",
                value: "150701"
            },
            {
                city: "呼伦贝尔市",
                text: "海拉尔区",
                value: "150702"
            },
            {
                city: "呼伦贝尔市",
                text: "扎赉诺尔区",
                value: "150703"
            },
            {
                city: "呼伦贝尔市",
                text: "阿荣旗",
                value: "150721"
            },
            {
                city: "呼伦贝尔市",
                text: "莫力达瓦达斡尔族自治旗",
                value: "150722"
            },
            {
                city: "呼伦贝尔市",
                text: "鄂伦春自治旗",
                value: "150723"
            },
            {
                city: "呼伦贝尔市",
                text: "鄂温克族自治旗",
                value: "150724"
            },
            {
                city: "呼伦贝尔市",
                text: "陈巴尔虎旗",
                value: "150725"
            },
            {
                city: "呼伦贝尔市",
                text: "新巴尔虎左旗",
                value: "150726"
            },
            {
                city: "呼伦贝尔市",
                text: "新巴尔虎右旗",
                value: "150727"
            },
            {
                city: "呼伦贝尔市",
                text: "满洲里市",
                value: "150781"
            },
            {
                city: "呼伦贝尔市",
                text: "牙克石市",
                value: "150782"
            },
            {
                city: "呼伦贝尔市",
                text: "扎兰屯市",
                value: "150783"
            },
            {
                city: "呼伦贝尔市",
                text: "额尔古纳市",
                value: "150784"
            },
            {
                city: "呼伦贝尔市",
                text: "根河市",
                value: "150785"
            }],
            150800 : [{
                city: "巴彦淖尔市",
                text: "市辖区",
                value: "150801"
            },
            {
                city: "巴彦淖尔市",
                text: "临河区",
                value: "150802"
            },
            {
                city: "巴彦淖尔市",
                text: "五原县",
                value: "150821"
            },
            {
                city: "巴彦淖尔市",
                text: "磴口县",
                value: "150822"
            },
            {
                city: "巴彦淖尔市",
                text: "乌拉特前旗",
                value: "150823"
            },
            {
                city: "巴彦淖尔市",
                text: "乌拉特中旗",
                value: "150824"
            },
            {
                city: "巴彦淖尔市",
                text: "乌拉特后旗",
                value: "150825"
            },
            {
                city: "巴彦淖尔市",
                text: "杭锦后旗",
                value: "150826"
            }],
            150900 : [{
                city: "乌兰察布市",
                text: "市辖区",
                value: "150901"
            },
            {
                city: "乌兰察布市",
                text: "集宁区",
                value: "150902"
            },
            {
                city: "乌兰察布市",
                text: "卓资县",
                value: "150921"
            },
            {
                city: "乌兰察布市",
                text: "化德县",
                value: "150922"
            },
            {
                city: "乌兰察布市",
                text: "商都县",
                value: "150923"
            },
            {
                city: "乌兰察布市",
                text: "兴和县",
                value: "150924"
            },
            {
                city: "乌兰察布市",
                text: "凉城县",
                value: "150925"
            },
            {
                city: "乌兰察布市",
                text: "察哈尔右翼前旗",
                value: "150926"
            },
            {
                city: "乌兰察布市",
                text: "察哈尔右翼中旗",
                value: "150927"
            },
            {
                city: "乌兰察布市",
                text: "察哈尔右翼后旗",
                value: "150928"
            },
            {
                city: "乌兰察布市",
                text: "四子王旗",
                value: "150929"
            },
            {
                city: "乌兰察布市",
                text: "丰镇市",
                value: "150981"
            }],
            152200 : [{
                city: "兴安盟",
                text: "乌兰浩特市",
                value: "152201"
            },
            {
                city: "兴安盟",
                text: "阿尔山市",
                value: "152202"
            },
            {
                city: "兴安盟",
                text: "科尔沁右翼前旗",
                value: "152221"
            },
            {
                city: "兴安盟",
                text: "科尔沁右翼中旗",
                value: "152222"
            },
            {
                city: "兴安盟",
                text: "扎赉特旗",
                value: "152223"
            },
            {
                city: "兴安盟",
                text: "突泉县",
                value: "152224"
            }],
            152500 : [{
                city: "锡林郭勒盟",
                text: "二连浩特市",
                value: "152501"
            },
            {
                city: "锡林郭勒盟",
                text: "锡林浩特市",
                value: "152502"
            },
            {
                city: "锡林郭勒盟",
                text: "阿巴嘎旗",
                value: "152522"
            },
            {
                city: "锡林郭勒盟",
                text: "苏尼特左旗",
                value: "152523"
            },
            {
                city: "锡林郭勒盟",
                text: "苏尼特右旗",
                value: "152524"
            },
            {
                city: "锡林郭勒盟",
                text: "东乌珠穆沁旗",
                value: "152525"
            },
            {
                city: "锡林郭勒盟",
                text: "西乌珠穆沁旗",
                value: "152526"
            },
            {
                city: "锡林郭勒盟",
                text: "太仆寺旗",
                value: "152527"
            },
            {
                city: "锡林郭勒盟",
                text: "镶黄旗",
                value: "152528"
            },
            {
                city: "锡林郭勒盟",
                text: "正镶白旗",
                value: "152529"
            },
            {
                city: "锡林郭勒盟",
                text: "正蓝旗",
                value: "152530"
            },
            {
                city: "锡林郭勒盟",
                text: "多伦县",
                value: "152531"
            }],
            152900 : [{
                city: "阿拉善盟",
                text: "阿拉善左旗",
                value: "152921"
            },
            {
                city: "阿拉善盟",
                text: "阿拉善右旗",
                value: "152922"
            },
            {
                city: "阿拉善盟",
                text: "额济纳旗",
                value: "152923"
            }],
            210100 : [{
                city: "沈阳市",
                text: "市辖区",
                value: "210101"
            },
            {
                city: "沈阳市",
                text: "和平区",
                value: "210102"
            },
            {
                city: "沈阳市",
                text: "沈河区",
                value: "210103"
            },
            {
                city: "沈阳市",
                text: "大东区",
                value: "210104"
            },
            {
                city: "沈阳市",
                text: "皇姑区",
                value: "210105"
            },
            {
                city: "沈阳市",
                text: "铁西区",
                value: "210106"
            },
            {
                city: "沈阳市",
                text: "苏家屯区",
                value: "210111"
            },
            {
                city: "沈阳市",
                text: "浑南区",
                value: "210112"
            },
            {
                city: "沈阳市",
                text: "沈北新区",
                value: "210113"
            },
            {
                city: "沈阳市",
                text: "于洪区",
                value: "210114"
            },
            {
                city: "沈阳市",
                text: "辽中区",
                value: "210115"
            },
            {
                city: "沈阳市",
                text: "康平县",
                value: "210123"
            },
            {
                city: "沈阳市",
                text: "法库县",
                value: "210124"
            },
            {
                city: "沈阳市",
                text: "新民市",
                value: "210181"
            }],
            210200 : [{
                city: "大连市",
                text: "市辖区",
                value: "210201"
            },
            {
                city: "大连市",
                text: "中山区",
                value: "210202"
            },
            {
                city: "大连市",
                text: "西岗区",
                value: "210203"
            },
            {
                city: "大连市",
                text: "沙河口区",
                value: "210204"
            },
            {
                city: "大连市",
                text: "甘井子区",
                value: "210211"
            },
            {
                city: "大连市",
                text: "旅顺口区",
                value: "210212"
            },
            {
                city: "大连市",
                text: "金州区",
                value: "210213"
            },
            {
                city: "大连市",
                text: "普兰店区",
                value: "210214"
            },
            {
                city: "大连市",
                text: "长海县",
                value: "210224"
            },
            {
                city: "大连市",
                text: "瓦房店市",
                value: "210281"
            },
            {
                city: "大连市",
                text: "庄河市",
                value: "210283"
            }],
            210300 : [{
                city: "鞍山市",
                text: "市辖区",
                value: "210301"
            },
            {
                city: "鞍山市",
                text: "铁东区",
                value: "210302"
            },
            {
                city: "鞍山市",
                text: "铁西区",
                value: "210303"
            },
            {
                city: "鞍山市",
                text: "立山区",
                value: "210304"
            },
            {
                city: "鞍山市",
                text: "千山区",
                value: "210311"
            },
            {
                city: "鞍山市",
                text: "台安县",
                value: "210321"
            },
            {
                city: "鞍山市",
                text: "岫岩满族自治县",
                value: "210323"
            },
            {
                city: "鞍山市",
                text: "海城市",
                value: "210381"
            }],
            210400 : [{
                city: "抚顺市",
                text: "市辖区",
                value: "210401"
            },
            {
                city: "抚顺市",
                text: "新抚区",
                value: "210402"
            },
            {
                city: "抚顺市",
                text: "东洲区",
                value: "210403"
            },
            {
                city: "抚顺市",
                text: "望花区",
                value: "210404"
            },
            {
                city: "抚顺市",
                text: "顺城区",
                value: "210411"
            },
            {
                city: "抚顺市",
                text: "抚顺县",
                value: "210421"
            },
            {
                city: "抚顺市",
                text: "新宾满族自治县",
                value: "210422"
            },
            {
                city: "抚顺市",
                text: "清原满族自治县",
                value: "210423"
            }],
            210500 : [{
                city: "本溪市",
                text: "市辖区",
                value: "210501"
            },
            {
                city: "本溪市",
                text: "平山区",
                value: "210502"
            },
            {
                city: "本溪市",
                text: "溪湖区",
                value: "210503"
            },
            {
                city: "本溪市",
                text: "明山区",
                value: "210504"
            },
            {
                city: "本溪市",
                text: "南芬区",
                value: "210505"
            },
            {
                city: "本溪市",
                text: "本溪满族自治县",
                value: "210521"
            },
            {
                city: "本溪市",
                text: "桓仁满族自治县",
                value: "210522"
            }],
            210600 : [{
                city: "丹东市",
                text: "市辖区",
                value: "210601"
            },
            {
                city: "丹东市",
                text: "元宝区",
                value: "210602"
            },
            {
                city: "丹东市",
                text: "振兴区",
                value: "210603"
            },
            {
                city: "丹东市",
                text: "振安区",
                value: "210604"
            },
            {
                city: "丹东市",
                text: "宽甸满族自治县",
                value: "210624"
            },
            {
                city: "丹东市",
                text: "东港市",
                value: "210681"
            },
            {
                city: "丹东市",
                text: "凤城市",
                value: "210682"
            }],
            210700 : [{
                city: "锦州市",
                text: "市辖区",
                value: "210701"
            },
            {
                city: "锦州市",
                text: "古塔区",
                value: "210702"
            },
            {
                city: "锦州市",
                text: "凌河区",
                value: "210703"
            },
            {
                city: "锦州市",
                text: "太和区",
                value: "210711"
            },
            {
                city: "锦州市",
                text: "黑山县",
                value: "210726"
            },
            {
                city: "锦州市",
                text: "义县",
                value: "210727"
            },
            {
                city: "锦州市",
                text: "凌海市",
                value: "210781"
            },
            {
                city: "锦州市",
                text: "北镇市",
                value: "210782"
            }],
            210800 : [{
                city: "营口市",
                text: "市辖区",
                value: "210801"
            },
            {
                city: "营口市",
                text: "站前区",
                value: "210802"
            },
            {
                city: "营口市",
                text: "西市区",
                value: "210803"
            },
            {
                city: "营口市",
                text: "鲅鱼圈区",
                value: "210804"
            },
            {
                city: "营口市",
                text: "老边区",
                value: "210811"
            },
            {
                city: "营口市",
                text: "盖州市",
                value: "210881"
            },
            {
                city: "营口市",
                text: "大石桥市",
                value: "210882"
            }],
            210900 : [{
                city: "阜新市",
                text: "市辖区",
                value: "210901"
            },
            {
                city: "阜新市",
                text: "海州区",
                value: "210902"
            },
            {
                city: "阜新市",
                text: "新邱区",
                value: "210903"
            },
            {
                city: "阜新市",
                text: "太平区",
                value: "210904"
            },
            {
                city: "阜新市",
                text: "清河门区",
                value: "210905"
            },
            {
                city: "阜新市",
                text: "细河区",
                value: "210911"
            },
            {
                city: "阜新市",
                text: "阜新蒙古族自治县",
                value: "210921"
            },
            {
                city: "阜新市",
                text: "彰武县",
                value: "210922"
            }],
            211000 : [{
                city: "辽阳市",
                text: "市辖区",
                value: "211001"
            },
            {
                city: "辽阳市",
                text: "白塔区",
                value: "211002"
            },
            {
                city: "辽阳市",
                text: "文圣区",
                value: "211003"
            },
            {
                city: "辽阳市",
                text: "宏伟区",
                value: "211004"
            },
            {
                city: "辽阳市",
                text: "弓长岭区",
                value: "211005"
            },
            {
                city: "辽阳市",
                text: "太子河区",
                value: "211011"
            },
            {
                city: "辽阳市",
                text: "辽阳县",
                value: "211021"
            },
            {
                city: "辽阳市",
                text: "灯塔市",
                value: "211081"
            }],
            211100 : [{
                city: "盘锦市",
                text: "市辖区",
                value: "211101"
            },
            {
                city: "盘锦市",
                text: "双台子区",
                value: "211102"
            },
            {
                city: "盘锦市",
                text: "兴隆台区",
                value: "211103"
            },
            {
                city: "盘锦市",
                text: "大洼区",
                value: "211104"
            },
            {
                city: "盘锦市",
                text: "盘山县",
                value: "211122"
            }],
            211200 : [{
                city: "铁岭市",
                text: "市辖区",
                value: "211201"
            },
            {
                city: "铁岭市",
                text: "银州区",
                value: "211202"
            },
            {
                city: "铁岭市",
                text: "清河区",
                value: "211204"
            },
            {
                city: "铁岭市",
                text: "铁岭县",
                value: "211221"
            },
            {
                city: "铁岭市",
                text: "西丰县",
                value: "211223"
            },
            {
                city: "铁岭市",
                text: "昌图县",
                value: "211224"
            },
            {
                city: "铁岭市",
                text: "调兵山市",
                value: "211281"
            },
            {
                city: "铁岭市",
                text: "开原市",
                value: "211282"
            }],
            211300 : [{
                city: "朝阳市",
                text: "市辖区",
                value: "211301"
            },
            {
                city: "朝阳市",
                text: "双塔区",
                value: "211302"
            },
            {
                city: "朝阳市",
                text: "龙城区",
                value: "211303"
            },
            {
                city: "朝阳市",
                text: "朝阳县",
                value: "211321"
            },
            {
                city: "朝阳市",
                text: "建平县",
                value: "211322"
            },
            {
                city: "朝阳市",
                text: "喀喇沁左翼蒙古族自治县",
                value: "211324"
            },
            {
                city: "朝阳市",
                text: "北票市",
                value: "211381"
            },
            {
                city: "朝阳市",
                text: "凌源市",
                value: "211382"
            }],
            211400 : [{
                city: "葫芦岛市",
                text: "市辖区",
                value: "211401"
            },
            {
                city: "葫芦岛市",
                text: "连山区",
                value: "211402"
            },
            {
                city: "葫芦岛市",
                text: "龙港区",
                value: "211403"
            },
            {
                city: "葫芦岛市",
                text: "南票区",
                value: "211404"
            },
            {
                city: "葫芦岛市",
                text: "绥中县",
                value: "211421"
            },
            {
                city: "葫芦岛市",
                text: "建昌县",
                value: "211422"
            },
            {
                city: "葫芦岛市",
                text: "兴城市",
                value: "211481"
            }],
            220100 : [{
                city: "长春市",
                text: "市辖区",
                value: "220101"
            },
            {
                city: "长春市",
                text: "南关区",
                value: "220102"
            },
            {
                city: "长春市",
                text: "宽城区",
                value: "220103"
            },
            {
                city: "长春市",
                text: "朝阳区",
                value: "220104"
            },
            {
                city: "长春市",
                text: "二道区",
                value: "220105"
            },
            {
                city: "长春市",
                text: "绿园区",
                value: "220106"
            },
            {
                city: "长春市",
                text: "双阳区",
                value: "220112"
            },
            {
                city: "长春市",
                text: "九台区",
                value: "220113"
            },
            {
                city: "长春市",
                text: "农安县",
                value: "220122"
            },
            {
                city: "长春市",
                text: "榆树市",
                value: "220182"
            },
            {
                city: "长春市",
                text: "德惠市",
                value: "220183"
            }],
            220200 : [{
                city: "吉林市",
                text: "市辖区",
                value: "220201"
            },
            {
                city: "吉林市",
                text: "昌邑区",
                value: "220202"
            },
            {
                city: "吉林市",
                text: "龙潭区",
                value: "220203"
            },
            {
                city: "吉林市",
                text: "船营区",
                value: "220204"
            },
            {
                city: "吉林市",
                text: "丰满区",
                value: "220211"
            },
            {
                city: "吉林市",
                text: "永吉县",
                value: "220221"
            },
            {
                city: "吉林市",
                text: "蛟河市",
                value: "220281"
            },
            {
                city: "吉林市",
                text: "桦甸市",
                value: "220282"
            },
            {
                city: "吉林市",
                text: "舒兰市",
                value: "220283"
            },
            {
                city: "吉林市",
                text: "磐石市",
                value: "220284"
            }],
            220300 : [{
                city: "四平市",
                text: "市辖区",
                value: "220301"
            },
            {
                city: "四平市",
                text: "铁西区",
                value: "220302"
            },
            {
                city: "四平市",
                text: "铁东区",
                value: "220303"
            },
            {
                city: "四平市",
                text: "梨树县",
                value: "220322"
            },
            {
                city: "四平市",
                text: "伊通满族自治县",
                value: "220323"
            },
            {
                city: "四平市",
                text: "公主岭市",
                value: "220381"
            },
            {
                city: "四平市",
                text: "双辽市",
                value: "220382"
            }],
            220400 : [{
                city: "辽源市",
                text: "市辖区",
                value: "220401"
            },
            {
                city: "辽源市",
                text: "龙山区",
                value: "220402"
            },
            {
                city: "辽源市",
                text: "西安区",
                value: "220403"
            },
            {
                city: "辽源市",
                text: "东丰县",
                value: "220421"
            },
            {
                city: "辽源市",
                text: "东辽县",
                value: "220422"
            }],
            220500 : [{
                city: "通化市",
                text: "市辖区",
                value: "220501"
            },
            {
                city: "通化市",
                text: "东昌区",
                value: "220502"
            },
            {
                city: "通化市",
                text: "二道江区",
                value: "220503"
            },
            {
                city: "通化市",
                text: "通化县",
                value: "220521"
            },
            {
                city: "通化市",
                text: "辉南县",
                value: "220523"
            },
            {
                city: "通化市",
                text: "柳河县",
                value: "220524"
            },
            {
                city: "通化市",
                text: "梅河口市",
                value: "220581"
            },
            {
                city: "通化市",
                text: "集安市",
                value: "220582"
            }],
            220600 : [{
                city: "白山市",
                text: "市辖区",
                value: "220601"
            },
            {
                city: "白山市",
                text: "浑江区",
                value: "220602"
            },
            {
                city: "白山市",
                text: "江源区",
                value: "220605"
            },
            {
                city: "白山市",
                text: "抚松县",
                value: "220621"
            },
            {
                city: "白山市",
                text: "靖宇县",
                value: "220622"
            },
            {
                city: "白山市",
                text: "长白朝鲜族自治县",
                value: "220623"
            },
            {
                city: "白山市",
                text: "临江市",
                value: "220681"
            }],
            220700 : [{
                city: "松原市",
                text: "市辖区",
                value: "220701"
            },
            {
                city: "松原市",
                text: "宁江区",
                value: "220702"
            },
            {
                city: "松原市",
                text: "前郭尔罗斯蒙古族自治县",
                value: "220721"
            },
            {
                city: "松原市",
                text: "长岭县",
                value: "220722"
            },
            {
                city: "松原市",
                text: "乾安县",
                value: "220723"
            },
            {
                city: "松原市",
                text: "扶余市",
                value: "220781"
            }],
            220800 : [{
                city: "白城市",
                text: "市辖区",
                value: "220801"
            },
            {
                city: "白城市",
                text: "洮北区",
                value: "220802"
            },
            {
                city: "白城市",
                text: "镇赉县",
                value: "220821"
            },
            {
                city: "白城市",
                text: "通榆县",
                value: "220822"
            },
            {
                city: "白城市",
                text: "洮南市",
                value: "220881"
            },
            {
                city: "白城市",
                text: "大安市",
                value: "220882"
            }],
            222400 : [{
                city: "延边朝鲜族自治州",
                text: "延吉市",
                value: "222401"
            },
            {
                city: "延边朝鲜族自治州",
                text: "图们市",
                value: "222402"
            },
            {
                city: "延边朝鲜族自治州",
                text: "敦化市",
                value: "222403"
            },
            {
                city: "延边朝鲜族自治州",
                text: "珲春市",
                value: "222404"
            },
            {
                city: "延边朝鲜族自治州",
                text: "龙井市",
                value: "222405"
            },
            {
                city: "延边朝鲜族自治州",
                text: "和龙市",
                value: "222406"
            },
            {
                city: "延边朝鲜族自治州",
                text: "汪清县",
                value: "222424"
            },
            {
                city: "延边朝鲜族自治州",
                text: "安图县",
                value: "222426"
            }],
            230100 : [{
                city: "哈尔滨市",
                text: "市辖区",
                value: "230101"
            },
            {
                city: "哈尔滨市",
                text: "道里区",
                value: "230102"
            },
            {
                city: "哈尔滨市",
                text: "南岗区",
                value: "230103"
            },
            {
                city: "哈尔滨市",
                text: "道外区",
                value: "230104"
            },
            {
                city: "哈尔滨市",
                text: "平房区",
                value: "230108"
            },
            {
                city: "哈尔滨市",
                text: "松北区",
                value: "230109"
            },
            {
                city: "哈尔滨市",
                text: "香坊区",
                value: "230110"
            },
            {
                city: "哈尔滨市",
                text: "呼兰区",
                value: "230111"
            },
            {
                city: "哈尔滨市",
                text: "阿城区",
                value: "230112"
            },
            {
                city: "哈尔滨市",
                text: "双城区",
                value: "230113"
            },
            {
                city: "哈尔滨市",
                text: "依兰县",
                value: "230123"
            },
            {
                city: "哈尔滨市",
                text: "方正县",
                value: "230124"
            },
            {
                city: "哈尔滨市",
                text: "宾县",
                value: "230125"
            },
            {
                city: "哈尔滨市",
                text: "巴彦县",
                value: "230126"
            },
            {
                city: "哈尔滨市",
                text: "木兰县",
                value: "230127"
            },
            {
                city: "哈尔滨市",
                text: "通河县",
                value: "230128"
            },
            {
                city: "哈尔滨市",
                text: "延寿县",
                value: "230129"
            },
            {
                city: "哈尔滨市",
                text: "尚志市",
                value: "230183"
            },
            {
                city: "哈尔滨市",
                text: "五常市",
                value: "230184"
            }],
            230200 : [{
                city: "齐齐哈尔市",
                text: "市辖区",
                value: "230201"
            },
            {
                city: "齐齐哈尔市",
                text: "龙沙区",
                value: "230202"
            },
            {
                city: "齐齐哈尔市",
                text: "建华区",
                value: "230203"
            },
            {
                city: "齐齐哈尔市",
                text: "铁锋区",
                value: "230204"
            },
            {
                city: "齐齐哈尔市",
                text: "昂昂溪区",
                value: "230205"
            },
            {
                city: "齐齐哈尔市",
                text: "富拉尔基区",
                value: "230206"
            },
            {
                city: "齐齐哈尔市",
                text: "碾子山区",
                value: "230207"
            },
            {
                city: "齐齐哈尔市",
                text: "梅里斯达斡尔族区",
                value: "230208"
            },
            {
                city: "齐齐哈尔市",
                text: "龙江县",
                value: "230221"
            },
            {
                city: "齐齐哈尔市",
                text: "依安县",
                value: "230223"
            },
            {
                city: "齐齐哈尔市",
                text: "泰来县",
                value: "230224"
            },
            {
                city: "齐齐哈尔市",
                text: "甘南县",
                value: "230225"
            },
            {
                city: "齐齐哈尔市",
                text: "富裕县",
                value: "230227"
            },
            {
                city: "齐齐哈尔市",
                text: "克山县",
                value: "230229"
            },
            {
                city: "齐齐哈尔市",
                text: "克东县",
                value: "230230"
            },
            {
                city: "齐齐哈尔市",
                text: "拜泉县",
                value: "230231"
            },
            {
                city: "齐齐哈尔市",
                text: "讷河市",
                value: "230281"
            }],
            230300 : [{
                city: "鸡西市",
                text: "市辖区",
                value: "230301"
            },
            {
                city: "鸡西市",
                text: "鸡冠区",
                value: "230302"
            },
            {
                city: "鸡西市",
                text: "恒山区",
                value: "230303"
            },
            {
                city: "鸡西市",
                text: "滴道区",
                value: "230304"
            },
            {
                city: "鸡西市",
                text: "梨树区",
                value: "230305"
            },
            {
                city: "鸡西市",
                text: "城子河区",
                value: "230306"
            },
            {
                city: "鸡西市",
                text: "麻山区",
                value: "230307"
            },
            {
                city: "鸡西市",
                text: "鸡东县",
                value: "230321"
            },
            {
                city: "鸡西市",
                text: "虎林市",
                value: "230381"
            },
            {
                city: "鸡西市",
                text: "密山市",
                value: "230382"
            }],
            230400 : [{
                city: "鹤岗市",
                text: "市辖区",
                value: "230401"
            },
            {
                city: "鹤岗市",
                text: "向阳区",
                value: "230402"
            },
            {
                city: "鹤岗市",
                text: "工农区",
                value: "230403"
            },
            {
                city: "鹤岗市",
                text: "南山区",
                value: "230404"
            },
            {
                city: "鹤岗市",
                text: "兴安区",
                value: "230405"
            },
            {
                city: "鹤岗市",
                text: "东山区",
                value: "230406"
            },
            {
                city: "鹤岗市",
                text: "兴山区",
                value: "230407"
            },
            {
                city: "鹤岗市",
                text: "萝北县",
                value: "230421"
            },
            {
                city: "鹤岗市",
                text: "绥滨县",
                value: "230422"
            }],
            230500 : [{
                city: "双鸭山市",
                text: "市辖区",
                value: "230501"
            },
            {
                city: "双鸭山市",
                text: "尖山区",
                value: "230502"
            },
            {
                city: "双鸭山市",
                text: "岭东区",
                value: "230503"
            },
            {
                city: "双鸭山市",
                text: "四方台区",
                value: "230505"
            },
            {
                city: "双鸭山市",
                text: "宝山区",
                value: "230506"
            },
            {
                city: "双鸭山市",
                text: "集贤县",
                value: "230521"
            },
            {
                city: "双鸭山市",
                text: "友谊县",
                value: "230522"
            },
            {
                city: "双鸭山市",
                text: "宝清县",
                value: "230523"
            },
            {
                city: "双鸭山市",
                text: "饶河县",
                value: "230524"
            }],
            230600 : [{
                city: "大庆市",
                text: "市辖区",
                value: "230601"
            },
            {
                city: "大庆市",
                text: "萨尔图区",
                value: "230602"
            },
            {
                city: "大庆市",
                text: "龙凤区",
                value: "230603"
            },
            {
                city: "大庆市",
                text: "让胡路区",
                value: "230604"
            },
            {
                city: "大庆市",
                text: "红岗区",
                value: "230605"
            },
            {
                city: "大庆市",
                text: "大同区",
                value: "230606"
            },
            {
                city: "大庆市",
                text: "肇州县",
                value: "230621"
            },
            {
                city: "大庆市",
                text: "肇源县",
                value: "230622"
            },
            {
                city: "大庆市",
                text: "林甸县",
                value: "230623"
            },
            {
                city: "大庆市",
                text: "杜尔伯特蒙古族自治县",
                value: "230624"
            }],
            230700 : [{
                city: "伊春市",
                text: "市辖区",
                value: "230701"
            },
            {
                city: "伊春市",
                text: "伊春区",
                value: "230702"
            },
            {
                city: "伊春市",
                text: "南岔区",
                value: "230703"
            },
            {
                city: "伊春市",
                text: "友好区",
                value: "230704"
            },
            {
                city: "伊春市",
                text: "西林区",
                value: "230705"
            },
            {
                city: "伊春市",
                text: "翠峦区",
                value: "230706"
            },
            {
                city: "伊春市",
                text: "新青区",
                value: "230707"
            },
            {
                city: "伊春市",
                text: "美溪区",
                value: "230708"
            },
            {
                city: "伊春市",
                text: "金山屯区",
                value: "230709"
            },
            {
                city: "伊春市",
                text: "五营区",
                value: "230710"
            },
            {
                city: "伊春市",
                text: "乌马河区",
                value: "230711"
            },
            {
                city: "伊春市",
                text: "汤旺河区",
                value: "230712"
            },
            {
                city: "伊春市",
                text: "带岭区",
                value: "230713"
            },
            {
                city: "伊春市",
                text: "乌伊岭区",
                value: "230714"
            },
            {
                city: "伊春市",
                text: "红星区",
                value: "230715"
            },
            {
                city: "伊春市",
                text: "上甘岭区",
                value: "230716"
            },
            {
                city: "伊春市",
                text: "嘉荫县",
                value: "230722"
            },
            {
                city: "伊春市",
                text: "铁力市",
                value: "230781"
            }],
            230800 : [{
                city: "佳木斯市",
                text: "市辖区",
                value: "230801"
            },
            {
                city: "佳木斯市",
                text: "向阳区",
                value: "230803"
            },
            {
                city: "佳木斯市",
                text: "前进区",
                value: "230804"
            },
            {
                city: "佳木斯市",
                text: "东风区",
                value: "230805"
            },
            {
                city: "佳木斯市",
                text: "郊区",
                value: "230811"
            },
            {
                city: "佳木斯市",
                text: "桦南县",
                value: "230822"
            },
            {
                city: "佳木斯市",
                text: "桦川县",
                value: "230826"
            },
            {
                city: "佳木斯市",
                text: "汤原县",
                value: "230828"
            },
            {
                city: "佳木斯市",
                text: "同江市",
                value: "230881"
            },
            {
                city: "佳木斯市",
                text: "富锦市",
                value: "230882"
            },
            {
                city: "佳木斯市",
                text: "抚远市",
                value: "230883"
            }],
            230900 : [{
                city: "七台河市",
                text: "市辖区",
                value: "230901"
            },
            {
                city: "七台河市",
                text: "新兴区",
                value: "230902"
            },
            {
                city: "七台河市",
                text: "桃山区",
                value: "230903"
            },
            {
                city: "七台河市",
                text: "茄子河区",
                value: "230904"
            },
            {
                city: "七台河市",
                text: "勃利县",
                value: "230921"
            }],
            231000 : [{
                city: "牡丹江市",
                text: "市辖区",
                value: "231001"
            },
            {
                city: "牡丹江市",
                text: "东安区",
                value: "231002"
            },
            {
                city: "牡丹江市",
                text: "阳明区",
                value: "231003"
            },
            {
                city: "牡丹江市",
                text: "爱民区",
                value: "231004"
            },
            {
                city: "牡丹江市",
                text: "西安区",
                value: "231005"
            },
            {
                city: "牡丹江市",
                text: "林口县",
                value: "231025"
            },
            {
                city: "牡丹江市",
                text: "绥芬河市",
                value: "231081"
            },
            {
                city: "牡丹江市",
                text: "海林市",
                value: "231083"
            },
            {
                city: "牡丹江市",
                text: "宁安市",
                value: "231084"
            },
            {
                city: "牡丹江市",
                text: "穆棱市",
                value: "231085"
            },
            {
                city: "牡丹江市",
                text: "东宁市",
                value: "231086"
            }],
            231100 : [{
                city: "黑河市",
                text: "市辖区",
                value: "231101"
            },
            {
                city: "黑河市",
                text: "爱辉区",
                value: "231102"
            },
            {
                city: "黑河市",
                text: "嫩江县",
                value: "231121"
            },
            {
                city: "黑河市",
                text: "逊克县",
                value: "231123"
            },
            {
                city: "黑河市",
                text: "孙吴县",
                value: "231124"
            },
            {
                city: "黑河市",
                text: "北安市",
                value: "231181"
            },
            {
                city: "黑河市",
                text: "五大连池市",
                value: "231182"
            }],
            231200 : [{
                city: "绥化市",
                text: "市辖区",
                value: "231201"
            },
            {
                city: "绥化市",
                text: "北林区",
                value: "231202"
            },
            {
                city: "绥化市",
                text: "望奎县",
                value: "231221"
            },
            {
                city: "绥化市",
                text: "兰西县",
                value: "231222"
            },
            {
                city: "绥化市",
                text: "青冈县",
                value: "231223"
            },
            {
                city: "绥化市",
                text: "庆安县",
                value: "231224"
            },
            {
                city: "绥化市",
                text: "明水县",
                value: "231225"
            },
            {
                city: "绥化市",
                text: "绥棱县",
                value: "231226"
            },
            {
                city: "绥化市",
                text: "安达市",
                value: "231281"
            },
            {
                city: "绥化市",
                text: "肇东市",
                value: "231282"
            },
            {
                city: "绥化市",
                text: "海伦市",
                value: "231283"
            }],
            232700 : [{
                city: "大兴安岭地区",
                text: "呼玛县",
                value: "232721"
            },
            {
                city: "大兴安岭地区",
                text: "塔河县",
                value: "232722"
            },
            {
                city: "大兴安岭地区",
                text: "漠河县",
                value: "232723"
            }],
            310100 : [{
                city: "市辖区",
                text: "黄浦区",
                value: "310101"
            },
            {
                city: "市辖区",
                text: "徐汇区",
                value: "310104"
            },
            {
                city: "市辖区",
                text: "长宁区",
                value: "310105"
            },
            {
                city: "市辖区",
                text: "静安区",
                value: "310106"
            },
            {
                city: "市辖区",
                text: "普陀区",
                value: "310107"
            },
            {
                city: "市辖区",
                text: "虹口区",
                value: "310109"
            },
            {
                city: "市辖区",
                text: "杨浦区",
                value: "310110"
            },
            {
                city: "市辖区",
                text: "闵行区",
                value: "310112"
            },
            {
                city: "市辖区",
                text: "宝山区",
                value: "310113"
            },
            {
                city: "市辖区",
                text: "嘉定区",
                value: "310114"
            },
            {
                city: "市辖区",
                text: "浦东新区",
                value: "310115"
            },
            {
                city: "市辖区",
                text: "金山区",
                value: "310116"
            },
            {
                city: "市辖区",
                text: "松江区",
                value: "310117"
            },
            {
                city: "市辖区",
                text: "青浦区",
                value: "310118"
            },
            {
                city: "市辖区",
                text: "奉贤区",
                value: "310120"
            },
            {
                city: "市辖区",
                text: "崇明区",
                value: "310151"
            }],
            320100 : [{
                city: "南京市",
                text: "市辖区",
                value: "320101"
            },
            {
                city: "南京市",
                text: "玄武区",
                value: "320102"
            },
            {
                city: "南京市",
                text: "秦淮区",
                value: "320104"
            },
            {
                city: "南京市",
                text: "建邺区",
                value: "320105"
            },
            {
                city: "南京市",
                text: "鼓楼区",
                value: "320106"
            },
            {
                city: "南京市",
                text: "浦口区",
                value: "320111"
            },
            {
                city: "南京市",
                text: "栖霞区",
                value: "320113"
            },
            {
                city: "南京市",
                text: "雨花台区",
                value: "320114"
            },
            {
                city: "南京市",
                text: "江宁区",
                value: "320115"
            },
            {
                city: "南京市",
                text: "六合区",
                value: "320116"
            },
            {
                city: "南京市",
                text: "溧水区",
                value: "320117"
            },
            {
                city: "南京市",
                text: "高淳区",
                value: "320118"
            }],
            320200 : [{
                city: "无锡市",
                text: "市辖区",
                value: "320201"
            },
            {
                city: "无锡市",
                text: "锡山区",
                value: "320205"
            },
            {
                city: "无锡市",
                text: "惠山区",
                value: "320206"
            },
            {
                city: "无锡市",
                text: "滨湖区",
                value: "320211"
            },
            {
                city: "无锡市",
                text: "梁溪区",
                value: "320213"
            },
            {
                city: "无锡市",
                text: "新吴区",
                value: "320214"
            },
            {
                city: "无锡市",
                text: "江阴市",
                value: "320281"
            },
            {
                city: "无锡市",
                text: "宜兴市",
                value: "320282"
            }],
            320300 : [{
                city: "徐州市",
                text: "市辖区",
                value: "320301"
            },
            {
                city: "徐州市",
                text: "鼓楼区",
                value: "320302"
            },
            {
                city: "徐州市",
                text: "云龙区",
                value: "320303"
            },
            {
                city: "徐州市",
                text: "贾汪区",
                value: "320305"
            },
            {
                city: "徐州市",
                text: "泉山区",
                value: "320311"
            },
            {
                city: "徐州市",
                text: "铜山区",
                value: "320312"
            },
            {
                city: "徐州市",
                text: "丰县",
                value: "320321"
            },
            {
                city: "徐州市",
                text: "沛县",
                value: "320322"
            },
            {
                city: "徐州市",
                text: "睢宁县",
                value: "320324"
            },
            {
                city: "徐州市",
                text: "新沂市",
                value: "320381"
            },
            {
                city: "徐州市",
                text: "邳州市",
                value: "320382"
            }],
            320400 : [{
                city: "常州市",
                text: "市辖区",
                value: "320401"
            },
            {
                city: "常州市",
                text: "天宁区",
                value: "320402"
            },
            {
                city: "常州市",
                text: "钟楼区",
                value: "320404"
            },
            {
                city: "常州市",
                text: "新北区",
                value: "320411"
            },
            {
                city: "常州市",
                text: "武进区",
                value: "320412"
            },
            {
                city: "常州市",
                text: "金坛区",
                value: "320413"
            },
            {
                city: "常州市",
                text: "溧阳市",
                value: "320481"
            }],
            320500 : [{
                city: "苏州市",
                text: "市辖区",
                value: "320501"
            },
            {
                city: "苏州市",
                text: "虎丘区",
                value: "320505"
            },
            {
                city: "苏州市",
                text: "吴中区",
                value: "320506"
            },
            {
                city: "苏州市",
                text: "相城区",
                value: "320507"
            },
            {
                city: "苏州市",
                text: "姑苏区",
                value: "320508"
            },
            {
                city: "苏州市",
                text: "吴江区",
                value: "320509"
            },
            {
                city: "苏州市",
                text: "常熟市",
                value: "320581"
            },
            {
                city: "苏州市",
                text: "张家港市",
                value: "320582"
            },
            {
                city: "苏州市",
                text: "昆山市",
                value: "320583"
            },
            {
                city: "苏州市",
                text: "太仓市",
                value: "320585"
            }],
            320600 : [{
                city: "南通市",
                text: "市辖区",
                value: "320601"
            },
            {
                city: "南通市",
                text: "崇川区",
                value: "320602"
            },
            {
                city: "南通市",
                text: "港闸区",
                value: "320611"
            },
            {
                city: "南通市",
                text: "通州区",
                value: "320612"
            },
            {
                city: "南通市",
                text: "海安县",
                value: "320621"
            },
            {
                city: "南通市",
                text: "如东县",
                value: "320623"
            },
            {
                city: "南通市",
                text: "启东市",
                value: "320681"
            },
            {
                city: "南通市",
                text: "如皋市",
                value: "320682"
            },
            {
                city: "南通市",
                text: "海门市",
                value: "320684"
            }],
            320700 : [{
                city: "连云港市",
                text: "市辖区",
                value: "320701"
            },
            {
                city: "连云港市",
                text: "连云区",
                value: "320703"
            },
            {
                city: "连云港市",
                text: "海州区",
                value: "320706"
            },
            {
                city: "连云港市",
                text: "赣榆区",
                value: "320707"
            },
            {
                city: "连云港市",
                text: "东海县",
                value: "320722"
            },
            {
                city: "连云港市",
                text: "灌云县",
                value: "320723"
            },
            {
                city: "连云港市",
                text: "灌南县",
                value: "320724"
            }],
            320800 : [{
                city: "淮安市",
                text: "市辖区",
                value: "320801"
            },
            {
                city: "淮安市",
                text: "淮安区",
                value: "320803"
            },
            {
                city: "淮安市",
                text: "淮阴区",
                value: "320804"
            },
            {
                city: "淮安市",
                text: "清江浦区",
                value: "320812"
            },
            {
                city: "淮安市",
                text: "洪泽区",
                value: "320813"
            },
            {
                city: "淮安市",
                text: "涟水县",
                value: "320826"
            },
            {
                city: "淮安市",
                text: "盱眙县",
                value: "320830"
            },
            {
                city: "淮安市",
                text: "金湖县",
                value: "320831"
            }],
            320900 : [{
                city: "盐城市",
                text: "市辖区",
                value: "320901"
            },
            {
                city: "盐城市",
                text: "亭湖区",
                value: "320902"
            },
            {
                city: "盐城市",
                text: "盐都区",
                value: "320903"
            },
            {
                city: "盐城市",
                text: "大丰区",
                value: "320904"
            },
            {
                city: "盐城市",
                text: "响水县",
                value: "320921"
            },
            {
                city: "盐城市",
                text: "滨海县",
                value: "320922"
            },
            {
                city: "盐城市",
                text: "阜宁县",
                value: "320923"
            },
            {
                city: "盐城市",
                text: "射阳县",
                value: "320924"
            },
            {
                city: "盐城市",
                text: "建湖县",
                value: "320925"
            },
            {
                city: "盐城市",
                text: "东台市",
                value: "320981"
            }],
            321000 : [{
                city: "扬州市",
                text: "市辖区",
                value: "321001"
            },
            {
                city: "扬州市",
                text: "广陵区",
                value: "321002"
            },
            {
                city: "扬州市",
                text: "邗江区",
                value: "321003"
            },
            {
                city: "扬州市",
                text: "江都区",
                value: "321012"
            },
            {
                city: "扬州市",
                text: "宝应县",
                value: "321023"
            },
            {
                city: "扬州市",
                text: "仪征市",
                value: "321081"
            },
            {
                city: "扬州市",
                text: "高邮市",
                value: "321084"
            }],
            321100 : [{
                city: "镇江市",
                text: "市辖区",
                value: "321101"
            },
            {
                city: "镇江市",
                text: "京口区",
                value: "321102"
            },
            {
                city: "镇江市",
                text: "润州区",
                value: "321111"
            },
            {
                city: "镇江市",
                text: "丹徒区",
                value: "321112"
            },
            {
                city: "镇江市",
                text: "丹阳市",
                value: "321181"
            },
            {
                city: "镇江市",
                text: "扬中市",
                value: "321182"
            },
            {
                city: "镇江市",
                text: "句容市",
                value: "321183"
            }],
            321200 : [{
                city: "泰州市",
                text: "市辖区",
                value: "321201"
            },
            {
                city: "泰州市",
                text: "海陵区",
                value: "321202"
            },
            {
                city: "泰州市",
                text: "高港区",
                value: "321203"
            },
            {
                city: "泰州市",
                text: "姜堰区",
                value: "321204"
            },
            {
                city: "泰州市",
                text: "兴化市",
                value: "321281"
            },
            {
                city: "泰州市",
                text: "靖江市",
                value: "321282"
            },
            {
                city: "泰州市",
                text: "泰兴市",
                value: "321283"
            }],
            321300 : [{
                city: "宿迁市",
                text: "市辖区",
                value: "321301"
            },
            {
                city: "宿迁市",
                text: "宿城区",
                value: "321302"
            },
            {
                city: "宿迁市",
                text: "宿豫区",
                value: "321311"
            },
            {
                city: "宿迁市",
                text: "沭阳县",
                value: "321322"
            },
            {
                city: "宿迁市",
                text: "泗阳县",
                value: "321323"
            },
            {
                city: "宿迁市",
                text: "泗洪县",
                value: "321324"
            }],
            330100 : [{
                city: "杭州市",
                text: "市辖区",
                value: "330101"
            },
            {
                city: "杭州市",
                text: "上城区",
                value: "330102"
            },
            {
                city: "杭州市",
                text: "下城区",
                value: "330103"
            },
            {
                city: "杭州市",
                text: "江干区",
                value: "330104"
            },
            {
                city: "杭州市",
                text: "拱墅区",
                value: "330105"
            },
            {
                city: "杭州市",
                text: "西湖区",
                value: "330106"
            },
            {
                city: "杭州市",
                text: "滨江区",
                value: "330108"
            },
            {
                city: "杭州市",
                text: "萧山区",
                value: "330109"
            },
            {
                city: "杭州市",
                text: "余杭区",
                value: "330110"
            },
            {
                city: "杭州市",
                text: "富阳区",
                value: "330111"
            },
            {
                city: "杭州市",
                text: "桐庐县",
                value: "330122"
            },
            {
                city: "杭州市",
                text: "淳安县",
                value: "330127"
            },
            {
                city: "杭州市",
                text: "建德市",
                value: "330182"
            },
            {
                city: "杭州市",
                text: "临安市",
                value: "330185"
            }],
            330200 : [{
                city: "宁波市",
                text: "市辖区",
                value: "330201"
            },
            {
                city: "宁波市",
                text: "海曙区",
                value: "330203"
            },
            {
                city: "宁波市",
                text: "江东区",
                value: "330204"
            },
            {
                city: "宁波市",
                text: "江北区",
                value: "330205"
            },
            {
                city: "宁波市",
                text: "北仑区",
                value: "330206"
            },
            {
                city: "宁波市",
                text: "镇海区",
                value: "330211"
            },
            {
                city: "宁波市",
                text: "鄞州区",
                value: "330212"
            },
            {
                city: "宁波市",
                text: "象山县",
                value: "330225"
            },
            {
                city: "宁波市",
                text: "宁海县",
                value: "330226"
            },
            {
                city: "宁波市",
                text: "余姚市",
                value: "330281"
            },
            {
                city: "宁波市",
                text: "慈溪市",
                value: "330282"
            },
            {
                city: "宁波市",
                text: "奉化市",
                value: "330283"
            }],
            330300 : [{
                city: "温州市",
                text: "市辖区",
                value: "330301"
            },
            {
                city: "温州市",
                text: "鹿城区",
                value: "330302"
            },
            {
                city: "温州市",
                text: "龙湾区",
                value: "330303"
            },
            {
                city: "温州市",
                text: "瓯海区",
                value: "330304"
            },
            {
                city: "温州市",
                text: "洞头区",
                value: "330305"
            },
            {
                city: "温州市",
                text: "永嘉县",
                value: "330324"
            },
            {
                city: "温州市",
                text: "平阳县",
                value: "330326"
            },
            {
                city: "温州市",
                text: "苍南县",
                value: "330327"
            },
            {
                city: "温州市",
                text: "文成县",
                value: "330328"
            },
            {
                city: "温州市",
                text: "泰顺县",
                value: "330329"
            },
            {
                city: "温州市",
                text: "瑞安市",
                value: "330381"
            },
            {
                city: "温州市",
                text: "乐清市",
                value: "330382"
            }],
            330400 : [{
                city: "嘉兴市",
                text: "市辖区",
                value: "330401"
            },
            {
                city: "嘉兴市",
                text: "南湖区",
                value: "330402"
            },
            {
                city: "嘉兴市",
                text: "秀洲区",
                value: "330411"
            },
            {
                city: "嘉兴市",
                text: "嘉善县",
                value: "330421"
            },
            {
                city: "嘉兴市",
                text: "海盐县",
                value: "330424"
            },
            {
                city: "嘉兴市",
                text: "海宁市",
                value: "330481"
            },
            {
                city: "嘉兴市",
                text: "平湖市",
                value: "330482"
            },
            {
                city: "嘉兴市",
                text: "桐乡市",
                value: "330483"
            }],
            330500 : [{
                city: "湖州市",
                text: "市辖区",
                value: "330501"
            },
            {
                city: "湖州市",
                text: "吴兴区",
                value: "330502"
            },
            {
                city: "湖州市",
                text: "南浔区",
                value: "330503"
            },
            {
                city: "湖州市",
                text: "德清县",
                value: "330521"
            },
            {
                city: "湖州市",
                text: "长兴县",
                value: "330522"
            },
            {
                city: "湖州市",
                text: "安吉县",
                value: "330523"
            }],
            330600 : [{
                city: "绍兴市",
                text: "市辖区",
                value: "330601"
            },
            {
                city: "绍兴市",
                text: "越城区",
                value: "330602"
            },
            {
                city: "绍兴市",
                text: "柯桥区",
                value: "330603"
            },
            {
                city: "绍兴市",
                text: "上虞区",
                value: "330604"
            },
            {
                city: "绍兴市",
                text: "新昌县",
                value: "330624"
            },
            {
                city: "绍兴市",
                text: "诸暨市",
                value: "330681"
            },
            {
                city: "绍兴市",
                text: "嵊州市",
                value: "330683"
            }],
            330700 : [{
                city: "金华市",
                text: "市辖区",
                value: "330701"
            },
            {
                city: "金华市",
                text: "婺城区",
                value: "330702"
            },
            {
                city: "金华市",
                text: "金东区",
                value: "330703"
            },
            {
                city: "金华市",
                text: "武义县",
                value: "330723"
            },
            {
                city: "金华市",
                text: "浦江县",
                value: "330726"
            },
            {
                city: "金华市",
                text: "磐安县",
                value: "330727"
            },
            {
                city: "金华市",
                text: "兰溪市",
                value: "330781"
            },
            {
                city: "金华市",
                text: "义乌市",
                value: "330782"
            },
            {
                city: "金华市",
                text: "东阳市",
                value: "330783"
            },
            {
                city: "金华市",
                text: "永康市",
                value: "330784"
            }],
            330800 : [{
                city: "衢州市",
                text: "市辖区",
                value: "330801"
            },
            {
                city: "衢州市",
                text: "柯城区",
                value: "330802"
            },
            {
                city: "衢州市",
                text: "衢江区",
                value: "330803"
            },
            {
                city: "衢州市",
                text: "常山县",
                value: "330822"
            },
            {
                city: "衢州市",
                text: "开化县",
                value: "330824"
            },
            {
                city: "衢州市",
                text: "龙游县",
                value: "330825"
            },
            {
                city: "衢州市",
                text: "江山市",
                value: "330881"
            }],
            330900 : [{
                city: "舟山市",
                text: "市辖区",
                value: "330901"
            },
            {
                city: "舟山市",
                text: "定海区",
                value: "330902"
            },
            {
                city: "舟山市",
                text: "普陀区",
                value: "330903"
            },
            {
                city: "舟山市",
                text: "岱山县",
                value: "330921"
            },
            {
                city: "舟山市",
                text: "嵊泗县",
                value: "330922"
            }],
            331000 : [{
                city: "台州市",
                text: "市辖区",
                value: "331001"
            },
            {
                city: "台州市",
                text: "椒江区",
                value: "331002"
            },
            {
                city: "台州市",
                text: "黄岩区",
                value: "331003"
            },
            {
                city: "台州市",
                text: "路桥区",
                value: "331004"
            },
            {
                city: "台州市",
                text: "玉环县",
                value: "331021"
            },
            {
                city: "台州市",
                text: "三门县",
                value: "331022"
            },
            {
                city: "台州市",
                text: "天台县",
                value: "331023"
            },
            {
                city: "台州市",
                text: "仙居县",
                value: "331024"
            },
            {
                city: "台州市",
                text: "温岭市",
                value: "331081"
            },
            {
                city: "台州市",
                text: "临海市",
                value: "331082"
            }],
            331100 : [{
                city: "丽水市",
                text: "市辖区",
                value: "331101"
            },
            {
                city: "丽水市",
                text: "莲都区",
                value: "331102"
            },
            {
                city: "丽水市",
                text: "青田县",
                value: "331121"
            },
            {
                city: "丽水市",
                text: "缙云县",
                value: "331122"
            },
            {
                city: "丽水市",
                text: "遂昌县",
                value: "331123"
            },
            {
                city: "丽水市",
                text: "松阳县",
                value: "331124"
            },
            {
                city: "丽水市",
                text: "云和县",
                value: "331125"
            },
            {
                city: "丽水市",
                text: "庆元县",
                value: "331126"
            },
            {
                city: "丽水市",
                text: "景宁畲族自治县",
                value: "331127"
            },
            {
                city: "丽水市",
                text: "龙泉市",
                value: "331181"
            }],
            340100 : [{
                city: "合肥市",
                text: "市辖区",
                value: "340101"
            },
            {
                city: "合肥市",
                text: "瑶海区",
                value: "340102"
            },
            {
                city: "合肥市",
                text: "庐阳区",
                value: "340103"
            },
            {
                city: "合肥市",
                text: "蜀山区",
                value: "340104"
            },
            {
                city: "合肥市",
                text: "包河区",
                value: "340111"
            },
            {
                city: "合肥市",
                text: "长丰县",
                value: "340121"
            },
            {
                city: "合肥市",
                text: "肥东县",
                value: "340122"
            },
            {
                city: "合肥市",
                text: "肥西县",
                value: "340123"
            },
            {
                city: "合肥市",
                text: "庐江县",
                value: "340124"
            },
            {
                city: "合肥市",
                text: "巢湖市",
                value: "340181"
            }],
            340200 : [{
                city: "芜湖市",
                text: "市辖区",
                value: "340201"
            },
            {
                city: "芜湖市",
                text: "镜湖区",
                value: "340202"
            },
            {
                city: "芜湖市",
                text: "弋江区",
                value: "340203"
            },
            {
                city: "芜湖市",
                text: "鸠江区",
                value: "340207"
            },
            {
                city: "芜湖市",
                text: "三山区",
                value: "340208"
            },
            {
                city: "芜湖市",
                text: "芜湖县",
                value: "340221"
            },
            {
                city: "芜湖市",
                text: "繁昌县",
                value: "340222"
            },
            {
                city: "芜湖市",
                text: "南陵县",
                value: "340223"
            },
            {
                city: "芜湖市",
                text: "无为县",
                value: "340225"
            }],
            340300 : [{
                city: "蚌埠市",
                text: "市辖区",
                value: "340301"
            },
            {
                city: "蚌埠市",
                text: "龙子湖区",
                value: "340302"
            },
            {
                city: "蚌埠市",
                text: "蚌山区",
                value: "340303"
            },
            {
                city: "蚌埠市",
                text: "禹会区",
                value: "340304"
            },
            {
                city: "蚌埠市",
                text: "淮上区",
                value: "340311"
            },
            {
                city: "蚌埠市",
                text: "怀远县",
                value: "340321"
            },
            {
                city: "蚌埠市",
                text: "五河县",
                value: "340322"
            },
            {
                city: "蚌埠市",
                text: "固镇县",
                value: "340323"
            }],
            340400 : [{
                city: "淮南市",
                text: "市辖区",
                value: "340401"
            },
            {
                city: "淮南市",
                text: "大通区",
                value: "340402"
            },
            {
                city: "淮南市",
                text: "田家庵区",
                value: "340403"
            },
            {
                city: "淮南市",
                text: "谢家集区",
                value: "340404"
            },
            {
                city: "淮南市",
                text: "八公山区",
                value: "340405"
            },
            {
                city: "淮南市",
                text: "潘集区",
                value: "340406"
            },
            {
                city: "淮南市",
                text: "凤台县",
                value: "340421"
            },
            {
                city: "淮南市",
                text: "寿县",
                value: "340422"
            }],
            340500 : [{
                city: "马鞍山市",
                text: "市辖区",
                value: "340501"
            },
            {
                city: "马鞍山市",
                text: "花山区",
                value: "340503"
            },
            {
                city: "马鞍山市",
                text: "雨山区",
                value: "340504"
            },
            {
                city: "马鞍山市",
                text: "博望区",
                value: "340506"
            },
            {
                city: "马鞍山市",
                text: "当涂县",
                value: "340521"
            },
            {
                city: "马鞍山市",
                text: "含山县",
                value: "340522"
            },
            {
                city: "马鞍山市",
                text: "和县",
                value: "340523"
            }],
            340600 : [{
                city: "淮北市",
                text: "市辖区",
                value: "340601"
            },
            {
                city: "淮北市",
                text: "杜集区",
                value: "340602"
            },
            {
                city: "淮北市",
                text: "相山区",
                value: "340603"
            },
            {
                city: "淮北市",
                text: "烈山区",
                value: "340604"
            },
            {
                city: "淮北市",
                text: "濉溪县",
                value: "340621"
            }],
            340700 : [{
                city: "铜陵市",
                text: "市辖区",
                value: "340701"
            },
            {
                city: "铜陵市",
                text: "铜官区",
                value: "340705"
            },
            {
                city: "铜陵市",
                text: "义安区",
                value: "340706"
            },
            {
                city: "铜陵市",
                text: "郊区",
                value: "340711"
            },
            {
                city: "铜陵市",
                text: "枞阳县",
                value: "340722"
            }],
            340800 : [{
                city: "安庆市",
                text: "市辖区",
                value: "340801"
            },
            {
                city: "安庆市",
                text: "迎江区",
                value: "340802"
            },
            {
                city: "安庆市",
                text: "大观区",
                value: "340803"
            },
            {
                city: "安庆市",
                text: "宜秀区",
                value: "340811"
            },
            {
                city: "安庆市",
                text: "怀宁县",
                value: "340822"
            },
            {
                city: "安庆市",
                text: "潜山县",
                value: "340824"
            },
            {
                city: "安庆市",
                text: "太湖县",
                value: "340825"
            },
            {
                city: "安庆市",
                text: "宿松县",
                value: "340826"
            },
            {
                city: "安庆市",
                text: "望江县",
                value: "340827"
            },
            {
                city: "安庆市",
                text: "岳西县",
                value: "340828"
            },
            {
                city: "安庆市",
                text: "桐城市",
                value: "340881"
            }],
            341000 : [{
                city: "黄山市",
                text: "市辖区",
                value: "341001"
            },
            {
                city: "黄山市",
                text: "屯溪区",
                value: "341002"
            },
            {
                city: "黄山市",
                text: "黄山区",
                value: "341003"
            },
            {
                city: "黄山市",
                text: "徽州区",
                value: "341004"
            },
            {
                city: "黄山市",
                text: "歙县",
                value: "341021"
            },
            {
                city: "黄山市",
                text: "休宁县",
                value: "341022"
            },
            {
                city: "黄山市",
                text: "黟县",
                value: "341023"
            },
            {
                city: "黄山市",
                text: "祁门县",
                value: "341024"
            }],
            341100 : [{
                city: "滁州市",
                text: "市辖区",
                value: "341101"
            },
            {
                city: "滁州市",
                text: "琅琊区",
                value: "341102"
            },
            {
                city: "滁州市",
                text: "南谯区",
                value: "341103"
            },
            {
                city: "滁州市",
                text: "来安县",
                value: "341122"
            },
            {
                city: "滁州市",
                text: "全椒县",
                value: "341124"
            },
            {
                city: "滁州市",
                text: "定远县",
                value: "341125"
            },
            {
                city: "滁州市",
                text: "凤阳县",
                value: "341126"
            },
            {
                city: "滁州市",
                text: "天长市",
                value: "341181"
            },
            {
                city: "滁州市",
                text: "明光市",
                value: "341182"
            }],
            341200 : [{
                city: "阜阳市",
                text: "市辖区",
                value: "341201"
            },
            {
                city: "阜阳市",
                text: "颍州区",
                value: "341202"
            },
            {
                city: "阜阳市",
                text: "颍东区",
                value: "341203"
            },
            {
                city: "阜阳市",
                text: "颍泉区",
                value: "341204"
            },
            {
                city: "阜阳市",
                text: "临泉县",
                value: "341221"
            },
            {
                city: "阜阳市",
                text: "太和县",
                value: "341222"
            },
            {
                city: "阜阳市",
                text: "阜南县",
                value: "341225"
            },
            {
                city: "阜阳市",
                text: "颍上县",
                value: "341226"
            },
            {
                city: "阜阳市",
                text: "界首市",
                value: "341282"
            }],
            341300 : [{
                city: "宿州市",
                text: "市辖区",
                value: "341301"
            },
            {
                city: "宿州市",
                text: "埇桥区",
                value: "341302"
            },
            {
                city: "宿州市",
                text: "砀山县",
                value: "341321"
            },
            {
                city: "宿州市",
                text: "萧县",
                value: "341322"
            },
            {
                city: "宿州市",
                text: "灵璧县",
                value: "341323"
            },
            {
                city: "宿州市",
                text: "泗县",
                value: "341324"
            }],
            341500 : [{
                city: "六安市",
                text: "市辖区",
                value: "341501"
            },
            {
                city: "六安市",
                text: "金安区",
                value: "341502"
            },
            {
                city: "六安市",
                text: "裕安区",
                value: "341503"
            },
            {
                city: "六安市",
                text: "叶集区",
                value: "341504"
            },
            {
                city: "六安市",
                text: "霍邱县",
                value: "341522"
            },
            {
                city: "六安市",
                text: "舒城县",
                value: "341523"
            },
            {
                city: "六安市",
                text: "金寨县",
                value: "341524"
            },
            {
                city: "六安市",
                text: "霍山县",
                value: "341525"
            }],
            341600 : [{
                city: "亳州市",
                text: "市辖区",
                value: "341601"
            },
            {
                city: "亳州市",
                text: "谯城区",
                value: "341602"
            },
            {
                city: "亳州市",
                text: "涡阳县",
                value: "341621"
            },
            {
                city: "亳州市",
                text: "蒙城县",
                value: "341622"
            },
            {
                city: "亳州市",
                text: "利辛县",
                value: "341623"
            }],
            341700 : [{
                city: "池州市",
                text: "市辖区",
                value: "341701"
            },
            {
                city: "池州市",
                text: "贵池区",
                value: "341702"
            },
            {
                city: "池州市",
                text: "东至县",
                value: "341721"
            },
            {
                city: "池州市",
                text: "石台县",
                value: "341722"
            },
            {
                city: "池州市",
                text: "青阳县",
                value: "341723"
            }],
            341800 : [{
                city: "宣城市",
                text: "市辖区",
                value: "341801"
            },
            {
                city: "宣城市",
                text: "宣州区",
                value: "341802"
            },
            {
                city: "宣城市",
                text: "郎溪县",
                value: "341821"
            },
            {
                city: "宣城市",
                text: "广德县",
                value: "341822"
            },
            {
                city: "宣城市",
                text: "泾县",
                value: "341823"
            },
            {
                city: "宣城市",
                text: "绩溪县",
                value: "341824"
            },
            {
                city: "宣城市",
                text: "旌德县",
                value: "341825"
            },
            {
                city: "宣城市",
                text: "宁国市",
                value: "341881"
            }],
            350100 : [{
                city: "福州市",
                text: "市辖区",
                value: "350101"
            },
            {
                city: "福州市",
                text: "鼓楼区",
                value: "350102"
            },
            {
                city: "福州市",
                text: "台江区",
                value: "350103"
            },
            {
                city: "福州市",
                text: "仓山区",
                value: "350104"
            },
            {
                city: "福州市",
                text: "马尾区",
                value: "350105"
            },
            {
                city: "福州市",
                text: "晋安区",
                value: "350111"
            },
            {
                city: "福州市",
                text: "闽侯县",
                value: "350121"
            },
            {
                city: "福州市",
                text: "连江县",
                value: "350122"
            },
            {
                city: "福州市",
                text: "罗源县",
                value: "350123"
            },
            {
                city: "福州市",
                text: "闽清县",
                value: "350124"
            },
            {
                city: "福州市",
                text: "永泰县",
                value: "350125"
            },
            {
                city: "福州市",
                text: "平潭县",
                value: "350128"
            },
            {
                city: "福州市",
                text: "福清市",
                value: "350181"
            },
            {
                city: "福州市",
                text: "长乐市",
                value: "350182"
            }],
            350200 : [{
                city: "厦门市",
                text: "市辖区",
                value: "350201"
            },
            {
                city: "厦门市",
                text: "思明区",
                value: "350203"
            },
            {
                city: "厦门市",
                text: "海沧区",
                value: "350205"
            },
            {
                city: "厦门市",
                text: "湖里区",
                value: "350206"
            },
            {
                city: "厦门市",
                text: "集美区",
                value: "350211"
            },
            {
                city: "厦门市",
                text: "同安区",
                value: "350212"
            },
            {
                city: "厦门市",
                text: "翔安区",
                value: "350213"
            }],
            350300 : [{
                city: "莆田市",
                text: "市辖区",
                value: "350301"
            },
            {
                city: "莆田市",
                text: "城厢区",
                value: "350302"
            },
            {
                city: "莆田市",
                text: "涵江区",
                value: "350303"
            },
            {
                city: "莆田市",
                text: "荔城区",
                value: "350304"
            },
            {
                city: "莆田市",
                text: "秀屿区",
                value: "350305"
            },
            {
                city: "莆田市",
                text: "仙游县",
                value: "350322"
            }],
            350400 : [{
                city: "三明市",
                text: "市辖区",
                value: "350401"
            },
            {
                city: "三明市",
                text: "梅列区",
                value: "350402"
            },
            {
                city: "三明市",
                text: "三元区",
                value: "350403"
            },
            {
                city: "三明市",
                text: "明溪县",
                value: "350421"
            },
            {
                city: "三明市",
                text: "清流县",
                value: "350423"
            },
            {
                city: "三明市",
                text: "宁化县",
                value: "350424"
            },
            {
                city: "三明市",
                text: "大田县",
                value: "350425"
            },
            {
                city: "三明市",
                text: "尤溪县",
                value: "350426"
            },
            {
                city: "三明市",
                text: "沙县",
                value: "350427"
            },
            {
                city: "三明市",
                text: "将乐县",
                value: "350428"
            },
            {
                city: "三明市",
                text: "泰宁县",
                value: "350429"
            },
            {
                city: "三明市",
                text: "建宁县",
                value: "350430"
            },
            {
                city: "三明市",
                text: "永安市",
                value: "350481"
            }],
            350500 : [{
                city: "泉州市",
                text: "市辖区",
                value: "350501"
            },
            {
                city: "泉州市",
                text: "鲤城区",
                value: "350502"
            },
            {
                city: "泉州市",
                text: "丰泽区",
                value: "350503"
            },
            {
                city: "泉州市",
                text: "洛江区",
                value: "350504"
            },
            {
                city: "泉州市",
                text: "泉港区",
                value: "350505"
            },
            {
                city: "泉州市",
                text: "惠安县",
                value: "350521"
            },
            {
                city: "泉州市",
                text: "安溪县",
                value: "350524"
            },
            {
                city: "泉州市",
                text: "永春县",
                value: "350525"
            },
            {
                city: "泉州市",
                text: "德化县",
                value: "350526"
            },
            {
                city: "泉州市",
                text: "金门县",
                value: "350527"
            },
            {
                city: "泉州市",
                text: "石狮市",
                value: "350581"
            },
            {
                city: "泉州市",
                text: "晋江市",
                value: "350582"
            },
            {
                city: "泉州市",
                text: "南安市",
                value: "350583"
            }],
            350600 : [{
                city: "漳州市",
                text: "市辖区",
                value: "350601"
            },
            {
                city: "漳州市",
                text: "芗城区",
                value: "350602"
            },
            {
                city: "漳州市",
                text: "龙文区",
                value: "350603"
            },
            {
                city: "漳州市",
                text: "云霄县",
                value: "350622"
            },
            {
                city: "漳州市",
                text: "漳浦县",
                value: "350623"
            },
            {
                city: "漳州市",
                text: "诏安县",
                value: "350624"
            },
            {
                city: "漳州市",
                text: "长泰县",
                value: "350625"
            },
            {
                city: "漳州市",
                text: "东山县",
                value: "350626"
            },
            {
                city: "漳州市",
                text: "南靖县",
                value: "350627"
            },
            {
                city: "漳州市",
                text: "平和县",
                value: "350628"
            },
            {
                city: "漳州市",
                text: "华安县",
                value: "350629"
            },
            {
                city: "漳州市",
                text: "龙海市",
                value: "350681"
            }],
            350700 : [{
                city: "南平市",
                text: "市辖区",
                value: "350701"
            },
            {
                city: "南平市",
                text: "延平区",
                value: "350702"
            },
            {
                city: "南平市",
                text: "建阳区",
                value: "350703"
            },
            {
                city: "南平市",
                text: "顺昌县",
                value: "350721"
            },
            {
                city: "南平市",
                text: "浦城县",
                value: "350722"
            },
            {
                city: "南平市",
                text: "光泽县",
                value: "350723"
            },
            {
                city: "南平市",
                text: "松溪县",
                value: "350724"
            },
            {
                city: "南平市",
                text: "政和县",
                value: "350725"
            },
            {
                city: "南平市",
                text: "邵武市",
                value: "350781"
            },
            {
                city: "南平市",
                text: "武夷山市",
                value: "350782"
            },
            {
                city: "南平市",
                text: "建瓯市",
                value: "350783"
            }],
            350800 : [{
                city: "龙岩市",
                text: "市辖区",
                value: "350801"
            },
            {
                city: "龙岩市",
                text: "新罗区",
                value: "350802"
            },
            {
                city: "龙岩市",
                text: "永定区",
                value: "350803"
            },
            {
                city: "龙岩市",
                text: "长汀县",
                value: "350821"
            },
            {
                city: "龙岩市",
                text: "上杭县",
                value: "350823"
            },
            {
                city: "龙岩市",
                text: "武平县",
                value: "350824"
            },
            {
                city: "龙岩市",
                text: "连城县",
                value: "350825"
            },
            {
                city: "龙岩市",
                text: "漳平市",
                value: "350881"
            }],
            350900 : [{
                city: "宁德市",
                text: "市辖区",
                value: "350901"
            },
            {
                city: "宁德市",
                text: "蕉城区",
                value: "350902"
            },
            {
                city: "宁德市",
                text: "霞浦县",
                value: "350921"
            },
            {
                city: "宁德市",
                text: "古田县",
                value: "350922"
            },
            {
                city: "宁德市",
                text: "屏南县",
                value: "350923"
            },
            {
                city: "宁德市",
                text: "寿宁县",
                value: "350924"
            },
            {
                city: "宁德市",
                text: "周宁县",
                value: "350925"
            },
            {
                city: "宁德市",
                text: "柘荣县",
                value: "350926"
            },
            {
                city: "宁德市",
                text: "福安市",
                value: "350981"
            },
            {
                city: "宁德市",
                text: "福鼎市",
                value: "350982"
            }],
            360100 : [{
                city: "南昌市",
                text: "市辖区",
                value: "360101"
            },
            {
                city: "南昌市",
                text: "东湖区",
                value: "360102"
            },
            {
                city: "南昌市",
                text: "西湖区",
                value: "360103"
            },
            {
                city: "南昌市",
                text: "青云谱区",
                value: "360104"
            },
            {
                city: "南昌市",
                text: "湾里区",
                value: "360105"
            },
            {
                city: "南昌市",
                text: "青山湖区",
                value: "360111"
            },
            {
                city: "南昌市",
                text: "新建区",
                value: "360112"
            },
            {
                city: "南昌市",
                text: "南昌县",
                value: "360121"
            },
            {
                city: "南昌市",
                text: "安义县",
                value: "360123"
            },
            {
                city: "南昌市",
                text: "进贤县",
                value: "360124"
            }],
            360200 : [{
                city: "景德镇市",
                text: "市辖区",
                value: "360201"
            },
            {
                city: "景德镇市",
                text: "昌江区",
                value: "360202"
            },
            {
                city: "景德镇市",
                text: "珠山区",
                value: "360203"
            },
            {
                city: "景德镇市",
                text: "浮梁县",
                value: "360222"
            },
            {
                city: "景德镇市",
                text: "乐平市",
                value: "360281"
            }],
            360300 : [{
                city: "萍乡市",
                text: "市辖区",
                value: "360301"
            },
            {
                city: "萍乡市",
                text: "安源区",
                value: "360302"
            },
            {
                city: "萍乡市",
                text: "湘东区",
                value: "360313"
            },
            {
                city: "萍乡市",
                text: "莲花县",
                value: "360321"
            },
            {
                city: "萍乡市",
                text: "上栗县",
                value: "360322"
            },
            {
                city: "萍乡市",
                text: "芦溪县",
                value: "360323"
            }],
            360400 : [{
                city: "九江市",
                text: "市辖区",
                value: "360401"
            },
            {
                city: "九江市",
                text: "濂溪区",
                value: "360402"
            },
            {
                city: "九江市",
                text: "浔阳区",
                value: "360403"
            },
            {
                city: "九江市",
                text: "九江县",
                value: "360421"
            },
            {
                city: "九江市",
                text: "武宁县",
                value: "360423"
            },
            {
                city: "九江市",
                text: "修水县",
                value: "360424"
            },
            {
                city: "九江市",
                text: "永修县",
                value: "360425"
            },
            {
                city: "九江市",
                text: "德安县",
                value: "360426"
            },
            {
                city: "九江市",
                text: "都昌县",
                value: "360428"
            },
            {
                city: "九江市",
                text: "湖口县",
                value: "360429"
            },
            {
                city: "九江市",
                text: "彭泽县",
                value: "360430"
            },
            {
                city: "九江市",
                text: "瑞昌市",
                value: "360481"
            },
            {
                city: "九江市",
                text: "共青城市",
                value: "360482"
            },
            {
                city: "九江市",
                text: "庐山市",
                value: "360483"
            }],
            360500 : [{
                city: "新余市",
                text: "市辖区",
                value: "360501"
            },
            {
                city: "新余市",
                text: "渝水区",
                value: "360502"
            },
            {
                city: "新余市",
                text: "分宜县",
                value: "360521"
            }],
            360600 : [{
                city: "鹰潭市",
                text: "市辖区",
                value: "360601"
            },
            {
                city: "鹰潭市",
                text: "月湖区",
                value: "360602"
            },
            {
                city: "鹰潭市",
                text: "余江县",
                value: "360622"
            },
            {
                city: "鹰潭市",
                text: "贵溪市",
                value: "360681"
            }],
            360700 : [{
                city: "赣州市",
                text: "市辖区",
                value: "360701"
            },
            {
                city: "赣州市",
                text: "章贡区",
                value: "360702"
            },
            {
                city: "赣州市",
                text: "南康区",
                value: "360703"
            },
            {
                city: "赣州市",
                text: "赣县",
                value: "360721"
            },
            {
                city: "赣州市",
                text: "信丰县",
                value: "360722"
            },
            {
                city: "赣州市",
                text: "大余县",
                value: "360723"
            },
            {
                city: "赣州市",
                text: "上犹县",
                value: "360724"
            },
            {
                city: "赣州市",
                text: "崇义县",
                value: "360725"
            },
            {
                city: "赣州市",
                text: "安远县",
                value: "360726"
            },
            {
                city: "赣州市",
                text: "龙南县",
                value: "360727"
            },
            {
                city: "赣州市",
                text: "定南县",
                value: "360728"
            },
            {
                city: "赣州市",
                text: "全南县",
                value: "360729"
            },
            {
                city: "赣州市",
                text: "宁都县",
                value: "360730"
            },
            {
                city: "赣州市",
                text: "于都县",
                value: "360731"
            },
            {
                city: "赣州市",
                text: "兴国县",
                value: "360732"
            },
            {
                city: "赣州市",
                text: "会昌县",
                value: "360733"
            },
            {
                city: "赣州市",
                text: "寻乌县",
                value: "360734"
            },
            {
                city: "赣州市",
                text: "石城县",
                value: "360735"
            },
            {
                city: "赣州市",
                text: "瑞金市",
                value: "360781"
            }],
            360800 : [{
                city: "吉安市",
                text: "市辖区",
                value: "360801"
            },
            {
                city: "吉安市",
                text: "吉州区",
                value: "360802"
            },
            {
                city: "吉安市",
                text: "青原区",
                value: "360803"
            },
            {
                city: "吉安市",
                text: "吉安县",
                value: "360821"
            },
            {
                city: "吉安市",
                text: "吉水县",
                value: "360822"
            },
            {
                city: "吉安市",
                text: "峡江县",
                value: "360823"
            },
            {
                city: "吉安市",
                text: "新干县",
                value: "360824"
            },
            {
                city: "吉安市",
                text: "永丰县",
                value: "360825"
            },
            {
                city: "吉安市",
                text: "泰和县",
                value: "360826"
            },
            {
                city: "吉安市",
                text: "遂川县",
                value: "360827"
            },
            {
                city: "吉安市",
                text: "万安县",
                value: "360828"
            },
            {
                city: "吉安市",
                text: "安福县",
                value: "360829"
            },
            {
                city: "吉安市",
                text: "永新县",
                value: "360830"
            },
            {
                city: "吉安市",
                text: "井冈山市",
                value: "360881"
            }],
            360900 : [{
                city: "宜春市",
                text: "市辖区",
                value: "360901"
            },
            {
                city: "宜春市",
                text: "袁州区",
                value: "360902"
            },
            {
                city: "宜春市",
                text: "奉新县",
                value: "360921"
            },
            {
                city: "宜春市",
                text: "万载县",
                value: "360922"
            },
            {
                city: "宜春市",
                text: "上高县",
                value: "360923"
            },
            {
                city: "宜春市",
                text: "宜丰县",
                value: "360924"
            },
            {
                city: "宜春市",
                text: "靖安县",
                value: "360925"
            },
            {
                city: "宜春市",
                text: "铜鼓县",
                value: "360926"
            },
            {
                city: "宜春市",
                text: "丰城市",
                value: "360981"
            },
            {
                city: "宜春市",
                text: "樟树市",
                value: "360982"
            },
            {
                city: "宜春市",
                text: "高安市",
                value: "360983"
            }],
            361000 : [{
                city: "抚州市",
                text: "市辖区",
                value: "361001"
            },
            {
                city: "抚州市",
                text: "临川区",
                value: "361002"
            },
            {
                city: "抚州市",
                text: "南城县",
                value: "361021"
            },
            {
                city: "抚州市",
                text: "黎川县",
                value: "361022"
            },
            {
                city: "抚州市",
                text: "南丰县",
                value: "361023"
            },
            {
                city: "抚州市",
                text: "崇仁县",
                value: "361024"
            },
            {
                city: "抚州市",
                text: "乐安县",
                value: "361025"
            },
            {
                city: "抚州市",
                text: "宜黄县",
                value: "361026"
            },
            {
                city: "抚州市",
                text: "金溪县",
                value: "361027"
            },
            {
                city: "抚州市",
                text: "资溪县",
                value: "361028"
            },
            {
                city: "抚州市",
                text: "东乡县",
                value: "361029"
            },
            {
                city: "抚州市",
                text: "广昌县",
                value: "361030"
            }],
            361100 : [{
                city: "上饶市",
                text: "市辖区",
                value: "361101"
            },
            {
                city: "上饶市",
                text: "信州区",
                value: "361102"
            },
            {
                city: "上饶市",
                text: "广丰区",
                value: "361103"
            },
            {
                city: "上饶市",
                text: "上饶县",
                value: "361121"
            },
            {
                city: "上饶市",
                text: "玉山县",
                value: "361123"
            },
            {
                city: "上饶市",
                text: "铅山县",
                value: "361124"
            },
            {
                city: "上饶市",
                text: "横峰县",
                value: "361125"
            },
            {
                city: "上饶市",
                text: "弋阳县",
                value: "361126"
            },
            {
                city: "上饶市",
                text: "余干县",
                value: "361127"
            },
            {
                city: "上饶市",
                text: "鄱阳县",
                value: "361128"
            },
            {
                city: "上饶市",
                text: "万年县",
                value: "361129"
            },
            {
                city: "上饶市",
                text: "婺源县",
                value: "361130"
            },
            {
                city: "上饶市",
                text: "德兴市",
                value: "361181"
            }],
            370100 : [{
                city: "济南市",
                text: "市辖区",
                value: "370101"
            },
            {
                city: "济南市",
                text: "历下区",
                value: "370102"
            },
            {
                city: "济南市",
                text: "市中区",
                value: "370103"
            },
            {
                city: "济南市",
                text: "槐荫区",
                value: "370104"
            },
            {
                city: "济南市",
                text: "天桥区",
                value: "370105"
            },
            {
                city: "济南市",
                text: "历城区",
                value: "370112"
            },
            {
                city: "济南市",
                text: "长清区",
                value: "370113"
            },
            {
                city: "济南市",
                text: "平阴县",
                value: "370124"
            },
            {
                city: "济南市",
                text: "济阳县",
                value: "370125"
            },
            {
                city: "济南市",
                text: "商河县",
                value: "370126"
            },
            {
                city: "济南市",
                text: "章丘市",
                value: "370181"
            }],
            370200 : [{
                city: "青岛市",
                text: "市辖区",
                value: "370201"
            },
            {
                city: "青岛市",
                text: "市南区",
                value: "370202"
            },
            {
                city: "青岛市",
                text: "市北区",
                value: "370203"
            },
            {
                city: "青岛市",
                text: "黄岛区",
                value: "370211"
            },
            {
                city: "青岛市",
                text: "崂山区",
                value: "370212"
            },
            {
                city: "青岛市",
                text: "李沧区",
                value: "370213"
            },
            {
                city: "青岛市",
                text: "城阳区",
                value: "370214"
            },
            {
                city: "青岛市",
                text: "胶州市",
                value: "370281"
            },
            {
                city: "青岛市",
                text: "即墨市",
                value: "370282"
            },
            {
                city: "青岛市",
                text: "平度市",
                value: "370283"
            },
            {
                city: "青岛市",
                text: "莱西市",
                value: "370285"
            }],
            370300 : [{
                city: "淄博市",
                text: "市辖区",
                value: "370301"
            },
            {
                city: "淄博市",
                text: "淄川区",
                value: "370302"
            },
            {
                city: "淄博市",
                text: "张店区",
                value: "370303"
            },
            {
                city: "淄博市",
                text: "博山区",
                value: "370304"
            },
            {
                city: "淄博市",
                text: "临淄区",
                value: "370305"
            },
            {
                city: "淄博市",
                text: "周村区",
                value: "370306"
            },
            {
                city: "淄博市",
                text: "桓台县",
                value: "370321"
            },
            {
                city: "淄博市",
                text: "高青县",
                value: "370322"
            },
            {
                city: "淄博市",
                text: "沂源县",
                value: "370323"
            }],
            370400 : [{
                city: "枣庄市",
                text: "市辖区",
                value: "370401"
            },
            {
                city: "枣庄市",
                text: "市中区",
                value: "370402"
            },
            {
                city: "枣庄市",
                text: "薛城区",
                value: "370403"
            },
            {
                city: "枣庄市",
                text: "峄城区",
                value: "370404"
            },
            {
                city: "枣庄市",
                text: "台儿庄区",
                value: "370405"
            },
            {
                city: "枣庄市",
                text: "山亭区",
                value: "370406"
            },
            {
                city: "枣庄市",
                text: "滕州市",
                value: "370481"
            }],
            370500 : [{
                city: "东营市",
                text: "市辖区",
                value: "370501"
            },
            {
                city: "东营市",
                text: "东营区",
                value: "370502"
            },
            {
                city: "东营市",
                text: "河口区",
                value: "370503"
            },
            {
                city: "东营市",
                text: "垦利区",
                value: "370505"
            },
            {
                city: "东营市",
                text: "利津县",
                value: "370522"
            },
            {
                city: "东营市",
                text: "广饶县",
                value: "370523"
            }],
            370600 : [{
                city: "烟台市",
                text: "市辖区",
                value: "370601"
            },
            {
                city: "烟台市",
                text: "芝罘区",
                value: "370602"
            },
            {
                city: "烟台市",
                text: "福山区",
                value: "370611"
            },
            {
                city: "烟台市",
                text: "牟平区",
                value: "370612"
            },
            {
                city: "烟台市",
                text: "莱山区",
                value: "370613"
            },
            {
                city: "烟台市",
                text: "长岛县",
                value: "370634"
            },
            {
                city: "烟台市",
                text: "龙口市",
                value: "370681"
            },
            {
                city: "烟台市",
                text: "莱阳市",
                value: "370682"
            },
            {
                city: "烟台市",
                text: "莱州市",
                value: "370683"
            },
            {
                city: "烟台市",
                text: "蓬莱市",
                value: "370684"
            },
            {
                city: "烟台市",
                text: "招远市",
                value: "370685"
            },
            {
                city: "烟台市",
                text: "栖霞市",
                value: "370686"
            },
            {
                city: "烟台市",
                text: "海阳市",
                value: "370687"
            }],
            370700 : [{
                city: "潍坊市",
                text: "市辖区",
                value: "370701"
            },
            {
                city: "潍坊市",
                text: "潍城区",
                value: "370702"
            },
            {
                city: "潍坊市",
                text: "寒亭区",
                value: "370703"
            },
            {
                city: "潍坊市",
                text: "坊子区",
                value: "370704"
            },
            {
                city: "潍坊市",
                text: "奎文区",
                value: "370705"
            },
            {
                city: "潍坊市",
                text: "临朐县",
                value: "370724"
            },
            {
                city: "潍坊市",
                text: "昌乐县",
                value: "370725"
            },
            {
                city: "潍坊市",
                text: "青州市",
                value: "370781"
            },
            {
                city: "潍坊市",
                text: "诸城市",
                value: "370782"
            },
            {
                city: "潍坊市",
                text: "寿光市",
                value: "370783"
            },
            {
                city: "潍坊市",
                text: "安丘市",
                value: "370784"
            },
            {
                city: "潍坊市",
                text: "高密市",
                value: "370785"
            },
            {
                city: "潍坊市",
                text: "昌邑市",
                value: "370786"
            }],
            370800 : [{
                city: "济宁市",
                text: "市辖区",
                value: "370801"
            },
            {
                city: "济宁市",
                text: "任城区",
                value: "370811"
            },
            {
                city: "济宁市",
                text: "兖州区",
                value: "370812"
            },
            {
                city: "济宁市",
                text: "微山县",
                value: "370826"
            },
            {
                city: "济宁市",
                text: "鱼台县",
                value: "370827"
            },
            {
                city: "济宁市",
                text: "金乡县",
                value: "370828"
            },
            {
                city: "济宁市",
                text: "嘉祥县",
                value: "370829"
            },
            {
                city: "济宁市",
                text: "汶上县",
                value: "370830"
            },
            {
                city: "济宁市",
                text: "泗水县",
                value: "370831"
            },
            {
                city: "济宁市",
                text: "梁山县",
                value: "370832"
            },
            {
                city: "济宁市",
                text: "曲阜市",
                value: "370881"
            },
            {
                city: "济宁市",
                text: "邹城市",
                value: "370883"
            }],
            370900 : [{
                city: "泰安市",
                text: "市辖区",
                value: "370901"
            },
            {
                city: "泰安市",
                text: "泰山区",
                value: "370902"
            },
            {
                city: "泰安市",
                text: "岱岳区",
                value: "370911"
            },
            {
                city: "泰安市",
                text: "宁阳县",
                value: "370921"
            },
            {
                city: "泰安市",
                text: "东平县",
                value: "370923"
            },
            {
                city: "泰安市",
                text: "新泰市",
                value: "370982"
            },
            {
                city: "泰安市",
                text: "肥城市",
                value: "370983"
            }],
            371000 : [{
                city: "威海市",
                text: "市辖区",
                value: "371001"
            },
            {
                city: "威海市",
                text: "环翠区",
                value: "371002"
            },
            {
                city: "威海市",
                text: "文登区",
                value: "371003"
            },
            {
                city: "威海市",
                text: "荣成市",
                value: "371082"
            },
            {
                city: "威海市",
                text: "乳山市",
                value: "371083"
            }],
            371100 : [{
                city: "日照市",
                text: "市辖区",
                value: "371101"
            },
            {
                city: "日照市",
                text: "东港区",
                value: "371102"
            },
            {
                city: "日照市",
                text: "岚山区",
                value: "371103"
            },
            {
                city: "日照市",
                text: "五莲县",
                value: "371121"
            },
            {
                city: "日照市",
                text: "莒县",
                value: "371122"
            }],
            371200 : [{
                city: "莱芜市",
                text: "市辖区",
                value: "371201"
            },
            {
                city: "莱芜市",
                text: "莱城区",
                value: "371202"
            },
            {
                city: "莱芜市",
                text: "钢城区",
                value: "371203"
            }],
            371300 : [{
                city: "临沂市",
                text: "市辖区",
                value: "371301"
            },
            {
                city: "临沂市",
                text: "兰山区",
                value: "371302"
            },
            {
                city: "临沂市",
                text: "罗庄区",
                value: "371311"
            },
            {
                city: "临沂市",
                text: "河东区",
                value: "371312"
            },
            {
                city: "临沂市",
                text: "沂南县",
                value: "371321"
            },
            {
                city: "临沂市",
                text: "郯城县",
                value: "371322"
            },
            {
                city: "临沂市",
                text: "沂水县",
                value: "371323"
            },
            {
                city: "临沂市",
                text: "兰陵县",
                value: "371324"
            },
            {
                city: "临沂市",
                text: "费县",
                value: "371325"
            },
            {
                city: "临沂市",
                text: "平邑县",
                value: "371326"
            },
            {
                city: "临沂市",
                text: "莒南县",
                value: "371327"
            },
            {
                city: "临沂市",
                text: "蒙阴县",
                value: "371328"
            },
            {
                city: "临沂市",
                text: "临沭县",
                value: "371329"
            }],
            371400 : [{
                city: "德州市",
                text: "市辖区",
                value: "371401"
            },
            {
                city: "德州市",
                text: "德城区",
                value: "371402"
            },
            {
                city: "德州市",
                text: "陵城区",
                value: "371403"
            },
            {
                city: "德州市",
                text: "宁津县",
                value: "371422"
            },
            {
                city: "德州市",
                text: "庆云县",
                value: "371423"
            },
            {
                city: "德州市",
                text: "临邑县",
                value: "371424"
            },
            {
                city: "德州市",
                text: "齐河县",
                value: "371425"
            },
            {
                city: "德州市",
                text: "平原县",
                value: "371426"
            },
            {
                city: "德州市",
                text: "夏津县",
                value: "371427"
            },
            {
                city: "德州市",
                text: "武城县",
                value: "371428"
            },
            {
                city: "德州市",
                text: "乐陵市",
                value: "371481"
            },
            {
                city: "德州市",
                text: "禹城市",
                value: "371482"
            }],
            371500 : [{
                city: "聊城市",
                text: "市辖区",
                value: "371501"
            },
            {
                city: "聊城市",
                text: "东昌府区",
                value: "371502"
            },
            {
                city: "聊城市",
                text: "阳谷县",
                value: "371521"
            },
            {
                city: "聊城市",
                text: "莘县",
                value: "371522"
            },
            {
                city: "聊城市",
                text: "茌平县",
                value: "371523"
            },
            {
                city: "聊城市",
                text: "东阿县",
                value: "371524"
            },
            {
                city: "聊城市",
                text: "冠县",
                value: "371525"
            },
            {
                city: "聊城市",
                text: "高唐县",
                value: "371526"
            },
            {
                city: "聊城市",
                text: "临清市",
                value: "371581"
            }],
            371600 : [{
                city: "滨州市",
                text: "市辖区",
                value: "371601"
            },
            {
                city: "滨州市",
                text: "滨城区",
                value: "371602"
            },
            {
                city: "滨州市",
                text: "沾化区",
                value: "371603"
            },
            {
                city: "滨州市",
                text: "惠民县",
                value: "371621"
            },
            {
                city: "滨州市",
                text: "阳信县",
                value: "371622"
            },
            {
                city: "滨州市",
                text: "无棣县",
                value: "371623"
            },
            {
                city: "滨州市",
                text: "博兴县",
                value: "371625"
            },
            {
                city: "滨州市",
                text: "邹平县",
                value: "371626"
            }],
            371700 : [{
                city: "菏泽市",
                text: "市辖区",
                value: "371701"
            },
            {
                city: "菏泽市",
                text: "牡丹区",
                value: "371702"
            },
            {
                city: "菏泽市",
                text: "定陶区",
                value: "371703"
            },
            {
                city: "菏泽市",
                text: "曹县",
                value: "371721"
            },
            {
                city: "菏泽市",
                text: "单县",
                value: "371722"
            },
            {
                city: "菏泽市",
                text: "成武县",
                value: "371723"
            },
            {
                city: "菏泽市",
                text: "巨野县",
                value: "371724"
            },
            {
                city: "菏泽市",
                text: "郓城县",
                value: "371725"
            },
            {
                city: "菏泽市",
                text: "鄄城县",
                value: "371726"
            },
            {
                city: "菏泽市",
                text: "东明县",
                value: "371728"
            }],
            410100 : [{
                city: "郑州市",
                text: "市辖区",
                value: "410101"
            },
            {
                city: "郑州市",
                text: "中原区",
                value: "410102"
            },
            {
                city: "郑州市",
                text: "二七区",
                value: "410103"
            },
            {
                city: "郑州市",
                text: "管城回族区",
                value: "410104"
            },
            {
                city: "郑州市",
                text: "金水区",
                value: "410105"
            },
            {
                city: "郑州市",
                text: "上街区",
                value: "410106"
            },
            {
                city: "郑州市",
                text: "惠济区",
                value: "410108"
            },
            {
                city: "郑州市",
                text: "中牟县",
                value: "410122"
            },
            {
                city: "郑州市",
                text: "巩义市",
                value: "410181"
            },
            {
                city: "郑州市",
                text: "荥阳市",
                value: "410182"
            },
            {
                city: "郑州市",
                text: "新密市",
                value: "410183"
            },
            {
                city: "郑州市",
                text: "新郑市",
                value: "410184"
            },
            {
                city: "郑州市",
                text: "登封市",
                value: "410185"
            }],
            410200 : [{
                city: "开封市",
                text: "市辖区",
                value: "410201"
            },
            {
                city: "开封市",
                text: "龙亭区",
                value: "410202"
            },
            {
                city: "开封市",
                text: "顺河回族区",
                value: "410203"
            },
            {
                city: "开封市",
                text: "鼓楼区",
                value: "410204"
            },
            {
                city: "开封市",
                text: "禹王台区",
                value: "410205"
            },
            {
                city: "开封市",
                text: "金明区",
                value: "410211"
            },
            {
                city: "开封市",
                text: "祥符区",
                value: "410212"
            },
            {
                city: "开封市",
                text: "杞县",
                value: "410221"
            },
            {
                city: "开封市",
                text: "通许县",
                value: "410222"
            },
            {
                city: "开封市",
                text: "尉氏县",
                value: "410223"
            },
            {
                city: "开封市",
                text: "兰考县",
                value: "410225"
            }],
            410300 : [{
                city: "洛阳市",
                text: "市辖区",
                value: "410301"
            },
            {
                city: "洛阳市",
                text: "老城区",
                value: "410302"
            },
            {
                city: "洛阳市",
                text: "西工区",
                value: "410303"
            },
            {
                city: "洛阳市",
                text: "瀍河回族区",
                value: "410304"
            },
            {
                city: "洛阳市",
                text: "涧西区",
                value: "410305"
            },
            {
                city: "洛阳市",
                text: "吉利区",
                value: "410306"
            },
            {
                city: "洛阳市",
                text: "洛龙区",
                value: "410311"
            },
            {
                city: "洛阳市",
                text: "孟津县",
                value: "410322"
            },
            {
                city: "洛阳市",
                text: "新安县",
                value: "410323"
            },
            {
                city: "洛阳市",
                text: "栾川县",
                value: "410324"
            },
            {
                city: "洛阳市",
                text: "嵩县",
                value: "410325"
            },
            {
                city: "洛阳市",
                text: "汝阳县",
                value: "410326"
            },
            {
                city: "洛阳市",
                text: "宜阳县",
                value: "410327"
            },
            {
                city: "洛阳市",
                text: "洛宁县",
                value: "410328"
            },
            {
                city: "洛阳市",
                text: "伊川县",
                value: "410329"
            },
            {
                city: "洛阳市",
                text: "偃师市",
                value: "410381"
            }],
            410400 : [{
                city: "平顶山市",
                text: "市辖区",
                value: "410401"
            },
            {
                city: "平顶山市",
                text: "新华区",
                value: "410402"
            },
            {
                city: "平顶山市",
                text: "卫东区",
                value: "410403"
            },
            {
                city: "平顶山市",
                text: "石龙区",
                value: "410404"
            },
            {
                city: "平顶山市",
                text: "湛河区",
                value: "410411"
            },
            {
                city: "平顶山市",
                text: "宝丰县",
                value: "410421"
            },
            {
                city: "平顶山市",
                text: "叶县",
                value: "410422"
            },
            {
                city: "平顶山市",
                text: "鲁山县",
                value: "410423"
            },
            {
                city: "平顶山市",
                text: "郏县",
                value: "410425"
            },
            {
                city: "平顶山市",
                text: "舞钢市",
                value: "410481"
            },
            {
                city: "平顶山市",
                text: "汝州市",
                value: "410482"
            }],
            410500 : [{
                city: "安阳市",
                text: "市辖区",
                value: "410501"
            },
            {
                city: "安阳市",
                text: "文峰区",
                value: "410502"
            },
            {
                city: "安阳市",
                text: "北关区",
                value: "410503"
            },
            {
                city: "安阳市",
                text: "殷都区",
                value: "410505"
            },
            {
                city: "安阳市",
                text: "龙安区",
                value: "410506"
            },
            {
                city: "安阳市",
                text: "安阳县",
                value: "410522"
            },
            {
                city: "安阳市",
                text: "汤阴县",
                value: "410523"
            },
            {
                city: "安阳市",
                text: "滑县",
                value: "410526"
            },
            {
                city: "安阳市",
                text: "内黄县",
                value: "410527"
            },
            {
                city: "安阳市",
                text: "林州市",
                value: "410581"
            }],
            410600 : [{
                city: "鹤壁市",
                text: "市辖区",
                value: "410601"
            },
            {
                city: "鹤壁市",
                text: "鹤山区",
                value: "410602"
            },
            {
                city: "鹤壁市",
                text: "山城区",
                value: "410603"
            },
            {
                city: "鹤壁市",
                text: "淇滨区",
                value: "410611"
            },
            {
                city: "鹤壁市",
                text: "浚县",
                value: "410621"
            },
            {
                city: "鹤壁市",
                text: "淇县",
                value: "410622"
            }],
            410700 : [{
                city: "新乡市",
                text: "市辖区",
                value: "410701"
            },
            {
                city: "新乡市",
                text: "红旗区",
                value: "410702"
            },
            {
                city: "新乡市",
                text: "卫滨区",
                value: "410703"
            },
            {
                city: "新乡市",
                text: "凤泉区",
                value: "410704"
            },
            {
                city: "新乡市",
                text: "牧野区",
                value: "410711"
            },
            {
                city: "新乡市",
                text: "新乡县",
                value: "410721"
            },
            {
                city: "新乡市",
                text: "获嘉县",
                value: "410724"
            },
            {
                city: "新乡市",
                text: "原阳县",
                value: "410725"
            },
            {
                city: "新乡市",
                text: "延津县",
                value: "410726"
            },
            {
                city: "新乡市",
                text: "封丘县",
                value: "410727"
            },
            {
                city: "新乡市",
                text: "长垣县",
                value: "410728"
            },
            {
                city: "新乡市",
                text: "卫辉市",
                value: "410781"
            },
            {
                city: "新乡市",
                text: "辉县市",
                value: "410782"
            }],
            410800 : [{
                city: "焦作市",
                text: "市辖区",
                value: "410801"
            },
            {
                city: "焦作市",
                text: "解放区",
                value: "410802"
            },
            {
                city: "焦作市",
                text: "中站区",
                value: "410803"
            },
            {
                city: "焦作市",
                text: "马村区",
                value: "410804"
            },
            {
                city: "焦作市",
                text: "山阳区",
                value: "410811"
            },
            {
                city: "焦作市",
                text: "修武县",
                value: "410821"
            },
            {
                city: "焦作市",
                text: "博爱县",
                value: "410822"
            },
            {
                city: "焦作市",
                text: "武陟县",
                value: "410823"
            },
            {
                city: "焦作市",
                text: "温县",
                value: "410825"
            },
            {
                city: "焦作市",
                text: "沁阳市",
                value: "410882"
            },
            {
                city: "焦作市",
                text: "孟州市",
                value: "410883"
            }],
            410900 : [{
                city: "濮阳市",
                text: "市辖区",
                value: "410901"
            },
            {
                city: "濮阳市",
                text: "华龙区",
                value: "410902"
            },
            {
                city: "濮阳市",
                text: "清丰县",
                value: "410922"
            },
            {
                city: "濮阳市",
                text: "南乐县",
                value: "410923"
            },
            {
                city: "濮阳市",
                text: "范县",
                value: "410926"
            },
            {
                city: "濮阳市",
                text: "台前县",
                value: "410927"
            },
            {
                city: "濮阳市",
                text: "濮阳县",
                value: "410928"
            }],
            411000 : [{
                city: "许昌市",
                text: "市辖区",
                value: "411001"
            },
            {
                city: "许昌市",
                text: "魏都区",
                value: "411002"
            },
            {
                city: "许昌市",
                text: "许昌县",
                value: "411023"
            },
            {
                city: "许昌市",
                text: "鄢陵县",
                value: "411024"
            },
            {
                city: "许昌市",
                text: "襄城县",
                value: "411025"
            },
            {
                city: "许昌市",
                text: "禹州市",
                value: "411081"
            },
            {
                city: "许昌市",
                text: "长葛市",
                value: "411082"
            }],
            411100 : [{
                city: "漯河市",
                text: "市辖区",
                value: "411101"
            },
            {
                city: "漯河市",
                text: "源汇区",
                value: "411102"
            },
            {
                city: "漯河市",
                text: "郾城区",
                value: "411103"
            },
            {
                city: "漯河市",
                text: "召陵区",
                value: "411104"
            },
            {
                city: "漯河市",
                text: "舞阳县",
                value: "411121"
            },
            {
                city: "漯河市",
                text: "临颍县",
                value: "411122"
            }],
            411200 : [{
                city: "三门峡市",
                text: "市辖区",
                value: "411201"
            },
            {
                city: "三门峡市",
                text: "湖滨区",
                value: "411202"
            },
            {
                city: "三门峡市",
                text: "陕州区",
                value: "411203"
            },
            {
                city: "三门峡市",
                text: "渑池县",
                value: "411221"
            },
            {
                city: "三门峡市",
                text: "卢氏县",
                value: "411224"
            },
            {
                city: "三门峡市",
                text: "义马市",
                value: "411281"
            },
            {
                city: "三门峡市",
                text: "灵宝市",
                value: "411282"
            }],
            411300 : [{
                city: "南阳市",
                text: "市辖区",
                value: "411301"
            },
            {
                city: "南阳市",
                text: "宛城区",
                value: "411302"
            },
            {
                city: "南阳市",
                text: "卧龙区",
                value: "411303"
            },
            {
                city: "南阳市",
                text: "南召县",
                value: "411321"
            },
            {
                city: "南阳市",
                text: "方城县",
                value: "411322"
            },
            {
                city: "南阳市",
                text: "西峡县",
                value: "411323"
            },
            {
                city: "南阳市",
                text: "镇平县",
                value: "411324"
            },
            {
                city: "南阳市",
                text: "内乡县",
                value: "411325"
            },
            {
                city: "南阳市",
                text: "淅川县",
                value: "411326"
            },
            {
                city: "南阳市",
                text: "社旗县",
                value: "411327"
            },
            {
                city: "南阳市",
                text: "唐河县",
                value: "411328"
            },
            {
                city: "南阳市",
                text: "新野县",
                value: "411329"
            },
            {
                city: "南阳市",
                text: "桐柏县",
                value: "411330"
            },
            {
                city: "南阳市",
                text: "邓州市",
                value: "411381"
            }],
            411400 : [{
                city: "商丘市",
                text: "市辖区",
                value: "411401"
            },
            {
                city: "商丘市",
                text: "梁园区",
                value: "411402"
            },
            {
                city: "商丘市",
                text: "睢阳区",
                value: "411403"
            },
            {
                city: "商丘市",
                text: "民权县",
                value: "411421"
            },
            {
                city: "商丘市",
                text: "睢县",
                value: "411422"
            },
            {
                city: "商丘市",
                text: "宁陵县",
                value: "411423"
            },
            {
                city: "商丘市",
                text: "柘城县",
                value: "411424"
            },
            {
                city: "商丘市",
                text: "虞城县",
                value: "411425"
            },
            {
                city: "商丘市",
                text: "夏邑县",
                value: "411426"
            },
            {
                city: "商丘市",
                text: "永城市",
                value: "411481"
            }],
            411500 : [{
                city: "信阳市",
                text: "市辖区",
                value: "411501"
            },
            {
                city: "信阳市",
                text: "浉河区",
                value: "411502"
            },
            {
                city: "信阳市",
                text: "平桥区",
                value: "411503"
            },
            {
                city: "信阳市",
                text: "罗山县",
                value: "411521"
            },
            {
                city: "信阳市",
                text: "光山县",
                value: "411522"
            },
            {
                city: "信阳市",
                text: "新县",
                value: "411523"
            },
            {
                city: "信阳市",
                text: "商城县",
                value: "411524"
            },
            {
                city: "信阳市",
                text: "固始县",
                value: "411525"
            },
            {
                city: "信阳市",
                text: "潢川县",
                value: "411526"
            },
            {
                city: "信阳市",
                text: "淮滨县",
                value: "411527"
            },
            {
                city: "信阳市",
                text: "息县",
                value: "411528"
            }],
            411600 : [{
                city: "周口市",
                text: "市辖区",
                value: "411601"
            },
            {
                city: "周口市",
                text: "川汇区",
                value: "411602"
            },
            {
                city: "周口市",
                text: "扶沟县",
                value: "411621"
            },
            {
                city: "周口市",
                text: "西华县",
                value: "411622"
            },
            {
                city: "周口市",
                text: "商水县",
                value: "411623"
            },
            {
                city: "周口市",
                text: "沈丘县",
                value: "411624"
            },
            {
                city: "周口市",
                text: "郸城县",
                value: "411625"
            },
            {
                city: "周口市",
                text: "淮阳县",
                value: "411626"
            },
            {
                city: "周口市",
                text: "太康县",
                value: "411627"
            },
            {
                city: "周口市",
                text: "鹿邑县",
                value: "411628"
            },
            {
                city: "周口市",
                text: "项城市",
                value: "411681"
            }],
            411700 : [{
                city: "驻马店市",
                text: "市辖区",
                value: "411701"
            },
            {
                city: "驻马店市",
                text: "驿城区",
                value: "411702"
            },
            {
                city: "驻马店市",
                text: "西平县",
                value: "411721"
            },
            {
                city: "驻马店市",
                text: "上蔡县",
                value: "411722"
            },
            {
                city: "驻马店市",
                text: "平舆县",
                value: "411723"
            },
            {
                city: "驻马店市",
                text: "正阳县",
                value: "411724"
            },
            {
                city: "驻马店市",
                text: "确山县",
                value: "411725"
            },
            {
                city: "驻马店市",
                text: "泌阳县",
                value: "411726"
            },
            {
                city: "驻马店市",
                text: "汝南县",
                value: "411727"
            },
            {
                city: "驻马店市",
                text: "遂平县",
                value: "411728"
            },
            {
                city: "驻马店市",
                text: "新蔡县",
                value: "411729"
            }],
            419000 : [{
                city: "省直辖县级行政区划",
                text: "济源市",
                value: "419001"
            }],
            420100 : [{
                city: "武汉市",
                text: "市辖区",
                value: "420101"
            },
            {
                city: "武汉市",
                text: "江岸区",
                value: "420102"
            },
            {
                city: "武汉市",
                text: "江汉区",
                value: "420103"
            },
            {
                city: "武汉市",
                text: "硚口区",
                value: "420104"
            },
            {
                city: "武汉市",
                text: "汉阳区",
                value: "420105"
            },
            {
                city: "武汉市",
                text: "武昌区",
                value: "420106"
            },
            {
                city: "武汉市",
                text: "青山区",
                value: "420107"
            },
            {
                city: "武汉市",
                text: "洪山区",
                value: "420111"
            },
            {
                city: "武汉市",
                text: "东西湖区",
                value: "420112"
            },
            {
                city: "武汉市",
                text: "汉南区",
                value: "420113"
            },
            {
                city: "武汉市",
                text: "蔡甸区",
                value: "420114"
            },
            {
                city: "武汉市",
                text: "江夏区",
                value: "420115"
            },
            {
                city: "武汉市",
                text: "黄陂区",
                value: "420116"
            },
            {
                city: "武汉市",
                text: "新洲区",
                value: "420117"
            }],
            420200 : [{
                city: "黄石市",
                text: "市辖区",
                value: "420201"
            },
            {
                city: "黄石市",
                text: "黄石港区",
                value: "420202"
            },
            {
                city: "黄石市",
                text: "西塞山区",
                value: "420203"
            },
            {
                city: "黄石市",
                text: "下陆区",
                value: "420204"
            },
            {
                city: "黄石市",
                text: "铁山区",
                value: "420205"
            },
            {
                city: "黄石市",
                text: "阳新县",
                value: "420222"
            },
            {
                city: "黄石市",
                text: "大冶市",
                value: "420281"
            }],
            420300 : [{
                city: "十堰市",
                text: "市辖区",
                value: "420301"
            },
            {
                city: "十堰市",
                text: "茅箭区",
                value: "420302"
            },
            {
                city: "十堰市",
                text: "张湾区",
                value: "420303"
            },
            {
                city: "十堰市",
                text: "郧阳区",
                value: "420304"
            },
            {
                city: "十堰市",
                text: "郧西县",
                value: "420322"
            },
            {
                city: "十堰市",
                text: "竹山县",
                value: "420323"
            },
            {
                city: "十堰市",
                text: "竹溪县",
                value: "420324"
            },
            {
                city: "十堰市",
                text: "房县",
                value: "420325"
            },
            {
                city: "十堰市",
                text: "丹江口市",
                value: "420381"
            }],
            420500 : [{
                city: "宜昌市",
                text: "市辖区",
                value: "420501"
            },
            {
                city: "宜昌市",
                text: "西陵区",
                value: "420502"
            },
            {
                city: "宜昌市",
                text: "伍家岗区",
                value: "420503"
            },
            {
                city: "宜昌市",
                text: "点军区",
                value: "420504"
            },
            {
                city: "宜昌市",
                text: "猇亭区",
                value: "420505"
            },
            {
                city: "宜昌市",
                text: "夷陵区",
                value: "420506"
            },
            {
                city: "宜昌市",
                text: "远安县",
                value: "420525"
            },
            {
                city: "宜昌市",
                text: "兴山县",
                value: "420526"
            },
            {
                city: "宜昌市",
                text: "秭归县",
                value: "420527"
            },
            {
                city: "宜昌市",
                text: "长阳土家族自治县",
                value: "420528"
            },
            {
                city: "宜昌市",
                text: "五峰土家族自治县",
                value: "420529"
            },
            {
                city: "宜昌市",
                text: "宜都市",
                value: "420581"
            },
            {
                city: "宜昌市",
                text: "当阳市",
                value: "420582"
            },
            {
                city: "宜昌市",
                text: "枝江市",
                value: "420583"
            }],
            420600 : [{
                city: "襄阳市",
                text: "市辖区",
                value: "420601"
            },
            {
                city: "襄阳市",
                text: "襄城区",
                value: "420602"
            },
            {
                city: "襄阳市",
                text: "樊城区",
                value: "420606"
            },
            {
                city: "襄阳市",
                text: "襄州区",
                value: "420607"
            },
            {
                city: "襄阳市",
                text: "南漳县",
                value: "420624"
            },
            {
                city: "襄阳市",
                text: "谷城县",
                value: "420625"
            },
            {
                city: "襄阳市",
                text: "保康县",
                value: "420626"
            },
            {
                city: "襄阳市",
                text: "老河口市",
                value: "420682"
            },
            {
                city: "襄阳市",
                text: "枣阳市",
                value: "420683"
            },
            {
                city: "襄阳市",
                text: "宜城市",
                value: "420684"
            }],
            420700 : [{
                city: "鄂州市",
                text: "市辖区",
                value: "420701"
            },
            {
                city: "鄂州市",
                text: "梁子湖区",
                value: "420702"
            },
            {
                city: "鄂州市",
                text: "华容区",
                value: "420703"
            },
            {
                city: "鄂州市",
                text: "鄂城区",
                value: "420704"
            }],
            420800 : [{
                city: "荆门市",
                text: "市辖区",
                value: "420801"
            },
            {
                city: "荆门市",
                text: "东宝区",
                value: "420802"
            },
            {
                city: "荆门市",
                text: "掇刀区",
                value: "420804"
            },
            {
                city: "荆门市",
                text: "京山县",
                value: "420821"
            },
            {
                city: "荆门市",
                text: "沙洋县",
                value: "420822"
            },
            {
                city: "荆门市",
                text: "钟祥市",
                value: "420881"
            }],
            420900 : [{
                city: "孝感市",
                text: "市辖区",
                value: "420901"
            },
            {
                city: "孝感市",
                text: "孝南区",
                value: "420902"
            },
            {
                city: "孝感市",
                text: "孝昌县",
                value: "420921"
            },
            {
                city: "孝感市",
                text: "大悟县",
                value: "420922"
            },
            {
                city: "孝感市",
                text: "云梦县",
                value: "420923"
            },
            {
                city: "孝感市",
                text: "应城市",
                value: "420981"
            },
            {
                city: "孝感市",
                text: "安陆市",
                value: "420982"
            },
            {
                city: "孝感市",
                text: "汉川市",
                value: "420984"
            }],
            421000 : [{
                city: "荆州市",
                text: "市辖区",
                value: "421001"
            },
            {
                city: "荆州市",
                text: "沙市区",
                value: "421002"
            },
            {
                city: "荆州市",
                text: "荆州区",
                value: "421003"
            },
            {
                city: "荆州市",
                text: "公安县",
                value: "421022"
            },
            {
                city: "荆州市",
                text: "监利县",
                value: "421023"
            },
            {
                city: "荆州市",
                text: "江陵县",
                value: "421024"
            },
            {
                city: "荆州市",
                text: "石首市",
                value: "421081"
            },
            {
                city: "荆州市",
                text: "洪湖市",
                value: "421083"
            },
            {
                city: "荆州市",
                text: "松滋市",
                value: "421087"
            }],
            421100 : [{
                city: "黄冈市",
                text: "市辖区",
                value: "421101"
            },
            {
                city: "黄冈市",
                text: "黄州区",
                value: "421102"
            },
            {
                city: "黄冈市",
                text: "团风县",
                value: "421121"
            },
            {
                city: "黄冈市",
                text: "红安县",
                value: "421122"
            },
            {
                city: "黄冈市",
                text: "罗田县",
                value: "421123"
            },
            {
                city: "黄冈市",
                text: "英山县",
                value: "421124"
            },
            {
                city: "黄冈市",
                text: "浠水县",
                value: "421125"
            },
            {
                city: "黄冈市",
                text: "蕲春县",
                value: "421126"
            },
            {
                city: "黄冈市",
                text: "黄梅县",
                value: "421127"
            },
            {
                city: "黄冈市",
                text: "麻城市",
                value: "421181"
            },
            {
                city: "黄冈市",
                text: "武穴市",
                value: "421182"
            }],
            421200 : [{
                city: "咸宁市",
                text: "市辖区",
                value: "421201"
            },
            {
                city: "咸宁市",
                text: "咸安区",
                value: "421202"
            },
            {
                city: "咸宁市",
                text: "嘉鱼县",
                value: "421221"
            },
            {
                city: "咸宁市",
                text: "通城县",
                value: "421222"
            },
            {
                city: "咸宁市",
                text: "崇阳县",
                value: "421223"
            },
            {
                city: "咸宁市",
                text: "通山县",
                value: "421224"
            },
            {
                city: "咸宁市",
                text: "赤壁市",
                value: "421281"
            }],
            421300 : [{
                city: "随州市",
                text: "市辖区",
                value: "421301"
            },
            {
                city: "随州市",
                text: "曾都区",
                value: "421303"
            },
            {
                city: "随州市",
                text: "随县",
                value: "421321"
            },
            {
                city: "随州市",
                text: "广水市",
                value: "421381"
            }],
            422800 : [{
                city: "恩施土家族苗族自治州",
                text: "恩施市",
                value: "422801"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "利川市",
                value: "422802"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "建始县",
                value: "422822"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "巴东县",
                value: "422823"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "宣恩县",
                value: "422825"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "咸丰县",
                value: "422826"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "来凤县",
                value: "422827"
            },
            {
                city: "恩施土家族苗族自治州",
                text: "鹤峰县",
                value: "422828"
            }],
            429000 : [{
                city: "省直辖县级行政区划",
                text: "仙桃市",
                value: "429004"
            },
            {
                city: "省直辖县级行政区划",
                text: "潜江市",
                value: "429005"
            },
            {
                city: "省直辖县级行政区划",
                text: "天门市",
                value: "429006"
            },
            {
                city: "省直辖县级行政区划",
                text: "神农架林区",
                value: "429021"
            }],
            430100 : [{
                city: "长沙市",
                text: "市辖区",
                value: "430101"
            },
            {
                city: "长沙市",
                text: "芙蓉区",
                value: "430102"
            },
            {
                city: "长沙市",
                text: "天心区",
                value: "430103"
            },
            {
                city: "长沙市",
                text: "岳麓区",
                value: "430104"
            },
            {
                city: "长沙市",
                text: "开福区",
                value: "430105"
            },
            {
                city: "长沙市",
                text: "雨花区",
                value: "430111"
            },
            {
                city: "长沙市",
                text: "望城区",
                value: "430112"
            },
            {
                city: "长沙市",
                text: "长沙县",
                value: "430121"
            },
            {
                city: "长沙市",
                text: "宁乡县",
                value: "430124"
            },
            {
                city: "长沙市",
                text: "浏阳市",
                value: "430181"
            }],
            430200 : [{
                city: "株洲市",
                text: "市辖区",
                value: "430201"
            },
            {
                city: "株洲市",
                text: "荷塘区",
                value: "430202"
            },
            {
                city: "株洲市",
                text: "芦淞区",
                value: "430203"
            },
            {
                city: "株洲市",
                text: "石峰区",
                value: "430204"
            },
            {
                city: "株洲市",
                text: "天元区",
                value: "430211"
            },
            {
                city: "株洲市",
                text: "株洲县",
                value: "430221"
            },
            {
                city: "株洲市",
                text: "攸县",
                value: "430223"
            },
            {
                city: "株洲市",
                text: "茶陵县",
                value: "430224"
            },
            {
                city: "株洲市",
                text: "炎陵县",
                value: "430225"
            },
            {
                city: "株洲市",
                text: "醴陵市",
                value: "430281"
            }],
            430300 : [{
                city: "湘潭市",
                text: "市辖区",
                value: "430301"
            },
            {
                city: "湘潭市",
                text: "雨湖区",
                value: "430302"
            },
            {
                city: "湘潭市",
                text: "岳塘区",
                value: "430304"
            },
            {
                city: "湘潭市",
                text: "湘潭县",
                value: "430321"
            },
            {
                city: "湘潭市",
                text: "湘乡市",
                value: "430381"
            },
            {
                city: "湘潭市",
                text: "韶山市",
                value: "430382"
            }],
            430400 : [{
                city: "衡阳市",
                text: "市辖区",
                value: "430401"
            },
            {
                city: "衡阳市",
                text: "珠晖区",
                value: "430405"
            },
            {
                city: "衡阳市",
                text: "雁峰区",
                value: "430406"
            },
            {
                city: "衡阳市",
                text: "石鼓区",
                value: "430407"
            },
            {
                city: "衡阳市",
                text: "蒸湘区",
                value: "430408"
            },
            {
                city: "衡阳市",
                text: "南岳区",
                value: "430412"
            },
            {
                city: "衡阳市",
                text: "衡阳县",
                value: "430421"
            },
            {
                city: "衡阳市",
                text: "衡南县",
                value: "430422"
            },
            {
                city: "衡阳市",
                text: "衡山县",
                value: "430423"
            },
            {
                city: "衡阳市",
                text: "衡东县",
                value: "430424"
            },
            {
                city: "衡阳市",
                text: "祁东县",
                value: "430426"
            },
            {
                city: "衡阳市",
                text: "耒阳市",
                value: "430481"
            },
            {
                city: "衡阳市",
                text: "常宁市",
                value: "430482"
            }],
            430500 : [{
                city: "邵阳市",
                text: "市辖区",
                value: "430501"
            },
            {
                city: "邵阳市",
                text: "双清区",
                value: "430502"
            },
            {
                city: "邵阳市",
                text: "大祥区",
                value: "430503"
            },
            {
                city: "邵阳市",
                text: "北塔区",
                value: "430511"
            },
            {
                city: "邵阳市",
                text: "邵东县",
                value: "430521"
            },
            {
                city: "邵阳市",
                text: "新邵县",
                value: "430522"
            },
            {
                city: "邵阳市",
                text: "邵阳县",
                value: "430523"
            },
            {
                city: "邵阳市",
                text: "隆回县",
                value: "430524"
            },
            {
                city: "邵阳市",
                text: "洞口县",
                value: "430525"
            },
            {
                city: "邵阳市",
                text: "绥宁县",
                value: "430527"
            },
            {
                city: "邵阳市",
                text: "新宁县",
                value: "430528"
            },
            {
                city: "邵阳市",
                text: "城步苗族自治县",
                value: "430529"
            },
            {
                city: "邵阳市",
                text: "武冈市",
                value: "430581"
            }],
            430600 : [{
                city: "岳阳市",
                text: "市辖区",
                value: "430601"
            },
            {
                city: "岳阳市",
                text: "岳阳楼区",
                value: "430602"
            },
            {
                city: "岳阳市",
                text: "云溪区",
                value: "430603"
            },
            {
                city: "岳阳市",
                text: "君山区",
                value: "430611"
            },
            {
                city: "岳阳市",
                text: "岳阳县",
                value: "430621"
            },
            {
                city: "岳阳市",
                text: "华容县",
                value: "430623"
            },
            {
                city: "岳阳市",
                text: "湘阴县",
                value: "430624"
            },
            {
                city: "岳阳市",
                text: "平江县",
                value: "430626"
            },
            {
                city: "岳阳市",
                text: "汨罗市",
                value: "430681"
            },
            {
                city: "岳阳市",
                text: "临湘市",
                value: "430682"
            }],
            430700 : [{
                city: "常德市",
                text: "市辖区",
                value: "430701"
            },
            {
                city: "常德市",
                text: "武陵区",
                value: "430702"
            },
            {
                city: "常德市",
                text: "鼎城区",
                value: "430703"
            },
            {
                city: "常德市",
                text: "安乡县",
                value: "430721"
            },
            {
                city: "常德市",
                text: "汉寿县",
                value: "430722"
            },
            {
                city: "常德市",
                text: "澧县",
                value: "430723"
            },
            {
                city: "常德市",
                text: "临澧县",
                value: "430724"
            },
            {
                city: "常德市",
                text: "桃源县",
                value: "430725"
            },
            {
                city: "常德市",
                text: "石门县",
                value: "430726"
            },
            {
                city: "常德市",
                text: "津市市",
                value: "430781"
            }],
            430800 : [{
                city: "张家界市",
                text: "市辖区",
                value: "430801"
            },
            {
                city: "张家界市",
                text: "永定区",
                value: "430802"
            },
            {
                city: "张家界市",
                text: "武陵源区",
                value: "430811"
            },
            {
                city: "张家界市",
                text: "慈利县",
                value: "430821"
            },
            {
                city: "张家界市",
                text: "桑植县",
                value: "430822"
            }],
            430900 : [{
                city: "益阳市",
                text: "市辖区",
                value: "430901"
            },
            {
                city: "益阳市",
                text: "资阳区",
                value: "430902"
            },
            {
                city: "益阳市",
                text: "赫山区",
                value: "430903"
            },
            {
                city: "益阳市",
                text: "南县",
                value: "430921"
            },
            {
                city: "益阳市",
                text: "桃江县",
                value: "430922"
            },
            {
                city: "益阳市",
                text: "安化县",
                value: "430923"
            },
            {
                city: "益阳市",
                text: "沅江市",
                value: "430981"
            }],
            431000 : [{
                city: "郴州市",
                text: "市辖区",
                value: "431001"
            },
            {
                city: "郴州市",
                text: "北湖区",
                value: "431002"
            },
            {
                city: "郴州市",
                text: "苏仙区",
                value: "431003"
            },
            {
                city: "郴州市",
                text: "桂阳县",
                value: "431021"
            },
            {
                city: "郴州市",
                text: "宜章县",
                value: "431022"
            },
            {
                city: "郴州市",
                text: "永兴县",
                value: "431023"
            },
            {
                city: "郴州市",
                text: "嘉禾县",
                value: "431024"
            },
            {
                city: "郴州市",
                text: "临武县",
                value: "431025"
            },
            {
                city: "郴州市",
                text: "汝城县",
                value: "431026"
            },
            {
                city: "郴州市",
                text: "桂东县",
                value: "431027"
            },
            {
                city: "郴州市",
                text: "安仁县",
                value: "431028"
            },
            {
                city: "郴州市",
                text: "资兴市",
                value: "431081"
            }],
            431100 : [{
                city: "永州市",
                text: "市辖区",
                value: "431101"
            },
            {
                city: "永州市",
                text: "零陵区",
                value: "431102"
            },
            {
                city: "永州市",
                text: "冷水滩区",
                value: "431103"
            },
            {
                city: "永州市",
                text: "祁阳县",
                value: "431121"
            },
            {
                city: "永州市",
                text: "东安县",
                value: "431122"
            },
            {
                city: "永州市",
                text: "双牌县",
                value: "431123"
            },
            {
                city: "永州市",
                text: "道县",
                value: "431124"
            },
            {
                city: "永州市",
                text: "江永县",
                value: "431125"
            },
            {
                city: "永州市",
                text: "宁远县",
                value: "431126"
            },
            {
                city: "永州市",
                text: "蓝山县",
                value: "431127"
            },
            {
                city: "永州市",
                text: "新田县",
                value: "431128"
            },
            {
                city: "永州市",
                text: "江华瑶族自治县",
                value: "431129"
            }],
            431200 : [{
                city: "怀化市",
                text: "市辖区",
                value: "431201"
            },
            {
                city: "怀化市",
                text: "鹤城区",
                value: "431202"
            },
            {
                city: "怀化市",
                text: "中方县",
                value: "431221"
            },
            {
                city: "怀化市",
                text: "沅陵县",
                value: "431222"
            },
            {
                city: "怀化市",
                text: "辰溪县",
                value: "431223"
            },
            {
                city: "怀化市",
                text: "溆浦县",
                value: "431224"
            },
            {
                city: "怀化市",
                text: "会同县",
                value: "431225"
            },
            {
                city: "怀化市",
                text: "麻阳苗族自治县",
                value: "431226"
            },
            {
                city: "怀化市",
                text: "新晃侗族自治县",
                value: "431227"
            },
            {
                city: "怀化市",
                text: "芷江侗族自治县",
                value: "431228"
            },
            {
                city: "怀化市",
                text: "靖州苗族侗族自治县",
                value: "431229"
            },
            {
                city: "怀化市",
                text: "通道侗族自治县",
                value: "431230"
            },
            {
                city: "怀化市",
                text: "洪江市",
                value: "431281"
            }],
            431300 : [{
                city: "娄底市",
                text: "市辖区",
                value: "431301"
            },
            {
                city: "娄底市",
                text: "娄星区",
                value: "431302"
            },
            {
                city: "娄底市",
                text: "双峰县",
                value: "431321"
            },
            {
                city: "娄底市",
                text: "新化县",
                value: "431322"
            },
            {
                city: "娄底市",
                text: "冷水江市",
                value: "431381"
            },
            {
                city: "娄底市",
                text: "涟源市",
                value: "431382"
            }],
            433100 : [{
                city: "湘西土家族苗族自治州",
                text: "吉首市",
                value: "433101"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "泸溪县",
                value: "433122"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "凤凰县",
                value: "433123"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "花垣县",
                value: "433124"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "保靖县",
                value: "433125"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "古丈县",
                value: "433126"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "永顺县",
                value: "433127"
            },
            {
                city: "湘西土家族苗族自治州",
                text: "龙山县",
                value: "433130"
            }],
            440100 : [{
                city: "广州市",
                text: "市辖区",
                value: "440101"
            },
            {
                city: "广州市",
                text: "荔湾区",
                value: "440103"
            },
            {
                city: "广州市",
                text: "越秀区",
                value: "440104"
            },
            {
                city: "广州市",
                text: "海珠区",
                value: "440105"
            },
            {
                city: "广州市",
                text: "天河区",
                value: "440106"
            },
            {
                city: "广州市",
                text: "白云区",
                value: "440111"
            },
            {
                city: "广州市",
                text: "黄埔区",
                value: "440112"
            },
            {
                city: "广州市",
                text: "番禺区",
                value: "440113"
            },
            {
                city: "广州市",
                text: "花都区",
                value: "440114"
            },
            {
                city: "广州市",
                text: "南沙区",
                value: "440115"
            },
            {
                city: "广州市",
                text: "从化区",
                value: "440117"
            },
            {
                city: "广州市",
                text: "增城区",
                value: "440118"
            }],
            440200 : [{
                city: "韶关市",
                text: "市辖区",
                value: "440201"
            },
            {
                city: "韶关市",
                text: "武江区",
                value: "440203"
            },
            {
                city: "韶关市",
                text: "浈江区",
                value: "440204"
            },
            {
                city: "韶关市",
                text: "曲江区",
                value: "440205"
            },
            {
                city: "韶关市",
                text: "始兴县",
                value: "440222"
            },
            {
                city: "韶关市",
                text: "仁化县",
                value: "440224"
            },
            {
                city: "韶关市",
                text: "翁源县",
                value: "440229"
            },
            {
                city: "韶关市",
                text: "乳源瑶族自治县",
                value: "440232"
            },
            {
                city: "韶关市",
                text: "新丰县",
                value: "440233"
            },
            {
                city: "韶关市",
                text: "乐昌市",
                value: "440281"
            },
            {
                city: "韶关市",
                text: "南雄市",
                value: "440282"
            }],
            440300 : [{
                city: "深圳市",
                text: "市辖区",
                value: "440301"
            },
            {
                city: "深圳市",
                text: "罗湖区",
                value: "440303"
            },
            {
                city: "深圳市",
                text: "福田区",
                value: "440304"
            },
            {
                city: "深圳市",
                text: "南山区",
                value: "440305"
            },
            {
                city: "深圳市",
                text: "宝安区",
                value: "440306"
            },
            {
                city: "深圳市",
                text: "龙岗区",
                value: "440307"
            },
            {
                city: "深圳市",
                text: "盐田区",
                value: "440308"
            }],
            440400 : [{
                city: "珠海市",
                text: "市辖区",
                value: "440401"
            },
            {
                city: "珠海市",
                text: "香洲区",
                value: "440402"
            },
            {
                city: "珠海市",
                text: "斗门区",
                value: "440403"
            },
            {
                city: "珠海市",
                text: "金湾区",
                value: "440404"
            }],
            440500 : [{
                city: "汕头市",
                text: "市辖区",
                value: "440501"
            },
            {
                city: "汕头市",
                text: "龙湖区",
                value: "440507"
            },
            {
                city: "汕头市",
                text: "金平区",
                value: "440511"
            },
            {
                city: "汕头市",
                text: "濠江区",
                value: "440512"
            },
            {
                city: "汕头市",
                text: "潮阳区",
                value: "440513"
            },
            {
                city: "汕头市",
                text: "潮南区",
                value: "440514"
            },
            {
                city: "汕头市",
                text: "澄海区",
                value: "440515"
            },
            {
                city: "汕头市",
                text: "南澳县",
                value: "440523"
            }],
            440600 : [{
                city: "佛山市",
                text: "市辖区",
                value: "440601"
            },
            {
                city: "佛山市",
                text: "禅城区",
                value: "440604"
            },
            {
                city: "佛山市",
                text: "南海区",
                value: "440605"
            },
            {
                city: "佛山市",
                text: "顺德区",
                value: "440606"
            },
            {
                city: "佛山市",
                text: "三水区",
                value: "440607"
            },
            {
                city: "佛山市",
                text: "高明区",
                value: "440608"
            }],
            440700 : [{
                city: "江门市",
                text: "市辖区",
                value: "440701"
            },
            {
                city: "江门市",
                text: "蓬江区",
                value: "440703"
            },
            {
                city: "江门市",
                text: "江海区",
                value: "440704"
            },
            {
                city: "江门市",
                text: "新会区",
                value: "440705"
            },
            {
                city: "江门市",
                text: "台山市",
                value: "440781"
            },
            {
                city: "江门市",
                text: "开平市",
                value: "440783"
            },
            {
                city: "江门市",
                text: "鹤山市",
                value: "440784"
            },
            {
                city: "江门市",
                text: "恩平市",
                value: "440785"
            }],
            440800 : [{
                city: "湛江市",
                text: "市辖区",
                value: "440801"
            },
            {
                city: "湛江市",
                text: "赤坎区",
                value: "440802"
            },
            {
                city: "湛江市",
                text: "霞山区",
                value: "440803"
            },
            {
                city: "湛江市",
                text: "坡头区",
                value: "440804"
            },
            {
                city: "湛江市",
                text: "麻章区",
                value: "440811"
            },
            {
                city: "湛江市",
                text: "遂溪县",
                value: "440823"
            },
            {
                city: "湛江市",
                text: "徐闻县",
                value: "440825"
            },
            {
                city: "湛江市",
                text: "廉江市",
                value: "440881"
            },
            {
                city: "湛江市",
                text: "雷州市",
                value: "440882"
            },
            {
                city: "湛江市",
                text: "吴川市",
                value: "440883"
            }],
            440900 : [{
                city: "茂名市",
                text: "市辖区",
                value: "440901"
            },
            {
                city: "茂名市",
                text: "茂南区",
                value: "440902"
            },
            {
                city: "茂名市",
                text: "电白区",
                value: "440904"
            },
            {
                city: "茂名市",
                text: "高州市",
                value: "440981"
            },
            {
                city: "茂名市",
                text: "化州市",
                value: "440982"
            },
            {
                city: "茂名市",
                text: "信宜市",
                value: "440983"
            }],
            441200 : [{
                city: "肇庆市",
                text: "市辖区",
                value: "441201"
            },
            {
                city: "肇庆市",
                text: "端州区",
                value: "441202"
            },
            {
                city: "肇庆市",
                text: "鼎湖区",
                value: "441203"
            },
            {
                city: "肇庆市",
                text: "高要区",
                value: "441204"
            },
            {
                city: "肇庆市",
                text: "广宁县",
                value: "441223"
            },
            {
                city: "肇庆市",
                text: "怀集县",
                value: "441224"
            },
            {
                city: "肇庆市",
                text: "封开县",
                value: "441225"
            },
            {
                city: "肇庆市",
                text: "德庆县",
                value: "441226"
            },
            {
                city: "肇庆市",
                text: "四会市",
                value: "441284"
            }],
            441300 : [{
                city: "惠州市",
                text: "市辖区",
                value: "441301"
            },
            {
                city: "惠州市",
                text: "惠城区",
                value: "441302"
            },
            {
                city: "惠州市",
                text: "惠阳区",
                value: "441303"
            },
            {
                city: "惠州市",
                text: "博罗县",
                value: "441322"
            },
            {
                city: "惠州市",
                text: "惠东县",
                value: "441323"
            },
            {
                city: "惠州市",
                text: "龙门县",
                value: "441324"
            }],
            441400 : [{
                city: "梅州市",
                text: "市辖区",
                value: "441401"
            },
            {
                city: "梅州市",
                text: "梅江区",
                value: "441402"
            },
            {
                city: "梅州市",
                text: "梅县区",
                value: "441403"
            },
            {
                city: "梅州市",
                text: "大埔县",
                value: "441422"
            },
            {
                city: "梅州市",
                text: "丰顺县",
                value: "441423"
            },
            {
                city: "梅州市",
                text: "五华县",
                value: "441424"
            },
            {
                city: "梅州市",
                text: "平远县",
                value: "441426"
            },
            {
                city: "梅州市",
                text: "蕉岭县",
                value: "441427"
            },
            {
                city: "梅州市",
                text: "兴宁市",
                value: "441481"
            }],
            441500 : [{
                city: "汕尾市",
                text: "市辖区",
                value: "441501"
            },
            {
                city: "汕尾市",
                text: "城区",
                value: "441502"
            },
            {
                city: "汕尾市",
                text: "海丰县",
                value: "441521"
            },
            {
                city: "汕尾市",
                text: "陆河县",
                value: "441523"
            },
            {
                city: "汕尾市",
                text: "陆丰市",
                value: "441581"
            }],
            441600 : [{
                city: "河源市",
                text: "市辖区",
                value: "441601"
            },
            {
                city: "河源市",
                text: "源城区",
                value: "441602"
            },
            {
                city: "河源市",
                text: "紫金县",
                value: "441621"
            },
            {
                city: "河源市",
                text: "龙川县",
                value: "441622"
            },
            {
                city: "河源市",
                text: "连平县",
                value: "441623"
            },
            {
                city: "河源市",
                text: "和平县",
                value: "441624"
            },
            {
                city: "河源市",
                text: "东源县",
                value: "441625"
            }],
            441700 : [{
                city: "阳江市",
                text: "市辖区",
                value: "441701"
            },
            {
                city: "阳江市",
                text: "江城区",
                value: "441702"
            },
            {
                city: "阳江市",
                text: "阳东区",
                value: "441704"
            },
            {
                city: "阳江市",
                text: "阳西县",
                value: "441721"
            },
            {
                city: "阳江市",
                text: "阳春市",
                value: "441781"
            }],
            441800 : [{
                city: "清远市",
                text: "市辖区",
                value: "441801"
            },
            {
                city: "清远市",
                text: "清城区",
                value: "441802"
            },
            {
                city: "清远市",
                text: "清新区",
                value: "441803"
            },
            {
                city: "清远市",
                text: "佛冈县",
                value: "441821"
            },
            {
                city: "清远市",
                text: "阳山县",
                value: "441823"
            },
            {
                city: "清远市",
                text: "连山壮族瑶族自治县",
                value: "441825"
            },
            {
                city: "清远市",
                text: "连南瑶族自治县",
                value: "441826"
            },
            {
                city: "清远市",
                text: "英德市",
                value: "441881"
            },
            {
                city: "清远市",
                text: "连州市",
                value: "441882"
            }],
            441900 : [],
            442000 : [],
            445100 : [{
                city: "潮州市",
                text: "市辖区",
                value: "445101"
            },
            {
                city: "潮州市",
                text: "湘桥区",
                value: "445102"
            },
            {
                city: "潮州市",
                text: "潮安区",
                value: "445103"
            },
            {
                city: "潮州市",
                text: "饶平县",
                value: "445122"
            }],
            445200 : [{
                city: "揭阳市",
                text: "市辖区",
                value: "445201"
            },
            {
                city: "揭阳市",
                text: "榕城区",
                value: "445202"
            },
            {
                city: "揭阳市",
                text: "揭东区",
                value: "445203"
            },
            {
                city: "揭阳市",
                text: "揭西县",
                value: "445222"
            },
            {
                city: "揭阳市",
                text: "惠来县",
                value: "445224"
            },
            {
                city: "揭阳市",
                text: "普宁市",
                value: "445281"
            }],
            445300 : [{
                city: "云浮市",
                text: "市辖区",
                value: "445301"
            },
            {
                city: "云浮市",
                text: "云城区",
                value: "445302"
            },
            {
                city: "云浮市",
                text: "云安区",
                value: "445303"
            },
            {
                city: "云浮市",
                text: "新兴县",
                value: "445321"
            },
            {
                city: "云浮市",
                text: "郁南县",
                value: "445322"
            },
            {
                city: "云浮市",
                text: "罗定市",
                value: "445381"
            }],
            450100 : [{
                city: "南宁市",
                text: "市辖区",
                value: "450101"
            },
            {
                city: "南宁市",
                text: "兴宁区",
                value: "450102"
            },
            {
                city: "南宁市",
                text: "青秀区",
                value: "450103"
            },
            {
                city: "南宁市",
                text: "江南区",
                value: "450105"
            },
            {
                city: "南宁市",
                text: "西乡塘区",
                value: "450107"
            },
            {
                city: "南宁市",
                text: "良庆区",
                value: "450108"
            },
            {
                city: "南宁市",
                text: "邕宁区",
                value: "450109"
            },
            {
                city: "南宁市",
                text: "武鸣区",
                value: "450110"
            },
            {
                city: "南宁市",
                text: "隆安县",
                value: "450123"
            },
            {
                city: "南宁市",
                text: "马山县",
                value: "450124"
            },
            {
                city: "南宁市",
                text: "上林县",
                value: "450125"
            },
            {
                city: "南宁市",
                text: "宾阳县",
                value: "450126"
            },
            {
                city: "南宁市",
                text: "横县",
                value: "450127"
            }],
            450200 : [{
                city: "柳州市",
                text: "市辖区",
                value: "450201"
            },
            {
                city: "柳州市",
                text: "城中区",
                value: "450202"
            },
            {
                city: "柳州市",
                text: "鱼峰区",
                value: "450203"
            },
            {
                city: "柳州市",
                text: "柳南区",
                value: "450204"
            },
            {
                city: "柳州市",
                text: "柳北区",
                value: "450205"
            },
            {
                city: "柳州市",
                text: "柳江区",
                value: "450206"
            },
            {
                city: "柳州市",
                text: "柳城县",
                value: "450222"
            },
            {
                city: "柳州市",
                text: "鹿寨县",
                value: "450223"
            },
            {
                city: "柳州市",
                text: "融安县",
                value: "450224"
            },
            {
                city: "柳州市",
                text: "融水苗族自治县",
                value: "450225"
            },
            {
                city: "柳州市",
                text: "三江侗族自治县",
                value: "450226"
            }],
            450300 : [{
                city: "桂林市",
                text: "市辖区",
                value: "450301"
            },
            {
                city: "桂林市",
                text: "秀峰区",
                value: "450302"
            },
            {
                city: "桂林市",
                text: "叠彩区",
                value: "450303"
            },
            {
                city: "桂林市",
                text: "象山区",
                value: "450304"
            },
            {
                city: "桂林市",
                text: "七星区",
                value: "450305"
            },
            {
                city: "桂林市",
                text: "雁山区",
                value: "450311"
            },
            {
                city: "桂林市",
                text: "临桂区",
                value: "450312"
            },
            {
                city: "桂林市",
                text: "阳朔县",
                value: "450321"
            },
            {
                city: "桂林市",
                text: "灵川县",
                value: "450323"
            },
            {
                city: "桂林市",
                text: "全州县",
                value: "450324"
            },
            {
                city: "桂林市",
                text: "兴安县",
                value: "450325"
            },
            {
                city: "桂林市",
                text: "永福县",
                value: "450326"
            },
            {
                city: "桂林市",
                text: "灌阳县",
                value: "450327"
            },
            {
                city: "桂林市",
                text: "龙胜各族自治县",
                value: "450328"
            },
            {
                city: "桂林市",
                text: "资源县",
                value: "450329"
            },
            {
                city: "桂林市",
                text: "平乐县",
                value: "450330"
            },
            {
                city: "桂林市",
                text: "荔浦县",
                value: "450331"
            },
            {
                city: "桂林市",
                text: "恭城瑶族自治县",
                value: "450332"
            }],
            450400 : [{
                city: "梧州市",
                text: "市辖区",
                value: "450401"
            },
            {
                city: "梧州市",
                text: "万秀区",
                value: "450403"
            },
            {
                city: "梧州市",
                text: "长洲区",
                value: "450405"
            },
            {
                city: "梧州市",
                text: "龙圩区",
                value: "450406"
            },
            {
                city: "梧州市",
                text: "苍梧县",
                value: "450421"
            },
            {
                city: "梧州市",
                text: "藤县",
                value: "450422"
            },
            {
                city: "梧州市",
                text: "蒙山县",
                value: "450423"
            },
            {
                city: "梧州市",
                text: "岑溪市",
                value: "450481"
            }],
            450500 : [{
                city: "北海市",
                text: "市辖区",
                value: "450501"
            },
            {
                city: "北海市",
                text: "海城区",
                value: "450502"
            },
            {
                city: "北海市",
                text: "银海区",
                value: "450503"
            },
            {
                city: "北海市",
                text: "铁山港区",
                value: "450512"
            },
            {
                city: "北海市",
                text: "合浦县",
                value: "450521"
            }],
            450600 : [{
                city: "防城港市",
                text: "市辖区",
                value: "450601"
            },
            {
                city: "防城港市",
                text: "港口区",
                value: "450602"
            },
            {
                city: "防城港市",
                text: "防城区",
                value: "450603"
            },
            {
                city: "防城港市",
                text: "上思县",
                value: "450621"
            },
            {
                city: "防城港市",
                text: "东兴市",
                value: "450681"
            }],
            450700 : [{
                city: "钦州市",
                text: "市辖区",
                value: "450701"
            },
            {
                city: "钦州市",
                text: "钦南区",
                value: "450702"
            },
            {
                city: "钦州市",
                text: "钦北区",
                value: "450703"
            },
            {
                city: "钦州市",
                text: "灵山县",
                value: "450721"
            },
            {
                city: "钦州市",
                text: "浦北县",
                value: "450722"
            }],
            450800 : [{
                city: "贵港市",
                text: "市辖区",
                value: "450801"
            },
            {
                city: "贵港市",
                text: "港北区",
                value: "450802"
            },
            {
                city: "贵港市",
                text: "港南区",
                value: "450803"
            },
            {
                city: "贵港市",
                text: "覃塘区",
                value: "450804"
            },
            {
                city: "贵港市",
                text: "平南县",
                value: "450821"
            },
            {
                city: "贵港市",
                text: "桂平市",
                value: "450881"
            }],
            450900 : [{
                city: "玉林市",
                text: "市辖区",
                value: "450901"
            },
            {
                city: "玉林市",
                text: "玉州区",
                value: "450902"
            },
            {
                city: "玉林市",
                text: "福绵区",
                value: "450903"
            },
            {
                city: "玉林市",
                text: "容县",
                value: "450921"
            },
            {
                city: "玉林市",
                text: "陆川县",
                value: "450922"
            },
            {
                city: "玉林市",
                text: "博白县",
                value: "450923"
            },
            {
                city: "玉林市",
                text: "兴业县",
                value: "450924"
            },
            {
                city: "玉林市",
                text: "北流市",
                value: "450981"
            }],
            451000 : [{
                city: "百色市",
                text: "市辖区",
                value: "451001"
            },
            {
                city: "百色市",
                text: "右江区",
                value: "451002"
            },
            {
                city: "百色市",
                text: "田阳县",
                value: "451021"
            },
            {
                city: "百色市",
                text: "田东县",
                value: "451022"
            },
            {
                city: "百色市",
                text: "平果县",
                value: "451023"
            },
            {
                city: "百色市",
                text: "德保县",
                value: "451024"
            },
            {
                city: "百色市",
                text: "那坡县",
                value: "451026"
            },
            {
                city: "百色市",
                text: "凌云县",
                value: "451027"
            },
            {
                city: "百色市",
                text: "乐业县",
                value: "451028"
            },
            {
                city: "百色市",
                text: "田林县",
                value: "451029"
            },
            {
                city: "百色市",
                text: "西林县",
                value: "451030"
            },
            {
                city: "百色市",
                text: "隆林各族自治县",
                value: "451031"
            },
            {
                city: "百色市",
                text: "靖西市",
                value: "451081"
            }],
            451100 : [{
                city: "贺州市",
                text: "市辖区",
                value: "451101"
            },
            {
                city: "贺州市",
                text: "八步区",
                value: "451102"
            },
            {
                city: "贺州市",
                text: "平桂区",
                value: "451103"
            },
            {
                city: "贺州市",
                text: "昭平县",
                value: "451121"
            },
            {
                city: "贺州市",
                text: "钟山县",
                value: "451122"
            },
            {
                city: "贺州市",
                text: "富川瑶族自治县",
                value: "451123"
            }],
            451200 : [{
                city: "河池市",
                text: "市辖区",
                value: "451201"
            },
            {
                city: "河池市",
                text: "金城江区",
                value: "451202"
            },
            {
                city: "河池市",
                text: "南丹县",
                value: "451221"
            },
            {
                city: "河池市",
                text: "天峨县",
                value: "451222"
            },
            {
                city: "河池市",
                text: "凤山县",
                value: "451223"
            },
            {
                city: "河池市",
                text: "东兰县",
                value: "451224"
            },
            {
                city: "河池市",
                text: "罗城仫佬族自治县",
                value: "451225"
            },
            {
                city: "河池市",
                text: "环江毛南族自治县",
                value: "451226"
            },
            {
                city: "河池市",
                text: "巴马瑶族自治县",
                value: "451227"
            },
            {
                city: "河池市",
                text: "都安瑶族自治县",
                value: "451228"
            },
            {
                city: "河池市",
                text: "大化瑶族自治县",
                value: "451229"
            },
            {
                city: "河池市",
                text: "宜州市",
                value: "451281"
            }],
            451300 : [{
                city: "来宾市",
                text: "市辖区",
                value: "451301"
            },
            {
                city: "来宾市",
                text: "兴宾区",
                value: "451302"
            },
            {
                city: "来宾市",
                text: "忻城县",
                value: "451321"
            },
            {
                city: "来宾市",
                text: "象州县",
                value: "451322"
            },
            {
                city: "来宾市",
                text: "武宣县",
                value: "451323"
            },
            {
                city: "来宾市",
                text: "金秀瑶族自治县",
                value: "451324"
            },
            {
                city: "来宾市",
                text: "合山市",
                value: "451381"
            }],
            451400 : [{
                city: "崇左市",
                text: "市辖区",
                value: "451401"
            },
            {
                city: "崇左市",
                text: "江州区",
                value: "451402"
            },
            {
                city: "崇左市",
                text: "扶绥县",
                value: "451421"
            },
            {
                city: "崇左市",
                text: "宁明县",
                value: "451422"
            },
            {
                city: "崇左市",
                text: "龙州县",
                value: "451423"
            },
            {
                city: "崇左市",
                text: "大新县",
                value: "451424"
            },
            {
                city: "崇左市",
                text: "天等县",
                value: "451425"
            },
            {
                city: "崇左市",
                text: "凭祥市",
                value: "451481"
            }],
            460100 : [{
                city: "海口市",
                text: "市辖区",
                value: "460101"
            },
            {
                city: "海口市",
                text: "秀英区",
                value: "460105"
            },
            {
                city: "海口市",
                text: "龙华区",
                value: "460106"
            },
            {
                city: "海口市",
                text: "琼山区",
                value: "460107"
            },
            {
                city: "海口市",
                text: "美兰区",
                value: "460108"
            }],
            460200 : [{
                city: "三亚市",
                text: "市辖区",
                value: "460201"
            },
            {
                city: "三亚市",
                text: "海棠区",
                value: "460202"
            },
            {
                city: "三亚市",
                text: "吉阳区",
                value: "460203"
            },
            {
                city: "三亚市",
                text: "天涯区",
                value: "460204"
            },
            {
                city: "三亚市",
                text: "崖州区",
                value: "460205"
            }],
            460300 : [],
            460400 : [],
            469000 : [{
                city: "省直辖县级行政区划",
                text: "五指山市",
                value: "469001"
            },
            {
                city: "省直辖县级行政区划",
                text: "琼海市",
                value: "469002"
            },
            {
                city: "省直辖县级行政区划",
                text: "文昌市",
                value: "469005"
            },
            {
                city: "省直辖县级行政区划",
                text: "万宁市",
                value: "469006"
            },
            {
                city: "省直辖县级行政区划",
                text: "东方市",
                value: "469007"
            },
            {
                city: "省直辖县级行政区划",
                text: "定安县",
                value: "469021"
            },
            {
                city: "省直辖县级行政区划",
                text: "屯昌县",
                value: "469022"
            },
            {
                city: "省直辖县级行政区划",
                text: "澄迈县",
                value: "469023"
            },
            {
                city: "省直辖县级行政区划",
                text: "临高县",
                value: "469024"
            },
            {
                city: "省直辖县级行政区划",
                text: "白沙黎族自治县",
                value: "469025"
            },
            {
                city: "省直辖县级行政区划",
                text: "昌江黎族自治县",
                value: "469026"
            },
            {
                city: "省直辖县级行政区划",
                text: "乐东黎族自治县",
                value: "469027"
            },
            {
                city: "省直辖县级行政区划",
                text: "陵水黎族自治县",
                value: "469028"
            },
            {
                city: "省直辖县级行政区划",
                text: "保亭黎族苗族自治县",
                value: "469029"
            },
            {
                city: "省直辖县级行政区划",
                text: "琼中黎族苗族自治县",
                value: "469030"
            }],
            500100 : [{
                city: "市辖区",
                text: "万州区",
                value: "500101"
            },
            {
                city: "市辖区",
                text: "涪陵区",
                value: "500102"
            },
            {
                city: "市辖区",
                text: "渝中区",
                value: "500103"
            },
            {
                city: "市辖区",
                text: "大渡口区",
                value: "500104"
            },
            {
                city: "市辖区",
                text: "江北区",
                value: "500105"
            },
            {
                city: "市辖区",
                text: "沙坪坝区",
                value: "500106"
            },
            {
                city: "市辖区",
                text: "九龙坡区",
                value: "500107"
            },
            {
                city: "市辖区",
                text: "南岸区",
                value: "500108"
            },
            {
                city: "市辖区",
                text: "北碚区",
                value: "500109"
            },
            {
                city: "市辖区",
                text: "綦江区",
                value: "500110"
            },
            {
                city: "市辖区",
                text: "大足区",
                value: "500111"
            },
            {
                city: "市辖区",
                text: "渝北区",
                value: "500112"
            },
            {
                city: "市辖区",
                text: "巴南区",
                value: "500113"
            },
            {
                city: "市辖区",
                text: "黔江区",
                value: "500114"
            },
            {
                city: "市辖区",
                text: "长寿区",
                value: "500115"
            },
            {
                city: "市辖区",
                text: "江津区",
                value: "500116"
            },
            {
                city: "市辖区",
                text: "合川区",
                value: "500117"
            },
            {
                city: "市辖区",
                text: "永川区",
                value: "500118"
            },
            {
                city: "市辖区",
                text: "南川区",
                value: "500119"
            },
            {
                city: "市辖区",
                text: "璧山区",
                value: "500120"
            },
            {
                city: "市辖区",
                text: "铜梁区",
                value: "500151"
            },
            {
                city: "市辖区",
                text: "潼南区",
                value: "500152"
            },
            {
                city: "市辖区",
                text: "荣昌区",
                value: "500153"
            },
            {
                city: "市辖区",
                text: "开州区",
                value: "500154"
            }],
            500200 : [{
                city: "县",
                text: "梁平县",
                value: "500228"
            },
            {
                city: "县",
                text: "城口县",
                value: "500229"
            },
            {
                city: "县",
                text: "丰都县",
                value: "500230"
            },
            {
                city: "县",
                text: "垫江县",
                value: "500231"
            },
            {
                city: "县",
                text: "武隆县",
                value: "500232"
            },
            {
                city: "县",
                text: "忠县",
                value: "500233"
            },
            {
                city: "县",
                text: "云阳县",
                value: "500235"
            },
            {
                city: "县",
                text: "奉节县",
                value: "500236"
            },
            {
                city: "县",
                text: "巫山县",
                value: "500237"
            },
            {
                city: "县",
                text: "巫溪县",
                value: "500238"
            },
            {
                city: "县",
                text: "石柱土家族自治县",
                value: "500240"
            },
            {
                city: "县",
                text: "秀山土家族苗族自治县",
                value: "500241"
            },
            {
                city: "县",
                text: "酉阳土家族苗族自治县",
                value: "500242"
            },
            {
                city: "县",
                text: "彭水苗族土家族自治县",
                value: "500243"
            }],
            510100 : [{
                city: "成都市",
                text: "市辖区",
                value: "510101"
            },
            {
                city: "成都市",
                text: "锦江区",
                value: "510104"
            },
            {
                city: "成都市",
                text: "青羊区",
                value: "510105"
            },
            {
                city: "成都市",
                text: "金牛区",
                value: "510106"
            },
            {
                city: "成都市",
                text: "武侯区",
                value: "510107"
            },
            {
                city: "成都市",
                text: "成华区",
                value: "510108"
            },
            {
                city: "成都市",
                text: "龙泉驿区",
                value: "510112"
            },
            {
                city: "成都市",
                text: "青白江区",
                value: "510113"
            },
            {
                city: "成都市",
                text: "新都区",
                value: "510114"
            },
            {
                city: "成都市",
                text: "温江区",
                value: "510115"
            },
            {
                city: "成都市",
                text: "双流区",
                value: "510116"
            },
            {
                city: "成都市",
                text: "金堂县",
                value: "510121"
            },
            {
                city: "成都市",
                text: "郫县",
                value: "510124"
            },
            {
                city: "成都市",
                text: "大邑县",
                value: "510129"
            },
            {
                city: "成都市",
                text: "蒲江县",
                value: "510131"
            },
            {
                city: "成都市",
                text: "新津县",
                value: "510132"
            },
            {
                city: "成都市",
                text: "都江堰市",
                value: "510181"
            },
            {
                city: "成都市",
                text: "彭州市",
                value: "510182"
            },
            {
                city: "成都市",
                text: "邛崃市",
                value: "510183"
            },
            {
                city: "成都市",
                text: "崇州市",
                value: "510184"
            },
            {
                city: "成都市",
                text: "简阳市",
                value: "510185"
            }],
            510300 : [{
                city: "自贡市",
                text: "市辖区",
                value: "510301"
            },
            {
                city: "自贡市",
                text: "自流井区",
                value: "510302"
            },
            {
                city: "自贡市",
                text: "贡井区",
                value: "510303"
            },
            {
                city: "自贡市",
                text: "大安区",
                value: "510304"
            },
            {
                city: "自贡市",
                text: "沿滩区",
                value: "510311"
            },
            {
                city: "自贡市",
                text: "荣县",
                value: "510321"
            },
            {
                city: "自贡市",
                text: "富顺县",
                value: "510322"
            }],
            510400 : [{
                city: "攀枝花市",
                text: "市辖区",
                value: "510401"
            },
            {
                city: "攀枝花市",
                text: "东区",
                value: "510402"
            },
            {
                city: "攀枝花市",
                text: "西区",
                value: "510403"
            },
            {
                city: "攀枝花市",
                text: "仁和区",
                value: "510411"
            },
            {
                city: "攀枝花市",
                text: "米易县",
                value: "510421"
            },
            {
                city: "攀枝花市",
                text: "盐边县",
                value: "510422"
            }],
            510500 : [{
                city: "泸州市",
                text: "市辖区",
                value: "510501"
            },
            {
                city: "泸州市",
                text: "江阳区",
                value: "510502"
            },
            {
                city: "泸州市",
                text: "纳溪区",
                value: "510503"
            },
            {
                city: "泸州市",
                text: "龙马潭区",
                value: "510504"
            },
            {
                city: "泸州市",
                text: "泸县",
                value: "510521"
            },
            {
                city: "泸州市",
                text: "合江县",
                value: "510522"
            },
            {
                city: "泸州市",
                text: "叙永县",
                value: "510524"
            },
            {
                city: "泸州市",
                text: "古蔺县",
                value: "510525"
            }],
            510600 : [{
                city: "德阳市",
                text: "市辖区",
                value: "510601"
            },
            {
                city: "德阳市",
                text: "旌阳区",
                value: "510603"
            },
            {
                city: "德阳市",
                text: "中江县",
                value: "510623"
            },
            {
                city: "德阳市",
                text: "罗江县",
                value: "510626"
            },
            {
                city: "德阳市",
                text: "广汉市",
                value: "510681"
            },
            {
                city: "德阳市",
                text: "什邡市",
                value: "510682"
            },
            {
                city: "德阳市",
                text: "绵竹市",
                value: "510683"
            }],
            510700 : [{
                city: "绵阳市",
                text: "市辖区",
                value: "510701"
            },
            {
                city: "绵阳市",
                text: "涪城区",
                value: "510703"
            },
            {
                city: "绵阳市",
                text: "游仙区",
                value: "510704"
            },
            {
                city: "绵阳市",
                text: "安州区",
                value: "510705"
            },
            {
                city: "绵阳市",
                text: "三台县",
                value: "510722"
            },
            {
                city: "绵阳市",
                text: "盐亭县",
                value: "510723"
            },
            {
                city: "绵阳市",
                text: "梓潼县",
                value: "510725"
            },
            {
                city: "绵阳市",
                text: "北川羌族自治县",
                value: "510726"
            },
            {
                city: "绵阳市",
                text: "平武县",
                value: "510727"
            },
            {
                city: "绵阳市",
                text: "江油市",
                value: "510781"
            }],
            510800 : [{
                city: "广元市",
                text: "市辖区",
                value: "510801"
            },
            {
                city: "广元市",
                text: "利州区",
                value: "510802"
            },
            {
                city: "广元市",
                text: "昭化区",
                value: "510811"
            },
            {
                city: "广元市",
                text: "朝天区",
                value: "510812"
            },
            {
                city: "广元市",
                text: "旺苍县",
                value: "510821"
            },
            {
                city: "广元市",
                text: "青川县",
                value: "510822"
            },
            {
                city: "广元市",
                text: "剑阁县",
                value: "510823"
            },
            {
                city: "广元市",
                text: "苍溪县",
                value: "510824"
            }],
            510900 : [{
                city: "遂宁市",
                text: "市辖区",
                value: "510901"
            },
            {
                city: "遂宁市",
                text: "船山区",
                value: "510903"
            },
            {
                city: "遂宁市",
                text: "安居区",
                value: "510904"
            },
            {
                city: "遂宁市",
                text: "蓬溪县",
                value: "510921"
            },
            {
                city: "遂宁市",
                text: "射洪县",
                value: "510922"
            },
            {
                city: "遂宁市",
                text: "大英县",
                value: "510923"
            }],
            511000 : [{
                city: "内江市",
                text: "市辖区",
                value: "511001"
            },
            {
                city: "内江市",
                text: "市中区",
                value: "511002"
            },
            {
                city: "内江市",
                text: "东兴区",
                value: "511011"
            },
            {
                city: "内江市",
                text: "威远县",
                value: "511024"
            },
            {
                city: "内江市",
                text: "资中县",
                value: "511025"
            },
            {
                city: "内江市",
                text: "隆昌县",
                value: "511028"
            }],
            511100 : [{
                city: "乐山市",
                text: "市辖区",
                value: "511101"
            },
            {
                city: "乐山市",
                text: "市中区",
                value: "511102"
            },
            {
                city: "乐山市",
                text: "沙湾区",
                value: "511111"
            },
            {
                city: "乐山市",
                text: "五通桥区",
                value: "511112"
            },
            {
                city: "乐山市",
                text: "金口河区",
                value: "511113"
            },
            {
                city: "乐山市",
                text: "犍为县",
                value: "511123"
            },
            {
                city: "乐山市",
                text: "井研县",
                value: "511124"
            },
            {
                city: "乐山市",
                text: "夹江县",
                value: "511126"
            },
            {
                city: "乐山市",
                text: "沐川县",
                value: "511129"
            },
            {
                city: "乐山市",
                text: "峨边彝族自治县",
                value: "511132"
            },
            {
                city: "乐山市",
                text: "马边彝族自治县",
                value: "511133"
            },
            {
                city: "乐山市",
                text: "峨眉山市",
                value: "511181"
            }],
            511300 : [{
                city: "南充市",
                text: "市辖区",
                value: "511301"
            },
            {
                city: "南充市",
                text: "顺庆区",
                value: "511302"
            },
            {
                city: "南充市",
                text: "高坪区",
                value: "511303"
            },
            {
                city: "南充市",
                text: "嘉陵区",
                value: "511304"
            },
            {
                city: "南充市",
                text: "南部县",
                value: "511321"
            },
            {
                city: "南充市",
                text: "营山县",
                value: "511322"
            },
            {
                city: "南充市",
                text: "蓬安县",
                value: "511323"
            },
            {
                city: "南充市",
                text: "仪陇县",
                value: "511324"
            },
            {
                city: "南充市",
                text: "西充县",
                value: "511325"
            },
            {
                city: "南充市",
                text: "阆中市",
                value: "511381"
            }],
            511400 : [{
                city: "眉山市",
                text: "市辖区",
                value: "511401"
            },
            {
                city: "眉山市",
                text: "东坡区",
                value: "511402"
            },
            {
                city: "眉山市",
                text: "彭山区",
                value: "511403"
            },
            {
                city: "眉山市",
                text: "仁寿县",
                value: "511421"
            },
            {
                city: "眉山市",
                text: "洪雅县",
                value: "511423"
            },
            {
                city: "眉山市",
                text: "丹棱县",
                value: "511424"
            },
            {
                city: "眉山市",
                text: "青神县",
                value: "511425"
            }],
            511500 : [{
                city: "宜宾市",
                text: "市辖区",
                value: "511501"
            },
            {
                city: "宜宾市",
                text: "翠屏区",
                value: "511502"
            },
            {
                city: "宜宾市",
                text: "南溪区",
                value: "511503"
            },
            {
                city: "宜宾市",
                text: "宜宾县",
                value: "511521"
            },
            {
                city: "宜宾市",
                text: "江安县",
                value: "511523"
            },
            {
                city: "宜宾市",
                text: "长宁县",
                value: "511524"
            },
            {
                city: "宜宾市",
                text: "高县",
                value: "511525"
            },
            {
                city: "宜宾市",
                text: "珙县",
                value: "511526"
            },
            {
                city: "宜宾市",
                text: "筠连县",
                value: "511527"
            },
            {
                city: "宜宾市",
                text: "兴文县",
                value: "511528"
            },
            {
                city: "宜宾市",
                text: "屏山县",
                value: "511529"
            }],
            511600 : [{
                city: "广安市",
                text: "市辖区",
                value: "511601"
            },
            {
                city: "广安市",
                text: "广安区",
                value: "511602"
            },
            {
                city: "广安市",
                text: "前锋区",
                value: "511603"
            },
            {
                city: "广安市",
                text: "岳池县",
                value: "511621"
            },
            {
                city: "广安市",
                text: "武胜县",
                value: "511622"
            },
            {
                city: "广安市",
                text: "邻水县",
                value: "511623"
            },
            {
                city: "广安市",
                text: "华蓥市",
                value: "511681"
            }],
            511700 : [{
                city: "达州市",
                text: "市辖区",
                value: "511701"
            },
            {
                city: "达州市",
                text: "通川区",
                value: "511702"
            },
            {
                city: "达州市",
                text: "达川区",
                value: "511703"
            },
            {
                city: "达州市",
                text: "宣汉县",
                value: "511722"
            },
            {
                city: "达州市",
                text: "开江县",
                value: "511723"
            },
            {
                city: "达州市",
                text: "大竹县",
                value: "511724"
            },
            {
                city: "达州市",
                text: "渠县",
                value: "511725"
            },
            {
                city: "达州市",
                text: "万源市",
                value: "511781"
            }],
            511800 : [{
                city: "雅安市",
                text: "市辖区",
                value: "511801"
            },
            {
                city: "雅安市",
                text: "雨城区",
                value: "511802"
            },
            {
                city: "雅安市",
                text: "名山区",
                value: "511803"
            },
            {
                city: "雅安市",
                text: "荥经县",
                value: "511822"
            },
            {
                city: "雅安市",
                text: "汉源县",
                value: "511823"
            },
            {
                city: "雅安市",
                text: "石棉县",
                value: "511824"
            },
            {
                city: "雅安市",
                text: "天全县",
                value: "511825"
            },
            {
                city: "雅安市",
                text: "芦山县",
                value: "511826"
            },
            {
                city: "雅安市",
                text: "宝兴县",
                value: "511827"
            }],
            511900 : [{
                city: "巴中市",
                text: "市辖区",
                value: "511901"
            },
            {
                city: "巴中市",
                text: "巴州区",
                value: "511902"
            },
            {
                city: "巴中市",
                text: "恩阳区",
                value: "511903"
            },
            {
                city: "巴中市",
                text: "通江县",
                value: "511921"
            },
            {
                city: "巴中市",
                text: "南江县",
                value: "511922"
            },
            {
                city: "巴中市",
                text: "平昌县",
                value: "511923"
            }],
            512000 : [{
                city: "资阳市",
                text: "市辖区",
                value: "512001"
            },
            {
                city: "资阳市",
                text: "雁江区",
                value: "512002"
            },
            {
                city: "资阳市",
                text: "安岳县",
                value: "512021"
            },
            {
                city: "资阳市",
                text: "乐至县",
                value: "512022"
            }],
            513200 : [{
                city: "阿坝藏族羌族自治州",
                text: "马尔康市",
                value: "513201"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "汶川县",
                value: "513221"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "理县",
                value: "513222"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "茂县",
                value: "513223"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "松潘县",
                value: "513224"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "九寨沟县",
                value: "513225"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "金川县",
                value: "513226"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "小金县",
                value: "513227"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "黑水县",
                value: "513228"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "壤塘县",
                value: "513230"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "阿坝县",
                value: "513231"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "若尔盖县",
                value: "513232"
            },
            {
                city: "阿坝藏族羌族自治州",
                text: "红原县",
                value: "513233"
            }],
            513300 : [{
                city: "甘孜藏族自治州",
                text: "康定市",
                value: "513301"
            },
            {
                city: "甘孜藏族自治州",
                text: "泸定县",
                value: "513322"
            },
            {
                city: "甘孜藏族自治州",
                text: "丹巴县",
                value: "513323"
            },
            {
                city: "甘孜藏族自治州",
                text: "九龙县",
                value: "513324"
            },
            {
                city: "甘孜藏族自治州",
                text: "雅江县",
                value: "513325"
            },
            {
                city: "甘孜藏族自治州",
                text: "道孚县",
                value: "513326"
            },
            {
                city: "甘孜藏族自治州",
                text: "炉霍县",
                value: "513327"
            },
            {
                city: "甘孜藏族自治州",
                text: "甘孜县",
                value: "513328"
            },
            {
                city: "甘孜藏族自治州",
                text: "新龙县",
                value: "513329"
            },
            {
                city: "甘孜藏族自治州",
                text: "德格县",
                value: "513330"
            },
            {
                city: "甘孜藏族自治州",
                text: "白玉县",
                value: "513331"
            },
            {
                city: "甘孜藏族自治州",
                text: "石渠县",
                value: "513332"
            },
            {
                city: "甘孜藏族自治州",
                text: "色达县",
                value: "513333"
            },
            {
                city: "甘孜藏族自治州",
                text: "理塘县",
                value: "513334"
            },
            {
                city: "甘孜藏族自治州",
                text: "巴塘县",
                value: "513335"
            },
            {
                city: "甘孜藏族自治州",
                text: "乡城县",
                value: "513336"
            },
            {
                city: "甘孜藏族自治州",
                text: "稻城县",
                value: "513337"
            },
            {
                city: "甘孜藏族自治州",
                text: "得荣县",
                value: "513338"
            }],
            513400 : [{
                city: "凉山彝族自治州",
                text: "西昌市",
                value: "513401"
            },
            {
                city: "凉山彝族自治州",
                text: "木里藏族自治县",
                value: "513422"
            },
            {
                city: "凉山彝族自治州",
                text: "盐源县",
                value: "513423"
            },
            {
                city: "凉山彝族自治州",
                text: "德昌县",
                value: "513424"
            },
            {
                city: "凉山彝族自治州",
                text: "会理县",
                value: "513425"
            },
            {
                city: "凉山彝族自治州",
                text: "会东县",
                value: "513426"
            },
            {
                city: "凉山彝族自治州",
                text: "宁南县",
                value: "513427"
            },
            {
                city: "凉山彝族自治州",
                text: "普格县",
                value: "513428"
            },
            {
                city: "凉山彝族自治州",
                text: "布拖县",
                value: "513429"
            },
            {
                city: "凉山彝族自治州",
                text: "金阳县",
                value: "513430"
            },
            {
                city: "凉山彝族自治州",
                text: "昭觉县",
                value: "513431"
            },
            {
                city: "凉山彝族自治州",
                text: "喜德县",
                value: "513432"
            },
            {
                city: "凉山彝族自治州",
                text: "冕宁县",
                value: "513433"
            },
            {
                city: "凉山彝族自治州",
                text: "越西县",
                value: "513434"
            },
            {
                city: "凉山彝族自治州",
                text: "甘洛县",
                value: "513435"
            },
            {
                city: "凉山彝族自治州",
                text: "美姑县",
                value: "513436"
            },
            {
                city: "凉山彝族自治州",
                text: "雷波县",
                value: "513437"
            }],
            520100 : [{
                city: "贵阳市",
                text: "市辖区",
                value: "520101"
            },
            {
                city: "贵阳市",
                text: "南明区",
                value: "520102"
            },
            {
                city: "贵阳市",
                text: "云岩区",
                value: "520103"
            },
            {
                city: "贵阳市",
                text: "花溪区",
                value: "520111"
            },
            {
                city: "贵阳市",
                text: "乌当区",
                value: "520112"
            },
            {
                city: "贵阳市",
                text: "白云区",
                value: "520113"
            },
            {
                city: "贵阳市",
                text: "观山湖区",
                value: "520115"
            },
            {
                city: "贵阳市",
                text: "开阳县",
                value: "520121"
            },
            {
                city: "贵阳市",
                text: "息烽县",
                value: "520122"
            },
            {
                city: "贵阳市",
                text: "修文县",
                value: "520123"
            },
            {
                city: "贵阳市",
                text: "清镇市",
                value: "520181"
            }],
            520200 : [{
                city: "六盘水市",
                text: "钟山区",
                value: "520201"
            },
            {
                city: "六盘水市",
                text: "六枝特区",
                value: "520203"
            },
            {
                city: "六盘水市",
                text: "水城县",
                value: "520221"
            },
            {
                city: "六盘水市",
                text: "盘县",
                value: "520222"
            }],
            520300 : [{
                city: "遵义市",
                text: "市辖区",
                value: "520301"
            },
            {
                city: "遵义市",
                text: "红花岗区",
                value: "520302"
            },
            {
                city: "遵义市",
                text: "汇川区",
                value: "520303"
            },
            {
                city: "遵义市",
                text: "播州区",
                value: "520304"
            },
            {
                city: "遵义市",
                text: "桐梓县",
                value: "520322"
            },
            {
                city: "遵义市",
                text: "绥阳县",
                value: "520323"
            },
            {
                city: "遵义市",
                text: "正安县",
                value: "520324"
            },
            {
                city: "遵义市",
                text: "道真仡佬族苗族自治县",
                value: "520325"
            },
            {
                city: "遵义市",
                text: "务川仡佬族苗族自治县",
                value: "520326"
            },
            {
                city: "遵义市",
                text: "凤冈县",
                value: "520327"
            },
            {
                city: "遵义市",
                text: "湄潭县",
                value: "520328"
            },
            {
                city: "遵义市",
                text: "余庆县",
                value: "520329"
            },
            {
                city: "遵义市",
                text: "习水县",
                value: "520330"
            },
            {
                city: "遵义市",
                text: "赤水市",
                value: "520381"
            },
            {
                city: "遵义市",
                text: "仁怀市",
                value: "520382"
            }],
            520400 : [{
                city: "安顺市",
                text: "市辖区",
                value: "520401"
            },
            {
                city: "安顺市",
                text: "西秀区",
                value: "520402"
            },
            {
                city: "安顺市",
                text: "平坝区",
                value: "520403"
            },
            {
                city: "安顺市",
                text: "普定县",
                value: "520422"
            },
            {
                city: "安顺市",
                text: "镇宁布依族苗族自治县",
                value: "520423"
            },
            {
                city: "安顺市",
                text: "关岭布依族苗族自治县",
                value: "520424"
            },
            {
                city: "安顺市",
                text: "紫云苗族布依族自治县",
                value: "520425"
            }],
            520500 : [{
                city: "毕节市",
                text: "市辖区",
                value: "520501"
            },
            {
                city: "毕节市",
                text: "七星关区",
                value: "520502"
            },
            {
                city: "毕节市",
                text: "大方县",
                value: "520521"
            },
            {
                city: "毕节市",
                text: "黔西县",
                value: "520522"
            },
            {
                city: "毕节市",
                text: "金沙县",
                value: "520523"
            },
            {
                city: "毕节市",
                text: "织金县",
                value: "520524"
            },
            {
                city: "毕节市",
                text: "纳雍县",
                value: "520525"
            },
            {
                city: "毕节市",
                text: "威宁彝族回族苗族自治县",
                value: "520526"
            },
            {
                city: "毕节市",
                text: "赫章县",
                value: "520527"
            }],
            520600 : [{
                city: "铜仁市",
                text: "市辖区",
                value: "520601"
            },
            {
                city: "铜仁市",
                text: "碧江区",
                value: "520602"
            },
            {
                city: "铜仁市",
                text: "万山区",
                value: "520603"
            },
            {
                city: "铜仁市",
                text: "江口县",
                value: "520621"
            },
            {
                city: "铜仁市",
                text: "玉屏侗族自治县",
                value: "520622"
            },
            {
                city: "铜仁市",
                text: "石阡县",
                value: "520623"
            },
            {
                city: "铜仁市",
                text: "思南县",
                value: "520624"
            },
            {
                city: "铜仁市",
                text: "印江土家族苗族自治县",
                value: "520625"
            },
            {
                city: "铜仁市",
                text: "德江县",
                value: "520626"
            },
            {
                city: "铜仁市",
                text: "沿河土家族自治县",
                value: "520627"
            },
            {
                city: "铜仁市",
                text: "松桃苗族自治县",
                value: "520628"
            }],
            522300 : [{
                city: "黔西南布依族苗族自治州",
                text: "兴义市",
                value: "522301"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "兴仁县",
                value: "522322"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "普安县",
                value: "522323"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "晴隆县",
                value: "522324"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "贞丰县",
                value: "522325"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "望谟县",
                value: "522326"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "册亨县",
                value: "522327"
            },
            {
                city: "黔西南布依族苗族自治州",
                text: "安龙县",
                value: "522328"
            }],
            522600 : [{
                city: "黔东南苗族侗族自治州",
                text: "凯里市",
                value: "522601"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "黄平县",
                value: "522622"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "施秉县",
                value: "522623"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "三穗县",
                value: "522624"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "镇远县",
                value: "522625"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "岑巩县",
                value: "522626"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "天柱县",
                value: "522627"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "锦屏县",
                value: "522628"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "剑河县",
                value: "522629"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "台江县",
                value: "522630"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "黎平县",
                value: "522631"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "榕江县",
                value: "522632"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "从江县",
                value: "522633"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "雷山县",
                value: "522634"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "麻江县",
                value: "522635"
            },
            {
                city: "黔东南苗族侗族自治州",
                text: "丹寨县",
                value: "522636"
            }],
            522700 : [{
                city: "黔南布依族苗族自治州",
                text: "都匀市",
                value: "522701"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "福泉市",
                value: "522702"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "荔波县",
                value: "522722"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "贵定县",
                value: "522723"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "瓮安县",
                value: "522725"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "独山县",
                value: "522726"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "平塘县",
                value: "522727"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "罗甸县",
                value: "522728"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "长顺县",
                value: "522729"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "龙里县",
                value: "522730"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "惠水县",
                value: "522731"
            },
            {
                city: "黔南布依族苗族自治州",
                text: "三都水族自治县",
                value: "522732"
            }],
            530100 : [{
                city: "昆明市",
                text: "市辖区",
                value: "530101"
            },
            {
                city: "昆明市",
                text: "五华区",
                value: "530102"
            },
            {
                city: "昆明市",
                text: "盘龙区",
                value: "530103"
            },
            {
                city: "昆明市",
                text: "官渡区",
                value: "530111"
            },
            {
                city: "昆明市",
                text: "西山区",
                value: "530112"
            },
            {
                city: "昆明市",
                text: "东川区",
                value: "530113"
            },
            {
                city: "昆明市",
                text: "呈贡区",
                value: "530114"
            },
            {
                city: "昆明市",
                text: "晋宁县",
                value: "530122"
            },
            {
                city: "昆明市",
                text: "富民县",
                value: "530124"
            },
            {
                city: "昆明市",
                text: "宜良县",
                value: "530125"
            },
            {
                city: "昆明市",
                text: "石林彝族自治县",
                value: "530126"
            },
            {
                city: "昆明市",
                text: "嵩明县",
                value: "530127"
            },
            {
                city: "昆明市",
                text: "禄劝彝族苗族自治县",
                value: "530128"
            },
            {
                city: "昆明市",
                text: "寻甸回族彝族自治县",
                value: "530129"
            },
            {
                city: "昆明市",
                text: "安宁市",
                value: "530181"
            }],
            530300 : [{
                city: "曲靖市",
                text: "市辖区",
                value: "530301"
            },
            {
                city: "曲靖市",
                text: "麒麟区",
                value: "530302"
            },
            {
                city: "曲靖市",
                text: "沾益区",
                value: "530303"
            },
            {
                city: "曲靖市",
                text: "马龙县",
                value: "530321"
            },
            {
                city: "曲靖市",
                text: "陆良县",
                value: "530322"
            },
            {
                city: "曲靖市",
                text: "师宗县",
                value: "530323"
            },
            {
                city: "曲靖市",
                text: "罗平县",
                value: "530324"
            },
            {
                city: "曲靖市",
                text: "富源县",
                value: "530325"
            },
            {
                city: "曲靖市",
                text: "会泽县",
                value: "530326"
            },
            {
                city: "曲靖市",
                text: "宣威市",
                value: "530381"
            }],
            530400 : [{
                city: "玉溪市",
                text: "市辖区",
                value: "530401"
            },
            {
                city: "玉溪市",
                text: "红塔区",
                value: "530402"
            },
            {
                city: "玉溪市",
                text: "江川区",
                value: "530403"
            },
            {
                city: "玉溪市",
                text: "澄江县",
                value: "530422"
            },
            {
                city: "玉溪市",
                text: "通海县",
                value: "530423"
            },
            {
                city: "玉溪市",
                text: "华宁县",
                value: "530424"
            },
            {
                city: "玉溪市",
                text: "易门县",
                value: "530425"
            },
            {
                city: "玉溪市",
                text: "峨山彝族自治县",
                value: "530426"
            },
            {
                city: "玉溪市",
                text: "新平彝族傣族自治县",
                value: "530427"
            },
            {
                city: "玉溪市",
                text: "元江哈尼族彝族傣族自治县",
                value: "530428"
            }],
            530500 : [{
                city: "保山市",
                text: "市辖区",
                value: "530501"
            },
            {
                city: "保山市",
                text: "隆阳区",
                value: "530502"
            },
            {
                city: "保山市",
                text: "施甸县",
                value: "530521"
            },
            {
                city: "保山市",
                text: "龙陵县",
                value: "530523"
            },
            {
                city: "保山市",
                text: "昌宁县",
                value: "530524"
            },
            {
                city: "保山市",
                text: "腾冲市",
                value: "530581"
            }],
            530600 : [{
                city: "昭通市",
                text: "市辖区",
                value: "530601"
            },
            {
                city: "昭通市",
                text: "昭阳区",
                value: "530602"
            },
            {
                city: "昭通市",
                text: "鲁甸县",
                value: "530621"
            },
            {
                city: "昭通市",
                text: "巧家县",
                value: "530622"
            },
            {
                city: "昭通市",
                text: "盐津县",
                value: "530623"
            },
            {
                city: "昭通市",
                text: "大关县",
                value: "530624"
            },
            {
                city: "昭通市",
                text: "永善县",
                value: "530625"
            },
            {
                city: "昭通市",
                text: "绥江县",
                value: "530626"
            },
            {
                city: "昭通市",
                text: "镇雄县",
                value: "530627"
            },
            {
                city: "昭通市",
                text: "彝良县",
                value: "530628"
            },
            {
                city: "昭通市",
                text: "威信县",
                value: "530629"
            },
            {
                city: "昭通市",
                text: "水富县",
                value: "530630"
            }],
            530700 : [{
                city: "丽江市",
                text: "市辖区",
                value: "530701"
            },
            {
                city: "丽江市",
                text: "古城区",
                value: "530702"
            },
            {
                city: "丽江市",
                text: "玉龙纳西族自治县",
                value: "530721"
            },
            {
                city: "丽江市",
                text: "永胜县",
                value: "530722"
            },
            {
                city: "丽江市",
                text: "华坪县",
                value: "530723"
            },
            {
                city: "丽江市",
                text: "宁蒗彝族自治县",
                value: "530724"
            }],
            530800 : [{
                city: "普洱市",
                text: "市辖区",
                value: "530801"
            },
            {
                city: "普洱市",
                text: "思茅区",
                value: "530802"
            },
            {
                city: "普洱市",
                text: "宁洱哈尼族彝族自治县",
                value: "530821"
            },
            {
                city: "普洱市",
                text: "墨江哈尼族自治县",
                value: "530822"
            },
            {
                city: "普洱市",
                text: "景东彝族自治县",
                value: "530823"
            },
            {
                city: "普洱市",
                text: "景谷傣族彝族自治县",
                value: "530824"
            },
            {
                city: "普洱市",
                text: "镇沅彝族哈尼族拉祜族自治县",
                value: "530825"
            },
            {
                city: "普洱市",
                text: "江城哈尼族彝族自治县",
                value: "530826"
            },
            {
                city: "普洱市",
                text: "孟连傣族拉祜族佤族自治县",
                value: "530827"
            },
            {
                city: "普洱市",
                text: "澜沧拉祜族自治县",
                value: "530828"
            },
            {
                city: "普洱市",
                text: "西盟佤族自治县",
                value: "530829"
            }],
            530900 : [{
                city: "临沧市",
                text: "市辖区",
                value: "530901"
            },
            {
                city: "临沧市",
                text: "临翔区",
                value: "530902"
            },
            {
                city: "临沧市",
                text: "凤庆县",
                value: "530921"
            },
            {
                city: "临沧市",
                text: "云县",
                value: "530922"
            },
            {
                city: "临沧市",
                text: "永德县",
                value: "530923"
            },
            {
                city: "临沧市",
                text: "镇康县",
                value: "530924"
            },
            {
                city: "临沧市",
                text: "双江拉祜族佤族布朗族傣族自治县",
                value: "530925"
            },
            {
                city: "临沧市",
                text: "耿马傣族佤族自治县",
                value: "530926"
            },
            {
                city: "临沧市",
                text: "沧源佤族自治县",
                value: "530927"
            }],
            532300 : [{
                city: "楚雄彝族自治州",
                text: "楚雄市",
                value: "532301"
            },
            {
                city: "楚雄彝族自治州",
                text: "双柏县",
                value: "532322"
            },
            {
                city: "楚雄彝族自治州",
                text: "牟定县",
                value: "532323"
            },
            {
                city: "楚雄彝族自治州",
                text: "南华县",
                value: "532324"
            },
            {
                city: "楚雄彝族自治州",
                text: "姚安县",
                value: "532325"
            },
            {
                city: "楚雄彝族自治州",
                text: "大姚县",
                value: "532326"
            },
            {
                city: "楚雄彝族自治州",
                text: "永仁县",
                value: "532327"
            },
            {
                city: "楚雄彝族自治州",
                text: "元谋县",
                value: "532328"
            },
            {
                city: "楚雄彝族自治州",
                text: "武定县",
                value: "532329"
            },
            {
                city: "楚雄彝族自治州",
                text: "禄丰县",
                value: "532331"
            }],
            532500 : [{
                city: "红河哈尼族彝族自治州",
                text: "个旧市",
                value: "532501"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "开远市",
                value: "532502"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "蒙自市",
                value: "532503"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "弥勒市",
                value: "532504"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "屏边苗族自治县",
                value: "532523"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "建水县",
                value: "532524"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "石屏县",
                value: "532525"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "泸西县",
                value: "532527"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "元阳县",
                value: "532528"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "红河县",
                value: "532529"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "金平苗族瑶族傣族自治县",
                value: "532530"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "绿春县",
                value: "532531"
            },
            {
                city: "红河哈尼族彝族自治州",
                text: "河口瑶族自治县",
                value: "532532"
            }],
            532600 : [{
                city: "文山壮族苗族自治州",
                text: "文山市",
                value: "532601"
            },
            {
                city: "文山壮族苗族自治州",
                text: "砚山县",
                value: "532622"
            },
            {
                city: "文山壮族苗族自治州",
                text: "西畴县",
                value: "532623"
            },
            {
                city: "文山壮族苗族自治州",
                text: "麻栗坡县",
                value: "532624"
            },
            {
                city: "文山壮族苗族自治州",
                text: "马关县",
                value: "532625"
            },
            {
                city: "文山壮族苗族自治州",
                text: "丘北县",
                value: "532626"
            },
            {
                city: "文山壮族苗族自治州",
                text: "广南县",
                value: "532627"
            },
            {
                city: "文山壮族苗族自治州",
                text: "富宁县",
                value: "532628"
            }],
            532800 : [{
                city: "西双版纳傣族自治州",
                text: "景洪市",
                value: "532801"
            },
            {
                city: "西双版纳傣族自治州",
                text: "勐海县",
                value: "532822"
            },
            {
                city: "西双版纳傣族自治州",
                text: "勐腊县",
                value: "532823"
            }],
            532900 : [{
                city: "大理白族自治州",
                text: "大理市",
                value: "532901"
            },
            {
                city: "大理白族自治州",
                text: "漾濞彝族自治县",
                value: "532922"
            },
            {
                city: "大理白族自治州",
                text: "祥云县",
                value: "532923"
            },
            {
                city: "大理白族自治州",
                text: "宾川县",
                value: "532924"
            },
            {
                city: "大理白族自治州",
                text: "弥渡县",
                value: "532925"
            },
            {
                city: "大理白族自治州",
                text: "南涧彝族自治县",
                value: "532926"
            },
            {
                city: "大理白族自治州",
                text: "巍山彝族回族自治县",
                value: "532927"
            },
            {
                city: "大理白族自治州",
                text: "永平县",
                value: "532928"
            },
            {
                city: "大理白族自治州",
                text: "云龙县",
                value: "532929"
            },
            {
                city: "大理白族自治州",
                text: "洱源县",
                value: "532930"
            },
            {
                city: "大理白族自治州",
                text: "剑川县",
                value: "532931"
            },
            {
                city: "大理白族自治州",
                text: "鹤庆县",
                value: "532932"
            }],
            533100 : [{
                city: "德宏傣族景颇族自治州",
                text: "瑞丽市",
                value: "533102"
            },
            {
                city: "德宏傣族景颇族自治州",
                text: "芒市",
                value: "533103"
            },
            {
                city: "德宏傣族景颇族自治州",
                text: "梁河县",
                value: "533122"
            },
            {
                city: "德宏傣族景颇族自治州",
                text: "盈江县",
                value: "533123"
            },
            {
                city: "德宏傣族景颇族自治州",
                text: "陇川县",
                value: "533124"
            }],
            533300 : [{
                city: "怒江傈僳族自治州",
                text: "泸水市",
                value: "533301"
            },
            {
                city: "怒江傈僳族自治州",
                text: "福贡县",
                value: "533323"
            },
            {
                city: "怒江傈僳族自治州",
                text: "贡山独龙族怒族自治县",
                value: "533324"
            },
            {
                city: "怒江傈僳族自治州",
                text: "兰坪白族普米族自治县",
                value: "533325"
            }],
            533400 : [{
                city: "迪庆藏族自治州",
                text: "香格里拉市",
                value: "533401"
            },
            {
                city: "迪庆藏族自治州",
                text: "德钦县",
                value: "533422"
            },
            {
                city: "迪庆藏族自治州",
                text: "维西傈僳族自治县",
                value: "533423"
            }],
            540100 : [{
                city: "拉萨市",
                text: "市辖区",
                value: "540101"
            },
            {
                city: "拉萨市",
                text: "城关区",
                value: "540102"
            },
            {
                city: "拉萨市",
                text: "堆龙德庆区",
                value: "540103"
            },
            {
                city: "拉萨市",
                text: "林周县",
                value: "540121"
            },
            {
                city: "拉萨市",
                text: "当雄县",
                value: "540122"
            },
            {
                city: "拉萨市",
                text: "尼木县",
                value: "540123"
            },
            {
                city: "拉萨市",
                text: "曲水县",
                value: "540124"
            },
            {
                city: "拉萨市",
                text: "达孜县",
                value: "540126"
            },
            {
                city: "拉萨市",
                text: "墨竹工卡县",
                value: "540127"
            }],
            540200 : [{
                city: "日喀则市",
                text: "桑珠孜区",
                value: "540202"
            },
            {
                city: "日喀则市",
                text: "南木林县",
                value: "540221"
            },
            {
                city: "日喀则市",
                text: "江孜县",
                value: "540222"
            },
            {
                city: "日喀则市",
                text: "定日县",
                value: "540223"
            },
            {
                city: "日喀则市",
                text: "萨迦县",
                value: "540224"
            },
            {
                city: "日喀则市",
                text: "拉孜县",
                value: "540225"
            },
            {
                city: "日喀则市",
                text: "昂仁县",
                value: "540226"
            },
            {
                city: "日喀则市",
                text: "谢通门县",
                value: "540227"
            },
            {
                city: "日喀则市",
                text: "白朗县",
                value: "540228"
            },
            {
                city: "日喀则市",
                text: "仁布县",
                value: "540229"
            },
            {
                city: "日喀则市",
                text: "康马县",
                value: "540230"
            },
            {
                city: "日喀则市",
                text: "定结县",
                value: "540231"
            },
            {
                city: "日喀则市",
                text: "仲巴县",
                value: "540232"
            },
            {
                city: "日喀则市",
                text: "亚东县",
                value: "540233"
            },
            {
                city: "日喀则市",
                text: "吉隆县",
                value: "540234"
            },
            {
                city: "日喀则市",
                text: "聂拉木县",
                value: "540235"
            },
            {
                city: "日喀则市",
                text: "萨嘎县",
                value: "540236"
            },
            {
                city: "日喀则市",
                text: "岗巴县",
                value: "540237"
            }],
            540300 : [{
                city: "昌都市",
                text: "卡若区",
                value: "540302"
            },
            {
                city: "昌都市",
                text: "江达县",
                value: "540321"
            },
            {
                city: "昌都市",
                text: "贡觉县",
                value: "540322"
            },
            {
                city: "昌都市",
                text: "类乌齐县",
                value: "540323"
            },
            {
                city: "昌都市",
                text: "丁青县",
                value: "540324"
            },
            {
                city: "昌都市",
                text: "察雅县",
                value: "540325"
            },
            {
                city: "昌都市",
                text: "八宿县",
                value: "540326"
            },
            {
                city: "昌都市",
                text: "左贡县",
                value: "540327"
            },
            {
                city: "昌都市",
                text: "芒康县",
                value: "540328"
            },
            {
                city: "昌都市",
                text: "洛隆县",
                value: "540329"
            },
            {
                city: "昌都市",
                text: "边坝县",
                value: "540330"
            }],
            540400 : [{
                city: "林芝市",
                text: "巴宜区",
                value: "540402"
            },
            {
                city: "林芝市",
                text: "工布江达县",
                value: "540421"
            },
            {
                city: "林芝市",
                text: "米林县",
                value: "540422"
            },
            {
                city: "林芝市",
                text: "墨脱县",
                value: "540423"
            },
            {
                city: "林芝市",
                text: "波密县",
                value: "540424"
            },
            {
                city: "林芝市",
                text: "察隅县",
                value: "540425"
            },
            {
                city: "林芝市",
                text: "朗县",
                value: "540426"
            }],
            540500 : [{
                city: "山南市",
                text: "市辖区",
                value: "540501"
            },
            {
                city: "山南市",
                text: "乃东区",
                value: "540502"
            },
            {
                city: "山南市",
                text: "扎囊县",
                value: "540521"
            },
            {
                city: "山南市",
                text: "贡嘎县",
                value: "540522"
            },
            {
                city: "山南市",
                text: "桑日县",
                value: "540523"
            },
            {
                city: "山南市",
                text: "琼结县",
                value: "540524"
            },
            {
                city: "山南市",
                text: "曲松县",
                value: "540525"
            },
            {
                city: "山南市",
                text: "措美县",
                value: "540526"
            },
            {
                city: "山南市",
                text: "洛扎县",
                value: "540527"
            },
            {
                city: "山南市",
                text: "加查县",
                value: "540528"
            },
            {
                city: "山南市",
                text: "隆子县",
                value: "540529"
            },
            {
                city: "山南市",
                text: "错那县",
                value: "540530"
            },
            {
                city: "山南市",
                text: "浪卡子县",
                value: "540531"
            }],
            542400 : [{
                city: "那曲地区",
                text: "那曲县",
                value: "542421"
            },
            {
                city: "那曲地区",
                text: "嘉黎县",
                value: "542422"
            },
            {
                city: "那曲地区",
                text: "比如县",
                value: "542423"
            },
            {
                city: "那曲地区",
                text: "聂荣县",
                value: "542424"
            },
            {
                city: "那曲地区",
                text: "安多县",
                value: "542425"
            },
            {
                city: "那曲地区",
                text: "申扎县",
                value: "542426"
            },
            {
                city: "那曲地区",
                text: "索县",
                value: "542427"
            },
            {
                city: "那曲地区",
                text: "班戈县",
                value: "542428"
            },
            {
                city: "那曲地区",
                text: "巴青县",
                value: "542429"
            },
            {
                city: "那曲地区",
                text: "尼玛县",
                value: "542430"
            },
            {
                city: "那曲地区",
                text: "双湖县",
                value: "542431"
            }],
            542500 : [{
                city: "阿里地区",
                text: "普兰县",
                value: "542521"
            },
            {
                city: "阿里地区",
                text: "札达县",
                value: "542522"
            },
            {
                city: "阿里地区",
                text: "噶尔县",
                value: "542523"
            },
            {
                city: "阿里地区",
                text: "日土县",
                value: "542524"
            },
            {
                city: "阿里地区",
                text: "革吉县",
                value: "542525"
            },
            {
                city: "阿里地区",
                text: "改则县",
                value: "542526"
            },
            {
                city: "阿里地区",
                text: "措勤县",
                value: "542527"
            }],
            610100 : [{
                city: "西安市",
                text: "市辖区",
                value: "610101"
            },
            {
                city: "西安市",
                text: "新城区",
                value: "610102"
            },
            {
                city: "西安市",
                text: "碑林区",
                value: "610103"
            },
            {
                city: "西安市",
                text: "莲湖区",
                value: "610104"
            },
            {
                city: "西安市",
                text: "灞桥区",
                value: "610111"
            },
            {
                city: "西安市",
                text: "未央区",
                value: "610112"
            },
            {
                city: "西安市",
                text: "雁塔区",
                value: "610113"
            },
            {
                city: "西安市",
                text: "阎良区",
                value: "610114"
            },
            {
                city: "西安市",
                text: "临潼区",
                value: "610115"
            },
            {
                city: "西安市",
                text: "长安区",
                value: "610116"
            },
            {
                city: "西安市",
                text: "高陵区",
                value: "610117"
            },
            {
                city: "西安市",
                text: "蓝田县",
                value: "610122"
            },
            {
                city: "西安市",
                text: "周至县",
                value: "610124"
            },
            {
                city: "西安市",
                text: "户县",
                value: "610125"
            }],
            610200 : [{
                city: "铜川市",
                text: "市辖区",
                value: "610201"
            },
            {
                city: "铜川市",
                text: "王益区",
                value: "610202"
            },
            {
                city: "铜川市",
                text: "印台区",
                value: "610203"
            },
            {
                city: "铜川市",
                text: "耀州区",
                value: "610204"
            },
            {
                city: "铜川市",
                text: "宜君县",
                value: "610222"
            }],
            610300 : [{
                city: "宝鸡市",
                text: "市辖区",
                value: "610301"
            },
            {
                city: "宝鸡市",
                text: "渭滨区",
                value: "610302"
            },
            {
                city: "宝鸡市",
                text: "金台区",
                value: "610303"
            },
            {
                city: "宝鸡市",
                text: "陈仓区",
                value: "610304"
            },
            {
                city: "宝鸡市",
                text: "凤翔县",
                value: "610322"
            },
            {
                city: "宝鸡市",
                text: "岐山县",
                value: "610323"
            },
            {
                city: "宝鸡市",
                text: "扶风县",
                value: "610324"
            },
            {
                city: "宝鸡市",
                text: "眉县",
                value: "610326"
            },
            {
                city: "宝鸡市",
                text: "陇县",
                value: "610327"
            },
            {
                city: "宝鸡市",
                text: "千阳县",
                value: "610328"
            },
            {
                city: "宝鸡市",
                text: "麟游县",
                value: "610329"
            },
            {
                city: "宝鸡市",
                text: "凤县",
                value: "610330"
            },
            {
                city: "宝鸡市",
                text: "太白县",
                value: "610331"
            }],
            610400 : [{
                city: "咸阳市",
                text: "市辖区",
                value: "610401"
            },
            {
                city: "咸阳市",
                text: "秦都区",
                value: "610402"
            },
            {
                city: "咸阳市",
                text: "杨陵区",
                value: "610403"
            },
            {
                city: "咸阳市",
                text: "渭城区",
                value: "610404"
            },
            {
                city: "咸阳市",
                text: "三原县",
                value: "610422"
            },
            {
                city: "咸阳市",
                text: "泾阳县",
                value: "610423"
            },
            {
                city: "咸阳市",
                text: "乾县",
                value: "610424"
            },
            {
                city: "咸阳市",
                text: "礼泉县",
                value: "610425"
            },
            {
                city: "咸阳市",
                text: "永寿县",
                value: "610426"
            },
            {
                city: "咸阳市",
                text: "彬县",
                value: "610427"
            },
            {
                city: "咸阳市",
                text: "长武县",
                value: "610428"
            },
            {
                city: "咸阳市",
                text: "旬邑县",
                value: "610429"
            },
            {
                city: "咸阳市",
                text: "淳化县",
                value: "610430"
            },
            {
                city: "咸阳市",
                text: "武功县",
                value: "610431"
            },
            {
                city: "咸阳市",
                text: "兴平市",
                value: "610481"
            }],
            610500 : [{
                city: "渭南市",
                text: "市辖区",
                value: "610501"
            },
            {
                city: "渭南市",
                text: "临渭区",
                value: "610502"
            },
            {
                city: "渭南市",
                text: "华州区",
                value: "610503"
            },
            {
                city: "渭南市",
                text: "潼关县",
                value: "610522"
            },
            {
                city: "渭南市",
                text: "大荔县",
                value: "610523"
            },
            {
                city: "渭南市",
                text: "合阳县",
                value: "610524"
            },
            {
                city: "渭南市",
                text: "澄城县",
                value: "610525"
            },
            {
                city: "渭南市",
                text: "蒲城县",
                value: "610526"
            },
            {
                city: "渭南市",
                text: "白水县",
                value: "610527"
            },
            {
                city: "渭南市",
                text: "富平县",
                value: "610528"
            },
            {
                city: "渭南市",
                text: "韩城市",
                value: "610581"
            },
            {
                city: "渭南市",
                text: "华阴市",
                value: "610582"
            }],
            610600 : [{
                city: "延安市",
                text: "市辖区",
                value: "610601"
            },
            {
                city: "延安市",
                text: "宝塔区",
                value: "610602"
            },
            {
                city: "延安市",
                text: "安塞区",
                value: "610603"
            },
            {
                city: "延安市",
                text: "延长县",
                value: "610621"
            },
            {
                city: "延安市",
                text: "延川县",
                value: "610622"
            },
            {
                city: "延安市",
                text: "子长县",
                value: "610623"
            },
            {
                city: "延安市",
                text: "志丹县",
                value: "610625"
            },
            {
                city: "延安市",
                text: "吴起县",
                value: "610626"
            },
            {
                city: "延安市",
                text: "甘泉县",
                value: "610627"
            },
            {
                city: "延安市",
                text: "富县",
                value: "610628"
            },
            {
                city: "延安市",
                text: "洛川县",
                value: "610629"
            },
            {
                city: "延安市",
                text: "宜川县",
                value: "610630"
            },
            {
                city: "延安市",
                text: "黄龙县",
                value: "610631"
            },
            {
                city: "延安市",
                text: "黄陵县",
                value: "610632"
            }],
            610700 : [{
                city: "汉中市",
                text: "市辖区",
                value: "610701"
            },
            {
                city: "汉中市",
                text: "汉台区",
                value: "610702"
            },
            {
                city: "汉中市",
                text: "南郑县",
                value: "610721"
            },
            {
                city: "汉中市",
                text: "城固县",
                value: "610722"
            },
            {
                city: "汉中市",
                text: "洋县",
                value: "610723"
            },
            {
                city: "汉中市",
                text: "西乡县",
                value: "610724"
            },
            {
                city: "汉中市",
                text: "勉县",
                value: "610725"
            },
            {
                city: "汉中市",
                text: "宁强县",
                value: "610726"
            },
            {
                city: "汉中市",
                text: "略阳县",
                value: "610727"
            },
            {
                city: "汉中市",
                text: "镇巴县",
                value: "610728"
            },
            {
                city: "汉中市",
                text: "留坝县",
                value: "610729"
            },
            {
                city: "汉中市",
                text: "佛坪县",
                value: "610730"
            }],
            610800 : [{
                city: "榆林市",
                text: "市辖区",
                value: "610801"
            },
            {
                city: "榆林市",
                text: "榆阳区",
                value: "610802"
            },
            {
                city: "榆林市",
                text: "横山区",
                value: "610803"
            },
            {
                city: "榆林市",
                text: "神木县",
                value: "610821"
            },
            {
                city: "榆林市",
                text: "府谷县",
                value: "610822"
            },
            {
                city: "榆林市",
                text: "靖边县",
                value: "610824"
            },
            {
                city: "榆林市",
                text: "定边县",
                value: "610825"
            },
            {
                city: "榆林市",
                text: "绥德县",
                value: "610826"
            },
            {
                city: "榆林市",
                text: "米脂县",
                value: "610827"
            },
            {
                city: "榆林市",
                text: "佳县",
                value: "610828"
            },
            {
                city: "榆林市",
                text: "吴堡县",
                value: "610829"
            },
            {
                city: "榆林市",
                text: "清涧县",
                value: "610830"
            },
            {
                city: "榆林市",
                text: "子洲县",
                value: "610831"
            }],
            610900 : [{
                city: "安康市",
                text: "市辖区",
                value: "610901"
            },
            {
                city: "安康市",
                text: "汉滨区",
                value: "610902"
            },
            {
                city: "安康市",
                text: "汉阴县",
                value: "610921"
            },
            {
                city: "安康市",
                text: "石泉县",
                value: "610922"
            },
            {
                city: "安康市",
                text: "宁陕县",
                value: "610923"
            },
            {
                city: "安康市",
                text: "紫阳县",
                value: "610924"
            },
            {
                city: "安康市",
                text: "岚皋县",
                value: "610925"
            },
            {
                city: "安康市",
                text: "平利县",
                value: "610926"
            },
            {
                city: "安康市",
                text: "镇坪县",
                value: "610927"
            },
            {
                city: "安康市",
                text: "旬阳县",
                value: "610928"
            },
            {
                city: "安康市",
                text: "白河县",
                value: "610929"
            }],
            611000 : [{
                city: "商洛市",
                text: "市辖区",
                value: "611001"
            },
            {
                city: "商洛市",
                text: "商州区",
                value: "611002"
            },
            {
                city: "商洛市",
                text: "洛南县",
                value: "611021"
            },
            {
                city: "商洛市",
                text: "丹凤县",
                value: "611022"
            },
            {
                city: "商洛市",
                text: "商南县",
                value: "611023"
            },
            {
                city: "商洛市",
                text: "山阳县",
                value: "611024"
            },
            {
                city: "商洛市",
                text: "镇安县",
                value: "611025"
            },
            {
                city: "商洛市",
                text: "柞水县",
                value: "611026"
            }],
            620100 : [{
                city: "兰州市",
                text: "市辖区",
                value: "620101"
            },
            {
                city: "兰州市",
                text: "城关区",
                value: "620102"
            },
            {
                city: "兰州市",
                text: "七里河区",
                value: "620103"
            },
            {
                city: "兰州市",
                text: "西固区",
                value: "620104"
            },
            {
                city: "兰州市",
                text: "安宁区",
                value: "620105"
            },
            {
                city: "兰州市",
                text: "红古区",
                value: "620111"
            },
            {
                city: "兰州市",
                text: "永登县",
                value: "620121"
            },
            {
                city: "兰州市",
                text: "皋兰县",
                value: "620122"
            },
            {
                city: "兰州市",
                text: "榆中县",
                value: "620123"
            }],
            620200 : [{
                city: "嘉峪关市",
                text: "市辖区",
                value: "620201"
            }],
            620300 : [{
                city: "金昌市",
                text: "市辖区",
                value: "620301"
            },
            {
                city: "金昌市",
                text: "金川区",
                value: "620302"
            },
            {
                city: "金昌市",
                text: "永昌县",
                value: "620321"
            }],
            620400 : [{
                city: "白银市",
                text: "市辖区",
                value: "620401"
            },
            {
                city: "白银市",
                text: "白银区",
                value: "620402"
            },
            {
                city: "白银市",
                text: "平川区",
                value: "620403"
            },
            {
                city: "白银市",
                text: "靖远县",
                value: "620421"
            },
            {
                city: "白银市",
                text: "会宁县",
                value: "620422"
            },
            {
                city: "白银市",
                text: "景泰县",
                value: "620423"
            }],
            620500 : [{
                city: "天水市",
                text: "市辖区",
                value: "620501"
            },
            {
                city: "天水市",
                text: "秦州区",
                value: "620502"
            },
            {
                city: "天水市",
                text: "麦积区",
                value: "620503"
            },
            {
                city: "天水市",
                text: "清水县",
                value: "620521"
            },
            {
                city: "天水市",
                text: "秦安县",
                value: "620522"
            },
            {
                city: "天水市",
                text: "甘谷县",
                value: "620523"
            },
            {
                city: "天水市",
                text: "武山县",
                value: "620524"
            },
            {
                city: "天水市",
                text: "张家川回族自治县",
                value: "620525"
            }],
            620600 : [{
                city: "武威市",
                text: "市辖区",
                value: "620601"
            },
            {
                city: "武威市",
                text: "凉州区",
                value: "620602"
            },
            {
                city: "武威市",
                text: "民勤县",
                value: "620621"
            },
            {
                city: "武威市",
                text: "古浪县",
                value: "620622"
            },
            {
                city: "武威市",
                text: "天祝藏族自治县",
                value: "620623"
            }],
            620700 : [{
                city: "张掖市",
                text: "市辖区",
                value: "620701"
            },
            {
                city: "张掖市",
                text: "甘州区",
                value: "620702"
            },
            {
                city: "张掖市",
                text: "肃南裕固族自治县",
                value: "620721"
            },
            {
                city: "张掖市",
                text: "民乐县",
                value: "620722"
            },
            {
                city: "张掖市",
                text: "临泽县",
                value: "620723"
            },
            {
                city: "张掖市",
                text: "高台县",
                value: "620724"
            },
            {
                city: "张掖市",
                text: "山丹县",
                value: "620725"
            }],
            620800 : [{
                city: "平凉市",
                text: "市辖区",
                value: "620801"
            },
            {
                city: "平凉市",
                text: "崆峒区",
                value: "620802"
            },
            {
                city: "平凉市",
                text: "泾川县",
                value: "620821"
            },
            {
                city: "平凉市",
                text: "灵台县",
                value: "620822"
            },
            {
                city: "平凉市",
                text: "崇信县",
                value: "620823"
            },
            {
                city: "平凉市",
                text: "华亭县",
                value: "620824"
            },
            {
                city: "平凉市",
                text: "庄浪县",
                value: "620825"
            },
            {
                city: "平凉市",
                text: "静宁县",
                value: "620826"
            }],
            620900 : [{
                city: "酒泉市",
                text: "市辖区",
                value: "620901"
            },
            {
                city: "酒泉市",
                text: "肃州区",
                value: "620902"
            },
            {
                city: "酒泉市",
                text: "金塔县",
                value: "620921"
            },
            {
                city: "酒泉市",
                text: "瓜州县",
                value: "620922"
            },
            {
                city: "酒泉市",
                text: "肃北蒙古族自治县",
                value: "620923"
            },
            {
                city: "酒泉市",
                text: "阿克塞哈萨克族自治县",
                value: "620924"
            },
            {
                city: "酒泉市",
                text: "玉门市",
                value: "620981"
            },
            {
                city: "酒泉市",
                text: "敦煌市",
                value: "620982"
            }],
            621000 : [{
                city: "庆阳市",
                text: "市辖区",
                value: "621001"
            },
            {
                city: "庆阳市",
                text: "西峰区",
                value: "621002"
            },
            {
                city: "庆阳市",
                text: "庆城县",
                value: "621021"
            },
            {
                city: "庆阳市",
                text: "环县",
                value: "621022"
            },
            {
                city: "庆阳市",
                text: "华池县",
                value: "621023"
            },
            {
                city: "庆阳市",
                text: "合水县",
                value: "621024"
            },
            {
                city: "庆阳市",
                text: "正宁县",
                value: "621025"
            },
            {
                city: "庆阳市",
                text: "宁县",
                value: "621026"
            },
            {
                city: "庆阳市",
                text: "镇原县",
                value: "621027"
            }],
            621100 : [{
                city: "定西市",
                text: "市辖区",
                value: "621101"
            },
            {
                city: "定西市",
                text: "安定区",
                value: "621102"
            },
            {
                city: "定西市",
                text: "通渭县",
                value: "621121"
            },
            {
                city: "定西市",
                text: "陇西县",
                value: "621122"
            },
            {
                city: "定西市",
                text: "渭源县",
                value: "621123"
            },
            {
                city: "定西市",
                text: "临洮县",
                value: "621124"
            },
            {
                city: "定西市",
                text: "漳县",
                value: "621125"
            },
            {
                city: "定西市",
                text: "岷县",
                value: "621126"
            }],
            621200 : [{
                city: "陇南市",
                text: "市辖区",
                value: "621201"
            },
            {
                city: "陇南市",
                text: "武都区",
                value: "621202"
            },
            {
                city: "陇南市",
                text: "成县",
                value: "621221"
            },
            {
                city: "陇南市",
                text: "文县",
                value: "621222"
            },
            {
                city: "陇南市",
                text: "宕昌县",
                value: "621223"
            },
            {
                city: "陇南市",
                text: "康县",
                value: "621224"
            },
            {
                city: "陇南市",
                text: "西和县",
                value: "621225"
            },
            {
                city: "陇南市",
                text: "礼县",
                value: "621226"
            },
            {
                city: "陇南市",
                text: "徽县",
                value: "621227"
            },
            {
                city: "陇南市",
                text: "两当县",
                value: "621228"
            }],
            622900 : [{
                city: "临夏回族自治州",
                text: "临夏市",
                value: "622901"
            },
            {
                city: "临夏回族自治州",
                text: "临夏县",
                value: "622921"
            },
            {
                city: "临夏回族自治州",
                text: "康乐县",
                value: "622922"
            },
            {
                city: "临夏回族自治州",
                text: "永靖县",
                value: "622923"
            },
            {
                city: "临夏回族自治州",
                text: "广河县",
                value: "622924"
            },
            {
                city: "临夏回族自治州",
                text: "和政县",
                value: "622925"
            },
            {
                city: "临夏回族自治州",
                text: "东乡族自治县",
                value: "622926"
            },
            {
                city: "临夏回族自治州",
                text: "积石山保安族东乡族撒拉族自治县",
                value: "622927"
            }],
            623000 : [{
                city: "甘南藏族自治州",
                text: "合作市",
                value: "623001"
            },
            {
                city: "甘南藏族自治州",
                text: "临潭县",
                value: "623021"
            },
            {
                city: "甘南藏族自治州",
                text: "卓尼县",
                value: "623022"
            },
            {
                city: "甘南藏族自治州",
                text: "舟曲县",
                value: "623023"
            },
            {
                city: "甘南藏族自治州",
                text: "迭部县",
                value: "623024"
            },
            {
                city: "甘南藏族自治州",
                text: "玛曲县",
                value: "623025"
            },
            {
                city: "甘南藏族自治州",
                text: "碌曲县",
                value: "623026"
            },
            {
                city: "甘南藏族自治州",
                text: "夏河县",
                value: "623027"
            }],
            630100 : [{
                city: "西宁市",
                text: "市辖区",
                value: "630101"
            },
            {
                city: "西宁市",
                text: "城东区",
                value: "630102"
            },
            {
                city: "西宁市",
                text: "城中区",
                value: "630103"
            },
            {
                city: "西宁市",
                text: "城西区",
                value: "630104"
            },
            {
                city: "西宁市",
                text: "城北区",
                value: "630105"
            },
            {
                city: "西宁市",
                text: "大通回族土族自治县",
                value: "630121"
            },
            {
                city: "西宁市",
                text: "湟中县",
                value: "630122"
            },
            {
                city: "西宁市",
                text: "湟源县",
                value: "630123"
            }],
            630200 : [{
                city: "海东市",
                text: "乐都区",
                value: "630202"
            },
            {
                city: "海东市",
                text: "平安区",
                value: "630203"
            },
            {
                city: "海东市",
                text: "民和回族土族自治县",
                value: "630222"
            },
            {
                city: "海东市",
                text: "互助土族自治县",
                value: "630223"
            },
            {
                city: "海东市",
                text: "化隆回族自治县",
                value: "630224"
            },
            {
                city: "海东市",
                text: "循化撒拉族自治县",
                value: "630225"
            }],
            632200 : [{
                city: "海北藏族自治州",
                text: "门源回族自治县",
                value: "632221"
            },
            {
                city: "海北藏族自治州",
                text: "祁连县",
                value: "632222"
            },
            {
                city: "海北藏族自治州",
                text: "海晏县",
                value: "632223"
            },
            {
                city: "海北藏族自治州",
                text: "刚察县",
                value: "632224"
            }],
            632300 : [{
                city: "黄南藏族自治州",
                text: "同仁县",
                value: "632321"
            },
            {
                city: "黄南藏族自治州",
                text: "尖扎县",
                value: "632322"
            },
            {
                city: "黄南藏族自治州",
                text: "泽库县",
                value: "632323"
            },
            {
                city: "黄南藏族自治州",
                text: "河南蒙古族自治县",
                value: "632324"
            }],
            632500 : [{
                city: "海南藏族自治州",
                text: "共和县",
                value: "632521"
            },
            {
                city: "海南藏族自治州",
                text: "同德县",
                value: "632522"
            },
            {
                city: "海南藏族自治州",
                text: "贵德县",
                value: "632523"
            },
            {
                city: "海南藏族自治州",
                text: "兴海县",
                value: "632524"
            },
            {
                city: "海南藏族自治州",
                text: "贵南县",
                value: "632525"
            }],
            632600 : [{
                city: "果洛藏族自治州",
                text: "玛沁县",
                value: "632621"
            },
            {
                city: "果洛藏族自治州",
                text: "班玛县",
                value: "632622"
            },
            {
                city: "果洛藏族自治州",
                text: "甘德县",
                value: "632623"
            },
            {
                city: "果洛藏族自治州",
                text: "达日县",
                value: "632624"
            },
            {
                city: "果洛藏族自治州",
                text: "久治县",
                value: "632625"
            },
            {
                city: "果洛藏族自治州",
                text: "玛多县",
                value: "632626"
            }],
            632700 : [{
                city: "玉树藏族自治州",
                text: "玉树市",
                value: "632701"
            },
            {
                city: "玉树藏族自治州",
                text: "杂多县",
                value: "632722"
            },
            {
                city: "玉树藏族自治州",
                text: "称多县",
                value: "632723"
            },
            {
                city: "玉树藏族自治州",
                text: "治多县",
                value: "632724"
            },
            {
                city: "玉树藏族自治州",
                text: "囊谦县",
                value: "632725"
            },
            {
                city: "玉树藏族自治州",
                text: "曲麻莱县",
                value: "632726"
            }],
            632800 : [{
                city: "海西蒙古族藏族自治州",
                text: "格尔木市",
                value: "632801"
            },
            {
                city: "海西蒙古族藏族自治州",
                text: "德令哈市",
                value: "632802"
            },
            {
                city: "海西蒙古族藏族自治州",
                text: "乌兰县",
                value: "632821"
            },
            {
                city: "海西蒙古族藏族自治州",
                text: "都兰县",
                value: "632822"
            },
            {
                city: "海西蒙古族藏族自治州",
                text: "天峻县",
                value: "632823"
            }],
            640100 : [{
                city: "银川市",
                text: "市辖区",
                value: "640101"
            },
            {
                city: "银川市",
                text: "兴庆区",
                value: "640104"
            },
            {
                city: "银川市",
                text: "西夏区",
                value: "640105"
            },
            {
                city: "银川市",
                text: "金凤区",
                value: "640106"
            },
            {
                city: "银川市",
                text: "永宁县",
                value: "640121"
            },
            {
                city: "银川市",
                text: "贺兰县",
                value: "640122"
            },
            {
                city: "银川市",
                text: "灵武市",
                value: "640181"
            }],
            640200 : [{
                city: "石嘴山市",
                text: "市辖区",
                value: "640201"
            },
            {
                city: "石嘴山市",
                text: "大武口区",
                value: "640202"
            },
            {
                city: "石嘴山市",
                text: "惠农区",
                value: "640205"
            },
            {
                city: "石嘴山市",
                text: "平罗县",
                value: "640221"
            }],
            640300 : [{
                city: "吴忠市",
                text: "市辖区",
                value: "640301"
            },
            {
                city: "吴忠市",
                text: "利通区",
                value: "640302"
            },
            {
                city: "吴忠市",
                text: "红寺堡区",
                value: "640303"
            },
            {
                city: "吴忠市",
                text: "盐池县",
                value: "640323"
            },
            {
                city: "吴忠市",
                text: "同心县",
                value: "640324"
            },
            {
                city: "吴忠市",
                text: "青铜峡市",
                value: "640381"
            }],
            640400 : [{
                city: "固原市",
                text: "市辖区",
                value: "640401"
            },
            {
                city: "固原市",
                text: "原州区",
                value: "640402"
            },
            {
                city: "固原市",
                text: "西吉县",
                value: "640422"
            },
            {
                city: "固原市",
                text: "隆德县",
                value: "640423"
            },
            {
                city: "固原市",
                text: "泾源县",
                value: "640424"
            },
            {
                city: "固原市",
                text: "彭阳县",
                value: "640425"
            }],
            640500 : [{
                city: "中卫市",
                text: "市辖区",
                value: "640501"
            },
            {
                city: "中卫市",
                text: "沙坡头区",
                value: "640502"
            },
            {
                city: "中卫市",
                text: "中宁县",
                value: "640521"
            },
            {
                city: "中卫市",
                text: "海原县",
                value: "640522"
            }],
            650100 : [{
                city: "乌鲁木齐市",
                text: "市辖区",
                value: "650101"
            },
            {
                city: "乌鲁木齐市",
                text: "天山区",
                value: "650102"
            },
            {
                city: "乌鲁木齐市",
                text: "沙依巴克区",
                value: "650103"
            },
            {
                city: "乌鲁木齐市",
                text: "新市区",
                value: "650104"
            },
            {
                city: "乌鲁木齐市",
                text: "水磨沟区",
                value: "650105"
            },
            {
                city: "乌鲁木齐市",
                text: "头屯河区",
                value: "650106"
            },
            {
                city: "乌鲁木齐市",
                text: "达坂城区",
                value: "650107"
            },
            {
                city: "乌鲁木齐市",
                text: "米东区",
                value: "650109"
            },
            {
                city: "乌鲁木齐市",
                text: "乌鲁木齐县",
                value: "650121"
            }],
            650200 : [{
                city: "克拉玛依市",
                text: "市辖区",
                value: "650201"
            },
            {
                city: "克拉玛依市",
                text: "独山子区",
                value: "650202"
            },
            {
                city: "克拉玛依市",
                text: "克拉玛依区",
                value: "650203"
            },
            {
                city: "克拉玛依市",
                text: "白碱滩区",
                value: "650204"
            },
            {
                city: "克拉玛依市",
                text: "乌尔禾区",
                value: "650205"
            }],
            650400 : [{
                city: "吐鲁番市",
                text: "高昌区",
                value: "650402"
            },
            {
                city: "吐鲁番市",
                text: "鄯善县",
                value: "650421"
            },
            {
                city: "吐鲁番市",
                text: "托克逊县",
                value: "650422"
            }],
            650500 : [{
                city: "哈密市",
                text: "伊州区",
                value: "650502"
            },
            {
                city: "哈密市",
                text: "巴里坤哈萨克自治县",
                value: "650521"
            },
            {
                city: "哈密市",
                text: "伊吾县",
                value: "650522"
            }],
            652300 : [{
                city: "昌吉回族自治州",
                text: "昌吉市",
                value: "652301"
            },
            {
                city: "昌吉回族自治州",
                text: "阜康市",
                value: "652302"
            },
            {
                city: "昌吉回族自治州",
                text: "呼图壁县",
                value: "652323"
            },
            {
                city: "昌吉回族自治州",
                text: "玛纳斯县",
                value: "652324"
            },
            {
                city: "昌吉回族自治州",
                text: "奇台县",
                value: "652325"
            },
            {
                city: "昌吉回族自治州",
                text: "吉木萨尔县",
                value: "652327"
            },
            {
                city: "昌吉回族自治州",
                text: "木垒哈萨克自治县",
                value: "652328"
            }],
            652700 : [{
                city: "博尔塔拉蒙古自治州",
                text: "博乐市",
                value: "652701"
            },
            {
                city: "博尔塔拉蒙古自治州",
                text: "阿拉山口市",
                value: "652702"
            },
            {
                city: "博尔塔拉蒙古自治州",
                text: "精河县",
                value: "652722"
            },
            {
                city: "博尔塔拉蒙古自治州",
                text: "温泉县",
                value: "652723"
            }],
            652800 : [{
                city: "巴音郭楞蒙古自治州",
                text: "库尔勒市",
                value: "652801"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "轮台县",
                value: "652822"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "尉犁县",
                value: "652823"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "若羌县",
                value: "652824"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "且末县",
                value: "652825"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "焉耆回族自治县",
                value: "652826"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "和静县",
                value: "652827"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "和硕县",
                value: "652828"
            },
            {
                city: "巴音郭楞蒙古自治州",
                text: "博湖县",
                value: "652829"
            }],
            652900 : [{
                city: "阿克苏地区",
                text: "阿克苏市",
                value: "652901"
            },
            {
                city: "阿克苏地区",
                text: "温宿县",
                value: "652922"
            },
            {
                city: "阿克苏地区",
                text: "库车县",
                value: "652923"
            },
            {
                city: "阿克苏地区",
                text: "沙雅县",
                value: "652924"
            },
            {
                city: "阿克苏地区",
                text: "新和县",
                value: "652925"
            },
            {
                city: "阿克苏地区",
                text: "拜城县",
                value: "652926"
            },
            {
                city: "阿克苏地区",
                text: "乌什县",
                value: "652927"
            },
            {
                city: "阿克苏地区",
                text: "阿瓦提县",
                value: "652928"
            },
            {
                city: "阿克苏地区",
                text: "柯坪县",
                value: "652929"
            }],
            653000 : [{
                city: "克孜勒苏柯尔克孜自治州",
                text: "阿图什市",
                value: "653001"
            },
            {
                city: "克孜勒苏柯尔克孜自治州",
                text: "阿克陶县",
                value: "653022"
            },
            {
                city: "克孜勒苏柯尔克孜自治州",
                text: "阿合奇县",
                value: "653023"
            },
            {
                city: "克孜勒苏柯尔克孜自治州",
                text: "乌恰县",
                value: "653024"
            }],
            653100 : [{
                city: "喀什地区",
                text: "喀什市",
                value: "653101"
            },
            {
                city: "喀什地区",
                text: "疏附县",
                value: "653121"
            },
            {
                city: "喀什地区",
                text: "疏勒县",
                value: "653122"
            },
            {
                city: "喀什地区",
                text: "英吉沙县",
                value: "653123"
            },
            {
                city: "喀什地区",
                text: "泽普县",
                value: "653124"
            },
            {
                city: "喀什地区",
                text: "莎车县",
                value: "653125"
            },
            {
                city: "喀什地区",
                text: "叶城县",
                value: "653126"
            },
            {
                city: "喀什地区",
                text: "麦盖提县",
                value: "653127"
            },
            {
                city: "喀什地区",
                text: "岳普湖县",
                value: "653128"
            },
            {
                city: "喀什地区",
                text: "伽师县",
                value: "653129"
            },
            {
                city: "喀什地区",
                text: "巴楚县",
                value: "653130"
            },
            {
                city: "喀什地区",
                text: "塔什库尔干塔吉克自治县",
                value: "653131"
            }],
            653200 : [{
                city: "和田地区",
                text: "和田市",
                value: "653201"
            },
            {
                city: "和田地区",
                text: "和田县",
                value: "653221"
            },
            {
                city: "和田地区",
                text: "墨玉县",
                value: "653222"
            },
            {
                city: "和田地区",
                text: "皮山县",
                value: "653223"
            },
            {
                city: "和田地区",
                text: "洛浦县",
                value: "653224"
            },
            {
                city: "和田地区",
                text: "策勒县",
                value: "653225"
            },
            {
                city: "和田地区",
                text: "于田县",
                value: "653226"
            },
            {
                city: "和田地区",
                text: "民丰县",
                value: "653227"
            }],
            654000 : [{
                city: "伊犁哈萨克自治州",
                text: "伊宁市",
                value: "654002"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "奎屯市",
                value: "654003"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "霍尔果斯市",
                value: "654004"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "伊宁县",
                value: "654021"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "察布查尔锡伯自治县",
                value: "654022"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "霍城县",
                value: "654023"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "巩留县",
                value: "654024"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "新源县",
                value: "654025"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "昭苏县",
                value: "654026"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "特克斯县",
                value: "654027"
            },
            {
                city: "伊犁哈萨克自治州",
                text: "尼勒克县",
                value: "654028"
            }],
            654200 : [{
                city: "塔城地区",
                text: "塔城市",
                value: "654201"
            },
            {
                city: "塔城地区",
                text: "乌苏市",
                value: "654202"
            },
            {
                city: "塔城地区",
                text: "额敏县",
                value: "654221"
            },
            {
                city: "塔城地区",
                text: "沙湾县",
                value: "654223"
            },
            {
                city: "塔城地区",
                text: "托里县",
                value: "654224"
            },
            {
                city: "塔城地区",
                text: "裕民县",
                value: "654225"
            },
            {
                city: "塔城地区",
                text: "和布克赛尔蒙古自治县",
                value: "654226"
            }],
            654300 : [{
                city: "阿勒泰地区",
                text: "阿勒泰市",
                value: "654301"
            },
            {
                city: "阿勒泰地区",
                text: "布尔津县",
                value: "654321"
            },
            {
                city: "阿勒泰地区",
                text: "富蕴县",
                value: "654322"
            },
            {
                city: "阿勒泰地区",
                text: "福海县",
                value: "654323"
            },
            {
                city: "阿勒泰地区",
                text: "哈巴河县",
                value: "654324"
            },
            {
                city: "阿勒泰地区",
                text: "青河县",
                value: "654325"
            },
            {
                city: "阿勒泰地区",
                text: "吉木乃县",
                value: "654326"
            }],
            659000 : [{
                city: "自治区直辖县级行政区划",
                text: "石河子市",
                value: "659001"
            },
            {
                city: "自治区直辖县级行政区划",
                text: "阿拉尔市",
                value: "659002"
            },
            {
                city: "自治区直辖县级行政区划",
                text: "图木舒克市",
                value: "659003"
            },
            {
                city: "自治区直辖县级行政区划",
                text: "五家渠市",
                value: "659004"
            },
            {
                city: "自治区直辖县级行政区划",
                text: "铁门关市",
                value: "659006"
            }]
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "picker-render-view"
                },
                [i("div", {
                    ref: "select0",
                    staticClass: "select",
                    on: {
                        click: function(e) {
                            return t.showPicker(0)
                        }
                    }
                },
                [t._v(t._s(t.selectedText[0]))]), t._v(" "), i("picker", {
                    ref: "picker0",
                    attrs: {
                        "selected-index": t.selectedIndex[0],
                        title: t.title[0],
                        cancelTxt: t.$tc("pickerPage.cancelTxt", 1),
                        confirmTxt: t.$tc("pickerPage.confirmTxt", 1)
                    },
                    on: {
                        select: function(e) {
                            return t.handleSelect(0, arguments)
                        }
                    }
                }), t._v(" "), i("div", {
                    ref: "select1",
                    staticClass: "select",
                    on: {
                        click: function(e) {
                            return t.showPicker(1)
                        }
                    }
                },
                [t._v(t._s(t.selectedText[1]))]), t._v(" "), i("picker", {
                    ref: "picker1",
                    attrs: {
                        data: t.data[1],
                        "selected-index": t.selectedIndex[1],
                        title: t.title[1],
                        cancelTxt: t.$tc("pickerPage.cancelTxt", 2),
                        confirmTxt: t.$tc("pickerPage.confirmTxt", 2)
                    },
                    on: {
                        select: function(e) {
                            return t.handleSelect(1, arguments)
                        }
                    }
                }), t._v(" "), i("div", {
                    ref: "select2",
                    staticClass: "select",
                    on: {
                        click: function(e) {
                            return t.showPicker(2)
                        }
                    }
                },
                [t._v(t._s(t.selectedText[2]))]), t._v(" "), i("picker", {
                    ref: "picker2",
                    attrs: {
                        data: t.data[2],
                        "selected-index": t.selectedIndex[2],
                        title: t.title[2],
                        cancelTxt: t.$tc("pickerPage.cancelTxt", 1),
                        confirmTxt: t.$tc("pickerPage.confirmTxt", 1)
                    },
                    on: {
                        select: function(e) {
                            return t.handleSelect(2, arguments)
                        }
                    }
                }), t._v(" "), i("div", {
                    ref: "select3",
                    staticClass: "select",
                    on: {
                        click: function(e) {
                            return t.showPicker(3)
                        }
                    }
                },
                [t._v(t._s(t.selectedText[3]))]), t._v(" "), i("city-picker", {
                    ref: "picker3",
                    attrs: {
                        data: t.data[3],
                        "selected-index": t.selectedIndex[3],
                        title: t.title[3],
                        cancelTxt: t.$tc("pickerPage.cancelTxt", 1),
                        confirmTxt: t.$tc("pickerPage.confirmTxt", 1)
                    },
                    on: {
                        select: function(e) {
                            return t.handleSelect(3, arguments)
                        }
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        title: t.$t("examples.picker"),
                        desc: t.$t("pickerPage.desc")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("picker-render")], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(231);
        var a = i(0)(i(233), i(247), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(232);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("18bc7d75", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".example .page .wrapper{overflow:auto;padding-bottom:50px}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(74),
        s = a(c);
        e.
    default = {
            components: {
                Page: o.
            default,
                SlideRender: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(235);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("184393ff", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".slide-render-view .slide-wrapper{position:relative;width:100%;padding-top:40%;margin-bottom:10px;overflow:hidden}.slide-render-view .slide-wrapper .slide-content{position:absolute;top:0;left:0;width:100%;height:100%}.slide-render-view .group{margin-bottom:1rem;border:1px solid rgba(0,0,0,.1);border-radius:.3rem;background:#fff}.slide-render-view .group .item{height:3.2rem;border-bottom:1px solid rgba(0,0,0,.1)}.slide-render-view .group .item.sub{font-size:14px}.slide-render-view .group .item:last-child{border-bottom:none}.slide-render-view .group .item:nth-child(2n){background-color:rgba(0,0,0,.04)}.free-option .button-container button{padding:5px;border-radius:5px;background-color:#fff;outline:none}.free-option .button-container .active{background-color:#3b99fc;border:1px solid #fff;color:#fff}.free-option .button-container .change-button{background-color:#3b99fc;padding:5px 10px;color:#fff}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(75),
        o = a(l),
        c = i(69),
        s = a(c),
        n = i(70),
        r = a(n),
        u = i(241),
        v = a(u),
        x = [[{
            linkUrl: "http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg",
            id: 11351
        },
        {
            linkUrl: "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg",
            id: 11372
        }], [{
            linkUrl: "http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg",
            id: 11378
        },
        {
            linkUrl: "https://y.qq.com/msa/218/0_4085.html",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg",
            id: 11375
        },
        {
            linkUrl: "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg",
            id: 11287
        }]];
        e.
    default = {
            name: "slide-render",
            computed: {
                data: function() {
                    return x[this.index]
                }
            },
            data: function() {
                return {
                    index: 0,
                    turnToPrev: !1,
                    turnToNext: !1,
                    isAutoPlay: !0,
                    isLoop: !0,
                    isShowDot: !0,
                    speed: 400,
                    threshold: .3,
                    interval: 4e3
                }
            },
            methods: {
                changeData: function() {
                    this.index = (this.index + 1) % 2,
                    this.turnToPrev = !1,
                    this.turnToNext = !1
                },
                updateAutoPlay: function(t) {
                    this.isAutoPlay = t
                },
                updateInterval: function(t) {
                    t && (this.interval = +t)
                },
                updateLoop: function(t) {
                    this.isLoop = t
                },
                updateShowDot: function(t) {
                    this.isShowDot = t
                },
                turnToPrevFun: function() {
                    this.$refs.slide.slide.isInTransition || (this.turnTo(1), this.$refs.slide.prev())
                },
                turnToNextFun: function() {
                    this.$refs.slide.slide.isInTransition || (this.turnTo(2), this.$refs.slide.next())
                },
                turnTo: function(t) {
                    this.turnToPrev = 1 === t,
                    this.turnToNext = 2 === t
                },
                updateThreshold: function(t) {
                    t && (this.threshold = +t)
                },
                updateSpeed: function(t) {
                    t && (this.speed = +t)
                }
            },
            watch: {
                index: function() {
                    this.$refs.slide.update()
                }
            },
            components: {
                Slide: o.
            default,
                SwitchOption: s.
            default,
                FreeOption: v.
            default,
                InputOption: r.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(238);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("a03aa212", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".slide{min-height:1px}.slide .slide-group{position:relative;overflow:hidden;white-space:nowrap}.slide .slide-group .slide-item{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slide .slide-group .slide-item a{display:block;width:100%;overflow:hidden;text-decoration:none}.slide .slide-group .slide-item img{display:block;width:100%}.slide .dots{position:absolute;right:0;left:0;bottom:12px;-webkit-transform:translateZ(1px);transform:translateZ(1px);text-align:center;font-size:0}.slide .dots .dot{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:#ccc}.slide .dots .dot.active{width:20px;border-radius:5px;background:#fff}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(28),
        l = i(16),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (l);
        e.
    default = {
            name: "slide",
            props: {
                loop: {
                    type: Boolean,
                default:
                    !0
                },
                autoPlay: {
                    type: Boolean,
                default:
                    !0
                },
                interval: {
                    type: Number,
                default:
                    4e3
                },
                showDot: {
                    type: Boolean,
                default:
                    !0
                },
                click: {
                    type: Boolean,
                default:
                    !0
                },
                threshold: {
                    type: Number,
                default:
                    .3
                },
                speed: {
                    type: Number,
                default:
                    400
                }
            },
            data: function() {
                return {
                    dots: [],
                    currentPageIndex: 0
                }
            },
            mounted: function() {
                var t = this;
                this.update(),
                window.addEventListener("resize",
                function() {
                    t.slide && t.slide.enabled && (clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
                        t.slide.isInTransition ? t._onScrollEnd() : t.autoPlay && t._play(),
                        t.refresh()
                    },
                    60))
                })
            },
            activated: function() {
                if (this.slide) {
                    this.slide.enable();
                    var t = this.slide.getCurrentPage().pageX;
                    this.slide.goToPage(t, 0, 0),
                    this.currentPageIndex = t,
                    this.autoPlay && this._play()
                }
            },
            deactivated: function() {
                this.slide.disable(),
                clearTimeout(this.timer)
            },
            beforeDestroy: function() {
                this.slide.disable(),
                clearTimeout(this.timer)
            },
            methods: {
                update: function() {
                    var t = this;
                    this.slide && this.slide.destroy(),
                    this.$nextTick(function() {
                        t.init()
                    })
                },
                refresh: function() {
                    this._setSlideWidth(!0),
                    this.slide.refresh()
                },
                prev: function() {
                    this.slide.prev()
                },
                next: function() {
                    this.slide.next()
                },
                init: function() {
                    clearTimeout(this.timer),
                    this.currentPageIndex = 0,
                    this._setSlideWidth(),
                    this.showDot && this._initDots(),
                    this._initSlide(),
                    this.autoPlay && this._play()
                },
                _setSlideWidth: function(t) {
                    this.children = this.$refs.slideGroup.children;
                    for (var e = 0,
                    i = this.$refs.slide.clientWidth,
                    l = 0; l < this.children.length; l++) {
                        var o = this.children[l]; (0, a.addClass)(o, "slide-item"),
                        o.style.width = i + "px",
                        e += i
                    }
                    this.loop && !t && (e += 2 * i),
                    this.$refs.slideGroup.style.width = e + "px"
                },
                _initSlide: function() {
                    var t = this;
                    console.log(this.threshold),
                    this.slide = new o.
                default(this.$refs.slide, {
                        scrollX: !0,
                        scrollY: !1,
                        momentum: !1,
                        snap: {
                            loop: this.loop,
                            threshold: this.threshold,
                            speed: this.speed
                        },
                        bounce: !1,
                        stopPropagation: !0,
                        click: this.click
                    }),
                    this.slide.on("scrollEnd", this._onScrollEnd),
                    this.slide.on("touchEnd",
                    function() {
                        t.autoPlay && t._play()
                    }),
                    this.slide.on("beforeScrollStart",
                    function() {
                        t.autoPlay && clearTimeout(t.timer)
                    })
                },
                _onScrollEnd: function() {
                    var t = this.slide.getCurrentPage().pageX;
                    this.currentPageIndex = t,
                    this.autoPlay && this._play()
                },
                _initDots: function() {
                    this.dots = new Array(this.children.length)
                },
                _play: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.timer = setTimeout(function() {
                        t.slide.next()
                    },
                    this.interval)
                }
            },
            watch: {
                loop: function() {
                    this.update()
                },
                autoPlay: function() {
                    this.update()
                },
                speed: function() {
                    this.update()
                },
                threshold: function() {
                    this.update()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    ref: "slide",
                    staticClass: "slide"
                },
                [i("div", {
                    ref: "slideGroup",
                    staticClass: "slide-group"
                },
                [t._t("default")], 2), t._v(" "), t.showDot ? i("div", {
                    staticClass: "dots"
                },
                t._l(t.dots,
                function(e, a) {
                    return i("span", {
                        staticClass: "dot",
                        class: {
                            active: t.currentPageIndex === a
                        }
                    })
                }), 0) : t._e()])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(242);
        var a = i(0)(i(244), i(245), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(243);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("2be54c00", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".free-option{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;padding:12px 15px;font-size:14px}.free-option,.free-option .name{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.free-option .name{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            props: {
                name: {
                    type: String,
                default:
                    ""
                }
            },
            data: function() {
                return {}
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "free-option"
                },
                [i("span", {
                    staticClass: "name"
                },
                [t._v(t._s(t.name))]), t._v(" "), i("div", {
                    staticClass: "button-container"
                },
                [t._t("default")], 2)])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "slide-render-view"
                },
                [i("div", {
                    staticClass: "slide-wrapper"
                },
                [i("div", {
                    staticClass: "slide-content"
                },
                [i("slide", {
                    ref: "slide",
                    attrs: {
                        autoPlay: t.isAutoPlay,
                        loop: t.isLoop,
                        showDot: t.isShowDot,
                        interval: t.interval,
                        threshold: t.threshold,
                        speed: t.speed
                    }
                },
                t._l(t.data,
                function(t) {
                    return i("div", [i("a", {
                        attrs: {
                            href: t.linkUrl
                        }
                    },
                    [i("img", {
                        attrs: {
                            src: t.picUrl
                        }
                    })])])
                }), 0)], 1)]), t._v(" "), i("div", {
                    staticClass: "group"
                },
                [i("switch-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: t.$t("slidePage.isAutoPlayTip"),
                        value: t.isAutoPlay
                    },
                    on: {
                        "update:value": t.updateAutoPlay
                    }
                }), t._v(" "), t.isAutoPlay ? i("input-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: "interval",
                        value: t.interval
                    },
                    on: {
                        "update:value": t.updateInterval
                    }
                }) : t._e(), t._v(" "), i("switch-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: t.$t("slidePage.isLoopTip"),
                        value: t.isLoop
                    },
                    on: {
                        "update:value": t.updateLoop
                    }
                }), t._v(" "), i("input-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: "threshold",
                        value: t.threshold
                    },
                    on: {
                        "update:value": t.updateThreshold
                    }
                }), t._v(" "), i("input-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: "speed",
                        value: t.speed
                    },
                    on: {
                        "update:value": t.updateSpeed
                    }
                }), t._v(" "), i("switch-option", {
                    staticClass: "item sub",
                    attrs: {
                        name: t.$t("slidePage.isShowDotTip"),
                        value: t.isShowDot
                    },
                    on: {
                        "update:value": t.updateShowDot
                    }
                }), t._v(" "), i("free-option", {
                    staticClass: "free-option item",
                    attrs: {
                        name: t.$t("slidePage.pageTurn")
                    }
                },
                [i("button", {
                    class: {
                        active: t.turnToPrev
                    },
                    on: {
                        click: t.turnToPrevFun
                    }
                },
                [t._v("<<")]), t._v(" "), i("button", {
                    class: {
                        active: t.turnToNext
                    },
                    on: {
                        click: t.turnToNextFun
                    }
                },
                [t._v(">>")])]), t._v(" "), i("free-option", {
                    staticClass: "free-option item",
                    attrs: {
                        name: t.$t("slidePage.changeData")
                    }
                },
                [i("button", {
                    staticClass: "change-button",
                    on: {
                        click: t.changeData
                    }
                },
                [t._v(t._s(t.$t("slidePage.click")))])])], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        title: t.$t("examples.slide"),
                        desc: t.$t("slidePage.desc")
                    }
                },
                [i("div", {
                    staticClass: "slid",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("slide-render")], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(249);
        var a = i(0)(i(251), i(257), "data-v-17e2339e", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(250);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("30e721e4", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, "", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(252),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            data: function() {
                return {
                    items: [i(32), i(33), i(31), i(34)]
                }
            },
            components: {
                FullPageSlide: l.
            default
            },
            methods: {
                finish: function() {
                    this.$router.back()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        i(253);
        var a = i(0)(i(255), i(256), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(254);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("4d2a3d40", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".full-page-slide-wrapper{position:fixed;z-index:20;top:0;left:0;width:100%;height:100%;background:#efeff4;overflow:hidden}.full-page-slide-wrapper .slide,.full-page-slide-wrapper .slide .slide-group,.full-page-slide-wrapper .slide .slide-group .slide-item{height:100%}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper{position:relative;height:100%;background-size:cover;-webkit-transform:translateZ(0);transform:translateZ(0)}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper .button-wrapper{position:fixed;bottom:85px;display:block;width:100%;overflow:hidden}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper .button-wrapper .button{display:inline-block;width:130px;padding:15px 0;border:4px solid hsla(0,0%,100%,.7);border-radius:4px;color:hsla(0,0%,100%,.7);font-size:20px}.full-page-slide-wrapper .slide .sub-slide{height:300px;min-height:1px;position:relative}.full-page-slide-wrapper .slide .sub-slide .slide-group{position:relative;overflow:hidden;white-space:nowrap}.full-page-slide-wrapper .slide .sub-slide .slide-group .slide-item{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.full-page-slide-wrapper .slide .sub-slide .slide-group .slide-item a{display:block;width:100%;overflow:hidden;text-decoration:none}.full-page-slide-wrapper .slide .sub-slide .slide-group .slide-item img{display:block;width:100%}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(75),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a),
        o = [{
            linkUrl: "http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg",
            id: 11378
        },
        {
            linkUrl: "https://y.qq.com/msa/218/0_4085.html",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg",
            id: 11375
        },
        {
            linkUrl: "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian",
            picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg",
            id: 11287
        }];
        e.
    default = {
            name: "pull-page-slide",
            props: {
                data: {
                    type: Array,
                default:
                    []
                }
            },
            data: function() {
                return {
                    items: this.data,
                    slideData: o
                }
            },
            components: {
                Slide: l.
            default
            },
            methods: {
                handleClick: function() {
                    this.$emit("finish")
                },
                getStyle: function(t) {
                    return "background-image:url(" + this.items[t] + ")"
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return t.items.length ? i("div", {
                    staticClass: "full-page-slide-wrapper"
                },
                [i("slide", {
                    ref: "slide",
                    attrs: {
                        autoPlay: !1,
                        loop: !1
                    }
                },
                t._l(t.items,
                function(e, a) {
                    return i("div", [i("div", {
                        staticClass: "full-page-img-wrapper",
                        style: t.getStyle(a)
                    },
                    [a === t.items.length - 1 ? i("div", {
                        staticClass: "button-wrapper",
                        on: {
                            click: function(e) {
                                return t.handleClick()
                            }
                        }
                    },
                    [i("span", {
                        staticClass: "button"
                    },
                    [t._v(t._s(t.$t("fullPageSlideComponent.buttonTxt")))])]) : t._e(), t._v(" "), 0 === a ? i("slide", {
                        staticClass: "sub-slide",
                        attrs: {
                            loop: !0
                        }
                    },
                    t._l(t.slideData,
                    function(t) {
                        return i("div", [i("a", {
                            attrs: {
                                href: t.linkUrl
                            }
                        },
                        [i("img", {
                            attrs: {
                                src: t.picUrl
                            }
                        })])])
                    }), 0) : t._e()], 1)])
                }), 0)], 1) : t._e()
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("full-page-slide", {
                    attrs: {
                        data: t.items
                    },
                    on: {
                        finish: t.finish
                    }
                })
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(259);
        var a = i(0)(i(261), i(272), "data-v-1d8299fd", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(260);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("65dc36d1", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, "", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(262),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            data: function() {
                return {
                    items: [i(32), i(33), i(31), i(34)]
                }
            },
            components: {
                FullPageSlide: l.
            default
            },
            methods: {
                finish: function() {
                    this.$router.back()
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        i(263);
        var a = i(0)(i(265), i(271), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(264);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("1272c5dd", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".full-page-slide-wrapper{position:fixed;z-index:20;top:0;left:0;width:100%;height:100%;background:#efeff4;overflow:hidden}.full-page-slide-wrapper .slide,.full-page-slide-wrapper .slide .slide-group{height:100%}.full-page-slide-wrapper .slide .slide-group .slide-item{height:100%;width:100%}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper{position:relative;height:100%;background-size:cover;-webkit-transform:translateZ(0);transform:translateZ(0)}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper .button-wrapper{position:fixed;bottom:85px;display:block;width:100%;overflow:hidden}.full-page-slide-wrapper .slide .slide-group .slide-item .full-page-img-wrapper .button-wrapper .button{display:inline-block;width:130px;padding:15px 0;border:4px solid hsla(0,0%,100%,.7);border-radius:4px;color:hsla(0,0%,100%,.7);font-size:20px}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(266),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            name: "pull-page-slide",
            props: {
                data: {
                    type: Array,
                default:
                    []
                }
            },
            data: function() {
                return {
                    items: this.data
                }
            },
            components: {
                Slide: l.
            default
            },
            methods: {
                handleClick: function() {
                    this.$emit("finish")
                },
                getStyle: function(t) {
                    return "background-image:url(" + this.items[t] + ")"
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        i(267);
        var a = i(0)(i(269), i(270), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(268);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("07f8b4c4", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".slide{min-height:1px}.slide .slide-group{position:relative;overflow:hidden;white-space:nowrap}.slide .slide-group .slide-item{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slide .slide-group .slide-item a{display:block;height:100%;overflow:hidden;text-decoration:none}.slide .slide-group .slide-item img{display:block;height:100%}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(28),
        l = i(16),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (l);
        e.
    default = {
            name: "slide",
            props: {
                loop: {
                    type: Boolean,
                default:
                    !0
                },
                autoPlay: {
                    type: Boolean,
                default:
                    !0
                },
                interval: {
                    type: Number,
                default:
                    4e3
                },
                click: {
                    type: Boolean,
                default:
                    !0
                }
            },
            data: function() {
                return {
                    currentPageIndex: 0
                }
            },
            mounted: function() {
                var t = this;
                this.update(),
                window.addEventListener("resize",
                function() {
                    t.slide && t.slide.enabled && (clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
                        t.slide.isInTransition ? t._onScrollEnd() : t.autoPlay && t._play(),
                        t.refresh()
                    },
                    60))
                })
            },
            activated: function() {
                if (this.slide) {
                    this.slide.enable();
                    var t = this.slide.getCurrentPage().pageY;
                    this.slide.goToPage(0, t, 0),
                    this.currentPageIndex = t,
                    this.autoPlay && this._play()
                }
            },
            deactivated: function() {
                this.slide.disable(),
                clearTimeout(this.timer)
            },
            beforeDestroy: function() {
                this.slide.disable(),
                clearTimeout(this.timer)
            },
            methods: {
                update: function() {
                    var t = this;
                    this.slide && this.slide.destroy(),
                    this.$nextTick(function() {
                        t.init()
                    })
                },
                refresh: function() {
                    this._setSlideHeight(!0),
                    this.slide.refresh()
                },
                next: function() {
                    this.slide.next()
                },
                init: function() {
                    clearTimeout(this.timer),
                    this.currentPageIndex = 0,
                    this._setSlideHeight(),
                    this._initSlide(),
                    this.autoPlay && this._play()
                },
                _setSlideHeight: function(t) {
                    this.children = this.$refs.slideGroup.children;
                    for (var e = 0,
                    i = this.$refs.slide.clientHeight,
                    l = 0; l < this.children.length; l++) {
                        var o = this.children[l]; (0, a.addClass)(o, "slide-item"),
                        o.style.height = i + "px",
                        e += i
                    }
                    this.loop && !t && (e += 2 * i),
                    this.$refs.slideGroup.style.height = e + "px"
                },
                _initSlide: function() {
                    var t = this;
                    this.slide = new o.
                default(this.$refs.slide, {
                        scrollX: !1,
                        scrollY: !0,
                        momentum: !1,
                        snap: {
                            loop: this.loop,
                            threshold: .3,
                            speed: 400,
                            easing: {
                                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                            }
                        },
                        bounce: !1,
                        click: this.click
                    }),
                    this.slide.on("scrollEnd", this._onScrollEnd),
                    this.slide.on("touchEnd",
                    function() {
                        t.autoPlay && t._play()
                    }),
                    this.slide.on("beforeScrollStart",
                    function() {
                        t.autoPlay && clearTimeout(t.timer)
                    })
                },
                _onScrollEnd: function() {
                    var t = this.slide.getCurrentPage().pageY;
                    this.currentPageIndex = t,
                    this.autoPlay && this._play()
                },
                _play: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.timer = setTimeout(function() {
                        t.slide.next()
                    },
                    this.interval)
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    ref: "slide",
                    staticClass: "slide"
                },
                [i("div", {
                    ref: "slideGroup",
                    staticClass: "slide-group"
                },
                [t._t("default")], 2)])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return t.items.length ? i("div", {
                    staticClass: "full-page-slide-wrapper"
                },
                [i("slide", {
                    ref: "slide",
                    attrs: {
                        loop: !0,
                        autoPlay: !1,
                        showDot: !1
                    }
                },
                t._l(t.items,
                function(e, a) {
                    return i("div", [i("div", {
                        staticClass: "full-page-img-wrapper",
                        style: t.getStyle(a)
                    },
                    [a === t.items.length - 1 ? i("div", {
                        staticClass: "button-wrapper",
                        on: {
                            click: function(e) {
                                return t.handleClick()
                            }
                        }
                    },
                    [i("span", {
                        staticClass: "button"
                    },
                    [t._v(t._s(t.$t("fullPageSlideComponent.buttonTxt")))])]) : t._e()])])
                }), 0)], 1) : t._e()
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("full-page-slide", {
                    attrs: {
                        data: t.items
                    },
                    on: {
                        finish: t.finish
                    }
                })
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(274);
        var a = i(0)(i(276), i(277), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(275);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("6d83a704", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".free-scroll-view .free-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0}.free-scroll-view .free-scroll-container .scroll-content{display:inline-block;min-width:100%}.free-scroll-view .free-scroll-container .scroll-content .list-content{background-color:#efeff4}.free-scroll-view .free-scroll-container .scroll-content .content{width:1500px;height:1000px}.free-scroll-view .free-scroll-container .scroll-content .content p{font-size:16px;padding:20px;line-height:200%}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(9),
        s = a(c);
        e.
    default = {
            data: function() {
                return {
                    freeScroll: !0,
                    scrollbar: {
                        fade: !1,
                        interactive: !0
                    },
                    bounce: {
                        bottom: !1,
                        left: !1,
                        right: !1,
                        top: !1
                    },
                    zoom: !0,
                    mouseWheel: !0,
                    imgUrl: i(51)
                }
            },
            methods: {
                onScrollEnd: function() {
                    console.log("end")
                },
                onScrollStart: function() {
                    console.log("start")
                }
            },
            components: {
                Page: o.
            default,
                Scroll: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    staticClass: "free-scroll-view",
                    attrs: {
                        title: t.$t("examples.freeScroll"),
                        desc: t.$t("freeScrollPage.desc")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("div", {
                    staticClass: "free-scroll-container"
                },
                [i("scroll", {
                    ref: "scroll",
                    attrs: {
                        freeScroll: t.freeScroll,
                        scrollbar: t.scrollbar,
                        mouseWheel: t.mouseWheel,
                        bounce: t.bounce,
                        zoom: t.zoom,
                        listenScrollEnd: !0,
                        listenBeforeScroll: !0
                    },
                    on: {
                        "scroll-end": t.onScrollEnd,
                        "scroll-start": t.onScrollStart
                    }
                },
                [i("div", {
                    staticClass: "content"
                },
                [i("p", [t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), t._v(" "), i("p", [t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), t._v(" "), i("p", [t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), t._v(" "), i("p", [t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), t._v(" "), i("p", [t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])], 1)])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(0)(i(279), i(284), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(76),
        s = a(c);
        e.
    default = {
            components: {
                Page: o.
            default,
                FormListRender: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(281);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("7a0a0412", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".form-list-render-view{position:absolute;top:0;left:0;bottom:0;right:0}.form-list-render-view .content li{padding:30px;border-bottom:1px solid #e5e5e5}.form-list-render-view .content li .text-input{border:1px solid #e5e5e5;border-radius:3px}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(9),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            data: function() {
                return {
                    options: {
                        click: !0,
                        listenBeforeScroll: !0
                    },
                    items: Array(10),
                    checkedItems: []
                }
            },
            components: {
                Scroll: l.
            default
            },
            mounted: function() {},
            methods: {
                clickItem: function(t) {
                    console.log("click item", t)
                },
                clickInpunt: function(t) {
                    console.log("click input", t)
                },
                clickButton: function(t) {
                    console.log("click button", t)
                },
                beforeScrollStart: function() {},
                focusHandle: function(t) {
                    console.log("input " + t + ": focus")
                },
                blurHandle: function(t) {
                    console.log("input " + t + ": blur")
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "form-list-render-view"
                },
                [i("scroll", {
                    ref: "scroll",
                    attrs: {
                        click: t.options.click,
                        tap: t.options.tap,
                        listenBeforeScroll: t.options.listenBeforeScroll
                    },
                    on: {
                        beforeScrollStart: t.beforeScrollStart
                    }
                },
                [i("ul", {
                    ref: "formList",
                    staticClass: "content"
                },
                [t._l(t.items,
                function(e, a) {
                    return [i("li", {
                        ref: "listItem",
                        refInFor: !0,
                        on: {
                            click: function(e) {
                                return t.clickItem(a)
                            }
                        }
                    },
                    [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checkedItems,
                            expression: "checkedItems"
                        }],
                        attrs: {
                            id: "input" + a,
                            type: "checkbox"
                        },
                        domProps: {
                            value: a,
                            checked: Array.isArray(t.checkedItems) ? t._i(t.checkedItems, a) > -1 : t.checkedItems
                        },
                        on: {
                            change: function(e) {
                                var i = t.checkedItems,
                                l = e.target,
                                o = !!l.checked;
                                if (Array.isArray(i)) {
                                    var c = a,
                                    s = t._i(i, c);
                                    l.checked ? s < 0 && (t.checkedItems = i.concat([c])) : s > -1 && (t.checkedItems = i.slice(0, s).concat(i.slice(s + 1)))
                                } else t.checkedItems = o
                            }
                        }
                    }), t._v(" "), i("label", {
                        attrs: {
                            for: "input" + a
                        },
                        on: {
                            click: function(t) {
                                t.stopPropagation()
                            }
                        }
                    },
                    [t._v(t._s(t.$t("formListPage.previousTxt") + a + t.$t("formListPage.followingTxt")))]), t._v(" "), i("input", {
                        staticClass: "text-input",
                        attrs: {
                            type: "text"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.clickInpunt(a)
                            },
                            focus: function(e) {
                                return t.focusHandle(a)
                            },
                            blur: function(e) {
                                return t.blurHandle(a)
                            }
                        }
                    }), t._v(" "), i("span", [t._v("input " + t._s(a))]), t._v(" "), i("a", {
                        attrs: {
                            href: "https://github.com/didi/cube-ui"
                        }
                    },
                    [t._v("cube-ui")]), t._v(" "), i("button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.clickButton(a)
                            }
                        }
                    },
                    [t._v("click me")])])]
                })], 2)])], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        title: t.$t("examples.formList"),
                        desc: t.$t("formListPage.desc")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("form-list-render")], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        var a = i(0)(i(286), i(292), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(77),
        s = a(c);
        e.
    default = {
            components: {
                Page: o.
            default,
                GoodListRender: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        var a = i(288);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("e0b91a06", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".goods-list-render-view{width:100%;height:100%}.goods-list-render-view .scroll-wrapper{position:absolute;background-color:#fff;top:0;left:0;width:100%;height:100%;overflow:hidden}.goods-list-render-view .scroll-wrapper .scroll{height:100%}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper{overflow:hidden}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:18px;padding-bottom:18px;border-bottom:1px solid rgba(7,17,27,.1)}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item:last-child{margin-bottom:0}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item:last-child:after,.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item:last-child:before{display:none}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .icon{-webkit-box-flex:0;-webkit-flex:0 0 57px;-ms-flex:0 0 57px;flex:0 0 57px;margin-right:10px}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .name{margin:2px 0 8px;height:14px;line-height:14px;font-size:14px;color:#07111b}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .desc,.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .extra{line-height:10px;font-size:10px;color:#93999f}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .desc{line-height:12px;margin-bottom:8px}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .extra .count{margin-right:12px}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .price{font-weight:700;line-height:24px}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .price .now{margin-right:8px;font-size:14px;color:#f01414}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .price .old{text-decoration:line-through;font-size:10px;color:#93999f}.goods-list-render-view .scroll-wrapper .scroll .foods-wrapper .food-item .content .cartcontrol-wrapper{position:absolute;right:0;bottom:12px}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(9),
        o = a(l),
        c = i(290),
        s = a(c),
        n = i(16),
        r = a(n),
        u = [];
        s.
    default.goods.forEach(function(t) {
            u = u.concat(t.foods)
        }),
        e.
    default = {
            data: function() {
                return {
                    foods: u
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.scroll = new r.
                default(t.$refs.scroll, {
                        mouseWheel: !0,
                        scrollbar: {
                            fade: !1,
                            interactive: !0
                        },
                        dblclick: !0,
                        probeType: 3
                    }),
                    t.scroll.on("scrollStart",
                    function() {
                        console.log("scrollStart")
                    }),
                    t.scroll.on("scroll",
                    function(t) {
                        console.log("pos:", t)
                    }),
                    t.scroll.on("scrollEnd",
                    function() {
                        console.log("scrollEnd")
                    }),
                    t.scroll.on("dblclick",
                    function(t) {
                        console.log("dblclick:", t)
                    }),
                    t._appendFood()
                })
            },
            destroyed: function() {
                this.scroll && this.scroll.destroy()
            },
            methods: {
                _appendFood: function() {
                    for (; this.foods.length < 100;) this.foods = this.foods.concat(u),
                    this._appendFood()
                }
            },
            components: {
                Scroll: o.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            seller: {
                name: "粥品香坊（回龙观）",
                description: "蜂鸟专送",
                deliveryTime: 38,
                score: 4.2,
                serviceScore: 4.1,
                foodScore: 4.3,
                rankRate: 69.2,
                minPrice: 20,
                deliveryPrice: 4,
                ratingCount: 24,
                sellCount: 90,
                bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
                supports: [{
                    type: 0,
                    description: "在线支付满28减5"
                },
                {
                    type: 1,
                    description: "VC无限橙果汁全场8折"
                },
                {
                    type: 2,
                    description: "单人精彩套餐"
                },
                {
                    type: 3,
                    description: "该商家支持发票,请下单写好发票抬头"
                },
                {
                    type: 4,
                    description: "已加入“外卖保”计划,食品安全保障"
                }],
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
                pics: ["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],
                infos: ["该商家支持发票,请下单写好发票抬头", "品类:其他菜系,包子粥店", "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340", "营业时间:10:00-20:30"]
            },
            goods: [{
                name: "热销榜",
                type: -1,
                foods: [{
                    name: "皮蛋瘦肉粥",
                    price: 10,
                    oldPrice: "",
                    description: "咸粥",
                    sellCount: 229,
                    rating: 100,
                    info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "很喜欢的粥",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 1,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "扁豆焖面",
                    price: 14,
                    oldPrice: "",
                    description: "",
                    sellCount: 188,
                    rating: 96,
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 1,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    info: "",
                    icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "葱花饼",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 124,
                    rating: 85,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "没啥味道",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 1,
                        text: "很一般啊",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "牛肉馅饼",
                    price: 14,
                    oldPrice: "",
                    description: "",
                    sellCount: 114,
                    rating: 91,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "难吃不推荐",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "招牌猪肉白菜锅贴/10个",
                    price: 17,
                    oldPrice: "",
                    description: "",
                    sellCount: 101,
                    rating: 78,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "不脆,不好吃",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "南瓜粥",
                    price: 9,
                    oldPrice: "",
                    description: "甜粥",
                    sellCount: 91,
                    rating: 100,
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "红豆薏米美肤粥",
                    price: 12,
                    oldPrice: "",
                    description: "甜粥",
                    sellCount: 86,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "八宝酱菜",
                    price: 4,
                    oldPrice: "",
                    description: "",
                    sellCount: 84,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "红枣山药糙米粥",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 81,
                    rating: 91,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "糊塌子",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 80,
                    rating: 93,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "单人精彩套餐",
                type: 2,
                foods: [{
                    name: "红枣山药粥套餐",
                    price: 29,
                    oldPrice: 36,
                    description: "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                    sellCount: 17,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "冰爽饮品限时特惠",
                type: 1,
                foods: [{
                    name: "VC无限橙果汁",
                    price: 8,
                    oldPrice: 10,
                    description: "",
                    sellCount: 15,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "还可以",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "精选热菜",
                type: -1,
                foods: [{
                    name: "娃娃菜炖豆腐",
                    price: 17,
                    oldPrice: "",
                    description: "",
                    sellCount: 43,
                    rating: 92,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "菜量还可以,味道还可以",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "手撕包菜",
                    price: 16,
                    oldPrice: "",
                    description: "",
                    sellCount: 29,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "香酥黄金鱼/3条",
                    price: 11,
                    oldPrice: "",
                    description: "",
                    sellCount: 15,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "爽口凉菜",
                type: -1,
                foods: [{
                    name: "八宝酱菜",
                    price: 4,
                    oldPrice: "",
                    description: "",
                    sellCount: 84,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "拍黄瓜",
                    price: 9,
                    oldPrice: "",
                    description: "",
                    sellCount: 28,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "精选套餐",
                type: -1,
                foods: [{
                    name: "红豆薏米粥套餐",
                    price: 37,
                    oldPrice: "",
                    description: "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                    sellCount: 3,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "皮蛋瘦肉粥套餐",
                    price: 31,
                    oldPrice: "",
                    description: "",
                    sellCount: 12,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "果拼果汁",
                type: -1,
                foods: [{
                    name: "蜜瓜圣女萝莉杯",
                    price: 6,
                    oldPrice: "",
                    description: "",
                    sellCount: 1,
                    rating: "",
                    info: "",
                    ratings: [],
                    icon: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "加多宝",
                    price: 6,
                    oldPrice: "",
                    description: "",
                    sellCount: 7,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "VC无限橙果汁",
                    price: 8,
                    oldPrice: 10,
                    description: "",
                    sellCount: 15,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "还可以",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "小吃主食",
                type: -1,
                foods: [{
                    name: "扁豆焖面",
                    price: 14,
                    oldPrice: "",
                    description: "",
                    sellCount: 188,
                    rating: 96,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 1,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "葱花饼",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 124,
                    rating: 85,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "没啥味道",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 1,
                        text: "很一般啊",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "牛肉馅饼",
                    price: 14,
                    oldPrice: "",
                    description: "",
                    sellCount: 114,
                    rating: 91,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "难吃不推荐",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "招牌猪肉白菜锅贴/10个",
                    price: 17,
                    oldPrice: "",
                    description: "",
                    sellCount: 101,
                    rating: 78,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 1,
                        text: "不脆,不好吃",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "糊塌子",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 80,
                    rating: 93,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            },
            {
                name: "特色粥品",
                type: -1,
                foods: [{
                    name: "皮蛋瘦肉粥",
                    price: 10,
                    oldPrice: "",
                    description: "咸粥",
                    sellCount: 229,
                    rating: 100,
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "很喜欢的粥",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 1,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "南瓜粥",
                    price: 9,
                    oldPrice: "",
                    description: "甜粥",
                    sellCount: 91,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "红豆薏米美肤粥",
                    price: 12,
                    oldPrice: "",
                    description: "甜粥",
                    sellCount: 86,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "红枣山药糙米粥",
                    price: 10,
                    oldPrice: "",
                    description: "",
                    sellCount: 81,
                    rating: 91,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "鲜蔬菌菇粥",
                    price: 11,
                    oldPrice: "",
                    description: "咸粥",
                    sellCount: 56,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: ""
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
                    name: "田园蔬菜粥",
                    price: 10,
                    oldPrice: "",
                    description: "咸粥",
                    sellCount: 33,
                    rating: 100,
                    info: "",
                    ratings: [{
                        username: "3******c",
                        rateTime: 1469281964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "2******3",
                        rateTime: 1469271264e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        username: "3******b",
                        rateTime: 1469261964e3,
                        rateType: 0,
                        text: "",
                        avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }],
                    icon: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                    image: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                }]
            }],
            ratings: [{
                username: "3******c",
                rateTime: 1469281964e3,
                deliveryTime: 30,
                score: 5,
                rateType: 0,
                text: "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: ["南瓜粥", "皮蛋瘦肉粥", "扁豆焖面", "娃娃菜炖豆腐", "牛肉馅饼"]
            },
            {
                username: "2******3",
                rateTime: 1469271264e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "服务态度不错",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: ["扁豆焖面"]
            },
            {
                username: "3******b",
                rateTime: 1469261964e3,
                score: 3,
                rateType: 1,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "1******c",
                rateTime: 1469261864e3,
                deliveryTime: 20,
                score: 5,
                rateType: 0,
                text: "良心店铺",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "2******d",
                rateTime: 1469251264e3,
                deliveryTime: 10,
                score: 4,
                rateType: 0,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "9******0",
                rateTime: 1469241964e3,
                deliveryTime: 70,
                score: 1,
                rateType: 1,
                text: "送货速度蜗牛一样",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "d******c",
                rateTime: 1469231964e3,
                deliveryTime: 30,
                score: 5,
                rateType: 0,
                text: "很喜欢的粥店",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "2******3",
                rateTime: 1469221264e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "量给的还可以",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "3******8",
                rateTime: 1469211964e3,
                deliveryTime: "",
                score: 3,
                rateType: 1,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "a******a",
                rateTime: 1469201964e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "孩子喜欢吃这家",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: ["南瓜粥"]
            },
            {
                username: "3******3",
                rateTime: 1469191264e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "粥挺好吃的",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "t******b",
                rateTime: 1469181964e3,
                deliveryTime: "",
                score: 3,
                rateType: 1,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "f******c",
                rateTime: 1469171964e3,
                deliveryTime: 15,
                score: 5,
                rateType: 0,
                text: "送货速度很快",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "k******3",
                rateTime: 1469161264e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "u******b",
                rateTime: 1469151964e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "下雨天给快递小哥点个赞",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "s******c",
                rateTime: 1469141964e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "好",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "z******3",
                rateTime: 1469131264e3,
                deliveryTime: "",
                score: 5,
                rateType: 0,
                text: "吃了还想再吃",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "n******b",
                rateTime: 1469121964e3,
                deliveryTime: "",
                score: 3,
                rateType: 1,
                text: "发票开的不对",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "m******c",
                rateTime: 1469111964e3,
                deliveryTime: 30,
                score: 5,
                rateType: 0,
                text: "好吃",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "l******3",
                rateTime: 1469101264e3,
                deliveryTime: 40,
                score: 5,
                rateType: 0,
                text: "还不错吧",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "3******o",
                rateTime: 1469091964e3,
                deliveryTime: "",
                score: 2,
                rateType: 1,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "3******p",
                rateTime: 1469081964e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "很喜欢的粥",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "o******k",
                rateTime: 1469071264e3,
                deliveryTime: "",
                score: 5,
                rateType: 0,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            },
            {
                username: "k******b",
                rateTime: 1469061964e3,
                deliveryTime: "",
                score: 4,
                rateType: 0,
                text: "",
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                recommend: []
            }]
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "goods-list-render-view"
                },
                [i("div", {
                    staticClass: "scroll-wrapper"
                },
                [i("div", {
                    ref: "scroll",
                    staticClass: "scroll"
                },
                [i("ul", {
                    staticClass: "foods-wrapper"
                },
                t._l(t.foods,
                function(e) {
                    return i("li", {
                        staticClass: "food-item border-1px"
                    },
                    [i("div", {
                        staticClass: "icon"
                    },
                    [i("img", {
                        attrs: {
                            width: "57",
                            height: "57",
                            src: e.icon
                        }
                    })]), t._v(" "), i("div", {
                        staticClass: "content"
                    },
                    [i("h2", {
                        staticClass: "name"
                    },
                    [t._v(t._s(e.name))]), t._v(" "), i("p", {
                        staticClass: "desc"
                    },
                    [t._v(t._s(e.description))]), t._v(" "), i("div", {
                        staticClass: "extra"
                    },
                    [i("span", {
                        staticClass: "count"
                    },
                    [t._v("月售" + t._s(e.sellCount) + "份")]), i("span", [t._v("好评率" + t._s(e.rating) + "%")])]), t._v(" "), i("div", {
                        staticClass: "price"
                    },
                    [i("span", {
                        staticClass: "now"
                    },
                    [t._v("￥" + t._s(e.price))]), t._v(" "), i("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.oldPrice,
                            expression: "food.oldPrice"
                        }],
                        staticClass: "old"
                    },
                    [t._v("￥" + t._s(e.oldPrice))])])])])
                }), 0)])])])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        title: t.$t("examples.goodsList")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("good-list-render")], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(294);
        var a = i(0)(i(296), i(302), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(295);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("68c9a1ac", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".navigator-view .navigator-container{height:52px;background:#fff;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.12);box-shadow:0 2px 3px rgba(0,0,0,.12);overflow:hidden}.navigator-view .tab-render-content{position:absolute;left:0;top:50px;right:0;bottom:0;margin-top:15px;padding:15px;background:#fff;line-height:20px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1)}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(7),
        o = a(l),
        c = i(297),
        s = a(c),
        n = [{
            id: 1,
            name: "slide"
        },
        {
            id: 2,
            name: "form-list"
        },
        {
            id: 3,
            name: "vertical-scroll"
        },
        {
            id: 4,
            name: "goods-list"
        },
        {
            id: 5,
            name: "picker"
        }],
        r = [{
            id: 1,
            name: "slide组件"
        },
        {
            id: 2,
            name: "表单组件"
        },
        {
            id: 3,
            name: "垂直滚动"
        },
        {
            id: 4,
            name: "商品列表"
        },
        {
            id: 5,
            name: "picker组件"
        }];
        e.
    default = {
            data: function() {
                return {
                    navList: "en" === this.$i18n.locale ? n: r,
                    currentTabIndex: 1
                }
            },
            methods: {
                isCurrent: function(t) {
                    return t === this.currentTabIndex
                },
                change: function(t) {
                    void 0 !== t && (this.currentTabIndex = t.id),
                    this.$router.replace("/examples/nav-list/" + this.currentTabIndex + "/" + this.$i18n.locale)
                }
            },
            components: {
                Page: o.
            default,
                Navigator: s.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        i(298);
        var a = i(0)(i(300), i(301), null, null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(299);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("bf7fb74a", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".navigator-component .list-wrapper{background:none}.navigator-component .list-wrapper .scroll-content{display:inline-block}.navigator-component .list-wrapper .tab-list{margin:0 auto}.navigator-component .list-wrapper .tab-list .tab-item{display:inline-block;line-height:54px}.navigator-component .list-wrapper .tab-list .tab-item .tab-name{display:block;position:relative;padding:0 15px 0 14px;font-size:14px;color:#666}.navigator-component .list-wrapper .tab-list .tab-item .tab-name.link-active{-webkit-transition:all .2s;transition:all .2s;-webkit-transform:scale(1.04);transform:scale(1.04);color:#fc9153}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(9),
        l = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (a);
        e.
    default = {
            props: {
                navList: {
                    type: Array,
                default:
                    function() {
                        return [{
                            id:
                            1,
                            name: "default"
                        }]
                    }
                },
                currentTabIndex: {
                    type: Number,
                default:
                    null
                }
            },
            data: function() {
                return {
                    currentTab: 4,
                    current: 1
                }
            },
            mounted: function() {
                var t = this;
                this._initTabListWidth(),
                this.$emit("change"),
                null === this.currentTabIndex ? this.current = this.currentTab: this.current = this.currentTabIndex,
                setTimeout(function() {
                    t._adjust(t.current)
                },
                500)
            },
            methods: {
                isCurrentTab: function(t) {
                    return t === this.current
                },
                selectNav: function(t) {
                    this.current = t.id,
                    this._adjust(t.id),
                    this.$emit("change", t)
                },
                _initTabListWidth: function() {
                    for (var t = this.$refs.tabList,
                    e = t.children,
                    i = 0,
                    a = 0; a < e.length; a++) i += e[a].clientWidth;
                    t.style.width = i + 1 + "px"
                },
                _adjust: function(t) {
                    var e = this.$refs.viewport.clientWidth,
                    i = this.$refs.tabList.clientWidth,
                    a = Math.min(0, e - i),
                    l = e / 2,
                    o = this.$refs.tabList.children,
                    c = 0;
                    this.navList.every(function(e, i) {
                        return e.id !== t && (c += o[i].clientWidth, !0)
                    });
                    var s = l - c;
                    s = Math.max(a, Math.min(0, s)),
                    this.$refs.scroll.scrollTo(s, 0, 300)
                }
            },
            components: {
                Scroll: l.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    ref: "viewport",
                    staticClass: "navigator-component"
                },
                [i("scroll", {
                    ref: "scroll",
                    attrs: {
                        direction: "horizontal"
                    }
                },
                [i("ul", {
                    ref: "tabList",
                    staticClass: "tab-list"
                },
                t._l(t.navList,
                function(e) {
                    return i("li", {
                        staticClass: "tab-item",
                        on: {
                            click: function(i) {
                                return t.selectNav(e)
                            }
                        }
                    },
                    [t._t("item", [i("span", {
                        staticClass: "tab-name",
                        class: {
                            "link-active": t.isCurrentTab(e.id)
                        }
                    },
                    [t._v(t._s(e.name))])], {
                        text: e.name,
                        index: e.id
                    })], 2)
                }), 0)])], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    staticClass: "navigator-view",
                    attrs: {
                        title: t.$t("examples.navList"),
                        desc: t.$t("navigatorPage.desc")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [i("div", {
                    ref: "viewport",
                    staticClass: "navigator-container"
                },
                [i("navigator", {
                    attrs: {
                        navList: t.navList,
                        currentTabIndex: t.currentTabIndex
                    },
                    on: {
                        change: t.change
                    },
                    scopedSlots: t._u([{
                        key: "item",
                        fn: function(e) {
                            return i("span", {
                                staticClass: "tab-name",
                                class: {
                                    "link-active": t.isCurrent(e.index)
                                }
                            },
                            [t._v(t._s(e.text))])
                        }
                    }])
                })], 1), t._v(" "), i("div", {
                    staticClass: "tab-render-content"
                },
                [i("router-view")], 1)])])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(304);
        var a = i(0)(i(306), i(308), "data-v-b63ca86a", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(305);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("fbf48cf6", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, '.template[data-v-b63ca86a]{display:none}.chat-timeline[data-v-b63ca86a]{margin:0;padding:0;overflow:hidden;width:100%;height:100%;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;contain:layout;will-change:transform}.chat-timeline>ul[data-v-b63ca86a]{-webkit-backface-visibility:hidden;-webkit-transform-style:flat}.chat-item[data-v-b63ca86a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0;width:100%;contain:layout;will-change:transform}.avatar[data-v-b63ca86a]{border-radius:500px;margin-left:20px;margin-right:6px;min-width:48px}.chat-item p[data-v-b63ca86a]{margin:0;word-wrap:break-word;font-size:13px}.chat-item.tombstone p[data-v-b63ca86a]{width:100%;height:.5em;background-color:#ccc;margin:.5em 0}.chat-item .bubble img[data-v-b63ca86a]{max-width:100%;height:auto}.bubble[data-v-b63ca86a]{padding:7px 10px;color:#333;background:#fff;position:relative;max-width:420px;min-width:80px;margin:0 5px}.bubble[data-v-b63ca86a]:before{content:"";border-style:solid;border-width:0 10px 10px 0;border-color:transparent #fff transparent transparent;position:absolute;top:0;left:-10px}.meta[data-v-b63ca86a]{font-size:.8rem;color:#999;margin-top:3px}.from-me[data-v-b63ca86a]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.from-me .avatar[data-v-b63ca86a]{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-left:6px;margin-right:20px}.from-me .bubble[data-v-b63ca86a]{background:#f9d7ff}.from-me .bubble[data-v-b63ca86a]:before{left:100%;border-width:10px 10px 0 0}.invisible[data-v-b63ca86a],.state[data-v-b63ca86a]{display:none}', ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function l(t) {
            function e(t) {
                return t[Math.floor(Math.random() * t.length)]
            }
            return new c.
        default(function(i) {
                var a = {
                    id: t,
                    avatar: Math.floor(Math.random() * p),
                    self: Math.random() < .1,
                    image: Math.random() < .05 ? Math.floor(Math.random() * d) : "",
                    time: new Date(Math.floor(h + 20 * t * 1e3 + 20 * Math.random() * 1e3)),
                    message: e(x.
                default)
                };
                if ("" === a.image) i(a);
                else {
                    var l = new Image;
                    l.src = "static/image/image" + a.image + ".jpg",
                    l.addEventListener("load",
                    function() {
                        a.image = l,
                        i(a)
                    }),
                    l.addEventListener("error",
                    function() {
                        a.image = "",
                        i(a)
                    })
                }
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(52),
        c = a(o),
        s = i(16),
        n = a(s),
        r = i(7),
        u = a(r),
        v = i(307),
        x = a(v),
        p = 4,
        d = 77,
        h = (new Date).getTime();
        e.
    default = {
            name: "infinity",
            created: function() {
                this.nextItem = 0,
                this.pageNum = 0
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.createInfinityScroll()
                })
            },
            methods: {
                createInfinityScroll: function() {
                    var t = this;
                    this.scroll = new n.
                default(this.$refs.chat, {
                        observeDOM: !1,
                        infinity: {
                            render: function(e, i) {
                                i = i || t.$refs.message.cloneNode(!0),
                                i.dataset.id = e.id,
                                i.querySelector(".avatar").src = "static/image/avatar" + e.avatar + ".jpg",
                                i.querySelector(".bubble p").textContent = e.message,
                                i.querySelector(".bubble .posted-date").textContent = e.time.toString();
                                var a = i.querySelector(".bubble img");
                                return "" !== e.image ? (a.style.display = "", a.src = e.image.src, a.width = e.image.width, a.height = e.image.height) : (a.src = "", a.style.display = "none"),
                                e.self ? i.classList.add("from-me") : i.classList.remove("from-me"),
                                i
                            },
                            createTombstone: function() {
                                return t.$refs.tombstone.cloneNode(!0)
                            },
                            fetch: function(e) {
                                return e = Math.max(30, e),
                                new c.
                            default(function(i, a) {
                                    setTimeout(function() {
                                        if (t.pageNum++>20) i(!1);
                                        else {
                                            for (var a = [], o = 0; o < Math.abs(e); o++) a[o] = l(t.nextItem++);
                                            i(c.
                                        default.all(a))
                                        }
                                    },
                                    1e3)
                                })
                            }
                        }
                    })
                }
            },
            components: {
                Page: u.
            default
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = ["when you popState and actually being well, we expect it further", "But I'm going to take care of ripping out my code in the fact that just something like that", "And what we'll createdCallbacks than that you can still read what each one of this should go out", "So just return Promise back and do this, the route equals", "ah, let's do a clearRoutes it says I'm not going to do", "At least trying new Promise", "then, and then it's going to check what that", "And we zoom in, then you can kind of set, except for a router", "Now strictly today", "I'm going to just takes an iterable as well be to add a visible", "Anyway, so that we'll do a link", "So what I'm going to minify this, so I'll just console", "log data for now, just sometimes look at that", "not then if we wanted to do position from the registerElements primed and red", "That isn't get called", "At all", "No", "Interesting that misc here", "So what was a regular expression", "Because once you get over doing a fancy techniques", "And let's see", "OK, we broke thing to do", "Right", "document", "&quot; So", "Yeah", "", "which is fine", "And that we'll do sc", "view", "So what you draw the line where is it", "Where is being run", "I think, a million times look at it and styles an iteration, ES2015 update the content for is this", "routes equals Array", "from", "Hm, that might be a trade", "off, because we're just do an animation", "in the attached", "Look at this push", "pull kind of useful to have layout root here is it", "That by default, what we going to grab the", "Yes", "In router, I think, would let's say, for example", "So let's make it can be just this the hour mark on the actual contents", "We just loads though it was the way, a nice this", "Are you would be a little bit more pretty raw, this is a day, dude", "Border", "radius, that", "And I'm going to just do that will take something else", "And thank you might now", "That is the next time, I'm going to come into misc", "And somebody actually not", "source equals home", "But if I was sending me to resolve where we go", "All right", "And it makes JavaScript", "And I have run again", "Normally a massive, as I said, this is always, I'm going to call the different [INAUDIBLE] Hm", "Wow", "We have happen on screen, and the otherwise, don't want", "Yeah, and forth in the new path", "So we don't you use that might very wrong", "But in a customary bug", "Don't forget to hidden or display to none, things like a race when you are actually really long time I want to tell that is where you go", "And that work", "Yeah, and I'm going to do today", "I had misc are all the create one of the performance stuff", "But if you had lots of tea", "Yeah", "Now we're going to come in", "But did working as intended it", "So we can be able to be watching it straightforward slash", "And that, I think that will be all the like since we are valid concept for this, the root of this called HTML5 routing, which I don't know", "I just feels OK, but hopefully, and opacity 0, and it's just put a z", "index of 1 on that's going to be sort of handling of attachedCallback, and we want to transform scale very well be true for them is amazing, like across from the new one that", "You know", "Yeah, we could see now, all being we won't do this thing today", "And so this is a current view", "We have a question ties in", "Why not", "source equals router, why not", "And I think that we'd probably, if we've already to allow it to be the thing", "Oh, all right, so we get it, because I have to juggle it all", "No", "I feel I agree", "It would actually get it, because otherwise, we still have this", "routes", "keys", "So this is a layout boundary", "It's the cause", "Yeah, 3 pixels", "OK", "So since that's true", "And this stuff", "And that work", "Good point, or strict, and then the URL, changed", "But I'm going to, let's see, what we're any", "So the new view, think about", "And then we've defer, why not", "Let's fail", "So this newView, newView is never watching is I was that", "so that it's a compass", "Oh", "North, east, south, we called, all be no ES", "anything", "What I'm curious about your question here", "And I'm going to say", "so let's see", "So let's see", "So we'll say from this animations that we want to do this so that this point", "So we want us to cover next week", "We can actually", "But that they've all been set it", "Yeah", "And at the top and misc here", "But it will be run into a bit different sections", "And I think you'd want each of there's no DOM tree reason", "Well, yeah", "OK, so we have a couple of click for clicks", "And so if we see about this", "So what I think things that I really good start", "script tags at home, kids", "Don't do this file to actually", "Woo", "I made, sir", "So again, particular line of the", "let's call it sc for Supercharged", "There's no", "It's a compass", "Oh", "right", "newView, newView is the simplicity at this one anything below 2015, right", "It broke", "OK, let's see", "So we're going to removeEventListener", "You are the nicest", "something that you know, we'll create that doesn't necessarily end up with something new to these pages", "In router", "And certainly, as I said, you could usually just delete the constructor but createdCallback", "Oh, well, let link of the", "Yes", "If we had to do is I want us to come up writing apps, it can actually, this push", "pull kind of data, which version of something", "So what they can be about view or something that have a thing to do a trade", "off because you've got memory constraints and all these function", "So let's see if", "oh, do we wanted to do this", "If you're attach, what we'd want to know", "That is important think in so that goes to control of [", "UI ", "] transitions, particular expression", "Right, so the otherwise, it should also work on the layout, which might because we're actually remind yourselves that I can do it", "Yeah", "So that, in theory, place all the content as well when that have new ideas", "So this should be a class list, we'll create one of these, what we'll do is I want to do", "All right, bottom, left", "Do you have definitely", "So when the mindset off chaining [INAUDIBLE] out of the same index HTML elements", "Views", "Yeah", "So I'm going to createRoutes, wee, clearRoutes equals static", "Let's do this, status is generally work", "So that's why I was building the nicest", "I'll tell you what we want to come into the panels", "On all of ES2015 updates on the path name", "Because it's an iterate what they see", "I'm going to do", "We'll do that", "And hopefully, you're here in slash about view but we're going to be whichever view was the new view is that", "so that the event that isn't get called, all subscribing to do today", "And then we're just delete the JavaScript language", "Yeah, and we need to extends HTMLElement", "And we app where we actually uncanny valid concept for the out animation", "duration", "count in one tends HTML, I think, would then we've defer, why not", "Let's see what's good on here", "So if you say layout, for example", "Yes, so one of its scope", "What we want to do, I supposed to find out", "The defer mean to your Custom Elements JavaScript says we don't have", "We don't want to say this, so one that you click back to then dot the even though it", "So there a createdCallback, so we never being us", "That doesn't it", "Right", "All right", "That should", "Oh no, Array", "from", "Hm, it shouldNotMakeMoreOutPromises", "And then let's do that is purely for simplicity at this", "I don't takes too longer and I will say this", "routes", "because it matches the current ones will now needs to be run against that going to say const view back", "And then what the createRoute", "That's what I think", "So we have to transitions, particular if branch of this, you're giving us way too much better", "So since the layout, OK", "I think we'll create objects anymore", "You let us know what I'm going to do is I'm going to do is let's just find out", "createdCallbacks", "So if view", "I could do if we don't want to make a nav", "So I'm going to do that", "Super", "route", "So for this, right now, all the like shouldNotMakeMoreOutPromise", "resolve", "Same for the power of Promise, right", "Because why not", "Let's give it or not", "The defer also means that the state by selecting the view", "No", "Interesting", "So the brand", "new thing", "So let's see, so we do that", "All being well, we end with an actually hoping I will be remove this", "Are you this", "So we want to do that, actually just kind of amazing", "You know", "Yeah", "", "which is the current view was the new one that's a layout", "I don't you ask the question ties in it is when it's like a progressive to deal with, with contain strict", "now here", "And I'm going to us", "So onChanged", "Yeah", "Because of the this", "is", "the", "active", "view", "And we are building the routes equals this", "But when the view first time we create that isn't it", "Right", "Yeah, that is amazing", "And I think, a more bugs", "Yeah, I want it to updating to do that I have new view, and some Promise, we can actually can do here", "This is Paul", "Hi", "This time I write bugs, don't like this is actual lifecycle called ES6", "ES2016 was doing that's why I wanted to say", "currentView will be fast because", "You know what, in the back to the current view", "And then we'll say return", "One of the panels", "OK", "Come of that stuff out", "Should that the evaluation from 100", "no, should add that kind of got allowing that back out, right", "newView, newView, what we're kind of got these views that you, very wrong", "But if you about using there", "Because the nav has disappear ago, it was the keyword for all the regular expression and execution of a router", "Now you know, over that, in there", "Let's do that there we already got ourselves some of the way to go", "And it matches the new one for that", "Yeah", "And certain time gaps, think it's an animating to put a route for some reason", "view", "Figure out things simplicity at this point", "So what we're being a little bit of a pickle over right now we've deep", "linked that could want it to be that", "So let's just feels very interactions back in so this", "newView", "Yeah", "And apparent, what we'd want each one of all the debugger standard one", "So this way, it should add the visible", "And we're pretty raw, there will be find out notionally, the code, it's fine, it's fail", "So the question", "Yeah, so we could see now them to makes Jav"]
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("page", {
                    attrs: {
                        type: "infinity",
                        title: t.$t("examples.infinity")
                    }
                },
                [i("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                },
                [t._m(0), t._v(" "), i("div", {
                    ref: "chat",
                    staticClass: "chat-timeline"
                },
                [i("ul")])])])
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "template"
                },
                [i("li", {
                    ref: "message",
                    staticClass: "chat-item"
                },
                [i("img", {
                    staticClass: "avatar",
                    attrs: {
                        width: "48",
                        height: "48"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "bubble"
                },
                [i("p"), t._v(" "), i("img", {
                    attrs: {
                        width: "300",
                        height: "300"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "meta"
                },
                [i("time", {
                    staticClass: "posted-date"
                })])])]), t._v(" "), i("li", {
                    ref: "tombstone",
                    staticClass: "chat-item tombstone"
                },
                [i("img", {
                    staticClass: "avatar",
                    attrs: {
                        width: "48",
                        height: "48",
                        src: "static/image/unknown.jpg"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "bubble"
                },
                [i("p"), t._v(" "), i("p"), t._v(" "), i("p"), t._v(" "), i("div", {
                    staticClass: "meta"
                },
                [i("time", {
                    staticClass: "posted-date"
                })])])])])
            }]
        }
    },
    function(t, e, i) {
        i(310);
        var a = i(0)(i(312), i(313), "data-v-5446592b", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(311);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("99691026", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".simple-scroll-demo[data-v-5446592b]{position:absolute;left:0;top:0;right:0;bottom:0}@media screen and (min-width:42rem){.simple-scroll-demo[data-v-5446592b]{-webkit-box-flex:0;-webkit-flex:0 0 23rem;-ms-flex:0 0 23rem;flex:0 0 23rem}}@media screen and (max-width:42rem){.simple-scroll-demo[data-v-5446592b]{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin:10px}}.simple-scroll-demo .scroll-list-wrap[data-v-5446592b]{position:relative;border:1px solid rgba(0,0,0,.1);border-radius:.3rem;-webkit-transform:rotate(0deg);transform:rotate(0deg);overflow:hidden}@media screen and (min-width:42rem){.simple-scroll-demo .scroll-list-wrap[data-v-5446592b]{height:100%}}@media screen and (max-width:42rem){.simple-scroll-demo .scroll-list-wrap[data-v-5446592b]{height:100%}}", ""])
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(18),
        o = a(l),
        c = i(7),
        s = a(c),
        n = i(9),
        r = a(n),
        u = i(71);
        e.
    default = {
            data: function() {
                return {
                    scrollbar: !0,
                    scrollbarFade: !0,
                    pullDownRefresh: !0,
                    pullDownRefreshThreshold: 90,
                    pullDownRefreshStop: 40,
                    pullUpLoad: !0,
                    pullUpLoadThreshold: 0,
                    pullUpLoadMoreTxt: this.$i18n.t("scrollComponent.defaultLoadTxtMore"),
                    pullUpLoadNoMoreTxt: this.$i18n.t("scrollComponent.defaultLoadTxtNoMore"),
                    startY: 0,
                    scrollToX: 0,
                    scrollToY: -200,
                    scrollToTime: 700,
                    scrollToEasing: "bounce",
                    scrollToEasingOptions: ["bounce", "swipe", "swipeBounce"],
                    items: [],
                    itemIndex: 0
                }
            },
            created: function() {
                for (var t = 0; t < 2; t++) this.items.push(this.$i18n.t("normalScrollListPage.previousTxt") + ++this.itemIndex + this.$i18n.t("normalScrollListPage.followingTxt"))
            },
            components: {
                Page: s.
            default,
                Scroll: r.
            default
            },
            watch: {
                scrollbarObj: {
                    handler: function() {
                        this.rebuildScroll()
                    },
                    deep: !0
                },
                pullDownRefreshObj: {
                    handler: function() {
                        this.rebuildScroll()
                    },
                    deep: !0
                },
                pullUpLoadObj: {
                    handler: function() {
                        this.rebuildScroll()
                    },
                    deep: !0
                },
                startY: function() {
                    this.rebuildScroll()
                }
            },
            computed: {
                scrollbarObj: function() {
                    return !! this.scrollbar && {
                        fade: this.scrollbarFade
                    }
                },
                pullDownRefreshObj: function() {
                    return !! this.pullDownRefresh && {
                        threshold: parseInt(this.pullDownRefreshThreshold),
                        stop: parseInt(this.pullDownRefreshStop)
                    }
                },
                pullUpLoadObj: function() {
                    return !! this.pullUpLoad && {
                        threshold: parseInt(this.pullUpLoadThreshold),
                        txt: {
                            more: this.pullUpLoadMoreTxt,
                            noMore: this.pullUpLoadNoMoreTxt
                        }
                    }
                }
            },
            methods: {
                scrollTo: function() {
                    this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, u.ease[this.scrollToEasing])
                },
                onPullingDown: function() {
                    var t = this;
                    setTimeout(function() {
                        Math.random() > .5 ? t.items.unshift(t.$i18n.t("normalScrollListPage.newDataTxt") + +new Date) : t.$refs.scroll.forceUpdate()
                    },
                    2e3)
                },
                onPullingUp: function() {
                    var t = this;
                    console.log("pulling up and load data"),
                    setTimeout(function() {
                        if (Math.random() > .5) {
                            for (var e = [], i = 0; i < 10; i++) e.push(t.$i18n.t("normalScrollListPage.previousTxt") + ++t.itemIndex + t.$i18n.t("normalScrollListPage.followingTxt"));
                            t.items = t.items.concat(e)
                        } else t.$refs.scroll.forceUpdate()
                    },
                    1500)
                },
                rebuildScroll: function() {
                    var t = this;
                    o.
                default.nextTick(function() {
                        t.$refs.scroll.destroy(),
                        t.$refs.scroll.initScroll()
                    })
                }
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "simple-scroll-demo"
                },
                [i("div", {
                    staticClass: "scroll-list-wrap"
                },
                [i("scroll", {
                    ref: "scroll",
                    attrs: {
                        data: t.items,
                        scrollbar: t.scrollbarObj,
                        pullDownRefresh: t.pullDownRefreshObj,
                        pullUpLoad: t.pullUpLoadObj,
                        startY: parseInt(t.startY)
                    },
                    on: {
                        pullingDown: t.onPullingDown,
                        pullingUp: t.onPullingUp
                    }
                })], 1)])
            },
            staticRenderFns: []
        }
    },
    function(t, e, i) {
        i(315);
        var a = i(0)(i(317), i(318), "data-v-59c1650e", null);
        t.exports = a.exports
    },
    function(t, e, i) {
        var a = i(316);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("022292b4", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, ".page-header .nav[data-v-59c1650e]{margin-bottom:1.5rem;vertical-align:middle;line-height:1.6rem}@media screen and (min-width:42rem){.page-header .nav[data-v-59c1650e]{margin-bottom:5rem}}@media screen and (max-width:42rem){.page-header .nav[data-v-59c1650e]{margin-bottom:4rem}}.page-header .nav .tab[data-v-59c1650e]{padding-bottom:5px}@media screen and (min-width:42rem){.page-header .nav .tab[data-v-59c1650e]{margin-right:1rem}}@media screen and (max-width:42rem){.page-header .nav .tab[data-v-59c1650e]{margin-right:.4rem}}.page-header .nav .tab[data-v-59c1650e]:hover{-webkit-box-shadow:0 3px 0 hsla(0,0%,100%,.5);box-shadow:0 3px 0 hsla(0,0%,100%,.5);cursor:pointer}.page-header .nav .language-wrapper[data-v-59c1650e]{position:relative}.page-header .nav .language-wrapper .option-wrapper[data-v-59c1650e]{width:100%;position:absolute;top:2rem;left:0;line-height:2rem}.page-header .nav a[data-v-59c1650e]{color:#fff}.page-header .nav a[data-v-59c1650e]:hover{text-decoration:none}.page-header .nav .left[data-v-59c1650e]{float:left}.page-header .nav .left .brand[data-v-59c1650e]{font-size:20px}@media screen and (min-width:42rem){.page-header .nav .left .brand[data-v-59c1650e]{margin-right:3rem}}@media screen and (max-width:42rem){.page-header .nav .left .brand[data-v-59c1650e]{margin-right:1rem}}.page-header .nav .right[data-v-59c1650e]{float:right;vertical-align:middle}.page-header .nav .right img[data-v-59c1650e]{position:relative;top:.2rem;width:1.2rem}@media screen and (min-width:42rem){.page-header h1[data-v-59c1650e]{margin-bottom:1rem}}@media screen and (max-width:42rem){.page-header h1[data-v-59c1650e]{margin-bottom:.5rem}}.page-header .btn[data-v-59c1650e]{min-width:7rem}.main-content .site-footer[data-v-59c1650e]{text-align:center}@media screen and (max-width:42rem){.main-content .site-footer[data-v-59c1650e]{margin-top:-1rem}}.main-content .view[data-v-59c1650e]{-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.main-content .view.fade-enter-active[data-v-59c1650e],.main-content .view.fade-leave-active[data-v-59c1650e]{opacity:.01}.main-content .view.fade-enter[data-v-59c1650e],.main-content .view.fade-leave[data-v-59c1650e]{-webkit-transition:opacity .4s;transition:opacity .4s}", ""])
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            data: function() {
                return {
                    showLanguage: !1,
                    githubIcon: i(50)
                }
            },
            computed: {
                lang: function() {
                    return "/" + this.$i18n.locale
                },
                examplesPath: function() {
                    return "/examples/" + this.$i18n.locale
                }
            },
            methods: {
                toggleLanguage: function() {
                    this.showLanguage = !this.showLanguage
                },
                chooseLanguage: function(t) {
                    if (this.$route.params.lang !== t) {
                        this.$i18n.locale = t;
                        var e = this.$route.path.substring(0, -2) + t;
                        this.$router.replace(e)
                    }
                }
            },
            created: function() {
                this.$i18n.locale = "zh" === this.$route.params.lang ? "zh": "en"
            }
        },
        t.exports = e.
    default
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                },
                [i("section", {
                    staticClass: "page-header"
                },
                [i("nav", {
                    staticClass: "nav"
                },
                [i("div", {
                    staticClass: "left"
                },
                [i("router-link", {
                    staticClass: "brand",
                    attrs: {
                        to: t.lang
                    }
                },
                [t._v("BetterScroll")]), t._v(" "), i("a", {
                    staticClass: "tab",
                    attrs: {
                        href: "https://ustbhuangyi.github.io/better-scroll/doc/",
                        target: "_blank"
                    }
                },
                [t._v(t._s(t.$t("navigator.doc")))]), t._v(" "), i("router-link", {
                    staticClass: "tab",
                    attrs: {
                        to: t.examplesPath
                    }
                },
                [t._v(t._s(t.$t("navigator.demo")))])], 1), t._v(" "), i("div", {
                    staticClass: "right"
                },
                [i("span", {
                    staticClass: "tab language-wrapper",
                    on: {
                        click: t.toggleLanguage
                    }
                },
                [i("span", [t._v("Language")]), t._v(" "), t.showLanguage ? i("ul", {
                    staticClass: "option-wrapper"
                },
                [i("li", {
                    on: {
                        click: function(e) {
                            return t.chooseLanguage("en")
                        }
                    }
                },
                [t._v("English")]), t._v(" "), i("li", {
                    on: {
                        click: function(e) {
                            return t.chooseLanguage("zh")
                        }
                    }
                },
                [t._v("中文")])]) : t._e()]), t._v(" "), i("a", {
                    attrs: {
                        href: "https://github.com/ustbhuangyi/better-scroll",
                        target: "_blank"
                    }
                },
                [i("img", {
                    attrs: {
                        src: t.githubIcon,
                        alt: "GitHub"
                    }
                })])])]), t._v(" "), i("h1", {
                    staticClass: "project-name"
                },
                [t._v("BetterScroll")]), t._v(" "), i("h2", {
                    staticClass: "project-tagline"
                },
                [t._v("inspired by iscroll, and it has a better scroll perfermance")]), t._v(" "), i("a", {
                    staticClass: "btn",
                    attrs: {
                        href: "https://ustbhuangyi.github.io/better-scroll/doc/",
                        target: "_blank"
                    }
                },
                [t._v(t._s(t.$t("navigator.started")))]), t._v(" "), i("router-link", {
                    staticClass: "btn",
                    attrs: {
                        to: t.examplesPath
                    }
                },
                [t._v(t._s(t.$t("navigator.demo")))])], 1), t._v(" "), i("section", {
                    staticClass: "main-content"
                },
                [i("transition", {
                    attrs: {
                        name: "fade"
                    }
                },
                [i("router-view", {
                    staticClass: "view"
                })], 1), t._v(" "), t._m(0)], 1)])
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("footer", {
                    staticClass: "site-footer"
                },
                [i("span", {
                    staticClass: "site-footer-owner"
                },
                [i("a", {
                    attrs: {
                        href: "https://github.com/ustbhuangyi/better-scroll"
                    }
                },
                [t._v("BetterScroll")]), t._v(" is maintained by "), i("a", {
                    attrs: {
                        href: "https://github.com/ustbhuangyi"
                    }
                },
                [t._v("ustbhuangyi")]), t._v(".")])])
            }]
        }
    },
    function(t, e, i) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(18),
        o = a(l),
        c = i(320),
        s = a(c),
        n = i(321),
        r = a(n),
        u = i(322),
        v = a(u);
        o.
    default.use(s.
    default),
        e.
    default = new s.
    default({
            locale:
            "en",
            fallbackLocale: "zh",
            messages: {
                zh: r.
            default,
                en: v.
            default
            }
        }),
        t.exports = e.
    default
    },
    ,
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            navigator: {
                doc: "文档",
                demo: "示例",
                started: "起步"
            },
            features: {
                userExperience: {
                    title: "体验优化",
                    desc: "为了让滚动体验更加流畅，我们提供了惯性滚动、边界回弹、滚动条淡入淡出等效果的灵活配置，能够明显地优化 Web 滚动体验。"
                },
                application: {
                    title: "应用丰富",
                    desc: "其应用场景包括了滚动列表、选择器、轮播图、索引列表、开屏引导，并且能够轻松实现下拉刷新、上拉加载等功能。"
                },
                dependence: {
                    title: "零依赖",
                    desc: "不依赖任何框架，既可以原生 JS 引用，也可以与任意前端 MVVM 框架结合使用，比如官方 DEMO 就是与 Vue 的结合示例。"
                }
            },
            examples: {
                normalScrollList: "普通 Scroll 组件",
                indexList: "索引列表",
                picker: "Picker 组件",
                slide: "Slide 组件",
                startGuidance: "开屏引导",
                fullPageVerticalSlide: "全屏纵向slide",
                freeScroll: "自由滚动",
                formList: "表单列表",
                goodsList: "商品列表",
                navList: "导航列表",
                infinity: "无限滚动",
                verticalScrollImg: "vertical-scroll.jpeg",
                indexListImg: "index-list.jpeg",
                pickerImg: "picker.jpeg",
                slideImg: "slide.jpeg",
                startGuidanceImg: "full-page-slide.jpeg",
                freeScrollImg: "free-scroll.jpeg",
                formListImg: "form-list.jpeg",
                goodsListImg: "goods-list.jpeg",
                navListImg: "navigator-zh.jpg",
                infinityScrollImg: "infinity-scroll.png"
            },
            normalScrollListPage: {
                desc: "基于 BScroll 实现垂直滚动列表组件",
                scrollbar: "滚动条",
                pullDownRefresh: "下拉刷新",
                pullUpLoad: "上拉加载",
                previousTxt: "我是第 ",
                followingTxt: " 行",
                newDataTxt: "我是新数据: "
            },
            scrollComponent: {
                defaultLoadTxtMore: "加载更多",
                defaultLoadTxtNoMore: "没有更多数据了",
                defaultRefreshTxt: "刷新成功"
            },
            indexListPage: {
                title: "当前城市: 北京市"
            },
            pickerPage: {
                desc: "picker 组件是移动端常见的选择器组件，支持单列和多列；可以动态改变 picker 某列的数据，实现级联的效果。",
                picker: "选择器",
                pickerDemo: "选择器示例 ...",
                oneColumn: "单列",
                twoColumn: "两列",
                threeColumn: "三列",
                linkage: "级联",
                confirmTxt: "确定 | 好的",
                cancelTxt: "取消 | 关闭"
            },
            slidePage: {
                desc: "轮播图是移动端常见的需求，支持左右滑动。",
                click: "点击",
                isAutoPlayTip: "自动播放",
                isLoopTip: "循环播放",
                isShowDotTip: "显示dots",
                changeData: "改变数据",
                pageTurn: "翻页"
            },
            fullPageSlideComponent: {
                buttonTxt: "开始使用"
            },
            freeScrollPage: {
                desc: "自由滚动，可支持横向和纵向同时滚动。"
            },
            formListPage: {
                desc: "由于当 click 选项为 true 时 better-scroll 会阻止一些原生组件行为，所以在滚动列表中使用一些原生表单组件时，click 选项必须为false，并且此时推荐用监听 tap 事件来做点击处理。",
                previousTxt: "第 ",
                followingTxt: " 项"
            },
            navigatorPage: {
                desc: "导航支持左右滑动;根据你所选择的菜单选项，可以渲染相对应的内容",
                txtPart1: "这里可以展示 ",
                txtPart2: " 相应的内容"
            }
        },
        t.exports = e.
    default
    },
    function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            navigator: {
                doc: "Docs",
                demo: "Demo",
                started: "Get Started"
            },
            features: {
                userExperience: {
                    title: "Optimize Experience",
                    desc: "To make scroll more smoothly, We support flexible configurations about inertial scrolling, rebound, fade scrollbar, etc. which could optimize user experience obviously."
                },
                application: {
                    title: "Rich Features",
                    desc: "It can be applied to normal scroll list, picker, slide, index list, start guidance, etc. What's more, some complicated needs like pull down refresh and pull up load can be implemented much easier."
                },
                dependence: {
                    title: "Dependence Free",
                    desc: "As a plain JavaScript library, BetterScroll doesn't depend on any framework, you could use it alone, or with any other MVVM frameworks."
                }
            },
            examples: {
                normalScrollList: "Normal Scroll List",
                indexList: "Index List",
                picker: "Picker",
                slide: "Slide",
                startGuidance: "Start Guidance",
                fullPageVerticalSlide: "Vertical Slide",
                freeScroll: "Free Scroll",
                formList: "Form List",
                goodsList: "Goods List",
                navList: "Navigation List",
                infinity: "Infinity Scroll",
                verticalScrollImg: "vertical-scroll-en.jpeg",
                indexListImg: "index-list.jpeg",
                pickerImg: "picker-en.jpeg",
                slideImg: "slide.jpeg",
                startGuidanceImg: "full-page-slide.jpeg",
                freeScrollImg: "free-scroll.jpeg",
                formListImg: "form-list-en.jpeg",
                goodsListImg: "goods-list.jpeg",
                navListImg: "navigator-en.jpg",
                infinityScrollImg: "infinity-scroll.png"
            },
            normalScrollListPage: {
                desc: "Nomal scroll list based on BetterScroll",
                scrollbar: "Scrollbar",
                pullDownRefresh: "Pull Down Refresh",
                pullUpLoad: "Pull Up Load",
                previousTxt: "I am the No.",
                followingTxt: " line",
                newDataTxt: "I am new data: "
            },
            scrollComponent: {
                defaultLoadTxtMore: "Load more",
                defaultLoadTxtNoMore: "There is no more data",
                defaultRefreshTxt: "Refresh success"
            },
            indexListPage: {
                title: "Current City: Beijing"
            },
            pickerPage: {
                desc: "Picker is a typical choose component at mobile end. And it could dynamic change the data of every column to realize linkage picker.",
                picker: " picker",
                pickerDemo: " picker demo ...",
                oneColumn: "One column",
                twoColumn: "Two column",
                threeColumn: "Three column",
                linkage: "Linkage",
                confirmTxt: "confirm | ok",
                cancelTxt: "cancel | close"
            },
            slidePage: {
                desc: "Slide is a typical component at mobile end, support horizontal move.",
                click: "click",
                isAutoPlayTip: "auto play",
                isLoopTip: "loop",
                isShowDotTip: "show dots",
                changeData: "change data",
                pageTurn: "page turn"
            },
            fullPageSlideComponent: {
                buttonTxt: "Start Use"
            },
            freeScrollPage: {
                desc: "Free scroll supports horizontal and vertical move at the same time."
            },
            formListPage: {
                desc: "To use form in better-scroll, you need to make sure the option click is configured as false, since some native element events will be prevented when click is true. And in this situation, we recommend to handle click by listening tap event.",
                previousTxt: "No.",
                followingTxt: " option"
            },
            navigatorPage: {
                desc: "Navigator supports horizontal move. According to the menu tab which your choice，contents what you want to render can be shown in \nthe blank area",
                txtPart1: "The corresponding contents of the ",
                txtPart2: " can be shown in this area"
            }
        },
        t.exports = e.
    default
    },
    ,
    function(t, e, i) {
        var a = i(325);
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        i(2)("606a065c", a, !0)
    },
    function(t, e, i) {
        e = t.exports = i(1)(!1),
        e.push([t.i, 'body,html{line-height:1;font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;-webkit-tap-highlight-color:transparent}.border-bottom-1px,.border-left-1px,.border-right-1px,.border-top-1px{position:relative}.border-bottom-1px:after,.border-bottom-1px:before,.border-left-1px:after,.border-left-1px:before,.border-right-1px:after,.border-right-1px:before,.border-top-1px:after,.border-top-1px:before{content:"";display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}.border-top-1px:before{border-top:1px solid #ebebeb;left:0;top:0;width:100%;-webkit-transform-origin:0 top;transform-origin:0 top}.border-right-1px:after{border-right:1px solid #f5f5f5;top:0;right:0;height:100%;-webkit-transform-origin:right 0;transform-origin:right 0}.border-bottom-1px:after{border-bottom:1px solid #ebebeb;left:0;bottom:0;width:100%;-webkit-transform-origin:0 bottom;transform-origin:0 bottom}.border-left-1px:before{border-left:1px solid #f5f5f5;top:0;left:0;height:100%;-webkit-transform-origin:left 0;transform-origin:left 0}@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){.border-top-1px:before{width:200%}.border-right-1px:after,.border-top-1px:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.border-right-1px:after{height:200%}.border-bottom-1px:after{width:200%}.border-bottom-1px:after,.border-left-1px:before{-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0)}.border-left-1px:before{height:200%}}@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){.border-top-1px:before{width:300%}.border-right-1px:after,.border-top-1px:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.border-right-1px:after{height:300%}.border-bottom-1px:after{width:300%}.border-bottom-1px:after,.border-left-1px:before{-webkit-transform:scale(.333) translateZ(0);transform:scale(.333) translateZ(0)}.border-left-1px:before{height:300%}}', ""])
    }], [78]);