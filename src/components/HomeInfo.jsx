import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({link , text, btnText})=>{
    return (
        <div className='info-box neo-brutalism-blue'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
}
const renderContent = {
    1:(<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Jasiel</span>👋 
        <br/>
        A web developer from India
    </h1>),
    2:(<InfoBox  text="Constantly leveling up my skills and diving deep into new technologies." btnText={"Learn more"} link="/about"/>),
    3:(<InfoBox  text="Worked on multiple projects to gain valuable expireince in web development. Curious about my projects?" btnText={"visit my portfolio"} link="/projects"/>),
    4:(<InfoBox  text="Need projects done or looking for a dev? I'm just a few keystrokes away." btnText={"Let's talk"} link="/contact"/>),
}
const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
