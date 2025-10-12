const alldayreelsModel = require("../models/Alldayreels.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authalldayreelsMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // load the alldayreels document and attach it using the consistent name
    const alldayreels = await alldayreelsModel.findById(decoded.id);

    req.alldayreels = alldayreels;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

async function authUserMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = {
  authalldayreelsMiddleware,
  authUserMiddleware,
};
