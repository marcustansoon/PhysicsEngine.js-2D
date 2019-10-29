let crypto = require("./crypto.js"),
  nodemailer = require("nodemailer"),
  fs = require("file-system"),
  superagent = require("superagent"),
  phpPostURLQ =
    "https://marcustansoon.000webhostapp.com/Azure/server.php?query=",
  phpPostURLM = "&multiquery=true";

let app = require("http").createServer(function(req, res) {
  if (req.url.includes("/views/activate")) {
    if (!true) {
      fs.readFile("views/reload.html", function(err, fileData) {
        res.writeHead(200);
        res.end(fileData); //redirect to failure site url
      });
      return;
    }

    let activationData = crypto.decrypt(
        req.url.replace("/views/activate?=", ""),
        1234567890
      ),
      isSuccess = true;

    if (crypto.isJSONStringValid(activationData)) {
      activationData = JSON.parse(activationData); //convert to JSON object
      switch (activationData.registerType) {
        case "individual":
          //con.query("SELECT * FROM ungroupedUsers_P WHERE email = ?", [activationData.email],function (err, result) {
          superagent
            .post(
              phpPostURLQ +
                "SELECT * FROM ungroupedUsers_P WHERE email = " +
                "'" +
                activationData.email +
                "'"
            )
            .end(function(err, result) {
              if (err) throw err;
              result = JSON.parse(result.text);
              if (result.length) {
                //con.query("INSERT INTO ungroupedUsers (fullName,email,password,partitionKey) VALUES ?",
                // [[[result[0].fullName,result[0].email,result[0].password,Date.now()]]],function (err, result) {
                let query =
                  "INSERT INTO ungroupedUsers (fullName,email,password,partitionKey) VALUES ('" +
                  result[0].fullName +
                  "','" +
                  result[0].email +
                  "','" +
                  result[0].password +
                  "','" +
                  Date.now() +
                  "')";
                superagent.post(phpPostURLQ + query).end(function(err, result) {
                  if (err) throw err;
                  //successfully activate an ungrouped user
                  console.log("add ungroupedUsers succ");
                });
                //con.query("DELETE FROM ungroupedUsers_P WHERE email = ?",[result[0].email],function (err, result) {
                superagent
                  .post(
                    phpPostURLQ +
                      "DELETE FROM ungroupedUsers_P WHERE email = '" +
                      result[0].email +
                      "'"
                  )
                  .end(function(err, result) {
                    if (err) throw err;
                    //successfully activate an ungrouped user
                    console.log("delete ungroupedUsers_P succ");
                    onActivationSuccess(true);
                  });
              } else {
                onActivationSuccess(false);
              }
            });
          break;

        case "newCompany":
        case "existingCompany":
          //con.query("SELECT * FROM groupedUsers_P WHERE email = ?", [activationData.email],function (err, result) {
          superagent
            .post(
              phpPostURLQ +
                "SELECT * FROM groupedUsers_P WHERE email = '" +
                activationData.email +
                "'"
            )
            .end(function(err, result) {
              result = JSON.parse(result.text);
              if (result.length) {
                result[0].isLeader = parseInt(result[0].isLeader);
                if (result[0].isLeader) {
                  //con.query("INSERT INTO companies (companyName,passcode,partitionKey) VALUES ?",
                  //[[[result[0].companyName,result[0].passcode,Date.now()]]],function (err, result) {
                  superagent
                    .post(
                      phpPostURLQ +
                        "INSERT INTO companies (companyName,passcode,partitionKey) VALUES ('" +
                        result[0].companyName +
                        "','" +
                        result[0].passcode +
                        "','" +
                        Date.now() +
                        "')"
                    )
                    .end(function(err, result) {
                      if (err) throw err;
                      //successfully activate a company
                      console.log("activated new comp");
                    });
                }
                //con.query("INSERT INTO groupedUsers (fullName,email,password,companyName,isLeader) VALUES ?",
                //[[[result[0].fullName,result[0].email,result[0].password,result[0].companyName,true]]],function (err, result) {
                superagent
                  .post(
                    phpPostURLQ +
                      "INSERT INTO groupedUsers (fullName,email,password,companyName,isLeader) VALUES " +
                      "('" +
                      result[0].fullName +
                      "','" +
                      result[0].email +
                      "','" +
                      result[0].password +
                      "','" +
                      result[0].companyName +
                      "'," +
                      result[0].isLeader +
                      ")"
                  )
                  .end(function(err, result) {
                    if (err) throw err;
                    //successfully activate an ungrouped user
                    console.log("add groupedUsers succ");
                  });
                //con.query("DELETE FROM groupedUsers_P WHERE email = ?",[result[0].email],function (err, result) {
                superagent
                  .post(
                    phpPostURLQ +
                      "DELETE FROM groupedUsers_P WHERE email = " +
                      "'" +
                      result[0].email +
                      "'"
                  )
                  .end(function(err, result) {
                    if (err) throw err;
                    //successfully activate an ungrouped user
                    console.log("delete groupedUsers_P succ");
                    onActivationSuccess(true);
                  });
              } else {
                onActivationSuccess(false);
              }
            });
          break;
      }
    } else {
      onActivationSuccess(false);
    }
    function onActivationSuccess(boolean) {
      if (boolean) {
        fs.readFile("views/successActivation.html", function(err, fileData) {
          res.writeHead(200);
          res.end(fileData); //redirect to succ site url
        });
      } else {
        fs.readFile("views/failActivation.html", function(err, fileData) {
          res.writeHead(200);
          res.end(fileData); //redirect to failure site url
        });
      }
    }
  } //default URL
  else
    fs.readFile("views/index.html", function(err, fileData) {
      res.writeHead(200);
      res.end(fileData);
    });
});
let io = require("socket.io")(app);
app.listen(3000);

