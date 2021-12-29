(window.webpack1640700829412 = window.webpack1640700829412 || []).push([
	[161], {
		383: function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r(457).a,
				o = (r(655), r(16)),
				i = Object(o.a)(n, (function() {
					var e = this,
						t = e.$createElement,
						r = e._self._c || t;
					return r("div", {
						staticClass: "page-container",
						attrs: {
							id: "otpverify"
						}
					}, [r("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: e.show,
							expression: "show"
						}],
						staticClass: "content-box"
					}, [r("form", [r("h4", [e._v("YOU'RE ALMOST THERE!")]), r("p", {
						staticClass: "text-center"
					}, [e._v(e._s(e.message_1))]), r("div", {
						staticClass: "otp-wrapper"
					}, [r("div", {
						staticClass: "input-wrapper"
					}, [r("div", {
						staticClass: "input",
						class: {
							error: e.error.otp
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.otpCode,
							expression: "otpCode"
						}],
						ref: "otp-code",
						staticClass: "otp_input",
						attrs: {
							type: "text",
							placeholder: "------",
							maxlength: "6",
							pattern: "d*"
						},
						domProps: {
							value: e.otpCode
						},
						on: {
							input: function(t) {
								t.target.composing || (e.otpCode = t.target.value)
							}
						}
					})]), e.error.otp ? r("p", {
						staticClass: "text-center error"
					}, [e._v(e._s(e.returnOtpError))]) : e._e(), r("br"), e.showCounter ? r("p", {
						staticClass: "text-center"
					}, [e._v("Didn't receive OTP?")]) : e._e(), e.showCounter ? r("p", {
						staticClass: "text-center"
					}, [e._v("Request again in "), r("strong", [e._v(e._s(e.formatDigit(e.minutes)) + ":" + e._s(e.formatDigit(e.seconds)))])]) : e._e(), e.showResend && !e.containErr ? r("p", {
						staticClass: "text-center"
					}, [e._v("Click "), r("a", {
						on: {
							click: function(t) {
								return t.preventDefault(), e.resendOtp(t)
							}
						}
					}, [e._v("here")]), e._v(" to request a new OTP.")]) : e._e()])]), r("p", {
						staticClass: "form-error"
					}, [e._v(e._s(e.returnError))]), r("div", {
						staticClass: "button-wrapper"
					}, [r("button", {
						staticClass: "button",
						attrs: {
							disabled: !e.otpReady,
							"gtm-label": "register"
						},
						on: {
							click: function(t) {
								return t.preventDefault(), e.register(t)
							}
						}
					}, [e._v(e._s(e.btn_text_1))]), r("br"), r("br"), r("button", {
						staticClass: "white-button",
						attrs: {
							"gtm-label": "register.cancel"
						},
						on: {
							click: e.cancel
						}
					}, [r("span", {
						attrs: {
							"gtm-label": "register.cancel"
						}
					}, [e._v("Cancel")])])])])])])
				}), [], !1, null, "d85d3e9e", null);
			t.default = i.exports
		},
		457: function(e, t, r) {
			"use strict";
			(function(e) {
				var n = r(4),
					o = r.n(n);

				function i(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function s(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(r), !0).forEach((function(t) {
							a(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function a(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function c(e, t, r, n, o, i, s) {
					try {
						var a = e[i](s),
							c = a.value
					} catch (e) {
						return void r(e)
					}
					a.done ? t(c) : Promise.resolve(c).then(n, o)
				}

				function d(e) {
					return function() {
						var t = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = e.apply(t, r);

							function s(e) {
								c(i, n, o, s, a, "next", e)
							}

							function a(e) {
								c(i, n, o, s, a, "throw", e)
							}
							s(void 0)
						}))
					}
				}
				t.a = {
					name: "otp-verify",
					beforeRouteEnter: function(e, t, r) {
						if (!window.$FLOW.flow) return window.$FLOW.cancel(r);
						r()
					},
					created: function() {
						this.btn_text_1 = "VERIFY", this.show = !0, this.showCounter = !0, this.countDownTimer(), this.form = window.$STORE.profile
					},
					data: function() {
						return {
							show: !1,
							showCounter: !1,
							showResend: !1,
							otpReady: !1,
							containErr: !1,
							cnt_time_remaining: 180,
							minutes: 3,
							seconds: 0,
							message_1: "Please enter the One Time Password (OTP) sent to your registered mobile number to verify.",
							btn_text_1: "REQUEST OTP",
							otpCode: "",
							passwordType: "password",
							password2Type: "password",
							returnError: "",
							returnOtpError: "",
							form: {
								firstname: "",
								lastname: "",
								phone: "",
								email: "",
								password: "",
								passwordConfirm: "",
								newsletter: !0,
								tnc: !1,
								captcha: ""
							},
							error: {
								otp: !1,
								firstname: !1,
								phone: !1,
								email: !1,
								password: !1,
								passwordConfirm: !1,
								tnc: !1,
								captcha: ""
							}
						}
					},
					watch: {
						otpCode: function() {
							this.otpCode && 6 === this.otpCode.length ? this.otpReady = !0 : this.otpReady = !1
						}
					},
					mounted: function() {
						var e = this;
						return d(regeneratorRuntime.mark((function t() {
							return regeneratorRuntime.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										e.show = !0;
									case 1:
									case "end":
										return t.stop()
								}
							}), t)
						})))()
					},
					methods: {
						formatDigit: function(e) {
							return "number" != typeof e ? e : e < 10 ? "0" + e : e
						},
						countDownTimer: function() {
							var e = this;
							this.cnt_time_remaining > 0 ? (this.minutes = parseInt(this.cnt_time_remaining / 60, 10), this.seconds = parseInt(this.cnt_time_remaining % 60, 10), setTimeout((function() {
								e.cnt_time_remaining -= 1, e.countDownTimer()
							}), 1e3)) : (this.showCounter = !1, this.showResend = !0)
						},
						resendOtp: function() {
							var e = this;
							return d(regeneratorRuntime.mark((function t() {
								return regeneratorRuntime.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, e.requestOtp();
										case 2:
											e.showResend = !1, e.otpReady = !1, e.showCounter = !0, e.cnt_time_remaining = 180, e.countDownTimer();
										case 7:
										case "end":
											return t.stop()
									}
								}), t)
							})))()
						},
						requestOtp: function() {
							var t = this;
							return d(regeneratorRuntime.mark((function r() {
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											return window.$LOADER.show(3e4), r.prev = 1, r.next = 4, window.$api.post("v2/otp/send", {
												mobile: t.form.phone.replace(/\s/g, "")
											});
										case 4:
											t.$refs["otp-code"].focus(), "android" === e.env.BUILD_PLATFORM || "ios" === e.env.BUILD_PLATFORM ? ("app_otp_new_user_request", window.$mobile("analyticsScreenView", "app_otp_new_user_request"), window.$mobile("firebaseScreenView", "app_otp_new_user_request")) : window.dataLayer.push({
												event: "pageview",
												page: "/otp/new-user/request"
											}), window.$LOADER.hide(), r.next = 12;
											break;
										case 9:
											r.prev = 9, r.t0 = r.catch(1), r.t0.error && window.$LOADER.hide();
										case 12:
										case "end":
											return r.stop()
									}
								}), r, null, [
									[1, 9]
								])
							})))()
						},
						checkInput: function(e) {
							this.error[e] = !this.form[e], this.returnError = ""
						},
						validateForm: function() {
							for (var e in this.error) this.form[e] || (this.error[e] = !0);
							return this.form.password !== this.form.passwordConfirm && (this.error.password = "Password does not match.", this.error.passwordConfirm = "Password does not match."), (this.form.password.length < 6 || this.form.password.length > 15) && (this.error.password = this.error.passwordConfirm = "The length of password is 6 to 15 characters."), this.checkPhone(), this.checkEmail(), this.checkName(), !this.hasErrors()
						},
						hasErrors: function() {
							for (var e in this.error)
								if (this.error[e]) return this.$refs["register-" + e].focus(), !0;
							return !1
						},
						checkPhone: function() {
							this.form.phone ? this.error.phone = !window.$STORE.validPhone(this.form.phone) && "Invalid phone." : this.error.phone = !0
						},
						checkEmail: function() {
							this.form.email ? this.error.email = !window.$STORE.validEmail(this.form.email) && "Invalid Email." : this.error.email = !0
						},
						checkName: function() {
							this.form.firstname ? this.error.firstname = !window.$STORE.validName(this.form.firstname) && "Invalid First Name." : this.error.firstname = !0
						},
						cancel: function() {
							var e;
							window.$FLOW.env.goToPage && (e = window.$FLOW.env.goToPage, window.$FLOW.cancel()), window.$FLOW.target && (e = window.$FLOW.target, window.$FLOW.target = null), this.$router.push(e || "/")
						},
						register: async function() {
							var t = this;
							return d(regeneratorRuntime.mark((function r() {
								var n, i, a, c, d;
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											console.log('send req');
											return t.resetErrors(), window.$LOADER.show(3e4), r.prev = 2, r.next = 5/*, window.$api.post("user/registerWithOtp", s({}, t.form, {
												phone: t.form.phone.replace(/\s/g, ""),
												otpCode: t.otpCode
											}))*/;
										case 5:
											console.log('init user');
											let x = await window.$STORE.initUser();
											console.log(x)
											return r.next = 7, x;
										case 7:
											console.log('isPhoneveri');
											if (window.$STORE.isPhoneVerified = !0, "ios" !== e.env.BUILD_PLATFORM && "android" !== e.env.BUILD_PLATFORM) {
												r.next = 18;
												break
											}
											window.$mobile("firebaseEventLog", {
												event: "sign_up",
												params: {
													method: "email"
												}
											}), window.$mobile("analyticsScreenView", "app_register_successful"), window.$mobile("firebaseScreenView", "app_register_successful"), window.$mobile("fbEventLog", {
												event: "sign_up"
											}), "app_otp_new_user_verified", window.$mobile("analyticsScreenView", "app_otp_new_user_verified"), window.$mobile("firebaseScreenView", "app_otp_new_user_verified"), r.next = 28;
											break;
										case 18:
											return window.dataLayer.push({
												event: "v2/register/successful",
												virtualPageUrl: "/register/successful",
												virtualPageTitle: "Register Successful"
											}), window.dataLayer.push({
												event: "v2/register/finish",
												loginMethod: "email",
												userId: window.$STORE.user.id ? window.$STORE.user.id : void 0
											}), window.dataLayer.push({
												event: "sign_up",
												method: "email"
											}), window.dataLayer.push({
												event: "pageview",
												page: "/otp/new-user/verified"
											}), n = "CompleteRegistration", i = o()().unix(), a = "".concat(n, "-").concat(i, "-").concat(window.$STORE.user.id), window.dataLayer.push({
												event: "forPixel",
												pixelData: {
													event_id: a,
													event_name: n
												}
											}), r.next = 28, window.$api.post("v2/capi/mkt/evt", {
												event_name: n,
												event_id: a
											});
										case 28:
											window.$LOADER.hide(), c = null, window.$FLOW.env.gotoPage && (c = window.$FLOW.env.gotoPage, window.$FLOW.cancel()), window.$FLOW.target && (c = window.$FLOW.target, window.$FLOW.target = null), window.$MODAL.show("phoneVerified", {
												message: "Thank you. Your account has been created."
											}), t.$router.push(c || "/"), r.next = 39;
											break;
										case 36:
											if (r.prev = 36, r.t0 = r.catch(2), r.t0.error)
												for (d in window.$LOADER.hide(), r.t0.error.otp && (t.error.otp = !0, t.returnOtpError = r.t0.error.otp, t.$refs["otp-code"].focus()), t.form) r.t0.error[d] && !0 !== r.t0.error[d] && (t.returnError = r.t0.error[d], t.containErr = !0, t.showCounter = !1);
										case 39:
										case "end":
											return r.stop()
									}
								}), r, null, [
									[2, 36]
								])
							})))()
						},
						resetErrors: function() {
							for (var e in this.error) this.error[e] = !1
						}
					}
				}
			}).call(this, r(0))
		},
		458: function(e, t, r) {
			var n = r(656);
			"string" == typeof n && (n = [
				[e.i, n, ""]
			]), n.locals && (e.exports = n.locals);
			(0, r(20).default)("7da2db17", n, !0, {})
		},
		655: function(e, t, r) {
			"use strict";
			var n = r(458);
			r.n(n).a
		},
		656: function(e, t, r) {
			(t = r(19)(!1)).push([e.i, "h4[data-v-d85d3e9e]{margin:20px auto}.text-center[data-v-d85d3e9e],h4[data-v-d85d3e9e]{text-align:center}.checkbox-wrapper[data-v-d85d3e9e],.input[data-v-d85d3e9e]{margin:0 auto 10px;text-weight:bold}.input.error[data-v-d85d3e9e]{border:2px solid red}.otp_input[data-v-d85d3e9e]{font-weight:bolder;font-size:20px}.otp-wrapper[data-v-d85d3e9e]{margin:30px auto 80px}.otp_input[data-v-d85d3e9e]{text-allign:center;text-weight:bold!important;text-size:15px}@media(max-width:360px){.otp_input[data-v-d85d3e9e]{padding-left:12%;letter-spacing:34px}}@media(min-width:359px){.otp_input[data-v-d85d3e9e]{padding-left:20%;letter-spacing:32px}}.button-wrapper[data-v-d85d3e9e]{text-align:center}.button[data-v-d85d3e9e],.white-button[data-v-d85d3e9e]{min-width:280px}", ""]), e.exports = t
		}
	}
]);
