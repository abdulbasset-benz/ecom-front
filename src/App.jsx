import { useState } from "react";
import api from "./api/api";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
