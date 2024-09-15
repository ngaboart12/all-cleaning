import React from 'react'

const BookedService = () => {
    return (
        <div className='p-4 flex flex-col gap-[4px] bg-white rounded-[12px] w-full'>
            <div className='w-full flex flex-row items-center justify-between'>
                <div className='flex flex-row items gap-[4px]'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.66666V3.33332M5 1.66666V3.33332" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.99658 10.8333H10.0041M9.99658 14.1667H10.0041M13.3262 10.8333H13.3337M6.66699 10.8333H6.67447M6.66699 14.1667H6.67447" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.91699 6.66666H17.0837" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.08301 10.2027C2.08301 6.57162 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57162 17.9163 10.2027V10.6307C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6307V10.2027Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 6.66666H17.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='font-[600] text-black text-[13px]'>June 17 ,</span>
                    <span className='font-[600] text-black text-[13px]'>2024</span>
                    <span className='font-[600] text-black text-[13px]'>10:00 AM</span>

                </div>
                <div className='p-2 rounded-full bg-secondary'></div>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <span className='text-[14px] font-[600] text-black'>Deep cleaning</span>
                <span className='text-[12px] font-[500] text-[#6D6D6D] text-start'>Price</span>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <span className='text-[12px] font-[400] text-[#C1C1C1]'>los angeles califonia</span>
                <div className='flex flex-row gap-[4px] items-center'>
                    <span className='text-[14px] font-[700] text-[#13829F]'>140 </span>
                    <span className='text-[14px] font-[700] text-[#13829F]'>Rwf </span>

                </div>
            </div>
            <div className='flex flex-col gap-[4px]'>
                <h1 className='text-[13px] font-[400] text-[#6D6D6D]'>Property</h1>
                <div className=' flex flex-row gap-[10px] items-center'>
                    <span className='font-[400] text-[#000] text-[14px]'>Apartment</span>
                    <span className='font-[400] text-[#000] text-[14px]'>-</span>
                    <span className='font-[400] text-[#000] text-[14px]'>2 Bedrooms, 2 Bathrooms</span>
                </div>
            </div>
            <div className='flex flex-row gap-[10px] w-full items-center'>
                <button className=' hover:scale-105 duration-300 text-[14px] font-[400] text-primary p-3 rounded-[8px] bg-[#F7FDFF] w-full'>More details</button>
                <button className='  hover:scale-105 duration-300 text-[14px] font-[400] text-white p-3 rounded-[8px] bg-primary w-full'>Mark as  served</button>
            </div>
        </div>
    )
}

export default BookedService