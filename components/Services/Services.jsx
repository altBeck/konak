import './services.css';
import styles from '../../app/page.module.css';

import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="header-container services--container">
      <div className={styles.max}>
        <div className="services--heading">
          <h1>Our <br /> Services</h1>
          <p>Our comprehensive range of services includes custom system design, engineering, procurement and construction. Whether you require a small-scale residential installation or a large-scale commercial project, we have the expertise and resources to deliver tailor-made solutions that meet your energy needs and financial goals.</p>
        </div>


        <div className="services--sub_container">

          <div className="services--sub_head">
            <Image 
              src="/energy-consultation.svg"
              width={32}
              height={32}
              alt="energy icon"
            />

            <div>
              <h3>Energy Consultation</h3>
              <p>Consult with us on your energy needs and we can help optimize it. With provision of well engineered systems and a team of highly competent engineers and technicians.</p>
            </div>
          </div>

          <div className="services--sub_head">
            <Image 
            src="/maintenance.svg"
            width={32}
            height={32}
            alt="gear icon"
            />

            <div>
              <h3>Solar maintenance</h3>
              <p>Well-executed maintenance coupled with detailed analysis of your energy needs and sage patterns guaranteeing long term optimum performance.</p>
            </div>
          </div>

          <div className="services--sub_head">
            <Image 
              src="/cold.svg"
              width={32}
              height={32}
              alt="snow icon"
            />

            <div>
              <h3>Cold room solutions</h3>
              <p>Konak offers sustainable cold room solutions powered by the sun. We understand the importance of reliable and eco-friendly cold storage and cost-effective options.</p>
            </div>
          </div>
      </div>
        </div>
    </div>
  )
}

export default Services