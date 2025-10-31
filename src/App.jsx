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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
  <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark shadow-sm">
    <div className="container-fluid px-4">
      {/* Brand Name */}
      <a className="navbar-brand fw-bold text-info" href="#">
        Portfolio
      </a>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Info Section */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-center text-light gap-3 mt-3 mt-lg-0">
          <a href="tel:7620483762" className="text-decoration-none text-info small">
            📞 7620483762
          </a>
          <a
            href="https://wa.me/919657585734"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-success small"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:shindeonkar735@gmail.com"
            className="text-decoration-none text-warning small"
          >
            ✉️ shindeonkar735@gmail.com
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>

  <Routes>
    <Route path='' element={<Home></Home>}></Route>
    <Route path='about' element={<About></About>}></Route>
    <Route path='project' element={<Project></Project>}></Route>
    <Route path='contact' element={<Contact></Contact>}></Route>
  </Routes>
   <footer>
      <p className='text-center'>© 2024 Onkar Manohar Shinde. All rights reserved.</p>
    </footer>
    </>
   
  )
}

export default App
