import React from "react";
import styles from "./form.module.css";

export default function Form() {
  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>JOIN HYDRA</h1>
        <div className={styles.line} />
        <p className={styles.description}>
          Let&apos;s Build Your VR Experience
        </p>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="First Name"
            className={styles.input}
          />
          <input type="text" placeholder="Last Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="tel"
            placeholder="Phone Number"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Subject"
            className={`${styles.lasto} ${styles.input}`}
          />
          <textarea
            placeholder="Tell Us Something..."
            className={styles.textarea}
          ></textarea>
          <div className={styles.center}>
            <button type="submit" className={styles.button}>
              SEND TO HYDRA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
