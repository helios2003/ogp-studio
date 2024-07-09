import { NextRequest, NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: NextRequest): Promise<ImageResponse | NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;

    const title = searchParams.get('title') || null;
    const description = searchParams.get('description') || null;
    const numServers = searchParams.get('numServers') || null;
    const numChannels = searchParams.get('numChannels') || null;

    const { image } = {
      image: 'https://svgshare.com/i/145Z.svg'
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
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div style={{ fontSize: '48' }}>
            {title ? `Title: ${title.replace(/["']/g, '')}` : null}
          </div>
          <div>
            {description ? `Description: ${description.replace(/["']/g, '')}` : null}
          </div>
          <div>
            {numServers ? `Number of Servers: ${numServers}` : null}
          </div>
          <div>
            {numChannels ? `Number of Channels: ${numChannels}` : null}
          </div>
        </div>
      )
    );
  } catch (err: any) {
    console.error(err);
    return new NextResponse('Failed to generate image', { status: 500 });
  }
}
