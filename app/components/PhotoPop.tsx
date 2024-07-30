"use client";
import {motion, useAnimation, useInView} from 'framer-motion';
import { useEffect, useRef } from 'react';
const Pop = ({children}:{children:React.ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    });
    return (
        <div className='overflow-hidden w-auto'>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                {children}
            </motion.div>
        </div>
  )
}

export default Pop