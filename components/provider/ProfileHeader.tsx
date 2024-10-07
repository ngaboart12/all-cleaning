import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
    return (
        <div className='w-full flex bg-white flex-col gap-[5px] rounded-[12px]'>
            <div className='w-full  rounded-t-[12px] h-[20vh]'>
                <Image src={`/image/faq.png`} width={1000} height={1000} alt='profile' className='w-full h-full object-cover rounded-t-[12px]' />
            </div>
            <div className='w-full px-[5px] md:px-10 flex flex-col gap-[10px]'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <div className='w-[50px] h-[50px] rounded-[6px]'>
                            <Image src={`/image/company.png`} width={1000} height={1000} alt='company photo' className='w-full h-full object-cover rounded-[6px]' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div className='flex flex-row items-center gap-[20px]'>
                                <h1 className='text-[16px] font-[600] text-black'>Space around</h1>
                                <div className='flex flex-row gap-[4px]'>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.50809 2.00918L9.53464 4.07926C9.67464 4.36742 10.0479 4.64382 10.3629 4.69675L12.2235 5.00843C13.4134 5.20839 13.6934 6.07876 12.836 6.93737L11.3895 8.39582C11.1445 8.64281 11.0104 9.11916 11.0861 9.46029L11.5003 11.2657C11.8269 12.6948 11.0745 13.2476 9.82047 12.5007L8.07648 11.4598C7.76154 11.2716 7.24243 11.2716 6.9216 11.4598L5.17765 12.5007C3.92945 13.2476 3.1712 12.6889 3.49784 11.2657L3.91196 9.46029C3.98778 9.11916 3.85363 8.64281 3.60865 8.39582L2.16215 6.93737C1.31058 6.07876 1.58471 5.20839 2.77458 5.00843L4.63521 4.69675C4.94434 4.64382 5.31763 4.36742 5.45761 4.07926L6.48416 2.00918C7.0441 0.885936 7.95398 0.885936 8.50809 2.00918Z" stroke="#13829F" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className='text-[14px] font-[700]'>4.2</span>
                                </div>
                            </div>
                            <h1 className='text-[13px] font-[400] text-[#7D7D7D]'>Los angele, Califonia</h1>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-[10px]'>
                        {/* chat button */}
                        <div className='flex cursor-pointer hover:bg-[#d3f1f9] transition-all duration-200 flex-row items-center gap-[10px] p-[10px] rounded-[8px] bg-[#E2F5FA] px-[20px]'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 12.0667C22.5 17.3499 18.0222 21.6334 12.5 21.6334C11.8507 21.6343 11.2032 21.5742 10.5654 21.4545C10.1063 21.3682 9.87678 21.3251 9.71653 21.3496C9.55627 21.3741 9.32918 21.4948 8.87499 21.7364C7.59014 22.4197 6.09195 22.661 4.65111 22.393C5.19874 21.7194 5.57275 20.9112 5.73778 20.0448C5.83778 19.5148 5.59 19 5.21889 18.6231C3.53333 16.9115 2.5 14.6051 2.5 12.0667C2.5 6.78357 6.97778 2.5 12.5 2.5C18.0222 2.5 22.5 6.78357 22.5 12.0667Z" stroke="#13829F" stroke-linejoin="round" />
                                <path d="M12.4955 12.5H12.5045M16.491 12.5H16.5M8.5 12.5H8.50897" stroke="#13829F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className='text-[14px] font-[400] text-[#13829F]'>Chat with us</span>
                        </div>
                        <div className='flex cursor-pointer hover:bg-primary/80 transition-all duration-200 flex-row items-center gap-[10px] p-[10px] rounded-[8px] bg-primary px-[20px]'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5183 9.93325L16.0462 10.9979C16.1182 11.1461 16.3102 11.2882 16.4722 11.3154L17.4291 11.4757C18.041 11.5786 18.185 12.0262 17.744 12.4677L17.0001 13.2178C16.8741 13.3448 16.8051 13.5898 16.8441 13.7652L17.0571 14.6937C17.2251 15.4287 16.8381 15.713 16.1932 15.3289L15.2963 14.7936C15.1343 14.6968 14.8674 14.6968 14.7024 14.7936L13.8055 15.3289C13.1636 15.713 12.7736 15.4257 12.9416 14.6937L13.1546 13.7652C13.1935 13.5898 13.1246 13.3448 12.9986 13.2178L12.2547 12.4677C11.8167 12.0262 11.9577 11.5786 12.5696 11.4757L13.5265 11.3154C13.6855 11.2882 13.8775 11.1461 13.9495 10.9979L14.4774 9.93325C14.7654 9.35558 15.2333 9.35558 15.5183 9.93325Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.5 17.5V21" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.5 4V7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.4996 9.37895C22.4327 7.83687 22.2452 6.83298 21.7199 6.03884C21.4177 5.58196 21.0424 5.18459 20.6108 4.86468C19.4443 4 17.7986 4 14.5074 4H10.4926C7.20136 4 5.55573 4 4.38921 4.86468C3.95764 5.18459 3.58226 5.58196 3.28006 6.03884C2.75485 6.83289 2.56735 7.83665 2.50042 9.37843C2.48897 9.64208 2.71607 9.84375 2.9649 9.84375C4.35068 9.84375 5.47408 11.033 5.47408 12.5C5.47408 13.967 4.35068 15.1562 2.9649 15.1562C2.71607 15.1562 2.48897 15.3579 2.50042 15.6216C2.56735 17.1634 2.75485 18.1671 3.28006 18.9612C3.58226 19.418 3.95764 19.8154 4.38921 20.1353C5.55573 21 7.20137 21 10.4926 21H14.5074C17.7986 21 19.4443 21 20.6108 20.1353C21.0424 19.8154 21.4177 19.418 21.7199 18.9612C22.2452 18.167 22.4327 17.1631 22.4996 15.6211V9.37895Z" stroke="white" stroke-linejoin="round" />
                            </svg>

                            <span className='text-[14px] font-[400] text-white'>Book service</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row items-center w-full gap-[10px] py-4 px-10'>
                <div className='flex flex-col gap-[5px] w-full '>
                    <span className='text-[14px] text-[#9D9D9D]'>About</span>
                    <span className='text-[14px] text-[#3B3B3B]'>Share pencil connection draft text. Main stroke ellipse team frame layer pixel outline scale link. Font boolean list mask distribute.</span>
                </div>
                <div className='flex flex-col gap-[5px] w-full'>
                    <h1 className='text-[16px] font-[700]'>Services</h1>
                    <div className='flex flex-row gap-[10px]'>
                        <div className='w-full p-3 bg-[#FFF9ED] flex items-center justify-center'>
                            <span className='text-[#E2B659] font-[500] text-[16px]'>Home</span>
                        </div>
                        <div className='w-full p-3 bg-[#EFFCFF] flex items-center justify-center'>
                            <span className='text-[#13829F] font-[500] text-[16px]'>Home</span>
                        </div>
                        <div className='w-full p-3 bg-[#FFF9ED] flex items-center justify-center'>
                            <span className='text-[#E2B659] font-[500] text-[16px]'>Home</span>
                        </div>
                        <div className='w-full p-3 bg-[#EFFCFF] flex items-center justify-center'>
                            <span className='text-[#13829F] font-[500] text-[16px]'>Home</span>
                        </div>
                        <div className='w-[10%] cursor-pointer p-3 bg-[#FFF9ED] flex items-center justify-center'>
                            <span className='text-[#E2B659] font-[500] text-[16px]'>8+</span>
                        </div>
                        
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader