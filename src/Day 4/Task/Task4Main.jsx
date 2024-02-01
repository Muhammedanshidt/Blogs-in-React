import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import HomePage from "./HomePage";

function Task4Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default Task4Main;
