import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../Auth/Auth/AuthContext";

// ✅ Import your private pages
import Navbar from "../../components/Navbar/index";
import About from "../../pages/About/index";
import About2 from "../../pages/About2/index";
import About3 from "../../pages/About3/index";
import Page1 from "../../pages/Page1/index";
import Page2 from "../../pages/Page2/index";
import Home from "../../pages/Home";

const PrivateRoutes = () => {
  const { isLoggedIn, handleLogout, user } = useAuth();

  if (!isLoggedIn) return null; // prevent flashing

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
