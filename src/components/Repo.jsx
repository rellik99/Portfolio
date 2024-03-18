import React from 'react'
import {FaGithub } from "react-icons/fa";
import  '../Pages/Resume.css';


const Repo = ({repo}) => {
  return (


    <div className='w-[400px] h-[300px] max-w-[300px] border-2 hover:scale-110 transition-all duration-300 ease-in hover:shadow-lg flex flex-col items-center justify-center'>
        
       <h1 className='text-xl font-bold text-slate-700 tracking-wide text-justify'>{repo.name}</h1>
       <div className='text-xl text-slate-700 tracking-wide text-justify'>{repo.description}</div>
       <div className='flex gap-x-2  justify-between items-center mt-5'>
            <a href={repo.html_url} className='button flex justify-center items-center gap-2 '> <FaGithub/> GitHub</a>
            <a href={repo.homepage} className='button flex justify-center items-center'> Visit</a>
       </div>
       
        
    </div>
  )
}

export default Repo