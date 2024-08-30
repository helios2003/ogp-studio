// @ts-ignore 
import React from 'https://esm.sh/react@18.2.0';
// @ts-ignore 
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts';

export default async function handler(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
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
          <div>
            {numOperations ? `Number of Operations: ${numOperations}` : null}
          </div>
          <div>
            {numMessages ? `Number of Messages: ${numMessages}` : null}
          </div>
        </div>
      )
    );
  } catch (err) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
