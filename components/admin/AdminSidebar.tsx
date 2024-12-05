"use client"
import handleLogout from '@/utlis/handelLogout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { SiDictionarydotcom } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";

const AdminSidebar = () => {
    const { data: session, status } = useSession()
    const token: any = session?.user.token
    const params = usePathname()
    console.log("path name", params)
    return (
        <div className='px-[20px] bg-[#0c7792]   top-0 p-3 flex flex-col gap-[40px] fixed w-[20%] min-h-[100%] z-[300]'>
             <a href="/" className='rounded-[8px]  text-white font-[700]'>
                <Image src={`/image/logo.svg`} width={1000} height={1000} className='w-[80px]' alt='logo' />
            </a>
            <div className='flex flex-col gap-[20px]'>
                <a href='/admin' className={`flex cursor-pointer flex-row gap-[10px] items-center p-3 ${params === "/admin" ? "bg-white" : ""}  rounded-[6px]`}>
                    <MdSpaceDashboard color={`${params == "/admin" ? "#0c7792" : "white"} `} />
                    <span className={`font-[400] ${params === "/admin" ? "text-primary" : "text-white"}  text-[14px]`}>Dashboard</span>
                </a>
                <a href='/admin/bookings' className={`flex cursor-pointer flex-row gap-[10px] items-center p-3 ${params === "/admin/bookings" ? "bg-white" : ""}  rounded-[6px]`}>
                    <IoBookmarks color={`${params === "/admin/bookings" ? "#0c7792" : "white"}`} />
                    <span className={`${params === "/admin/bookings" ? "text-primary" : "text-white"}  font-[400] text-[14px]`}>Bookings</span>
                </a>
                <a href='/admin/services' className={`flex cursor-pointer flex-row gap-[10px] items-center p-3 ${params === "/admin/services" ? "bg-white" : ""}  rounded-[6px]`}>
                    <FaServicestack color={`${params === "/admin/services" ? "#0c7792" : "white"}`} />
                    <span className={`${params === "/admin/services" ? "text-primary" : "text-white"} font-[400] text-[14px]`}>Services</span>
                </a>

                <div className='flex cursor-pointer flex-row items-center gap-[10px] p-3'>
                    <GrTransaction color='white' />
                    <span className='text-white font-[400] text-[14px]'>Transactions</span>
                </div>

                <div className='flex cursor-pointer flex-row items-center gap-[10px] p-3'>
                    <SiDictionarydotcom color='white' />
                    <span className='text-white font-[400] text-[14px]'>Companies</span>
                </div>
                <div className='flex cursor-pointer flex-row items-center gap-[10px] p-3'>
                    <IoIosSettings color='white' />
                    <span className='text-white font-[400] text-[14px]'>Accounts</span>
                </div>

            </div>




        </div>
    )
}

export default AdminSidebar