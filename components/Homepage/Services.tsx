"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.0
    });



    return (
        <div className='flex flex-col gap-[15px] bg-white py-10 px-[10px] lg:px-20'>
            <div className='flex flex-row justify-center md:justify-start gap-[10px] items-center'>
                <div className='w-[50px] h-[4px] bg-secondary'></div>
                <span className='font-[700] text-secondary text-[18px]'>Services</span>
            </div>
            <div className="flex flex-row gap-[10px] justify-between items-end">
                <span className='text-[24px] md:text-[24px] text-primary font-[800] max-w-[400px] leading-6 md:leading-6'>
                    Transform Your Space with Our Expert Cleaning Services
                </span>
                <a href="" className='flex flex-row items-center gap-[10px]'>
                    <span className='text-[12px] text-secondary font-[600]'>VIEW ALL</span>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.9998H4" stroke="#E2B659" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#E2B659" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </a>
            </div>
            <motion.div
                ref={ref}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]'
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >

                <motion.a
                    href={`services/#${`Services`}`}
                    className={`cursor-pointer hover:scale-90 duration-200 w-full rounded-[12px] items-center md:items-start  bg-[#F6FDFF] px-[20px] py-[20px] flex flex-col gap-[4px]`}
                    variants={itemVariants}
                >
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#E8FAFF" />
                            <g clip-path="url(#clip0_337_5718)">
                                <path d="M36.1203 35.2421H33.9731V23.2613C34.1748 23.3319 34.3878 23.3684 34.6032 23.3684C35.2666 23.3683 35.8702 23.0356 36.2177 22.4784C36.4827 22.0537 36.5647 21.5524 36.4486 21.067C36.3316 20.5777 36.0281 20.1635 35.5939 19.901L25.4893 13.7911C24.879 13.4221 24.1209 13.4221 23.5108 13.7911L19.8266 16.0188V12.8842C19.8266 12.3967 19.43 12 18.9425 12H16.9216C16.434 12 16.0374 12.3967 16.0374 12.8842V18.3099L13.4061 19.901C12.9719 20.1635 12.6684 20.5776 12.5514 21.067C12.4353 21.5525 12.5173 22.0538 12.7823 22.4784C13.2579 23.2409 14.2037 23.5486 15.0269 23.2613V35.2421H12.8797C12.6704 35.2421 12.5008 35.4118 12.5008 35.6211C12.5008 35.8304 12.6705 36 12.8797 36H17.4267C17.636 36 17.8057 35.8303 17.8057 35.6211C17.8057 35.4118 17.636 35.2421 17.4267 35.2421H15.7848V22.8509L24.5001 17.5811L30.2537 21.0602C30.4329 21.1685 30.6658 21.111 30.7741 20.9319C30.8823 20.7529 30.8249 20.5199 30.6458 20.4116L24.6961 16.8141C24.5756 16.7412 24.4246 16.7412 24.304 16.8141L14.9925 22.4444C14.4567 22.7683 13.7536 22.6037 13.4253 22.0773C13.2685 21.8261 13.22 21.5299 13.2885 21.2432C13.3579 20.9527 13.539 20.7063 13.7982 20.5496L18.0636 17.9706C18.2426 17.8623 18.3 17.6293 18.1918 17.4503C18.0834 17.2711 17.8505 17.2137 17.6715 17.322L16.7953 17.8518V12.8842C16.7953 12.8146 16.8519 12.7579 16.9216 12.7579H18.9424C19.012 12.7579 19.0688 12.8145 19.0688 12.8842V16.477L18.7522 16.6685C18.5731 16.7768 18.5157 17.0097 18.624 17.1888C18.7323 17.3679 18.9653 17.4253 19.1443 17.317L23.9029 14.4397C24.2713 14.217 24.7288 14.217 25.0972 14.4397L35.2019 20.5495C35.4611 20.7063 35.6422 20.9527 35.7116 21.2431C35.7801 21.5298 35.7315 21.826 35.5748 22.0773C35.3666 22.4111 35.0034 22.6104 34.6033 22.6105C34.3934 22.6105 34.1874 22.553 34.0076 22.4443L31.8042 21.112C31.6252 21.0037 31.3921 21.0611 31.2839 21.2402C31.1756 21.4193 31.233 21.6523 31.4121 21.7605L33.2154 22.8509V35.2421H18.8667C18.6574 35.2421 18.4877 35.4118 18.4877 35.621C18.4877 35.8303 18.6574 36 18.8667 36H36.1204C36.3297 36 36.4994 35.8303 36.4994 35.621C36.4993 35.4118 36.3297 35.2421 36.1203 35.2421Z" fill="#13829F" />
                                <path d="M19.5742 26.5264V31.0737C19.5742 31.5613 19.9708 31.9579 20.4584 31.9579H28.5421C29.0297 31.9579 29.4263 31.5612 29.4263 31.0737V26.5264C29.4263 26.0388 29.0297 25.6422 28.5421 25.6422H20.4584C19.9709 25.6422 19.5742 26.0388 19.5742 26.5264ZM24.1213 31.2H20.4584C20.3888 31.2 20.332 31.1434 20.332 31.0737V28.4211H24.1213V31.2ZM24.8792 28.4211H27.5317C27.741 28.4211 27.9106 28.2514 27.9106 28.0422C27.9106 27.8329 27.7409 27.6632 27.5317 27.6632H24.8792V26.4H28.5422C28.6118 26.4 28.6685 26.4567 28.6685 26.5264V31.0737C28.6685 31.1434 28.6118 31.2001 28.5422 31.2001H24.8792V28.4211ZM24.1213 27.6632H20.332V26.5263C20.332 26.4567 20.3887 26.4 20.4583 26.4H24.1213V27.6632Z" fill="#13829F" />
                                <path d="M25.2586 22.8632C26.0248 22.8632 26.6481 22.2399 26.6481 21.4737C26.6481 20.7075 26.0248 20.0842 25.2586 20.0842H23.7429C22.9768 20.0842 22.3535 20.7075 22.3535 21.4737C22.3535 22.2399 22.9768 22.8632 23.7429 22.8632H25.2586ZM23.1114 21.4737C23.1114 21.1254 23.3947 20.8421 23.743 20.8421H25.2587C25.6069 20.8421 25.8902 21.1254 25.8902 21.4737C25.8902 21.822 25.6069 22.1053 25.2587 22.1053H23.743C23.3947 22.1053 23.1114 21.822 23.1114 21.4737Z" fill="#13829F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_337_5718">
                                    <rect width="24" height="24" fill="white" transform="translate(12.5 12)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span className='text-[14px] font-[600]'>{`Services`}</span>
                    <span className='text-[12px] font-[500] text-[#5B5B5B] text-center md:text-start'>Enim turpis facilisi posuere lorem. Pellentesque lacus aliquet hendrerit.</span>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Services;
