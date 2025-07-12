import Title from './components/Title/page'
import About from './components/About/page'
import Projects from './components/Projects/page'
import Contact from './components/Contact/page'
import Navbar from './components/Navbar/page'
import Skills from './components/Skills/page'
import Experience from './components/Experience/page';
import FloatingThemeToggle from './components/FloatingThemeToggle';

export default function Home() {
  return (
    <>  
      <Navbar />
      <div id='home'>
        <Title />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div>
        <Experience />
      </div>
      <div id='project'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <FloatingThemeToggle />
    </>
  );
}
