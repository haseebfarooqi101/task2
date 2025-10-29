import React from "react";

export const About = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page-container">
      <h2>Welcome to the About Page 🎉</h2>
      <p>Hello, {user?.email || "User"}!</p>
      <p>You’re allowed to view this page based on your permissions.</p>
    </div>
  );
};

//export default About;
