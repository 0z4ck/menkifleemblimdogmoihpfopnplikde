var Zepto = function() {
    function a(a) {
        return null == a ? String(a) : T[U.call(a)] || "object"
    }

    function b(b) {
        return "function" == a(b)
    }

    function c(a) {
        return null != a && a == a.window
    }

    function d(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }

    function e(b) {
        return "object" == a(b)
    }

    function f(a) {
        return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
    }

    function g(a) {
        return "number" == typeof a.length
    }

    function h(a) {
        return C.call(a, function(a) {
            return null != a
        })
    }

    function i(a) {
        return a.length > 0 ? $.fn.concat.apply([], a) : a
    }

    function j(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function k(a) {
        return a in F ? F[a] : F[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }

    function l(a, b) {
        return "number" != typeof b || G[j(a)] ? b : b + "px"
    }

    function m(a) {
        var b, c;
        return E[a] || (b = D.createElement(a), D.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), E[a] = c), E[a]
    }

    function n(a) {
        return "children" in a ? B.call(a.children) : $.map(a.childNodes, function(a) {
            return 1 == a.nodeType ? a : void 0
        })
    }

    function o(a, b, c) {
        for (w in b) c && (f(b[w]) || Y(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Y(b[w]) && !Y(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
    }

    function p(a, b) {
        return null == b ? $(a) : $(a).filter(b)
    }

    function q(a, c, d, e) {
        return b(c) ? c.call(a, d, e) : c
    }

    function r(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }

    function s(a, b) {
        var c = a.className,
            d = c && c.baseVal !== v;
        return b === v ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
    }

    function t(a) {
        var b;
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? $.parseJSON(a) : a : b) : a
        } catch (c) {
            return a
        }
    }

    function u(a, b) {
        b(a);
        for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b)
    }
    var v, w, $, x, y, z, A = [],
        B = A.slice,
        C = A.filter,
        D = window.document,
        E = {},
        F = {},
        G = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        H = /^\s*<(\w+|!)[^>]*>/,
        I = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        K = /^(?:body|html)$/i,
        L = /([A-Z])/g,
        M = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        N = ["after", "prepend", "before", "append"],
        O = D.createElement("table"),
        P = D.createElement("tr"),
        Q = {
            tr: D.createElement("tbody"),
            tbody: O,
            thead: O,
            tfoot: O,
            td: P,
            th: P,
            "*": D.createElement("div")
        },
        R = /complete|loaded|interactive/,
        S = /^[\w-]*$/,
        T = {},
        U = T.toString,
        V = {},
        W = D.createElement("div"),
        X = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        Y = Array.isArray || function(a) {
            return a instanceof Array
        };
    return V.matches = function(a, b) {
        if (!b || !a || 1 !== a.nodeType) return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c) return c.call(a, b);
        var d, e = a.parentNode,
            f = !e;
        return f && (e = W).appendChild(a), d = ~V.qsa(e, b).indexOf(a), f && W.removeChild(a), d
    }, y = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }, z = function(a) {
        return C.call(a, function(b, c) {
            return a.indexOf(b) == c
        })
    }, V.fragment = function(a, b, c) {
        var d, e, g;
        return I.test(a) && (d = $(D.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(J, "<$1></$2>")), b === v && (b = H.test(a) && RegExp.$1), b in Q || (b = "*"), g = Q[b], g.innerHTML = "" + a, d = $.each(B.call(g.childNodes), function() {
            g.removeChild(this)
        })), f(c) && (e = $(d), $.each(c, function(a, b) {
            M.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
        })), d
    }, V.Z = function(a, b) {
        return a = a || [], a.__proto__ = $.fn, a.selector = b || "", a
    }, V.isZ = function(a) {
        return a instanceof V.Z
    }, V.init = function(a, c) {
        var d;
        if (!a) return V.Z();
        if ("string" == typeof a)
            if (a = a.trim(), "<" == a[0] && H.test(a)) d = V.fragment(a, RegExp.$1, c), a = null;
            else {
                if (c !== v) return $(c).find(a);
                d = V.qsa(D, a)
            }
        else {
            if (b(a)) return $(D).ready(a);
            if (V.isZ(a)) return a;
            if (Y(a)) d = h(a);
            else if (e(a)) d = [a], a = null;
            else if (H.test(a)) d = V.fragment(a.trim(), RegExp.$1, c), a = null;
            else {
                if (c !== v) return $(c).find(a);
                d = V.qsa(D, a)
            }
        }
        return V.Z(d, a)
    }, $ = function(a, b) {
        return V.init(a, b)
    }, $.extend = function(a) {
        var b, c = B.call(arguments, 1);
        return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
            o(a, c, b)
        }), a
    }, V.qsa = function(a, b) {
        var c, e = "#" == b[0],
            f = !e && "." == b[0],
            g = e || f ? b.slice(1) : b,
            h = S.test(g);
        return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : B.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    }, $.contains = D.documentElement.contains ? function(a, b) {
        return a !== b && a.contains(b)
    } : function(a, b) {
        for (; b && (b = b.parentNode);)
            if (b === a) return !0;
        return !1
    }, $.type = a, $.isFunction = b, $.isWindow = c, $.isArray = Y, $.isPlainObject = f, $.isEmptyObject = function(a) {
        var b;
        for (b in a) return !1;
        return !0
    }, $.inArray = function(a, b, c) {
        return A.indexOf.call(b, a, c)
    }, $.camelCase = y, $.trim = function(a) {
        return null == a ? "" : String.prototype.trim.call(a)
    }, $.uuid = 0, $.support = {}, $.expr = {}, $.map = function(a, b) {
        var c, d, e, f = [];
        if (g(a))
            for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
        else
            for (e in a) c = b(a[e], e), null != c && f.push(c);
        return i(f)
    }, $.each = function(a, b) {
        var c, d;
        if (g(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1) return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1) return a; return a
    }, $.grep = function(a, b) {
        return C.call(a, b)
    }, window.JSON && ($.parseJSON = JSON.parse), $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        T["[object " + b + "]"] = b.toLowerCase()
    }), $.fn = {
        forEach: A.forEach,
        reduce: A.reduce,
        push: A.push,
        sort: A.sort,
        indexOf: A.indexOf,
        concat: A.concat,
        map: function(a) {
            return $($.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return $(B.apply(this, arguments))
        },
        ready: function(a) {
            return R.test(D.readyState) && D.body ? a($) : D.addEventListener("DOMContentLoaded", function() {
                a($)
            }, !1), this
        },
        get: function(a) {
            return a === v ? B.call(this) : this[a >= 0 ? a : a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            return A.every.call(this, function(b, c) {
                return a.call(b, c, b) !== !1
            }), this
        },
        filter: function(a) {
            return b(a) ? this.not(this.not(a)) : $(C.call(this, function(b) {
                return V.matches(b, a)
            }))
        },
        add: function(a, b) {
            return $(z(this.concat($(a, b))))
        },
        is: function(a) {
            return this.length > 0 && V.matches(this[0], a)
        },
        not: function(a) {
            var c = [];
            if (b(a) && a.call !== v) this.each(function(b) {
                a.call(this, b) || c.push(this)
            });
            else {
                var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? B.call(a) : $(a);
                this.forEach(function(a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return $(c)
        },
        has: function(a) {
            return this.filter(function() {
                return e(a) ? $.contains(this, a) : $(this).find(a).size()
            })
        },
        eq: function(a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !e(a) ? a : $(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !e(a) ? a : $(a)
        },
        find: function(a) {
            var b, c = this;
            return b = a ? "object" == typeof a ? $(a).filter(function() {
                var a = this;
                return A.some.call(c, function(b) {
                    return $.contains(b, a)
                })
            }) : 1 == this.length ? $(V.qsa(this[0], a)) : this.map(function() {
                return V.qsa(this, a)
            }) : []
        },
        closest: function(a, b) {
            var c = this[0],
                e = !1;
            for ("object" == typeof a && (e = $(a)); c && !(e ? e.indexOf(c) >= 0 : V.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
            return $(c)
        },
        parents: function(a) {
            for (var b = [], c = this; c.length > 0;) c = $.map(c, function(a) {
                return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
            });
            return p(b, a)
        },
        parent: function(a) {
            return p(z(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return p(this.map(function() {
                return n(this)
            }), a)
        },
        contents: function() {
            return this.map(function() {
                return B.call(this.childNodes)
            })
        },
        siblings: function(a) {
            return p(this.map(function(a, b) {
                return C.call(n(b.parentNode), function(a) {
                    return a !== b
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return $.map(this, function(b) {
                return b[a]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var c = b(a);
            if (this[0] && !c) var d = $(a).get(0),
                e = d.parentNode || this.length > 1;
            return this.each(function(b) {
                $(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                $(this[0]).before(a = $(a));
                for (var b;
                    (b = a.children()).length;) a = b.first();
                $(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var c = b(a);
            return this.each(function(b) {
                var d = $(this),
                    e = d.contents(),
                    f = c ? a.call(this, b) : a;
                e.length ? e.wrapAll(f) : d.append(f)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $(this).replaceWith($(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var b = $(this);
                (a === v ? "none" == b.css("display") : a) ? b.show(): b.hide()
            })
        },
        prev: function(a) {
            return $(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return $(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return 0 in arguments ? this.each(function(b) {
                var c = this.innerHTML;
                $(this).empty().append(q(this, a, b, c))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(a) {
            return 0 in arguments ? this.each(function(b) {
                var c = q(this, a, b, this.textContent);
                this.textContent = null == c ? "" : "" + c
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(a, b) {
            var c;
            return "string" != typeof a || 1 in arguments ? this.each(function(c) {
                if (1 === this.nodeType)
                    if (e(a))
                        for (w in a) r(this, w, a[w]);
                    else r(this, a, q(this, b, c, this.getAttribute(a)))
            }) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : v
        },
        removeAttr: function(a) {
            return this.each(function() {
                1 === this.nodeType && r(this, a)
            })
        },
        prop: function(a, b) {
            return a = X[a] || a, 1 in arguments ? this.each(function(c) {
                this[a] = q(this, b, c, this[a])
            }) : this[0] && this[0][a]
        },
        data: function(a, b) {
            var c = "data-" + a.replace(L, "-$1").toLowerCase(),
                d = 1 in arguments ? this.attr(c, b) : this.attr(c);
            return null !== d ? t(d) : v
        },
        val: function(a) {
            return 0 in arguments ? this.each(function(b) {
                this.value = q(this, a, b, this.value)
            }) : this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(a) {
            if (a) return this.each(function(b) {
                var c = $(this),
                    d = q(this, a, b, c.offset()),
                    e = c.offsetParent().offset(),
                    f = {
                        top: d.top - e.top,
                        left: d.left - e.left
                    };
                "static" == c.css("position") && (f.position = "relative"), c.css(f)
            });
            if (!this.length) return null;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function(b, c) {
            if (arguments.length < 2) {
                var d = this[0],
                    e = getComputedStyle(d, "");
                if (!d) return;
                if ("string" == typeof b) return d.style[y(b)] || e.getPropertyValue(b);
                if (Y(b)) {
                    var f = {};
                    return $.each(Y(b) ? b : [b], function(a, b) {
                        f[b] = d.style[y(b)] || e.getPropertyValue(b)
                    }), f
                }
            }
            var g = "";
            if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                this.style.removeProperty(j(b))
            });
            else
                for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
                    this.style.removeProperty(j(w))
                });
            return this.each(function() {
                this.style.cssText += ";" + g
            })
        },
        index: function(a) {
            return a ? this.indexOf($(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return a ? A.some.call(this, function(a) {
                return this.test(s(a))
            }, k(a)) : !1
        },
        addClass: function(a) {
            return a ? this.each(function(b) {
                x = [];
                var c = s(this),
                    d = q(this, a, b, c);
                d.split(/\s+/g).forEach(function(a) {
                    $(this).hasClass(a) || x.push(a)
                }, this), x.length && s(this, c + (c ? " " : "") + x.join(" "))
            }) : this
        },
        removeClass: function(a) {
            return this.each(function(b) {
                return a === v ? s(this, "") : (x = s(this), q(this, a, b, x).split(/\s+/g).forEach(function(a) {
                    x = x.replace(k(a), " ")
                }), void s(this, x.trim()))
            })
        },
        toggleClass: function(a, b) {
            return a ? this.each(function(c) {
                var d = $(this),
                    e = q(this, a, c, s(this));
                e.split(/\s+/g).forEach(function(a) {
                    (b === v ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
                })
            }) : this
        },
        scrollTop: function(a) {
            if (this.length) {
                var b = "scrollTop" in this[0];
                return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
                    this.scrollTop = a
                } : function() {
                    this.scrollTo(this.scrollX, a)
                })
            }
        },
        scrollLeft: function(a) {
            if (this.length) {
                var b = "scrollLeft" in this[0];
                return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
                    this.scrollLeft = a
                } : function() {
                    this.scrollTo(a, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = K.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                return c.top -= parseFloat($(a).css("margin-top")) || 0, c.left -= parseFloat($(a).css("margin-left")) || 0, d.top += parseFloat($(b[0]).css("border-top-width")) || 0, d.left += parseFloat($(b[0]).css("border-left-width")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || D.body; a && !K.test(a.nodeName) && "static" == $(a).css("position");) a = a.offsetParent;
                return a
            })
        }
    }, $.fn.detach = $.fn.remove, ["width", "height"].forEach(function(a) {
        var b = a.replace(/./, function(a) {
            return a[0].toUpperCase()
        });
        $.fn[a] = function(e) {
            var f, g = this[0];
            return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                g = $(this), g.css(a, q(this, e, b, g[a]()))
            })
        }
    }), N.forEach(function(b, c) {
        var d = c % 2;
        $.fn[b] = function() {
            var b, e, f = $.map(arguments, function(c) {
                    return b = a(c), "object" == b || "array" == b || null == c ? c : V.fragment(c)
                }),
                g = this.length > 1;
            return f.length < 1 ? this : this.each(function(a, b) {
                e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
                var h = $.contains(D.documentElement, e);
                f.forEach(function(a) {
                    if (g) a = a.cloneNode(!0);
                    else if (!e) return $(a).remove();
                    e.insertBefore(a, b), h && u(a, function(a) {
                        null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }, $.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
            return $(a)[b](this), this
        }
    }), V.Z.prototype = $.fn, V.uniq = z, V.deserializeValue = t, $.zepto = V, $
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function($) {
        function a(a) {
            return a._zid || (a._zid = l++)
        }

        function b(b, e, f, g) {
            if (e = c(e), e.ns) var h = d(e.ns);
            return (p[a(b)] || []).filter(function(b) {
                return b && (!e.e || b.e == e.e) && (!e.ns || h.test(b.ns)) && (!f || a(b.fn) === a(f)) && (!g || b.sel == g)
            })
        }

        function c(a) {
            var b = ("" + a).split(".");
            return {
                e: b[0],
                ns: b.slice(1).sort().join(" ")
            }
        }

        function d(a) {
            return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
        }

        function e(a, b) {
            return a.del && !r && a.e in s || !!b
        }

        function f(a) {
            return t[a] || r && s[a] || a
        }

        function g(b, d, g, h, j, l, m) {
            var n = a(b),
                o = p[n] || (p[n] = []);
            d.split(/\s/).forEach(function(a) {
                if ("ready" == a) return $(document).ready(g);
                var d = c(a);
                d.fn = g, d.sel = j, d.e in t && (g = function(a) {
                    var b = a.relatedTarget;
                    return !b || b !== this && !$.contains(this, b) ? d.fn.apply(this, arguments) : void 0
                }), d.del = l;
                var n = l || g;
                d.proxy = function(a) {
                    if (a = i(a), !a.isImmediatePropagationStopped()) {
                        a.data = h;
                        var c = n.apply(b, a._args == k ? [a] : [a].concat(a._args));
                        return c === !1 && (a.preventDefault(), a.stopPropagation()), c
                    }
                }, d.i = o.length, o.push(d), "addEventListener" in b && b.addEventListener(f(d.e), d.proxy, e(d, m))
            })
        }

        function h(c, d, g, h, i) {
            var j = a(c);
            (d || "").split(/\s/).forEach(function(a) {
                b(c, a, g, h).forEach(function(a) {
                    delete p[j][a.i], "removeEventListener" in c && c.removeEventListener(f(a.e), a.proxy, e(a, i))
                })
            })
        }

        function i(a, b) {
            return (b || !a.isDefaultPrevented) && (b || (b = a), $.each(x, function(c, d) {
                var e = b[c];
                a[c] = function() {
                    return this[d] = u, e && e.apply(b, arguments)
                }, a[d] = v
            }), (b.defaultPrevented !== k ? b.defaultPrevented : "returnValue" in b ? b.returnValue === !1 : b.getPreventDefault && b.getPreventDefault()) && (a.isDefaultPrevented = u)), a
        }

        function j(a) {
            var b, c = {
                originalEvent: a
            };
            for (b in a) w.test(b) || a[b] === k || (c[b] = a[b]);
            return i(c, a)
        }
        var k, l = 1,
            m = Array.prototype.slice,
            n = $.isFunction,
            o = function(a) {
                return "string" == typeof a
            },
            p = {},
            q = {},
            r = "onfocusin" in window,
            s = {
                focus: "focusin",
                blur: "focusout"
            },
            t = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        q.click = q.mousedown = q.mouseup = q.mousemove = "MouseEvents", $.event = {
            add: g,
            remove: h
        }, $.proxy = function(b, c) {
            var d = 2 in arguments && m.call(arguments, 2);
            if (n(b)) {
                var e = function() {
                    return b.apply(c, d ? d.concat(m.call(arguments)) : arguments)
                };
                return e._zid = a(b), e
            }
            if (o(c)) return d ? (d.unshift(b[c], b), $.proxy.apply(null, d)) : $.proxy(b[c], b);
            throw new TypeError("expected function")
        }, $.fn.bind = function(a, b, c) {
            return this.on(a, b, c)
        }, $.fn.unbind = function(a, b) {
            return this.off(a, b)
        }, $.fn.one = function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        };
        var u = function() {
                return !0
            },
            v = function() {
                return !1
            },
            w = /^([A-Z]|returnValue$|layer[XY]$)/,
            x = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        $.fn.delegate = function(a, b, c) {
            return this.on(b, a, c)
        }, $.fn.undelegate = function(a, b, c) {
            return this.off(b, a, c)
        }, $.fn.live = function(a, b) {
            return $(document.body).delegate(this.selector, a, b), this
        }, $.fn.die = function(a, b) {
            return $(document.body).undelegate(this.selector, a, b), this
        }, $.fn.on = function(a, b, c, d, e) {
            var f, i, l = this;
            return a && !o(a) ? ($.each(a, function(a, d) {
                l.on(a, b, c, d, e)
            }), l) : (o(b) || n(d) || d === !1 || (d = c, c = b, b = k), (n(c) || c === !1) && (d = c, c = k), d === !1 && (d = v), l.each(function(k, l) {
                e && (f = function(a) {
                    return h(l, a.type, d), d.apply(this, arguments)
                }), b && (i = function(a) {
                    var c, e = $(a.target).closest(b, l).get(0);
                    return e && e !== l ? (c = $.extend(j(a), {
                        currentTarget: e,
                        liveFired: l
                    }), (f || d).apply(e, [c].concat(m.call(arguments, 1)))) : void 0
                }), g(l, a, d, c, b, i || f)
            }))
        }, $.fn.off = function(a, b, c) {
            var d = this;
            return a && !o(a) ? ($.each(a, function(a, c) {
                d.off(a, b, c)
            }), d) : (o(b) || n(c) || c === !1 || (c = b, b = k), c === !1 && (c = v), d.each(function() {
                h(this, a, c, b)
            }))
        }, $.fn.trigger = function(a, b) {
            return a = o(a) || $.isPlainObject(a) ? $.Event(a) : i(a), a._args = b, this.each(function() {
                "dispatchEvent" in this ? this.dispatchEvent(a) : $(this).triggerHandler(a, b)
            })
        }, $.fn.triggerHandler = function(a, c) {
            var d, e;
            return this.each(function(f, g) {
                d = j(o(a) ? $.Event(a) : a), d._args = c, d.target = g, $.each(b(g, a.type || a), function(a, b) {
                    return e = b.proxy(d), d.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), e
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) {
            $.fn[a] = function(b) {
                return b ? this.bind(a, b) : this.trigger(a)
            }
        }), ["focus", "blur"].forEach(function(a) {
            $.fn[a] = function(b) {
                return b ? this.bind(a, b) : this.each(function() {
                    try {
                        this[a]()
                    } catch (b) {}
                }), this
            }
        }), $.Event = function(a, b) {
            o(a) || (b = a, a = b.type);
            var c = document.createEvent(q[a] || "Events"),
                d = !0;
            if (b)
                for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
            return c.initEvent(a, d, !0), i(c)
        }
    }(Zepto),
    function($) {
        function a(a, b, c) {
            var d = $.Event(b);
            return $(a).trigger(d, c), !d.isDefaultPrevented()
        }

        function b(b, c, d, e) {
            return b.global ? a(c || r, d, e) : void 0
        }

        function c(a) {
            a.global && 0 === $.active++ && b(a, null, "ajaxStart")
        }

        function d(a) {
            a.global && !--$.active && b(a, null, "ajaxStop")
        }

        function e(a, c) {
            var d = c.context;
            return c.beforeSend.call(d, a, c) === !1 || b(c, d, "ajaxBeforeSend", [a, c]) === !1 ? !1 : void b(c, d, "ajaxSend", [a, c])
        }

        function f(a, c, d, e) {
            var f = d.context,
                g = "success";
            d.success.call(f, a, g, c), e && e.resolveWith(f, [a, g, c]), b(d, f, "ajaxSuccess", [c, d, a]), h(g, c, d)
        }

        function g(a, c, d, e, f) {
            var g = e.context;
            e.error.call(g, d, c, a), f && f.rejectWith(g, [d, c, a]), b(e, g, "ajaxError", [d, e, a || c]), h(c, d, e)
        }

        function h(a, c, e) {
            var f = e.context;
            e.complete.call(f, c, a), b(e, f, "ajaxComplete", [c, e]), d(e)
        }

        function i() {}

        function j(a) {
            return a && (a = a.split(";", 2)[0]), a && (a == w ? "html" : a == v ? "json" : t.test(a) ? "script" : u.test(a) && "xml") || "text"
        }

        function k(a, b) {
            return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
        }

        function l(a) {
            a.processData && a.data && "string" != $.type(a.data) && (a.data = $.param(a.data, a.traditional)), !a.data || a.type && "GET" != a.type.toUpperCase() || (a.url = k(a.url, a.data), a.data = void 0)
        }

        function m(a, b, c, d) {
            return $.isFunction(b) && (d = c, c = b, b = void 0), $.isFunction(c) || (d = c, c = void 0), {
                url: a,
                data: b,
                success: c,
                dataType: d
            }
        }

        function n(a, b, c, d) {
            var e, f = $.isArray(b),
                g = $.isPlainObject(b);
            $.each(b, function(b, h) {
                e = $.type(h), d && (b = c ? d : d + "[" + (g || "object" == e || "array" == e ? b : "") + "]"), !d && f ? a.add(h.name, h.value) : "array" == e || !c && "object" == e ? n(a, h, c, b) : a.add(b, h)
            })
        }
        var o, p, q = 0,
            r = window.document,
            s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            t = /^(?:text|application)\/javascript/i,
            u = /^(?:text|application)\/xml/i,
            v = "application/json",
            w = "text/html",
            x = /^\s*$/;
        $.active = 0, $.ajaxJSONP = function(a, b) {
            if (!("type" in a)) return $.ajax(a);
            var c, d, h = a.jsonpCallback,
                i = ($.isFunction(h) ? h() : h) || "jsonp" + ++q,
                j = r.createElement("script"),
                k = window[i],
                l = function(a) {
                    $(j).triggerHandler("error", a || "abort")
                },
                m = {
                    abort: l
                };
            return b && b.promise(m), $(j).on("load error", function(e, h) {
                clearTimeout(d), $(j).off().remove(), "error" != e.type && c ? f(c[0], m, a, b) : g(null, h || "error", m, a, b), window[i] = k, c && $.isFunction(k) && k(c[0]), k = c = void 0
            }), e(m, a) === !1 ? (l("abort"), m) : (window[i] = function() {
                c = arguments
            }, j.src = a.url.replace(/\?(.+)=\?/, "?$1=" + i), r.head.appendChild(j), a.timeout > 0 && (d = setTimeout(function() {
                l("timeout")
            }, a.timeout)), m)
        }, $.ajaxSettings = {
            type: "GET",
            beforeSend: i,
            success: i,
            error: i,
            complete: i,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: v,
                xml: "application/xml, text/xml",
                html: w,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, $.ajax = function(a) {
            var b = $.extend({}, a || {}),
                d = $.Deferred && $.Deferred();
            for (o in $.ajaxSettings) void 0 === b[o] && (b[o] = $.ajaxSettings[o]);
            c(b), b.crossDomain || (b.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(b.url) && RegExp.$2 != window.location.host), b.url || (b.url = window.location.toString()), l(b);
            var h = b.dataType,
                m = /\?.+=\?/.test(b.url);
            if (m && (h = "jsonp"), b.cache !== !1 && (a && a.cache === !0 || "script" != h && "jsonp" != h) || (b.url = k(b.url, "_=" + Date.now())), "jsonp" == h) return m || (b.url = k(b.url, b.jsonp ? b.jsonp + "=?" : b.jsonp === !1 ? "" : "callback=?")), $.ajaxJSONP(b, d);
            var n, q = b.accepts[h],
                r = {},
                s = function(a, b) {
                    r[a.toLowerCase()] = [a, b]
                },
                t = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : window.location.protocol,
                u = b.xhr(),
                v = u.setRequestHeader;
            if (d && d.promise(u), b.crossDomain || s("X-Requested-With", "XMLHttpRequest"), s("Accept", q || "*/*"), (q = b.mimeType || q) && (q.indexOf(",") > -1 && (q = q.split(",", 2)[0]), u.overrideMimeType && u.overrideMimeType(q)), (b.contentType || b.contentType !== !1 && b.data && "GET" != b.type.toUpperCase()) && s("Content-Type", b.contentType || "application/x-www-form-urlencoded"), b.headers)
                for (p in b.headers) s(p, b.headers[p]);
            if (u.setRequestHeader = s, u.onreadystatechange = function() {
                    if (4 == u.readyState) {
                        u.onreadystatechange = i, clearTimeout(n);
                        var a, c = !1;
                        if (u.status >= 200 && u.status < 300 || 304 == u.status || 0 == u.status && "file:" == t) {
                            h = h || j(b.mimeType || u.getResponseHeader("content-type")), a = u.responseText;
                            try {
                                "script" == h ? (1, eval)(a) : "xml" == h ? a = u.responseXML : "json" == h && (a = x.test(a) ? null : $.parseJSON(a))
                            } catch (e) {
                                c = e
                            }
                            c ? g(c, "parsererror", u, b, d) : f(a, u, b, d)
                        } else g(u.statusText || null, u.status ? "error" : "abort", u, b, d)
                    }
                }, e(u, b) === !1) return u.abort(), g(null, "abort", u, b, d), u;
            if (b.xhrFields)
                for (p in b.xhrFields) u[p] = b.xhrFields[p];
            var w = "async" in b ? b.async : !0;
            u.open(b.type, b.url, w, b.username, b.password);
            for (p in r) v.apply(u, r[p]);
            return b.timeout > 0 && (n = setTimeout(function() {
                u.onreadystatechange = i, u.abort(), g(null, "timeout", u, b, d)
            }, b.timeout)), u.send(b.data ? b.data : null), u
        }, $.get = function() {
            return $.ajax(m.apply(null, arguments))
        }, $.post = function() {
            var a = m.apply(null, arguments);
            return a.type = "POST", $.ajax(a)
        }, $.getJSON = function() {
            var a = m.apply(null, arguments);
            return a.dataType = "json", $.ajax(a)
        }, $.fn.load = function(a, b, c) {
            if (!this.length) return this;
            var d, e = this,
                f = a.split(/\s/),
                g = m(a, b, c),
                h = g.success;
            return f.length > 1 && (g.url = f[0], d = f[1]), g.success = function(a) {
                e.html(d ? $("<div>").html(a.replace(s, "")).find(d) : a), h && h.apply(e, arguments)
            }, $.ajax(g), this
        };
        var y = encodeURIComponent;
        $.param = function(a, b) {
            var c = [];
            return c.add = function(a, b) {
                this.push(y(a) + "=" + y(b))
            }, n(c, a, b), c.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function($) {
        $.fn.serializeArray = function() {
            var a, b = [];
            return $([].slice.call(this.get(0).elements)).each(function() {
                a = $(this);
                var c = a.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != c && "reset" != c && "button" != c && ("radio" != c && "checkbox" != c || this.checked) && b.push({
                    name: a.attr("name"),
                    value: a.val()
                })
            }), b
        }, $.fn.serialize = function() {
            var a = [];
            return this.serializeArray().forEach(function(b) {
                a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
            }), a.join("&")
        }, $.fn.submit = function(a) {
            if (a) this.bind("submit", a);
            else if (this.length) {
                var b = $.Event("submit");
                this.eq(0).trigger(b), b.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function($) {
        "__proto__" in {} || $.extend($.zepto, {
            Z: function(a, b) {
                return a = a || [], $.extend(a, $.fn), a.selector = b || "", a.__Z = !0, a
            },
            isZ: function(a) {
                return "array" === $.type(a) && "__Z" in a
            }
        }), window.Zepto = Zepto, "$" in window || (window.$ = Zepto), "function" == typeof define && define.amd && define("jquery", [], function() {
            return Zepto
        });
        try {
            getComputedStyle(void 0)
        } catch (a) {
            var b = getComputedStyle;
            window.getComputedStyle = function(a) {
                try {
                    return b(a)
                } catch (c) {
                    return null
                }
            }
        }
    }(Zepto),
    function($) {
        $.Jcrop = function(a, b) {
            function c(a) {
                return Math.round(a) + "px"
            }

            function d(a) {
                return I.baseClass + "-" + a
            }

            function e() {
                return $.fx.step.hasOwnProperty("backgroundColor")
            }

            function f(a) {
                var b = $(a).offset();
                return [b.left, b.top]
            }

            function g(a) {
                return [a.pageX - H[0], a.pageY - H[1]]
            }

            function h(a) {
                "object" != typeof a && (a = {}), I = $.extend(I, a), $.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(a, b) {
                    "function" != typeof I[b] && (I[b] = function() {})
                })
            }

            function i(a, b, c) {
                if (H = f(Q), oa.ÌЇΙỊŢٳiǏЇĮ("move" === a ? a : a + "-resize"), "move" === a) return oa.activateHandlers(k(b), p, c);
                var d = la.getFixed(),
                    e = l(a),
                    g = la.getCorner(l(e));
                la.setPressed(la.getCorner(e)), la.setCurrent(g), oa.activateHandlers(j(a, d), p, c)
            }

            function j(a, b) {
                return function(c) {
                    if (I.aspectRatio) switch (a) {
                        case "e":
                            c[1] = b.y + 1;
                            break;
                        case "w":
                            c[1] = b.y + 1;
                            break;
                        case "n":
                            c[0] = b.x + 1;
                            break;
                        case "s":
                            c[0] = b.x + 1
                    } else switch (a) {
                        case "e":
                            c[1] = b.y2;
                            break;
                        case "w":
                            c[1] = b.y2;
                            break;
                        case "n":
                            c[0] = b.x2;
                            break;
                        case "s":
                            c[0] = b.x2
                    }
                    la.setCurrent(c), na.update()
                }
            }

            function k(a) {
                var b = a;
                return pa.watchKeys(),
                    function(a) {
                        la.moveOffset([a[0] - b[0], a[1] - b[1]]), b = a, na.update()
                    }
            }

            function l(a) {
                switch (a) {
                    case "n":
                        return "sw";
                    case "s":
                        return "nw";
                    case "e":
                        return "nw";
                    case "w":
                        return "ne";
                    case "ne":
                        return "sw";
                    case "nw":
                        return "se";
                    case "se":
                        return "nw";
                    case "sw":
                        return "ne"
                }
            }

            function m(a) {
                return function(b) {
                    return I.disabled ? !1 : "move" !== a || I.allowMove ? (H = f(Q), da = !0, i(a, g(b)), b.stopPropagation(), b.preventDefault(), !1) : !1
                }
            }

            function n(a, b, c) {
                var d = a.width(),
                    e = a.height();
                d > b && b > 0 && (d = b, e = b / a.width() * a.height()), e > c && c > 0 && (e = c, d = c / a.height() * a.width()), ba = a.width() / d, ca = a.height() / e, a.width(d).height(e)
            }

            function o(a) {
                return {
                    x: a.x * ba,
                    y: a.y * ca,
                    x2: a.x2 * ba,
                    y2: a.y2 * ca,
                    w: a.w * ba,
                    h: a.h * ca
                }
            }

            function p(a) {
                var b = la.getFixed();
                b.w > I.minSelect[0] && b.h > I.minSelect[1] ? (na.enableHandles(), na.done()) : na.release(), oa.ÌЇΙỊŢٳiǏЇĮ(I.allowSelect ? I.cursor : "default")
            }

            function q(a) {
                if (I.disabled) return !1;
                if (!I.allowSelect) return !1;
                da = !0, H = f(Q), na.disableHandles(), oa.ÌЇΙỊŢٳiǏЇĮ(I.cursor);
                var b = g(a);
                return la.setPressed(b), na.update(), oa.activateHandlers(r, p, "touch" === a.type.substring(0, 5)), pa.watchKeys(), a.stopPropagation(), a.preventDefault(), !1
            }

            function r(a) {
                la.setCurrent(a), na.update()
            }

            function s() {
                var a = $("<div></div>").addClass(d("tracker"));
                return K && a.css({
                    opacity: 0,
                    backgroundColor: "white"
                }), a
            }

            function t(a) {
                T.removeClass().addClass(d("holder")).addClass(a)
            }

            function u(a, b) {
                function c() {
                    window.setTimeout(s, l)
                }
                var d = a[0] / ba,
                    e = a[1] / ca,
                    f = a[2] / ba,
                    g = a[3] / ca;
                if (!ea) {
                    var h = la.flipCoords(d, e, f, g),
                        i = la.getFixed(),
                        j = [i.x, i.y, i.x2, i.y2],
                        k = j,
                        l = I.animationDelay,
                        m = h[0] - j[0],
                        n = h[1] - j[1],
                        o = h[2] - j[2],
                        p = h[3] - j[3],
                        q = 0,
                        r = I.swingSpeed;
                    d = k[0], e = k[1], f = k[2], g = k[3], na.animMode(!0);
                    var s = function() {
                        return function() {
                            q += (100 - q) / r, k[0] = Math.round(d + q / 100 * m), k[1] = Math.round(e + q / 100 * n), k[2] = Math.round(f + q / 100 * o), k[3] = Math.round(g + q / 100 * p), q >= 99.8 && (q = 100), 100 > q ? (w(k), c()) : (na.done(), na.animMode(!1), "function" == typeof b && b.call(qa))
                        }
                    }();
                    c()
                }
            }

            function v(a) {
                w([a[0] / ba, a[1] / ca, a[2] / ba, a[3] / ca]), I.onSelect.call(qa, o(la.getFixed())), na.enableHandles()
            }

            function w(a) {
                la.setPressed([a[0], a[1]]), la.setCurrent([a[2], a[3]]), na.update()
            }

            function x() {
                return o(la.getFixed())
            }

            function y() {
                return la.getFixed()
            }

            function z(a) {
                h(a), G()
            }

            function A() {
                I.disabled = !0, na.disableHandles(), na.ÌЇΙỊŢٳiǏЇĮ("default"), oa.ÌЇΙỊŢٳiǏЇĮ("default")
            }

            function B() {
                I.disabled = !1, G()
            }

            function C() {
                na.done(), oa.activateHandlers(null, null)
            }

            function D() {
                T.remove(), N.show(), N.css("visibility", "visible"), $(a).removeData("Jcrop")
            }

            function E(a, b) {
                na.release(), A();
                var c = new Image;
                c.onload = function() {
                    var d = c.width,
                        e = c.height,
                        f = I.boxWidth,
                        g = I.boxHeight;
                    Q.width(d).height(e), Q.attr("src", a), U.attr("src", a), n(Q, f, g), R = Q.width(), S = Q.height(), U.width(R).height(S), ha.width(R + 2 * ga).height(S + 2 * ga), T.width(R).height(S), ma.ٳٲٲiٲḮĨIli(R, S), B(), "function" == typeof b && b.call(qa)
                }, c.src = a
            }

            function F(a, b, c) {
                var d = b || I.bgColor;
                I.bgFade && e() && I.fadeTime && !c ? a.animate({
                    backgroundColor: d
                }, {
                    queue: !1,
                    duration: I.fadeTime
                }) : a.css("backgroundColor", d)
            }

            function G(a) {
                I.allowResize ? a ? na.enableOnly() : na.enableHandles() : na.disableHandles(), oa.ÌЇΙỊŢٳiǏЇĮ(I.allowSelect ? I.cursor : "default"), na.ÌЇΙỊŢٳiǏЇĮ(I.allowMove ? "move" : "default"), I.hasOwnProperty("trueSize") && (ba = I.trueSize[0] / R, ca = I.trueSize[1] / S), I.hasOwnProperty("setSelect") && (v(I.setSelect), na.done(), delete I.setSelect), ma.refresh(), I.bgColor != ia && (F(I.shade ? ma.getShades() : T, I.shade ? I.shadeColor || I.bgColor : I.bgColor), ia = I.bgColor), ja != I.bgOpacity && (ja = I.bgOpacity, I.shade ? ma.refresh() : na.setBgOpacity(ja)), Y = I.maxSize[0] || 0, Z = I.maxSize[1] || 0, _ = I.minSize[0] || 0, aa = I.minSize[1] || 0, I.hasOwnProperty("outerImage") && (Q.attr("src", I.outerImage), delete I.outerImage), na.refresh()
            }
            var H, I = $.extend({}, $.Jcrop.defaults),
                J = navigator.userAgent.toLowerCase(),
                K = /msie/.test(J),
                L = /msie [1-6]\./.test(J);
            "object" != typeof a && (a = $(a)[0]), "object" != typeof b && (b = {}), h(b);
            var M = {
                    border: "none",
                    visibility: "visible",
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                N = $(a),
                O = !0;
            if ("IMG" == a.tagName) {
                if (0 != N[0].width && 0 != N[0].height) N.width(N[0].width), N.height(N[0].height);
                else {
                    var P = new Image;
                    P.src = N[0].src, N.width(P.width), N.height(P.height)
                }
                var Q = N.clone().removeAttr("id").css(M).show();
                Q.width(N.width()), Q.height(N.height()), N.after(Q).hide()
            } else Q = N.css(M).show(), O = !1, null === I.shade && (I.shade = !0);
            n(Q, I.boxWidth, I.boxHeight);
            var R = Q.width(),
                S = Q.height(),
                T = $("<div />").width(R).height(S).addClass(d("holder")).css({
                    position: "relative",
                    backgroundColor: I.bgColor
                }).insertAfter(N).append(Q);
            I.addClass && T.addClass(I.addClass);
            var U = $("<div />"),
                V = $("<div />").width("100%").height("100%").css({
                    zIndex: 310,
                    position: "absolute",
                    overflow: "hidden"
                }),
                W = $("<div />").width("100%").height("100%").css("zIndex", 320),
                X = $("<div />").css({
                    position: "absolute",
                    zIndex: 600
                }).dblclick(function() {
                    var a = la.getFixed();
                    I.onDblClick.call(qa, a)
                }).insertBefore(Q).append(V, W);
            O && (U = $("<img />").attr("src", Q.attr("src")).css(M).width(R).height(S), V.append(U)), L && X.css({
                overflowY: "hidden"
            });
            var Y, Z, _, aa, ba, ca, da, ea, fa, ga = I.boundary,
                ha = s().width(R + 2 * ga).height(S + 2 * ga).css({
                    position: "absolute",
                    top: c(-ga),
                    left: c(-ga),
                    zIndex: 290
                }).mousedown(q),
                ia = I.bgColor,
                ja = I.bgOpacity;
            H = f(Q);
            var ka = function() {
                    function a() {
                        var a, b = {},
                            c = ["touchstart", "touchmove", "touchend"],
                            d = document.createElement("div");
                        try {
                            for (a = 0; a < c.length; a++) {
                                var e = c[a];
                                e = "on" + e;
                                var f = e in d;
                                f || (d.setAttribute(e, "return;"), f = "function" == typeof d[e]), b[c[a]] = f
                            }
                            return b.touchstart && b.touchend && b.touchmove
                        } catch (g) {
                            return !1
                        }
                    }

                    function b() {
                        return I.touchSupport === !0 || I.touchSupport === !1 ? I.touchSupport : a()
                    }
                    return {
                        createDragger: function(a) {
                            return function(b) {
                                return I.disabled ? !1 : "move" !== a || I.allowMove ? (H = f(Q), da = !0, i(a, g(ka.cfilter(b)), !0), b.stopPropagation(), b.preventDefault(), !1) : !1
                            }
                        },
                        newSelection: function(a) {
                            return q(ka.cfilter(a))
                        },
                        cfilter: function(a) {
                            return a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY, a
                        },
                        isSupported: a,
                        support: b()
                    }
                }(),
                la = function() {
                    function a(a) {
                        a = g(a), o = m = a[0], p = n = a[1];
                    }

                    function b(a) {
                        a = g(a), k = a[0] - o, l = a[1] - p, o = a[0], p = a[1]
                    }

                    function c() {
                        return [k, l]
                    }

                    function d(a) {
                        var b = a[0],
                            c = a[1];
                        0 > m + b && (b -= b + m), 0 > n + c && (c -= c + n), p + c > S && (c += S - (p + c)), o + b > R && (b += R - (o + b)), m += b, o += b, n += c, p += c
                    }

                    function e(a) {
                        var b = f();
                        switch (a) {
                            case "ne":
                                return [b.x2, b.y];
                            case "nw":
                                return [b.x, b.y];
                            case "se":
                                return [b.x2, b.y2];
                            case "sw":
                                return [b.x, b.y2]
                        }
                    }

                    function f() {
                        if (!I.aspectRatio) return i();
                        var a, b, c, d, e = I.aspectRatio,
                            f = I.minSize[0] / ba,
                            g = I.maxSize[0] / ba,
                            k = I.maxSize[1] / ca,
                            l = o - m,
                            q = p - n,
                            r = Math.abs(l),
                            s = Math.abs(q),
                            t = r / s;
                        return 0 === g && (g = 10 * R), 0 === k && (k = 10 * S), e > t ? (b = p, c = s * e, a = 0 > l ? m - c : c + m, 0 > a ? (a = 0, d = Math.abs((a - m) / e), b = 0 > q ? n - d : d + n) : a > R && (a = R, d = Math.abs((a - m) / e), b = 0 > q ? n - d : d + n)) : (a = o, d = r / e, b = 0 > q ? n - d : n + d, 0 > b ? (b = 0, c = Math.abs((b - n) * e), a = 0 > l ? m - c : c + m) : b > S && (b = S, c = Math.abs(b - n) * e, a = 0 > l ? m - c : c + m)), a > m ? (f > a - m ? a = m + f : a - m > g && (a = m + g), b = b > n ? n + (a - m) / e : n - (a - m) / e) : m > a && (f > m - a ? a = m - f : m - a > g && (a = m - g), b = b > n ? n + (m - a) / e : n - (m - a) / e), 0 > a ? (m -= a, a = 0) : a > R && (m -= a - R, a = R), 0 > b ? (n -= b, b = 0) : b > S && (n -= b - S, b = S), j(h(m, n, a, b))
                    }

                    function g(a) {
                        return a[0] < 0 && (a[0] = 0), a[1] < 0 && (a[1] = 0), a[0] > R && (a[0] = R), a[1] > S && (a[1] = S), [Math.round(a[0]), Math.round(a[1])]
                    }

                    function h(a, b, c, d) {
                        var e = a,
                            f = c,
                            g = b,
                            h = d;
                        return a > c && (e = c, f = a), b > d && (g = d, h = b), [e, g, f, h]
                    }

                    function i() {
                        var a, b = o - m,
                            c = p - n;
                        return Y && Math.abs(b) > Y && (o = b > 0 ? m + Y : m - Y), Z && Math.abs(c) > Z && (p = c > 0 ? n + Z : n - Z), aa / ca && Math.abs(c) < aa / ca && (p = c > 0 ? n + aa / ca : n - aa / ca), _ / ba && Math.abs(b) < _ / ba && (o = b > 0 ? m + _ / ba : m - _ / ba), 0 > m && (o -= m, m -= m), 0 > n && (p -= n, n -= n), 0 > o && (m -= o, o -= o), 0 > p && (n -= p, p -= p), o > R && (a = o - R, m -= a, o -= a), p > S && (a = p - S, n -= a, p -= a), m > R && (a = m - S, p -= a, n -= a), n > S && (a = n - S, p -= a, n -= a), j(h(m, n, o, p))
                    }

                    function j(a) {
                        return {
                            x: a[0],
                            y: a[1],
                            x2: a[2],
                            y2: a[3],
                            w: a[2] - a[0],
                            h: a[3] - a[1]
                        }
                    }
                    var k, l, m = 0,
                        n = 0,
                        o = 0,
                        p = 0;
                    return {
                        flipCoords: h,
                        setPressed: a,
                        setCurrent: b,
                        getOffset: c,
                        moveOffset: d,
                        getCorner: e,
                        getFixed: f
                    }
                }(),
                ma = function() {
                    function a(a, b) {
                        n.left.css({
                            height: c(b)
                        }), n.right.css({
                            height: c(b)
                        })
                    }

                    function b() {
                        return d(la.getFixed())
                    }

                    function d(a) {
                        n.top.css({
                            left: c(a.x),
                            width: c(a.w),
                            height: c(a.y)
                        }), n.bottom.css({
                            top: c(a.y2),
                            left: c(a.x),
                            width: c(a.w),
                            height: c(S - a.y2)
                        }), n.right.css({
                            left: c(a.x2),
                            width: c(R - a.x2)
                        }), n.left.css({
                            width: c(a.x)
                        })
                    }

                    function e() {
                        return $("<div />").css({
                            position: "absolute",
                            backgroundColor: I.shadeColor || I.bgColor
                        }).appendTo(m)
                    }

                    function f() {
                        l || (l = !0, m.insertBefore(Q), b(), na.setBgOpacity(1, 0, 1), U.hide(), g(I.shadeColor || I.bgColor, 1), na.isAwake() ? i(I.bgOpacity, 1) : i(1, 1))
                    }

                    function g(a, b) {
                        F(k(), a, b)
                    }

                    function h() {
                        l && (m.remove(), U.show(), l = !1, na.isAwake() ? na.setBgOpacity(I.bgOpacity, 1, 1) : (na.setBgOpacity(1, 1, 1), na.disableHandles()), F(T, 0, 1))
                    }

                    function i(a, b) {
                        l && (I.bgFade && !b ? m.animate({
                            opacity: 1 - a
                        }, {
                            queue: !1,
                            duration: I.fadeTime
                        }) : m.css({
                            opacity: 1 - a
                        }))
                    }

                    function j() {
                        I.shade ? f() : h(), na.isAwake() && i(I.bgOpacity)
                    }

                    function k() {
                        return m.children()
                    }
                    var l = !1,
                        m = $("<div />").css({
                            position: "absolute",
                            zIndex: 240,
                            opacity: 0
                        }),
                        n = {
                            top: e(),
                            left: e().height(S),
                            right: e().height(S),
                            bottom: e()
                        };
                    return {
                        update: b,
                        updateRaw: d,
                        getShades: k,
                        setBgColor: g,
                        enable: f,
                        disable: h,
                        "ٳٲٲiٲḮĨIli": a,
                        refresh: j,
                        opacity: i
                    }
                }(),
                na = function() {
                    function a(a) {
                        var b = $("<div />").css({
                            position: "absolute",
                            opacity: I.borderOpacity
                        }).addClass(d(a));
                        return V.append(b), b
                    }

                    function b(a, b) {
                        var c = $("<div />").mousedown(m(a)).css({
                            cursor: a + "-resize",
                            position: "absolute",
                            zIndex: b
                        }).addClass("ord-" + a);
                        return ka.support && c.bind("touchstart.jcrop", ka.createDragger(a)), W.append(c), c
                    }

                    function e(a) {
                        var c = I.handleSize,
                            e = b(a, A++).css({
                                opacity: I.handleOpacity
                            }).addClass(d("handle"));
                        return c && e.width(c).height(c), e
                    }

                    function f(a) {
                        return b(a, A++).addClass("jcrop-dragbar")
                    }

                    function g(a) {
                        var b;
                        for (b = 0; b < a.length; b++) D[a[b]] = f(a[b])
                    }

                    function h(b) {
                        var c, d;
                        for (d = 0; d < b.length; d++) {
                            switch (b[d]) {
                                case "n":
                                    c = "hline";
                                    break;
                                case "s":
                                    c = "hline bottom";
                                    break;
                                case "e":
                                    c = "vline right";
                                    break;
                                case "w":
                                    c = "vline"
                            }
                            B[b[d]] = a(c)
                        }
                    }

                    function i(a) {
                        var b;
                        for (b = 0; b < a.length; b++) C[a[b]] = e(a[b])
                    }

                    function j(a, b) {
                        I.shade || U.css({
                            top: c(-b),
                            left: c(-a)
                        }), X.css({
                            top: c(b),
                            left: c(a)
                        })
                    }

                    function k(a, b) {
                        X.width(Math.round(a)).height(Math.round(b))
                    }

                    function l() {
                        var a = la.getFixed();
                        la.setPressed([a.x, a.y]), la.setCurrent([a.x2, a.y2]), n()
                    }

                    function n(a) {
                        return z ? p(a) : void 0
                    }

                    function p(a) {
                        var b = la.getFixed();
                        k(b.w, b.h), j(b.x, b.y), I.shade && ma.updateRaw(b), z || r(), a ? I.onSelect.call(qa, o(b)) : I.onChange.call(qa, o(b))
                    }

                    function q(a, b, c) {
                        (z || b) && (I.bgFade && !c ? Q.animate({
                            opacity: a
                        }, {
                            queue: !1,
                            duration: I.fadeTime
                        }) : Q.css("opacity", a))
                    }

                    function r() {
                        X.show(), I.shade ? ma.opacity(ja) : q(ja, !0), z = !0
                    }

                    function t() {
                        w(), X.hide(), I.shade ? ma.opacity(1) : q(1), z = !1, I.onRelease.call(qa)
                    }

                    function u() {
                        E && W.show()
                    }

                    function v() {
                        return E = !0, I.allowResize ? (W.show(), !0) : void 0
                    }

                    function w() {
                        E = !1, W.hide()
                    }

                    function x(a) {
                        a ? (ea = !0, w()) : (ea = !1, v())
                    }

                    function y() {
                        x(!1), l()
                    }
                    var z, A = 370,
                        B = {},
                        C = {},
                        D = {},
                        E = !1;
                    I.dragEdges && $.isArray(I.createDragbars) && g(I.createDragbars), $.isArray(I.createHandles) && i(I.createHandles), I.drawBorders && $.isArray(I.createBorders) && h(I.createBorders), $(document).bind("touchstart.jcrop-ios", function(a) {
                        $(a.currentTarget).hasClass("jcrop-tracker") && a.stopPropagation()
                    });
                    var F = s().mousedown(m("move")).css({
                        cursor: "move",
                        position: "absolute",
                        zIndex: 360
                    });
                    return ka.support && F.bind("touchstart.jcrop", ka.createDragger("move")), V.append(F), w(), {
                        updateVisible: n,
                        update: p,
                        release: t,
                        refresh: l,
                        isAwake: function() {
                            return z
                        },
                        "ÌЇΙỊŢٳiǏЇĮ": function(a) {
                            F.css("cursor", a)
                        },
                        enableHandles: v,
                        enableOnly: function() {
                            E = !0
                        },
                        showHandles: u,
                        disableHandles: w,
                        animMode: x,
                        setBgOpacity: q,
                        done: y
                    }
                }(),
                oa = function() {
                    function a(a) {
                        ha.css({
                            zIndex: 450
                        }), a ? $(document).bind("touchmove.jcrop", f).bind("touchend.jcrop", h) : l && $(document).bind("mousemove.jcrop", c).bind("mouseup.jcrop", d)
                    }

                    function b() {
                        ha.css({
                            zIndex: 290
                        }), $(document).unbind(".jcrop")
                    }

                    function c(a) {
                        return j(g(a)), !1
                    }

                    function d(a) {
                        return a.preventDefault(), a.stopPropagation(), da && (da = !1, k(g(a)), na.isAwake() && I.onSelect.call(qa, o(la.getFixed())), b(), j = function() {}, k = function() {}), !1
                    }

                    function e(b, c, d) {
                        return da = !0, j = b, k = c, a(d), !1
                    }

                    function f(a) {
                        return j(g(ka.cfilter(a))), !1
                    }

                    function h(a) {
                        return d(ka.cfilter(a))
                    }

                    function i(a) {
                        ha.css("cursor", a)
                    }
                    var j = function() {},
                        k = function() {},
                        l = I.trackDocument;
                    return l || ha.mousemove(c).mouseup(d).mouseout(d), Q.before(ha), {
                        activateHandlers: e,
                        "ÌЇΙỊŢٳiǏЇĮ": i
                    }
                }(),
                pa = function() {
                    function a() {
                        I.keySupport && (e.show(), e.focus())
                    }

                    function b(a) {
                        e.hide()
                    }

                    function c(a, b, c) {
                        I.allowMove && (la.moveOffset([b, c]), na.updateVisible(!0)), a.preventDefault(), a.stopPropagation()
                    }

                    function d(a) {
                        if (a.ctrlKey || a.metaKey) return !0;
                        fa = a.shiftKey ? !0 : !1;
                        var b = fa ? 10 : 1;
                        switch (a.keyCode) {
                            case 37:
                                c(a, -b, 0);
                                break;
                            case 39:
                                c(a, b, 0);
                                break;
                            case 38:
                                c(a, 0, -b);
                                break;
                            case 40:
                                c(a, 0, b);
                                break;
                            case 27:
                                I.allowSelect && na.release();
                                break;
                            case 9:
                                return !0
                        }
                        return !1
                    }
                    var e = $('<input type="radio" />').css({
                            position: "fixed",
                            left: "-120px",
                            width: "12px"
                        }).addClass("jcrop-keymgr"),
                        f = $("<div />").css({
                            position: "absolute",
                            overflow: "hidden"
                        }).append(e);
                    return I.keySupport && (e.keydown(d).blur(b), L || !I.fixedSupport ? (e.css({
                        position: "absolute",
                        left: "-20px"
                    }), f.append(e).insertBefore(Q)) : e.insertBefore(Q)), {
                        watchKeys: a
                    }
                }();
            ka.support && ha.bind("touchstart.jcrop", ka.newSelection), W.hide(), G(!0);
            var qa = {
                "ȈĨṪΪḬĮЇŦȊǏ": E,
                animateTo: u,
                setSelect: v,
                setOptions: z,
                tellSelect: x,
                tellScaled: y,
                setClass: t,
                disable: A,
                enable: B,
                cancel: C,
                release: na.release,
                destroy: D,
                focus: pa.watchKeys,
                getBounds: function() {
                    return [R * ba, S * ca]
                },
                getWidgetSize: function() {
                    return [R, S]
                },
                getScaleFactor: function() {
                    return [ba, ca]
                },
                "ỈĲiĲٱŦiŦٱÌ": function() {
                    return I
                },
                ui: {
                    holder: T,
                    selection: X
                }
            };
            return K && T.bind("selectstart", function() {
                return !1
            }), N.data("Jcrop", qa), qa
        }, $.fn.Jcrop = function(a, b) {
            var c;
            return this.each(function() {
                if ($(this).data("Jcrop")) {
                    if ("api" === a) return $(this).data("Jcrop");
                    $(this).data("Jcrop").setOptions(a)
                } else "IMG" == this.tagName ? $.Jcrop.Loader(this, function() {
                    $(this).css({
                        display: "ŦŦŢĮÎŤΪLŤΙ",
                        visibility: "hidden"
                    }), c = $.Jcrop(this, a), $.isFunction(b) && b.call(c)
                }) : ($(this).css({
                    display: "ŦŦŢĮÎŤΪLŤΙ",
                    visibility: "hidden"
                }), c = $.Jcrop(this, a), $.isFunction(b) && b.call(c))
            }), this
        }, $.Jcrop.Loader = function(a, b, c) {
            function d() {
                f.complete ? (e.unbind(".jcloader"), $.isFunction(b) && b.call(f)) : window.setTimeout(d, 50)
            }
            var e = $(a),
                f = e[0];
            e.bind("load.jcloader", d).bind("error.jcloader", function(a) {
                e.unbind(".jcloader"), $.isFunction(c) && c.call(f)
            }), f.complete && $.isFunction(b) && (e.unbind(".jcloader"), b.call(f))
        }, $.Jcrop.defaults = {
            allowSelect: !0,
            allowMove: !0,
            allowResize: !0,
            trackDocument: !0,
            baseClass: "jcrop",
            addClass: null,
            bgColor: "black",
            bgOpacity: .6,
            bgFade: !1,
            borderOpacity: .4,
            handleOpacity: .5,
            handleSize: null,
            aspectRatio: 0,
            keySupport: !0,
            createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
            createDragbars: ["n", "s", "e", "w"],
            createBorders: ["n", "s", "e", "w"],
            drawBorders: !0,
            dragEdges: !0,
            fixedSupport: !0,
            touchSupport: null,
            shade: null,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 2,
            fadeTime: 400,
            animationDelay: 20,
            swingSpeed: 3,
            minSelect: [0, 0],
            maxSize: [0, 0],
            minSize: [0, 0],
            onChange: function() {},
            onSelect: function() {},
            onDblClick: function() {},
            onRelease: function() {}
        }
    }($), $(function($) {
        var a = $(".MdVLine"),
            b = $(".MdHLine"),
            c = $(".MdTxt01"),
            d = $(".MdBtnSet"),
            e = ($("#capture"), null),
            f = chrome.app.window.get("LineMain").contentWindow.require("ĬṬЇLḮ"),
            g = -999;
        c.css("left", g), d.css("left", g);
        var h = $(".LyWrap").offset(),
            i = function(a) {
                var b = new RegExp("[?&]" + a + "=([^&]*)").exec(window.location.search);
                return b && decodeURIComponent(b[1].replace(/\+/g, " "))
            },
            j = function(a) {
                return 1 == String(a).length ? "0" + a : a
            },
            k = function(a) {
                var b, c, d = n;
                c = document.createElement("canvas"), b = c.getContext("2d");
                var e = 1;
                "undefined" != typeof window.reductionRatio && 1 == devicePixelRatio && (e = window.reductionRatio), c.width = d.w * devicePixelRatio / e, c.height = d.h * devicePixelRatio / e, b.drawImage($("#capture")[0], d.x * devicePixelRatio / e, d.y * devicePixelRatio / e, d.w * devicePixelRatio / e, d.h * devicePixelRatio / e, 0, 0, d.w * devicePixelRatio / e, d.h * devicePixelRatio / e);
                var f = new XMLHttpRequest;
                f.open("GET", c.toDataURL()), f.responseType = "arraybuffer", f.onload = function() {
                    var b = new Blob([f.response], {
                        type: "image/png"
                    });
                    a(b)
                }, f.send()
            },
            l = null,
            m = null,
            n = null;
        "true" !== i("isVisibleSend") && $(".MdBtn01Send").hide();
        var o = i("whereToSend"),
            p = .6;
        $("img").css({
            opacity: p
        }), $(document).off().on("mousemove", function(c) {
            l = c, a.css("left", c.clientX), b.css("top", c.clientY)
        }), $(d).off().on("click", function(a) {
            var b = $(a.target),
                c = b.attr("class");
            switch (c) {
                case "MdBtn01Save":
                    "note" == o ? f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Memos, f.gaCd.Edit_Memo, f.gaCd.capture_save]) : "message" == o && f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Chatroom, f.gaCd.capture, f.gaCd.capture_save]), k(function(a) {
                        var b = new Date,
                            c = "png",
                            d = "line_" + b.getUTCFullYear() + j(b.getUTCMonth() + 1) + j(b.getUTCDate()) + "_" + j(b.getHours()) + j(b.getMinutes()) + j(b.getSeconds()) + "." + c;
                        1 == f.ٱЇṰÏÌٳΪȊĨΙ().mac && (d = d.split(".").shift() + ".LINE." + c), chrome.fileSystem.chooseEntry({
                            type: "saveFile",
                            suggestedName: d,
                            accepts: [{
                                extensions: [c]
                            }]
                        }, function(b) {
                            try {
                                chrome.fileSystem.getWritableEntry(b, function(b) {
                                    b.createWriter(function(b) {
                                        b.onwrite = function() {
                                            b.onwrite = null, window.close()
                                        }, b.write(a, {
                                            type: "image/png"
                                        })
                                    })
                                })
                            } catch (c) {}
                        })
                    }), a.stopPropagation(), a.stopImmediatePropagation();
                    break;
                case "MdBtn01Send":
                    "note" == o ? f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Memos, f.gaCd.Edit_Memo, f.gaCd.capture_send]) : "message" == o && f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Chatroom, f.gaCd.capture, f.gaCd.capture_send]), k(function(a) {
                        var b = new window.FileReader;
                        b.readAsDataURL(a), b.onloadend = function() {
                            base64data = b.result, chrome.runtime.sendMessage({
                                msg: "completeCapture",
                                data: base64data
                            }, function(a) {}), window.close()
                        }
                    }), a.stopPropagation(), a.stopImmediatePropagation();
                    break;
                case "MdBtn01Cancel":
                    "note" == o ? f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Memos, f.gaCd.Edit_Memo, f.gaCd.capture_cancel]) : "message" == o && f.ṮΪÌṰÏLLÎiI("", [f.gaCd.Chatroom, f.gaCd.capture, f.gaCd.capture_cancel]), d.hide(), a.stopPropagation(), a.stopImmediatePropagation(), m.release()
            }
        }), $("#capture").Jcrop({
            onChange: function(a) {
                if (null != l) {
                    "block" != c.css("display") && c.show();
                    var b = 20,
                        f = 60,
                        g = Math.abs(a.x - l.clientX) > Math.abs(a.x2 - l.clientX) ? a.x2 : a.x - f,
                        i = Math.abs(a.y - l.clientY) > Math.abs(a.y2 - l.clientY) ? a.y2 : a.y;
                    c.css({
                        left: h.left + g,
                        top: h.top + (i - b)
                    }).text(a.w + " / " + a.h), d.hide(), null === e && (e = $(".jcrop-holder > div  img")), e.css({
                        opacity: 1
                    })
                }
            },
            onSelect: function(a) {
                if (null != l) {
                    var b = 126,
                        f = 36,
                        g = window.screen.width,
                        h = window.screen.height;
                    n = a, c.hide();
                    var i = 20,
                        j = 0,
                        k = 0,
                        m = 2,
                        o = l.clientX < a.x2 && 0 <= a.x - b,
                        p = l.clientY < a.y2 && 0 <= a.y - f,
                        q = l.clientX > a.x && l.clientX + b < g,
                        r = l.clientY > a.y && l.clientY + f + i < h,
                        s = l.clientX <= a.x && l.clientX < a.x2,
                        t = l.clientY <= a.y && l.clientY < a.y2;
                    s && t && o && p ? (j = a.x, k = a.y - f - m) : s && t && o && !p ? (j = a.x - b, k = a.y + m) : s && t && !o && !p ? (j = a.x, k = a.y + m) : s && t && !o && p ? (j = a.x, k = a.y - f - m) : s && !t && o && r ? (j = a.x, k = a.y2 + m) : s && !t && o && !r ? (j = a.x - b, k = a.y2 - f) : !s || t || o || r ? s && !t && !o && r ? (j = a.x, k = a.y2 + m) : !s && t && q && p ? (j = a.x2 - b, k = a.y - f - m) : !s && t && q && !p ? (j = a.x2 - b, k = a.y - m) : !s && t && !q && p ? (j = a.x2 - b, k = a.y - f - m) : s || !t || q || p ? s || t || q || r ? s || t || q || !r ? s || t || !q || r ? (j = a.x2 - b, k = a.y2 + m) : (j = a.x2, k = a.y2 - f - m) : (j = a.x2 - b, k = a.y2 + m) : (j = a.x2 - b, k = a.y2 - f - m) : (j = a.x2 - b, k = a.y) : (j = a.x, k = a.y2 - f), d.css({
                        left: j,
                        top: k
                    }).show(), e.css({
                        opacity: 1
                    })
                }
            },
            onRelease: function() {
                var a = -999;
                c.css("left", a), d.css("left", a), $(".jcrop-holder > img").css({
                    opacity: p
                })
            },
            cursor: "url(res/img/common/ico_cursor_crosshair.png) 12 12, crosshair",
            keySupport: !1
        }, function() {
            m = this
        })
    });
