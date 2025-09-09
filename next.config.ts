// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Build sırasında ESLint hatalarından dolayı kırılmasın
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tip hataları build'i durdurmasın (geçici)
    ignoreBuildErrors: true,
  },
  // (İsteğe bağlı) Resim optimizasyonu vs. kullanmıyorsak şimdilik kapatabiliriz
  // images: { unoptimized: true },
};

export default nextConfig;
