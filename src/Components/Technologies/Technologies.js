import React from "react";
import styles from "./tech.module.css";
import Allswiper from "../Swiper/Allswiper";
const Technologies = () => {
  return (
    <div className={styles.main}>
      <div style={{ padding: "0px 21px" }}>
        <div className={styles.head}>
          <span className={styles.t1}>TECHNOLOGIES & HARDWARE</span>
          <span className={styles.t2}>USED BY HYDRA VR.</span>
        </div>
      </div>

      <div style={{ paddingTop: "10px" }}>
        <Allswiper />
      </div>
    </div>
  );
};

export default Technologies;
