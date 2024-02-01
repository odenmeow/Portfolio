/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // output: "export", 好像用不用都無所謂ㄟ
};

module.exports = nextConfig;
