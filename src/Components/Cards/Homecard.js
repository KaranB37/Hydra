import React from "react";
import styles from "./card.module.css";
import location from "@/Assets/loc.svg";
import Image from "next/image";
const Homecard = ({ e }) => {
  return (
    <div className={styles.loccon}>
      {/* <div className={styles.misc}> */}
      <Image src={e.icon} className={styles.miscimg} alt=" " />
      {/* </div> */}
      <div className={styles.miscd}>{e.value}</div>
    </div>
  );
};

export default Homecard;
