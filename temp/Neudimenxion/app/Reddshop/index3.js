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
let redirectedURL = 'https://reddshop.com',
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
    app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener("offline", this.onOffline.bind(this), false);
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },

        onOffline: function() {
            window.location.replace(window.location.href.replace('index', 'offline'));
        },

        checkAppVersion: function() {
            // Exit version check if in offline mode
            if (navigator.connection.type === Connection.NONE) {
                return;
            }

            // Make a post request to server
            let options = {
                method: 'GET',
                responseType: 'text',
                serializer: 'json',
            };

            // Send POST request to server for FCM Token registration
            cordova.plugin.http.sendRequest('https://reddshop.com/app-version?v=1.0.0&platform=android', options, function(response) {
                // 'response.data' -> app store URL
                if (!response.data) return;
		// Prompt user to update app
                navigator.notification.confirm(
                    'Please update your app to the latest version.', // message
                    (pressedButtonIndex) => {
			// Exit if 'cancel' button is pressed
			if(pressedButtonIndex) return;
			// Open app store URL
                        ref = cordova.InAppBrowser.open(response.data, '_system', '');
                        this.addIABEventListener();
                    }, // callback to invoke with index of button pressed
                    'New version is available', // title
                    ['UPDATE', 'NO,THANKS'] // buttonLabels
                );
            }, function(response) {
                alert(response.error);
            });
        },

        handleOpenURL: function(url) {
            alert(url);
            redirectedURL = url;
        },

        getID: function(id) {
            // Set FCM id
            FCMID = id;
            this.registerFCMToken();
        },

        getFCMToken: function(token) {
            // Set FCM token
            FCMToken = token;
            this.registerFCMToken();
        },

        registerFCMToken: function() {
            // Make sure FCM token and id exists and haven't register it on server
            if (!FCMToken || !FCMID || isFCMRegistered) {
                return;
            }

            isFCMRegistered = true;

            // Make a post request to server
            let options = {
                method: 'post',
                data: {
                    'uid': FCMID,
                    'token': FCMToken,
                    'user_agent': window.navigator.userAgent
                },
                responseType: 'text',
                serializer: 'json',
            };
            // Send POST request to server for FCM Token registration
            cordova.plugin.http.sendRequest('https://joinnow.my/FCM/registration', options, function(response) {
                // alert(JSON.stringify(response.data));
            }, function(response) {
                alert(response.error);
            });
        },

        subscribeFCMTopic: function(topic) {
            FirebasePlugin.subscribe(topic, function() {
                //alert("Subscribed from topic");
            }, function(error) {
                alert("Error subscribing to topic: " + error);
            });

            // Make a post request to server
            let options = {
                method: 'post',
                data: {
                    'uid': FCMID,
                    'topic': topic
                },
                responseType: 'text',
                serializer: 'json',
            };
            // Send POST request to server for FCM Token subscription
            cordova.plugin.http.sendRequest('https://joinnow.my/FCM/subscribe', options, function(response) {
                // alert(JSON.stringify(response.data));
            }, function(response) {
                alert(response.error);
            });
        },

        unsubscribeFCMTopic: function(topic) {
            FirebasePlugin.unsubscribe(topic, function() {
                //alert("Unsubscribed from topic");
            }, function(error) {
                alert("Error unsubscribing from topic: " + error);
            });
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

            if (cordova && cordova.plugins && cordova.plugins.firebase) {
                cordova.plugins.firebase.dynamiclinks.onDynamicLink(function(data) {
                    alert("Dynamic link click with data:" + JSON.stringify(data));
                });

                FirebasePlugin.getToken(this.getFCMToken.bind(this), this.onError);
                FirebasePlugin.getId(this.getID.bind(this), this.onError);
                FirebasePlugin.onTokenRefresh(this.getFCMToken.bind(this), this.onError);
                FirebasePlugin.onMessageReceived(this.onMessageReceived, this.onError);

                FirebasePlugin.hasPermission(function(hasPermission) {
                    //alert("This device has permission " + (hasPermission ? "granted" : "denied"));
                });

                // FirebasePlugin request permission to receive push notification (for IOS only. Always return true for android)
                FirebasePlugin.grantPermission(function(hasPermission) {
                    //alert("Permission was " + (hasPermission ? "granted" : "denied"));
                });
            }

            // Lock device orientation at 'portrait'
            window.screen.orientation.lock('portrait');

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
        },

        init: function() {
            this.createCloseButton();
            this.createLightingButton();
            this.hideButtons();
            // return;
            ref = cordova.InAppBrowser.open(redirectedURL, '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');

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
                    if (data && data[0] && (previousURL === "https://reddshop.com" || previousURL === "https://joinnow.my/login" || previousURL === "https://joinnow.my/app-view")) {
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

                    if (messageData.user === 'admin' && messageData.eventQRcode) {
                        let href = 'https://joinnow.my/invite?qrcode=' + text + '&eventID=' + messageData.eventQRcode;
                        // alert(href);
                        ref.executeScript({
                            code: 'window.location.href = "' + href + '";'
                        });
                    } else if (messageData.user === 'user' && text.includes('joinnow.my')) {
                        ref.executeScript({
                            code: 'window.location.href = "' + text + '";'
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
