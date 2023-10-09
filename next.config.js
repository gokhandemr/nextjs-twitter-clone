/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
    reactStrictMode: false,
}

module.exports = nextConfig