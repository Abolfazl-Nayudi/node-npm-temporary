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

// in express version 4 (old version) => throws an error in express version 5
// app.get("*", (req, res) => {
//   res.send("invalid request");
// });

// in express version 5 (new version) => use any name you want after * like /*jasem
app.get("/*allReq", (req, res) => {
  res.send("it is a response for * route");
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
