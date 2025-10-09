const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const reelsController = require("../controllers/reels.controller");
const router = express.Router();
const multer = require("multer");
const upload = multer(
  { storage: multer.memoryStorage() } // Store files in memory as Buffer objects
);

// POSR/api/reels
router.post(
  "/",
  authMiddleware.authalldayreelsMiddleware,
  upload.single("video"),
  reelsController.reelsCreate
);

module.exports = router;
