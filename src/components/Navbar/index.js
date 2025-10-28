// src/Components/Navbar/index.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../Stylings/Navbar.css";
import { useAuth } from "../../Auth/Auth/AuthContext"; // ✅ use Auth global instead of props

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useAuth(); // 👈 automatically gets from Auth
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>My React App</span>
      </div>

      {/* Center: Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/about">About</Link>
        <Link to="/about2">About 2</Link>
        {isLoggedIn && <Link to="/about3">About 3</Link>}
      </div>

      {/* Right: Logout */}
      <div className="navbar-right">
        {isLoggedIn && (
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
