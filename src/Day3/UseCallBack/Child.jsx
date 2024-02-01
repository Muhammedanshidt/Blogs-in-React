import React from "react";

function Child(props) {
  const Func = props.Update;
  console.log("Child component:");
  return (
    <div>
      <button onClick={() => Func()}> + </button>
    </div>
  );
}

export default Child;
