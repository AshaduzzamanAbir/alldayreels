const reelsModel = require("../models/Alldayreels.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function reelsCreate(req, res) {
  console.log(req.alldareels);
  console.log(req.body);
  console.log(req.file);

  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuidv4()
  );
  console.log(fileUploadResult);

  res.send("reels item created");
}

module.exports = {
  reelsCreate,
};
