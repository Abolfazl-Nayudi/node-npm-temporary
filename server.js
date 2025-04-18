const express = require("express");
const logger = require("./middlewares/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/users", (req, res) => {
  res.send("home page");
});

app.listen(4000, () => {
  console.log(`server is running on port 4000`);
});
