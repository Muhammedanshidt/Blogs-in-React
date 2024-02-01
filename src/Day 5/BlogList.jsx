import React from "react";
import { useContext } from "react";
import { ContextData } from "./Context";
import { Card, CardText } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const [blog, setBlog, blogs, setBlogs] = useContext(ContextData);
  const Navigate = useNavigate();

  return (
    <div className="text-center ">
      <div className="Cards">
        {blogs &&
          blogs.map((item) => {
            return (
              <Card className="Card">
                <CardText>{item.title}</CardText>
                <button className="Button mx-auto mb-1" onClick={()=>Navigate(`${item.id}`)}>ReadMore</button>
              </Card>
            );
          })}
      </div>
      <button type="button" className="rounded" onClick={()=>Navigate("/")}>New Post</button>
    </div>
  );
}

export default BlogList;
