import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./index.css";

function Registration() {
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

  const handleRegistration = () => {
    const userDetails = { username, password };

    // Store the user data in local storage.
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // You can add additional validation and error handling here.
    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="app-container">
      <div className="container">
        <h2 className="heading">Registration</h2>
        <div className="form">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            className="input-element"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder=" Enter Password"
            value={password}
            className="input-element"
            onChange={handleInputChange}
          />
          <button className="button" onClick={handleRegistration}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
