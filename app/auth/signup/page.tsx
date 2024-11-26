"use client"
import Image from 'next/image'
import React, { use, useState } from 'react'

import ChooseType from './registerSteps/ChooseType'
import { useFormik } from 'formik'
import { accountTypeValidationSchema, CompanyBioMediaValidationSchema, CompanyDocumentValidationSchema, companyProfileValidationSchema, locationValidationSchema, passwordvalidateSchema, PersonalDetailsValidationSchema, ServicesValidationSchema } from '@/lib/validation/formikSchema'
import ChooseLocation from './registerSteps/ChooseLocation'
import PersonalDetails from './registerSteps/PersonalDetails'
import VerfiyOtp from './registerSteps/VerfiyOtp'
import * as Yup from "yup"
import CreatePassword from './registerSteps/CreatePasword.'
import CompanyProfile from './registerSteps/CompanyProfile'
import axios from 'axios'
import ChooseService from './registerSteps/ChooseService'
import IsRegistered from './registerSteps/IsRegistered'
import { error } from 'console'
import { fetchAllUsersQuery } from '@/app/hooks/users.hook'
import { services } from '@/public/documents/services'
import CompanyDocument from './registerSteps/CompanyDocument'
import CompanyBioMedia from './registerSteps/CompnayBioMedia'
import { useSignupMutation } from '@/app/hooks/Signup'
import ChooseCompanyType from './registerSteps/chooseCompanyType'


