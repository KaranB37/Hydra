import React from "react";
import styles from "./ss.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import NextArrow from "@/Assets/icons/righthome.svg";
import PrevArrow from "@/Assets/icons/lefthome.svg";
import Image from "next/image";
import Card from "../Cards/Card";
import { homeData } from "@/Utils/Constants";
import Homecard from "../Cards/Homecard";

const Misc = () => {
  const swiperRef = React.useRef(null);

  return (
    <>
      {" "}
      <div className={styles.main}>
        <div className={styles.swiperconhome}>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {homeData.map((item, index) => (
              <SwiperSlide key={index}>
                <Homecard e={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={styles.customPrevButtonHome}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={PrevArrow} alt="Previous" className={styles.arr2} />
          </div>
          <div
            className={styles.customNextButtonHome}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={NextArrow} alt="Next" className={styles.arr2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Misc;
