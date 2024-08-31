"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ChooseType from './registerSteps/ChooseType'
import { useFormik } from 'formik'
import { accountTypeValidationSchema, companyProfileValidationSchema, locationValidationSchema, passwordvalidateSchema, PersonalDetailsValidationSchema } from '@/lib/validation/formikSchema'
import ChooseLocation from './registerSteps/ChooseLocation'
import PersonalDetails from './registerSteps/PersonalDetails'
import VerfiyOtp from './registerSteps/VerfiyOtp'
import * as Yup from "yup"
import CreatePassword from './registerSteps/CreatePasword.'
import CompanyProfile from './registerSteps/CompanyProfile'


const SignUp = () => {
  const [steps,setSteps] = useState<number>(1)
  const TypeFormik = useFormik({
    initialValues: {
      type: '',
    },
    validationSchema: accountTypeValidationSchema,
    onSubmit: ()=>{
      if(TypeFormik.values.type === "customer"){
        setSteps(2)
      }else{
       setSteps(2)
      }
    }
  })
  const LocationFormik = useFormik({
    initialValues: {
      state: '',
      city: '',
    },
    validationSchema: locationValidationSchema,
    onSubmit: ()=>{
        setSteps(3)
    }
  })
  const PersonalDetailsFormik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: PersonalDetailsValidationSchema,
    onSubmit: ()=>{
        setSteps(4)
    }
  })
  const OtpFormik = useFormik({
    initialValues: {
      otp: ['', '', '', ''],
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(
          Yup.string()
            .required("Required")
            .matches(/^\d$/, "Must be a digit")
        )
        .length(4, "Must be 4 digits"),
    }),
    onSubmit: () => {
      setSteps(5)
    },
  });
  const PasswordFormik= useFormik({
    initialValues: {
      password: '',
      repassword: '',

    },
    validationSchema: passwordvalidateSchema,
    onSubmit: ()=>{
        setSteps(6)
    }
  })
  const CompanyProfileFormik= useFormik({
    initialValues: {
      companyName: '',
      companyEmail: '',
      companyAddress: '',

    },
    validationSchema: companyProfileValidationSchema,
    onSubmit: ()=>{
        setSteps(7)
    }
  })



  return (
    <div className=' w-full h-screen flex justify-center items-center bg-[#FAFAFA]'>
      <div className=' bg-white flex flex-row rounded-[30px] max-h-[90%] w-[95%] sm:w-[70%]  md:w-[95%]  lg:w-[70%] overflow-hidden'>
        <div className=' w-full md:w-1/2 h-full flex flex-col gap-[4px] p-5 py-10 lg:p-10'>
          <div className='w-[60px]'>
            <Image src={`/image/swifti.svg`} width={1000} height={1000} className='w-full' alt='loho swifit' />
          </div>
          {steps === 1 && (<ChooseType TypeFormik={TypeFormik}/>)}
          {steps === 2 && (<ChooseLocation LocationFormik={LocationFormik}/>)}
          {steps === 3 && (<PersonalDetails PersonalDetailsFormik={PersonalDetailsFormik}/>)}
          {steps === 4 && (<VerfiyOtp OtpFormik={OtpFormik} PersonalDetailsFormik={PersonalDetailsFormik}/>)}
          {steps === 5 && (<CreatePassword  PasswordFormik={PasswordFormik}/>)}
          {steps === 6 && (<CompanyProfile  CompnayProfileFormik={CompanyProfileFormik}/>)}
          {steps === 7 && (<CompanyProfile  CompnayProfileFormik={CompanyProfileFormik}/>)}
         
        </div>
        <div className='hidden   w-1/2 bg-[#1990AF] md:flex flex-col items-center gap-[20px]  relative'>
          <div className='w-full h-full absolute z-10'>
            <Image src={`/image/background.svg`} className='w-full h-full object-cover' width={1000} height={1000} alt='ss' />
          </div>
          <div className='flex flex-col gap-[10px] items-center p-10 relative z-20'>
            <button className='p-2 w-[200px] text-white text-[14px] rounded-[10px]  bg-[#13829F]'>Discover Now</button>
            <h1 className='text-[22px] text-white font-[700] text-center'>Find Trusted Cleaners or <br /> Grow Your Cleaning Business</h1>
            <span className='text-[14px] text-white font-[400] text-center'>Find Trusted Cleaners or Grow Your <br /> Cleaning Business</span>
          </div>
          <div className='w-full relative z-20  mt-[-30px]'>
            <Image alt='ttt' src={`/image/authback.png`} width={1000} height={1000} className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp