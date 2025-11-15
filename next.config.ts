import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],

  allowedDevOrigins: ["192.168.31.109"],
};

export default nextConfig;
