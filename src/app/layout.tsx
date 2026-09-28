import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LUXION — Intelligent Imaging & Vision Systems',
  description:
    'LUXION develops intelligent camera payload systems that enable autonomous machines to see, understand and act.',
  keywords: [
    'LUXION',
    'Intelligent Vision',
    'Camera Payloads',
    'Autonomous Systems',
    'UAV',
    'Robotics',
    'Thermal Imaging',
    'Electro-Optical',
  ],
  authors: [{ name: 'LUXION' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'LUXION — Intelligent Imaging & Vision Systems',
    description:
      'From Light to Intelligence. Next-generation camera payload systems for autonomous machines.',
    url: 'https://luxion.ai',
    siteName: 'LUXION',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXION — Intelligent Imaging & Vision Systems',
    description:
      'From Light to Intelligence. Next-generation camera payload systems for autonomous machines.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-[#0b1627] selection:bg-[#2563eb] selection:text-white">
        {children}
      </body>
    </html>
  );
}
