import type { NextConfig } from 'next';

const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/vraj-patel-portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? basePath + '/' : undefined,
};

export default nextConfig;
