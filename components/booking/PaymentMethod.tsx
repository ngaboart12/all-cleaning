import { m } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>,
    setConfirmed: React.Dispatch<React.SetStateAction<boolean>>,
}

const PaymentMethod = ({ setSteps,setConfirmed }: props) => {
    const methods = [
        {
            id: 1,
            title: "PayPal",
            image: <Image src={`/image/paypal.png`} width={1000} height={1000} className='w-full' alt='logo ' />
        },
        {
            id: 2,
            title: "Apple Pay",
            image: <Image src={`/image/applepay.png`} width={1000} height={1000} className='w-full' alt='logo ' />
        },
        {
            id: 3,
            title: "Google Pay",
            image: <Image src={`/image/googlepay.png`} width={1000} height={1000} className='w-full' alt='logo ' />
        },
        {
            id: 4,
            title: "Venmo",
            image: <Image src={`/image/venom.png`} width={1000} height={1000} className='w-full' alt='logo ' />
        },
    ]
    return (
        <div className=' w-full md:w-2/3 bg-white p-4 rounded-[6px] flex flex-col gap-[10px]'>
            <h1 className='text-[18px] font-[700]'>Payment</h1>
            <div className='p-6 bg-[#FAFAFA] rounded-[12px] flex  flex-col'>
                <h1 className='text-[16px] font-[600]'>Total amount</h1>
                <span className='text-[24px] font-[700] text-primary'>$140</span>
            </div>
            <form action="" method="post" className='flex flex-col h-full justify-between gap-[20px] w-full'>
                <div className=' flex flex-col gap-[10px]'>
                    <h1 className='text-[16px] font-[600] text-[#1D3C6A]'>Choose payment method</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[10px]'>
                        {methods.map((item:any,index:number)=>{
                            return(

                        <div className={`p-4 cursor-pointer flex flex-row gap-[20px] ${item.id === 1 ? " border border-[#13829F] " : "border"} bg-[#FAFAFA] rounded-[12px] items-center`}>
                            <div className='w-[50px] p-2 bg-white rounded-[8px]'>
                                {item.image}
                            </div>
                            <span className='text-[16px]'>{item.title}</span>
                        </div>
                            )
                        })}
                    </div>
                </div>
                <div className=' flex flex-row gap-[20px] items-center'>
                    <div onClick={() => setSteps(4)} className=' cursor-pointer w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={() => setConfirmed(true)} type='submit' className='w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethod