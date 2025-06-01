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
      },
      {
        protocol:'http',
        hostname:'45.153.186.89'
      },
      {
        protocol:'https',
        hostname:'45.153.186.89'
      },
      {
        protocol:'https',
        hostname:'verifiedcarriers.com'
      },
      {
        protocol:'http',
        hostname:'verifiedcarriers.com'
      },
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
