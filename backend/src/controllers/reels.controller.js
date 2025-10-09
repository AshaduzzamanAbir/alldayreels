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

  const reelsItem = await reelsModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    reelsPartner: req.alldayreels._id,
  });

  res.status(201).json({
    message: "Reels created successfully",
    reels: reelsItem,
  });
}

async function reelsGetAll(req, res) {
  const reelsItem = await reelsModel.find({});

  res.status(200).json({
    message: "Reels fetched successfully",
    reels: reelsItem,
  });
}

module.exports = {
  reelsCreate,
  reelsGetAll,
};
