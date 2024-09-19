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
      image: 'https://i.postimg.cc/vZpp6JfS/og-base.png'
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
          <div tw='font-semibold text-5xl pt-16'>
            {title ? `Title: ${title.replace(/["']/g, '')}` : null}
          </div>
          <div tw='my-4'>
            {description ? `Description: ${description.replace(/["']/g, '')}` : null}
          </div>
          <div>
            {numServers ? `Number of Servers: ${numServers}` : null}
          </div>
          <div>
            {numChannels ? `Number of Channels: ${numChannels}` : null}
          </div>
          <div>
            {numOperations ? `Number of Operations: ${numOperations}` : null}
          </div>
          <div>
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
