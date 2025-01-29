"use client"
import handleLogout from '@/utlis/handelLogout';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className='px-[20px] top-0 max-w-[1724px] lg:px-20 p-3 bg-primary flex flex-row items-center justify-between fixed w-full z-[300]'>
                <a href="/" className='rounded-[8px] bg-white px-6  text-white font-[700]'>
                    <Image src={`/image/smartclean.png`} width={1000} height={1000} className='w-[80px]' alt='logo' />
                </a>
                <div className={`flex-row gap-[50px] items-center hidden md:flex`}>
                    <a href="/" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Home</a>
                    <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>How It Works</a>
                    <a href="/services" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Services</a>
                    <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>About Us</a>
                </div>
                <div onClick={() => setIsActive(!isActive)} className='flex md:hidden'>
                    <span className='text-white text-[30px] cursor-pointer'>
                        {!isActive && <FaBars />}
                        {isActive && <IoClose />}

                    </span>

                </div>

            </div>
            <div className={`w-full bg-primary overflow-hidden  mt-[10vh] ${isActive ? "h-screen border-t-[4px]" : "h-[0px] border-t-[0px]"} duration-300 transition-all fixed z-30`}>
                <div className={`flex flex-col gap-[50px] py-5 px-10`}>
                    <a href="/" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Home</a>
                    <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>How It Works</a>
                    <a href="/services" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Services</a>
                    <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>About Us</a>
                    <a href="/auth" className='px-[20px] py-[8px] w-[120px] rounded-[12px] bg-secondary flex flex-row items-center gap-[10px]'>
                        <span className='text-[12px] font-[400] text-white'>Sign In</span>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.9998H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar