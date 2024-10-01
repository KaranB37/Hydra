import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import arr from "@/Assets/icons/bigarr.svg";
const Numcard = (e) => {
  // console.log(e);
  return (
    <div className={styles.numcon}>
      <div className={styles.mask}>
        <div className={styles.num}>{e.description}</div>
      </div>
      <div className={styles.biga}>
        {e.show === true ? (
          <Image src={arr} className={styles.iimmgg} alt=" " />
        ) : (
          ""
        )}
        <div className={styles.desc2}>{e.title}</div>
      </div>
    </div>
  );
};

export default Numcard;
