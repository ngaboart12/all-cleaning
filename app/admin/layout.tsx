"use client";

import { useEffect } from 'react';
import { Inter, Lexend } from 'next/font/google';
import DashNavbar from '@/components/DashNavbar';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';


const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminLayout>{children}</AdminLayout>
    );
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <html lang="en">
            <body className={`${lexend.className} relative mx-auto`}>
                <main className="relative overflow-hidden flex flex-col">
                    <div className='flex flex-row w-full'>
                        <div className='w-[20%]'>
                            <AdminSidebar />
                        </div>
                        <div className='w-[80%] flex flex-col'>
                            <AdminNavbar />

                            {children}
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}

