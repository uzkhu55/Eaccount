/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Existing domain
      "plus.unsplash.com", // Add this domain
    ],
  },
};

export default nextConfig;
