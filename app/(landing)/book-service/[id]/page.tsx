"use client"
import BookingReview from '@/components/booking/BookingReview'
import PaymentMethod from '@/components/booking/PaymentMethod'
import SelectProvider from '@/components/booking/SelectProvider'
import SelectType from '@/components/booking/SelectType'
import ServiceDetailsForm from '@/components/booking/ServiceDetailsForm'
import Image from 'next/image'
import React, { useState } from 'react'

const BookService = () => {
    const [steps, setSteps] = useState<number>(1)
    const [confirmed, setConfirmed] = useState<boolean>(false)
    return (
        <div className='w-full  bg-[#FAFAFA] py-20 px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[20px]'>
            <div className='flex flex-row items-center gap-[10px]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.9998H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.99997 17C8.99997 17 4.00002 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-[16px] font-[500]'>Service Booking</span>
            </div>

            <div className='flex flex-col md:flex-row  gap-[10px] w-full'>
                {confirmed ? (
                    <>

                        <div className='w-full md:w-1/3  bg-white rounded-[12px] p-4 flex flex-col gap-[20px]'>
                            <h1 className='text-[16px] font-[600] text-[#13829F]'>Service Summary</h1>
                            <div className='w-full flex flex-row items-center gap-[20px]'>
                                <div className='flex flex-col gap-[4px]'>
                                    <h1 className='text-[16px] font-[600]'>Deep cleaning</h1>
                                    <span className='text-[12px]'>September 12, 2024, 10:00 AM</span>
                                </div>
                                <div className='flex flex-col gap-[4px]'>
                                    <h1 className='text-[14px] text-[#6D6D6D]'>Price</h1>
                                    <div className='flex flex-row items-center gap-[10px]'>
                                        <h1 className=' text-[16px] font-[600] text-[#13829F]'>140</h1>
                                        <h1 className=' text-[16px] font-[500] text-[#13829F]'>rwf</h1>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col gap-[4px]'>
                                <h1 className='text-[14px] font-[400] text-[#6D6D6D]'>Porperty:</h1>
                                <div className='flex flex-row gap-[10px]'>
                                    <span className='text-[12px] font-[600]'>Apartment</span>
                                    <span className='text-[12px] font-[600]'>-</span>
                                    <span className='text-[12px] font-[600]'>2 Bedrooms,</span>
                                    <span className='text-[12px] font-[600]'>2 Bathrooms</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[4px]'>
                                <h1 className='text-[13px] font-[600] text-[#13829F]'>Provider</h1>
                                <div className='w-full p-4 bg-[#FAFAFA] rounded-[6px] flex flex-col gap-[10px]'>
                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <div className='w-[50px] h-[50px]'>
                                            <Image src={'/image/user1.jpg'} width={1000} height={1000} alt='service image' className=' w-fulll h-full object-cover rounded-[6px]' />
                                        </div>
                                        <div className='flex flex-col gap-[4px]'>
                                            <h1 className='text-[14px] font-[600]'>Space Around</h1>
                                            <span className='text-[12px] text-[gray]'>Los angele,Calionia</span>
                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-[4px] '>
                                        <h2 className='text-[14px] text-[#9D9D9D]'>About</h2>
                                        <span className='text-[13px] text-[#3B3B3B] font-[400]'>Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute.</span>
                                    </div>
                                    <a href="" className='px-[20px] w-[160px] py-3 rounded-[8px] bg-[#E2F5FA] flex flex-row items-center gap-[10px]'>
                                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="#13829F" stroke-linejoin="round" />
                                            <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="#13829F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </div>
                                        <span className='text-[14px] text-[#13829F]'>Chat with us</span>
                                    </a>


                                </div>
                            </div>

                        </div>
                        <div className=' w-full md:w-2/3 items-center justify-center bg-white px-4 md:px-20 p-4 rounded-[6px] flex flex-col gap-[30px]'>
                            <div className=''><svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="46" cy="46" r="45" fill="#F0FCFF" stroke="#13829F" stroke-width="2" />
                                <path d="M35.75 49.375C35.75 49.375 38.375 49.375 41.875 55.5C41.875 55.5 51.6029 39.4583 60.25 36.25" stroke="#13829F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                            <div className='flex flex-col gap-[10px] items-center'>
                                <h1 className='text-[16px] font-[600] text-[#13829F]'>Booking Confirmed!"</h1>
                                <span className='text-[14px] font-[400] text-[#7A8487]'>Your cleaning service has been successfully booked</span>
                            </div>
                            <div className='rounded-[6px] p-4 bg-[#FBFBFB] flex'>
                                <span className='text-[14px] font-[500] text-[#2E2C2C] text-center'>Thank you for your booking! The amount has been securely processed. Your cleaner will receive the quotation</span>

                            </div>

                            <div className=' flex w-full flex-col sm:flex-row gap-[20px] items-center'>
                                <div onClick={() => setSteps(4)} className=' cursor-pointer w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                                    <span>View My Bookings</span>
                                </div>
                                <button onClick={() => setSteps(5)} type='submit' className='w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                                    <span>Book Another Service</span>
                                </button>
                            </div>
                        </div>

                    </>
                ) : (
                    <>

                        <div className='w-full md:w-1/4  bg-white rounded-[12px] p-6 flex flex-col gap-[20px]'>
                            <h1 className='text-[16px] font-[600]'> Booking steps</h1>
                            <div className='flex flex-row gap-[10px]'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row gap-[20px] items-center'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#13829F" />
                                            <path d="M23.0454 11.7639L13.5454 21.2639C13.4903 21.3191 13.4248 21.3629 13.3527 21.3927C13.2806 21.4226 13.2034 21.438 13.1253 21.438C13.0473 21.438 12.97 21.4226 12.898 21.3927C12.8259 21.3629 12.7604 21.3191 12.7053 21.2639L8.549 17.1076C8.43759 16.9962 8.375 16.8451 8.375 16.6875C8.375 16.53 8.43759 16.3789 8.549 16.2674C8.66041 16.156 8.81152 16.0934 8.96908 16.0934C9.12664 16.0934 9.27775 16.156 9.38916 16.2674L13.1253 20.0044L22.2053 10.9237C22.3167 10.8123 22.4678 10.7497 22.6253 10.7497C22.7829 10.7497 22.934 10.8123 23.0454 10.9237C23.1568 11.0351 23.2194 11.1862 23.2194 11.3438C23.2194 11.5013 23.1568 11.6524 23.0454 11.7639Z" fill="white" />
                                        </svg>

                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[16px] text-primary'>step 1/3</span>
                                            <span className='text-[16px] text-[#747474]'>Service details</span>
                                        </div>
                                    </div>
                                    <div className='px-3'>
                                        <svg width="3" height="60" viewBox="0 0 3 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1.5" y1="60" x2="1.5" stroke="#13829F" stroke-width="3" stroke-dasharray="6 6" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-row gap-[20px] items-center'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#E4E4E4" />
                                            <path d="M23.0454 11.7638L13.5454 21.2638C13.4903 21.319 13.4248 21.3628 13.3527 21.3927C13.2806 21.4226 13.2034 21.438 13.1253 21.438C13.0473 21.438 12.97 21.4226 12.898 21.3927C12.8259 21.3628 12.7604 21.319 12.7053 21.2638L8.549 17.1076C8.43759 16.9962 8.375 16.8451 8.375 16.6875C8.375 16.5299 8.43759 16.3788 8.549 16.2674C8.66041 16.156 8.81152 16.0934 8.96908 16.0934C9.12664 16.0934 9.27775 16.156 9.38916 16.2674L13.1253 20.0043L22.2053 10.9237C22.3167 10.8123 22.4678 10.7497 22.6253 10.7497C22.7829 10.7497 22.934 10.8123 23.0454 10.9237C23.1568 11.0351 23.2194 11.1862 23.2194 11.3437C23.2194 11.5013 23.1568 11.6524 23.0454 11.7638Z" fill="white" />
                                        </svg>

                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[16px] text-[#747474]'>step 2/3</span>
                                            <span className='text-[16px] text-[#747474]'>Service details</span>
                                        </div>
                                    </div>
                                    <div className='px-3'>
                                        <svg width="3" height="60" viewBox="0 0 3 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1.5" y1="60" x2="1.5" stroke="#E4E4E4" stroke-width="3" stroke-dasharray="6 6" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-row gap-[20px] items-center'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#E4E4E4" />
                                            <path d="M23.0454 11.7638L13.5454 21.2638C13.4903 21.319 13.4248 21.3628 13.3527 21.3927C13.2806 21.4226 13.2034 21.438 13.1253 21.438C13.0473 21.438 12.97 21.4226 12.898 21.3927C12.8259 21.3628 12.7604 21.319 12.7053 21.2638L8.549 17.1076C8.43759 16.9962 8.375 16.8451 8.375 16.6875C8.375 16.5299 8.43759 16.3788 8.549 16.2674C8.66041 16.156 8.81152 16.0934 8.96908 16.0934C9.12664 16.0934 9.27775 16.156 9.38916 16.2674L13.1253 20.0043L22.2053 10.9237C22.3167 10.8123 22.4678 10.7497 22.6253 10.7497C22.7829 10.7497 22.934 10.8123 23.0454 10.9237C23.1568 11.0351 23.2194 11.1862 23.2194 11.3437C23.2194 11.5013 23.1568 11.6524 23.0454 11.7638Z" fill="white" />
                                        </svg>

                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[16px] text-[#747474]'>step 3/5</span>
                                            <span className='text-[16px] text-[#747474]'>Select  provider</span>
                                        </div>
                                    </div>
                                    <div className='px-3'>
                                        <svg width="3" height="60" viewBox="0 0 3 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1.5" y1="60" x2="1.5" stroke="#E4E4E4" stroke-width="3" stroke-dasharray="6 6" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-row gap-[20px] items-center'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#E4E4E4" />
                                            <path d="M23.0454 11.7638L13.5454 21.2638C13.4903 21.319 13.4248 21.3628 13.3527 21.3927C13.2806 21.4226 13.2034 21.438 13.1253 21.438C13.0473 21.438 12.97 21.4226 12.898 21.3927C12.8259 21.3628 12.7604 21.319 12.7053 21.2638L8.549 17.1076C8.43759 16.9962 8.375 16.8451 8.375 16.6875C8.375 16.5299 8.43759 16.3788 8.549 16.2674C8.66041 16.156 8.81152 16.0934 8.96908 16.0934C9.12664 16.0934 9.27775 16.156 9.38916 16.2674L13.1253 20.0043L22.2053 10.9237C22.3167 10.8123 22.4678 10.7497 22.6253 10.7497C22.7829 10.7497 22.934 10.8123 23.0454 10.9237C23.1568 11.0351 23.2194 11.1862 23.2194 11.3437C23.2194 11.5013 23.1568 11.6524 23.0454 11.7638Z" fill="white" />
                                        </svg>

                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[16px] text-[#747474]'>step 4/5</span>
                                            <span className='text-[16px] text-[#747474]'>service review</span>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                        {/* {steps === 1 && (<SelectType setSteps={setSteps} />)} */}
                        {steps === 1 && (<ServiceDetailsForm setSteps={setSteps} />)}
                        {/* {steps === 3 && (<SelectProvider setSteps={setSteps} />)} */}
                        {steps === 2 && (<BookingReview setConfirmed={setConfirmed} setSteps={setSteps} />)}

                        {/* {steps === 3 && (<PaymentMethod setConfirmed={setConfirmed} setSteps={setSteps} />)} */}
                    </>
                )}

            </div>
        </div>

    )
}

export default BookService