/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" }, // 对应主页
      "/404": { page: "/404" }, // 404 页面
      // 其他页面...

      // 使用默认导出路径映射
      ...defaultPathMap,
    };
  },
};

module.exports = nextConfig;
