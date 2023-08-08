/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
