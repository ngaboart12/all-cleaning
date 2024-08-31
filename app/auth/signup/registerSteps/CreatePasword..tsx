import React from 'react';

type Props = {
    PasswordFormik: any;
};

const CreatePassword = ({ PasswordFormik }: Props) => {
    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Your Personal Details</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Fill in your personal details to proceed with registration.</span>
            <form onSubmit={PasswordFormik.handleSubmit} className='flex flex-col gap-[10px] py-4'>
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9]'>
                    <input 
                        type="text" 
                        name='password' 
                        onChange={PasswordFormik.handleChange} 
                        value={PasswordFormik.values.password} 
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]' 
                        placeholder='Type your password' 
                    />
                </div>
                    {PasswordFormik.touched.password && PasswordFormik.errors.password ? (
                        <div className='text-red-500 text-[12px] px-4'>{PasswordFormik.errors.password}</div>
                    ) : null}
                <div className='w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative'>
                    <input 
                        type="text" 
                        name='repassword' 
                        onChange={PasswordFormik.handleChange} 
                        value={PasswordFormik.values.repassword} 
                        className='w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]' 
                        placeholder='Confirm password' 
                    />
                </div>
                    {PasswordFormik.touched.repassword && PasswordFormik.errors.repassword ? (
                        <div className='text-red-500 text-[12px] px-4'>{PasswordFormik.errors.repassword}</div>
                    ) : null}
                <div className='w-full flex flex-row items-center justify-between px-4'>
                    <a href="#" className='text-[12px] sm:text-[14px] text-[#13829F]'></a>
                    <a href="#" className='text-[12px] sm:text-[14px] text-[#13829F]'>Already have an account?</a>
                </div>
                <div className='flex flex-col gap-[4px]'>
                    <button type='submit' className='w-full h-[50px] rounded-[24px] bg-[#1990AF] text-white'> Continue</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePassword;
