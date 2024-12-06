"use client";
import { CredentialsValidationSchema } from "@/lib/validation/formikSchema";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import ReactLoading from "react-loading";

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const CredentialsFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: CredentialsValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setLoading(true);
      // Handle sign-in with NextAuth
      const res = await signIn("credentials", {
        redirect: false,
        email: CredentialsFormik.values.email,
        password: CredentialsFormik.values.password,
      });

      if (res?.error) {
        setErrors({ email: res.error });
        setLoading(false);
      } else {
        const session = await getSession();
        console.log("SESSION", session);
        setLoading(false);
        if (session?.user?.accessType === "system") {
          location.href = "/profile-setup";
        } else if (
          session?.user?.accessType === "employee" ||
          session?.user?.accessType === "employer"
        ) {
          location.href = "/provider";
        } else if (session?.user?.accessType === "customer") {
          location.href = "/client/dashboard";
          console.log("Client Dashboard");
        } else {
          console.log("No Access Type");
          location.href = "/auth";
        }
      }
      setLoading(false);
      setSubmitting(false);
    },
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FAFAFA]">
      <div className="bg-white flex flex-row rounded-[30px] max-h-[90%] w-[95%] sm:w-[70%] md:w-[95%] lg:w-[70%] overflow-hidden">
        <div className="w-full md:w-1/2 h-full flex flex-col gap-[4px] p-5 py-10 lg:p-10">
          <div className="w-[60px]">
            <Image
              src={`/image/swifti.svg`}
              width={1000}
              height={1000}
              className="w-full"
              alt="logo swifti"
            />
          </div>
          <h1 className="text-[16px] text-[#E2B659] font-[500]">
            Log In to Your Account
          </h1>
          <span className="text-[#13829F] font-[600] text-[20px]">
            Enter your credentials to access your profile
          </span>
          <form
            onSubmit={CredentialsFormik.handleSubmit}
            className="flex flex-col gap-[10px] py-4"
          >
            <div className="w-full h-[50px] rounded-[24px] bg-[#F9F9F9]">
              <input
                type="text"
                name="email"
                onChange={CredentialsFormik.handleChange}
                value={CredentialsFormik.values.email}
                className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Enter your email"
              />
            </div>
            {CredentialsFormik.touched.email &&
            CredentialsFormik.errors.email ? (
              <div className="text-red-500 text-[12px] px-4">
                {CredentialsFormik.errors.email}
              </div>
            ) : null}

            <div className="w-full h-[50px] rounded-[24px] bg-[#F9F9F9] relative">
              <input
                type="password"
                name="password"
                onChange={CredentialsFormik.handleChange}
                value={CredentialsFormik.values.password}
                className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[24px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                placeholder="Enter your password"
              />
            </div>
            {CredentialsFormik.touched.password &&
            CredentialsFormik.errors.password ? (
              <div className="text-red-500 text-[12px] px-4">
                {CredentialsFormik.errors.password}
              </div>
            ) : null}

            <div className="w-full flex flex-row items-center justify-between px-4">
              <a href="#" className="text-[12px] sm:text-[14px] text-[#13829F]">
                Forgot your Password?
              </a>
              <a
                href="/auth/signup"
                className="text-[12px] sm:text-[14px] text-[#13829F]"
              >
                Need an Account?
              </a>
            </div>
            <div className="flex flex-col gap-[4px]">
              <button
                type="submit"
                className="w-full flex items-center justify-center h-[50px] rounded-[24px] bg-[#1990AF] text-white"
              >
                {loading ? (
                  <ReactLoading
                    type="bubbles"
                    color="#fff"
                    width={24}
                    height={24}
                  />
                ) : (
                  "Sign In"
                )}
              </button>
              <span className="text-center">OR</span>
              <button
                type="button"
                className="w-full h-[50px] rounded-[24px] border-[1.4px] border-[#1990AF]/50 text-[#1990AF]"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
        <div className="hidden w-1/2 bg-[#1990AF] md:flex flex-col items-center gap-[20px] relative">
          <div className="w-full h-full absolute z-10">
            <Image
              src={`/image/background.svg`}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              alt="background"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center p-10 relative z-20">
            <button className="p-2 w-[200px] text-white text-[14px] rounded-[10px] bg-[#13829F]">
              Discover Now
            </button>
            <h1 className="text-[22px] text-white font-[700] text-center">
              Find Trusted Cleaners or <br /> Grow Your Cleaning Business
            </h1>
            <span className="text-[14px] text-white font-[400] text-center">
              Find Trusted Cleaners or Grow Your <br /> Cleaning Business
            </span>
          </div>
          <div className="w-full relative z-20 mt-[-30px]">
            <Image
              alt="decorative"
              src={`/image/authback.png`}
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
