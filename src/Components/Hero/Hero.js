import React from "react";
import styles from "./hero.module.css";
import heroimg from "@/Assets/heroimg.png";
import Image from "next/image";
import ol1 from "@/Assets/vectors/home1.svg";
import ol2 from "@/Assets/vectors/home2.svg";
import ol3 from "@/Assets/vectors/home3.svg";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.con}>
        <Image src={ol1} className={styles.overlay1} alt=" " />
        <Image src={ol2} className={styles.overlay2} alt=" " />
        <Image src={ol3} className={styles.overlay3} alt=" " />
        <div className={styles.mask}>
          <Image src={heroimg} className={styles.heroimg} alt=" " />
        </div>
        <div className={styles.text}>
          <span className={styles.sp}>Dive</span>{" "}
          <span className={styles.small}>
            Into The Depths
            <br />
            Of{" "}
          </span>
          <span className={styles.sp}>Virtual Reality</span>
        </div>
        <div className={styles.button}>BUILD YOUR WORLD</div>
      </div>
    </div>
  );
};

export default Hero;
