import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategory = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/service/category`
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
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/service/service-category`
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
