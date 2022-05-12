/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.com/users/885887066880245772',
      permanent: true
    },
    {
      source: '/youtube',
      destination: 'https://youtube.com/channel/UCwXARcCGn1BUFS_8g1bih4w',
      permanent: true
    },
  ]
}

module.exports = nextConfig
