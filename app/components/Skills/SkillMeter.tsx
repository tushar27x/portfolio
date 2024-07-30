"use client"
import {useEffect, useState} from 'react'
import { Progress } from "@/components/ui/progress"
interface SkillMeterProps{
    skillName: string,
    skillVal: number
}
const SkillMeter = ({skillName, skillVal}: SkillMeterProps) => {
    const [progress, setProgress] = useState(0)
 
    useEffect(() => {
        const timer = setTimeout(() => setProgress(skillVal), 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1'>{skillName}</div>
            <Progress  className='col-span-2 mt-2 w-full' value={progress} /> 
        </div>
    )
}

export default SkillMeter
