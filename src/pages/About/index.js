import React from "react";

const About = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page-container">
      <h2>Welcome to the About Page 🎉</h2>
      <p>Hello, {user?.email || "Guest"}!</p>
      <p>You’re allowed to view this page based on your permissions.</p>
    </div>
  );
};

export default About;
