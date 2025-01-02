import { config } from 'dotenv';
import { Pool } from 'pg';

config();

export const blogspool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
});

export const fetchBlogs = async () => {
  try {
    const client = await blogspool.connect();
    const res = await client.query('select * from cms.content_manager');
    client.release();
    return res.rows;
  } catch (err) {
    throw err;
  }
};
export const fetchSingleBlog = async ({ id }: { id: string }) => {
  try {
    const client = await blogspool.connect();
    const res = await client.query('select * from cms.content_manager where id = $1', [id]);
    client.release();
    return res.rows;
  } catch (err) {
    throw err;
  }
}
export const uploadBlog = async ({ blog }: { blog: any }) => {
  try {
    const data = JSON.stringify(blog.content);
    const client = await blogspool.connect();
    const res = await client.query(
      `INSERT INTO cms.content_manager (title, content, type, title_image_url, created_by, created_date) 
          VALUES ($1, $2, $3, $4, $5, NOW())`,
      [blog.title, data, blog.type, blog.title_image_url, blog.created_by]
    );

    client.release();
    return res.rows;
  }
  catch (err) {
    throw err;
  }
}