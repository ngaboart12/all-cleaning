export const propertyType = [
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
];

export interface createPropertyInterface {
  name: string;
  type: string;
  numberOfRooms?: number;
  numberOfBathrooms?: number;
  numberOfBedrooms?: number;
  parkingInstructions?: string;
  size?: number;
  numberOfWindows?: number;
  photos?: string[];
  additionalInfo?: any;
  address: any;
  garageSize?: number;
  poolType?: string;
  carType?: string;
}
export interface Order {
  id: string;
  status: string;
  updatedAt: string;
  service: {
    title: string;
  };
  providerOnService: {
    estimatedPrice: number;
    provider: {
      companyName: string;
    };
  };
}

export type CompanyType = {
  company_name: string;

  company_email: string;
  company_office: string;
  company_telephone: string;
  dob?: string,
  ssn?: string,
  location?: string,
  gender: string,
  routing_number: string,
  //   country: string;
  //   city: string;
  //   state: string;
  //   zip: string;
  business_field: string;
  longitude: number;
  latitude: number;
};
