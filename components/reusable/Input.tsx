import React from 'react'

interface inputProps {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: inputProps) => {
    return (
        <div className="flex flex-col gap-[4px] w-full">
            <label className='text-[14px] font-[500]'>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} className='p-3 bg-[#F8F8F8] rounded-[8px] text-[14px] font-[400]' />
        </div>
    )
}
export default Input
