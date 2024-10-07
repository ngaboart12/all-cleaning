"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarHome = () => {
    const params: any = usePathname()
    return (
        <div className='px-[10px] bg-white md:px-[50px] lg:px-[100px] p-4 flex w-full'>
            <div className='flex flex-row items-center justify-between gap-[20px] w-full'>
                <div className='flex flex-row gap-[20px] items-center'>

                    <a href="" className='rounded-[8px]  text-white font-[700]'>
                        <Image src={`/image/logo2.png`} width={1000} height={1000} className='w-[80px]' alt='logo' />
                    </a>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <a href="./" className={` text-[14px] font-[400] hover:scale-110 duration-300  rounded-[8px] ${params == "/provider" ? " bg-[#F7F7F7] px-6 p-2 text-black" : " text-black"}`}>How it works</a>
                        <a href="./" className={` text-[14px] font-[400] hover:scale-110 duration-300 flex flex-row gap-[10px] items-center  rounded-[8px] ${params == "/become" ? " bg-[#F7F7F7] px-6 p-2 text-black" : " text-black"}`}>
                            Become Provider
                            <div className='p-[4px] px-4 text-primary font-[700] rounded-[10px] bg-[#EBFBFF]'>pro</div>
                        </a>
                        <a href="./" className={` text-[14px] font-[400] hover:scale-110 duration-300  rounded-[8px] ${params == "/provider" ? " bg-[#F7F7F7] px-6 p-2 text-black" : " text-black"}`}>About Swift</a>
                    </div>
                </div>

                <div className='flex flex-row gap-[10px] items-center'>
                    <a href="/auth" className='px-[40px] py-[10px] rounded-[40px] border-[1.4px] border-primary'>
                        <span className='text-[15px] font-[500] text-primary'>Login</span>
                    </a>
                    <a href="/auth/signup" className='px-[35px] py-[10px] rounded-[40px] border-[1.4px] bg-primary'>
                        <span className='text-[15px] font-[500] text-white'>Sign up</span>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default NavbarHome