/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_PAGES_REPO || "";

const nextConfig = {
  // Only switches to a fully static export for the GitHub Pages test deploy.
  // Normal builds (Cloudflare/Vercel/local) keep middleware and server features.
  ...(isGithubPagesBuild && {
    output: "export",
    basePath: repoName ? `/${repoName}` : "",
    assetPrefix: repoName ? `/${repoName}/` : "",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
