import React, { useState, useEffect } from "react";
import { Card, CardText } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StoriesList() {
  const [stories, setstories] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
      .then((res) => res.json())
      .then((data) => setstories(data));
  }, []);
  return (
    <div className="Cards">
      {stories &&
        stories.map((story) => {
          return (
            <Card className="Card">
              <CardText>{story.title}</CardText>
              <button
                onClick={() => Navigate(`${story.id}`)}
                className="bg-secondary text-white px-1 py-1 rounded ReadMoreButton"
              >
                Read more
              </button>
            </Card>
          );
        })}
    </div>
  );
}

export default StoriesList;
