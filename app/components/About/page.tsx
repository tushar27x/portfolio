"use client"

import React from 'react'
import Reveal from '../Reveal';
import Image from 'next/image';
import PhotoPop from '../PhotoPop';
const About = () => {
  return (
  
    <div>
      <div className='flex flex-col gap-5 lg:px-[10rem] lg:py-[5rem] md:py-[2rem]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>ABOUT ME</h1>
        </div>
        <div className='flex flex-col items-center md:gap-[2rem] lg:gap-[4rem] lg:flex-row lg:items-center lg:justify-between gap-5 px-[5rem] py-[3rem]'>
          <div className={`w-[220px] border-solid border-[10px] lg:w-2/3`}>
              <PhotoPop>
                <Image src={'/new-profile.jpg'} width={220} height={220} alt='about-img'/>
              </PhotoPop>
          </div>
          <Reveal>
          <div className='md:text-left text-center'>
            I am Tushar Sharma, a final-year B.Tech student and a software engineer with expertise in full-stack web development. 
            I have extensive experience working with Java to write server-side code, along with proficiency in SQL databases and Elasticsearch. 
            My skill set also includes JavaScript, TypeScript, C++, and frameworks like React.js, Node.js, Express.js, and Next.js. 
            I specialize in REST API development and UI/UX design.
          </div><br />
          <div className='md:text-left text-center'>
            Currently, I am working as a <strong>Software Engineer Trainee</strong> at <strong>Salescode.ai</strong>, 
            contributing to innovative projects while continuously enhancing my skills. I am passionate about problem-solving, 
            creating seamless user experiences, and embracing new challenges in the tech industry.
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default About;