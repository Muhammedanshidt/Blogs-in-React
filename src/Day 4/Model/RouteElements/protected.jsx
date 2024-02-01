import React from "react";
import useAuth from "../Hooks";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  //Here "children" is the profile page
  const { authed } = useAuth();
  return (
    <div className="bg-white m-1 p-2 rounded">
      {authed ? children : <Navigate to={"/login"} />}
    </div>
  );
}

export default Protected;
