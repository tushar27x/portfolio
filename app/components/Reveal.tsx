"use client"

import React, { useEffect, useRef } from 'react';
import {animate, delay, motion, useAnimation, useInView} from 'framer-motion';

const Reveal = ({children}:{children:React.ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    });
    return (
        <div ref={ref} className='overflow-hidden w-auto'>
            <motion.div
                variants={{
                    hidden:{opacity:0, y:75},
                    visible:{opacity:1, y:0},
                }}    
                initial="hidden"
                animate="visible"
                transition={{delay:0.25, duration:0.5}}
            >
                {children}
            </motion.div>
        </div>
  )
}

export default Reveal