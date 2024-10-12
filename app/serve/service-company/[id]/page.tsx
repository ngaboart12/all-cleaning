"use client"
import NavbarHome from '@/components/Home/NavbarHome'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useFetchProviderWithServiceQuery } from '@/app/hooks/services.hook';

const Home = () => {
    const params: any = useParams<{ id: string }>();
    const id: string = params.id

    const { isLoading, data: providers, isError, error } = useFetchProviderWithServiceQuery(id);
    console.log(providers)
    return (
        <div className="flex flex-col bg-[#FFFFFF]">
            <NavbarHome />
            <div className='flex flex-row justify-between items-center py-4 bg-[#FAFAFA] gap-[10px] px-[10px] md:px-[50px] lg:px-[100px]'>
                <div className='flex flex-row items-center bg-[#F3F3F3] rounded-[23px] p-1 px-[15px] w-[55%] '>
                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 17.5L22 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                    </div>
                    <input type="text" className='w-full p-3 bg-transparent outline-none text-[13px] font-[400]' placeholder='Search Service' />
                </div>
                <div className='flex bg-[#F3F3F3] rounded-[22px] flex-row items-center gap-[10px] px-[30px] py-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="black" stroke-width="1.5" />
                        <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="black" stroke-width="1.5" />
                    </svg>
                    <span className='text-[14px]'>Location</span>

                </div>
                <div className='flex bg-[#F3F3F3] rounded-[22px] items-center flex-row gap-[10px] px-[20px] py-4'>
                    <span className='font-[700] text-black text-[14px]'>Sort by:</span>
                    <select name="" id="" className=' bg-transparent'>
                        <option value="">Recommended</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] px-[10px] md:px-[50px] lg:px-[100px] py-4 '>
                <span className='text-[16px] font-[600] text-black'>Available Company</span>
                {!isLoading && !providers && (
                    <div className='w-full flex items-center justify-center'><h1>No Providers yet on this service</h1></div>
                )}
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-[20px] '>
                    {!providers && isLoading ? (
                        <>
                            {Array.of(0, 1, 2, 3, 4, 5).map((index: number) => {
                                return (
                                    <Skeleton key={index} className='flex cursor-pointer hover:opacity-70 duration-300 flex-col justify-between p-4 rounded-[24px] bg-[#F6F6F6] h-[25vh]' />
                                )
                            })}
                        </>
                    ) : (
                        <>


                            {providers && providers.map((company: any, index: number) => {
                                return (
                                    <a href='./book-service/1234' className='flex flex-row gap-[10px] '>
                                        <div className='z-10  w-1/3 h-full'>
                                            <Image src={`/image/company.png`} width={1000} height={1000} alt='images' className='w-full rounded-[22px]' />
                                        </div>
                                        <div className='flex flex-col gap-[10px] py-4'>
                                            <div className='flex flex-row items-center gap-[10px] justify-between'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <h1 className='text-[16px] font-[600]'>{company.provider.companyName}</h1>
                                                    <div className='flex flex-row items-center gap-[10px]'>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>Joined date</span>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>20 June 2023</span>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row gap-[4px] items-center'>
                                                    <div><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.439 3.37017L12.9055 6.32742C13.1055 6.73908 13.6388 7.13393 14.0888 7.20954L16.7468 7.65481C18.4466 7.94046 18.8466 9.18385 17.6217 10.4104L15.5553 12.4939C15.2053 12.8468 15.0137 13.5273 15.1219 14.0146L15.7136 16.5938C16.1802 18.6353 15.1053 19.425 13.3138 18.358L10.8224 16.871C10.3725 16.6022 9.63093 16.6022 9.1726 16.871L6.68124 18.358C4.8981 19.425 3.81489 18.6269 4.28151 16.5938L4.87311 14.0146C4.98142 13.5273 4.78978 12.8468 4.43981 12.4939L2.37338 10.4104C1.15685 9.18385 1.54847 7.94046 3.24828 7.65481L5.90632 7.20954C6.34794 7.13393 6.88122 6.73908 7.08119 6.32742L8.54768 3.37017C9.3476 1.76553 10.6474 1.76553 11.439 3.37017Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-row justify-between items-center'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Location</span>
                                                    <span className='text-[14px] font-[600]'>{company.provider.user.city}, {company.provider.user.state}</span>
                                                </div>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Start from</span>
                                                    <span className='text-[14px] font-[600]'>$ {140}</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-[10px] justify-between items-center'>
                                                <a href={`/book-service/${company.id}`} className='px-[20px] text-[12px] py-[10px] rounded-[22px] text-white bg-[#13829F]'>Book Service</a>
                                                <a href="/company" className='px-[24px] text-[12px] py-[10px] rounded-[22px] text-black flex flex-row items-center gap-[4px]'>
                                                    View Profile
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 5.83331L5 15" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" />
                                                        <path d="M9.16602 5.10961C9.16602 5.10961 13.8606 4.71387 14.5731 5.42629C15.2855 6.13873 14.8897 10.8334 14.8897 10.8334" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                               <a href='./book-service/1234' className='flex flex-row gap-[10px] '>
                                        <div className='z-10  w-1/3 h-full'>
                                            <Image src={`/image/company.png`} width={1000} height={1000} alt='images' className='w-full rounded-[22px]' />
                                        </div>
                                        <div className='flex flex-col gap-[10px] py-4'>
                                            <div className='flex flex-row items-center gap-[10px] justify-between'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <h1 className='text-[16px] font-[600]'>{`Superme cleanears `}</h1>
                                                    <div className='flex flex-row items-center gap-[10px]'>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>Joined date</span>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>20 June 2023</span>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row gap-[4px] items-center'>
                                                    <div><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.439 3.37017L12.9055 6.32742C13.1055 6.73908 13.6388 7.13393 14.0888 7.20954L16.7468 7.65481C18.4466 7.94046 18.8466 9.18385 17.6217 10.4104L15.5553 12.4939C15.2053 12.8468 15.0137 13.5273 15.1219 14.0146L15.7136 16.5938C16.1802 18.6353 15.1053 19.425 13.3138 18.358L10.8224 16.871C10.3725 16.6022 9.63093 16.6022 9.1726 16.871L6.68124 18.358C4.8981 19.425 3.81489 18.6269 4.28151 16.5938L4.87311 14.0146C4.98142 13.5273 4.78978 12.8468 4.43981 12.4939L2.37338 10.4104C1.15685 9.18385 1.54847 7.94046 3.24828 7.65481L5.90632 7.20954C6.34794 7.13393 6.88122 6.73908 7.08119 6.32742L8.54768 3.37017C9.3476 1.76553 10.6474 1.76553 11.439 3.37017Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-row justify-between items-center'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Location</span>
                                                    <span className='text-[14px] font-[600]'>{`Los angels`}</span>
                                                </div>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Start from</span>
                                                    <span className='text-[14px] font-[600]'>$ {140}</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-[10px] justify-between items-center'>
                                                <a href="" className='px-[20px] text-[12px] py-[10px] rounded-[22px] text-white bg-[#13829F]'>Book Service</a>
                                                <a href="/company" className='px-[24px] text-[12px] py-[10px] rounded-[22px] text-black flex flex-row items-center gap-[4px]'>
                                                    View Profile
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 5.83331L5 15" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" />
                                                        <path d="M9.16602 5.10961C9.16602 5.10961 13.8606 4.71387 14.5731 5.42629C15.2855 6.13873 14.8897 10.8334 14.8897 10.8334" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                               <a href='./book-service/1234' className='flex flex-row gap-[10px] '>
                                        <div className='z-10  w-1/3 h-full'>
                                            <Image src={`/image/company.png`} width={1000} height={1000} alt='images' className='w-full rounded-[22px]' />
                                        </div>
                                        <div className='flex flex-col gap-[10px] py-4'>
                                            <div className='flex flex-row items-center gap-[10px] justify-between'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <h1 className='text-[16px] font-[600]'>{`Superme cleanears `}</h1>
                                                    <div className='flex flex-row items-center gap-[10px]'>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>Joined date</span>
                                                        <span className='text-[12px] font-[400] text-[#9F9F9F]'>20 June 2023</span>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row gap-[4px] items-center'>
                                                    <div><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.439 3.37017L12.9055 6.32742C13.1055 6.73908 13.6388 7.13393 14.0888 7.20954L16.7468 7.65481C18.4466 7.94046 18.8466 9.18385 17.6217 10.4104L15.5553 12.4939C15.2053 12.8468 15.0137 13.5273 15.1219 14.0146L15.7136 16.5938C16.1802 18.6353 15.1053 19.425 13.3138 18.358L10.8224 16.871C10.3725 16.6022 9.63093 16.6022 9.1726 16.871L6.68124 18.358C4.8981 19.425 3.81489 18.6269 4.28151 16.5938L4.87311 14.0146C4.98142 13.5273 4.78978 12.8468 4.43981 12.4939L2.37338 10.4104C1.15685 9.18385 1.54847 7.94046 3.24828 7.65481L5.90632 7.20954C6.34794 7.13393 6.88122 6.73908 7.08119 6.32742L8.54768 3.37017C9.3476 1.76553 10.6474 1.76553 11.439 3.37017Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-row justify-between items-center'>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Location</span>
                                                    <span className='text-[14px] font-[600]'>{`Los angels`}</span>
                                                </div>
                                                <div className='flex flex-col gap-[2px]'>
                                                    <span className='text-[14px] font-[400] text-[#9F9F9F]'>Start from</span>
                                                    <span className='text-[14px] font-[600]'>$ {140}</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-[10px] justify-between items-center'>
                                                <a href="" className='px-[20px] text-[12px] py-[10px] rounded-[22px] text-white bg-[#13829F]'>Book Service</a>
                                                <a href="/company" className='px-[24px] text-[12px] py-[10px] rounded-[22px] text-black flex flex-row items-center gap-[4px]'>
                                                    View Profile
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 5.83331L5 15" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" />
                                                        <path d="M9.16602 5.10961C9.16602 5.10961 13.8606 4.71387 14.5731 5.42629C15.2855 6.13873 14.8897 10.8334 14.8897 10.8334" stroke="#13829F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home