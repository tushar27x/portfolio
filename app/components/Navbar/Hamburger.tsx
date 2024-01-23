import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
interface Props{
  toggle: ()=>void;
  displayMode: boolean;
  clicked: boolean;
}
const Hamburger = ({toggle, displayMode, clicked}: Props) => {
  
  return (
    <div onClick={toggle} className={`md:hidden flex items-center rounded-full p-2
    ${(displayMode) ?(clicked?'bg-[#46465b] text-white':''):(clicked?'bg-[#333353] text-white':'bg-dark text-white')}
    `}>
      <GiHamburgerMenu size={20}/>
    </div>
  )
}

export default Hamburger