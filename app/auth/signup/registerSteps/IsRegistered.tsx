import React from 'react';
import { CiCircleCheck } from "react-icons/ci";

const IsRegistered = () => {
    return (
        <div className='w-full h-screen fixed top-0 z-10  bg-black/60 flex items-center justify-center p-4'>
            <div className='p-10 w-full bg-white rounded-[12px] md:w-1/3 flex flex-col items-center justify-center gap-[10px]'>
                <CiCircleCheck size={80} color='lightgreen' />
                <div className='flex flex-col gap-[10px] items-center w-full'>
                    <h1 className='text-[18px] font-[700]'>Registration Successful</h1>
                    <span className='text-center text-[13px]'>Your account has been created successfully! You will be redirected to Login shortly.</span>
                    <div className='w-full flex flex-row gap-[10px] items-center justify-center'>
                        <a href="/" className='p-4 rounded-[6px] text-[12px]  w-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white duration-300 font-[500]'>Login later</a>
                        <a href="/auth" className='p-4 rounded-[6px] text-[13px] w-full flex flex-row items-center justify-center text-center  border bg-primary hover:opacity-70 duration-300 text-white'>Login Now</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default IsRegistered;
