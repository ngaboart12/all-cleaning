
import ProfileHeader from '@/components/provider/ProfileHeader'
import { comment } from 'postcss'
import React from 'react'


const Profile = () => {
  const reviews = [
    { name: "Sharon Cain", email: "SharonCain@gmail.com", rating: 4.2, comment: "Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute." },
    { name: "Sharon Cain", email: "SharonCain@gmail.com", rating: 3, comment: "Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute." }
  ]
  return (
    <div className='bg-[#F7F7F7] min-h-screen py-24 px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[10px]'>
      <ProfileHeader />
      <div className='w-full flex flex-row gap-[10px]'>
        <div className='w-full lg:w-[40%] flex flex-col gap-[10px]'>
          <div className='flex flex-row gap-[20px] p-4 bg-white'>
            <h1 className='text-[16px] font-[600]'>Reviews </h1>
            <span className='text-[16px] font-[600] text-primary'>6</span>
          </div>
          <div className='flex flex-col gap-[10px]'>
            {reviews.map((review: any, index: number) => {
              return (
                <div key={index} className='w-full p-3 rounded-[12px] bg-white flex flex-col gap-[10px]'>
                  <div className='flex flex-row  items-center justify-between'>
                    <div className='flex flex-row gap-[10px] items-center'>

                      <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#D0E6EC]'>
                        <span className='text-[18px] font-[700] text-primary'>{review.name.split(" ")[0].charAt(0)}</span>
                        <span className='text-[18px] font-[700] text-primary'>{review.name.split(" ")[1]?.charAt(0)}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[16px] font-[500] text-black'>{review.name}</span>
                        <span className='text-[13px] font-[500] text-[#ACACAC]'>{review.email}</span>
                      </div>
                    </div>
                    <div className='flex flex-row gap-[4px] items-center'>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00809 2.00918L9.03464 4.07926C9.17464 4.36742 9.54792 4.64382 9.86292 4.69675L11.7235 5.00843C12.9134 5.20839 13.1934 6.07876 12.336 6.93737L10.8895 8.39582C10.6445 8.64281 10.5104 9.11916 10.5861 9.46029L11.0003 11.2657C11.3269 12.6948 10.5745 13.2476 9.32047 12.5007L7.57648 11.4598C7.26154 11.2716 6.74243 11.2716 6.4216 11.4598L4.67765 12.5007C3.42945 13.2476 2.6712 12.6889 2.99784 11.2657L3.41196 9.46029C3.48778 9.11916 3.35363 8.64281 3.10865 8.39582L1.66215 6.93737C0.810575 6.07876 1.08471 5.20839 2.27458 5.00843L4.13521 4.69675C4.44434 4.64382 4.81763 4.36742 4.95761 4.07926L5.98416 2.00918C6.5441 0.885936 7.45398 0.885936 8.00809 2.00918Z" stroke="#13829F" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span>{review.rating}</span>
                    </div>
                  </div>
                  <span className='text-[14px] font-[400]'>{review.comment}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-full lg:w-[60%] flex flex-col gap-[10px]'>
          <div className='w-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile