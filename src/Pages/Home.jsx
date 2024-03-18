import React from 'react'
import './Home.css'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn ,FaGithub ,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profile from "../asset/user.jpg"

const Home = () => {

    
  return (
    <div className='w-full  min-h-[100vh] mt-14'>

            {/* 1st section  */}

            <div className='w-11/12 flex md:flex-row flex-col gap-[100px] justify-center items-center max-w-[1160px] mx-auto py-12'>

                <div className='md:w-1/2 w-[80%] max-w-[500px] '>
                    <div className='flex space-x-3 text-4xl'>
                            <h1 className='font-semibold text-gray-700 '>Hey there! </h1>
                            <img src='/wave.svg' alt='wavehand' className='h-10 wave z-[2]'/>

                    </div>
                    <br/>
                    <h2>
                        <div className='flex flex-col space-y-3   w-full '>
                            <span className=' text-4xl font-semibold text-gray-700  '> I'm <span className='text-3xl font-bold text-[#343d68] opacity-100'>Prem Kumar</span>  </span>
                            
                            <TypeAnimation className='text-5xl text-[#e84949] font-bold w-full'
                                sequence={[
                                "Frontend Developer",
                                1000,
                                "UI-UX Designer",
                                1000,
                                "Coder",
                                1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}
                            />
                            
                            <span className='text-lg text-gray-700  '>
                                I'm a software developer and here is my portfolio website. 
                                <br/>Here you'll learn about my journey as a software developer.
                            </span>
                         </div>

        
                    </h2>
                </div>

                <div className='md:w-1/2 w-[80%] max-w-[500px]'>
                    <img src='/Programming-pana.png' alt='portfolio' width={500} height={500}/>
                </div>

            </div>

            {/* 2nd section */}
            <div className='w-11/12 flex flex-col gap-11 justify-center items-center max-w-[1160px] mx-auto pt-16'>

                <div className='flex md:flex-row flex-col gap-[100px] justify-center items-center mx-auto'>

                    <div className='xl:w-[90%] w-[70%]'>
                        <h1 className='text-6xl font-bold text-center uppercase text-gray-700 '>Let me <span className='text-[#e84949]'>Introduce</span> myself</h1>
                        <br/>
                        <br/>
                        <p className='text-xl font-semibold text-gray-700 '>Programming is my playground, and I'm flourishing.</p>
                        <br/>
                        <p className='text-xl font-semibold text-gray-700 '>
                            Mastery in 
                            <span className='italic font-bold text-[#e84949]'>  C++ and Javascript  </span>  
                            defines me.
                        </p>
                        <br/>

                        <p className='text-xl font-semibold text-gray-700 '>
                                At every chance, I put my passion into action, 
                                crafting products with the power of 
                            <span className='italic font-bold text-[#e84949]'> C++ </span> 
                                and <br/>
                            <span className='italic font-bold text-[#e84949]'> modern JavaScript libraries </span >  
                                such as 
                            <span className='italic font-bold text-[#e84949]'> React.js and Node.js </span> 
                        </p>

                    </div>

                    <div className=' w-[250]'>
                        <img src={profile} alt='profile' width={250}  className=' object-cover rounded-full hover:scale-105 transition-all duration-300 ease-in cursor-pointer'/>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl text-gray-700 font-bold uppercase'>Find me on</h1>
                    <p className='text-md text-gray-700'>Feel free to <span className='text-[#343d68]'>connect</span>  with me</p>
                </div>

                <div className='flex space-x-2 justify-center items-center pb-28  lg:pb-14'>
                    <Link to='https://github.com/rellik99' target="_blank"><FaGithub className='text-4xl bg-white text-[#343d68] hover:text-[#e84949] transition duration-200 rounded-full p-2 cursor-pointer' /></Link>
                    <Link to='https://www.linkedin.com/in/prem-kumar-817743217/' target="_blank"><FaLinkedinIn className='text-4xl bg-white text-[#343d68] hover:text-[#e84949] transition duration-200 rounded-full p-2 cursor-pointer'  /></Link>
                    <Link to='https://www.instagram.com/prem_rellik99/' target="_blank"><FaInstagram className='text-4xl bg-white text-[#343d68] hover:text-[#e84949] transition duration-200 rounded-full p-2 cursor-pointer' /></Link>
                </div>      

            </div>

    </div>
  )
}

export default Home