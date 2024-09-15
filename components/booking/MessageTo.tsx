import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

const MessageTo = ({ setSteps }: props) => {
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
                        <div className='w-4 h-4  rounded-full bg-[#1D698D]'></div>
                    </div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                </div>
                <div className=' flex flex-row gap-[5px] items-center'>
                    <div>
                        <div className='w-4 h-4  rounded-full bg-[#1D698D]'></div>
                    </div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                    <div className='w-full h-2 bg-[#1D698D] rounded-[2px]'></div>
                </div>

            </div>

            {/* ens steps */}


            <form action="" method="post" className='flex flex-col gap-[20px] w-full'>
                <div className='flex flex-col gap-[20px]  w-full'>
                    <h1 className='text-[16px] font-[700]'>Do you have any notes you'd like to leave for the company?</h1>
                    <textarea className='w-full p-3 text-[14px] bg-[#FBFBFB] rounded-[12px]' rows={6} placeholder='Write messages' name="" id=""></textarea>

                </div>
                <div className=' flex flex-row gap-[20px] items-center'>
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

export default MessageTo