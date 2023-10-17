import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {Home, Navbar, WhyPage} from './canvas'

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <Home />
          <WhyPage />
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App