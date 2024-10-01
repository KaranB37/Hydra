import React from "react";
import styles from "./card.module.css";

const Numbercard = (e) => {
  console.log(e.description);
  return (
    <div className={styles.numcon}>
      <div className={styles.mask}>
        <div className={styles.num}>{e.description}</div>
      </div>
      <div className={styles.desc2}>{e.title}</div>
    </div>
  );
};

export default Numbercard;
