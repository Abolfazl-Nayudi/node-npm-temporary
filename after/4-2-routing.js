const express = require("express");

const app = express();

app.post("/cats", (req, res) => {
  res.send("meaw for post method 😺");
});

app.get("/cats", (req, res) => {
  res.send("meaw");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

app.post("/dogs", (req, res) => {
  res.send("woof for post method 🐈");
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
