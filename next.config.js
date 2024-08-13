// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600',
          },
          {
            key: 'Vary',
            value: 'User-Agent, Path',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
