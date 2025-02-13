import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchSingleContent } from '@/lib/db';

import TipTap from '@/components/TipTap';

export const generateMetadata = (): Metadata => {
	return {
		title: "Blogs - The Yarn Bazaar",
		description: "Explore the latest blogs from The Yarn Bazaar.",
	};
};
async function fetchBlog({ id }: { id: string }) {
	const res = await fetchSingleContent({ id });
	if (!res || res.length === 0) {
		throw notFound();
	}
	return res[0];
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const blog = await fetchBlog({ id });
	return (
		<div>
			<TipTap title={blog.title} enableEdit={false} content={blog.content} />
		</div>
	);
}
