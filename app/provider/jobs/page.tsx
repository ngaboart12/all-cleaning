"use client"
import { useFetchProviderServicesQuery } from '@/app/hooks/services.hook';
import Table from '@/components/reusable/tables/Table';
import { cleaners, jobsData } from '@/lib/data/dummy';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react'
import { CiDollar, CiLocationOn } from 'react-icons/ci';
import Skeleton from 'react-loading-skeleton';


const Jobs = () => {
  const router = useRouter()
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState<number | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const token: any = session?.user.token;
  const { isLoading: loadingService, data: services = [], error: fetchError, refetch } = useFetchProviderServicesQuery(token);

  const handelOpenMenu = (index: number) => {
    setMenuOpen(index)
    setIsOpen(!isOpen)

  }

  const requested = [
      { id: "1", name: "Ngabo sevelin", date: "10 November 2024", price: 397, serviceName: 'Full House Cleaning', description: 'This is service', location: "Los angeles, califonia " },
      { id: "2", name: "Niyomukiza Serge", date: "22 October 2024", price: 397, serviceName: 'Car cleaning', description: 'This is service', location: "kigali, rwanda" },
  ]
  const columns = [
    { field: '#', header: '#' },
    { field: 'clientName', header: 'Client Name' },
    { field: 'jobTitle', header: 'Job Title' },
    { field: 'duration', header: 'Duration (Hours)' },
    { field: 'propertyName', header: 'Property Name' },
    { field: 'createdAt', header: 'Created Date' },
    { field: 'actions', header: 'Actions' },
  ];
  
  const actionTemplate = (rowData: any) => {
    return (
      <div className="flex items-center space-x-4">
        <button onClick={()=> setIsActive(true)} className="text-primary flex flex-row items-center">View</button>
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
            <h1 className='text-[13px] text-white'>10</h1>
          </div>
        </div>
      
      </div>

      <div className='flex flex-col gap-[10px] p-4 bg-white'>
        <Table columns={columns} data={jobsData} actionTemplate={actionTemplate} addPagination />
      </div>


    </div>
    <Dialog header="Requested Service" className='w-1/2' modal visible={isActive} onHide={() => setIsActive(false)} >
                {requested.filter((req) => req.id === "1").map((request, index) => {
                    return (
                        <div className='w-full flex flex-col gap-[10px]'>
                            <div className='w-full flex flex-row justify-between gap-[10px]'>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center'>
                                        <span className='text-[20px] font-[700] text-white'>NG</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[16px]  text-black font-[500]'>{request.name}</span>
                                        <span className='text-[12px] font-[700]'>{request.date}</span>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='flex flex-col'>
                                        <span>Service</span>
                                        <p className='text-primary text-[12px] font-[700]'>{request.serviceName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' grid grid-cols-3 gap-[10px] py-4'>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <CiLocationOn size={30} />
                                    <div className='flex flex-col'>
                                        <span>{request.location}</span>
                                        <a href="" className='text-primary text-[12px]  font-[700]'>View location</a>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='flex flex-col'>
                                        <span>Property Images</span>
                                        <a href="" className='text-primary text-[12px]  font-[700]'>View Images</a>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <CiDollar size={30} />
                                    <div className='flex flex-col'>
                                        <span className='text-[16px] font-[700] text-black'>{request.price}$</span>
                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='text-[16px] font-[500] text-black'>Property Details</h1>
                                <div className='grid grid-cols-4 gap-[10px]'>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>Property Type</span>
                                        <span className='text-black text-[12px] font-[700]'>{`Appartment`}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>N<sup>0</sup> of Rooms</span>
                                        <span className='text-black text-[12px] font-[700]'>{12}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>N<sup>0</sup> of Bathrooms</span>
                                        <span className='text-black text-[12px] font-[700]'>{2}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>Square Footage</span>
                                        <span className='text-black text-[12px] font-[700]'>{100} m<sup>2</sup></span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col gap-[10px] w-full'>
                                <h1 className='text-[16px] font-[600] text-black'>Reply With Comment And Price</h1>
                                <form action="" method="post" className='flex flex-col gap-[4px]'>
                                    <textarea rows={3} name="" id="" placeholder='Add comment' className='border rounded-[12px] p-2'></textarea>
                                    <div className='flex flex-row items-center mx-auto gap-[10px] py-2'>
                                      
                                        <button className='p-3 px-20 bg-primary text-white rounded-[10px]'>Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                })}

            </Dialog>
    </>
  )
}

export default Jobs