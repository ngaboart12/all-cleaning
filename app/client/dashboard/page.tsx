"use client";
import { fetchBaseServiceQuery } from "@/app/hooks/services.hook";
import BookedService from "@/components/reusable/BookedService";
import Payments from "@/components/reusable/tables/Payments";
import Image from "next/image";
import React, { useState } from "react";

const Dashboard = () => {
  const [currentOpen, setCurrentOpen] = useState<number>(1);
  const {
    data: baseService,
    isLoading: baseLoading,
    isError: basError,
  } = fetchBaseServiceQuery();
  const currentDate = new Date();
  console.log(baseService);
  return (
    <div className="flex flex-col gap-[20px] py-24 px-[10px] md:px-[50px] lg:px-[100px] bg-[#FAFAFA] min-h-screen">
      <div className=" flex flex-col lg:flex-row gap-[20px]  w-full">
        <div className="w-full lg:w-[70%] flex flex-col gap-[10px]">
          <div className="w-full p-6 flex flex-col gap-[4px] bg-[#F6F6F6] rounded-[12px]">
            <h1 className="text-[24px] font-[700] text-primary">
              Welcome back!
            </h1>
            <div className="flex flex-row gap-[10px]">
              <span className="text-[14px] font-[400] text-[#868686]">
                {currentDate.toLocaleDateString()}
              </span>
            </div>
            <div className="w-full flex flex-row rounded-[12px] p-2 fle  gap-[10px] ">
              <div className="w-full p-2 bg-[#FFFFFF] rounded-[12px] flex flex-row items-center gap-[10px]">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L22 22"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full h-full bg-transparent outline-none text-[#9D9D9D] placeholder:text-[#9D9D9D] text-[12px]"
                  placeholder="Search provider"
                />
              </div>
              <div className=" px-4 items-center p-2 bg-white rounded-[12px] flex flex-row  gap-[10px]">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9163 9.16667C12.9163 10.7775 11.6105 12.0833 9.99967 12.0833C8.38884 12.0833 7.08301 10.7775 7.08301 9.16667C7.08301 7.55583 8.38884 6.25 9.99967 6.25C11.6105 6.25 12.9163 7.55583 12.9163 9.16667Z"
                      stroke="black"
                      stroke-width="1.5"
                    />
                    <path
                      d="M10 1.66666C14.0588 1.66666 17.5 5.02747 17.5 9.10482C17.5 13.2471 14.0027 16.1539 10.7725 18.1306C10.5371 18.2635 10.2708 18.3333 10 18.3333C9.72917 18.3333 9.46292 18.2635 9.2275 18.1306C6.00325 16.1347 2.5 13.2614 2.5 9.10482C2.5 5.02747 5.9412 1.66666 10 1.66666Z"
                      stroke="black"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <span className="text-[14px] font-[400] text-[#000000]">
                  Location
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-[14px] text-black font-[500]">
                Recommended Services
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px]">
                {!baseLoading ? (
                  <>
                    {baseService?.map((base: any, index: number) => {
                      return (
                        <div className="p-3 cursor-pointer flex flex-row gap-[3px] justify-center items-center bg-[white] rounded-[12px]">
                          {/* <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1085_738)">
                                                            <path d="M18.2307 3.47363C18.2307 3.64808 18.372 3.78941 18.5464 3.78941C18.7209 3.78941 18.8622 3.64804 18.8622 3.47363C18.8622 2.25476 17.8705 1.26312 16.6517 1.26312C16.4773 1.26312 16.3359 1.40445 16.3359 1.5789C16.3359 1.75336 16.4773 1.89469 16.6517 1.89469C17.5223 1.89469 18.2307 2.60301 18.2307 3.47363Z" fill="#13829F" />
                                                            <path d="M14.3349 8.21051C14.5094 8.21051 14.6507 8.06918 14.6507 7.89473C14.6507 7.72028 14.5094 7.57895 14.3349 7.57895C13.5804 7.57895 12.9665 6.96508 12.9665 6.21051C12.9665 5.45594 13.5804 4.84207 14.3349 4.84207C15.0895 4.84207 15.7034 5.45594 15.7034 6.21051C15.7034 6.60289 15.5345 6.97703 15.24 7.23692C15.1093 7.35227 15.0968 7.55188 15.2122 7.68266C15.3277 7.81344 15.5272 7.82582 15.658 7.71043C16.0882 7.33074 16.335 6.78403 16.335 6.21051C16.335 5.10774 15.4377 4.21051 14.335 4.21051C13.2322 4.21051 12.335 5.10774 12.335 6.21051C12.335 7.31328 13.2321 8.21051 14.3349 8.21051Z" fill="#13829F" />
                                                            <path d="M5.49344 19.3684H2.125C1.37047 19.3684 0.756562 18.7546 0.756562 18V16.2105H4.65129C4.8257 16.2105 4.96707 16.0692 4.96707 15.8947C4.96707 15.7203 4.82566 15.5789 4.65129 15.5789H0.756562V11.2632C0.756562 10.7639 0.880742 10.2671 1.11566 9.8266L3.99867 4.42105H5.96711C6.14152 4.42105 6.28289 4.27973 6.28289 4.10527C6.28289 3.93082 6.14148 3.78949 5.96711 3.78949H4.125V2C4.125 1.24543 4.73891 0.631562 5.49344 0.631562H11.4934V1.32559L8.77332 1.93008C8.14367 2.07 7.70398 2.61816 7.70398 3.26313V3.78945H7.16715C6.99273 3.78945 6.85137 3.93078 6.85137 4.10523C6.85137 4.27969 6.99277 4.42102 7.16715 4.42102H7.83031L8.63941 5.93801C8.69625 6.04457 8.80543 6.10527 8.91832 6.10527C8.96848 6.10527 9.01934 6.09328 9.06664 6.06801C9.22055 5.98594 9.27875 5.79465 9.19668 5.64082L8.33559 4.02625V3.26316C8.33559 2.91652 8.57191 2.62188 8.91035 2.5466L11.8778 1.88719C12.0223 1.85512 12.125 1.72699 12.125 1.57895V0.315781C12.125 0.141328 11.9837 0 11.8093 0H5.49344C4.39066 0 3.49344 0.897227 3.49344 2V4.02633L0.558437 9.52938C0.274883 10.0611 0.125 10.6606 0.125 11.2632V18C0.125 19.1028 1.02223 20 2.125 20H5.49344C5.66785 20 5.80922 19.8587 5.80922 19.6842C5.80922 19.5098 5.66781 19.3684 5.49344 19.3684Z" fill="#13829F" />
                                                            <path d="M13.4935 3.78949C13.668 3.78949 13.8093 3.64813 13.8093 3.47371C13.8093 1.90656 15.0843 0.631602 16.6514 0.631602C18.2186 0.631602 19.4935 1.90656 19.4935 3.47371C19.4935 4.8202 18.5374 5.99156 17.2202 6.25898C17.0492 6.29363 16.9388 6.46031 16.9736 6.63129C17.0039 6.78102 17.1356 6.8843 17.2827 6.8843C17.3035 6.8843 17.3247 6.88223 17.3459 6.87793C18.9562 6.55098 20.1251 5.11934 20.1251 3.47367C20.1251 1.55832 18.5668 0 16.6514 0C14.7361 0 13.1777 1.55832 13.1777 3.47367C13.1777 3.64813 13.3191 3.78949 13.4935 3.78949Z" fill="#13829F" />
                                                            <path d="M17.2821 11.3684C16.7597 11.3684 16.3347 10.9434 16.3347 10.421C16.3347 10.2466 16.1934 10.1052 16.0189 10.1052C15.8445 10.1052 15.7031 10.2466 15.7031 10.421C15.7031 11.2917 16.4114 12 17.2821 12C18.1527 12 18.861 11.2917 18.861 10.421C18.861 9.55035 18.1527 8.84207 17.2821 8.84207C16.893 8.84207 16.5191 8.98488 16.2293 9.24418C16.0994 9.36051 16.0883 9.56016 16.2046 9.69012C16.3209 9.82004 16.5205 9.8311 16.6505 9.71485C16.8243 9.5593 17.0486 9.47367 17.282 9.47367C17.8044 9.47367 18.2294 9.89867 18.2294 10.4211C18.2295 10.9434 17.8044 11.3684 17.2821 11.3684Z" fill="#13829F" />
                                                            <path d="M17.599 17.1579C17.599 16.5195 17.0795 16 16.4411 16C15.8027 16 15.2832 16.5195 15.2832 17.1579C15.2832 17.7963 15.8027 18.3158 16.4411 18.3158C17.0795 18.3158 17.599 17.7963 17.599 17.1579ZM15.9148 17.1579C15.9148 16.8677 16.1509 16.6316 16.4411 16.6316C16.7314 16.6316 16.9675 16.8677 16.9675 17.1579C16.9675 17.4481 16.7314 17.6842 16.4411 17.6842C16.1509 17.6842 15.9148 17.4481 15.9148 17.1579Z" fill="#13829F" />
                                                            <path d="M11.4941 17.1578C11.4941 17.7963 12.0136 18.3157 12.652 18.3157C13.2905 18.3157 13.8099 17.7963 13.8099 17.1578C13.8099 16.5194 13.2905 16 12.652 16C12.0136 16 11.4941 16.5194 11.4941 17.1578ZM13.1783 17.1578C13.1783 17.4481 12.9422 17.6842 12.652 17.6842C12.3618 17.6842 12.1257 17.4481 12.1257 17.1578C12.1257 16.8676 12.3618 16.6315 12.652 16.6315C12.9422 16.6315 13.1783 16.8676 13.1783 17.1578Z" fill="#13829F" />
                                                            <path d="M8.125 15.4737C8.125 16.1121 8.64441 16.6316 9.28289 16.6316C9.92137 16.6316 10.4408 16.1121 10.4408 15.4737C10.4408 14.8352 9.92137 14.3158 9.28289 14.3158C8.64441 14.3158 8.125 14.8352 8.125 15.4737ZM9.80922 15.4737C9.80922 15.7639 9.57313 16 9.28289 16C8.99266 16 8.75656 15.7639 8.75656 15.4737C8.75656 15.1835 8.99266 14.9474 9.28289 14.9474C9.57313 14.9474 9.80922 15.1835 9.80922 15.4737Z" fill="#13829F" />
                                                            <path d="M18.9671 13.4737C18.9553 13.4737 18.9437 13.4742 18.932 13.4746C18.5819 13.202 18.1505 13.0526 17.7039 13.0526H14.807C14.5944 12.7956 14.2732 12.6316 13.9145 12.6316C13.5557 12.6316 13.2345 12.7956 13.022 13.0526H8.01969C6.91691 13.0526 6.01969 13.9498 6.01969 15.0526V17.1075C5.76269 17.32 5.59863 17.6412 5.59863 18C5.59863 18.4902 5.90508 18.91 6.33641 19.0786C6.70269 19.6489 7.33891 20 8.01969 20H14.7565C14.931 20 15.0723 19.8587 15.0723 19.6842C15.0723 19.5098 14.9309 19.3684 14.7565 19.3684H8.01969C7.71094 19.3684 7.41555 19.2627 7.17828 19.078C7.60871 18.909 7.91441 18.4896 7.91441 18C7.91441 17.3616 7.395 16.8421 6.75652 16.8421C6.72102 16.8421 6.68594 16.844 6.65125 16.8471V15.0527C6.65125 14.2981 7.26516 13.6842 8.01969 13.6842H12.7615C12.7584 13.7189 12.7565 13.754 12.7565 13.7895C12.7565 14.4279 13.276 14.9474 13.9144 14.9474C14.5529 14.9474 15.0723 14.4279 15.0723 13.7895C15.0723 13.754 15.0705 13.7189 15.0673 13.6842H17.7039C17.8717 13.6842 18.0364 13.715 18.1904 13.7736C17.9564 13.9855 17.8092 14.2917 17.8092 14.6316C17.8092 15.27 18.3286 15.7895 18.9671 15.7895C19.0026 15.7895 19.0377 15.7876 19.0723 15.7845V18C19.0723 18.7546 18.4585 19.3684 17.7039 19.3684H16.0197C15.8452 19.3684 15.7039 19.5098 15.7039 19.6842C15.7039 19.8587 15.8452 20 16.0197 20H17.7039C18.8067 20 19.7039 19.1028 19.7039 18V15.5241C19.9609 15.3116 20.125 14.9904 20.125 14.6316C20.125 13.9931 19.6055 13.4737 18.9671 13.4737ZM6.75652 17.4737C7.04676 17.4737 7.28285 17.7098 7.28285 18C7.28285 18.2902 7.04676 18.5263 6.75652 18.5263C6.46629 18.5263 6.2302 18.2902 6.2302 18C6.2302 17.7098 6.46629 17.4737 6.75652 17.4737ZM13.9144 14.3158C13.6242 14.3158 13.3881 14.0797 13.3881 13.7895C13.3881 13.4992 13.6242 13.2631 13.9144 13.2631C14.2046 13.2631 14.4407 13.4992 14.4407 13.7895C14.4407 14.0797 14.2046 14.3158 13.9144 14.3158ZM18.9671 15.1579C18.6768 15.1579 18.4407 14.9218 18.4407 14.6316C18.4407 14.3413 18.6768 14.1052 18.9671 14.1052C19.2573 14.1052 19.4934 14.3413 19.4934 14.6316C19.4934 14.9218 19.2573 15.1579 18.9671 15.1579Z" fill="#13829F" />
                                                            <path d="M11.3884 12.4632C11.5628 12.4632 11.7041 12.3218 11.7041 12.1474V11.2632C11.7041 10.6606 11.5543 10.0611 11.2707 9.52943L9.75676 6.69087C9.67465 6.53696 9.48332 6.47884 9.32953 6.56083C9.17563 6.6429 9.11742 6.83419 9.19953 6.98802L10.7135 9.82657C10.8315 10.0479 10.9215 10.2834 10.982 10.5263H2.54625C2.37184 10.5263 2.23047 10.6676 2.23047 10.842C2.23047 11.0165 2.37187 11.1578 2.54625 11.1578H11.0706C11.0718 11.1929 11.0726 11.228 11.0726 11.2631V12.1473C11.0726 12.3218 11.2139 12.4632 11.3884 12.4632Z" fill="#13829F" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1085_738">
                                                                <rect width="20" height="20" fill="white" transform="translate(0.125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg> */}
                          <span className="text-[12px] text-black ">
                            {base.title}{" "}
                          </span>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full pb-4  bg-white rounded-[12px]">
            <div className="flex flex-row gap-[4px] sm:gap-[20px] items-center">
              <div
                onClick={() => setCurrentOpen(1)}
                className={` cursor-pointer flex flex-row items-center  p-2 sm:p-4 ${
                  currentOpen == 1 ? " border-b-[2px] border-primary" : ""
                } gap-[10px]`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10638 1.66667C5.38872 1.66667 4.02988 1.66667 3.08622 2.33154C2.81584 2.52203 2.57581 2.74794 2.37341 3.00241C1.66699 3.89056 1.66699 5.16947 1.66699 7.72728V9.8485C1.66699 12.3178 1.66699 13.5524 2.05778 14.5385C2.686 16.1238 4.01461 17.3743 5.69896 17.9655C6.74668 18.3333 8.0585 18.3333 10.6822 18.3333C12.1814 18.3333 12.931 18.3333 13.5297 18.1232C14.4922 17.7853 15.2513 17.0708 15.6103 16.1649C15.8337 15.6014 15.8337 14.8959 15.8337 13.4848V12.9167"
                    stroke={` ${currentOpen == 1 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 6.24999C12.5 6.24999 12.9167 6.24999 13.3333 7.08333C13.3333 7.08333 14.6568 4.99999 15.8333 4.58333"
                    stroke={` ${currentOpen == 1 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3333 5.83334C18.3333 8.13452 16.4678 10 14.1667 10C11.8655 10 10 8.13452 10 5.83334C10 3.53216 11.8655 1.66667 14.1667 1.66667C16.4678 1.66667 18.3333 3.53216 18.3333 5.83334Z"
                    stroke={` ${currentOpen == 1 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.66699 10C1.66699 11.5341 2.91064 12.7777 4.44477 12.7777C4.99959 12.7777 5.65369 12.6806 6.19313 12.8251C6.67243 12.9535 7.04679 13.3279 7.17523 13.8072C7.31977 14.3467 7.22255 15.0008 7.22255 15.5556C7.22255 17.0897 8.46624 18.3333 10.0003 18.3333"
                    stroke={` ${currentOpen == 1 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  className={`text-[12px] sm:text-[14px] font-[600] ${
                    currentOpen == 1 ? "text-primary" : "text-[#8D8D8D]"
                  }`}
                >
                  Ongoing Services
                </span>
              </div>
              <div
                onClick={() => setCurrentOpen(2)}
                className={` cursor-pointer flex flex-row items-center  p-2 sm:p-4 ${
                  currentOpen == 2 ? " border-b-[2px] border-primary" : ""
                } gap-[10px]`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 18.3333V15M6.66699 16.6667V15M13.3337 16.6667V15"
                    stroke={` ${currentOpen == 2 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.8337 14.5833C16.4791 14.4451 16.966 14.2143 17.3573 13.8291C18.3337 12.8682 18.3337 11.3216 18.3337 8.22836C18.3337 5.13515 18.3337 3.58855 17.3573 2.62761C16.3811 1.66667 14.8097 1.66667 11.667 1.66667H8.33366C5.19096 1.66667 3.61962 1.66667 2.6433 2.62761C1.66699 3.58855 1.66699 5.13515 1.66699 8.22836C1.66699 11.3216 1.66699 12.8682 2.6433 13.8291C3.03464 14.2143 3.52158 14.4451 4.16699 14.5833"
                    stroke={` ${currentOpen == 2 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.4167 8.33333H15.4092"
                    stroke={` ${currentOpen == 2 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.59147 8.33333H4.58398"
                    stroke={` ${currentOpen == 2 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0837 8.33333C12.0837 7.18274 11.1509 6.25 10.0003 6.25C8.84974 6.25 7.91699 7.18274 7.91699 8.33333C7.91699 9.48392 8.84974 10.4167 10.0003 10.4167C11.1509 10.4167 12.0837 9.48392 12.0837 8.33333Z"
                    stroke={` ${currentOpen == 2 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                  />
                </svg>

                <span
                  className={`text-[12px] sm:text-[14px] font-[600] ${
                    currentOpen == 2 ? "text-primary" : "text-[#8D8D8D]"
                  }`}
                >
                  Payments
                </span>
              </div>
              <div
                onClick={() => setCurrentOpen(3)}
                className={` cursor-pointer flex flex-row items-center  p-2 sm:p-4 ${
                  currentOpen == 3 ? " border-b-[2px] border-primary" : ""
                } gap-[10px]`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5137 16.6667H15.9222C16.8804 16.6667 17.6426 16.2301 18.3269 15.6197C20.0653 14.0688 15.9787 12.5 14.5837 12.5M12.917 4.22398C13.1062 4.18645 13.3027 4.16667 13.5043 4.16667C15.0209 4.16667 16.2503 5.28596 16.2503 6.66667C16.2503 8.04738 15.0209 9.16667 13.5043 9.16667C13.3027 9.16667 13.1062 9.14692 12.917 9.10934"
                    stroke={` ${currentOpen == 3 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3.73443 13.426C2.75195 13.9525 0.175949 15.0276 1.7449 16.3728C2.51133 17.03 3.36493 17.5 4.4381 17.5H10.5619C11.6351 17.5 12.4887 17.03 13.2551 16.3728C14.8241 15.0276 12.2481 13.9525 11.2656 13.426C8.96167 12.1913 6.03833 12.1913 3.73443 13.426Z"
                    stroke={` ${currentOpen == 3 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.8337 6.25001C10.8337 8.09096 9.34124 9.58334 7.50033 9.58334C5.65938 9.58334 4.16699 8.09096 4.16699 6.25001C4.16699 4.40905 5.65938 2.91667 7.50033 2.91667C9.34124 2.91667 10.8337 4.40905 10.8337 6.25001Z"
                    stroke={` ${currentOpen == 3 ? "#13829F" : "#8D8D8D"}`}
                    stroke-width="1.5"
                  />
                </svg>

                <span
                  className={`text-[12px] sm:text-[14px] font-[600] ${
                    currentOpen == 3 ? "text-primary" : "text-[#8D8D8D]"
                  }`}
                >
                  Providers
                </span>
              </div>
            </div>
            <div className="p-4">
              {currentOpen == 1 && <h1>Ongoing services</h1>}
              {currentOpen == 2 && <Payments />}
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-[30%] flex-col md:flex-row lg:flex-col  gap-[10px] ">
          <div className=" flex flex-col gap-[10px] w-full">
            <BookedService />
          </div>
          <div className="flex flex-row gap-[10px] w-full p-4 bg-white rounded-[12px]">
            <div className="w-1/2 h-full bg-[#F2F2F2] p-4"></div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-[700] text-[#13829F]">
                Support
              </span>
              <span className="text-[14px] text-[#696969]">
                Make your next service booking easier by registering your
                properties{" "}
              </span>
              <a
                href="/client/dashboard/profile"
                className="w-full px-4 py-2 bg-primary text-white text-[14px] text-center "
              >
                Register Now
              </a>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-row justify-between  items-center">
              <div className="flex flex-row items-center gap-[10px]">
                <h1 className="font-[600] text-[14px]">Help and support</h1>
              </div>
            </div>
            <a
              href="#"
              className=" p-4 duration-200 transition-all hover:bg-[#f8f8f8] bg-white rounded-[12px] flex flex-row gap-[10px] items-center"
            >
              <div className="w-[60px]">
                <Image
                  src={`/image/Wallet.svg`}
                  width={1000}
                  height={1000}
                  alt="wallet svg"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h1 className="text-[14px] text-[#13829F] font-[600]">
                  PAYMENTS
                </h1>
                <span className="text-[12px] font-[600] text-[#000000]">
                  Anything you want to know a about payment
                </span>
              </div>
            </a>
            <a
              href="#"
              className=" p-4 duration-200 transition-all hover:bg-[#f8f8f8] bg-white rounded-[12px] flex flex-row gap-[10px] items-center"
            >
              <div className="w-[60px]">
                <Image
                  src={`/image/Wallet.svg`}
                  width={1000}
                  height={1000}
                  alt="wallet svg"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h1 className="text-[14px] text-[#13829F] font-[600]">
                  PAYMENTS
                </h1>
                <span className="text-[12px] font-[600] text-[#000000]">
                  Anything you want to know a about payment
                </span>
              </div>
            </a>
            <div className=" bg-white  p-4 rounded-[12px] flex flex-row gap-[10px] justify-between items-center">
              <a
                href="#"
                className="text-[13px] text-[#606060] hover:text-[#000000]"
              >
                About
              </a>
              <a
                href="#"
                className="text-[13px] text-[#606060] hover:text-[#000000]"
              >
                Help
              </a>
              <a
                href="#"
                className="text-[13px] text-[#606060] hover:text-[#000000]"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[13px] text-[#606060] hover:text-[#000000]"
              >
                Language
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
