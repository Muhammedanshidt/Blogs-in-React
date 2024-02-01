import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const UserData = createContext();

function Context() {
  const [state, setState] = useState(0);
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <UserData.Provider value={[state, setState, arr]}>
        <Component1 />
        {/*here Component1 considered as provider and the "value" can accessed by Component1 and all its childrens as needed with out props drilling*/}
      </UserData.Provider>
    </div>
  );
}

export default Context;
