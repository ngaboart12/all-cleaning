 "use client"
import { useEffect, useState } from 'react';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from 'sonner';


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
      <html lang="en">
        <body className={`${lexend.className} max-w-[1724px] relative mx-auto`}>
         <div>
            <QueryClientProvider client={queryClient}>
              <main className="relative overflow-hidden">
                <Toaster position={`top-right`} />
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </main>
            </QueryClientProvider>
          </div>


        </body>
      </html>
  );
}