const reelsModel = require("../models/Alldayreels.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function reelsCreate(req, res, next) {
  try {
    // debug logs (keep for now while developing)
    console.log("auth attached:", req.alldayreels);
    console.log("body:", req.body);
    console.log(
      "file:",
      req.file && { originalname: req.file.originalname, size: req.file.size }
    );

    // basic validations
    if (!req.alldayreels) {
      return res
        .status(401)
        .json({ message: "Not authenticated as alldayreels" });
    }

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!req.body || !req.body.name) {
      return res.status(400).json({ message: "Missing required field: name" });
    }

    const fileUploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuidv4()
    );
    console.log("upload result:", fileUploadResult);

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
  } catch (err) {
    // forward to centralized error handler
    next(err);
  }
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
