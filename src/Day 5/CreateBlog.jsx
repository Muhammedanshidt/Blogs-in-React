import React, { useContext } from "react";
import "./Style.css";
import { ContextData } from "./Context";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [blog, setBlog, blogs, ] = useContext(ContextData);
  const Navigate = useNavigate();

  const Create = () => {
    blogs.push(blog);
    Navigate("/blogs");
  };

  return (
    <div className="text-center">
      <form>
        <input
          className="InputField mb-1"
          type="text"
          placeholder="Titel"
          required
          onChange={(event) => {
            setBlog({
              ...blog,
              title: event.target.value,
              id: Date.now(),
            });
          }}
        />
        <br />
        <textarea
          name="Content"
          cols="23"
          rows="10"
          required
          onChange={(event) => {
            setBlog({
              ...blog,
              content: event.target.value,
            });
          }}
        ></textarea>
        <br />
        <button type="button" onClick={Create}>
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
