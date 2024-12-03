"use client"
import React, { useState } from 'react'
import ChooseType from './setup-components/ChooseType'
import CompanyInfo from './setup-components/CompanyInfo'
import CompanyDocument from './setup-components/CompanyDocument'

const ProfileSetup = () => {
    const [steps, setSteps] = useState<number>(1)
    const handelNext = () => {
        if (steps < 3) {
            setSteps(steps + 1)
        }
    }
    const handelPrev = () => {
        if(steps > 1){
            setSteps(steps - 1)
        }
    }
    return (
        <div className='min-h-screen flex flex-col bg--white
         justify-center items-center w-full p-4 gap-[20px]'>
            {steps == 1 && (<ChooseType />)}
            {steps == 2 && (<CompanyInfo />)}
            {steps == 3 && (<CompanyDocument />)}
            <div className='flex flex-row mx-auto gap-[10px] items-center'>
                <button onClick={handelPrev} className='px-10 py-3 rounded-[6px] border border-primary'>Back</button>
                <button onClick={handelNext} className='px-10 py-3 hover:opacity-80 duration-300 transition-all rounded-[6px] bg-primary text-white'>Continue</button>
            </div>
        </div>
    )
}

export default ProfileSetup