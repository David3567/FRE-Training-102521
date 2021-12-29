const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "this is a key");
    req.userData = {
      email: decodedToken.email,
      userId: decodedToken.userId,
      userRole: decodedToken.userRole,
    };
    next();
  } catch (error) {
    res.status(401).json({
      message: "You are not authenticated!",
    });
  }
};
