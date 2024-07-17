/*let ref,
	isResourcesLoaded,
	app = {
		// Application Constructor
		initialize: function() {
			document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
			document.addEventListener("offline", this.onOffline.bind(this), false);
		},
		
        onOffline: function() {
			if(isResourcesLoaded) return;
			// Load offline page
            window.location.replace(window.location.href.replace('index', 'offline'));
        },
		
		onDeviceReady: function() {
			setTimeout(() => {
				ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/Games/BBQ-Sort/source-files/combined-index.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
				this.addIABEventListener();
			}, 1000);
		},
		addIABEventListener: function() {
			ref.addEventListener('exit', function() {
				navigator.app.exitApp();
			});
			ref.addEventListener('message', (e) => {
				if (e.data.type === 'loadDone') {
					isResourcesLoaded = true;
				}else if (e.data.type === 'quit') {
					navigator.app.exitApp();
				}
			})
		}
	};

app.initialize();*/

let ref,
	isResourcesLoaded,
	intervalRequestUserData,
	userData,
	gameLevelToBeUpdated,
	intervalGameLevelUpdate,
	app = {
		// Application Constructor
		initialize: function() {
			document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
			document.addEventListener("offline", this.onOffline.bind(this), false);
		},

		onOffline: function() {
			if (isResourcesLoaded) return;
			// Load offline page
			window.location.replace(window.location.href.replace('index', 'offline'));
		},

		onDeviceReady: function() {
			this.requestUserData();
			intervalRequestUserData = setInterval(()=>{
				this.requestUserData();
			}, 15000);
			setTimeout(() => {
				ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/Games/BBQ-Sort/source-files/combined-index.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
				this.addIABEventListener();
			}, 500);
		},
		addIABEventListener: function() {
			ref.addEventListener('exit', function() {
				navigator.app.exitApp();
			});
			// Sent from IAB
			ref.addEventListener('message', (e) => {
				if (e.data.type === 'loadDone') {
					isResourcesLoaded = true;
				} else if (e.data.type === 'quit') {
					navigator.app.exitApp();
				} else if (e.data.type === 'update-game-level') {
					gameLevelToBeUpdated = e.data.data.gameLevel
					this.startUpdateGameLevelInterval();
				} else if (e.data.type === 'get-user-data') {
					this.IABReply({ 
						"type": "get-user-data",
						"data": userData,
					});
				}
			});
		},
		// Send to IAB
		IABReply: function(dataJSON) {
			let data = JSON.stringify(dataJSON)
			ref.executeScript({
				'code': `(function(){window.dispatchEvent(new CustomEvent('message', { detail: ${data} }));})()`
			}, function(_) {});
		},
		registerUser: function() {
			// Register a new user
			// Make a post request to server
			let options = {
				method: 'post',
				data: JSON.stringify({
					'type': 'register-new-user',
					'data': {
						'uuid': device.uuid,
						'user_agent': window.navigator.userAgent,
						'platform': device.platform,
						'version': device.version,
						'manufacturer': device.manufacturer,
						'serial': device.serial,
						'model': device.model,
						'gameLevel': 0,
					}
				}),
				responseType: 'text',
				serializer: 'utf8',
				followRedirect: true,
			};
			// Send POST request to server for registration
			cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec', options, (response) => {
				// After successful registered, go and get user data
				this.requestUserData();
			}, function(response) {});
		},
		startUpdateGameLevelInterval: function(){
			if(intervalGameLevelUpdate) return;
			this.updateGameLevel(gameLevelToBeUpdated);
			intervalGameLevelUpdate = setInterval(()=>{
				this.updateGameLevel(gameLevelToBeUpdated)
			}, 15000);
		},
		updateGameLevel: function(gameLevel) {
			// Make a post request
			let options = {
				method: 'post',
				data: JSON.stringify({
					'type': 'update-game-level',
					'data': {
						'uuid': device.uuid,
						'gameLevel': gameLevel,
					}
				}),
				responseType: 'text',
				serializer: 'utf8',
				followRedirect: true,
			};
			// Send POST request to server
			cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec', options, function(response) {
				alert('Updated game level');
				clearInterval(intervalGameLevelUpdate);
			}, function(response) {});
		},
		requestUserData: function() {
			// Make a GET request to server
			let options = {
				method: 'GET',
				responseType: 'text',
				serializer: 'json',
			};
			// Send GET request to server to get user data
			cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec?uuid=' + device.uuid, options, (response) => {
				// If user is not found then register it
				if (!response.data) {
					this.registerUser();
					return;
				}
				try {
					response.data = JSON.parse(response.data)
					userData = response.data
					// Send user data to client
					this.IABReply({ 
						"type": "get-user-data",
						"data": userData,
					});
					clearInterval(intervalRequestUserData)
				} catch (e) {

				}
			}, function(response) {
				//alert(response.error);
			});
		},

	};

app.initialize();
