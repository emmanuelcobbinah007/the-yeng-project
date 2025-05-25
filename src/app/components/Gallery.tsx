"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Replace these with the actual filenames of your images in public/assets/images/agenda/
const agendaImages = [
  "/assets/images/agenda/agenda1.jpg", // Replace agenda1.jpg with your actual filename
  "/assets/images/agenda/agenda2.jpg", // Replace agenda2.jpg with your actual filename
  "/assets/images/agenda/agenda3.jpg", // Replace agenda3.jpg with your actual filename
  "/assets/images/agenda/agenda4.jpg", // Replace agenda4.jpg with your actual filename
  "/assets/images/agenda/agenda5.jpg", // Replace agenda5.jpg with your actual filename
  "/assets/images/agenda/agenda6.jpg", // Replace agenda6.jpg with your actual filename
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="w-[85%] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className=""
        >
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {agendaImages.map((src, index) => (
            <motion.div
              key={index}
              variants={imageVariant}
              className="overflow-hidden rounded-lg shadow-lg group aspect-w-3 aspect-h-2" // Using aspect ratio for consistent image display
            >
              <img
                src={src}
                alt={`Agenda Image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;