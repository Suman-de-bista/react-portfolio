import { useEffect } from 'react';
import './App.css';
import About from './components/about';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Home from './components/home';
import Navigationbar from './components/navigationbar'
import Projects from './components/projects';
import Skills from './components/skills';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000});
},[])
  return (
    <div className="App">
      <Navigationbar />
      <Home/>
      <About />
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
