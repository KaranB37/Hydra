import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ title, description, img }) => {
  return (
    <div className={styles.cardcon}>
      <div className={styles.container}>
        <Image src={img} className={styles.img} alt={title} />
      </div>
      <span className={styles.text}>{title}</span>
      <div className={styles.line} />
      <span className={styles.desc}>{description}</span>
      <div className={styles.button}>TRY IT NOW</div>
    </div>
  );
};

export default Card;
