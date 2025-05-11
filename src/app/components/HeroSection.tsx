"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '900'] })

import HeroImg from '../../../public/assets/images/HeroImg.jpg'

const HeroSection = () => {
  return (
    <div
        style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
        }}
    >
        <div className='w-[85%] mx-auto flex justify-between items-center py-20 text-white h-[75%] md:h-[82vh]'>
            <div className='md:pl-10 w-[100%] md:w-[50%]'>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold`}>
                Michael Yeng
            </h1>
            <p className='text-md md:text-2xl lg:text-3xl text-gray-200 mt-2 md:mt-4 leading-relaxed'>
                <TypeAnimation
                    sequence={[
                        "Evandy JCR President, 2024",
                        1500,
                        "Top Delegate, Lifelink MUN 2024 (USA)",
                        1500,
                        "UGSRC President, Hopeful 2025",
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    repeat={Infinity}
                    className="font-medium"
                />
            </p>

            <a 
                href="#get-involved" 
                className='bg-white text-black font-bold px-6 py-2 rounded-md mt-5 md:mt-2 text-sm md:text-lg block w-[60%] md:w-[40%] text-center duration-300 hover:scale-102 hover:bg-gray-200'
            >
                Join the Movement
            </a>
            </div>
        </div>
    </div>
  )
}

export default HeroSection