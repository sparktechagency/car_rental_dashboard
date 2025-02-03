import { baseApi } from "./baseApi";


const tripApi = baseApi.injectEndpoints({

    endpoints: (builder)=>({
        getAllTrip :  builder.query({
            query : ({page,limit})=>{
                return {
                    url : `/trip/get-all-trip?page=${page}&limit=${limit}`,
                    method : 'GET'
                }
            },
            providesTags : ['trip']
        })
    })
})

export const { useGetAllTripQuery } = tripApi;