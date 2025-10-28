// src/hoc/withRole.js
import React from "react";
import { Navigate } from "react-router-dom";

const withRole = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
      return (
        <div className="page-container">
          <h2>🚫 Access Denied</h2>
          <p>Your role (“{user.role}”) cannot access this page.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRole;
