module.exports = {
  async rewrites() {
    return [
      {
        source: '/:hash',
        destination: '/api/:hash',
      },
    ]
  },
}
