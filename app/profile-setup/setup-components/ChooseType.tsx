import React from 'react'

const ChooseType = () => {
    return (
        <div className='flex flex-col  w-full lg:w-1/2 mx-auto'>
            <h1 className='text-[24px] font-[800] text-primary text-center'>Choose Your Role to Get Started</h1>

            <div className='flex py-10  rounded-[12px] flex-col mx-auto sm:flex-row gap-[20px]'>
                <div className='p-6 border border-primary rounded-[12px] cursor-pointer duration-200 transition-all  hover:scale-105 w-full sm:w-1/2  flex flex-col gap-[10px]'>
                    <h1 className='font-[500] uppercase  text-primary text-[14px]'>I Need Cleaning Services</h1>
                    <p className='text-[13px] text-[#3f3f3f]'>Looking for professional cleaning services? Select this option to book trusted providers who will make your space spotless. Convenient, reliable, and stress-free!</p>
                </div>
                <div className='p-6 border border-primary rounded-[12px] cursor-pointer duration-200 transition-all  hover:scale-105 w-full sm:w-1/2  flex flex-col gap-[10px]'>
                    <h1 className='font-[500] uppercase text-primary text-[14px]'>I Provide Cleaning Services</h1>
                    <p className='text-[13px] text-[#3f3f3f]'>Are you a cleaning professional looking for new clients? Select this option to connect with customers and grow your business with ease!</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseType