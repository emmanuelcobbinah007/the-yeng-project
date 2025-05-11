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
        <div className='w-[85%] mx-auto flex justify-between items-center py-20 text-white h-[82vh]'>
            <div className='pl-10 w-[50%]'>
            <h1 className={`text-6xl font-bold`}>
                Michael Yeng
            </h1>
            <p className='text-3xl text-gray-200 mt-4 leading-relaxed'>
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

            <button className='bg-white text-black font-bold px-6 py-2 rounded-md mt-4'>
                Join the Movement
            </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection