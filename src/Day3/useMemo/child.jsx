import React, { memo } from "react";

function Child(params) {
  console.log("Child component...!");
  console.log(params);
  return <div>child</div>;
}

export default memo(Child);
