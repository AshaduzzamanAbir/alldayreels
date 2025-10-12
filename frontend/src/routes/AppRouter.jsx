import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import PartnerLogin from "../pages/PartnerLogin";
import PartnerRegister from "../pages/PartnerRegister";
import Home from "../pages/general/Home";
import CreateReels from "../pages/reels-partner/create-reels";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/register" element={<UserRegister />} /> */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/reels-partner/login" element={<PartnerLogin />} />
        <Route path="/reels-partner/register" element={<PartnerRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-reels" element={<CreateReels />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
