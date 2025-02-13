"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import icon from "@/images/Icon.png"


const MobileNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header>
            <div className="nav-wrapper z-20 w-full mx-auto pt-0 mb-12  px-0 block fixed left-0 top-0 bottom-auto right-0">
                <div
                    className="bg-white rounded-none mx-auto tracking-tight text-base leading-normal shadow-lg relative block"
                >
                    <div id="nav-content-wrapper" className="mx-auto px-4 w-full">
                        <div
                            id="nav-content"
                            className="gap-x-4 gap-y-0 flex-row flex justify-between items-center w-full min-h-[70px]"
                        >
                            
                            <nav id="nav-menu" className="float-right md:block hidden">
                                <div className="flex flex-row items-center justify-start gap-6">
                                    <Link href="/" className="hover:text-gray-700">
                                        Home
                                    </Link>
                                    <Link href="/about" className="hover:text-gray-700">
                                        About
                                    </Link>
                                    <Link href="/product" className="hover:text-gray-700">
                                        Product
                                    </Link>
                                    <Link href="/podcast" className="hover:text-gray-700">
                                    Podcast
                                    </Link>
                                    <Link href="/contact-us" className="hover:text-gray-700">
                                        Contact Us
                                    </Link>
                                </div>
                            </nav>
                            <div className="flex flex-row justify-between min-w-[20%]">
                                <div className="nav-left z-10 flex-row flex flex-shrink-0 justify-between items-center relative min-w-[20%]">
                                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                        <SheetTrigger asChild>
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                            >
                                                {isOpen ? (
                                                    <X size={24} className="text-gray-800" />
                                                ) : (
                                                    <AlignLeft size={24} className="text-gray-800" />
                                                )}
                                            </button>
                                        </SheetTrigger>
                                        <SheetContent side="top" className="">
                                            <SheetHeader>
                                                <SheetTitle className="flex items-center justify-center pb-2 border-b border-gray-500">
                                                    <Link href="/" className="logo flex-shrink-0 ml-4">
                                                        <Image
                                                            src={icon}
                                                            alt="Logo"
                                                            width={100}
                                                            height={50}
                                                            className="max-h-[50px] max-w-[95px] md:max-w-[150px] flex flex-shrink-0 w-full flex-row h-auto items-start justify-start"
                                                        />
                                                    </Link>
                                                </SheetTitle>
                                            </SheetHeader>
                                            <nav className="mt-6">
                                                <div className="flex flex-col items-start justify-between gap-4">
                                                    <Link
                                                        href="/"
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg hover:text-gray-700"
                                                    >
                                                        Home
                                                    </Link>
                                                    <Link
                                                        href="/about-us"
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg hover:text-gray-700"
                                                    >
                                                        About Us
                                                    </Link>
                                                    <Link
                                                        href="/contact-us"
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg hover:text-gray-700"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </nav>
                                        </SheetContent>
                                    </Sheet>
                                   
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link href="/" className="logo flex-shrink-0 ml-4">
                                    <Image
                                        src={icon}
                                        alt="Logo"
                                        width={100}
                                        height={50}
                                        className="max-h-[50px] max-w-[95px] md:max-w-[150px] flex flex-end flex-shrink-0 w-full flex-row h-auto items-start justify-start"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MobileNav;
