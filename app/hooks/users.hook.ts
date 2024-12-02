import API from "@/lib/api/apiCall";
import { createPropertyInterface } from "@/lib/types/types.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchAllUsers = async () => {
  const response = await API.get(
    `/user/users/all-emails`
  );
  return response.data;
};

export const fetchAllUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
};
const fetchProfile = async (id: string, token: string) => {
  const response = await API.get(
    `/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchProfileQuery = (id: string, token: string) => {
  return useQuery({
    queryKey: ["single_users", id],
    queryFn: () => fetchProfile(id, token),
    staleTime: 1000 * 60 * 5,
    enabled: !!id && !!token,
    
  });
};

interface CreatePropertyArgs {
  propertyType: createPropertyInterface;
  token: string;
}

const createProperty = async ({ propertyType, token }: CreatePropertyArgs) => {
  const response = await API.post(
    `/user-properties`,
    propertyType,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const useCreatePropertyMutation = () => {
  return useMutation<void, Error, CreatePropertyArgs>({
    mutationFn: createProperty,
  });
};

const fetchProperties = async (id: string, token: string) => {
  const response = await API.get(
    `/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchfetchPropertiesQuery = (id: string, token: string) => {
  return useQuery({
    queryKey: ["users_properties", id],
    queryFn: () => fetchProperties(id, token),
  });
};
