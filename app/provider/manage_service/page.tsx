"use client";

import { useCompleteServiceMutation, useFetchProviderServicesQuery } from '@/app/hooks/services.hook';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactLoading from 'react-loading';
import { useFormik } from 'formik';
import { CompleteServiceValidation } from '@/lib/validation/formikSchema';
import { CiTrash } from "react-icons/ci";
import { Fascinate } from 'next/font/google';
import { toast } from 'react-toastify';
import SuccessPopup from '@/components/modal/SuccessPopup';

interface AdditionalFee {
    id: string; // Add an id field
    title: string;
    fees: string;
}


interface FormValues {
    description: string;
    estimatedPrice: string;
    additionalInfo: string;
    media: string;
    additionalFees: AdditionalFee[];
}

type Service = {
    id: string;
    providerId: string;
    service: {
        title: string;
    };
    isComplete: boolean;
};

const ManageServiceDetails = () => {
    const [selectedServiceId, setSelectedServiceId] = useState("");
    const [selectedService, setSelectedService] = useState<Service>();
    const [document, setDocument] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [dragging, setDragging] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isSucess, setIsSucess] = useState<boolean>(false);
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

    const generateRandomId = () => Date.now().toString();


    const { mutate: completeService, isPending } = useCompleteServiceMutation();

    const { data: session } = useSession();
    const token: any = session?.user.token;

    const [additionalFees, setAdditionalFees] = useState([{ id: generateRandomId(), title: '', fees: '' }]);



    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/x-icon'];
    const { isLoading: loadingService, data: services = [], error: fetchError,refetch } = useFetchProviderServicesQuery(token);

    const serviceFormik = useFormik<FormValues>({
        initialValues: {
            description: "",
            estimatedPrice: "",
            additionalInfo: "",
            media: "",
            additionalFees: []
        },
        validationSchema: CompleteServiceValidation,
        onSubmit: async (values) => {
            toast.success("Sucess updated")
            setLoading(true)
            const additionalFeesMapped = additionalFees.map(fee => ({
                id: fee.id,
                title: fee.title,
                fees: Number(fee.fees) // Convert fees to number
            }));
            const data = {
                description: values.description,
                price: Number(values.estimatedPrice),
                AdditionalFees: additionalFeesMapped,
                media: values.media,
                additionalInfo: values.additionalInfo,
                providerId: selectedService?.providerId

            }
            completeService({
                id: selectedServiceId,
                serviceData: data,
                token: token
            }, {
                onSuccess: (response) => {
                    setLoading(false)
                    setIsSucess(true)

                    refetch()

                },
                onError(error, variables, context) {
                    setLoading(false)
                    toast.error("Something wrong")
                },
            })

        }
    });

    useEffect(() => {
        if (selectedServiceId && !loadingService) {
            const service = services.find((item: any) => item.id == selectedServiceId);
            setSelectedService(service);
        }
    }, [selectedServiceId, loadingService]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleUpload(file);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            handleUpload(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleUpload = async (file: File) => {
        if (!allowedFileTypes.includes(file.type)) {
            setError("Invalid file type. Please upload a PNG, JPG, SVG, or ICO file.");
            return;
        }
        setError("");
        setDocument(file);
        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'all-cleaning');

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dbajwnjyd/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            serviceFormik.setFieldValue('media', data.secure_url);
            setUploadSuccess(true);
        } catch (error) {
            setError("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleAddFee = () => {
        const newFee: AdditionalFee = { id: Date.now().toString(), title: '', fees: '' };
        setAdditionalFees([...additionalFees, newFee]);
    };

    const handleFeeChange = (index: number, field: 'title' | 'fees', value: string) => {
        const updatedFees = [...additionalFees];
        updatedFees[index][field] = value;
        setAdditionalFees(updatedFees);
    };

    const handleRemoveFee = (index: number) => {
        const updatedFees = additionalFees.filter((_, i) => i !== index);
        setAdditionalFees(updatedFees);
    };

    return (
        <div className='w-full flex flex-col gap-[20px] pt-24 px-[10px] py-10 md:px-[50px] lg:px-[100px] bg-[#F8F8F8] min-h-screen'>
            <div className='w-full py-4 px-4 md:px-10 bg-white flex flex-col lg:flex-row gap-[20px]'>
                <div className='w-full lg:w-[40%] bg-[#F9F9F9] rounded-[12px] p-4 flex flex-col gap-[10px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='text-[16px] font-[500] text-black'>Your selected services</span>
                        <div className='flex cursor-pointer flex-row items-center gap-[4px]'>
                            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4.5V20.5M20 12.5H4" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='font-[700] text-[16px]'>ADD</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px] w-full'>
                        {loadingService ? (
                            <Skeleton height={30} className='w-full' />
                        ) : fetchError ? (
                            <div className='text-red-500'>Error fetching services: {fetchError.message}</div>
                        ) : (
                            services.length > 0 ? (
                                services.map((service: any, index: number) => (
                                    <div onClick={() => setSelectedServiceId(service.id)} key={index} className={`flex cursor-pointer hover:bg-[#e4e4e4] duration-300 flex-row p-4 w-full justify-between ${selectedServiceId === service.id ? "bg-primary/20" : "bg-white"} rounded-[12px] items-center`}>
                                        <span className='text-[12px]'>{service.service.title}</span>
                                        <div className='flex flex-row items-center gap-[4px]'>
                                            <span className={`text-[12px] ${service.isComplete ? "text-green-500" : "text-[#767676]"}`}>
                                                {service.isComplete ? "Completed" : "Pending"}
                                            </span>
                                            <h1 className='text-[13px] font-[600] text-primary'>
                                                {service.isComplete ? "5/5" : "2/5"}
                                            </h1>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No services available.</div>
                            )
                        )}
                    </div>
                </div>
                <div className='w-full lg:w-[60%] bg-white p-4 rounded-[12px] flex justify-center'>
                    {selectedServiceId === "" ? (
                        <div>
                            <svg width="355" height="355" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="177" cy="178" r="53.5" stroke="black"/>
<circle cx="177" cy="178" r="92.5" stroke="black" stroke-opacity="0.4"/>
<circle cx="177.5" cy="177.5" r="132" stroke="black" stroke-opacity="0.3"/>
<circle cx="177.5" cy="177.5" r="177" stroke="black" stroke-opacity="0.1"/>
<rect width="46" height="46" transform="translate(159 157)" fill="white"/>
<path d="M180.667 171.333H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round"/>
<path d="M173.2 186.523C174.622 187.476 175.333 187.952 175.333 188.666C175.333 189.381 174.622 189.857 173.2 190.81C171.778 191.762 171.067 192.238 170.533 191.881C170 191.524 170 190.571 170 188.666C170 186.761 170 185.809 170.533 185.452C171.067 185.094 171.778 185.571 173.2 186.523Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round"/>
<path d="M173.2 169.19C174.622 170.143 175.333 170.619 175.333 171.333C175.333 172.048 174.622 172.524 173.2 173.476C171.778 174.429 171.067 174.905 170.533 174.548C170 174.191 170 173.238 170 171.333C170 169.428 170 168.476 170.533 168.119C171.067 167.761 171.778 168.238 173.2 169.19Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round"/>
<path d="M180.667 180H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round"/>
<path d="M180.667 188.667H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round"/>
<rect x="217" y="164" width="30" height="30" rx="8" fill="#F8F8F8"/>
<path d="M234 172.667V173.667C234 174.61 234 175.081 234.293 175.374C234.586 175.667 235.057 175.667 236 175.667H237" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M226.667 181.666V176.333C226.667 174.447 226.667 173.505 227.253 172.919C227.839 172.333 228.781 172.333 230.667 172.333H233.448C233.721 172.333 233.857 172.333 233.979 172.384C234.102 172.435 234.198 172.531 234.391 172.724L236.943 175.276C237.136 175.469 237.232 175.565 237.283 175.687C237.334 175.81 237.334 175.946 237.334 176.219V181.666C237.334 183.552 237.334 184.495 236.748 185.081C236.162 185.666 235.219 185.666 233.334 185.666H230.667C228.781 185.666 227.839 185.666 227.253 185.081C226.667 184.495 226.667 183.552 226.667 181.666Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M229.333 178.333H234.666M229.333 180.333H234.666M229.333 182.333H232.114" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="112" y="145" width="30" height="30" rx="8" fill="#F8F8F8"/>
<path d="M129 153.667V154.667C129 155.61 129 156.081 129.293 156.374C129.586 156.667 130.057 156.667 131 156.667H132" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M121.667 162.666V157.333C121.667 155.447 121.667 154.505 122.253 153.919C122.839 153.333 123.781 153.333 125.667 153.333H128.448C128.721 153.333 128.857 153.333 128.979 153.384C129.102 153.435 129.198 153.531 129.391 153.724L131.943 156.276C132.136 156.469 132.232 156.565 132.283 156.687C132.334 156.81 132.334 156.946 132.334 157.219V162.666C132.334 164.552 132.334 165.495 131.748 166.081C131.162 166.666 130.219 166.666 128.334 166.666H125.667C123.781 166.666 122.839 166.666 122.253 166.081C121.667 165.495 121.667 164.552 121.667 162.666Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124.333 159.333H129.666M124.333 161.333H129.666M124.333 163.333H127.114" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="173" y="258" width="30" height="30" rx="8" fill="#F8F8F8"/>
<path d="M190 266.667V267.667C190 268.61 190 269.081 190.293 269.374C190.586 269.667 191.057 269.667 192 269.667H193" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182.667 275.666V270.333C182.667 268.447 182.667 267.505 183.253 266.919C183.839 266.333 184.781 266.333 186.667 266.333H189.448C189.721 266.333 189.857 266.333 189.979 266.384C190.102 266.435 190.198 266.531 190.391 266.724L192.943 269.276C193.136 269.469 193.232 269.565 193.283 269.687C193.334 269.81 193.334 269.946 193.334 270.219V275.666C193.334 277.552 193.334 278.495 192.748 279.081C192.162 279.666 191.219 279.666 189.334 279.666H186.667C184.781 279.666 183.839 279.666 183.253 279.081C182.667 278.495 182.667 277.552 182.667 275.666Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185.333 272.333H190.666M185.333 274.333H190.666M185.333 276.333H188.114" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="34" y="178" width="28" height="28" rx="8" fill="#F8F8F8"/>
<path d="M49.75 186.458V187.333C49.75 188.158 49.75 188.57 50.0063 188.827C50.2626 189.083 50.675 189.083 51.5 189.083H52.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.333 194.334V189.667C43.333 188.017 43.333 187.192 43.8456 186.68C44.3581 186.167 45.1831 186.167 46.833 186.167H49.2664C49.5048 186.167 49.6241 186.167 49.7313 186.211C49.8385 186.256 49.9228 186.34 50.0914 186.509L52.3246 188.742C52.4932 188.911 52.5776 188.995 52.6219 189.102C52.6663 189.209 52.6663 189.328 52.6663 189.567V194.334C52.6663 195.984 52.6663 196.809 52.1538 197.321C51.6412 197.834 50.8162 197.834 49.1663 197.834H46.833C45.1831 197.834 44.3581 197.834 43.8456 197.321C43.333 196.809 43.333 195.984 43.333 194.334Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.667 191.417H50.3337M45.667 193.167H50.3337M45.667 194.917H48.1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="287" y="117" width="28" height="28" rx="8" fill="#F8F8F8"/>
<path d="M302.75 125.458V126.333C302.75 127.158 302.75 127.57 303.006 127.827C303.263 128.083 303.675 128.083 304.5 128.083H305.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M296.333 133.334V128.667C296.333 127.017 296.333 126.192 296.846 125.68C297.358 125.167 298.183 125.167 299.833 125.167H302.266C302.505 125.167 302.624 125.167 302.731 125.211C302.838 125.256 302.923 125.34 303.091 125.509L305.325 127.742C305.493 127.911 305.578 127.995 305.622 128.102C305.666 128.209 305.666 128.328 305.666 128.567V133.334C305.666 134.984 305.666 135.809 305.154 136.321C304.641 136.834 303.816 136.834 302.166 136.834H299.833C298.183 136.834 297.358 136.834 296.846 136.321C296.333 135.809 296.333 134.984 296.333 133.334Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.667 130.417H303.334M298.667 132.167H303.334M298.667 133.917H301.1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="74" y="187" width="30" height="30" rx="8" fill="#F8F8F8"/>
<path d="M91 195.667V196.667C91 197.61 91 198.081 91.2929 198.374C91.5858 198.667 92.0572 198.667 93 198.667H94" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.667 204.666V199.333C83.667 197.447 83.667 196.505 84.2528 195.919C84.8386 195.333 85.7814 195.333 87.667 195.333H90.4481C90.7205 195.333 90.8568 195.333 90.9793 195.384C91.1018 195.435 91.1982 195.531 91.3909 195.724L93.9431 198.276C94.1358 198.469 94.2322 198.565 94.2829 198.687C94.3337 198.81 94.3337 198.946 94.3337 199.219V204.666C94.3337 206.552 94.3337 207.495 93.7479 208.081C93.1621 208.666 92.2193 208.666 90.3337 208.666H87.667C85.7814 208.666 84.8386 208.666 84.2528 208.081C83.667 207.495 83.667 206.552 83.667 204.666Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.333 201.333H91.6663M86.333 203.333H91.6663M86.333 205.333H89.1135" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="167" y="72" width="30" height="30" rx="8" fill="#F8F8F8"/>
<path d="M184 80.667V81.667C184 82.6098 184 83.0812 184.293 83.3741C184.586 83.667 185.057 83.667 186 83.667H187" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M176.667 89.6663V84.333C176.667 82.4474 176.667 81.5046 177.253 80.9188C177.839 80.333 178.781 80.333 180.667 80.333H183.448C183.721 80.333 183.857 80.333 183.979 80.3838C184.102 80.4345 184.198 80.5308 184.391 80.7235L186.943 83.2758C187.136 83.4685 187.232 83.5648 187.283 83.6874C187.334 83.8099 187.334 83.9461 187.334 84.2186V89.6663C187.334 91.5519 187.334 92.4947 186.748 93.0805C186.162 93.6663 185.219 93.6663 183.334 93.6663H180.667C178.781 93.6663 177.839 93.6663 177.253 93.0805C176.667 92.4947 176.667 91.5519 176.667 89.6663Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M179.333 86.333H184.666M179.333 88.333H184.666M179.333 90.333H182.114" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="35" y="288" width="271" height="47" rx="8" fill="#F7F7F7"/>
<path d="M93.476 318V305.508H94.664L95.168 307.47V318H93.476ZM102.116 318L94.448 307.758L94.664 305.508L102.35 315.732L102.116 318ZM102.116 318L101.612 316.146V305.508H103.304V318H102.116ZM109.873 318.18C109.033 318.18 108.277 317.982 107.605 317.586C106.933 317.19 106.399 316.656 106.003 315.984C105.607 315.3 105.409 314.538 105.409 313.698C105.409 312.87 105.607 312.126 106.003 311.466C106.399 310.794 106.933 310.26 107.605 309.864C108.277 309.468 109.033 309.27 109.873 309.27C110.701 309.27 111.451 309.468 112.123 309.864C112.807 310.248 113.347 310.776 113.743 311.448C114.139 312.12 114.337 312.87 114.337 313.698C114.337 314.538 114.139 315.3 113.743 315.984C113.347 316.656 112.807 317.19 112.123 317.586C111.451 317.982 110.701 318.18 109.873 318.18ZM109.873 316.614C110.413 316.614 110.893 316.488 111.313 316.236C111.733 315.984 112.063 315.642 112.303 315.21C112.543 314.766 112.663 314.262 112.663 313.698C112.663 313.146 112.537 312.654 112.285 312.222C112.045 311.79 111.715 311.454 111.295 311.214C110.887 310.962 110.413 310.836 109.873 310.836C109.333 310.836 108.853 310.962 108.433 311.214C108.013 311.454 107.683 311.79 107.443 312.222C107.203 312.654 107.083 313.146 107.083 313.698C107.083 314.262 107.203 314.766 107.443 315.21C107.683 315.642 108.013 315.984 108.433 316.236C108.853 316.488 109.333 316.614 109.873 316.614ZM123.669 318.18C122.685 318.18 121.845 318 121.149 317.64C120.453 317.28 119.835 316.758 119.295 316.074L120.447 314.922C120.843 315.474 121.299 315.894 121.815 316.182C122.331 316.458 122.967 316.596 123.723 316.596C124.467 316.596 125.061 316.434 125.505 316.11C125.961 315.786 126.189 315.342 126.189 314.778C126.189 314.31 126.081 313.932 125.865 313.644C125.649 313.356 125.355 313.122 124.983 312.942C124.623 312.75 124.227 312.582 123.795 312.438C123.363 312.282 122.931 312.12 122.499 311.952C122.067 311.772 121.671 311.556 121.311 311.304C120.951 311.04 120.657 310.698 120.429 310.278C120.213 309.858 120.105 309.33 120.105 308.694C120.105 307.986 120.273 307.386 120.609 306.894C120.957 306.39 121.425 306.006 122.013 305.742C122.613 305.466 123.285 305.328 124.029 305.328C124.845 305.328 125.577 305.49 126.225 305.814C126.873 306.126 127.401 306.54 127.809 307.056L126.657 308.208C126.285 307.776 125.883 307.452 125.451 307.236C125.031 307.02 124.545 306.912 123.993 306.912C123.321 306.912 122.787 307.062 122.391 307.362C121.995 307.65 121.797 308.058 121.797 308.586C121.797 309.006 121.905 309.348 122.121 309.612C122.349 309.864 122.643 310.08 123.003 310.26C123.363 310.44 123.759 310.608 124.191 310.764C124.635 310.908 125.073 311.07 125.505 311.25C125.937 311.43 126.333 311.658 126.693 311.934C127.053 312.21 127.341 312.57 127.557 313.014C127.785 313.446 127.899 313.992 127.899 314.652C127.899 315.756 127.515 316.62 126.747 317.244C125.991 317.868 124.965 318.18 123.669 318.18ZM133.728 318.18C132.876 318.18 132.108 317.988 131.424 317.604C130.74 317.208 130.2 316.674 129.804 316.002C129.408 315.33 129.21 314.568 129.21 313.716C129.21 312.876 129.402 312.12 129.786 311.448C130.182 310.776 130.71 310.248 131.37 309.864C132.042 309.468 132.792 309.27 133.62 309.27C134.412 309.27 135.108 309.45 135.708 309.81C136.32 310.17 136.794 310.668 137.13 311.304C137.478 311.94 137.652 312.66 137.652 313.464C137.652 313.584 137.646 313.716 137.634 313.86C137.622 313.992 137.598 314.148 137.562 314.328H130.344V312.978H136.698L136.104 313.5C136.104 312.924 136.002 312.438 135.798 312.042C135.594 311.634 135.306 311.322 134.934 311.106C134.562 310.878 134.112 310.764 133.584 310.764C133.032 310.764 132.546 310.884 132.126 311.124C131.706 311.364 131.382 311.7 131.154 312.132C130.926 312.564 130.812 313.074 130.812 313.662C130.812 314.262 130.932 314.79 131.172 315.246C131.412 315.69 131.754 316.038 132.198 316.29C132.642 316.53 133.152 316.65 133.728 316.65C134.208 316.65 134.646 316.566 135.042 316.398C135.45 316.23 135.798 315.978 136.086 315.642L137.13 316.704C136.722 317.184 136.218 317.55 135.618 317.802C135.03 318.054 134.4 318.18 133.728 318.18ZM139.418 318V309.45H141.038V318H139.418ZM141.038 313.122L140.426 312.852C140.426 311.76 140.678 310.89 141.182 310.242C141.686 309.594 142.412 309.27 143.36 309.27C143.792 309.27 144.182 309.348 144.53 309.504C144.878 309.648 145.202 309.894 145.502 310.242L144.44 311.34C144.26 311.148 144.062 311.01 143.846 310.926C143.63 310.842 143.378 310.8 143.09 310.8C142.49 310.8 141.998 310.992 141.614 311.376C141.23 311.76 141.038 312.342 141.038 313.122ZM149.419 318L145.495 309.45H147.295L150.445 316.668H149.401L152.569 309.45H154.297L150.373 318H149.419ZM155.696 318V309.45H157.316V318H155.696ZM156.506 307.74C156.206 307.74 155.96 307.644 155.768 307.452C155.576 307.248 155.48 306.996 155.48 306.696C155.48 306.408 155.576 306.168 155.768 305.976C155.96 305.772 156.206 305.67 156.506 305.67C156.806 305.67 157.052 305.772 157.244 305.976C157.436 306.168 157.532 306.408 157.532 306.696C157.532 306.996 157.436 307.248 157.244 307.452C157.052 307.644 156.806 307.74 156.506 307.74ZM163.61 318.18C162.77 318.18 162.008 317.982 161.324 317.586C160.652 317.19 160.118 316.656 159.722 315.984C159.338 315.3 159.146 314.544 159.146 313.716C159.146 312.876 159.338 312.12 159.722 311.448C160.118 310.776 160.652 310.248 161.324 309.864C162.008 309.468 162.77 309.27 163.61 309.27C164.27 309.27 164.882 309.396 165.446 309.648C166.01 309.888 166.496 310.242 166.904 310.71L165.824 311.79C165.56 311.478 165.236 311.244 164.852 311.088C164.48 310.92 164.066 310.836 163.61 310.836C163.07 310.836 162.59 310.962 162.17 311.214C161.75 311.454 161.42 311.79 161.18 312.222C160.94 312.654 160.82 313.152 160.82 313.716C160.82 314.28 160.94 314.778 161.18 315.21C161.42 315.642 161.75 315.984 162.17 316.236C162.59 316.488 163.07 316.614 163.61 316.614C164.066 316.614 164.48 316.536 164.852 316.38C165.236 316.212 165.566 315.972 165.842 315.66L166.904 316.74C166.508 317.196 166.022 317.55 165.446 317.802C164.882 318.054 164.27 318.18 163.61 318.18ZM172.294 318.18C171.442 318.18 170.674 317.988 169.99 317.604C169.306 317.208 168.766 316.674 168.37 316.002C167.974 315.33 167.776 314.568 167.776 313.716C167.776 312.876 167.968 312.12 168.352 311.448C168.748 310.776 169.276 310.248 169.936 309.864C170.608 309.468 171.358 309.27 172.186 309.27C172.978 309.27 173.674 309.45 174.274 309.81C174.886 310.17 175.36 310.668 175.696 311.304C176.044 311.94 176.218 312.66 176.218 313.464C176.218 313.584 176.212 313.716 176.2 313.86C176.188 313.992 176.164 314.148 176.128 314.328H168.91V312.978H175.264L174.67 313.5C174.67 312.924 174.568 312.438 174.364 312.042C174.16 311.634 173.872 311.322 173.5 311.106C173.128 310.878 172.678 310.764 172.15 310.764C171.598 310.764 171.112 310.884 170.692 311.124C170.272 311.364 169.948 311.7 169.72 312.132C169.492 312.564 169.378 313.074 169.378 313.662C169.378 314.262 169.498 314.79 169.738 315.246C169.978 315.69 170.32 316.038 170.764 316.29C171.208 316.53 171.718 316.65 172.294 316.65C172.774 316.65 173.212 316.566 173.608 316.398C174.016 316.23 174.364 315.978 174.652 315.642L175.696 316.704C175.288 317.184 174.784 317.55 174.184 317.802C173.596 318.054 172.966 318.18 172.294 318.18ZM185.491 318.18C184.507 318.18 183.667 318 182.971 317.64C182.275 317.28 181.657 316.758 181.117 316.074L182.269 314.922C182.665 315.474 183.121 315.894 183.637 316.182C184.153 316.458 184.789 316.596 185.545 316.596C186.289 316.596 186.883 316.434 187.327 316.11C187.783 315.786 188.011 315.342 188.011 314.778C188.011 314.31 187.903 313.932 187.687 313.644C187.471 313.356 187.177 313.122 186.805 312.942C186.445 312.75 186.049 312.582 185.617 312.438C185.185 312.282 184.753 312.12 184.321 311.952C183.889 311.772 183.493 311.556 183.133 311.304C182.773 311.04 182.479 310.698 182.251 310.278C182.035 309.858 181.927 309.33 181.927 308.694C181.927 307.986 182.095 307.386 182.431 306.894C182.779 306.39 183.247 306.006 183.835 305.742C184.435 305.466 185.107 305.328 185.851 305.328C186.667 305.328 187.399 305.49 188.047 305.814C188.695 306.126 189.223 306.54 189.631 307.056L188.479 308.208C188.107 307.776 187.705 307.452 187.273 307.236C186.853 307.02 186.367 306.912 185.815 306.912C185.143 306.912 184.609 307.062 184.213 307.362C183.817 307.65 183.619 308.058 183.619 308.586C183.619 309.006 183.727 309.348 183.943 309.612C184.171 309.864 184.465 310.08 184.825 310.26C185.185 310.44 185.581 310.608 186.013 310.764C186.457 310.908 186.895 311.07 187.327 311.25C187.759 311.43 188.155 311.658 188.515 311.934C188.875 312.21 189.163 312.57 189.379 313.014C189.607 313.446 189.721 313.992 189.721 314.652C189.721 315.756 189.337 316.62 188.569 317.244C187.813 317.868 186.787 318.18 185.491 318.18ZM195.55 318.18C194.698 318.18 193.93 317.988 193.246 317.604C192.562 317.208 192.022 316.674 191.626 316.002C191.23 315.33 191.032 314.568 191.032 313.716C191.032 312.876 191.224 312.12 191.608 311.448C192.004 310.776 192.532 310.248 193.192 309.864C193.864 309.468 194.614 309.27 195.442 309.27C196.234 309.27 196.93 309.45 197.53 309.81C198.142 310.17 198.616 310.668 198.952 311.304C199.3 311.94 199.474 312.66 199.474 313.464C199.474 313.584 199.468 313.716 199.456 313.86C199.444 313.992 199.42 314.148 199.384 314.328H192.166V312.978H198.52L197.926 313.5C197.926 312.924 197.824 312.438 197.62 312.042C197.416 311.634 197.128 311.322 196.756 311.106C196.384 310.878 195.934 310.764 195.406 310.764C194.854 310.764 194.368 310.884 193.948 311.124C193.528 311.364 193.204 311.7 192.976 312.132C192.748 312.564 192.634 313.074 192.634 313.662C192.634 314.262 192.754 314.79 192.994 315.246C193.234 315.69 193.576 316.038 194.02 316.29C194.464 316.53 194.974 316.65 195.55 316.65C196.03 316.65 196.468 316.566 196.864 316.398C197.272 316.23 197.62 315.978 197.908 315.642L198.952 316.704C198.544 317.184 198.04 317.55 197.44 317.802C196.852 318.054 196.222 318.18 195.55 318.18ZM201.241 318V305.148H202.861V318H201.241ZM209.191 318.18C208.339 318.18 207.571 317.988 206.887 317.604C206.203 317.208 205.663 316.674 205.267 316.002C204.871 315.33 204.673 314.568 204.673 313.716C204.673 312.876 204.865 312.12 205.249 311.448C205.645 310.776 206.173 310.248 206.833 309.864C207.505 309.468 208.255 309.27 209.083 309.27C209.875 309.27 210.571 309.45 211.171 309.81C211.783 310.17 212.257 310.668 212.593 311.304C212.941 311.94 213.115 312.66 213.115 313.464C213.115 313.584 213.109 313.716 213.097 313.86C213.085 313.992 213.061 314.148 213.025 314.328H205.807V312.978H212.161L211.567 313.5C211.567 312.924 211.465 312.438 211.261 312.042C211.057 311.634 210.769 311.322 210.397 311.106C210.025 310.878 209.575 310.764 209.047 310.764C208.495 310.764 208.009 310.884 207.589 311.124C207.169 311.364 206.845 311.7 206.617 312.132C206.389 312.564 206.275 313.074 206.275 313.662C206.275 314.262 206.395 314.79 206.635 315.246C206.875 315.69 207.217 316.038 207.661 316.29C208.105 316.53 208.615 316.65 209.191 316.65C209.671 316.65 210.109 316.566 210.505 316.398C210.913 316.23 211.261 315.978 211.549 315.642L212.593 316.704C212.185 317.184 211.681 317.55 211.081 317.802C210.493 318.054 209.863 318.18 209.191 318.18ZM218.787 318.18C217.947 318.18 217.185 317.982 216.501 317.586C215.829 317.19 215.295 316.656 214.899 315.984C214.515 315.3 214.323 314.544 214.323 313.716C214.323 312.876 214.515 312.12 214.899 311.448C215.295 310.776 215.829 310.248 216.501 309.864C217.185 309.468 217.947 309.27 218.787 309.27C219.447 309.27 220.059 309.396 220.623 309.648C221.187 309.888 221.673 310.242 222.081 310.71L221.001 311.79C220.737 311.478 220.413 311.244 220.029 311.088C219.657 310.92 219.243 310.836 218.787 310.836C218.247 310.836 217.767 310.962 217.347 311.214C216.927 311.454 216.597 311.79 216.357 312.222C216.117 312.654 215.997 313.152 215.997 313.716C215.997 314.28 216.117 314.778 216.357 315.21C216.597 315.642 216.927 315.984 217.347 316.236C217.767 316.488 218.247 316.614 218.787 316.614C219.243 316.614 219.657 316.536 220.029 316.38C220.413 316.212 220.743 315.972 221.019 315.66L222.081 316.74C221.685 317.196 221.199 317.55 220.623 317.802C220.059 318.054 219.447 318.18 218.787 318.18ZM224.897 318V305.868H226.517V318H224.897ZM222.791 310.926V309.45H228.623V310.926H222.791ZM233.906 318.18C233.054 318.18 232.286 317.988 231.602 317.604C230.918 317.208 230.378 316.674 229.982 316.002C229.586 315.33 229.388 314.568 229.388 313.716C229.388 312.876 229.58 312.12 229.964 311.448C230.36 310.776 230.888 310.248 231.548 309.864C232.22 309.468 232.97 309.27 233.798 309.27C234.59 309.27 235.286 309.45 235.886 309.81C236.498 310.17 236.972 310.668 237.308 311.304C237.656 311.94 237.83 312.66 237.83 313.464C237.83 313.584 237.824 313.716 237.812 313.86C237.8 313.992 237.776 314.148 237.74 314.328H230.522V312.978H236.876L236.282 313.5C236.282 312.924 236.18 312.438 235.976 312.042C235.772 311.634 235.484 311.322 235.112 311.106C234.74 310.878 234.29 310.764 233.762 310.764C233.21 310.764 232.724 310.884 232.304 311.124C231.884 311.364 231.56 311.7 231.332 312.132C231.104 312.564 230.99 313.074 230.99 313.662C230.99 314.262 231.11 314.79 231.35 315.246C231.59 315.69 231.932 316.038 232.376 316.29C232.82 316.53 233.33 316.65 233.906 316.65C234.386 316.65 234.824 316.566 235.22 316.398C235.628 316.23 235.976 315.978 236.264 315.642L237.308 316.704C236.9 317.184 236.396 317.55 235.796 317.802C235.208 318.054 234.578 318.18 233.906 318.18ZM243.214 318.18C242.422 318.18 241.714 317.988 241.09 317.604C240.466 317.208 239.968 316.674 239.596 316.002C239.236 315.33 239.056 314.574 239.056 313.734C239.056 312.894 239.236 312.138 239.596 311.466C239.968 310.794 240.466 310.26 241.09 309.864C241.714 309.468 242.422 309.27 243.214 309.27C243.85 309.27 244.426 309.408 244.942 309.684C245.458 309.948 245.872 310.32 246.184 310.8C246.508 311.268 246.688 311.814 246.724 312.438V315.012C246.688 315.624 246.514 316.17 246.202 316.65C245.89 317.13 245.476 317.508 244.96 317.784C244.444 318.048 243.862 318.18 243.214 318.18ZM243.484 316.65C244.024 316.65 244.492 316.524 244.888 316.272C245.296 316.02 245.614 315.678 245.842 315.246C246.07 314.802 246.184 314.298 246.184 313.734C246.184 313.146 246.064 312.636 245.824 312.204C245.596 311.772 245.278 311.43 244.87 311.178C244.474 310.926 244.006 310.8 243.466 310.8C242.926 310.8 242.452 310.926 242.044 311.178C241.636 311.43 241.312 311.778 241.072 312.222C240.844 312.654 240.73 313.152 240.73 313.716C240.73 314.292 240.844 314.802 241.072 315.246C241.312 315.678 241.636 316.02 242.044 316.272C242.464 316.524 242.944 316.65 243.484 316.65ZM247.714 318H246.076V315.696L246.382 313.608L246.076 311.538V305.148H247.714V318Z" fill="black"/>
</svg>

                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col justify-start w-full gap-[10px]'>
                                <h1 className='text-primary font-[500]'>Complete {selectedService?.service.title}</h1>

                                <form className='flex flex-col gap-[10px] w-full' onSubmit={serviceFormik.handleSubmit}>
                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] font-[500]'>Service Description</span>
                                        <textarea
                                            name="description"
                                            value={serviceFormik.values.description}
                                            onChange={serviceFormik.handleChange}
                                            rows={4}
                                            className='p-4 bg-[#F9F9F9] rounded-[12px] text-[13px]'
                                            placeholder='Enter service description'
                                        />
                                        {serviceFormik.touched.description && serviceFormik.errors.description ? (
                                            <div className='text-red-500 text-[12px] px-4'>{serviceFormik.errors.description}</div>
                                        ) : null}
                                    </div>

                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] font-[500]'>Estimated Price</span>
                                        <input
                                            type="text"
                                            name="estimatedPrice"
                                            value={serviceFormik.values.estimatedPrice}
                                            onChange={serviceFormik.handleChange}
                                            className='p-4 bg-[#F9F9F9] rounded-[12px] text-[13px]'
                                            placeholder='Enter estimated price'
                                        />
                                        {serviceFormik.touched.estimatedPrice && serviceFormik.errors.estimatedPrice ? (
                                            <div className='text-red-500 text-[12px] px-4'>{serviceFormik.errors.estimatedPrice}</div>
                                        ) : null}
                                    </div>

                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] font-[500]'>Additional Info</span>
                                        <textarea
                                            name="additionalInfo"
                                            value={serviceFormik.values.additionalInfo}
                                            onChange={serviceFormik.handleChange}
                                            rows={4}
                                            className='p-4 bg-[#F9F9F9] rounded-[12px] text-[13px]'
                                            placeholder='Enter any additional information'
                                        />
                                    </div>

                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] font-[500]'>Additional Fees</span>
                                        {additionalFees.map((fee, index) => (
                                            <div key={index} className='flex flex-row items-center gap-[10px] mb-2'>
                                                <input
                                                    type="text"
                                                    value={fee.title}
                                                    onChange={(e) => handleFeeChange(index, 'title', e.target.value)}
                                                    className='p-3 bg-[#F9F9F9] rounded-[8px] text-[13px] w-1/2'
                                                    placeholder='Fee Name'
                                                />
                                                <input
                                                    type="number"
                                                    value={fee.fees}
                                                    onChange={(e) => handleFeeChange(index, 'fees', e.target.value)}
                                                    className='p-3 bg-[#F9F9F9] rounded-[8px] text-[13px] w-1/2'
                                                    placeholder='Amount'
                                                />
                                                <button type="button" onClick={() => handleRemoveFee(index)} className='text-red-500'><CiTrash color='brown' size={30} /></button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={handleAddFee} className='text-primary'>Add Another Fee</button>
                                    </div>

                                    <div className='flex flex-col'>
                                        <span className='text-[14px] font-[500]'>Upload Media</span>
                                        <label
                                            htmlFor='companyDocument'
                                            className={`flex flex-col justify-center items-center cursor-pointer py-4 rounded-[12px] border-[1.6px] border-dashed ${dragging ? 'border-primary' : 'border-[#BDBDBD]'} bg-white`}
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                        >
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.7236 17.4056C14.7366 17.4056 13.1188 19.0227 13.1188 21.0105V24.9739C13.1188 26.2902 14.1897 27.3601 15.5051 27.3601H25.0138C26.3293 27.3601 27.4 26.2902 27.4 24.9739V21.0032C27.4 19.6918 26.3334 18.6251 25.0228 18.6251H24.2561C23.9195 18.6251 23.6464 18.352 23.6464 18.0154C23.6464 17.6788 23.9195 17.4056 24.2561 17.4056H25.0228C27.0057 17.4056 28.6195 19.0194 28.6195 21.0032V24.9739C28.6195 26.9625 27.0017 28.5796 25.0138 28.5796H15.9651C13.9773 28.5796 12.3594 26.9625 12.3594 24.9739V21.0105C12.3594 19.0227 13.9773 17.4056 15.9651 17.4056H16.7236ZM20.9208 12.0622L23.2916 14.4427C23.529 14.6817 23.5282 15.0671 23.2899 15.3045C23.0509 15.5419 22.6656 15.5419 22.4282 15.3029L21.0984 13.9685L21.0989 22.8909H19.8794L19.8789 13.9685L18.5509 15.3029C18.4322 15.4232 18.2753 15.4825 18.1192 15.4825C17.9639 15.4825 17.8078 15.4232 17.6891 15.3045C17.4509 15.0671 17.4493 14.6817 17.6875 14.4427L20.0574 12.0622C20.2859 11.8321 20.6924 11.8321 20.9208 12.0622Z" fill="#7E7E7E" />
                                            </svg>
                                            <div className='flex flex-col'>
                                                <div className='flex flex-row items-center gap-[4px]'>
                                                    <span className='text-[14px] text-primary cursor-pointer'>Click to upload</span>
                                                    <span className='text-[14px] text-[#828282] cursor-pointer'>Or Drag and Drop</span>
                                                </div>
                                                <div className='flex flex-row items-center gap-[4px]'>
                                                    <span className='text-[12px] text-[#828282] cursor-pointer'>Maximum file size</span>
                                                    <span className='text-[12px] text-black cursor-pointer'>12mb</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className='w-full flex flex-row items-center justify-between px-4'>
                                        <input
                                            type="file"
                                            id='companyDocument'
                                            className='hidden'
                                            onChange={handleFileChange}
                                            accept=".png,.jpg,.jpeg,.svg,.ico"
                                        />
                                    </div>

                                    {uploadSuccess && <div className='text-green-500'>File uploaded successfully!</div>}

                                    <button type="submit" className='p-4 bg-primary flex items-center justify-center text-white font-[400] w-[250px] rounded-[20px] ml-auto'>
                                        {loading || uploading ? (
                                            <>
                                                <ReactLoading type='bubbles' color='#fff' width={24} height={24} />
                                                <span className='ml-2'>{loading ? "Saving..." : "Uploading..."}</span>
                                            </>
                                        ) : (
                                            <span>Proceed to next sevice</span>
                                        )}

                                    </button>

                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div>
                {isSucess && (
                    <SuccessPopup refetch={refetch} setIsSucess={setIsSucess} setSelectedServiceId={setSelectedServiceId} service={selectedService?.service.title} />
                )}

            </div>
        </div>
    );
};

export default ManageServiceDetails;
