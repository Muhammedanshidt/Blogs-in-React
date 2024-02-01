import React, { useContext } from 'react'
import { UserData } from './useContext'

function Component3() {
    const [state]=useContext(UserData)
  return (
    <div>
        <h1>3rd Component</h1>
        <h1>{state}</h1>
    </div>
  )
}

export default Component3