import { baseApi } from "./baseApi";

const destinationApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getAllDestination : builder.query({
            query : ({page , search})=>{
                console.log(search);
                return {
                    url : `/dashboard/get-all-destination?searchTerm=${search}&page=${page}&`,
                    method :  'GET'
                }
            },
            providesTags : ['destination']
        }),
        createDestination : builder.mutation({
            query : (data)=>{
                return {
                    url : '/dashboard/add-destination',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags : ['destination']
        }),
        deleteDestination : builder.mutation({
            query : (id)=>{
                return {
                    url : `/dashboard/delete-destination?destinationId=${id}`,
                    method :'DELETE'
                }
            },
            invalidatesTags : ['destination']
        })
    })
})
export const {useGetAllDestinationQuery , useCreateDestinationMutation , useDeleteDestinationMutation} = destinationApi;