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

import tech1 from "@/Assets/techimages/tech1.png";
import tech2 from "@/Assets/techimages/tech2.png";
import tech3 from "@/Assets/techimages/tech3.png";
import tech4 from "@/Assets/techimages/tech4.png";

const Allswiper = () => {
  const swiperRef = React.useRef(null);

  // Array of image URLs
  const images = [tech1, tech2, tech3, tech4];

  return (
    <div className={styles.mainicon}>
      <div className={styles.swipercon2}>
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
          {/* Map through the images array */}
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.techimg}
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

export default Allswiper;
