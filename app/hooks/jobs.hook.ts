import API from "@/lib/api/apiCall";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSelectAllJobsQuery = (page?: number) => {
  return useQuery({
    queryKey: ["all-jobs"],
    queryFn: async () => {
      const response = await API.get(`/shifts?page=${page}`);
      return response.data;
    },
  });
};

export const useApplyTojobMutation = () => {
  return useMutation({
    mutationKey: ["app-job"],
    mutationFn: async (shift_id: number) => {
      const response = await API.post("/applications", { shift_id });
    },
  });
};

export const useFetchApplications = (shift_id:number | undefined) => {
  return useQuery({
    queryKey: ["applicationss", shift_id],
    queryFn: async () => {
      const response = await API.get(`/shifts/${shift_id}/applications`);
      return response.data;
    },
    enabled: !!shift_id,
  });
};

export const useFetchApplicantionProvider = ()=>{
  return useQuery({
    queryKey: ["applications-provider"],
    queryFn: async () => {
      const response = await API.get("/applications");
      return response.data;
    }
  })
}
