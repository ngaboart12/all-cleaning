"use client"
import React, { useState } from 'react'
import InfoPopUp from '@/components/reusable/tables/InfoPopUp';
import Table from '@/components/reusable/tables/Table';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter, useSearchParams } from 'next/navigation';
import SingleBook from '@/components/admin/SingleBook';

const Bookings = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()
    const [newVisible, setNewVisible] = useState<boolean>(false)
    const searchQuery = useSearchParams()
    const id = searchQuery?.get('id')

    const bookings = [
        {
            "#": 1,
            id: 1,
            name: "Ethan Roberts",
            service: "Deep Cleaning",
            date: "17 June 2024",
            status: "Active",
            duration: "2 hours",
            description: "A comprehensive cleaning service focusing on every corner of your home for a spotless result.",
            actions: "Edit/Delete",
        },
        {
            "#": 2,
            id: 2,
            name: "Olivia Martinez",
            service: "Office Cleaning",
            date: "17 December 2024",
            status: "Active",
            duration: "4 hours",
            description: "Tailored cleaning solutions for offices, ensuring a clean and professional environment.",
            actions: "Edit/Delete",
        },
        {
            "#": 3,
            id: 3,
            name: "Mason Johnson",
            service: "Carpet Cleaning",
            date: "24 January 2025",
            status: "Inactive",
            duration: "1.5 hours",
            description: "Specialized cleaning for carpets to remove dirt, stains, and allergens effectively.",
            actions: "Edit/Delete",
        },
        {
            "#": 4,
            id: 4,
            name: "Isabella Thompson",
            service: "Window Cleaning",
            date: "17 June 2024",
            status: "Active",
            duration: "1 hour",
            description: "Crystal-clear window clebookingsfor homes and offices using streak-free techniques.",
            actions: "Edit/Delete",
        },
        {
            "#": 5,
            id: 5,
            name: "Liam Clark",
            service: "Post-Construction Cleaning",
            date: "17 June 2024",
            status: "Active",
            duration: "8 hours",
            description: "A thorough cleaning service to remove debris and dust after construction or renovation work.",
            actions: "Edit/Delete",
        },
    ];


    const columns = [
        { field: '#', header: '#' },
        { field: 'name', header: 'Customer Name' },
        { field: 'service', header: 'Service Name' },
        { field: 'date', header: 'Estimated Date' },
        { field: 'duration', header: 'Duration' },
        { field: 'actions', header: 'Actions' },
    ];

    const actionTemplate = (rowData: any) => {
        return (
            <div className="flex items-center space-x-4">
                <button onClick={() => router.push(`/admin/bookings?id=${rowData.id}`)} className="text-primary flex flex-row items-center">View</button>
            </div>
        );
    };
    return (
        <>
            <div className='w-full min-h-screen flex flex-col gap-[10px] px-[30px] py-4 bg-gray-100'>
                {id && id !== "" ? (
                    <div className='w-full flex flex-col gap-[10px]'>
                        <SingleBook />

                    </div>
                ) : (
                    <>

                        <div className='w-full bg-white p-4 rounded-[6px] flex flex-row items-center justify-between gap-[40px]'>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <h1 className='text-[16px] font-[600] text-black'>Bookings</h1>
                                <div className='p-2 bg-gray-100 rounded-[4px]'>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-[10px] items-center'>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='border p-4 rounded-[6px] px-[10px] cursor-pointer py-[10px] flex flex-row gap-[10px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 5.83325H17.5" stroke="#292D32" stroke-linecap="round" />
                                            <path d="M5 10H15" stroke="#292D32" stroke-linecap="round" />
                                            <path d="M8.33333 14.1667H11.6667" stroke="#292D32" stroke-linecap="round" />
                                        </svg>
                                        <span className='text-[14px]'>Filter</span>

                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='border p-4 rounded-[6px] px-[10px] cursor-pointer py-[10px] flex flex-row gap-[10px]'>
                                        <select className=' text-[14px]'>
                                            <option>Recents</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' p-4 bg-white rounded-[6px]'>
                            <Table columns={columns} data={bookings} actionTemplate={actionTemplate} />
                        </div>
                    </>
                )}
            </div>
            <div>
                {isEditing && (
                    <Dialog className='w-1/2' header="New Service" visible={newVisible} onHide={() => setNewVisible(false)}>
                        <form className='flex flex-col gap-[10px]' method="post">
                            <div className='grid grid-cols-2 gap-[5px]'>
                                <div className='flex flex-col gap-[5px]'>
                                    <span className='text-[14px] font-[500] text-black'>Service Name</span>
                                    <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                        <input
                                            type="text"
                                            name='companyName'
                                            className='w-full py-3 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                            placeholder='Type your employer name'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <span className='text-[14px] font-[500] text-black'>Service Category</span>
                                    <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                        <select
                                            name='companyName'
                                            className='w-full py-3 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        >
                                            <option value="">Residential</option>
                                            <option value="">Window cleaning</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <span className='text-[14px] font-[500] text-black'>Price per hour</span>
                                    <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                        <input
                                            type="number"
                                            name='companyName'
                                            className='w-full py-3 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                            placeholder='Enter date per hour'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <span className='text-[14px] font-[500] text-black'>Duration</span>
                                    <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                        <input
                                            type="text"
                                            name='duration'
                                            className='w-full py-3 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                            placeholder='Enter Duration'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[500] text-black'>Description</span>
                                <div className='w-full  rounded-[12px] '>
                                    <textarea
                                        rows={3}
                                        name='duration'
                                        className='w-full py-3 text-black bg-[#F9F9F9] border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        placeholder='Enter Duration'
                                    />
                                </div>
                            </div>
                            <button className='p-3 rounded-[12px] bg-primary text-white '>Save</button>

                        </form>

                    </Dialog>

                )}
            </div>
        </>
    )
}

export default Bookings