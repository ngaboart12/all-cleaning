import { fetchAllUsersQuery } from '@/app/hooks/users.hook';
import React, { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type Props = {
    PersonalDetailsFormik: any;
    loading: any;
};

const PersonalDetails = ({ PersonalDetailsFormik, loading }: Props) => {
    const { isLoading, data: users, isError, error } = fetchAllUsersQuery();
    const [emailError, setEmailError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const handelShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        if (PersonalDetailsFormik.values.email) {
            const existingUser = users?.find((user: any) => user.email === PersonalDetailsFormik.values.email);

            if (existingUser) {
                setEmailError('Email has been taken');
            } else {
                setEmailError(null);
            }
        }
    }, [PersonalDetailsFormik.values.email, users]);

    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Your Personal Details</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Fill in your personal details to proceed with registration.</span>
            <form onSubmit={PersonalDetailsFormik.handleSubmit} className='flex flex-col gap-[10px] py-4'>
                {/* Full Name */}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9]'>
                    <input
                        type="text"
                        name='fullName'
                        onChange={PersonalDetailsFormik.handleChange}
                        value={PersonalDetailsFormik.values.fullName}
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                        placeholder='Enter Your full name'
                    />
                </div>
                {PersonalDetailsFormik.touched.fullName && PersonalDetailsFormik.errors.fullName && (
                    <div className='text-red-500 text-[12px] px-4'>{PersonalDetailsFormik.errors.fullName}</div>
                )}

                {/* Email */}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input
                        type="text"
                        name='email'
                        onChange={PersonalDetailsFormik.handleChange}
                        value={PersonalDetailsFormik.values.email}
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                        placeholder='Enter your email'
                    />
                </div>
                {PersonalDetailsFormik.touched.email && PersonalDetailsFormik.errors.email && (
                    <div className='text-red-500 text-[12px] px-4'>{PersonalDetailsFormik.errors.email}</div>
                )}
                {emailError && (
                    <div className='text-red-500 text-[12px] px-4'>{emailError}</div>
                )}

                {/* Phone Number */}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input
                        type="text"
                        pattern="\d*"
                        name='phoneNumber'
                        onChange={PersonalDetailsFormik.handleChange}
                        value={PersonalDetailsFormik.values.phoneNumber}
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                        placeholder='Enter your phone number'
                    />
                </div>
                {PersonalDetailsFormik.touched.phoneNumber && PersonalDetailsFormik.errors.phoneNumber && (
                    <div className='text-red-500 text-[12px] px-4'>{PersonalDetailsFormik.errors.phoneNumber}</div>
                )}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input
                        type={showPassword ? "text" : "password"}
                        name='password'
                        onChange={PersonalDetailsFormik.handleChange}
                        value={PersonalDetailsFormik.values.password}
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]'
                        placeholder='Enter your password'
                    />
                    <div onClick={handelShowPassword} className='cursor-pointer absolute right-4 -translate-y-[50%] top-[50%] '>
                        {showPassword ? (
                            <FaEyeSlash size={20} className='text-primary' />
                        ) : (
                            <FaEye size={20} className='text-primary' />
                        )}
                    </div>
                </div>
                {PersonalDetailsFormik.touched.password && PersonalDetailsFormik.errors.password && (
                    <div className='text-red-500 text-[12px] px-4'>{PersonalDetailsFormik.errors.password}</div>
                )}

                {/* Already have an account */}
                <div className='w-full flex flex-row items-center justify-between px-4'>
                    <a href="#" className='text-[12px] sm:text-[14px] text-[#13829F]'></a>
                    <a href="/auth" className='text-[12px] sm:text-[14px] text-[#13829F]'>Already have an account?</a>
                </div>

                {/* Submit button */}
                <div className='flex flex-col gap-[4px]'>
                    <button
                        type='submit'
                        className={`w-full h-[50px] rounded-[24px] ${!!emailError ? "bg-[#9ba7aa]" : "bg-[#1990AF]"}  text-white`}
                        disabled={!!emailError || loading}
                    >
                        {loading ? "Loading..." : "Continue"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetails;
