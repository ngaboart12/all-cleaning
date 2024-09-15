import React from 'react'

const Payments = () => {
    return (
        <div className='flex flex-col gap-[10px] w-full'>
            <div className='w-full flex flex-row justify-between  items-center'>
                <div className='flex flex-row items-center gap-[10px]'>
                    <h1 className='font-[600] text-[14px]'>On going services</h1>
                    <div className='p-1 bg-primary rounded-[6px] text-[12px] text-white font-[600]'>
                        12
                    </div>

                </div>
                <a href="#" className=' uppercase text-[13px] font-[600] text-primary'>View All</a>
            </div>
            <table className='w-full'>
                <tr className='h-10 '>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start hidden sm:flex '>COMPANY</th>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start'>SERVICE</th>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start hidden sm:flex '>Date</th>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start'>AMOUNT</th>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start'>STATUS</th>
                    <th className='text-[14px] text-[#AAAAAA] font-[300] text-start'></th>
                </tr>
                <tr>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start hidden sm:flex '>Freshers</td>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start'>Home cleaning</td>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start hidden sm:flex '>27 jun 2024</td>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start'>2000$</td>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start'>
                        <div className='flex flex-row gap-[4px] items-center'>
                            <div>

                                <div className='p-1 rounded-full bg-secondary'></div>
                            </div>
                            <span className='text-secondary'>Payed</span>
                        </div>
                    </td>
                    <td className='text-[14px] text-[#4F4E4E] font-[400] text-start'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.3125 9C7.3125 9.93038 8.06962 10.6875 9 10.6875C9.93038 10.6875 10.6875 9.93038 10.6875 9C10.6875 8.06962 9.93038 7.3125 9 7.3125C8.06962 7.3125 7.3125 8.06962 7.3125 9Z" fill="#4F4E4E" />
                        <path d="M7.3125 14.625C7.3125 15.5554 8.06962 16.3125 9 16.3125C9.93038 16.3125 10.6875 15.5554 10.6875 14.625C10.6875 13.6946 9.93038 12.9375 9 12.9375C8.06962 12.9375 7.3125 13.6946 7.3125 14.625Z" fill="#4F4E4E" />
                        <path d="M7.3125 3.375C7.3125 4.30538 8.06962 5.0625 9 5.0625C9.93038 5.0625 10.6875 4.30538 10.6875 3.375C10.6875 2.44462 9.93038 1.6875 9 1.6875C8.06962 1.6875 7.3125 2.44462 7.3125 3.375Z" fill="#4F4E4E" />
                    </svg>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Payments