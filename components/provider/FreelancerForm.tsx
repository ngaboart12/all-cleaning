"use client";
import { FaLocationDot } from "react-icons/fa6";
import { usefetchBusinessFieldsQuery } from "../../app/hooks/users.hook";
import Selectinput from "../ui/input/Selectinput";
import { useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Dialog } from "primereact/dialog";

export default function FreelancerForm({ formik }: { formik: any }) {
    const [selectedLocation, setSelectedLocation] = useState<{
        lat: number;
        lng: number;
        address: string;
    }>({
        lat: 0,
        lng: 0,
        address: "",
    });

    const [inputsDisabled, setInputsDisabled] = useState(true);

    const [visible, setVisible] = useState(false);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
        libraries: ["places"],
    });
    const [mapCenter, setMapCenter] = useState({
        lat: 40.7128,
        lng: -74.006,
    });

    const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;

        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        const newLocation = {
            lat,
            lng,
            address: "Loading...",
        };
        setSelectedLocation(newLocation);
        formik.setFieldValue("address", {
            latitude: newLocation.lat,
            longitude: newLocation.lng,
        });
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results?.[0]) {
                setSelectedLocation({
                    lat,
                    lng,
                    address: results[0].formatted_address,
                });
                formik.setFieldValue("company_office", newLocation.address);
                setInputsDisabled(false);
            }
        });
    }, []);
    const { data: businessFields } = usefetchBusinessFieldsQuery();
    const testData = [
        {
            id: 1,
            name: "HOME",
        },
        {
            id: 2,
            name: "HOTEL",
        },
        {
            id: 3,
            name: "SCHOOL",
        },
        {
            id: 4,
            name: "HOSPITAL",
        },
        {
            id: 5,
            name: "GARAGE",
        },
        {
            id: 6,
            name: "OFFICE",
        },
        {
            id: 7,
            name: "WINDOWS",
        },
    ];
    return (
        <form
            action=""
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-[10px]"
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[4px]">
                    <span className="text-[14px] text-black">Date of Birth</span>
                    <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
                        <input
                            type="date"
                            name="dob"
                            className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                            placeholder="Pick your date of birth"
                            value={formik.values.dob}
                            onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        />
                        {formik.touched.dob && formik.errors.dob && (
                            <div className="text-red-500 text-[12px] px-4">
                                {formik.errors.dob}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <span className="text-[14px] text-black">location</span>
                    <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
                        <input
                            type="text"
                            name="location"
                            className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                            placeholder="Type your location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.location && formik.errors.location && (
                            <div className="text-red-500 text-[12px] px-4">
                                {formik.errors.location}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <span className="text-[14px] text-black">Routing Number</span>
                    <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
                        <input
                            type="text"
                            name="routing_number"
                            className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                            placeholder="Type your routing number"
                            value={formik.values.routing_number}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.routing_number &&
                            formik.errors.routing_number && (
                                <div className="text-red-500 text-[12px] px-4">
                                    {formik.errors.routing_number}
                                </div>
                            )}
                    </div>
                </div>
                <div className="flex flex-col gao-[4px]">
                    <span className="text-[14px] text-black">Gender</span>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="flex flex-row gap-[20px] p-3 w-full bg-gray-50 rounded-[4px] items-center justify-center">
                            <span className="text-[14px] text-black">Male</span>
                            <input checked={formik.values.gender == "male"} onChange={formik.handleChange} value={"male"} name="gender" type="radio" />
                        </div>
                        <div className="flex flex-row gap-[20px] p-3 w-full bg-gray-50 rounded-[4px] items-center justify-center">
                            <span className="text-[14px] text-black">Female</span>
                            <input checked={formik.values.gender == "female"} onChange={formik.handleChange} value="female" name="gender" type="radio" />
                        </div>
                    </div>
                    {formik.touched.gender &&
                        formik.errors.gender && (
                            <div className="text-red-500 text-[12px] px-4">
                                {formik.errors.gender}
                            </div>
                        )}
                </div>

                <div
                    onClick={() => setVisible(!visible)}
                    className="p-4 rounded-[12px] gap-[10px] cursor-pointer hover:opacity-80 duration-300 transition-all flex items-center justify-center bg-primary"
                >
                    <FaLocationDot size={20} color="white" />
                    <span className="text-center text-white">Pick your location</span>
                </div>
                <Dialog
                    header="Pick your location"
                    visible={visible}
                    // style={{ width: "50vw" }}
                    onHide={() => setVisible(false)}
                    className="md:w-[50vw] w-[90%] mx-auto"
                >
                    <div className="w-full flex flex-col gap-[10px]">
                        {isLoaded ? (
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
                        ) : (
                            <p>Map Loading...</p>
                        )}
                        <div className="mt-2 flex flex-row gap-[10px] text-[12px]">
                            <p>Latitude: {selectedLocation?.lat.toFixed(6)}</p>
                            <p>Longitude: {selectedLocation?.lng.toFixed(6)}</p>
                            <p>Address: {selectedLocation?.address}</p>
                        </div>
                    </div>
                </Dialog>
                <div className="p-4 rounded-[12px] gap-[10px] cursor-pointer hover:opacity-80 duration-300 transition-all flex items-center justify-center border border-primary">
                    <span className="text-center text-[12px] text-black">
                        {selectedLocation && selectedLocation.address !== "" ? selectedLocation?.address : " Your location will be displayed here"}

                    </span>
                </div>
            </div>
        </form>
    );
}
