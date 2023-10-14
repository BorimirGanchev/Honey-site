import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { navLinks } from '../constants'
import { styles } from '../styles'
import  menu  from "../assets/menu.svg";
import  close  from "../assets/close.svg";
import  logo  from "../assets/logo.svg";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-secondary`} >
        <div className='w-full flex justify-between items-center max-w-7xl max-auto'>
            <Link 
                to = "/"
                className='flex items-center gap-2'
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}
            >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />    
            <p className='text-wite text-[18px] font-bold cursor-pointer flex'>Anna &nbsp; <span className='sm:block hidden'>| Honey provider</span></p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((Link)=>(
                    <li
                      key={Link.id}
                      className={`${
                        active === Link.title 
                        ? "text-tertiary" 
                        : "text-white"
                    } hover:text-tertiary text-[18px]
                      font-medium cursor-pointer`}
                      onClick={() => setActive(Link.title)}
                    >
                        <a href={`${Link.id}`}>{Link.title}</a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1
            justify-end items-center'>
                <img 
                src={toggle ? close : menu} 
                alt="menu" 
                className='w-[28px] h-[28-px] 
                object-container cursor-pointer' 
                onClick={() => setToggle(!toggle)}
                />
                <div className={`${!toggle ? 'hidden' 
                :'flex'} bg-gradient-to-r from-[#F79A1F] p-6 absolute
                 top-20 right-0 mx-4 my-2 min-w-[140px] 
                 z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                        {navLinks.map((Link)=>(
                            <li
                            key={Link.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                active === Link.title ? "text-tertiary" : "text-white"
                              }`}
                              onClick={() => {
                                setToggle(!toggle);
                                setActive(Link.title);
                              }}
                            >
                                <a href={`#${Link.id}`}>{Link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar