"use client";

import './navbar.css';

import { useState } from "react"
import Image from 'next/image';

import open from '../../public/icon-menu.svg';


const Menu = () => (
  <>
    <ul>
      <li className="nav--link"><a href="#home">Home</a></li>
      <li className="nav--link"><a href="#new">New</a></li>
      <li className="nav--link"><a href="popular">Popular</a></li>
      <li className="nav--link"><a href="#trending">Trending</a></li>
      <li className="nav--link"><a href="#categories">Categories</a></li>
    </ul>
  </>
)

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? "main-container" : ""}  onClick={{toggleNavbar}} />
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div>
          <Image 
            src="/konak.png"
            width={100}
            height={45}
            alt="logo"
          />
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <Image 
            src="/icon-menu-close.svg"
            width={32}
            height={32}
            alt="icon"
          />
        ) : (
          <Image 
            src={open}
            alt="icon"
          />
        )}
        </div>

        <div className="navbar-items">
          <Menu />
        </div>


      </nav>
    </div>
  )
}

export default Navbar