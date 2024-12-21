import API from "@/lib/api/apiCall";
import { createPropertyInterface, CompanyType } from "@/lib/types/types.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchAllUsers = async () => {
  const response = await API.get(`/user/users/all-emails`);
  return response.data;
};

export const fetchAllUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
};
const fetchProfile = async (id: string, token: string) => {
  const response = await API.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
  const response = await API.post(`/user-properties`, propertyType, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useCreatePropertyMutation = () => {
  return useMutation<void, Error, CreatePropertyArgs>({
    mutationFn: createProperty,
  });
};

const fetchProperties = async (id: string, token: string) => {
  const response = await API.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchfetchPropertiesQuery = (id: string, token: string) => {
  return useQuery({
    queryKey: ["users_properties", id],
    queryFn: () => fetchProperties(id, token),
  });
};

const enableCompany = async (enableCompany: CompanyType) => {
  try {
    const res = await API.post(
      "/users/account/employee/company",
      enableCompany
    );
    return res.data;
  } catch (error) {
    console.log("Error Enabling employer ", error);
  }
};
export const usefetchBusinessFieldsQuery = () => {
  return useQuery<{ id: number; name: string }[] | undefined>({
    queryKey: ["business-fields"],
    queryFn: async () => {
      const response = await API.get("/account/employment/domains/all");
      return response.data.data;
    },
  });
};
export const useEnableCompanyMutation = () => {
  return useMutation<void, Error, CompanyType>({
    mutationFn: enableCompany,
  });
};

export const useEnableCustomerMutation = () => {
  return useMutation<void, Error>({
    mutationFn: async () => {
      const response = await API.post("users/account/customer/individual");
      return response.data;
    },
    onSuccess: () => {
      console.log("Customer enabled successfully");
      location.href = "/client/dashboard";
    },
  });
};

const enableFreelancer = async (data:any) => {
  try {
    const res = await API.post(
      "/users/account/employee/individual",
      data
    );
    return res.data;
  } catch (error) {
    console.log("Error Enabling employer ", error);
  }
};

export const useEnableFreelancerMutation = ()=>{
  return useMutation({
    mutationKey: ["enable_freelancdr"],
    mutationFn: enableFreelancer,
  })
}
