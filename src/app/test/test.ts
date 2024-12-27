import { NextApiRequest, NextApiResponse } from 'next';
import { fetchBlogs } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const blogs = await fetchBlogs();
    console.log('Blogs:', blogs);
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export default handler;