import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {Home, Navbar} from './canvas'

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-secondary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App