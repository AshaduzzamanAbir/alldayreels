import React from "react";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PartnerRegister = () => {
  const navigate = useNavigate();

  const registerHandleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    const fullname = e.target["partner-name"].value;
    const email = e.target["partner-email"].value;
    const phone = e.target["partner-phone"].value;
    const website = e.target["partner-website"].value;
    const category = e.target["partner-category"].value;
    const password = e.target["partner-password"].value;
    console.log(fullname, email, phone, website, category, password);

    const response = await axios.post(
      "http://localhost:3000/api/auth/reels-partner/register",
      {
        fullname,
        email,
        phone,
        website,
        category,
        password,
      },
      { withCredentials: true }
    );

    navigate("/create-reels");
    console.log(response.data);
  };

  return (
    <div
      className="auth-card"
      role="main"
      aria-labelledby="partner-register-heading"
    >
      <div className="header">
        <h2 id="partner-register-heading">Partner Register</h2>
        <p>Create partner account</p>
      </div>

      <form
        onSubmit={registerHandleSubmit}
        className="form"
        aria-label="Partner register form"
      >
        <div className="field">
          <label className="label" htmlFor="partner-name">
            Full Name
          </label>
          <input
            id="partner-name"
            className="input"
            type="text"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className="two-col">
          <div className="field">
            <label className="label" htmlFor="partner-email">
              Email
            </label>
            <input
              id="partner-email"
              className="input"
              type="email"
              placeholder="partner@example.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="partner-phone">
              Phone
            </label>
            <input
              id="partner-phone"
              className="input"
              type="tel"
              placeholder="+1 (555) 555-5555"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="partner-website">
            Website
          </label>
          <input
            id="partner-website"
            className="input"
            type="url"
            placeholder="https://your-company.com"
            autoComplete="url"
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="partner-category">
            Category
          </label>
          <select
            id="partner-category"
            className="input"
            defaultValue="marketing"
          >
            <option value="marketing">Marketing</option>
            <option value="production">Production</option>
            <option value="agency">Agency</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="field">
          <label className="label" htmlFor="partner-password">
            Password
          </label>
          <input
            id="partner-password"
            className="input"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </div>

        <div className="field checkbox-row">
          <label className="label" htmlFor="partner-agree">
            &nbsp;
          </label>
          <div>
            <label style={{ fontSize: "13px", color: "var(--muted)" }}>
              <input id="partner-agree" type="checkbox" /> I confirm I represent
              the organization
            </label>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="button">
            Create account
          </button>
          <a className="link" href="/reels-partner/login">
            Have an account?
          </a>
        </div>

        <div className="footer small">
          UI only — add validation and onSubmit where needed.
        </div>
      </form>
    </div>
  );
};

export default PartnerRegister;
