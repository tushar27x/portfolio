"use client"
import React from 'react';
import { useThemeContext } from '@/app/ThemeProvider';
import Image from 'next/image';
import Reveal from '../Reveal';
import Link from 'next/link';
import PhotoPop from '../PhotoPop';
import projects from '@/app/projects';
const Projects = () => {
  const {displayMode} = useThemeContext()
  return (
    <div className={`${displayMode? 'bg-light text-dark':'bg-dark/90 text-light'} p-[6rem]`}>
      <div className='flex flex-col items-center gap-[2rem]'>
        <div>
          <h1 className='text-3xl font-bold'>PROJECTS</h1>
        </div>
        <Reveal>
          <div className='flex flex-col items-center w-full gap-5 md:flex-row md:gap-[5rem] lg:flex-row lg:gap-[8rem]'>
            {
              projects.map((project) =>{
                return( 
                  <div key={project.id} className='w-full text-center'>
                    <div className='flex flex-col items-center py-5'>
                      <Link href={project.gitHubUrl}>
                        <div className={`border-[8px] ${displayMode?'border-blue-300':'border-dark/100'} `}>
                          <PhotoPop>
                            <Image src={project.imageUrl} width={500} height={200} alt="project-ss" />
                          </PhotoPop>
                        </div>
                      </Link>
                    </div>
                    <h3 className='font-semibold text-1xl'>{project.title}</h3>
                  </div>
                )
              })
            }
        </div>   
        </Reveal>
      </div>
    </div>
  )
}

export default Projects