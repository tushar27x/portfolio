"use client"
import { useThemeContext } from '@/app/ThemeProvider';
import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import Reveal from '../Reveal';
import Image from 'next/image';
import PhotoPop from '../PhotoPop';
const About = () => {
  const {displayMode} = useThemeContext();
  return (
    <Reveal>
    <div className={`${displayMode? 'bg-[#e8f7f9]':'bg-dark/85 text-white'} pt-10`}>
      <div className='flex flex-col gap-5 lg:px-[10rem] lg:py-[5rem] md:py-[2rem]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>ABOUT ME</h1>
        </div>
        <div className='flex flex-col items-center md:gap-[2rem] lg:gap-[4rem] lg:flex-row lg:items-center lg:justify-between gap-5 px-[5rem] py-[3rem]'>
          <div className={`w-[220px] border-solid border-[10px] lg:w-2/3 ${displayMode?'border-blue-300': 'border-dark/100'}`}>
              <PhotoPop>
                <Image src={'/new-profile.jpg'} width={220} height={220} alt='about-img'/>
              </PhotoPop>
          </div>
          <Reveal>
            <p className='text-center md:text-left lg:text-left font-semibold text-1xl'>
              I am a 3rd year student pursuing my B.Tech in IT from Guru Tegh Bahadur Institute of Technology, New Delhi.<br/><br/>
              I am a passionate and detail-oriented Full Stack Developer, eager to embark on an exciting journey in the world of web development. Despite being a fresher, I bring a wealth of knowledge and hands-on experience with the MERN (MongoDB, Express.js, React.js, Node.js) stack, coupled with expertise in Next.js.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
    </Reveal>
  )
}

export default About;