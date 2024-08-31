import Image from 'next/image'
import React from 'react'
import { array } from 'yup'

const CompanyDetails = () => {
    return (
        <div className='px-[10px] md:px-[100px] lg:px-[200px] flex flex-col gap-[10px] py-20 bg-[#FAFAFA]'>
            <div className='flex flex-row gap-[10px] items-center'>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.9998H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.99997 17C8.99997 17 4.00002 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <span className='text-[14px] font-[600] text-black'>Space around</span>
            </div>
            <div className='flex flex-col gap-[20px] w-full bg-white rounded-b-[20px]'>
                <div className='w-full h-[20vh]'>
                    <Image src={`/image/faq.png`} width={1000} height={1000} className='w-full h-full object-cover rounded-t-[20px]' alt='profile' />
                </div>
                <div className='flex flex-col gap-[10px] w-full px-[50px]'>
                    <div className='flex flex-row w-full justify-between items-center'>
                        <div className='flex flex-row gap-[10px]'>
                            <div className='w-[50px] h-[50px]'>
                                <Image src={`/image/user1.jpg`} width={1000} height={1000} className='w-full h-full object-cover rounded-[12px]' alt='hh' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='text-[13px] font-[600] text-black'>Space around</h1>
                                <span className='text-[12px] text-[#7D7D7D]'>Los angele,Calionia</span>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[20px] items-center'>
                            <div className='px-[20px] flex flex-row gap-[10px] items-center bg-[#E2F5FA] rounded-[6px] py-[10px]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="#13829F" stroke-linejoin="round" />
                                    <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="#13829F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className='text-[12px] font-[600] text-[#13829F]'>Chat with us</span>
                            </div>
                            <div className='px-[20px] flex flex-row gap-[10px] items-center bg-[#13829F] rounded-[6px] py-[10px]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0183 9.43334L15.5462 10.498C15.6182 10.6462 15.8102 10.7883 15.9722 10.8155L16.9291 10.9758C17.541 11.0787 17.685 11.5263 17.244 11.9678L16.5001 12.7179C16.3741 12.8449 16.3051 13.0899 16.3441 13.2653L16.5571 14.1938C16.7251 14.9288 16.3381 15.2131 15.6932 14.829L14.7963 14.2937C14.6343 14.1969 14.3674 14.1969 14.2024 14.2937L13.3055 14.829C12.6636 15.2131 12.2736 14.9258 12.4416 14.1938L12.6546 13.2653C12.6935 13.0899 12.6246 12.8449 12.4986 12.7179L11.7547 11.9678C11.3167 11.5263 11.4577 11.0787 12.0696 10.9758L13.0265 10.8155C13.1855 10.7883 13.3775 10.6462 13.4495 10.498L13.9774 9.43334C14.2654 8.85567 14.7333 8.85567 15.0183 9.43334Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 17V20.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 3.5V7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.9996 8.87895C21.9327 7.33687 21.7452 6.33298 21.2199 5.53884C20.9177 5.08196 20.5424 4.68459 20.1108 4.36468C18.9443 3.5 17.2986 3.5 14.0074 3.5H9.99263C6.70136 3.5 5.05573 3.5 3.88921 4.36468C3.45764 4.68459 3.08226 5.08196 2.78006 5.53884C2.25485 6.33289 2.06735 7.33665 2.00042 8.87843C1.98897 9.14208 2.21607 9.34375 2.4649 9.34375C3.85068 9.34375 4.97408 10.533 4.97408 12C4.97408 13.467 3.85068 14.6562 2.4649 14.6562C2.21607 14.6562 1.98897 14.8579 2.00042 15.1216C2.06735 16.6634 2.25485 17.6671 2.78006 18.4612C3.08226 18.918 3.45764 19.3154 3.88921 19.6353C5.05573 20.5 6.70137 20.5 9.99265 20.5H14.0074C17.2986 20.5 18.9443 20.5 20.1108 19.6353C20.5424 19.3154 20.9177 18.918 21.2199 18.4612C21.7452 17.667 21.9327 16.6631 21.9996 15.1211V8.87895Z" stroke="white" stroke-linejoin="round" />
                                </svg>


                                <span className='text-[12px] font-[600] text-[white]'>Book service</span>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-[14px] text-[#6b6b6b]'>About</h1>
                    <span className='max-w-[500px] text-[14px] text-[#000000]'>Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute.</span>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <div className='px-4 border-b-2 py-2 border-[#13829F]'>
                            <h1 className='text-[12px] text-[#13829F]'>Media</h1>
                        </div>
                        <div className='px-4  py-2 flex flex-row items-center gap-[10px]'>
                            <h1 className='text-[12px] text-[black]'>Reviews</h1>
                            <span className='h-[25px] w-[25px] flex items-center justify-center rounded-full text-[12px] bg-[#93c8d5] text-[#13829F]'>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-[20px]'>
                {Array.from({length:8}).map((item:any,index)=>{
                    return(
                <div className='w-full'>
                    <Image src={`/image/${index %2 !==0 ? 'homeclean.png' : 'loudry.png'} `} width={1000} height={1000} className='w-full rounded-[22px]' alt='hsg' />
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CompanyDetails