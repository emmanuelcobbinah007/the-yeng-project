"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Share2, X, Copy, Mail } from "lucide-react";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaTelegram,
} from "react-icons/fa";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  slug: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  slug,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const getShareUrl = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return `${baseUrl}/news/${slug}`;
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      onClick: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n\n${description}\n\n${getShareUrl()}`)}`, '_blank');
      },
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      onClick: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getShareUrl())}`, '_blank');
      },
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={24} />,
      onClick: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank');
      },
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={24} />,
      onClick: () => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(title)}`, '_blank');
      },
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      onClick: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${getShareUrl()}`)}`;
      },
    },
    {
      name: "Copy Link",
      icon: <Copy size={24} />,
      onClick: async () => {
        await navigator.clipboard.writeText(getShareUrl());
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      },
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl w-full max-w-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-blue-900">Share This Story</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.onClick}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {option.icon}
                  <span className="text-sm text-gray-600">
                    {option.name === "Copy Link" && copySuccess ? "Copied!" : option.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;