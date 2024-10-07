/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'wp.sfdcdigital.com',
            pathname: '/en-us/wp-content/uploads/**', // Adjust the pathname based on the image path structure
        },
        ],
    },
};

export default nextConfig;
