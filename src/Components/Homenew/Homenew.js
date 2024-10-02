import React from "react";
import styles from "./abc.module.css";
import { homeData } from "@/Utils/Constants";
import location from "@/Assets/loc.svg";
import mail from "@/Assets/mail.svg";
import phone from "@/Assets/phone-call.svg";
import Image from "next/image";
const Homenew = () => {
  return (
    <div className={styles.show}>
      <div className={styles.line} />
      <div className={styles.line2} />
      <div className={styles.inner}>
        {/* <Homecard homeData={homeData}/> */}
        <div className={styles.con}>
          <Image src={location} className={styles.miscimg} alt="location" />
          {/* </div> */}
          <div className={styles.align}>
            <div className={styles.sp}>Pay Us a Visit</div>

            <div className={styles.miscd}>
              Union St, Seattle, WA 98101, United States
            </div>
          </div>
        </div>
        <div className={styles.con}>
          <Image src={phone} className={styles.miscimg} alt="phone" />
          <div className={styles.align}>
            {/* </div> */}
            <div className={styles.sp}>Give Us a Call</div>

            <div className={styles.miscd}>(110) 1111-1010</div>
          </div>
        </div>
        <div className={styles.con}>
          <Image src={mail} className={styles.miscimg} alt="Mail" />
          {/* </div> */}
          <div className={styles.align}>
            <div className={styles.sp}>Send Us a Message</div>
            <div className={styles.miscd}>Contact@HydraVTech.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homenew;
