let locName = location.hostname;
//console.log(locName);
      if (locName === "shianliangpetroleum.000webhostapp.com"||locName === "www.shianliangpetroleum.com") {
        setTimeout(function() {
          let list = document.querySelectorAll("div");
          console.log(list[list.length - 2].style);
          list[list.length - 2].hidden = true;
          list[list.length - 2].innerHTML = "";
          list = null;

        }, 1000);
      }
