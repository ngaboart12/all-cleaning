"use client"
import React from 'react'
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";


interface PopupType {
    title: string;
    content: string;
    onHide: any;
    visible: boolean;
    selectedData?: any
}

const InfoPopUp = ({ title, content, onHide, visible, selectedData }: PopupType) => {
    return (
        <Dialog headerClassName='' className='w-[55%]' header={selectedData.name} visible={visible} onHide={() => onHide()} >
            <div className='w-full flex flex-row items-center'>
                <div className='flex flex-col gap-[20px] w-full'>
                    <div className='flex flex-row pb-2 w-full border-b  items-center justify-between'>
                        <div className='flex flex-row gap-[20px] items-center'>
                            <span className='text-[13px] font-[500]'>Category :</span>
                            <span className='text-[13px] text-black font-[600]'>{selectedData.category}</span>
                        </div>
                        <div className='flex flex-row gap-[20px] items-center'>
                            <span className='text-[13px] font-[500]'>Duration :</span>
                            <span className='text-[13px] text-black font-[600]'>{selectedData.duration}</span>
                        </div>
                        <div className='flex flex-row gap-[20px] items-center'>
                            <span className='text-[13px] font-[500]'>Status :</span>
                            <span className='text-[13px] text-black font-[600]'>{selectedData.status}</span>
                        </div>
                    </div>
                    <div className='flex flex-col  pb-2 w-full border-b'>
                        <span className='text-[13px] font-[500]'>Description</span>
                        <span className='text-[13px] font-[400] text-black'>{selectedData.description}</span>
                    </div>
                    <div className='flex flex-row items-center gap-[20px] mx-auto'>

                        <button className='text-[14px] text-white rounded-[6px] px-10 py-3 bg-red-500'>Delete</button>
                        <button className='text-[14px] text-white rounded-[6px] px-10 py-3 bg-secondary'>Disable</button>
                    </div>
                </div>
            </div>

        </Dialog>
    )
}

export default InfoPopUp