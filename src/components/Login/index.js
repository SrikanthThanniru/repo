import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (
      userDetails &&
      username === userDetails.username &&
      password === userDetails.password
    ) {
      // You can add session management here if needed.
      alert("Login successful");
      const isLoggedIn = "true";
      localStorage.setItem("isLoggedIn", isLoggedIn);
      navigate("/home");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  // Use the useEffect hook to trigger the login logic when the component mounts

  return (
    <div className="app-container">
      <div className="container">
        <h2 className="heading">Login</h2>
        <div className="form">
          <input
            type="text"
            name="username"
            placeholder="Enter UserName"
            value={username}
            className="input-element"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input-element"
            value={password}
            onChange={handleInputChange}
          />
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>

        <div className="link-container">
          <p className="create">Create New Account || </p>
          <Link to="/registration">
            <p className="register">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
