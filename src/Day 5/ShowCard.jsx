import React, { useContext } from "react";
import { ContextData } from "./Context";
import { useNavigate, useParams } from "react-router-dom";
import "./Style.css";

function ShowCard() {
  const Navigate = useNavigate();
  let { ID } = useParams();
  const [, , blogs] = useContext(ContextData);
  const Result = blogs.filter((element) => {
    return element.id == ID;
  });
  console.log(Result);
  return (
    <div className="Display">
      {
        <div className="Display1 rounded">
          <h1 className="Heading text-center">{Result[0].title}</h1>
          <p className="text-center Content">{Result[0].content}</p>
          <button onClick={() => Navigate("/blogs")}>
            More Posts
          </button>
        </div>
      }
    </div>
  );
}

export default ShowCard;
