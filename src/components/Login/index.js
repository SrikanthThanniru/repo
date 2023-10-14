import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <div>
        <p>If not registered you can click here to proceed</p>
        <Link to="/registration">
          <p>Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
