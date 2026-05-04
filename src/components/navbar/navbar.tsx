import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import src from '../../assets/LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={src} alt="Logo" />
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>

        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>

        <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
          Services
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>

      </div>

      <div className="navbar-burger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;