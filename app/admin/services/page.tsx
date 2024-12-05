"use client"
import React, { useState } from 'react'
import InfoPopUp from '@/components/reusable/tables/InfoPopUp';
import Table from '@/components/reusable/tables/Table';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { CgNametag } from "react-icons/cg";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [newVisible, setNewVisible] = useState<boolean>(false)
    const [selectedData, setSelectedData] = useState(true)

    const onHide = () => {
        setVisible(false)
        setIsEditing(false)
    }
    const services = [
        {
            "#": 1,
            name: "Deep Cleaning",
            category: "Residential",
            price: "$50/hour",
            status: "Active",
            duration: "2 hours",
            description: "A comprehensive cleaning service focusing on every corner of your home for a spotless result.",
            actions: "Edit/Delete",
        },
        {
            "#": 2,
            name: "Office Cleaning",
            category: "Commercial",
            price: "$200",
            status: "Active",
            duration: "4 hours",
            description: "Tailored cleaning solutions for offices, ensuring a clean and professional environment.",
            actions: "Edit/Delete",
        },
        {
            "#": 3,
            name: "Carpet Cleaning",
            category: "Residential",
            price: "$30/hour",
            status: "Inactive",
            duration: "1.5 hours",
            description: "Specialized cleaning for carpets to remove dirt, stains, and allergens effectively.",
            actions: "Edit/Delete",
        },
        {
            "#": 4,
            name: "Window Cleaning",
            category: "Commercial",
            price: "$25/hour",
            status: "Active",
            duration: "1 hour",
            description: "Crystal-clear window cleaning services for homes and offices using streak-free techniques.",
            actions: "Edit/Delete",
        },
        {
            "#": 5,
            name: "Post-Construction Cleaning",
            category: "Industrial",
            price: "$500",
            status: "Active",
            duration: "8 hours",
            description: "A thorough cleaning service to remove debris and dust after construction or renovation work.",
            actions: "Edit/Delete",
        },
    ];


    const columns = [
        { field: '#', header: '#' },
        { field: 'name', header: 'Service Name' },
        { field: 'category', header: 'category' },
        { field: 'price', header: 'Price' },
        { field: 'status', header: 'Status' },
        { field: 'duration', header: 'Duration' },
        { field: 'actions', header: 'Actions' },
    ];

    const actionTemplate = (rowData: any) => {
        return (
            <div className="flex items-center space-x-4">
                <button className="text-[#172652] flex flex-row items-center">Edit</button>
                <button onClick={() => { setIsEditing(true); setVisible(true), setSelectedData(rowData) }} className="text-primary flex flex-row items-center">View</button>
            </div>
        );
    };
    return (
        <>
            <div className='w-full min-h-screen flex flex-col gap-[10px] px-[30px] py-4 bg-gray-100'>
                <div className='w-full bg-white p-4 rounded-[6px] flex flex-row items-center justify-between gap-[40px]'>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <h1 className='text-[16px] font-[600] text-black'>Services</h1>
                        <div className='p-2 bg-gray-100 rounded-[4px]'>
                            <span>10</span>
                        </div>
                    </div>
                    <button onClick={() => setNewVisible(true)} className='text-[14px] px-4 py-3 bg-primary text-white rounded-[6px] cursor-pointer hover:scale-105 transition-all duration-300 flex flex-row gap-[4px]'>
                        Add New
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.69" d="M5 10H15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                {/* <div className=' p-4 bg-white rounded-[6px]'>
                    <Table columns={columns} data={services} actionTemplate={actionTemplate} />
                </div> */}
                <div className='grid grid-cols-3 gap-[10px]'>
                    {services.map((service, index) => {
                        return (
                            <div className=' p-4 rounded-[6px] flex flex-row justify-between items-center  bg-white w-full cursor-pointer'>
                                <div className='flex flex-col gap-[10px]'>

                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <span className='text-[14px] font-[600]'>Name : </span>
                                        <span className='text-[14px] text-[gray]'>{service.name}</span>

                                    </div>
                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <span className='text-[14px] font-[600]'>Price : </span>
                                        <span className='text-[14px] text-[gray]'>{service.price}</span>

                                    </div>
                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <button className='text-[12px] p-1 px-4 bg-primary text-white rounded-[4px]'>Edit</button>
                                        <button className='text-[12px] p-1 px-2 bg-red-500 text-white rounded-[4px]'>Delete</button>

                                    </div>

                                </div>
                                <svg width="14" height="46" viewBox="0 0 14 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_11_401)">
                                        <rect width="14" height="43" rx="4" fill="#13829F" fill-opacity="0.12" />
                                        <rect y="8" width="14" height="35" rx="4" fill="#13829F" fill-opacity="0.55" />
                                        <rect y="17" width="14" height="29" rx="4" fill="#13829F" fill-opacity="0.55" />
                                        <rect y="29" width="14" height="17" rx="4" fill="#13829F" />
                                        <rect y="36" width="14" height="10" rx="4" fill="#13829F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11_401">
                                            <rect width="14" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {isEditing && (
                    <InfoPopUp selectedData={selectedData} onHide={onHide} visible={visible} title='View Services' content='content goes here' />
                )}
                <Dialog className='w-1/3' header="New Service" visible={newVisible} onHide={() => setNewVisible(false)}>
                    <form className='flex flex-col gap-[10px]' method="post">
                        <div className='grid grid-cols-1 gap-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[500] text-black'>Service Name</span>
                                <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                    <input
                                        type="text"
                                        name='companyName'
                                        className='w-full py-4 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        placeholder='Type your employer name'
                                    />
                                </div>


                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[500] text-black'>Price per hour</span>
                                <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                    <input
                                        type="number"
                                        name='companyName'
                                        className='w-full py-4 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        placeholder='Enter price per hour'
                                    />
                                </div>
                            </div>
                        </div>

                        <button className='p-3 rounded-[12px] bg-primary text-white '>Save</button>

                    </form>

                </Dialog>
            </div>
        </>
    )
}

export default Services