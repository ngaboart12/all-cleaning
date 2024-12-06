"use client"
import React, { useEffect, useState } from 'react'
import HouseRegister from './components/HouseRegister'
import CarRegister from './components/CarRegister'
import GardenRegister from './components/GardenRegister'
import { fetchProfileQuery } from '@/app/hooks/users.hook'
import { useSession } from 'next-auth/react'

const UserProfile = () => {
    const { data: session, status } = useSession();
    const [opened, setOpened] = useState<string>("all");

    const { data: profile, isLoading, isFetching, isError } = fetchProfileQuery(session?.user?.id || "", String(session?.user?.token));

    return (
        <div className='flex flex-col gap-[20px] bg-[#F9F9F9] w-full py-20 px-[10px] md:px-[50px] lg:px-[100px]'>


            <div className='w-full flex flex-row justify-between items-center '>
                <div className='flex flex-col '>
                    <h1 className='text-black text-[20px] font-[400]'>My Profile</h1>
                    <span className='text-[14px] font-[400] text-black/40'>{`Rukundo Ephrem`}</span>
                </div>
                <button className='text-[12px] py-3 px-4 rounded-[12px] bg-red-400 text-white'>Delete Account</button>
            </div>
            <div className='flex flex-row gap-[20px] w-full'>
                <div className='w-1/3 bg-white p-4 flex flex-col gap-[20px]'>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <div className='w-[50px] h-[50px] bg-gray-200 rounded-full text-center flex items-center justify-center'>
                            <span className=' uppercase text-[20px] font-[700] text-primary'>NS</span>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <span className='text-[14px] font-[600] text-black'>{`Rukundo Ephrem`}</span>
                            <span className='text-[14px] font-[400] text-black/40'>{`ephrem12@gmail.com`}</span>
                        </div>
                    </div>
                    <div className=' py-4 flex flex-col'>
                        <form className='flex flex-col gap-[10px]'>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='text-[14px] font-[400] text-black'>Username</span>
                                <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[14px]' placeholder='update your name' value={"Rukundo Ephrem"} />
                            </div>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='text-[14px] font-[400] text-black'>Email</span>
                                <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[14px]' placeholder='Update your email' value={"ephrem12@gmail.com"} />
                            </div>
                            <button type='submit' className='text-[14px] bg-primary  text-white rounded-[12px] py-3'>Save changes</button>
                        </form>
                    </div>
                </div>
                <div className='w-2/3 flex flex-col gap-[10px]'>
                    <div className='w-full p-4 pb-0 bg-white flex flex-row gap-[20px]'>
                        <div onClick={() => setOpened("all")} className={`${opened == "all" ? "border-b-[1.5px] border-primary text-[14px] text-primary px-4" : "text-[14px] text-black "} pb-2 cursor-pointer transition-all duration-300 `}> <span>All Property</span> </div>
                        <div onClick={() => setOpened("house")} className={`${opened == "house" ? "border-b-[1.5px] border-primary text-[14px] text-primary px-4" : "text-[14px] text-black "} pb-2 cursor-pointer transition-all duration-300 `}> <span>House / appartment</span> </div>
                        <div onClick={() => setOpened("car")} className={`${opened == "car" ? "border-b-[1.5px] border-primary text-[14px] text-primary px-4" : "text-[14px] text-black"} pb-2 cursor-pointer transition-all duration-300 `}> <span>Cars</span> </div>
                        <div onClick={() => setOpened("garden")} className={`${opened == "garden" ? "border-b-[1.5px] border-primary text-[14px] text-primary px-4" : "text-[14px] text-black"} pb-2 cursor-pointer transition-all duration-300 `}> <span>Garden</span> </div>
                    </div>
                    <div className='w-full p-4 bg-white flex flex-col'>
                        {opened == "all" && (
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex flex-col gap-[10px]'>
                                    <h1>Porperties</h1>
                                    <div className='grid grid-cols-2 gap-[20px]'>


                                        <div className='border p-4 rounded-[12px] flex col gap-[10px]'>
                                            <div className='w-full flex flex-row justify-between gap-[10px] items-center'>
                                                <div className='flex flex-col'>
                                                    <h1 className='text-[16px] font-[600] text-black'>{`Itbu`}</h1>
                                                    <span className='text-[13px]'>{``}</span>
                                                </div>
                                                <div className='flex flex-row gap-[2px]'>
                                                    <button className='p-1 px-2rounded-[4px] text-[12px] text-primary'>View</button>
                                                    <button className='p-1 px-2 bg-red-400 rounded-[4px] text-white'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border p-4 rounded-[12px] flex col gap-[10px]'>
                                            <div className='w-full flex flex-row justify-between gap-[10px] items-center'>
                                                <div className='flex flex-col'>
                                                    <h1 className='text-[16px] font-[600] text-black'>{`House lodd`}</h1>
                                                    <span className='text-[13px]'>{``}</span>
                                                </div>
                                                <div className='flex flex-row gap-[2px]'>
                                                    <button className='p-1 px-2rounded-[4px] text-[12px] text-primary'>View</button>
                                                    <button className='p-1 px-2 bg-red-400 rounded-[4px] text-white'>Delete</button>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>


                            </div>
                        )}
                        {opened == "house" && <HouseRegister />}
                        {opened == "car" && <CarRegister />}
                        {opened == "garden" && <GardenRegister />}

                    </div>
                </div>

            </div>


        </div>
    )
}

export default UserProfile