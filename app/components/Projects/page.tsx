"use client"
import React from 'react';
import Image from 'next/image';
import Reveal from '../Reveal';
import Link from 'next/link';
import PhotoPop from '../PhotoPop';
import projects from '@/app/utils/projects';
import { Github, TvMinimalPlay  } from 'lucide-react';
const Projects = () => {
  return (
    <div className='p-[6rem]'>
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
                    <div className='flex justify-between'>
                      <h3 className='font-semibold text-1xl'>{project.title}</h3>
                      <div className='flex gap-4 justify-between'>
                        <div className='hover:opacity-50'>
                          <Link href={project.gitHubUrl}><Github size={20}/></Link>
                        </div>
                        <div className='hover:opacity-50'>
                          <Link href={project.liveUrl}><TvMinimalPlay size={20}/></Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center py-5'>
                      <div className={`border-[8px] `}>
                        <PhotoPop>
                          <Image src={project.imageUrl} width={800} height={0} alt="project-ss" />
                        </PhotoPop>
                      </div>
                      
                    </div>
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