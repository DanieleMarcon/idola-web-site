"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/idola-logo.png"
        alt="Idola"
        width={size}
        height={size}
        className="w-auto h-auto"
        priority
      />
    </Link>
  );
}