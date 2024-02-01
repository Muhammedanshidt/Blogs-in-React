import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [Count, setCount] = useState(0);
  const [Name, setName] = useState(true);
  console.log("Parent rendered");
  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>count - {Count}</button>
      <button onClick={() => setName(!Name)}>NameChange</button>
      <Child name={Name} />
    </div>
  );
}

export default Parent;
