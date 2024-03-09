/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'led.apptrix.ru'}, {hostname: 'localhost'}, {hostname: 'ledmonster.ru'}
    ],
    deviceSizes: [480, 768, 1024, 1920],
  },
  reactStrictMode: false
};

module.exports = nextConfig;
