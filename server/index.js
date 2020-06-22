const app = require("express")();
const http = require("http").createServer(app);
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

app.use(cors());

app.get("/getid", (req, res) => {
  res.send({ id: uuidv4() });
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
