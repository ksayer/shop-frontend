/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'ledmonster.ru',
        pathname: '/media/**'
      },
    ],
    deviceSizes: [480, 768, 1024, 1920]
  }
};

module.exports = nextConfig;
