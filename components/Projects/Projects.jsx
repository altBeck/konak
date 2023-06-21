"use client";

import React, { useState } from "react";

import './projects.css';
import styles from '../../app/page.module.css';

import Image from 'next/image';

const Projects = () => {
  const [enlarged, setEnlarged] = useState(false);

  const handleImageClick = () => {
    setEnlarged(!enlarged);
  };

  const imageClassName = enlarged ? 'image enlarged' : 'image';

  return (
    <div className="project">
      <div className={styles.max}>
        <div className="services--heading projects--main">
          <h1>Our Projects</h1>
          <p>We are experienced in providing integrated solutions, from conception to construction including project siting and permitting, and solar leasing.</p>
        </div>

        <div>
          <video
            width="1100"
            height="620"
            controls
          >
            <source src="/temp_video_for_share.mp4"
            type="video/mp4" />
          </video>


          <div className="panel-gallery">
            <div className="panel-image">
              <Image
                src="/image1.jpg" 
                width={333}
                height={249}
                alt="image1"
                className={imageClassName}
                onClick={handleImageClick} 
              />
              <Image
                src="/Photo_1080295806_DJI_382_jpg_8377260_0_2021825141732_photo_original.jpg" 
                width={333}
                height={249}
                alt="solar installation"
                className={imageClassName}
                onClick={handleImageClick}
              />

              <Image
                src="/Photo_1080295804_DJI_380_jpg_6896280_0_2021825141632_photo_original.jpg" 
                width={333}
                height={249}
                alt="solar installation"
                className={imageClassName}
                onClick={handleImageClick}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects