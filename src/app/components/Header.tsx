"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logoWhite from '../../../public/assets/images/logowhitenobg.png'
import { Montserrat } from 'next/font/google'
import { Menu, X } from 'lucide-react' // Importing icons for hamburger and close
import MenuModal from "./MenuModal" // Importing the MenuModal component

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })


const Header = () => {
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);
    
    const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter(true);
        setTimeout(() => setAnimateModal(true), 10);
      };

    const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setAnimateModal(false);
        setTimeout(() => setter(false), 300);
      };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[#B51F2A] text-white">
        <div className="w-[85%] text-sm md:text-base mx-auto py-2 flex justify-center items-center font-extrabold">
          <p>VOTE YENG FOR UGSRC'25 PRESIDENT</p>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-[#0F1F3D] text-white">
        <div className="w-[85%] mx-auto py-4 flex justify-between items-center">
          <Image
            src={logoWhite}
            alt="logo"
            width={75}
            height={75}
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
          />

          {/* Desktop Navigation */}
          <ul className={`hidden sm:flex gap-10 text-md md:text-lg font-semibold ${montserrat.className} items-center`}>
            <li className="relative group">
            <a
                  href="#the-man"
                  className="block"
                >
                  The Man
                </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
            <a
                  href="#the-drive"
                  className="block"
                >
                  The Drive
                </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
            <a
                  href="#the-agenda"
                  className="block"
                >
                  The Agenda
                </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group bg-white text-[#0F1F3D] px-4 py-2 rounded-2xl font-semibold overflow-hidden cursor-pointer border-2 border-white">
              <a
                  href="#get-involved"
                  className="block"
                >
              <span className="relative z-10">Support Now</span>
              <div className="absolute rounded-xl inset-0 bg-[#0F1F3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 text-white z-0 group-hover:z-10 transition-colors duration-300 flex justify-center items-center">
              Support Now
              </span>
                <div className="absolute inset-0 rounded-xl border border-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            </li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <div className="sm:hidden" onClick={() => openModal(setShowMenuModal)}>
            {showMenuModal ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
      </div>

      {showMenuModal && (
        <MenuModal handleClose={() => closeModal(setShowMenuModal)} animateModal={animateModal} />
      )}
    </div>
  )
}

export default Header
