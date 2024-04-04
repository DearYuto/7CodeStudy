import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clone YT Music',
  description: '유튜브 뮤직을 클론해보자.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
