import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from "../components/CTA"
import Connect from '../components/Connect'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text ">
        MY  
         <span className="blue-gradient_text font-semibold drop-shadow pl-2">
           Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col text-slate-500 gap-3">
        <p> I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!</p>
      </div>
      <div className='flex  flex-wrap my-20 gap-16'>
        {projects.map((project)=>(
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front flex justify-center items-center rounded-xl'>
                <img src={project.iconUrl} alt='Project icon' 
                className='w-8 h-8 object-contain'/>
                </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center font-poppins gap-2'>
                <Link to={project.link} 
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-blue-600'>
                  Live Link
                </Link>  
                <img src={arrow}
                  alt='arrow icon'
                  className='w-4 h-4 object-contain '/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border border-slate-200' />
      <CTA />
      <Connect />
      </section>
  )
}

export default Projects
