import { useFetchApplications } from '@/app/hooks/jobs.hook';
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
    console.log("applicants====>", applicants)
    return (
        <Dialog header={"Applicants"} visible={isActive} onHide={() => setIsActive(false)} className='w-[90%] md:w-1/2' >
            {!isLoading && (
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center gap-[10px]'>
                            <span className='text-[14px]'>Applicant</span>
                            <span className='p-1 border px-4 rounded-[12px]'>{applicants?.data.length}</span>
                        </div>
                        <a href="#" className='text-[14px] font-[500] text-primary'>View All</a>
                    </div>
                    {applicants.data.length == 0 && (
                        <div className='w-full flex items-center justify-center h-full p-6'>
                            <span className='text-[18px] font-[500] text-black'>No Applicant found</span>
                        </div>
                    )}

                <div className='w-full grid grid-cols-1 md:grid-cols-1 gap-[20px] pt-4'>
                    {applicants?.data?.slice(0,1).map((appl: any, index: number) => {
                        return (
                            <div key={index} className='border w-full p-4 rounded-[12px] flex flex-col gap-[10px]'>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex flex-row gap-[5px] items-center'>
                                        <span className='text-[16px] font-[700]'>Position</span>
                                        <span className='text-[16px] font-[700] text-black'>{appl?.position_title}</span>
                                    </div>
                                    <div className={`p-2 text-[12px] border ${appl.application_status == "Pending" ? "border-[orange] text-[orange]" : ""} rounded-[12px] flex flex-row gap-[4px] items-center`}>
                                        <div className={`w-2 h-2 rounded-full ${appl.application_status == "Pending" ? "bg-[orange]" : "bg-[#000000]"} `}></div>
                                        {appl.application_status}
                                    </div>
                                </div>
                                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-[10px]'>
                                    <div className='flex flex-row gap-[4px]'>
                                        <span className='text-[13px] text-[#4a4a4a] font-[500]'>Applicant Type:</span>
                                        <span className='text-[13px] text-black font-[500]'>{appl?.company_name === null ? "Freelancer" : "Company"}</span>
                                    </div>
                                    <div className='flex flex-row gap-[4px]'>
                                        <span className='text-[13px] text-[#4a4a4a] font-[500]'>Applicant Name:</span>
                                        <span className='text-[13px] text-black font-[500]'>{appl?.applicant_name}</span>
                                    </div>
                                    {appl?.company_name !== null && (
                                        <div className='flex flex-row gap-[4px]'>
                                            <span className='text-[13px] text-[#4a4a4a] font-[500]'>Applicant Name:</span>
                                            <span className='text-[13px] text-black font-[500]'>{appl?.company_name}</span>
                                        </div>
                                    )}
                                     <div className='flex flex-row gap-[4px]'>
                                        <span className='text-[13px] text-[#4a4a4a] font-[500]'>Number of staff:</span>
                                        <span className='text-[13px] text-black font-[500]'>{appl?.number_of_staff}</span>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center w-full gap-[10px]'>
                                    <Button className='p-3 bg-primary text-white rounded-[6px] w-full flex items-center justify-center'>Approve</Button>
                                    <Button className='p-3 bg-red-500 text-white rounded-[6px] w-full flex items-center justify-center'>Deny</Button>
                                </div>
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