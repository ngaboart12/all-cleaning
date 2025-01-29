"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

const PopularService = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,  
        threshold: 0.1     
    });

    const popularServices = [
        {
            name: "Residential Cleaning",
            image: "/image/loudry.png"
        },
        {
            name: "Commercial Cleaning",
            image: "/image/loudry.png"
        },
        {
            name: "Deep Cleaning",
            image: "/image/loudry.png"
        },
        {
            name: "Move In/Move Out",
            image: "/image/loudry.png"
        },
        {
            name: "Post-Construction",
            image: "/image/loudry.png"
        },
        {
            name: "Window Cleaning",
            image: "/image/loudry.png"
        },
        {
            name: "Carpet & Upholstery",
            image: "/image/loudry.png"
        }
    ];

    return (
        <div className='px-[20px] lg:px-20 py-20 bg-white flex flex-col gap-[40px]'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-[30px] text-primary font-[700]'>Our Popular Services</h1>
                <a href="/serve" className='flex flex-row gap-[10px] items-center'>
                    <span className='uppercase text-secondary text-[12px] font-[600]'>explore ALL</span>
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
                className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]'
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {popularServices.map((item, index) => (
                    <motion.div
                        key={index}
                        className='h-[50vh] overflow-hidden rounded-[20px] relative flex items-center justify-center w-full cursor-pointer'
                        variants={itemVariants}
                    >
                        <div className='w-full h-full overflow-hidden'>
                            <Image src={item.image} alt={item.name} width={1000} height={1000} className='w-full h-full object-cover hover:scale-125 duration-500' />
                        </div>
                        <a href='/serve/book-service' className='p-3 bg-primary hover:bg-secondary duration-300 left-2 absolute bottom-4 w-[90%] rounded-[12px]'>
                            <h1 className='text-white font-[400] text-[12px] text-center'>{item.name}</h1>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default PopularService;
