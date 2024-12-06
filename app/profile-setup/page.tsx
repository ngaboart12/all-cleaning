"use client";
import React, { useState } from "react";
import ChooseType from "./setup-components/ChooseType";
import CompanyInfo from "./setup-components/CompanyInfo";
import CompanyDocument from "./setup-components/CompanyDocument";
import ClientInfo from "./setup-components/ClientInfo";
// import { ToastContainer } from "react-toastify";
import { Toaster, toast } from "sonner";
import Button from "@/components/ui/button/Button";
import { useFormik } from "formik";
import { companyProfileValidationSchema } from "@/lib/validation/formikSchema";
import { useEnableCompanyMutation } from "@/app/hooks/users.hook";

const ProfileSetup = () => {
  const mutation = useEnableCompanyMutation();
  const [steps, setSteps] = useState<number>(1);
  const companyInfo = {
    company_name: "",
    company_office: "",
    company_email: "",
    company_telephone: "",
    business_field: "",
    address: {
      latitude: 0,
      longitude: 0,
    },
  };
  const formik = useFormik({
    initialValues: companyInfo,
    validationSchema: companyProfileValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const data = {
        ...values,
        latitude: values.address.latitude,
        longitude: values.address.longitude,
      };
      mutation.mutate({
        latitude: data.latitude,
        longitude: data.longitude,
        company_name: data.company_name,
        company_email: data.company_email,
        company_office: data.company_office,
        company_telephone: data.company_telephone,
        business_field: data.business_field,
      });
      if (mutation.isPending) {
        toast.loading("Creating Company Profile....");
      }
      if (mutation.isError) {
        toast.error("Something went wrong");
      }
      if (mutation.isSuccess) {
        toast.success("Company Profile Created Successfully");
      }
    },
  });
  const [registerType, setRegisterType] = useState<"company" | "client">();
  const handelNext = () => {
    if (steps < 2) {
      if (steps === 1) {
        if (registerType !== undefined) {
          setSteps((steps) => steps + 1);
        } else {
          toast.error("Please select Registration Type");
          setSteps(1);
        }
      } else {
        setSteps(steps + 1);
      }
    } else {
      formik.handleSubmit();
    }
  };
  const handelPrev = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };
  const onSelectType = (type: { registerAs: "company" | "client" }) => {
    if (type.registerAs === "company") {
      setRegisterType("company");
    } else if (type.registerAs === "client") {
      setRegisterType("client");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg--white
         justify-center items-center w-full p-4 gap-[20px]"
    >
      <Toaster position="top-right" richColors closeButton />
      {steps == 1 && <ChooseType onSelectType={onSelectType} />}
      {steps == 2 &&
        (registerType === "company" ? (
          <CompanyInfo formik={formik} />
        ) : registerType === "client" ? (
          <ClientInfo />
        ) : null)}
      {/* {steps == 3 && <CompanyDocument />} */}
      <div className="flex flex-row mx-auto gap-[10px] items-center">
        <Button text="Back" disabled={steps <= 1} onClick={handelPrev} />

        <Button
          text={`${steps < 2 ? "Continue" : "Finish"}`}
          onClick={handelNext}
          className="hover:opacity-80 duration-300 transition-all bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default ProfileSetup;
