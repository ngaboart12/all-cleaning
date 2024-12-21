"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { CgProfile } from "react-icons/cg";
import { GiQueenCrown } from "react-icons/gi";
import { RiLogoutCircleLine } from 'react-icons/ri';
import handleLogout from '@/utlis/handelLogout';

const ProfileDropDown = () => {
    const { data: session, status } = useSession()
    const token: any = session?.user.token
    return (
        <div className='flex flex-col w-full bg-white shadow-lg rounded-[12px] p-8 relative gap-[10px]'>
            <div className='flex flex-row gap-[10px] items-center'>
                <div className='p-2 rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center text-white'>
                    <h1 className='text-white font-[600] text-[12px]'>
                        {session?.user.name?.split(" ")[0].slice(0, 1).toLocaleUpperCase()}
                        {session?.user.name?.split(" ")[1]?.slice(0, 1).toLocaleUpperCase()}
                    </h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[12px] font-[600]'>{session?.user.name}</span>
                    <span className='text-[12px] text-gray-500 font-[400]'>{session?.user.email}</span>
                </div>
            </div>
            <div className='flex flex-col py-4 px-4 gap-[20px]'>
                <a href='' className='flex flex-row items-center gap-[10px]'>
                    <CgProfile size={20} />
                    <span className='text-[14px]'>Profile</span>
                </a>
                <a href='/provider/subscription' className='flex flex-row items-center gap-[10px]'>
                    <GiQueenCrown size={20} />
                    <span className='text-[14px]'>Subscription</span>
                </a>
                <div onClick={() => handleLogout(token)} className='cursor-pointer flex flex-row items-center gap-[10px]'>
                    <RiLogoutCircleLine size={20} className=' text-orange-600' />
                    <span className='text-[14px] text-orange-600'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropDown