importScripts("CoHhE.js");
var Kv = {},
    Hv = {
        "ŤٱΪ": function(a) {
            a && (av[on][nn] = JSON.parse(a))
        },
        pushLineConfig: function(a) {
            av[As] = a[As] ? a[As] : av[As], av.LEGY_ENCRYPT_KEY = a.LEGY_ENCRYPT_KEY || av.LEGY_ENCRYPT_KEY, av[so] = a[so] || av[so], av.B = a.B || av.B, av.A = a.A || av.A, av[ze] = a[ze] || av[ze], av[fi] = a[fi] || av[fi], av[on] = a[on] || av[on]
        },
        stopGetContentT: function(a) {
            Kv["getContentT" + a] && Kv["getContentT" + a].abort()
        },
        getContentT: function(a, b, c) {
            var d = lv.ŦḮÎȊiṪŢǀĲŦ(av[so], b),
                e = "getContentT" + a;
            Kv[e] = d.ṬǀٱٲLІṬÍŦṪ(), Lv(d, e, Kv[e], c)
        },
        getRTSInfoT: function(a, b, c) {
            var d = lv.ỈḬІḬǀІٱÏŦٲ(av[so]),
                e = "getRTSInfoT" + a;
            Kv[e] = d.ṬǀٱٲLІṬÍŦṪ(), Lv(d, e, Kv[e], b, c)
        },
        getOBSInfoT: function(a, b, c) {
            var d = lv.ЇṮŤŤĬٳŦŦṬŤ(av[so]),
                e = "getOBSInfoT" + a;
            Kv[e] = d.ṬǀٱٲLІṬÍŦṪ(), Lv(d, e, Kv[e], b, c)
        }
    },
    Lv = function(a, b, c, d, e) {
        var c = a.ṬǀٱٲLІṬÍŦṪ();
        for (var f in a.header) c.setRequestHeader(f, a.header[f]);
        c[lk] = d, c[br] = av.DOWNLOAD_TIMEOUT_INTERVAL, c.onload = function() {
            4 == c.readyState && 200 == c[es] ? reply(b, {
                callbackType: "success",
                value: c.response
            }) : reply(b, {
                callbackType: "error",
                statusCode: c[es]
            })
        };
        var g = _.throttle(function(a) {
            a.lengthComputable && reply(b, {
                callbackType: "progress",
                value: a.loaded / a.total * 100
            })
        }, 500);
        c.onprogress = g, c.onabort = function() {
            reply(b, {
                callbackType: "abort"
            })
        }, c.onerror = function() {
            reply(b, {
                callbackType: "error"
            })
        }, c.ontimeout = function() {
            c.onerror()
        }, "undefined" != typeof e ? c.send(e) : c.send()
    };
onmessage = function(a) {
    if (a.data instanceof Object && a.data.hasOwnProperty("method") && a.data.hasOwnProperty("arguments")) {
        var b = Array.prototype.slice.call(a.data.arguments);
        Hv[a.data[xs]].apply(self, b)
    }
};
var reply = function() {
    if (arguments[Cs] < 1) throw new TypeError("reply - not enough arguments");
    postMessage({
        method: arguments[0],
        arguments: Array.prototype.slice.call(arguments, 1)
    })
}