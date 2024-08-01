import React from 'react'

const Navbar = () => {
    return (
        <div className='px-[20px] max-w-[1724px] lg:px-20 p-3 bg-primary flex flex-row items-center justify-between fixed w-full z-[300]'>
            <a href="" className='px-[50px] py-[10px] rounded-[8px] bg-primaryLogo text-white font-[700]'>
                Logo
            </a>
            <div className=' flex-row gap-[50px] items-center hidden md:flex'>
                <a href="/" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Home</a>
                <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>How It Works</a>
                <a href="/services" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Services</a>
                <a href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>About Us</a>
                <a href="/contactus" className='px-[20px] py-[8px] rounded-[12px] bg-secondary flex flex-row items-center gap-[10px]'>
                    <span className='text-[12px] font-[400] text-white'>Reach To Us</span>
                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11.9998H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0001 17C15.0001 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>
                </a>
            </div>
            <div className='flex md:hidden'>
                <span className='text-white text-[30px] cursor-pointer'>=</span>
            </div>

        </div>
    )
}

export default Navbar