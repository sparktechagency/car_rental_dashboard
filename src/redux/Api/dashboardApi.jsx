import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        totalUserCount : builder.query({
            query : (data)=>{
               return {
                url : '/dashboard/total-user_count',
                method : 'GET',
               } 
            }
        })
    })
})

export const {useTotalUserCountQuery} = useApi