"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Share2, CreditCard } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GetInvolved = () => {
  return (
    <section className="bg-[#0F1F3D] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-200">
          Join us in shaping the future of the University of Ghana. Your support
          can create real change.
        </p>

        {/* CTA Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
            className="bg-blue-800 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <UserPlus className="w-12 h-12 mb-4 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-200 text-sm">
              Help out with events, spread the word, or assist in campaign
              activities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={1}
            className="bg-blue-800 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <Share2 className="w-12 h-12 mb-4 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Share the Campaign</h3>
            <p className="text-gray-200 text-sm">
              Tell your friends and family about Michael’s vision on social media!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={2}
            className="bg-blue-800 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <CreditCard className="w-12 h-12 mb-4 text-yellow-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Donate</h3>
            <p className="text-gray-200 text-sm">
              Your contribution helps fund campaign activities and student initiatives.
            </p>
          </motion.div>
        </div>

        {/* Small Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={3}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Get Involved Now</h3>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="How would you like to help?"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg text-lg hover:bg-yellow-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
