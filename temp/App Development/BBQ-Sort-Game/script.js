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
				ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/Games/BBQ-Sort/source-files/combined-index.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
				this.addIABEventListener();
			}, 100);
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

app.initialize();
