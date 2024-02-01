import React, { createContext, useCallback, useState } from "react";
import Child from "./Child";

export const Context = createContext();

function Parent() {
  const [state, setState] = useState(0);

  const Func = useCallback(() => {
    return setState(state+1);  
  });
  
  console.log("Prent component:");

  return (
    <div>
      Value : {state} <br />
      <Context.Provider value={[state]}>
        <Child Data={state} Update={Func} />
      </Context.Provider>
    </div>
  );
}

export default Parent;
