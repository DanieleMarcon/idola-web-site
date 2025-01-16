import Image from 'next/image';

interface IdolaLogoProps {
  className?: string;
  size?: number;
}

export function IdolaLogo({ className = "", size = 32 }: IdolaLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Idola Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}