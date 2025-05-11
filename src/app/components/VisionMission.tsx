"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const VisionMission = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="w-[85%] mx-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* What I Stand For */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            What I Stand For
          </h2>
          <ul className="space-y-4 text-gray-800">
            {[
              "Empowered Students",
              "Transparent Leadership",
              "Better Campus Life",
              "Fair Representation",
              "Innovation & Progress",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-blue-700 mt-1" size={20} />
                <span className="text-md md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            My Mission
          </h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            My mission is to build a responsive, student-centered SRC that
            delivers real solutions. I’m committed to improving access to
            resources, making our voices heard at every level of decision
            making, and fostering a culture where every student thrives.
          </p>

          <div className="mt-6 bg-blue-100 text-blue-800 p-4 rounded-xl text-center font-semibold shadow-inner">
            “Student First. Always.”
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default VisionMission;
