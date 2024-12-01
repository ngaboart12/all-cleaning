import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ServiceLoading = () => {
    return (
        <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-row gap-[10px] justify-between">
                <Skeleton height="10vh" width="50%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                <Skeleton height="10vh" width="33%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
            </div>
            <div className="flex flex-col w-full bg-white gap-[10px]">
                <Skeleton height="10vh" width="100%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                <Skeleton height="10vh" width="100%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                <Skeleton height="10vh" width="100%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
            </div>
            <div className="w-full flex flex-row gap-[10px] justify-between">
                <Skeleton height="10vh" width="50%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                <Skeleton height="10vh" width="50%" baseColor="#e0e0e0" highlightColor="#f5f5f5" />
            </div>
        </div>
    );
};

export default ServiceLoading;
