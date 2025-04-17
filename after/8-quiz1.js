const express = require("express");

const app = express();

app.get("/chocolate", (req, res) => {
  const { amount } = req.query;

  res.send(`you need ${amount} chocolate${Number(amount) > 1 ? "s" : ""}`);
});

app.listen("3500", () => console.log("server is running"));
