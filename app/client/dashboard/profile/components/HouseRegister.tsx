import { propertyType } from '@/lib/types/types.type'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Dialog } from 'primereact/dialog';
import React, { useCallback, useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useCreatePropertyMutation } from '@/app/hooks/users.hook';
import { useSession } from 'next-auth/react';
import { HouseRegisterSchema } from '@/lib/validation/formikSchema';




interface Location {
    lat: number;
    lng: number;
    address: string;
}

const HouseRegister = () => {
    const { data: session, status } = useSession();
    const [visible, setVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [inputsDisabled, setInputsDisabled] = useState(true);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
    const [document, setDocument] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false)

    const { mutate: createProperty, isPending } = useCreatePropertyMutation();

    const [mapCenter, setMapCenter] = useState({
        lat: 40.7128,
        lng: -74.006,
    });

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
        libraries: ["places"],
    });

    const HouseFormik = useFormik({
        initialValues: {
            name: '',
            type: '',
            numberOfRooms: Number(),
            numberOfBathrooms: Number(),
            numberOfBedrooms: Number(),
            parkingInstructions: '',
            size: Number(),
            numberOfWindows: Number(),
            photos: [],
            additionalInfo: {
                comment: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
                country: '',
                longitude: Number(''),
                latitude: Number(''),
                postalCode: ''
            }

        },
        validationSchema: HouseRegisterSchema,
        onSubmit: async (values) => {
            setLoading(true)
            try {
                const createPropertyArgs = {
                    propertyType: values,
                    token: session?.user.token || "",
                };

                createProperty(createPropertyArgs, {
                    onSuccess: () => {
                        setLoading(false)
                        setSelectedLocation(null)
                        HouseFormik.resetForm()
                    },
                    onError: (error) => {
                        setLoading(false)
                        HouseFormik.resetForm()
                        setSelectedLocation(null)
                        setError(error.message)


                    }
                })

            } catch (error) {

            }
        }
    })

    const handleMapClick = useCallback(
        (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;

            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            const newLocation = {
                lat,
                lng,
                address: "Loading...",
            };
            setSelectedLocation(newLocation);

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === "OK" && results?.[0]) {
                    setSelectedLocation({
                        lat,
                        lng,
                        address: results[0].formatted_address,
                    });
                    setInputsDisabled(false);
                }
            });
        },
        []
    );

    useEffect(() => {
        if (selectedLocation) {
            HouseFormik.setValues({
                ...HouseFormik.values,
                address: {
                    country: selectedLocation.address.split(',')[3],
                    city: selectedLocation.address.split(',')[1],
                    state: selectedLocation.address.split(',')[2],
                    street: selectedLocation.address.split(',')[0],
                    postalCode: selectedLocation.address.split(',')[2],
                    longitude: selectedLocation.lng,
                    latitude: selectedLocation.lat,
                }
            });
        }
    }, [selectedLocation]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            handleUpload(files);
        }
    };

    const handleUpload = async (files: FileList) => {
        setUploading(true);
        const uploadedUrls: string[] = [];
        const formData = new FormData();

        for (const file of Array.from(files)) {
            formData.append('file', file);
            formData.append('upload_preset', 'all-cleaning');

            try {
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_SECRET}/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );
                const data = await response.json();
                uploadedUrls.push(data.secure_url);
            } catch (error) {
                setError("One or more files failed to upload");
            }
        }

        HouseFormik.setFieldValue('photos', [...HouseFormik.values.photos, ...uploadedUrls]);
        setUploadSuccess(true);
        setUploading(false);
    };

    return (
        <div className='flex flex-col gap-[20px] w-full'>
            <h1 className='text-[16px] font-[600] text-black'>Register Your House for Easy Cleaning Management</h1>
            <div className='flex flex-col   gap-[10px]'>
                <div className=' grid grid-cols-3 gap-[10px]'>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Property Type</h1>
                        <select
                            name="type"
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.type}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                        >
                            <option value="" disabled>
                                Select property type
                            </option>
                            <option value={`HOUSE`}>{`HOUSE`}</option>
                            <option value={`APARTMENT`}>{`APARTMENT`}</option>
                            <option value={`OFFICE`}>{`OFFICE`}</option>
                        </select>
                        {HouseFormik.touched.type && HouseFormik.errors.type && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.type}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Property Name</h1>
                        <input
                            type="text"
                            name='name'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.name}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Property Name'
                        />
                        {HouseFormik.touched.name && HouseFormik.errors.name && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.name}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Number Of Rooms</h1>
                        <input
                            type="number"
                            name='numberOfRooms'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.numberOfRooms}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Number of Rooms'
                        />
                        {HouseFormik.touched.numberOfRooms && HouseFormik.errors.numberOfRooms && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfRooms}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Number Of Bathrooms</h1>
                        <input
                            type="number"
                            name='numberOfBathrooms'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.numberOfBathrooms}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Number of bath rooms'
                        />
                        {HouseFormik.touched.numberOfRooms && HouseFormik.errors.numberOfBathrooms && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfBathrooms}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Number Of Windows</h1>
                        <input
                            type="number"
                            name='numberOfWindows'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.numberOfWindows}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Number of windows'
                        />
                        {HouseFormik.touched.numberOfWindows && HouseFormik.errors.numberOfWindows && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.numberOfWindows}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Size of property ()m<sup>2</sup></h1>
                        <input
                            type="number"
                            name='size'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.size}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Size of property (m2)'
                        />
                        {HouseFormik.touched.size && HouseFormik.errors.size && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.size}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[14px]'>Parking Instructions</h1>
                        <input
                            type="text"
                            name='parkingInstructions'
                            onChange={HouseFormik.handleChange}
                            onBlur={HouseFormik.handleBlur}
                            value={HouseFormik.values.parkingInstructions}
                            className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                            placeholder='Enter Parking Instruction'
                        />
                        {HouseFormik.touched.parkingInstructions && HouseFormik.errors.parkingInstructions && (
                            <div className="text-red-500 text-[10px]">{HouseFormik.errors.parkingInstructions}</div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>

                    <h1 className='text-[14px] font-[700] text-black'>Locations</h1>
                    <div className='flex'>
                        <div
                            onClick={() => setVisible(true)}
                            className="flex hover:scale-90 duration-300 transition-all flex-row items-center gap-[10px] p-3 rounded-[6px] justify-center cursor-pointer bg-primary text-white"
                        >
                            <span>
                                <CiLocationOn size={25} />
                            </span>
                            <span>Click To Pick Location</span>
                        </div>
                    </div>
                    <div className=' flex flex-row items-center gap-[10px] py-4'>
                        {selectedLocation?.address && (
                            <>

                                <span className='text-[16px] font-[700]'>Your location:</span><span>{selectedLocation?.address}</span>
                            </>
                        )}

                    </div>
                    {HouseFormik.touched.address && HouseFormik.errors.address && (
                        <div className="text-red-500 text-[10px]">Please select your location</div>
                    )}

                </div>
                <div className='flex flex-col gap-[10px]'>
                    <span className='text-[14px]'>Addition Info</span>
                    <textarea
                        name='additionalInfo.comment'
                        onChange={HouseFormik.handleChange}
                        onBlur={HouseFormik.handleBlur}
                        value={HouseFormik.values.additionalInfo.comment}
                        className='w-full p-3 border outline-none rounded-[12px] text-[12px]'
                        placeholder='Enter Parking Instruction'
                    />
                </div>
                <input multiple onChange={handleFileChange} type="file" accept="image/*" name='files' id='photos' className='hidden' />
                <label htmlFor='photos' className=' text-white cursor-pointer w-[200px] text-[14px] hover:scale-90 duration-300 transition-all flex-row px-10 py-4 rounded-[6px] bg-primary flex items-center justify-center'>Attach Photo +</label>
                {uploadSuccess && (<span className=' text-[12px] text-green-500'>File Uploaded successfully</span>)}
                <button onClick={() => HouseFormik.handleSubmit()} className='text-[14px] bg-primary  text-white rounded-[12px] py-3'>
                    {uploading ? (
                        "Uploading..."

                    ) : loading ? "Loading..." : "Create Property"}
                </button>

            </div>
            <Dialog
                header="Pick your location"
                visible={visible}
                style={{ width: "50vw" }}
                onHide={() => setVisible(false)}
            >
                <div className="w-full flex flex-col gap-[10px]">
                    <GoogleMap
                        mapContainerClassName="w-full h-[400px]"
                        center={mapCenter}
                        zoom={12}
                        onClick={handleMapClick}
                        options={{
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: true,
                            zoomControl: true,
                        }}
                    >
                        {selectedLocation && (
                            <Marker
                                position={{
                                    lat: selectedLocation.lat,
                                    lng: selectedLocation.lng,
                                }}
                            />
                        )}
                    </GoogleMap>
                    <div className="mt-2 flex flex-row gap-[10px] text-[12px]">
                        <p>Latitude: {selectedLocation?.lat.toFixed(6)}</p>
                        <p>Longitude: {selectedLocation?.lng.toFixed(6)}</p>
                        <p>Address: {selectedLocation?.address}</p>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default HouseRegister