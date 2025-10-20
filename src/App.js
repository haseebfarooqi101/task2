import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import About from "./pages/About";
import About2 from "./pages/About2";
import About3 from "./pages/About3";  // ✅ new
import Login from "./pages/Login";    // ✅ new
import "./Style.css";
                     // ✅ new

const Navbar = ({ isLoggedIn, handleLogout }) => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page1">Page1</Link></li>
      <li><Link to="/page2">Page2</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/about2">About2</Link></li>
      {isLoggedIn && <li><Link to="/about3">About3</Link></li>}
      {isLoggedIn ? (
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </ul>
  </nav>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />

        {/* About: Accessible but hides content when not logged in */}
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />

        {/* About2: shows login if not logged in */}
        <Route path="/about2" element={<About2 isLoggedIn={isLoggedIn} />} />

        {/* About3: fully protected */}
        <Route
          path="/about3"
          element={isLoggedIn ? <About3 /> : <Navigate to="/login" />}
        />

        {/* Login route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
