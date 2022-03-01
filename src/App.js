import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <hr className='border-gray-800'/>
      <Projects/>
      <hr className='border-gray-800'/>
      <Skills />
      <hr className='border-gray-800'/>
      <Showcase />
      <hr className='border-gray-800'/>
    </main>
  )
}
export default App;
