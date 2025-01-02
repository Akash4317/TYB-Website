'use client';

import React, { useState } from 'react';
import TipTap from '@/components/TipTap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const UploadForm = () => {
  const [content, setContent] = useState<string>('');

  const handleChange = (value: any) => {
    setContent(value);
  };
  const handleUploadBlog = async (content: string) => {
    try {
      // @ts-ignore
      const data = content.content;
      const titleObj = data.find((item: any) => item.type === 'heading').content;
      const title = titleObj[0].text || '';
      const imageObj = data.find((item: any) => item.type === 'image');
      const title_image_url = imageObj ? imageObj.attrs.src : '';
      const type = 'blog';
      const created_by = 'admin';
      const response = await fetch('/api/uploadBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, type, content: data, title_image_url, created_by }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
    } catch (error) {
      console.error('Error uploading blog:', error);
    }
  };
  const handleSubmit = async () => {
    await handleUploadBlog(content);
  };

  return (
    <div className='h-full flex flex-col justify-between gap-4'>
      <h1 className='text-center text-2xl font-bold'>Upload Blog</h1>
      <div className='h-full overflow-y-auto flex flex-col justify-between pr-2 gap-4'>
        <TipTap
          title='Add your blog content here'
          onChange={handleChange}
        />
        <div className='flex gap-4 flex-row-reverse'>
          <Button onClick={handleSubmit} type='submit'>
            Upload
          </Button>
          <Link href='/blogs'>
            <Button type='reset' variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;