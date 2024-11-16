"use client"
import handleLogout from '@/utlis/handelLogout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashNavbar = () => {
    const {data: session,status} = useSession()
    const token: any = session?.user.token
    const params = usePathname()
    return (
        <div className='px-[20px] top-0 max-w-[1724px] lg:px-20 p-3 bg-white flex flex-row items-center justify-between fixed w-full z-[300]'>
            <a href="/" className='rounded-[8px]  text-white font-[700]'>
                <Image src={`/image/logo2.png`} width={1000} height={1000} className='w-[80px]' alt='logo' />
            </a>

            <div className=' flex-row gap-[40px] items-center hidden md:flex'>
                <a href="/client/dashboard" className={` text-[12px] font-[400] hover:scale-110 duration-300  rounded-[8px] ${params == "/client/dashboard" ? " bg-primary px-6 p-2 text-white" : " text-primary "}`}>Home</a>
                <a href="/client/dashboard/bookings" className={` rounded-[8px] ${params == "/client/dashboard/bookings" ? " bg-primary px-6 p-2 text-white" : "text-primary"} text-[12px] font-[400] hover:scale-110 duration-300`}>Bookings</a>
                <a href="/client/dashboard/profile" className={` rounded-[8px] ${params == "/client/dashboard/profile" ? " bg-primary px-6 p-2 text-white" : "text-primary"} text-[12px] font-[400] hover:scale-110 duration-300`}>Profile</a>
                <div className=' cursor-pointer '>
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="48" height="48" rx="12" fill="#FDFBFB" />
                        <path d="M17.1584 23.991C17.0849 25.387 17.1694 26.873 15.9221 27.8084C15.3416 28.2438 15 28.927 15 29.6527C15 30.6508 15.7818 31.5 16.8 31.5H31.2C32.2182 31.5 33 30.6508 33 29.6527C33 28.927 32.6584 28.2438 32.0779 27.8084C30.8306 26.873 30.9151 25.387 30.8416 23.991C30.6501 20.3522 27.6438 17.5 24 17.5C20.3562 17.5 17.3499 20.3522 17.1584 23.991Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.5 15.625C22.5 16.4534 23.1716 17.5 24 17.5C24.8284 17.5 25.5 16.4534 25.5 15.625C25.5 14.7966 24.8284 14.5 24 14.5C23.1716 14.5 22.5 14.7966 22.5 15.625Z" stroke="black" stroke-width="1.5" />
                        <path d="M27 31.5C27 33.1569 25.6569 34.5 24 34.5C22.3431 34.5 21 33.1569 21 31.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex cursor-pointer flex-row items-center gap-[4px]'>
                    <div className='p-2 rounded-full bg-primary text-white'>
                        <h1 className='text-white font-[600]'>Ms</h1>
                    </div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9.50005C18 9.50005 13.5811 15.5 12 15.5C10.4188 15.5 6 9.5 6 9.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>
            <div className='flex md:hidden'>
                <span className='text-white text-[30px] cursor-pointer'>=</span>
            </div>

        </div>
    )
}

export default DashNavbar