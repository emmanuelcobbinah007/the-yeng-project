"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bus, Wifi, ShieldCheck, Handshake } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const priorities = [
  {
    icon: <Bus className="w-8 h-8 text-blue-700 mb-4" />,
    title: "Affordable Transport",
    description: "Negotiate reduced fares and improve shuttle routes for students.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-700 mb-4" />,
    title: "Better Internet Access",
    description: "Advocate for stable and affordable campus-wide connectivity.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700 mb-4" />,
    title: "Accountability & Transparency",
    description: "Public spending reports and open forums every semester.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-700 mb-4" />,
    title: "Student Welfare",
    description: "Prioritize health, safety, and mental wellness support systems.",
  },
];

const Priorities = () => {
  return (
    <section id="the-agenda" className="bg-white py-20 px-6">
      <div className="w-[85%] mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          Agenda
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-12">
          These are the core issues I’m committed to solving as your SRC President.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Priorities;
