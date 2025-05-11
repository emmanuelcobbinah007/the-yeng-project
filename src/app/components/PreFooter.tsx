import React from 'react'

import BgImge from "../../../public/assets/images/halfheadlong.png"

const PreFooter = () => {
  return (
    <div 
    style={{
        backgroundImage: `url(${BgImge.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
    }}>
        <div className='w-[85%] mx-auto flex justify-between items-center py-20 text-white h-[75%] md:h-[80vh]'></div>
    </div>
  )
}

export default PreFooter