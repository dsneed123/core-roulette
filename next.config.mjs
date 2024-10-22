const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isGithubActions ? '/core-roulette/' : '', // Update with your repo name
  basePath: isGithubActions ? '/core-roulette/' : '', // Update with your repo name
  trailingSlash: true, // Recommended for GitHub Pages
  output: 'export', // Required for static site generation
}

module.exports = nextConfig