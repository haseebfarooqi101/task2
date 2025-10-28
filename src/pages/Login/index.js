import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/Auth/AuthContext"; // ✅ import  Auth
import "../../Stylings/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleLogin } = useAuth(); // ✅ get login handler from Auth
  const navigate = useNavigate();

  // ✅ Example users
  const validUsers = [
    { email: "admin@email.com", password: "admin123" },
    { email: "user@email.com", password: "user123" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const match = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      handleLogin(match); // ✅ update global Auth + localStorage
      setError("");
      navigate("/"); // ✅ redirect to home after login
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome 👋</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
