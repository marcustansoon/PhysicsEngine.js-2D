<script>
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<script>
//https://www.w3schools.com/code/tryit.asp?filename=FVUCEYV5UQCK
    let script = document.createElement('script');
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";
    script.onload = load;
    document.body.appendChild(script);

    function load() {
      script = null;
      script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js";
      script.onload = start;
      document.body.appendChild(script);
    }


    var remoteVideo = document.createElement('video');
    document.body.appendChild(remoteVideo);
    remoteVideo.autoplay = true;
    remoteVideo.width = window.innerWidth;
    remoteVideo.height = window.innerHeight / 2 << 0;


    let video = document.createElement('video');
    document.body.appendChild(video);
    video.autoplay = true;
    video.width = window.innerWidth;;
    video.height = window.innerHeight / 2 << 0;;

    function start() {
      let socket = io.connect('https://little-orangutan.glitch.me/'),
        peerConnection,
        peerConnectionConfig = {
          'iceServers': [{
            'url': 'stun:stun.services.mozilla.com'
          }, {
            'url': 'stun:stun.l.google.com:19302'
          }]
        },
        localStream, settings = {
          'ff': {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
          'video': {
            'facingMode': 'user'
          }
        },
        cameraArr = ["user", "environment"],
        cameraNum = 0,
        userToChatWith=0,
        caller;
	

      
      let startSearch = document.createElement('button');
      document.body.appendChild(startSearch);
      startSearch.style = "height:80px;width:100px";
      startSearch.innerHTML = "Start Search";
      startSearch.onclick = onStartSearch;
		
		
      let stopSearch = document.createElement('button');
      //document.body.appendChild(startSearch);
      stopSearch.style = "height:80px;width:100px";
      stopSearch.innerHTML = "Stop Search";
      stopSearch.onclick = onStopSearch;
/*
      let switchCamera = document.createElement('button');
      document.body.appendChild(switchCamera);
      switchCamera.innerHTML = "Switch Camera";
      switchCamera.style = "height:80px;width:100px";
      switchCamera.onclick = function() {
        settings.video.facingMode = cameraArr[cameraNum++ % 2];
        console.log(settings.video.facingMode);
      };
*/		
      let division = document.createElement('div');  
      document.body.prepend(division);
      division.innerHTML="Users Onlines : ";
      
      function onStartSearch(){
      	//startSearch.disabled=true;
        document.body.removeChild(startSearch);
        document.body.appendChild(stopSearch);
		socket.emit('startSearch','');
      }
      
      socket.on('startSearch',function(e){/*e->{id:xxxxx,caller:true/false}*/
      
        let temp=JSON.parse(e);
        caller = temp.caller;
        userToChatWith=temp.id;
        if (caller)//if caller/host, initiate connection
        initiateConnection(caller);
      });
      
      function onStopSearch(){
      	 document.body.removeChild(stopSearch);
        document.body.appendChild(startSearch);
        userToChatWith=null;
        caller=null;
		socket.emit('stopSearch');
      }
    
      
      setInterval(onGetOnlineUsers,3000);
      function onGetOnlineUsers(){
		socket.emit('getOnlineUsers','');
		
      }
      socket.on('getOnlineUsers',function(e){
      	division.innerHTML="Users Onlines : "+e;
      });

      
      
      function initiateConnection(isCaller) {
        peerConnection = new RTCPeerConnection(peerConnectionConfig);
        peerConnection.onicecandidate = gotIceCandidate;
        peerConnection.onaddstream = gotRemoteStream;
        peerConnection.addStream(localStream);
        console.log('calling InitiateConnection');
        if (isCaller) {
          peerConnection.createOffer(gotDescription, createOfferError);
          console.log('create offer');
        }
      }

      function gotDescription(description) {
        console.log('got description');
        peerConnection.setLocalDescription(description, function() {
          socket.emit('pm', JSON.stringify({
            'id': userToChatWith,
            'sdp': description
          }));
          console.log('emit sdp');
        }, function(err) {
          console.log('set description error '+err);
        });
      }

      function gotIceCandidate(event) {
        if (event.candidate) {
          socket.emit('pm', JSON.stringify({
			'id': userToChatWith,
            'ice': event.candidate
          }));
          console.log('emit ice');
        }
      }

      function gotRemoteStream(event) {
        console.log('got remote stream');
        remoteVideo.src = window.URL.createObjectURL(event.stream);
      }

      function createOfferError(error) {
        alert(error);
      }

      function createAnswerError(error) {
        alert(error);
      }

      navigator.mediaDevices.getUserMedia(settings).then(function(mediaStream) {
        video.srcObject = mediaStream;
        localStream = mediaStream;
        video.muted = true;
      });

      socket.on('pm', function(data) {//data-{}
        if (!peerConnection) {
          initiateConnection(false);
        }

        let obj = JSON.parse(data);

        //if (obj.name !== chatWith.value || obj.chatWith !== name.value) return;

        if (obj.sdp) {

          peerConnection.setRemoteDescription(new RTCSessionDescription(obj.sdp), function() {
            console.log('setRemoteDescription');
            if (obj.sdp.type === 'offer') {
              peerConnection.createAnswer(gotDescription, createAnswerError);
              console.log('offer received');
            }
          });
        } else if (obj.ice) {
          peerConnection.addIceCandidate(new RTCIceCandidate(obj.ice));
          console.log('ice received');
        }
      });

    }

</script>
</body>
</html>


</script>
