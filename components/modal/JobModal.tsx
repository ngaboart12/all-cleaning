import { useApplyTojobMutation } from '@/app/hooks/jobs.hook';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react'
import { toast, Toaster } from 'sonner';

interface jobType {
    selectedJob: any;
    isActive: boolean;
    setIsActive: any;
}

const JobModal = ({ selectedJob, isActive, setIsActive }: jobType) => {
    const { mutate: Apply, isPending: pending, isError } = useApplyTojobMutation()

    const applyFunc = async () => {
        try {
            Apply(selectedJob.id, {
                onSuccess: () => {
                    toast.success("Application submitted successfully")
                },
                onError: (error:any) => {
                    if(error.response.data.code == 400 || error.response.data.error == "Already submitted the application"){
                        toast.error("Application already submitted")
                        return;
                    }
                    toast.error(error.message)
                }
            })


        } catch (error) {
            toast.error("Something went wrong")

        }

    }


    return (
        <>
        <Toaster position='top-right' />
            <Dialog header="Requested Service" className='w-1/2' modal visible={isActive} onHide={() => setIsActive(false)} >
                <div className='w-full flex flex-col gap-[10px]'>
                    <div className='flex flex-row gap-[10px]'>
                        <span className='text-[14px] font-[600] text-black'>Position : </span>
                        <span>{selectedJob?.position_title}</span>
                    </div>
                    <div className='grid grid-cols-4 gap-[10px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <h1 className='text-[14px]'>Date</h1>
                            <span className='text-[12px] font-[600] text-black'>{selectedJob?.shift_date}</span>
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <h1 className='text-[14px]'>Start Time</h1>
                            <span className='text-[12px] font-[600] text-black'>{selectedJob?.start_time.split(" ")[1]}</span>
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <h1 className='text-[14px]'>End time</h1>
                            <span className='text-[12px] font-[600] text-black'>{selectedJob?.end_time.split(" ")[1]}</span>
                        </div>
                        <div className='flex flex-col gap-[1px]'>
                            <h1 className='text-[14px]'>Comapnay Name</h1>
                            <span className='text-[12px] font-[600] text-black'>{selectedJob?.company_name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2px]'>
                        <span className='text-[12px]  text-black font-[700]'>Description</span>
                        <span className='text-[12px]'>{selectedJob?.description}</span>
                    </div>
                    <Button loading={pending} onClick={applyFunc} className='text-white bg-primary px-4 py-2 rounded-[4px] w-1/3 mx-auto hover:opacity-80 duration-500 transition-all flex items-center justify-center' >Apply</Button>
                </div>
            </Dialog>
        </>
    )
}

export default JobModal