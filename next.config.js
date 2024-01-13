/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    async redirects() {
        return [
            {
            source: '/',
            destination: '/movie',
            permanent: true,
            },
        ]
    },
    images: {
        domains: ['m.media-amazon.com'],
      },
//        images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.example.com',
//         port: '',
//       },
//     ],
//   },
}

module.exports = nextConfig
