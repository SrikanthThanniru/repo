import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
