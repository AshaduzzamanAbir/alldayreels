import React, { useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// ...existing code...
const PartnerLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // more robust form reading
    const formData = new FormData(e.currentTarget);
    const email = formData.get("partner-email");
    const password = formData.get("partner-password");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/alldayreels/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("login response", response.status, response.data);
      if (response?.status === 200) {
        navigate("/create-reels");
      } else {
        setErrorMsg("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      console.error("Response data:", error?.response?.data);
      setErrorMsg(error?.response?.data?.message || "Network or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-card"
      role="main"
      aria-labelledby="partner-login-heading"
    >
      <div className="header">
        <h2 id="partner-login-heading">Partner Login</h2>
        <p>Sign in for reels-partner</p>
      </div>

      <form
        onSubmit={loginHandleSubmit}
        className="form"
        aria-label="Partner login form"
      >
        <div className="field">
          <label className="label" htmlFor="partner-email">
            Email
          </label>
          <input
            id="partner-email"
            name="partner-email"
            className="input"
            type="email"
            placeholder="partner@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="partner-password">
            Password
          </label>
          <input
            id="partner-password"
            name="partner-password"
            className="input"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </div>

        {errorMsg && (
          <div className="footer small" style={{ color: "var(--accent)" }}>
            {errorMsg}
          </div>
        )}

        <div className="actions">
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <Link className="link" to="/reels-partner/register">
            Register
          </Link>
        </div>

        <div className="footer small">Partner access only — UI only.</div>
      </form>
    </div>
  );
};

export default PartnerLogin;
