import React, { useRef, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

type Props = {
    PersonalDetailsFormik: any;
    OtpFormik: any;
    resendOtp: any;
    isVerfied: boolean
    isOtpExpired: string
};

const VerifyOtp = ({ PersonalDetailsFormik, OtpFormik, resendOtp, isVerfied, isOtpExpired }: Props) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const allFilled = OtpFormik.values.otp.every((value: string) => value.length === 1);
        setIsButtonDisabled(!allFilled);
    }, [OtpFormik.values.otp]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) { 
            OtpFormik.setFieldValue(`otp[${index}]`, value);
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus(); 
            }
        } else if (value === '') { 
            OtpFormik.setFieldValue(`otp[${index}]`, '');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value) {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus(); 
            }
        }
    };

    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Account verification</h1>
            <span className='text-[rgb(19,130,159)] font-[600] text-[16px]'>Enter the code sent to {PersonalDetailsFormik.values.email} to finalize your account setup</span>
            <form onSubmit={OtpFormik.handleSubmit} className='flex flex-col gap-[10px] py-4'>
                <div className='grid grid-cols-4 gap-[4px]'>
                    {Array(4).fill(0).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={OtpFormik.values.otp[index] || ''}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => {
                                inputRefs.current[index] = el;  
                            }}
                            className='w-[40px] h-[40px] rounded-[40px] border-2 border-[#13829F] text-center'
                            placeholder='0'
                        />
                    ))}
                </div>
                {isVerfied && (
                    <div className='p-4 bg-secondary/60 rounded-[6px] mt-2 flex flex-row items-center justify-center gap-[10px]'>
                        <span className='text-white font-[400]'>OTP Verfication sucessfully </span>
                        <div>
                            <ReactLoading type={'spin'} color='white' height={20} width={20} />
                        </div>
                    </div>
                )}
                {isOtpExpired !== "" && (
                    <div className='p-4 bg-secondary/60 rounded-[6px] mt-2 flex flex-row items-center justify-center gap-[10px]'>
                        <span className='text-white font-[400]'>{isOtpExpired}</span>

                    </div>
                )}

                <div className='flex flex-col gap-[4px]'>
                    <button type='submit' className={`w-full h-[50px] rounded-[24px] ${isButtonDisabled ? 'bg-gray-400' : 'bg-[#1990AF]'} text-white`} disabled={isButtonDisabled}>
                        Verify
                    </button>
                    <span className='text-[13px] font-[400] text-[#999797] text-center'>Didn’t receive any code?</span>
                    <div onClick={() => resendOtp()} className=' text-[14px] text-[#13829F] font-[600] text-center'>Resend code</div>
                </div>
            </form>
        </div>
    );
}

export default VerifyOtp;
