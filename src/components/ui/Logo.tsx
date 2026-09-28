import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 140, height = 36 }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="LUXION Logo"
      width={width}
      height={height}
      priority
      className={`block ${className}`}
      style={{ width: `${width}px`, height: 'auto' }}
    />
  );
}