const mongoose = require("mongoose");

const alldayreelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const alldayreels = mongoose.model("alldayreels", alldayreelsSchema);

module.exports = alldayreels;
