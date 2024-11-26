export const  propertyType = [
    {
        id: 1,
        name: "APARTMENT",
    },
    {
        id: 2,
        name: "HOUSE",
    },
    {
        id: 3,
        name: "CAR",
    },
    {
        id: 4,
        name: "GARDEN",
    },
    {
        id: 5,
        name: "POOL",
    },
    {
        id: 6,
        name: "GARAGE",
    },
    {
        id: 7,
        name: "OFFICE",
    },
    {
        id: 7,
        name: "WINDOWS",
    },

]

export interface  createPropertyInterface {
    name: string;
    type: string;
    numberOfRooms?: number;
    numberOfBathrooms?: number;
    numberOfBedrooms?: number;
    parkingInstructions?:string;
    size?:number;
    numberOfWindows?: number;
    photos?: string[];
    additionalInfo?: any;
    address: any;
    garageSize?: number;
    poolType?: string;
    carType?: string;
    
    
}