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
        }),
        verifyOtp : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/verify-otp',
                    method : 'POST',
                    body :  data
                }
            }
        }) ,
        resetPassword :  builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/reset-password',
                    method : 'POST',
                    body : data
                }
            }
        })
    })
})

export const {useLoginAdminMutation , useGetProfileQuery , useForgotPasswordMutation , useVerifyOtpMutation , useResetPasswordMutation } = useApi