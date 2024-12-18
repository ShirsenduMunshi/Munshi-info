/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true, // Disable ESLint during build
      },
};

export default nextConfig;
