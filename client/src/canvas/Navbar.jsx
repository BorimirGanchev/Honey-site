import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { navLinks } from '../constants'
import { styles } from '../styles'
import  menu  from "../assets/hamburgerIcon.png";
import  close  from "../assets/close.png";
import  logo  from "../assets/logo.png";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 relative top-0 z-20 shadow-xl`} >
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
            <p className='text-wite text-[18px] font-bold cursor-pointer flex'>Bori &nbsp; <span className='sm:block hidden'>| Honey provider</span></p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((Link)=>(
                    <li
                      key={Link.id}
                      className={`${
                        active === Link.title 
                        ? "text-secondary" 
                        : "text-black"
                    } hover:text-secondary text-[18px]
                      font-medium cursor-pointer`}
                      onClick={() =>{
                        setToggle(!toggle);
                        setActive(Link.title);
                    }}
                    >
                        <a href={`#${Link.id}`}>{Link.title}</a>
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
                                active === Link.title 
                                ? "text-tertiary" 
                                : "text-white"
                              }`}
                              onClick={() => 
                                setActive(Link.title)
                              }
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