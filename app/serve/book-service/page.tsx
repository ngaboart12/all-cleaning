"use client"
import { useCreateOrderMutation, userCreateJobMutation, userFetchUserPropertyQuery } from '@/app/hooks/order.hook'
import { useFetchPostionsQuery, useFetchProviderWithOnService, useFetchSinglePostionsQuery } from '@/app/hooks/services.hook'
import ServiceDetailsForm from '@/components/booking/ServiceDetailsForm'
import NavbarHome from '@/components/Home/NavbarHome'
import Navbar from '@/components/Navbar'
import { jobFormikValiationSchema } from '@/lib/validation/formikSchema'
// import { HouseRegisterSchema } from '@/lib/validation/formikSchema'
import { useFormik } from 'formik'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner'

const BookServiceContent = () => {
    const [steps, setSteps] = useState<number>(1)
    const [confirmed, setConfirmed] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const serviceId = searchParams?.get("serviceId") as string;
    const providerId = searchParams?.get("providerId") as string;
    const position = searchParams?.get("position");
    const { data: singlePosition, isLoading: loadingPosition, isFetching, refetch } = useFetchSinglePostionsQuery(Number(position))
    const { mutate: createJob } = userCreateJobMutation()
    const [loading,setLoading] = useState<boolean>(false)

   

    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user?.token) {
            (async () => {
                const resolvedToken = session.user.token;
                setToken(resolvedToken);
            })();
        }
    }, [session]);

    const jobFormik = useFormik({
        initialValues: {
            start_time: "",
            end_time: "",
            shift_date: "",
            hours: "",
            overtime_paid: "",
            description: "",
            mileage_paid: ""
        },
        validationSchema: jobFormikValiationSchema,
        onSubmit: (values) => {
            console.log("submiting......")
            const data = {
                start_time: `${values.shift_date} ${values.start_time}`,
                end_time: `${values.shift_date} ${values.end_time}`,
                shift_date: values.shift_date,
                position_id: position,
                number_of_staff: "5",
                hours: values.hours,
                overtime_paid: values.overtime_paid ? "yes" : "no",
                mileage_paid: values.mileage_paid ? "yes" : "no", 
                description: values.description
            }
            try {
                setLoading(true)
                createJob(data, {
                    onSuccess: () => {
                        toast.success("Postion created successfully")
                        jobFormik.resetForm()
                        setLoading(false)
                        refetch()

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
        <div className='flex flex-col'>
            <Navbar/>
            <Toaster position="top-center" richColors closeButton />

            <div className='w-full py-20  bg-white  px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[20px]'>
                <div className='flex flex-col md:flex-row  gap-[10px] w-full'>
                    {confirmed ? (
                        <>
                            <div className='w-full md:w-1/3  bg-white rounded-[12px] p-4 flex flex-col gap-[20px]'>
                                <h1 className='text-[16px] font-[600] text-[#13829F]'>Service Summary</h1>
                                <div className='w-full flex flex-row items-center gap-[20px]'>
                                    <div className='flex flex-col gap-[4px]'>
                                        <h1 className='text-[16px] font-[600]'>Deep cleaning</h1>
                                        <span className='text-[12px]'>September 12, 2024, 10:00 AM</span>
                                    </div>
                                    <div className='flex flex-col gap-[4px]'>
                                        <h1 className='text-[14px] text-[#6D6D6D]'>Price</h1>
                                        <div className='flex flex-row items-center gap-[10px]'>
                                            <h1 className=' text-[16px] font-[600] text-[#13829F]'>140</h1>
                                            <h1 className=' text-[16px] font-[500] text-[#13829F]'>rwf</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-[4px]'>
                                    <h1 className='text-[14px] font-[400] text-[#6D6D6D]'>Porperty:</h1>
                                    <div className='flex flex-row gap-[10px]'>
                                        <span className='text-[12px] font-[600]'>Apartment</span>
                                        <span className='text-[12px] font-[600]'>-</span>
                                        <span className='text-[12px] font-[600]'>2 Bedrooms,</span>
                                        <span className='text-[12px] font-[600]'>2 Bathrooms</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[4px]'>
                                    <h1 className='text-[13px] font-[600] text-[#13829F]'>Provider</h1>
                                    <div className='w-full p-4 bg-[#FAFAFA] rounded-[6px] flex flex-col gap-[10px]'>
                                        <div className='flex flex-row gap-[10px] items-center'>
                                            <div className='w-[50px] h-[50px]'>
                                                <Image src={'/image/user1.jpg'} width={1000} height={1000} alt='service image' className=' w-fulll h-full object-cover rounded-[6px]' />
                                            </div>
                                            <div className='flex flex-col gap-[4px]'>
                                                <h1 className='text-[14px] font-[600]'>Space Around</h1>
                                                <span className='text-[12px] text-[gray]'>Los angele,Calionia</span>
                                            </div>

                                        </div>
                                        <div className='flex flex-col gap-[4px] '>
                                            <h2 className='text-[14px] text-[#9D9D9D]'>About</h2>
                                            <span className='text-[13px] text-[#3B3B3B] font-[400]'>Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute.</span>
                                        </div>
                                        <a href="" className='px-[20px] w-[160px] py-3 rounded-[8px] bg-[#E2F5FA] flex flex-row items-center gap-[10px]'>
                                            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="#13829F" stroke-linejoin="round" />
                                                <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="#13829F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </div>
                                            <span className='text-[14px] text-[#13829F]'>Chat with us</span>
                                        </a>


                                    </div>
                                </div>

                            </div>
                            <div className=' w-full md:w-2/3 items-center justify-center bg-white px-4 md:px-20 p-4 rounded-[6px] flex flex-col gap-[30px]'>
                                <div className=''><svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="46" cy="46" r="45" fill="#F0FCFF" stroke="#13829F" stroke-width="2" />
                                    <path d="M35.75 49.375C35.75 49.375 38.375 49.375 41.875 55.5C41.875 55.5 51.6029 39.4583 60.25 36.25" stroke="#13829F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                                <div className='flex flex-col gap-[10px] items-center'>
                                    <h1 className='text-[16px] font-[600] text-[#13829F]'>Booking Confirmed!"</h1>
                                    <span className='text-[14px] font-[400] text-[#7A8487]'>Your cleaning service has been successfully booked</span>
                                </div>
                                <div className='rounded-[6px] p-4 bg-[#FBFBFB] flex'>
                                    <span className='text-[14px] font-[500] text-[#2E2C2C] text-center'>Thank you for your booking! The amount has been securely processed. Your cleaner will receive the payment once the service is completed to your satisfaction</span>

                                </div>

                                <div className=' flex w-full flex-col sm:flex-row gap-[20px] items-center'>
                                    <div onClick={() => setSteps(4)} className=' cursor-pointer w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                                        <span>View My Bookings</span>
                                    </div>
                                    <button onClick={() => setSteps(5)} type='submit' className='w-full text-[13px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                                        <span>Book Another Service</span>
                                    </button>
                                </div>
                            </div>

                        </>
                    ) : (
                        <>
                            {loadingPosition ? ("") : (
                                <>
                                    <div className='w-full flex bg-white rounded-[20px] flex-col gap-[10px] px-[0px] md:px-20 lg:px-[40vh]'>
                                        <h1 className='text-[20px] font-[800] text-center'>Create a Cleaning Job</h1>
                                        <div className='w-full flex flex-col gap-[4px] p-4 rounded-[6px] border'>
                                            <h2 className='text-[16px] font-[400] text-black'>{singlePosition?.data.position_title}</h2>
                                            <span className='text-[14px] text-[#8D8D8D]'>Describe your cleaning needs and let companies apply to help you</span>
                                        </div>
                                        {steps === 1 && (<ServiceDetailsForm loading={loading} jobFormik={jobFormik} properties={``} setSteps={setSteps} />)}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

const BookService = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookServiceContent />
        </Suspense>
    );
};


export default BookService