import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Project from './Component/Project.jsx';
import Contact from './Component/Contact.jsx';
import Skill from './Component/Skill.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skill">Skill</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Project
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  
  <Routes>
    <Route path='' element={<Home></Home>}></Route>
    <Route path='about' element={<About></About>}></Route>
    <Route path='project' element={<Project></Project>}></Route>
    <Route path='skill' element={<Skill></Skill>}></Route>
    <Route path='contact' element={<Contact></Contact>}></Route>
  </Routes>
   <footer>
      <p className='text-center'>© 2024 Onkar Manohar Shinde. All rights reserved.</p>
    </footer>
    </>
   
  )
}

export default App
