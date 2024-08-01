"use client"
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"

const JoinOurNetwork = () => {
    const whychooseus = [
        {
            title: "Increased Job Flow",
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 6.00008C16.667 4.42873 16.667 3.64305 17.1551 3.15491C17.6433 2.66675 18.429 2.66675 20.0003 2.66675C21.5717 2.66675 22.3574 2.66675 22.8455 3.15491C23.3337 3.64305 23.3337 4.42873 23.3337 6.00008C23.3337 7.57143 23.3337 8.35711 22.8455 8.84525C22.3574 9.33341 21.5717 9.33341 20.0003 9.33341C18.429 9.33341 17.6433 9.33341 17.1551 8.84525C16.667 8.35711 16.667 7.57143 16.667 6.00008Z" stroke="#E2B659" stroke-width="2.5" />
                <path d="M16.667 26.0001C16.667 24.4287 16.667 23.643 17.1551 23.1549C17.6433 22.6667 18.429 22.6667 20.0003 22.6667C21.5717 22.6667 22.3574 22.6667 22.8455 23.1549C23.3337 23.643 23.3337 24.4287 23.3337 26.0001C23.3337 27.5714 23.3337 28.3571 22.8455 28.8453C22.3574 29.3334 21.5717 29.3334 20.0003 29.3334C18.429 29.3334 17.6433 29.3334 17.1551 28.8453C16.667 28.3571 16.667 27.5714 16.667 26.0001Z" stroke="#E2B659" stroke-width="2.5" />
                <path d="M2.66699 16C2.66699 14.1144 2.66699 13.1716 3.35041 12.5858C4.03383 12 5.13377 12 7.33366 12C9.53355 12 10.6335 12 11.3169 12.5858C12.0003 13.1716 12.0003 14.1144 12.0003 16C12.0003 17.8856 12.0003 18.8284 11.3169 19.4143C10.6335 20 9.53355 20 7.33366 20C5.13377 20 4.03383 20 3.35041 19.4143C2.66699 18.8284 2.66699 17.8856 2.66699 16Z" stroke="#E2B659" stroke-width="2.5" />
                <path d="M29.3322 6.00012H23.333M7.33301 12.0002V10.6667C7.33301 8.79405 7.33301 7.85775 7.78242 7.18515C7.97698 6.89397 8.22698 6.64397 8.51815 6.44941C9.19075 6 10.1271 6 11.9997 6H16.6663M29.3322 26.0005H23.333M7.33301 20.0004V21.334C7.33301 23.2067 7.33301 24.1429 7.78242 24.8155C7.97698 25.1067 8.22698 25.3567 8.51815 25.5512C9.19075 26.0007 10.1271 26.0007 11.9997 26.0007H16.6663" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            description: "Gain access to a consistent stream of cleaning job requests in your area."

        },
        {
            title: "Flexible Contracts",
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9997 9.99992C29.9215 7.41084 29.6325 5.86655 28.5625 4.79772C27.0965 3.33325 24.7368 3.33325 20.0177 3.33325H13.3438C8.62469 3.33325 6.26511 3.33325 4.79906 4.79772C3.33301 6.26219 3.33301 8.6192 3.33301 13.3333V26.6666C3.33301 31.3806 3.33301 33.7376 4.79906 35.2021C6.26511 36.6666 8.62469 36.6666 13.3438 36.6666H20.0177C24.7368 36.6666 27.0965 36.6666 28.5625 35.2021C29.6325 34.1333 29.9215 32.5891 29.9997 29.9999" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.7365 19.5698L35.6983 17.6079C36.149 17.1573 36.3743 16.9319 36.4948 16.6889C36.724 16.2263 36.724 15.6833 36.4948 15.2208C36.3743 14.9777 36.149 14.7523 35.6983 14.3017C35.2475 13.851 35.0222 13.6256 34.7792 13.5052C34.3167 13.276 33.7737 13.276 33.311 13.5052C33.068 13.6256 32.8427 13.851 32.392 14.3017L30.4302 16.2634M33.7365 19.5698L24.9595 28.3468L20 29.9999L21.6532 25.0404L30.4302 16.2634M33.7365 19.5698L30.4302 16.2634" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33301 31.6667H9.99967L12.083 27.5L14.1663 31.6667H15.833" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 10H23.3333" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 16.6667H20" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            description: "Choose jobs that fit your company's schedule and resources."

        },
        {
            title: "Competitive Compensation:",
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.333 18.6667V13.3334C29.333 8.30509 29.333 5.79095 27.7709 4.22884C26.2089 2.66675 23.6946 2.66675 18.6663 2.66675H15.9997C10.9714 2.66675 8.45721 2.66675 6.8951 4.22884C5.33301 5.79095 5.33301 8.30509 5.33301 13.3334V18.6667C5.33301 23.695 5.33301 26.2093 6.8951 27.7713C8.45721 29.3334 10.9714 29.3334 15.9997 29.3334H18.6663C23.6946 29.3334 26.2089 29.3334 27.7709 27.7713C29.333 26.2093 29.333 23.695 29.333 18.6667Z" stroke="#E2B659" stroke-width="2.5" />
                <path d="M6.66699 8H2.66699M6.66699 16H2.66699M6.66699 24H2.66699" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.3333 9.33325H18M20.6667 14.6666H18" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 29.3334V2.66675" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            description: "Receive fair pay for each job, with prompt and reliable payments."

        },
        {
            title: "Business Growth Support",
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.8337 3.33984V13.3359M30.8337 3.33984C29.6667 3.33984 27.4862 6.66238 26.667 7.50488M30.8337 3.33984C32.0007 3.33984 34.1812 6.66238 35.0003 7.50488" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.155 36.6469C28.0688 33.4582 28.2837 33.0743 28.5115 32.3649C28.7393 31.6556 30.3332 29.0974 30.8972 27.2698C32.7217 21.3566 31.0212 20.0989 28.754 18.4221C26.2398 16.5625 21.4977 15.6207 19.1458 15.8246V6.2392C19.1458 4.63429 17.8442 3.33325 16.2387 3.33325C14.6332 3.33325 13.3316 4.63429 13.3316 6.2392V23.3384L9.89799 19.7061C8.83195 18.5503 7.11877 18.4331 5.94954 19.4844C4.84152 20.4808 4.67982 22.1586 5.5772 23.3481L7.7311 26.2029M7.7311 26.2029C8.19494 26.8051 8.71415 27.4873 9.30425 28.2881M7.7311 26.2029L9.30425 28.2881M7.7311 26.2029C6.77882 24.9668 6.05995 24.0683 5.44022 23.1758M13.116 36.6666L13.0835 34.9159C13.155 32.8638 11.6617 31.5248 9.71407 28.8478C9.57375 28.6549 9.4372 28.4684 9.30425 28.2881M9.30425 28.2881L11.2533 30.8714" stroke="#E2B659" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            description: "Benefit from marketing and operational support to help your business grow."

        },
    ]
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.0
    });
    return (
        <div className='w-full p-[20px] md:px-20 bg-white'>
            <div className=' bg-primary relative px-[20px] md:px-10 lg:px-10 py-5 w-full h-full rounded-[20px] flex flex-col gap-[20px]'>
                <div className='w-full h-full absolute  left-0 top-0'>
                    <Image src="/image/background.svg" className='w-full h-full object-cover' alt='back' width={1000} height={1000} />
                </div>
                <motion.div ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.9 }} 
                    
                    className='grid relative z-20 grid-cols-1 lg:grid-cols-2  justify-between items-center'>
                    <h1 className='text-[28px] text-secondary font-[700] text-center lg:text-start leading-8'>Join Our Network of Professional Cleaners</h1>
                    <span className='text-[12px] text-white text-center lg:text-start'>Is your cleaning company looking to expand its client base and grow its business? Partner with us and start receiving more job offers today!</span>
                </motion.div>
                <motion.div   initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.9 }}  className='flex relative z-20 flex-col gap-[20px]'>
                    <span className='text-[20px] text-secondary font-[700] text-center lg:text-start'>Why  working  with Us?</span>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px]'>
                        {whychooseus.map((item: any, index: number) => {
                            return (
                                <div key={index} className='flex flex-row gap-[10px] items-center'>
                                    <div>
                                        <div className='w-[80px] h-[80px] rounded-[12px] flex flex-row items-center justify-center bg-primaryLogo'>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[16px] font-[700] text-white'>{item.title}</h1>
                                        <span className='text-[14px] text-subtext'>{item.description}</span>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default JoinOurNetwork