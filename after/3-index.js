const express = require("express");

const app = express();

app.get("/member", (request, response) => {
  //   console.log(response);
  console.log("member");
  console.log("hello members");

  const data = `
  <h1>hello members</h1>
  <p>list of members</p>
  `;

  response.send(data);
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
