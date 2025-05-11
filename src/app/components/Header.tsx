import React from 'react'
import Image from 'next/image'
import logoWhite from '../../../public/assets/images/logowhitenobg.png'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })

const Header = () => {
  return (
    <div>
        <div className='bg-[#B51F2A] text-white'>
        <div className='w-[85%] mx-auto py-2 flex justify-center items-center font-extrabold'>
            <p>TEXT YENG TO 22839</p>
        </div>
        </div>
        <div className='bg-[#0F1F3D] text-white'>
        <div className='w-[85%] mx-auto py-4 flex justify-between items-center'>
        <Image
            src={logoWhite}
            alt='logo'
            width={75}
            height={75}
        />
        <ul className={`flex gap-10 text-lg font-semibold ${montserrat.className}`}>
            <li className="relative group">
                The Man
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
                The Vision
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
                The Experience
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
                The Reason
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Header