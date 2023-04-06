(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5892], {
        9022: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vq: function() {
                    return B
                },
                rK: function() {
                    return E
                },
                JI: function() {
                    return N
                }
            });
            var r = n(9499),
                o = n(3958),
                i = n.n(o),
                s = n(6018),
                a = n(1419),
                c = n(7374),
                l = n(2167),
                u = n(7294),
                p = n(4125),
                d = n(2020),
                f = n(6262),
                h = n(3308),
                m = n(4728),
                _ = n(166),
                b = n.n(_),
                j = n(1664),
                v = n.n(j),
                g = n(866),
                x = n(8429),
                y = n(5893);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var k = b(),
                C = function(e) {
                    var t = e.user,
                        n = e.logout,
                        r = e.onManageSubscription,
                        o = e.theme,
                        i = e.popup,
                        s = t.plan,
                        a = t.paidWithCrypto,
                        l = t.lifetimePro,
                        d = t.isReferral,
                        f = s === g.mr.free;
                  console.log(t);
                  console.log(e);
                  
                  console.log(g);
                  
                    return (0, u.useEffect)((function() {
                        (0, p.j)("profileMenu/opened")
                    }), []), (0, y.jsxs)("div", {
                        className: k.wrap,
                        children: [(0, y.jsxs)("div", w(w({}, (0, c.Sh)(k.header, f ? k.free : k.pro)), {}, {
                            children: [(0, y.jsx)("b", {
                                children: t.name
                            }), (0, y.jsx)("div", {
                                className: k.sub,
                                children: t.email
                            })]
                        })), f ? (0, y.jsx)(v(), {
                            href: "/upgrade",
                            children: (0, y.jsx)("a", w(w({}, (0, c.Sh)(k.item, k.upgrade)), {}, {
                                children: "Upgrade to Pro"
                            }))
                        }) : l ? (0, y.jsx)("div", w(w({}, (0, c.Sh)(k.item)), {}, {
                            onClick: function() {
                                return i.set("lifetime")
                            },
                            children: "Your subscription"
                        })) : a ? (0, y.jsx)("div", w(w({}, (0, c.Sh)(k.item)), {}, {
                            onClick: function() {
                                return i.set("paid-with-crypto")
                            },
                            children: "My subscription"
                        })) : (0, y.jsx)("div", w(w({
                            onClick: r
                        }, (0, c.Sh)(k.item)), {}, {
                            children: "Manage subscription"
                        })), d ? (0, y.jsx)(v(), {
                            href: "/my-refs",
                            children: (0, y.jsx)("a", w(w({}, (0, c.Sh)(k.item, k.upgrade)), {}, {
                                children: "My Refs Stats"
                            }))
                        }) : null, (0, y.jsxs)("div", w(w({}, (0, c.Sh)(k.item, k.theme)), {}, {
                            children: ["Theme", " ", (0, y.jsx)(x.Y, {
                                theme: o,
                                className: k.themeSelector,
                                isProUser: !f
                            })]
                        })), (0, y.jsx)(v(), {
                            href: "/zen",
                            children: (0, y.jsx)("a", w(w({}, (0, c.Sh)(k.item, k.zen)), {}, {
                                children: "Bitcoin Zen"
                            }))
                        }), (0, y.jsx)(v(), {
                            href: "/changelog",
                            children: (0, y.jsx)("a", w(w({}, (0, c.Sh)(k.item)), {}, {
                                children: "What\u02bcs new"
                            }))
                        }), (0, y.jsx)("div", w(w({}, (0, c.Sh)(k.item)), {}, {
                            onClick: function() {
                                return i.set("contact")
                            },
                            children: "Support"
                        })), (0, y.jsx)("div", {
                            className: k.item,
                            onClick: n,
                            children: (0, y.jsx)("span", {
                                className: k.logout,
                                children: "Logout"
                            })
                        })]
                    })
                };

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = i(),
                E = function(e) {
                    var t = e.user,
                        n = s.h.create(!1);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)("div", {
                            children: (0, y.jsx)(a.F.span, P(P({}, (0, c.Sh)(M.menuItem)), {}, {
                                onClick: function() {
                                    n.modify((function(e) {
                                        return !e
                                    }))
                                },
                                style: {
                                    pointerEvents: n.view((function(e) {
                                        return e ? "none" : "initial"
                                    }))
                                },
                                children: "Feedback"
                            }))
                        }), (0, y.jsx)(a.F.Fragment, {
                            children: n.view((function(e) {
                                return e ? (0, y.jsx)(f.J, {
                                    modalClassName: M.feedbackModal,
                                    alignment: "bottom right",
                                    isPopoverShown: n,
                                    position: {
                                        top: 24,
                                        left: -63
                                    },
                                    children: (0, y.jsx)(m.q, {
                                        user: t
                                    })
                                }) : null
                            }))
                        })]
                    })
                },
                N = function(e) {
                    var t = e.user,
                        n = e.size,
                        r = e.logout,
                        o = e.theme,
                        i = e.api,
                        l = s.h.create(null),
                        u = function() {
                            (0, p.j)("profileMenu/manageSubscriptionClicked"), i.redirectToBillingPortal()
                        },
                        d = s.h.create(!1);
                    return (0, y.jsxs)(a.F.Fragment, {
                        children: [(0, y.jsx)(a.F.span, P(P({}, (0, c.Sh)(M.profile, n && M[n], d && M.disabled)), {}, {
                            onClick: function() {
                                return d.modify((function(e) {
                                    return !e
                                }))
                            },
                            style: {
                                pointerEvents: d.view((function(e) {
                                    return e ? "none" : "initial"
                                }))
                            },
                            children: (0, y.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, y.jsx)("path", {
                                    d: "M15.9999 3.19995C12.465 3.19995 9.59995 6.06502 9.59995 9.59995V10.6666C9.59995 14.2016 12.465 17.0666 15.9999 17.0666C19.5349 17.0666 22.3999 14.2016 22.3999 10.6666V9.59995C22.3999 6.06502 19.5349 3.19995 15.9999 3.19995ZM15.9979 20.2666C11.7248 20.2666 6.24213 22.5779 4.66453 24.6291C3.6896 25.8974 4.61768 27.7333 6.21662 27.7333H25.7812C27.3801 27.7333 28.3082 25.8974 27.3333 24.6291C25.7557 22.579 20.2709 20.2666 15.9979 20.2666Z"
                                })
                            })
                        })), d.view((function(e) {
                            if (e) {
                                var n = l.subscribe((function(e) {
                                    e && (d.set(!1), n.unsubscribe())
                                }));
                                return (0, y.jsx)(f.J, {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    position: {
                                        top: 24,
                                        left: -30
                                    },
                                    isPopoverShown: d,
                                    alignment: "bottom right",
                                    children: (0, y.jsx)(C, {
                                        user: t,
                                        logout: r,
                                        setLastSeen: i.setLastSeen,
                                        onManageSubscription: u,
                                        theme: o,
                                        popup: l
                                    })
                                })
                            }
                        })), (0, y.jsx)(a.F.Fragment, {
                            children: l.view((function(e) {
                                return "lifetime" === e ? (0, y.jsx)(F, {
                                    name: t.name,
                                    popup: l
                                }) : "paid-with-crypto" === e ? (0, y.jsx)(Z, {
                                    name: t.name,
                                    subscriptionEnd: t.subscriptionEnd,
                                    popup: l
                                }) : "contact" === e ? (0, y.jsx)(D, {
                                    name: t.name,
                                    popup: l
                                }) : null
                            }))
                        })]
                    })
                },
                D = function(e) {
                    var t = e.name,
                        n = e.popup;
                    return (0, y.jsx)(B, {
                        popup: n,
                        children: (0, y.jsxs)("div", {
                            className: M.manageCryptoModal,
                            children: ["Hello ", t, ",", (0, y.jsxs)("p", {
                                className: M.contactUs,
                                children: ["Contact us at ", (0, y.jsx)("span", {
                                    children: "hey@okotoki.com"
                                }), " with any questions or feedback."]
                            })]
                        })
                    })
                },
                Z = function(e) {
                    var t = e.name,
                        n = e.subscriptionEnd,
                        r = e.popup;
                    return (0, y.jsx)(B, {
                        popup: r,
                        children: (0, y.jsxs)("div", P(P({}, (0, c.Sh)(M.manageCryptoModal, M.pro)), {}, {
                            children: ["Hello ", t, ",", (0, y.jsx)("br", {}), "Thanks for being Okotoki Pro member", (0, y.jsx)("br", {}), "Subscription is active until", " ", (0, l.Z)(1e3 * n, "MMMM do,\xa0yyyy"), (0, y.jsx)("br", {}), (0, y.jsxs)("p", {
                                className: M.contactUs,
                                children: ["Contact us at ", (0, y.jsx)("span", {
                                    children: "hey@okotoki.com"
                                }), " with any questions regarding your subscription."]
                            })]
                        }))
                    })
                },
                F = function(e) {
                    var t = e.name,
                        n = e.popup;
                    return (0, y.jsx)(B, {
                        popup: n,
                        children: (0, y.jsxs)("div", P(P({}, (0, c.Sh)(M.manageCryptoModal, M.pro)), {}, {
                            children: ["Hello ", t, ",", (0, y.jsx)("br", {}), (0, y.jsx)("br", {}), "Lets be honest here. You are our good friend and we like you. Thus, your plan was upgraded to lifetime subscription (or until our server's last breath).", (0, y.jsx)("br", {}), (0, y.jsx)("br", {}), "No gimmicks, no bullshit. Use it as long as you'd like. The only thing we ask is to keep it to yourself aka not share access with other people.", (0, y.jsx)("br", {}), (0, y.jsx)("br", {}), "Best, Eugene of Okotoki.", (0, y.jsx)(h.d, {})]
                        }))
                    })
                },
                B = function(e) {
                    var t = e.children,
                        n = e.popup;
                    return (0, y.jsxs)(d.h_, {
                        children: [(0, y.jsx)("div", {
                            className: M.popup,
                            children: t
                        }), (0, y.jsx)("div", {
                            className: M.popupBackdrop,
                            onClick: function() {
                                return n.set(null)
                            }
                        })]
                    })
                }
        },
        4728: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return m
                }
            });
            var r = n(9499),
                o = n(7353),
                i = n.n(o),
                s = n(7374),
                a = n(7294),
                c = n(4125),
                l = n(6086),
                u = n(5893);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f, h = i();
            ! function(e) {
                e.happy = "\ud83e\udd29", e.okay = "\ud83d\ude42", e.sad = "\ud83e\udd2c"
            }(f || (f = {}));
            var m = function(e) {
                var t, n = e.user,
                    o = (0, a.useRef)(null),
                    i = (0, a.useState)(null),
                    p = i[0],
                    m = i[1],
                    _ = (0, a.useState)(!1),
                    b = _[0],
                    j = _[1],
                    v = (0, a.useState)(!1),
                    g = v[0],
                    x = v[1];
                (0, a.useEffect)((function() {
                    (0, c.j)("feedbackForm/opened")
                }), []);
                var y = (t = {}, (0, r.Z)(t, f.happy, (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("b", {
                            children: "\u2764\ufe0f"
                        }), (0, u.jsx)("br", {}), "Thanks a lot. ", (0, u.jsx)("br", {}), "We like you too!"]
                    })), (0, r.Z)(t, f.okay, (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("b", {
                            children: "\ud83e\udd13"
                        }), (0, u.jsx)("br", {}), "Thanks for the feedback.", (0, u.jsx)("br", {}), "It will be helpful for us."]
                    })), (0, r.Z)(t, f.sad, (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("b", {
                            children: "\ud83e\udd7a"
                        }), (0, u.jsx)("br", {}), "We\u02bcre sorry we let you down.", (0, u.jsx)("br", {}), "We\u02bcll get better!"]
                    })), t),
                    O = (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("b", {
                            children: "\ud83d\ude31"
                        }), (0, u.jsx)("br", {}), "Feedback was not submitted.", (0, u.jsx)("br", {}), "Stay calm and try again!"]
                    });
                return b || g ? (0, u.jsx)("div", d(d({}, (0, s.Sh)(h.wrap, h.result, g && h.error)), {}, {
                    children: (0, u.jsx)("div", {
                        children: b ? p ? y[p] : y[f.okay] : O
                    })
                })) : (0, u.jsx)("form", {
                    name: "submit-email",
                    ref: o,
                    onSubmit: function(e) {
                        e.preventDefault(), g && x(!1), (0, c.j)("feedbackForm/submit"), j(!0);
                        var t = new FormData(o.current),
                            n = Object.fromEntries(t.entries());
                        fetch("https://okotoki.com/api/sendFeedback", {
                            method: "POST",
                            body: JSON.stringify(n)
                        }).then((function(e) {
                            (0, c.j)("feedbackForm/submit/success")
                        })).catch((function(e) {
                            x(!0), (0, c.j)("feedbackForm/submit/error")
                        }))
                    },
                    children: (0, u.jsxs)("div", {
                        className: h.wrap,
                        children: [(0, u.jsx)("input", {
                            name: "email",
                            type: "hidden",
                            value: n.email,
                            required: !0
                        }), (0, u.jsx)("input", {
                            name: "name",
                            type: "hidden",
                            value: n.name,
                            required: !0
                        }), (0, u.jsx)("input", {
                            name: "emotion",
                            type: "hidden",
                            value: p || "none",
                            required: !0
                        }), (0, u.jsx)("textarea", {
                            name: "feedback",
                            className: h.textarea,
                            placeholder: "Your feedback\u2026"
                        }), (0, u.jsxs)("div", {
                            className: h.buttons,
                            children: [
                                [f.happy, f.okay, f.sad].map((function(e, t) {
                                    return (0, u.jsx)("span", d(d({}, (0, s.Sh)(p === e && h.active, h.emotion)), {}, {
                                        onClick: function() {
                                            return function(e) {
                                                m(e === p ? null : e)
                                            }(e)
                                        },
                                        children: e
                                    }), t)
                                })), (0, u.jsx)(l.z, {
                                    type: "submit",
                                    className: h.submit,
                                    children: "Send"
                                })
                            ]
                        })]
                    })
                })
            }
        },
        6086: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return h
                },
                z: function() {
                    return f
                }
            });
            var r = n(9499),
                o = n(7546),
                i = n.n(o),
                s = n(7374),
                a = n(1664),
                c = n.n(a),
                l = (n(7294), n(5893));

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = i(),
                f = function(e) {
                    var t = e.children,
                        n = e.className,
                        r = e.size,
                        o = void 0 === r ? "medium" : r,
                        i = e.variation,
                        a = void 0 === i ? "default" : i,
                        c = e.onClick,
                        u = e.type,
                        f = e.disabled,
                        h = {};
                    return u && (h.type = u), c && (h.onClick = c), (0, l.jsx)("button", p(p(p({}, h), (0, s.Sh)(d.button, n, d[o], d[a])), {}, {
                        disabled: f,
                        children: t
                    }))
                },
                h = function(e) {
                    var t = e.href,
                        n = e.children,
                        r = e.target,
                        o = void 0 === r ? "_blank" : r,
                        i = e.className,
                        a = e.size,
                        u = void 0 === a ? "medium" : a,
                        f = e.variation,
                        h = void 0 === f ? "default" : f,
                        m = e.download,
                        _ = {};
                    return m && (_.download = m), (0, l.jsx)(c(), {
                        href: t,
                        children: (0, l.jsx)("a", p(p(p({}, (0, s.Sh)(d.button, i, d[u], d[h])), {}, {
                            target: o
                        }, _), {}, {
                            children: n
                        }))
                    })
                }
        },
        4857: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return f
                }
            });
            var r = n(9499),
                o = n(5848),
                i = n.n(o),
                s = n(7374),
                a = n(1664),
                c = n.n(a),
                l = n(5893);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = i(),
                f = function(e) {
                    var t = e.smol,
                        n = e.isLink,
                        r = e.className,
                        o = e.isPro,
                        i = (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)("svg", {
                                className: d.svg,
                                viewBox: "0 0 36 36",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, l.jsx)("rect", {
                                    width: "36",
                                    height: "36",
                                    fill: "var(--mainColor)"
                                }), (0, l.jsx)("path", {
                                    d: "M31 18C31 25.1797 25.1797 31 18 31C10.8203 31 5 25.1797 5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18Z",
                                    fill: "#0C0C0E"
                                }), (0, l.jsx)("path", {
                                    d: "M27.8438 17.9648C27.8438 23.4208 23.4208 27.8438 17.9648 27.8438C12.5089 27.8438 8.08594 23.4208 8.08594 17.9648C8.08594 12.5089 12.5089 8.08594 17.9648 8.08594C23.4208 8.08594 27.8438 12.5089 27.8438 17.9648Z",
                                    fill: "var(--mainColor)"
                                }), (0, l.jsx)("path", {
                                    d: "M16.2654 18.0116C16.2654 19.5713 15.001 20.8357 13.4413 20.8357C11.8816 20.8357 10.6172 19.5713 10.6172 18.0116C10.6172 16.4519 11.8816 15.1875 13.4413 15.1875C15.001 15.1875 16.2654 16.4519 16.2654 18.0116Z",
                                    fill: "#0C0C0E"
                                }), (0, l.jsx)("path", {
                                    d: "M25.41 18.0116C25.41 19.5713 24.1457 20.8357 22.5859 20.8357C21.0262 20.8357 19.7618 19.5713 19.7618 18.0116C19.7618 16.4519 21.0262 15.1875 22.5859 15.1875C24.1457 15.1875 25.41 16.4519 25.41 18.0116Z",
                                    fill: "#0C0C0E"
                                })]
                            }), (0, l.jsx)("span", {
                                className: d.name,
                                children: "okotoki"
                            })]
                        }),
                        a = [d.logo, t && d.smol, o && d.isPro, r];
                    return n ? (0, l.jsx)(c(), {
                        href: "/",
                        children: (0, l.jsx)("a", p(p({}, s.Sh.apply(void 0, [n && d.link].concat(a))), {}, {
                            children: i
                        }))
                    }) : (0, l.jsx)("span", p(p({}, s.Sh.apply(void 0, a)), {}, {
                        children: i
                    }))
                }
        },
        6262: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return _
                }
            });
            var r = n(9499),
                o = n(6178),
                i = n.n(o),
                s = n(7374),
                a = n(7294),
                c = n(923),
                l = n(2020),
                u = n(5893);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = i(),
                h = function(e) {
                    var t = e.className;
                    return (0, u.jsxs)("svg", {
                        className: t,
                        width: "18",
                        height: "12",
                        viewBox: "0 0 18 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, u.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.5 12.5L9 4L0.5 12.5",
                            fill: "var(--bgColor)"
                        }), (0, u.jsx)("path", {
                            d: "M17.5 12.5L9 4L0.5 12.5",
                            stroke: "var(--textColor)"
                        })]
                    })
                },
                m = function(e) {
                    var t = e.className;
                    return (0, u.jsxs)("svg", {
                        className: t,
                        width: "18",
                        height: "12",
                        viewBox: "0 0 18 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, u.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.5 -0.5L9 8L0.5 -0.5",
                            fill: "var(--bgColor)"
                        }), (0, u.jsx)("path", {
                            d: "M17.5 -0.5L9 8L0.5 -0.5",
                            stroke: "var(--textColor)"
                        })]
                    })
                },
                _ = function(e) {
                    var t, n = e.children,
                        r = e.modalClassName,
                        o = e.style,
                        i = e.alignment,
                        p = void 0 === i ? "bottom left" : i,
                        _ = e.position,
                        b = e.isPopoverShown,
                        j = p.split(" ").map((function(e) {
                            return f[e]
                        })).join(" "),
                        v = (0, a.useState)({}),
                        g = v[0],
                        x = v[1],
                        y = (0, a.useRef)(null),
                        O = (0, a.useRef)(null),
                        w = function() {
                            if (O.current) {
                                var e = O.current.getBoundingClientRect(),
                                    t = e.x,
                                    n = e.y,
                                    r = e.width;
                                x({
                                    left: t + r / 2 + (null !== _ && void 0 !== _ && _.left ? _.left : 0),
                                    top: n + window.scrollY + (null !== _ && void 0 !== _ && _.top ? _.top : 0)
                                })
                            }
                        };
                    switch ((0, a.useEffect)((function() {
                            return w(), window.addEventListener("resize", w),
                                function() {
                                    window.removeEventListener("resize", w)
                                }
                        }), []), (0, c.Z)(y, (function() {
                            return b.set(!1)
                        })), p) {
                        case "top left":
                        case "top right":
                        case "top middle":
                            t = (0, u.jsx)(m, d({}, (0, s.Sh)(f.triangle, j)));
                            break;
                        case "bottom left":
                        case "bottom right":
                        case "bottom middle":
                            t = (0, u.jsx)(h, d({}, (0, s.Sh)(f.triangle, j)));
                            break;
                        default:
                            throw Error("never")
                    }
                    var k = d(d(d({}, g), o), {}, {
                        position: "absolute",
                        transform: "translate(-50%, -100%)",
                        zIndex: 1e6
                    });
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("div", {
                            ref: O
                        }), (0, u.jsx)(l.h_, {
                            children: (0, u.jsx)("div", d(d({}, (0, s.Sh)(f.modal, r)), {}, {
                                style: k,
                                children: (0, u.jsxs)("div", {
                                    ref: y,
                                    children: [t, (0, u.jsx)("div", {
                                        children: (0, u.jsx)("div", d(d({}, (0, s.Sh)(f.content, j)), {}, {
                                            children: n
                                        }))
                                    })]
                                })
                            }))
                        })]
                    })
                }
        },
        3308: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return u
                }
            });
            var r = n(7580),
                o = n.n(r),
                i = n(7294),
                s = n(4125),
                a = n(5893),
                c = function() {
                    var e = ["Buy low, sell high", "Blend a smol ting \ua65a", "Bitcoin is baked by math", "Some days may be good, some may be shit", "Who is Satoshi Nakamoto?", "#stackingsats", "There\u02bcs always a bull market somewhere", "It\u02bcs all downhill from here", "Happiness is a winning trade", "I see dead cats bouncing", "I see black swans", "I\u02bcm short and I like it", "Short the banks", "Did you cut your losses today?", "Crypto is my retirement 
                             "];
                    return e[Math.floor(Math.random() * e.length)]
                },
                l = o(),
                u = function() {
                    var e = (0, i.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsx)("div", {
                        className: l.wrap,
                        children: t ? (0, a.jsx)("span", {
                            className: l.fortune,
                            onClick: function() {
                                return n(!1)
                            },
                            children: c()
                        }) : (0, a.jsx)("b", {
                            onClick: function() {
                                n(!0), (0, s.j)("action/fortuneCookieCracked")
                            },
                            children: "\ud83e\udd60"
                        })
                    })
                }
        },
        923: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(7294);

            function o(e, t) {
                (0, r.useEffect)((function() {
                    var n = function(n) {
                        e.current && !e.current.contains(n.target) && t(n)
                    };
                    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n),
                        function() {
                            document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n)
                        }
                }), [e, t])
            }
        },
        3958: function(e) {
            e.exports = {
                popup: "_dialog_popup__xeeU9",
                manageCryptoModal: "_dialog_manageCryptoModal__K279N",
                contactUs: "_dialog_contactUs__gmOeO",
                pro: "_dialog_pro__IZs0M",
                menuItem: "_dialog_menuItem__hK3hW",
                feedbackModal: "_dialog_feedbackModal__eTOLl",
                profile: "_dialog_profile__Jv9zm",
                menuShown: "_dialog_menuShown__ne8Ez",
                large: "_dialog_large__Zswnt",
                popupBackdrop: "_dialog_popupBackdrop__bKgYA"
            }
        },
        7353: function(e) {
            e.exports = {
                emotion: "_feedback_emotion__UJvQM",
                active: "_feedback_active__KUPzw",
                buttons: "_feedback_buttons__g2K4h",
                textarea: "_feedback_textarea__6hszj",
                submit: "_feedback_submit__asPjy",
                wrap: "_feedback_wrap___nJvp",
                result: "_feedback_result__CbCHq"
            }
        },
        166: function(e) {
            e.exports = {
                wrap: "_menu_wrap__B5EJq",
                item: "_menu_item__hHzSH",
                header: "_menu_header__eFBO2",
                free: "_menu_free__Zj8vV",
                pro: "_menu_pro__WnG_9",
                sub: "_menu_sub__q1YUz",
                upgrade: "_menu_upgrade__dc4Bn",
                updatesItemWrap: "_menu_updatesItemWrap__s18jY",
                zen: "_menu_zen__rOTL_",
                unreadUpdates: "_menu_unreadUpdates__RZJr4",
                manageCryptoModal: "_menu_manageCryptoModal__vOTUB",
                contactUs: "_menu_contactUs__eNGiK",
                updatesModal: "_menu_updatesModal__uWE4s",
                themeSelector: "_menu_themeSelector__ksZ6f"
            }
        },
        5848: function(e) {
            e.exports = {
                logo: "_logo_logo__kIIdK",
                svg: "_logo_svg__oG1IP",
                link: "_logo_link__WJjOk",
                isPro: "_logo_isPro__F_a33",
                name: "_logo_name__uKcYb",
                smol: "_logo_smol___DeAS"
            }
        },
        6178: function(e) {
            e.exports = {
                modal: "_popover_modal__k19xX",
                content: "_popover_content___P9vB",
                top: "_popover_top__UscMI",
                right: "_popover_right__x8_Yf",
                middle: "_popover_middle__O_Z_G",
                popup: "_popover_popup__Wgfp0",
                popupBackdrop: "_popover_popupBackdrop__CZx_4",
                triangle: "_popover_triangle__nOquF",
                bottom: "_popover_bottom__3WXmO"
            }
        },
        7546: function(e) {
            e.exports = {
                button: "button_button__OBoWl",
                default: "button_default__IKW8h",
                borderless: "button_borderless__KHRyT",
                secondary: "button_secondary__lXvdf",
                contrast: "button_contrast__Zi7gW",
                large: "button_large__BiLJO",
                medium: "button_medium__p8K9_",
                small: "button_small___VBpU"
            }
        },
        7580: function(e) {
            e.exports = {
                wrap: "_fortune_wrap__MTBml",
                fortune: "_fortune_fortune__sKUln"
            }
        }
    }
]);
