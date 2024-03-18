import React from 'react'
import { FaHandPointer } from "react-icons/fa";
import htmlimg from "../asset/HTML.png"
import cssimg from "../asset/CSS.png"
import reactimg from "../asset/React.png"
import reduximg from "../asset/Redux.svg"
import tailwindimg from "../asset/Tailwind.png"
import javascriptimg from "../asset/Javascript.svg"
import nodejsimg from "../asset/NodeJs.svg"
import mongodbimg from "../asset/MongoDB.svg"
import expressjs from "../asset/Express.png"
import githubimg from "../asset/Github.svg"
import cimg from "../asset/c++.png"
import vscodeimg from "../asset/vscode.webp"
import sqlimg from "../asset/sql.png"
import javaimg from "../asset/java.png"
import gitimg from "../asset/Git.svg"

const About = () => {
  return (
    <div className='w-full  min-h-[100vh] mt-14'>

        {/* 1st section */}
        <div className='w-11/12 flex gap-[100px] lg:flex-row flex-col justify-center items-center max-w-[1160px] mx-auto pt-20'>
            <div className='lg:w-[70%] w-[80%] max-w-[700px]'>
                <h1 className='text-4xl flex justify-center space-x-2 font-bold text-slate-700 '><span>Know Who</span>   <span className='text-[#e84949]'> I'M </span></h1>
                <br/>
                <div className='text-xl text-slate-700 tracking-wide text-justify'>
                    Hi, I am <span className='text-[#e84949]'>Prem Kumar</span> hailing from <span className='text-[#e84949]'>Jamshedpur, India.</span>
                    <br />
                    With a degree in Computer Science and Engineering.
                    Presently, I'm immersed in mastering the MERN stack and sharpening my prowess in data structures and algorithms.
                    When I'm not busy, you can catch me immersing myself in challenging LeetCode problems 
                    and exploring a range of technical pursuits, a true reflection of my unyielding commitment to progress.
                    <br/><br/>
                    In moments of respite from coding, you'll find me immersed in a multitude of activities
                    <br/>
                    <br/>
                    <div className='flex flex-col ml-5'>
                        <div className='flex gap-x-2  items-center'>
                            <FaHandPointer  className=' rotate-90'/>Reading books
                        </div>
                        
                        <div  className='flex gap-x-2  items-center'>
                            <FaHandPointer className=' rotate-90'/>Travelling
                        </div>
                        
                        <div  className='flex gap-x-2  items-center'>
                            <FaHandPointer className=' rotate-90'/>Gym
                        </div>
                        
                    <br/>
                    </div>

                    <span className='flex justify-center mx-auto text-lg text-[#e84949] opacity-50'>"Unleashing the Potential of Bits and Bytes"</span> 
                    
                    <span className='text-center flex justify-center text-lg text-[#e84949] opacity-50'>-Prem</span>
                </div>

            </div>

            <div className='lg:w-[30%] w-[80%] max-w-[500px]'>
                <img src='/Developer.png' alt='developer' width={500} height={500}/>
            </div>
        </div>

        {/* 2nd section */}
        <div className='w-11/12 flex flex-col gap-[50px] justify-center items-center max-w-[1160px] mx-auto py-10'>

            <h1 className='text-5xl font-bold text-gray-700'>MyTech <span className='text-[#e84949]'> Stack</span></h1>
            
            <div className=' grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-11 justify-center items-center md:pb-0 pb-14'>

                <img src={htmlimg} alt=""  className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={cssimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={javascriptimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={reactimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={nodejsimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={reduximg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={tailwindimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/> 
                <img src={mongodbimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={expressjs} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={githubimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={cimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={vscodeimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={sqlimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={javaimg} alt="" className="w-[80px] transition hover:scale-110 duration-200 ease-in"/>
                <img src={gitimg} alt="" className="w-[90px] transition hover:scale-110 duration-200 ease-in"/>

            </div>

        </div>
        
    </div>
  )
}

export default About