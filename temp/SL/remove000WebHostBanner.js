let locName = location.hostname;
if(window.onload){
window.onload=function (){remove000WebHostBanner();window.onload();}
}else{
            window.onload=remove000WebHostBanner;
      }
      
function remove000WebHostBanner(){
      if (locName === "shianliangpetroleum.000webhostapp.com"||locName === "www.shianliangpetroleum.com") {
        //setTimeout(function() {
          let list = document.querySelectorAll("div");
              
          console.log(list[list.length - 2].style);
              
              for(let t=0;t<list.length;t++){
                  if(list[t].cssText.includes("9999")){
                     list[t].innerHTML="";
                        list[t].hidden=true;
                        break;
                     }
              }
          //list[list.length - 2].hidden = true;
          //list[list.length - 2].innerHTML = "";
          list = null;

      //  }, 1000);
      }
}
