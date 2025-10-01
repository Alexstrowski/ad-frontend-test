/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: "./tsconfig.typecheck.json",
  },
};

export default nextConfig;
