"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  const partners = [
    {
      src: "/images/company-logo-1.png",
    },
    {
      src: "/images/company-logo-2.png",
    },
    {
      src: "/images/company-logo-3.png",
    },
    {
      src: "/images/company-logo-4.png",
    },
    {
      src: "/images/company-logo-5.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: "auto",
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        slidesPerView="auto"
        spaceBetween={4}
        className="w-full"
        loop
        modules={[Autoplay]}
        speed={5000}
      >
        {partners.map((partner, i) => (
          <SwiperSlide key={i} className="w-fit">
            <div className="relative h-12">
              <Image
                objectFit="contain"
                fill
                className="absolute"
                src={partner.src}
                alt="company logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
};

export default Partners;
