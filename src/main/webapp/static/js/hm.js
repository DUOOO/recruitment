(function () {
    var h = {}, mt = {}, c = {
        id: "4233e74dff0ae5bd0a3d81c6ccf756e6",
        dm: ["lagou.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '',
        ctrk: true,
        align: 1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 1,
        vcard: 4899764,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        conv: 0,
        med: 0,
        cvcc: {q: /tencent:\/\/|qq\.(com|htm)|kefu|openkf|swt|zoos|53kf|doyoo|looyu|leyu|zixun|chat|talk|openQQ|open_ask|online/i},
        cvcf: ['register', 'submit'],
        apps: ''
    };
    var s = void 0, t = !0, u = null, v = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, d) {
        var g;
        d.N && (g = new Date, g.setTime(g.getTime() + d.N));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (g ? "; expires=" + g.toGMTString() : "") + (d.yb ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : u
    };
    mt.g = {};
    mt.g.$ = function (a) {
        return document.getElementById(a)
    };
    mt.g.Q = function (a, b) {
        var d = [], g = [];
        if (!a) return g;
        for (; a.parentNode != u;) {
            for (var f = 0, p = 0, l = a.parentNode.childNodes.length, n = 0; n < l; n++) {
                var e = a.parentNode.childNodes[n];
                if (e.nodeName === a.nodeName && (f++, e === a && (p = f), 0 < p && 1 < f)) break
            }
            if ((l = "" !== a.id) && b) {
                d.unshift("#" + encodeURIComponent(a.id));
                break
            } else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, g.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + p + "]" : ""));
            a = a.parentNode
        }
        g.push(d.join(">"));
        return g
    };
    mt.g.Ja = function (a) {
        return (a = mt.g.Q(a, t)) && a.length ? String(a[0]) : ""
    };
    mt.g.tb = function (a) {
        return mt.g.Q(a, v)
    };
    mt.g.Ba = function (a) {
        var b;
        for (b = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
        return u
    };
    mt.g.Da = function (a) {
        return 9 === a.nodeType ? a : a.ownerDocument || a.document
    };
    mt.g.Ha = function (a) {
        var b = {top: 0, left: 0};
        if (!a) return b;
        var d = mt.g.Da(a).documentElement;
        "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
        return {
            top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
            left: b.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
        }
    };
    (mt.g.fa = function () {
        function a() {
            if (!a.G) {
                a.G = t;
                for (var b = 0, d = g.length; b < d; b++) g[b]()
            }
        }

        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return
            }
            a()
        }

        var d = v, g = [], f;
        document.addEventListener ? f = function () {
            document.removeEventListener("DOMContentLoaded", f, v);
            a()
        } : document.attachEvent && (f = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
        });
        (function () {
            if (!d) if (d = t, "complete" === document.readyState) a.G = t; else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                f, v), window.addEventListener("load", a, v); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", f);
                window.attachEvent("onload", a);
                var g = v;
                try {
                    g = window.frameElement == u
                } catch (l) {
                }
                document.documentElement.doScroll && g && b()
            }
        })();
        return function (b) {
            a.G ? b() : g.push(b)
        }
    }()).G = v;
    mt.event = {};
    mt.event.c = function (a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function (b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, v)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = v
    };
    (function () {
        var a = mt.event;
        mt.f = {};
        mt.f.ca = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.Ta = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : s;
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.bb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.C = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.f.D = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.f.orientation = 0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== s && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== s) && (a = screen.orientation.angle);
                mt.f.orientation = a
            }

            b();
            a.c(window, "orientationchange", b)
        })();
        return mt.f
    })();
    mt.l = {};
    mt.l.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.l.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = d[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var d = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return a(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === u) return "null";
                    if (d instanceof Array) {
                        var f = ["["], p = d.length, l, n, e;
                        for (n = 0; n < p; n++) switch (e = d[n], typeof e) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                l && f.push(","), f.push(mt.l.stringify(e)), l = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                    l = ["{"];
                    n = mt.l.stringify;
                    for (p in d) if (Object.prototype.hasOwnProperty.call(d, p)) switch (e =
                        d[p], typeof e) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && l.push(","), f = 1, l.push(n(p) + ":" + n(e))
                    }
                    l.push("}");
                    return l.join("")
            }
        }
    }();
    mt.lang = {};
    mt.lang.d = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Va = function () {
        var a = h.b.a.kb;
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.xb = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.h = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.localStorage = {};
    mt.localStorage.K = function () {
        if (!mt.localStorage.i) try {
            mt.localStorage.i = document.createElement("input"), mt.localStorage.i.type = "hidden", mt.localStorage.i.style.display = "none", mt.localStorage.i.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)
        } catch (a) {
            return v
        }
        return t
    };
    mt.localStorage.set = function (a, b, d) {
        var g = new Date;
        g.setTime(g.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = g.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.K() && (mt.localStorage.i.expires = g.toUTCString(), mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.setAttribute(a, b), mt.localStorage.i.save(document.location.hostname))
        } catch (f) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.K()) try {
            return mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.getAttribute(a)
        } catch (g) {
        }
        return u
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.K()) try {
            mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.removeAttribute(a), mt.localStorage.i.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(a, b)
        } catch (d) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : u
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.ha = {};
    mt.ha.log = function (a, b) {
        var d = new Image, g = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[g] = d;
        d.onload = d.onerror = d.onabort = function () {
            d.onload = d.onerror = d.onabort = u;
            d = window[g] = u;
            b && b(a)
        };
        d.src = a
    };
    mt.W = {};
    mt.W.La = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {
        }
        return a
    };
    mt.W.rb = function (a, b, d, g, f) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + g + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + g + '" src="' + b + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.k = function (a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : u
    };
    mt.url.ub = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : u
    };
    mt.url.Fa = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : u
    };
    mt.url.P = function (a) {
        return (a = mt.url.Fa(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Q = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : u
    };
    (function () {
        function a() {
            for (var a = v, d = document.getElementsByTagName("script"), g = d.length, g = 100 < g ? 100 : g, f = 0; f < g; f++) {
                var p = d[f].src;
                if (p && 0 === p.indexOf("https://hm.baidu.com/h")) {
                    a = t;
                    break
                }
            }
            return a
        }

        return h.Aa = a
    })();
    var A = h.Aa;
    h.p = {
        vb: "http://tongji.baidu.com/hm-web/welcome/ico",
        U: "hm.baidu.com/hm.gif",
        oa: "tongji.baidu.com",
        Qa: "hmmd",
        Ra: "hmpl",
        nb: "utm_medium",
        Pa: "hmkw",
        pb: "utm_term",
        Na: "hmci",
        mb: "utm_content",
        Sa: "hmsr",
        ob: "utm_source",
        Oa: "hmcu",
        lb: "utm_campaign",
        z: 0,
        m: Math.round(+new Date / 1E3),
        L: Math.round(+new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        H: A() || "https:" === document.location.protocol ? "https:" : "http:",
        wb: 0,
        ta: 6E5,
        Wa: 6E5,
        cb: 5E3,
        ua: 5,
        Y: 1024,
        sa: 1,
        s: 2147483647,
        ia: "kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")
    };
    (function () {
        var a = {
            r: {}, c: function (a, d) {
                this.r[a] = this.r[a] || [];
                this.r[a].push(d)
            }, B: function (a, d) {
                this.r[a] = this.r[a] || [];
                for (var g = this.r[a].length, f = 0; f < g; f++) this.r[a][f](d)
            }
        };
        return h.w = a
    })();
    (function () {
        function a(a, g) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            b.d(g, "Function") && (f.readyState ? f.onreadystatechange = function () {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = u, g()
            } : f.onload = function () {
                g()
            });
            f.src = a;
            // var p = document.getElementsByTagName("script")[0];
            // p.parentNode.insertBefore(f, p)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            var a = "";
            h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? d.set("Hm_from_" + c.id, a) : b.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? d.get("Hm_from_" + c.id) : b.get("Hm_from_" + c.id)) || "";
            return a
        }

        var b = mt.localStorage, d = mt.sessionStorage;
        return h.Z = a
    })();
    (function () {
        var a = mt.g, b = mt.lang, d = mt.event, g = mt.f, f = h.p, p = h.w, l = [], n = {
            ka: function () {
                c.ctrk && (d.c(document, "mouseup", n.ra()), d.c(window, "unload", function () {
                    n.I()
                }), setInterval(function () {
                    n.I()
                }, f.ta))
            }, ra: function () {
                return function (a) {
                    a = n.Ca(a);
                    if ("" !== a) {
                        var d = (f.H + "//" + f.U + "?" + h.b.ga().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                        d + (f.s + "").length > f.Y || (d + encodeURIComponent(l.join("!") + (l.length ? "!" : "")).length + (f.s + "").length > f.Y && n.I(), l.push(a), (l.length >= f.ua || /\*a\*/.test(a)) && n.I())
                    }
                }
            },
            Ca: function (k) {
                var d = k.target || k.srcElement;
                if (0 === f.sa) {
                    var m = (d.tagName || "").toLowerCase();
                    if ("embed" == m || "object" == m) return ""
                }
                var q;
                g.ca ? (q = Math.max(document.documentElement.scrollTop, document.body.scrollTop), m = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), m = k.clientX + m, q = k.clientY + q) : (m = k.pageX, q = k.pageY);
                k = n.Ga(k, d, m, q);
                var e = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        m -= e / 2;
                        break;
                    case 2:
                        m -= e
                }
                e = [];
                e.push(m);
                e.push(q);
                e.push(k.Xa);
                e.push(k.Ya);
                e.push(k.$a);
                e.push(b.h(k.Za));
                e.push(k.qb);
                e.push(k.Ma);
                (d = "a" === (d.tagName || "").toLowerCase() ? d : a.Ba(d)) ? (e.push("a"), e.push(b.h(encodeURIComponent(d.href)))) : e.push("b");
                return e.join("*")
            }, Ga: function (k, d, m, q) {
                k = a.Ja(d);
                var e = 0, r = 0, f = 0, l = 0;
                if (d && (e = d.offsetWidth || d.clientWidth, r = d.offsetHeight || d.clientHeight, l = a.Ha(d), f = l.left, l = l.top, b.d(d.getBBox, "Function") && (r = d.getBBox(), e = r.width, r = r.height), "html" === (d.tagName || "").toLowerCase())) e = Math.max(e, d.clientWidth),
                    r = Math.max(r, d.clientHeight);
                return {
                    Xa: Math.round(100 * ((m - f) / e)),
                    Ya: Math.round(100 * ((q - l) / r)),
                    $a: g.orientation,
                    Za: k,
                    qb: e,
                    Ma: r
                }
            }, I: function () {
                0 !== l.length && (h.b.a.et = 2, h.b.a.ep = l.join("!"), h.b.j(), l = [])
            }
        }, e = {
            ma: function () {
                c.ctrk && setInterval(e.eb, f.cb)
            }, eb: function () {
                var a = g.C() + g.D();
                0 < a - h.b.a.vl && (h.b.a.vl = a)
            }
        };
        p.c("pv-b", n.ka);
        p.c("pv-b", e.ma);
        return n
    })();
    (function () {
        var a = mt.g, b = h.p, d = h.load, g = h.Z;
        h.w.c("pv-b", function () {
            var f = b.protocol + "//crs.baidu.com/";
            c.rec && a.fa(function () {
                for (var p = 0, l = c.rp.length; p < l; p++) {
                    var n = c.rp[p][0], e = c.rp[p][1], k = a.$("hm_t_" + n);
                    if (e && !(2 == e && !k || k && "" !== k.innerHTML)) k = "", k = Math.round(Math.random() * b.s), k = 4 == e ? f + "hl.js?" + ["siteId=" + c.id, "planId=" + n, "rnd=" + k].join("&") : f + "t.js?" + ["siteId=" + c.id, "planId=" + n, "from=" + g(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    k].join("&"), d(k)
                }
            })
        })
    })();
    (function () {
        var a = h.p, b = h.load, d = h.Z;
        h.w.c("pv-b", function () {
            if (c.trust && c.vcard) {
                var g = "https://tag.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + d(), "rnd=" + Math.round(Math.random() * a.s), "hm=1"].join("&");
                b(g)
            }
        })
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.M.Ia() + "," + h.M.Ea();
                h.b.j()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            r && (a = "visible" == document[r]);
            y && (a = !document[y]);
            n = "undefined" == typeof a ? t : a;
            if ((!l || !e) && n && k) x = t, m = +new Date; else if (l && e && (!n || !k)) x = v, q += +new Date - m;
            l = n;
            e = k;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var k = document, d = "";
            if (a in k) d = a; else for (var m = ["webkit", "ms", "moz", "o"], b = 0; b < m.length; b++) {
                var q = m[b] + a.charAt(0).toUpperCase() + a.slice(1);
                if (q in k) {
                    d =
                        q;
                    break
                }
            }
            return d
        }

        function g(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) k = "focus" == a.type || "focusin" == a.type ? t : v, b()
        }

        var f = mt.event, p = h.w, l = t, n = t, e = t, k = t, w = +new Date, m = w, q = 0, x = t,
            r = d("visibilityState"), y = d("hidden"), z;
        b();
        (function () {
            var a = r.replace(/[vV]isibilityState/, "visibilitychange");
            f.c(document, a, b);
            f.c(window, "pageshow", b);
            f.c(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (f.c(document, "focusin", g), f.c(document, "focusout", g)) : (f.c(window, "focus", g),
                f.c(window, "blur", g))
        })();
        h.M = {
            Ia: function () {
                return +new Date - w
            }, Ea: function () {
                return x ? +new Date - m + q : q
            }
        };
        p.c("pv-b", function () {
            f.c(window, "unload", a())
        });
        return h.M
    })();
    (function () {
        var a = mt.lang, b = h.p, d = h.load, g = {
            Ua: function (f) {
                if ((window._dxt === s || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var g = h.b.O();
                    d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), f)
                }
            }, jb: function (d) {
                if (a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
            }
        };
        return h.va = g
    })();
    (function () {
        function a(a, d, m, b) {
            if (!(a === s || d === s || b === s)) {
                if ("" === a) return [d, m, b].join("*");
                a = String(a).split("!");
                for (var e, r = v, f = 0; f < a.length; f++) if (e = a[f].split("*"), String(d) === e[0]) {
                    e[1] = m;
                    e[2] = b;
                    a[f] = e.join("*");
                    r = t;
                    break
                }
                r || a.push([d, m, b].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var e in a) if ({}.hasOwnProperty.call(a, e)) {
                var m = a[e];
                d.d(m, "Object") || d.d(m, "Array") ? b(m) : a[e] = String(m)
            }
        }

        var d = mt.lang, g = mt.l, f = mt.f, p = h.p, l = h.w, n = h.va, e = {
            A: [], J: 0, da: v, o: {X: "", page: ""}, init: function () {
                e.e =
                    0;
                l.c("pv-b", function () {
                    e.wa();
                    e.ya()
                });
                l.c("pv-d", function () {
                    e.za();
                    e.o.page = ""
                });
                l.c("stag-b", function () {
                    h.b.a.api = e.e || e.J ? e.e + "_" + e.J : "";
                    h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), e.o.X, e.o.page].join("!")
                });
                l.c("stag-d", function () {
                    h.b.a.api = 0;
                    e.e = 0;
                    e.J = 0
                })
            }, wa: function () {
                var a = window._hmt || [];
                if (!a || d.d(a, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var a = window._hmt, k = 0; k < arguments.length; k++) {
                            var b = arguments[k];
                            d.d(b, "Array") && (a.cmd[a.id].push(b), "_setAccount" ===
                            b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
            }, ya: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id]) for (var d = a.cmd[c.id], m = /^_track(Event|MobConv|Order|RTEvent)$/, b = 0, f = d.length; b < f; b++) {
                    var r = d[b];
                    m.test(r[0]) ? e.A.push(r) : e.T(r)
                }
                a.cmd[c.id] = {push: e.T}
            }, za: function () {
                if (0 < e.A.length) for (var a = 0, d = e.A.length; a < d; a++) e.T(e.A[a]);
                e.A = u
            }, T: function (a) {
                var b = a[0];
                if (e.hasOwnProperty(b) && d.d(e[b],
                    "Function")) e[b](a)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (e.e |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], v === a || t === a)) e.e |= 2, h.b.ba = a
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    e.e |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.a.vl = f.C() + f.D();
                    h.b.a.kb = 0;
                    h.b.R ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.R = t;
                    var d = h.b.a.u, b = h.b.a.su;
                    h.b.a.u = p.protocol + "//" + document.location.host + a[1];
                    e.da || (h.b.a.su = document.location.href);
                    h.b.j();
                    h.b.a.u = d;
                    h.b.a.su = b
                }
            },
            _trackEvent: function (a) {
                2 < a.length && (e.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = d.h(a[1]) + "*" + d.h(a[2]) + (a[3] ? "*" + d.h(a[3]) : "") + (a[4] ? "*" + d.h(a[4]) : ""), h.b.j())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var b = a[1], m = a[4] || 3;
                    if (0 < b && 6 > b && 0 < m && 4 > m) {
                        e.J++;
                        for (var q = (h.b.a.cv || "*").split("!"), f = q.length; f < b - 1; f++) q.push("*");
                        q[b - 1] = m + "*" + d.h(a[2]) + "*" + d.h(a[3]);
                        h.b.a.cv = q.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a),
                            c.age) : h.b.ab("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag: function (b) {
                if (!(3 > b.length)) {
                    var e = d.h(b[1]);
                    b = d.h(b[2]);
                    if (e !== s && b !== s) {
                        var m = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), m = a(m, e, 1, b);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(m), c.age)
                    }
                }
            }, _setVisitTag: function (b) {
                if (!(3 > b.length)) {
                    var f = d.h(b[1]);
                    b = d.h(b[2]);
                    if (f !== s && b !== s) {
                        var m = e.o.X, m = a(m, f, 2, b);
                        e.o.X = m
                    }
                }
            }, _setPageTag: function (b) {
                if (!(3 > b.length)) {
                    var f = d.h(b[1]);
                    b = d.h(b[2]);
                    if (f !== s && b !== s) {
                        var m = e.o.page, m = a(m, f, 3, b);
                        e.o.page = m
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 <
                a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? p.protocol + "//" + window.location.host + a[1] : a[1], e.da = t)
            }, _trackOrder: function (a) {
                a = a[1];
                d.d(a, "Object") && (b(a), e.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = g.stringify(a), h.b.j())
            }, _trackMobConv: function (a) {
                if (a = {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                }[a[1]]) e.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.j()
            }, _trackRTPageview: function (a) {
                a = a[1];
                d.d(a, "Object") && (b(a), a = g.stringify(a), 512 >= encodeURIComponent(a).length && (e.e |= 64, h.b.a.rt = a))
            }, _trackRTEvent: function (a) {
                a =
                    a[1];
                if (d.d(a, "Object")) {
                    b(a);
                    a = encodeURIComponent(g.stringify(a));
                    var f = function (a) {
                        var b = h.b.a.rt;
                        e.e |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.j();
                        h.b.a.rt = b
                    }, m = a.length;
                    if (900 >= m) f.call(this, a); else for (var m = Math.ceil(m / 900), q = "block|" + Math.round(Math.random() * p.s).toString(16) + "|" + m + "|", l = [], r = 0; r < m; r++) l.push(r), l.push(a.substring(900 * r, 900 * r + 900)), f.call(this, q + l.join("|")), l = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                n.Ua();
                n.jb(a)
            }
        };
        e.init();
        h.pa = e;
        return h.pa
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = t, this.a = {}, this.ba = t, this.R = v, this.init())
        }

        var b = mt.url, d = mt.ha, g = mt.W, f = mt.lang, p = mt.cookie, l = mt.f, n = mt.localStorage,
            e = mt.sessionStorage, k = h.p, w = h.w;
        a.prototype = {
            S: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, ea: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, F: function (a) {
                for (var d = 0; d < c.dm.length; d++) if (-1 <
                    c.dm[d].indexOf("/")) {
                    if (this.ea(a, c.dm[d])) return t
                } else {
                    var e = b.P(a);
                    if (e && this.S(e, c.dm[d])) return t
                }
                return v
            }, O: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.S(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, aa: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.ea(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, Ka: function () {
                if (!document.referrer) return k.m - k.z > c.vdur ? 1 : 4;
                var a = v;
                this.F(document.referrer) && this.F(document.location.href) ? a = t : (a = b.P(document.referrer), a = this.S(a || "", document.location.hostname));
                return a ? k.m - k.z > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return p.get(a) || e.get(a) || n.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    p.set(a, b, {domain: this.O(), path: this.aa(), N: d}), d ? n.set(a, b, d) : e.set(a, b)
                } catch (f) {
                }
            }, ab: function (a) {
                try {
                    p.set(a, "", {domain: this.O(), path: this.aa(), N: -1}), e.remove(a), n.remove(a)
                } catch (b) {
                }
            }, hb: function () {
                var a, b, d, e, f;
                k.z = this.getData("Hm_lpvt_" +
                    c.id) || 0;
                13 === k.z.length && (k.z = Math.round(k.z / 1E3));
                b = this.Ka();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < k.m - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.m); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.m, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, k.m);
                d = k.m === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.F(document.location.href) &&
                    ("" === document.referrer || this.F(document.referrer))) a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            }, ga: function () {
                for (var a = [], b = this.a.et, d = 0, e = k.ia.length; d < e; d++) {
                    var f = k.ia[d], l = this.a[f];
                    "undefined" !== typeof l && "" !== l && ("tt" !== f || "tt" === f && 0 === b) && (("ct" !== f || "ct" === f && 0 === b) && ("kb" !== f || "kb" === f && 3 === b)) && a.push(f + "=" + encodeURIComponent(l))
                }
                switch (b) {
                    case 0:
                        a.push("sn=" + k.L);
                        this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
                        break;
                    case 3:
                        a.push("sn=" + k.L);
                        break;
                    case 85:
                        a.push("sn=" +
                            k.L);
                        break;
                    case 90:
                        this.a.rt && a.push("rt=" + this.a.rt)
                }
                return a.join("&")
            }, ib: function () {
                this.hb();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = l.bb;
                this.a.cl = l.colorDepth + "-bit";
                this.a.ln = String(l.language).toLowerCase();
                this.a.ja = l.javaEnabled ? 1 : 0;
                this.a.ck = l.cookieEnabled ? 1 : 0;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = g.La();
                this.a.v = "1.2.34";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                this.a.vl = l.C() + l.D();
                var a = document.location.href;
                this.a.cm = b.k(a, k.Qa) || "";
                this.a.cp = b.k(a, k.Ra) || b.k(a, k.nb) || "";
                this.a.cw = b.k(a, k.Pa) || b.k(a, k.pb) || "";
                this.a.ci = b.k(a, k.Na) || b.k(a, k.mb) || "";
                this.a.cf = b.k(a, k.Sa) || b.k(a, k.ob) || "";
                this.a.cu = b.k(a, k.Oa) || b.k(a, k.lb) || ""
            }, init: function () {
                try {
                    this.ib(), 0 === this.a.nv ? this.gb() : this.V(".*"), h.b = this, this.qa(), w.B("pv-b"), this.fb()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.H + "//" + k.U + "?" + b.join("&"))
                }
            }, fb: function () {
                function a() {
                    w.B("pv-d")
                }

                this.ba ? (this.R = t, this.a.et = 0, this.a.ep = "", this.a.vl = l.C() + l.D(), this.j(a)) : a()
            }, j: function (a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * k.s);
                w.B("stag-b");
                var e = k.H + "//" + k.U + "?" + b.ga();
                w.B("stag-d");
                b.na(e);
                d.log(e, function (d) {
                    b.V(d);
                    f.d(a, "Function") && a.call(b)
                })
            }, qa: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id),
                    e = b.P(document.referrer) === k.oa ? 1 : 0, f = b.k(a, "jn"),
                    l = /^heatlink$|^select$|^pageclick$/.test(f);
                a && (d.test(a) && e && l) && (this.a.rnd = Math.round(Math.random() * k.s), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, na: function (a) {
                var b = e.get("Hm_unsent_" + c.id) || "",
                    d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
                    b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                e.set("Hm_unsent_" +
                    c.id, b)
            }, V: function (a) {
                var b = e.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? e.set("Hm_unsent_" + c.id, b) : e.remove("Hm_unsent_" + c.id))
            }, gb: function () {
                var a = this, b = e.get("Hm_unsent_" + c.id);
                if (b) for (var b = b.split(","), f = function (b) {
                    d.log(k.H + "//" + decodeURIComponent(b), function (b) {
                        a.V(b)
                    })
                }, l = 0, g = b.length; l < g; l++) f(b[l])
            }
        };
        return new a
    })();
    (function () {
        var a = mt.event, b = mt.lang, d = h.p;
        if (c.kbtrk && "undefined" !== typeof h.b) {
            h.b.a.kb = b.Va() ? h.b.a.kb : 0;
            var g = function () {
                h.b.a.et = 85;
                h.b.a.ep = h.b.a.kb;
                h.b.j()
            };
            a.c(document, "keyup", function () {
                h.b.a.kb++
            });
            a.c(window, "unload", function () {
                g()
            });
            setInterval(g, d.Wa)
        }
    })();
    (function () {
        var a = mt.event, b = mt.l;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var d = function (a) {
                    var b = performance.timing, d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {start: d, end: a, value: 0 < a - d ? a - d : 0}
                }, g = function () {
                    var a;
                    a = d("navigation");
                    var f = d("request");
                    a = {
                        netAll: f.start - a.start,
                        netDns: d("domainLookup").value,
                        netTcp: d("connect").value,
                        srv: d("response").start - f.start,
                        dom: performance.timing.domInteractive - performance.timing.fetchStart,
                        loadEvent: d("loadEvent").end -
                            a.start
                    };
                    h.b.a.et = 87;
                    h.b.a.ep = b.stringify(a);
                    h.b.j()
                };
                a.c(window, "load", function () {
                    setTimeout(g, 500)
                })
            }
        } catch (f) {
        }
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, g = mt.l;
        if ("undefined" !== typeof h.b && (c.med || (!a.ca || 7 < a.Ta) && c.cvcc)) {
            var f, p, l, n, e = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, k = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === v) return v
            }, w = function (a, d) {
                var e = {};
                e.n = f;
                e.t = "clk";
                e.v = a;
                if (d) {
                    var k = d.getAttribute("href"), m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : u,
                        p = d.getAttribute("id") || "";
                    l.test(k) ? (e.sn = "mediate",
                        e.snv = k) : b.d(m, "String") && l.test(m) && (e.sn = "wrap", e.snv = m);
                    e.id = p
                }
                h.b.a.et = 86;
                h.b.a.ep = g.stringify(e);
                h.b.j();
                for (e = +new Date; 400 >= +new Date - e;) ;
            };
            if (c.med) p = "/zoosnet", f = "swt", l = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, n = {
                click: function () {
                    for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, k = 0, g = b.length; k < g; k++) d = b[k], f = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (l.test(f) || l.test(d)) && a.push(b[k]);
                    return a
                }
            }; else if (c.cvcc) {
                p = "/other-comm";
                f = "other";
                l = c.cvcc.q || s;
                var m = c.cvcc.id || s;
                n = {
                    click: function () {
                        for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, k, g = 0, p = b.length; g < p; g++) d = b[g], l !== s ? (f = d.getAttribute("onclick"), k = d.getAttribute("href"), m ? (d = d.getAttribute("id"), (l.test(f) || l.test(k) || m.test(d)) &&
                        a.push(b[g])) : (l.test(f) || l.test(k)) && a.push(b[g])) : m !== s && (d = d.getAttribute("id"), m.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof n && "undefined" !== typeof l) {
                var q;
                p += /\/$/.test(p) ? "" : "/";
                var x = function (a, d) {
                    if (q === d) return w(p + a, d), v;
                    if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (q === d[e]) return w(p + a + "/" + (e + 1), d[e]), v
                };
                d.c(document, "mousedown", function (a) {
                    a = a || window.event;
                    q = a.target || a.srcElement;
                    var d = {};
                    for (k(n, function (a, e) {
                        d[a] = b.d(e, "Function") ? e() : document.getElementById(e)
                    }); q &&
                         q !== document && k(d, x) !== v;) q = q.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.g, b = mt.lang, d = mt.event, g = mt.l;
        if ("undefined" !== typeof h.b && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var f = {
                la: function () {
                    for (var b = c.cvcf.length, g, n = 0; n < b; n++) (g = a.$(decodeURIComponent(c.cvcf[n]))) && d.c(g, "click", f.xa())
                }, xa: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.a.ep = g.stringify(a);
                        h.b.j()
                    }
                }
            };
            a.fa(function () {
                f.la()
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.l;
        if (c.med && "undefined" !== typeof h.b) {
            var d = +new Date, g = {n: "anti", sb: 0, kb: 0, clk: 0}, f = function () {
                h.b.a.et = 86;
                h.b.a.ep = b.stringify(g);
                h.b.j()
            };
            a.c(document, "click", function () {
                g.clk++
            });
            a.c(document, "keyup", function () {
                g.kb = 1
            });
            a.c(window, "scroll", function () {
                g.sb++
            });
            a.c(window, "unload", function () {
                g.t = +new Date - d;
                f()
            });
            a.c(window, "load", function () {
                setTimeout(f, 5E3)
            })
        }
    })();
})();
