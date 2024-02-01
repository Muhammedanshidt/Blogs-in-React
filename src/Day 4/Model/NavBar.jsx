import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-light p-6 nav-bar">
      <h3 className="mb-0 ms-1">
        {<Link className="Links text-black" to="/">Name</Link>}
      </h3>
      <nav>
        <NavLink className={({isActive})=>isActive ? "text-info Links":"text-black Links"} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive ? "text-info Links":"text-black Links"} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive ? "text-info Links":"text-black Links"} to="/stories">Stories</NavLink>
        <NavLink className={({isActive})=>isActive ? "text-info Links":"text-black Links"} to="/profile">Profile</NavLink>
        {/* Here we use NavLink instead of Link because NavLink has "isActive" like predefine methods */}
      </nav>
    </div>
  );
}

export default NavBar;
