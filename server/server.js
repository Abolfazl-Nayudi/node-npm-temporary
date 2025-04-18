require("dotenv").config();

const express = require("express");
const cors = require("cors");

const logger = require("./middlewares/logger");
const blogRouter = require("./routes/blogs.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
// app.use(postAccess);

// app.use(
//   // cors(),
//   logger,
//   postAccess,
//   express.json(),
//   express.urlencoded({ extended: true })
// );

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/blogs", blogRouter);
// app.use('/products', productRouter)

app.use((req, res) => {
  res.send("not found");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// CRUD -> create, read, update, delete
