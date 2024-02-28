/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/creation",
        destination: "/creation/florals", // Replace 'default-category' with your default category name
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
