"use client"
import React, { useState } from 'react'
import InfoPopUp from '@/components/reusable/tables/InfoPopUp';
import Table from '@/components/reusable/tables/Table';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useCreatePostionMutation, useFetchPostionsQuery } from '@/app/hooks/services.hook';
import { useSession } from 'next-auth/react';
import { CiFaceFrown } from "react-icons/ci";
import { useFormik } from 'formik';
import * as Yup from "yup"
import { toast, Toaster } from 'sonner';
import { Button } from 'primereact/button';

const Services = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [newVisible, setNewVisible] = useState<boolean>(false)
    const [selectedData, setSelectedData] = useState(true)
    const [loading,setLoading] = useState<boolean>(false)
    const { data: session } = useSession()

    const onHide = () => {
        setVisible(false)
        setIsEditing(false)
    }
    const token = session?.user.token
    const { data: positions, isLoading, isFetching, refetch } = useFetchPostionsQuery()
    const { mutate: createPosition } = useCreatePostionMutation()

    const positionFormik = useFormik({
        initialValues: {
            title: "",
            price: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            price: Yup.number().required("Price is required").min(1, "Price must be over 0")
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const data = {
                    title: values.title,
                    price: Number(values.price),
                }
                createPosition(data, {
                    onSuccess: () => {
                        toast.success("Postion created successfully")
                        positionFormik.resetForm()
                        setLoading(false)
                        refetch()
                        setNewVisible(false)

                    },
                    onError:(error)=>{
                        toast.error("Something get wrong try again later")
                        setLoading(false)
                    }
                })

            } catch (error) {
                setLoading(false)
                toast.error("Something get wrong")

            }


        }
    })




    return (
        <>
            <Toaster position="top-center" richColors closeButton />
            <div className='w-full min-h-screen flex flex-col gap-[10px] px-[30px] py-4 bg-gray-100'>
                <div className='w-full bg-white p-4 rounded-[6px] flex flex-row items-center justify-between gap-[40px]'>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <h1 className='text-[16px] font-[600] text-black'>Positions</h1>
                        <div className='p-2 bg-gray-100 rounded-[4px]'>
                            <span>{isLoading ? "..." : positions?.data && positions.data.length}</span>
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
                {!isLoading && positions?.data && positions?.data.length === 0 && (
                    <div className='w-full flex py-10 items-center justify-center'>
                        <div className='flex flex-col gap-[10px] items-center p-10 bg-white rounded-[12px]'>
                            <CiFaceFrown size={80} />
                            <h1 className='text-[18px] text-center font-[800]'>No Position found</h1>
                        </div>
                    </div>
                )}
                {isLoading ? (
                    <div className='w-full flex items-center justify-center py-10'>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-3 gap-[10px]'>
                            {positions?.data.map((service: any, index: number) => {
                                return (
                                    <div className=' p-4 rounded-[6px] flex flex-row justify-between items-center  bg-white w-full cursor-pointer'>
                                        <div className='flex flex-col gap-[10px]'>

                                            <div className='flex flex-row gap-[10px] items-center'>
                                                <span className='text-[14px] font-[600]'>Name : </span>
                                                <span className='text-[14px] text-[gray]'>{service?.position_title}</span>

                                            </div>
                                            <div className='flex flex-row gap-[10px] items-center'>
                                                <span className='text-[14px] font-[600]'>Estimated Price : </span>
                                                <span className='text-[14px] text-[gray]'>$ {service?.selling_price}</span>

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
                    </>

                )}
            </div>
            <div>
                {isEditing && (
                    <InfoPopUp selectedData={selectedData} onHide={onHide} visible={visible} title='View Services' content='content goes here' />
                )}
                <Dialog
                    className="w-1/3"
                    header="New Service"
                    visible={newVisible}
                    onHide={() => {
                        positionFormik.resetForm();
                        setNewVisible(false);
                    }}
                >
                    <form onSubmit={positionFormik.handleSubmit} className='flex flex-col gap-[10px]' method="post">
                        <div className='grid grid-cols-1 gap-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[500] text-black'>Position Name</span>
                                <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                    <input
                                        type="text"
                                        name='title'
                                        onChange={positionFormik.handleChange}
                                        value={positionFormik.values.title}
                                        className='w-full py-4 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        placeholder='Type Service title'
                                    />
                                </div>
                                <span className='text-[13px] text-red-400'>
                                    {positionFormik.touched.title && positionFormik.errors.title ? (
                                        positionFormik.errors.title

                                    ) : ""}

                                </span>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[500] text-black'>Estimated Price</span>
                                <div className='w-full  rounded-[12px] bg-[#F9F9F9]'>
                                    <input
                                        type="number"
                                        name='price'
                                        onChange={positionFormik.handleChange}
                                        value={positionFormik.values.price}
                                        className='w-full py-4 text-black border bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                                        placeholder='Enter Estimated price'
                                    />
                                </div>
                                <span className='text-[13px] text-red-400'>
                                    {positionFormik.touched.price && positionFormik.errors.price ? (
                                        positionFormik.errors.price

                                    ) : ""}

                                </span>
                            </div>
                        </div>

                        <Button loading={loading} type='submit' className='p-3 flex items-center justify-center rounded-[12px] bg-primary text-white '>Save</Button>

                    </form>

                </Dialog>
            </div>
        </>
    )
}

export default Services