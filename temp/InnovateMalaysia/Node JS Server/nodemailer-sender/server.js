let nodemailer = require("nodemailer"),
  smtpTransport = require("nodemailer-smtp-transport"),
  app = require("http")
    .createServer(function(req, res) {
      if (req.url.includes("/views/activate")) {
      }
      console.log(req.method);
      if (req.method == "POST") {
        let data = "";
        req.on("data", function(_data) {
          data += _data;
        });
        req.on("end", function() {
          //console.log(data);
          if (IsJsonString(data)) {
            data = JSON.parse(data);
            if (typeof data === "object" && data.html && data.from && data.to) {
              res.end("ok");
              console.log("ok");
              sendMail(data);
            } else {
              res.end("not ok");
              console.log("not ok");
            }
          } else {
            res.end("not ok");
            console.log("not ok");
          }
        });
      } else {
        res.end("ok");
      }
    })
    .listen(8080);

function sendMail(obj) {
  //send mail to a specified user

  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: 'smtp.gmail.com',
      port: 25,
      requireTLS: true,
      tls: { ciphers: "SSLv3" },
      secureConnection: false,
      auth: {
        user: "marcustansoonqwe@gmail.com", // my mail
        pass: "1997316tansoon"
      }
    })
  );

  transporter.sendMail(obj, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
    transporter.close();
  });
}
function IsJsonString(str) {
  //check if a string is a valid convertable object
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
