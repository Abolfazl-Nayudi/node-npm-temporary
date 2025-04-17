const express = require("express");

const app = express();

app.get("/cat", (req, res) => {
  res.send("meaw");
});

app.get("/dog", (req, res) => {
  res.send("woof");
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
