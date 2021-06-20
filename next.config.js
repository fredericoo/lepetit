module.exports = {
  images: {
    domains: ['images.prismic.io', 'lepetit.cdn.prismic.io'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async headers() {
    return [
      {
        source: '/:path*{/fonts}?',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable',
          },
        ],
      },
      {
        source: '/:path*{/img}?',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable',
          },
        ],
      },
    ];
  },
};
