const express = require("express");

const app = express();

const port = 7030;
app.listen(port, () => console.log(`server is running on port ${port}`));
