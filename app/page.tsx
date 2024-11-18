import Title from './components/Title/page'
import About from './components/About/page'
import Projects from './components/Projects/page'
import Contact from './components/Contact/page'
import Navbar from './components/Navbar/page'
import Skills from './components/Skills/page'
import Experience from './components/Experience/page';

export default function Home() {
  return (
    <>  
      <Navbar />
      <div id='title'>
        <Title />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300" />
      <div id='about'>
        <About />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300" />
      <div id='skills'>
        <Skills />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300" />
      <div>
        <Experience />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300" />
      <div id='project'>
        <Projects />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300" />
      <div id='contact'>
        <Contact />
      </div>
    </>
  );
}
