import React from 'react'
import Reveal from '../Reveal';

import { Badge } from '@/components/ui/badge';
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "SQL", "Node.js", "Express.js", "Next.js", "Elasticsearch", "Java", "Functional Programming", "Git", "DevOps", "C++", "DSA"]
const Skills = () => {
  return (
    <Reveal>
    <div className={`pt-10`}>
      <div className='flex items-center flex-col gap-5 px-20 lg:px-[10rem] lg:py-[5rem] md:py-[2rem] md:px-[1rem]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>SKILLS</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-lg py-2 px-4 rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>
      </div>
    </div>
    </Reveal>
  )
}

export default Skills;
