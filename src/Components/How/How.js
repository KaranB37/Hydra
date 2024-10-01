import React from "react";
import styles from "./how.module.css";
import Numswiper from "../Swiper/Numswiper";
import { slideData } from "@/Utils/Constants";
import Numcard from "../Cards/Numcard";
import Image from "next/image";
import line from "@/Assets/icons/bigline.svg";
import line2 from "@/Assets/icons/lline.svg";

const How = () => {
  //   const howData = [
  //     { title: "3D Conception & Design" },
  //     { title: "Interaction Design" },
  //     { title: "VR World User Testing" },
  //     { title: "Hydra VR Deploy" },
  //   ];

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
      <div className={styles.be}>
        <Numswiper slides={slideData} />
      </div>
      <div className={styles.show}>
        <Image src={line} className={styles.bigline} alt=" " />
        {slideData.map((e, index) => (
          <Numcard
            show={true}
            key={index}
            title={e.title}
            description={e.description}
          />
        ))}
      </div>
    </div>
  );
};

export default How;
