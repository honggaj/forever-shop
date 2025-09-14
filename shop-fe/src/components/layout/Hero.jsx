import React from 'react'
import banner from '../../assets/images/hero.webp'

const Hero = () => {
    return (
        <div className="w-full  border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8">

                {/* Chữ bên trái */}
                <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <p className="w-11 h-[2px] bg-gray-500"></p>
                        <p className="text-sm md:text-base font-medium">OUR COLLECTION</p>
                    </div>

                    <h1 className="prata-regular text-3xl sm:text-4xl font-bold leading-relaxed">
                        Latest Arrivals
                    </h1>

                    <div className="flex items-center gap-2">
                        <p className="text-sm md:text-base font-semibold cursor-pointer hover:underline">
                            SHOP NOW
                        </p>
                        <p className="w-11 h-[2px] bg-gray-500"></p>
                    </div>
                </div>
                {/* ảnh bên phải */}

                <div className="w-full md:w-1/2">
                    <img
                        src={banner}
                        lazy="loading"
                        fetchPriority='high'
                        alt="Hero Image"
                        className="w-full h-60 md:h-96 object-cover "
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
