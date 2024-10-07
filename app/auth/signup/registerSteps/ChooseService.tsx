import React from 'react';
import { fetchBaseServiceQuery } from '@/app/hooks/services.hook';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

type Props = {
    ServicesFormik: any;
};

const ChooseService = ({ ServicesFormik }: Props) => {
    const { isLoading, data: services, isError, error } = fetchBaseServiceQuery();

    const handleServiceSelect = (service: any) => {
        const currentIndex = ServicesFormik.values.services.findIndex((s: any) => s.serviceId === service.id);
        const newServices = [...ServicesFormik.values.services];

        if (currentIndex === -1) {
            newServices.push({ serviceId: service.id, title: service.title });
        } else {
            newServices.splice(currentIndex, 1);
        }

        ServicesFormik.setFieldValue('services', newServices);
    };

    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Pick the Services You Provide</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Select the cleaning services you want to offer to your clients</span>
            <div className='flex flex-col gap-[10px] py-4'>
                <div className='flex flex-col'>
                    {isLoading ? (
                        <div className='grid grid-cols-3 gap-[10px]'>
                            <Skeleton className='h-10' />
                            <Skeleton className='h-10' />
                            <Skeleton className='h-10' />
                            <Skeleton className='h-10' />
                            <Skeleton className='h-10' />
                            <Skeleton className='h-10' />
                        </div>
                    ) : (
                        <>
                            {services.length === 0 ? (
                                <div className='flex flex-col gap-[20px] items-center justify-center w-full'>
                                    <GiEmptyMetalBucketHandle color='black' size={40} />
                                    <h1 className='text-center'>NO SERVICE YET</h1>
                                </div>
                            ) : (
                                <div className='grid grid-cols-3 gap-[10px]'>
                                    {services.map((service: any, index: number) => {
                                        const isSelected = ServicesFormik.values.services.some((s: any) => s.serviceId === service.id);

                                        return (
                                            <div
                                                key={index}
                                                className={`flex rounded-[5px] flex-row cursor-pointer items-center overflow-hidden gap-[4px] p-2 ${isSelected ? 'bg-primary text-white' : 'bg-[#FAFAFA] text-primary'}`} // Change color based on selection
                                                onClick={() => handleServiceSelect(service)}
                                            >
                                                <span className=''>+</span>
                                                <label className='font-[400] cursor-pointer text-[10px] line-clamp-1 overflow-hidden'>
                                                    {service.title}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )}

                </div>
                <div className='p-2 cursor-pointer text-[12px] text-primary bg-[#FAFAFA] w-[120px] flex items-center justify-center rounded-[6px] flex-row gap-[4px]'>
                    <span className='text-[16px]'>+</span>
                    View More
                </div>
                {ServicesFormik.touched.services && ServicesFormik.errors.services && (
                    <span className='text-[#fc5555] text-[12px]'>{ServicesFormik.errors.services}</span>
                )}
                <button onClick={() => ServicesFormik.handleSubmit()} type='submit' className='p-3 bg-primary rounded-[20px]'>
                    <span className='text-white'>Continue</span>
                </button>
            </div>
        </div>
    );
};

export default ChooseService;
