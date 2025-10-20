import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    //<nav className="navbar">
  {/* Logo Section */}
  <div className="navbar">
  <div className="navbar-logo">
    <img src={logo} alt="Logo" />
    <span>My React App</span>
  </div>

  {/* Navigation Links */}
  <div className="navbar-links">
    <Link to="/">Home</Link>
    <Link to="/page1">Page 1</Link>
    <Link to="/page2">Page 2</Link>
    <Link to="/about">About</Link>
    <Link to="/about2">About 2</Link>
    {isLoggedIn && <Link to="/about3">About 3</Link>}
  </div>

  {/* Logout Button (Right side) */}
  <div className="navbar-right">
    {isLoggedIn && (
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    )}
  </div>
  </div>
  
  
.//</nav>
  );
};

export default Navbar;
