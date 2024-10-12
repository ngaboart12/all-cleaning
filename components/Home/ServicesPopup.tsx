import { useFetchServiceWithCategoryQuery } from '@/app/hooks/category.hook';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    categoryId: string;
    title: string;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const ServicesPopup: React.FC<Props> = ({ categoryId, title, setIsOpened, setSelectedCategory }) => {
    const [categories, setCategories] = useState<any[]>([]);
    const [showData, setShowData] = useState(false); // New state variable for displaying data
    const { isLoading, data: category = [], error: fetchError, refetch } = useFetchServiceWithCategoryQuery();

    // Store fetched category data in local state and handle the timeout
    useEffect(() => {
        if (category) {
            setCategories(category);
            setShowData(false); // Initially set to false
            const timer = setTimeout(() => {
                setShowData(true); // After 2 seconds, set to true
            }, 2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [category]);

    const handleBack = () => {
        setSelectedCategory(''); 
        setCategories([]); 
        refetch()
        setIsOpened(false); 
    };

    return (
        <div className='w-full fixed z-50 top-0 h-screen bg-black/30 flex items-center justify-center'>
            <div className='w-1/2 bg-white p-4 flex flex-col gap-[10px] max-h-[95%] overflow-y-auto'>
                <div className='flex flex-row items-center justify-between gap-[20px]'>
                    <h1 className='text-[16px] font-[700]'>{title}</h1>
                    <div onClick={handleBack} className='cursor-pointer'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#141B34" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
                <div className='p-2 bg-[#F3F3F3] flex items-center justify-center'>
                    <span className='text-center text-[14px] font-[500] max-w-[400px]'>You are going to book a service from the {title} category</span>
                </div>
                <h1 className='text-[16px] font-[600]'>Select Service</h1>

                {isLoading ? (
                    <>
                        <div className='grid grid-cols-2 gap-[10px]'>
                            <Skeleton className='h-[20vh] bg-[#F3F3F3]' />
                            <Skeleton className='h-[20vh] bg-[#F3F3F3]' />
                            <Skeleton className='h-[20vh] bg-[#F3F3F3]' />
                            <Skeleton className='h-[20vh] bg-[#F3F3F3]' />
                        </div>
                    </>
                ) : (
                    <>
                        {showData ? ( 
                            categories.filter((item: any) => item.categoryId === categoryId).length === 0 ? (
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <h1 className='text-[16px] font-[600] text-center'>No services found</h1>
                                </div>
                            ) : (
                                <div className='grid grid-cols-2 gap-[10px]'>
                                    {categories.filter((item: any) => item.categoryId === categoryId).map((item: any, index: number) => (
                                        <a href={`./serve/service-company/${item.id}`}  className='bg-gray-100 relative hover:scale-90 duration-300 flex gap-[10px] cursor-pointer p-2 flex-col items-center justify-center overflow-hidden rounded-[12px]' key={index}>
                                            <div className='z-20 relative flex flex-col'>
                                                <span className='text-[16px] font-[700] text-center'>{item.title}</span>
                                                <span className='line-clamp-3 text-[12px] text-center'>{item.description}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )
                        ) : (
                            <div className='flex flex-col items-center justify-center w-full'>
                                <h1 className='text-[16px] font-[600] text-center'>Wait A moment...</h1>
                            </div>
                        )}
                    </>
                )}
                {categories.filter((item: any) => item.categoryId === categoryId).length > 4 && (
                    <div className='flex flex-row gap-[10px] justify-end'>
                        <div>{`Prev`}</div>
                        <div>{`Next`}</div>
                    </div>
                )}
            </div>

            <div>

            </div>
        </div>
    );
};

export default ServicesPopup;
