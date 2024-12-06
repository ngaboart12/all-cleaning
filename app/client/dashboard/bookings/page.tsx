"use client"
import ServiceCard from '@/components/reusable/ServiceCard'
import RequestedService from '@/components/reusable/tables/RequestedService'
import React, { useState } from 'react'

const Bookings = () => {
    const [type, setType] = useState<string>("all")
    return (
        <div className='py-24 bg-[#FAFAFA] min-h-screen px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[10px]'>
            <div className='w-full bg-white p-4 rounded-[12px] flex flex-row justify-between gap-[10px] items-center'>
                <div className='flex flex-row gap-[20px] items-center'>
                    <h1 className=' text-[14px] font-[600]'>Served Boookings</h1>
                    <h1 className=' text-[14px] font-[600]'>12</h1>
                </div>
                <div className='flex flex-row items-center gap-[4px] px-4 bg-[#FAFAFA] rounded-[12px]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 17.5L22 22" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                    <input type="text" className='p-3 text-[13px] bg-transparent outline-none' placeholder='Search Booking' />
                </div>
                <div className='flex flex-row gap-[10px]'>
                    <div onClick={() => setType("all")} className={`p-2 cursor-pointer  px-4 rounded-[12px] border-[1.4px] ${type == "all" ? "border-primary" : "border-[#F3F3F3]"} `}>
                        <span className={`text-[14px] font-[600] ${type == "all" ? "text-primary" : "text-black"} `}>ALL</span>
                    </div>
                    <div onClick={() => setType("pending")} className={`p-2 cursor-pointer px-4 rounded-[12px] border-[1.4px] ${type == "pending" ? "border-primary" : "border-[#F3F3F3]"} `}>
                        <span className={`text-[14px] font-[600] ${type == "pending" ? "text-primary" : "text-[#000000]"} `}>Requested</span>
                    </div>
                    <div className='p-2 cursor-pointer px-4 rounded-[12px] border-[1.4px] border-[#F3F3F3]'>
                        <span className='text-[14px] font-[600] text-[#000000]'>Ongoing</span>
                    </div>
                    <div className='p-2 cursor-pointer px-4 rounded-[12px] border-[1.4px] border-[#F3F3F3]'>
                        <span className='text-[14px] font-[600] text-[#000000]'>Canceled</span>
                    </div>
                    <div className='p-2 cursor-pointer px-4 rounded-[12px] border-[1.4px] border-[#F3F3F3]'>
                        <span className='text-[14px] font-[600] text-[#000000]'>Recents</span>
                    </div>
                </div>
            </div>
            {type == "all" && (
                <div className='grid grid-cols-2 gap-[10px]'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            )}
            {type == "pending" && (
                <div className='grid grid-cols-2 gap-[10px]'>
                    <RequestedService />
                    <RequestedService />
                    <RequestedService />
                </div>


            )}
        </div>
    )
}

export default Bookings