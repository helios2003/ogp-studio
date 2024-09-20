import { NextRequest, NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: NextRequest): Promise<ImageResponse | NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;

    const title = searchParams.has('title')
      ? (searchParams.get('title') as string)
      : null;
    const description = searchParams.has('description')
      ? (searchParams.get('description') as string)
      : null;
    const numServers = searchParams.has('numServers')
      ? (searchParams.get('numServers') as string)
      : null;
    const numChannels = searchParams.has('numChannels')
      ? (searchParams.get('numChannels') as string)
      : null;
    const numOperations = searchParams.has('numOperations')
      ? (searchParams.get('numOperations') as string)
      : null;
    const numMessages = searchParams.has('numMessages')
      ? (searchParams.get('numMessages') as string)
      : null;

    const { image } = {
      image: 'https://i.postimg.cc/6qtLWGLh/og-base-1.png'
    };

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            backgroundImage: `url(${image})`,
            textAlign: 'center',
            color: 'white',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div tw='font-semibold text-5xl m-4'>
            {title ? `Title: ${title.replace(/["']/g, '')}` : null}
          </div>
          <div tw='p-2'>
            {description ? `Description: ${description.replace(/["']/g, '')}` : null}
          </div>
          <div tw='p-2'>
            {numServers ? `Number of Servers: ${numServers}` : null}
          </div>
          <div tw='p-2'>
            {numChannels ? `Number of Channels: ${numChannels}` : null}
          </div>
          <div tw='p-2'>
            {numOperations ? `Number of Operations: ${numOperations}` : null}
          </div>
          <div tw='p-2'>
            {numMessages ? `Number of Messages: ${numMessages}` : null}
          </div>
        </div>
      )
    );
  } catch (err: any) {
    console.error(err);
    return new NextResponse('Failed to generate image', { status: 500 });
  }
}
