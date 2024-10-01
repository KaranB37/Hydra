import React from "react";
import styles from "./ss.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { whyData } from "@/utils/Constants";
import NextArrow from "@/Assets/right.svg";
import PrevArrow from "@/Assets/left.svg";
import Image from "next/image";
import Card from "../Cards/Card";

const Swieprsec = () => {
  const swiperRef = React.useRef(null);

  return (
    <div className={styles.main}>
      <div className={styles.swipercon}>
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
          {whyData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={item.title}
                description={item.description}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={styles.customPrevButton}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div className={styles.mask}>
            <Image src={PrevArrow} alt="Previous" className={styles.arr} />
          </div>
        </div>
        <div
          className={styles.customNextButton}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <div className={styles.mask}>
            <Image src={NextArrow} alt="Next" className={styles.arr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swieprsec;
