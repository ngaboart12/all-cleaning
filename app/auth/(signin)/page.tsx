import Image from 'next/image'
import React from 'react'

const SignIn = () => {
    return (
        <div className=' w-full h-screen flex justify-center items-center bg-[#FAFAFA]'>
            <div className=' bg-white flex flex-row rounded-[30px] max-h-[90%] w-[95%] sm:w-[70%]  md:w-[95%]  lg:w-[70%] overflow-hidden'>
                <div className=' w-full md:w-1/2 h-full flex flex-col gap-[4px] p-5 py-10 lg:p-10'>
                <div className='w-[60px]'>
                    <Image src={`/image/swifti.svg`} width={1000} height={1000} className='w-full' alt='loho swifit' />
                </div>
                    <h1 className='text-[16px] text-[#E2B659] font-[500]'>Log In to Your Account</h1>
                    <span className='text-[#13829F] font-[600] text-[20px]'>Enter your credentials to access your profile</span>
                    <form action="" className='flex flex-col gap-[10px] py-4'>
                        <div className='w-full  h-[50px] rounded-[24px] bg-[#F9F9F9]'>
                            <input type="text" className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px] ' placeholder='Enter your email' />
                        </div>
                        <div className='w-full  h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                            <div className=' absolute right-4 top-4 cursor-pointer'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.73038 12.7461C2.0221 11.8259 1.66797 11.3658 1.66797 9.99967C1.66797 8.63351 2.0221 8.17345 2.73038 7.25328C4.1446 5.41597 6.51639 3.33301 10.0013 3.33301C13.4862 3.33301 15.858 5.41597 17.2722 7.25328C17.9805 8.17345 18.3346 8.63351 18.3346 9.99967C18.3346 11.3658 17.9805 11.8259 17.2722 12.7461C15.858 14.5833 13.4862 16.6663 10.0013 16.6663C6.51639 16.6663 4.1446 14.5833 2.73038 12.7461Z" stroke="#8F97B2" stroke-width="1.5" />
                                    <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61925 12.5 7.5 11.3807 7.5 10C7.5 8.61925 8.61925 7.5 10 7.5C11.3807 7.5 12.5 8.61925 12.5 10Z" stroke="#8F97B2" stroke-width="1.5" />
                                </svg>

                            </div>
                            <input type="password" className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px] ' placeholder='Enter your password' />
                        </div>
                        <div className='w-full flex flex-row items-center justify-between px-4'>
                            <a href="#" className='text-[12px]  sm:text-[14px] text-[#13829F]'>Forgot  your Password?</a>
                            <a href="#" className='text-[12px]  sm:text-[14px] text-[#13829F]'>Need an Account?</a>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <button type='submit' className='w-full  h-[50px] rounded-[24px] bg-[#1990AF] text-white'> Sign in</button>
                            <span className='text-center'>OR</span>
                            <button type='submit' className='w-full  h-[50px] rounded-[24px] border-[1.4px] border-[#1990AF]/50 text-[#1990AF]'>Sign in with Google </button>
                        </div>

                    </form>
                </div>
                <div className='hidden   w-1/2 bg-[#1990AF] md:flex flex-col items-center gap-[20px]  relative'>
                    <div className='w-full h-full absolute z-10'>
                        <Image src={`/image/background.svg`} className='w-full h-full object-cover' width={1000} height={1000} alt='ss' />
                    </div>
                    <div className='flex flex-col gap-[10px] items-center p-10 relative z-20'>
                        <button className='p-2 w-[200px] text-white text-[14px] rounded-[10px]  bg-[#13829F]'>Discover Now</button>
                        <h1 className='text-[22px] text-white font-[700] text-center'>Find Trusted Cleaners or <br /> Grow Your Cleaning Business</h1>
                        <span className='text-[14px] text-white font-[400] text-center'>Find Trusted Cleaners or Grow Your <br /> Cleaning Business</span>
                    </div>
                    <div className='w-full relative z-20  mt-[-30px]'>
                        <Image alt='ttt' src={`/image/authback.png`} width={1000} height={1000} className='w-full h-full' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn