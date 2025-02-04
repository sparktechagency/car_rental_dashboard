import { baseApi } from "./baseApi";

const transactionApi = baseApi.injectEndpoints({

    endpoints: (builder)=>({
        getAllTransaction :  builder.query({
            query : ({page,limit,searchTerm})=>{
                return {
                    url : `/payment/get-all-payment?page=${page}&limit=${limit}&searchTerm=${searchTerm}&sort=-createdAt`,
                    method : 'GET'
                }
            },
            providesTags : ['transaction']
        }),

        getAllRefunded :  builder.query({
            query : ({status,page,limit,searchTerm})=>{
                return {
                    url : `/payment/get-all-payment?status=${status}&page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                    method : 'GET'
                }
            },
            providesTags : ['transaction']
        }),

        updateRefund: builder.mutation({
            query: (data) => {
              return {
                url: "/payment/refund",
                method: "PATCH",
                body: data, 
              };
            },
            invalidatesTags: ["transaction"],
          }),

          updateTransferRefund: builder.mutation({
            query: (data) => {
              return {
                url: "/payment/transfer-payment",
                method: "PATCH",
                body: data, 
              };
            },
            invalidatesTags: ["transaction"],
          }),
          
    })
})

export const { useGetAllTransactionQuery,useGetAllRefundedQuery, useUpdateRefundMutation, useUpdateTransferRefundMutation } = transactionApi;