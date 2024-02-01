import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <div>
        {
            <h1>First page</h1>
        }
        <Link to={"/second"}>secondpage</Link>
    </div>
  )
}

export default First