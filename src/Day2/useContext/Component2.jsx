import React, { useContext } from 'react'
import Component3 from './Component3'
import { UserData } from './useContext'

function Component2() {
  const [state,setState]=useContext(UserData)
  return (
    <div>
        <h1>2nd Component</h1>
        <h2>the state is {state}</h2>
        <button onClick={()=>setState(state+1)}>increase</button>
        <Component3 />
    </div>
  )
}

export default Component2