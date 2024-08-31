import React from 'react';

type Props = {
    CompnayProfileFormik: any;
};

const CompanyProfile = ({ CompnayProfileFormik }: Props) => {
    const handelSubmit = (e: React.FormEvent)=>{
        e.preventDefault()
        if(CompnayProfileFormik.values.password !== CompnayProfileFormik.values.repassword){
            CompnayProfileFormik.setFieldError('repassword', "Password do not match")
        }else{
            CompnayProfileFormik.handleSubmit()
        }

    }
    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Your Personal Details</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Fill in your personal details to proceed with registration.</span>
            <form onSubmit={handelSubmit} className='flex flex-col gap-[10px] py-4'>
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9]'>
                    <input 
                        type="text" 
                        name='companyName' 
                        onChange={CompnayProfileFormik.handleChange} 
                        value={CompnayProfileFormik.values.companyName} 
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]' 
                        placeholder='Type your company name' 
                    />
                </div>
                    {CompnayProfileFormik.touched.companyName && CompnayProfileFormik.errors.companyName ? (
                        <div className='text-red-500 text-[12px] px-4'>{CompnayProfileFormik.errors.companyName}</div>
                    ) : null}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input 
                        type="text" 
                        name='companyEmail' 
                        onChange={CompnayProfileFormik.handleChange} 
                        value={CompnayProfileFormik.values.companyEmail} 
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]' 
                        placeholder='Type your company email' 
                    />
                </div>
                    {CompnayProfileFormik.touched.companyEmail && CompnayProfileFormik.errors.companyEmail ? (
                        <div className='text-red-500 text-[12px] px-4'>{CompnayProfileFormik.errors.companyEmail}</div>
                    ) : null}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input 
                        type="text" 
                        name='companyAddress' 
                        onChange={CompnayProfileFormik.handleChange} 
                        value={CompnayProfileFormik.values.companyAddress} 
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]' 
                        placeholder='Type your company address' 
                    />
                </div>
                    {CompnayProfileFormik.touched.companyAddress && CompnayProfileFormik.errors.companyAddress ? (
                        <div className='text-red-500 text-[12px] px-4'>{CompnayProfileFormik.errors.companyAddress}</div>
                    ) : null}
                <div className='flex flex-col gap-[4px]'>
                    <button type='submit' className='w-full h-[50px] rounded-[24px] bg-[#1990AF] text-white'> Continue</button>
                </div>
            </form>
        </div>
    );
}

export default CompanyProfile;
