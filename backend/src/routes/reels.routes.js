const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const reelsController = require("../controllers/reels.controller");
const router = express.Router();

// POSR/api/reels
router.post(
  "/",
  authMiddleware.authalldayreelsMiddleware,
  reelsController.reelsCreate
);

module.exports = router;
