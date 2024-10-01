import React from "react";
import styles from "./intro.module.css";
import introimg from "@/Assets/introimg.jpeg";
import Image from "next/image";
const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.uptxt}>
        <span className={styles.sp}>INTRODUCTION</span>
        <span>TO HYDRA VR</span>
      </div>
      <div className={styles.mask}>
        <Image src={introimg} className={styles.heroimg} alt=" " />
      </div>
      <div className={styles.text}>
        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
        rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
        Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
        risus viverra adipisci ng at in. Mattis aliquam faucibus purus in massa.
        Est placerat in egestas erat imperdiet sed. Consequat sem per viverra
        nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque
        in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros
        donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl
        suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
      </div>
      <div className={styles.center}>
        <div className={styles.button}>LET&apos;S GET IN TOUCH</div>
      </div>
    </div>
  );
};

export default Intro;
