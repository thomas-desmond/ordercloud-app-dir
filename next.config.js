/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ['ocdevops.blob.core.windows.net'], },
}

module.exports = nextConfig
