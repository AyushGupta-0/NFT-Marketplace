/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["phoenixrp-image.infura-ipfs.io"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

module.exports = nextConfig;
