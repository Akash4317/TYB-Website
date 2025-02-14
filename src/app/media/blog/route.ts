import { NextResponse } from 'next/server';
import { fetchContent } from '@/lambda/db';
import { contentTypeEnum } from '@/constants/constant';

export async function GET() {
  try {
    const blogs = await fetchContent(contentTypeEnum.BLOG);
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
