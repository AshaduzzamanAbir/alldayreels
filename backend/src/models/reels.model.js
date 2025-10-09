const mongoose = require("mongoose");

const reelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reelsPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "alldayreels",
  },
});

const reelsModel = mongoose.model("reels", reelsSchema);

module.exports = reelsModel;
