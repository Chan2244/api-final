const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No token provided." });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const veriryStaff = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "Access Denide: Unauthorized user." });
  }
  const { userType } = req.user;
  if (userType !== "Staff") {
    return res
      .status(403)
      .json({ message: "Access denide: Only staff can preform this action." });
  }
  next();
};

module.exports = { auth, verifyStaff };
