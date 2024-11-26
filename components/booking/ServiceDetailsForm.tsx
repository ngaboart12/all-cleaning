import React, { useState } from 'react'
import { propertyType } from "@/lib/types/types.type"
import { HouseRegisterSchema } from '@/lib/validation/formikSchema'
import { useFormik } from 'formik'

type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
    properties?: any
}


const ServiceDetailsForm = ({ setSteps, properties }: props) => {
    const [isToFill,setIsToFill] = useState<boolean>(false)
    const HouseFormik = useFormik({
        initialValues: {
            name: '',
            type: '',
            numberOfRooms: Number(),
            numberOfBathrooms: Number(),
            numberOfBedrooms: Number(),
            parkingInstructions: '',
            size: Number(),
            numberOfWindows: Number(),
            photos: [],
            additionalInfo: {
                comment: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
                country: '',
                longitude: Number(''),
                latitude: Number(''),
                postalCode: ''
            }

        },
        validationSchema: HouseRegisterSchema,
        onSubmit: ()=>{

        }
    })

    return (
        <div className=' w-full bg-white px-6 rounded-[6px] flex flex-col gap-[10px]'>
            <form action="" method="post" className='flex flex-col gap-[20px] w-full'>
                <h1 className='font-[700]'>Fill all Necessary information</h1>
                <div className='flex flex-row gap-[10px] w-full '>
                    <div className='flex w-full flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Select one of your Property</h1>
                        <select name="" className='text-[14px] w-full text-[#686868] border p-3 rounded-[12px]' id="">
                            {!properties || properties.length < 1 ? (
                                <option value="" disabled>No property found</option>
                            ) : (
                                <option value="" disabled>Select property</option>
                            )}
                            {properties?.map((item: any, index: number) => {
                                return (
                                    <option className='text-black' key={index} value={item.id} >{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-[10px]'>
                    <span className='text-[14px] text-primary'>Prefer to fill property details</span>
                    <input type="checkbox" onChange={()=> setIsToFill(!isToFill)}  />
                </div>
                {isToFill && (
                        <div className=' grid grid-cols-3 gap-[10px]'>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Property Type</h1>
                            <select
                                name="type"
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.type}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            >
                                <option value="" disabled>
                                    Select property type
                                </option>
                                <option value={`HOUSE`}>{`HOUSE`}</option>
                                <option value={`APARTMENT`}>{`APARTMENT`}</option>
                                <option value={`OFFICE`}>{`OFFICE`}</option>
                            </select>
                            {HouseFormik.touched.type && HouseFormik.errors.type && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.type}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Property Name</h1>
                            <input
                                type="text"
                                name='name'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.name}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Property Name'
                            />
                            {HouseFormik.touched.name && HouseFormik.errors.name && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.name}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Number Of Rooms</h1>
                            <input
                                type="number"
                                name='numberOfRooms'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.numberOfRooms}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of Rooms'
                            />
                            {HouseFormik.touched.numberOfRooms && HouseFormik.errors.numberOfRooms && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfRooms}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Number Of Bathrooms</h1>
                            <input
                                type="number"
                                name='numberOfBathrooms'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.numberOfBathrooms}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of bath rooms'
                            />
                            {HouseFormik.touched.numberOfRooms && HouseFormik.errors.numberOfBathrooms && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfBathrooms}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Number Of Windows</h1>
                            <input
                                type="number"
                                name='numberOfWindows'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.numberOfWindows}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of windows'
                            />
                            {HouseFormik.touched.numberOfWindows && HouseFormik.errors.numberOfWindows && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfWindows}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Size of property ()m<sup>2</sup></h1>
                            <input
                                type="number"
                                name='size'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.size}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Size of property (m2)'
                            />
                            {HouseFormik.touched.size && HouseFormik.errors.size && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.size}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Parking Instructions</h1>
                            <input
                                type="text"
                                name='parkingInstructions'
                                onChange={HouseFormik.handleChange}
                                onBlur={HouseFormik.handleBlur}
                                value={HouseFormik.values.parkingInstructions}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Parking Instruction'
                            />
                            {HouseFormik.touched.parkingInstructions && HouseFormik.errors.parkingInstructions && (
                                <div className="text-red-500 text-[10px]">{HouseFormik.errors.parkingInstructions}</div>
                            )}
                        </div>
                    </div>
                )}
                <div className='flex flex-row gap-[10px]'>

                    {/* <div className='flex flex-col gap-[10px] w-full'>

                        <h1 className='text-[14px] font-[600] text-black'>Where do you want this service</h1>
                        <div className='w-full px-[10px] p-1 rounded-[12px] bg-[#FBFBFB]'>
                            <select name="" id="" className='w-full p-3 bg-transparent text-[13px]  '>
                                <option value="" disabled>Select address</option>
                                <option value="">Kigali, Rwanda</option>
                                <option value="">Kigali, Rwanda</option>
                            </select>
                        </div>
                    </div> */}

                    {/* <div className='flex flex-col gap-[10px]   w-full'>
                        <h1 className='text-[14px] font-[600] text-black'>When do you want this service?</h1>
                        <div className='flex flex-row p-[14px] justify-between bg-[#FBFBFB] w-full rounded-[12px]'>
                            <h1 className='text-[14px] font-[600]'>Tomorrow</h1>


                            <div className='flex flex-row gap-[20px] items-center'>
                                <span className='text-[14px] text-[#908E8E]'>06:00 AM </span>
                            </div>
                            <div className='flex flex-row gap-[10px] items-center'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75004 4.5C6.75004 4.5 11.25 7.81418 11.25 9C11.25 10.1859 6.75 13.5 6.75 13.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>
                    </div> */}
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[600] text-black'>Do you have any notes you'd like to leave for the company?</h1>
                    <textarea placeholder='Write messages' className='p-3 bg-[#FBFBFB] rounded-[6px] text-[13px]' rows={4} name="" id=""></textarea>

                </div>

                <div className=' flex flex-row gap-[20px] items-center w-full justify-end'>
                    <div onClick={() => setSteps(1)} className=' cursor-pointer w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={() => setSteps(2)} type='submit' className='w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ServiceDetailsForm