
import './projects.css';
import styles from '../../app/page.module.css';

import Image from "next/image";

const Projects = () => {


  return (
    <div className="project">
      <div className={styles.max}>
        <div className="services--heading projects--main">
          <h1>Our Projects</h1>
          <p>We are experienced in providing integrated solutions, from conception to construction including project siting and permitting, and solar leasing.</p>
        </div>

        <div>
          <video
            width="1068"
            height="600"
            controls
          >
            <source src="/temp_video_for_share.mp4"
            type="video/mp4" />
          </video>


          <div className="panel-gallery">
            <div className="panel-image">
              <Image
                src="/image1.JPG"
                width={333}
                height={249}
                alt="image1"
                className={`imageClassName`}
              />
              <Image
                src="/img2.JPG" 
                width={333}
                height={249}
                alt="solar installation"
                className={`imageClassName`}
              />

              <Image
                src="/img1.JPG" 
                width={333}
                height={249}
                alt="solar installation"
                className={`imageClassName`}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects