import './footer.css';
import styles from '../../app/page.module.css';

import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className="header-container services--container">
        <div className={styles.max}>
          <div className="footer--container">
            <h3>Let&apos;s get started on something great</h3>
            <p>Reach out to us for a quote</p>
            <div className="group__button">
              <button className="contact__button">Contact us on WhatsApp</button>
              <button className="button__contact">Contact us via email</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.max}>
        <div className="footer--main">
          <Image
            src="/konak.png"
            width={100}
            height={45}
            alt="logo"
          />

          <div className="footer--desc">
            <ul>

              <li className="nav--link"><a href="#about">About us</a></li>            
              <li className="nav--link"><a href="#services">Our Services</a></li>
              <li className="nav--link"><a href="#projects">Projects</a></li>
              <li className="nav--link"><a href="#contact">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer