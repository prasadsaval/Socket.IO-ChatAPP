const express = require("express");

const app = express();
const http = require("http").createServer(app);
// http.createServer(function (req, res) {
//   res.end("hello");
// });
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(express.static(__dirname + "/public"));

//! socket purpose
const io = require("socket.io")(http); //? we have to pass server here bcz socket.io will understand in which server we have to work

io.on("connection", socket => {
  console.log(socket.id);
  console.log("connected...");
});

http.listen(PORT, () => {
  console.log(`listening the port on ${PORT}`);
});