let socketIOUserCount = 0;
io.on("connection", function(socket) {
  socketIOUserCount++;

  if (!con) {
    setTimeout(function() {
      if (!con) mySQLConnect();
    }, 1000);
  }

  socket.on("serverStatus", function(data) {
    if (true) socket.emit("serverStatus", { status: "ready", reason: "" });
    else socket.emit("serverStatus", { status: "pending", reason: "" });
  });

  //console.log('connected '+socket.id, socketIOUserCount);
  socket.on("disconnect", function() {
    socketIOUserCount--;
  });

  socket.on("login", function(data) {
    //data->{email, password}
    if (typeof data === "string") data = JSON.parse(data);

    console.log(data);
    //return;
    let sql =
      "SELECT * FROM groupedUsers WHERE email = '" +
      data.email +
      "' AND password = '" +
      data.password +
      "';SELECT * FROM ungroupedUsers WHERE email = '" +
      data.email +
      "' AND password = '" +
      data.password +
      "';SELECT * FROM groupedUsers_P WHERE email = '" +
      data.email +
      "' AND password = '" +
      data.password +
      "';SELECT * FROM ungroupedUsers_P WHERE email = '" +
      data.email +
      "' AND password = '" +
      data.password +
      "'";
    //con.query(sql, [data.email,data.password,data.email,data.password,data.email,data.password,data.email,data.password], function(error, results, fields) {
    //console.log(sql);
    superagent
      .post(phpPostURLQ + sql + phpPostURLM)
      .end(function(err, results) {
        if (err) {
          throw err;
        }

        results = JSON.parse(results.text);
        console.log(results);
        switch (1) {
          case results[0].length: //groupedUsers
            let getPartitionKey =
              "SELECT * FROM companies WHERE companyName = '" +
              results[0][0].companyName +
              "'";
            //con.query(getPartitionYey, [results[0][0].companyName], function(error, result) {
            superagent
              .post(phpPostURLQ + getPartitionKey)
              .end(function(err, result) {
                result = JSON.parse(result.text);
                socket.emit("loginStatus", {
                  status: "true",
                  partitionKey: result[0].partitionKey,
                  fullName: results[0][0].fullName,
                  companyName: results[0][0].companyName
                });
                console.log(result[0].partitionKey);
              });
            break;
          case results[1].length: //ungroupedUsers
            socket.emit("loginStatus", {
              status: "true",
              partitionKey: results[1][0].partitionKey,
              fullName: results[1][0].fullName,
              companyName: ""
            });
            console.log(results[1][0].partitionKey);
            break;
          case results[2].length: //groupedUsers_P
          case results[3].length: //ungroupedUsers_P
            socket.emit("loginStatus", {
              status: "You have not verified your account yet",
              partitionKey: "",
              fullName: "",
              companyName: ""
            });
            break;
          default:
            socket.emit("loginStatus", {
              status: "The credentials entered are incorrect",
              partitionKey: "",
              fullName: "",
              companyName: ""
            });
            break;
        }
      });
  });

  //on registration success, send {fullName, email,registerType (newCompany/existingCompany/individual), url, companyName, passcode} is sent to the Azure Logic App
  socket.on("register", function(data) {
    if (typeof data === "string") data = JSON.parse(data);
    //data -{fullName, email, password, registerType, companyName, passcode}
    let sql =
      "SELECT * FROM groupedUsers WHERE email = '" +
      data.email +
      "' ;SELECT * FROM ungroupedUsers WHERE email = '" +
      data.email +
      "' ;SELECT * FROM groupedUsers_P WHERE email = '" +
      data.email +
      "' ;SELECT * FROM ungroupedUsers_P WHERE email = '" +
      data.email +
      "'";
    //con.query(sql, [data.email,data.email,data.email,data.email], function(error, results) {
    superagent
      .post(phpPostURLQ + sql + phpPostURLM)
      .end(function(err, results) {
        results = JSON.parse(results.text);
        if (
          results[0].length ||
          results[1].length ||
          results[2].length ||
          results[3].length
        ) {
          socket.emit("registerStatus", {
            status: "This email is already taken. Please try another"
          });
        } else {
          switch (data.registerType) {
            case "individual":
              let activationKey = Date.now(),
                qwe =
                  "INSERT INTO ungroupedUsers_P (fullName,email,password,activationKey) VALUES ('" +
                  data.fullName +
                  "','" +
                  data.email +
                  "','" +
                  data.password +
                  "','" +
                  activationKey +
                  "')";
              //con.query(qwe, [[[data.fullName,data.email,data.password,activationKey]]],function (err, result) {
              console.log(qwe);
              superagent.post(phpPostURLQ + qwe).end(function(err, result) {
                if (err) throw err;
                console.log(
                  "Number of records inserted: " + result.affectedRows
                );
                //to Logic App
                let toLogicApp = {
                  fullName: data.fullName,
                  email: data.email,
                  registerType: "individual",
                  url: "",
                  companyName: "",
                  passcode: ""
                };
                toLogicApp.url =
                  "https://azure-test1.glitch.me/views/activate?=" +
                  crypto.encrypt(JSON.stringify(toLogicApp), 1234567890);
                socket.emit("registerStatus", {
                  status: "individual",
                  toLogicApp: toLogicApp
                }); //successfully registered an ungrouped user
                console.log(toLogicApp.url);
                xmlPost(toLogicApp);
                //rmb to make post http to logic app ,sending toLogicApp JSON
              });
              break;
            default:
              if (!data.passcode || data.passcode === "") {
                //check for new/existing company
                let checkIfCompanyExisting =
                  "SELECT * FROM companies WHERE companyName ='" +
                  data.companyName +
                  "'";
                checkIfCompanyExisting +=
                  ";SELECT * FROM groupedUsers_P WHERE companyName ='" +
                  data.companyName +
                  "'";
                //con.query(checkIfCompanyExisting,function(error, companyExistingResults) {
                console.log(checkIfCompanyExisting);
                superagent
                  .post(phpPostURLQ + checkIfCompanyExisting + phpPostURLM)
                  .end(function(err, companyExistingResults) {
                    companyExistingResults = JSON.parse(
                      companyExistingResults.text
                    );
                    companyExistingResults[0].length ||
                    companyExistingResults[1].length
                      ? socket.emit("registerStatus", {
                          status: "existingCompany"
                        })
                      : socket.emit("registerStatus", { status: "newCompany" });
                  });
              } else {
                let getCompanyDetail =
                  "SELECT * FROM companies WHERE companyName = '" +
                  data.companyName +
                  "'";
                getCompanyDetail +=
                  ";SELECT * FROM groupedUsers_P WHERE companyName = '" +
                  data.companyName +
                  "' AND isLeader is TRUE";
                //con.query(getCompanyDetail, function(error, getCompanyDetailResult) {
                superagent
                  .post(phpPostURLQ + getCompanyDetail + phpPostURLM)
                  .end(function(err, getCompanyDetailResult) {
                    getCompanyDetailResult = JSON.parse(
                      getCompanyDetailResult.text
                    );
                    //console.log(getCompanyDetailResult);
                    if (getCompanyDetailResult[1].length) {
                      socket.emit("registerStatus", {
                        status: "Company account not yet activated"
                      });
                    } else if (getCompanyDetailResult[0].length) {
                      getCompanyDetailResult[0][0].passcode === data.passcode
                        ? registerNewGroupedUser()
                        : socket.emit("registerStatus", {
                            status: "Passcode is incorrect"
                          });
                      function registerNewGroupedUser() {
                        let qwe =
                          "INSERT INTO groupedUsers_P (fullName,email,password,companyName, isLeader,activationKey,passcode) VALUES ('" +
                          data.fullName +
                          "','" +
                          data.email +
                          "','" +
                          data.password +
                          "','" +
                          data.companyName +
                          "'," +
                          0 +
                          ",'" +
                          Date.now() +
                          "','" +
                          data.passcode +
                          "')";
                        //con.query(qwe, [[[data.fullName,data.email,data.password,data.companyName,false,Date.now(),data.passcode]]],function (err, result) {

                        superagent
                          .post(phpPostURLQ + qwe)
                          .end(function(err, result) {
                            if (err) throw err;
                            console.log("Number of records inserted: ");
                            //to Logic App
                            let toLogicApp = {
                              fullName: data.fullName,
                              email: data.email,
                              registerType: "existingCompany",
                              url: "",
                              companyName: data.companyName,
                              passcode: data.passcode
                            };
                            toLogicApp.url =
                              "https://azure-test1.glitch.me/views/activate?=" +
                              crypto.encrypt(
                                JSON.stringify(toLogicApp),
                                1234567890
                              );
                            socket.emit("registerStatus", {
                              status: "pass",
                              toLogicApp: toLogicApp
                            }); //successfully joined an existing company
                            console.log(toLogicApp.url);
                            xmlPost(toLogicApp);
                          });
                      }
                    } else {
                      let qwe =
                        "INSERT INTO groupedUsers_P (fullName,email,password,companyName, isLeader,activationKey,passcode) VALUES ('" +
                        data.fullName +
                        "','" +
                        data.email +
                        "','" +
                        data.password +
                        "','" +
                        data.companyName +
                        "'," +
                        1 +
                        ",'" +
                        Date.now() +
                        "','" +
                        data.passcode +
                        "')";
                      //con.query(qwe, [[[data.fullName,data.email,data.password,data.companyName,true,Date.now(),data.passcode]]],function (err, result) {
                      //console.log(qwe);
                      superagent
                        .post(phpPostURLQ + qwe)
                        .end(function(err, result) {
                          if (err) throw err;
                          console.log("Number of records inserted: ");
                          let toLogicApp = {
                            fullName: data.fullName,
                            email: data.email,
                            registerType: "newCompany",
                            url: "",
                            companyName: data.companyName,
                            passcode: data.passcode
                          };
                          toLogicApp.url =
                            "https://azure-test1.glitch.me/views/activate?=" +
                            crypto.encrypt(
                              JSON.stringify(toLogicApp),
                              1234567890
                            );
                          socket.emit("registerStatus", {
                            status: "pass",
                            toLogicApp: toLogicApp
                          }); //successfully created a new company
                          console.log(toLogicApp.url);
                          xmlPost(toLogicApp);
                        });
                    }
                  });
              }
              break;
          }
        }
      });
  });
});

let mysql = require("mysql"),
  connectionString = {
    host: "mysql-server-dragonfly.mysql.database.azure.com",
    user: "dragonfly@mysql-server-dragonfly",
    password: "innovate-malaysia-DF",
    port: 3306,
    ssl: true,
    database: "users",
    multipleStatements: true
  },
  con;

/*
  //ungroupedUsers -> {email,password,fullName,partitionKey, id} 
  //ungroupedUsers_P -> {email,password,fullName, id, activationKey}
  //groupedUsers -> {email,password,fullName, companyName, isLeader, id}
  //groupedUsers_P -> {email,password,fullName, companyName, isLeader, id, activationKey,passcode }
  //companies; -> {companyName, partitionKey, id, passcode}
*/

function mySQLConnect() {
  if (!socketIOUserCount) return;
  return;
  con = mysql.createConnection(connectionString);
  con.dataInitialised = false;
  con.connect(function(err) {
    if (err) {
      setTimeout(mySQLConnect, 2000);
      console.log("attempt To Reconnect to MySQL DB");
    }
    console.log("Connected to MySQL DB : " + connectionString.database);
    con.query("Select * FROM groupedUsers", function(err, result) {
      console.log(result);
    });

    return;

    con.query("DELETE FROM ungroupedUsers_P", function(err, result) {
      console.log(result);
    });
    con.query("DELETE FROM ungroupedUsers", function(err, result) {
      console.log(result);
    });
    con.query("DELETE FROM groupedUsers_P", function(err, result) {
      console.log(result);
    });
    con.query("DELETE FROM groupedUsers", function(err, result) {
      console.log(result);
    });
    con.query("DELETE FROM companies", function(err, result) {
      console.log(result);
    });
    /* 
    var sql = "DELETE FROM companies";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
    var sql = "DELETE FROM groupedUsers_P";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
 var sql = "DELETE FROM groupedUsers";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
    var sql = "DELETE FROM ungroupedUsers_P";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
    var sql = "DELETE FROM ungroupedUsers";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
    
    return;*/

    /*
    
    var sql = "DROP TABLE groupedUsers_P";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    
    return;*/
    /*
    CREATE TABLE companies (id INT AUTO_INCREMENT PRIMARY KEY, companyName VARCHAR(255), passcode VARCHAR(255), partitionKey VARCHAR(255));
    CREATE TABLE ungroupedUsers (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), partitionKey VARCHAR(255));
    CREATE TABLE ungroupedUsers_P (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), activationKey VARCHAR(255));
    CREATE TABLE groupedUsers (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), companyName VARCHAR(255),isLeader BOOLEAN)
    CREATE TABLE groupedUsers_P (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), companyName VARCHAR(255),isLeader BOOLEAN, activationKey VARCHAR(255))
    */

    /*
    var sql = "CREATE TABLE companies (id INT AUTO_INCREMENT PRIMARY KEY, companyName VARCHAR(255), passcode VARCHAR(255), partitionKey VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    
    return;
    */

    return;

    var sql =
      "INSERT INTO groupedUsers_P (fullName, email,password,companyName,isLeader,activationKey, passcode) VALUES ('ny', 'ny@hotmail.com','chongpassword','ny Sdn Bhd',TRUE,'nyactivationkey','nypasscode')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    return;

    sql =
      "INSERT INTO ungroupedUsers (fullName, email,password,partitionKey) VALUES ('Tan Lee Soon', 'marcustansoon@hotmail.com','1997316tansoon','tanpartitionkey')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql =
      "INSERT INTO ungroupedUsers_P (fullName, email,password,activationKey) VALUES ('Pheng', 'pheng@hotmail.com','phengpassword','phengactivationkey')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    sql =
      "INSERT INTO groupedUsers (fullName, email,password,companyName,isLeader) VALUES ('Lee Tong', 'tong@hotmail.com','tongpassword','KTA Sarawak',true)";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql =
      "INSERT INTO groupedUsers_P (fullName, email,password,companyName,isLeader,activationKey) VALUES ('Kui', 'kui@hotmail.com','kuipassword','KTA Sarawak',false,'kuiactivationKey')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    return;

    //INSERT INTO ungroupedUsers (email) VALUES ?",[[["marcustansoon@hotmail.com"]]]
    let tableRetrievedCount = 0;
    con.query("show tables", function(err, result, field) {
      if (err) throw err;
      console.log(result);
    });
    return;

    //setInterval(repeatt,5000);
  });
  con.on("error", function onError(err) {
    console.log("db error", err);
    setTimeout(mySQLConnect, 1500);
    if (err.code == "PROTOCOL_CONNECTION_LOST") {
    } else {
    }
  });
}

