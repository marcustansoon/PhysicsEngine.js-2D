 // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("resetPasswordButton");


      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal.style.display = "block";
      }



      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      
      
      
      //auto logout after 5min of inactivity
      let activeMinute=0;
      resetActiveMinute();//init
      function resetActiveMinute (){
        let d = new Date();
        d = d.getMinutes();
        d=parseInt(d);
        
        activeMinute=d;
      }

      
      function autoLogoutInterval(){ 
            let d = new Date();
            d = d.getMinutes();
            d=parseInt(d);
              
            d=d-activeMinute;
            if (d<0){
              d+=60;
            }
          //console.log(d);
          
            if(d>5){ 
              console.log('auto logout');
              logout();//alert('auto lg');
              
            } else{
                setTimeout(callAutoLogoutInterval,10000);
            }
        
      }
      function callAutoLogoutInterval(){
        requestAnimationFrame(autoLogoutInterval);
      }
      callAutoLogoutInterval();//start
      
      document.body.onclick=function(){ resetActiveMinute(); }
      document.body.ontouchstart=document.body.onclick;
