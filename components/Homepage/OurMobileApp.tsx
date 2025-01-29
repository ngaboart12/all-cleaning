import Image from 'next/image'
import React from 'react'

const OurMobileApp = () => {
    return (
        <div className='flex flex-col  bg-white items-center p-20'>
            <div className='flex flex-col items-center gap-[10px]'>
                <h1 className='text-[30px] text-primary font-[700] text-center max-w-[400px] leading-8'>Clean On-The-Go with Our Mobile App</h1>
                <span className='text-[14px] font-[400] text-[#3C3C3C] text-center max-w-[500px] leading-5'>Stay connected and manage your cleaning services anytime, anywhere with our user-friendly mobile app. Whether you're a client or a service provider, our app has everything you need at your fingertips.</span>
            </div>
            <div className='flex flex-row  gap-[60px] items-center'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-row gap-[20px] items-center justify-end'>
                        <span className='text-[14px] font-[500]'>Easy Booking</span>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" stroke="#13829F" stroke-width="1.5" />
                            <path d="M5 6H2M5 12H2M5 18H2" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 7H13.5M15.5 11H13.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 22V2" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[20px] items-center justify-end'>
                        <span className='text-[14px] font-[500]'>Real-Time Tracking</span>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H8C9.88562 12 10.8284 12 11.4142 12.5858C12 13.1716 12 14.1144 12 16V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 15H8" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 2C15.7909 2 14 3.80892 14 6.04033C14 7.31626 14.5 8.30834 15.5 9.1945C16.2049 9.81911 17.0588 10.8566 17.5714 11.6975C17.8173 12.1008 18.165 12.1008 18.4286 11.6975C18.9672 10.8733 19.7951 9.81911 20.5 9.1945C21.5 8.30834 22 7.31626 22 6.04033C22 3.80892 20.2091 2 18 2Z" stroke="#13829F" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M18 15V18C18 19.8856 18 20.8284 17.5314 21.4142C17.0839 21.9735 16.3761 21.9988 15 21.9999" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.008 6H17.999" stroke="#13829F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </div>
                    </div>
                    <div className='flex flex-row gap-[20px] items-center justify-end'>
                        <span className='text-[14px] font-[500]'>Easy Booking</span>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M22.75 13.2445C22.7493 12.8302 22.4129 12.495 21.9987 12.4958C21.5845 12.4965 21.2493 12.8329 21.25 13.2471L22.75 13.2445ZM9.06582 6.75292C9.48003 6.75057 9.81391 6.41289 9.81157 5.99869C9.80922 5.58448 9.47154 5.2506 9.05734 5.25294L9.06582 6.75292ZM13.5 21.2504H10.5V22.7504H13.5V21.2504ZM10.5 21.2504C8.60311 21.2504 7.24353 21.2493 6.19895 21.1313C5.16816 21.0148 4.54359 20.7931 4.07229 20.4209L3.14263 21.5981C3.926 22.2168 4.86842 22.4905 6.03058 22.6218C7.17896 22.7515 8.63832 22.7504 10.5 22.7504V21.2504ZM1.25 14.0004C1.25 15.7493 1.24857 17.1321 1.38762 18.2226C1.52932 19.3337 1.82681 20.2394 2.49298 20.9866L3.61262 19.9884C3.22599 19.5547 2.99708 18.9856 2.87558 18.0328C2.75143 17.0593 2.75 15.789 2.75 14.0004H1.25ZM4.07229 20.4209C3.90545 20.2892 3.7517 20.1444 3.61262 19.9884L2.49298 20.9866C2.69068 21.2084 2.90811 21.4129 3.14263 21.5981L4.07229 20.4209ZM21.25 14.0004C21.25 15.789 21.2486 17.0593 21.1244 18.0328C21.0029 18.9856 20.774 19.5547 20.3874 19.9884L21.507 20.9866C22.1732 20.2394 22.4707 19.3337 22.6124 18.2226C22.7514 17.1321 22.75 15.7493 22.75 14.0004H21.25ZM13.5 22.7504C15.3617 22.7504 16.821 22.7515 17.9694 22.6218C19.1316 22.4905 20.074 22.2168 20.8574 21.5981L19.9277 20.4209C19.4564 20.7931 18.8318 21.0148 17.801 21.1313C16.7565 21.2493 15.3969 21.2504 13.5 21.2504V22.7504ZM20.3874 19.9884C20.2483 20.1444 20.0946 20.2892 19.9277 20.4209L20.8574 21.5981C21.0919 21.4129 21.3093 21.2084 21.507 20.9866L20.3874 19.9884ZM2.75 14.0004C2.75 12.2118 2.75143 10.9415 2.87558 9.96799C2.99708 9.01519 3.22599 8.44606 3.61262 8.0124L2.49298 7.0142C1.82681 7.76141 1.52932 8.66709 1.38762 9.77825C1.24857 10.8687 1.25 12.2515 1.25 14.0004H2.75ZM3.14263 6.40268C2.90811 6.58789 2.69068 6.79245 2.49298 7.0142L3.61262 8.0124C3.7517 7.8564 3.90545 7.71161 4.07229 7.57986L3.14263 6.40268ZM22.75 14.0004C22.75 13.7412 22.7504 13.4875 22.75 13.2445L21.25 13.2471C21.2504 13.4885 21.25 13.7376 21.25 14.0004H22.75ZM9.05734 5.25294C7.64978 5.26091 6.50411 5.29333 5.56558 5.44144C4.61301 5.59178 3.81862 5.86882 3.14263 6.40268L4.07229 7.57986C4.47956 7.25822 5.00124 7.04907 5.79942 6.92311C6.61164 6.79492 7.65139 6.76092 9.06582 6.75292L9.05734 5.25294Z" fill="#13829F" />
                            <path d="M10 18H11.5" stroke="#13829F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.5 18H18" stroke="#13829F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 11H10" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </div>
                    </div>
                </div>
                <div className='relative flex items-center justify-center'>
                    <div className='w-[300px] absolute bottom-0'>
                        <Image src={`/image/mobilback.png`} width={1000} height={1000} alt='mobileback' />
                    </div>
                    <div className='w-[200px]  relative z-10'>
                        <Image src={`/image/mobile.png`} width={1000} height={1000} alt='mobileback' />
                    </div>

                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.10794 11.9951C1.93073 13.1227 2.72301 13.9052 3.69305 14.2952C7.41202 15.7906 12.5873 15.7906 16.3063 14.2952C17.2763 13.9052 18.0686 13.1227 17.8914 11.9951C17.7825 11.3022 17.244 10.7252 16.845 10.1617C16.3224 9.41466 16.2705 8.59983 16.2704 7.73292C16.2704 4.38267 13.4629 1.66675 9.99968 1.66675C6.53645 1.66675 3.72895 4.38267 3.72895 7.73292C3.72887 8.59983 3.67694 9.41466 3.15435 10.1617C2.75538 10.7252 2.21685 11.3022 2.10794 11.9951Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 17.5C8.16344 18.0183 9.03958 18.3333 10 18.3333C10.9604 18.3333 11.8366 18.0183 12.5 17.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <span className='text-[14px] font-[500]'>Notifications & Reminders</span>
                    </div>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#13829F" stroke-width="1.5" />
                        </svg>

                        </div>
                        <span className='text-[14px] font-[500]'>Profile Management</span>
                    </div>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 11.8045C17 11.4588 17 11.286 17.052 11.132C17.2032 10.6844 17.6018 10.5108 18.0011 10.3289C18.45 10.1244 18.6744 10.0222 18.8968 10.0042C19.1493 9.98378 19.4022 10.0382 19.618 10.1593C19.9041 10.3198 20.1036 10.6249 20.3079 10.873C21.2513 12.0188 21.7229 12.5918 21.8955 13.2236C22.0348 13.7334 22.0348 14.2666 21.8955 14.7764C21.6438 15.6979 20.8485 16.4704 20.2598 17.1854C19.9587 17.5511 19.8081 17.734 19.618 17.8407C19.4022 17.9618 19.1493 18.0162 18.8968 17.9958C18.6744 17.9778 18.45 17.8756 18.0011 17.6711C17.6018 17.4892 17.2032 17.3156 17.052 16.868C17 16.714 17 16.5412 17 16.1955V11.8045Z" stroke="#13829F" stroke-width="1.5" />
                            <path d="M7 11.8046C7 11.3694 6.98778 10.9782 6.63591 10.6722C6.50793 10.5609 6.33825 10.4836 5.99891 10.329C5.55001 10.1246 5.32556 10.0224 5.10316 10.0044C4.43591 9.95037 4.07692 10.4058 3.69213 10.8732C2.74875 12.019 2.27706 12.5919 2.10446 13.2237C1.96518 13.7336 1.96518 14.2668 2.10446 14.7766C2.3562 15.6981 3.15152 16.4705 3.74021 17.1856C4.11129 17.6363 4.46577 18.0475 5.10316 17.996C5.32556 17.978 5.55001 17.8757 5.99891 17.6713C6.33825 17.5167 6.50793 17.4394 6.63591 17.3281C6.98778 17.0221 7 16.631 7 16.1957V11.8046Z" stroke="#13829F" stroke-width="1.5" />
                            <path d="M20 10.5V9C20 5.13401 16.4183 2 12 2C7.58172 2 4 5.13401 4 9V10.5" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 17.5C20 22 16 22 12 22" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </div>
                        <span className='text-[14px] font-[500]'>Customer Support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMobileApp