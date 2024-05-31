(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[353], {
    7818: function(e, t, i) {
        "use strict";
        i.d(t, {
            default: function() {
                return n.a
            }
        });
        var s = i(551)
          , n = i.n(s)
    },
    6648: function(e, t, i) {
        "use strict";
        i.d(t, {
            default: function() {
                return n.a
            }
        });
        var s = i(5601)
          , n = i.n(s)
    },
    8173: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let s = i(9920)
          , n = i(1452)
          , a = i(7437)
          , r = n._(i(2265))
          , o = s._(i(4887))
          , l = s._(i(8321))
          , c = i(497)
          , d = i(7103)
          , u = i(3938);
        i(2301);
        let h = i(291)
          , p = s._(i(1241))
          , f = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, i, s, n, a, r) {
            let o = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o,
            ("decode"in e ? e.decode() : Promise.resolve()).catch(()=>{}
            ).then(()=>{
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && n(!0),
                    null == i ? void 0 : i.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let s = !1
                          , n = !1;
                        i.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>s,
                            isPropagationStopped: ()=>n,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                s = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                n = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == s ? void 0 : s.current) && s.current(e)
                }
            }
            ))
        }
        function g(e) {
            let[t,i] = r.version.split(".", 2)
              , s = parseInt(t, 10)
              , n = parseInt(i, 10);
            return s > 18 || 18 === s && n >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        r.forwardRef)((e,t)=>{
            let {src: i, srcSet: s, sizes: n, height: o, width: l, decoding: c, className: d, style: u, fetchPriority: h, placeholder: p, loading: f, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: w, setBlurComplete: x, setShowAltText: _, sizesInput: S, onLoad: C, onError: T, ...M} = e;
            return (0,
            a.jsx)("img", {
                ...M,
                ...g(h),
                loading: f,
                width: l,
                height: o,
                decoding: c,
                "data-nimg": y ? "fill" : "1",
                className: d,
                style: u,
                sizes: n,
                srcSet: s,
                src: i,
                ref: (0,
                r.useCallback)(e=>{
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (T && (e.src = e.src),
                    e.complete && m(e, p, b, w, x, v, S))
                }
                , [i, p, b, w, x, T, v, S, t]),
                onLoad: e=>{
                    m(e.currentTarget, p, b, w, x, v, S)
                }
                ,
                onError: e=>{
                    _(!0),
                    "empty" !== p && x(!0),
                    T && T(e)
                }
            })
        }
        );
        function y(e) {
            let {isAppRouter: t, imgAttributes: i} = e
              , s = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...g(i.fetchPriority)
            };
            return t && o.default.preload ? (o.default.preload(i.src, s),
            null) : (0,
            a.jsx)(l.default, {
                children: (0,
                a.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...s
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let b = (0,
        r.forwardRef)((e,t)=>{
            let i = (0,
            r.useContext)(h.RouterContext)
              , s = (0,
            r.useContext)(u.ImageConfigContext)
              , n = (0,
            r.useMemo)(()=>{
                let e = f || s || d.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , i = e.deviceSizes.sort((e,t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: i
                }
            }
            , [s])
              , {onLoad: o, onLoadingComplete: l} = e
              , m = (0,
            r.useRef)(o);
            (0,
            r.useEffect)(()=>{
                m.current = o
            }
            , [o]);
            let g = (0,
            r.useRef)(l);
            (0,
            r.useEffect)(()=>{
                g.current = l
            }
            , [l]);
            let[b,w] = (0,
            r.useState)(!1)
              , [x,_] = (0,
            r.useState)(!1)
              , {props: S, meta: C} = (0,
            c.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: n,
                blurComplete: b,
                showAltText: x
            });
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(v, {
                    ...S,
                    unoptimized: C.unoptimized,
                    placeholder: C.placeholder,
                    fill: C.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: w,
                    setShowAltText: _,
                    sizesInput: e.sizes,
                    ref: t
                }), C.priority ? (0,
                a.jsx)(y, {
                    isAppRouter: !i,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2901: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let s = i(9920)._(i(2265)).default.createContext({})
    },
    687: function(e, t) {
        "use strict";
        function i(e) {
            let {ampFirst: t=!1, hybrid: i=!1, hasQuery: s=!1} = void 0 === e ? {} : e;
            return t || i && s
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    551: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let s = i(9920);
        i(7437),
        i(2265);
        let n = s._(i(148));
        function a(e, t) {
            var i;
            let s = {
                loading: e=>{
                    let {error: t, isLoading: i, pastDelay: s} = e;
                    return null
                }
            };
            "function" == typeof e && (s.loader = e);
            let a = {
                ...s,
                ...t
            };
            return (0,
            n.default)({
                ...a,
                modules: null == (i = a.loadableGenerated) ? void 0 : i.modules
            })
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    497: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return o
            }
        }),
        i(2301);
        let s = i(1564)
          , n = i(7103);
        function a(e) {
            return void 0 !== e.default
        }
        function r(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function o(e, t) {
            var i;
            let o, l, c, {src: d, sizes: u, unoptimized: h=!1, priority: p=!1, loading: f, className: m, quality: g, width: v, height: y, fill: b=!1, style: w, overrideSrc: x, onLoad: _, onLoadingComplete: S, placeholder: C="empty", blurDataURL: T, fetchPriority: M, layout: E, objectFit: k, objectPosition: P, lazyBoundary: z, lazyRoot: O, ...I} = e, {imgConf: L, showAltText: D, blurComplete: R, defaultLoader: A} = t, B = L || n.imageConfigDefault;
            if ("allSizes"in B)
                o = B;
            else {
                let e = [...B.deviceSizes, ...B.imageSizes].sort((e,t)=>e - t)
                  , t = B.deviceSizes.sort((e,t)=>e - t);
                o = {
                    ...B,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === A)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let F = I.loader || A;
            delete I.loader,
            delete I.srcSet;
            let j = "__next_img_default"in F;
            if (j) {
                if ("custom" === o.loader)
                    throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = F;
                F = t=>{
                    let {config: i, ...s} = t;
                    return e(s)
                }
            }
            if (E) {
                "fill" === E && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[E];
                e && (w = {
                    ...w,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[E];
                t && !u && (u = t)
            }
            let $ = ""
              , G = r(v)
              , q = r(y);
            if ("object" == typeof (i = d) && (a(i) || void 0 !== i.src)) {
                let e = a(d) ? d.default : d;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                c = e.blurHeight,
                T = T || e.blurDataURL,
                $ = e.src,
                !b) {
                    if (G || q) {
                        if (G && !q) {
                            let t = G / e.width;
                            q = Math.round(e.height * t)
                        } else if (!G && q) {
                            let t = q / e.height;
                            G = Math.round(e.width * t)
                        }
                    } else
                        G = e.width,
                        q = e.height
                }
            }
            let V = !p && ("lazy" === f || void 0 === f);
            (!(d = "string" == typeof d ? d : $) || d.startsWith("data:") || d.startsWith("blob:")) && (h = !0,
            V = !1),
            o.unoptimized && (h = !0),
            j && d.endsWith(".svg") && !o.dangerouslyAllowSVG && (h = !0),
            p && (M = "high");
            let H = r(g)
              , W = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: k,
                objectPosition: P
            } : {}, D ? {} : {
                color: "transparent"
            }, w)
              , N = R || "empty" === C ? null : "blur" === C ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            s.getImageBlurSvg)({
                widthInt: G,
                heightInt: q,
                blurWidth: l,
                blurHeight: c,
                blurDataURL: T || "",
                objectFit: W.objectFit
            }) + '")' : 'url("' + C + '")'
              , Y = N ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: N
            } : {}
              , U = function(e) {
                let {config: t, src: i, unoptimized: s, width: n, quality: a, sizes: r, loader: o} = e;
                if (s)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: c} = function(e, t, i) {
                    let {deviceSizes: s, allSizes: n} = e;
                    if (i) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let s; s = e.exec(i); s)
                            t.push(parseInt(s[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: n.filter(t=>t >= s[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: n,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: s,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e=>n.find(t=>t >= e) || n[n.length - 1]))],
                        kind: "x"
                    }
                }(t, n, r)
                  , d = l.length - 1;
                return {
                    sizes: r || "w" !== c ? r : "100vw",
                    srcSet: l.map((e,s)=>o({
                        config: t,
                        src: i,
                        quality: a,
                        width: e
                    }) + " " + ("w" === c ? e : s + 1) + c).join(", "),
                    src: o({
                        config: t,
                        src: i,
                        quality: a,
                        width: l[d]
                    })
                }
            }({
                config: o,
                src: d,
                unoptimized: h,
                width: G,
                quality: H,
                sizes: u,
                loader: F
            });
            return {
                props: {
                    ...I,
                    loading: V ? "lazy" : f,
                    fetchPriority: M,
                    width: G,
                    height: q,
                    decoding: "async",
                    className: m,
                    style: {
                        ...W,
                        ...Y
                    },
                    sizes: U.sizes,
                    srcSet: U.srcSet,
                    src: x || U.src
                },
                meta: {
                    unoptimized: h,
                    priority: p,
                    placeholder: C,
                    fill: b
                }
            }
        }
    },
    8321: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            default: function() {
                return m
            },
            defaultHead: function() {
                return u
            }
        });
        let s = i(9920)
          , n = i(1452)
          , a = i(7437)
          , r = n._(i(2265))
          , o = s._(i(5960))
          , l = i(2901)
          , c = i(6590)
          , d = i(687);
        function u(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            a.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function h(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === r.default.Fragment ? e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        i(2301);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function f(e, t) {
            let {inAmpMode: i} = t;
            return e.reduce(h, []).reverse().concat(u(i).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , i = new Set
                  , s = {};
                return n=>{
                    let a = !0
                      , r = !1;
                    if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                        r = !0;
                        let t = n.key.slice(n.key.indexOf("$") + 1);
                        e.has(t) ? a = !1 : e.add(t)
                    }
                    switch (n.type) {
                    case "title":
                    case "base":
                        t.has(n.type) ? a = !1 : t.add(n.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (n.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    i.has(t) ? a = !1 : i.add(t);
                                else {
                                    let e = n.props[t]
                                      , i = s[t] || new Set;
                                    ("name" !== t || !r) && i.has(e) ? a = !1 : (i.add(e),
                                    s[t] = i)
                                }
                            }
                        }
                    }
                    return a
                }
            }()).reverse().map((e,t)=>{
                let s = e.key || t;
                if (!i && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    r.default.cloneElement(e, t)
                }
                return r.default.cloneElement(e, {
                    key: s
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , i = (0,
            r.useContext)(l.AmpStateContext)
              , s = (0,
            r.useContext)(c.HeadManagerContext);
            return (0,
            a.jsx)(o.default, {
                reduceComponentsToState: f,
                headManager: s,
                inAmpMode: (0,
                d.isInAmpMode)(i),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1564: function(e, t) {
        "use strict";
        function i(e) {
            let {widthInt: t, heightInt: i, blurWidth: s, blurHeight: n, blurDataURL: a, objectFit: r} = e
              , o = s ? 40 * s : t
              , l = n ? 40 * n : i
              , c = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === r ? "xMidYMid" : "cover" === r ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + a + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    3938: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let s = i(9920)._(i(2265))
          , n = i(7103)
          , a = s.default.createContext(n.imageConfigDefault)
    },
    7103: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return s
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    5601: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return o
            }
        });
        let s = i(9920)
          , n = i(497)
          , a = i(8173)
          , r = s._(i(1241));
        function o(e) {
            let {props: t} = (0,
            n.getImgProps)(e, {
                defaultLoader: r.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,i] of Object.entries(t))
                void 0 === i && delete t[e];
            return {
                props: t
            }
        }
        let l = a.Image
    },
    1241: function(e, t) {
        "use strict";
        function i(e) {
            let {config: t, src: i, width: s, quality: n} = e;
            return t.path + "?url=" + encodeURIComponent(i) + "&w=" + s + "&q=" + (n || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        }),
        i.__next_img_default = !0;
        let s = i
    },
    912: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let s = i(5592);
        function n(e) {
            let {reason: t, children: i} = e;
            if ("undefined" == typeof window)
                throw new s.BailoutToCSRError(t);
            return i
        }
    },
    148: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return c
            }
        });
        let s = i(7437)
          , n = i(2265)
          , a = i(912)
          , r = i(1481);
        function o(e) {
            return {
                default: e && "default"in e ? e.default : e
            }
        }
        let l = {
            loader: ()=>Promise.resolve(o(()=>null)),
            loading: null,
            ssr: !0
        }
          , c = function(e) {
            let t = {
                ...l,
                ...e
            }
              , i = (0,
            n.lazy)(()=>t.loader().then(o))
              , c = t.loading;
            function d(e) {
                let o = c ? (0,
                s.jsx)(c, {
                    isLoading: !0,
                    pastDelay: !0,
                    error: null
                }) : null
                  , l = t.ssr ? (0,
                s.jsxs)(s.Fragment, {
                    children: ["undefined" == typeof window ? (0,
                    s.jsx)(r.PreloadCss, {
                        moduleIds: t.modules
                    }) : null, (0,
                    s.jsx)(i, {
                        ...e
                    })]
                }) : (0,
                s.jsx)(a.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0,
                    s.jsx)(i, {
                        ...e
                    })
                });
                return (0,
                s.jsx)(n.Suspense, {
                    fallback: o,
                    children: l
                })
            }
            return d.displayName = "LoadableComponent",
            d
        }
    },
    1481: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let s = i(7437)
          , n = i(8512);
        function a(e) {
            let {moduleIds: t} = e;
            if ("undefined" != typeof window)
                return null;
            let i = (0,
            n.getExpectedRequestStore)("next/dynamic css")
              , a = [];
            if (i.reactLoadableManifest && t) {
                let e = i.reactLoadableManifest;
                for (let i of t) {
                    if (!e[i])
                        continue;
                    let t = e[i].files.filter(e=>e.endsWith(".css"));
                    a.push(...t)
                }
            }
            return 0 === a.length ? null : (0,
            s.jsx)(s.Fragment, {
                children: a.map(e=>(0,
                s.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: i.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style"
                }, e))
            })
        }
    },
    291: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let s = i(9920)._(i(2265)).default.createContext(null)
    },
    5960: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let s = i(2265)
          , n = "undefined" == typeof window
          , a = n ? ()=>{}
        : s.useLayoutEffect
          , r = n ? ()=>{}
        : s.useEffect;
        function o(e) {
            let {headManager: t, reduceComponentsToState: i} = e;
            function o() {
                if (t && t.mountedInstances) {
                    let n = s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(i(n, e))
                }
            }
            if (n) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                o()
            }
            return a(()=>{
                var i;
                return null == t || null == (i = t.mountedInstances) || i.add(e.children),
                ()=>{
                    var i;
                    null == t || null == (i = t.mountedInstances) || i.delete(e.children)
                }
            }
            ),
            a(()=>(t && (t._pendingUpdate = o),
            ()=>{
                t && (t._pendingUpdate = o)
            }
            )),
            r(()=>(t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            ()=>{
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    3023: function() {},
    2235: function() {},
    2802: function() {},
    2169: function() {},
    4885: function() {},
    7322: function() {},
    3034: function() {},
    7470: function(e, t, i) {
        "use strict";
        var s, n, a, r, o, l, c, d, u, h, p, f, m, g, v, y, b, w, x, _, S, C, T, M, E, k, P, z, O, I, L, D, R, A, B, F, j, $, G, q, V, H, W, N, Y, U, X, Z, K, Q;
        i.d(t, {
            NV1: function() {
                return a
            },
            Cdc: function() {
                return iv
            },
            Dpx: function() {
                return v
            },
            Hyf: function() {
                return r
            },
            gqJ: function() {
                return f
            },
            nxi: function() {
                return E
            },
            L8z: function() {
                return iB
            },
            OzF: function() {
                return tg
            },
            Voc: function() {
                return y
            },
            DYc: function() {
                return o
            },
            Igb: function() {
                return x
            },
            $Sh: function() {
                return iF
            },
            AeJ: function() {
                return iy
            },
            RnL: function() {
                return T
            },
            SWe: function() {
                return t$
            },
            OWs: function() {
                return ep
            },
            bx6: function() {
                return ev
            },
            M_G: function() {
                return eG
            },
            kRC: function() {
                return eY
            },
            gy4: function() {
                return eN
            },
            uZ5: function() {
                return ew
            },
            ocL: function() {
                return tt
            },
            Idc: function() {
                return eP
            },
            iCg: function() {
                return eW
            },
            XDe: function() {
                return eH
            },
            pSR: function() {
                return td
            },
            gK4: function() {
                return es
            },
            KH1: function() {
                return eX
            },
            Spd: function() {
                return ek
            },
            oW6: function() {
                return eE
            },
            _Xd: function() {
                return ey
            },
            bS$: function() {
                return ta
            },
            BEi: function() {
                return ti
            },
            Dt5: function() {
                return ts
            },
            jl5: function() {
                return eL
            },
            sZz: function() {
                return eb
            },
            KIV: function() {
                return eT
            },
            Gu7: function() {
                return eS
            },
            vzQ: function() {
                return te
            },
            izR: function() {
                return e9
            },
            V0: function() {
                return eQ
            },
            kJL: function() {
                return ed
            },
            wm$: function() {
                return eV
            },
            dBL: function() {
                return eB
            },
            Kn2: function() {
                return ec
            },
            Ac: function() {
                return e$
            },
            KrJ: function() {
                return eR
            },
            c86: function() {
                return ej
            },
            wA_: function() {
                return eZ
            },
            mxw: function() {
                return eF
            },
            X5o: function() {
                return ea
            },
            aMP: function() {
                return ee
            },
            WtO: function() {
                return et
            },
            tZy: function() {
                return en
            },
            vdf: function() {
                return e_
            },
            lNs: function() {
                return e6
            },
            tXk: function() {
                return e3
            },
            dpV: function() {
                return eU
            },
            lCU: function() {
                return e4
            },
            Cst: function() {
                return eM
            },
            S6T: function() {
                return ij
            },
            CrJ: function() {
                return e0
            },
            PBz: function() {
                return tl
            }
        });
        let J = "generated"
          , ee = "pointerleave"
          , et = "pointermove"
          , ei = "touchend"
          , es = "tsParticles - Error"
          , en = 100
          , ea = 1e3;
        function er(e) {
            return "boolean" == typeof e
        }
        function eo(e) {
            return "string" == typeof e
        }
        function el(e) {
            return "number" == typeof e
        }
        function ec(e) {
            return "object" == typeof e && null !== e
        }
        function ed(e) {
            return Array.isArray(e)
        }
        (k = s || (s = {})).bottom = "bottom",
        k.bottomLeft = "bottom-left",
        k.bottomRight = "bottom-right",
        k.left = "left",
        k.none = "none",
        k.right = "right",
        k.top = "top",
        k.topLeft = "top-left",
        k.topRight = "top-right",
        k.outside = "outside",
        k.inside = "inside";
        let eu = {
            x: 0,
            y: 0,
            z: 0
        };
        class eh {
            constructor(e, t, i) {
                if (this._updateFromAngle = (e,t)=>{
                    this.x = Math.cos(e) * t,
                    this.y = Math.sin(e) * t
                }
                ,
                !el(e) && e)
                    this.x = e.x,
                    this.y = e.y,
                    this.z = e.z ? e.z : eu.z;
                else if (void 0 !== e && void 0 !== t)
                    this.x = e,
                    this.y = t,
                    this.z = i ?? eu.z;
                else
                    throw Error(`${es} Vector3d not initialized correctly`)
            }
            static get origin() {
                return eh.create(eu.x, eu.y, eu.z)
            }
            get angle() {
                return Math.atan2(this.y, this.x)
            }
            set angle(e) {
                this._updateFromAngle(e, this.length)
            }
            get length() {
                return Math.sqrt(this.getLengthSq())
            }
            set length(e) {
                this._updateFromAngle(this.angle, e)
            }
            static clone(e) {
                return eh.create(e.x, e.y, e.z)
            }
            static create(e, t, i) {
                return new eh(e,t,i)
            }
            add(e) {
                return eh.create(this.x + e.x, this.y + e.y, this.z + e.z)
            }
            addTo(e) {
                this.x += e.x,
                this.y += e.y,
                this.z += e.z
            }
            copy() {
                return eh.clone(this)
            }
            distanceTo(e) {
                return this.sub(e).length
            }
            distanceToSq(e) {
                return this.sub(e).getLengthSq()
            }
            div(e) {
                return eh.create(this.x / e, this.y / e, this.z / e)
            }
            divTo(e) {
                this.x /= e,
                this.y /= e,
                this.z /= e
            }
            getLengthSq() {
                return this.x ** 2 + this.y ** 2
            }
            mult(e) {
                return eh.create(this.x * e, this.y * e, this.z * e)
            }
            multTo(e) {
                this.x *= e,
                this.y *= e,
                this.z *= e
            }
            normalize() {
                let e = this.length;
                0 != e && this.multTo(1 / e)
            }
            rotate(e) {
                return eh.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), eu.z)
            }
            setTo(e) {
                this.x = e.x,
                this.y = e.y,
                this.z = e.z ? e.z : eu.z
            }
            sub(e) {
                return eh.create(this.x - e.x, this.y - e.y, this.z - e.z)
            }
            subFrom(e) {
                this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z
            }
        }
        class ep extends eh {
            constructor(e, t) {
                super(e, t, eu.z)
            }
            static get origin() {
                return ep.create(eu.x, eu.y)
            }
            static clone(e) {
                return ep.create(e.x, e.y)
            }
            static create(e, t) {
                return new ep(e,t)
            }
        }
        let ef = Math.random
          , em = new Map
          , eg = 2 * Math.PI;
        function ev(e, t) {
            em.get(e) || em.set(e, t)
        }
        function ey(e) {
            return em.get(e) ?? (e=>e)
        }
        function eb() {
            return ew(ef(), 0, 1 - Number.EPSILON)
        }
        function ew(e, t, i) {
            return Math.min(Math.max(e, t), i)
        }
        function ex(e, t, i, s) {
            return Math.floor((e * i + t * s) / (i + s))
        }
        function e_(e) {
            let t = eT(e)
              , i = eC(e);
            return t === i && (i = 0),
            eb() * (t - i) + i
        }
        function eS(e) {
            return el(e) ? e : e_(e)
        }
        function eC(e) {
            return el(e) ? e : e.min
        }
        function eT(e) {
            return el(e) ? e : e.max
        }
        function eM(e, t) {
            if (e === t || void 0 === t && el(e))
                return e;
            let i = eC(e)
              , s = eT(e);
            return void 0 !== t ? {
                min: Math.min(i, t),
                max: Math.max(s, t)
            } : eM(i, s)
        }
        function eE(e, t) {
            let i = e.x - t.x
              , s = e.y - t.y;
            return {
                dx: i,
                dy: s,
                distance: Math.sqrt(i ** 2 + s ** 2)
            }
        }
        function ek(e, t) {
            return eE(e, t).distance
        }
        function eP(e) {
            return e * Math.PI / 180
        }
        function ez(e, t, i, s) {
            return ep.create(e.x * (i - s) / (i + s) + 2 * t.x * s / (i + s), e.y)
        }
        function eO(e) {
            return e ? e.endsWith("%") ? parseFloat(e) / en : parseFloat(e) : 1
        }
        (P = n || (n = {})).auto = "auto",
        P.increase = "increase",
        P.decrease = "decrease",
        P.random = "random",
        (z = a || (a = {})).increasing = "increasing",
        z.decreasing = "decreasing",
        (O = r || (r = {})).none = "none",
        O.max = "max",
        O.min = "min",
        (I = o || (o = {})).bottom = "bottom",
        I.left = "left",
        I.right = "right",
        I.top = "top",
        (L = l || (l = {})).precise = "precise",
        L.percent = "percent",
        (D = c || (c = {})).max = "max",
        D.min = "min",
        D.random = "random";
        let eI = {
            debug: console.debug,
            error: console.error,
            info: console.info,
            log: console.log,
            verbose: console.log,
            warning: console.warn
        };
        function eL() {
            return eI
        }
        function eD(e) {
            let t = {
                bounced: !1
            }
              , {pSide: i, pOtherSide: s, rectSide: n, rectOtherSide: a, velocity: r, factor: o} = e;
            return s.min < a.min || s.min > a.max || s.max < a.min || s.max > a.max || (i.max >= n.min && i.max <= (n.max + n.min) * .5 && r > 0 || i.min <= n.max && i.min > (n.max + n.min) * .5 && r < 0) && (t.velocity = -(r * o),
            t.bounced = !0),
            t
        }
        function eR() {
            return "undefined" == typeof window || !window || void 0 === window.document || !window.document
        }
        function eA(e) {
            if (!eR() && "undefined" != typeof matchMedia)
                return matchMedia(e)
        }
        function eB(e, t) {
            return e === t || ed(t) && t.indexOf(e) > -1
        }
        async function eF(e, t) {
            try {
                await document.fonts.load(`${t ?? "400"} 36px '${e ?? "Verdana"}'`)
            } catch {}
        }
        function ej(e, t, i=!0) {
            return e[void 0 !== t && i ? t % e.length : Math.floor(eb() * e.length)]
        }
        function e$(e, t, i, s, n) {
            var a;
            let r;
            return a = eG(e, s ?? 0),
            r = !0,
            n && n !== o.bottom || (r = a.top < t.height + i.x),
            r && (!n || n === o.left) && (r = a.right > i.x),
            r && (!n || n === o.right) && (r = a.left < t.width + i.y),
            r && (!n || n === o.top) && (r = a.bottom > i.y),
            r
        }
        function eG(e, t) {
            return {
                bottom: e.y + t,
                left: e.x - t,
                right: e.x + t,
                top: e.y - t
            }
        }
        function eq(e, ...t) {
            for (let i of t) {
                if (null == i)
                    continue;
                if (!ec(i)) {
                    e = i;
                    continue
                }
                let t = Array.isArray(i);
                for (let s in t && (ec(e) || !e || !Array.isArray(e)) ? e = [] : !t && (ec(e) || !e || Array.isArray(e)) && (e = {}),
                i) {
                    if ("__proto__" === s)
                        continue;
                    let t = i[s]
                      , n = e;
                    n[s] = ec(t) && Array.isArray(t) ? t.map(e=>eq(n[s], e)) : eq(n[s], t)
                }
            }
            return e
        }
        function eV(e, t) {
            return !!eK(t, t=>t.enable && eB(e, t.mode))
        }
        function eH(e, t, i) {
            eX(t, t=>{
                let s = t.mode;
                t.enable && eB(e, s) && eX(t.selectors, e=>{
                    i(e, t)
                }
                )
            }
            )
        }
        function eW(e, t) {
            if (t && e)
                return eK(e, e=>(function(e, t) {
                    let i = eX(t, t=>e.matches(t));
                    return ed(i) ? i.some(e=>e) : i
                }
                )(t, e.selectors))
        }
        function eN(e) {
            return {
                position: e.getPosition(),
                radius: e.getRadius(),
                mass: e.getMass(),
                velocity: e.velocity,
                factor: ep.create(eS(e.options.bounce.horizontal.value), eS(e.options.bounce.vertical.value))
            }
        }
        function eY(e, t) {
            let {x: i, y: s} = e.velocity.sub(t.velocity)
              , [n,a] = [e.position, t.position]
              , {dx: r, dy: o} = eE(a, n);
            if (i * r + s * o < 0)
                return;
            let l = -Math.atan2(o, r)
              , c = e.mass
              , d = t.mass
              , u = e.velocity.rotate(l)
              , h = t.velocity.rotate(l)
              , p = ez(u, h, c, d)
              , f = ez(h, u, c, d)
              , m = p.rotate(-l)
              , g = f.rotate(-l);
            e.velocity.x = m.x * e.factor.x,
            e.velocity.y = m.y * e.factor.y,
            t.velocity.x = g.x * t.factor.x,
            t.velocity.y = g.y * t.factor.y
        }
        function eU(e, t) {
            let i = eG(e.getPosition(), e.getRadius())
              , s = e.options.bounce
              , n = eD({
                pSide: {
                    min: i.left,
                    max: i.right
                },
                pOtherSide: {
                    min: i.top,
                    max: i.bottom
                },
                rectSide: {
                    min: t.left,
                    max: t.right
                },
                rectOtherSide: {
                    min: t.top,
                    max: t.bottom
                },
                velocity: e.velocity.x,
                factor: eS(s.horizontal.value)
            });
            n.bounced && (void 0 !== n.velocity && (e.velocity.x = n.velocity),
            void 0 !== n.position && (e.position.x = n.position));
            let a = eD({
                pSide: {
                    min: i.top,
                    max: i.bottom
                },
                pOtherSide: {
                    min: i.left,
                    max: i.right
                },
                rectSide: {
                    min: t.top,
                    max: t.bottom
                },
                rectOtherSide: {
                    min: t.left,
                    max: t.right
                },
                velocity: e.velocity.y,
                factor: eS(s.vertical.value)
            });
            a.bounced && (void 0 !== a.velocity && (e.velocity.y = a.velocity),
            void 0 !== a.position && (e.position.y = a.position))
        }
        function eX(e, t) {
            return ed(e) ? e.map((e,i)=>t(e, i)) : t(e, 0)
        }
        function eZ(e, t, i) {
            return ed(e) ? ej(e, t, i) : e
        }
        function eK(e, t) {
            return ed(e) ? e.find((e,i)=>t(e, i)) : t(e, 0) ? e : void 0
        }
        function eQ(e, t) {
            let i = e.value
              , s = e.animation
              , r = {
                delayTime: eS(s.delay) * ea,
                enable: s.enable,
                value: eS(e.value) * t,
                max: eT(i) * t,
                min: eC(i) * t,
                loops: 0,
                maxLoops: eS(s.count),
                time: 0
            };
            if (s.enable) {
                switch (r.decay = 1 - eS(s.decay),
                s.mode) {
                case n.increase:
                    r.status = a.increasing;
                    break;
                case n.decrease:
                    r.status = a.decreasing;
                    break;
                case n.random:
                    r.status = eb() >= .5 ? a.increasing : a.decreasing
                }
                let e = s.mode === n.auto;
                switch (s.startValue) {
                case c.min:
                    r.value = r.min,
                    e && (r.status = a.increasing);
                    break;
                case c.max:
                    r.value = r.max,
                    e && (r.status = a.decreasing);
                    break;
                case c.random:
                default:
                    r.value = e_(r),
                    e && (r.status = eb() >= .5 ? a.increasing : a.decreasing)
                }
            }
            return r.initialValue = r.value,
            r
        }
        function eJ(e, t) {
            return function(e, t) {
                if (e.mode !== l.percent) {
                    let {mode: t, ...i} = e;
                    return i
                }
                return "x"in e ? {
                    x: e.x / en * t.width,
                    y: e.y / en * t.height
                } : {
                    width: e.width / en * t.width,
                    height: e.height / en * t.height
                }
            }(e, t)
        }
        function e0(e, t, i, s, n) {
            if (e.destroyed || !t || !t.enable || (t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0))
                return;
            let o = (t.velocity ?? 0) * n.factor
              , l = t.min
              , c = t.max
              , d = t.decay ?? 1;
            if (t.time || (t.time = 0),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += n.value),
            !((t.delayTime ?? 0) > 0) || !(t.time < (t.delayTime ?? 0))) {
                switch (t.status) {
                case a.increasing:
                    t.value >= c ? (i ? t.status = a.decreasing : t.value -= c,
                    t.loops || (t.loops = 0),
                    t.loops++) : t.value += o;
                    break;
                case a.decreasing:
                    t.value <= l ? (i ? t.status = a.increasing : t.value += c,
                    t.loops || (t.loops = 0),
                    t.loops++) : t.value -= o
                }
                t.velocity && 1 !== d && (t.velocity *= d),
                function(e, t, i, s, n) {
                    switch (t) {
                    case r.max:
                        i >= n && e.destroy();
                        break;
                    case r.min:
                        i <= s && e.destroy()
                    }
                }(e, s, t.value, l, c),
                e.destroyed || (t.value = ew(t.value, l, c))
            }
        }
        (R = d || (d = {})).darken = "darken",
        R.enlighten = "enlighten",
        (A = u || (u = {}))[A.r = 1] = "r",
        A[A.g = 2] = "g",
        A[A.b = 3] = "b",
        A[A.a = 4] = "a";
        let e1 = "random"
          , e2 = new Map;
        function e5(e) {
            e2.set(e.key, e)
        }
        function e3(e, t, i=!0) {
            if (!e)
                return;
            let s = eo(e) ? {
                value: e
            } : e;
            if (eo(s.value))
                return function e(t, i, s=!0) {
                    if (!t)
                        return;
                    let n = eo(t) ? {
                        value: t
                    } : t;
                    if (eo(n.value))
                        return n.value === e1 ? e7() : function(e) {
                            for (let[,t] of e2)
                                if (e.startsWith(t.stringPrefix))
                                    return t.parseString(e);
                            let t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (e,t,i,s,n)=>t + t + i + i + s + s + (void 0 !== n ? n + n : ""))
                              , i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);
                            return i ? {
                                a: void 0 !== i[u.a] ? parseInt(i[u.a], 16) / 255 : 1,
                                b: parseInt(i[u.b], 16),
                                g: parseInt(i[u.g], 16),
                                r: parseInt(i[u.r], 16)
                            } : void 0
                        }(n.value);
                    if (ed(n.value))
                        return e({
                            value: ej(n.value, i, s)
                        });
                    for (let[,e] of e2) {
                        let t = e.handleColor(n);
                        if (t)
                            return t
                    }
                }(s.value, t, i);
            if (ed(s.value))
                return e3({
                    value: ej(s.value, t, i)
                });
            for (let[,e] of e2) {
                let t = e.handleRangeColor(s);
                if (t)
                    return t
            }
        }
        function e6(e, t, i=!0) {
            let s = e3(e, t, i);
            return s ? e4(s) : void 0
        }
        function e4(e) {
            let t = e.r / 255
              , i = e.g / 255
              , s = e.b / 255
              , n = Math.max(t, i, s)
              , a = Math.min(t, i, s)
              , r = {
                h: 0,
                l: (n + a) * .5,
                s: 0
            };
            return n !== a && (r.s = r.l < .5 ? (n - a) / (n + a) : (n - a) / (2 - n - a),
            r.h = t === n ? (i - s) / (n - a) : r.h = i === n ? 2 + (s - t) / (n - a) : 4 + (t - i) / (n - a)),
            r.l *= 100,
            r.s *= 100,
            r.h *= 60,
            r.h < 0 && (r.h += 360),
            r.h >= 360 && (r.h -= 360),
            r
        }
        function e8(e) {
            let t = (e.h % 360 + 360) % 360
              , i = Math.max(0, Math.min(100, e.s))
              , s = Math.max(0, Math.min(100, e.l))
              , n = t / 360
              , a = i / 100
              , r = s / 100;
            if (0 === i) {
                let e = Math.round(255 * r);
                return {
                    r: e,
                    g: e,
                    b: e
                }
            }
            let o = (e,t,i)=>(i < 0 && i++,
            i > 1 && i--,
            6 * i < 1) ? e + (t - e) * 6 * i : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (.6666666666666666 - i) * 6 : e
              , l = r < .5 ? r * (1 + a) : r + a - r * a
              , c = 2 * r - l;
            return {
                r: Math.round(Math.min(255, 255 * o(c, l, n + .3333333333333333))),
                g: Math.round(Math.min(255, 255 * o(c, l, n))),
                b: Math.round(Math.min(255, 255 * o(c, l, n - .3333333333333333)))
            }
        }
        function e7(e) {
            let t = e ?? 0;
            return {
                b: Math.floor(e_(eM(t, 256))),
                g: Math.floor(e_(eM(t, 256))),
                r: Math.floor(e_(eM(t, 256)))
            }
        }
        function e9(e, t) {
            return `rgba(${e.r}, ${e.g}, ${e.b}, ${t ?? 1})`
        }
        function te(e, t) {
            return `hsla(${e.h}, ${e.s}%, ${e.l}%, ${t ?? 1})`
        }
        function tt(e, t, i, s) {
            let n = e
              , a = t;
            return void 0 === n.r && (n = e8(e)),
            void 0 === a.r && (a = e8(t)),
            {
                b: ex(n.b, a.b, i, s),
                g: ex(n.g, a.g, i, s),
                r: ex(n.r, a.r, i, s)
            }
        }
        function ti(e, t, i) {
            if (i === e1)
                return e7();
            if ("mid" !== i)
                return i;
            {
                let i = e.getFillColor() ?? e.getStrokeColor()
                  , s = t?.getFillColor() ?? t?.getStrokeColor();
                if (i && s && t)
                    return tt(i, s, e.getRadius(), t.getRadius());
                {
                    let e = i ?? s;
                    if (e)
                        return e8(e)
                }
            }
        }
        function ts(e, t, i) {
            let s = eo(e) ? e : e.value;
            return s === e1 ? i ? e3({
                value: s
            }) : t ? e1 : "mid" : "mid" === s ? "mid" : e3({
                value: s
            })
        }
        function tn(e) {
            return void 0 !== e ? {
                h: e.h.value,
                s: e.s.value,
                l: e.l.value
            } : void 0
        }
        function ta(e, t, i) {
            let s = {
                h: {
                    enable: !1,
                    value: e.h
                },
                s: {
                    enable: !1,
                    value: e.s
                },
                l: {
                    enable: !1,
                    value: e.l
                }
            };
            return t && (tr(s.h, t.h, i),
            tr(s.s, t.s, i),
            tr(s.l, t.l, i)),
            s
        }
        function tr(e, t, i) {
            e.enable = t.enable,
            e.enable ? (e.velocity = eS(t.speed) / en * i,
            e.decay = 1 - eS(t.decay),
            e.status = a.increasing,
            e.loops = 0,
            e.maxLoops = eS(t.count),
            e.time = 0,
            e.delayTime = eS(t.delay) * ea,
            t.sync || (e.velocity *= eb(),
            e.value *= eb()),
            e.initialValue = e.value,
            e.offset = eM(t.offset)) : e.velocity = 0
        }
        function to(e, t, i, s) {
            if (!e || !e.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0) || (e.time || (e.time = 0),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += s.value),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0)))
                return;
            let n = e.offset ? e_(e.offset) : 0
              , r = (e.velocity ?? 0) * s.factor + 3.6 * n
              , o = e.decay ?? 1
              , l = eT(t)
              , c = eC(t);
            i && e.status !== a.increasing ? (e.value -= r,
            e.value < 0 && (e.loops || (e.loops = 0),
            e.loops++,
            e.status = a.increasing)) : (e.value += r,
            e.value > l && (e.loops || (e.loops = 0),
            e.loops++,
            i ? e.status = a.decreasing : e.value -= l)),
            e.velocity && 1 !== o && (e.velocity *= o),
            e.value = ew(e.value, c, l)
        }
        function tl(e, t) {
            if (!e)
                return;
            let {h: i, s, l: n} = e
              , a = {
                h: {
                    min: 0,
                    max: 360
                },
                s: {
                    min: 0,
                    max: 100
                },
                l: {
                    min: 0,
                    max: 100
                }
            };
            i && to(i, a.h, !1, t),
            s && to(s, a.s, !0, t),
            n && to(n, a.l, !0, t)
        }
        let tc = {
            a: 1,
            b: 0,
            c: 0,
            d: 1
        };
        function td(e, t, i) {
            e.beginPath(),
            e.moveTo(t.x, t.y),
            e.lineTo(i.x, i.y),
            e.closePath()
        }
        function tu(e, t) {
            e.clearRect(0, 0, t.width, t.height)
        }
        function th(e, t, i=!1) {
            if (!t || !e)
                return;
            let s = e.style;
            if (s)
                for (let e in t) {
                    let n = t[e];
                    n && s.setProperty(e, n, i ? "important" : "")
                }
        }
        class tp {
            constructor(e) {
                this.container = e,
                this._applyPostDrawUpdaters = e=>{
                    for (let t of this._postDrawUpdaters)
                        t.afterDraw?.(e)
                }
                ,
                this._applyPreDrawUpdaters = (e,t,i,s,n,a)=>{
                    for (let r of this._preDrawUpdaters) {
                        if (r.getColorStyles) {
                            let {fill: a, stroke: o} = r.getColorStyles(t, e, i, s);
                            a && (n.fill = a),
                            o && (n.stroke = o)
                        }
                        if (r.getTransformValues) {
                            let e = r.getTransformValues(t);
                            for (let t in e)
                                !function(e, t, i) {
                                    let s = t[i];
                                    void 0 !== s && (e[i] = (e[i] ?? 1) * s)
                                }(a, e, t)
                        }
                        r.beforeDraw?.(t)
                    }
                }
                ,
                this._applyResizePlugins = ()=>{
                    for (let e of this._resizePlugins)
                        e.resize?.()
                }
                ,
                this._getPluginParticleColors = e=>{
                    let t, i;
                    for (let s of this._colorPlugins)
                        if (!t && s.particleFillColor && (t = e6(s.particleFillColor(e))),
                        !i && s.particleStrokeColor && (i = e6(s.particleStrokeColor(e))),
                        t && i)
                            break;
                    return [t, i]
                }
                ,
                this._initCover = async()=>{
                    let e = this.container.actualOptions.backgroundMask.cover
                      , t = e.color;
                    if (t) {
                        let i = e3(t);
                        if (i) {
                            let t = {
                                ...i,
                                a: e.opacity
                            };
                            this._coverColorStyle = e9(t, t.a)
                        }
                    } else
                        await new Promise((t,i)=>{
                            if (!e.image)
                                return;
                            let s = document.createElement("img");
                            s.addEventListener("load", ()=>{
                                this._coverImage = {
                                    image: s,
                                    opacity: e.opacity
                                },
                                t()
                            }
                            ),
                            s.addEventListener("error", e=>{
                                i(e.error)
                            }
                            ),
                            s.src = e.image
                        }
                        )
                }
                ,
                this._initStyle = ()=>{
                    let e = this.element
                      , t = this.container.actualOptions;
                    if (e)
                        for (let i in this._fullScreen ? (this._originalStyle = eq({}, e.style),
                        this._setFullScreenStyle()) : this._resetOriginalStyle(),
                        t.style) {
                            if (!i || !t.style)
                                continue;
                            let s = t.style[i];
                            s && e.style.setProperty(i, s, "important")
                        }
                }
                ,
                this._initTrail = async()=>{
                    let e = this.container.actualOptions.particles.move.trail
                      , t = e.fill;
                    if (!e.enable)
                        return;
                    let i = 1 / e.length;
                    if (t.color) {
                        let e = e3(t.color);
                        if (!e)
                            return;
                        this._trailFill = {
                            color: {
                                ...e
                            },
                            opacity: i
                        }
                    } else
                        await new Promise((e,s)=>{
                            if (!t.image)
                                return;
                            let n = document.createElement("img");
                            n.addEventListener("load", ()=>{
                                this._trailFill = {
                                    image: n,
                                    opacity: i
                                },
                                e()
                            }
                            ),
                            n.addEventListener("error", e=>{
                                s(e.error)
                            }
                            ),
                            n.src = t.image
                        }
                        )
                }
                ,
                this._paintBase = e=>{
                    this.draw(t=>{
                        var i;
                        return i = this.size,
                        void (t.fillStyle = e ?? "rgba(0,0,0,0)",
                        t.fillRect(0, 0, i.width, i.height))
                    }
                    )
                }
                ,
                this._paintImage = (e,t)=>{
                    this.draw(i=>{
                        var s;
                        return s = this.size,
                        void (e && (i.globalAlpha = t,
                        i.drawImage(e, 0, 0, s.width, s.height),
                        i.globalAlpha = 1))
                    }
                    )
                }
                ,
                this._repairStyle = ()=>{
                    let e = this.element;
                    e && (this._safeMutationObserver(e=>e.disconnect()),
                    this._initStyle(),
                    this.initBackground(),
                    this._safeMutationObserver(t=>{
                        e && e instanceof Node && t.observe(e, {
                            attributes: !0
                        })
                    }
                    ))
                }
                ,
                this._resetOriginalStyle = ()=>{
                    let e = this.element
                      , t = this._originalStyle;
                    e && t && th(e, t)
                }
                ,
                this._safeMutationObserver = e=>{
                    this._mutationObserver && e(this._mutationObserver)
                }
                ,
                this._setFullScreenStyle = ()=>{
                    let e = this.element;
                    e && th(e, {
                        position: "fixed",
                        zIndex: this.container.actualOptions.fullScreen.zIndex.toString(10),
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }, !0)
                }
                ,
                this.size = {
                    height: 0,
                    width: 0
                },
                this._context = null,
                this._generated = !1,
                this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this._resizePlugins = [],
                this._colorPlugins = []
            }
            get _fullScreen() {
                return this.container.actualOptions.fullScreen.enable
            }
            clear() {
                let e = this.container.actualOptions
                  , t = e.particles.move.trail
                  , i = this._trailFill;
                e.backgroundMask.enable ? this.paint() : t.enable && t.length > 0 && i ? i.color ? this._paintBase(e9(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : e.clear && this.draw(e=>{
                    tu(e, this.size)
                }
                )
            }
            destroy() {
                if (this.stop(),
                this._generated) {
                    let e = this.element;
                    e?.remove()
                } else
                    this._resetOriginalStyle();
                this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this._resizePlugins = [],
                this._colorPlugins = []
            }
            draw(e) {
                let t = this._context;
                if (t)
                    return e(t)
            }
            drawAsync(e) {
                let t = this._context;
                if (t)
                    return e(t)
            }
            drawParticle(e, t) {
                if (e.spawning || e.destroyed)
                    return;
                let i = e.getRadius();
                if (i <= 0)
                    return;
                let s = e.getFillColor()
                  , n = e.getStrokeColor() ?? s
                  , [a,r] = this._getPluginParticleColors(e);
                a || (a = s),
                r || (r = n),
                (a || r) && this.draw(s=>{
                    let n = this.container
                      , o = n.actualOptions
                      , l = e.options.zIndex
                      , c = 1 - e.zIndexFactor
                      , d = c ** l.opacityRate
                      , u = e.bubble.opacity ?? e.opacity?.value ?? 1
                      , h = e.strokeOpacity ?? u
                      , p = u * d
                      , f = {}
                      , m = {
                        fill: a ? te(a, p) : void 0
                    };
                    m.stroke = r ? te(r, h * d) : m.fill,
                    this._applyPreDrawUpdaters(s, e, i, p, m, f),
                    function(e) {
                        let {container: t, context: i, particle: s, delta: n, colorStyles: a, backgroundMask: r, composite: o, radius: l, opacity: c, shadow: d, transform: u} = e
                          , h = s.getPosition()
                          , p = s.rotation + (s.pathRotation ? s.velocity.angle : 0)
                          , f = {
                            sin: Math.sin(p),
                            cos: Math.cos(p)
                        }
                          , m = !!p
                          , g = {
                            a: f.cos * (u.a ?? tc.a),
                            b: m ? f.sin * (u.b ?? 1) : u.b ?? tc.b,
                            c: m ? -f.sin * (u.c ?? 1) : u.c ?? tc.c,
                            d: f.cos * (u.d ?? tc.d)
                        };
                        i.setTransform(g.a, g.b, g.c, g.d, h.x, h.y),
                        r && (i.globalCompositeOperation = o);
                        let v = s.shadowColor;
                        d.enable && v && (i.shadowBlur = d.blur,
                        i.shadowColor = e9(v),
                        i.shadowOffsetX = d.offset.x,
                        i.shadowOffsetY = d.offset.y),
                        a.fill && (i.fillStyle = a.fill);
                        let y = s.strokeWidth ?? 0;
                        i.lineWidth = y,
                        a.stroke && (i.strokeStyle = a.stroke);
                        let b = {
                            container: t,
                            context: i,
                            particle: s,
                            radius: l,
                            opacity: c,
                            delta: n,
                            transformData: g,
                            strokeWidth: y
                        };
                        (function(e) {
                            let {container: t, context: i, particle: s, radius: n, opacity: a, delta: r, strokeWidth: o, transformData: l} = e;
                            if (!s.shape)
                                return;
                            let c = t.shapeDrawers.get(s.shape);
                            c && (i.beginPath(),
                            c.draw({
                                context: i,
                                particle: s,
                                radius: n,
                                opacity: a,
                                delta: r,
                                pixelRatio: t.retina.pixelRatio,
                                transformData: {
                                    ...l
                                }
                            }),
                            s.shapeClose && i.closePath(),
                            o > 0 && i.stroke(),
                            s.shapeFill && i.fill())
                        }
                        )(b),
                        function(e) {
                            let {container: t, context: i, particle: s, radius: n, opacity: a, delta: r, transformData: o} = e;
                            if (!s.shape)
                                return;
                            let l = t.shapeDrawers.get(s.shape);
                            l?.afterDraw && l.afterDraw({
                                context: i,
                                particle: s,
                                radius: n,
                                opacity: a,
                                delta: r,
                                pixelRatio: t.retina.pixelRatio,
                                transformData: {
                                    ...o
                                }
                            })
                        }(b),
                        function(e) {
                            let {container: t, context: i, particle: s, radius: n, opacity: a, delta: r, transformData: o} = e;
                            if (!s.effect)
                                return;
                            let l = t.effectDrawers.get(s.effect);
                            l && l.draw({
                                context: i,
                                particle: s,
                                radius: n,
                                opacity: a,
                                delta: r,
                                pixelRatio: t.retina.pixelRatio,
                                transformData: {
                                    ...o
                                }
                            })
                        }(b),
                        i.globalCompositeOperation = "source-over",
                        i.resetTransform()
                    }({
                        container: n,
                        context: s,
                        particle: e,
                        delta: t,
                        colorStyles: m,
                        backgroundMask: o.backgroundMask.enable,
                        composite: o.backgroundMask.composite,
                        radius: i * c ** l.sizeRate,
                        opacity: p,
                        shadow: e.options.shadow,
                        transform: f
                    }),
                    this._applyPostDrawUpdaters(e)
                }
                )
            }
            drawParticlePlugin(e, t, i) {
                this.draw(s=>{
                    e.drawParticle && e.drawParticle(s, t, i)
                }
                )
            }
            drawPlugin(e, t) {
                this.draw(i=>{
                    e.draw && e.draw(i, t)
                }
                )
            }
            async init() {
                this._safeMutationObserver(e=>e.disconnect()),
                this._mutationObserver = function(e) {
                    if (!eR() && "undefined" != typeof MutationObserver)
                        return new MutationObserver(e)
                }(e=>{
                    for (let t of e)
                        "attributes" === t.type && "style" === t.attributeName && this._repairStyle()
                }
                ),
                this.resize(),
                this._initStyle(),
                await this._initCover();
                try {
                    await this._initTrail()
                } catch (e) {
                    eI.error(e)
                }
                this.initBackground(),
                this._safeMutationObserver(e=>{
                    this.element && this.element instanceof Node && e.observe(this.element, {
                        attributes: !0
                    })
                }
                ),
                this.initUpdaters(),
                this.initPlugins(),
                this.paint()
            }
            initBackground() {
                let e = this.container.actualOptions.background
                  , t = this.element;
                if (!t)
                    return;
                let i = t.style;
                if (i) {
                    if (e.color) {
                        let t = e3(e.color);
                        i.backgroundColor = t ? e9(t, e.opacity) : ""
                    } else
                        i.backgroundColor = "";
                    i.backgroundImage = e.image || "",
                    i.backgroundPosition = e.position || "",
                    i.backgroundRepeat = e.repeat || "",
                    i.backgroundSize = e.size || ""
                }
            }
            initPlugins() {
                for (let[,e] of (this._resizePlugins = [],
                this.container.plugins))
                    e.resize && this._resizePlugins.push(e),
                    (e.particleFillColor ?? e.particleStrokeColor) && this._colorPlugins.push(e)
            }
            initUpdaters() {
                for (let e of (this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this.container.particles.updaters))
                    e.afterDraw && this._postDrawUpdaters.push(e),
                    (e.getColorStyles ?? e.getTransformValues ?? e.beforeDraw) && this._preDrawUpdaters.push(e)
            }
            loadCanvas(e) {
                this._generated && this.element && this.element.remove(),
                this._generated = e.dataset && J in e.dataset ? "true" === e.dataset[J] : this._generated,
                this.element = e,
                this.element.ariaHidden = "true",
                this._originalStyle = eq({}, this.element.style),
                this.size.height = e.offsetHeight,
                this.size.width = e.offsetWidth,
                this._context = this.element.getContext("2d"),
                this._safeMutationObserver(e=>{
                    this.element && this.element instanceof Node && e.observe(this.element, {
                        attributes: !0
                    })
                }
                ),
                this.container.retina.init(),
                this.initBackground()
            }
            paint() {
                let e = this.container.actualOptions;
                this.draw(t=>{
                    e.backgroundMask.enable && e.backgroundMask.cover ? (tu(t, this.size),
                    this._coverImage ? this._paintImage(this._coverImage.image, this._coverImage.opacity) : this._coverColorStyle ? this._paintBase(this._coverColorStyle) : this._paintBase()) : this._paintBase()
                }
                )
            }
            resize() {
                if (!this.element)
                    return !1;
                let e = this.container
                  , t = e.retina.pixelRatio
                  , i = e.canvas.size
                  , s = {
                    width: this.element.offsetWidth * t,
                    height: this.element.offsetHeight * t
                };
                if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width)
                    return !1;
                let n = {
                    ...i
                };
                return this.element.width = i.width = this.element.offsetWidth * t,
                this.element.height = i.height = this.element.offsetHeight * t,
                this.container.started && e.particles.setResizeFactor({
                    width: i.width / n.width,
                    height: i.height / n.height
                }),
                !0
            }
            stop() {
                this._safeMutationObserver(e=>e.disconnect()),
                this._mutationObserver = void 0,
                this.draw(e=>tu(e, this.size))
            }
            async windowResize() {
                if (!this.element || !this.resize())
                    return;
                let e = this.container
                  , t = e.updateActualOptions();
                e.particles.setDensity(),
                this._applyResizePlugins(),
                t && await e.refresh()
            }
        }
        function tf(e, t, i, s, n) {
            if (s) {
                let s = {
                    passive: !0
                };
                er(n) ? s.capture = n : void 0 !== n && (s = n),
                e.addEventListener(t, i, s)
            } else
                e.removeEventListener(t, i, n)
        }
        (B = h || (h = {})).canvas = "canvas",
        B.parent = "parent",
        B.window = "window";
        class tm {
            constructor(e) {
                this.container = e,
                this._doMouseTouchClick = e=>{
                    let t = this.container
                      , i = t.actualOptions;
                    if (this._canPush) {
                        let e = t.interactivity.mouse
                          , s = e.position;
                        if (!s)
                            return;
                        e.clickPosition = {
                            ...s
                        },
                        e.clickTime = new Date().getTime(),
                        eX(i.interactivity.events.onClick.mode, e=>this.container.handleClickMode(e))
                    }
                    "touchend" === e.type && setTimeout(()=>this._mouseTouchFinish(), 500)
                }
                ,
                this._handleThemeChange = e=>{
                    let t = this.container
                      , i = t.options
                      , s = i.defaultThemes
                      , n = e.matches ? s.dark : s.light
                      , a = i.themes.find(e=>e.name === n);
                    a?.default.auto && t.loadTheme(n)
                }
                ,
                this._handleVisibilityChange = ()=>{
                    let e = this.container
                      , t = e.actualOptions;
                    this._mouseTouchFinish(),
                    t.pauseOnBlur && (document?.hidden ? (e.pageHidden = !0,
                    e.pause()) : (e.pageHidden = !1,
                    e.animationStatus ? e.play(!0) : e.draw(!0)))
                }
                ,
                this._handleWindowResize = ()=>{
                    this._resizeTimeout && (clearTimeout(this._resizeTimeout),
                    delete this._resizeTimeout);
                    let e = async()=>{
                        let e = this.container.canvas;
                        await e?.windowResize()
                    }
                    ;
                    this._resizeTimeout = setTimeout(()=>void e(), this.container.actualOptions.interactivity.events.resize.delay * ea)
                }
                ,
                this._manageInteractivityListeners = (e,t)=>{
                    let i = this._handlers
                      , s = this.container
                      , n = s.actualOptions
                      , a = s.interactivity.element;
                    if (!a)
                        return;
                    let r = s.canvas.element;
                    r && (r.style.pointerEvents = a === r ? "initial" : "none"),
                    (n.interactivity.events.onHover.enable || n.interactivity.events.onClick.enable) && (tf(a, et, i.mouseMove, t),
                    tf(a, "touchstart", i.touchStart, t),
                    tf(a, "touchmove", i.touchMove, t),
                    n.interactivity.events.onClick.enable ? (tf(a, ei, i.touchEndClick, t),
                    tf(a, "pointerup", i.mouseUp, t),
                    tf(a, "pointerdown", i.mouseDown, t)) : tf(a, ei, i.touchEnd, t),
                    tf(a, e, i.mouseLeave, t),
                    tf(a, "touchcancel", i.touchCancel, t))
                }
                ,
                this._manageListeners = e=>{
                    let t = this._handlers
                      , i = this.container
                      , s = i.actualOptions.interactivity.detectsOn
                      , n = i.canvas.element
                      , a = ee;
                    s === h.window ? (i.interactivity.element = window,
                    a = "pointerout") : s === h.parent && n ? i.interactivity.element = n.parentElement ?? n.parentNode : i.interactivity.element = n,
                    this._manageMediaMatch(e),
                    this._manageResize(e),
                    this._manageInteractivityListeners(a, e),
                    document && tf(document, "visibilitychange", t.visibilityChange, e, !1)
                }
                ,
                this._manageMediaMatch = e=>{
                    let t = this._handlers
                      , i = eA("(prefers-color-scheme: dark)");
                    if (i) {
                        if (void 0 !== i.addEventListener) {
                            tf(i, "change", t.themeChange, e);
                            return
                        }
                        void 0 !== i.addListener && (e ? i.addListener(t.oldThemeChange) : i.removeListener(t.oldThemeChange))
                    }
                }
                ,
                this._manageResize = e=>{
                    let t = this._handlers
                      , i = this.container;
                    if (!i.actualOptions.interactivity.events.resize)
                        return;
                    if ("undefined" == typeof ResizeObserver) {
                        tf(window, "resize", t.resize, e);
                        return
                    }
                    let s = i.canvas.element;
                    this._resizeObserver && !e ? (s && this._resizeObserver.unobserve(s),
                    this._resizeObserver.disconnect(),
                    delete this._resizeObserver) : !this._resizeObserver && e && s && (this._resizeObserver = new ResizeObserver(e=>{
                        e.find(e=>e.target === s) && this._handleWindowResize()
                    }
                    ),
                    this._resizeObserver.observe(s))
                }
                ,
                this._mouseDown = ()=>{
                    let {interactivity: e} = this.container;
                    if (!e)
                        return;
                    let {mouse: t} = e;
                    t.clicking = !0,
                    t.downPosition = t.position
                }
                ,
                this._mouseTouchClick = e=>{
                    let t = this.container
                      , i = t.actualOptions
                      , {mouse: s} = t.interactivity;
                    s.inside = !0;
                    let n = !1
                      , a = s.position;
                    if (a && i.interactivity.events.onClick.enable) {
                        for (let[,e] of t.plugins)
                            if (e.clickPositionValid && (n = e.clickPositionValid(a)))
                                break;
                        n || this._doMouseTouchClick(e),
                        s.clicking = !1
                    }
                }
                ,
                this._mouseTouchFinish = ()=>{
                    let e = this.container.interactivity;
                    if (!e)
                        return;
                    let t = e.mouse;
                    delete t.position,
                    delete t.clickPosition,
                    delete t.downPosition,
                    e.status = ee,
                    t.inside = !1,
                    t.clicking = !1
                }
                ,
                this._mouseTouchMove = e=>{
                    let t;
                    let i = this.container
                      , s = i.actualOptions
                      , n = i.interactivity
                      , a = i.canvas.element;
                    if (!n?.element)
                        return;
                    if (n.mouse.inside = !0,
                    e.type.startsWith("pointer")) {
                        if (this._canPush = !0,
                        n.element === window) {
                            if (a) {
                                let i = a.getBoundingClientRect();
                                t = {
                                    x: e.clientX - i.left,
                                    y: e.clientY - i.top
                                }
                            }
                        } else if (s.interactivity.detectsOn === h.parent) {
                            let i = e.target
                              , s = e.currentTarget;
                            if (i && s && a) {
                                let n = i.getBoundingClientRect()
                                  , r = s.getBoundingClientRect()
                                  , o = a.getBoundingClientRect();
                                t = {
                                    x: e.offsetX + 2 * n.left - (r.left + o.left),
                                    y: e.offsetY + 2 * n.top - (r.top + o.top)
                                }
                            } else
                                t = {
                                    x: e.offsetX ?? e.clientX,
                                    y: e.offsetY ?? e.clientY
                                }
                        } else
                            e.target === a && (t = {
                                x: e.offsetX ?? e.clientX,
                                y: e.offsetY ?? e.clientY
                            })
                    } else if (this._canPush = "touchmove" !== e.type,
                    a) {
                        let i = e.touches[e.touches.length - 1]
                          , s = a.getBoundingClientRect();
                        t = {
                            x: i.clientX - (s.left ?? 0),
                            y: i.clientY - (s.top ?? 0)
                        }
                    }
                    let r = i.retina.pixelRatio;
                    t && (t.x *= r,
                    t.y *= r),
                    n.mouse.position = t,
                    n.status = et
                }
                ,
                this._touchEnd = e=>{
                    for (let t of Array.from(e.changedTouches))
                        this._touches.delete(t.identifier);
                    this._mouseTouchFinish()
                }
                ,
                this._touchEndClick = e=>{
                    for (let t of Array.from(e.changedTouches))
                        this._touches.delete(t.identifier);
                    this._mouseTouchClick(e)
                }
                ,
                this._touchStart = e=>{
                    for (let t of Array.from(e.changedTouches))
                        this._touches.set(t.identifier, performance.now());
                    this._mouseTouchMove(e)
                }
                ,
                this._canPush = !0,
                this._touches = new Map,
                this._handlers = {
                    mouseDown: ()=>this._mouseDown(),
                    mouseLeave: ()=>this._mouseTouchFinish(),
                    mouseMove: e=>this._mouseTouchMove(e),
                    mouseUp: e=>this._mouseTouchClick(e),
                    touchStart: e=>this._touchStart(e),
                    touchMove: e=>this._mouseTouchMove(e),
                    touchEnd: e=>this._touchEnd(e),
                    touchCancel: e=>this._touchEnd(e),
                    touchEndClick: e=>this._touchEndClick(e),
                    visibilityChange: ()=>this._handleVisibilityChange(),
                    themeChange: e=>this._handleThemeChange(e),
                    oldThemeChange: e=>this._handleThemeChange(e),
                    resize: ()=>{
                        this._handleWindowResize()
                    }
                }
            }
            addListeners() {
                this._manageListeners(!0)
            }
            removeListeners() {
                this._manageListeners(!1)
            }
        }
        (F = p || (p = {})).configAdded = "configAdded",
        F.containerInit = "containerInit",
        F.particlesSetup = "particlesSetup",
        F.containerStarted = "containerStarted",
        F.containerStopped = "containerStopped",
        F.containerDestroyed = "containerDestroyed",
        F.containerPaused = "containerPaused",
        F.containerPlay = "containerPlay",
        F.containerBuilt = "containerBuilt",
        F.particleAdded = "particleAdded",
        F.particleDestroyed = "particleDestroyed",
        F.particleRemoved = "particleRemoved";
        class tg {
            constructor() {
                this.value = ""
            }
            static create(e, t) {
                let i = new tg;
                return i.load(e),
                void 0 !== t && (eo(t) || ed(t) ? i.load({
                    value: t
                }) : i.load(t)),
                i
            }
            load(e) {
                e?.value !== void 0 && (this.value = e.value)
            }
        }
        class tv {
            constructor() {
                this.color = new tg,
                this.color.value = "",
                this.image = "",
                this.position = "",
                this.repeat = "",
                this.size = "",
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = tg.create(this.color, e.color)),
                void 0 !== e.image && (this.image = e.image),
                void 0 !== e.position && (this.position = e.position),
                void 0 !== e.repeat && (this.repeat = e.repeat),
                void 0 !== e.size && (this.size = e.size),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class ty {
            constructor() {
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = tg.create(this.color, e.color)),
                void 0 !== e.image && (this.image = e.image),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class tb {
            constructor() {
                this.composite = "destination-out",
                this.cover = new ty,
                this.enable = !1
            }
            load(e) {
                if (e) {
                    if (void 0 !== e.composite && (this.composite = e.composite),
                    void 0 !== e.cover) {
                        let t = e.cover
                          , i = eo(e.cover) ? {
                            color: e.cover
                        } : e.cover;
                        this.cover.load(void 0 !== t.color || void 0 !== t.image ? t : {
                            color: i
                        })
                    }
                    void 0 !== e.enable && (this.enable = e.enable)
                }
            }
        }
        class tw {
            constructor() {
                this.enable = !0,
                this.zIndex = 0
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.zIndex && (this.zIndex = e.zIndex))
            }
        }
        class tx {
            constructor() {
                this.enable = !1,
                this.mode = []
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode))
            }
        }
        (j = f || (f = {})).circle = "circle",
        j.rectangle = "rectangle";
        class t_ {
            constructor() {
                this.selectors = [],
                this.enable = !1,
                this.mode = [],
                this.type = f.circle
            }
            load(e) {
                e && (void 0 !== e.selectors && (this.selectors = e.selectors),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.type && (this.type = e.type))
            }
        }
        class tS {
            constructor() {
                this.enable = !1,
                this.force = 2,
                this.smooth = 10
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.force && (this.force = e.force),
                void 0 !== e.smooth && (this.smooth = e.smooth))
            }
        }
        class tC {
            constructor() {
                this.enable = !1,
                this.mode = [],
                this.parallax = new tS
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode),
                this.parallax.load(e.parallax))
            }
        }
        class tT {
            constructor() {
                this.delay = .5,
                this.enable = !0
            }
            load(e) {
                void 0 !== e && (void 0 !== e.delay && (this.delay = e.delay),
                void 0 !== e.enable && (this.enable = e.enable))
            }
        }
        class tM {
            constructor() {
                this.onClick = new tx,
                this.onDiv = new t_,
                this.onHover = new tC,
                this.resize = new tT
            }
            load(e) {
                if (!e)
                    return;
                this.onClick.load(e.onClick);
                let t = e.onDiv;
                void 0 !== t && (this.onDiv = eX(t, e=>{
                    let t = new t_;
                    return t.load(e),
                    t
                }
                )),
                this.onHover.load(e.onHover),
                this.resize.load(e.resize)
            }
        }
        class tE {
            constructor(e, t) {
                this._engine = e,
                this._container = t
            }
            load(e) {
                if (!e || !this._container)
                    return;
                let t = this._engine.interactors.get(this._container);
                if (t)
                    for (let i of t)
                        i.loadModeOptions && i.loadModeOptions(this, e)
            }
        }
        class tk {
            constructor(e, t) {
                this.detectsOn = h.window,
                this.events = new tM,
                this.modes = new tE(e,t)
            }
            load(e) {
                if (!e)
                    return;
                let t = e.detectsOn;
                void 0 !== t && (this.detectsOn = t),
                this.events.load(e.events),
                this.modes.load(e.modes)
            }
        }
        class tP {
            load(e) {
                e && (e.position && (this.position = {
                    x: e.position.x ?? 50,
                    y: e.position.y ?? 50,
                    mode: e.position.mode ?? l.percent
                }),
                e.options && (this.options = eq({}, e.options)))
            }
        }
        ($ = m || (m = {})).screen = "screen",
        $.canvas = "canvas";
        class tz {
            constructor() {
                this.maxWidth = 1 / 0,
                this.options = {},
                this.mode = m.canvas
            }
            load(e) {
                e && (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth),
                void 0 !== e.mode && (e.mode === m.screen ? this.mode = m.screen : this.mode = m.canvas),
                void 0 !== e.options && (this.options = eq({}, e.options)))
            }
        }
        (G = g || (g = {})).any = "any",
        G.dark = "dark",
        G.light = "light";
        class tO {
            constructor() {
                this.auto = !1,
                this.mode = g.any,
                this.value = !1
            }
            load(e) {
                e && (void 0 !== e.auto && (this.auto = e.auto),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.value && (this.value = e.value))
            }
        }
        class tI {
            constructor() {
                this.name = "",
                this.default = new tO
            }
            load(e) {
                e && (void 0 !== e.name && (this.name = e.name),
                this.default.load(e.default),
                void 0 !== e.options && (this.options = eq({}, e.options)))
            }
        }
        class tL {
            constructor() {
                this.count = 0,
                this.enable = !1,
                this.speed = 1,
                this.decay = 0,
                this.delay = 0,
                this.sync = !1
            }
            load(e) {
                e && (void 0 !== e.count && (this.count = eM(e.count)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.speed && (this.speed = eM(e.speed)),
                void 0 !== e.decay && (this.decay = eM(e.decay)),
                void 0 !== e.delay && (this.delay = eM(e.delay)),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class tD extends tL {
            constructor() {
                super(),
                this.mode = n.auto,
                this.startValue = c.random
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.startValue && (this.startValue = e.startValue))
            }
        }
        class tR extends tL {
            constructor() {
                super(),
                this.offset = 0,
                this.sync = !0
            }
            load(e) {
                super.load(e),
                e && void 0 !== e.offset && (this.offset = eM(e.offset))
            }
        }
        class tA {
            constructor() {
                this.h = new tR,
                this.s = new tR,
                this.l = new tR
            }
            load(e) {
                e && (this.h.load(e.h),
                this.s.load(e.s),
                this.l.load(e.l))
            }
        }
        class tB extends tg {
            constructor() {
                super(),
                this.animation = new tA
            }
            static create(e, t) {
                let i = new tB;
                return i.load(e),
                void 0 !== t && (eo(t) || ed(t) ? i.load({
                    value: t
                }) : i.load(t)),
                i
            }
            load(e) {
                if (super.load(e),
                !e)
                    return;
                let t = e.animation;
                void 0 !== t && (void 0 !== t.enable ? this.animation.h.load(t) : this.animation.load(e.animation))
            }
        }
        (q = v || (v = {})).absorb = "absorb",
        q.bounce = "bounce",
        q.destroy = "destroy";
        class tF {
            constructor() {
                this.speed = 2
            }
            load(e) {
                e && void 0 !== e.speed && (this.speed = e.speed)
            }
        }
        class tj {
            constructor() {
                this.enable = !0,
                this.retries = 0
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.retries && (this.retries = e.retries))
            }
        }
        class t$ {
            constructor() {
                this.value = 0
            }
            load(e) {
                e && void 0 !== e.value && (this.value = eM(e.value))
            }
        }
        class tG extends t$ {
            constructor() {
                super(),
                this.animation = new tL
            }
            load(e) {
                if (super.load(e),
                !e)
                    return;
                let t = e.animation;
                void 0 !== t && this.animation.load(t)
            }
        }
        class tq extends tG {
            constructor() {
                super(),
                this.animation = new tD
            }
            load(e) {
                super.load(e)
            }
        }
        class tV extends t$ {
            constructor() {
                super(),
                this.value = 1
            }
        }
        class tH {
            constructor() {
                this.horizontal = new tV,
                this.vertical = new tV
            }
            load(e) {
                e && (this.horizontal.load(e.horizontal),
                this.vertical.load(e.vertical))
            }
        }
        class tW {
            constructor() {
                this.absorb = new tF,
                this.bounce = new tH,
                this.enable = !1,
                this.maxSpeed = 50,
                this.mode = v.bounce,
                this.overlap = new tj
            }
            load(e) {
                e && (this.absorb.load(e.absorb),
                this.bounce.load(e.bounce),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.maxSpeed && (this.maxSpeed = eM(e.maxSpeed)),
                void 0 !== e.mode && (this.mode = e.mode),
                this.overlap.load(e.overlap))
            }
        }
        class tN {
            constructor() {
                this.close = !0,
                this.fill = !0,
                this.options = {},
                this.type = []
            }
            load(e) {
                if (!e)
                    return;
                let t = e.options;
                if (void 0 !== t)
                    for (let e in t) {
                        let i = t[e];
                        i && (this.options[e] = eq(this.options[e] ?? {}, i))
                    }
                void 0 !== e.close && (this.close = e.close),
                void 0 !== e.fill && (this.fill = e.fill),
                void 0 !== e.type && (this.type = e.type)
            }
        }
        class tY {
            constructor() {
                this.offset = 0,
                this.value = 90
            }
            load(e) {
                e && (void 0 !== e.offset && (this.offset = eM(e.offset)),
                void 0 !== e.value && (this.value = eM(e.value)))
            }
        }
        class tU {
            constructor() {
                this.distance = 200,
                this.enable = !1,
                this.rotate = {
                    x: 3e3,
                    y: 3e3
                }
            }
            load(e) {
                if (e && (void 0 !== e.distance && (this.distance = eM(e.distance)),
                void 0 !== e.enable && (this.enable = e.enable),
                e.rotate)) {
                    let t = e.rotate.x;
                    void 0 !== t && (this.rotate.x = t);
                    let i = e.rotate.y;
                    void 0 !== i && (this.rotate.y = i)
                }
            }
        }
        class tX {
            constructor() {
                this.x = 50,
                this.y = 50,
                this.mode = l.percent,
                this.radius = 0
            }
            load(e) {
                e && (void 0 !== e.x && (this.x = e.x),
                void 0 !== e.y && (this.y = e.y),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        class tZ {
            constructor() {
                this.acceleration = 9.81,
                this.enable = !1,
                this.inverse = !1,
                this.maxSpeed = 50
            }
            load(e) {
                e && (void 0 !== e.acceleration && (this.acceleration = eM(e.acceleration)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.inverse && (this.inverse = e.inverse),
                void 0 !== e.maxSpeed && (this.maxSpeed = eM(e.maxSpeed)))
            }
        }
        class tK {
            constructor() {
                this.clamp = !0,
                this.delay = new t$,
                this.enable = !1,
                this.options = {}
            }
            load(e) {
                e && (void 0 !== e.clamp && (this.clamp = e.clamp),
                this.delay.load(e.delay),
                void 0 !== e.enable && (this.enable = e.enable),
                this.generator = e.generator,
                e.options && (this.options = eq(this.options, e.options)))
            }
        }
        class tQ {
            load(e) {
                e && (void 0 !== e.color && (this.color = tg.create(this.color, e.color)),
                void 0 !== e.image && (this.image = e.image))
            }
        }
        class tJ {
            constructor() {
                this.enable = !1,
                this.length = 10,
                this.fill = new tQ
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.fill && this.fill.load(e.fill),
                void 0 !== e.length && (this.length = e.length))
            }
        }
        (V = y || (y = {})).bounce = "bounce",
        V.none = "none",
        V.out = "out",
        V.destroy = "destroy",
        V.split = "split";
        class t0 {
            constructor() {
                this.default = y.out
            }
            load(e) {
                e && (void 0 !== e.default && (this.default = e.default),
                this.bottom = e.bottom ?? e.default,
                this.left = e.left ?? e.default,
                this.right = e.right ?? e.default,
                this.top = e.top ?? e.default)
            }
        }
        class t1 {
            constructor() {
                this.acceleration = 0,
                this.enable = !1
            }
            load(e) {
                e && (void 0 !== e.acceleration && (this.acceleration = eM(e.acceleration)),
                void 0 !== e.enable && (this.enable = e.enable),
                e.position && (this.position = eq({}, e.position)))
            }
        }
        class t2 {
            constructor() {
                this.angle = new tY,
                this.attract = new tU,
                this.center = new tX,
                this.decay = 0,
                this.distance = {},
                this.direction = s.none,
                this.drift = 0,
                this.enable = !1,
                this.gravity = new tZ,
                this.path = new tK,
                this.outModes = new t0,
                this.random = !1,
                this.size = !1,
                this.speed = 2,
                this.spin = new t1,
                this.straight = !1,
                this.trail = new tJ,
                this.vibrate = !1,
                this.warp = !1
            }
            load(e) {
                if (!e)
                    return;
                this.angle.load(el(e.angle) ? {
                    value: e.angle
                } : e.angle),
                this.attract.load(e.attract),
                this.center.load(e.center),
                void 0 !== e.decay && (this.decay = eM(e.decay)),
                void 0 !== e.direction && (this.direction = e.direction),
                void 0 !== e.distance && (this.distance = el(e.distance) ? {
                    horizontal: e.distance,
                    vertical: e.distance
                } : {
                    ...e.distance
                }),
                void 0 !== e.drift && (this.drift = eM(e.drift)),
                void 0 !== e.enable && (this.enable = e.enable),
                this.gravity.load(e.gravity);
                let t = e.outModes;
                void 0 !== t && (ec(t) ? this.outModes.load(t) : this.outModes.load({
                    default: t
                })),
                this.path.load(e.path),
                void 0 !== e.random && (this.random = e.random),
                void 0 !== e.size && (this.size = e.size),
                void 0 !== e.speed && (this.speed = eM(e.speed)),
                this.spin.load(e.spin),
                void 0 !== e.straight && (this.straight = e.straight),
                this.trail.load(e.trail),
                void 0 !== e.vibrate && (this.vibrate = e.vibrate),
                void 0 !== e.warp && (this.warp = e.warp)
            }
        }
        class t5 extends tD {
            constructor() {
                super(),
                this.destroy = r.none,
                this.speed = 2
            }
            load(e) {
                super.load(e),
                e && void 0 !== e.destroy && (this.destroy = e.destroy)
            }
        }
        class t3 extends tq {
            constructor() {
                super(),
                this.animation = new t5,
                this.value = 1
            }
            load(e) {
                if (!e)
                    return;
                super.load(e);
                let t = e.animation;
                void 0 !== t && this.animation.load(t)
            }
        }
        class t6 {
            constructor() {
                this.enable = !1,
                this.width = 1920,
                this.height = 1080
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.enable && (this.enable = e.enable);
                let t = e.width;
                void 0 !== t && (this.width = t);
                let i = e.height;
                void 0 !== i && (this.height = i)
            }
        }
        (H = b || (b = {})).delete = "delete",
        H.wait = "wait";
        class t4 {
            constructor() {
                this.mode = b.delete,
                this.value = 0
            }
            load(e) {
                e && (void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.value && (this.value = e.value))
            }
        }
        class t8 {
            constructor() {
                this.density = new t6,
                this.limit = new t4,
                this.value = 0
            }
            load(e) {
                e && (this.density.load(e.density),
                this.limit.load(e.limit),
                void 0 !== e.value && (this.value = e.value))
            }
        }
        class t7 {
            constructor() {
                this.blur = 0,
                this.color = new tg,
                this.enable = !1,
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.color.value = "#000"
            }
            load(e) {
                e && (void 0 !== e.blur && (this.blur = e.blur),
                this.color = tg.create(this.color, e.color),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.offset && (void 0 !== e.offset.x && (this.offset.x = e.offset.x),
                void 0 !== e.offset.y && (this.offset.y = e.offset.y)))
            }
        }
        class t9 {
            constructor() {
                this.close = !0,
                this.fill = !0,
                this.options = {},
                this.type = "circle"
            }
            load(e) {
                if (!e)
                    return;
                let t = e.options;
                if (void 0 !== t)
                    for (let e in t) {
                        let i = t[e];
                        i && (this.options[e] = eq(this.options[e] ?? {}, i))
                    }
                void 0 !== e.close && (this.close = e.close),
                void 0 !== e.fill && (this.fill = e.fill),
                void 0 !== e.type && (this.type = e.type)
            }
        }
        class ie extends tD {
            constructor() {
                super(),
                this.destroy = r.none,
                this.speed = 5
            }
            load(e) {
                super.load(e),
                e && void 0 !== e.destroy && (this.destroy = e.destroy)
            }
        }
        class it extends tq {
            constructor() {
                super(),
                this.animation = new ie,
                this.value = 3
            }
            load(e) {
                if (super.load(e),
                !e)
                    return;
                let t = e.animation;
                void 0 !== t && this.animation.load(t)
            }
        }
        class ii {
            constructor() {
                this.width = 0
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = tB.create(this.color, e.color)),
                void 0 !== e.width && (this.width = eM(e.width)),
                void 0 !== e.opacity && (this.opacity = eM(e.opacity)))
            }
        }
        class is extends t$ {
            constructor() {
                super(),
                this.opacityRate = 1,
                this.sizeRate = 1,
                this.velocityRate = 1
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.opacityRate && (this.opacityRate = e.opacityRate),
                void 0 !== e.sizeRate && (this.sizeRate = e.sizeRate),
                void 0 !== e.velocityRate && (this.velocityRate = e.velocityRate))
            }
        }
        class ia {
            constructor(e, t) {
                this._engine = e,
                this._container = t,
                this.bounce = new tH,
                this.collisions = new tW,
                this.color = new tB,
                this.color.value = "#fff",
                this.effect = new tN,
                this.groups = {},
                this.move = new t2,
                this.number = new t8,
                this.opacity = new t3,
                this.reduceDuplicates = !1,
                this.shadow = new t7,
                this.shape = new t9,
                this.size = new it,
                this.stroke = new ii,
                this.zIndex = new is
            }
            load(e) {
                if (!e)
                    return;
                if (void 0 !== e.groups)
                    for (let t of Object.keys(e.groups)) {
                        if (!Object.hasOwn(e.groups, t))
                            continue;
                        let i = e.groups[t];
                        void 0 !== i && (this.groups[t] = eq(this.groups[t] ?? {}, i))
                    }
                void 0 !== e.reduceDuplicates && (this.reduceDuplicates = e.reduceDuplicates),
                this.bounce.load(e.bounce),
                this.color.load(tB.create(this.color, e.color)),
                this.effect.load(e.effect),
                this.move.load(e.move),
                this.number.load(e.number),
                this.opacity.load(e.opacity),
                this.shape.load(e.shape),
                this.size.load(e.size),
                this.shadow.load(e.shadow),
                this.zIndex.load(e.zIndex),
                this.collisions.load(e.collisions),
                void 0 !== e.interactivity && (this.interactivity = eq({}, e.interactivity));
                let t = e.stroke;
                if (t && (this.stroke = eX(t, e=>{
                    let t = new ii;
                    return t.load(e),
                    t
                }
                )),
                this._container) {
                    let t = this._engine.updaters.get(this._container);
                    if (t)
                        for (let i of t)
                            i.loadOptions && i.loadOptions(this, e);
                    let i = this._engine.interactors.get(this._container);
                    if (i)
                        for (let t of i)
                            t.loadParticlesOptions && t.loadParticlesOptions(this, e)
                }
            }
        }
        function ir(e, ...t) {
            for (let i of t)
                e.load(i)
        }
        function io(e, t, ...i) {
            let s = new ia(e,t);
            return ir(s, ...i),
            s
        }
        class il {
            constructor(e, t) {
                this._findDefaultTheme = e=>this.themes.find(t=>t.default.value && t.default.mode === e) ?? this.themes.find(e=>e.default.value && e.default.mode === g.any),
                this._importPreset = e=>{
                    this.load(this._engine.getPreset(e))
                }
                ,
                this._engine = e,
                this._container = t,
                this.autoPlay = !0,
                this.background = new tv,
                this.backgroundMask = new tb,
                this.clear = !0,
                this.defaultThemes = {},
                this.delay = 0,
                this.fullScreen = new tw,
                this.detectRetina = !0,
                this.duration = 0,
                this.fpsLimit = 120,
                this.interactivity = new tk(e,t),
                this.manualParticles = [],
                this.particles = io(this._engine, this._container),
                this.pauseOnBlur = !0,
                this.pauseOnOutsideViewport = !0,
                this.responsive = [],
                this.smooth = !1,
                this.style = {},
                this.themes = [],
                this.zLayers = 100
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.preset && eX(e.preset, e=>this._importPreset(e)),
                void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay),
                void 0 !== e.clear && (this.clear = e.clear),
                void 0 !== e.key && (this.key = e.key),
                void 0 !== e.name && (this.name = e.name),
                void 0 !== e.delay && (this.delay = eM(e.delay));
                let t = e.detectRetina;
                void 0 !== t && (this.detectRetina = t),
                void 0 !== e.duration && (this.duration = eM(e.duration));
                let i = e.fpsLimit;
                void 0 !== i && (this.fpsLimit = i),
                void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur),
                void 0 !== e.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
                void 0 !== e.zLayers && (this.zLayers = e.zLayers),
                this.background.load(e.background);
                let s = e.fullScreen;
                er(s) ? this.fullScreen.enable = s : this.fullScreen.load(s),
                this.backgroundMask.load(e.backgroundMask),
                this.interactivity.load(e.interactivity),
                e.manualParticles && (this.manualParticles = e.manualParticles.map(e=>{
                    let t = new tP;
                    return t.load(e),
                    t
                }
                )),
                this.particles.load(e.particles),
                this.style = eq(this.style, e.style),
                this._engine.loadOptions(this, e),
                void 0 !== e.smooth && (this.smooth = e.smooth);
                let n = this._engine.interactors.get(this._container);
                if (n)
                    for (let t of n)
                        t.loadOptions && t.loadOptions(this, e);
                if (void 0 !== e.responsive)
                    for (let t of e.responsive) {
                        let e = new tz;
                        e.load(t),
                        this.responsive.push(e)
                    }
                if (this.responsive.sort((e,t)=>e.maxWidth - t.maxWidth),
                void 0 !== e.themes)
                    for (let t of e.themes) {
                        let e = this.themes.find(e=>e.name === t.name);
                        if (e)
                            e.load(t);
                        else {
                            let e = new tI;
                            e.load(t),
                            this.themes.push(e)
                        }
                    }
                this.defaultThemes.dark = this._findDefaultTheme(g.dark)?.name,
                this.defaultThemes.light = this._findDefaultTheme(g.light)?.name
            }
            setResponsive(e, t, i) {
                this.load(i);
                let s = this.responsive.find(i=>i.mode === m.screen && screen ? i.maxWidth > screen.availWidth : i.maxWidth * t > e);
                return this.load(s?.options),
                s?.maxWidth
            }
            setTheme(e) {
                if (e) {
                    let t = this.themes.find(t=>t.name === e);
                    t && this.load(t.options)
                } else {
                    let e = eA("(prefers-color-scheme: dark)")
                      , t = e?.matches
                      , i = this._findDefaultTheme(t ? g.dark : g.light);
                    i && this.load(i.options)
                }
            }
        }
        (W = w || (w = {})).external = "external",
        W.particles = "particles";
        class ic {
            constructor(e, t) {
                this.container = t,
                this._engine = e,
                this._interactors = [],
                this._externalInteractors = [],
                this._particleInteractors = []
            }
            externalInteract(e) {
                for (let t of this._externalInteractors)
                    t.isEnabled() && t.interact(e)
            }
            handleClickMode(e) {
                for (let t of this._externalInteractors)
                    t.handleClickMode?.(e)
            }
            async init() {
                for (let e of (this._interactors = await this._engine.getInteractors(this.container, !0),
                this._externalInteractors = [],
                this._particleInteractors = [],
                this._interactors)) {
                    switch (e.type) {
                    case w.external:
                        this._externalInteractors.push(e);
                        break;
                    case w.particles:
                        this._particleInteractors.push(e)
                    }
                    e.init()
                }
            }
            particlesInteract(e, t) {
                for (let i of this._externalInteractors)
                    i.clear(e, t);
                for (let i of this._particleInteractors)
                    i.isEnabled(e) && i.interact(e, t)
            }
            reset(e) {
                for (let t of this._externalInteractors)
                    t.isEnabled() && t.reset(e);
                for (let t of this._particleInteractors)
                    t.isEnabled(e) && t.reset(e)
            }
        }
        (N = x || (x = {})).normal = "normal",
        N.inside = "inside",
        N.outside = "outside";
        let id = 0
          , iu = "random";
        function ih(e) {
            if (!eB(e.outMode, e.checkModes))
                return;
            let t = 2 * e.radius;
            e.coord > e.maxCoord - t ? e.setCb(-e.radius) : e.coord < t && e.setCb(e.radius)
        }
        class ip {
            constructor(e, t) {
                this.container = t,
                this._calcPosition = (e,t,i,s=id)=>{
                    var n;
                    for (let[,s] of e.plugins) {
                        let e = void 0 !== s.particlePosition ? s.particlePosition(t, this) : void 0;
                        if (e)
                            return eh.create(e.x, e.y, i)
                    }
                    let a = (n = {
                        size: e.canvas.size,
                        position: t
                    },
                    {
                        x: n.position?.x ?? eb() * n.size.width,
                        y: n.position?.y ?? eb() * n.size.height
                    })
                      , r = eh.create(a.x, a.y, i)
                      , o = this.getRadius()
                      , l = this.options.move.outModes
                      , c = t=>{
                        ih({
                            outMode: t,
                            checkModes: [y.bounce],
                            coord: r.x,
                            maxCoord: e.canvas.size.width,
                            setCb: e=>r.x += e,
                            radius: o
                        })
                    }
                      , d = t=>{
                        ih({
                            outMode: t,
                            checkModes: [y.bounce],
                            coord: r.y,
                            maxCoord: e.canvas.size.height,
                            setCb: e=>r.y += e,
                            radius: o
                        })
                    }
                    ;
                    return (c(l.left ?? l.default),
                    c(l.right ?? l.default),
                    d(l.top ?? l.default),
                    d(l.bottom ?? l.default),
                    this._checkOverlap(r, s)) ? this._calcPosition(e, void 0, i, s + 1) : r
                }
                ,
                this._calculateVelocity = ()=>{
                    let e = (function(e) {
                        let t = ep.origin;
                        return t.length = 1,
                        t.angle = e,
                        t
                    }
                    )(this.direction).copy()
                      , t = this.options.move;
                    if (t.direction === s.inside || t.direction === s.outside)
                        return e;
                    let i = eP(eS(t.angle.value))
                      , n = eP(eS(t.angle.offset))
                      , a = {
                        left: n - .5 * i,
                        right: n + .5 * i
                    };
                    return t.straight || (e.angle += e_(eM(a.left, a.right))),
                    t.random && "number" == typeof t.speed && (e.length *= eb()),
                    e
                }
                ,
                this._checkOverlap = (e,t=id)=>{
                    let i = this.options.collisions
                      , s = this.getRadius();
                    if (!i.enable)
                        return !1;
                    let n = i.overlap;
                    if (n.enable)
                        return !1;
                    let a = n.retries;
                    if (a >= 0 && t > a)
                        throw Error(`${es} particle is overlapping and can't be placed`);
                    return !!this.container.particles.find(t=>ek(e, t.position) < s + t.getRadius())
                }
                ,
                this._getRollColor = e=>{
                    if (!e || !this.roll || !this.backColor && !this.roll.alter)
                        return e;
                    let t = this.roll.horizontal && this.roll.vertical ? 2 : 1
                      , i = this.roll.horizontal ? .5 * Math.PI : 0;
                    if (!(Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / t)) % 2))
                        return e;
                    if (this.backColor)
                        return this.backColor;
                    if (this.roll.alter) {
                        var s, n;
                        return s = this.roll.alter.type,
                        n = this.roll.alter.value,
                        {
                            h: e.h,
                            s: e.s,
                            l: e.l + (s === d.darken ? -1 : 1) * n
                        }
                    }
                    return e
                }
                ,
                this._initPosition = e=>{
                    let t = this.container
                      , i = eS(this.options.zIndex.value);
                    this.position = this._calcPosition(t, e, ew(i, 0, t.zLayers)),
                    this.initialPosition = this.position.copy();
                    let n = t.canvas.size;
                    switch (this.moveCenter = {
                        ...eJ(this.options.move.center, n),
                        radius: this.options.move.center.radius ?? 0,
                        mode: this.options.move.center.mode ?? l.percent
                    },
                    this.direction = function(e, t, i) {
                        if (el(e))
                            return eP(e);
                        switch (e) {
                        case s.top:
                            return -(.5 * Math.PI);
                        case s.topRight:
                            return -(.25 * Math.PI);
                        case s.right:
                            return 0;
                        case s.bottomRight:
                            return .25 * Math.PI;
                        case s.bottom:
                            return .5 * Math.PI;
                        case s.bottomLeft:
                            return .75 * Math.PI;
                        case s.left:
                            return Math.PI;
                        case s.topLeft:
                            return -(.75 * Math.PI);
                        case s.inside:
                            return Math.atan2(i.y - t.y, i.x - t.x);
                        case s.outside:
                            return Math.atan2(t.y - i.y, t.x - i.x);
                        default:
                            return eb() * eg
                        }
                    }(this.options.move.direction, this.position, this.moveCenter),
                    this.options.move.direction) {
                    case s.inside:
                        this.outType = x.inside;
                        break;
                    case s.outside:
                        this.outType = x.outside
                    }
                    this.offset = ep.origin
                }
                ,
                this._engine = e
            }
            destroy(e) {
                if (this.unbreakable || this.destroyed)
                    return;
                this.destroyed = !0,
                this.bubble.inRange = !1,
                this.slow.inRange = !1;
                let t = this.container
                  , i = this.pathGenerator
                  , s = t.shapeDrawers.get(this.shape);
                for (let[,i] of (s?.particleDestroy?.(this),
                t.plugins))
                    i.particleDestroyed?.(this, e);
                for (let i of t.particles.updaters)
                    i.particleDestroyed?.(this, e);
                i?.reset(this),
                this._engine.dispatchEvent(p.particleDestroyed, {
                    container: this.container,
                    data: {
                        particle: this
                    }
                })
            }
            draw(e) {
                let t = this.container
                  , i = t.canvas;
                for (let[,s] of t.plugins)
                    i.drawParticlePlugin(s, this, e);
                i.drawParticle(this, e)
            }
            getFillColor() {
                return this._getRollColor(this.bubble.color ?? tn(this.color))
            }
            getMass() {
                return this.getRadius() ** 2 * Math.PI * .5
            }
            getPosition() {
                return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z
                }
            }
            getRadius() {
                return this.bubble.radius ?? this.size.value
            }
            getStrokeColor() {
                return this._getRollColor(this.bubble.color ?? tn(this.strokeColor))
            }
            init(e, t, i, s) {
                let n = this.container
                  , a = this._engine;
                this.id = e,
                this.group = s,
                this.effectClose = !0,
                this.effectFill = !0,
                this.shapeClose = !0,
                this.shapeFill = !0,
                this.pathRotation = !1,
                this.lastPathTime = 0,
                this.destroyed = !1,
                this.unbreakable = !1,
                this.isRotating = !1,
                this.rotation = 0,
                this.misplaced = !1,
                this.retina = {
                    maxDistance: {}
                },
                this.outType = x.normal,
                this.ignoresResizeRatio = !0;
                let r = n.retina.pixelRatio
                  , o = n.actualOptions
                  , l = io(this._engine, n, o.particles)
                  , {reduceDuplicates: c} = l
                  , d = l.effect.type
                  , u = l.shape.type;
                this.effect = eZ(d, this.id, c),
                this.shape = eZ(u, this.id, c);
                let h = l.effect
                  , p = l.shape;
                if (i) {
                    if (i.effect?.type) {
                        let e = eZ(i.effect.type, this.id, c);
                        e && (this.effect = e,
                        h.load(i.effect))
                    }
                    if (i.shape?.type) {
                        let e = eZ(i.shape.type, this.id, c);
                        e && (this.shape = e,
                        p.load(i.shape))
                    }
                }
                if (this.effect === iu) {
                    let e = [...this.container.effectDrawers.keys()];
                    this.effect = e[Math.floor(Math.random() * e.length)]
                }
                if (this.shape === iu) {
                    let e = [...this.container.shapeDrawers.keys()];
                    this.shape = e[Math.floor(Math.random() * e.length)]
                }
                this.effectData = function(e, t, i, s) {
                    let n = t.options[e];
                    if (n)
                        return eq({
                            close: t.close,
                            fill: t.fill
                        }, eZ(n, i, s))
                }(this.effect, h, this.id, c),
                this.shapeData = function(e, t, i, s) {
                    let n = t.options[e];
                    if (n)
                        return eq({
                            close: t.close,
                            fill: t.fill
                        }, eZ(n, i, s))
                }(this.shape, p, this.id, c),
                l.load(i);
                let f = this.effectData;
                f && l.load(f.particles);
                let m = this.shapeData;
                m && l.load(m.particles);
                let g = new tk(a,n);
                g.load(n.actualOptions.interactivity),
                g.load(l.interactivity),
                this.interactivity = g,
                this.effectFill = f?.fill ?? l.effect.fill,
                this.effectClose = f?.close ?? l.effect.close,
                this.shapeFill = m?.fill ?? l.shape.fill,
                this.shapeClose = m?.close ?? l.shape.close,
                this.options = l;
                let v = this.options.move.path;
                this.pathDelay = eS(v.delay.value) * ea,
                v.generator && (this.pathGenerator = this._engine.getPathGenerator(v.generator),
                this.pathGenerator && n.addPath(v.generator, this.pathGenerator) && this.pathGenerator.init(n)),
                n.retina.initParticle(this),
                this.size = eQ(this.options.size, r),
                this.bubble = {
                    inRange: !1
                },
                this.slow = {
                    inRange: !1,
                    factor: 1
                },
                this._initPosition(t),
                this.initialVelocity = this._calculateVelocity(),
                this.velocity = this.initialVelocity.copy(),
                this.moveDecay = 1 - eS(this.options.move.decay);
                let y = n.particles;
                y.setLastZIndex(this.position.z),
                this.zIndexFactor = this.position.z / n.zLayers,
                this.sides = 24;
                let b = n.effectDrawers.get(this.effect);
                !b && (b = this._engine.getEffectDrawer(this.effect)) && n.effectDrawers.set(this.effect, b),
                b?.loadEffect && b.loadEffect(this);
                let w = n.shapeDrawers.get(this.shape);
                !w && (w = this._engine.getShapeDrawer(this.shape)) && n.shapeDrawers.set(this.shape, w),
                w?.loadShape && w.loadShape(this);
                let _ = w?.getSidesCount;
                for (let e of (_ && (this.sides = _(this)),
                this.spawning = !1,
                this.shadowColor = e3(this.options.shadow.color),
                y.updaters))
                    e.init(this);
                for (let e of y.movers)
                    e.init?.(this);
                for (let[,e] of (b?.particleInit?.(n, this),
                w?.particleInit?.(n, this),
                n.plugins))
                    e.particleCreated?.(this)
            }
            isInsideCanvas() {
                let e = this.getRadius()
                  , t = this.container.canvas.size
                  , i = this.position;
                return i.x >= -e && i.y >= -e && i.y <= t.height + e && i.x <= t.width + e
            }
            isVisible() {
                return !this.destroyed && !this.spawning && this.isInsideCanvas()
            }
            reset() {
                for (let e of this.container.particles.updaters)
                    e.reset?.(this)
            }
        }
        class im {
            constructor(e, t) {
                this.position = e,
                this.particle = t
            }
        }
        (Y = _ || (_ = {})).circle = "circle",
        Y.rectangle = "rectangle";
        class ig {
            constructor(e, t, i) {
                this.position = {
                    x: e,
                    y: t
                },
                this.type = i
            }
        }
        class iv extends ig {
            constructor(e, t, i) {
                super(e, t, _.circle),
                this.radius = i
            }
            contains(e) {
                return ek(e, this.position) <= this.radius
            }
            intersects(e) {
                let t = this.position
                  , i = e.position
                  , s = {
                    x: Math.abs(i.x - t.x),
                    y: Math.abs(i.y - t.y)
                }
                  , n = this.radius;
                if (e instanceof iv || e.type === _.circle)
                    return n + e.radius > Math.sqrt(s.x ** 2 + s.y ** 2);
                if (e instanceof iy || e.type === _.rectangle) {
                    let {width: t, height: i} = e.size;
                    return Math.pow(s.x - t, 2) + Math.pow(s.y - i, 2) <= n ** 2 || s.x <= n + t && s.y <= n + i || s.x <= t || s.y <= i
                }
                return !1
            }
        }
        class iy extends ig {
            constructor(e, t, i, s) {
                super(e, t, _.rectangle),
                this.size = {
                    height: s,
                    width: i
                }
            }
            contains(e) {
                let t = this.size.width
                  , i = this.size.height
                  , s = this.position;
                return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + i
            }
            intersects(e) {
                if (e instanceof iv)
                    return e.intersects(this);
                let t = this.size.width
                  , i = this.size.height
                  , s = this.position
                  , n = e.position
                  , a = e instanceof iy ? e.size : {
                    width: 0,
                    height: 0
                }
                  , r = a.width
                  , o = a.height;
                return n.x < s.x + t && n.x + r > s.x && n.y < s.y + i && n.y + o > s.y
            }
        }
        class ib {
            constructor(e, t) {
                this.rectangle = e,
                this.capacity = t,
                this._subdivide = ()=>{
                    let {x: e, y: t} = this.rectangle.position
                      , {width: i, height: s} = this.rectangle.size
                      , {capacity: n} = this;
                    for (let a = 0; a < 4; a++) {
                        let r = a % 2;
                        this._subs.push(new ib(new iy(e + .5 * i * r,t + .5 * s * (Math.round(.5 * a) - r),.5 * i,.5 * s),n))
                    }
                    this._divided = !0
                }
                ,
                this._points = [],
                this._divided = !1,
                this._subs = []
            }
            insert(e) {
                return !!this.rectangle.contains(e.position) && (this._points.length < this.capacity ? (this._points.push(e),
                !0) : (this._divided || this._subdivide(),
                this._subs.some(t=>t.insert(e))))
            }
            query(e, t) {
                let i = [];
                if (!e.intersects(this.rectangle))
                    return [];
                for (let s of this._points)
                    !e.contains(s.position) && ek(e.position, s.position) > s.particle.getRadius() && (!t || t(s.particle)) || i.push(s.particle);
                if (this._divided)
                    for (let s of this._subs)
                        i.push(...s.query(e, t));
                return i
            }
            queryCircle(e, t, i) {
                return this.query(new iv(e.x,e.y,t), i)
            }
            queryRectangle(e, t, i) {
                return this.query(new iy(e.x,e.y,t.width,t.height), i)
            }
        }
        let iw = e=>{
            let {height: t, width: i} = e;
            return new iy(-.25 * i,-.25 * t,1.5 * i,1.5 * t)
        }
        ;
        class ix {
            constructor(e, t) {
                this._addToPool = (...e)=>{
                    this._pool.push(...e)
                }
                ,
                this._applyDensity = (e,t,i)=>{
                    let s = e.number;
                    if (!e.number.density?.enable) {
                        void 0 === i ? this._limit = s.limit.value : s.limit && this._groupLimits.set(i, s.limit.value);
                        return
                    }
                    let n = this._initDensityFactor(s.density)
                      , a = s.value
                      , r = s.limit.value > 0 ? s.limit.value : a
                      , o = Math.min(a, r) * n + t
                      , l = Math.min(this.count, this.filter(e=>e.group === i).length);
                    void 0 === i ? this._limit = s.limit.value * n : this._groupLimits.set(i, s.limit.value * n),
                    l < o ? this.push(Math.abs(o - l), void 0, e, i) : l > o && this.removeQuantity(l - o, i)
                }
                ,
                this._initDensityFactor = e=>{
                    let t = this._container;
                    if (!t.canvas.element || !e.enable)
                        return 1;
                    let i = t.canvas.element
                      , s = t.retina.pixelRatio;
                    return i.width * i.height / (e.height * e.width * s ** 2)
                }
                ,
                this._pushParticle = (e,t,i,s)=>{
                    try {
                        let n = this._pool.pop();
                        n || (n = new ip(this._engine,this._container)),
                        n.init(this._nextId, e, t, i);
                        let a = !0;
                        if (s && (a = s(n)),
                        !a)
                            return;
                        return this._array.push(n),
                        this._zArray.push(n),
                        this._nextId++,
                        this._engine.dispatchEvent(p.particleAdded, {
                            container: this._container,
                            data: {
                                particle: n
                            }
                        }),
                        n
                    } catch (e) {
                        eI.warning(`${es} adding particle: ${e}`)
                    }
                }
                ,
                this._removeParticle = (e,t,i)=>{
                    let s = this._array[e];
                    if (!s || s.group !== t)
                        return !1;
                    let n = this._zArray.indexOf(s);
                    return this._array.splice(e, 1),
                    this._zArray.splice(n, 1),
                    s.destroy(i),
                    this._engine.dispatchEvent(p.particleRemoved, {
                        container: this._container,
                        data: {
                            particle: s
                        }
                    }),
                    this._addToPool(s),
                    !0
                }
                ,
                this._engine = e,
                this._container = t,
                this._nextId = 0,
                this._array = [],
                this._zArray = [],
                this._pool = [],
                this._limit = 0,
                this._groupLimits = new Map,
                this._needsSort = !1,
                this._lastZIndex = 0,
                this._interactionManager = new ic(e,t),
                this._pluginsInitialized = !1;
                let i = t.canvas.size;
                this.quadTree = new ib(iw(i),4),
                this.movers = [],
                this.updaters = []
            }
            get count() {
                return this._array.length
            }
            addManualParticles() {
                let e = this._container;
                e.actualOptions.manualParticles.forEach(t=>this.addParticle(t.position ? eJ(t.position, e.canvas.size) : void 0, t.options))
            }
            addParticle(e, t, i, s) {
                let n = this._container.actualOptions.particles.number.limit.mode
                  , a = void 0 === i ? this._limit : this._groupLimits.get(i) ?? this._limit
                  , r = this.count;
                if (a > 0)
                    switch (n) {
                    case b.delete:
                        {
                            let e = r + 1 - a;
                            e > 0 && this.removeQuantity(e);
                            break
                        }
                    case b.wait:
                        if (r >= a)
                            return
                    }
                return this._pushParticle(e, t, i, s)
            }
            clear() {
                this._array = [],
                this._zArray = [],
                this._pluginsInitialized = !1
            }
            destroy() {
                this._array = [],
                this._zArray = [],
                this.movers = [],
                this.updaters = []
            }
            draw(e) {
                let t = this._container
                  , i = t.canvas;
                for (let[,s] of (i.clear(),
                this.update(e),
                t.plugins))
                    i.drawPlugin(s, e);
                for (let t of this._zArray)
                    t.draw(e)
            }
            filter(e) {
                return this._array.filter(e)
            }
            find(e) {
                return this._array.find(e)
            }
            get(e) {
                return this._array[e]
            }
            handleClickMode(e) {
                this._interactionManager.handleClickMode(e)
            }
            async init() {
                let e = this._container
                  , t = e.actualOptions;
                this._lastZIndex = 0,
                this._needsSort = !1,
                await this.initPlugins();
                let i = !1;
                for (let[,t] of e.plugins)
                    if (i = t.particlesInitialization?.() ?? i)
                        break;
                if (this.addManualParticles(),
                !i) {
                    let e = t.particles
                      , i = e.groups;
                    for (let t in i) {
                        let s = i[t];
                        for (let i = this.count, n = 0; n < s.number?.value && i < e.number.value; i++,
                        n++)
                            this.addParticle(void 0, s, t)
                    }
                    for (let t = this.count; t < e.number.value; t++)
                        this.addParticle()
                }
            }
            async initPlugins() {
                if (this._pluginsInitialized)
                    return;
                let e = this._container;
                for (let[,t] of (this.movers = await this._engine.getMovers(e, !0),
                this.updaters = await this._engine.getUpdaters(e, !0),
                await this._interactionManager.init(),
                e.pathGenerators))
                    t.init(e)
            }
            push(e, t, i, s) {
                for (let n = 0; n < e; n++)
                    this.addParticle(t?.position, i, s)
            }
            async redraw() {
                this.clear(),
                await this.init(),
                this.draw({
                    value: 0,
                    factor: 0
                })
            }
            remove(e, t, i) {
                this.removeAt(this._array.indexOf(e), void 0, t, i)
            }
            removeAt(e, t=1, i, s) {
                if (e < 0 || e > this.count)
                    return;
                let n = 0;
                for (let a = e; n < t && a < this.count; a++)
                    this._removeParticle(a--, i, s) && n++
            }
            removeQuantity(e, t) {
                this.removeAt(0, e, t)
            }
            setDensity() {
                let e = this._container.actualOptions
                  , t = e.particles.groups;
                for (let e in t)
                    this._applyDensity(t[e], 0, e);
                this._applyDensity(e.particles, e.manualParticles.length)
            }
            setLastZIndex(e) {
                this._lastZIndex = e,
                this._needsSort = this._needsSort || this._lastZIndex < e
            }
            setResizeFactor(e) {
                this._resizeFactor = e
            }
            update(e) {
                let t = this._container
                  , i = new Set;
                for (let[,e] of (this.quadTree = new ib(iw(t.canvas.size),4),
                t.pathGenerators))
                    e.update();
                for (let[,i] of t.plugins)
                    i.update?.(e);
                let s = this._resizeFactor;
                for (let t of this._array) {
                    for (let[,i] of (s && !t.ignoresResizeRatio && (t.position.x *= s.width,
                    t.position.y *= s.height,
                    t.initialPosition.x *= s.width,
                    t.initialPosition.y *= s.height),
                    t.ignoresResizeRatio = !1,
                    this._interactionManager.reset(t),
                    this._container.plugins)) {
                        if (t.destroyed)
                            break;
                        i.particleUpdate?.(t, e)
                    }
                    for (let i of this.movers)
                        i.isEnabled(t) && i.move(t, e);
                    if (t.destroyed) {
                        i.add(t);
                        continue
                    }
                    this.quadTree.insert(new im(t.getPosition(),t))
                }
                if (i.size) {
                    let e = e=>!i.has(e);
                    for (let t of (this._array = this.filter(e),
                    this._zArray = this._zArray.filter(e),
                    i))
                        this._engine.dispatchEvent(p.particleRemoved, {
                            container: this._container,
                            data: {
                                particle: t
                            }
                        });
                    this._addToPool(...i)
                }
                for (let t of (this._interactionManager.externalInteract(e),
                this._array)) {
                    for (let i of this.updaters)
                        i.update(t, e);
                    t.destroyed || t.spawning || this._interactionManager.particlesInteract(t, e)
                }
                if (delete this._resizeFactor,
                this._needsSort) {
                    let e = this._zArray;
                    e.sort((e,t)=>t.position.z - e.position.z || e.id - t.id),
                    this._lastZIndex = e[e.length - 1].position.z,
                    this._needsSort = !1
                }
            }
        }
        class i_ {
            constructor(e) {
                this.container = e,
                this.pixelRatio = 1,
                this.reduceFactor = 1
            }
            init() {
                let e = this.container
                  , t = e.actualOptions;
                this.pixelRatio = !t.detectRetina || eR() ? 1 : window.devicePixelRatio,
                this.reduceFactor = 1;
                let i = this.pixelRatio
                  , s = e.canvas;
                if (s.element) {
                    let e = s.element;
                    s.size.width = e.offsetWidth * i,
                    s.size.height = e.offsetHeight * i
                }
                let n = t.particles
                  , a = n.move;
                this.maxSpeed = eS(a.gravity.maxSpeed) * i,
                this.sizeAnimationSpeed = eS(n.size.animation.speed) * i
            }
            initParticle(e) {
                let t = e.options
                  , i = this.pixelRatio
                  , s = t.move
                  , n = s.distance
                  , a = e.retina;
                a.moveDrift = eS(s.drift) * i,
                a.moveSpeed = eS(s.speed) * i,
                a.sizeAnimationSpeed = eS(t.size.animation.speed) * i;
                let r = a.maxDistance;
                r.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0,
                r.vertical = void 0 !== n.vertical ? n.vertical * i : void 0,
                a.maxSpeed = eS(s.gravity.maxSpeed) * i
            }
        }
        function iS(e) {
            return e && !e.destroyed
        }
        function iC(e, t, ...i) {
            let s = new il(e,t);
            return ir(s, ...i),
            s
        }
        class iT {
            constructor(e, t, i) {
                this._intersectionManager = e=>{
                    if (iS(this) && this.actualOptions.pauseOnOutsideViewport)
                        for (let t of e)
                            t.target === this.interactivity.element && (t.isIntersecting ? this.play() : this.pause())
                }
                ,
                this._nextFrame = e=>{
                    try {
                        if (!this._smooth && void 0 !== this._lastFrameTime && e < this._lastFrameTime + ea / this.fpsLimit) {
                            this.draw(!1);
                            return
                        }
                        this._lastFrameTime ??= e;
                        let t = function(e, t=60, i=!1) {
                            return {
                                value: e,
                                factor: i ? 60 / t : 60 * e / ea
                            }
                        }(e - this._lastFrameTime, this.fpsLimit, this._smooth);
                        if (this.addLifeTime(t.value),
                        this._lastFrameTime = e,
                        t.value > ea) {
                            this.draw(!1);
                            return
                        }
                        if (this.particles.draw(t),
                        !this.alive()) {
                            this.destroy();
                            return
                        }
                        this.animationStatus && this.draw(!1)
                    } catch (e) {
                        eI.error(`${es} in animation loop`, e)
                    }
                }
                ,
                this._engine = e,
                this.id = Symbol(t),
                this.fpsLimit = 120,
                this._smooth = !1,
                this._delay = 0,
                this._duration = 0,
                this._lifeTime = 0,
                this._firstStart = !0,
                this.started = !1,
                this.destroyed = !1,
                this._paused = !0,
                this._lastFrameTime = 0,
                this.zLayers = 100,
                this.pageHidden = !1,
                this._clickHandlers = new Map,
                this._sourceOptions = i,
                this._initialSourceOptions = i,
                this.retina = new i_(this),
                this.canvas = new tp(this),
                this.particles = new ix(this._engine,this),
                this.pathGenerators = new Map,
                this.interactivity = {
                    mouse: {
                        clicking: !1,
                        inside: !1
                    }
                },
                this.plugins = new Map,
                this.effectDrawers = new Map,
                this.shapeDrawers = new Map,
                this._options = iC(this._engine, this),
                this.actualOptions = iC(this._engine, this),
                this._eventListeners = new tm(this),
                this._intersectionObserver = function(e) {
                    if (!eR() && "undefined" != typeof IntersectionObserver)
                        return new IntersectionObserver(e)
                }(e=>this._intersectionManager(e)),
                this._engine.dispatchEvent(p.containerBuilt, {
                    container: this
                })
            }
            get animationStatus() {
                return !this._paused && !this.pageHidden && iS(this)
            }
            get options() {
                return this._options
            }
            get sourceOptions() {
                return this._sourceOptions
            }
            addClickHandler(e) {
                if (!iS(this))
                    return;
                let t = this.interactivity.element;
                if (!t)
                    return;
                let i = (t,i,s)=>{
                    if (!iS(this))
                        return;
                    let n = this.retina.pixelRatio
                      , a = {
                        x: i.x * n,
                        y: i.y * n
                    };
                    e(t, this.particles.quadTree.queryCircle(a, s * n))
                }
                  , s = !1
                  , n = !1;
                for (let[e,a] of (this._clickHandlers.set("click", e=>{
                    if (!iS(this))
                        return;
                    let t = {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    };
                    i(e, t, 1)
                }
                ),
                this._clickHandlers.set("touchstart", ()=>{
                    iS(this) && (s = !0,
                    n = !1)
                }
                ),
                this._clickHandlers.set("touchmove", ()=>{
                    iS(this) && (n = !0)
                }
                ),
                this._clickHandlers.set("touchend", e=>{
                    if (iS(this)) {
                        if (s && !n) {
                            let t = e.touches[e.touches.length - 1];
                            if (!t && !(t = e.changedTouches[e.changedTouches.length - 1]))
                                return;
                            let s = this.canvas.element
                              , n = s ? s.getBoundingClientRect() : void 0;
                            i(e, {
                                x: t.clientX - (n ? n.left : 0),
                                y: t.clientY - (n ? n.top : 0)
                            }, Math.max(t.radiusX, t.radiusY))
                        }
                        s = !1,
                        n = !1
                    }
                }
                ),
                this._clickHandlers.set("touchcancel", ()=>{
                    iS(this) && (s = !1,
                    n = !1)
                }
                ),
                this._clickHandlers))
                    t.addEventListener(e, a)
            }
            addLifeTime(e) {
                this._lifeTime += e
            }
            addPath(e, t, i=!1) {
                return !(!iS(this) || !i && this.pathGenerators.has(e)) && (this.pathGenerators.set(e, t),
                !0)
            }
            alive() {
                return !this._duration || this._lifeTime <= this._duration
            }
            clearClickHandlers() {
                if (iS(this)) {
                    for (let[e,t] of this._clickHandlers)
                        this.interactivity.element?.removeEventListener(e, t);
                    this._clickHandlers.clear()
                }
            }
            destroy(e=!0) {
                if (iS(this)) {
                    for (let[,e] of (this.stop(),
                    this.clearClickHandlers(),
                    this.particles.destroy(),
                    this.canvas.destroy(),
                    this.effectDrawers))
                        e.destroy?.(this);
                    for (let[,e] of this.shapeDrawers)
                        e.destroy?.(this);
                    for (let e of this.effectDrawers.keys())
                        this.effectDrawers.delete(e);
                    for (let e of this.shapeDrawers.keys())
                        this.shapeDrawers.delete(e);
                    if (this._engine.clearPlugins(this),
                    this.destroyed = !0,
                    e) {
                        let e = this._engine.items
                          , t = e.findIndex(e=>e === this);
                        t >= 0 && e.splice(t, 1)
                    }
                    this._engine.dispatchEvent(p.containerDestroyed, {
                        container: this
                    })
                }
            }
            draw(e) {
                if (!iS(this))
                    return;
                let t = e
                  , i = e=>{
                    t && (this._lastFrameTime = void 0,
                    t = !1),
                    this._nextFrame(e)
                }
                ;
                this._drawAnimationFrame = requestAnimationFrame(e=>i(e))
            }
            async export(e, t={}) {
                for (let[,i] of this.plugins) {
                    if (!i.export)
                        continue;
                    let s = await i.export(e, t);
                    if (s.supported)
                        return s.blob
                }
                eI.error(`${es} - Export plugin with type ${e} not found`)
            }
            handleClickMode(e) {
                if (iS(this))
                    for (let[,t] of (this.particles.handleClickMode(e),
                    this.plugins))
                        t.handleClickMode?.(e)
            }
            async init() {
                if (!iS(this))
                    return;
                for (let e of this._engine.getSupportedEffects()) {
                    let t = this._engine.getEffectDrawer(e);
                    t && this.effectDrawers.set(e, t)
                }
                for (let e of this._engine.getSupportedShapes()) {
                    let t = this._engine.getShapeDrawer(e);
                    t && this.shapeDrawers.set(e, t)
                }
                for (let[e,t] of (await this.particles.initPlugins(),
                this._options = iC(this._engine, this, this._initialSourceOptions, this.sourceOptions),
                this.actualOptions = iC(this._engine, this, this._options),
                await this._engine.getAvailablePlugins(this)))
                    this.plugins.set(e, t);
                this.retina.init(),
                await this.canvas.init(),
                this.updateActualOptions(),
                this.canvas.initBackground(),
                this.canvas.resize();
                let {zLayers: e, duration: t, delay: i, fpsLimit: s, smooth: n} = this.actualOptions;
                for (let[,a] of (this.zLayers = e,
                this._duration = eS(t) * ea,
                this._delay = eS(i) * ea,
                this._lifeTime = 0,
                this.fpsLimit = s > 0 ? s : 120,
                this._smooth = n,
                this.effectDrawers))
                    await a.init?.(this);
                for (let[,e] of this.shapeDrawers)
                    await e.init?.(this);
                for (let[,e] of this.plugins)
                    await e.init?.();
                for (let[,e] of (this._engine.dispatchEvent(p.containerInit, {
                    container: this
                }),
                await this.particles.init(),
                this.particles.setDensity(),
                this.plugins))
                    e.particlesSetup?.();
                this._engine.dispatchEvent(p.particlesSetup, {
                    container: this
                })
            }
            async loadTheme(e) {
                iS(this) && (this._currentTheme = e,
                await this.refresh())
            }
            pause() {
                if (iS(this) && (void 0 !== this._drawAnimationFrame && (cancelAnimationFrame(this._drawAnimationFrame),
                delete this._drawAnimationFrame),
                !this._paused)) {
                    for (let[,e] of this.plugins)
                        e.pause?.();
                    this.pageHidden || (this._paused = !0),
                    this._engine.dispatchEvent(p.containerPaused, {
                        container: this
                    })
                }
            }
            play(e) {
                if (!iS(this))
                    return;
                let t = this._paused || e;
                if (this._firstStart && !this.actualOptions.autoPlay) {
                    this._firstStart = !1;
                    return
                }
                if (this._paused && (this._paused = !1),
                t)
                    for (let[,e] of this.plugins)
                        e.play && e.play();
                this._engine.dispatchEvent(p.containerPlay, {
                    container: this
                }),
                this.draw(t ?? !1)
            }
            async refresh() {
                if (iS(this))
                    return this.stop(),
                    this.start()
            }
            async reset(e) {
                if (iS(this))
                    return this._initialSourceOptions = e,
                    this._sourceOptions = e,
                    this._options = iC(this._engine, this, this._initialSourceOptions, this.sourceOptions),
                    this.actualOptions = iC(this._engine, this, this._options),
                    this.refresh()
            }
            async start() {
                iS(this) && !this.started && (await this.init(),
                this.started = !0,
                await new Promise(e=>{
                    let t = async()=>{
                        for (let[,e] of (this._eventListeners.addListeners(),
                        this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element),
                        this.plugins))
                            await e.start?.();
                        this._engine.dispatchEvent(p.containerStarted, {
                            container: this
                        }),
                        this.play(),
                        e()
                    }
                    ;
                    this._delayTimeout = setTimeout(()=>void t(), this._delay)
                }
                ))
            }
            stop() {
                if (iS(this) && this.started) {
                    for (let[,e] of (this._delayTimeout && (clearTimeout(this._delayTimeout),
                    delete this._delayTimeout),
                    this._firstStart = !0,
                    this.started = !1,
                    this._eventListeners.removeListeners(),
                    this.pause(),
                    this.particles.clear(),
                    this.canvas.stop(),
                    this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element),
                    this.plugins))
                        e.stop?.();
                    for (let e of this.plugins.keys())
                        this.plugins.delete(e);
                    this._sourceOptions = this._options,
                    this._engine.dispatchEvent(p.containerStopped, {
                        container: this
                    })
                }
            }
            updateActualOptions() {
                this.actualOptions.responsive = [];
                let e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                return this.actualOptions.setTheme(this._currentTheme),
                this._responsiveMaxWidth !== e && (this._responsiveMaxWidth = e,
                !0)
            }
        }
        class iM {
            constructor() {
                this._listeners = new Map
            }
            addEventListener(e, t) {
                this.removeEventListener(e, t);
                let i = this._listeners.get(e);
                i || (i = [],
                this._listeners.set(e, i)),
                i.push(t)
            }
            dispatchEvent(e, t) {
                let i = this._listeners.get(e);
                i?.forEach(e=>e(t))
            }
            hasEventListener(e) {
                return !!this._listeners.get(e)
            }
            removeAllEventListeners(e) {
                e ? this._listeners.delete(e) : this._listeners = new Map
            }
            removeEventListener(e, t) {
                let i = this._listeners.get(e);
                if (!i)
                    return;
                let s = i.length
                  , n = i.indexOf(t);
                n < 0 || (1 === s ? this._listeners.delete(e) : i.splice(n, 1))
            }
        }
        async function iE(e, t, i, s=!1) {
            let n = t.get(e);
            return (!n || s) && (n = await Promise.all([...i.values()].map(t=>t(e))),
            t.set(e, n)),
            n
        }
        async function ik(e) {
            let t = eZ(e.url, e.index);
            if (!t)
                return e.fallback;
            let i = await fetch(t);
            return i.ok ? await i.json() : (eI.error(`${es} ${i.status} while retrieving config file`),
            e.fallback)
        }
        let iP = "true"
          , iz = "false"
          , iO = "canvas"
          , iI = e=>{
            let t;
            if (e instanceof HTMLCanvasElement || e.tagName.toLowerCase() === iO)
                (t = e).dataset[J] || (t.dataset[J] = iz);
            else {
                let i = e.getElementsByTagName(iO);
                i.length ? (t = i[0]).dataset[J] = iz : ((t = document.createElement(iO)).dataset[J] = iP,
                e.appendChild(t))
            }
            let i = "100%";
            return t.style.width || (t.style.width = i),
            t.style.height || (t.style.height = i),
            t
        }
          , iL = (e,t)=>{
            let i = t ?? document.getElementById(e);
            return i || ((i = document.createElement("div")).id = e,
            i.dataset[J] = iP,
            document.body.append(i)),
            i
        }
        ;
        class iD {
            constructor() {
                this._configs = new Map,
                this._domArray = [],
                this._eventDispatcher = new iM,
                this._initialized = !1,
                this.plugins = [],
                this._initializers = {
                    interactors: new Map,
                    movers: new Map,
                    updaters: new Map
                },
                this.interactors = new Map,
                this.movers = new Map,
                this.updaters = new Map,
                this.presets = new Map,
                this.effectDrawers = new Map,
                this.shapeDrawers = new Map,
                this.pathGenerators = new Map
            }
            get configs() {
                let e = {};
                for (let[t,i] of this._configs)
                    e[t] = i;
                return e
            }
            get items() {
                return this._domArray
            }
            get version() {
                return "3.4.0"
            }
            addConfig(e) {
                let t = e.key ?? e.name ?? "default";
                this._configs.set(t, e),
                this._eventDispatcher.dispatchEvent(p.configAdded, {
                    data: {
                        name: t,
                        config: e
                    }
                })
            }
            async addEffect(e, t, i=!0) {
                eX(e, e=>{
                    this.getEffectDrawer(e) || this.effectDrawers.set(e, t)
                }
                ),
                await this.refresh(i)
            }
            addEventListener(e, t) {
                this._eventDispatcher.addEventListener(e, t)
            }
            async addInteractor(e, t, i=!0) {
                this._initializers.interactors.set(e, t),
                await this.refresh(i)
            }
            async addMover(e, t, i=!0) {
                this._initializers.movers.set(e, t),
                await this.refresh(i)
            }
            async addParticleUpdater(e, t, i=!0) {
                this._initializers.updaters.set(e, t),
                await this.refresh(i)
            }
            async addPathGenerator(e, t, i=!0) {
                this.getPathGenerator(e) || this.pathGenerators.set(e, t),
                await this.refresh(i)
            }
            async addPlugin(e, t=!0) {
                this.getPlugin(e.id) || this.plugins.push(e),
                await this.refresh(t)
            }
            async addPreset(e, t, i=!1, s=!0) {
                (i || !this.getPreset(e)) && this.presets.set(e, t),
                await this.refresh(s)
            }
            async addShape(e, t=!0) {
                for (let t of e.validTypes)
                    this.getShapeDrawer(t) || this.shapeDrawers.set(t, e);
                await this.refresh(t)
            }
            clearPlugins(e) {
                this.updaters.delete(e),
                this.movers.delete(e),
                this.interactors.delete(e)
            }
            dispatchEvent(e, t) {
                this._eventDispatcher.dispatchEvent(e, t)
            }
            dom() {
                return this.items
            }
            domItem(e) {
                return this.item(e)
            }
            async getAvailablePlugins(e) {
                let t = new Map;
                for (let i of this.plugins)
                    i.needsPlugin(e.actualOptions) && t.set(i.id, await i.getPlugin(e));
                return t
            }
            getEffectDrawer(e) {
                return this.effectDrawers.get(e)
            }
            async getInteractors(e, t=!1) {
                return iE(e, this.interactors, this._initializers.interactors, t)
            }
            async getMovers(e, t=!1) {
                return iE(e, this.movers, this._initializers.movers, t)
            }
            getPathGenerator(e) {
                return this.pathGenerators.get(e)
            }
            getPlugin(e) {
                return this.plugins.find(t=>t.id === e)
            }
            getPreset(e) {
                return this.presets.get(e)
            }
            getShapeDrawer(e) {
                return this.shapeDrawers.get(e)
            }
            getSupportedEffects() {
                return this.effectDrawers.keys()
            }
            getSupportedShapes() {
                return this.shapeDrawers.keys()
            }
            async getUpdaters(e, t=!1) {
                return iE(e, this.updaters, this._initializers.updaters, t)
            }
            init() {
                this._initialized || (this._initialized = !0)
            }
            item(e) {
                let {items: t} = this
                  , i = t[e];
                if (!i || i.destroyed) {
                    t.splice(e, 1);
                    return
                }
                return i
            }
            async load(e) {
                let t = e.id ?? e.element?.id ?? `tsparticles${Math.floor(1e4 * eb())}`
                  , {index: i, url: s} = e
                  , n = eZ(s ? await ik({
                    fallback: e.options,
                    url: s,
                    index: i
                }) : e.options, i)
                  , {items: a} = this
                  , r = a.findIndex(e=>e.id.description === t)
                  , o = new iT(this,t,n);
                if (r >= 0) {
                    let e = this.item(r);
                    e && !e.destroyed && e.destroy(!1),
                    a.splice(r, e ? 1 : 0, o)
                } else
                    a.push(o);
                let l = iI(iL(t, e.element));
                return o.canvas.loadCanvas(l),
                await o.start(),
                o
            }
            loadOptions(e, t) {
                this.plugins.forEach(i=>i.loadOptions?.(e, t))
            }
            loadParticlesOptions(e, t, ...i) {
                let s = this.updaters.get(e);
                s && s.forEach(e=>e.loadOptions?.(t, ...i))
            }
            async refresh(e=!0) {
                e && await Promise.all(this.items.map(e=>e.refresh()))
            }
            removeEventListener(e, t) {
                this._eventDispatcher.removeEventListener(e, t)
            }
            setOnClickHandler(e) {
                let {items: t} = this;
                if (!t.length)
                    throw Error(`${es} can only set click handlers after calling tsParticles.load()`);
                t.forEach(t=>t.addClickHandler(e))
            }
        }
        (U = S || (S = {}))[U.h = 1] = "h",
        U[U.s = 2] = "s",
        U[U.l = 3] = "l",
        U[U.a = 5] = "a";
        class iR {
            constructor() {
                this.key = "hsl",
                this.stringPrefix = "hsl"
            }
            handleColor(e) {
                let t = e.value.hsl ?? e.value;
                if (void 0 !== t.h && void 0 !== t.s && void 0 !== t.l)
                    return e8(t)
            }
            handleRangeColor(e) {
                let t = e.value.hsl ?? e.value;
                if (void 0 !== t.h && void 0 !== t.l)
                    return e8({
                        h: eS(t.h),
                        l: eS(t.l),
                        s: eS(t.s)
                    })
            }
            parseString(e) {
                if (!e.startsWith("hsl"))
                    return;
                let t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
                return t ? function(e) {
                    let t = e8(e);
                    return {
                        a: e.a,
                        b: t.b,
                        g: t.g,
                        r: t.r
                    }
                }({
                    a: t.length > 4 ? eO(t[S.a]) : 1,
                    h: parseInt(t[S.h], 10),
                    l: parseInt(t[S.l], 10),
                    s: parseInt(t[S.s], 10)
                }) : void 0
            }
        }
        (X = C || (C = {}))[X.r = 1] = "r",
        X[X.g = 2] = "g",
        X[X.b = 3] = "b",
        X[X.a = 5] = "a";
        class iA {
            constructor() {
                this.key = "rgb",
                this.stringPrefix = "rgb"
            }
            handleColor(e) {
                let t = e.value.rgb ?? e.value;
                if (void 0 !== t.r)
                    return t
            }
            handleRangeColor(e) {
                let t = e.value.rgb ?? e.value;
                if (void 0 !== t.r)
                    return {
                        r: eS(t.r),
                        g: eS(t.g),
                        b: eS(t.b)
                    }
            }
            parseString(e) {
                if (!e.startsWith(this.stringPrefix))
                    return;
                let t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
                return t ? {
                    a: t.length > 4 ? eO(t[C.a]) : 1,
                    b: parseInt(t[C.b], 10),
                    g: parseInt(t[C.g], 10),
                    r: parseInt(t[C.r], 10)
                } : void 0
            }
        }
        class iB {
            constructor(e) {
                this.type = w.external,
                this.container = e
            }
        }
        class iF {
            constructor(e) {
                this.type = w.particles,
                this.container = e
            }
        }
        (Z = T || (T = {})).clockwise = "clockwise",
        Z.counterClockwise = "counter-clockwise",
        Z.random = "random",
        (K = M || (M = {})).linear = "linear",
        K.radial = "radial",
        K.random = "random",
        (Q = E || (E = {})).easeInBack = "ease-in-back",
        Q.easeInCirc = "ease-in-circ",
        Q.easeInCubic = "ease-in-cubic",
        Q.easeInLinear = "ease-in-linear",
        Q.easeInQuad = "ease-in-quad",
        Q.easeInQuart = "ease-in-quart",
        Q.easeInQuint = "ease-in-quint",
        Q.easeInExpo = "ease-in-expo",
        Q.easeInSine = "ease-in-sine",
        Q.easeOutBack = "ease-out-back",
        Q.easeOutCirc = "ease-out-circ",
        Q.easeOutCubic = "ease-out-cubic",
        Q.easeOutLinear = "ease-out-linear",
        Q.easeOutQuad = "ease-out-quad",
        Q.easeOutQuart = "ease-out-quart",
        Q.easeOutQuint = "ease-out-quint",
        Q.easeOutExpo = "ease-out-expo",
        Q.easeOutSine = "ease-out-sine",
        Q.easeInOutBack = "ease-in-out-back",
        Q.easeInOutCirc = "ease-in-out-circ",
        Q.easeInOutCubic = "ease-in-out-cubic",
        Q.easeInOutLinear = "ease-in-out-linear",
        Q.easeInOutQuad = "ease-in-out-quad",
        Q.easeInOutQuart = "ease-in-out-quart",
        Q.easeInOutQuint = "ease-in-out-quint",
        Q.easeInOutExpo = "ease-in-out-expo",
        Q.easeInOutSine = "ease-in-out-sine";
        let ij = function() {
            let e = new iA
              , t = new iR;
            e5(e),
            e5(t);
            let i = new iD;
            return i.init(),
            i
        }();
        eR() || (window.tsParticles = ij)
    },
    7287: function(e, t, i) {
        "use strict";
        i.d(t, {
            ZP: function() {
                return r
            },
            bP: function() {
                return o
            }
        });
        var s = i(7470)
          , n = i(7437)
          , a = i(2265);
        let r = e=>{
            let t = e.id ?? "tsparticles";
            return (0,
            a.useEffect)(()=>{
                let i;
                return s.S6T.load({
                    id: t,
                    url: e.url,
                    options: e.options
                }).then(t=>{
                    var s;
                    i = t,
                    null == (s = e.particlesLoaded) || s.call(e, t)
                }
                ),
                ()=>{
                    null == i || i.destroy()
                }
            }
            , [t, e, e.url, e.options]),
            (0,
            n.jsx)("div", {
                id: t,
                className: e.className
            })
        }
        ;
        async function o(e) {
            await e(s.S6T)
        }
    },
    5116: function(e, t, i) {
        "use strict";
        i.d(t, {
            S: function() {
                return t_
            }
        });
        var s, n, a, r, o, l, c = i(7470);
        class d {
            init(e) {
                let t = e.options.move.gravity;
                e.gravity = {
                    enable: t.enable,
                    acceleration: (0,
                    c.Gu7)(t.acceleration),
                    inverse: t.inverse
                },
                function(e) {
                    let t = e.container
                      , i = e.options.move.spin;
                    if (!i.enable)
                        return;
                    let s = i.position ?? {
                        x: 50,
                        y: 50
                    }
                      , n = {
                        x: .01 * s.x * t.canvas.size.width,
                        y: .01 * s.y * t.canvas.size.height
                    }
                      , a = e.getPosition()
                      , r = (0,
                    c.Spd)(a, n)
                      , o = (0,
                    c.Gu7)(i.acceleration);
                    e.retina.spinAcceleration = o * t.retina.pixelRatio,
                    e.spin = {
                        center: n,
                        direction: e.velocity.x >= 0 ? c.RnL.clockwise : c.RnL.counterClockwise,
                        angle: e.velocity.angle,
                        radius: r,
                        acceleration: e.retina.spinAcceleration
                    }
                }(e)
            }
            isEnabled(e) {
                return !e.destroyed && e.options.move.enable
            }
            move(e, t) {
                let i = e.options
                  , s = i.move;
                if (!s.enable)
                    return;
                let n = e.container
                  , a = n.retina.pixelRatio;
                e.retina.moveSpeed ??= (0,
                c.Gu7)(s.speed) * a,
                e.retina.moveDrift ??= (0,
                c.Gu7)(e.options.move.drift) * a;
                let r = e.slow.inRange ? e.slow.factor : 1
                  , o = e.retina.moveSpeed * n.retina.reduceFactor
                  , l = e.retina.moveDrift
                  , d = (0,
                c.KIV)(i.size.value) * a
                  , u = o * (s.size ? e.getRadius() / d : 1) * r * (t.factor || 1) / 2
                  , h = e.retina.maxSpeed ?? n.retina.maxSpeed;
                s.spin.enable ? function(e, t) {
                    let i = e.container;
                    if (!e.spin)
                        return;
                    let s = {
                        x: e.spin.direction === c.RnL.clockwise ? Math.cos : Math.sin,
                        y: e.spin.direction === c.RnL.clockwise ? Math.sin : Math.cos
                    };
                    e.position.x = e.spin.center.x + e.spin.radius * s.x(e.spin.angle),
                    e.position.y = e.spin.center.y + e.spin.radius * s.y(e.spin.angle),
                    e.spin.radius += e.spin.acceleration;
                    let n = Math.max(i.canvas.size.width, i.canvas.size.height)
                      , a = .5 * n;
                    e.spin.radius > a ? (e.spin.radius = a,
                    e.spin.acceleration *= -1) : e.spin.radius < 0 && (e.spin.radius = 0,
                    e.spin.acceleration *= -1),
                    e.spin.angle += .01 * t * (1 - e.spin.radius / n)
                }(e, u) : function(e, t, i, s, n, a) {
                    (function(e, t) {
                        let i = e.options.move.path;
                        if (!i.enable)
                            return;
                        if (e.lastPathTime <= e.pathDelay) {
                            e.lastPathTime += t.value;
                            return
                        }
                        let s = e.pathGenerator?.generate(e, t);
                        s && e.velocity.addTo(s),
                        i.clamp && (e.velocity.x = (0,
                        c.uZ5)(e.velocity.x, -1, 1),
                        e.velocity.y = (0,
                        c.uZ5)(e.velocity.y, -1, 1)),
                        e.lastPathTime -= e.pathDelay
                    }
                    )(e, a);
                    let r = e.gravity
                      , o = r?.enable && r.inverse ? -1 : 1;
                    n && i && (e.velocity.x += n * a.factor / (60 * i)),
                    r?.enable && i && (e.velocity.y += r.acceleration * a.factor * o / (60 * i));
                    let l = e.moveDecay;
                    e.velocity.multTo(l);
                    let d = e.velocity.mult(i);
                    r?.enable && s > 0 && (!r.inverse && d.y >= 0 && d.y >= s || r.inverse && d.y <= 0 && d.y <= -s) && (d.y = o * s,
                    i && (e.velocity.y = d.y / i));
                    let u = e.options.zIndex
                      , h = (1 - e.zIndexFactor) ** u.velocityRate;
                    d.multTo(h);
                    let {position: p} = e;
                    p.addTo(d),
                    t.vibrate && (p.x += Math.sin(p.x * Math.cos(p.y)),
                    p.y += Math.cos(p.y * Math.sin(p.x)))
                }(e, s, u, h, l, t),
                function(e) {
                    let t = e.initialPosition
                      , {dx: i, dy: s} = (0,
                    c.oW6)(t, e.position)
                      , n = Math.abs(i)
                      , a = Math.abs(s)
                      , {maxDistance: r} = e.retina
                      , o = r.horizontal
                      , l = r.vertical;
                    if (o || l) {
                        if ((o && n >= o || l && a >= l) && !e.misplaced)
                            e.misplaced = !!o && n > o || !!l && a > l,
                            o && (e.velocity.x = .5 * e.velocity.y - e.velocity.x),
                            l && (e.velocity.y = .5 * e.velocity.x - e.velocity.y);
                        else if ((!o || n < o) && (!l || a < l) && e.misplaced)
                            e.misplaced = !1;
                        else if (e.misplaced) {
                            let i = e.position
                              , s = e.velocity;
                            o && (i.x < t.x && s.x < 0 || i.x > t.x && s.x > 0) && (s.x *= -(0,
                            c.sZz)()),
                            l && (i.y < t.y && s.y < 0 || i.y > t.y && s.y > 0) && (s.y *= -(0,
                            c.sZz)())
                        }
                    }
                }(e)
            }
        }
        async function u(e, t=!0) {
            await e.addMover("base", ()=>Promise.resolve(new d), t)
        }
        let h = 2 * Math.PI;
        class p {
            constructor() {
                this.validTypes = ["circle"]
            }
            draw(e) {
                !function(e) {
                    let {context: t, particle: i, radius: s} = e;
                    i.circleRange || (i.circleRange = {
                        min: 0,
                        max: h
                    });
                    let n = i.circleRange;
                    t.arc(0, 0, s, n.min, n.max, !1)
                }(e)
            }
            getSidesCount() {
                return 12
            }
            particleInit(e, t) {
                let i = t.shapeData
                  , s = i?.angle ?? {
                    max: 360,
                    min: 0
                };
                t.circleRange = (0,
                c.Kn2)(s) ? {
                    min: (0,
                    c.Idc)(s.min),
                    max: (0,
                    c.Idc)(s.max)
                } : {
                    min: 0,
                    max: (0,
                    c.Idc)(s)
                }
            }
        }
        async function f(e, t=!0) {
            await e.addShape(new p, t)
        }
        class m {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = (0,
                c.lNs)(e.options.color, e.id, e.options.reduceDuplicates);
                t && (e.color = (0,
                c.bS$)(t, e.options.color.animation, this.container.retina.reduceFactor))
            }
            isEnabled(e) {
                let {h: t, s: i, l: s} = e.options.color.animation
                  , {color: n} = e;
                return !e.destroyed && !e.spawning && (n?.h.value !== void 0 && t.enable || n?.s.value !== void 0 && i.enable || n?.l.value !== void 0 && s.enable)
            }
            update(e, t) {
                (0,
                c.PBz)(e.color, t)
            }
        }
        async function g(e, t=!0) {
            await e.addParticleUpdater("color", e=>Promise.resolve(new m(e)), t)
        }
        class v {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = e.options.opacity;
                e.opacity = (0,
                c.V0)(t, 1);
                let i = t.animation;
                i.enable && (e.opacity.velocity = (0,
                c.Gu7)(i.speed) / c.tZy * this.container.retina.reduceFactor,
                i.sync || (e.opacity.velocity *= (0,
                c.sZz)()))
            }
            isEnabled(e) {
                return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((e.opacity.maxLoops ?? 0) <= 0 || (e.opacity.maxLoops ?? 0) > 0 && (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0))
            }
            reset(e) {
                e.opacity && (e.opacity.time = 0,
                e.opacity.loops = 0)
            }
            update(e, t) {
                this.isEnabled(e) && e.opacity && (0,
                c.CrJ)(e, e.opacity, !0, e.options.opacity.animation.destroy, t)
            }
        }
        async function y(e, t=!0) {
            await e.addParticleUpdater("opacity", e=>Promise.resolve(new v(e)), t)
        }
        class b {
            constructor(e) {
                this.container = e,
                this.modes = [c.Voc.bounce, c.Voc.split]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let n = this.container
                  , a = !1;
                for (let[,s] of n.plugins)
                    if (void 0 !== s.particleBounce && (a = s.particleBounce(e, i, t)),
                    a)
                        break;
                if (a)
                    return;
                let r = e.getPosition()
                  , o = e.offset
                  , l = e.getRadius()
                  , d = (0,
                c.M_G)(r, l)
                  , u = n.canvas.size;
                !function(e) {
                    if (e.outMode !== c.Voc.bounce && e.outMode !== c.Voc.split || e.direction !== c.DYc.left && e.direction !== c.DYc.right)
                        return;
                    e.bounds.right < 0 && e.direction === c.DYc.left ? e.particle.position.x = e.size + e.offset.x : e.bounds.left > e.canvasSize.width && e.direction === c.DYc.right && (e.particle.position.x = e.canvasSize.width - e.size - e.offset.x);
                    let t = e.particle.velocity.x
                      , i = !1;
                    if (e.direction === c.DYc.right && e.bounds.right >= e.canvasSize.width && t > 0 || e.direction === c.DYc.left && e.bounds.left <= 0 && t < 0) {
                        let t = (0,
                        c.Gu7)(e.particle.options.bounce.horizontal.value);
                        e.particle.velocity.x *= -t,
                        i = !0
                    }
                    if (!i)
                        return;
                    let s = e.offset.x + e.size;
                    e.bounds.right >= e.canvasSize.width && e.direction === c.DYc.right ? e.particle.position.x = e.canvasSize.width - s : e.bounds.left <= 0 && e.direction === c.DYc.left && (e.particle.position.x = s),
                    e.outMode === c.Voc.split && e.particle.destroy()
                }({
                    particle: e,
                    outMode: s,
                    direction: t,
                    bounds: d,
                    canvasSize: u,
                    offset: o,
                    size: l
                }),
                function(e) {
                    if (e.outMode !== c.Voc.bounce && e.outMode !== c.Voc.split || e.direction !== c.DYc.bottom && e.direction !== c.DYc.top)
                        return;
                    e.bounds.bottom < 0 && e.direction === c.DYc.top ? e.particle.position.y = e.size + e.offset.y : e.bounds.top > e.canvasSize.height && e.direction === c.DYc.bottom && (e.particle.position.y = e.canvasSize.height - e.size - e.offset.y);
                    let t = e.particle.velocity.y
                      , i = !1;
                    if (e.direction === c.DYc.bottom && e.bounds.bottom >= e.canvasSize.height && t > 0 || e.direction === c.DYc.top && e.bounds.top <= 0 && t < 0) {
                        let t = (0,
                        c.Gu7)(e.particle.options.bounce.vertical.value);
                        e.particle.velocity.y *= -t,
                        i = !0
                    }
                    if (!i)
                        return;
                    let s = e.offset.y + e.size;
                    e.bounds.bottom >= e.canvasSize.height && e.direction === c.DYc.bottom ? e.particle.position.y = e.canvasSize.height - s : e.bounds.top <= 0 && e.direction === c.DYc.top && (e.particle.position.y = s),
                    e.outMode === c.Voc.split && e.particle.destroy()
                }({
                    particle: e,
                    outMode: s,
                    direction: t,
                    bounds: d,
                    canvasSize: u,
                    offset: o,
                    size: l
                })
            }
        }
        class w {
            constructor(e) {
                this.container = e,
                this.modes = [c.Voc.destroy]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let n = this.container;
                switch (e.outType) {
                case c.Igb.normal:
                case c.Igb.outside:
                    if ((0,
                    c.Ac)(e.position, n.canvas.size, c.OWs.origin, e.getRadius(), t))
                        return;
                    break;
                case c.Igb.inside:
                    {
                        let {dx: t, dy: i} = (0,
                        c.oW6)(e.position, e.moveCenter)
                          , {x: s, y: n} = e.velocity;
                        if (s < 0 && t > e.moveCenter.radius || n < 0 && i > e.moveCenter.radius || s >= 0 && t < -e.moveCenter.radius || n >= 0 && i < -e.moveCenter.radius)
                            return
                    }
                }
                n.particles.remove(e, void 0, !0)
            }
        }
        class x {
            constructor(e) {
                this.container = e,
                this.modes = [c.Voc.none]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s) || ((e.options.move.distance.horizontal && (t === c.DYc.left || t === c.DYc.right)) ?? (e.options.move.distance.vertical && (t === c.DYc.top || t === c.DYc.bottom))))
                    return;
                let n = e.options.move.gravity
                  , a = this.container
                  , r = a.canvas.size
                  , o = e.getRadius();
                if (n.enable) {
                    let i = e.position;
                    (!n.inverse && i.y > r.height + o && t === c.DYc.bottom || n.inverse && i.y < -o && t === c.DYc.top) && a.particles.remove(e)
                } else {
                    if (e.velocity.y > 0 && e.position.y <= r.height + o || e.velocity.y < 0 && e.position.y >= -o || e.velocity.x > 0 && e.position.x <= r.width + o || e.velocity.x < 0 && e.position.x >= -o)
                        return;
                    (0,
                    c.Ac)(e.position, a.canvas.size, c.OWs.origin, o, t) || a.particles.remove(e)
                }
            }
        }
        class _ {
            constructor(e) {
                this.container = e,
                this.modes = [c.Voc.out]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let n = this.container;
                if (e.outType === c.Igb.inside) {
                    let {x: t, y: i} = e.velocity
                      , s = c.OWs.origin;
                    s.length = e.moveCenter.radius,
                    s.angle = e.velocity.angle + Math.PI,
                    s.addTo(c.OWs.create(e.moveCenter));
                    let {dx: a, dy: r} = (0,
                    c.oW6)(e.position, s);
                    if (t <= 0 && a >= 0 || i <= 0 && r >= 0 || t >= 0 && a <= 0 || i >= 0 && r <= 0)
                        return;
                    e.position.x = Math.floor((0,
                    c.vdf)({
                        min: 0,
                        max: n.canvas.size.width
                    })),
                    e.position.y = Math.floor((0,
                    c.vdf)({
                        min: 0,
                        max: n.canvas.size.height
                    }));
                    let {dx: o, dy: l} = (0,
                    c.oW6)(e.position, e.moveCenter);
                    e.direction = Math.atan2(-l, -o),
                    e.velocity.angle = e.direction
                } else {
                    if ((0,
                    c.Ac)(e.position, n.canvas.size, c.OWs.origin, e.getRadius(), t))
                        return;
                    switch (e.outType) {
                    case c.Igb.outside:
                        {
                            e.position.x = Math.floor((0,
                            c.vdf)({
                                min: -e.moveCenter.radius,
                                max: e.moveCenter.radius
                            })) + e.moveCenter.x,
                            e.position.y = Math.floor((0,
                            c.vdf)({
                                min: -e.moveCenter.radius,
                                max: e.moveCenter.radius
                            })) + e.moveCenter.y;
                            let {dx: t, dy: i} = (0,
                            c.oW6)(e.position, e.moveCenter);
                            e.moveCenter.radius && (e.direction = Math.atan2(i, t),
                            e.velocity.angle = e.direction);
                            break
                        }
                    case c.Igb.normal:
                        {
                            let i = e.options.move.warp
                              , s = n.canvas.size
                              , a = {
                                bottom: s.height + e.getRadius() + e.offset.y,
                                left: -e.getRadius() - e.offset.x,
                                right: s.width + e.getRadius() + e.offset.x,
                                top: -e.getRadius() - e.offset.y
                            }
                              , r = e.getRadius()
                              , o = (0,
                            c.M_G)(e.position, r);
                            t === c.DYc.right && o.left > s.width + e.offset.x ? (e.position.x = a.left,
                            e.initialPosition.x = e.position.x,
                            i || (e.position.y = (0,
                            c.sZz)() * s.height,
                            e.initialPosition.y = e.position.y)) : t === c.DYc.left && o.right < -e.offset.x && (e.position.x = a.right,
                            e.initialPosition.x = e.position.x,
                            i || (e.position.y = (0,
                            c.sZz)() * s.height,
                            e.initialPosition.y = e.position.y)),
                            t === c.DYc.bottom && o.top > s.height + e.offset.y ? (i || (e.position.x = (0,
                            c.sZz)() * s.width,
                            e.initialPosition.x = e.position.x),
                            e.position.y = a.top,
                            e.initialPosition.y = e.position.y) : t === c.DYc.top && o.bottom < -e.offset.y && (i || (e.position.x = (0,
                            c.sZz)() * s.width,
                            e.initialPosition.x = e.position.x),
                            e.position.y = a.bottom,
                            e.initialPosition.y = e.position.y)
                        }
                    }
                }
            }
        }
        let S = (e,t)=>e.default === t || e.bottom === t || e.left === t || e.right === t || e.top === t;
        class C {
            constructor(e) {
                this._updateOutMode = (e,t,i,s)=>{
                    for (let n of this.updaters)
                        n.update(e, s, t, i)
                }
                ,
                this.container = e,
                this.updaters = []
            }
            init(e) {
                this.updaters = [];
                let t = e.options.move.outModes;
                S(t, c.Voc.bounce) ? this.updaters.push(new b(this.container)) : S(t, c.Voc.out) ? this.updaters.push(new _(this.container)) : S(t, c.Voc.destroy) ? this.updaters.push(new w(this.container)) : S(t, c.Voc.none) && this.updaters.push(new x(this.container))
            }
            isEnabled(e) {
                return !e.destroyed && !e.spawning
            }
            update(e, t) {
                let i = e.options.move.outModes;
                this._updateOutMode(e, t, i.bottom ?? i.default, c.DYc.bottom),
                this._updateOutMode(e, t, i.left ?? i.default, c.DYc.left),
                this._updateOutMode(e, t, i.right ?? i.default, c.DYc.right),
                this._updateOutMode(e, t, i.top ?? i.default, c.DYc.top)
            }
        }
        async function T(e, t=!0) {
            await e.addParticleUpdater("outModes", e=>Promise.resolve(new C(e)), t)
        }
        class M {
            init(e) {
                let t = e.container
                  , i = e.options.size.animation;
                i.enable && (e.size.velocity = (e.retina.sizeAnimationSpeed ?? t.retina.sizeAnimationSpeed) / c.tZy * t.retina.reduceFactor,
                i.sync || (e.size.velocity *= (0,
                c.sZz)()))
            }
            isEnabled(e) {
                return !e.destroyed && !e.spawning && e.size.enable && ((e.size.maxLoops ?? 0) <= 0 || (e.size.maxLoops ?? 0) > 0 && (e.size.loops ?? 0) < (e.size.maxLoops ?? 0))
            }
            reset(e) {
                e.size.loops = 0
            }
            update(e, t) {
                this.isEnabled(e) && (0,
                c.CrJ)(e, e.size, !0, e.options.size.animation.destroy, t)
            }
        }
        async function E(e, t=!0) {
            await e.addParticleUpdater("size", ()=>Promise.resolve(new M), t)
        }
        async function k(e, t=!0) {
            await u(e, !1),
            await f(e, !1),
            await g(e, !1),
            await y(e, !1),
            await T(e, !1),
            await E(e, !1),
            await e.refresh(t)
        }
        async function P() {
            (0,
            c.bx6)(c.nxi.easeInQuad, e=>e ** 2),
            (0,
            c.bx6)(c.nxi.easeOutQuad, e=>1 - (1 - e) ** 2),
            (0,
            c.bx6)(c.nxi.easeInOutQuad, e=>e < .5 ? 2 * e ** 2 : 1 - (-2 * e + 2) ** 2 / 2),
            await Promise.resolve()
        }
        let z = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
        class O {
            constructor() {
                this.validTypes = ["emoji"],
                this._emojiShapeDict = new Map
            }
            destroy() {
                for (let[e,t] of this._emojiShapeDict)
                    t instanceof ImageBitmap && (t?.close(),
                    this._emojiShapeDict.delete(e))
            }
            draw(e) {
                !function(e) {
                    let {context: t, particle: i, radius: s, opacity: n} = e
                      , a = i.emojiData
                      , r = 2 * s
                      , o = t.globalAlpha;
                    a && (t.globalAlpha = n,
                    t.drawImage(a, -s, -s, r, r),
                    t.globalAlpha = o)
                }(e)
            }
            async init(e) {
                let t = e.actualOptions
                  , {validTypes: i} = this;
                if (!i.find(e=>(0,
                c.dBL)(e, t.particles.shape.type)))
                    return;
                let s = [(0,
                c.mxw)(z)]
                  , n = i.map(e=>t.particles.shape.options[e]).find(e=>!!e);
                n && (0,
                c.KH1)(n, e=>{
                    e.font && s.push((0,
                    c.mxw)(e.font))
                }
                ),
                await Promise.all(s)
            }
            particleDestroy(e) {
                delete e.emojiData
            }
            particleInit(e, t) {
                let i;
                let s = t.shapeData;
                if (!s?.value)
                    return;
                let n = (0,
                c.wA_)(s.value, t.randomIndexData)
                  , a = s.font ?? z;
                if (!n)
                    return;
                let r = `${n}_${a}`
                  , o = this._emojiShapeDict.get(r);
                if (o) {
                    t.emojiData = o;
                    return
                }
                let l = 2 * (0,
                c.KIV)(t.size.value)
                  , d = (0,
                c.KIV)(t.size.value);
                if ("undefined" != typeof OffscreenCanvas) {
                    let e = new OffscreenCanvas(l,l)
                      , t = e.getContext("2d");
                    if (!t)
                        return;
                    t.font = `400 ${2 * d}px ${a}`,
                    t.textBaseline = "middle",
                    t.textAlign = "center",
                    t.fillText(n, d, d),
                    i = e.transferToImageBitmap()
                } else {
                    let e = document.createElement("canvas");
                    e.width = l,
                    e.height = l;
                    let t = e.getContext("2d");
                    if (!t)
                        return;
                    t.font = `400 ${2 * d}px ${a}`,
                    t.textBaseline = "middle",
                    t.textAlign = "center",
                    t.fillText(n, d, d),
                    i = e
                }
                this._emojiShapeDict.set(r, i),
                t.emojiData = i
            }
        }
        async function I(e, t=!0) {
            await e.addShape(new O, t)
        }
        function L(e, t, i, s, n) {
            let a = e.actualOptions.interactivity.modes.attract;
            if (a)
                for (let r of e.particles.quadTree.query(s, n)) {
                    let {dx: e, dy: s, distance: n} = (0,
                    c.oW6)(r.position, t)
                      , o = a.speed * a.factor
                      , l = (0,
                    c.uZ5)((0,
                    c._Xd)(a.easing)(1 - n / i) * o, 1, a.maxSpeed)
                      , d = c.OWs.create(n ? e / n * l : o, n ? s / n * l : o);
                    r.position.subFrom(d)
                }
        }
        class D {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.easing = c.nxi.easeOutQuad,
                this.factor = 1,
                this.maxSpeed = 50,
                this.speed = 1
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.duration && (this.duration = e.duration),
                void 0 !== e.easing && (this.easing = e.easing),
                void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed),
                void 0 !== e.speed && (this.speed = e.speed))
            }
        }
        let R = "attract";
        class A extends c.L8z {
            constructor(e, t) {
                super(t),
                this._engine = e,
                t.attract || (t.attract = {
                    particles: []
                }),
                this.handleClickMode = e=>{
                    let i = this.container.actualOptions.interactivity.modes.attract;
                    if (i && e === R) {
                        for (let e of (t.attract || (t.attract = {
                            particles: []
                        }),
                        t.attract.clicking = !0,
                        t.attract.count = 0,
                        t.attract.particles))
                            this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
                        t.attract.particles = [],
                        t.attract.finish = !1,
                        setTimeout(()=>{
                            t.destroyed || (t.attract || (t.attract = {
                                particles: []
                            }),
                            t.attract.clicking = !1)
                        }
                        , i.duration * c.X5o)
                    }
                }
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.attract;
                t && (e.retina.attractModeDistance = t.distance * e.retina.pixelRatio)
            }
            interact() {
                let e = this.container
                  , t = e.actualOptions
                  , i = e.interactivity.status === c.WtO
                  , s = t.interactivity.events
                  , {enable: n, mode: a} = s.onHover
                  , {enable: r, mode: o} = s.onClick;
                i && n && (0,
                c.dBL)(R, a) ? function(e, t) {
                    let i = e.interactivity.mouse.position
                      , s = e.retina.attractModeDistance;
                    s && !(s < 0) && i && L(e, i, s, new c.Cdc(i.x,i.y,s), e=>t(e))
                }(this.container, e=>this.isEnabled(e)) : r && (0,
                c.dBL)(R, o) && function(e, t) {
                    e.attract || (e.attract = {
                        particles: []
                    });
                    let {attract: i} = e;
                    if (i.finish || (i.count || (i.count = 0),
                    i.count++,
                    i.count !== e.particles.count || (i.finish = !0)),
                    i.clicking) {
                        let i = e.interactivity.mouse.clickPosition
                          , s = e.retina.attractModeDistance;
                        if (!s || s < 0 || !i)
                            return;
                        L(e, i, s, new c.Cdc(i.x,i.y,s), e=>t(e))
                    } else
                        !1 === i.clicking && (i.particles = [])
                }(this.container, e=>this.isEnabled(e))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , n = (e?.interactivity ?? i.interactivity).events;
                if ((!s.position || !n.onHover.enable) && (!s.clickPosition || !n.onClick.enable))
                    return !1;
                let a = n.onHover.mode
                  , r = n.onClick.mode;
                return (0,
                c.dBL)(R, a) || (0,
                c.dBL)(R, r)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.attract || (e.attract = new D),
                t))
                    e.attract.load(i?.attract)
            }
            reset() {}
        }
        async function B(e, t=!0) {
            await e.addInteractor("externalAttract", t=>Promise.resolve(new A(e,t)), t)
        }
        let F = .5 * Math.PI;
        function j(e, t, i, s, n) {
            for (let a of e.particles.quadTree.query(s, n))
                s instanceof c.Cdc ? (0,
                c.kRC)((0,
                c.gy4)(a), {
                    position: t,
                    radius: i,
                    mass: i ** 2 * F,
                    velocity: c.OWs.origin,
                    factor: c.OWs.origin
                }) : s instanceof c.AeJ && (0,
                c.dpV)(a, (0,
                c.M_G)(t, i))
        }
        class $ {
            constructor() {
                this.distance = 200
            }
            load(e) {
                e && void 0 !== e.distance && (this.distance = e.distance)
            }
        }
        let G = "bounce";
        class q extends c.L8z {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.bounce;
                t && (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio)
            }
            interact() {
                let e = this.container
                  , t = e.actualOptions.interactivity.events
                  , i = e.interactivity.status === c.WtO
                  , s = t.onHover.enable
                  , n = t.onHover.mode
                  , a = t.onDiv;
                if (i && s && (0,
                c.dBL)(G, n))
                    !function(e, t) {
                        let i = e.retina.pixelRatio
                          , s = e.interactivity.mouse.position
                          , n = e.retina.bounceModeDistance;
                        n && !(n < 0) && s && j(e, s, n, new c.Cdc(s.x,s.y,n + 10 * i), t)
                    }(this.container, e=>this.isEnabled(e));
                else {
                    var r, o;
                    r = this.container,
                    o = e=>this.isEnabled(e),
                    (0,
                    c.XDe)(G, a, (e,t)=>(function(e, t, i, s) {
                        let n = document.querySelectorAll(t);
                        n.length && n.forEach(t=>{
                            let n = e.retina.pixelRatio
                              , a = {
                                x: (t.offsetLeft + .5 * t.offsetWidth) * n,
                                y: (t.offsetTop + .5 * t.offsetHeight) * n
                            }
                              , r = .5 * t.offsetWidth * n
                              , o = 10 * n
                              , l = i.type === c.gqJ.circle ? new c.Cdc(a.x,a.y,r + o) : new c.AeJ(t.offsetLeft * n - o,t.offsetTop * n - o,t.offsetWidth * n + 2 * o,t.offsetHeight * n + 2 * o);
                            s(a, r, l)
                        }
                        )
                    }
                    )(r, e, t, (e,t,i)=>j(r, e, t, i, o)))
                }
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , n = (e?.interactivity ?? i.interactivity).events
                  , a = n.onDiv;
                return !!s.position && n.onHover.enable && (0,
                c.dBL)(G, n.onHover.mode) || (0,
                c.wm$)(G, a)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.bounce || (e.bounce = new $),
                t))
                    e.bounce.load(i?.bounce)
            }
            reset() {}
        }
        async function V(e, t=!0) {
            await e.addInteractor("externalBounce", e=>Promise.resolve(new q(e)), t)
        }
        class H {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.mix = !1
            }
            load(e) {
                if (e) {
                    if (void 0 !== e.distance && (this.distance = e.distance),
                    void 0 !== e.duration && (this.duration = e.duration),
                    void 0 !== e.mix && (this.mix = e.mix),
                    void 0 !== e.opacity && (this.opacity = e.opacity),
                    void 0 !== e.color) {
                        let t = (0,
                        c.kJL)(this.color) ? void 0 : this.color;
                        this.color = (0,
                        c.KH1)(e.color, e=>c.OzF.create(t, e))
                    }
                    void 0 !== e.size && (this.size = e.size)
                }
            }
        }
        class W extends H {
            constructor() {
                super(),
                this.selectors = []
            }
            load(e) {
                super.load(e),
                e && void 0 !== e.selectors && (this.selectors = e.selectors)
            }
        }
        class N extends H {
            load(e) {
                super.load(e),
                e && (this.divs = (0,
                c.KH1)(e.divs, e=>{
                    let t = new W;
                    return t.load(e),
                    t
                }
                ))
            }
        }
        function Y(e, t, i, s) {
            return t >= i ? (0,
            c.uZ5)(e + (t - i) * s, e, t) : t < i ? (0,
            c.uZ5)(e - (i - t) * s, t, e) : void 0
        }
        (s = r || (r = {})).color = "color",
        s.opacity = "opacity",
        s.size = "size";
        let U = "bubble";
        class X extends c.L8z {
            constructor(e) {
                super(e),
                this._clickBubble = ()=>{
                    let e = this.container
                      , t = e.actualOptions
                      , i = e.interactivity.mouse.clickPosition
                      , s = t.interactivity.modes.bubble;
                    if (!s || !i)
                        return;
                    e.bubble || (e.bubble = {});
                    let n = e.retina.bubbleModeDistance;
                    if (!n || n < 0)
                        return;
                    let a = e.particles.quadTree.queryCircle(i, n, e=>this.isEnabled(e))
                      , {bubble: o} = e;
                    for (let t of a) {
                        if (!o.clicking)
                            continue;
                        t.bubble.inRange = !o.durationEnd;
                        let a = t.getPosition()
                          , l = (0,
                        c.Spd)(a, i)
                          , d = (new Date().getTime() - (e.interactivity.mouse.clickTime ?? 0)) / c.X5o;
                        d > s.duration && (o.durationEnd = !0),
                        d > 2 * s.duration && (o.clicking = !1,
                        o.durationEnd = !1);
                        let u = {
                            bubbleObj: {
                                optValue: e.retina.bubbleModeSize,
                                value: t.bubble.radius
                            },
                            particlesObj: {
                                optValue: (0,
                                c.KIV)(t.options.size.value) * e.retina.pixelRatio,
                                value: t.size.value
                            },
                            type: r.size
                        };
                        this._process(t, l, d, u);
                        let h = {
                            bubbleObj: {
                                optValue: s.opacity,
                                value: t.bubble.opacity
                            },
                            particlesObj: {
                                optValue: (0,
                                c.KIV)(t.options.opacity.value),
                                value: t.opacity?.value ?? 1
                            },
                            type: r.opacity
                        };
                        this._process(t, l, d, h),
                        !o.durationEnd && l <= n ? this._hoverBubbleColor(t, l) : delete t.bubble.color
                    }
                }
                ,
                this._hoverBubble = ()=>{
                    let e = this.container
                      , t = e.interactivity.mouse.position
                      , i = e.retina.bubbleModeDistance;
                    if (i && !(i < 0) && t)
                        for (let s of e.particles.quadTree.queryCircle(t, i, e=>this.isEnabled(e))) {
                            s.bubble.inRange = !0;
                            let n = s.getPosition()
                              , a = (0,
                            c.Spd)(n, t)
                              , r = 1 - a / i;
                            a <= i ? r >= 0 && e.interactivity.status === c.WtO && (this._hoverBubbleSize(s, r),
                            this._hoverBubbleOpacity(s, r),
                            this._hoverBubbleColor(s, r)) : this.reset(s),
                            e.interactivity.status === c.aMP && this.reset(s)
                        }
                }
                ,
                this._hoverBubbleColor = (e,t,i)=>{
                    let s = this.container.actualOptions
                      , n = i ?? s.interactivity.modes.bubble;
                    if (n) {
                        if (!e.bubble.finalColor) {
                            let t = n.color;
                            if (!t)
                                return;
                            let i = (0,
                            c.wA_)(t);
                            e.bubble.finalColor = (0,
                            c.lNs)(i)
                        }
                        if (e.bubble.finalColor) {
                            if (n.mix) {
                                e.bubble.color = void 0;
                                let i = e.getFillColor();
                                e.bubble.color = i ? (0,
                                c.lCU)((0,
                                c.ocL)(i, e.bubble.finalColor, 1 - t, t)) : e.bubble.finalColor
                            } else
                                e.bubble.color = e.bubble.finalColor
                        }
                    }
                }
                ,
                this._hoverBubbleOpacity = (e,t,i)=>{
                    let s = this.container.actualOptions
                      , n = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
                    if (!n)
                        return;
                    let a = e.options.opacity.value
                      , r = Y(e.opacity?.value ?? 1, n, (0,
                    c.KIV)(a), t);
                    void 0 !== r && (e.bubble.opacity = r)
                }
                ,
                this._hoverBubbleSize = (e,t,i)=>{
                    let s = this.container
                      , n = i?.size ? i.size * s.retina.pixelRatio : s.retina.bubbleModeSize;
                    if (void 0 === n)
                        return;
                    let a = (0,
                    c.KIV)(e.options.size.value) * s.retina.pixelRatio
                      , r = Y(e.size.value, n, a, t);
                    void 0 !== r && (e.bubble.radius = r)
                }
                ,
                this._process = (e,t,i,s)=>{
                    let n = this.container
                      , a = s.bubbleObj.optValue
                      , o = n.actualOptions.interactivity.modes.bubble;
                    if (!o || void 0 === a)
                        return;
                    let l = o.duration
                      , c = n.retina.bubbleModeDistance
                      , d = s.particlesObj.optValue
                      , u = s.bubbleObj.value
                      , h = s.particlesObj.value ?? 0
                      , p = s.type;
                    if (c && !(c < 0) && a !== d) {
                        if (n.bubble || (n.bubble = {}),
                        n.bubble.durationEnd)
                            u && (p === r.size && delete e.bubble.radius,
                            p === r.opacity && delete e.bubble.opacity);
                        else if (t <= c) {
                            if ((u ?? h) !== a) {
                                let t = h - i * (h - a) / l;
                                p === r.size && (e.bubble.radius = t),
                                p === r.opacity && (e.bubble.opacity = t)
                            }
                        } else
                            p === r.size && delete e.bubble.radius,
                            p === r.opacity && delete e.bubble.opacity
                    }
                }
                ,
                this._singleSelectorHover = (e,t,i)=>{
                    let s = this.container
                      , n = document.querySelectorAll(t)
                      , a = s.actualOptions.interactivity.modes.bubble;
                    a && n.length && n.forEach(t=>{
                        let n = s.retina.pixelRatio
                          , r = {
                            x: (t.offsetLeft + .5 * t.offsetWidth) * n,
                            y: (t.offsetTop + .5 * t.offsetHeight) * n
                        }
                          , o = .5 * t.offsetWidth * n
                          , l = i.type === c.gqJ.circle ? new c.Cdc(r.x,r.y,o) : new c.AeJ(t.offsetLeft * n,t.offsetTop * n,t.offsetWidth * n,t.offsetHeight * n);
                        for (let i of s.particles.quadTree.query(l, e=>this.isEnabled(e))) {
                            if (!l.contains(i.getPosition()))
                                continue;
                            i.bubble.inRange = !0;
                            let s = a.divs
                              , n = (0,
                            c.iCg)(s, t);
                            i.bubble.div && i.bubble.div === t || (this.clear(i, e, !0),
                            i.bubble.div = t),
                            this._hoverBubbleSize(i, 1, n),
                            this._hoverBubbleOpacity(i, 1, n),
                            this._hoverBubbleColor(i, 1, n)
                        }
                    }
                    )
                }
                ,
                e.bubble || (e.bubble = {}),
                this.handleClickMode = t=>{
                    t === U && (e.bubble || (e.bubble = {}),
                    e.bubble.clicking = !0)
                }
            }
            clear(e, t, i) {
                (!e.bubble.inRange || i) && (delete e.bubble.div,
                delete e.bubble.opacity,
                delete e.bubble.radius,
                delete e.bubble.color)
            }
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.bubble;
                t && (e.retina.bubbleModeDistance = t.distance * e.retina.pixelRatio,
                void 0 !== t.size && (e.retina.bubbleModeSize = t.size * e.retina.pixelRatio))
            }
            interact(e) {
                let t = this.container.actualOptions.interactivity.events
                  , i = t.onHover
                  , s = t.onClick
                  , n = i.enable
                  , a = i.mode
                  , r = s.enable
                  , o = s.mode
                  , l = t.onDiv;
                n && (0,
                c.dBL)(U, a) ? this._hoverBubble() : r && (0,
                c.dBL)(U, o) ? this._clickBubble() : (0,
                c.XDe)(U, l, (t,i)=>this._singleSelectorHover(e, t, i))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , {onClick: n, onDiv: a, onHover: r} = (e?.interactivity ?? i.interactivity).events
                  , o = (0,
                c.wm$)(U, a);
                return (!!o || !!r.enable && !!s.position || !!n.enable && !!s.clickPosition) && ((0,
                c.dBL)(U, r.mode) || (0,
                c.dBL)(U, n.mode) || o)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.bubble || (e.bubble = new N),
                t))
                    e.bubble.load(i?.bubble)
            }
            reset(e) {
                e.bubble.inRange = !1
            }
        }
        async function Z(e, t=!0) {
            await e.addInteractor("externalBubble", e=>Promise.resolve(new X(e)), t)
        }
        class K {
            constructor() {
                this.opacity = .5
            }
            load(e) {
                e && void 0 !== e.opacity && (this.opacity = e.opacity)
            }
        }
        class Q {
            constructor() {
                this.distance = 80,
                this.links = new K,
                this.radius = 60
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                this.links.load(e.links),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        class J extends c.L8z {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.connect;
                t && (e.retina.connectModeDistance = t.distance * e.retina.pixelRatio,
                e.retina.connectModeRadius = t.radius * e.retina.pixelRatio)
            }
            interact() {
                let e = this.container;
                if (e.actualOptions.interactivity.events.onHover.enable && "pointermove" === e.interactivity.status) {
                    let t = e.interactivity.mouse.position
                      , {connectModeDistance: i, connectModeRadius: s} = e.retina;
                    if (!i || i < 0 || !s || s < 0 || !t)
                        return;
                    let n = e.particles.quadTree.queryCircle(t, Math.abs(s), e=>this.isEnabled(e));
                    n.forEach((t,s)=>{
                        let a = t.getPosition();
                        for (let r of n.slice(s + 1)) {
                            let s = r.getPosition()
                              , n = Math.abs(i)
                              , o = Math.abs(a.x - s.x)
                              , l = Math.abs(a.y - s.y);
                            o < n && l < n && function(e, t, i) {
                                e.canvas.draw(s=>{
                                    var n;
                                    let a = function(e, t, i, s) {
                                        let n = e.actualOptions.interactivity.modes.connect;
                                        if (n)
                                            return function(e, t, i, s) {
                                                let n = Math.floor(i.getRadius() / t.getRadius())
                                                  , a = t.getFillColor()
                                                  , r = i.getFillColor();
                                                if (!a || !r)
                                                    return;
                                                let o = t.getPosition()
                                                  , l = i.getPosition()
                                                  , d = (0,
                                                c.ocL)(a, r, t.getRadius(), i.getRadius())
                                                  , u = e.createLinearGradient(o.x, o.y, l.x, l.y);
                                                return u.addColorStop(0, (0,
                                                c.vzQ)(a, s)),
                                                u.addColorStop((0,
                                                c.uZ5)(n, 0, 1), (0,
                                                c.izR)(d, s)),
                                                u.addColorStop(1, (0,
                                                c.vzQ)(r, s)),
                                                u
                                            }(t, i, s, n.links.opacity)
                                    }(e, s, t, i);
                                    if (!a)
                                        return;
                                    let r = t.getPosition()
                                      , o = i.getPosition();
                                    n = t.retina.linksWidth ?? 0,
                                    (0,
                                    c.pSR)(s, r, o),
                                    s.lineWidth = n,
                                    s.strokeStyle = a,
                                    s.stroke()
                                }
                                )
                            }(e, t, r)
                        }
                    }
                    )
                }
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return !!s.onHover.enable && !!i.position && (0,
                c.dBL)("connect", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.connect || (e.connect = new Q),
                t))
                    e.connect.load(i?.connect)
            }
            reset() {}
        }
        async function ee(e, t=!0) {
            await e.addInteractor("externalConnect", e=>Promise.resolve(new J(e)), t)
        }
        class et {
            constructor() {
                this.blink = !1,
                this.consent = !1,
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.blink && (this.blink = e.blink),
                void 0 !== e.color && (this.color = c.OzF.create(this.color, e.color)),
                void 0 !== e.consent && (this.consent = e.consent),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class ei {
            constructor() {
                this.distance = 100,
                this.links = new et
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                this.links.load(e.links))
            }
        }
        class es extends c.L8z {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.grab;
                t && (e.retina.grabModeDistance = t.distance * e.retina.pixelRatio)
            }
            interact() {
                let e = this.container
                  , t = e.actualOptions.interactivity;
                if (!t.modes.grab || !t.events.onHover.enable || e.interactivity.status !== c.WtO)
                    return;
                let i = e.interactivity.mouse.position;
                if (!i)
                    return;
                let s = e.retina.grabModeDistance;
                if (s && !(s < 0))
                    for (let n of e.particles.quadTree.queryCircle(i, s, e=>this.isEnabled(e))) {
                        let a = n.getPosition()
                          , r = (0,
                        c.Spd)(a, i);
                        if (r > s)
                            continue;
                        let o = t.modes.grab.links
                          , l = o.opacity
                          , d = l - r * l / s;
                        if (d <= 0)
                            continue;
                        let u = o.color ?? n.options.links?.color;
                        if (!e.particles.grabLineColor && u) {
                            let i = t.modes.grab.links;
                            e.particles.grabLineColor = (0,
                            c.Dt5)(u, i.blink, i.consent)
                        }
                        let h = (0,
                        c.BEi)(n, void 0, e.particles.grabLineColor);
                        h && function(e, t, i, s, n) {
                            e.canvas.draw(e=>{
                                var a;
                                let r = t.getPosition();
                                a = t.retina.linksWidth ?? 0,
                                (0,
                                c.pSR)(e, r, n),
                                e.strokeStyle = (0,
                                c.izR)(i, s),
                                e.lineWidth = a,
                                e.stroke()
                            }
                            )
                        }(e, n, h, d, i)
                    }
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return s.onHover.enable && !!i.position && (0,
                c.dBL)("grab", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.grab || (e.grab = new ei),
                t))
                    e.grab.load(i?.grab)
            }
            reset() {}
        }
        async function en(e, t=!0) {
            await e.addInteractor("externalGrab", e=>Promise.resolve(new es(e)), t)
        }
        class ea extends c.L8z {
            constructor(e) {
                super(e),
                this.handleClickMode = e=>{
                    if ("pause" !== e)
                        return;
                    let t = this.container;
                    t.animationStatus ? t.pause() : t.play()
                }
            }
            clear() {}
            init() {}
            interact() {}
            isEnabled() {
                return !0
            }
            reset() {}
        }
        async function er(e, t=!0) {
            await e.addInteractor("externalPause", e=>Promise.resolve(new ea(e)), t)
        }
        class eo {
            constructor() {
                this.default = !0,
                this.groups = [],
                this.quantity = 4
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.default && (this.default = e.default),
                void 0 !== e.groups && (this.groups = e.groups.map(e=>e)),
                this.groups.length || (this.default = !0);
                let t = e.quantity;
                void 0 !== t && (this.quantity = (0,
                c.Cst)(t))
            }
        }
        class el extends c.L8z {
            constructor(e) {
                super(e),
                this.handleClickMode = e=>{
                    if ("push" !== e)
                        return;
                    let t = this.container
                      , i = t.actualOptions.interactivity.modes.push;
                    if (!i)
                        return;
                    let s = (0,
                    c.Gu7)(i.quantity);
                    if (s <= 0)
                        return;
                    let n = (0,
                    c.c86)([void 0, ...i.groups])
                      , a = void 0 !== n ? t.actualOptions.particles.groups[n] : void 0;
                    t.particles.push(s, t.interactivity.mouse, a, n)
                }
            }
            clear() {}
            init() {}
            interact() {}
            isEnabled() {
                return !0
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.push || (e.push = new eo),
                t))
                    e.push.load(i?.push)
            }
            reset() {}
        }
        async function ec(e, t=!0) {
            await e.addInteractor("externalPush", e=>Promise.resolve(new el(e)), t)
        }
        class ed {
            constructor() {
                this.quantity = 2
            }
            load(e) {
                if (!e)
                    return;
                let t = e.quantity;
                void 0 !== t && (this.quantity = (0,
                c.Cst)(t))
            }
        }
        class eu extends c.L8z {
            constructor(e) {
                super(e),
                this.handleClickMode = e=>{
                    let t = this.container
                      , i = t.actualOptions;
                    if (!i.interactivity.modes.remove || "remove" !== e)
                        return;
                    let s = (0,
                    c.Gu7)(i.interactivity.modes.remove.quantity);
                    t.particles.removeQuantity(s)
                }
            }
            clear() {}
            init() {}
            interact() {}
            isEnabled() {
                return !0
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.remove || (e.remove = new ed),
                t))
                    e.remove.load(i?.remove)
            }
            reset() {}
        }
        async function eh(e, t=!0) {
            await e.addInteractor("externalRemove", e=>Promise.resolve(new eu(e)), t)
        }
        class ep {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.factor = 100,
                this.speed = 1,
                this.maxSpeed = 50,
                this.easing = c.nxi.easeOutQuad
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.duration && (this.duration = e.duration),
                void 0 !== e.easing && (this.easing = e.easing),
                void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.speed && (this.speed = e.speed),
                void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed))
            }
        }
        class ef extends ep {
            constructor() {
                super(),
                this.selectors = []
            }
            load(e) {
                super.load(e),
                e && void 0 !== e.selectors && (this.selectors = e.selectors)
            }
        }
        class em extends ep {
            load(e) {
                super.load(e),
                e && (this.divs = (0,
                c.KH1)(e.divs, e=>{
                    let t = new ef;
                    return t.load(e),
                    t
                }
                ))
            }
        }
        let eg = "repulse";
        class ev extends c.L8z {
            constructor(e, t) {
                super(t),
                this._clickRepulse = ()=>{
                    let e = this.container
                      , t = e.actualOptions.interactivity.modes.repulse;
                    if (!t)
                        return;
                    let i = e.repulse ?? {
                        particles: []
                    };
                    if (i.finish || (i.count || (i.count = 0),
                    i.count++,
                    i.count !== e.particles.count || (i.finish = !0)),
                    i.clicking) {
                        let s = e.retina.repulseModeDistance;
                        if (!s || s < 0)
                            return;
                        let n = Math.pow(s / 6, 3)
                          , a = e.interactivity.mouse.clickPosition;
                        if (void 0 === a)
                            return;
                        let r = new c.Cdc(a.x,a.y,n);
                        for (let s of e.particles.quadTree.query(r, e=>this.isEnabled(e))) {
                            let {dx: e, dy: r, distance: o} = (0,
                            c.oW6)(a, s.position)
                              , l = o ** 2
                              , d = -n * t.speed / l;
                            if (l <= n) {
                                i.particles.push(s);
                                let t = c.OWs.create(e, r);
                                t.length = d,
                                s.velocity.setTo(t)
                            }
                        }
                    } else if (!1 === i.clicking) {
                        for (let e of i.particles)
                            e.velocity.setTo(e.initialVelocity);
                        i.particles = []
                    }
                }
                ,
                this._hoverRepulse = ()=>{
                    let e = this.container
                      , t = e.interactivity.mouse.position
                      , i = e.retina.repulseModeDistance;
                    i && !(i < 0) && t && this._processRepulse(t, i, new c.Cdc(t.x,t.y,i))
                }
                ,
                this._processRepulse = (e,t,i,s)=>{
                    let n = this.container
                      , a = n.particles.quadTree.query(i, e=>this.isEnabled(e))
                      , r = n.actualOptions.interactivity.modes.repulse;
                    if (!r)
                        return;
                    let {easing: o, speed: l, factor: d, maxSpeed: u} = r
                      , h = (0,
                    c._Xd)(o)
                      , p = (s?.speed ?? l) * d;
                    for (let i of a) {
                        let {dx: s, dy: n, distance: a} = (0,
                        c.oW6)(i.position, e)
                          , r = (0,
                        c.uZ5)(h(1 - a / t) * p, 0, u)
                          , o = c.OWs.create(a ? s / a * r : p, a ? n / a * r : p);
                        i.position.addTo(o)
                    }
                }
                ,
                this._singleSelectorRepulse = (e,t)=>{
                    let i = this.container
                      , s = i.actualOptions.interactivity.modes.repulse;
                    if (!s)
                        return;
                    let n = document.querySelectorAll(e);
                    n.length && n.forEach(e=>{
                        let n = i.retina.pixelRatio
                          , a = {
                            x: (e.offsetLeft + .5 * e.offsetWidth) * n,
                            y: (e.offsetTop + .5 * e.offsetHeight) * n
                        }
                          , r = .5 * e.offsetWidth * n
                          , o = t.type === c.gqJ.circle ? new c.Cdc(a.x,a.y,r) : new c.AeJ(e.offsetLeft * n,e.offsetTop * n,e.offsetWidth * n,e.offsetHeight * n)
                          , l = s.divs
                          , d = (0,
                        c.iCg)(l, e);
                        this._processRepulse(a, r, o, d)
                    }
                    )
                }
                ,
                this._engine = e,
                t.repulse || (t.repulse = {
                    particles: []
                }),
                this.handleClickMode = e=>{
                    let i = this.container.actualOptions.interactivity.modes.repulse;
                    if (!i || e !== eg)
                        return;
                    t.repulse || (t.repulse = {
                        particles: []
                    });
                    let s = t.repulse;
                    for (let e of (s.clicking = !0,
                    s.count = 0,
                    t.repulse.particles))
                        this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
                    s.particles = [],
                    s.finish = !1,
                    setTimeout(()=>{
                        t.destroyed || (s.clicking = !1)
                    }
                    , i.duration * c.X5o)
                }
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.repulse;
                t && (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio)
            }
            interact() {
                let e = this.container
                  , t = e.actualOptions
                  , i = e.interactivity.status === c.WtO
                  , s = t.interactivity.events
                  , n = s.onHover
                  , a = n.enable
                  , r = n.mode
                  , o = s.onClick
                  , l = o.enable
                  , d = o.mode
                  , u = s.onDiv;
                i && a && (0,
                c.dBL)(eg, r) ? this._hoverRepulse() : l && (0,
                c.dBL)(eg, d) ? this._clickRepulse() : (0,
                c.XDe)(eg, u, (e,t)=>this._singleSelectorRepulse(e, t))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , n = (e?.interactivity ?? i.interactivity).events
                  , a = n.onDiv
                  , r = n.onHover
                  , o = n.onClick
                  , l = (0,
                c.wm$)(eg, a);
                if (!(l || r.enable && s.position || o.enable && s.clickPosition))
                    return !1;
                let d = r.mode
                  , u = o.mode;
                return (0,
                c.dBL)(eg, d) || (0,
                c.dBL)(eg, u) || l
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.repulse || (e.repulse = new em),
                t))
                    e.repulse.load(i?.repulse)
            }
            reset() {}
        }
        async function ey(e, t=!0) {
            await e.addInteractor("externalRepulse", t=>Promise.resolve(new ev(e,t)), t)
        }
        class eb {
            constructor() {
                this.factor = 3,
                this.radius = 200
            }
            load(e) {
                e && (void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        class ew extends c.L8z {
            constructor(e) {
                super(e)
            }
            clear(e, t, i) {
                (!e.slow.inRange || i) && (e.slow.factor = 1)
            }
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.slow;
                t && (e.retina.slowModeRadius = t.radius * e.retina.pixelRatio)
            }
            interact() {}
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return s.onHover.enable && !!i.position && (0,
                c.dBL)("slow", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.slow || (e.slow = new eb),
                t))
                    e.slow.load(i?.slow)
            }
            reset(e) {
                e.slow.inRange = !1;
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse.position
                  , n = t.retina.slowModeRadius
                  , a = i.interactivity.modes.slow;
                if (!a || !n || n < 0 || !s)
                    return;
                let r = e.getPosition()
                  , o = (0,
                c.Spd)(s, r)
                  , l = a.factor
                  , {slow: d} = e;
                o > n || (d.inRange = !0,
                d.factor = o / n / l)
            }
        }
        async function ex(e, t=!0) {
            await e.addInteractor("externalSlow", e=>Promise.resolve(new ew(e)), t)
        }
        let e_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function eS(e) {
            return new Promise(t=>{
                e.loading = !0;
                let i = new Image;
                e.element = i,
                i.addEventListener("load", ()=>{
                    e.loading = !1,
                    t()
                }
                ),
                i.addEventListener("error", ()=>{
                    e.element = void 0,
                    e.error = !0,
                    e.loading = !1,
                    (0,
                    c.jl5)().error(`${c.gK4} loading image: ${e.source}`),
                    t()
                }
                ),
                i.src = e.source
            }
            )
        }
        async function eC(e) {
            if ("svg" !== e.type) {
                await eS(e);
                return
            }
            e.loading = !0;
            let t = await fetch(e.source);
            t.ok ? e.svgData = await t.text() : ((0,
            c.jl5)().error(`${c.gK4} Image not found`),
            e.error = !0),
            e.loading = !1
        }
        let eT = [0, 4, 2, 1]
          , eM = [8, 8, 4, 2];
        class eE {
            constructor(e) {
                this.pos = 0,
                this.data = new Uint8ClampedArray(e)
            }
            getString(e) {
                let t = this.data.slice(this.pos, this.pos + e);
                return this.pos += t.length,
                t.reduce((e,t)=>e + String.fromCharCode(t), "")
            }
            nextByte() {
                return this.data[this.pos++]
            }
            nextTwoBytes() {
                return this.pos += 2,
                this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
            }
            readSubBlocks() {
                let e = ""
                  , t = 0;
                do {
                    t = this.data[this.pos++];
                    for (let i = t; --i >= 0; e += String.fromCharCode(this.data[this.pos++]))
                        ;
                } while (0 !== t);
                return e
            }
            readSubBlocksBin() {
                let e = this.data[this.pos]
                  , t = 0;
                for (let i = 0; 0 !== e; i += e + 1,
                e = this.data[this.pos + i])
                    t += e;
                let i = new Uint8Array(t);
                e = this.data[this.pos++];
                for (let t = 0; 0 !== e; e = this.data[this.pos++])
                    for (let s = e; --s >= 0; i[t++] = this.data[this.pos++])
                        ;
                return i
            }
            skipSubBlocks() {
                for (; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1)
                    ;
                this.pos++
            }
        }
        (n = o || (o = {}))[n.Replace = 0] = "Replace",
        n[n.Combine = 1] = "Combine",
        n[n.RestoreBackground = 2] = "RestoreBackground",
        n[n.RestorePrevious = 3] = "RestorePrevious",
        n[n.UndefinedA = 4] = "UndefinedA",
        n[n.UndefinedB = 5] = "UndefinedB",
        n[n.UndefinedC = 6] = "UndefinedC",
        n[n.UndefinedD = 7] = "UndefinedD",
        (a = l || (l = {}))[a.Extension = 33] = "Extension",
        a[a.ApplicationExtension = 255] = "ApplicationExtension",
        a[a.GraphicsControlExtension = 249] = "GraphicsControlExtension",
        a[a.PlainTextExtension = 1] = "PlainTextExtension",
        a[a.CommentExtension = 254] = "CommentExtension",
        a[a.Image = 44] = "Image",
        a[a.EndOfFile = 59] = "EndOfFile";
        let ek = {
            x: 0,
            y: 0
        };
        function eP(e, t) {
            let i = [];
            for (let s = 0; s < t; s++)
                i.push({
                    r: e.data[e.pos],
                    g: e.data[e.pos + 1],
                    b: e.data[e.pos + 2]
                }),
                e.pos += 3;
            return i
        }
        async function ez(e, t, i, s, n, a) {
            let r = t.frames[s(!0)];
            r.left = e.nextTwoBytes(),
            r.top = e.nextTwoBytes(),
            r.width = e.nextTwoBytes(),
            r.height = e.nextTwoBytes();
            let o = e.nextByte()
              , l = (128 & o) == 128;
            r.sortFlag = (32 & o) == 32,
            r.reserved = (24 & o) >>> 3,
            l && (r.localColorTable = eP(e, 1 << (7 & o) + 1));
            let c = e=>{
                let {r: s, g: a, b: o} = (l ? r.localColorTable : t.globalColorTable)[e];
                return e !== n(null) ? {
                    r: s,
                    g: a,
                    b: o,
                    a: 255
                } : {
                    r: s,
                    g: a,
                    b: o,
                    a: i ? ~~((s + a + o) / 3) : 0
                }
            }
              , d = (()=>{
                try {
                    return new ImageData(r.width,r.height,{
                        colorSpace: "srgb"
                    })
                } catch (e) {
                    if (e instanceof DOMException && "IndexSizeError" === e.name)
                        return null;
                    throw e
                }
            }
            )();
            if (null == d)
                throw EvalError("GIF frame size is to large");
            let u = e.nextByte()
              , h = e.readSubBlocksBin()
              , p = 1 << u
              , f = (e,t)=>{
                let i = e >>> 3
                  , s = 7 & e;
                return (h[i] + (h[i + 1] << 8) + (h[i + 2] << 16) & (1 << t) - 1 << s) >>> s
            }
            ;
            if ((64 & o) == 64) {
                for (let i = 0, n = u + 1, o = 0, l = [[0]], h = 0; h < 4; h++) {
                    if (eT[h] < r.height) {
                        let e = 0
                          , t = 0
                          , s = !1;
                        for (; !s; ) {
                            let a = i;
                            if (i = f(o, n),
                            o += n + 1,
                            i === p) {
                                n = u + 1,
                                l.length = p + 2;
                                for (let e = 0; e < l.length; e++)
                                    l[e] = e < p ? [e] : []
                            } else {
                                for (let s of (i >= l.length ? l.push(l[a].concat(l[a][0])) : a !== p && l.push(l[a].concat(l[i][0])),
                                l[i])) {
                                    let {r: i, g: n, b: a, a: o} = c(s);
                                    d.data.set([i, n, a, o], eT[h] * r.width + eM[h] * t + e % (4 * r.width)),
                                    e += 4
                                }
                                l.length === 1 << n && n < 12 && n++
                            }
                            e === 4 * r.width * (t + 1) && (t++,
                            eT[h] + eM[h] * t >= r.height && (s = !0))
                        }
                    }
                    a?.(e.pos / (e.data.length - 1), s(!1) + 1, d, {
                        x: r.left,
                        y: r.top
                    }, {
                        width: t.width,
                        height: t.height
                    })
                }
                r.image = d,
                r.bitmap = await createImageBitmap(d)
            } else {
                let i = 0
                  , n = u + 1
                  , o = 0
                  , l = -4
                  , h = !1
                  , m = [[0]];
                for (; !h; ) {
                    let e = i;
                    if (i = f(o, n),
                    o += n,
                    i === p) {
                        n = u + 1,
                        m.length = p + 2;
                        for (let e = 0; e < m.length; e++)
                            m[e] = e < p ? [e] : []
                    } else {
                        if (i === p + 1) {
                            h = !0;
                            break
                        }
                        for (let t of (i >= m.length ? m.push(m[e].concat(m[e][0])) : e !== p && m.push(m[e].concat(m[i][0])),
                        m[i])) {
                            let {r: e, g: i, b: s, a: n} = c(t);
                            d.data.set([e, i, s, n], l += 4)
                        }
                        m.length >= 1 << n && n < 12 && n++
                    }
                }
                r.image = d,
                r.bitmap = await createImageBitmap(d),
                a?.((e.pos + 1) / e.data.length, s(!1) + 1, r.image, {
                    x: r.left,
                    y: r.top
                }, {
                    width: t.width,
                    height: t.height
                })
            }
        }
        async function eO(e, t, i, s, n, a) {
            switch (e.nextByte()) {
            case l.EndOfFile:
                return !0;
            case l.Image:
                await ez(e, t, i, s, n, a);
                break;
            case l.Extension:
                !function(e, t, i, s) {
                    switch (e.nextByte()) {
                    case l.GraphicsControlExtension:
                        {
                            let n = t.frames[i(!1)];
                            e.pos++;
                            let a = e.nextByte();
                            n.GCreserved = (224 & a) >>> 5,
                            n.disposalMethod = (28 & a) >>> 2,
                            n.userInputDelayFlag = (2 & a) == 2,
                            n.delayTime = 10 * e.nextTwoBytes();
                            let r = e.nextByte();
                            (1 & a) == 1 && s(r),
                            e.pos++;
                            break
                        }
                    case l.ApplicationExtension:
                        {
                            e.pos++;
                            let i = {
                                identifier: e.getString(8),
                                authenticationCode: e.getString(3),
                                data: e.readSubBlocksBin()
                            };
                            t.applicationExtensions.push(i);
                            break
                        }
                    case l.CommentExtension:
                        t.comments.push([i(!1), e.readSubBlocks()]);
                        break;
                    case l.PlainTextExtension:
                        if (0 === t.globalColorTable.length)
                            throw EvalError("plain text extension without global color table");
                        e.pos++,
                        t.frames[i(!1)].plainTextData = {
                            left: e.nextTwoBytes(),
                            top: e.nextTwoBytes(),
                            width: e.nextTwoBytes(),
                            height: e.nextTwoBytes(),
                            charSize: {
                                width: e.nextTwoBytes(),
                                height: e.nextTwoBytes()
                            },
                            foregroundColor: e.nextByte(),
                            backgroundColor: e.nextByte(),
                            text: e.readSubBlocks()
                        };
                        break;
                    default:
                        e.skipSubBlocks()
                    }
                }(e, t, s, n);
                break;
            default:
                throw EvalError("undefined block found")
            }
            return !1
        }
        async function eI(e, t, i) {
            i || (i = !1);
            let s = await fetch(e);
            if (!s.ok && 404 === s.status)
                throw EvalError("file not found");
            let n = await s.arrayBuffer()
              , a = {
                width: 0,
                height: 0,
                totalTime: 0,
                colorRes: 0,
                pixelAspectRatio: 0,
                frames: [],
                sortFlag: !1,
                globalColorTable: [],
                backgroundImage: new ImageData(1,1,{
                    colorSpace: "srgb"
                }),
                comments: [],
                applicationExtensions: []
            }
              , r = new eE(new Uint8ClampedArray(n));
            if ("GIF89a" !== r.getString(6))
                throw Error("not a supported GIF file");
            a.width = r.nextTwoBytes(),
            a.height = r.nextTwoBytes();
            let l = r.nextByte()
              , c = (128 & l) == 128;
            a.colorRes = (112 & l) >>> 4,
            a.sortFlag = (8 & l) == 8;
            let d = r.nextByte();
            a.pixelAspectRatio = r.nextByte(),
            0 !== a.pixelAspectRatio && (a.pixelAspectRatio = (a.pixelAspectRatio + 15) / 64),
            c && (a.globalColorTable = eP(r, 1 << (7 & l) + 1));
            let u = (()=>{
                try {
                    return new ImageData(a.width,a.height,{
                        colorSpace: "srgb"
                    })
                } catch (e) {
                    if (e instanceof DOMException && "IndexSizeError" === e.name)
                        return null;
                    throw e
                }
            }
            )();
            if (null == u)
                throw Error("GIF frame size is to large");
            let {r: h, g: p, b: f} = a.globalColorTable[d];
            u.data.set(c ? [h, p, f, 255] : [0, 0, 0, 0]);
            for (let e = 4; e < u.data.length; e *= 2)
                u.data.copyWithin(e, 0, e);
            a.backgroundImage = u;
            let m = -1
              , g = !0
              , v = -1
              , y = e=>(e && (g = !0),
            m)
              , b = e=>(null != e && (v = e),
            v);
            try {
                do
                    g && (a.frames.push({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        disposalMethod: o.Replace,
                        image: new ImageData(1,1,{
                            colorSpace: "srgb"
                        }),
                        plainTextData: null,
                        userInputDelayFlag: !1,
                        delayTime: 0,
                        sortFlag: !1,
                        localColorTable: [],
                        reserved: 0,
                        GCreserved: 0
                    }),
                    m++,
                    v = -1,
                    g = !1);
                while (!await eO(r, a, i, y, b, t));
                for (let e of (a.frames.length--,
                a.frames)) {
                    if (e.userInputDelayFlag && 0 === e.delayTime) {
                        a.totalTime = 1 / 0;
                        break
                    }
                    a.totalTime += e.delayTime
                }
                return a
            } catch (e) {
                if (e instanceof EvalError)
                    throw Error(`error while parsing frame ${m} "${e.message}"`);
                throw e
            }
        }
        async function eL(e) {
            if ("gif" !== e.type) {
                await eS(e);
                return
            }
            e.loading = !0;
            try {
                e.gifData = await eI(e.source),
                e.gifLoopCount = function(e) {
                    for (let t of e.applicationExtensions)
                        if (t.identifier + t.authenticationCode === "NETSCAPE2.0")
                            return t.data[1] + (t.data[2] << 8);
                    return NaN
                }(e.gifData) ?? 0,
                e.gifLoopCount || (e.gifLoopCount = 1 / 0)
            } catch {
                e.error = !0
            }
            e.loading = !1
        }
        class eD {
            constructor(e) {
                this.validTypes = ["image", "images"],
                this.loadImageShape = async e=>{
                    if (!this._engine.loadImage)
                        throw Error(`${c.gK4} image shape not initialized`);
                    await this._engine.loadImage({
                        gif: e.gif,
                        name: e.name,
                        replaceColor: e.replaceColor ?? !1,
                        src: e.src
                    })
                }
                ,
                this._engine = e
            }
            addImage(e) {
                this._engine.images || (this._engine.images = []),
                this._engine.images.push(e)
            }
            draw(e) {
                let {context: t, radius: i, particle: s, opacity: n} = e
                  , a = s.image
                  , r = a?.element;
                if (a) {
                    if (t.globalAlpha = n,
                    a.gif && a.gifData)
                        !function(e) {
                            let {context: t, radius: i, particle: s, delta: n} = e
                              , a = s.image;
                            if (!a?.gifData || !a.gif)
                                return;
                            let r = new OffscreenCanvas(a.gifData.width,a.gifData.height)
                              , l = r.getContext("2d");
                            if (!l)
                                throw Error("could not create offscreen canvas context");
                            l.imageSmoothingQuality = "low",
                            l.imageSmoothingEnabled = !1,
                            l.clearRect(ek.x, ek.y, r.width, r.height),
                            void 0 === s.gifLoopCount && (s.gifLoopCount = a.gifLoopCount ?? 0);
                            let c = s.gifFrame ?? 0
                              , d = {
                                x: -(.5 * a.gifData.width),
                                y: -(.5 * a.gifData.height)
                            }
                              , u = a.gifData.frames[c];
                            if (void 0 === s.gifTime && (s.gifTime = 0),
                            u.bitmap) {
                                switch (t.scale(i / a.gifData.width, i / a.gifData.height),
                                u.disposalMethod) {
                                case o.UndefinedA:
                                case o.UndefinedB:
                                case o.UndefinedC:
                                case o.UndefinedD:
                                case o.Replace:
                                    l.drawImage(u.bitmap, u.left, u.top),
                                    t.drawImage(r, d.x, d.y),
                                    l.clearRect(ek.x, ek.y, r.width, r.height);
                                    break;
                                case o.Combine:
                                    l.drawImage(u.bitmap, u.left, u.top),
                                    t.drawImage(r, d.x, d.y);
                                    break;
                                case o.RestoreBackground:
                                    l.drawImage(u.bitmap, u.left, u.top),
                                    t.drawImage(r, d.x, d.y),
                                    l.clearRect(ek.x, ek.y, r.width, r.height),
                                    a.gifData.globalColorTable.length ? l.putImageData(a.gifData.backgroundImage, d.x, d.y) : l.putImageData(a.gifData.frames[0].image, d.x + u.left, d.y + u.top);
                                    break;
                                case o.RestorePrevious:
                                    {
                                        let e = l.getImageData(ek.x, ek.y, r.width, r.height);
                                        l.drawImage(u.bitmap, u.left, u.top),
                                        t.drawImage(r, d.x, d.y),
                                        l.clearRect(ek.x, ek.y, r.width, r.height),
                                        l.putImageData(e, ek.x, ek.y)
                                    }
                                }
                                if (s.gifTime += n.value,
                                s.gifTime > u.delayTime) {
                                    if (s.gifTime -= u.delayTime,
                                    ++c >= a.gifData.frames.length) {
                                        if (--s.gifLoopCount <= 0)
                                            return;
                                        c = 0,
                                        l.clearRect(ek.x, ek.y, r.width, r.height)
                                    }
                                    s.gifFrame = c
                                }
                                t.scale(a.gifData.width / i, a.gifData.height / i)
                            }
                        }(e);
                    else if (r) {
                        let e = a.ratio
                          , s = {
                            x: -i,
                            y: -i
                        }
                          , n = 2 * i;
                        t.drawImage(r, s.x, s.y, n, n / e)
                    }
                    t.globalAlpha = 1
                }
            }
            getSidesCount() {
                return 12
            }
            async init(e) {
                let t = e.actualOptions;
                if (t.preload && this._engine.loadImage)
                    for (let e of t.preload)
                        await this._engine.loadImage(e)
            }
            loadShape(e) {
                if ("image" !== e.shape && "images" !== e.shape)
                    return;
                this._engine.images || (this._engine.images = []);
                let t = e.shapeData;
                t && (this._engine.images.find(e=>e.name === t.name || e.source === t.src) || this.loadImageShape(t).then(()=>{
                    this.loadShape(e)
                }
                ))
            }
            particleInit(e, t) {
                if ("image" !== t.shape && "images" !== t.shape)
                    return;
                this._engine.images || (this._engine.images = []);
                let i = this._engine.images
                  , s = t.shapeData;
                if (!s)
                    return;
                let n = t.getFillColor()
                  , a = i.find(e=>e.name === s.name || e.source === s.src);
                if (!a)
                    return;
                let r = s.replaceColor ?? a.replaceColor;
                if (a.loading) {
                    setTimeout(()=>{
                        this.particleInit(e, t)
                    }
                    );
                    return
                }
                (async()=>{
                    let e;
                    (e = a.svgData && n ? await function(e, t, i, s) {
                        let n = function(e, t, i) {
                            let {svgData: s} = e;
                            if (!s)
                                return "";
                            let n = (0,
                            c.vzQ)(t, i);
                            if (s.includes("fill"))
                                return s.replace(e_, ()=>n);
                            let a = s.indexOf(">");
                            return `${s.substring(0, a)} fill="${n}"${s.substring(a)}`
                        }(e, i, s.opacity?.value ?? 1)
                          , a = {
                            color: i,
                            gif: t.gif,
                            data: {
                                ...e,
                                svgData: n
                            },
                            loaded: !1,
                            ratio: t.width / t.height,
                            replaceColor: t.replaceColor,
                            source: t.src
                        };
                        return new Promise(t=>{
                            let i = new Blob([n],{
                                type: "image/svg+xml"
                            })
                              , s = URL || window.URL || window.webkitURL || window
                              , r = s.createObjectURL(i)
                              , o = new Image;
                            o.addEventListener("load", ()=>{
                                a.loaded = !0,
                                a.element = o,
                                t(a),
                                s.revokeObjectURL(r)
                            }
                            );
                            let l = async()=>{
                                s.revokeObjectURL(r);
                                let i = {
                                    ...e,
                                    error: !1,
                                    loading: !0
                                };
                                await eS(i),
                                a.loaded = !0,
                                a.element = i.element,
                                t(a)
                            }
                            ;
                            o.addEventListener("error", ()=>void l()),
                            o.src = r
                        }
                        )
                    }(a, s, n, t) : {
                        color: n,
                        data: a,
                        element: a.element,
                        gif: a.gif,
                        gifData: a.gifData,
                        gifLoopCount: a.gifLoopCount,
                        loaded: !0,
                        ratio: s.width && s.height ? s.width / s.height : a.ratio ?? 1,
                        replaceColor: r,
                        source: s.src
                    }).ratio || (e.ratio = 1);
                    let i = s.fill ?? t.shapeFill
                      , o = s.close ?? t.shapeClose;
                    t.image = e,
                    t.shapeFill = i,
                    t.shapeClose = o
                }
                )()
            }
        }
        class eR {
            constructor() {
                this.src = "",
                this.gif = !1
            }
            load(e) {
                e && (void 0 !== e.gif && (this.gif = e.gif),
                void 0 !== e.height && (this.height = e.height),
                void 0 !== e.name && (this.name = e.name),
                void 0 !== e.replaceColor && (this.replaceColor = e.replaceColor),
                void 0 !== e.src && (this.src = e.src),
                void 0 !== e.width && (this.width = e.width))
            }
        }
        class eA {
            constructor(e) {
                this.id = "imagePreloader",
                this._engine = e
            }
            async getPlugin() {
                return await Promise.resolve(),
                {}
            }
            loadOptions(e, t) {
                if (!t?.preload)
                    return;
                e.preload || (e.preload = []);
                let i = e.preload;
                for (let e of t.preload) {
                    let t = i.find(t=>t.name === e.name || t.src === e.src);
                    if (t)
                        t.load(e);
                    else {
                        let t = new eR;
                        t.load(e),
                        i.push(t)
                    }
                }
            }
            needsPlugin() {
                return !0
            }
        }
        async function eB(e, t=!0) {
            e.loadImage || (e.loadImage = async t=>{
                if (!t.name && !t.src)
                    throw Error(`${c.gK4} no image source provided`);
                if (e.images || (e.images = []),
                !e.images.find(e=>e.name === t.name || e.source === t.src))
                    try {
                        let i;
                        let s = {
                            gif: t.gif ?? !1,
                            name: t.name ?? t.src,
                            source: t.src,
                            type: t.src.substring(t.src.length - 3),
                            error: !1,
                            loading: !0,
                            replaceColor: t.replaceColor,
                            ratio: t.width && t.height ? t.width / t.height : void 0
                        };
                        e.images.push(s),
                        i = t.gif ? eL : t.replaceColor ? eC : eS,
                        await i(s)
                    } catch {
                        throw Error(`${c.gK4} ${t.name ?? t.src} not found`)
                    }
            }
            );
            let i = new eA(e);
            await e.addPlugin(i, t),
            await e.addShape(new eD(e), t)
        }
        class eF extends c.SWe {
            constructor() {
                super(),
                this.sync = !1
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class ej extends c.SWe {
            constructor() {
                super(),
                this.sync = !1
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class e$ {
            constructor() {
                this.count = 0,
                this.delay = new eF,
                this.duration = new ej
            }
            load(e) {
                e && (void 0 !== e.count && (this.count = e.count),
                this.delay.load(e.delay),
                this.duration.load(e.duration))
            }
        }
        class eG {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = this.container
                  , i = e.options.life;
                i && (e.life = {
                    delay: t.retina.reduceFactor ? (0,
                    c.Gu7)(i.delay.value) * (i.delay.sync ? 1 : (0,
                    c.sZz)()) / t.retina.reduceFactor * c.X5o : 0,
                    delayTime: 0,
                    duration: t.retina.reduceFactor ? (0,
                    c.Gu7)(i.duration.value) * (i.duration.sync ? 1 : (0,
                    c.sZz)()) / t.retina.reduceFactor * c.X5o : 0,
                    time: 0,
                    count: i.count
                },
                e.life.duration <= 0 && (e.life.duration = -1),
                e.life.count <= 0 && (e.life.count = -1),
                e.life && (e.spawning = e.life.delay > 0))
            }
            isEnabled(e) {
                return !e.destroyed
            }
            loadOptions(e, ...t) {
                for (let i of (e.life || (e.life = new e$),
                t))
                    e.life.load(i?.life)
            }
            update(e, t) {
                this.isEnabled(e) && e.life && function(e, t, i) {
                    if (!e.life)
                        return;
                    let s = e.life
                      , n = !1;
                    if (e.spawning) {
                        if (s.delayTime += t.value,
                        !(s.delayTime >= e.life.delay))
                            return;
                        n = !0,
                        e.spawning = !1,
                        s.delayTime = 0,
                        s.time = 0
                    }
                    if (-1 === s.duration || e.spawning || (n ? s.time = 0 : s.time += t.value,
                    s.time < s.duration))
                        return;
                    if (s.time = 0,
                    e.life.count > 0 && e.life.count--,
                    0 === e.life.count) {
                        e.destroy();
                        return
                    }
                    let a = (0,
                    c.Cst)(0, i.width)
                      , r = (0,
                    c.Cst)(0, i.width);
                    e.position.x = (0,
                    c.vdf)(a),
                    e.position.y = (0,
                    c.vdf)(r),
                    e.spawning = !0,
                    s.delayTime = 0,
                    s.time = 0,
                    e.reset();
                    let o = e.options.life;
                    o && (s.delay = (0,
                    c.Gu7)(o.delay.value) * c.X5o,
                    s.duration = (0,
                    c.Gu7)(o.duration.value) * c.X5o)
                }(e, t, this.container.canvas.size)
            }
        }
        async function eq(e, t=!0) {
            await e.addParticleUpdater("life", async e=>Promise.resolve(new eG(e)), t)
        }
        class eV {
            constructor() {
                this.validTypes = ["line"]
            }
            draw(e) {
                !function(e) {
                    let {context: t, particle: i, radius: s} = e
                      , n = i.shapeData;
                    t.moveTo(-s, 0),
                    t.lineTo(s, 0),
                    t.lineCap = n?.cap ?? "butt"
                }(e)
            }
            getSidesCount() {
                return 1
            }
        }
        async function eH(e, t=!0) {
            await e.addShape(new eV, t)
        }
        class eW {
            init() {}
            isEnabled(e) {
                return !(0,
                c.KrJ)() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
            }
            move(e) {
                let t = e.container
                  , i = t.actualOptions.interactivity.events.onHover.parallax;
                if ((0,
                c.KrJ)() || !i.enable)
                    return;
                let s = i.force
                  , n = t.interactivity.mouse.position;
                if (!n)
                    return;
                let a = t.canvas.size
                  , r = {
                    x: .5 * a.width,
                    y: .5 * a.height
                }
                  , o = i.smooth
                  , l = e.getRadius() / s
                  , d = {
                    x: (n.x - r.x) * l,
                    y: (n.y - r.y) * l
                }
                  , {offset: u} = e;
                u.x += (d.x - u.x) / o,
                u.y += (d.y - u.y) / o
            }
        }
        async function eN(e, t=!0) {
            await e.addMover("parallax", ()=>Promise.resolve(new eW), t)
        }
        class eY extends c.$Sh {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {}
            interact(e) {
                let t = this.container;
                void 0 === e.attractDistance && (e.attractDistance = (0,
                c.Gu7)(e.options.move.attract.distance) * t.retina.pixelRatio);
                let i = e.attractDistance
                  , s = e.getPosition();
                for (let n of t.particles.quadTree.queryCircle(s, i)) {
                    if (e === n || !n.options.move.attract.enable || n.destroyed || n.spawning)
                        continue;
                    let t = n.getPosition()
                      , {dx: i, dy: a} = (0,
                    c.oW6)(s, t)
                      , r = e.options.move.attract.rotate
                      , o = i / (1e3 * r.x)
                      , l = a / (1e3 * r.y)
                      , d = n.size.value / e.size.value
                      , u = 1 / d;
                    e.velocity.x -= o * d,
                    e.velocity.y -= l * d,
                    n.velocity.x += o * u,
                    n.velocity.y += l * u
                }
            }
            isEnabled(e) {
                return e.options.move.attract.enable
            }
            reset() {}
        }
        async function eU(e, t=!0) {
            await e.addInteractor("particlesAttract", e=>Promise.resolve(new eY(e)), t)
        }
        function eX(e, t, i, s, n, a) {
            let r = (0,
            c.uZ5)(e.options.collisions.absorb.speed * n.factor / 10, 0, s);
            e.size.value += .5 * r,
            i.size.value -= r,
            s <= a && (i.size.value = 0,
            i.destroy())
        }
        let eZ = e=>{
            void 0 === e.collisionMaxSpeed && (e.collisionMaxSpeed = (0,
            c.Gu7)(e.options.collisions.maxSpeed)),
            e.velocity.length > e.collisionMaxSpeed && (e.velocity.length = e.collisionMaxSpeed)
        }
        ;
        function eK(e, t) {
            (0,
            c.kRC)((0,
            c.gy4)(e), (0,
            c.gy4)(t)),
            eZ(e),
            eZ(t)
        }
        class eQ extends c.$Sh {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {}
            interact(e, t) {
                if (e.destroyed || e.spawning)
                    return;
                let i = this.container
                  , s = e.getPosition()
                  , n = e.getRadius();
                for (let a of i.particles.quadTree.queryCircle(s, 2 * n)) {
                    if (e === a || !a.options.collisions.enable || e.options.collisions.mode !== a.options.collisions.mode || a.destroyed || a.spawning)
                        continue;
                    let r = a.getPosition()
                      , o = a.getRadius();
                    !(Math.abs(Math.round(s.z) - Math.round(r.z)) > n + o) && ((0,
                    c.Spd)(s, r) > n + o || function(e, t, i, s) {
                        switch (e.options.collisions.mode) {
                        case c.Dpx.absorb:
                            !function(e, t, i, s) {
                                let n = e.getRadius()
                                  , a = t.getRadius();
                                void 0 === n && void 0 !== a ? e.destroy() : void 0 !== n && void 0 === a ? t.destroy() : void 0 !== n && void 0 !== a && (n >= a ? eX(e, n, t, a, i, s) : eX(t, a, e, n, i, s))
                            }(e, t, i, s);
                            break;
                        case c.Dpx.bounce:
                            eK(e, t);
                            break;
                        case c.Dpx.destroy:
                            e.unbreakable || t.unbreakable || eK(e, t),
                            void 0 === e.getRadius() && void 0 !== t.getRadius() ? e.destroy() : void 0 !== e.getRadius() && void 0 === t.getRadius() ? t.destroy() : void 0 !== e.getRadius() && void 0 !== t.getRadius() && (e.getRadius() >= t.getRadius() ? t : e).destroy()
                        }
                    }(e, a, t, i.retina.pixelRatio))
                }
            }
            isEnabled(e) {
                return e.options.collisions.enable
            }
            reset() {}
        }
        async function eJ(e, t=!0) {
            await e.addInteractor("particlesCollisions", e=>Promise.resolve(new eQ(e)), t)
        }
        class e0 extends c.Cdc {
            constructor(e, t, i, s) {
                super(e, t, i),
                this.canvasSize = s,
                this.canvasSize = {
                    ...s
                }
            }
            contains(e) {
                let {width: t, height: i} = this.canvasSize
                  , {x: s, y: n} = e;
                return super.contains(e) || super.contains({
                    x: s - t,
                    y: n
                }) || super.contains({
                    x: s - t,
                    y: n - i
                }) || super.contains({
                    x: s,
                    y: n - i
                })
            }
            intersects(e) {
                if (super.intersects(e))
                    return !0;
                let t = {
                    x: e.position.x - this.canvasSize.width,
                    y: e.position.y - this.canvasSize.height
                };
                if (void 0 !== e.radius) {
                    let i = new c.Cdc(t.x,t.y,2 * e.radius);
                    return super.intersects(i)
                }
                if (void 0 !== e.size) {
                    let i = new c.AeJ(t.x,t.y,2 * e.size.width,2 * e.size.height);
                    return super.intersects(i)
                }
                return !1
            }
        }
        class e1 {
            constructor() {
                this.blur = 5,
                this.color = new c.OzF,
                this.color.value = "#000",
                this.enable = !1
            }
            load(e) {
                e && (void 0 !== e.blur && (this.blur = e.blur),
                this.color = c.OzF.create(this.color, e.color),
                void 0 !== e.enable && (this.enable = e.enable))
            }
        }
        class e2 {
            constructor() {
                this.enable = !1,
                this.frequency = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = c.OzF.create(this.color, e.color)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.frequency && (this.frequency = e.frequency),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class e5 {
            constructor() {
                this.blink = !1,
                this.color = new c.OzF,
                this.color.value = "#fff",
                this.consent = !1,
                this.distance = 100,
                this.enable = !1,
                this.frequency = 1,
                this.opacity = 1,
                this.shadow = new e1,
                this.triangles = new e2,
                this.width = 1,
                this.warp = !1
            }
            load(e) {
                e && (void 0 !== e.id && (this.id = e.id),
                void 0 !== e.blink && (this.blink = e.blink),
                this.color = c.OzF.create(this.color, e.color),
                void 0 !== e.consent && (this.consent = e.consent),
                void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.frequency && (this.frequency = e.frequency),
                void 0 !== e.opacity && (this.opacity = e.opacity),
                this.shadow.load(e.shadow),
                this.triangles.load(e.triangles),
                void 0 !== e.width && (this.width = e.width),
                void 0 !== e.warp && (this.warp = e.warp))
            }
        }
        let e3 = {
            x: 0,
            y: 0
        };
        class e6 extends c.$Sh {
            constructor(e) {
                super(e),
                this._setColor = e=>{
                    if (!e.options.links)
                        return;
                    let t = this.linkContainer
                      , i = e.options.links
                      , s = void 0 === i.id ? t.particles.linksColor : t.particles.linksColors.get(i.id);
                    if (s)
                        return;
                    let n = i.color;
                    s = (0,
                    c.Dt5)(n, i.blink, i.consent),
                    void 0 === i.id ? t.particles.linksColor = s : t.particles.linksColors.set(i.id, s)
                }
                ,
                this.linkContainer = e
            }
            clear() {}
            init() {
                this.linkContainer.particles.linksColor = void 0,
                this.linkContainer.particles.linksColors = new Map
            }
            interact(e) {
                let t;
                if (!e.options.links)
                    return;
                e.links = [];
                let i = e.getPosition()
                  , s = this.container
                  , n = s.canvas.size;
                if (i.x < e3.x || i.y < e3.y || i.x > n.width || i.y > n.height)
                    return;
                let a = e.options.links
                  , r = a.opacity
                  , o = e.retina.linksDistance ?? 0
                  , l = a.warp;
                for (let d of (t = l ? new e0(i.x,i.y,o,n) : new c.Cdc(i.x,i.y,o),
                s.particles.quadTree.query(t))) {
                    let t = d.options.links;
                    if (e === d || !t?.enable || a.id !== t.id || d.spawning || d.destroyed || !d.links || e.links.some(e=>e.destination === d) || d.links.some(t=>t.destination === e))
                        continue;
                    let s = d.getPosition();
                    if (s.x < e3.x || s.y < e3.y || s.x > n.width || s.y > n.height)
                        continue;
                    let u = function(e, t, i, s, n) {
                        let {dx: a, dy: r, distance: o} = (0,
                        c.oW6)(e, t);
                        if (!n || o <= i)
                            return o;
                        let l = {
                            x: Math.abs(a),
                            y: Math.abs(r)
                        }
                          , d = {
                            x: Math.min(l.x, s.width - l.x),
                            y: Math.min(l.y, s.height - l.y)
                        };
                        return Math.sqrt(d.x ** 2 + d.y ** 2)
                    }(i, s, o, n, l && t.warp);
                    if (u > o)
                        continue;
                    let h = (1 - u / o) * r;
                    this._setColor(e),
                    e.links.push({
                        destination: d,
                        opacity: h
                    })
                }
            }
            isEnabled(e) {
                return !!e.options.links?.enable
            }
            loadParticlesOptions(e, ...t) {
                for (let i of (e.links || (e.links = new e5),
                t))
                    e.links.load(i?.links)
            }
            reset() {}
        }
        async function e4(e, t=!0) {
            await e.addInteractor("particlesLinks", async e=>Promise.resolve(new e6(e)), t)
        }
        function e8(e, t) {
            var i;
            let s = ((i = e.map(e=>e.id)).sort((e,t)=>e - t),
            i.join("_"))
              , n = t.get(s);
            return void 0 === n && (n = (0,
            c.sZz)(),
            t.set(s, n)),
            n
        }
        class e7 {
            constructor(e) {
                this.container = e,
                this._drawLinkLine = (e,t)=>{
                    let i = e.options.links;
                    if (!i?.enable)
                        return;
                    let s = this.container
                      , n = s.actualOptions
                      , a = t.destination
                      , r = e.getPosition()
                      , o = a.getPosition()
                      , l = t.opacity;
                    s.canvas.draw(t=>{
                        let d;
                        let u = e.options.twinkle?.lines;
                        if (u?.enable) {
                            let e = u.frequency
                              , t = (0,
                            c.tXk)(u.color);
                            (0,
                            c.sZz)() < e && t && (d = t,
                            l = (0,
                            c.Gu7)(u.opacity))
                        }
                        if (!d) {
                            let t = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                            d = (0,
                            c.BEi)(e, a, t)
                        }
                        if (!d)
                            return;
                        let h = e.retina.linksWidth ?? 0
                          , p = e.retina.linksDistance ?? 0
                          , {backgroundMask: f} = n;
                        !function(e) {
                            let t = !1
                              , {begin: i, end: s, maxDistance: n, context: a, canvasSize: r, width: o, backgroundMask: l, colorLine: d, opacity: u, links: h} = e;
                            if ((0,
                            c.Spd)(i, s) <= n)
                                (0,
                                c.pSR)(a, i, s),
                                t = !0;
                            else if (h.warp) {
                                let e, o;
                                let l = {
                                    x: s.x - r.width,
                                    y: s.y
                                }
                                  , d = (0,
                                c.oW6)(i, l);
                                if (d.distance <= n) {
                                    let t = i.y - d.dy / d.dx * i.x;
                                    e = {
                                        x: 0,
                                        y: t
                                    },
                                    o = {
                                        x: r.width,
                                        y: t
                                    }
                                } else {
                                    let t = {
                                        x: s.x,
                                        y: s.y - r.height
                                    }
                                      , a = (0,
                                    c.oW6)(i, t);
                                    if (a.distance <= n) {
                                        let t = -(i.y - a.dy / a.dx * i.x) / (a.dy / a.dx);
                                        e = {
                                            x: t,
                                            y: 0
                                        },
                                        o = {
                                            x: t,
                                            y: r.height
                                        }
                                    } else {
                                        let t = {
                                            x: s.x - r.width,
                                            y: s.y - r.height
                                        }
                                          , a = (0,
                                        c.oW6)(i, t);
                                        if (a.distance <= n) {
                                            let t = i.y - a.dy / a.dx * i.x;
                                            o = {
                                                x: (e = {
                                                    x: -t / (a.dy / a.dx),
                                                    y: t
                                                }).x + r.width,
                                                y: e.y + r.height
                                            }
                                        }
                                    }
                                }
                                e && o && ((0,
                                c.pSR)(a, i, e),
                                (0,
                                c.pSR)(a, s, o),
                                t = !0)
                            }
                            if (!t)
                                return;
                            a.lineWidth = o,
                            l.enable && (a.globalCompositeOperation = l.composite),
                            a.strokeStyle = (0,
                            c.izR)(d, u);
                            let {shadow: p} = h;
                            if (p.enable) {
                                let e = (0,
                                c.tXk)(p.color);
                                e && (a.shadowBlur = p.blur,
                                a.shadowColor = (0,
                                c.izR)(e))
                            }
                            a.stroke()
                        }({
                            context: t,
                            width: h,
                            begin: r,
                            end: o,
                            maxDistance: p,
                            canvasSize: s.canvas.size,
                            links: i,
                            backgroundMask: f,
                            colorLine: d,
                            opacity: l
                        })
                    }
                    )
                }
                ,
                this._drawLinkTriangle = (e,t,i)=>{
                    let s = e.options.links;
                    if (!s?.enable)
                        return;
                    let n = s.triangles;
                    if (!n.enable)
                        return;
                    let a = this.container
                      , r = a.actualOptions
                      , o = t.destination
                      , l = i.destination
                      , d = n.opacity ?? (t.opacity + i.opacity) * .5;
                    d <= 0 || a.canvas.draw(t=>{
                        let i = e.getPosition()
                          , u = o.getPosition()
                          , h = l.getPosition()
                          , p = e.retina.linksDistance ?? 0;
                        if ((0,
                        c.Spd)(i, u) > p || (0,
                        c.Spd)(h, u) > p || (0,
                        c.Spd)(h, i) > p)
                            return;
                        let f = (0,
                        c.tXk)(n.color);
                        if (!f) {
                            let t = void 0 !== s.id ? a.particles.linksColors.get(s.id) : a.particles.linksColor;
                            f = (0,
                            c.BEi)(e, o, t)
                        }
                        f && function(e) {
                            let {context: t, pos1: i, pos2: s, pos3: n, backgroundMask: a, colorTriangle: r, opacityTriangle: o} = e;
                            t.beginPath(),
                            t.moveTo(i.x, i.y),
                            t.lineTo(s.x, s.y),
                            t.lineTo(n.x, n.y),
                            t.closePath(),
                            a.enable && (t.globalCompositeOperation = a.composite),
                            t.fillStyle = (0,
                            c.izR)(r, o),
                            t.fill()
                        }({
                            context: t,
                            pos1: i,
                            pos2: u,
                            pos3: h,
                            backgroundMask: r.backgroundMask,
                            colorTriangle: f,
                            opacityTriangle: d
                        })
                    }
                    )
                }
                ,
                this._drawTriangles = (e,t,i,s)=>{
                    let n = i.destination;
                    if (!(e.links?.triangles.enable && n.options.links?.triangles.enable))
                        return;
                    let a = n.links?.filter(e=>{
                        let t = this._getLinkFrequency(n, e.destination);
                        return n.options.links && t <= n.options.links.frequency && s.findIndex(t=>t.destination === e.destination) >= 0
                    }
                    );
                    if (a?.length)
                        for (let s of a) {
                            let a = s.destination;
                            this._getTriangleFrequency(t, n, a) > e.links.triangles.frequency || this._drawLinkTriangle(t, i, s)
                        }
                }
                ,
                this._getLinkFrequency = (e,t)=>e8([e, t], this._freqs.links),
                this._getTriangleFrequency = (e,t,i)=>e8([e, t, i], this._freqs.triangles),
                this._freqs = {
                    links: new Map,
                    triangles: new Map
                }
            }
            drawParticle(e, t) {
                let {links: i, options: s} = t;
                if (!i?.length)
                    return;
                let n = i.filter(e=>s.links && (s.links.frequency >= 1 || this._getLinkFrequency(t, e.destination) <= s.links.frequency));
                for (let e of n)
                    this._drawTriangles(s, t, e, n),
                    e.opacity > 0 && (t.retina.linksWidth ?? 0) > 0 && this._drawLinkLine(t, e)
            }
            async init() {
                this._freqs.links = new Map,
                this._freqs.triangles = new Map,
                await Promise.resolve()
            }
            particleCreated(e) {
                if (e.links = [],
                !e.options.links)
                    return;
                let t = this.container.retina.pixelRatio
                  , {retina: i} = e
                  , {distance: s, width: n} = e.options.links;
                i.linksDistance = s * t,
                i.linksWidth = n * t
            }
            particleDestroyed(e) {
                e.links = []
            }
        }
        class e9 {
            constructor() {
                this.id = "links"
            }
            getPlugin(e) {
                return Promise.resolve(new e7(e))
            }
            loadOptions() {}
            needsPlugin() {
                return !0
            }
        }
        async function te(e, t=!0) {
            let i = new e9;
            await e.addPlugin(i, t)
        }
        async function tt(e, t=!0) {
            await e4(e, t),
            await te(e, t)
        }
        let ti = {
            x: 0,
            y: 0
        };
        class ts {
            draw(e) {
                let {particle: t, radius: i} = e;
                !function(e, t, i) {
                    let {context: s} = e
                      , n = i.count.numerator * i.count.denominator
                      , a = i.count.numerator / i.count.denominator
                      , r = Math.PI - (0,
                    c.Idc)(180 * (a - 2) / a);
                    if (s) {
                        s.beginPath(),
                        s.translate(t.x, t.y),
                        s.moveTo(ti.x, ti.y);
                        for (let e = 0; e < n; e++)
                            s.lineTo(i.length, ti.y),
                            s.translate(i.length, ti.y),
                            s.rotate(r)
                    }
                }(e, this.getCenter(t, i), this.getSidesData(t, i))
            }
            getSidesCount(e) {
                let t = e.shapeData;
                return Math.round((0,
                c.Gu7)(t?.sides ?? 5))
            }
        }
        class tn extends ts {
            constructor() {
                super(...arguments),
                this.validTypes = ["polygon"]
            }
            getCenter(e, t) {
                return {
                    x: -t / (e.sides / 3.5),
                    y: -t / .76
                }
            }
            getSidesData(e, t) {
                let i = e.sides;
                return {
                    count: {
                        denominator: 1,
                        numerator: i
                    },
                    length: 2.66 * t / (i / 3)
                }
            }
        }
        class ta extends ts {
            constructor() {
                super(...arguments),
                this.validTypes = ["triangle"]
            }
            getCenter(e, t) {
                return {
                    x: -t,
                    y: t / 1.66
                }
            }
            getSidesCount() {
                return 3
            }
            getSidesData(e, t) {
                return {
                    count: {
                        denominator: 2,
                        numerator: 3
                    },
                    length: 2 * t
                }
            }
        }
        async function tr(e, t=!0) {
            await e.addShape(new tn, t)
        }
        async function to(e, t=!0) {
            await e.addShape(new ta, t)
        }
        async function tl(e, t=!0) {
            await tr(e, t),
            await to(e, t)
        }
        class tc {
            constructor() {
                this.enable = !1,
                this.speed = 0,
                this.decay = 0,
                this.sync = !1
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.speed && (this.speed = (0,
                c.Cst)(e.speed)),
                void 0 !== e.decay && (this.decay = (0,
                c.Cst)(e.decay)),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class td extends c.SWe {
            constructor() {
                super(),
                this.animation = new tc,
                this.direction = c.RnL.clockwise,
                this.path = !1,
                this.value = 0
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.direction && (this.direction = e.direction),
                this.animation.load(e.animation),
                void 0 !== e.path && (this.path = e.path))
            }
        }
        let tu = 2 * Math.PI;
        class th {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = e.options.rotate;
                if (!t)
                    return;
                e.rotate = {
                    enable: t.animation.enable,
                    value: (0,
                    c.Idc)((0,
                    c.Gu7)(t.value)),
                    min: 0,
                    max: tu
                },
                e.pathRotation = t.path;
                let i = t.direction;
                switch (i === c.RnL.random && (i = Math.floor(2 * (0,
                c.sZz)()) > 0 ? c.RnL.counterClockwise : c.RnL.clockwise),
                i) {
                case c.RnL.counterClockwise:
                case "counterClockwise":
                    e.rotate.status = c.NV1.decreasing;
                    break;
                case c.RnL.clockwise:
                    e.rotate.status = c.NV1.increasing
                }
                let s = t.animation;
                s.enable && (e.rotate.decay = 1 - (0,
                c.Gu7)(s.decay),
                e.rotate.velocity = (0,
                c.Gu7)(s.speed) / 360 * this.container.retina.reduceFactor,
                s.sync || (e.rotate.velocity *= (0,
                c.sZz)())),
                e.rotation = e.rotate.value
            }
            isEnabled(e) {
                let t = e.options.rotate;
                return !!t && !e.destroyed && !e.spawning && (!!t.value || t.animation.enable || t.path)
            }
            loadOptions(e, ...t) {
                for (let i of (e.rotate || (e.rotate = new td),
                t))
                    e.rotate.load(i?.rotate)
            }
            update(e, t) {
                this.isEnabled(e) && (e.isRotating = !!e.rotate,
                e.rotate && ((0,
                c.CrJ)(e, e.rotate, !1, c.Hyf.none, t),
                e.rotation = e.rotate.value))
            }
        }
        async function tp(e, t=!0) {
            await e.addParticleUpdater("rotate", e=>Promise.resolve(new th(e)), t)
        }
        let tf = Math.sqrt(2);
        class tm {
            constructor() {
                this.validTypes = ["edge", "square"]
            }
            draw(e) {
                !function(e) {
                    let {context: t, radius: i} = e
                      , s = i / tf
                      , n = 2 * s;
                    t.rect(-s, -s, n, n)
                }(e)
            }
            getSidesCount() {
                return 4
            }
        }
        async function tg(e, t=!0) {
            await e.addShape(new tm, t)
        }
        let tv = {
            x: 0,
            y: 0
        };
        class ty {
            constructor() {
                this.validTypes = ["star"]
            }
            draw(e) {
                !function(e) {
                    let {context: t, particle: i, radius: s} = e
                      , n = i.sides
                      , a = i.starInset ?? 2;
                    t.moveTo(tv.x, tv.y - s);
                    for (let e = 0; e < n; e++)
                        t.rotate(Math.PI / n),
                        t.lineTo(tv.x, tv.y - s * a),
                        t.rotate(Math.PI / n),
                        t.lineTo(tv.x, tv.y - s)
                }(e)
            }
            getSidesCount(e) {
                let t = e.shapeData;
                return Math.round((0,
                c.Gu7)(t?.sides ?? 5))
            }
            particleInit(e, t) {
                let i = t.shapeData;
                t.starInset = (0,
                c.Gu7)(i?.inset ?? 2)
            }
        }
        async function tb(e, t=!0) {
            await e.addShape(new ty, t)
        }
        class tw {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = this.container
                  , i = e.options
                  , s = (0,
                c.wA_)(i.stroke, e.id, i.reduceDuplicates);
                e.strokeWidth = (0,
                c.Gu7)(s.width) * t.retina.pixelRatio,
                e.strokeOpacity = (0,
                c.Gu7)(s.opacity ?? 1),
                e.strokeAnimation = s.color?.animation;
                let n = (0,
                c.lNs)(s.color) ?? e.getFillColor();
                n && (e.strokeColor = (0,
                c.bS$)(n, e.strokeAnimation, t.retina.reduceFactor))
            }
            isEnabled(e) {
                let t = e.strokeAnimation
                  , {strokeColor: i} = e;
                return !e.destroyed && !e.spawning && !!t && (i?.h.value !== void 0 && i.h.enable || i?.s.value !== void 0 && i.s.enable || i?.l.value !== void 0 && i.l.enable)
            }
            update(e, t) {
                this.isEnabled(e) && (0,
                c.PBz)(e.strokeColor, t)
            }
        }
        async function tx(e, t=!0) {
            await e.addParticleUpdater("strokeColor", e=>Promise.resolve(new tw(e)), t)
        }
        async function t_(e, t=!0) {
            await eN(e, !1),
            await B(e, !1),
            await V(e, !1),
            await Z(e, !1),
            await ee(e, !1),
            await en(e, !1),
            await er(e, !1),
            await ec(e, !1),
            await eh(e, !1),
            await ey(e, !1),
            await ex(e, !1),
            await eU(e, !1),
            await eJ(e, !1),
            await tt(e, !1),
            await P(),
            await I(e, !1),
            await eB(e, !1),
            await eH(e, !1),
            await tl(e, !1),
            await tg(e, !1),
            await tb(e, !1),
            await eq(e, !1),
            await tp(e, !1),
            await tx(e, !1),
            await k(e, t)
        }
    },
    5540: function(e, t, i) {
        "use strict";
        i.d(t, {
            lI: function() {
                return o
            },
            tl: function() {
                return a
            }
        }),
        i(3711);
        var s = i(9007);
        function n(e) {
            return void 0 === e && (e = ""),
            `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function a(e) {
            let t, {swiper: i, extendParams: a, on: r, emit: o} = e, l = "swiper-pagination";
            a({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e=>e,
                    formatFractionTotal: e=>e,
                    bulletClass: `${l}-bullet`,
                    bulletActiveClass: `${l}-bullet-active`,
                    modifierClass: `${l}-`,
                    currentClass: `${l}-current`,
                    totalClass: `${l}-total`,
                    hiddenClass: `${l}-hidden`,
                    progressbarFillClass: `${l}-progressbar-fill`,
                    progressbarOppositeClass: `${l}-progressbar-opposite`,
                    clickableClass: `${l}-clickable`,
                    lockClass: `${l}-lock`,
                    horizontalClass: `${l}-horizontal`,
                    verticalClass: `${l}-vertical`,
                    paginationDisabledClass: `${l}-disabled`
                }
            }),
            i.pagination = {
                el: null,
                bullets: []
            };
            let c = 0;
            function d() {
                return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && 0 === i.pagination.el.length
            }
            function u(e, t) {
                let {bulletActiveClass: s} = i.params.pagination;
                e && (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) && (e.classList.add(`${s}-${t}`),
                (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) && e.classList.add(`${s}-${t}-${t}`))
            }
            function h(e) {
                let t = e.target.closest(n(i.params.pagination.bulletClass));
                if (!t)
                    return;
                e.preventDefault();
                let a = (0,
                s.h)(t) * i.params.slidesPerGroup;
                if (i.params.loop) {
                    if (i.realIndex === a)
                        return;
                    i.slideToLoop(a)
                } else
                    i.slideTo(a)
            }
            function p() {
                let e, a;
                let r = i.rtl
                  , l = i.params.pagination;
                if (d())
                    return;
                let h = i.pagination.el;
                h = (0,
                s.m)(h);
                let p = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length
                  , f = i.params.loop ? Math.ceil(p / i.params.slidesPerGroup) : i.snapGrid.length;
                if (i.params.loop ? (a = i.previousRealIndex || 0,
                e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : void 0 !== i.snapIndex ? (e = i.snapIndex,
                a = i.previousSnapIndex) : (a = i.previousIndex || 0,
                e = i.activeIndex || 0),
                "bullets" === l.type && i.pagination.bullets && i.pagination.bullets.length > 0) {
                    let n, o, d;
                    let p = i.pagination.bullets;
                    if (l.dynamicBullets && (t = (0,
                    s.f)(p[0], i.isHorizontal() ? "width" : "height", !0),
                    h.forEach(e=>{
                        e.style[i.isHorizontal() ? "width" : "height"] = `${t * (l.dynamicMainBullets + 4)}px`
                    }
                    ),
                    l.dynamicMainBullets > 1 && void 0 !== a && ((c += e - (a || 0)) > l.dynamicMainBullets - 1 ? c = l.dynamicMainBullets - 1 : c < 0 && (c = 0)),
                    d = ((o = (n = Math.max(e - c, 0)) + (Math.min(p.length, l.dynamicMainBullets) - 1)) + n) / 2),
                    p.forEach(e=>{
                        let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e=>`${l.bulletActiveClass}${e}`)].map(e=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                        e.classList.remove(...t)
                    }
                    ),
                    h.length > 1)
                        p.forEach(t=>{
                            let a = (0,
                            s.h)(t);
                            a === e ? t.classList.add(...l.bulletActiveClass.split(" ")) : i.isElement && t.setAttribute("part", "bullet"),
                            l.dynamicBullets && (a >= n && a <= o && t.classList.add(...`${l.bulletActiveClass}-main`.split(" ")),
                            a === n && u(t, "prev"),
                            a === o && u(t, "next"))
                        }
                        );
                    else {
                        let t = p[e];
                        if (t && t.classList.add(...l.bulletActiveClass.split(" ")),
                        i.isElement && p.forEach((t,i)=>{
                            t.setAttribute("part", i === e ? "bullet-active" : "bullet")
                        }
                        ),
                        l.dynamicBullets) {
                            let e = p[n]
                              , t = p[o];
                            for (let e = n; e <= o; e += 1)
                                p[e] && p[e].classList.add(...`${l.bulletActiveClass}-main`.split(" "));
                            u(e, "prev"),
                            u(t, "next")
                        }
                    }
                    if (l.dynamicBullets) {
                        let e = Math.min(p.length, l.dynamicMainBullets + 4)
                          , s = (t * e - t) / 2 - d * t
                          , n = r ? "right" : "left";
                        p.forEach(e=>{
                            e.style[i.isHorizontal() ? n : "top"] = `${s}px`
                        }
                        )
                    }
                }
                h.forEach((t,s)=>{
                    if ("fraction" === l.type && (t.querySelectorAll(n(l.currentClass)).forEach(t=>{
                        t.textContent = l.formatFractionCurrent(e + 1)
                    }
                    ),
                    t.querySelectorAll(n(l.totalClass)).forEach(e=>{
                        e.textContent = l.formatFractionTotal(f)
                    }
                    )),
                    "progressbar" === l.type) {
                        let s;
                        s = l.progressbarOpposite ? i.isHorizontal() ? "vertical" : "horizontal" : i.isHorizontal() ? "horizontal" : "vertical";
                        let a = (e + 1) / f
                          , r = 1
                          , o = 1;
                        "horizontal" === s ? r = a : o = a,
                        t.querySelectorAll(n(l.progressbarFillClass)).forEach(e=>{
                            e.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${o})`,
                            e.style.transitionDuration = `${i.params.speed}ms`
                        }
                        )
                    }
                    "custom" === l.type && l.renderCustom ? (t.innerHTML = l.renderCustom(i, e + 1, f),
                    0 === s && o("paginationRender", t)) : (0 === s && o("paginationRender", t),
                    o("paginationUpdate", t)),
                    i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? "add" : "remove"](l.lockClass)
                }
                )
            }
            function f() {
                let e = i.params.pagination;
                if (d())
                    return;
                let t = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.grid && i.params.grid.rows > 1 ? i.slides.length / Math.ceil(i.params.grid.rows) : i.slides.length
                  , a = i.pagination.el;
                a = (0,
                s.m)(a);
                let r = "";
                if ("bullets" === e.type) {
                    let s = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
                    i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
                    for (let t = 0; t < s; t += 1)
                        e.renderBullet ? r += e.renderBullet.call(i, t, e.bulletClass) : r += `<${e.bulletElement} ${i.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(i, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(i, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
                i.pagination.bullets = [],
                a.forEach(t=>{
                    "custom" !== e.type && (t.innerHTML = r || ""),
                    "bullets" === e.type && i.pagination.bullets.push(...t.querySelectorAll(n(e.bulletClass)))
                }
                ),
                "custom" !== e.type && o("paginationRender", a[0])
            }
            function m() {
                var e, t, n;
                let a;
                i.params.pagination = (e = i.originalParams.pagination,
                t = i.params.pagination,
                n = {
                    el: "swiper-pagination"
                },
                i.params.createElements && Object.keys(n).forEach(a=>{
                    if (!t[a] && !0 === t.auto) {
                        let r = (0,
                        s.e)(i.el, `.${n[a]}`)[0];
                        r || ((r = (0,
                        s.c)("div", n[a])).className = n[a],
                        i.el.append(r)),
                        t[a] = r,
                        e[a] = r
                    }
                }
                ),
                t);
                let r = i.params.pagination;
                r.el && ("string" == typeof r.el && i.isElement && (a = i.el.querySelector(r.el)),
                a || "string" != typeof r.el || (a = [...document.querySelectorAll(r.el)]),
                a || (a = r.el),
                a && 0 !== a.length && (i.params.uniqueNavElements && "string" == typeof r.el && Array.isArray(a) && a.length > 1 && (a = [...i.el.querySelectorAll(r.el)]).length > 1 && (a = a.filter(e=>(0,
                s.a)(e, ".swiper")[0] === i.el)[0]),
                Array.isArray(a) && 1 === a.length && (a = a[0]),
                Object.assign(i.pagination, {
                    el: a
                }),
                (a = (0,
                s.m)(a)).forEach(e=>{
                    "bullets" === r.type && r.clickable && e.classList.add(...(r.clickableClass || "").split(" ")),
                    e.classList.add(r.modifierClass + r.type),
                    e.classList.add(i.isHorizontal() ? r.horizontalClass : r.verticalClass),
                    "bullets" === r.type && r.dynamicBullets && (e.classList.add(`${r.modifierClass}${r.type}-dynamic`),
                    c = 0,
                    r.dynamicMainBullets < 1 && (r.dynamicMainBullets = 1)),
                    "progressbar" === r.type && r.progressbarOpposite && e.classList.add(r.progressbarOppositeClass),
                    r.clickable && e.addEventListener("click", h),
                    i.enabled || e.classList.add(r.lockClass)
                }
                )))
            }
            function g() {
                let e = i.params.pagination;
                if (d())
                    return;
                let t = i.pagination.el;
                t && (t = (0,
                s.m)(t)).forEach(t=>{
                    t.classList.remove(e.hiddenClass),
                    t.classList.remove(e.modifierClass + e.type),
                    t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")),
                    t.removeEventListener("click", h))
                }
                ),
                i.pagination.bullets && i.pagination.bullets.forEach(t=>t.classList.remove(...e.bulletActiveClass.split(" ")))
            }
            r("changeDirection", ()=>{
                if (!i.pagination || !i.pagination.el)
                    return;
                let e = i.params.pagination
                  , {el: t} = i.pagination;
                (t = (0,
                s.m)(t)).forEach(t=>{
                    t.classList.remove(e.horizontalClass, e.verticalClass),
                    t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }
                )
            }
            ),
            r("init", ()=>{
                !1 === i.params.pagination.enabled ? v() : (m(),
                f(),
                p())
            }
            ),
            r("activeIndexChange", ()=>{
                void 0 === i.snapIndex && p()
            }
            ),
            r("snapIndexChange", ()=>{
                p()
            }
            ),
            r("snapGridLengthChange", ()=>{
                f(),
                p()
            }
            ),
            r("destroy", ()=>{
                g()
            }
            ),
            r("enable disable", ()=>{
                let {el: e} = i.pagination;
                e && (e = (0,
                s.m)(e)).forEach(e=>e.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass))
            }
            ),
            r("lock unlock", ()=>{
                p()
            }
            ),
            r("click", (e,t)=>{
                let n = t.target
                  , a = (0,
                s.m)(i.pagination.el);
                if (i.params.pagination.el && i.params.pagination.hideOnClick && a && a.length > 0 && !n.classList.contains(i.params.pagination.bulletClass)) {
                    if (i.navigation && (i.navigation.nextEl && n === i.navigation.nextEl || i.navigation.prevEl && n === i.navigation.prevEl))
                        return;
                    !0 === a[0].classList.contains(i.params.pagination.hiddenClass) ? o("paginationShow") : o("paginationHide"),
                    a.forEach(e=>e.classList.toggle(i.params.pagination.hiddenClass))
                }
            }
            );
            let v = ()=>{
                i.el.classList.add(i.params.pagination.paginationDisabledClass);
                let {el: e} = i.pagination;
                e && (e = (0,
                s.m)(e)).forEach(e=>e.classList.add(i.params.pagination.paginationDisabledClass)),
                g()
            }
            ;
            Object.assign(i.pagination, {
                enable: ()=>{
                    i.el.classList.remove(i.params.pagination.paginationDisabledClass);
                    let {el: e} = i.pagination;
                    e && (e = (0,
                    s.m)(e)).forEach(e=>e.classList.remove(i.params.pagination.paginationDisabledClass)),
                    m(),
                    f(),
                    p()
                }
                ,
                disable: v,
                render: f,
                update: p,
                init: m,
                destroy: g
            })
        }
        function r(e, t, i) {
            let n = `swiper-slide-shadow${i ? `-${i}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`
              , a = (0,
            s.g)(t)
              , r = a.querySelector(`.${n.split(" ").join(".")}`);
            return r || (r = (0,
            s.c)("div", n.split(" ")),
            a.append(r)),
            r
        }
        function o(e) {
            let {swiper: t, extendParams: i, on: n} = e;
            i({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            }),
            function(e) {
                let t;
                let {effect: i, swiper: s, on: n, setTranslate: a, setTransition: r, overwriteParams: o, perspective: l, recreateShadows: c, getEffectParams: d} = e;
                n("beforeInit", ()=>{
                    if (s.params.effect !== i)
                        return;
                    s.classNames.push(`${s.params.containerModifierClass}${i}`),
                    l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                    let e = o ? o() : {};
                    Object.assign(s.params, e),
                    Object.assign(s.originalParams, e)
                }
                ),
                n("setTranslate", ()=>{
                    s.params.effect === i && a()
                }
                ),
                n("setTransition", (e,t)=>{
                    s.params.effect === i && r(t)
                }
                ),
                n("transitionEnd", ()=>{
                    s.params.effect === i && c && d && d().slideShadows && (s.slides.forEach(e=>{
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e=>e.remove())
                    }
                    ),
                    c())
                }
                ),
                n("virtualUpdate", ()=>{
                    s.params.effect === i && (s.slides.length || (t = !0),
                    requestAnimationFrame(()=>{
                        t && s.slides && s.slides.length && (a(),
                        t = !1)
                    }
                    ))
                }
                )
            }({
                effect: "coverflow",
                swiper: t,
                on: n,
                setTranslate: ()=>{
                    let {width: e, height: i, slides: n, slidesSizesGrid: a} = t
                      , o = t.params.coverflowEffect
                      , l = t.isHorizontal()
                      , c = t.translate
                      , d = l ? -c + e / 2 : -c + i / 2
                      , u = l ? o.rotate : -o.rotate
                      , h = o.depth;
                    for (let e = 0, i = n.length; e < i; e += 1) {
                        let i = n[e]
                          , c = a[e]
                          , p = (d - i.swiperSlideOffset - c / 2) / c
                          , f = "function" == typeof o.modifier ? o.modifier(p) : p * o.modifier
                          , m = l ? u * f : 0
                          , g = l ? 0 : u * f
                          , v = -h * Math.abs(f)
                          , y = o.stretch;
                        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(o.stretch) / 100 * c);
                        let b = l ? 0 : y * f
                          , w = l ? y * f : 0
                          , x = 1 - (1 - o.scale) * Math.abs(f);
                        .001 > Math.abs(w) && (w = 0),
                        .001 > Math.abs(b) && (b = 0),
                        .001 > Math.abs(v) && (v = 0),
                        .001 > Math.abs(m) && (m = 0),
                        .001 > Math.abs(g) && (g = 0),
                        .001 > Math.abs(x) && (x = 0),
                        t.browser && t.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001),
                        Math.abs(g) / 90 % 2 == 1 && (g += .001));
                        let _ = `translate3d(${w}px,${b}px,${v}px)  rotateX(${g}deg) rotateY(${m}deg) scale(${x})`;
                        if (function(e, t) {
                            let i = (0,
                            s.g)(t);
                            return i !== t && (i.style.backfaceVisibility = "hidden",
                            i.style["-webkit-backface-visibility"] = "hidden"),
                            i
                        }(0, i).style.transform = _,
                        i.style.zIndex = -Math.abs(Math.round(f)) + 1,
                        o.slideShadows) {
                            let e = l ? i.querySelector(".swiper-slide-shadow-left") : i.querySelector(".swiper-slide-shadow-top")
                              , t = l ? i.querySelector(".swiper-slide-shadow-right") : i.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = r("coverflow", i, l ? "left" : "top")),
                            t || (t = r("coverflow", i, l ? "right" : "bottom")),
                            e && (e.style.opacity = f > 0 ? f : 0),
                            t && (t.style.opacity = -f > 0 ? -f : 0)
                        }
                    }
                }
                ,
                setTransition: e=>{
                    t.slides.map(e=>(0,
                    s.g)(e)).forEach(t=>{
                        t.style.transitionDuration = `${e}ms`,
                        t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>{
                            t.style.transitionDuration = `${e}ms`
                        }
                        )
                    }
                    )
                }
                ,
                perspective: ()=>!0,
                overwriteParams: ()=>({
                    watchSlidesProgress: !0
                })
            })
        }
    },
    3711: function(e, t, i) {
        "use strict";
        function s(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function n(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(i=>{
                void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
            }
            )
        }
        i.d(t, {
            a: function() {
                return l
            },
            g: function() {
                return r
            }
        });
        let a = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: ()=>null,
            querySelectorAll: ()=>[],
            getElementById: ()=>null,
            createEvent: ()=>({
                initEvent() {}
            }),
            createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: ()=>[]
            }),
            createElementNS: ()=>({}),
            importNode: ()=>null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function r() {
            let e = "undefined" != typeof document ? document : {};
            return n(e, a),
            e
        }
        let o = {
            document: a,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: ()=>({}),
            requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function l() {
            let e = "undefined" != typeof window ? window : {};
            return n(e, o),
            e
        }
    },
    9007: function(e, t, i) {
        "use strict";
        i.d(t, {
            a: function() {
                return b
            },
            c: function() {
                return f
            },
            d: function() {
                return r
            },
            e: function() {
                return h
            },
            f: function() {
                return w
            },
            g: function() {
                return u
            },
            h: function() {
                return y
            },
            j: function() {
                return o
            },
            m: function() {
                return x
            },
            n: function() {
                return a
            },
            o: function() {
                return v
            },
            p: function() {
                return g
            },
            q: function() {
                return m
            },
            r: function() {
                return d
            },
            s: function() {
                return c
            },
            t: function() {
                return p
            },
            u: function() {
                return function e() {
                    let t = Object(arguments.length <= 0 ? void 0 : arguments[0])
                      , i = ["__proto__", "constructor", "prototype"];
                    for (let s = 1; s < arguments.length; s += 1) {
                        let n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                        if (null != n && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(n instanceof HTMLElement) : !n || 1 !== n.nodeType && 11 !== n.nodeType)) {
                            let s = Object.keys(Object(n)).filter(e=>0 > i.indexOf(e));
                            for (let i = 0, a = s.length; i < a; i += 1) {
                                let a = s[i]
                                  , r = Object.getOwnPropertyDescriptor(n, a);
                                void 0 !== r && r.enumerable && (l(t[a]) && l(n[a]) ? n[a].__swiper__ ? t[a] = n[a] : e(t[a], n[a]) : !l(t[a]) && l(n[a]) ? (t[a] = {},
                                n[a].__swiper__ ? t[a] = n[a] : e(t[a], n[a])) : t[a] = n[a])
                            }
                        }
                    }
                    return t
                }
            },
            v: function() {
                return n
            }
        });
        var s = i(3711);
        function n(e) {
            Object.keys(e).forEach(t=>{
                try {
                    e[t] = null
                } catch (e) {}
                try {
                    delete e[t]
                } catch (e) {}
            }
            )
        }
        function a(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        }
        function r() {
            return Date.now()
        }
        function o(e, t) {
            let i, n, a;
            void 0 === t && (t = "x");
            let r = (0,
            s.a)()
              , o = function(e) {
                let t;
                let i = (0,
                s.a)();
                return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                !t && e.currentStyle && (t = e.currentStyle),
                t || (t = e.style),
                t
            }(e);
            return r.WebKitCSSMatrix ? ((n = o.transform || o.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(e=>e.replace(",", ".")).join(", ")),
            a = new r.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (n = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (n = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            n || 0
        }
        function l(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function c(e, t, i) {
            e.style.setProperty(t, i)
        }
        function d(e) {
            let t, {swiper: i, targetPosition: n, side: a} = e, r = (0,
            s.a)(), o = -i.translate, l = null, c = i.params.speed;
            i.wrapperEl.style.scrollSnapType = "none",
            r.cancelAnimationFrame(i.cssModeFrameID);
            let d = n > o ? "next" : "prev"
              , u = (e,t)=>"next" === d && e >= t || "prev" === d && e <= t
              , h = ()=>{
                t = new Date().getTime(),
                null === l && (l = t);
                let e = o + (.5 - Math.cos(Math.max(Math.min((t - l) / c, 1), 0) * Math.PI) / 2) * (n - o);
                if (u(e, n) && (e = n),
                i.wrapperEl.scrollTo({
                    [a]: e
                }),
                u(e, n)) {
                    i.wrapperEl.style.overflow = "hidden",
                    i.wrapperEl.style.scrollSnapType = "",
                    setTimeout(()=>{
                        i.wrapperEl.style.overflow = "",
                        i.wrapperEl.scrollTo({
                            [a]: e
                        })
                    }
                    ),
                    r.cancelAnimationFrame(i.cssModeFrameID);
                    return
                }
                i.cssModeFrameID = r.requestAnimationFrame(h)
            }
            ;
            h()
        }
        function u(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }
        function h(e, t) {
            return void 0 === t && (t = ""),
            [...e.children].filter(e=>e.matches(t))
        }
        function p(e) {
            try {
                console.warn(e);
                return
            } catch (e) {}
        }
        function f(e, t) {
            var i;
            void 0 === t && (t = []);
            let s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""),
            i.trim().split(" ").filter(e=>!!e.trim()))),
            s
        }
        function m(e, t) {
            let i = [];
            for (; e.previousElementSibling; ) {
                let s = e.previousElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function g(e, t) {
            let i = [];
            for (; e.nextElementSibling; ) {
                let s = e.nextElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function v(e, t) {
            return (0,
            s.a)().getComputedStyle(e, null).getPropertyValue(t)
        }
        function y(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling); )
                    1 === i.nodeType && (t += 1);
                return t
            }
        }
        function b(e, t) {
            let i = []
              , s = e.parentElement;
            for (; s; )
                t ? s.matches(t) && i.push(s) : i.push(s),
                s = s.parentElement;
            return i
        }
        function w(e, t, i) {
            let n = (0,
            s.a)();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        function x(e) {
            return (Array.isArray(e) ? e : [e]).filter(e=>!!e)
        }
    },
    3267: function(e, t, i) {
        "use strict";
        let s, n, a;
        i.d(t, {
            tq: function() {
                return W
            },
            o5: function() {
                return N
            }
        });
        var r = i(2265)
          , o = i(3711)
          , l = i(9007);
        function c() {
            return s || (s = function() {
                let e = (0,
                o.a)()
                  , t = (0,
                o.g)();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
            s
        }
        function d(e) {
            return void 0 === e && (e = {}),
            n || (n = function(e) {
                let {userAgent: t} = void 0 === e ? {} : e
                  , i = c()
                  , s = (0,
                o.a)()
                  , n = s.navigator.platform
                  , a = t || s.navigator.userAgent
                  , r = {
                    ios: !1,
                    android: !1
                }
                  , l = s.screen.width
                  , d = s.screen.height
                  , u = a.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , h = a.match(/(iPad).*OS\s([\d_]+)/)
                  , p = a.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , f = !h && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , m = "MacIntel" === n;
                return !h && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && ((h = a.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]),
                m = !1),
                u && "Win32" !== n && (r.os = "android",
                r.android = !0),
                (h || f || p) && (r.os = "ios",
                r.ios = !0),
                r
            }(e)),
            n
        }
        let u = (e,t,i)=>{
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }
          , h = (e,t,i)=>{
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }
          , p = (e,t)=>{
            if (!e || e.destroyed || !e.params)
                return;
            let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (i) {
                let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
                    i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                }
                )),
                t && t.remove()
            }
        }
          , f = (e,t)=>{
            if (!e.slides[t])
                return;
            let i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        }
          , m = e=>{
            if (!e || e.destroyed || !e.params)
                return;
            let t = e.params.lazyPreloadPrevNext
              , i = e.slides.length;
            if (!i || !t || t < 0)
                return;
            t = Math.min(t, i);
            let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
              , n = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                let i = [n - t];
                i.push(...Array.from({
                    length: t
                }).map((e,t)=>n + s + t)),
                e.slides.forEach((t,s)=>{
                    i.includes(t.column) && f(e, s)
                }
                );
                return
            }
            let a = n + s - 1;
            if (e.params.rewind || e.params.loop)
                for (let s = n - t; s <= a + t; s += 1) {
                    let t = (s % i + i) % i;
                    (t < n || t > a) && f(e, t)
                }
            else
                for (let s = Math.max(n - t, 0); s <= Math.min(a + t, i - 1); s += 1)
                    s !== n && (s > a || s < n) && f(e, s)
        }
        ;
        function g(e) {
            let {swiper: t, runCallbacks: i, direction: s, step: n} = e
              , {activeIndex: a, previousIndex: r} = t
              , o = s;
            if (o || (o = a > r ? "next" : a < r ? "prev" : "reset"),
            t.emit(`transition${n}`),
            i && a !== r) {
                if ("reset" === o) {
                    t.emit(`slideResetTransition${n}`);
                    return
                }
                t.emit(`slideChangeTransition${n}`),
                "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
            }
        }
        function v(e, t, i) {
            let s = (0,
            o.a)()
              , {params: n} = e
              , a = n.edgeSwipeDetection
              , r = n.edgeSwipeThreshold;
            return !a || !(i <= r) && !(i >= s.innerWidth - r) || "prevent" === a && (t.preventDefault(),
            !0)
        }
        function y(e) {
            let t = (0,
            o.g)()
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            let s = this.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== s.pointerId && s.pointerId !== i.pointerId)
                    return;
                s.pointerId = i.pointerId
            } else
                "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type) {
                v(this, i, i.targetTouches[0].pageX);
                return
            }
            let {params: n, touches: a, enabled: r} = this;
            if (!r || !n.simulateTouch && "mouse" === i.pointerType || this.animating && n.preventInteractionOnTransition)
                return;
            !this.animating && n.cssMode && n.loop && this.loopFix();
            let c = i.target;
            if ("wrapper" === n.touchEventsTarget && !this.wrapperEl.contains(c) || "which"in i && 3 === i.which || "button"in i && i.button > 0 || s.isTouched && s.isMoved)
                return;
            let d = !!n.noSwipingClass && "" !== n.noSwipingClass
              , u = i.composedPath ? i.composedPath() : i.path;
            d && i.target && i.target.shadowRoot && u && (c = u[0]);
            let h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
              , p = !!(i.target && i.target.shadowRoot);
            if (n.noSwiping && (p ? function(e, t) {
                return void 0 === t && (t = this),
                function t(i) {
                    if (!i || i === (0,
                    o.g)() || i === (0,
                    o.a)())
                        return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(h, c) : c.closest(h))) {
                this.allowClick = !0;
                return
            }
            if (n.swipeHandler && !c.closest(n.swipeHandler))
                return;
            a.currentX = i.pageX,
            a.currentY = i.pageY;
            let f = a.currentX
              , m = a.currentY;
            if (!v(this, i, f))
                return;
            Object.assign(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            a.startX = f,
            a.startY = m,
            s.touchStartTime = (0,
            l.d)(),
            this.allowClick = !0,
            this.updateSize(),
            this.swipeDirection = void 0,
            n.threshold > 0 && (s.allowThresholdMove = !1);
            let g = !0;
            c.matches(s.focusableElements) && (g = !1,
            "SELECT" === c.nodeName && (s.isTouched = !1)),
            t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== c && t.activeElement.blur();
            let y = g && this.allowTouchMove && n.touchStartPreventDefault;
            (n.touchStartForcePreventDefault || y) && !c.isContentEditable && i.preventDefault(),
            n.freeMode && n.freeMode.enabled && this.freeMode && this.animating && !n.cssMode && this.freeMode.onTouchStart(),
            this.emit("touchStart", i)
        }
        function b(e) {
            let t, i;
            let s = (0,
            o.g)()
              , n = this.touchEventsData
              , {params: a, touches: r, rtlTranslate: c, enabled: d} = this;
            if (!d || !a.simulateTouch && "mouse" === e.pointerType)
                return;
            let u = e;
            if (u.originalEvent && (u = u.originalEvent),
            "pointermove" === u.type && (null !== n.touchId || u.pointerId !== n.pointerId))
                return;
            if ("touchmove" === u.type) {
                if (!(t = [...u.changedTouches].filter(e=>e.identifier === n.touchId)[0]) || t.identifier !== n.touchId)
                    return
            } else
                t = u;
            if (!n.isTouched) {
                n.startMoving && n.isScrolling && this.emit("touchMoveOpposite", u);
                return
            }
            let h = t.pageX
              , p = t.pageY;
            if (u.preventedByNestedSwiper) {
                r.startX = h,
                r.startY = p;
                return
            }
            if (!this.allowTouchMove) {
                u.target.matches(n.focusableElements) || (this.allowClick = !1),
                n.isTouched && (Object.assign(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }),
                n.touchStartTime = (0,
                l.d)());
                return
            }
            if (a.touchReleaseOnEdges && !a.loop) {
                if (this.isVertical()) {
                    if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) {
                        n.isTouched = !1,
                        n.isMoved = !1;
                        return
                    }
                } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate())
                    return
            }
            if (s.activeElement && u.target === s.activeElement && u.target.matches(n.focusableElements)) {
                n.isMoved = !0,
                this.allowClick = !1;
                return
            }
            n.allowTouchCallbacks && this.emit("touchMove", u),
            r.previousX = r.currentX,
            r.previousY = r.currentY,
            r.currentX = h,
            r.currentY = p;
            let f = r.currentX - r.startX
              , m = r.currentY - r.startY;
            if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold)
                return;
            if (void 0 === n.isScrolling) {
                let e;
                this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI,
                n.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (n.isScrolling && this.emit("touchMoveOpposite", u),
            void 0 === n.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0),
            n.isScrolling || "touchmove" === u.type && n.preventTouchMoveFromPointerMove) {
                n.isTouched = !1;
                return
            }
            if (!n.startMoving)
                return;
            this.allowClick = !1,
            !a.cssMode && u.cancelable && u.preventDefault(),
            a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
            let g = this.isHorizontal() ? f : m
              , v = this.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
            a.oneWayMovement && (g = Math.abs(g) * (c ? 1 : -1),
            v = Math.abs(v) * (c ? 1 : -1)),
            r.diff = g,
            g *= a.touchRatio,
            c && (g = -g,
            v = -v);
            let y = this.touchesDirection;
            this.swipeDirection = g > 0 ? "prev" : "next",
            this.touchesDirection = v > 0 ? "prev" : "next";
            let b = this.params.loop && !a.cssMode
              , w = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
            if (!n.isMoved) {
                if (b && w && this.loopFix({
                    direction: this.swipeDirection
                }),
                n.startTranslate = this.getTranslate(),
                this.setTransition(0),
                this.animating) {
                    let e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            bySwiperTouchMove: !0
                        }
                    });
                    this.wrapperEl.dispatchEvent(e)
                }
                n.allowMomentumBounce = !1,
                a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0),
                this.emit("sliderFirstMove", u)
            }
            if (new Date().getTime(),
            n.isMoved && n.allowThresholdMove && y !== this.touchesDirection && b && w && Math.abs(g) >= 1) {
                Object.assign(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p,
                    startTranslate: n.currentTranslate
                }),
                n.loopSwapReset = !0,
                n.startTranslate = n.currentTranslate;
                return
            }
            this.emit("sliderMove", u),
            n.isMoved = !0,
            n.currentTranslate = g + n.startTranslate;
            let x = !0
              , _ = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (_ = 0),
            g > 0 ? (b && w && !i && n.allowThresholdMove && n.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }),
            n.currentTranslate > this.minTranslate() && (x = !1,
            a.resistance && (n.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + n.startTranslate + g) ** _))) : g < 0 && (b && w && !i && n.allowThresholdMove && n.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }),
            n.currentTranslate < this.maxTranslate() && (x = !1,
            a.resistance && (n.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - n.startTranslate - g) ** _))),
            x && (u.preventedByNestedSwiper = !0),
            !this.allowSlideNext && "next" === this.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
            !this.allowSlidePrev && "prev" === this.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
            this.allowSlidePrev || this.allowSlideNext || (n.currentTranslate = n.startTranslate),
            a.threshold > 0) {
                if (Math.abs(g) > a.threshold || n.allowThresholdMove) {
                    if (!n.allowThresholdMove) {
                        n.allowThresholdMove = !0,
                        r.startX = r.currentX,
                        r.startY = r.currentY,
                        n.currentTranslate = n.startTranslate,
                        r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                        return
                    }
                } else {
                    n.currentTranslate = n.startTranslate;
                    return
                }
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(),
            this.updateSlidesClasses()),
            a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(),
            this.updateProgress(n.currentTranslate),
            this.setTranslate(n.currentTranslate))
        }
        function w(e) {
            let t, i;
            let s = this
              , n = s.touchEventsData
              , a = e;
            if (a.originalEvent && (a = a.originalEvent),
            "touchend" === a.type || "touchcancel" === a.type) {
                if (!(t = [...a.changedTouches].filter(e=>e.identifier === n.touchId)[0]) || t.identifier !== n.touchId)
                    return
            } else {
                if (null !== n.touchId || a.pointerId !== n.pointerId)
                    return;
                t = a
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView)))
                return;
            n.pointerId = null,
            n.touchId = null;
            let {params: r, touches: o, rtlTranslate: c, slidesGrid: d, enabled: u} = s;
            if (!u || !r.simulateTouch && "mouse" === a.pointerType)
                return;
            if (n.allowTouchCallbacks && s.emit("touchEnd", a),
            n.allowTouchCallbacks = !1,
            !n.isTouched) {
                n.isMoved && r.grabCursor && s.setGrabCursor(!1),
                n.isMoved = !1,
                n.startMoving = !1;
                return
            }
            r.grabCursor && n.isMoved && n.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
            let h = (0,
            l.d)()
              , p = h - n.touchStartTime;
            if (s.allowClick) {
                let e = a.path || a.composedPath && a.composedPath();
                s.updateClickedSlide(e && e[0] || a.target, e),
                s.emit("tap click", a),
                p < 300 && h - n.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
            }
            if (n.lastClickTime = (0,
            l.d)(),
            (0,
            l.n)(()=>{
                s.destroyed || (s.allowClick = !0)
            }
            ),
            !n.isTouched || !n.isMoved || !s.swipeDirection || 0 === o.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
                n.isTouched = !1,
                n.isMoved = !1,
                n.startMoving = !1;
                return
            }
            if (n.isTouched = !1,
            n.isMoved = !1,
            n.startMoving = !1,
            i = r.followFinger ? c ? s.translate : -s.translate : -n.currentTranslate,
            r.cssMode)
                return;
            if (r.freeMode && r.freeMode.enabled) {
                s.freeMode.onTouchEnd({
                    currentPos: i
                });
                return
            }
            let f = i >= -s.maxTranslate() && !s.params.loop
              , m = 0
              , g = s.slidesSizesGrid[0];
            for (let e = 0; e < d.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                let t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== d[e + t] ? (f || i >= d[e] && i < d[e + t]) && (m = e,
                g = d[e + t] - d[e]) : (f || i >= d[e]) && (m = e,
                g = d[d.length - 1] - d[d.length - 2])
            }
            let v = null
              , y = null;
            r.rewind && (s.isBeginning ? y = r.virtual && r.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (v = 0));
            let b = (i - d[m]) / g
              , w = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (p > r.longSwipesMs) {
                if (!r.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                "next" === s.swipeDirection && (b >= r.longSwipesRatio ? s.slideTo(r.rewind && s.isEnd ? v : m + w) : s.slideTo(m)),
                "prev" === s.swipeDirection && (b > 1 - r.longSwipesRatio ? s.slideTo(m + w) : null !== y && b < 0 && Math.abs(b) > r.longSwipesRatio ? s.slideTo(y) : s.slideTo(m))
            } else {
                if (!r.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl) ? a.target === s.navigation.nextEl ? s.slideTo(m + w) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== v ? v : m + w),
                "prev" === s.swipeDirection && s.slideTo(null !== y ? y : m))
            }
        }
        function x() {
            let e = this
              , {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            let {allowSlideNext: s, allowSlidePrev: n, snapGrid: a} = e
              , r = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
            let o = r && t.loop;
            "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout(()=>{
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
            , 500)),
            e.allowSlidePrev = n,
            e.allowSlideNext = s,
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
        function _(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function S() {
            let {wrapperEl: e, rtlTranslate: t, enabled: i} = this;
            if (!i)
                return;
            this.previousTranslate = this.translate,
            this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop,
            0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
            let s = this.maxTranslate() - this.minTranslate();
            (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
            this.emit("setTranslate", this.translate, !1)
        }
        function C(e) {
            p(this, e.target),
            !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
        }
        function T() {
            !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0,
            this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
        }
        let M = (e,t)=>{
            let i = (0,
            o.g)()
              , {params: s, el: n, wrapperEl: a, device: r} = e
              , l = !!s.nested
              , c = "on" === t ? "addEventListener" : "removeEventListener";
            i[c]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: l
            }),
            n[c]("touchstart", e.onTouchStart, {
                passive: !1
            }),
            n[c]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
            i[c]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: l
            }),
            i[c]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }),
            i[c]("touchend", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("pointerup", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("pointercancel", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("touchcancel", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("pointerout", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("pointerleave", e.onTouchEnd, {
                passive: !0
            }),
            i[c]("contextmenu", e.onTouchEnd, {
                passive: !0
            }),
            (s.preventClicks || s.preventClicksPropagation) && n[c]("click", e.onClick, !0),
            s.cssMode && a[c]("scroll", e.onScroll),
            s.updateOnWindowResize ? e[t](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0) : e[t]("observerUpdate", x, !0),
            n[c]("load", e.onLoad, {
                capture: !0
            })
        }
          , E = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
        var k = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let P = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    let n = i ? "unshift" : "push";
                    return e.split(" ").forEach(e=>{
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                        s.eventsListeners[e][n](t)
                    }
                    ),
                    s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    function n() {
                        s.off(e, n),
                        n.__emitterProxy && delete n.__emitterProxy;
                        for (var i = arguments.length, a = Array(i), r = 0; r < i; r++)
                            a[r] = arguments[r];
                        t.apply(s, a)
                    }
                    return n.__emitterProxy = t,
                    s.on(e, n, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e),
                    this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                    this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e=>{
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s,n)=>{
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                        }
                        )
                    }
                    ),
                    i
                },
                emit() {
                    let e, t, i;
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                        return s;
                    for (var n = arguments.length, a = Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0],
                    t = a.slice(1, a.length),
                    i = s) : (e = a[0].events,
                    t = a[0].data,
                    i = a[0].context || s),
                    t.unshift(i),
                    (Array.isArray(e) ? e : e.split(" ")).forEach(e=>{
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s=>{
                            s.apply(i, [e, ...t])
                        }
                        ),
                        s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e=>{
                            e.apply(i, t)
                        }
                        )
                    }
                    ),
                    s
                }
            },
            update: {
                updateSize: function() {
                    let e, t;
                    let i = this.el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth,
                    t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight,
                    0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0,
                    l.o)(i, "padding-left") || 0, 10) - parseInt((0,
                    l.o)(i, "padding-right") || 0, 10),
                    t = t - parseInt((0,
                    l.o)(i, "padding-top") || 0, 10) - parseInt((0,
                    l.o)(i, "padding-bottom") || 0, 10),
                    Number.isNaN(e) && (e = 0),
                    Number.isNaN(t) && (t = 0),
                    Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    let e;
                    let t = this;
                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                    }
                    let s = t.params
                      , {wrapperEl: n, slidesEl: a, size: r, rtlTranslate: o, wrongRTL: c} = t
                      , d = t.virtual && s.virtual.enabled
                      , u = d ? t.virtual.slides.length : t.slides.length
                      , h = (0,
                    l.e)(a, `.${t.params.slideClass}, swiper-slide`)
                      , p = d ? t.virtual.slides.length : h.length
                      , f = []
                      , m = []
                      , g = []
                      , v = s.slidesOffsetBefore;
                    "function" == typeof v && (v = s.slidesOffsetBefore.call(t));
                    let y = s.slidesOffsetAfter;
                    "function" == typeof y && (y = s.slidesOffsetAfter.call(t));
                    let b = t.snapGrid.length
                      , w = t.slidesGrid.length
                      , x = s.spaceBetween
                      , _ = -v
                      , S = 0
                      , C = 0;
                    if (void 0 === r)
                        return;
                    "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)),
                    t.virtualSize = -x,
                    h.forEach(e=>{
                        o ? e.style.marginLeft = "" : e.style.marginRight = "",
                        e.style.marginBottom = "",
                        e.style.marginTop = ""
                    }
                    ),
                    s.centeredSlides && s.cssMode && ((0,
                    l.s)(n, "--swiper-centered-offset-before", ""),
                    (0,
                    l.s)(n, "--swiper-centered-offset-after", ""));
                    let T = s.grid && s.grid.rows > 1 && t.grid;
                    T ? t.grid.initSlides(h) : t.grid && t.grid.unsetSlides();
                    let M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e=>void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                    for (let n = 0; n < p; n += 1) {
                        let a;
                        if (e = 0,
                        h[n] && (a = h[n]),
                        T && t.grid.updateSlide(n, a, h),
                        !h[n] || "none" !== (0,
                        l.o)(a, "display")) {
                            if ("auto" === s.slidesPerView) {
                                M && (h[n].style[t.getDirectionLabel("width")] = "");
                                let r = getComputedStyle(a)
                                  , o = a.style.transform
                                  , c = a.style.webkitTransform;
                                if (o && (a.style.transform = "none"),
                                c && (a.style.webkitTransform = "none"),
                                s.roundLengths)
                                    e = t.isHorizontal() ? (0,
                                    l.f)(a, "width", !0) : (0,
                                    l.f)(a, "height", !0);
                                else {
                                    let t = i(r, "width")
                                      , s = i(r, "padding-left")
                                      , n = i(r, "padding-right")
                                      , o = i(r, "margin-left")
                                      , l = i(r, "margin-right")
                                      , c = r.getPropertyValue("box-sizing");
                                    if (c && "border-box" === c)
                                        e = t + o + l;
                                    else {
                                        let {clientWidth: i, offsetWidth: r} = a;
                                        e = t + s + n + o + l + (r - i)
                                    }
                                }
                                o && (a.style.transform = o),
                                c && (a.style.webkitTransform = c),
                                s.roundLengths && (e = Math.floor(e))
                            } else
                                e = (r - (s.slidesPerView - 1) * x) / s.slidesPerView,
                                s.roundLengths && (e = Math.floor(e)),
                                h[n] && (h[n].style[t.getDirectionLabel("width")] = `${e}px`);
                            h[n] && (h[n].swiperSlideSize = e),
                            g.push(e),
                            s.centeredSlides ? (_ = _ + e / 2 + S / 2 + x,
                            0 === S && 0 !== n && (_ = _ - r / 2 - x),
                            0 === n && (_ = _ - r / 2 - x),
                            .001 > Math.abs(_) && (_ = 0),
                            s.roundLengths && (_ = Math.floor(_)),
                            C % s.slidesPerGroup == 0 && f.push(_),
                            m.push(_)) : (s.roundLengths && (_ = Math.floor(_)),
                            (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup == 0 && f.push(_),
                            m.push(_),
                            _ = _ + e + x),
                            t.virtualSize += e + x,
                            S = e,
                            C += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, r) + y,
                    o && c && ("slide" === s.effect || "coverflow" === s.effect) && (n.style.width = `${t.virtualSize + x}px`),
                    s.setWrapperSize && (n.style[t.getDirectionLabel("width")] = `${t.virtualSize + x}px`),
                    T && t.grid.updateWrapperSize(e, f),
                    !s.centeredSlides) {
                        let e = [];
                        for (let i = 0; i < f.length; i += 1) {
                            let n = f[i];
                            s.roundLengths && (n = Math.floor(n)),
                            f[i] <= t.virtualSize - r && e.push(n)
                        }
                        f = e,
                        Math.floor(t.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - r)
                    }
                    if (d && s.loop) {
                        let e = g[0] + x;
                        if (s.slidesPerGroup > 1) {
                            let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup)
                              , n = e * s.slidesPerGroup;
                            for (let e = 0; e < i; e += 1)
                                f.push(f[f.length - 1] + n)
                        }
                        for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1)
                            1 === s.slidesPerGroup && f.push(f[f.length - 1] + e),
                            m.push(m[m.length - 1] + e),
                            t.virtualSize += e
                    }
                    if (0 === f.length && (f = [0]),
                    0 !== x) {
                        let e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
                        h.filter((e,t)=>!s.cssMode || !!s.loop || t !== h.length - 1).forEach(t=>{
                            t.style[e] = `${x}px`
                        }
                        )
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        g.forEach(t=>{
                            e += t + (x || 0)
                        }
                        );
                        let t = (e -= x) - r;
                        f = f.map(e=>e <= 0 ? -v : e > t ? t + y : e)
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        g.forEach(t=>{
                            e += t + (x || 0)
                        }
                        ),
                        e -= x;
                        let t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                        if (e + t < r) {
                            let i = (r - e - t) / 2;
                            f.forEach((e,t)=>{
                                f[t] = e - i
                            }
                            ),
                            m.forEach((e,t)=>{
                                m[t] = e + i
                            }
                            )
                        }
                    }
                    if (Object.assign(t, {
                        slides: h,
                        snapGrid: f,
                        slidesGrid: m,
                        slidesSizesGrid: g
                    }),
                    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        (0,
                        l.s)(n, "--swiper-centered-offset-before", `${-f[0]}px`),
                        (0,
                        l.s)(n, "--swiper-centered-offset-after", `${t.size / 2 - g[g.length - 1] / 2}px`);
                        let e = -t.snapGrid[0]
                          , i = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(t=>t + e),
                        t.slidesGrid = t.slidesGrid.map(e=>e + i)
                    }
                    if (p !== u && t.emit("slidesLengthChange"),
                    f.length !== b && (t.params.watchOverflow && t.checkOverflow(),
                    t.emit("snapGridLengthChange")),
                    m.length !== w && t.emit("slidesGridLengthChange"),
                    s.watchSlidesProgress && t.updateSlidesOffset(),
                    t.emit("slidesUpdated"),
                    !d && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        let e = `${s.containerModifierClass}backface-hidden`
                          , i = t.el.classList.contains(e);
                        p <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                    }
                },
                updateAutoHeight: function(e) {
                    let t;
                    let i = this
                      , s = []
                      , n = i.virtual && i.params.virtual.enabled
                      , a = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let r = e=>n ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides)
                            (i.visibleSlides || []).forEach(e=>{
                                s.push(e)
                            }
                            );
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let e = i.activeIndex + t;
                                if (e > i.slides.length && !n)
                                    break;
                                s.push(r(e))
                            }
                    } else
                        s.push(r(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let e = s[t].offsetHeight;
                            a = e > a ? e : a
                        }
                    (a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                },
                updateSlidesOffset: function() {
                    let e = this.slides
                      , t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < e.length; i += 1)
                        e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    let t = this.params
                      , {slides: i, rtlTranslate: s, snapGrid: n} = this;
                    if (0 === i.length)
                        return;
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    let a = -e;
                    s && (a = e),
                    this.visibleSlidesIndexes = [],
                    this.visibleSlides = [];
                    let r = t.spaceBetween;
                    "string" == typeof r && r.indexOf("%") >= 0 ? r = parseFloat(r.replace("%", "")) / 100 * this.size : "string" == typeof r && (r = parseFloat(r));
                    for (let e = 0; e < i.length; e += 1) {
                        let o = i[e]
                          , l = o.swiperSlideOffset;
                        t.cssMode && t.centeredSlides && (l -= i[0].swiperSlideOffset);
                        let c = (a + (t.centeredSlides ? this.minTranslate() : 0) - l) / (o.swiperSlideSize + r)
                          , d = (a - n[0] + (t.centeredSlides ? this.minTranslate() : 0) - l) / (o.swiperSlideSize + r)
                          , h = -(a - l)
                          , p = h + this.slidesSizesGrid[e]
                          , f = h >= 0 && h <= this.size - this.slidesSizesGrid[e]
                          , m = h >= 0 && h < this.size - 1 || p > 1 && p <= this.size || h <= 0 && p >= this.size;
                        m && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(e)),
                        u(o, m, t.slideVisibleClass),
                        u(o, f, t.slideFullyVisibleClass),
                        o.progress = s ? -c : c,
                        o.originalProgress = s ? -d : d
                    }
                },
                updateProgress: function(e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let t = this.params
                      , i = this.maxTranslate() - this.minTranslate()
                      , {progress: s, isBeginning: n, isEnd: a, progressLoop: r} = this
                      , o = n
                      , l = a;
                    if (0 === i)
                        s = 0,
                        n = !0,
                        a = !0;
                    else {
                        s = (e - this.minTranslate()) / i;
                        let t = 1 > Math.abs(e - this.minTranslate())
                          , r = 1 > Math.abs(e - this.maxTranslate());
                        n = t || s <= 0,
                        a = r || s >= 1,
                        t && (s = 0),
                        r && (s = 1)
                    }
                    if (t.loop) {
                        let t = this.getSlideIndexByData(0)
                          , i = this.getSlideIndexByData(this.slides.length - 1)
                          , s = this.slidesGrid[t]
                          , n = this.slidesGrid[i]
                          , a = this.slidesGrid[this.slidesGrid.length - 1]
                          , o = Math.abs(e);
                        (r = o >= s ? (o - s) / a : (o + a - n) / a) > 1 && (r -= 1)
                    }
                    Object.assign(this, {
                        progress: s,
                        progressLoop: r,
                        isBeginning: n,
                        isEnd: a
                    }),
                    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e),
                    n && !o && this.emit("reachBeginning toEdge"),
                    a && !l && this.emit("reachEnd toEdge"),
                    (o && !n || l && !a) && this.emit("fromEdge"),
                    this.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    let e, t, i;
                    let {slides: s, params: n, slidesEl: a, activeIndex: r} = this
                      , o = this.virtual && n.virtual.enabled
                      , c = this.grid && n.grid && n.grid.rows > 1
                      , d = e=>(0,
                    l.e)(a, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
                    if (o) {
                        if (n.loop) {
                            let t = r - this.virtual.slidesBefore;
                            t < 0 && (t = this.virtual.slides.length + t),
                            t >= this.virtual.slides.length && (t -= this.virtual.slides.length),
                            e = d(`[data-swiper-slide-index="${t}"]`)
                        } else
                            e = d(`[data-swiper-slide-index="${r}"]`)
                    } else
                        c ? (e = s.filter(e=>e.column === r)[0],
                        i = s.filter(e=>e.column === r + 1)[0],
                        t = s.filter(e=>e.column === r - 1)[0]) : e = s[r];
                    e && !c && (i = (0,
                    l.p)(e, `.${n.slideClass}, swiper-slide`)[0],
                    n.loop && !i && (i = s[0]),
                    t = (0,
                    l.q)(e, `.${n.slideClass}, swiper-slide`)[0],
                    n.loop),
                    s.forEach(s=>{
                        h(s, s === e, n.slideActiveClass),
                        h(s, s === i, n.slideNextClass),
                        h(s, s === t, n.slidePrevClass)
                    }
                    ),
                    this.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    let t, i;
                    let s = this
                      , n = s.rtlTranslate ? s.translate : -s.translate
                      , {snapGrid: a, params: r, activeIndex: o, realIndex: l, snapIndex: c} = s
                      , d = e
                      , u = e=>{
                        let t = e - s.virtual.slidesBefore;
                        return t < 0 && (t = s.virtual.slides.length + t),
                        t >= s.virtual.slides.length && (t -= s.virtual.slides.length),
                        t
                    }
                    ;
                    if (void 0 === d && (d = function(e) {
                        let t;
                        let {slidesGrid: i, params: s} = e
                          , n = e.rtlTranslate ? e.translate : -e.translate;
                        for (let e = 0; e < i.length; e += 1)
                            void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : n >= i[e] && n < i[e + 1] && (t = e + 1) : n >= i[e] && (t = e);
                        return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0),
                        t
                    }(s)),
                    a.indexOf(n) >= 0)
                        t = a.indexOf(n);
                    else {
                        let e = Math.min(r.slidesPerGroupSkip, d);
                        t = e + Math.floor((d - e) / r.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1),
                    d === o && !s.params.loop) {
                        t !== c && (s.snapIndex = t,
                        s.emit("snapIndexChange"));
                        return
                    }
                    if (d === o && s.params.loop && s.virtual && s.params.virtual.enabled) {
                        s.realIndex = u(d);
                        return
                    }
                    let h = s.grid && r.grid && r.grid.rows > 1;
                    if (s.virtual && r.virtual.enabled && r.loop)
                        i = u(d);
                    else if (h) {
                        let e = s.slides.filter(e=>e.column === d)[0]
                          , t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                        i = Math.floor(t / r.grid.rows)
                    } else if (s.slides[d]) {
                        let e = s.slides[d].getAttribute("data-swiper-slide-index");
                        i = e ? parseInt(e, 10) : d
                    } else
                        i = d;
                    Object.assign(s, {
                        previousSnapIndex: c,
                        snapIndex: t,
                        previousRealIndex: l,
                        realIndex: i,
                        previousIndex: o,
                        activeIndex: d
                    }),
                    s.initialized && m(s),
                    s.emit("activeIndexChange"),
                    s.emit("snapIndexChange"),
                    (s.initialized || s.params.runCallbacksOnInit) && (l !== i && s.emit("realIndexChange"),
                    s.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    let i;
                    let s = this.params
                      , n = e.closest(`.${s.slideClass}, swiper-slide`);
                    !n && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e=>{
                        !n && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (n = e)
                    }
                    );
                    let a = !1;
                    if (n) {
                        for (let e = 0; e < this.slides.length; e += 1)
                            if (this.slides[e] === n) {
                                a = !0,
                                i = e;
                                break
                            }
                    }
                    if (n && a)
                        this.clickedSlide = n,
                        this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                    else {
                        this.clickedSlide = void 0,
                        this.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    let {params: t, rtlTranslate: i, translate: s, wrapperEl: n} = this;
                    if (t.virtualTranslate)
                        return i ? -s : s;
                    if (t.cssMode)
                        return s;
                    let a = (0,
                    l.j)(n, e);
                    return a += this.cssOverflowAdjustment(),
                    i && (a = -a),
                    a || 0
                },
                setTranslate: function(e, t) {
                    let {rtlTranslate: i, params: s, wrapperEl: n, progress: a} = this
                      , r = 0
                      , o = 0;
                    this.isHorizontal() ? r = i ? -e : e : o = e,
                    s.roundLengths && (r = Math.floor(r),
                    o = Math.floor(o)),
                    this.previousTranslate = this.translate,
                    this.translate = this.isHorizontal() ? r : o,
                    s.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -r : -o : s.virtualTranslate || (this.isHorizontal() ? r -= this.cssOverflowAdjustment() : o -= this.cssOverflowAdjustment(),
                    n.style.transform = `translate3d(${r}px, ${o}px, 0px)`);
                    let l = this.maxTranslate() - this.minTranslate();
                    (0 === l ? 0 : (e - this.minTranslate()) / l) !== a && this.updateProgress(e),
                    this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, i, s, n) {
                    let a;
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === i && (i = !0),
                    void 0 === s && (s = !0);
                    let r = this
                      , {params: o, wrapperEl: c} = r;
                    if (r.animating && o.preventInteractionOnTransition)
                        return !1;
                    let d = r.minTranslate()
                      , u = r.maxTranslate();
                    if (a = s && e > d ? d : s && e < u ? u : e,
                    r.updateProgress(a),
                    o.cssMode) {
                        let e = r.isHorizontal();
                        if (0 === t)
                            c[e ? "scrollLeft" : "scrollTop"] = -a;
                        else {
                            if (!r.support.smoothScroll)
                                return (0,
                                l.r)({
                                    swiper: r,
                                    targetPosition: -a,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            c.scrollTo({
                                [e ? "left" : "top"]: -a,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0),
                    r.setTranslate(a),
                    i && (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionEnd"))) : (r.setTransition(t),
                    r.setTranslate(a),
                    i && (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionStart")),
                    r.animating || (r.animating = !0,
                    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                        r.onTranslateToWrapperTransitionEnd = null,
                        delete r.onTranslateToWrapperTransitionEnd,
                        r.animating = !1,
                        i && r.emit("transitionEnd"))
                    }
                    ),
                    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`,
                    this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                    this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                    g({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    this.animating = !1,
                    i.cssMode || (this.setTransition(0),
                    g({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e, t, i, s, n) {
                    let a;
                    void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e && (e = parseInt(e, 10));
                    let r = this
                      , o = e;
                    o < 0 && (o = 0);
                    let {params: c, snapGrid: d, slidesGrid: u, previousIndex: h, activeIndex: p, rtlTranslate: f, wrapperEl: m, enabled: g} = r;
                    if (!g && !s && !n || r.destroyed || r.animating && c.preventInteractionOnTransition)
                        return !1;
                    void 0 === t && (t = r.params.speed);
                    let v = Math.min(r.params.slidesPerGroupSkip, o)
                      , y = v + Math.floor((o - v) / r.params.slidesPerGroup);
                    y >= d.length && (y = d.length - 1);
                    let b = -d[y];
                    if (c.normalizeSlideIndex)
                        for (let e = 0; e < u.length; e += 1) {
                            let t = -Math.floor(100 * b)
                              , i = Math.floor(100 * u[e])
                              , s = Math.floor(100 * u[e + 1]);
                            void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? o = e : t >= i && t < s && (o = e + 1) : t >= i && (o = e)
                        }
                    if (r.initialized && o !== p && (!r.allowSlideNext && (f ? b > r.translate && b > r.minTranslate() : b < r.translate && b < r.minTranslate()) || !r.allowSlidePrev && b > r.translate && b > r.maxTranslate() && (p || 0) !== o))
                        return !1;
                    if (o !== (h || 0) && i && r.emit("beforeSlideChangeStart"),
                    r.updateProgress(b),
                    a = o > p ? "next" : o < p ? "prev" : "reset",
                    f && -b === r.translate || !f && b === r.translate)
                        return r.updateActiveIndex(o),
                        c.autoHeight && r.updateAutoHeight(),
                        r.updateSlidesClasses(),
                        "slide" !== c.effect && r.setTranslate(b),
                        "reset" !== a && (r.transitionStart(i, a),
                        r.transitionEnd(i, a)),
                        !1;
                    if (c.cssMode) {
                        let e = r.isHorizontal()
                          , i = f ? b : -b;
                        if (0 === t) {
                            let t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none",
                            r._immediateVirtual = !0),
                            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
                            requestAnimationFrame(()=>{
                                m[e ? "scrollLeft" : "scrollTop"] = i
                            }
                            )) : m[e ? "scrollLeft" : "scrollTop"] = i,
                            t && requestAnimationFrame(()=>{
                                r.wrapperEl.style.scrollSnapType = "",
                                r._immediateVirtual = !1
                            }
                            )
                        } else {
                            if (!r.support.smoothScroll)
                                return (0,
                                l.r)({
                                    swiper: r,
                                    targetPosition: i,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            m.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return r.setTransition(t),
                    r.setTranslate(b),
                    r.updateActiveIndex(o),
                    r.updateSlidesClasses(),
                    r.emit("beforeTransitionStart", t, s),
                    r.transitionStart(i, a),
                    0 === t ? r.transitionEnd(i, a) : r.animating || (r.animating = !0,
                    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                        r.onSlideToWrapperTransitionEnd = null,
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(i, a))
                    }
                    ),
                    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
                    !0
                },
                slideToLoop: function(e, t, i, s) {
                    void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e && (e = parseInt(e, 10));
                    let n = this;
                    if (n.destroyed)
                        return;
                    void 0 === t && (t = n.params.speed);
                    let a = n.grid && n.params.grid && n.params.grid.rows > 1
                      , r = e;
                    if (n.params.loop) {
                        if (n.virtual && n.params.virtual.enabled)
                            r += n.virtual.slidesBefore;
                        else {
                            let e;
                            if (a) {
                                let t = r * n.params.grid.rows;
                                e = n.slides.filter(e=>1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                            } else
                                e = n.getSlideIndexByData(r);
                            let t = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length
                              , {centeredSlides: i} = n.params
                              , o = n.params.slidesPerView;
                            "auto" === o ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(n.params.slidesPerView, 10)),
                            i && o % 2 == 0 && (o += 1));
                            let l = t - e < o;
                            if (i && (l = l || e < Math.ceil(o / 2)),
                            s && i && "auto" !== n.params.slidesPerView && !a && (l = !1),
                            l) {
                                let s = i ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                                n.loopFix({
                                    direction: s,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === s ? n.realIndex : void 0
                                })
                            }
                            if (a) {
                                let e = r * n.params.grid.rows;
                                r = n.slides.filter(t=>1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                            } else
                                r = n.getSlideIndexByData(r)
                        }
                    }
                    return requestAnimationFrame(()=>{
                        n.slideTo(r, t, i, s)
                    }
                    ),
                    n
                },
                slideNext: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {enabled: n, params: a, animating: r} = s;
                    if (!n || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o
                      , c = s.virtual && a.virtual.enabled;
                    if (a.loop) {
                        if (r && !c && a.loopPreventsSliding)
                            return !1;
                        if (s.loopFix({
                            direction: "next"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft,
                        s.activeIndex === s.slides.length - 1 && a.cssMode)
                            return requestAnimationFrame(()=>{
                                s.slideTo(s.activeIndex + l, e, t, i)
                            }
                            ),
                            !0
                    }
                    return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {params: n, snapGrid: a, slidesGrid: r, rtlTranslate: o, enabled: l, animating: c} = s;
                    if (!l || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let d = s.virtual && n.virtual.enabled;
                    if (n.loop) {
                        if (c && !d && n.loopPreventsSliding)
                            return !1;
                        s.loopFix({
                            direction: "prev"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft
                    }
                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let h = u(o ? s.translate : -s.translate)
                      , p = a.map(e=>u(e))
                      , f = a[p.indexOf(h) - 1];
                    if (void 0 === f && n.cssMode) {
                        let e;
                        a.forEach((t,i)=>{
                            h >= t && (e = i)
                        }
                        ),
                        void 0 !== e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    if (void 0 !== f && ((m = r.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = Math.max(m = m - s.slidesPerViewDynamic("previous", !0) + 1, 0))),
                    n.rewind && s.isBeginning) {
                        let n = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(n, e, t, i)
                    }
                    return n.loop && 0 === s.activeIndex && n.cssMode ? (requestAnimationFrame(()=>{
                        s.slideTo(m, e, t, i)
                    }
                    ),
                    !0) : s.slideTo(m, e, t, i)
                },
                slideReset: function(e, t, i) {
                    if (void 0 === t && (t = !0),
                    !this.destroyed)
                        return void 0 === e && (e = this.params.speed),
                        this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t, i, s) {
                    if (void 0 === t && (t = !0),
                    void 0 === s && (s = .5),
                    this.destroyed)
                        return;
                    void 0 === e && (e = this.params.speed);
                    let n = this.activeIndex
                      , a = Math.min(this.params.slidesPerGroupSkip, n)
                      , r = a + Math.floor((n - a) / this.params.slidesPerGroup)
                      , o = this.rtlTranslate ? this.translate : -this.translate;
                    if (o >= this.snapGrid[r]) {
                        let e = this.snapGrid[r];
                        o - e > (this.snapGrid[r + 1] - e) * s && (n += this.params.slidesPerGroup)
                    } else {
                        let e = this.snapGrid[r - 1];
                        o - e <= (this.snapGrid[r] - e) * s && (n -= this.params.slidesPerGroup)
                    }
                    return n = Math.min(n = Math.max(n, 0), this.slidesGrid.length - 1),
                    this.slideTo(n, e, t, i)
                },
                slideToClickedSlide: function() {
                    let e;
                    let t = this;
                    if (t.destroyed)
                        return;
                    let {params: i, slidesEl: s} = t
                      , n = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView
                      , a = t.clickedIndex
                      , r = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                    if (i.loop) {
                        if (t.animating)
                            return;
                        e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                        i.centeredSlides ? a < t.loopedSlides - n / 2 || a > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(),
                        a = t.getSlideIndex((0,
                        l.e)(s, `${r}[data-swiper-slide-index="${e}"]`)[0]),
                        (0,
                        l.n)(()=>{
                            t.slideTo(a)
                        }
                        )) : t.slideTo(a) : a > t.slides.length - n ? (t.loopFix(),
                        a = t.getSlideIndex((0,
                        l.e)(s, `${r}[data-swiper-slide-index="${e}"]`)[0]),
                        (0,
                        l.n)(()=>{
                            t.slideTo(a)
                        }
                        )) : t.slideTo(a)
                    } else
                        t.slideTo(a)
                }
            },
            loop: {
                loopCreate: function(e) {
                    let t = this
                      , {params: i, slidesEl: s} = t;
                    if (!i.loop || t.virtual && t.params.virtual.enabled)
                        return;
                    let n = t.grid && i.grid && i.grid.rows > 1
                      , a = i.slidesPerGroup * (n ? i.grid.rows : 1)
                      , r = t.slides.length % a != 0
                      , o = n && t.slides.length % i.grid.rows != 0
                      , c = e=>{
                        for (let s = 0; s < e; s += 1) {
                            let e = t.isElement ? (0,
                            l.c)("swiper-slide", [i.slideBlankClass]) : (0,
                            l.c)("div", [i.slideClass, i.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    }
                    ;
                    r ? i.loopAddBlankSlides ? (c(a - t.slides.length % a),
                    t.recalcSlides(),
                    t.updateSlides()) : (0,
                    l.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : o && (i.loopAddBlankSlides ? (c(i.grid.rows - t.slides.length % i.grid.rows),
                    t.recalcSlides(),
                    t.updateSlides()) : (0,
                    l.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")),
                    (0,
                    l.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e,t)=>{
                        e.setAttribute("data-swiper-slide-index", t)
                    }
                    ),
                    t.loopFix({
                        slideRealIndex: e,
                        direction: i.centeredSlides ? void 0 : "next"
                    })
                },
                loopFix: function(e) {
                    let {slideRealIndex: t, slideTo: i=!0, direction: s, setTranslate: n, activeSlideIndex: a, byController: r, byMousewheel: o} = void 0 === e ? {} : e
                      , c = this;
                    if (!c.params.loop)
                        return;
                    c.emit("beforeLoopFix");
                    let {slides: d, allowSlidePrev: u, allowSlideNext: h, slidesEl: p, params: f} = c
                      , {centeredSlides: m} = f;
                    if (c.allowSlidePrev = !0,
                    c.allowSlideNext = !0,
                    c.virtual && f.virtual.enabled) {
                        i && (f.centeredSlides || 0 !== c.snapIndex ? f.centeredSlides && c.snapIndex < f.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
                        c.allowSlidePrev = u,
                        c.allowSlideNext = h,
                        c.emit("loopFix");
                        return
                    }
                    let g = f.slidesPerView;
                    "auto" === g ? g = c.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)),
                    m && g % 2 == 0 && (g += 1));
                    let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup
                      , y = v;
                    y % v != 0 && (y += v - y % v),
                    y += f.loopAdditionalSlides,
                    c.loopedSlides = y;
                    let b = c.grid && f.grid && f.grid.rows > 1;
                    d.length < g + y ? (0,
                    l.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0,
                    l.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    let w = []
                      , x = []
                      , _ = c.activeIndex;
                    void 0 === a ? a = c.getSlideIndex(d.filter(e=>e.classList.contains(f.slideActiveClass))[0]) : _ = a;
                    let S = "next" === s || !s
                      , C = "prev" === s || !s
                      , T = 0
                      , M = 0
                      , E = b ? Math.ceil(d.length / f.grid.rows) : d.length
                      , k = (b ? d[a].column : a) + (m && void 0 === n ? -g / 2 + .5 : 0);
                    if (k < y) {
                        T = Math.max(y - k, v);
                        for (let e = 0; e < y - k; e += 1) {
                            let t = e - Math.floor(e / E) * E;
                            if (b) {
                                let e = E - t - 1;
                                for (let t = d.length - 1; t >= 0; t -= 1)
                                    d[t].column === e && w.push(t)
                            } else
                                w.push(E - t - 1)
                        }
                    } else if (k + g > E - y) {
                        M = Math.max(k - (E - 2 * y), v);
                        for (let e = 0; e < M; e += 1) {
                            let t = e - Math.floor(e / E) * E;
                            b ? d.forEach((e,i)=>{
                                e.column === t && x.push(i)
                            }
                            ) : x.push(t)
                        }
                    }
                    if (c.__preventObserver__ = !0,
                    requestAnimationFrame(()=>{
                        c.__preventObserver__ = !1
                    }
                    ),
                    C && w.forEach(e=>{
                        d[e].swiperLoopMoveDOM = !0,
                        p.prepend(d[e]),
                        d[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    S && x.forEach(e=>{
                        d[e].swiperLoopMoveDOM = !0,
                        p.append(d[e]),
                        d[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    c.recalcSlides(),
                    "auto" === f.slidesPerView ? c.updateSlides() : b && (w.length > 0 && C || x.length > 0 && S) && c.slides.forEach((e,t)=>{
                        c.grid.updateSlide(t, e, c.slides)
                    }
                    ),
                    f.watchSlidesProgress && c.updateSlidesOffset(),
                    i) {
                        if (w.length > 0 && C) {
                            if (void 0 === t) {
                                let e = c.slidesGrid[_]
                                  , t = c.slidesGrid[_ + T] - e;
                                o ? c.setTranslate(c.translate - t) : (c.slideTo(_ + Math.ceil(T), 0, !1, !0),
                                n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t,
                                c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                            } else if (n) {
                                let e = b ? w.length / f.grid.rows : w.length;
                                c.slideTo(c.activeIndex + e, 0, !1, !0),
                                c.touchEventsData.currentTranslate = c.translate
                            }
                        } else if (x.length > 0 && S) {
                            if (void 0 === t) {
                                let e = c.slidesGrid[_]
                                  , t = c.slidesGrid[_ - M] - e;
                                o ? c.setTranslate(c.translate - t) : (c.slideTo(_ - M, 0, !1, !0),
                                n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t,
                                c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                            } else {
                                let e = b ? x.length / f.grid.rows : x.length;
                                c.slideTo(c.activeIndex - e, 0, !1, !0)
                            }
                        }
                    }
                    if (c.allowSlidePrev = u,
                    c.allowSlideNext = h,
                    c.controller && c.controller.control && !r) {
                        let e = {
                            slideRealIndex: t,
                            direction: s,
                            setTranslate: n,
                            activeSlideIndex: a,
                            byController: !0
                        };
                        Array.isArray(c.controller.control) ? c.controller.control.forEach(t=>{
                            !t.destroyed && t.params.loop && t.loopFix({
                                ...e,
                                slideTo: t.params.slidesPerView === f.slidesPerView && i
                            })
                        }
                        ) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                            ...e,
                            slideTo: c.controller.control.params.slidesPerView === f.slidesPerView && i
                        })
                    }
                    c.emit("loopFix")
                },
                loopDestroy: function() {
                    let {params: e, slidesEl: t} = this;
                    if (!e.loop || this.virtual && this.params.virtual.enabled)
                        return;
                    this.recalcSlides();
                    let i = [];
                    this.slides.forEach(e=>{
                        i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                    }
                    ),
                    this.slides.forEach(e=>{
                        e.removeAttribute("data-swiper-slide-index")
                    }
                    ),
                    i.forEach(e=>{
                        t.append(e)
                    }
                    ),
                    this.recalcSlides(),
                    this.slideTo(this.realIndex, 0)
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    let t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                    i.style.cursor = "move",
                    i.style.cursor = e ? "grabbing" : "grab",
                    t.isElement && requestAnimationFrame(()=>{
                        t.__preventObserver__ = !1
                    }
                    )
                },
                unsetGrabCursor: function() {
                    let e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                    e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                    e.isElement && requestAnimationFrame(()=>{
                        e.__preventObserver__ = !1
                    }
                    ))
                }
            },
            events: {
                attachEvents: function() {
                    let {params: e} = this;
                    this.onTouchStart = y.bind(this),
                    this.onTouchMove = b.bind(this),
                    this.onTouchEnd = w.bind(this),
                    this.onDocumentTouchStart = T.bind(this),
                    e.cssMode && (this.onScroll = S.bind(this)),
                    this.onClick = _.bind(this),
                    this.onLoad = C.bind(this),
                    M(this, "on")
                },
                detachEvents: function() {
                    M(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let e = this
                      , {realIndex: t, initialized: i, params: s, el: n} = e
                      , a = s.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length)
                        return;
                    let r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!r || e.currentBreakpoint === r)
                        return;
                    let o = (r in a ? a[r] : void 0) || e.originalParams
                      , c = E(e, s)
                      , d = E(e, o)
                      , u = e.params.grabCursor
                      , h = o.grabCursor
                      , p = s.enabled;
                    c && !d ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
                    e.emitContainerClasses()) : !c && d && (n.classList.add(`${s.containerModifierClass}grid`),
                    (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && n.classList.add(`${s.containerModifierClass}grid-column`),
                    e.emitContainerClasses()),
                    u && !h ? e.unsetGrabCursor() : !u && h && e.setGrabCursor(),
                    ["navigation", "pagination", "scrollbar"].forEach(t=>{
                        if (void 0 === o[t])
                            return;
                        let i = s[t] && s[t].enabled
                          , n = o[t] && o[t].enabled;
                        i && !n && e[t].disable(),
                        !i && n && e[t].enable()
                    }
                    );
                    let f = o.direction && o.direction !== s.direction
                      , m = s.loop && (o.slidesPerView !== s.slidesPerView || f)
                      , g = s.loop;
                    f && i && e.changeDirection(),
                    (0,
                    l.u)(e.params, o);
                    let v = e.params.enabled
                      , y = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    p && !v ? e.disable() : !p && v && e.enable(),
                    e.currentBreakpoint = r,
                    e.emit("_beforeBreakpoint", o),
                    i && (m ? (e.loopDestroy(),
                    e.loopCreate(t),
                    e.updateSlides()) : !g && y ? (e.loopCreate(t),
                    e.updateSlides()) : g && !y && e.loopDestroy()),
                    e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, i) {
                    if (void 0 === t && (t = "window"),
                    !e || "container" === t && !i)
                        return;
                    let s = !1
                      , n = (0,
                    o.a)()
                      , a = "window" === t ? n.innerHeight : i.clientHeight
                      , r = Object.keys(e).map(e=>"string" == typeof e && 0 === e.indexOf("@") ? {
                        value: a * parseFloat(e.substr(1)),
                        point: e
                    } : {
                        value: e,
                        point: e
                    });
                    r.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < r.length; e += 1) {
                        let {point: a, value: o} = r[e];
                        "window" === t ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = a) : o <= i.clientWidth && (s = a)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let {isLocked: e, params: t} = this
                      , {slidesOffsetBefore: i} = t;
                    if (i) {
                        let e = this.slides.length - 1
                          , t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                        this.isLocked = this.size > t
                    } else
                        this.isLocked = 1 === this.snapGrid.length;
                    !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                    !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked),
                    e && e !== this.isLocked && (this.isEnd = !1),
                    e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    let {classNames: e, params: t, rtl: i, el: s, device: n} = this
                      , a = function(e, t) {
                        let i = [];
                        return e.forEach(e=>{
                            "object" == typeof e ? Object.keys(e).forEach(s=>{
                                e[s] && i.push(t + s)
                            }
                            ) : "string" == typeof e && i.push(t + e)
                        }
                        ),
                        i
                    }(["initialized", t.direction, {
                        "free-mode": this.params.freeMode && t.freeMode.enabled
                    }, {
                        autoheight: t.autoHeight
                    }, {
                        rtl: i
                    }, {
                        grid: t.grid && t.grid.rows > 1
                    }, {
                        "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                    }, {
                        android: n.android
                    }, {
                        ios: n.ios
                    }, {
                        "css-mode": t.cssMode
                    }, {
                        centered: t.cssMode && t.centeredSlides
                    }, {
                        "watch-progress": t.watchSlidesProgress
                    }], t.containerModifierClass);
                    e.push(...a),
                    s.classList.add(...e),
                    this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {el: e, classNames: t} = this;
                    e.classList.remove(...t),
                    this.emitContainerClasses()
                }
            }
        }
          , z = {};
        class O {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = Array(i), n = 0; n < i; n++)
                    s[n] = arguments[n];
                1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e,t] = s,
                t || (t = {}),
                t = (0,
                l.u)({}, t),
                e && !t.el && (t.el = e);
                let r = (0,
                o.g)();
                if (t.el && "string" == typeof t.el && r.querySelectorAll(t.el).length > 1) {
                    let e = [];
                    return r.querySelectorAll(t.el).forEach(i=>{
                        let s = (0,
                        l.u)({}, t, {
                            el: i
                        });
                        e.push(new O(s))
                    }
                    ),
                    e
                }
                let u = this;
                u.__swiper__ = !0,
                u.support = c(),
                u.device = d({
                    userAgent: t.userAgent
                }),
                u.browser = (a || (a = function() {
                    let e = (0,
                    o.a)()
                      , t = d()
                      , i = !1;
                    function s() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }
                    if (s()) {
                        let t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            let[e,s] = t.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));
                            i = e < 16 || 16 === e && s < 2
                        }
                    }
                    let n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                      , a = s()
                      , r = a || n && t.ios;
                    return {
                        isSafari: i || a,
                        needPerspectiveFix: i,
                        need3dFix: r,
                        isWebView: n
                    }
                }()),
                a),
                u.eventsListeners = {},
                u.eventsAnyListeners = [],
                u.modules = [...u.__modules__],
                t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                let h = {};
                u.modules.forEach(e=>{
                    var i;
                    e({
                        params: t,
                        swiper: u,
                        extendParams: (i = t,
                        function(e) {
                            void 0 === e && (e = {});
                            let t = Object.keys(e)[0]
                              , s = e[t];
                            if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                enabled: !0
                            }),
                            "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0),
                            ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0),
                            !(t in i && "enabled"in s))) {
                                (0,
                                l.u)(h, e);
                                return
                            }
                            "object" != typeof i[t] || "enabled"in i[t] || (i[t].enabled = !0),
                            i[t] || (i[t] = {
                                enabled: !1
                            }),
                            (0,
                            l.u)(h, e)
                        }
                        ),
                        on: u.on.bind(u),
                        once: u.once.bind(u),
                        off: u.off.bind(u),
                        emit: u.emit.bind(u)
                    })
                }
                );
                let p = (0,
                l.u)({}, k, h);
                return u.params = (0,
                l.u)({}, p, z, t),
                u.originalParams = (0,
                l.u)({}, u.params),
                u.passedParams = (0,
                l.u)({}, t),
                u.params && u.params.on && Object.keys(u.params.on).forEach(e=>{
                    u.on(e, u.params.on[e])
                }
                ),
                u.params && u.params.onAny && u.onAny(u.params.onAny),
                Object.assign(u, {
                    enabled: u.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === u.params.direction,
                    isVertical: ()=>"vertical" === u.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return 8388608 * Math.trunc(this.translate / 8388608)
                    },
                    allowSlideNext: u.params.allowSlideNext,
                    allowSlidePrev: u.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: u.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: u.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                u.emit("_swiper"),
                u.params.init && u.init(),
                u
            }
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : ({
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                })[e]
            }
            getSlideIndex(e) {
                let {slidesEl: t, params: i} = this
                  , s = (0,
                l.e)(t, `.${i.slideClass}, swiper-slide`)
                  , n = (0,
                l.h)(s[0]);
                return (0,
                l.h)(e) - n
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter(t=>1 * t.getAttribute("data-swiper-slide-index") === e)[0])
            }
            recalcSlides() {
                let {slidesEl: e, params: t} = this;
                this.slides = (0,
                l.e)(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                this.enabled || (this.enabled = !0,
                this.params.grabCursor && this.setGrabCursor(),
                this.emit("enable"))
            }
            disable() {
                this.enabled && (this.enabled = !1,
                this.params.grabCursor && this.unsetGrabCursor(),
                this.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate()
                  , s = (this.maxTranslate() - i) * e + i;
                this.translateTo(s, void 0 === t ? 0 : t),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = e.el.className.split(" ").filter(t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = [];
                e.slides.forEach(i=>{
                    let s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }),
                    e.emit("_slideClass", i, s)
                }
                ),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"),
                void 0 === t && (t = !1);
                let {params: i, slides: s, slidesGrid: n, slidesSizesGrid: a, size: r, activeIndex: o} = this
                  , l = 1;
                if ("number" == typeof i.slidesPerView)
                    return i.slidesPerView;
                if (i.centeredSlides) {
                    let e, t = s[o] ? Math.ceil(s[o].swiperSlideSize) : 0;
                    for (let i = o + 1; i < s.length; i += 1)
                        s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize),
                        l += 1,
                        t > r && (e = !0));
                    for (let i = o - 1; i >= 0; i -= 1)
                        s[i] && !e && (t += s[i].swiperSlideSize,
                        l += 1,
                        t > r && (e = !0))
                } else if ("current" === e)
                    for (let e = o + 1; e < s.length; e += 1)
                        (t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1);
                else
                    for (let e = o - 1; e >= 0; e -= 1)
                        n[o] - n[e] < r && (l += 1);
                return l
            }
            update() {
                let e;
                let t = this;
                if (!t || t.destroyed)
                    return;
                let {snapGrid: i, params: s} = t;
                function n() {
                    let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(e),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (s.breakpoints && t.setBreakpoint(),
                [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e=>{
                    e.complete && p(t, e)
                }
                ),
                t.updateSize(),
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode)
                    n(),
                    s.autoHeight && t.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                        let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                        e = t.slideTo(i.length - 1, 0, !1, !0)
                    } else
                        e = t.slideTo(t.activeIndex, 0, !1, !0);
                    e || n()
                }
                s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
                t.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                let i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`),
                this.el.classList.add(`${this.params.containerModifierClass}${e}`),
                this.emitContainerClasses(),
                this.params.direction = e,
                this.slides.forEach(t=>{
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                ),
                this.emit("changeDirection"),
                t && this.update()),
                this
            }
            changeLanguageDirection(e) {
                (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e,
                this.rtlTranslate = "horizontal" === this.params.direction && this.rtl,
                this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`),
                this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`),
                this.el.dir = "ltr"),
                this.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted)
                    return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)),
                !i)
                    return !1;
                i.swiper = t,
                i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                let s = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
                  , n = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0,
                l.e)(i, s())[0];
                return !n && t.params.createElements && (n = (0,
                l.c)("div", t.params.wrapperClass),
                i.append(n),
                (0,
                l.e)(i, `.${t.params.slideClass}`).forEach(e=>{
                    n.append(e)
                }
                )),
                Object.assign(t, {
                    el: i,
                    wrapperEl: n,
                    slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : n,
                    hostEl: t.isElement ? i.parentNode.host : i,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    l.o)(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    l.o)(i, "direction")),
                    wrongRTL: "-webkit-box" === (0,
                    l.o)(n, "display")
                }),
                !0
            }
            init(e) {
                let t = this;
                if (t.initialized || !1 === t.mount(e))
                    return t;
                t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(),
                t.attachEvents();
                let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                i.forEach(e=>{
                    e.complete ? p(t, e) : e.addEventListener("load", e=>{
                        p(t, e.target)
                    }
                    )
                }
                ),
                m(t),
                t.initialized = !0,
                m(t),
                t.emit("init"),
                t.emit("afterInit"),
                t
            }
            destroy(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                let i = this
                  , {params: s, el: n, wrapperEl: a, slides: r} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t && (i.removeClasses(),
                n.removeAttribute("style"),
                a.removeAttribute("style"),
                r && r.length && r.forEach(e=>{
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index")
                }
                )),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(e=>{
                    i.off(e)
                }
                ),
                !1 !== e && (i.el.swiper = null,
                (0,
                l.v)(i)),
                i.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                (0,
                l.u)(z, e)
            }
            static get extendedDefaults() {
                return z
            }
            static get defaults() {
                return k
            }
            static installModule(e) {
                O.prototype.__modules__ || (O.prototype.__modules__ = []);
                let t = O.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? e.forEach(e=>O.installModule(e)) : O.installModule(e),
                O
            }
        }
        Object.keys(P).forEach(e=>{
            Object.keys(P[e]).forEach(t=>{
                O.prototype[t] = P[e][t]
            }
            )
        }
        ),
        O.use([function(e) {
            let {swiper: t, on: i, emit: s} = e
              , n = (0,
            o.a)()
              , a = null
              , r = null
              , l = ()=>{
                t && !t.destroyed && t.initialized && (s("beforeResize"),
                s("resize"))
            }
              , c = ()=>{
                t && !t.destroyed && t.initialized && (a = new ResizeObserver(e=>{
                    r = n.requestAnimationFrame(()=>{
                        let {width: i, height: s} = t
                          , n = i
                          , a = s;
                        e.forEach(e=>{
                            let {contentBoxSize: i, contentRect: s, target: r} = e;
                            r && r !== t.el || (n = s ? s.width : (i[0] || i).inlineSize,
                            a = s ? s.height : (i[0] || i).blockSize)
                        }
                        ),
                        (n !== i || a !== s) && l()
                    }
                    )
                }
                )).observe(t.el)
            }
              , d = ()=>{
                r && n.cancelAnimationFrame(r),
                a && a.unobserve && t.el && (a.unobserve(t.el),
                a = null)
            }
              , u = ()=>{
                t && !t.destroyed && t.initialized && s("orientationchange")
            }
            ;
            i("init", ()=>{
                if (t.params.resizeObserver && void 0 !== n.ResizeObserver) {
                    c();
                    return
                }
                n.addEventListener("resize", l),
                n.addEventListener("orientationchange", u)
            }
            ),
            i("destroy", ()=>{
                d(),
                n.removeEventListener("resize", l),
                n.removeEventListener("orientationchange", u)
            }
            )
        }
        , function(e) {
            let {swiper: t, extendParams: i, on: s, emit: n} = e
              , a = []
              , r = (0,
            o.a)()
              , c = function(e, i) {
                void 0 === i && (i = {});
                let s = new (r.MutationObserver || r.WebkitMutationObserver)(e=>{
                    if (t.__preventObserver__)
                        return;
                    if (1 === e.length) {
                        n("observerUpdate", e[0]);
                        return
                    }
                    let i = function() {
                        n("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(i) : r.setTimeout(i, 0)
                }
                );
                s.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }),
                a.push(s)
            };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            s("init", ()=>{
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        let e = (0,
                        l.a)(t.hostEl);
                        for (let t = 0; t < e.length; t += 1)
                            c(e[t])
                    }
                    c(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }),
                    c(t.wrapperEl, {
                        attributes: !1
                    })
                }
            }
            ),
            s("destroy", ()=>{
                a.forEach(e=>{
                    e.disconnect()
                }
                ),
                a.splice(0, a.length)
            }
            )
        }
        ]);
        let I = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
        function L(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
        }
        function D(e, t) {
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e=>0 > i.indexOf(e)).forEach(i=>{
                void 0 === e[i] ? e[i] = t[i] : L(t[i]) && L(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : D(e[i], t[i]) : e[i] = t[i]
            }
            )
        }
        function R(e) {
            return void 0 === e && (e = {}),
            e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        }
        function A(e) {
            return void 0 === e && (e = {}),
            e.pagination && void 0 === e.pagination.el
        }
        function B(e) {
            return void 0 === e && (e = {}),
            e.scrollbar && void 0 === e.scrollbar.el
        }
        function F(e) {
            void 0 === e && (e = "");
            let t = e.split(" ").map(e=>e.trim()).filter(e=>!!e)
              , i = [];
            return t.forEach(e=>{
                0 > i.indexOf(e) && i.push(e)
            }
            ),
            i.join(" ")
        }
        let j = e=>{
            e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }
        ;
        function $() {
            return ($ = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function G(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }
        function q(e, t) {
            return "undefined" == typeof window ? (0,
            r.useEffect)(e, t) : (0,
            r.useLayoutEffect)(e, t)
        }
        let V = (0,
        r.createContext)(null)
          , H = (0,
        r.createContext)(null)
          , W = (0,
        r.forwardRef)(function(e, t) {
            var i;
            let {className: s, tag: n="div", wrapperTag: a="div", children: o, onSwiper: l, ...c} = void 0 === e ? {} : e
              , d = !1
              , [u,h] = (0,
            r.useState)("swiper")
              , [p,f] = (0,
            r.useState)(null)
              , [m,g] = (0,
            r.useState)(!1)
              , v = (0,
            r.useRef)(!1)
              , y = (0,
            r.useRef)(null)
              , b = (0,
            r.useRef)(null)
              , w = (0,
            r.useRef)(null)
              , x = (0,
            r.useRef)(null)
              , _ = (0,
            r.useRef)(null)
              , S = (0,
            r.useRef)(null)
              , C = (0,
            r.useRef)(null)
              , T = (0,
            r.useRef)(null)
              , {params: M, passedParams: E, rest: P, events: z} = function(e, t) {
                void 0 === e && (e = {}),
                void 0 === t && (t = !0);
                let i = {
                    on: {}
                }
                  , s = {}
                  , n = {};
                D(i, k),
                i._emitClasses = !0,
                i.init = !1;
                let a = {}
                  , r = I.map(e=>e.replace(/_/, ""));
                return Object.keys(Object.assign({}, e)).forEach(o=>{
                    void 0 !== e[o] && (r.indexOf(o) >= 0 ? L(e[o]) ? (i[o] = {},
                    n[o] = {},
                    D(i[o], e[o]),
                    D(n[o], e[o])) : (i[o] = e[o],
                    n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? s[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : i.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : a[o] = e[o])
                }
                ),
                ["navigation", "pagination", "scrollbar"].forEach(e=>{
                    !0 === i[e] && (i[e] = {}),
                    !1 === i[e] && delete i[e]
                }
                ),
                {
                    params: i,
                    passedParams: n,
                    rest: a,
                    events: s
                }
            }(c)
              , {slides: V, slots: W} = function(e) {
                let t = []
                  , i = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                };
                return r.Children.toArray(e).forEach(e=>{
                    if (G(e))
                        t.push(e);
                    else if (e.props && e.props.slot && i[e.props.slot])
                        i[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        let s = function e(t) {
                            let i = [];
                            return r.Children.toArray(t).forEach(t=>{
                                G(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e=>i.push(e))
                            }
                            ),
                            i
                        }(e.props.children);
                        s.length > 0 ? s.forEach(e=>t.push(e)) : i["container-end"].push(e)
                    } else
                        i["container-end"].push(e)
                }
                ),
                {
                    slides: t,
                    slots: i
                }
            }(o)
              , N = ()=>{
                g(!m)
            }
            ;
            Object.assign(M.on, {
                _containerClasses(e, t) {
                    h(t)
                }
            });
            let Y = ()=>{
                Object.assign(M.on, z),
                d = !0;
                let e = {
                    ...M
                };
                if (delete e.wrapperClass,
                b.current = new O(e),
                b.current.virtual && b.current.params.virtual.enabled) {
                    b.current.virtual.slides = V;
                    let e = {
                        cache: !1,
                        slides: V,
                        renderExternal: f,
                        renderExternalUpdate: !1
                    };
                    D(b.current.params.virtual, e),
                    D(b.current.originalParams.virtual, e)
                }
            }
            ;
            y.current || Y(),
            b.current && b.current.on("_beforeBreakpoint", N);
            let U = ()=>{
                !d && z && b.current && Object.keys(z).forEach(e=>{
                    b.current.on(e, z[e])
                }
                )
            }
              , X = ()=>{
                z && b.current && Object.keys(z).forEach(e=>{
                    b.current.off(e, z[e])
                }
                )
            }
            ;
            return (0,
            r.useEffect)(()=>()=>{
                b.current && b.current.off("_beforeBreakpoint", N)
            }
            ),
            (0,
            r.useEffect)(()=>{
                !v.current && b.current && (b.current.emitSlidesClasses(),
                v.current = !0)
            }
            ),
            q(()=>{
                if (t && (t.current = y.current),
                y.current)
                    return b.current.destroyed && Y(),
                    function(e, t) {
                        let {el: i, nextEl: s, prevEl: n, paginationEl: a, scrollbarEl: r, swiper: o} = e;
                        R(t) && s && n && (o.params.navigation.nextEl = s,
                        o.originalParams.navigation.nextEl = s,
                        o.params.navigation.prevEl = n,
                        o.originalParams.navigation.prevEl = n),
                        A(t) && a && (o.params.pagination.el = a,
                        o.originalParams.pagination.el = a),
                        B(t) && r && (o.params.scrollbar.el = r,
                        o.originalParams.scrollbar.el = r),
                        o.init(i)
                    }({
                        el: y.current,
                        nextEl: _.current,
                        prevEl: S.current,
                        paginationEl: C.current,
                        scrollbarEl: T.current,
                        swiper: b.current
                    }, M),
                    l && !b.current.destroyed && l(b.current),
                    ()=>{
                        b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                    }
            }
            , []),
            q(()=>{
                U();
                let e = function(e, t, i, s, n) {
                    let a = [];
                    if (!t)
                        return a;
                    let r = e=>{
                        0 > a.indexOf(e) && a.push(e)
                    }
                    ;
                    if (i && s) {
                        let e = s.map(n)
                          , t = i.map(n);
                        e.join("") !== t.join("") && r("children"),
                        s.length !== i.length && r("children")
                    }
                    return I.filter(e=>"_" === e[0]).map(e=>e.replace(/_/, "")).forEach(i=>{
                        if (i in e && i in t) {
                            if (L(e[i]) && L(t[i])) {
                                let s = Object.keys(e[i])
                                  , n = Object.keys(t[i]);
                                s.length !== n.length ? r(i) : (s.forEach(s=>{
                                    e[i][s] !== t[i][s] && r(i)
                                }
                                ),
                                n.forEach(s=>{
                                    e[i][s] !== t[i][s] && r(i)
                                }
                                ))
                            } else
                                e[i] !== t[i] && r(i)
                        }
                    }
                    ),
                    a
                }(E, w.current, V, x.current, e=>e.key);
                return w.current = E,
                x.current = V,
                e.length && b.current && !b.current.destroyed && function(e) {
                    let t, i, s, n, a, r, o, l, {swiper: c, slides: d, passedParams: u, changedParams: h, nextEl: p, prevEl: f, scrollbarEl: m, paginationEl: g} = e, v = h.filter(e=>"children" !== e && "direction" !== e && "wrapperClass" !== e), {params: y, pagination: b, navigation: w, scrollbar: x, virtual: _, thumbs: S} = c;
                    h.includes("thumbs") && u.thumbs && u.thumbs.swiper && y.thumbs && !y.thumbs.swiper && (t = !0),
                    h.includes("controller") && u.controller && u.controller.control && y.controller && !y.controller.control && (i = !0),
                    h.includes("pagination") && u.pagination && (u.pagination.el || g) && (y.pagination || !1 === y.pagination) && b && !b.el && (s = !0),
                    h.includes("scrollbar") && u.scrollbar && (u.scrollbar.el || m) && (y.scrollbar || !1 === y.scrollbar) && x && !x.el && (n = !0),
                    h.includes("navigation") && u.navigation && (u.navigation.prevEl || f) && (u.navigation.nextEl || p) && (y.navigation || !1 === y.navigation) && w && !w.prevEl && !w.nextEl && (a = !0);
                    let C = e=>{
                        c[e] && (c[e].destroy(),
                        "navigation" === e ? (c.isElement && (c[e].prevEl.remove(),
                        c[e].nextEl.remove()),
                        y[e].prevEl = void 0,
                        y[e].nextEl = void 0,
                        c[e].prevEl = void 0,
                        c[e].nextEl = void 0) : (c.isElement && c[e].el.remove(),
                        y[e].el = void 0,
                        c[e].el = void 0))
                    }
                    ;
                    h.includes("loop") && c.isElement && (y.loop && !u.loop ? r = !0 : !y.loop && u.loop ? o = !0 : l = !0),
                    v.forEach(e=>{
                        if (L(y[e]) && L(u[e]))
                            Object.assign(y[e], u[e]),
                            ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled"in u[e] && !u[e].enabled && C(e);
                        else {
                            let t = u[e];
                            (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && C(e) : y[e] = u[e]
                        }
                    }
                    ),
                    v.includes("controller") && !i && c.controller && c.controller.control && y.controller && y.controller.control && (c.controller.control = y.controller.control),
                    h.includes("children") && d && _ && y.virtual.enabled ? (_.slides = d,
                    _.update(!0)) : h.includes("virtual") && _ && y.virtual.enabled && (d && (_.slides = d),
                    _.update(!0)),
                    h.includes("children") && d && y.loop && (l = !0),
                    t && S.init() && S.update(!0),
                    i && (c.controller.control = y.controller.control),
                    s && (c.isElement && (!g || "string" == typeof g) && ((g = document.createElement("div")).classList.add("swiper-pagination"),
                    g.part.add("pagination"),
                    c.el.appendChild(g)),
                    g && (y.pagination.el = g),
                    b.init(),
                    b.render(),
                    b.update()),
                    n && (c.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"),
                    m.part.add("scrollbar"),
                    c.el.appendChild(m)),
                    m && (y.scrollbar.el = m),
                    x.init(),
                    x.updateSize(),
                    x.setTranslate()),
                    a && (c.isElement && (p && "string" != typeof p || ((p = document.createElement("div")).classList.add("swiper-button-next"),
                    p.innerHTML = c.hostEl.constructor.nextButtonSvg,
                    p.part.add("button-next"),
                    c.el.appendChild(p)),
                    f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"),
                    f.innerHTML = c.hostEl.constructor.prevButtonSvg,
                    f.part.add("button-prev"),
                    c.el.appendChild(f))),
                    p && (y.navigation.nextEl = p),
                    f && (y.navigation.prevEl = f),
                    w.init(),
                    w.update()),
                    h.includes("allowSlideNext") && (c.allowSlideNext = u.allowSlideNext),
                    h.includes("allowSlidePrev") && (c.allowSlidePrev = u.allowSlidePrev),
                    h.includes("direction") && c.changeDirection(u.direction, !1),
                    (r || l) && c.loopDestroy(),
                    (o || l) && c.loopCreate(),
                    c.update()
                }({
                    swiper: b.current,
                    slides: V,
                    passedParams: E,
                    changedParams: e,
                    nextEl: _.current,
                    prevEl: S.current,
                    scrollbarEl: T.current,
                    paginationEl: C.current
                }),
                ()=>{
                    X()
                }
            }
            ),
            q(()=>{
                j(b.current)
            }
            , [p]),
            r.createElement(n, $({
                ref: y,
                className: F(`${u}${s ? ` ${s}` : ""}`)
            }, P), r.createElement(H.Provider, {
                value: b.current
            }, W["container-start"], r.createElement(a, {
                className: (void 0 === (i = M.wrapperClass) && (i = ""),
                i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
            }, W["wrapper-start"], M.virtual ? function(e, t, i) {
                if (!i)
                    return null;
                let s = e=>{
                    let i = e;
                    return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length),
                    i
                }
                  , n = e.isHorizontal() ? {
                    [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                } : {
                    top: `${i.offset}px`
                }
                  , {from: a, to: o} = i
                  , l = e.params.loop ? -t.length : 0
                  , c = e.params.loop ? 2 * t.length : t.length
                  , d = [];
                for (let e = l; e < c; e += 1)
                    e >= a && e <= o && d.push(t[s(e)]);
                return d.map((t,i)=>r.cloneElement(t, {
                    swiper: e,
                    style: n,
                    key: t.props.virtualIndex || t.key || `slide-${i}`
                }))
            }(b.current, V, p) : V.map((e,t)=>r.cloneElement(e, {
                swiper: b.current,
                swiperSlideIndex: t
            })), W["wrapper-end"]), R(M) && r.createElement(r.Fragment, null, r.createElement("div", {
                ref: S,
                className: "swiper-button-prev"
            }), r.createElement("div", {
                ref: _,
                className: "swiper-button-next"
            })), B(M) && r.createElement("div", {
                ref: T,
                className: "swiper-scrollbar"
            }), A(M) && r.createElement("div", {
                ref: C,
                className: "swiper-pagination"
            }), W["container-end"]))
        });
        W.displayName = "Swiper";
        let N = (0,
        r.forwardRef)(function(e, t) {
            let {tag: i="div", children: s, className: n="", swiper: a, zoom: o, lazy: l, virtualIndex: c, swiperSlideIndex: d, ...u} = void 0 === e ? {} : e
              , h = (0,
            r.useRef)(null)
              , [p,f] = (0,
            r.useState)("swiper-slide")
              , [m,g] = (0,
            r.useState)(!1);
            function v(e, t, i) {
                t === h.current && f(i)
            }
            q(()=>{
                if (void 0 !== d && (h.current.swiperSlideIndex = d),
                t && (t.current = h.current),
                h.current && a) {
                    if (a.destroyed) {
                        "swiper-slide" !== p && f("swiper-slide");
                        return
                    }
                    return a.on("_slideClass", v),
                    ()=>{
                        a && a.off("_slideClass", v)
                    }
                }
            }
            ),
            q(()=>{
                a && h.current && !a.destroyed && f(a.getSlideClasses(h.current))
            }
            , [a]);
            let y = {
                isActive: p.indexOf("swiper-slide-active") >= 0,
                isVisible: p.indexOf("swiper-slide-visible") >= 0,
                isPrev: p.indexOf("swiper-slide-prev") >= 0,
                isNext: p.indexOf("swiper-slide-next") >= 0
            }
              , b = ()=>"function" == typeof s ? s(y) : s;
            return r.createElement(i, $({
                ref: h,
                className: F(`${p}${n ? ` ${n}` : ""}`),
                "data-swiper-slide-index": c,
                onLoad: ()=>{
                    g(!0)
                }
            }, u), o && r.createElement(V.Provider, {
                value: y
            }, r.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof o ? o : void 0
            }, b(), l && !m && r.createElement("div", {
                className: "swiper-lazy-preloader"
            }))), !o && r.createElement(V.Provider, {
                value: y
            }, b(), l && !m && r.createElement("div", {
                className: "swiper-lazy-preloader"
            })))
        });
        N.displayName = "SwiperSlide"
    }
}]);
