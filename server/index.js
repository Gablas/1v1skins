const app = require("express")();
const http = require("http").createServer(app);
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const users = {};

const games = {};

app.get("/getid", (req, res) => {
  const id = uuidv4();
  const name = req.query.name;
  users[id] = { name, gameId: undefined };
  res.send({ id, name });
});

app.get("/getname", (req, res) => {
  res.send({ id: req.query.id, name: users[req.query.id].name });
});

app.post("/startgame", (req, res) => {
  console.log(req.body);
  res.send("Testing");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
