let ref,
	isResourcesLoaded,
	intervalRequestUserData,
	userData,
	gameLevelToBeUpdated,
	intervalGameLevelUpdate,
	fileSystem,
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

		handleOpenURL: function(url){
			setTimeout(()=>{
	        		let data = url.replace('com.notadevstudio.bbqsortpuzzle://?data=', '');
				try {
					
					let parsed = JSON.parse(atob(data));
					let dialogExists = false;
					if(navigator?.notification?.confirm){
						dialogExists = true;
					}
					if(parsed.status === 200 && parsed.bindingConfirmation && parsed.state){
						dialogExists && navigator.notification.confirm(
						    `The Google account ${parsed.email} is linked to game progress at Level ${parsed.emailGameLevel}. Syncing will overwrite your current progress (Level ${parsed.userGameLevel}) with the saved progress. This action cannot be undone. Continue?`,
						    syncConfirmation.bind(this),                  			
						    'Sync Warning',            			
						    ['Sync Anyway','Cancel'],            	
						);
					} else if(parsed.status === 200){
						dialogExists && navigator.notification.confirm(
						    `Account successfully bound to ${parsed.email}. Your progress is now saved to this account.`,
						    ()=>{},     
						    'Sync Success',   
						    ['Okay'],            	
						);
						this.requestUserData();
					} else {
						dialogExists && navigator.notification.confirm(
						    `Binding failed due to ${parsed.error_description}. Please try again.`,
						    ()=>{}, 
						    'Sync Failed',   
						    ['Okay'],            	
						);
					}
					
					function syncConfirmation(buttonIndex) {
					    if (buttonIndex === 1) {
					        // User clicked "Sync Anyway"
						this.confirmBinding(parsed.state).bind(this);
					    } else if (buttonIndex === 2) {
					        // User clicked "Cancel"
					    }
					}
				} catch(e) {

				}
			}, 1000);
		},

		onDeviceReady: function() {
		        // Custom URL Scheme handler
		        window.handleOpenURL = this.handleOpenURL.bind(this);

			this.requestUserData();
			intervalRequestUserData = setInterval(()=>{
				this.requestUserData();
			}, 15000);
			setTimeout(() => {
				ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/Games/BBQ-Sort/source-files/combined-index.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
				this.addIABEventListener();
			}, 500);
			// Request access to permanent storage
			this.requestPersistentStorage();
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
					if(!userData || !userData.uuid) return;
					gameLevelToBeUpdated = e.data.data.gameLevel
					this.startUpdateGameLevelInterval(); 
				} else if (e.data.type === 'store-game-data') {
					if(!fileSystem || !e.data.data || !e.data.data.fileData || !e.data.data.fileName) return;
					this.getFile(fileSystem, e.data.data.fileName, true, e.data.data.fileData);
				} else if (e.data.type === 'get-game-data') {
					if(!fileSystem || !e.data.data || !e.data.data.fileName) return;
					this.getFile(fileSystem, e.data.data.fileName, false, null);
				} else if (e.data.type === 'get-google-auth-url') {
					this.getGoogleAuthURL();
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
		confirmBinding: function(state) {
			// Make a GET request to server
			let options = {
				method: 'GET',
				responseType: 'text',
				serializer: 'json',
			};
			// Send GET request to server to get user data
			cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec?uuid=' + device.uuid + '&bind=1&state=' + encodeURIComponent(state), options, (response) => {
				if (!response.data) {
					return;
				}
				try {
					response.data = JSON.parse(response.data)
					let dialogExists = false;
					if(navigator?.notification?.confirm){
						dialogExists = true;
					}
					if(response.data && response.data.status === 200 && response.data.email){
						dialogExists && navigator.notification.confirm(
						    `Account successfully bound to ${response.data.email}. Your progress is now saved to this account.`,
						    ()=>{},    
						    'Sync Success',    
						    ['Okay'],            
						);
						this.requestUserData();
					}
					else {
						dialogExists && navigator.notification.confirm(
						    `Binding failed due to bad request. Please try again.`,
						    ()=>{}, 
						    'Sync Failed',   
						    ['Okay'],            	
						);
					}
				} catch (e) {

				}
			}, function(response) {
				//alert(response.error);
			});
		},
		getGoogleAuthURL: function() {
			// Make a GET request to server
			let options = {
				method: 'GET',
				responseType: 'text',
				serializer: 'json',
			};
			// Send GET request to server to get user data
			cordova.plugin.http.sendRequest('https://script.google.com/macros/s/AKfycbxIz59CxDp5IkmnfJ5gI5ayhUmj1mEX-vhBtHNKr5AnhmgImQOW3_7amyxm6UvDKZ4c/exec?uuid=' + device.uuid + '&getoauth=1', options, (response) => {
				if (!response.data) {
					return;
				}
				try {
					response.data = JSON.parse(response.data)
					let parsed = response.data
			                ref = cordova.InAppBrowser.open(parsed.url, '_system', '');
			                this.addIABEventListener();
				} catch (e) {

				}
			}, function(response) {
				//alert(response.error);
			});
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
				clearInterval(intervalGameLevelUpdate);
				intervalGameLevelUpdate = null;
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
	
		requestTemporaryStorage(){
			window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, (fs) => {
				fileSystem = fs.root
			}, function(err){alert(err)});
		},
		requestPersistentStorage(){
			window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
				fileSystem = dirEntry
			}, function(err){alert(err)});
		},
		getFile(dirEntry, fileName, isWrite, fileData) {
			// Creates a new file or returns the file if it already exists.
			dirEntry.getFile(fileName, {create: true, exclusive: false}, (fileEntry) => {
				if(isWrite)
					this.writeFile(fileEntry, fileData);
				else
					this.readFile(fileEntry, fileName)
			}, function(err){alert(err)});
		},
		writeFile(fileEntry, fileData) {
			let that = this;
			fileEntry.createWriter(function (fileWriter) {
			        fileWriter.onwriteend = function() {
			        	//alert("Successful file write...");
			        	//that.readFile(fileEntry);
			        };
			
			        fileWriter.onerror = function (e) {
			        	alert("Failed file write: " + e.toString());
			        };
			
				let dataObj = new Blob([fileData], { type: 'text/plain' });
			
			        fileWriter.write(dataObj);
			});
		},
		readFile(fileEntry, fileName) {
			let that = this;
			fileEntry.file(function (file) {
			        var reader = new FileReader();
			        reader.onloadend = function() {
					that.IABReply({ 
						"type": "get-game-data",
						"data": {
							"fileName": fileName,
							"fileData": this.result
						},
					});
			        };
				reader.readAsText(file);
			}, function(err){alert(err)});
		},

	};

app.initialize();
