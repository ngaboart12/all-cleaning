"use client";
import React, { useEffect, useState } from "react";
import { useFetchUserOrdersQuery } from "@/app/hooks/order.hook";
import { useSession } from "next-auth/react";
import { Order } from "@/lib/types/types.type";
import ServiceLoading from "@/lib/loading/ServiceLoading";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";


const BookedService = () => {
    const { data: session } = useSession();
    const [newestOrder, setNewestOrder] = useState<Order[]>([]);
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [selectedService, setSelectedService] = useState<Order>()
    const token = session?.user.token;
    const { data: orders, isLoading, isFetching, isError } = useFetchUserOrdersQuery(token!);


    useEffect(() => {
        if (!isLoading && orders) {
            const pendingOrders = orders.filter((item: any) => item.status === "PENDING");

            if (pendingOrders.length > 0) {
                const [newest] = pendingOrders.sort(
                    (a: any, b: any) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
                );
                const newOne = [
                    newest
                ]
                setNewestOrder(newOne);
            } else {
                setNewestOrder([]);
            }
        }
    }, [orders, isLoading]);


    return (
        <>
            <div className="flex flex-col gap-[4px]">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-[10px]">
                        <h1 className="font-[600] text-[14px]">Ongoing Job</h1>
                        <div className="p-1 bg-primary rounded-[6px] text-[12px] text-white font-[600]">
                            2
                        </div>
                    </div>
                    <a href="/client/dashboard/bookings" className="uppercase text-[13px] font-[600] text-primary">
                        View All
                    </a>
                </div>

                <div className="p-4 flex flex-col gap-[4px] bg-white rounded-[12px] w-full">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-row items gap-[4px]">
                            <span className="font-[600] text-black text-[13px]">

                            </span>
                            <span className="font-[600] text-black text-[13px]">

                            </span>
                        </div>
                        <div className="p-2 rounded-full bg-secondary"></div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-[14px] font-[600] text-black">{`Deep cleaning`}</span>
                        <span className="text-[12px] font-[500] text-[#6D6D6D] text-start">Price</span>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-[12px] font-[400] text-[#C1C1C1]">
                            {"Location not available"}
                        </span>
                        <div className="flex flex-row gap-[4px] items-center">
                            <span className="text-[14px] font-[700] text-[#13829F]">
                                200.56
                            </span>
                            <span className="text-[14px] font-[700] text-[#13829F]">$</span>
                        </div>
                    </div>
                    <div className="flex cursor-pointer flex-row gap-[10px] w-full items-center">
                        <button className="hover:scale-105 duration-300 text-[14px] font-[400] text-primary p-3 rounded-[8px] bg-[#F7FDFF] w-full">
                            More details
                        </button>
                        <button className="hover:scale-105 duration-300 text-[14px] font-[400] text-white p-3 rounded-[8px] bg-primary w-full">
                            Mark as served
                        </button>
                    </div>
                </div>

            </div>
            <Dialog header={`Service details`} headerClassName="text-[12px]" className="w-[90%] lg:w-1/2" visible={isOpened} onHide={() => setIsOpened(false)} >
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="flex flex-col  gap-[10px] items-start  w-full">
                        <div className=" flex flex-row items-center gap-[10px]">
                            <span className="text-[14px] text-black font-[600]">SERVICE NAME</span>
                            <span>{selectedService?.service.title}</span>
                            <div className={`px-2 py-[2px] text-[12px] rounded-[3px] ${selectedService?.status == "PENDING" ? "bg-primary/80 text-white" : ""}`}>
                                {selectedService?.status}
                            </div>
                        </div>

                    </div>

                    <div className=" flex flex-row items-center gap-[10px]">
                        <div className=" p-3 bg-primary w-full flex items-center justify-center">
                            <span className="text-[12px] text-white">View Reply</span>
                        </div>
                        <div className=" p-3 bg-primary w-full flex items-center justify-center">
                            <span className="text-[12px] text-white">View Reply</span>
                        </div>
                    </div>
                </div>

            </Dialog>
        </>
    );
};

export default BookedService;
