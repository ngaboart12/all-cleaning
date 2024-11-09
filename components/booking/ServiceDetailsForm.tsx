import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

const ServiceDetailsForm = ({ setSteps }: props) => {
    return (
        <div className=' w-full md:w-3/4 bg-white p-6 rounded-[6px] flex flex-col gap-[10px]'>
            <form action="" method="post" className='flex flex-col gap-[20px] w-full'>
                <div className='flex flex-row gap-[10px]'>
                    <div className='flex flex-col gap-[10px] w-full'>

                        <h1 className='text-[14px] font-[600] text-black'>Where do you want this service</h1>
                        <div className='w-full px-[10px] p-1 rounded-[12px] bg-[#FBFBFB]'>
                            <select name="" id="" className='w-full p-3 bg-transparent text-[13px]  '>
                                <option value="" disabled>Select address</option>
                                <option value="">Kigali, Rwanda</option>
                                <option value="">Kigali, Rwanda</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px]   w-full'>
                        <h1 className='text-[14px] font-[600] text-black'>When do you want this service?</h1>
                        <div className='flex flex-row p-[14px] justify-between bg-[#FBFBFB] w-full rounded-[12px]'>
                            <h1 className='text-[14px] font-[600]'>Tomorrow</h1>


                            <div className='flex flex-row gap-[20px] items-center'>
                                <span className='text-[14px] text-[#908E8E]'>06:00 AM </span>
                            </div>
                            <div className='flex flex-row gap-[10px] items-center'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75004 4.5C6.75004 4.5 11.25 7.81418 11.25 9C11.25 10.1859 6.75 13.5 6.75 13.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px] w-full'>
                    <h1 className='text-[16px] font-[700]'>Property</h1>
                    <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-[10px]'>
                        <div className='flex flex-col gap-[4px]'>
                            <span className='text-[14px]'>Property type</span>

                            <div className='w-full  rounded-[12px] bg-[#FBFBFB]'>
                                <select name="" id="" className='w-full p-3 py-4 bg-transparent text-[13px]  '>
                                    <option value="" disabled>Select address</option>
                                    <option value="">Kigali, Rwanda</option>
                                    <option value="">Kigali, Rwanda</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <span className='text-[14px]'>Number of rooms</span>
                            <div className='flex flex-row gap-[10px] items-center'>
                                <div className='bg-[#FBFBFB] rounded-[12px] w-full'>
                                    <input type="number" placeholder='Bed Rooms' className='px-4 text-[13px] w-full h-full bg-transparent py-4 rounded-[12px]' />
                                </div>
                                <div className='bg-[#FBFBFB] rounded-[12px] w-full'>
                                    <input type="number" placeholder='Bath Rooms' className='px-4 text-[13px] w-full h-full bg-transparent py-4 rounded-[12px]' />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[600] text-black'>Do you have any notes you'd like to leave for the company?</h1>
                    <textarea placeholder='Write messages' className='p-3 bg-[#FBFBFB] rounded-[6px] text-[13px]' rows={4} name="" id=""></textarea>

                </div>

                <div className=' flex flex-row gap-[20px] items-center w-full justify-end'>
                    <div onClick={() => setSteps(1)} className=' cursor-pointer w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={() => setSteps(2)} type='submit' className='w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ServiceDetailsForm