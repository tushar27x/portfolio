import Image from 'next/image'
import Title from './components/Title/page'
import About from './components/About/page'
import Projects from './components/Projects/page'
import Contact from './components/Contact/page'
import Reveal from './components/Reveal'
export default function Home() {
  return (
    <>
      <div id='title'>
      <Reveal>
        <Title />
      </Reveal>
      </div>
      <div id='about'>
        <Reveal>
          <About/> 
        </Reveal>
      </div>

      <div id='projects'>
        <Projects />
      </div>
      <Contact />
    </>
  )
}
