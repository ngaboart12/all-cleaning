import Image from 'next/image'
import React from 'react'

const Providers = () => {
    const providers = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]
    return (
        <div className='py-24 bg-[#F7F7F7] min-h-screen px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[10px]'>
            <div className='w-full bg-white p-4 rounded-[12px] flex flex-col sm:flex-row  gap-[10px] sm:gap-[40px] items-center'>
                <div className='flex flex-row gap-[20px] items-center'>
                    <h1 className=' text-[14px] font-[600]'>Available Providers</h1>
                    <h1 className=' text-[14px] font-[600]'>12</h1>
                </div>
                <div className='flex flex-row items-center gap-[4px] px-4 bg-[#FAFAFA] rounded-[12px]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 17.5L22 22" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                    <input type="text" className='p-3 text-[13px] bg-transparent outline-none' placeholder='Search providers' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
                {providers.map((provider, index) => {
                    return (
                        <div key={index} className='w-full p-4 rounded-[12px] bg-white flex flex-col gap-[10px]'>
                            <div className='w-full h-[80px]'>
                                <Image src={`/image/carclean.png`} width={1000} height={1000} alt='logo' className='w-full h-full object-cover rounded-[12px]' />
                            </div>
                            <div className='flex flex-col gap-[10px] px-4 w-full'>
                                <div className='w-[50px] h-[50px] rounded-[6px] bg-primary mt-[-30px]'>
                                    <Image src={`/image/company.png`} width={1000} height={1000} alt='logo' className='w-full h-full object-cover rounded-[6px]' />
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[13px] font-[600] text-black'>Supreme Shine Cleaners</h1>
                                        <div className='flex flex-row items-center gap-[10px]'>
                                            <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>Joined date </h1>
                                            <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>20 June 2023 </h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-[4px] items-center'>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.773 3.37015L13.2395 6.3274C13.4395 6.73906 13.9727 7.13392 14.4227 7.20953L17.0808 7.65479C18.7806 7.94044 19.1806 9.18384 17.9557 10.4104L15.8893 12.4939C15.5393 12.8468 15.3477 13.5273 15.4559 14.0146L16.0476 16.5938C16.5142 18.6353 15.4392 19.425 13.6478 18.358L11.1564 16.871C10.7065 16.6022 9.96492 16.6022 9.50658 16.871L7.01522 18.358C5.23208 19.425 4.14887 18.6268 4.61549 16.5938L5.20709 14.0146C5.31541 13.5273 5.12377 12.8468 4.7738 12.4939L2.70737 10.4104C1.49083 9.18384 1.88246 7.94044 3.58227 7.65479L6.24031 7.20953C6.68192 7.13392 7.2152 6.73906 7.41517 6.3274L8.88167 3.37015C9.68158 1.76551 10.9814 1.76551 11.773 3.37015Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h1 className='text-[18px] font-[600]'>4.5</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[4px]'>
                                    <h1 className='text-[14px] font-[400] text-[#9F9F9F]'>Location</h1>
                                    <h1 className='text-[14px] font-[500] text-black'>Los angele,Calionia</h1>
                                </div>
                                <div className='flex flex-row items-center gap-[10px]'>
                                    <div className='w-full py-2 flex items-center justify-center bg-[#FFF9ED]'>
                                        <span className='text-[14px] text-[#E2B659]'>Home</span>
                                    </div>
                                    <div className='w-full py-2 flex items-center justify-center bg-[#EFFCFF]'>
                                        <span className='text-[14px] text-[#13829F]'>Loundry</span>
                                    </div>
                                    <div className=' cursor-pointer hover:scale-110 duration-200 py-2 px-4 bg-[#FFF9ED]'>
                                        <span className='text-[14px] text-[#E2B659]'>8+</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Providers