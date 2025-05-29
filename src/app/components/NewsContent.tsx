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

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
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
}) => {  return (    <article className="max-w-5xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="space-y-6 sm:space-y-8"
      >        {/* Hero Image */}
        <motion.div 
          variants={fadeInUp}
          className="relative h-[250px] sm:h-[500px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              console.error(`Failed to load image: ${imageSrc}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Article Header */}
        <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <div className="flex items-center space-x-2">
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
            <p className="text-sm sm:text-base text-gray-500 font-medium">{date}</p>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          variants={fadeInUp}
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
                     prose-headings:text-gray-900 prose-headings:font-bold
                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
                     prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-gray-900 prose-strong:font-semibold
                     prose-ul:space-y-2 prose-li:text-gray-700
                     prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
                     [&>*]:mb-4 sm:[&>*]:mb-6
                     [&>h1]:text-xl sm:[&>h1]:text-2xl lg:[&>h1]:text-3xl
                     [&>h2]:text-lg sm:[&>h2]:text-xl lg:[&>h2]:text-2xl
                     [&>h3]:text-base sm:[&>h3]:text-lg lg:[&>h3]:text-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Back to News Link */}
        <motion.div variants={fadeInUp} className="pt-6 sm:pt-8 border-t border-gray-200">
          <Link 
            href="/#news" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 
                       font-medium transition-colors duration-200 group"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm sm:text-base">Back to News</span>
          </Link>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default NewsContent;