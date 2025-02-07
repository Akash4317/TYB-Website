"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { ModeToggle } from './ui/toggle-theme';
import TYBICON from "@/images/TybIcon.png"
import { links } from '@/constants/constant';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
	const router = usePathname();;
	const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
	const [underlineLeft, setUnderlineLeft] = useState(-25);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const activeIndex = links.findIndex(link => link.href === router);
		if (activeIndex === -1) return;

		const activeLink = linkRefs.current[activeIndex];
		if (!activeLink) return;

		setUnderlineLeft(activeLink.offsetLeft - 25);
	}, [router]);


	return (
		<nav className="border-b hidden md:block px-10 py-5">
			<div className="mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<Image
						src={TYBICON}
						alt="TYB Logo"
						width={250}
						height={58}
						priority
					/>
				</div>
				<ul className="flex gap-[35px] items-center relative">
					{links.map((link, index) => (
						<li
							key={link.href}
							ref={el => {
								linkRefs.current[index] = el;
							}}
							className="flex flex-col justify-center items-center"
						>
							<Link
								href={link.href}
								className={`font-poppins text-[18px] leading-[28px] transition-colors duration-300 ${router === link.href
										? 'text-[#A33B35] font-bold'
										: 'text-[#323433] font-medium'
									}`}
							>
								{link.label}
							</Link>
						</li>
					))}
					{/* <li>
						<ModeToggle />
					</li> */}
					<svg
						className="absolute -bottom-2 transition-all duration-300 h-[20px]"
						style={{
							left: underlineLeft,
							width: '100px',
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 124 20"
						fill="none"
						preserveAspectRatio="none"
					>
						<path
							d="M1.00146 17.0351L7.57903 16.5495C10.1368 16.3606 12.5489 15.2867 14.4007 13.5122L19.1292 8.98111C20.78 7.39931 20.8821 4.79454 19.3603 3.08833L19.2791 2.99724C17.6337 1.15249 14.7485 1.15249 13.1032 2.99724V2.99724C11.561 4.72631 11.739 7.38461 13.4979 8.89266L19.7611 14.2626C21.2885 15.5722 23.1155 16.4846 25.08 16.919L28.3389 17.6397C31.1684 18.2654 34.1035 18.2356 36.9196 17.5525L38.149 17.2544C40.843 16.601 43.6609 16.6624 46.3239 17.4325V17.4325C48.9497 18.1918 51.7268 18.2622 54.3878 17.637L57.4363 16.9208C59.2687 16.4903 61.1915 16.6692 62.9129 17.4306V17.4306C64.616 18.1838 66.5167 18.3672 68.3324 17.9535L71.9136 17.1376C74.4478 16.5602 77.0872 16.6361 79.5841 17.3581L79.7383 17.4027C82.422 18.1788 85.2706 18.1788 87.9543 17.4027L89.2454 17.0294C90.992 16.5243 92.8435 16.5066 94.5994 16.9781V16.9781C98.2748 17.965 102.191 16.773 104.694 13.9059L109.37 8.54923C110.584 7.15776 110.629 5.09674 109.477 3.65311L109.268 3.39114C107.751 1.48922 104.818 1.62439 103.482 3.65786V3.65786C102.534 5.09976 102.75 7.01257 103.996 8.20634L109.213 13.205C111.272 15.1779 113.954 16.3714 116.798 16.5801L123.001 17.0351"
							stroke="#A33B35"
							strokeWidth="2"
						/>
					</svg>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;