const SignUp = () => {
  const [steps, setSteps] = useState<number>(1)
  const [isVerfied, setIsVerfied] = useState<boolean>(false)
  const [isOtpExpired, setIsOtpExpired] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [isSucess, setIsCusess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const { mutate: signUp, isPending } = useSignupMutation();



  const TypeFormik = useFormik({
    initialValues: {
      type: '',
    },
    validationSchema: accountTypeValidationSchema,
    onSubmit: () => {
      if (TypeFormik.values.type === "CLIENT") {
        setSteps(2)
      } else {
        setSteps(10)
      }
    }
  })
  const YourTypeFormik = useFormik({
    initialValues: {
      type: '',
    },
    validationSchema: accountTypeValidationSchema,
    onSubmit: () => {
      setSteps(2)
    }
  })
  const LocationFormik = useFormik({
    initialValues: {
      state: '',
      city: '',
      country: '',
      street: '',
      postCode: '',
      longitude: '',
      latitude: ''
    },
    validationSchema: locationValidationSchema,
    onSubmit: () => {
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
    onSubmit: async () => {
      setLoading(true)
      const data = {
        email: PersonalDetailsFormik.values.email,
      }
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/sendotp`, data).then((res) => {
        if (res.status == 200) {
          setLoading(false)
          setSteps(4)
        }

      }).catch((error) => {
        setLoading(false)
        console.log(error)

      })

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
    onSubmit: async () => {
      setIsOtpExpired("")
      const data = {
        email: PersonalDetailsFormik.values.email,
        otp: OtpFormik.values.otp
      }
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verifyotp`, data).then((res) => {
        console.log(res)
        if (res.status == 200) {
          setLoading(false)
          setIsVerfied(true)
          setTimeout(() => {
            setIsVerfied(false)
            setSteps(5)
          }, 2000)
        }

      }).catch((error) => {
        console.log(error)
        setLoading(false)
        if (error.response.data.message === "Incorrect otp") {
          setIsOtpExpired("Invalid OTP")

        } else if (error.response.data.message === "OTP was expired") {
          setIsOtpExpired("OTP was expired")

        }
      })

    },
  });
  const PasswordFormik = useFormik({
    initialValues: {
      password: '',
      repassword: '',

    },
    validationSchema: passwordvalidateSchema,
    onSubmit: async () => {
      if (TypeFormik.values.type == "CLIENT") {
        setLoading(true)
        const data = {
          email: PersonalDetailsFormik.values.email,
          password: PasswordFormik.values.password,
          phone_number: PersonalDetailsFormik.values.phoneNumber as string,
          name: PersonalDetailsFormik.values.fullName,
          city: LocationFormik.values.city,
          state: LocationFormik.values.state,
          country: LocationFormik.values.country,
          street: LocationFormik.values.street,
          postCode: LocationFormik.values.postCode,
          latitude: LocationFormik.values.latitude,
          longitude: LocationFormik.values.longitude,
          role: TypeFormik.values.type
        }
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`, data).then((res) => {
          console.log(res)
          if (res.status == 201) {
            setIsCusess(true)
            setLoading(false)
            setTimeout(() => {
              setIsCusess(false)
              location.href = "/auth"
            }, 3000)
          }
        }).catch((error) => {
          setLoading(false)
          console.log(error)
        })
      } else {
        setSteps(6)
      }
    }
  })
  const CompanyProfileFormik = useFormik({
    initialValues: {
      companyName: '',
      companyEmail: '',
      companyAddress: '',

    },
    validationSchema: companyProfileValidationSchema,
    onSubmit: () => {
      setSteps(7)
    }
  })

  const ServicesFormik = useFormik({
    initialValues: {
      services: []
    },
    validationSchema: ServicesValidationSchema,
    onSubmit: async () => {
      setSteps(8)
    }
  })

  const CompanyDocumentFormik = useFormik({
    initialValues: {
      companyDocument: ""
    },
    validationSchema: CompanyDocumentValidationSchema,
    onSubmit: async () => {
      setSteps(9)
    }
  })
  const CompanyBioMediaFormik = useFormik({
    initialValues: {
      companyBio: "",
      companyLogo: ""
    },
    validationSchema: CompanyBioMediaValidationSchema,
    onSubmit: async () => {
      try {
        setLoading(true)
        const data = {
          email: PersonalDetailsFormik.values.email,
          password: PasswordFormik.values.password,
          phone_number: PersonalDetailsFormik.values.phoneNumber as string,
          name: PersonalDetailsFormik.values.fullName,
          city: LocationFormik.values.city,
          state: LocationFormik.values.state,
          country: LocationFormik.values.country,
          street: LocationFormik.values.street,
          postCode: LocationFormik.values.postCode,
          role: YourTypeFormik.values.type == "FREELANCER" ? YourTypeFormik.values.type : TypeFormik.values.type,
          companyName: CompanyProfileFormik.values.companyName,
          companyEmail: CompanyProfileFormik.values.companyEmail,
          companyLogo: CompanyBioMediaFormik.values.companyLogo,
          companyBio: CompanyBioMediaFormik.values.companyBio,
          files: CompanyDocumentFormik.values.companyDocument,
          servicesData: ServicesFormik.values.services
        }
        signUp(data, {
          onSuccess: (response) => {
            setLoading(false)
            if (response.token) {
              setIsCusess(true)
              setTimeout(() => {
                setIsCusess(false)
                location.href = "/auth"
              }, 3000)
            }
          },
          onError: (error) => {
            setLoading(false)
            setErrorMessage("Error in registering please try again later")
          }
        })

      } catch (error) {
        setLoading(false)
        setErrorMessage("Error in registering please try again later")

      }

    }
  })


  const resendOtp = async () => {
    const data = {
      email: PersonalDetailsFormik.values.email
    }
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/sendotp`, data).then((res) => {
      setSteps(7)
    }).catch((error) => {
      console.log(error)
    })
  }



  return (
    <div className='w-full relative'>
      <div className=' w-full h-screen flex re justify-center items-center bg-[#FAFAFA]'>
        <div className=' bg-white flex flex-row rounded-[30px] max-h-[90%] w-[95%] sm:w-[70%]  md:w-[95%]  lg:w-[70%] overflow-hidden'>
          <div className=' w-full md:w-1/2 h-full flex flex-col gap-[4px] p-5 py-10 lg:p-10'>
            <div className='w-[60px]'>
              <Image src={`/image/swifti.svg`} width={1000} height={1000} className='w-full' alt='loho swifit' />
            </div>

            {steps === 1 && (<ChooseType TypeFormik={TypeFormik} />)}
            {steps === 2 && (<ChooseLocation LocationFormik={LocationFormik} />)}
            {steps === 3 && (<PersonalDetails loading={loading} PersonalDetailsFormik={PersonalDetailsFormik} />)}
            {steps === 4 && (<VerfiyOtp isOtpExpired={isOtpExpired} isVerfied={isVerfied} resendOtp={resendOtp} OtpFormik={OtpFormik} PersonalDetailsFormik={PersonalDetailsFormik} />)}
            {steps === 5 && (<CreatePassword loading={loading} PasswordFormik={PasswordFormik} />)}
            {steps === 6 && (<CompanyProfile CompnayProfileFormik={CompanyProfileFormik} />)}
            {steps === 7 && (<ChooseService ServicesFormik={ServicesFormik} />)}
            {steps === 8 && (<CompanyDocument loading={loading} CompanyDocumentFormik={CompanyDocumentFormik} />)}
            {steps === 9 && (<CompanyBioMedia loading={loading} CompanyBioMediaFormik={CompanyBioMediaFormik} />)}
            {steps === 10 && (<ChooseCompanyType YourTypeFormik={YourTypeFormik} />)}
            <span className='text-[12px] text-[#ee5c5c] font-[500]'>{errorMessage}</span>

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
            <div className='w-full relative z-10  mt-[-30px]'>
              <Image alt='ttt' src={`/image/authback.png`} width={1000} height={1000} className='w-full h-full' />
            </div>
          </div>
        </div>
      </div>
      {isSucess && (
        <div className='w-full z-40 relative'>
          <IsRegistered />
        </div>
      )}

    </div>
  )
}

export default SignUp