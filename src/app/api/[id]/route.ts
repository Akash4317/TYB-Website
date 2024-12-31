import { NextApiRequest, NextApiResponse } from 'next';
import { fetchSingleBlog } from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const blogId = req.query.id as string;
      const blog = await fetchSingleBlog({ id: blogId });
      if (!blog || blog.length === 0) {
        res.status(404).json({ error: 'Blog not found' });
        return;
      }
      res.status(200).json(blog[0]);
    } catch (error) {
      console.error('Error fetching blog:', error);
      res.status(500).json({ error: 'Failed to fetch blog' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;