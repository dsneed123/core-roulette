const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isGithubActions ? '/core-roulette/' : '',
  basePath: isGithubActions ? '/core-roulette' : '',
  trailingSlash: true,
  output: 'export',
  
};

// next.config.js or next.config.mjs
export default {
  output: 'export',
  // Add any other configurations you need
};

