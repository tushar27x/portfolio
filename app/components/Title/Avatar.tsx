import React from 'react';
import Image from 'next/image';
const Avatar = ({src}:{src:string}) => {
  return (
    <Image 
        src={src} 
        width={400} 
        height={300} 
        alt='avatar'
        className='drop-shadow-lg'
    />
  )
}

export default Avatar