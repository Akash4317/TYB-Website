import { config } from 'dotenv';
import { Pool } from 'pg';

config();

const blogspool = new Pool({
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
    console.log('Connecting to the database...');
    const client = await blogspool.connect();
    console.log('Connected to the database');
    const res = await client.query('select * from cms.content_manager');
    console.log('Query executed successfully');
    client.release();
    return res.rows;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
};

export const uploadBlog = async ({ blog }: { blog: any }) => {
  try {
    console.log('Connecting to the database...');
    const client = await blogspool.connect();
    console.log('Connected to the database');
    const res = await client.query(
      `INSERT INTO cms.content_manager (title, content, type, created_date, created_by) 
          VALUES ($1, $2, $3, NOW(), $4)`,
      [blog.title, blog.content, blog.type, blog.createdBy]
    );
    console.log('Query executed successfully');
    client.release();
    return res.rows;
  }
  catch (err) {
    console.error('Error uploading blog:', err);
    throw err;
  }
}