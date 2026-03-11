import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const[dark,setDark] = useState(true);
  
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  },[])
  
  return (
   <div className={`scroll-smooth w-screen overflow-x-hidden ${dark ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500`}>
            <Navbar dark={dark} setDark={setDark}/>            
            <Landing dark={dark}/>
            <About dark={dark}/>
            <Skills dark={dark}/>
            <Projects dark={dark}/>
            <Contact dark={dark}/>
            <Footer dark={dark}/>
        </div>
  )
}

export default App