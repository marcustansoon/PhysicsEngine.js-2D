	(function(){
		let localVideo = document.getElementById('localVideo'),
            remoteVideo = document.getElementById('remoteVideo'),
            startButton = document.getElementById('startButton'),
            status1 = document.getElementById('status1'),
            peerConnectionConfig = {
              iceServers: [{
                "urls": ["turn:13.250.13.83:3478?transport=udp"],
                "username": "YzYNCouZM1mhqhmseWk6",
                "credential": "YzYNCouZM1mhqhmseWk6"
              },
			  {url:"stun:stun.services.mozilla.com"},
			  {url:"stun:stun.l.google.com:19302"}
			  ]
			},
            //{iceServers:[{url:"stun:stun.services.mozilla.com"},{url:"stun:stun.l.google.com:19302"}]},
            peerConnection,
            localStream,
			peerURL="123";
			
		//WebRTC config	
          socket.on('ice', function(data) {
            data = JSON.parse(data);
            if (data.peerURL !== peerURL) return;
            if (!peerConnection) startWebRTC();
            console.log('receive ice');
            console.log(data);
            peerConnection.addIceCandidate(new RTCIceCandidate(data.data));
          });
          socket.on('description', function(data) {
            data = JSON.parse(data);
            if (data.peerURL !== peerURL) return;
            if (!peerConnection) startWebRTC();
            console.log('receive description');
            peerConnection.setRemoteDescription(new RTCSessionDescription(data.data), function() {
              if (data.data.type == 'offer') {
                peerConnection.createAnswer(gotDescription, function() {
                  console.log('createAnswer error');
                });
              }
            });
          });
          socket.on('success', function(data) {
            if (data.peerURL !== peerURL) return;
            console.log(data);
            status1.innerHTML = "success";
          });

          var constraints = {
            audio: false,
            video: {
              facingMode: 'environment'
            }
          };
		  
          if (navigator.getUserMedia) {
            navigator.getUserMedia(constraints, getUserMediaSuccess, getUserMediaError);
          } else {
            alert('Your browser does not support getUserMedia API');
          }
			
			//setup local Video
          function getUserMediaSuccess(stream) {
            localVideo.srcObject = stream;
            localStream = stream;
          }

          function getUserMediaError(error) {
            alert(error);
          }

          function startWebRTC(isHost) {
            console.log('create WebRTC');
            peerConnection = new RTCPeerConnection(peerConnectionConfig);
            peerConnection.onicecandidate = gotIceCandidate;
            peerConnection.onaddstream = gotRemoteStream;
            peerConnection.addStream(localStream);
            if (isHost) {
              peerConnection.createOffer(gotDescription, createOfferError);
            }
          }

          function gotIceCandidate(event) {
            console.log('send ICE');
            if (event.candidate != null) {
              socket.emit('ice', JSON.stringify({
                data: event.candidate,
                peerURL: peerURL
              }));
            }
          }

          function gotRemoteStream(event) {
            console.log('got remote stream');
            remoteVideo.srcObject = event.stream;
            socket.emit('success', {
              peerURL: peerURL
            });
            //clearInterval(loop);
          }

          function gotDescription(description) {
            console.log('got description');
            peerConnection.setLocalDescription(description, function() {
              socket.emit('description', JSON.stringify({
                data: description,
                peerURL: peerURL
              }));
            }, function() {
              alert('set description error');
            });
          }

          function createOfferError(error) {
            alert('Offer Error ' + error);
          }

          startButton.onclick = function() {
            startWebRTC(true);
          };
	})();