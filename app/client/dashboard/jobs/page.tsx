"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useSelectAllJobsQuery } from '@/app/hooks/jobs.hook';
import Table from '@/components/reusable/tables/Table';
import JobModal from '@/components/modal/JobModal';
import Applicants from '@/components/client/Applicants';




const Jobs = () => {
    const router = useRouter()
    const { data: session } = useSession();
    const [isActive, setIsActive] = useState<boolean>(false)
    const token: any = session?.user.token;
    const { data: activeJobs, isLoading } = useSelectAllJobsQuery(1)
    const [selectedJob,setSelectedJob] = useState<any>()


    const requested = [
        { id: "1", name: "Ngabo sevelin", date: "10 November 2024", price: 397, serviceName: 'Full House Cleaning', description: 'This is service', location: "Los angeles, califonia " },
        { id: "2", name: "Niyomukiza Serge", date: "22 October 2024", price: 397, serviceName: 'Car cleaning', description: 'This is service', location: "kigali, rwanda" },
    ]
    const columns = [
        { field: '#', header: '#' },
        { field: 'position_title', header: 'Position' },
        { field: 'shift_date', header: 'Date' },
        { field: 'actions', header: 'Actions' },
    ];

    const actionTemplate = (rowData: any) => {
        return (
            <div className="flex items-center space-x-4">
                <button onClick={() =>{ setSelectedJob(rowData);setIsActive(true)}} className="text-primary flex flex-row items-center">Applicants</button>
            </div>

        );
    };
    return (
        <>
            <div className='flex flex-col py-24 min-h-screen  bg-[#F8F8F8] gap-[10px] px-[10px] md:px-[50px] lg:px-[100px]'>
                <div className='flex flex-row gap-[10px] justify-between bg-white rounded-[12px] p-4 px-6 items-center'>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <span className='text-[16px] font-[600]'>Current Jobs</span>
                        <div className='p-2 bg-primary rounded-[4px]'>
                            <h1 className='text-[13px] text-white'>{!isLoading && activeJobs?.data?.pagination.count}</h1>
                        </div>
                    </div>

                </div>

                {isLoading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <div className='flex flex-col gap-[10px] p-4 bg-white'>
                            <Table columns={columns} data={activeJobs?.data.data} actionTemplate={actionTemplate} addPagination />
                        </div>
                    </>
                )}


            </div>
            {selectedJob && isActive && (
            <Applicants setIsActive={setIsActive} isActive={isActive} shift_id={selectedJob?.id} />
            )}
        
           
        </>
    )
}

export default Jobs