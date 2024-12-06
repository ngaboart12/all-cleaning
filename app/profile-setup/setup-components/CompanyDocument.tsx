import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useCompanyStore } from "@/app/hooks/store";
const CompanyDocuments = () => {
  const cName = useCompanyStore((state) => state.company_name);
  console.log(cName);
  return (
    <div className="w-full md:w-1/3 flex flex-col gap-[20px] mx-auto">
      <div className="flex flex-col gap-[5px]">
        <span className="text-[24px] font-[700] text-primary">
          Let's get Started
        </span>
        <span className="text-[14px] text-[#4e4e4e]">
          Add company documents
        </span>
      </div>
      <form action="" className="flex flex-col gap-[10px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-[10px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Company Bio</span>
            <div className="w-full rounded-[12px] bg-[#F9F9F9]">
              <textarea
                rows={2}
                name="companyBio"
                className="w-full bg-transparent h-full px-4 p-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Type your company bio"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Company Media</span>

            <label
              htmlFor="companyFile"
              className={`cursor-pointer w-full p-4 rounded-[40px] flex flex-row gap-[10px] items-center border-[2px] border-dashed border-[#E7E7E7]`}
            >
              {/* Your SVG code here */}
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20.5" r="20" fill="#F5EEDC" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7236 17.4056C17.0602 17.4056 17.3334 17.6788 17.3334 18.0154C17.3334 18.352 17.0602 18.6251 16.7236 18.6251H15.9651C14.6488 18.6251 13.5789 19.6951 13.5789 21.0105V24.9739C13.5789 26.2902 14.6488 27.3601 15.9651 27.3601H25.0138C26.3293 27.3601 27.4 26.2902 27.4 24.9739V21.0032C27.4 19.6918 26.3334 18.6251 25.0228 18.6251H24.2561C23.9195 18.6251 23.6464 18.352 23.6464 18.0154C23.6464 17.6788 23.9195 17.4056 24.2561 17.4056H25.0228C27.0057 17.4056 28.6195 19.0194 28.6195 21.0032V24.9739C28.6195 26.9625 27.0017 28.5796 25.0138 28.5796H15.9651C13.9773 28.5796 12.3594 26.9625 12.3594 24.9739V21.0105C12.3594 19.0227 13.9773 17.4056 15.9651 17.4056H16.7236ZM20.9208 12.0622L23.2916 14.4427C23.529 14.6817 23.5282 15.0671 23.2899 15.3045C23.0509 15.5419 22.6656 15.5419 22.4282 15.3029L21.0984 13.9685L21.0989 22.8909H19.8794L19.8789 13.9685L18.5509 15.3029C18.4322 15.4232 18.2753 15.4825 18.1192 15.4825C17.9639 15.4825 17.8078 15.4232 17.6891 15.3045C17.4509 15.0671 17.4493 14.6817 17.6875 14.4427L20.0574 12.0622C20.2859 11.8321 20.6924 11.8321 20.9208 12.0622Z"
                  fill="#7E7E7E"
                />
              </svg>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-[4px]">
                  <span className="text-[14px] text-primary cursor-pointer">
                    Click to upload
                  </span>
                  <span className="text-[14px] text-[#828282] cursor-pointer">
                    Or Drag and Drop
                  </span>
                </div>
                <div className="flex flex-row items-center gap-[4px]">
                  <span className="text-[12px] text-[#828282] cursor-pointer">
                    Maximum file size
                  </span>
                  <span className="text-[12px] text-black cursor-pointer">
                    3mb
                  </span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[14px] text-black">Attach files</span>

            <label
              htmlFor="companyDocument"
              className={`cursor-pointer w-full p-4 rounded-[40px] flex flex-row gap-[10px] items-center border-[2px] border-dashed border-[#E7E7E7]`}
            >
              {/* Your SVG code here */}
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20.5" r="20" fill="#F5EEDC" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7236 17.4056C17.0602 17.4056 17.3334 17.6788 17.3334 18.0154C17.3334 18.352 17.0602 18.6251 16.7236 18.6251H15.9651C14.6488 18.6251 13.5789 19.6951 13.5789 21.0105V24.9739C13.5789 26.2902 14.6488 27.3601 15.9651 27.3601H25.0138C26.3293 27.3601 27.4 26.2902 27.4 24.9739V21.0032C27.4 19.6918 26.3334 18.6251 25.0228 18.6251H24.2561C23.9195 18.6251 23.6464 18.352 23.6464 18.0154C23.6464 17.6788 23.9195 17.4056 24.2561 17.4056H25.0228C27.0057 17.4056 28.6195 19.0194 28.6195 21.0032V24.9739C28.6195 26.9625 27.0017 28.5796 25.0138 28.5796H15.9651C13.9773 28.5796 12.3594 26.9625 12.3594 24.9739V21.0105C12.3594 19.0227 13.9773 17.4056 15.9651 17.4056H16.7236ZM20.9208 12.0622L23.2916 14.4427C23.529 14.6817 23.5282 15.0671 23.2899 15.3045C23.0509 15.5419 22.6656 15.5419 22.4282 15.3029L21.0984 13.9685L21.0989 22.8909H19.8794L19.8789 13.9685L18.5509 15.3029C18.4322 15.4232 18.2753 15.4825 18.1192 15.4825C17.9639 15.4825 17.8078 15.4232 17.6891 15.3045C17.4509 15.0671 17.4493 14.6817 17.6875 14.4427L20.0574 12.0622C20.2859 11.8321 20.6924 11.8321 20.9208 12.0622Z"
                  fill="#7E7E7E"
                />
              </svg>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-[4px]">
                  <span className="text-[14px] text-primary cursor-pointer">
                    Click to upload
                  </span>
                  <span className="text-[14px] text-[#828282] cursor-pointer">
                    Or Drag and Drop
                  </span>
                </div>
                <div className="flex flex-row items-center gap-[4px]">
                  <span className="text-[12px] text-[#828282] cursor-pointer">
                    Maximum file size
                  </span>
                  <span className="text-[12px] text-black cursor-pointer">
                    3mb
                  </span>
                </div>
              </div>
            </label>
          </div>

          <div className="w-full flex flex-row items-center justify-between px-4">
            <input
              type="file"
              id="companyFile"
              className="hidden"
              accept=".pdf,.docx,.png,.jpg,.jpeg"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between px-4">
            <input
              type="file"
              id="companyDocument"
              className="hidden"
              accept=".pdf,.docx,.png,.jpg,.jpeg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyDocuments;
