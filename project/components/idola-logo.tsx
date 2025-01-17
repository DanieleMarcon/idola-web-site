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
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        initial={animate ? { scale: 0.8, opacity: 0, y: -50 } : false}
        animate={animate ? { scale: 1, opacity: 1, y: 0 } : false}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
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
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at center, rgba(245, 158, 11, 0.5) 0%, rgba(245, 158, 11, 0) 70%)`,
            transform: 'scale(1.5)',
            filter: 'blur(15px)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at center, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0) 100%)`,
            transform: 'scale(2)',
            filter: 'blur(20px)',
            animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </motion.div>
    </div>
  );
}