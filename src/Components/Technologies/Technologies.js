import React from "react";
import styles from "./tech.module.css";
import Allswiper from "../Swiper/Allswiper";
import tech1 from "@/Assets/techimages/tech1.png";
import tech2 from "@/Assets/techimages/tech2.png";
import tech3 from "@/Assets/techimages/tech3.png";
import tech4 from "@/Assets/techimages/tech4.png";
import Image from "next/image";

// Array of image URLs
const images = [tech1, tech2, tech3, tech4];

const getTechName = (index) => {
  switch (index) {
    case 0:
      return "VR Simulation";
    case 1:
      return "VR Education";
    case 2:
      return "VR Self-Care";
    case 3:
      return "VR Outdoor Adventures";
    default:
      return "Unknown Technology";
  }
};

const Technologies = () => {
  return (
    <div className={styles.main}>
      <div className={styles.newnew}>
        <div className={styles.head}>
          <span className={styles.t1}>TECHNOLOGIES & HARDWARE</span>
          <span className={styles.t2}>USED BY HYDRA VR.</span>
        </div>
      </div>

      <div style={{ paddingTop: "10px" }} className={styles.hide}>
        <Allswiper className={styles.hide} />
      </div>
      <div className={styles.simple} style={{ paddingTop: "10px" }}>
        {" "}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`VR Technology ${index + 1} - ${getTechName(index)}`}
            className={styles.techimg}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
