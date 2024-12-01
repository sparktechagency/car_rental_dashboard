import { baseApi } from "./baseApi";

const dashboardHome = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getHostUserGrowth  : builder.query({
            query : ({role, year})=>{
                return {
                    url : `/dashboard/growth?role=${role}&year=${year}`,
                    method : 'GET'
                }
            }
        })
    })
})

export const {useGetHostUserGrowthQuery} = dashboardHome;