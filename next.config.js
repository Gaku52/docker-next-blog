module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/docker-next-blog" : "",
  trailingSlash: true,
  esmExternals: true,
  future: {
    webpack5: true,
  },
  async headers() {
    return [
      {
        // APIエンドポイントに対してキャッシュ無効化の設定を追加
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
};
