(window.webpack1640700829412 = window.webpack1640700829412 || []).push([
	[133], {
		381: function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r(453).a,
				o = (r(651), r(16)),
				i = Object(o.a)(n, (function() {
					var e = this,
						t = e.$createElement,
						r = e._self._c || t;
					return r("div", {
						staticClass: "page-container",
						attrs: {
							id: "login"
						}
					}, [r("div", {
						staticClass: "content-box"
					}, [r("form", {
						on: {
							submit: function(t) {
								return t.preventDefault(), e.login(t)
							}
						}
					}, [r("h4", [e._v("Sign In with Existing Account")]), r("p", [e._v("Enjoy exclusive rewards and get the best deals!")]), r("div", {
						staticClass: "input-wrapper"
					}, [r("p", {
						staticClass: "form-error"
					}, [e._v(e._s(e.returnError))]), r("div", {
						staticClass: "input"
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.form.email,
							expression: "form.email"
						}],
						ref: "login-email",
						attrs: {
							type: "email",
							placeholder: "Email",
							name: "email"
						},
						domProps: {
							value: e.form.email
						},
						on: {
							blur: e.validateEmail,
							input: function(t) {
								t.target.composing || e.$set(e.form, "email", t.target.value)
							}
						}
					})]), e.error.email ? r("div", {
						staticClass: "error"
					}, [e._v("Please enter a valid email address.")]) : e._e()]), r("div", {
						staticClass: "input-wrapper"
					}, [r("div", {
						staticClass: "input password"
					}, ["checkbox" === e.passwordType ? r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.form.password,
							expression: "form.password"
						}],
						ref: "login-password",
						attrs: {
							placeholder: "Password",
							name: "password",
							maxlength: "15",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(e.form.password) ? e._i(e.form.password, null) > -1 : e.form.password
						},
						on: {
							keyup: e.checkPassword,
							change: function(t) {
								var r = e.form.password,
									n = t.target,
									o = !!n.checked;
								if (Array.isArray(r)) {
									var i = e._i(r, null);
									n.checked ? i < 0 && e.$set(e.form, "password", r.concat([null])) : i > -1 && e.$set(e.form, "password", r.slice(0, i).concat(r.slice(i + 1)))
								} else e.$set(e.form, "password", o)
							}
						}
					}) : "radio" === e.passwordType ? r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.form.password,
							expression: "form.password"
						}],
						ref: "login-password",
						attrs: {
							placeholder: "Password",
							name: "password",
							maxlength: "15",
							type: "radio"
						},
						domProps: {
							checked: e._q(e.form.password, null)
						},
						on: {
							keyup: e.checkPassword,
							change: function(t) {
								return e.$set(e.form, "password", null)
							}
						}
					}) : r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.form.password,
							expression: "form.password"
						}],
						ref: "login-password",
						attrs: {
							placeholder: "Password",
							name: "password",
							maxlength: "15",
							type: e.passwordType
						},
						domProps: {
							value: e.form.password
						},
						on: {
							keyup: e.checkPassword,
							input: function(t) {
								t.target.composing || e.$set(e.form, "password", t.target.value)
							}
						}
					}), r("button", {
						attrs: {
							type: "button"
						},
						on: {
							click: e.changePasswordType
						}
					}, [e._v(e._s("password" === e.passwordType ? "Show" : "Hide"))])]), e.error.password ? r("div", {
						staticClass: "error"
					}, [e._v("The length of password is 6 to 15 characters.")]) : e._e()]), r("router-link", {
						staticClass: "forgot-password",
						attrs: {
							to: "/forgot-password",
							tag: "a",
							type: "button",
							"gtm-label": "signin.forgot-password"
						}
					}, [e._v("Forgot your password?")]), r("div", {
						staticClass: "signin-buttons-container"
					}, [r("button", {
						staticClass: "signin button full",
						attrs: {
							type: "submit",
							"gtm-label": "signin"
						}
					}, [e._v("Sign in")]), r("button", {
						staticClass: "fbsignin button full",
						attrs: {
							type: "button",
							"gtm-label": "signin-with-fb"
						},
						on: {
							click: e.loginWithFB
						}
					}, [e._v("Sign in with Facebook")])]), r("br"), r("br"), r("br"), r("h4", [e._v("Create New Account")]), r("p", [e._v("Speed-up the ordering process and enjoy irresistible offers when you sign-up as a member!")]), r("br"), r("button", {
						staticClass: "white-button full",
						attrs: {
							type: "button",
							"gtm-label": "signin.create-new-account"
						},
						on: {
							click: e.register
						}
					}, [r("span", {
						attrs: {
							"gtm-label": "signin.create-new-account"
						}
					}, [e._v("Create New Account")])]), r("br"), r("br"), r("br"), r("button", {
						staticClass: "white-button full",
						attrs: {
							type: "button",
							"gtm-label": "signin.cancel"
						},
						on: {
							click: e.cancel
						}
					}, [r("span", {
						attrs: {
							"gtm-label": "signin.cancel"
						}
					}, [e._v("Cancel")])])], 1), "checkout" === e.$FLOW.flow || "selfcollectCheckout" === e.$FLOW.flow ? r("button", {
						staticClass: "guest",
						attrs: {
							type: "button",
							"gtm-label": "signin.continue-as-guest"
						},
						on: {
							click: function(t) {
								e.$FLOW.env.noregister = !0, e.$FLOW.next()
							}
						}
					}, [e._v("Continue as guest")]) : e._e()])])
				}), [], !1, null, "53d50648", null);
			t.default = i.exports
		},
		453: function(e, t, r) {
			"use strict";
			(function(e) {
				function r(e, t, r, n, o, i, a) {
					try {
						var s = e[i](a),
							u = s.value
					} catch (e) {
						return void r(e)
					}
					s.done ? t(u) : Promise.resolve(u).then(n, o)
				}

				function n(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(o, i) {
							var a = e.apply(t, n);

							function s(e) {
								r(a, o, i, s, u, "next", e)
							}

							function u(e) {
								r(a, o, i, s, u, "throw", e)
							}
							s(void 0)
						}))
					}
				}
				t.a = {
					name: "login",
					beforeRouteEnter: function(e, t, r) {
						if (window.$STORE.isLoggedIn) return window.$APP.$router.push(t.path);
						t.path && !window.$FLOW.target && (window.$FLOW.target = t.path), r()
					},
					data: function() {
						return {
							showSignInWithApple: !1,
							form: {
								email: "",
								password: ""
							},
							passwordThrottle: !1,
							error: {
								email: !1,
								password: !1
							},
							returnError: "",
							passwordType: "password"
						}
					},
					created: function() {
						var t = this;
						return n(regeneratorRuntime.mark((function r() {
							return regeneratorRuntime.wrap((function(r) {
								for (;;) switch (r.prev = r.next) {
									case 0:
										if ("ios" !== e.env.BUILD_PLATFORM) {
											r.next = 10;
											break
										}
										return r.prev = 1, r.next = 4, window.$mobile("isAppleSigninAvailable");
									case 4:
										t.showSignInWithApple = r.sent.status, r.next = 10;
										break;
									case 7:
										r.prev = 7, r.t0 = r.catch(1), console.error(r.t0);
									case 10:
									case "end":
										return r.stop()
								}
							}), r, null, [
								[1, 7]
							])
						})))()
					},
					mounted: function() {
						"ios" !== e.env.BUILD_PLATFORM && "android" !== e.env.BUILD_PLATFORM && window.$STORE.loadPlugin("facebook")
					},
					methods: {
						register: function() {
							this.$router.push("/register")
						},
						changePasswordType: function() {
							this.passwordType = "password" === this.passwordType ? "text" : "password"
						},
						checkPassword: function() {
							var e = this;
							clearTimeout(this.passwordThrottle), this.passwordThrottle = setTimeout((function() {
								e.validatePassword()
							}), 300)
						},
						cancel: function() {
							var e;
							window.$FLOW.env.goToPage && (e = window.$FLOW.env.goToPage, window.$FLOW.cancel()), window.$FLOW.target && (e = window.$FLOW.target, window.$FLOW.target = null), !window.$STORE.isLoggedIn && e.includes("dashboard") && (e = "/"), this.$router.push(e || "/")
						},
						validatePassword: function() {
							return !this.form.password || this.form.password.length < 6 ? (this.error.password = !0, this.$refs["login-password"].focus(), !1) : (this.error.password = !1, !0)
						},
						validateEmail: function() {
							return this.form.email && /^[^@]+@[^@]+\.[^@]+$/g.exec(this.form.email) ? (this.error.email = !1, !0) : (this.error.email = !0, this.$refs["login-email"].focus(), !1)
						},
						validateForm: function() {
							return this.form.email || (this.error.email = !0), this.form.password || (this.error.password = !0), !this.hasErrors()
						},
						hasErrors: function() {
							for (var e in this.error)
								if (this.error[e]) return document.activeElement.name !== e && this.$refs["login-" + e].focus(), !0;
							return !1
						},
						resetErrors: function() {
							this.error.email = !1, this.error.password = !1
						},
						login: function() {
							var t = this;
							return n(regeneratorRuntime.mark((function r() {
								var n, o;
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											if (t.returnError = "", t.resetErrors(), t.validateForm()) {
												r.next = 4;
												break
											}
											return r.abrupt("return");
										case 4:
											return window.$LOADER.show(3e4), r.prev = 5, r.next = 8, window.$api.post("user/login", t.form);
										case 8:
											return r.next = 10, window.$STORE.initUser();
										case 10:
											if (window.$STORE.isPhoneVerified || 1) {
												r.next = 16;
												break
											}
											return window.$STORE.isLoggedIn && !(window.$STORE.isPhoneVerified || 1) && ("android" === e.env.BUILD_PLATFORM || "ios" === e.env.BUILD_PLATFORM ? ("app_otp_exiting_user_start", window.$mobile("analyticsScreenView", "app_otp_exiting_user_start"), window.$mobile("firebaseScreenView", "app_otp_exiting_user_start")) : window.dataLayer.push({
												event: "pageview",
												page: "/otp/existing-user/start"
											})), window.$LOADER.hide(), window.$FLOW.start("checkPhoneVerify"), window.$FLOW.next(), r.abrupt("return");
										case 16:
											n = null, window.$FLOW.env.goToPage && (n = window.$FLOW.env.goToPage, window.$FLOW.cancel()), window.$FLOW.target && (n = window.$FLOW.target, window.$FLOW.target = null), "android" !== e.env.BUILD_PLATFORM && "ios" !== e.env.BUILD_PLATFORM && window.dataLayer.push({
												event: "login",
												method: "email"
											}), t.$router.push(n || "/"), r.next = 26;
											break;
										case 23:
											if (r.prev = 23, r.t0 = r.catch(5), r.t0.error)
												for (o in t.form) r.t0.error[o] && !0 !== r.t0.error[o] && (t.returnError = r.t0.error[o]);
										case 26:
											window.$LOADER.hide();
										case 27:
										case "end":
											return r.stop()
									}
								}), r, null, [
									[5, 23]
								])
							})))()
						},
						loginWithFB: function() {
							var t = this;
							return n(regeneratorRuntime.mark((function r() {
								var n, o, i, a;
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											if ("ios" !== e.env.BUILD_PLATFORM && "android" !== e.env.BUILD_PLATFORM) {
												r.next = 4;
												break
											}
											return r.abrupt("return", t.loginWithMobileFB());
										case 4:
											window.dataLayer.push({
												event: "v2/register/start"
											});
										case 5:
											return window.$LOADER.show(3e4), n = "", o = "", r.next = 10, t.getFBLoginStatus();
										case 10:
											if ("connected" !== (i = r.sent).status) {
												r.next = 18;
												break
											}
											return n = i.authResponse.userID, o = i.authResponse.accessToken, r.next = 16, t.getFBDetails(n, o);
										case 16:
											r.next = 26;
											break;
										case 18:
											return r.next = 20, t.execFBLogin();
										case 20:
											if (!(a = r.sent).authResponse) {
												r.next = 26;
												break
											}
											return n = a.authResponse.userID, o = a.authResponse.accessToken, r.next = 26, t.getFBDetails(n, o);
										case 26:
											return r.next = 28, window.$STORE.initUser();
										case 28:
											"android" !== e.env.BUILD_PLATFORM && "ios" !== e.env.BUILD_PLATFORM && (window.dataLayer.push({
												event: "login",
												method: "Faecbook"
											}), window.dataLayer.push({
												event: "v2/register/finish",
												loginMethod: "facebook",
												userId: window.$STORE.user.id ? window.$STORE.user.id : void 0
											})), window.$LOADER.hide();
										case 30:
										case "end":
											return r.stop()
									}
								}), r)
							})))()
						},
						getFBLoginStatus: function() {
							return new Promise((function(e, t) {
								var r = setTimeout((function() {
									t(new Error("Unable to resolve FB status."))
								}), 1e4);
								window.FB.getLoginStatus((function(t) {
									clearTimeout(r), e(t)
								}))
							}))
						},
						getFBDetails: function(e) {
							var t = this;
							return n(regeneratorRuntime.mark((function r() {
								var n, o, i, a;
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											return r.next = 2, t.getFBDetailsFromApi();
										case 2:
											return n = r.sent, o = n.email || "", i = n.first_name || "", a = n.last_name || "", r.abrupt("return", t.postFBLogin({
												uid: e,
												email: o,
												firstname: i,
												lastname: a
											}));
										case 7:
										case "end":
											return r.stop()
									}
								}), r)
							})))()
						},
						getFBDetailsFromApi: function() {
							return new Promise((function(e, t) {
								var r = setTimeout((function() {
									t(new Error("Unable to get FB Details from API."))
								}), 1e4);
								window.FB.api("/me?fields=first_name,last_name,email", (function(t) {
									clearTimeout(r), e(t)
								}))
							}))
						},
						execFBLogin: function() {
							return new Promise((function(e, t) {
								var r = setTimeout((function() {
									t(new Error("Unable to execute FB login."))
								}), 3e5);
								window.FB.login((function(t) {
									clearTimeout(r), e(t)
								}), {
									scope: "public_profile,email"
								})
							}))
						},
						signinWithApple: function() {
							var e = this;
							return n(regeneratorRuntime.mark((function t() {
								var r, n;
								return regeneratorRuntime.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return window.$LOADER.show(3e4), t.prev = 1, t.next = 4, window.$mobile("signinWithApple");
										case 4:
											return r = t.sent, t.next = 7, window.$api.post("v2/user/signin-with-apple", {
												appleId: r.user,
												fullName: r.fullName || {},
												email: r.email || ""
											});
										case 7:
											return t.next = 9, window.$STORE.initUser();
										case 9:
											n = null, window.$FLOW.env.goToPage && (n = window.$FLOW.env.goToPage, window.$FLOW.cancel()), window.$FLOW.target && (n = window.$FLOW.target, window.$FLOW.target = null), e.$router.push(n || "/"), window.$mobile("firebaseEventLog", {
												event: "sign_up",
												params: {
													method: "apple"
												}
											}), t.next = 19;
											break;
										case 16:
											t.prev = 16, t.t0 = t.catch(1), console.error(t.t0);
										case 19:
											window.$LOADER.hide(), window.$LOADERERROR.hide();
										case 21:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[1, 16]
								])
							})))()
						},
						loginWithMobileFB: function() {
							var e = this;
							return n(regeneratorRuntime.mark((function t() {
								var r;
								return regeneratorRuntime.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return window.$LOADER.show(3e4), t.prev = 1, t.next = 4, window.$mobile("facebookLogin");
										case 4:
											return r = t.sent, window.$mobile("firebaseEventLog", {
												event: "sign_up",
												params: {
													method: "facebook"
												}
											}), t.abrupt("return", e.postFBLogin({
												uid: r.uid,
												firstname: r.firstname,
												lastname: r.lastname,
												email: r.email
											}));
										case 9:
											t.prev = 9, t.t0 = t.catch(1), window.$LOADER.hide(), window.$LOADERERROR.hide();
										case 13:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[1, 9]
								])
							})))()
						},
						postFBLogin: function(e) {
							var t = this;
							return n(regeneratorRuntime.mark((function r() {
								var n, o, i, a, s;
								return regeneratorRuntime.wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											return n = e.uid, o = e.firstname, i = e.lastname, a = e.email, r.prev = 1, r.next = 4, window.$api.post("user/facebookLogin", {
												facebookid: n,
												email: a,
												firstname: o,
												lastname: i
											});
										case 4:
											return window.$STORE.isLoggedIn = !0, r.next = 7, window.$STORE.initUser();
										case 7:
											window.$LOADER.hide(), window.$LOADERERROR.hide(), s = null, window.$FLOW.env.goToPage && (s = window.$FLOW.env.goToPage, window.$FLOW.cancel()), window.$FLOW.target && (s = window.$FLOW.target, window.$FLOW.target = null), t.$router.push(s || "/"), r.next = 20;
											break;
										case 15:
											r.prev = 15, r.t0 = r.catch(1), window.$LOADER.hide(), window.$LOADERERROR.hide(), console.error(r.t0);
										case 20:
										case "end":
											return r.stop()
									}
								}), r, null, [
									[1, 15]
								])
							})))()
						}
					}
				}
			}).call(this, r(0))
		},
		454: function(e, t, r) {
			var n = r(652);
			"string" == typeof n && (n = [
				[e.i, n, ""]
			]), n.locals && (e.exports = n.locals);
			(0, r(20).default)("50060c77", n, !0, {})
		},
		651: function(e, t, r) {
			"use strict";
			var n = r(454);
			r.n(n).a
		},
		652: function(e, t, r) {
			(t = r(19)(!1)).push([e.i, ".forgot-password[data-v-53d50648]{padding:0 5px 0 0;margin:0 0 30px auto;display:block;text-align:right}.guest[data-v-53d50648]{font-weight:400;margin:30px auto 0;text-decoration:underline}.signin-buttons-container button[data-v-53d50648]{margin-bottom:15px}.signin-buttons-container .signin-apple[data-v-53d50648]{background-color:#000;color:#fff;padding:0;height:48px}.signin-buttons-container .signin-apple img[data-v-53d50648]{height:40px;padding-right:11px}.flat[data-v-53d50648]{background-image:none;text-transform:none}", ""]), e.exports = t
		}
	}
]);
