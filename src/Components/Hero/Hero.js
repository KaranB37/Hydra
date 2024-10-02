import React from "react";
import styles from "./hero.module.css";
import heroimg from "@/Assets/heroimg2.png";
import Image from "next/image";
import ol1 from "@/Assets/vectors/home1.svg";
import ol2 from "@/Assets/vectors/home2.svg";
import ol3 from "@/Assets/vectors/home3.svg";
import aa1 from "@/Assets/vectors/aa11.svg";
import aa2 from "@/Assets/vectors/aa2.svg";
import aa3 from "@/Assets/vectors/aa3.svg";
import aa12 from "@/Assets/vectors/aa12.svg";
import aa from "@/Assets/homeaa.svg";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.con}>
        <Image src={ol1} className={styles.overlay1} alt="." />
        <Image src={aa1} className={styles.overlay4} alt="." />
        <Image src={aa2} className={styles.overlay5} alt="." />
        <Image src={aa3} className={styles.overlay6} alt="." />
        <Image src={aa12} className={styles.overlay7} alt="." />
        <Image src={ol2} className={styles.overlay2} alt="." />
        <Image src={ol3} className={styles.overlay3} alt="." />
        <div className={styles.mask}>
          <Image src={heroimg} className={styles.heroimg} alt="A." />
        </div>
        <div className={styles.left}>
          <div className={styles.text}>
            <div>
              <span className={styles.sp}>Dive </span>{" "}
              <span className={styles.small}>
                Into The Depths
                <br />
                Of
              </span>
              <span className={styles.sp}> Virtual Reality</span>
            </div>
            <div className={styles.shownew}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </div>
          </div>
          <div className={styles.cc}>
            <div className={styles.button}>BUILD YOUR WORLD</div>
            <Image src={aa} className={styles.cc} alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
