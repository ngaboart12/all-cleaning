import React from 'react'

const Subscription = () => {
    return (
        <div className='px-[10px] md:px-[50px] lg:px-[100px] bg-[#F8F8F8] min-h-screen flex flex-col gap-[10px] py-20 items-center justify-center '>
            <div className='flex flex-col gap-[4px] text-center'>
                <h1 className='text-[36px] font-[800]'>Choose Your Plan</h1>
                <span className='text-[14px] text-gray-600 max-w-[600px]'>
                    Unlock exclusive access to our platform and start applying for jobs tailored to your skills and preferences. Choose a plan that suits you best and take the first step toward your next opportunity!
                </span>
            </div>
            <div className='grid grid-cols-3 gap-[40px] w-full'>
                <div className='w-full  py-10 px-5 bg-white rounded-[22px] flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[4px] border-b pb-4'>
                        <div className='w-[30px] h-[30px] rounded-[8px] bg-primary'></div>
                        <h1 className='text-[16px] font-[600]'>Monthly</h1>
                        <span className='text-[40px] font-[800]'>$99.0</span>
                        <span className='text-[13px]'>For those who started webpro For those who started webpro For those who started webpro</span>
                    </div>
                    <button className='px-4 py-3 bg-primary rounded-[16px] text-[16px] text-white'>Continue</button>
                </div>
                <div className='w-full  py-10 px-5 bg-white rounded-[22px] flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[4px] border-b pb-4'>
                        <div className='w-[30px] h-[30px] rounded-[8px] bg-black'></div>
                        <h1 className='text-[16px] font-[600]'>yearly</h1>
                        <span className='text-[40px] font-[800]'>$399.0</span>
                        <span className='text-[13px]'>For those who started webpro For those who started webpro For those who started webpro</span>
                    </div>
                    <button className='px-4 py-3 bg-black rounded-[16px] text-[16px] text-white'>Continue</button>
                </div>
                <div className='w-full  py-10 px-5 bg-white rounded-[22px] flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[4px] border-b pb-4'>
                        <div className='w-[30px] h-[30px] rounded-[8px] bg-secondary'></div>
                        <h1 className='text-[16px] font-[600]'>Lifetime</h1>
                        <span className='text-[40px] font-[800]'>Contact</span>
                        <span className='text-[13px]'>For those who started webpro For those who started webpro For those who started webpro</span>
                    </div>
                    <button className='px-4 py-3 bg-secondary rounded-[16px] text-[16px] text-white'>Contact us</button>
                </div>

            </div>


        </div>
    )
}

export default Subscription