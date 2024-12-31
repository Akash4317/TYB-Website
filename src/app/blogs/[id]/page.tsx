
import { notFound } from 'next/navigation';
import BlogContent from './content';
import { Metadata } from 'next';
import { fetchSingleBlog } from '@/lib/db';

export const generateMetadata = (): Metadata => {
  return {
    title: "Blogs - The Yarn Bazaar",
    description: "Explore the latest blogs from The Yarn Bazaar.",
  };
};
// update this function to use handler instead of direct fn call
async function fetchBlog({ id }: { id: string }) {
  const res = await fetchSingleBlog({ id });
  if (!res || res.length === 0) {
    throw notFound();
  }
  return res[0];
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await fetchBlog({ id: params.id });
  return (
    <div>
      <BlogContent content={blog.content} />
    </div>
  );
}
