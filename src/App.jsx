import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Tools from "./components/pages/Tools.jsx";
import Bmi from "./components/pages/Bmi";
import Age from "./components/pages/age.jsx";


function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tools" element={<Tools/>}/>
        <Route path="/bmi" element={<Bmi/>}/>
        <Route path="/age" element={<Age/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
