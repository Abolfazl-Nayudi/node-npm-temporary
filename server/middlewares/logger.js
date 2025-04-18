const logger = (req, res, next) => {
  console.log(`The API has a new ${req.method} request for URL: ${req.url}`);

  next();

  // if (req.url === "/users") {
  //   res.status(404).json({ message: "not found" });
  // } else {
  //   next();
  // }
};

module.exports = logger;
