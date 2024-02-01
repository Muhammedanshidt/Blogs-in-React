import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate=useNavigate()
  return (
    <div className="text-center">
      <input className="m-2" type="text" placeholder="User Name" />
      <br />
      <input className="mb-2" type="password" placeholder="Password" />
      <br />
      <button onClick={()=>Navigate("/home")}>Login</button>
    </div>
  );
}

export default Login;
