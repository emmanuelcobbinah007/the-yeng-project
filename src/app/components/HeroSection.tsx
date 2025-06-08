"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '900'] })

import HeroImg from '../../../public/assets/images/HeroImg.jpg'

const HeroSection = () => {
  return (
    <section
        aria-label="Hero section featuring Michael Yeng"
        style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
        }}
    >
        <div className='w-[85%] mx-auto flex justify-between items-center py-20 text-white h-[75%] md:h-[82vh]'>
            <div className='md:pl-10 w-[100%] md:w-[60%]'>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold`}>
                Michael Yeng
            </h1>
            <p className='text-sm md:text-2xl lg:text-3xl text-gray-200 mt-2 md:mt-4 leading-relaxed'>
                <TypeAnimation
                    sequence={[
                        "Evandy JCR President, 2024",
                        1500,
                        "Overall Best Delegate, Lifelink MUN 2024",
                        1500,
                        "UGSRC President, Hopeful 2025",
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    repeat={Infinity}
                    className=" font-medium"
                />
            </p>

            <a 
                href="#get-involved" 
                className="border border-white text-white font-semibold px-6 py-3 rounded-full flex justify-center items-center gap-2 hover:bg-white hover:text-[#0F1F3D] transition duration-300 text-xs md:text-lg w-[55%] md:w-[45%] mt-4 md:mt-6"
            >
                Join the Movement
            </a>        </div>
        </div>
    </section>
  )
}

export default HeroSection