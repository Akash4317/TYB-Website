'use client';

// import { Metadata } from 'next';
import React, { useState } from 'react';
import TipTap from '../../../components/TipTap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// export const generateMetadata = (): Metadata => {
//     return {
//         title: "Upload Blogs - The Yarn Bazaar",
//         description: "Upload blogs to The Yarn Bazaar.",
//     };
// };
const UploadPage: React.FC = () => {
	const [content, setContent] = useState<string>('');

	const handleChange = (value: any) => {
		setContent(value);
	};
	const handleSubmit = () => {
		console.log(content);
	};

	return (
		<div className='h-full flex flex-col justify-between gap-4'>
			<h1 className='text-center text-2xl font-bold'>Upload Blog</h1>
			<div className='h-full overflow-y-auto flex flex-col justify-between'>
				<TipTap
					title='Add your blog title here'
					onChange={handleChange}
				/>
				<div className='flex gap-4 flex-row-reverse'>
					<Button onClick={handleSubmit} type='submit'>
						Upload
					</Button>
					<Link href='/blogs'>
						<Button type='reset' variant="outline" >
							Cancel
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};


export default UploadPage;