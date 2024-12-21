import React, { useState } from "react";
const ChooseType = ({
  onSelectType,
}: {
  onSelectType: (type: { registerAs: "company" | "client" | "freelancer" }) => void;
}) => {
  const [accessType, setAccessType] = useState<{
    customer: boolean;
    provider: boolean;
  }>({ customer: false, provider: false });

  return (
    <div className="flex flex-col  w-full lg:w-1/2 mx-auto">
      <h1 className="text-[24px] font-[800] text-primary text-center">
        Choose Your Role to Get Started
      </h1>

      <div className="flex py-10  rounded-[12px] flex-col mx-auto sm:flex-row gap-[25px]">
        <div
          onClick={() => {
            setAccessType({ customer: true, provider: false });
            onSelectType({ registerAs: "client" });
          }}
          className={`p-6 border border-primary rounded-[12px] cursor-pointer duration-200 transition-all  hover:scale-105 w-full sm:w-1/2  flex flex-col gap-[10px] ${
            accessType.customer
              ? "border-secondary scale-105"
              : "border-primary scale-100"
          }`}
        >
          <h1
            className={`font-[500] uppercase  ${
              accessType.customer ? "text-secondary" : "text-primary"
            } text-[14px]`}
          >
            I Need Cleaning Services
          </h1>
          <p className="text-[13px] text-[#3f3f3f]">
            Looking for professional cleaning services? Select this option to
            book trusted providers who will make your space spotless.
            Convenient, reliable, and stress-free!
          </p>
        </div>
        <div
          onClick={() => {
            setAccessType({ customer: false, provider: true });
            onSelectType({ registerAs: "company" });
          }}
          className={`p-6 border rounded-[12px] cursor-pointer duration-200 transition-all  hover:scale-105 w-full sm:w-1/2  flex flex-col gap-[10px] ${
            accessType.provider
              ? "border-secondary scale-105"
              : "border-primary scale-100"
          }`}
        >
          <h1
            className={`font-[500] uppercase ${
              accessType.provider ? "text-secondary" : "text-primary"
            } text-[14px]`}
          >
            I Provide Cleaning Services
          </h1>
          <p className="text-[13px] text-[#3f3f3f]">
            Are you a cleaning professional looking for new clients? Select this
            option to connect with customers and grow your business with ease!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
