(window.webpack1640700829412 = window.webpack1640700829412 || []).push([
	[229], {
		331: function(e, t, n) {
			"use strict";
			n.r(t);

			function r(e, t, n, r, o, a, i) {
				try {
					var s = e[a](i),
						c = s.value
				} catch (e) {
					return void n(e)
				}
				s.done ? t(c) : Promise.resolve(c).then(r, o)
			}

			function o(e) {
				return function() {
					var t = this,
						n = arguments;
					return new Promise((function(o, a) {
						var i = e.apply(t, n);

						function s(e) {
							r(i, o, a, s, c, "next", e)
						}

						function c(e) {
							r(i, o, a, s, c, "throw", e)
						}
						s(void 0)
					}))
				}
			}
			var a = {
					name: "phone-number-verify",
					beforeRouteEnter: function(e, t, n) {
						if (!window.$FLOW.flow) return window.$FLOW.cancel(n);
						n()
					},
					created: function() {
						window.$STORE.profile && (this.phone = window.$STORE.profile.phone)
					},
					data: function() {
						return {
							phone: "",
							error: {
								phoneInUsed: !1
							}
						}
					},
					methods: {
						maskPhone: function(e) {
							return e ? (t = 10 === e.length ? "*-***" : "*-****", e.substring(0, 2) + t + e.substring(e.length - 4)) : e;
							var t
						},
						requestotp: function() {
							var e = this;
							return o(regeneratorRuntime.mark((function t() {
								return regeneratorRuntime.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return window.$LOADER.show(3e4), e.error.phoneInUsed = !1, t.prev = 2, t.next = 5, window.$api.post("v2/otp/send", {
												mobile: e.phone.replace(/\s/g, "")
											});
										case 5:
											t.next = 14;
											break;
										case 7:
											if (t.prev = 7, t.t0 = t.catch(2), !t.t0.err) {
												t.next = 14;
												break
											}
											return e.error.phoneInUsed = !0, window.$LOADER.hide(), window.$MODAL.show("phoneBeingUsed", {
												cancel: function() {
													e.phoneInUsed = !1, window.$FLOW.cancel()
												},
												ok: function() {
													var t = o(regeneratorRuntime.mark((function t() {
														return regeneratorRuntime.wrap((function(t) {
															for (;;) switch (t.prev = t.next) {
																case 0:
																	e.$router.push("/login");
																case 1:
																case "end":
																	return t.stop()
															}
														}), t)
													})));
													return function() {
														return t.apply(this, arguments)
													}
												}()
											}), t.abrupt("return");
										case 14:
											e.error.phoneInUsed || (window.$LOADER.hide(), window.$FLOW.next());
										case 15:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 7]
								])
							})))()
						},
						back: function() {
							window.$FLOW.cancel()
						}
					}
				},
				i = (n(659), n(16)),
				s = Object(i.a)(a, (function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", {
						staticClass: "page-container",
						attrs: {
							id: "phone-verify"
						}
					}, [n("div", {
						staticClass: "content-box"
					}, [n("form", [n("h4", [e._v("VERIFY YOUR INFORMATION")]), e._m(0), n("h4", [e._v(e._s(e.maskPhone(e.phone)))]), n("p", {
						staticClass: "text-center"
					}, [e._v("Not your number?")]), n("p", {
						staticClass: "text-center"
					}, [e._v("Go back to the "), n("a", {
						on: {
							click: function(t) {
								return t.preventDefault(), e.back(t)
							}
						}
					}, [e._v("Registration Form")]), e._v(" to update")]), n("div", {
						staticClass: "button-wrapper"
					}, [e.error.phoneInUsed ? n("p", {
						staticClass: "form-error"
					}, [e._v("Phone is being registered")]) : e._e(), n("button", {
						staticClass: "button",
						on: {
							click: function(t) {
								return t.preventDefault(), e.requestotp(t)
							}
						}
					}, [e._v("REQUEST OTP")]), n("br"), n("br"), n("button", {
						staticClass: "white-button",
						on: {
							click: e.back
						}
					}, [n("span", [e._v("Cancel")])])])])])])
				}), [function() {
					var e = this.$createElement,
						t = this._self._c || e;
					return t("div", {
						staticClass: "ensure-text-box"
					}, [t("p", {
						staticClass: "text-center"
					}, [this._v("Please ensure that your mobile number is correct to receive a One Time Password (OTP)")])])
				}], !1, null, "2b63ff86", null);
			t.default = s.exports
		},
		461: function(e, t, n) {
			var r = n(660);
			"string" == typeof r && (r = [
				[e.i, r, ""]
			]), r.locals && (e.exports = r.locals);
			(0, n(20).default)("4005fb2f", r, !0, {})
		},
		659: function(e, t, n) {
			"use strict";
			var r = n(461);
			n.n(r).a
		},
		660: function(e, t, n) {
			(t = n(19)(!1)).push([e.i, "h4[data-v-2b63ff86]{margin:20px auto}.button-wrapper[data-v-2b63ff86],.text-center[data-v-2b63ff86],h4[data-v-2b63ff86]{text-align:center}.button-wrapper[data-v-2b63ff86]{margin:200px auto auto}.button[data-v-2b63ff86],.white-button[data-v-2b63ff86]{min-width:280px}.ensure-text-box[data-v-2b63ff86]{min-width:40%;padding:4px}", ""]), e.exports = t
		}
	}
]);
