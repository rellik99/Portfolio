import React, { useEffect, useState } from 'react'
import Repo from '../components/Repo';


const Projects = () => {


  const [repos, setrepos]=useState([]);
  
  async function fetchdata(){
    
    const data= await fetch ("https://api.github.com/users/rellik99/repos");
    const output=await data.json();
    setrepos(output);
    
  }

  useEffect(()=>{
    fetchdata();
  })
  return (
    <div className='w-full  min-h-[100vh] my-24 '>
      <div  className='w-11/12 flex flex-col justify-center items-center max-w-[1160px] mx-auto '>

        <div className='flex flex-col gap-3 pb-14'>
          <h1 className='text-4xl flex justify-center space-x-2 font-bold text-slate-700 '><span>My Recent</span> <span className='text-[#e84949]'> Works</span></h1>
          <p className='text-xl text-slate-700 tracking-wide text-justify'>Here are a few projects I've worked on recently</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 justify-items-center items-center max-w-[1160px] w-11/12 mx-auto'>
          {
            
            
            
            repos.map(repo =>

                <Repo key={repo.id} repo={repo}/>

            )
            
          }
        </div>
      </div>
      
     
    </div>
  )
}

export default Projects