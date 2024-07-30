import React from 'react'
import SkillMeter from './SkillMeter';
import Reveal from '../Reveal';

const skills = [
    {
        id:1,
        name:'HTML',
        val: 100
    },
    {
        id:2,
        name:'CSS',
        val: 100
    },
    {
        id:3,
        name:'Javascript',
        val: 100
    },
    {
        id:4,
        name:'React.js',
        val: 95
    },
    {
        id:5,
        name:'Express.js',
        val: 95
    },
    {
        id:6,
        name:'Node.js',
        val: 90
    },
    {
        id:7,
        name:'MongoDB',
        val: 90
    },
    {
        id:8,
        name:'Next.js',
        val: 90
    },
    {
        id:9,
        name:'Typescript',
        val: 90
    },
    {
        id:10,
        name:'SQL',
        val: 90
    },
]
const Skills = () => {
  return (
    <Reveal>
    <div className={`pt-10`}>
      <div className='flex flex-col gap-5 px-20 lg:px-[10rem] lg:py-[5rem] md:py-[2rem] md:px-[1rem]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>SKILLS</h1>
        </div>
        {
            skills.map((skill)=>(
                <SkillMeter key={skill.id} skillName={skill.name} skillVal={skill.val} />
            ))
        }
      </div>
    </div>
    </Reveal>
  )
}

export default Skills;
