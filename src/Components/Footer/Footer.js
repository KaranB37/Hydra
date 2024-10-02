import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import logo from "@/Assets/logo.svg";
import instagram from "@/Assets/icons/instagram.svg";
import facebook from "@/Assets/icons/facebook.svg";
import twitter from "@/Assets/icons/twitter.svg";
import youtube from "@/Assets/icons/youtube.svg";
import pinterest from "@/Assets/icons/pinterest.svg";
import linkedin from "@/Assets/icons/linkedin.svg";
import bg1 from "@/Assets/vectors/bg1.svg";
import bg2 from "@/Assets/vectors/bg2.svg";
import { firstArray, secondArray } from "@/Utils/Constants";
import line from "@/Assets/icons/footline.svg";
import foot1 from "@/Assets/vectors/foot1.svg";
import foot2 from "@/Assets/vectors/foot2.svg";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={bg1} className={styles.overlay1} alt="." />
      <Image src={bg2} className={styles.overlay2} alt="." />
      <Image src={foot1} className={styles.oly1} alt="." />
      <Image src={foot2} className={styles.oly2} alt="." />
      <div className={styles.above}>
        <div className={styles.con}>
          <Image src={logo} className={styles.logo} alt="." />
        </div>
        <div className={styles.second}>
          <Image src={line} alt=" " className={styles.line1} />

          {firstArray.map((e, index) => (
            <span key={index}>{e.name}</span>
          ))}
        </div>
        <div className={styles.third}>
          <Image src={line} alt=" " className={styles.line2} />

          {secondArray.map((e, index) => (
            <span key={index}>{e.name}</span>
          ))}
        </div>
        <div className={styles.last}>
          <Image src={line} alt=" " className={styles.line3} />
          <span className={styles.text}>SOCIALIZE WITH HYDRA</span>
          <div className={styles.socialcon}>
            <Image src={facebook} alt="facebook " className={styles.social} />
            <Image src={twitter} alt="twitter" className={styles.social} />
            <Image src={linkedin} alt="linkedin" className={styles.social} />
            <Image src={youtube} alt="youtube" className={styles.social} />
            <Image src={instagram} alt="instagram" className={styles.social} />
            <Image src={pinterest} alt="pinterest" className={styles.social} />
          </div>
          <div className={styles.center2}>
            <div className={styles.button}>BUILD YOUR WORLD</div>
          </div>
        </div>
      </div>
      <div className={styles.below}>
        <div className={styles.center}>
          <div className={styles.line} />
        </div>
        <div className={styles.bottom}>
          <span className={styles.tt}>2023 © HYDRA LANDING PAGE</span>
          <span className={styles.tt}>BY ZINE. E. FALOUTI</span>
          <span className={styles.tt}>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
