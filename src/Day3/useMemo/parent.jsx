import React, {  createContext, useMemo, useState } from "react";
import Child from "./child";
function Parent() {
  const [data, setData] = useState(0);

  const demo = useMemo(() => {
    return {
      key: "ID",
      Data:data
    };
  },[data]);

  console.log("It is parent component:");
  return (
    <div>
      value: {data} <br />
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        {"  "}
        +{"  "}
      </button>
      <Child data={demo} />
    </div>
  );
}

export default Parent;
