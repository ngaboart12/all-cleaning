"use client"
import Input from '@/components/reusable/Input'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactUs = () => {
    const [name, setName] = useState("")
    return (
        <div className='w-full flex flex-col relative bg-[#FAFAFA] '>
            <div className='py-10 bg-primary flex items-center overflow-y-hidden relative  justify-center '>
                <div className='w-full h-full absolute inset-0'>
                    <Image src="/image/background.svg" className='w-full h-full object-cover' alt='back' width={1000} height={1000} />
                </div>
                <div className='flex flex-col px-[20px]  items-center pt-10'>
                    <h1 className='text-[24px] sm:text-[30px] font-[600] text-white text-center'>We’d like to hear from you</h1>
                    <span className='text-subtext text-[14px] '>Contact us</span>
                </div>
            </div>
            <div className='px-[20px] md:px-10 lg:px-20 py-14 flex flex-col lg:flex-row gap-[20px]'>
                <div className='w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex  lg:flex-col gap-[10px]'>
                    <div className='p-4 bg-white rounded-[12px] flex flex-row gap-[10px] items-center w-full'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="12" fill="#F8F8F8" />
                            <path d="M26 16V19M31 18L29 20M33 23H30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.1583 18.7122L20.7556 17.8063C20.4923 17.2139 20.3607 16.9177 20.1638 16.691C19.9171 16.4069 19.5955 16.1979 19.2357 16.0879C18.9486 16 18.6245 16 17.9762 16C17.0279 16 16.5538 16 16.1557 16.1823C15.6869 16.397 15.2634 16.8633 15.0947 17.3506C14.9515 17.7643 14.9925 18.1894 15.0746 19.0397C15.9479 28.0902 20.9098 33.0521 29.9603 33.9254C30.8106 34.0075 31.2357 34.0485 31.6494 33.9053C32.1367 33.7366 32.603 33.3131 32.8177 32.8443C33 32.4462 33 31.9721 33 31.0238C33 30.3755 33 30.0514 32.9122 29.7643C32.8021 29.4045 32.5931 29.0829 32.309 28.8362C32.0823 28.6393 31.7861 28.5077 31.1937 28.2444L30.2878 27.8417C29.6462 27.5566 29.3255 27.4141 28.9995 27.3831C28.6876 27.3534 28.3731 27.3972 28.0811 27.5109C27.776 27.6297 27.5063 27.8544 26.967 28.3038C26.4301 28.7512 26.1617 28.9749 25.8337 29.0947C25.543 29.2009 25.1586 29.2403 24.8523 29.1951C24.5069 29.1442 24.2423 29.0029 23.7133 28.7201C22.0672 27.8405 21.1595 26.9328 20.2799 25.2867C19.9971 24.7577 19.8558 24.4931 19.8049 24.1477C19.7597 23.8414 19.7991 23.457 19.9053 23.1663C20.0251 22.8383 20.2488 22.5699 20.6962 22.033C21.1456 21.4937 21.3703 21.224 21.4892 20.9189C21.6029 20.6269 21.6466 20.3124 21.6169 20.0005C21.5859 19.6745 21.4434 19.3538 21.1583 18.7122Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <div className='flex flex-col'>
                            <span className='text-[14px] font-[600]'>Give as  a call</span>
                            <span className='text-[14px] font-[600]'>+1 875 768 789</span>
                        </div>

                    </div>
                    <div className='p-4 bg-white rounded-[12px] flex flex-row gap-[10px] items-center w-full'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="12" fill="#F8F8F8" />
                            <path d="M19 20.5L21.942 22.2394C23.6572 23.2535 24.3428 23.2535 26.058 22.2394L29 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.0158 25.4756C14.0811 28.5411 14.1138 30.0739 15.245 31.2093C16.3761 32.3448 17.9503 32.3843 21.0988 32.4634C23.0393 32.5122 24.9607 32.5122 26.9012 32.4634C30.0497 32.3843 31.6239 32.3448 32.755 31.2093C33.8862 30.0739 33.9189 28.5411 33.9842 25.4756C34.0053 24.4899 34.0053 23.51 33.9842 22.5244C33.9189 19.4588 33.8862 17.9261 32.755 16.7906C31.6239 15.6552 30.0497 15.6157 26.9012 15.5365C24.9607 15.4878 23.0393 15.4878 21.0988 15.5365C17.9503 15.6156 16.3761 15.6552 15.245 16.7906C14.1138 17.9261 14.0811 19.4588 14.0158 22.5243C13.9947 23.51 13.9947 24.4899 14.0158 25.4756Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>

                        <div className='flex flex-col'>
                            <span className='text-[14px] font-[600]'>Email us</span>
                            <span className='text-[14px] font-[600]'>allcleaning@gmail.com</span>
                        </div>

                    </div>
                    <div className='p-4 bg-white rounded-[12px] flex flex-row gap-[10px] items-center w-full'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="12" fill="#F8F8F8" />
                            <path d="M19 20.5L21.942 22.2394C23.6572 23.2535 24.3428 23.2535 26.058 22.2394L29 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.0158 25.4756C14.0811 28.5411 14.1138 30.0739 15.245 31.2093C16.3761 32.3448 17.9503 32.3843 21.0988 32.4634C23.0393 32.5122 24.9607 32.5122 26.9012 32.4634C30.0497 32.3843 31.6239 32.3448 32.755 31.2093C33.8862 30.0739 33.9189 28.5411 33.9842 25.4756C34.0053 24.4899 34.0053 23.51 33.9842 22.5244C33.9189 19.4588 33.8862 17.9261 32.755 16.7906C31.6239 15.6552 30.0497 15.6157 26.9012 15.5365C24.9607 15.4878 23.0393 15.4878 21.0988 15.5365C17.9503 15.6156 16.3761 15.6552 15.245 16.7906C14.1138 17.9261 14.0811 19.4588 14.0158 22.5243C13.9947 23.51 13.9947 24.4899 14.0158 25.4756Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>

                        <div className='flex flex-col'>
                            <span className='text-[14px] font-[600]'>Our Head quarter</span>
                            <span className='text-[14px] font-[600]'>allcleaning@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-3/4 rounded-[12px] flex flex-col p-4 gap-[20px] bg-white'>
                    <h1 className='text-[20px] font-[700] text-primary'>Send Us  A Message</h1>
                    <form action="" className='flex flex-col gap-[10px]'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px]'>
                            <Input label='Name' placeholder='Enter Your Name' type='text' value='hell' onChange={(e) => { }} />
                            <Input label='Email' placeholder='Enter Your Email' type='text' value='hell' onChange={(e) => { }} />
                            <Input label='Phone Number' placeholder='Enter Your Number' type='text' value='hell' onChange={(e) => { }} />
                            <div className="flex flex-col gap-[4px] w-full">
                                <label className='text-[14px] font-[500]'>Service</label>
                                <select name="" id="" className='p-3 text-[14px] bg-[#F8F8F8] rounded-[8px]'>
                                    <option value="" className='text-[14px]'>Select Service</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[10px]'>
                        <label className='text-[14px] font-[500]'>Message</label>

                        <textarea name="" id="" rows={4} placeholder='Enter Your Message' className='p-4 font-[400] text-[14px] bg-[#F8F8F8] rounded-[8px]'></textarea>
                        </div>
                        <button className='p-4 rounded-[8px] w-full items-center justify-center lg:w-1/2 bg-primary text-white flex flex-row gap-[10px]'>
                            <span className='text-[14px] font-[400]'>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6668 9.99983H3.3335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5001 14.1667C12.5001 14.1667 16.6667 11.098 16.6667 9.99999C16.6667 8.90199 12.5 5.83333 12.5 5.83333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default ContactUs