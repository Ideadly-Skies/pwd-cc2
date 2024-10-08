/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp.sfdcdigital.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
