import React from "react";
import Login from "./Login";

const About2 = ({ isLoggedIn }) => (
  <div className="page-container">
    <h2>You are on the About2 Page</h2>
    {isLoggedIn ? (
      <p>Exclusive content for logged-in users only!</p>
    ) : (
      <>
        <p>Please login to view the content below:</p>
        <Login onLogin={() => window.location.reload()} />
      </>
    )}
  </div>
);

export default About2;
