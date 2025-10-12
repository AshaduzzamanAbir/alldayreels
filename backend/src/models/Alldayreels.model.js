const mongoose = require("mongoose");

const alldayreelsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  website: {
    type: String,
  },
  category: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const alldayreels = mongoose.model("alldayreels", alldayreelsSchema);

module.exports = alldayreels;
