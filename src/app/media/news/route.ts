import { NextResponse } from 'next/server';
import { fetchContent } from '@/lambda/db';
import { contentTypeEnum } from '@/constants/constant';

export async function GET() {
  try {
    const news = await fetchContent(contentTypeEnum.NEWS);
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}