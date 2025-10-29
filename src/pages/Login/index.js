// src/pages/Login/index.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Utils/Helper/index";
import "../../Stylings/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Allowed user credentials
  const users = [
    { email: "admin@email.com", password: "admin123", role: "admin" },
    { email: "user@email.com", password: "user123", role: "user" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // ✅ Store auth token in cookies via helpers
      loginUser(`${matchedUser.role}-token`);
      navigate("/about"); // Redirect after login
    } else {
      setError("Invalid email or password. Try again!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-msg">{error}</p>}

        <button type="submit">Login</button>
      </form>

      
    </div>
  );
};

//export default Login;
