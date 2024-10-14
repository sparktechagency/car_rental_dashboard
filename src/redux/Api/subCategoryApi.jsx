import { baseApi } from "./baseApi";

const subCategory = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllSubCategory  : builder.query({
            query  :()=>{
                return  {
                    url : '/sub-category/get-all',
                    method : 'GET'
                }
            },
            providesTags : ['subCategory']
        }),
        deleteSubCategory :  builder.mutation({
            query : (id)=>{
                return {
                    url : `/sub-category/delete/${id}`,
                    method : 'DELETE'
                }
            },
            invalidatesTags :['subCategory']
        }),
        editSubCategory :  builder.mutation({
            query : ({id, data})=>{
                return {
                    url : `/sub-category/edit/${id}`,
                    method : 'PATCH',
                    body :  data
                }
            },
            invalidatesTags :['subCategory']
        })
        
    })
})
export const {useGetAllSubCategoryQuery , useDeleteSubCategoryMutation , useEditSubCategoryMutation} = subCategory