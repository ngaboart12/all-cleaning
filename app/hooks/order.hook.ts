import API from "@/lib/api/apiCall";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Result } from "postcss";

const fetchUserProperty = async (userId: string, token: string) => {
  const response = await API.get(`/user-properties`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const userFetchUserPropertyQuery = (userId: string, token: string) => {
  return useQuery({
    queryKey: ["user-properties"],
    queryFn: () => fetchUserProperty(userId, token),
    enabled: !!token,
  });
};

const createOrder = async (createData: {
  orderData: any;
  token: string;
  serviceId: string;
  serviceProviderId: string;
}) => {
  const response = await API.post(
    `/orders?serviceId=${createData.serviceId}&serviceProviderId=${createData.serviceProviderId}`,
    createData.orderData,
    {
      headers: {
        Authorization: `Bearer ${createData.token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const useCreateOrderMutation = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};

const fetchUserOrders = async (token: string) => {
  const response = await API.get(`/orders/order/client`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useFetchUserOrdersQuery = (token: string) => {
  return useQuery({
    queryKey: ["user-orders"],
    queryFn: () => fetchUserOrders(token),
    enabled: !!token,
  });
};

export const userCreateJobMutation = () => {
  return useMutation({
    mutationKey: ["create_job"],
    mutationFn: async (data: any) => {
      const response = await API.post(`/shifts`, data);
      return response.data
    },
  });
};
