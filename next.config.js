/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/docker-next-blog" : "",
  trailingSlash: true,
  esmExternals: true,
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig;