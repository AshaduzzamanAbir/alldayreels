const userModel = require("../models/user.model");
const alldayreelsModel = require("../models/Alldayreels.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { all } = require("../app");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Already Have Account with this Email",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User Register Succesfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Email and password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid Email and password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out!",
  });
}

async function registerAlldayreels(req, res) {
  const { fullName, email, password, phone, website, category } = req.body;

  const isAlreadyAccountExists = await alldayreelsModel.findOne({
    email,
  });

  if (isAlreadyAccountExists) {
    return res.status(400).json({
      message: "Already Have Account",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const alldayreels = await alldayreelsModel.create({
    fullName,
    email,
    password: hashedPassword,
    phone,
    website,
    category,
  });

  const token = jwt.sign(
    {
      id: alldayreels._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "alldareels registerd successfully",
    alldayreels: {
      _id: alldayreels._id,
      email: alldayreels.email,
      fullName: alldayreels.fullName,
      phone: alldayreels.phone,
      address: alldayreels.address,
      category: alldayreels.category,
    },
  });
}

async function loginAlldayreels(req, res) {
  const { email, password } = req.body;

  const alldayreels = await alldayreelsModel.findOne({
    email,
  });

  if (!alldayreels) {
    return res.status(400).json({
      message: "invalid email and password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, alldayreels.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "invalid email and password",
    });
  }

  const token = jwt.sign(
    {
      id: alldayreels._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "alldayreels logged in successfully",
    alldayreels: {
      _id: alldayreels._id,
      email: alldayreels.email,
      name: alldayreels.name,
    },
  });
}

function logoutAlldayreels(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "alldayreels logged out successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerAlldayreels,
  loginAlldayreels,
  logoutAlldayreels,
};
