import Link from "next/link";
import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";



interface SliderData {
    id: string;
    title: string;
    highlights: string[];
    // link: string;
    image: string;
    backgroundColor: string;
}

const ProductSlideCard = ({ sliderData }: { sliderData: SliderData }) => {
    const { id, title, highlights, image, backgroundColor } = sliderData;
    return (
        <div className="card-slide" id={id}>
            <div
                style={{ backgroundColor }}
                className="w-full rounded-2xl px-6 md:px-12 lg:px-16 md:py-10 py-6 flex flex-col md:flex-row items-center justify-between"
            >
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h4 className="text-2xl md:text-3xl font-medium text-[#323433] font-poppins">
                        {title}
                    </h4>
                    <ul className="text-base md:text-lg font-[400] text-[#323433] space-y-2">
                        {highlights.map((point, index) => {
                            const [highlightTitle, description] = point.split(":"); // Split title and description
                            return (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#A33B35] font-semibold mr-1">♦</span>
                                    <span>
                                        <span className="text-[#A33B35] font-semibold">{highlightTitle.trim()}</span> :
                                        {description}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
                    <div className="relative rounded-xl overflow-hidden w-full max-w-[350px] md:max-w-[450px] min-h-[250px]">
                        <Image
                            src={image}
                            alt="Slider image"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlideCard;
