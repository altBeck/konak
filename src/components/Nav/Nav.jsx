import { useState } from 'react';
import './nav.css';

import logo from '../../assets/Konak Logo.png';
import open from '../../assets/icon-hamburger.svg';
import close from '../../assets/icon-close.svg';

const Menu = () => (
  <>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About us</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
    </ul>
    <button className="nav-button">Contact us</button>
  </>
)

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className={isOpen ? "main-container" : ""}  onClick={{toggleNavbar}} />

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={open} alt="open" />
        )}
        </div>

        <div className="navbar-items">
          <Menu />
        </div>


      </nav>
    </div>
  )
}

export default Nav