const IP = new (require("./ip"))();

const server = require("http")
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(IP.get(req));
  })
  .listen(3000);

const io = require("socket.io")(server);
const MAP = new Map();

io.on("connection", client => {
  // Upon connection, echo back the client id
  client.emit("id", client.id);

  // Get client public ip
  client._ip = client.handshake.headers["x-forwarded-for"].split(",")[0];

  // Inform other clients (of the same public ip/room) about the new client joining
  io.to(client._ip).emit("newClient", client.id);

  // Get ids of clients in the same room and send to joining client
  io.in(client._ip).clients((err, clientsInRoom) => {
    if (err) throw new Error(err);
    // 'clientsInRoom' is an array of client ids in the room
    clientsInRoom.forEach(perClientInARoom =>
      // send client ids to joining client
      client.emit("newClient", perClientInARoom)
    );
  });

  // Invite client into its public IP room
  client.join(client._ip);
  
  

  // data -> {'key' : '', 'value' : ''}
  client.on("setKey", function(data) {
    MAP.set(data.key, data.value);
  });

  client.on("getValueByKey", function(key) {
    client.emit("getValueByKey", MAP.get(key));
  });

  client.on("getId", function(key) {
    client.emit("getId", client.id);
  });

  // data -> {'id' : '', 'message' : ''}
  client.on("sendTo", function(data) {
    io.to(data.id).emit("message", data.message);
  });

  // data -> {'roomName' : '', 'message' : ''}
  client.on("sendToRoom", function(data) {
    io.to(data.roomName).emit("message", data.message);
  });

  // Join by room name
  client.on("joinRoom", function(roomName) {
    client.join(roomName);
  });

  // Leave by room name
  client.on("leaveRoom", function(roomName) {
    client.leave(roomName);
  });

  // data -> {'from' : '...', 'to' : '...', 'offer': '...'}
  client.on("sendOffer", function(data) {
    io.to(data.to).emit("offer", data);
  });

  // data -> {'from' : '...', 'to' : '...', 'answer': '...'}
  client.on("sendAnswer", function(data) {
    io.to(data.to).emit("answer", data);
  });

  // data -> {'from' : '...', 'to' : '...', 'iceCandidate': '...'}
  client.on("sendICE", function(data) {
    io.to(data.to).emit("ice", data);
  });

  // data -> {'from' : '...', 'to' : '...', 'something': '...'}
  client.on("message", function(data) {
    io.to(data.to).emit("message", data);
  });
});
