import React from 'react';

type Props = {
    LocationFormik: any;
};

const ChooseLocation = ({ LocationFormik }: Props) => {
    return (
        <div className='flex flex-col gap-[4px] '>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Select Your Personal Location</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Choose your location to continue with the setup process</span>
            <form onSubmit={LocationFormik.handleSubmit} className=' gap-[10px] py-4 flex flex-col '>
                <div className='grid grid-cols-2 gap-[4px]'>
                    <div className=' flex flex-col gap-[4px]'>
                        <div className='w-full h-[50px] rounded-[18px] bg-[#F9F9F9]'>
                            <input
                                type="text"
                                name='country'
                                onChange={LocationFormik.handleChange}
                                value={LocationFormik.values.country}
                                className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                placeholder='Select Country'
                            />
                        </div>
                        {LocationFormik.touched.country && LocationFormik.errors.country ? (
                            <div className='text-red-500 text-[12px] px-4'>{LocationFormik.errors.state}</div>
                        ) : null}
                    </div>
                    <div className=' flex flex-col gap-[4px]'>
                        <div className='w-full h-[50px] rounded-[18px] bg-[#F9F9F9]'>
                            <input
                                type="text"
                                name='state'
                                onChange={LocationFormik.handleChange}
                                value={LocationFormik.values.state}
                                className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                placeholder='Select State'
                            />
                        </div>
                        {LocationFormik.touched.state && LocationFormik.errors.state ? (
                            <div className='text-red-500 text-[12px] px-4'>{LocationFormik.errors.state}</div>
                        ) : null}
                    </div>
                    <div className=' flex flex-col gap-[4px]'>
                        <div className='w-full h-[50px] rounded-[18px] bg-[#F9F9F9] relative'>
                            <input
                                type="text"
                                name='city'
                                onChange={LocationFormik.handleChange}
                                value={LocationFormik.values.city}
                                className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                placeholder='Select City'
                            />
                        </div>
                        {LocationFormik.touched.city && LocationFormik.errors.city ? (
                            <div className='text-red-500 text-[12px] px-4'>{LocationFormik.errors.city}</div>
                        ) : null}
                    </div>
                    <div className=' flex flex-col gap-[4px]'>
                        <div className='w-full h-[50px] rounded-[18px] bg-[#F9F9F9] relative'>
                            <input
                                type="text"
                                name='street'
                                onChange={LocationFormik.handleChange}
                                value={LocationFormik.values.street}
                                className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                placeholder='Select Street'
                            />
                        </div>
                        {LocationFormik.touched.street && LocationFormik.errors.street ? (
                            <div className='text-red-500 text-[12px] px-4'>{LocationFormik.errors.street}</div>
                        ) : null}
                    </div>
                    <div className=' flex flex-col gap-[4px]'>
                        <div className='w-full h-[50px] rounded-[18px] bg-[#F9F9F9] relative'>
                            <input
                                type="text"
                                name='postCode'
                                onChange={LocationFormik.handleChange}
                                value={LocationFormik.values.postCode}
                                className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                placeholder='Select postCode'
                            />
                        </div>
                        {LocationFormik.touched.postCode && LocationFormik.errors.postCode ? (
                            <div className='text-red-500 text-[12px] px-4'>{LocationFormik.errors.postCode}</div>
                        ) : null}
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-between px-4'>
                    <a href="#" className='text-[12px] sm:text-[14px] text-[#13829F]'></a>
                    <a href="#" className='text-[12px] sm:text-[14px] text-[#13829F]'>Already have an account?</a>
                </div>
                <div className='flex flex-col gap-[4px]'>
                    <button type='submit' className='w-full h-[50px] rounded-[18px] bg-[#1990AF] text-white'> Continue</button>
                </div>
            </form>
        </div>
    );
}

export default ChooseLocation;
