import { NextRequest, NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';
import parseURL from '@/app/helpers/parser';
import { DocumentInfo } from '@/app/types';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<ImageResponse | NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const encodedDocument = searchParams.get('base64');
    let ans = '';
    if (encodedDocument) {
      const info: DocumentInfo = await parseURL(encodedDocument);
      ans = JSON.stringify(info);
    }
    
    // const title = searchParams.has('title')
    //   ? (searchParams.get('title') as string)
    //   : null;
    // const description = searchParams.has('description')
    //   ? (searchParams.get('description') as string)
    //   : null;
    // const numServers = searchParams.has('numServers')
    //   ? (searchParams.get('numServers') as string)
    //   : null;
    // const numChannels = searchParams.has('numChannels')
    //   ? (searchParams.get('numChannels') as string)
    //   : null;

    // JSON.stringify({
    //   info
    // });
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
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          {/* <div>
            {title ? `Title: ${title}` : null}
          </div>
          <div>
            {description ? `Description: ${description}` : null}
          </div>
          <div>
            {numServers ? `Number of Servers: ${numServers}` : null}
          </div>
          <div>
            {numChannels ? `Number of Channels: ${numChannels}` : null}
          </div> */}
          {ans}
        </div>
      )
    );
  } catch (err: any) {
    console.error(err);
    return new NextResponse('Failed to generate image', { status: 500 });
  }
}
