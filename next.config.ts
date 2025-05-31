import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'t3.ftcdn.net'
      },
      {
        protocol:'http',
        hostname:'localhost'
      }
    ]
  },
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  },

};

export default nextConfig;
