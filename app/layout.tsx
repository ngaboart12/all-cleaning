"use client"
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen'; // Import your splash screen component
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SessionProvider } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });
const queryClient = new QueryClient()




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${lexend.className} max-w-[1724px] relative mx-auto`}>
         <div>
            <QueryClientProvider client={queryClient}>
              <main className="relative overflow-hidden">
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </main>
            </QueryClientProvider>
          </div>


        </body>
      </html>
    </SessionProvider>
  );
}
