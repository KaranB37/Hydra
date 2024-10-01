import React from "react";
import styles from "./how.module.css";
import Numswiper from "../Swiper/Numswiper";
import { slideData } from "@/Utils/Constants";
const How = () => {
  //   const howData = [
  //     { title: "3D Conception & Design" },
  //     { title: "Interaction Design" },
  //     { title: "VR World User Testing" },
  //     { title: "Hydra VR Deploy" },
  //   ];

  return (
    <div className={styles.main}>
      <div className={styles.textcon}>
        <span className={styles.sp}>
          HOW WE BUILD <br />
        </span>
        <span className={styles.blw}>WITH HYDRA VR?</span>
      </div>
      <div className={styles.be}>
        <Numswiper slides={slideData} />
      </div>
    </div>
  );
};

export default How;
