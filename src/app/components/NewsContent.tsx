"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface NewsContentProps {
  title: string;
  date: string;
  content: string;
  imageSrc: string;
  slug: string;
}

const NewsContent: React.FC<NewsContentProps> = ({
  title,
  date,
  content,
  imageSrc,
}) => {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="space-y-6"
      >
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${imageSrc}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="text-gray-500">{date}</p>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>
    </article>
  );
};

export default NewsContent;