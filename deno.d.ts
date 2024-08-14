declare module 'https://esm.sh/react@18.2.0' {
    export * from 'react';
    export { default } from 'react';
  }
  
  declare module 'https://deno.land/x/og_edge/mod.ts' {
    export class ImageResponse extends Response {
      constructor(element: React.ReactElement, options?: ImageResponseOptions);
    }
  
    interface ImageResponseOptions {
      width?: number;
      height?: number;
      emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji';
      fonts?: ArrayBuffer[];
      debug?: boolean;
    }
  }
