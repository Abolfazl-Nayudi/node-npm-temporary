const express = require("express");

const app = express();

const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is blog 2",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "This is blog 3",
  },
  {
    id: 4,
    title: "Blog 4",
    description: "This is blog 4",
  },
  {
    id: 5,
    title: "Blog 5",
    description: "This is blog 5",
  },
];

app.get("/wiki/:subject", (req, res) => {
  console.log(req.params);
  res.send("params is useful");
});

app.get("/wiki/:subject/:postId", (req, res) => {
  console.log(req.params);

  res
    .status(200)
    .send(
      `welcome to ${req.params.subject} page, you need to see post with Id ${req.params.postId}`
    );

  res.send("wiki post");
});

app.get("/users", (req, res) => {
  res.send("all users");
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  res.send("one user");
});

app.get("/blogs", (req, res) => {
  res.send(blogsData);
});

app.get("/blogs/:id", (req, res) => {
  const blogsId = Number(req.params.id);

  const blogData = blogsData.find((item) => item.id === blogsId);

  if (blogData) {
    res.status(200).json(blogData);
  } else {
    // res.send("blog not found");
    res.status(404).json({ message: "blog not found" });
  }
});

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
