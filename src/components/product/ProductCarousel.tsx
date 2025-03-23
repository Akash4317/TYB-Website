"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import type { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Product1 from "@/images/Enquiry1.png"
import Product2 from '@/images/Order1.png'
import Product3 from '@/images/Enquiry1.png'

interface CarouselImageProps {
    src: StaticImageData | string
    alt: string
}

export default function ProductCarousel() {
    const images: CarouselImageProps[] = [
        { src: Product1, alt: "Product 1" },
        { src: Product2, alt: "Product 2" },
        { src: Product3, alt: "Product 3" },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [emblaApi, setEmblaApi] = useState<any>(null)
    const autoplayRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", () => {
                setCurrentIndex(emblaApi.selectedScrollSnap())
            })

            emblaApi.on("settle", () => {
                setIsAnimating(false)
            })

            emblaApi.on("scroll", () => {
                setIsAnimating(true)
            })
        }
    }, [emblaApi])

    // Function to get the position class for each slide
    const getPositionClass = (index: number) => {
        if (index === currentIndex) return "center"
        if (index === currentIndex + 1 || (index === 0 && currentIndex === images.length - 1)) return "right"
        if (index === currentIndex - 1 || (index === images.length - 1 && currentIndex === 0)) return "left"
        return "hidden"
    }

    return (
        <div className="relative w-full max-w-6xl mx-auto  p-14 md:py-20 overflow-hidden">
            <div className="relative h-[400px] md:h-[400px] w-full">
                {images.map((image, index) => {
                    const position = getPositionClass(index)

                    return (
                        <div
                            key={index}
                            className={cn(
                                "absolute top-1/2 transform -translate-y-1/2 rounded-2xl transition-all duration-700 ease-out", // Changed from rounded-full to rounded-2xl
                                position === "center" &&
                                "left-1/2 -translate-x-1/2 w-full md:w-[60%] h-full z-30 opacity-100 scale-100",
                                position === "left" && "left-0 -translate-x-[15%] w-[80%] h-[80%] z-20 opacity-40 blur-[2px] scale-95",
                                position === "right" && "right-0 translate-x-[15%] w-[80%] h-[80%] z-20 opacity-40 blur-[2px] scale-95",
                                position === "hidden" && "opacity-0 scale-90 z-10",
                                isAnimating && "transition-all duration-700 ease-out",
                            )}
                        >
                            <div
                                className={cn(
                                    "relative w-full h-full overflow-hidden shadow-lg rounded-2xl", // Added rounded-2xl here as well
                                    position === "center" && "shadow-2xl",
                                    position === "left" && "transform rotate-y-6",
                                    position === "right" && "transform -rotate-y-6",
                                )}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    sizes={position === "center" ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 80vw, 40vw"}
                                    priority={position === "center"}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between absolute top-1/2 -left-4 right-0 -translate-y-1/2 px-4 z-40">
                <button
                    onClick={() => {
                        setIsAnimating(true)
                        emblaApi?.scrollPrev()
                    }}
                    className="text-[#FFAB1A]"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-14 w-14" />
                </button>

                <button
                    onClick={() => {
                        setIsAnimating(true)
                        emblaApi?.scrollNext()
                    }}
                    className="text-[#FFAB1A]"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-14 w-14" />
                </button>
            </div>

            <div className="hidden">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[autoplayRef.current]}
                    setApi={setEmblaApi}
                >
                    <CarouselContent>
                        {images.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="h-1 w-1"></div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
