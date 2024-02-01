import React, { useState } from "react";
import Hook from "./Hook";

function Main() {
  const [state, setState] = useState(0);
  Hook(state);
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        count - {state}
      </button>
    </div>
  );
}

export default Main;
