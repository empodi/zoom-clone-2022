import http from "http";
import express from "express";
import WebSocket from "ws";

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`🎸 Listening on http://localhost:${PORT}`);
};

// app.listen(PORT, handleListening);

const server = http.createServer(app); // this is a http server
const wss = new WebSocket.Server({ server });
// now wss and server are listening to save PORT

server.listen(PORT, handleListening);
