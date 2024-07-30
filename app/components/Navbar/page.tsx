"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';
import { ModeToggle } from '../ModeToggle';
const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  const toggle = ()=>setClicked(!clicked);
  return (
    <>
    <div className={`flex w-full fixed flex-row shadow-md justify-between px-6 py-2  z-10 `}>
      <div className='brand'>
        <Link href="#title"><h1 className='text-3xl font-extrabold'>TS</h1></Link>
      </div>
      <div className='hidden nav-links md:flex flex-row justify-between items-center gap-10 '>
        <Link href={'#about'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>About</div></Link>
        <Link href={'#skills'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Skills</div></Link>
        <Link href={'#project'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Projects</div></Link>
        <Link href={'#contact'}><div className='cursor-pointer font-semibold hover:text-slate-300 transition-colors text-1xl mr-2'>Contact</div></Link>
        <ModeToggle />
      </div>
      <Hamburger clicked={clicked} toggle={toggle}/>
    </div>
    <SideMenu clicked={clicked} changeClicked={() => setClicked(!clicked)}/>
    </>
  )
}

export default Navbar;