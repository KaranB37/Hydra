import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import styles from "./navbar.module.css";
import newlogo from "@/Assets/logo.svg";
import name from "@/Assets/name.svg";
import { navLinks } from "@/Utils/Constants";
import { useRouter } from "next/router";
import Hamburger from "@/Assets/Hamburger.svg";
const Navbar = ({ mobNav, setmobNav }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const path = router.pathname;
    if (path === "/faqs") {
      setActiveLink("projects");
    } else if (path === "/") {
      setActiveLink("home");
    }
  }, [router.pathname]);

  //   const handleLinkClick = (id, e) => {
  //     e.preventDefault();
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //       setActiveLink(id);
  //     }
  //   };

  //   // Update the handleLinkClick function
  // const handleLinkClick = (id, href, e) => {
  //   e.preventDefault(); // Prevent default link behavior

  //   if (id === "contact") {
  //     // Open the blog link in the same tab
  //     window.location.href = href;
  //   } else {
  //     // Use Next.js router for internal navigation
  //     router.push(href);
  //   }
  // };

  const handleLinkClick = (id, href, e) => {
    e.preventDefault(); // Prevent default link behavior

    // Check if the href is an external link
    if (href.startsWith("http")) {
      // Open the external link in the same tab
      window.location.href = href;
    } else {
      // For internal navigation
      setActiveLink(id);
      router.push(href);
    }
  };

  return (
    <nav className={styles.nav}>
      {/* <div> */}
      <Link href="/" passHref className={styles.logo}>
        <Image src={newlogo} className={styles.bottle} alt="logo " />
        <div className={styles.align}>
          <Image src={name} className={styles.name} alt=" HYDRA" />
        </div>
      </Link>
      {/* <span className={styles.logo_name}>ONE SQUARE</span> */}
      {/* </div> */}
      <ul className={`${styles.links} ${styles.space}`}>
        {navLinks.map(({ id, label, href }) => (
          <li
            key={id}
            className={activeLink === id ? styles.active : ""}
            style={{ cursor: "pointer" }}
            onClick={(e) => handleLinkClick(id, href, e)}
          >
            <span
              className={`${styles.link_a} ${
                activeLink === id ? styles.active : ""
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        <li>
          <div className={styles.btncon}>
            <button
              className={styles.login}
              // onClick={() =>
              //   router.push("https://blessed-perch-83.accounts.dev/sign-in")
              // }
            >
              CONTACT US
            </button>
            <button
              className={styles.signup}
              // onClick={() =>
              //   router.push("https://blessed-perch-83.accounts.dev/sign-in")
              // }
            >
              JOIN HYDRA
            </button>
          </div>
        </li>
      </ul>
      <div className={styles.burg_cont}>
        <Image
          // size={30}
          alt="MENU"
          src={Hamburger}
          className={styles.burgerMenu}
          onClick={() => setmobNav(!mobNav)}
        />
        {/* {mobNav ? (
        
        ) : (
          <BiMenu
            // size={30}
            className={styles.burgerMenu}
            onClick={() => setmobNav(true)}
          />
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
