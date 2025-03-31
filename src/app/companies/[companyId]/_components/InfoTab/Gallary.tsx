"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
          src={selectedImage}
          alt="Selected"
          className="w-full h-[380px] rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Gallery Thumbnails */}
      <div className="grid grid-cols-3 gap-2 w-1/2">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Gallery Thumbnail"
            className={`w-full object-cover rounded-md cursor-pointer max-h-24 ${
              selectedImage === img ? "border-2 border-blue-500" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
