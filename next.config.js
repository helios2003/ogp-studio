// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/og',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, must-revalidate, proxy-revalidate'
          },
        ],
      },
    ];
  },
};
 
module.exports = nextConfig;
