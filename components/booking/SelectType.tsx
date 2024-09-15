import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

const SelectType = ({ setSteps }: props) => {
    return (
        <div className=' w-full md:w-2/3 bg-white p-4 rounded-[6px] flex flex-col gap-[10px]'>
            {/* steps */}
            <div className=' w-full  flex-row gap-[10px] items-center grid grid-cols-4'>
                <div className=' flex flex-row gap-[5px] items-center'>
                    <div>
                        <div className='w-4 h-4  rounded-full bg-[#1D698D]'></div>
                    </div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                </div>
                <div className=' flex flex-row gap-[5px] items-center'>
                    <div>
                        <div className='w-4 h-4  rounded-full bg-[#EFEFEF]'></div>
                    </div>
                    <div className='w-full h-2 bg-[#EFEFEF] rounded-[2px]'></div>
                    <div className='w-full h-2 bg-[#EFEFEF] rounded-[2px]'></div>
                </div>
                <div className=' flex flex-row gap-[5px] items-center'>
                    <div>
                        <div className='w-4 h-4  rounded-full bg-[#EFEFEF]'></div>
                    </div>
                    <div className='w-full h-2 bg-[#EFEFEF] rounded-[2px]'></div>
                    <div className='w-full h-2 bg-[#EFEFEF] rounded-[2px]'></div>
                </div>

            </div>

            {/* ens steps */}


            <h1 className='text-[14px] font-[600] text-black'>Select Home Cleaning Type</h1>
            <form action="" method="post" className='flex flex-col gap-[20px] w-full'>
                <div className='flex flex-col gap-[10px] w-full'>
                    <div className='w-full p-3 bg-[#FAFAFA] border border-[#F5F5F5] rounded-[8px] flex flex-col md:flex-row items-center gap-[20px]'>
                        <div className='flex flex-col gap-[3px] md:w-1/2'>
                            <h1 className='text-[14px] font-[600] text-center md:text-start'>Regular Cleaning</h1>
                            <span className='text-[12px] text-[#646464] text-center md:text-start'>A basic cleaning service to maintain a tidy and clean home environment.</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Start from</h1>
                            <span className='font-[600]'>$40 000</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Ends to</h1>
                            <span className='font-[600]'>$70 000</span>
                        </div>

                    </div>
                    <div className='w-full p-3 bg-[#FAFAFA] border border-[#F5F5F5] rounded-[8px] flex flex-col md:flex-row items-center gap-[20px]'>
                        <div className='flex flex-col gap-[3px] md:w-1/2'>
                            <h1 className='text-[14px] font-[600] text-center md:text-start'>Move-In/Move-Out Cleaning</h1>
                            <span className='text-[12px] text-[#646464] text-center md:text-start'>A comprehensive cleaning service for people moving in or out of a home, ensuring the property is spotless.</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Start from</h1>
                            <span className='font-[600]'>$40 000</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Ends to</h1>
                            <span className='font-[600]'>$70 000</span>
                        </div>

                    </div>
                    <div className='w-full p-3 bg-[#FAFAFA] border border-[#F5F5F5] rounded-[8px] flex flex-col md:flex-row items-center gap-[20px]'>
                        <div className='flex flex-col gap-[3px] md:w-1/2'>
                            <h1 className='text-[14px] font-[600] text-center md:text-start'>Deep Cleaning</h1>
                            <span className='text-[12px] text-[#646464] text-center md:text-start'>A thorough cleaning service designed to remove dirt, grime, and dust from hard-to-reach places.</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Start from</h1>
                            <span className='font-[600]'>$40 000</span>
                        </div>
                        <div className='flex flex-col px-10 py-2 md:p-3 bg-white rounded-[10px]'>
                            <h1 className='text-[14px] font-[600]'>Ends to</h1>
                            <span className='font-[600]'>$70 000</span>
                        </div>

                    </div>
                </div>
                <div className=' flex flex-row gap-[20px] items-center'>
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

export default SelectType