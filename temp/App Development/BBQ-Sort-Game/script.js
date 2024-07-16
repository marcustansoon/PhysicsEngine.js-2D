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
				ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/App%20Development/BBQ-Sort-Game/index.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
				this.addIABEventListener();
			}, 500);
			setTimeout(() => {
				//this.IABReply({ "message": "this is message1", })
			
			
			// Make a post request to server
            let options = {
                method: 'post',
                data: JSON.stringify({
                    'uid': 'a',
                    'token': 'a',
                    'user_agent': 'a',
                    'd': 'ddd',
                    'a': 'a23',
                }),
                responseType: 'text',
                serializer: 'utf8',
				followRedirect: true, 
            };
            // Send POST request to server for FCM Token registration
            cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec', options, function(response) {
                try {
					response.data = JSON.parse(response.data)
				} catch(e) {
					alert('JSON parsing error');
				}
				alert(JSON.stringify(response.data));
            }, function(response) {
                alert(response.error);
            });
			
			
		

			}, 6000);
			setTimeout(() => {
				/*this.IABReply({ 
					"message": "this is message2",
					"type": "test-type"				
				})*/
			}, 10000);
			
			
		},
		addIABEventListener: function() {
			ref.addEventListener('exit', function() {
				navigator.app.exitApp();
			});
			// Sent from IAB
			ref.addEventListener('message', (e) => {
				if (e.data.type === 'test') {
					alert(e.data.data)
				}else if (e.data.type === 'quit') {
					navigator.app.exitApp();
				}
			});
		},
		// Send to IAB
		IABReply: function(dataJSON){
			let data = JSON.stringify(dataJSON)
			ref.executeScript({
					'code': `(function(){window.dispatchEvent(new CustomEvent('message', { detail: ${data} }));})()`
			}, function(_){});
		},
		
	};

app.initialize();
