(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[9944], {
		2035: function(e, t, n) {
			"use strict";
			n.d(t, {
				g: function() {
					return Oa
				}
			});
			var r = n(9499),
				i = n(29),
				o = n(5842),
				a = n.n(o),
				s = n(7794),
				l = n.n(s),
				c = n(6018),
				u = n(1419),
				d = n(7374),
				h = n(6486),
				f = n.n(h),
				g = n(2962),
				v = n(1163),
				p = n(4316),
				m = n.n(p),
				x = n(7294),
				b = n(6449),
				y = n(2368),
				_ = n(459),
				w = n(8712),
				j = n(9062),
				C = n(116),
				k = n(6976),
				S = n.n(k),
				O = n(2167),
				P = n(3305),
				T = n(7157),
				M = n(7674),
				A = n(2777),
				Z = n(2262),
				D = n(7528),
				L = n(3218),
				I = n.n(L),
				R = n(3240),
				F = n(7554),
				E = n(866),
				H = n(2289),
				B = function(e) {
					return e._eq = function() {
						return !1
					}, e
				},
				N = function() {
					function e(t) {
						(0, A.Z)(this, e), this.value = t, (0, r.Z)(this, "atom", c.h.create(0))
					}
					return (0, Z.Z)(e, [{
						key: "set",
						value: function(e) {
							var t;
							void 0 !== (t = "function" === typeof e ? null === e || void 0 === e ? void 0 : e(this.value) : e) && (this.value = t), this.atom.modify((function(e) {
								return e + 1
							}))
						}
					}, {
						key: "lens",
						value: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							var r = this;
							return {
								set: function(e) {
									var n, i, o = r.value;
									for (n = t[i = 0]; i < t.length - 1; n = t[++i]) {
										var a, s;
										o = null !== (a = null === (s = o) || void 0 === s ? void 0 : s[n]) && void 0 !== a ? a : {}
									}
									"object" === typeof o && (o[n] = e(o[n]), r.set(r.value))
								},
								get: function() {
									var e, n, i = r.value;
									for (n = t[e = 0]; e < t.length; ++e) {
										var o, a;
										i = null !== (o = null === (a = i) || void 0 === a ? void 0 : a[n]) && void 0 !== o ? o : {}
									}
									return i
								},
								view: function(e) {
									var t = this;
									return r.atom.view((function() {
										return e(t.get())
									}))
								}
							}
						}
					}, {
						key: "view",
						value: function(e) {
							var t = this;
							return this.atom.view((function() {
								return e(t.value)
							}))
						}
					}, {
						key: "get",
						value: function() {
							return this.value
						}
					}]), e
				}(),
				V = N;

			function U(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? U(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var z = function(e, t) {
					return {
						type: "grouped_book_snapshot",
						symbol: t,
						exchange: e,
						name: "",
						bidsTotalAtDepth: 0,
						asksTotalAtDepth: 0,
						maxTotalAtDepth: 0,
						maxAmount: 0,
						minAmount: 0,
						bids: [],
						asks: [],
						timestamp: new Date,
						localTimestamp: new Date,
						extra: {
							lastPrice: 0,
							lastPrices: [],
							delta: 0,
							volumeHistograms: [],
							funding: void 0
						}
					}
				},
				G = D.Ri.create((function(e) {
					return null === e || void 0 === e ? void 0 : e.extra
				}), (function(e, t) {
					return e && t ? W(W({}, t), {}, {
						extra: e
					}) : t
				})),
				q = function(e) {
					return Array.from(new Set(e.map((function(e) {
						return e.exchange
					})))).map((function(t) {
						return {
							exchange: t,
							markets: e.filter((function(e) {
								return t === e.exchange
							}))
						}
					}))
				},
				Y = function(e, t) {
					return t.markets.find((function(t) {
						var n = t.symbol,
							r = t.exchange;
						return n === e.symbol && r === e.exchange
					}))
				},
				X = function(e, t) {
					return D.Ri.compose(D.Ri.key()("snapshots"), D.Ri.key()(e), D.Ri.create((function(e) {
						return e && e[t]
					}), (function(e, n) {
						return n && n[t] && e ? W(W({}, n), {}, (0, r.Z)({}, t, e)) : n
					})))
				},
				J = function() {
					function e(t, n, i, o, a, s, l, u) {
						var d = this;
						(0, A.Z)(this, e), this.isLazySnapshots = u, (0, r.Z)(this, "trades", c.h.create([])), (0, r.Z)(this, "liquidations", c.h.create([])), (0, r.Z)(this, "_lazySnapshots", new V({
							maxAsksRows: 0,
							maxBidsRows: 0,
							maxSpotLevelTotal: 0,
							snapshots: {}
						})), (0, r.Z)(this, "_snapshots", c.h.create({
							maxAsksRows: 0,
							maxBidsRows: 0,
							maxSpotLevelTotal: 0,
							snapshots: {}
						})), (0, r.Z)(this, "connectionState", c.h.create({})), (0, r.Z)(this, "exchangesState", void 0), (0, r.Z)(this, "configState", void 0), (0, r.Z)(this, "online", c.h.create(!0)), (0, r.Z)(this, "snapshotConfig", void 0), (0, r.Z)(this, "feedsConfig", void 0), (0, r.Z)(this, "uiConfig", void 0), (0, r.Z)(this, "coinConfig", void 0), (0, r.Z)(this, "configStateSubscription", void 0), (0, r.Z)(this, "snapshotConfigSubscription", void 0), (0, r.Z)(this, "feedsConfigSubscription", void 0), (0, r.Z)(this, "uiConfigSubscription", void 0), (0, r.Z)(this, "snapshotConfigResetTimer", null), (0, r.Z)(this, "feedsConfigResetTimer", null), (0, r.Z)(this, "onoff", (function() {
							var e = !!navigator.onLine;
							d.online.set(e), e || d.connectionState.modify((function(e) {
								return Object.keys(e).reduce((function(e, t) {
									return e[t] = "disconnected", e
								}), {})
							}))
						})), (0, r.Z)(this, "onMessage", (function(e) {
							switch (e.type) {
								case "grouped_book_snapshot":
									d.updateSnapshotsState(e);
									break;
								case "big_trade":
									d.updateTradesState(e);
									break;
								case "big_liquidation":
									d.updateLiquidationsState(e);
									break;
								case "trades_volume":
									d.updateTradeVolumes(e);
									break;
								case "price_update":
									d.updatePrice(e);
									break;
								case "derivative_ticker":
									d.updateFunding(e)
							}
						}));
						var f = l ? l.get() : null,
							g = t.map((function(e) {
								return e.markets.filter((function(e) {
									return e.active
								})).map((function(t) {
									return {
										exchange: e.exchangeName,
										symbol: t.symbol
									}
								}))
							})).flat(),
							v = function(e, t) {
								try {
									if (!t) return e;
									var n = "ui-config-".concat(t.uid),
										r = localStorage.getItem(n);
									if (!r) return e;
									var i = JSON.parse(r);
									return I()(i) ? W(W({}, e), i) : e
								} catch (o) {
									return e
								}
							}(s, f);
						this.uiConfig = c.h.create(W({}, v)), this.uiConfigSubscription = this.uiConfig.pipe((0, b.T)(1)).subscribe((function(e) {
							if (f) {
								var t = "ui-config-".concat(f.uid);
								localStorage.setItem(t, JSON.stringify(e))
							}
						}));
						var p = function(e, t, n) {
							try {
								if (!n) return t;
								var r = "feeds-config-".concat(n.uid, "-").concat(e),
									i = localStorage.getItem(r);
								if (!i) return t;
								if (n.plan !== E.mr.pro) return localStorage.removeItem(r), t;
								var o = JSON.parse(i);
								return I()(o) ? W(W({}, t), o) : t
							} catch (a) {
								return t
							}
						}(i, a, f);
						this.coinConfig = n, this.feedsConfig = c.h.create(p), this.feedsConfigSubscription = this.feedsConfig.pipe((0, R.O)(null), (0, F.G)()).subscribe((function(e) {
							var t = (0, M.Z)(e, 2),
								n = t[0],
								r = t[1];
							if (!f || f.plan !== E.mr.pro) d.feedsConfigResetTimer && clearTimeout(d.feedsConfigResetTimer), (0, h.isEqual)(r, a) || (d.feedsConfigResetTimer = setTimeout((function() {
								d.feedsConfigResetTimer = null, d.feedsConfig.set(a)
							}), 1e4));
							else {
								var o = "feeds-config-".concat(f.uid, "-").concat(i);
								localStorage.setItem(o, JSON.stringify(r))
							}
							d.updateTradesOnFeedsConfigChange(n, r)
						}));
						var m = function(e, t, n) {
							try {
								if (!n) return t;
								var r = "snapshot-config-".concat(n.uid, "-").concat(e),
									i = localStorage.getItem(r);
								if (!i) return t;
								if (n.plan !== E.mr.pro) return localStorage.removeItem(r), t;
								var o = JSON.parse(i);
								return I()(o) ? W(W({}, t), o) : t
							} catch (a) {
								return t
							}
						}(i, o, f);
						this.snapshotConfig = c.h.create(m), this.snapshotConfigSubscription = this.snapshotConfig.subscribe((function(e) {
							if (!f || f.plan !== E.mr.pro) d.snapshotConfigResetTimer && clearTimeout(d.snapshotConfigResetTimer), (0, h.isEqual)(e, o) || (d.snapshotConfigResetTimer = setTimeout((function() {
								d.snapshotConfigResetTimer = null, d.snapshotConfig.set(o)
							}), 1e4));
							else {
								var t = "snapshot-config-".concat(f.uid, "-").concat(i);
								localStorage.setItem(t, JSON.stringify(e))
							}
						}));
						var x = function(e, t, n, r) {
							try {
								var i, o = n ? localStorage.getItem("config-".concat(n.uid, "-").concat(e)) : localStorage.getItem("config-anonymous-".concat(e));
								if (!o) return r;
								var a = JSON.parse(o);
								if (!Array.isArray(a)) return r;
								if (null !== (i = a[0]) && void 0 !== i && i.markets) {
									var s = a.map((function(e) {
										return e.markets.filter((function(e) {
											return e.active
										})).map((function(t) {
											return {
												exchange: e.exchangeName,
												symbol: t.symbol
											}
										}))
									})).flat();
									a = s, n ? localStorage.setItem("config-".concat(n.uid, "-").concat(e), JSON.stringify(s)) : localStorage.setItem("config-anonymous-".concat(e), JSON.stringify(s))
								}
								return a.filter((function(e) {
									var r, i = null === (r = t.find((function(t) {
										return t.exchangeName === e.exchange
									}))) || void 0 === r ? void 0 : r.markets.find((function(t) {
										return t.symbol === e.symbol
									}));
									return !!i && (i.active = !!i.isFree || !!n && n.plan === E.mr.pro)
								}))
							} catch (l) {
								return console.log(l), r
							}
						}(i, t, f, g);
						this.configState = c.h.create(x), this.exchangesState = c.h.create(function(e, t) {
							return q(e).reduce((function(e, n) {
								var r = n.exchange,
									i = n.markets;
								return e[r] = {
									connection: "created",
									state: i.reduce((function(e, n) {
										var i = n.symbol;
										return e[i] = {
											snapshot: z(r, i),
											snapshotConfig: t
										}, e
									}), {})
								}, e
							}), {})
						}(x, this.snapshotConfig.get()));
						var y = q(x).reduce((function(e, t) {
							return e.snapshots[t.exchange] = t.markets.reduce((function(e, n) {
								var r = n.symbol;
								return e[r] = z(t.exchange, r), e
							}), {}), e
						}), {
							maxBidsRows: 0,
							maxAsksRows: 0,
							maxSpotLevelTotal: 0,
							snapshots: []
						});
						this._lazySnapshots.set(y), this.configStateSubscription = this.configState.subscribe((function(e) {
							var t = "config-".concat(f ? f.uid : "anonymous", "-").concat(i);
							localStorage.setItem(t, JSON.stringify(e));
							var n = function(t) {
								var n = t.snapshots,
									r = e.reduce((function(e, t) {
										var r = e.snapshots,
											i = e.maxAsksRows,
											o = e.maxBidsRows,
											a = t.exchange,
											s = t.symbol;
										r[a] = r[a] || {};
										var l = (n[a] || {})[s] || z(a, s);
										return r[a][s] = l, {
											snapshots: r,
											maxAsksRows: Math.max(i, l.asks.length),
											maxBidsRows: Math.max(o, l.bids.length),
											maxSpotLevelTotal: 0
										}
									}), {
										maxBidsRows: 0,
										maxAsksRows: 0,
										maxSpotLevelTotal: 0,
										snapshots: {}
									}),
									i = e.reduce((function(e, t) {
										return "spot" === Y(t, d.coinConfig).marketType && e.push(r.snapshots[t.exchange][t.symbol]), e
									}), []);
								return r.maxSpotLevelTotal = Math.max.apply(Math, (0, C.Z)(i.map((function(e) {
									return e.maxAmount
								})))), r
							};
							d.isLazySnapshots ? d._lazySnapshots.set(n) : d._snapshots.modify(n), d.updateTradesOnExchangesConfigChange(e)
						})), this.connectionState.set(q(x).reduce((function(e, t) {
							return e[t.exchange] = "created", e
						}), {})), this.addListeners()
					}
					return (0, Z.Z)(e, [{
						key: "updateTradesOnFeedsConfigChange",
						value: function(e, t) {
							var n = e && e.liquidationThreshold !== t.liquidationThreshold,
								r = e && e.tradesThresholdSpot !== t.tradesThresholdSpot,
								i = e && e.tradesThresholdDerivatives !== t.tradesThresholdDerivatives;
							(r || i) && this.trades.modify((function(e) {
								return e.filter((function(e) {
									return (0, H.E5)(e.exchange) ? !r : !i
								}))
							})), n && this.liquidations.modify((function(e) {
								return []
							}))
						}
					}, {
						key: "updateTradesOnExchangesConfigChange",
						value: function(e) {
							this.trades.modify((function(t) {
								return t.filter((function(t) {
									return e.find((function(e) {
										return t.exchange === e.exchange && t.symbol === e.symbol
									}))
								}))
							})), this.liquidations.modify((function(t) {
								return t.filter((function(t) {
									return e.find((function(e) {
										return t.exchange === e.exchange && t.symbol === e.symbol
									}))
								}))
							}))
						}
					}, {
						key: "addListeners",
						value: function() {
							window.addEventListener("offline", this.onoff), window.addEventListener("online", this.onoff)
						}
					}, {
						key: "removeListeners",
						value: function() {
							this.configStateSubscription.unsubscribe(), this.snapshotConfigSubscription.unsubscribe(), this.feedsConfigSubscription.unsubscribe(), this.uiConfigSubscription.unsubscribe(), window.removeEventListener("offline", this.onoff), window.removeEventListener("online", this.onoff)
						}
					}, {
						key: "updateFunding",
						value: function(e) {
							var t = e.symbol,
								n = e.exchange,
								r = e.fundingRate,
								i = e.predictedFundingRate,
								o = e.fundingTimestamp;
							void 0 !== r && (this.isLazySnapshots ? this._lazySnapshots.lens("snapshots", n, t, "extra", "funding").set((function() {
								return {
									current: r,
									predicted: i,
									timestamp: o
								}
							})) : this._snapshots.lens(X(n, t)).lens(G).modify((function(e) {
								return e ? {
									delta: e.delta,
									lastPrice: e.lastPrice,
									lastPrices: e.lastPrices,
									volumeHistograms: e.volumeHistograms,
									funding: {
										current: r,
										predicted: i,
										timestamp: o
									}
								} : e
							})))
						}
					}, {
						key: "updateTradeVolumes",
						value: function(e) {
							var t = e.exchange,
								n = e.symbol,
								r = e.volumes,
								i = function(e) {
									return r.map((function(t, n) {
										var r = e[n];
										return r ? (t.volumesBuy.forEach((function(e, t) {
											r.volumesBuy[r.volumesBuy.length - 1 - t] = e
										})), t.volumesSell.forEach((function(e, t) {
											r.volumesSell[r.volumesSell.length - 1 - t] = e
										})), r) : t
									}))
								};
							this.isLazySnapshots ? this._lazySnapshots.lens("snapshots", t, n, "extra", "volumeHistograms").set(i) : this._snapshots.lens(X(t, n)).lens(G).modify((function(e) {
								return e ? W(W({}, e), {}, {
									volumeHistograms: i(e.volumeHistograms)
								}) : e
							}))
						}
					}, {
						key: "updatePrice",
						value: function(e) {
							var t = e.exchange,
								n = e.symbol,
								r = e.price;
							this.isLazySnapshots ? this._lazySnapshots.lens("snapshots", t, n, "extra").set((function(e) {
								var t, n, i;
								if (!e) return e;
								var o, a = null !== (t = e.lastPrices) && void 0 !== t ? t : [];
								(null === (n = a) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i[1]) !== r && (a = [
									[~~(9999 * Math.random()), r]
								].concat((0, C.Z)(null !== (o = a) && void 0 !== o ? o : [])).slice(0, 5));
								return e.lastPrice = r, e.lastPrices = a, e
							})) : this._snapshots.lens(X(t, n)).lens(G).modify((function(e) {
								return e ? W(W({}, e), {}, {
									lastPrice: r
								}) : e
							}))
						}
					}, {
						key: "updateSnapshotsState",
						value: function(e) {
							var t = this,
								n = e.exchange,
								r = e.symbol;
							this.isLazySnapshots ? this._lazySnapshots.set((function(i) {
								var o, a, s, l, c, u, d, h, f, g = t.configState.get().reduce((function(e, n) {
									return "spot" === Y(n, t.coinConfig).marketType && e.push(i.snapshots[n.exchange][n.symbol]), e
								}), []);
								i.maxSpotLevelTotal = Math.max.apply(Math, (0, C.Z)(g.map((function(e) {
									return e.maxAmount
								})))), i.maxAsksRows = Math.max(i.maxAsksRows, null !== (o = null === e || void 0 === e || null === (a = e.asks) || void 0 === a ? void 0 : a.length) && void 0 !== o ? o : 0), i.maxBidsRows = Math.max(i.maxBidsRows, null !== (s = null === e || void 0 === e || null === (l = e.bids) || void 0 === l ? void 0 : l.length) && void 0 !== s ? s : 0);
								var v = null !== (c = null === (u = i.snapshots) || void 0 === u ? void 0 : u[n]) && void 0 !== c ? c : i.snapshots[n] = {};
								v[r] || (v[r] = e);
								var p = null === (d = v[r]) || void 0 === d ? void 0 : d.aggregationId,
									m = null !== (h = null === (f = v[r]) || void 0 === f ? void 0 : f.extra) && void 0 !== h ? h : v[r].extra = {
										lastPrice: 0,
										lastPrices: [],
										volumeHistograms: [],
										delta: 0
									};
								v[r] = e;
								var x = v[r];
								return x.extra = m, m.delta = e.bidsTotalAtDepth - e.asksTotalAtDepth, x.aggregationId = p, i
							})) : (this._snapshots.modify((function(e) {
								var n = t.configState.get().reduce((function(n, r) {
									return "spot" === Y(r, t.coinConfig).marketType && n.push(e.snapshots[r.exchange][r.symbol]), n
								}), []);
								return e.maxSpotLevelTotal = Math.max.apply(Math, (0, C.Z)(n.map((function(e) {
									return e.maxAmount
								})))), W({}, e)
							})), this._snapshots.lens("maxAsksRows").modify((function(t) {
								return Math.max(e.asks.length, t)
							})), this._snapshots.lens("maxBidsRows").modify((function(t) {
								return Math.max(e.bids.length, t)
							})), this._snapshots.lens(X(n, r)).modify((function(t) {
								return t ? W({
									extra: {
										lastPrice: t.extra.lastPrice,
										lastPrices: t.extra.lastPrices,
										volumeHistograms: t.extra.volumeHistograms,
										delta: t.bidsTotalAtDepth - t.asksTotalAtDepth,
										funding: t.extra.funding
									}
								}, e) : t
							})))
						}
					}, {
						key: "updateLiquidationsState",
						value: function(e) {
							this.liquidations.modify((function(t) {
								if (!t.length) return [e];
								for (var n = 0; n < t.length && e.timestamp < t[n].timestamp;) n++;
								if (t[n] && e.id === t[n].id) return t;
								var r = (0, C.Z)(t);
								return r.splice(n, 0, e), r.length >= 1e3 ? r.slice(0, -1) : r
							}))
						}
					}, {
						key: "updateTradesState",
						value: function(e) {
							this.trades.modify((function(t) {
								if (!t.length) return [e];
								for (var n = 0; n < t.length && e.timestamp < t[n].timestamp;) n++;
								if (t[n] && e.id === t[n].id) return t;
								var r = (0, C.Z)(t);
								return r.splice(n, 0, e), r.length >= 1e3 ? r.slice(0, -1) : r
							}))
						}
					}]), e
				}(),
				Q = n(4125),
				K = n(9604),
				$ = n(5893);

			function ee(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function te(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ee(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ne = S(),
				re = function(e) {
					var t = e.date,
						n = e.title,
						r = e.content,
						i = e.onAggregationClick;
					return (0, x.useEffect)((function() {
						(0, Q.j)("updatePopup/shown", {
							title: n
						})
					}), []), (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsx)("div", {
							className: ne.title,
							children: n
						}), (0, $.jsx)("div", te(te({}, (0, d.Sh)(ne.date)), {}, {
							children: (0, O.Z)(new Date(t), "MMMM d, yyyy")
						})), (0, $.jsx)("div", {
							className: ne.content,
							children: (0, $.jsx)(P.R, te(te({}, r), {}, {
								components: (0, T.U)(i)
							}))
						})]
					})
				},
				ie = function(e) {
					var t = e.user,
						n = e.setLastSeen,
						r = e.latestUpdate,
						i = e.appState;
					if (!t) return null;
					var o = function() {
						n(Date.now())
					};
					return (0, $.jsx)(u.F.Fragment, {
						children: t.view("latestUpdateSeen").view((function(e) {
							return new Date(r.date).getTime() > e ? (0, $.jsxs)($.Fragment, {
								children: [(0, $.jsx)("div", te(te({}, (0, d.Sh)(ne.popup)), {}, {
									children: (0, $.jsxs)("div", te(te({}, (0, d.Sh)(ne.coxntainer)), {}, {
										children: [(0, $.jsxs)("div", te(te({}, (0, d.Sh)(ne.header)), {}, {
											children: ["We\u02bcve shipped something cool!", (0, $.jsx)("span", {
												onClick: o,
												className: ne.closeBtn,
												children: "\u2715"
											})]
										})), (0, $.jsxs)("div", te(te({}, (0, d.Sh)(ne.updateItem)), {}, {
											children: [(0, $.jsx)(re, te(te({}, r), {}, {
												onAggregationClick: function() {
													var e;
													e = i.coinConfig, i.configState.modify((function(t) {
														var n = (0, C.Z)(t);
														return (0, C.Z)(t).filter((function(t) {
															return "spot" === Y(t, e).marketType
														})).map((function(e, t) {
															var r = n.findIndex((function(t) {
																	return t.exchange === e.exchange && t.symbol === e.symbol
																})),
																i = te({}, n[r]);
															i.aggregationId = ~~((t + 1) / 5), n[r] = i
														})), n
													})), o()
												}
											})), (0, $.jsx)("div", {
												style: {
													fontSize: "16px"
												},
												children: (0, $.jsx)(K.r, {
													target: "_blank",
													href: "/changelog",
													children: "\u2190 More updates"
												})
											})]
										}))]
									}))
								})), (0, $.jsx)("div", {
									className: ne.popupBackdrop,
									onClick: o
								})]
							}) : null
						}))
					})
				},
				oe = n(1504),
				ae = n.n(oe),
				se = n(3283),
				le = n(6079),
				ce = n(5e3),
				ue = n(2113),
				de = n(3236);

			function he(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function fe(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? he(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ge = n.n(de)(),
				ve = function(e) {
					var t = e.state,
						n = e.onStateChange,
						r = e.disabled;
					return (0, $.jsx)(u.F.span, fe(fe({
						onClick: function() {
							r || (t.modify((function(e) {
								return !e
							})), n(t.get()))
						}
					}, (0, d.Sh)(ge.switcher, t.view((function(e) {
						return e ? ge.active : null
					})))), {}, {
						children: (0, $.jsx)("span", {
							className: ge.thumbler
						})
					}))
				},
				pe = n(8429),
				me = n(6625),
				xe = n(6351);

			function be(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ye(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? be(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var _e = n.n(xe)(),
				we = function(e) {
					var t = e.label,
						n = e.children,
						r = e.className,
						i = e.isProFeature,
						o = e.isNewFeature,
						a = e.isFreeUser;
					return (0, $.jsxs)("div", ye(ye({}, (0, d.Sh)(_e.item, r)), {}, {
						children: [(0, $.jsx)(u.F.div, ye(ye({}, (0, d.Sh)(_e.label, null === a || void 0 === a ? void 0 : a.view((function(e) {
							return e && i ? _e.showPro : void 0
						})), o ? _e.newFeature : void 0)), {}, {
							children: t
						})), (0, $.jsx)("div", ye(ye({}, (0, d.Sh)(_e.input)), {}, {
							children: n
						}))]
					}))
				};

			function je(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ce(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? je(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ke = ae(),
				Se = new Array(10).fill("").map((function(e, t) {
					return t - 7
				})).map((function(e) {
					return [25, 50, 75, 100].map((function(t) {
						return e > 0 ? t * Math.pow(10, e) : t / Math.pow(10, Math.abs(e))
					}))
				})).reduce((function(e, t) {
					return [].concat((0, C.Z)(e), (0, C.Z)(t))
				}), []),
				Oe = function(e) {
					var t = Se.indexOf(e);
					return -1 === t ? [] : Se.slice(Math.max(t - 8, 0), Math.min(t + 9, Se.length - 1))
				},
				Pe = function(e) {
					var t = e.snapshotConfig,
						n = e.uiConfig,
						r = e.feedsConfig,
						i = e.isFreeUser,
						o = e.theme,
						a = e.defaultSnapshotConfig,
						s = e.defaultFeedsConfig,
						l = e.isPopup,
						h = e.isX;

					function f(e, t) {
						return "customTheme" !== e && function(e) {
							var t = getComputedStyle(document.documentElement),
								n = {
									background: t.getPropertyValue("--bgColor").trim(),
									text: t.getPropertyValue("--textColor").trim(),
									bidsBuys: t.getPropertyValue("--greenColor").trim(),
									asksSells: t.getPropertyValue("--redColor").trim(),
									bidsBuysS: t.getPropertyValue("--greenColor2").trim(),
									asksSellsS: t.getPropertyValue("--redColor2").trim(),
									priceColor: t.getPropertyValue("--priceColor").trim()
								};
							e.set(n)
						}(t), (0, j.Sx)(), null
					}
					return (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsxs)("div", Ce(Ce({}, (0, d.Sh)(ke.sectionHeader)), {}, {
							children: ["UI", (0, $.jsx)("div", {
								className: ke.right,
								children: h ? (0, $.jsx)("span", {
									className: ke.revert,
									onClick: function() {
										localStorage.removeItem("isX"), localStorage.removeItem("okotoki-theme"), window.location.reload()
									},
									children: "(back to old UI)"
								}) : (0, $.jsx)(le.O, {
									isSmall: !0
								})
							})]
						})), (0, $.jsx)(we, {
							label: "Theme",
							children: (0, $.jsx)(pe.Y, {
								size: "small",
								theme: o,
								className: ke.themeSelector,
								isProUser: !i.get()
							})
						}), (0, $.jsx)(u.F.Fragment, {
							children: o.view((function(e) {
								return "customTheme" === e ? (0, $.jsx)(j.UR, {
									customThemes: n.lens("customTheme"),
									isX: h
								}) : f(o.get(), n.lens("customTheme"))
							}))
						}), l ? null : (0, $.jsx)(we, {
							label: "Trades & Liq\u02bcs feed",
							children: (0, $.jsx)(ve, {
								state: n.lens("showTradesAndLiquidations"),
								onStateChange: function() {}
							})
						}), (0, $.jsx)(we, {
							label: "Show Order Books",
							children: (0, $.jsx)(ve, {
								state: n.lens("showOrderBooks"),
								onStateChange: function() {}
							})
						}), (0, $.jsx)(u.F.Fragment, {
							children: n.lens("showTradesAndLiquidations").view((function(e) {
								return e || l ? (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsx)(we, {
										label: "Trades feed mode",
										isFreeUser: i,
										children: (0, $.jsxs)(ue.e, {
											size: "small",
											className: ke.inputFieldLarge,
											value: n.lens("tradesMode"),
											onChange: function(e) {
												var t = e.target.value;
												n.lens("tradesMode").set(t)
											},
											children: [(0, $.jsx)("option", {
												value: "minimal",
												children: "Minimal"
											}), (0, $.jsx)("option", {
												value: "extended",
												children: "Extended"
											})]
										})
									}), (0, $.jsx)(we, {
										label: "Trades feed theme",
										isFreeUser: i,
										children: (0, $.jsxs)(ue.e, {
											size: "small",
											className: ke.inputFieldLarge,
											value: n.lens("tradesTheme"),
											onChange: function(e) {
												var t = e.target.value;
												n.lens("tradesTheme").set(t)
											},
											children: [(0, $.jsx)("option", {
												value: "default",
												children: "Default"
											}), (0, $.jsx)("option", {
												value: "colorized",
												children: "Colorized"
											})]
										})
									})]
								}) : null
							}))
						}), (0, $.jsx)(u.F.Fragment, {
							children: i.view((function(e) {
								return e ? (0, $.jsx)("div", Ce(Ce({}, (0, d.Sh)(ke.upgradeHook)), {}, {
									children: "Try out advanced configuration before upgrading\xa0to Pro"
								})) : null
							}))
						}), l ? null : (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("div", Ce(Ce({}, (0, d.Sh)(ke.sectionHeader)), {}, {
								children: "Order Book"
							})), (0, $.jsx)(we, {
								label: "Turbo Mode",
								isProFeature: !0,
								isFreeUser: i,
								children: (0, $.jsx)(me.w, {
									isProUser: !i.get(),
									state: t.lens("isRealtime")
								})
							}), h ? (0, $.jsxs)(u.F.Fragment, {
								children: [(0, $.jsx)(we, {
									label: "Lock orderflow",
									isNewFeature: !0,
									children: (0, $.jsx)(ve, {
										state: n.lens("lockOrderflow"),
										onStateChange: function() {}
									})
								}), n.lens("lockOrderflow").view((function(e) {
									return e ? (0, $.jsx)(we, {
										label: "Last price align",
										isNewFeature: !0,
										children: (0, $.jsx)(ve, {
											state: n.lens("lastPriceAlign"),
											onStateChange: function() {}
										})
									}) : (0, $.jsx)(we, {
										label: "Last price align",
										className: ke.disabled,
										isNewFeature: !0,
										children: (0, $.jsx)(ve, {
											state: n.lens("lastPriceAlign"),
											onStateChange: function() {},
											disabled: !0
										})
									})
								}))]
							}) : null, (0, $.jsx)(we, {
								label: "Aggregation Grouping",
								isProFeature: !0,
								isFreeUser: i,
								children: (0, $.jsx)(ue.e, Ce(Ce({
									size: "small"
								}, (0, d.Sh)(ke.inputField, c.h.combine(i, t.lens("grouping"), (function(e, t) {
									return e && t !== a.grouping ? ke.shakeAnimation : void 0
								})))), {}, {
									value: t.lens("grouping"),
									onChange: function(e) {
										var n = e.target.value;
										t.lens("grouping").set(parseFloat(n))
									},
									children: Oe(a.grouping).map((function(e, t) {
										return (0, $.jsx)("option", {
											value: e,
											children: e
										}, t)
									}))
								}))
							}), h ? null : (0, $.jsx)($.Fragment, {
								children: (0, $.jsx)(we, {
									label: "Depth Histogram Mode",
									isFreeUser: i,
									children: (0, $.jsxs)(ue.e, {
										size: "small",
										className: ke.inputFieldLarge,
										value: n.lens("levelVolumeRenderingMode"),
										onChange: function(e) {
											var t = e.target.value;
											n.lens("levelVolumeRenderingMode").set(t)
										},
										children: [(0, $.jsx)("option", {
											value: "heatmap",
											children: "Cumulative"
										}), (0, $.jsx)("option", {
											value: "histogram",
											children: "Individual"
										})]
									})
								})
							}), (0, $.jsx)(we, {
								label: "Heatmap Mode",
								isFreeUser: i,
								children: (0, $.jsxs)(ue.e, {
									size: "small",
									className: ke.inputFieldLarge,
									value: n.lens("heatmapMode"),
									onChange: function(e) {
										var t = e.target.value;
										n.lens("heatmapMode").set(t)
									},
									children: [(0, $.jsx)("option", {
										value: "individual",
										children: "Individual"
									}), (0, $.jsx)("option", {
										value: "crossExchange",
										children: "Cross exchange"
									})]
								})
							}), (0, $.jsx)(we, {
								label: "Depth Histogram Levels",
								isProFeature: !0,
								isFreeUser: i,
								children: (0, $.jsx)(Ae, Ce(Ce({
									state: t.lens("depthLevels")
								}, (0, d.Sh)(ke.inputField)), {}, {
									wrapClassName: c.h.combine(i, t.lens("depthLevels"), (function(e, t) {
										return e && t !== a.depthLevels ? ke.shakeAnimation : void 0
									})),
									step: 1
								}))
							})]
						}), (0, $.jsx)("div", Ce(Ce({}, (0, d.Sh)(ke.sectionHeader)), {}, {
							children: "Trades & Liq\u02bcs threshold"
						})), (0, $.jsx)(we, {
							label: "Trades (spot)",
							isProFeature: !0,
							isFreeUser: i,
							children: (0, $.jsx)(Te, {
								isFreeUser: i,
								feedsConfig: r,
								defaultFeedsConfig: s,
								type: "tradesThresholdSpot"
							})
						}), (0, $.jsx)(we, {
							label: "Trades (derivatives)",
							isProFeature: !0,
							isFreeUser: i,
							children: (0, $.jsx)(Te, {
								isFreeUser: i,
								feedsConfig: r,
								defaultFeedsConfig: s,
								type: "tradesThresholdDerivatives"
							})
						}), (0, $.jsx)(we, {
							label: "Liquidations",
							isProFeature: !0,
							isFreeUser: i,
							children: (0, $.jsx)(Te, {
								isFreeUser: i,
								feedsConfig: r,
								defaultFeedsConfig: s,
								type: "liquidationThreshold"
							})
						})]
					})
				},
				Te = function(e) {
					var t = e.isFreeUser,
						n = e.feedsConfig,
						r = e.defaultFeedsConfig,
						i = e.type,
						o = n.lens(i),
						a = c.h.create(o.get());
					return a.pipe((0, se.b)(1500)).subscribe((function(e) {
						return o.set(e)
					})), (0, $.jsx)(Ae, Ce(Ce({
						state: a,
						formatWhenBlurred: !0
					}, (0, d.Sh)(ke.inputFieldLarge)), {}, {
						wrapClassName: c.h.combine(t, a, (function(e, t) {
							return e && t !== r[i] ? ke.shakeAnimation : void 0
						})),
						step: 1e4
					}))
				},
				Me = {
					thousandSeparated: !0,
					average: !0,
					optionalMantissa: !0,
					trimMantissa: !0,
					mantissa: 1
				},
				Ae = function(e) {
					var t = e.state,
						n = e.className,
						r = e.wrapClassName,
						i = e.formatWhenBlurred,
						o = e.step,
						a = void 0 === o ? 1e4 : o;
					return (0, $.jsx)(ce.h, {
						customStateWhenBlurred: i ? t.view((function(e) {
							return m()(e).format(Me)
						})) : void 0,
						size: "small",
						className: n,
						wrapClassName: r,
						value: t,
						onChange: function(e) {
							var n = e.target.value,
								r = parseInt(n);
							(Number.isNaN(r) || r < 0) && "" !== n || ("" === n ? r = 0 : n.startsWith("0") && /[1-9]/.test(n) && (e.target.value = r.toString()), t.set(r))
						},
						type: "number",
						min: 0,
						step: a
					})
				},
				Ze = n(4894),
				De = n.n(Ze),
				Le = n(6086);

			function Ie(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Re(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ie(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Fe = De(),
				Ee = function(e) {
					var t = e.user,
						n = e.onCloseClick,
						r = e.marketSelector,
						i = e.advancedConfiguration,
						o = e.wrapClassName,
						a = e.hook,
						s = e.isPopup,
						l = !t,
						h = t ? t.view("plan").view((function(e) {
							return e === E.mr.free
						})) : c.h.create(!0);
					return (0, $.jsxs)("div", Re(Re({}, (0, d.Sh)(Fe.configuration, o, s && Fe.popup)), {}, {
						children: [(0, $.jsxs)("div", {
							className: Fe.header,
							children: ["Dashboard Configuration", (0, $.jsx)(u.F.Fragment, {
								children: h.view((function(e) {
									return !e || l || s ? null : (0, $.jsx)(Le.Q, {
										variation: "default",
										size: "small",
										target: "_self",
										href: "/upgrade",
										className: Fe.hook,
										onClick: function() {
											return (0, Q.j)("upgradeHookClicked", {
												location: "configMenu"
											})
										},
										children: "Upgrade to Pro"
									})
								}))
							}), (0, $.jsx)("span", {
								onClick: n,
								className: Fe.closeBtn,
								children: "\u2715"
							})]
						}), (0, $.jsxs)("div", Re(Re({}, (0, d.Sh)(Fe.contentWrap, l && Fe.anonymous)), {}, {
							style: l && s ? {
								overflow: "hidden"
							} : void 0,
							children: [l ? (0, $.jsx)("div", Re(Re({}, (0, d.Sh)(Fe.anonymousHook)), {}, {
								children: a
							})) : null, (0, $.jsx)("div", Re(Re({}, (0, d.Sh)(Fe.marketsSelector)), {}, {
								children: r
							})), (0, $.jsx)("div", Re(Re({}, (0, d.Sh)(Fe.advancedConfigWrap)), {}, {
								children: (0, $.jsx)("div", Re(Re({}, (0, d.Sh)(Fe.advancedConfig)), {}, {
									children: i
								}))
							}))]
						}))]
					}))
				},
				He = n(6913),
				Be = n.n(He),
				Ne = n(9716);

			function Ve(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}
			var Ue = Be(),
				We = function(e) {
					var t = e.coin,
						n = e.isFreeUser,
						i = e.activeMarkets,
						o = e.coinConfig,
						a = q(o.markets);
					return (0, $.jsxs)(u.F.div, {
						className: Ue.wrap,
						children: [(0, $.jsx)(u.F.h3, {
							children: t
						}), c.h.combine(i, n, (function(e, t) {
							return a.map((function(n, a) {
								var s = n.exchange,
									l = n.markets;
								return (0, $.jsxs)("div", {
									className: Ue.row,
									children: [(0, $.jsxs)("div", {
										className: Ue.exchange,
										children: [(0, $.jsx)(Ne.D, {
											w: 18,
											h: 18,
											exchange: s
										}), " ", s]
									}), (0, $.jsx)("div", {
										className: Ue.markets,
										children: l.map((function(n, a) {
											return (0, $.jsx)(u.F.span, function(e) {
												for (var t = 1; t < arguments.length; t++) {
													var n = null != arguments[t] ? arguments[t] : {};
													t % 2 ? Ve(Object(n), !0).forEach((function(t) {
														(0, r.Z)(e, t, n[t])
													})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach((function(t) {
														Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
													}))
												}
												return e
											}({
												onClick: function() {
													return (n.isFree || !t) && (e = i, r = s, o.coin, a = n.symbol, e.modify((function(e) {
														var t = Array.from(e),
															n = t.findIndex((function(e) {
																return e.symbol === a && e.exchange === r
															}));
														return n < 0 ? t.push({
															exchange: r,
															symbol: a
														}) : t.splice(n, 1), t
													})));
													var e, r, a
												},
												dangerouslySetInnerHTML: {
													__html: n.symbol.replace(/-/g, "&#8209;")
												}
											}, (0, d.Sh)(!n.isFree && t && Ue.locked, e.some((function(e) {
												return e.exchange === n.exchange && e.symbol === n.symbol
											})) && Ue.active, Ue.item)), a)
										}))
									})]
								}, a)
							}))
						}))]
					})
				},
				ze = n(3535);

			function Ge(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function qe(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ge(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ge(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Ye = n.n(ze)(),
				Xe = function() {
					return (0, $.jsxs)("div", {
						className: Ye.hookContent,
						children: [(0, $.jsx)("div", {
							className: Ye.title,
							children: "Welcome \ud83d\udc4b"
						}), (0, $.jsxs)("p", {
							className: Ye.description,
							children: ["Enjoy Bitcoin and Ethereum dashboards anonymously.", (0, $.jsx)("br", {}), "To unlock more coins and configuration you\u02bcll need an account."]
						}), (0, $.jsx)(Le.Q, {
							size: "medium",
							target: "_self",
							href: "/signup?redirect=".concat(window.location.pathname),
							children: "Create an Account"
						}), (0, $.jsx)("span", qe(qe({}, (0, d.Sh)(Ye.or)), {}, {
							children: "or"
						})), (0, $.jsx)(K.r, {
							target: "_self",
							href: "/signin?redirect=".concat(window.location.pathname),
							children: "Sign in"
						})]
					})
				},
				Je = function(e) {
					var t = e.defaultSnapshotConfig,
						n = e.defaultFeedsConfig,
						r = e.currentConfig,
						i = e.snapshotConfig,
						o = e.feedsConfig,
						a = e.uiConfig,
						s = e.theme,
						l = e.user,
						u = e.coin,
						d = e.onCloseClick,
						h = e.coinConfig,
						f = e.isPopup,
						g = e.isX,
						v = l ? l.view("plan").view((function(e) {
							return e === E.mr.free
						})) : c.h.create(!0);
					return (0, $.jsx)(Ee, {
						user: l,
						onCloseClick: d,
						hook: (0, $.jsx)(Xe, {}),
						isPopup: f,
						marketSelector: (0, $.jsx)(We, {
							coin: u,
							coinConfig: h,
							isFreeUser: v,
							activeMarkets: r
						}),
						advancedConfiguration: (0, $.jsx)(Pe, {
							isX: g,
							uiConfig: a,
							theme: s,
							feedsConfig: o,
							defaultFeedsConfig: n,
							defaultSnapshotConfig: t,
							snapshotConfig: i,
							isFreeUser: v,
							isPopup: f
						})
					})
				},
				Qe = n(7589),
				Ke = n.n(Qe)(),
				$e = function(e) {
					var t = e.state;
					return (0, $.jsx)(u.F.Fragment, {
						children: t.view((function(e) {
							return e ? null : (0, $.jsx)("div", {
								className: Ke.shadow,
								children: (0, $.jsx)("div", {
									className: Ke.notification,
									children: "Looks like you lost your connection. We are trying to reconnect\u2026"
								})
							})
						}))
					})
				},
				et = function(e) {
					var t = e.state,
						n = (0, x.useState)(!1),
						r = n[0],
						i = n[1];
					return t.subscribe((function(e) {
						r || "suspended" !== e && i(!0)
					})), (0, x.useEffect)((function() {
						if (localStorage.getItem("okotoki-sound")) {
							var e = function() {
								i(!0)
							};
							return document.addEventListener("click", e),
								function() {
									document.removeEventListener("click", e)
								}
						}
						i(!0)
					}), []), (0, $.jsx)(u.F.Fragment, {
						children: r ? null : (0, $.jsx)("div", {
							className: Ke.shadow,
							children: (0, $.jsx)("div", {
								className: Ke.notification,
								children: "\ud83d\udd07 Sounds muted by default. Click anywhere to unmute"
							})
						})
					})
				},
				tt = n(1006),
				nt = n.n(tt),
				rt = n(7027),
				it = n(1558);
			n(7064), n(1227), n(7424);
			var ot = n(748),
				at = n(1531),
				st = n(3553),
				lt = n(7247);
			Math.random();
			n(1876).Buffer;
			n(1876).Buffer;
			var ct, ut = function(e) {
				return "binance" === e || "binance-\u24b9" === e || "binance-\u24bb" === e
			};
			! function(e) {
				e.Trade = "com.okotoki.model.Trade", e.Index = "com.okotoki.model.Index", e.Price = "com.okotoki.model.Price", e.TradesVolume = "com.okotoki.model.TradesVolume", e.BookChange = "com.okotoki.model.BookChange"
			}(ct || (ct = {}));
			var dt = n(7417),
				ht = n.n(dt),
				ft = n(4221),
				gt = n(9022),
				vt = n(2020);

			function pt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function mt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? pt(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var xt = ht(),
				bt = function(e) {
					var t = e.popup,
						n = e.coinConfig,
						r = e.marketsToAggregate,
						i = e.activeMarkets,
						o = e.aggregationId,
						a = e.isFreeUser,
						s = c.h.create([]),
						l = c.h.create([]),
						h = c.h.create([]),
						f = c.h.create(!1),
						g = c.h.create(null),
						v = i.view((function(e) {
							return e.filter((function(e) {
								return void 0 !== e.aggregationId
							}))
						})),
						p = i.view((function(e) {
							return e.filter((function(e) {
								return void 0 === e.aggregationId
							})).filter((function(e) {
								return "spot" === Y(e, n).marketType
							}))
						})),
						m = c.h.create(""),
						b = function(e) {
							switch (!0) {
								case e.includes("USD") || e.includes("PAX") || e.includes("UST") || e.includes("DAI"):
									g.set("USD");
									break;
								case e.includes("EUR"):
									g.set("EUR");
									break;
								case e.includes("GBP"):
									g.set("GBP");
									break;
								case e.includes("AUD"):
									g.set("AUD");
									break;
								default:
									g.set(null)
							}
						};
					r.subscribe((function(e) {
						if (s.set((0, C.Z)(e)), e.map((function(e) {
								var t = e.exchange,
									n = e.symbol;
								l.modify((function(e) {
									var r = Array.from(e),
										i = e.findIndex((function(e) {
											return e.symbol === n && e.exchange === t
										}));
									return r.splice(i, 1), r
								}))
							})), !g.get() && e.length) {
							var t = Y(e[0], n).quote;
							b(t)
						} else g.set(null)
					})), l.modify((function(e) {
						var t = (0, C.Z)(e);
						return n.markets.map((function(e) {
							var n = e.exchange,
								r = e.symbol;
							return t.push({
								exchange: n,
								symbol: r
							})
						})), t
					}));
					var y = c.h.combine(m, l, g, s, v, (function(e, t, n, r, i) {
							return [e, t, n, r, i]
						})).view((function(e) {
							var t = (0, M.Z)(e, 4),
								r = t[0],
								i = t[1],
								o = t[2],
								s = t[3],
								l = new ft.Z(i, {
									keys: ["symbol", "exchange"],
									threshold: .3,
									minMatchCharLength: 2
								});
							return r ? l.search(r).filter((function(e) {
								return !a || Y(e.item, n).isFree
							})).map((function(e) {
								return e.item
							})).map((function(e) {
								return "spot" !== Y(e, n).marketType || o && !(0, vt.NH)(Y(e, n).quote, o) || s.some((function(t) {
									return t.exchange === e.exchange && t.symbol === e.symbol
								})) ? mt(mt({}, e), {}, {
									disabled: !0
								}) : mt(mt({}, e), {}, {
									disabled: !1
								})
							})) : i.filter((function(e) {
								return !a || Y(e, n).isFree
							})).map((function(e) {
								return "spot" !== Y(e, n).marketType || o && !(0, vt.NH)(Y(e, n).quote, o) || s.some((function(t) {
									return t.exchange === e.exchange && t.symbol === e.symbol
								})) ? mt(mt({}, e), {}, {
									disabled: !0
								}) : mt(mt({}, e), {}, {
									disabled: !1
								})
							}))
						})),
						_ = function(e) {
							var t = e.exchange,
								n = e.symbol,
								r = h.get().findIndex((function(e) {
									return e.symbol === n && e.exchange === t
								}));
							r >= 0 && h.modify((function(e) {
								var t = (0, C.Z)(e);
								return t.splice(r, 1), t
							})), s.modify((function(e) {
								var r = (0, C.Z)(e);
								return r.push({
									exchange: t,
									symbol: n
								}), r
							})), f.set(!1), w()
						},
						w = function() {
							var e = s.get(),
								t = h.get();
							if (i.modify((function(e) {
									var n = (0, C.Z)(e);
									return t.map((function(e) {
										var t = e.exchange,
											r = e.symbol,
											i = n.findIndex((function(e) {
												return e.exchange === t && e.symbol === r
											})),
											o = mt({}, n[i]);
										delete o.aggregationId, n[i] = o
									})), n
								})), i.modify((function(t) {
									var n = Array.from(t);
									return e.map((function(e) {
										var t = e.exchange,
											r = e.symbol,
											i = n.findIndex((function(e) {
												return e.symbol === r && e.exchange === t
											}));
										if (i < 0) n.push({
											exchange: t,
											symbol: r,
											aggregationId: o.get()
										});
										else {
											var a = mt({}, n[i]);
											a.aggregationId = o.get(), n[i] = a
										}
									})), n
								})), s.get().length) {
								var r = Y(s.get()[0], n).quote;
								b(r)
							} else g.set(null)
						};
					return (0, x.useEffect)((function() {
						var e = t.subscribe((function(e) {
							return !e && m.set("")
						}));
						return function() {
							return e.unsubscribe()
						}
					}), []), (0, $.jsx)(u.F.Fragment, {
						children: t.view((function(e) {
							return "aggregated-markets-selector" === e ? (0, $.jsx)(gt.Vq, {
								popup: t,
								children: (0, $.jsxs)("div", {
									className: xt.aggregatedMarketsSelector,
									children: [(0, $.jsxs)("div", {
										className: xt.header,
										children: ["Select markets to aggregate", (0, $.jsx)("span", {
											className: xt.closeBtn,
											onClick: function() {
												r.set([]), l.set([]), l.modify((function(e) {
													var t = (0, C.Z)(e);
													return n.markets.map((function(e) {
														var n = e.exchange,
															r = e.symbol;
														return t.push({
															exchange: n,
															symbol: r
														})
													})), t
												})), s.set([]), g.set(null), t.set(null), o.set(NaN)
											},
											children: "\u2715"
										})]
									}), (0, $.jsxs)(u.F.div, {
										className: xt.badgesBlock,
										children: [s.view((function(e) {
											return e.map((function(e, t) {
												var n = e.exchange,
													r = e.symbol;
												return (0, $.jsxs)(u.F.div, {
													className: xt.badge,
													children: [(0, $.jsx)(Ne.D, {
														className: xt.exchangeIcon,
														exchange: n,
														w: 20,
														h: 20
													}), n, "/", r, (0, $.jsx)("span", {
														onClick: function() {
															return function(e) {
																var t = e.exchange,
																	n = e.symbol;
																s.modify((function(e) {
																	var r = (0, C.Z)(e),
																		i = r.findIndex((function(e) {
																			return e.symbol === n && e.exchange === t
																		}));
																	return l.modify((function(e) {
																		var r = (0, C.Z)(e);
																		return r.push({
																			exchange: t,
																			symbol: n
																		}), r
																	})), h.modify((function(e) {
																		var r = (0, C.Z)(e);
																		return r.push({
																			exchange: t,
																			symbol: n
																		}), r
																	})), r.splice(i, 1), r
																})), w()
															}({
																exchange: n,
																symbol: r
															})
														},
														className: xt.closeBtn,
														children: "\u2715"
													})]
												}, t)
											}))
										})), (0, $.jsx)(u.F.div, {
											className: xt.badge,
											children: f.view((function(e) {
												return e ? (0, $.jsx)("div", {
													className: xt.aggregatedMarketSearch,
													children: (0, $.jsx)(u.F.input, mt(mt({}, (0, d.ak)({
														value: m
													})), {}, {
														type: "search",
														autoFocus: !0,
														placeholder: "Search..."
													}))
												}) : (0, $.jsx)("div", {
													onClick: function() {
														return f.set(!0)
													},
													className: xt.addMarket,
													children: "+"
												})
											}))
										})]
									}), (0, $.jsxs)(u.F.div, {
										className: xt.markets,
										children: [c.h.combine(p, s, g, (function(e, t, n) {
											return [e, t, n]
										})).view((function(e) {
											var t = (0, M.Z)(e, 3),
												r = t[0],
												i = t[1],
												o = t[2];
											return r.filter((function(e) {
												return !i.some((function(t) {
													return t.exchange === e.exchange && t.symbol === e.symbol
												}))
											})).filter((function(e) {
												return (0, vt.NH)(Y(e, n).quote, o)
											})).map((function(e, t) {
												return (0, $.jsxs)("div", {
													style: {
														cursor: "pointer",
														userSelect: "none"
													},
													className: xt.activeMarket,
													onClick: function() {
														return _(e)
													},
													children: [(0, $.jsx)(Ne.D, {
														className: xt.exchangeIcon,
														exchange: e.exchange,
														w: 20,
														h: 20
													}), e.exchange, "/", e.symbol]
												}, t)
											}))
										})), c.h.combine(y, p, (function(e, t) {
											return [e, t]
										})).view((function(e) {
											var t = (0, M.Z)(e, 2),
												n = t[0],
												r = t[1];
											return n.sort((function(e, t) {
												return e.exchange.localeCompare(t.exchange)
											})).sort((function(e, t) {
												return +e.disabled - +t.disabled
											})).filter((function(e) {
												return !r.some((function(t) {
													return t.exchange === e.exchange && t.symbol === e.symbol
												}))
											})).map((function(e, t) {
												return (0, $.jsxs)("div", {
													style: {
														cursor: e.disabled ? "auto" : "pointer",
														userSelect: "none"
													},
													className: e.disabled ? xt.disabled : void 0,
													onClick: function() {
														return e.disabled ? null : _(e)
													},
													children: [(0, $.jsx)(Ne.D, {
														className: xt.exchangeIcon,
														exchange: e.exchange,
														w: 20,
														h: 20
													}), e.exchange, "/", e.symbol]
												}, t)
											}))
										}))]
									})]
								})
							}) : null
						}))
					})
				},
				yt = n(510),
				_t = n.n(yt),
				wt = n(6767),
				jt = n.n(wt),
				Ct = n(1740);

			function kt(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return St(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return St(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						s = !0, o = e
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function St(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Ot(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Pt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ot(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Tt(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = (0, lt.Z)(e);
					if (t) {
						var i = (0, lt.Z)(this).constructor;
						n = Reflect.construct(r, arguments, i)
					} else n = r.apply(this, arguments);
					return (0, st.Z)(this, n)
				}
			}
			var Mt = _t(),
				At = (0, Z.Z)((function e(t) {
					(0, A.Z)(this, e), (0, r.Z)(this, "scale", void 0), (0, r.Z)(this, "ROW_WIDTH", void 0), (0, r.Z)(this, "ROW_HEIGHT", void 0), (0, r.Z)(this, "PRICE_WIDTH", void 0), (0, r.Z)(this, "HEATMAP_WIDTH", void 0), (0, r.Z)(this, "HEATMAP_MARGIN_LEFT", void 0), (0, r.Z)(this, "HEATMAP_MARGIN_RIGHT", void 0), (0, r.Z)(this, "AMOUNT_WIDTH", void 0), (0, r.Z)(this, "FONT", '"Source Code Pro", monospace'), (0, r.Z)(this, "FONT_SIZE", void 0), this.scale = t, this.ROW_WIDTH = 200 * this.scale, this.ROW_HEIGHT = 16 * this.scale, this.PRICE_WIDTH = 60 * this.scale, this.HEATMAP_WIDTH = this.ROW_HEIGHT, this.HEATMAP_MARGIN_LEFT = 10 * this.scale, this.HEATMAP_MARGIN_RIGHT = 10 * this.scale, this.AMOUNT_WIDTH = this.ROW_WIDTH - this.PRICE_WIDTH - this.HEATMAP_MARGIN_LEFT - this.HEATMAP_WIDTH - this.HEATMAP_MARGIN_RIGHT, this.FONT_SIZE = 12 * this.scale
				})),
				Zt = function() {
					function e(t, n) {
						var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
						(0, A.Z)(this, e), this.chart = t, this.duration = i, (0, r.Z)(this, "from", void 0), (0, r.Z)(this, "to", void 0), (0, r.Z)(this, "lastUpdate", void 0), this.from = this.to = n, this.lastUpdate = Date.now() - this._duration()
					}
					return (0, Z.Z)(e, [{
						key: "updateIfChanged",
						value: function(e) {
							this.to !== e && this.update(e)
						}
					}, {
						key: "update",
						value: function(e) {
							this.from = this.get(), this.to = e, this.lastUpdate = Date.now()
						}
					}, {
						key: "t",
						value: function() {
							return Math.max(0, Math.min(1, (Date.now() - this.lastUpdate) / this._duration()))
						}
					}, {
						key: "_duration",
						value: function() {
							var e, t;
							return this.duration * (null !== (e = this.chart) && void 0 !== e && null !== (t = e.props) && void 0 !== t && t.isTurboMode ? .3 : 1)
						}
					}, {
						key: "get",
						value: function() {
							return this.from + (this.to - this.from) * this.t()
						}
					}, {
						key: "active",
						value: function() {
							return this.t() < 1
						}
					}]), e
				}(),
				Dt = function(e) {
					(0, at.Z)(n, e);
					var t = Tt(n);

					function n() {
						var e;
						(0, A.Z)(this, n);
						for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
						return e = t.call.apply(t, [this].concat(o)), (0, r.Z)((0, ot.Z)(e), "D", new At(1)), (0, r.Z)((0, ot.Z)(e), "isGL", !0), (0, r.Z)((0, ot.Z)(e), "S", 1), (0, r.Z)((0, ot.Z)(e), "W", 0), (0, r.Z)((0, ot.Z)(e), "H", 0), (0, r.Z)((0, ot.Z)(e), "scrollY", 0), (0, r.Z)((0, ot.Z)(e), "hoverSnapshotIndex", -1), (0, r.Z)((0, ot.Z)(e), "hoverLevelIndex", -1), (0, r.Z)((0, ot.Z)(e), "container", null), (0, r.Z)((0, ot.Z)(e), "scrollContainer", null), (0, r.Z)((0, ot.Z)(e), "dummyContainer", null), (0, r.Z)((0, ot.Z)(e), "canvas", null), (0, r.Z)((0, ot.Z)(e), "ctx", null), (0, r.Z)((0, ot.Z)(e), "gl", null), (0, r.Z)((0, ot.Z)(e), "lastPriceTransitions", []), (0, r.Z)((0, ot.Z)(e), "transitions", []), (0, r.Z)((0, ot.Z)(e), "aggregatedTransitions", {}), (0, r.Z)((0, ot.Z)(e), "bgColor", jt()("white")), (0, r.Z)((0, ot.Z)(e), "mainContrast", jt()("blue")), (0, r.Z)((0, ot.Z)(e), "textColor", jt()("black")), (0, r.Z)((0, ot.Z)(e), "redColor", jt()("red")), (0, r.Z)((0, ot.Z)(e), "greenColor", jt()("green")), (0, r.Z)((0, ot.Z)(e), "mainColor", jt()("yellow")), (0, r.Z)((0, ot.Z)(e), "depthLevelColor", jt()("#adadad")), (0, r.Z)((0, ot.Z)(e), "initColors", (function() {
							e.bgColor = e.getThemeColor("--bgColor"), e.mainContrast = e.getThemeColor("--mainContrast"), e.redColor = e.getThemeColor("--redColor"), e.textColor = e.getThemeColor("--textColor"), e.mainColor = e.getThemeColor("--mainColor"), e.greenColor = e.getThemeColor("--greenColor")
						})), (0, r.Z)((0, ot.Z)(e), "animationDrawing", !1), (0, r.Z)((0, ot.Z)(e), "draw", (function() {
							e.__clearAll(), e.animationDrawing = e.__draw(), e.animationDrawing ? requestAnimationFrame(e.draw) : e.invalidated = !1
						})), (0, r.Z)((0, ot.Z)(e), "invalidated", !1), (0, r.Z)((0, ot.Z)(e), "resize", (function() {
							if (e.preserveScroll(), e.canvas) {
								var t = e.canvas.parentElement;
								if (e.S = window.devicePixelRatio, e.D.scale !== e.S && (e.D = new At(e.S)), t) {
									var n = e._getCanvasWidth();
									e.canvas.width = e.W = n * e.S, e.canvas.height = e.H = t.clientHeight * e.S, e.canvas.style.width = n + "px"
								}
							}
							e.props.canvasInfo.set({
								rowWidth: e.D.ROW_WIDTH,
								canvasHeight: e.H,
								scale: e.S
							}), e.__update_size(), e.invalidate()
						})), (0, r.Z)((0, ot.Z)(e), "updateCursor", (function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
							e.container && (e.container.style.cursor = t)
						})), (0, r.Z)((0, ot.Z)(e), "mouseX", 0), (0, r.Z)((0, ot.Z)(e), "mouseY", 0), (0, r.Z)((0, ot.Z)(e), "updateHover", (function() {
							var t = Math.floor(e.mouseX / e.D.ROW_WIDTH),
								n = e.props.inverse ? e.props.count - Math.floor(e.mouseY / e.D.ROW_HEIGHT) - 1 : Math.floor(e.mouseY / e.D.ROW_HEIGHT);
							(t < 0 || t >= e.props.snapshots.length || n < 0 || n >= e.props.count) && (t = n = -1);
							var r = e.hoverOverDepthLevel;
							e.hoverOverDepthLevel = Math.abs(e.mouseY - e.depthLevelLineY() - e.scrollY) < 4 * e.S, e.hoverOverDepthLevel ? (e.updateCursor("row-resize"), t = n = -1) : -1 != t && -1 != n && e.props.onColumnClick ? e.updateCursor("pointer") : e.updateCursor(), e.updateHoverState(t, n), r != e.hoverOverDepthLevel && e.invalidate()
						})), (0, r.Z)((0, ot.Z)(e), "hoverOverDepthLevel", !1), (0, r.Z)((0, ot.Z)(e), "depthLevelDragFrom", -1), (0, r.Z)((0, ot.Z)(e), "depthLevelDragFromY", -1), (0, r.Z)((0, ot.Z)(e), "handleMouseMove", (function(t) {
							if (e.mouseX = t.offsetX * e.S, e.mouseY = t.offsetY * e.S, e.mouseDown && -1 != e.depthLevelDragFrom) {
								var n = e.props.inverse ? e.depthLevelDragFromY - e.mouseY : e.mouseY - e.depthLevelDragFromY,
									r = Math.max(1, Math.round(e.depthLevelDragFrom + n / e.D.ROW_HEIGHT));
								e.depthLevels != r && e.props.depthLevels.modify((function() {
									return r
								}))
							} else e.updateHover()
						})), (0, r.Z)((0, ot.Z)(e), "handleMouseLeave", (function() {
							e.updateHoverState(-1, -1)
						})), (0, r.Z)((0, ot.Z)(e), "handleClick", (function(t) {
							var n, r, i = t.offsetX * e.S,
								o = t.offsetY * e.S,
								a = Math.floor(i / e.D.ROW_WIDTH),
								s = Math.floor(o / e.D.ROW_HEIGHT); - 1 != a && -1 != s && e.props.onColumnClick && e.props.onColumnClick(e.props.snapshots[a], null === (n = e.props.snapshots[a]) || void 0 === n || null === (r = n[e.props.type]) || void 0 === r ? void 0 : r[s], a, s)
						})), (0, r.Z)((0, ot.Z)(e), "mouseDown", !1), (0, r.Z)((0, ot.Z)(e), "handleMouseDown", (function(t) {
							e.mouseDown = !0, document.documentElement.classList.add(Mt.noSelect);
							var n = t.offsetY * e.S;
							Math.abs(n - e.depthLevelLineY() - e.scrollY) < 4 * e.S && (e.depthLevelDragFrom = e.depthLevels, e.depthLevelDragFromY = n)
						})), (0, r.Z)((0, ot.Z)(e), "handleMouseUp", (function() {
							e.mouseDown = !1, document.documentElement.classList.remove(Mt.noSelect), e.depthLevelDragFrom = -1, e.depthLevelDragFromY = -1
						})), (0, r.Z)((0, ot.Z)(e), "scrollFromBottom", 0), (0, r.Z)((0, ot.Z)(e), "handleScroll", (function() {
							var t, n, r, i;
							e.scrollContainer && (e.updateScroll((null !== (t = null === (n = e.scrollContainer) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== t ? t : 0) * e.S), e.scrollFromBottom = (null !== (r = null === (i = e.scrollContainer) || void 0 === i ? void 0 : i.scrollHeight) && void 0 !== r ? r : 0) - (e.scrollY + e.H) / e.S)
						})), (0, r.Z)((0, ot.Z)(e), "updateScroll", (function(t) {
							e.scrollY !== t && (e.mouseY += t - e.scrollY, e.scrollY = t, e.updateHover(), e.invalidate())
						})), (0, r.Z)((0, ot.Z)(e), "depthLevels", 0), (0, r.Z)((0, ot.Z)(e), "isDarkerDark", !1), (0, r.Z)((0, ot.Z)(e), "colorSubscription", void 0), (0, r.Z)((0, ot.Z)(e), "isDraggingSubscription", void 0), (0, r.Z)((0, ot.Z)(e), "customColorSubscription", void 0), (0, r.Z)((0, ot.Z)(e), "depthLevelsSubscription", void 0), (0, r.Z)((0, ot.Z)(e), "initCanvas", (function(t) {
							if (e.initColors(), null !== e.canvas && e.__destroy(), e.canvas = t, "webgl" === e.props.renderer) {
								var n, r, i, o, a, s, l = {
									antialias: !0,
									alpha: !1,
									depth: !1
								};
								e.gl = null !== (n = null !== (r = null === (i = e.canvas) || void 0 === i || null === (o = i.getContext) || void 0 === o ? void 0 : o.call(i, "webgl2", l)) && void 0 !== r ? r : null === (a = e.canvas) || void 0 === a || null === (s = a.getContext) || void 0 === s ? void 0 : s.call(a, "webgl", l)) && void 0 !== n ? n : null, e.isGL = !(null == e.gl || !e.__init())
							} else e.isGL = !1;
							var c, u, d;
							e.isGL || (e.isGL = !1, e.ctx = null !== (c = null === (u = e.canvas) || void 0 === u || null === (d = u.getContext) || void 0 === d ? void 0 : d.call(u, "2d")) && void 0 !== c ? c : null, e.__init());
							e.props.canvasInfo.set({
								rowWidth: e.D.ROW_WIDTH,
								canvasHeight: e.H,
								scale: e.S
							}), e.resize()
						})), (0, r.Z)((0, ot.Z)(e), "lastSnapshotsCount", void 0), (0, r.Z)((0, ot.Z)(e), "groupingDigits", 0), (0, r.Z)((0, ot.Z)(e), "wasRenderer", void 0), (0, r.Z)((0, ot.Z)(e), "shaders", []), (0, r.Z)((0, ot.Z)(e), "textProgram", null), (0, r.Z)((0, ot.Z)(e), "textProgramPosition", 0), (0, r.Z)((0, ot.Z)(e), "textProgramTextureCoord", 0), (0, r.Z)((0, ot.Z)(e), "textProgramResolution", null), (0, r.Z)((0, ot.Z)(e), "textProgramTexture", null), (0, r.Z)((0, ot.Z)(e), "textVertexBuffer", null), (0, r.Z)((0, ot.Z)(e), "textIndexBuffer", null), (0, r.Z)((0, ot.Z)(e), "textUVBuffer", null), (0, r.Z)((0, ot.Z)(e), "rectProgramPosition", 0), (0, r.Z)((0, ot.Z)(e), "rectProgramResolution", null), (0, r.Z)((0, ot.Z)(e), "rectProgramColor", null), (0, r.Z)((0, ot.Z)(e), "rectProgram", null), (0, r.Z)((0, ot.Z)(e), "rectVertexBuffer", null), (0, r.Z)((0, ot.Z)(e), "rectIndexBuffer", null), (0, r.Z)((0, ot.Z)(e), "SYMBOL_WIDTH", 0), (0, r.Z)((0, ot.Z)(e), "SYMBOL_HEIGHT", 0), (0, r.Z)((0, ot.Z)(e), "fontTextureSize", 0), (0, r.Z)((0, ot.Z)(e), "fontColor", ""), (0, r.Z)((0, ot.Z)(e), "fontTexture", null), (0, r.Z)((0, ot.Z)(e), "indices", new Uint16Array), (0, r.Z)((0, ot.Z)(e), "rectVerticesArray", new Float32Array), (0, r.Z)((0, ot.Z)(e), "rectVertices", []), (0, r.Z)((0, ot.Z)(e), "rectColors", []), (0, r.Z)((0, ot.Z)(e), "textVerticesArray", new Float32Array), (0, r.Z)((0, ot.Z)(e), "textVertices", []), (0, r.Z)((0, ot.Z)(e), "textUV", []), (0, r.Z)((0, ot.Z)(e), "__draw", (function() {
							e.__frameStart();
							for (var t = !1, n = e.depthLevelLineY(), r = e.props.count * e.D.ROW_HEIGHT, i = 0, o = function(o) {
									var a = e.props.snapshots[o];
									if (a)
										if (Array.isArray(a)) {
											var s = function() {
												var s, l = e.aggregatedTransitions,
													c = e.props.currentHoveredSymbol.get(),
													u = l[o] = null !== (s = l[o]) && void 0 !== s ? s : {},
													d = a.reduce((function(e, t) {
														return e + t.maxAmount
													}), 0);
												if (a.every((function(e) {
														return !!e
													}))) {
													var h = function() {
														var s, l, h, g, v, p = o * e.D.ROW_WIDTH + i,
															m = null !== (s = null === (l = a[0][e.props.type]) || void 0 === l || null === (h = l[(null === (g = a[0][e.props.type]) || void 0 === g ? void 0 : g.length) - 1]) || void 0 === h ? void 0 : h.price) && void 0 !== s ? s : 0,
															x = e.lastPriceTransitions[o] = null !== (v = e.lastPriceTransitions[o]) && void 0 !== v ? v : new Zt((0, ot.Z)(e), m, 250);
														x.updateIfChanged(m);
														var b = (m - x.get()) / e.props.aggregationGrouping * e.D.ROW_HEIGHT,
															y = e.props.count,
															_ = Math.max(0, e.props.inverse ? y - Math.floor((e.scrollY + e.H + b) / e.D.ROW_HEIGHT) - 1 : Math.floor((e.scrollY + b) / e.D.ROW_HEIGHT)),
															w = Math.min(a[0][e.props.type].length - 1, _ + Math.ceil((e.H - b) / e.D.ROW_HEIGHT)),
															j = 0;
														i += e.D.ROW_WIDTH;
														for (var C = function(i) {
																var s = e.props.inverse ? (r > e.H ? r - e.scrollY : e.H) - (i + 1) * e.D.ROW_HEIGHT + b : i * e.D.ROW_HEIGHT - e.scrollY + b,
																	l = a.length,
																	h = f().groupBy(a.filter((function(e) {
																		return e.asks.length && e.bids.length
																	})), "exchange"),
																	g = 0,
																	v = 0;
																Object.keys(h).map((function(r) {
																	var a = h[r];
																	a.map((function(t, n) {
																		return Pt(Pt({}, t[e.props.type][i]), {}, {
																			index: n
																		})
																	})).map((function(r, d) {
																		var h, f, m, x, b, y, _, w;
																		if (r) {
																			u[r.price] = u[r.price] ? u[r.price] : [];
																			var j = u[r.price][d],
																				C = a[r.index],
																				k = C.minAmount,
																				S = C.maxAmount,
																				O = C.maxTotalAtDepth,
																				P = C.exchange,
																				T = C.symbol,
																				M = S - k,
																				A = (r.amount - k) / M,
																				Z = i >= e.depthLevels ? null !== (h = null === (f = j) || void 0 === f || null === (m = f.get) || void 0 === m ? void 0 : m.call(f)) && void 0 !== h ? h : 1 : Math.min(1, "heatmap" === e.props.levelVolumeRenderingMode ? r.totalAmount / O : A);
																			null === (b = j = u[r.price][d] = null !== (x = u[r.price][d]) && void 0 !== x ? x : new Zt((0, ot.Z)(e), Z)) || void 0 === b || null === (y = b.updateIfChanged) || void 0 === y || y.call(b, Z), (null === (_ = j) || void 0 === _ || null === (w = _.active) || void 0 === w ? void 0 : w.call(_)) && (t = !0), e.__drawAggregatedLevel(p + v + e.D.AMOUNT_WIDTH * g * 3, s, 1, j.get() / l * 3, (o === e.hoverSnapshotIndex || o + 1 === e.hoverSnapshotIndex) && i === e.hoverLevelIndex, n, d, !!c && (c.exchange === P && !c.symbol && c.aggregationId === o || c.exchange === P && c.symbol === T && c.aggregationId === o)), g = j.get() / l + g
																		}
																	})), v += 3
																}));
																var m = a.map((function(t) {
																	var n;
																	return null === (n = t[e.props.type][i]) || void 0 === n ? void 0 : n.amount
																})).filter((function(e) {
																	return e
																})).reduce((function(e, t) {
																	return e + t
																}), 0);
																if (j += m, !a[0][e.props.type][i]) return {
																	v: {
																		v: {
																			v: {
																				v: void 0
																			}
																		}
																	}
																};
																var x = a[0][e.props.type][i].price,
																	y = m / d;
																e.__drawRow(p, s, 1, {
																	amount: m,
																	totalAmount: j,
																	price: x,
																	diffToPrev: 0
																}, y, 0, (o === e.hoverSnapshotIndex || o + 1 === e.hoverSnapshotIndex) && i === e.hoverLevelIndex, n, !0)
															}, k = _; k <= w; k++) {
															var S = C(k);
															if ("object" === typeof S) return S.v
														}
													}();
													if ("object" === typeof h) return h.v
												}
											}();
											if ("object" === typeof s) return s.v
										} else {
											var l, c, u, d, h = e.transitions[o] = null !== (l = e.transitions[o]) && void 0 !== l ? l : {},
												g = a.minAmount,
												v = a.maxAmount,
												p = a.maxTotalAtDepth,
												m = v - g,
												x = a[e.props.type],
												b = null !== (c = null === x || void 0 === x || null === (u = x[(null === x || void 0 === x ? void 0 : x.length) - 1]) || void 0 === u ? void 0 : u.price) && void 0 !== c ? c : 0,
												y = e.lastPriceTransitions[o] = null !== (d = e.lastPriceTransitions[o]) && void 0 !== d ? d : new Zt((0, ot.Z)(e), b, 250);
											y.updateIfChanged(b), !t && y.active() && (t = !0);
											for (var _ = (b - y.get()) / e.props.aggregationGrouping * e.D.ROW_HEIGHT, w = e.props.count, j = Math.max(0, e.props.inverse ? w - Math.floor((e.scrollY + e.H + _) / e.D.ROW_HEIGHT) - 1 : Math.floor((e.scrollY + _) / e.D.ROW_HEIGHT)), C = Math.min(x.length - 1, j + Math.ceil((e.H - _) / e.D.ROW_HEIGHT)), k = o * e.D.ROW_WIDTH + i, S = j; S <= C; S++) {
												var O, P, T, M, A, Z, D, L, I = x[S],
													R = h[I.price],
													F = Y({
														exchange: a.exchange,
														symbol: a.symbol
													}, e.props.coinConfig).marketType,
													E = "crossExchange" === e.props.heatmapMode.get() && "spot" === F ? e.props.maxSpotLevelTotal.get() : m,
													H = (I.amount - g) / E,
													B = S >= e.depthLevels ? null !== (O = null === (P = R) || void 0 === P || null === (T = P.get) || void 0 === T ? void 0 : T.call(P)) && void 0 !== O ? O : 1 : Math.min(1, "heatmap" === e.props.levelVolumeRenderingMode ? I.totalAmount / p : H);
												null === (A = R = h[I.price] = null !== (M = h[I.price]) && void 0 !== M ? M : new Zt((0, ot.Z)(e), B)) || void 0 === A || null === (Z = A.updateIfChanged) || void 0 === Z || Z.call(A, B);
												var N = e.props.inverse ? (r > e.H ? r - e.scrollY : e.H) - (S + 1) * e.D.ROW_HEIGHT + _ : S * e.D.ROW_HEIGHT - e.scrollY + _;
												(null === (D = R) || void 0 === D || null === (L = D.active) || void 0 === L ? void 0 : L.call(D)) && (t = !0), e.__drawRow(k, N, 1, I, H, R.get(), o + i / e.D.ROW_WIDTH === e.hoverSnapshotIndex && S === e.hoverLevelIndex, n)
											}
										}
								}, a = 0; a < e.props.snapshots.length; ++a) {
								var s = o(a);
								if ("object" === typeof s) return s.v
							}
							return e.props.count > 0 && e.__drawHorizontalLine(n, e.hoverOverDepthLevel ? e.textColor : e.depthLevelColor), e.props.canvasInfo.get() || e.props.canvasInfo.set({
								rowWidth: e.D.ROW_WIDTH,
								canvasHeight: e.H,
								scale: e.S
							}), e.__frameEnd(), t
						})), e
					}
					return (0, Z.Z)(n, [{
						key: "getThemeColor",
						value: function(e) {
							var t, n;
							return jt()(null === (t = getComputedStyle(document.documentElement).getPropertyValue(e)) || void 0 === t || null === (n = t.trim) || void 0 === n ? void 0 : n.call(t))
						}
					}, {
						key: "depthLevelLineY",
						value: function() {
							return (this.props.inverse ? this.props.count - this.depthLevels : this.depthLevels) * this.D.ROW_HEIGHT - this.scrollY
						}
					}, {
						key: "invalidate",
						value: function() {
							this.invalidated || this.animationDrawing || (this.invalidated = !0, requestAnimationFrame(this.draw))
						}
					}, {
						key: "updateHoverState",
						value: function(e, t) {
							this.hoverLevelIndex === t && this.hoverSnapshotIndex === e || (this.hoverSnapshotIndex = e, this.hoverLevelIndex = t, this.invalidate())
						}
					}, {
						key: "preserveScroll",
						value: function() {
							this.props.inverse && this.scrollContainer && this.scrollContainer.scrollTo(0, ((this.scrollContainer.scrollHeight - this.scrollFromBottom) * this.S - this.H) / this.S)
						}
					}, {
						key: "componentDidMount",
						value: function() {
							var e = this,
								t = this.container;
							if (t) {
								var n = document.createElement("canvas");
								t.appendChild(n), this.initCanvas(n), t.className = Mt.orderflowChart, t.style.minWidth = this._getCanvasWidth() + "px", t.addEventListener("mousedown", this.handleMouseDown), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseup", this.handleMouseUp), t.addEventListener("mouseleave", this.handleMouseLeave), t.addEventListener("click", this.handleClick), this.scrollContainer = document.createElement("div"), this.scrollContainer.addEventListener("scroll", this.handleScroll), this.dummyContainer = document.createElement("div"), this.dummyContainer.style.height = this.props.count * (this.D.ROW_HEIGHT / this.S) + "px", this.scrollContainer.appendChild(this.dummyContainer), t.appendChild(this.scrollContainer)
							}
							this.colorSubscription = this.props.theme.subscribe((function(t) {
								"customTheme" !== t ? (0, j.Sx)() : (0, j.ji)(e.props.customThemes), e.isDarkerDark = t === Ct.Q.darkerDark, e.initColors(), e.__update_size(), e.invalidate()
							})), this.isDraggingSubscription = this.props.isDragging.subscribe((function(t) {
								t && e.invalidate()
							})), this.customColorSubscription = this.props.customThemes.subscribe((function() {
								e.initColors()
							})), this.depthLevelsSubscription = this.props.depthLevels.subscribe((function(t) {
								e.depthLevels = t, e.invalidate()
							})), window.addEventListener("resize", this.resize)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							var e, t, n, r, i, o, a, s;
							window.removeEventListener("resize", this.resize), null === (e = this.colorSubscription) || void 0 === e || null === (t = e.unsubscribe) || void 0 === t || t.call(e), null === (n = this.customColorSubscription) || void 0 === n || null === (r = n.unsubscribe) || void 0 === r || r.call(n), null === (i = this.depthLevelsSubscription) || void 0 === i || null === (o = i.unsubscribe) || void 0 === o || o.call(i), null === (a = this.isDraggingSubscription) || void 0 === a || null === (s = a.unsubscribe) || void 0 === s || s.call(a), this.__destroy()
						}
					}, {
						key: "componentDidUpdate",
						value: function() {
							var e, t, n = this.props.snapshots.filter((function(e) {
								return Array.isArray(e)
							})).length;
							(this.container && (this.container.style.minWidth = this._getCanvasWidth() + "px"), this.dummyContainer && (this.dummyContainer.style.height = this.props.count * (this.D.ROW_HEIGHT / this.S) + "px"), this.wasRenderer !== this.props.renderer && (this.initCanvas(this.canvas), this.wasRenderer = this.props.renderer), this.groupingDigits = Math.max(0, (this.props.aggregationGrouping % 1).toString().length - 2), this.lastSnapshotsCount !== (null === (e = this.props.snapshots) || void 0 === e ? void 0 : e.length) + n) ? (this.lastSnapshotsCount = (null === (t = this.props.snapshots) || void 0 === t ? void 0 : t.length) + n, this.resize()) : (this.preserveScroll(), this.invalidate())
						}
					}, {
						key: "render",
						value: function() {
							var e = this;
							return (0, $.jsx)("div", {
								ref: function(t) {
									e.container = t, e.props.innerRef.current = t
								}
							})
						}
					}, {
						key: "__init",
						value: function() {
							if (this.isGL && null != this.gl) {
								var e = this.gl;
								if (this.textProgram = this.__makeProgramGL(e, n.textVertexShaderSource, n.textFragmentShaderSource), !this.textProgram) return this.__destroy(), !1;
								if (this.textProgramPosition = e.getAttribLocation(this.textProgram, "a_Position"), this.textProgramTextureCoord = e.getAttribLocation(this.textProgram, "a_TextureCoord"), this.textProgramResolution = e.getUniformLocation(this.textProgram, "u_resolution"), this.textProgramTexture = e.getUniformLocation(this.textProgram, "u_texture"), null == this.textVertexBuffer && (this.textVertexBuffer = e.createBuffer()), null == this.textIndexBuffer && (this.textIndexBuffer = e.createBuffer()), null == this.textUVBuffer && (this.textUVBuffer = e.createBuffer()), this.rectProgram = this.__makeProgramGL(e, n.rectVertexShaderSource, n.rectFragmentShaderSource), !this.rectProgram) return this.__destroy(), !1;
								this.rectProgramPosition = e.getAttribLocation(this.rectProgram, "a_Position"), this.rectProgramResolution = e.getUniformLocation(this.rectProgram, "u_resolution"), this.rectProgramColor = e.getUniformLocation(this.rectProgram, "color"), null == this.rectVertexBuffer && (this.rectVertexBuffer = e.createBuffer()), null == this.rectIndexBuffer && (this.rectIndexBuffer = e.createBuffer())
							} else null != this.ctx && (this.ctx.textBaseline = "middle");
							return !0
						}
					}, {
						key: "__makeShaderGL",
						value: function(e, t, n) {
							var r = e.createShader(t);
							return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? (this.shaders.push(r), r) : (console.error("Failed to compile vertex shader: \n" + e.getShaderInfoLog(r)), null)) : null
						}
					}, {
						key: "__makeProgramGL",
						value: function(e, t, n) {
							var r = e.createProgram();
							if (!r) return null;
							var i = this.__makeShaderGL(e, e.VERTEX_SHADER, t);
							if (!i) return null;
							var o = this.__makeShaderGL(e, e.FRAGMENT_SHADER, n);
							return o ? (e.attachShader(r, i), e.attachShader(r, o), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) ? r : (console.error("Failed to init program: \n" + e.getProgramInfoLog(r)), null)) : null
						}
					}, {
						key: "__destroy",
						value: function() {
							if (this.isGL && null != this.gl) {
								var e, t = kt(this.shaders);
								try {
									for (t.s(); !(e = t.n()).done;) {
										var n = e.value;
										this.gl.deleteShader(n)
									}
								} catch (r) {
									t.e(r)
								} finally {
									t.f()
								}
								this.shaders = [], null != this.textVertexBuffer && (this.gl.deleteBuffer(this.textVertexBuffer), this.textVertexBuffer = null), null != this.textIndexBuffer && (this.gl.deleteBuffer(this.textIndexBuffer), this.textIndexBuffer = null), null != this.rectVertexBuffer && (this.gl.deleteBuffer(this.rectVertexBuffer), this.rectVertexBuffer = null), null != this.rectIndexBuffer && (this.gl.deleteBuffer(this.rectIndexBuffer), this.rectIndexBuffer = null), null != this.textUVBuffer && (this.gl.deleteBuffer(this.textUVBuffer), this.textUVBuffer = null), null != this.textProgram && (this.gl.deleteProgram(this.textProgram), this.textProgram = null), null != this.rectProgram && (this.gl.deleteProgram(this.rectProgram), this.rectProgram = null)
							}
						}
					}, {
						key: "__update_size",
						value: function() {
							if (this.isGL && null != this.gl) {
								var e = this.gl;
								if (e.viewport(0, 0, this.W, this.H), e.clearColor(this.bgColor.red() / 255, this.bgColor.green() / 255, this.bgColor.blue() / 255, 1), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.disable(e.DEPTH_TEST), this.fontTextureSize != this.D.FONT_SIZE || this.fontColor != this.textColor.toString()) {
									var t = this.D.FONT_SIZE,
										r = document.createElement("canvas"),
										i = r.getContext("2d");
									r.height = t, r.width = 0, i.font = (t < 12 ? "bold " : "") + t + "px " + this.D.FONT;
									var o = i.measureText(n.SYMBOLS).width;
									r.width = o, i.font = (t < 12 ? "bold " : "") + t + "px " + this.D.FONT, this.SYMBOL_WIDTH = o / n.SYMBOLS.length * 1, this.SYMBOL_HEIGHT = 1 * r.height, i.textBaseline = "middle", i.fillStyle = this.textColor.toString(), i.fillText(n.SYMBOLS, 0, r.height / 2), this.fontTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this.fontTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), r.remove(), this.fontTextureSize = this.D.FONT_SIZE, this.fontColor = this.textColor.toString()
								}
								e.useProgram(this.textProgram), e.uniform2f(this.textProgramResolution, this.W, this.H), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.fontTexture), e.uniform1i(this.textProgramTexture, 0), e.useProgram(this.rectProgram), e.uniform2f(this.rectProgramResolution, this.W, this.H)
							} else if (null != this.ctx) return this.ctx.font = this.D.FONT_SIZE + "px " + this.D.FONT, this.ctx.textBaseline = "middle", this.ctx.lineWidth = this.S, !0
						}
					}, {
						key: "__clearAll",
						value: function() {
							this.isGL && null != this.gl ? this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT) : null != this.ctx && this.ctx.clearRect(0, 0, this.W, this.H)
						}
					}, {
						key: "__clearRow",
						value: function(e, t) {
							this.isGL && null != this.gl || null != this.ctx && this.ctx.clearRect(e, t, e + this.D.ROW_WIDTH, t + this.D.ROW_HEIGHT)
						}
					}, {
						key: "__drawAggregatedLevel",
						value: function(e, t, n, r) {
							var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
								o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : this.depthLevelLineY(),
								a = arguments.length > 6 ? arguments[6] : void 0,
								s = arguments.length > 7 ? arguments[7] : void 0;
							if (!(r <= 0)) {
								var l, c;
								this.props.inverse ? (l = Math.max(o, t), c = Math.min(0, t - o) + this.D.ROW_HEIGHT) : (l = t, c = Math.min(this.D.ROW_HEIGHT, o - t));
								var u = 15;
								c <= 0 || this.__drawRect((s ? this.mainContrast : "asks" == this.props.type ? this.redColor : this.greenColor).alpha(i ? .8 : .4 + a / u > 1 ? 1 : .4 + a / u).darken(.4 + a / u > 1 ? (a - 4) / u : 0), e + this.D.PRICE_WIDTH + this.D.HEATMAP_MARGIN_LEFT + this.D.HEATMAP_WIDTH + this.D.HEATMAP_MARGIN_RIGHT, l, this.D.AMOUNT_WIDTH * r, c)
							}
						}
					}, {
						key: "__drawRow",
						value: function(e, t, n, r, i, o) {
							var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
								s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : this.depthLevelLineY(),
								l = arguments.length > 8 ? arguments[8] : void 0;
							if (r) {
								this.__drawText(r.price.toFixed(this.groupingDigits), e + this.D.PRICE_WIDTH, t + this.D.ROW_HEIGHT / 2 + 1, n, !0);
								var c, u, d = this.isDarkerDark && i > .65 ? this.mainColor : this.textColor;
								if (this.__drawRect(d.alpha(i * n), e + this.D.PRICE_WIDTH + this.D.HEATMAP_MARGIN_LEFT, t, this.D.HEATMAP_WIDTH, this.D.ROW_HEIGHT), !l && o > 0) this.props.inverse ? (c = Math.max(s, t), u = Math.min(0, t - s) + this.D.ROW_HEIGHT) : (c = t, u = Math.min(this.D.ROW_HEIGHT, s - t)), u > 0 && this.__drawRect(("asks" == this.props.type ? this.redColor : this.greenColor).alpha((a ? .8 : .4) * n), e + this.D.PRICE_WIDTH + this.D.HEATMAP_MARGIN_LEFT + this.D.HEATMAP_WIDTH + this.D.HEATMAP_MARGIN_RIGHT, c, this.D.AMOUNT_WIDTH * o, u);
								this.__drawText(It(r.amount), e + this.D.PRICE_WIDTH + this.D.HEATMAP_MARGIN_LEFT + this.D.HEATMAP_WIDTH + this.D.HEATMAP_MARGIN_RIGHT, t + this.D.ROW_HEIGHT / 2 + 1, n), a && this.__drawText(It(r.totalAmount), e + this.D.ROW_WIDTH + (l ? this.D.ROW_WIDTH : 0), t + this.D.ROW_HEIGHT / 2 + 1, n, !0)
							}
						}
					}, {
						key: "_getCanvasWidth",
						value: function() {
							var e, t = this.props.snapshots.filter((function(e) {
								return Array.isArray(e)
							})).length;
							return (null !== (e = this.props.snapshots.length + t) && void 0 !== e ? e : 0) * (this.D.ROW_WIDTH / this.S)
						}
					}, {
						key: "__drawText",
						value: function(e, t, r, i) {
							var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
							if (this.isGL && null != this.gl)
								for (var a = this.SYMBOL_WIDTH, s = this.SYMBOL_HEIGHT, l = n.SYMBOLS, c = r - .5 * s, u = c + s, d = e.length, h = 1 / l.length, f = d * a, g = 0; g < d; g++) {
									var v = t - (o ? f : 0) + g * a,
										p = v + a;
									this.textVertices.push(v, c, v, u, p, u, p, c);
									var m = l.indexOf(e[g]) * h,
										x = m + h;
									this.textUV.push(m, 0, m, 1, x, 1, x, 0)
								} else if (null != this.ctx) {
									var b = this.textColor;
									i < 1 && (b = b.alpha(i)), this.ctx.fillStyle = b.toString(), this.ctx.fillText(e, t - (o ? this.ctx.measureText(e).width : 0), r)
								}
						}
					}, {
						key: "__drawRect",
						value: function(e, t, n, r, i) {
							this.isGL && null != this.gl ? (this.rectVertices.push(t, n, t, n + i, t + r, n + i, t + r, n), this.rectColors.push(e.red() / 255, e.green() / 255, e.blue() / 255, e.alpha())) : null != this.ctx && (this.ctx.fillStyle = e.toString(), this.ctx.fillRect(t, n, r, i))
						}
					}, {
						key: "__drawHorizontalLine",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.depthLevelColor;
							this.isGL && null != this.gl ? this.__drawRect(t, 0, e, this.W, this.S) : null != this.ctx && (this.ctx.strokeStyle = t.toString(), this.ctx.beginPath(), this.ctx.moveTo(0, e), this.ctx.lineTo(this.W, e), this.ctx.stroke())
						}
					}, {
						key: "__frameStart",
						value: function() {
							this.isGL && this.gl && (this.textVertices = [], this.textUV = [], this.rectVertices = [], this.rectColors = [])
						}
					}, {
						key: "__makeIndices",
						value: function(e) {
							if (this.indices.length < e) {
								var t = new Uint16Array(e);
								t.set(this.indices);
								for (var n = this.indices.length, r = n / 6 * 4; n < t.length; n += 6) t.set([r, r + 1, r + 3, r + 1, r + 2, r + 3], n), r += 4;
								this.indices = t
							}
							return this.indices
						}
					}, {
						key: "__frameEnd",
						value: function() {
							if (this.isGL && this.gl) {
								var e = this.gl;
								if (this.__makeIndices(Math.max(this.rectVertices.length, this.textVertices.length) / 8 * 6), this.rectProgram) {
									e.useProgram(this.rectProgram), this.rectVerticesArray.length < this.rectVertices.length && (this.rectVerticesArray = new Float32Array(this.rectVertices.length + 32)), this.rectVerticesArray.set(this.rectVertices), e.bindBuffer(e.ARRAY_BUFFER, this.rectVertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.rectVerticesArray, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.rectIndexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW), e.enableVertexAttribArray(this.rectProgramPosition), e.vertexAttribPointer(this.rectProgramPosition, 2, e.FLOAT, !1, 0, 0);
									for (var t = 0; t < this.rectColors.length / 4; t++) e.uniform4f(this.rectProgramColor, this.rectColors[4 * t], this.rectColors[4 * t + 1], this.rectColors[4 * t + 2], this.rectColors[4 * t + 3]), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 2 * t * 6)
								}
								this.textProgram && (e.useProgram(this.textProgram), e.enableVertexAttribArray(this.textProgramPosition), this.textVerticesArray.length < this.textVertices.length && (this.textVerticesArray = new Float32Array(this.textVertices.length + 32)), this.textVerticesArray.set(this.textVertices), e.bindBuffer(e.ARRAY_BUFFER, this.textVertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.textVerticesArray, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.textIndexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW), e.vertexAttribPointer(this.textProgramPosition, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(this.textProgramTextureCoord), e.bindBuffer(e.ARRAY_BUFFER, this.textUVBuffer), e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.textUV), e.STATIC_DRAW), e.vertexAttribPointer(this.textProgramTextureCoord, 2, e.FLOAT, !1, 0, 0), e.drawElements(e.TRIANGLES, this.textVertices.length / 8 * 6, e.UNSIGNED_SHORT, 0))
							}
						}
					}]), n
				}(x.Component);
			(0, r.Z)(Dt, "textVertexShaderSource", "\n    attribute vec2 a_Position;\n    attribute vec2 a_TextureCoord;\n    uniform vec2 u_resolution;\n    varying highp vec2 vTextureCoord;\n    void main() {\n      gl_Position = vec4(a_Position / u_resolution * vec2(2., -2.) - vec2(1., -1.), 1., 1.);\n      vTextureCoord = a_TextureCoord;\n    }\n  "), (0, r.Z)(Dt, "textFragmentShaderSource", "\n    precision mediump float;\n    varying highp vec2 vTextureCoord;\n    uniform sampler2D u_texture;\n    void main() {\n      gl_FragColor = texture2D(u_texture, vTextureCoord);\n    }\n  "), (0, r.Z)(Dt, "rectVertexShaderSource", "\n    attribute vec2 a_Position;\n    uniform vec2 u_resolution;\n    void main() {\n      gl_Position = vec4(a_Position / u_resolution * vec2(2., -2.) - vec2(1., -1.), 1., 1.);\n    }\n  "), (0, r.Z)(Dt, "rectFragmentShaderSource", "\n    precision mediump float;\n    uniform vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }\n  "), (0, r.Z)(Dt, "SYMBOLS", "0123456789.,kmwebgl");
			var Lt = x.forwardRef((function(e, t) {
					return (0, $.jsx)(Dt, Pt(Pt({}, e), {}, {
						innerRef: t
					}))
				})),
				It = function(e) {
					return e < 1500 ? e.toFixed(1) : e < 125e4 ? (e / 1e3).toFixed(1) + "k" : (e / 1e6).toFixed(1) + "m"
				},
				Rt = n(370),
				Ft = n.n(Rt),
				Et = n(4434),
				Ht = n.n(Et)();

			function Bt(e) {
				var t = e.funding,
					n = t.current,
					r = t.predicted,
					i = t.timestamp;
				if (0 === n && !r) return null;
				var o = function(e) {
						return e < 0
					},
					a = function(e) {
						var t = e.num,
							n = e.isPredicted;
						if (void 0 === t) return null;
						var r = 100 * t,
							i = (0, vt.f3)(Math.abs(r)),
							a = 0 === r ? void 0 : o(r) ? Ht.negative : Ht.positive,
							s = n || 0 === r ? null : o(r) ? "\u25be" : "\u25b4";
						return (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsxs)("span", {
								className: a,
								title: "".concat(n ? "Predicted f" : "F", "unding rate ") + (0, vt.GW)(r, 6) + "%",
								children: [s, i, "%"]
							}), n ? " pred." : ""]
						})
					},
					s = i ? "(".concat(function(e) {
						var t = Math.abs(Date.now() - e.getTime()) / 1e3 / 60,
							n = Math.floor(t / 60);
						return n > 0 ? n + "h" : Math.floor(t) + "m"
					}(i), ") ") : null;
				return (0, $.jsxs)($.Fragment, {
					children: [(0, $.jsx)(a, {
						num: n
					}), " ", s, (0, $.jsx)(a, {
						num: r,
						isPredicted: !0
					})]
				})
			}

			function Nt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Vt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Nt(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Ut = Ft(),
				Wt = function(e) {
					var t = {
							weekly: "this_week",
							biweekly: "next_week",
							quarterly: "quarter",
							biquarterly: "next_quarter"
						},
						n = "https://www.hbdm.com/en-us/contract/exchange/#symbol=".concat(e.base),
						r = e.contract;
					return r && t[r.type] ? "".concat(n, "&contract_type=").concat(t[r.type]) : n
				},
				zt = function(e) {
					var t = e.base,
						n = e.quote,
						r = e.symbol,
						i = e.baseNormalized,
						o = e.quoteNormalized;
					switch (e.exchange) {
						case "binance-\u24bb":
							return function(e) {
								var t = e.contract ? e.contract.type : null,
									n = "perpetual" === t ? "_perpetual" : "quarterly" === t ? "_quarter" : "biquarterly" === t ? "_bi-quarter" : "";
								return "https://www.binance.com/en/delivery/".concat(e.base).concat(e.quote).concat(n)
							}(e);
						case "huobi-\u24bb":
						case "huobi-\u24b9":
							return Wt(e);
						case "okex":
							return "https://www.okex.com/trade-spot/".concat(t, "-").concat(n);
						case "okex-\u24bb":
							return "https://www.okex.com/trade-futures/".concat(t, "-").concat(n, "-").concat(r.split("-")[2], "/");
						case "okex-\u24b9":
							return "https://www.okex.com/trade-swap/".concat(t, "-").concat(n);
						case "kraken":
							return "https://trade.kraken.com/charts/KRAKEN:".concat(i || t, "-").concat(o || n);
						case "huobi-\u24c8":
							return "https://www.hbdm.com/en-us/swap/exchange/#symbol=".concat(t);
						case "huobi":
							return "https://www.huobi.com/en-us/exchange/".concat(t.toLowerCase(), "_").concat(n.toLowerCase(), "/");
						case "deribit":
							return "https://www.deribit.com/main#/futures?tab=".concat(r.toUpperCase());
						case "coinbase":
							return "https://pro.coinbase.com/trade/".concat(r.toUpperCase());
						case "bybit-\u24c8":
							return "https://www.bybit.com/trade/usdt/".concat(r);
						case "bybit":
							return "https://www.bybit.com/trade/inverse/".concat(r);
						case "bitstamp":
							return "https://www.bitstamp.net/markets/".concat(t.toLowerCase(), "/").concat(n.toLowerCase(), "/");
						case "bitmex":
							return "https://www.bitmex.com/app/trade/".concat(r);
						case "bitfinex-\u24b9":
						case "bitfinex":
							return "https://trading.bitfinex.com/t/".concat(t, ":").concat(n);
						case "binance-\u24b9":
							return "https://www.binance.com/en/futures/".concat(r);
						case "binance":
							return "https://www.binance.com/en/trade/".concat(t, "_").concat(n)
					}
				},
				Gt = function(e) {
					var t = e.market;
					return (0, $.jsxs)("a", {
						href: zt(t),
						target: "_blank",
						className: Ut.link,
						children: [t.exchange, "/", t.symbol, (0, $.jsxs)("svg", {
							height: "12",
							viewBox: "0 0 48 48",
							width: "12",
							xmlns: "http://www.w3.org/2000/svg",
							children: [(0, $.jsx)("path", {
								d: "M0 0h48v48h-48z",
								fill: "none"
							}), (0, $.jsx)("path", {
								d: "M38 38h-28v-28h14v-4h-14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-14h-4v14zm-10-32v4h7.17l-19.66 19.66 2.83 2.83 19.66-19.66v7.17h4v-14h-14z"
							})]
						})]
					})
				},
				qt = function(e) {
					var t = e.aggregatedMarkets,
						n = e.currentHoveredSymbol,
						r = e.coinConfig,
						i = f().groupBy(t, "exchange");
					return (0, $.jsx)(u.F.div, {
						className: Ut.aggregatedLinks,
						children: Object.keys(i).map((function(e, t) {
							return (0, $.jsxs)("div", {
								className: Ut.aggregatedLinkWrap,
								children: [(0, $.jsxs)("div", {
									className: Ut.aggregatedExchange,
									onMouseEnter: function() {
										return n.set({
											exchange: i[e][0].exchange,
											aggregationId: i[e][0].aggregationId
										})
									},
									onMouseLeave: function() {
										return n.set(null)
									},
									children: [(0, $.jsx)(Ne.D, {
										exchange: i[e][0].exchange,
										className: Ut.exchangeIcon,
										w: 18,
										h: 18
									}), (0, $.jsx)("span", {
										children: i[e][0].exchange
									})]
								}), i[e].map((function(e, t) {
									return (0, $.jsxs)("a", {
										href: zt(Y(e, r)),
										target: "_blank",
										className: Ut.aggregatedSymbol,
										onMouseEnter: function() {
											return n.set({
												exchange: e.exchange,
												symbol: e.symbol,
												aggregationId: e.aggregationId
											})
										},
										onMouseLeave: function() {
											return n.set(null)
										},
										children: [e.symbol, (0, $.jsx)("div", {
											style: {
												position: "relative"
											},
											children: (0, $.jsxs)("svg", {
												height: "12",
												viewBox: "0 0 48 48",
												width: "12",
												style: {
													position: "absolute",
													bottom: "-7px",
													background: "var(--bgColor)"
												},
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, $.jsx)("path", {
													d: "M0 0h48v48h-48z",
													fill: "none"
												}), (0, $.jsx)("path", {
													d: "M38 38h-28v-28h14v-4h-14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-14h-4v14zm-10-32v4h7.17l-19.66 19.66 2.83 2.83 19.66-19.66v7.17h4v-14h-14z"
												})]
											})
										})]
									}, t)
								}))]
							}, t)
						}))
					})
				},
				Yt = function(e) {
					var t = e.connection,
						n = e.market,
						r = e.funding,
						i = e.onDragStart,
						o = e.aggregatedMarketsSelectorPopup,
						a = e.selectedMarkets,
						s = e.aggregationId,
						l = e.currentHoveredSymbol,
						c = e.coinConfig,
						h = e.id,
						f = (0, x.useRef)(null),
						g = (0, x.useState)(!1),
						v = g[0],
						p = g[1],
						m = (0, x.useState)(!0),
						b = m[0],
						y = m[1];
					return (0, x.useEffect)((function() {
						var e = (0, rt.R)(f.current, "mousedown").subscribe((function(e) {
								return i(e, n)
							})),
							t = s.subscribe((function(e) {
								e !== h && (y(!0), p(!1))
							}));
						return function() {
							e.unsubscribe(), t.unsubscribe()
						}
					}), []), (0, $.jsxs)(u.F.div, Vt(Vt({}, (0, d.Sh)(Ut.marketName, Array.isArray(n) && !v ? Ut.aggregatedLinksBlock : void 0, Ut.cell, t ? t.view((function(e) {
						return !!e && Ut[e]
					})) : null)), {}, {
						style: {
							minWidth: Array.isArray(n) ? 400 : 200
						},
						onMouseOver: function() {
							return b && p(!0)
						},
						onMouseOut: function() {
							return b && p(!1)
						},
						children: [Array.isArray(n) ? (0, $.jsx)(qt, {
							aggregatedMarkets: n,
							currentHoveredSymbol: l,
							coinConfig: c
						}) : (0, $.jsx)(Gt, {
							market: n
						}), Array.isArray(n) || "spot" === Y(n, c).marketType ? (0, $.jsx)("div", {
							className: Ut.aggregatedCreator,
							onClick: function() {
								a.set(Array.isArray(n) ? n : [n]), s.set(h), p(!0), y(!1), o.set("aggregated-markets-selector")
							},
							children: "+"
						}) : null, (0, $.jsx)("div", {
							className: Ut.dragActivator,
							ref: f,
							children: (0, $.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								width: "12",
								height: "12",
								className: Ut.dragAndDropIcon,
								children: (0, $.jsx)("path", {
									d: "M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z"
								})
							})
						}), r.view((function(e) {
							return e ? (0, $.jsx)("div", {
								className: Ut.funding,
								children: (0, $.jsx)(Bt, {
									funding: e
								})
							}) : null
						}))]
					}))
				},
				Xt = n(7835);

			function Jt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Qt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Jt(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Kt = n.n(Xt)();

			function $t(e) {
				var t = e.lastPrice,
					n = e.delta;
				return (0, $.jsxs)($.Fragment, {
					children: [(0, $.jsx)("span", {
						className: Kt.price,
						children: (t > 1e3 ? Math.round(t) : (0, vt.f2)(t)) || ""
					}), n ? (0, $.jsxs)("span", Qt(Qt({
						title: "Orderbook delta 20 levels depth"
					}, (0, d.Sh)(Kt.delta, n < 0 && Kt.negative)), {}, {
						children: [(0, $.jsx)("span", Qt(Qt({}, (0, d.Sh)(Kt.symbol)), {}, {
							children: "\ud835\udeab"
						})), (0, vt.uf)(Math.abs(n)) || ""]
					})) : null]
				})
			}
			var en = n(5259);

			function tn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function nn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tn(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var rn = n.n(en)();

			function on(e) {
				return m()(e).format({
					thousandSeparated: !0,
					average: !0,
					optionalMantissa: !1,
					trimMantissa: !1,
					mantissa: 1,
					lowPrecision: !1
				})
			}
			var an = function(e) {
					var t = Math.floor(e / 1e3),
						n = 3600;
					return 0 === t ? "now" : t < 60 ? t + "s" : t < n ? Math.floor(t / 60) + "m" : t < 86400 ? Math.floor(t / n) + "h" : Math.floor(t / 86400) + "d"
				},
				sn = function(e) {
					var t = e.window,
						n = e.currentDuration,
						r = e.buy,
						i = e.sell,
						o = r + i;
					if (0 === o) return (0, $.jsx)("div", {
						className: rn.delta
					});
					var a = t <= n,
						s = (0, vt.f2)(r / o);
					return (0, $.jsxs)("div", nn(nn({}, (0, d.Sh)(rn.delta, !a && rn.opaque)), {}, {
						children: [(0, $.jsx)(u.F.span, {
							className: rn.title,
							children: a ? an(t) : (0, $.jsxs)($.Fragment, {
								children: [an(n), (0, $.jsxs)("span", nn(nn({}, (0, d.Sh)(rn.tf)), {}, {
									children: ["/", an(t)]
								}))]
							})
						}), (0, $.jsx)("span", nn(nn({}, (0, d.Sh)(rn.buyAmount)), {}, {
							children: on(r)
						})), (0, $.jsx)("span", {
							className: rn.tradesDistro,
							children: (0, $.jsx)("span", {
								className: rn.buySide,
								style: {
									transform: "scaleX(".concat(s, ")")
								}
							})
						}), (0, $.jsx)("span", nn(nn({}, (0, d.Sh)(rn.sellAmount)), {}, {
							children: on(i)
						}))]
					}))
				};

			function ln(e) {
				var t = e.volumeHistograms;
				return (0, $.jsx)("div", nn(nn({}, (0, d.Sh)(rn.wrap)), {}, {
					children: t.map((function(e, t) {
						var n = e.window,
							r = e.volumesBuy,
							i = e.volumesSell,
							o = e.earliestTimestamp,
							a = e.latestTimestamp,
							s = r.reduce((function(e, t) {
								return e + t
							}), 0),
							l = i.reduce((function(e, t) {
								return e + t
							}), 0),
							c = new Date(a).getTime() - new Date(o).getTime();
						return (0, $.jsx)(sn, {
							buy: s,
							sell: l,
							window: n,
							currentDuration: c
						}, t)
					}))
				}))
			}

			function cn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function un(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? cn(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var dn = nt(),
				hn = function(e) {
					var t = e.x,
						n = e.scrolled;
					return (0, $.jsx)("div", {
						className: dn.dragLine,
						style: {
							left: t - n
						}
					})
				},
				fn = function(e) {
					var t = e.dragLineX,
						n = e.dataURI,
						r = e.canvasInfo,
						i = e.isAggregatedMarket,
						o = (0, x.useState)(null),
						a = o[0],
						s = o[1],
						l = r.rowWidth * (i ? 2 : 1) / r.scale,
						c = r.canvasHeight / r.scale;
					return null === a && s(t + t / l), (0, $.jsx)("div", {
						style: {
							width: l,
							height: c,
							overflow: "hidden",
							margin: 0
						},
						children: (0, $.jsx)("img", {
							alt: "orderbook",
							src: n,
							style: {
								height: c,
								right: "".concat(a - (i ? l / r.scale - 200 : 0), "px"),
								position: "relative"
							},
							draggable: "false"
						})
					})
				},
				gn = function(e) {
					var t = e.children,
						n = e.coords,
						r = e.isAggregatedMarket;
					return (0, $.jsx)("div", {
						className: dn.dragBlock,
						style: un(un({}, n), {}, {
							transform: "translate(".concat(r ? "-90%, -3.4%" : "-81%, -3.4%", ")")
						}),
						draggable: "false",
						children: t
					})
				},
				vn = function(e) {
					var t = e.dragLineX,
						n = e.canvasInfo,
						r = e.scrolled,
						i = e.isAggregatedMarket,
						o = (0, x.useState)(null),
						a = o[0],
						s = o[1],
						l = n,
						c = l.rowWidth,
						u = l.scale;
					return null === a && s(t - r), (0, $.jsx)("div", {
						style: {
							position: "absolute",
							zIndex: 100,
							left: "".concat(a - (i ? c / n.scale - 200 : 0), "px"),
							height: "100%",
							background: "var(--textColorVeryDimmed)",
							opacity: .1,
							marginLeft: "20px",
							width: c * (i ? 2 : 1) / u
						}
					})
				};

			function pn(e) {
				var t = e.renderer,
					n = e.theme,
					r = e.type,
					i = e.activeMarkets,
					o = e.snapshots,
					a = e.snapshotConfig,
					s = e.heatmapMode,
					l = e.levelVolumeRenderingMode,
					d = e.customThemes,
					h = e.coinConfig,
					f = e.isDragging,
					g = e.imgUrl,
					v = e.canvasInfo,
					p = e.currentHoveredSymbol,
					m = e.marketsWithAggregatedMarkets;
				f.subscribe((function(e) {
					e && g.set(b.current.firstChild.toDataURL())
				}));
				var b = (0, x.useRef)(null),
					y = c.h.combine(i, m, (function(e, t) {
						return [e, t]
					})).view((function(e) {
						var t = (0, M.Z)(e, 2),
							n = t[0],
							r = t[1];
						return n.some((function(e) {
							return void 0 !== e.aggregationId
						})) ? (0, C.Z)(r) : (0, C.Z)(n)
					}));
				return (0, $.jsx)(u.F.Fragment, {
					children: c.h.combine(y, o, l, a, (function(e, t, n, i) {
						return [e.filter((function(e) {
							return e
						})).map((function(e) {
							return Array.isArray(e) ? e.map((function(e) {
								var n, r, i = e.exchange,
									o = e.symbol;
								return null === t || void 0 === t || null === (n = t.snapshots) || void 0 === n || null === (r = n[i]) || void 0 === r ? void 0 : r[o]
							})) : null === t || void 0 === t || null === (n = t.snapshots) || void 0 === n || null === (r = n[e.exchange]) || void 0 === r ? void 0 : r[e.symbol];
							var n, r
						})).filter((function(e) {
							return !!e
						})), "asks" === r ? null === t || void 0 === t ? void 0 : t.maxAsksRows : null === t || void 0 === t ? void 0 : t.maxBidsRows, n, null === i || void 0 === i ? void 0 : i.isRealtime, null === i || void 0 === i ? void 0 : i.grouping]
					})).view((function(e) {
						var i = (0, M.Z)(e, 5),
							l = i[0],
							c = i[1],
							u = i[2],
							g = i[3],
							m = i[4];
						return (0, $.jsx)(Lt, {
							renderer: t,
							ref: b,
							inverse: "asks" === r,
							type: r,
							theme: n,
							snapshots: l,
							count: c,
							heatmapMode: s,
							levelVolumeRenderingMode: u,
							depthLevels: a.lens("depthLevels"),
							maxSpotLevelTotal: o.lens("maxSpotLevelTotal"),
							isTurboMode: g,
							aggregationGrouping: m,
							coinConfig: h,
							customThemes: d,
							isDragging: f,
							canvasInfo: v,
							currentHoveredSymbol: p
						}, t)
					}))
				})
			}
			var mn = "canvas";
			var xn = function(e) {
					var t = e.activeMarkets,
						n = e.snapshots,
						r = e.snapshotConfig,
						i = e.connection,
						o = e.levelVolumeRenderingMode,
						a = e.heatmapMode,
						s = e.theme,
						l = e.customThemes,
						f = e.coinConfig,
						g = e.scrolled,
						v = e.isFreeUser,
						p = c.h.create(""),
						m = c.h.create(""),
						b = (0, rt.R)(document, "mousemove"),
						y = (0, rt.R)(document, "mouseup"),
						_ = c.h.create(!1),
						w = c.h.create(null),
						j = c.h.create(0),
						k = c.h.create([]),
						S = c.h.create(null);
					(0, x.useEffect)((function() {
						var e = t.subscribe((function(e) {
							k.modify((function() {
								var t = (0, C.Z)(e);
								if (t.some((function(e) {
										return void 0 !== e.aggregationId
									}))) {
									var n = (0, h.groupBy)(t.filter((function(e) {
										return void 0 !== e.aggregationId
									})), "aggregationId");
									Object.keys(n).map((function(e) {
										t.splice(+e, 0, n[+e])
									}))
								}
								var r = (t = t.filter((function(e) {
									return e
								})).filter((function(e) {
									return Array.isArray(e) || void 0 === e.aggregationId
								}))).filter((function(e) {
									return Array.isArray(e)
								}));
								return r.map((function(e) {
									var n = t.findIndex((function(t) {
											return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
										})),
										r = (0, C.Z)(t[n]);
									r = r.map((function(e) {
										return e.aggregationId = n, e
									})), t[n] = (0, C.Z)(r)
								})), r.map((function(e) {
									var n = t.findIndex((function(t) {
										return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
									}));
									t.splice(n + 1, 0, null)
								})), t
							}))
						}));
						return function() {
							return e.unsubscribe()
						}
					}), []);
					var O = function(e) {
							var n, r, i = (null === (n = S.get()) || void 0 === n ? void 0 : n.rowWidth) / (null === (r = S.get()) || void 0 === r ? void 0 : r.scale),
								o = (t.get().some((function(e) {
									return void 0 !== e.aggregationId
								})) ? (0, C.Z)(k.get()) : (0, C.Z)(t.get()))[~~((e.clientX + g.get()) / i)] ? ~~((e.clientX + g.get()) / i) : ~~((e.clientX + g.get()) / i) - 1;
							j.set(o * i)
						},
						P = function(e) {
							w.modify((function(t) {
								if (t) {
									var n = un({}, t);
									return n.coords = {
										left: e.clientX,
										top: e.clientY
									}, n
								}
								return null
							})), O(e)
						},
						T = function(e, t) {
							if (1 === e.which) {
								O(e), document.documentElement.style.userSelect = "none", _.set(!0), w.set({
									coords: {
										left: e.clientX,
										top: e.clientY
									},
									content: t
								}), b.pipe((0, it.R)(y)).subscribe(P);
								var n = y.subscribe((function() {
									A(), n.unsubscribe()
								}))
							}
						},
						A = function() {
							if (_.get()) {
								var e = Math.round(j.get() / 200);
								_.set(!1);
								var n = w.get();
								t.get().some((function(e) {
									return void 0 !== e.aggregationId
								})) ? k.modify((function(t) {
									var r = (0, C.Z)(t),
										i = r.slice(0, e).filter((function(e) {
											return Array.isArray(e)
										})).length;
									if (!n) return r;
									var o = n.content;
									if (Array.isArray(o)) {
										r.splice(r.findIndex((function(e) {
											return Array.isArray(e) && e[0].aggregationId === o[0].aggregationId
										})), 1);
										var a = o.map((function(t) {
											return t.aggregationId = null === r[e - 1] ? e / 2 : e - i, t
										}));
										r = r.filter((function(e) {
											return e
										})), r.splice(Math.ceil(a[0].aggregationId), 0, (0, C.Z)(a));
										var s = r.filter((function(e) {
											return Array.isArray(e)
										}));
										return s.map((function(e) {
											var t = r.findIndex((function(t) {
													return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
												})),
												n = (0, C.Z)(r[t]);
											n = n.map((function(e) {
												return e.aggregationId = t, e
											})), r[t] = (0, C.Z)(n)
										})), s.map((function(e) {
											var t = r.findIndex((function(t) {
												return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
											}));
											r.splice(t + 1, 0, null)
										})), r
									}
									r.splice(r.findIndex((function(e) {
										return e && !Array.isArray(e) && e.symbol === o.symbol && e.exchange === o.exchange
									})), 1), r = r.filter((function(e) {
										return e
									})), r.splice(null === r[e - 1] ? e / 2 : e - i, 0, {
										exchange: o.exchange,
										symbol: o.symbol
									});
									var l = r.filter((function(e) {
										return Array.isArray(e)
									}));
									return l.map((function(e) {
										var t = r.findIndex((function(t) {
												return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
											})),
											n = (0, C.Z)(r[t]);
										n = n.map((function(e) {
											return e.aggregationId = t, e
										})), r[t] = (0, C.Z)(n)
									})), l.map((function(e) {
										var t = r.findIndex((function(t) {
											return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
										}));
										r.splice(t + 1, 0, null)
									})), r
								})) : t.modify((function(t) {
									var r = (0, C.Z)(t);
									if (!n) return r;
									var i = n.content;
									return Array.isArray(i) ? t : (r.splice(r.findIndex((function(e) {
										return e.symbol === i.symbol && e.exchange === i.exchange
									})), 1), r.splice(e, 0, {
										exchange: i.exchange,
										symbol: i.symbol
									}), r)
								})), w.set(null), document.documentElement.style.userSelect = "initial"
							}
						},
						Z = function(e, t) {
							return n.lens("snapshots").lens(e).view((function(e) {
								return e ? e[t] : null
							}))
						},
						D = function(e) {
							return c.h.combine(t, k, (function(e, t) {
								return [e, t]
							})).view((function(t) {
								var n = (0, M.Z)(t, 2),
									r = n[0],
									i = n[1];
								return (r.some((function(e) {
									return void 0 !== e.aggregationId
								})) ? (0, C.Z)(i) : (0, C.Z)(r)).filter((function(e) {
									return e
								})).map((function(t, n) {
									return Array.isArray(t) ? e(t, t[0].exchange + "_" + t[0].symbol + "_" + t[0].aggregationId, n) : e(t, t.exchange + "_" + t.symbol, n)
								}))
							}))
						},
						L = c.h.create([]),
						I = c.h.create(NaN),
						R = c.h.create(null),
						F = c.h.create(null);
					return (0, $.jsxs)("div", {
						className: dn.column,
						children: [(0, $.jsxs)(u.F.div, un(un({}, (0, d.Sh)(dn.row)), {}, {
							children: [c.h.combine(j, m, p, S, g, w, (function(e, t, n, r, i, o) {
								return [null === o || void 0 === o ? void 0 : o.coords, Array.isArray(null === o || void 0 === o ? void 0 : o.content) ? null === o || void 0 === o ? void 0 : o.content[0].exchange : null === o || void 0 === o ? void 0 : o.content.exchange, Array.isArray(null === o || void 0 === o ? void 0 : o.content) ? null === o || void 0 === o ? void 0 : o.content[0].symbol : null === o || void 0 === o ? void 0 : o.content.symbol, Array.isArray(null === o || void 0 === o ? void 0 : o.content), e, t, n, r, i, o]
							})).view((function(e) {
								var t = (0, M.Z)(e, 10),
									n = t[0],
									r = t[1],
									i = t[2],
									o = t[3],
									a = t[4],
									s = t[5],
									l = t[6],
									c = t[7],
									u = t[8];
								return t[9] ? (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsxs)(gn, {
										coords: n,
										isAggregatedMarket: o,
										children: [(0, $.jsxs)("p", {
											style: {
												margin: "0",
												padding: "0 10px",
												lineHeight: "40px"
											},
											children: [r, "/", i]
										}), (0, $.jsx)(fn, {
											dragLineX: a,
											dataURI: s,
											canvasInfo: c,
											isAggregatedMarket: o
										}), (0, $.jsx)("div", {
											style: {
												height: "60px"
											}
										}), (0, $.jsx)(fn, {
											dragLineX: a,
											dataURI: l,
											canvasInfo: c,
											isAggregatedMarket: o
										})]
									}), (0, $.jsx)(vn, {
										dragLineX: a,
										canvasInfo: c,
										scrolled: u,
										isAggregatedMarket: o
									}), (0, $.jsx)(hn, {
										x: a,
										scrolled: u
									})]
								}) : null
							})), (0, $.jsx)(bt, {
								popup: F,
								coinConfig: f,
								marketsToAggregate: L,
								activeMarkets: t,
								aggregationId: I,
								isFreeUser: v
							}), D((function(e, t, n) {
								return (0, $.jsx)(Yt, {
									connection: Array.isArray(e) || ut(e.exchange) ? void 0 : i.view(e.exchange),
									market: Array.isArray(e) ? e : Y(e, f),
									selectedMarkets: L,
									funding: Array.isArray(e) ? Z(e[0].exchange, e[0].symbol).view((function(e) {
										return e ? e.extra.funding : void 0
									})) : Z(e.exchange, e.symbol).view((function(e) {
										return e ? e.extra.funding : void 0
									})),
									onDragStart: T,
									aggregatedMarketsSelectorPopup: F,
									currentHoveredSymbol: R,
									aggregationId: I,
									coinConfig: f,
									id: n
								}, t)
							}))]
						})), (0, $.jsxs)("div", {
							className: dn.orderBookWrap,
							children: [(0, $.jsx)("div", un(un({}, (0, d.Sh)(dn.row, dn.orderbook, dn.asks)), {}, {
								children: (0, $.jsx)(pn, {
									renderer: mn,
									type: "asks",
									theme: s,
									snapshots: n,
									activeMarkets: t,
									snapshotConfig: r,
									heatmapMode: a,
									levelVolumeRenderingMode: o,
									customThemes: l,
									coinConfig: f,
									isDragging: _,
									imgUrl: m,
									canvasInfo: S,
									currentHoveredSymbol: R,
									marketsWithAggregatedMarkets: k
								})
							})), (0, $.jsx)(u.F.div, un(un({}, (0, d.Sh)(dn.row, dn.price)), {}, {
								children: D((function(e, t) {
									return (0, x.createElement)(u.F.div, un(un({}, (0, d.Sh)(dn.cell)), {}, {
										key: t,
										style: {
											marginRight: Array.isArray(e) ? 200 : 0
										}
									}), Array.isArray(e) ? Z(e[0].exchange, e[0].symbol).view((function(e) {
										return e ? e.extra : void 0
									})).view((function(e) {
										return e ? (0, $.jsx)($t, {
											lastPrice: e.lastPrice,
											delta: e.delta
										}) : null
									})) : Z(e.exchange, e.symbol).view((function(e) {
										return e ? e.extra : void 0
									})).view((function(e) {
										return e ? (0, $.jsx)($t, {
											lastPrice: e.lastPrice,
											delta: e.delta
										}) : null
									})))
								}))
							})), (0, $.jsx)("div", un(un({}, (0, d.Sh)(dn.row, dn.orderbook, dn.bids)), {}, {
								children: (0, $.jsx)(pn, {
									renderer: mn,
									type: "bids",
									theme: s,
									snapshots: n,
									activeMarkets: t,
									snapshotConfig: r,
									heatmapMode: a,
									levelVolumeRenderingMode: o,
									customThemes: l,
									coinConfig: f,
									isDragging: _,
									imgUrl: p,
									canvasInfo: S,
									currentHoveredSymbol: R,
									marketsWithAggregatedMarkets: k
								})
							})), (0, $.jsx)("div", {
								className: dn.tradesDeltaWrapper,
								children: (0, $.jsx)(u.F.div, un(un({}, (0, d.Sh)(dn.row, dn.tradesDelta)), {}, {
									children: D((function(e, t) {
										return (0, x.createElement)(u.F.div, un(un({}, (0, d.Sh)(dn.cell)), {}, {
											key: t,
											style: {
												marginRight: Array.isArray(e) ? 200 : 0
											}
										}), (Array.isArray(e) ? Z(e[0].exchange, e[0].symbol) : Z(e.exchange, e.symbol)).view((function(e) {
											return e ? e.extra : void 0
										})).view((function(e) {
											return e ? (0, $.jsx)(ln, {
												volumeHistograms: e.volumeHistograms
											}) : null
										})))
									}))
								}))
							})]
						})]
					})
				},
				bn = n(611),
				yn = n.n(bn),
				_n = n(236),
				wn = n(6564),
				jn = n(5709),
				Cn = n(1931),
				kn = n(7449),
				Sn = n(1633),
				On = n.n(Sn),
				Pn = function() {
					function e(t) {
						var n = this;
						(0, A.Z)(this, e), (0, r.Z)(this, "timestamp", void 0), (0, r.Z)(this, "queued", void 0), (0, r.Z)(this, "context", void 0), (0, r.Z)(this, "output", void 0), (0, r.Z)(this, "volume", void 0), (0, r.Z)(this, "soundContextState", void 0), (0, r.Z)(this, "play", (function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
								i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "triangle";
							if ("running" === n.context.state) {
								var o = n.context.createOscillator(),
									a = n.context.createGain();
								o.type = i, o.frequency.value = e, o.onended = function() {
									o.disconnect()
								}, o.connect(a), a.connect(n.output);
								var s = n.context.currentTime;
								a.gain.value = Math.max(.02, Math.min(1, t)) * n.volume.get(), a.gain.exponentialRampToValueAtTime(1e-4, s + r), o.start(s), o.stop(s + r)
							}
						})), this.timestamp = +new Date, this.context = new window.AudioContext, this.soundContextState = t, this.soundContextState.set(this.context.state), this.queued = 0, this.volume = c.h.create(2);
						var i = new(On())(this.context),
							o = new i.Filter({
								Q: 1,
								detune: 3e3,
								frequency: 8700,
								gain: 100,
								rolloff: -20,
								type: "lowpass"
							});
						this.output = new i.PingPongDelay({
							wetLevel: .6,
							feedback: .01,
							delayTimeLeft: 175,
							delayTimeRight: 100
						}), this.output.connect(o), o.connect(this.context.destination)
					}
					return (0, Z.Z)(e, [{
						key: "tradeToSong",
						value: function(e, t, n) {
							var r = this;
							this.soundContextState.set(this.context.state);
							var i = +new Date;
							this.queued >= 10 || ("suspended" === this.context.state && this.context.resume(), this.queued++, setTimeout((function() {
								r.queued--, "buy" === t && (1 === n ? (r.play(659.26, .05 + Math.sqrt(e) / 10, .1 + .1 * e), setTimeout((function() {
									return r.play(830.6, .05 + Math.sqrt(e) / 10, .1 + .1 * e)
								}), 80)) : (r.play(987.76, .05 + Math.sqrt(e) / 25, .1 + .1 * e), setTimeout((function() {
									return r.play(1318.52, .05 + Math.sqrt(e) / 10, .1 + .1 * e)
								}), 80))), "sell" === t && (1 === n ? (r.play(493.88, .05 + Math.sqrt(1.5 * e) / 10, .1 + .1 * e), setTimeout((function() {
									return r.play(392, .05 + Math.sqrt(1.5 * e) / 10, .1 + .1 * e)
								}), 80)) : (r.play(293.66, .05 + Math.sqrt(1.5 * e) / 10, .2), setTimeout((function() {
									return r.play(246.94, .05 + Math.sqrt(1.5 * e) / 10, .1 + .1 * e)
								}), 80)))
							}), this.timestamp - i), this.timestamp = Math.max(this.timestamp, i) + (this.queued > 10 ? this.queued > 20 ? 20 : 40 : 80))
						}
					}, {
						key: "playLiq",
						value: function(e) {
							var t = this,
								n = +new Date;
							this.queued >= 10 || (this.queued++, setTimeout((function() {
								t.queued--, t.play(203.66, .05 + Math.sqrt(1.5 * e) / 10, .2, "triangle"), setTimeout((function() {
									return t.play(100, .05 + Math.sqrt(1.5 * e) / 10, .1 + .1 * e, "triangle")
								}), 80)
							}), this.timestamp - n), this.timestamp = Math.max(this.timestamp, n) + (this.queued > 10 ? this.queued > 20 ? 20 : 40 : 80))
						}
					}, {
						key: "resume",
						value: function() {
							"suspended" === this.context.state && this.context.resume()
						}
					}, {
						key: "suspend",
						value: function() {
							"running" === this.context.state && this.context.suspend()
						}
					}, {
						key: "close",
						value: function() {
							"running" === this.context.state && this.context.close()
						}
					}]), e
				}(),
				Tn = n(5044);

			function Mn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function An(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Mn(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Zn = n.n(Tn)(),
				Dn = function(e, t) {
					var n = Math.floor(e / 1e3),
						r = 3600;
					return n < 5 ? "now" : n < 60 ? n + "s" : n < r ? Math.floor(n / 60) + "m" : n < 86400 ? Math.floor(n / r) + "h" : Math.floor(n / 86400) + "d"
				},
				Ln = function(e) {
					var t = e.trade,
						n = e.hasIcon,
						r = e.timer,
						i = e.showExtended,
						o = e.isColorized,
						a = e.prevTradeTimestamp,
						s = t.exchange,
						l = t.price,
						c = t.side,
						h = t.amount,
						f = t.timestamp,
						g = t.symbol,
						v = t.amountInQuoteUnits,
						p = f.getTime(),
						m = n ? (0, $.jsx)(u.F.Fragment, {
							children: o.view((function(e) {
								return (0, $.jsx)(Ne.D, {
									className: e ? Zn.colorizedIcon : void 0,
									exchange: s,
									w: 20,
									h: 20
								})
							}))
						}) : null,
						x = (0, vt.uf)(v),
						b = function(e) {
							var t = e > 1e3,
								n = t ? (0, vt.f1)(e) : (0, vt.f2)(e);
							return [n, Number.isInteger(n) ? t ? ".0" : ".00" : ""]
						}(l),
						y = (0, M.Z)(b, 2),
						_ = y[0],
						w = y[1],
						j = (0, $.jsxs)($.Fragment, {
							children: [_, w ? (0, $.jsx)("span", {
								className: Zn.suffix,
								children: w
							}) : null]
						}),
						C = "buy" === c && Zn.buy || "sell" === c && Zn.sell || "";
					return (0, $.jsxs)(u.F.span, An(An({}, (0, d.Sh)(Zn.item, C, t.thresholdMultiplier > 4 ? Zn.veryBig : null, i.view((function(e) {
						return e && Zn.extended
					})), o.view((function(e) {
						return e && Zn.colorize
					})))), {}, {
						style: {
							"--itemOpacity": o.view((function(e) {
								return e ? Math.min(.2 + t.thresholdMultiplier / 4, 1) : 1
							}))
						},
						children: [(0, $.jsx)("span", {
							className: Zn.icon,
							title: s,
							children: m
						}), (0, $.jsx)(u.F.Fragment, {
							children: i.view((function(e) {
								return e ? (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsx)("span", {
										className: Zn.exchange,
										children: n ? s : ""
									}), (0, $.jsx)("span", {
										className: Zn.tradeTime,
										children: (0, O.Z)(p, "HH:mm:ss")
									})]
								}) : (0, $.jsx)(u.F.Fragment, {
									children: r.pipe((0, R.O)(Date.now()), (0, jn.U)((function(e) {
										var t = Dn(e - p),
											n = a ? Dn(e - a.getTime()) : "";
										return (0, $.jsx)("span", An(An({}, (0, d.Sh)(Zn.timer, n === t && Zn.hidden)), {}, {
											children: t
										}))
									})))
								})
							}))
						}), (0, $.jsx)("span", An(An({}, (0, d.Sh)(Zn.total)), {}, {
							children: x
						})), (0, $.jsx)(u.F.Fragment, {
							children: i.view((function(e) {
								return e ? (0, $.jsx)("span", An(An({}, (0, d.Sh)(Zn.amount)), {}, {
									children: (0, vt.f2)(h)
								})) : null
							}))
						}), (0, $.jsx)("span", An(An({}, (0, d.Sh)(Zn.price)), {}, {
							children: j
						})), (0, $.jsx)("span", An(An({}, (0, d.Sh)(Zn.market)), {}, {
							children: g
						}))]
					}))
				};

			function In(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Rn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? In(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Fn = yn(),
				En = function(e) {
					var t = e.liquidations,
						n = e.trades,
						r = e.feedMode,
						i = e.feedTheme,
						o = e.isTradesShown,
						a = e.soundVersion,
						s = e.soundContextState,
						l = e.isPopup,
						d = t.view((function(e) {
							return !!e.length
						})),
						h = new Pn(s),
						f = c.h.create(null);
					o.subscribe((function(e) {
						if (!l) {
							var t;
							if (e && f.get()) null === (t = f.get()) || void 0 === t || t.close();
							e || h.close()
						}
					})), a.subscribe((function(e) {
						e ? h.resume() : h.suspend()
					}));
					var g = c.h.create(window.innerHeight),
						v = (0, rt.R)(window, "resize").pipe((0, jn.U)((function() {
							return window.innerHeight
						})), (0, Cn.x)(), (0, R.O)(window.innerHeight)).subscribe((function(e) {
							return g.set(e)
						}));
					x.useEffect((function() {
						if (localStorage.getItem("okotoki-sound"))
							if ("0" !== localStorage.getItem("okotoki-sound")) {
								var e = +localStorage.getItem("okotoki-sound");
								a.set(e), 1 === e && h.volume.set(.5), 2 === e && h.volume.set(2), h.resume()
							} else a.set(0), h.suspend();
						return function() {
							v.unsubscribe()
						}
					}), []);
					var p = c.h.combine(g, d, (function(e, t) {
							return Math.floor((e - 50) * (1 - (t ? .35 : 0)) - 40)
						})),
						m = g.view((function(e) {
							return Math.floor(.35 * (e - 50) - 40)
						}));
					return (0, $.jsxs)(u.F.Fragment, {
						children: [l ? null : (0, $.jsx)("span", {
							className: Fn.popupBlock,
							onClick: function(e) {
								var t = window.open(window.location.href + "?mode=popup", "okotokiPopup", "width=400,height=800,top=".concat(e.clientY + 40, ",left=").concat(e.clientX - 350));
								t.onload = function() {
									t.onbeforeunload = function() {
										o.set(!0)
									}
								}, o.set(!1), f.set(t)
							},
							children: (0, $.jsx)(Vn, {})
						}), (0, $.jsx)(u.F.span, {
							className: Fn.soundsBlock,
							onClick: function() {
								a.modify((function(e) {
									return 0 === e ? (h.volume.set(.5), 1) : 1 === e ? (h.volume.set(2), 2) : 2 === e ? (h.volume.set(0), h.suspend(), 0) : void 0
								})), localStorage.setItem("okotoki-sound", JSON.stringify(a.get())), h.resume(), a.get() && h.tradeToSong(2.5, "buy", 1)
							},
							children: a.view((function(e) {
								return 2 === e ? (0, $.jsx)(Bn, {}) : 1 === e ? (0, $.jsx)(Hn, {}) : (0, $.jsx)(Nn, {})
							}))
						}), (0, $.jsx)(Un, {
							height: p,
							feedMode: r,
							feedTheme: i,
							trades: n,
							sound: h,
							isSoundEnabled: a,
							type: "trades",
							isPopup: l,
							isTradesShown: o
						}), d.view((function(e) {
							return e ? (0, $.jsx)(Un, {
								height: m,
								feedMode: r,
								feedTheme: i,
								trades: t,
								sound: h,
								isSoundEnabled: a,
								type: "liquidations",
								isPopup: l,
								isTradesShown: o
							}) : null
						}))]
					})
				},
				Hn = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: Fn.icon,
						children: (0, $.jsx)("path", {
							d: "M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2z"
						})
					})
				},
				Bn = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: Fn.icon,
						children: (0, $.jsx)("path", {
							d: "M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2zm0 4a5 5 0 0 0 0-10V5a7 7 0 0 1 0 14v-2z"
						})
					})
				},
				Nn = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: Fn.icon,
						children: (0, $.jsx)("path", {
							d: "M18 10.584l-2.293-2.291-1.414 1.414 2.293 2.291-2.291 2.291 1.414 1.415 2.292-2.292 2.294 2.292 1.414-1.415-2.293-2.291 2.291-2.29-1.414-1.415-2.292 2.291zM4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9z"
						})
					})
				},
				Vn = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 122.000000 122.000000",
						className: Fn.icon,
						style: {
							height: "20.2px",
							width: "12.2px"
						},
						children: (0, $.jsxs)("g", {
							transform: "translate(0.000000,122.000000) scale(0.100000,-0.100000)",
							stroke: "none",
							children: [(0, $.jsx)("path", {
								d: "M70 1202 c-71 -35 -70 -26 -70 -597 0 -488 1 -511 20 -542 39 -64 26 -63 592 -63 491 0 514 1 545 20 63 38 67 58 60 309 l-6 224 -55 56 -56 56 0 -273 0 -272 -490 0 -490 0 2 488 3 487 270 3 269 2 -59 60 -59 60 -221 0 c-189 0 -225 -2 -255 -18z"
							}), (0, $.jsx)("path", {
								d: "M823 1143 l77 -78 -152 -152 -153 -153 80 -80 80 -80 152 152 153 153 80 -80 80 -80 0 231 0 231 -97 6 c-54 4 -161 7 -238 7 l-140 0 78 -77z"
							})]
						})
					})
				};

			function Un(e) {
				var t = e.trades,
					n = e.feedMode,
					r = e.feedTheme,
					i = e.height,
					o = e.type,
					a = e.sound,
					s = e.isSoundEnabled,
					l = e.isPopup,
					h = e.isTradesShown,
					f = n.view((function(e) {
						return "extended" === e
					})),
					g = r.view((function(e) {
						return "colorized" === e
					})),
					v = c.h.create(0),
					p = (0, _n.aj)(v, t, i, (function(e, t, n) {
						var r = function(e, t, n, r) {
								return {
									begin: Math.floor(r / t),
									end: Math.min(n, Math.ceil((r + e) / t))
								}
							}(n, 25, t.length, e),
							i = r.begin,
							o = r.end - i;
						return Array.from(Array(o), (function(e, t) {
							return t + i
						}))
					}));
				t.subscribe((function(e) {
					if (e[0] && (0 !== s.get() && h.get() || 0 !== s.get() && l)) {
						var t = e[0],
							n = t.thresholdMultiplier,
							r = t.type,
							i = t.side;
						"big_trade" === r ? a.tradeToSong(2 * n, i, n > 2 ? 2 : 1) : a.playLiq(2 * n)
					}
				}));
				var m = (0, wn.F)(1e3).pipe((0, jn.U)((function(e) {
					return Date.now()
				})), (0, kn.B)());
				return (0, $.jsxs)(u.F.div, Rn(Rn({}, (0, d.Sh)(Fn.wrap, f.view((function(e) {
					return e && Fn.extendedVersion
				})))), {}, {
					style: {
						borderLeft: l ? "none" : "1px solid var(--borderColor)"
					},
					children: [(0, $.jsxs)("div", {
						className: Fn.header,
						children: ["Large ", o, " "]
					}), (0, $.jsx)(u.F.div, Rn(Rn({}, (0, d.oD)({
						forwardRef: "onScroll",
						scrollTop: v
					})), {}, {
						style: {
							position: "relative",
							overflowY: "auto",
							height: i.view((function(e) {
								return e + "px"
							}))
						},
						children: (0, $.jsx)(u.F.div, {
							style: {
								height: t.view((function(e) {
									return 25 * e.length + "px"
								}))
							},
							children: (0, d.Xh)(p, (function(e) {
								return (0, $.jsx)(u.F.div, {
									style: {
										position: "absolute",
										top: 25 * e + "px"
									},
									className: Fn.itemWrap,
									children: t.view((function(t) {
										var n = t[e];
										if (!n) return null;
										var r = n.exchange,
											i = t[e - 1],
											o = !i || i.exchange !== r;
										return (0, $.jsx)(Ln, {
											isColorized: g,
											showExtended: f,
											trade: n,
											hasIcon: o,
											timer: m,
											prevTradeTimestamp: i ? i.timestamp : void 0
										})
									}))
								}, e)
							}))
						})
					}))]
				}))
			}
			var Wn, zn = n(2137);

			function Gn(e) {
				(0, x.useEffect)((function() {
					var t = e.subscribe();
					return function() {
						return t.unsubscribe()
					}
				}), [e])
			}! function(e) {
				e.local = "local", e.dev = "dev", e.prod = "prod", e.stage = "stage"
			}(Wn || (Wn = {}));
			var qn = n(13),
				Yn = n.n(qn),
				Xn = n(2205),
				Jn = n.n(Xn),
				Qn = n(6186);

			function Kn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function $n(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Kn(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var er, tr = n.n(Qn)();
			! function(e) {
				e.default = "default", e.openEyes = "open-eyes-animation", e.blinking = "blinking-on-hover"
			}(er || (er = {}));
			var nr = function(e) {
					var t = e.size,
						n = void 0 === t ? 36 : t,
						r = e.variation,
						i = {
							default: tr.default,
							"open-eyes-animation": tr.openEyes,
							"blinking-on-hover": tr.blinking
						};
					return (0, $.jsxs)("div", $n($n({}, (0, d.Sh)(tr.logo, i[r])), {}, {
						children: [(0, $.jsx)(rr, {
							size: n,
							variation: r
						}), (0, $.jsx)(ir, {
							height: n
						})]
					}))
				},
				rr = function(e) {
					var t = e.size,
						n = e.variation;
					return (0, $.jsxs)("svg", $n($n({
						viewBox: "0 0 96 96",
						width: t,
						height: t
					}, (0, d.Sh)(tr.icon)), {}, {
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, $.jsx)("rect", {
							width: "96",
							height: "96",
							rx: "48",
							fill: "#FFF50F"
						}), (0, $.jsx)("circle", {
							cx: "48.0026",
							cy: "47.9997",
							r: "34.6667"
						}), (0, $.jsx)("circle", {
							cx: "47.9062",
							cy: "47.9062",
							r: "26.3438",
							fill: "#FFF50F"
						}), (0, $.jsx)("circle", {
							cx: "35.8434",
							cy: "48.0309",
							r: "7.53094",
							className: tr.eye
						}), (0, $.jsx)("circle", {
							cx: "60.2262",
							cy: "48.0309",
							r: "7.53094",
							className: tr.eye
						}), n === er.openEyes || n === er.blinking ? (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("circle", {
								cx: "35.8434",
								cy: "48.0309",
								r: "7.53094",
								stroke: "#FFF50F",
								strokeWidth: "1",
								fill: "#FFF50F",
								className: tr.eyeLid
							}), (0, $.jsx)("circle", {
								cx: "60.2262",
								cy: "48.0309",
								r: "7.53094",
								stroke: "#FFF50F",
								strokeWidth: "1",
								fill: "#FFF50F",
								className: tr.eyeLid
							})]
						}) : null]
					}))
				},
				ir = function(e) {
					var t = e.height,
						n = Math.floor(54 * t / 24);
					return (0, $.jsxs)("svg", $n($n({
						width: n,
						height: t
					}, (0, d.Sh)(tr.text)), {}, {
						viewBox: "0 0 54 24",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, $.jsx)("path", {
							d: "M4.28783 16C3.48098 16 2.75481 15.8177 2.10933 15.453C1.46385 15.0884 0.950929 14.5967 0.570557 13.9779C0.190185 13.3481 0 12.6464 0 11.8729C0 11.1105 0.190185 10.4254 0.570557 9.81768C0.950929 9.19889 1.46385 8.70718 2.10933 8.34254C2.75481 7.9779 3.48098 7.79558 4.28783 7.79558C5.08315 7.79558 5.80355 7.9779 6.44903 8.34254C7.10604 8.69613 7.62473 9.18232 8.0051 9.8011C8.38548 10.4199 8.57566 11.1105 8.57566 11.8729C8.57566 12.6464 8.38548 13.3481 8.0051 13.9779C7.62473 14.5967 7.10604 15.0884 6.44903 15.453C5.80355 15.8177 5.08315 16 4.28783 16ZM4.28783 14.558C4.80652 14.558 5.26758 14.442 5.671 14.2099C6.07443 13.9779 6.3914 13.663 6.62193 13.2652C6.85246 12.8564 6.96772 12.3923 6.96772 11.8729C6.96772 11.3646 6.8467 10.9116 6.60464 10.5138C6.37411 10.116 6.05714 9.80663 5.65371 9.58564C5.26181 9.35359 4.80652 9.23757 4.28783 9.23757C3.76914 9.23757 3.30808 9.35359 2.90466 9.58564C2.50123 9.80663 2.18426 10.116 1.95373 10.5138C1.7232 10.9116 1.60794 11.3646 1.60794 11.8729C1.60794 12.3923 1.7232 12.8564 1.95373 13.2652C2.18426 13.663 2.50123 13.9779 2.90466 14.2099C3.30808 14.442 3.76914 14.558 4.28783 14.558Z"
						}), (0, $.jsx)("path", {
							d: "M22.2191 16C21.4122 16 20.6861 15.8177 20.0406 15.453C19.3951 15.0884 18.8822 14.5967 18.5018 13.9779C18.1214 13.3481 17.9312 12.6464 17.9312 11.8729C17.9312 11.1105 18.1214 10.4254 18.5018 9.81768C18.8822 9.19889 19.3951 8.70718 20.0406 8.34254C20.6861 7.9779 21.4122 7.79558 22.2191 7.79558C23.0144 7.79558 23.7348 7.9779 24.3803 8.34254C25.0373 8.69613 25.556 9.18232 25.9363 9.8011C26.3167 10.4199 26.5069 11.1105 26.5069 11.8729C26.5069 12.6464 26.3167 13.3481 25.9363 13.9779C25.556 14.5967 25.0373 15.0884 24.3803 15.453C23.7348 15.8177 23.0144 16 22.2191 16ZM22.2191 14.558C22.7378 14.558 23.1988 14.442 23.6022 14.2099C24.0057 13.9779 24.3226 13.663 24.5532 13.2652C24.7837 12.8564 24.899 12.3923 24.899 11.8729C24.899 11.3646 24.7779 10.9116 24.5359 10.5138C24.3054 10.116 23.9884 9.80663 23.585 9.58564C23.1931 9.35359 22.7378 9.23757 22.2191 9.23757C21.7004 9.23757 21.2393 9.35359 20.8359 9.58564C20.4325 9.80663 20.1155 10.116 19.885 10.5138C19.6544 10.9116 19.5392 11.3646 19.5392 11.8729C19.5392 12.3923 19.6544 12.8564 19.885 13.2652C20.1155 13.663 20.4325 13.9779 20.8359 14.2099C21.2393 14.442 21.7004 14.558 22.2191 14.558Z"
						}), (0, $.jsx)("path", {
							d: "M37.8709 16C37.0641 16 36.3379 15.8177 35.6924 15.453C35.047 15.0884 34.534 14.5967 34.1537 13.9779C33.7733 13.3481 33.5831 12.6464 33.5831 11.8729C33.5831 11.1105 33.7733 10.4254 34.1537 9.81768C34.534 9.19889 35.047 8.70718 35.6924 8.34254C36.3379 7.9779 37.0641 7.79558 37.8709 7.79558C38.6663 7.79558 39.3867 7.9779 40.0321 8.34254C40.6891 8.69613 41.2078 9.18232 41.5882 9.8011C41.9686 10.4199 42.1588 11.1105 42.1588 11.8729C42.1588 12.6464 41.9686 13.3481 41.5882 13.9779C41.2078 14.5967 40.6891 15.0884 40.0321 15.453C39.3867 15.8177 38.6663 16 37.8709 16ZM37.8709 14.558C38.3896 14.558 38.8507 14.442 39.2541 14.2099C39.6575 13.9779 39.9745 13.663 40.205 13.2652C40.4356 12.8564 40.5508 12.3923 40.5508 11.8729C40.5508 11.3646 40.4298 10.9116 40.1877 10.5138C39.9572 10.116 39.6402 9.80663 39.2368 9.58564C38.8449 9.35359 38.3896 9.23757 37.8709 9.23757C37.3522 9.23757 36.8912 9.35359 36.4878 9.58564C36.0843 9.80663 35.7674 10.116 35.5368 10.5138C35.3063 10.9116 35.191 11.3646 35.191 11.8729C35.191 12.3923 35.3063 12.8564 35.5368 13.2652C35.7674 13.663 36.0843 13.9779 36.4878 14.2099C36.8912 14.442 37.3522 14.558 37.8709 14.558Z"
						}), (0, $.jsx)("path", {
							d: "M52.2365 15.8343V7.96133H53.7925V15.8343H52.2365ZM53.0145 6.38674C52.7263 6.38674 52.49 6.29834 52.3056 6.12155C52.1212 5.9337 52.029 5.70166 52.029 5.42541C52.029 5.16022 52.1212 4.93923 52.3056 4.76243C52.49 4.57459 52.7263 4.48066 53.0145 4.48066C53.3026 4.48066 53.5389 4.57459 53.7234 4.76243C53.9078 4.93923 54 5.16022 54 5.42541C54 5.70166 53.9078 5.9337 53.7234 6.12155C53.5389 6.29834 53.3026 6.38674 53.0145 6.38674Z"
						}), (0, $.jsx)("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M11.885 11.9518L15.585 15.8343H17.5906L13.6565 11.7461L17.435 7.96133H15.5504L11.885 11.6668V4H10.3289V15.8343H11.885V11.9518ZM13.6565 11.7461L13.2682 11.3425L13.199 12.2044L13.6565 11.7461Z"
						}), (0, $.jsx)("path", {
							d: "M13.2682 11.3425L13.199 12.2044L13.6565 11.7461L13.2682 11.3425Z"
						}), (0, $.jsx)("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M45.4681 11.9518L49.1681 15.8343H51.1737L47.2396 11.7461L51.0181 7.96133H49.1335L45.4681 11.6668V4H43.912V15.8343H45.4681V11.9518ZM47.2396 11.7461L46.8513 11.3425L46.7821 12.2044L47.2396 11.7461Z"
						}), (0, $.jsx)("path", {
							d: "M46.8513 11.3425L46.7821 12.2044L47.2396 11.7461L46.8513 11.3425Z"
						}), (0, $.jsx)("path", {
							d: "M31.09 16C30.4252 16 29.8961 15.8141 29.5028 15.4423C29.115 15.0653 28.9211 14.4651 28.9211 13.6419V8.9587H27.5V7.79558H28.9211V5.16542H30.5582V7.79558H32.5111V8.9587H30.5582V13.6419C30.5582 14.0561 30.6441 14.3615 30.8158 14.558C30.9876 14.7546 31.2175 14.8528 31.5056 14.8528C31.6995 14.8528 31.9155 14.8369 32.1538 14.805C32.392 14.7678 32.5776 14.736 32.7106 14.7094L32.9349 15.7371C32.6967 15.8061 32.4031 15.8672 32.054 15.9203C31.7105 15.9734 31.3892 16 31.09 16Z"
						})]
					}))
				},
				or = n(3346),
				ar = n.n(or),
				sr = n(6262),
				lr = n(3308),
				cr = n(7289);

			function ur(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function dr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ur(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ur(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var hr, fr = n.n(cr)();
			! function(e) {
				e.happy = "\ud83e\udd29", e.okay = "\ud83d\ude42", e.sad = "\ud83e\udd2c"
			}(hr || (hr = {}));
			var gr = function(e) {
					var t, n = e.user,
						i = (0, x.useRef)(null),
						o = (0, x.useState)(null),
						a = o[0],
						s = o[1],
						l = (0, x.useState)(!1),
						c = l[0],
						u = l[1],
						h = (0, x.useState)(!1),
						f = h[0],
						g = h[1];
					(0, x.useEffect)((function() {
						(0, Q.j)("feedbackForm/opened")
					}), []);
					var v = (t = {}, (0, r.Z)(t, hr.happy, (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("b", {
								children: "\u2764\ufe0f"
							}), (0, $.jsx)("br", {}), "Thanks a lot. ", (0, $.jsx)("br", {}), "We like you too!"]
						})), (0, r.Z)(t, hr.okay, (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("b", {
								children: "\ud83e\udd13"
							}), (0, $.jsx)("br", {}), "Thanks for the feedback.", (0, $.jsx)("br", {}), "It will be helpful for us."]
						})), (0, r.Z)(t, hr.sad, (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("b", {
								children: "\ud83e\udd7a"
							}), (0, $.jsx)("br", {}), "We\u02bcre sorry we let you down.", (0, $.jsx)("br", {}), "We\u02bcll get better!"]
						})), t),
						p = (0, $.jsxs)($.Fragment, {
							children: [(0, $.jsx)("b", {
								children: "\ud83d\ude31"
							}), (0, $.jsx)("br", {}), "Feedback was not submitted.", (0, $.jsx)("br", {}), "Stay calm and try again!"]
						});
					return c || f ? (0, $.jsx)("div", dr(dr({}, (0, d.Sh)(fr.wrap, fr.result, f && fr.error)), {}, {
						children: (0, $.jsx)("div", {
							children: c ? a ? v[a] : v[hr.okay] : p
						})
					})) : (0, $.jsx)("form", {
						name: "submit-email",
						ref: i,
						onSubmit: function(e) {
							e.preventDefault(), f && g(!1), (0, Q.j)("feedbackForm/submit"), u(!0);
							var t = new FormData(i.current),
								n = Object.fromEntries(t.entries());
							fetch("https://okotoki.com/api/sendFeedback", {
								method: "POST",
								body: JSON.stringify(n)
							}).then((function(e) {
								(0, Q.j)("feedbackForm/submit/success")
							})).catch((function(e) {
								g(!0), (0, Q.j)("feedbackForm/submit/error")
							}))
						},
						children: (0, $.jsxs)("div", {
							className: fr.wrap,
							children: [(0, $.jsx)("input", {
								name: "email",
								type: "hidden",
								value: n.email,
								required: !0
							}), (0, $.jsx)("input", {
								name: "name",
								type: "hidden",
								value: n.name,
								required: !0
							}), (0, $.jsx)("input", {
								name: "emotion",
								type: "hidden",
								value: a || "none",
								required: !0
							}), (0, $.jsx)("textarea", {
								name: "feedback",
								className: fr.textarea,
								placeholder: "Your feedback\u2026"
							}), (0, $.jsxs)("div", {
								className: fr.buttons,
								children: [
									[hr.happy, hr.okay, hr.sad].map((function(e, t) {
										return (0, $.jsx)("span", dr(dr({}, (0, d.Sh)(a === e && fr.active, fr.emotion)), {}, {
											onClick: function() {
												return function(e) {
													s(e === a ? null : e)
												}(e)
											},
											children: e
										}), t)
									})), (0, $.jsx)(Le.z, {
										type: "submit",
										className: fr.submit,
										children: "Send"
									})
								]
							})]
						})
					})
				},
				vr = n(260),
				pr = n.n(vr),
				mr = n(1664),
				xr = n.n(mr);

			function br(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? br(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : br(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var _r = pr(),
				wr = function(e) {
          console.log(t);
					var t = e.user,
						n = e.logout,
						r = e.onManageSubscription,
						i = e.theme,
						o = e.popup,
						a = t.plan,
						s = t.paidWithCrypto,
						l = t.lifetimePro,
						c = t.isReferral,
						u = a === E.mr.free;
					return (0, x.useEffect)((function() {
						(0, Q.j)("profileMenu/opened")
					}), []), (0, $.jsxs)("div", {
						className: _r.wrap,
						children: [(0, $.jsxs)("div", yr(yr({}, (0, d.Sh)(_r.header, u ? _r.free : _r.pro)), {}, {
							children: [(0, $.jsx)("b", {
								children: t.name
							}), (0, $.jsx)("div", {
								className: _r.sub,
								children: t.email
							})]
						})), u ? (0, $.jsx)(xr(), {
							href: "/upgrade",
							children: (0, $.jsx)("a", yr(yr({}, (0, d.Sh)(_r.item, _r.upgrade)), {}, {
								children: "Upgrade to Pro"
							}))
						}) : l ? (0, $.jsx)("div", yr(yr({}, (0, d.Sh)(_r.item)), {}, {
							onClick: function() {
								return o.set("lifetime")
							},
							children: "Your subscription"
						})) : s ? (0, $.jsx)("div", yr(yr({}, (0, d.Sh)(_r.item)), {}, {
							onClick: function() {
								return o.set("paid-with-crypto")
							},
							children: "My subscription"
						})) : (0, $.jsx)("div", yr(yr({
							onClick: r
						}, (0, d.Sh)(_r.item)), {}, {
							children: "Manage subscription"
						})), c ? (0, $.jsx)(xr(), {
							href: "/my-refs",
							children: (0, $.jsx)("a", yr(yr({}, (0, d.Sh)(_r.item, _r.upgrade)), {}, {
								children: "My Refs Stats"
							}))
						}) : null, (0, $.jsxs)("div", yr(yr({}, (0, d.Sh)(_r.item, _r.theme)), {}, {
							children: ["Theme", " ", (0, $.jsx)(pe.Y, {
								theme: i,
								className: _r.themeSelector,
								isProUser: !u
							})]
						})), (0, $.jsx)(xr(), {
							href: "/zen",
							children: (0, $.jsx)("a", yr(yr({}, (0, d.Sh)(_r.item, _r.zen)), {}, {
								children: "Bitcoin Zen"
							}))
						}), (0, $.jsx)(xr(), {
							href: "/changelog",
							children: (0, $.jsx)("a", yr(yr({}, (0, d.Sh)(_r.item)), {}, {
								children: "What\u02bcs new"
							}))
						}), (0, $.jsx)("div", yr(yr({}, (0, d.Sh)(_r.item)), {}, {
							onClick: function() {
								return o.set("contact")
							},
							children: "Support"
						})), (0, $.jsx)("div", {
							className: _r.item,
							onClick: n,
							children: (0, $.jsx)("span", {
								className: _r.logout,
								children: "Logout"
							})
						})]
					})
				};

			function jr(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Cr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? jr(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jr(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var kr = ar(),
				Sr = function(e) {
					var t = e.user,
						n = c.h.create(!1);
					return (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsx)("div", {
							children: (0, $.jsx)(u.F.span, Cr(Cr({}, (0, d.Sh)(kr.menuItem)), {}, {
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
						}), (0, $.jsx)(u.F.Fragment, {
							children: n.view((function(e) {
								return e ? (0, $.jsx)(sr.J, {
									modalClassName: kr.feedbackModal,
									alignment: "bottom right",
									isPopoverShown: n,
									position: {
										top: 24,
										left: -63
									},
									children: (0, $.jsx)(gr, {
										user: t
									})
								}) : null
							}))
						})]
					})
				},
				Or = function(e) {
					var t = e.user,
						n = e.size,
						r = e.logout,
						i = e.theme,
						o = e.api,
						a = c.h.create(null),
						s = function() {
							(0, Q.j)("profileMenu/manageSubscriptionClicked"), o.redirectToBillingPortal()
						},
						l = c.h.create(!1);
					return (0, $.jsxs)(u.F.Fragment, {
						children: [(0, $.jsx)(u.F.span, Cr(Cr({}, (0, d.Sh)(kr.profile, n && kr[n], l && kr.disabled)), {}, {
							onClick: function() {
								return l.modify((function(e) {
									return !e
								}))
							},
							style: {
								pointerEvents: l.view((function(e) {
									return e ? "none" : "initial"
								}))
							},
							children: (0, $.jsx)("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 32 32",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: (0, $.jsx)("path", {
									d: "M15.9999 3.19995C12.465 3.19995 9.59995 6.06502 9.59995 9.59995V10.6666C9.59995 14.2016 12.465 17.0666 15.9999 17.0666C19.5349 17.0666 22.3999 14.2016 22.3999 10.6666V9.59995C22.3999 6.06502 19.5349 3.19995 15.9999 3.19995ZM15.9979 20.2666C11.7248 20.2666 6.24213 22.5779 4.66453 24.6291C3.6896 25.8974 4.61768 27.7333 6.21662 27.7333H25.7812C27.3801 27.7333 28.3082 25.8974 27.3333 24.6291C25.7557 22.579 20.2709 20.2666 15.9979 20.2666Z"
								})
							})
						})), l.view((function(e) {
							if (e) {
								var n = a.subscribe((function(e) {
									e && (l.set(!1), n.unsubscribe())
								}));
								return (0, $.jsx)(sr.J, {
									style: {
										fontSize: "14px"
									},
									position: {
										top: 24,
										left: -30
									},
									isPopoverShown: l,
									alignment: "bottom right",
									children: (0, $.jsx)(wr, {
										user: t,
										logout: r,
										setLastSeen: o.setLastSeen,
										onManageSubscription: s,
										theme: i,
										popup: a
									})
								})
							}
						})), (0, $.jsx)(u.F.Fragment, {
							children: a.view((function(e) {
								return "lifetime" === e ? (0, $.jsx)(Mr, {
									name: t.name,
									popup: a
								}) : "paid-with-crypto" === e ? (0, $.jsx)(Tr, {
									name: t.name,
									subscriptionEnd: t.subscriptionEnd,
									popup: a
								}) : "contact" === e ? (0, $.jsx)(Pr, {
									name: t.name,
									popup: a
								}) : null
							}))
						})]
					})
				},
				Pr = function(e) {
					var t = e.name,
						n = e.popup;
					return (0, $.jsx)(Ar, {
						popup: n,
						children: (0, $.jsxs)("div", {
							className: kr.manageCryptoModal,
							children: ["Hello ", t, ",", (0, $.jsxs)("p", {
								className: kr.contactUs,
								children: ["Contact us at ", (0, $.jsx)("span", {
									children: "hey@okotoki.com"
								}), " with any questions or feedback."]
							})]
						})
					})
				},
				Tr = function(e) {
					var t = e.name,
						n = e.subscriptionEnd,
						r = e.popup;
					return (0, $.jsx)(Ar, {
						popup: r,
						children: (0, $.jsxs)("div", Cr(Cr({}, (0, d.Sh)(kr.manageCryptoModal, kr.pro)), {}, {
							children: ["Hello ", t, ",", (0, $.jsx)("br", {}), "Thanks for being Okotoki Pro member", (0, $.jsx)("br", {}), "Subscription is active until", " ", (0, O.Z)(1e3 * n, "MMMM do,\xa0yyyy"), (0, $.jsx)("br", {}), (0, $.jsxs)("p", {
								className: kr.contactUs,
								children: ["Contact us at ", (0, $.jsx)("span", {
									children: "hey@okotoki.com"
								}), " with any questions regarding your subscription."]
							})]
						}))
					})
				},
				Mr = function(e) {
					var t = e.name,
						n = e.popup;
					return (0, $.jsx)(Ar, {
						popup: n,
						children: (0, $.jsxs)("div", Cr(Cr({}, (0, d.Sh)(kr.manageCryptoModal, kr.pro)), {}, {
							children: ["Hello ", t, ",", (0, $.jsx)("br", {}), (0, $.jsx)("br", {}), "Lets be honest here. You are our good friend and we like you. Thus, your plan was upgraded to lifetime subscription (or until our server's last breath).", (0, $.jsx)("br", {}), (0, $.jsx)("br", {}), "No gimmicks, no bullshit. Use it as long as you'd like. The only thing we ask is to keep it to yourself aka not share access with other people.", (0, $.jsx)("br", {}), (0, $.jsx)("br", {}), "Best, Eugene of Okotoki.", (0, $.jsx)(lr.d, {})]
						}))
					})
				},
				Ar = function(e) {
					var t = e.children,
						n = e.popup;
					return (0, $.jsxs)(vt.h_, {
						children: [(0, $.jsx)("div", {
							className: kr.popup,
							children: t
						}), (0, $.jsx)("div", {
							className: kr.popupBackdrop,
							onClick: function() {
								return n.set(null)
							}
						})]
					})
				},
				Zr = n(5134),
				Dr = n.n(Zr),
				Lr = n(9826);

			function Ir(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Rr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ir(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Fr = Dr(),
				Er = function(e) {
					var t = e.isPopup,
						n = e.favorites,
						r = e.showSearch,
						i = e.activeCoinConfig,
						o = e.isAnonymous,
						a = e.lastPrice,
						s = e.globalSupportedCoins,
						l = e.onModifyFavorites,
						h = e.className;
					return (0, $.jsxs)("div", Rr(Rr({}, (0, d.Sh)(Fr.marketsSelector, h)), {}, {
						children: [(0, $.jsx)(u.F.div, {
							className: Fr.favoritesMarkets,
							children: c.h.combine(n, a, (function(e, n) {
								return null === e || void 0 === e ? void 0 : e.map((function(e, r) {
									return e === i.coin ? (0, $.jsxs)("span", Rr(Rr({}, (0, d.Sh)(Fr.activeItem)), {}, {
										children: [e, n ? " " + n : ""]
									}), r) : (0, $.jsx)(xr(), {
										href: "/app/".concat(e.toLowerCase()).concat(t ? "?mode=popup" : ""),
										children: (0, $.jsx)("a", {
											className: Fr.marketLink,
											children: e
										})
									}, r)
								}))
							}))
						}), t ? null : (0, $.jsx)("span", {
							className: Fr.searchMarkets,
							onClick: function(e) {
								e.stopPropagation(), e.preventDefault(), r.modify((function(e) {
									return !e
								}))
							}
						}), (0, $.jsx)(u.F.div, {
							children: r.view((function(e) {
								return e ? (0, $.jsx)("div", {
									className: Fr.coinSearchWrap,
									children: (0, $.jsx)(Lr.O, {
										isAnonymous: o,
										globalSupportedCoins: s,
										favorites: n,
										onFavChange: function(e) {
											n.modify((function(t) {
												var n = t.includes(e) ? (0, C.Z)(t.filter((function(t) {
													return t !== e
												}))) : [].concat((0, C.Z)(t), [e]);
												return l(n), n
											}))
										},
										onCloseClick: function() {
											return r.set(!1)
										}
									})
								}) : null
							}))
						})]
					}))
				},
				Hr = Jn(),
				Br = function(e) {
					var t = e.user,
						n = e.api,
						r = e.logout,
						i = e.theme,
						o = e.children,
						a = e.isPopup,
						s = t.view("plan").view((function(e) {
							return e === E.mr.pro
						}));
					return (0, $.jsxs)(u.F.div, {
						className: Hr.headerWrap,
						children: [s.view((function(e) {
							return (0, $.jsx)("div", {
								className: Hr.logo,
								children: (0, $.jsx)(nr, {
									variation: er.blinking,
									size: 36
								})
							})
						})), o, t.view((function(e) {
							return e && !a ? (0, $.jsxs)("span", {
								className: Hr.right,
								children: [a ? null : (0, $.jsx)(Sr, {
									user: e
								}), e.plan === E.mr.free ? (0, $.jsx)(Le.Q, {
									variation: "default",
									size: "small",
									target: "_self",
									href: "/upgrade",
									className: Hr.upgradeToProHook,
									onClick: function() {
										return (0, Q.j)("upgradeHookClicked", {
											location: "topBarMenu"
										})
									},
									children: "Upgrade to Pro"
								}) : null, a ? null : (0, $.jsx)(Or, {
									user: e,
									api: n,
									logout: r,
									theme: i
								})]
							}) : null
						}))]
					})
				},
				Nr = function(e) {
					var t = e.user,
						n = e.api,
						r = e.logout,
						i = e.theme,
						o = e.activeCoinConfig,
						a = e.globalSupportedCoins,
						s = e.isPopup,
						l = e.lastPrice,
						u = c.h.create(!1);
					return (0, $.jsx)(Br, {
						user: t,
						api: n,
						logout: r,
						theme: i,
						isPopup: s,
						children: (0, $.jsx)(Er, {
							lastPrice: l,
							isAnonymous: !1,
							isPopup: s,
							activeCoinConfig: o,
							globalSupportedCoins: a,
							onModifyFavorites: function(e) {
								return n.setFavorites(e)
							},
							showSearch: u,
							favorites: t.lens("favorites")
						})
					})
				},
				Vr = function(e) {
					var t = e.activeCoinConfig,
						n = e.globalSupportedCoins,
						r = e.isPopup,
						i = ["BTC", "ETH"];
					i.includes(t.coin) || i.push(t.coin);
					var o = c.h.create(i),
						a = c.h.create(!1);
					return (0, $.jsx)(Ur, {
						isPopup: r,
						children: (0, $.jsx)(Er, {
							lastPrice: c.h.create(""),
							isAnonymous: !0,
							isPopup: r,
							activeCoinConfig: t,
							globalSupportedCoins: n,
							onModifyFavorites: function() {},
							showSearch: a,
							favorites: o
						})
					})
				},
				Ur = function(e) {
					var t = e.children,
						n = e.isPopup;
					return (0, $.jsxs)(u.F.div, {
						className: Hr.headerWrap,
						children: [(0, $.jsx)("div", {
							className: Hr.logo,
							children: (0, $.jsx)(nr, {
								variation: er.blinking,
								size: 36
							})
						}), t, n ? null : (0, $.jsxs)("span", {
							className: Hr.right,
							children: [(0, $.jsx)(Le.Q, {
								className: Hr.signin,
								variation: "borderless",
								target: "_self",
								size: "small",
								href: "/signin?redirect=".concat(window.location.pathname),
								children: "Sign in"
							}), (0, $.jsx)(Le.Q, {
								className: Hr.signup,
								size: "small",
								target: "_self",
								href: "/signup?redirect=".concat(window.location.pathname),
								children: "Sign up"
							}), (0, $.jsx)(Le.Q, {
								className: Hr.createAnAccount,
								size: "small",
								target: "_self",
								href: "/signup?redirect=".concat(window.location.pathname),
								children: "Create an account"
							})]
						})]
					})
				},
				Wr = n(478),
				zr = n.n(Wr),
				Gr = n(3935),
				qr = n(6576);

			function Yr(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = (0, lt.Z)(e);
					if (t) {
						var i = (0, lt.Z)(this).constructor;
						n = Reflect.construct(r, arguments, i)
					} else n = r.apply(this, arguments);
					return (0, st.Z)(this, n)
				}
			}
			var Xr = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						(0, A.Z)(this, e), this.clear = t, (0, r.Z)(this, "values", {}), (0, r.Z)(this, "updated", !1)
					}
					return (0, Z.Z)(e, [{
						key: "obtain",
						value: function(e, t, n) {
							var r = this.values[e];
							return r || void 0 === t ? void 0 !== r && r.update(t, n) : (this.values[e] = r = new Jr(this, t, n), this.update()), r
						}
					}, {
						key: "isUpdated",
						value: function() {
							if (this.clear)
								for (var e in this.values) this.values[e].updated <= 0 && delete this.values[e];
							return this.updated
						}
					}, {
						key: "update",
						value: function() {
							this.updated = !0
						}
					}, {
						key: "reset",
						value: function() {
							this.updated = !1
						}
					}, {
						key: "recycle",
						value: function() {
							this.values = {}
						}
					}]), e
				}(),
				Jr = function(e) {
					(0, at.Z)(n, e);
					var t = Yr(n);

					function n(e, i, o) {
						var a;
						return (0, A.Z)(this, n), (a = t.call(this, i)).context = e, a.options = o, (0, r.Z)((0, ot.Z)(a), "transition", !1), (0, r.Z)((0, ot.Z)(a), "value", 0), (0, r.Z)((0, ot.Z)(a), "from", 0), (0, r.Z)((0, ot.Z)(a), "to", 0), (0, r.Z)((0, ot.Z)(a), "start", 0), (0, r.Z)((0, ot.Z)(a), "updated", 4), a.value = i, a
					}
					return (0, Z.Z)(n, [{
						key: "update",
						value: function(e, t) {
							t && (this.options = t), null != e && (this.updated > 0 && this.updated--, Math.abs(this.value - e) > 1e-4 && (this.transit(), this.transition = !0, this.from = this.value, this.to = e, this.start = Date.now()), this.transition && this.transit() && (this.updated = 4, this.context.update()))
						}
					}, {
						key: "transit",
						value: function() {
							var e, t, n;
							if (!this.transition) return !1;
							var r, i = (r = (Date.now() - this.start) / (null !== (e = null === (t = this.options) || void 0 === t ? void 0 : t.duration) && void 0 !== e ? e : 100)) < 0 ? 0 : r > 1 ? 1 : r;
							return null !== (n = this.options) && void 0 !== n && n.interpolator ? this.value = this.from + (this.to - this.from) * this.options.interpolator(i) : this.value = this.from + (this.to - this.from) * i, i >= 1 && (this.transition = !1), !0
						}
					}, {
						key: "isAnimating",
						value: function() {
							return this.transition
						}
					}, {
						key: "valueOf",
						value: function() {
							var e, t;
							return this.transit() && this.context.update(), null !== (e = this.options) && void 0 !== e && e.postprocess ? null === (t = this.options) || void 0 === t ? void 0 : t.postprocess(this.value) : this.value
						}
					}]), n
				}((0, qr.Z)(Number)),
				Qr = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = new Xr(e),
						n = function(e, n, r) {
							return t.obtain(e, n, r)
						};
					return n.context = t, n
				},
				Kr = "precision mediump float;\n#define GLSLIFY 1\n\nvarying lowp vec4 v_color;\n\nvoid main() {\n  if (v_color.a < 0.) {\n    gl_FragColor = vec4(v_color.rgb, -v_color.a * (fract((gl_FragCoord.x - gl_FragCoord.y) / 50.) >= .5 ? 1. : 0.));\n  } else {\n    gl_FragColor = v_color;\n  }\n}",
				$r = "#define GLSLIFY 1\nattribute vec2 a_position;\nattribute vec4 a_color;\n\nvarying lowp vec4 v_color;\n\nuniform vec2 u_resolution;\n\nvoid main() {\n  gl_Position = vec4(a_position / u_resolution * vec2(2., -2.) + vec2(-1., 1.), 1., 1.);\n  v_color = a_color;\n}",
				ei = "precision mediump float;\n#define GLSLIFY 1\n\nvarying lowp vec4 v_color;\nvarying highp vec2 v_uv;\nuniform sampler2D u_texture;\n\nvoid main() {\n  vec4 color = texture2D(u_texture, v_uv) * v_color;\n  gl_FragColor = vec4(color.rgb, pow(color.a, 2.));\n}",
				ti = "#define GLSLIFY 1\nattribute vec2 a_position;\nattribute vec4 a_color;\nattribute vec2 a_uv;\n\nvarying lowp vec4 v_color;\nvarying highp vec2 v_uv;\n\nuniform vec2 u_resolution;\n\nvoid main() {\n  gl_Position = vec4(a_position / u_resolution * vec2(2., -2.) + vec2(-1., 1.), 1., 1.);\n  v_color = a_color;\n  v_uv = a_uv;\n}";

			function ni(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return ri(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ri(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						s = !0, o = e
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function ri(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var ii = function() {
				function e(t, n, i) {
					var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
					(0, A.Z)(this, e), this.exchange = t, this.symbol = n, this.svg = i, this.scale = o, (0, r.Z)(this, "image", void 0), (0, r.Z)(this, "loaded", !1), (0, r.Z)(this, "whenLoaded", [])
				}
				return (0, Z.Z)(e, [{
					key: "drawInternal",
					value: function(e, t, n, r, i) {
						var o = this;
						if (this.image)
							if (this.loaded) {
								var a = r * this.scale;
								e.drawImage(this.image, t - a / 2, n - a / 2, a, a), null === i || void 0 === i || i()
							} else this.whenLoaded.push((function() {
								return o.drawInternal(e, t, n, r, i)
							}));
						else this.image = new Image, this.whenLoaded.push((function() {
							return o.drawInternal(e, t, n, r, i)
						})), this.image.onload = function() {
							o.loaded = !0;
							var e, t = ni(o.whenLoaded);
							try {
								for (t.s(); !(e = t.n()).done;) {
									var n = e.value;
									null === n || void 0 === n || n()
								}
							} catch (r) {
								t.e(r)
							} finally {
								t.f()
							}
							o.whenLoaded = []
						}, this.image.onerror = console.error, this.image.width = this.image.height = r, this.image.src = URL.createObjectURL(new Blob([this.svg], {
							type: "image/svg+xml"
						}))
					}
				}, {
					key: "draw",
					value: function(e, t, n, r) {
						var i = this;
						return new Promise((function(o) {
							return i.drawInternal(e, t, n, r, o)
						}))
					}
				}], [{
					key: "make",
					value: function(t, n, r) {
						var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						return new e(t, n, r, i)
					}
				}, {
					key: "allIcons",
					value: function() {
						return Object.keys(this.bySymbol).join("")
					}
				}, {
					key: "find",
					value: function(t) {
						var n = e.byExchange[t];
						return n ? n.symbol : ""
					}
				}]), e
			}();
			(0, r.Z)(ii, "values", [ii.make(["binance", "binance-\u24bb", "binance-\u24b9"], "\ue001", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="m98.87 116.031 29.129-29.129 29.145 29.145 16.95-16.95L127.999 53l-46.08 46.081 16.95 16.95zM86.9 127.996l-16.95-16.949L53 127.997l16.95 16.949 16.95-16.95zm11.97 11.973L128 169.098l29.144-29.143 16.959 16.94-.009.01L128 203l-46.081-46.08-.024-.024 16.975-16.927zm87.18 4.986 16.95-16.95-16.949-16.949-16.95 16.95 16.949 16.949z"/><path d="M145.192 127.99h.007l-17.2-17.2-12.711 12.711h-.001l-1.459 1.461-3.013 3.013-.024.023.024.025 17.184 17.184 17.2-17.199.008-.01-.015-.008z"/></svg>', 1.5), ii.make(["kraken"], "\ue002", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M122.036 64.143C139.489 63.1047 156.81 67.7409 171.411 77.3592C186.011 86.9775 197.108 101.062 203.044 117.507C206.287 126.087 208.001 135.17 208.107 144.341V178.264C208.258 179.644 208.258 181.036 208.107 182.415C207.724 184.122 206.947 185.715 205.84 187.069C204.732 188.422 203.324 189.499 201.728 190.212C199.988 191.013 198.078 191.373 196.167 191.259C194.255 191.145 192.401 190.562 190.769 189.56C189.137 188.559 187.777 187.171 186.809 185.518C185.842 183.865 185.297 182 185.222 180.086V148.392C185.624 145.38 185.131 142.316 183.805 139.582C182.527 137.414 180.581 135.718 178.259 134.748C175.937 133.778 173.362 133.586 170.922 134.202C168.482 134.818 166.307 136.208 164.723 138.163C163.138 140.119 162.23 142.535 162.135 145.05V177.049C162.439 179.028 162.439 181.043 162.135 183.023C161.588 184.903 160.563 186.608 159.162 187.975C157.76 189.341 156.028 190.321 154.135 190.82C151.671 191.498 149.051 191.338 146.687 190.367C144.323 189.396 142.349 187.668 141.073 185.453C139.663 182.637 139.134 179.461 139.554 176.34V144.544C139.473 142.316 138.749 140.16 137.47 138.334C136.19 136.509 134.41 135.093 132.343 134.258C130.276 133.423 128.012 133.204 125.823 133.628C123.635 134.051 121.616 135.099 120.01 136.646C118.889 137.739 117.998 139.047 117.389 140.49C116.781 141.933 116.467 143.484 116.466 145.05V175.428C116.745 178.015 116.504 180.632 115.757 183.124C114.979 185.348 113.527 187.275 111.604 188.636C109.68 189.997 107.38 190.725 105.024 190.719C102.619 190.773 100.259 190.069 98.2773 188.706C96.296 187.343 94.7946 185.389 93.9864 183.124C93.3791 180.848 93.1735 178.484 93.3788 176.137V144.746C93.2947 142.127 92.3293 139.612 90.6387 137.609C88.9481 135.606 86.6312 134.232 84.0628 133.709C81.6946 133.24 79.2388 133.524 77.0409 134.523C74.8431 135.522 73.0137 137.185 71.8103 139.278C70.7967 141.037 70.2397 143.021 70.1901 145.05V179.783C70.2082 181.459 69.8542 183.119 69.1539 184.642C68.4535 186.165 67.4241 187.515 66.1397 188.592C64.0964 190.219 61.5619 191.105 58.9502 191.105C56.3385 191.105 53.804 190.219 51.7607 188.592C50.2748 187.586 49.062 186.227 48.2313 184.636C47.4006 183.045 46.978 181.273 47.0015 179.479V144.645C46.9293 132.618 49.5363 120.725 54.6331 109.831C59.73 98.9363 67.1889 89.3135 76.4683 81.6611C89.4746 71.2401 105.398 65.1185 122.036 64.143V64.143Z"/></svg>', 1.25), ii.make(["bitmex"], "\ue003", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M112.915 66H81.786L51 190h30.957l19.327-77.65h30.958L143.872 66h-30.957z" fill="#FFF"/><path d="M174.829 66l-11.63 46.35-7.697 31.129h-30.957L112.915 190H175l19.327-77.65L205.787 66h-30.958z"/></svg>', 1.25), ii.make(["ftx"], "\ue004", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M41 168H18V88H81V105H41V123H76.5V140.5H41V168Z"/><path d="M161 88H89V106H114.5V168H136.5V106H161V88Z"/><path d="M189 88H163.5L191.5 127.5L162 168H188L205 143L221 168H247L217.5 126.5L245 88H221L205 111L189 88Z"/></svg>', 1), ii.make(["okex", "okex-\u24b9", "okex-\u24bb"], "\ue005", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M81.4872 94H16.5109C16.1102 94 15.7258 94.1591 15.4426 94.4426C15.1591 94.7258 15 95.1102 15 95.5112V160.488C15 160.888 15.1591 161.273 15.4426 161.556C15.7258 161.839 16.1102 161.998 16.5109 161.998H81.4872C81.8883 161.998 82.2726 161.839 82.5558 161.556C82.8394 161.273 82.9984 160.888 82.9984 160.488V95.5112C82.9984 95.1102 82.8394 94.7258 82.5558 94.4426C82.2726 94.1591 81.8883 94 81.4872 94ZM60.3322 137.821C60.3322 138.222 60.1731 138.606 59.8896 138.89C59.6063 139.173 59.222 139.332 58.8213 139.332H39.1771C38.7764 139.332 38.3921 139.173 38.1085 138.89C37.8253 138.606 37.6662 138.222 37.6662 137.821V118.177C37.6662 117.776 37.8253 117.392 38.1085 117.109C38.3921 116.825 38.7764 116.666 39.1771 116.666H58.8213C59.222 116.666 59.6063 116.825 59.8896 117.109C60.1731 117.392 60.3322 117.776 60.3322 118.177V137.821Z"/><path d="M217.522 116.669H197.878C197.044 116.669 196.367 117.345 196.367 118.18V137.824C196.367 138.658 197.044 139.335 197.878 139.335H217.522C218.357 139.335 219.033 138.658 219.033 137.824V118.18C219.033 117.345 218.357 116.669 217.522 116.669Z"/><path d="M194.847 94.0019H175.203C174.368 94.0019 173.692 94.6782 173.692 95.513V115.157C173.692 115.991 174.368 116.668 175.203 116.668H194.847C195.681 116.668 196.358 115.991 196.358 115.157V95.513C196.358 94.6782 195.681 94.0019 194.847 94.0019Z"/><path d="M240.179 94.0019H220.535C219.7 94.0019 219.024 94.6782 219.024 95.513V115.157C219.024 115.991 219.7 116.668 220.535 116.668H240.179C241.014 116.668 241.69 115.991 241.69 115.157V95.513C241.69 94.6782 241.014 94.0019 240.179 94.0019Z"/><path d="M194.847 139.334H175.203C174.368 139.334 173.692 140.01 173.692 140.845V160.489C173.692 161.323 174.368 162 175.203 162H194.847C195.681 162 196.358 161.323 196.358 160.489V140.845C196.358 140.01 195.681 139.334 194.847 139.334Z"/><path d="M240.179 139.334H220.535C219.7 139.334 219.024 140.01 219.024 140.845V160.489C219.024 161.323 219.7 162 220.535 162H240.179C241.014 162 241.69 161.323 241.69 160.489V140.845C241.69 140.01 241.014 139.334 240.179 139.334Z"/><path d="M160.819 94.0019H141.175C140.341 94.0019 139.664 94.6782 139.664 95.513V115.157C139.664 115.991 140.341 116.668 141.175 116.668H160.819C161.653 116.668 162.33 115.991 162.33 115.157V95.513C162.33 94.6782 161.653 94.0019 160.819 94.0019Z"/><path d="M160.819 139.334H141.175C140.341 139.334 139.664 140.01 139.664 140.845V160.489C139.664 161.323 140.341 162 141.175 162H160.819C161.653 162 162.33 161.323 162.33 160.489V140.845C162.33 140.01 161.653 139.334 160.819 139.334Z"/><path d="M139.664 118.16C139.664 117.759 139.505 117.375 139.221 117.092C138.938 116.808 138.553 116.649 138.153 116.649H116.998V95.5112C116.998 95.1102 116.838 94.7258 116.555 94.4426C116.272 94.1591 115.887 94 115.486 94H95.8426C95.4416 94 95.0572 94.1591 94.774 94.4426C94.4905 94.7258 94.3314 95.1102 94.3314 95.5112V160.454C94.3314 160.854 94.4905 161.239 94.774 161.522C95.0572 161.805 95.4416 161.964 95.8426 161.964H115.486C115.887 161.964 116.272 161.805 116.555 161.522C116.838 161.239 116.998 160.854 116.998 160.454V139.315H138.153C138.553 139.315 138.938 139.156 139.221 138.873C139.505 138.589 139.664 138.205 139.664 137.804V118.16Z"/></svg>', 1), ii.make(["huobi", "huobi-\u24b9", "huobi-\u24c8", "huobi-\u24bb"], "\ue006", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path fillRule="evenodd" clipRule="evenodd" d="M144.558 94.5424C144.558 72.8291 133.98 54.1568 125.934 48.0763C125.9 48.0572 125.318 47.7295 125.367 48.5978L125.356 48.6245C124.688 90.5478 103.268 101.911 91.4924 117.217C64.3169 152.54 89.5899 191.266 115.326 198.424C129.726 202.429 112 191.338 109.718 167.911C106.957 139.596 144.558 117.982 144.558 94.5424Z"/><path fillRule="evenodd" clipRule="evenodd" d="M156.906 108.816C156.742 108.704 156.507 108.627 156.345 108.895C155.903 114.172 150.512 125.461 143.678 135.827C120.501 170.988 133.709 187.937 141.136 197.041C145.448 202.326 141.136 197.041 151.914 191.64C152.758 191.217 172.945 179.897 175.13 154.107C177.247 129.132 162.245 113.389 156.906 108.816Z"/></svg>', 1.5), ii.make(["deribit"], "\ue007", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M154.126 79.3042H149.835V55H125.398V79.3042H100.961V55H76.4367V79.3042H52V103.608H76.4367V152.304H52V176.608H76.4367V201H100.873V176.696H125.31V201H149.747V176.696H154.039C181.015 176.696 203 154.927 203 128C203.087 101.16 181.191 79.3042 154.126 79.3042ZM154.126 152.392H100.961V103.696H154.214C167.702 103.696 178.651 114.624 178.651 128C178.651 141.463 167.615 152.392 154.126 152.392Z"/></svg>', 1.5), ii.make(["coinbase"], "\ue008", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path fillRule="evenodd" clipRule="evenodd" d="M157.94 103.038l20.042-19.554C166.348 71.47 150.046 64 132 64c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64 17.513 0 33.384-7.035 44.94-18.432l-19.357-20.24C151.059 159.918 142.006 164 132 164c-19.882 0-36-16.118-36-36s16.118-36 36-36c10.19 0 19.391 4.234 25.94 11.038z"/></svg>', 1.5), ii.make(["bitstamp"], "\ue009", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M86 192h84v-13.37H86V192z" /><path d="M147.2 141.688c-2.8 2.789-6.6 3.984-11.4 3.984h-22.4v-28.884h22.4c4.6 0 8.4 1.395 11.4 3.984 2.8 2.59 4.2 6.175 4.2 10.359.2 4.382-1.2 7.968-4.2 10.557zm-33.8-63.943H134c4.2 0 7.6 1.195 10.4 3.785 2.8 2.39 4 5.776 4 9.76s-1.4 7.172-4 9.562c-2.8 2.391-6.2 3.586-10.4 3.586h-20.6V77.745zm52.2 40.836c-3-4.183-7-7.171-12-8.964 4-1.793 7-4.382 9.4-7.968 2.4-3.586 3.6-7.769 3.6-12.55 0-3.785-.8-7.17-2.2-10.159-1.4-3.187-3.6-5.777-6.2-7.968s-5.8-3.984-9.4-5.18c-3.6-1.194-7.6-1.792-12-1.792H86v12.749c7.8 0 14 6.374 14 14.143 0 7.769-6.2 14.143-14 14.143v11.554c7.8 0 14 6.374 14 14.143v2.191c0 7.769-6.2 14.144-14 14.144v12.749h53c4.6 0 8.6-.598 12.4-1.992 3.8-1.196 7-2.988 9.8-5.379 2.8-2.39 5-5.179 6.4-8.366 1.6-3.188 2.4-6.773 2.4-10.757 0-5.777-1.4-10.558-4.4-14.741z"/></svg>', 1.5), ii.make(["bitfinex", "bitfinex-\u24b9"], "\ue00a", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M70.73 173.446c5.764 6.114 37.422 35.419 87.113 1.409 35.932-28.03 35.034-88.8 31.583-107.151-1.203 2.67-42.939 94.221-118.695 105.742zM189.422 67.688c-.44-.182-46.668-6.495-92.368 22.989-28.378 18.309-32.13 45.105-30.835 62.961 66.434-7.447 121.696-83.85 123.203-85.95z"/><path d="M187.628 67.677c-.434-.18-45.99-6.39-91.026 22.616-27.966 18.013-31.663 44.376-30.387 61.942 65.469-7.326 119.928-82.493 121.413-84.558z"/></svg>', 1.5), ii.make(["bybit", "bybit-\u24c8"], "\ue00b", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#FFF"><path d="M161.92 104.494C161.92 104.494 152.9 101.618 152.35 101.95L108.46 43.9825C108.46 43.9825 99.9905 47.8544 99.4405 48.2969L136.51 94.5381C135.85 95.3125 127.49 95.3125 126.72 95.3125L87.5605 56.2619L80.8505 64.0056L113.3 95.3125C112.64 96.0869 105.27 99.0738 104.61 99.9588L73.3705 76.0637C73.3705 76.6169 69.5205 84.5819 69.1905 85.135L94.4905 103.277C94.4905 104.052 88.1105 109.251 87.5605 110.136L68.6405 100.069C68.6405 100.069 68.6405 109.362 68.6405 109.804L79.6405 116.774L78.8705 118.433L68.7505 116.442L76.0105 121.973C61.4905 142.328 64.9005 174.962 83.4905 197.419L76.5605 177.949H77.9905L90.8605 207.265C90.8605 207.265 99.5505 210.141 100.21 209.92L79.5305 164.453C79.5305 164.453 82.0605 158.037 82.5005 157.816L114.4 216.226C115.06 216.226 124.19 217.332 125.4 216.889L87.1205 152.395C87.1205 152.395 97.0205 157.373 98.1205 156.931L138.49 216.226C139.04 216.226 147.51 213.349 147.95 212.907L109.45 160.581C110.11 160.581 119.9 162.572 120.45 162.019L160.16 206.269C160.16 206.269 167.53 200.185 167.97 199.632L134.09 164.011C134.75 163.236 143.11 161.688 143.77 160.913L176.77 188.459L182.6 180.383L154.66 158.258C154.66 157.373 162.03 153.059 162.58 152.174L185.79 166.444C185.79 165.891 187 157.152 187.22 156.709L171.49 146.089C171.49 145.426 176.66 140.116 176.99 139.562L187.22 141.664L179.74 136.133C193.93 117.327 189.86 80.8206 170.72 58.6956L180.4 84.25C180.4 84.25 174.9 85.0244 174.35 85.3562L156.86 47.965C156.31 47.965 147.07 43.9825 146.41 44.3144L172.37 96.7506C171.82 96.7506 165.55 95.9763 165 96.7506L132.11 40C131.45 40 122.76 41.1063 122.21 41.5488L161.92 104.494Z"/></svg>', 1.5)]), (0, r.Z)(ii, "byExchange", ii.values.reduce((function(e, t) {
				var n, r = ni(t.exchange);
				try {
					for (r.s(); !(n = r.n()).done;) {
						e[n.value] = t
					}
				} catch (i) {
					r.e(i)
				} finally {
					r.f()
				}
				return e
			}), {})), (0, r.Z)(ii, "bySymbol", Object.fromEntries(ii.values.map((function(e) {
				return [e.symbol, e]
			}))));
			var oi = function(e) {
					return window.devicePixelRatio * e
				},
				ai = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					return !e || 1 == t && e < .01 ? "" : e < .05 && 1 == t && e >= .01 ? " " + e.toFixed(2).substring(1) : e < 1 ? " " + e.toFixed(t).substring(1) : e < 1500 ? e.toFixed(t) : e < 125e4 ? (e / 1e3).toFixed(1) + "k" : (e / 1e6).toFixed(1) + "m"
				},
				si = function(e) {
					return e < 1e3 ? e + "ms" : e < 6e4 ? ~~(e / 1e3) + "s" : e < 36e5 ? ~~(e / 6e4) + "m" : e < 864e5 ? Math.round(e / 36e5 * 10) / 10 + "h" : e < 6048e5 ? Math.round(e / 864e5 * 10) / 10 + "d" : Math.round(e / 6048e5 * 10) / 10 + "w"
				},
				li = function(e, t, n) {
					return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n, e[3] + (t[3] - e[3]) * n]
				};

			function ci(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return ui(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ui(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						s = !0, o = e
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function ui(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var di = function(e) {
					var t = (0, M.Z)(e, 4),
						n = t[0],
						r = t[1],
						i = t[2],
						o = t[3],
						a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					return "rgba(".concat(255 * n, ", ").concat(255 * r, ", ").concat(255 * i, ", ").concat(o * a, ")")
				},
				hi = function() {
					function e(t, n) {
						var i, o, a, s, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '"Source Code Pro"',
							c = arguments.length > 3 ? arguments[3] : void 0,
							u = arguments.length > 4 ? arguments[4] : void 0;
						if ((0, A.Z)(this, e), this.canvas = t, this.theme = n, this.font = l, this.wireframe = u, (0, r.Z)(this, "ctx", void 0), (0, r.Z)(this, "gl", void 0), (0, r.Z)(this, "gl1", void 0), (0, r.Z)(this, "gl2", void 0), (0, r.Z)(this, "wf", void 0), (0, r.Z)(this, "textProgram", void 0), (0, r.Z)(this, "textProgramPosition", 0), (0, r.Z)(this, "textProgramTextureUV", 0), (0, r.Z)(this, "textProgramColor", 0), (0, r.Z)(this, "textProgramResolution", null), (0, r.Z)(this, "textProgramTexture", null), (0, r.Z)(this, "textColorsBuffer", null), (0, r.Z)(this, "textVertexBuffer", null), (0, r.Z)(this, "textUVBuffer", null), (0, r.Z)(this, "rectProgram", void 0), (0, r.Z)(this, "rectProgramPosition", 0), (0, r.Z)(this, "rectProgramColor", 0), (0, r.Z)(this, "rectProgramResolution", null), (0, r.Z)(this, "rectColorsBuffer", null), (0, r.Z)(this, "rectVertexBuffer", null), (0, r.Z)(this, "indexBuffer", null), (0, r.Z)(this, "indices", new Uint16Array), (0, r.Z)(this, "rectVertices", new fi), (0, r.Z)(this, "rectColors", new fi), (0, r.Z)(this, "textVertices", new fi), (0, r.Z)(this, "textColors", new fi), (0, r.Z)(this, "textUV", new fi), (0, r.Z)(this, "lastFontSize", void 0), (0, r.Z)(this, "fontTexture", null), (0, r.Z)(this, "lastWeight", ""), (0, r.Z)(this, "handleContextLost", (function() {
								window.location.reload()
							})), (0, r.Z)(this, "buffers", []), (0, r.Z)(this, "shaders", []), (0, r.Z)(this, "programs", []), (0, r.Z)(this, "symbolScale", 1), (0, r.Z)(this, "symbolWidth", 0), (0, r.Z)(this, "symbolHeight", 0), (0, r.Z)(this, "REGULAR", ""), (0, r.Z)(this, "BOLD", "900"), (0, r.Z)(this, "SYMBOLS_VARIANTS", [this.REGULAR, this.BOLD]), (0, r.Z)(this, "SYMBOLS", "0123456789.,kmshdw ".concat(ii.allIcons())), (0, r.Z)(this, "symbolsCount", 0), "webgl" === c) {
							var d, h, f, g = {
								antialias: !0,
								alpha: !1,
								depth: !1,
								preserveDrawingBuffer: !0
							};
							if (this.gl2 = null !== (d = t.getContext("webgl2", g)) && void 0 !== d ? d : void 0, !this.gl2) this.gl1 = null !== (f = t.getContext("webgl", g)) && void 0 !== f ? f : void 0;
							this.gl = null !== (h = this.gl2) && void 0 !== h ? h : this.gl, this.gl && (this.textProgram = this.glMakeProgram(ti, ei), this.textProgramPosition = this.gl.getAttribLocation(this.textProgram, "a_position"), this.textProgramTextureUV = this.gl.getAttribLocation(this.textProgram, "a_uv"), this.textProgramColor = this.gl.getAttribLocation(this.textProgram, "a_color"), this.textProgramResolution = this.gl.getUniformLocation(this.textProgram, "u_resolution"), this.textProgramTexture = this.gl.getUniformLocation(this.textProgram, "u_texture"), this.textVertexBuffer = this.glMakeBuffer(), this.textColorsBuffer = this.glMakeBuffer(), this.textUVBuffer = this.glMakeBuffer(), this.rectProgram = this.glMakeProgram($r, Kr), this.rectProgramPosition = this.gl.getAttribLocation(this.rectProgram, "a_position"), this.rectProgramColor = this.gl.getAttribLocation(this.rectProgram, "a_color"), this.rectProgramResolution = this.gl.getUniformLocation(this.rectProgram, "u_resolution"), this.rectVertexBuffer = this.glMakeBuffer(), this.rectColorsBuffer = this.glMakeBuffer(), this.indexBuffer = this.glMakeBuffer())
						}
						if (("canvas" === c || !this.gl) && (this.ctx = null !== (a = t.getContext("2d")) && void 0 !== a ? a : void 0, !this.ctx)) throw 'failed to get "2d" context';
						u && (this.wf = null !== (s = u.getContext("2d")) && void 0 !== s ? s : void 0);
						null === (i = this.canvas) || void 0 === i || null === (o = i.addEventListener) || void 0 === o || o.call(i, "webglcontextlost", this.handleContextLost)
					}
					return (0, Z.Z)(e, [{
						key: "resize",
						value: function(e) {
							var t = this;
							if (this.gl) {
								var n = this.gl;
								!e && this.lastFontSize == oi(11) && this.fontTexture || (this.fontTexture && (n.deleteTexture(this.fontTexture), this.fontTexture = null), this.glSetupFont(this.fontTexture, this.lastFontSize = oi(11)).then((function(e) {
									t.fontTexture = e, t.textProgram && t.fontTexture && (n.useProgram(t.textProgram), n.uniform2f(t.textProgramResolution, t.canvas.width, t.canvas.height), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.fontTexture), n.uniform1i(t.textProgramTexture, 0))
								}))), this.textProgram && this.fontTexture && (n.useProgram(this.textProgram), n.uniform2f(this.textProgramResolution, this.canvas.width, this.canvas.height), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, this.fontTexture), n.uniform1i(this.textProgramTexture, 0)), n.viewport(0, 0, this.canvas.width, this.canvas.height), n.clearColor.apply(n, (0, C.Z)(this.theme.bg)), n.enable(n.BLEND), n.blendEquation(n.FUNC_ADD), n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA), n.disable(n.DEPTH_TEST), this.rectProgram && (n.useProgram(this.rectProgram), n.uniform2f(this.rectProgramResolution, this.canvas.width, this.canvas.height))
							}
							this.ctx && (this.ctxUpdateBold(this.REGULAR, !0), this.ctx.textBaseline = "middle")
						}
					}, {
						key: "recolor",
						value: function(e) {
							var t;
							(this.theme = e, this.gl) && (t = this.gl).clearColor.apply(t, (0, C.Z)(this.theme.bg))
						}
					}, {
						key: "frameBegin",
						value: function() {
							this.gl && (this.textVertices.clear(), this.textUV.clear(), this.rectVertices.clear(), this.rectColors.clear(), this.textColors.clear())
						}
					}, {
						key: "clear",
						value: function() {
							var e, t, n, r, i;
							this.gl ? this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT) : this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), null === (e = this.wf) || void 0 === e || e.clearRect(0, 0, null !== (t = null === (n = this.wireframe) || void 0 === n ? void 0 : n.width) && void 0 !== t ? t : 0, null !== (r = null === (i = this.wireframe) || void 0 === i ? void 0 : i.height) && void 0 !== r ? r : 0)
						}
					}, {
						key: "drawRect",
						value: function(e, t, n, r, i, o) {
							0 != i && 0 != o && (this.gl ? (this.rectVertices.append(n, r, n, r + o, n + i, r + o, n + i, r), this.rectColors.append(e[0], e[1], e[2], e[3] * t, e[0], e[1], e[2], e[3] * t, e[0], e[1], e[2], e[3] * t, e[0], e[1], e[2], e[3] * t)) : this.ctx && (this.ctx.fillStyle = di(e, t), this.ctx.fillRect(n, r, i, o)))
						}
					}, {
						key: "drawGradRect",
						value: function(e, t, n, r, i, o, a, s, l) {
							e[3] * i <= 0 || 0 == s || 0 == l || (this.gl ? (this.rectVertices.append(o, a, o, a + l, o + s, a + l, o + s, a), this.rectColors.append(e[0], e[1], e[2], e[3] * i, n[0], n[1], n[2], n[3] * i, r[0], r[1], r[2], r[3] * i, t[0], t[1], t[2], t[3] * i)) : this.ctx && (this.ctx.fillStyle = di(e, i), this.ctx.fillRect(o, a, s, l)))
						}
					}, {
						key: "drawRoundRect",
						value: function(e, t, n, r, i, o, a) {
							e[3] * t <= 0 || 0 == i || 0 == o || (this.gl ? this.drawRect(e, t, n, r, i, o) : this.ctx && (this.ctx.fillStyle = di(e, t), this.ctx.beginPath(), this.ctx.roundRect(n, r, i, o, a), this.ctx.fill()))
						}
					}, {
						key: "drawText",
						value: function(e, t, n, r, i) {
							var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
								a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this.REGULAR,
								s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1.6,
								l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1;
							if (e)
								if (this.gl)
									for (var c = i - this.symbolHeight / this.symbolScale * .5 * l, u = c + this.symbolHeight / this.symbolScale * l, d = e.length, h = 1 / this.symbolsCount, f = d * this.symbolWidth / this.symbolScale * l, g = this.SYMBOLS_VARIANTS.indexOf(a), v = 0; v < d; v++) {
										var p = e[v];
										if ("" != p.trim()) {
											var m = r - (o ? f : 0) + v * this.symbolWidth / this.symbolScale * l,
												x = m + this.symbolWidth / this.symbolScale * l;
											if (ii.bySymbol[p]) {
												var b = (x - m) / 2,
													y = (u - c) / 2,
													_ = (m + x) / 2,
													w = (c + u) / 2;
												this.textVertices.append(_ - b * s, w - y * s, _ - b * s, w + y * s, _ + b * s, w + y * s, _ + b * s, w - y * s)
											} else this.textVertices.append(m, c, m, u, x, u, x, c);
											this.textColors.append(t[0], t[1], t[2], t[3] * n, t[0], t[1], t[2], t[3] * n, t[0], t[1], t[2], t[3] * n, t[0], t[1], t[2], t[3] * n);
											var j = this.SYMBOLS.indexOf(p) + this.SYMBOLS.length * g,
												C = j * h,
												k = C + h;
											this.textUV.append(C, 0, C, 1, k, 1, k, 0)
										}
									} else null != this.ctx && (this.ctx.fillStyle = di(t, n), this.ctxUpdateBold(a), this.ctx.fillText(e, r - (o ? this.ctx.measureText(e).width : 0), i))
						}
					}, {
						key: "width",
						value: function() {
							return this.canvas.width
						}
					}, {
						key: "height",
						value: function() {
							return this.canvas.height
						}
					}, {
						key: "supportsBulk",
						value: function() {
							return !!this.gl2
						}
					}, {
						key: "ctxUpdateBold",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.REGULAR,
								t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							(this.lastWeight != e || t) && (this.lastWeight = e, this.ctx && (this.ctx.font = "".concat(e + " ").concat(oi(11), "px ").concat(this.font)))
						}
					}, {
						key: "frameEnd",
						value: function() {
							if (this.gl) {
								var e = this.gl,
									t = this.makeIndices(Math.max(this.rectVertices.length(), this.textVertices.length()) / 8 * 6);
								if (this.wf && (this.drawText(~~(Math.max(this.rectVertices.length(), this.textVertices.length()) / 6) + " polygons", this.theme.text, 1, 0, 30), this.wf.strokeStyle = di(this.theme.red), this.wf.lineWidth = oi(.2), this.wf.lineJoin = "round", this.wf.beginPath()), this.rectProgram && (e.useProgram(this.rectProgram), e.bindBuffer(e.ARRAY_BUFFER, this.rectVertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.rectVertices.get(), e.STATIC_DRAW), e.vertexAttribPointer(this.rectProgramPosition, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(this.rectProgramPosition), e.bindBuffer(e.ARRAY_BUFFER, this.rectColorsBuffer), e.vertexAttribPointer(this.rectProgramColor, 4, e.FLOAT, !1, 0, 0), e.bufferData(e.ARRAY_BUFFER, this.rectColors.get(), e.STATIC_DRAW), e.enableVertexAttribArray(this.rectProgramColor), t && (e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)), e.drawElements(e.TRIANGLES, this.rectVertices.length() / 8 * 6, e.UNSIGNED_SHORT, 0), this.wf))
									for (var n = this.rectVertices.get(), r = this.rectVertices.length(), i = 0; i < r; i += 8) this.wf.moveTo(n[i], n[i + 1]), this.wf.lineTo(n[i + 2], n[i + 3]), this.wf.lineTo(n[i + 6], n[i + 7]), this.wf.lineTo(n[i], n[i + 1]), this.wf.moveTo(n[i + 2], n[i + 3]), this.wf.lineTo(n[i + 4], n[i + 5]), this.wf.lineTo(n[i + 6], n[i + 7]), this.wf.lineTo(n[i + 2], n[i + 3]);
								if (this.textProgram && this.fontTexture && (e.useProgram(this.textProgram), e.enableVertexAttribArray(this.textProgramPosition), e.bindBuffer(e.ARRAY_BUFFER, this.textVertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.textVertices.get(), e.STATIC_DRAW), e.vertexAttribPointer(this.textProgramPosition, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(this.textProgramTextureUV), e.bindBuffer(e.ARRAY_BUFFER, this.textUVBuffer), e.bufferData(e.ARRAY_BUFFER, this.textUV.get(), e.STATIC_DRAW), e.vertexAttribPointer(this.textProgramTextureUV, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this.textColorsBuffer), e.vertexAttribPointer(this.textProgramColor, 4, e.FLOAT, !1, 0, 0), e.bufferData(e.ARRAY_BUFFER, this.textColors.get(), e.STATIC_DRAW), e.enableVertexAttribArray(this.textProgramColor), t && (e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)), e.drawElements(e.TRIANGLES, this.textVertices.length() / 8 * 6, e.UNSIGNED_SHORT, 0), this.wf))
									for (var o = this.textVertices.get(), a = this.textVertices.length(), s = 0; s < a; s += 8) this.wf.moveTo(o[s], o[s + 1]), this.wf.lineTo(o[s + 2], o[s + 3]), this.wf.lineTo(o[s + 6], o[s + 7]), this.wf.lineTo(o[s], o[s + 1]), this.wf.moveTo(o[s + 2], o[s + 3]), this.wf.lineTo(o[s + 4], o[s + 5]), this.wf.lineTo(o[s + 6], o[s + 7]), this.wf.lineTo(o[s + 2], o[s + 3]);
								this.wf && this.wf.stroke()
							}
						}
					}, {
						key: "destroy",
						value: function() {
							var e, t, n, r, i, o, a, s, l, c, u, d;
							if (this.gl) {
								var h, f = ci(this.buffers);
								try {
									for (f.s(); !(h = f.n()).done;) {
										var g = h.value;
										this.gl.deleteBuffer(g)
									}
								} catch (_) {
									f.e(_)
								} finally {
									f.f()
								}
								var v, p = ci(this.shaders);
								try {
									for (p.s(); !(v = p.n()).done;) {
										var m = v.value;
										this.gl.deleteShader(m)
									}
								} catch (_) {
									p.e(_)
								} finally {
									p.f()
								}
								var x, b = ci(this.programs);
								try {
									for (b.s(); !(x = b.n()).done;) {
										var y = x.value;
										this.gl.deleteProgram(y)
									}
								} catch (_) {
									b.e(_)
								} finally {
									b.f()
								}
								this.fontTexture && (this.gl.deleteTexture(this.fontTexture), this.lastFontSize = void 0, this.fontTexture = null)
							}
							null === (e = this.rectVertices) || void 0 === e || null === (t = e.fullClear) || void 0 === t || t.call(e), null === (n = this.rectColors) || void 0 === n || null === (r = n.fullClear) || void 0 === r || r.call(n), null === (i = this.textVertices) || void 0 === i || null === (o = i.fullClear) || void 0 === o || o.call(i), null === (a = this.textColors) || void 0 === a || null === (s = a.fullClear) || void 0 === s || s.call(a), null === (l = this.textUV) || void 0 === l || null === (c = l.fullClear) || void 0 === c || c.call(l), null === (u = this.canvas) || void 0 === u || null === (d = u.removeEventListener) || void 0 === d || d.call(u, "webglcontextlost", this.handleContextLost)
						}
					}, {
						key: "makeIndices",
						value: function(e) {
							if (this.indices.length < e) {
								var t = new Uint16Array(e);
								t.set(this.indices);
								for (var n = this.indices.length, r = n / 6 * 4; n < t.length; n += 6, r += 4) t.set([r, r + 1, r + 3, r + 1, r + 2, r + 3], n);
								return this.indices = t, !0
							}
							return !1
						}
					}, {
						key: "glMakeProgram",
						value: function(e, t) {
							if (!this.gl) throw "webgl context is not acquired";
							var n = this.gl.createProgram();
							if (!n) throw "failed to do gl.createProgram()";
							var r = this.glMakeShader(this.gl.VERTEX_SHADER, e),
								i = this.glMakeShader(this.gl.FRAGMENT_SHADER, t);
							if (this.gl.attachShader(n, r), this.gl.attachShader(n, i), this.gl.linkProgram(n), !this.gl.getProgramParameter(n, this.gl.LINK_STATUS)) throw "failed to link program:\n" + this.gl.getProgramInfoLog(n);
							return this.programs.push(n), n
						}
					}, {
						key: "glMakeShader",
						value: function(e, t) {
							if (!this.gl) throw "webgl context is not acquired";
							var n = this.gl.createShader(e);
							if (!n) throw "failed to do gl.createShader(".concat(e, ")");
							if (this.gl.shaderSource(n, t), this.gl.compileShader(n), !this.gl.getShaderParameter(n, this.gl.COMPILE_STATUS)) throw "failed to compile shader:\n" + this.gl.getShaderInfoLog(n);
							return this.shaders.push(n), n
						}
					}, {
						key: "glMakeBuffer",
						value: function() {
							if (!this.gl) throw "webgl context is not acquired";
							var e = this.gl.createBuffer();
							if (!e) throw "failed to do gl.createBuffer()";
							return this.buffers.push(e), e
						}
					}, {
						key: "glSetupFont",
						value: function() {
							var e = (0, i.Z)(l().mark((function e(t, n) {
								var r, i, o, a, s, c, u, d, h, f, g, v, p, m, x, b;
								return l().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.symbolScale = 1.5, e.prev = 1, e.next = 4, document.fonts.ready;
										case 4:
											e.next = 8;
											break;
										case 6:
											e.prev = 6, e.t0 = e.catch(1);
										case 8:
											if (r = this.gl) {
												e.next = 11;
												break
											}
											throw "webgl context is not acquired";
										case 11:
											i = document.createElement("canvas"), o = i.getContext("2d"), i.height = n * this.symbolScale, i.width = 0, o.font = "".concat(n * this.symbolScale, "px ").concat(this.font), a = 0, s = ci(this.SYMBOLS_VARIANTS);
											try {
												for (s.s(); !(c = s.n()).done;) u = c.value, o.font = "".concat(u, " ").concat(n * this.symbolScale, "px ").concat(this.font), a = Math.max(a, o.measureText(this.SYMBOLS.substring(0, 1)).width + 1)
											} catch (l) {
												s.e(l)
											} finally {
												s.f()
											}
											d = a * this.SYMBOLS.length * this.SYMBOLS_VARIANTS.length, this.symbolsCount = this.SYMBOLS.length * this.SYMBOLS_VARIANTS.length, i.width = d, this.symbolWidth = i.width / this.symbolsCount, this.symbolHeight = i.height, o.textBaseline = "middle", o.fillStyle = "#FFFFFF", h = 0, f = ci(this.SYMBOLS_VARIANTS), e.prev = 28, f.s();
										case 30:
											if ((g = f.n()).done) {
												e.next = 58;
												break
											}
											v = g.value, o.font = "".concat(v, " ").concat(n * this.symbolScale, "px ").concat(this.font), p = ci(this.SYMBOLS), e.prev = 34, p.s();
										case 36:
											if ((m = p.n()).done) {
												e.next = 48;
												break
											}
											if (x = m.value, !(b = ii.bySymbol[x])) {
												e.next = 44;
												break
											}
											return e.next = 42, b.draw(o, h + a / 2, i.height / 2, a);
										case 42:
											e.next = 45;
											break;
										case 44:
											o.fillText(x, h, i.height / 2);
										case 45:
											h += a;
										case 46:
											e.next = 36;
											break;
										case 48:
											e.next = 53;
											break;
										case 50:
											e.prev = 50, e.t1 = e.catch(34), p.e(e.t1);
										case 53:
											return e.prev = 53, p.f(), e.finish(53);
										case 56:
											e.next = 30;
											break;
										case 58:
											e.next = 63;
											break;
										case 60:
											e.prev = 60, e.t2 = e.catch(28), f.e(e.t2);
										case 63:
											return e.prev = 63, f.f(), e.finish(63);
										case 66:
											if (t) {
												e.next = 70;
												break
											}
											if (t = r.createTexture()) {
												e.next = 70;
												break
											}
											throw "failed to do gl.createTexture()";
										case 70:
											return r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), i.remove(), e.abrupt("return", t);
										case 77:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[1, 6],
									[28, 60, 63, 66],
									[34, 50, 53, 56]
								])
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				fi = function() {
					function e() {
						(0, A.Z)(this, e), (0, r.Z)(this, "array", []), (0, r.Z)(this, "lastFloat32Array", void 0)
					}
					return (0, Z.Z)(e, [{
						key: "append",
						value: function() {
							var e;
							(e = this.array).push.apply(e, arguments)
						}
					}, {
						key: "get",
						value: function() {
							return this.lastFloat32Array && this.lastFloat32Array.length >= this.array.length ? (this.lastFloat32Array.set(this.array, 0), this.lastFloat32Array) : this.lastFloat32Array = new Float32Array(this.array)
						}
					}, {
						key: "length",
						value: function() {
							return this.array.length
						}
					}, {
						key: "clear",
						value: function() {
							this.array = []
						}
					}, {
						key: "fullClear",
						value: function() {
							this.array = [], this.lastFloat32Array = void 0
						}
					}]), e
				}();

			function gi(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function vi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? gi(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gi(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function pi(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return mi(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mi(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								function t(t) {
									return e.apply(this, arguments)
								}
								return t.toString = function() {
									return e.toString()
								}, t
							}((function(e) {
								throw e
							})),
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						function t(t) {
							return e.apply(this, arguments)
						}
						return t.toString = function() {
							return e.toString()
						}, t
					}((function(e) {
						s = !0, o = e
					})),
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function mi(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function xi(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = (0, lt.Z)(e);
					if (t) {
						var i = (0, lt.Z)(this).constructor;
						n = Reflect.construct(r, arguments, i)
					} else n = r.apply(this, arguments);
					return (0, st.Z)(this, n)
				}
			}
			var bi = zr(),
				yi = function() {
					function e(t, n) {
						var i, o, a, s, l, c, u, d, h, f, g;
						(0, A.Z)(this, e), (0, r.Z)(this, "type", void 0), (0, r.Z)(this, "dark", void 0), (0, r.Z)(this, "isDarkerDark", void 0), (0, r.Z)(this, "gradient", void 0), (0, r.Z)(this, "bg", void 0), (0, r.Z)(this, "main", void 0), (0, r.Z)(this, "red", void 0), (0, r.Z)(this, "red2", void 0), (0, r.Z)(this, "green", void 0), (0, r.Z)(this, "green2", void 0), (0, r.Z)(this, "text", void 0), (0, r.Z)(this, "mainContrast", void 0), (0, r.Z)(this, "depthLevelColor", void 0), (0, r.Z)(this, "redText", void 0), (0, r.Z)(this, "greenText", void 0), (0, r.Z)(this, "red2Text", void 0), (0, r.Z)(this, "green2Text", void 0), this.type = t, this.dark = "customTheme" !== t ? [Ct.Q.dark, Ct.Q.darkerDark, Ct.Q.darkLegacyDom, Ct.Q.darkHsaka, Ct.Q.darkTerminal, Ct.Q.darkVaporwave, Ct.Q.darkBubblegum, Ct.Q.darkMonochrome, Ct.Q.betaX].indexOf(null !== t && void 0 !== t ? t : Ct.Q.betaX) >= 0 : !!n && (0, j.DP)(n.background), this.gradient = !0, this.isDarkerDark = t === Ct.Q.darkerDark, this.bg = _i(t !== Ct.Q.custom ? null !== (i = this.getThemeColor("--bgColor")) && void 0 !== i ? i : jt()("white") : jt()(null === n || void 0 === n ? void 0 : n.background)), this.mainContrast = _i(null !== (o = this.getThemeColor("--mainContrast")) && void 0 !== o ? o : jt()("blue")), this.red = _i(null !== (a = this.getThemeColor("--redColor")) && void 0 !== a ? a : jt()("red")), this.green = _i(null !== (s = this.getThemeColor("--greenColor")) && void 0 !== s ? s : jt()("green")), this.red2 = _i(null !== (l = null !== (c = this.getThemeColor("--redColor2")) && void 0 !== c ? c : this.getThemeColor("--redColor")) && void 0 !== l ? l : jt()("red")), this.green2 = _i(null !== (u = null !== (d = this.getThemeColor("--greenColor2")) && void 0 !== d ? d : this.getThemeColor("--greenColor")) && void 0 !== u ? u : jt()("green")), this.text = _i(null !== (h = this.getThemeColor("--textColor")) && void 0 !== h ? h : jt()("black")), this.main = t !== Ct.Q.custom ? _i(null !== (f = this.getThemeColor("--mainColor")) && void 0 !== f ? f : jt()("yellow")) : _i(null !== (g = this.getThemeColor("--priceColor")) && void 0 !== g ? g : jt()(null !== n && void 0 !== n && n.priceColor ? n.priceColor : "blue")), this.depthLevelColor = _i(jt()("#adadad"));
						var v = this.dark ? .75 : .6;
						this.redText = li(this.red, this.text, v), this.greenText = li(this.green, this.text, v), this.red2Text = li(this.red2, this.text, v), this.green2Text = li(this.green2, this.text, v)
					}
					return (0, Z.Z)(e, [{
						key: "getThemeColor",
						value: function(e) {
							var t, n, r = null === (t = getComputedStyle(document.documentElement).getPropertyValue(e)) || void 0 === t || null === (n = t.trim) || void 0 === n ? void 0 : n.call(t);
							if (r && "undefined" !== r) return jt()(r)
						}
					}]), e
				}(),
				_i = function(e) {
					return [e.red() / 255, e.green() / 255, e.blue() / 255, e.alpha()]
				},
				wi = function(e) {
					(0, at.Z)(n, e);
					var t = xi(n);

					function n() {
						var e;
						(0, A.Z)(this, n);
						for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
						return e = t.call.apply(t, [this].concat(o)), (0, r.Z)((0, ot.Z)(e), "isMounted", !1), (0, r.Z)((0, ot.Z)(e), "SCROLL_HEIGHT_ROUNDING", 128), (0, r.Z)((0, ot.Z)(e), "container", void 0), (0, r.Z)((0, ot.Z)(e), "canvas", void 0), (0, r.Z)((0, ot.Z)(e), "wireframeCanvas", void 0), (0, r.Z)((0, ot.Z)(e), "scrollbox", void 0), (0, r.Z)((0, ot.Z)(e), "scrollDummy", void 0), (0, r.Z)((0, ot.Z)(e), "renderer", void 0), (0, r.Z)((0, ot.Z)(e), "theme", new yi), (0, r.Z)((0, ot.Z)(e), "customTheme", {
							background: "#ffffff",
							text: "#000000",
							bidsBuys: "#00ff48",
							asksSells: "#ff0026",
							bidsBuysS: "#71e805",
							asksSellsS: "#ff0088",
							priceColor: "#5252ff"
						}), (0, r.Z)((0, ot.Z)(e), "parentScrollbox", null), (0, r.Z)((0, ot.Z)(e), "bounds", void 0), (0, r.Z)((0, ot.Z)(e), "topPart", 0), (0, r.Z)((0, ot.Z)(e), "bottomPart", 0), (0, r.Z)((0, ot.Z)(e), "width", 0), (0, r.Z)((0, ot.Z)(e), "height", 0), (0, r.Z)((0, ot.Z)(e), "totalLength", 0), (0, r.Z)((0, ot.Z)(e), "totalWeight", 0), (0, r.Z)((0, ot.Z)(e), "columnIndices", []), (0, r.Z)((0, ot.Z)(e), "columnCounts", []), (0, r.Z)((0, ot.Z)(e), "columnWidths", []), (0, r.Z)((0, ot.Z)(e), "columnIndicesAnimate", []), (0, r.Z)((0, ot.Z)(e), "columnAnimate", []), (0, r.Z)((0, ot.Z)(e), "scrollRelativeTop", 0), (0, r.Z)((0, ot.Z)(e), "updateBounds", (function() {
							var t;
							e.bounds = null === (t = e.container) || void 0 === t ? void 0 : t.getBoundingClientRect(), e.invalidate()
						})), (0, r.Z)((0, ot.Z)(e), "draw", (function() {
							var t, n, r;
							if (e.isMounted && e.renderer) {
								e.renderer.frameBegin(), e.renderer.clear();
								var i, o, a, s, l = !1,
									c = !1,
									u = 0,
									d = oi(e.width);
								if (e.bounds) d = (u = -oi(null !== (i = null === (o = e.bounds) || void 0 === o ? void 0 : o.left) && void 0 !== i ? i : 0)) + oi(window.innerWidth), u -= oi(100), d += oi(100);
								if (!e.isHorizontal())
									for (var h, f, g = oi(-(null !== (h = null === (f = e.scrollbox) || void 0 === f ? void 0 : f.scrollLeft) && void 0 !== h ? h : 0)), v = 0; v < e.props.state.length; ++v) {
										var p, m, x, b, y, _, w, j = e.props.state[v],
											C = e.columnCounts[v],
											k = e.columnIndices[v],
											S = oi(e.columnWidths[v]);
										if (g + S < u || g > d) g += S;
										else {
											"function" === typeof j.data && (j.data = j.data());
											for (var O = j.data, P = null !== (p = j.count) && void 0 !== p ? p : ~~(O.length / C), T = oi(j.size), M = ((null !== (m = j.align) && void 0 !== m ? m : 0) + 1) * j.size, A = e.scrollRelativeTop + (M - e.height * e.scrollK()), Z = oi(M - A + Math.max(0, (e.height - e.totalLength) / 2)), D = -(null !== (x = null === j || void 0 === j ? void 0 : j.align) && void 0 !== x ? x : 0) * T, L = 0, I = null !== (b = j.alpha) && void 0 !== b ? b : 1, R = 0; R < j.types.length; ++R) {
												var F = j.types[R],
													E = oi(j.widths[R]),
													H = ji(-Math.ceil((Z + D) / T), 0, P),
													B = ji(-Math.floor((Z + D - oi(e.height)) / T), 0, P);
												if (g + L + E >= u && g + L <= d)
													if (F.drawInBulk && e.renderer.supportsBulk()) F.drawInBulk(e.renderer, e.theme, g + L, Z + D + H * T, E, (B - H + 1) * T, I, O, H * C + k[R], C, B - H + 1, 0);
													else
														for (var N = H; N < B; ++N) {
															var V;
															null !== (V = F.draw) && void 0 !== V && V.call(F, e.renderer, e.theme, g + L, Z + D + N * T, E, T, I, null === j || void 0 === j ? void 0 : j.uniforms, N, e.animateData(O, v, N, C, k[R], R + 1 < k.length ? k[R + 1] : C), e.isHover(g, Z + D + N * T, oi(e.columnWidths[v]), T)) && (l = !0)
														}
												L += E
											}
											var U = L;
											if (j.objects) {
												var W, z = pi(j.objects);
												try {
													for (z.s(); !(W = z.n()).done;) {
														var G, q, Y, X, J, Q, K, $ = W.value,
															ee = oi(null !== (G = null === $ || void 0 === $ || null === (q = $.type) || void 0 === q ? void 0 : q.hoverError) && void 0 !== G ? G : 0),
															te = e.isHover(g, Z + D + (null !== (Y = $.index) && void 0 !== Y ? Y : 0) * T - ee, U, oi(null !== (X = null === $ || void 0 === $ || null === (J = $.type) || void 0 === J ? void 0 : J.height) && void 0 !== X ? X : j.size) + 2 * ee);
														null !== $ && void 0 !== $ && $.cursor && te && (e.updateCursor(null === $ || void 0 === $ ? void 0 : $.cursor), c = !0), null === (Q = $.type) || void 0 === Q || Q.draw($, e.renderer, e.theme, g, Z + D + (null !== (K = $.index) && void 0 !== K ? K : 0) * T, U, T, I, j.uniforms, te, e.mouseDown)
													}
												} catch (ne) {
													z.e(ne)
												} finally {
													z.f()
												}
											}
											l = l || (null === (y = e.columnAnimate[v]) || void 0 === y || null === (_ = y.isUpdated) || void 0 === _ ? void 0 : _.call(y)), null === (w = e.columnAnimate[v]) || void 0 === w || w.reset(), g += U
										}
									}
								if (e.renderer.frameEnd(), l = l || null !== (t = null === (n = e.props.animation) || void 0 === n ? void 0 : n.isUpdated()) && void 0 !== t && t, null === (r = e.props.animation) || void 0 === r || r.reset(), e.props.canvasInfo && !e.props.canvasInfo.get()) null === (a = (s = e.props.canvasInfo).set) || void 0 === a || a.call(s, {
									rowWidth: oi(200),
									canvasHeight: e.height,
									scale: window.devicePixelRatio
								});
								e.objectMouseDown || c || e.updateCursor(void 0), l ? requestAnimationFrame(e.draw) : e.requested = !1
							}
						})), (0, r.Z)((0, ot.Z)(e), "requested", !1), (0, r.Z)((0, ot.Z)(e), "mouseDown", !1), (0, r.Z)((0, ot.Z)(e), "objectMouseDown", void 0), (0, r.Z)((0, ot.Z)(e), "mouseEnter", !1), (0, r.Z)((0, ot.Z)(e), "mouseX", 0), (0, r.Z)((0, ot.Z)(e), "mouseY", 0), (0, r.Z)((0, ot.Z)(e), "handleMouse", (function(t) {
							if (t instanceof MouseEvent) {
								var n, r;
								if (e.mouseX = t.clientX - (null !== (n = null === (r = e.bounds) || void 0 === r ? void 0 : r.left) && void 0 !== n ? n : 0), e.mouseY = t.clientY, e.objectMouseDown) {
									var i, o = (0, M.Z)(e.objectMouseDown, 2),
										a = o[0],
										s = o[1],
										l = e.calculateColumnIndex(a, oi(e.mouseY));
									null === s || void 0 === s || null === (i = s.onEvent) || void 0 === i || i.call(s, t.type, l), e.updateCursor(null === s || void 0 === s ? void 0 : s.cursor)
								}
								"mouseenter" === t.type ? e.mouseEnter = !0 : "mouseleave" === t.type && (e.mouseEnter = !1);
								var c = (1 & t.buttons) > 0;
								e.mouseDown != c && ((e.mouseDown = c) ? e.objectMouseDown = e.findObjectForEvent(oi(e.mouseX), oi(e.mouseY)) : (e.objectMouseDown = void 0, e.updateCursor(void 0))), e.updateUserSelect(!e.mouseDown), e.invalidate()
							}
						})), (0, r.Z)((0, ot.Z)(e), "userSelectAllowed", !0), (0, r.Z)((0, ot.Z)(e), "handleResize", (function() {
							if (e.canvas && e.container) {
								var t, n, r = e.width = e.container.clientWidth,
									i = e.height = e.container.clientHeight;
								e.canvas.width = oi(r), e.canvas.height = oi(i), e.canvas.style.width = "".concat(r, "px"), e.canvas.style.height = "".concat(i, "px"), e.wireframeCanvas && (e.wireframeCanvas.width = oi(r), e.wireframeCanvas.height = oi(i), e.wireframeCanvas.style.width = "".concat(r, "px"), e.wireframeCanvas.style.height = "".concat(i, "px")), null === (t = e.renderer) || void 0 === t || null === (n = t.resize) || void 0 === n || n.call(t)
							}
							e.invalidate()
						})), (0, r.Z)((0, ot.Z)(e), "ignoreScroll", !1), (0, r.Z)((0, ot.Z)(e), "handleScroll", (function(t) {
							e.ignoreScroll ? e.ignoreScroll = !1 : (e.getScrollTop(), e.invalidate())
						})), e
					}
					return (0, Z.Z)(n, [{
						key: "componentDidMount",
						value: function() {
							var e, t, n;
							if (this.container = (0, Gr.findDOMNode)(this), !this.container) throw "orderflow3 not found";
							"function" === typeof this.props.innerRef ? null === (t = (n = this.props).innerRef) || void 0 === t || t.call(n, this.container) : this.props.innerRef && (this.props.innerRef.current = this.container);
							this.canvas = document.createElement("canvas"), this.props.wireframe && (this.wireframeCanvas = document.createElement("canvas")), this.renderer = new hi(this.canvas, this.theme, this.props.font, null !== (e = this.props.renderer) && void 0 !== e ? e : "canvas", this.wireframeCanvas), this.container.appendChild(this.canvas), this.wireframeCanvas && this.container.appendChild(this.wireframeCanvas), this.scrollbox = document.createElement("div"), this.scrollbox.addEventListener("scroll", this.handleScroll), this.scrollbox.addEventListener("mouseenter", this.handleMouse), this.scrollbox.addEventListener("mouseleave", this.handleMouse), this.scrollbox.addEventListener("mousemove", this.handleMouse), this.scrollbox.addEventListener("mouseup", this.handleMouse), this.scrollbox.addEventListener("mousedown", this.handleMouse), this.scrollDummy = document.createElement("div"), this.scrollbox.appendChild(this.scrollDummy), this.container.appendChild(this.scrollbox), window.addEventListener("resize", this.handleResize), this.handleResize(), this.calculateDimensions(), this.isMounted = !0, this.invalidate()
						}
					}, {
						key: "componentDidUpdate",
						value: function(e) {
							var t, n, r, i, o, a, s;
							this.theme.type !== this.props.theme && (this.customTheme = vi({}, this.props.customThemes), this.theme = new yi(this.props.theme, this.customTheme), null === (r = this.renderer) || void 0 === r || null === (i = r.recolor) || void 0 === i || i.call(r, this.theme));
							JSON.stringify(this.customTheme) !== JSON.stringify(this.props.customThemes) && (this.customTheme = vi({}, this.props.customThemes), this.theme = new yi(this.props.theme, this.customTheme), null === (o = this.renderer) || void 0 === o || null === (a = o.recolor) || void 0 === a || a.call(o, this.theme));
							e.font !== this.props.font && (null === (s = this.renderer) || void 0 === s || s.resize(!0));
							if (this.calculateDimensions(), null !== (t = this.props.scrollboxRef) && void 0 !== t && t.current && this.parentScrollbox !== (null === (n = this.props.scrollboxRef) || void 0 === n ? void 0 : n.current)) {
								var l, c, u;
								if (this.parentScrollbox) null === (u = this.parentScrollbox) || void 0 === u || u.removeEventListener("scroll", this.updateBounds), console.log("reset bounds"), this.bounds = void 0;
								null === (l = this.parentScrollbox = null === (c = this.props.scrollboxRef) || void 0 === c ? void 0 : c.current) || void 0 === l || l.addEventListener("scroll", this.updateBounds)
							}
							this.invalidate()
						}
					}, {
						key: "getDescriptionValue",
						value: function(e, t) {
							return "function" !== typeof e ? e : e(t)
						}
					}, {
						key: "calculateDimensions",
						value: function() {
							this.columnIndices = [], this.columnCounts = [], this.columnWidths = [], this.columnIndicesAnimate = [];
							var e, t, n, r = 0,
								i = 0,
								o = 0,
								a = pi(this.props.state);
							try {
								for (a.s(); !(e = a.n()).done;) {
									var s, l, c, u, d = e.value,
										h = 0,
										f = [],
										g = [],
										v = pi(d.types);
									try {
										for (v.s(); !(u = v.n()).done;) {
											var p = u.value;
											f.push(h);
											var m = this.getDescriptionValue(p.count, d.uniforms);
											h += m;
											var x = this.getDescriptionValue(p.animate, d.uniforms);
											if ("number" === typeof x) {
												for (var b = 0; b < m - x; ++b) g.push(!1);
												for (var y = 0; y < x; ++y) g.push(!0)
											} else g.push.apply(g, (0, C.Z)(null !== x && void 0 !== x ? x : (0, C.Z)(Array(m)).fill(!1)))
										}
									} catch (S) {
										v.e(S)
									} finally {
										v.f()
									}
									this.columnIndices.push(f), this.columnCounts.push(h), this.columnIndicesAnimate.push(g);
									var _ = d.size,
										w = (Math.ceil(null !== (s = d.align) && void 0 !== s ? s : 0) + 1) * _,
										j = ((null !== (l = d.count) && void 0 !== l ? l : ~~(d.data.length / h)) - Math.floor(null !== (c = d.align) && void 0 !== c ? c : 0)) * _;
									i = Math.max(i, w), o = Math.max(o, j);
									var k = d.widths.reduce((function(e, t) {
										return e + t
									}), 0);
									this.columnWidths.push(k), r += k
								}
							} catch (S) {
								a.e(S)
							} finally {
								a.f()
							}
							if (this.columnAnimate.length > this.props.state.length) this.columnAnimate.splice(this.props.state.length, this.columnAnimate.length - this.props.state.length);
							else if (this.columnAnimate.length < this.props.state.length)
								for (; this.columnAnimate.length < this.props.state.length;) this.columnAnimate.push(new Xr(!0));
							(this.topPart = i, this.bottomPart = o, this.totalLength = this.topPart + this.bottomPart, this.totalLength = Math.ceil(this.totalLength / this.SCROLL_HEIGHT_ROUNDING) * this.SCROLL_HEIGHT_ROUNDING, this.totalWeight = r, this.scrollDummy && this.container) && (this.isHorizontal() ? (t = "".concat(this.totalWeight, "px"), n = "".concat(this.totalLength, "px")) : (t = "".concat(this.totalLength, "px"), n = "".concat(this.totalWeight, "px")), this.props.fixedWidth ? this.container.style.minWidth !== n && (this.container.style.minWidth = n, this.handleResize()) : this.scrollDummy.style.width !== n && (this.ignoreScroll = !0, this.scrollDummy.style.width = n), this.props.fixedHeight ? this.container.style.minHeight !== t && (this.container.style.minHeight = t, this.handleResize()) : this.scrollDummy.style.height !== t && (this.ignoreScroll = !0, this.scrollDummy.style.height = t));
							this.setScrollTop()
						}
					}, {
						key: "isHorizontal",
						value: function() {
							return "horizontal" === this.props.axis
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							var e, t;
							null === (e = this.renderer) || void 0 === e || null === (t = e.destroy) || void 0 === t || t.call(e);
							var n, r = pi(this.columnAnimate);
							try {
								for (r.s(); !(n = r.n()).done;) {
									n.value.recycle()
								}
							} catch (i) {
								r.e(i)
							} finally {
								r.f()
							}
							this.columnAnimate = []
						}
					}, {
						key: "render",
						value: function() {
							return (0, $.jsx)("div", {
								className: bi.orderflow3Chart
							})
						}
					}, {
						key: "animateData",
						value: function(e, t, n, r, i, o) {
							var a = this.props.state[t],
								s = this.columnAnimate[t],
								l = e.slice(n * r + i, n * r + o);
							if (!s) return l;
							for (var c = void 0 !== a.keyIndex ? e[n * r + a.keyIndex] : n, u = 0; u < l.length; ++u) this.columnIndicesAnimate[t][i + u] && (Array.isArray(l[u]) || (l[u] = s.obtain("".concat(c, "-").concat(i + u), l[u])));
							return l
						}
					}, {
						key: "invalidate",
						value: function() {
							this.isMounted && (this.requested || (this.requested = !0, requestAnimationFrame(this.draw)))
						}
					}, {
						key: "updateUserSelect",
						value: function() {
							var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							this.userSelectAllowed != e && (document.body.style.userSelect = (this.userSelectAllowed = e) ? "" : "none")
						}
					}, {
						key: "calculateColumnIndex",
						value: function(e, t) {
							var n, r, i = this.props.state[e];
							if (!i) return -1;
							var o = oi(i.size),
								a = ((null !== (n = i.align) && void 0 !== n ? n : 0) + 1) * i.size,
								s = this.scrollRelativeTop + (a - this.height * this.scrollK());
							return (t - oi(a - s + Math.max(0, (this.height - this.totalLength) / 2)) - -(null !== (r = null === i || void 0 === i ? void 0 : i.align) && void 0 !== r ? r : 0) * o) / o
						}
					}, {
						key: "findObjectForEvent",
						value: function(e, t) {
							for (var n, r, i = oi(-(null !== (n = null === (r = this.scrollbox) || void 0 === r ? void 0 : r.scrollLeft) && void 0 !== n ? n : 0)), o = 0; o < this.props.state.length; ++o) {
								var a, s, l, c = this.props.state[o],
									u = oi(this.columnWidths[o]);
								if (i + u < e || i > e) i += u;
								else {
									for (var d = oi(c.size), h = ((null !== (a = c.align) && void 0 !== a ? a : 0) + 1) * c.size, f = this.scrollRelativeTop + (h - this.height * this.scrollK()), g = oi(h - f + Math.max(0, (this.height - this.totalLength) / 2)), v = -(null !== (s = null === c || void 0 === c ? void 0 : c.align) && void 0 !== s ? s : 0) * d, p = 0, m = 0; m < c.types.length; ++m) p += oi(c.widths[m]);
									var x = p;
									if (c.objects) {
										var b, y = pi(c.objects);
										try {
											for (y.s(); !(b = y.n()).done;) {
												var _, w, j, C, k, S = b.value;
												if (S.onEvent) {
													var O = oi(null !== (_ = null === S || void 0 === S || null === (w = S.type) || void 0 === w ? void 0 : w.hoverError) && void 0 !== _ ? _ : 0);
													if (this.isHover(i, g + v + (null !== (j = S.index) && void 0 !== j ? j : 0) * d - O, x, oi(null !== (C = null === S || void 0 === S || null === (k = S.type) || void 0 === k ? void 0 : k.height) && void 0 !== C ? C : c.size) + 2 * O, e, t)) return [o, S]
												}
											}
										} catch (P) {
											y.e(P)
										} finally {
											y.f()
										}
									}
									null === (l = this.columnAnimate[o]) || void 0 === l || l.reset(), i += x
								}
							}
						}
					}, {
						key: "updateCursor",
						value: function(e) {
							var t, n, r = null !== e && void 0 !== e ? e : "default";
							this.container && this.container.style && (null === (t = this.container) || void 0 === t || null === (n = t.style) || void 0 === n ? void 0 : n.cursor) != r && (this.container.style.cursor = r)
						}
					}, {
						key: "isHover",
						value: function(e, t, n, r) {
							var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oi(this.mouseX),
								o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : oi(this.mouseY);
							return !!this.mouseEnter && (i >= e && o >= t && i < e + n && o < t + r)
						}
					}, {
						key: "scrollK",
						value: function() {
							return "start" === this.props.align ? 0 : "end" === this.props.align ? 1 : .5
						}
					}, {
						key: "setScrollTop",
						value: function() {
							this.scrollbox && (this.isHorizontal() ? this.scrollbox.scrollLeft = this.scrollRelativeTop + (this.topPart - this.width * this.scrollK()) : this.scrollbox.scrollTop = this.scrollRelativeTop + (this.topPart - this.height * this.scrollK()))
						}
					}, {
						key: "getScrollTop",
						value: function() {
							this.scrollbox && (this.isHorizontal() ? this.scrollRelativeTop = this.scrollbox.scrollLeft - (this.topPart - this.width * this.scrollK()) : this.scrollRelativeTop = this.scrollbox.scrollTop - (this.topPart - this.height * this.scrollK()))
						}
					}]), n
				}(x.Component),
				ji = function(e, t, n) {
					return Math.max(Math.min(e, n), t)
				},
				Ci = {
					count: function(e) {
						var t;
						return 2 * (null !== (t = Math.max.apply(Math, [0].concat((0, C.Z)(null === e || void 0 === e ? void 0 : e.deltaCount)))) && void 0 !== t ? t : 1)
					},
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						var u, d = t.text,
							h = t.red,
							f = t.green;
						e.drawRect(d, .2 * a, n, r + (o - oi(1)) / 2, i, oi(1));
						for (var g = 2 * (null === s || void 0 === s || null === (u = s.deltaCount) || void 0 === u ? void 0 : u[l]), v = Math.min(oi(6), Math.max(oi(1.5), i / g * 1.8)), p = (i - v * g) / Math.max(2, g - 1), m = oi(4), x = c.reduce((function(e, t) {
								return Math.max(e, Math.abs(t))
							}), 0), b = 0; b < c.length; b += 2) {
							var y = c[b] / x * .9;
							e.drawRoundRect(h, a, n + (p + v) * b, r + o / 2, v, y * o / 2, m);
							var _ = c[b + 1] / x * .9;
							e.drawRoundRect(f, a, n + (p + v) * b, r + (1 - _) * o / 2, v, _ * o / 2, m)
						}
					}
				},
				ki = {
					count: 2,
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						t.text;
						var u = t.red,
							d = t.green,
							h = (t.main, (0, M.Z)(c, 2)),
							f = h[0],
							g = h[1];
						g && e.drawText(g + "", d, .9 * a, n + oi(4), r + o / 8 * 2, !1, e.BOLD), f && e.drawText(f + "", u, .9 * a, n + oi(4), r + o / 8 * 6, !1, e.BOLD)
					}
				},
				Si = {
					count: 0
				},
				Oi = {
					count: 1,
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						var u = t.text,
							d = (t.main, (0, M.Z)(c, 1)[0]);
						e.drawText(d + "", u, a, n + i, r + o / 2, !0)
					}
				},
				Pi = {
					draw: function(e, t, n, r, i, o, a, s, l, c, u) {
						var d = n.dark,
							h = n.text,
							f = n.mainContrast,
							g = (n.red, n.green, oi(u && c ? 3 : 1.75)),
							v = g / 2;
						e.dimUp && t.drawRect([0, 0, 0, d ? .3 : .05], s, r, 0, o, i - v), t.drawRect(u && c ? f : h, c ? .7 : .3, r, i - v, o, g), e.dimDown && t.drawRect([0, 0, 0, d ? .3 : .05], s, r, i + v, o, t.height() - (i + v))
					},
					height: 1.75,
					hoverError: 16
				},
				Ti = {
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						var u = n.main,
							d = n.dark,
							h = n.mainContrast;
						if (null !== e && void 0 !== e && e.price) {
							var f, g, v = "customTheme" !== t.theme.type ? d ? u : h : u;
							t.drawRect(v, .6 * (null !== (f = null === e || void 0 === e ? void 0 : e.alpha) && void 0 !== f ? f : 1), r + oi(60), i - oi(.75), o - oi(64), oi(1.5)), t.drawText(null === e || void 0 === e ? void 0 : e.price, v, null !== (g = null === e || void 0 === e ? void 0 : e.textAlpha) && void 0 !== g ? g : 1, r + o - oi(4), i - oi(8), !0, t.BOLD)
						}
					}
				},
				Mi = {
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						var u = n.green2Text,
							d = n.red2Text;
						t.drawText(ai(null === e || void 0 === e ? void 0 : e.value), null !== e && void 0 !== e && e.red ? d : u, s, r + o - oi(6), i + a * e.offset, !0)
					}
				},
				Ai = n(3618),
				Zi = {
					count: function(e) {
						var t;
						return 1 + (null !== (t = null === e || void 0 === e ? void 0 : e.heatmapCount) && void 0 !== t ? t : 1)
					},
					draw: function(e, t, n, r, i, o, a, s, l, c, u) {
						for (var d, h = t.bg, f = t.gradient, g = t.isDarkerDark, v = t.main, p = (t.text, t.red), m = t.red2, x = t.green, b = t.green2, y = (0, Ai.Z)(c), _ = y[0], w = y.slice(1), j = i / w.length, C = 0; C < w.length; ++C) {
							var k = (_ >> C) % 2 != 1;
							d = g && w[C] > .65 ? v : f ? li(k ? x : p, k ? b : m, Math.min(1, w[C])) : k ? x : p, e.drawRect(d, w[C] * a, n + C * j, r, j, o), (null !== s && void 0 !== s && s.exchanges && l == (null === s || void 0 === s ? void 0 : s.askBidIndex) || u) && e.drawText(null === s || void 0 === s ? void 0 : s.exchanges[C], w[C] > .5 ? h : d, a, n + C * j, r + o / 2 + (u ? 0 : ((null === s || void 0 === s ? void 0 : s.askBidIndexAnimated) - l) * o), !1, e.REGULAR, 1)
						}
					}
				},
				Di = Zi,
				Li = 0,
				Ii = 0,
				Ri = void 0,
				Fi = {
					count: function(e) {
						var t;
						return 3 + 2 * (null !== (t = null === e || void 0 === e ? void 0 : e.count) && void 0 !== t ? t : 1)
					},
					animate: function(e) {
						var t;
						return 2 * (null !== (t = null === e || void 0 === e ? void 0 : e.count) && void 0 !== t ? t : 1)
					},
					draw: function(e, t, n, r, i, o, a, s, l, c, u) {
						var d = t.text,
							h = t.red,
							f = t.red2,
							g = t.green,
							v = t.green2,
							p = (t.main, (0, Ai.Z)(c)),
							m = p[0],
							x = p[1],
							b = p[2],
							y = p.slice(3);
						n > Li && (Li = 0, Ii = 0, Ri = void 0);
						for (var _ = 0, w = 0, j = 0, C = y.length / 2, k = 0; k < C; k++) {
							var S, O;
							(null !== (S = null === s || void 0 === s || null === (O = s.switchExchangeIndexes) || void 0 === O ? void 0 : O.indexOf(k)) && void 0 !== S ? S : -1) >= 0 && (_ += oi(2), j = 0);
							var P = y[2 * k] * i,
								T = (b >> k) % 2 != 0 ? h : g,
								M = (b >> k) % 2 != 0 ? f : v,
								A = li(T, M, _ / i),
								Z = li(T, M, Math.min(1, (_ + P) / i));
							e.drawGradRect(A, Z, A, Z, a * (1 - .2 * j) * (u ? .65 : .5), n + _, r, Math.max(0, Math.min(i - _, P)), o), _ += P, j++;
							var D = y[2 * k + 1] * i,
								L = Math.max(0, Math.min(i - w, D)),
								I = li(T, M, w / i),
								R = li(T, M, Math.min(1, (w + L) / i));
							if (e.drawGradRect(I, R, I, R, a * (u ? .4 : .15), n + w, r, L, o), w += D, k == C - 1) {
								var F = Math.min(w, i);
								e.drawRect(R, 1, n + F, r, oi(1), o), Li && Ri && e.drawGradRect(R, Ri, R, Ri, 1, n + F, r, Ii - F + (Ii > F ? oi(1) : 0), oi(1)), Li = n, Ii = F, Ri = R
							}
						}
						Math.abs(m) >= .05 && e.drawText(ai(Math.abs(m)), d, a, n, r + o / 2, !1), u && e.drawText(ai(Math.abs(x)), d, a, n + i, r + o / 2, !0)
					}
				},
				Ei = Array.isArray,
				Hi = {
					count: function(e) {
						var t;
						return null !== (t = null === e || void 0 === e ? void 0 : e.heatmapCount) && void 0 !== t ? t : 1
					},
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						for (var u, d, h = t.gradient, f = t.isDarkerDark, g = t.main, v = (t.text, t.red), p = t.red2, m = t.green, x = t.green2, b = t.bg, y = i / c.length, _ = l >= (null !== (u = null === s || void 0 === s ? void 0 : s.askBidIndex) && void 0 !== u ? u : 0), w = 0; w < c.length; ++w) {
							var j = c[w],
								C = void 0;
							if (Ei(j)) {
								var k = Math.min(1, j[0]);
								d = f && k > .65 ? g : h ? li(v, p, k) : v, e.drawRect(d, k * a, n + w * y, r, y, o / 2);
								var S = Math.min(1, j[1]);
								d = f && S > .65 ? g : h ? li(m, x, S) : m, e.drawRect(d, S * a, n + w * y, r + o / 2, y, o / 2), C = Math.max(k, S)
							} else C = Math.min(1, c[w]), d = f && c[w] > .65 ? g : h ? li(_ ? m : v, _ ? x : p, C) : _ ? m : v, e.drawRect(d, C * a, n + w * y, r, y, o);
							null !== s && void 0 !== s && s.exchange && null !== s && void 0 !== s && s.askBidIndexAnimated && Math.abs(l - (null === s || void 0 === s ? void 0 : s.askBidIndexAnimated) - .5) <= .5 && e.drawText(null === s || void 0 === s ? void 0 : s.exchange, C > .5 ? b : d, a, n + i / 4, r + o / 2 + ((null === s || void 0 === s ? void 0 : s.askBidIndexAnimated) + .5 - l) * o)
						}
					}
				},
				Bi = Hi,
				Ni = 0,
				Vi = 0,
				Ui = void 0,
				Wi = Array.isArray,
				zi = {
					count: function(e) {
						var t;
						return 1 + 2 * (null !== (t = null === e || void 0 === e ? void 0 : e.detail) && void 0 !== t ? t : 1) + 1
					},
					animate: function(e) {
						var t;
						return 2 * (null !== (t = null === e || void 0 === e ? void 0 : e.detail) && void 0 !== t ? t : 1)
					},
					draw: function(e, t, n, r, i, o, a, s, l, c, u) {
						t.text;
						var d, h = t.red,
							f = t.red2,
							g = t.green,
							v = t.green2,
							p = (t.main, t.greenText),
							m = t.redText,
							x = t.green2Text,
							b = t.red2Text,
							y = (0, Ai.Z)(c),
							_ = y[0],
							w = y[1],
							j = y.slice(2);
						n > Ni && (Ni = 0, Vi = 0, Ui = void 0);
						for (var C, k = l >= (null !== (d = null === s || void 0 === s ? void 0 : s.askBidIndex) && void 0 !== d ? d : 0), S = k ? g : h, O = k ? v : f, P = o / (j.length / 2), T = 0; T < j.length; T += 2) {
							var M = j[2 * T];
							Wi(M) ? (C = Math.min(1, Math.max(0, M[0])), e.drawGradRect(h, li(h, f, C), h, li(h, f, C), a * (u ? .65 : .5), n, r + T * P, i * C, P / 2), C = Math.min(1, Math.max(0, M[1])), e.drawGradRect(g, li(g, v, C), g, li(g, v, C), a * (u ? .65 : .5), n, r + (T + .5) * P, i * C, P / 2)) : (C = Math.min(1, Math.max(0, M)), e.drawGradRect(S, li(S, O, C), S, li(S, O, C), a * (u ? .65 : .5), n, r + T * P, i * C, P));
							var A = j[2 * T + 1];
							if (Wi(A)) {
								C = Math.min(1, Math.max(0, A[0]));
								var Z = li(h, f, C);
								e.drawGradRect(h, Z, h, Z, a * (u ? .4 : .15), n, r + T * P, i * C, P / 2), e.drawRect(Z, 1, n + i * C, r + T * P, oi(1), P / 2), Ni && Ui && e.drawGradRect(Z, Ui, Z, Ui, 1, n + i * C, r + T * P, Vi - i * C + (Vi > i * C ? oi(1) : 0), oi(1)), Ni = n, Vi = i * C, Ui = Z, C = Math.min(1, Math.max(0, A[1])), Z = li(g, v, C), e.drawGradRect(g, Z, g, Z, a * (u ? .4 : .15), n, r + (T + .5) * P, i * C, P / 2), e.drawRect(Z, 1, n + i * C, r + (T + .5) * P, oi(1), P / 2), Ni && Ui && e.drawGradRect(Z, Ui, Z, Ui, 1, n + i * C, r + (T + .5) * P, Vi - i * C + (Vi > i * C ? oi(1) : 0), oi(1)), Ni = n, Vi = i * C, Ui = Z
							} else {
								C = Math.min(1, Math.max(0, j[2 * T + 1]));
								var D = li(S, O, C);
								e.drawGradRect(S, D, S, D, a * (u ? .4 : .15), n, r + T * P, i * C, P), e.drawRect(D, 1, n + i * C, r + T * P, oi(1), P), Ni && Ui && e.drawGradRect(D, Ui, D, Ui, 1, n + i * C, r + T * P, Vi - i * C + (Vi > i * C ? oi(1) : 0), oi(1)), Ni = n, Vi = i * C, Ui = D
							}
						}
						Wi(_) ? (e.drawText(_[0], m, a, n, r + o / 4, !1, (null === s || void 0 === s ? void 0 : s.priceIndex) === l ? e.BOLD : e.REGULAR, 1.6, .6), e.drawText(_[1], p, a, n, r + o / 4 * 3, !1, (null === s || void 0 === s ? void 0 : s.priceIndex) === l ? e.BOLD : e.REGULAR, 1.6, .6)) : e.drawText(_, k ? p : m, a, n, r + o / 2, !1, (null === s || void 0 === s ? void 0 : s.priceIndex) === l ? e.BOLD : e.REGULAR), !u || null !== s && void 0 !== s && s.depthLevels && null !== s && void 0 !== s && s.askBidIndex && (Math.abs(l - (s.askBidIndex - s.depthLevels - .5)) < .6 || Math.abs(l - (s.askBidIndex + s.depthLevels + .5)) < .6) || (Wi(w) ? (e.drawText(ai(Math.abs(w[0])), b, a, n + i - oi(2), r + o / 4, !0, e.REGULAR, 1.6, .6), e.drawText(ai(Math.abs(w[1])), x, a, n + i - oi(2), r + o / 4 * 3, !0, e.REGULAR, 1.6, .6)) : e.drawText(ai(Math.abs(w)), k ? x : b, a, n + i - oi(2), r + o / 2, !0))
					}
				},
				Gi = zi,
				qi = {
					count: 1,
					draw: function(e, t, n, r, i, o, a, s, l, c) {
						var u = t.text,
							d = t.main,
							h = (0, M.Z)(c, 1)[0];
						if ("number" === typeof h) {
							var f, g, v = null !== (f = null === s || void 0 === s ? void 0 : s.precision) && void 0 !== f ? f : 1;
							if (v <= 1) a *= h % (10 * (null !== (g = null === s || void 0 === s ? void 0 : s.aggregationGrouping) && void 0 !== g ? g : 1)) == 0 ? 1 : .5;
							h = h.toFixed(v)
						}
						e.drawText(h, (null === s || void 0 === s ? void 0 : s.priceIndex) === l ? d : u, a, n + i, r + o / 2, !0, (null === s || void 0 === s ? void 0 : s.priceIndex) === l ? e.BOLD : e.REGULAR)
					}
				};

			function Yi(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return Xi(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xi(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						s = !0, o = e
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function Xi(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Ji(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Qi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ji(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			Math.round;
			var Ki = function(e) {
					return 1 - Math.pow(1 - e, 5)
				},
				$i = {
					duration: 600,
					interpolator: Ki
				},
				eo = {
					duration: 240,
					interpolator: Ki
				},
				to = function(e, t) {
					var n, r, i = e.snapshots,
						o = e.lock,
						a = e.lastPriceAlign,
						s = (e.levelVolumeRenderingMode, e.heatmapMode),
						l = e.coinConfig,
						c = e.maxSpotLevelTotal,
						u = e.aggregationGrouping,
						d = e.depthLevels.get(),
						h = null !== (n = null === (r = u.toString().split(".")[1]) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0;
					return i.map((function(n, r) {
						if (!Array.isArray(n)) {
							var i, g, v, p, m, x, b, y, _, w, j, C, k, S, O, P, T, A, Z, D, L, I, R, F = null === n || void 0 === n ? void 0 : n.extra,
								E = F.lastPrice,
								H = F.lastPrices,
								B = null !== (i = null === n || void 0 === n || null === (g = n.asks) || void 0 === g || null === (v = g[(null !== (p = null === n || void 0 === n || null === (m = n.asks) || void 0 === m ? void 0 : m.length) && void 0 !== p ? p : 1) - 1]) || void 0 === v ? void 0 : v.price) && void 0 !== i ? i : 0,
								N = null !== (x = null === n || void 0 === n || null === (b = n.asks) || void 0 === b || null === (y = b[0]) || void 0 === y ? void 0 : y.price) && void 0 !== x ? x : 0;
							if (null !== n && void 0 !== n && null !== (_ = n.asks) && void 0 !== _ && null !== (w = _[0]) && void 0 !== w && w.price && null !== n && void 0 !== n && null !== (j = n.bids) && void 0 !== j && null !== (C = j[0]) && void 0 !== C && C.price) T = Math.max(0, ((null !== (A = null === n || void 0 === n || null === (Z = n.asks) || void 0 === Z || null === (D = Z[0]) || void 0 === D ? void 0 : D.price) && void 0 !== A ? A : 0) - (null !== (L = null === n || void 0 === n || null === (I = n.bids) || void 0 === I || null === (R = I[0]) || void 0 === R ? void 0 : R.price) && void 0 !== L ? L : 0)) / u);
							else T = 0;
							var V = function(e) {
									return .5 + (B - e) / u
								},
								U = !(null !== n && void 0 !== n && null !== (k = n.asks) && void 0 !== k && k.length) && !(null !== n && void 0 !== n && null !== (S = n.bids) && void 0 !== S && S.length),
								W = a && E ? E : N - T / 2 * u,
								z = U ? void 0 : N - (-d - .5 + T / 2) * u,
								G = U ? void 0 : N - (d + .5 + T / 2) * u,
								q = (null !== (O = null === n || void 0 === n || null === (P = n.asks) || void 0 === P ? void 0 : P.length) && void 0 !== O ? O : 0) + ~~(T / 2),
								X = t("".concat(r, "-askBidIndex"), !o || U ? void 0 : W, Qi({
									postprocess: V
								}, $i)),
								J = t("".concat(r, "-top"), z, Qi({
									postprocess: V
								}, eo)),
								Q = t("".concat(r, "-bottom"), G, Qi({
									postprocess: V
								}, eo)),
								K = H.map((function(e, n) {
									var i, o = (0, M.Z)(e, 2),
										a = o[0],
										s = o[1];
									return {
										type: Ti,
										price: null === s || void 0 === s || null === (i = s.toFixed) || void 0 === i ? void 0 : i.call(s, h + (u <= 1 ? 1 : 0)),
										alpha: t("".concat(r, "-price-").concat(a, "-alpha"), 1 - n / 5),
										textAlpha: t("".concat(r, "-price-").concat(a, "-textalpha"), 0 == n ? 1 : 0),
										index: .5 + (B - s) / u
									}
								}));
							if (!U) {
								var $, ee, te, ne;
								K.push({
									type: Pi,
									dimUp: !0,
									index: J,
									cursor: "row-resize",
									onEvent: function(n, r) {
										var i = (B - N) / u + T / 2,
											o = Math.max(1, Math.round(i - r));
										re != o && (e.depthLevels.set(o), t.context.update())
									}
								}, {
									type: Pi,
									dimDown: !0,
									index: Q,
									cursor: "row-resize",
									onEvent: function(n, r) {
										var i = (B - N) / u + T / 2,
											o = Math.max(1, Math.round(r - i - 1));
										re != o && (e.depthLevels.set(o), t.context.update())
									}
								});
								var re = e.depthLevels.get(),
									ie = null === n || void 0 === n || null === ($ = n.asks) || void 0 === $ || null === (ee = $[re]) || void 0 === ee ? void 0 : ee.totalAmount;
								ie && K.push({
									type: Mi,
									value: ie,
									red: !0,
									offset: .5,
									index: J
								});
								var oe = null === n || void 0 === n || null === (te = n.bids) || void 0 === te || null === (ne = te[re - (T <= 0 ? 1 : 0)]) || void 0 === ne ? void 0 : ne.totalAmount;
								oe && K.push({
									type: Mi,
									value: oe,
									red: !1,
									offset: -.5,
									index: Q
								})
							}
							return {
								size: 16,
								widths: [60, 10, 16, 10, 100, 4],
								types: [qi, Si, Bi, Si, Gi, Si],
								count: n.asks.length + (n.asks.length && n.bids.length ? ~~((n.bids[0].price - n.asks[0].price) / u + 1) : 0) + n.bids.length,
								data: function() {
									for (var e, t, r, i, o, a, h = Math.max((null === n || void 0 === n || null === (e = n.asks) || void 0 === e || null === (t = e[Math.min((null === n || void 0 === n || null === (r = n.asks) || void 0 === r ? void 0 : r.length) - 1, ~~(d - T / 2))]) || void 0 === t ? void 0 : t.totalAmount) || 0, (null === n || void 0 === n || null === (i = n.bids) || void 0 === i || null === (o = i[Math.min((null === n || void 0 === n || null === (a = n.bids) || void 0 === a ? void 0 : a.length) - 1, ~~(d - T / 2))]) || void 0 === o ? void 0 : o.totalAmount) || 0), f = 0, g = 0, v = 0; v <= d; ++v) {
										var p, m, x, b, y, _, w, j;
										f = Math.min(f, (null === n || void 0 === n || null === (p = n.asks) || void 0 === p || null === (m = p[v]) || void 0 === m ? void 0 : m.amount) || f, (null === n || void 0 === n || null === (x = n.bids) || void 0 === x || null === (b = x[v]) || void 0 === b ? void 0 : b.amount) || f), g = Math.max(g, (null === n || void 0 === n || null === (y = n.asks) || void 0 === y || null === (_ = y[v]) || void 0 === _ ? void 0 : _.amount) || g, (null === n || void 0 === n || null === (w = n.bids) || void 0 === w || null === (j = w[v]) || void 0 === j ? void 0 : j.amount) || g)
									}
									for (var C = g - f, k = "crossExchange" === s.get() && "spot" === Y(n, l).marketType ? c : C, S = 0, O = new Array(6 * (n.asks.length + n.bids.length)), P = function(e) {
											var t = e.price,
												n = e.amount,
												r = e.totalAmount;
											O[S++] = t, O[S++] = (n - f) / k, O[S++] = ai(n, 1), O[S++] = r;
											var i = Math.min(1, (n - f) / k),
												o = Math.min(1, r / h);
											O[S++] = i, O[S++] = o
										}, M = n.asks.length - 1; M >= 0; --M) P(n.asks[M]);
									var A = 0;
									if (n.asks.length && n.bids.length)
										if (n.asks[0].price == n.bids[0].price) {
											S -= 6;
											var Z = n.asks[0],
												D = n.bids[0];
											O[S++] = n.asks[0].price, O[S++] = [(Z.amount - f) / k, (D.amount - f) / k], O[S++] = [ai(Z.amount, 1), ai(D.amount, 1)], O[S++] = [Z.totalAmount, D.totalAmount], O[S++] = [Math.min(1, (Z.amount - f) / k), Math.min(1, (D.amount - f) / k)], O[S++] = [Math.min(1, Z.totalAmount / h), Math.min(1, D.totalAmount / h)], A = 1
										} else
											for (var L = n.asks[0].price - u; L > n.bids[0].price; L -= u) P({
												price: L,
												amount: 0,
												totalAmount: 0,
												diffToPrev: 0
											});
									for (var I = A; I < n.bids.length; ++I) P(n.bids[I]);
									return O
								},
								uniforms: {
									precision: h,
									heatmapCount: 1,
									detail: 1,
									depthLevels: d,
									askBidIndex: q,
									askBidIndexAnimated: X,
									exchange: ii.find(null === n || void 0 === n ? void 0 : n.exchange),
									aggregationGrouping: u
								},
								alpha: t("".concat(r), U ? 0 : 1),
								keyIndex: 0,
								objects: K,
								align: X
							}
						}
						var ae = function() {
							n.reduce((function(e, t) {
								return e + t.maxAmount
							}), 0);
							for (var i = f().groupBy(n.filter((function(e) {
									return e && e.asks.length && e.bids.length
								})), "exchange"), a = Object.values(i).flat(), s = a.map((function(e, t) {
									return t
								})).filter((function(e) {
									var t, n;
									return e > 0 && (null === (t = a[e - 1]) || void 0 === t ? void 0 : t.exchange) !== (null === (n = a[e]) || void 0 === n ? void 0 : n.exchange)
								})), l = a.length, c = function(e, t) {
									var n = e.reduce((function(e, t) {
											var n, r, i, o;
											return Math.min(e, null === (n = t.bids[0]) || void 0 === n ? void 0 : n.price, null === (r = t.bids[t.bids.length - 1]) || void 0 === r ? void 0 : r.price, null === (i = t.asks[0]) || void 0 === i ? void 0 : i.price, null === (o = t.asks[t.asks.length - 1]) || void 0 === o ? void 0 : o.price)
										}), 1 / 0),
										r = e.reduce((function(e, t) {
											var n, r, i, o;
											return Math.max(e, null === (n = t.bids[0]) || void 0 === n ? void 0 : n.price, null === (r = t.bids[t.bids.length - 1]) || void 0 === r ? void 0 : r.price, null === (i = t.asks[0]) || void 0 === i ? void 0 : i.price, null === (o = t.asks[t.asks.length - 1]) || void 0 === o ? void 0 : o.price)
										}), -1 / 0);
									if (r < n) return [];
									for (var i = [], o = e.map((function(e) {
											return 0
										})), a = e.map((function(e) {
											return e.bids.length - 1
										})), s = n; s <= r; s += t) {
										for (var l = new Array(e.length).fill(void 0), c = !0, u = 0; u < e.length; ++u) {
											var d = e[u].asks[o[u]],
												h = e[u].bids[a[u]];
											if (d && d.price == s || h && h.price == s) {
												var f = void 0;
												d && d.price == s ? ((f = d).ask = !0, o[u]++) : ((f = h).bid = !0, a[u]--), c = !1, l[u] = f
											} else l[u] = u == e.length - 1 && c ? {
												price: s,
												amount: 0,
												totalAmount: 0,
												diffToPrev: 0
											} : void 0
										}
										i.push(l)
									}
									return i
								}(a, u), g = 4 + 2 * a.length, v = a.reduce((function(e, t) {
									var n, r;
									return Math.max(e, null === (n = t.asks[0]) || void 0 === n ? void 0 : n.price, null === (r = t.asks[t.asks.length - 1]) || void 0 === r ? void 0 : r.price)
								}), -1 / 0), p = a.reduce((function(e, t) {
									var n, r;
									return Math.min(e, null === (n = t.asks[0]) || void 0 === n ? void 0 : n.price, null === (r = t.asks[t.asks.length - 1]) || void 0 === r ? void 0 : r.price)
								}), 1 / 0), m = a.reduce((function(e, t) {
									var n, r;
									return Math.max(e, null === (n = t.bids[0]) || void 0 === n ? void 0 : n.price, null === (r = t.bids[t.bids.length - 1]) || void 0 === r ? void 0 : r.price)
								}), -1 / 0), x = null !== v && void 0 !== v ? v : 0, b = .5 * ((null !== p && void 0 !== p ? p : 0) + (null !== m && void 0 !== m ? m : 0)), y = (x - b) / u, _ = !(null !== c && void 0 !== c && c.length), w = function(e) {
									return (x - e) / u
								}, j = b + (d + .5) * u, C = b - (d + .5) * u, k = t("".concat(r, "-askBidIndex"), !o || _ ? void 0 : b, {
									postprocess: w
								}), S = t("".concat(r, "-top"), _ ? void 0 : j, Qi({
									postprocess: w
								}, eo)), O = t("".concat(r, "-bottom"), _ ? void 0 : C, Qi({
									postprocess: w
								}, eo)), P = [], T = 0; T < a.length; ++T) {
								for (var M, A, Z, D, L = null !== (M = null === (A = a[T]) || void 0 === A || null === (Z = A.extra) || void 0 === Z ? void 0 : Z.lastPrice) && void 0 !== M ? M : 0, I = !1, R = 0; R < P.length; ++R) {
									var F, E;
									if (Math.abs((null !== (F = null === (E = P[R]) || void 0 === E ? void 0 : E.priceRaw) && void 0 !== F ? F : 0) - L) <= u) {
										I = !0;
										break
									}
								}
								P.push({
									type: Ti,
									priceRaw: L,
									price: ii.find(null === (D = a[T]) || void 0 === D ? void 0 : D.exchange) + " " + (null === L || void 0 === L ? void 0 : L.toFixed(h + (u <= 1 ? 1 : 0))),
									textAlpha: t("".concat(r, "-").concat(T, "-alpha"), I ? 0 : 1),
									index: t("".concat(r, "-").concat(T, "-priceIndex"), L, {
										postprocess: function(e) {
											return (x - e) / u
										}
									})
								})
							}
							return _ || P.push({
								type: Pi,
								dimUp: !0,
								index: S,
								cursor: "row-resize",
								onEvent: function(n, r) {
									var i = (x - b) / u,
										o = Math.max(1, Math.round(i - r));
									d != o && (e.depthLevels.set(o), t.context.update())
								}
							}, {
								type: Pi,
								dimDown: !0,
								index: O,
								cursor: "row-resize",
								onEvent: function(n, r) {
									var i = (x - b) / u,
										o = Math.max(1, Math.round(r - i - 1));
									d != o && (e.depthLevels.set(o), t.context.update())
								}
							}), {
								v: {
									size: 16,
									widths: [60, 10, 8 * l, 10, 400 - (70 + 8 * l + 10 + 4), 4],
									types: [qi, Si, Di, Si, Fi, Si],
									data: function() {
										for (var e = 0, t = 0, n = 0, r = Math.floor(y - d + .5), i = Math.ceil(y + d - .5), o = r; o <= i; ++o) {
											var s = c[o];
											if (s) {
												var l, u = 0,
													h = 0,
													f = Yi(s);
												try {
													for (f.s(); !(l = f.n()).done;) {
														var v, p, m, x = l.value;
														t = Math.min(t, null !== (v = null === x || void 0 === x ? void 0 : x.amount) && void 0 !== v ? v : 0), u += null !== (p = null === x || void 0 === x ? void 0 : x.amount) && void 0 !== p ? p : 0, h += null !== (m = null === x || void 0 === x ? void 0 : x.totalAmount) && void 0 !== m ? m : 0
													}
												} catch (k) {
													f.e(k)
												} finally {
													f.f()
												}
												n = Math.max(n, u), e = Math.max(h)
											}
										}
										for (var b = n - t, _ = 0, w = new Array(g * c.length), j = function(n) {
												var r, i;
												w[_++] = null !== (r = null === (i = n.find((function(e) {
													return !!e
												}))) || void 0 === i ? void 0 : i.price) && void 0 !== r ? r : 0;
												for (var o = 0, s = 0; s < n.length; ++s) {
													var l;
													null !== (l = n[s]) && void 0 !== l && l.ask && (o |= 1 << s)
												}
												w[_++] = o;
												for (var c = 0; c < a.length; ++c) {
													var u, d = n[c],
														h = ((null !== (u = null === d || void 0 === d ? void 0 : d.amount) && void 0 !== u ? u : 0) - t) / b;
													w[_++] = Math.pow(h, .65)
												}
												w[_++] = n.reduce((function(e, t) {
													var n;
													return e + (null !== (n = null === t || void 0 === t ? void 0 : t.amount) && void 0 !== n ? n : 0)
												}), 0), w[_++] = n.reduce((function(e, t) {
													var n;
													return e + (null !== (n = null === t || void 0 === t ? void 0 : t.totalAmount) && void 0 !== n ? n : 0)
												}), 0), w[_++] = o;
												for (var f = 0; f < a.length; ++f) {
													var g, v, p = n[f];
													w[_++] = Math.min(1, ((null !== (g = null === p || void 0 === p ? void 0 : p.amount) && void 0 !== g ? g : 0) - t) / b), w[_++] = Math.min(1, (null !== (v = null === p || void 0 === p ? void 0 : p.totalAmount) && void 0 !== v ? v : 0) / e)
												}
											}, C = c.length - 1; C >= 0; --C) j(c[C]);
										return w
									},
									keyIndex: 0,
									uniforms: {
										precision: h,
										heatmapCount: l,
										count: l,
										askBidIndex: -~~y,
										askBidIndexAnimated: k,
										switchExchangeIndexes: s,
										exchanges: a.map((function(e) {
											return ii.find(e.exchange)
										})),
										aggregationGrouping: u
									},
									alpha: t("".concat(r), _ ? 0 : 1),
									objects: P,
									align: k
								}
							}
						}();
						if ("object" === typeof ae) return ae.v
					}))
				},
				no = function(e) {
					var t = x.useMemo((function() {
							return Qr(!0)
						}), []),
						n = x.useState(e.theme.get()),
						r = (0, M.Z)(n, 2),
						i = r[0],
						o = r[1],
						a = x.useState(e.customThemes.get()),
						s = (0, M.Z)(a, 2),
						l = s[0],
						c = s[1];
					return x.useEffect((function() {
						var t, n;
						null === (t = e.theme) || void 0 === t || null === (n = t.subscribe) || void 0 === n || n.call(t, o), e.customThemes.subscribe(c)
					}), [e.theme]), (0, $.jsx)(wi, {
						font: e.font,
						theme: i,
						customThemes: l,
						animation: t.context,
						renderer: e.renderer,
						align: "center",
						state: to(e, t),
						fixedWidth: !0,
						innerRef: e.innerRef,
						canvasInfo: e.canvasInfo,
						scrollboxRef: e.scrollboxRef
					})
				},
				ro = n(7426);

			function io(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function oo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? io(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : io(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ao = n.n(ro)(),
				so = function(e) {
					var t = e.dragLineX,
						n = e.dataURI,
						r = e.canvasInfo,
						i = e.isAggregatedMarket,
						o = r.rowWidth * (i ? 2 : 1) / r.scale,
						a = 2 * r.canvasHeight / r.scale,
						s = (0, x.useState)(t + t / o)[0];
					return (0, $.jsx)("div", {
						style: {
							width: o
						},
						className: ao.dragImage,
						children: (0, $.jsx)("img", {
							alt: "orderbook",
							src: n,
							style: {
								height: a,
								right: "".concat(s - (i ? o / r.scale - 200 : 0), "px")
							},
							draggable: !1
						})
					})
				},
				lo = function(e) {
					var t = e.dragLineX,
						n = e.canvasInfo,
						r = e.scrolled,
						i = e.isAggregatedMarket,
						o = (0, x.useState)(t - r)[0],
						a = n,
						s = a.rowWidth,
						l = a.scale,
						c = o - (i ? s / n.scale - 200 : 0);
					return (0, $.jsx)("div", {
						className: ao.draggedMarketOverlay,
						style: {
							left: "".concat(c, "px"),
							width: s * (i ? 2 : 1) / l
						}
					})
				},
				co = function(e) {
					var t = e.coords,
						n = e.isAggregatedMarket,
						r = e.exchange,
						i = e.symbol,
						o = e.imgUrl,
						a = e.canvasInfo,
						s = e.dragLineX,
						l = e.scrolled;
					return (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsxs)("div", {
							className: ao.dragBlock,
							style: oo({}, t),
							children: [(0, $.jsxs)("span", {
								className: ao.market,
								children: [r, "/", i]
							}), (0, $.jsx)(so, {
								dragLineX: s,
								dataURI: o,
								canvasInfo: a,
								isAggregatedMarket: n
							})]
						}), (0, $.jsx)(lo, {
							dragLineX: s,
							canvasInfo: a,
							scrolled: l,
							isAggregatedMarket: n
						}), (0, $.jsx)("div", {
							className: ao.dragLine,
							style: {
								left: s - l
							}
						})]
					})
				},
				uo = n(1668),
				ho = n.n(uo),
				fo = n(1684),
				go = n.n(fo),
				vo = n(174);

			function po(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function mo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? po(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : po(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var xo = n.n(vo)(),
				bo = function(e) {
					var t = e.label,
						n = e.children,
						r = e.className,
						i = e.isProFeature,
						o = e.isFreeUser;
					return (0, $.jsxs)("div", mo(mo({}, (0, d.Sh)(xo.item, r)), {}, {
						children: [(0, $.jsx)(u.F.div, mo(mo({}, (0, d.Sh)(xo.label, null === o || void 0 === o ? void 0 : o.view((function(e) {
							return e && i ? xo.showPro : void 0
						})))), {}, {
							children: t
						})), (0, $.jsx)("div", mo(mo({}, (0, d.Sh)(xo.input)), {}, {
							children: n
						}))]
					}))
				},
				yo = n(4425);

			function _o(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}
			var wo = n.n(yo)(),
				jo = function() {
					var e = c.h.create(40),
						t = e.view((function(e) {
							return "linear-gradient(90deg, var(--borderColorX) " + e + "%, transparent " + e + "%)"
						}));
					return (0, $.jsx)(u.F.input, function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? _o(Object(n), !0).forEach((function(t) {
								(0, r.Z)(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _o(Object(n)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({
						className: wo.range,
						type: "range",
						min: 0,
						max: 100,
						style: {
							"--sliderBackground": t
						},
						"data-background": t
					}, (0, d.ak)({
						value: e
					})))
				},
				Co = n(4336);

			function ko(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function So(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ko(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Oo = n.n(Co)(),
				Po = function(e) {
					var t = e.value;
					return (0, $.jsx)(u.F.span, So(So({
						onClick: function() {
							return t.modify((function(e) {
								return !e
							}))
						}
					}, (0, d.Sh)(Oo.switcher, t.view((function(e) {
						return e ? Oo.active : null
					})))), {}, {
						children: (0, $.jsx)(u.F.span, {
							className: Oo.thumbler,
							children: t.view((function(e) {
								return e ? "\u2713" : "\u2715"
							}))
						})
					}))
				};

			function To(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Mo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? To(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Ao = go(),
				Zo = function(e) {
					e.children;
					var t = e.className,
						n = e.name,
						r = e.style;
					return (0, $.jsx)("div", Mo(Mo({}, (0, d.Sh)(Ao.wrap, t)), {}, {
						style: r,
						children: (0, $.jsx)("span", {
							className: Ao.header,
							children: n
						})
					}))
				},
				Do = function(e) {
					var t = e.lockMode,
						n = e.alignLastPrice;
					return (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsx)(bo, {
							className: Ao.menuItem,
							label: "Depth",
							children: (0, $.jsx)(jo, {})
						}), (0, $.jsx)(bo, {
							className: Ao.menuItem,
							label: "Lock Mode",
							children: (0, $.jsx)(Po, {
								value: t
							})
						}), (0, $.jsx)(bo, {
							className: Ao.menuItem,
							label: "Align Last Price",
							children: (0, $.jsx)(Po, {
								value: n
							})
						})]
					})
				};

			function Lo(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Io(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Lo(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lo(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Ro = ho(),
				Fo = function(e) {
					var t = e.header,
						n = e.extra,
						r = e.orderBook,
						i = e.volumeHistogram,
						o = e.dragAndDrop,
						a = e.scrollbox,
						s = e.alignLastPrice,
						l = e.lockMode,
						c = e.showVolumeHistogram;
					return (0, $.jsxs)("div", Io(Io({}, (0, d.Sh)(Ro.wrap)), {}, {
						ref: a,
						children: [(0, $.jsxs)("div", Io(Io({}, (0, d.Sh)(Ro.wrapper)), {}, {
							children: [(0, $.jsx)("div", Io(Io({}, (0, d.Sh)(Ro.header)), {}, {
								children: t
							})), (0, $.jsx)("div", Io(Io({}, (0, d.Sh)(Ro.orderbook)), {}, {
								children: r
							})), c ? (0, $.jsx)("div", Io(Io({}, (0, d.Sh)(Ro.volumeHistogram)), {}, {
								children: i
							})) : null, o, n]
						})), (0, $.jsxs)("div", Io(Io({}, (0, d.Sh)(Ro.wrapX)), {}, {
							children: [(0, $.jsx)(Zo, {
								name: "order book",
								className: Ro.orderBookMenuWrapper,
								children: (0, $.jsx)(Do, {
									alignLastPrice: s,
									lockMode: l
								})
							}), (0, $.jsx)(u.F.Fragment, {
								children: c ? (0, $.jsx)(Zo, {
									name: "volume histogram",
									className: Ro.volumeHistogramMenuWrapper
								}) : null
							})]
						}))]
					}))
				},
				Eo = n(3710),
				Ho = n.n(Eo),
				Bo = n(9147),
				No = n.n(Bo)(),
				Vo = function(e) {
					var t = e.aggregatedMarkets,
						n = f().groupBy(t, "exchange");
					return (0, $.jsx)(u.F.div, {
						className: No.aggregatedLinks,
						children: Object.keys(n).map((function(e, t) {
							return (0, $.jsxs)("div", {
								className: No.aggregatedLinkWrap,
								children: [(0, $.jsx)(Ne.D, {
									exchange: n[e][0].exchange,
									className: No.exchangeIcon,
									w: 18,
									h: 18
								}), (0, $.jsx)("div", {
									className: No.aggregatedExchange,
									children: n[e][0].exchange
								}), n[e].map((function(e, t) {
									return (0, $.jsx)("span", {
										className: No.aggregatedSymbol,
										children: e.symbol
									}, t)
								}))]
							}, t)
						}))
					})
				};

			function Uo(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Wo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Uo(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uo(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var zo = Ho(),
				Go = function(e) {
					e.connection;
					var t = e.market,
						n = e.onDragStart,
						r = e.aggregatedMarketsSelectorPopup,
						i = e.selectedMarkets,
						o = e.aggregationId,
						a = e.currentHoveredSymbol,
						s = e.coinConfig,
						l = e.id,
						c = (0, x.useRef)(null);
					(0, x.useEffect)((function() {
						var e = (0, rt.R)(c.current, "mousedown").subscribe((function(e) {
							return n(e, t)
						}));
						return function() {
							e.unsubscribe()
						}
					}), []);
					var h = Array.isArray(t),
						f = !h && "spot" === Y(t, s).marketType,
						g = function() {
							i.set(Array.isArray(t) ? t : [t]), o.set(l), r.set("aggregated-markets-selector")
						},
						v = function() {
							return (0, $.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								width: "12",
								height: "12",
								className: zo.dragAndDropIcon,
								children: (0, $.jsx)("path", {
									d: "M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z"
								})
							})
						},
						p = function() {
							return (0, $.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "5",
								height: "5",
								viewBox: "0 0 5 5",
								className: zo.aggregationIcon,
								children: (0, $.jsx)("path", {
									d: "M0 2.00006V3.00006L2 3V5H2.5H2.99986L3 3L5 3.00006V2H3L2.99986 0H2V2L0 2.00006Z"
								})
							})
						};
					return (0, $.jsx)(u.F.div, Wo(Wo({}, (0, d.Sh)(zo.wrap, zo.cell)), {}, {
						style: h ? {
							minWidth: 400
						} : void 0,
						children: (0, $.jsx)(u.F.div, Wo(Wo({}, (0, d.Sh)(zo.marketName, h && zo.aggregated)), {}, {
							children: h ? (0, $.jsxs)($.Fragment, {
								children: [(0, $.jsx)(Vo, {
									aggregatedMarkets: t,
									currentHoveredSymbol: a,
									coinConfig: s
								}), (0, $.jsxs)("div", Wo(Wo({}, (0, d.Sh)(zo.controlsRow, zo.dragActivator)), {}, {
									ref: c,
									children: [(0, $.jsx)("div", Wo(Wo({}, (0, d.Sh)(zo.icon)), {}, {
										children: (0, $.jsx)(v, {})
									})), " ", "Sort Order Books"]
								})), (0, $.jsxs)("div", Wo(Wo({}, (0, d.Sh)(zo.controlsRow, zo.aggregatedCreator)), {}, {
									onClick: g,
									children: [(0, $.jsx)("div", Wo(Wo({}, (0, d.Sh)(zo.icon)), {}, {
										children: (0, $.jsx)(p, {})
									})), " ", "Manage Aggregation"]
								}))]
							}) : (0, $.jsxs)($.Fragment, {
								children: [t.exchange, "/", t.symbol, (0, $.jsx)("div", Wo(Wo({}, (0, d.Sh)(zo.dragActivator, zo.icon)), {}, {
									ref: c,
									children: (0, $.jsx)(v, {})
								})), f && (0, $.jsx)("div", Wo(Wo({}, (0, d.Sh)(zo.aggregatedCreator, zo.icon)), {}, {
									onClick: g,
									children: (0, $.jsx)(p, {})
								}))]
							})
						}))
					}))
				};

			function qo(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" === typeof e) return Yo(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yo(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, a = !0,
					s = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return a = e.done, e
					},
					e: function(e) {
						s = !0, o = e
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (s) throw o
						}
					}
				}
			}

			function Yo(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Xo(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Jo(e) {
				var t = e.renderer,
					n = e.theme,
					r = e.font,
					i = e.type,
					o = e.activeMarkets,
					a = e.snapshots,
					s = e.snapshotConfig,
					l = e.heatmapMode,
					d = e.levelVolumeRenderingMode,
					h = e.customThemes,
					f = e.coinConfig,
					g = e.isDragging,
					v = e.imgUrl,
					p = e.canvasInfo,
					m = e.currentHoveredSymbol,
					b = e.marketsWithAggregatedMarkets,
					y = e.lock,
					_ = e.lastPriceAlign,
					w = e.scrollboxRef;
				g.subscribe((function(e) {
					e && v.set(j.current.firstChild.toDataURL())
				}));
				var j = (0, x.useRef)(null),
					k = c.h.combine(o, b, (function(e, t) {
						return [e, t]
					})).view((function(e) {
						var t = (0, M.Z)(e, 2),
							n = t[0],
							r = t[1];
						return n.some((function(e) {
							return void 0 !== e.aggregationId
						})) ? (0, C.Z)(r) : (0, C.Z)(n)
					}));
				return (0, $.jsx)(u.F.Fragment, {
					children: c.h.combine(k, a.atom, d, s, s.lens("depthLevels"), y, _, (function(e, t, n, r, o, s, l) {
						var c, u;
						return [e.filter((function(e) {
							return e
						})).map((function(e) {
							return Array.isArray(e) ? e.map((function(e) {
								var t, n, r, i = e.exchange,
									o = e.symbol;
								return null === (t = a.value) || void 0 === t || null === (n = t.snapshots) || void 0 === n || null === (r = n[i]) || void 0 === r ? void 0 : r[o]
							})) : null === (t = a.value) || void 0 === t || null === (n = t.snapshots) || void 0 === n || null === (r = n[e.exchange]) || void 0 === r ? void 0 : r[e.symbol];
							var t, n, r
						})).filter((function(e) {
							return !!e
						})), "asks" === i ? null === (c = a.value) || void 0 === c ? void 0 : c.maxAsksRows : null === (u = a.value) || void 0 === u ? void 0 : u.maxBidsRows, n, null === r || void 0 === r ? void 0 : r.isRealtime, null === r || void 0 === r ? void 0 : r.grouping, s, l, o]
					})).view((function(e) {
						var o = (0, M.Z)(e, 8),
							c = o[0],
							u = o[1],
							d = o[2],
							v = o[3],
							x = o[4],
							b = o[5],
							y = o[6];
						o[7];
						return (0, $.jsx)(no, {
							font: r,
							renderer: t,
							innerRef: j,
							inverse: "asks" === i,
							type: i,
							theme: n,
							snapshots: c,
							count: u,
							heatmapMode: l,
							levelVolumeRenderingMode: d,
							depthLevels: s.lens("depthLevels"),
							maxSpotLevelTotal: a.value.maxSpotLevelTotal,
							isTurboMode: v,
							aggregationGrouping: x,
							coinConfig: f,
							customThemes: h,
							isDragging: g,
							canvasInfo: p,
							currentHoveredSymbol: m,
							lock: b,
							lastPriceAlign: y,
							scrollboxRef: w
						}, t)
					}))
				})
			}
			var Qo = function(e) {
					var t = e.activeMarkets,
						n = e.snapshots,
						i = e.snapshotConfig,
						o = e.connection,
						a = e.levelVolumeRenderingMode,
						s = e.heatmapMode,
						l = e.theme,
						d = e.customThemes,
						f = e.coinConfig,
						g = e.scrolled,
						v = (e.api, e.isFreeUser),
						p = e.scrollbox,
						m = e.lock,
						b = e.lastPriceAlign,
						y = e.showVolumeHistogram,
						_ = c.h.create(""),
						w = (0, rt.R)(document, "mousemove"),
						j = (0, rt.R)(document, "mouseup"),
						k = c.h.create(!1),
						S = c.h.create(null),
						O = c.h.create(0),
						P = c.h.create([]),
						T = c.h.create(null);
					(0, x.useEffect)((function() {
						var e = t.subscribe((function(e) {
							P.modify((function() {
								var t = (0, C.Z)(e);
								if (t.some((function(e) {
										return void 0 !== e.aggregationId
									}))) {
									var n = (0, h.groupBy)(t.filter((function(e) {
										return void 0 !== e.aggregationId
									})), "aggregationId");
									Object.keys(n).map((function(e) {
										t.splice(+e, 0, n[+e])
									}))
								}
								var r = (t = t.filter((function(e) {
									return e
								})).filter((function(e) {
									return Array.isArray(e) || void 0 === e.aggregationId
								}))).filter((function(e) {
									return Array.isArray(e)
								}));
								return r.map((function(e) {
									var n = t.findIndex((function(t) {
											return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
										})),
										r = (0, C.Z)(t[n]);
									r = r.map((function(e) {
										return e.aggregationId = n, e
									})), t[n] = (0, C.Z)(r)
								})), r.map((function(e) {
									var n = t.findIndex((function(t) {
										return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
									}));
									t.splice(n + 1, 0, null)
								})), t
							}))
						}));
						return function() {
							return e.unsubscribe()
						}
					}), []);
					var A = function(e) {
							var n, r, i = (null === (n = T.get()) || void 0 === n ? void 0 : n.rowWidth) / (null === (r = T.get()) || void 0 === r ? void 0 : r.scale),
								o = (t.get().some((function(e) {
									return void 0 !== e.aggregationId
								})) ? (0, C.Z)(P.get()) : (0, C.Z)(t.get()))[~~((e.clientX + g.get()) / i)] ? ~~((e.clientX + g.get()) / i) : ~~((e.clientX + g.get()) / i) - 1;
							O.set(o * i)
						},
						Z = function(e) {
							S.modify((function(t) {
								if (t) {
									var n = function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {};
											t % 2 ? Xo(Object(n), !0).forEach((function(t) {
												(0, r.Z)(e, t, n[t])
											})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach((function(t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
											}))
										}
										return e
									}({}, t);
									return n.coords = {
										left: e.clientX,
										top: e.clientY
									}, n
								}
								return null
							})), A(e)
						},
						D = function(e, t) {
							if (1 === e.which) {
								A(e), document.documentElement.style.userSelect = "none", k.set(!0), S.set({
									coords: {
										left: e.clientX,
										top: e.clientY
									},
									content: t
								}), w.pipe((0, it.R)(j)).subscribe(Z);
								var n = j.subscribe((function() {
									L(), n.unsubscribe()
								}))
							}
						},
						L = function() {
							if (k.get()) {
								var e = Math.round(O.get() / 200);
								k.set(!1);
								var n = S.get();
								t.get().some((function(e) {
									return void 0 !== e.aggregationId
								})) ? P.modify((function(t) {
									var r = (0, C.Z)(t),
										i = r.slice(0, e).filter((function(e) {
											return Array.isArray(e)
										})).length;
									if (!n) return r;
									var o = n.content;
									if (Array.isArray(o)) {
										r.splice(r.findIndex((function(e) {
											return Array.isArray(e) && e[0].aggregationId === o[0].aggregationId
										})), 1);
										var a = o.map((function(t) {
											return t.aggregationId = null === r[e - 1] ? e / 2 : e - i, t
										}));
										r = r.filter((function(e) {
											return e
										})), r.splice(Math.ceil(a[0].aggregationId), 0, (0, C.Z)(a));
										var s = r.filter((function(e) {
											return Array.isArray(e)
										}));
										return s.map((function(e) {
											var t = r.findIndex((function(t) {
													return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
												})),
												n = (0, C.Z)(r[t]);
											n = n.map((function(e) {
												return e.aggregationId = t, e
											})), r[t] = (0, C.Z)(n)
										})), s.map((function(e) {
											var t = r.findIndex((function(t) {
												return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
											}));
											r.splice(t + 1, 0, null)
										})), r
									}
									r.splice(r.findIndex((function(e) {
										return e && !Array.isArray(e) && e.symbol === o.symbol && e.exchange === o.exchange
									})), 1), r = r.filter((function(e) {
										return e
									})), r.splice(null === r[e - 1] ? e / 2 : e - i, 0, {
										exchange: o.exchange,
										symbol: o.symbol
									});
									var l = r.filter((function(e) {
										return Array.isArray(e)
									}));
									return l.map((function(e) {
										var t = r.findIndex((function(t) {
												return Array.isArray(t) && t[0].exchange === e[0].exchange && t[0].symbol === e[0].symbol && t[0].aggregationId === e[0].aggregationId
											})),
											n = (0, C.Z)(r[t]);
										n = n.map((function(e) {
											return e.aggregationId = t, e
										})), r[t] = (0, C.Z)(n)
									})), l.map((function(e) {
										var t = r.findIndex((function(t) {
											return Array.isArray(t) && t[0].aggregationId === e[0].aggregationId
										}));
										r.splice(t + 1, 0, null)
									})), r
								})) : t.modify((function(t) {
									var r = (0, C.Z)(t);
									if (!n) return r;
									var i = n.content;
									return Array.isArray(i) ? t : (r.splice(r.findIndex((function(e) {
										return e.symbol === i.symbol && e.exchange === i.exchange
									})), 1), r.splice(e, 0, {
										exchange: i.exchange,
										symbol: i.symbol
									}), r)
								})), S.set(null), document.documentElement.style.userSelect = "initial"
							}
						},
						I = c.h.create("webgl"),
						R = c.h.create({
							main: '"Roboto"',
							mono: '"Roboto Mono"'
						}),
						F = c.h.create([]),
						E = c.h.create(NaN),
						H = c.h.create(null),
						N = c.h.create(null);
					return (0, $.jsx)(u.F.Fragment, {
						children: y.view((function(e) {
							return (0, $.jsx)(Fo, {
								alignLastPrice: b,
								lockMode: m,
								scrollbox: p,
								showVolumeHistogram: e,
								dragAndDrop: (0, $.jsx)(u.F.Fragment, {
									children: c.h.combine(O, _, T, g, S, (function(e, t, n, r, i) {
										return [null === i || void 0 === i ? void 0 : i.coords, Array.isArray(null === i || void 0 === i ? void 0 : i.content) ? null === i || void 0 === i ? void 0 : i.content[0].exchange : null === i || void 0 === i ? void 0 : i.content.exchange, Array.isArray(null === i || void 0 === i ? void 0 : i.content) ? null === i || void 0 === i ? void 0 : i.content[0].symbol : null === i || void 0 === i ? void 0 : i.content.symbol, Array.isArray(null === i || void 0 === i ? void 0 : i.content), e, t, n, r, i]
									})).view((function(e) {
										var t = (0, M.Z)(e, 9),
											n = t[0],
											r = t[1],
											i = t[2],
											o = t[3],
											a = t[4],
											s = t[5],
											l = t[6],
											c = t[7];
										return t[8] ? (0, $.jsx)(co, {
											coords: n,
											isAggregatedMarket: o,
											dragLineX: a,
											imgUrl: s,
											canvasInfo: l,
											exchange: r,
											symbol: i,
											scrolled: c
										}) : null
									}))
								}),
								extra: (0, $.jsx)($.Fragment, {
									children: (0, $.jsx)(bt, {
										popup: N,
										coinConfig: f,
										marketsToAggregate: F,
										activeMarkets: t,
										aggregationId: E,
										isFreeUser: v
									})
								}),
								header: (0, $.jsx)(u.F.Fragment, {
									children: (r = function(e, t, r) {
										return (0, $.jsx)(Go, {
											connection: Array.isArray(e) || ut(e.exchange) ? void 0 : o.view(e.exchange),
											market: Array.isArray(e) ? e : Y(e, f),
											selectedMarkets: F,
											funding: n.lens("snapshots", Array.isArray(e) ? e[0].exchange : e.exchange, Array.isArray(e) ? e[0].symbol : e.symbol, "extra", "funding").view((function(e) {
												return null !== e && void 0 !== e ? e : void 0
											})),
											onDragStart: D,
											aggregatedMarketsSelectorPopup: N,
											currentHoveredSymbol: H,
											aggregationId: E,
											coinConfig: f,
											id: r
										}, t)
									}, c.h.combine(t, P, (function(e, t) {
										return [e, t]
									})).view((function(e) {
										var t = (0, M.Z)(e, 2),
											n = t[0],
											i = t[1];
										return (n.some((function(e) {
											return void 0 !== e.aggregationId
										})) ? (0, C.Z)(i) : (0, C.Z)(n)).filter((function(e) {
											return e
										})).map((function(e, t) {
											return Array.isArray(e) ? r(e, e[0].exchange + "_" + e[0].symbol + "_" + e[0].aggregationId, t) : r(e, e.exchange + "_" + e.symbol, t)
										}))
									})))
								}),
								orderBook: (0, $.jsx)(u.F.Fragment, {
									children: c.h.combine(I, R, (function(e, r) {
										return "canvas" === e || "webgl" === e ? (0, $.jsx)(Jo, {
											renderer: e,
											type: "asks",
											font: r.mono,
											theme: l,
											snapshots: n,
											activeMarkets: t,
											snapshotConfig: i,
											heatmapMode: s,
											levelVolumeRenderingMode: a,
											customThemes: d,
											coinConfig: f,
											isDragging: k,
											imgUrl: _,
											canvasInfo: T,
											currentHoveredSymbol: H,
											marketsWithAggregatedMarkets: P,
											lock: m,
											lastPriceAlign: b,
											scrollboxRef: p
										}, r.mono) : null
									}))
								}),
								volumeHistogram: (0, $.jsx)(u.F.Fragment, {
									children: B(c.h.combine(t, P, n.atom, l, d, R, I, (function(e, t, n, r, i, o, a) {
										return [e, t, n, r, i, o, a]
									})).view((function(e) {
										var t = (0, M.Z)(e, 7),
											r = t[0],
											i = t[1],
											o = (t[2], t[3]),
											a = t[4],
											s = t[5],
											l = t[6];
										return (0, $.jsx)(wi, {
											font: s.mono,
											theme: o,
											customThemes: a,
											renderer: null !== l && void 0 !== l ? l : "canvas",
											axis: "vertical",
											fixedWidth: !0,
											fixedHeight: !0,
											align: "start",
											state: (r.some((function(e) {
												return void 0 !== e.aggregationId
											})) ? i : r).filter((function(e) {
												return !!e
											})).map((function(e) {
												var t, r, i, o, a, s = Array.isArray(e) ? e[0] : e;
												if (!s) return {
													size: 32,
													types: [Si],
													widths: [200],
													data: []
												};
												var l = null === (t = n.value) || void 0 === t || null === (r = t.snapshots) || void 0 === r || null === (i = r[s.exchange]) || void 0 === i ? void 0 : i[s.symbol],
													c = null !== (o = null === l || void 0 === l || null === (a = l.extra) || void 0 === a ? void 0 : a.volumeHistograms) && void 0 !== o ? o : [],
													u = c.map((function(e) {
														var t, n, r, i;
														return Math.max(0, null !== (t = null === e || void 0 === e || null === (n = e.volumesBuy) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0, null !== (r = null === e || void 0 === e || null === (i = e.volumesSell) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0)
													})),
													d = Math.max.apply(Math, [0].concat((0, C.Z)(u)));
												return {
													size: 32,
													types: [Oi, Si, Ci, ki],
													widths: [60, 10, Array.isArray(e) ? 290 : 90, 40],
													data: function() {
														var e, t = new Array((1 + 2 * d + 2) * c.length),
															n = 0,
															r = qo(c);
														try {
															for (r.s(); !(e = r.n()).done;) {
																var i = e.value,
																	o = (i.interval, i.window),
																	a = i.volumesSell,
																	s = i.volumesBuy;
																t[n++] = si(o);
																for (var l = 0, u = 0, h = 0; h < a.length; ++h) l += t[n++] = a[h], u += t[n++] = s[h];
																for (var f = 2 * d - 2 * a.length, g = 0; g < f; ++g) t[n++] = 0;
																t[n++] = ai(l), t[n++] = ai(u)
															}
														} catch (v) {
															r.e(v)
														} finally {
															r.f()
														}
														return t
													},
													uniforms: {
														deltaCount: u
													}
												}
											}))
										}, s + l)
									})))
								})
							});
							var r
						}))
					})
				},
				Ko = n(446),
				$o = n.n(Ko),
				ea = n(4059);

			function ta(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function na(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ta(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ra = n.n(ea)(),
				ia = function(e, t) {
					var n = Math.floor(e / 1e3),
						r = 3600;
					return n < 5 ? "now" : n < 60 ? n + "s" : n < r ? Math.floor(n / 60) + "m" : n < 86400 ? Math.floor(n / r) + "h" : Math.floor(n / 86400) + "d"
				},
				oa = function(e) {
					var t = e.trade,
						n = e.hasIcon,
						r = e.timer,
						i = e.showExtended,
						o = e.isColorized,
						a = e.prevTradeTimestamp,
						s = t.exchange,
						l = t.price,
						c = t.side,
						h = t.amount,
						f = t.timestamp,
						g = t.symbol,
						v = t.amountInQuoteUnits,
						p = f.getTime(),
						m = n ? (0, $.jsx)(u.F.Fragment, {
							children: o.view((function(e) {
								return (0, $.jsx)(Ne.D, {
									className: e ? ra.colorizedIcon : void 0,
									exchange: s,
									w: 20,
									h: 20
								})
							}))
						}) : null,
						x = (0, vt.uf)(v),
						b = function(e) {
							var t = e > 1e3,
								n = t ? (0, vt.f1)(e) : (0, vt.f2)(e);
							return [n, Number.isInteger(n) ? t ? ".0" : ".00" : ""]
						}(l),
						y = (0, M.Z)(b, 2),
						_ = y[0],
						w = y[1],
						j = (0, $.jsxs)($.Fragment, {
							children: [_, w ? (0, $.jsx)("span", {
								className: ra.suffix,
								children: w
							}) : null]
						}),
						C = "buy" === c && ra.buy || "sell" === c && ra.sell || "";
					return (0, $.jsxs)(u.F.span, na(na({}, (0, d.Sh)(ra.item, C, t.thresholdMultiplier > 4 ? ra.veryBig : null, i.view((function(e) {
						return e && ra.extended
					})), o.view((function(e) {
						return e && ra.colorize
					})))), {}, {
						style: {
							"--itemOpacity": o.view((function(e) {
								return e ? Math.min(.2 + t.thresholdMultiplier / 4, 1) : 1
							}))
						},
						children: [(0, $.jsx)("span", {
							className: ra.icon,
							title: s,
							children: m
						}), (0, $.jsx)(u.F.Fragment, {
							children: i.view((function(e) {
								return e ? (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsx)("span", {
										className: ra.exchange,
										children: n ? s : ""
									}), (0, $.jsx)("span", {
										className: ra.tradeTime,
										children: (0, O.Z)(p, "HH:mm:ss")
									})]
								}) : (0, $.jsx)(u.F.Fragment, {
									children: r.pipe((0, R.O)(Date.now()), (0, jn.U)((function(e) {
										var t = ia(e - p),
											n = a ? ia(e - a.getTime()) : "";
										return (0, $.jsx)("span", na(na({}, (0, d.Sh)(ra.timer, n === t && ra.hidden)), {}, {
											children: t
										}))
									})))
								})
							}))
						}), (0, $.jsx)("span", na(na({}, (0, d.Sh)(ra.total)), {}, {
							children: x
						})), (0, $.jsx)(u.F.Fragment, {
							children: i.view((function(e) {
								return e ? (0, $.jsx)("span", na(na({}, (0, d.Sh)(ra.amount)), {}, {
									children: (0, vt.f2)(h)
								})) : null
							}))
						}), (0, $.jsx)("span", na(na({}, (0, d.Sh)(ra.price)), {}, {
							children: j
						})), (0, $.jsx)("span", na(na({}, (0, d.Sh)(ra.market)), {}, {
							children: g
						}))]
					}))
				};

			function aa(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sa(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? aa(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aa(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var la = $o(),
				ca = function(e) {
					var t = e.liquidations,
						n = e.trades,
						r = e.feedMode,
						i = e.feedTheme,
						o = e.isTradesShown,
						a = e.soundVersion,
						s = e.soundContextState,
						l = e.isPopup,
						d = t.view((function(e) {
							return !!e.length
						})),
						h = new Pn(s),
						f = c.h.create(null);
					o.subscribe((function(e) {
						if (!l) {
							var t;
							if (e && f.get()) null === (t = f.get()) || void 0 === t || t.close();
							e || h.close()
						}
					})), a.subscribe((function(e) {
						e ? h.resume() : h.suspend()
					}));
					var g = c.h.create(window.innerHeight),
						v = (0, rt.R)(window, "resize").pipe((0, jn.U)((function() {
							return window.innerHeight
						})), (0, Cn.x)(), (0, R.O)(window.innerHeight)).subscribe((function(e) {
							return g.set(e)
						}));
					x.useEffect((function() {
						if (localStorage.getItem("okotoki-sound"))
							if ("0" !== localStorage.getItem("okotoki-sound")) {
								var e = +localStorage.getItem("okotoki-sound");
								a.set(e), 1 === e && h.volume.set(.5), 2 === e && h.volume.set(2), h.resume()
							} else a.set(0), h.suspend();
						return function() {
							v.unsubscribe()
						}
					}), []);
					var p = c.h.combine(g, d, (function(e, t) {
							return Math.floor((e - 76) * (1 - (t ? .35 : 0)) - 10)
						})),
						m = g.view((function(e) {
							return Math.floor(.35 * (e - 76))
						}));
					return (0, $.jsxs)(u.F.Fragment, {
						children: [(0, $.jsxs)(Zo, {
							name: "Trades",
							children: [l ? null : (0, $.jsx)("span", {
								className: la.popupBlock,
								onClick: function(e) {
									var t = window.open(window.location.href + "?mode=popup", "okotokiPopup", "width=400,height=800,top=".concat(e.clientY + 40, ",left=").concat(e.clientX - 350));
									t.onload = function() {
										t.onbeforeunload = function() {
											o.set(!0)
										}
									}, o.set(!1), f.set(t)
								},
								children: (0, $.jsx)(fa, {})
							}), (0, $.jsx)(u.F.span, {
								className: la.soundsBlock,
								onClick: function() {
									a.modify((function(e) {
										return 0 === e ? (h.volume.set(.5), 1) : 1 === e ? (h.volume.set(2), 2) : 2 === e ? (h.volume.set(0), h.suspend(), 0) : void 0
									})), localStorage.setItem("okotoki-sound", JSON.stringify(a.get())), h.resume(), a.get() && h.tradeToSong(2.5, "buy", 1)
								},
								children: a.view((function(e) {
									return 2 === e ? (0, $.jsx)(da, {}) : 1 === e ? (0, $.jsx)(ua, {}) : (0, $.jsx)(ha, {})
								}))
							})]
						}), (0, $.jsx)(ga, {
							height: p,
							feedMode: r,
							feedTheme: i,
							trades: n,
							sound: h,
							isSoundEnabled: a,
							type: "trades",
							isPopup: l,
							isTradesShown: o
						}), d.view((function(e) {
							return e ? (0, $.jsxs)($.Fragment, {
								children: [(0, $.jsx)(Zo, {
									name: "Liquidations"
								}), (0, $.jsx)(ga, {
									height: m,
									feedMode: r,
									feedTheme: i,
									trades: t,
									sound: h,
									isSoundEnabled: a,
									type: "liquidations",
									isPopup: l,
									isTradesShown: o
								})]
							}) : null
						}))]
					})
				},
				ua = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: la.icon,
						children: (0, $.jsx)("path", {
							d: "M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2z"
						})
					})
				},
				da = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: la.icon,
						children: (0, $.jsx)("path", {
							d: "M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2zm0 4a5 5 0 0 0 0-10V5a7 7 0 0 1 0 14v-2z"
						})
					})
				},
				ha = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 26 27",
						className: la.icon,
						children: (0, $.jsx)("path", {
							d: "M18 10.584l-2.293-2.291-1.414 1.414 2.293 2.291-2.291 2.291 1.414 1.415 2.292-2.292 2.294 2.292 1.414-1.415-2.293-2.291 2.291-2.29-1.414-1.415-2.292 2.291zM4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9z"
						})
					})
				},
				fa = function() {
					return (0, $.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.0",
						viewBox: "0 0 122.000000 122.000000",
						className: la.icon,
						style: {
							height: "20.2px",
							width: "12.2px"
						},
						children: (0, $.jsxs)("g", {
							transform: "translate(0.000000,122.000000) scale(0.100000,-0.100000)",
							stroke: "none",
							children: [(0, $.jsx)("path", {
								d: "M70 1202 c-71 -35 -70 -26 -70 -597 0 -488 1 -511 20 -542 39 -64 26 -63 592 -63 491 0 514 1 545 20 63 38 67 58 60 309 l-6 224 -55 56 -56 56 0 -273 0 -272 -490 0 -490 0 2 488 3 487 270 3 269 2 -59 60 -59 60 -221 0 c-189 0 -225 -2 -255 -18z"
							}), (0, $.jsx)("path", {
								d: "M823 1143 l77 -78 -152 -152 -153 -153 80 -80 80 -80 152 152 153 153 80 -80 80 -80 0 231 0 231 -97 6 c-54 4 -161 7 -238 7 l-140 0 78 -77z"
							})]
						})
					})
				};

			function ga(e) {
				var t = e.trades,
					n = e.feedMode,
					r = e.feedTheme,
					i = e.height,
					o = (e.type, e.sound),
					a = e.isSoundEnabled,
					s = e.isPopup,
					l = e.isTradesShown,
					h = n.view((function(e) {
						return "extended" === e
					})),
					f = r.view((function(e) {
						return "colorized" === e
					})),
					g = c.h.create(0),
					v = (0, _n.aj)(g, t, i, (function(e, t, n) {
						var r = function(e, t, n, r) {
								return {
									begin: Math.floor(r / t),
									end: Math.min(n, Math.ceil((r + e) / t))
								}
							}(n, 25, t.length, e),
							i = r.begin,
							o = r.end - i;
						return Array.from(Array(o), (function(e, t) {
							return t + i
						}))
					}));
				t.subscribe((function(e) {
					if (e[0] && (0 !== a.get() && l.get() || 0 !== a.get() && s)) {
						var t = e[0],
							n = t.thresholdMultiplier,
							r = t.type,
							i = t.side;
						"big_trade" === r ? o.tradeToSong(2 * n, i, n > 2 ? 2 : 1) : o.playLiq(2 * n)
					}
				}));
				var p = (0, wn.F)(1e3).pipe((0, jn.U)((function(e) {
					return Date.now()
				})), (0, kn.B)());
				return (0, $.jsx)(u.F.div, sa(sa({}, (0, d.Sh)(la.wrap, h.view((function(e) {
					return e && la.extendedVersion
				})))), {}, {
					children: (0, $.jsx)(u.F.div, sa(sa({}, (0, d.oD)({
						forwardRef: "onScroll",
						scrollTop: g
					})), {}, {
						style: {
							position: "relative",
							overflowY: "auto",
							height: i.view((function(e) {
								return e + "px"
							}))
						},
						children: (0, $.jsx)(u.F.div, {
							style: {
								height: t.view((function(e) {
									return 25 * e.length + "px"
								}))
							},
							children: (0, d.Xh)(v, (function(e) {
								return (0, $.jsx)(u.F.div, {
									style: {
										position: "absolute",
										top: 25 * e + "px"
									},
									className: la.itemWrap,
									children: t.view((function(t) {
										var n = t[e];
										if (!n) return null;
										var r = n.exchange,
											i = t[e - 1],
											o = !i || i.exchange !== r;
										return (0, $.jsx)(oa, {
											isColorized: f,
											showExtended: h,
											trade: n,
											hasIcon: o,
											timer: p,
											prevTradeTimestamp: i ? i.timestamp : void 0
										})
									}))
								}, e)
							}))
						})
					}))
				}))
			}
			var va = n(2601);

			function pa(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ma(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? pa(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pa(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var xa = n.n(va)(),
				ba = function(e) {
					var t = e.isPopup,
						n = e.header,
						r = e.extra,
						i = e.orderBooks,
						o = e.tradesFeed,
						a = e.tradesFeedMode,
						s = e.showTradesFeeds,
						l = e.showOrderBooks,
						c = e.scrolled;
					return (0, $.jsxs)("div", ma(ma({}, (0, d.Sh)(xa.container, t && xa.isPopup)), {}, {
						children: [(0, $.jsx)("nav", {
							children: n
						}), (0, $.jsxs)("main", {
							children: [r, (0, $.jsx)(u.F.Fragment, {
								children: l.view((function(e) {
									return e ? (0, $.jsx)("div", {
										className: xa.left,
										onScroll: function(e) {
											return c.set(e.currentTarget.scrollLeft)
										},
										children: i
									}) : null
								}))
							}), (0, $.jsx)(u.F.Fragment, {
								children: s.view((function(e) {
									return e ? (0, $.jsx)(u.F.div, ma(ma({}, (0, d.Sh)(xa.right, a.view((function(e) {
										return "extended" === e && xa.extendedVersion
									})))), {}, {
										children: o
									})) : null
								}))
							})]
						})]
					}))
				},
				ya = Yn();

			function _a(e, t) {
				var n = {
						trimMantissa: !1,
						thousandSeparated: !0,
						mantissa: 0
					},
					r = t.toPrecision();
				if (r.includes(".")) {
					var i = r.split(".")[1].length;
					n.mantissa = i
				}
				return m()(e).format(n)
			}
			var wa = function(e) {
				var t, n, r = e.api,
					o = e.user,
					a = e.theme,
					s = e.latestUpdate,
					d = e.coinConfig,
					f = e.globalSupportedCoins,
					g = (0, v.useRouter)(),
					p = d.markets,
					m = d.coin,
					_ = c.h.create(0),
					w = null === (t = g.query) || void 0 === t ? void 0 : t.mode,
					C = null === (n = g.query) || void 0 === n ? void 0 : n.env,
					k = H.r8 ? Wn.dev : Wn.prod;
				C && ["dev", "local", "stage", "prod"].includes(C) && (k = C);
				var S = p[0].defaultGrouping;
				a.subscribe((function(e) {
					"customTheme" === e && (0, j.ji)(c.h.create({
						background: "#ffffff",
						text: "#000000",
						bidsBuys: "#00ff48",
						asksSells: "#ff0026",
						bidsBuysS: "#71e805",
						asksSellsS: "#ff0088",
						priceColor: "#5252ff"
					}))
				})), (0, x.useEffect)((function() {
					return function() {
						r.feedsManager && (r.feedsManager.stop(), r.feedsManager.disconnectAll())
					}
				}), []), (0, x.useEffect)((function() {
					return M.coinConfig = d, (0, Q.j)("page/app", {
							market: m,
							variation: "Beta X",
							isAnonymous: !o,
							plan: o ? o.get().plan : "free"
						}),
						function() {
							return M.removeListeners()
						}
				}), [d]);
				var O = {
						grouping: S,
						levels: 200,
						depthLevels: 20,
						isRealtime: !1
					},
					P = {
						tradesThresholdDerivatives: 1e5,
						tradesThresholdSpot: 5e4,
						liquidationThreshold: 25e4
					},
					T = p.reduce((function(e, t) {
						return e.length && e[e.length - 1].exchangeName === t.exchange ? e[e.length - 1].markets.push(t) : e.push({
							exchangeName: t.exchange,
							markets: [t]
						}), e
					}), []),
					M = new J(T, d, d.coin, O, P, {
						lockOrderflow: !0,
						lastPriceAlign: !1,
						showOrderBooks: !0,
						showVolumeHistogram: !0,
						showTradesAndLiquidations: !0,
						tradesMode: "minimal",
						tradesTheme: "default",
						heatmapMode: "individual",
						levelVolumeRenderingMode: "heatmap",
						customTheme: {
							background: "#ffffff",
							text: "#000000",
							bidsBuys: "#00ff48",
							asksSells: "#ff0026",
							bidsBuysS: "#71e805",
							asksSellsS: "#ff0088",
							priceColor: "#5252ff"
						}
					}, o, !0);
				r.feedsManager.start(M.configState.get(), M.coinConfig, M.snapshotConfig.get(), M.feedsConfig.get(), M.uiConfig.get(), M.onMessage, !o || "free" === o.get().plan, k, (function(e, t) {
					return M.connectionState.lens(e).set(t)
				})), M.configState.subscribe(r.feedsManager.handleConfigChange), M.snapshotConfig.subscribe(r.feedsManager.snapshotConfigUpdate), M.feedsConfig.subscribe(r.feedsManager.feedsConfigUpdate), M.uiConfig.subscribe(r.feedsManager.uiConfigUpdate), M.online.pipe((0, b.T)(1)).subscribe((function() {
					!!navigator.onLine ? r.feedsManager.online() : r.feedsManager.offline()
				}));
				var A = c.h.create(!o || M.configState.get().length < 3),
					Z = M.configState.view((function(e) {
						return e[0]
					})),
					D = c.h.combine(M._lazySnapshots.atom, Z, (function(e, t) {
						var n = M._lazySnapshots.value;
						if (!t) return null;
						var r = t.exchange,
							i = n.snapshots[r];
						if (!i) return null;
						var o = Y(t, d),
							a = o.symbol,
							s = o.quote,
							l = i[a];
						return l && l.extra && l.extra.lastPrice ? {
							exchange: r,
							symbol: a,
							lastPrice: l.extra.lastPrice,
							quote: s
						} : null
					})),
					L = D.view((function(e) {
						return e ? _a(e.lastPrice, 10) : ""
					})),
					I = {
						usd: "$",
						usdt: "$",
						busd: "$",
						tusd: "$",
						usdc: "$",
						eur: "\u20ac",
						gbp: "\xa3"
					};
				Gn(D.pipe((0, y.b)((function(e) {
					try {
						document.title = e ? "".concat(I[e.quote.toLowerCase()] || "").concat(_a(e.lastPrice, S), " ").concat(d.name, " (").concat((0, h.capitalize)(e.exchange), ")") : d.name + " combined orderbooks, trades and liquidations info | okotoki"
					} catch (t) {}
				}))));
				var R = function() {
						var e = (0, i.Z)(l().mark((function e() {
							return l().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return r.feedsManager.disconnectAll(), e.next = 3, r.logout();
									case 3:
										g.push("/signin");
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					F = c.h.create(0),
					E = c.h.create(void 0);
				"popup" === w && "customTheme" === localStorage.getItem("okotoki-theme") && (0, j.ji)(c.h.create({
					background: "#ffffff",
					text: "#000000",
					bidsBuys: "#00ff48",
					asksSells: "#ff0026",
					bidsBuysS: "#71e805",
					asksSellsS: "#ff0088",
					priceColor: "#5252ff"
				}));
				var B = x.useRef(null),
					N = "popup" === w;
				return (0, $.jsx)(ba, {
					scrolled: _,
					isPopup: N,
					header: o ? (0, $.jsx)(Nr, {
						api: r,
						lastPrice: L,
						logout: R,
						user: o,
						theme: a,
						globalSupportedCoins: f,
						activeCoinConfig: d,
						isPopup: N
					}) : (0, $.jsx)(Vr, {
						activeCoinConfig: d,
						isPopup: N,
						globalSupportedCoins: f
					}),
					extra: (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsx)($e, {
							state: M.online
						}), (0, $.jsx)(u.F.Fragment, {
							children: F.view((function(e) {
								return e ? (0, $.jsx)(et, {
									state: E
								}) : null
							}))
						}), (0, $.jsx)(ie, {
							user: o,
							setLastSeen: r.setLastSeen,
							latestUpdate: s,
							appState: M
						}), (0, $.jsx)(u.F.Fragment, {
							children: o && A.view((function(e) {
								return e ? (0, $.jsx)(Je, {
									isX: !0,
									theme: a,
									uiConfig: M.uiConfig,
									defaultFeedsConfig: P,
									feedsConfig: M.feedsConfig,
									defaultSnapshotConfig: O,
									snapshotConfig: M.snapshotConfig,
									currentConfig: M.configState,
									coin: d.name,
									coinConfig: d,
									user: o,
									isPopup: N,
									onCloseClick: function() {
										return A.set(!1)
									}
								}) : (0, $.jsx)("div", {
									className: ya.showConfigrationSwitcher,
									onClick: function() {
										return A.modify((function(e) {
											return !e
										}))
									},
									children: "Configuration"
								})
							}))
						})]
					}),
					tradesFeedMode: M.uiConfig.lens("tradesMode"),
					showTradesFeeds: M.uiConfig.lens("showTradesAndLiquidations").view((function(e) {
						return e || N
					})),
					showOrderBooks: M.uiConfig.lens("showOrderBooks"),
					tradesFeed: (0, $.jsx)(ca, {
						trades: M.trades,
						liquidations: M.liquidations,
						feedMode: M.uiConfig.lens("tradesMode"),
						feedTheme: M.uiConfig.lens("tradesTheme"),
						soundVersion: F,
						soundContextState: E,
						isPopup: N,
						isTradesShown: M.uiConfig.lens("showTradesAndLiquidations")
					}),
					orderBooks: (0, $.jsx)(Qo, {
						api: r,
						snapshotConfig: M.snapshotConfig,
						snapshots: M._lazySnapshots,
						connection: M.connectionState,
						activeMarkets: M.configState,
						theme: a,
						coinConfig: d,
						levelVolumeRenderingMode: M.uiConfig.lens("levelVolumeRenderingMode"),
						heatmapMode: M.uiConfig.lens("heatmapMode"),
						customThemes: M.uiConfig.lens("customTheme"),
						isFreeUser: !o || "free" === o.get().plan,
						scrolled: _,
						scrollbox: B,
						showVolumeHistogram: M.uiConfig.lens("showVolumeHistogram"),
						lock: M.uiConfig.lens("lockOrderflow"),
						lastPriceAlign: M.uiConfig.lens("lastPriceAlign")
					})
				})
			};

			function ja(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ca(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ja(Object(n), !0).forEach((function(t) {
						(0, r.Z)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ka = a();
			var Sa = function(e) {
					var t, n, r = e.api,
						o = e.user,
						a = e.theme,
						s = e.latestUpdate,
						f = e.coinConfig,
						g = e.globalSupportedCoins,
						p = (0, v.useRouter)(),
						w = f.markets,
						C = f.coin,
						k = c.h.create(0),
						S = null === (t = p.query) || void 0 === t ? void 0 : t.mode,
						O = null === (n = p.query) || void 0 === n ? void 0 : n.env,
						P = H.r8 ? Wn.dev : Wn.prod;
					O && ["dev", "local", "stage", "prod"].includes(O) && (P = O);
					var T = w[0].defaultGrouping;
					(0, j.ji)(c.h.create({
						background: "#ffffff",
						text: "#000000",
						bidsBuys: "#00ff48",
						asksSells: "#ff0026",
						bidsBuysS: "#71e805",
						asksSellsS: "#ff0088",
						priceColor: "#5252ff"
					})), (0, x.useEffect)((function() {
						return function() {
							r.feedsManager && (r.feedsManager.stop(), r.feedsManager.disconnectAll())
						}
					}), []), (0, x.useEffect)((function() {
						return D.coinConfig = f, (0, Q.j)("page/app", {
								market: C,
								isAnonymous: !o,
								plan: o ? o.get().plan : "free"
							}),
							function() {
								return D.removeListeners()
							}
					}), [f]);
					var M = {
							grouping: T,
							levels: 200,
							depthLevels: 20,
							isRealtime: !1
						},
						A = {
							tradesThresholdDerivatives: 1e5,
							tradesThresholdSpot: 5e4,
							liquidationThreshold: 25e4
						},
						Z = w.reduce((function(e, t) {
							return e.length && e[e.length - 1].exchangeName === t.exchange ? e[e.length - 1].markets.push(t) : e.push({
								exchangeName: t.exchange,
								markets: [t]
							}), e
						}), []),
						D = new J(Z, f, f.coin, M, A, {
							lockOrderflow: !0,
							lastPriceAlign: !1,
							showOrderBooks: !0,
							showVolumeHistogram: !0,
							showTradesAndLiquidations: !0,
							tradesMode: "minimal",
							tradesTheme: "default",
							heatmapMode: "individual",
							levelVolumeRenderingMode: "heatmap",
							customTheme: {
								background: "#ffffff",
								text: "#000000",
								bidsBuys: "#00ff48",
								asksSells: "#ff0026",
								bidsBuysS: "#71e805",
								asksSellsS: "#ff0088",
								priceColor: "#5252ff"
							}
						}, o, !1);
					r.feedsManager.start(D.configState.get(), D.coinConfig, D.snapshotConfig.get(), D.feedsConfig.get(), D.uiConfig.get(), D.onMessage, !o || "free" === o.get().plan, P, (function(e, t) {
						return D.connectionState.lens(e).set(t)
					})), D.configState.subscribe(r.feedsManager.handleConfigChange), D.snapshotConfig.subscribe(r.feedsManager.snapshotConfigUpdate), D.feedsConfig.subscribe(r.feedsManager.feedsConfigUpdate), D.uiConfig.subscribe(r.feedsManager.uiConfigUpdate), D.online.pipe((0, b.T)(1)).subscribe((function() {
						!!navigator.onLine ? r.feedsManager.online() : r.feedsManager.offline()
					}));
					var L = c.h.create(!o || D.configState.get().length < 3),
						I = D.configState.view((function(e) {
							return e[0]
						})),
						R = c.h.combine(D._snapshots, I, (function(e, t) {
							if (!t) return null;
							var n = t.exchange,
								r = e.snapshots[n];
							if (!r) return null;
							var i = Y(t, f),
								o = i.symbol,
								a = i.quote,
								s = r[o];
							return s && s.extra && s.extra.lastPrice ? {
								exchange: n,
								symbol: o,
								lastPrice: s.extra.lastPrice,
								quote: a
							} : null
						})),
						F = {
							usd: "$",
							usdt: "$",
							busd: "$",
							tusd: "$",
							usdc: "$",
							eur: "\u20ac",
							gbp: "\xa3"
						};
					Gn(R.pipe((0, y.b)((function(e) {
						try {
							document.title = e ? "".concat(F[e.quote.toLowerCase()] || "").concat(function(e, t) {
								var n = {
										trimMantissa: !1,
										thousandSeparated: !0,
										mantissa: 0
									},
									r = t.toPrecision();
								if (r.includes(".")) {
									var i = r.split(".")[1].length;
									n.mantissa = i
								}
								return m()(e).format(n)
							}(e.lastPrice, T), " ").concat(f.name, " (").concat((0, h.capitalize)(e.exchange), ")") : f.name + " combined orderbooks, trades and liquidations info | okotoki"
						} catch (t) {}
					}))));
					var E = function() {
							var e = (0, i.Z)(l().mark((function e() {
								return l().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return r.feedsManager.disconnectAll(), e.next = 3, r.logout();
										case 3:
											p.push("/signin");
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						B = c.h.create(0),
						N = c.h.create(void 0);
					return "popup" === S && "customTheme" === localStorage.getItem("okotoki-theme") && (0, j.ji)(c.h.create({
						background: "#ffffff",
						text: "#000000",
						bidsBuys: "#00ff48",
						asksSells: "#ff0026",
						bidsBuysS: "#71e805",
						asksSellsS: "#ff0088",
						priceColor: "#5252ff"
					})), (0, $.jsx)($.Fragment, {
						children: (0, $.jsxs)("div", {
							className: ka.container,
							style: "popup" === S ? {
								overflow: "hidden"
							} : void 0,
							children: [(0, $.jsx)("nav", {
								children: o ? (0, $.jsx)(_.u, {
									api: r,
									logout: E,
									user: o,
									theme: a,
									globalSupportedCoins: g,
									activeCoinConfig: f,
									isPopup: "popup" === S
								}) : (0, $.jsx)(_.t, {
									activeCoinConfig: f,
									isPopup: "popup" === S,
									globalSupportedCoins: g
								})
							}), (0, $.jsx)("main", {
								style: "popup" === S ? {
									paddingLeft: "0",
									display: "block"
								} : void 0,
								children: "popup" !== S ? (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsx)($e, {
										state: D.online
									}), (0, $.jsx)(u.F.Fragment, {
										children: B.view((function(e) {
											return e ? (0, $.jsx)(et, {
												state: N
											}) : null
										}))
									}), (0, $.jsx)(u.F.div, {
										className: ka.left,
										onScroll: function(e) {
											return k.set(e.currentTarget.scrollLeft)
										},
										children: D.uiConfig.lens("showOrderBooks").view((function(e) {
											return e ? (0, $.jsx)(xn, {
												snapshotConfig: D.snapshotConfig,
												snapshots: D._snapshots,
												connection: D.connectionState,
												activeMarkets: D.configState,
												theme: a,
												coinConfig: f,
												levelVolumeRenderingMode: D.uiConfig.lens("levelVolumeRenderingMode"),
												heatmapMode: D.uiConfig.lens("heatmapMode"),
												customThemes: D.uiConfig.lens("customTheme"),
												isFreeUser: !o || "free" === o.get().plan,
												scrolled: k
											}) : null
										}))
									}), (0, $.jsx)(u.F.Fragment, {
										children: D.uiConfig.lens("showTradesAndLiquidations").view((function(e) {
											return e ? (0, $.jsx)(u.F.div, Ca(Ca({}, (0, d.Sh)(ka.right, D.uiConfig.lens("tradesMode").view((function(e) {
												return "extended" === e && ka.extendedVersion
											})))), {}, {
												children: (0, $.jsx)(En, {
													trades: D.trades,
													liquidations: D.liquidations,
													feedMode: D.uiConfig.lens("tradesMode"),
													feedTheme: D.uiConfig.lens("tradesTheme"),
													soundVersion: B,
													soundContextState: N,
													isPopup: !1,
													isTradesShown: D.uiConfig.lens("showTradesAndLiquidations")
												})
											})) : null
										}))
									}), (0, $.jsx)(u.F.Fragment, {
										children: L.view((function(e) {
											return e ? (0, $.jsx)(Je, {
												isX: !1,
												theme: a,
												uiConfig: D.uiConfig,
												defaultFeedsConfig: A,
												feedsConfig: D.feedsConfig,
												defaultSnapshotConfig: M,
												snapshotConfig: D.snapshotConfig,
												currentConfig: D.configState,
												coin: f.name,
												coinConfig: f,
												user: o,
												isPopup: !1,
												onCloseClick: function() {
													return L.set(!1)
												}
											}) : (0, $.jsx)("div", {
												className: ka.showConfigrationSwitcher,
												onClick: function() {
													return L.modify((function(e) {
														return !e
													}))
												},
												children: "Configuration"
											})
										}))
									}), (0, $.jsx)(ie, {
										user: o,
										setLastSeen: r.setLastSeen,
										latestUpdate: s,
										appState: D
									})]
								}) : (0, $.jsxs)($.Fragment, {
									children: [(0, $.jsx)(u.F.Fragment, {
										children: B.view((function(e) {
											return e ? (0, $.jsx)(et, {
												state: N
											}) : null
										}))
									}), (0, $.jsx)(u.F.div, Ca(Ca({}, (0, d.Sh)(ka.right, D.uiConfig.lens("tradesMode").view((function(e) {
										return "extended" === e && ka.extendedVersion
									})))), {}, {
										children: (0, $.jsx)(En, {
											trades: D.trades,
											liquidations: D.liquidations,
											feedMode: D.uiConfig.lens("tradesMode"),
											feedTheme: D.uiConfig.lens("tradesTheme"),
											soundVersion: B,
											soundContextState: N,
											isPopup: !0,
											isTradesShown: D.uiConfig.lens("showTradesAndLiquidations")
										})
									})), (0, $.jsx)(u.F.Fragment, {
										children: o && L.view((function(e) {
											return e ? (0, $.jsx)(Je, {
												theme: a,
												uiConfig: D.uiConfig,
												defaultFeedsConfig: A,
												feedsConfig: D.feedsConfig,
												defaultSnapshotConfig: M,
												snapshotConfig: D.snapshotConfig,
												currentConfig: D.configState,
												coin: f.name,
												coinConfig: f,
												user: o,
												isPopup: !0,
												onCloseClick: function() {
													return L.set(!1)
												},
												isX: !1
											}) : (0, $.jsx)("div", {
												className: ka.showConfigrationSwitcher,
												onClick: function() {
													return L.modify((function(e) {
														return !e
													}))
												},
												children: "Configuration"
											})
										}))
									})]
								})
							})]
						})
					})
				},
				Oa = function(e) {
					var t = (0, v.useRouter)(),
						n = t.pathname,
						r = e.api,
						i = e.state,
						o = e.latestUpdate,
						a = e.coin,
						s = e.coinConfig,
						l = e.globalSupportedCoins,
						c = (0, x.useState)(!1),
						u = c[0],
						d = c[1];
					if ((0, x.useEffect)((function() {
							return d(!0)
						}), []), !s) return t.push("/404"), null;
					var h = function() {
						return (0, $.jsx)(g.PB, Ca({}, s ? (0, zn.W)(a ? "/app/".concat(a.toString().toLowerCase()) : n, "".concat(s.name, " orderbooks, trades and liquidations info | okotoki"), "Visualized liquidity for ".concat(s.name, " markets. Combined orderbooks, trades and liquidations for exchanges that matter.")) : (0, zn.W)(n)))
					};
					if (!u) return (0, $.jsx)(h, {});
					var f = Boolean(localStorage.getItem("isX")) ? wa : Sa;
					return (0, $.jsxs)($.Fragment, {
						children: [(0, $.jsx)(h, {}), (0, $.jsx)(w.x, {
							authReadyObserver: (0, E.TF)(i),
							onReady: function(e) {
								return (0, $.jsx)(f, {
									latestUpdate: o,
									user: null !== e ? i.lens("user") : null,
									api: r,
									theme: i.lens("theme"),
									coinConfig: s,
									globalSupportedCoins: l
								})
							}
						})]
					})
				}
		},
		3346: function(e) {
			e.exports = {
				popup: "_dialog_popup__3UijL",
				manageCryptoModal: "_dialog_manageCryptoModal__QmH9H",
				contactUs: "_dialog_contactUs__85v88",
				pro: "_dialog_pro__lr_co",
				menuItem: "_dialog_menuItem___e6_R",
				feedbackModal: "_dialog_feedbackModal__4EIyG",
				profile: "_dialog_profile__bclFA",
				menuShown: "_dialog_menuShown__iiJ9d",
				large: "_dialog_large__28xPa",
				popupBackdrop: "_dialog_popupBackdrop__vOmqS"
			}
		},
		7289: function(e) {
			e.exports = {
				emotion: "_feedback_emotion__2GL7T",
				active: "_feedback_active__aaID7",
				buttons: "_feedback_buttons__MsGet",
				textarea: "_feedback_textarea__C6Rzr",
				submit: "_feedback_submit__245QQ",
				wrap: "_feedback_wrap__mWRYi",
				result: "_feedback_result__R6j7W"
			}
		},
		2205: function(e) {
			e.exports = {
				headerWrap: "appHeaderX_headerWrap__BSSxL",
				logo: "appHeaderX_logo__3Z32J",
				right: "appHeaderX_right__iO0bk",
				upgradeToProHook: "appHeaderX_upgradeToProHook__a3RjM",
				signin: "appHeaderX_signin__CJUgA",
				signup: "appHeaderX_signup__wbhC7",
				createAnAccount: "appHeaderX_createAnAccount__22uh1"
			}
		},
		5134: function(e) {
			e.exports = {
				coinSearchWrap: "_marketsSelector_coinSearchWrap__1In4z",
				searchMarkets: "_marketsSelector_searchMarkets__39KDh",
				marketsSelector: "_marketsSelector_marketsSelector__L4Hat",
				favoritesMarkets: "_marketsSelector_favoritesMarkets__T1ZbL",
				marketLink: "_marketsSelector_marketLink__tCo8x",
				activeItem: "_marketsSelector_activeItem__bYrS8"
			}
		},
		260: function(e) {
			e.exports = {
				wrap: "_menu_wrap__HFFuV",
				item: "_menu_item__wndx6",
				header: "_menu_header__kHrvp",
				free: "_menu_free__j6jPe",
				pro: "_menu_pro__42nYG",
				sub: "_menu_sub__oHr71",
				upgrade: "_menu_upgrade__u_v06",
				updatesItemWrap: "_menu_updatesItemWrap__bY7Ga",
				zen: "_menu_zen__k8drj",
				unreadUpdates: "_menu_unreadUpdates__ZqGlM",
				manageCryptoModal: "_menu_manageCryptoModal__9_AnZ",
				contactUs: "_menu_contactUs__hjk_x",
				updatesModal: "_menu_updatesModal__C6UrC",
				themeSelector: "_menu_themeSelector__pbhCV"
			}
		},
		6186: function(e) {
			e.exports = {
				logo: "logoX_logo__TLC8t",
				icon: "logoX_icon__v37Vy",
				eye: "logoX_eye__g4JSe",
				text: "logoX_text__1lh1z",
				openEyes: "logoX_openEyes__s3CO0",
				openEye: "logoX_openEye__snzJF",
				eyeLid: "logoX_eyeLid__EL3Zd",
				blinking: "logoX_blinking__mMsSN",
				blink: "logoX_blink__XgGd8",
				lidBlink: "logoX_lidBlink___upaf"
			}
		},
		3236: function(e) {
			e.exports = {
				switcher: "switcher_switcher__sA6lk",
				thumbler: "switcher_thumbler__j7K4s",
				active: "switcher_active__HGHAG"
			}
		},
		6976: function(e) {
			e.exports = {
				popup: "_updateItemPopup_popup___RhRU",
				popupBackdrop: "_updateItemPopup_popupBackdrop__WgeQm",
				container: "_updateItemPopup_container__taHdt",
				header: "_updateItemPopup_header__TkfnH",
				closeBtn: "_updateItemPopup_closeBtn__R7Ya_",
				updateItem: "_updateItemPopup_updateItem__ceoYf",
				title: "_updateItemPopup_title__AWRX7",
				date: "_updateItemPopup_date__oHJX7",
				content: "_updateItemPopup_content__5_95_"
			}
		},
		1504: function(e) {
			e.exports = {
				sectionHeader: "_advancedConfig_sectionHeader__jOeOG",
				right: "_advancedConfig_right__axDQC",
				revert: "_advancedConfig_revert__ZVkBd",
				inputField: "_advancedConfig_inputField__RbEJ3",
				inputFieldLarge: "_advancedConfig_inputFieldLarge__AM_c5",
				themeSelector: "_advancedConfig_themeSelector__xuIhf",
				upgradeHook: "_advancedConfig_upgradeHook__BkmVL",
				shakeAnimation: "_advancedConfig_shakeAnimation__5_1IU",
				shake: "_advancedConfig_shake__HHCUl",
				disabled: "_advancedConfig_disabled__eTcTj"
			}
		},
		4894: function(e) {
			e.exports = {
				configuration: "_configDialog_configuration__52MOW",
				header: "_configDialog_header__bT5Zw",
				closeBtn: "_configDialog_closeBtn__q9mJH",
				hook: "_configDialog_hook__NlDtH",
				contentWrap: "_configDialog_contentWrap__folKV",
				advancedConfigWrap: "_configDialog_advancedConfigWrap__YUxpj",
				advancedConfig: "_configDialog_advancedConfig__5pZUF",
				marketsSelector: "_configDialog_marketsSelector__NjLVJ",
				anonymous: "_configDialog_anonymous__sDwOt",
				anonymousHook: "_configDialog_anonymousHook__Sr0J9",
				right: "_configDialog_right__N_3im",
				signin: "_configDialog_signin__GlN4d",
				signup: "_configDialog_signup__PBEKn",
				popup: "_configDialog_popup__3qKpQ"
			}
		},
		6351: function(e) {
			e.exports = {
				item: "_item_item__ov7d2",
				input: "_item_input__c06sF",
				label: "_item_label__LjLXL",
				showPro: "_item_showPro__uNVU7",
				newFeature: "_item_newFeature__n00Nm"
			}
		},
		6913: function(e) {
			e.exports = {
				wrap: "_marketsSelector_wrap__3G6NK",
				hook: "_marketsSelector_hook__IHGLb",
				row: "_marketsSelector_row__Vvgly",
				exchange: "_marketsSelector_exchange__2ii9l",
				markets: "_marketsSelector_markets__x_anZ",
				item: "_marketsSelector_item__SWUE9",
				active: "_marketsSelector_active___UmBM",
				locked: "_marketsSelector_locked__du3JG"
			}
		},
		3535: function(e) {
			e.exports = {
				hookContent: "_registrationHook_hookContent__bV_nc",
				title: "_registrationHook_title__MB_4W",
				description: "_registrationHook_description__mXBJJ",
				or: "_registrationHook_or__Mh1zL"
			}
		},
		7589: function(e) {
			e.exports = {
				shadow: "notifications_shadow__gr_GT",
				notification: "notifications_notification___Pfcr"
			}
		},
		7417: function(e) {
			e.exports = {
				aggregatedMarketsSelector: "_aggregatedMarketsSelector_aggregatedMarketsSelector__u75o_",
				header: "_aggregatedMarketsSelector_header__Kr4rz",
				closeBtn: "_aggregatedMarketsSelector_closeBtn__fdSSL",
				badgesBlock: "_aggregatedMarketsSelector_badgesBlock__LJ8UO",
				exchangeIcon: "_aggregatedMarketsSelector_exchangeIcon__iKq1i",
				badge: "_aggregatedMarketsSelector_badge__RSCH5",
				aggregatedMarketSearch: "_aggregatedMarketsSelector_aggregatedMarketSearch__uFfOC",
				marketName: "_aggregatedMarketsSelector_marketName__HB6Vx",
				aggregatedCreator: "_aggregatedMarketsSelector_aggregatedCreator__Zr_Dm",
				markets: "_aggregatedMarketsSelector_markets__ujuIf",
				disabled: "_aggregatedMarketsSelector_disabled__beFJ4",
				activeMarket: "_aggregatedMarketsSelector_activeMarket__7Xt3t",
				addMarket: "_aggregatedMarketsSelector_addMarket___rw2u"
			}
		},
		510: function(e) {
			e.exports = {
				orderflowChart: "_chart_orderflowChart__wNMvH",
				noSelect: "_chart_noSelect__aw0Ud"
			}
		},
		4434: function(e) {
			e.exports = {
				negative: "_funding-stats_negative__Rm4Hd",
				positive: "_funding-stats_positive__LTMN1",
				symbol: "_funding-stats_symbol__Gk6lL"
			}
		},
		370: function(e) {
			e.exports = {
				cell: "_header_cell__ToDTD",
				link: "_header_link__opszY",
				marketName: "_header_marketName__ZeziB",
				funding: "_header_funding__biLG4",
				created: "_header_created__hDYTl",
				connecting: "_header_connecting__hfLRM",
				connected: "_header_connected__hvt6w",
				disconnected: "_header_disconnected__zqiFq",
				bounceAndHide: "_header_bounceAndHide__rHNsY",
				hide: "_header_hide__2HVic",
				dragActivator: "_header_dragActivator__LWgS3",
				dragAndDropIcon: "_header_dragAndDropIcon__lVrLE",
				aggregatedLinks: "_header_aggregatedLinks__LQSxg",
				aggregatedLinksBlock: "_header_aggregatedLinksBlock__8djVD",
				aggregatedLinkWrap: "_header_aggregatedLinkWrap__7q7h9",
				aggregatedCreator: "_header_aggregatedCreator__M0v5G",
				aggregatedExchange: "_header_aggregatedExchange__uV5WR",
				exchangeIcon: "_header_exchangeIcon__tyZ54",
				aggregatedSymbol: "_header_aggregatedSymbol__0XK9l"
			}
		},
		3710: function(e) {
			e.exports = {
				wrap: "_headerX_wrap__YGvSy",
				cell: "_headerX_cell__hVbvs",
				marketName: "_headerX_marketName__TtN6d",
				aggregated: "_headerX_aggregated__DUBRp",
				icon: "_headerX_icon___bJr6",
				dragActivator: "_headerX_dragActivator__p8Ghr",
				dragAndDropIcon: "_headerX_dragAndDropIcon__miWSj",
				aggregatedCreator: "_headerX_aggregatedCreator___345C",
				aggregationIcon: "_headerX_aggregationIcon___yW3a",
				controlsRow: "_headerX_controlsRow__YjhDV"
			}
		},
		1006: function(e) {
			e.exports = {
				tradesDeltaWrapper: "orderflow_tradesDeltaWrapper__YN4I1",
				row: "orderflow_row__hcqbQ",
				column: "orderflow_column__zdid2",
				cell: "orderflow_cell__xy3mT",
				orderBookWrap: "orderflow_orderBookWrap__tlmT_",
				orderbook: "orderflow_orderbook__F7AIz",
				asks: "orderflow_asks__wBW2R",
				bids: "orderflow_bids__Mcjfj",
				price: "orderflow_price__F1qDE",
				tradesDelta: "orderflow_tradesDelta__ScrI2",
				depthLevels: "orderflow_depthLevels__6G9m0",
				orderbookBids: "orderflow_orderbookBids__Mg5pl",
				orderbookAsks: "orderflow_orderbookAsks__iZ60Z",
				dragLine: "orderflow_dragLine__Eqf1J",
				dragBlock: "orderflow_dragBlock__5_4eu"
			}
		},
		7835: function(e) {
			e.exports = {
				price: "_price_price__O0QMv",
				delta: "_price_delta__o8O03",
				negative: "_price_negative__Ajbr1",
				symbol: "_price_symbol__I0YwE"
			}
		},
		5259: function(e) {
			e.exports = {
				wrap: "_trading-delta_wrap__M_bup",
				delta: "_trading-delta_delta__BEnUW",
				opaque: "_trading-delta_opaque__IfcaR",
				title: "_trading-delta_title__QJiRN",
				tf: "_trading-delta_tf__D0zmw",
				buyAmount: "_trading-delta_buyAmount__6kacz",
				sellAmount: "_trading-delta_sellAmount__HcO9U",
				tradesDistro: "_trading-delta_tradesDistro__4LhFz",
				buySide: "_trading-delta_buySide__yXryW"
			}
		},
		9147: function(e) {
			e.exports = {
				aggregatedLinks: "_aggregatedLinks_aggregatedLinks__nh_y_",
				aggregatedLinkWrap: "_aggregatedLinks_aggregatedLinkWrap__nOQa5",
				aggregatedExchange: "_aggregatedLinks_aggregatedExchange__p7fOQ",
				exchangeIcon: "_aggregatedLinks_exchangeIcon__sa4Xc",
				aggregatedSymbol: "_aggregatedLinks_aggregatedSymbol__pabzo"
			}
		},
		7426: function(e) {
			e.exports = {
				dragBlock: "_dragAndDrop_dragBlock__1PWsj",
				dragLine: "_dragAndDrop_dragLine__4F8Bq",
				dragImage: "_dragAndDrop_dragImage__rS95z",
				market: "_dragAndDrop_market__pbkql",
				draggedMarketOverlay: "_dragAndDrop_draggedMarketOverlay__UtOwb"
			}
		},
		1668: function(e) {
			e.exports = {
				wrap: "_orderflowLayout_wrap__76Q2y",
				wrapper: "_orderflowLayout_wrapper__Icv33",
				header: "_orderflowLayout_header__0_3jD",
				orderbook: "_orderflowLayout_orderbook__V10n8",
				volumeHistogram: "_orderflowLayout_volumeHistogram__fIi43",
				wrapX: "_orderflowLayout_wrapX__ZfOGd",
				orderBookMenuWrapper: "_orderflowLayout_orderBookMenuWrapper__mQUa0",
				volumeHistogramMenuWrapper: "_orderflowLayout_volumeHistogramMenuWrapper__8nfin"
			}
		},
		1684: function(e) {
			e.exports = {
				wrap: "_widgetWrapper_wrap__d4rwY",
				header: "_widgetWrapper_header__aOnbl",
				menu: "_widgetWrapper_menu__VVDUp",
				menuItem: "_widgetWrapper_menuItem__9HSV6"
			}
		},
		174: function(e) {
			e.exports = {
				item: "_item_item__6B_bQ",
				input: "_item_input___K4l_",
				label: "_item_label__wAW1_",
				showPro: "_item_showPro__KXgl_"
			}
		},
		4425: function(e) {
			e.exports = {
				range: "_range_range__ICRjG"
			}
		},
		4336: function(e) {
			e.exports = {
				switcher: "_switcher_switcher__d3p87",
				thumbler: "_switcher_thumbler__2TyRI",
				active: "_switcher_active__cAfxY"
			}
		},
		478: function(e) {
			e.exports = {
				orderflow3Chart: "_chart_orderflow3Chart__iWF_X",
				noSelect: "_chart_noSelect__zjv7O"
			}
		},
		611: function(e) {
			e.exports = {
				wrap: "trades-feed_wrap__is4as",
				header: "trades-feed_header__G5aUA",
				itemWrap: "trades-feed_itemWrap__CVOEO",
				soundsBlock: "trades-feed_soundsBlock__q9itB",
				popupBlock: "trades-feed_popupBlock__x1OoZ",
				icon: "trades-feed_icon__7wftK"
			}
		},
		5044: function(e) {
			e.exports = {
				item: "_item_item__c3GwF",
				icon: "_item_icon__WBBqw",
				veryBig: "_item_veryBig__6bJ3A",
				exchange: "_item_exchange__lkipb",
				symbol: "_item_symbol__P_BGn",
				tradeTime: "_item_tradeTime__AhsmJ",
				timer: "_item_timer__v04n9",
				buy: "_item_buy__l6ztg",
				extended: "_item_extended__lVOot",
				sell: "_item_sell__SbKqY",
				hidden: "_item_hidden__5LVr4",
				colorize: "_item_colorize__bncgk",
				colorizedIcon: "_item_colorizedIcon__Hx2ys",
				market: "_item_market__eNFJk",
				amount: "_item_amount__AO_sn",
				total: "_item_total__NvLXM",
				price: "_item_price__s_pdW",
				suffix: "_item_suffix__egi09"
			}
		},
		446: function(e) {
			e.exports = {
				wrap: "trades-feedX2_wrap__oDv4v",
				itemWrap: "trades-feedX2_itemWrap__wW5Ck",
				soundsBlock: "trades-feedX2_soundsBlock__kgBf_",
				popupBlock: "trades-feedX2_popupBlock__DmHvN",
				icon: "trades-feedX2_icon__e_SQD"
			}
		},
		4059: function(e) {
			e.exports = {
				item: "_item_item__yjl_g",
				icon: "_item_icon__bDSrx",
				veryBig: "_item_veryBig__mFWqv",
				exchange: "_item_exchange__nLuKM",
				symbol: "_item_symbol__lm2Ej",
				tradeTime: "_item_tradeTime__n51EF",
				timer: "_item_timer__CnJ7e",
				buy: "_item_buy__HduoQ",
				extended: "_item_extended__ykbgo",
				sell: "_item_sell__0qgWa",
				hidden: "_item_hidden__oEPVI",
				colorize: "_item_colorize__TSuow",
				colorizedIcon: "_item_colorizedIcon__i8CY2",
				market: "_item_market__5ynKB",
				amount: "_item_amount__MoRKx",
				total: "_item_total__LvF9Y",
				price: "_item_price__zLZjw",
				suffix: "_item_suffix__87WkP"
			}
		},
		5842: function(e) {
			e.exports = {
				container: "app_container__jJKSc",
				left: "app_left__NRWeE",
				right: "app_right___PLP9",
				extendedVersion: "app_extendedVersion__0jvcH",
				showConfigrationSwitcher: "app_showConfigrationSwitcher__rFMJe"
			}
		},
		13: function(e) {
			e.exports = {
				showConfigrationSwitcher: "x_showConfigrationSwitcher__kD4nw"
			}
		},
		2601: function(e) {
			e.exports = {
				container: "_layout_container__w6HT_",
				isPopup: "_layout_isPopup__Q30Pg",
				left: "_layout_left__LZI9K",
				right: "_layout_right__ZKuke",
				extendedVersion: "_layout_extendedVersion__EaRuN"
			}
		}
	}
]);
