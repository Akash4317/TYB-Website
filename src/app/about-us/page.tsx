import React from 'react';
import type { Metadata } from "next";

import UnderConstruction from '@/components/UnderConstruction';

export const generateMetadata = (): Metadata => {
	return {
		title: "About us - The Yarn Bazaar",
		description: "What we do at The Yarn Bazaar.",
	};
};

const AboutUsPage = async () => {

	return (
		<div className="flex flex-col gap-16">
			<UnderConstruction />
		</div>
	);
};

export default AboutUsPage;
