import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetch base serivice to register
const fetchBaseService = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/service/base-services`
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
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/service/provider-services`,
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
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/service/service-providers/${serviceId}`,
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
  AdditionalFees?: {id: string, title: string; fees: number }[];
  providerId? : string
}

interface CompleteServiceParams {
  id: string;
  serviceData: ServiceData;
  token: string;
}

// Complete service function
const completeService = async ({ id, serviceData, token }: CompleteServiceParams) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/provider/complete/service/${id}`,
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