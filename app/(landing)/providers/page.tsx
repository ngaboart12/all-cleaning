"use client"
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import providers from "@/lib/files/providers.json"

const Providers = () => {
  const searchParams:any = useSearchParams();
  const serviceName = searchParams.get('serviceName');

  return (
    <div className='w-full flex flex-col relative bg-[#FAFAFA] '>
      <div className='py-10 bg-primary flex items-center overflow-y-hidden relative  justify-center '>
        <div className='w-full h-full absolute inset-0'>
          <Image src="/image/background.svg" className='w-full h-full object-cover' alt='back' width={1000} height={1000} />
        </div>
        <div className='flex flex-col px-[20px]  items-center pt-10'>
          <h1 className='text-[24px] sm:text-[30px] font-[600] text-white text-center'>{serviceName}</h1>
          <span className='text-subtext text-[14px] '>Contact us</span>
        </div>
      </div>
      <div className='px-[10px] md:px-[50px] lg:px-[100px] bg-[#FAFAFA] py-10 flex flex-col gap-[20px]'>
        <div className='flex flex-row  justify-between items-center'>
          <div className='flex flex-row gap-[20px] items-center'>
            <h1 className='text-[14px] text-black font-[600]'>Available Providers</h1>
            <div className='rounded-[6px] bg-white p-2'>
              <span className='text-[12px] font-[600]'>16</span>
            </div>
          </div>
          <div className='p-1 px-4 rounded-[42px] bg-white flex flex-row gap-[10px] items-center'>
            <div>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17.5L22.5 22" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.5 11C20.5 6.02944 16.4706 2 11.5 2C6.52944 2 2.5 6.02944 2.5 11C2.5 15.9706 6.52944 20 11.5 20C16.4706 20 20.5 15.9706 20.5 11Z" stroke="#7C7C7C" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
            </div>
            <input type="search" className='w-full p-2 bg-transparent outline-none text-[12px] text-[#777777]' placeholder='Search provider' />
          </div>
          <div className='flex flex-row items-center gap-[20px]'>

            <div className='bg-white px-2 rounded-[40px]'>
              <select name="" id="" className='p-3 text-[13px] text-[#77777] bg-white outline-none rounded-[42px]'>
                <option value="">Location</option>
                <option value="">Kanshasi</option>
                <option value="">Washington</option>
              </select>
            </div>
            <div className='bg-white px-2 rounded-[40px]'>
              <select name="" id="" className='p-3 text-[13px] text-[#77777] bg-white outline-none rounded-[42px]'>
                <option value="">Price</option>
                <option value="">40,00</option>
                <option value="">30,0000</option>
              </select>
            </div>
            <div className='bg-white px-2 rounded-[40px]'>
              <select name="" id="" className='p-3 text-[13px] text-[#77777] bg-white outline-none rounded-[42px]'>
                <option value="">Sort by</option>
                <option value="">Low price</option>
                <option value="">Name</option>
              </select>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-[20px]'>
          {providers.map((item: any, index: number) => {
            return (
              <div className='w-full'>

              <div key={index} className=' cursor-pointer provider p-4 bg-white rounded-[12px] flex flex-col gap-[10px]'>
                <div className='flex flex-row gap-[10px] items-center'>
                  <div className='w-[40%] h-[15vh]'>
                    <Image src={`/image/loudry.png`} width={1000} height={1000} alt='profile' className='w-full h-full object-cover rounded-[12px]' />
                  </div>
                  <div className='flex flex-col gap-[4px]'>
                    <h1 className='text-[13px] font-[600] text-black'>{item.name}</h1>
                    <div className='flex flex-row gap-[10px] items-center'>
                      <span className='text-[12px] text-[#777777]'>Joined date:</span>
                      <span className='text-[12px]'>{item.joinedDate}</span>
                    </div>
                    <div className='flex flex-row gap-[10px]'>
                      <div className='flex flex-col gap-[0px]'>
                        <span className='text-[12px] text-[#777777] font-[700]'>From</span>
                        <span className='text-[11px]'>{item.from}</span>
                      </div>
                      <div className='flex flex-col gap-[0px]'>
                        <span className='text-[12px] text-[#777777] font-[700]'>Location</span>
                        <span className='text-[11px]'>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='providerButton duration-300 transition-all grid grid-cols-2 w-full gap-[10px]'>
                  <a href="" className='w-full p-2 text-[12px] bg-[#EFEFEF] flex items-center justify-center'>
                    Book Service
                  </a>
                  <a href="/company" className='w-full p-2 text-[12px] text-white bg-[#13829F] flex items-center justify-center'>
                    View Details
                  </a>
                  </div>
              </div>
          </div>
            )
          })}
        </div>


      </div>
    </div>
  );
};

export default Providers;
