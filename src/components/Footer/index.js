import React from "react";
import "../../Stylings/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
