import React from "react";
import styles from "./why.module.css";
import Swieprsec from "../Swiper/Swieprsec";
import { whyData } from "@/Utils/Constants";
import Card from "../Cards/Card";
import line2 from "@/Assets/icons/lline.svg";
import Image from "next/image";

const Why = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textcon}>
        <div className={styles.align}>
          <span className={styles.sp}>
            HOW WE BUILD <br />
          </span>

          <span className={styles.blw}>WITH HYDRA VR?</span>
        </div>
        <Image src={line2} className={styles.aage} alt=" " />
        <div className={styles.leeft}>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </div>
      </div>
      <div className={styles.swipcon}>
        <Swieprsec />
      </div>
      <div className={styles.simple}>
        {whyData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;
