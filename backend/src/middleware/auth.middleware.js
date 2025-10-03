const alldayreelsModel = require("../models/Alldayreels.model");
const jwt = require("jsonwebtoken");

async function authalldayreelsMiddleware(req, res, next) {
  const token = req.cookies.token;
}
