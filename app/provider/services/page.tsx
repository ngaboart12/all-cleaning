"use client"
import { fetchBaseServiceQuery, useFetchProviderServicesQuery } from '@/app/hooks/services.hook';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/saga-blue/theme.css'
import { useFormik } from 'formik';
import { AdditionalFee, FormValues } from '@/lib/types/forms.type';
import { CompleteServiceValidation } from '@/lib/validation/formikSchema';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { CiTrash } from 'react-icons/ci';
import { array } from 'yup';

const Menu = (className: any) => {
  return (
    <div className={`bg-white shadow absolute right-6 top-10 p-2 px-4 rounded-[6px] flex flex-col gap-[4px] items-start`}>
      <button className='text-[13px] text-primary font-[700]'>View</button>
      <button className='text-[13px] text-green-600 font-[700]'>Update</button>
      <button className='text-[13px] text-red-500 font-[700]'>Delete</button>
    </div>
  )
}
interface ActiveService {
  id: string
}

const ServicesPage = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState<number | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState<ActiveService>({ id: "" })
  const [dragging, setDragging] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSucess, setIsSucess] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const generateRandomId = () => Date.now().toString();




  const token: any = session?.user.token;
  // const { isLoading: loadingService, data: services = [], error: fetchError, refetch } = useFetchProviderServicesQuery(token);
  // const { isLoading: isFetching, data: baseServices, isError, error } = fetchBaseServiceQuery();

  const [additionalFees, setAdditionalFees] = useState([{ id: generateRandomId(), title: '', fees: '' }]);

  const handelOpenMenu = (index: number) => {
    setMenuOpen(index)
    setIsOpen(!isOpen)

  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // handleUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      // handleUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

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
    }
  });

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
    <>
      <div className='flex flex-col py-24 min-h-screen  bg-[#F8F8F8] gap-[10px] px-[10px] md:px-[50px] lg:px-[100px]'>
        <div className='flex flex-row gap-[10px] justify-between bg-white rounded-[12px] p-4 px-6 items-center'>
          <div className='flex flex-row gap-[10px] items-center'>
            <span className='text-[16px] font-[600]'>Services</span>
            <div className='p-2 bg-primary rounded-[4px]'>
              <h1 className='text-[13px] text-white'>4</h1>
            </div>
          </div>
          <button onClick={() => setVisible(true)} className='flex flex-row gap-[10px] p-3 px-[20px] rounded-[4px] bg-primary'>
            <span className='text-white text-[14px]'>+</span>
            <span className='text-[14px] font-[400] text-white'>Add New Service</span>
          </button>
        </div>
        {/* <div className='w-full items-center justify-center flex bg-white rounded-[12px] py-4'>
          <svg width="355" height="355" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="177" cy="178" r="53.5" stroke="black" />
            <circle cx="177" cy="178" r="92.5" stroke="black" stroke-opacity="0.4" />
            <circle cx="177.5" cy="177.5" r="132" stroke="black" stroke-opacity="0.3" />
            <circle cx="177.5" cy="177.5" r="177" stroke="black" stroke-opacity="0.1" />
            <rect width="46" height="46" transform="translate(159 157)" fill="white" />
            <path d="M180.667 171.333H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
            <path d="M173.2 186.524C174.622 187.476 175.333 187.952 175.333 188.667C175.333 189.381 174.622 189.858 173.2 190.81C171.778 191.763 171.067 192.239 170.533 191.882C170 191.524 170 190.572 170 188.667C170 186.762 170 185.809 170.533 185.452C171.067 185.095 171.778 185.571 173.2 186.524Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
            <path d="M173.2 169.19C174.622 170.143 175.333 170.619 175.333 171.333C175.333 172.048 174.622 172.524 173.2 173.476C171.778 174.429 171.067 174.905 170.533 174.548C170 174.191 170 173.238 170 171.333C170 169.428 170 168.476 170.533 168.119C171.067 167.761 171.778 168.238 173.2 169.19Z" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
            <path d="M180.667 180H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
            <path d="M180.667 188.667H194" stroke="#E2B659" stroke-width="1.5" stroke-linecap="round" />
            <rect x="217" y="164" width="30" height="30" rx="8" fill="#F8F8F8" />
            <path d="M234 172.667V173.667C234 174.609 234 175.081 234.293 175.374C234.586 175.667 235.057 175.667 236 175.667H237" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M226.667 181.667V176.333C226.667 174.448 226.667 173.505 227.253 172.919C227.839 172.333 228.781 172.333 230.667 172.333H233.448C233.721 172.333 233.857 172.333 233.979 172.384C234.102 172.435 234.198 172.531 234.391 172.724L236.943 175.276C237.136 175.469 237.232 175.565 237.283 175.688C237.334 175.81 237.334 175.947 237.334 176.219V181.667C237.334 183.552 237.334 184.495 236.748 185.081C236.162 185.667 235.219 185.667 233.334 185.667H230.667C228.781 185.667 227.839 185.667 227.253 185.081C226.667 184.495 226.667 183.552 226.667 181.667Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M229.333 178.333H234.666M229.333 180.333H234.666M229.333 182.333H232.114" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="112" y="145" width="30" height="30" rx="8" fill="#F8F8F8" />
            <path d="M129 153.667V154.667C129 155.609 129 156.081 129.293 156.374C129.586 156.667 130.057 156.667 131 156.667H132" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M121.667 162.667V157.333C121.667 155.448 121.667 154.505 122.253 153.919C122.839 153.333 123.781 153.333 125.667 153.333H128.448C128.721 153.333 128.857 153.333 128.979 153.384C129.102 153.435 129.198 153.531 129.391 153.724L131.943 156.276C132.136 156.469 132.232 156.565 132.283 156.688C132.334 156.81 132.334 156.947 132.334 157.219V162.667C132.334 164.552 132.334 165.495 131.748 166.081C131.162 166.667 130.219 166.667 128.334 166.667H125.667C123.781 166.667 122.839 166.667 122.253 166.081C121.667 165.495 121.667 164.552 121.667 162.667Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M124.333 159.333H129.666M124.333 161.333H129.666M124.333 163.333H127.114" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="173" y="258" width="30" height="30" rx="8" fill="#F8F8F8" />
            <path d="M190 266.667V267.667C190 268.609 190 269.081 190.293 269.374C190.586 269.667 191.057 269.667 192 269.667H193" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M182.667 275.667V270.333C182.667 268.448 182.667 267.505 183.253 266.919C183.839 266.333 184.781 266.333 186.667 266.333H189.448C189.721 266.333 189.857 266.333 189.979 266.384C190.102 266.435 190.198 266.531 190.391 266.724L192.943 269.276C193.136 269.469 193.232 269.565 193.283 269.688C193.334 269.81 193.334 269.947 193.334 270.219V275.667C193.334 277.552 193.334 278.495 192.748 279.081C192.162 279.667 191.219 279.667 189.334 279.667H186.667C184.781 279.667 183.839 279.667 183.253 279.081C182.667 278.495 182.667 277.552 182.667 275.667Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M185.333 272.333H190.666M185.333 274.333H190.666M185.333 276.333H188.114" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="34" y="178" width="28" height="28" rx="8" fill="#F8F8F8" />
            <path d="M49.75 186.458V187.333C49.75 188.158 49.75 188.571 50.0063 188.827C50.2626 189.083 50.675 189.083 51.5 189.083H52.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M43.333 194.333V189.667C43.333 188.017 43.333 187.192 43.8456 186.679C44.3581 186.167 45.1831 186.167 46.833 186.167H49.2664C49.5048 186.167 49.6241 186.167 49.7313 186.211C49.8385 186.255 49.9228 186.34 50.0914 186.508L52.3246 188.741C52.4932 188.91 52.5776 188.994 52.6219 189.102C52.6663 189.209 52.6663 189.328 52.6663 189.566V194.333C52.6663 195.983 52.6663 196.808 52.1538 197.321C51.6412 197.833 50.8162 197.833 49.1663 197.833H46.833C45.1831 197.833 44.3581 197.833 43.8456 197.321C43.333 196.808 43.333 195.983 43.333 194.333Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M45.667 191.417H50.3337M45.667 193.167H50.3337M45.667 194.917H48.1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="287" y="117" width="28" height="28" rx="8" fill="#F8F8F8" />
            <path d="M302.75 125.458V126.333C302.75 127.158 302.75 127.571 303.006 127.827C303.263 128.083 303.675 128.083 304.5 128.083H305.375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M296.333 133.333V128.667C296.333 127.017 296.333 126.192 296.846 125.679C297.358 125.167 298.183 125.167 299.833 125.167H302.266C302.505 125.167 302.624 125.167 302.731 125.211C302.838 125.255 302.923 125.34 303.091 125.508L305.325 127.741C305.493 127.91 305.578 127.994 305.622 128.102C305.666 128.209 305.666 128.328 305.666 128.566V133.333C305.666 134.983 305.666 135.808 305.154 136.321C304.641 136.833 303.816 136.833 302.166 136.833H299.833C298.183 136.833 297.358 136.833 296.846 136.321C296.333 135.808 296.333 134.983 296.333 133.333Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M298.667 130.417H303.334M298.667 132.167H303.334M298.667 133.917H301.1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="74" y="187" width="30" height="30" rx="8" fill="#F8F8F8" />
            <path d="M91 195.667V196.667C91 197.609 91 198.081 91.2929 198.374C91.5858 198.667 92.0572 198.667 93 198.667H94" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M83.667 204.667V199.333C83.667 197.448 83.667 196.505 84.2528 195.919C84.8386 195.333 85.7814 195.333 87.667 195.333H90.4481C90.7205 195.333 90.8568 195.333 90.9793 195.384C91.1018 195.435 91.1982 195.531 91.3909 195.724L93.9431 198.276C94.1358 198.469 94.2322 198.565 94.2829 198.688C94.3337 198.81 94.3337 198.947 94.3337 199.219V204.667C94.3337 206.552 94.3337 207.495 93.7479 208.081C93.1621 208.667 92.2193 208.667 90.3337 208.667H87.667C85.7814 208.667 84.8386 208.667 84.2528 208.081C83.667 207.495 83.667 206.552 83.667 204.667Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M86.333 201.333H91.6663M86.333 203.333H91.6663M86.333 205.333H89.1135" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="167" y="72" width="30" height="30" rx="8" fill="#F8F8F8" />
            <path d="M184 80.6665V81.6665C184 82.6093 184 83.0807 184.293 83.3736C184.586 83.6665 185.057 83.6665 186 83.6665H187" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M176.667 89.6668V84.3335C176.667 82.4479 176.667 81.5051 177.253 80.9193C177.839 80.3335 178.781 80.3335 180.667 80.3335H183.448C183.721 80.3335 183.857 80.3335 183.979 80.3842C184.102 80.435 184.198 80.5313 184.391 80.724L186.943 83.2763C187.136 83.469 187.232 83.5653 187.283 83.6878C187.334 83.8104 187.334 83.9466 187.334 84.2191V89.6668C187.334 91.5524 187.334 92.4952 186.748 93.081C186.162 93.6668 185.219 93.6668 183.334 93.6668H180.667C178.781 93.6668 177.839 93.6668 177.253 93.081C176.667 92.4952 176.667 91.5524 176.667 89.6668Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M179.333 86.3335H184.666M179.333 88.3335H184.666M179.333 90.3335H182.114" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="66.5" y="300" width="230" height="55" rx="8" fill="#F2FCFF" />
            <path d="M124.868 334V321.4H126.308L126.938 323.776V334H124.868ZM133.598 334L126.056 324.154L126.308 321.4L133.85 331.246L133.598 334ZM133.598 334L132.968 331.786V321.4H135.038V334H133.598ZM141.46 334.18C140.62 334.18 139.858 333.982 139.174 333.586C138.49 333.178 137.944 332.632 137.536 331.948C137.14 331.264 136.942 330.502 136.942 329.662C136.942 328.822 137.14 328.066 137.536 327.394C137.944 326.722 138.49 326.188 139.174 325.792C139.858 325.384 140.62 325.18 141.46 325.18C142.312 325.18 143.08 325.378 143.764 325.774C144.448 326.17 144.988 326.71 145.384 327.394C145.792 328.066 145.996 328.822 145.996 329.662C145.996 330.502 145.792 331.264 145.384 331.948C144.988 332.632 144.448 333.178 143.764 333.586C143.08 333.982 142.312 334.18 141.46 334.18ZM141.46 332.272C141.952 332.272 142.384 332.164 142.756 331.948C143.14 331.72 143.434 331.408 143.638 331.012C143.854 330.616 143.962 330.166 143.962 329.662C143.962 329.158 143.854 328.714 143.638 328.33C143.422 327.946 143.128 327.646 142.756 327.43C142.384 327.202 141.952 327.088 141.46 327.088C140.98 327.088 140.548 327.202 140.164 327.43C139.792 327.646 139.498 327.946 139.282 328.33C139.078 328.714 138.976 329.158 138.976 329.662C138.976 330.166 139.078 330.616 139.282 331.012C139.498 331.408 139.792 331.72 140.164 331.948C140.548 332.164 140.98 332.272 141.46 332.272ZM154.072 334.18C153.592 334.18 153.13 334.12 152.686 334C152.242 333.868 151.834 333.688 151.462 333.46C151.09 333.22 150.766 332.932 150.49 332.596L151.75 331.336C152.05 331.684 152.392 331.948 152.776 332.128C153.172 332.296 153.616 332.38 154.108 332.38C154.552 332.38 154.888 332.314 155.116 332.182C155.344 332.05 155.458 331.858 155.458 331.606C155.458 331.342 155.35 331.138 155.134 330.994C154.918 330.85 154.636 330.73 154.288 330.634C153.952 330.526 153.592 330.418 153.208 330.31C152.836 330.202 152.476 330.058 152.128 329.878C151.792 329.686 151.516 329.428 151.3 329.104C151.084 328.78 150.976 328.36 150.976 327.844C150.976 327.292 151.102 326.818 151.354 326.422C151.618 326.026 151.984 325.72 152.452 325.504C152.932 325.288 153.502 325.18 154.162 325.18C154.858 325.18 155.47 325.306 155.998 325.558C156.538 325.798 156.988 326.164 157.348 326.656L156.088 327.916C155.836 327.604 155.548 327.37 155.224 327.214C154.9 327.058 154.528 326.98 154.108 326.98C153.712 326.98 153.406 327.04 153.19 327.16C152.974 327.28 152.866 327.454 152.866 327.682C152.866 327.922 152.974 328.108 153.19 328.24C153.406 328.372 153.682 328.486 154.018 328.582C154.366 328.678 154.726 328.786 155.098 328.906C155.482 329.014 155.842 329.17 156.178 329.374C156.526 329.566 156.808 329.83 157.024 330.166C157.24 330.49 157.348 330.916 157.348 331.444C157.348 332.284 157.054 332.95 156.466 333.442C155.878 333.934 155.08 334.18 154.072 334.18ZM162.995 334.18C162.131 334.18 161.351 333.988 160.655 333.604C159.971 333.208 159.425 332.668 159.017 331.984C158.621 331.3 158.423 330.532 158.423 329.68C158.423 328.828 158.621 328.066 159.017 327.394C159.413 326.71 159.947 326.17 160.619 325.774C161.303 325.378 162.059 325.18 162.887 325.18C163.691 325.18 164.399 325.366 165.011 325.738C165.635 326.11 166.121 326.62 166.469 327.268C166.829 327.916 167.009 328.654 167.009 329.482C167.009 329.626 166.997 329.776 166.973 329.932C166.961 330.076 166.937 330.238 166.901 330.418H159.809V328.798H165.875L165.137 329.446C165.113 328.918 165.011 328.474 164.831 328.114C164.651 327.754 164.393 327.478 164.057 327.286C163.733 327.094 163.331 326.998 162.851 326.998C162.347 326.998 161.909 327.106 161.537 327.322C161.165 327.538 160.877 327.844 160.673 328.24C160.469 328.624 160.367 329.086 160.367 329.626C160.367 330.166 160.475 330.64 160.691 331.048C160.907 331.456 161.213 331.774 161.609 332.002C162.005 332.218 162.461 332.326 162.977 332.326C163.421 332.326 163.829 332.248 164.201 332.092C164.585 331.936 164.909 331.708 165.173 331.408L166.433 332.686C166.013 333.178 165.503 333.55 164.903 333.802C164.303 334.054 163.667 334.18 162.995 334.18ZM168.596 334V325.36H170.576V334H168.596ZM170.576 329.194L169.892 328.852C169.892 327.76 170.132 326.878 170.612 326.206C171.104 325.522 171.842 325.18 172.826 325.18C173.258 325.18 173.648 325.258 173.996 325.414C174.344 325.57 174.668 325.822 174.968 326.17L173.672 327.502C173.516 327.334 173.342 327.214 173.15 327.142C172.958 327.07 172.736 327.034 172.484 327.034C171.932 327.034 171.476 327.208 171.116 327.556C170.756 327.904 170.576 328.45 170.576 329.194ZM178.719 334L174.777 325.36H176.973L179.979 332.398H178.683L181.707 325.36H183.813L179.871 334H178.719ZM184.997 334V325.36H186.977V334H184.997ZM185.987 323.776C185.651 323.776 185.369 323.662 185.141 323.434C184.925 323.206 184.817 322.924 184.817 322.588C184.817 322.252 184.925 321.97 185.141 321.742C185.369 321.514 185.651 321.4 185.987 321.4C186.335 321.4 186.617 321.514 186.833 321.742C187.049 321.97 187.157 322.252 187.157 322.588C187.157 322.924 187.049 323.206 186.833 323.434C186.617 323.662 186.335 323.776 185.987 323.776ZM193.176 334.18C192.324 334.18 191.55 333.982 190.854 333.586C190.17 333.19 189.63 332.65 189.234 331.966C188.838 331.282 188.64 330.52 188.64 329.68C188.64 328.828 188.838 328.066 189.234 327.394C189.63 326.71 190.17 326.17 190.854 325.774C191.55 325.378 192.324 325.18 193.176 325.18C193.848 325.18 194.472 325.312 195.048 325.576C195.636 325.828 196.134 326.194 196.542 326.674L195.246 327.988C194.994 327.688 194.688 327.466 194.328 327.322C193.98 327.166 193.596 327.088 193.176 327.088C192.684 327.088 192.246 327.202 191.862 327.43C191.49 327.646 191.196 327.946 190.98 328.33C190.776 328.714 190.674 329.164 190.674 329.68C190.674 330.184 190.776 330.634 190.98 331.03C191.196 331.414 191.49 331.72 191.862 331.948C192.246 332.164 192.684 332.272 193.176 332.272C193.596 332.272 193.98 332.2 194.328 332.056C194.688 331.9 194.994 331.672 195.246 331.372L196.542 332.686C196.134 333.166 195.636 333.538 195.048 333.802C194.472 334.054 193.848 334.18 193.176 334.18ZM201.807 334.18C200.943 334.18 200.163 333.988 199.467 333.604C198.783 333.208 198.237 332.668 197.829 331.984C197.433 331.3 197.235 330.532 197.235 329.68C197.235 328.828 197.433 328.066 197.829 327.394C198.225 326.71 198.759 326.17 199.431 325.774C200.115 325.378 200.871 325.18 201.699 325.18C202.503 325.18 203.211 325.366 203.823 325.738C204.447 326.11 204.933 326.62 205.281 327.268C205.641 327.916 205.821 328.654 205.821 329.482C205.821 329.626 205.809 329.776 205.785 329.932C205.773 330.076 205.749 330.238 205.713 330.418H198.621V328.798H204.687L203.949 329.446C203.925 328.918 203.823 328.474 203.643 328.114C203.463 327.754 203.205 327.478 202.869 327.286C202.545 327.094 202.143 326.998 201.663 326.998C201.159 326.998 200.721 327.106 200.349 327.322C199.977 327.538 199.689 327.844 199.485 328.24C199.281 328.624 199.179 329.086 199.179 329.626C199.179 330.166 199.287 330.64 199.503 331.048C199.719 331.456 200.025 331.774 200.421 332.002C200.817 332.218 201.273 332.326 201.789 332.326C202.233 332.326 202.641 332.248 203.013 332.092C203.397 331.936 203.721 331.708 203.985 331.408L205.245 332.686C204.825 333.178 204.315 333.55 203.715 333.802C203.115 334.054 202.479 334.18 201.807 334.18ZM217.406 334.09L213.716 325.36H215.894L218.414 331.768H217.784L220.448 325.36H222.644L218.63 334.09H217.406ZM214.832 337.6L217.514 332.074L218.63 334.09L217.028 337.6H214.832ZM227.507 334.18C226.643 334.18 225.863 333.988 225.167 333.604C224.483 333.208 223.937 332.668 223.529 331.984C223.133 331.3 222.935 330.532 222.935 329.68C222.935 328.828 223.133 328.066 223.529 327.394C223.925 326.71 224.459 326.17 225.131 325.774C225.815 325.378 226.571 325.18 227.399 325.18C228.203 325.18 228.911 325.366 229.523 325.738C230.147 326.11 230.633 326.62 230.981 327.268C231.341 327.916 231.521 328.654 231.521 329.482C231.521 329.626 231.509 329.776 231.485 329.932C231.473 330.076 231.449 330.238 231.413 330.418H224.321V328.798H230.387L229.649 329.446C229.625 328.918 229.523 328.474 229.343 328.114C229.163 327.754 228.905 327.478 228.569 327.286C228.245 327.094 227.843 326.998 227.363 326.998C226.859 326.998 226.421 327.106 226.049 327.322C225.677 327.538 225.389 327.844 225.185 328.24C224.981 328.624 224.879 329.086 224.879 329.626C224.879 330.166 224.987 330.64 225.203 331.048C225.419 331.456 225.725 331.774 226.121 332.002C226.517 332.218 226.973 332.326 227.489 332.326C227.933 332.326 228.341 332.248 228.713 332.092C229.097 331.936 229.421 331.708 229.685 331.408L230.945 332.686C230.525 333.178 230.015 333.55 229.415 333.802C228.815 334.054 228.179 334.18 227.507 334.18ZM234.193 334V321.76H236.173V334H234.193ZM232.123 327.16V325.36H238.243V327.16H232.123Z" fill="#13829F" />
          </svg>


        </div> */}

        <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg  :grid-cols-3 gap-[10px]'>
          {Array.of(1,2,3,4).map(() => {
            return (
              <>


                <div className='flex flex-col gap-[4px] bg-white rounded-[12px] p-4 relative' >
                  <div className='flex flex-row justify-between items-center'>
                    <span className='text-[13px] font-[600]'>{`Deep cleaning`}</span>
                    <div className=' cursor-pointer'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12Z" fill="black" />
                      <path d="M9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5Z" fill="black" />
                      <path d="M9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z" fill="black" />
                    </svg>
                    </div>
                  </div>

                  <div className='flex flex-row text-[#ABABAB] gap-[10px] items-center'>
                    <span className='text-[14px]'>Ceated on :</span>
                    <span className='text-[14px]'>{`20 july 2023`}</span>
                  </div>
                  <div className='flex flex-row gap-[10px]'>
                    <div className='w-full p-4 bg-[#F8F8F8] flex flex-col rounded-[6px]'>
                      <span className='text-[12px] text-[#A39F9F] font-[400]'>Price</span>
                      <h1 className='font-[700]'>$ {200.6} <span className='text-[12px] font-[400]'>/ per Hour</span></h1>
                    </div>
                    <div className='w-full p-4 bg-[#F8F8F8] flex flex-col rounded-[6px]'>
                      <span className='text-[12px] text-[#A39F9F] font-[400]'>Revenue</span>
                      <h1 className='font-[700]'>$ 100</h1>
                    </div>
                    <div className='w-full p-4 bg-[#F8F8F8] flex flex-col rounded-[6px]'>
                      <span className='text-[12px] text-[#A39F9F] font-[400]'>Bookings</span>
                      <h1 className='font-[700]'>$ 200</h1>
                    </div>
                  </div>

                </div>
              </>
            )

          })}
        </div>





        <Dialog header="New Service"
          visible={visible}
          className='w-1/2'
          headerClassName='text-[#32343A] text-[32px]'
          modal
          onHide={() => setVisible(false)}>
          <form onSubmit={serviceFormik.handleSubmit} className='flex flex-col gap-[10px]'>
            <div className='grid grid-cols-3  gap-[4px]'>
              {/* {!isFetching && (
                baseServices.map((service: any, index: number) => {
                  return (
                    <div onClick={() => setIsActive({ id: service.id })} key={index} className={`p-2 ${isActive?.id == service.id ? "bg-primary text-white" : "bg-[#fafafa] text-black/80"}   flex items-center justify-center cursor-pointer hover:scale-95  duration-300 rounded-[2px]`}>
                      <span>{service.title}</span>
                    </div>
                  )

                })
              )} */}

            </div>
            <div className='flex flex-col gap-[10px] w-full'>
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

            </div>

          </form>
        </Dialog>
      </div>
    </>
  )
}

export default ServicesPage