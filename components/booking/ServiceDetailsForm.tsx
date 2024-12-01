import React, { useState } from 'react'
type props = {
    setSteps: React.Dispatch<React.SetStateAction<number>>
    properties?: any
    orderFormik: any
}

const ServiceDetailsForm = ({ setSteps, properties, orderFormik }: props) => {
    const [isToFill, setIsToFill] = useState<boolean>(false)

    return (
        <div className='w-full bg-white px-6 rounded-[6px] flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-[20px] w-full'>
                <h1 className='font-[700]'>Fill all Necessary information</h1>
                <div className='flex flex-row gap-[10px] w-full'>
                    <div className='flex w-full flex-col gap-[10px]'>
                        <h1 className='text-[14px]'>Select one of your Property</h1>
                        <select name="propertyId"
                            onChange={orderFormik.handleChange}
                            onBlur={orderFormik.handleBlur}
                            value={orderFormik.values.propertyId}
                            className='text-[14px] w-full text-[#686868] border p-3 rounded-[12px]' id="">
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
                    <input type="checkbox" onChange={() => setIsToFill(!isToFill)} />
                </div>
                {isToFill && (
                    <div className='grid grid-cols-3 gap-[10px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Property Type</h1>
                            <select
                                name="propertyType"
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.propertyType}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            >
                                <option value="" disabled>
                                    Select property type
                                </option>
                                <option value={`HOUSE`}>{`HOUSE`}</option>
                                <option value={`APARTMENT`}>{`APARTMENT`}</option>
                                <option value={`OFFICE`}>{`OFFICE`}</option>
                            </select>
                            {orderFormik.touched.propertyType && orderFormik.errors.propertyType && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.propertyType}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Property Name</h1>
                            <input
                                type="text"
                                name='propertyName'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.propertyName}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Property Name'
                            />
                            {orderFormik.touched.propertyName && orderFormik.errors.propertyName && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.propertyName}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Number Of Rooms</h1>
                            <input
                                type="number"
                                name='numberOfRooms'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.numberOfRooms}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of Rooms'
                            />
                            {orderFormik.touched.numberOfRooms && orderFormik.errors.numberOfRooms && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.numberOfRooms}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Number Of Bathrooms</h1>
                            <input
                                type="number"
                                name='numberOfBathrooms'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.numberOfBathrooms}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of bath rooms'
                            />
                            {orderFormik.touched.numberOfRooms && orderFormik.errors.numberOfBathrooms && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.numberOfBathrooms}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Number Of Windows</h1>
                            <input
                                type="number"
                                name='numberOfWindows'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.numberOfWindows}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Number of windows'
                            />
                            {orderFormik.touched.numberOfWindows && orderFormik.errors.numberOfWindows && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.numberOfWindows}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Size of property ()m<sup>2</sup></h1>
                            <input
                                type="number"
                                name='size'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.size}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Size of property (m2)'
                            />
                            {orderFormik.touched.size && orderFormik.errors.size && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.size}</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[14px]'>Parking Instructions</h1>
                            <input
                                type="text"
                                name='parkingInstructions'
                                onChange={orderFormik.handleChange}
                                onBlur={orderFormik.handleBlur}
                                value={orderFormik.values.parkingInstructions}
                                className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                                placeholder='Enter Parking Instruction'
                            />
                            {orderFormik.touched.parkingInstructions && orderFormik.errors.parkingInstructions && (
                                <div className="text-red-500 text-[10px]">{orderFormik.errors.parkingInstructions}</div>
                            )}
                        </div>
                    </div>
                )}
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px] font-[600] text-black'>Do you have any notes you'd like to leave for the company?</h1>
                    <textarea placeholder='Write messages' className='p-3 bg-[#FBFBFB] rounded-[6px] text-[13px]' rows={4} name="" id=""></textarea>
                </div>

                <div className='flex flex-row gap-[20px] items-center w-full justify-end'>
                    <div onClick={() => setSteps(1)} className='cursor-pointer w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#EFEFEF] flex items-center justify-center'>
                        <span>Back</span>
                    </div>
                    <button onClick={orderFormik.handleSubmit} type='submit' className='w-[200px] px-[10px] py-[10px] rounded-[6px] bg-[#13829F] text-white flex items-center justify-center'>
                        <span>Continue</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailsForm
