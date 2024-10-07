import React, { useState } from 'react';
import ReactLoading from 'react-loading';

type Props = {
    CompanyBioMediaFormik: any;
    loading: boolean;
};

const CompanyBioMedia = ({ CompanyBioMediaFormik, loading }: Props) => {
    const [document, setDocument] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [dragging, setDragging] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);


    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];

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
        // Validate file type
        if (!allowedFileTypes.includes(file.type)) {
            setError("Invalid file type. Please upload a PDF, DOCX, PNG, or JPG file.");
            return;
        }
        setError(""); // Clear any existing errors

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
            CompanyBioMediaFormik.setFieldValue('companyLogo', data.secure_url);
            setUploadSuccess(true); 
        } catch (error) {
            setError("Image upload failed");
            setUploadSuccess(false);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[16px] text-[#E2B659] font-[500]'>Add Your Company Bio and Media</h1>
            <span className='text-[#13829F] font-[600] text-[16px]'>Tell us about your company and upload photos or videos to showcase your services."</span>
            <form onSubmit={CompanyBioMediaFormik.handleSubmit} className='flex flex-col gap-[10px] py-4'>
                <div className='flex flex-col gap-[4px]'>
                    <span className='text-[13px] text-black'>Campany bio</span>
                    <textarea
                        name="companyBio"
                        onChange={CompanyBioMediaFormik.handleChange}
                        value={CompanyBioMediaFormik.values.password}
                        id=""
                        className=' bg-[#FBFBFB] rounded-[20px] p-4 text-[13px] text-black'
                        placeholder='Enter Compnay Bio'></textarea>
                    {CompanyBioMediaFormik.touched.companyBio && CompanyBioMediaFormik.errors.companyBio ? (
                        <div className='text-red-500 text-[12px] px-4'>{CompanyBioMediaFormik.errors.companyBio}</div>
                    ) : null}

                </div>
                <div className='flex flex-col gap-[4px]'>
                    <span className='text-[13px] text-black'>Company Media</span>
                    <label
                        htmlFor='companyDocument'
                        className={`cursor-pointer w-full p-4 rounded-[40px] flex flex-row gap-[10px] items-center border-[2px] border-dashed ${dragging ? 'border-[#E7E7E7] bg-[#F5EEDC]' : 'border-[#E7E7E7]'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.5" r="20" fill="#F5EEDC" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7236 17.4056C17.0602 17.4056 17.3334 17.6788 17.3334 18.0154C17.3334 18.352 17.0602 18.6251 16.7236 18.6251H15.9651C14.6488 18.6251 13.5789 19.6951 13.5789 21.0105V24.9739C13.5789 26.2902 14.6488 27.3601 15.9651 27.3601H25.0138C26.3293 27.3601 27.4 26.2902 27.4 24.9739V21.0032C27.4 19.6918 26.3334 18.6251 25.0228 18.6251H24.2561C23.9195 18.6251 23.6464 18.352 23.6464 18.0154C23.6464 17.6788 23.9195 17.4056 24.2561 17.4056H25.0228C27.0057 17.4056 28.6195 19.0194 28.6195 21.0032V24.9739C28.6195 26.9625 27.0017 28.5796 25.0138 28.5796H15.9651C13.9773 28.5796 12.3594 26.9625 12.3594 24.9739V21.0105C12.3594 19.0227 13.9773 17.4056 15.9651 17.4056H16.7236ZM20.9208 12.0622L23.2916 14.4427C23.529 14.6817 23.5282 15.0671 23.2899 15.3045C23.0509 15.5419 22.6656 15.5419 22.4282 15.3029L21.0984 13.9685L21.0989 22.8909H19.8794L19.8789 13.9685L18.5509 15.3029C18.4322 15.4232 18.2753 15.4825 18.1192 15.4825C17.9639 15.4825 17.8078 15.4232 17.6891 15.3045C17.4509 15.0671 17.4493 14.6817 17.6875 14.4427L20.0574 12.0622C20.2859 11.8321 20.6924 11.8321 20.9208 12.0622Z" fill="#7E7E7E" />
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
                    {CompanyBioMediaFormik.touched.companyLogo && CompanyBioMediaFormik.errors.companyLogo ? (
                        <div className='text-red-500 text-[12px] px-4'>{CompanyBioMediaFormik.errors.companyLogo}</div>
                    ) : null}
                </div>

                <div className='w-full flex flex-row items-center justify-between px-4'>
                    <input
                        type="file"
                        id='companyDocument'
                        className='hidden'
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.png,.jpg,.jpeg" // Accept only PDF, DOCX, PNG, JPG/JPEG
                    />
                </div>

                {error && <div className='text-red-500 text-sm'>{error}</div>} {/* Display error message */}

                {uploadSuccess && <div className='text-green-500 text-sm'>File uploaded successfully!</div>} {/* Display success message */}

                <div className='flex flex-col gap-[4px]'>
                    <button type='submit' className='w-full flex items-center justify-center h-[50px] rounded-[24px] bg-[#1990AF] text-white'>
                        {loading || uploading ? ( 
                            <>
                                <ReactLoading type='bubbles' color='#fff' width={24} height={24} />
                                <span className='ml-2'>Uploading...</span>
                            </>
                        ) : (
                            <span>Continue</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyBioMedia;
