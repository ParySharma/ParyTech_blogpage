import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderPage from '@/component/header-page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Tech Hacker',
    template: '%s | Tech Hacker',
  },
  description: `Explore the latest tech gadgets with in-depth reviews, hands-on experiences, and expert insights. Stay updated on smartphones, wearables, smart home devices, and gaming gear. Join us on a journey through the world of innovation.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
