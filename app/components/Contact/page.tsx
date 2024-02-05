'use client'
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa6";
import {useThemeContext} from '@/app/ThemeProvider'
import Reveal from '../Reveal';
import Link from 'next/link';
import EmailForm from './EmailForm';
const Contact = () => {
  const {displayMode} = useThemeContext();
  return (
    <div className={`${displayMode ? 'bg-light':'bg-dark text-light'} p-[6rem] flex flex-col items-center gap-[2rem]`}>
      <div>
        <h1 className='text-3xl font-bold'>SOCIALS</h1>
      </div>

      <div className='flex flex-col w-full gap-[2rem]'>
        <Reveal>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-full flex flex-col'>
              <h3 className='pb-5 text-center md:text-left'>Feel free to contact me on social media</h3>
              <div className='hidden md:flex lg:hidden flex-col justify-center items-center gap-1'>
                <div className={`w-[2px] h-full ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
                <div>OR</div>
                <div className={`w-[2px] h-full ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
              </div>
              <div className='flex md:flex-col pt-2 justify-between'>
                  <Link href={'https://github.com/Tushar27x'}>
                <div className='flex flex-row justify-start items-center gap-3 pb-5'>
                  <FaGithub size={30}/> 
                    <h3 className='hidden md:block hover:underline transition-all'>Tushar27x</h3>
                </div>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/tushar-sharma-01961b22b/'}>
                <div className='flex flex-row justify-start items-center gap-3 pb-5'>
                  <FaLinkedin size={30}/> 
                    <h3 className='hidden md:block hover:underline transition-all'>Tushar Sharma</h3>
                </div>
                  </Link>
                  <Link href={'https://twitter.com/iAmTushar_27'}>
                <div className='flex flex-row justify-start items-center gap-3 pb-5'>
                  <FaXTwitter size={30}/> 
                    <h3 className='hidden md:block hover:underline transition-all'>iAmTushar_27</h3>
                </div>
                  </Link>
                  <Link href={'https://www.instagram.com/tusharx27_/'}>
                <div className='flex flex-row justify-start items-center gap-3 pb-5'>
                  <FaInstagram size={30}/> 
                    <h3 className='hidden md:block hover:underline transition-all'>tusharx27_</h3>
                </div>
                  </Link>
              </div>
            </div>

            <div className='flex flex-row md:hidden lg:hidden justify-center items-center gap-4 py-4'>
              <div className={`w-full h-[2px] ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
              <div>OR</div>
              <div className={`w-full h-[2px] ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
            </div>

            <div className='flex flex-row justify-between gap-6 w-full'>
              <div className='hidden md:flex flex-col justify-center items-center gap-1'>
                <div className={`w-[2px] h-full ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
                <div>OR</div>
                <div className={`w-[2px] h-full ${displayMode? 'bg-dark/50':'bg-light/50'}`}></div>
              </div>
              <EmailForm />
            </div>
          </div>
        </Reveal>
      </div>
      
    </div>
  )
}

export default Contact