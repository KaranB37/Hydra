import React from "react";
import styles from "./ss.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import NextArrow from "@/Assets/right.svg";
import PrevArrow from "@/Assets/left.svg";
import Image from "next/image";
import Numbercard from "../Cards/numbercard";

const Numswiper = ({ slides }) => {
  const swiperRef = React.useRef(null);

  return (
    <div className={styles.nummain}>
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Numbercard
                number={index + 1}
                title={slide.title}
                description={slide.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={styles.customPrevButtonNum}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div className={styles.mask}>
            <Image src={PrevArrow} alt="Previous" className={styles.arr} />
          </div>
        </div>
        <div
          className={styles.customNextButtonNum}
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

export default Numswiper;
