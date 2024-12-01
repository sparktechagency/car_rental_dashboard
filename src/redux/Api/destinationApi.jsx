import { baseApi } from "./baseApi";

const destinationApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getAllDestination : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get-all-destination',
                    method :  'GET'
                }
            }
        })
    })
})
export const {useGetAllDestinationQuery} = destinationApi;