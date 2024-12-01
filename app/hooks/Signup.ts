import API from "@/lib/api/apiCall";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const signupUser = async (userData: {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  role: string;
  state: string;
  city: string;
  companyName?: string;
  companyBio?: string;
  companyLogo?: string; 
  companyEmail?: string;
  files: string; 
  servicesData?: any[];
}) => {
  const response = await API.post(`/api/v1/auth/signup`, JSON.stringify(userData), {
    headers: {
      'Content-Type': 'application/json', 
    },
  });
  
  return response.data;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signupUser,
  });
};
