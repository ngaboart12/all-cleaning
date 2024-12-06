import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ClientInfo = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-[40px] mx-auto">
      <div className="flex flex-col gap-[5px]">
        <span className="text-[24px] font-[700] text-primary">
          Let's get Started
        </span>
        <span className="text-[14px] text-[#4e4e4e]">
          Complete Your Profile And get Our Exceptional Services
        </span>
      </div>
      <form action="" className="flex flex-col gap-[10px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Employer Name</span>
            <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
              <input
                type="text"
                name="companyName"
                className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Type your employer name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Employer Email</span>
            <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
              <input
                type="email"
                name="emaployerEmail"
                className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Type your employer email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Phone Number</span>
            <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
              <input
                type=""
                name="phoneNumber"
                className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Type your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">
              Select business field
            </span>
            <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
              <select
                name="emaployerAddress"
                className="w-full bg-transparent text-[black] h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
              >
                <option value="">Cleaning Business</option>
                <option value="">Cleaning Business</option>
              </select>
            </div>
          </div>
          <div className="p-4 rounded-[12px] gap-[10px] cursor-pointer hover:opacity-80 duration-300 transition-all flex items-center justify-center bg-primary">
            <FaLocationDot size={20} color="white" />
            <span className="text-center text-white">Pick your location</span>
          </div>
          <div className="p-4 rounded-[12px] gap-[10px] cursor-pointer hover:opacity-80 duration-300 transition-all flex items-center justify-center border border-primary">
            <span className="text-center text-[12px] text-black">
              Your location will be displayed here
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientInfo;
