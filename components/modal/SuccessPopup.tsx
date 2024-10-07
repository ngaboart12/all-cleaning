import { services } from '@/public/documents/services'
import React from 'react'

type successType = {
    service?: string,
    setSelectedServiceId?: any,
    setIsSucess: any,
    refetch: any

}

const SuccessPopup = ({ service, setSelectedServiceId, setIsSucess, refetch }: successType) => {
    const handleContinue = async () => {
        setSelectedServiceId("")
        await refetch()
        setIsSucess(false)
    }
    return (
        <div className='w-full top-0  left-0 fixed z-50 h-screen backdrop-blur-[1px] flex items-center justify-center p-10'>
            <div className='w-full shadow-md bg-white md:w-1/2 rounded-[12px] p-4 flex flex-col gap-[10px] items-center'>
                <div className='flex flex-row gap-[10px]'>
                </div>
                <span className='text-[18px] font-[700]'> {service} sucessfully Updated</span>
                <span className='text-[13px] text-center'>Your service has been updated successfully. It is now ready to be served to the customer. Thank you for ensuring a seamless experience!</span>
                <div className='flex flex-row gap-[20px] justify-between items-center w-full'>

                    <button className=' text-primary py-4 font-[400] text-[14px] border border-primary rounded-[6px] w-full'>Leave page</button>
                    <button onClick={handleContinue} className=' text-white py-4 font-[400] text-[14px] bg-primary rounded-[6px] w-full'>Continue</button>
                </div>


            </div>
        </div>
    )
}

export default SuccessPopup