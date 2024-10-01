import React from "react";
import styles from "./mn.module.css";
import Link from "next/link";

const Mobilenavbar = (props) => {
  const closefn = () => {
    props.setmobNav(false);
  };

  return (
    <div
      className={styles.mobilenavbar}
      style={props.mobNav ? { left: 0 } : { width: "0%" }}
    >
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <span onClick={closefn}>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <span onClick={closefn}>ABOUT</span>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <span onClick={closefn}>PRICING</span>
          </Link>
        </li>
        <li>
          <Link href="/#faqs">
            {" "}
            {/* Changed to point to FAQ */}
            <span onClick={closefn}>FAQ&apos;S</span>
          </Link>
        </li>
        <li>
          {/* <Link href="https://agentcoachblogteamlumio.wordpress.com/"> */}{" "}
          {/* Assuming you want to keep this as BLOG */}
          <span onClick={closefn}>BLOG</span>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Mobilenavbar;
