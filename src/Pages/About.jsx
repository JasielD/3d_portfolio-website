import React from "react";
import { experiences, skills } from "../constants";
import CTA from "../components/CTA";
import Connect from "../components/Connect";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text ">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow pl-2">
          Jasiel
        </span>
      </h1>
      <div className="mt-5 flex flex-col text-slate-500 gap-3">
        <p>Web developer based in India, specializing in tecnical education through hands-on learning and building projects. </p>
      </div>
      <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Skills</h3>
      <div className="mt-16 flex flex-wrap gap-12">
      {skills.map((skill)=>(
        <div className="block-container w-20 h-20">
          <div className="btn-back rounded-xl"/>
          <div className="btn-front rounded-xl flex justify-center items-center">
          <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
          </div>
          </div>
      ))}
      </div>
      </div>
      
      <div className="py-16">
        <h3 className="head-text">Work Experience</h3>
        <div className="mt-5 flex flex-col text-slate-500 gap-3">
        <p>ive worked with all sorts of companies, leveling up my skills and teaming up with smart people. Heres the run down: </p>
      </div>
      <div className="relative mx-auto max-w-4xl mt-12">
          {/* The Vertical Line (Spine) */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-300 md:left-1/2 md:-ml-0.5"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative mb-8 flex flex-col items-center md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 1. The Dot on the Spine (Icon) */}
              {/* Added dynamic style for iconBg and increased size to w-12 h-12 to fit logos */}
              <div 
                className="absolute left-8 top-6 z-10 -ml-6 flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-white md:left-1/2 shadow-lg"
                style={{ background: experience.iconBg }}
              >
                <img 
                  src={experience.icon} 
                  alt={experience.company_name} 
                  className="w-[60%] h-[60%] object-contain" 
                />
              </div>

              {/* 2. Empty Space for the opposite side (Desktop only) */}
              <div className="hidden w-1/2 md:block"></div>

              {/* 3. The Content Card */}
              <div className="ml-16 w-full md:ml-0 md:w-1/2 md:px-8">
                <div className="transform rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 border border-gray-100">

                  {/* Header */}
                  <div className="mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {experience.title}
                    </h3>
                    <p className="text-base font-semibold text-gray-600" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>
                  
                  <span className="mb-4 block text-sm font-semibold text-gray-400">
                      {experience.date}
                  </span>

                  {/* Bullet Points */}
                  <ul className="list-disc ml-5 space-y-2">
                    {experience.points.map((point, pointIndex) => (
                      <li
                        key={`experience-point-${pointIndex}`}
                        className="text-sm text-gray-600 pl-1 tracking-wider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border border-slate-200"/>
      <CTA />
      <Connect />
    </section>
  );
};

export default About;
