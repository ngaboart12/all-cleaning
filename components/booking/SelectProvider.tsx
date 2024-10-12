import Image from 'next/image'
import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

const SelectProvider = ({ setSteps }: props) => {
    const providers = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]
    return (
        <div className=' w-full md:w-2/3 bg-white p-6 rounded-[6px] flex flex-col gap-[10px]'>
            <form action="" method="post" className='flex flex-col gap-[20px] w-full'>
                <div className='flex flex-col gap-[20px]  w-full'>
                    <h1 className='text-[14px] font-[700]'>Select Provider</h1>
                    <div className='flex flex-row px-3  w-full rounded-[12px] bg-[#FAFAFA] items-center gap-[4px]'>
                        <div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 17.5L22.5 22" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.5 11C20.5 6.02944 16.4706 2 11.5 2C6.52944 2 2.5 6.02944 2.5 11C2.5 15.9706 6.52944 20 11.5 20C16.4706 20 20.5 15.9706 20.5 11Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <input type="text" className='h-full p-4 w-full bg-transparent outline-none text-[13px]' placeholder='Search  provider' />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-row gap-[20px] items-center'>
                            <h1 className='text-[14px] font-[700] text-black'>Available providers</h1>
                            <span className='text-[14px] font-[700] text-primary'>40</span>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px]'>
                            {providers.map((provider, index) => {
                                return (
                                    <div className={` ${index==0 ? "border-[2px] border-secondary" : ""} cursor-pointer p-4 w-full bg-[#FBFBFB] rounded-[12px] flex flex-col gap-[10px]`}>
                                        <div className='w-full items-center flex flex-row justify-between'>
                                            <div className='flex flex-row items-center gap-[4px] '>
                                                <div className='w-[40px] h-[40px]'>
                                                    <Image src={`/image/company.png`} width={1000} height={1000} alt='logo' className='w-full h-full object-cover rounded-[6px]' />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h1 className='text-[13px] font-[600] text-black'>Supreme Shine Cleaners</h1>
                                                    <div className='flex flex-row items-center gap-[10px]'>
                                                        <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>Joined date </h1>
                                                        <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>20 June 2023 </h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-[4px] items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.773 3.37015L13.2395 6.3274C13.4395 6.73906 13.9727 7.13392 14.4227 7.20953L17.0808 7.65479C18.7806 7.94044 19.1806 9.18384 17.9557 10.4104L15.8893 12.4939C15.5393 12.8468 15.3477 13.5273 15.4559 14.0146L16.0476 16.5938C16.5142 18.6353 15.4392 19.425 13.6478 18.358L11.1564 16.871C10.7065 16.6022 9.96492 16.6022 9.50658 16.871L7.01522 18.358C5.23208 19.425 4.14887 18.6268 4.61549 16.5938L5.20709 14.0146C5.31541 13.5273 5.12377 12.8468 4.7738 12.4939L2.70737 10.4104C1.49083 9.18384 1.88246 7.94044 3.58227 7.65479L6.24031 7.20953C6.68192 7.13392 7.2152 6.73906 7.41517 6.3274L8.88167 3.37015C9.68158 1.76551 10.9814 1.76551 11.773 3.37015Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <h1 className='text-[18px] font-[600]'>4.5</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-center'>
                                            <div className='flex flex-col gap-[2px]'>
                                                <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>Location</h1>
                                                <h1 className='text-[14px] font-[500] text-black'>Los angele,Calionia</h1>
                                            </div>
                                            <div className='flex flex-col gap-[4px]'>
                                                <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>Start from</h1>
                                                <h1 className='text-[16px] font-[600] text-primary  text-blackte'>$140</h1>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className=' w-full justify-end flex flex-row gap-[20px] items-center'>
                    <div onClick={() => setSteps(2)} className=' cursor-pointer w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={() => setSteps(4)} type='submit' className='w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SelectProvider