import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import auroraLogoWhite from "../../../public/assets/images/auroraLogoWhite.png";
import logoWhite from "../../../public/assets/images/logowhitenobg.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Campaign Info with Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <div className="flex items-center gap-3 mb-1">
    <img
      src={logoWhite.src}
      alt="Campaign Logo"
      className="w-12 h-12 md:w-10 md:h-10 object-contain"
    />
    <div className="flex flex-col items-start">
      <h4 className="text-md md:text-lg lg:text-xl font-semibold">Michael Yeng for SRC President</h4>
      <p className="text-xs md:text-sm text-gray-300">
        © 2025 Yeng Campaign. All rights reserved.
      </p>
    </div>
  </div>
</div>

        {/* Socials */}
        <div className="flex gap-5 text-gray-300">
          <a
            href="https://www.instagram.com/mfyeng/"
            aria-label="Instagram"
            className="hover:text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://x.com/itssmfy"
            aria-label="X"
            className="hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              className="w-4 h-4 mt-0.5"
            >
              <path d="M1106.6 0H888.7L598.7 447.4 308.3 0H0l468.1 690L14.5 1227h217.9l330.6-491.4L894.7 1227h308.1L732.1 556.1 1106.6 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-anwar-16b454327/"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:michaelyeng@example.com"
            aria-label="Email"
            className="hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="border-t border-gray-700 mt-8">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <img
            src={auroraLogoWhite.src}
            alt="Aurora Studio"
            className="w-[200px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
