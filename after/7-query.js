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

const usersData = [
  {
    id: 1,
    name: "jasem",
  },
  {
    id: 2,
    title: "hasem",
  },
  {
    id: 3,
    title: "salem",
  },
  {
    id: 4,
    title: "na salem",
  },
  {
    id: 5,
    title: "abod",
  },
];

app.get("/blogs", (req, res) => {
  console.log(req.query);
  if (req.query.limit) {
    const limit = Number(req.query.limit);

    const slicedBlogs = blogsData.slice(0, limit);

    res.send(slicedBlogs);
  } else {
    res.send(blogsData);
  }
});

app.get("/users", (req, res) => {
  const { role } = req.query;

  if (role === "ADMIN") {
    res.status(200).json(usersData);
  } else {
    res.status(403).json({ message: "access denied" });
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  res.send("one user");
});

// app.get("/blogs/:id", (req, res) => {
//   const blogsId = Number(req.params.id);

//   const blogData = blogsData.find((item) => item.id === blogsId);

//   if (blogData) {
//     res.status(200).json(blogData);
//   } else {
//     // res.send("blog not found");
//     res.status(404).json({ message: "blog not found" });
//   }
// });

const port = 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));
