/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: [
      'bayut-production.s3.eu-central-1.amazonaws.com',
      'media-cldnry.s-nbcnews.com',
      'images.unsplash.com',
      'avatars0.githubusercontent.com'
    ]
  }
};

module.exports = nextConfig;
