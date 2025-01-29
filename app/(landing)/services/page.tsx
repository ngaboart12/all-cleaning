"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import "primereact/resources/themes/lara-light-cyan/theme.css";


const Services = () => {
    return (
        <>
            <div className='w-full flex flex-col relative bg-[#FAFAFA] '>
                <div className='py-10 bg-primary flex items-center overflow-y-hidden relative  justify-center '>
                    <div className='w-full h-full absolute inset-0'>
                        <Image src="/image/background.svg" className='w-full h-full object-cover' alt='back' width={1000} height={1000} />
                    </div>
                    <div className='flex flex-col px-[20px]  items-center pt-10'>
                        <h1 className='text-[24px] sm:text-[30px] font-[600] text-white text-center max-w-[500px] leading-9'>Transform Your Space with Our Expert Cleaning Services</h1>
                        <span className='text-subtext text-[14px] '>Services</span>
                    </div>
                </div>

                <div className={`flex flex-col lg:flex-row w-full gap-[20px] items-center py-20`}>
                    <div className='w-full lg:w-1/2 flex flex-col gap-[10px]'>
                        <h1 className='text-[22px] font-[600] text-primary'>{`Services`}</h1>
                        <span className='text-[14px] text-[#5F5F5F]'>
                            A clean office is crucial for a productive work environment.
                            This service includes daily or weekly cleaning of workspaces,
                            restrooms, kitchens, and common areas. Customizable plans fit the
                            specific needs of your business.
                        </span>
                        <div className='flex flex-col gap-[10px] w-full'>
                            <h1 className='text-[16px] font-[600]'>Features</h1>
                            <div className='grid grid-cols-2 gap-[10px]'>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className='w-[4px] h-[25px] bg-primary'></div>
                                    <span className='text-[14px] text-[#5F5F5F]'>Customized cleaning plans tailored to your home needs</span>
                                </div>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className='w-[4px] h-[25px] bg-primary'></div>
                                    <span className='text-[14px] text-[#5F5F5F]'>Customized cleaning plans tailored to your home needs</span>
                                </div>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className='w-[4px] h-[25px] bg-primary'></div>
                                    <span className='text-[14px] text-[#5F5F5F]'>Customized cleaning plans tailored to your home needs</span>
                                </div>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className='w-[4px] h-[25px] bg-primary'></div>
                                    <span className='text-[14px] text-[#5F5F5F]'>Customized cleaning plans tailored to your home needs</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2  gap-[20px] md:pr-10'>
                            <div className=' cursor-pointer hover:opacity-90 flex flex-row items-center justify-center rounded-[30px] p-[15px] bg-[#13829F]'>
                                <span className='text-center text-white'>Book Now</span>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>

                            </div>
                            <a href="#" className=' flex flex-row items-center justify-center rounded-[30px] p-[15px] bg-[#EDFAFE]'>
                                <span className='text-center text-[#13829F]'>View details</span>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col'>
                        <div className='flex w-full items-center justify-center flex-col sm:flex-row gap-[10px]'>
                            <div className='relative w-full h-full'>
                                <div className='absolute z-20 p-3 bg-white rounded-[20px] w-[90%] mx-auto flex left-1/2 bottom-3  transform -translate-x-1/2 '>
                                    <div className='p-3 bg-[#F8F8F8] w-full rounded-[20px] flex flex-row gap-[4px]'>
                                        <div>
                                            <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="55" height="56" rx="6" fill="white" />
                                                <path d="M30.3333 41.3333L29.9127 40.7748C28.9644 39.5159 28.7292 37.5925 29.3291 36" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M23.6665 41.3333L24.0872 40.7748C25.0354 39.5159 25.2706 37.5925 24.6708 36" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M20.3335 41.3334H33.6668" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M27.0002 21.3333C25.5274 21.3333 24.3335 22.2288 24.3335 23.3333C24.3335 24.4379 25.5274 25.3333 27.0002 25.3333C28.473 25.3333 29.6668 26.2288 29.6668 27.3333C29.6668 28.4379 28.473 29.3333 27.0002 29.3333M27.0002 21.3333C28.1612 21.3333 29.149 21.8899 29.5151 22.6667M27.0002 21.3333V20M27.0002 29.3333C25.8391 29.3333 24.8514 28.7768 24.4852 28M27.0002 29.3333V30.6667" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M29.6665 14.6666H24.3332C19.9609 14.6666 17.7747 14.6666 16.2251 15.7517C15.6517 16.1532 15.153 16.6518 14.7516 17.2252C13.6665 18.7748 13.6665 20.961 13.6665 25.3333C13.6665 29.7056 13.6665 31.8917 14.7516 33.4414C15.153 34.0148 15.6517 34.5134 16.2251 34.9149C17.7747 36 19.9609 36 24.3332 36H29.6665C34.0388 36 36.2249 36 37.7746 34.9149C38.348 34.5134 38.8466 34.0148 39.2481 33.4414C40.3332 31.8917 40.3332 29.7056 40.3332 25.3333C40.3332 20.961 40.3332 18.7748 39.2481 17.2252C38.8466 16.6518 38.348 16.1532 37.7746 15.7517C36.2249 14.6666 34.0388 14.6666 29.6665 14.6666Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[3px]'>
                                            <h1 className='text-[14px] font-[400] text-primary'>Start From</h1>
                                            <h1 className='text-[18px] font-[800]'>${`100`}</h1>
                                        </div>
                                    </div>
                                </div>
                                <Image src={`/image/carclean.png`} className='w-full h-full rounded-[24px]' alt='back' width={200} height={200} />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={`/image/homeclean.png`} className='w-full h-full rounded-[24px]' alt='back' width={200} height={200} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default Services