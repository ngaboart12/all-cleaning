import API from "@/lib/api/apiCall";
import { useMutation, useQuery } from "@tanstack/react-query";
import { headers } from "next/headers";


const fetchPostions = async()=>{
  const response = await API.get(`/positions/public`)
  return response.data
}

export const useFetchPostionsQuery =()=>{
  return useQuery({
    queryKey: ["postions"],
    queryFn: fetchPostions,
  })
}
export const useFetchSinglePostionsQuery =(id:number)=>{
  return useQuery({
    queryKey: ["postions"],
    queryFn: async()=>{
      const response = await API.get(`/positions/${id}`)
      return response.data
    },
  })
}

interface positionType {
  title: string,
  price: number
}

const createPosition = async(data: positionType)=>{
  const response = await API.post(`/positions`,data)
  return response
}

export const useCreatePostionMutation = ()=>{
  return useMutation({
    mutationKey: ["create-postions"],
    mutationFn:  createPosition
  })
}


const fetchBaseService = async () => {
  const response = await API.get(
    `/services/base-services`
  );
  return response.data;
};

export const fetchBaseServiceQuery = () => {
  return useQuery({
    queryKey: ["baseService"],
    queryFn: fetchBaseService,
  });
};

// fetch all provider service
const fetchProviderServices = async (token: string) => {
  const response = await API.get(
    `/services/provider-services`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useFetchProviderServicesQuery = (token: string) => {
  return useQuery({
    queryKey: ["providerService"],
    queryFn: () => fetchProviderServices(token),
    enabled: !!token, 
  });
};
const fetchProviderWithService = async (serviceId: string) => {
  const response = await API.get(
    `/services/service-providers/${serviceId}`,
  );
  return response.data;
};

export const useFetchProviderWithServiceQuery = (serviceId: string) => {
  return useQuery({
    queryKey: ["providerWithService"],
    queryFn: () => fetchProviderWithService(serviceId),
    enabled: !!serviceId, 
  });
};

interface ServiceData {
  description: string;
  price: number;
  additionalInfo?: string;
  AdditionalFees?: {id: string, title: string; fee: number }[];
  providerId? : string
}

interface CompleteServiceParams {
  id: string;
  serviceData: ServiceData;
  token: string;
}

// Complete service function
const completeService = async ({ id, serviceData, token }: CompleteServiceParams) => {
  const response = await API.post(
    `/provider/complete-service/${id}?providerId=${serviceData.providerId}`,
    serviceData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const useCompleteServiceMutation = () => {
  return useMutation<any, Error, CompleteServiceParams>({
    mutationFn: completeService
  });
};


const gettingProviderWithOnservice = async ( id: string, providerId: string, token: string ) => {
  const response = await API.get(
    `/services/service-provided/${id}?providerId=${providerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useFetchProviderWithOnService= ( id: string, providerId: string, token: string ) => {
  return useQuery({
    queryKey: ["providerWithOnService"],
    queryFn: () => gettingProviderWithOnservice(id,providerId,token),
    enabled: !!token, 
  });
};