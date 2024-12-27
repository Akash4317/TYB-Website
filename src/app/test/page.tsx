'use client'

import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
}
const Page = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/test')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
      });
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;