import { NextResponse } from 'next/server';
import { fetchContent } from '@/lambda/db';
import { contentTypeEnum } from '@/constants/constant';

export async function GET() {
  try {
    const podcast = await fetchContent(contentTypeEnum.PODCAST);
    return NextResponse.json(podcast);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch podcasts' }, { status: 500 });
  }
}
