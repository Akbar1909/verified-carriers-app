"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ReviewView from "@/components/ReviewView";


const ReviewSlide = () => {
  const reviews = new Array(12).fill({});

 

  return (
    <div className="flex flex-col gap-4">
      <Swiper
        spaceBetween={4}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        modules={[Autoplay]}
        className="w-full"
        
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="!w-80">
            <ReviewView />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={4}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={7000}
        
        modules={[Autoplay]}
        className="w-full"
      
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="!w-80">
            <ReviewView />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlide;
