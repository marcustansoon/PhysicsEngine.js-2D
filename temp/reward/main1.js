
    document.getElementById("resetUsername").onkeyup=function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        confirmResetPassword();this.blur();
      }
  	} 
    document.getElementById("resetOldPassword").onkeyup=document.getElementById("resetUsername").onkeyup;
    
    document.getElementById("resetNewPassword").onkeyup=document.getElementById("resetUsername").onkeyup;
    document.getElementById("resetNewPassword2").onkeyup=document.getElementById("resetUsername").onkeyup;
    
     document.getElementById("resetOldUsername").onkeyup=function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        confirmResetUsername();this.blur();
      }
  	}
    document.getElementById("resetNewUsername").onkeyup=document.getElementById("resetOldUsername").onkeyup;
    document.getElementById("resetNewUsername2").onkeyup=document.getElementById("resetOldUsername").onkeyup;
    document.getElementById("resetPasswordU").onkeyup=document.getElementById("resetOldUsername").onkeyup;
   
    
      resizeAuto(); //init resize
      function resizeAuto() {
        if (window.innerWidth > 800) {
          document.getElementById("hiddenBorder").className = "";
        } else {
          document.getElementById("hiddenBorder").className = "hiddenBorder";
        }
      }



      //init
      document.getElementById('leftArrow').style.opacity = 0;
      document.getElementById('rightArrow').style.opacity = 0;

      let isShowing = false,
        shouldHide = false;

      function show() {
        isShowing = true;
        document.getElementById('leftArrow').className = "shortHide";
        document.getElementById('leftArrow').style.opacity = 1;
        document.getElementById('rightArrow').className = "shortHide";
        document.getElementById('rightArrow').style.opacity = 1;
      }

      function hide() {
        if (isShowing) {
          shouldHide = true;
          return;
        }

        document.getElementById('leftArrow').style.opacity = 0;
        document.getElementById('leftArrow').className = "longHide";
        document.getElementById('rightArrow').style.opacity = 0;
        document.getElementById('rightArrow').className = "longHide";
      }

      document.getElementById('leftArrow').addEventListener("transitionend", function(event) {
        if (shouldHide) {
          shouldHide = false;

          document.getElementById('leftArrow').style.opacity = 0;
          document.getElementById('leftArrow').className = "longHide";
          document.getElementById('rightArrow').style.opacity = 0;
          document.getElementById('rightArrow').className = "longHide";

        }
        if (isShowing) {
          isShowing = false;
        }

      }, false);


      function facebookRedirect() {
        window.open("https://www.facebook.com/SLPetroleum/", '_blank');
      }

      let locName = location.hostname;
      if (locName === "marcustansoon.000webhostapp.com") {
        setTimeout(function() {
          let list = document.querySelectorAll("div");
          console.log(list[list.length - 1].innerHTML);
          list[list.length - 1].hidden = true;
          list[list.length - 1].innerHTML = "";
          list = null;

        }, 1000);
      }




      let rDes1 = [ /*"Tour to Singapore<br><span style='color:#0147b7;'>(52,000 Litres)</span>", "Samsung Galaxy Note 9<br><span style='color:#0147b7;'>(30,000 Litres)</span>"*/ ],
        rImg1 = [ /*"https://d1sttufwfa12ee.cloudfront.net/uploads/deal/thumb/78005.jpg", "https://qmart.pk/image/cache/Samsung2/Galaxy%20Note%209/Galaxy-Note-9-Qmart-6-550x550.jpg"*/ ],

        rDes2 = [ /*"2D1N Trip Damai Beach Resort<br><span style='color:#0147b7;'>(35,000 Litres)</span>", "Bluetooth Headset<br><span style='color:#0147b7;'>(5,000 Litres)</span>"*/ ],
        rImg2 = [ /*"https://www.thedamai.com/application/files/2714/9691/4744/PoolViewDamaiNew.jpg", "https://i.ebayimg.com/images/g/wv8AAOSw1T1cHmnW/s-l640.jpg"*/ ],

        rDes3 = [ /*"Razer Blade Pro Laptop<br><span style='color:#0147b7;'>(25,000 Litres)</span>", "Men's Sport Shoes<br><span style='color:#0147b7;'>(10,000 Litres)</span>"*/ ],
        rImg3 = [ /*"https://cnet1.cbsistatic.com/img/w7BxQMvQ9I_jmr_snHIDNk3xBss=/1148x646/2018/06/07/20b41234-a847-42e7-b0b3-1facc96cc669/09-razer-blade-2018.jpg", "https://ae01.alicdn.com/kf/HTB1HCCyRpXXXXb8aXXXq6xXFXXX5/Twofoldone-Promotion-Mens-sneakers-for-men-sports-shoes-Super-light-Running-shoes-men-athletic-shoes.jpg"*/ ],

        rDes4 = [ /*"RM 20 KFC Voucher<br><span style='color:#0147b7;'>(500 Litres)</span>", "Xiaomi Smart Watch<br><span style='color:#0147b7;'>(7,000 Litres)</span>"*/ ],
        rImg4 = [ /*"https://media.karousell.com/media/photos/products/2018/08/20/kfc_voucher_1534770810_8fde072d.jpg", "https://images-na.ssl-images-amazon.com/images/I/61CgJx9g04L._SY450_.jpg"*/ ],

        currentRewardTabView = 0;



      function rewardSwipe(string) {
        if (string === "left") {
          currentRewardTabView--;
          if (currentRewardTabView < 0) {
            currentRewardTabView = rDes1.length - 1;
          }

        } else {
          currentRewardTabView = (currentRewardTabView + 1) % rDes1.length;
        }


        if (rDes1[currentRewardTabView]) {
          document.getElementById("rImg1Box").hidden = false;
          document.getElementById("rDes1").innerHTML = rDes1[currentRewardTabView];
          document.getElementById("rImg1").src = rImg1[currentRewardTabView];
        } else {
          document.getElementById("rImg1Box").hidden = true;
        }

        if (rDes2[currentRewardTabView]) {
          document.getElementById("rImg2Box").hidden = false;
          document.getElementById("rDes2").innerHTML = rDes2[currentRewardTabView];
          document.getElementById("rImg2").src = rImg2[currentRewardTabView];
        } else {
          document.getElementById("rImg2Box").hidden = true;
        }
        if (rDes3[currentRewardTabView]) {
          document.getElementById("rImg3Box").hidden = false;
          document.getElementById("rDes3").innerHTML = rDes3[currentRewardTabView];
          document.getElementById("rImg3").src = rImg3[currentRewardTabView];
        } else {
          document.getElementById("rImg3Box").hidden = true;
        }
        if (rDes4[currentRewardTabView]) {
          document.getElementById("rImg4Box").hidden = false;
          document.getElementById("rDes4").innerHTML = rDes4[currentRewardTabView];
          document.getElementById("rImg4").src = rImg4[currentRewardTabView];
        } else {
          document.getElementById("rImg4Box").hidden = true;
        }


      }

      function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }



      function attemptToReconnect(){
        socket.connect();
        //socket = io("https://lizard-overcoat.glitch.me/");
      }


      let socket = io("https://lizard-overcoat.glitch.me/");

      function logout(){
        sessionStorage.clear();
        location.replace("https://shian-liang-petroleum.glitch.me/reward/login.html");
      }
      socket.on("connect",function(){
          console.log("connected");
          if (!sessionStorage.getItem("companyFullName")||!sessionStorage.getItem("to")||!sessionStorage.getItem("rawOrderListData")){
            alert("err 404 : Data not found");
            logout();
          }
        
          if (globalRankingCalculationInit){//execute once
            globalRankingCalculationInit();
            globalRankingCalculationInit=null;
          }
      });
      
      
      
      
      function globalRankingCalculationInit(){
        let globalUserDataList=[],globalUserIndex=0,globalUserLitreList=[];

        socket.on("globalRankingCalculation",function(e){
          globalUserDataList.push([e[0],e[1]]);
          if (e[2]===globalUserDataList.length){
              requestMonthlyOrderInfoR(0);//start
              console.log('requested to assist in global rank computation');
          }
        });

        function requestMonthlyOrderInfoR(index){  //retrieve monthly user info	
          socket.emit("requestMonthlyOrderInfoR",globalUserDataList[index][0]);
        }

        let globalUserGrandTotal=0,
        totalGlobalOrderListCount=999,
        receivedCount=0;

        socket.on("monthlyOrderInfoR",function(e){
          
          e.forEach(function(row){
              if (!isNaN(parseInt(row[1])))
                  globalUserGrandTotal+=parseInt(row[1]);
              else{
                  console.log("err data"); 
              }
          });
          receivedCount++;
          if (receivedCount===totalGlobalOrderListCount){//run when all data are received
              //console.log(globalUserGrandTotal);
              globalUserLitreList.push(globalUserGrandTotal);
              //reset
              globalUserGrandTotal=0;
              totalGlobalOrderListCount=999;
              receivedCount=0;

              //increment
              globalUserIndex++;
              if (globalUserDataList.length!==globalUserIndex){//check if all data hav being retrieved
                  setTimeout(function(){//if not request for other user info
                  //console.log("requesting other user info");
                  requestMonthlyOrderInfoR(globalUserIndex);
                  },1000);
              }else{//when all user litres are retrieved and computed
                  for (let t=0;t<5;t++){//ensure top 3 users are properly setup
                    if(globalUserLitreList.length<3){
                      globalUserLitreList.push("");
                      globalUserDataList.push(["","https://museomarinomarini.it/wp-content/uploads/2017/03/transparent-square-tiles.png"]);
                    }else{
                      break;     
                    }
                  }

                  let tempArr=globalUserLitreList.slice(0);//clone new similar arr
                  tempArr.sort(function(a, b){return b - a});

                  let r1Index,r2Index,r3Index;

                  for (let index=0;index<globalUserLitreList.length;index++){
                      if (tempArr[0]===globalUserLitreList[index]&&!r1Index){
                          r1Index=index;
                      }else if (tempArr[1]===globalUserLitreList[index]&&!r2Index){
                          r2Index=index;
                      }else if (tempArr[2]===globalUserLitreList[index]&&!r3Index){
                          r3Index=index;
                      }

                  }
                  //update server global ranking txt data on the server
                  console.log('global rank computation data sent ');
                  socket.emit("updateGlobalRanking",[[tempArr[0],globalUserDataList[r1Index][1]],[tempArr[1],globalUserDataList[r2Index][1]],[tempArr[2],globalUserDataList[r3Index][1]]]);
              }
          }
        });
        socket.on("totalGlobalOrderListCount",function(e){
          totalGlobalOrderListCount=e;
        });

      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      socket.on("disconnect",function(){
         setTimeout(function(){if (!socket.connected)attemptToReconnect();console.log("attempting to recon");},2000);
      });
      
      let imgURLList=[],
          imgDesList=[],
          imgLitresList=[],
          imgLitresStringList=[];
      
      socket.on("rewardListInit", function(e) {
      
      	imgURLList=[];
        imgDesList=[];
        imgLitresList=[];
        imgLitresStringList=[];
        rImg1=[];
        rDes1=[];
        rImg2=[];
        rDes2=[];
        rImg3=[];
        rDes3=[];
        rImg4=[];
        rDes4=[];
        
        for (let loop = 0; loop < e.length; loop += 4) {
          if (e[loop][0]) {
            rImg1.push(e[loop][0]);
            rDes1.push(e[loop][1] + "<br><span style='color:#0147b7;'>(" + e[loop][2] + " Litres)</span>");
            
            imgURLList.push(e[loop][0]);//push image url 
            imgDesList.push(e[loop][1]);//push img des 
            imgLitresList.push(parseInt(e[loop][2].replace(/,/g,'')));//push number 
            imgLitresStringList.push(e[loop][2]);
          }
          if (e[loop + 1]) {
            rImg2.push(e[loop + 1][0]);
            rDes2.push(e[loop + 1][1] + "<br><span style='color:#0147b7;'>(" + e[loop + 1][2] + " Litres)</span>");
            
            imgURLList.push(e[loop+1][0]);//push image url 
            imgDesList.push(e[loop+1][1]);//push img des 
            imgLitresList.push(parseInt(e[loop+1][2].replace(/,/g,'')));//push number 
            imgLitresStringList.push(e[loop+1][2]);
          }
          if (e[loop + 2]) {
            rImg3.push(e[loop + 2][0]);
            rDes3.push(e[loop + 2][1] + "<br><span style='color:#0147b7;'>(" + e[loop + 2][2] + " Litres)</span>");
            
            imgURLList.push(e[loop+2][0]);//push image url 
            imgDesList.push(e[loop+2][1]);//push img des 
            imgLitresList.push(parseInt(e[loop+2][2].replace(/,/g,'')));//push number 
            imgLitresStringList.push(e[loop+2][2]);
          }
          if (e[loop + 3]) {
            rImg4.push(e[loop + 3][0]);
            rDes4.push(e[loop + 3][1] + "<br><span style='color:#0147b7;'>(" + e[loop + 3][2] + " Litres)</span>");
            
            imgURLList.push(e[loop+3][0]);//push image url 
            imgDesList.push(e[loop+3][1]);//push img des 
            imgLitresList.push(parseInt(e[loop+3][2].replace(/,/g,'')));//push number 
            imgLitresStringList.push(e[loop+3][2]);
          }
        }
        rewardSwipe("left"); //init 
        rewardSwipe("right");
        document.getElementById("featured-reward-content").hidden = false;
        console.log("rewardInit");
        
        
        
         //on retrieve reward List data from server, shortlist the redeemable reward
         let count=0;
          document.getElementById("redeemable-reward-content").innerHTML="";//init
          //console.log(imgLitresList.length);
          imgLitresList.forEach(function(itemLitre,index){
            if (orderListGrandTotal>=itemLitre){//imgLitresStringList
              count++;
              document.getElementById("redeemable-reward-content").innerHTML+='<div class="redeemable-col1"> <img src="'+imgURLList[index]+'" class="redeemable-reward-img"> <div class="featured-reward-des">'+imgDesList[index]+'<br><span style="color:#0147b7;">('+imgLitresStringList[index]+' Litres)</span></div> </div>'
              if (count==3){
                count=0;
                document.getElementById("redeemable-reward-content").innerHTML+='<div class="hiddenBorder"></div>';
                
              }
             
            }
            
          });
          document.getElementById("redeemable-reward-content").innerHTML+='<div class="hiddenBorder"></div>';//add end hiddenborder
        
      });




      
      
      let orderListData = [],
        orderListTitle = [],
        currentOrderListViewIndex = 0,
        orderListMonthlyTotal = [];

      function orderSwipe(string) {
        if (string === "left") {
          currentOrderListViewIndex--;
          if (currentOrderListViewIndex < 0) {
            currentOrderListViewIndex = orderListData.length - 1;
          }
        } else {
          currentOrderListViewIndex = (currentOrderListViewIndex + 1) % orderListData.length;
        }
        document.getElementById("orderTableContent").innerHTML = orderListData[currentOrderListViewIndex];
        document.getElementById("orderTitle").innerHTML = "Record List (" + orderListTitle[currentOrderListViewIndex] + ")";
        document.getElementById("orderMonthlyTotal").innerHTML = "Total ( " + orderListTitle[currentOrderListViewIndex] + " ) : " + numberWithCommas(orderListMonthlyTotal[currentOrderListViewIndex]) + " L";
      }



      
      //retrieve data from html session
      
      document.getElementById("compName").innerHTML = "Company : " + sessionStorage.getItem("companyFullName");
      document.getElementById("compLogo").src = sessionStorage.getItem("companyLogo");
    
      
      let from = sessionStorage.getItem("from"),
        to = sessionStorage.getItem("to"),
        rawOrderListData = JSON.parse(sessionStorage.getItem("rawOrderListData")),
        orderListGrandTotal = 0;




      rawOrderListData.forEach(function(dataSet, mainIndex) {
        let string = "<tr> <th>Purchases</th> <th>Amount (Litres)</th> <th>Date</th> </tr>";


        let total = 0;
        dataSet.data.forEach(function(element, index) {
          string += "<tr>";
          string += "<td>" + element[0] + "</td>";
          string += "<td>" + element[1] + "</td>";
          total += parseInt(element[1]);
          string += "<td>" + element[2] + "</td>";
          string += "</tr>";
          if (index === dataSet.data.length - 1) {
            orderListMonthlyTotal[dataSet.index] = total;
            //console.log(total);
          }
        });
        orderListGrandTotal += total;
        orderListTitle[dataSet.index] = dataSet.title;
        orderListData[dataSet.index] = string;
        if (dataSet.index === 0) {
          document.getElementById("orderTableContent").innerHTML = orderListData[currentOrderListViewIndex];
          document.getElementById("orderTitle").innerHTML = "Record List (" + orderListTitle[currentOrderListViewIndex] + ")";
          document.getElementById("orderMonthlyTotal").innerHTML = "Total ( " + orderListTitle[currentOrderListViewIndex] + " ) : " + numberWithCommas(orderListMonthlyTotal[currentOrderListViewIndex]) + " L";
        }

        if (mainIndex === rawOrderListData.length - 1) {//check if all monthly infos are displayed (reach highest index)
          document.getElementById("grandTotal").innerHTML = "Grand Total = " + numberWithCommas(orderListGrandTotal) + " L";
          
  
        }
      });







      function isInputDataValid(string) {
        let invalidChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
          ],
          isInvalid;


        if (string.length === 0) {
          return false;
        }
        for (let index = 0; index < string.length; index++) {
          isInvalid = true;
          for (let loop = 0; loop < invalidChar.length; loop++) {
            if (string[index] === invalidChar[loop]) {
              isInvalid = false;
              break;
            }

          }
          if (isInvalid) {
            return false;
          }

        };
        return true;
      }

      function cancelResetPassword() {
        document.getElementById('myModal').style.display = "none";
      }

      function confirmResetPassword() {
        
        let username=document.getElementById("resetUsername").value,
            oldPassword=document.getElementById("resetOldPassword").value,
            newPassword=document.getElementById("resetNewPassword").value;
        
        
        document.getElementById("incorrectCredentialBox").hidden=true;
        document.getElementById("bufferBg").hidden=false;
        
        if (document.getElementById("resetNewPassword2").value!==document.getElementById("resetNewPassword").value){
          document.getElementById("incorrectCredentialBox").hidden=false;
          document.getElementById("incorrectCredentialBox").innerHTML="New and Confirmation password do not match, please re-enter";
          document.getElementById("bufferBg").hidden=true;
        }else if (newPassword.length<5||!isInputDataValid(oldPassword)||!isInputDataValid(username)){
          document.getElementById("incorrectCredentialBox").hidden=false;
          document.getElementById("incorrectCredentialBox").innerHTML="Password must NOT contain special characters and must be at least five characters long";
          document.getElementById("bufferBg").hidden=true;
        }else if (!socket.connected){
          alert("network err");
          setTimeout(function(){if (!socket.connected)attemptToReconnect();console.log("attempting to recon");},2000);
          document.getElementById("bufferBg").hidden=true;
          //auto connect on disconnect
        }else{
          socket.emit("resetPassword",{"oldPassword":oldPassword,"newPassword":newPassword,"username":username,"from":from,"to":to});
          
        }
        
        document.getElementById("resetOldPassword").value="";
        document.getElementById("resetNewPassword").value="";
        document.getElementById("resetNewPassword2").value="";
        
        
      }
      
      
      socket.on("resetPasswordStatus",function(e){
       	document.getElementById("bufferBg").hidden=true;
        console.log(e);
        if (e==="success"){
          logout();
        }else{
          document.getElementById("incorrectCredentialBox").hidden=false;
          document.getElementById("incorrectCredentialBox").innerHTML="Incorrect password / username";
        }
      }); 

      

      
      
      function showResetUsernameContent(){
        document.getElementById("resetPasswordContent").hidden=true;
        document.getElementById("resetUsernameContent").hidden=false; 
      }
      function cancelResetUsername(){
        document.getElementById("resetUsernameContent").hidden=true;
        document.getElementById("resetPasswordContent").hidden=false;
        cancelResetPassword();
      }
      function confirmResetUsername(){
        let obj={
          "oldUsername":document.getElementById("resetOldUsername").value,
          "newUsername":document.getElementById("resetNewUsername").value,
          "password":document.getElementById("resetPasswordU").value,
          "from":from,
          "to":to
        }
        
        document.getElementById("bufferBg").hidden=false;
        document.getElementById("resetPasswordU").value="";
        document.getElementById("incorrectCredentialBoxU").hidden=true;
        
        if (obj.newUsername !== document.getElementById("resetNewUsername2").value){
          document.getElementById("incorrectCredentialBoxU").hidden=false;
          document.getElementById("incorrectCredentialBoxU").innerHTML="New and Confirmation username do not match, please re-enter";
          document.getElementById("bufferBg").hidden=true;
        }
        else if (!isInputDataValid(obj.oldUsername)||!isInputDataValid(obj.newUsername)||!isInputDataValid(obj.password)||obj.newUsername.length<5){
          document.getElementById("incorrectCredentialBoxU").hidden=false;
          document.getElementById("incorrectCredentialBoxU").innerHTML="Username must NOT contains special characters and must be at least five characters long";
          document.getElementById("bufferBg").hidden=true;
        }else if (!socket.connected){
          alert("network err");
          setTimeout(function(){if (!socket.connected)attemptToReconnect();console.log("attempting to recon");},2000);
          document.getElementById("bufferBg").hidden=true;
        }else{
          socket.emit("resetUsername",obj);
        }    
      }
      socket.on("resetUsernameStatus",function(e){
        console.log(e);                     
        document.getElementById("bufferBg").hidden=true;                           
        if (e==="success"){
          logout();
        }else if (e==="wrong credentials"){
          document.getElementById("incorrectCredentialBoxU").hidden=false;
          document.getElementById("incorrectCredentialBoxU").innerHTML="Incorrect username / password";
        }else{
          document.getElementById("incorrectCredentialBoxU").hidden=false;
          document.getElementById("incorrectCredentialBoxU").innerHTML="The username already exists, please use a different username";
        }
        
      });
      
      

      
      
      
      
      
      
      
      
      let bannerInitBoolean=false;
      socket.on("bannerListInit",function(e){
        console.log("banner init");
        bannerInitBoolean=true;
        slideImgs=[];
        slideImgsHDes=[];
        slideImgsStyle=[];
        slideImgsDes=[];

        e.forEach(function(element){
          slideImgs.push(element[0]);
          slideImgsHDes.push(element[1]);
          slideImgsStyle.push(element[2]);
          slideImgsStyle.push(element[3]);
          slideImgsDes.push(element[4]);
          slideImgsStyle.push(element[5]);
          slideImgsStyle.push(element[6]);
        });
        swipe('left');

      });

      
      let mousedown = false,
        initX = 0,
        swipeLeft = false,
        slideTabs = [0, 1, 2],
        isSlidingEnd = true,
        slideImgs=[/*
                       "http://acumen.sg/wp-content/uploads/2014/12/Oil-drilling.jpg",
                       "https://i.imgur.com/y59LoOQ.png",
                       "https://i.imgur.com/7ZeXLle.png",
          "https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"*/
                    ],
          slideImgsDes=[/*
                        "Offers integrated end-to-end industrial based oil products and services and provides ISO containers for leasing",
                        "Rewards redemption, now easier and worthy than ever. What are you waiting for? Purchase to get points",
                        "Offers integrated end-to-end industrial based oil products and services and provides ISO containers for leasing",
                        "Offers integrated end-to-end industrial based oil products and services and provides ISO containers for leasing"*/
                       ],
          slideImgsHDes=[/*
                        "Providing Oil Business Solutions",
                        "Awesome Rewards Awaits You",
                        "Providing Oil Business Solutions","Providing Oil Business Solutions"*/
                        ],
          slideImgsStyle=[    /*
                        "yellow","rgba(255,255,255,0)","#f7ffc6","rgba(0,0,0,0.3)",
                        "#0044b2","rgba(255,255,255,0.5)","#0044b2","rgba(255,255,255,0.6)",
                        "rgba(0,0,0,0)","rgba(255,255,255,0)","rgba(0,0,0,0)","rgba(0,0,0,0)",
                        "rgba(0,0,0,0)","rgba(255,255,255,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"*/
                        ],
          currentSlideIndex=1;
      
      
      let autoSwipe = setInterval(autoSwipeFunc, 5000),
        isAutoSwipe = true;

      document.getElementById('slideshow-content').onmousedown = function(event) {
        mousedown = true;

        if (!event.clientX) event.clientX = event.touches[0].clientX;
        initX = event.clientX; // Get the horizontal coordinate

      }
      document.getElementById('slideshow-content').ontouchstart = document.getElementById('slideshow-content').onmousedown;

      document.getElementById('slideshow-content').onmouseup = function() {
        mousedown = false;

        if (swipeLeft) {
          swipe('left');
          return;
        }
        swipe('right');

      }
      document.getElementById('slideshow-content').ontouchend = document.getElementById('slideshow-content').onmouseup;

      document.getElementById('slideshow-content').onmousemove = function(event) {
        if (mousedown) {
          if (!event.clientX) event.clientX = event.touches[0].clientX;
          if (!event.clientY) event.clientY = event.touches[0].clientY;
          if (initX > event.clientX) {
            swipeLeft = true;
          } else {
            swipeLeft = false;
          }
          clearInterval(autoSwipe);
          isAutoSwipe = false;
        }

      }
      document.getElementById('slideshow-content').ontouchmove = document.getElementById('slideshow-content').onmousemove;

      function swipe(string) {

        if (!isSlidingEnd||!bannerInitBoolean) return;
        isSlidingEnd = false;
        let prev,next;

        if (string === "left") {
          let temp = slideTabs[0];
          slideTabs[0] = slideTabs[1];
          slideTabs[1] = slideTabs[2];
          slideTabs[2] = temp;

          document.getElementById("img" + slideTabs[0]).className = "slideOutLeft";
          document.getElementById("img" + slideTabs[1]).className = "slideInRight";
          document.getElementById("img" + slideTabs[2]).className = "instantRight";
          
          prev=currentSlideIndex;
          currentSlideIndex--;
          if(currentSlideIndex<0){
            currentSlideIndex=slideImgs.length-1;
          }
          next=currentSlideIndex;
          next--;
          if(next<0){
            next=slideImgs.length-1;
          }
          
          document.getElementById("img" + slideTabs[0]).src = slideImgs[prev];
          document.getElementById("img" + slideTabs[1]).src = slideImgs[currentSlideIndex];
          document.getElementById("img" + slideTabs[2]).src = slideImgs[next];

        } else { //right
          let temp = slideTabs[2];
          slideTabs[2] = slideTabs[1];
          slideTabs[1] = slideTabs[0];
          slideTabs[0] = temp;

          document.getElementById("img" + slideTabs[2]).className = "slideOutRight";
          document.getElementById("img" + slideTabs[1]).className = "slideInLeft";
          document.getElementById("img" + slideTabs[0]).className = "instantLeft";
                    
          
          prev=currentSlideIndex;
          currentSlideIndex=(currentSlideIndex+1)%slideImgs.length;
          next=(currentSlideIndex+1)%slideImgs.length;
          
          document.getElementById("img" + slideTabs[2]).src = slideImgs[prev];
          document.getElementById("img" + slideTabs[1]).src = slideImgs[currentSlideIndex];
          document.getElementById("img" + slideTabs[0]).src = slideImgs[next];
        }
        
        
        document.getElementById("banner-des2").innerHTML=slideImgsDes[currentSlideIndex];
        document.getElementById("banner-des1").innerHTML=slideImgsHDes[currentSlideIndex];
        
        document.getElementById("banner-des1").style.color=slideImgsStyle[currentSlideIndex*4];
        document.getElementById("banner-des2").style.color=slideImgsStyle[currentSlideIndex*4+2];
        
        document.getElementById("banner-des1").style.backgroundColor=slideImgsStyle[currentSlideIndex*4+1];
        document.getElementById("banner-des2").style.backgroundColor=slideImgsStyle[currentSlideIndex*4+3];
        
        document.getElementById("banner-des1").style.opacity=slideImgsStyle[currentSlideIndex*4+1];
        document.getElementById("banner-des2").style.opacity=slideImgsStyle[currentSlideIndex*4+3];
        /*
        document.getElementById("banner-des2").style.opacity = "1";
        document.getElementById("banner-des1").style.opacity = "1";
        document.getElementById("banner-des2").style.left = "5%";
        document.getElementById("banner-des1").style.left = "2%";
        document.getElementById("banner-des1").style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementById("slideBubble1").style.backgroundColor = "black";
        document.getElementById("slideBubble2").style.backgroundColor = "black";
        document.getElementById("slideBubble3").style.backgroundColor = "black";

        document.getElementById("banner-des2").style.padding = "calc(5px + 1vw)";
        document.getElementById("banner-des2").style.paddingLeft = "calc(5px + 1vw)";

        document.getElementById("banner-des1").style.padding = "calc(5px + 4vw)";
        document.getElementById("banner-des1").style.paddingBottom = "calc(4px + 1vw)";

        document.getElementById("banner-des1").style.transform = "translate(0,0%)";
        document.getElementById("banner-des2").style.transform = "translate(0,0%)";

        document.getElementById("banner-des2").style.marginBottom = "calc(30px + 5vw)";

        if (slideTabs[1] === 1) {
          document.getElementById("banner-des1").style.color = "blue";
          document.getElementById("banner-des1").style.backgroundColor = "rgba(255,255,255,0.5)";
          document.getElementById("banner-des2").style.color = "black";
          document.getElementById("banner-des2").style.backgroundColor = "rgba(255,255,255,0.6)";
          document.getElementById("banner-des1").innerHTML = "Awesome Rewards Awaits You";
          document.getElementById("banner-des1").style.paddingTop = "1%";
          document.getElementById("banner-des2").style.marginBottom = "16.5%";
          document.getElementById("banner-des2").innerHTML = "Rewards redemption, now easier and worthy than ever. What are you waiting for? Purchase to get points";
          document.getElementById("banner-des1").style.transform = "translate(0,55%)";
          document.getElementById("banner-des2").style.transform = "translate(0,60%)";
          document.getElementById("slideBubble1").style.color = "white";
          document.getElementById("slideBubble2").style.color = "yellow";
          document.getElementById("slideBubble3").style.color = "white";
        } else if (slideTabs[1] === 0) {
          document.getElementById("banner-des1").style.color = "yellow";
          document.getElementById("banner-des2").style.color = "#f7ffc6";
          document.getElementById("banner-des1").innerHTML = "Providing Oil Business Solutions";
          document.getElementById("banner-des2").innerHTML = "Offers integrated end-to-end industrial based oil products and services and provides ISO containers for leasing";
          document.getElementById("banner-des2").style.backgroundColor = "rgba(0,0,0,0.3)";
          document.getElementById("slideBubble1").style.color = "yellow";
          document.getElementById("slideBubble2").style.color = "white";
          document.getElementById("slideBubble3").style.color = "white";
        } else if (slideTabs[1] === 2) {

          //document.getElementById("banner-des1").innerHTML="";
          //document.getElementById("banner-des2").innerHTML="";
          document.getElementById("banner-des2").style.backgroundColor = "rgba(0,0,0,0)";
          document.getElementById("banner-des2").style.opacity = "0";
          document.getElementById("banner-des1").style.opacity = "0";
          document.getElementById("slideBubble1").style.color = "white";
          document.getElementById("slideBubble2").style.color = "white";
          document.getElementById("slideBubble3").style.color = "yellow";
        }*/

        setTimeout(function() {
          isSlidingEnd = true;
          if (!isAutoSwipe) {
            isAutoSwipe = true;
            autoSwipe = setInterval(autoSwipeFunc, 5000);
          }
        }, 1000);

      }

      

      function autoSwipeFunc() {
        swipe('right');
      }
      
      
      
