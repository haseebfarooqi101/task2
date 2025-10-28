import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>🚫 Access Denied</h2>
      <p>You don’t have permission to view this page.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default AccessDenied;
