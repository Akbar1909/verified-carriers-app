"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import { returnArray } from "@/utils/common";

const images = [
  "/images/truck.png", // Main image
  "/images/truck.png",
  "/images/truck.png",
  "/images/broadway.png",
  "/images/truck.png",
  "/images/truck.png",
  "/images/truck.png",
  "/images/truck.png",
  "/images/truck.png",
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { params } = useAppNavigation();

  const companyId = params.companyId as string;

  const { company } = useGetCompanyById(companyId);

  const photos = returnArray(company.companyLogos);

  

  return (
    <div className="flex gap-4 p-4">
      {/* Smaller Main Image */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          alt="Selected"
          src={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${photos[selectedImageIndex]?.file?.id}`}
          className="w-full h-[380px] rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Gallery Thumbnails */}
      <div className="grid grid-cols-3 gap-2 w-1/2">
        {photos.map((img, index) => (
          <motion.img
            key={index}
            src={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${img?.file?.id}`}
            alt="Gallery Thumbnail"
            className={`w-full object-cover rounded-md cursor-pointer max-h-24 ${
              selectedImageIndex === index ? "border-2 border-blue-500" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
