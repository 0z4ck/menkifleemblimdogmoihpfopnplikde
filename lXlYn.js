importScripts("CoHhE.js");
var Iv = "",
    Jv, Hv = {
        "ŤٱΪ": function(a) {
            a && (av[on][nn] = JSON.parse(a))
        },
        pushLineConfig: function(a) {
            av[As] = a[As] ? a[As] : av[As], av.LEGY_ENCRYPT_KEY = a.LEGY_ENCRYPT_KEY || av.LEGY_ENCRYPT_KEY, av[so] = a[so] || av[so], av.B = a.B || av.B, av.A = a.A || av.A, av[ze] = a[ze] || av[ze], av[fi] = a[fi] || av[fi], av[on] = a[on] || av[on]
        },
        close: function() {
            self.close()
        },
        "ЇÌỈ": function(a, b, c) {
            c || (c = "");
            try {
                var d = lv.ŢȊȊÎÍǀÌṬĨỈ(av[so], b);
                Ja("ЇÌỈ" + c, d, a)
            } catch (e) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(e, "ЇÌỈ" + c)
            }
        },
        "ŢÌٲ": function(a, b, c, d) {
            d || (d = "");
            try {
                var e = lv.ḬÎÏÏṮȈЇÌlІ(av[so], b, c.oid);
                Ja("ŢÌٲ" + d, e, a)
            } catch (f) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(f, "ŢÌٲ" + d)
            }
        },
        "ΪÌṮ": function(a, b, c) {
            c || (c = "");
            try {
                var d = lv.ȊĨÏỈiÎІĲỊĨ(av[so], b);
                Ja("ΪÌṮ" + c, d, a)
            } catch (e) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(e, "ΪÌṮ" + c)
            }
        },
        "ṬḬỈ": function(a, b, c) {
            c || (c = "");
            try {
                var d = lv.iỈlٲŢṬЇٱŢȈ(av[so], b);
                Ja("ṬḬỈ" + c, d, a)
            } catch (e) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(e, "ṬḬỈ" + c)
            }
        },
        copyChatMessageContentT: function(a, b) {
            b || (b = "");
            try {
                var c = lv.ȊÌÌŢÌȈΙǀȈl(av[so]);
                Ja("copyChatMessageContentT" + b, c, a)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "copyChatMessageContentT" + b)
            }
        },
        "ΪǀṬ": function() {
            Jv && (null == Iv && (Iv = !1), Jv.abort())
        }
    };
onmessage = function(a) {
    if (a.data instanceof Object && a.data.hasOwnProperty("method") && a.data.hasOwnProperty("arguments")) {
        var b = Array.prototype.slice.call(a.data.arguments);
        Hv[a.data[xs]].apply(self, b)
    } else Ia(a.data)
};
var reply = function() {
    if (arguments[Cs] < 1) throw new TypeError("reply - not enough arguments");
    postMessage({
        method: arguments[0],
        arguments: Array.prototype.slice.call(arguments, 1)
    })
}