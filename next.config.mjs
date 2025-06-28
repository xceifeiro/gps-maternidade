/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <- ESSENCIAL para Docker
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
