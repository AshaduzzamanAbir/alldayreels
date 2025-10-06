// create server
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const alldayreelsRoutes = require("./routes/reels.routes");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!!!!!!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/reels", alldayreelsRoutes);

module.exports = app;
