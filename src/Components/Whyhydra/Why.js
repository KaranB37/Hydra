import React from "react";
import styles from "./why.module.css";
import Swieprsec from "../Swiper/Swieprsec";
const Why = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textcon}>
        <span className={styles.sp}>
          WHY BUILD <br />
        </span>
        <span className={styles.blw}>WITH HYDRA?</span>
      </div>
      <div className={styles.swipcon}>
        <Swieprsec />
      </div>
    </div>
  );
};

export default Why;
