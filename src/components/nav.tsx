import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TYBImage from '@/images/tyb.svg';
import { ModeToggle } from './ui/toggle-theme';
const Navbar: React.FC = () => {
	return (
		<nav className="border hidden md:block px-4 py-2">
			<div className="mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<Image
						src={TYBImage}
						alt="TYB Logo"
						width={20}
						priority
					/>
					<div className="text">The Yarn Bazaar</div>
				</div>
				<ul className="flex space-x-4 items-center">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/blogs">Blogs</Link>
					</li>
					<li>
						<ModeToggle />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;