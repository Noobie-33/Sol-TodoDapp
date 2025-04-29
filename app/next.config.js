/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_RPC_HOST: 'https://metaplex.devnet.rpcpool.com/',
  },
};

module.exports = nextConfig;
