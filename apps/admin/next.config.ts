import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@aerochrono/types',
    '@aerochrono/ui',
    '@aerochrono/utils',
    '@aerochrono/database',
  ],
};

export default nextConfig;
