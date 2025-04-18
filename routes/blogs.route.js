const express = require("express");

const router = express.Router();

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

router.get("/", (req, res) => {
  res.status(200).json(blogsData);
});

module.exports = router;
