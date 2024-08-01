"use client"
import { useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

const DownloadApp = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className='px-[20px] lg:px-20 py-10 flex flex-row items-center justify-center gap-[20px]'>
            <div className='flex  flex-col jus lg:flex-row gap-[10px] items-center'>
                <div style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className='flex md:w-[50%] flex-col gap-[10px]'>
                    <h1 className=' text-white text-[26px] leading-8 font-[700]'>Download Our <span className='text-secondary'>All Cleaning</span> Mobile App</h1>
                    <span className='text-subtext text-[14px]'>Join thousands of satisfied customers enjoying a sparkling clean home or office with just a few taps!</span>
                    <div className='flex flex-row gap-[20px]'>
                        <div className='flex flex-col border-r-2 border-secondary w-1/2'>
                            <h2 className='text-[16px] text-secondary font-[700]'>16 thousands</h2>
                            <span className='text-[14px] font-[500] text-white'>USA Users</span>
                        </div>
                        <div className='flex flex-col  w-1/2'>
                            <h2 className='text-[16px] text-secondary font-[700]'>24 thousands</h2>
                            <span className='text-[14px] font-[500] text-white'>Active Clients</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className='w-full grid grid-cols-1 sm:grid-cols-2 gap-[20px]'>
                    <div className='w-full p-[20px] flex flex-row gap-[10px] items-center justify-center  bg-primaryLogo rounded-[24px]'>
                        <div className='w-[100px] h-full'>
                            <Image src={`/image/qrcode.svg`} className='w-full h-full' width={1000} height={1000} alt='qr code' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div>
                                <svg width="30" height="30" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7 15.3422C20.3316 15.3422 20.0352 15.6386 20.0352 16.007C20.0352 16.3754 20.3316 16.6719 20.7 16.6719C21.0684 16.6719 21.3648 16.3754 21.3648 16.007C21.3648 15.6386 21.0684 15.3422 20.7 15.3422Z" fill="#E2B659" />
                                    <path d="M26.0369 15.3422C25.6686 15.3422 25.3721 15.6386 25.3721 16.007C25.3721 16.3754 25.6686 16.6719 26.0369 16.6719C26.4053 16.6719 26.7018 16.3754 26.7018 16.007C26.7107 15.6386 26.4143 15.3422 26.0369 15.3422Z" fill="#E2B659" />
                                    <path d="M23 0.5C10.2961 0.5 0 10.7961 0 23.5C0 36.2039 10.2961 46.5 23 46.5C35.7039 46.5 46 36.2039 46 23.5C46 10.7961 35.7039 0.5 23 0.5ZM16.2437 26.393C16.2437 27.1297 15.6418 27.7316 14.9051 27.7316C14.1684 27.7316 13.5664 27.1297 13.5664 26.393V20.6789C13.5664 19.9422 14.1684 19.3402 14.9051 19.3402C15.6418 19.3402 16.2437 19.9422 16.2437 20.6789V26.393ZM29.6035 20.4543V21.3617V29.1422C29.6035 29.9238 28.9746 30.5527 28.193 30.5527H27.1777C27.2137 30.6695 27.2316 30.7953 27.2316 30.9211V30.993V31.4422V33.7422C27.2316 34.4789 26.6297 35.0809 25.893 35.0809C25.1563 35.0809 24.5543 34.4789 24.5543 33.7422V31.4422V30.993V30.9211C24.5543 30.7953 24.5723 30.6695 24.6082 30.5527H22.1285C22.1645 30.6695 22.1824 30.7953 22.1824 30.9211V30.993V31.4422V33.7422C22.1824 34.4789 21.5805 35.0809 20.8438 35.0809C20.107 35.0809 19.5051 34.4789 19.5051 33.7422V31.4422V30.993V30.9211C19.5051 30.7953 19.523 30.6695 19.559 30.5527H18.5437C17.7621 30.5527 17.1332 29.9238 17.1332 29.1422V21.3617V20.4543V19.3402H17.232H29.5047H29.6035V20.4543ZM17.1332 18.4598C17.1332 16.5551 18.409 14.884 20.3047 14.0035L20.0531 13.6262L19.8016 13.2578L19.2445 12.4223C19.1816 12.3234 19.2086 12.1797 19.3074 12.1168C19.4062 12.0449 19.55 12.0809 19.6129 12.1797L20.2059 13.0691L20.4574 13.4465L20.709 13.8238C21.5176 13.5094 22.407 13.3387 23.3594 13.3387C24.3027 13.3387 25.2012 13.5094 26.0098 13.8238L26.2613 13.4465L26.5129 13.0691L27.1059 12.1797C27.1688 12.0809 27.3125 12.0449 27.4113 12.1168C27.5102 12.1887 27.5461 12.3234 27.4742 12.4223L26.9172 13.2578L26.6836 13.6262L26.432 14.0035C28.3188 14.884 29.5945 16.5461 29.5945 18.4598H17.1332ZM33.1613 26.393C33.1613 27.1297 32.5594 27.7316 31.8227 27.7316C31.0859 27.7316 30.484 27.1297 30.484 26.393V20.6789C30.484 19.9422 31.0859 19.3402 31.8227 19.3402C32.5594 19.3402 33.1613 19.9422 33.1613 20.6789V26.393Z" fill="#E2B659" />
                                </svg>
                            </div>
                            <h1 className='text-[16px] text-white font-[800]'>For Android</h1>
                            <a href="" className='px-[4px] py-[5px] bg-secondary items-center rounded-[5px] flex flex-row'>
                                <span><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 12.5833V4.25M10.0003 12.5833C9.41683 12.5833 8.3266 10.9214 7.91699 10.5M10.0003 12.5833C10.5838 12.5833 11.6741 10.9214 12.0837 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6663 14.25C16.6663 16.3183 16.2347 16.75 14.1663 16.75H5.83301C3.76467 16.75 3.33301 16.3183 3.33301 14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                <span className='text-[12px] text-white font-[600] '>Download Now</span>
                            </a>
                        </div>
                    </div>
                    <div className='w-full p-[20px] flex flex-row items-center justify-center gap-[10px] bg-primaryLogo rounded-[24px]'>
                        <div className='w-[100px] h-full'>
                            <Image src={`/image/qrcode.svg`} className='w-full h-full' width={1000} height={1000} alt='qr code' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div>
                                <svg width="30" height="30" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7 15.3422C20.3316 15.3422 20.0352 15.6386 20.0352 16.007C20.0352 16.3754 20.3316 16.6719 20.7 16.6719C21.0684 16.6719 21.3648 16.3754 21.3648 16.007C21.3648 15.6386 21.0684 15.3422 20.7 15.3422Z" fill="#E2B659" />
                                    <path d="M26.0369 15.3422C25.6686 15.3422 25.3721 15.6386 25.3721 16.007C25.3721 16.3754 25.6686 16.6719 26.0369 16.6719C26.4053 16.6719 26.7018 16.3754 26.7018 16.007C26.7107 15.6386 26.4143 15.3422 26.0369 15.3422Z" fill="#E2B659" />
                                    <path d="M23 0.5C10.2961 0.5 0 10.7961 0 23.5C0 36.2039 10.2961 46.5 23 46.5C35.7039 46.5 46 36.2039 46 23.5C46 10.7961 35.7039 0.5 23 0.5ZM16.2437 26.393C16.2437 27.1297 15.6418 27.7316 14.9051 27.7316C14.1684 27.7316 13.5664 27.1297 13.5664 26.393V20.6789C13.5664 19.9422 14.1684 19.3402 14.9051 19.3402C15.6418 19.3402 16.2437 19.9422 16.2437 20.6789V26.393ZM29.6035 20.4543V21.3617V29.1422C29.6035 29.9238 28.9746 30.5527 28.193 30.5527H27.1777C27.2137 30.6695 27.2316 30.7953 27.2316 30.9211V30.993V31.4422V33.7422C27.2316 34.4789 26.6297 35.0809 25.893 35.0809C25.1563 35.0809 24.5543 34.4789 24.5543 33.7422V31.4422V30.993V30.9211C24.5543 30.7953 24.5723 30.6695 24.6082 30.5527H22.1285C22.1645 30.6695 22.1824 30.7953 22.1824 30.9211V30.993V31.4422V33.7422C22.1824 34.4789 21.5805 35.0809 20.8438 35.0809C20.107 35.0809 19.5051 34.4789 19.5051 33.7422V31.4422V30.993V30.9211C19.5051 30.7953 19.523 30.6695 19.559 30.5527H18.5437C17.7621 30.5527 17.1332 29.9238 17.1332 29.1422V21.3617V20.4543V19.3402H17.232H29.5047H29.6035V20.4543ZM17.1332 18.4598C17.1332 16.5551 18.409 14.884 20.3047 14.0035L20.0531 13.6262L19.8016 13.2578L19.2445 12.4223C19.1816 12.3234 19.2086 12.1797 19.3074 12.1168C19.4062 12.0449 19.55 12.0809 19.6129 12.1797L20.2059 13.0691L20.4574 13.4465L20.709 13.8238C21.5176 13.5094 22.407 13.3387 23.3594 13.3387C24.3027 13.3387 25.2012 13.5094 26.0098 13.8238L26.2613 13.4465L26.5129 13.0691L27.1059 12.1797C27.1688 12.0809 27.3125 12.0449 27.4113 12.1168C27.5102 12.1887 27.5461 12.3234 27.4742 12.4223L26.9172 13.2578L26.6836 13.6262L26.432 14.0035C28.3188 14.884 29.5945 16.5461 29.5945 18.4598H17.1332ZM33.1613 26.393C33.1613 27.1297 32.5594 27.7316 31.8227 27.7316C31.0859 27.7316 30.484 27.1297 30.484 26.393V20.6789C30.484 19.9422 31.0859 19.3402 31.8227 19.3402C32.5594 19.3402 33.1613 19.9422 33.1613 20.6789V26.393Z" fill="#E2B659" />
                                </svg>
                            </div>
                            <h1 className='text-[16px] text-white font-[800]'>For Ios</h1>
                            <a href="" className='px-[4px] py-[5px] bg-secondary items-center rounded-[5px] flex flex-row'>
                                <span><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 12.5833V4.25M10.0003 12.5833C9.41683 12.5833 8.3266 10.9214 7.91699 10.5M10.0003 12.5833C10.5838 12.5833 11.6741 10.9214 12.0837 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6663 14.25C16.6663 16.3183 16.2347 16.75 14.1663 16.75H5.83301C3.76467 16.75 3.33301 16.3183 3.33301 14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                <span className='text-[12px] text-white font-[600] '>Download Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp