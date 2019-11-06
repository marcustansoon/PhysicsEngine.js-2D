const server = require("http").createServer();
const io = require("socket.io")(server);
server.listen(3000);

let deviceIDBindings = new Map(),
  mapBindings = new Map();

io.on("connection", function(socket) {
  console.log("connected " + socket.id);

  socket.on("serverStatus", function() {
    //check if server is ready
    if (isReady) socket.emit("serverStatus", { status: "ready" });
    else socket.emit("serverStatus", { status: "pending" });
  });

  //link the data communication between google map (iframe) and 'Result page' from end-user phone
  socket.on("mapBindings", function(data) {
    //data-> { loadTime}
    //sent from end user map or end user bg
    console.log(data);

    let isBinded = false;
    mapBindings.forEach(function(value, key) {
      if (Math.abs(key - data.loadTime) <= 1000000) {
        //if (key === data.loadTime) {
        socket.emit("mapBindings", { socketID: value });
        io.to(value).emit("mapBindings", { socketID: socket.id });
        isBinded = true;
        mapBindings.delete(key);
        console.log("binded");
      }
    });
    if (!isBinded) {
      mapBindings.set(data.loadTime, socket.id); //key value
      console.log("added");
    }
  });
  //allow socket client-to-client communication
  socket.on("emitTo", function(data) {
    //data->{socketID,title, data}
    io.to(data.socketID).emit(data.title, data.data);
  });

  /*
   
  //enable recognition and binding of drone devices with end-user phones
  socket.on("bindDeviceID",function(data){//sent from user phone - data-{deviceID, partitionKey}
     if(deviceIDsBindings.has(data.deviceID)){
       socket.emit("bindDeviceID",{status:"fail, Device ID already exists"});//send to user phone
     }else{
       deviceIDsBindings.set(data.deviceID,[data.partitionKey,socket.id]);//socket.id refers to end-user phone
     }
  });
  socket.on("getPartitionKey",function(data){//sent from drone phone - data-{deviceID}
     if(deviceIDsBindings.has(data.deviceID)){
       socket.emit("getPartitionKey",{partitionKey:deviceIDsBindings.get(data.deviceID)[0]});//send to drone phone
       io.to(deviceIDsBindings.get(data.deviceID)[1]).emit('bindDeviceID', {status:"success",socketID:socket.id});//send to user phone, indicate a successful binding
     }else{
        
     }
  });
  */

  socket.on("registerDeviceID", function(data) {
    //data-{deviceID, passcode} sent from microcontroller (device refers to microcontroller)
    console.log(data);
    if (deviceIDBindings.has(data.deviceID)) {
      socket.emit("registerDeviceIDStatus", {
        status: "Device ID already existing, please try another"
      });
    } else {
      socket.emit("registerDeviceIDStatus", { status: "success" });
      deviceIDBindings.set(data.deviceID, {
        passcode: data.passcode,
        deviceSocketID: socket.id
      });
      //socket.isDevice=true;
      socket.deviceID = data.deviceID;
      console.log("new device ID");
    }
  });
  socket.on("checkDevice", function(data) {
    //data-{deviceID, passcode, partitionKey}  sent from end user phone
    if (
      deviceIDBindings.has(data.deviceID) &&
      deviceIDBindings.get(data.deviceID).passcode === data.passcode
    ) {
      socket.emit("checkDeviceStatus", { status: "success" });
    } else {
      socket.emit("checkDeviceStatus", { status: "Invalid Device ID" });
      console.log("a");
    }
  });
  socket.on("connectToDevice", function(data) {
    //data-{deviceID, passcode, partitionKey}  sent from end user phone
    if (
      deviceIDBindings.has(data.deviceID) &&
      deviceIDBindings.get(data.deviceID).passcode === data.passcode
    ) {
      let temp = deviceIDBindings.get(data.deviceID);
      if (temp.endUserSocketID) {
        io.to(temp.endUserSocketID).emit("forceDisconnect", { oldUser: true }); //force old end user to disconnect
        io.to(temp.deviceSocketID).emit("forceDisconnect", { oldUser: true });
      }
      temp.endUserSocketID = socket.id; //set the new Socket ID from latest connected user
      deviceIDBindings.set(data.deviceID, temp);
      let WebRTCKey = (Math.random() * 10000) << 0;
      socket.emit("connectToDeviceStatus", {
        status: "success",
        WebRTCKey: WebRTCKey
      });
      io.to(temp.deviceSocketID).emit("setPartitionKey", {
        partitionKey: data.partitionKey,
        WebRTCKey: WebRTCKey
      }); //update the partitionKey in drone phone
      socket.deviceID = data.deviceID;
      console.log("partitionKey=" + data.partitionKey);
    } else {
      socket.emit("connectToDeviceStatus", {
        status: "Incorrect Device ID or passcode"
      });
    }
  });

  socket.on("initiateSensorData", function(data) {
    //data { deviceID:deviceID, partitionKey:partitionKey, measurementType:measurementType, date:Date.now(), data:[] } from drone phone
    socket.sensorData = data;
    socket.emit("initiateSensorData"); //feedback response to drone phone
    console.log("initiateSensorData");
  });
  socket.on("activateSensorData", function(data) {
    //{measurementType:air/water} sent from end user phone
    let temp = deviceIDBindings.get(socket.deviceID);
    io.to(temp.deviceSocketID).emit("activateSensorData", data); //direct to drone phone
    console.log("activateSensorData");
  });
  socket.on("deactivateSensorData", function(data) {
    //{measurementType:air/water} sent from end user phone
    let temp = deviceIDBindings.get(socket.deviceID);
    io.to(temp.deviceSocketID).emit("deactivateSensorData", data); //direct to drone phone
    console.log("deactivateSensorData");
  });
  socket.on("endSensorData", function() {
    // from drone phone
    if (socket.sensorData) {
      console.log("storing " + socket.sensorData);
      socket.sensorData.isStored = true;
      storeData(socket.sensorData).catch(err => {
        console.error(err);
      });
    }
  });

  socket.on("sensorData", function(data) {
    //real time view, sent from drone phone
    socket.sensorData.data.push(data.data);
    //console.log(data.data);
    //data.data.qwe="123213";
    //data.data.lat=" "+data.data.lat;
    //data.data.alt=" "+data.data.alt;
    console.log(data.data);
    io.to(deviceIDBindings.get(socket.deviceID).endUserSocketID).emit(
      "sensorData",
      data.data
    ); //send realtime sensor data to end user phone
    console.log("Received");
  });
  socket.on("getRecords", function(data) {
    //data->{partitionKey,measurementType:"air"}
    console.log("partitionKey=" + data.partitionKey);
    getDataByQuery(
      'SELECT * FROM c WHERE c.partitionKey = "' +
        data.partitionKey +
        '"' +
        " AND " +
        'c.measurementType = "' +
        data.measurementType +
        '"',
      callback
    ).catch(err => {
      console.error(err);
    });
    function callback(result) {
      socket.emit("getRecords", result);
    }
  });
  socket.on("getSocketID", function() {
    socket.emit("getSocketID", socket.id);
  });
  socket.on("updateData", function(data) {
    //console.log(data);
    replaceItem(data);
  });
  socket.on("disconnect", function() {
    if (socket.sensorData && !socket.sensorData.isStored) {
      //check if sensorData exists and not yet been stored, if so, then store it
      //disconnection found at drone phone
      console.log("disc n storing" + JSON.stringify(socket.sensorData));
      storeData(socket.sensorData).catch(err => {
        console.error(err);
      });
    }
    if (socket.deviceID && deviceIDBindings.has(socket.deviceID)) {
      let temp = deviceIDBindings.get(socket.deviceID);
      if (deviceIDBindings.get(socket.deviceID).endUserSocketID === socket.id) {
        console.log("disconnect from end user");
        delete temp.endUserSocketID;
        deviceIDBindings.set(socket.deviceID, temp);
        io.to(temp.deviceSocketID).emit("forceDisconnect"); //close of WebRTC
      } else if (
        deviceIDBindings.get(socket.deviceID).deviceSocketID === socket.id
      ) {
        io.to(temp.endUserSocketID).emit("forceDisconnect");
        deviceIDBindings.delete(socket.deviceID);
        console.log("removed " + socket.deviceID);
      }
    }

    return;
    if (!deviceIDBindings.has(socket.deviceID)) return;

    let temp = deviceIDBindings.get(socket.deviceID);
    if (socket.isDevice) {
      //check if disconnected client is microcontroller
    } else {
      //check if disconnected client is end user
      delete temp.endUserSocketID;
      deviceIDBindings.set(socket.deviceID, temp);
      io.to(temp.deviceSocketID).emit("forceDisconnect"); //disconnect end user from mircontroller
    }
  });

  //WebRTC
  socket.on("ice", function(data) {
    socket.broadcast.emit("ice", data);
  });
  socket.on("description", function(data) {
    socket.broadcast.emit("description", data);
  });
  socket.on("success", function(data) {
    socket.emit("success", data);
    socket.broadcast.emit("success", data);
  });
});

const cosmos = require("@azure/cosmos");
const CosmosClient = cosmos.CosmosClient;

const endpoint = "https://f0cef10b-0ee0-4-231-b9ee.documents.azure.com:443/"; // Add your endpoint
const masterKey =
  "PiQ8PuLSpXiSkM8jpPg1h2SRCRF5gOsa9ArKstS30Y0VidRj8E4ruHiGCgWi9W4gqylyMd9tKHlW4ZWzRyKPLQ=="; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, auth: { masterKey } }); //start connection

let databaseDefinition = { id: "sensorDatabase" },
  collectionDefinition = { id: "sensorDataCollection" },
  database,
  container,
  isReady = false;

retrieveDatabaseCollection();
async function retrieveDatabaseCollection() {
  try {
    let temp = await client.databases.createIfNotExists(databaseDefinition);
    database = temp.database;

    temp = await database.containers.createIfNotExists(collectionDefinition);
    container = temp.container;

    isReady = true; //set to true when connection made to azure cosmos is successful
    console.log("ready");

    return;
  } catch (e) {
    console.log("Error caught");
  }
}
async function getDataByQuery(text, callback) {
  try {
    let temp = await container.items.query(text).toArray();
    callback(temp.result);
    //console.log(temp.result[0]);
    //replaceItem({ deviceID: 1234, partitionKey: '1234', measurementType: 'air', date: 1572858798625, data: [ { lng: 1.532105, lat: 110.3571208, alt: 0, date: '17:13:23', NH3: 15, CO: 1, NO2: 2, CH4: 3 }, { lng: 1.531751, lat: 110.3574778, alt: 0, date: '17:13:29', NH3: 15, CO: 1, NO2: 2, CH4: 3 }, { lng: 1.531413, lat: 110.3571078, alt: 0, date: '17:13:34', NH3: 15, CO: 1, NO2: 2, CH4: 3 }, { lng: 1.530938, lat: 110.3568878, alt: 0, date: '17:13:39', NH3: 15, CO: 1, NO2: 2, CH4: 3 } ], lat: 1.532197, lng: 110.3568138, alt: 0, isStored: true,id:"f0a982dd-d581-dea6-c705-5da7af780c23"});
  } catch (e) {
    console.log("Error caught");
  }
}
async function replaceItem(itemBody) {
  try {
    console.log(itemBody);
    let temp = await container.item(itemBody.id).replace(itemBody);
  } catch (e) {
    console.log("Error caught" + JSON.stringify(e));
  }
}
async function storeData(item, callback) {
  //item-{...partitionKey...}
  try {
    let temp = await container.items.create(item);
    console.log(temp.body);
    //callback(temp.body);
  } catch (e) {
    console.log("Error caught");
  }
}

async function getDataById(text) {
  //not working
  return;
  //const { body } = await container.item(JSON.stringify({partitionKey:"abc-123-2018",id:"55726b17-471c-66c3-56b1-1958d058003e"})).read();
  //console.log( body);
}

async function helloCosmos() {
  return;
  /*
   
  let item={};
  item.date = Date.now();
   item.partitionKey= "abc-123-2018";
   const { body: doc } = await container.items.create(item);
  console.log(doc);
  */
  /*
  const { result: results } = await container.items
     .query("SELECT * FROM c WHERE c.completed= false")
     .toArray();
  console.log(results);
  
  
  
  const { body } = await container.item("8f806e26-20ca-6c75-0578-ed5372abbe86").read();
   console.log( body);
  */
}
