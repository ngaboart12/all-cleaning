import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

const BookingReview = ({ setSteps }: props) => {
    return (
        <div className=' w-full md:w-2/3 bg-white p-4 rounded-[6px] flex flex-col gap-[10px]'>
            <h1 className='text-[18px] font-[700]'>Booking Review</h1>
            <form action="" method="post" className='flex flex-col h-full justify-between gap-[20px] w-full'>
                <div className='flex flex-col gap-[20px]'>
                    <div className=' flex flex-row gap-[50px]'>
                        <div className='flex flex-col gap-[2px]'>
                            <h1 className='font-[600] text-black'>Deep cleaning</h1>
                            <span className='text-[14px] font-[400] '>September 12, 2024, 10:00 AM</span>
                        </div>
                        <div className=' flex flex-col gap-[2px]'>
                            <span className='text-[12px] text-[#6D6D6D]'> Price</span>
                            <span className='text-[16px] font-[700]'>140</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <h1 className='text-[14px] font-[400] text-[#6D6D6D]'>Porperty:</h1>
                        <div className='flex flex-row gap-[10px] md:gap-[20px]'>
                            <span className='text-[14px] font-[600]'>Apartment</span>
                            <span className='text-[14px] font-[600]'>-</span>
                            <span className='text-[14px] font-[600]'>2 Bedrooms,</span>
                            <span className='text-[14px] font-[600]'>2 Bathrooms</span>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-row gap-[20px] items-center'>
                    <div onClick={() => setSteps(3)} className=' cursor-pointer w-[200px] text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={() => setSteps(5)} type='submit' className='w-[200px] text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Confirm booking</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingReview