import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications";
import Contact from "./components/ContactAlt";

function App() {
  return (
    <> 
     <Navbar />
     
      <Entry />
      <About />
       <Education />
       <Projects />
      <Skills />
      <Certifications /> 
      <Contact /> 
    </>
  );
}

export default App;
