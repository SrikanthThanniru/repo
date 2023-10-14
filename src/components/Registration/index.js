import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
