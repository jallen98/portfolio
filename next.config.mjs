/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: '/projects',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                }
            ]
        }
    ]
};

export default nextConfig;
