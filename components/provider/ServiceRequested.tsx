import { OpenedServiceType } from '@/lib/types/service.type'
import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import 'primereact/resources/themes/saga-blue/theme.css'
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const ServiceRequested = () => {
    const [openedService, setOpenedService] = useState<OpenedServiceType>({ opened: false, id: "" })
    const [isActive, setIsActive] = useState<boolean>(false)
    const requested = [
        { id: "1", name: "ngabo sevelin", date: "10 November 2024", price: 397, serviceName: 'Deep Home cleaning', description: 'This is service', location: "Los angeles, califonia " },
        { id: "2", name: "Niyomukiza Serge", date: "22 October 2024", price: 397, serviceName: 'Car cleaning', description: 'This is service', location: "kigali, rwanda" },
    ]

    return (
        <div className='w-full flex flex-col bg-white rounded-[12px] gap-[10px] p-4'>
            <div className='w-full flex flex-row items-center gap-[10px] justify-between'>
                <div className='flex flex-row gap-[4px] items-center'>
                    <h1 className='text-[16px] font-[700]'>Service requests</h1>
                    <div className='p-2 rounded-[4px] bg-primary'>
                        <span className='text-[13px] text-white'>12</span>
                    </div>

                </div>
                <a href='' className='flex flex-row gap-[4px] items-center'>
                    <span className='text-[12px]  font-[500]  text-primary'>View All</span>
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="#13829F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>
                </a>
            </div>

            <div className='flex flex-col gap-[10px]'>
                {requested.length == 0 ? (
                    <div className='w-full flex items-center justify-center'>
                        <svg width="207" height="215" viewBox="0 0 207 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="105.252" cy="93.2419" r="37.3577" stroke="black" />
                            <circle cx="105.253" cy="93.2418" r="64.6993" stroke="black" stroke-opacity="0.4" />
                            <circle cx="105.603" cy="92.8915" r="92.3915" stroke="black" stroke-opacity="0.3" />
                            <g clip-path="url(#clip0_0_1)">
                                <rect width="32.2491" height="32.2491" transform="translate(92.6338 78.5195)" fill="white" />
                                <path d="M114.301 85.9775H127.634" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M106.834 101.168C108.256 102.12 108.967 102.596 108.967 103.311C108.967 104.025 108.256 104.502 106.834 105.454C105.412 106.407 104.7 106.883 104.167 106.526C103.634 106.168 103.634 105.216 103.634 103.311C103.634 101.406 103.634 100.453 104.167 100.096C104.7 99.739 105.412 100.215 106.834 101.168Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M106.834 83.8342C108.256 84.7867 108.967 85.263 108.967 85.9774C108.967 86.6918 108.256 87.168 106.834 88.1205C105.412 89.0731 104.7 89.5493 104.167 89.1921C103.634 88.8349 103.634 87.8824 103.634 85.9774C103.634 84.0723 103.634 83.1198 104.167 82.7626C104.7 82.4054 105.412 82.8817 106.834 83.8342Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M114.301 94.644H127.634" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M114.301 103.311H127.634" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
                            </g>
                            <g clip-path="url(#clip1_0_1)">
                                <rect x="133.295" y="83.4272" width="21.032" height="21.032" rx="8" fill="#F8F8F8" />
                                <g clip-path="url(#clip2_0_1)">
                                    <path d="M150.295 87.6099V88.6099C150.295 89.5527 150.295 90.0241 150.588 90.317C150.881 90.6099 151.352 90.6099 152.295 90.6099H153.295" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M142.962 96.6102V91.2769C142.962 89.3912 142.962 88.4484 143.548 87.8626C144.133 87.2769 145.076 87.2769 146.962 87.2769H149.743C150.015 87.2769 150.152 87.2769 150.274 87.3276C150.397 87.3783 150.493 87.4747 150.686 87.6674L153.238 90.2197C153.431 90.4123 153.527 90.5087 153.578 90.6312C153.629 90.7537 153.629 90.89 153.629 91.1625V96.6102C153.629 98.4958 153.629 99.4386 153.043 100.024C152.457 100.61 151.514 100.61 149.629 100.61H146.962C145.076 100.61 144.133 100.61 143.548 100.024C142.962 99.4386 142.962 98.4958 142.962 96.6102Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M145.628 93.2769H150.961M145.628 95.2769H150.961M145.628 97.2769H148.408" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <g clip-path="url(#clip3_0_1)">
                                <rect x="59.6836" y="70.1069" width="21.032" height="21.032" rx="8" fill="#F8F8F8" />
                                <path d="M76.6836 74.2896V75.2896C76.6836 76.2324 76.6836 76.7038 76.9765 76.9967C77.2694 77.2896 77.7408 77.2896 78.6836 77.2896H79.6836" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M69.3506 83.2899V77.9565C69.3506 76.0709 69.3506 75.1281 69.9364 74.5423C70.5222 73.9565 71.465 73.9565 73.3506 73.9565H76.1317C76.4041 73.9565 76.5404 73.9565 76.6629 74.0073C76.7854 74.058 76.8818 74.1544 77.0745 74.3471L79.6267 76.8993C79.8194 77.092 79.9158 77.1884 79.9665 77.3109C80.0173 77.4334 80.0173 77.5697 80.0173 77.8422V83.2899C80.0173 85.1755 80.0173 86.1183 79.4315 86.7041C78.8457 87.2899 77.9029 87.2899 76.0173 87.2899H73.3506C71.465 87.2899 70.5222 87.2899 69.9364 86.7041C69.3506 86.1183 69.3506 85.1755 69.3506 83.2899Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M72.0166 79.9565H77.3499M72.0166 81.9565H77.3499M72.0166 83.9565H74.7971" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <g clip-path="url(#clip4_0_1)">
                                <rect x="102.448" y="149.328" width="21.032" height="21.032" rx="8" fill="#F8F8F8" />
                                <g clip-path="url(#clip5_0_1)">
                                    <path d="M119.448 153.51V154.51C119.448 155.453 119.448 155.924 119.741 156.217C120.034 156.51 120.505 156.51 121.448 156.51H122.448" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M112.115 162.511V157.177C112.115 155.292 112.115 154.349 112.701 153.763C113.287 153.177 114.23 153.177 116.115 153.177H118.896C119.169 153.177 119.305 153.177 119.428 153.228C119.55 153.279 119.646 153.375 119.839 153.568L122.391 156.12C122.584 156.313 122.68 156.409 122.731 156.532C122.782 156.654 122.782 156.79 122.782 157.063V162.511C122.782 164.396 122.782 165.339 122.196 165.925C121.61 166.511 120.668 166.511 118.782 166.511H116.115C114.23 166.511 113.287 166.511 112.701 165.925C112.115 165.339 112.115 164.396 112.115 162.511Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M114.781 159.177H120.115M114.781 161.177H120.115M114.781 163.177H117.562" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <g clip-path="url(#clip6_0_1)">
                                <rect x="5" y="93.2422" width="19.6299" height="19.6299" rx="8" fill="#F8F8F8" />
                                <g clip-path="url(#clip7_0_1)">
                                    <path d="M20.75 97.5156V98.3906C20.75 99.2156 20.75 99.6281 21.0063 99.8843C21.2626 100.141 21.675 100.141 22.5 100.141H23.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.333 105.39V100.724C14.333 99.0737 14.333 98.2488 14.8456 97.7362C15.3581 97.2236 16.1831 97.2236 17.833 97.2236H20.2664C20.5048 97.2236 20.6241 97.2236 20.7313 97.268C20.8385 97.3124 20.9228 97.3967 21.0914 97.5653L23.3246 99.7986C23.4932 99.9672 23.5776 100.051 23.6219 100.159C23.6663 100.266 23.6663 100.385 23.6663 100.624V105.39C23.6663 107.04 23.6663 107.865 23.1538 108.378C22.6412 108.89 21.8162 108.89 20.1663 108.89H17.833C16.1831 108.89 15.3581 108.89 14.8456 108.378C14.333 107.865 14.333 107.04 14.333 105.39Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.667 102.474H21.3337M16.667 104.224H21.3337M16.667 105.974H19.1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <g clip-path="url(#clip8_0_1)">
                                <rect x="182.37" y="50.4771" width="19.6299" height="19.6299" rx="8" fill="#F8F8F8" />
                                <g clip-path="url(#clip9_0_1)">
                                    <path d="M198.12 54.7505V55.6255C198.12 56.4504 198.12 56.8629 198.376 57.1192C198.633 57.3755 199.045 57.3755 199.87 57.3755H200.745" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M191.703 62.6252V57.9585C191.703 56.3086 191.703 55.4836 192.216 54.9711C192.728 54.4585 193.553 54.4585 195.203 54.4585H197.637C197.875 54.4585 197.994 54.4585 198.101 54.5029C198.209 54.5473 198.293 54.6316 198.462 54.8002L200.695 57.0335C200.863 57.2021 200.948 57.2864 200.992 57.3936C201.036 57.5008 201.036 57.62 201.036 57.8584V62.6252C201.036 64.2751 201.036 65.1 200.524 65.6126C200.011 66.1252 199.186 66.1252 197.536 66.1252H195.203C193.553 66.1252 192.728 66.1252 192.216 65.6126C191.703 65.1 191.703 64.2751 191.703 62.6252Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M194.037 59.7085H198.704M194.037 61.4585H198.704M194.037 63.2085H196.47" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <g clip-path="url(#clip10_0_1)">
                                <rect x="33.043" y="99.5518" width="21.032" height="21.032" rx="8" fill="#F8F8F8" />
                                <g clip-path="url(#clip11_0_1)">
                                    <path d="M50.043 103.734V104.734C50.043 105.677 50.043 106.149 50.3358 106.441C50.6288 106.734 51.1002 106.734 52.043 106.734H53.043" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M42.71 112.735V107.401C42.71 105.516 42.71 104.573 43.2957 103.987C43.8815 103.401 44.8243 103.401 46.71 103.401H49.491C49.7635 103.401 49.8998 103.401 50.0223 103.452C50.1448 103.503 50.2412 103.599 50.4338 103.792L52.9861 106.344C53.1788 106.537 53.2752 106.633 53.3259 106.756C53.3766 106.878 53.3766 107.014 53.3766 107.287V112.735C53.3766 114.62 53.3766 115.563 52.7908 116.149C52.205 116.735 51.2622 116.735 49.3766 116.735H46.71C44.8243 116.735 43.8815 116.735 43.2957 116.149C42.71 115.563 42.71 114.62 42.71 112.735Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M45.376 109.401H50.7093M45.376 111.401H50.7093M45.376 113.401H48.1565" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <g clip-path="url(#clip12_0_1)">
                                <rect x="98.2422" y="18.9287" width="21.032" height="21.032" rx="8" fill="#F8F8F8" />
                                <path d="M115.242 23.1113V24.1113C115.242 25.0541 115.242 25.5255 115.535 25.8184C115.828 26.1113 116.299 26.1113 117.242 26.1113H118.242" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M107.909 32.1117V26.7783C107.909 24.8927 107.909 23.9499 108.495 23.3641C109.081 22.7783 110.024 22.7783 111.909 22.7783H114.69C114.963 22.7783 115.099 22.7783 115.222 22.8291C115.344 22.8798 115.44 22.9762 115.633 23.1688L118.185 25.7211C118.378 25.9138 118.474 26.0102 118.525 26.1327C118.576 26.2552 118.576 26.3914 118.576 26.6639V32.1117C118.576 33.9973 118.576 34.9401 117.99 35.5259C117.404 36.1117 116.461 36.1117 114.576 36.1117H111.909C110.024 36.1117 109.081 36.1117 108.495 35.5259C107.909 34.9401 107.909 33.9973 107.909 32.1117Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M110.575 28.7783H115.909M110.575 30.7783H115.909M110.575 32.7783H113.356" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <rect y="168" width="207" height="47" rx="8" fill="#F7F7F7" />
                            <path d="M41.476 198V185.508H42.664L43.168 187.47V198H41.476ZM50.116 198L42.448 187.758L42.664 185.508L50.35 195.732L50.116 198ZM50.116 198L49.612 196.146V185.508H51.304V198H50.116ZM57.8733 198.18C57.0333 198.18 56.2773 197.982 55.6053 197.586C54.9333 197.19 54.3993 196.656 54.0033 195.984C53.6073 195.3 53.4093 194.538 53.4093 193.698C53.4093 192.87 53.6073 192.126 54.0033 191.466C54.3993 190.794 54.9333 190.26 55.6053 189.864C56.2773 189.468 57.0333 189.27 57.8733 189.27C58.7013 189.27 59.4513 189.468 60.1233 189.864C60.8073 190.248 61.3473 190.776 61.7433 191.448C62.1393 192.12 62.3373 192.87 62.3373 193.698C62.3373 194.538 62.1393 195.3 61.7433 195.984C61.3473 196.656 60.8073 197.19 60.1233 197.586C59.4513 197.982 58.7013 198.18 57.8733 198.18ZM57.8733 196.614C58.4133 196.614 58.8933 196.488 59.3133 196.236C59.7333 195.984 60.0633 195.642 60.3033 195.21C60.5433 194.766 60.6633 194.262 60.6633 193.698C60.6633 193.146 60.5373 192.654 60.2853 192.222C60.0453 191.79 59.7153 191.454 59.2953 191.214C58.8873 190.962 58.4133 190.836 57.8733 190.836C57.3333 190.836 56.8533 190.962 56.4333 191.214C56.0133 191.454 55.6833 191.79 55.4433 192.222C55.2033 192.654 55.0833 193.146 55.0833 193.698C55.0833 194.262 55.2033 194.766 55.4433 195.21C55.6833 195.642 56.0133 195.984 56.4333 196.236C56.8533 196.488 57.3333 196.614 57.8733 196.614ZM67.9067 198V189.45H69.5268V198H67.9067ZM69.5268 193.122L68.9148 192.852C68.9148 191.76 69.1668 190.89 69.6708 190.242C70.1748 189.594 70.9008 189.27 71.8488 189.27C72.2808 189.27 72.6708 189.348 73.0188 189.504C73.3668 189.648 73.6908 189.894 73.9908 190.242L72.9288 191.34C72.7488 191.148 72.5508 191.01 72.3348 190.926C72.1188 190.842 71.8668 190.8 71.5788 190.8C70.9788 190.8 70.4868 190.992 70.1028 191.376C69.7188 191.76 69.5268 192.342 69.5268 193.122ZM78.8101 198.18C77.9581 198.18 77.1901 197.988 76.5061 197.604C75.8221 197.208 75.2821 196.674 74.8861 196.002C74.4901 195.33 74.2921 194.568 74.2921 193.716C74.2921 192.876 74.4841 192.12 74.8681 191.448C75.2641 190.776 75.7921 190.248 76.4521 189.864C77.1241 189.468 77.8741 189.27 78.7021 189.27C79.4941 189.27 80.1901 189.45 80.7901 189.81C81.4021 190.17 81.8761 190.668 82.2121 191.304C82.5601 191.94 82.7341 192.66 82.7341 193.464C82.7341 193.584 82.7281 193.716 82.7161 193.86C82.7041 193.992 82.6801 194.148 82.6441 194.328H75.4261V192.978H81.7801L81.1861 193.5C81.1861 192.924 81.0841 192.438 80.8801 192.042C80.6761 191.634 80.3881 191.322 80.0161 191.106C79.6441 190.878 79.1941 190.764 78.6661 190.764C78.1141 190.764 77.6281 190.884 77.2081 191.124C76.7881 191.364 76.4641 191.7 76.2361 192.132C76.0081 192.564 75.8941 193.074 75.8941 193.662C75.8941 194.262 76.0141 194.79 76.2541 195.246C76.4941 195.69 76.8361 196.038 77.2801 196.29C77.7241 196.53 78.2341 196.65 78.8101 196.65C79.2901 196.65 79.7281 196.566 80.1241 196.398C80.5321 196.23 80.8801 195.978 81.1681 195.642L82.2121 196.704C81.8041 197.184 81.3001 197.55 80.7001 197.802C80.1121 198.054 79.4821 198.18 78.8101 198.18ZM88.1545 198.18C87.3625 198.18 86.6485 197.988 86.0125 197.604C85.3765 197.208 84.8725 196.674 84.5005 196.002C84.1405 195.33 83.9605 194.574 83.9605 193.734C83.9605 192.894 84.1405 192.138 84.5005 191.466C84.8725 190.794 85.3765 190.26 86.0125 189.864C86.6485 189.468 87.3565 189.27 88.1365 189.27C88.7965 189.27 89.3785 189.408 89.8825 189.684C90.3985 189.948 90.8065 190.32 91.1065 190.8C91.4185 191.268 91.5925 191.814 91.6285 192.438V195.012C91.5925 195.624 91.4185 196.17 91.1065 196.65C90.8065 197.13 90.3985 197.508 89.8825 197.784C89.3785 198.048 88.8025 198.18 88.1545 198.18ZM88.4065 196.65C89.2105 196.65 89.8585 196.38 90.3505 195.84C90.8425 195.288 91.0885 194.586 91.0885 193.734C91.0885 193.146 90.9745 192.636 90.7465 192.204C90.5305 191.76 90.2185 191.418 89.8105 191.178C89.4145 190.926 88.9465 190.8 88.4065 190.8C87.8665 190.8 87.3865 190.926 86.9665 191.178C86.5585 191.43 86.2345 191.778 85.9945 192.222C85.7545 192.654 85.6345 193.152 85.6345 193.716C85.6345 194.292 85.7545 194.802 85.9945 195.246C86.2345 195.678 86.5585 196.02 86.9665 196.272C87.3865 196.524 87.8665 196.65 88.4065 196.65ZM90.9985 201.582V195.858L91.2865 193.77L90.9985 191.7V189.45H92.6185V201.582H90.9985ZM98.4506 198.18C97.7426 198.18 97.1066 198.024 96.5426 197.712C95.9906 197.388 95.5586 196.944 95.2466 196.38C94.9346 195.816 94.7786 195.162 94.7786 194.418V189.45H96.3986V194.346C96.3986 194.814 96.4766 195.222 96.6326 195.57C96.8006 195.906 97.0406 196.164 97.3526 196.344C97.6646 196.524 98.0306 196.614 98.4506 196.614C99.0866 196.614 99.5846 196.416 99.9446 196.02C100.305 195.612 100.485 195.054 100.485 194.346V189.45H102.105V194.418C102.105 195.162 101.949 195.816 101.637 196.38C101.325 196.944 100.893 197.388 100.341 197.712C99.8006 198.024 99.1706 198.18 98.4506 198.18ZM108.236 198.18C107.384 198.18 106.616 197.988 105.932 197.604C105.248 197.208 104.708 196.674 104.312 196.002C103.916 195.33 103.718 194.568 103.718 193.716C103.718 192.876 103.91 192.12 104.294 191.448C104.69 190.776 105.218 190.248 105.878 189.864C106.55 189.468 107.3 189.27 108.128 189.27C108.92 189.27 109.616 189.45 110.216 189.81C110.828 190.17 111.302 190.668 111.638 191.304C111.986 191.94 112.16 192.66 112.16 193.464C112.16 193.584 112.154 193.716 112.142 193.86C112.13 193.992 112.106 194.148 112.07 194.328H104.852V192.978H111.206L110.612 193.5C110.612 192.924 110.51 192.438 110.306 192.042C110.102 191.634 109.814 191.322 109.442 191.106C109.07 190.878 108.62 190.764 108.092 190.764C107.54 190.764 107.054 190.884 106.634 191.124C106.214 191.364 105.89 191.7 105.662 192.132C105.434 192.564 105.32 193.074 105.32 193.662C105.32 194.262 105.44 194.79 105.68 195.246C105.92 195.69 106.262 196.038 106.706 196.29C107.15 196.53 107.66 196.65 108.236 196.65C108.716 196.65 109.154 196.566 109.55 196.398C109.958 196.23 110.306 195.978 110.594 195.642L111.638 196.704C111.23 197.184 110.726 197.55 110.126 197.802C109.538 198.054 108.908 198.18 108.236 198.18ZM116.644 198.18C116.164 198.18 115.708 198.12 115.276 198C114.856 197.868 114.466 197.688 114.106 197.46C113.746 197.22 113.434 196.938 113.17 196.614L114.214 195.57C114.526 195.954 114.886 196.242 115.294 196.434C115.702 196.614 116.158 196.704 116.662 196.704C117.166 196.704 117.556 196.62 117.832 196.452C118.108 196.272 118.246 196.026 118.246 195.714C118.246 195.402 118.132 195.162 117.904 194.994C117.688 194.814 117.406 194.67 117.058 194.562C116.71 194.442 116.338 194.328 115.942 194.22C115.558 194.1 115.192 193.95 114.844 193.77C114.496 193.59 114.208 193.344 113.98 193.032C113.764 192.72 113.656 192.306 113.656 191.79C113.656 191.274 113.782 190.83 114.034 190.458C114.286 190.074 114.634 189.78 115.078 189.576C115.534 189.372 116.08 189.27 116.716 189.27C117.388 189.27 117.982 189.39 118.498 189.63C119.026 189.858 119.458 190.206 119.794 190.674L118.75 191.718C118.51 191.406 118.21 191.166 117.85 190.998C117.502 190.83 117.106 190.746 116.662 190.746C116.194 190.746 115.834 190.83 115.582 190.998C115.342 191.154 115.222 191.376 115.222 191.664C115.222 191.952 115.33 192.174 115.546 192.33C115.762 192.486 116.044 192.618 116.392 192.726C116.752 192.834 117.124 192.948 117.508 193.068C117.892 193.176 118.258 193.326 118.606 193.518C118.954 193.71 119.236 193.968 119.452 194.292C119.68 194.616 119.794 195.042 119.794 195.57C119.794 196.374 119.506 197.01 118.93 197.478C118.366 197.946 117.604 198.18 116.644 198.18ZM122.922 198V185.868H124.542V198H122.922ZM120.816 190.926V189.45H126.648V190.926H120.816ZM130.777 198.18C130.297 198.18 129.841 198.12 129.409 198C128.989 197.868 128.599 197.688 128.239 197.46C127.879 197.22 127.567 196.938 127.303 196.614L128.347 195.57C128.659 195.954 129.019 196.242 129.427 196.434C129.835 196.614 130.291 196.704 130.795 196.704C131.299 196.704 131.689 196.62 131.965 196.452C132.241 196.272 132.379 196.026 132.379 195.714C132.379 195.402 132.265 195.162 132.037 194.994C131.821 194.814 131.539 194.67 131.191 194.562C130.843 194.442 130.471 194.328 130.075 194.22C129.691 194.1 129.325 193.95 128.977 193.77C128.629 193.59 128.341 193.344 128.113 193.032C127.897 192.72 127.789 192.306 127.789 191.79C127.789 191.274 127.915 190.83 128.167 190.458C128.419 190.074 128.767 189.78 129.211 189.576C129.667 189.372 130.213 189.27 130.849 189.27C131.521 189.27 132.115 189.39 132.631 189.63C133.159 189.858 133.591 190.206 133.927 190.674L132.883 191.718C132.643 191.406 132.343 191.166 131.983 190.998C131.635 190.83 131.239 190.746 130.795 190.746C130.327 190.746 129.967 190.83 129.715 190.998C129.475 191.154 129.355 191.376 129.355 191.664C129.355 191.952 129.463 192.174 129.679 192.33C129.895 192.486 130.177 192.618 130.525 192.726C130.885 192.834 131.257 192.948 131.641 193.068C132.025 193.176 132.391 193.326 132.739 193.518C133.087 193.71 133.369 193.968 133.585 194.292C133.813 194.616 133.927 195.042 133.927 195.57C133.927 196.374 133.639 197.01 133.063 197.478C132.499 197.946 131.737 198.18 130.777 198.18ZM146.037 198.072L142.329 189.45H144.129L146.883 196.2H146.307L149.205 189.45H151.005L147.009 198.072H146.037ZM143.589 201.582L146.109 196.416L147.009 198.072L145.389 201.582H143.589ZM155.961 198.18C155.109 198.18 154.341 197.988 153.657 197.604C152.973 197.208 152.433 196.674 152.037 196.002C151.641 195.33 151.443 194.568 151.443 193.716C151.443 192.876 151.635 192.12 152.019 191.448C152.415 190.776 152.943 190.248 153.603 189.864C154.275 189.468 155.025 189.27 155.853 189.27C156.645 189.27 157.341 189.45 157.941 189.81C158.553 190.17 159.027 190.668 159.363 191.304C159.711 191.94 159.885 192.66 159.885 193.464C159.885 193.584 159.879 193.716 159.867 193.86C159.855 193.992 159.831 194.148 159.795 194.328H152.577V192.978H158.931L158.337 193.5C158.337 192.924 158.235 192.438 158.031 192.042C157.827 191.634 157.539 191.322 157.167 191.106C156.795 190.878 156.345 190.764 155.817 190.764C155.265 190.764 154.779 190.884 154.359 191.124C153.939 191.364 153.615 191.7 153.387 192.132C153.159 192.564 153.045 193.074 153.045 193.662C153.045 194.262 153.165 194.79 153.405 195.246C153.645 195.69 153.987 196.038 154.431 196.29C154.875 196.53 155.385 196.65 155.961 196.65C156.441 196.65 156.879 196.566 157.275 196.398C157.683 196.23 158.031 195.978 158.319 195.642L159.363 196.704C158.955 197.184 158.451 197.55 157.851 197.802C157.263 198.054 156.633 198.18 155.961 198.18ZM162.719 198V185.868H164.339V198H162.719ZM160.613 190.926V189.45H166.445V190.926H160.613Z" fill="black" />
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="32.2491" height="32.2491" fill="white" transform="translate(92.6338 78.5195)" />
                                </clipPath>
                                <clipPath id="clip1_0_1">
                                    <rect x="133.295" y="83.4272" width="21.032" height="21.032" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip2_0_1">
                                    <rect width="16" height="16" fill="white" transform="translate(140.295 85.9434)" />
                                </clipPath>
                                <clipPath id="clip3_0_1">
                                    <rect x="59.6836" y="70.1069" width="21.032" height="21.032" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip4_0_1">
                                    <rect x="102.448" y="149.328" width="21.032" height="21.032" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip5_0_1">
                                    <rect width="16" height="16" fill="white" transform="translate(109.448 151.844)" />
                                </clipPath>
                                <clipPath id="clip6_0_1">
                                    <rect x="5" y="93.2422" width="19.6299" height="19.6299" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip7_0_1">
                                    <rect width="14" height="14" fill="white" transform="translate(12 96.0571)" />
                                </clipPath>
                                <clipPath id="clip8_0_1">
                                    <rect x="182.37" y="50.4771" width="19.6299" height="19.6299" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip9_0_1">
                                    <rect width="14" height="14" fill="white" transform="translate(189.37 53.292)" />
                                </clipPath>
                                <clipPath id="clip10_0_1">
                                    <rect x="33.043" y="99.5518" width="21.032" height="21.032" rx="8" fill="white" />
                                </clipPath>
                                <clipPath id="clip11_0_1">
                                    <rect width="16" height="16" fill="white" transform="translate(40.043 102.068)" />
                                </clipPath>
                                <clipPath id="clip12_0_1">
                                    <rect x="98.2422" y="18.9287" width="21.032" height="21.032" rx="8" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                ) : (
                    <>

                        {requested.slice(0, 2).map((request: any, index: number) => {
                            return (
                                <div onClick={() => { setIsActive(true); setOpenedService({ opened: true, id: request.id }) }} key={index} className='p-4 cursor-pointer duration-300 transition-all hover:bg-[#ededed]  bg-[#FBFBFB] flex flex-col gap-[4px]'>
                                    <div className='flex flex-row gap-[10px] justify-between items-center'>
                                        <h1 className='tet-[16px] font-[700]'>{request.serviceName}</h1>
                                        <div className='flex flex-row gap-[4px] items-center'>
                                            <span className='text-[12px] font-[500] text-[black]'>07/12 2024</span>
                                            <span className='text-[12px] font-[500] text-[black ]'>10:00 AM</span>
                                        </div>
                                    </div>
                                    <span className='text-[13px] text-[#777777] font-[500]'>{request.location}</span>
                                </div>
                            )
                        })}
                    </>

                )}



            </div>
            <Dialog header="Requested Service" className='w-1/2' modal visible={isActive} onHide={() => setIsActive(false)} >
                {requested.filter((req) => req.id == openedService.id).map((request, index) => {
                    return (
                        <div className='w-full flex flex-col gap-[10px]'>
                            <div className='w-full flex flex-row justify-between gap-[10px]'>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center'>
                                        <span className='text-[20px] font-[700] text-white'>NG</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[18px] text-black font-[700]'>{request.name}</span>
                                        <span className='text-[12px] font-[700]'>{request.date}</span>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='flex flex-col'>
                                        <span>Service</span>
                                        <p className='text-primary text-[12px] font-[700]'>{request.serviceName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' grid grid-cols-3 gap-[10px] py-4'>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <CiLocationOn size={30} />
                                    <div className='flex flex-col'>
                                        <span>{request.location}</span>
                                        <a href="" className='text-primary text-[12px]  font-[700]'>View location</a>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <div className='flex flex-col'>
                                        <span>Property Images</span>
                                        <a href="" className='text-primary text-[12px]  font-[700]'>View Images</a>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[10px] items-center'>
                                    <CiDollar size={30} />
                                    <div className='flex flex-col'>
                                        <span className='text-[16px] font-[700] text-black'>{request.price}$</span>
                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='text-[16px] font-[500] text-black'>Property Details</h1>
                                <div className='grid grid-cols-4 gap-[10px]'>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>Property Type</span>
                                        <span className='text-black text-[12px] font-[700]'>{`Appartment`}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>N<sup>0</sup> of Rooms</span>
                                        <span className='text-black text-[12px] font-[700]'>{12}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>N<sup>0</sup> of Bathrooms</span>
                                        <span className='text-black text-[12px] font-[700]'>{2}</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-[12px] font-[500] text-black/60'>Square Footage</span>
                                        <span className='text-black text-[12px] font-[700]'>{100} m<sup>2</sup></span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col gap-[10px] w-full'>
                                <h1 className='text-[16px] font-[600] text-black'>Reply With Comment And Price</h1>
                                <form action="" method="post" className='flex flex-col gap-[4px]'>
                                    <textarea rows={3} name="" id="" placeholder='Add comment' className='border rounded-[12px] p-2'></textarea>
                                    <div className='flex flex-row items-center mx-auto gap-[10px] py-2'>
                                        <button className='p-3 px-10 bg-red-500 text-white rounded-[10px]'>Decline</button>
                                        <button className='p-3 px-10 bg-primary text-white rounded-[10px]'>Accept</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                })}

            </Dialog>

        </div>
    )
}

export default ServiceRequested