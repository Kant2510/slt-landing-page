import logo from '../../assets/logo.png';

interface LogoProps {
  className?: string;
  width?: string;
}

export default function Logo({ className = '', width = '150px' }: LogoProps) {
  return (
    <img
      src={logo}
      alt="LUXION Logo"
      className={className}
      style={{ width, height: 'auto', display: 'block' }}
    />
  );
}
