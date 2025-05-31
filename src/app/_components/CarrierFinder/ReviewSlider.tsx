"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {  A11y, Autoplay } from "swiper/modules";

import "swiper/css";

import ReviewView from "@/components/ReviewView";

const ReviewSlider = () => {


  return (
    <Swiper
      spaceBetween={24}
      slidesPerView='auto'
      autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={5000}
      
        modules={[Autoplay, A11y]}
    >
      <SwiperSlide>
        <ReviewView />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewView />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewView />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewView />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
