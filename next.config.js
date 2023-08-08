/** @type {import('next').NextConfig} */

import { withAxiom } from 'next-axiom';

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
