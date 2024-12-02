import API from "@/lib/api/apiCall";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const signupUser = async (userData: {
  name: string;
  email: string;
  telephone: string;
  password: string

}) => {
  const response = await API.post(`/users/register`, userData);
  return response.data;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signupUser,
  });
};
