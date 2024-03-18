import React from 'react'
import { Link } from 'react-router-dom';
import {FaGithub } from "react-icons/fa";
import  '../Pages/Resume.css';
import cloneimg from "../asset/clone.png";
import counterimg from "../asset/counter.png"
import portfolioimg from "../asset/portfolio.png"
import parallaximg from "../asset/parallax.png"
import resumeimg from "../asset/resume.png" 


const Repo = ({repo}) => {

  let screenshot;
  if(repo.name === 'clone')
  {
    screenshot=cloneimg;
  }
  if(repo.name === 'Counter')
  {
    screenshot=counterimg;
  }
  if(repo.name === 'Portfolio')
  {
    screenshot=portfolioimg;
  }
  if(repo.name === 'parallax-website')
  {
    screenshot=parallaximg;
  }
  if(repo.name === 'Resume')
  {
    screenshot=resumeimg;
  }

  return (


    <div className='w-[400px] h-[300px] max-w-[300px] border-2 hover:scale-110 transition-all duration-300 ease-in hover:shadow-lg gap-2 flex flex-col items-center justify-center'>
        
       <h1 className='text-xl font-bold text-slate-700 tracking-wide text-justify'>{repo.name}</h1>
       <img src={screenshot} alt={repo.name} width={290} height={150} className='p-5'/>
       
       <div className='flex gap-x-2  justify-between items-center mt-2'>
            <Link to={repo.html_url} target="_blank" className='button flex justify-center items-center gap-2 '> <FaGithub/> GitHub</Link>
            
       </div>
       
        
    </div>
  )
}

export default Repo