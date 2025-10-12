import React from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const email = e.target["user-email"].value;
    const password = e.target["user-password"].value;
    console.log(email, password);

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    navigate("/");
    console.log(response.data);
  };

  return (
    <div className="auth-card" role="main" aria-labelledby="login-heading">
      <div className="header">
        <h2 id="login-heading">User Login</h2>
        <p>Sign in to your account</p>
      </div>

      <form
        onSubmit={loginHandleSubmit}
        className="form"
        aria-label="User login form"
      >
        <div className="field">
          <label className="label" htmlFor="user-email">
            Email
          </label>
          <input
            id="user-email"
            className="input"
            type="email"
            name="user-email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="user-password">
            Password
          </label>
          <input
            id="user-password"
            name="user-password"
            className="input"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="actions">
          <button type="submit" className="button">
            Sign in
          </button>
          <a className="link" href="/user/register">
            Create account
          </a>
        </div>

        <div className="footer small">
          Forgot password? Click recover on the real app.
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
