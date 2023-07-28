const express = require("express");
const db = require("./config/connection");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);



db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API now listening on port ${PORT}!`);
  });
});
