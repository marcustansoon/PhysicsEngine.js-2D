module.exports = (function () {
  let crypto={};
  crypto.isJSONStringValid=function (JSONString) {
    try {
      JSONString=JSON.parse(JSONString);
      if (typeof JSONString==="object") return true;
    }
    catch(err) {
      return false;
    }
  }
  crypto.encrypt=function(string, encryptKey) {
    let len=string.length,
    encryptedString="";
    for (let loop=0;
    loop<len;
    loop++) {
      encryptedString+=String.fromCharCode(string.charCodeAt(loop)^encryptKey);
    }
    encryptedString=Buffer.from(encryptedString).toString("base64");//covnvert to base64 string
    return encryptedString;
  }
  crypto.decrypt=function(string, encryptKey) {
    string=Buffer.from(string,"base64").toString();
    let len=string.length,
    decryptedString="";
    for (let loop=0;
    loop<len;
    loop++) {
      decryptedString+=String.fromCharCode(string.charCodeAt(loop)^encryptKey);
    }
    return decryptedString;
  }
  return crypto;
})();
