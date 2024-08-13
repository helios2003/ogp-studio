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
            value: 'public,  max-age=3600, s-maxage=3600, stale-while-revalidate=3600, vary=user-agent'
          },
        ],
      },
    ];
  },
};
 
module.exports = nextConfig;
