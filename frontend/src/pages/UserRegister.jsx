import React from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target["user-name"].value;
    const lastName = e.target["user-last-name"].value;
    const email = e.target["user-email"].value;
    const phone = e.target["user-phone"].value;
    const password = e.target["user-password"].value;
    // const agree = event.target["user-agree"].checked;
    console.log(firstName, lastName, email, phone, password);

    // Example POST request (uncomment and modify URL as needed)
    const response = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        firstName,
        lastName,
        email,
        phone,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    navigate("/");
  };

  return (
    <div className="auth-card" role="main" aria-labelledby="register-heading">
      <div className="header">
        <h2 id="register-heading">Create account</h2>
        <p>Register as a user</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="form"
        aria-label="User register form"
      >
        <div className="two-col">
          <div className="field">
            <label className="label" htmlFor="user-name">
              First Name
            </label>
            <input
              id="user-name"
              className="input"
              type="text"
              placeholder="Your first name"
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="user-last-name">
              Last Name
            </label>
            <input
              id="user-last-name"
              className="input"
              type="text"
              placeholder="Your Last name"
              autoComplete="name"
            />
          </div>
        </div>

        <div className="two-col">
          <div className="field">
            <label className="label" htmlFor="user-email">
              Email
            </label>
            <input
              id="user-email"
              className="input"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="user-phone">
              Phone
            </label>
            <input
              id="user-phone"
              className="input"
              type="tel"
              placeholder="+1 (555) 555-5555"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="user-password">
            Password
          </label>
          <input
            id="user-password"
            className="input"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </div>

        <div className="field checkbox-row">
          <label className="label" htmlFor="user-agree">
            &nbsp;
          </label>
          <div>
            <label style={{ fontSize: "13px", color: "var(--muted)" }}>
              <input id="user-agree" type="checkbox" /> I agree to the terms and
              privacy policy
            </label>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="button">
            Create account
          </button>
          <a className="link" href="/user/login">
            Have an account?
          </a>
        </div>

        <div className="footer small">
          By continuing you agree to terms (UI only).
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
