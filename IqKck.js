importScripts("CoHhE.js");
var handleException = function(a, b) {
        b[Zt] === Oy.ILLEGAL_ARGUMENT ? reply(a, b) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, a)
    },
    Bv = "create.json",
    Cv = "update.json",
    Dv = "delete.json",
    Ev = "fetch.json",
    Fv = "sync.json",
    Gv = "obs/delete.json",
    Hv = {
        authToken: null,
        "ŤٱΪ": function(a) {
            av[on][nn] = JSON.parse(a)
        },
        pushLineConfig: function(a) {
            av[As] = a[As] ? a[As] : av[As], av.LEGY_ENCRYPT_KEY = a.LEGY_ENCRYPT_KEY || av.LEGY_ENCRYPT_KEY, av[so] = a[so] || av[so], av.B = a.B || av.B, av.A = a.A || av.A, av[ze] = a[ze] || av[ze], av[fi] = a[fi] || av[fi], av[on] = a[on] || av[on];
            var b = function(a) {
                reply("refreshTokenT", {
                    token: a
                })
            };
            zv.ŢĲȊ().ŢŤȈŤỈǏiŦЇṰ(b), xv.ŢĲȊ().ŢŤȈŤỈǏiŦЇṰ(b), yv.ŢĲȊ().ŢŤȈŤỈǏiŦЇṰ(b)
        },
        "ΙȊÏLĨÎȈٳĬṬ": function(a, b, c, d, e, f, g, h) {
            try {
                var i = vv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ٲỊٱiÏÌŤ(new gB({
                    type: a,
                    identityProvider: b,
                    identifier: c,
                    password: d,
                    keepLoggedIn: !1,
                    accessLocation: "",
                    systemName: av[El],
                    certificate: f,
                    verifier: e,
                    secret: g,
                    e2eeVersion: h
                }));
                i[Rp] && (av[so] = i[Rp]), reply("ΙȊÏLĨÎȈٳĬṬ", i)
            } catch (j) {
                j[Zt] ? reply("ΙȊÏLĨÎȈٳĬṬ", {
                    code: j[Zt],
                    reason: j[ks]
                }) : reply("ΙȊÏLĨÎȈٳĬṬ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ÎȊΪỈĮÌḮḬІĨ": function(a, b) {
            try {
                var c = vv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ЇΪŤĮІLÍ(a, b);
                c[Rp] && (av[so] = c[Rp]), reply("ÎȊΪỈĮÌḮḬІĨ", c)
            } catch (d) {
                d[Zt] ? reply("ÎȊΪỈĮÌḮḬІĨ", {
                    code: d[Zt],
                    reason: d[ks]
                }) : reply("ÎȊΪỈĮÌḮḬІĨ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ǀǏĲІṮȈÌÌІÌ": function(a, b, c) {
            try {
                var d = vv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ǀḮḮÍЇٳІ(a, b, c);
                reply("ǀǏĲІṮȈÌÌІÌ", d)
            } catch (e) {
                "undefined" != typeof e[Zt] ? reply("ǀǏĲІṮȈÌÌІÌ", {
                    code: e[Zt],
                    reason: e[ks]
                }) : reply("ǀǏĲІṮȈÌÌІÌ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ĲÏΪŦiÎỊٳṪŦ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ÌṪΪŦÍỊḬ(a, b, c);
                reply("ĲÏΪŦiÎỊٳṪŦ", d)
            } catch (e) {
                e[Zt] ? reply("ĲÏΪŦiÎỊٳṪŦ", {
                    code: e[Zt],
                    reason: e[ks]
                }) : reply("ĲÏΪŦiÎỊٳṪŦ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ÎlΪٱÏĬĲǀlĬ": function(a) {
            try {
                var b = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ٱÍiΪÍÏΙ(a);
                b[Rp] && (av[so] = b[Rp]), reply("ÎlΪٱÏĬĲǀlĬ", b)
            } catch (c) {
                c[Zt] ? reply("ÎlΪٱÏĬĲǀlĬ", {
                    code: c[Zt],
                    reason: c[ks]
                }) : reply("ÎlΪٱÏĬĲǀlĬ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ІٲLḮЇĨỊÎΙȈ": function(a) {
            try {
                var b = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().IȊLǏŤĬǏ(a);
                reply("ІٲLḮЇĨỊÎΙȈ", b)
            } catch (c) {
                c[Zt] ? reply("ІٲLḮЇĨỊÎΙȈ", {
                    code: c[Zt],
                    reason: c[ks]
                }) : reply("ІٲLḮЇĨỊÎΙȈ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ÍΙŦΙŤŤٱΙḮЇ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ǀǏḬIٲٱŢ(a, b);
                reply("ÍΙŦΙŤŤٱΙḮЇ", c)
            } catch (d) {
                d[Zt] ? reply("ÍΙŦΙŤŤٱΙḮЇ", {
                    code: d[Zt],
                    reason: d[ks]
                }) : reply("ÍΙŦΙŤŤٱΙḮЇ", {
                    code: "ΪlḬṰÏٱṮІÏl"
                })
            }
        },
        "ĬĲٲٱǏḬĬȊŤĨ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ĮỊÍIٱỈi(a, b, c);
                reply("ĬĲٲٱǏḬĬȊŤĨ", d)
            } catch (e) {
                handleException("ĬĲٲٱǏḬĬȊŤĨ", e)
            }
        },
        "iЇĮȈlΙIỈٱI": function(a, b) {
            try {
                var c = new Qz(a.message),
                    d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ÏІІǏLỊṬ(a.localId, c);
                reply("iЇĮȈlΙIỈٱI" + b, a.localId, d)
            } catch (e) {
                e instanceof DOMException ? reply("iЇĮȈlΙIỈٱI" + b, "DOMException") : reply("iЇĮȈlΙIỈٱI" + b, Av.serialize(e))
            }
        },
        "ŤŦṮỈṬٱÎiIٲ": function(a, b) {
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĬЇٲІỊΪĨ(0, a, b), reply("ŤŦṮỈṬٱÎiIٲ", null)
            } catch (c) {
                try {
                    zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĬЇٲІỊΪĨ(0, a, b), reply("ŤŦṮỈṬٱÎiIٲ", null)
                } catch (c) {
                    reply("ŤŦṮỈṬٱÎiIٲ", null)
                }
            }
        },
        "ṬĮḮlŤĨĨḬǀl": function(a, b, c) {
            c || (c = "");
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ḮٱÍȈlḬṪ(0, a, b), reply("ṬĮḮlŤĨĨḬǀl" + c, null)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ṬĮḮlŤĨĨḬǀl" + c)
            }
        },
        "ÌǀŢỈḬΪilŦḮ": function(a) {
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ḬṰỈȈÏĨL(0, a), reply("ÌǀŢỈḬΪilŦḮ", null)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ÌǀŢỈḬΪilŦḮ")
            }
        },
        "ÎÏŢṰĲΙÌŦṪḬ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṮȈḬĨĬŦǏ(0, a);
                reply("ÎÏŢṰĲΙÌŦṪḬ", b)
            } catch (c) {
                c[Zt] == Oy.INVALID_LENGTH || c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_A_MEMBER ? reply("ÎÏŢṰĲΙÌŦṪḬ", c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ÎÏŢṰĲΙÌŦṪḬ")
            }
        },
        "iŦḮȊȊІṬŦÏΙ": function(a, b) {
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŢȈlĨĬŦl(0, a, b), reply("iŦḮȊȊІṬŦÏΙ", null)
            } catch (c) {
                c[Zt] == Oy.INVALID_LENGTH || c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_A_MEMBER ? reply("iŦḮȊȊІṬŦÏΙ", c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "iŦḮȊȊІṬŦÏΙ")
            }
        },
        "ΙĮÌٳІĨΙٱṪL": function(a, b) {
            b || (b = "");
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0).ȊṰȊÎÍŦI(a, function(a) {
                    a instanceof gA ? reply("ΙĮÌٳІĨΙٱṪL" + b, a) : a[Zt] == Oy.INVALID_MID || a[Zt] == Oy.NOT_A_MEMBER ? reply("ΙĮÌٳІĨΙٱṪL" + b, a) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(a, "ΙĮÌٳІĨΙٱṪL" + b)
                })
            } catch (c) {
                c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_A_MEMBER ? reply("ΙĮÌٳІĨΙٱṪL" + b, c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ΙĮÌٳІĨΙٱṪL" + b)
            }
        },
        "ІЇٲٲṪŤlȊĮĮ": function(a, b) {
            b || (b = "");
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0).ΪĬḬỈÍĬĮ(a, function(a) {
                    a instanceof Array ? reply("ІЇٲٲṪŤlȊĮĮ" + b, a) : a[Zt] == Oy.INVALID_MID || a[Zt] == Oy.NOT_A_MEMBER ? reply("ІЇٲٲṪŤlȊĮĮ" + b, a) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(a, "ΙĮÌٳІĨΙٱṪL" + b)
                })
            } catch (c) {
                c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_A_MEMBER ? reply("ІЇٲٲṪŤlȊĮĮ" + b, c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ІЇٲٲṪŤlȊĮĮ" + b)
            }
        },
        "LĮṬŦÏŢḮṰŦٲ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ٳǀŦÌiIÏ(0, a, b);
                reply("LĮṬŦÏŢḮṰŦٲ", c)
            } catch (d) {
                d[Zt] == Oy.EXCESSIVE_ACCESS ? reply("LĮṬŦÏŢḮṰŦٲ", d) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "LĮṬŦÏŢḮṰŦٲ")
            }
        },
        "ĲĲÏŤỈĬĬLṬÏ": function(a, b) {
            b || (b = "");
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0).ÌṬÍΙÌÍĮ(a, function(a) {
                    a instanceof Array ? reply("ĲĲÏŤỈĬĬLṬÏ" + b, a) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(a, "ĲĲÏŤỈĬĬLṬÏ" + b)
                })
            } catch (c) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ĲĲÏŤỈĬĬLṬÏ" + b)
            }
        },
        "LŢŢŦٱÌΙІÏٲ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ٳṰΙḮΪٱṬ(0, a);
                reply("LŢŢŦٱÌΙІÏٲ", b)
            } catch (c) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "LŢŢŦٱÌΙІÏٲ")
            }
        },
        "ǀllÌĨĮȈIІŦ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŤȊٱȈṬṰI(0, a);
                reply("ǀllÌĨĮȈIІŦ" + b, c)
            } catch (d) {
                d[Zt] == Oy.NOT_A_MEMBER || d[Zt] == Oy.EXCESSIVE_ACCESS ? reply("ǀllÌĨĮȈIІŦ" + b, d) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ǀllÌĨĮȈIІŦ")
            }
        },
        "ÍΙΙṪÌiỊĨLĮ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŦٲĮŤŤǏŦ(0, a, b);
                reply("ÍΙΙṪÌiỊĨLĮ", c)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ÍΙΙṪÌiỊĨLĮ")
            }
        },
        "ḮȈǏŦȈȊȈȈٳǏ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ǀĮĨỈĮΪĨ(0, a);
                reply("ḮȈǏŦȈȊȈȈٳǏ", b)
            } catch (c) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ḮȈǏŦȈȊȈȈٳǏ")
            }
        },
        "ỈÍĮǏІṬĬĨĬĲ": function(a) {
            try {
                var b = new fA(a);
                b[Vh] = new eA(a[Vh]), b[Pr] = new dA(a[Pr]);
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).LṮÏٱÏŦÎ(0, b);
                reply("ỈÍĮǏІṬĬĨĬĲ", c)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ỈÍĮǏІṬĬĨĬĲ")
            }
        },
        "ЇÏiỊḬǀḬٳŦٳ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ÍlIĬŤLΙ(0, a, b);
                reply("ЇÏiỊḬǀḬٳŦٳ", c)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ЇÏiỊḬǀḬٳŦٳ")
            }
        },
        "LĨỈǏŦÍǀḮǏi": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ΙḮÏṰŤlٳ(0, a, b);
                reply("LĨỈǏŦÍǀḮǏi", c)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "LĨỈǏŦÍǀḮǏi")
            }
        },
        "ÎٳṮLÎǀÎiٳḮ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ȊÍLĲŤÏŦ();
                reply("ÎٳṮLÎǀÎiٳḮ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ÎٳṮLÎǀÎiٳḮ")
            }
        },
        "lΪȊٳЇÏǏṪŦЇ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṮЇΙΙLŢĬ();
                reply("lΪȊٳЇÏǏṪŦЇ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "lΪȊٳЇÏǏṪŦЇ")
            }
        },
        "ḬĬĮ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ÎŦĬŤṮlŤǀІĲ(av[so], a, b);
                c.output.ǏỊٱŦЇĬṬȈĲṰ().ٲIṬΙṰÎĮЇĲÎ(!0, function() {
                    var a = c.output.ǏỊٱŦЇĬṬȈĲṰ().read(),
                        b = Ly.ṬǀḬṮȊĨlḬĨȈ(a);
                    reply("ḬĬĮ", b)
                })
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "ḬĬĮ")
            }
        },
        "ٱṰLȈÌŢIǀḬŦ": function(a, b) {
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0).ĨȊŦḬḬĮḬ(a, function(a) {
                    a instanceof dA ? reply("ٱṰLȈÌŢIǀḬŦ" + b, a) : a[Zt] == Oy.INVALID_MID || a[Zt] == Oy.NOT_FOUND ? reply("ٱṰLȈÌŢIǀḬŦ" + b, a) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(a, "ٱṰLȈÌŢIǀḬŦ" + b)
                })
            } catch (c) {
                c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_FOUND ? reply("ٱṰLȈÌŢIǀḬŦ" + b, c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ٱṰLȈÌŢIǀḬŦ")
            }
        },
        "ΪٱṰIṮǀŤŤŤΪ": function(a, b) {
            try {
                zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0).ỊǏǀḬĲṰÌ(a, function(a) {
                    a instanceof Array ? reply("ΪٱṰIṮǀŤŤŤΪ" + b, a) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(a, "ΪٱṰIṮǀŤŤŤΪ" + b)
                })
            } catch (c) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ΪٱṰIṮǀŤŤŤΪ" + b)
            }
        },
        "ЇΙĲỊΪΪΪٳṪٲ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).iΪŤÏṮỈĨ();
                reply("ЇΙĲỊΪΪΪٳṪٲ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ЇΙĲỊΪΪΪٳṪٲ")
            }
        },
        "ÏŦІṬІÍĬLỊȊ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ІṪṰǀIŤṮ();
                reply("ÏŦІṬІÍĬLỊȊ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ÏŦІṬІÍĬLỊȊ")
            }
        },
        "ǏÎŤỊṬḮÏŦٲÍ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ḮІṮÌŢÍI();
                reply("ǏÎŤỊṬḮÏŦٲÍ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ǏÎŤỊṬḮÏŦٲÍ")
            }
        },
        "ٳŢIÌȊǏṬḬЇÌ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṮỈٳĬǏĲṮ();
                reply("ٳŢIÌȊǏṬḬЇÌ", a)
            } catch (b) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(b, "ٳŢIÌȊǏṬḬЇÌ")
            }
        },
        "ŦḬŦІΪȈŦЇŤŦ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).lٱŢṮŢٲÍ(a);
                reply("ŦḬŦІΪȈŦЇŤŦ", b)
            } catch (c) {
                c[Zt] === Oy.ILLEGAL_ARGUMENT || c[Zt] == Oy.NOT_FOUND || c[Zt] == Oy.EXCESSIVE_ACCESS || c[Zt] == Oy.ABUSE_BLOCK ? reply("ŦḬŦІΪȈŦЇŤŦ", c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ŦḬŦІΪȈŦЇŤŦ")
            }
        },
        "ǀỊṰṰÌȊÍٱŤŦ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŢIǀŤٳÎI(0, a);
                b[a] && (b = b[a]), reply("ǀỊṰṰÌȊÍٱŤŦ", b)
            } catch (c) {
                c[Zt] == Oy.INVALID_MID || c[Zt] == Oy.NOT_FOUND || c[Zt] == Oy.INTERNAL_ERROR ? reply("ǀỊṰṰÌȊÍٱŤŦ", c) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(c, "ǀỊṰṰÌȊÍٱŤŦ")
            }
        },
        "iٲŦiٲṮĮṬĮЇ": function(a, b) {
            b || (b = "");
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).lŢṪĬŦÏÌ(0, a);
                reply("iٲŦiٲṮĮṬĮЇ" + b, c)
            } catch (d) {
                0 == d[Zt] && "cannot block buddy" == d[ks] ? reply("iٲŦiٲṮĮṬĮЇ" + b, d) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "iٲŦiٲṮĮṬĮЇ" + b)
            }
        },
        "lΪІȈŦḮĲLÌІ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ÍÏŤĬٲÏỊ(0, a);
                reply("lΪІȈŦḮĲLÌІ" + b, c)
            } catch (d) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(d, "lΪІȈŦḮĲLÌІ")
            }
        },
        "ṪiĲĨŢỊŦȊٳI": function(a, b, c, d) {
            d || (d = "");
            try {
                var e = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṮŢÍĬٱṪl(0, a, b, c);
                reply("ṪiĲĨŢỊŦȊٳI" + d, e)
            } catch (f) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(f, "ṪiĲĨŢỊŦȊٳI" + d)
            }
        },
        "ÏṮŢȈȈÎٱŤiٳ": function(a, b, c, d) {
            try {
                var e = yv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ḬŤΙṮIŤǀ(a, b, c, d);
                reply("ÏṮŢȈȈÎٱŤiٳ", e)
            } catch (f) {
                Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(f, "ÏṮŢȈȈÎٱŤiٳ")
            }
        },
        "ŤÏȊٲÏŢLŤṮȈ": function(a, b, c, d) {
            d || (d = "");
            try {
                var e = yv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ЇLǀŢÍٱṪ(a, b, c);
                reply("ŤÏȊٲÏŢLŤṮȈ" + d, e)
            } catch (f) {
                f[Zt] == Oy.INTERNAL_ERROR ? reply("ŤÏȊٲÏŢLŤṮȈ" + d, f) : Av.ŢĲȊ().lÍĲΪІٱṮŦЇŢ(f, "ŤÏȊٲÏŢLŤṮȈ" + d)
            }
        },
        "ІỊȊٳŤŦŢỈṬǏ": function(a) {
            try {
                var b = new Wz(a),
                    c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ІḮĨÎLṰL(0, b);
                reply("ІỊȊٳŤŦŢỈṬǏ", c)
            } catch (d) {
                handleException("ІỊȊٳŤŦŢỈṬǏ", d)
            }
        },
        "ЇlĮIٲІỈȊŦl": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĲٱĮṮŦṪĨ(a, b, c);
                reply("ЇlĮIٲІỈȊŦl", d)
            } catch (e) {
                handleException("ЇlĮIٲІỈȊŦl", e)
            }
        },
        "IĬỈǀṮٱIŤȊІ": function(a) {
            a || (a = "");
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĮĬΪḬṮΪÏ();
                reply("IĬỈǀṮٱIŤȊІ" + a, b)
            } catch (c) {
                handleException("IĬỈǀṮٱIŤȊІ" + a, c)
            }
        },
        "ǀlÏIḬĮĨỈІȈ": function() {
            try {
                var a = zv.ŢĲȊ().ٳLٳЇlŦÍΪŤṮ(av[so]).ĨÌΙŢΙṬŤ();
                reply("ǀlÏIḬĮĨỈІȈ", a)
            } catch (b) {
                handleException("ǀlÏIḬĮĨỈІȈ", b)
            }
        },
        "ĲilÍІlṬṪṰΙ": function(a) {
            try {
                var b = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ỊǀІḬĲŦÏ(a);
                reply("ĲilÍІlṬṪṰΙ", {
                    evalue: b[Is],
                    keynm: b[mt],
                    nvalue: b[vs],
                    sessionKey: b[mn]
                })
            } catch (c) {
                handleException("ĲilÍІlṬṪṰΙ", c)
            }
        },
        "ȊΙÌȈІiṮLIǏ": function(a) {
            var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ȊٳlǏÎІŢ();
            _.extend(b, a);
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŦŤĮٱÍǀÎ(0, b);
                reply("ȊΙÌȈІiṮLIǏ", c)
            } catch (d) {
                handleException("ȊΙÌȈІiṮLIǏ", d)
            }
        },
        "ṬЇٲІΙỊǏṬŤÎ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ȊٳlǏÎІŢ();
                reply("ṬЇٲІΙỊǏṬŤÎ", a)
            } catch (b) {
                handleException("ṬЇٲІΙỊǏṬŤÎ", b)
            }
        },
        "ÍŤlȊٳǏΙlĨĲ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ٲŤŦÏĮĲṮ(a, null, null, av[As]);
                reply("ÍŤlȊٳǏΙlĨĲ", b)
            } catch (c) {
                handleException("ÍŤlȊٳǏΙlĨĲ", c)
            }
        },
        "ΪȊṰLٱLĲiŦЇ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).iIÌḮٲΪḬ(a);
                reply("ΪȊṰLٱLĲiŦЇ", b)
            } catch (c) {
                handleException("ΪȊṰLٱLĲiŦЇ", c)
            }
        },
        "ǀǀŦĬĨḮlÌÌÍ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ǏÍÍȈІŤŤ(a);
                reply("ǀǀŦĬĨḮlÌÌÍ", b)
            } catch (c) {
                handleException("ǀǀŦĬĨḮlÌÌÍ", c)
            }
        },
        "IŦÍĲÎÍŤÏṰṮ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ỊṰЇŤLٳṪ(0, a, b);
                reply("IŦÍĲÎÍŤÏṰṮ", c)
            } catch (d) {
                handleException("IŦÍĲÎÍŤÏṰṮ", d)
            }
        },
        "ІỊĮÎŦLǀỈḮi": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ІḬỈǏΙiٳ(0, a, new Xz(b));
                reply("ІỊĮÎŦLǀỈḮi", c)
            } catch (d) {
                handleException("ІỊĮÎŦLǀỈḮi", d)
            }
        },
        "ĲĮÏȊÌٱṮlȊṮ": function() {
            try {
                var a = vv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ǏIỈÌΪÏṬ();
                reply("ĲĮÏȊÌٱṮlȊṮ", a)
            } catch (b) {
                reply("ĲĮÏȊÌٱṮlȊṮ", {
                    error: "error"
                })
            }
        },
        "ḬٳiЇḮLṮỈḬǏ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ȊŤٳŤȊȈŦ();
                reply("ḬٳiЇḮLṮỈḬǏ", a)
            } catch (b) {
                b instanceof DOMException ? reply("ḬٳiЇḮLṮỈḬǏ", "DOMException") : handleException("ḬٳiЇḮLṮỈḬǏ", b)
            }
        },
        "ĲḬḮȊȊٱȈiȈḮ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ЇỈṮٳÌЇL(a, b);
                reply("ĲḬḮȊȊٱȈiȈḮ", c)
            } catch (d) {
                handleException("ĲḬḮȊȊٱȈiȈḮ", d)
            }
        },
        "ṰÌỊ": function(a, b) {
            b || (b = "");
            try {
                var c = lv.ỊỈÌỈІÍŢٲǏŤ(),
                    d = c.ṬǀٱٲLІṬÍŦṪ();
                d.send(a)
            } catch (e) {
                handleException("ṰÌỊ" + b, e)
            }
        },
        "ĮỊĨĮỈḮٲỊǀÏ": function(a) {
            a || (a = "");
            try {
                var b = zv.ŢĲȊ().ÏLLǀȊІŢṮŢỊ().ĬḮŦŦỊIṪ();
                reply("ĮỊĨĮỈḮٲỊǀÏ" + a, b)
            } catch (c) {
                handleException("ĮỊĨĮỈḮٲỊǀÏ" + a, c)
            }
        },
        "ǀṮÎŤٲǀȈٳŦL": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŦǀỊIṰٱÎ(sz.MOZILLA_SIMPLE, a);
                reply("ǀṮÎŤٲǀȈٳŦL", b)
            } catch (c) {
                handleException("ǀṮÎŤٲǀȈٳŦL", c)
            }
        },
        "ΪٳḮOnlyOnceT": function(a, b, c, d, e) {
            try {
                var f = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so], !0);
                f.ĮΪṮṪٳli(a, b, c, d, function(a) {
                    var b = f.input.ǏỊٱŦЇĬṬȈĲṰ().ÌІḬỊǀĮlٱŢĬ();
                    204 == b ? reply("ΪٳḮOnlyOnceT" + e, []) : a && a instanceof Array ? reply("ΪٳḮOnlyOnceT" + e, a) : reply("ΪٳḮOnlyOnceT" + e, "DOMException")
                })
            } catch (g) {
                g instanceof DOMException ? reply("ΪٳḮOnlyOnce" + e, "DOMException") : reply("ΪٳḮOnlyOnce" + e, g)
            }
        },
        "ŤЇỈLṬṮЇȈŤĨ": function() {
            try {
                var a = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĮٳṬŦỈĮĮ();
                reply("ŤЇỈLṬṮЇȈŤĨ", a)
            } catch (b) {
                handleException("ŤЇỈLṬṮЇȈŤĨ", b)
            }
        },
        "ỊĬŤḬÌỊỈŦٱI": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ΪḬÏĨŦLĲ(a);
                reply("ỊĬŤḬÌỊỈŦٱI" + b, c)
            } catch (d) {
                handleException("ỊĬŤḬÌỊỈŦٱI" + b, d)
            }
        },
        "ǏٳṪٳΪṮLḬٱĨ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ǀIŢІÎΪȊ(a, b);
                reply("ǏٳṪٳΪṮLḬٱĨ" + c, d)
            } catch (e) {
                handleException("ǏٳṪٳΪṮLḬٱĨ" + c, e)
            }
        },
        "ṪЇٱĮṰÍṪȊٲΪ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ỈiȈÌǏĮǀ(a, b);
                reply("ṪЇٱĮṰÍṪȊٲΪ" + c, d)
            } catch (e) {
                handleException("ṪЇٱĮṰÍṪȊٲΪ" + c, e)
            }
        },
        "ІٳٳĬЇiΙḮiΪ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ĮŤḬІŢĲΙ(a, b);
                reply("ІٳٳĬЇiΙḮiΪ" + c, d)
            } catch (e) {
                handleException("ІٳٳĬЇiΙḮiΪ" + c, e)
            }
        },
        "ٲĮŢiŢǀĬȈṪΙ": function(a, b, c, d, e) {
            try {
                var f = new Sz({
                        messageId: b,
                        deliveredTime: c
                    }),
                    g = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ЇỊȊІṮlĲ(a, f, d);
                reply("ٲĮŢiŢǀĬȈṪΙ" + e, g)
            } catch (h) {
                handleException("ٲĮŢiŢǀĬȈṪΙ" + e, h)
            }
        },
        "ĲḮٳLІLٱĲІŢ": function(a) {
            try {
                var b = xv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ٱṬٳÌÎĮȈ(a);
                reply("ĲḮٳLІLٱĲІŢ", b)
            } catch (c) {
                handleException("ĲḮٳLІLٱĲІŢ", c)
            }
        },
        "ṮiṮ": function(a, b, c) {
            new bv("POST").setUrl(Bv).ΪŦٳLΙĬÎLٳĬ(a).setContents(b).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ṮiṮ" + c, a[is]) : reply("ṮiṮ" + c, a)
            }, function(a) {
                a && reply("ṮiṮ" + c, {
                    errorCode: a || 404
                })
            })
        },
        "ΪٲṮ": function(a, b, c) {
            new bv("POST").setUrl(Cv).ΪŦٳLΙĬÎLٳĬ(a).setContents(b).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ΪٲṮ" + c, a[is]) : reply("ΪٲṮ" + c, a)
            }, function(a) {
                a && reply("ΪٲṮ" + c, {
                    errorCode: a || 404
                })
            })
        },
        "ٲІl": function(a, b, c) {
            new bv("POST").setUrl(Dv).ΪŦٳLΙĬÎLٳĬ(a).setContents(b).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ٲІl" + c, a[is]) : reply("ٲІl" + c, a)
            }, function(a) {
                a && reply("ٲІl" + c, {
                    errorCode: a || 404
                })
            })
        },
        "ٱǀL": function(a, b, c) {
            new bv("GET").setUrl(Ev, b).ΪŦٳLΙĬÎLٳĬ(a).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ٱǀL" + c, a[is]) : reply("ٱǀL" + c, a)
            }, function(a) {
                a && reply("ٱǀL" + c, {
                    errorCode: a || 404
                })
            })
        },
        "ÍǏỈ": function(a, b, c) {
            new bv("GET").setUrl(Fv, b).ΪŦٳLΙĬÎLٳĬ(a).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ÍǏỈ" + c, a[is]) : reply("ÍǏỈ" + c, a)
            }, function(a) {
                a && reply("ÍǏỈ" + c, {
                    errorCode: a || 404
                })
            })
        },
        "ĲṰٱ": function(a, b, c) {
            new bv("POST").setUrl(Gv).ΪŦٳLΙĬÎLٳĬ(a).setContents(b).ٲIṬΙṰÎĮЇĲÎ(function(a) {
                0 === a[Zt] ? reply("ĲṰٱ" + c, a[is]) : reply("ĲṰٱ" + c, a)
            }, function(a) {
                a && reply("ÍǏỈ" + c, {
                    errorCode: a || 404
                })
            })
        },
        refreshTokenT: function() {},
        "lŤiṪٱỈĮٱȊĮ": function(a) {
            try {
                var b = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṪIΪṪÎÏṪ(a);
                reply("lŤiṪٱỈĮٱȊĮ", b)
            } catch (c) {
                reply("lŤiṪٱỈĮٱȊĮ", Av.serialize(c))
            }
        },
        "ÌIŤĲŦÎĮIЇΙ": function(a, b, c, d) {
            try {
                var e = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ÎṰĬṰٲĨĨ(a, b, c);
                reply("ÌIŤĲŦÎĮIЇΙ" + d, e)
            } catch (f) {
                reply("ÌIŤĲŦÎĮIЇΙ" + d, Av.serialize(f))
            }
        },
        "ŢΙÏỈǀḬŤŢȈǀ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ΙΙLٲȈĬٲ(a);
                reply("ŢΙÏỈǀḬŤŢȈǀ" + b, c)
            } catch (d) {
                reply("ŢΙÏỈǀḬŤŢȈǀ" + b, Av.serialize(d))
            }
        },
        "ٱṮỊĨÏΙǀṬΙȈ": function(a, b, c, d, e, f) {
            try {
                var g = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ṰIĬlḬlÏ(a, b, c, d, e);
                reply("ٱṮỊĨÏΙǀṬΙȈ" + f, g)
            } catch (h) {
                reply("ٱṮỊĨÏΙǀṬΙȈ" + f, Av.serialize(h))
            }
        },
        "ٱṪĬIЇṰÎĲٱĮ": function(a, b, c, d) {
            try {
                var e = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ỊỊÌṮṪÌl(a, b, c);
                reply("ٱṪĬIЇṰÎĲٱĮ" + d, e)
            } catch (f) {
                reply("ٱṪĬIЇṰÎĲٱĮ" + d, Av.serialize(f))
            }
        },
        "ỊٲÎṰٱÏḬٲIŤ": function(a, b, c) {
            try {
                var d = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).LЇȈЇЇĬṬ(a, b);
                reply("ỊٲÎṰٱÏḬٲIŤ" + c, d)
            } catch (e) {
                reply("ỊٲÎṰٱÏḬٲIŤ" + c, Av.serialize(e))
            }
        },
        "ÏÌiȈIŢŤŦṮṮ": function(a, b) {
            try {
                var c = zv.ŢĲȊ().ŢĬŤÌІŦÎlÍĲ(av[so]).ŢŦlٳٳlL(a);
                reply("ÏÌiȈIŢŤŦṮṮ" + b, c)
            } catch (d) {
                reply("ÏÌiȈIŢŤŦṮṮ" + b, Av.serialize(d))
            }
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
