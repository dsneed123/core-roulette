const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isGithubActions ? '/core-roulette/' : '',
  basePath: isGithubActions ? '/core-roulette' : '',
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
