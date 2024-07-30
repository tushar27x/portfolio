import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
interface Props{
  toggle: ()=>void;
  clicked: boolean;
}
const Hamburger = ({toggle, clicked}: Props) => {
  
  return (
    <div onClick={toggle} className={`md:hidden flex items-center rounded-full p-2`}>
      <GiHamburgerMenu size={20}/>
    </div>
  )
}

export default Hamburger