/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const HOME_URL = 'https://marcustansoon.github.io/rewriter-and-paraphrasing-tool/google-translate-main-v2';
let redirectedURL = HOME_URL,
    isFirstTime = true,
    previousURL,
    messageData,
    ref,
    interstitial,
    app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener("offline", this.onOffline.bind(this), false);
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },

        onOffline: function() {
	    // Load offline page when no network is detected
            window.location.replace(window.location.href.replace('index', 'offline'));
        },

        checkAppVersion: function() {
            // Exit version check if in offline mode
            if (navigator.connection.type === Connection.NONE) {
                return;
            }

            // Set GET request parameters
            let options = {
                method: 'GET',
                responseType: 'text',
                serializer: 'json',
            };
	    
	    // Store reference
	    let that = this,
		currentAppVersion = typeof BuildInfo === 'undefined' ? '10000' : BuildInfo.versionCode,
		platformType = typeof device === 'undefined' ? 'android' : device.platform,
		failedAppVersionVerification = false;
		
            // Send GET request to server for FCM Token registration
            cordova.plugin.http.sendRequest('https://marcustansoon.github.io/rewriter-and-paraphrasing-tool/android-app-version', options, function(response) {
		// Check if response exists
		if (response.data) {
			try {
        			response.data = JSON.parse(response.data); // eg. {"version":10033, "force": 1}
				if(!response.data.version || isNaN(parseInt(response.data.version))) throw "App version is not a valid value";
				response.data.version = parseInt(response.data.version);
   	 		} catch(e) {
				failedAppVersionVerification = true;
    			}
		} else {
			failedAppVersionVerification = true;
		}
		    
		if (failedAppVersionVerification) {
			navigator.notification.alert(
				'There was an error connecting to the server.',
				(e) => {},
				'Verification failed',
				'Okay'
			);
			return;
		}
			
		// Check app version
                if (response.data.version === currentAppVersion) return;
		    
		// Prompt user to update app
                navigator.notification.confirm(
                    'Please update your app to the latest version.', // message
                    (pressedButtonIndex) => {
			// Exit if 'cancel' button is pressed
			if(pressedButtonIndex === 2){
				// If 'force' value is true, exit the app
				response.data.force && navigator.app.exitApp();
				return;
			}
			// Open app store URL
                        ref = cordova.InAppBrowser.open('www.google.com', '_system', '');
                        that.addIABEventListener();
			
			// If 'force' value is true, exit the app
			response.data.force && navigator.app.exitApp();
                    }, // callback to invoke with index of button pressed
                    'New version is available', // title
                    ['UPDATE', 'NO, THANKS'] // buttonLabels
                );
            }, function(response) {
                alert(response.error);
            });
        },
	    
        setupAdmob: function() {
	    // Init Google Admob setup
	    /*interstitial = new admob.InterstitialAd({
    		'adUnitId': 'ca-app-pub-3940256099942544/1033173712',
  	    });*/
	    interstitial = new admob.NativeAd({
    		'adUnitId': 'ca-app-pub-3940256099942544/2247696110',
  	    });
		
	    interstitial.on('loadfail', (evt) => {
		    alert(JSON.stringify(evt));
	    });
		
	    interstitial.on('load', (evt) => {
		alert(JSON.stringify(evt));
	    });
		
	    // Load Admob if there is a network connection
	    // navigator.connection.type !== Connection.NONE && interstitial.load();
        },

        handleOpenURL: function(url) {
            alert(url);
            redirectedURL = url;
        },
	    
        onMessageReceived: function(message) {
            alert(JSON.stringify(message));
        },

        onError: function(error) {
            alert('error');
            alert(JSON.stringify(error));
        },

        // deviceready Event Handler
        // Bind any cordova events here. Common events are:
        // 'pause', 'resume', etc.
        onDeviceReady: function() {
            // Custom URL Scheme handler
            window.handleOpenURL = this.handleOpenURL;

            // Lock device orientation at 'portrait'
            window.screen.orientation.lock('portrait');
	
	    // Clear app cache (https://github.com/anrip/cordova-plugin-cache-clear)
    	    window.CacheClear(()=>{}, ()=>{});
	
	    // Setup Admob
            this.setupAdmob();
		
            setTimeout(() => {
                this.init();
            }, 1500);
		
            setTimeout(() => {
            	// Check app version
            	this.checkAppVersion().bind(this);
            }, 5000);
		
            setTimeout(() => {
                return;
                ref = cordova.InAppBrowser.open(redirectedURL, '_system', '');
                // Re-assign event listeners due to bug (lost reference to previous listener when _system is triggered)
                // https://stackoverflow.com/questions/41790161/cordova-inappbrowser-looses-event-handlers-when-system-browser-opens
                this.addIABEventListener();
            }, 5500);
		
	    // alert(navigator.userAgent);
        },

        init: function() {
            ref = cordova.InAppBrowser.open(redirectedURL, '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no,allowInlineMediaPlayback=yes');

            /*document.addEventListener('backbutton', () => {
                // alert('camra');
                // Check if camera is opened. If so, destroy the QRscanner obj
                if (isCameraOpened) {
                    //this.closeCamera();
                }
                // throw new Error('Exit'); // This will suspend the app 
            }, false);*/

            // Assign event listeners
            this.addIABEventListener();
        },
	    
	openCamera: function() {
		navigator.camera.getPicture(e => {
			const canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			img = new Image();
			img.addEventListener('load', () => {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0);
				const base64Image = canvas.toDataURL();
				ref.executeScript({
					code: `(function() { 
							const evt = new CustomEvent("base64image", {
								detail: {
									'base64image': '${base64Image}',
								}
							});
							window.dispatchEvent(evt);
					})()`,
				});
			});
			img.src = e;	// Load image
            	}, error => {
			console.error(error);
            	}, {
			'sourceType': Camera.PictureSourceType.CAMERA, 
			'destinationType': Camera.DestinationType.FILE_URI,
		});  
        },

        addIABEventListener() {
            ref.addEventListener('exit', function() {
                navigator.app.exitApp();
            });

            ref.addEventListener('message', (e) => {
                messageData = e.data;
                // Handle open URL using external browser
                // { 'type' : string, 'url': string }
                if (e.data.type === 'openURL' && e.data.url) {
                    ref = cordova.InAppBrowser.open(e.data.url, '_system', '');
                    this.addIABEventListener();
                    return;
                } else if (e.data.type === 'loadAdmob') {
                    navigator.connection.type !== Connection.NONE && interstitial.load();
                    return;
                } else if (e.data.type === 'showAdmob') {
                    return;
                } else if (e.data.type === 'openCamera') {
                    this.openCamera();
                    return;
                }
            });

            ref.addEventListener('loadstart', function(e) {
                ref.executeScript({
                    'code': `(function(){
                    return performance.navigation.type;
                })()`
                }, function(data) {
                    // Check if back button is pressed (2 is return) AND previousURL and current URL is home page.
                    if (data && data[0] && previousURL === HOME_URL) {
			navigator.app.exitApp();
                    } else {
                        previousURL = e.url;
                    }
                });
            });
        },
    }

app.initialize();
