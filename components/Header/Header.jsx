import './header.css';
import styles from '../../app/page.module.css';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header-container">
      <div className={styles.description}>
        <div className="header--container">
          <h1 className="header--heading">Powering your future with <br /> renewable energy</h1>

          <p className="header--paragraph">We supply homes and businesses with renewable energy solutions that deliver financial savings and carbon reductions.</p>

          <div className="header--links">
            <button className="header--button">Contact us</button>
            <Link 
              href="#services"
              className="header--pseudolink"
              >
              Our Services
            </Link>
          </div>
        </div>

        <Image 
          src="/hero.png"
          width={240}
          height={428}
          alt="workers installing a solar panel on a rooftop"
          className="panel"
        />

      </div>
      
    </div>
  )
}

export default Header