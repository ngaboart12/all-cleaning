"use client"
import { useFetchApplicantionProvider } from '@/app/hooks/jobs.hook';
import { useFetchProviderServicesQuery } from '@/app/hooks/services.hook';
import Table from '@/components/reusable/tables/Table';
import { cleaners } from '@/lib/data/dummy';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Menu = (className: any) => {
  return (
    <div className={`bg-white shadow absolute right-6 top-10 p-2 px-4 rounded-[6px] flex flex-col gap-[4px] items-start`}>
      <button className='text-[13px] text-primary font-[700]'>View</button>
      <button className='text-[13px] text-green-600 font-[700]'>Update</button>
      <button className='text-[13px] text-red-500 font-[700]'>Delete</button>
    </div>
  )
}

const CleanersPage = () => {
  const router = useRouter()
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState<number | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const token: any = session?.user.token;
  const { data: applications, isLoading, isError } = useFetchApplicantionProvider()
  console.log("applic==>", applications)

  const handelOpenMenu = (index: number) => {
    setMenuOpen(index)
    setIsOpen(!isOpen)

  }
  const columns = [
    { field: '#', header: '#' },
    { field: 'position_title', header: 'Position Name' },
    { field: 'number_of_staff', header: 'Staff' },
    { field: 'shift_date', header: 'Date' },
    { field: 'application_status', header: 'Status' },
    { field: 'actions', header: 'Actions' },
  ];
  const actionTemplate = (rowData: any) => {
    return (
      <div className="flex items-center space-x-4">
        <button onClick={() => router.push(``)} className="text-primary flex flex-row items-center">View</button>
        <button onClick={() => router.push(``)} className="text-red-500 flex flex-row items-center">Delete</button>
      </div>
    );
  };
  return (
    <div className='flex flex-col py-24 min-h-screen  bg-[#F8F8F8] gap-[10px] px-[10px] md:px-[50px] lg:px-[100px]'>
      <div className='flex flex-row gap-[10px] justify-between bg-white rounded-[12px] p-4 px-6 items-center'>
        <div className='flex flex-row gap-[10px] items-center'>
          <span className='text-[16px] font-[600]'>My Application</span>
          <div className='p-2 bg-primary rounded-[4px]'>
            <h1 className='text-[13px] text-white'>{!isLoading && applications?.data?.length}</h1>
          </div>
        </div>
        <a href='/provider/jobs' className='flex flex-row gap-[10px] p-3 px-[20px] rounded-[4px] bg-primary'>
          <span className='text-white text-[14px]'>+</span>
          <span className='text-[14px] font-[400] text-white'>Apply To Another</span>
        </a>
      </div>
      {isLoading ? (
        <div className='w-full p-10 items-center justify-center flex'>Loading</div>
      ) : (
        <div className='flex flex-col gap-[10px] p-4 bg-white'>
          <Table columns={columns} data={applications.data} actionTemplate={actionTemplate} />
        </div>
      )}


    </div>
  )
}

export default CleanersPage