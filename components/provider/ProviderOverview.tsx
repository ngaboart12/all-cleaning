"use client"
import React, { useEffect, useState } from 'react'

const ProviderOverview = () => {
    const [formattedDate, setFormattedDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
  
    const getFormattedDate = () => {
      const now = new Date();
      const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
      return now.toLocaleDateString('en-US', options);
    };
  
    const getCurrentTime = () => {
      const now = new Date();
      const options: any = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      return now.toLocaleTimeString('en-US', options);
    };
  
    useEffect(() => {
      setFormattedDate(getFormattedDate());
  
      const interval = setInterval(() => {
        setCurrentTime(getCurrentTime());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='w-full rounded-[12px] p-6 bg-white flex flex-col gap-[10px]'>
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-col gap-[4px]'>
        <h1 className='text-[24px] font-[700] text-primary'>Welcome back!</h1>
        <div className='flex flex-row items-center gap-[10px]'>
          <span className='text-[14px] text-[#424242]'>{formattedDate}</span>
          <span className='text-[14px] text-[#424242]'>{currentTime}</span>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-[10px]'>
      <div className='p-4 bg-[#FBFBFB] rounded-[8px] flex flex-row gap-[10px]'>
        <div className='p-2 bg-white rounded-[4px] flex items-center'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18.5C18.4183 18.5 22 14.9183 22 10.5C22 6.08172 18.4183 2.5 14 2.5C9.58172 2.5 6 6.08172 6 10.5C6 14.9183 9.58172 18.5 14 18.5Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
            <path d="M13.1669 21.4688C12.063 22.1238 10.7742 22.4999 9.3975 22.4999C5.31197 22.4999 2 19.1879 2 15.1024C2 13.7257 2.37607 12.4369 3.03107 11.333" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
          </svg>

        </div>
        <div className='flex flex-col gap-[4px]'>
          <h1 className='text-[14px] font-[700] text-black'>Revenue</h1>
          <span className='text-[16px] font-[700] text-black'>$ 800 000</span>
        </div>
      </div>
      <div className='p-4 bg-[#FBFBFB] rounded-[8px] flex flex-row gap-[10px]'>
        <div className='p-2 bg-white rounded-[4px] flex items-center'>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.441 18C22.1903 18 22.7863 17.5285 23.3214 16.8691C24.4169 15.5194 22.6183 14.4408 21.9323 13.9126C21.235 13.3756 20.4564 13.0714 19.667 13M18.667 11C20.0477 11 21.167 9.88071 21.167 8.5C21.167 7.11929 20.0477 6 18.667 6" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3.89296 18C3.14365 18 2.54767 17.5285 2.01254 16.8691C0.917083 15.5194 2.71567 14.4408 3.40164 13.9126C4.09897 13.3756 4.87758 13.0714 5.667 13M6.167 11C4.78629 11 3.667 9.88071 3.667 8.5C3.667 7.11929 4.78629 6 6.167 6" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
            <path d="M8.7508 15.1112C7.72902 15.743 5.04998 17.0331 6.68169 18.6474C7.47877 19.436 8.36652 20 9.48262 20H15.8514C16.9675 20 17.8552 19.436 18.6523 18.6474C20.284 17.0331 17.605 15.743 16.5832 15.1112C14.1871 13.6296 11.1468 13.6296 8.7508 15.1112Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.167 7.5C16.167 9.433 14.6 11 12.667 11C10.734 11 9.16699 9.433 9.16699 7.5C9.16699 5.567 10.734 4 12.667 4C14.6 4 16.167 5.567 16.167 7.5Z" stroke="#13829F" stroke-width="1.5" />
          </svg>


        </div>
        <div className='flex flex-col gap-[4px]'>
          <h1 className='text-[14px] font-[700] text-black'>Cleaners</h1>
          <span className='text-[16px] font-[700] text-black'>140</span>
        </div>
      </div>
      <div className='p-4 bg-[#FBFBFB] rounded-[8px] flex flex-row gap-[10px]'>
        <div className='p-2 bg-white rounded-[4px] flex items-center'>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.333 2.66748V5.66748M6.33301 2.66748V5.66748" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.333 13.6675V12.1675C20.333 8.39624 20.333 6.51063 19.1614 5.33905C17.9899 4.16748 16.1042 4.16748 12.333 4.16748H10.333C6.56177 4.16748 4.67616 4.16748 3.50458 5.33905C2.33301 6.51063 2.33301 8.39624 2.33301 12.1675V14.6675C2.33301 18.4387 2.33301 20.3244 3.50458 21.4959C4.67616 22.6675 6.56177 22.6675 10.333 22.6675H11.833" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.333 20.1675C14.333 20.1675 15.6815 20.6742 16.333 22.6675C16.333 22.6675 19.5095 17.6675 22.333 16.6675" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.83301 9.16748H19.833" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <h1 className='text-[14px] font-[700] text-black'>Bookings</h1>
          <span className='text-[16px] font-[700] text-black'>40</span>
        </div>
      </div>
    </div>

    <div className='flex cursor-pointer flex-row gap-[10px] items-center'>
      <div className={`flex flex-row gap-[10px] items-center bg-[#FEFAF1] rounded-[12px] p-3 px-[20px]`}>
        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.16699 4.5835H17.5003" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
          <path d="M4.5 14.0773C5.38889 14.6727 5.83333 14.9703 5.83333 15.4168C5.83333 15.8633 5.38889 16.161 4.5 16.7563C3.61111 17.3517 3.16667 17.6493 2.83333 17.4261C2.5 17.2028 2.5 16.6075 2.5 15.4168C2.5 14.2262 2.5 13.6308 2.83333 13.4076C3.16667 13.1844 3.61111 13.482 4.5 14.0773Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
          <path d="M4.5 3.24386C5.38889 3.83918 5.83333 4.13684 5.83333 4.58333C5.83333 5.02982 5.38889 5.32748 4.5 5.92281C3.61111 6.51813 3.16667 6.81579 2.83333 6.59254C2.5 6.3693 2.5 5.77397 2.5 4.58333C2.5 3.39269 2.5 2.79737 2.83333 2.57412C3.16667 2.35087 3.61111 2.64853 4.5 3.24386Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
          <path d="M9.16699 10H17.5003" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
          <path d="M9.16699 15.4165H17.5003" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        </div>
        <span className='text-[16px] font-[500] text-[#E2B659]'>Activities</span>

      </div>
      <div className={`flex cursor-pointer flex-row gap-[10px] items-center bg-transparent rounded-[12px] p-3 px-[20px]`}>
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_2328)">
              <path d="M9.17241 17.5002H8.00488C5.01717 17.5002 3.52332 17.5002 2.59515 16.5543C1.66699 15.6086 1.66699 14.0863 1.66699 11.0418C1.66699 7.99734 1.66699 6.4751 2.59515 5.5293C3.52332 4.5835 5.01717 4.5835 8.00488 4.5835H11.1738C14.1615 4.5835 15.6554 4.5835 16.5836 5.5293C17.2977 6.25699 17.4623 7.32591 17.5003 9.16683" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.708 15.7085L14.583 14.9585V13.0835M10.833 14.5835C10.833 16.6546 12.5119 18.3335 14.583 18.3335C16.6541 18.3335 18.333 16.6546 18.333 14.5835C18.333 12.5124 16.6541 10.8335 14.583 10.8335C12.5119 10.8335 10.833 12.5124 10.833 14.5835Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.333 4.58317L13.2503 4.32562C12.8377 3.04225 12.6314 2.40056 12.1404 2.03353C11.6493 1.6665 10.9972 1.6665 9.69267 1.6665H9.47334C8.16887 1.6665 7.51664 1.6665 7.0256 2.03353C6.53456 2.40056 6.32831 3.04225 5.91579 4.32562L5.83301 4.58317" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_730_2328">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <span className='text-[16px] font-[500] text-[black]'>History</span>

      </div>
      <div className={`flex cursor-pointer flex-row gap-[10px] items-center bg-transparent rounded-[12px] p-3 px-[20px]`}>
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_2334)">
              <path d="M3.81658 7.17233L1.66699 7.04498C3.20783 3.08724 7.63169 0.833044 11.9448 1.95381C16.5387 3.14752 19.2674 7.71778 18.0395 12.1618C17.0239 15.8374 13.6197 18.2754 9.87358 18.3332" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.0003 18.3332C5.41699 18.3332 1.66699 14.1665 1.66699 9.1665" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.5 3" />
              <path d="M11.3367 8.10164C11.0438 7.79406 10.3257 7.0713 9.19117 7.58442C8.0567 8.09755 7.87649 9.7485 9.5925 9.92391C10.3682 10.0032 10.8738 9.83191 11.3367 10.3163C11.7997 10.8007 11.8857 12.148 10.7022 12.511C9.51867 12.8741 8.75183 12.2745 8.54558 12.0869M9.92333 6.68311V7.3423M9.92333 12.6227V13.3497" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_730_2334">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <span className='text-[16px] font-[500] text-[black]'>Transactions</span>

      </div>
    </div>
  </div>
  )
}

export default ProviderOverview