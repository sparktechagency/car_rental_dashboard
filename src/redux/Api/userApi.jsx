import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        loginAdmin : builder.mutation({
            query : (data)=>{
               return {
                url : '/auth/login',
                method : 'POST',
                body : data
               } 
            }
        }),
        getProfile :  builder.query({
            query : ()=>{
                return{
                    url : '/auth/profile',
                    method : 'GET'
                }
            }
        })
    })
})

export const {useLoginAdminMutation , useGetProfileQuery } = useApi