import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {Home, Navbar, WhyPage, Products, Contacts} from './canvas'

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary '>
        <div className='grid h-screen overflow-x-hidden '>
          <Navbar />
          <Home />
          <WhyPage />
          <Products />
          <Contacts />
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App