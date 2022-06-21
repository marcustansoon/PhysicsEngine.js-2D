/* CropGuide Loader b1652349795194, only for use with an active CropGuide license, https://crop.guide/ (c) 2021 PQINA Inc. */
(() => {
	var z = (e, o) => e.reduce((n, a) => n.then(l => o(a).then(u => l.concat([u]))), Promise.resolve([]));
	var S = e => {
		let o = new DataTransfer;
		return e.forEach(n => o.items.add(n)), Object.defineProperty(o, "items", {
			value: e.map(n => (n.getAsFile = () => n, n))
		}), o
	};
	var G = (e, o) => document.documentElement.addEventListener(e, o, !0);
	var M = (e, o) => {
		let n = S(o);
		e.files = n.files
	};
	var L = (e, o, n = {}, a = {}) => {
		let {
			bubbles: l = !0,
			detail: u
		} = a, s = new CustomEvent(o, {
			bubbles: l,
			detail: u
		});
		return Object.assign(s, n), e.dispatchEvent(s), s
	};
	var de = ["x", "y", "screenX", "screenY", "layerX", "layerY", "pageX", "pageY", "offsetX", "offsetY", "clientX", "clientY"],
		N = (e, {
			didIntercept: o,
			shouldHandleChange: n,
			shouldHandleDrop: a
		}, l) => {
			let u = (s, d) => z(Array.from(s), g => e(g, d));
			G("change", s => {
				let {
					target: d
				} = s;
				if (d.ignoreChangeEvent || s.$cropguide) return;
				let g = n(s);
				!g || (o(s), s.stopImmediatePropagation(), u(d.files, g).then(t => {
					l("processed selected files", t), d.ignoreChangeEvent = !0, M(d, t.filter(Boolean)), delete d.ignoreChangeEvent;
					let m = L(d, "change", {
						$cropguide: !0
					});
					l("dispatched CustomEvent", [d, m])
				}))
			}), G("drop", s => {
				if (s.$cropguide) return;
				let d = a(s);
				if (!d) return;
				o(s);
				let {
					target: g
				} = s;
				s.preventDefault(), s.stopImmediatePropagation();
				let t = de.reduce((m, h) => (m[h] = s[h], m), {});
				u(s.dataTransfer.files, d).then(m => {
					l("processed dropped files", m);
					let h = S(m.filter(Boolean)),
						x = L(g, "drop", {
							...t,
							dataTransfer: {
								effectAllowed: "all",
								types: ["Files"],
								files: h.files,
								items: h.items
							},
							$cropguide: !0
						}, {
							bubbles: !0
						});
					l("dispatched CustomEvent", [g, x])
				})
			})
		};
	var X = () => window && "DataTransfer" in window;
	var _ = (e, {
		parent: o,
		onerror: n
	}) => {
		let a = document.createElement("script");
		return a.defer = !0, a.async = !0, a.src = e, a.onerror = n, (o || document.head).append(a), a
	};
	var k = e => e && /input/i.test(e.tagName) && e.type === "file";
	var D = e => e && e.type && /png|jpeg|gif|bmp|webp/.test(e.type);
	var U = e => !(!k(e.target) || !e.target.files.length || !Array.from(e.target.files).some(D));
	var V = e => !(k(e.target) || !e.dataTransfer || !e.dataTransfer.files.length || !Array.from(e.dataTransfer.files).some(D));
	var le = e => e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
		W = e => {
			let o = Date.now(),
				n = "CropGuide";
			return e ? (...a) => {
				let l = Date.now() - o,
					u = `${le(l)}ms`.padStart(8, " "),
					s = "";
				typeof a[0] == "string" ? (s = u + " " + n + " " + a[0], params = a.splice(1)) : (s = u, params = [...a]), params.length ? console.log(s, params) : console.log(s)
			} : () => {}
		};
	var J = "application/json",
		O = (e, o = {}, {
			method: n = "GET"
		} = {}) => Promise.resolve('{"status":"OK"}');	// Edit here
	var K = (e, o) => {
		if (o === "html" || e.matches(o)) return !0;
		let a = document.querySelector(o);
		return a ? a.contains(e) : !1
	};
	var Q = e => new File([e], e.name, {
		type: e.type,
		lastModified: e.lastModified
	});
	var Z = () => {
		let [e, o, n] = getComputedStyle(document.documentElement).backgroundColor.match(/[0-9]+/g).map(l => parseInt(l, 10));
		return .2126 * e + .7152 * o + .0722 * n > 100
	};
	var ee = () => {
		try {
			return localStorage.getItem("cgdebug") === "1"
		} catch (e) {}
	};
	((e, o, {
		hookId: n,
		apiURL: a,
		localeURL: l,
		clientURL: u
	}) => {
		let d = new URL(o.currentScript.src).searchParams,
			g = d.get("debug") !== null || ee(d),
			t = W(g);
		if (!X() && false) console.log("not supported on this browser");
		let m = d.get("c");
		if (!m && false) console.log("clientId not found");
		let h = e[n],
			x = [];
		if (h) {
			if (h.fields) x = h.fields.map(r => typeof r == "string" ? {
				selector: r
			} : r), e[n] = void 0, t("local fields config loaded", x);
			else if (typeof h == "object") return t("client already initialised")
		}
		let y = (r, i) => L(o.documentElement, `${n}:${r}`, void 0, {
			detail: i
		});
		y("init"), t("init", m);
		let E, j, H, p, te = (r = "auto") => {
				if (r !== "auto") return r.toLowerCase() || "en";
				let i = (o.documentElement.lang || "en").substring(0, 2).toLowerCase();
				return /^(en|es|fr|de|ru|zh)$/i.test(i) ? i : "en"
			},
			A = (r, i, w) => {
				if (!w(i)) return t(`skip ${i.type} event`, i), !1;
				let f = r.find(({
					selector: T
				}) => K(i.target, T));
				return !f || f.field.disabled && !g ? (t(`skip ${i.type} event`, i), !1) : (t(`handle ${i.type} event`, i, f), f)
			},
			oe = (r, i) => ({
				selector: i.selector,
				field: {
					...r.field,
					...i.field
				},
				editor: {
					...r.editor,
					...i.editor
				}
			}),
			B = () => {
				let {
					banner: r
				} = E, i = x.length ? x.map(c => {
					let Y = E.fields.find(b => b.selector === c.selector) || E.fields.find(b => b.selector === "html");
					return oe(Y, c)
				}) : E.fields;
				t("fields config", i);
				let w = Z(),
					{
						userAgent: f,
						maxTouchPoints: T,
						platform: re
					} = navigator,
					ne = /^mac/i.test(re),
					P = /iPhone|iPad|iPod/.test(f) || ne && T >= 1;
				if (P) {
					let c = o.createElement("style");
					c.textContent = ".CropGuideDocumentLock,.CropGuideDocumentLock body {height: var(--crop-guide-document-height);overflow-y: hidden;box-sizing: border-box;}.CropGuideDocumentLock body {position:relative;}.CropGuideDocumentLock .CropGuideFrame {height: 100% !important;}", o.head.append(c)
				}
				let I, F = () => o.documentElement.style.setProperty("--crop-guide-document-height", `${window.innerHeight}px`),
					ie = () => {
						t("will show editor"), p.style.pointerEvents = "all", p.style.width = "100%", p.style.height = "100vh", !!P && F()
					},
					se = () => {
						t("did show editor"), y("open"), !!P && (I === void 0 && (I = e.scrollY), o.documentElement.classList.add("CropGuideDocumentLock"), F(), e.addEventListener("resize", F))
					},
					ae = () => {
						t("will hide editor"), !!P && (e.removeEventListener("resize", F), o.documentElement.classList.remove("CropGuideDocumentLock"), e.scrollTo(0, I), I = void 0)
					},
					ce = () => {
						t("did hide editor"), y("close"), p.style.pointerEvents = "none", p.style.width = 0, p.style.height = 0
					};
				N((c, Y) => new Promise(b => {
					if (!D(c)) return t("ignore", c), y("ignore", {
						src: c
					}), b(c);
					t("edit", c), H(c, {
						log: t,
						env: {
							locale: j,
							banner: r,
							pageIsBright: w,
							willShowEditor: ie,
							didShowEditor: se,
							willHideEditor: ae,
							didHideEditor: ce
						},
						requirements: Y
					}).then(v => {
						let C = Q(v);
						t("processed", C), O(`${a}`, {
							clientId: m
						}), y("process", {
							src: c,
							dest: C
						}), b(C)
					}).catch(v => {
						let C = v;
						v.hasOwnProperty("message") ? C = {
							error: v.message + " " + v.stack
						} : typeof v == "string" && (C = {
							error: v
						});
						let {
							error: $
						} = C;
						if (/image too small/i.test($)) return t("image too small", c), y("invalid", {
							src: c
						}), b();
						t("error", $), O(`${a}/report`, {
							clientId: m,
							error: $
						}), y("error", {
							src: c,
							error: $
						}), b(c)
					})
				}), {
					didIntercept: c => y("intercept", c),
					shouldHandleChange: c => A(i, c, U),
					shouldHandleDrop: c => A(i, c, V)
				}, t), y("load")
			},
			R = (r, i, w) => {
				if (!r) {
					t(`wait for ${i} to load`);
					return
				}
				w()
			};
		e[n] = {
			_setLocale: r => {
				t("locale loaded", r), j = r, R(H, "editor", B)
			},
			_setEditor: r => {
				t("client loaded"), H = r, R(j, "locale", B)
			}
		};
		let q = a;
		// Edit here
		t("load config", q), (new Promise((resolve, reject) => { resolve('{"fields":[{"selector":"html","field":{"theme":"auto","enableHeadlessMode":false,"disabled":false,"guide":"none","mask":"none"},"editor":{"imageCropAspectRatio":"1","imageBackgroundcolor":null,"imageWriter":{"targetSize":{"width":1024,"height":1024,"fit":"contain","upscale":false},"mimeType":null,"quality":98},"imageCropMinSize":{"width":1,"height":1},"cropSelectPresetOptions":null,"cropSelectPresetOptionsValueModel":"[]"}}],"locale":"en","banner":true,"status":"OK"}'); })).then(r => {
			t("config loaded");
			try {
				E = JSON.parse(r, (f, T) => T === null ? void 0 : T)
			} catch (f) {
				t("failed to parse config", r);
				return
			}
			if (t("config parsed", E), E.status === "Inactive") {
				t("inactive", E);
				return
			}
			let i = te(E.locale);
			t("inject locale", l, i), _(l + `/${i}.js`, {
				onerror: f => t("locale inject error", f || {})
			});
			let w = "html .pintura-editor{--color-primary:#6418e6;--color-primary-dark:#4e18aa;--color-primary-text:#faf7ff} html .pintura-editor .PinturaButtonExport{color:rgb(var(--color-background))!important;background:rgb(var(--color-foreground))!important}";
			p = o.createElement("iframe"), p.onerror = f => t("iframe load error", f), p.allowtransparency = !0, p.className = "CropGuideFrame", p.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;border:0;z-index:2147483647;pointer-events:none;touch-action:manipulation;user-select:none;", t("inject client", u), p.srcdoc = '<!DOCTYPE html><html lang="' + i + '"><meta charset="utf-8"><title>crop.guide</title><style>' + w + '</style><script src="' + u + '"><\/script></html>', t("append client frame"), o.body.append(p)
		}).catch(r => t("config load error", r))
	})(window, document, {
		hookId: "$cropguide",
		apiURL: "https://app.crop.guide/api",
		localeURL: "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/crop.guide/locale",//"https://cdn.crop.guide/locale",
		clientURL: "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/crop.guide/l.js",//"https://cdn.crop.guide/client/l.js"
	});
})();
