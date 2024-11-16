"use client";

import { useEffect, useState } from 'react';
import { Inter, Lexend } from 'next/font/google';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProviderNavbar from '@/components/ProviderNavbar';


const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <MainLayout>{children}</MainLayout>
  );
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const [isApproved, setIsApproved] = useState<boolean>(true)
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/auth");
    } else if (session?.user?.role !== "PROVIDER" && session?.user?.role !== "FREELANCER") {
      router.push("/unauthorized");
    }
  }, [session, status, router]);


  if (status === "loading") {
    return;
  }


  if (status === "authenticated" && session?.user?.role === "PROVIDER") {
    return (
      <html lang="en">
        <body className={`${lexend.className} relative mx-auto`}>

          <main className="relative overflow-hidden flex flex-col">
            {isApproved ? (<>

              <ProviderNavbar />
              {children}
            </>) : (
              <div className='w-full h-screen flex bg-[#F8F8F8] items-center justify-center'>
                <div className='w-1/2 bg-white p-4 items-center gap-[10px] rounded-[12px] flex flex-col'>
                  <svg width="123" height="119" viewBox="0 0 123 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="61.5" cy="59.5" rx="61" ry="59.5" fill="#E3F5FA" />
                    <ellipse cx="61.5" cy="59.5" rx="61" ry="59.5" fill="#E3F5FA" />
                    <ellipse cx="61.5" cy="59.5" rx="61" ry="59.5" fill="#E3F5FA" />
                    <ellipse cx="62" cy="59.5" rx="43.5" ry="42.5" fill="#E3F5FA" />
                    <ellipse cx="62" cy="59.5" rx="43.5" ry="42.5" fill="#E3F5FA" />
                    <ellipse cx="62" cy="59.5" rx="43.5" ry="42.5" fill="#13829F" />
                    <path d="M48.667 64.5835C48.667 64.5835 51.417 64.5835 55.0837 71.0002C55.0837 71.0002 65.2748 54.1946 74.3337 50.8335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h1 className='text-[17px] font-[700] text-primary text-center'>Your Registration is Complete!</h1>
                  <span className='text-[16px] font-[600] text-center max-w-[350px]'>Thank you for registering with Swifti Your account is currently under review."</span>
                  <span className='text-[14px] font-[400] text-[#8C7D7D] text-center max-w-[450px]'>Our team will verify your details and you will receive a notification via email once the admin has approved your account."</span>
                  <a href="" className='px-[40px] py-[10px] rounded-[12px] bg-primary flex flex-row gap-[10px] items-center'>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 6H16C18.4853 6 20.5 8.01472 20.5 10.5C20.5 12.9853 18.4853 15 16 15H4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.49998 12C7.49998 12 4.50001 14.2095 4.5 15C4.49999 15.7906 7.5 18 7.5 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='text-[14px] text-white'>Return to home</span>

                  </a>

                </div>
              </div>
            )}
          </main>
        </body>
      </html>
    );
  }

  return null;
};
