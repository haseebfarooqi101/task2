import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy credentials stored in array
  const validUsers = [
    { email: "user1@email.com", password: "pass123" },
    { email: "user2@email.com", password: "hello123" },
    { email: "admin@email.com", password: "admin123" },
    { email: "guest@email.com", password: "guest123" },
    { email: "test@email.com", password: "test123" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const match = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      setError("");
      onLogin(); // passes login state up
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
