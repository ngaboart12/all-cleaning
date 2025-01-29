"use client"
import DownloadApp from "@/components/Homepage/DownloadApp";
import FrequentlyQuestion from "@/components/Homepage/FrequentlyQuestion";
import HeroSection from "@/components/Homepage/HeroSection";
import JoinOurNetwork from "@/components/Homepage/JoinOurNetwork";
import OurMobileApp from "@/components/Homepage/OurMobileApp";
import PopularService from "@/components/Homepage/PopularService";
import Services from "@/components/Homepage/Services";
import Testimonials from "@/components/Homepage/Testimonials";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      topic: Yup.string().required("Topic is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        resetForm();
        toast.success('Message sent successfully!');
      } catch (error) {
        console.error('Error sending message:', error);
        toast.error('Failed to send message. Please try again.');
      } finally {
        setLoading(false)
      }
    },
  });
  return (
    <div className="w-full ">
      <HeroSection />
      <PopularService />
      <JoinOurNetwork />
      <Testimonials />
      <OurMobileApp />
      <div className="w-full flex flex-col gap-[40px] bg-[#fbfbfb] px-[10px] md:px-[50px] lg:px-[100px] py-[50px]">
        <div className="text-[12px] flex flex-col w-[120px] items-center justify-center p-2 bg-[#000] text-[#fff] rounded-[8px]">Contact Us</div>
        <div className="w-full flex lg:flex-row flex-col-reverse  gap-[40px]">
          <div className=" w-full lg:w-1/4  flex flex-col gap-[20px]">
            <h1 className="text-[24px] font-[600]">LET'S GET IN TOUCH</h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[10px] p-4 rounded-[12px] bg-[#F8F8F8] items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23914 10.3913C4.25354 6.15069 7.7029 2.7247 11.9435 2.73906C16.1841 2.75351 19.6101 6.20287 19.5957 10.4435V10.5304C19.5435 13.2869 18.0044 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25653 16.0521C5.01449 14.4294 4.3093 12.4597 4.23914 10.4174V10.3913Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9174 13C13.2765 13 14.3783 11.8982 14.3783 10.5391C14.3783 9.18002 13.2765 8.07825 11.9174 8.07825C10.5583 8.07825 9.45654 9.18002 9.45654 10.5391C9.45654 11.8982 10.5583 13 11.9174 13Z" stroke="#1D2E4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[600] ">Address</span>
                  <span className="text-[14px]">Jl. Raya Kediri</span>
                </div>
              </div>
              <div className="flex flex-row gap-[10px] p-4 rounded-[12px] bg-[#F8F8F8] items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2677 8.56116L13.0023 11.9954C12.1951 12.6283 11.0635 12.6283 10.2563 11.9954L5.95422 8.56116" stroke="#1D2E4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[600] ">Email</span>
                  <span className="text-[14px]">info@example.com</span>
                </div>
              </div>
              <div className="flex flex-row gap-[10px] p-4 rounded-[12px] bg-[#F8F8F8] items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#1D2E4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#1D2E4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04253 8.48441 11.0315 12.4724Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[600] ">Phone</span>
                  <span className="text-[14px]">+62 812 3456 7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-[20px]">
            <span className="text-[20px] max-w-[500px] font-[600]">Contact us when you need our services. We would love to hear from you and make your experience better</span>
            <form onSubmit={contactFormik.handleSubmit} className="flex flex-col gap-[10px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[4px]">
                  <label htmlFor="name" className="text-[14px] font-[600]">Name</label>
                  <input name="name" onChange={contactFormik.handleChange} value={contactFormik.values.name} type="text" placeholder="Enter Name" className="w-full p-4 rounded-[12px] bg-[#F8F8F8] outline-none" />
                  {contactFormik.touched.name && contactFormik.errors.name && <span className="text-[12px] text-[red]">{contactFormik.errors.name}</span>}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label htmlFor="email" className="text-[14px] font-[600]">Email</label>
                  <input name="email" onChange={contactFormik.handleChange} value={contactFormik.values.email} type="email" placeholder="Enter Email" className="w-full p-4 rounded-[12px] bg-[#F8F8F8] outline-none" />
                  {contactFormik.touched.email && contactFormik.errors.email && <span className="text-[12px] text-[red]">{contactFormik.errors.email}</span>}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label htmlFor="phone" className="text-[14px] font-[600]">Phone</label>
                  <input name="phone" onChange={contactFormik.handleChange} value={contactFormik.values.phone} type="number" placeholder="Enter Phone" className="w-full p-4 rounded-[12px] bg-[#F8F8F8] outline-none" />
                  {contactFormik.touched.phone && contactFormik.errors.phone && <span className="text-[12px] text-[red]">{contactFormik.errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label htmlFor="topic" className="text-[14px] font-[600]">Topic</label>
                  <input name="topic" onChange={contactFormik.handleChange} value={contactFormik.values.topic} type="text" placeholder="Enter Topic" className="w-full p-4 rounded-[12px] bg-[#F8F8F8] outline-none" />
                  {contactFormik.touched.topic && contactFormik.errors.topic && <span className="text-[12px] text-[red]">{contactFormik.errors.topic}</span>}
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <label htmlFor="message" className="text-[14px] font-[600]">Message</label>
                <textarea name="message" onChange={contactFormik.handleChange} value={contactFormik.values.message} rows={4} placeholder="Message" className="w-full p-4 rounded-[12px] bg-[#F8F8F8] outline-none" />
                {contactFormik.touched.message && contactFormik.errors.message && <span className="text-[12px] text-[red]">{contactFormik.errors.message}</span>}
              </div>
              <button type="submit" className="w-full p-4 rounded-[12px] bg-[#000] text-[#fff]">
                {loading ? <span className="text-[14px] font-[600]">Sending...</span> : <span className="text-[14px] font-[600]">Send Message</span>}


              </button>
            </form>
          </div>

        </div>
      </div>
      <FrequentlyQuestion />

    </div>
  );
}
