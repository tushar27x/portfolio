'use client'
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa6";
import Reveal from '../Reveal';
import Link from 'next/link';
const Contact = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center gap-8">
      <div>
        <h1 className='text-3xl font-bold'>CONTACT</h1>
      </div>

      <div className='w-full lg:w-3/4 flex justify-center'>
        <Reveal>
          <div className='flex flex-row justify-between pb-4 gap-6 w-full'>
            <Link href={'https://github.com/Tushar27x'}>
              <FaGithub size={20}/> 
            </Link>
            <Link href={'https://www.linkedin.com/in/tushar-sharma-01961b22b/'}>
              <FaLinkedin size={20}/>
            </Link>
            <Link href={'https://twitter.com/iAmTushar_27'}>
              <FaXTwitter size={20}/>
            </Link>
            <Link href={'https://www.instagram.com/tusharx27_/'}>
              <FaInstagram size={20}/>
            </Link>
          </div>
        </Reveal>
      </div>

    </div>
  )
}

export default Contact