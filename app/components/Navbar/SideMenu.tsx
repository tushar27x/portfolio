import Link from 'next/link';
import React from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

interface SideMenuProps{
    displayMode: boolean;
    changeMode: ()=>void;
    clicked: boolean;
    changeClicked: ()=>void;
}
const SideMenu = ({
    displayMode,
    changeMode,
    clicked,
    changeClicked,
}:SideMenuProps) => {

  return (
    <div className='z-20 flex flex-col text-left h-[10rem]
    absolute top-14 right-6'>
      <div className={` px-3 py-4 w-[10rem] fixed ${clicked ? 'right-5':'right-[-100%]'} ${ displayMode?'bg-light/100':'bg-dark/80 text-light'} shadow-lg transition-all rounded-md `}>
        {displayMode ? (
          <div onClick={()=>{changeMode();}}className='flex items-center cursor-pointer gap-2 py-2'>
            <div>
              <MdOutlineLightMode size={20}/>
            </div>
            <div className='font-semibold'>Light Mode</div>
            </div>
          ) : (
            <div onClick={()=>{changeMode();}} className='flex items-center cursor-pointer gap-2 py-2'>
              <div >
                <MdOutlineDarkMode size={20}/>
              </div>
              <div className='font-semibold'>Dark Mode</div>
            </div>
            
          )}
        <Link href={"#about"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>About</div></Link>
        <Link href={"#contact"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Contact</div></Link>
        <Link href={"#project"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Projects</div></Link>
        <Link href={"#"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 mt-2'>Resume</div></Link>
      </div>
      
    </div>
  )
}

export default SideMenu