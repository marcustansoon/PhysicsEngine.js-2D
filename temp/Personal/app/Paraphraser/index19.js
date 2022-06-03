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
const HOME_URL = 'https://www.google.com/';
let redirectedURL = HOME_URL,
    isFCMRegistered,
    FCMToken,
    FCMID,
    isCameraOpened,
    isLightingOn,
    lightingButton,
    closeButton,
    isFirstTime = true,
    previousURL,
    messageData,
    ref,
    interstitial,
    app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener("offline", this.onOffline.bind(this), false);
            document.addEventListener("online", this.onOnline.bind(this), false);
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },

	onOnline: function() {
	    // Load online page
            window.location.replace(window.location.href.replace('offline', 'index'));
	},

        onOffline: function() {
	    // Load offline page
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
		//alert('app ver is ');
		//alert(currentAppVersion);
		//alert(typeof currentAppVersion);
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
				'There was an error connecting to the server for app version check.',
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
	    interstitial = new admob.InterstitialAd({
    		'adUnitId': 'ca-app-pub-3940256099942544/1033173712',
  	    });

	    interstitial.on('loadfail', (evt) => {
		    alert(JSON.stringify(evt));
	    });

	    interstitial.on('load', (evt) => {
		alert(JSON.stringify(evt));
		// When loaded, show admob interstitial ads after 8 seconds
		setTimeout(() => {
			interstitial.show();
		}, 8000);
	    });

	    // Load Admob if there is a network connection
	    navigator.connection.type !== Connection.NONE && interstitial.load();
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

            this.setupAdmob().bind(this);

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
            this.createCloseButton();
            this.createLightingButton();
            this.hideButtons();
            // return;
            ref = cordova.InAppBrowser.open(redirectedURL, '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no,allowInlineMediaPlayback=yes');

            document.addEventListener('backbutton', () => {
                // alert('camra');
                // Check if camera is opened. If so, destroy the QRscanner obj
                if (isCameraOpened) {
                    this.closeCamera();
                }
                // throw new Error('Exit'); // This will suspend the app 
            }, false);

            // Assign event listeners
            this.addIABEventListener();

        },

        addIABEventListener() {
            ref.addEventListener('exit', function() {
                // alert('closing app');
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
                    // Handle FCM Topic Subscription
                    // { 'type' : string, 'topic': string }
                } else if (e.data.type === 'subscribeFCMTopic' && e.data.topic) {
                    this.subscribeFCMTopic(e.data.topic);
                    return;
                    // Handle FCM Topic Unsubscription
                    // { 'type' : string, 'topic': string }
                } else if (e.data.type === 'unsubscribeFCMTopic' && e.data.topic) {
                    this.unsubscribeFCMTopic(e.data.topic);
                    return;
                }
                this.promptCameraPermission(this);
            });

            ref.addEventListener('loadstart', function(e) {
                ref.executeScript({
                    'code': `(function(){
                    return performance.navigation.type;
                })()`
                }, function(data) {
                    // Check if back button is pressed (2 is return) AND previousURL and current URL is home page.
                    if (data && data[0] && (previousURL === HOME_URL || previousURL === "https://joinnow.my/login" || previousURL === "https://joinnow.my/app-view")) {
                        navigator.app.exitApp();
                    } else {
                        previousURL = e.url;
                    }
                });
                return;
                if (previousURL === e.url && (e.url === "https://joinnow.my/home")) {
                    navigator.app.exitApp();
                }
                previousURL = e.url;
                return;
                alert(JSON.stringify(e));
                if (e.url.includes('login')) {
                    isLogin = true;
                    alert('login')
                } else if (e.url.includes('pincode')) {
                    if (isLogin) {
                        isLogin = false;
                        alert('false')
                    } else {
                        alert('cl');
                        navigator.app.exitApp();
                    }
                }
            });
        },

        openCamera: function(dontShow) {
            if (isCameraOpened) {
                this.closeCamera();
                return;
            }

            // Start a scan. Scanning will continue until something is detected or
            // `QRScanner.cancelScan()` is called.
            QRScanner.scan(displayContents.bind(this));

            function displayContents(err, text) {
                if (err) {
                    // an error occurred, or the scan was canceled (error code `6`)
                    alert(JSON.stringify(err));
                } else {
                    // The scan completed, display the contents of the QR code:
			//alert(href);
                    if (messageData.user === 'admin' && text.includes('reddshop.com/evoucher')) {
                        let href = text;
                        ref.executeScript({
                            code: 'window.location.href = "' + href + '";'
                        });
                    } else if (messageData.user === 'user' && messageData.voucherUID && text.includes('reddshop.com/evoucher')) {
			let href = text+'&voucherUID='+messageData.voucherUID;
                        ref.executeScript({
                            code: 'window.location.href = "' + href + '";'
                        });
                    }

                    this.closeCamera();
                }
            }

            // Hide HTML body (make it transparent)
            if (!dontShow) document.body.style.background = 'transparent';

            if (!dontShow) this.showButtons();

            // Hide inappbrowser
            if (!dontShow) ref.hide();

            isCameraOpened = true;

            // Make the webview transparent so the video preview is visible behind it.
            QRScanner.show();
            // Be sure to make any opaque HTML elements transparent here to avoid
            // covering the video
        },

        closeCamera: function() {
            if (isLightingOn) {
                this.toggleLighting();
            }
            isCameraOpened = false;

            // Show inappbrowser
            ref.show();

            // Make HTML body opaque
            document.body.style.background = '';

            this.hideButtons();

            // Destroy QRscanner obj
            QRScanner.destroy(function(status) {
                console.log(status);
            });
        },

        promptCameraPermission: function() {
            QRScanner.prepare(onDone.bind(this)); // show the prompt

            function onDone(err, status) {
                if (err) {
                    // here we can handle errors and clean up any loose ends.
                    alert(JSON.stringify(err));
                }
                if (status.authorized) {
                    // W00t, you have camera access and the scanner is initialized.
                    // QRscanner.show() should feel very fast.
                    if (isFirstTime) {

                        isFirstTime = false;

                        this.openCamera(true);
                        setTimeout(() => {
                            this.closeCamera();
                        }, 500);
                        setTimeout(() => {
                            this.openCamera();
                        }, 1250);
                    } else {
                        this.openCamera();
                    }
                } else if (status.denied) {
                    // The video preview will remain black, and scanning is disabled. We can
                    // try to ask the user to change their mind, but we'll have to send them
                    // to their device settings with `QRScanner.openSettings()`.
                    alert('Camera permission is required to use QRscanner');
                } else {
                    // we didn't get permission, but we didn't get permanently denied. (On
                    // Android, a denial isn't permanent unless the user checks the "Don't
                    // ask again" box.) We can ask again at the next relevant opportunity.
                    alert('Camera permission is required to use QRscanner');
                }
            }
        },

        createCloseButton() {
            let href = document.createElement('a');
            href.classList.add('close');
            href.href = '#';
            href.onclick = () => {
                this.closeCamera();
            }
            document.body.appendChild(href);
            closeButton = href;
        },

        createLightingButton() {
            let button = document.createElement('button');
            button.innerHTML = 'Toggle Lighting';
            button.classList.add('btn-lighting');
            button.onclick = this.toggleLighting;
            document.body.appendChild(button);
            lightingButton = button;
        },

        toggleLighting() {
            if (isLightingOn) {
                QRScanner.disableLight(function(err, status) {
                    err && alert(err);
                });
                isLightingOn = false;
                lightingButton.classList.remove('btn-lighting-active');
            } else {
                QRScanner.enableLight(function(err, status) {
                    err && alert(err);
                });
                isLightingOn = true;
                lightingButton.classList.add('btn-lighting-active');
            }
        },

        hideButtons() {
            lightingButton.style.display = 'none';
            closeButton.style.display = 'none';
        },

        showButtons() {
            lightingButton.style.display = "block";
            closeButton.style.display = "block";
        }
    }

app.initialize();
