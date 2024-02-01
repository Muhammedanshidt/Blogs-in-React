import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";
import { ContextData } from "./Context";
import ShowCard from "./ShowCard";

function Day5() {
  const [blog, setBlog] = useState({
    id: 0,
    title: "",
    content: "",
  });
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <ContextData.Provider value={[blog, setBlog, blogs, setBlogs]}>
        <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:ID" element={<ShowCard />} />
        </Routes>
      </ContextData.Provider>
    </div>
  );
}

export default Day5;
