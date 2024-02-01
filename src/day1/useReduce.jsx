import React, { useReducer } from "react";
import Reducer from "./usageReducer";

const Reduce = () => {
  const [state, dispatch] = useReducer(Reducer, {
    //state is like variable and dispatch is used to update state,but unlike useState we cannot update state directly,when the dispatch is calling the "Reducer" function will execute..
    data: 0,
    color: "",
  });
  return (
    <div>
      <div
        style={{
          height: 50,
          width: 100,
          marginLeft: 75,
          fontSize: 35,
          fontWeight: 500,
          backgroundColor: state.color,
        }}
      >
        {state.data}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "data-update",
              data: 1,
            });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "data-update",
              data: -1,
            });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "color-update",
              data: "green",
            });
          }}
        >
          green
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "color-update",
              data: "blue",
            });
          }}
        >
          blue
        </button>
      </div>
    </div>
  );
};

export default Reduce;