import "./footer.css";

import logo from '../../assets/Konak Logo.png';

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-logo">
        <img src={logo} alt="Konak logo"/>
      </div>

      <div className="footnote">
        2023 © All Rights Reserved
      </div>

      <div className="footer-link-container">
        <ul>
          <li className="footer-link">
            <a href="/">Home</a>
          </li>
          <li className="footer-link">
            <a href="#about">About us</a>
          </li>
          <li className="footer-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer-link">
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer