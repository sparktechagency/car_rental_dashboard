import { baseApi } from "./baseApi";


const tripApi = baseApi.injectEndpoints({

    endpoints: (builder)=>({
        getAllTrip :  builder.query({
            query : ()=>{
                return {
                    url : "/trip/get-all-trip",
                    method : 'GET'
                }
            },
            providesTags : ['trip']
        })
    })
})

export const { useGetAllTripQuery } = tripApi;