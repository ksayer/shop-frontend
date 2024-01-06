/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'ledmonster.ru'}, {hostname: 'localhost'}
    ],
    deviceSizes: [480, 768, 1024, 1920],
  },
  reactStrictMode: false
};

module.exports = nextConfig;
