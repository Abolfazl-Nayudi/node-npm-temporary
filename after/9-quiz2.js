const express = require("express");
const server = express();

server.get("/multiply", (req, res) => {
  console.log(req.query);
  const { value1, value2 } = req.query;

  res.send(
    `Your numbers are ${value1} and ${value2} and the multiply of these numbers is equal to ${Number(
      value1 * value2
    )}`
  );
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
