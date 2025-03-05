"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ChevronRight, MessageCircle } from "lucide-react"
import we from "@/images/we.jpg"

const Subhero = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#fff8f6] py-16 md:py-24">
           

            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <motion.div
                    ref={sectionRef}
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
                        <motion.div variants={itemVariants} className="mb-2">
                            <div className="inline-flex items-center gap-2 bg-[#FD5B2F]/10 px-4 py-2 rounded-full">
                                <span className="h-2 w-2 rounded-full bg-[#FD5B2F] animate-pulse"></span>
                                <span className="text-[#FD5B2F] font-medium text-sm uppercase tracking-wider">Who We Are</span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-[#B02430] font-poppins text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                        >
                            One Stop{" "}
                            <span className="relative">
                                Yarn Solution
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 200 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 5.5C40 1.5 159 1.5 199 5.5" stroke="#FD5B2F" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-[#323433]/90 my-6 font-poppins text-base md:text-lg leading-relaxed"
                        >
                            At <span className="font-semibold">The Yarn Bazaar</span>, we are reshaping the yarn and textile industry
                            with a tech-first approach. Our platform bridges the gap between buyers and sellers, creating a seamless
                            and transparent trading experience by leveraging advanced tools and a commitment to innovation.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                            <Button
                                variant="default"
                                size="lg"
                                className="group relative overflow-hidden bg-gradient-to-r from-[#FD5B2F] to-[#FD5B2F] hover:from-[#e87556] hover:to-[#ef552b] text-white font-poppins font-semibold rounded-full px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                                onClick={() => (window.location.href = "/contact-us")}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Talk To Us <MessageCircle className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-[#323433]/20 text-[#323433] hover:bg-[#323433]/5 font-poppins font-medium rounded-full px-8 transition-all duration-300"
                                onClick={() => (window.location.href = "/about-us")}
                            >
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </motion.div>

                    </div>

                    {/* Right Image Section */}
                    <motion.div variants={imageVariants} className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Decorative elements around image */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FD5B2F]/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#B02430]/10 rounded-full blur-xl"></div>

                            {/* Main image with frame */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#323433]/10 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FD5B2F]/20 to-transparent mix-blend-overlay z-10"></div>
                                <Image
                                    src={we || "/placeholder.svg"}
                                    alt="The Yarn Bazaar Team"
                                    className="object-cover w-full h-full max-w-[500px]"
                                    width={500}
                                    height={380}
                                    quality={95}
                                />
                            </div>

                            {/* Stats card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#FD5B2F]/10 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                stroke="#FD5B2F"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 6V12L16 14"
                                                stroke="#FD5B2F"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#323433]/60 font-medium">Years of Experience</p>
                                        <p className="text-xl font-bold text-[#323433]">10+</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Another floating element */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute -top-5 -right-5 bg-white rounded-xl shadow-lg p-4 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#B02430]/10 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                                                stroke="#B02430"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                                stroke="#B02430"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                                                stroke="#B02430"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                                stroke="#B02430"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#323433]/60 font-medium">Happy Clients</p>
                                        <p className="text-xl font-bold text-[#323433]">500+</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Subhero

