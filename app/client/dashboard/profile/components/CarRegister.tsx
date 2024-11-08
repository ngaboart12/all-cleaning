import React from 'react'

const CarRegister = () => {
    return (
        <div className='flex flex-col gap-[20px] w-full'>
            <h1 className='text-[16px] font-[600] text-black'>Register Your House for Easy Cleaning Management</h1>
            <form action="" className='flex flex-col   gap-[10px]'>
                <div className=' grid grid-cols-3 gap-[10px]'>                
                    <div className='flex flex-col gap-[10px]'>
                    <span className='text-[12px] font-[400] text-black'>Car Make</span>
                    <select className='w-full p-3 border outline-none rounded-[12px] text-[12px]'>
                        <option value="">Ford</option>
                        <option value="">Toyota</option>
                        <option value="">Honda</option>
                    </select>
                </div>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='text-[12px] font-[400] text-black'>Car Model</span>
                        <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter Car Model' />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='text-[12px] font-[400] text-black'>Year of Manufacture</span>
                        <input type="number" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter Year of Manufacture' />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='text-[12px] font-[400] text-black'>Color</span>
                        <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter Car Color' />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='text-[12px] font-[400] text-black'>License Plate Number</span>
                        <input type="number" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter License Plate Number' />
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[700] text-black'>Locations</h1>
                    <div className='grid grid-cols-3 gap-[10px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[12px] font-[400] text-black'>Street Address</span>
                            <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter Street Address' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[12px] font-[400] text-black'>City</span>
                            <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter City' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[12px] font-[400] text-black'>State</span>
                            <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter State' />
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[700] text-black'>Additional Information</h1>
                    <div className='grid grid-cols-3 gap-[10px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[12px] font-[400] text-black'>Parking Instructions</span>
                            <input type="text" className='w-full p-3 border outline-none rounded-[12px] text-[12px]' placeholder='Enter Parking Instructions' />
                        </div>

                    </div>
                </div>
                <div className=' text-white cursor-pointer w-[200px] text-[14px] hover:scale-90 duration-300 transition-all flex-row px-10 py-4 bg-primary flex items-center justify-center'>Attach Photo +</div>
                <button type='submit' className='text-[14px] bg-primary  text-white rounded-[12px] py-3'>Register car</button>
            </form>
        </div>
    )
}

export default CarRegister