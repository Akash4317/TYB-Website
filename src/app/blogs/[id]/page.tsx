
import { notFound } from 'next/navigation';
import BlogContent from './content';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: "Blogs - The Yarn Bazaar",
    description: "Explore the latest blogs from The Yarn Bazaar.",
  };
};
async function fetchBlog({ id }: { id: string }) {
  const res = await fetch(`${process.env.DB_ENDPOINT}/blogs/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await fetchBlog({ id: params.id });
  console.log(blog);
  return (
    <div>
      <BlogContent content={blog.body} />
    </div>
  );
}
