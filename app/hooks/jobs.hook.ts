import API from "@/lib/api/apiCall"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useSelectAllJobsQuery = (page?:number)=>{
    return useQuery({
        queryKey: ["all-jobs"],
        queryFn: async()=>{
            const response = await API.get(`/shifts?page=${page}`)
            return response.data

        }
    })
}

export const useApplyTojobMutation = ()=>{
    return useMutation({
        mutationKey: ["app-job"],
        mutationFn: async(shift_id:number)=>{
            const response = await API.post("/applications", {shift_id})
        }
    }) 
}