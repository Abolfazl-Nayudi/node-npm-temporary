const postAccess = (req, res, next) => {
  if (req.method === "POST") {
    res.status(403).json({ msg: "access denied" });
    return;
  }

  next();
};

module.exports = postAccess;
