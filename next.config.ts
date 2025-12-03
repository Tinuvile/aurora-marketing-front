import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    API_HOST_URL: process.env.API_HOST_URL,
    API_POST_ID: process.env.API_POST_ID,
  },
};

export default nextConfig;
