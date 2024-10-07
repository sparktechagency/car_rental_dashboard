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
        }),
        forgotPassword : builder.mutation({
            query : (email)=>{
                return {
                    url : '/auth/forgot-password',
                    method : 'POST',
                    body : email
                }
            }
        })
    })
})

export const {useLoginAdminMutation , useGetProfileQuery , useForgotPasswordMutation } = useApi