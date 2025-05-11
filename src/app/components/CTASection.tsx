"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, DownloadCloud, Handshake } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CTASection = () => {
  return (
    <section id="get-involved" className="bg-white text-[#0F1F3D] py-16 px-6">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-md md:text-lg text-gray-600 mb-8">
          Be part of the movement. Volunteer, reach out, or share the message.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+233XXXXXXXXX"
            className="bg-[#0F1F3D] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1e2d50] transition duration-300"
          >
            <PhoneCall size={20} />
            Call Michael
          </a>

          <a
            href="https://forms.gle/your-volunteer-form"
            target="_blank"
            className="bg-[#B51F2A] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#9e1b24] transition duration-300"
          >
            <Handshake size={20} />
            Volunteer
          </a>

          <a
            href="/assets/flyers/michael-yeng-flyer.pdf"
            download
            className="border border-[#0F1F3D] text-[#0F1F3D] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0F1F3D] hover:text-white transition duration-300"
          >
            <DownloadCloud size={20} />
            Download Flyer
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
