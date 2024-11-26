"use client";

import { useEffect } from 'react';
import { Inter, Lexend } from 'next/font/google';
import DashNavbar from '@/components/DashNavbar';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
            <MainLayout>{children}</MainLayout>
    );
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;

        if (status === "unauthenticated") {
            router.push("/auth");
        } else if (session?.user?.role !== "CLIENT") {
            router.push("/unauthorized");
        }
    }, [session, status, router]);


    if (status === "loading") {
        return <div className=' w-full h-screen flex items-center justify-center'></div>;
    }

    if (status === "authenticated" && session?.user?.role === "CLIENT") {
        return (
            <html lang="en">
                <body className={`${lexend.className} relative mx-auto`}>
                    <main className="relative overflow-hidden flex flex-col">
                        <DashNavbar />
                        {children}
                    </main>
                </body>
            </html>
        );
    }

    return null;
};
