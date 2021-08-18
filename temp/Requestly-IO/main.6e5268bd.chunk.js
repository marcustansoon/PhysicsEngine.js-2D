(this.webpackJsonprequestly = this.webpackJsonprequestly || []).push([
	[0],
	[, , function(e, t, a) {
		var n = a(136),
			r = a(137),
			l = a(217),
			c = a(218);
		e.exports = {
			CONFIG: n,
			CONSTANTS: r,
			COMPONENTS: {
				LOGGER: l
			},
			RULE_PROCESSOR: c
		}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e) {
		e.exports = JSON.parse('[{"id":"bronze","allowDiscounts":false,"monthly":{"price":{"USD":0,"INR":0,"EUR":0,"GBP":0,"MXN":0,"CAD":0},"planId":null,"days":30},"quarterly":{"price":{"USD":0,"INR":0,"EUR":0,"GBP":0,"MXN":0,"CAD":0},"planId":null,"days":90},"half-yearly":{"price":{"USD":0,"INR":0,"EUR":0,"GBP":0,"MXN":0,"CAD":0},"planId":null,"days":180},"annual":{"price":{"USD":0,"INR":0,"EUR":0,"GBP":0,"MXN":0,"CAD":0},"planId":null,"days":365},"name":"Free"},{"id":"gold","allowDiscounts":true,"popular":true,"monthly":{"price":{"USD":10,"EUR":10,"INR":400,"GBP":10,"MXN":200,"CAD":10},"planId":"gold_1m","days":30},"quarterly":{"price":{"USD":30,"EUR":30,"INR":600,"GBP":30,"MXN":600,"CAD":30},"planId":"gold_3m","days":90},"half-yearly":{"price":{"USD":50,"EUR":50,"INR":1000,"GBP":50,"MXN":1000,"CAD":50},"planId":"gold_6m","days":180},"annual":{"price":{"USD":100,"EUR":100,"INR":4000,"GBP":100,"MXN":2000,"CAD":100},"planId":"gold_12m","days":365},"name":"Gold"},{"id":"enterprise","allowDiscounts":false,"popular":false,"monthly":{"price":{"USD":7,"EUR":7,"INR":300,"GBP":7,"MXN":300,"CAD":7},"planId":"enterprise_1m","days":30},"quarterly":{"price":{"USD":300,"EUR":300,"INR":6000,"GBP":300,"MXN":6000,"CAD":300},"planId":"enterprise_3m","days":90},"half-yearly":{"price":{"USD":500,"EUR":500,"INR":10000,"GBP":500,"MXN":10000,"CAD":500},"planId":"enterprise_6m","days":180},"annual":{"price":{"USD":84,"EUR":84,"INR":3600,"GBP":84,"MXN":3600,"CAD":84},"planId":"enterprise_12m","days":365},"name":"Enterprise"}]')
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e) {
		e.exports = JSON.parse('[{"id":"Users","title":"Number of Users","bronze":{"title":"Single User","enabled":true},"silver":{"title":"Unlimited Users","enabled":false},"gold":{"title":"Single User","enabled":true},"enterprise":{"title":"Minimum 20 Users","enabled":true}},{"id":"rules","title":"Rules","bronze":{"title":"10 Rules","limit":50,"enabled":true},"silver":{"title":"25 Rules (Max 10 Active)","limit":25,"enabled":true},"gold":{"title":"Unlimited Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Rules","limit":10000,"enabled":true}},{"id":"active_rules","title":"Active Rules","bronze":{"title":"3 Active Rules","limit":50,"enabled":true},"silver":{"title":"10 Active Rules","limit":50,"enabled":true},"gold":{"title":"Unlimited Active Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Active Rules","limit":10000,"enabled":true}},{"id":"favourite_rules","title":"Favourite Rules","bronze":{"title":"3 Favourite Rules","limit":3,"enabled":true},"silver":{"title":"10 Favourite Rules","limit":10,"enabled":true},"gold":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true}},{"id":"files","title":"Files","bronze":{"title":"5 Files","limit":50,"enabled":true},"silver":{"title":"10 Files","limit":10,"enabled":true},"gold":{"title":"Unlimited Files","limit":1000,"enabled":true},"enterprise":{"title":"Unlimited Files","limit":1000,"enabled":true}},{"id":"groups","title":"Groups","bronze":{"title":"Unlimited Groups","enabled":true},"silver":{"title":"Unlimited Groups","enabled":true},"gold":{"title":"Unlimited Groups","enabled":true},"enterprise":{"title":"Unlimited Groups","enabled":true}},{"id":"shared_lists","title":"Shared Lists","bronze":{"title":"10 Shared Lists","limit":50,"enabled":true},"silver":{"title":"10 Shared Lists","limit":10,"enabled":true},"gold":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true},"enterprise":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true}},{"id":"rule_pairs","title":"Rule Pairs","bronze":{"title":"3 Rule Pairs","limit":50,"enabled":true},"silver":{"title":"10 Rule Pairs","limit":10,"enabled":true},"gold":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true}},{"id":"RESPONSE_BODY_CHARACTER_LIMIT","title":"AJAX Response Char Limit","showInComparisonTable":false,"bronze":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"silver":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"gold":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"enterprise":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true}},{"id":"export_import","title":"Export & Import Rules","bronze":{"title":"Export Rules","enabled":true},"silver":{"title":"Import & Export Rules","enabled":true},"gold":{"title":"Import & Export Rules","enabled":true},"enterprise":{"title":"Import & Export Rules","enabled":true}},{"id":"Customer Support","title":"Priority Support","bronze":{"title":"Support","enabled":false},"silver":{"title":"Priority Support","enabled":false},"gold":{"title":"Priority Support (Email & Chat)","enabled":true},"enterprise":{"title":"Priority Support (Chat & Call)","enabled":true}}]')
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
		if ("undefined" === typeof a) var a = !0;
		var n = {
			browser: "chrome",
			storageType: "sync",
			contextMenuContexts: ["browser_action"],
			collectExtUsageStats: !0,
			env: "prod",
			WEB_URL: "https://app.requestly.io",
			firebaseConfig: {
				apiKey: "AIzaSyC2WOxTtgKH554wCezEJ4plxnMNXaUSFXY",
				authDomain: "app.requestly.io",
				databaseURL: "https://requestly.firebaseio.com",
				projectId: "project-7820168409702389920",
				storageBucket: "project-7820168409702389920.appspot.com",
				messagingSenderId: "911299702852"
			},
			logLevel: "info",
			stripeConfig: {
				publishableKey: "pk_live_FgVCiLBLJBaVSLulhPWptlDg",
				productIds: {
					enterprisePlan: {
						INR: {
							monthly: "price_1Hs62NIVcpOtHqujisdpsA53",
							quarterly: "price_1Hs62NIVcpOtHqujbIhUiCNO",
							"half-yearly": "price_1Hs62NIVcpOtHqujk2TCvkba",
							annual: "price_1Hs62OIVcpOtHqujuSmvQ0LR"
						},
						USD: {
							monthly: "price_1Hs62NIVcpOtHqujNdJXy1U2",
							quarterly: "price_1Hs62NIVcpOtHqujA6BhjyBc",
							"half-yearly": "price_1Hs62NIVcpOtHqujrfFCxb4I",
							annual: "price_1Hs62NIVcpOtHqujafhBiwBk"
						},
						default: "price_1Hs62NIVcpOtHqujNdJXy1U2"
					}
				}
			},
			version: "21.7.22"
		};
		a ? e.exports = n : window && (window.RQ = window.RQ || {}, window.RQ.configs = n)
	}, function(e, t, a) {
		if ("undefined" === typeof n) var n = !0;
		var r, l = {};
		r = n ? a(136) : window.RQ.configs, l.APP_MODES = {
			DESKTOP: "DESKTOP",
			EXTENSION: "EXTENSION",
			WORDPRESS: "WORDPRESS",
			CLOUDFLARE: "CLOUDFLARE"
		}, l.COMPANY_INFO = {
			SUPPORT_EMAIL: "contact@requestly.io"
		}, l.VERSION = 3, l.ONBOARDING_DAYS_TO_EXPIRE = 7, l.ONBOARDING_TASKS = 5, l.FILE_PICKER_URL = "/library/filepicker", l.VERSIONS = {
			REPLACE_RULE: 2
		}, l.ENV = r.env, l.PUBLIC_NAMESPACE = "__REQUESTLY__", l.RULES_PAGE_URL = r.WEB_URL + "/rules/", l.RULES_PAGE_URL_PATTERN = l.RULES_PAGE_URL + "*", l.PRICING_PAGE_URL = r.WEB_URL + "/pricing/", l.GOODBYE_PAGE_URL = r.WEB_URL + "/goodbye/", l.DELAY_API_URL = r.WEB_URL + "/delay/", l.BLACK_LIST_DOMAINS = ["requestly.in", "requestly.io", "rq.in", "rq.io", "__rq"], l.STRING_CONSTANTS = {
			SLASH: "/"
		}, l.LIMITS = {
			NUMBER_SHARED_LISTS: 10
		}, l.DEFAULTS = {
			APP_INIT_TIMEOUT: 5e3
		}, l.OBJECT_TYPES = {
			GROUP: "group",
			RULE: "rule"
		}, l.RULE_TYPES = {
			REDIRECT: "Redirect",
			CANCEL: "Cancel",
			REPLACE: "Replace",
			HEADERS: "Headers",
			USERAGENT: "UserAgent",
			SCRIPT: "Script",
			QUERYPARAM: "QueryParam",
			RESPONSE: "Response",
			DELAY: "Delay"
		}, l.DELAY_REQUEST_CONSTANTS = {
			DELAY_PARAM_NAME: "delay",
			DELAY_PARAM_VALUE: "true",
			MIN_DELAY_VALUE: 1,
			MAX_DELAY_VALUE_NON_XHR: 1e4,
			MAX_DELAY_VALUE_XHR: 5e3,
			DELAY_TYPE: {
				CLIENT_SIDE: "clientSideDelay",
				SERVER_SIDE: "serverSideDelay"
			},
			REQUEST_TYPE: {
				XHR: "xmlhttprequest"
			},
			METHOD_TYPE: {
				GET: "GET"
			}
		}, l.OBJECT_FORMAT_KEYS = {
			CREATION_DATE: "creationDate",
			NAME: "name",
			ID: "id",
			RULE_TYPE: "ruleType",
			STATUS: "status",
			OBJECT_TYPE: "objectType",
			GROUP_ID: "groupId",
			IS_FAVOURITE: "isFavourite"
		}, l.HEADER_NAMES = {
			USER_AGENT: "User-Agent"
		}, l.GROUP_STATUS = {
			ACTIVE: "Active",
			INACTIVE: "Inactive"
		}, l.RULE_STATUS = {
			ACTIVE: "Active",
			INACTIVE: "Inactive"
		}, l.RULE_KEYS = {
			URL: "Url",
			HOST: "host",
			PATH: "path",
			HEADER: "Header",
			OVERWRITE: "Overwrite",
			IGNORE: "Ignore",
			PARAM: "param",
			VALUE: "value"
		}, l.PATH_FROM_PAIR = {
			RULE_KEYS: "source.key",
			RULE_OPERATORS: "source.operator",
			SCRIPT_LIBRARIES: "libraries",
			SOURCE_PAGE_URL_OPERATOR: "source.filters.pageUrl.operator",
			SOURCE_PAGE_URL_VALUE: "source.filters.pageUrl.value",
			SOURCE_RESOURCE_TYPE: "source.filters.resourceType",
			SOURCE_REQUEST_METHOD: "source.filters.requestMethod"
		}, l.URL_COMPONENTS = {
			PROTOCOL: "Protocol",
			URL: "Url",
			HOST: "host",
			PATH: "path",
			QUERY: "query",
			HASH: "hash"
		}, l.RULE_OPERATORS = {
			EQUALS: "Equals",
			CONTAINS: "Contains",
			MATCHES: "Matches",
			WILDCARD_MATCHES: "Wildcard_Matches"
		}, l.RULE_SOURCE_FILTER_TYPES = {
			PAGE_URL: "pageUrl",
			RESOURCE_TYPE: "resourceType",
			REQUEST_METHOD: "requestMethod"
		}, l.MODIFICATION_TYPES = {
			ADD: "Add",
			REMOVE: "Remove",
			REMOVE_ALL: "Remove All",
			MODIFY: "Modify",
			REPLACE: "Replace"
		}, l.NEED_HELP_QUERY_TYPES = {
			FEEDBACK: "Feedback",
			BUG: "Bug",
			QUESTION: "Question",
			FEATURE_REQUEST: "FeatureRequest"
		}, l.CLIENT_MESSAGES = {
			GET_SCRIPT_RULES: "getScriptRules",
			GET_USER_AGENT_RULE_PAIRS: "getUserAgentRulePairs",
			OVERRIDE_RESPONSE: "overrideResponse",
			NOTIFY_RULES_APPLIED: "notifyRulesApplied"
		}, l.EXTENSION_MESSAGES = {
			FOCUS_TAB: "focusTab",
			GET_FULL_LOGS: "getFullLogs",
			CLEAR_LOGS_FOR_TAB: "clearLogsForTab",
			CLEAR_LOGS_FOR_DOMAIN: "clearLogsForDomain",
			GET_FAVOURITE_RULES: "getFavouriteRules",
			GET_FLAGS: "getFlags"
		}, l.HEADERS_TARGET = {
			REQUEST: "Request",
			RESPONSE: "Response"
		}, l.REQUEST_TYPES = {
			MAIN_FRAME: "mainFrame",
			PAGE_REQUEST: "pageRequest"
		}, l.SCRIPT_TYPES = {
			URL: "url",
			CODE: "code"
		}, l.SCRIPT_CODE_TYPES = {
			JS: "js",
			CSS: "css"
		}, l.SCRIPT_LOAD_TIME = {
			BEFORE_PAGE_LOAD: "beforePageLoad",
			AFTER_PAGE_LOAD: "afterPageLoad"
		}, l.SCRIPT_LIBRARIES = {
			JQUERY: {
				name: "jQuery",
				src: "https://code.jquery.com/jquery-2.2.4.js"
			},
			UNDERSCORE: {
				name: "Underscore",
				src: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"
			}
		}, l.RESPONSE_BODY_TYPES = {
			STATIC: "static",
			CODE: "code"
		}, l.RESPONSE_CODES = {
			NOT_FOUND: 404
		}, l.STORAGE_KEYS = {
			REQUESTLY_SETTINGS: "rq_settings",
			USER_INFO: "user_info",
			LATEST_NOTIFICATION_READ_BY_USER: "latestNotificationReadId"
		}, l.MESSAGES = {
			DELETE_ITEMS_NO_SELECTION_WARNING: "Please select one or more rules to delete.",
			DELETE_ITEMS: "Are you sure you want to delete the selected items?",
			DELETE_GROUP_WITH_RULES_WARNING: "There are some rules contained in this group. Please delete or ungroup them before deleting the group.",
			DELETE_GROUP: "Are you sure you want to delete the group?",
			UNGROUP_ITEMS_NO_SELECTION_WARNING: "Please select one or more rules to ungroup.",
			UNGROUP_ITEMS: "Are you sure you want to ungroup the selected items?",
			SIGN_IN_TO_VIEW_SHARED_LISTS: "Please login to view your Shared Lists.",
			SIGN_IN_TO_CREATE_SHARED_LISTS: "Please login to share the selected rules",
			SIGN_IN_TO_SUBMIT_QUERY: "Please login to contact our support team.",
			ERROR_AUTHENTICATION: "Received some error in authentication. Please try again later!!",
			SHARED_LISTS_LIMIT_REACHED: "You can not create more than" + l.LIMITS.NUMBER_SHARED_LISTS + "shared lists",
			ERROR_TAB_FOCUS: "The tab cannot be focused, as it might have been closed.",
			DEACTIVATE_REQUESTLY_MENU_OPTION: "Deactivate Requestly"
		}, l.RESOURCES = {
			EXTENSION_ICON: "/resources/images/48x48.png",
			EXTENSION_ICON_GREYSCALE: "/resources/images/48x48_greyscale.png",
			EXTENSION_ICON_GREEN: "/resources/images/48x48_green.png"
		}, l.GA_EVENTS = {
			CATEGORIES: {
				RULES: "rules",
				RULE: "rule",
				GROUP: "group",
				USER: "user",
				SHARED_LIST: "shared list",
				RULE_LOGS: "rule logs",
				EXTENSION: "extension",
				IN_APP_NOTIFICATION: "InAppNotification",
				NEED_HELP_FEATURE: "need help feature",
				PRICING: "pricing",
				LICENSE: "license",
				LIBRARY: "library",
				UNLOCK: "unlock",
				REMOTE_RULES: "remoteRules",
				SPONSOR_SIDERAIL: "sponsor_siderail",
				LOGIN: "login",
				SIGNUP: "signup",
				REFERRAL: "referral",
				PAGE_VISITS: "page visits",
				REQUEST_UPGRADE: "request upgrade",
				MARKETPLACE: "marketplace",
				CHECKOUT: "checkout page",
				TEAMS: "teams page",
				ONBOARDING: "onboarding page",
				RULE_PAIRS: "rule pairs"
			},
			ACTIONS: {
				MODIFIED: "modified",
				CREATED: "created",
				DELETED: "deleted",
				ACTIVATED: "activated",
				DEACTIVATED: "deactivated",
				IMPORTED: "imported",
				EXPORTED: "exported",
				LIMIT_REACHED: "limit reached",
				AUTHENTICATED: "authenticated",
				VIEWED: "viewed",
				CLICKED: "clicked",
				COPIED: "copied",
				MARKED_FAVOURITE: "marked favourite",
				UNMARKED_FAVOURITE: "unmarked favourite",
				WORKFLOW_STARTED: "workflow started",
				ALREADY_LOGIN: "already login",
				LOGIN_REQUESTED: "login requested",
				LOGIN_DONE: "login done",
				LOGIN_REJECTED: "login rejected",
				FORM_SUBMITTED: "form submitted",
				FORM_REJECTED: "form rejected",
				INVALID_SUBMIT: "invalid submit",
				GROUPED: "grouped",
				UNGROUPED: "ungrouped",
				SHARED: "shared",
				ERROR: "error occured",
				TASK_COMPLETED: "task completed",
				BACKUP_CREATED: "backup created",
				BACKUP_USED: "backup used",
				CARD_ERROR: "card error",
				CARD_ACCEPTED: "card accepted",
				CARD_ENTERED: "card num and cv entered",
				CURRENCY_CHANGE: "currency_changed",
				DURATION_CHANGE: "duration_changed",
				APPLIED_SUCCESSFULLY: "applied_successfully",
				APPLIED_UNSUCCESSFULLY: "applied_unsuccessfully",
				REVOKED: "revoked",
				BOUGHT: "bought",
				UPDATED: "updated",
				REQUEST_ADMIN: "enterprise_plan_requested",
				UNINSTALLED: "uninstalled",
				UNINSTALL_RESPONSE: "uninstall_response",
				ROUTE_VIEWED: "route_viewed",
				EMAIL_LOGIN_PERFORMED: "email_login_performed",
				EMAIL_SIGNUP_PERFORMED: "email_signup_performed",
				GMAIL_LOGIN_PERFORMED: "gmail_login_performed",
				GMAIL_SIGNUP_PERFORMED: "gmail_signup_performed",
				MICROSOFT_LOGIN_PERFORMED: "microsoft_login_performed",
				APPLE_LOGIN_PERFORMED: "apple_login_performed",
				REFERRAL_APPLIED: "referral_applied",
				REFERRAL_FAILED: "referral_failed",
				EMAIL_VERIFICATION_RESEND: "resend_email_verification",
				EMAIL_VERIFICATION_SUCCESSFUL: "email_verification_successful",
				EMAIL_VERIFICATION_FAILED: "email_verification_failed"
			},
			ATTR: {
				PAYMENT_MODE: "payment_mode",
				PLANNAME: "planname",
				PLAN_DURATION: "plan_duration",
				PLAN_ID: "plan_id",
				PLAN_START_DATE: "plan_startDate",
				PLAN_END_DATE: "plan_endDate",
				COUPON: "coupon",
				COUPON_VALUE: "coupon_value",
				LICENSE: "licensekey",
				COMPANY: "company",
				PROFILE: "profile",
				REMOTE_RULES_ENDPOINT: "remoteRulesEndpoint",
				REMOTE_RULES_FREQUENCY: "remoteRulesFrequency",
				NUM_RULES: "NUM_RULES",
				NUM_ACTIVE_RULES: "NUM_ACTIVE_RULES",
				NUM_GROUPS: "NUM_GROUPS",
				NUM_ACTIVE_GROUPS: "NUM_ACTIVE_GROUPS",
				NUM_SHARED_LISTS: "NUM_SHARED_LISTS",
				SIGNUP_DATE: "SIGNUP_DATE"
			},
			VALUES: {
				PAYPAL: "paypal"
			},
			GA_CUSTOM_DIMENSIONS: {
				USER_ID: "dimension1"
			},
			GA_CUSTOM_METRICS: {
				num_rules: "metric1"
			}
		}, l.USER = {
			AUTHORIZED: "authorized-user",
			UNAUTHORIZED: "unauthorized-user"
		}, l.FIREBASE_NODES = {
			USERS: "users",
			PUBLIC: "public",
			SHARED_LISTS: "sharedLists",
			FEEDBACK: "feedback",
			FILES: "files"
		}, l.DATASTORE = {
			ACTIONS: {
				CHECK_USER_AUTH: "check:userAuthenticated",
				AUTHENTICATE: "authenticate",
				FETCH_USER_DETAILS: "fetchUserDetails",
				GETVALUE: "getValue",
				SETVALUE: "setValue"
			}
		}, l.MESSAGE_HANDLER = {
			ACTIONS: {
				SUBMIT_EVENT: "submitEvent",
				SUBMIT_ATTR: "submitAttr"
			},
			MESSAGE_TYPES: {
				EVENT: "event",
				ATTRIBUTE: "attribute"
			},
			SINKS: {
				CUSTOMERLY: "customerly"
			}
		}, l.getSharedListURL = function(e, t) {
			var a = t.replace(new RegExp(" +|/+", "g"), "-").replace(/-+/g, "-");
			return l.RULES_PAGE_URL + "#sharedList/" + e + "-" + a
		}, l.getSharedListTimestamp = function(e) {
			return e.split("-")[0]
		}, l.fireAjax = function(e, t) {
			return new Promise((function(a, n) {
				var r = new XMLHttpRequest;
				r.open("GET", e, t), r.onreadystatechange = function() {
					4 === this.readyState && (this.status >= 200 && this.status < 400 ? a(JSON.parse(this.responseText)) : n())
				}, r.send()
			}))
		}, n ? e.exports = l : Object.assign(window.RQ, l)
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
		e.exports = a.p + "static/media/google.87be59a1.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/apple.060a28b3.svg"
	}, , , , function(e, t, a) {}, , function(e, t, a) {
		e.exports = a.p + "static/media/404.d84a4e92.svg"
	}, , , , , , function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAABgCAYAAADWzXRhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+JSURBVHgB7Z1dchNJEsczuyXZ3h1ARCyGfZqedyZGPsHYJ8C8TUwMRsQewPgEwAmwD7CBDMTGvmFOgDiBPbsz+4rmacFshGVDBLKk7tzMbsmW5P7Uh9Xd5C9CtqT+VFX9qyqzsqoBFEVRFEVRFEXJCQjKEF/2F61CETflfbdDO0srrQYoSo5Q0Y/Q/n3xHRBY7geEht2GNRW+kicMUIbpC7733izBG2n9QVFygoo+ChW+kjNU9HFQ4Ss5QkUfFxW+khNU9ElQ4Ss5QEWfFBW+knFU9APEFrIKX8kwKvoBCiW4H3tnFb6SUUKDc2i/XO4UW+sI+AMBVSDXyO/DMiRFA3iUjOErehF7t9TaJKKHYwnha0OFr2SIC6KX7qp0W4ci05RoVPhKRhiy6VXwEyA2fhGegaKknLOW3rXfS619FfxklG63dBKTkmrOWnp22D1VwU8GIe2BoqQct1Vyu/VFeAfKBOBBsbOwhivNJihKinFbeizSOigToIJXskNB/hiAd2IfwV5qNgPqkD8sfq1CYlTwSrYoeP/cwJSofRs2wYOl26065JTTfy8+RoRH8Y9QwSvZw1V6+7dFitqx3bFXvlnpHECOoX0od4qLR/H2VsEr2SRW7L0D9DrvghdwBWIKWAWvZJdYokfC3As+Pip4JdvoLLtEqOCV7KOij40KXskHKvpYqOCV/KCij0QFr+QLFf1F6udvVfBK/iiAMkSx07rbKi6uI1B5obNYU8EreUNFP4I3Vt+qeZ9OQVHyhnbvFeUrQ0WvKF8Zl9q9L//0xSoVOhVCKCOSNbqdCBvy+t/LK3VIMeX1o3Lhm0LFRKfC9ea3xPa/fI+AbBo4f9hkHIz7GySNioZdJoPK3c/dg+be9dg+BTm2UOha8j7psbPkxs+fK2A6ldE8R4KmpNW871Xys/inoiVpLp/TlHazINaEGyJ4svB96zGMwa2fjiwqFjYJqcoXi7WyLt9Mk//skW3vfPzH9cgQYMm00tXCJoIj6wIkX72X8ODDi6t3o3b7yy+fVk2EOzF/C1dgUDc69pP3/7zegBjnNgx6dfG8dIBt527YOW7eO34IiE8vbCDc/vDiylbgcRufN4E4zXwq4Bg0Tw1nrVnzF0c/T/gmHsbKd04rx7a3RvP7xs9HFcM0n3JJXYUpQA7cPXx59WyFo5v3Tt74nZsAHx8+v/IEYiDpSGBzmcCKlF2uzA6wYz+Iynf5bWiam1wZrrIUrX65j1tmxmXm3XsqmZyoMTO+h+yLCFWjYO4v3zt5Vq4ehR67cLXwhr3tj/lImSJsJX4hrP/1b1++DTq/FOCb9z89NQ1K8lss+Q38+98tb3yKNV3X/7xckErGw7DjpOfkf0J6uPzLie8CKd49OdtegUdrjFelaJu+576x8fl+6ar5TvIkdr7zfUh+uxXYAPzdq2kJ3r2MQdVY+/G9h5WJPv10RLfs9fKQ75fzfV9EHXas/DYpI156npd7KpozXWB1pqK/VT2yACZbd08SYcEx3gQJ3yvUkz+Ig05b3/l9Lz0VqVTAfQbAeEgBurlxvB9VeYXwI4wJF/LV0e/kPrxKcjL8TDRp9Qxwakkq+ZGTPuqnU++/BVMFf4i7Z7fdWYs8G11M3x5lt8IKoFchWP4nhdU4Fc64ZMSRh5UFu+DfWhqze/KOtPBuT2UqT/fh38CVF4zF+A8cIcRro98VuoWZpJlryoHzGCajXJy60AehqdrqSHaYCWDduHdS9T2Ou/UwJ7Ljveeu6q1fjlZhJlCjVYALvoPSFVPsZAumBlZu3vv0FHICdZ29oc9shozdwg/QYX+I/O/5CxowXd7CFHn/8no9bPk4w2clJrcHwyYlBEKN//596Q+YEfMMzmli216RN7bBtozB4jKMR33byA8yDEmoOsSFM4NiFBoynZ1Rh5Q41rj7Wg09DqFm2PYudHvXKIDlGIY4dIIfhMmVF3ftduM4KOcDyQhKPWovg+yLv4G46xyy6pqbXo79lvOlIZ8dqSAMo4KEP57b7TScF0Q74LOGIztTy2FlxU+InJ9v3z+/9himjLT2hOZqwGa3tf/44mqt/4X4QhCDK0dOj1gOxHGZq+hHPJRSgPaCvKkuFN8eE7hQ7Q4mdhJMpFDnG3toH3x4fuHcDX7V2Rl14OtN7x/rde0eQAphc6B++PzqePeGIb0ixO3DXd+RBLe3IP4fso31U9OpDW788OLaNv/bHj3IHUkRx6o/DR6NibTHp4W09lxu60Hlttfa1/qfEXHTHaPyhRrvX1yrwQxxu/dE4Q9pcLrnNzxreJhrJ3AjXs7DOMQ2DfMYsxPsyfuQysQrqBT4O7iWX5/AqZdJiJzjsO3va9cbkm5BQ4BpJ65t7/YgQ3xEs27lBVf0C9+f3rW55ZHx+MGXA7QlC2Je5kMZHTfAZb7YxcCumocx3Br5wWPYj0M2l0vdiGvkDO6KP5LhVyn0kENc2z6kou/b9gZSsOnntvLj9UyTcNa9X7rdn2QyX7wotwDDkJI5dQy2rbmghQ53cSfr7agJwBkTdg91aZUgAmmxeAz3IKhW7w2l7UHKYLNlVcQZuhNh4/ClX+AKveYzBHqlZfiVzabq8saJG4TCr9eDgTJZRyr6kmPeD3BmWjKmz+WhGnQ8Gs6lmCSpmmXntgJIwUMZSL9CEpBWo1bz5+3iHKwNfRnmkEp0D86vEOBs8htKSwmWFzASAtcMPI5cG/Uwc6HddoIL/fl+XgBLVV43N04aDvcqP15CCzdrpKJnf86TIH9OWGyEODk/1GYXhTfIPIfsytKi9F8SvNJzzFhBB0ihgulTThII4YZKxqcRtAGdy/FPzAq/wBXpASFRUpvU4q4v5//Ju+VfjtYh47j+nMRPgKKGgfbMbfk+cxW9tCj9F4QNv0DPeXZJNeFlOQzziBR6cuy7UpAhGRYa5qu4IctpBk072egHO68vrWxDRoJzWPC7sxhf9fAJhKDpBIRMI1AlrZhkN4K2Hb68vif2KXG+JRW/dIGz3uKLgPm3x2y5qdEblrw0MrByDu2w4B/CGHDCNzGiO04Obl08DpqBvgDE+KYA4bcY7BsIHcKaF3HSzG2ZXG91ML2Wqyrvb/FwFafpnfAotHO4xRebONMOvkNupJY3ju9gRA/W6TqRszunTcpFTwcfxhS8ezTh1uEYDiJE+iPIe882a+y4dRZ8cHQhQDoj8hD3PuyOGZwTQG8YquZOwLLNVf7t9yNmzlkSch1VsaQd6joPsGDuB25n5900IzO/7C9aZpFeBZjK9WJn8a6s+Tjf7r04PLxQ2YCWZT6x6tz614O3YiVqyqQQOosKZKjfqQ+d1emGta7R3vCgbZSeHoW0/lIBSLScRDSG7UtoxK5c04or6BCnHqG9A1PELMKzEN/YarvQchvQeYreDZX0wiUpJApP5oRfro3XLtj1MC+9u6hDBBH7NEdbsU4p1I9QDp9sdDE2/Qya+oSVUCSa0V2cI4Je698I2k6YX39In4IZ9wnJMYlwQHPP0zVNU+HIO3SddMEOH7bxnrmhsZeEjLei64QKuiFYDfIyy3Tc5fsnz8K6r1yg9/yuCWEiCEiD3n1YQcc55nCPYpbI/Tkl6c462zIEFzStVIjqCclSWqDMhNTY9Og4D7hgB02gcOe1l6tHK0lis7lme3pz4zjOEFCTfQcrQ8dGBJp4C2NwoSbcc8AL2DEAf3CX0qLwVipoTFa83RKuGnCYJWmwfO+kztf+1V1nUGanQeAiDnLGxsdaQpuRYJ3TbDXOrpJngz0WWfFlIL364++P+JwHNBDUhF7wU2jvDcmZu8+jd/8Rq9gg+52urECGSI3o3ZlKG8c7IWGcVm8hjS2IiVcA4y1AMeo4EvszLLqqf09ifpx3lwiiIwCD4w3aXNGUHHMzxEbvRcuhd52Ii40zeSNJmjmGsQqDU539u5cyecniO14fvEg41MiOE48qN6pHlcSV6xxJ1Ti9xC6HRrzNcCENP8eRF2gS0s1PfpWdsHgD16xIHtHmD5sQQZM3IpyGCS4BM3G2XcZMsz4JIyz9sc1MOR1nKvpWwgSNVejRtAY/jnrBp83hy2tVhGkIkXbiDD9KRTP59ejgFIOjwsRpOJXCfuGyNLE3Omracp9CoduAaZB0PofvKYLTcibpPCEzFb1rfyeMQw5vXanRMu0hJ5h0A4kmD+RA0wk8h7TO3hBT4tBSD04DbMefNzDu9bzAGnoi/okw38e0ehTcIg+l2SQVltw7VxpbcSMvPRNpzPwYoO3O55jsPEbBDuzas8BeQ8qItK4mxV0RxTEeejPXyPLWBceGOHYOQzJYorgcpE0vookafKO7Lc6goMLci/q6D8lpcqWxG3eK59l1xlmWmSsnhwtBkhll/etxelUwwNZmwRxI4QpLn5Bzy3Bf0uGxJnL+BQm0vwqOO5QYNoohlRThgUzJlRVzki6gMW7ZCr3fZPD17MjoxIE8LLs+E7lHHqlpm/bWNBcNaf+++I4T1QrZpVa63Xowc9HnGRl2Mg13mqjl+QQw1gqnvQci1KUC6HDPJW7Gn12vh+1AU7rqaV9txh1qLJwXRrlv07mwXJoyISr6OXBr45gdkZholhg69lrWw02VdBBX9PoAyyni2uIwJe+7oswIFf2UEeEnmE/e1FZ++nCL90yez9j+bWlfJqGAMoSKfgYMzycPBoGmOuFC8QTPXdyq94kqZhEjh0m/NlT0M0KGlNiDXEXD/k7ELx72s40yhMdDcrNbGOTrZFjwfSitaxHOjQwsopFtBheTUGaHv+AVP7SlVzKPCj4ZKnol06jgk6OiVzKLCn4EoliRlWrTK5lEBT/Ml98WqxAznFpbeiVzJBN8/IVMs4q7IGbvWXlx0JZeyRTJW3isdP6z9JSc7q7dMVM9RyEpZtEuI5p3iEgmHUW28kTgPt9BY++VzKBd+smwCdaWvm/VVfRKJlDBT0yjdLv1nbxRm15JPSr4yZE1I/rvtaVXUs3pv0rraBivQJmEs1Ze0JZeSTWOYSRd1UcZgpp2B9YGv1HRK6lmsdPag8HJSkoCqNnuOGtLK63G4LcqeiXV4Ao0i53TNRV+Yup2B1e+WelcSDe16ZVMQPtQ7hQX3kDEo5+/bqgpT9zhobknMjQXtJeKXskMEwi/To6z46CRq+CcQeyu3fwz/Lkhj6KO2ldFr2SKMYQ/5LlW1KZXMkZSG7//cFHlHBW9kjmSCN8AnO4z4HOAil7JJOrVHx8VvZJZVPjjoaJXMo0KPzkqeiXzqPCToaJXckGw8PEYlCFU9Epu8BF+w+7QNiiKkn/0GXaKoiiKoiiKonwF/B/7Yz+Qmwwb6AAAAABJRU5ErkJggg=="
	}, , , function(e, t, a) {
		e.exports = a(496)
	}, , , , , function(e, t) {
		if ("undefined" === typeof a) var a = !0;
		var n = {
			enabled: !1,
			ns: "Requestly: ",
			log: function(e) {
				this.enabled && console.log.apply(console, [this.ns].concat(Array.prototype.slice.call(arguments)))
			},
			error: function(e) {
				this.enabled && console.error.apply(console, [this.ns].concat(Array.prototype.slice.call(arguments)))
			}
		};
		a ? e.exports = n : (window.RQ = window.RQ || {}, window.RQ.components = window.RQ.components || {}, window.RQ.components.logger = n)
	}, function(e, t, a) {
		(function(t) {
			var n = a(219),
				r = a(224),
				l = a(225);
			e.exports = function() {
				var e = {
						976: function(e, t, a) {
							if (void 0 === n) var n = !0;
							var r, l = {};
							r = n ? a(531) : window.RQ.configs, l.APP_MODES = {
								DESKTOP: "DESKTOP",
								EXTENSION: "EXTENSION",
								WORDPRESS: "WORDPRESS",
								CLOUDFLARE: "CLOUDFLARE"
							}, l.COMPANY_INFO = {
								SUPPORT_EMAIL: "contact@requestly.io"
							}, l.VERSION = 3, l.ONBOARDING_DAYS_TO_EXPIRE = 7, l.ONBOARDING_TASKS = 5, l.FILE_PICKER_URL = "/library/filepicker", l.VERSIONS = {
								REPLACE_RULE: 2
							}, l.ENV = r.env, l.PUBLIC_NAMESPACE = "__REQUESTLY__", l.RULES_PAGE_URL = r.WEB_URL + "/rules/", l.RULES_PAGE_URL_PATTERN = l.RULES_PAGE_URL + "*", l.PRICING_PAGE_URL = r.WEB_URL + "/pricing/", l.GOODBYE_PAGE_URL = r.WEB_URL + "/goodbye/", l.DELAY_API_URL = r.WEB_URL + "/delay/", l.BLACK_LIST_DOMAINS = ["requestly.in", "requestly.io", "rq.in", "rq.io", "__rq"], l.STRING_CONSTANTS = {
								SLASH: "/"
							}, l.LIMITS = {
								NUMBER_SHARED_LISTS: 10
							}, l.DEFAULTS = {
								APP_INIT_TIMEOUT: 5e3
							}, l.OBJECT_TYPES = {
								GROUP: "group",
								RULE: "rule"
							}, l.RULE_TYPES = {
								REDIRECT: "Redirect",
								CANCEL: "Cancel",
								REPLACE: "Replace",
								HEADERS: "Headers",
								USERAGENT: "UserAgent",
								SCRIPT: "Script",
								QUERYPARAM: "QueryParam",
								RESPONSE: "Response",
								DELAY: "Delay"
							}, l.DELAY_REQUEST_CONSTANTS = {
								DELAY_PARAM_NAME: "delay",
								DELAY_PARAM_VALUE: "true",
								MIN_DELAY_VALUE: 1,
								MAX_DELAY_VALUE_NON_XHR: 1e4,
								MAX_DELAY_VALUE_XHR: 5e3,
								DELAY_TYPE: {
									CLIENT_SIDE: "clientSideDelay",
									SERVER_SIDE: "serverSideDelay"
								},
								REQUEST_TYPE: {
									XHR: "xmlhttprequest"
								},
								METHOD_TYPE: {
									GET: "GET"
								}
							}, l.OBJECT_FORMAT_KEYS = {
								CREATION_DATE: "creationDate",
								NAME: "name",
								ID: "id",
								RULE_TYPE: "ruleType",
								STATUS: "status",
								OBJECT_TYPE: "objectType",
								GROUP_ID: "groupId",
								IS_FAVOURITE: "isFavourite"
							}, l.HEADER_NAMES = {
								USER_AGENT: "User-Agent"
							}, l.GROUP_STATUS = {
								ACTIVE: "Active",
								INACTIVE: "Inactive"
							}, l.RULE_STATUS = {
								ACTIVE: "Active",
								INACTIVE: "Inactive"
							}, l.RULE_KEYS = {
								URL: "Url",
								HOST: "host",
								PATH: "path",
								HEADER: "Header",
								OVERWRITE: "Overwrite",
								IGNORE: "Ignore",
								PARAM: "param",
								VALUE: "value"
							}, l.PATH_FROM_PAIR = {
								RULE_KEYS: "source.key",
								RULE_OPERATORS: "source.operator",
								SCRIPT_LIBRARIES: "libraries",
								SOURCE_PAGE_URL_OPERATOR: "source.filters.pageUrl.operator",
								SOURCE_PAGE_URL_VALUE: "source.filters.pageUrl.value",
								SOURCE_RESOURCE_TYPE: "source.filters.resourceType",
								SOURCE_REQUEST_METHOD: "source.filters.requestMethod"
							}, l.URL_COMPONENTS = {
								PROTOCOL: "Protocol",
								URL: "Url",
								HOST: "host",
								PATH: "path",
								QUERY: "query",
								HASH: "hash"
							}, l.RULE_OPERATORS = {
								EQUALS: "Equals",
								CONTAINS: "Contains",
								MATCHES: "Matches",
								WILDCARD_MATCHES: "Wildcard_Matches"
							}, l.RULE_SOURCE_FILTER_TYPES = {
								PAGE_URL: "pageUrl",
								RESOURCE_TYPE: "resourceType",
								REQUEST_METHOD: "requestMethod"
							}, l.MODIFICATION_TYPES = {
								ADD: "Add",
								REMOVE: "Remove",
								REMOVE_ALL: "Remove All",
								MODIFY: "Modify",
								REPLACE: "Replace"
							}, l.NEED_HELP_QUERY_TYPES = {
								FEEDBACK: "Feedback",
								BUG: "Bug",
								QUESTION: "Question",
								FEATURE_REQUEST: "FeatureRequest"
							}, l.CLIENT_MESSAGES = {
								GET_SCRIPT_RULES: "getScriptRules",
								GET_USER_AGENT_RULE_PAIRS: "getUserAgentRulePairs",
								OVERRIDE_RESPONSE: "overrideResponse",
								NOTIFY_RULES_APPLIED: "notifyRulesApplied"
							}, l.EXTENSION_MESSAGES = {
								FOCUS_TAB: "focusTab",
								GET_FULL_LOGS: "getFullLogs",
								CLEAR_LOGS_FOR_TAB: "clearLogsForTab",
								CLEAR_LOGS_FOR_DOMAIN: "clearLogsForDomain",
								GET_FAVOURITE_RULES: "getFavouriteRules",
								GET_FLAGS: "getFlags"
							}, l.HEADERS_TARGET = {
								REQUEST: "Request",
								RESPONSE: "Response"
							}, l.REQUEST_TYPES = {
								MAIN_FRAME: "mainFrame",
								PAGE_REQUEST: "pageRequest"
							}, l.SCRIPT_TYPES = {
								URL: "url",
								CODE: "code"
							}, l.SCRIPT_CODE_TYPES = {
								JS: "js",
								CSS: "css"
							}, l.SCRIPT_LOAD_TIME = {
								BEFORE_PAGE_LOAD: "beforePageLoad",
								AFTER_PAGE_LOAD: "afterPageLoad"
							}, l.SCRIPT_LIBRARIES = {
								JQUERY: {
									name: "jQuery",
									src: "https://code.jquery.com/jquery-2.2.4.js"
								},
								UNDERSCORE: {
									name: "Underscore",
									src: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"
								}
							}, l.RESPONSE_BODY_TYPES = {
								STATIC: "static",
								CODE: "code"
							}, l.RESPONSE_CODES = {
								NOT_FOUND: 404
							}, l.STORAGE_KEYS = {
								REQUESTLY_SETTINGS: "rq_settings",
								USER_INFO: "user_info",
								LATEST_NOTIFICATION_READ_BY_USER: "latestNotificationReadId"
							}, l.MESSAGES = {
								DELETE_ITEMS_NO_SELECTION_WARNING: "Please select one or more rules to delete.",
								DELETE_ITEMS: "Are you sure you want to delete the selected items?",
								DELETE_GROUP_WITH_RULES_WARNING: "There are some rules contained in this group. Please delete or ungroup them before deleting the group.",
								DELETE_GROUP: "Are you sure you want to delete the group?",
								UNGROUP_ITEMS_NO_SELECTION_WARNING: "Please select one or more rules to ungroup.",
								UNGROUP_ITEMS: "Are you sure you want to ungroup the selected items?",
								SIGN_IN_TO_VIEW_SHARED_LISTS: "Please login to view your Shared Lists.",
								SIGN_IN_TO_CREATE_SHARED_LISTS: "Please login to share the selected rules",
								SIGN_IN_TO_SUBMIT_QUERY: "Please login to contact our support team.",
								ERROR_AUTHENTICATION: "Received some error in authentication. Please try again later!!",
								SHARED_LISTS_LIMIT_REACHED: "You can not create more than" + l.LIMITS.NUMBER_SHARED_LISTS + "shared lists",
								ERROR_TAB_FOCUS: "The tab cannot be focused, as it might have been closed.",
								DEACTIVATE_REQUESTLY_MENU_OPTION: "Deactivate Requestly"
							}, l.RESOURCES = {
								EXTENSION_ICON: "/resources/images/48x48.png",
								EXTENSION_ICON_GREYSCALE: "/resources/images/48x48_greyscale.png",
								EXTENSION_ICON_GREEN: "/resources/images/48x48_green.png"
							}, l.GA_EVENTS = {
								CATEGORIES: {
									RULES: "rules",
									RULE: "rule",
									GROUP: "group",
									USER: "user",
									SHARED_LIST: "shared list",
									RULE_LOGS: "rule logs",
									EXTENSION: "extension",
									IN_APP_NOTIFICATION: "InAppNotification",
									NEED_HELP_FEATURE: "need help feature",
									PRICING: "pricing",
									LICENSE: "license",
									LIBRARY: "library",
									UNLOCK: "unlock",
									REMOTE_RULES: "remoteRules",
									SPONSOR_SIDERAIL: "sponsor_siderail",
									LOGIN: "login",
									SIGNUP: "signup",
									REFERRAL: "referral",
									PAGE_VISITS: "page visits",
									REQUEST_UPGRADE: "request upgrade",
									MARKETPLACE: "marketplace",
									CHECKOUT: "checkout page",
									TEAMS: "teams page",
									ONBOARDING: "onboarding page",
									RULE_PAIRS: "rule pairs"
								},
								ACTIONS: {
									MODIFIED: "modified",
									CREATED: "created",
									DELETED: "deleted",
									ACTIVATED: "activated",
									DEACTIVATED: "deactivated",
									IMPORTED: "imported",
									EXPORTED: "exported",
									LIMIT_REACHED: "limit reached",
									AUTHENTICATED: "authenticated",
									VIEWED: "viewed",
									CLICKED: "clicked",
									COPIED: "copied",
									MARKED_FAVOURITE: "marked favourite",
									UNMARKED_FAVOURITE: "unmarked favourite",
									WORKFLOW_STARTED: "workflow started",
									ALREADY_LOGIN: "already login",
									LOGIN_REQUESTED: "login requested",
									LOGIN_DONE: "login done",
									LOGIN_REJECTED: "login rejected",
									FORM_SUBMITTED: "form submitted",
									FORM_REJECTED: "form rejected",
									INVALID_SUBMIT: "invalid submit",
									GROUPED: "grouped",
									UNGROUPED: "ungrouped",
									SHARED: "shared",
									ERROR: "error occured",
									TASK_COMPLETED: "task completed",
									BACKUP_CREATED: "backup created",
									BACKUP_USED: "backup used",
									CARD_ERROR: "card error",
									CARD_ACCEPTED: "card accepted",
									CARD_ENTERED: "card num and cv entered",
									CURRENCY_CHANGE: "currency_changed",
									DURATION_CHANGE: "duration_changed",
									APPLIED_SUCCESSFULLY: "applied_successfully",
									APPLIED_UNSUCCESSFULLY: "applied_unsuccessfully",
									REVOKED: "revoked",
									BOUGHT: "bought",
									UPDATED: "updated",
									REQUEST_ADMIN: "enterprise_plan_requested",
									UNINSTALLED: "uninstalled",
									UNINSTALL_RESPONSE: "uninstall_response",
									ROUTE_VIEWED: "route_viewed",
									EMAIL_LOGIN_PERFORMED: "email_login_performed",
									EMAIL_SIGNUP_PERFORMED: "email_signup_performed",
									GMAIL_LOGIN_PERFORMED: "gmail_login_performed",
									GMAIL_SIGNUP_PERFORMED: "gmail_signup_performed",
									MICROSOFT_LOGIN_PERFORMED: "microsoft_login_performed",
									APPLE_LOGIN_PERFORMED: "apple_login_performed",
									REFERRAL_APPLIED: "referral_applied",
									REFERRAL_FAILED: "referral_failed",
									EMAIL_VERIFICATION_RESEND: "resend_email_verification",
									EMAIL_VERIFICATION_SUCCESSFUL: "email_verification_successful",
									EMAIL_VERIFICATION_FAILED: "email_verification_failed"
								},
								ATTR: {
									PAYMENT_MODE: "payment_mode",
									PLANNAME: "planname",
									PLAN_DURATION: "plan_duration",
									PLAN_ID: "plan_id",
									PLAN_START_DATE: "plan_startDate",
									PLAN_END_DATE: "plan_endDate",
									COUPON: "coupon",
									COUPON_VALUE: "coupon_value",
									LICENSE: "licensekey",
									COMPANY: "company",
									PROFILE: "profile",
									REMOTE_RULES_ENDPOINT: "remoteRulesEndpoint",
									REMOTE_RULES_FREQUENCY: "remoteRulesFrequency",
									NUM_RULES: "NUM_RULES",
									NUM_ACTIVE_RULES: "NUM_ACTIVE_RULES",
									NUM_GROUPS: "NUM_GROUPS",
									NUM_ACTIVE_GROUPS: "NUM_ACTIVE_GROUPS",
									NUM_SHARED_LISTS: "NUM_SHARED_LISTS",
									SIGNUP_DATE: "SIGNUP_DATE"
								},
								VALUES: {
									PAYPAL: "paypal"
								},
								GA_CUSTOM_DIMENSIONS: {
									USER_ID: "dimension1"
								},
								GA_CUSTOM_METRICS: {
									num_rules: "metric1"
								}
							}, l.USER = {
								AUTHORIZED: "authorized-user",
								UNAUTHORIZED: "unauthorized-user"
							}, l.FIREBASE_NODES = {
								USERS: "users",
								PUBLIC: "public",
								SHARED_LISTS: "sharedLists",
								FEEDBACK: "feedback",
								FILES: "files"
							}, l.DATASTORE = {
								ACTIONS: {
									CHECK_USER_AUTH: "check:userAuthenticated",
									AUTHENTICATE: "authenticate",
									FETCH_USER_DETAILS: "fetchUserDetails",
									GETVALUE: "getValue",
									SETVALUE: "setValue"
								}
							}, l.MESSAGE_HANDLER = {
								ACTIONS: {
									SUBMIT_EVENT: "submitEvent",
									SUBMIT_ATTR: "submitAttr"
								},
								MESSAGE_TYPES: {
									EVENT: "event",
									ATTRIBUTE: "attribute"
								},
								SINKS: {
									CUSTOMERLY: "customerly"
								}
							}, l.getSharedListURL = function(e, t) {
								var a = t.replace(new RegExp(" +|/+", "g"), "-").replace(/-+/g, "-");
								return l.RULES_PAGE_URL + "#sharedList/" + e + "-" + a
							}, l.getSharedListTimestamp = function(e) {
								return e.split("-")[0]
							}, l.fireAjax = function(e, t) {
								return new Promise((function(a, n) {
									var r = new XMLHttpRequest;
									r.open("GET", e, t), r.onreadystatechange = function() {
										4 === this.readyState && (this.status >= 200 && this.status < 400 ? a(JSON.parse(this.responseText)) : n())
									}, r.send()
								}))
							}, n ? e.exports = l : Object.assign(window.RQ, l)
						},
						531: function(e) {
							if (void 0 === t) var t = !0;
							var a = {
								browser: "chrome",
								storageType: "sync",
								contextMenuContexts: ["browser_action"],
								collectExtUsageStats: !0,
								env: "prod",
								WEB_URL: "https://app.requestly.io",
								firebaseConfig: {
									apiKey: "AIzaSyC2WOxTtgKH554wCezEJ4plxnMNXaUSFXY",
									authDomain: "app.requestly.io",
									databaseURL: "https://requestly.firebaseio.com",
									projectId: "project-7820168409702389920",
									storageBucket: "project-7820168409702389920.appspot.com",
									messagingSenderId: "911299702852"
								},
								logLevel: "info",
								stripeConfig: {
									publishableKey: "pk_live_FgVCiLBLJBaVSLulhPWptlDg",
									productIds: {
										enterprisePlan: {
											INR: {
												monthly: "price_1Hs62NIVcpOtHqujisdpsA53",
												quarterly: "price_1Hs62NIVcpOtHqujbIhUiCNO",
												"half-yearly": "price_1Hs62NIVcpOtHqujk2TCvkba",
												annual: "price_1Hs62OIVcpOtHqujuSmvQ0LR"
											},
											USD: {
												monthly: "price_1Hs62NIVcpOtHqujNdJXy1U2",
												quarterly: "price_1Hs62NIVcpOtHqujA6BhjyBc",
												"half-yearly": "price_1Hs62NIVcpOtHqujrfFCxb4I",
												annual: "price_1Hs62NIVcpOtHqujafhBiwBk"
											},
											default: "price_1Hs62NIVcpOtHqujNdJXy1U2"
										}
									}
								},
								version: "21.7.22"
							};
							t ? e.exports = a : window && (window.RQ = window.RQ || {}, window.RQ.configs = a)
						}
					},
					t = {};

				function a(n) {
					var r = t[n];
					if (void 0 !== r) return r.exports;
					var l = t[n] = {
						exports: {}
					};
					return e[n](l, l.exports, a), l.exports
				}
				a.d = function(e, t) {
					for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
						enumerable: !0,
						get: t[n]
					})
				}, a.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, a.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(e, "__esModule", {
						value: !0
					})
				};
				var c = {};
				return function() {
					"use strict";
					a.r(c), a.d(c, {
						getInstance: function() {
							return h
						}
					});
					var e = a(976),
						t = "^/(.+)/(|i|g|ig|gi)$";

					function o(e) {
						var a;
						return function(e) {
							return -1 !== e.search(new RegExp(t))
						}(e) ? (a = e.match(new RegExp(t)), new RegExp(a[1], a[2])) : null
					}

					function s(t, a) {
						var n = new URL(t);
						switch (a) {
							case e.URL_COMPONENTS.URL:
								return t;
							case e.URL_COMPONENTS.PROTOCOL:
								return n.protocol;
							case e.URL_COMPONENTS.HOST:
								return n.host;
							case e.URL_COMPONENTS.PATH:
								return n.pathname;
							case e.URL_COMPONENTS.QUERY:
								return n.search;
							case e.URL_COMPONENTS.HASH:
								return n.hash
						}
						console.error("Invalid source key", t, a)
					}

					function i(e) {
						var t = {};
						return e && "?" !== e ? ("?" === e[0] && (e = e.substr(1)), e.split("&").forEach((function(e) {
							var a = e.split("=")[0],
								n = e.split("=")[1];
							t[a] = t[a] || [], t[a].push(n)
						})), t) : t
					}

					function u(e) {
						var t = [];
						for (var a in e)(e[a] || []).forEach((function(e) {
							void 0 === e ? t.push(a) : t.push(a + "=" + e)
						}));
						return t.join("&")
					}

					function m(e) {
						return e.split("#")[0].split("?")[0]
					}
					var E = a(976),
						d = function() {
							function e() {
								r(this, e)
							}
							return l(e, null, [{
								key: "populateMatchesInString",
								value: function(e, t) {
									return t.forEach((function(t, a) {
										0 !== a && (t = t || "", e = e.replace(new RegExp("[$]" + a, "g"), t))
									})), e
								}
							}, {
								key: "checkRegexMatch",
								value: function(t, a, n) {
									var r, l = o(t);
									return l && -1 !== a.search(l) ? (r = l.exec(a) || [], e.populateMatchesInString(n, r)) : null
								}
							}, {
								key: "checkWildCardMatch",
								value: function(t, a, n) {
									var r, l, c, o, s = [];
									for (a = "|" + a + "|", r = (t = "|" + t + "|").split("*"), l = 0; l < r.length; l++) {
										if (c = r[l], -1 === (o = a.indexOf(c))) return null;
										0 === o ? s.push("") : s.push(a.substr(0, o)), a = a.slice(o + c.length)
									}
									return e.populateMatchesInString(n, s)
								}
							}, {
								key: "matchUrlWithRuleSource",
								value: function(t, a, n) {
									for (var r = t.operator, l = s(a, t.key), c = t.value, o = E.BLACK_LIST_DOMAINS || [], i = 0; i < o.length; i++)
										if (-1 !== a.indexOf(o[i])) return null;
									return e.matchUrlCriteria(l, r, c, n)
								}
							}, {
								key: "matchUrlCriteria",
								value: function(t, a, n, r) {
									var l = r || "";
									switch (a) {
										case E.RULE_OPERATORS.EQUALS:
											if (n === t) return l;
											break;
										case E.RULE_OPERATORS.CONTAINS:
											if (-1 !== t.indexOf(n)) return l;
											break;
										case E.RULE_OPERATORS.MATCHES:
											return e.checkRegexMatch(n, t, l);
										case E.RULE_OPERATORS.WILDCARD_MATCHES:
											return e.checkWildCardMatch(n, t, l)
									}
									return null
								}
							}, {
								key: "matchUrlWithRulePair",
								value: function(t, a, n) {
									var r = void 0 !== t.destination ? t.destination : null,
										l = null;
									return e.matchRequestWithRuleSourceFilters(t.source.filters, n) && (l = e.matchUrlWithRuleSource(t.source, a, r)), l
								}
							}, {
								key: "matchUrlWithRulePairs",
								value: function(e, t, a) {
									var n, r = t,
										l = null;
									for (n = 0; n < e.length; n++) null !== (l = this.matchUrlWithRulePair(e[n], r, a)) && (r = l);
									return r !== t ? r : null
								}
							}, {
								key: "matchRequestWithRuleSourceFilters",
								value: function(t, a) {
									if (!t || !a) return !0;
									for (var n in t) {
										var r = t[n] || [];
										switch (n) {
											case E.RULE_SOURCE_FILTER_TYPES.PAGE_URL:
												if (!r.every((function(t) {
														return e.matchPageUrlFilter(t, a)
													}))) return !1;
												break;
											case E.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD:
												if (!r.some((function(e) {
														return a.method === e
													}))) return !1;
												break;
											case E.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE:
												if (!r.some((function(e) {
														return a.type === e
													}))) return !1
										}
									}
									return !0
								}
							}, {
								key: "matchPageUrlFilter",
								value: function(t, a) {
									var n = a.pageUrl;
									return null !== e.matchUrlCriteria(n, t.operator, t.value)
								}
							}, {
								key: "matchValueForPredefinedFunctions",
								value: function(e, t) {
									if (!e) return e;
									for (var a in t) e = t[a].eval(e);
									return e
								}
							}, {
								key: "getHeaderModification",
								value: function(e, t) {
									var a;
									return e === E.RULE_TYPES.USERAGENT ? {
										source: t.source,
										target: E.HEADERS_TARGET.REQUEST,
										type: E.MODIFICATION_TYPES.REPLACE,
										header: E.HEADER_NAMES.USER_AGENT,
										value: t.userAgent
									} : ((a = t).source = a.source || {}, a)
								}
							}, {
								key: "addHeader",
								value: function(e, t) {
									e.push({
										name: t.name,
										value: t.value
									})
								}
							}, {
								key: "removeHeader",
								value: function(e, t) {
									for (var a = e.length - 1; a >= 0; a--) {
										var n = e[a];
										n.name && n.name.toLowerCase() === t.toLowerCase() && e.splice(a, 1)
									}
								}
							}, {
								key: "modifyHeaderIfExists",
								value: function(e, t) {
									for (var a = e.length - 1; a >= 0; a--) {
										var n = e[a];
										if (n.name && n.name.toLowerCase() === t.name.toLowerCase()) {
											n.value = t.value;
											break
										}
									}
								}
							}, {
								key: "replaceHeader",
								value: function(e, t) {
									this.removeHeader(e, t.name), this.addHeader(e, t)
								}
							}]), e
						}(),
						p = "block",
						S = "redirect",
						A = "add_delay",
						T = a(976),
						f = a(976),
						O = function() {
							function t() {
								r(this, t)
							}
							return l(t, null, [{
								key: "process",
								value: function(e) {
									for (var t = e.rule, a = e.requestURL, n = e.details, r = a, l = t.pairs, c = null, o = r, s = 0; s < l.length; s++) c = l[s], d.matchRequestWithRuleSourceFilters(c.source.filters, n) && null !== d.matchUrlWithRuleSource(c.source, r) && (o = this.applyQueryParamModifications(c.modifications, o));
									return o !== r ? {
										action: "redirect",
										url: o
									} : null
								}
							}, {
								key: "applyQueryParamModifications",
								value: function(e, a) {
									var n = a;
									return e.forEach((function(e) {
										n = t.applyQueryParamModification(e, n)
									})), n
								}
							}, {
								key: "applyQueryParamModification",
								value: function(t, a) {
									var n = a,
										r = m(a),
										l = s(a, f.URL_COMPONENTS.HASH),
										c = s(a, f.URL_COMPONENTS.QUERY),
										o = i(c),
										E = t.param,
										d = t.value;
									switch (t.type) {
										case f.MODIFICATION_TYPES.ADD:
											n = function(t, a, n, r) {
												var l = t,
													c = m(t),
													o = s(t, e.URL_COMPONENTS.HASH),
													E = s(t, e.URL_COMPONENTS.QUERY),
													d = i(E);
												return d[a] = r ? [] : d[a] || [], d[a].push(n), l = (E = u(d)) ? c + "?" + E : c, l += o
											}(n, E, d, "Overwrite" === t.actionWhenParamExists), "Ignore" === t.actionWhenParamExists && (n = a);
											break;
										case f.MODIFICATION_TYPES.REMOVE:
											E in o && (delete o[E], n = (c = u(o)) ? r + "?" + c : r, n += l);
											break;
										case f.MODIFICATION_TYPES.REMOVE_ALL:
											n = r + l
									}
									return n
								}
							}]), t
						}(),
						N = a(976),
						b = a(976),
						g = a(976),
						R = a(976);

					function h(e) {
						return function() {
							function e() {
								r(this, e)
							}
							return l(e, null, [{
								key: "getRuleProcessorInstance",
								value: function(e) {
									switch (e.toLowerCase()) {
										case R.RULE_TYPES.REDIRECT.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														var t = e.rule,
															a = e.requestURL,
															n = e.details,
															r = d.matchUrlWithRulePairs(t.pairs, a, n);
														return r && r !== a ? {
															action: S,
															url: r
														} : null
													}
												}]), e
											}();
										case R.RULE_TYPES.REPLACE.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														for (var t, a = e.rule, n = e.requestURL, r = e.details, l = a.pairs, c = null, s = null, i = n, u = 0; u < l.length; u++)(c = l[u]).from = c.from || "", c.source && !d.matchRequestWithRuleSourceFilters(c.source.filters, r) || c.source && c.source.value && null === d.matchUrlWithRuleSource(c.source, i) || (t = null !== (s = o(c.from)), s = s || c.from, (t && i.match(s) || -1 !== i.indexOf(s)) && (i = i.replace(s, c.to)));
														return i !== n ? {
															action: "redirect",
															url: i
														} : null
													}
												}]), e
											}();
										case R.RULE_TYPES.HEADERS.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														for (var t = e.rule, a = e.requestURL, r = e.details, l = e.originalHeaders, c = e.typeOfHeaders, o = !1, s = t.pairs || [], i = n(l), u = 0; u < s.length; u++) {
															var m = s[u],
																E = m;
															if (E.target && E.header && null !== d.matchUrlWithRulePair(m, a, r) && (o = !0, !c || E.target === c)) {
																var p = E.value;
																switch (E.type) {
																	case T.MODIFICATION_TYPES.ADD:
																		d.addHeader(i, {
																			name: E.header,
																			value: p
																		});
																		break;
																	case T.MODIFICATION_TYPES.REMOVE:
																		d.removeHeader(i, E.header);
																		break;
																	case T.MODIFICATION_TYPES.MODIFY:
																		d.modifyHeaderIfExists(i, {
																			name: E.header,
																			value: p
																		});
																		break;
																	case T.MODIFICATION_TYPES.REPLACE:
																		d.replaceHeader(i, {
																			name: E.header,
																			value: p
																		})
																}
															}
														}
														return o ? {
															action: "modify_headers",
															newHeaders: i
														} : null
													}
												}]), e
											}();
										case R.RULE_TYPES.CANCEL.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														var t = e.rule,
															a = e.requestURL,
															n = e.details,
															r = a,
															l = d.matchUrlWithRulePairs(t.pairs, r, n);
														return "string" == typeof l && 0 === l.length ? {
															action: p
														} : null
													}
												}]), e
											}();
										case R.RULE_TYPES.QUERYPARAM.toLowerCase():
											return O;
										case R.RULE_TYPES.SCRIPT.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														var t = e.rule,
															a = e.requestURL,
															n = t.pairs[0];
														if (null === d.matchUrlWithRulePair(n, a)) return null;
														var r = [],
															l = [];
														return n.libraries && n.libraries.forEach((function(e) {
															r.includes(e) || r.push(e)
														})), {
															action: "insert",
															data: {
																cssScripts: (l = l.concat(n.scripts || [])).filter((function(e) {
																	return e.codeType === N.SCRIPT_CODE_TYPES.CSS
																})),
																jsScripts: l.filter((function(e) {
																	return !e.codeType || e.codeType === N.SCRIPT_CODE_TYPES.JS
																})),
																libraries: r
															}
														}
													}
												}]), e
											}();
										case R.RULE_TYPES.USERAGENT.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														var t = e.rule,
															a = e.requestURL,
															r = e.originalRequestHeaders,
															l = e.details,
															c = !1,
															o = n(r),
															s = t.ruleType,
															i = t.pairs || [],
															u = null;
														l && l.pageDomain && (u = l.pageDomain);
														for (var m = 0; m < i.length; m++) {
															var E = i[m],
																p = d.getHeaderModification(s, E);
															(!p.source.value || null !== d.matchUrlWithRuleSource(p.source, a) || s === b.RULE_TYPES.USERAGENT && p.source.requestType === b.REQUEST_TYPES.MAIN_FRAME && u && null !== d.matchUrlWithRuleSource(p.source, u)) && (c = !0, d.replaceHeader(o, {
																name: p.header,
																value: p.value
															}))
														}
														return c ? {
															action: "modify_user_agent",
															newRequestHeaders: o
														} : null
													}
												}]), e
											}();
										case R.RULE_TYPES.DELAY.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														for (var t = e.rule, a = e.requestURL, n = e.details, r = t.pairs, l = null, c = a, o = null, s = null, i = 0; i < r.length; i++)
															if (l = r[i], d.matchRequestWithRuleSourceFilters(l.source.filters, n) && null !== d.matchUrlWithRuleSource(l.source, a) && (!l.source || !l.source.value || null !== d.matchUrlWithRuleSource(l.source, c))) return o = l.delay, s = l.delayType || g.DELAY_REQUEST_CONSTANTS.DELAY_TYPE.CLIENT_SIDE, {
																action: A,
																delay: o,
																delayType: s
															};
														return null
													}
												}]), e
											}();
										case R.RULE_TYPES.RESPONSE.toLowerCase():
											return function() {
												function e() {
													r(this, e)
												}
												return l(e, null, [{
													key: "process",
													value: function(e) {
														var t = e.rule,
															a = e.requestURL,
															n = t.pairs[0];
														return null === d.matchUrlWithRulePair(n, a) ? null : n.response && n.response.type && "static" !== !n.response.type && n.response.value ? {
															action: "modify_response",
															response: n.response.value
														} : null
													}
												}]), e
											}();
										default:
											return null
									}
								}
							}]), e
						}().getRuleProcessorInstance(e)
					}
				}(), c
			}()
		}).call(this, a(41))
	}, , , , , , , , function(e) {
		e.exports = JSON.parse('{"fresh-chrome":{"id":"fresh-chrome","name":"Google Chrome","description":"New Profile","icon":"chrome.png","isActive":false,"comingSoon":false,"isAvailable":false},"existing-chrome":{"id":"existing-chrome","name":"Google Chrome","description":"Existing Profile","icon":"chrome.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-chrome-beta":{"id":"fresh-chrome-beta","name":"Chrome Beta","description":"New Profile","icon":"chrome-beta.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-chrome-dev":{"id":"fresh-chrome-dev","name":"Chrome Dev","description":"New Profile","icon":"chrome-dev.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-chrome-canary":{"id":"fresh-chrome-canary","name":"Chrome Canary","description":"New Profile","icon":"chrome-canary.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-chromium":{"id":"fresh-chromium","name":"Chromium","description":"New Profile","icon":"chromium.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-chromium-dev":{"id":"fresh-chromium-dev","name":"Chromium Dev","description":"New Profile","icon":"chromium.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-edge":{"id":"fresh-edge","name":"Microsoft Edge ","description":"New Profile","icon":"edge.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-edge-beta":{"id":"fresh-edge-beta","name":"Edge Beta","description":"New Profile","icon":"edge-beta.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-edge-dev":{"id":"fresh-edge-dev","name":"Edge Developer","description":"New Profile","icon":"edge-dev.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-edge-canary":{"id":"fresh-edge-canary","name":"Edge Canary","description":"New Profile","icon":"edge-can.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-brave":{"id":"fresh-brave","name":"Brave","description":"New Profile","icon":"brave.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-opera":{"id":"fresh-opera","name":"Opera","description":"New Profile","icon":"opera.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-firefox":{"id":"fresh-firefox","name":"Mozilla Firefox","description":"New Profile","icon":"firefox.png","isActive":false,"comingSoon":false,"isAvailable":false},"fresh-safari":{"id":"fresh-safari","name":"Safari","description":"New Profile","icon":"safari.png","isActive":false,"comingSoon":true,"isAvailable":false},"electron":{"id":"electron","name":"Any Electron App","description":"Spotify, VS Code, more","icon":"electron.png","isActive":false,"comingSoon":true,"isAvailable":false},"fresh-terminal":{"id":"fresh-terminal","name":"Terminal","description":"New Window","icon":"terminal.png","isActive":false,"comingSoon":true,"isAvailable":false},"existing-terminal":{"id":"existing-terminal","name":"Terminal","description":"Existing Window","icon":"terminal.png","isActive":false,"comingSoon":true,"isAvailable":false},"system-wide":{"id":"system-wide","name":"Everywhere","description":"System Wide","icon":"pc.png","isActive":false,"comingSoon":true,"isAvailable":false},"android":{"id":"android","name":"Android","description":"External Device","icon":"android.png","isActive":false,"comingSoon":true,"isAvailable":false},"ios":{"id":"ios","name":"iOS","description":"External Device","icon":"ios.png","isActive":false,"comingSoon":true,"isAvailable":false},"raspberry-pi":{"id":"raspberry-pi","name":"Raspberry Pi","description":"External Device","icon":"raspberry-pi.png","isActive":false,"comingSoon":true,"isAvailable":false}}')
	}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
		var n = {
			"./AU/customerLogo-0.svg": 305,
			"./AU/customerLogo-1.svg": 306,
			"./AU/customerLogo-2.svg": 307,
			"./BR/customerLogo-0.svg": 308,
			"./BR/customerLogo-1.svg": 309,
			"./BR/customerLogo-2.svg": 310,
			"./BR/customerLogo-3.svg": 311,
			"./BR/customerLogo-4.svg": 312,
			"./CA/customerLogo-0.svg": 313,
			"./CA/customerLogo-1.svg": 314,
			"./CA/customerLogo-2.svg": 315,
			"./CA/customerLogo-3.svg": 316,
			"./CN/customerLogo-0.svg": 317,
			"./CN/customerLogo-1.svg": 318,
			"./CN/customerLogo-2.svg": 319,
			"./DE/customerLogo-0.svg": 320,
			"./GB/customerLogo-0.svg": 321,
			"./GB/customerLogo-1.svg": 322,
			"./GB/customerLogo-2.svg": 323,
			"./GB/customerLogo-3.svg": 324,
			"./GB/customerLogo-4.svg": 325,
			"./IN/customerLogo-0.svg": 326,
			"./IN/customerLogo-1.svg": 327,
			"./IN/customerLogo-2.svg": 328,
			"./IN/customerLogo-3.svg": 329,
			"./IN/customerLogo-4.svg": 330,
			"./IN/customerLogo-5.svg": 331,
			"./JP/customerLogo-0.svg": 332,
			"./JP/customerLogo-1.svg": 333,
			"./JP/customerLogo-2.svg": 334,
			"./JP/customerLogo-3.svg": 335,
			"./JP/customerLogo-4.svg": 336,
			"./JP/customerLogo-5.svg": 337,
			"./RU/customerLogo-0.svg": 338,
			"./RU/customerLogo-1.svg": 339,
			"./RU/customerLogo-2.svg": 340,
			"./RU/customerLogo-3.svg": 341,
			"./RU/customerLogo-4.svg": 342,
			"./RU/customerLogo-5.svg": 343,
			"./TR/customerLogo-0.svg": 344,
			"./TR/customerLogo-1.svg": 345,
			"./US/customerLogo-0.svg": 346,
			"./US/customerLogo-1.svg": 347,
			"./US/customerLogo-2.svg": 348,
			"./US/customerLogo-3.svg": 349,
			"./US/customerLogo-4.svg": 350,
			"./US/customerLogo-5.svg": 351
		};

		function r(e) {
			var t = l(e);
			return a(t)
		}

		function l(e) {
			if (!a.o(n, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw t.code = "MODULE_NOT_FOUND", t
			}
			return n[e]
		}
		r.keys = function() {
			return Object.keys(n)
		}, r.resolve = l, e.exports = r, r.id = 304
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.c7b170ee.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.3a95136b.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.90d03aec.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.0681bb9e.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.08b37841.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.fe337835.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.b059b298.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.a5b6f79d.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.0dcd43b9.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.e51c6687.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.a54d8ce2.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.e4a0b4b5.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.8c7354e9.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.773983ef.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.8840366e.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.98882f76.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.5d1e5a0f.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.373dd1ac.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.8f3175c0.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.52e52623.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.6f8cc9e0.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.9bcf695b.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.3fa3482e.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.77e826ef.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.bc0186a3.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.f19a5be1.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-5.f1425df3.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.ed1ca250.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.bae3435c.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.9993f6f7.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.01c96230.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.fca0ea40.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-5.8d7c4b81.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.f9a00b1b.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.970a5c87.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.fe42274a.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.9fa9c175.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.51e8892e.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-5.e2362cb4.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.65c0dd2b.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.49ba54cb.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.9fcace10.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.52171ef4.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.f16c67c8.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.3689aa05.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.3c9cb13c.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-5.f512d111.svg"
	}, function(e, t, a) {
		var n = {
			"./customerLogo-0.svg": 353,
			"./customerLogo-1.svg": 354,
			"./customerLogo-2.svg": 355,
			"./customerLogo-3.svg": 356,
			"./customerLogo-4.svg": 357,
			"./customerLogo-5.svg": 358,
			"./customerLogo-6.svg": 359,
			"./customerLogo-7.svg": 360,
			"./customerLogo-8.svg": 361,
			"./customerLogo-9.svg": 362
		};

		function r(e) {
			var t = l(e);
			return a(t)
		}

		function l(e) {
			if (!a.o(n, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw t.code = "MODULE_NOT_FOUND", t
			}
			return n[e]
		}
		r.keys = function() {
			return Object.keys(n)
		}, r.resolve = l, e.exports = r, r.id = 352
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-0.805e7066.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-1.ca6c5992.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-2.d4ef1587.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-3.8446666e.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-4.545c897f.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-5.04fe533c.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-6.767c5fa1.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-7.cff573a9.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-8.2b6d8889.svg"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/customerLogo-9.b84f6b21.svg"
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
		var n = {
			"./android.png": 454,
			"./brave.png": 455,
			"./chrome-beta.png": 456,
			"./chrome-canary.png": 457,
			"./chrome-dev.png": 458,
			"./chrome.png": 459,
			"./chromium.png": 460,
			"./edge-beta.png": 461,
			"./edge-can.png": 462,
			"./edge-dev.png": 463,
			"./edge.png": 464,
			"./electron.png": 465,
			"./firefox.png": 466,
			"./ios.png": 467,
			"./opera.png": 468,
			"./package.png": 469,
			"./package2.png": 470,
			"./pc.png": 471,
			"./raspberry-pi.png": 472,
			"./safari.png": 473,
			"./terminal.png": 474
		};

		function r(e) {
			var t = l(e);
			return a(t)
		}

		function l(e) {
			if (!a.o(n, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw t.code = "MODULE_NOT_FOUND", t
			}
			return n[e]
		}
		r.keys = function() {
			return Object.keys(n)
		}, r.resolve = l, e.exports = r, r.id = 453
	}, function(e, t, a) {
		e.exports = a.p + "static/media/android.907e95ef.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/brave.0658f1e2.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/chrome-beta.6a925e54.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/chrome-canary.a0b6d8fb.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/chrome-dev.12828bfa.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/chrome.3a5cbbf9.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/chromium.bff32d7d.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/edge-beta.9d1c56bb.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/edge-can.f25df116.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/edge-dev.b25f459e.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/edge.5edf2260.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/electron.6d3ff734.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/firefox.e8977e7e.png"
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAFBxJREFUeJzt3X+QVtV9x/H3Piz+4IewShQlRlRSQDTiGJUIGkCDQGrTjBp0jNI0apuaaYqp6bSZTNuktUkbY9pKTdRkqqZpoiZpx4hUDQ9BCRhjI6lLkKBRkB8miOAuKgF3+8f32bAs++Pec86953n2fF4zZwTZc+/32d37ee5z7rnnNlFfRgMTgUnABKAFGFlrI4Ch8UoTyWwv0A601dqrwAZgHfAssDNeaQdqirz/ScBsYBYwHTg2bjkipdgKrASqwDIsGKKIEQBnAlcBlwHHRdi/SL3ZAtwH3AM8VeaOywqAUcB1wEJgSkn7FGlErcBdwO3ArqJ3VnQAjAEWAddjISAi2ewCFgO3ANsj15LbCODz2EBIp5qamnNrx46lETSIS4CNxP/GqakNprYRO7aCCvkRYBxwJzA34DZF5EBLgWuAzSE2FioA5gF3Y5/5RaRY24GrgYd8NzTEs38zcBM2WDHctxgRyWQYcEXtv8uBDtcN+ZwBDAO+g075RWJaio0NvO7S2TUAjgQeBKY59heRcFYD7wd25O3oEgDHAQ+jCT0i9aQVmIPNKswsbwAcCaxAB79IPVoLnEeOM4FKjo0Pw077dfCL1KdTsGN0WNYOWQOgGRvw02d+kfo2DTtWm7N8cdbLgDcBf+BYkIiUawJwKPDoQF+YZQxgHvB98n1cEJG4OoCLgSX9fdFAATAOeBrN8BNpRNuBqfQzbXigd/U70cEv0qjGYMdwn/oLgEvQLD+RRjeXfu4i7OsjwAjsmuLxRVQkIqXahF0ibO/5D31dBfgsML/IikSkNKOwY/2gqwK9nQGMAV5Ad/eJDCa7gfH0WF6stzGARejgFxlshmPH9gF6ngGMAl5EC3iKDEa7gBPottpwzzOA69DBLzJYdS3P/1s9zwCeQTf7iAxmrcCpXX/pfgZwJjr4RQa7KdixDhwYAFeVX4uIRHB11x+6fwTYjJ7VJ5KCLdh9Pr89A5iEDn6RVBwHTIb9ATA7Xi0iEsEs2B8AsyIWIiLlmw37xwC2AMfGq0VESrYNOLYJGA28GrkYESlfSwWYGLsKEYliUgW7AiAi6ZlUwVYQFZH0TKgALbGrEJEoRleAkbGrEJEoRioARNI1soItACoi6RlZAYbGrkJEomjW475EEqYAEEmYAkAkYQoAkYQpAEQSpgAQSZgCQCRhCgCRhCkARBKmABBJmAJAJGEKAJGEKQBEEqYAEEmYAkAkYQoAkYQpAEQSpgAQSZgCQCRhCgCRhCkARBKmABBJmAJAJGEKAJGEKQBEEqYAEEmYAkAkYQoAkYQpAEQSpgAQSZgCQCRhCgCRhCkARBKmABBJmAJAJGEKAJGEKQBEEqYAEEmYAkAkYQoAkYQpAEQSpgAQSZgCQCRhCgCRhCkARBLWHLuAyDqAVmBz7c9jgdOAoTGLEilLqgGwE7gZuAN4uce/jQIuBz4NHF9yXVm0A2ux4NoEvAa0AbuBYcARwEjgaGBKrR0VpdJivAVsALbX2iu1tqP270fU2qhaOxH4HeCQ0ittEFWgM6HWCpyU4fsyGni4DuptBx4APo79IjdlqL2n44CrgG8Br9bBa8rT9gArgX8A5mMHd15DgVOBK4BbgPV18LrqoVUhrQB4mXzv6sOAn0aq9afAtcDwHPVm0QxcAqyI9LqytvXAnxTw+rtMBD4J/F8dvNZYrQppBcBHyO9sbHygrBpXA+c71OniTGBpCa8pT1sB/D7lDlDPov6+D2W0KqQTAL8ChuDmsRLq24idorqc4vv6APBcznpDt18DHyz6hfbjY33UNZhbNaXLgI9iA0guHg5ZSC/uBd4F/Cf2gynbf2NXP+6OsG+AR4DTge9F2j/YWUByUgqA5z36/jJYFQd6E/gosAC7MhHT68BCbNzhzZL22QHcCFwEbClpn71pAmZG3H80KQXA6x593whWxX67gHnA1wvYto87gfdjlxWL9kngi8Q56+nuNOBtkWuIIqUAOCZS395sA94LLA+83VCWAXOxOQZF+TvgywVuP48kT/8hrQA4x6PvWcGqsINqPrAm4DaL8Dg2KLe3gG3fDnymgO26SjYAIJ2rAPuAkx2+P8OwKwghatgDXOhQQ0yhR8c3Yt/TelHBZhHG/v2M0ZK6CjAE+HuHfjcQ7vPhJ7CrEaE1Udz9C7dhU6ZD+RR+4zGhnQG0xC4iltTuBVgAPIFNB81iHvDXgfb9XeArgbb1TuBKYAY2xfUo7GfZjl2xWIldUnsES3pfN2BnLid6bucxbDqyr6HYJKbp2Iy+Fmze/27s3XwHNuV5HTaxqr8rDLMD1NPQqsQ/FSm7fQm7YaYvQ7ER6t8E2t9GwrzLTAYexOYzZNnvemxWXQgX4D8jcoZnDS3A3wJbc+53ExY8l3Hwx48lnq+pkVsV0gyATmzm2a3YQNc5wLuB3wW+ALwQeF8hDsIbcQ+kuwhztne34/47sYPQZ5bjHOy2bd+fRRtwD3bq34wNysb+XYzVqpBuAJTVHsFPEzZXwLeO7wOHe9ZyAjZJyGX//+qx33nYAGrIn0sH8JPA22y0VgUFQJFtL3AKfm4LWM9j+IfAlxz37Xqp7Wga7xbmRmlVUAAU2b6Jn8sLqOmfPWsaS/5343bcb8T6cs59qWVvSV0GLFsn8E8e/cdiYxShfRy/iS/bgPtz9nkJtxuxmoAPOfSTjBQAxXkUW9TD1e0Us5RXBRtT6O8qyEDyBtNWx/0cAxzr2FcyUAAU56sefecAF4cqpBfjsdV2XK3C1iXMyvVOv2Qn6JQltYlAz2Kn5nmdQL7Bs53YqLurP/Pom9X12MKo+xz7f4fsA5yuZwDbHftJDlXiD0aU1Q5z/B6tyrkfn6mzE8k+0ce3+Xy+nppjP66XAJsIdx+G2sFNg4AFudej7yco76PZn3r0fRp4MePXjnXcRye2WpEURAEQ3hvY9XYXQ7B1ActyLrZkuKvlGb/ONQDAlgOvp5uHBhUFQHgrcV9S6xzseQRlacIGHF2tyPh1Lrdhd3keuxmp02Mb0gcFQHg+t/v6HIwx9vnDjF93LLboqauvYvdCdHhsQ3qhAAhvtUffi4JVkd37cL9J5zmyLxs233EfXW4Gfg97DJgEogAIqxP4mWPfkYRdeiyrMdjzA121Zvy6D3jso8uD2AKe30QfCYJQAIS1CbtxxcUk3OfL+5rk0TdrAEwjzOIbW7HFUGaSfQxC+qAACMv13R/swZ+xTPTouyHH137WYz89rcBWVp4J/CDgdpOiAAjrBY++jRoAec54pmOf40P6IbZc2XT2P99PMlIAhLXZo2+jBkDeJxrdgd/cg778CFs4ZBo2VqAgyEABEJZPAPguuOljnEffvGMeR2PPQCxqvOPH2NJu56AgGJACICyf59sdEayK/EZ49HUZ9DwfvyXCsngSC4L3AP9b8L4algIgrHaPvj735/sa7tHX9aGmH8Mm+BT9OPQngLOxVZ59fj6DkgIgLJ+HiPq8C/tqxv1OSdfLngDXAV+j+Mufb2FrGU4h++zFJCgAwmrUAAD3M5A2z/1+BLsl3WccIquN2BWDxSXsqyEoAMLa49ivmfiLs7ieih8SYN/nYcunzQuwrYHsw9ZFvAZ7zkLSFABhuT6fbx/u4RGK6+dj32XGu7wNW0WpqLUQe/oacDVui5UOGgqAsFw/R4P/qbSPDtw/vvi85p4qwLXY0m1/TPG/n9/GFmBJlgIgrEYNgN24Xy8PdQbQ3VHYA1GeAi6h2CsFi4EvFrj9uqYACMvnYIgZAD6Xx0YFq+JgU7FnELQCCylunOTT5FvleNBQAIR1jEffXcGqKHffZazbPxn4d+AX2EcE17GWvvwG+EMSHA9QAITlczA8F6yK/H7h0bfMB3eMxwYJ1xM+CJ7AnqKcFAVAWD4Hw7pgVeS33qNvETf2DGQ8+4PgGsL9Hv9LoO00DAVAWG/36BszAJ716FvGBJ6+jMfuLlyJfUzwtYbEFhlRAIR1qkffnwerIj+fAPBZTiyUadgNP5cH2NY9AbbRMBQAYU3G/Xv6PHHWv+/EfQS8Cb/QC+kw4D+ARZ7beTxALQ1DARDW4cA7HfvuI/uDNkJ6Gvdn8J1M/HsYuqtg1/Qv8djGOhJ6JqECILyzPfo+FKyK7P7Ho+/UYFWEU8HGBY702MaTgWqpewqA8N7r0XdJsCqy8wkAn9dapBbgLzz6/ypUIfVOARDeTI++z1Pu1YA2bATd1YWhCinAZR59k3n4iAIgvJOBEzz6lzkKfS+w17HvOPwWEy3aibhflvVZ5KShKACK4TMI9W+Uc19AJ7ZKjqu5FL+cly/XiVmx12YojQKgGAs8+u4E7gxVSD+W4ncDzJWhCimQ64Hsc09HQ1EAFOMs4CSP/rfgfmqe1c0efY+nfgcAu3NdpXls0CrqmAKgGE3AH3n03wTcFKiW3nwXv8dpXUn9/+78GnjJsa8CQLxdi99y25/D71HjfdmKXzg1Y0t617vv4X57r889HQ1FAVCcFmzFW1dvAR8m7IBgJ/BR/Ga6XQm8I0w5hXkD+IJj31NQAEggn8JvlaDnsBtcQjzQorNWj89sw6baNlx9Dljl0T+rv8TmVLj4YMhCGkEV++VIobmu2bfKY59/5bjP7t4NbPOoYQ9hRu0XetSwj/3PHpiD3Xbb4bG93tpb2PJePp4MXFM9tyooALLwCYCd2JLXvk7CbnnNu/8twOwA+x8NvOyw/67W2/P5xgN/jo11+IbBM9jzBXy8I0AdjdSqoADIwicAOoH7HPfbUwVbu25Nhn1uAf6GcHfrLc6wz/7aQKvtjMMmUH0eu0Kxc4DtdWArAn0dm34dYlLSbZ6vsdFatQkLgJkBvnmN4HDgTYd+q7BFJ3x8GLtfPZR3Ye94pwFjsOfrvQJswN5RH8dOu0O4CLtRyWfMaAE29TiP0dhdfV3tMOA1LBxewP3BpL05HVuGvOjnFNaT5aAzgCx8zwA6gR3Y/PRG83bs7jjf1x9z6bAsUjoOulpVVwHK0wI8iL2rNYrDsHdt3zGMXwKb/cspzBWkcxZ8AAVAuSZjD7oIva59EQ7BZgy+J8C2fG45LtoMyrn3oi4pAMp3AfBfFPNIrVCGAt8i3NN663WdvdOBB4BhsQuJRQEQx3zgYerz48BR2CpBISfE1GMAnIzdEVmPP4PSKADimYGN1p8eu5BupmBPyJkVcJs7qL/n7n0I+DEJ3fTTFwVAXBOxEIh9c00zNn32J9g7Y0g/wkac68Fo4BvYY8F9Fg0dVFK6/BHzMuBA7XFsym/ZZmLXv4t6XVuBG4i7fPgQ4FJgI8W9zkZsVVAAZFFGAHRic9m/AZzhWGces7GJIGV971/BbgYqcx3BFuBG7DJk7N+9emxVUABkUVYAdG8rgauwX+JQTgI+g02hjflzWI+tSDST8OvvtWCDrF/B7qKM/TtXzy25qcDLsDnkeZ0FjApcS1b7sHGCpdgNNa3YqexARmBPKToNOB9bwmtCQTX6eBN7LuIa4Ge19iw2eNjfo9IOx65YHIUNpJ4LTMfu59fYVjbLUwuAwaINWzbstdqf24FDsYN+BLYa7ljqf9XegezB5vu/WvvvcPbfF1DP8ygaxfJklj8eZEZi73SD3aHYCr3JrNJbNp0qiSRMASCSMAWASMIUACIJUwCIJEwBIJIwBYBIwhQAIglTAIgkTAEgkjAFgEjCFAAiCVMAiCRMASCSMAWASMIUACIJUwCIJEwBIJIwBYBIwhQAIglTAIgkTAEgkjAFgEjCFAAiCVMAiCRMASCSMAWASMIUACIJUwCIJEwBIJIwBYBIwhQAIglTAIgkTAEgkjAFgEjCFAAiCVMAiCRMASCSMAWASMIUACIJUwCIJEwBIJIwBYBIwhQAIglTAIgkrALsjV2EiESxrwK0x65CRKJoqwBtsasQkSgUACIJa6sAr8auQkSi2FkBNsSuQkSi2FAB1sWuQkSiWNcEjEYfA0RS1FIBdgJbY1ciIqXaRm0MAGBlzEpEpHQrYf9U4GrEQkSkfMtgfwAsi1iIiJSvCtDU7X9sBo6LU4uIlGgLMA4OvBvwvji1iEjJ7u/6Q/cAuCdCISJSvru7/tDU4x+eAaaUW4uIlKgVOLXrLz0XBLmr3FpEpGQHHOM9zwBGAS/W/isig8suYDw2+Q84+AxgF7C4xIJEpDyL6Xbww8FnAABjgBeA4SUUJCLl2I29+2/v/j97WxR0O3BrCQWJSHlupcfBD72fAQCMANYCxxdZkYiUYhNwCr2s/9nXsuDtwKIiKxKR0iyij8V/+zoD6PIQMDd4OSJSlqXAvL7+caAAGAc8jQ0Mikhj2Q6cAbzU1xcM9GSgzcDVQEfAokSkeB3AQvo5+AGGZNjQBmAYMCNAUSJSjn8Ebhvoiwb6CNClGXgAjQeINIKlwMXAvoG+MGsAgJ0F/ACY5liUiBRvNXAhNvFnQHkCAOBIYAW6Y1CkHq0FzgN2ZO2Q9/HgO4A52C2FIlI/1gLvI8fBD/kDAGw5ofOxUw0RiW819s6/JW9HlwAAS5kLsMEGEYlnKfaZP9c7f5cslwH7shf4NnAocC75xxNExF0HdqnvWmCP60ZCHbTzsZVGNGNQpHjbsUk+S3w35PoRoKclwFT0kUCkaEux6b3eBz+ECwCwacPzgEux2w9FJJxN2LE1jwGm9+bhMwbQl58Dd9S2fQZwSAH7EEnFbuAWYAGwJvTGix64G4Pdi3w9WmhUJI+u9TlvoZeVfEIpa+R+FHAdNnChWYQifWvFBtTvoMcCnkWIcenuTOwW40vRswhFwCbw3I89seepMncc+9r9ZGAWMBuYDoyNW45IKbYBK7GnclexcbMoYgdAT6OBSbU2ofb3kd1ac7zSRDLbB7R1azuxdTXW1Vrhp/ZZ/T/+hDPV0bsMpgAAAABJRU5ErkJggg=="
	}, function(e, t, a) {
		e.exports = a.p + "static/media/opera.7f83dcf1.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/package.9519f5a5.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/package2.301bcc16.png"
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKIklEQVR4nO3dXYhcZxnA8eedmXNmT4ZdbDZ4ETUmu7Zo62K23aKs1K8mwaxXEiQQg5c2KIoXSm+EDUWwYG8UL0S8bm+kuQi0pGEdlBKVfFREljVl6GY3SusWbHeXnc7HmdeLZrTpqcluzjv7vnOe/++uh+lzHgr7z8y8e1IRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANmfC8Av+r1+r73X0vT1L7/WrfbzVyr1Wrbet37r3U6ncxrxsbGMtc+6HXtdvuu18bHxzOvabVamWvNZjNzbXNzM3NtYmLitmsbGxuZ16ytrWWuLS4uZq7Nz89nrhljMtd2y64FYGlpaTRJkuPW2iMiMi0iEyJy327ugKxGo+F7BdWMMVIqlWy5XN6KouhGpVJ5oVqtPjM1NfXGrtx/0DdYWVmZ7PV6T4rIN0Vkz6Dvh50hAOEplUq2Wq0uxnF8ZmZm5uVB3mtgAVhdXU3SNH1KRH4gIpVB3Qf5EIBwGWOkVqtdiuP4a9PT028N4h6lQQxtNBoPpGl6WUR+KPzwA/fEWiubm5uzm5ub/7x27doXB3EP5wFYXl5+uFwu/1FEHnI9G9Co3W4n6+vrv7t69epJ17OdBqDRaDwgIhdFZK/LuYB2aZqW1tfXn7t8+fJRl3OdBWB1dTUpl8vnhB9+YCB6vZ5pNpvnr1y5kjm6vVfOAnDrC78HXc0DkNXpdKqdTueCq3lOArCysjIp737bD2DAms3mw1euXDnmYpaTANw65+fbfmAXWGul0+n80sWs3AFYWloaFZHTDnYBsE3NZvP+S5cufSTvnNwBqFarcyKS5J0DYPustVIul5/MO8fFR4CvOJgBYIfSNM39PUDuABhjHsk7A8DOpWn6sbwzXLwDOORgBoAd6na7uT96uwjAfQ5mANgha23uh/lcHN3lWuL44ocdrIB7dX3D2S+V4R68tO/P9/zvWpv/7xEZyNOAAIYDAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiBABQjAAAihEAQDECAChGAADFCACgGAEAFCMAgGIEAFCMAACKEQBAMQIAKEYAAMUIAKAYAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiBABQjAAAihEAQDECAChGAADFCACgGAEAFCMAgGIEAFCMAACKEQBAMQIAKEYAAMUIAKAYAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiBABQjAAAihEAQDECAChGAADFCACgGAEAFCMAgGIEAFCMAACKEQBAMQIAKEYAAMUIAKAYAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiBABQjAAAihEAQDECAChGAADFCACgGAEAFCMAgGIEAFCMAACKEQBAMQIAKEYAAMUIAKAYAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiBABQjAAAihEAQDECAChW8b3Aiw/+y/cKqjUaDd8rwCPeAQCKEQBAMQIAKEYAAMUIAKAYAQAUIwCAYgQAUIwAAIoRAEAxAgAoRgAAxQgAoBgBABQjAIBiLgJgHcwAsEPGmNwzXATg3w5mANghY0zuP3xdBOA1BzMA7FC5XN7KO8NFAP7iYAaAHYrj+EbeGbkDYK1dyDsDwM5VKpUX887IHYBer/eCiLyTdw6A7TPGSLVa/VneObkDMDk5+baIPJd3DoDtS5JkcWpq6o28c5z8HkCapk+LSOpiFoC7i6LoCRdznARgcnLyuoj8wsUsAHdWq9X+NDMz87KLWc5+EzCO4x+LyKKreQCyoih6p1qtHnc1z1kA9u/fv5Wm6ddF5E1XMwH8T7lc7o2Njc1NT0+/5Wqm02cBbn0UOCZEAHCqVCrZWq12+vDhw3Wnc10OExE5ePDgK6VS6XMi8lfXswGNoihqjY6OfvXRRx91fto2kKcBDxw40LDWftYY81MR6QziHkDRGWOkVqtd3bNnz0dnZmZeGsg9BjH0vZaXlw+JyI9E5FsiUhv0/bAz/N+Bw2OMkSRJrkdR9L1B/eD/916DHP5er7/+eq3Vas2JyOPW2kdE5JCI7N3NHZBFAPwyxkipVLLlcrlZqVRuViqVlzqdztOzs7P/2JX778ZNsHMLCwtPi8iTg77PzZs3xdrB/pUOSZJcHh0dPdL/57GxscwNO51O5lq73d7WtfHx8duutVqtzGuazWbm2ubmZubaxMRE5trGxsZt19bW1jKvWVxczFybn5/PXHPxCK9LFd8L4P96aDdukqaD/wXObrd7YG5ubn3gNwrM2bNnfa9wV/yVYOF60PcCrnS73b2+d8AHIwABOn/+/B559zuSQkjTNHr22Wf3+d4DWQQgQLVa7VNSsO9nqtXqMd87IIsABMhaW5i3/33dbvcx3zsgiwCEaVe+ANxN1trDvndAFgEIU+ECkKZpYb7TKBICEKYifgTgJCBABCAwRTsB6OMkIEwEIDBFPAHo4yQgPAQgPIX7/N/X6/W+4HsH3I4ABKaIR4B9aZp+xvcOuB0BCE9h3wFwEhAeAhAYY0yRA8BJQGAIQEAuXLhQs9Ye9L3HoHS7XU4CAkMAAhJF0SeloCcAfZwEhIUAhKWwb//7OAkICwEISJFPAPo4CQgLAQhL4d8BcBIQFgIQkCKfAPRxEhAWAhCIWycAhf/TkZOAsBCAQNw6AVCBk4BwEIBwFP7tfx8nAeEgAOFQEwBOAsJBAAKh4Qiwj5OAcBCAQGg4AejjJCAcBCAAWk4A+jgJCAcBCICmE4A+TgLCQADCoObtfx8nAWEgAGFQFwBOAsJAAAKg6QSgr9frqfnOI2SFfvbch4sXL04ZY84YY46IyEERiT2vdEc3btzwvcJdVSqVThzHr0ZRNH/ixInf+t6nSAiAI/V6fcRa+4y19jsyRP9dhyEA75Ukyd/SNP386dOn133vUgR8BHCgXq+P9Hq9F6y135Uh+uEfRs1m89PGmNfOnTv3Id+7FAEBcCBN05+LyJd976FFq9Xa22q1/uB7jyIgADktLCw8bIz5tu89tNna2pp6/vnnv+F7j2FHAHKy1j7hewet2u32Wd87DDsCkJMx5ku+d9Cq3W7f73uHYUcA8vu47wW0StM08r3DsCMAGFrWWt8rDD0CkN+y7wW0qlQqbd87DDsCkF/d9wJaxXH8d987DDsCkFOv1/u17x20iqLoKd87DDsCkNPRo0dfEZHf+N5Dm5GRkSWeC8iPADiQJMn3ReT3vvfQIo7jt0XkMd97FAEBcGB2draZJMlxEfmV712KbmRkZKlUKn3i1KlTb/repQh4cMWxer1+2Fp7xlr7uLz7OHDF80p3FPrTgMYYKZfLnTiOXzXG/OTkyZPP+d4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgO/4Doqlysf1R0IwAAAAASUVORK5CYII="
	}, function(e, t, a) {
		e.exports = a.p + "static/media/raspberry-pi.bf1d66b6.png"
	}, function(e, t, a) {
		e.exports = a.p + "static/media/safari.9611a953.png"
	}, function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAD9tJREFUeJzt3XmQFFWCx/FfZlZ1I3KjnPZyi8jZg4gCgkIbIMx4rAKOOqOxGq4zG8bsxuzurBuOrjFrrHtEjLuxE+G6w6wHjqGMgCiCKCCH4KCGIIcthyCNKPfdR1Xle/sH9i4qaGVVdlVXv+/nL+3IfPn4o75VlS8rUwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQUF7BjjTh4cSw8uqbfekaSYOt/M6Bta3leYmCzQFobqzNhJ5X68kckrQ5yGjp+8teeEmSKcThmzQAEyZMaHW8rPsD1vPuSviJCnle4YIDlChrjbWh3R0q81T34Ng/LV68uKGpjtUkL8ih027rmEyZ31oveUMQeEFTHANwgTEmY0w4N7CZe99/c86xuMeP/cVZee2MR3wlFgRBYrDve37c4wMu8TzP9/1gsPG8n3fre6m++GTzyljHj2ugUZN+1DkThGuDIDEgrjEBfFUmnam26eSVG1Y8fTSO8WIJwIhrZgz3kmVrg8A/L47xAJxbGIa1Ca/+8ndff2lzvmPl/RF9WNUPx3nlZe/x4gcKIwiC1hmVfzDs2ltH5ztWXp8AKqtmDlIQbAj8RDLfiQCIxoYmZRo0+IMVs7fnOkbOnwCmTJlSLiXf4cUPFIcX+GVeuXl35Mh7c34N5hyA/WGn5UHSb5fr/gDy5weJDqbTiSU575/LTsMmzZzpJRJX5npQAPEJEsmrKyf+8Ae57JtTAAIv+SSX9AHNSNJ/KpfdIgdgRNXMv+ajP9C8BH7QqbLq1vui7hc5AJ6f+EXUfQA0Pev5D0fdJ1IAho2/tTLwgwuiHgRA00skEt2GTr59YJR9IgUgUa4HC/gDYgARJcLwl1G2jxQAI39MtOkAKCTP04Qo20f7BBAEXaNNB0AheV7QI8r2WQdg1OSbB3NDD6B584LAr5x6W69st886AGGY5OM/UApS4fhsN806AMaz3XKbDYCCMrZ7tptmfw7A2o45TQZAQXmB3ynbbbMOgBV37wVKQWhs1q9V7tkHOIwAAA4jAIDDCADgMAIAOIwAAA4jAIDDCADgMAIAOIwAAA4rmQC0b9dGQcCTxoE4lUwARgwZqCf++QFdNnxQsacCtBglEwBJqujZVf/4dz/Vr/72Pl3Ug5sTAfkqyV/4jaocrMqhl+iVN1bquT8s0snaumJPCShJJfUJ4EyJRKCbrrtGsx5/SNOqxsn3S/afAhRNyb9q2rdto/vvnqnfPPYLjRh8cbGnA5SUkg9Aoz4VPfTYg/froZ/fo+5deXYJkI2SPAfwbcZcNlyjhg/WvEVv6fl5i1VX31DsKQHNVov5BHCmZDKhGddX6Xe/fkiTr75SPnczB86qRQagUccO7fRXf36b/uPRv9GQgf2KPR2g2WnRAWjUv0+F/u0f/lJ//7M/U5fO3NwYaOREABqNv6JSv/31g/rR9GkqL0sWezpA0ZVMAI4dO6EwDPMepyxZptv/dIp+9/hDmnjVKJ52Bqdl/euabn2HXBcEidFNOZlv88WBQ1q9boMu6t4llmW+1ue10thRwzVy2CDtqtmrQ4ePxTBLoPhMGK7dt3Pzkmy2LZkASNKx4ye1dNU6ffLpXg3s30ttzm+d95gXdu6gKddcqR5dL9DH2z9l2RAlr8UGoFHN3n1auHS10umMLunfW4lEfj8T9jxPfXv1/PKSYk/VO3bLhCam2QKF1eIDIEnGGG2q3qE3VqxT5w7t1ftPIj0W/awSiUDDB1+sSeNG6fCRY/p0zxcxzBQoLCcC0Kiuvl6r163X+k1b1a/3RerUoV3eY7Y5/zxddUWlRgy5WDs+/UxHjh6PYaZAYTgVgEb7Dx3R4mVrdPDIUQ0a0EetysvyHrPLBZ103aSxurBzB1Vv3636Bs4PoPlzMgCSZCVt31mjxUvXqKysTAP6VuT9M2HP89S/T4WmThqr0Fht+2S3jOH8AJovZwPQKJXO6L0NW/R2jMuGyWRC3xt6ia4eM1L7Dx7Rns/3xTBTIH7OB6DR/y0b7t6rgf3iWTZs2+Z8XT1mpAYP7KcdO/fo6PETMcwUiA8B+Jqavfu0cNnbSqfTsSwbSlL3rhdoatVYdWzfTtU7dqkhlY5hpkD+CMBZmPD0suGbK9epU0zLhp7n6eJ+vTRl4hilUxlt21kja20MswVyRwC+RW3dl8uGm7epf58KdYxh2bC8LKnLRlyq8aMr9fm+A9q772AMMwVyQwCysP/gYS1a+nasy4bt27XRxHGjNLBfL23bWaPjJ07FMFMgGgKQpaZYNpSknt27aOqksWrbtrU+3rZLqXQm/8kCWSIAEZ25bFjRo6u6demc95i+72vQgD6aPPFK1dU1aMeuPZwfQEEQgBwdO35Sb8a8bNiqvEyjvzdEYy4frs/27tcXBw7FMFPg3AhAnhqXDTOZtC4Z0EeJGB5K2rF9W1WNH62+vXtq6ye7dfJUbQwzBb6JAMTAhEYbP9qhN1f+UZ07tlfvivyXDSWpokc3TZs0Tue1aqXq7buUyeR/lyPgTFECUDK3BCuWg4eP6j//50Vt/GhbbGMmkwnd8oNJmnH9tbGNCeSixT0YJE6+72tq1VjdOf37atsm//MBjTZVb9cTz8zV9p01sY0J5IIAnMOwS/vrvjunq28MVww22nfwsGY9N18r3/kgtjGBfBCAr+nSuaPuueMmjb+iMrYx6xtSmrPgDb346lKl+c0AmhEC8KWyZJlm3DBJM66vUlky/6sCJclaq+Wr39Os5xfo0JGjsYwJxIkA6PQDQ+6+/UZ1vaBTbGNWb9+lJ55+SdXbd8U2JhA3pwPQp6KHfnLXdA27tH9sYx46clSznl+g5avf48o/NHtOBqBtm9a6c/r3NbVqbCzX/ktSOpXWnFeX6cUFS1TfkIplTKCpORWAxmW9H98yTe3anh/buCvf+UCznpuvfQcPxzYmUAjOBGDooAH6yV23xLqst31njZ54Zq42VW+PbUygkFp8AJpiWe/oseN66oWFWvLWWhm+56OEtdgANMWyXjqT0fxFy/X8vCWqrauPZUygmFpkAK4aPUL33HFTrMt6a9//UE8+O0+fc7svtCAtKgB9Knrovrtu0fBLB8Q25q49e/XE0y9p/aatsY0JNBctIgBt27TWj6dP+/LpvvEs6x07cVLPzlmo15au4UlAaLFKOgBNsawXhqFeeWOVZs95TSdr62IZE2iuSjYAQwcN0E/vvFl9evWMbcx312/Rk7PnquYzHvsFN5RcAJpiWa/ms316cvZcvbt+S2xjAqWgZAKQLEtq5vVVsS7rnayt0+w5r+mVN1YpDLk1F9xTMgEYc9kw3XHz1FjGMsbotaVr9OychTp24mQsYwKlqGQCEJf1m7bqv555STtr9hZ7KkDROROAz/cd1H/Pnq81720o9lS+YsKYkcWeQuw2V+/QwcPcAKUUtPgA1NU36PdzX9f8RcuVzjS/R3Q9cP9dxZ5C7B59fJZW/XF9saeBLLTYABhrteSttXrqhYU6eux4sacDNEstMgDcdhvITosKALfdBqJpEQGob0jpxQVLNOfVZdx2G4igpAPAbbeB/JRsALjtNpC/kgsAt90G4lMyAUg1pPX7ua9z220gRiUTgLXvf6i1739Y7GkALUrJBKClevTxWcWeQuy2bN1V7CkgSwSgyLhkFsUUzw30AJQkAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADiMAgMMIAOAwAgA4jAAADss6AL6sbcqJAIhL9u/rWW9p5TfkNBcABeXJ1me7bfYBMMp6UADFY41pigCEB3ObDoBCCm36QLbbZh2AjDUHJE4DAM2blcmEh7PdOusAeKGx1pjc5gSgIExopAjv1JGWAcMwE3U+AArIhOlI20cKgMkQAKA5C8Mw0vbRAmBCWcvXAKA5MsbImiYMgCSFqVTUXQAUQJiOfqlO9ABkUrJcFAg0K9YYhZlo3/+lKJcCBwql06cXMymuCQKak8wZ7/6+vKxP1mX/CcDak43/GWbSMoYTgkBzYMLMV979veD/X6vfJfsAeN6RM/83XV/PVwGgyKy1SjfUffWPoX/k7Ft/U9YBCMJgx1cPbE4fmAYARWElpeprv/FGXNYquT3bMbwoBxwy7vqD8v3OZ/7NDxIqa9U6yjAAYpCur1P4zQt/9m5aOb9ntmNEWgWwvrf6638zYUaphlo+CACFYq1S9bVne/FL0qooQ0UKgGe9N8/2d5PJKF13iouEgCZmrVFD/SmZc1yWb60962v0XKJdB5AM5xhz9kuNjAnVUHdKYYYLhYCmkMmklao7pXP/KM+kwjJvXpQxIwVg07JX9vm+Fp1zA2uVbqhXqv4Uy4RATEx4+s0101D37Stvxnu1eun8Q1HGjnwloGf1r9+1jQlDpepqlao7pTCTZrkQiMwqzKSVqj+lVP2prK7xD2X/JepRIq0CNBoy7sZl8nVNlMP4QSA/SMj3fHm+L3mePHk5zgBoIaxkZWWtlbWhrLEymYxOf9OO8MZp7eJNq16+LurhE1F3kKTQhvd7Jljv+9nub2XCzDlPXADIh0n51v9ZLnsGuex0sGbrga69L/ElXZ3L/gBiZL1fblw9/+Vcds35wSCbVg7/lYyW57o/gDiYJZtWzX8s173zeDLQI8ZkErdI2pL7GAByZYw2Bp43U3lckJ/Xo8G2vPOHw57nTbYyW/MZB0A0xtjq0JgpG1a8fDSfcfJ+NuDGFfP2JE3ZOMmsy3csAN/NGLPWlHvjPl6zYG++Y+V0EvDrvti9pbbdoD7PBumggyfv8jjGBHAWxv67PVx++0fr5mb9m/9vE/sq/NBxN0wKfe83vjQw7rEBh22xnv2LzStefivOQWN/PPjG1S8vPe9Ul6HG071G5pO4xwecYs0OSXeXn+oyIu4Xv9Tk1+E97A+d8MFEa707ZDRZvtetaY8HtATmcyv/dd/Y2RtXj1guPdJkP7Mt6IW4g8ffOEjWDvM8b6CVvdCzXjt5Ki/kHIBmxarBeva4Z7VfnvexlTZuXjn/o2JPCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAT+V+XW3k1rfxVhAAAAABJRU5ErkJggg=="
	}, , , function(e, t, a) {}, , , , , , , , , , , , , , , , , , function(e, t, a) {
		e.exports = a.p + "static/media/rq-icon.5057b8d5.png"
	}, function(e, t, a) {
		"use strict";
		a.r(t);
		var n = {};
		a.r(n), a.d(n, "getAppVersion", (function() {
			return bl
		})), a.d(n, "isAppInstalled", (function() {
			return gl
		})), a.d(n, "getStorageSuperObject", (function() {
			return Rl
		})), a.d(n, "getStorageObject", (function() {
			return hl
		})), a.d(n, "saveStorageObject", (function() {
			return Cl
		})), a.d(n, "removeStorageObject", (function() {
			return Il
		})), a.d(n, "clearStorage", (function() {
			return Ll
		})), a.d(n, "startBackgroundProcess", (function() {
			return _l
		})), a.d(n, "saveRootCert", (function() {
			return vl
		}));
		var r = {};
		a.r(r), a.d(r, "getExtensionVersion", (function() {
			return Pl
		})), a.d(r, "isExtensionInstalled", (function() {
			return Ul
		})), a.d(r, "getStorageType", (function() {
			return wl
		})), a.d(r, "getStorageInfo", (function() {
			return xl
		})), a.d(r, "getStorageSuperObject", (function() {
			return jl
		})), a.d(r, "getStorageObject", (function() {
			return kl
		})), a.d(r, "saveStorageObject", (function() {
			return Ml
		})), a.d(r, "removeStorageObject", (function() {
			return Gl
		})), a.d(r, "clearStorage", (function() {
			return Fl
		})), a.d(r, "setStorageType", (function() {
			return Bl
		})), a.d(r, "getRemoteRulesSettings", (function() {
			return Vl
		})), a.d(r, "setRemoteRulesSettings", (function() {
			return Hl
		}));
		var l = a(1),
			c = a.n(l),
			o = a(33),
			s = a.n(o),
			i = a(17),
			u = a(4),
			m = {
				UPDATE_USER_INFO: "update-user-info",
				UPDATE_APP_MODE: "update-app-mode",
				UPDATE_SEARCH: "update-search",
				TOGGLE_ACTIVE_MODAL: "toggle-active-modal",
				UPDATE_BACKUP_INFO: "update-backup-info",
				UPDATE_GROUPS: "update-groups",
				UPDATE_RULES_AND_GROUPS: "update-rules-and-groups",
				UPDATE_REFRESH_PENDING_STATUS: "update-refresh-pending-status",
				TOGGLE_SELECTED_RULE: "toggle-selected-rule-2",
				SET_SELECT_ALL_RULES_OF_A_GROUP: "set-select-all-rules-of-a-group",
				CLEAR_SELECTED_RULES: "clear-selected-rules",
				UPDATE_RULES_TO_POPULATE: "update-rules-to-populate",
				UPDATE_GROUPWISE_RULES_TO_POPULATE: "update-groupwise-rules-to-populate",
				UPDATE_CURRENTLY_SELECTED_RULE_DATA: "update-currently-selected-rule-data",
				UPDATE_CURRENTLY_SELECTED_RULE_CONFIG: "update-currently-selected-rule-config",
				CLEAR_CURRENTLY_SELECTED_RULE_AND_CONFIG: "clear-currently-selected-rule-and-config",
				SELECT_ALL_RULES: "select-all-rules",
				UPDATE_SELECTED_SHARED_LISTS: "update-selected-shared-lists",
				UPDATE_MARKETPLACE_RULES: "update-marketplace-rules",
				TOGGLE_MARKETPLACE_RULES: "toggle-marketplace-rules",
				UPDATE_DESKTOP_SPECIFIC_DETAILS: "update-desktop-specific-details"
			},
			E = a(9),
			d = {
				SHARED_LISTS: "shared_lists",
				RULES: "rules",
				ACTIVE_RULES: "active_rules",
				RULE_PAIRS: "rule_pairs",
				GROUPS: "groups",
				FILES: "files",
				EXPORT_IMPORT: "export_import",
				ADS: "ads",
				LOGS: "logs",
				FAV_RULES: "favourite_rules",
				RESPONSE_BODY_CHARACTER_LIMIT: "RESPONSE_BODY_CHARACTER_LIMIT"
			},
			p = d,
			S = a(2),
			A = {
				REQUESTLY_DOCS: "https://docs.requestly.io/",
				REQUESTLY_DOCS_USING_RULES: "https://docs.requestly.io/using-rules/",
				REQUESTLY_DOCS_SHARING_RULES: "https://docs.requestly.io/managing-rules/sharing",
				REQUESTLY_DOCS_FILES_SERVICE: "https://docs.requestly.io/library/introduction-to-library",
				REQUESTLY_DOCS_PREMIUM_SUBSCRIPTION: "https://docs.requestly.io/premium-subscription",
				REQUESTLY_DOCS_TEAM_SUBSCRIPTION: "https://docs.requestly.io/premium-subscription#for-teams",
				REQUESTLY_DOCS_BACKUP_DATA: "https://docs.requestly.io/managing-rules/backup-and-restore",
				REQUESTLY_BLOG: "https://requestly.io/blog/",
				REQUESTLY_DESKTOP_APP: "https://requestly.io/desktop",
				REQUESTLY_PRIVACY_POLICY: "https://requestly.io/privacy",
				REQUESTLY_TERMS_AND_CONDITIONS: "https://requestly.io/terms-conditions/",
				CONTACT_US: "mailto:" + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL,
				REQUESTLY_GITHUB_ISSUES: "https://github.com/requestly/customer-support/issues",
				CHROME_EXTENSION: "https://chrome.google.com/webstore/detail/requestly/mdnleldcmiljblolnjhpnblkcekpdkpa",
				FIREFOX_EXTENSION: "https://app.requestly.in/firefox/builds/requestly-latest.xpi",
				GDPR: {
					EXPORT_DATA: "https://requestly.gdprpage.com/subject",
					DELETE_ACCOUNT: "https://requestly.gdprpage.com/subject"
				}
			},
			T = {
				MODES: {}
			};
		T.MODES.CREATE = "create", T.MODES.EDIT = "edit", T.MODES.SHARED_LIST_RULE_VIEW = "shared-list-rule-view";
		var f = T,
			O = function(e, t) {
				return e.concat(t).replace(/\/\//g, "/")
			},
			N = {
				ABSOLUTE: {},
				ROOT: "/",
				INDEX_HTML: "/index.html",
				ANY: "*"
			};
		N.DASHBOARD = N.ROOT, N.LANDING = "/en-us", N.OVERVIEW = {}, N.OVERVIEW.RELATIVE = "/overview", N.OVERVIEW.ABSOLUTE = O(N.DASHBOARD, N.OVERVIEW.RELATIVE), N.ONBOARDING = {}, N.ONBOARDING.RELATIVE = "/onboarding", N.ONBOARDING.ABSOLUTE = O(N.DASHBOARD, N.ONBOARDING.RELATIVE), N.RULES = {}, N.RULES.RELATIVE = "/rules", N.RULES.ABSOLUTE = O(N.DASHBOARD, N.RULES.RELATIVE), N.RULE_EDITOR = {}, N.RULE_EDITOR.STUB = "/rules/editor", N.RULE_EDITOR.RELATIVE = N.RULE_EDITOR.STUB, N.RULE_EDITOR.ABSOLUTE = O(N.DASHBOARD, N.RULE_EDITOR.STUB), N.RULE_EDITOR.CREATE_RULE = {}, N.RULE_EDITOR.CREATE_RULE.RELATIVE = N.RULE_EDITOR.RELATIVE + "/" + f.MODES.CREATE, N.RULE_EDITOR.CREATE_RULE.ABSOLUTE = N.RULE_EDITOR.ABSOLUTE + "/" + f.MODES.CREATE, N.RULE_EDITOR.EDIT_RULE = {}, N.RULE_EDITOR.EDIT_RULE.RELATIVE = N.RULE_EDITOR.RELATIVE + "/" + f.MODES.EDIT, N.RULE_EDITOR.EDIT_RULE.ABSOLUTE = N.RULE_EDITOR.ABSOLUTE + "/" + f.MODES.EDIT, N.FILES = {}, N.FILES.RELATIVE = "/files", N.FILES.ABSOLUTE = O(N.DASHBOARD, N.FILES.RELATIVE), N.FILES.VIEWER = {}, N.FILES.VIEWER.STUB = "/viewer", N.FILES.VIEWER.RELATIVE = N.FILES.RELATIVE + N.FILES.VIEWER.STUB, N.FILES.VIEWER.ABSOLUTE = N.FILES.ABSOLUTE + N.FILES.VIEWER.STUB, N.FILES.VIEWER.CREATE = {}, N.FILES.VIEWER.CREATE.STUB = "/create", N.FILES.VIEWER.CREATE.RELATIVE = N.FILES.VIEWER.RELATIVE + N.FILES.VIEWER.CREATE.STUB, N.FILES.VIEWER.CREATE.ABSOLUTE = N.FILES.VIEWER.ABSOLUTE + N.FILES.VIEWER.CREATE.STUB, N.MARKETPLACE = {}, N.MARKETPLACE.RELATIVE = "/marketplace", N.MARKETPLACE.ABSOLUTE = O(N.DASHBOARD, N.MARKETPLACE.RELATIVE), N.SHARED_LISTS = {}, N.SHARED_LISTS.RELATIVE = "/shared-lists", N.SHARED_LISTS.ABSOLUTE = O(N.DASHBOARD, N.SHARED_LISTS.RELATIVE), N.SHARED_LISTS.VIEWER = {}, N.SHARED_LISTS.VIEWER.STUB = "/viewer", N.SHARED_LISTS.VIEWER.RELATIVE = N.SHARED_LISTS.RELATIVE + N.SHARED_LISTS.VIEWER.STUB, N.SHARED_LISTS.VIEWER.ABSOLUTE = N.SHARED_LISTS.ABSOLUTE + N.SHARED_LISTS.VIEWER.STUB, N.UNLOCK_PREMIUM = {}, N.UNLOCK_PREMIUM.RELATIVE = "/unlock-premium", N.UNLOCK_PREMIUM.ABSOLUTE = O(N.DASHBOARD, N.UNLOCK_PREMIUM.RELATIVE), N.REFERRAL = {}, N.REFERRAL.RELATIVE = "/referral", N.REFERRAL.ABSOLUTE = O(N.DASHBOARD, N.REFERRAL.RELATIVE), N.BACKUP = {}, N.BACKUP.RELATIVE = "/backup", N.BACKUP.ABSOLUTE = O(N.DASHBOARD, N.BACKUP.RELATIVE), N.REQUEST_UPGRADE = {}, N.REQUEST_UPGRADE.RELATIVE = "/request-upgrade", N.REQUEST_UPGRADE.ABSOLUTE = O(N.DASHBOARD, N.REQUEST_UPGRADE.RELATIVE), N.PRICING = {}, N.PRICING.RELATIVE = "/pricing", N.PRICING.ABSOLUTE = O(N.DASHBOARD, N.PRICING.RELATIVE), N.LICENSE = {}, N.LICENSE.RELATIVE = "/license", N.LICENSE.ABSOLUTE = O(N.DASHBOARD, N.LICENSE.RELATIVE), N.LICENSE.MANAGE = {}, N.LICENSE.MANAGE.STUB = "/manage", N.LICENSE.MANAGE.RELATIVE = N.LICENSE.RELATIVE + N.LICENSE.MANAGE.STUB, N.LICENSE.MANAGE.ABSOLUTE = N.LICENSE.ABSOLUTE + N.LICENSE.MANAGE.STUB, N.SETTINGS = {}, N.SETTINGS.RELATIVE = "/settings", N.SETTINGS.ABSOLUTE = O(N.DASHBOARD, N.SETTINGS.RELATIVE), N.SETTINGS.REMOTE_RULES = {}, N.SETTINGS.REMOTE_RULES.STUB = "/remote-rules", N.SETTINGS.REMOTE_RULES.RELATIVE = N.SETTINGS.RELATIVE + N.SETTINGS.REMOTE_RULES.STUB, N.SETTINGS.REMOTE_RULES.ABSOLUTE = N.SETTINGS.ABSOLUTE + N.SETTINGS.REMOTE_RULES.STUB, N.ACCEPT_TEAM_INVITE = {}, N.ACCEPT_TEAM_INVITE.RELATIVE = "/accept-team-invite", N.ACCEPT_TEAM_INVITE.ABSOLUTE = O(N.DASHBOARD, N.ACCEPT_TEAM_INVITE.RELATIVE), N.ACCOUNT = {}, N.ACCOUNT.RELATIVE = "/account", N.ACCOUNT.ABSOLUTE = O(N.DASHBOARD, N.ACCOUNT.RELATIVE), N.ACCOUNT.TEAM = {}, N.ACCOUNT.TEAM.STUB = "/team", N.ACCOUNT.TEAM.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.TEAM.STUB, N.ACCOUNT.TEAM.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.TEAM.STUB, N.ACCOUNT.MY_TEAMS = {}, N.ACCOUNT.MY_TEAMS.STUB = "/my-teams", N.ACCOUNT.MY_TEAMS.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.MY_TEAMS.STUB, N.ACCOUNT.MY_TEAMS.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.MY_TEAMS.STUB, N.ACCOUNT.PERSONAL_SUBSCRIPTION = {}, N.ACCOUNT.PERSONAL_SUBSCRIPTION.STUB = "/personal-subscription", N.ACCOUNT.PERSONAL_SUBSCRIPTION.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.PERSONAL_SUBSCRIPTION.STUB, N.ACCOUNT.PERSONAL_SUBSCRIPTION.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.PERSONAL_SUBSCRIPTION.STUB, N.ACCOUNT.UPDATE_SUBSCRIPTION = {}, N.ACCOUNT.UPDATE_SUBSCRIPTION.STUB = "/update-subscription", N.ACCOUNT.UPDATE_SUBSCRIPTION.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.UPDATE_SUBSCRIPTION.STUB, N.ACCOUNT.UPDATE_SUBSCRIPTION.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.UPDATE_SUBSCRIPTION.STUB, N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US = {}, N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.STUB = "/update-subscription-contact-us", N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.STUB, N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.STUB, N.ACCOUNT.UPDATE_PAYMENT_METHOD = {}, N.ACCOUNT.UPDATE_PAYMENT_METHOD.STUB = "/update-payment-method", N.ACCOUNT.UPDATE_PAYMENT_METHOD.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.UPDATE_PAYMENT_METHOD.STUB, N.ACCOUNT.UPDATE_PAYMENT_METHOD.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.UPDATE_PAYMENT_METHOD.STUB, N.ACCOUNT.REFRESH_SUBSCRIPTION = {}, N.ACCOUNT.REFRESH_SUBSCRIPTION.STUB = "/refresh-subscription", N.ACCOUNT.REFRESH_SUBSCRIPTION.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.REFRESH_SUBSCRIPTION.STUB, N.ACCOUNT.REFRESH_SUBSCRIPTION.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.REFRESH_SUBSCRIPTION.STUB, N.ACCOUNT.CHECKOUT = {}, N.ACCOUNT.CHECKOUT.STUB = "/checkout", N.ACCOUNT.CHECKOUT.RELATIVE = N.ACCOUNT.RELATIVE + N.ACCOUNT.CHECKOUT.STUB, N.ACCOUNT.CHECKOUT.ABSOLUTE = N.ACCOUNT.ABSOLUTE + N.ACCOUNT.CHECKOUT.STUB, N.GOODBYE = {}, N.GOODBYE.RELATIVE = "/goodbye", N.GOODBYE.ABSOLUTE = O(N.DASHBOARD, N.GOODBYE.RELATIVE), N.FEEDBACK = {}, N.FEEDBACK.RELATIVE = "/feedback", N.FEEDBACK.ABSOLUTE = O(N.DASHBOARD, N.FEEDBACK.RELATIVE), N.ACCOUNT.SUPPORT = {}, N.ACCOUNT.SUPPORT.RELATIVE = "/support", N.ACCOUNT.SUPPORT.ABSOLUTE = O(N.DASHBOARD, N.ACCOUNT.SUPPORT.RELATIVE), N.AUTH = {}, N.AUTH.SIGN_IN = {}, N.AUTH.SIGN_IN.RELATIVE = "/signin", N.AUTH.SIGN_IN.ABSOLUTE = O(N.DASHBOARD, N.AUTH.SIGN_IN.RELATIVE), N.AUTH.DEKSTOP_SIGN_IN = {}, N.AUTH.DEKSTOP_SIGN_IN.RELATIVE = "/desktop-sign-in", N.AUTH.DEKSTOP_SIGN_IN.ABSOLUTE = O(N.DASHBOARD, N.AUTH.DEKSTOP_SIGN_IN.RELATIVE), N.AUTH.SIGN_UP = {}, N.AUTH.SIGN_UP.RELATIVE = "/signup", N.AUTH.SIGN_UP.ABSOLUTE = O(N.DASHBOARD, N.AUTH.SIGN_UP.RELATIVE), N.AUTH.FORGOT_PASSWORD = {}, N.AUTH.FORGOT_PASSWORD.RELATIVE = "/forgot", N.AUTH.FORGOT_PASSWORD.ABSOLUTE = O(N.DASHBOARD, N.AUTH.FORGOT_PASSWORD.RELATIVE), N.AUTH.EMAIL_ACTION = {}, N.AUTH.EMAIL_ACTION.RELATIVE = "/emailAction", N.AUTH.EMAIL_ACTION.ABSOLUTE = O(N.DASHBOARD, N.AUTH.EMAIL_ACTION.RELATIVE), N.AUTH.RESET_PASSWORD = {}, N.AUTH.RESET_PASSWORD.RELATIVE = "/resetPassword", N.AUTH.RESET_PASSWORD.ABSOLUTE = O(N.DASHBOARD, N.AUTH.RESET_PASSWORD.RELATIVE), N.AUTH.VERIFY_EMAIL = {}, N.AUTH.VERIFY_EMAIL.RELATIVE = "/verifyEmail", N.AUTH.VERIFY_EMAIL.ABSOLUTE = O(N.DASHBOARD, N.AUTH.VERIFY_EMAIL.RELATIVE), N.AUTH.EMAIL_LINK_SIGNIN = {}, N.AUTH.EMAIL_LINK_SIGNIN.RELATIVE = "/emailLinkSignIn", N.AUTH.EMAIL_LINK_SIGNIN.ABSOLUTE = O(N.DASHBOARD, N.AUTH.EMAIL_LINK_SIGNIN.RELATIVE), N.LEGACY = {}, N.HASH = {}, N.HASH.SHARED_LISTS = "#sharedList", N.HASH.RULE_EDITOR = "#edit", N.LEGACY.FILES_LIBRARY = {}, N.LEGACY.FILES_LIBRARY.ABSOLUTE = "/library", N.LEGACY.PRICING = {}, N.LEGACY.PRICING.ABSOLUTE = "/pricing", N.LEGACY.LICENSE = {}, N.LEGACY.LICENSE.ABSOLUTE = "/license", N.LEGACY.LICENSE.MANAGE = {}, N.LEGACY.LICENSE.MANAGE.ABSOLUTE = N.LEGACY.LICENSE.ABSOLUTE + "/manage", N.LEGACY.SETTINGS = {}, N.LEGACY.SETTINGS.ABSOLUTE = "/settings", N.LEGACY.SETTINGS.REMOTE_RULES = {}, N.LEGACY.SETTINGS.REMOTE_RULES.ABSOLUTE = N.LEGACY.SETTINGS.ABSOLUTE + "/remote-rules", N.LEGACY.UNLOCK_PREMIUM = {}, N.LEGACY.UNLOCK_PREMIUM.ABSOLUTE = "/unlock", N.LEGACY.GOODBYE = {}, N.LEGACY.GOODBYE.ABSOLUTE = "/goodbye", N.PAYMENT_SUCCESS = {}, N.PAYMENT_SUCCESS.RELATIVE = "/paymentSuccess", N.PAYMENT_SUCCESS.ABSOLUTE = O(N.LANDING, N.PAYMENT_SUCCESS.RELATIVE), N.PAYMENT_FAIL = {}, N.PAYMENT_FAIL.RELATIVE = "/paymentFail", N.PAYMENT_FAIL.ABSOLUTE = O(N.LANDING, N.PAYMENT_FAIL.RELATIVE), N.APP_MODE = {}, N.APP_MODE.RELATIVE = "/app-mode", N.APP_MODE.ABSOLUTE = O(N.DASHBOARD, N.APP_MODE.RELATIVE), N.DESKTOP = {}, N.DESKTOP.RELATIVE = "/desktop", N.DESKTOP.ABSOLUTE = O(N.DASHBOARD, N.DESKTOP.RELATIVE), N.DESKTOP.MANUAL_SETUP = {}, N.DESKTOP.MANUAL_SETUP.STUB = "/manual-setup", N.DESKTOP.MANUAL_SETUP.RELATIVE = N.DESKTOP.RELATIVE + N.DESKTOP.MANUAL_SETUP.STUB, N.DESKTOP.MANUAL_SETUP.ABSOLUTE = O(N.DESKTOP.ABSOLUTE, N.DESKTOP.MANUAL_SETUP.STUB), N.PAGE404 = {}, N.PAGE404.RELATIVE = "/404", N.PAGE404.ABSOLUTE = O(N.LANDING, N.PAGE404.RELATIVE), N.EXTENSION_INSTALLED = "/extension-installed";
		var b = N,
			g = {
				COLUMN_WIDTHS: [10, 50, 25, 15]
			},
			R = a(8),
			h = function() {
				return {
					filters: {},
					key: S.CONSTANTS.RULE_KEYS.URL,
					operator: S.CONSTANTS.RULE_OPERATORS.CONTAINS,
					value: ""
				}
			},
			C = {
				Redirect: {
					ID: 1,
					TYPE: S.CONSTANTS.RULE_TYPES.REDIRECT,
					NAME: "Redirect Request",
					DESCRIPTION: "Redirect a request URL",
					ICON: R.L,
					PRIMARY_COLOR: "#5b9027",
					SECONDARY_COLOR: "#4E7C22",
					TOOL_TIP_PLACEMENT: "top",
					PAIR_CONFIG: {
						TITLE: "Source Destination Pairs"
					},
					EMPTY_PAIR_FORMAT: {
						destination: "",
						source: h()
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !0,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !1,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				Cancel: {
					ID: 2,
					TYPE: S.CONSTANTS.RULE_TYPES.CANCEL,
					NAME: "Cancel Request",
					DESCRIPTION: "Block URLs by specifying keywords or entire URL",
					ICON: R.c,
					PRIMARY_COLOR: "#d32a0e",
					SECONDARY_COLOR: "#BB250C",
					TOOL_TIP_PLACEMENT: "top",
					PAIR_CONFIG: {
						TITLE: "Enter Keywords or URLs or Domains to be blocked"
					},
					EMPTY_PAIR_FORMAT: {
						source: h()
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !0,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !1,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				Replace: {
					ID: 3,
					TYPE: S.CONSTANTS.RULE_TYPES.REPLACE,
					NAME: "Replace Host",
					DESCRIPTION: "Replace parts of URL like hostname, query value",
					ICON: R.q,
					PRIMARY_COLOR: "#2aa5e7",
					SECONDARY_COLOR: "#199ADE",
					TOOL_TIP_PLACEMENT: "top",
					PAIR_CONFIG: {
						TITLE: "Enter the part of URL that needs to be replaced"
					},
					EMPTY_PAIR_FORMAT: {
						from: "",
						to: "",
						source: h()
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !1,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !0,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				Headers: {
					ID: 4,
					TYPE: S.CONSTANTS.RULE_TYPES.HEADERS,
					NAME: "Modify Headers",
					DESCRIPTION: "Modify HTTP headers in request and response",
					ICON: R.z,
					PRIMARY_COLOR: "#dd9d12",
					SECONDARY_COLOR: "#C58C10",
					TOOL_TIP_PLACEMENT: "top",
					PAIR_CONFIG: {
						TITLE: "Headers Modification Rules"
					},
					EMPTY_PAIR_FORMAT: {
						header: "",
						value: "",
						type: "Add",
						target: "Request",
						source: h()
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !1,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !0,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				QueryParam: {
					ID: 5,
					TYPE: S.CONSTANTS.RULE_TYPES.QUERYPARAM,
					NAME: "Query Param",
					DESCRIPTION: "Add or Remove Query Parameters",
					ICON: R.K,
					PRIMARY_COLOR: "#AA66CC",
					SECONDARY_COLOR: "#9F53C6",
					TOOL_TIP_PLACEMENT: "bottom",
					PAIR_CONFIG: {
						TITLE: "Query Parameter Modifications"
					},
					EMPTY_PAIR_FORMAT: {
						modifications: [],
						source: h()
					},
					EMPTY_MODIFICATION_FORMAT: {
						actionWhenParamExists: S.CONSTANTS.RULE_KEYS.OVERWRITE,
						param: "",
						type: "Add",
						value: ""
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !0,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !0,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				Script: {
					ID: 6,
					TYPE: S.CONSTANTS.RULE_TYPES.SCRIPT,
					NAME: "Insert Scripts",
					DESCRIPTION: "Add custom JS / CSS to any website",
					ICON: R.i,
					PRIMARY_COLOR: "#444340",
					SECONDARY_COLOR: "#373634",
					TOOL_TIP_PLACEMENT: "bottom",
					PAIR_CONFIG: {
						TITLE: "Insert Scripts"
					},
					EMPTY_PAIR_FORMAT: {
						libraries: [],
						source: h(),
						scripts: []
					},
					EMPTY_SCRIPT_FORMAT: {
						codeType: "js",
						fileName: "",
						loadTime: "afterPageLoad",
						type: "url",
						value: ""
					},
					ALLOW_ADD_PAIR: !1,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !1,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !0,
					ALLOW_REQUEST_SOURCE_FILTERS: !1,
					CUSTOM_SCRIPT_CHARACTER_LIMIT: 500
				},
				Response: {
					ID: 7,
					TYPE: S.CONSTANTS.RULE_TYPES.RESPONSE,
					NAME: "Modify Response",
					DESCRIPTION: "Modify AJAX response",
					ICON: R.j,
					PRIMARY_COLOR: "#880e4f",
					SECONDARY_COLOR: "#710C42",
					TOOL_TIP_PLACEMENT: "bottom",
					PAIR_CONFIG: {
						TITLE: "Modify response of an AJAX request"
					},
					EMPTY_PAIR_FORMAT: {
						source: h(),
						response: {
							type: "static",
							value: ""
						}
					},
					ALLOW_ADD_PAIR: !1,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !1,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !1,
					ALLOW_REQUEST_SOURCE_FILTERS: !0,
					RESPONSE_BODY_CHARACTER_LIMIT: 1500,
					RESPONSE_BODY_JAVASCRIPT_DEFAULT_VALUE: "function modifyResponse(args) {\n  const {method, url, response, responseType, requestHeaders, requestData} = args;\n  // Change response below depending upon request attributes received in args\n  \n  return response;\n}"
				},
				UserAgent: {
					ID: 8,
					TYPE: S.CONSTANTS.RULE_TYPES.USERAGENT,
					NAME: "User-Agent",
					DESCRIPTION: "Emulate for different devices by varying user-agent",
					ICON: R.V,
					PRIMARY_COLOR: "#2bbbad",
					SECONDARY_COLOR: "#26A69A",
					TOOL_TIP_PLACEMENT: "bottom",
					PAIR_CONFIG: {
						TITLE: "Source User-Agent Pairs"
					},
					EMPTY_PAIR_FORMAT: {
						source: h(),
						env: "",
						envType: ""
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !0,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !0,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				},
				Delay: {
					ID: 9,
					TYPE: S.CONSTANTS.RULE_TYPES.DELAY,
					NAME: "Delay Network Requests",
					DESCRIPTION: "Delay a request URL",
					ICON: R.O,
					PRIMARY_COLOR: "#68ce35",
					SECONDARY_COLOR: "#5ab52d",
					TOOL_TIP_PLACEMENT: "bottom",
					PAIR_CONFIG: {
						TITLE: "Enter Request URL Pattern"
					},
					EMPTY_PAIR_FORMAT: {
						source: h(),
						delay: "100"
					},
					ALLOW_ADD_PAIR: !0,
					SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW: !0,
					ALLOW_APPLY_RULE_TO_ALL_URLS: !1,
					ALLOW_REQUEST_SOURCE_FILTERS: !0
				}
			},
			I = {
				GROUP_RULES: "group_rules",
				GROUP_DETAILS: "group_details",
				UNGROUPED_GROUP_ID: "",
				UNGROUPED_GROUP_NAME: "Ungrouped",
				COLUMN_WIDTHS: [6, 6, 8, 30, 11, 20, 19]
			},
			L = {
				COLUMN_WIDTHS: [8, 22, 35, 20, 15]
			},
			_ = {
				COLUMN_WIDTHS: [45, 17, 18, 20],
				MODES: {
					REGULAR: "regular",
					FILE_PICKER: "filePicker"
				}
			},
			v = {
				PRIMARY_COLOR: "#0a48b3",
				BTN_BGCOLOR_PRIMARY: "#f8f9fa",
				BTN_FONT_COLOR_PRIMARY: "#393f49",
				BTN_FONT_COLOR_HOVER: "#FFFFFF",
				BTN_COLOR_IN_ROW: "#465e74",
				ICON_COLOR_ON_HOVER: "#525f7f"
			},
			y = {
				ACTION_LABELS: {}
			};
		y.ACTION_LABELS.LOG_IN = "LOG IN", y.ACTION_LABELS.SIGN_UP = "SIGN UP", y.ACTION_LABELS.REQUEST_RESET_PASSWORD = "REQUEST RESET PASSWORD", y.ACTION_LABELS.DO_RESET_PASSWORD = "DO RESET PASSWORD";
		var P = y,
			U = [{
				label: "Albania",
				value: "AL"
			}, {
				label: "Algeria",
				value: "DZ"
			}, {
				label: "Argentina",
				value: "AR"
			}, {
				label: "Australia",
				value: "AU"
			}, {
				label: "Austria",
				value: "AT"
			}, {
				label: "Bahamas",
				value: "BS"
			}, {
				label: "Bangladesh",
				value: "BD"
			}, {
				label: "Belgium",
				value: "BE"
			}, {
				label: "Benin",
				value: "BJ"
			}, {
				label: "Bhutan",
				value: "BT"
			}, {
				label: "Bolivia",
				value: "BO"
			}, {
				label: "Brazil",
				value: "BR"
			}, {
				label: "Bulgaria",
				value: "BG"
			}, {
				label: "Cambodia",
				value: "KH"
			}, {
				label: "Cameroon",
				value: "CM"
			}, {
				label: "Canada",
				value: "CA"
			}, {
				label: "Chile",
				value: "CL"
			}, {
				label: "China",
				value: "CN"
			}, {
				label: "Colombia",
				value: "CO"
			}, {
				label: "Costa Rica",
				value: "CR"
			}, {
				label: "Cuba",
				value: "CU"
			}, {
				label: "Cyprus",
				value: "CY"
			}, {
				label: "Czechia",
				value: "CZ"
			}, {
				label: "Denmark",
				value: "DK"
			}, {
				label: "Dominica",
				value: "DM"
			}, {
				label: "Dominican Republic ",
				value: "DO"
			}, {
				label: "Egypt",
				value: "EG"
			}, {
				label: "Ethiopia",
				value: "ET"
			}, {
				label: "Fiji",
				value: "FJ"
			}, {
				label: "Finland",
				value: "FI"
			}, {
				label: "France",
				value: "FR"
			}, {
				label: "Georgia",
				value: "GE"
			}, {
				label: "Germany",
				value: "DE"
			}, {
				label: "Ghana",
				value: "GH"
			}, {
				label: "Greece",
				value: "GR"
			}, {
				label: "Greenland",
				value: "GL"
			}, {
				label: "Hong Kong",
				value: "HK"
			}, {
				label: "Hungary",
				value: "HU"
			}, {
				label: "Iceland",
				value: "IS"
			}, {
				label: "India",
				value: "IN"
			}, {
				label: "Indonesia",
				value: "ID"
			}, {
				label: "Iran",
				value: "IR"
			}, {
				label: "Iraq",
				value: "IQ"
			}, {
				label: "Ireland",
				value: "IE"
			}, {
				label: "Israel",
				value: "IL"
			}, {
				label: "Italy",
				value: "IT"
			}, {
				label: "Jamaica",
				value: "JM"
			}, {
				label: "Japan",
				value: "JP"
			}, {
				label: "Kazakhstan",
				value: "KZ"
			}, {
				label: "Kenya",
				value: "KE"
			}, {
				label: "Korea",
				value: "KP"
			}, {
				label: "Kuwait",
				value: "KW"
			}, {
				label: "Kyrgyzstan",
				value: "KG"
			}, {
				label: "Latvia",
				value: "LV"
			}, {
				label: "Lebanon",
				value: "LB"
			}, {
				label: "Lesotho",
				value: "LS"
			}, {
				label: "Liberia",
				value: "LR"
			}, {
				label: "Libya",
				value: "LY"
			}, {
				label: "Lithuania",
				value: "LT"
			}, {
				label: "Luxembourg",
				value: "LU"
			}, {
				label: "Malaysia",
				value: "MY"
			}, {
				label: "Maldives",
				value: "MV"
			}, {
				label: "Mali",
				value: "ML"
			}, {
				label: "Malta",
				value: "MT"
			}, {
				label: "Marshall Islands ",
				value: "MH"
			}, {
				label: "Martinique",
				value: "MQ"
			}, {
				label: "Mauritania",
				value: "MR"
			}, {
				label: "Mauritius",
				value: "MU"
			}, {
				label: "Mayotte",
				value: "YT"
			}, {
				label: "Mexico",
				value: "MX"
			}, {
				label: "Monaco",
				value: "MC"
			}, {
				label: "Mongolia",
				value: "MN"
			}, {
				label: "Montenegro",
				value: "ME"
			}, {
				label: "Montserrat",
				value: "MS"
			}, {
				label: "Morocco",
				value: "MA"
			}, {
				label: "Mozambique",
				value: "MZ"
			}, {
				label: "Myanmar",
				value: "MM"
			}, {
				label: "Namibia",
				value: "NA"
			}, {
				label: "Nauru",
				value: "NR"
			}, {
				label: "Nepal",
				value: "NP"
			}, {
				label: "Netherlands ",
				value: "NL"
			}, {
				label: "New Caledonia",
				value: "NC"
			}, {
				label: "New Zealand",
				value: "NZ"
			}, {
				label: "Nicaragua",
				value: "NI"
			}, {
				label: "Niger ",
				value: "NE"
			}, {
				label: "Nigeria",
				value: "NG"
			}, {
				label: "Niue",
				value: "NU"
			}, {
				label: "Norfolk Island",
				value: "NF"
			}, {
				label: "Northern Mariana Islands ",
				value: "MP"
			}, {
				label: "Norway",
				value: "NO"
			}, {
				label: "Oman",
				value: "OM"
			}, {
				label: "Pakistan",
				value: "PK"
			}, {
				label: "Palau",
				value: "PW"
			}, {
				label: "Palestine, State of",
				value: "PS"
			}, {
				label: "Panama",
				value: "PA"
			}, {
				label: "Papua New Guinea",
				value: "PG"
			}, {
				label: "Paraguay",
				value: "PY"
			}, {
				label: "Peru",
				value: "PE"
			}, {
				label: "Philippines ",
				value: "PH"
			}, {
				label: "Pitcairn",
				value: "PN"
			}, {
				label: "Poland",
				value: "PL"
			}, {
				label: "Portugal",
				value: "PT"
			}, {
				label: "Puerto Rico",
				value: "PR"
			}, {
				label: "Qatar",
				value: "QA"
			}, {
				label: "Republic of North Macedonia",
				value: "MK"
			}, {
				label: "Romania",
				value: "RO"
			}, {
				label: "Russian Federation ",
				value: "RU"
			}, {
				label: "Rwanda",
				value: "RW"
			}, {
				label: "R\xe9union",
				value: "RE"
			}, {
				label: "Saint Barth\xe9lemy",
				value: "BL"
			}, {
				label: "Saint Helena, Ascension and Tristan da Cunha",
				value: "SH"
			}, {
				label: "Saint Kitts and Nevis",
				value: "KN"
			}, {
				label: "Saint Lucia",
				value: "LC"
			}, {
				label: "Saint Martin (French part)",
				value: "MF"
			}, {
				label: "Saint Pierre and Miquelon",
				value: "PM"
			}, {
				label: "Saint Vincent and the Grenadines",
				value: "VC"
			}, {
				label: "Samoa",
				value: "WS"
			}, {
				label: "San Marino",
				value: "SM"
			}, {
				label: "Sao Tome and Principe",
				value: "ST"
			}, {
				label: "Saudi Arabia",
				value: "SA"
			}, {
				label: "Senegal",
				value: "SN"
			}, {
				label: "Serbia",
				value: "RS"
			}, {
				label: "Seychelles",
				value: "SC"
			}, {
				label: "Sierra Leone",
				value: "SL"
			}, {
				label: "Singapore",
				value: "SG"
			}, {
				label: "Sint Maarten (Dutch part)",
				value: "SX"
			}, {
				label: "Slovakia",
				value: "SK"
			}, {
				label: "Slovenia",
				value: "SI"
			}, {
				label: "Solomon Islands",
				value: "SB"
			}, {
				label: "Somalia",
				value: "SO"
			}, {
				label: "South Africa",
				value: "ZA"
			}, {
				label: "South Georgia and the South Sandwich Islands",
				value: "GS"
			}, {
				label: "South Sudan",
				value: "SS"
			}, {
				label: "Spain",
				value: "ES"
			}, {
				label: "Sri Lanka",
				value: "LK"
			}, {
				label: "Sudan ",
				value: "SD"
			}, {
				label: "Suriname",
				value: "SR"
			}, {
				label: "Svalbard and Jan Mayen",
				value: "SJ"
			}, {
				label: "Sweden",
				value: "SE"
			}, {
				label: "Switzerland",
				value: "CH"
			}, {
				label: "Syrian Arab Republic",
				value: "SY"
			}, {
				label: "Taiwan (Province of China)",
				value: "TW"
			}, {
				label: "Tajikistan",
				value: "TJ"
			}, {
				label: "Tanzania",
				value: "TZ"
			}, {
				label: "Thailand",
				value: "TH"
			}, {
				label: "Timor-Leste",
				value: "TL"
			}, {
				label: "Togo",
				value: "TG"
			}, {
				label: "Tokelau",
				value: "TK"
			}, {
				label: "Tonga",
				value: "TO"
			}, {
				label: "Trinidad and Tobago",
				value: "TT"
			}, {
				label: "Tunisia",
				value: "TN"
			}, {
				label: "Turkey",
				value: "TR"
			}, {
				label: "Turkmenistan",
				value: "TM"
			}, {
				label: "Turks and Caicos Islands ",
				value: "TC"
			}, {
				label: "Tuvalu",
				value: "TV"
			}, {
				label: "Uganda",
				value: "UG"
			}, {
				label: "Ukraine",
				value: "UA"
			}, {
				label: "United Arab Emirates ",
				value: "AE"
			}, {
				label: "United Kingdom",
				value: "GB"
			}, {
				label: "United States",
				value: "US"
			}, {
				label: "Uruguay",
				value: "UY"
			}, {
				label: "Uzbekistan",
				value: "UZ"
			}, {
				label: "Vanuatu",
				value: "VU"
			}, {
				label: "Venezuela (Bolivarian Republic of)",
				value: "VE"
			}, {
				label: "Viet Nam",
				value: "VN"
			}, {
				label: "Virgin Islands (British)",
				value: "VG"
			}, {
				label: "Virgin Islands (U.S.)",
				value: "VI"
			}, {
				label: "Wallis and Futuna",
				value: "WF"
			}, {
				label: "Western Sahara",
				value: "EH"
			}, {
				label: "Yemen",
				value: "YE"
			}, {
				label: "Zambia",
				value: "ZM"
			}, {
				label: "Zimbabwe",
				value: "ZW"
			}],
			D = {
				PLAN_NAMES: {}
			};
		D.PLAN_NAMES.BRONZE = "bronze", D.PLAN_NAMES.SILVER = "silver", D.PLAN_NAMES.GOLD = "gold", D.PLAN_NAMES.ENTERPRISE = "enterprise", D.COUNTRY_CODES = U;
		var w = D,
			x = {
				MODES: {
					CHECK_LIMIT: "check_limit",
					CHECK_IF_ENABLED: "check_if_enabled"
				}
			},
			j = x,
			k = {
				PERSONAL: []
			};
		k.PERSONAL.push("gmail.com"), k.PERSONAL.push("hotmail.com"), k.PERSONAL.push("yahoo.com"), k.PERSONAL.push("outlook.com"), k.PERSONAL.push("googlemail.com"), k.PERSONAL.push("protonmail.com"), k.PERSONAL.push("yandex.mail"), k.PERSONAL.push("yandex.ru"), k.PERSONAL.push("mail.ru"), k.PERSONAL.push("bk.ru"), k.PERSONAL.push("qq.com"), k.DESTROYABLE = [], k.DESTROYABLE.push("mailinator.com"), k.DESTROYABLE.push("yopmail.com"), k.DESTROYABLE.push("eoopy.com"), k.DESTROYABLE.push("ttirv.com");
		var M = k,
			G = {};
		G.reactSelectCustomStyles = {
			option: function(e, t) {
				return Object(E.a)(Object(E.a)({}, e), {}, {
					border: "none"
				})
			},
			control: function(e) {
				return Object(E.a)(Object(E.a)({}, e), {}, {
					border: "0",
					marginTop: "3%",
					boxShadow: "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
					fontSize: "0.875rem"
				})
			}
		};
		var F = G,
			B = {
				DISMISS_PROXY_INFO_BANNER: "DISMISS_PROXY_INFO_BANNER"
			},
			V = B,
			H = {};
		H.FEATURES = p, H.PRICING = w, H.MIGRATED_TO_NEW_UI = "migrated-to-new-ui", H.LAST_BACKUP_TIMESTAMP = "last-backup-timestamp", H.LINKS = A, H.STYLES = F, H.RULE_EDITOR_CONFIG = f, H.PATHS = b, H.RULE_TYPES_CONFIG = C, H.RULES_LIST_TABLE_CONSTANTS = I, H.SHARED_LISTS_TABLE_CONSTANTS = L, H.MARKETPLACE_TABLE_CONSTANTS = g, H.FILES_TABLE_CONSTANTS = _, H.THEME_COLORS = v, H.AUTH = P, H.LIMIT_REACHED_MODAL = j, H.NOTIFICATION_DURATION = 2e3, H.DELAY_COMPATIBILITY_VERSION = "21.6.04", H.BETA = "beta", H.LOCAL = "local", H.PROD = "prod", H.EMAIL_DOMAINS = M, H.COOKIES = V;
		var Y = H,
			W = Y.RULES_LIST_TABLE_CONSTANTS,
			K = {
				UPDATE_USER_INFO: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						user: {
							loggedIn: t.payload.loggedIn,
							details: t.payload.details
						}
					})
				},
				UPDATE_APP_MODE: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						appMode: t.payload.appMode ? t.payload.appMode : e.appMode
					})
				},
				UPDATE_SEARCH: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						search: Object(E.a)(Object(E.a)({}, e.search), {}, {
							[t.payload.searchType]: t.payload.value
						})
					})
				},
				TOGGLE_ACTIVE_MODAL: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						activeModals: Object(E.a)(Object(E.a)({}, e.activeModals), {}, {
							[t.payload.modalName]: {
								isActive: "undefined" !== typeof t.payload.newValue ? t.payload.newValue : !e.activeModals[t.payload.modalName].isActive,
								props: t.payload.newProps || e.activeModals[t.payload.modalName].props
							}
						})
					})
				},
				UPDATE_BACKUP_INFO: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							lastBackupTimeStamp: t.payload
						})
					})
				},
				UPDATE_GROUPS: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							allRules: Object(E.a)(Object(E.a)({}, e.rules.allRules), {}, {
								groups: t.payload
							})
						})
					})
				},
				UPDATE_RULES_AND_GROUPS: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							allRules: {
								rules: t.payload.rules,
								groups: t.payload.groups
							}
						})
					})
				},
				UPDATE_RULES_TO_POPULATE: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							rulesToPopulate: t.payload
						})
					})
				},
				UPDATE_GROUPWISE_RULES_TO_POPULATE: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							groupwiseRulesToPopulate: t.payload
						})
					})
				},
				TOGGLE_SELECTED_RULE: function(e, t) {
					var a = e.rules.selectedRules[t.payload.ruleId];
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							selectedRules: Object(E.a)(Object(E.a)({}, e.rules.selectedRules), {}, {
								[t.payload.ruleId]: !a
							})
						})
					})
				},
				SET_SELECT_ALL_RULES_OF_A_GROUP: function(e, t) {
					var a = t.payload.groupId,
						n = e.rules.groupwiseRulesToPopulate[a][W.GROUP_RULES],
						r = {};
					return n.forEach((function(e) {
						r[e.id] = t.payload.newValue
					})), Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							selectedRules: Object(E.a)(Object(E.a)({}, e.rules.selectedRules), r)
						})
					})
				},
				CLEAR_SELECTED_RULES: function(e) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							selectedRules: {}
						})
					})
				},
				UPDATE_CURRENTLY_SELECTED_RULE_DATA: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							currentlySelectedRule: Object(E.a)(Object(E.a)({}, e.rules.currentlySelectedRule), {}, {
								data: t.payload
							})
						})
					})
				},
				UPDATE_CURRENTLY_SELECTED_RULE_CONFIG: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							currentlySelectedRule: Object(E.a)(Object(E.a)({}, e.rules.currentlySelectedRule), {}, {
								config: t.payload
							})
						})
					})
				},
				CLEAR_CURRENTLY_SELECTED_RULE_AND_CONFIG: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							currentlySelectedRule: {
								config: !1,
								data: !1
							}
						})
					})
				},
				UPDATE_REFRESH_PENDING_STATUS: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						pendingRefresh: Object(E.a)(Object(E.a)({}, e.pendingRefresh), {}, {
							[t.payload.type]: t.payload.newValue ? t.payload.newValue : !e.pendingRefresh[t.payload.type]
						})
					})
				},
				SELECT_ALL_RULES: function(e, t) {
					var a = t.payload.newValue,
						n = {};
					return e.rules.rulesToPopulate.forEach((function(e) {
						n[e.id] = a
					})), Object(E.a)(Object(E.a)({}, e), {}, {
						rules: Object(E.a)(Object(E.a)({}, e.rules), {}, {
							selectedRules: n
						})
					})
				},
				UPDATE_SELECTED_SHARED_LISTS: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						sharedLists: Object(E.a)(Object(E.a)({}, e.sharedLists), {}, {
							selectedLists: t.payload
						})
					})
				},
				UPDATE_MARKETPLACE_RULES: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						marketplace: Object(E.a)(Object(E.a)({}, e.marketplace), {}, {
							ruleStatus: Object(E.a)(Object(E.a)({}, e.marketplace.ruleStatus), t.payload)
						})
					})
				},
				TOGGLE_MARKETPLACE_RULES: function(e, t) {
					var a = e.marketplace.ruleStatus[t.payload];
					return Object(E.a)(Object(E.a)({}, e), {}, {
						marketplace: Object(E.a)(Object(E.a)({}, e.marketplace), {}, {
							ruleStatus: Object(E.a)(Object(E.a)({}, e.marketplace.ruleStatus), {}, {
								[t.payload]: a === S.CONSTANTS.RULE_STATUS.ACTIVE ? S.CONSTANTS.RULE_STATUS.INACTIVE : S.CONSTANTS.RULE_STATUS.ACTIVE
							})
						})
					})
				},
				UPDATE_DESKTOP_SPECIFIC_DETAILS: function(e, t) {
					return Object(E.a)(Object(E.a)({}, e), {}, {
						desktopSpecificDetails: Object(E.a)(Object(E.a)({}, e.desktopSpecificDetails), t.payload)
					})
				}
			},
			q = K,
			Q = a(226),
			z = {
				user: {
					loggedIn: !1,
					details: !1
				},
				appMode: S.CONSTANTS.APP_MODES.EXTENSION,
				rules: {
					allRules: {
						rules: [],
						groups: []
					},
					currentlySelectedRule: {
						data: !1,
						config: !1
					},
					rulesToPopulate: [],
					groupwiseRulesToPopulate: {},
					selectedRules: {},
					lastBackupTimeStamp: ""
				},
				search: {
					rules: "",
					files: "",
					sharedLists: "",
					marketplace: ""
				},
				pendingRefresh: {
					rules: !1,
					sharedLists: !1
				},
				sharedLists: {
					selectedLists: !1
				},
				activeModals: {
					loadingModal: {
						isActive: !1,
						props: {}
					},
					authModal: {
						isActive: !1,
						props: {}
					},
					renameGroupModal: {
						isActive: !1,
						props: {}
					}
				},
				marketplace: {
					ruleStatus: {}
				},
				desktopSpecificDetails: {
					isBackgroundProcessActive: !1,
					isProxyServerRunning: !1,
					proxyPort: 8080,
					appsList: Q,
					availableAppsScanned: !1
				}
			},
			J = z,
			X = Object(l.createContext)(J),
			Z = X.Provider,
			$ = function(e) {
				var t = e.children,
					a = Object(l.useReducer)((function(e, t) {
						switch (t.type) {
							case m.UPDATE_USER_INFO:
								return q.UPDATE_USER_INFO(e, t);
							case m.UPDATE_APP_MODE:
								return q.UPDATE_APP_MODE(e, t);
							case m.UPDATE_SEARCH:
								return q.UPDATE_SEARCH(e, t);
							case m.TOGGLE_ACTIVE_MODAL:
								return q.TOGGLE_ACTIVE_MODAL(e, t);
							case m.UPDATE_SELECTED_SHARED_LISTS:
								return q.UPDATE_SELECTED_SHARED_LISTS(e, t);
							case m.UPDATE_BACKUP_INFO:
								return q.UPDATE_BACKUP_INFO(e, t);
							case m.UPDATE_GROUPS:
								return q.UPDATE_GROUPS(e, t);
							case m.UPDATE_RULES_AND_GROUPS:
								return q.UPDATE_RULES_AND_GROUPS(e, t);
							case m.UPDATE_RULES_TO_POPULATE:
								return q.UPDATE_RULES_TO_POPULATE(e, t);
							case m.UPDATE_GROUPWISE_RULES_TO_POPULATE:
								return q.UPDATE_GROUPWISE_RULES_TO_POPULATE(e, t);
							case m.UPDATE_REFRESH_PENDING_STATUS:
								return q.UPDATE_REFRESH_PENDING_STATUS(e, t);
							case m.TOGGLE_SELECTED_RULE:
								return q.TOGGLE_SELECTED_RULE(e, t);
							case m.SET_SELECT_ALL_RULES_OF_A_GROUP:
								return q.SET_SELECT_ALL_RULES_OF_A_GROUP(e, t);
							case m.CLEAR_SELECTED_RULES:
								return q.CLEAR_SELECTED_RULES(e);
							case m.UPDATE_CURRENTLY_SELECTED_RULE_DATA:
								return q.UPDATE_CURRENTLY_SELECTED_RULE_DATA(e, t);
							case m.UPDATE_CURRENTLY_SELECTED_RULE_CONFIG:
								return q.UPDATE_CURRENTLY_SELECTED_RULE_CONFIG(e, t);
							case m.CLEAR_CURRENTLY_SELECTED_RULE_AND_CONFIG:
								return q.CLEAR_CURRENTLY_SELECTED_RULE_AND_CONFIG(e, t);
							case m.SELECT_ALL_RULES:
								return q.SELECT_ALL_RULES(e, t);
							case m.UPDATE_MARKETPLACE_RULES:
								return q.UPDATE_MARKETPLACE_RULES(e, t);
							case m.TOGGLE_MARKETPLACE_RULES:
								return q.TOGGLE_MARKETPLACE_RULES(e, t);
							case m.UPDATE_DESKTOP_SPECIFIC_DETAILS:
								return q.UPDATE_DESKTOP_SPECIFIC_DETAILS(e, t);
							default:
								throw new Error
						}
					}), J),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1];
				return c.a.createElement(Z, {
					value: {
						state: r,
						dispatch: o
					}
				}, t)
			},
			ee = (a(227), a(228), a(229), a(230), a(26)),
			te = a(15),
			ae = a.n(te),
			ne = a(80),
			re = a(506),
			le = a(10),
			ce = a(21),
			oe = a(22),
			se = a(25),
			ie = a(24),
			ue = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement("div", {
							className: "header bg-gradient-info bg-gradient-blue pb-5 pt-5 pt-md-5 border-top-0"
						})
					}
				}]), a
			}(c.a.Component),
			me = a(504),
			Ee = a(505),
			de = a(189),
			pe = a(507),
			Se = a(508),
			Ae = a(509),
			Te = (a(231), a(233), a(497), a(498), a(499), ne.a),
			fe = function(e) {
				var t = e.customLoadingMessage || "Loading";
				return c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, c.a.createElement(R.S, {
					className: "icon-spin"
				})), c.a.createElement("h5", null, t)))
			},
			Oe = a(40),
			Ne = Y.PATHS,
			be = Y.LINKS,
			ge = function(e, t) {
				t ? window.location.href = Ne.RULES.ABSOLUTE : e.push(Ne.RULES.ABSOLUTE)
			},
			Re = function(e, t) {
				e.push("".concat(Ne.RULE_EDITOR.CREATE_RULE.ABSOLUTE, "/").concat(t))
			},
			he = function(e, t) {
				e.push("".concat(Ne.RULE_EDITOR.EDIT_RULE.ABSOLUTE, "/").concat(t))
			},
			Ce = function(e, t) {
				t ? window.location.href = Ne.SHARED_LISTS.ABSOLUTE : e.push(Ne.SHARED_LISTS.ABSOLUTE)
			},
			Ie = function(e, t, a) {
				var n = a.replace(new RegExp(" +|/+", "g"), "-").replace(/-+/g, "-");
				e.push("".concat(Ne.SHARED_LISTS.VIEWER.ABSOLUTE, "/").concat(t, "-").concat(n))
			},
			Le = function(e) {
				e.push(Ne.FILES.ABSOLUTE)
			},
			_e = function(e, t) {
				e.push(Ne.FILES.VIEWER.ABSOLUTE + "/".concat(t))
			},
			ve = function(e) {
				e.push(Ne.AUTH.FORGOT_PASSWORD.ABSOLUTE)
			},
			ye = function(e) {
				e.push(Ne.PRICING.ABSOLUTE)
			},
			Pe = function(e, t) {
				t ? window.location.href = Ne.ACCOUNT.ABSOLUTE : e.push(Ne.ACCOUNT.ABSOLUTE)
			},
			Ue = function(e, t, a, n) {
				var r = new URL(window.location.href);
				r.pathname = Ne.ACCOUNT.TEAM.ABSOLUTE + "/".concat(t), n && r.searchParams.set("autoRefresh", "true"), a ? window.location = r.href : e.push(r.pathname + r.search)
			},
			De = function(e, t) {
				t ? window.location.href = Ne.ACCOUNT.MY_TEAMS.ABSOLUTE : e.push(Ne.ACCOUNT.MY_TEAMS.ABSOLUTE)
			},
			we = function(e, t, a) {
				var n = new URL(window.location.href);
				n.pathname = Ne.ACCOUNT.PERSONAL_SUBSCRIPTION.ABSOLUTE, a && n.searchParams.set("autoRefresh", "true"), t ? window.location = n.href : e.push(n.pathname + n.search)
			},
			xe = function(e) {
				var t = e.mode,
					a = e.teamId,
					n = e.planType,
					r = e.days,
					l = new URL(window.location.href);
				l.pathname = Ne.ACCOUNT.CHECKOUT.ABSOLUTE, l.searchParams.set("m", t), "team" === t && l.searchParams.set("t", a), l.searchParams.set("p", n), l.searchParams.set("d", r), window.location = l.href
			},
			je = function(e, t) {
				t ? window.location.href = Ne.MARKETPLACE.ABSOLUTE : e.push(Ne.MARKETPLACE.ABSOLUTE)
			},
			ke = function(e) {
				var t = e.mode,
					a = e.teamId,
					n = e.planType,
					r = e.isRenewal,
					l = new URL(window.location.href);
				l.pathname = Ne.ACCOUNT.UPDATE_SUBSCRIPTION.ABSOLUTE, l.searchParams.set("m", t), "team" === t && l.searchParams.set("t", a), l.searchParams.set("p", n), r && l.searchParams.set("r", !0), window.location = l.href
			},
			Me = function(e) {
				var t = e.mode,
					a = e.teamId,
					n = new URL(window.location.href);
				n.pathname = Ne.ACCOUNT.UPDATE_PAYMENT_METHOD.ABSOLUTE, n.searchParams.set("m", t), "team" === t && n.searchParams.set("t", a), window.location = n.href
			},
			Ge = function(e, t) {
				t ? window.location.href = Ne.ONBOARDING.ABSOLUTE : e.push(Ne.ONBOARDING.ABSOLUTE)
			},
			Fe = function(e, t) {
				t ? window.location.href = Ne.PAGE404.ABSOLUTE : e.push(Ne.PAGE404.ABSOLUTE)
			},
			Be = a(54),
			Ve = function(e) {
				if (!e || Object(Oe.isEmpty)(e) || "string" !== typeof e) throw new Error("Cant parse the invite code");
				return e.replace(/\//g, "").replace(/\\/g, "")
			},
			He = function() {
				var e = Object(ee.g)(),
					t = Object(l.useRef)(!0),
					a = new URLSearchParams(window.location.search).get("code"),
					n = Object(l.useState)(!0),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					i = Object(l.useState)(!0),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(!1),
					S = Object(u.a)(p, 2),
					A = S[0],
					T = S[1],
					f = Object(l.useState)(""),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useCallback)((function() {
						s(!0), Te.functions().httpsCallable("getTeamInvite")({
							inviteCode: Ve(a)
						}).then((function(e) {
							if (!t.current) return null;
							var a = e.data;
							a.success ? (d(!0), b(a.teamName)) : d(!1), s(!1)
						})).catch((function(e) {
							if (!t.current) return null;
							console.log(e.message), d(!1), s(!1)
						}))
					}), []),
					h = function() {
						T(!0), Te.functions().httpsCallable("acceptTeamInvite")({
							inviteCode: Ve(a)
						}).then((function(a) {
							if (!t.current) return null;
							var n = a.data;
							T(!1), n.success ? (le.b.info("You have been added to the team"), Pe(e, !0)) : le.b.warn(n.message)
						})).catch((function(e) {
							if (!t.current) return null;
							le.b.warn(e.message)
						}))
					};
				return Object(l.useEffect)((function() {
					return !a || Object(Oe.isEmpty)(a) ? (d(!1), s(!1)) : g(),
						function() {
							t.current = !1
						}
				}), [a, g]), c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, o ? c.a.createElement(fe, {
					customLoadingMessage: "Verifying invite"
				}) : E ? !N || Object(Oe.isEmpty)(N) ? c.a.createElement(c.a.Fragment, null) : c.a.createElement(me.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h4", null, "You have been invited to join the team:", " ", c.a.createElement("span", {
					style: {
						textTransform: "capitalize"
					}
				}, N), " "), A ? c.a.createElement(c.a.Fragment, null, c.a.createElement("br", null), c.a.createElement("h5", null, c.a.createElement(R.r, {
					color: "orange"
				}), " This process may take a few seconds. Do not close this page.")) : null, c.a.createElement("br", null), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					disabled: A,
					onClick: h
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement("b", null, A ? c.a.createElement(Be.a, {
					className: "icon-spin"
				}) : c.a.createElement(R.Z, null))), c.a.createElement("span", {
					className: "btn-inner--text"
				}, A ? "Accepting" : "Accept Invite")), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					outline: !0,
					type: "button",
					disabled: A,
					onClick: function() {
						return Pe(e)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement("b", null, c.a.createElement(R.bb, null))), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Ignore Invite")))) : c.a.createElement(me.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h4", null, "This invite has either been expired or is not meant for you. Please ask the team owner to add you directly."), c.a.createElement("br", null), c.a.createElement("br", null), c.a.createElement("br", null), c.a.createElement("h4", null, "Click", " ", c.a.createElement("span", {
					className: "cursor-pointer",
					onClick: function() {
						return Pe(e)
					}
				}, "here"), " ", "to go back to account settings.")))))))))
			},
			Ye = a(211),
			We = function(e) {
				return e.rules
			},
			Ke = function(e) {
				return We(e).allRules
			},
			qe = function(e) {
				return Ke(e).rules
			},
			Qe = function(e) {
				return qe(e).filter((function(e) {
					return "MKTRuleID" in e
				}))
			},
			ze = function(e) {
				return Ke(e).groups
			},
			Je = function(e) {
				return We(e).rulesToPopulate
			},
			Xe = function(e) {
				return We(e).groupwiseRulesToPopulate
			},
			Ze = function(e) {
				return We(e).selectedRules
			},
			$e = function(e) {
				return We(e).currentlySelectedRule
			},
			et = function(e) {
				return $e(e).data
			},
			tt = function(e) {
				return e.user
			},
			at = function(e) {
				return e.search
			},
			nt = function(e) {
				return at(e).rules
			},
			rt = function(e) {
				return e.pendingRefresh
			},
			lt = function(e) {
				return rt(e).rules
			},
			ct = function(e) {
				return function(e) {
					return e.sharedLists
				}(e).selectedLists
			},
			ot = function(e) {
				return e.activeModals
			},
			st = function(e) {
				return e.appMode
			},
			it = function(e) {
				return e.desktopSpecificDetails
			},
			ut = a(51),
			mt = a(95),
			Et = ut,
			dt = mt,
			pt = function(e) {
				return !!(e && e.loggedIn && e.details.planDetails) && ("referral" === e.details.planDetails.type ? St(e.details.planDetails.planId) && !ft(e.details.planDetails) : "active" === e.details.planDetails.status && St(e.details.planDetails.planId) && !ft(e.details.planDetails))
			},
			St = function(e) {
				if (!e) return !1;
				var t = e.split("_")[0];
				return t === Y.PRICING.PLAN_NAMES.SILVER || t === Y.PRICING.PLAN_NAMES.GOLD || t === Y.PRICING.PLAN_NAMES.ENTERPRISE
			},
			At = function(e) {
				return !!e && e.split("_")[0] === Y.PRICING.PLAN_NAMES.ENTERPRISE
			},
			Tt = function(e) {
				if (!e || !e.subscription) return null;
				var t = e.subscription.endDate;
				return e.subscription.current_period_end && (t = new Date(1e3 * e.subscription.current_period_end).toISOString().split("T")[0]), t
			},
			ft = function(e) {
				return !(!e || !e.subscription) && Tt(e) < (new Date).toISOString().split("T")[0]
			},
			Ot = function(e) {
				var t = e.details ? e.details.planDetails : null;
				if (!t || !t.planId || !t.subscription || !Et) return Y.PRICING.PLAN_NAMES.BRONZE;
				if (!pt(e)) return Y.PRICING.PLAN_NAMES.BRONZE;
				if (ft(t)) return Y.PRICING.PLAN_NAMES.BRONZE;
				var a = t.planId;
				if (["silver_1m", "silver_6m", "silver_12m"].indexOf(a) >= 0) return Y.PRICING.PLAN_NAMES.SILVER;
				if ("gold_6m" === a) return Y.PRICING.PLAN_NAMES.GOLD;
				for (var n in Et) {
					var r = Et[n];
					for (var l in r)
						if ("object" === typeof r[l] && r[l].planId === a) return r.name.toLowerCase()
				}
				return Y.PRICING.PLAN_NAMES.BRONZE
			},
			Nt = function(e, t) {
				var a = gt(e);
				if (a) return a[t].enabled;
				switch (e) {
					case Y.FEATURES.LOGS:
						return t === Y.PRICING.PLAN_NAMES.GOLD;
					case Y.FEATURES.ADS:
						return t === Y.PRICING.PLAN_NAMES.BRONZE;
					default:
						return !1
				}
			},
			bt = function(e, t) {
				var a = gt(e);
				if (a) return a[t].limit;
				switch (e) {
					case Y.FEATURES.RULES:
						return 10;
					case Y.FEATURES.ACTIVE_RULES:
					case Y.FEATURES.FAV_RULES:
					case Y.FEATURES.RULE_PAIRS:
						return 3;
					case Y.FEATURES.SHARED_LISTS:
						return 10;
					case Y.FEATURES.RESPONSE_BODY_CHARACTER_LIMIT:
						return 1500;
					default:
						return 3
				}
			},
			gt = function(e) {
				return dt.filter((function(t) {
					return t.id === e
				}))[0]
			},
			Rt = a(35),
			ht = function(e, t) {
				return {
					type: m.UPDATE_USER_INFO,
					payload: {
						loggedIn: e,
						details: t
					}
				}
			},
			Ct = function(e) {
				return {
					type: m.UPDATE_BACKUP_INFO,
					payload: e
				}
			},
			It = function(e) {
				return {
					type: m.UPDATE_GROUPS,
					payload: e
				}
			},
			Lt = function(e, t) {
				return {
					type: m.UPDATE_RULES_AND_GROUPS,
					payload: {
						rules: Object(Rt.a)(e),
						groups: Object(Rt.a)(t)
					}
				}
			},
			_t = function(e, t) {
				return {
					type: m.UPDATE_REFRESH_PENDING_STATUS,
					payload: {
						type: e,
						newValue: t
					}
				}
			},
			vt = function(e) {
				return {
					type: m.UPDATE_CURRENTLY_SELECTED_RULE_DATA,
					payload: e
				}
			},
			yt = function(e, t) {
				return {
					type: m.UPDATE_SEARCH,
					payload: {
						searchType: e,
						value: t
					}
				}
			},
			Pt = function() {
				return {
					type: m.CLEAR_CURRENTLY_SELECTED_RULE_AND_CONFIG
				}
			},
			Ut = function(e, t, a) {
				return {
					type: m.TOGGLE_ACTIVE_MODAL,
					payload: {
						modalName: e,
						newValue: t,
						newProps: a
					}
				}
			},
			Dt = function(e) {
				return {
					type: m.UPDATE_DESKTOP_SPECIFIC_DETAILS,
					payload: e
				}
			},
			wt = Y.AUTH.ACTION_LABELS,
			xt = function(e) {
				var t = e.src,
					a = Object(l.useContext)(X).dispatch,
					n = function(e) {
						a(Ut("authModal", !0, {
							redirectURL: window.location.href,
							authMode: wt.LOG_IN,
							src: t
						}))
					},
					r = Object(l.useCallback)(n, []);
				return Object(l.useEffect)((function() {
					r()
				}), [r]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "You need to login first"), c.a.createElement("p", {
					className: "lead"
				}, "Please make sure you're logged in to your account before accessing this page"), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: n
				}, "Login"), c.a.createElement(de.a, {
					color: "secondary",
					onClick: function(e) {
						a(Ut("authModal", !0, {
							redirectURL: window.location.href,
							authMode: wt.SIGN_UP,
							src: t
						}))
					}
				}, "Sign up")))))))))))
			},
			jt = function(e) {
				var t = e.message,
					a = Object(ee.g)();
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "This is a premium-only feature"), c.a.createElement("p", {
					className: "lead"
				}, t || null), c.a.createElement("p", {
					className: "lead"
				}, "Get Requestly Premium for ", c.a.createElement("strong", null, "free"), " by", " ", c.a.createElement(i.b, {
					to: Y.PATHS.REFERRAL.RELATIVE
				}, "Referring your friends", " ", c.a.createElement("span", {
					"aria-label": "congratulations",
					role: "img"
				}, "\ud83c\udf89")), ".", " "), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return ye(a)
					}
				}, "Get Requestly Premium")))))))))))
			},
			kt = function(e) {
				var t = e.component,
					a = e.premiumRequired,
					n = e.premiumMessage,
					r = e.routeSrc,
					o = Object(Ye.a)(e, ["component", "premiumRequired", "premiumMessage", "routeSrc"]),
					s = Object(l.useContext)(X).state,
					i = tt(s),
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1];
				return Object(l.useEffect)((function() {
					d || p(pt(i))
				}), [i, d]), c.a.createElement(c.a.Fragment, null, i.loggedIn ? a && !d ? c.a.createElement(jt, {
					message: n
				}) : c.a.createElement(t, o) : c.a.createElement(xt, {
					src: r
				}))
			},
			Mt = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: He
				}))
			},
			Gt = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: "header bg-gradient-info bg-gradient-blue pb-6 pt-5 pt-lg-6 d-flex align-items-center"
						}))
					}
				}]), a
			}(c.a.Component),
			Ft = a(515),
			Bt = a(518),
			Vt = a(519),
			Ht = a(194),
			Yt = a(512),
			Wt = a(541),
			Kt = a(539),
			qt = a(510),
			Qt = a(511),
			zt = function(e) {
				switch (e) {
					case "marketer":
						return "Marketer";
					case "developer":
						return "Developer";
					case "designer":
						return "Designer";
					case "consultant":
						return "Consultant";
					case "support":
						return "Customer Support";
					case "eng_manager":
						return "Engineering Manager";
					case "prod_manager":
						return "Product Manager";
					case "tester":
						return "Tester";
					case "gamer":
						return "Video Gamer";
					case "goanimator":
						return "Goanimator";
					case "student":
						return "Student";
					case "other":
						return "Other";
					default:
						return "Developer"
				}
			},
			Jt = function(e, t) {
				return c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					style: {
						background: "transparent",
						border: "none",
						boxShadow: "none"
					},
					caret: !0
				}, ae()(e) ? "Choose" : e), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function() {
						return t("marketer", zt("marketer"))
					}
				}, zt("marketer")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("developer", zt("developer"))
					}
				}, zt("developer")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("designer", zt("designer"))
					}
				}, zt("designer")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("consultant", zt("consultant"))
					}
				}, zt("consultant")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("support", zt("support"))
					}
				}, zt("support")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("eng_manager", zt("eng_manager"))
					}
				}, zt("eng_manager")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("prod_manager", zt("prod_manager"))
					}
				}, zt("prod_manager")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("tester", zt("tester"))
					}
				}, zt("tester")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("gamer", zt("gamer"))
					}
				}, zt("gamer")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("goanimator", zt("goanimator"))
					}
				}, zt("goanimator")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("student", zt("student"))
					}
				}, zt("student")), c.a.createElement(Qt.a, {
					onClick: function() {
						return t("other", zt("other"))
					}
				}, zt("other"))))
			},
			Xt = a(540),
			Zt = (a(192), a(16)),
			$t = a.n(Zt),
			ea = a(27),
			ta = a(193),
			aa = a.n(ta),
			na = a(538),
			ra = function(e) {
				return new Date(e).toDateString()
			},
			la = function() {
				return (new Date).getTime()
			},
			ca = function() {
				return Math.random().toString(36).substr(2, 5)
			},
			oa = function(e) {
				return e.replace("_", " ").match(/([A-Z]?[^A-Z]*)/g).slice(0, -1).map((function(e) {
					return e.toLowerCase()
				})).join(" ")
			},
			sa = function(e) {
				return e.split("@")[1]
			},
			ia = function(e) {
				var t = sa(e);
				return !!t && !(Y.EMAIL_DOMAINS.PERSONAL.includes(t) || Y.EMAIL_DOMAINS.DESTROYABLE.includes(t))
			},
			ua = function(e) {
				return new Blob([e]).size
			},
			ma = function() {
				var e = (new Date).getHours();
				return e < 12 ? "Good Morning" : e >= 12 && e <= 17 ? "Good Afternoon" : "Good Evening"
			},
			Ea = function(e) {
				var t = Y.PRICING.COUNTRY_CODES.find((function(t) {
					return t.value === e
				}));
				return t ? t.label : null
			},
			da = function(e) {
				switch (e) {
					case S.CONSTANTS.APP_MODES.EXTENSION:
						return "Browser Extension";
					case S.CONSTANTS.APP_MODES.DESKTOP:
						return "Desktop App";
					case S.CONSTANTS.APP_MODES.CLOUDFLARE:
						return "Cloudflare App";
					case S.CONSTANTS.APP_MODES.WORDPRESS:
						return "Wordpress Plugin";
					default:
						return oa(e)
				}
			},
			pa = function(e) {
				switch (e) {
					case S.CONSTANTS.APP_MODES.EXTENSION:
						return "Extension";
					case S.CONSTANTS.APP_MODES.DESKTOP:
						return "Desktop App";
					case S.CONSTANTS.APP_MODES.CLOUDFLARE:
						return "Cloudflare";
					case S.CONSTANTS.APP_MODES.WORDPRESS:
						return "Wordpress";
					default:
						return oa(e)
				}
			},
			Sa = function(e) {
				return e && "string" === typeof e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
			},
			Aa = S.CONSTANTS.GA_EVENTS,
			Ta = function() {
				var e = Object(ea.a)($t.a.mark((function e(t, a) {
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.abrupt("return", Da.updateValueAsPromise(["customProfile", t, "signup"], {
									emailVerified: a
								}));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a) {
					return e.apply(this, arguments)
				}
			}(),
			fa = function(e, t) {
				t || (t = new Date);
				var a = t.toLocaleDateString("en-CA");
				return Ga(Aa.ATTR.SIGNUP_DATE, a), Da.setValue(["customProfile", e, "signup"], {
					signup_date: a
				})
			},
			Oa = function() {
				(function() {
					var e = Te.auth().currentUser;
					return e ? e.sendEmailVerification({
						url: window.location.href,
						handleCodeInApp: !0
					}) : Promise.reject({
						status: !1,
						errorCode: "Could not send Email"
					})
				})(window.location.href).then((function() {
					le.b.info("Check your inbox for verification link")
				})).catch((function(e) {
					le.b.error(e, {
						hideProgressBar: !0,
						autoClose: 6e3
					})
				})), Ma(Aa.CATEGORIES.USER, Aa.ACTIONS.EMAIL_VERIFICATION_RESEND, "verification sent from - ".concat(window.location.pathname))
			},
			Na = Y.PATHS,
			ba = S.CONSTANTS.GA_EVENTS,
			ga = S.COMPONENTS.LOGGER;

		function Ra(e) {
			var t = new Te.auth.GoogleAuthProvider;
			return t.addScope("profile"), t.addScope("email"), Te.auth().signInWithPopup(t).then((function(t) {
				Fa(ba.ACTIONS.GMAIL_LOGIN_PERFORMED), fa(t.user.uid), Ta(t.user.uid, !0);
				var a = La(t.user);
				return Te.database().ref(Ia(a.uid)).update(a), e && e.call(null, !0), a
			}))
		}
		var ha = function() {
				return new Promise(function() {
					var e = Object(ea.a)($t.a.mark((function e(t, a) {
						var n, r;
						return $t.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									n = Object(na.a)(), (r = Te.database().ref("ot-auth-codes/".concat(n))).on("value", function() {
										var e = Object(ea.a)($t.a.mark((function e(a) {
											var n, l;
											return $t.a.wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														if (n = a.val()) {
															e.next = 3;
															break
														}
														return e.abrupt("return");
													case 3:
														return e.next = 5, Te.auth().signInWithCustomToken(n);
													case 5:
														return l = e.sent, e.next = 8, r.remove();
													case 8:
														t(l.user);
													case 9:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(t) {
											return e.apply(this, arguments)
										}
									}()), window.open((a = n) ? "".concat(Na.AUTH.DEKSTOP_SIGN_IN.ABSOLUTE, "?ot-auth-code=").concat(a) : Na.AUTH.DEKSTOP_SIGN_IN.ABSOLUTE, "_blank");
								case 4:
								case "end":
									return e.stop()
							}
							var a
						}), e)
					})));
					return function(t, a) {
						return e.apply(this, arguments)
					}
				}())
			},
			Ca = function() {
				var e = Object(ea.a)($t.a.mark((function e(t, a) {
					var n, r;
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, Te.auth().signInWithEmailLink(t, window.location.href);
							case 3:
								return n = e.sent, r = La(n.user), Te.database().ref(Ia(r.uid)).update(r), a && a.call(null, !0), e.abrupt("return", r);
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", null);
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 10]
					])
				})));
				return function(t, a) {
					return e.apply(this, arguments)
				}
			}();

		function Ia(e) {
			return "users/" + e + "/profile"
		}

		function La(e) {
			var t = Object.assign({}, e.providerData[0]);
			return t.uid = e.uid, t.photoURL || (t.photoURL = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"), t.displayName || (t.displayName = "User"), t
		}

		function _a(e) {
			return Te.database().ref(e.join("/"))
		}

		function va(e, t) {
			_a(e).once("value", (function(e) {
				return t.call(null, e.val())
			}), (function() {
				return t.call(null, null)
			}))
		}

		function ya(e) {
			return new Promise((function(t, a) {
				return va(e, t)
			}))
		}

		function Pa(e, t, a) {
			_a(e).update(t, a)
		}

		function Ua(e, t) {
			return new Promise((function(a) {
				return Pa(e, t, a)
			}))
		}
		var Da = {
				isUserAuthenticated: function(e) {
					! function(e) {
						var t = Te.auth().currentUser;
						t ? e.call(null, La(t)) : e.call(null, null)
					}(e)
				},
				authenticate: function() {
					return Ra()
				},
				getValue: function(e) {
					return new Promise((function(t, a) {
						try {
							va(e, t)
						} catch (n) {
							a(n)
						}
					}))
				},
				setValue: function(e, t) {
					return function(e, t) {
						return _a(e).set(t)
					}(e, t)
				},
				updateValueAsPromise: function(e, t) {
					return Ua(e, t)
				},
				updateValue: function(e, t) {
					return Pa(e, t)
				}
			},
			wa = S.CONSTANTS.GA_EVENTS;

		function xa(e) {
			if (e.attr && e.value) {
				var t = e.attr.toLowerCase(),
					a = e.value;
				if (Da.isUserAuthenticated((function(e) {
						e && e.uid && function(e, t, a) {
							var n = e.uid,
								r = {};
							r[t] = a, Te.database().ref("/customProfile/".concat(n, "/attributes")).update(r)
						}(e, t, a)
					})), window.HelpCrunch && window.helpCrunchSettings && window.helpCrunchSettings.email && window.helpCrunchSettings.user_id) {
					var n = {};
					n[t] = a, window.HelpCrunch("updateUserData", n)
				}
				if (window.sib && window.sendinblue && window.sib.email_id) {
					var r = window.sib.email_id,
						l = {};
					l[t] = a, window.sendinblue.identify(r, l)
				}
				wa.GA_CUSTOM_METRICS[t] && window.ga("set", wa.GA_CUSTOM_METRICS[t], a), window.fcWidget && window.fcWidget.user.setProperties({
					[t]: a
				})
			}
		}

		function ja(e) {
			if (e && e.uid && e.providerData && e.providerData.length > 0) {
				var t = e.providerData[0];
				return {
					name: t.displayName,
					email: t.email,
					uid: e.uid
				}
			}
		}
		var ka = S.CONSTANTS.GA_EVENTS,
			Ma = function(e, t, a, n) {
				var r;
				(r = {
					eventCategory: e,
					eventAction: t,
					eventLabel: a ? a.replace(".", "_").replace("@", "_at_") : null,
					eventValue: n
				}).eventValue && "number" == typeof r.eventValue ? window.ga("send", {
					hitType: "event",
					eventCategory: r.eventCategory,
					eventAction: r.eventAction,
					eventLabel: r.eventLabel,
					eventValue: Math.ceil(r.eventValue)
				}) : window.ga("send", {
					hitType: "event",
					eventCategory: r.eventCategory,
					eventAction: r.eventAction,
					eventLabel: r.eventLabel
				}), window.HelpCrunch && window.helpCrunchSettings && window.helpCrunchSettings.email && window.helpCrunchSettings.user_id && window.HelpCrunch("trackEvent", r.eventLabel), window.sib && window.sendinblue && window.sib.email_id && window.sendinblue.track(r.eventLabel, {
					eventCategory: r.eventCategory
				}, {
					eventAction: r.eventAction
				}), window.fcWidget && window.fcWidget.track(r.eventAction, {
					category: r.eventCategory,
					label: r.eventLabel
				})
			},
			Ga = function(e, t) {
				xa({
					attr: e,
					value: String(t).replace(".", "_")
				})
			},
			Fa = function(e) {
				Ma(ka.CATEGORIES.LOGIN, e, ka.CATEGORIES.LOGIN + "_" + e)
			},
			Ba = function(e) {
				var t = e.split("@")[1],
					a = function(e) {
						var t = sa(e);
						return t ? Y.EMAIL_DOMAINS.PERSONAL.includes(t) ? "PERSONAL" : Y.EMAIL_DOMAINS.DESTROYABLE.includes(t) ? "DESTROYABLE" : ia(e) ? "BUSINESS" : "UNDEFINED" : "UNDEFINED"
					}(e);
				Ma(ka.CATEGORIES.SIGNUP, "SignUp with ".concat(a, " email"), "".concat(a, " email - @").concat(t))
			},
			Va = function(e) {
				Ma(ka.CATEGORIES.PAGE_VISITS, "visit ".concat(e), "".concat(ka.CATEGORIES.PAGE_VISITS, "_").concat(e))
			},
			Ha = S.CONSTANTS.GA_EVENTS,
			Ya = function(e) {
				var t = e.isOpen,
					a = e.handleToggleModal,
					n = Object(ee.g)(),
					r = Object(l.useState)(""),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1];
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered",
					isOpen: t,
					toggle: a
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Create New Team"), c.a.createElement("button", {
					"aria-label": "Close",
					occured: !0,
					while: !0,
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto",
					sm: "5"
				}, c.a.createElement("span", null, "Name your team")), c.a.createElement(me.a, {
					className: "my-auto",
					style: {
						fontSize: "0.9em"
					},
					sm: "7"
				}, c.a.createElement(Yt.a, {
					className: "form-control",
					type: "text",
					placeholder: "Team name",
					style: {
						textTransform: "capitalize"
					},
					value: s,
					onChange: function(e) {
						i(e.target.value), Ma(Ha.CATEGORIES.TEAMS, Ha.ACTIONS.WORKFLOW_STARTED, "Name for New Team entered by user")
					}
				})))), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, "Close"), c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					disabled: ae()(s) || d,
					onClick: function(e) {
						e && e.preventDefault(), p(!0), Te.functions().httpsCallable("createTeam")({
							teamName: s
						}).then((function(e) {
							le.b.info("Team Created");
							var t = e.data.teamId;
							p(!1), Ue(n, t), Ma(Ha.CATEGORIES.TEAMS, Ha.ACTIONS.CREATED, "New Team Created Redirected to New Team Page", {
								teamName: s
							})
						})).catch((function(e) {
							le.b.error("Unable to Create Team"), Ma(Ha.CATEGORIES.TEAMS, Ha.ACTIONS.ERROR, "Error in creating New Team", {
								error: e.message
							}), p(!1)
						}))
					}
				}, d ? c.a.createElement(R.S, {
					className: "icon-spin"
				}) : c.a.createElement("span", null, "Create Team"))))
			},
			Wa = function() {
				var e = Object(l.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", null, "You can create or join mulitple teams. Each team is billed separately and subscription is shared with all memebers."), c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					size: "sm",
					onClick: function() {
						return n(!0)
					}
				}, "Create your first team"), c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function(e) {
						return window.open(Y.LINKS.REQUESTLY_DOCS_TEAM_SUBSCRIPTION, "_blank")
					}
				}, "Know More")))), c.a.createElement(Ya, {
					isOpen: a,
					handleToggleModal: function() {
						n(!a)
					}
				}))
			},
			Ka = a(513),
			qa = a(514),
			Qa = S.CONSTANTS.GA_EVENTS,
			za = function(e) {
				var t = e.teams,
					a = void 0 === t ? [] : t,
					n = Object(ee.g)(),
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "text-right mb-3"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-1",
					color: "primary",
					type: "button",
					size: "sm",
					onClick: function() {
						i(!0), Ma(Qa.CATEGORIES.TEAMS, Qa.ACTIONS.CLICKED, "Create New Team Btn Clicked")
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.H, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Create New Team"))), c.a.createElement(Ka.a, {
					className: "align-items-center",
					responsive: !0
				}, c.a.createElement("thead", {
					className: "thead-light"
				}, c.a.createElement("tr", null, c.a.createElement("th", {
					scope: "col"
				}, "Team"), c.a.createElement("th", {
					className: "text-center",
					scope: "col"
				}, "Members"), c.a.createElement("th", {
					className: "text-center",
					scope: "col"
				}, "Admins"), c.a.createElement("th", {
					scope: "col"
				}, "Subscription"), c.a.createElement("th", {
					scope: "col"
				}, "Actions"))), c.a.createElement("tbody", null, a.map((function(e, t) {
					return c.a.createElement("tr", {
						key: e.id,
						onClick: function() {
							Ue(n, e.id), Ma(Qa.CATEGORIES.TEAMS, Qa.ACTIONS.ROUTE_VIEWED, "Redirected to Selected Team Page by user", {
								teamId: e.id
							})
						},
						className: "cursor-pointer"
					}, c.a.createElement("th", {
						scope: "row"
					}, c.a.createElement("div", {
						className: "align-items-center"
					}, c.a.createElement("span", {
						className: "mb-0 text-sm underline-text-on-hover cursor-pointer"
					}, e.name))), c.a.createElement("td", {
						className: "text-center"
					}, e.accessCount), c.a.createElement("td", {
						className: "text-center"
					}, e.adminCount), c.a.createElement("td", null, c.a.createElement(qa.a, {
						color: "",
						className: "badge-dot mr-4"
					}, function(e, t) {
						switch (e) {
							case "active":
								return c.a.createElement("span", {
									className: "cursor-pointer",
									onClick: function() {
										return Ue(n, t)
									}
								}, c.a.createElement("i", {
									className: "bg-success"
								}), "Active");
							case "incomplete":
								return c.a.createElement(de.a, {
									className: "btn-icon btn-3",
									color: "primary",
									size: "sm",
									type: "button",
									onClick: function() {
										return Ue(n, t)
									}
								}, c.a.createElement("span", {
									className: "btn-inner--icon"
								}, c.a.createElement(R.F, null)), c.a.createElement("span", {
									className: "btn-inner--text"
								}, "Pay now"));
							default:
								return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
									className: "bg-danger"
								}), "Inactive")
						}
					}(e.subscriptionStatus, e.id))), c.a.createElement("td", null, c.a.createElement(de.a, {
						className: "btn-icon btn-2  has-no-box-shadow",
						color: "secondary",
						type: "button",
						size: "sm",
						outline: !0
					}, c.a.createElement("span", {
						className: "btn-inner--icon"
					}, c.a.createElement(R.k, null)))))
				})))), c.a.createElement(Ya, {
					isOpen: s,
					handleToggleModal: function() {
						i(!s)
					}
				}))
			},
			Ja = function() {
				var e = Object(l.useState)(!0),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)([]),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useRef)(!0),
					E = Object(l.useCallback)((function() {
						n(!0), Te.functions().httpsCallable("getUserTeams")().then((function(e) {
							if (!m.current) return null;
							var t = e.data;
							if (!t.success) throw new Error("Unable to find team");
							i(t.data), n(!1)
						})).catch((function(e) {
							if (!m.current) return null;
							console.log(e), le.b.error("You dont have permission to view this team.")
						}))
					}), []);
				return Object(l.useEffect)((function() {
					return E(),
						function() {
							m.current = !1
						}
				}), [E]), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "animated fadeIn"
				}, s.length > 0 ? c.a.createElement(za, {
					teams: s
				}) : c.a.createElement(c.a.Fragment, null, a ? c.a.createElement(fe, {
					customLoadingMessage: "Loading Teams"
				}) : c.a.createElement(Wa, null))))
			},
			Xa = function(e) {
				var t = e.customHeading,
					a = e.hideShadow,
					n = Object(ee.g)();
				return c.a.createElement(pe.a, {
					className: "my-4"
				}, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: a ? "has-no-border has-no-box-shadow" : "shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h3", {
					className: "mb-0"
				}, t || "My Subscription")))), c.a.createElement(Ae.a, null, c.a.createElement("div", {
					style: {
						textAlign: "center"
					},
					className: "mb-4"
				}, c.a.createElement("p", null, "Get the most out of Requestly. Upgrade to one of our premium plans."), c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					size: "sm",
					onClick: function() {
						return ye(n)
					}
				}, "View Plans"), c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function(e) {
						return window.open(Y.LINKS.REQUESTLY_DOCS_PREMIUM_SUBSCRIPTION, "_blank")
					}
				}, "Know More"))))))
			},
			Za = ut,
			$a = function(e) {
				switch (parseInt(e)) {
					case 30:
						return "monthly";
					case 90:
						return "quarterly";
					case 180:
						return "half-yearly";
					case 365:
						return "annual";
					default:
						return !1
				}
			},
			en = function(e) {
				switch (parseInt(e)) {
					case 30:
						return "month";
					case 365:
						return "year";
					default:
						return "month"
				}
			},
			tn = function(e) {
				switch (e) {
					case "monthly":
						return 30;
					case "quarterly":
						return 90;
					case "half-yearly":
						return 180;
					case "annual":
						return 365;
					default:
						return 30
				}
			},
			an = {
				IN: "INR",
				MX: "MXN",
				GB: "GBP",
				EU: "EUR",
				US: "USD",
				CA: "CAD"
			},
			nn = function(e, t) {
				var a;
				switch (a = !t && e ? rn(e) : t) {
					case "INR":
						return "\u20b9";
					case "MXN":
						return "Mex$";
					case "USD":
						return "$";
					case "GBP":
						return "\xa3";
					case "EUR":
						return "\u20ac";
					case "CAD":
						return "C$";
					default:
						return a
				}
			},
			rn = function(e) {
				return an[e] || "USD"
			},
			ln = function(e, t) {
				var a = Za.find((function(t) {
					return t.id === e
				}));
				return a || Fe(null, !0), (a[t] || Fe(null, !0)).planId || Fe(null, !0)
			},
			cn = function(e) {
				switch (e) {
					case "active":
						return "Active";
					case "incomplete":
					case "unpaid":
						return "Payment pending";
					case "incomplete_expired":
						return "Payment Unsuccessful";
					case "trialing":
						return "Active Trial Period";
					case "past_due":
						return "Past due";
					case "canceled":
						return "Cancelled";
					default:
						return "Contact us"
				}
			},
			on = function(e) {
				var t = e.customHeading,
					a = e.hideShadow,
					n = e.hideManagePersonalSubscriptionButtion,
					r = e.subscriptionDetails,
					l = Object(ee.g)(),
					o = r.validFrom,
					s = r.validTill,
					i = r.status,
					u = r.type;
				return r ? c.a.createElement(pe.a, {
					className: "my-4"
				}, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: a ? "has-no-border has-no-box-shadow" : "shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, t || "Current Subscription")), n ? null : c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					outline: !0,
					color: "primary",
					type: "button",
					size: "sm",
					onClick: function() {
						return we(l)
					}
				}, "Manage Personal Subscription")))), c.a.createElement(Ae.a, null, c.a.createElement(re.a, {
					className: "mr-4 ml-4 mb-2 pr-4 pl-4 pb-2"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					className: "light-text font-weight-400"
				}, "Status: "), c.a.createElement("span", {
					className: "light-text "
				}, cn(i), " "), "canceled" === i || "incomplete_expired" === i ? c.a.createElement(c.a.Fragment, null, c.a.createElement(de.a, {
					size: "sm",
					color: "primary",
					outline: !0,
					onClick: function(e) {
						e.preventDefault(), "individual" === u ? xe({
							mode: u,
							planType: "gold",
							days: 365
						}) : "team" === u ? De(l) : ye(l)
					}
				}, "Renew")) : null), c.a.createElement(me.a, {
					className: "text-right"
				}, c.a.createElement("span", {
					className: "light-text font-weight-400"
				}, "Type: "), c.a.createElement("span", {
					className: "light-text"
				}, function(e) {
					switch (e) {
						case "team":
							return "Team Subscription";
						case "unlock":
							return "Unlocked Subscription";
						case "license":
							return "Enterprise Plan";
						case "paypal":
							return "Paypal Subscription";
						case "individual":
							return "Personal Subscription";
						default:
							return "Premium Plan"
					}
				}(u)))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					className: "light-text font-weight-400"
				}, "Valid From:"), " ", c.a.createElement("span", {
					className: "light-text"
				}, new Date(o).toDateString())), c.a.createElement(me.a, {
					className: "text-right"
				}, c.a.createElement("span", {
					className: "light-text font-weight-400"
				}, "Valid Till:"), " ", c.a.createElement("span", {
					className: "light-text"
				}, new Date(s).toDateString())))))))) : c.a.createElement(c.a.Fragment, null)
			},
			sn = function(e) {
				var t = e.hideShadow,
					a = e.customHeading,
					n = e.hideManagePersonalSubscriptionButtion,
					r = e.hideIfSubscriptionIsPersonal,
					o = e.hideIfNoSubscription,
					s = Object(l.useContext)(X).state,
					i = tt(s),
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(!1),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(!1),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					R = Object(l.useState)(!1),
					h = Object(u.a)(R, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(!1),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1];
				return Object(l.useEffect)((function() {
					i.details && i.details.planDetails && i.details.planDetails.status ? (p(i.details.planDetails.status), f(i.details.planDetails.type), g(i.details.planDetails.subscription.startDate), I(i.details.planDetails.subscription.endDate)) : y(!0)
				}), [i]), i ? r && i && i.details && i.details.planDetails && "individual" === i.details.planDetails.type || o && v ? c.a.createElement(c.a.Fragment, null) : c.a.createElement(c.a.Fragment, null, d && T && b && C && !v ? c.a.createElement(on, {
					customHeading: a,
					hideShadow: t,
					hideManagePersonalSubscriptionButtion: n,
					subscriptionDetails: {
						validFrom: b,
						validTill: C,
						status: d,
						type: T
					}
				}) : c.a.createElement(Xa, {
					customHeading: a,
					hideShadow: t
				})) : c.a.createElement(c.a.Fragment, null)
			},
			un = a(516),
			mn = a(517),
			En = a(55),
			dn = function(e) {
				var t = Te.auth().currentUser;
				t ? ya(["userSubscriptions", t.uid, "planDetails"]).then((function(a) {
					e(ht(!0, {
						profile: La(t),
						isLoggedIn: !0,
						planDetails: a
					}))
				})).catch((function(t) {
					console.error("Unable to fetch user plan", t.message), e(ht(!1, !1))
				})) : e(ht(!1, !1))
			},
			pn = function(e) {
				var t = e.customHeading,
					a = e.shadow,
					n = e.hideBillingAddress,
					r = (e.hideIndiaInCountryList, Object(l.useContext)(X)),
					o = r.dispatch,
					s = r.state,
					i = tt(s),
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(""),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(""),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					R = Object(l.useState)(""),
					h = Object(u.a)(R, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(""),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = Object(l.useState)(""),
					U = Object(u.a)(P, 2),
					D = U[0],
					w = U[1],
					x = Object(l.useState)(""),
					j = Object(u.a)(x, 2),
					k = j[0],
					M = j[1],
					G = Object(l.useState)(""),
					F = Object(u.a)(G, 2),
					B = F[0],
					V = F[1],
					H = function() {
						(function(e, t) {
							var a = t.CompanyName,
								n = t.FullName,
								r = t.Address,
								l = {};
							if (a && (l.companyName = a), n && (l.displayName = n), r) {
								var c = r.AddrLine1,
									o = r.AddrLine2,
									s = r.AddrCity,
									i = r.AddrState,
									u = r.AddrCountry,
									m = r.AddrZIP;
								l.address = {}, c && (l.address.line1 = c), o && (l.address.line2 = o), s && (l.address.city = s), i && (l.address.state = i), u && (l.address.country = u), m && (l.address.postal_code = m)
							}
							return Da.updateValueAsPromise(["users", e, "profile"], l)
						})(i.details.profile.uid, {
							FullName: T,
							Address: {
								AddrLine1: b,
								AddrLine2: C,
								AddrCity: v,
								AddrState: D,
								AddrCountry: k,
								AddrZIP: B
							}
						}).then((function() {
							p(!1), dn(o), le.b.info("Profile saved")
						}))
					};
				return Object(l.useEffect)((function() {
					Da.getValue(["users", i.details.profile.uid]).then((function(e) {
						if (e) {
							var t = e.profile;
							t && (t.displayName && f(t.displayName), t.address && (t.address.line1 && g(t.address.line1), t.address.line2 && I(t.address.line2), t.address.city && y(t.address.city), t.address.state && w(t.address.state), t.address.postal_code && V(t.address.postal_code), t.address.country && M(t.address.country)))
						}
					}))
				}), [i]), c.a.createElement(Se.a, {
					className: a ? "shadow" : "has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					xs: "8"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, t || "My account")))), c.a.createElement(Ae.a, null, c.a.createElement(mn.a, null, c.a.createElement("h6", {
					className: "heading-small text-muted mb-4"
				}, "Basic information"), c.a.createElement("div", {
					className: "pl-lg-4"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "6"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-username"
				}, "Name"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					value: T,
					id: "input-username",
					placeholder: "Full Name",
					type: "text",
					onChange: function(e) {
						p(!0), f(e.target.value)
					},
					style: {
						textTransform: "capitalize"
					}
				}))), c.a.createElement(me.a, {
					lg: "6"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-email"
				}, "Email address"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-email",
					placeholder: "Email address",
					type: "email",
					disabled: "disabled",
					defaultValue: i.details.profile.email
				}))))), n ? c.a.createElement(c.a.Fragment, null) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {
					className: "heading-small text-muted mb-4"
				}, "Billing address"), c.a.createElement("div", {
					className: "pl-lg-4"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					md: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-address-line1"
				}, "Line 1"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-address-line1",
					placeholder: "Street",
					type: "text",
					value: b,
					onChange: function(e) {
						p(!0), g(e.target.value)
					}
				}))), c.a.createElement(me.a, {
					md: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-address-line2"
				}, "Line 2"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-address-line2",
					placeholder: "Appartment",
					type: "text",
					value: C,
					onChange: function(e) {
						p(!0), I(e.target.value)
					}
				}))), c.a.createElement(me.a, {
					md: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-address-city"
				}, "City"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-address-city",
					placeholder: "City",
					type: "text",
					value: v,
					onChange: function(e) {
						p(!0), y(e.target.value)
					}
				})))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-state"
				}, "State"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-state",
					placeholder: "State",
					type: "text",
					value: D,
					onChange: function(e) {
						p(!0), w(e.target.value)
					}
				}))), c.a.createElement(me.a, {
					lg: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-country"
				}, "Country"), c.a.createElement(En.a, {
					styles: Y.STYLES.reactSelectCustomStyles,
					id: "input-country",
					className: "form-control-alternative",
					classNamePrefix: "form-control-alternative",
					placeholder: "eg. United States",
					options: Y.PRICING.COUNTRY_CODES,
					value: Object(Oe.isEmpty)(k) ? null : {
						value: k,
						label: Ea(k)
					},
					onChange: function(e) {
						p(!0), M(e.value)
					}
				}))), c.a.createElement(me.a, {
					lg: "4"
				}, c.a.createElement(un.a, null, c.a.createElement("label", {
					className: "form-control-label",
					htmlFor: "input-zip-code"
				}, "ZIP/Postal Code"), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					id: "input-zip-code",
					placeholder: "eg. V6B 3K9",
					type: "text",
					value: B,
					onChange: function(e) {
						p(!0), V(e.target.value)
					}
				})))))), d ? c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center",
					xs: "12"
				}, c.a.createElement(de.a, {
					color: d ? "primary" : "secondary",
					onClick: H,
					size: "sm",
					disabled: !d
				}, "Save"))) : c.a.createElement(c.a.Fragment, null), c.a.createElement("br", null), c.a.createElement("br", null))))
			},
			Sn = a(81),
			An = a.n(Sn),
			Tn = "forgot-password",
			fn = "sign-in",
			On = "sign-up",
			Nn = function(e) {
				le.b.error(e, {
					hideProgressBar: !0,
					autoClose: 6e3
				})
			},
			bn = function(e) {
				le.b.warn(e, {
					hideProgressBar: !0
				})
			},
			gn = function(e) {
				le.b.info(e, {
					hideProgressBar: !0,
					autoClose: 5e3
				})
			},
			Rn = function(e, t) {
				switch (e) {
					case fn:
						return function(e) {
							switch (e) {
								case "auth/invalid-email":
									return "Please enter a valid email";
								case "auth/user-not-found":
									return "This email is not registered. Please sign up.";
								case "auth/wrong-password":
									return "Invalid email or password. Please try again or use Forgot Password.";
								case "auth/user-disabled":
									return "Sorry but your account is disabled. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL;
								default:
									return "Sorry, we couldn\u2019t log you in. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL
							}
						}(t);
					case On:
						return function(e) {
							switch (e) {
								case "no-name":
									return "Please enter your name.";
								case "no-email":
								case "auth/invalid-email":
									return "Please enter a valid email address.";
								case "no-password":
									return "Please enter a password to create.";
								case "auth/email-already-in-use":
									return "The email you entered is already in use. Try signing in.";
								case "auth/weak-password":
									return "Please choose a stronger password";
								case "auth/operation-not-allowed":
									return "Sorry but your account is disabled. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL;
								default:
									return "Sorry, we couldn\u2019t sign you up. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL
							}
						}(t);
					case Tn:
						return function(e) {
							switch (e) {
								case "auth/user-not-found":
									return "Unable to find an account with this email address. Please try again.";
								case "auth/invalid-email":
									return "This email seems invalid. Please recheck.";
								default:
									return "Unable to request new password this time. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL
							}
						}(t);
					default:
						return "An unexpected has occurred. Please write us at " + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL
				}
			},
			hn = function(e, t, a, n, r, l, c) {
				switch (e && e.preventDefault(), r) {
					case Y.FEATURES.SHARED_LISTS:
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Email Login requested on SharedList index page");
						break;
					case Y.FEATURES.RULES:
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Email Login requested on rules index page")
				}
				return ae()(t) || !An()(t) ? (bn("Please enter a valid email"), null) : ae()(a) ? (bn("Opps! You forgot to enter password"), null) : (n && n(!0), void
					function(e, t) {
						return Te.auth().signInWithEmailAndPassword(e, t).then((function(e) {
							return ga.log("Profile Logged In Successfully"), Fa(ba.ACTIONS.EMAIL_LOGIN_PERFORMED), Promise.resolve({
								status: !0,
								msg: "Profile Logged In Successfully",
								result: e
							})
						})).catch((function(e) {
							var t = e.code,
								a = e.message;
							return Promise.reject({
								status: !1,
								msg: a,
								errorCode: t
							})
						}))
					}(t, a).then((function(e) {
						var t = e.result;
						if (t.user.uid) {
							switch (gn("".concat(ma(), ", ").concat(t.user.displayName.split(" ")[0])), r) {
								case Y.FEATURES.SHARED_LISTS:
									Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Email Login done on SharedList index page");
									break;
								case Y.FEATURES.RULES:
									Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Email Login done on Rules index page")
							}
							l && l()
						} else Nn("Sorry we couldn't log you in. Can you please retry?"), n && n(!1), c && c()
					})).catch((function(e) {
						var t = e.errorCode;
						if (Nn(Rn(fn, t)), r) switch (r) {
							case Y.FEATURES.SHARED_LISTS:
								Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Email Login rejected on SharedList index page");
								break;
							case Y.FEATURES.RULES:
								Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Email Login rejected on Rules index page")
						}
						n && n(!1), c && c()
					})))
			},
			Cn = function(e, t, a, n, r) {
				switch (e && e(!0), t) {
					case Y.FEATURES.SHARED_LISTS:
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Apple Login requested on SharedList index page");
						break;
					case Y.FEATURES.RULES:
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Apple Login requested on rules index page")
				}(function(e) {
					var t = new Te.auth.OAuthProvider("apple.com");
					return Te.auth().signInWithPopup(t).then((function(t) {
						Fa(ba.ACTIONS.APPLE_LOGIN_PERFORMED), fa(t.user.uid), Ta(t.user.uid, !0);
						var a = La(t.user);
						return Te.database().ref(Ia(a.uid)).update(a), e && e.call(null, !0), a
					}))
				})().then((function(l) {
					if (l && l.uid) {
						switch (gn("".concat(ma(), ", ").concat(l.displayName.split(" ")[0])), t) {
							case Y.FEATURES.SHARED_LISTS:
								Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Apple Login done on SharedList index page");
								break;
							case Y.FEATURES.RULES:
								Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Apple Login done on Rules index page")
						}
						n === Y.AUTH.ACTION_LABELS.SIGN_UP && Ge(r), a && a()
					} else if (Nn("Sorry, the email or password you have entered isn't right. Can you please try again?"), e && e(!1), t) switch (t) {
						case Y.FEATURES.SHARED_LISTS:
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Apple login rejected on SharedList index page");
							break;
						case Y.FEATURES.RULES:
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Apple login rejected on Rules index page")
					}
				})).catch((function() {
					e && e(!1)
				}))
			},
			In = function(e, t, a, n, r, l, c) {
				e.preventDefault(), l(!0),
					function(e, t, a, n) {
						return !e || ae()(e) ? Promise.reject({
							status: !1,
							errorCode: "no-name"
						}) : !t || ae()(t) ? Promise.reject({
							status: !1,
							errorCode: "no-email"
						}) : !a || ae()(a) ? Promise.reject({
							status: !1,
							errorCode: "no-password"
						}) : Te.auth().createUserWithEmailAndPassword(t, a).then((function(a) {
							return a.user.sendEmailVerification({
								url: window.location.href,
								handleCodeInApp: !0
							}).then((function() {
								fa(a.user.uid), Ta(a.user.uid, !1)
							})), a.user.updateProfile({
								displayName: e,
								photoURL: "https://www.gravatar.com/avatar/".concat(aa()(t))
							}).then((function() {
								var e = La(a.user);
								return Te.database().ref(Ia(e.uid)).update(e).then((function() {
									(ga.log("Profile Created Successfully"), Ba(e.email), n) && Te.functions().httpsCallable("applyRefCode")({
										code: n,
										uid: e.uid,
										email: e.email
									}).then((function(e) {
										return e && e.data && e.data.reward ? (Ma(ba.CATEGORIES.REFERRAL, ba.ACTIONS.REFERRAL_APPLIED, "".concat(ba.CATEGORIES.REFERRAL, "_").concat(e.data.reward.type)), {
											success: !0,
											msg: "Referral Code applied successfully!",
											result: e.data
										}) : (Ma(ba.CATEGORIES.REFERRAL, ba.ACTIONS.REFERRAL_FAILED, "".concat(ba.CATEGORIES.REFERRAL, "_").concat(ba.ACTIONS.REFERRAL_FAILED)), {
											success: !1,
											msg: "Invalid Referral Code",
											result: e.data
										})
									})).catch(console.error);
									return Promise.resolve({
										status: !0,
										msg: "SignUp Successfull"
									})
								})).catch((function() {
									return Promise.reject({
										status: !1,
										errorCode: ""
									})
								}))
							})).catch((function() {
								return Promise.reject({
									status: !1,
									errorCode: ""
								})
							}))
						})).catch((function(e) {
							var t = e.code;
							return Promise.reject({
								status: !1,
								errorCode: t
							})
						}))
					}(t, a, n, r).then((function(e) {
						var t = e.status,
							r = e.errorCode;
						t ? (gn("Check your email for link to verify email"), hn(null, a, n), Ge(c)) : (Nn(Rn(On, r)), l(!1))
					})).catch((function(e) {
						var t = e.errorCode;
						Nn(Rn(On, t)), l(!1)
					}))
			},
			Ln = function(e, t, a, n) {
				if (e.preventDefault(), ae()(t) || !An()(t)) return bn("Please enter a valid email"), null;
				a(!0),
					function(e) {
						return Te.auth().sendPasswordResetEmail(e).then((function(e) {
							return ga.log("Password reset email sent"), Promise.resolve({
								status: !0,
								msg: "Password reset email sent"
							})
						})).catch((function(e) {
							var t = e.code;
							return Promise.reject({
								status: !1,
								errorCode: t
							})
						}))
					}(t).then((function(e) {
						var t = e.status,
							r = e.msg;
						t ? (gn(r), a(!1), n && n()) : (Nn(r), a(!1))
					})).catch((function(e) {
						var t = e.errorCode;
						Nn(Rn(Tn, t)), a(!1)
					}))
			},
			_n = function(e, t, a, n, r) {
				var l = function(e) {
					e ? (n(!1), t && (r && r(), gn("Password reset successful. Logging you in."), hn(null, t, a))) : (Nn("Please try again with a stronger password or request a new reset link."), n(!1))
				};
				(function(e, t) {
					return t ? Te.auth().confirmPasswordReset(e, t).then((function(e) {
						return ga.log("Password reset successfull"), Promise.resolve({
							status: !0,
							msg: "Password Reset Successful"
						})
					})).catch((function(e) {
						var t = e.message;
						return ga.log("Error Reseting Password"), Promise.reject({
							status: !1,
							msg: t
						})
					})) : Promise.reject({
						status: !1,
						msg: "Password is Required"
					})
				})(e, a).then((function(e) {
					var t = e.status;
					e.msg;
					l(t)
				}), (function(e) {
					var t = e.status;
					e.msg;
					l(t)
				})).catch((function() {
					l(!1)
				}))
			},
			vn = function(e, t, a, n, r) {
				if (e.preventDefault(), ae()(t)) return bn("Please set a new password"), null;
				a(!0);
				var l, c = function() {
						var e = new URLSearchParams(window.location.search);
						return e.has("oobCode") ? e.get("oobCode") : null
					}(),
					o = function(e, l) {
						e ? _n(c, l, t, a, r) : (Nn("This Link has been expired. Please create a new reset request."), a(!1), ve(n))
					};
				(l = c, l ? Te.auth().verifyPasswordResetCode(l).then((function(e) {
					return Promise.resolve({
						status: !0,
						email: e
					})
				})).catch((function() {
					return ga.log("Invalid OOB Code"), Promise.reject({
						status: !1,
						msg: ""
					})
				})) : Promise.reject({
					status: !1,
					msg: ""
				})).then((function(e) {
					var t = e.status,
						a = (e.msg, e.email);
					o(t, a)
				}), (function(e) {
					var t = e.status;
					e.msg;
					o(t, null)
				})).catch((function() {
					o(!1, null)
				}))
			},
			yn = function() {
				var e = Object(ea.a)($t.a.mark((function e() {
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, e.abrupt("return", Te.auth().signOut());
							case 4:
								return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return", console.log(e.t0));
							case 7:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 4]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Pn = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X),
					a = t.dispatch,
					n = t.state,
					r = tt(n),
					o = Object(l.useState)(!1),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useState)(""),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useState)(""),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = r.details.profile.photoURL ? r.details.profile.photoURL : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
					b = r.details.profile.displayName ? r.details.profile.displayName : "User";
				if ("URLSearchParams" in window) {
					var g = new URL(N),
						R = g.searchParams;
					R.set("s", "180"), g.search = R.toString(), N = g.toString()
				}
				return Object(l.useEffect)((function() {
					r.details && Da.getValue(["customProfile", r.details.profile.uid]).then((function(e) {
						if (e) {
							var t = e.position,
								a = e.companyName;
							t && S(zt(t)), a && O(a)
						}
					}))
				}), [r.details.profile.uid, r]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "order-xl-2 mb-5 mb-xl-0",
					xl: "4"
				}, c.a.createElement(Se.a, {
					className: "card-profile shadow"
				}, c.a.createElement(pe.a, {
					className: "justify-content-center"
				}, c.a.createElement(me.a, {
					className: "order-lg-2",
					lg: "3"
				}, c.a.createElement("div", {
					className: "card-profile-image"
				}, c.a.createElement("a", {
					href: "https://gravatar.com",
					target: "_blank",
					rel: "noopener noreferrer"
				}, c.a.createElement("img", {
					alt: "...",
					className: "rounded-circle",
					src: N
				}))))), c.a.createElement(Ft.a, {
					className: "text-center border-0 pt-1 pt-md-1 pb-0 pb-md-1"
				}), c.a.createElement(Ae.a, {
					className: "pt-0 pt-md-1"
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement("div", {
					className: "card-profile-stats d-flex justify-content-center mt-md-5"
				}))), c.a.createElement("div", {
					className: "text-center"
				}, c.a.createElement("h3", null, b), c.a.createElement("div", {
					className: "h5 mt-4"
				}, c.a.createElement("i", {
					className: "ni business_briefcase-24 mr-2"
				}), Jt(p, (function(e, t) {
					S(t), Da.updateValueAsPromise(["customProfile", r.details.profile.uid], {
						position: e
					}).then((function() {
						dn(a)
					}))
				}))), c.a.createElement("div", null, c.a.createElement(Bt.a, {
					className: "input-group-alternative mb-4"
				}, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
					className: "ni ni-building"
				}))), c.a.createElement(Yt.a, {
					className: "form-control-alternative",
					type: "text",
					placeholder: "Company name",
					id: "companyName",
					value: f,
					onChange: function(e) {
						m(!0), O(e.target.value)
					},
					style: {
						textTransform: "capitalize"
					}
				}))), c.a.createElement("div", {
					className: "my-4"
				}, c.a.createElement(de.a, {
					color: i ? "primary" : "secondary",
					onClick: function() {
						Da.updateValueAsPromise(["customProfile", r.details.profile.uid], {
							companyName: f
						}).then((function() {
							le.b.info("Profile saved"), m(!1)
						}))
					},
					size: "sm",
					disabled: !i
				}, "Save profile")), c.a.createElement("hr", {
					className: "my-4"
				}), c.a.createElement("div", {
					style: {
						textAlign: "left"
					}
				}, c.a.createElement(pe.a, {
					className: "my-2"
				}, c.a.createElement(me.a, null, c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function() {
						yn().then((function() {
							ve(e)
						}))
					}
				}, "Reset Password"))), c.a.createElement(pe.a, {
					className: "my-2"
				}, c.a.createElement(me.a, null, c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function() {
						return window.open(Y.LINKS.GDPR.EXPORT_DATA, "_blank")
					}
				}, "Request Data Download"))), c.a.createElement(pe.a, {
					className: "my-2"
				}, c.a.createElement(me.a, null, c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function() {
						return window.open(Y.LINKS.GDPR.DELETE_ACCOUNT, "_blank")
					}
				}, "Request Account Deletion"))), c.a.createElement(pe.a, {
					className: "my-2"
				}, c.a.createElement(me.a, null, c.a.createElement(de.a, {
					color: "primary",
					outline: !0,
					type: "button",
					size: "sm",
					onClick: function() {
						! function(e, t) {
							t ? window.location.href = Ne.ACCOUNT.REFRESH_SUBSCRIPTION.ABSOLUTE : e.push(Ne.ACCOUNT.REFRESH_SUBSCRIPTION.ABSOLUTE)
						}(e)
					}
				}, "Refresh Subscription")))))))), c.a.createElement(me.a, {
					className: "order-xl-1",
					xl: "8"
				}, c.a.createElement(pn, {
					shadow: !0,
					hideBillingAddress: !0
				}), c.a.createElement(sn, null))), c.a.createElement(pe.a, {
					className: "my-4"
				}, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h3", {
					className: "mb-0"
				}, "My Teams")))), c.a.createElement(Ae.a, null, c.a.createElement(Ja, null)))))))
			},
			Un = function() {
				return c.a.createElement(kt, {
					component: Pn
				})
			},
			Dn = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Gt, null), c.a.createElement(Un, null))
			},
			wn = a(520),
			xn = a(195),
			jn = {
				[S.CONSTANTS.APP_MODES.EXTENSION]: {
					appMode: S.CONSTANTS.APP_MODES.EXTENSION,
					fullName: da(S.CONSTANTS.APP_MODES.EXTENSION),
					shortName: pa(S.CONSTANTS.APP_MODES.EXTENSION),
					Icon: function() {
						return c.a.createElement(R.h, {
							size: "1.5em"
						})
					},
					iconBackgroundColor: "red",
					description: "Requestly browser extension available for Chrome & Firefox",
					actionLabel: "Add to Chrome",
					actionLink: Y.LINKS.CHROME_EXTENSION
				},
				[S.CONSTANTS.APP_MODES.DESKTOP]: {
					appMode: S.CONSTANTS.APP_MODES.DESKTOP,
					fullName: da(S.CONSTANTS.APP_MODES.DESKTOP),
					shortName: pa(S.CONSTANTS.APP_MODES.DESKTOP),
					Icon: function() {
						return c.a.createElement(R.n, {
							size: "1.5em"
						})
					},
					iconBackgroundColor: "green",
					description: "Run Requestly on top of your favourite apps \u2013 Spotify, Slack, Postman, VSCode",
					actionLabel: "Download for MacOS, Windows & Linux",
					actionLink: Y.LINKS.REQUESTLY_DESKTOP_APP
				},
				[S.CONSTANTS.APP_MODES.WORDPRESS]: {
					appMode: S.CONSTANTS.APP_MODES.WORDPRESS,
					fullName: da(S.CONSTANTS.APP_MODES.WORDPRESS),
					shortName: pa(S.CONSTANTS.APP_MODES.WORDPRESS),
					Icon: function() {
						return c.a.createElement(R.cb, {
							size: "1.7em"
						})
					},
					iconBackgroundColor: "teal",
					description: "Use Requestly in Wordpress to create redirects and mocks",
					actionLabel: "COMING SOON"
				},
				[S.CONSTANTS.APP_MODES.CLOUDFLARE]: {
					appMode: S.CONSTANTS.APP_MODES.CLOUDFLARE,
					fullName: da(S.CONSTANTS.APP_MODES.CLOUDFLARE),
					shortName: pa(S.CONSTANTS.APP_MODES.CLOUDFLARE),
					Icon: function() {
						return c.a.createElement(xn.a, {
							size: "1.7em"
						})
					},
					iconBackgroundColor: "orange",
					description: "Use Requestly in Cloudflare to modify requests even before it reaches your web server",
					actionLabel: "COMING SOON"
				}
			},
			kn = function() {
				var e = Object(l.useContext)(X).state,
					t = st(e);
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					}
				}, c.a.createElement(pe.a, {
					className: "mb-4 "
				}, c.a.createElement(me.a, {
					className: "text-center"
				}, c.a.createElement("h2", null, "Requestly is available as"))), c.a.createElement(pe.a, null, Object.keys(jn).map((function(e) {
					return c.a.createElement(me.a, {
						md: "6 mb-6",
						key: e
					}, c.a.createElement(Se.a, {
						className: "card-stats mb-4 mb-lg-0 reduce-opacity-on-hover ".concat(jn[e].actionLink ? "cursor-pointer" : "cursor-disabled", " "),
						onClick: function() {
							return jn[e].actionLink ? window.open(jn[e].actionLink, "_blank") : null
						}
					}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement("div", {
						className: "col"
					}, c.a.createElement(wn.a, {
						className: "text-uppercase text-muted "
					}, da(e), t === e ? c.a.createElement("span", {
						className: "badge badge-pill badge-sm badge-success ml-2"
					}, "Current") : null), c.a.createElement("span", null, jn[e].description)), c.a.createElement(me.a, {
						className: "col-auto"
					}, c.a.createElement("div", {
						className: "icon icon-shape text-white rounded-circle shadow bg-gradient-".concat(jn[e].iconBackgroundColor),
						style: {
							fontSize: "1.5em"
						}
					}, c.a.createElement(jn[e].Icon)))), c.a.createElement("p", {
						className: "mt-3  text-muted text-sm"
					}, e === t ? c.a.createElement("span", {
						className: "text-nowrap"
					}, "You are currently using Requestly", " ", da(e)) : c.a.createElement("span", {
						className: "text-nowrap"
					}, jn[e].actionLabel, jn[e].actionLink ? c.a.createElement(R.s, {
						className: "ml-2 fix-icon-is-down"
					}) : null)))))
				}))))))))))
			},
			Mn = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kn, null))
					}
				}]), a
			}(c.a.Component),
			Gn = a(196),
			Fn = a.n(Gn),
			Bn = a(197),
			Vn = a.n(Bn);

		function Hn() {
			var e = {};
			return new URLSearchParams(window.location.search).forEach((function(t, a) {
				e[a] = t
			})), e
		}
		var Yn = function(e) {
				return e.split("/").slice(0, 3).join("/")
			},
			Wn = Y.AUTH.ACTION_LABELS,
			Kn = function(e) {
				var t = e.setAuthMode,
					a = e.authMode,
					n = e.src,
					r = e.callbacks,
					o = Object(ee.g)(),
					s = r || {},
					i = s.onSignInSuccess,
					m = s.onRequestPasswordResetSuccess,
					E = Object(l.useContext)(X).state,
					d = st(E),
					p = Object(l.useState)(!1),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(""),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Object(l.useState)(""),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = Object(l.useState)(""),
					v = Object(u.a)(_, 2),
					y = v[0],
					P = v[1],
					U = Object(l.useState)(),
					D = Object(u.a)(U, 2),
					w = D[0],
					x = D[1],
					j = Object(l.useState)(!1),
					k = Object(u.a)(j, 2),
					M = k[0],
					G = k[1];
				Object(l.useEffect)((function() {
					var e = Hn();
					w || "string" == typeof w || (e.rcode ? x(e.rcode) : x(""))
				}), [w]);
				return c.a.createElement(Se.a, {
					className: "bg-secondary shadow border-0"
				}, c.a.createElement(Ae.a, {
					className: "px-lg-5 py-lg-5 lg-padding-top-one"
				}, c.a.createElement("div", {
					className: "text-center text-muted mb-4"
				}, c.a.createElement("small", {
					className: "text-dark"
				}, function() {
					switch (a) {
						default:
						case Wn.LOG_IN:
							return "Sign in with Work Email";
						case Wn.SIGN_UP:
							return c.a.createElement("div", null, "Sign up with Work Email and get", " ", c.a.createElement("span", {
								className: "text-primary"
							}, "1\xa0month\xa0premium for free"));
						case Wn.REQUEST_RESET_PASSWORD:
							return "Enter the email address associated with your account. We will email you a link to reset your password.";
						case Wn.DO_RESET_PASSWORD:
							return "Enter the new password you want to create. This password will be used when you sign in next time."
					}
				}())), c.a.createElement(mn.a, {
					role: "form"
				}, function() {
					switch (a) {
						case Wn.SIGN_UP:
							return c.a.createElement(un.a, {
								className: "mb-3"
							}, c.a.createElement(Bt.a, {
								className: "input-group-alternative"
							}, c.a.createElement(Vt.a, {
								addonType: "prepend"
							}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
								className: "ni ni-single-02"
							}))), c.a.createElement(Yt.a, {
								required: !0,
								placeholder: "John Doe",
								type: "text",
								onChange: function(e) {
									return g(e.target.value)
								},
								value: b
							})));
						default:
							return null
					}
				}(), function() {
					switch (a) {
						case Wn.DO_RESET_PASSWORD:
							return null;
						default:
							return c.a.createElement(un.a, {
								className: "mb-3"
							}, c.a.createElement(Bt.a, {
								className: "input-group-alternative"
							}, c.a.createElement(Vt.a, {
								addonType: "prepend"
							}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
								className: "ni ni-email-83"
							}))), c.a.createElement(Yt.a, {
								required: !0,
								placeholder: "example@microsoft.com",
								type: "email",
								onChange: function(e) {
									return L(e.target.value)
								},
								value: I
							})))
					}
				}(), function() {
					switch (a) {
						case Wn.LOG_IN:
						case Wn.SIGN_UP:
						case Wn.DO_RESET_PASSWORD:
							return c.a.createElement(un.a, null, c.a.createElement(Bt.a, {
								className: "input-group-alternative"
							}, c.a.createElement(Vt.a, {
								addonType: "prepend"
							}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
								className: "ni ni-lock-circle-open"
							}))), c.a.createElement(Yt.a, {
								required: !0,
								placeholder: "Password",
								type: "password",
								onChange: function(e) {
									return P(e.target.value)
								},
								value: y
							})));
						default:
							return null
					}
				}(), function() {
					switch (a) {
						case Wn.LOG_IN:
							return c.a.createElement("div", {
								className: "custom-control custom-control-alternative custom-checkbox"
							}, c.a.createElement("input", {
								className: "custom-control-input",
								id: " customCheckLogin",
								type: "checkbox",
								defaultChecked: !0
							}), c.a.createElement("label", {
								className: "custom-control-label",
								htmlFor: " customCheckLogin"
							}, c.a.createElement("span", {
								className: "text-muted"
							}, "Remember me")));
						default:
							return null
					}
				}(), function() {
					switch (a) {
						case Wn.SIGN_UP:
							return c.a.createElement("div", {
								className: "custom-control custom-control-alternative custom-checkbox"
							}, c.a.createElement("input", {
								className: "custom-control-input",
								id: "emailOptin",
								type: "checkbox",
								defaultChecked: M,
								onChange: function() {
									return G(!M)
								}
							}), c.a.createElement("label", {
								className: "custom-control-label",
								htmlFor: "emailOptin"
							}, c.a.createElement("span", {
								className: "text-muted"
							}, "Send me updates with tailored offers, feature releases and product launches")), c.a.createElement("br", null), c.a.createElement("br", null));
						default:
							return null
					}
				}(), w ? c.a.createElement("div", {
					className: "text-center text-muted mb-4 text-green"
				}, c.a.createElement("small", null, "Yay! Referral Code applied successfully!"), " ", c.a.createElement("br", null), c.a.createElement("small", null, c.a.createElement("b", null, "Sign up with work email"), " to get Free Requestly Premium")) : null, c.a.createElement("div", {
					className: "text-center"
				}, function() {
					if (T) return c.a.createElement(de.a, {
						className: "my-4",
						color: "primary",
						type: "button"
					}, c.a.createElement(R.S, {
						className: "icon-spin"
					}));
					switch (a) {
						default:
						case Wn.LOG_IN:
							return c.a.createElement(de.a, {
								id: "auth-form-submit-btn",
								className: "my-4",
								color: "primary",
								type: "submit",
								onClick: function(e) {
									return hn(e, I, y, f, n, i, (function() {
										return P("")
									}))
								}
							}, "Sign in");
						case Wn.SIGN_UP:
							return c.a.createElement(de.a, {
								id: "auth-form-submit-btn",
								className: "my-4",
								color: "primary",
								type: "submit",
								onClick: function(e) {
									return In(e, b, I, y, w, f, o)
								}
							}, "Sign up");
						case Wn.REQUEST_RESET_PASSWORD:
							return c.a.createElement(de.a, {
								id: "auth-form-submit-btn",
								className: "my-4",
								color: "primary",
								type: "submit",
								onClick: function(e) {
									return Ln(e, I, f, m)
								}
							}, "Send reset link");
						case Wn.DO_RESET_PASSWORD:
							return c.a.createElement(de.a, {
								id: "auth-form-submit-btn",
								className: "my-4",
								color: "primary",
								type: "submit",
								onClick: function(e) {
									return vn(e, y, f, o, (function() {
										return t(Wn.LOG_IN)
									}))
								}
							}, "Set new password")
					}
				}()), function() {
					switch (a) {
						case Wn.LOG_IN:
						case Wn.SIGN_UP:
							return c.a.createElement(Ft.a, {
								className: "bg-transparent border-top pb-5"
							}, c.a.createElement("div", {
								className: "text-muted text-center mt-2 mb-3"
							}, c.a.createElement("small", {
								className: "text-dark"
							}, function() {
								switch (a) {
									default:
									case Wn.LOG_IN:
										return "or Sign in with";
									case Wn.SIGN_UP:
										return "or Sign up using"
								}
							}())), c.a.createElement("div", {
								className: "text-center"
							}, c.a.createElement(de.a, {
								className: "btn-neutral w-75 my-2 btn-icon",
								color: "default",
								onClick: function() {
									return function(e, t, a, n, r, l) {
										switch (e && e(!0), t) {
											case Y.FEATURES.SHARED_LISTS:
												Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Google Login requested on SharedList index page");
												break;
											case Y.FEATURES.RULES:
												Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REQUESTED, "Google Login requested on rules index page")
										}(n && n === S.CONSTANTS.APP_MODES.DESKTOP ? ha : Ra)().then((function(n) {
											if (n && n.uid) {
												switch (gn("".concat(ma(), ", ").concat(n.displayName.split(" ")[0])), t) {
													case Y.FEATURES.SHARED_LISTS:
														Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Google Login done on SharedList index page");
														break;
													case Y.FEATURES.RULES:
														Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_DONE, "Google Login done on Rules index page")
												}
												r === Y.AUTH.ACTION_LABELS.SIGN_UP && Ge(l), a && a()
											} else if (Nn("Sorry, the email or password you have entered isn't right. Can you please try again?"), e && e(!1), t) switch (t) {
												case Y.FEATURES.SHARED_LISTS:
													Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Google Login rejected on SharedList index page");
													break;
												case Y.FEATURES.RULES:
													Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.LOGIN_REJECTED, "Google Login rejected on Rules index page")
											}
										})).catch((function() {
											e && e(!1)
										}))
									}(f, n, i, d, a, o)
								}
							}, c.a.createElement("span", {
								className: "btn-inner--icon"
							}, c.a.createElement("img", {
								alt: "Login with Google",
								src: Fn.a
							})), c.a.createElement("span", {
								className: "btn-inner--text"
							}, "Google")), d && d === S.CONSTANTS.APP_MODES.EXTENSION ? c.a.createElement(de.a, {
								className: "btn-neutral w-75 my-2 btn-icon",
								color: "default",
								onClick: function() {
									return Cn(f, n, i, a, o)
								}
							}, c.a.createElement("span", {
								className: "btn-inner--icon"
							}, c.a.createElement("img", {
								alt: "Login with Apple",
								src: Vn.a
							})), c.a.createElement("span", {
								className: "btn-inner--text"
							}, "Apple")) : null));
						default:
							return null
					}
				}(), c.a.createElement(pe.a, null, function() {
					switch (a) {
						default:
						case Wn.LOG_IN:
							return c.a.createElement(me.a, null, c.a.createElement("span", {
								className: "float-left text-muted cursor-pointer",
								onClick: function() {
									return t(Wn.SIGN_UP)
								}
							}, "Sign up"));
						case Wn.SIGN_UP:
						case Wn.REQUEST_RESET_PASSWORD:
						case Wn.DO_RESET_PASSWORD:
							return c.a.createElement(me.a, null, c.a.createElement("span", {
								className: "float-left text-muted cursor-pointer",
								onClick: function() {
									return t(Wn.LOG_IN)
								}
							}, "Sign in"))
					}
				}(), function() {
					switch (a) {
						default:
						case Wn.LOG_IN:
						case Wn.SIGN_UP:
							return c.a.createElement(me.a, null, c.a.createElement("span", {
								className: "float-right text-muted cursor-pointer",
								onClick: function() {
									return t(Wn.REQUEST_RESET_PASSWORD)
								}
							}, "Reset password"));
						case Wn.DO_RESET_PASSWORD:
							return c.a.createElement(me.a, null, c.a.createElement("span", {
								className: "float-right text-muted cursor-pointer",
								onClick: function() {
									return t(Wn.REQUEST_RESET_PASSWORD)
								}
							}, "Resend"));
						case Wn.REQUEST_RESET_PASSWORD:
							return c.a.createElement(me.a, null, c.a.createElement("span", {
								className: "float-right text-muted cursor-pointer",
								onClick: function() {
									return t(Wn.SIGN_UP)
								}
							}, "Sign up"))
					}
				}()))))
			},
			qn = Y.AUTH.ACTION_LABELS,
			Qn = function(e) {
				var t = e.authMode,
					a = Object(ee.g)(),
					n = Object(l.useContext)(X).state,
					r = tt(n),
					o = Object(l.useState)(t || qn.LOG_IN),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useCallback)((function() {
						var e = new URLSearchParams(window.location.search);
						e.has("redirectUrl") ? a.push(e.get("redirectUrl")) : ge(a)
					}), []);
				return Object(l.useEffect)((function() {
					!r.loggedIn || i !== qn.LOG_IN && i !== qn.SIGN_UP || E()
				}), [r.loggedIn, E, i]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, {
					className: "justify-content-center"
				}, c.a.createElement(me.a, {
					lg: "5",
					md: "7"
				}, c.a.createElement(Kn, {
					authMode: i,
					setAuthMode: m
				})))))
			},
			zn = function(e) {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(Qn, {
					authMode: e.authMode
				}))
			},
			Jn = function() {
				var e = Object(l.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = function() {
						var e = Object(ea.a)($t.a.mark((function e(t) {
							var a, r, l;
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = new URLSearchParams(window.location.search), e.next = 3, t.getIdToken();
									case 3:
										r = e.sent, l = a.get("ot-auth-code"), Te.functions().httpsCallable("createAuthToken")({
											oneTimeCode: l,
											idToken: r
										}).then((function(e) {
											n(!0), window.close()
										})).catch((function(e) {
											console.error(e.message), i(!0), window.close()
										}));
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					E = function() {
						return c.a.createElement("h4", {
							className: "display-6"
						}, c.a.createElement(R.f, {
							className: "mr-2"
						}), "You're now logged into the desktop app. This window can now be safely closed.")
					},
					d = function() {
						return c.a.createElement("h4", {
							className: "display-6"
						}, c.a.createElement(R.r, {
							className: "mr-2"
						}), "An unexpected error has occured. Please close this window and try logging in again")
					};
				return Object(l.useEffect)((function() {
					Te.auth().getRedirectResult().then(function() {
						var e = Object(ea.a)($t.a.mark((function e(t) {
							var a;
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!t.user) {
											e.next = 5;
											break
										}
										return e.next = 3, m(t.user);
									case 3:
										e.next = 12;
										break;
									case 5:
										if (!Te.auth().currentUser) {
											e.next = 10;
											break
										}
										return e.next = 8, m(Te.auth().currentUser);
									case 8:
										e.next = 12;
										break;
									case 10:
										a = new Te.auth.GoogleAuthProvider, Te.auth().signInWithRedirect(a);
									case 12:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}())
				}), []), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--5",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, s ? d() : a ? E() : c.a.createElement("h4", {
					className: "display-6"
				}, c.a.createElement(R.S, {
					className: "icon-spin mr-2"
				}), "Authenticating"))))))))))
			},
			Xn = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(Jn, null))
			},
			Zn = a(45),
			$n = a(102),
			er = nn,
			tr = en,
			ar = function(e) {
				var t = e.mode,
					a = e.teamId,
					n = e.days,
					r = e.price,
					o = e.currency,
					s = e.duration,
					i = e.country,
					m = e.isPlanVerificationPassed,
					E = e.stripe,
					d = e.planType,
					p = Object(l.useRef)(!0),
					S = Object(l.useContext)(X).state,
					A = tt(S),
					T = Object(l.useState)(""),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(0),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = Object(l.useState)(!1),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = Object(l.useState)(""),
					y = Object(u.a)(v, 2),
					P = y[0],
					U = y[1],
					D = Object(l.useState)(!1),
					w = Object(u.a)(D, 2),
					x = w[0],
					j = w[1],
					k = Object(l.useState)(!1),
					M = Object(u.a)(k, 2),
					G = M[0],
					F = M[1],
					B = function() {
						var e = Object(ea.a)($t.a.mark((function e() {
							var n, r;
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (p.current) {
											e.next = 2;
											break
										}
										return e.abrupt("return", null);
									case 2:
										if (x) {
											e.next = 4;
											break
										}
										return e.abrupt("return", null);
									case 4:
										if (m) {
											e.next = 6;
											break
										}
										return e.abrupt("return", null);
									case 6:
										if (!G) {
											e.next = 8;
											break
										}
										return e.abrupt("return", null);
									case 8:
										F(!0), n = ln(d, s), e.t0 = t, e.next = "individual" === e.t0 ? 13 : "team" === e.t0 ? 15 : 17;
										break;
									case 13:
										return r = "createIndividualSubscriptionUsingStripeCheckout", e.abrupt("break", 19);
									case 15:
										return r = "createTeamSubscriptionUsingStripeCheckout", e.abrupt("break", 19);
									case 17:
										return console.error("Invalid mode detected"), e.abrupt("return", null);
									case 19:
										Te.functions().httpsCallable(r)({
											rqPlanId: n,
											currency: o,
											teamId: a,
											success_url: "http://" + window.location.host + Y.PATHS.PAYMENT_SUCCESS.ABSOLUTE + "?ref=stripe&paymentId=5357551a-e2d7",
											cancel_url: "http://" + window.location.host + Y.PATHS.PAYMENT_FAIL.ABSOLUTE + "?ref=stripe&paymentId=5357551a-e2d7"
										}).then((function(e) {
											if (!p.current) return null;
											var t = e.data;
											if (!t.success) throw Error("Couldnt create checkoutSessionId");
											E.redirectToCheckout({
												sessionId: t.payload.checkoutSessionId
											}).then((function(e) {
												return console.log(e)
											}))
										})).catch((function(e) {
											console.error(e.message)
										}));
									case 21:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					V = Object(l.useCallback)(B, [m, x, t, d, s, r, a, n, o, i, d]),
					H = Object(l.useCallback)((function() {
						_(!0), Te.functions().httpsCallable("getTeamInfo")({
							teamId: a
						}).then((function(e) {
							if (!p.current) return null;
							var t = e.data;
							if (!t.success) throw new Error("You might already have a subscription");
							var a = t.data;
							if ("active" === a.subscriptionStatus) throw new Error("You are already premium");
							N(a.name), h(a.accessCount), _(!1), j(!0)
						})).catch((function(e) {
							if (!p.current) return null;
							e && (j(!1), le.b.error("You might already have a subscription"), ke({
								mode: "team",
								planType: "enterprise",
								teamId: a
							}))
						}))
					}), [a]),
					W = Object(l.useCallback)((function() {
						(_(!0), A && A.details && A.details.profile.email) && (U(A.details.profile.email), _(!1), Te.functions().httpsCallable("fetchIndividualUserSubscriptionDetails")({}).then((function(e) {
							if (!p.current) return null;
							var t = e.data.data;
							!0 === e.data.success && "active" === t.status ? (j(!1), ke({
								mode: "individual",
								planType: "gold"
							})) : j(!0)
						})).catch((function(e) {
							p.current || j(!0)
						})))
					}), [A, m, x, t, d, s, r, a, n, o, i, d]);
				return Object(l.useEffect)((function() {
					return m && ("team" === t ? H() : "individual" === t && W(), t && o && s && d && m && x && V()),
						function() {}
				}), [H, W, t, m, o, s, V, x, d]), c.a.createElement(Se.a, {
					className: "has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h3", {
					className: "mb-0"
				}, "Summary"))), c.a.createElement("hr", null), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "Requestly Premium Subscription")), c.a.createElement("hr", null), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "team" === t ? L ? c.a.createElement(fe, null) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "For Team"), c.a.createElement(me.a, null, O)), c.a.createElement("br", null), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "Team Size"), c.a.createElement(me.a, null, R)), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					style: {
						fontSize: "0.7rem"
					}
				}, "(Flexible)")))) : L ? c.a.createElement(fe, null) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "License"), c.a.createElement(me.a, null, "Single User")), c.a.createElement("br", null), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "Account"), c.a.createElement(me.a, null, P)), c.a.createElement("br", null)))), c.a.createElement("hr", null), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "Total"), c.a.createElement(me.a, {
					className: "font-weight-bold"
				}, "".concat(er(i)).concat(parseInt(r), "/ ").concat(tr(n)))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null), c.a.createElement(me.a, null, "(incl. tax)")))))), c.a.createElement(Ae.a, null))
			},
			nr = function(e) {
				var t = e.type,
					a = e.message,
					n = e.dismissible,
					r = e.onDismiss;
				return c.a.createElement("div", {
					className: "alert fade show alert-" + t + (n ? " alert-dismissible" : ""),
					role: "alert"
				}, a, n && c.a.createElement("button", {
					type: "button",
					className: "close",
					"data-dismiss": "alert",
					"aria-label": "Close",
					onClick: r
				}, c.a.createElement("span", {
					"aria-hidden": "true"
				}, "\xd7")))
			},
			rr = S.CONSTANTS.GA_EVENTS,
			lr = ut,
			cr = rn,
			or = $a,
			sr = {
				style: {
					base: {
						color: "#32325d",
						fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
						fontSmoothing: "antialiased",
						fontSize: "16px",
						"::placeholder": {
							color: "#aab7c4"
						}
					},
					invalid: {
						color: "#fa755a",
						iconColor: "#fa755a"
					}
				},
				hidePostalCode: !0
			},
			ir = function() {
				var e = Object(ee.g)(),
					t = Object(l.useRef)(!0),
					a = Object(Zn.useStripe)(),
					n = Object(Zn.useElements)(),
					r = new URLSearchParams(window.location.search),
					o = r.get("m"),
					s = r.get("t"),
					i = r.get("p"),
					m = r.get("d"),
					E = Object(l.useState)("US"),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useState)("USD"),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)(!1),
					b = Object(u.a)(N, 2),
					g = b[0],
					h = b[1],
					C = Object(l.useState)(0),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = Object(l.useState)(null),
					y = Object(u.a)(v, 2),
					P = y[0],
					U = y[1],
					D = Object(l.useState)(!1),
					w = Object(u.a)(D, 2),
					x = w[0],
					j = w[1],
					k = Object(l.useState)(!1),
					M = Object(u.a)(k, 2),
					G = M[0],
					F = M[1],
					B = Object(l.useState)(!1),
					V = Object(u.a)(B, 2),
					H = V[0],
					Y = V[1],
					W = Object(l.useState)(!1),
					K = Object(u.a)(W, 2),
					q = K[0],
					Q = K[1],
					z = lr.find((function(e) {
						return e.id === i
					})),
					J = function(t) {
						le.b.error(t || "Invalid URL"), Fe(e)
					},
					X = Object(l.useCallback)(J, []),
					Z = function(e) {
						var t = cr(e);
						if (!t) return J();
						O(t);
						var a = or(m);
						if (!a) return J();
						h(a);
						var n = z[a];
						if (!n) return J();
						var r = n.price;
						if (!r) return J();
						var l = r[t];
						if (!l) return J();
						_(l), Q(!0)
					},
					$ = Object(l.useCallback)((function() {
						fetch("https://api.country.is/").then((function(e) {
							if (!t.current) return null;
							200 === e.status && e.json().then((function(e) {
								e.country && S(e.country), Z(e.country)
							})).catch((function(e) {
								if (!t.current) return null;
								console.log(e), Z(p)
							}))
						})).catch((function(e) {
							if (!t.current) return null;
							console.log(e), Z(p)
						}))
					}), []),
					te = function(t, a) {
						t.preventDefault(), t.stopPropagation(), j(!0), "terms" === a ? (Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.ROUTE_VIEWED, "Clicked@terms.checkbox.redirected@T&C"), function(e, t) {
							t.newTab ? window.open(be.REQUESTLY_TERMS_AND_CONDITIONS, "_blank") : e.push(be.REQUESTLY_TERMS_AND_CONDITIONS)
						}(e, {
							newTab: !0
						})) : "privacy" === a && (Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.ROUTE_VIEWED, "Checked@Privacy.from.Check.Box.and.redirected@Privacy.Page"), function(e, t) {
							t.newTab ? window.open(be.REQUESTLY_PRIVACY_POLICY, "_blank") : e.push(be.REQUESTLY_PRIVACY_POLICY)
						}(e, {
							newTab: !0
						}))
					},
					ae = function() {
						var r = Object(ea.a)($t.a.mark((function r(l) {
							var c, u, m, E, d, p, S, A;
							return $t.a.wrap((function(r) {
								for (;;) switch (r.prev = r.next) {
									case 0:
										if (l.stopPropagation(), Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.CLICKED, "clicked@activate.subscription.btn"), !H) {
											r.next = 4;
											break
										}
										return r.abrupt("return", null);
									case 4:
										if (Y(!0), c = !1, u = "", !(parseInt(L) > 0)) {
											r.next = 20;
											break
										}
										if (U(null), a && n) {
											r.next = 11;
											break
										}
										return r.abrupt("return");
									case 11:
										return m = n.getElement(Zn.CardElement), r.next = 14, a.createPaymentMethod({
											type: "card",
											card: m
										});
									case 14:
										if (E = r.sent, d = E.error, p = E.paymentMethod, t.current) {
											r.next = 19;
											break
										}
										return r.abrupt("return", null);
									case 19:
										d ? (Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.CARD_ERROR, "error.in.card.or@card.number", {
											error: d.message
										}), U(d.message), c = !0) : (u = p.id, Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.CARD_ACCEPTED, "Card.Number.Accepted.Payment.method.id.generated"));
									case 20:
										c ? Y(!1) : (S = ln(i, g), "team" === o ? A = Te.functions().httpsCallable("createTeamSubscription") : "individual" === o && (A = Te.functions().httpsCallable("createIndividualSubscription")), A({
											rqPlanId: S,
											teamId: s || null,
											currency: f,
											paymentMethodId: u
										}).then((function(a) {
											if (!t.current) return null;
											var n = a.data;
											n.success ? ("team" === o && Ue(e, s, !0, !0), "individual" === o && we(e, !0, !0)) : (Y(!1), n.message.includes("As per Indian ") ? le.b.error("Please add Billing Address first") : n.message.includes("document") ? le.b.error("An error has occured. Code: 4913") : le.b.error(n.message))
										})).catch((function(e) {
											if (!t.current) return null;
											Y(!1), le.b.error(e.message)
										})));
									case 21:
									case "end":
										return r.stop()
								}
							}), r)
						})));
						return function(e) {
							return r.apply(this, arguments)
						}
					}();
				return Object(l.useEffect)((function() {
					if (!i || !z || !m || "individual" !== o && "team" !== o || "team" === o && "string" !== typeof s) {
						if (!t.current) return;
						X()
					} else $();
					return function() {
						t.current = !1
					}
				}), [$, m, o, z, i, X, s]), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(fe, {
					customLoadingMessage: "Redirecting to Stripe"
				}), c.a.createElement("section", {
					className: "section section-sm ",
					style: {
						display: "none"
					}
				}, c.a.createElement("h2", {
					style: {
						textAlign: "center"
					}
				}, "Activate Requestly Premium"), c.a.createElement("br", null), c.a.createElement("div", {
					className: "container"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "order-xl-2 mb-5 ",
					xl: "4"
				}, c.a.createElement(ar, {
					mode: o,
					teamId: s,
					days: m,
					price: L,
					currency: f,
					duration: g,
					country: p,
					isPlanVerificationPassed: q,
					stripe: a,
					planType: i
				})), c.a.createElement(me.a, {
					className: "order-xl-1",
					xl: "8"
				}, c.a.createElement(pn, {
					customHeading: "Billing details",
					hideBillingAddress: !0,
					hideIndiaInCountryList: !f || "INR" !== f
				}), c.a.createElement("div", {
					className: "card mt-4  p-3 mb-4 has-no-box-shadow"
				}, c.a.createElement("div", {
					className: "card-body px-2 px-lg-4 py-4"
				}, c.a.createElement("h4", {
					className: ""
				}, " Credit or debit card "), c.a.createElement("h5", {
					className: "mb-4 mb-lg-5"
				}, "Powered by \xa0", c.a.createElement("span", {
					className: "cursor-pointer",
					onClick: function() {
						return window.open("https://stripe.com", "_blank")
					}
				}, c.a.createElement(R.T, {
					size: "2.5em",
					color: "#0a48b3"
				}))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("div", {
					className: "row justify-content-md-center"
				}, c.a.createElement("div", {
					className: "col col-12"
				}, null !== P && c.a.createElement(nr, {
					type: "danger",
					message: P,
					dismissible: !0,
					onDismiss: function() {
						return U(null)
					}
				}), c.a.createElement(Zn.CardElement, {
					options: sr
				}))))))))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null)), c.a.createElement("div", {
					className: "row"
				}, c.a.createElement("div", {
					className: "col-12 col-lg-9 mb-3 mb-lg-0"
				}, c.a.createElement("div", {
					className: "custom-control custom-checkbox mb-3"
				}, c.a.createElement("input", {
					className: "custom-control-input",
					id: "termsCheck",
					type: "checkbox",
					checked: x,
					onChange: function(e) {
						j(!x), Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.CARD_ENTERED, "card.number.entered")
					}
				}), c.a.createElement("label", {
					className: "custom-control-label",
					htmlFor: "termsCheck"
				}, c.a.createElement("span", null, "I have read and accept the", " ", c.a.createElement("span", {
					className: "font-weight-bolder text-primary",
					onClick: function(e) {
						te(e, "terms")
					},
					style: {
						top: "unset"
					}
				}, "Terms and Conditions"), " and ", c.a.createElement("span", {
					className: "font-weight-bolder text-primary",
					onClick: function(e) {
						te(e, "privacy")
					},
					style: {
						top: "unset"
					}
				}, "Privacy Policy"), ".", c.a.createElement("span", {
					className: "required-field"
				})))), c.a.createElement("div", {
					className: "custom-control custom-checkbox mb-3"
				}, c.a.createElement("input", {
					className: "custom-control-input",
					id: "newsletterCheck",
					type: "checkbox",
					checked: G,
					onChange: function(e) {
						F(!G), Ma(rr.CATEGORIES.CHECKOUT, rr.ACTIONS.CLICKED, "Checked Mailing List from Check Box")
					}
				}), c.a.createElement("label", {
					className: "custom-control-label",
					htmlFor: "newsletterCheck"
				}, c.a.createElement("span", null, "Join the mailing list to receive the updates about upcoming features and special offers.")))), c.a.createElement("div", {
					className: "col-12 col-lg-3 text-center mb-4 mb-lg-0"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					disabled: !x || H,
					onClick: ae
				}, H ? c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
					className: "btn-inner--icon",
					style: {
						top: "unset"
					}
				}, c.a.createElement(R.S, {
					className: "icon-spin"
				})), c.a.createElement("span", {
					className: "btn-inner--text",
					style: {
						fontSize: "1rem",
						top: "unset"
					}
				}, "Verifying card")) : c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Activate Subscription"), c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.b, null))))))))))
			},
			ur = function() {
				var e = Object(l.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1];
				return Object(l.useEffect)((function() {
					a || n(Object($n.a)(S.CONFIG.stripeConfig.publishableKey))
				}), [a]), c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, !1 !== a ? c.a.createElement(Zn.Elements, {
					stripe: a
				}, c.a.createElement(ir, null)) : null)))))
			},
			mr = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: ur
				}))
			},
			Er = function(e) {
				var t = e.customLoadingMessage;
				return c.a.createElement(c.a.Fragment, null, e.renderHeader ? c.a.createElement(ue, null) : null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " has-no-box-shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(fe, {
					customLoadingMessage: t
				}))))))))
			},
			dr = Y.PATHS,
			pr = function(e) {
				var t = e.delay,
					a = e.path,
					n = e.message;
				a = a || dr.RULES.RELATIVE;
				var r = Object(l.useState)(t),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(null),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1];
				return Object(l.useEffect)((function() {
					s === t && f(setInterval((function() {
						return i((function(e) {
							return e - 1
						}))
					}), 1e3)), s <= 0 && !d && (T && clearInterval(T), p(!0))
				}), [s, d, t, T]), d ? c.a.createElement(ee.a, {
					push: !0,
					to: a
				}) : c.a.createElement("h5", {
					className: "title is-6"
				}, n || "Redirecting you to ".concat(a), " in ", c.a.createElement("span", null, s))
			},
			Sr = Y.PATHS,
			Ar = function() {
				var e = Object(l.useState)(""),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1];
				return Object(l.useEffect)((function() {
					var e = Hn(),
						t = window.location.search;
					if (e.mode) switch (e.mode) {
						case "resetPassword":
							n(Sr.AUTH.RESET_PASSWORD.RELATIVE + t);
							break;
						case "verifyEmail":
							n(Sr.AUTH.VERIFY_EMAIL.RELATIVE + t);
							break;
						case "signIn":
							n(Sr.AUTH.EMAIL_LINK_SIGNIN.RELATIVE + t);
							break;
						default:
							n(Sr.RULES.RELATIVE)
					} else n(Sr.RULES.RELATIVE)
				}), [a]), a ? c.a.createElement(pr, {
					delay: 0,
					path: a
				}) : c.a.createElement(Er, {
					customLoadingMessage: "Please Wait ... "
				})
			},
			Tr = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(Ar, null))
					}
				}]), a
			}(c.a.Component),
			fr = a(53),
			Or = a(48),
			Nr = a.n(Or);

		function br(e) {
			return Te.database().ref("/users/" + Te.auth().currentUser.uid + "/files/" + e).remove()
		}

		function gr(e, t, a) {
			return t.name = e.metadata.name, t.size = e.metadata.size, t.contentType = e.metadata.contentType, t.webContentLink = a, t.createdTime = e.metadata.timeCreated, t.filePath = e.metadata.fullPath, t.modifiedTime = e.metadata.updated, t
		}

		function Rr(e, t) {
			return function(e, t) {
				if (!["application/json", "application/javascript", "text/javascript", "text/css", "image/jpeg", "image/png", "image/svg+xml"].reduce((function(e, a) {
						return e || a === t.contentType
					}), !1)) return new Promise((function(e, t) {
					e({
						success: !1,
						msg: "Unsupported File Type"
					})
				}));
				return Te.storage().ref("/users/" + Te.auth().currentUser.uid + "/files/").child(Date.now().toString()).child(t.name).put(e).then((function(e) {
					return e.ref.getDownloadURL().then((function(a) {
						return (n = a, new Promise((function(e, t) {
							e(n)
						}))).then((function(n) {
							t.shortUrl = n;
							var r = gr(e, t, a),
								l = Te.database().ref("/users/" + Te.auth().currentUser.uid + "/files/").push(),
								c = l.key;
							return r.id = c, l.update(r).then((function() {
								return {
									success: !0,
									data: r
								}
							}))
						}));
						var n
					}))
				}))
			}(e, t)
		}

		function hr(e, t, a) {
			var n = new Blob([t], {
					type: a.contentType
				}),
				r = {
					contentType: a.contentType
				};
			return Te.storage().ref(e).put(n, r).then((function(e) {
				return e.ref.getDownloadURL().then((function(t) {
					var n, r = gr(e, a, t);
					return r.id = a.id, (n = r, Te.database().ref(S.CONSTANTS.FIREBASE_NODES.USERS).child(Te.auth().currentUser.uid).child(S.CONSTANTS.FIREBASE_NODES.FILES).child(n.id).update(n)).then((function() {
						return {
							success: !0,
							data: r
						}
					}))
				}))
			}))
		}
		var Cr = Y.FILES_TABLE_CONSTANTS.COLUMN_WIDTHS,
			Ir = function(e) {
				return Cr[e] + "%"
			},
			Lr = function(e) {
				var t = e.fileDetails,
					a = e.fileId,
					n = e.updateCollection,
					r = e.mode,
					o = e.callback,
					s = Object(ee.g)(),
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(""),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = function(e, t) {
						var a;
						d(!0), (a = e, Te.storage().ref().child(a.filePath).delete().then((function() {
							return br(a.id)
						}), (function(e) {
							if ("storage/object-not-found" === e.code) return br(a.id)
						}))).then((function() {
							le.b.info("File deleted"), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.LIBRARY, S.CONSTANTS.GA_EVENTS.ACTIONS.DELETED, "File Deleted"), d(!1), t && t()
						}))
					},
					N = function() {
						f(t.shortUrl)
					};
				return c.a.createElement(fr.a, null, (function(e) {
					var l = e.isHovering;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
						className: " nowrap overflow-hidden cursor-pointer",
						style: {
							width: Ir(0)
						}
					}, c.a.createElement("span", {
						onClick: function(e) {
							return _e(s, a)
						}
					}, t.name)), c.a.createElement("td", {
						className: "text-align-center cursor-pointer",
						style: {
							width: Ir(1)
						}
					}, t.size / 1e3, " Kb"), c.a.createElement("td", {
						className: "text-align-center cursor-pointer",
						style: {
							width: Ir(2)
						}
					}, new Date(t.modifiedTime).toDateString()), r === Y.FILES_TABLE_CONSTANTS.MODES.FILE_PICKER ? c.a.createElement("td", {
						className: "text-right",
						style: {
							width: Ir(2)
						}
					}, c.a.createElement(de.a, {
						color: "secondary",
						outline: !0,
						type: "button",
						size: "sm",
						onClick: function() {
							return o(t.shortUrl)
						}
					}, "Insert")) : function(e) {
						return c.a.createElement("td", {
							className: "text-right",
							style: {
								width: Ir(2)
							}
						}, c.a.createElement("span", {
							className: e ? "all-direct-children-have-margin" : "all-direct-children-have-margin text-light",
							style: {
								fontSize: "1.3em"
							}
						}, c.a.createElement("span", {
							className: "custom-tooltip cursor-pointer",
							onClick: function(e) {
								return _e(s, a)
							}
						}, c.a.createElement(R.p, null), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, "Edit File")), c.a.createElement(Nr.a, {
							text: t.shortUrl,
							onCopy: N
						}, c.a.createElement("span", {
							className: "custom-tooltip cursor-pointer"
						}, c.a.createElement(R.D, null), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, T === t.shortUrl ? "Copied" : "Copy direct link"))), c.a.createElement("span", {
							className: "custom-tooltip cursor-pointer",
							onClick: function() {
								return O(t, n)
							}
						}, E ? c.a.createElement(R.S, {
							className: "icon-spin"
						}) : c.a.createElement(R.W, null), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, "Delete File"))))
					}(l))
				}))
			},
			_r = function(e) {
				var t = e.type,
					a = void 0 === t ? "rule" : t,
					n = e.colSpan,
					r = void 0 === n ? 7 : n;
				return c.a.createElement("tr", null, c.a.createElement("td", {
					colSpan: r
				}, c.a.createElement("center", null, c.a.createElement("h2", {
					style: {
						margin: "2rem"
					}
				}, "Couldn`t find any ", a, " matching the given keyword."))))
			},
			vr = function(e) {
				var t = e.filesList,
					a = e.updateCollection,
					n = e.mode,
					r = e.callback,
					o = function(e) {
						return at(e).files
					}(Object(l.useContext)(X).state);
				Object(l.useEffect)((function() {
					Object.keys(t).length > 0 && Ga("isHostFileTask", !0)
				}), [t]);
				var s = ae()(o) ? Object.keys(t) : Object.keys(t).filter((function(e) {
					return t[e].name.match(new RegExp(o, "i"))
				}));
				return ae()(s) ? c.a.createElement("tbody", null, c.a.createElement(_r, {
					type: "file",
					colSpan: "4"
				})) : c.a.createElement("tbody", null, s.map((function(e) {
					return c.a.createElement(Lr, {
						key: e,
						fileId: e,
						fileDetails: t[e],
						updateCollection: a,
						mode: n,
						callback: r
					})
				})))
			},
			yr = Y.FILES_TABLE_CONSTANTS.COLUMN_WIDTHS,
			Pr = function(e) {
				var t = e.filesList,
					a = e.updateCollection,
					n = e.mode,
					r = e.callback;
				return c.a.createElement(Ka.a, {
					className: "align-items-center table-flush table-hover",
					style: {
						tableLayout: "fixed"
					}
				}, c.a.createElement("thead", {
					className: "thead-light"
				}, c.a.createElement("tr", {
					key: "0"
				}, [{
					columnData: "Name"
				}, {
					columnData: "Size"
				}, {
					columnData: "Last Updated"
				}, {
					columnData: "Actions",
					styles: {
						textAlign: "right"
					}
				}].map((function(e, t) {
					var a = e.columnData,
						n = e.styles,
						r = e.onClickHandler;
					return c.a.createElement("th", {
						key: t,
						scope: "col",
						className: "text-align-center",
						style: Object(E.a)({
							width: yr[t] + "%"
						}, n),
						onClick: r
					}, a)
				})))), c.a.createElement(vr, {
					updateCollection: a,
					filesList: t,
					mode: n,
					callback: r
				}))
			},
			Ur = a(521),
			Dr = function(e) {
				var t = e.isOpen,
					a = e.toggle,
					n = e.featureName,
					r = void 0 === n ? "rules" : n,
					o = e.featureLimit,
					s = void 0 === o ? 10 : o,
					i = e.userPlanName,
					m = void 0 === i ? "Free" : i,
					E = e.mode,
					d = void 0 === E ? Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT : E,
					p = Object(ee.g)(),
					A = St(m),
					T = oa(r),
					f = Object(l.useState)(!1),
					O = Object(u.a)(f, 1)[0],
					N = Object(l.useState)(""),
					b = Object(u.a)(N, 2),
					g = b[0],
					R = b[1],
					h = Object(l.useState)(""),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1];
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered modal-danger",
					contentClassName: "bg-gradient-danger bg-gradient-blue",
					isOpen: t,
					toggle: function() {
						return a()
					}
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h6", {
					className: "modal-title",
					id: "modal-title-notification",
					style: {
						fontSize: "1em"
					}
				}, "It's time to upgrade"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: function() {
						return a()
					}
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, c.a.createElement("div", {
					className: "py-3 text-center"
				}, c.a.createElement("i", {
					className: "ni ni-spaceship ni-3x"
				}), c.a.createElement("h4", {
					className: "heading mt-4"
				}, d === Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT ? r === Y.FEATURES.ACTIVE_RULES ? "Upgrade now to activate more rules" : "Upgrade now to create more ".concat(T) : "Upgrade now to enable ".concat(T)), c.a.createElement("p", null, d === Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT ? c.a.createElement("span", null, "It seems like you have reached your ", T, " limit.", " ", c.a.createElement("strong", null, A ? m : "Free", " "), " ", "accounts are limited to ", s, " ", T, ".", " ") : c.a.createElement("span", null, c.a.createElement("span", {
					style: {
						textTransform: "capitalize"
					}
				}, T), " ", "is a premium feature."), " ", "Upgrade to one of our premium plans to make sure you can access all of the Requestly features whenever you need it.")), function() {
					var e = new Date("2021-07-30");
					return (new Date).getTime() <= e.getTime()
				}() ? c.a.createElement(c.a.Fragment, null, c.a.createElement("h4", {
					className: "heading text-center"
				}, "A sweet surprise for you"), c.a.createElement("div", {
					className: "d-flex px-3 justify-content-between"
				}, c.a.createElement("p", {
					className: "text-white"
				}, "50% OFF for first 3 months on Monthly Plan"), c.a.createElement("h3", null, c.a.createElement(Ur.a, {
					delay: 0,
					trigger: "hover focus",
					target: "monthlyCoupon"
				}, g ? "Copied" : "Copy To Clipboard"), c.a.createElement(Or.CopyToClipboard, {
					text: g,
					onCopy: function() {
						L(""), R("RQ7Monthly"), navigator.clipboard.writeText("RQ7Monthly").then((function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.REQUEST_UPGRADE, S.CONSTANTS.GA_EVENTS.ACTIONS.LIMIT_REACHED, "Monthly coupon code copied")
						}), (function(e) {
							console.error("Could not copy text: ", e)
						}))
					}
				}, c.a.createElement(qa.a, {
					style: {
						textTransform: "none"
					},
					id: "monthlyCoupon",
					className: "text-dark cursor-pointer",
					color: "light"
				}, "RQ7Monthly")))), c.a.createElement("div", {
					className: "d-flex px-3 justify-content-between"
				}, c.a.createElement("p", {
					className: "text-white"
				}, "Flat 25% OFF on Annual Plan"), c.a.createElement("h3", null, c.a.createElement(Or.CopyToClipboard, {
					text: I,
					onCopy: function() {
						R(""), L("RQ7Annual"), navigator.clipboard.writeText("RQ7Annual").then((function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.REQUEST_UPGRADE, S.CONSTANTS.GA_EVENTS.ACTIONS.LIMIT_REACHED, "Annual coupon code copied")
						}), (function(e) {
							console.error("Could not copy text: ", e)
						}))
					}
				}, c.a.createElement(qa.a, {
					style: {
						textTransform: "none"
					},
					id: "annualCoupon",
					className: "text-dark cursor-pointer",
					color: "light"
				}, "RQ7Annual")), c.a.createElement(Ur.a, {
					delay: 0,
					trigger: "hover focus",
					target: "annualCoupon"
				}, I ? "Copied" : "Copy To Clipboard")))) : null), c.a.createElement("div", {
					className: "modal-footer"
				}, O ? c.a.createElement(de.a, {
					className: "text-white",
					color: "link",
					"data-dismiss": "modal",
					type: "button",
					onClick: function() {
						return function(e) {
							e.push(Ne.UNLOCK_PREMIUM.ABSOLUTE)
						}(p)
					}
				}, "Unlock Premium ", c.a.createElement(qa.a, {
					color: "secondary"
				}, "New")) : null, c.a.createElement(de.a, {
					onClick: function() {
						return ye(p)
					},
					className: "btn-white ml-auto",
					color: "default",
					type: "button"
				}, "Get Premium")))
			},
			wr = function(e) {
				var t = e.updateCollection,
					a = e.currentFilesCount,
					n = Object(l.useContext)(X).state,
					r = tt(n),
					o = Object(l.useState)(!1),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useState)(0),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)("Free"),
					b = Object(u.a)(N, 2),
					g = b[0],
					h = b[1],
					C = Object(l.useState)(!1),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1];
				return c.a.createElement(c.a.Fragment, null, p ? c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button"
				}, c.a.createElement(R.S, {
					className: "icon-spin"
				})) : i ? c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button"
				}, c.a.createElement("input", {
					type: "file",
					onChange: function(e) {
						S(!0),
							function(e) {
								var t = {},
									a = e.target.files[0];
								return a.size > 5e6 ? le.b.warn("File Uploaded Limit Exceeded") : (t.name = a.name, t.description = "", t.contentType = a.type, Rr(a, t).then((function(e) {
									e.success ? le.b.info("File Uploaded Successfully") : le.b.error("File Type not supported")
								})))
							}(e).then((function() {
								t(), m(!1), S(!1)
							}))
					}
				})) : c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function(e) {
						var t = Ot(r),
							n = bt(Y.FEATURES.FILES, t);
						a >= n ? (O(n), h(t), _(!0)) : m(!0)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.Y, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Upload File")), L ? c.a.createElement(Dr, {
					isOpen: L,
					toggle: function() {
						_(!L)
					},
					featureName: Y.FEATURES.FILES,
					featureLimit: f,
					userPlanName: g
				}) : null)
			},
			xr = function(e) {
				var t = e.filesList,
					a = e.updateCollection,
					n = Object(l.useContext)(X).state,
					r = tt(n),
					o = Object(ee.g)();
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Manage Files", " ", "bronze" === Ot(r) ? "(".concat(Object.keys(t).length, "/").concat(function() {
					var e = Ot(r);
					return bt(Y.FEATURES.FILES, e)
				}(), " Files Uploaded)") : null, "bronze" === Ot(r) ? c.a.createElement("button", {
					className: "text-primary btn btn-link",
					style: {
						cursor: "pointer"
					},
					onClick: function(e) {
						e.preventDefault(), ye(o), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.FILES, S.CONSTANTS.GA_EVENTS.ACTIONS.REMOVE_LIMIT_CLICKED, "remove.limit.clicked@files.page", Object.keys(t).length)
					}
				}, "Remove Limits") : null)), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(wr, {
					updateCollection: a,
					currentFilesCount: Object.keys(t).length
				}), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						return function(e) {
							e.push(Ne.FILES.VIEWER.CREATE.ABSOLUTE)
						}(o)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.p, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Create File"))))), c.a.createElement(Pr, {
					updateCollection: a,
					filesList: t
				}))))))
			},
			jr = function(e) {
				var t = e.updateCollection;
				return c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "Host your JS & CSS Files"), c.a.createElement("p", {
					className: "lead"
				}, "Upload your JS, CSS and other files here and get the URL which you can directly use in Rules."), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(wr, {
					updateCollection: t,
					currentFilesCount: 0
				}), c.a.createElement(de.a, {
					color: "secondary",
					onClick: function() {
						return window.open(Y.LINKS.REQUESTLY_DOCS_FILES_SERVICE, "_blank")
					}
				}, "Documentation"))))))))))
			},
			kr = function(e) {
				var t = function(e) {
					return e ? [S.CONSTANTS.FIREBASE_NODES.USERS, e] : null
				}(e);
				return t && t.push(S.CONSTANTS.FIREBASE_NODES.SHARED_LISTS), t
			},
			Mr = function(e) {
				return [S.CONSTANTS.FIREBASE_NODES.PUBLIC, S.CONSTANTS.FIREBASE_NODES.SHARED_LISTS, e]
			},
			Gr = function(e) {
				return [S.CONSTANTS.FIREBASE_NODES.USERS, e, S.CONSTANTS.FIREBASE_NODES.FILES]
			},
			Fr = function(e) {
				var t = Gr(e);
				return Da.getValue(t)
			},
			Br = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)(!0),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)({}),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = function() {
						Fr(t.details.profile.uid).then((function(e) {
							E(e), o(!1)
						}))
					},
					p = Object(l.useCallback)(d, [t]);
				return Object(l.useLayoutEffect)((function() {
					t.loggedIn && t.details.profile && p()
				}), [t, p]), r ? c.a.createElement(Er, {
					customLoadingMessage: "Loading Files"
				}) : ae()(m) ? c.a.createElement(jr, {
					updateCollection: d
				}) : c.a.createElement(xr, {
					updateCollection: d,
					filesList: m
				})
			},
			Vr = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: Br
						}))
					}
				}]), a
			}(c.a.Component),
			Hr = a(199),
			Yr = a.n(Hr),
			Wr = a(200),
			Kr = a.n(Wr),
			qr = window.innerWidth < 768 ? 360 : 720,
			Qr = function(e) {
				var t = e.src;
				return c.a.createElement("div", {
					className: "d-flex justify-content-center p-3"
				}, c.a.createElement("img", {
					style: {
						maxWidth: "100%",
						width: qr
					},
					src: t,
					alt: ""
				}))
			},
			zr = (a(297), a(298), a(299), a(300), a(301), a(84));
		zr.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"), zr.config.setModuleUrl("ace/mode/javascript_worker", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
		var Jr = function(e) {
				var t = e.newFile,
					a = e.currentFilesCount,
					n = Object(ee.g)(),
					r = Object(l.useContext)(X).state,
					o = tt(r),
					s = Object(l.useState)(e.fileDetails ? e.fileDetails.name : ""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(e.fileDetails ? e.fileDetails.contentType : "application/javascript"),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(".js"),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(e.fileDetails ? e.fileDetails.description : ""),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = Object(l.useState)(e.data ? e.data : ""),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = Object(l.useState)(0),
					P = Object(u.a)(y, 2),
					U = P[0],
					D = P[1],
					w = Object(l.useState)("Free"),
					x = Object(u.a)(w, 2),
					j = x[0],
					k = x[1],
					M = Object(l.useState)(!1),
					G = Object(u.a)(M, 2),
					F = G[0],
					B = G[1],
					V = function(e, t) {
						A(e), N(t)
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Se.a, null, c.a.createElement(Ft.a, {
					className: "border-0 "
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Yt.a, {
					type: "text",
					placeholder: "File Name",
					value: m,
					name: "name",
					onChange: function(e) {
						return E(e.target.value)
					},
					disabled: !t
				})), t ? c.a.createElement(me.a, {
					sm: "1"
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					style: {
						background: "transparent",
						boxShadow: "none"
					},
					caret: !0
				}, O), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function() {
						return V("application/javascript", ".js")
					}
				}, ".js"), c.a.createElement(Qt.a, {
					onClick: function() {
						return V("text/css", ".css")
					}
				}, ".css"), c.a.createElement(Qt.a, {
					onClick: function() {
						return V("application/json", ".json")
					}
				}, ".json")))) : null, c.a.createElement(me.a, {
					sm: "6"
				}, c.a.createElement(Yt.a, {
					type: "text",
					placeholder: "Description",
					value: h,
					name: "desc",
					onChange: function(e) {
						return C(e.target.value)
					}
				})), c.a.createElement(me.a, {
					sm: "1"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3 float-right",
					color: "primary",
					type: "button",
					disabled: e.saving,
					onClick: function() {
						var t = Ot(o),
							n = bt(Y.FEATURES.FILES, t);
						a > n ? (D(n), k(t), B(!0)) : e.saveFile(m, S, h, _, O)
					}
				}, e.saving ? c.a.createElement(R.S, {
					className: "icon-spin"
				}) : t ? "Create" : "Save")), c.a.createElement(me.a, {
					sm: "1"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3 float-right",
					type: "button",
					color: "secondary",
					onClick: function() {
						return Le(n)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Close"))))), c.a.createElement(Ae.a, null, S.startsWith("image") ? c.a.createElement(Qr, {
					src: e.fileDetails.webContentLink
				}) : c.a.createElement(Kr.a, {
					width: "100%",
					placeholder: "Placeholder Text",
					mode: S.split("/")[1],
					theme: "monokai",
					name: "blah2",
					fontSize: 14,
					showPrintMargin: !0,
					showGutter: !0,
					highlightActiveLine: !0,
					onChange: function(e) {
						v(e)
					},
					value: _,
					setOptions: {
						enableBasicAutocompletion: !0,
						enableLiveAutocompletion: !0,
						enableSnippets: !0,
						showLineNumbers: !0,
						tabSize: 2
					}
				}))), F ? c.a.createElement(Dr, {
					isOpen: F,
					toggle: function() {
						B(!F)
					},
					featureName: Y.FEATURES.FILES,
					featureLimit: U,
					userPlanName: j
				}) : null)
			},
			Xr = Y.PATHS,
			Zr = function(e, t) {
				return Da.getValue(function(e, t) {
					var a = Gr(e);
					return a.push(t), a
				}(e, t))
			},
			$r = S.CONSTANTS.GA_EVENTS,
			el = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X).state,
					a = tt(t),
					n = Object(l.useState)(!0),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					d = m[0],
					p = m[1],
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)(!1),
					b = Object(u.a)(N, 2),
					g = b[0],
					R = b[1],
					h = Object(l.useState)(!1),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = Object(l.useState)(0),
					v = Object(u.a)(_, 2),
					y = v[0],
					P = v[1],
					U = window.location.pathname.split("/")[Xr.FILES.VIEWER.ABSOLUTE.split("/").length + 1 - 1],
					D = Object(l.useCallback)((function(t) {
						"create" === U ? (L(!0), s(!1)) : Zr(t, U).then((function(t) {
							t ? (O(t), Yr.a.get(t.webContentLink).then((function(e) {
								R(e.request.response), s(!1)
							}))) : Fe(e)
						})), Fr(t).then((function(e) {
							e && P(Object.keys(e).length)
						}))
					}), [U]);
				return Object(l.useLayoutEffect)((function() {
					a.loggedIn && a.details && a.details.profile && a.details.profile.uid && D(a.details.profile.uid)
				}), [D, a]), c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 "
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, I ? "Create" : "Edit", " File")))), o ? c.a.createElement(fe, null) : I ? c.a.createElement(Jr, {
					newFile: !0,
					fileDetails: f,
					data: g,
					saveFile: function(t, a, n, r, l) {
						ae()(t) ? le.b.warn("Please enter a valid file name") : ae()(r) ? le.b.warn("Please enter file content") : (p(!0), function(e, t) {
							return Rr(new File([t], e.name, {
								type: e.contentType,
								lastModified: Date.now()
							}), e)
						}({
							name: t + l,
							contentType: a,
							description: n
						}, r).then((function(t) {
							p(!1), t.success ? (le.b.info("File Created Successfully"), Ma($r.CATEGORIES.LIBRARY, $r.ACTIONS.CREATED, "New File Created"), Le(e)) : le.b.error("Unable to create file")
						})))
					},
					saving: d,
					currentFilesCount: y
				}) : c.a.createElement(Jr, {
					fileDetails: f,
					data: g,
					saveFile: function(t, a, n, r) {
						if (ae()(r)) le.b.warn("Please enter file content");
						else {
							p(!0);
							var l = Object(E.a)({}, f);
							l.description = n, hr(f.filePath, r, l).then((function(t) {
								p(!1), t.success ? (le.b.info("File Saved Successfully"), Ma($r.CATEGORIES.LIBRARY, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "File Updated"), Le(e)) : le.b.error("Unable to save file")
							}))
						}
					},
					saving: d,
					currentFilesCount: y
				})))))
			},
			tl = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: el
						}))
					}
				}]), a
			}(c.a.Component),
			al = a(522),
			nl = a(201),
			rl = a.n(nl),
			ll = S.CONSTANTS.GA_EVENTS,
			cl = [{
				emoji: "\ud83d\ude20",
				question: c.a.createElement(c.a.Fragment, null, "We regret you did not like Requestly, What are the issues that you are facing?"),
				options: ["Rules don't work properly", "Interface difficult to use", "Too technical for me", "Lack of proper documentation", "Expensive premium plans"]
			}, {
				emoji: "\ud83d\ude41",
				question: c.a.createElement(c.a.Fragment, null, "We regret you did not like Requestly, What are the issues that you are facing?"),
				options: ["Rules don't work properly", "Interface difficult to use", "Too technical for me", "Lack of proper documentation", "Expensive premium plans"]
			}, {
				emoji: "\ud83d\ude36",
				question: c.a.createElement(c.a.Fragment, null, "We regret you did not find Requestly up to the mark, What are the isssues that you are facing?", c.a.createElement("br", null), "Let us know what you liked/disliked about Requestly."),
				options: ["Easy interface, rules work perfectly", "Interface difficult to use", "Quick support from the team", "Too technical for me", "Increases productivity", "Expensive premium plans"]
			}, {
				emoji: "\ud83d\ude04",
				question: c.a.createElement(c.a.Fragment, null, "We are glad that you loved Requestly, What do you like about Requestly?"),
				options: ["Easy interface, rules work perfectly", "One stop destination for all network modifications", "Easy collaboration with my team members", "Increases productivity", "Quick support from the team"]
			}, {
				emoji: "\ud83d\ude0d",
				question: c.a.createElement(c.a.Fragment, null, "We are glad that you loved Requestly, What do you like about Requestly?"),
				options: ["Easy interface, rules work perfectly", "One stop destination for all network modifications", "Easy collaboration with my team members", "Increases productivity", "Quick support from the team"]
			}],
			ol = Math.floor(2 * Math.random()),
			sl = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)([]),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(""),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(!1),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = Object(l.useState)(""),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = function() {
						return t.loggedIn || "" === _ || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(_.trim()) ? 0 === ol && 0 === m.length ? le.b.error("Please select atleast one option") : 1 === ol && "" === S ? le.b.error("Please enter your feedback") : (C(!0), void Te.functions().httpsCallable("sendFeedbackResponse")({
							message: "".concat(cl[O].emoji, " - ").concat(m.join(", "), ", ").concat(S),
							userEmail: t && t.details && t.details.profile ? t.details.profile.email : _ || "NOT AVAILABLE"
						}).then((function(e) {
							var t = e.data;
							t.success ? (C(!1), o(!0), le.b.success("Thank you for your valuable feedback")) : (C(!1), le.b.error("Opps! Your response is not submitted")), Ma(ll.CATEGORIES.EXTENSION, ll.ACTIONS.UNINSTALL_RESPONSE, "".concat(cl[O].emoji, " - ").concat(t, ", ").concat(S))
						})).catch((function(e) {
							console.log(e.message), le.b.error("Oops! Couldn't send the response")
						}))) : le.b.error("Please enter your valid e-mail address")
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					fluid: !0,
					className: "mt-4"
				}, c.a.createElement(pe.a, {
					className: "justify-content-around align-items-center"
				}, c.a.createElement(me.a, {
					md: "6",
					lg: "4",
					sm: "12",
					xs: "12"
				}, c.a.createElement(Se.a, {
					style: {
						borderBottomRightRadius: "10px",
						borderBottomLeftRadius: "10px"
					},
					className: "shadow-lg"
				}, c.a.createElement(Ae.a, {
					style: {
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px"
					},
					className: "bg-primary"
				}, c.a.createElement(wn.a, {
					className: "text-white",
					tag: "h3"
				}, "How was your experience using Requestly?"), r ? 3 === O || 4 === O ? c.a.createElement(al.a, {
					tag: "p",
					className: "mb-1 text-white"
				}, "Response Submitted. We are glad you loved Requestly. Do like and share with your friends and fellow developers.") : c.a.createElement(al.a, {
					tag: "p",
					className: "mb-1 text-white"
				}, "Response Submitted. We are looking forward to improving and to winning you back as a customer.") : null), r ? 3 === O || 4 === O ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "mt-2 container"
				}, c.a.createElement("h4", null, "Kindly review on chrome store if you haven't already, it won't take more than a minute."), c.a.createElement("p", null, "To submit review on chrome store", " ", c.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: function() {
						Ma(ll.CATEGORIES.EXTENSION, ll.ACTIONS.CLICKED, "Review on chrome store button clicked")
					},
					href: "https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en"
				}, c.a.createElement("span", null, "click here", " ", c.a.createElement("i", {
					className: "fas fa-external-link-alt"
				})))))) : null : c.a.createElement("div", {
					className: "app mt-2"
				}, c.a.createElement("div", {
					className: "container justify-content-between d-flex flex-row"
				}, cl.map((function(e, a) {
					return c.a.createElement("div", {
						key: a
					}, !1 === O ? c.a.createElement("div", {
						className: [rl.a.item, "item display-2 text-dark"].join(" ")
					}, c.a.createElement("label", {
						htmlFor: a
					}, c.a.createElement("input", {
						className: "radio d-none",
						type: "radio",
						name: "feedback",
						id: a,
						onChange: function(e) {
							console.log(e.target.value), N(a)
						},
						value: a
					}), c.a.createElement("span", {
						role: "img",
						className: "cursor-pointer",
						"aria-label": "feedback emoji"
					}, e.emoji))) : null, O === a ? c.a.createElement(c.a.Fragment, null, c.a.createElement("h4", {
						className: "mt-2"
					}, "You ", e.emoji, " Requestly, ", e.question), c.a.createElement(mn.a, {
						className: "p-2"
					}, 0 === ol ? e.options.map((function(e) {
						return c.a.createElement("div", {
							key: e,
							className: "custom-control custom-checkbox my-2"
						}, c.a.createElement("input", {
							onChange: function() {
								return function(e) {
									if (m.includes(e)) {
										var t = m.filter((function(t) {
											return t !== e
										}));
										return E(t)
									}
									E((function(t) {
										return [].concat(Object(Rt.a)(t), [e])
									}))
								}(e)
							},
							checked: m.includes(e),
							type: "checkbox",
							className: "custom-control-input",
							id: e,
							value: ""
						}), c.a.createElement("label", {
							className: "custom-control-label",
							htmlFor: e
						}, e))
					})) : c.a.createElement(Yt.a, {
						value: S,
						className: "textarea",
						onChange: function(e) {
							A(e.target.value)
						},
						placeholder: "How can we improve Requestly?",
						type: "textarea",
						name: "text",
						rows: "4"
					}), t.loggedIn ? null : c.a.createElement(c.a.Fragment, null, c.a.createElement("h4", {
						className: "mt-3"
					}, "Please Enter your e-mail address so we can respond you better"), c.a.createElement(Yt.a, {
						onChange: function(e) {
							return v(e.target.value)
						},
						type: "email",
						placeholder: "Enter your email here...",
						className: "mb-n3"
					})), c.a.createElement("hr", null), c.a.createElement(de.a, {
						className: "btn-icon mt-n3 mb-2 btn-3 w-100",
						color: "primary",
						type: "button",
						onClick: y,
						disabled: h
					}, h ? c.a.createElement(R.S, {
						className: "icon-spin"
					}) : "Send"))) : null)
				})))))))))
			},
			il = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(sl, null))
					}
				}]), a
			}(c.a.Component),
			ul = a(202),
			ml = S.CONSTANTS.GA_EVENTS,
			El = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)(""),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(""),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(!1),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = Object(l.useState)(""),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = Object(l.useState)(!1),
					P = Object(u.a)(y, 2),
					U = P[0],
					D = P[1],
					w = Object(l.useState)(!1),
					x = Object(u.a)(w, 2),
					j = x[0],
					k = x[1],
					M = Object(l.useState)(""),
					G = Object(u.a)(M, 2),
					F = G[0],
					B = G[1],
					V = Object(l.useState)(!1),
					H = Object(u.a)(V, 2),
					W = H[0],
					K = H[1],
					q = function() {
						if (t.details.isLoggedIn) {
							if (B(t.details.profile.email), t.details.planDetails && "license" === t.details.planDetails.type) {
								var e = t.details.planDetails.subscription || {},
									a = e.endDate || 1e3 * e.current_period_end,
									n = new Date(a).toISOString().split("T")[0];
								D("license" === t.details.planDetails.type), E(t.details.planDetails.planId), o(t.details.planDetails.subscription.id), K(new Date(n).toDateString())
							}
							k(!1)
						}
					},
					Q = Object(l.useCallback)((function() {
						k(!0), q()
					}), [t]);
				if (Object(l.useLayoutEffect)((function() {
						Q()
					}), [Q, t]), j) return c.a.createElement(fe, {
					customLoadingMessage: "Fetching your license details"
				});
				if (U) return c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h3", null, c.a.createElement(ul.a, {
					color: "secondary"
				}, c.a.createElement("strong", null, c.a.createElement("span", {
					className: "alert-inner--icon",
					role: "img",
					"aria-label": "emoji"
				}, "\ud83d\udce2")), " ", c.a.createElement("span", {
					className: "alert-inner--text"
				}, "License is being replaced by Teams.", " ", c.a.createElement("span", {
					onClick: function() {
						return window.open(Y.LINKS.REQUESTLY_DOCS_PREMIUM_SUBSCRIPTION, "_blank")
					},
					className: "cursor-pointer"
				}, "Read more")))), c.a.createElement("br", null), c.a.createElement("p", {
					className: "lead"
				}, "You have a ", c.a.createElement("strong", null, m.split("_")[0].toUpperCase()), " ", "License Key."), c.a.createElement("p", {
					className: "lead"
				}, "Your License is valid upto : ", c.a.createElement("strong", null, W)))));
				var z = _ && !h,
					J = _ && h;
				return c.a.createElement(mn.a, {
					onSubmit: function(e) {
						e.preventDefault(), N(!0), Te.functions().httpsCallable("applyLicense")({
							license: r,
							company: S,
							email: F
						}).then((function(e) {
							N(!1), C(e.data.success), v(e.data.message), e.data.success ? (Ma(ml.CATEGORIES.LICENSE, ml.ACTIONS.APPLIED_SUCCESSFULLY, "License Applied ".concat(S, " ").concat(r)), Ga(ml.ATTR.LICENSE, r), Ga(ml.ATTR.COMPANY, S), window.location.reload()) : (o(""), Ma(ml.CATEGORIES.LICENSE, ml.ACTIONS.APPLIED_UNSUCCESSFULLY, "License Failed ".concat(S, " ").concat(r))), q()
						})).catch(console.error)
					},
					role: "form",
					id: "applyLicenseForm"
				}, c.a.createElement("center", null, c.a.createElement("h3", null, c.a.createElement(ul.a, {
					color: "secondary"
				}, c.a.createElement("strong", null, c.a.createElement("span", {
					className: "alert-inner--icon",
					role: "img",
					"aria-label": "emoji"
				}, "\ud83d\udce2")), " ", c.a.createElement("span", {
					className: "alert-inner--text"
				}, "License is being replaced by Teams.", " ", c.a.createElement("span", {
					onClick: function() {
						return window.open(Y.LINKS.REQUESTLY_DOCS_PREMIUM_SUBSCRIPTION, "_blank")
					},
					className: "cursor-pointer"
				}, "Read more")))), c.a.createElement("br", null), c.a.createElement("h3", null, "Please enter the following details ")), c.a.createElement("br", null), c.a.createElement("center", null, c.a.createElement(un.a, {
					className: ["mb-3", z ? "has-danger" : "", J ? "has-success" : ""].join(" "),
					style: {
						width: "50%"
					}
				}, c.a.createElement(Bt.a, {
					className: "input-group-alternative"
				}, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, null, c.a.createElement(R.ab, null))), c.a.createElement(Yt.a, {
					required: !0,
					type: "text",
					placeholder: "Company Name",
					value: S,
					disabled: h,
					onChange: function(e) {
						return A(e.target.value)
					},
					className: ["form-control-alternative", z ? "is-invalid" : "", J ? "is-valid" : ""].join(" ")
				})), c.a.createElement("br", null), c.a.createElement(Bt.a, {
					className: "input-group-alternative"
				}, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, null, c.a.createElement(R.C, null))), c.a.createElement(Yt.a, {
					required: !0,
					type: "text",
					placeholder: "License Key",
					value: r,
					disabled: h,
					onChange: function(e) {
						return o(e.target.value)
					},
					className: ["form-control-alternative", z ? "is-invalid" : "", J ? "is-valid" : ""].join(" ")
				})), h ? null : c.a.createElement(c.a.Fragment, null, O ? c.a.createElement(de.a, {
					disabled: !0,
					className: "my-4",
					color: "primary",
					type: "button"
				}, c.a.createElement(R.S, {
					className: "icon-spin"
				})) : c.a.createElement(de.a, {
					className: "my-4",
					color: "primary",
					type: "submit"
				}, "Apply License")))), z ? c.a.createElement("center", null, c.a.createElement("h4", {
					style: {
						color: "red"
					}
				}, _)) : null, J ? c.a.createElement("center", null, c.a.createElement("h4", {
					style: {
						color: "green"
					}
				}, _)) : null)
			},
			dl = function() {
				var e = Object(ee.g)();
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "License Details")), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-1",
					color: "primary",
					type: "button",
					onClick: function(t) {
						return function(e) {
							e.push(Ne.LICENSE.MANAGE.ABSOLUTE)
						}(e)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.k, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Manage License"))))), c.a.createElement(Ae.a, null, c.a.createElement(El, null)))))))
			},
			pl = function() {
				return c.a.createElement(kt, {
					component: dl
				})
			},
			Sl = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(pl, null))
					}
				}]), a
			}(c.a.Component),
			Al = S.CONSTANTS.GA_EVENTS,
			Tl = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)({}),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useCallback)((function() {
						(o(!0), t.loggedIn) ? Te.functions().httpsCallable("getCompanyLicenseUsers")({}).then((function(e) {
							E(e.data.success), N(e.data.users ? e.data.users : {}), o(!1)
						})).catch((function(e) {
							console.log(e)
						})): o(!1)
					}), [t]);
				return Object(l.useLayoutEffect)((function() {
					b()
				}), [b]), c.a.createElement(c.a.Fragment, null, r ? c.a.createElement(Er, {
					customLoadingMessage: "Loading License Information"
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "License Details")))), c.a.createElement(Ae.a, null, m ? ae()(O) ? c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", {
					className: "lead"
				}, "There are no users using license keys.")) : c.a.createElement("table", {
					className: "table"
				}, c.a.createElement("thead", null, c.a.createElement("tr", null, c.a.createElement("th", null, "User ID"), c.a.createElement("th", null, "Email"), c.a.createElement("th", null, "License Key"), c.a.createElement("th", null, "Applied On"), c.a.createElement("th", null, "Actions"))), c.a.createElement("tbody", null, Object.keys(O).map((function(e) {
					return c.a.createElement("tr", {
						key: e
					}, c.a.createElement("td", null, e), c.a.createElement("td", null, O[e].email), c.a.createElement("td", null, O[e].licenseKey), c.a.createElement("td", null, new Date(O[e].appliedOn).toDateString()), c.a.createElement("td", null, c.a.createElement(de.a, {
						color: "danger",
						type: "button",
						onClick: function(t) {
							return function(e) {
								var t = O[e].email,
									a = Te.functions().httpsCallable("revokeLicense");
								A(!0), a({
									userId: e
								}).then((function(e) {
									A(!1), E(e.data.success), N(e.data.users ? e.data.users : {}), le.b.success("Revoked ".concat(t, " License")), Ma(Al.CATEGORIES.LICENSE, Al.ACTIONS.REVOKED, "License Revoked ".concat(t))
								}))
							}(e)
						},
						disabled: S
					}, S ? c.a.createElement(R.S, {
						className: "icon-spin"
					}) : c.a.createElement("span", null, "Revoke"))))
				})))) : c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", {
					className: "lead"
				}, "Only the company admin can manage licenses. Please talk to your company admin if you want to be added as an admin to your company.")))))))))
			},
			fl = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: Tl
						}))
					}
				}]), a
			}(c.a.Component),
			Ol = S.COMPONENTS.LOGGER,
			Nl = {
				eventCallbackMap: {},
				requestId: 1,
				constants: {
					CONTENT_SCRIPT: "content_script",
					PAGE_SCRIPT: "page_script",
					DOMAIN: S.CONFIG.WEB_URL,
					SOURCE_FIELD: "source"
				},
				addMessageListener: function() {
					window.addEventListener("message", this.handleMessageReceived.bind(this))
				},
				getSource: function() {
					return this.constants.PAGE_SCRIPT
				},
				registerCallback: function(e, t) {
					if (t) {
						var a = this.requestId++;
						this.eventCallbackMap[e.action + "_" + a] = t, e.requestId = a
					}
				},
				invokeCallback: function(e) {
					var t = this.eventCallbackMap[e.action + "_" + e.requestId];
					"function" === typeof t && (delete this.eventCallbackMap[e.action], t.call(this, e.response))
				},
				sendMessage: function(e, t) {
					e.action ? (this.registerCallback(e, t), e[this.constants.SOURCE_FIELD] = this.getSource(), window.postMessage(e, this.constants.DOMAIN)) : Ol.error("Invalid message. Must contain some action")
				},
				sendResponse: function(e, t) {
					var a = {
						action: e.action,
						requestId: e.requestId,
						response: t
					};
					a[this.constants.SOURCE_FIELD] = this.constants.PAGE_SCRIPT, window.postMessage(a, this.constants.DOMAIN)
				},
				handleMessageReceived: function(e) {
					e && e.origin !== this.constants.DOMAIN ? "debug" === S.COMPONENTS.logLevel && console.log("Ignoring message from the following domain", e.origin, e.data) : e && e.data && e.data.source === this.constants.CONTENT_SCRIPT && ("debug" === S.COMPONENTS.logLevel && console.log("Received message:", e.data), this.invokeCallback(e.data))
				},
				init: function() {
					-1 !== window.location.hostname.indexOf("requestly.in") && -1 !== this.constants.DOMAIN.indexOf("requestly.io") && (this.constants.DOMAIN = this.constants.DOMAIN.replace(".io", ".in")), this.addMessageListener()
				}
			};

		function bl() {
			return window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.VERSION
		}

		function gl() {
			return !!bl()
		}

		function Rl() {
			return new Promise((function(e, t) {
				window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES && window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE ? e(window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE.getStorageSuperObject()) : t("Couldnt hit desktop API")
			}))
		}

		function hl(e) {
			return new Promise((function(t, a) {
				window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES && window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE ? t(window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE.getStorageObject(e)) : a("Couldnt hit desktop API")
			}))
		}

		function Cl(e) {
			return new Promise((function(t, a) {
				window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES && window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE ? t(window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE.setStorageObject(e)) : a("Couldnt hit desktop API")
			}))
		}

		function Il(e) {
			return new Promise((function(t, a) {
				window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES && window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE ? t(window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE.deleteItem(e)) : a("Couldnt hit desktop API")
			}))
		}

		function Ll() {
			return new Promise((function(e, t) {
				window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES && window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE ? e(window.RQ.DESKTOP.SERVICES.STORAGE_SERVICE.clearStorage()) : t("Couldnt hit desktop API")
			}))
		}
		var _l = function() {
				var e = Object(ea.a)($t.a.mark((function e() {
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.abrupt("return", window.RQ.DESKTOP.SERVICES.STATE_MANAGEMENT.getState("isBackgroundProcessActive").then(function() {
									var e = Object(ea.a)($t.a.mark((function e(t) {
										return $t.a.wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return e.abrupt("return", new Promise(function() {
														var e = Object(ea.a)($t.a.mark((function e(a) {
															var n;
															return $t.a.wrap((function(e) {
																for (;;) switch (e.prev = e.next) {
																	case 0:
																		if (t) {
																			e.next = 7;
																			break
																		}
																		return e.next = 3, window.RQ.DESKTOP.SERVICES.IPC.invokeEventInMain("start-background-process");
																	case 3:
																		n = e.sent, a(n), e.next = 8;
																		break;
																	case 7:
																		a(!0);
																	case 8:
																	case "end":
																		return e.stop()
																}
															}), e)
														})));
														return function(t) {
															return e.apply(this, arguments)
														}
													}()));
												case 1:
												case "end":
													return e.stop()
											}
										}), e)
									})));
									return function(t) {
										return e.apply(this, arguments)
									}
								}()));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			vl = function() {
				var e = Object(ea.a)($t.a.mark((function e() {
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("save-root-cert").then((function(e) {
									e.success ? le.b.success("Certificate saved") : le.b.error("An error occured while saving certificate")
								})).catch((function() {
									le.b.error("An error occured while saving certificate")
								}));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			yl = n;

		function Pl() {
			return document.documentElement.getAttribute("rq-ext-version")
		}

		function Ul() {
			return !!Pl()
		}

		function Dl(e) {
			return new Promise((function(t) {
				return Nl.sendMessage(e, t)
			}))
		}

		function wl() {
			return Dl({
				action: "GET_STORAGE_TYPE"
			})
		}

		function xl() {
			return Dl({
				action: "GET_STORAGE_INFO"
			})
		}

		function jl() {
			return new Promise((function(e) {
				Nl.sendMessage({
					action: "GET_STORAGE_SUPER_OBJECT"
				}, e)
			}))
		}

		function kl(e) {
			return new Promise((function(t) {
				Nl.sendMessage({
					action: "GET_STORAGE_OBJECT",
					key: e
				}, t)
			}))
		}

		function Ml(e) {
			return new Promise((function(t) {
				Nl.sendMessage({
					action: "SAVE_STORAGE_OBJECT",
					object: e
				}, t)
			}))
		}

		function Gl(e) {
			return new Promise((function(t) {
				Nl.sendMessage({
					action: "REMOVE_STORAGE_OBJECT",
					key: e
				}, t)
			}))
		}

		function Fl() {
			return new Promise((function(e) {
				Nl.sendMessage({
					action: "CLEAR_STORAGE"
				}, e)
			}))
		}

		function Bl(e) {
			return new Promise((function(t) {
				Nl.sendMessage({
					action: "SET_STORAGE_TYPE",
					storageType: e
				}, t)
			}))
		}

		function Vl() {
			return Dl({
				action: "GET_REMOTE_RULES_SETTINGS"
			})
		}

		function Hl(e) {
			return new Promise((function(t, a) {
				Ul() ? Nl.sendMessage({
					action: "SET_REMOTE_RULES_SETTINGS",
					remoteRulesSettings: e
				}, t) : a("Please make sure your extension is up to date")
			}))
		}
		var Yl = r,
			Wl = function() {
				function e(t) {
					Object(ce.a)(this, e), this.appMode = t.appMode || S.CONSTANTS.APP_MODES.EXTENSION, this.StorageHelper = function(e) {
						switch (e) {
							case S.CONSTANTS.APP_MODES.EXTENSION:
								return Yl;
							case S.CONSTANTS.APP_MODES.DESKTOP:
							default:
								return yl
						}
					}(this.appMode), this.primaryKeys = t.primaryKeys || ["objectType", "ruleType"], this.records = [], this.isRecordsFetched = !1, this.cachingEnabled = t.cacheRecords, this.saveRecordWithID = this.saveRecordWithID.bind(this), this.saveRecord = this.saveRecord.bind(this), this.getRecord = this.getRecord.bind(this), this.getRecords = this.getRecords.bind(this)
				}
				return Object(oe.a)(e, [{
					key: "getAllRecords",
					value: function() {
						return this.StorageHelper.getStorageSuperObject()
					}
				}, {
					key: "getRecords",
					value: function(e, t) {
						var a = this,
							n = this;
						return new Promise((function(r, l) {
							n.cachingEnabled && n.isRecordsFetched && !t ? r(n.filterRecordsByType(n.records, e)) : a.StorageHelper.getStorageSuperObject().then((function(t) {
								for (var a in n.records.length = 0, t) n.hasPrimaryKey(t[a]) && n.records.push(t[a]);
								n.isRecordsFetched = !0, r(n.filterRecordsByType(n.records, e))
							}))
						}))
					}
				}, {
					key: "hasPrimaryKey",
					value: function(e) {
						for (var t = 0; t < this.primaryKeys.length; t++)
							if ("undefined" !== typeof e[this.primaryKeys[t]]) return !0;
						return !1
					}
				}, {
					key: "filterRecordsByType",
					value: function(e, t) {
						return t ? e.filter((function(e) {
							return (e.objectType || S.CONSTANTS.OBJECT_TYPES.RULE) === t
						})) : e
					}
				}, {
					key: "saveRecord",
					value: function(e) {
						var t = this;
						return this.StorageHelper.saveStorageObject(e).then((function() {
							t.updateRecord(e)
						}))
					}
				}, {
					key: "saveRuleOrGroup",
					value: function(e) {
						var t = {
							[e.id]: e
						};
						return this.saveRecord(t)
					}
				}, {
					key: "saveMultipleRulesOrGroups",
					value: function(e) {
						var t = {};
						return e.forEach((function(e) {
							t[e.id] = e
						})), this.saveRecord(t)
					}
				}, {
					key: "saveRecordWithID",
					value: function(e) {
						var t = this;
						return this.StorageHelper.saveStorageObject({
							[e.id]: e
						}).then((function() {
							t.updateRecord(e)
						}))
					}
				}, {
					key: "getRecord",
					value: function(e) {
						return this.StorageHelper.getStorageObject(e)
					}
				}, {
					key: "removeRecord",
					value: function(e) {
						var t = this;
						return this.StorageHelper.removeStorageObject(e).then((function() {
							t.deleteRecord(e)
						}))
					}
				}, {
					key: "getCachedRecordIndex",
					value: function(e) {
						for (var t = 0; t < this.records.length; t++) {
							if (this.records[t].id === e) return t
						}
						return -1
					}
				}, {
					key: "updateRecord",
					value: function(e) {
						var t = e.id,
							a = this.getCachedRecordIndex(t),
							n = -1 !== a;
						if ("undefined" !== typeof e) {
							if (!this.hasPrimaryKey(e)) return;
							n ? this.records[a] = e : this.records.push(e)
						}
					}
				}, {
					key: "deleteRecord",
					value: function(e) {
						var t = this.getCachedRecordIndex(e);
						this.records.splice(t, 1)
					}
				}, {
					key: "printRecords",
					value: function() {
						this.StorageHelper.getStorageSuperObject().then((function(e) {
							console.log(e)
						}))
					}
				}, {
					key: "clearDB",
					value: function() {
						var e = this;
						this.StorageHelper.clearStorage().then((function() {
							e.records = []
						}))
					}
				}]), e
			}(),
			Kl = function(e) {
				return new Wl({
					cacheRecords: !1,
					appMode: e
				})
			};
		ne.a.initializeApp(S.CONFIG.firebaseConfig),
			function() {
				var e, t, a, n, r, l;
				e = window, t = document, a = "script", n = "ga", e.GoogleAnalyticsObject = n, e.ga = e.ga || function() {
					(e.ga.q = e.ga.q || []).push(arguments)
				}, e.ga.l = 1 * new Date, r = t.createElement(a), l = t.getElementsByTagName(a)[0], r.async = 1, r.src = "https://www.google-analytics.com/analytics.js", l.parentNode.insertBefore(r, l), window.ga("create", "UA-46800996-7", "auto"), window.ga("require", "GTM-KN4N9B7")
			}(),
			function() {
				var e = window.analytics = window.analytics || [];
				if (!e.initialize)
					if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");
					else {
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware"], e.factory = function(t) {
							return function() {
								var a = Array.prototype.slice.call(arguments);
								return a.unshift(t), e.push(a), e
							}
						};
						for (var t = 0; t < e.methods.length; t++) {
							var a = e.methods[t];
							e[a] = e.factory(a)
						}
						e.load = function(t, a) {
							var n = document.createElement("script");
							n.type = "text/javascript", n.async = !0, n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
							var r = document.getElementsByTagName("script")[0];
							r.parentNode.insertBefore(n, r), e._loadOptions = a
						}, e.SNIPPET_VERSION = "4.1.0", e.load("ffoCEI2K8knMfqli7DCIWxSgbURaHf5h"), e.page()
					}
			}(), Nl.init();
		var ql = Y.RULE_TYPES_CONFIG,
			Ql = function(e) {
				var t = e.columnWidth,
					a = e.ruleData,
					n = a.imageURL,
					r = a.rules[0].ruleType;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-align-center nowrap overflow-hidden p-3",
					style: {
						width: t
					}
				}, c.a.createElement("div", {
					className: "d-flex justify-content-center align-items-center"
				}, c.a.createElement("span", {
					className: "rule-badge"
				}, c.a.createElement("span", {
					className: "avatar rule-badge text-align-center",
					style: {
						color: "white",
						borderRadius: "20%",
						fontWeight: "lighter",
						boxShadow: "none",
						height: 50,
						width: 50,
						background: n ? "white" : ql[r].PRIMARY_COLOR
					}
				}, n ? c.a.createElement("img", {
					height: "50",
					width: "50",
					src: n,
					alt: ""
				}) : c.a.createElement(ql[r].ICON))))))
			},
			zl = function(e) {
				var t = e.ruleData,
					a = e.columnWidth;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-align-left nowrap overflow-hidden p-3",
					style: {
						width: a
					}
				}, c.a.createElement("h4", {
					className: "mb-0"
				}, " ", t.name, " "), c.a.createElement("span", {
					className: "font-weight-200",
					style: {
						fontSize: "0.9rem",
						whiteSpace: "normal"
					}
				}, t.description)))
			},
			Jl = function(e) {
				var t = e.ruleData,
					a = e.columnWidth,
					n = {
						E: "#5b934f",
						I: "#e805be",
						M: "#4076e3",
						Q: "#d6005c",
						T: "#0f6f77",
						Z: "#545454"
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-align-center overflow-hidden p-3",
					style: {
						width: a
					}
				}, c.a.createElement("div", {
					className: "d-flex text-align-center",
					style: {
						flexFlow: "wrap"
					}
				}, t.tags.map((function(e, t) {
					var a = function(e) {
						var t = function(e) {
							return e[0].toUpperCase()
						}(e);
						for (var a in n)
							if (t <= a) return n[a]
					}(e);
					return c.a.createElement(qa.a, {
						key: t,
						style: {
							backgroundColor: a,
							color: "#fff"
						},
						className: "m-1",
						pill: !0
					}, c.a.createElement("span", {
						style: {
							fontSize: "0.7rem"
						}
					}, " ", e))
				})))))
			},
			Xl = function(e) {
				var t = e.heading,
					a = e.content;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, t), c.a.createElement("p", {
					className: "lead"
				}, a, " ", c.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: Y.LINKS.REQUESTLY_DOCS
				}, "Learn More")), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return window.open(Y.LINKS.CHROME_EXTENSION)
					}
				}, "Chrome"), c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return window.open(Y.LINKS.FIREFOX_EXTENSION)
					}
				}, "Firefox"))))))))))
			},
			Zl = function(e) {
				var t = e.columnWidth,
					a = e.ruleData,
					n = Object(l.useContext)(X),
					r = n.state,
					o = n.dispatch,
					s = tt(r),
					i = function(e) {
						return e.marketplace.ruleStatus
					}(r),
					d = st(r),
					p = Object(l.useCallback)(o, []),
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)(!1),
					b = Object(u.a)(N, 2),
					g = b[0],
					R = b[1],
					h = a.MKTRuleID,
					C = function(e) {
						var t = [];
						a.rules.forEach((function(a) {
							t.push(Kl(d).saveRuleOrGroup(Object(E.a)(Object(E.a)({}, a), {}, {
								status: e
							})))
						})), Promise.all(t).then((function() {
							p(function(e) {
								return {
									type: m.TOGGLE_MARKETPLACE_RULES,
									payload: e
								}
							}(h))
						})).then((function() {
							e === S.CONSTANTS.RULE_STATUS.ACTIVE ? le.b.success("Rule is now ".concat(e.toLowerCase())) : le.b.error("Rule is now ".concat(e.toLowerCase()))
						})).then((function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.MARKETPLACE, "toggled", a.name)
						}))
					},
					I = function() {
						return i[h] === S.CONSTANTS.RULE_STATUS.ACTIVE
					},
					L = function() {
						return R(!g)
					},
					_ = function() {
						return c.a.createElement(Xt.a, {
							isOpen: g,
							toggle: L,
							centered: !0
						}, c.a.createElement(Xl, {
							heading: "Browser Extension Required",
							content: "Please install Requestly Browser Extension to use Marketplace Rule."
						}))
					},
					v = Object(l.useCallback)(I, []);
				return Object(l.useEffect)((function() {
					O(v())
				}), [v]), c.a.createElement(c.a.Fragment, null, c.a.createElement(_, null), c.a.createElement("td", {
					className: "text-align-center nowrap overflow-hidden cursor-pointer p-3",
					style: {
						width: t
					}
				}, c.a.createElement("div", {
					className: "d-flex justify-content-center"
				}, c.a.createElement("label", {
					className: "custom-toggle margin-top-point-seven-rem"
				}, c.a.createElement("input", {
					type: "checkbox",
					checked: f,
					onChange: function(e) {
						return function(e) {
							e.preventDefault(), Ul() && s.loggedIn && (I() ? C(S.CONSTANTS.RULE_STATUS.INACTIVE) : C(S.CONSTANTS.RULE_STATUS.ACTIVE))
						}(e)
					},
					onClick: function() {
						Ul() ? s.loggedIn ? O(!f) : o(Ut("authModal", !0, {
							redirectURL: window.location.href
						})) : R(!0)
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle custom-toggle-slider-with-label",
					"data-label-off": "Off",
					"data-label-on": "On",
					onClick: function(e) {
						return e.stopPropagation()
					}
				})))))
			},
			$l = Y.MARKETPLACE_TABLE_CONSTANTS.COLUMN_WIDTHS,
			ec = [Ql, zl, Jl, Zl],
			tc = function(e) {
				var t = e.marketplaceRules;
				return c.a.createElement(c.a.Fragment, null, t.map((function(e) {
					return function(e, t) {
						return c.a.createElement("tr", {
							key: t
						}, ec.map((function(a, n) {
							return c.a.createElement(a, {
								key: n + t,
								ruleData: e,
								columnWidth: $l[n] + "%"
							})
						})))
					}(e, e.MKTRuleID)
				})))
			},
			ac = function() {
				return c.a.createElement("tr", null, c.a.createElement("td", {
					colSpan: "7"
				}, c.a.createElement("center", null, c.a.createElement("h2", {
					style: {
						margin: "2rem"
					}
				}, "Couldn`t find any rule matching the given keyword."))))
			},
			nc = function(e) {
				var t = e.marketplaceRules,
					a = Object(l.useContext)(X),
					n = a.dispatch,
					r = function(e) {
						return at(e).marketplace
					}(a.state),
					o = t,
					s = ae()(r) ? o : o.filter((function(e) {
						return e.name.match(new RegExp(r, "i"))
					}));
				return Object(l.useEffect)((function() {
					return function() {
						n(yt("marketplace", ""))
					}
				}), [n]), c.a.createElement("tbody", {
					className: "py-2",
					style: {
						height: "100%",
						width: "100%"
					}
				}, ae()(s) ? c.a.createElement(ac, null) : c.a.createElement(tc, {
					marketplaceRules: s
				}))
			},
			rc = Y.MARKETPLACE_TABLE_CONSTANTS.COLUMN_WIDTHS,
			lc = function(e) {
				var t = e.marketplaceRules;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ka.a, {
					className: "align-items-center table-flush border-0 w-100",
					responsive: !0,
					style: {
						tableLayout: "fixed"
					}
				}, c.a.createElement("thead", {
					className: "thead-light",
					style: {
						position: "sticky",
						top: "0"
					}
				}, c.a.createElement("tr", {
					key: "0",
					style: {
						position: "sticky",
						top: "0"
					}
				}, [{
					columnData: "Site"
				}, {
					columnData: "Name"
				}, {
					columnData: "Tags"
				}, {
					columnData: "Status"
				}].map((function(e, t) {
					var a = e.columnData,
						n = e.styles,
						r = e.onClickHandler;
					return c.a.createElement("th", {
						key: t,
						scope: "col",
						className: "text-align-center",
						style: Object(E.a)({
							width: rc[t] + "%"
						}, n),
						onClick: r
					}, a)
				})))), c.a.createElement(nc, {
					marketplaceRules: t
				})))
			},
			cc = function() {
				var e = Object(l.useState)(!0),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)([]),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = function() {
						var e = Object(ea.a)($t.a.mark((function e() {
							var t;
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = Te.firestore().collection("marketplace"), e.next = 3, t.get();
									case 3:
										e.sent.forEach((function(e) {
											i((function(t) {
												return [].concat(Object(Rt.a)(t), [e.data()])
											}))
										})), n(!1);
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				return Object(l.useLayoutEffect)((function() {
					m()
				}), []), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Marketplace")))), c.a.createElement("div", {
					className: "table-responsive w-100"
				}, a ? c.a.createElement("div", {
					className: "mt-6"
				}, c.a.createElement(Er, {
					customLoadingMessage: "Loading Marketplace"
				})) : c.a.createElement(lc, {
					marketplaceRules: s
				})))))))
			},
			oc = function() {
				var e = Object(l.useContext)(X),
					t = e.dispatch,
					a = e.state,
					n = qe(a),
					r = st(a),
					o = function(e) {
						return Qe(e).filter((function(e, t, a) {
							return a.findIndex((function(t) {
								return t.MKTRuleID === e.MKTRuleID
							})) === t
						}))
					}(a),
					s = Object(l.useCallback)(t, []);
				Object(l.useEffect)((function() {
					var e = Kl(r).getRecords(S.CONSTANTS.OBJECT_TYPES.GROUP),
						t = Kl(r).getRecords(S.CONSTANTS.OBJECT_TYPES.RULE);
					Promise.all([e, t]).then((function(e) {
						var t = e[0],
							a = e[1];
						s(Lt(a, t))
					}))
				}), [s, r]);
				var i = Object(l.useCallback)((function() {
					var e = {};
					return o.forEach((function(t) {
						e[t.MKTRuleID] = t.status
					})), e
				}), [n]);
				return Object(l.useEffect)((function() {
					s(function(e) {
						return {
							type: m.UPDATE_MARKETPLACE_RULES,
							payload: e
						}
					}(i()))
				}), [s, i]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(cc, null)))
			},
			sc = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(oc, null))
					}
				}]), a
			}(c.a.Component),
			ic = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, {
					className: "my-4"
				}, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "bg-white border-0"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement("p", {
					className: "lead"
				}, "Requestly Premium for Teams"))), c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h3", {
					className: "mb-0"
				}, "My Teams")))), c.a.createElement(Ae.a, null, c.a.createElement(Ja, null)))))))
			},
			uc = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: ic
				}))
			},
			mc = function() {
				var e = Object(ee.g)();
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "center-of-screen mt--7",
					fluid: !0
				}, c.a.createElement("section", {
					className: "section section-xl py-7 pt-lg-8 bg-white center-of-screen"
				}, c.a.createElement("div", {
					className: "container"
				}, c.a.createElement("div", {
					className: "row justify-content-center"
				}, c.a.createElement("div", {
					className: "col-12 col-md-8 text-center"
				}, c.a.createElement("span", {
					className: "icon icon-shape icon-shape-warning rounded-circle mb-4"
				}, c.a.createElement("i", {
					className: "fas fa-exclamation-triangle"
				})), c.a.createElement("h1", {
					className: "mb-4"
				}, "Payment verification failed!", " ", c.a.createElement("span", {
					role: "img",
					"aria-label": "emoji"
				}, "\ud83d\ude41")), c.a.createElement("p", {
					className: "lead mb-5 px-sm-5"
				}, "We were unable to verify this transaction. Please try again with a different payment method. Any amount deducted would be credited back to your card."), c.a.createElement("button", {
					className: "btn btn-icon btn-3 btn-primary animate-up-4",
					type: "button",
					onClick: function() {
						return ye(e)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Try again"), c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement("i", {
					className: "ni ni-bold-right"
				})))))))))
			},
			Ec = function() {
				var e = Object(ee.g)();
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "center-of-screen mt--7",
					fluid: !0
				}, c.a.createElement("section", {
					className: "section section-xl py-7 pt-lg-8 bg-white center-of-screen"
				}, c.a.createElement("div", {
					className: "container"
				}, c.a.createElement("div", {
					className: "row justify-content-center"
				}, c.a.createElement("div", {
					className: "col-12 col-md-8 text-center"
				}, c.a.createElement("span", {
					className: "icon icon-shape icon-shape-success rounded-circle mb-4"
				}, c.a.createElement("i", {
					className: "fas fa-check"
				})), c.a.createElement("h1", {
					className: "mb-4"
				}, "It was a success!", " ", c.a.createElement("span", {
					role: "img",
					"aria-label": "emoji"
				}, "\ud83d\udc4d")), c.a.createElement("p", {
					className: "lead mb-5 px-sm-5"
				}, "All set. Your subscription would be activated in a few seconds. You will shortly receive the invoice on your registered email address."), c.a.createElement("button", {
					className: "btn btn-icon btn-3 btn-primary animate-up-4",
					type: "button",
					onClick: function() {
						return ge(e, !0)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Continue to dashboard"), c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement("i", {
					className: "ni ni-bold-right"
				})))))))))
			},
			dc = a(203),
			pc = a.n(dc),
			Sc = Y.PATHS,
			Ac = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "center-of-screen mt--7",
					fluid: !0
				}, c.a.createElement("section", {
					className: "section section-xl py-7 pt-lg-8 bg-white center-of-screen"
				}, c.a.createElement("div", {
					className: "container"
				}, c.a.createElement("div", {
					className: "row justify-content-center"
				}, c.a.createElement("div", {
					className: "row"
				}, c.a.createElement("div", {
					className: "col-12 text-center d-flex align-items-center justify-content-center"
				}, c.a.createElement("div", null, c.a.createElement("a", {
					href: "../index.html"
				}, c.a.createElement("img", {
					className: "img-fluid w-75",
					src: pc.a,
					alt: "404 not found"
				})), c.a.createElement("h1", {
					className: "mt-5"
				}, "Page not", " ", c.a.createElement("span", {
					className: "font-weight-bolder text-primary"
				}, "found")), c.a.createElement("p", {
					className: "lead my-4"
				}, "Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."), c.a.createElement(i.b, {
					className: "btn btn-primary animate-hover",
					to: Sc.RULES.RELATIVE
				}, c.a.createElement("i", {
					className: "fas fa-chevron-left mr-3 pl-2 animate-left-3"
				}), "Go back home")))))))))
			},
			Tc = function(e) {
				var t = e.customHeading,
					a = e.hideShadow,
					n = Object(l.useRef)(!0),
					r = Object(l.useState)(!0),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(!1),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(!1),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					R = Object(l.useState)(!1),
					h = Object(u.a)(R, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useCallback)((function() {
						Te.functions().httpsCallable("fetchIndividualUserSubscriptionDetails")().then((function(e) {
							if (!n.current) return null;
							if (!1 === e.data.success) return p(!0), void i(!1);
							var t = e.data.data;
							I(t.status), "canceled" === t.status && p(!0), f(new Date(1e3 * t.endDate).toDateString()), g(new Date(1e3 * t.startDate).toDateString()), i(!1)
						})).catch((function(e) {
							if (!n.current) return null;
							i(!1)
						}))
					}), []);
				return Object(l.useEffect)((function() {
					return L(),
						function() {
							n.current = !1
						}
				}), [L]), c.a.createElement(c.a.Fragment, null, s ? c.a.createElement(pe.a, null, c.a.createElement(fe, null)) : d ? c.a.createElement(Xa, {
					customHeading: t,
					hideShadow: a
				}) : c.a.createElement(on, {
					hideManagePersonalSubscriptionButtion: !0,
					customHeading: t,
					hideShadow: a,
					subscriptionDetails: {
						validTill: T,
						validFrom: b,
						status: C,
						type: "individual"
					}
				}))
			},
			fc = function(e) {
				var t = e.mode,
					a = e.teamId,
					n = new URLSearchParams(window.location.search),
					r = !!n.has("autoRefresh") && "true" === n.get("autoRefresh"),
					o = Object(l.useRef)(!0),
					s = Object(l.useContext)(X).state,
					i = tt(s),
					m = Object(l.useState)(null),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(!1),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)([]),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Object(l.useState)(!1),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = function(e) {
						if (t) {
							L(!0);
							var n = [],
								r = "individual" === t ? "individualSubscriptions" : "teams",
								l = "individual" === t ? i.details.profile.uid : a,
								c = Te.firestore().collection(r).doc(l).collection("invoices").orderBy("created", "desc");
							e && (c = c.startAfter(e)), (c = c.limit(10)).get().then((function(e) {
								if (!o.current) return null;
								e.empty ? f(!0) : (e.forEach((function(e) {
									e.data().number && e.data().hosted_invoice_url && n.push({
										id: e.id,
										total: Math.round(e.data().total / 100).toFixed(2),
										subTotal: Math.round(e.data().subTotal / 100).toFixed(2),
										tax: Math.round((e.data().tax || 0) / 100).toFixed(2),
										amountPaid: Math.round(e.data().amountPaid / 100).toFixed(2),
										created: new Date(1e3 * e.data().created).toDateString(),
										periodStart: new Date(1e3 * e.data().periodStart).toDateString(),
										preiodEnd: new Date(1e3 * e.data().preiodEnd).toDateString(),
										currency: e.data().currency,
										status: e.data().status,
										hosted_invoice_url: e.data().hosted_invoice_url,
										number: e.data().number,
										productStart: new Date(1e3 * e.data().productStart).toDateString(),
										productEnd: new Date(1e3 * e.data().productEnd).toDateString()
									})
								})), n.length > 0 && (g((function(e) {
									return e.concat(n)
								})), p(e))), L(!1)
							}))
						}
					},
					v = Object(l.useCallback)(_, [a]),
					y = function() {
						return function(e) {
							var t = new Set;
							return e.filter((function(e) {
								var a = t.has(e.id);
								return t.add(e.id), !a
							}))
						}(b).map((function(e) {
							return c.a.createElement("tr", {
								key: e.id,
								onClick: function(t) {
									return window.open(e.hosted_invoice_url, "_blank")
								},
								className: "cursor-pointer"
							}, c.a.createElement("th", {
								scope: "row",
								style: {
									textTransform: "uppercase"
								}
							}, e.number), c.a.createElement("td", {
								className: "text-center"
							}, c.a.createElement("span", {
								className: "font-weight-bold",
								style: {
									textTransform: "uppercase"
								}
							}, "".concat(e.currency, " ").concat(parseInt(e.total) > 0 ? parseInt(e.total) : 0))), c.a.createElement("td", {
								className: "text-center"
							}, c.a.createElement(qa.a, {
								color: "",
								className: "badge-dot"
							}, function(e) {
								switch (e.status) {
									case "open":
										return c.a.createElement(c.a.Fragment, null, c.a.createElement(de.a, {
											className: "btn-icon btn-3",
											color: "primary",
											size: "sm",
											type: "button"
										}, c.a.createElement("span", {
											className: "btn-inner--icon"
										}, c.a.createElement(R.F, null)), c.a.createElement("span", {
											className: "btn-inner--text"
										}, "Pay now")));
									case "paid":
										return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
											className: "bg-success"
										}), c.a.createElement("span", {
											className: "font-weight-bold"
										}, "Paid"));
									case "void":
										return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
											className: "bg-danger"
										}), c.a.createElement("span", {
											className: "font-weight-bold"
										}, "Cancelled"));
									case "draft":
										return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
											className: "bg-danger"
										}), c.a.createElement("span", {
											className: "font-weight-bold"
										}, "Pending"));
									case "uncollectible":
										return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
											className: "bg-danger"
										}), c.a.createElement("span", {
											className: "font-weight-bold"
										}, "Expired"));
									default:
										return c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
											className: "bg-success"
										}), "Paid")
								}
							}(e))), c.a.createElement("td", {
								className: "text-center"
							}, e.created), c.a.createElement("td", {
								className: "text-center"
							}, "".concat(e.productStart, " ~ ").concat(e.productEnd)))
						}))
					};
				return Object(l.useEffect)((function() {
					return v(),
						function() {
							o.current = !1
						}
				}), [v]), Object(l.useLayoutEffect)((function() {
					if (r) {
						var e = setInterval((function() {
							Object(Oe.isEmpty)(b) && v()
						}), 2e3);
						return function() {
							clearInterval(e)
						}
					}
				}), [b, v, r]), c.a.createElement(c.a.Fragment, null, I ? c.a.createElement(fe, {
					customLoadingMessage: "Loading your invoices"
				}) : Object(Oe.isEmpty)(b) ? c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h5", null, "There are currently no invoices. If you have recently made a purchase, please wait a minute or two.")) : c.a.createElement(Ka.a, {
					className: "align-items-center",
					responsive: !0
				}, c.a.createElement("thead", {
					className: "thead-light"
				}, c.a.createElement("tr", null, c.a.createElement("th", {
					scope: "col"
				}, "Invoice ID"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Amount"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Status"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Invoice Date"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Invoice Period"))), c.a.createElement("tbody", null, y()), c.a.createElement("tfoot", null, c.a.createElement("tr", null, c.a.createElement("td", {
					colSpan: "5",
					style: {
						textAlign: "center"
					}
				}, T ? c.a.createElement("span", null, "- End of all invoices -") : c.a.createElement(de.a, {
					onClick: function(e) {
						_(d.docs[d.docs.length - 1])
					},
					color: "secondary",
					outline: !0,
					type: "button",
					size: "sm"
				}, "View Past Invoices"))))))
			},
			Oc = function() {
				var e = Object(l.useRef)(!0),
					t = Object(l.useState)(!0),
					a = Object(u.a)(t, 2),
					n = a[0],
					r = a[1],
					o = Object(l.useCallback)((function() {
						Te.functions().httpsCallable("fetchIndividualUserSubscriptionDetails")().then((function(t) {
							if (!e.current) return null;
							!1 !== t.data.success ? "canceled" === t.data.data.status && r(!1) : r(!1)
						})).catch((function(t) {
							if (!e.current) return null
						}))
					}), []);
				return Object(l.useEffect)((function() {
					return o(),
						function() {
							e.current = !1
						}
				}), [o]), c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", {
					className: "mb-0"
				}, "Requestly Premium")), n ? c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						return ke({
							mode: "individual",
							planType: "gold"
						})
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.N, {
					size: "1rem"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Change Plan"))) : null)), c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("br", null), c.a.createElement("h4", {
					style: {
						textAlign: "center"
					}
				}, "You can manage your personal subscription here. If you want to manage a subscription for a Team instead, click", " ", c.a.createElement(i.b, {
					to: Y.PATHS.ACCOUNT.MY_TEAMS.ABSOLUTE
				}, "here"), "."))), c.a.createElement("br", null), c.a.createElement(sn, {
					hideShadow: !0,
					customHeading: "Currently Selected Subscription",
					hideManagePersonalSubscriptionButtion: !0,
					hideIfSubscriptionIsPersonal: !0,
					hideIfNoSubscription: !0
				}), c.a.createElement(Tc, {
					hideShadow: !0,
					customHeading: "Personal Subscription"
				}), c.a.createElement(Se.a, {
					className: "border-0 has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Billing")), n ? c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						return Me({
							mode: "individual"
						})
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.m, {
					size: "1.2rem"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Update Payment Method"))) : null)), c.a.createElement(Ae.a, {
					className: "border-0"
				}, c.a.createElement(fc, {
					mode: "individual"
				}))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					style: {
						fontSize: "0.8125rem"
					},
					className: "text-center"
				}, "Any questions? Reach our payment support team at", " ", c.a.createElement("a", {
					href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)
				}, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL), ".")))))))
			},
			Nc = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: Oc
				}))
			},
			bc = a(132),
			gc = a.n(bc),
			Rc = a(204);

		function hc(e) {
			var t = e.currency,
				a = e.price,
				n = e.duration,
				r = e.showOnlyExactAmount,
				l = e.plan;
			return 0 === Number(a) ? c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), "0", c.a.createElement("span", {
				className: "period"
			}, "/month")), "monthly" === n ? null : c.a.createElement("h6", {
				className: "text-center invisible"
			}, nn(null, t))) : "monthly" === n ? c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +a, c.a.createElement("span", {
				className: "period"
			}, "/month", l.id === Y.PRICING.PLAN_NAMES.ENTERPRISE ? "/user" : null)) : "quarterly" === n ? c.a.createElement(c.a.Fragment, null, r ? c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +a, c.a.createElement("span", {
				className: "period"
			}, "/quarter")) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +Math.floor(+a / 3), c.a.createElement("span", {
				className: "period"
			}, "/month")), c.a.createElement("h6", {
				className: "text-center"
			}, nn(null, t), c.a.createElement("b", null, +a), " /quarter"))) : "half-yearly" === n ? c.a.createElement(c.a.Fragment, null, r ? c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +a, c.a.createElement("span", {
				className: "period"
			}, "/six months")) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +Math.floor(+a / 6), c.a.createElement("span", {
				className: "period"
			}, "/month")), c.a.createElement("h6", {
				className: "text-center"
			}, nn(null, t), c.a.createElement("b", null, +a), " /six months"))) : "annual" === n ? c.a.createElement(c.a.Fragment, null, r ? c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +a, c.a.createElement("span", {
				className: "period"
			}, "/year")) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {
				className: "card-price text-center"
			}, c.a.createElement("span", {
				className: "period",
				style: {
					verticalAlign: "super",
					marginRight: "1%",
					fontSize: "1.5rem"
				}
			}, nn(null, t)), +Math.floor(+a / 12), c.a.createElement("span", {
				className: "period"
			}, "/month", l.id === Y.PRICING.PLAN_NAMES.ENTERPRISE ? "/user" : null)), c.a.createElement("h6", {
				className: "text-center"
			}, nn(null, t), c.a.createElement("b", null, +a), " /year", l.id === Y.PRICING.PLAN_NAMES.ENTERPRISE ? "/user" : null))) : void 0
		}

		function Cc(e) {
			var t = e.feature;
			return t.title && !0 === t.enabled ? c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
				className: "fa-li"
			}, c.a.createElement("i", {
				className: "fas fa-check"
			})), t.title) : t.title && !1 === t.enabled ? c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
				className: "text-muted"
			}, c.a.createElement("span", {
				className: "fa-li"
			}, c.a.createElement("i", {
				className: "fas fa-times"
			})), t.title)) : t.title ? t.title : void 0
		}
		var Ic = ut,
			Lc = Y.AUTH.ACTION_LABELS,
			_c = function(e) {
				var t = e.features,
					a = e.currency,
					n = e.duration,
					r = e.currentPlan,
					o = e.onChoosePlan,
					s = e.isPlanExpired,
					i = e.couponDiscountValue,
					u = e.annualDiscountValue,
					m = Object(l.useContext)(X),
					E = m.state,
					d = m.dispatch,
					p = tt(E),
					S = Object(ee.g)();
				if (!t || !t.length) return c.a.createElement("div", {
					className: "section is-large has-text-centered"
				}, c.a.createElement("button", {
					className: "button is-loading"
				}, "Loading"));
				var A = function() {
					return c.a.createElement("span", null, "Upgrade")
				};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("section", {
					className: "pricing py-3"
				}, c.a.createElement("div", {
					className: "container"
				}, c.a.createElement("div", {
					className: "row"
				}, Ic.map((function(e) {
					if ("quarterly" === n) return c.a.createElement(c.a.Fragment, null);
					var l = e[n].price[a];
					"gold" === e.id && "annual" === n ? l -= u / 100 * l : e.allowDiscounts && (l -= i / 100 * l), l = l.toFixed(2);
					var m = 0 === Number(l),
						E = St(r),
						T = At(e.id),
						f = !(!E || s || !p) && pt(p);
					return c.a.createElement("div", {
						className: "col-lg-4",
						key: e.id,
						onClick: function() {
							return o(e.id)
						}
					}, c.a.createElement("div", {
						className: "card mb-5 mb-lg-0"
					}, c.a.createElement("div", {
						className: "card-body"
					}, c.a.createElement("h5", {
						className: "card-title text-muted text-uppercase text-center"
					}, function(e) {
						if (!e) return " ";
						var t = e.split("_")[0];
						return t === Y.PRICING.PLAN_NAMES.BRONZE ? "Free" : t === Y.PRICING.PLAN_NAMES.SILVER || t === Y.PRICING.PLAN_NAMES.GOLD ? "Personal" : t === Y.PRICING.PLAN_NAMES.ENTERPRISE ? "For Your Organization" : " "
					}(e.id)), c.a.createElement(hc, {
						currency: a,
						duration: n,
						price: l,
						plan: e
					}), c.a.createElement("h4", {
						className: "text-center text-muted font-weight-bolder"
					}, m ? "No Credit Card Required" : "Cancel Anytime"), c.a.createElement("hr", null), c.a.createElement("ul", {
						className: "fa-ul"
					}, t.map((function(t) {
						return !1 === t.showInComparisonTable ? c.a.createElement(c.a.Fragment, {
							key: t.id
						}) : c.a.createElement("li", {
							key: t.id
						}, c.a.createElement(Cc, {
							feature: t[e.id]
						}))
					}))), m ? c.a.createElement("button", {
						className: ["btn", "btn-block", "text-uppercase", "cursor-disabled", p.loggedIn ? "btn-secondary" : "btn-primary"].join(" "),
						onClick: function() {
							return p.loggedIn ? S.push("/rules") : void d(Ut("authModal", !0, {
								redirectURL: window.location.href,
								authMode: Lc.SIGN_UP
							}))
						}
					}, "Get Started") : T ? c.a.createElement("a", {
						href: Y.LINKS.CONTACT_US,
						className: ["btn", "btn-block", "text-uppercase", f && !T ? "btn-secondary cursor-disabled" : "btn-primary cursor-pointer"].join(" "),
						disabled: f && !T
					}, T ? "Contact Us" : f ? "Current plan" : "Contact Us") : c.a.createElement("button", {
						className: ["btn", "btn-block", "text-uppercase", f && !T ? "btn-secondary cursor-disabled" : "btn-primary cursor-pointer"].join(" "),
						disabled: f && !T
					}, T ? A() : f ? "Current plan" : A()))))
				}))))))
			},
			vc = function() {
				return c.a.createElement("h6", null, "Checkout is currently unavailable")
			},
			yc = S.CONSTANTS.GA_EVENTS;

		function Pc(e) {
			var t = e.user,
				a = Object(l.useState)({}),
				n = Object(u.a)(a, 2),
				r = n[0],
				o = n[1],
				s = Object(l.useState)(0),
				i = Object(u.a)(s, 2),
				m = i[0],
				E = i[1],
				d = Te.functions().httpsCallable("getEnterpriseAdminDetails"),
				p = Te.functions().httpsCallable("requestEnterprisePlanFromAdmin");
			return Object(l.useLayoutEffect)((function() {
				t.details.isLoggedIn && 0 === Object.keys(r).length && d({
					email: t.details.profile.email
				}).then((function(e) {
					o(e)
				}))
			})), c.a.createElement(c.a.Fragment, null, r && r.data && r.data.success ? 1 === m ? c.a.createElement(Er, {
				customLoadingMessage: "Requesting organisation admin"
			}) : c.a.createElement(pe.a, null, c.a.createElement(me.a, {
				className: "",
				sm: "12"
			}, 2 === m ? c.a.createElement(ul.a, {
				color: "primary"
			}, c.a.createElement("h2", {
				className: "text-white",
				style: {
					cursor: "default"
				}
			}, r.data.enterpriseData.admin.name, " ", " ", " has been notified. Please get in touch with him for further details.")) : c.a.createElement(ul.a, {
				color: "primary"
			}, c.a.createElement("h2", {
				className: "text-white",
				style: {
					cursor: "default"
				}
			}, "Your Organization is already on Requestly Enterprise Plan managed by ", r.data.enterpriseData.admin.name, ". ", " ", c.a.createElement("span", {
				onClick: function() {
					E(1);
					var e = r.data.enterpriseData.admin,
						a = e.email.split("@")[1];
					p({
						userEmail: t.details.profile.email,
						adminEmail: e.email,
						adminName: e.name
					}).then((function() {
						Ma(yc.CATEGORIES.PRICING, yc.ACTIONS.REQUEST_ADMIN, "".concat(a, " enterprise requested")), E(2)
					})).catch((function(t) {
						console.log(t), le.b.error("Unable to send email"), le.b.info("Contact directly at: ".concat(e.email))
					}))
				},
				className: "text-light",
				style: {
					cursor: "pointer"
				}
			}, "Click here"), " ", " to request Requestly Premium for you")))) : null)
		}
		var Uc = {
				getCancelSubmittedDetails: function() {
					var e = Te.auth().currentUser;
					e && Te.database().ref("userSubscriptions/".concat(e.uid, "/cancelSubmitted")).on("value", (function(e) {}))
				},
				getPlanDetails: function() {
					var e = Te.auth().currentUser;
					e && Te.database().ref("userSubscriptions/".concat(e.uid, "/planDetails")).on("value", (function(e) {
						return console.log(e.val()), e.val()
					}))
				},
				getPlans: function() {
					Te.database().ref("plans").on("value", (function(e) {
						console.log(e.val())
					}))
				},
				getFeatures: function() {
					Te.database().ref("features").on("value", (function(e) {}))
				},
				processPayment: function(e, t) {
					var a = Te.auth().currentUser.uid;
					return Te.database().ref("/userSubscriptions/".concat(a, "/planDetails")).update({
						token: e.id,
						planId: t,
						pending: !0
					})
				},
				cancelSubscription: function() {
					var e = Te.auth().currentUser.uid;
					return Te.database().ref("/userSubscriptions/".concat(e, "/cancelSubmitted")).update({
						pending: !0
					})
				},
				processPaypalPayment: function(e, t, a, n, r, l) {
					var c = Te.auth().currentUser.uid;
					return Te.database().ref("/userSubscriptions/".concat(c, "/planDetails")).update({
						orderId: e,
						planId: t,
						pending: !0,
						planDays: a,
						currency: n,
						finalPrice: r,
						coupon: l
					})
				}
			},
			Dc = S.CONSTANTS.GA_EVENTS,
			wc = an,
			xc = rn,
			jc = function(e) {
				var t = e.currency,
					a = Object(ee.g)(),
					n = Object.values(wc).includes(t) ? t : null,
					r = Object(l.useContext)(X).state,
					o = tt(r),
					s = Object(l.useState)(""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(""),
					p = Object(u.a)(d, 1)[0],
					A = Object(l.useState)(null),
					T = Object(u.a)(A, 1)[0],
					f = Object(l.useState)(!!n),
					O = Object(u.a)(f, 1)[0],
					N = Object(l.useState)(n ? n.toUpperCase() : "USD"),
					b = Object(u.a)(N, 2),
					g = b[0],
					h = b[1],
					C = Object(l.useState)("annual"),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = Object(l.useState)(0),
					y = Object(u.a)(v, 1)[0],
					P = Object(l.useState)(""),
					U = Object(u.a)(P, 1)[0],
					D = Object(l.useState)(mt),
					w = Object(u.a)(D, 1)[0],
					x = Object(l.useState)(!1),
					j = Object(u.a)(x, 2),
					k = j[0],
					M = j[1],
					G = Object(l.useState)(null),
					F = Object(u.a)(G, 2),
					B = F[0],
					V = F[1],
					H = Object(l.useState)(null),
					W = Object(u.a)(H, 2),
					K = W[0],
					q = W[1],
					Q = Object(l.useState)(null),
					z = Object(u.a)(Q, 2),
					J = z[0],
					Z = z[1],
					$ = Object(l.useState)(!1),
					te = Object(u.a)($, 2),
					ae = te[0],
					ne = te[1],
					ce = Object(l.useState)(!1),
					oe = Object(u.a)(ce, 2),
					se = oe[0],
					ie = oe[1],
					ue = Object(l.useState)(!1),
					de = Object(u.a)(ue, 2),
					Se = de[0],
					Ae = de[1],
					Te = Object(l.useCallback)((function() {
						if (O) return h(g), void M(!0);
						fetch("https://api.country.is/").then((function(e) {
							200 === e.status && e.json().then((function(e) {
								if (e.country) {
									var t = xc(e.country);
									h(t)
								} else h("USD");
								M(!0)
							}))
						})).catch((function(e) {
							h("USD"), M(!0)
						}))
					}), []),
					fe = function(e, t) {
						ne(!1), t.order.capture().then((function(e) {
							Uc.processPaypalPayment(e.id, T[L].planId, Number(T[L].days), g, J, U).then((function() {
								le.b.info("You're Premium now."), window.location.reload(), Ma(Dc.CATEGORIES.PRICING, Dc.ACTIONS.BOUGHT, "Bought ".concat(T.name, " ").concat(L), J);
								var e = new Date;
								e.setDate((new Date).getDate() + Number(T[L].days)), Ga(Dc.ATTR.PLANNAME, T.name), Ga(Dc.ATTR.PLAN_DURATION, L), Ga(Dc.ATTR.PLAN_START_DATE, (new Date).toISOString().split("T")[0]), Ga(Dc.ATTR.PLAN_END_DATE, e.toISOString().split("T")[0]), U && (Ga(Dc.ATTR.COUPON, U), Ga(Dc.ATTR.COUPON_VALUE, y)), ie(!0)
							}))
						}))
					},
					Oe = function() {
						ne(!0)
					},
					be = function() {
						return "monthly" === L ? 0 : 1
					},
					Re = function() {
						return c.a.createElement(c.a.Fragment, null, ae ? c.a.createElement(re.a, {
							className: "d-flex align-items-center",
							fluid: !0,
							style: {
								textAlign: "center",
								justifyContent: "center",
								justifyItems: "center"
							}
						}, c.a.createElement(pe.a, null, c.a.createElement(ul.a, {
							className: "alert-default"
						}, c.a.createElement("strong", null, "Oh snap!"), " Your recent transaction was unsuccessful."))) : null, c.a.createElement(Rc.PayPalButton, {
							amount: J,
							currency: g,
							options: {
								clientId: "AaORQLcfr4mtfVD4txtvqn723JIUJ1vCzlQ358CTCiGaqBttyZquK7UmuUu5l4Gma12ikrP8FztIECQt",
								currency: g
							},
							onApprove: fe,
							onCancel: Oe
						}))
					};
				return Object(l.useLayoutEffect)((function() {
					if (o.details.isLoggedIn && (o.details.planDetails ? (q(ft(o.details.planDetails)), V(o.details.planDetails.planId.split("_")[0])) : V("bronze")), k || Te(), T && L && g && k) {
						var e = T[L].price[g];
						"gold" === T.id && "annual" === L ? e -= 0 * e : T.allowDiscounts && (e -= y / 100 * e), e = e.toFixed(2), Z(e)
					}
				}), [T, L, g, y, k, Te, o]), c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement("h2", {
					className: "font-weight-bolder display-4 mt-4"
				}, "Plans for Everyone", " ", c.a.createElement("span", {
					className: "d-block d-sm-inline",
					style: {
						fontSize: window.innerWidth < 576 && "0.8rem",
						fontWeight: 400
					}
				}, "because"), " ", c.a.createElement("span", {
					className: "d-block d-sm-inline font-weight-bolder"
				}, "Productivity Matters")), c.a.createElement("div", null, c.a.createElement("h3", {
					style: {
						fontSize: window.innerWidth < 576 ? "0.8rem" : "",
						fontWeight: 400
					}
				}, "Premium Users save around 2 hours every week.", c.a.createElement("span", {
					"aria-label": "time-saving",
					role: "img"
				}, "\u23f3"), c.a.createElement("br", {
					className: "d-sm-none d-xs-inline"
				}), "\xa0 At $50/hr, this is $400 savings every month.", c.a.createElement("span", {
					role: "img",
					"aria-label": "money-saving"
				}, "\ud83d\udcb0"))))), c.a.createElement("br", null), c.a.createElement(pe.a, {
					className: "d-none flex-wrap px-4 py-2 text-center"
				}, c.a.createElement(me.a, null, c.a.createElement(ul.a, {
					color: "secondary",
					style: {
						background: "unset",
						border: "none"
					}
				}, c.a.createElement(qa.a, {
					className: "badge-default"
				}, "Ending Soon"), "  ", c.a.createElement("span", {
					role: "img",
					"aria-label": "Celebrate"
				}, "\ud83c\udf89"), " ", c.a.createElement("strong", null, "We're celebrating the release of our new UI!"), " Use code", " ", c.a.createElement("strong", {
					id: "coupon-promote"
				}, c.a.createElement(Or.CopyToClipboard, {
					text: "RQNEWUI",
					onCopy: function() {
						return E("RQNEWUI")
					}
				}, c.a.createElement("span", {
					className: "cursor-pointer"
				}, "RQNEWUI")), c.a.createElement(Ur.a, {
					delay: 0,
					trigger: "hover focus",
					target: "coupon-promote"
				}, "RQNEWUI" === m ? "Copied" : "Copy To Clipboard")), " ", "and avail 20% off on Premium plans."))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "text-center"
				}, c.a.createElement(pe.a, {
					className: "d-flex flex-wrap py-2"
				}, c.a.createElement(me.a, {
					className: "",
					sm: "12"
				}, c.a.createElement(gc.a, {
					texts: ["Monthly", "Yearly"],
					selectedSwitch: be(),
					bgColor: "#FAFAFA",
					fontColor: "black",
					selectedFontColor: "white",
					selectedSwitchColor: "#0a48b3",
					eachSwitchWidth: window.innerWidth > 632 ? 200 : 100,
					height: "40px",
					fontSize: "1rem",
					borderWidth: "1px",
					borderColor: "#F5F5F5",
					fontWeight: "normal",
					onToggleCallback: function(e) {
						0 === e ? _("monthly") : 1 === e && _("annual"), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.PRICING, S.CONSTANTS.GA_EVENTS.ACTIONS.DURATION_CHANGE, "Duration changed to ".concat(e))
					}
				})), c.a.createElement(me.a, {
					className: "",
					sm: "12"
				}, c.a.createElement(gc.a, {
					texts: ["", "2 months FREE!"],
					selectedSwitch: be(),
					bgColor: "white",
					fontColor: "#0a48b3",
					selectedFontColor: "#0a48b3",
					selectedSwitchColor: "white",
					eachSwitchWidth: window.innerWidth > 632 ? 200 : 100,
					height: "8px",
					fontSize: "0.8rem",
					borderWidth: "0px",
					fontWeight: "bold"
				}))), c.a.createElement(Pc, {
					user: o
				}))), c.a.createElement(_c, {
					currency: g,
					duration: L,
					couponDiscountValue: y,
					annualDiscountValue: 0,
					features: w,
					currentPlan: B,
					isPlanExpired: K,
					onChoosePlan: function(e) {
						"bronze" !== e && (o.details.isLoggedIn ? At(e) ? (Ma(Dc.CATEGORIES.PRICING, Dc.ACTIONS.VIEWED, "Redirected@Teams.from.pricing.page"), De(null, !0)) : (Ma(Dc.CATEGORIES.PRICING, Dc.ACTIONS.VIEWED, "Redirected@Checkout.from.Pricing.Page"), xe({
							mode: "individual",
							planType: "gold",
							days: tn(L)
						})) : (Ma(Dc.CATEGORIES.PRICING, Dc.ACTIONS.LOGIN_REQUESTED, "sign in"), function(e, t) {
							var a = t || {},
								n = a.redirectURL,
								r = a.source,
								l = new URL(window.location.origin + Ne.AUTH.SIGN_IN.ABSOLUTE);
							n && l.searchParams.set("redirectUrl", n), r && l.searchParams.set("src", r), e ? e.push(l.href) : window.location = l.href
						}(!1, {
							redirectURL: window.location.pathname,
							source: "pricing",
							hardRedirect: !0
						})))
					}
				}), c.a.createElement("div", {
					className: "container section content mb-3"
				}, B === Y.PRICING.PLAN_NAMES.SILVER ? c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, "You are on Silver Plan which expires on", " ", Tt(o.details.planDetails), ". Silver Plan is deprecated and can no longer be renewed. Please contact us at", " ", c.a.createElement("a", {
					href: "mailto:contact@requestly.io"
				}, "contact@requestly.io"), " for further questions."), c.a.createElement("br", null), c.a.createElement("br", null)) : null), c.a.createElement("div", {
					id: "PayPalModal",
					className: "paypal-modal"
				}, c.a.createElement("div", {
					className: "paypal-modal-content pricing"
				}, c.a.createElement("span", {
					className: "paypal-modal-close-btn"
				}, "\xd7"), se ? (setTimeout((function() {
					ge(a, !0)
				}), 7e3), c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement(R.g, {
					size: "4em",
					className: "primary-color"
				}), c.a.createElement("h1", null, "You're Premium now."), c.a.createElement("h3", null, "Your purchase is complete. A receipt of your order will be sent to you by email."), c.a.createElement("br", null), c.a.createElement("h4", null, "Redirecting to homepage in 5 seconds..."))) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h3", null, "Checkout"), c.a.createElement(hc, {
					currency: g,
					duration: L,
					price: J,
					showOnlyExactAmount: !0
				}), c.a.createElement("hr", null), T && L && g && k ? Re() : null))), Se ? c.a.createElement(vc, {
					isOpen: Se,
					toggleModal: function() {
						Ae(!Se)
					},
					selectedCurrency: g,
					selectedDuration: L,
					price: J,
					showOnlyExactAmount: !0,
					couponCodeText: p
				}) : null)
			};
		a(137);
		var kc = {
				AU: 3,
				BR: 5,
				CA: 4,
				CN: 3,
				DE: 1,
				GB: 5,
				IN: 6,
				JP: 6,
				RU: 6,
				TR: 2,
				US: 6
			},
			Mc = function() {
				var e = Object(ea.a)($t.a.mark((function e() {
					var t, a;
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, fetch("https://api.country.is/");
							case 2:
								if (200 !== (t = e.sent).status) {
									e.next = 10;
									break
								}
								return e.next = 6, t.json();
							case 6:
								return a = e.sent, e.abrupt("return", a.country);
							case 10:
								return e.abrupt("return", null);
							case 11:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Gc = function() {
				var e = Object(ea.a)($t.a.mark((function e() {
					var t;
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (null !== (t = localStorage.getItem("country"))) {
									e.next = 6;
									break
								}
								return e.next = 4, Mc();
							case 4:
								t = e.sent, localStorage.setItem("country", t);
							case 6:
								return e.abrupt("return", t);
							case 7:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Fc = function() {
				var e = Object(l.useState)(""),
					t = Object(u.a)(e, 2),
					n = t[0],
					r = t[1],
					o = Object(l.useState)(0),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useState)(!0),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useCallback)((function(e) {
						"" === e ? S(!1) : void 0 !== kc[e] ? (m(kc[e]), S(!1)) : "" !== e && void 0 === kc[e] && S(!1)
					}), []),
					T = Object(l.useCallback)(Object(ea.a)($t.a.mark((function e() {
						var t;
						return $t.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, Gc();
								case 2:
									t = e.sent, r(t), A(t);
								case 5:
								case "end":
									return e.stop()
							}
						}), e)
					}))), [A]);
				Object(l.useLayoutEffect)((function() {
					T()
				}), [T]);
				return c.a.createElement(pe.a, {
					className: "justify-content-center"
				}, p ? c.a.createElement(fe, null) : [Object(Rt.a)(Array(i)).map((function(e, t) {
					return c.a.createElement(me.a, {
						key: t,
						className: "customerLogo"
					}, c.a.createElement("img", {
						height: 100,
						width: 100,
						alt: "",
						style: {
							cursor: "default"
						},
						src: a(304)("./".concat(n, "/customerLogo-").concat(t, ".svg"))
					}))
				})), Object(Rt.a)(Array(10 - i)).map((function(e, t) {
					return c.a.createElement(me.a, {
						key: t,
						className: "customerLogo"
					}, c.a.createElement("img", {
						height: 100,
						width: 100,
						alt: "",
						style: {
							cursor: "default"
						},
						src: a(352)("./customerLogo-".concat(t, ".svg"))
					}))
				}))])
			},
			Bc = a(523),
			Vc = function() {
				var e = Object(l.useState)(0),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = [{
						ques: c.a.createElement(c.a.Fragment, null, "Do you offer any trial period?"),
						answer: c.a.createElement(c.a.Fragment, null, "No, but we offer ", c.a.createElement("strong", null, "14-days Guarantee Period"), ". If you are not happy with your premium subscription, you may cancel your subscription from Account Settings or by reaching out our support.")
					}, {
						ques: c.a.createElement(c.a.Fragment, null, "Is there any discount for an annual subscription?"),
						answer: c.a.createElement(c.a.Fragment, null, "Yes, we offer discounts if you choose annual subscription for any plan. Please check annual pricing for details.")
					}, {
						ques: c.a.createElement(c.a.Fragment, null, "Can I be a member of multiple Teams?"),
						answer: c.a.createElement(c.a.Fragment, null, "You can create or join multiple Teams. Team with the longest subscription would be selected automatically.")
					}, {
						ques: c.a.createElement(c.a.Fragment, null, "Can I upgrade from personal subscription to a Team subscription?"),
						answer: c.a.createElement(c.a.Fragment, null, "Yes. Cancel your personal subscription after activating a Team subscription and we'll refund the adjusted amount of personal subscription.")
					}, {
						ques: c.a.createElement(c.a.Fragment, null, "Which payment methods do you accept?"),
						answer: c.a.createElement(c.a.Fragment, null, "We are using ", c.a.createElement("strong", null, "Stripe"), " as our payment processor. Stripe supports majority of credit and debit card networks including", " ", c.a.createElement("strong", null, "Visa & Mastercard"), ". American Express and Discover card users need to contact us at", " ", c.a.createElement("a", {
							className: "has-no-text-decoration",
							href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL),
							target: "_blank",
							rel: "noopener noreferrer"
						}, c.a.createElement("strong", null, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)), ".")
					}, {
						ques: c.a.createElement(c.a.Fragment, null, "I have another query..."),
						answer: c.a.createElement(c.a.Fragment, null, "We are happy to help you. You can live chat with us during our office hours or write to us at", " ", c.a.createElement("a", {
							className: "has-no-text-decoration",
							href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL),
							target: "_blank",
							rel: "noopener noreferrer"
						}, c.a.createElement("strong", null, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)), ".")
					}];
				return c.a.createElement("div", {
					className: "container section  mb-2"
				}, c.a.createElement("hr", null), c.a.createElement("br", null), c.a.createElement("h2", {
					className: "text-center"
				}, "Frequently Asked Questions"), c.a.createElement("br", null), c.a.createElement(re.a, null, c.a.createElement(pe.a, null, r.map((function(e, t) {
					return c.a.createElement(me.a, {
						sm: "12",
						md: "12",
						lg: "6"
					}, c.a.createElement(Se.a, {
						key: t,
						className: "text-left"
					}, c.a.createElement(Ft.a, {
						onClick: function() {
							return n(t + 1)
						},
						className: "has-no-border"
					}, c.a.createElement("span", {
						className: "font-weight-bold cursor-pointer"
					}, c.a.createElement(R.e, null), " ", e.ques)), c.a.createElement(Bc.a, {
						isOpen: a === t + 1
					}, c.a.createElement(Ae.a, null, e.answer))))
				})))))
			},
			Hc = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col text-center"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(jc, null), c.a.createElement("br", null), c.a.createElement("div", {
					className: "text-center w-75 align-self-center"
				}, c.a.createElement("p", null, "Subscriptions handled by \xa0", c.a.createElement("span", {
					className: "cursor-pointer",
					onClick: function() {
						return window.open("https://stripe.com", "_blank")
					}
				}, c.a.createElement(R.T, {
					size: "2.5em",
					color: "#0a48b3"
				}))), c.a.createElement("h2", null, "Powering web developers to debug & modify network requests at 500+ organizations"), c.a.createElement(Fc, null)), c.a.createElement(Vc, null))))))
			},
			Yc = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(Hc, null))
					}
				}]), a
			}(c.a.Component),
			Wc = a(524);
		var Kc = function(e) {
			var t = e.code,
				a = e.count,
				n = e.limit,
				r = function() {
					return "".concat(window.location.origin).concat(Y.PATHS.AUTH.SIGN_UP.RELATIVE, "?rcode=").concat(t, " ")
				},
				l = function() {
					return c.a.createElement(me.a, null, c.a.createElement("h3", {
						className: "display-5"
					}, "When a new user joins with a different work email domain from yours, you both receive 1 month of Requestly Premium."), c.a.createElement("h3", {
						className: "display-5"
					}, "When a new user joins with same work email domain as yours, you both receive 2 months of Requestly Premium.", " ", c.a.createElement("a", {
						className: "text-primary ml-2",
						href: "https://requestly.io/blog/2021/02/06/introducing-referral-feature/"
					}, "Learn More ", c.a.createElement("i", {
						className: "fas fa-external-link-alt pl-1"
					}))))
				},
				o = function() {
					return c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(de.a, {
						onClick: function() {
							return e = r(), t = (t = "Copied Referral link to clipboard!") || "Copied to clipboard!", void navigator.clipboard.writeText(e).then((function() {
								le.b.info(t)
							}), (function(e) {
								console.error("Async: Could not copy text: ", e)
							}));
							var e, t
						},
						id: "link",
						color: "secondary",
						size: "lg",
						block: !0
					}, r(), c.a.createElement("i", {
						className: "far fa-clipboard fa-2x"
					}))), c.a.createElement(me.a, {
						className: "pr-6 pl-9"
					}, c.a.createElement("div", {
						className: "text-center"
					}, "Referred ".concat(a, " out of ").concat(n)), c.a.createElement(Wc.a, {
						value: a,
						max: n
					})))
				};
			return c.a.createElement(Se.a, {
				className: "m-2"
			}, c.a.createElement(Ft.a, null, c.a.createElement(l, null)), c.a.createElement(Ae.a, null, c.a.createElement(o, null)))
		};
		var qc = function(e) {
			var t = e.referredAccounts;
			return c.a.createElement(Se.a, {
				className: "m-2"
			}, c.a.createElement(Ft.a, null, c.a.createElement(pe.a, {
				className: "pl-5"
			}, c.a.createElement("h2", null, "Users you have referred"))), c.a.createElement(Ae.a, null, c.a.createElement(Ka.a, null, c.a.createElement("thead", null, c.a.createElement("tr", null, c.a.createElement("th", null, "#"), c.a.createElement("th", null, "Email"), c.a.createElement("th", null, "Date Joined"), c.a.createElement("th", null, "Rewards"))), c.a.createElement("tbody", null, t.map((function(e, t) {
				return c.a.createElement("tr", {
					key: t
				}, c.a.createElement("th", {
					scope: "row"
				}, t + 1), c.a.createElement("td", null, e.email), c.a.createElement("td", null, e.dateJoined), c.a.createElement("td", null, e.reward))
			}))))))
		};

		function Qc(e) {
			return e.split("").reverse().join("")
		}

		function zc(e) {
			for (var t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = a.length, r = 0; r < e; r++) t += a.charAt(Math.floor(Math.random() * n));
			return t
		}

		function Jc(e) {
			return zc(2) + Qc(e) + zc(2)
		}

		function Xc(e) {
			return Da.getValue(["customProfile", e, "referral"]).then((function(t) {
				return t || (console.log("making referral node"), function(e, t) {
					var a = {
						referral: {
							code: Jc(e),
							referredAccountsCount: 0,
							referredAccounts: []
						}
					};
					return Da.setValue(["customProfile", e], a)
				}(e).then((function() {
					return Da.getValue(["customProfile", e, "referral"]).then((function(e) {
						return e
					}))
				})))
			})).catch((function(e) {
				return console.log(e)
			}))
		}
		var Zc = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)(),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1];
				return Object(l.useEffect)((function() {
					t.details.profile && !r && Xc(t.details.profile.uid).then((function(e) {
						o(e)
					})).catch((function(e) {
						return console.log(e)
					})), m || Da.getValue(["referral", "limit"]).then((function(e) {
						return E(e)
					})).catch((function(e) {
						return console.log(e)
					}))
				}), [r, t, m]), r && m ? c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", {
					className: "mb-0"
				}, "Spread the Love", " ", c.a.createElement("span", {
					role: "img",
					"aria-label": "confetti"
				}, "\ud83c\udf89")), c.a.createElement("h4", {
					className: "text-muted mb-0"
				}, "Invite your colleagues to Requestly and get Requestly Premium Free")))), c.a.createElement(Ae.a, null, c.a.createElement(Kc, {
					code: r.code,
					count: r.referredAccountsCount,
					limit: m
				}), r.referredAccounts ? c.a.createElement(qc, {
					referredAccounts: r.referredAccounts
				}) : null)))))) : c.a.createElement(Er, {
					customLoadingMessage: "Getting Referral Information"
				})
			},
			$c = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: Zc
						}))
					}
				}]), a
			}(c.a.Component),
			eo = Y.RULES_LIST_TABLE_CONSTANTS,
			to = eo.GROUP_DETAILS,
			ao = function(e, t, a) {
				return e.groupId !== eo.UNGROUPED_GROUP_ID && (a[e.groupId] || (t.push(e.groupId), a[e.groupId] = !0)), no(e)
			},
			no = function(e) {
				var t = e;
				return delete t.isFavourite, t
			},
			ro = function(e, t, a) {
				return new Promise((function(n) {
					var r = [],
						l = {};
					Kl(e).getAllRecords().then((function(e) {
						var c = t.map((function(t) {
								return ao(e[t], r, l)
							})),
							o = [];
						r.forEach((function(e) {
							o.push(a[e][eo.GROUP_DETAILS])
						})), n({
							rules: c,
							groups: o
						})
					}))
				}))
			},
			lo = function(e, t) {
				var a = e.modificationDate ? e.modificationDate : e.creationDate,
					n = t.modificationDate ? t.modificationDate : t.creationDate;
				return a < n ? 1 : a > n ? -1 : 0
			},
			co = function(e, t) {
				var a = e[1][to].modificationDate ? e[1][to].modificationDate : e[1][to].creationDate,
					n = t[1][to].modificationDate ? t[1][to].modificationDate : t[1][to].creationDate;
				return a < n ? 1 : a > n ? -1 : 0
			},
			oo = function(e) {
				return "MKTRuleID" in e
			},
			so = S.CONSTANTS.GA_EVENTS,
			io = function(e) {
				return Kl(e).getRecord(Y.LAST_BACKUP_TIMESTAMP)
			},
			uo = function(e, t) {
				var a = new Date(e),
					n = new Date(t);
				return a.getTime() - n.getTime()
			},
			mo = function(e) {
				return io(e).then((function(t) {
					var a, n = Date.now();
					t && (a = uo(n, t));
					var r = Math.floor(a / 1e3 / 60 / 60);
					return !t || r > 6 ? function(e) {
						return new Promise((function(t) {
							Kl(e).getAllRecords().then((function(e) {
								var a = [],
									n = {},
									r = [],
									l = {};
								for (var c in e) switch (e[c].objectType) {
									case S.CONSTANTS.OBJECT_TYPES.RULE:
										r.push(e[c]);
										break;
									case S.CONSTANTS.OBJECT_TYPES.GROUP:
										l[c] = e[c]
								}
								var o = r.map((function(e) {
										return ao(e, a, n)
									})),
									s = [];
								a.forEach((function(e) {
									s.push(l[e])
								})), t({
									rules: o,
									groups: s
								})
							}))
						}))
					}(e).then((function(t) {
						return Te.functions().httpsCallable("updateRulesBackup")({
							records: t,
							timestamp: n
						}).then((function() {
							return Ma(so.CATEGORIES.RULES, so.ACTIONS.BACKUP_CREATED, "rules and groups backup created"),
								function(e, t) {
									var a = t || Date.now();
									return Kl(e).saveRecord({
										[Y.LAST_BACKUP_TIMESTAMP]: a
									}).then((function() {
										return {
											success: !0,
											time: a
										}
									}))
								}(e)
						}))
					})) : {
						success: !1,
						time: a
					}
				}))
			},
			Eo = function(e) {
				return new Promise(function() {
					var t = Object(ea.a)($t.a.mark((function t(a) {
						var n, r, l;
						return $t.a.wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return n = Te.firestore().collection("backup").doc(e), t.next = 3, n.get();
								case 3:
									r = t.sent, l = r.data(), a(l ? {
										data: l
									} : {
										data: null
									});
								case 6:
								case "end":
									return t.stop()
							}
						}), t)
					})));
					return function(e) {
						return t.apply(this, arguments)
					}
				}())
			},
			po = function(e) {
				var t = new Date(e),
					a = t.getDate(),
					n = a + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
				return isNaN(a) ? null : n
			},
			So = S.CONSTANTS.GA_EVENTS,
			Ao = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					a = e.dispatch,
					n = function(e) {
						return We(e).lastBackupTimeStamp
					}(t),
					r = tt(t).details.profile.uid,
					o = st(t),
					s = Object(l.useState)(""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(null),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(!1),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = function() {
						var e = Object(ea.a)($t.a.mark((function e() {
							var t;
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, Eo(r);
									case 2:
										t = e.sent, A(t.data), N(!0);
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					g = Object(l.useCallback)(b, [r]);
				Object(l.useEffect)((function() {
					n && !m && E(n), S || g()
				}), [S, n, m, A, E, g]);
				var R = function() {
						mo(o).then((function(e) {
							if (e.success) e.time && (le.b.info("New Backup Created!"), E(e.time), a(Ct(Date.now())));
							else {
								var t = !0,
									n = 360 - Math.floor(e.time / 1e3 / 60);
								n < 60 && (t = !1), le.b.error("Please wait atleast ".concat(t ? "".concat(Math.floor(n / 60), " hours") : "".concat(n, " minutes"), " before next backup"))
							}
						}))
					},
					h = function(e) {
						if (S) {
							var t = S.backups[e];
							(function(e, t) {
								var a = t.data,
									n = [].concat(Object(Rt.a)(a.groups), Object(Rt.a)(a.rules));
								return Kl(e).saveMultipleRulesOrGroups(n)
							})(o, t).then((function() {
								le.b.info("Rules and Groups updated"), Ma(So.CATEGORIES.RULES, So.ACTIONS.BACKUP_USED, "backup number - ".concat(e + 1, " used"))
							}))
						} else console.log("Error: Caught trying to copy empty backup to storagge, please Report!")
					};
				return O ? c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, S ? c.a.createElement(c.a.Fragment, null, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(Se.a, {
					className: "m-2"
				}, c.a.createElement(Ft.a, null, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h2", null, "Backup Rules to Requestly servers", " ", c.a.createElement(qa.a, {
					color: "primary",
					pill: !0
				}, "BETA"))))), c.a.createElement(Ae.a, null, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("p", null, "This will help you use your rules across browsers and devices"), c.a.createElement("p", null, c.a.createElement("em", null, c.a.createElement("a", {
					href: Y.LINKS.REQUESTLY_DOCS_BACKUP_DATA
				}, "Learn how it works")))), c.a.createElement(me.a, null, m && S && po(m) ? c.a.createElement(c.a.Fragment, null, c.a.createElement("h4", null, "Your last backup was on", " ", c.a.createElement("em", null, "".concat(po(m), " "), " ")), c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return R()
					}
				}, "Backup Your Data")) : null))))), c.a.createElement(Ae.a, null, c.a.createElement(Se.a, {
					className: "m-2"
				}, c.a.createElement(Ft.a, null, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, null, c.a.createElement("h2", null, "Your recent backups")))), c.a.createElement(Ae.a, null, c.a.createElement(Ka.a, null, c.a.createElement("thead", null, c.a.createElement("tr", null, c.a.createElement("th", null, "#"), c.a.createElement("th", null, "Date"), c.a.createElement("th", null, "Click To Use"))), c.a.createElement("tbody", null, S.backups.map((function(e, t) {
					return c.a.createElement("tr", {
						key: t
					}, c.a.createElement("th", {
						scope: "row"
					}, t + 1), c.a.createElement("td", null, po(e.timestamp)), c.a.createElement("td", null, c.a.createElement(de.a, {
						outline: !0,
						className: "my-0",
						color: "primary",
						size: "sm",
						onClick: function() {
							return h(t)
						}
					}, " ", "Use Backup", " ")))
				})))))))) : c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "Create Your First Backup"), c.a.createElement("p", {
					className: "lead"
				}, "This will help you use your rules across browsers and devices"), c.a.createElement("p", null, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return R()
					}
				}, "Backup Your Data"))))))))))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Er, {
					customLoadingMessage: "Getting previous backups"
				}))
			},
			To = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							premiumRequired: !0,
							component: Ao,
							premiumMessage: "Auto backups your data at periodic intervals. You can restore the data in case of data loss"
						}))
					}
				}]), a
			}(c.a.Component),
			fo = function() {
				var e = Object(l.useRef)(!0),
					t = Object(l.useState)(!1),
					a = Object(u.a)(t, 2),
					n = a[0],
					r = a[1];
				return Object(l.useEffect)((function() {
					return function() {
						e.current = !1
					}
				}), []), c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h4", null, "If you are facing any issue with your current susbscription, a refresh might be helpful."), n ? c.a.createElement(c.a.Fragment, null, c.a.createElement("br", null), c.a.createElement("h5", null, c.a.createElement(R.r, {
					color: "orange"
				}), " This process may take a few seconds. Do not close this page.")) : null, c.a.createElement("br", null), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					disabled: n,
					onClick: function() {
						r(!0), Te.functions().httpsCallable("refreshSubscription")().then((function(t) {
							if (!e.current) return null;
							var a = t.data;
							a.success ? (r(!1), Pe(!1, !0)) : (r(!1), le.b.warn(a.message))
						})).catch((function(t) {
							if (!e.current) return null;
							r(!1), le.b.warn(t.message)
						}))
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement("b", null, c.a.createElement(Be.b, {
					className: n ? "icon-spin" : ""
				}))), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Refresh Subscription")), c.a.createElement("br", null), c.a.createElement("hr", null), c.a.createElement("p", null, "Still facing issues? Reach our payment support team at", " ", c.a.createElement("a", {
					href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)
				}, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL), ".")))))))))
			},
			Oo = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: fo
				}))
			},
			No = function(e) {
				var t = e.customErrorMessage || "Something went wrong";
				return c.a.createElement(c.a.Fragment, null, e.renderHeader ? c.a.createElement(ue, null) : null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}), c.a.createElement("h5", null, t))))))))))
			},
			bo = S.CONSTANTS.GA_EVENTS,
			go = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = st(e),
					n = Object(l.useState)(!0),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					i = Object(l.useState)({}),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(""),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(""),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					R = Object(l.useState)(60),
					h = Object(u.a)(R, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useCallback)((function() {
						if (t.loggedIn) {
							d(t.details.profile), s(!1);
							var e = Ot(t),
								a = ft(t.details.planDetails);
							f(a ? Y.PRICING.PLAN_NAMES.BRONZE : e)
						} else s(!1)
					}), [t.loggedIn]),
					_ = function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: "card-body"
						}, c.a.createElement("div", {
							className: "card-text",
							style: {
								padding: "1rem 10%"
							}
						}, c.a.createElement("p", {
							className: "m-0"
						}, "Define Server EndPoint from where app will periodically import the rules"), c.a.createElement("div", {
							className: "input-group mb-3"
						}, c.a.createElement("div", {
							className: "input-group-prepend"
						}, c.a.createElement("span", {
							className: "input-group-text",
							id: "server-endpoint-input"
						}, "Server EndPoint")), c.a.createElement("input", {
							type: "text",
							className: "form-control",
							placeholder: "https://myserver.com/rules/v1",
							value: b,
							onChange: function(e) {
								return g(e.target.value)
							}
						})), c.a.createElement("p", {
							className: "m-0"
						}, "Frequency (in minutes) for importing rules from Server. Minimum 2 & maximum 100 minutes."), c.a.createElement("div", {
							className: "input-group mb-3"
						}, c.a.createElement("div", {
							className: "input-group-prepend"
						}, c.a.createElement("span", {
							className: "input-group-text",
							id: "frequency-input"
						}, "Frequency")), c.a.createElement("input", {
							type: "number",
							min: "2",
							max: "60",
							className: "form-control",
							placeholder: "20",
							value: C,
							onChange: function(e) {
								return I(e.target.value)
							}
						}))), c.a.createElement("div", {
							className: "text-center"
						}, c.a.createElement("button", {
							type: "button",
							className: "btn btn-primary",
							style: {
								marginRight: "1rem",
								padding: "0.75rem"
							},
							onClick: v
						}, "Save & Import Periodically"))))
					},
					v = function() {
						if (!b || ae()(b) ? (le.b.warn("Please enter a valid end point"), 0) : !(!C || C < 2 || C > 100) || (le.b.warn("Frequency must lie between 2 and 100. Please provide a valid value"), 0)) {
							var e = {
								enabled: !0,
								endPoint: b,
								frequency: C
							};
							Hl(e).then((function(t) {
								t.success ? Ua(["settings", E.uid, "remoteRules"], e).then((function() {
									le.b.success("Settings saved successfully!"), Ma(bo.CATEGORIES.REMOTE_RULES, bo.ACTIONS.CREATED, "Remote Rules Settings Created"), Ga(bo.ATTR.REMOTE_RULES_ENDPOINT, e.endPoint), Ga(bo.ATTR.REMOTE_RULES_FREQUENCY, e.frequency)
								})) : alert("Unable to save settings in storage. Please reach out to support at contact@requestly.io")
							})).catch((function(e) {
								return le.b.error(e)
							}))
						}
					};
				return Object(l.useEffect)((function() {
					a !== S.CONSTANTS.APP_MODES.DESKTOP && (L(), Vl().then((function(e) {
						e.endPoint && g(e.endPoint), e.frequency && I(e.frequency)
					})))
				}), [L, a]), a === S.CONSTANTS.APP_MODES.DESKTOP ? c.a.createElement(No, {
					customErrorMessage: "Remote rules are available only in Requestly Chrome Extension as of now."
				}) : o ? c.a.createElement(Er, {
					customLoadingMessage: "Loading Remote Rules"
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Remote Rules ", c.a.createElement(qa.a, {
					color: "info"
				}, "BETA"))))), c.a.createElement(Ae.a, null, T !== Y.PRICING.PLAN_NAMES.GOLD ? c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h5", null, "Remote Rules feature is only available in Premium Plan.")) : _()))))))
			},
			Ro = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: go
						}))
					}
				}]), a
			}(c.a.Component),
			ho = a(525),
			Co = a(526),
			Io = S.CONSTANTS.GA_EVENTS,
			Lo = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)({}),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(""),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(""),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = Object(l.useState)(!1),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = Object(l.useState)(!1),
					y = Object(u.a)(v, 2),
					P = y[0],
					U = y[1],
					D = Object(l.useState)(!1),
					w = Object(u.a)(D, 2),
					x = w[0],
					j = w[1],
					k = Object(l.useState)(!0),
					M = Object(u.a)(k, 2),
					G = M[0],
					F = M[1],
					B = Object(l.useState)(!1),
					V = Object(u.a)(B, 2),
					H = V[0],
					Y = V[1];
				Object(l.useEffect)((function() {
					setTimeout((function() {
						F(!1)
					}), 1200)
				}));
				return Object(l.useLayoutEffect)((function() {
					t.details.isLoggedIn && (o(t.details.profile), va(["customProfile", t.details.profile.uid, "requestUpgrade"], (function(e) {
						e && e.sentEmail && (h(!0), Y(!0))
					})))
				}), [t]), Object(l.useEffect)((function() {
					t.details.isLoggedIn && (A("Requestly Premium for ".concat(r.displayName)), N("Hi,\n".concat(r.displayName, " has been using Requestly to debug & modify network requests. It has helped him achieve 10x productivity & saved critical hours for the work. ").concat(r.displayName, " has started to hit free limits in the product with additional usage and has requested you to consider upgrading to Premium.\n\nYou can check out our prices at https://app.requestly.io/pricing \n\nCheers!\nRequestly Team")))
				}), [r, t.details.isLoggedIn]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", {
					className: "mb-0"
				}, "Request an Upgrade"), c.a.createElement("h4", {
					className: "text-muted mb-0"
				}, "Request your Manager/ IT Admin for Requestly Premium")))), c.a.createElement(Ae.a, null, G ? c.a.createElement("div", {
					className: "text-align-center"
				}, c.a.createElement(ho.a, {
					color: "primary",
					style: {
						width: "4rem",
						height: "4rem"
					}
				}), c.a.createElement("h5", null, "Initializing...")) : R ? c.a.createElement("h3", null, "We have requested your manager to get Requestly Premium for you.") : c.a.createElement(c.a.Fragment, null, c.a.createElement(mn.a, null, c.a.createElement(un.a, null, c.a.createElement(Yt.a, {
					type: "email",
					placeholder: "Manager's Email",
					style: {
						fontSize: "1.2rem",
						color: "#5a5a5a"
					},
					value: m,
					onChange: function(e) {
						L && _(!1), E(e.target.value)
					},
					className: L ? "is-invalid" : "is-valid"
				}), c.a.createElement(Co.a, null, "This Field Cannot be Empty")), c.a.createElement(un.a, null, c.a.createElement(Yt.a, {
					placeholder: "Subject",
					style: {
						fontSize: "1.2rem",
						color: "#5a5a5a"
					},
					value: S,
					onChange: function(e) {
						x && j(!1), A(e.target.value)
					},
					className: x ? "is-invalid" : "is-valid"
				}), c.a.createElement(Co.a, null, "This Field Cannot be Empty")), c.a.createElement(un.a, null, c.a.createElement(Yt.a, {
					type: "textarea",
					rows: "10",
					placeholder: "Body",
					style: {
						fontSize: "1.2rem",
						color: "#5a5a5a"
					},
					value: O,
					onChange: function(e) {
						P && U(!1), N(e.target.value)
					},
					className: P ? "is-invalid" : "is-valid"
				}), c.a.createElement(Co.a, null, "This Field Cannot be Empty")), c.a.createElement("div", {
					className: "text-center"
				}, H ? c.a.createElement(de.a, {
					disabled: !0,
					color: "primary",
					size: "lg"
				}, c.a.createElement(ho.a, {
					color: "secondary",
					style: {
						width: "1rem",
						height: "1rem"
					}
				})) : c.a.createElement(de.a, {
					color: "primary",
					size: "lg",
					onClick: function() {
						if (Y(!0), !m) return _(!0), void Y(!1);
						if (!O) return U(!0), void Y(!1);
						if (!S) return j(!0), void Y(!1);
						if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(m)) return le.b.warn("Please enter a valid email address."), void Y(!1);
						Ma(Io.CATEGORIES.REQUEST_UPGRADE, Io.ACTIONS.CLICKED, "RequestUpgrade email sent"), R || Pa(["customProfile", r.uid, "requestUpgrade"], {
							managerEmail: m,
							requestDate: (new Date).toISOString().split("T")[0],
							sentEmail: !1
						}, (function() {
							Te.functions().httpsCallable("requestUpgrade")({
								userId: r.uid,
								emailContent: {
									managerEmail: m,
									subject: S,
									body: O
								}
							}).then((function() {
								return h(!0)
							})).catch((function(e) {
								return console.log(e)
							}))
						}))
					}
				}, c.a.createElement("i", {
					className: "fa fa-paper-plane"
				}), " Send Email"))))))))))
			},
			_o = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: Lo
						}))
					}
				}]), a
			}(c.a.Component),
			vo = function(e) {
				switch (e.ruleType) {
					case S.CONSTANTS.RULE_TYPES.QUERYPARAM:
						e.pairs.map((function(e) {
							return e.id = e.id || ca(), e.modifications.map((function(e) {
								return e.id = e.id || ca()
							})), e
						}));
						break;
					case S.CONSTANTS.RULE_TYPES.SCRIPT:
						e.pairs.map((function(e) {
							return e.id = e.id || ca(), e.scripts.map((function(e) {
								return e.id = e.id || ca()
							})), e
						}));
						break;
					default:
						e.pairs.map((function(e) {
							return e.id = e.id || ca(), e
						}))
				}
				return e
			},
			yo = function() {
				var e = Object(ea.a)($t.a.mark((function e(t) {
					var a, n;
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.next = 2, Kl(t).getRecords(S.CONSTANTS.OBJECT_TYPES.RULE);
							case 2:
								a = e.sent, n = a.map((function(e) {
									return vo(e)
								})), Kl(t).saveMultipleRulesOrGroups(n);
							case 5:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			Po = function() {
				var e = Object(l.useContext)(X).state,
					t = st(e),
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1];
				return Object(l.useEffect)((function() {
					(function(e) {
						return Kl(e).getRecord(Y.MIGRATED_TO_NEW_UI)
					})(t).then((function(e) {
						e ? console.log("ALREADY MIGRATED") : (o(!0), console.log("PERFORMING MIGRATION"), yo(t).then((function() {
							(function(e) {
								return Kl(e).saveRecord({
									[Y.MIGRATED_TO_NEW_UI]: !0
								})
							})(t).then((function() {
								o(!1)
							}))
						})))
					}))
				}), [t]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: r
				}, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(fe, {
					customLoadingMessage: "Setting up Requestly"
				})))
			},
			Uo = Y.PATHS,
			Do = Y.THEME_COLORS,
			wo = Y.RULE_TYPES_CONFIG,
			xo = function(e, t, a, n) {
				e ? (document.getElementById(t).style.background = "linear-gradient(to right, ".concat(a, ", ").concat(n, ")"), document.getElementById(t).style.color = Do.BTN_FONT_COLOR_HOVER, document.getElementById(t).getElementsByTagName("span")[0].style.color = Do.BTN_FONT_COLOR_HOVER) : (document.getElementById(t).style.background = Do.BTN_BGCOLOR_PRIMARY, document.getElementById(t).style.color = Do.BTN_FONT_COLOR_PRIMARY, document.getElementById(t).getElementsByTagName("span")[0].style.color = Do.BTN_FONT_COLOR_PRIMARY)
			},
			jo = function(e) {
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered max-width-70-percent",
					isOpen: e.isOpen,
					toggle: e.toggle
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Create New Rule"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body zero-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: " icon-examples"
				}, Object.entries(wo).map((function(e) {
					var t = Object(u.a)(e, 2),
						a = (t[0], t[1]);
					return Pl() <= Y.DELAY_COMPATIBILITY_VERSION && a.TYPE === S.CONSTANTS.RULE_TYPES.DELAY ? null : c.a.createElement(me.a, {
						lg: "4",
						md: "6",
						key: a.ID
					}, c.a.createElement(i.c, {
						to: "".concat(Uo.RULE_EDITOR.CREATE_RULE.ABSOLUTE, "/").concat(a.TYPE)
					}, c.a.createElement("button", {
						className: "btn-icon-clipboard",
						id: "new-rule-tooltip-".concat(a.ID),
						type: "button",
						onMouseEnter: function() {
							return xo(!0, "new-rule-tooltip-".concat(a.ID), a.PRIMARY_COLOR, a.SECONDARY_COLOR)
						},
						onMouseLeave: function() {
							return xo(!1, "new-rule-tooltip-".concat(a.ID), a.PRIMARY_COLOR)
						}
					}, c.a.createElement("div", null, c.a.createElement(a.ICON), c.a.createElement("span", null, a.NAME)))), c.a.createElement(Ur.a, {
						delay: 0,
						trigger: "hover focus",
						target: "new-rule-tooltip-".concat(a.ID),
						placement: a.TOOL_TIP_PLACEMENT
					}, a.DESCRIPTION))
				})))), c.a.createElement("div", {
					className: "modal-footer ",
					style: {
						backgroundColor: "white",
						position: "sticky",
						bottom: "0",
						zIndex: "100"
					}
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, "Close")))
			},
			ko = a(210),
			Mo = a(52),
			Go = a(103),
			Fo = Y.RULES_LIST_TABLE_CONSTANTS,
			Bo = function(e, t) {
				return Kl(e).saveMultipleRulesOrGroups(t)
			},
			Vo = function(e, t) {
				var a = t;
				e.forEach((function(e) {
					a > 0 ? (e.status = S.CONSTANTS.RULE_STATUS.ACTIVE, a--) : function(e) {
						e.status = S.CONSTANTS.RULE_STATUS.INACTIVE
					}(e)
				}))
			},
			Ho = function(e) {
				var t = [],
					a = [],
					n = {};
				return e.forEach((function(e) {
					return e.objectType === S.CONSTANTS.OBJECT_TYPES.RULE ? t.push(e) : e.objectType === S.CONSTANTS.OBJECT_TYPES.GROUP ? function(e) {
						a.push(e), n[e.id] = !0
					}(e) : null
				})), {
					rules: t,
					groups: a,
					groupsId: n
				}
			},
			Yo = function(e) {
				return (e.status === S.CONSTANTS.RULE_STATUS.ACTIVE || S.CONSTANTS.RULE_STATUS.INACTIVE) && (e.objectType === S.CONSTANTS.OBJECT_TYPES.RULE || S.CONSTANTS.OBJECT_TYPES.GROUP) && "string" === typeof e.name && "string" === typeof e.description
			},
			Wo = function(e) {
				return e.forEach((function(e) {
					return e.creationDate = la(), e
				}))
			},
			Ko = function(e, t, a) {
				var n = Ho(e),
					r = n.rules.filter((function(e) {
						return Yo(e)
					})),
					l = n.groups.filter((function(e) {
						return Yo(e)
					}));
				Wo(r), Wo(l),
					function(e) {
						e.forEach((function(e) {
							return e.id = "".concat(e.ruleType, "_").concat(ca()), e
						}))
					}(r),
					function(e) {
						e.forEach((function(e) {
							return e.objectType === S.CONSTANTS.OBJECT_TYPES.RULE ? vo(e) : e
						}))
					}(r);
				var c, o, s = Ot(t),
					i = bt(Y.FEATURES.ACTIVE_RULES, s),
					u = a.filter((function(e) {
						return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE && !oo(e)
					})).length;
				pt(t) || Vo(r, i - u);
				c = r, o = n.groupsId, c.forEach((function(e) {
					return e.groupId = o[e.groupId] ? e.groupId : Fo.UNGROUPED_GROUP_ID, e
				}));
				var m = r.concat(l);
				return new Promise((function(e) {
					e({
						data: m,
						rulesCount: r.length,
						groupsCount: l.length
					})
				}))
			},
			qo = function(e) {
				var t = e.toggle,
					a = e.isOpen,
					n = Object(l.useContext)(X),
					r = n.dispatch,
					o = n.state,
					s = qe(o),
					i = lt(o),
					m = tt(o),
					E = st(o),
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					A = p[0],
					T = p[1],
					f = Object(l.useState)(!1),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useState)(!1),
					R = Object(u.a)(g, 2),
					h = R[0],
					C = R[1],
					I = Object(l.useState)(!1),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = function() {
						var e = Object(l.useCallback)((function(e) {
								var a = e[0],
									n = new FileReader;
								n.onabort = function() {
									return t()
								}, n.onerror = function() {
									return t()
								}, n.onload = function() {
									b(!0);
									var e = [];
									try {
										e = JSON.parse(n.result)
									} catch (t) {
										console.log(t)
									}
									Ko(e, m, s).then((function(e) {
										T(e.data), C(e.rulesCount), v(e.groupsCount), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.IMPORTED, "Rules Imported", e.rulesCount)
									}))
								}, n.readAsText(a)
							}), []),
							a = Object(ko.a)({
								onDrop: e
							}),
							n = a.getRootProps,
							r = a.getInputProps;
						return c.a.createElement("div", n(), c.a.createElement("input", r()), c.a.createElement("center", null, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Be.c, null)), c.a.createElement("p", null, "Drag and drop requestly export file, or click to select")))
					},
					P = function() {
						Bo(E, A).then((function() {
							r(_t("rules", !i)), t()
						})).then((function() {
							le.b.info("Successfully imported rules")
						}))
					},
					U = function() {
						return c.a.createElement(me.a, {
							lg: "12",
							md: "12",
							xl: "12",
							sm: "12",
							xs: "12",
							className: "text-center"
						}, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Mo.a, null)), c.a.createElement("h5", null, "Could not find valid data in this file. Please try another"))
					};
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: t
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Import Rules Wizard"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body "
				}, A ? h && h > 0 || _ && _ > 0 ? c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2"
				}, c.a.createElement(Go.b, null)), c.a.createElement("h5", null, "Successfully parsed", " ", h > 0 ? h + " rules" : null, " ", _ > 0 ? "and " + _ + " groups" : null)) : U() : N ? c.a.createElement(fe, {
					customLoadingMessage: "Processing data"
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(y, null))), c.a.createElement("div", {
					className: "modal-footer ",
					style: {
						backgroundColor: "white",
						position: "sticky",
						bottom: "0",
						zIndex: "100"
					}
				}, A && N && h && h > 0 ? c.a.createElement(de.a, {
					color: "primary",
					"data-dismiss": "modal",
					type: "button",
					onClick: P
				}, "Import") : null, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, "Close")))
			},
			Qo = Y.PATHS,
			zo = function() {
				var e = Object(l.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					m = o[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "Get Started with Rules"), c.a.createElement("p", {
					className: "lead"
				}, "Rules are the constraints that define how you want to modify the network requests."), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return n(!0)
					}
				}, "Create My First Rule"), c.a.createElement(de.a, {
					color: "secondary",
					onClick: function() {
						return m(!0)
					}
				}, "Upload Rules")), c.a.createElement("h4", {
					className: "lead mt-5"
				}, "You can also use rules from the", " ", c.a.createElement(i.b, {
					style: {
						color: "#0648B3"
					},
					to: Qo.MARKETPLACE.ABSOLUTE
				}, c.a.createElement("strong", null, "Marketplace."))))))))))), a ? c.a.createElement(jo, {
					isOpen: a,
					toggle: function() {
						n(!a)
					}
				}) : null, s ? c.a.createElement(qo, {
					isOpen: s,
					toggle: function() {
						m(!s)
					}
				}) : null)
			},
			Jo = function(e, t, a) {
				return a.slice(e, e + t).reduce((function(e, t) {
					return e + t
				}))
			},
			Xo = Y.RULES_LIST_TABLE_CONSTANTS,
			Zo = function(e, t) {
				e(_t("rules", !t))
			},
			$o = function(e) {
				e({
					type: m.CLEAR_SELECTED_RULES
				})
			},
			es = function(e) {
				return Object.keys(e).filter((function(t) {
					return e[t]
				}))
			},
			ts = Y.RULES_LIST_TABLE_CONSTANTS.UNGROUPED_GROUP_ID,
			as = function(e) {
				var t = e.isHovering,
					a = e.groupId,
					n = e.toggleGroupCollapse,
					r = e.columnWidths,
					o = e.columnIndex,
					s = e.options,
					i = Object(l.useContext)(X),
					u = i.dispatch,
					m = i.state,
					d = st(m),
					p = Ze(m),
					A = es(p),
					T = lt(m),
					f = Xe(m),
					O = !(s && s.disableActions),
					N = function(e) {
						e.stopPropagation(),
							function(e, t) {
								var a = [];
								return new Promise((function(n, r) {
									ae()(t) ? r(new Error("No Rules were Selected")) : Kl(e).getAllRecords().then((function(r) {
										t.forEach((function(t) {
											var n = Object(E.a)(Object(E.a)({}, r[t]), {}, {
												groupId: Xo.UNGROUPED_GROUP_ID
											});
											a.push(Kl(e).saveRuleOrGroup(n))
										})), Promise.all(a).then((function() {
											return n()
										}))
									}))
								}))
							}(d, A).then((function() {
								$o(u), Zo(u, T)
							})).then((function() {
								le.b.info("Rules Ungrouped"), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.UNGROUPED, "Rules Ungrouped")
							})).catch((function() {
								return le.b.warn("Please select rules first", {
									hideProgressBar: !0
								})
							}))
					},
					b = function(e) {
						e.stopPropagation(),
							function(e, t, a) {
								return a[t] ? ae()(a[t].group_rules) ? Kl(e).removeRecord(t) : Promise.reject("Delete or Ungroup rules first") : Promise.reject("Invalid Group")
							}(d, a, f).then((function() {
								Zo(u, T), le.b.info("Group deleted successfully"), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.GROUP, S.CONSTANTS.GA_EVENTS.ACTIONS.DELETED, "Group Deleted")
							})).catch((function(e) {
								return le.b.warn(e, {
									hideProgressBar: !0
								})
							}))
					},
					g = function(e) {
						e.stopPropagation(), u(Ut("renameGroupModal", !0, {
							groupId: {
								groupId: a
							}
						}))
					};
				return O && a !== ts ? c.a.createElement("td", {
					className: "text-right group-header-column",
					style: {
						width: Jo(o, 1, r) + "%"
					},
					onClick: function(e) {
						return n(e, a)
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: t ? "btn-icon-only background-color-unset" : "btn-icon-only text-light background-color-unset",
					role: "button",
					size: "sm",
					color: "",
					onClick: function(e) {
						return e.stopPropagation()
					}
				}, c.a.createElement("i", {
					className: "fas fa-ellipsis-v"
				})), c.a.createElement(qt.a, {
					className: "dropdown-menu-arrow",
					right: !0
				}, c.a.createElement(Qt.a, {
					onClick: N
				}, "Ungroup Selected Rules"), c.a.createElement(Qt.a, {
					onClick: g
				}, "Rename Group"), c.a.createElement(Qt.a, {
					onClick: b
				}, "Delete Group")))) : c.a.createElement("td", {
					className: "group-header-column",
					style: {
						width: Jo(o, 1, r) + "%"
					},
					onClick: function(e) {
						return n(e, a)
					}
				})
			},
			ns = function(e, t, a) {
				e(function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						type: m.SET_SELECT_ALL_RULES_OF_A_GROUP,
						payload: {
							groupId: e,
							newValue: t
						}
					}
				}(t, a))
			},
			rs = function(e) {
				var t = e.groupId,
					a = e.groupData,
					n = e.toggleGroupCollapse,
					r = e.checkIfGroupIsCollapsed,
					o = e.getGroupName,
					s = e.getGroupRulesCount,
					i = e.columnWidths,
					m = e.columnIndex,
					E = e.options,
					d = Object(l.useContext)(X),
					p = d.state,
					S = d.dispatch,
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = r(t),
					b = o(t),
					g = s(t),
					h = Y.RULES_LIST_TABLE_CONSTANTS.GROUP_RULES,
					C = Ze(p),
					I = function(e) {
						e.stopPropagation(), ns(S, t, !f), O(!f)
					},
					L = !(E && E.disableSelection);
				Object(l.useEffect)((function() {
					var e = 0;
					a[h].map((function(t) {
						return !0 === C[t.id] && e++, e === a[h].length && O(!0), e < a[h].length && O(!1), 0
					}))
				}), [a, C, h]);
				return c.a.createElement("td", {
					colSpan: 4,
					className: " group-header-column",
					style: {
						width: Jo(m, 4, i) + "%"
					},
					onClick: function(e) {
						return n(e, t)
					}
				}, c.a.createElement("b", null, N ? c.a.createElement(R.e, {
					size: "1.3em"
				}) : c.a.createElement(R.d, {
					size: "1.3em"
				})), L ? c.a.createElement(c.a.Fragment, null, c.a.createElement("input", {
					className: "align-middle margin-left-half margin-right-half ",
					type: "checkbox",
					onChange: function(e) {
						e.stopPropagation()
					},
					checked: f,
					onClick: I,
					id: "select-all-rules-in-group-" + t
				})) : null, c.a.createElement("span", {
					className: "align-middle unselectable"
				}, c.a.createElement("b", null, " ".concat(b, " "), " "), c.a.createElement("i", null, "(".concat(g, " rules)"))))
			},
			ls = Y.RULES_LIST_TABLE_CONSTANTS,
			cs = ls.UNGROUPED_GROUP_ID,
			os = ls.GROUP_DETAILS,
			ss = function(e) {
				var t = e.toggleGroupCollapse,
					a = e.groupData,
					n = e.groupId,
					r = e.columnWidths,
					o = e.columnIndex,
					s = e.options,
					i = Object(l.useContext)(X),
					u = i.state,
					m = i.dispatch,
					d = lt(u),
					p = st(u),
					A = function(e) {
						return e[os].status === S.CONSTANTS.RULE_STATUS.ACTIVE
					},
					T = function(e, t) {
						e.preventDefault(),
							function(e) {
								var t = A(e) ? S.CONSTANTS.RULE_STATUS.INACTIVE : S.CONSTANTS.RULE_STATUS.ACTIVE;
								Kl(p).saveRuleOrGroup(Object(E.a)(Object(E.a)({}, e[os]), {}, {
									status: t
								})).then((function() {
									m(_t("rules", !d))
								})).then((function() {
									t === S.CONSTANTS.RULE_STATUS.ACTIVE ? le.b.success("Group is now ".concat(t.toLowerCase())) : le.b.error("Group is now ".concat(t.toLowerCase()))
								}))
							}(t), Ma("group", "toggled", "Group Toggled")
					},
					f = !(s && s.disableStatus),
					O = !(s && s.disableEditing);
				return f && n !== cs ? c.a.createElement("td", {
					style: {
						width: Jo(o, 1, r) + "%"
					},
					className: "group-header-column text-align-center"
				}, O ? c.a.createElement("label", {
					className: "custom-toggle no-margin-bottom"
				}, c.a.createElement("input", {
					type: "checkbox",
					checked: A(a),
					onChange: function(e) {
						return T(e, a)
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle custom-toggle-slider-with-label",
					"data-label-off": "Off",
					"data-label-on": "On"
				})) : c.a.createElement("span", null, A(a) ? "On" : "Off")) : c.a.createElement("td", {
					onClick: function(e) {
						return t(e, n)
					},
					className: "group-header-column",
					style: {
						width: Jo(o, 1, r) + "%"
					}
				})
			},
			is = function(e) {
				var t = e.colSpan || 1,
					a = e.groupId,
					n = e.toggleGroupCollapse,
					r = e.columnWidths,
					l = e.columnIndex;
				return c.a.createElement("td", {
					style: {
						width: Jo(l, 1, r) + "%"
					},
					className: "group-header-column",
					colSpan: t,
					onClick: function(e) {
						return n(e, a)
					}
				})
			},
			us = Y.RULES_LIST_TABLE_CONSTANTS.COLUMN_WIDTHS,
			ms = [rs, null, null, null, ss, is, as],
			Es = function(e) {
				var t = e.groupId,
					a = e.toggleGroupCollapse,
					n = e.checkIfGroupIsCollapsed,
					r = e.getGroupName,
					l = e.getGroupRulesCount,
					o = e.groupData,
					s = e.options;
				return c.a.createElement(fr.a, null, (function(e) {
					var i = e.isHovering;
					return c.a.createElement(c.a.Fragment, null, ms.map((function(e, u) {
						return null === e ? null : c.a.createElement(e, {
							checkIfGroupIsCollapsed: n,
							groupId: t,
							toggleGroupCollapse: a,
							getGroupName: r,
							getGroupRulesCount: l,
							groupData: o,
							isHovering: i,
							key: u,
							columnIndex: u,
							columnWidths: us,
							options: s
						})
					})))
				}))
			},
			ds = function(e, t) {
				var a;
				e((a = t.id, {
					type: m.TOGGLE_SELECTED_RULE,
					payload: {
						ruleId: a
					}
				}))
			},
			ps = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = e.options,
					r = Object(l.useContext)(X),
					o = r.state,
					s = r.dispatch,
					i = !!Ze(o)[t.id],
					u = !(n && n.disableSelection);
				return c.a.createElement("td", {
					className: "text-align-center",
					style: {
						width: a
					},
					onClick: function() {
						u && ds(s, t)
					}
				}, u ? c.a.createElement("div", {
					className: "custom-control custom-checkbox"
				}, c.a.createElement("input", {
					type: "checkbox",
					className: "custom-control-input",
					checked: i,
					onChange: function(e) {
						e.stopPropagation(), ds(s, t)
					},
					onClick: function(e) {
						return e.stopPropagation()
					},
					id: "rule-id" + t.id
				}), c.a.createElement("label", {
					className: "custom-control-label checkbox-empty-label",
					htmlFor: "rule-id" + t.id,
					onClick: function(e) {
						return e.stopPropagation()
					}
				})) : null)
			},
			Ss = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = e.options,
					r = !(n && n.disableEditing),
					o = !(n && n.disableFavourites),
					s = Object(l.useContext)(X),
					i = s.state,
					m = s.dispatch,
					d = lt(i),
					p = tt(i),
					A = qe(i),
					T = st(i),
					f = Object(l.useState)(0),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useState)("Free"),
					h = Object(u.a)(g, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(!1),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = function(e) {
						Kl(T).saveRuleOrGroup(Object(E.a)(Object(E.a)({}, t), {}, {
							isFavourite: e
						})).then((function() {
							m(_t("rules", !d)), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, "FAVOURITE", "Rule Favourite Toggled")
						}))
					},
					U = function(e) {
						e.stopPropagation(), r && function() {
							if (t.isFavourite) P(!1);
							else {
								var e = A.filter((function(e) {
										return e.isFavourite
									})).length,
									a = Ot(p),
									n = bt(Y.FEATURES.FAV_RULES, a);
								e >= n ? (b(n), I(a), y(!0)) : P(!0)
							}
						}()
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					style: {
						fontSize: "1.1em",
						color: "#ced4da",
						width: a
					},
					onClick: function() {
						return ds(m, t)
					}
				}, o ? t.isFavourite ? c.a.createElement(R.A, {
					onClick: U,
					style: {
						color: "#004BAD"
					}
				}) : c.a.createElement(R.P, {
					onClick: U
				}) : null), v ? c.a.createElement(Dr, {
					isOpen: v,
					toggle: function() {
						y(!v)
					},
					featureName: Y.FEATURES.FAV_RULES,
					featureLimit: N,
					userPlanName: C
				}) : null)
			},
			As = Y.RULE_TYPES_CONFIG,
			Ts = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = e.options,
					r = Object(ee.g)(),
					l = !(n && n.disableEditing);
				return c.a.createElement("td", {
					className: "text-align-center",
					style: {
						width: a
					},
					onClick: function(e) {
						l && he(r, t.id)
					}
				}, c.a.createElement("span", {
					className: "avatar  mr-3 rule-badge",
					style: {
						color: "white",
						background: As[t.ruleType].PRIMARY_COLOR,
						borderRadius: "20%",
						fontWeight: "lighter",
						boxShadow: "none"
					}
				}, c.a.createElement(As[t.ruleType].ICON)))
			},
			fs = a(527),
			Os = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = e.options,
					r = e.openRuleViewerInModal,
					o = Object(ee.g)(),
					s = !(n && n.disableEditing),
					i = Object(l.useContext)(X).dispatch;
				return c.a.createElement("th", {
					scope: "row",
					style: {
						width: a,
						overflow: "hidden",
						whiteSpace: "nowrap"
					},
					onClick: function() {
						return ds(i, t)
					}
				}, c.a.createElement(fs.a, {
					className: "align-items-center"
				}, c.a.createElement(fs.a, null, c.a.createElement("span", {
					className: "mb-0 text-sm unselectable"
				}, c.a.createElement("span", {
					className: "underline-text-on-hover",
					onClick: function(e) {
						e.stopPropagation(), s ? he(o, t.id) : r && r(t)
					}
				}, t.name), c.a.createElement("br", null), c.a.createElement("span", {
					className: "font-weight-200"
				}, t.description)))))
			},
			Ns = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = e.options,
					r = !(n && n.disableStatus),
					o = Object(l.useContext)(X),
					s = o.state,
					i = o.dispatch,
					m = lt(s),
					d = qe(s),
					p = tt(s),
					A = st(s),
					T = Object(l.useState)(0),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)("Free"),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = Object(l.useState)(!1),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = function(e) {
						return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE
					},
					y = !(n && n.disableEditing),
					P = function(e) {
						if (e.preventDefault(), v(t)) U(S.CONSTANTS.RULE_STATUS.INACTIVE);
						else {
							var a = d.filter((function(e) {
									return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE && !oo(e)
								})).length,
								n = Ot(p),
								r = bt(Y.FEATURES.ACTIVE_RULES, n);
							a >= r ? (N(r), h(n), _(!0)) : U(S.CONSTANTS.RULE_STATUS.ACTIVE)
						}
					},
					U = function(e) {
						Kl(A).saveRuleOrGroup(Object(E.a)(Object(E.a)({}, t), {}, {
							status: e
						})).then((function() {
							e === S.CONSTANTS.RULE_STATUS.ACTIVE ? le.b.success("Rule is now ".concat(e.toLowerCase())) : le.b.error("Rule is now ".concat(e.toLowerCase())), i(_t("rules", !m)), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, t.ruleType + " rule", "toggled")
						}))
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-align-center",
					style: {
						width: a
					},
					onClick: function() {
						return ds(i, t)
					}
				}, r ? y ? c.a.createElement("label", {
					className: "custom-toggle margin-top-point-seven-rem"
				}, c.a.createElement("input", {
					type: "checkbox",
					checked: v(t),
					onChange: P,
					onClick: function(e) {
						return e.stopPropagation()
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle custom-toggle-slider-with-label",
					"data-label-off": "Off",
					"data-label-on": "On",
					onClick: function(e) {
						return e.stopPropagation()
					}
				})) : c.a.createElement("span", null, v(t) ? "On" : "Off") : null), L ? c.a.createElement(Dr, {
					isOpen: L,
					toggle: function() {
						_(!L)
					},
					featureName: Y.FEATURES.ACTIVE_RULES,
					featureLimit: O,
					userPlanName: R
				}) : null)
			},
			bs = function(e) {
				var t = e.rule,
					a = e.columnWidth,
					n = Object(l.useContext)(X).dispatch,
					r = t.modificationDate ? t.modificationDate : t.creationDate;
				return c.a.createElement("td", {
					style: {
						textAlign: "center",
						width: a,
						overflow: "hidden"
					},
					onClick: function() {
						return ds(n, t)
					}
				}, c.a.createElement("span", {
					className: "unselectable"
				}, ra(r)))
			},
			gs = function(e, t, a, n, r) {
				var l = Date.now();
				return new Promise((function(c) {
					ro(e, t, n).then((function(e) {
						var t = e.rules,
							n = e.groups,
							o = Mr(l),
							s = kr(r);
						s.push(l);
						var i = {
								access: {
									owner: r
								},
								shareId: l,
								rules: t,
								groups: n,
								isEnabled: !0
							},
							u = Da.setValue(s, {
								listName: a,
								shareId: l,
								creationDate: la()
							}),
							m = Da.setValue(o, i);
						Promise.all([u, m]).then((function() {
							c({
								sharedListId: l,
								sharedListName: a,
								sharedListData: i
							})
						}))
					}))
				}))
			},
			Rs = function(e) {
				var t = e.toggle,
					a = e.isOpen,
					n = e.rulesToShare,
					r = Object(l.useContext)(X),
					o = r.dispatch,
					s = r.state,
					i = Je(s),
					m = Xe(s),
					E = tt(s),
					d = st(s),
					p = Object(l.useState)(!1),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(!1),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Object(l.useState)(""),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = Object(l.useState)(""),
					v = Object(u.a)(_, 2),
					y = v[0],
					P = v[1],
					U = Object(l.useState)(""),
					D = Object(u.a)(U, 2),
					w = D[0],
					x = D[1],
					j = Object(l.useState)(""),
					k = Object(u.a)(j, 2),
					M = k[0],
					G = k[1],
					F = Object(l.useState)(""),
					B = Object(u.a)(F, 2),
					V = B[0],
					H = B[1],
					Y = Object(l.useState)(!1),
					W = Object(u.a)(Y, 2),
					K = W[0],
					q = W[1],
					Q = function() {
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.COPIED, "SharedList url copied from CreateSharedListModal"), x(y)
					},
					z = function() {
						"" === I ? le.b.warning("Provide a shared list name") : f(!0)
					},
					J = function(e) {
						var a = e.showConfirmationBtn,
							n = e.showNotifyBtn,
							r = e.closeBtnOnClickHandler;
						return c.a.createElement("div", {
							className: "modal-footer ",
							style: {
								backgroundColor: "white",
								position: "sticky",
								bottom: "0",
								zIndex: "100"
							}
						}, a ? c.a.createElement(de.a, {
							color: "primary",
							"data-dismiss": "modal",
							type: "button",
							onClick: function() {
								return z()
							}
						}, "Create") : null, n && K ? c.a.createElement(de.a, {
							color: "primary",
							"data-dismiss": "modal",
							type: "button",
							disabled: !0
						}, c.a.createElement(R.S, {
							className: "icon-spin"
						})) : null, c.a.createElement(de.a, {
							color: "secondary",
							"data-dismiss": "modal",
							type: "button",
							onClick: r || t
						}, "Close"))
					},
					Z = function() {
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.CLICKED, "Notify Button Clicked"), q(!0), Te.functions().httpsCallable("sendShareListUrlAsEmailToShare")({
							sharedListData: V,
							recipientEmails: M.split(",").map((function(e) {
								return e.trim()
							}))
						}).then((function(e) {
							e.data.success ? (le.b.success("We've notified them"), t()) : (q(!1), le.b.error("Opps! Check the email and try again")), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.SHARED, "Notification Sent To people")
						})).catch((function(e) {
							console.log(e.message), le.b.error("Opps! Couldn't send the notification"), t()
						}))
					},
					$ = function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: "modal-body "
						}, c.a.createElement(me.a, {
							lg: "12",
							md: "12",
							xl: "12",
							sm: "12",
							xs: "12",
							className: "text-center"
						}, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Mo.a, null)), c.a.createElement("h5", null, "Please select a rule before sharing"))), J({
							showConfirmationBtn: !1,
							showNotifyBtn: !1
						}))
					},
					ee = Object(l.useCallback)((function(e, t, a) {
						var n = S.CONSTANTS.getSharedListURL(e, t);
						P(n), H(a), g(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.CREATED, "Shared List created")
					}), [i, o]),
					te = function() {
						$o(o), t()
					},
					ae = function(e) {
						13 === e.keyCode && z()
					};
				return Object(l.useEffect)((function() {
					T && !b && gs(d, n, I, m, E.details.profile.uid).then((function(e) {
						var t = e.sharedListId,
							a = e.sharedListName,
							n = e.sharedListData;
						ee(t, a, n)
					})), Ga("iscreatesharedlisttask", !0)
				}), [T, b, n, I, m, E.details.profile.uid, ee, d]), Object(l.useEffect)((function() {
					return document.addEventListener("keydown", ae), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, "SharedList creation workflow started"),
						function() {
							document.removeEventListener("keydown", ae)
						}
				}), [ae]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: t
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Share Rules"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), T ? b ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2"
				}, c.a.createElement(R.f, null)), c.a.createElement("p", null, "Successfully created shared list. You can share this list with other users and they will be able to import these rules."), c.a.createElement("p", {
					className: "m-3"
				}, c.a.createElement("b", null, "Notify People (optional)")), c.a.createElement(Bt.a, {
					className: "input-group-alternative has-traditional-border"
				}, c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					placeholder: "Enter Emails separated by comma",
					type: "text",
					onChange: function(e) {
						return G(e.target.value)
					},
					value: M
				}), c.a.createElement(Vt.a, {
					addonType: "append"
				}, c.a.createElement(de.a, {
					className: "m-1",
					color: "primary",
					"data-dismiss": "modal",
					type: "button",
					onClick: Z,
					disabled: !M
				}, "Notify"))), c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "append",
					className: "mt-3"
				}, c.a.createElement(Nr.a, {
					text: y,
					onCopy: Q
				}, c.a.createElement(Ht.a, {
					className: "width-control",
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, c.a.createElement("span", {
					id: "copy-icon",
					className: "dark-on-hover mx-auto cursor-pointer"
				}, "Copy Link ", c.a.createElement(R.l, null)), c.a.createElement(Ur.a, {
					delay: 0,
					trigger: "hover focus",
					target: "copy-icon"
				}, w === y ? "Copied" : "Copy To Clipboard"))))))), J({
					showConfirmationBtn: !1,
					showNotifyBtn: !0,
					closeBtnOnClickHandler: function(e) {
						te()
					}
				})) : c.a.createElement(fe, {
					customLoadingMessage: "Creating List"
				}) : 0 === n.length ? $() : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2"
				}, c.a.createElement(R.R, null)), c.a.createElement("p", null, c.a.createElement("b", null, "Please enter a name for your shared list of rules")), c.a.createElement(Bt.a, {
					className: "input-group-alternative has-traditional-border"
				}, c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					placeholder: "My shared list",
					type: "text",
					onChange: function(e) {
						return L(e.target.value)
					},
					value: I
				})))), J({
					showConfirmationBtn: !0,
					showNotifyBtn: !1
				})))
			},
			hs = a(163),
			Cs = Y.RULES_LIST_TABLE_CONSTANTS,
			Is = function(e) {
				var t = kr(e);
				return Da.getValue(t)
			},
			Ls = function(e) {
				var t = e.isHovering,
					a = e.rule,
					n = e.columnWidth,
					r = e.options,
					o = e.openRuleViewerInModal,
					s = Object(ee.g)(),
					i = !(r && r.disableActions),
					m = !(r && r.disableEditing),
					d = Object(l.useContext)(X),
					p = d.state,
					A = d.dispatch,
					T = lt(p),
					f = Xe(p),
					O = tt(p),
					N = st(p),
					b = qe(p),
					g = Object(l.useState)(""),
					h = Object(u.a)(g, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(Y.FEATURES.RULES),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = Object(l.useState)(0),
					U = Object(u.a)(P, 2),
					D = U[0],
					w = U[1],
					x = Object(l.useState)(!1),
					j = Object(u.a)(x, 2),
					k = j[0],
					M = j[1],
					G = Object(l.useState)(!1),
					F = Object(u.a)(G, 2),
					B = F[0],
					V = F[1],
					H = function() {
						A(Ut("authModal", !0, {
							redirectURL: window.location.href,
							src: Y.FEATURES.RULES
						}))
					},
					W = function(e) {
						e.stopPropagation(), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, a.ruleType + " rule", S.CONSTANTS.GA_EVENTS.ACTIONS.DELETED),
							function(e, t, a, n) {
								return Kl(e).removeRecord(a).then((function() {
									t(_t("rules", !n))
								}))
							}(N, A, a.id, T).then((function() {
								le.b.info("Rule deleted")
							})).then((function() {
								$o(A)
							}))
					},
					K = function(e) {
						e.stopPropagation(), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, a.ruleType + " rule", S.CONSTANTS.GA_EVENTS.ACTIONS.COPIED);
						var t = Ot(O),
							n = bt(Y.FEATURES.RULES, t);
						b.filter((function(e) {
							return !oo(e)
						})).length >= n ? (w(n), I(t), y(Y.FEATURES.RULES), V(!0)) : function(e, t, a, n) {
							var r = Object(E.a)(Object(E.a)({}, a), {}, {
								creationDate: la(),
								name: a.name + " Copy",
								id: a.ruleType + "_" + ca(),
								isSample: !1,
								isFavourite: !1,
								status: "Inactive"
							});
							Kl(e).saveRuleOrGroup(r).then((function() {
								he(n, r.id)
							}))
						}(N, 0, a, s)
					},
					q = function(e) {
						e.stopPropagation(), O.loggedIn ? Q() : H()
					},
					Q = function() {
						var e = Ot(O);
						Nt(Y.FEATURES.EXPORT_IMPORT, e) ? (Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, a.ruleType + " rule", S.CONSTANTS.GA_EVENTS.ACTIONS.EXPORTED), function(e, t) {
							var a = [];
							a.push(e), e.groupId !== Cs.UNGROUPED_GROUP_ID && a.push(t[e.groupId][Cs.GROUP_DETAILS]), hs(JSON.stringify(a, null, 2), "requestly_rules.txt", "text/plain")
						}(a, f)) : (w(0), I(e), y(Y.FEATURES.EXPORT_IMPORT), V(!0))
					},
					z = function(e) {
						e.stopPropagation(), O.loggedIn ? J() : H()
					},
					J = function() {
						A(Ut("loadingModal", !0));
						var e = Ot(O),
							t = bt(Y.FEATURES.SHARED_LISTS, e);
						Is(O.details.profile.uid).then((function(a) {
							var n = 0;
							a && (n = Object.keys(a).length), n >= t ? (w(t), I(e), y(Y.FEATURES.SHARED_LISTS), V(!0)) : (M(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, "rules", S.CONSTANTS.GA_EVENTS.ACTIONS.SHARED)), A(Ut("loadingModal", !1))
						}))
					},
					Z = function(e) {
						e.stopPropagation(), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, a.ruleType + " rule", S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED), he(s, a.id)
					};
				return !m && o ? c.a.createElement("td", {
					className: "text-right",
					style: {
						width: n
					}
				}, c.a.createElement("span", {
					className: t ? "all-direct-children-have-margin" : "all-direct-children-have-margin text-light",
					style: {
						fontSize: "1.3em"
					}
				}, c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.t, {
					onClick: function(e) {
						e.stopPropagation(), o(a)
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Preview")))) : c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-right",
					style: {
						width: n
					}
				}, i ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "d-lg-flex d-none justify-content-center"
				}, c.a.createElement("span", {
					className: t ? "all-direct-children-have-margin" : "all-direct-children-have-margin text-light",
					style: {
						fontSize: "1.3em"
					}
				}, c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.p, {
					onClick: Z
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Edit Rule")), c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.R, {
					onClick: z
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Share Rule")), c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.o, {
					onClick: q
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Export Rule")), c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.l, {
					onClick: K
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Copy Rule")), c.a.createElement("span", {
					className: "custom-tooltip"
				}, c.a.createElement(R.W, {
					onClick: W
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Delete")))), c.a.createElement("div", {
					className: "d-block d-lg-none"
				}, c.a.createElement(Wt.a, {
					direction: "left"
				}, c.a.createElement(Kt.a, {
					className: "btn-icon-only background-color-unset",
					role: "button",
					size: "sm",
					color: ""
				}, c.a.createElement("i", {
					className: "fas fa-ellipsis-v"
				})), c.a.createElement(qt.a, {
					className: "dropdown-menu-arrow",
					right: !0
				}, c.a.createElement(Qt.a, {
					onClick: Z
				}, c.a.createElement(R.p, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Edit Rule")), c.a.createElement(Qt.a, null, c.a.createElement(R.R, {
					onClick: z
				}), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Share Rule")), c.a.createElement(Qt.a, {
					onClick: q
				}, c.a.createElement(R.o, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Export Rule")), c.a.createElement(Qt.a, {
					onClick: K
				}, c.a.createElement(R.l, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Copy Rule")), c.a.createElement(Qt.a, {
					onClick: W
				}, c.a.createElement(R.W, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Delete")))))) : null), k ? c.a.createElement(Rs, {
					isOpen: k,
					toggle: function() {
						M(!k)
					},
					rulesToShare: [a.id]
				}) : null, B ? c.a.createElement(Dr, {
					isOpen: B,
					toggle: function() {
						V(!B)
					},
					featureName: v,
					featureLimit: D,
					userPlanName: C,
					mode: 0 === D ? Y.LIMIT_REACHED_MODAL.MODES.CHECK_IF_ENABLED : Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT
				}) : null)
			},
			_s = Y.RULES_LIST_TABLE_CONSTANTS,
			vs = _s.GROUP_RULES,
			ys = _s.UNGROUPED_GROUP_NAME,
			Ps = _s.COLUMN_WIDTHS,
			Us = [ps, Ss, Ts, Os, Ns, bs, Ls],
			Ds = function(e) {
				var t = e.groupId,
					a = e.groupData,
					n = e.toggleGroupCollapse,
					r = e.checkIfGroupIsCollapsed,
					o = e.getGroupName,
					s = e.getGroupRulesCount,
					i = e.options,
					u = e.openRuleViewerInModal,
					m = Object(l.useContext)(X).state,
					E = nt(m),
					d = function() {
						return c.a.createElement(Es, {
							groupId: t,
							groupData: a,
							toggleGroupCollapse: n,
							checkIfGroupIsCollapsed: r,
							getGroupName: o,
							getGroupRulesCount: s,
							options: i
						})
					};
				return c.a.createElement(c.a.Fragment, null, 0 !== a[vs].length && o(t) === ys || 0 === E.length && o(t) !== ys ? d() : null, r(t) ? null : a[vs].map((function(e) {
					return function(e) {
						return c.a.createElement(fr.a, {
							key: e.id
						}, (function(t) {
							var a = t.isHovering;
							return c.a.createElement(c.a.Fragment, null, Us.map((function(t, n) {
								return c.a.createElement(t, {
									rule: e,
									key: n,
									isHovering: a,
									columnWidth: Ps[n] + "%",
									options: i,
									openRuleViewerInModal: u
								})
							})))
						}))
					}(e)
				})))
			},
			ws = function(e) {
				var t = e.currentlySelectedRuleConfig,
					a = e.topCountShowRequiredDataObject,
					n = a.numOfRulePairsOfUser,
					r = a.planName,
					l = a.planRulePairLimit,
					o = Object(ee.g)();
				return c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "".concat(t.NAME, " Rule "), "bronze" === r && t.TYPE !== S.CONSTANTS.RULE_TYPES.SCRIPT && t.TYPE !== S.CONSTANTS.RULE_TYPES.RESPONSE ? "(".concat(n, "/").concat(l, " Pairs Used)") : null, "bronze" === r ? c.a.createElement("button", {
					className: "text-primary btn btn-link",
					style: {
						cursor: "pointer"
					},
					onClick: function(e) {
						e.preventDefault(), ye(o), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE_PAIRS, S.CONSTANTS.GA_EVENTS.ACTIONS.REMOVE_LIMIT_CLICKED, "remove.limit.clicked@rule.pairs.page", n)
					}
				}, "Remove Limits") : null), t.TYPE === S.CONSTANTS.RULE_TYPES.DELAY ? c.a.createElement("p", {
					className: "mb-0",
					style: {
						fontSize: "14px"
					}
				}, "Delay is capped automatically to avoid browsing performance degradation.", c.a.createElement("br", null), "For XHR/fetch, Cap is ".concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_XHR, "ms & For other requests (JS, CSS, Images etc) Cap is ").concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_NON_XHR, "ms")) : null)
			},
			xs = function(e, t) {
				! function(e) {
					e(Pt())
				}(e), ge(t)
			},
			js = Y.RULE_EDITOR_CONFIG,
			ks = function(e, t) {
				e(vt(t))
			},
			Ms = function(e) {
				return Object(E.a)(Object(E.a)({}, e.EMPTY_PAIR_FORMAT), {}, {
					id: ca()
				})
			},
			Gs = function(e, t, a, n) {
				if (t) {
					var r = {
						creationDate: la(),
						description: "",
						groupId: "",
						id: "".concat(a, "_").concat(ca()),
						isSample: !1,
						name: "",
						objectType: S.CONSTANTS.OBJECT_TYPES.RULE,
						pairs: [],
						ruleType: a,
						status: S.CONSTANTS.RULE_STATUS.INACTIVE
					};
					r.pairs.push(Ms(t)), n(e, r)
				}
			},
			Fs = function(e, t, a) {
				void 0 === t ? function(e) {
					e.push(Ne.ROOT)
				}(a) : e({
					type: m.UPDATE_CURRENTLY_SELECTED_RULE_CONFIG,
					payload: t
				})
			},
			Bs = function(e, t) {
				if (t) return {
					MODE: js.MODES.SHARED_LIST_RULE_VIEW
				};
				if (!e) return {};
				var a = e.pathname.split("/");
				return {
					MODE: a[a.length - 2],
					RULE_TYPE_TO_CREATE: a[a.length - 1],
					RULE_TO_EDIT_ID: a[a.length - 1]
				}
			},
			Vs = function(e) {
				if (!e) return 1500;
				var t = Ot(e);
				return bt(Y.FEATURES.RESPONSE_BODY_CHARACTER_LIMIT, t)
			},
			Hs = function(e, t) {
				var a;
				return ae()(e.name) ? {
					result: !1,
					message: "Please provide a rule name"
				} : ae()(e.pairs) ? {
					result: !1,
					message: "Opps! Rule must have atleast one pair"
				} : (e.ruleType === S.CONSTANTS.RULE_TYPES.REDIRECT ? e.pairs.forEach((function(e) {
					ae()(e.source.value) ? a = {
						result: !1,
						message: "Please enter a source"
					} : ae()(e.destination) ? a = {
						result: !1,
						message: "Please enter a destination URL"
					} : function(e) {
						try {
							new URL(e)
						} catch (t) {
							return !1
						}
						return !0
					}(e.destination) || e.destination.startsWith("$") || (a = {
						result: !1,
						message: "Please enter a well-formatted destination URL"
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.CANCEL ? e.pairs.forEach((function(e) {
					ae()(e.source.value) && (a = {
						result: !1,
						message: "Please enter a source"
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.REPLACE ? e.pairs.forEach((function(e) {
					ae()(e.from) && (a = {
						result: !1,
						message: "Please enter the part that needs to be replaced"
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.HEADERS ? e.pairs.forEach((function(e) {
					ae()(e.header) && (a = {
						result: !1,
						message: "Please enter the header name"
					}), "Remove" !== e.type && ae()(e.value) && (a = {
						result: !1,
						message: "Please enter the header value"
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.QUERYPARAM ? e.pairs.forEach((function(e) {
					e.modifications.forEach((function(e) {
						"Remove All" !== e.type && ae()(e.param) && (a = {
							result: !1,
							message: "Please enter the param name"
						}), "Add" === e.type && ae()(e.value) && (a = {
							result: !1,
							message: "Please enter the param value"
						})
					}))
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.SCRIPT ? e.pairs.forEach((function(e) {
					ae()(e.libraries) && ae()(e.scripts) ? a = {
						result: !1,
						message: "Please provide a script source"
					} : e.scripts.forEach((function(e) {
						"code" === e.type ? ae()(e.value) ? a = {
							result: !1,
							message: "Please enter a valid script code"
						} : e.value.length >= Y.RULE_TYPES_CONFIG.Script.CUSTOM_SCRIPT_CHARACTER_LIMIT && (a = {
							result: !1,
							message: "Script code should be less than ".concat(Y.RULE_TYPES_CONFIG.Script.CUSTOM_SCRIPT_CHARACTER_LIMIT, " characters")
						}) : "url" === e.type && ae()(e.value) && (a = {
							result: !1,
							message: "Please enter a valid script URL"
						})
					}))
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.RESPONSE ? e.pairs.forEach((function(e) {
					ae()(e.source.value) ? a = {
						result: !1,
						message: "Please enter a source"
					} : ae()(e.response.value) ? a = {
						result: !1,
						message: "Please specify response body"
					} : ua(e.response.value) > Vs(t) && (a = {
						result: !1,
						message: "Response should be less than ".concat(Vs(t), " characters.")
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.USERAGENT ? e.pairs.forEach((function(e) {
					ae()(e.envType) ? a = {
						result: !1,
						message: "Please select device type"
					} : ae()(e.env) && !e.userAgent && (a = {
						result: !1,
						message: "Please select UserAgent"
					})
				})) : e.ruleType === S.CONSTANTS.RULE_TYPES.DELAY && e.pairs.forEach((function(e) {
					var t = e.delay;
					ae()(e.source.value) ? a = {
						result: !1,
						message: "Please enter a source"
					} : ae()(t) ? a = {
						result: !1,
						message: "Delay cannot be empty"
					} : isNaN(t) && 0 !== parseInt(t) ? a = {
						result: !1,
						message: "Delay should be a Number"
					} : Object(Oe.inRange)(parseInt(t), S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MIN_DELAY_VALUE, S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_NON_XHR + 1) || (a = {
						result: !1,
						message: "Delay should lie between ".concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MIN_DELAY_VALUE, " and ").concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_NON_XHR)
					})
				})), a && !1 === a.result ? a : {
					result: !0
				})
			},
			Ys = function(e) {
				var t = Object(ee.g)(),
					a = Bs(e.location).MODE,
					n = Object(l.useContext)(X),
					r = (n.dispatch, n.state),
					o = et(r),
					s = tt(r),
					i = st(r),
					u = function() {
						return a === Y.RULE_EDITOR_CONFIG.MODES.EDIT ? "Save" : "Create"
					},
					m = function() {
						var e = Hs(o, s);
						e.result ? function(e, t, a, n) {
							var r = Object(E.a)(Object(E.a)({}, a), {}, {
								modificationDate: la()
							});
							return Kl(e).saveRuleOrGroup(r).then((function() {
								Kl(e).getRecord(r.groupId).then((function(t) {
									if (t && "group" === t.objectType) {
										var a = Object(E.a)(Object(E.a)({}, t), {}, {
											modificationDate: la()
										});
										Kl(e).saveRuleOrGroup(a).then((function() {}))
									}
								}))
							}))
						}(i, 0, o).then((function() {
							le.b.success("Successfully ".concat(u().toLowerCase(), "d the rule")), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.CREATED, "Rule Saved");
							var e = o.id;
							he(t, e)
						})) : le.b.warn(e.message, {
							hideProgressBar: !0
						})
					},
					d = function(e) {
						(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && 83 === e.keyCode && (e.preventDefault(), m())
					};
				return Object(l.useEffect)((function() {
					return document.addEventListener("keydown", d),
						function() {
							document.removeEventListener("keydown", d)
						}
				}), [d]), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: m
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.f, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, u(), " Rule"))
			},
			Ws = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X).dispatch,
					a = Object(l.useCallback)((function(a) {
						27 === a.keyCode && xs(t, e)
					}), [t, e]);
				return Object(l.useEffect)((function() {
					return document.addEventListener("keydown", a),
						function() {
							return document.removeEventListener("keydown", a)
						}
				}), [a]), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: function() {
						return xs(t, e)
					}
				}, "Close")
			},
			Ks = function(e) {
				var t = e.location,
					a = Object(l.useContext)(X),
					n = a.dispatch,
					r = a.state,
					o = et(r),
					s = qe(r),
					i = tt(r),
					m = Object(l.useState)(0),
					d = Object(u.a)(m, 2),
					p = d[0],
					A = d[1],
					T = Object(l.useState)("Free"),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = function() {
						return o.status === S.CONSTANTS.RULE_STATUS.ACTIVE
					},
					I = function(e) {
						ks(n, Object(E.a)(Object(E.a)({}, o), {}, {
							status: e
						}))
					},
					L = Object(l.useCallback)(I, []);
				return Object(l.useEffect)((function() {
					var e = s.filter((function(e) {
							return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE && !oo(e)
						})).length,
						a = Ot(i),
						n = bt(Y.FEATURES.ACTIVE_RULES, a); - 1 !== t.pathname.indexOf("create") && e < n && L(S.CONSTANTS.RULE_STATUS.ACTIVE)
				}), [s, L, i, t.pathname]), c.a.createElement(c.a.Fragment, null, c.a.createElement("label", {
					className: "custom-toggle ",
					style: {
						marginBottom: "-1%",
						marginRight: "1%"
					}
				}, c.a.createElement("input", {
					type: "checkbox",
					checked: C(),
					onChange: function(e) {
						if (C()) I(S.CONSTANTS.RULE_STATUS.INACTIVE);
						else {
							var t = s.filter((function(e) {
									return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE && !oo(e)
								})).length,
								a = Ot(i),
								n = bt(Y.FEATURES.ACTIVE_RULES, a);
							t >= n ? (A(n), N(a), h(!0)) : I(S.CONSTANTS.RULE_STATUS.ACTIVE)
						}
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle custom-toggle-slider-with-label",
					"data-label-off": "Off",
					"data-label-on": "On"
				})), R ? c.a.createElement(Dr, {
					isOpen: R,
					toggle: function() {
						h(!R)
					},
					featureName: Y.FEATURES.ACTIVE_RULES,
					featureLimit: p,
					userPlanName: O
				}) : null)
			},
			qs = function(e) {
				return Object.keys(e).filter((function(t) {
					return e[t]
				}))
			},
			Qs = function(e) {
				var t = Bs(e.location).MODE,
					a = Object(l.useContext)(X),
					n = a.dispatch,
					r = a.state,
					o = et(r),
					s = tt(r),
					i = {};
				i[o.id] = !0;
				var m = Object(l.useState)(""),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					A = Object(l.useState)(Y.FEATURES.RULES),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)(0),
					b = Object(u.a)(N, 2),
					g = b[0],
					h = b[1],
					C = Object(l.useState)(qs(i)),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = Object(l.useState)(!1),
					y = Object(u.a)(v, 2),
					P = y[0],
					U = y[1],
					D = Object(l.useState)(!1),
					w = Object(u.a)(D, 2),
					x = w[0],
					j = w[1];
				return c.a.createElement(c.a.Fragment, null, t === Y.RULE_EDITOR_CONFIG.MODES.EDIT ? c.a.createElement(de.a, {
					className: "btn-icon btn-3 mr-lg-4 my-3 my-lg-0 my-md-0 my-sm-0",
					color: "primary",
					type: "button",
					onClick: function() {
						n(Ut("loadingModal", !0));
						var e = Ot(s),
							t = bt(Y.FEATURES.SHARED_LISTS, e);
						Is(s.details.profile.uid).then((function(a) {
							(function(e) {
								return e ? Object.keys(e).length : 0
							})(a) >= t ? (h(t), p(e), O(Y.FEATURES.SHARED_LISTS), j(!0)) : (_(qs(i)), U(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, "rules", S.CONSTANTS.GA_EVENTS.ACTIONS.SHARED)), n(Ut("loadingModal", !1))
						}))
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.R, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Share Rule")) : null, P ? c.a.createElement(Rs, {
					isOpen: P,
					toggle: function() {
						U(!P)
					},
					rulesToShare: L
				}) : null, x ? c.a.createElement(Dr, {
					isOpen: x,
					toggle: function() {
						j(!x)
					},
					featureName: f,
					featureLimit: g,
					userPlanName: d,
					mode: 0 === g ? Y.LIMIT_REACHED_MODAL.MODES.CHECK_IF_ENABLED : Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT
				}) : null)
			},
			zs = function(e) {
				return c.a.createElement(me.a, {
					xs: "12",
					sm: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right align-self-center"
				}, c.a.createElement(Ks, {
					location: e.location
				}), c.a.createElement(Qs, {
					location: e.location
				}), c.a.createElement(Ys, {
					location: e.location
				}), c.a.createElement(Ws, null))
			},
			Js = function(e) {
				var t = e.currentlySelectedRuleConfig,
					a = e.topCountShowRequiredDataObject;
				return c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom ",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(ws, {
					currentlySelectedRuleConfig: t,
					topCountShowRequiredDataObject: a
				}), c.a.createElement(zs, {
					location: e.location
				})))
			},
			Xs = a(73),
			Zs = a(363),
			$s = function(e, t, a, n) {
				var r = JSON.parse(JSON.stringify(e));
				if ("string" === typeof a) t(Zs(r, ["pairs[".concat(n, "].").concat(a)]));
				else {
					var l = a.map((function(e) {
						return "pairs[".concat(n, "].").concat(e)
					}));
					t(Zs(r, l))
				}
			},
			ei = a(69),
			ti = function(e, t, a) {
				return ei(e.pairs[t], a, "")
			},
			ai = a(90),
			ni = a(69),
			ri = function(e, t, a, n, r) {
				if (null === n || 0 === n.length) $s(e, t, r, a);
				else {
					var l = JSON.parse(JSON.stringify(e)),
						c = n.map((function(e) {
							return e.value
						}));
					ai(l.pairs[a], r, c), t(l)
				}
			},
			li = function(e, t, a, n) {
				var r = ni(e.pairs[t], a, []);
				return n.filter((function(e) {
					return r.includes(e.value)
				}))
			},
			ci = [{
				label: "All (default)",
				value: "all",
				isDisabled: !0
			}, {
				label: "XHR",
				value: "xmlhttprequest"
			}, {
				label: "JS",
				value: "script"
			}, {
				label: "CSS",
				value: "stylesheet"
			}, {
				label: "Image",
				value: "image"
			}, {
				label: "Media",
				value: "media"
			}, {
				label: "Font",
				value: "font"
			}, {
				label: "Web Socket",
				value: "websocket"
			}, {
				label: "Main Document",
				value: "main_frame"
			}, {
				label: "iFrame Document",
				value: "sub_frame"
			}],
			oi = [{
				label: "All (default)",
				value: "all",
				isDisabled: !0
			}, {
				label: "GET",
				value: "GET"
			}, {
				label: "POST",
				value: "POST"
			}, {
				label: "PUT",
				value: "PUT"
			}, {
				label: "DELETE",
				value: "DELETE"
			}, {
				label: "PATCH",
				value: "PATCH"
			}, {
				label: "OPTIONS",
				value: "OPTIONS"
			}, {
				label: "TRACE",
				value: "TRACE"
			}, {
				label: "CONNECT",
				value: "CONNECT"
			}, {
				label: "HEAD",
				value: "HEAD"
			}],
			si = function(e) {
				switch (e) {
					case S.CONSTANTS.RULE_OPERATORS.EQUALS:
						return "e.g. http://www.example.com";
					case S.CONSTANTS.RULE_OPERATORS.CONTAINS:
						return "e.g. google";
					case S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES:
						return "e.g. *://*.mydomain.com/*";
					case S.CONSTANTS.RULE_OPERATORS.MATCHES:
						return "e.g. /example-([0-9]+)/ig";
					default:
						return "Select a condition first"
				}
			},
			ii = function(e) {
				var t = e.modifyPairAtGivenPath,
					a = e.pairIndex,
					n = Object(l.useContext)(X),
					r = n.dispatch,
					o = n.state,
					s = et(o),
					i = function(e) {
						return r(vt(e))
					},
					u = function() {
						switch (ti(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR)) {
							case S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES:
								return "Wildcard";
							case S.CONSTANTS.RULE_OPERATORS.MATCHES:
								return "RegEx";
							case "":
								return "Select";
							default:
								return ti(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR)
						}
					},
					m = function(e) {
						return c.a.createElement("span", {
							className: "float-right custom-tooltip",
							onClick: function() {
								$s(s, i, "source.filters.".concat(e), a), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.DELETE, "Rule source " + e + " filter modified")
							}
						}, c.a.createElement(Xs.a, null), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, "Clear Filter"))
					},
					E = {
						PAGE_URL_MODIFIED: function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "Rule source pageUrl filter modified")
						},
						RESOURCE_TYPE_MODIFIED: function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "Rule source resourceType filter modified")
						},
						REQUEST_METHOD_MODIFIED: function() {
							Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "Rule source requestMethod filter modified")
						}
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Xt.a, {
					className: "modal-dialog-centered max-width-60-percent",
					isOpen: !1 !== a
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "addFilterModalLabel"
				}, "Source Filters"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: function() {
						return e.closeModal()
					}
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto",
					sm: "12",
					md: "12",
					xs: "12",
					xl: "2"
				}, c.a.createElement("span", null, "Page URL")), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "12",
					md: "2",
					xs: "12",
					xl: "2"
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow has-transparent-bgcolor has-no-border all-caps-text",
					caret: !0,
					onClick: E.PAGE_URL_MODIFIED
				}, u()), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return t(e, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR, S.CONSTANTS.RULE_OPERATORS.EQUALS)
					}
				}, "Equals"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return t(e, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR, S.CONSTANTS.RULE_OPERATORS.CONTAINS)
					}
				}, "Contains"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return t(e, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR, S.CONSTANTS.RULE_OPERATORS.MATCHES)
					}
				}, "Matches (RegEx)"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return t(e, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR, S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES)
					}
				}, "Matches (Wildcard)")))), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "10",
					md: "9",
					xs: "12",
					xl: "7"
				}, c.a.createElement(Yt.a, {
					placeholder: si(ti(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_OPERATOR)),
					name: "description",
					type: "text",
					className: "has-dark-text height-two-rem",
					value: ti(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_VALUE),
					onChange: function(e) {
						t(e, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_PAGE_URL_VALUE), E.PAGE_URL_MODIFIED()
					},
					disabled: "Select" === u()
				})), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "2",
					md: "1",
					xs: "1",
					xl: "1"
				}, m(S.CONSTANTS.RULE_SOURCE_FILTER_TYPES.PAGE_URL))), c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto",
					sm: "12",
					md: "12",
					xs: "12",
					xl: "2"
				}, c.a.createElement("span", null, "Resource Type")), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "10",
					md: "11",
					xs: "12",
					xl: "9",
					style: {
						fontSize: "0.9em"
					}
				}, c.a.createElement(En.a, {
					isMulti: !0,
					name: "resource-type",
					options: ci,
					placeholder: "All (default)",
					value: li(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_RESOURCE_TYPE, ci),
					onChange: function(e) {
						ri(s, i, a, e, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_RESOURCE_TYPE), E.RESOURCE_TYPE_MODIFIED()
					}
				})), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "2",
					md: "1",
					xs: "12",
					xl: "1"
				}, m(S.CONSTANTS.RULE_SOURCE_FILTER_TYPES.RESOURCE_TYPE))), c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto",
					sm: "12",
					md: "12",
					xs: "12",
					xl: "2"
				}, c.a.createElement("span", null, "Request Method")), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "10",
					md: "11",
					xs: "12",
					xl: "9",
					style: {
						fontSize: "0.9em"
					}
				}, c.a.createElement(En.a, {
					isMulti: !0,
					name: "request-method",
					options: oi,
					placeholder: "All (default)",
					value: li(s, a, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_REQUEST_METHOD, oi),
					onChange: function(e) {
						return ri(s, i, a, e, S.CONSTANTS.PATH_FROM_PAIR.SOURCE_REQUEST_METHOD)
					}
				})), c.a.createElement(me.a, {
					className: "my-auto",
					sm: "2",
					md: "1",
					xs: "12",
					xl: "1"
				}, m(S.CONSTANTS.RULE_SOURCE_FILTER_TYPES.REQUEST_METHOD)))), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: function() {
						return e.closeModal()
					}
				}, "Close"))))
			},
			ui = function(e) {
				var t = e.isOpen,
					a = e.toggle,
					n = e.callback,
					r = Object(l.useContext)(X).state,
					o = tt(r),
					s = Object(l.useState)(!0),
					m = Object(u.a)(s, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)({}),
					S = Object(u.a)(p, 2),
					A = S[0],
					T = S[1],
					f = Object(l.useCallback)((function() {
						Fr(o.details.profile.uid).then((function(e) {
							T(e), d(!1)
						}))
					}), [o]);
				return Object(l.useLayoutEffect)((function() {
					o.loggedIn && o.details.profile && f()
				}), [o, f]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: t,
					toggle: a,
					style: {
						maxWidth: "70% "
					}
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Pick file from library"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body "
				}, o.loggedIn ? E ? c.a.createElement(Er, {
					customLoadingMessage: "Loading Files"
				}) : ae()(A) ? c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h5", null, "You havn't uploaded any file yet.", " ", c.a.createElement(i.b, {
					rel: "noopener noreferrer",
					target: "_blank",
					to: Y.PATHS.FILES.ABSOLUTE
				}, "Upload Now?"))) : c.a.createElement(Pr, {
					filesList: A,
					mode: Y.FILES_TABLE_CONSTANTS.MODES.FILE_PICKER,
					callback: n
				}) : c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", null, "You need to login first!"))), c.a.createElement("div", {
					className: "modal-footer ",
					style: {
						backgroundColor: "white",
						position: "sticky",
						bottom: "0",
						zIndex: "100"
					}
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, "Close")))
			},
			mi = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					o = r.generatePlaceholderText,
					s = r.modifyPairAtGivenPath,
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					lg: {
						size: "auto"
					},
					xl: {
						size: "auto"
					},
					className: "my-auto"
				}, c.a.createElement("span", null, "Destination")), c.a.createElement(me.a, {
					xl: "8",
					className: "my-auto"
				}, c.a.createElement(Bt.a, {
					className: "input-group-alternative has-traditional-border has-no-box-shadow"
				}, c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					placeholder: o(a.source.operator, "destination"),
					type: "text",
					onChange: function(e) {
						return s(e, n, "destination")
					},
					value: a.destination
				}), c.a.createElement(Vt.a, {
					addonType: "append",
					onClick: function(e) {
						d(!0)
					}
				}, c.a.createElement(Ht.a, {
					className: "icon-inside-inputgroup"
				}, c.a.createElement(R.u, {
					style: {
						cursor: "pointer"
					},
					id: "pick-from-library"
				}), c.a.createElement(Ur.a, {
					delay: 0,
					placement: "right",
					target: "pick-from-library"
				}, "Pick from Library")))))), E ? c.a.createElement(ui, {
					isOpen: E,
					toggle: function() {
						d(!E)
					},
					callback: function(e) {
						d(!1), s(void 0, n, "destination", e)
					}
				}) : null)
			},
			Ei = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					l = e.options,
					o = e.ruleDetails,
					s = r.modifyPairAtGivenPath,
					i = r.openFilterModal,
					u = r.getFilterCount,
					m = r.deletePair,
					E = r.generatePlaceholderText;
				return l = l || {}, c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					lg: {
						size: "auto"
					},
					xl: {
						size: "auto"
					},
					md: "3",
					sm: "12",
					xs: "12",
					className: "my-auto"
				}, c.a.createElement("span", null, "If request")), c.a.createElement(me.a, {
					xl: "1",
					lg: "5",
					md: "4",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "uppercase"
					},
					caret: !0
				}, a.source.key), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.URL)
					}
				}, "URL"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.HOST)
					}
				}, "Host"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.PATH)
					}
				}, "Path")))), c.a.createElement(me.a, {
					lg: "5",
					xl: {
						size: "auto"
					},
					md: "5",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "capitalize"
					},
					caret: !0
				}, a.source.operator === S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES ? "Wildcard" : a.source.operator === S.CONSTANTS.RULE_OPERATORS.MATCHES ? "RegEx" : a.source.operator), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.EQUALS)
					}
				}, "Equals"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.CONTAINS)
					}
				}, "Contains"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.MATCHES)
					}
				}, "Matches (RegEx)"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES)
					}
				}, "Matches (Wildcard)")))), c.a.createElement(me.a, {
					xl: "6",
					lg: "11",
					md: "11",
					sm: "12",
					xs: "12",
					className: "my-auto"
				}, c.a.createElement(Yt.a, {
					placeholder: o.ALLOW_APPLY_RULE_TO_ALL_URLS ? "Leave this field Empty to apply rule to all URLs" : E(a.source.operator, "source-value"),
					type: "text",
					onChange: function(e) {
						return s(e, n, "source.value")
					},
					className: "display-inline-block has-dark-text ",
					value: a.source.value
				})), o.ALLOW_REQUEST_SOURCE_FILTERS ? c.a.createElement(me.a, {
					className: "my-auto",
					sm: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement("span", {
					onClick: function() {
						return i(n)
					},
					id: "edit-filters",
					className: "my-3 my-sm-3 my-lg-auto my-md-auto my-xs-auto my-lg-auto my-md-auto",
					style: {
						cursor: "pointer"
					}
				}, c.a.createElement(R.v, {
					color: "#4A5868"
				}), " ", 0 !== u(n) ? c.a.createElement(qa.a, {
					style: {
						color: "#465967",
						backgroundColor: "#E5EAEF"
					}
				}, u(n)) : null), c.a.createElement(Ur.a, {
					delay: 0,
					placement: "right",
					target: "edit-filters"
				}, "Filters")) : null, o.SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW ? c.a.createElement(me.a, {
					className: "my-3 my-sm-3 my-lg-auto my-md-auto my-xs-auto my-lg-auto my-md-auto"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(R.W, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return m(e, n)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove Pair"))) : null)
			},
			di = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}), c.a.createElement(mi, {
					rowIndex: 2,
					pair: t,
					pairIndex: a,
					helperFunctions: n
				}))
			},
			pi = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				})
			},
			Si = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					l = r.modifyPairAtGivenPath,
					o = r.deletePair;
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					xl: "1",
					lg: "6",
					md: "4",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					caret: !0
				}, a.type), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, n, "type", S.CONSTANTS.MODIFICATION_TYPES.ADD)
					}
				}, "Add"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, n, "type", S.CONSTANTS.MODIFICATION_TYPES.REMOVE)
					}
				}, "Remove"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, n, "type", S.CONSTANTS.MODIFICATION_TYPES.MODIFY)
					}
				}, "Modify")))), c.a.createElement(me.a, {
					lg: "6",
					xl: "2",
					md: "5",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					caret: !0
				}, a.target), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, n, "target", S.CONSTANTS.HEADERS_TARGET.REQUEST)
					}
				}, S.CONSTANTS.HEADERS_TARGET.REQUEST), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, n, "target", S.CONSTANTS.HEADERS_TARGET.RESPONSE)
					}
				}, S.CONSTANTS.HEADERS_TARGET.RESPONSE)))), c.a.createElement(me.a, {
					xl: "4",
					lg: "5",
					className: "my-auto margin-bottom-1-when-xs margin-bottom-1-when-sm margin-bottom-1-when-md "
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "Header")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "Header Name",
					type: "text",
					value: a.header,
					onChange: function(e) {
						return l(e, n, "header")
					}
				}))), c.a.createElement(me.a, {
					xl: "4",
					lg: "6",
					className: "my-auto"
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "Value")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "Header Value",
					type: "text",
					value: a.value,
					onChange: function(e) {
						return l(e, n, S.CONSTANTS.RULE_KEYS.VALUE)
					},
					disabled: "Remove" === a.type
				}))), c.a.createElement(me.a, {
					xl: "1",
					lg: "1",
					className: "my-auto"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(R.W, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return o(e, n)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove Pair"))))
			},
			Ai = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Si, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n
				}), c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}))
			},
			Ti = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					l = r.modifyPairAtGivenPath,
					o = r.deletePair;
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					className: "my-auto margin-bottom-1-when-xs margin-bottom-1-when-sm",
					xl: "5",
					lg: "5",
					md: "5"
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "Replace")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "This part in URL",
					type: "text",
					onChange: function(e) {
						return l(e, n, "from")
					},
					value: a.from
				}))), c.a.createElement(me.a, {
					className: "my-auto",
					xl: "6",
					lg: "6",
					md: "6"
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "With")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "This part",
					type: "text",
					onChange: function(e) {
						return l(e, n, "to")
					},
					value: a.to
				}))), c.a.createElement(me.a, {
					className: "my-auto",
					xl: "1",
					lg: "1",
					md: "1"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(R.W, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return o(e, n)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove Pair"))))
			},
			fi = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ti, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n
				}), c.a.createElement(Ei, {
					rowIndex: 2,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}))
			},
			Oi = function(e) {
				var t = e.rowIndex,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.modification,
					l = e.modificationIndex,
					o = n.modifyPairAtGivenPath,
					s = n.deleteModification;
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					xl: "2",
					lg: "12",
					md: "12",
					sm: "12",
					xs: "12"
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "uppercase"
					},
					caret: !0
				}, r.type), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return o(e, a, "modifications[".concat(l, "].type"), "Add")
					}
				}, "Add/Replace"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return o(e, a, "modifications[".concat(l, "].type"), "Remove")
					}
				}, "Remove"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return o(e, a, "modifications[".concat(l, "].type"), "Remove All")
					}
				}, "Remove All")))), c.a.createElement(me.a, {
					className: "my-auto margin-bottom-1-when-xs margin-bottom-1-when-sm",
					xl: "4",
					lg: "5",
					md: "5"
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "Param")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "Param Name",
					type: "text",
					onChange: function(e) {
						return o(e, a, "modifications[".concat(l, "].param"))
					},
					value: r.param,
					disabled: "Remove All" === r.type
				}))), c.a.createElement(me.a, {
					className: "my-auto",
					xl: "4",
					lg: "6",
					md: "6"
				}, c.a.createElement(Bt.a, null, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, {
					style: {
						backgroundColor: "#F5F7F9"
					}
				}, "Value")), c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					style: {
						paddingLeft: "4px"
					},
					placeholder: "Param Value",
					type: "text",
					onChange: function(e) {
						return o(e, a, "modifications[".concat(l, "].value"))
					},
					value: r.value,
					disabled: "Add" !== r.type
				}))), c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(Xs.a, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return s(e, a, l)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove"))))
			},
			Ni = a(65),
			bi = Y.THEME_COLORS,
			gi = function(e) {
				var t = e.rowIndex,
					a = e.helperFunctions.addEmptyModification;
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					className: "my-auto",
					xl: {
						size: "auto",
						offset: 2
					}
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3 float-left has-no-box-shadow",
					color: "secondary",
					type: "button",
					outline: !0,
					size: "sm",
					style: {
						color: bi.BTN_COLOR_IN_ROW
					},
					onClick: a
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(Ni.a, {
					size: "1.5em"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Add Modification"))))
			},
			Ri = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails,
					l = n.pushValueToArrayInPair,
					o = n.deleteArrayValueByIndexInPair,
					s = function(e) {
						l(e, a, "modifications", i())
					},
					i = function() {
						return Object(E.a)(Object(E.a)({}, r.EMPTY_MODIFICATION_FORMAT), {}, {
							id: ca()
						})
					},
					u = function(e, t, a) {
						o(e, t, "modifications", a)
					};
				return 0 === t.modifications.length && s(), c.a.createElement(c.a.Fragment, null, c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}), t.modifications.map((function(e, r) {
					return c.a.createElement(Oi, {
						key: e.id,
						rowIndex: 2,
						pair: t,
						pairIndex: a,
						helperFunctions: Object(E.a)(Object(E.a)({}, n), {}, {
							deleteModification: u
						}),
						modification: e,
						modificationIndex: r
					})
				})), c.a.createElement(gi, {
					rowIndex: 3,
					pair: t,
					pairIndex: a,
					helperFunctions: Object(E.a)(Object(E.a)({}, n), {}, {
						addEmptyModification: s
					})
				}))
			},
			hi = a(90),
			Ci = a(69),
			Ii = function() {
				return Object.keys(S.CONSTANTS.SCRIPT_LIBRARIES).map((function(e) {
					return {
						value: e,
						label: S.CONSTANTS.SCRIPT_LIBRARIES[e].name
					}
				}))
			},
			Li = function(e) {
				var t = e.rowIndex,
					a = e.pairIndex,
					n = Object(l.useContext)(X),
					r = n.dispatch,
					o = n.state,
					s = et(o),
					i = function(e, t) {
						var n = JSON.parse(JSON.stringify(s)),
							l = [];
						e && (l = e.map((function(e) {
							return e.value
						}))), hi(n.pairs[a], t, l), r(vt(n))
					};
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					className: "my-auto",
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					}
				}, c.a.createElement("span", null, "Insert Libraries")), c.a.createElement(me.a, {
					xl: "5",
					lg: "6",
					className: "my-auto margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement(En.a, {
					isMulti: !0,
					name: "resource-type",
					options: Ii(),
					placeholder: "None",
					value: function(e, t) {
						var n = Ci(s.pairs[a], e, []);
						return t.filter((function(e) {
							return n.includes(e.value)
						}))
					}(S.CONSTANTS.PATH_FROM_PAIR.SCRIPT_LIBRARIES, Ii()),
					onChange: function(e) {
						return i(e, S.CONSTANTS.PATH_FROM_PAIR.SCRIPT_LIBRARIES)
					}
				})))
			},
			_i = Y.THEME_COLORS,
			vi = function(e) {
				var t = e.rowIndex,
					a = e.helperFunctions.addEmptyScript;
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					className: "my-auto",
					xl: {
						size: "auto",
						offset: 1
					},
					lg: {
						size: "auto",
						offset: 1
					}
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3 float-left has-no-box-shadow",
					color: "secondary",
					type: "button",
					outline: !0,
					size: "sm",
					style: {
						color: _i.BTN_COLOR_IN_ROW
					},
					onClick: a
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(Ni.a, {
					size: "1.5em"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Insert Custom Script"))))
			},
			yi = a(104);
		a(185), a(186), a(451);
		var Pi = function(e) {
				var t = e.rowIndex,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.script,
					o = e.scriptIndex,
					s = e.ruleDetails,
					i = n.modifyPairAtGivenPath,
					m = n.deleteScript,
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					A = d[1],
					T = function() {
						A(!p)
					},
					f = function(e) {
						A(!0)
					},
					O = function(e) {
						A(!1), i(void 0, a, "scripts[".concat(o, "].value"), e)
					},
					N = function(e, t) {
						i(e, a, "scripts[".concat(o, "].type"), t, [{
							path: "scripts[".concat(o, "].value"),
							value: ""
						}])
					};
				return c.a.createElement("div", {
					style: {
						border: "1px solid #d5dee6",
						borderRadius: "4px",
						padding: "1%",
						margin: "1%",
						boxShadow: "1px 1px #d5dee6"
					},
					key: t
				}, c.a.createElement(pe.a, {
					className: "margin-top-one"
				}, c.a.createElement(me.a, {
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement("span", null, "Code Type"), c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "uppercase"
					},
					caret: !0
				}, r.codeType), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return i(e, a, "scripts[".concat(o, "].codeType"), S.CONSTANTS.SCRIPT_CODE_TYPES.JS)
					}
				}, "JavaScript"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return i(e, a, "scripts[".concat(o, "].codeType"), S.CONSTANTS.SCRIPT_CODE_TYPES.CSS)
					}
				}, "CSS")))), c.a.createElement(me.a, {
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement("span", null, "Code Source"), c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "uppercase"
					},
					caret: !0
				}, r.type), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return N(e, S.CONSTANTS.SCRIPT_TYPES.URL)
					}
				}, "URL"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return N(e, S.CONSTANTS.SCRIPT_TYPES.CODE)
					}
				}, "Custom Code")))), r.codeType === S.CONSTANTS.SCRIPT_CODE_TYPES.JS ? c.a.createElement(me.a, {
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					}
				}, c.a.createElement("span", null, "Insert"), c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "capitalize"
					},
					caret: !0
				}, r.loadTime === S.CONSTANTS.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD ? "After Page Load" : "Before Page Load"), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return i(e, a, "scripts[".concat(o, "].loadTime"), S.CONSTANTS.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD)
					}
				}, "After Page Load"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return i(e, a, "scripts[".concat(o, "].loadTime"), S.CONSTANTS.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD)
					}
				}, "Before Page Load")))) : null, c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(Xs.a, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return m(e, a, o)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove")))), r.type === S.CONSTANTS.SCRIPT_TYPES.URL ? c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
					className: "margin-top-one"
				}, c.a.createElement(me.a, {
					lg: {
						size: "auto"
					},
					xl: {
						size: "auto"
					},
					className: "my-auto"
				}, c.a.createElement("span", null, "Source")), c.a.createElement(me.a, {
					xl: "8",
					className: "my-auto"
				}, c.a.createElement(Bt.a, {
					className: "input-group-alternative has-traditional-border has-no-box-shadow"
				}, c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					placeholder: "Enter Source URL (relative or absolute)",
					type: "text",
					onChange: function(e) {
						return i(e, a, "scripts[".concat(o, "].value"))
					},
					value: r.value
				}), c.a.createElement(Vt.a, {
					addonType: "append",
					onClick: f
				}, c.a.createElement(Ht.a, {
					className: "icon-inside-inputgroup"
				}, c.a.createElement(R.u, {
					style: {
						cursor: "pointer"
					},
					id: "pick-from-library"
				}), c.a.createElement(Ur.a, {
					delay: 0,
					placement: "right",
					target: "pick-from-library"
				}, "Pick from Library")))))), p ? c.a.createElement(ui, {
					isOpen: p,
					toggle: T,
					callback: O
				}) : null) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
					className: " margin-top-one"
				}, c.a.createElement(me.a, {
					xl: "10"
				}, c.a.createElement(yi.Controlled, {
					style: {
						borderRadius: "5px"
					},
					value: r.value,
					maxLength: "25",
					options: {
						mode: r.codeType === S.CONSTANTS.SCRIPT_CODE_TYPES.JS ? "javascript" : S.CONSTANTS.SCRIPT_CODE_TYPES.CSS,
						theme: "eclipse",
						autoCloseBrackets: !0,
						autoRefresh: !0,
						lineNumbers: !0,
						matchBrackets: {
							strict: !0
						},
						maxLength: 25,
						placeholder: "/* Type or Paste your code here */ \n"
					},
					onBeforeChange: function(e, t, n) {
						i(void 0, a, "scripts[".concat(o, "].value"), n)
					}
				}))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					className: "codemirror-character-count"
				}, s.CUSTOM_SCRIPT_CHARACTER_LIMIT - r.value.length, " ", "characters left")))))
			},
			Ui = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails,
					l = n.pushValueToArrayInPair,
					o = n.deleteArrayValueByIndexInPair,
					s = function() {
						return Object(E.a)(Object(E.a)({}, r.EMPTY_SCRIPT_FORMAT), {}, {
							id: ca()
						})
					},
					i = function(e, t, a) {
						e && e.preventDefault(), o(e, t, "scripts", a)
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}), c.a.createElement(Li, {
					rowIndex: 3,
					pair: t,
					pairIndex: a,
					helperFunctions: Object(E.a)({}, n)
				}), t.scripts.map((function(e, l) {
					return c.a.createElement(Pi, {
						key: e.id,
						rowIndex: 2,
						pair: t,
						pairIndex: a,
						helperFunctions: Object(E.a)(Object(E.a)({}, n), {}, {
							deleteScript: i
						}),
						ruleDetails: r,
						script: e,
						scriptIndex: l
					})
				})), c.a.createElement(vi, {
					helperFunctions: Object(E.a)(Object(E.a)({}, n), {}, {
						addEmptyScript: function(e) {
							e && e.preventDefault(), l(e, a, "scripts", s())
						}
					})
				}))
			};
		a(185), a(186);
		var Di = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					o = e.ruleDetails,
					s = r.modifyPairAtGivenPath,
					i = Object(l.useContext)(X).state,
					u = tt(i),
					m = Vs(u);
				return c.a.createElement(c.a.Fragment, {
					key: t
				}, c.a.createElement(pe.a, {
					className: "margin-top-one"
				}, c.a.createElement(me.a, null, c.a.createElement("span", null, "Response Body")), c.a.createElement(me.a, null, c.a.createElement("div", {
					className: "custom-control custom-checkbox mb-3 float-right my-auto"
				}, c.a.createElement("input", {
					className: "custom-control-input",
					id: "customCheck1",
					type: "checkbox",
					onChange: function(e) {
						a.response.type === S.CONSTANTS.RESPONSE_BODY_TYPES.STATIC ? s(null, n, "response.type", S.CONSTANTS.RESPONSE_BODY_TYPES.CODE, [{
							path: "response.value",
							value: o.RESPONSE_BODY_JAVASCRIPT_DEFAULT_VALUE
						}]) : s(null, n, "response.type", S.CONSTANTS.RESPONSE_BODY_TYPES.STATIC, [{
							path: "response.value",
							value: ""
						}])
					},
					checked: a.response.type !== S.CONSTANTS.RESPONSE_BODY_TYPES.STATIC
				}), c.a.createElement("label", {
					className: "custom-control-label",
					htmlFor: "customCheck1"
				}, "Modify using Javascript"), c.a.createElement(qa.a, {
					className: "margin-left-one",
					color: "info"
				}, "Beta")))), c.a.createElement(pe.a, {
					className: " margin-top-one"
				}, c.a.createElement(me.a, {
					xl: "12"
				}, c.a.createElement(yi.Controlled, {
					style: {
						borderRadius: "5px"
					},
					value: a.response.value,
					maxLength: m,
					options: {
						mode: "javascript",
						theme: "eclipse",
						autoCloseBrackets: !0,
						autoRefresh: !0,
						lineNumbers: !0,
						matchBrackets: {
							strict: !0
						},
						maxLength: m
					},
					onBeforeChange: function(e, t, a) {
						s(null, n, "response.value", a)
					}
				}))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					xl: "12"
				}, c.a.createElement("span", {
					className: "codemirror-character-count"
				}, m - ua(a.response.value), " ", "characters left"))))
			},
			wi = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}), c.a.createElement(Di, {
					rowIndex: 2,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}))
			},
			xi = function(e) {
				switch (e.envType) {
					case "device":
						return [{
							label: "Android",
							options: [{
								label: "Android Phone",
								value: {
									env: "andoid.phone",
									userAgent: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Mobile Safari/537.36"
								}
							}, {
								label: "Android Tablet",
								value: {
									env: "andoid.tablet",
									userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
								}
							}]
						}, {
							label: "Apple",
							options: [{
								label: "Apple iPhone",
								value: {
									env: "apple.iphone",
									userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
								}
							}, {
								label: "Apple iPad",
								value: {
									env: "apple.ipad",
									userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"
								}
							}]
						}, {
							label: "Windows",
							options: [{
								label: "Windows Phone",
								value: {
									env: "windows.phone",
									userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
								}
							}, {
								label: "Windows Tablet",
								value: {
									env: "windows.tablet",
									userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch; NOKIA; Lumia 920)"
								}
							}]
						}, {
							label: "Blackberry",
							options: [{
								label: "Blackberry Phone",
								value: {
									env: "blackberry.phone",
									userAgent: "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11"
								}
							}, {
								label: "Blackberry Tablet",
								value: {
									env: "blackberry.tablet",
									userAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8 (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8"
								}
							}]
						}, {
							label: "Symbian",
							options: [{
								label: "Symbian Phone",
								value: {
									env: "symbian_phone",
									userAgent: "Mozilla/5.0 (SymbianOS) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4 3gpp-gba"
								}
							}]
						}];
					case "browser":
						return [{
							label: "Google Chrome",
							options: [{
								label: "Chrome on Windows",
								value: {
									env: "chrome.windows",
									userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
								}
							}, {
								label: "Chrome on Macintosh",
								value: {
									env: "chrome.macintosh",
									userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
								}
							}, {
								label: "Chrome on Linux",
								value: {
									env: "chrome.linux",
									userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
								}
							}]
						}, {
							label: "Mozilla Firefox",
							options: [{
								label: "Firefox on Windows",
								value: {
									env: "firefox.windows",
									userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0"
								}
							}, {
								label: "Firfox on Macintosh",
								value: {
									env: "firefox.macintosh",
									userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:52.0) Gecko/20100101 Firefox/52.0"
								}
							}, {
								label: "Firfox on Linux",
								value: {
									env: "firefox.linux",
									userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0"
								}
							}]
						}, {
							label: "Safari",
							options: [{
								label: "Safari",
								value: {
									env: "safari",
									userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8"
								}
							}]
						}, {
							label: "Microsoft Internet Explorer",
							options: [{
								label: "Internet Explorer 6",
								value: {
									env: "msie.msie6",
									userAgent: "Mozilla/4.0(compatible; MSIE 6.0; Windows NT 5.1)"
								}
							}, {
								label: "Internet Explorer 7",
								value: {
									env: "msie.msie7",
									userAgent: "Mozilla/4.0(compatible; MSIE 7.0; Windows NT 6.0)"
								}
							}, {
								label: "Internet Explorer 8",
								value: {
									env: "msie.msie8",
									userAgent: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)"
								}
							}, {
								label: "Internet Explorer 9",
								value: {
									env: "msie.msie9",
									userAgent: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
								}
							}, {
								label: "Internet Explorer 10",
								value: {
									env: "msie.msie10",
									userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"
								}
							}, {
								label: "Internet Explorer 11",
								value: {
									env: "msie.msie11",
									userAgent: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
								}
							}]
						}, {
							label: "Microsoft Edge",
							options: [{
								label: "Microsoft Edge",
								value: {
									env: "msedge",
									userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"
								}
							}]
						}, {
							label: "Opera",
							options: [{
								label: "Opera 68",
								value: {
									env: "opera",
									userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100"
								}
							}]
						}];
					default:
						return []
				}
			},
			ji = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions.modifyPairAtGivenPath,
					l = function(e, t) {
						var a = [{
							path: "env",
							value: ""
						}];
						"custom" === t && a.push({
							path: "userAgent",
							value: window.navigator.userAgent
						}), r(e, n, "envType", t, a)
					};
				return c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					sm: "6",
					xs: "6",
					className: "my-auto"
				}, c.a.createElement("span", null, "UserAgent")), c.a.createElement(me.a, {
					xl: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					sm: "6",
					xs: "6",
					className: "my-auto"
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "capitalize"
					},
					caret: !0
				}, "" === a.envType ? "Select" : a.envType), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, "device")
					}
				}, "Device"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, "browser")
					}
				}, "Browser"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return l(e, "custom")
					}
				}, "Custom")))), c.a.createElement(me.a, {
					xl: "7",
					lg: "7",
					md: "7",
					sm: "12",
					xs: "12"
				}, "custom" === a.envType ? c.a.createElement(Yt.a, {
					placeholder: "Enter custom UserAgent string",
					type: "text",
					onChange: function(e) {
						return r(e, n, "userAgent")
					},
					className: "display-inline-block has-dark-text ",
					value: a.userAgent
				}) : c.a.createElement(En.a, {
					isMulti: !1,
					name: "env",
					options: xi(a),
					placeholder: "Type to search",
					value: {
						label: a.env.replace("msie.msie", "Internet Explorer ").replace(/[.|_]/, " ")
					},
					onChange: function(e) {
						var t;
						r(null, n, "env", (t = e).value.env, [{
							path: "userAgent",
							value: t.value.userAgent
						}])
					},
					styles: {
						valueContainer: function() {
							return {
								textTransform: "capitalize",
								fontSize: "0.9em",
								marginLeft: "2%"
							}
						}
					},
					noOptionsMessage: function() {
						return "Please select device type first"
					}
				})))
			},
			ki = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ei, {
					rowIndex: 1,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}), c.a.createElement(ji, {
					rowIndex: 2,
					pair: t,
					pairIndex: a,
					helperFunctions: n
				}))
			},
			Mi = function(e) {
				var t = e.rowIndex,
					a = e.pair,
					n = e.pairIndex,
					r = e.helperFunctions,
					l = e.options,
					o = e.ruleDetails,
					s = r.modifyPairAtGivenPath,
					i = r.openFilterModal,
					u = r.getFilterCount,
					m = r.deletePair,
					E = r.generatePlaceholderText;
				l = l || {};
				var d = function(e) {
					return Number(e) >= S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MIN_DELAY_VALUE && Number(e) <= S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_NON_XHR
				};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
					className: " margin-top-one",
					key: t
				}, c.a.createElement(me.a, {
					lg: {
						size: "auto"
					},
					xl: {
						size: "auto"
					},
					md: "3",
					sm: "12",
					xs: "12",
					style: {
						marginTop: "0.7rem"
					}
				}, c.a.createElement("span", null, "If request")), c.a.createElement(me.a, {
					xl: "1",
					lg: "5",
					md: "4",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					},
					style: {
						marginTop: "0.2rem"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "uppercase"
					},
					caret: !0
				}, a.source.key), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.URL)
					}
				}, "URL"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.HOST)
					}
				}, "Host"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_KEYS, S.CONSTANTS.RULE_KEYS.PATH)
					}
				}, "Path")))), c.a.createElement(me.a, {
					lg: "5",
					xl: {
						size: "auto"
					},
					md: "5",
					sm: {
						size: "auto"
					},
					xs: {
						size: "auto"
					},
					style: {
						marginTop: "0.2rem"
					}
				}, c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "has-no-box-shadow",
					style: {
						textTransform: "capitalize"
					},
					caret: !0
				}, a.source.operator === S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES ? "Wildcard" : a.source.operator === S.CONSTANTS.RULE_OPERATORS.MATCHES ? "RegEx" : a.source.operator), c.a.createElement(qt.a, null, c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.EQUALS)
					}
				}, "Equals"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.CONTAINS)
					}
				}, "Contains"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.MATCHES)
					}
				}, "Matches (RegEx)"), c.a.createElement(Qt.a, {
					onClick: function(e) {
						return s(e, n, S.CONSTANTS.PATH_FROM_PAIR.RULE_OPERATORS, S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES)
					}
				}, "Matches (Wildcard)")))), c.a.createElement(me.a, {
					xl: "4",
					lg: "11",
					md: "11",
					sm: "12",
					xs: "12",
					className: "mb-auto"
				}, c.a.createElement(Yt.a, {
					placeholder: o.ALLOW_APPLY_RULE_TO_ALL_URLS ? "Leave this field Empty to apply rule to all URLs" : E(a.source.operator, "source-value"),
					type: "text",
					onChange: function(e) {
						return s(e, n, "source.value")
					},
					className: "display-inline-block has-dark-text ",
					value: a.source.value
				})), o.ALLOW_REQUEST_SOURCE_FILTERS ? c.a.createElement(me.a, {
					sm: {
						size: "auto"
					},
					md: {
						size: "auto"
					},
					lg: {
						size: "auto"
					},
					xs: {
						size: "auto"
					},
					style: {
						marginTop: "0.7rem"
					}
				}, c.a.createElement("span", {
					onClick: function() {
						return i(n)
					},
					id: "edit-filters",
					style: {
						cursor: "pointer"
					}
				}, c.a.createElement(R.v, {
					color: "#4A5868"
				}), " ", 0 !== u(n) ? c.a.createElement(qa.a, {
					style: {
						color: "#465967",
						backgroundColor: "#E5EAEF"
					}
				}, u(n)) : null), c.a.createElement(Ur.a, {
					delay: 0,
					placement: "right",
					target: "edit-filters"
				}, "Filters")) : null, c.a.createElement(me.a, {
					lg: {
						size: "auto"
					},
					xl: {
						size: "auto"
					},
					style: {
						marginTop: "0.7rem"
					}
				}, c.a.createElement("span", null, "Delay (ms)")), c.a.createElement(me.a, {
					sm: "2",
					xl: "3",
					className: "mb-auto mt-sm-2 mt-xl-auto"
				}, c.a.createElement(Yt.a, {
					className: "display-inline-block has-dark-text",
					placeholder: "Time in ms",
					type: "text",
					onChange: function(e) {
						return s(e, n, "delay")
					},
					value: a.delay,
					invalid: !d(a.delay)
				}), c.a.createElement(Co.a, {
					className: d(a.delay) ? "invisible d-block" : ""
				}, "Should lie between ".concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MIN_DELAY_VALUE, " and ").concat(S.CONSTANTS.DELAY_REQUEST_CONSTANTS.MAX_DELAY_VALUE_NON_XHR))), o.SHOW_DELETE_PAIR_ICON_ON_SOURCE_ROW ? c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("span", {
					className: "float-right custom-tooltip"
				}, c.a.createElement(R.W, {
					id: "delete-pair",
					color: "#4A5868",
					onClick: function(e) {
						return m(e, n)
					},
					style: {
						cursor: "pointer"
					}
				}), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "Remove Pair"))) : null))
			},
			Gi = function(e) {
				var t = e.pair,
					a = e.pairIndex,
					n = e.helperFunctions,
					r = e.ruleDetails;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Mi, {
					rowIndex: 2,
					pair: t,
					pairIndex: a,
					helperFunctions: n,
					ruleDetails: r
				}))
			},
			Fi = function(e, t, a) {
				var n = JSON.parse(JSON.stringify(e));
				n.pairs.push(Ms(t)), ks(a, n)
			},
			Bi = a(90),
			Vi = a(69),
			Hi = function(e, t) {
				if ("source-value" === t) switch (e) {
					case S.CONSTANTS.RULE_OPERATORS.EQUALS:
						return "e.g. http://www.example.com";
					case S.CONSTANTS.RULE_OPERATORS.CONTAINS:
						return "e.g. google";
					case S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES:
						return "e.g. *://*.mydomain.com/*";
					case S.CONSTANTS.RULE_OPERATORS.MATCHES:
						return "e.g. /example-([0-9]+)/ig";
					default:
						return ""
				} else if ("destination" === t) switch (e) {
					case S.CONSTANTS.RULE_OPERATORS.EQUALS:
					case S.CONSTANTS.RULE_OPERATORS.CONTAINS:
						return "e.g. http://www.new-example.com";
					case S.CONSTANTS.RULE_OPERATORS.WILDCARD_MATCHES:
						return "e.g. $1://$2.newdomain.com/$3 (Each * can be replaced with respective $)";
					case S.CONSTANTS.RULE_OPERATORS.MATCHES:
						return "e.g. http://www.new-example.com?queryParam=$1&searchParam=$2";
					default:
						return ""
				}
				return ""
			},
			Yi = function(e) {
				var t = Object(l.useContext)(X),
					a = t.dispatch,
					n = t.state,
					r = et(n),
					o = function(e) {
						return a(vt(e))
					},
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = function(e, t, a, n, l) {
						e && e.preventDefault();
						var c;
						c = void 0 !== n ? n : e.target.value;
						var s = JSON.parse(JSON.stringify(r));
						Bi(s.pairs[t], a, c), l && l.forEach((function(e) {
							Bi(s.pairs[t], e.path, e.value)
						})), o(s)
					},
					p = function(e, t) {
						e && e.preventDefault();
						var a = JSON.parse(JSON.stringify(r));
						a.pairs.splice(t, 1), o(a)
					},
					A = function(e) {
						E(e), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "Rule Filters Modal Opened")
					},
					T = function(e) {
						return Object.keys(r.pairs[e].source.filters || {}).length
					},
					f = function(e, t, a, n) {
						e && e.preventDefault();
						var l = JSON.parse(JSON.stringify(r)),
							c = Vi(l.pairs[t], a);
						Bi(l.pairs[t], a, [].concat(Object(Rt.a)(c), [n])), o(l)
					},
					O = function(e, t, a, n) {
						e && e.preventDefault();
						var l = JSON.parse(JSON.stringify(r));
						Vi(l.pairs[t], a).splice(n, 1), o(l)
					};
				return r.pairs && 0 === r.pairs.length && Fi(r, e.currentlySelectedRuleConfig, a), c.a.createElement(c.a.Fragment, null, r.pairs ? r.pairs.map((function(t, a) {
					return c.a.createElement(pe.a, {
						key: t.id || a
					}, c.a.createElement("div", {
						className: "source-destination-pair  width-100 zero-padding-top-imp"
					}, function(t, a) {
						var n = {
							modifyPairAtGivenPath: d,
							generatePlaceholderText: Hi,
							openFilterModal: A,
							deletePair: p,
							getFilterCount: T,
							pushValueToArrayInPair: f,
							deleteArrayValueByIndexInPair: O
						};
						switch (e.currentlySelectedRuleConfig.TYPE) {
							case S.CONSTANTS.RULE_TYPES.REDIRECT:
								return c.a.createElement(di, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.CANCEL:
								return c.a.createElement(pi, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.REPLACE:
								return c.a.createElement(fi, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.HEADERS:
								return c.a.createElement(Ai, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.QUERYPARAM:
								return c.a.createElement(Ri, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.SCRIPT:
								return c.a.createElement(Ui, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.RESPONSE:
								return c.a.createElement(wi, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.USERAGENT:
								return c.a.createElement(ki, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								});
							case S.CONSTANTS.RULE_TYPES.DELAY:
								return c.a.createElement(Gi, {
									pair: t,
									pairIndex: a,
									helperFunctions: n,
									ruleDetails: e.currentlySelectedRuleConfig
								})
						}
					}(t, a)))
				})) : null, !1 !== m ? c.a.createElement(ii, {
					pairIndex: m,
					closeModal: function() {
						E(!1), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, S.CONSTANTS.GA_EVENTS.ACTIONS.MODIFIED, "Rule Filters Modal Closed")
					},
					modifyPairAtGivenPath: d
				}) : null)
			},
			Wi = function(e) {
				var t = e.setIsChangeRuleGroupModalActive,
					a = e.currentlySelectedGroup;
				return c.a.createElement("b", {
					onClick: function() {
						return t(!0)
					},
					style: {
						cursor: "pointer"
					}
				}, "".concat(a, " /"))
			},
			Ki = function(e, t, a) {
				ks(t, Object(E.a)(Object(E.a)({}, e), {}, {
					[a.target.name]: a.target.value
				}))
			},
			qi = function() {
				var e = Object(l.useContext)(X),
					t = e.dispatch,
					a = e.state,
					n = et(a);
				return c.a.createElement(Yt.a, {
					placeholder: "Rule Name",
					name: "name",
					type: "text",
					className: "has-only-bottom-border has-dark-text height-two-rem",
					value: n.name,
					onChange: function(e) {
						return Ki(n, t, e)
					},
					autoFocus: !0
				})
			},
			Qi = function() {
				var e = Object(l.useContext)(X),
					t = e.dispatch,
					a = e.state,
					n = et(a);
				return c.a.createElement(Yt.a, {
					placeholder: "Description (optional)",
					name: "description",
					type: "text",
					className: "has-only-bottom-border has-dark-text height-two-rem",
					value: n.description,
					onChange: function(e) {
						return Ki(n, t, e)
					}
				})
			},
			zi = function(e) {
				var t = e.currentlySelectedRuleConfig;
				return c.a.createElement(me.a, {
					xl: "10",
					lg: "11",
					md: "11",
					sm: "10",
					xs: "9"
				}, c.a.createElement("span", null, t.PAIR_CONFIG.TITLE))
			},
			Ji = Y.THEME_COLORS,
			Xi = function(e) {
				var t = e.currentlySelectedRuleConfig,
					a = Object(l.useContext)(X),
					n = a.dispatch,
					r = a.state,
					o = tt(r),
					s = et(r),
					i = Object(l.useState)(0),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(""),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(Y.FEATURES.RULE_PAIRS),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Object(l.useState)(0),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = Object(l.useState)(!1),
					v = Object(u.a)(_, 2),
					y = v[0],
					P = v[1];
				Object(l.useEffect)((function() {
					d(s.pairs.length)
				}), [s]);
				return c.a.createElement(me.a, {
					xl: "2",
					lg: "1",
					md: "1",
					sm: "2",
					xs: "3"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3 has-no-box-shadow float-right has-no-border",
					color: "secondary",
					type: "button",
					outline: !0,
					size: "sm",
					onClick: function() {
						var e = Ot(o),
							a = bt(Y.FEATURES.RULE_PAIRS, e);
						E < a ? (Fi(s, t, n), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE_PAIRS, S.CONSTANTS.GA_EVENTS.ACTIONS.CREATED, "New.rule.pair.made", E)) : (L(a), f(e), g(Y.FEATURES.RULE_PAIRS), P(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE_PAIRS, S.CONSTANTS.GA_EVENTS.ACTIONS.LIMIT_REACHED, "Rule.pairs.limit.reached", E))
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.I, {
					color: Ji.PRIMARY_COLOR,
					size: "1.5em"
				})), c.a.createElement("span", {
					style: {
						color: Ji.PRIMARY_COLOR
					},
					className: "btn-inner--text text-nowrap d-none d-md-inline-block d-lg-inline-block"
				}, "Add Pair")), y ? c.a.createElement(Dr, {
					isOpen: y,
					toggle: function() {
						P(!y)
					},
					featureName: b,
					featureLimit: I,
					userPlanName: T,
					mode: 0 === I ? Y.LIMIT_REACHED_MODAL.MODES.CHECK_IF_ENABLED : Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT
				}) : null)
			},
			Zi = function(e) {
				var t = e.currentlySelectedRuleConfig,
					a = e.setIsChangeRuleGroupModalActive,
					n = e.currentlySelectedGroup,
					r = e.mode;
				return c.a.createElement(Ae.a, null, c.a.createElement(pe.a, {
					className: "one-margin-bottom"
				}, r !== Y.RULE_EDITOR_CONFIG.MODES.SHARED_LIST_RULE_VIEW ? c.a.createElement(me.a, {
					className: "col-auto text-xl-right text-md-right text-lg-right",
					style: {
						paddingRight: "0px",
						marginRight: "0px"
					}
				}, c.a.createElement(Wi, {
					currentlySelectedRuleConfig: t,
					setIsChangeRuleGroupModalActive: a,
					currentlySelectedGroup: n
				})) : null, c.a.createElement(me.a, null, c.a.createElement(qi, null)), c.a.createElement(me.a, {
					md: "7",
					xs: "12",
					sm: "6",
					className: " text-xl-right text-md-right text-lg-right "
				}, c.a.createElement(Qi, null))), c.a.createElement(pe.a, {
					className: "one-margin-bottom"
				}, c.a.createElement(zi, {
					currentlySelectedRuleConfig: t
				}), t.ALLOW_ADD_PAIR ? c.a.createElement(Xi, {
					currentlySelectedRuleConfig: t
				}) : null), c.a.createElement(Yi, {
					currentlySelectedRuleConfig: t
				}))
			},
			$i = a(105),
			eu = function(e) {
				var t = e.mode,
					a = {
						CURRENT_RULE: "CURRENT_RULE",
						SELECTED_RULES: "SELECTED_RULES"
					},
					n = Object(l.useContext)(X),
					r = n.dispatch,
					o = n.state,
					s = Object(l.useCallback)(r, []),
					i = et(o),
					m = Ze(o),
					d = ze(o),
					p = lt(o),
					A = st(o),
					T = Object(l.useState)([]),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)([]),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = Object(l.useCallback)((function(e) {
						return t === a.SELECTED_RULES ? [] : e.filter((function(e) {
							return e.value === i.groupId
						}))
					}), [O]),
					I = function(e) {
						if (t === a.CURRENT_RULE) {
							var n = Object(E.a)(Object(E.a)({}, i), {}, {
								groupId: e
							});
							r(vt(n))
						} else(function(e, t, a) {
							return new Promise((function(n, r) {
								var l = es(t);
								ae()(l) && r(), Kl(e).getAllRecords().then((function(t) {
									var r = [];
									l.forEach((function(e) {
										r.push(Object(E.a)(Object(E.a)({}, t[e]), {}, {
											groupId: a
										}))
									})), Kl(e).saveMultipleRulesOrGroups(r).then((function() {
										return n()
									}))
								}))
							}))
						})(A, m, e).then((function() {
							$o(r), r(_t("rules", !p))
						})).catch((function() {
							le.b.warn("Please select the rules first", {
								hideProgressBar: !0
							})
						}))
					};
				return Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.GROUP, S.CONSTANTS.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, "Modify Rules Group"), Object(l.useEffect)((function() {
					Kl(A).getRecords(S.CONSTANTS.OBJECT_TYPES.GROUP).then((function(e) {
						s(It(e))
					}))
				}), [s, i, A]), Object(l.useEffect)((function() {
					N(d.map((function(e) {
						return {
							label: e.name,
							value: e.id
						}
					})))
				}), [d]), Object(l.useEffect)((function() {
					h(C(O))
				}), [h, C, O]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: e.isOpen,
					toggle: e.toggle
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Change Group"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("span", null, "Select Group")), c.a.createElement(me.a, {
					className: "my-auto",
					style: {
						fontSize: "0.9em"
					}
				}, c.a.createElement($i.a, {
					isMulti: !1,
					name: "select-group",
					options: O,
					placeholder: "Select or Type",
					value: R,
					onChange: function(t) {
						t.__isNew__ ? function(e, t, a) {
							var n = "Group_".concat(ca());
							Kl(e).saveRuleOrGroup({
								creationDate: la(),
								description: "",
								id: n,
								name: t,
								objectType: S.CONSTANTS.OBJECT_TYPES.GROUP,
								status: S.CONSTANTS.RULE_STATUS.INACTIVE
							}).then((function() {
								a(n)
							}))
						}(A, t.label, I) : I(t.value), e.toggle()
					}
				})))), c.a.createElement("div", {
					className: "modal-footer "
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, "Close")))
			},
			tu = Y.RULE_EDITOR_CONFIG,
			au = Y.RULE_TYPES_CONFIG,
			nu = Y.RULES_LIST_TABLE_CONSTANTS,
			ru = nu.UNGROUPED_GROUP_ID,
			lu = nu.UNGROUPED_GROUP_NAME,
			cu = function(e) {
				var t = Bs(e.location, e.isSharedListViewRule),
					a = t.MODE,
					n = t.RULE_TYPE_TO_CREATE,
					r = t.RULE_TO_EDIT_ID,
					o = Object(ee.g)(),
					s = Object(l.useContext)(X),
					i = s.dispatch,
					m = s.state,
					E = et(m),
					d = function(e) {
						return $e(e).config
					}(m),
					p = qe(m),
					A = st(m),
					T = tt(m),
					f = Object(l.useRef)(!1),
					O = Object(l.useState)(!1),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					R = Object(l.useState)(""),
					h = Object(u.a)(R, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(!1),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = Object(l.useCallback)(Fs, [Fs]),
					U = Object(l.useCallback)(ks, [ks]),
					D = Object(l.useCallback)(Gs, [d]);
				if (Object(l.useEffect)((function() {
						!1 === E && (a === tu.MODES.CREATE ? (D(i, d, n, ks), P(i, au[n], o)) : a === tu.MODES.EDIT ? Kl(A).getRecord(r).then((function(e) {
							void 0 === e ? Fe(o) : f.current || (U(i, e), P(i, au[e.ruleType], o))
						})) : a === tu.MODES.SHARED_LIST_RULE_VIEW ? e.rule && (f.current || (U(i, e.rule), P(i, au[e.rule.ruleType], o))) : Fe(o))
					}), [d, E, a, D, U, r, n, i, o, P, e.rule, A]), Object(l.useEffect)((function() {
						E.groupId === ru ? I(lu) : void 0 !== E.groupId && Kl(A).getRecord(E.groupId).then((function(e) {
							I(e ? e.name : lu)
						}))
					}), [E.groupId, A]), !b && ae()(p) && Kl(A).getRecords(S.CONSTANTS.OBJECT_TYPES.RULE).then((function(e) {
						g(!0), i(Lt(e, []))
					})), Object(l.useEffect)((function() {
						return function() {
							f.current = !0,
								function(e) {
									e(Pt())
								}(i)
						}
					}), [i]), !1 === d || void 0 === d || void 0 === d.NAME || void 0 === E.name) return c.a.createElement(Er, {
					renderHeader: !0
				});
				var w = {
					numOfRulePairsOfUser: E.pairs.length,
					planName: Ot(T),
					planRulePairLimit: bt(Y.FEATURES.RULE_PAIRS, Ot(T))
				};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, null, a !== tu.MODES.SHARED_LIST_RULE_VIEW ? c.a.createElement(Js, {
					currentlySelectedRuleConfig: d,
					topCountShowRequiredDataObject: w,
					location: e.location
				}) : null, c.a.createElement(Zi, {
					currentlySelectedRuleConfig: d,
					setIsChangeRuleGroupModalActive: y,
					currentlySelectedGroup: C,
					mode: a
				})))), v ? c.a.createElement(eu, {
					isOpen: v,
					toggle: function() {
						y(!v)
					},
					mode: "CURRENT_RULE"
				}) : null)
			},
			ou = function(e) {
				var t = e.rule,
					a = e.isOpen,
					n = e.toggle;
				return t ? c.a.createElement(Xt.a, {
					className: "modal-dialog-centered max-width-80-percent ",
					isOpen: a,
					toggle: n
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Preview Rule - Read only"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: n
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement(cu, {
					rule: t,
					isSharedListViewRule: !0
				})) : c.a.createElement("span", null)
			},
			su = a(90),
			iu = a(69),
			uu = Y.RULES_LIST_TABLE_CONSTANTS,
			mu = uu.GROUP_DETAILS,
			Eu = uu.GROUP_RULES,
			du = uu.UNGROUPED_GROUP_ID,
			pu = uu.UNGROUPED_GROUP_NAME,
			Su = function(e) {
				var t = e.rules,
					a = e.groups,
					n = e.options,
					r = Object(l.useContext)(X),
					o = r.dispatch,
					s = r.state,
					i = nt(s),
					d = t || qe(s),
					p = a || ze(s),
					S = Je(s),
					A = Xe(s),
					T = Object(l.useState)({
						[du]: !1
					}),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					R = g[0],
					h = g[1],
					C = Object(l.useState)(!1),
					I = Object(u.a)(C, 2),
					L = I[0],
					_ = I[1],
					v = function(e) {
						o(function(e) {
							return {
								type: m.UPDATE_RULES_TO_POPULATE,
								payload: e
							}
						}(e))
					},
					y = function(e) {
						o({
							type: m.UPDATE_GROUPWISE_RULES_TO_POPULATE,
							payload: e
						})
					},
					P = Object(l.useCallback)((function() {
						var e = d.filter((function(e) {
							return !oo(e)
						}));
						0 === i.length ? v(e) : v(e.filter((function(e) {
							return e.name.match(new RegExp(i, "i"))
						})))
					}), [d, i]),
					U = Object(l.useCallback)((function() {
						var e = {};
						su(e, "".concat(du, ".").concat(mu), {}), su(e, "".concat(du, ".").concat(Eu), []), p.forEach((function(t) {
							su(e, "".concat(t.id, ".").concat(mu), t), su(e, "".concat(t.id, ".").concat(Eu), [])
						})), S.sort(lo).forEach((function(t) {
							iu(e, "".concat(t.groupId, ".").concat(Eu), []).push(t)
						})), y(e)
					}), [S]),
					D = function(e, t) {
						e.preventDefault(), void 0 === O[t] ? N(Object(E.a)(Object(E.a)({}, O), {}, {
							[t]: !1
						})) : N(Object(E.a)(Object(E.a)({}, O), {}, {
							[t]: !O[t]
						})), Ma("group", "collapsed", "Group Collapsed")
					},
					w = function(e) {
						return 0 === i.length && (void 0 === O[e] || O[e])
					},
					x = function(e) {
						return iu(A, "".concat(e, ".").concat(mu, ".name"), pu)
					},
					j = function(e) {
						return iu(A, "".concat(e, ".").concat(Eu), []).length
					};
				Object(l.useEffect)((function() {
					P()
				}), [P]), Object(l.useEffect)((function() {
					U()
				}), [U]), Object(l.useEffect)((function() {
					o(It(p))
				}), [o, p]);
				return c.a.createElement("tbody", {
					style: {
						cursor: "pointer"
					}
				}, function() {
					if (0 !== S.length) {
						var e = Object.entries(A);
						return e.sort(co), e.push(e.shift()), e.map((function(e) {
							var t = Object(u.a)(e, 2),
								a = t[0],
								r = t[1];
							return c.a.createElement(Ds, {
								key: a,
								groupId: a,
								groupData: r,
								toggleGroupCollapse: D,
								checkIfGroupIsCollapsed: w,
								getGroupName: x,
								getGroupRulesCount: j,
								options: n,
								openRuleViewerInModal: function(e) {
									_(e), h(!0)
								}
							})
						}))
					}
					return c.a.createElement(_r, null)
				}(), R ? c.a.createElement(ou, {
					isOpen: R,
					toggle: function() {
						h(!R)
					},
					rule: L
				}) : null)
			},
			Au = function(e, t) {
				e(function(e) {
					return {
						type: m.SELECT_ALL_RULES,
						payload: {
							newValue: e
						}
					}
				}(t))
			},
			Tu = Y.RULES_LIST_TABLE_CONSTANTS.COLUMN_WIDTHS,
			fu = function(e) {
				var t = e.rules,
					a = e.groups,
					n = e.options,
					r = Object(l.useContext)(X).dispatch,
					o = Object(l.useState)(!0),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = [{
						columnData: "Select",
						styles: {
							cursor: "pointer"
						},
						onClickHandler: function() {
							n && n.disableSelection || (Au(r, i), m(!i))
						}
					}, {
						columnData: "Fav"
					}, {
						columnData: "Type"
					}, {
						columnData: "Rule Details"
					}, {
						columnData: "Status"
					}, {
						columnData: "Last Modified"
					}, {
						columnData: "Actions"
					}],
					f = Object(l.useCallback)((function() {
						$o(r)
					}), []);
				Object(l.useEffect)((function() {
					return f
				}), [f]);
				var O = function() {
					return A(window.innerWidth < 620)
				};
				return Object(l.useEffect)((function() {
					return window.addEventListener("resize", O),
						function() {
							return window.removeEventListener("resize", O)
						}
				}), [S]), c.a.createElement(Ka.a, {
					className: "align-items-center table-flush table-hover",
					style: S ? {} : {
						tableLayout: "fixed"
					},
					responsive: !0
				}, c.a.createElement("thead", {
					className: "thead-light",
					style: {
						position: "sticky",
						top: "0"
					}
				}, c.a.createElement("tr", {
					key: "0",
					style: {
						position: "sticky",
						top: "0"
					}
				}, T.map((function(e, t) {
					var a = e.columnData,
						n = e.styles,
						r = e.onClickHandler;
					return c.a.createElement("th", {
						key: t,
						scope: "col",
						className: "text-align-center",
						style: Object(E.a)({
							width: Tu[t] + "%"
						}, n),
						onClick: r
					}, a)
				})))), c.a.createElement(Su, {
					rules: t,
					groups: a,
					options: n
				}))
			},
			Ou = function(e) {
				var t = Object(l.useContext)(X),
					a = t.dispatch,
					n = t.state,
					r = lt(n),
					o = st(n),
					s = Object(l.useState)([]),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = function(t) {
						var n = "Group_".concat(ca());
						Kl(o).saveRuleOrGroup({
							creationDate: la(),
							description: "",
							id: n,
							name: t,
							objectType: S.CONSTANTS.OBJECT_TYPES.GROUP,
							status: S.CONSTANTS.RULE_STATUS.INACTIVE
						}).then((function() {
							a(_t("rules", !r)), e.toggle()
						}))
					};
				return Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.GROUP, S.CONSTANTS.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, "Create New Rules Group"), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: e.isOpen,
					toggle: e.toggle
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Create New Group"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("span", null, "Enter Group Name")), c.a.createElement(me.a, {
					className: "my-auto",
					style: {
						fontSize: "0.9em"
					}
				}, c.a.createElement($i.a, {
					isMulti: !1,
					name: "select-group",
					placeholder: "Enter Group Name",
					onChange: function(e) {
						E(e.label), d(e.label)
					},
					value: m
				})))), c.a.createElement("div", {
					className: "modal-footer "
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, "Close")))
			},
			Nu = a(163),
			bu = function(e) {
				Nu(e, "requestly_rules.txt", "text/plain")
			},
			gu = function(e) {
				var t = e.toggle,
					a = e.isOpen,
					n = e.rulesToExport,
					r = Object(l.useContext)(X).state,
					o = Xe(r),
					s = st(r),
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = function() {
						return c.a.createElement(me.a, {
							lg: "12",
							md: "12",
							xl: "12",
							sm: "12",
							xs: "12",
							className: "text-center"
						}, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Mo.a, null)), c.a.createElement("h5", null, "Please select a rule before exporting"))
					};
				return Object(l.useEffect)((function() {
					E || function(e, t, a) {
						return new Promise((function(n, r) {
							ro(e, t, a).then((function(e) {
								var t = e.rules,
									a = e.groups;
								n({
									fileContent: JSON.stringify(t.concat(a), null, 2),
									rulesCount: t.length,
									groupsCount: a.length
								})
							}))
						}))
					}(s, n, o).then((function(e) {
						d(e)
					}))
				}), [n, o, E, s]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: t
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Export Rules Wizard"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body "
				}, E ? 0 === E.rulesCount ? p() : (Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.EXPORTED, "Group Exported", E.rulesCount), c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2 cursor-pointer",
					onClick: function() {
						return bu(E.fileContent)
					}
				}, c.a.createElement(R.o, null)), c.a.createElement("br", null), c.a.createElement("b", null, "Your download will begin in a moment. If it doesn't,", " ", c.a.createElement("span", {
					style: {
						cursor: "pointer"
					},
					onClick: function() {
						return bu(E.fileContent)
					}
				}, "click here"), "."), c.a.createElement("br", null), c.a.createElement("p", null, c.a.createElement("b", null, "Total Rules Exported: "), E.rulesCount, " ", c.a.createElement("br", null), c.a.createElement("b", null, "Total Groups Exported: "), E.groupsCount))) : c.a.createElement(fe, {
					customLoadingMessage: "Preparing data to export"
				})), c.a.createElement("div", {
					className: "modal-footer ",
					style: {
						backgroundColor: "white",
						position: "sticky",
						bottom: "0",
						zIndex: "100"
					}
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, "Close")))
			},
			Ru = function() {
				var e = Object(ea.a)($t.a.mark((function e(t, a, n) {
					var r;
					return $t.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = [], a.forEach((function(e) {
									r.push(Kl(t).removeRecord(e))
								})), e.next = 4, Promise.all(r);
							case 4:
								return e.abrupt("return", n());
							case 5:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a, n) {
					return e.apply(this, arguments)
				}
			}(),
			hu = function(e) {
				var t = e.toggle,
					a = e.isOpen,
					n = e.rulesToDelete,
					r = Object(l.useContext)(X),
					o = r.dispatch,
					s = r.state,
					i = Je(s),
					m = lt(s),
					E = st(s),
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)(!1),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = function(e) {
						var a = e.showConfirmationBtn;
						return c.a.createElement("div", {
							className: "modal-footer ",
							style: {
								backgroundColor: "white",
								position: "sticky",
								bottom: "0",
								zIndex: "100"
							}
						}, a ? c.a.createElement(de.a, {
							color: "primary",
							"data-dismiss": "modal",
							type: "button",
							onClick: function() {
								return A(!0)
							}
						}, "Yes") : null, c.a.createElement(de.a, {
							color: "secondary",
							"data-dismiss": "modal",
							type: "button",
							onClick: t
						}, "Close"))
					},
					g = function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: "modal-body "
						}, c.a.createElement(me.a, {
							lg: "12",
							md: "12",
							xl: "12",
							sm: "12",
							xs: "12",
							className: "text-center"
						}, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Mo.a, null)), c.a.createElement("h5", null, "Please select a rule before deleting"))), b({
							showConfirmationBtn: !1
						}))
					},
					h = Object(l.useCallback)((function() {
						N(!0), o(_t("rules", !m)), t(), $o(o)
					}), [i, o]);
				return Object(l.useEffect)((function() {
					S && !O && Ru(E, n, h).then((function() {}))
				}), [S, O, n, h, E]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: t
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Delete Rules"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: t
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), S ? O ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("b", null, "Successfully deleted rules"))), b({
					showConfirmationBtn: !1
				})) : c.a.createElement(fe, {
					customLoadingMessage: "Deleting Rules"
				}) : 0 === n.length ? g() : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2"
				}, c.a.createElement(R.W, null)), c.a.createElement("b", null, "Are you sure to delete the selected rules?"), c.a.createElement("p", null, c.a.createElement("b", null, "Total Rules Selected: "), n.length, " ", c.a.createElement("br", null)))), b({
					showConfirmationBtn: !0
				})))
			},
			Cu = function(e) {
				var t = e.groupId,
					a = e.isOpen,
					n = e.toggle,
					r = t.groupId,
					o = Object(l.useContext)(X),
					s = o.state,
					i = o.dispatch,
					m = lt(s),
					d = st(s),
					p = Object(l.useState)({}),
					S = Object(u.a)(p, 2),
					A = S[0],
					T = S[1],
					f = Object(l.useState)(""),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useState)(!0),
					h = Object(u.a)(g, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(!1),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = function(e) {
						y(!0), Kl(d).saveRuleOrGroup(Object(E.a)(Object(E.a)({}, A), {}, {
							name: N,
							modificationDate: la()
						})).then((function() {
							le.b.info("Renamed Group"), i(_t("rules", !m)), n()
						}))
					};
				return Object(l.useLayoutEffect)((function() {
					Kl(d).getRecord(r).then((function(e) {
						e && e.name && (T(e), b(e.name), I(!1))
					}))
				}), [r, d]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: n
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Rename Group"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: n
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), C ? c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(fe, null))) : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto",
					style: {
						fontSize: "0.9em"
					}
				}, c.a.createElement(Yt.a, {
					className: "has-dark-text",
					placeholder: "New Group Name",
					value: N,
					onChange: function(e) {
						return b(e.target.value)
					}
				})))), c.a.createElement("div", {
					className: "modal-footer "
				}, c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					onClick: P
				}, v ? c.a.createElement(R.S, {
					className: "icon-spin"
				}) : "Save"), c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: n
				}, "Close"))))
			},
			Iu = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					a = e.dispatch,
					n = Ze(t),
					r = tt(t),
					o = qe(t),
					s = ot(t),
					i = Object.values(S.CONSTANTS.RULE_TYPES),
					m = Object(ee.g)(),
					E = Object(l.useState)(""),
					d = Object(u.a)(E, 2),
					p = d[0],
					A = d[1],
					T = Object(l.useState)(Y.FEATURES.RULES),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(0),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = Object(l.useState)(es(n)),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = Object(l.useState)(0),
					P = Object(u.a)(y, 2),
					U = P[0],
					D = P[1],
					w = es(n).length,
					x = Object(l.useState)(!1),
					j = Object(u.a)(x, 2),
					k = j[0],
					M = j[1],
					G = Object(l.useState)(!1),
					F = Object(u.a)(G, 2),
					B = F[0],
					V = F[1],
					H = Object(l.useState)(!1),
					W = Object(u.a)(H, 2),
					K = W[0],
					q = W[1],
					Q = Object(l.useState)(!1),
					z = Object(u.a)(Q, 2),
					J = z[0],
					Z = z[1],
					$ = Object(l.useState)(!1),
					te = Object(u.a)($, 2),
					ae = te[0],
					ne = te[1],
					le = Object(l.useState)(!1),
					ce = Object(u.a)(le, 2),
					oe = ce[0],
					se = ce[1],
					ie = Object(l.useState)(!1),
					ue = Object(u.a)(ie, 2),
					Ee = ue[0],
					Ae = ue[1],
					Te = Object(l.useState)(!1),
					fe = Object(u.a)(Te, 2),
					Oe = fe[0],
					Ne = fe[1],
					be = Object(l.useState)(!1),
					ge = Object(u.a)(be, 2),
					Re = ge[0],
					he = ge[1],
					Ce = function() {
						V(!B)
					},
					Ie = function() {
						a(Ut("authModal", !0, {
							redirectURL: window.location.href,
							src: Y.FEATURES.RULES,
							callback: function() {
								return V(!0)
							}
						}))
					},
					Le = function() {
						var e = Ot(r),
							t = bt(Y.FEATURES.RULES, e);
						o.filter((function(e) {
							return !oo(e)
						})).length >= t ? (C(t), A(e), N(Y.FEATURES.RULES), he(!0)) : V(!0)
					},
					_e = function() {
						r.loggedIn ? Pe() : Ie()
					},
					ve = function(e) {
						return e ? Object.keys(e).length : 0
					},
					Pe = function() {
						a(Ut("loadingModal", !0));
						var e = Ot(r),
							t = bt(Y.FEATURES.SHARED_LISTS, e);
						Is(r.details.profile.uid).then((function(r) {
							ve(r) >= t ? (C(t), A(e), N(Y.FEATURES.SHARED_LISTS), he(!0)) : (v(es(n)), Ne(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULE, "rules", S.CONSTANTS.GA_EVENTS.ACTIONS.SHARED)), a(Ut("loadingModal", !1))
						}))
					},
					Ue = function(e) {
						r.loggedIn ? De() : Ie()
					},
					De = function() {
						Ae(!0)
					},
					we = function() {
						r.loggedIn ? xe() : Ie()
					},
					xe = function() {
						var e = Ot(r);
						Nt(Y.FEATURES.EXPORT_IMPORT, e) ? (v(es(n)), ne(!0)) : (C(0), A(e), N(Y.FEATURES.EXPORT_IMPORT), he(!0))
					},
					je = function() {
						return M(window.innerWidth < 620)
					};
				return window.clearRulesSelection = !1, Object(l.useEffect)((function() {
					return window.addEventListener("resize", je),
						function() {
							return window.removeEventListener("resize", je)
						}
				}), [k]), Object(l.useEffect)((function() {
					i.forEach((function(e) {
						var t = o.filter((function(t) {
							return t.ruleType === e && !t.MKTRuleID
						}));
						Ga(e + "_rules", t.length)
					})), r && r.details && r.details.profile ? Is(r.details.profile.uid).then((function(e) {
						var t = ve(e);
						Ga(S.CONSTANTS.GA_EVENTS.ATTR.NUM_SHARED_LISTS, t), t > 0 && Ga("iscreatesharedlisttask", !0)
					})) : (Ga(S.CONSTANTS.GA_EVENTS.ATTR.NUM_SHARED_LISTS, 0), Ga("iscreatesharedlisttask", !1))
				}), [o, i, r]), Object(l.useEffect)((function() {
					var e = o.filter((function(e) {
						return void 0 === e.MKTRuleID
					}));
					D(e.length)
				}), [o]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, w ? null : c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Manage Rules", " ", "bronze" === Ot(r) ? "(".concat(U, "/").concat(function() {
					var e = Ot(r);
					return bt(Y.FEATURES.RULES, e)
				}(), " Rules Created)") : null, "bronze" === Ot(r) ? c.a.createElement("button", {
					className: "text-primary btn btn-link",
					style: {
						cursor: "pointer"
					},
					onClick: function(e) {
						e.preventDefault(), ye(m), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.RULES, S.CONSTANTS.GA_EVENTS.ACTIONS.REMOVE_LIMIT_CLICKED, "remove.limit.clicked@rules.page", U)
					}
				}, "Remove Limits") : null)), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function(e) {
						r.loggedIn ? Le() : Ie()
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.H, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "New Rule")), c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "btn-icon-only background-color-unset",
					role: "button",
					size: "sm",
					color: ""
				}, c.a.createElement("i", {
					className: "fas fa-ellipsis-v"
				})), c.a.createElement(qt.a, {
					className: "dropdown-menu-arrow",
					right: !0
				}, c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), q(!0)
					}
				}, c.a.createElement(R.x, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "New Group")), c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), Z(!0)
					}
				}, c.a.createElement(R.w, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Change Group")), c.a.createElement(Qt.a, {
					onClick: _e
				}, c.a.createElement(R.R, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Share Rules")), c.a.createElement(Qt.a, {
					onClick: Ue
				}, c.a.createElement(Be.c, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Import Rules")), c.a.createElement(Qt.a, {
					onClick: we
				}, c.a.createElement(R.o, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Export Rules")), c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), se(!0)
					}
				}, c.a.createElement(R.W, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Delete Rules")))))), w ? c.a.createElement(pe.a, {
					className: "align-items-center justify-content-between"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, w, " Rules Selected", " ", c.a.createElement("button", {
					className: "text-primary btn btn-link",
					style: {
						cursor: "pointer"
					},
					onClick: function() {
						Au(a, !1)
					}
				}, "Clear Selection"))), c.a.createElement(me.a, {
					xs: "12",
					xl: "8",
					lg: "8",
					md: "8",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, k ? null : c.a.createElement(c.a.Fragment, null, c.a.createElement(de.a, {
					className: "btn-icon btn-3 mb-sm-1",
					color: "primary",
					type: "button",
					onClick: function() {
						v(es(n)), Z(!0)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.w, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Change Group")), c.a.createElement(de.a, {
					className: "btn-icon btn-3 mb-sm-1",
					color: "primary",
					type: "button",
					onClick: _e
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.R, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Share Rules")), c.a.createElement(de.a, {
					className: "btn-icon btn-3 mb-sm-1",
					color: "primary",
					type: "button",
					onClick: Ue
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(Be.c, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Import Rules")), c.a.createElement(de.a, {
					className: "btn-icon btn-3 mb-sm-1",
					color: "primary",
					type: "button",
					onClick: we
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.o, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Export Rules")), c.a.createElement(de.a, {
					className: "btn-icon btn-3 mb-sm-1",
					color: "primary",
					type: "button",
					onClick: function() {
						v(es(n)), se(!0)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.W, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Delete Rules"))), k ? c.a.createElement(Wt.a, null, c.a.createElement(Kt.a, {
					className: "btn background-color-unset",
					role: "button",
					size: "md",
					color: ""
				}, c.a.createElement("span", null, "Actions\xa0", c.a.createElement("i", {
					className: "fas fa-ellipsis-v"
				}))), c.a.createElement(qt.a, {
					className: "dropdown-menu-arrow",
					right: !0
				}, c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), q(!0)
					}
				}, c.a.createElement(R.x, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "New Group")), c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), Z(!0)
					}
				}, c.a.createElement(R.w, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Change Group")), c.a.createElement(Qt.a, {
					onClick: _e
				}, c.a.createElement(R.R, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Share Rules")), c.a.createElement(Qt.a, {
					onClick: Ue
				}, c.a.createElement(Be.c, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Import Rules")), c.a.createElement(Qt.a, {
					onClick: we
				}, c.a.createElement(R.o, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Export Rules")), c.a.createElement(Qt.a, {
					onClick: function() {
						v(es(n)), se(!0)
					}
				}, c.a.createElement(R.W, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "Delete Rules")))) : null)) : null), c.a.createElement(fu, null)))), B ? c.a.createElement(jo, {
					isOpen: B,
					toggle: Ce,
					onClickHandler: Ce
				}) : null, K ? c.a.createElement(Ou, {
					isOpen: K,
					toggle: function() {
						q(!K)
					}
				}) : null, J ? c.a.createElement(eu, {
					isOpen: J,
					toggle: function() {
						Z(!J)
					},
					mode: "SELECTED_RULES"
				}) : null, ae ? c.a.createElement(gu, {
					isOpen: ae,
					toggle: function() {
						ne(!ae)
					},
					rulesToExport: _
				}) : null, oe ? c.a.createElement(hu, {
					isOpen: oe,
					toggle: function() {
						se(!oe)
					},
					rulesToDelete: _
				}) : null, Ee ? c.a.createElement(qo, {
					isOpen: Ee,
					toggle: function() {
						Ae(!Ee)
					}
				}) : null, Oe ? c.a.createElement(Rs, {
					isOpen: Oe,
					toggle: function() {
						Ne(!Oe)
					},
					rulesToShare: _
				}) : null, Re ? c.a.createElement(Dr, {
					isOpen: Re,
					toggle: function() {
						he(!Re)
					},
					featureName: O,
					featureLimit: h,
					userPlanName: p,
					mode: 0 === h ? Y.LIMIT_REACHED_MODAL.MODES.CHECK_IF_ENABLED : Y.LIMIT_REACHED_MODAL.MODES.CHECK_LIMIT
				}) : null, s.renameGroupModal.isActive ? c.a.createElement(Cu, Object.assign({
					isOpen: s.renameGroupModal.isActive,
					toggle: function() {
						a(Ut("renameGroupModal"))
					}
				}, s.renameGroupModal.props)) : null))
			},
			Lu = S.CONSTANTS.GA_EVENTS,
			_u = function() {
				var e = Object(l.useContext)(X),
					t = e.dispatch,
					a = e.state,
					n = qe(a).filter((function(e) {
						return !oo(e)
					})),
					r = lt(a),
					o = st(a),
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useCallback)(t, []);
				return Object(l.useEffect)((function() {
					var e = Kl(o).getRecords(S.CONSTANTS.OBJECT_TYPES.GROUP),
						t = Kl(o).getRecords(S.CONSTANTS.OBJECT_TYPES.RULE);
					Promise.all([e, t]).then((function(e) {
						var t = e[0],
							a = e[1];
						d(Lt(a, t)), E(!0), Ga(Lu.ATTR.NUM_RULES, a.length), Ga(Lu.ATTR.NUM_ACTIVE_RULES, a.filter((function(e) {
							return e.status === S.CONSTANTS.RULE_STATUS.ACTIVE
						})).length), Ga(Lu.ATTR.NUM_GROUPS, t.length), Ga(Lu.ATTR.NUM_ACTIVE_GROUPS, t.filter((function(e) {
							return e.status === S.CONSTANTS.GROUP_STATUS.ACTIVE
						})).length)
					}))
				}), [d, r, o]), c.a.createElement(c.a.Fragment, null, c.a.createElement(Po, null), m ? 0 !== n.length ? c.a.createElement(Iu, null) : c.a.createElement(zo, null) : c.a.createElement(Er, {
					customLoadingMessage: "Loading Rules"
				}))
			},
			vu = function() {
				var e = Object(l.useContext)(X).state,
					t = st(e);
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), t === S.CONSTANTS.APP_MODES.DESKTOP || Ul() ? c.a.createElement(_u, null) : c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(Xl, {
					heading: "Get Started",
					content: "Please install Requestly Browser Extension to setup rules to modify network requests."
				})))
			},
			yu = function(e) {
				var t = e.location;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(cu, {
					location: t
				})))
			},
			Pu = function() {
				var e = Object(l.useState)(""),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(0),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(0),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					A = Object(l.useContext)(X).state,
					T = st(A),
					f = function() {
						xl().then((function(e) {
							n(e.storageType), i(e.numItems), p(e.bytesUsed)
						}))
					},
					O = function(e) {
						e !== a && ("sync" === e && (s > 80 || d > 8e4) ? alert("Unable to change storage type. Too much data to be stored in Sync Storage.") : Bl(e).then((function(e) {
							f(), le.b.info("StorageType changed successfully!")
						})))
					};
				return Object(l.useEffect)((function() {
					T === S.CONSTANTS.APP_MODES.EXTENSION && f()
				}), [T]), T === S.CONSTANTS.APP_MODES.DESKTOP ? c.a.createElement(No, {
					customErrorMessage: "All Requeslty rules get saved to your system as of now. We'll soon introduce a feature to move them to cloud and sync across devices."
				}) : a ? c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement("h3", null, "These are the default extension settings"), c.a.createElement(c.a.Fragment, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					}
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "my-auto col-auto"
				}, c.a.createElement("strong", null, "Select Storage Type")), c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "card-stats mb-4 mb-lg-0 cursor-pointer",
					style: {
						border: "sync" === a ? "1px solid " + Y.THEME_COLORS.PRIMARY_COLOR : ""
					},
					onClick: function() {
						return O("sync")
					}
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(wn.a, {
					className: "text-uppercase text-muted "
				}, "Sync Storage", " ", "sync" === a ? c.a.createElement(R.g, {
					style: {
						color: Y.THEME_COLORS.PRIMARY_COLOR
					}
				}) : null), c.a.createElement("span", null, "Sync data between multiple devices when user is logged in browser profile.")), c.a.createElement(me.a, {
					className: "col-auto"
				}, c.a.createElement("div", {
					className: "icon icon-shape bg-primary text-white rounded-circle shadow"
				}, c.a.createElement(Ni.b, null)))), c.a.createElement("p", {
					className: "mt-3  text-muted text-sm"
				}, c.a.createElement("span", {
					className: "text-nowrap"
				}, "Prefer when you have less than 75 rules."))))), c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "card-stats mb-4 mb-lg-0 cursor-pointer",
					style: {
						border: "local" === a ? "1px solid " + Y.THEME_COLORS.PRIMARY_COLOR : ""
					},
					onClick: function() {
						return O("local")
					}
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(wn.a, {
					className: "text-uppercase text-muted "
				}, "Local Storage", " ", "local" === a ? c.a.createElement(R.g, {
					style: {
						color: Y.THEME_COLORS.PRIMARY_COLOR
					}
				}) : null), c.a.createElement("span", null, "Store data locally to current browser. It has more capacity than Sync Storage.")), c.a.createElement(me.a, {
					className: "col-auto"
				}, c.a.createElement("div", {
					className: "icon icon-shape bg-primary text-white rounded-circle shadow"
				}, c.a.createElement(Ni.c, null)))), c.a.createElement("p", {
					className: "mt-3  text-muted text-sm"
				}, c.a.createElement("span", {
					className: "text-nowrap"
				}, "Prefer when you have more than 75 rules.")))))))))))))) : c.a.createElement(Xl, {
					heading: "Requestly Extension Settings",
					content: "Please install Requestly Browser Extension first."
				})
			},
			Uu = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(Pu, null))
					}
				}]), a
			}(c.a.Component),
			Du = function(e, t, a) {
				a(Object(E.a)(Object(E.a)({}, t), {}, {
					[e]: !t[e]
				}))
			},
			wu = function(e) {
				var t = e.sharedListId,
					a = (e.sharedListDetails, e.columnWidth),
					n = e.setCurrentlySelectedLists,
					r = e.currentlySelectedLists;
				return c.a.createElement("td", {
					className: "text-align-center cursor-pointer",
					style: {
						width: a
					},
					onClick: function(e) {
						return Du(t, r, n)
					}
				}, c.a.createElement("div", {
					className: "custom-control custom-checkbox"
				}, c.a.createElement("input", {
					type: "checkbox",
					className: "custom-control-input",
					checked: !!r[t],
					onChange: function(e) {
						e.stopPropagation(), Du(t, r, n)
					},
					id: "select-box-" + t
				}), c.a.createElement("label", {
					className: "custom-control-label checkbox-empty-label",
					htmlFor: "select-box-" + t,
					onClick: function(e) {
						return e.stopPropagation()
					}
				})))
			},
			xu = function(e) {
				var t = e.sharedListId,
					a = e.sharedListDetails,
					n = e.columnWidth,
					r = e.currentlySelectedLists,
					l = e.setCurrentlySelectedLists,
					o = Object(ee.g)();
				return c.a.createElement("td", {
					className: "text-align-center nowrap overflow-hidden cursor-pointer",
					style: {
						width: n
					},
					onClick: function() {
						return Du(t, r, l)
					}
				}, c.a.createElement("span", {
					className: "underline-text-on-hover",
					onClick: function(e) {
						e.stopPropagation(), Ie(o, t, a.listName)
					}
				}, a.listName))
			},
			ju = function(e) {
				var t = e.sharedListId,
					a = e.sharedListDetails,
					n = e.columnWidth,
					r = e.currentlySelectedLists,
					o = e.setCurrentlySelectedLists,
					s = Object(l.useState)(""),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = S.CONSTANTS.getSharedListURL(t, a.listName);
				return c.a.createElement("td", {
					className: "text-align-center nowrap overflow-hidden cursor-pointer",
					style: {
						width: n
					},
					onClick: function() {
						return Du(t, r, o)
					}
				}, c.a.createElement("span", {
					onClick: function(e) {
						return e.stopPropagation()
					}
				}, c.a.createElement(Or.CopyToClipboard, {
					text: d,
					onCopy: function() {
						Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.COPIED, "SharedList url copied from index page"), E(d)
					}
				}, c.a.createElement("span", {
					className: "cursor-pointer",
					id: "url" + t
				}, d)), c.a.createElement(Ur.a, {
					delay: 0,
					trigger: "hover focus",
					target: "url" + t
				}, m === d ? "Copied" : "Copy To Clipboard")))
			},
			ku = function(e) {
				var t = e.sharedListId,
					a = e.sharedListDetails,
					n = e.columnWidth,
					r = e.currentlySelectedLists,
					l = e.setCurrentlySelectedLists;
				return c.a.createElement("td", {
					className: "text-align-center cursor-pointer",
					style: {
						width: n
					},
					onClick: function() {
						return Du(t, r, l)
					}
				}, ra(a.creationDate))
			},
			Mu = function(e, t) {
				var a = function(e, t) {
						return kr(e).concat(t)
					}(e, t),
					n = Da.setValue(a, null),
					r = Mr(t),
					l = Da.setValue(r, null);
				return Promise.all([n, l])
			},
			Gu = function(e, t) {
				e(function(e) {
					return {
						type: m.UPDATE_SELECTED_SHARED_LISTS,
						payload: e
					}
				}(t))
			},
			Fu = function(e) {
				var t = e.sharedListIdsToDeleteArray,
					a = e.userId,
					n = e.isOpen,
					r = e.toggle,
					o = Object(l.useContext)(X).dispatch,
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = function(e) {
						var t = e.showConfirmationBtn;
						return c.a.createElement("div", {
							className: "modal-footer ",
							style: {
								backgroundColor: "white",
								position: "sticky",
								bottom: "0",
								zIndex: "100"
							}
						}, t ? c.a.createElement(de.a, {
							color: "primary",
							"data-dismiss": "modal",
							type: "button",
							onClick: function() {
								return A(!0)
							}
						}, "Yes") : null, c.a.createElement(de.a, {
							color: "secondary",
							"data-dismiss": "modal",
							type: "button",
							onClick: r
						}, "Close"))
					},
					f = function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: "modal-body "
						}, c.a.createElement(me.a, {
							lg: "12",
							md: "12",
							xl: "12",
							sm: "12",
							xs: "12",
							className: "text-center"
						}, c.a.createElement("h1", {
							className: "display-2"
						}, c.a.createElement(Mo.a, null)), c.a.createElement("h5", null, "Please select a list before deleting"))), T({
							showConfirmationBtn: !1
						}))
					},
					O = Object(l.useCallback)((function(e) {
						var n = [];
						return t.forEach((function(e) {
							n.push(Mu(a, e))
						})), Promise.all(n)
					}), []);
				return Object(l.useEffect)((function() {
					S && !m && O().then((function() {
						E(!0), Gu(o, {}),
							function(e) {
								e(_t("sharedLists"))
							}(o), r()
					}))
				}), [S, m, O, r, o]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: n,
					toggle: r
				}, c.a.createElement("div", {
					className: "modal-header "
				}, c.a.createElement("h5", {
					className: "modal-title",
					id: "exampleModalLabel"
				}, "Delete List"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: r
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), S ? m ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("b", null, "Successfully deleted lists"))), T({
					showConfirmationBtn: !1
				})) : c.a.createElement(fe, {
					customLoadingMessage: "Deleting Lists"
				}) : ae()(t) ? f() : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					xl: "12",
					sm: "12",
					xs: "12",
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-2"
				}, c.a.createElement(R.W, null)), c.a.createElement("b", null, "Are you sure to delete the selected lists?"), c.a.createElement("p", null, c.a.createElement("b", null, "Total Lists Selected: "), t.length, " ", c.a.createElement("br", null)))), T({
					showConfirmationBtn: !0
				})))
			},
			Bu = function(e) {
				var t = e.sharedListId,
					a = e.sharedListDetails,
					n = e.columnWidth,
					r = e.isHovering,
					o = Object(ee.g)(),
					s = Object(l.useContext)(X).state,
					i = tt(s),
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = function(e) {
						Ie(o, t, a.listName)
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("td", {
					className: "text-right",
					style: {
						width: n
					}
				}, c.a.createElement("div", {
					className: "d-lg-flex d-none justify-content-end"
				}, c.a.createElement("span", {
					onClick: S,
					className: r ? "all-direct-children-have-margin cursor-pointer" : "all-direct-children-have-margin text-light",
					style: {
						fontSize: "1.3em"
					}
				}, c.a.createElement("span", {
					className: "custom-tooltip "
				}, c.a.createElement(R.t, null), c.a.createElement("span", {
					className: "custom-tooltiptext"
				}, "View"))), null), c.a.createElement("div", {
					className: "d-block d-lg-none"
				}, c.a.createElement(Wt.a, {
					direction: "left"
				}, c.a.createElement(Kt.a, {
					className: "btn-icon-only background-color-unset",
					role: "button",
					size: "sm",
					color: ""
				}, c.a.createElement("i", {
					className: "fas fa-ellipsis-v"
				})), c.a.createElement(qt.a, {
					className: "dropdown-menu-arrow",
					right: !0
				}, c.a.createElement(Qt.a, {
					onClick: S
				}, c.a.createElement(R.t, null), c.a.createElement("span", {
					className: "cursor-pointer"
				}, "View")), null)))), d ? c.a.createElement(Fu, {
					isOpen: d,
					toggle: function() {
						p(!d)
					},
					sharedListIdsToDeleteArray: new Array(t),
					userId: i.details.profile.uid
				}) : null)
			},
			Vu = Y.SHARED_LISTS_TABLE_CONSTANTS.COLUMN_WIDTHS,
			Hu = [wu, xu, ju, ku, Bu],
			Yu = function(e) {
				var t = e.sharedListId,
					a = e.sharedListDetails,
					n = e.currentlySelectedLists,
					r = e.setCurrentlySelectedLists;
				return c.a.createElement(c.a.Fragment, null, function(e, t, a, n) {
					return c.a.createElement(fr.a, {
						key: e
					}, (function(r) {
						var l = r.isHovering;
						return c.a.createElement(c.a.Fragment, null, Hu.map((function(r, o) {
							return c.a.createElement(r, {
								sharedListDetails: t,
								sharedListId: e,
								key: o,
								isHovering: l,
								columnWidth: Vu[o] + "%",
								currentlySelectedLists: a,
								setCurrentlySelectedLists: n
							})
						})))
					}))
				}(t, a, n, r))
			},
			Wu = function() {
				return c.a.createElement("tr", null, c.a.createElement("td", {
					colSpan: "7"
				}, c.a.createElement("center", null, c.a.createElement("h2", {
					style: {
						margin: "2rem"
					}
				}, "Couldn`t find any list matching the given keyword."))))
			},
			Ku = function(e) {
				var t = e.sharedLists,
					a = Object(l.useContext)(X),
					n = a.dispatch,
					r = a.state,
					o = function(e) {
						return at(e).sharedLists
					}(r),
					s = ct(r),
					i = function(e) {
						return Gu(n, e)
					},
					u = Object(l.useCallback)(i, []),
					m = Object.entries(t),
					E = ae()(o) ? m : m.filter((function(e) {
						return e[1].listName.match(new RegExp(o, "i"))
					}));
				return Object(l.useEffect)((function() {
					return function() {
						u({}), n(yt("sharedLists", ""))
					}
				}), [n, u]), c.a.createElement("tbody", null, ae()(E) ? c.a.createElement(Wu, null) : E.map((function(e) {
					return c.a.createElement(Yu, {
						key: e[0],
						sharedListId: e[0],
						sharedListDetails: e[1],
						currentlySelectedLists: s,
						setCurrentlySelectedLists: i
					})
				})))
			},
			qu = Y.SHARED_LISTS_TABLE_CONSTANTS.COLUMN_WIDTHS,
			Qu = function(e) {
				var t = e.sharedLists,
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = function() {
						return o(window.innerWidth < 540)
					};
				return Object(l.useEffect)((function() {
					return window.addEventListener("resize", s),
						function() {
							return window.removeEventListener("resize", s)
						}
				}), [r]), c.a.createElement(Ka.a, {
					className: "align-items-center table-flush table-hover",
					style: r ? {} : {
						tableLayout: "fixed"
					},
					responsive: !0
				}, c.a.createElement("thead", {
					className: "thead-light",
					style: {
						position: "sticky",
						top: "0"
					}
				}, c.a.createElement("tr", {
					key: "0",
					style: {
						position: "sticky",
						top: "0"
					}
				}, [{
					columnData: "Select"
				}, {
					columnData: "Name"
				}, {
					columnData: "Public URL"
				}, {
					columnData: "Created on"
				}, {
					columnData: "Actions",
					styles: {
						textAlign: "right"
					}
				}].map((function(e, t) {
					var a = e.columnData,
						n = e.styles,
						r = e.onClickHandler;
					return c.a.createElement("th", {
						key: t,
						scope: "col",
						className: "text-align-center",
						style: Object(E.a)({
							width: qu[t] + "%"
						}, n),
						onClick: r
					}, a)
				})))), c.a.createElement(Ku, {
					sharedLists: t
				}))
			},
			zu = function(e) {
				var t = e.sharedLists,
					a = Object(l.useContext)(X).state,
					n = tt(a),
					r = ct(a),
					o = Object(ee.g)(),
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1];
				Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.VIEWED, "SharedList Table Viewed");
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Manage Shared Lists", " ", "bronze" === Ot(n) ? "(".concat(Object.entries(t).length, "/").concat(function() {
					var e = Ot(n);
					return bt(Y.FEATURES.SHARED_LISTS, e)
				}(), " SharedLists Created)") : null, "bronze" === Ot(n) ? c.a.createElement("button", {
					className: "text-primary btn btn-link",
					style: {
						cursor: "pointer"
					},
					onClick: function(e) {
						e.preventDefault(), ye(o), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.REMOVE_LIMIT_CLICKED, "remove.limit.clicked@shared.lists.page", Object.entries(t).length)
					}
				}, "Remove Limits") : null)), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, null))), c.a.createElement(Qu, {
					sharedLists: t
				})), c.a.createElement("p", {
					className: "text-center"
				}, c.a.createElement("i", {
					className: "fas fa-exclamation-triangle"
				}), " Shared List once created cannot be deleted. Please check your plan shared list limit before making a shared list."))), m ? c.a.createElement(Fu, {
					isOpen: m,
					toggle: function() {
						E(!m)
					},
					sharedListIdsToDeleteArray: Object.keys(r).filter((function(e) {
						return r[e]
					})),
					userId: n.details.profile.uid
				}) : null))
			},
			Ju = function() {
				var e = Object(ee.g)();
				return c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: " col"
				}, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("h1", {
					className: "display-3"
				}, "Share Rules with other users"), c.a.createElement("p", {
					className: "lead"
				}, "To create a Shared List, go to Rules page, select the required Rules & click Share Rules button"), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						return ge(e)
					}
				}, "Go to Rules"), c.a.createElement(de.a, {
					color: "secondary",
					onClick: function() {
						return window.open(Y.LINKS.REQUESTLY_DOCS_SHARING_RULES, "_blank")
					}
				}, "Documentation"))))))))))
			},
			Xu = S.CONSTANTS.GA_EVENTS,
			Zu = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = function(e) {
						return rt(e).sharedLists
					}(e),
					n = Object(l.useState)(!0),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					i = Object(l.useState)({}),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useCallback)((function(e) {
						Is(e.details.profile.uid).then((function(e) {
							d(e), s(!1), e && Ga(Xu.ATTR.NUM_SHARED_LISTS, Object.keys(e).length), e || Ga(Xu.ATTR.NUM_SHARED_LISTS, 0)
						}))
					}), []);
				return Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.WORKFLOW_STARTED, "SharedList index page opened"), Object(l.useLayoutEffect)((function() {
					t.loggedIn && t.details.profile && (Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.ALREADY_LOGIN, "Already login on SharedList index page"), p(t))
				}), [t, p, a]), o ? c.a.createElement(Er, {
					customLoadingMessage: "Loading Shared Lists"
				}) : ae()(E) ? c.a.createElement(Ju, null) : c.a.createElement(zu, {
					sharedLists: E
				})
			},
			$u = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: Zu
						}))
					}
				}]), a
			}(c.a.Component),
			em = function(e) {
				var t = e.rules,
					a = e.groups,
					n = Object(ee.g)(),
					r = Object(l.useContext)(X).state,
					o = st(r),
					s = qe(r),
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(!1),
					A = Object(u.a)(p, 2),
					T = A[0],
					f = A[1],
					O = tt(r),
					N = function(e) {
						if (Ul()) {
							d(!0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.IMPORTED, "SharedList Import Started");
							var r = t || [],
								l = a || [];
							Ko([].concat(Object(Rt.a)(r), Object(Rt.a)(l)), O, s).then((function(e) {
								Bo(o, e.data).then((function() {
									le.b.info("Successfully imported rules"), ge(n)
								}))
							}))
						} else f(!0)
					},
					b = function() {
						return f(!T)
					},
					g = function() {
						return c.a.createElement(Xt.a, {
							isOpen: T,
							toggle: b,
							centered: !0
						}, c.a.createElement(Xl, {
							heading: "Browser Extension Required",
							content: "Please install Requestly Browser Extension to import shared list."
						}))
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(g, null), c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "View Shared List Rules")), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, E ? c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button"
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.S, {
					className: "icon-spin"
				}))) : c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: N
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.u, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Import List"))))), c.a.createElement(fu, {
					rules: t,
					groups: a,
					options: {
						disableSelection: !0,
						disableEditing: !0,
						disableActions: !0,
						disableFavourites: !0,
						disableStatus: !0
					}
				}))))))
			},
			tm = Y.PATHS,
			am = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					a = e.dispatch,
					n = lt(t),
					r = st(t),
					o = Object(l.useState)([]),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useState)([]),
					d = Object(u.a)(E, 2),
					p = d[0],
					A = d[1],
					T = Object(l.useCallback)(a, []),
					f = window.location.pathname.split("/")[tm.SHARED_LISTS.VIEWER.ABSOLUTE.split("/").length + 1 - 1].split("-")[0];
				Object(l.useEffect)((function() {
					var e = Kl(r).getRecords(S.CONSTANTS.OBJECT_TYPES.GROUP),
						t = Kl(r).getRecords(S.CONSTANTS.OBJECT_TYPES.RULE);
					Promise.all([e, t]).then((function(e) {
						var t = e[0],
							a = e[1];
						T(Lt(a, t))
					}))
				}), [T, n, r]);
				var O = Object(l.useCallback)((function() {
					(function(e) {
						var t = Mr(e);
						return Da.getValue(t)
					})(f).then((function(e) {
						m(e.rules), A(e.groups)
					}))
				}), [f]);
				return Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.SHARED_LIST, S.CONSTANTS.GA_EVENTS.ACTIONS.VIEWED, "SharedList Index Page Viewed"), Object(l.useLayoutEffect)((function() {
					O()
				}), [O]), c.a.createElement(c.a.Fragment, null, ae()(i) ? null : c.a.createElement(em, {
					rules: i,
					groups: p
				}))
			},
			nm = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(am, null))
					}
				}]), a
			}(c.a.Component),
			rm = function(e) {
				var t = e.btnText,
					a = e.cardText,
					n = e.iconClass,
					r = e.cardTitle,
					l = e.btnDisable,
					o = e.onClickFunction;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "p-3"
				}, c.a.createElement("div", {
					className: "p-3 text-center text-white mx-auto",
					style: {
						backgroundColor: "#0a4ab9",
						width: "4em",
						height: "4em",
						borderRadius: "50%"
					}
				}, c.a.createElement("i", {
					class: n
				})), c.a.createElement("hr", null), c.a.createElement("h3", null, r), c.a.createElement("h4", {
					className: "text-muted"
				}, a), c.a.createElement("hr", null), c.a.createElement(de.a, {
					onClick: o,
					disabled: l,
					color: "primary",
					className: "w-100"
				}, t))))
			},
			lm = function(e) {
				var t = e.containerTitle,
					a = e.containerText,
					n = e.iconClass,
					r = e.hrefLink,
					l = e.btnText;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center  margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", null, t, " ", c.a.createElement("span", null, c.a.createElement("a", {
					href: r,
					target: "_blank",
					rel: "noopener noreferrer"
				}, c.a.createElement("i", {
					className: "fab fa-stack-exchange"
				})))), c.a.createElement("hr", null), c.a.createElement("h3", {
					className: "text-muted mb-5 "
				}, a, " ", c.a.createElement("a", {
					href: "https://superuser.com/questions/1414946/how-can-i-create-url-shortcuts-redirects-for-task-diff-ids-in-phabricator/1414947#1414947",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Here\u2019s an example")), c.a.createElement("a", {
					href: r,
					target: "_blank",
					className: "btn btn-primary",
					rel: "noopener noreferrer"
				}, l, " ", c.a.createElement("i", {
					class: n
				})), " "))))))
			},
			cm = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X).state;
				return tt(t) ? c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: "mt--5 w-75 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(lm, {
					containerTitle: "SUPERUSER COMMUNITY",
					containerText: "Use SuperUser Community for any technical guidance. Please describe your Problem with all the details,  rule screenshot helps. Please add requestly as tag in your superuser question.",
					iconClass: "fas fa-external-link-alt",
					hrefLink: "https://superuser.com",
					btnText: "Visit Superuser"
				})), c.a.createElement(pe.a, {
					className: "text-center mt-5"
				}, c.a.createElement(rm, {
					btnText: "Raise Issue",
					cardText: "Raise Issue on Github for Feature Requests, Reporting Bugs or Installation Issues.",
					iconClass: "fab fa-2x fa-github-square",
					cardTitle: "Raise Issue on Github",
					btnDisable: !1,
					onClickFunction: function(t) {
						t.preventDefault(),
							function(e, t) {
								t.newTab ? window.open(be.REQUESTLY_GITHUB_ISSUES, "_blank") : e.push(be.REQUESTLY_GITHUB_ISSUES)
							}(e, {
								newTab: !0
							})
					}
				}), c.a.createElement(rm, {
					btnText: "Email Help",
					cardText: "Shoot us an Email for questions related to Privacy, Sales, Enterprise Plans etc.",
					iconClass: "fas fa-envelope-square fa-2x",
					cardTitle: "Email Support",
					btnDisable: !1,
					onClickFunction: function(t) {
						t.preventDefault(),
							function(e, t) {
								t.newTab ? window.open(be.CONTACT_US, "_blank") : e.push(be.CONTACT_US)
							}(e, {
								newTab: !0
							})
					}
				})))) : c.a.createElement(Er, {
					customLoadingMessage: "Taking You to Support"
				})
			},
			om = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(cm, null))
			},
			sm = function(e) {
				var t = e.isOpen,
					a = e.toggleModal,
					n = e.userId,
					r = e.teamId,
					o = e.isCurrentlyAdmin,
					s = e.callbackOnSuccess,
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1];
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered modal-danger",
					contentClassName: "bg-gradient-danger bg-gradient-blue",
					isOpen: t,
					toggle: a
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Change Role"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, o ? c.a.createElement("span", null, "Remove admin access from this user? ", c.a.createElement("br", null), "This user would no longer be able to add or remove members from this team") : c.a.createElement("span", null, "Grant admin access to this user? ", c.a.createElement("br", null), "This user would be able to add or remove members from this team")), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					className: "text-white ml-auto",
					color: "link",
					"data-dismiss": "modal",
					type: "button",
					onClick: a,
					disabled: E
				}, "Close"), c.a.createElement(de.a, {
					className: "btn-white",
					color: "default",
					type: "button",
					onClick: function() {
						return d(!0), void Te.functions().httpsCallable("updateTeamUserRole")({
							teamId: r,
							userId: n,
							role: o ? "user" : "admin"
						}).then((function(e) {
							le.b.info("Successfully changed the role"), s && s(), d(!1), a()
						})).catch((function(e) {
							le.b.error(e.message), d(!1), a()
						}))
					},
					disabled: E
				}, E ? c.a.createElement(c.a.Fragment, null, c.a.createElement(R.S, {
					className: "icon-spin"
				}), c.a.createElement("span", null, o ? "Revoking admin access" : "Granting admin access")) : o ? "Remove admin access" : "Grant admin access")))
			},
			im = function(e) {
				var t = e.isOpen,
					a = e.toggleModal,
					n = e.userId,
					r = e.teamId,
					o = (e.isCurrentlyAdmin, e.callbackOnSuccess),
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1];
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered modal-danger",
					isOpen: t,
					toggle: a
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Remove Member"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, c.a.createElement("p", null, "Do you really want to remove this user from the team?"), c.a.createElement("p", null, "They would no longer be able use your team's subscription")), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					className: "text-white ml-auto",
					color: "link",
					"data-dismiss": "modal",
					type: "button",
					onClick: a,
					disabled: m
				}, "No"), c.a.createElement(de.a, {
					className: "btn-white",
					color: "default",
					type: "button",
					onClick: function() {
						return E(!0), void Te.functions().httpsCallable("updateTeamUserRole")({
							teamId: r,
							userId: n,
							role: "remove"
						}).then((function(e) {
							le.b.info("Member removed"), o && o(), E(!1), a()
						})).catch((function(e) {
							le.b.error(e.message), E(!1), a()
						}))
					},
					disabled: m
				}, m ? c.a.createElement(c.a.Fragment, null, c.a.createElement(R.S, {
					className: "icon-spin"
				}), c.a.createElement("span", null, "Removing user")) : "Yes, remove")))
			},
			um = function(e) {
				var t = e.teamId,
					a = e.refresh,
					n = Object(ee.g)(),
					r = Object(l.useRef)(!0),
					o = Object(l.useContext)(X).state,
					s = tt(o),
					i = Object(l.useState)([]),
					m = Object(u.a)(i, 2),
					d = m[0],
					p = m[1],
					S = Object(l.useState)({
						isActive: !1,
						userId: !1,
						isCurrentlyAdmin: !1
					}),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)({
						isActive: !1,
						userId: !1
					}),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Te.functions().httpsCallable("getTeamUsers"),
					C = Object(l.useCallback)(h, []),
					I = function() {
						C({
							teamId: t
						}).then((function(e) {
							if (!r.current) return null;
							var t = e.data;
							if (!t.success) throw new Error(t.message);
							p(t.users)
						})).catch((function(e) {
							if (!r.current) return null;
							le.b.error(e.message), De(n)
						}))
					},
					L = Object(l.useCallback)(I, [t, n]),
					_ = function() {
						p([]), r.current = !0, I()
					},
					v = Object(l.useCallback)(_, []);
				return Object(l.useEffect)((function() {
					return L(),
						function() {
							r.current = !1
						}
				}), [L]), Object(l.useEffect)((function() {
					v()
				}), [v, a]), c.a.createElement(c.a.Fragment, null, Object(Oe.isEmpty)(d) ? c.a.createElement(fe, {
					customLoadingMessage: "Finding your teammates"
				}) : c.a.createElement(Ka.a, {
					className: "align-items-center",
					responsive: !0
				}, c.a.createElement("thead", {
					className: "thead-light"
				}, c.a.createElement("tr", null, c.a.createElement("th", {
					scope: "col"
				}), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Member"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Role"), c.a.createElement("th", {
					scope: "col",
					className: "text-center"
				}, "Action"))), c.a.createElement("tbody", null, d.map((function(e) {
					return c.a.createElement(fr.a, {
						key: e.id
					}, (function(t) {
						var a = t.isHovering;
						return c.a.createElement(c.a.Fragment, null, c.a.createElement("th", {
							scope: "row"
						}, c.a.createElement("div", {
							className: "avatar-group"
						}, c.a.createElement("span", {
							className: "avatar avatar-sm",
							style: {
								zIndex: "unset"
							}
						}, c.a.createElement("img", {
							alt: e.displayName,
							className: "rounded-circle",
							src: e.photoUrl
						})))), c.a.createElement("td", {
							className: "text-center"
						}, c.a.createElement("span", {
							className: "font-weight-bold"
						}, e.displayName.concat(s.details.profile.uid === e.id ? " (You) " : ""))), c.a.createElement("td", {
							className: "text-center"
						}, c.a.createElement(qa.a, {
							color: "",
							className: "badge-dot"
						}, e.isOwner ? c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
							className: "bg-success"
						}), "Owner") : e.isAdmin ? c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
							className: "bg-success"
						}), "Admin") : c.a.createElement(c.a.Fragment, null, "Member"))), c.a.createElement("td", {
							className: "text-center"
						}, e.isOwner ? "-" : c.a.createElement("span", {
							className: a ? "all-direct-children-have-margin" : "all-direct-children-have-margin text-light",
							style: {
								fontSize: "1.3em"
							}
						}, c.a.createElement("span", {
							className: "custom-tooltip"
						}, c.a.createElement(R.p, {
							className: "cursor-pointer",
							onClick: function() {
								f(Object(E.a)(Object(E.a)({}, T), {}, {
									isActive: !0,
									userId: e.id,
									isCurrentlyAdmin: e.isAdmin
								}))
							}
						}), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, "Change Role")), c.a.createElement("span", {
							className: "custom-tooltip"
						}, c.a.createElement(R.W, {
							className: "cursor-pointer",
							onClick: function() {
								g(Object(E.a)(Object(E.a)({}, b), {}, {
									isActive: !0,
									userId: e.id
								}))
							}
						}), c.a.createElement("span", {
							className: "custom-tooltiptext"
						}, "Remove")))))
					}))
				})))), c.a.createElement(sm, {
					isOpen: T.isActive,
					toggleModal: function() {
						f(Object(E.a)(Object(E.a)({}, T), {}, {
							isActive: !T.isActive
						}))
					},
					userId: T.userId,
					teamId: t,
					isCurrentlyAdmin: T.isCurrentlyAdmin,
					callbackOnSuccess: function() {
						return _()
					}
				}), c.a.createElement(im, {
					isOpen: b.isActive,
					toggleModal: function() {
						g(Object(E.a)(Object(E.a)({}, b), {}, {
							isActive: !b.isActive
						}))
					},
					userId: b.userId,
					teamId: t,
					callbackOnSuccess: function() {
						return _()
					}
				}))
			},
			mm = function(e) {
				var t = e.isOpen,
					a = e.toggleModal,
					n = e.teamId,
					r = e.email,
					o = e.isAdmin,
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1];
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered modal-danger",
					contentClassName: "bg-gradient-danger bg-gradient-blue",
					isOpen: t,
					toggle: a
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Invite email to your team"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, c.a.createElement(Ae.a, null, c.a.createElement("div", null, "Oops! ", r, " does not seem to have a Requestly account yet. Do you want to send them a magic invite link via email? They will be automatically added to this team upon signup using that link."))), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					className: "text-white ml-auto",
					color: "link",
					"data-dismiss": "modal",
					type: "button",
					onClick: a,
					disabled: m
				}, "No, I'll add them later"), c.a.createElement(de.a, {
					className: "btn-white",
					color: "default",
					type: "button",
					onClick: function() {
						return E(!0), void Te.functions().httpsCallable("inviteEmailToTeam")({
							teamId: n,
							email: r,
							isAdmin: o
						}).then((function(e) {
							e.data.success ? le.b.info("We've sent them an invite") : le.b.error("Opps! Couldn`t send the invite"), E(!1), a()
						})).catch((function(e) {
							console.log(e.message), le.b.error("Opps! Couldn`t send the invite"), E(!1), a()
						}))
					},
					disabled: m
				}, m ? c.a.createElement("span", null, c.a.createElement(R.S, {
					className: "icon-spin"
				}), " Sending invite") : "Yes, please send")))
			},
			Em = S.CONSTANTS.GA_EVENTS,
			dm = function(e) {
				var t = e.isOpen,
					a = e.toggleModal,
					n = e.teamId,
					r = e.callback,
					o = Object(l.useState)(""),
					s = Object(u.a)(o, 2),
					i = s[0],
					m = s[1],
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useState)(!1),
					b = Object(u.a)(N, 2),
					g = b[0],
					h = b[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(Xt.a, {
					className: "modal-dialog-centered modal-danger",
					contentClassName: "bg-gradient-danger bg-gradient-blue",
					isOpen: t,
					toggle: a
				}, c.a.createElement("div", {
					className: "modal-header"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "Add Team Member"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: a
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body"
				}, c.a.createElement(Ae.a, null, c.a.createElement("div", null, c.a.createElement(un.a, {
					className: "mb-3"
				}, c.a.createElement(Bt.a, {
					className: "input-group-alternative"
				}, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
					className: "ni ni-email-83"
				}))), c.a.createElement(Yt.a, {
					placeholder: "Email Address",
					type: "email",
					value: i,
					onChange: function(e) {
						m(e.target.value)
					}
				}))), c.a.createElement("div", {
					className: "custom-control custom-control-alternative custom-checkbox"
				}, c.a.createElement("input", {
					className: "custom-control-input",
					id: "makeAdmin",
					type: "checkbox",
					value: p,
					onChange: function(e) {
						S(!p), Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.WORKFLOW_STARTED, "Check for Admin access to Team else made admin")
					}
				}), c.a.createElement("label", {
					className: "custom-control-label",
					htmlFor: "makeAdmin"
				}, "Grant Admin Access"))))), c.a.createElement("div", {
					className: "modal-footer"
				}, c.a.createElement(de.a, {
					className: "text-white ml-auto",
					color: "link",
					"data-dismiss": "modal",
					type: "button",
					onClick: a,
					disabled: g
				}, "Close"), c.a.createElement(de.a, {
					className: "btn-white",
					color: "default",
					type: "button",
					onClick: function() {
						return function() {
							if (!An()(i)) return le.b.warn("Please enter a valid email"), void Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.ERROR, "Email entered is not Valid");
							var e = Te.functions().httpsCallable("addUserToTeam");
							h(!0), e({
								teamId: n,
								email: i,
								isAdmin: p
							}).then((function(e) {
								h(!1), r && r(), a(), Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.FORM_SUBMITTED, "Successfully added member in team")
							})).catch((function(e) {
								h(!1), "user-not-found" === e.message ? (O(!0), Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.ERROR, "Add member User Not found error")) : "user-already-exists" === e.message ? (le.b.warn("User already has access to the team"), a(), Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.ERROR, "User already has access to the team")) : (le.b.warn("Trouble adding user"), Ma(Em.CATEGORIES.TEAMS, Em.ACTIONS.ERROR, "Trouble adding user"))
							}))
						}()
					},
					disabled: g
				}, g ? c.a.createElement("span", null, c.a.createElement(R.S, {
					className: "icon-spin"
				}), " Adding Member") : c.a.createElement("span", null, "Add Member")))), f ? c.a.createElement(mm, {
					isOpen: f,
					toggleModal: function() {
						O(!f), a()
					},
					email: i,
					teamId: n,
					isAdmin: p
				}) : null)
			},
			pm = S.CONSTANTS.GA_EVENTS,
			Sm = function(e) {
				var t = e.teamId,
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(!1),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "border-0 has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Members")), c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						o(!0), Ma(pm.CATEGORIES.TEAMS, pm.ACTIONS.CLICKED, "Add Member in Team button clicked")
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.H, null)), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Add Member"))))), c.a.createElement(Ae.a, {
					className: "border-0"
				}, c.a.createElement(um, {
					teamId: t,
					refresh: m
				}))))), r ? c.a.createElement(dm, {
					isOpen: r,
					toggleModal: function() {
						o(!r)
					},
					teamId: t,
					callback: function() {
						E(!m)
					}
				}) : null)
			},
			Am = S.CONSTANTS.GA_EVENTS,
			Tm = $a,
			fm = en,
			Om = rn,
			Nm = nn,
			bm = function(e) {
				var t = e.teamId,
					a = e.mode,
					n = e.isNewSubscription,
					r = void 0 === n || n,
					o = e.isRenewal,
					s = void 0 !== o && o,
					i = Object(ee.g)(),
					m = Object(l.useRef)(!0),
					E = function(e) {
						switch (e) {
							case "team":
								return "enterprise";
							case "individual":
								return "gold";
							default:
								return "individual"
						}
					}(a),
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					S = p[0],
					A = p[1],
					T = Object(l.useState)("US"),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(!1),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = function(e, n) {
						var l = n.price,
							o = n.days,
							u = n.planId,
							E = Nm(O);
						return c.a.createElement("div", {
							className: "col col-sm-12 col-md-8 col-lg-8 col-xl-6"
						}, c.a.createElement("div", {
							className: "card-deck mb-3 text-center"
						}, c.a.createElement("div", {
							className: "card has-no-box-shadow"
						}, c.a.createElement("div", {
							className: "card-header"
						}, c.a.createElement("h4", {
							className: "my-0 font-weight-normal",
							style: {
								textTransform: "capitalize"
							}
						}, Tm(o)), c.a.createElement("h1", {
							className: "card-title"
						}, "".concat(E).concat(l[Om(O)] || "0"), c.a.createElement("small", {
							className: "text-muted"
						}, "/".concat(fm(o))))), c.a.createElement("div", {
							className: "card-footer bg-white"
						}, h && u === h ? c.a.createElement("button", {
							type: "button",
							className: "btn btn-block btn-outline-primary",
							disabled: !0
						}, c.a.createElement("i", {
							className: "fa fa-check"
						}), " Current Plan") : c.a.createElement("button", {
							disabled: S,
							type: "button",
							className: "btn btn-block btn-outline-primary",
							onClick: function(n) {
								! function(e, n) {
									var l = n.rqPlanId,
										c = n.planType,
										o = n.days;
									if (r || s) xe({
										mode: a,
										teamId: t,
										planType: c,
										days: o
									}), Ma(Am.CATEGORIES.PRICING, Am.ACTIONS.CLICKED, "Clicked Select button of Mini Pricing Table Redirecting@Checkout");
									else if (A(!0), "team" === a) Te.functions().httpsCallable("createTeamSubscription")({
										rqPlanId: l,
										teamId: t,
										currency: Om(O)
									}).then((function(e) {
										if (!m.current) return null;
										var a = e.data;
										a.success ? (Ue(i, t), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.UPDATED, "Updated Existing Team Subscription")) : (A(!1), le.b.error(a.message), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.ERROR, "Error occureed while updating existing team subscription", {
											error: a.message
										}))
									})).catch((function(e) {
										if (!m.current) return null;
										A(!1), le.b.error(e.message), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.ERROR, "Error occureed while updating existing team subscription", {
											error: e.message
										})
									}));
									else if ("individual" === a) {
										Te.functions().httpsCallable("createIndividualSubscription")({
											rqPlanId: l,
											teamId: t || null,
											currency: Om(O)
										}).then((function(e) {
											if (!m.current) return null;
											var t = e.data;
											t.success ? (we(i, !0, !0), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.UPDATED, "Updated Existing Individual Subscription")) : (A(!1), 0 === t.message.indexOf("This customer has no attached payment source or default payment method") ? Me({
												mode: "individual"
											}) : (le.b.error(t.message), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.ERROR, "Error occureed while updating existing Individual subscription", {
												error: t.message
											})))
										})).catch((function(e) {
											if (!m.current) return null;
											A(!1), le.b.error(e.message), Ma(Am.CATEGORIES.REQUEST_UPGRADE, Am.ACTIONS.ERROR, "Error occureed while updating existing Individual subscription", {
												error: e.message
											})
										}))
									}
								}(0, {
									rqPlanId: u,
									planType: e,
									days: o
								})
							}
						}, S ? c.a.createElement(c.a.Fragment, null, c.a.createElement(R.S, {
							className: "icon-spin"
						}), " Please wait") : c.a.createElement(c.a.Fragment, null, "Select"))))))
					},
					L = Object(l.useCallback)((function() {
						fetch("https://api.country.is/").then((function(e) {
							if (!m.current) return null;
							200 === e.status && e.json().then((function(e) {
								e.country && N(e.country)
							}))
						})).catch((function(e) {
							if (!m.current) return null;
							console.log(e)
						}))
					}), []),
					_ = Object(l.useCallback)((function() {
						Te.functions().httpsCallable("getTeamInfo")({
							teamId: t
						}).then((function(e) {
							if (!m.current) return null;
							var t = e.data;
							if (!t.success) throw new Error(t.message);
							var a = t.data;
							"active" === a.subscriptionStatus && C(a.plan)
						})).catch((function(e) {
							if (!m.current) return null;
							e && (le.b.error("This link has been expired. Please retry."), Ma(Am.CATEGORIES.PAGE_VISITS, Am.ACTIONS.ROUTE_VIEWED, "link expired Redirected to 404 from teams page"), Fe(i))
						}))
					}), [t]),
					v = Object(l.useCallback)((function() {
						Te.functions().httpsCallable("fetchIndividualUserSubscriptionDetails")().then((function(e) {
							if (!m.current) return null;
							!1 === e.data.success && (Ma(Am.CATEGORIES.PAGE_VISITS, Am.ACTIONS.ROUTE_VIEWED, "Redirected to 404 from teams page"), Fe(i));
							var t = e.data.data;
							"active" === t.status && C(t.rqPlanId)
						})).catch((function(e) {
							if (!m.current) return null;
							le.b.error("This link has been expired. Please retry."), Ma(Am.CATEGORIES.PAGE_VISITS, Am.ACTIONS.ROUTE_VIEWED, "link expired Redirected to Account details from teams page"), Pe(i)
						}))
					}), []);
				return Object(l.useEffect)((function() {
					return L(),
						function() {
							m.current = !1
						}
				}), [L]), Object(l.useEffect)((function() {
					"enterprise" !== E || r ? "gold" !== E || r || v() : _()
				}), [_, v, E, r]), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("div", {
					className: "card-deck mb-3"
				}, c.a.createElement("div", {
					className: "card has-no-box-shadow"
				}, c.a.createElement("div", {
					className: "card-body"
				}, c.a.createElement("div", {
					className: "row justify-content-md-center"
				}, ut.map((function(e) {
					return c.a.createElement(c.a.Fragment, {
						key: e.id
					}, e.id === E ? function(e) {
						return c.a.createElement(c.a.Fragment, null, I(e.id, e.monthly), I(e.id, e.annual))
					}(e) : null)
				}))))))))
			},
			gm = S.CONSTANTS.GA_EVENTS,
			Rm = function(e) {
				var t = e.teamId,
					a = Object(l.useState)(!1),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1];
				return c.a.createElement(c.a.Fragment, null, r ? c.a.createElement(bm, {
					teamId: t,
					isNewSubscription: !0,
					mode: "team"
				}) : c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", {
					className: "lead"
				}, "One subscription for all your team members. Subscribe to one of the plans to get started."), c.a.createElement("p", {
					className: "lead"
				}, c.a.createElement(de.a, {
					color: "primary",
					onClick: function() {
						o(!0), Ma(gm.CATEGORIES.TEAMS, gm.ACTIONS.CLICKED, "Clicked View Plans button on Team Info page redirected@mini pricing table")
					}
				}, "View Plans"), c.a.createElement(de.a, {
					color: "secondary",
					onClick: function() {
						window.open(Y.PATHS.PRICING.ABSOLUTE), Ma(gm.CATEGORIES.TEAMS, gm.ACTIONS.CLICKED, "Clicked Learn More button on Team Info page redirected@Pricing table")
					}
				}, "Learn More"))))))
			},
			hm = function(e) {
				var t = e.teamId,
					a = Object(l.useRef)(!0),
					n = Object(l.useState)({}),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					i = Object(l.useState)(!1),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useCallback)((function() {
						d(!0), Te.functions().httpsCallable("getTeamSubscriptionInfo")({
							teamId: t
						}).then((function(e) {
							if (!a.current) return null;
							s(e.data), d(!1)
						})).catch((function(e) {
							if (!a.current) return null;
							le.b.error("Opps! An error occured. You might not have permission."), d(!1)
						}))
					}), []);
				return Object(l.useEffect)((function() {
					return p(),
						function() {
							a.current = !1
						}
				}), [p]), c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, E ? c.a.createElement(fe, {
					customLoadingMessage: "Fetching subscription"
				}) : c.a.createElement(Se.a, {
					className: "border-0 has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Billing")), o.subscriptionStatus ? c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						return Me({
							mode: "team",
							teamId: t
						})
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.m, {
					size: "1.2rem"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Update Payment Method"))) : null)), c.a.createElement(Ae.a, {
					className: "border-0"
				}, o.subscriptionStatus ? c.a.createElement(fc, {
					mode: "team",
					teamId: t
				}) : c.a.createElement(Rm, {
					teamId: t
				}))))))
			},
			Cm = S.CONSTANTS.GA_EVENTS,
			Im = function(e) {
				var t = e.teamId,
					a = Object(ee.g)(),
					n = Object(l.useRef)(!0);
				t || Fe(a);
				var r = Object(l.useState)(""),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(""),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useState)(""),
					A = Object(u.a)(S, 2),
					T = A[0],
					f = A[1],
					O = Object(l.useState)(""),
					N = Object(u.a)(O, 2),
					b = N[0],
					g = N[1],
					h = Object(l.useState)(""),
					C = Object(u.a)(h, 2),
					I = C[0],
					L = C[1],
					_ = Object(l.useState)(!1),
					v = Object(u.a)(_, 2),
					y = v[0],
					P = v[1],
					U = Object(l.useCallback)((function() {
						P(!0), Te.functions().httpsCallable("getTeamInfo")({
							teamId: t
						}).then((function(e) {
							if (!n.current) return null;
							var t = e.data;
							if (!t.success) throw new Error(t.message);
							var a = t.data;
							i(a.name), p(new Date(1e3 * a.creationTime._seconds).toDateString()), f(a.subscriptionStatus), L(new Date(1e3 * a.subscriptionCurrentPeriodStart).toDateString()), g(new Date(1e3 * a.subscriptionCurrentPeriodEnd).toDateString()), P(!1)
						})).catch((function(e) {
							if (!n.current) return null;
							e && (le.b.error("This link has been expired. Please retry."), Ma(Cm.CATEGORIES.PAGE_VISITS, Cm.ACTIONS.ROUTE_VIEWED, "Redirected to 404 from team info page"), Fe(a))
						}))
					}), [t]);
				return Object(l.useEffect)((function() {
					return U(),
						function() {
							n.current = !1
						}
				}), [U, t]), c.a.createElement(Se.a, {
					className: "border-0 has-no-box-shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Team Details")), "active" === T ? c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						ke({
							mode: "team",
							planType: "enterprise",
							teamId: t
						}), Ma(Cm.CATEGORIES.TEAMS, Cm.ACTIONS.CLICKED, "Change Plan button clicked redirected to update subscription")
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.N, {
					size: "1rem"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Change Plan"))) : null, "canceled" === T || "incomplete_expired" === T ? c.a.createElement(me.a, {
					xs: "12",
					xl: "6",
					lg: "6",
					md: "6",
					className: "text-center text-sm-center text-xl-right text-md-right text-lg-right"
				}, c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: function() {
						ke({
							mode: "team",
							planType: "enterprise",
							teamId: t,
							isRenewal: !0
						}), Ma(Cm.CATEGORIES.TEAMS, Cm.ACTIONS.CLICKED, "Renew Subscription button clicked redirected to update subscription")
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(R.U, {
					size: "1rem"
				})), c.a.createElement("span", {
					className: "btn-inner--text"
				}, "Renew Subscription"))) : null)), y ? c.a.createElement(Ae.a, null, c.a.createElement(fe, {
					customLoadingMessage: "Loading Team Info"
				})) : c.a.createElement(Ae.a, {
					className: "border-0",
					style: {
						fontSize: "0.8125rem"
					}
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					className: "font-weight-bold"
				}, "Team Name:"), " ", s), c.a.createElement(me.a, {
					className: "text-right"
				}, c.a.createElement("span", {
					className: "font-weight-bold"
				}, "Created on: "), d)), !T || Object(Oe.isEmpty)(T) ? null : c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("span", {
					className: "font-weight-bold"
				}, "Current Period:"), " ".concat(I, " ~ ").concat(b)), c.a.createElement(me.a, {
					className: "text-right"
				}, c.a.createElement("span", {
					className: "font-weight-bold"
				}, "Subscription Status: "), cn(T)))))
			},
			Lm = function(e) {
				var t = e.teamId;
				return c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom"
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", {
					className: "mb-0"
				}, "Manage Team")))), c.a.createElement(Ae.a, null, c.a.createElement(Im, {
					teamId: t
				}), c.a.createElement(Sm, {
					teamId: t
				}), c.a.createElement(hm, {
					teamId: t
				}), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					style: {
						fontSize: "0.8125rem"
					},
					className: "text-center"
				}, "Any questions? Reach our  payment support team at", " ", c.a.createElement("a", {
					href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)
				}, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL), ".")))))))
			},
			_m = function(e) {
				var t = e.match.params.teamId;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: Lm,
					teamId: t
				}))
			},
			vm = S.CONSTANTS.GA_EVENTS,
			ym = function() {
				var e = Object(l.useContext)(X).state,
					t = tt(e),
					a = Object(l.useState)({}),
					n = Object(u.a)(a, 2),
					r = n[0],
					o = n[1],
					s = Object(l.useState)(""),
					m = Object(u.a)(s, 2),
					E = m[0],
					d = m[1],
					p = Object(l.useState)(!1),
					S = Object(u.a)(p, 2),
					A = S[0],
					T = S[1],
					f = Object(l.useState)(!0),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useState)(!1),
					h = Object(u.a)(g, 2),
					C = h[0],
					I = h[1],
					L = Object(l.useState)(!0),
					_ = Object(u.a)(L, 2),
					v = _[0],
					y = _[1],
					P = Object(l.useState)(!1),
					U = Object(u.a)(P, 2),
					D = U[0],
					w = U[1],
					x = Object(l.useState)(!1),
					j = Object(u.a)(x, 2),
					k = j[0],
					M = j[1],
					G = Object(l.useState)(!1),
					F = Object(u.a)(G, 2),
					B = F[0],
					V = F[1],
					H = Object(l.useState)(!1),
					W = Object(u.a)(H, 2),
					K = W[0],
					q = W[1],
					Q = Object(l.useState)(!1),
					z = Object(u.a)(Q, 2),
					J = z[0],
					Z = z[1],
					$ = function(e) {
						return e ? c.a.createElement("span", {
							style: {
								color: "green"
							}
						}, "  ", c.a.createElement(R.f, null)) : ""
					},
					ee = function(e, t) {
						d(t), Pa(["customProfile", r.uid], {
							position: e
						}), Ma(vm.CATEGORIES.UNLOCK, vm.ACTIONS.CLICKED, e), Ga(vm.ATTR.PROFILE, e)
					},
					te = function(e, t) {
						switch (e.preventDefault(), Ma(vm.CATEGORIES.UNLOCK, vm.ACTIONS.CLICKED, t), t) {
							case "twitter_follow_step":
								window.open("https://twitter.com/requestlyIO", "_blank"), setTimeout((function() {
									T(!0)
								}), 3e3);
								break;
							case "tweet_step":
								window.open(" https://twitter.com/intent/tweet?url=https%3A%2F%2Frequestly.io%2F&via=requestlyIO&text=Check%20out%20Requestly%20chrome%20extension%20which%20lets%20you%20Setup%20redirects%2C%20modify%20headers%2C%20switch%20hosts%2C%20insert%20user%20scripts%20and%20much%20more%21", "_blank"), setTimeout((function() {
									b(!0)
								}), 3e3);
								break;
							case "linkedin_step":
								window.open("https://www.linkedin.com/company/14623447/", "_blank"), setTimeout((function() {
									w(!0)
								}), 3e3);
								break;
							case "reddit_step":
								window.open("https://www.reddit.com/r/requestly/", "_blank"), setTimeout((function() {
									M(!0)
								}), 3e3);
								break;
							case "rate_us_chrome_store_step":
								window.open("https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa", "_blank"), setTimeout((function() {
									I(!0)
								}), 6e3);
								break;
							case "watch_and_star_us_on_github_step":
								window.open("https://github.com/requestly/customer-support/subscription", "_blank"), setTimeout((function() {
									y(!0)
								}), 6e3)
						}
					},
					ae = function() {
						E && A && N && C && v && D && k ? ia(r.email) ? (Z(!0), Pa(["unlock", r.uid], {
							status: "pending",
							lastUpdated: (new Date).toISOString().split("T")[0]
						}, (function() {
							Te.functions().httpsCallable("unlockPremium")({
								userId: r.uid,
								email: r.email,
								userName: r.displayName,
								position: E
							}).then((function() {
								window.location.reload(), Z(!1)
							}))
						}))) : le.b.warn("Please login with company email to unlock Requestly Premium") : le.b.warn("Please complete all the steps before continuing")
					};
				return Object(l.useLayoutEffect)((function() {
					t.details.isLoggedIn && (o(t.details.profile), ya(["unlock", t.details.profile.uid]).then((function(e) {
						(e = e || {}).status && "unlocked" === e.status ? (q(!0), V(!1)) : "pending" === e.status ? (V(!0), q(!1)) : (q(!1), V(!1))
					})).catch((function() {
						q(!1), V(!1)
					})))
				}), [t]), c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ft.a, {
					className: "border-0 has-thin-border-bottom",
					style: {
						position: "sticky",
						top: "0",
						zIndex: "1"
					}
				}, c.a.createElement(pe.a, {
					className: "align-items-center"
				}, c.a.createElement(me.a, {
					className: "text-center text-sm-center text-xl-left text-lg-left text-md-left margin-bottom-1-when-xs margin-bottom-1-when-sm"
				}, c.a.createElement("h2", {
					className: "mb-0"
				}, "Unlock 30 days of Requestly Premium"), c.a.createElement("h4", {
					className: "text-muted mb-0"
				}, "Requestly Premium can be unlocked with company email accounts only")))), c.a.createElement(Ae.a, null, B ? c.a.createElement("article", {
					className: "message is-link"
				}, c.a.createElement("div", {
					className: "message-body has-text-centered"
				}, "Thank you for expressing your interest to unlock Requestly Premium.", " ", c.a.createElement("br", null), "We have received your request and will activate your premium in 2-3 business days.")) : K ? c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, "You have successfully unlocked Requestly Premium.", c.a.createElement("br", null), " If you love Requestly Premium, you can get our premium plan", " ", c.a.createElement(i.b, {
					to: Y.PATHS.PRICING.ABSOLUTE
				}, "here"), c.a.createElement("br", null), " We offer discounts on bulk purchase (Enterprise Plan).", c.a.createElement("br", null), " Please get in touch at contact@requestly.io for the same.", c.a.createElement("div", {
					className: "has-text-centered",
					style: {
						paddingTop: "1rem",
						paddingBottom: "0.25rem"
					}
				}, c.a.createElement(i.b, {
					to: Y.PATHS.PRICING.ABSOLUTE,
					className: "button is-primary"
				}, "Upgrade"))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(ul.a, {
					color: "secondary",
					className: "has-transparent-bgcolor has-no-border"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "Follow us on LinkedIn"), c.a.createElement(me.a, null, D ? "Complete" : "Pending", $(D)), c.a.createElement(me.a, null, c.a.createElement("span", {
					onClick: function(e) {
						return te(e, "linkedin_step")
					},
					className: "cursor-pointer"
				}, c.a.createElement(R.E, null), "\xa0\xa0 Follow Us")))), c.a.createElement(ul.a, {
					color: "secondary",
					className: "has-transparent-bgcolor has-no-border"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "How do you best identify yourself"), c.a.createElement(me.a, null, E ? "Complete" : "Pending", $(E)), c.a.createElement(me.a, null, Jt(E, ee)))), c.a.createElement(ul.a, {
					color: "secondary",
					className: "has-transparent-bgcolor has-no-border"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "Follow us on Twitter"), c.a.createElement(me.a, null, A ? "Complete" : "Pending", $(A)), c.a.createElement(me.a, null, c.a.createElement("span", {
					onClick: function(e) {
						return te(e, "twitter_follow_step")
					},
					className: "cursor-pointer"
				}, c.a.createElement(R.X, null), "\xa0\xa0 Follow")))), c.a.createElement(ul.a, {
					color: "secondary",
					className: "has-transparent-bgcolor has-no-border"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "Rate us on Chrome Store"), c.a.createElement(me.a, null, C ? "Complete" : "Pending", $(C)), c.a.createElement(me.a, {
					onClick: function(e) {
						return te(e, "rate_us_chrome_store_step")
					},
					className: "cursor-pointer"
				}, c.a.createElement("span", {
					className: "button is-success"
				}, c.a.createElement(R.h, null), "\xa0\xa0 Rate Us")))), c.a.createElement(ul.a, {
					color: "secondary",
					className: "has-transparent-bgcolor has-no-border"
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, "Join our subreddit"), c.a.createElement(me.a, null, k ? "Complete" : "Pending", $(k)), c.a.createElement(me.a, null, c.a.createElement("span", {
					onClick: function(e) {
						return te(e, "reddit_step")
					},
					className: "cursor-pointer"
				}, c.a.createElement(R.M, null), "\xa0\xa0 Join Us")))), c.a.createElement("div", {
					className: "columns"
				}, c.a.createElement("div", {
					className: "column has-text-centered text-center"
				}, c.a.createElement(de.a, {
					disabled: !(A && N && C && r && v),
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: ae
				}, J ? c.a.createElement(R.S, {
					className: "icon-spin"
				}) : c.a.createElement("span", null, "Unlock Premium")))))))))))
			},
			Pm = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
							component: ym
						}))
					}
				}]), a
			}(c.a.Component),
			Um = S.CONSTANTS.GA_EVENTS,
			Dm = Y.PATHS,
			wm = function() {
				var e = Object(l.useState)(null),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = Object(l.useContext)(X).state,
					A = tt(S);
				return Object(l.useEffect)((function() {
					var e, t = Hn();
					t.oobCode && !d && A.loggedIn && (p(!0), n(t.continueUrl), (e = t.oobCode, Te.auth().applyActionCode(e)).then((function(e) {
						i(!0), Ta(A.details.profile.uid, !0), Ma(Um.CATEGORIES.USER, Um.ACTIONS.EMAIL_VERIFICATION_SUCCESSFUL, "".concat(Um.CATEGORIES.USER, "_").concat(Um.ACTIONS.EMAIL_VERIFICATION_SUCCESSFUL))
					})).catch((function(e) {
						console.log(e), i(!1), Ma(Um.CATEGORIES.USER, Um.ACTIONS.EMAIL_VERIFICATION_FAILED, "".concat(Um.CATEGORIES.USER, "_").concat(Um.ACTIONS.EMAIL_VERIFICATION_FAILED))
					})))
				}), [A.loggedIn, A.details, d, s]), c.a.createElement(c.a.Fragment, null, A.loggedIn ? c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, s && a ? c.a.createElement("div", null, c.a.createElement("h5", {
					className: "title is-6"
				}, "Your Email has been Verified."), c.a.createElement(pr, {
					delay: 3,
					path: Dm.RULES.RELATIVE,
					message: "Redirecting you to home"
				})) : c.a.createElement("div", null, c.a.createElement("h5", {
					className: "title is-6"
				}, "Oops! Looks like the email verification link is invalid or expired."), c.a.createElement(de.a, {
					className: "btn-icon btn-3",
					color: "primary",
					type: "button",
					onClick: Oa
				}, "Resend Verification email")))))))) : c.a.createElement(xt, null))
			},
			xm = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(wm, null))
					}
				}]), a
			}(c.a.Component),
			jm = function() {
				var e = Object(l.useState)(Sa(window.localStorage.getItem("RQEmailForSignIn")) ? window.localStorage.getItem("RQEmailForSignIn") : null),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useContext)(X).state,
					E = tt(m);
				return Object(l.useEffect)((function() {
					setTimeout((function() {
						document.getElementById("SignInViaEmailLinkLoginBtn").click()
					}), 300)
				}), []), c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement(pe.a, {
					className: "justify-content-md-center"
				}, c.a.createElement(me.a, {
					lg: "3"
				}, c.a.createElement(mn.a, null, c.a.createElement(un.a, null, c.a.createElement("label", {
					htmlFor: "SignInViaEmailLinkInputField"
				}, "Confirm email address"), c.a.createElement(Yt.a, {
					id: "SignInViaEmailLinkInputField",
					placeholder: "name@example.com",
					type: "email",
					value: a || "",
					onChange: function(e) {
						n(e.target.value)
					}
				})), c.a.createElement(un.a, null, a && s ? c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					disabled: !0
				}, c.a.createElement(R.S, {
					className: "icon-spin mr-2"
				}), "Login") : c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					onClick: function(e) {
						i(!0), e.preventDefault(), E.loggedIn && yn(), Hn().oobCode && Sa(a) ? Ca(a).then((function(e) {
							if (!e) throw new Error("Failed");
							i(!1)
						})).catch((function(e) {
							le.b.error("URL seems invalid. Please contact support"), i(!1), n(null)
						})) : (le.b.error("Please recheck the email entered, or this URL is invalid."), i(!1))
					},
					id: "SignInViaEmailLinkLoginBtn"
				}, "Login")))))))))))
			},
			km = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(jm, null))
					}
				}]), a
			}(c.a.Component),
			Mm = a(206),
			Gm = a.n(Mm),
			Fm = function() {
				var e = Object(ee.g)(),
					t = Object(Zn.useStripe)(),
					a = Object(Zn.useElements)(),
					n = Object(l.useRef)(!0),
					r = new URLSearchParams(window.location.search),
					o = r.get("m"),
					s = r.get("t"),
					i = Object(l.useContext)(X).state,
					m = tt(i),
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					A = d[1],
					T = Object(l.useState)(!1),
					f = Object(u.a)(T, 2),
					O = f[0],
					N = f[1],
					b = Object(l.useState)(null),
					g = Object(u.a)(b, 2),
					h = g[0],
					C = g[1],
					I = Object(l.useState)(null),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = Object(l.useState)(!1),
					P = Object(u.a)(y, 2),
					U = P[0],
					D = P[1],
					w = Object(l.useState)(!0),
					x = Object(u.a)(w, 2),
					j = x[0],
					k = x[1];
				("individual" !== o && "team" !== o || "team" === o && "string" !== typeof s) && Fe(e);
				var M = Object(l.useCallback)((function() {
						Te.functions().httpsCallable("getTeamInfo")({
							teamId: s
						}).then((function(e) {
							if (!n.current) return null;
							var t = e.data;
							if (!t.success) throw new Error("Unable to find team");
							var a = t.data.owner;
							a && m && m.details && m.details.profile ? (D(m.details.profile.uid === a), k(!1)) : (D(!1), k(!1))
						})).catch((function(e) {
							if (!n.current) return null;
							e && (D(!1), k(!1))
						}))
					}), [s, m]),
					G = function() {
						var n = Object(ea.a)($t.a.mark((function n(r) {
							var l, c, i, u, m, E, d;
							return $t.a.wrap((function(n) {
								for (;;) switch (n.prev = n.next) {
									case 0:
										if (r.preventDefault(), A(!0), v(null), N(!1), l = !1, c = "", C(null), t && a) {
											n.next = 9;
											break
										}
										return n.abrupt("return");
									case 9:
										return i = a.getElement(Zn.CardElement), n.next = 12, t.createPaymentMethod({
											type: "card",
											card: i
										});
									case 12:
										u = n.sent, m = u.error, E = u.paymentMethod, m ? (C(m.message), l = !0) : c = E.id, d = "individual" === o ? "updateIndividualPaymentMethod" : "updateTeamPaymentMethod", l ? A(!1) : Te.functions().httpsCallable(d)({
											teamId: s || !1,
											paymentMethodId: c
										}).then((function(t) {
											if (!t.data.success) throw new Error("Unable to update. Please contact us");
											N(!0), A(!1), le.b.info("The payment method has been successfully updated."), "individual" === o ? we(e, !0, !0) : Ue(e, s)
										})).catch((function(e) {
											A(!1), v(e.message)
										}));
									case 18:
									case "end":
										return n.stop()
								}
							}), n)
						})));
						return function(e) {
							return n.apply(this, arguments)
						}
					}();
				return Object(l.useEffect)((function() {
					return "team" === o ? M() : "individual" === o && (D(!0), k(!1)),
						function() {
							n.current = !1
						}
				}), [o, M]), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "card-deck mb-3"
				}, c.a.createElement("div", {
					className: "card has-no-box-shadow"
				}, c.a.createElement("div", {
					className: "card-body"
				}, O && c.a.createElement(nr, {
					type: "success",
					message: "The payment method has been successfully updated.",
					dismissible: !0,
					onDismiss: function() {
						return N(!1)
					}
				}), null !== _ && c.a.createElement(nr, {
					type: "danger",
					message: _,
					dismissible: !0,
					onDismiss: function() {
						return v(null)
					}
				}), j ? c.a.createElement(fe, null) : U ? c.a.createElement("div", {
					className: "row justify-content-md-center"
				}, c.a.createElement("div", {
					className: "col col-sm-12 col-md-8 col-lg-8 col-xl-6"
				}, c.a.createElement("div", {
					className: "card-deck"
				}, c.a.createElement("div", {
					className: "card mb-4"
				}, c.a.createElement("div", {
					className: "card-header text-center"
				}, "Credit or debit card"), c.a.createElement("div", {
					className: "card-body"
				}, c.a.createElement("div", {
					className: "row justify-content-md-center"
				}, c.a.createElement("div", {
					className: "col col-12"
				}, null !== h && c.a.createElement(nr, {
					type: "danger",
					message: h,
					dismissible: !0,
					onDismiss: function() {
						return C(null)
					}
				}), c.a.createElement(Zn.CardElement, {
					options: sr
				})))))), c.a.createElement("button", {
					className: "btn btn-lg btn-block btn-primary",
					disabled: !!p,
					onClick: G
				}, p ? c.a.createElement(R.S, {
					className: "icon-spin"
				}) : c.a.createElement(c.a.Fragment, null, "Save")))) : c.a.createElement(Gm.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", null, "Only the team owner can update the payment method."), c.a.createElement("p", null, "Need help? Contact us at", " ", c.a.createElement("a", {
					href: "mailto:" + S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL
				}, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)))))))
			},
			Bm = function() {
				var e = Object(l.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1];
				return Object(l.useEffect)((function() {
					a || n(Object($n.a)(S.CONFIG.stripeConfig.publishableKey))
				}), [a]), c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "has-no-box-shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("section", {
					className: "section section-sm "
				}, c.a.createElement("h2", {
					style: {
						textAlign: "center"
					}
				}, "Update Payment Method"), c.a.createElement("br", null), c.a.createElement("div", {
					className: "container text-center"
				}, !1 !== a ? c.a.createElement(Zn.Elements, {
					stripe: a
				}, c.a.createElement(Fm, null)) : null), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "text-center"
				}))))))))))
			},
			Vm = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: Bm
				}))
			},
			Hm = function() {
				return c.a.createElement(ee.a, {
					to: Y.PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.ABSOLUTE
				})
			},
			Ym = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: Hm
				}))
			},
			Wm = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7 sm-margin-top-negative-3",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					md: "12",
					className: "text-center"
				}, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", {
					className: "lead"
				}, "For subscription update, cancellation or refunds, please write to us at", " ", c.a.createElement("a", {
					href: "mailto:".concat(S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL)
				}, S.CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL), " ", "and we'll revert you shortly."))))))))))
			},
			Km = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: Wm
				}))
			},
			qm = a(529),
			Qm = a(530),
			zm = a(531),
			Jm = a(532),
			Xm = a(533),
			Zm = a(13),
			$m = a.n(Zm),
			eE = function(e) {
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: e.isOpen,
					toggle: e.toggle
				}, c.a.createElement("div", {
					className: "modal-header zero-padding-bottom"
				}, c.a.createElement("h5", {
					className: "modal-title"
				}, "\xa0"), c.a.createElement("button", {
					"aria-label": "Close",
					className: "close",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, c.a.createElement("span", {
					"aria-hidden": !0
				}, "\xd7"))), c.a.createElement("div", {
					className: "modal-body one-padding-top zero-padding-bottom"
				}, c.a.createElement(pe.a, {
					className: "one-padding-bottom  my-auto"
				}, c.a.createElement(me.a, {
					className: "my-auto"
				}, c.a.createElement("p", null, "This requires existing instance of browser to be closed. Please save your work, if any, and click Continue")))), c.a.createElement("div", {
					className: "modal-footer "
				}, c.a.createElement(de.a, {
					color: "secondary",
					"data-dismiss": "modal",
					type: "button",
					onClick: e.toggle
				}, "Close"), c.a.createElement(de.a, {
					color: "primary",
					type: "button",
					onClick: e.action
				}, "Continue")))
			},
			tE = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					n = e.dispatch,
					r = it(t),
					o = Object(l.useState)({}),
					s = Object(u.a)(o, 2),
					m = s[0],
					d = s[1],
					p = Object(l.useState)(!1),
					S = Object(u.a)(p, 2),
					A = S[0],
					T = S[1],
					f = Object(l.useState)(!1),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = r.appsList,
					h = r.availableAppsScanned,
					C = r.isBackgroundProcessActive,
					I = r.isProxyServerRunning,
					L = r.proxyPort,
					_ = Object.values(g),
					v = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						d(Object(E.a)(Object(E.a)({}, m), {}, {
							appId: !0
						})), window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("activate-app", {
							id: e,
							proxyPort: L,
							options: Object(E.a)({}, t)
						}).then((function(t) {
							if (d(Object(E.a)(Object(E.a)({}, m), {}, {
									appId: !1
								})), t.success) {
								le.b.success("Connected ".concat(g[e].name));
								var a = Object(E.a)({}, g);
								a[e].isActive = !0, n(Dt({
									appsListObject: a
								}))
							} else t.metadata && t.metadata.closeConfirmRequired ? (b(e), T(!0)) : le.b.error("Unable to activate ".concat(g[e].name, ". Issue reported."))
						})).catch((function(e) {
							return console.log(e)
						}))
					},
					y = function(e, t, a) {
						return m[e] ? c.a.createElement("span", {
							className: "text-primary cursor-disabled"
						}, c.a.createElement(R.S, {
							className: "icon-spin mr-1"
						}), " Connecting") : a ? t ? c.a.createElement("button", {
							type: "button",
							className: "btn btn-danger btn-icon btn-3  has-no-box-shadow",
							onClick: function() {
								return function(e) {
									d(Object(E.a)(Object(E.a)({}, m), {}, {
										appId: !0
									})), window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("deactivate-app", {
										id: e,
										proxyPort: L
									}).then((function(t) {
										if (d(Object(E.a)(Object(E.a)({}, m), {}, {
												appId: !1
											})), t.success) {
											le.b.info("Disconnected ".concat(g[e].name));
											var a = Object(E.a)({}, g);
											a[e].isActive = !1, n(Dt({
												appsListObject: a
											}))
										} else le.b.error("Unable to deactivate ".concat(g[e].name, ". Issue reported."))
									})).catch((function(e) {
										return console.log(e)
									}))
								}(e)
							}
						}, c.a.createElement("span", {
							className: "btn-inner--icon"
						}, c.a.createElement(R.J, null)), c.a.createElement("span", {
							className: "btn-inner--text"
						}, "Disconnect")) : c.a.createElement("button", {
							type: "button",
							className: "btn btn-primary btn-icon btn-3  has-no-box-shadow",
							onClick: function() {
								return v(e)
							}
						}, c.a.createElement("span", {
							className: "btn-inner--icon"
						}, c.a.createElement("i", {
							className: "ni ni-spaceship"
						})), c.a.createElement("span", {
							className: "btn-inner--text"
						}, "Activate")) : c.a.createElement("span", {
							className: "text-primary cursor-disabled"
						}, "Couldn't find it on your system")
					};
				return Object(l.useEffect)((function() {
					if (window.RQ && window.RQ.DESKTOP && C && I && !h) {
						var e = [];
						_.forEach((function(t) {
							t.comingSoon || e.push(t.id)
						})), window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("are-apps-activatable", e).then((function(e) {
							var t = Object(E.a)({}, g);
							Object.entries(e).forEach((function(e) {
								return t[e[0]].isAvailable = e[1]
							})), n(Dt({
								appsListObject: t,
								availableAppsScanned: !0
							}))
						})).catch((function(e) {
							return console.error(e.message)
						}))
					}
				}), [I, C, h, _, g, n]), h ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "row"
				}, c.a.createElement(me.a, null, c.a.createElement("p", {
					className: "text-center lead"
				}, "Connect your system apps to Requestly. After connecting the required app, click ", c.a.createElement(i.b, {
					to: Y.PATHS.RULES.RELATIVE
				}, "here"), " ", "to setup Rules."))), c.a.createElement("div", {
					className: "row"
				}, _.sort((function(e, t) {
					return e.comingSoon === t.comingSoon ? 0 : e.comingSoon ? 1 : -1
				})).sort((function(e, t) {
					return e.isAvailable === t.isAvailable ? 0 : e.isAvailable ? -1 : 1
				})).map((function(e) {
					var t, n, r, l, o, s = ["col-xl-4 col-md-6 reduce-opacity-on-hover enlarge-on-hover text-overlay-on-hover-container"];
					return e.comingSoon && s.push("app-coming-soon"), c.a.createElement("div", {
						className: s.join(" "),
						key: e.id
					}, c.a.createElement("div", {
						className: "card card-stats has-little-box-shadow card-hover"
					}, c.a.createElement("div", {
						className: "card-body"
					}, c.a.createElement("div", {
						className: "row"
					}, c.a.createElement("div", {
						className: "col"
					}, c.a.createElement("h5", {
						className: "card-title text-uppercase text-muted mb-0"
					}, e.description), c.a.createElement("span", {
						className: "h2 font-weight-bold mb-0"
					}, e.name)), c.a.createElement("div", {
						className: "col-auto"
					}, c.a.createElement("div", {
						className: "avatar"
					}, c.a.createElement("img", {
						src: a(453)("./" + e.icon),
						alt: "Google Chrome"
					})))), c.a.createElement("p", {
						className: "mt-3 mb-0 text-sm"
					}, (n = e.id, r = e.isActive, l = e.comingSoon, o = e.isAvailable, m[n] ? c.a.createElement("span", {
						className: "text-default mr-2"
					}, c.a.createElement(R.S, {
						className: "icon-spin"
					})) : l ? c.a.createElement("span", {
						className: "text-default mr-2"
					}, "Coming soon") : o ? r ? c.a.createElement("span", {
						className: "text-success mr-2 "
					}, c.a.createElement(R.Q, {
						className: "mr-1"
					}), " ", c.a.createElement("strong", null, "Connected")) : c.a.createElement("span", {
						className: "text-default mr-2"
					}, c.a.createElement(R.J, {
						className: "mr-1"
					}), " Inactive") : c.a.createElement("span", {
						className: "text-default mr-2"
					}, "Not installed"))))), c.a.createElement("div", {
						className: "overlay-text"
					}, e.comingSoon ? (t = e.name, c.a.createElement("span", {
						className: "text-primary cursor-disabled"
					}, "Support for ", t, " is coming soon")) : y(e.id, e.isActive, e.isAvailable)))
				}))), c.a.createElement("div", {
					className: "row mt-2"
				}, c.a.createElement(me.a, null, c.a.createElement("p", {
					className: "text-center"
				}, "Couldn't find required app? Click", " ", c.a.createElement(i.b, {
					to: Y.PATHS.DESKTOP.MANUAL_SETUP.RELATIVE
				}, "here"), " ", "to manually set proxy and install certificate."))), A ? c.a.createElement(eE, {
					isOpen: A,
					toggle: function() {
						A ? (b(!1), T(!1)) : T(!0)
					},
					action: function() {
						N && (T(!1), v(N, {
							closeConfirmed: !0
						}))
					}
				}) : null) : c.a.createElement(pe.a, null, c.a.createElement(fe, {
					customLoadingMessage: "Searching system apps"
				}))
			},
			aE = a(528),
			nE = a(133),
			rE = a.n(nE),
			lE = a(208),
			cE = (a(477), function(e) {
				return c.a.createElement("div", null, e.children)
			}),
			oE = [{
				name: "Time",
				selector: "timestamp",
				sortable: !0,
				left: !0,
				minWidth: 20
			}, {
				name: "URL",
				grow: 50,
				selector: "url",
				sortable: !1,
				wrap: !1,
				left: !0,
				format: function(e) {
					return "".concat(e.url.slice(0, 70), "...")
				},
				minWidth: 20
			}],
			sE = [{
				name: "Property",
				selector: "property",
				sortable: !1,
				left: !0,
				minWidth: 20
			}, {
				name: "Value",
				selector: "value",
				sortable: !1,
				wrap: !0,
				left: !0,
				minWidth: 20
			}],
			iE = function() {
				var e = Object(l.useState)([]),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)({}),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					S = [],
					A = s ? lE.a : cE;
				if (d.timestamp) {
					S = [{
						property: "Time",
						value: d.timestamp
					}, {
						property: "Method",
						value: d.request.method
					}, {
						property: "Status Code",
						value: d.response.statusCode
					}, {
						property: "Path",
						value: d.request.path
					}, {
						property: "Host",
						value: d.request.host
					}, {
						property: "Port",
						value: d.request.port
					}, {
						property: "REQUEST HEADERS",
						value: ""
					}];
					for (var T = 0, f = Object.entries(d.request.headers); T < f.length; T++) {
						var O = Object(u.a)(f[T], 2),
							N = {
								property: O[0],
								value: O[1]
							};
						S.push(N)
					}
					S.push({
						property: "RESPONSE HEADERS",
						value: ""
					});
					for (var b = 0, g = Object.entries(d.response.headers); b < g.length; b++) {
						var R = Object(u.a)(g[b], 2),
							h = {
								property: R[0],
								value: R[1]
							};
						S.push(h)
					}
				}
				return Object(l.useEffect)((function() {
					return window.RQ && window.RQ.DESKTOP && (window.RQ.DESKTOP.SERVICES.IPC.invokeEventInMain("get-current-network-logs").then((function(e) {
							return n(e)
						})), window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("enable-request-logger").then((function() {
							window.RQ.DESKTOP.SERVICES.IPC.registerEvent("log-network-request", (function(e) {
								n(e)
							}))
						}))),
						function() {
							window.RQ && window.RQ.DESKTOP && window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("disable-request-logger").then((function() {
								window.RQ.DESKTOP.SERVICES.IPC.unregisterEvent("log-network-request")
							}))
						}
				}), []), c.a.createElement(c.a.Fragment, null, c.a.createElement(A, {
					split: "vertical",
					minSize: 10,
					defaultSize: 500,
					style: {
						position: "unset"
					}
				}, c.a.createElement(rE.a, {
					columns: oE,
					data: a,
					striped: !0,
					highlightOnHover: !0,
					pointerOnHover: !0,
					dense: !0,
					noHeader: !0,
					fixedHeader: !0,
					fixedHeaderScrollHeight: "85vh",
					onRowClicked: function(e) {
						p(e), i(!0)
					},
					defaultSortAsc: !1,
					defaultSortField: "timestamp"
				}), s ? c.a.createElement("div", {
					className: "previewData"
				}, c.a.createElement(rE.a, {
					columns: sE,
					data: S,
					striped: !0,
					highlightOnHover: !1,
					pointerOnHover: !1,
					dense: !0,
					noHeader: !0,
					fixedHeader: !0,
					fixedHeaderScrollHeight: "85vh",
					responsive: !1
				})) : null))
			},
			uE = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(aE.a, {
					color: "primary",
					fade: !1
				}, c.a.createElement("span", {
					className: "alert-inner--icon"
				}, c.a.createElement(R.B, {
					className: "fix-icon-is-down mr-2"
				})), c.a.createElement("span", {
					className: "alert-inner--text"
				}, "To optimize performance, logger works only when this screen is open & only 50 most recent logs are shown.")))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(iE, null))))
			},
			mE = function() {
				return c.a.createElement("div", {
					className: "row"
				}, c.a.createElement("div", {
					className: "col-lg-6"
				}, c.a.createElement("div", {
					className: "card-wrapper"
				}, c.a.createElement("div", {
					className: "card has-no-box-shadow has-modern-border"
				}, c.a.createElement("div", {
					className: "card-header"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "App Behaviour")), c.a.createElement("div", {
					className: "card-body"
				}, c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "launch-on-startup",
					className: "col-md-10 col-form-label form-control-label"
				}, "Launch Requestly on system startup"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "launch-on-startup",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				})))), c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "data-collection",
					className: "col-md-10 col-form-label form-control-label"
				}, "Allow anonymous data collection"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "data-collection",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				})))))))), c.a.createElement("div", {
					className: "col-lg-6"
				}, c.a.createElement("div", {
					className: "card-wrapper"
				}, c.a.createElement("div", {
					className: "card has-no-box-shadow has-modern-border"
				}, c.a.createElement("div", {
					className: "card-header"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Local Proxy Server")), c.a.createElement("div", {
					className: "card-body"
				}, c.a.createElement("div", {
					class: "form-group row"
				}, c.a.createElement("label", {
					for: "default-host",
					class: "col-md-6 col-form-label form-control-label"
				}, "Default Host"), c.a.createElement("div", {
					class: "col-md-6"
				}, c.a.createElement("input", {
					class: "form-control",
					type: "text",
					value: "127.0.0.0",
					id: "default-host"
				}))), c.a.createElement("div", {
					class: "form-group row"
				}, c.a.createElement("label", {
					for: "default-port",
					class: "col-md-6 col-form-label form-control-label"
				}, "Default Port"), c.a.createElement("div", {
					class: "col-md-6"
				}, c.a.createElement("input", {
					class: "form-control",
					type: "number",
					value: "8080",
					id: "default-port"
				}))), c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "launch-on-startup",
					className: "col-md-10 col-form-label form-control-label"
				}, "Auto apply proxy on application startup"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "launch-on-startup",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				})))), c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "data-collection",
					className: "col-md-10 col-form-label form-control-label"
				}, "Auto remove proxy when I quit Requestly"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "data-collection",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				}))))))), c.a.createElement("div", {
					className: "card-wrapper"
				}, c.a.createElement("div", {
					className: "card has-no-box-shadow has-modern-border"
				}, c.a.createElement("div", {
					className: "card-header"
				}, c.a.createElement("h3", {
					className: "mb-0"
				}, "Certificate")), c.a.createElement("div", {
					className: "card-body"
				}, c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("div", {
					className: "col-md-6 text-center"
				}, c.a.createElement("button", {
					type: "button",
					class: "btn btn-icon btn-outline-primary btn-sm "
				}, c.a.createElement("span", {
					class: "btn-inner--icon"
				}, c.a.createElement("i", {
					class: "ni ni-cloud-download-95"
				})), c.a.createElement("span", {
					class: "btn-inner--text"
				}, "Save certificate"))), c.a.createElement("div", {
					className: "col-md-6 text-center"
				}, c.a.createElement("button", {
					type: "button",
					class: "btn btn-icon btn-outline-primary btn-sm "
				}, c.a.createElement("span", {
					class: "btn-inner--icon"
				}, c.a.createElement("i", {
					class: "ni ni-fat-remove"
				})), c.a.createElement("span", {
					class: "btn-inner--text"
				}, "Clear all certificates")))), c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "data-collection",
					className: "col-md-10 col-form-label form-control-label"
				}, "Auto install certificate on app startup"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "data-collection",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				})))), c.a.createElement("div", {
					className: "form-group row"
				}, c.a.createElement("label", {
					htmlFor: "data-collection",
					className: "col-md-10 col-form-label form-control-label"
				}, "Also install certificate on each rule change"), c.a.createElement("div", {
					className: "col-md-2"
				}, c.a.createElement("label", {
					className: "custom-toggle"
				}, c.a.createElement("input", {
					type: "checkbox",
					id: "data-collection",
					checked: !0,
					onChange: function() {
						return null
					}
				}), c.a.createElement("span", {
					className: "custom-toggle-slider rounded-circle",
					"data-label-off": "No",
					"data-label-on": "Yes"
				})))))))))
			},
			EE = function() {
				var e = Object(l.useState)(1),
					t = Object(u.a)(e, 2),
					a = t[0],
					n = t[1],
					r = function(e, t) {
						e.preventDefault(), n(t)
					};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "nav-wrapper"
				}, c.a.createElement(qm.a, {
					className: "nav nav-pills nav-fill flex-column flex-md-row",
					id: "tabs-icons-text",
					pills: !0,
					role: "tablist"
				}, c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
					"aria-selected": 1 === a,
					className: $m()("mb-sm-3 mb-md-0", {
						active: 1 === a
					}),
					onClick: function(e) {
						return r(e, 1)
					},
					href: "#pablo",
					role: "tab"
				}, c.a.createElement("i", {
					className: "ni ni-app mr-2"
				}), "Apps")), c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
					"aria-selected": 2 === a,
					className: $m()("mb-sm-3 mb-md-0", {
						active: 2 === a
					}),
					onClick: function(e) {
						return r(e, 2)
					},
					href: "#pablo",
					role: "tab"
				}, c.a.createElement("i", {
					className: "ni ni-world-2 mr-2"
				}), "View Traffic")))), c.a.createElement(Se.a, {
					className: "has-no-box-shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(Jm.a, {
					activeTab: "tabs" + a
				}, c.a.createElement(Xm.a, {
					tabId: "tabs1"
				}, 1 === a ? c.a.createElement(tE, null) : null), c.a.createElement(Xm.a, {
					tabId: "tabs2"
				}, 2 === a ? c.a.createElement(uE, null) : null), c.a.createElement(Xm.a, {
					tabId: "tabs3"
				}, 3 === a ? c.a.createElement(mE, null) : null)))))
			},
			dE = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X).state,
					a = st(t),
					n = it(t).isBackgroundProcessActive;
				return a === S.CONSTANTS.APP_MODES.EXTENSION && ge(e), n ? c.a.createElement(c.a.Fragment, null, c.a.createElement("section", null, c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement("div", {
					className: "col"
				}, c.a.createElement(Se.a, null, c.a.createElement(Ae.a, null, c.a.createElement(EE, null))))))))) : c.a.createElement(fe, {
					customLoadingMessage: "Loading background process"
				})
			},
			pE = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(dE, null))
			},
			SE = a(209),
			AE = a.n(SE),
			TE = a(534),
			fE = function(e) {
				var t = e.taskTitle,
					a = e.isThisTaskCompleted,
					n = e.taskDescription,
					r = e.redirectTo,
					o = e.btnText,
					s = e.icon,
					i = Object(l.useState)([]),
					m = Object(u.a)(i, 2),
					E = m[0],
					d = m[1],
					p = Object(ee.g)();
				return Object(l.useEffect)((function() {
					d(n.split("*"))
				}), [n]), c.a.createElement(me.a, {
					md: "6",
					sm: "12",
					lg: "4"
				}, c.a.createElement(Se.a, {
					body: !0
				}, c.a.createElement(wn.a, {
					className: a ? "text-center text-dark" : "text-center text-muted",
					tag: "h3"
				}, c.a.createElement("span", {
					style: {
						borderRadius: "50%"
					},
					className: "bg-secondary px-2 py-1"
				}, c.a.createElement("i", {
					className: s
				})), " ", t, c.a.createElement("hr", null)), c.a.createElement(TE.a, {
					style: {
						minHeight: "100px"
					},
					className: "text-justify"
				}, E.map((function(e, t) {
					return c.a.createElement("h3", {
						key: t
					}, c.a.createElement("i", {
						className: "fa fa-arrow-right"
					}), " ", e)
				}))), c.a.createElement(de.a, {
					disabled: a,
					onClick: function() {
						t.includes("Cancel Request") ? r(p, "Cancel") : t.includes("Redirect Rule") ? r(p, "Redirect") : r(p), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.ONBOARDING, S.CONSTANTS.GA_EVENTS.ACTIONS.CLICKED, "redirected to ".concat(o, " page"))
					},
					color: "primary",
					style: {
						cursor: a ? "default" : "pointer"
					}
				}, a ? c.a.createElement(c.a.Fragment, null, c.a.createElement("i", {
					className: "fa fa-check mr-2"
				}), " Task Completed") : o)))
			},
			OE = function(e) {
				var t = e.progressBarCount;
				return c.a.createElement(Se.a, {
					className: "m-3 d-flex justify-content-between"
				}, c.a.createElement(pe.a, {
					className: "d-flex mx-2 my-3 justify-content-between"
				}, c.a.createElement(me.a, {
					className: ["text-center", "mx-auto", "my-auto", t === S.CONSTANTS.ONBOARDING_TASKS ? "text-success" : "text-muted"].join(" "),
					md: "2",
					sm: "4",
					lg: "2"
				}, c.a.createElement("div", {
					className: "mx-auto px-auto"
				}, c.a.createElement("i", {
					className: "fas fa-3x fa-check-square"
				}))), c.a.createElement(me.a, {
					md: "10",
					sm: "8",
					lg: "10"
				}, c.a.createElement("div", {
					className: "text-left my-2"
				}, c.a.createElement("h3", null, "Onboarding Status")), c.a.createElement(Wc.a, {
					value: t,
					max: "5"
				}), c.a.createElement("div", {
					className: "text-left"
				}, t !== S.CONSTANTS.ONBOARDING_TASKS ? c.a.createElement("i", {
					className: "fas text-danger fa-exclamation-circle"
				}) : c.a.createElement("i", {
					className: "far fa-thumbs-up"
				}), " ", "You have completed ", t, " of 5 Tasks", t !== S.CONSTANTS.ONBOARDING_TASKS ? ", " + (S.CONSTANTS.ONBOARDING_TASKS - t > 0 ? S.CONSTANTS.ONBOARDING_TASKS - t : 0) + "  Tasks remaining" : null))))
			},
			NE = function() {
				var e = Object(l.useRef)(!0),
					t = Object(ee.g)(),
					a = Object(l.useContext)(X).state,
					n = tt(a),
					r = qe(a),
					o = Qe(a),
					s = Object(l.useState)(),
					i = Object(u.a)(s, 2),
					m = i[0],
					E = i[1],
					d = Object(l.useState)(!1),
					p = Object(u.a)(d, 2),
					A = p[0],
					T = p[1],
					f = Object(l.useState)(!1),
					O = Object(u.a)(f, 2),
					N = O[0],
					b = O[1],
					g = Object(l.useState)(!1),
					R = Object(u.a)(g, 2),
					h = R[0],
					C = R[1],
					I = Object(l.useState)(!1),
					L = Object(u.a)(I, 2),
					_ = L[0],
					v = L[1],
					y = Object(l.useState)(!1),
					P = Object(u.a)(y, 2),
					U = P[0],
					D = P[1],
					w = Object(l.useState)(0),
					x = Object(u.a)(w, 2),
					j = x[0],
					k = x[1],
					M = Object(l.useState)(!1),
					G = Object(u.a)(M, 2),
					F = G[0],
					B = G[1];
				Object(l.useEffect)((function() {
					if (n && n.details.profile && n.details) return Da.getValue(["customProfile", n.details.profile.uid, "attributes"]).then((function(t) {
							if (!e.current) return null;
							E((function() {
								return t
							}))
						})),
						function() {
							e.current = !1
						}
				}), [n, r]);
				var V = function(e, t, a, n) {
					m && m[e.toLowerCase()] > 0 && !n ? (a(!0), Ga(t, !0), k((function(e) {
						return e + 1
					})), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.ONBOARDING, S.CONSTANTS.GA_EVENTS.ACTIONS.TASK_COMPLETED, "".concat(t, " task completed"))) : m ? "true" !== m[t.toLowerCase()] || n ? a(!1) : (a(!0), k((function(e) {
						return e + 1
					}))) : a(!1)
				};
				return Object(l.useEffect)((function() {
					V(S.CONSTANTS.RULE_TYPES.REDIRECT + "_rules", "isCreateRedirectRuleTask", C, h), V(S.CONSTANTS.GA_EVENTS.ATTR.NUM_GROUPS, "isCreateGroupTask", D, U), V(S.CONSTANTS.RULE_TYPES.CANCEL + "_rules", "isCreateCancelRuleTask", b, N), V(S.CONSTANTS.GA_EVENTS.ATTR.NUM_SHARED_LISTS, "isCreateSharedListTask", v, _)
				}), [m, r, n]), Object(l.useEffect)((function() {
					var e = o.filter((function(e) {
						return "Redirect_1560244092040" === e.id && "Active" === e.status
					}));
					return m && 0 === e.length && !A ? "true" === m.isvisitmarketplacetask ? (T(!0), k((function(e) {
						return e + 1
					}))) : T(!1) : e.length && !A ? (T(!0), Ga("isVisitMarketplaceTask", !0), Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.ONBOARDING, S.CONSTANTS.GA_EVENTS.ACTIONS.TASK_COMPLETED, "marketplace rule task completed"), k((function(e) {
						return e + 1
					}))) : void 0
				}), [m, n]), n.details.isLoggedIn ? c.a.createElement(re.a, {
					fluid: !0,
					className: "mt-n5"
				}, c.a.createElement(Se.a, null, c.a.createElement(Se.a, {
					className: "m-3"
				}, c.a.createElement(Ft.a, {
					className: "text-center",
					tag: "h3"
				}, "HEY", " ", n.details && n.details.profile && n.details.profile.displayName && n.details.profile.displayName.split(" ")[0].toUpperCase(), ", WELCOME ONBOARD"), c.a.createElement(Ae.a, null, c.a.createElement(pe.a, {
					className: "d-flex m-2 justify-content-between"
				}, c.a.createElement(me.a, {
					className: "text-center text-success mx-auto my-auto",
					md: "2",
					sm: "4",
					lg: "2"
				}, c.a.createElement("div", {
					className: "mx-auto px-auto"
				}, c.a.createElement("img", {
					src: AE.a,
					className: "img-fluid",
					alt: "requestly-asset"
				}))), c.a.createElement(me.a, {
					md: "10",
					sm: "8",
					lg: "10"
				}, c.a.createElement("h3", null, "Here's what you can do with Requestly!"), c.a.createElement("p", {
					className: "text-justify"
				}, "Intercept ", "&", " Modify HTTP Requests, Setup redirects, modify headers, switch hosts, insert user scripts and much more. Used by 125K developers from 500 organizations around the globe."))))), c.a.createElement(OE, {
					progressBarCount: j
				}), c.a.createElement("div", {
					className: "text-center mt-5 pb-5"
				}, c.a.createElement(de.a, {
					onClick: function() {
						B(!F)
					},
					color: "primary"
				}, "Let's get Started\xa0 ", c.a.createElement("i", {
					className: "fas fa-angle-down"
				})), c.a.createElement(de.a, {
					onClick: function() {
						return ge(t)
					},
					color: "primary"
				}, "Already familiar, Go Back")), F ? c.a.createElement(Se.a, {
					className: "m-3"
				}, j !== S.CONSTANTS.ONBOARDING_TASKS ? c.a.createElement(Ft.a, null, "Steps to be Completed") : c.a.createElement(Ft.a, null, c.a.createElement("span", {
					"aria-label": "congratulations",
					role: "img"
				}, "\ud83e\udd73"), " ", "Hurray, you've completed all the tasks"), c.a.createElement(Ae.a, null, c.a.createElement(pe.a, null, c.a.createElement(fE, {
					taskTitle: "Visit MarketPlace",
					isThisTaskCompleted: A,
					taskDescription: "Go to Marketplace*Activate the DuckDuckGo Rule*Try it out by making a google search and see the results",
					btnText: "Visit Marketplace",
					redirectTo: je,
					icon: "ni ni-briefcase-24 text-purple"
				}), c.a.createElement(fE, {
					taskTitle: "Create a Cancel Request Rule",
					isThisTaskCompleted: N,
					taskDescription: "Go to the Editor*Create the rule by providing the name and a URL*Try it out by making a request to the URL",
					btnText: "Create Rule",
					redirectTo: Re,
					icon: "fa fa-ban text-red"
				}), c.a.createElement(fE, {
					taskTitle: "Create a Redirect Rule",
					isThisTaskCompleted: h,
					taskDescription: "Go to the Editor*Create the rule by providing the details*Visit the primary URL and see the magic.",
					btnText: "Create Rule",
					redirectTo: Re,
					icon: "fa fa-random text-green"
				}), c.a.createElement(fE, {
					taskTitle: "Create your first Shared list",
					isThisTaskCompleted: _,
					taskDescription: "Select Rules and click Share Rules*Provide a name for the shared list*Either Copy the link generated and share it*Or enter Email-IDs and click on Notify",
					btnText: "Create Shared List",
					redirectTo: Ce,
					icon: "ni ni-curved-next text-yellow"
				}), c.a.createElement(fE, {
					taskTitle: "Create your first Group",
					isThisTaskCompleted: U,
					taskDescription: "Create a new group*Provide a name for it*Select Rules and click the Change Group button*Select the group created. Voila!",
					btnText: "Create Group",
					redirectTo: ge,
					icon: "ni ni-bag-17 text-orange"
				})))) : null)) : c.a.createElement(Er, null)
			},
			bE = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(kt, {
					component: NE
				}))
			},
			gE = function() {
				var e = Object(l.useContext)(X).state,
					t = it(e),
					a = t.isBackgroundProcessActive,
					n = t.isProxyServerRunning,
					r = t.proxyPort;
				return a && n ? c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					className: "text-center"
				}, c.a.createElement("h2", null, "Setting up system proxy"))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("p", null, "Requestly requires your applications to send their network traffic through the its local proxy server before going to their destination."), c.a.createElement("p", null, "The proxy server you set globally will be used by Safari, Google Chrome, and other applications that respect your system proxy settings. Some applications, including Mozilla Firefox, can have their own custom proxy settings independent from your system settings."))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					className: "text-center"
				}, c.a.createElement("p", null, c.a.createElement("strong", null, "Set your proxy settings to host 127.0.0.1 and port ", r, " ", "(http://127.0.0.1:", r, ")")), c.a.createElement("p", null, "Make sure to set HTTPS proxy, if you want to intercept secure traffic."))), c.a.createElement(pe.a, null, c.a.createElement(me.a, {
					lg: "12",
					className: "text-center"
				}, c.a.createElement("h2", null, "Intercepting HTTPS traffic"))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("p", null, "Requestly generates its own certificates for sites, which it signs using a root certificate called RequestlyCA, which is uniquely generated for your installation of Requestly. You will see a warning in your browser, or other application, when it receives that certificate because the RequestlyCA certificate is not in your list of trusted root certificates."))), c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement("p", null, "Requestly generates its own certificates for sites, which it signs using a root certificate called RequestlyCA, which is uniquely generated for your installation of Requestly. You need to install this certificate on your system."), c.a.createElement("p", {
					className: "text-center"
				}, "Click", " ", c.a.createElement("span", {
					className: "font-weight-bold cursor-pointer",
					onClick: function() {
						return vl()
					}
				}, "here"), " ", "to save certificate to your disk.")))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: "shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(Ee.a, {
					style: {
						background: "transparent"
					},
					className: "text-center"
				}, c.a.createElement("p", null, "Proxy server is not running. Please restart the app or report to us if issue persists.")))))))
			},
			RE = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(re.a, {
					className: " mt--7",
					fluid: !0
				}, c.a.createElement(pe.a, null, c.a.createElement(me.a, null, c.a.createElement(Se.a, {
					className: " shadow"
				}, c.a.createElement(Ae.a, null, c.a.createElement(gE, null)))))))
			},
			hE = function() {
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(ue, null), c.a.createElement(RE, null))
			},
			CE = Y.PATHS,
			IE = Y.AUTH,
			LE = [{
				path: CE.RULE_EDITOR.RELATIVE,
				name: "Rule Editor",
				icon: "ni ni-ui-04 text-blue",
				component: yu,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ONBOARDING.RELATIVE,
				name: "Onboarding Status",
				icon: "ni ni-bullet-list-67",
				component: bE,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.RULES.RELATIVE,
				name: "Rules",
				icon: "fas fa-exchange-alt",
				component: vu,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !0
			}, {
				path: CE.MARKETPLACE.RELATIVE,
				name: "Market",
				icon: "fas fa-store-alt",
				component: sc,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !0
			}, {
				path: CE.FILES.VIEWER.RELATIVE,
				name: "File Viewer",
				icon: "ni ni-folder-17",
				component: tl,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.FILES.RELATIVE,
				name: "Files",
				icon: "fas fa-folder-open",
				component: Vr,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !0
			}, {
				path: CE.SHARED_LISTS.VIEWER.RELATIVE,
				name: "Shared Lists Viewer",
				icon: "ni ni-curved-next",
				component: nm,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.SHARED_LISTS.RELATIVE,
				name: "Sharing",
				icon: "fas fa-share-alt",
				component: $u,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !0
			}, {
				name: "Unlock Premium",
				icon: "ni ni-lock-circle-open text-red",
				component: Pm,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.REFERRAL.RELATIVE,
				name: "Refer Your Friends",
				icon: "ni ni-notification-70 text-green",
				component: $c,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.BACKUP.RELATIVE,
				name: "Data Backup",
				icon: "ni ni-archive-2 text-purple",
				component: To,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				name: "Request an Upgrade",
				icon: "fas fa-file-signature text-blue",
				component: _o,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.PRICING.RELATIVE,
				name: "Pricing",
				icon: "ni ni-lock-circle-open text-red",
				component: Yc,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.LICENSE.MANAGE.RELATIVE,
				name: "Manage License",
				icon: "ni ni-lock-circle-open text-red",
				component: fl,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.LICENSE.RELATIVE,
				name: "License",
				icon: "ni ni-lock-circle-open text-red",
				component: Sl,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.SETTINGS.REMOTE_RULES.RELATIVE,
				name: "Settings",
				icon: "ni ni-lock-circle-open text-red",
				component: Ro,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.SETTINGS.RELATIVE,
				name: "Settings",
				icon: "ni ni-lock-circle-open text-red",
				component: Uu,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.GOODBYE.RELATIVE,
				name: "Goodbye",
				icon: "ni ni-lock-circle-open text-red",
				component: il,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.TEAM.RELATIVE + "/:teamId",
				name: "Manage Team",
				icon: "ni ni-lock-circle-open text-red",
				component: _m,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.MY_TEAMS.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: uc,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.PERSONAL_SUBSCRIPTION.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: Nc,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.UPDATE_SUBSCRIPTION.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: Ym,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: Km,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.UPDATE_PAYMENT_METHOD.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: Vm,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.REFRESH_SUBSCRIPTION.RELATIVE,
				icon: "ni ni-lock-circle-open text-red",
				component: Oo,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.CHECKOUT.RELATIVE,
				name: "< Back to Account Settings",
				icon: "ni ni-lock-circle-open text-red",
				component: mr,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.RELATIVE,
				name: "Manage Account",
				icon: "ni ni-lock-circle-open text-red",
				component: Dn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.AUTH.SIGN_IN.RELATIVE,
				name: "Sign In",
				icon: "ni ni-lock-circle-open text-red",
				component: zn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1,
				props: {
					authMode: IE.ACTION_LABELS.LOG_IN
				}
			}, {
				path: CE.AUTH.DEKSTOP_SIGN_IN.RELATIVE,
				name: "Sign In",
				icon: "ni ni-lock-circle-open text-red",
				component: Xn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.AUTH.SIGN_UP.RELATIVE,
				name: "Sign Up",
				icon: "ni ni-lock-circle-open text-red",
				component: zn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1,
				props: {
					authMode: IE.ACTION_LABELS.SIGN_UP
				}
			}, {
				path: CE.AUTH.FORGOT_PASSWORD.RELATIVE,
				name: "Forgot Password",
				icon: "ni ni-lock-circle-open text-red",
				component: zn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1,
				props: {
					authMode: IE.ACTION_LABELS.REQUEST_RESET_PASSWORD
				}
			}, {
				path: CE.AUTH.EMAIL_ACTION.RELATIVE,
				name: "Email Action",
				icon: "ni ni-lock-circle-open text-red",
				component: Tr,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.AUTH.RESET_PASSWORD.RELATIVE,
				name: "Reset Password",
				icon: "ni ni-lock-circle-open text-red",
				component: zn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1,
				props: {
					authMode: IE.ACTION_LABELS.DO_RESET_PASSWORD
				}
			}, {
				path: CE.AUTH.VERIFY_EMAIL.RELATIVE,
				name: "Verify E-mail",
				icon: "ni ni-lock-circle-open text-red",
				component: xm,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.AUTH.EMAIL_LINK_SIGNIN.RELATIVE,
				name: "Sign in via email link",
				icon: "ni ni-lock-circle-open text-red",
				component: km,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.PAYMENT_SUCCESS.RELATIVE,
				name: "Payment Successful",
				icon: "ni ni-lock-circle-open text-red",
				component: Ec,
				layout: CE.LANDING,
				showLinkInSidebar: !1
			}, {
				path: CE.PAYMENT_FAIL.RELATIVE,
				name: "Payment Failed",
				icon: "ni ni-lock-circle-open text-red",
				component: mc,
				layout: CE.LANDING,
				showLinkInSidebar: !1
			}, {
				path: CE.PAGE404.RELATIVE,
				name: "404",
				icon: "ni ni-lock-circle-open text-red",
				component: Ac,
				layout: CE.LANDING,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCEPT_TEAM_INVITE.RELATIVE,
				name: "Join a Team",
				icon: "ni ni-lock-circle-open text-red",
				component: Mt,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.ACCOUNT.SUPPORT.RELATIVE,
				name: "Requestly Support",
				icon: "ni ni-support-16 text-red",
				component: om,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.APP_MODE.RELATIVE,
				name: "App Mode",
				icon: "ni ni-support-16 text-red",
				component: Mn,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.DESKTOP.MANUAL_SETUP.RELATIVE,
				name: "Manual Setup",
				icon: "ni ni-support-16 text-red",
				component: hE,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.DESKTOP.RELATIVE,
				name: "Manage Proxy Apps",
				icon: "ni ni-support-16 text-red",
				component: pE,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}, {
				path: CE.FEEDBACK.RELATIVE,
				name: "Requestly Feedback",
				icon: "ni ni-support-16 text-red",
				component: il,
				layout: CE.DASHBOARD,
				showLinkInSidebar: !1
			}],
			_E = Y.PATHS,
			vE = function() {
				var e = Object(l.useContext)(X),
					t = e.dispatch,
					a = e.state,
					n = tt(a),
					r = function() {
						t(Ut("authModal", !0, {
							redirectURL: window.location.href
						}))
					},
					o = !0;
				return Object.values(Y.PATHS.AUTH).forEach((function(e) {
					window.location.pathname === e.ABSOLUTE && (o = !1)
				})), o ? c.a.createElement(c.a.Fragment, null, n.loggedIn && n.details && n.details.profile && n.details.profile.displayName && n.details.profile.photoURL ? function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "User",
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http://www.gravatar.com/avatar/?d=identicon";
					return c.a.createElement(Wt.a, {
						nav: !0
					}, c.a.createElement(Kt.a, {
						className: "pr-0",
						nav: !0
					}, c.a.createElement(fs.a, {
						className: "align-items-center"
					}, c.a.createElement("span", {
						className: "avatar avatar-sm rounded-circle"
					}, c.a.createElement("img", {
						alt: e,
						src: t
					})), c.a.createElement(fs.a, {
						className: "ml-2 d-none d-lg-block"
					}, c.a.createElement("span", {
						className: "mb-0 text-sm font-weight-full-bold",
						style: {
							color: "hsla(0,0%,100%,.85)"
						}
					}, e)))), c.a.createElement(qt.a, {
						className: "dropdown-menu-arrow mt-5 ml-n6",
						right: !0
					}, c.a.createElement(Qt.a, {
						className: "noti-title",
						header: !0,
						tag: "div"
					}, c.a.createElement("h6", {
						className: "text-overflow m-0"
					}, "Howdy, ", e.split(" ")[0])), c.a.createElement(Qt.a, {
						to: _E.LICENSE.ABSOLUTE,
						tag: i.b
					}, c.a.createElement("i", {
						className: "ni ni-key-25"
					}), c.a.createElement("span", null, "License")), c.a.createElement(Qt.a, {
						to: _E.SETTINGS.ABSOLUTE,
						tag: i.b
					}, c.a.createElement("i", {
						className: "ni ni-chart-pie-35"
					}), c.a.createElement("span", null, "Storage")), c.a.createElement(Qt.a, {
						to: _E.SETTINGS.REMOTE_RULES.ABSOLUTE,
						tag: i.b
					}, c.a.createElement("i", {
						className: "ni ni-compass-04"
					}), c.a.createElement("span", null, "Remote Rules")), c.a.createElement(Qt.a, {
						to: _E.ACCOUNT.ABSOLUTE,
						tag: i.b
					}, c.a.createElement("i", {
						className: "ni ni-single-02"
					}), c.a.createElement("span", null, "Account")), c.a.createElement(Qt.a, {
						divider: !0
					}), c.a.createElement(Qt.a, {
						onClick: yn,
						className: "cursor-pointer"
					}, c.a.createElement("i", {
						className: "ni ni-user-run"
					}), c.a.createElement("span", null, "Logout"))))
				}(n.details.profile.displayName, n.details.profile.photoURL) : c.a.createElement("span", {
					className: "h4 mb-0 text-white text-uppercase d-none d-lg-inline-block cursor-pointer",
					onClick: r
				}, "Sign In")) : null
			},
			yE = function(e) {
				var t, a, n = e.component,
					r = Object(l.useState)(!0),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1];
				"navbar" === n ? (t = s ? "active sidenav-toggler d-block d-xl-none" : "sidenav-toggler d-block d-xl-none", a = "bg-white") : "sidebar" === n && (t = s ? "active sidenav-toggler d-none d-xl-block" : "sidenav-toggler p-3 d-none d-xl-block", a = "bg-black"), Object(l.useEffect)((function() {
					"sidebar" === n && m(s)
				}), [n, s]);
				var m = function(e) {
					e ? (document.body.classList.remove("g-sidenav-hidden"), document.body.classList.add("g-sidenav-show"), document.body.classList.add("g-sidenav-pinned")) : (document.body.classList.remove("g-sidenav-pinned"), document.body.classList.add("g-sidenav-hidden"))
				};
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "sidenav-toggler-container m-2 "
				}, c.a.createElement("div", {
					className: t,
					"data-toggle": "sidenav-pin",
					"data-target": "#sidenav-main",
					onClick: function() {
						i(!s), m(!s), document.body.classList.add("g-sidenav-show")
					}
				}, c.a.createElement("div", {
					className: "sidenav-toggler-inner"
				}, c.a.createElement("i", {
					className: "sidenav-toggler-line ".concat(a)
				}), c.a.createElement("i", {
					className: "sidenav-toggler-line ".concat(a)
				}), c.a.createElement("i", {
					className: "sidenav-toggler-line ".concat(a)
				})))))
			},
			PE = a(535),
			UE = a(536),
			DE = a(537),
			wE = function() {
				var e = Object(ee.g)(),
					t = Object(l.useContext)(X).state,
					a = st(t),
					n = Object(l.useState)(!1),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1];
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
					id: "UncontrolledPopover",
					style: {
						color: "white"
					},
					className: "bright-on-hover cursor-pointer ml-0 ml-sm-2"
				}, c.a.createElement(R.G, {
					className: "fix-icon-is-down"
				}), c.a.createElement("span", {
					className: "ml-2 mr-4 text-sm font-weight-bold"
				}, pa(a))), c.a.createElement(PE.a, {
					target: "UncontrolledPopover",
					trigger: "legacy",
					placement: "left-start",
					hideArrow: !0,
					isOpen: o,
					toggle: function() {
						return s(!o)
					}
				}, c.a.createElement(UE.a, {
					className: " bg-default white-color no-bottom-border text-align-center"
				}, "Use Requestly with"), c.a.createElement(DE.a, {
					className: " bg-default"
				}, c.a.createElement("div", {
					className: "row shortcuts px-4 "
				}, Object.keys(jn).map((function(t) {
					return c.a.createElement("span", {
						className: "col shortcut-item cursor-pointer",
						key: t,
						onClick: function() {
							s(!1),
								function(e) {
									e.push(Ne.APP_MODE.ABSOLUTE)
								}(e)
						}
					}, c.a.createElement("span", {
						className: "shortcut-media avatar rounded-circle bg-gradient-".concat(jn[t].iconBackgroundColor)
					}, c.a.createElement(jn[t].Icon)), c.a.createElement("small", {
						className: "white-color bright-on-hover"
					}, jn[t].shortName))
				}))))))
			},
			xE = function(e) {
				var t = e.content,
					a = e.ctaHandler,
					n = e.bannerIcon,
					r = e.ctaText,
					l = e.ctaIcon,
					o = e.ctaIconPostion,
					s = e.currentPath,
					i = e.blackListPaths,
					u = e.dismissible,
					m = e.isDismissed,
					E = e.onDismiss,
					d = function() {
						return l ? c.a.createElement("span", {
							className: "btn-inner--icon"
						}, c.a.createElement(l), " ") : c.a.createElement(c.a.Fragment, null)
					};
				return i.includes(s) ? null : c.a.createElement("nav", {
					className: "navbar navbar-top navbar-expand navbar-dark bg-gradient-blue border-bottom-0"
				}, c.a.createElement("div", {
					className: "container-fluid"
				}, c.a.createElement("div", {
					className: "collapse navbar-collapse border-bottom-0 justify-content-center"
				}, c.a.createElement(ul.a, {
					color: "primary",
					role: "alert",
					className: "p-2 mt-0 alert text-secondary alert-banner alert-primary shadow my-0",
					isOpen: !u || !m,
					toggle: E,
					closeClassName: u ? "banner-alert-close" : "hide-element"
				}, c.a.createElement("span", null, n ? c.a.createElement("span", {
					className: "mr-2"
				}, c.a.createElement(n)) : null, c.a.createElement("span", {
					className: "banner-text mr-2"
				}, c.a.createElement(t)), c.a.createElement(de.a, {
					color: "default",
					className: "btn btn-email btn-xs btn-white btn-icon",
					onClick: a,
					size: "sm"
				}, "start" === o ? d() : null, c.a.createElement("span", {
					className: "btn-inner--text"
				}, r || "Click Here"), "end" === o ? d() : null))))))
			},
			jE = Y.PATHS,
			kE = function(e) {
				var t = e.resendVerificationEmailHandler,
					a = e.currentPath;
				return c.a.createElement(xE, {
					content: function() {
						return c.a.createElement("strong", null, "Please check your email for the verification link")
					},
					ctaText: "Resend Email Verification link",
					ctaIcon: function() {
						return c.a.createElement("i", {
							className: "ni ni-send"
						})
					},
					bannerIcon: function() {
						return c.a.createElement("i", {
							className: "fas fa-exclamation-circle"
						})
					},
					ctaHandler: t,
					ctaIconPostion: "end",
					currentPath: a,
					blackListPaths: [jE.AUTH.VERIFY_EMAIL.RELATIVE],
					dismissible: !1
				})
			},
			ME = a(131),
			GE = function() {
				var e = Object(l.useRef)(!0),
					t = Object(ee.g)(),
					a = Object(l.useContext)(X).state,
					n = tt(a),
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					m = Object(l.useState)(!1),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1];
				return Object(l.useEffect)((function() {
					if (n && n.details.profile && n.details) return Da.getValue(["customProfile", n.details.profile.uid]).then((function(t) {
							if (t && (i(function(e, t) {
									Date.prototype.addDays = function(e) {
										var t = new Date(this.valueOf());
										return t.setDate(t.getDate() + e), t
									};
									var a = new Date(e);
									return (new Date).getTime() <= new Date(a.addDays(t).getFullYear() + "-" + (a.addDays(t).getMonth() + 1) + "-" + a.addDays(t).getDate()).getTime()
								}(t.signup.signup_date, S.CONSTANTS.ONBOARDING_DAYS_TO_EXPIRE)), t.attributes.hasInitiallyVisited ? p(!1) : "/rules" === window.location.pathname && (p(!0), Da.setValue(["customProfile", n.details.profile.uid, "attributes", "hasInitiallyVisited"], !0))), !e.current) return null
						})),
						function() {
							e.current = !1
						}
				}), [n, window.location.pathname]), c.a.createElement(c.a.Fragment, null, s ? c.a.createElement(c.a.Fragment, null, c.a.createElement(ME.a, {
					placement: "bottom",
					isOpen: d,
					target: "tooltip"
				}, "Click here to get started."), c.a.createElement(de.a, {
					id: "tooltip",
					className: "btn-icon bg-transparent btn-3 has-no-box-shadow",
					color: "primary",
					size: "sm",
					type: "button",
					onClick: function() {
						return Ma(S.CONSTANTS.GA_EVENTS.CATEGORIES.ONBOARDING, S.CONSTANTS.GA_EVENTS.ACTIONS.CLICKED, "clicked on getting started button on dashboard navbar"), Ge(t)
					}
				}, c.a.createElement("span", {
					className: "btn-inner--icon"
				}, c.a.createElement(Go.a, {
					className: "fix-icon-is-down"
				})), c.a.createElement("span", {
					className: "ml-2 mr-4 text-sm font-weight-bold"
				}, "Getting Started"))) : null)
			},
			FE = a(69),
			BE = a(478),
			VE = a(494),
			HE = Y.PATHS,
			YE = function(e) {
				var t = e.backToMainLink || "/",
					a = Object(ee.g)(),
					n = Object(l.useState)(!1),
					r = Object(u.a)(n, 2),
					o = r[0],
					s = r[1],
					m = Object(l.useState)(!0),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1],
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1],
					N = Object(l.useContext)(X),
					b = N.dispatch,
					g = N.state,
					h = at(g),
					C = tt(g),
					I = st(g),
					L = it(g),
					_ = L.isBackgroundProcessActive,
					v = L.isProxyServerRunning,
					y = L.proxyPort,
					P = function(e) {
						var t;
						e.preventDefault(), t = e.target.value, b(yt(o, t))
					},
					U = function() {
						return _ && v ? c.a.createElement("i", {
							className: "text-success fa fa-circle fix-icon-is-down status-dot-icon"
						}) : c.a.createElement("i", {
							className: "text-danger fa fa-circle fix-icon-is-down status-dot-icon"
						})
					},
					D = function() {
						return window.location.pathname.replace(/\/$/, "") !== Y.PATHS.DESKTOP.ABSOLUTE ? c.a.createElement(de.a, {
							color: "default",
							className: "btn btn-email btn-xs btn-white btn-icon",
							onClick: function() {
								return function(e) {
									e.push(Ne.DESKTOP.ABSOLUTE)
								}(a)
							},
							size: "sm"
						}, c.a.createElement("span", {
							className: "btn-inner--icon"
						}, c.a.createElement("i", {
							className: "ni ni-spaceship"
						})), c.a.createElement("span", {
							className: "btn-inner--text"
						}, "Manage Connected Apps")) : c.a.createElement(de.a, {
							color: "default",
							className: "btn btn-email btn-xs btn-white btn-icon",
							onClick: function() {
								return ge(a)
							},
							size: "sm"
						}, c.a.createElement("span", {
							className: "btn-inner--icon"
						}, c.a.createElement(R.a, null)), c.a.createElement("span", {
							className: "btn-inner--text"
						}, "Back to Rules"))
					},
					w = function() {
						return c.a.createElement(ul.a, {
							color: "primary",
							role: "alert",
							className: " p-2 mt-0 alert text-secondary alert-banner alert-primary shadow my-0 mr-sm-3 mr-9 d-none d-sm-flex mr-n4 ml-lg-auto d-flex align-items-center"
						}, c.a.createElement("span", {
							className: "mr-2"
						}, c.a.createElement(U, null)), c.a.createElement("span", {
							className: "banner-text mr-2"
						}, _ ? v ? c.a.createElement(c.a.Fragment, null, c.a.createElement("strong", null, "Proxy server up. "), c.a.createElement("span", {
							className: "font-weight-bold"
						}, "Host:"), "\xa0", c.a.createElement("span", null, "127.0.0.1"), "\xa0", c.a.createElement("span", {
							className: "font-weight-bold"
						}, "Port:"), "\xa0", c.a.createElement("span", null, y)) : c.a.createElement(c.a.Fragment, null, "Proxy server down ") : c.a.createElement(c.a.Fragment, null, "Starting background service... ")), D())
					},
					x = Object(l.useCallback)(s, []),
					j = Object(l.useCallback)((function(e) {
						switch ("/" === e[e.length - 1] && (e = e.slice(0, -1)), e) {
							case HE.RULES.ABSOLUTE:
								return "rules";
							case HE.FILES.ABSOLUTE:
								return "files";
							case HE.SHARED_LISTS.ABSOLUTE:
								return "sharedLists";
							case HE.MARKETPLACE.ABSOLUTE:
								return "marketplace";
							default:
								return !1
						}
					}), []);
				return Object(l.useEffect)((function() {
					var t, a = C.details.profile || C.details;
					C.loggedIn && !f && (O(!0), (t = a.uid, t ? Da.getValue(["customProfile", t, "signup"]).then(function() {
						var e = Object(ea.a)($t.a.mark((function e(a) {
							return $t.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (a) {
											e.next = 6;
											break
										}
										return e.next = 3, Ta(t, !0);
									case 3:
										return e.abrupt("return", !0);
									case 6:
										return e.abrupt("return", a.emailVerified);
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()).catch((function(e) {
						return console.log(e)
					})) : new Promise.resolve(!1)).then((function(e) {
						p(e)
					})).catch((function(e) {
						return console.log(e)
					}))), x(j(e.location.pathname))
				}), [C.loggedIn, C.details, f, x, j, e.location.pathname, p]), c.a.createElement(c.a.Fragment, null, c.a.createElement("nav", {
					className: "navbar navbar-top navbar-expand navbar-dark bg-gradient-blue border-bottom-0"
				}, c.a.createElement("div", {
					className: "container-fluid"
				}, c.a.createElement("div", {
					className: "collapse navbar-collapse border-bottom-0 justify-content-end",
					id: "navbarSupportedContent"
				}, c.a.createElement(i.b, {
					className: "h4 mb-0 mr-4 text-white text-uppercase d-none d-lg-inline-block",
					to: t
				}, e.brandText), I === S.CONSTANTS.APP_MODES.DESKTOP ? w() : o ? c.a.createElement(mn.a, {
					className: "navbar-search navbar-search-light form-inline mr-sm-3 mr-9 d-none d-sm-flex mr-n4 ml-lg-auto",
					onSubmit: function(e) {
						return e.preventDefault()
					}
				}, c.a.createElement(un.a, {
					className: "mb-0"
				}, c.a.createElement(Bt.a, {
					className: "input-group-alternative"
				}, c.a.createElement(Vt.a, {
					addonType: "prepend"
				}, c.a.createElement(Ht.a, null, c.a.createElement("i", {
					className: "fas fa-search"
				}))), c.a.createElement(Yt.a, {
					placeholder: "Search ".concat(BE(VE(o))),
					type: "text",
					value: FE(h, o, ""),
					onChange: P
				})))) : null, c.a.createElement("ul", {
					className: "navbar-nav align-items-center ml-md-auto"
				}, c.a.createElement("li", {
					className: "nav-item d-xl-none"
				}, c.a.createElement(yE, {
					component: "navbar"
				})), C.details.profile || C.details || C.loggedIn ? c.a.createElement(GE, null) : null, I === S.CONSTANTS.APP_MODES.DESKTOP ? null : c.a.createElement(wE, null)), c.a.createElement(vE, null)))), C.loggedIn ? d ? null : c.a.createElement(kE, {
					resendVerificationEmailHandler: Oa,
					currentPath: e.location.pathname
				}) : null)
			},
			WE = Y.LINKS,
			KE = parseInt(162926.1216807) % 1e4,
			qE = function(e) {
				Object(se.a)(a, e);
				var t = Object(ie.a)(a);

				function a() {
					return Object(ce.a)(this, a), t.apply(this, arguments)
				}
				return Object(oe.a)(a, [{
					key: "render",
					value: function() {
						return c.a.createElement("footer", {
							className: "footer"
						}, c.a.createElement(pe.a, {
							className: "align-items-center justify-content-xl-between"
						}, c.a.createElement(me.a, {
							xl: "6"
						}, c.a.createElement("div", {
							className: "copyright text-center text-xl-left text-muted"
						}, "\xa9 2014 - 2021", " ", c.a.createElement("a", {
							className: "font-weight-bold ml-1",
							href: "https://requestly.io",
							rel: "noopener noreferrer",
							target: "_blank"
						}, "Requestly"))), c.a.createElement(me.a, {
							xl: "6"
						}, c.a.createElement(qm.a, {
							className: "nav-footer justify-content-center justify-content-xl-end"
						}, c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
							href: WE.REQUESTLY_GITHUB_ISSUES,
							rel: "noopener noreferrer",
							target: "_blank"
						}, "Report Issue")), c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
							href: WE.REQUESTLY_DESKTOP_APP,
							rel: "noopener noreferrer",
							target: "_blank"
						}, "Get Desktop App")), c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
							href: WE.REQUESTLY_BLOG,
							rel: "noopener noreferrer",
							target: "_blank"
						}, "Blog")), c.a.createElement(Qm.a, null, c.a.createElement(zm.a, {
							href: WE.REQUESTLY_PRIVACY_POLICY,
							rel: "noopener noreferrer",
							target: "_blank"
						}, "Privacy"))))), c.a.createElement(pe.a, {
							className: "align-items-center justify-content-xl-between mt-1"
						}, c.a.createElement(me.a, {
							xl: "6"
						}, c.a.createElement("div", {
							className: "copyright d-none text-center text-xl-left text-muted"
						}, "2028 Fieldcrest Ln, Twinsburg OH 44087")), c.a.createElement(me.a, {
							xl: "6",
							className: "copyright text-center text-xl-right text-muted justify-content-end justify-content-xl-end align-items-right justify-content-xl-end"
						}, c.a.createElement("span", null, "Build ".concat(KE, " ").concat("8/18/2021")))))
					}
				}]), a
			}(c.a.Component),
			QE = Y.LINKS,
			zE = function(e) {
				var t, a = e.routes,
					n = void 0 === a ? [{}] : a,
					r = e.logo,
					o = Object(ee.g)(),
					s = Object(l.useContext)(X).state,
					m = tt(s),
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1],
					A = Object(l.useState)(!1),
					T = Object(u.a)(A, 2),
					f = T[0],
					O = T[1];
				Object(l.useLayoutEffect)((function() {
					m.details.isLoggedIn && m.details.planDetails ? (S(ft(m.details.planDetails)), O(pt(m))) : (O(!1), S(!1))
				}), [m]);
				var N = setInterval((function() {
					void 0 !== (t = document.getElementsByClassName("sc-fzXfNQ")[0]) && (clearInterval(N), "/support" !== window.location.pathname || pt(m) ? "/pricing" === window.location.pathname ? t.style.display = "block" : t.style.display = "none" : t.style.display = "block")
				}), 2e3);
				return c.a.createElement("nav", {
					className: "sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white",
					id: "sidenav-main",
					style: {
						overflowX: "hidden"
					}
				}, c.a.createElement("div", {
					className: "scrollbar-inner"
				}, c.a.createElement("div", {
					className: "sidenav-header d-flex align-items-center"
				}, c.a.createElement("a", {
					style: {
						zIndex: 15
					},
					className: "navbar-brand",
					href: "../../../index.html"
				}, c.a.createElement("img", {
					src: r.imgSrc,
					className: "navbar-brand-img mx-auto",
					alt: r.imgAlt
				})), c.a.createElement(yE, {
					component: "sidebar"
				})), c.a.createElement("div", {
					className: "navbar-inner"
				}, c.a.createElement("div", {
					className: "collapse navbar-collapse",
					id: "sidenav-collapse-main"
				}, c.a.createElement("ul", {
					className: "navbar-nav"
				}, function(e) {
					return e.filter((function(e) {
						return e.showLinkInSidebar
					})).map((function(e, t) {
						return c.a.createElement("li", {
							className: "nav-item",
							key: t
						}, c.a.createElement(zm.a, {
							to: e.layout.concat(e.path).replace(/\/\//g, "/"),
							tag: i.c,
							activeClassName: "active",
							"aria-expanded": "true",
							"aria-controls": "navbar-dashboards"
						}, c.a.createElement("i", {
							className: e.icon
						}), c.a.createElement("span", {
							className: "nav-link-text"
						}, e.name)))
					}))
				}(n)), c.a.createElement("hr", {
					className: "my-3 hide-when-height-is-less-than-660"
				}), c.a.createElement("ul", {
					className: "navbar-nav mb-md-3 hide-when-height-is-less-than-660"
				}, c.a.createElement(Qm.a, {
					className: ""
				}, c.a.createElement(zm.a, {
					target: "_blank",
					href: QE.REQUESTLY_DOCS
				}, c.a.createElement("i", {
					className: "ni ni-book-bookmark"
				}), c.a.createElement("span", {
					className: "nav-link-text"
				}, "Docs"))), c.a.createElement(Qm.a, {
					className: ""
				}, c.a.createElement(zm.a, {
					target: "_blank",
					href: QE.REQUESTLY_GITHUB_ISSUES
				}, c.a.createElement("i", null, c.a.createElement(R.y, null)), c.a.createElement("span", {
					className: "nav-link-text"
				}, "GitHub")))), c.a.createElement("ul", {
					className: "navbar-nav position-absolute",
					style: {
						bottom: "0"
					}
				}, c.a.createElement("li", {
					className: "active-pro active",
					style: {
						background: "unset"
					}
				}, f ? p ? c.a.createElement(zm.a, {
					href: Y.PATHS.PRICING.ABSOLUTE,
					className: "sidebar-plan-info-navlink "
				}, c.a.createElement("i", {
					className: "ni ni-spaceship"
				}), c.a.createElement("span", {
					className: "sidebar-plan-info-text"
				}, "Renew")) : c.a.createElement(zm.a, {
					href: Y.PATHS.ACCOUNT.ABSOLUTE,
					className: "sidebar-plan-info-navlink ",
					style: {
						color: "limegreen"
					}
				}, c.a.createElement("i", {
					className: "ni ni-diamond",
					style: {
						color: "limegreen"
					}
				}), c.a.createElement("span", {
					className: "sidebar-plan-info-text"
				}, "Premium")) : c.a.createElement(zm.a, {
					onClick: function() {
						return ye(o)
					},
					className: "sidebar-plan-info-navlink "
				}, c.a.createElement("i", {
					className: "ni ni-spaceship"
				}), c.a.createElement("span", {
					className: "sidebar-plan-info-text"
				}, "Upgrade"))))))))
			},
			JE = function(e) {
				var t = e.toggle,
					a = e.isOpen;
				return c.a.createElement(Xt.a, {
					className: "modal-dialog-centered ",
					isOpen: a,
					toggle: t
				}, c.a.createElement("div", {
					className: "modal-body "
				}, c.a.createElement(fe, {
					customLoadingMessage: "Loading"
				})))
			},
			XE = function(e) {
				var t = e.isOpen,
					a = e.toggle,
					n = e.authMode,
					r = e.src,
					o = e.callback,
					s = Object(l.useContext)(X).state,
					i = tt(s),
					m = Object(l.useState)(n || Y.AUTH.ACTION_LABELS.LOG_IN),
					E = Object(u.a)(m, 2),
					d = E[0],
					p = E[1];
				return Object(l.useLayoutEffect)((function() {
					i.loggedIn && a()
				}), [i.loggedIn, a]), c.a.createElement(Xt.a, {
					className: "modal-dialog-centered",
					size: "sm",
					isOpen: t,
					toggle: function() {
						return a()
					}
				}, c.a.createElement("div", {
					className: "modal-body p-0"
				}, c.a.createElement(Kn, {
					authMode: d,
					src: r,
					callbacks: {
						onSignInSuccess: o,
						onRequestPasswordResetSuccess: a
					},
					setAuthMode: p
				})))
			},
			ZE = Y.PATHS,
			$E = function(e) {
				var t = Object(l.useContext)(X),
					n = t.state,
					r = t.dispatch,
					o = ot(n),
					s = function(e) {
						var t = Object(l.useRef)();
						return Object(l.useEffect)((function() {
							t.current = e
						})), t.current
					}({
						location: e.location
					});
				Object(l.useEffect)((function() {
					s && s.location !== e.location && (document.documentElement.scrollTop = 0, document.scrollingElement.scrollTop = 0, document.getElementById("dashboardMainContent").scrollTop = 0), s && s.location === e.location || Va(Yn(e.location.pathname))
				}), [e.location, s]);
				var i = function(e) {
					var t = !1,
						a = !1,
						n = e.split("/");
					"/" === e[e.length - 1] && (e = e.slice(0, -1)), n.length > 1 && (a = "/" + n[1]);
					for (var r = 0; r < LE.length; r++) e === LE[r].layout.concat(LE[r].path).replace(/\/\//g, "/") && (t = LE[r].name);
					return {
						title: t || "< Back to Main",
						backToMainLink: a
					}
				}(e.location.pathname);
				return c.a.createElement(c.a.Fragment, null, c.a.createElement(le.a, {
					position: "top-center",
					autoClose: Y.NOTIFICATION_DURATION,
					newestOnTop: !0,
					closeOnClick: !0,
					rtl: !1,
					pauseOnFocusLoss: !0,
					draggable: !0,
					pauseOnHover: !1
				}), c.a.createElement(zE, Object.assign({}, e, {
					routes: LE,
					logo: {
						innerLink: ZE.ROOT,
						imgSrc: a(495),
						imgAlt: "Requestly Logo"
					}
				})), c.a.createElement("div", {
					className: "main-content",
					id: "dashboardMainContent"
				}, c.a.createElement(YE, Object.assign({}, e, {
					brandText: i.title,
					backToMainLink: i.backToMainLink
				})), c.a.createElement(ee.d, null, LE.map((function(e, t) {
					if (e.layout === ZE.DASHBOARD) {
						var a = e.props || {};
						return c.a.createElement(ee.b, {
							path: e.layout.concat(e.path).replace(/\/\//g, "/"),
							key: t,
							render: function(t) {
								return c.a.createElement(e.component, Object.assign({}, t, a))
							}
						})
					}
					return null
				})), c.a.createElement(ee.a, {
					exact: !0,
					from: ZE.ROOT,
					to: ZE.RULES.ABSOLUTE
				}), c.a.createElement(ee.a, {
					exact: !0,
					from: ZE.INDEX_HTML,
					to: ZE.RULES.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: ZE.EXTENSION_INSTALLED,
					to: ZE.RULES.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: ZE.ANY,
					to: ZE.PAGE404.ABSOLUTE
				})), c.a.createElement(re.a, {
					fluid: !0
				}, c.a.createElement(qE, null))), o.loadingModal.isActive ? c.a.createElement(JE, {
					isOpen: o.loadingModal.isActive,
					toggle: function() {
						r(Ut("loadingModal"))
					}
				}) : null, o.authModal.isActive ? c.a.createElement(XE, Object.assign({
					isOpen: o.authModal.isActive,
					toggle: function() {
						r(Ut("authModal"))
					}
				}, o.authModal.props)) : null)
			},
			ed = Y.PATHS,
			td = function(e) {
				var t = function(e) {
					var t = Object(l.useRef)();
					return Object(l.useEffect)((function() {
						t.current = e
					})), t.current
				}({
					location: e.location
				});
				Object(l.useEffect)((function() {
					t && t.location !== e.location && (document.documentElement.scrollTop = 0, document.scrollingElement.scrollTop = 0, document.getElementById("landingMainContent").scrollTop = 0), t && t.location === e.location || Va(Yn(e.location.pathname))
				}), [e.location, t]);
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: "main-content",
					id: "landingMainContent"
				}, c.a.createElement(ee.d, null, LE.map((function(e, t) {
					if (e.layout === ed.LANDING) {
						var a = e.props || {};
						return c.a.createElement(ee.b, {
							path: e.layout.concat(e.path).replace(/\/\//g, "/"),
							key: t,
							render: function(t) {
								return c.a.createElement(e.component, Object.assign({}, t, a))
							}
						})
					}
					return null
				})), c.a.createElement(ee.a, {
					from: ed.ANY,
					to: ed.PAGE404.ABSOLUTE
				}))))
			},
			ad = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					a = e.dispatch,
					n = st(t),
					r = it(t);
				return Object(l.useEffect)((function() {
					n === S.CONSTANTS.APP_MODES.DESKTOP && (r.isBackgroundProcessActive || _l().then((function(e) {
						a(Dt({
							isBackgroundProcessActive: !!e
						})), !0 === e && window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("start-proxy-server").then((function(e) {
							var t = e.success,
								n = e.port;
							a(Dt({
								isProxyServerRunning: !!t,
								proxyPort: n
							}))
						}))
					})))
				}), [n, r, a]), c.a.createElement(c.a.Fragment, null)
			},
			nd = function() {
				var e = document.getElementById("ipl-progress-indicator");
				e && (e.classList.add("available"), setTimeout((function() {
					e.outerHTML = ""
				}), 1e3)), document.body.style.pointerEvents = "unset"
			},
			rd = Y.PATHS,
			ld = function() {
				var e = Object(l.useContext)(X),
					t = e.state,
					a = e.dispatch,
					n = st(t),
					r = Object(l.useState)(!1),
					o = Object(u.a)(r, 2),
					s = o[0],
					i = o[1],
					E = Object(l.useState)(!1),
					d = Object(u.a)(E, 2),
					p = d[0],
					S = d[1];
				if (Object(l.useEffect)((function() {
						s || (i(!0), ne.a.auth().onAuthStateChanged((function(e) {
							e ? (ya(["userSubscriptions", e.uid, "planDetails"]).then((function(t) {
								a(ht(!0, {
										profile: La(e),
										isLoggedIn: !0,
										planDetails: t
									})),
									function(e) {
										return e && St(e.planId) && !ft(e) && ("active" === e.status || "referral" === e.type)
									}(t) && io(n).then((function(e) {
										!e || function(e) {
											var t = !1;
											if (e) {
												var a = uo(Date.now(), e);
												Math.floor(a / 1e3 / 60 / 60 / 24) > 7 && (t = !0)
											}
											return Boolean(!e && t)
										}(e) ? (console.log("Time in app.js", e), mo(n).then((function(e) {
											e && (console.log("Created new backup from app.js", e), a(Ct(e)))
										}))) : a(Ct(e))
									})), p || (S(!0), nd())
							})).catch((function(e) {
								console.error("Unable to fetch user plan", e.message), a(ht(!1, !1)), p || (S(!0), nd())
							})), window.top === window.self && function(e) {
								var t = ja(e);
								! function() {
									window.sib = {
										equeue: [],
										client_key: "ajzj60vxaywpk24xe054qsh1"
									}, window.sib.email_id = e ? t.email : "N/A", window.sib.custom_welcome_message = e ? "Hello, how can we help you?" : "Please sign in to your account or enter your email here first for better support.", window.sib.custom_offline_message = "We are currently offline. In order to answer you, please indicate your email in your messages.", window.sendinblue = {};
									for (var a = ["track", "identify", "trackLink", "page"], n = 0; n < a.length; n++) ! function(e) {
										window.sendinblue[e] = function() {
											var t = Array.prototype.slice.call(arguments);
											(window.sib[e] || function() {
												var a = {};
												a[e] = t, window.sib.equeue.push(a)
											})(t[0], t[1], t[2])
										}
									}(a[n]);
									var r = document.createElement("script");
									n = document.getElementsByTagName("script")[0], r.type = "text/javascript", r.id = "sendinblue-js", r.async = !0, r.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, n.parentNode.insertBefore(r, n), window.sendinblue.page()
								}()
							}(e)) : (a(ht(!1, !1)), p || (S(!0), nd()))
						})))
					}), [a, n, s, p]), Object(l.useLayoutEffect)((function() {
						window.RQ && window.RQ.MODE && a(function(e) {
							return {
								type: m.UPDATE_APP_MODE,
								payload: {
									appMode: e
								}
							}
						}(window.RQ.MODE))
					}), [a]), ae()(window.location.hash)) return c.a.createElement(c.a.Fragment, null, c.a.createElement(ad, null), c.a.createElement(ee.d, null, c.a.createElement(ee.b, {
					path: rd.LANDING,
					render: function(e) {
						return c.a.createElement(td, e)
					}
				}), c.a.createElement(ee.b, {
					path: rd.DASHBOARD,
					render: function(e) {
						return c.a.createElement($E, e)
					}
				}), c.a.createElement(ee.a, {
					from: rd.EXTENSION_INSTALLED,
					to: rd.RULES.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.GOODBYE.RELATIVE,
					to: rd.FEEDBACK.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.FILES_LIBRARY.ABSOLUTE + "/:id",
					to: rd.FILES.VIEWER.ABSOLUTE + "/:id"
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.PRICING.ABSOLUTE,
					to: rd.PRICING.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.LICENSE.MANAGE.ABSOLUTE,
					to: rd.LICENSE.MANAGE.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.LICENSE.ABSOLUTE,
					to: rd.LICENSE.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.SETTINGS.REMOTE_RULES.ABSOLUTE,
					to: rd.SETTINGS.REMOTE_RULES.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.SETTINGS.ABSOLUTE,
					to: rd.SETTINGS.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.UNLOCK_PREMIUM.ABSOLUTE,
					to: rd.UNLOCK_PREMIUM.ABSOLUTE
				}), c.a.createElement(ee.a, {
					from: rd.LEGACY.GOODBYE.ABSOLUTE,
					to: rd.GOODBYE.ABSOLUTE
				}), c.a.createElement(ee.a, {
					exact: !0,
					from: rd.ROOT,
					to: rd.RULES.ABSOLUTE
				})));
				var A = window.location.hash.split("/"),
					T = A[0],
					f = A[1];
				switch (T) {
					case rd.HASH.SHARED_LISTS:
						window.location.assign(rd.SHARED_LISTS.VIEWER.ABSOLUTE + "/" + f);
						break;
					case rd.HASH.RULE_EDITOR:
						window.location.replace(rd.RULE_EDITOR.EDIT_RULE.ABSOLUTE + "/" + f)
				}
			};
		s.a.render(c.a.createElement($, null, c.a.createElement(i.a, null, c.a.createElement(ld, null))), document.getElementById("root"))
	}],
	[
		[212, 1, 2]
	]
]);
