import React, { memo } from "react";

const Child = () => {
  console.log("Child component rendered");
  return <div>child two component</div>;
};
export default memo(Child); 