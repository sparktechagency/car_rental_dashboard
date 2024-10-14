import { baseApi } from "./baseApi";

const mediaSettingApi = baseApi.injectEndpoints({
    endpoints  :(builder)=>({
        getAllAds  :builder.query({
            query :()=>{
                return {
                    url : '/adds/all-adds',
                    method : 'GET'
                }
            },
            providesTags : ['ads']
        }),
        getAllVideos  :builder.query({
            query :()=>{
                return {
                    url : '/adds/all-video-adds',
                    method : 'GET'
                }
            }
        }),
        createAds : builder.mutation({
            query : (data)=>{
                return {
                    url : '/adds/create-adds',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags : ['ads']
        })
    })
})

export const {useGetAllAdsQuery, useGetAllVideosQuery, useCreateAdsMutation} = mediaSettingApi;