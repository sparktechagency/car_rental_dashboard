import { baseApi } from "./baseApi";

const contact = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        
        postConactUs : builder.mutation({
            query : (data)=>{
                return {
                    url : '/dashboard/add-destination',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags : ['destination']
        }),
        
    })
})
export const {usePostConactUsMutation} = contact;