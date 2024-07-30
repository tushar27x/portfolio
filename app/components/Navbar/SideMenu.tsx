import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
interface SideMenuProps{
    clicked: boolean;
    changeClicked: ()=>void;
}
const SideMenu = ({
    clicked,
    changeClicked,
}:SideMenuProps) => {

  return (
    <div className='z-20 flex flex-col text-left h-[10rem]
    absolute top-14 right-6'>
      <div className={` px-3 py-4 w-[10rem] fixed ${clicked ? 'right-5':'right-[-100%]'} shadow-lg transition-all rounded-md `}>
        <ModeToggle />
        <Link href={"#about"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>About</div></Link>
        <Link href={"#skills"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Skills</div></Link>
        <Link href={"#project"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Projects</div></Link>
        <Link href={"#contact"}><div className='cursor-pointer font-semibold hover:text-slate-500 transition-colors text-1xl mr-2 py-2'>Contact</div></Link>
      </div>
      
    </div>
  )
}

export default SideMenu