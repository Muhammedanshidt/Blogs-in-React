import React, { useContext } from 'react'
import Component2 from './Component2'
import { UserData } from './useContext'

function Component1() {
  const [,,arr]=useContext(UserData)
  return (
    <div>
        <h1>1st Component, Welcome {arr}</h1>
        <Component2 />
    </div>
  )
}

export default Component1