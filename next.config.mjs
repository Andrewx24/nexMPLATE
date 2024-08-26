/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
      apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
    },
  };
  
  export default nextConfig;
  