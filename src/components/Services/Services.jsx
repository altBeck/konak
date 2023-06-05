import './services.css';

import power from "../../assets/powers.png";
import install from "../../assets/install.png";
import solar from "../../assets/solar.png";


const Services = () => {
  return (
    <div id="services" className="services__container">
      <div className="services__sub-container">
        <div className="services--header">
          <h2>Our <br /> Services</h2>
          <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
        </div>

        <div className="services--sub_header">
          <div className="module">
            <img className="module--img" src={solar} alt="installation"/>
            <h2>Solar Accessories</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>

          <div className="module">
            <img className="module--img filter" src={install} alt="installation"/>
            <h2>Installation and Maintenance of Solar Equipment</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>

          <div className="module">
            <img className="module--img" src={power} alt="installation"/>
            <h2>Solar Accessories</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>
        </div>

        <button type="button" className="main__button contact"><a href="#">Contact us on WhatsApp</a></button>

      </div>
    </div>
  )
}

export default Services