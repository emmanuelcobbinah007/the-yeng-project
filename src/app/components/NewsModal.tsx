"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NewsItem {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  shortDescription: string;
  fullStory: string;
  featured?: boolean;
}

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsItem: NewsItem;
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, newsItem }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="relative">
              <img
                src={newsItem.imageSrc}
                alt={newsItem.title}
                className="w-full h-[400px] md:h-[600px] object-cover object-top rounded-t-lg"
              />
              <button
                onClick={onClose}
                style={{ top: "5%" }}
                className="absolute right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  {newsItem.title}
                </h2>
                <p className="text-blue-600 text-sm font-medium">
                  {newsItem.date}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {newsItem.shortDescription}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {newsItem.fullStory}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Close
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsModal;