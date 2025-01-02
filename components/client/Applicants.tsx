import { useFetchApplications } from '@/app/hooks/jobs.hook';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import React from 'react'

interface applicantType {
    shift_id: number;
    setIsActive: any;
    isActive: boolean
}

const Applicants = ({ shift_id, setIsActive, isActive }: applicantType) => {
    const { data: applicants, isLoading, isError } = useFetchApplications(shift_id)
    return (
        <Dialog header={"Applicants"} visible={isActive} onHide={() => setIsActive(false)} className='w-[90%] md:w-1/2' >
            {!isLoading && (
                <div className='w-full flex flex-col pt-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center gap-[10px]'>
                            <span className='text-[14px]'>Applicant</span>
                            <span className='p-1 border px-4 rounded-[12px]'>{applicants?.data.length}</span>
                        </div>
                        <a href="#" className='text-[14px] font-[500] text-primary'>View All</a>
                    </div>
                    {applicants?.data.length == 0 && (
                        <div className='w-full flex items-center justify-center h-full p-6'>
                            <span className='text-[18px] font-[500] text-black'>No Applicant found</span>
                        </div>
                    )}

                    <div className='w-full grid grid-cols-1 md:grid-cols-1 gap-[20px] pt-4'>
                        {applicants?.data?.slice(0, 3).map((appl: any, index: number) => {
                            return (
                                <div key={index} className='flex flex-row items-center gap-[10px] justify-between '>
                                    <div className='flex flex-row items-center gap-[10px] cursor-pointer '>
                                        <div className='w-[50px] h-[50px] bg-gray-100 rounded-[6px]'>
                                            <Image src={`/image/cleanlogo1.jpg`} width={1000} height={1000} className='w-full h-full object-cover rounded-[6px]' alt='' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row gap-[4px] items-center'>
                                                <span className='text-[14px] font-[700] text-black'>{appl.company_name ? appl.company_name : appl.applicant_name}</span>

                                            </div>
                                            <div className='flex flex-row items-center gap-[10px]'>
                                                <span className='text-[12px]'>Type:</span>
                                                <span className='text-[12px] font-[400]'>{appl.company_name ?  "Company" : "Freelancer"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='px-4 py-2 bg-primary text-white rounded-[4px] text-[12px]'>Accept</button>

                                </div>
                            )
                        })}

                    </div>
                </div>

            )}
            {isLoading && (
                <div className=' w-full flex flex-row items-center justify-center p-6'>
                    <span>Loading..</span>
                </div>
            )}
        </Dialog>
    )
}

export default Applicants