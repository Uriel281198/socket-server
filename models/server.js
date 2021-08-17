//Servidor
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Http Server
    this.server = http.createServer(this.app);

    //Configuracion de sockets
    this.io = socketio(this.server, {
      /* configuracions */
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configureSockets() {
    new Sockets(this.io);
  }

  execute() {
    //inicializar middele
    this.middlewares();

    //Inidializar Sockets
    this.configureSockets();

    //inicializar server
    this.server.listen(this.port, () => {
      console.log("server running");
    });
  }
}

module.exports = Server;
