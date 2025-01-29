"use client"
import { Inter, Lexend } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={`${lexend.className} max-w-[1724px] relative mx-auto bg-primary`}>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
