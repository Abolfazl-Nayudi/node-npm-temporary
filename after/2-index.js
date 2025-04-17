const express = require("express");

const app = express();

app.get("/", () => {
  console.log("hello world");
});

app.get("/member", () => {
  console.log("member");
  console.log("hello members");
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
