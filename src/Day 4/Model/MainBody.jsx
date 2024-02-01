import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./RouteElements/Home";
import About from "./RouteElements/About";
import Stories from "./RouteElements/stories";
import StoriesList from "./RouteElements/StoriesList";
import StoryID from "./RouteElements/StoryID";
import Profile from "./RouteElements/Profile";
import Protected from "./RouteElements/protected";
import Login from "./RouteElements/Login";
import NotFound from "./RouteElements/NotFound";

function MainBody() {
  return (
    <div className="bg-slate-100 min-h-screen max-w-screen-lg mx-auto flex flex-col Main-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="stories" element={<Stories />}>
          <Route index element={<StoriesList />} />{" "}
          {/*This "Index used to show element when the parent element load" */}
          <Route path=":ID" element={<StoryID />} />{" "}
          {/*This is the example for Dynamic Routing */}
        </Route>
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainBody;
