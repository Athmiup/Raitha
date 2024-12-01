/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // basePath: "/Raithapi", // Match your repository name
    // assetPrefix: "/Raithapi/",



    assetPrefix: process.env.NODE_ENV === 'production' ? '/Raithapi/' : '',
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  };
  
  export default nextConfig;
  