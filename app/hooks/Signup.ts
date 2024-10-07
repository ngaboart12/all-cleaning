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
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signup`, JSON.stringify(userData), {
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
