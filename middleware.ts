import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
  if (req.nextUrl.href.includes('/demo/_next/image'))
    return NextResponse.rewrite(
      req.nextUrl.href.replace('/demo/_next/image', '/_next/image'),
    );

  return null;
}