import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUserProperty = async(userId:string,token:string)=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user-properties`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data

}

export const userFetchUserPropertyQuery = (userId:string, token: string)=>{
    return useQuery({
        queryKey: ['user-properties'],
        queryFn: ()=> fetchUserProperty(userId,token)
    })
}