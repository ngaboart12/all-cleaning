"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const FrequentlyQuestion = () => {
    const [openedFa, setOpenedFa] = useState<number | null>(null)
    const faquestion = [
        {
            question: "How do I book a cleaning service?",
            answer: "Visit our  app, choose your service, select a date and time, and complete the booking. You'll get a confirmation email."
        },
        {
            question: "What types of cleaning services do you offer?",
            answer: "Visit our  app, choose your service, select a date and time, and complete the booking. You'll get a confirmation email."
        },
        {
            question: "What types of cleaning services do you offer?",
            answer: "Visit our  app, choose your service, select a date and time, and complete the booking. You'll get a confirmation email."
        },
        {
            question: "What types of cleaning services do you offer?",
            answer: "Visit our  app, choose your service, select a date and time, and complete the booking. You'll get a confirmation email."
        },
        {
            question: "What types of cleaning services do you offer?",
            answer: "Visit our  app, choose your service, select a date and time, and complete the booking. You'll get a confirmation email."
        },
    ]
    return (
        <div className=' bg-[#FAFAFA] w-full py-10 px-[20px] md:px-10 lg:px-20 flex flex-col gap-[20px]'>
            <div className='flex flex-col lg:flex-row gap-[20px] justify-between items-end'>
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <h2 className='text-[16px] text-secondary'>Frequently Asked Questions</h2>
                    <h1 className='text-[36px] text-primary font-[700] max-w-[600px] leading-10'>Your Most Common Cleaning Queries Answered</h1>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <span className='text-[14px] text-[#393939]'>Discover detailed answers to the questions we get asked the most about our cleaning services.</span>
                </div>

            </div>
            <div className='flex flex-col lg:flex-row gap-[30px] w-full'>
                <div className='w-full lg:w-1/2 flex flex-col gap-[20px]'>
                    {faquestion.map((item: any, index: number) => {
                        return (
                            <div key={index} className='flex flex-col gap-[4px] p-4 rounded-[12px] bg-white w-full'>
                                <div className='w-full flex flex-row justify-between items-center gap-[20px]'>
                                    <span className='text-[14px] font-[500]'>{item.question}</span>
                                    <div onClick={() => {
                                        openedFa == index && setOpenedFa(null)
                                        openedFa != index && setOpenedFa(index)
                                    }}>
                                        {openedFa == index ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 12H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="black" stroke-width="1.5" />
                                            </svg>

                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 8V16M16 12H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="black" stroke-width="1.5" />
                                            </svg>

                                        )}
                                    </div>
                                </div>
                                {openedFa == index && (
                                    <span className='text-[13px] text-gray-500'>{item.answer}</span>
                                )}

                            </div>
                        )
                    })}
                </div>
                <div className='w-full lg:w-1/2'>
                    <div>
                        <Image src={`/image/faq.png`} width={1000} height={1000} className='w-full duration-300 transition-all h-full object-cover rounded-[12px]' alt='faq' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyQuestion