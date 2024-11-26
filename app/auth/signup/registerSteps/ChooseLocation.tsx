"use client";
import { Dialog } from "primereact/dialog";
import React, { useCallback, useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type Props = {
    LocationFormik: any;
};
interface Location {
    lat: number;
    lng: number;
    address: string;
}

const ChooseLocation = ({ LocationFormik }: Props) => {
    const [visible, setVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [inputsDisabled, setInputsDisabled] = useState(true); 

    const [mapCenter, setMapCenter] = useState({
        lat: 40.7128,
        lng: -74.006,
    });

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
        libraries: ["places"],
    });

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
            LocationFormik.setValues({
                ...LocationFormik.values,
                country: selectedLocation.address.split(',')[3],
                city: selectedLocation.address.split(',')[1], 
                state: selectedLocation.address.split(',')[2], 
                street: selectedLocation.address.split(',')[0], 
                postCode: selectedLocation.address.split(',')[2], 
                longitude: selectedLocation.lng, 
                latitude: selectedLocation.lat, 
            });
        }
    }, [selectedLocation]);

    return (
        <>
            <div className="flex flex-col gap-[4px] ">
                <h1 className="text-[16px] text-[#E2B659] font-[500]">Select Your Personal Location</h1>
                <span className="text-[#13829F] font-[600] text-[16px]">
                    Choose your location to continue with the setup process
                </span>
                <div
                    onClick={() => setVisible(true)}
                    className="flex hover:scale-90 duration-300 transition-all flex-row items-center gap-[10px] p-3 rounded-[6px] justify-center cursor-pointer bg-primary text-white"
                >
                    <span>
                        <CiLocationOn size={25} />
                    </span>
                    <span>Click To Pick Location</span>
                </div>
                <form onSubmit={LocationFormik.handleSubmit} className="gap-[10px] py-4 flex flex-col">
                    <div className="grid grid-cols-2 gap-[4px]">
                        {[
                            { name: "country", placeholder: "Select Country" },
                            { name: "state", placeholder: "Select State" },
                            { name: "city", placeholder: "Select City" },
                            { name: "street", placeholder: "Select Street" },
                            { name: "postCode", placeholder: "Select PostCode" },
                        ].map((field) => (
                            <div key={field.name} className="flex flex-col gap-[4px]">
                                <div className="w-full h-[50px] rounded-[18px] bg-[#F9F9F9]">
                                    <input
                                        type="text"
                                        name={field.name}
                                        onChange={LocationFormik.handleChange}
                                        value={LocationFormik.values[field.name]}
                                        className="w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[18px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px]"
                                        placeholder={field.placeholder}
                                        disabled={inputsDisabled}
                                    />
                                </div>
                                {LocationFormik.touched[field.name] && LocationFormik.errors[field.name] ? (
                                    <div className="text-red-500 text-[12px] px-4">{LocationFormik.errors[field.name]}</div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-row items-center justify-between px-4">
                        <a href="#" className="text-[12px] sm:text-[14px] text-[#13829F]"></a>
                        <a href="#" className="text-[12px] sm:text-[14px] text-[#13829F]">
                            Already have an account?
                        </a>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <button type="submit" className="w-full h-[50px] rounded-[18px] bg-[#1990AF] text-white">
                            Continue
                        </button>
                    </div>
                </form>
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
        </>
    );
};

export default ChooseLocation;
