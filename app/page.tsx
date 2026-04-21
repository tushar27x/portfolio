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
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-noise" />
      
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <section id="home" className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden w-full text-center">
            <span className="text-[10vw] sm:text-[20vw] font-black text-stroke uppercase leading-none opacity-20">
              Portfolio
            </span>
          </div>
          <Title />
        </section>
        
        <section id="about" className="relative overflow-hidden">
          <div className="absolute -left-10 top-20 select-none pointer-events-none">
            <span className="text-[8vw] sm:text-[15vw] font-black text-stroke uppercase leading-none opacity-10 rotate-90 origin-left">
              About
            </span>
          </div>
          <About />
        </section>
        
        <section id="skills" className="relative">
          <Skills />
        </section>
        
        <section id="experience" className="relative overflow-hidden">
           <div className="absolute -right-10 bottom-20 select-none pointer-events-none">
            <span className="text-[8vw] sm:text-[15vw] font-black text-stroke uppercase leading-none opacity-10 -rotate-90 origin-right">
              Journey
            </span>
          </div>
          <Experience />
        </section>
        
        <section id="project" className="relative">
          <Projects />
        </section>
        
        <section id="contact" className="relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
            <span className="text-[10vw] sm:text-[15vw] font-black text-stroke uppercase leading-none opacity-10">
              Connect
            </span>
          </div>
          <Contact />
        </section>
      </div>

      <FloatingThemeToggle />
    </main>
  );
}
