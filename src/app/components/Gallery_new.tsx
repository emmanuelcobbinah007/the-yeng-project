"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsModal from "./NewsModal";
import Link from "next/link";
import { newsData, NewsItem } from "../types/news";

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

const Gallery = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent, newsItem: NewsItem) => {
    e.preventDefault();
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  // Filter featured and non-featured news
  const featuredNews = newsData.filter((item) => item.featured);
  const regularNews = newsData.filter((item) => !item.featured);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // We'll use custom arrows
  };

  return (
    <section id="news" className="py-20 px-6 bg-gray-50">
      <div className="w-[85%] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Keep up with the Movement
          </h2>
          <p className="text-md md:text-lg text-gray-600 mb-12">
            Stay updated with the latest happenings and announcements.
          </p>
        </motion.div>

        {/* Featured News Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            Featured News
          </h3>

          {/* Show individual cards only on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="hidden md:block"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredNews.map((item) => (
                <Link href={`/news/${item.slug}`} key={item.id}>
                  <motion.div
                    variants={imageVariant}
                    className="relative overflow-hidden rounded-lg shadow-lg group md:h-[500px] cursor-pointer bg-gray-200"
                    onClick={(e) => openModal(e, item)}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.imageSrc}`);
                        e.currentTarget.style.display = "none";
                      }}
                      onLoad={() =>
                        console.log(`Successfully loaded: ${item.imageSrc}`)
                      }
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out flex flex-col justify-end p-4">
                      <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {item.shortDescription}
                      </p>
                      <p className="text-blue-300 text-xs mt-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                        {item.date}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Show slider only on mobile */}
          <div className="block md:hidden pb-8">
            <Slider {...sliderSettings} className="featured-news-slider">
              {featuredNews.map((item) => (
                <div key={item.id} className="px-2">
                  <Link href={`/news/${item.slug}`}>
                    <motion.div
                      variants={imageVariant}
                      className="relative overflow-hidden rounded-lg shadow-lg group h-96 cursor-pointer bg-gray-200"
                      onClick={(e) => openModal(e, item)}
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className=" w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        onError={(e) => {
                          console.error(
                            `Failed to load featured image: ${item.imageSrc}`
                          );
                          e.currentTarget.style.display = "none";
                        }}
                        onLoad={() =>
                          console.log(
                            `Successfully loaded featured: ${item.imageSrc}`
                          )
                        }
                      />
                      {/* Hover Overlay for Featured News */}
                      <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out flex flex-col justify-end p-6">
                        <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          {item.shortDescription}
                        </p>
                        <p className="text-blue-300 text-sm mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                          {item.date}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Regular News Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            More News
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Link href={`/news/${item.slug}`} key={item.id}>
                <motion.div
                  key={item.id}
                  variants={imageVariant}
                  className="relative overflow-hidden rounded-lg shadow-lg group md:h-[500px] cursor-pointer bg-gray-200"
                  onClick={(e) => openModal(e, item)}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    onError={(e) => {
                      console.error(`Failed to load image: ${item.imageSrc}`);
                      e.currentTarget.style.display = "none";
                    }}
                    onLoad={() =>
                      console.log(`Successfully loaded: ${item.imageSrc}`)
                    }
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {item.shortDescription}
                    </p>
                    <p className="text-blue-300 text-xs mt-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                      {item.date}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <NewsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedNewsItem={selectedNews}
        />
      )}
    </section>
  );
};

export default Gallery;
