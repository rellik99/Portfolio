import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';


const Navbar = () => {

    
    const [hamburgerMenu, setHamburgerMenu] = useState();
    const showmenu = () => setHamburgerMenu(!hamburgerMenu);

    
    
  return (
    
        
        <div className={hamburgerMenu?"flex flex-col bg-[#343d68] fixed top-0 z-[3] w-full pb-4 " : "w-full h-20 fixed top-0 bg-[#343d68] z-[3]" } >

            <nav className='flex w-11/12 max-w-[1160px] mx-auto pt-5 items-center justify-between '>

                    <NavLink to="/">
                        <img src="/logo.png" alt='logo' className='h-14 ' />
                    </NavLink>

                    <div className='md:flex hidden items-center justify-between gap-x-7 font-semibold text-lg text-white'>
                        <NavLink to="/">
                            <div className=' hover:text-[#e84949] transition-all ease-in duration-300'>Home</div>
                        </NavLink>

                        <NavLink to="/about">
                            <div className=' hover:text-[#e84949] transition-all ease-in  duration-300'>About</div>
                        </NavLink>

                        <NavLink to="/projects">
                            <div className=' hover:text-[#e84949] transition-all ease-in duration-300'>Projects</div>
                        </NavLink>

                        <NavLink to="/resume">
                            <div className=' hover:text-[#e84949] transition-all ease-in duration-300'>Resume</div>
                        </NavLink>
                    </div>

                    <div className='md:hidden flex text-white text-3xl items-center justify-center  cursor-pointer ' onClick={showmenu} >
                        
                        { hamburgerMenu ?  <ImCross className=' text-xl'  />:<GiHamburgerMenu  />  }

                    </div>

            </nav>


            <div  className={hamburgerMenu ? " md:hidden flex flex-col items-center justify-between  font-semibold text-lg text-white hamburger" : "hidden "}>
                
                
                <NavLink to="/">
                    <div className=' hover:text-[#e84949] transition-all ease-in duration-300' onClick={showmenu}>Home</div>
                </NavLink>

                <NavLink to="/about">
                    <div className=' hover:text-[#e84949] transition-all ease-in  duration-300' onClick={showmenu}>About</div>
                </NavLink>

                <NavLink to="/projects">
                    <div className=' hover:text-[#e84949] transition-all ease-in duration-300' onClick={showmenu}>Projects</div>
                </NavLink>

                <NavLink to="/resume">
                    <div className=' hover:text-[#e84949] transition-all ease-in duration-300' onClick={showmenu}>Resume</div>
                </NavLink>
                

            </div>

        </div>
    
  )
}

export default Navbar