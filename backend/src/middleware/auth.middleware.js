const alldayreelsModel = require("../models/Alldayreels.model");
const jwt = require("jsonwebtoken");

async function authalldayreelsMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const alldareels = await alldayreelsModel.findById(decoded.id);

    req.alldareels = alldareels;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = {
  authalldayreelsMiddleware,
};
