import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/login" element={<h1>Login</h1>} />
        <Route path="/user/register" element={<h1>Register</h1>} />
        <Route path="/reels-partner/login" element={<h1>Login</h1>} />
        <Route path="/reels-partner/register" element={<h1>Profile</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
