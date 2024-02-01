import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const Navigate=useNavigate()
  return (
    <div>
        <form className='text-center'>
            <input className='m-2' type="text" placeholder='First Name'/><br />
            <input className='mb-2' type="text" placeholder='Last Name'/><br />
            <input className='mb-2' type="email" placeholder='Email'/><br />
            <input className='mb-2' type="password" placeholder='Password'/><br />
            <button onClick={()=>Navigate("/login")}>Submit</button>
        </form>
    </div>
  )
}

export default Registration