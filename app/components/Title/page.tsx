"use client"
import React from 'react'
import Avatar from './Avatar'
import { useThemeContext } from '@/app/ThemeProvider'

const Title = () => {
  const {displayMode} = useThemeContext();
  return (
    <div className={`flex flex-col py-[5rem] md:flex-row-reverse md:gap-[10rem] lg:py-[12rem] items-center gap-8 ${displayMode? 'bg-light text-dark': 'bg-dark/90 text-light/90'} title-section  md:px-8`}
    >
      <div className='w-full flex flex-col md:flex-row-reverse md:justify-around items-center gap-10 md:gap- px-[5rem] py-[2rem]'
      >
        <div className='w-[200px]'>
          <Avatar src={'/profile-rounded.png'}/>
        </div>
        <div className='flex flex-col w-full md:w-1/2 text-center justify-center md:text-left lg:text-left md:items-center'>
          <h1 className='font-extrabold text-6xl'>Hi!<br />I am Tushar Sharma
          </h1>
          <h3 className='mt-8 w-full font-semibold text-2xl px-8'>I am a full-stack developer</h3>
        </div>
      </div>

    </div>
  )
}

export default Title