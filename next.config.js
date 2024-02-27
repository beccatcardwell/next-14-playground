/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
        },
      ],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, '_styles')],
  // },
}

module.exports = nextConfig
