"use client"
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen'; // Import your splash screen component

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${lexend.className} max-w-[1724px] relative mx-auto bg-primary`}>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
