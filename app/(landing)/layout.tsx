"use client"
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import '../globals.css';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} max-w-[1724px] relative mx-auto bg-primary`}>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
      </body>
    </html>
  );
}
