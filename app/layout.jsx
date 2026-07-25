import { Inter, Anton } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });
const anton = Anton({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "Malek's portfolio",
  description: "A portfolio for a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
