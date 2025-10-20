import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = ({ isLoggedIn }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            navigate("/login");
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="page-container">
      {isLoggedIn ? (
        <h2>Welcome to the About Page – you are logged in!</h2>
      ) : (
        <div>
          <h2>Access Blocked ❌</h2>
          <p>Only logged-in users can access this content.</p>
          <p>Redirecting to Login in {countdown} seconds...</p>
        </div>
      )}
    </div>
  );
};

export default About;
