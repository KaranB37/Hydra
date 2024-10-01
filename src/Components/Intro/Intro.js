import React from "react";
import styles from "./intro.module.css";
import introimg from "@/Assets/introimg.jpeg";
import Image from "next/image";
import line2 from "@/Assets/icons/lline.svg";
import above from "@/Assets/vectors/about1.svg";
import below from "@/Assets/vectors/about2.svg";

const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textcon}>
        <div className={styles.align}>
          <span className={styles.sp}>
            INTRODUCTION <br />
          </span>

          <span className={styles.blw}>TO HYDRA VR</span>
        </div>
        <Image src={line2} className={styles.aage} alt=" " />
        <div className={styles.leeft}>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </div>
      </div>
      <div className={styles.below}>
        <Image src={above} className={styles.oly1} alt=" " />
        <Image src={below} className={styles.oly2} alt=" " />
        <div className={styles.mask}>
          <Image src={introimg} className={styles.heroimg} alt=" " />
        </div>
        <div className={styles.ok}>
          <div className={styles.align}>
            <span className={styles.spa}>ABOUT</span>
            <span>HYDRA VR</span>
          </div>
          <div className={styles.text}>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipisci ng at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat sem per viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudin tempor.
          </div>
          <div className={styles.center}>
            <div className={styles.button}>LET&apos;S GET IN TOUCH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
