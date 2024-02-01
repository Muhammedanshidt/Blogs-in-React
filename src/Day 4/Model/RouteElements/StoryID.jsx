import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StoryID() {
  const { ID } = useParams();
  const [story, setStory] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  },[]);
  return (
    <div className="bg-info m-2 p-1 rounded text-white">
      <h2 className="text-center mb-1">{story?.title}</h2>
      <p style={{margin:0}}>{story?.body}</p>
    </div>
  );
}

export default StoryID;
