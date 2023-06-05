import './header.css';

import sol from '../../assets/sol.png';


const Header = () => {
  return (
    <div id="home" className="header--container">
      <div className="header--module">

        <div className="header--sub_container">
          <div className="header--left_container">
            <h1>Power your future with renewable energy.</h1>
            <p>Reduce your carbon footprint. Save money. Go Konak.</p>

            <div className="mob__img">
              <img src={sol} alt="workers installing a solar panel" />
            </div>

          </div>


          <div className="header__button">
            <button type="button" className="main__button"><a href="#">Contact us</a></button>
          </div>

        </div>

        <div className="space"></div>

        <div className="header__img">
          <img src={sol} alt="workers installing a solar panel" />
        </div>
      </div>
    </div>
  )
}

export default Header