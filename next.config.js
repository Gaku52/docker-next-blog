/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/next-blog" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
