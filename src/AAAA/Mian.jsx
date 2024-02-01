import React from 'react'
import First from './first'
import Second from './second'
import { Route, Routes } from 'react-router-dom'
import Not from './Not'

function Mian() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<First />} />
            <Route path='/second' element={<Second />} />
            <Route path='*' element={<Not/>} />
        </Routes>
    </div>
  )
}

export default Mian