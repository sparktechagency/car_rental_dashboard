import { baseApi } from "./baseApi";

const transactionApi = baseApi.injectEndpoints({

    endpoints: (builder)=>({
        getAllTransaction :  builder.query({
            query : ()=>{
                return {
                    url : "/payment/get-all-payment",
                    method : 'GET'
                }
            },
            providesTags : ['transaction']
        })
    })
})

export const { useGetAllTransactionQuery } = transactionApi;