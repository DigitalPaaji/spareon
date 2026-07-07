/** @type {import('next').NextConfig} */
const nextConfig = {
 output:'export',
   images: {
    unoptimized: true, // Add this line
  },
};

export default nextConfig;
