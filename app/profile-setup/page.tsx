"use client";
import React, { useState } from "react";
import ChooseType from "./setup-components/ChooseType";
import CompanyInfo from "./setup-components/CompanyInfo";
import CompanyDocument from "./setup-components/CompanyDocument";
import ClientInfo from "./setup-components/ClientInfo";
import { Toaster, toast } from "sonner";
import Button from "@/components/ui/button/Button";
import { useFormik } from "formik";
import { companyProfileValidationSchema, enableFreelancerSchema } from "@/lib/validation/formikSchema";
import { useRouter } from "next/navigation";
import {
  useEnableCompanyMutation,
  useEnableCustomerMutation,
  useEnableFreelancerMutation,
} from "@/app/hooks/users.hook";
import ChooseCompanyInfo from "./setup-components/ChooseCompanyInfo";
import FreelancerInfo from "./setup-components/FreelancerInfo";
import { useSession } from "next-auth/react";

const ProfileSetup = () => {
  const router = useRouter();
  const { data: session, update: updateSession } = useSession();
  const mutation = useEnableCompanyMutation();
  const { mutate: enableFreelancer, isError, isPending } = useEnableFreelancerMutation();
  const {
    mutate: enableCustomer,
    isPending: isEnableCustomerPending,
    isSuccess: isEnableCustomerSuccess,
    isError: isEnableCustomerError,
  } = useEnableCustomerMutation();
  const [steps, setSteps] = useState<number>(1);
  
  const companyInfo = {
    company_name: "",
    company_office: "",
    company_email: "",
    company_telephone: "",
    business_field: "",
    dob: "",
    ssn: "",
    location: "",
    gender: "",
    routing_number: "",
    address: {
      latitude: 0,
      longitude: 0,
    },
  };

  const freelancerInfo = {
    dob: "",
    location: "",
    gender: "",
    routing_number: "",
    address: {
      latitude: 0,
      longitude: 0,
    },
  };

  const handleEnableCustomer = async () => {
    if (registerType === "client") {
      try {
        await enableCustomer();

        if (isEnableCustomerSuccess) {
          await updateSession({
            ...session,
            user: {
              ...session?.user,
              accessType: "customer"
            }
          });
          toast.success("Customer Profile Enabled Successfully");
          router.push("/client/dashboard");
        } else if (isEnableCustomerError) {
          toast.error("Failed to enable customer profile");
        }
      } catch (error) {
        toast.error("Something went wrong, try again");
        console.log(error);
      }
    }
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
        dob: data.dob,
        ssn: data.ssn,
        location: data.location,
        gender: data.gender,
        routing_number: data.routing_number
      });

      if (mutation.isPending) {
        toast.loading("Creating Company Profile....");
      }
      if (mutation.isError) {
        toast.error("Something went wrong");
      }
      if (mutation.isSuccess) {
        try {
          await updateSession({
            ...session,
            user: {
              ...session?.user,
              accessType: "employee"
            }
          });
          toast.success("Company Profile Created Successfully");
          router.push("/provider");
        } catch (error) {
          toast.error("Failed to update session");
          console.error(error);
        }
      }
    },
  });

  const freelancerFormik = useFormik({
    initialValues: freelancerInfo,
    validationSchema: enableFreelancerSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const data = {
        ...values,
        latitude: values.address.latitude,
        longitude: values.address.longitude,
      };
      
      enableFreelancer({
        latitude: data.latitude,
        longitude: data.longitude,
        dob: data.dob,
        location: data.location,
        routing_number: data.routing_number,
        gender: data.gender,
      }, {
        onSuccess: async(result) => {
          try {
            await updateSession({
              ...session,
              user: {
                ...session?.user,
                accessType: "employee"
              }
            });
            toast.success("Profile Created Successfully");
            router.push("/provider");
          } catch (error) {
            toast.error("Failed to update session");
            console.error(error);
          }
        },
        onError: (error) => {
          toast.error(error.message);
        }
      });
    },
  });

  const [registerType, setRegisterType] = useState<"company" | "client" | "freelancer">();

  const handelNext = () => {
    if (steps < 3) {
      if (steps === 2) {
        if (registerType !== undefined) {
          if (registerType === "company") {
            setSteps((steps) => steps + 1);
            return;
          }
          else if (registerType === "freelancer") {
            setSteps((steps) => steps + 1);
            return
          }else{
            handleEnableCustomer();
          }
        } else {
          toast.error("Please select Registration Type");
          setSteps(1);
        }
        handleEnableCustomer();
      } else {
        setSteps(steps + 1);
      }
    } else {
      if (registerType === "company") {
        formik.handleSubmit();
      } else {
        freelancerFormik.handleSubmit()
      }
    }
  };

  const handelPrev = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };

  const onSelectType = (type: { registerAs: "company" | "client" | "freelancer" }) => {
    if (type.registerAs === "freelancer") {
      setRegisterType("freelancer")
    }
    else if (type.registerAs === "company") {
      setRegisterType("company");
    } else if (type.registerAs === "client") {
      setRegisterType("client");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg--white justify-center items-center w-full p-4 gap-[20px]">
      <Toaster position="top-right" richColors closeButton />
      {steps == 1 && <ChooseType onSelectType={onSelectType} />}
      {steps == 2 && <ChooseCompanyInfo onSelectType={onSelectType} />}
      {steps == 3 && registerType === "company" && (
        <CompanyInfo formik={formik} />
      )}
      {steps == 3 && registerType === "freelancer" && (
        <FreelancerInfo formik={freelancerFormik} />
      )}
      <div className="flex flex-row mx-auto gap-[10px] items-center">
        <Button text="Back" disabled={steps <= 1} onClick={handelPrev} />
        <Button
          text={`${registerType === "client"
            ? "Enable Account"
            : steps < 3
              ? "Continue"
              : "Finish"
            }`}
          onClick={handelNext}
          className="hover:opacity-80 duration-300 transition-all bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default ProfileSetup;