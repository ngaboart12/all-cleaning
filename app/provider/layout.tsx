"use client";

import { useEffect } from 'react';
import { Inter, Lexend } from 'next/font/google';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProviderNavbar from '@/components/ProviderNavbar';


const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MainLayout>{children}</MainLayout>
    </SessionProvider>
  );
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/auth");
    } else if (session?.user?.role !== "PROVIDER") {
      router.push("/unauthorized");
    }
  }, [session, status, router]);


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated" && session?.user?.role === "PROVIDER") {
    return (
      <html lang="en">
        <body className={`${lexend.className} relative mx-auto`}>
          <main className="relative overflow-hidden flex flex-col">
            <ProviderNavbar />
            {children}
          </main>
        </body>
      </html>
    );
  }

  return null;
};
