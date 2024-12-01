import API from "@/lib/api/apiCall";
import {useQuery } from "@tanstack/react-query";

const fetchCategory = async () => {
  const response = await API.get(
    `/api/v1/service/category`
  );
  return response.data;
};
export const fetchCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });
};

const fetchServiceWithCategory = async () => {
  const response = await API.get(
    `/api/v1/service/service-category`
  );
  return response.data;
};

export const useFetchServiceWithCategoryQuery = () => {
  return useQuery({
    queryKey: ["service-category"],
    queryFn: () => fetchServiceWithCategory(),
    staleTime: 0,
    refetchOnWindowFocus: true, 
    refetchOnReconnect: true,
  });
};
