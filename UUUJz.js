importScripts("CoHhE.js");
var Hv = {
    pushPhaseInfo: function(a) {
        av.A = a
    },
    "ŤٱΪ": function(a) {
        av[on][nn] = JSON.parse(a)
    },
    pushLineConfig: function(a) {
        av[As] = a[As] ? a[As] : av[As], av.LEGY_ENCRYPT_KEY = a.LEGY_ENCRYPT_KEY || av.LEGY_ENCRYPT_KEY,
            av[so] = a[so] || av[so], av.B = a.B || av.B, av.A = a.A || av.A, av[ze] = a[ze] || av[ze], av[fi] = a[fi] || av[fi], av[on] = a[on] || av[on];
        var b = function(a) {
            reply("refreshTokenT", {
                token: a
            })
        };
        zv.ŢĲȊ().ŢŤȈŤỈǏiŦЇṰ(b)
    },
    requestAuthVerifyPolling: function(a, b) {
        try {
            var c = vv.ŢĲȊ().ІĨŦỈȊÍÍIÍΪ(a, b);
            c.output.ǏỊٱŦЇĬṬȈĲṰ().ٲIṬΙṰÎĮЇĲÎ(!1, function() {
                var a = c.output.ǏỊٱŦЇĬṬȈĲṰ().read(),
                    b = Ly.ṬǀḬṮȊĨlḬĨȈ(a);
                reply("requestAuthVerifyPolling", b)
            })
        } catch (d) {
            d instanceof DOMException ? reply("requestAuthVerifyPolling", "DOMException") : reply("requestAuthVerifyPolling", d)
        }
    },
    requestAuthVerifyWithE2EEPolling: function(a, b) {
        try {
            var c = vv.ŢĲȊ().ŦٲÌỈṪІȈЇٱI(a, b);
            c.output.ǏỊٱŦЇĬṬȈĲṰ().ٲIṬΙṰÎĮЇĲÎ(!1, function() {
                var a = c.output.ǏỊٱŦЇĬṬȈĲṰ().read(),
                    b = Ly.ṬǀḬṮȊĨlḬĨȈ(a);
                reply("requestAuthVerifyWithE2EEPolling", b)
            })
        } catch (d) {
            d instanceof DOMException ? reply("requestAuthVerifyWithE2EEPolling", "DOMException") : reply("requestAuthVerifyWithE2EEPolling", d)
        }
    },
    "ỈṪṰỊȈΪŢȊٱΪ": function() {
        reply("isRunningOperationPoller", !0)
    },
    "ΪٳḮ": function(a, b, c, d, e) {
        try {
            var f = zv.ŢĲȊ().ÌΪĬŦȈỈŤĮlÎ(av[so], e),
                g = f.ĮΪṮṪٳli(a, b, c, d);
            reply("ΪٳḮ", g)
        } catch (h) {
            h instanceof DOMException ? reply("errorOperationPolling", "DOMException") : reply("errorOperationPolling", h)
        }
    },
    refreshTokenT: function() {}
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