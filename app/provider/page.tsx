"use client";

import ProviderOverview from '@/components/provider/ProviderOverview';
import ServiceRequested from '@/components/provider/ServiceRequested';
import InfoTable from '@/components/reusable/tables/InfoTable';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [isApproved,setIsApproved] = useState<boolean>(false)
  const headers = [
    { key: 'ClientName', title: 'Name', },
    { key: 'Service', title: 'Service' },
    { key: 'Date', title: 'Date and time' },
    { key: 'Price', title: 'Price' },
    { key: 'Status', title: 'Status' },
  ];

  const data = [
    { ClientName: 'Alice', Service: "Home cleaning", Date: "27/07/2024", Price: "$ 40", Status: "Accepted" },
    { ClientName: 'Bob', Service: "Deep cleaning", Date: "27/07/2024", Price: "$ 40", Status: "Canceled" },
    { ClientName: 'Charlie', Service: "Vehicle cleaning", Date: "27/07/2024", Price: "$ 40", Status: "Pending" },
  ];


  return (
    <div className='bg-[#F7F7F7] min-h-screen py-24 px-[10px] md:px-[50px] lg:px-[100px]'>
      <div className='flex flex-row gap-[10px]'>
        {/* left side */}
        <div className='flex flex-col gap-[10px] w-full lg:w-[60%]'>
          <ProviderOverview />
          <div className='w-full bg-white py-4 rounded-[12px]'>
            <InfoTable headers={headers} data={data} />
          </div>
        </div>

        {/* right side */}

        <div className='w-full lg:w-[40%] flex flex-col gap-[10px]'>
          <ServiceRequested />
          <div className='flex flex-col w-full gap-[4px] bg-white p-4 rounded-[12px]'>
            <div className='w-full items-center flex flex-row justify-between'>
              <div className='flex flex-row gap-[10px] items-center'>
                <span className='text-[14px] font-[600] text-black'>Services</span>
                <div className='p-2 rounded-full bg-[#F0FCFF] text-primary font-[700]'>12</div>
                <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6V12M12 9H6" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z" stroke="#13829F" stroke-width="1.5" />
                </svg>
                </div>
              </div>

              <a href='' className='flex flex-row gap-[4px] items-center'>
                <span className='text-[14px] font-[500]  text-primary'>View All</span>
                <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
              </a>

            </div>

            <div className='grid grid-cols-2 gap-[10px]'>
              <div className='w-full p-4 flex items-center justify-center bg-[#FBFBFB] rounded-[6px]'>
                <span className='text-[14px]'>Home cleaning</span>
              </div>
              <div className='w-full p-4 flex items-center justify-center bg-[#FBFBFB] rounded-[6px]'>
                <span className='text-[14px]'>Home cleaning</span>
              </div>
              <div className='w-full p-4 flex items-center justify-center bg-[#FBFBFB] rounded-[6px]'>
                <span className='text-[14px]'>Home cleaning</span>
              </div>
              <div className='w-full p-4 flex items-center justify-center bg-[#FBFBFB] rounded-[6px]'>
                <span className='text-[14px]'>Home cleaning</span>
              </div>
            
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
