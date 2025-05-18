"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css";
import ReviewView from "./ReviewView";

const ReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      autoplay
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
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
