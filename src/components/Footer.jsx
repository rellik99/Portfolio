import React from 'react'
import {FaLinkedinIn ,FaGithub ,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const today = new Date();
    
    const year = today.getFullYear();


  return (
    <div className='w-full bg-[#343d68] h-14 flex md:flex-row flex-col justify-center items-center relative bottom-0 '>
        <div className='flex  justify-between items-center bg-[#343d68] md:flex-row flex-col md:w-11/12 w-full max-w-[1160px] mx-auto my-auto gap-4 py-4 pb-24 md:py-0'>
             
            <div className='text-white text-sm  '>
                Designed and Developed by Prem Kumar
            </div>
            <div className='text-white text-sm  '>
                Copyright © <span> {year} </span> PK
            </div>
            <div className='flex space-x-2 justify-center items-center'>
                    <Link to='https://github.com/rellik99' target="_blank"><FaGithub className='text-2xl bg-white text-[#343d68] cursor-pointer  rounded-full p-1' /></Link> 
                    <Link to='https://www.linkedin.com/in/prem-kumar-817743217/' target="_blank"><FaLinkedinIn className='text-2xl bg-white text-[#343d68]  cursor-pointer rounded-full p-1'  /></Link> 
                    <Link to='https://www.instagram.com/prem_rellik99/' target="_blank"><FaInstagram className='text-2xl bg-white text-[#343d68]  cursor-pointer rounded-full p-1' /></Link> 
            </div>
        </div>
    </div>
  )
}

export default Footer