"use client"
import Image from 'next/image';
import Link from "next/link";
import React, { useRef } from 'react';
import { AlignLeft, X } from "lucide-react";
import { usePathname } from 'next/navigation';

import icon from "@/images/Icon.png"
import { links } from '@/constants/constant';
import TYBIconImage from "@/images/TybIcon.png";
import STIImage from "@/images/STI.svg";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Navbar: React.FC = () => {
	const router = usePathname();
	const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<nav className="relative border-b hidden md:block px-10 py-4 z-[999] bg-white">
				<div className="relative mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Image
							src={TYBIconImage}
							alt="TYB Logo"
							height={40}
							priority
						/>
					</div>
					<ul className="flex items-center gap-16 w-1/2">
						{links.map((link, index) => (
							<li
								key={link.url}
								ref={el => {
									linkRefs.current[index] = el;
								}}
								className="flex flex-col justify-center items-center"
							>
								<Link
									href={link.url}
									className={`font-poppins text-[18px] text-[#323433] font-medium ${router === link.url ? 'underline underline-offset-4 decoration-[#FD5B2F] decoration-2' : ''}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<div className='absolute right-0 top-0 z-10 hidden md:block'>
						<Image
							src={STIImage}
							alt="Shark Tank Logo"
							height={0}
							width={0}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</nav>
			<header className='md:hidden sm:block py-5 z-[999]'>
				<div className="nav-wrapper z-20 w-full mx-auto pt-0 mb-12  px-0 block fixed left-0 top-0 bottom-auto right-0">
					<div
						className="bg-white rounded-none mx-auto tracking-tight text-base leading-normal shadow-lg relative block"
					>
						<div id="nav-content-wrapper" className="mx-auto px-4 w-full">
							<div
								id="nav-content"
								className="gap-y-0 flex-row-reverse flex justify-between items-center w-full min-h-[70px]"
							>
								<div className="flex flex-row justify-between">
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
													<SheetTitle className="flex items-center justify-center pb-2">
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
															href="/media"
															onClick={() => setIsOpen(false)}
															className="text-lg hover:text-gray-700"
														>
															Media
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
											src={TYBIconImage}
											alt="Logo"
											height={50}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;