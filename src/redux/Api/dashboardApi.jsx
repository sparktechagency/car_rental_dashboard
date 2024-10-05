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
        }),
        getUserGrowth :  builder.query({
            query  :(year)=>{
                return {
                    url :`/dashboard/user-growth?year=${year}`,method : 'GET'
                }
            }
        })
    })
})

export const {useTotalUserCountQuery, useGetUserGrowthQuery} = useApi