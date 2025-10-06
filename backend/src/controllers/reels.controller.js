const reelsModel = require("../models/Alldayreels.model");

async function reelsCreate(req, res) {
  console.log(req.alldareels);

  res.send("reels item created");
}

module.exports = {
  reelsCreate,
};
