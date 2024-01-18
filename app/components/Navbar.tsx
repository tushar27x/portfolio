"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useThemeContext } from '../ThemeProvider';
const Navbar = () => {
  const {displayMode,changeMode} = useThemeContext();
  const [clicked,setClicked] = useState(false);
  const toggle = ()=>setClicked(!clicked);
  return (
    <>
    <div className={`flex w-full z-30 fixed flex-row shadow-md justify-between px-6 py-2 ${displayMode ? 'bg-light text-dark':'bg-dark dark:text-light'} z-10`}>
      <div className='brand'>
        <Link href="#title"><h1 className='text-3xl font-extrabold'>TS</h1></Link>
      </div>
      <div className='hidden nav-links md:flex flex-row justify-between items-center gap-10 '>
        <Link href={'#about'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>About</div></Link>
        <Link href={'#contact'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Contact</div></Link>
        <Link href={'#projects'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Projects</div></Link>
        <Link href={'#'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Resume</div></Link>
        {displayMode ? <div onClick={changeMode}><MdOutlineLightMode size={30}/></div> : <div onClick={changeMode}><MdOutlineDarkMode size={30}/></div>}
      </div>
      <div onClick={toggle} className={`md:hidden flex items-center rounded-full p-2
      ${(displayMode) ?(clicked?'bg-[#46465b] text-white':''):(clicked?'bg-[#333353] text-white':'bg-dark text-white')}
      `}>
        <GiHamburgerMenu size={20}/>
      </div>
    </div>
  {(
    <div className='z-20 flex flex-col text-left w-full h-full  absolute'>
      <div className={`pt-[5rem] px-3 py-4 w-[10rem] fixed ${clicked ? 'right-0':'right-[-100%]'} ${ displayMode?'bg-light/100':'bg-dark/80 text-light'} shadow-lg transition-all h-full`}>
        {displayMode ? (
          <div onClick={()=>{changeMode();setClicked(false)}}className='flex items-center cursor-pointer gap-2 py-2'>
            <div>
              <MdOutlineLightMode size={20}/>
            </div>
            <div className='font-semibold'>Light Mode</div>
            </div>
          ) : (
            <div onClick={()=>{changeMode();setClicked(false)}} className='flex items-center cursor-pointer gap-2 py-2'>
              <div >
                <MdOutlineDarkMode size={20}/>
              </div>
              <div className='font-semibold'>Dark Mode</div>
            </div>
            
          )}
        <Link href={"#about"}><div onClick={()=>setClicked(false)} className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>About</div></Link>
        <Link href={"#contact"}><div onClick={()=>setClicked(false)} className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Contact</div></Link>
        <Link href={"#project"}><div onClick={()=>setClicked(false)} className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Projects</div></Link>
        <Link href={"#"}><div onClick={()=>setClicked(false)} className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 mt-2'>Resume</div></Link>
      </div>
      
    </div>)
  }
    </>
  )
}

export default Navbar