const express = require("express");
const authController = require("../controllers/auth.controler");

const router = express.Router();

// user auth APIs
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

// alldayreels auth APIs

router.post("/alldayreels/register", authController.registerAlldayreels);
router.post("/alldayreels/login", authController.loginAlldayreels);
router.get("/alldayreels/logout", authController.logoutAlldayreels);

module.exports = router;
