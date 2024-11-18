"use client"
import React from 'react';
import Avatar from './Avatar';
import { TypeAnimation } from 'react-type-animation';
import Reveal from '../Reveal';
const Title = () => {
  
  return (
    <div className={`flex flex-col py-[10rem] md:flex-row-reverse md:gap-[10rem] lg:py-[10rem] items-center gap-8`}
    >
      <div className='w-full flex flex-col md:flex-row-reverse md:justify-around items-center gap-10 py-[2rem]'
      >
        <Reveal>
          <div className='w-[200px]'>
            <Avatar src={'/profile-rounded.png'}/>
          </div>
        </Reveal>
        <div className='flex flex-col w-full md:w-1/2 text-center justify-center md:text-left lg:text-left md:items-center '>
          <div>
            <h1 className='font-extrabold text-6xl'>Hi!<br />I am Tushar Sharma</h1>
          </div>
          <div className='flex justify-center lg:justify-start md:w-full mt-10 md:text-left'>
            <TypeAnimation
              sequence={[
                'Full Stack developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer',
                1000,
                'React Developer',
                1000,
                'MERN stack Developer',
                1000,
                'Next.js Developer',
                1000
              ]}  
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className='w-full md:w-full py-8'>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Title