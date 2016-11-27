importScripts("CoHhE.js");
var Hv = {
    NOTE_BODY_REGEX: /<!--note_contents-->\s*(<div[^>]*[^>\"']*_note_title_area[^>]*>(.*)<\/div>\s*<div[^>]*[^>\"']*_note_contents_area[^>]*>(.*)<\/div>)\s*<!--end_note_contents-->/i,
    PRE_BODY_REGEX: /<div[^>]*[^>\"']*_note_contents[^>]*>\s*(<div[^>]*[^>\"']*_note_title_area[^>]*>(.*)<\/div>\s*<div[^>]*[^>\"']*_note_contents_area[^>]*>(.*)<\/div>)\s*<\/div>\s*<\/body>\s*<\/html>/i,
    PRE_BODY_REGEX2: /<div[^>]*[^>\"']*_note_contents[^>]*>\s*(<div[^>]*[^>\"']*_note_title_area[^>]*>(.*)<\/div>\s*<div[^>]*[^>\"']*_note_contents_area[^>]*>(.*)<\/div>)\s*<\/div>\s*<\/div>\s*<\/body>\s*<\/html>/i,
    zip: new JSZip,
    fileReaderByNote: new FileReader,
    "ŤٱΪ": function(a) {
        a && (av[on][nn] = JSON.parse(a))
    },
    pushLineConfig: function(a) {
        av[As] = a[As] ? a[As] : av[As], av.LEGY_ENCRYPT_KEY = a.LEGY_ENCRYPT_KEY || av.LEGY_ENCRYPT_KEY, av[so] = a[so] || av[so], av.B = a.B || av.B, av[Tj] = a[Tj] || av[Tj], av.A = a.A || av.A, av[ze] = a[ze] || av[ze], av[fi] = a[fi] || av[fi], av[on] = a[on] || av[on]
    },
    "LÎȈ": function(a, b, c) {
        var d = [],
            e = 0,
            f = function(b) {
                b && d.push(b), e++, e % 10 === 0 && (reply("LÎȈ" + a, {
                    callbackType: "receiving",
                    value: d
                }), d = [], b = null), e >= c[Cs] && reply("LÎȈ" + a, {
                    callbackType: "success",
                    value: d
                })
            };
        Hv.ŦṪṮ(0, c, b, f)
    },
    "ŦṪṮ": function(a, b, c, d) {
        a >= b[Cs] || Hv.ŦٲΙỊÌٱỈỈٳΪ(b[a][du], b[a].memoAttributes, function(e, f) {
            function g(a, b) {
                if (a) {
                    var c = a.replace(/[\r|\n]/g, "").match(Hv.NOTE_BODY_REGEX);
                    null == c && (c = a.replace(/[\r|\n]/g, "").match(Hv.PRE_BODY_REGEX), null == c && (c = a.replace(/[\r|\n]/g, "").match(Hv.PRE_BODY_REGEX2), null == c && (c = ["", "", ""])));
                    var e = c[2],
                        f = c[1];
                    b.title = e, b.contents = f, b.isUpdatedContents = !1, d(b), c = null
                } else d()
            }
            return e ? void(e && "application/zip" == e[Bt] ? Hv.ٲỊṪǏٱÌĬŦḬǀ(e, f, function(e) {
                g(e, f), Hv.ŦṪṮ(++a, b, c, d)
            }.bind(this)) : Hv.ŦlÏṰḮÎŦĲŤȈ(e, {}, function(e) {
                g(e, f), Hv.ŦṪṮ(++a, b, c, d)
            }.bind(this))) : (d(), void Hv.ŦṪṮ(++a, b, c, d))
        }, function() {
            d(), Hv.ŦṪṮ(++a, b, c, d)
        }, "blob", {
            mid: c,
            channelToken: av[Tj]
        })
    },
    "ŢḮІŦÏǏṰٱٱL": function(a, b) {
        return a ? a.replace(/<\!--([\s\S]*?)-->/g, " ").replace(/<(script|style|link)([\s\S]*?)(<\/script|style|link)>/gi, " ").replace(/<iframe[^>]+>/gi, " ").replace(/<([^>]+)>/gi, function(a) {
            return b && b.removeImage === !1 || (a = a.replace(/\ssrc=["']?([^>"']+)["']?[^>]/gi, function(a, b) {
                return b.search(/^data:image\/[^;]+;base64\,/) < 0 ? a.replace(b, "") : a
            })), a.replace(/\s(on[A-Za-z]+\s*?=\s*[^>|^\s]*)/g, "").replace(/href\s*=\s*["'](.*?)["']/gi, "").replace(/url\(([^)]+)\)/gi, "")
        }) : a
    },
    "ŦٲΙỊÌٱỈỈٳΪ": function(a, b, c, d, e, f) {
        Hv.ٳÍĲŦḮŤȊĮІl(a, Hv.ٱǀŢŦŦÎIÎṰΙ(f), e, function(a) {
            c(a, b)
        }, d)
    },
    "ٱǀŢŦŦÎIÎṰΙ": function(a) {
        return {
            "X-Line-Mid": a[mu],
            "X-Line-ChannelToken": a.channelToken,
            "x-lal": av[As],
            "X-Line-Application": av.D[av.A] + "	" + av.B + "	" + av[nr] + "	" + av.C
        }
    },
    "ٲỊṪǏٱÌĬŦḬǀ": function(a, b, c) {
        try {
            Hv.ỊȈٳŢḮÍIỊṪٳ(a, null, function(d) {
                if (!d) return c && c(), void(a = null);
                try {
                    Hv.zip.load(d), d = null;
                    var e = Hv.zip[Vt](b.fileName + ".html") || Hv.zip[Vt](b.fileName + ".memo") || Hv.zip[Vt](b.fileName + ".note");
                    e ? c(e.asText(), b) : c && c()
                } catch (f) {
                    c && c()
                }
                a = null
            })
        } catch (d) {
            c && c()
        }
    },
    "ỊȈٳŢḮÍIỊṪٳ": function(a, b, c) {
        var d = Hv.fileReaderByNote;
        d.onload = function() {
            a = null, c(d[is], b)
        }, d.onerror = function() {
            c(null, b)
        }, d.readAsArrayBuffer(a)
    },
    "ŦlÏṰḮÎŦĲŤȈ": function(a, b, c) {
        var d = new FileReader;
        d.onload = function() {
            c(d[is], b)
        }, d.onerror = function(a) {
            c("", b)
        }, d.readAsText(a)
    },
    "ٳÍĲŦḮŤȊĮІl": function(a, b, c, d, e) {
        var f = new XMLHttpRequest;
        if (f.open("GET", a, !0), f[lk] = c, f[br] = 1e4, b)
            for (var g in b) f.setRequestHeader(g, b[g]);
        f.onload = function() {
            if (4 == f.readyState && 200 == f[es]) {
                var a = f.response;
                d(a)
            } else e()
        }, f.onerror = e, f.ontimeout = function() {
            f.abort(), e()
        }, f.send()
    }
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