"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div className='flex flex-col gap-[40px] lg:flex-row  bg-primary  '>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className='w-full  lg:h-full lg:w-1/2 pt-20 lg:py-[20vh] pl-[20px] md:pl-[10px] lg:pl-20  lg:mt-0 items-center lg:items-start   flex flex-col gap-[10px] justify-center '>
                <h1 className=' text-[25px] leading-[30px] lg:leading-[40px]  max-w-[600px] text-center lg:text-start lg:text-[40px] text-white font-[800] '>Find Trusted <br /> Cleaners or Grow Your Cleaning Business</h1>
                <span className=' text-subtext text-[14px] text-center sm:text-start'>Find Trusted Cleaners or Grow Your Cleaning Business</span>
                <div className='flex flex-col sm:flex-row gap-[10px] lg:py-4'>
                    <a href="" className='px-[30px] py-[14px] rounded-[8px] bg-secondary flex flex-row items-center gap-[10px]'>
                        <span className='text-[16px] font-[400] text-white'>Reach To Us</span>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.9998H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </a>
                    <a href="" className='px-[30px] py-[14px] rounded-[8px] border-[2px] border-secondary flex flex-row items-center gap-[10px]'>
                        <span className='text-[16px] font-[400] text-secondary'>Get A Quote</span>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11.9998H4" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className='flex flex-row items-center gap-[20px] py-2'>
                    <div className='flex flex-col leading-6'>
                        <span className='text-[32px] font-[600] text-white'>35k +</span>
                        <span className='text-[14px] text-subtext'>Active Users</span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='w-[47px] h-[47px] rounded-full'>
                            <Image src={`/image/user1.jpg`} width={1000} height={1000} alt='user1' className='h-full w-full rounded-full object-cover' />
                        </div>
                        <div className='w-[47px] h-[47px] ml-[-20px] rounded-full'>
                            <Image src={`/image/user2.jpg`} width={1000} height={1000} alt='user1' className='h-full w-full rounded-full object-cover' />
                        </div>
                        <div className='w-[47px] h-[47px] ml-[-20px] rounded-full'>
                            <Image src={`/image/user3.png`} width={1000} height={1000} alt='user1' className='h-full w-full rounded-full object-cover' />
                        </div>
                        <div className='w-[47px] h-[47px] ml-[-20px] cursor-pointer hover:scale-110 duration-300 flex items-center justify-center bg-secondary rounded-full'>
                            <span className='text-white text-[24px]'>+</span>

                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='w-full  lg:h-full lg:w-1/2 relative overflow-hidden bg-primaryLogo'>
                <div className='w-full h-full absolute top-0 left-0 '>
                    <Image src={`/image/background.svg`} width={1000} height={1000} className='w-full h-full object-cover' alt='back' />
                </div>
                <div className='w-full lg:h-[100vh] flex items-center justify-center px-[15vh px-20 py-10 md:py-28 '>
                    <div className=''>
                        <Image src={`/image/phone.png`} width={1000} height={1000} className='w-full h-full' alt='back' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection