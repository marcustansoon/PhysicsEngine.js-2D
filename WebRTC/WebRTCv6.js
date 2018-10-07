function startApp(){

	let buttonHeight=window.innerHeight/10<<0,
        buttonWidth=window.innerWidth/4.3<<0,
        numberOfLoads=0,

	canvas2 = document.createElement('canvas'),context2=canvas2.getContext('2d');    
    document.body.appendChild(canvas2);
    canvas2.height=window.innerHeight/1;//(window.innerHeight/2<<0)-buttonHeight-20;
    canvas2.width=window.innerWidth;
    canvas2.style="position:fixed;bottom:"+buttonHeight*2+"px;left:0px;background:false;z-index:1;";
	canvas2.hidden=true;

	let canvas=document.createElement('canvas'),context=canvas.getContext('2d');
    canvas.id="canvas";
    document.body.appendChild(canvas);
    canvas.style="position:fixed;top:0px;left:0px;background:transparent;z-index:-1;"
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
	
	let gif = new Image();
    gif.src="https://i.imgur.com/e3RsSfM.jpg";
    gif.height=canvas.height/20<<0;
    gif.width=canvas.height/20<<0;
    gif.style="position:absolute;right:0px;top:0px;";
    gif.gif=new Image();
    gif.gif.src="https://media.giphy.com/media/8lPNekgDZAxBKRh3JH/giphy.gif";
    gif.gif.height=window.innerHeight/1.8<<0;
    gif.gif.width=window.innerWidth/1.8<<0;
    gif.gif.style="position:absolute;z-index:-1;border:8px outset silver;";
    gif.gif.style.top=window.innerHeight/2-gif.gif.height/2+"px";
    gif.gif.style.left=window.innerWidth/2-gif.gif.width/2+"px";  
    gif.onload=function(){document.body.appendChild(gif);document.body.appendChild(gif.gif);}

    let script = document.createElement('script');
    script.src = "https://webrtc.github.io/adapter/adapter-latest.js";
    script.onload = checkIfReady;
    document.body.appendChild(script);


	let bgImage = new Image();
    bgImage.src = "https://i.imgur.com/V6FC6zN.jpg";
    bgImage.onload = checkIfReady;
    
    let upperOutline = new Image();
    upperOutline.src="https://i.imgur.com/xXMfe8r.png";
    upperOutline.onload = checkIfReady;
    
  	//load emojis url
  	let urls=["https://i.imgur.com/NPe8q5g.png","https://i.imgur.com/XSbKmrB.png","https://i.imgur.com/wZhiEjY.png","https://i.imgur.com/mQWQ6CR.png","https://i.imgur.com/joL6z0g.png"];
  	urls.forEach(function(url){
    	let imageTemp = new Image();
      imageTemp.src = url;
      imageTemp.onload = checkIfReady;
    });
      

  	let emojis=[];
  	
  	function pushEmoji(imageURL,msg){	
        let x=((Math.random() * (canvas2.width-canvas2.width/2)) + 1)<<0;
        let image = new Image();
        emojis.push(0);
        image.src=imageURL;
        emojis[emojis.length-1]={};
        emojis[emojis.length-1].image=image;
        emojis[emojis.length-1].x=x;
        emojis[emojis.length-1].y=canvas2.height;
        emojis[emojis.length-1].globalAlpha=1;
        emojis[emojis.length-1].msg=msg;
        
    }
    
    function animateLoop(){
		context2.clearRect(0,0,canvas2.width,canvas2.height); 
        
        for (let index=emojis.length-1;index>=0;index--){
           let emoji=emojis[index];
		  context2.save();
          context2.globalAlpha=emoji.globalAlpha;
         	emoji.globalAlpha-=0.0025;
       	 	emoji.y-=Math.floor((Math.random() * 3) + 1);  
         context2.drawImage(emoji.image,0,0,emoji.image.width,emoji.image.height,emoji.x,emoji.y,window.innerWidth/8<<0,window.innerWidth/8<<0);
          context2.font="25px Georgia";
          context2.fillStyle = "white";
          context2.fillText(":"+emoji.msg,emoji.x+60,emoji.y+50);
		  context2.restore();
          if (emoji.globalAlpha<0.05){
                emojis.splice(index,1);
                console.log('end');
          }
         }
        requestAnimationFrame(animateLoop);
	}
    
    let socketScript = null;
    socketScript = document.createElement('script');
    socketScript.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js";
    socketScript.onload = checkIfReady;
    document.body.appendChild(socketScript);
    
    numberOfLoads=9;
    
	function checkIfReady(){
    	numberOfLoads--;
        if (numberOfLoads===0){//check if loaded
        	animateLoop();
        	context.drawImage(bgImage,0,0,bgImage.width,bgImage.height,0,0,canvas.width,canvas.height); 
            context.save();
            context.fillStyle = "rgba(169,169,169,.2)";
            context.fillRect(0,0,canvas.width,canvas.height);
            context.drawImage(upperOutline,0,0,upperOutline.width-5,upperOutline.height-5,0,0,canvas.width,canvas.height/20<<0);    
            var gradient=context.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop("0.4","magenta");
            gradient.addColorStop("0.6","blue");
            gradient.addColorStop(".7","green");
			context.fillStyle=gradient;
            context.font="25px Georgia";
           	context.fillText("Random Chat App",(canvas.width-canvas.width*3.1/4)<<0,25);
            context.restore(); 
        	start();
            console.log('start');
        }    	
    }

    var remoteVideo = document.createElement('video');
    document.body.appendChild(remoteVideo);
    remoteVideo.autoplay = true;
    remoteVideo.width = window.innerWidth;
    remoteVideo.height = window.innerHeight / 1.2 << 0;
    remoteVideo.temp=canvas.height/20<<0;
	remoteVideo.style= "top:"+remoteVideo.temp+"px;left:0px;object-fit:fill;position:fixed;align:center;border: 8px solid rgba(114, 128, 150,0.35);border-radius: 60px 35px;";
    remoteVideo.hidden=true;

    let video = document.createElement('video');
    document.body.appendChild(video);
    video.autoplay = true;
    video.width = window.innerWidth/3.3<<0;
    video.height =  video.width/.85<< 0;
	video.style="object-fit:fill;position:fixed;right:10px;border-radius: 15px 25px;border: 7px solid rgba(87, 102, 102,0.5);"+"bottom:"+buttonHeight*2+"px;";
    video.muted=true;

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
          'audio': {
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
        caller,
        moveToNextPeer=false;
        
      function onmouseup(button){
      		button.style.backgroundColor="DodgerBlue";
      }
      function onmousedown(button){
      		button.style.backgroundColor="#42d4f4";
      }
      function setStyle(){
      	let temp=buttonWidth/7<<0;//set font size
      		return "background-color:DodgerBlue;border-color: grey;border-style: groove;padding:5px;color: #a3ffcf;font-family:verdana;border-width: 5px;width:"+buttonWidth+"px;height:"+buttonHeight+"px;font-size:"+temp+"px;";
      }
      
      let inputMsg=document.createElement('input');
      document.body.appendChild(inputMsg);
      inputMsg.temp=(buttonHeight/3+10)<<0;
      inputMsg.style="position:fixed;bottom:0px;"+setStyle(); 
      inputMsg.style.height=inputMsg.temp+'px';
      inputMsg.style.width=window.innerWidth+'px';
      inputMsg.placeholder="Enter text here ...";
      inputMsg.hidden=true;
      inputMsg.onkeydown=function(e){if (e.keyCode===13){sendMsgButton.click();}}
      
      let searchButton = document.createElement('button');
      document.body.appendChild(searchButton);
      searchButton.temp=canvas.height/20<<0;
      searchButton.style = "position:fixed;bottom:"+searchButton.temp+"px;"+setStyle();    
      searchButton.style.right=0+"px";
      searchButton.style.top=searchButton.temp+"px";
      searchButton.innerHTML = "Start Search";
      searchButton.onclick = searchButtonOnClick;
      searchButton.onmousedown=function(){
      	searchButton.isMouseDown=true;
      	onmousedown(searchButton);
      };
	  searchButton.onmouseup=function(){
      	onmouseup(searchButton);
        searchButton.isMouseDown=false;
      }; 
      searchButton.onmouseout=function(){
      	if (searchButton.isMouseDown)
      	onmouseup(searchButton);
      }; 
       
      
      let nextButton = document.createElement('button');
      document.body.appendChild(nextButton);
      nextButton.temp=buttonHeight/2<<0;
      nextButton.style = "position:fixed;bottom:"+nextButton.temp+"px;"+setStyle(); 
      nextButton.style.left=buttonWidth*1+"px";
      nextButton.innerHTML = "Next";
      nextButton.onclick = nextButtonOnClick;
      nextButton.onmousedown=function(){
      	nextButton.isMouseDown=true;
      	onmousedown(nextButton);
      };
	  nextButton.onmouseup=function(){
      	onmouseup(nextButton);
        nextButton.isMouseDown=false;
      }; 
      nextButton.onmouseout=function(){
      	if (nextButton.isMouseDown)
      	onmouseup(nextButton);
      }; 
      nextButton.hidden=true;
      
      function nextButtonOnClick(){
      		searchButton.click();
            nextButton.hidden=true;
            moveToNextPeer=true;
      } 
      
      let sendMsgButton = document.createElement('button');
      document.body.appendChild(sendMsgButton);
      sendMsgButton.temp=buttonHeight/2<<0;
      sendMsgButton.style = "position:fixed;bottom:"+sendMsgButton.temp+"px;"+setStyle(); 
      sendMsgButton.style.left=buttonWidth*2+"px";
      sendMsgButton.innerHTML = "Send Message";
      sendMsgButton.onclick = sendMsgButtonOnClick;
      sendMsgButton.onmousedown=function(){
      	sendMsgButton.isMouseDown=true;
      	onmousedown(sendMsgButton);
      };
	  sendMsgButton.onmouseup=function(){
      	onmouseup(sendMsgButton);
        sendMsgButton.isMouseDown=false;
      }; 
      sendMsgButton.onmouseout=function(){
      	if (sendMsgButton.isMouseDown)
      	onmouseup(sendMsgButton);
      }; 
      sendMsgButton.hidden=true;
      
      function sendMsgButtonOnClick(){//send emoji
      	let randomIndex=Math.floor(Math.random() * (urls.length));       		socket.emit('pm',JSON.stringify({'imageURL':urls[randomIndex],'id':userToChatWith,'msg':inputMsg.value}));
            pushEmoji(urls[randomIndex],inputMsg.value);
            inputMsg.value="";
      }    
       
      let showHideLocalVideoE = document.createElement('button');
      document.body.appendChild(showHideLocalVideoE);
      showHideLocalVideoE.temp=buttonHeight/2<<0;
      showHideLocalVideoE.style = "position:fixed;bottom:"+showHideLocalVideoE.temp+"px;"+"left:"+buttonWidth*3+"px;"+setStyle();
      
      
      showHideLocalVideoE.innerHTML = "Hide Video";
      showHideLocalVideoE.onclick = showHideLocalVideo;      
      showHideLocalVideoE.onmousedown=function(){
      	onmousedown(showHideLocalVideoE);
        showHideLocalVideoE.isMouseDown=true;
      };
	  showHideLocalVideoE.onmouseup=function(){
      	onmouseup(showHideLocalVideoE);
        showHideLocalVideoE.isMouseDown=false;
      }; 
      showHideLocalVideoE.onmouseout=function(){
      	if (showHideLocalVideoE.isMouseDown)
      	onmouseup(showHideLocalVideoE);
      }; 
      
      
      function showHideLocalVideo(){	
        	video.hidden=!video.hidden; 
            video.hidden ? showHideLocalVideoE.innerHTML = "Show Video":showHideLocalVideoE.innerHTML = "Hide Video";
      }

      function requestToDisconnectStream(){
      	socket.emit('pm',JSON.stringify({'id':userToChatWith,'endStream':true}));
        disconnectStream();
      } 
      function disconnectStream(){
      		
      		peerConnection.removeStream(localStream);//remove local stream from sending to other client
        	peerConnection.close();//close RTC connection  
            searchButton.disabled=true;
            setTimeout(function(){
            	remoteVideo.hidden=true;
            	searchButton.disabled=false;
                searchButton.style.backgroundColor="DodgerBlue";
                if(moveToNextPeer){
                	searchButton.click();moveToNextPeer=false; 	
                }
                searchButton.style.top=searchButton.temp+"px";
      			searchButton.style.right=0+"px";
            },1000);//hide remote vid element
            console.log('ended');
            userToChatWith=null;//reset values to null once disconnected
        	caller=null;
            peerConnection=null;
            nextButton.hidden=true; 
            sendMsgButton.hidden=true;
        	canvas2.hidden=true;
            inputMsg.hidden=true;
            gif.gif.hidden=false;
            searchButton.innerHTML="Start Search";
      }      

      let division = document.createElement('div');  
      document.body.prepend(division);
      division.innerHTML="Users Onlines : ";
      division.temp=buttonWidth/11<<0;
      division.style="padding:0px;font-size:"+division.temp+"px;color:white;font-family:Lucida Console;";
      division.temp=null;
      
      function searchButtonOnClick(){
      	if (searchButton.innerHTML==="Start Search"){
        	
          socket.emit('startSearch','');
          console.log('startSearch'); 
          searchButton.disabled=true;
          searchButton.style.backgroundColor="#b7b5ae";
          setTimeout(function(){searchButton.disabled=false;searchButton.style.backgroundColor="DodgerBlue";searchButton.innerHTML="Stop Search";},500);
        }
        else if(searchButton.innerHTML==="Stop Search"){
			socket.emit('stopSearch');
            searchButton.disabled=true;
            searchButton.style.backgroundColor="#b7b5ae";
          	setTimeout(function(){searchButton.disabled=false;searchButton.style.backgroundColor="DodgerBlue";searchButton.innerHTML="Start Search";},500);
		}  
        else if(searchButton.innerHTML==="Disconnect"){
			requestToDisconnectStream();
            searchButton.disabled=true;
            searchButton.style.backgroundColor="#b7b5ae";
          	setTimeout(function(){searchButton.disabled=false;searchButton.style.backgroundColor="DodgerBlue";searchButton.innerHTML="Start Search";},500);
		}        
      }
      
      socket.on('startSearch',function(e){/*e->{id:xxxxx,caller:true/false}*/      
        let temp=JSON.parse(e);
        caller = temp.caller;
        userToChatWith=temp.id;
        if (caller)//if caller/host, initiate connection
        initiateConnection(caller);
      });
           
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
      	searchButton.style = "position:fixed;bottom:"+searchButton.temp+"px;"+setStyle(); 
        console.log('got remote stream');
        remoteVideo.src = window.URL.createObjectURL(event.stream);
        remoteVideo.hidden=false;
		searchButton.disabled=true;
        nextButton.hidden=false;
        sendMsgButton.hidden=false;
        canvas2.hidden=false;
        inputMsg.hidden=false;
        gif.gif.hidden=true;
        //showHideLocalVideoE.style.left=buttonWidth+"px";
        setTimeout(function(){
        	searchButton.innerHTML="Disconnect";
            searchButton.style.backgroundColor="red";
            searchButton.disabled=false;
        },1000);
        
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
		
        //receive Private Msg from a client
      socket.on('pm', function(data) {//data-{endStream:true/false, sdp:...,ice:.... }
      	let obj = JSON.parse(data);
        
        if (obj.imageURL){
        	pushEmoji(obj.imageURL,obj.msg);//where emoji is the image
            return;
        }        
      	if (obj.endStream){//check whether 'endStream' request is sent by other peer
        	disconnectStream();//disconnect
            return;
        }
        if (!peerConnection) {
          initiateConnection(false);
        }
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
}
