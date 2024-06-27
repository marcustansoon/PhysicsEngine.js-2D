let ref;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert(/*cordova.file*/'1');
    setTimeout(()=>{
        ref = cordova.InAppBrowser.open("https://marcustansoon.github.io/PhysicsEngine.js-2D/temp/Games/BBQ-Sort/source-files/main-screen.html", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
    }, 2000);
}
