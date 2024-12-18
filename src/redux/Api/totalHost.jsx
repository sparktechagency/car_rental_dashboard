import { baseApi } from "./baseApi";

const totalHost = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTotalHost: builder.query({
            query: ({host , page , search}) => {
                return {
                    url: `/dashboard/get-all-user?role=${host}&page=${page}&searchTerm=${search}`,
                    method: 'GET',
                };
            },
            providesTags: ['totalHost'],
        }),

        

        getSingleHost: builder.query({
            query: ({ userId, host }) => { 
              return {
                url: `/dashboard/get-user-details?userId=${userId}&role=${host}`,
                method: "GET",
              };
            },
            providesTags: ["totalHost"],
          }),
    }),
});

export const { useGetAllTotalHostQuery , useGetSingleHostQuery} = totalHost;
