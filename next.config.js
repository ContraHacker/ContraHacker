/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');

const nextConfig = withAxiom({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eodhistoricaldata.com',
        port: '',
        pathname: '/img/**'
      }
    ]
  }
});

module.exports = nextConfig;
