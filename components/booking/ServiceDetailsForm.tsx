import { Button } from 'primereact/button';
import React, { useState } from 'react'
import { IoWarningOutline } from "react-icons/io5";
import { MdTimeline } from "react-icons/md";
type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
    properties?: any
    jobFormik: any
    loading?: boolean
}

const ServiceDetailsForm = ({ loading, jobFormik }: props) => {
    const [isToFill, setIsToFill] = useState<boolean>(false)
    return (
        <div className='w-full bg-white md:px-6 rounded-[6px] flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-[10px] w-full'>
                <h1 className='font-[700]'>Fill all Necessary information</h1>
    
                <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-y-[10px] gap-x-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Duration of Cleaning</h1>
                        <input
                            type="number"
                            name='hours'
                            onChange={jobFormik.handleChange}
                            value={jobFormik.values.hours}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Duration of Cleaning'
                        />
                        <span className='text-[13px] text-red-400'>
                            {jobFormik.touched.hours && jobFormik.errors.hours ? (
                                jobFormik.errors.hours

                            ) : ""}

                        </span>

                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Cleaning date*</h1>
                        <input
                            type="date"
                            name='shift_date'
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Cleaning Price'
                            onChange={jobFormik.handleChange}
                            value={jobFormik.values.shift_date}

                        />
                        <span className='text-[13px] text-red-400'>
                            {jobFormik.touched.shift_date && jobFormik.errors.shift_date ? (
                                jobFormik.errors.shift_date

                            ) : ""}

                        </span>

                    </div>
                </div>
                <div className='flex flex-row gap-[30px] py-4 items-center justify-center'>
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-[13px] font-[400]'>Start time</span>

                        <input onChange={jobFormik.handleChange}
                            value={jobFormik.values.start_time} name='start_time' type="time" className='border p-2 rounded-[12px]' />
                        <span className='text-[13px] text-red-400'>
                            {jobFormik.touched.start_time && jobFormik.errors.start_time ? (
                                jobFormik.errors.start_time

                            ) : ""}

                        </span>
                    </div>
                    <MdTimeline className='mt-6' />
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-[13px] font-[400]'>End time</span>

                        <input onChange={jobFormik.handleChange}
                            value={jobFormik.values.end_time} name='end_time' type="time" className='border p-2 rounded-[12px]' />
                        <span className='text-[13px] text-red-400'>
                            {jobFormik.touched.end_time && jobFormik.errors.end_time ? (
                                jobFormik.errors.end_time

                            ) : ""}

                        </span>
                    </div>

                </div>
                <div className='flex flex-row gap-[10px] items-center w-full'>
                    <div className='flex flex-row gap-[10px] w-full'>
                        <h1 className='text-[16px] font-[600]'>Overtime paid</h1>
                        <input
                            type="checkbox"
                            name='overtime_paid'
                            className='p-2 w-[20px] border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter overtime Price'
                            onChange={jobFormik.handleChange}
                            value={jobFormik.values.overtime_paid}
                        />
                    </div>
                    <div className='flex flex-row gap-[10px] w-full'>
                        <h1 className='text-[16px] font-[600]'>Mileage paid</h1>
                        <input
                            type="checkbox"
                            name='mileage_paid'
                            className='p-2 w-[20px] border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter overtime Price'
                            onChange={jobFormik.handleChange}
                            value={jobFormik.values.overtime_paid}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[400] text-black'>Add description of your job*</h1>
                    <textarea
                        onChange={jobFormik.handleChange}
                        value={jobFormik.values.description} placeholder='Write messages' name="description" className='p-3 bg-[#FBFBFB] rounded-[6px] text-[13px]' rows={4} id=""></textarea>
                    <span className='text-[13px] text-red-400'>
                        {jobFormik.touched.description && jobFormik.errors.description ? (
                            jobFormik.errors.description

                        ) : ""}

                    </span>
                </div>
                <div className='flex flex-row gap-[10px] '>
                    <div>
                        <IoWarningOutline size={20} color='red' />
                    </div>
                    <span className='text-[12px]'>
                        Please provide a detailed description of the job, including specific information about the property you want cleaned. This helps ensure the best service for your needs and makes it easier for the company to respond to your request accurately.
                    </span>
                </div>

                <div className='flex flex-row gap-[20px] items-center w-full justify-end'>
                    <div onClick={() => jobFormik.handleSubmit()} className='cursor-pointer w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <Button loading={loading} onClick={jobFormik.handleSubmit} type='submit' className='w-[200px] px-[10px] py-[10px] gap-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailsForm
