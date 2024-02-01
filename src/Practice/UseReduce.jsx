import React, { useMemo, useReducer } from 'react'
import Reducer from './Reduce'

function UseReduce() {
    const [state,dispatch]=useReducer(Reducer,{value:0})
    console.log(state);
  return (
    <div>
        <button onClick={()=>dispatch({value:state.value+1})}>increment</button>
    </div>
  )
}

export default UseReduce


