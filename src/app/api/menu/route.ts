import { menu } from '@/app/data/data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(menu);
}
