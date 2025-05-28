"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsModal from "./NewsModal";
import Link from "next/link";

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

interface NewsItem {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  shortDescription: string;
  fullStory: string;
  featured?: boolean;
  slug?: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    imageSrc: "/assets/images/agenda/agenda1.jpg",
    title: "New Campus Initiative Announced",
    date: "May 20, 2025",
    shortDescription:
      "A comprehensive plan to transform campus sustainability and student experience.",
    fullStory:
      "Today marks a pivotal moment in our campaign as we unveil a comprehensive campus initiative designed to revolutionize student life at the University of Ghana. This initiative encompasses sustainable practices, enhanced recreational facilities, and improved academic support systems. Through collaborative efforts with faculty, staff, and fellow students, we aim to create an environment where every student can thrive academically and personally. The plan includes new green spaces, upgraded technology infrastructure, and expanded mental health resources.",
    featured: true,
    slug: "new-campus-initiative-announced",
  },
  {
    id: "2",
    imageSrc: "/assets/images/agenda/agenda2.jpg",
    title: "Student Town Hall Meeting Success",
    date: "May 15, 2025",
    shortDescription:
      "Record attendance at our recent town hall discussing student concerns and solutions.",
    fullStory:
      "Our recent student town hall meeting exceeded all expectations with over 500 students in attendance, representing the largest student gathering in recent years. Students voiced their concerns about academic resources, campus security, dining options, and recreational facilities. We presented detailed action plans addressing each concern, including proposals for extended library hours, enhanced security measures, improved meal plans, and new sports facilities. The overwhelming positive response and constructive feedback received will directly influence our policy implementations.",
    featured: true,
    slug: "student-town-hall-meeting-success",
  },
  {
    id: "3",
    imageSrc: "/assets/images/agenda/agenda6.jpg",
    title: "Community Volunteer Drive Success",
    date: "May 10, 2025",
    shortDescription:
      "Students unite for community service, making a real difference in local neighborhoods.",
    fullStory:
      "This weekend's community volunteer drive showcased the incredible spirit of University of Ghana students as over 200 volunteers participated in various community service projects. Activities included environmental cleanup, tutoring local children, supporting elderly community members, and assisting in local food distribution programs. This initiative demonstrates our commitment to being responsible global citizens and making a positive impact beyond our campus boundaries.",
    featured: true,
    slug: "community-volunteer-drive-success",
  },
  {
    id: "4",
    imageSrc: "/assets/images/agenda/agenda4.jpg",
    title: "Innovation Tech Hub Launch",
    date: "May 5, 2025",
    shortDescription:
      "Cutting-edge technology center opens to support student entrepreneurship and innovation.",
    fullStory:
      "The new Innovation Tech Hub represents a significant investment in student success and technological advancement. Equipped with state-of-the-art computers, 3D printers, virtual reality systems, and collaborative workspaces, this facility will serve as a catalyst for student innovation and entrepreneurship. The hub will host workshops, hackathons, and mentorship programs connecting students with industry professionals and successful alumni.",
    slug: "innovation-tech-hub-launch",
  },
  {
    id: "5",
    imageSrc: "/assets/images/agenda/agenda5.jpg",
    title: "Inter-Hall Sports Festival Highlights",
    date: "April 28, 2025",
    shortDescription:
      "Exciting competition and sportsmanship displayed at the annual sports festival.",
    fullStory:
      "The annual inter-hall sports festival concluded with unprecedented participation and enthusiasm. Over 1,000 students competed in various sporting events including football, basketball, volleyball, track and field, and traditional games. The festival not only promoted physical fitness and healthy competition but also strengthened bonds between different halls and created lasting friendships across campus.",
    slug: "inter-hall-sports-festival-highlights",
  },
  {
    id: "6",
    imageSrc: "/assets/images/agenda/agenda3.jpg",
    title: "Cultural Night Celebration",
    date: "April 22, 2025",
    shortDescription:
      "A vibrant celebration showcasing the rich cultural diversity of our student body.",
    fullStory:
      "Our cultural night celebration was a spectacular showcase of the diverse backgrounds and traditions that make our university community so vibrant. Students from different regions and countries presented traditional dances, music, fashion, and cuisine. The event fostered cross-cultural understanding and appreciation while creating an inclusive environment where every student feels valued and represented.",
    slug: "cultural-night-celebration",
  },
];

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
            {" "}
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
            {" "}
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
          newsItem={selectedNews}
        />
      )}
    </section>
  );
};

export default Gallery;
