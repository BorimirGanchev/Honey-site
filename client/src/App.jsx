import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {Home, Navbar, WhyPage, Products} from './canvas'

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary '>
        <div className='grid h-screen overflow-x-hidden '>
          <Navbar />
          <Home />
          <WhyPage />
          <Products />
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App