//xmlPost()
//xmlPost({email:"marcustansoon@hotmail.com",fullName:"Marcus Tan",url:"https://www.facebook.com/tan.leesoon",registerType:"existingCompany"});
function xmlPost(obj) {
  //return;

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    //secure: true,
    auth: {
      user: "sarawakdragonfly@hotmail.com",
      pass: "12345678Abc"
    },
    port: 587,
    secureConnection: false,
    tls: { ciphers: "SSLv3" }
  });

  var mailOptions = {
    from: "sarawakdragonfly@hotmail.com",
    to: obj.email,
    subject: "[DragonFly IoT] Email Verification",
    html:
      '<style> .button { background-color:rgba(100,154,200,1); border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; } </style><body style=""> Greetings, <br> <br> Thank you for signing up on <b><span style="font-size:16px;">DragonFly IoT Monitoring</span></b> platform. Below shows your registered account information :- <br> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center"><h4 style="border-style:;color:#444a54;width:80%;overflow: auto;"> <br>Name : ' +
      obj.fullName +
      " <br> Email : " +
      obj.email +
      ' </h4></td> </tr> </table> </div>  <p style="position:relative;border-style:;text-align:center;"> <img src="https://i.imgur.com/4G7xflK.jpg" style="position:relative;width:12%;border: 1.5px solid black; border-radius: 25%;min-width:100px;max-width:110px;" draggable="false" style="-moz-user-select: none;"> </p> <h1 style="text-align:center;margin:25px;color:rgba(86,109,179,1);">Email Verification</h1> <h4 style="text-align:center;color:rgba(37,112,150,1);">Your account activation is almost complete. To verify the ownership of this registered email, please click the following button or this <a href="' +
      obj.url +
      '">URL</a>:</h4></h4> <p style="text-align:center;"> <br> <a href="' +
      obj.url +
      '"><button class="button">VERIFY NOW</button><a> </p> <br> </div> <div style="clear:none;opacity:0;">.</div> <br><br> Regards,<br><br> DragonFly Team </body>'
  }; //for individual acc registration

  if (obj.registerType == "newCompany")
    mailOptions.html =
      '<style> .button { background-color:rgba(100,154,200,1); border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; } </style><body style=""> Greetings, <br> <br> Thank you for signing up on <b><span style="font-size:18px;">DragonFly IoT Monitoring</span></b> platform. Below shows your registered account information :- <br> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center"> <h4 style="border-style:;color:#444a54;width:80%;overflow: auto;"> Company Name : ' +
      obj.companyName +
      " <br> Passcode : " +
      obj.passcode +
      " <br> Name : " +
      obj.fullName +
      " <br> Email : " +
      obj.email +
      ' </h4></td> </tr> </table> <div style="clear:none;opacity:0;">.</div> <p style="position:relative;border-style:;text-align:center;"> <img src="https://i.imgur.com/4G7xflK.jpg" style="position:relative;width:12%;border: 1.5px solid black; border-radius: 25%;min-width:100px;max-width:110px;" draggable="false" style="-moz-user-select: none;"> </p> <h1 style="text-align:center;margin:25px;color:rgba(86,109,179,1);">Email Verification</h1> <h4 style="text-align:center;color:rgba(37,112,150,1);">Your account activation is almost complete. To verify the ownership of this registered email, please click the following button or this <a href="' +
      obj.url +
      '">URL</a>:</h4> <p style="text-align:center;"> <br> <a href="' +
      obj.url +
      '"><button class="button">VERIFY NOW</button><a> </p> <br> <div style="clear:none;opacity:0;">.</div> <br> <br><br> Regards,<br><br> DragonFly Team </body>';
  else if (obj.registerType == "existingCompany")
    mailOptions.html =
      '<style> .button { background-color:rgba(100,154,200,1); border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; } </style><body style=""> Greetings, <br> <br> Thank you for signing up on <b><span style="font-size:18px;">DragonFly IoT Monitoring</span></b> platform. Below shows your registered account information :- <br> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center"><h4 style="border-style:;color:#444a54;width:80%;overflow: auto;"> Company Name : ' +
      obj.companyName +
      " <br> Name: " +
      obj.fullName +
      " <br> Email : " +
      obj.email +
      ' </h4></td> </tr> </table> </div> <p style="position:relative;border-style:;text-align:center;"> <img src="https://i.imgur.com/4G7xflK.jpg" style="position:relative;width:12%;border: 1.5px solid black; border-radius: 25%;min-width:100px;max-width:110px;" draggable="false" style="-moz-user-select: none;"> </p> <h1 style="text-align:center;margin:25px;color:rgba(86,109,179,1);">Email Verification</h1> <h4 style="text-align:center;color:rgba(37,112,150,1);">Your account activation is almost complete. To verify the ownership of this registered email, please click the following button or this <a href="' +
      obj.url +
      '">URL</a>:</h4></h4> <p style="text-align:center;"> <br> <a href="' +
      obj.url +
      '"><button class="button">VERIFY NOW</button><a> </p> <br>  </div> <div style="clear:none;opacity:0;">.</div> <br> <br><br> Regards,<br><br> DragonFly Team </body>';

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
