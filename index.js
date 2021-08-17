/* //Servidor
const express = require("express");

const app = express();
 */
//Servidor de sockets
const Server = require("./models/server");

require("dotenv").config();
const server = new Server();

server.execute();

//rendereizar html

/* app.use(express.static(__dirname + "/public"));

//Configuracion del socket server
const io = require("socket.io")(server);

//io es todo
io.on("connection", (socket) => {
  socket.on("mensaje-to-server", (data) => {
    console.log(data);

    io.emit("mensaje-from-server", data);
  });
});

server.listen(8080, () => {
  console.log("server corriendo en puerto 8080");
});
 */

//NamesSpace canales salas
