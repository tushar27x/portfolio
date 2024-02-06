"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useThemeContext } from '../../ThemeProvider';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';
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
        <Link href={'#project'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Projects</div></Link>
        <Link href={'#'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Resume</div></Link>
        {displayMode ? <div onClick={changeMode}><MdOutlineLightMode size={30}/></div> : <div onClick={changeMode}><MdOutlineDarkMode size={30}/></div>}
      </div>
      <Hamburger displayMode={displayMode} clicked={clicked} toggle={toggle}/>
    </div>
    <SideMenu clicked={clicked} displayMode={displayMode} changeClicked={() => setClicked(!clicked)} changeMode={changeMode}/>
    </>
  )
}

export default Navbar