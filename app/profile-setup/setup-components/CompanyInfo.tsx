import CompanyForm from "@/components/provider/CompanyForm";
import { useFormik } from "formik";
import React from "react";

const CompanyInfo = ({ formik }: { formik: any }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-[40px] mx-auto">
      <div className="flex flex-col gap-[5px]">
        <span className="text-[24px] font-[700] text-primary">
          Let's get Started
        </span>
        <span className="text-[14px] text-[#4e4e4e]">
          Add Your Company Bio and Media
        </span>
      </div>
      <CompanyForm formik={formik} />
    </div>
  );
};

export default CompanyInfo;
