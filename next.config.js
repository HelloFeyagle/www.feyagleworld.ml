/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.com/users/885887066880245772',
      permanent: true
    },
  ]
}

module.exports = nextConfig
