"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from "../../public/documents/services";

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
                {services.map((item, index) => (
                    <motion.a 
                        href={`services/#${item.slug}`} 
                        className={`cursor-pointer hover:scale-90 duration-200 w-full rounded-[12px] items-center md:items-start ${(item.id == 2 || item.id == 4 || item.id == 5 || item.id == 7) ? "bg-[#E8FAFF]" : "bg-[#F6FDFF]"} px-[20px] py-[20px] flex flex-col gap-[4px]`} 
                        key={index}
                        variants={itemVariants}
                    >
                        <div>{item.icon}</div>
                        <span className='text-[14px] font-[600]'>{item.name}</span>
                        <span className='text-[12px] font-[500] text-[#5B5B5B] text-center md:text-start'>{item.description}</span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
