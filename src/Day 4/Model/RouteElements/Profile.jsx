import React from "react";
import useAuth from "../Hooks";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { logout } = useAuth();
  const Navigate = useNavigate();
  return (
    <div>
      Profile
      <button
        className="bg-danger text-white rounded"
        onClick={() => {
          logout().then(Navigate("/"));
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
