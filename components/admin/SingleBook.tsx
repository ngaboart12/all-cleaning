import Image from 'next/image'
import React from 'react'
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

interface BookType {
    data?: any
}

const SingleBook = ({ data }: BookType) => {

    const companies = [
        {},
        {},
        {},
    ]
    return (
        <div className='bg-white rounded-[12px] p-4 flex flex-col gap-[20px]'>
            <div className='flex flex-row items-center justify-between'>
                <span className='font-[700] text-[16px]'>Deep cleaning</span>
                <div className=''>

                </div>
            </div>
            <div className='flex flex-row gap-[20px]'>
                <div className='p-4 border rounded-[6px] items-start w-[60%] flex flex-col gap-[20px]'>
                    <div className=' grid grid-cols-2 gap-[20px]'>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>Name :</span>
                            <span className='text-[13px] font-[400]'>Eric Nsabimana</span>
                        </div>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>Service :</span>
                            <span className='text-[13px] font-[400]'>Deep cleaning</span>
                        </div>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>Estimated Date :</span>
                            <span className='text-[13px] font-[400]'>17 july December</span>
                        </div>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>Duration :</span>
                            <span className='text-[13px] font-[400]'>2 hours</span>
                        </div>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>Product Name :</span>
                            <span className='text-[13px] font-[400]'>MY house</span>
                        </div>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <span className='text-[13px] font-[500] text-black/60'>N<sup>0</sup> Rooms :</span>
                            <span className='text-[13px] font-[400]'>20</span>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center  w-full  items-center gap-[20px]'>

                        <div className='flex flex-row mx-auto gap-[10px] items-center'>
                            <div className=' cursor-pointer hover:scale-90 duration-300 transition-all'>
                                <CiSquareChevLeft size={30} />

                            </div>
                            <div className='w-[300px] h-[200px] border rounded-[6px]'>
                                <Image src={`/image/house1.jpg`} width={1000} height={1000} alt='' className='w-full h-full rounded-[6px] object-cover' />
                            </div>
                            <div className=' cursor-pointer hover:scale-90 duration-300 transition-all'>
                                <CiSquareChevRight size={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 border rounded-[6px] w-[40%] flex flex-col gap-[20px]'>
                    <h1 className='font-[700]'>Avalialbe Companies</h1>
                    <div className='flex flex-col gap-[10px]'>
                        {companies.slice(0, 3).map((item, index) => {
                            return (
                                <div className=' cursor-pointer flex flex-row gap-[10px] justify-between items-center p-2 border rounded-[12px]'>
                                    <div className='flex flex-row items-center gap-[6px]'>
                                        <div className='w-[40px] h-[40px] rounded-[8px] border'>
                                            <Image src={`/image/company.png`} className='w-full h-full rounded-[8px]' width={100} height={100} alt='' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1 className='text-[14px] font-[600]'>EcoShine Solutions</h1>
                                            <span></span>
                                        </div>
                                    </div>
                                    <button className='text-[14px] px-3 p-2 rounded-[6px] bg-primary text-white'>Assign</button>
                                </div>
                            )
                        })}
                        <button className='text-primary ml-auto text-[13px]'>View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBook