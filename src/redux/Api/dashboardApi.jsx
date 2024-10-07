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
        }),
        planSubscriber : builder.query({
            query : ()=>{
                return {
                    url : '/plan/subscribers',
                    method : 'GET'
                }
            }
        }),
       
        getAllCategory : builder.query({
            query : ()=>{
                return {
                    url : '/category/get-all',
                    method : 'GET'
                }
            },
            providesTags : ['allCategory']
        }),
        createCategory : builder.mutation({
            query : (data)=>{
                return {
                    url : '/category/add-category',
                    method: "POST",
                    body :  data
                }
            },
            invalidatesTags : ['allCategory']
        }),
        getSingleSubscribePlan : builder.query({
            query : (id)=>{
                return {
                    url : `/plan/subscribe/${id}`,
                    method : 'GET'
                }
            }
        }),
        
    })
})

export const {useTotalUserCountQuery, useGetUserGrowthQuery , usePlanSubscriberQuery , useGetAllCategoryQuery , useCreateCategoryMutation , useGetSingleSubscribePlanQuery} = useApi