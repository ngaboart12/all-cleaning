"use client"
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import DashNavbar from '@/components/DashNavbar';

const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={`${lexend.className} relative mx-auto`}>
                <main className="relative overflow-hidden flex flex-col">
                    <DashNavbar/>
                    {children}
                </main>
            </body>
        </html>
    );
}
