/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.com/users/850299286595698718',
      permanent: true
    },
  ]
}

module.exports = nextConfig
