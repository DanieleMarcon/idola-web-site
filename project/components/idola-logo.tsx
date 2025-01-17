"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface IdolaLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export function IdolaLogo({ className = "", size = 32, animate = false }: IdolaLogoProps) {
  return (
    <div className="relative">
      <motion.div
        initial={animate ? { scale: 0.8, opacity: 0 } : false}
        animate={animate ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative ${className}`}
      >
        <Image
          src="/logo.png"
          alt="Idola Logo"
          width={size}
          height={size}
          className="relative z-10"
          priority
        />
        <div 
          className="absolute inset-0 z-0 blur-lg opacity-50 animate-pulse"
          style={{
            background: `radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0) 70%)`,
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </motion.div>
    </div>
  );
}