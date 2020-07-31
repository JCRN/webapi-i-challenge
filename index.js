const express = require("express");
const database = require("./data/db");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/hobbits", (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee",
    },
    {
      id: 2,
      name: "Frodo Baggins",
    },
  ];

  res.status(200).json(hobbits);
});

server.get("/users", (req, res) => {
  database
    .find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).send(err));
});

server.listen(8000, () => console.log("API Running on port 8000"));
