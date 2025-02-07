import { NextResponse } from 'next/server';
import { uploadBlog } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const { title, created_by, type, content, title_image_url } = body;
  if (!content) {
    return NextResponse.json({ error: 'Content is required' }, { status: 400 });
  }
  try {
    await uploadBlog({
      blog:
      {
        title,
        content,
        type,
        title_image_url,
        created_by,
      }
    });
    return NextResponse.json({ message: 'Blog uploaded successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error uploading blog:', error);
    return NextResponse.json({ error: 'Failed to upload blog' }, { status: 500 });
  }
}
