import React from "react";
import useAuth from "../Hooks";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
const Navigate=useNavigate()

  const handleLogin = () => {
    login();
    Navigate("/profile")
  };
  return (
    <div>
      <h2>This is Login page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
