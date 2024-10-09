import { baseApi } from "./baseApi";

const mediaSettingApi = baseApi.injectEndpoints({
    endpoints  :(builder)=>({
        getAllAds  :builder.query({
            query :()=>{
                return {
                    url : '/adds/all-adds',
                    method : 'GET'
                }
            }
        })
    })
})

export const {useGetAllAdsQuery} = mediaSettingApi;