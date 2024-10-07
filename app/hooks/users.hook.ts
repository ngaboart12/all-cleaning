import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllUsers = async() => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/users`);
  return response.data
};

export const fetchAllUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
};
