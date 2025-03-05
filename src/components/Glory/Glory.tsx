"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { ChevronLeft, ChevronRight, Play, Award, Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

// Import images
import stbadge from "@/images/stbadge.jpg"
import stImage from "@/images/stb.jpg"
import car1 from "@/images/car1.jpg"
import car2 from "@/images/car2.jpg"
import car3 from "@/images/car3.jpg"
import car4 from "@/images/car4.jpg"

const videoUrl = "https://www.youtube.com/embed/Yi7xfOPMVdE?autoplay=1&mute=1&rel=0&showinfo=0"
const images = [car1, car2, car3, car4, car1, car2, car3, car4]

const Glory = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePlayVideo = () => {
        setIsVideoPlaying(true)
    }

    const [selectedSlide, setSelectedSlide] = useState(0);

    const handleReadMore = (index:number) => {
        setSelectedSlide(index);
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50 py-20 lg:py-28">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-30 translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Moment of <span className="text-amber-600">Glory</span></h2>
                </motion.div>

                {/* Featured content section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 mb-20">
                    {/* Badge section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center"
                    >
                        <div className="relative w-full max-w-[320px] hidden md:block aspect-[3/4] group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/30 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                <Image
                                    src={stbadge || "/placeholder.svg"}
                                    alt="Shark Tank India Badge"
                                    fill
                                    className="object-contain p-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <div className="flex items-center gap-1 mb-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <h3 className="text-white font-bold text-lg">Shark Tank India</h3>
                                        <p className="text-gray-200 text-sm">Featured on season 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(255,171,26,0.3)] group">
                            {!isVideoPlaying ? (
                                <>
                                    <Image
                                        src={stImage}
                                        alt="Video thumbnail"
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                        <button
                                            onClick={handlePlayVideo}
                                            className="w-20 h-20 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 mb-6 group"
                                        >
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoUrl}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Testimonial section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto mb-16 text-center"
                >
                    <div className="relative">
                        <Quote className="w-16 h-16 text-amber-200 opacity-50 mx-auto mb-4" />
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                            Our appearance on Shark Tank Season 1 marked a milestone, showcasing our innovative vision, entrepreneurial spirit, and resilience as we captivated investors, inspiring our journey to success.
                        </p>
                        <p className="font-semibold mt-4 text-[#B02430]">Shark Tank India, season 1</p>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto mb-12">
                    <hr className="border-t-2 border-amber-200" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="py-6"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Highlights</h3>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 ">
                        <Swiper
                            modules={[Navigation, Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView="auto"
                            coverflowEffect={{
                                rotate: 25,
                                stretch: -20,
                                depth: 200,
                                modifier: 1,
                                slideShadows: false,
                                scale: 0.9
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}
                            navigation={{
                                nextEl: ".custom-swiper-button-next",
                                prevEl: ".custom-swiper-button-prev",
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="swiper-container"
                            breakpoints={{
                                640: { slidesPerView: 1.2 },
                                768: { slidesPerView: 1.8 },
                                1024: { slidesPerView: 2.5 },
                            }}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index} className="relative" style={{ width: "340px", height: "380px" }}>
                                    <motion.div
                                        whileHover={{ y: -15,  }}
                                        transition={{ duration: 0.3 }}
                                        className={`relative h-full  overflow-hidden   duration-100}`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Event ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute  z-20 flex bottom-0 flex-col justify-end ">
                                            <div className="p-6 space-y-4">
                                                
                                                <p className="text-white/80 text-sm line-clamp-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                                <button
                                                    onClick={() => handleReadMore(index)}
                                                    className="flex items-center text-white/90 hover:text-white transition-colors group"
                                                >
                                                    <span className="mr-2 font-medium">Read More</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <button className="custom-swiper-button-prev absolute left-4 top-1/2 z-30 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl transform -translate-y-1/2 hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="custom-swiper-button-next absolute right-4 top-1/2 z-30 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl transform -translate-y-1/2 hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Glory

