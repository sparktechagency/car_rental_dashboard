import { baseApi } from "./baseApi";

const newHost = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllNewHost: builder.query({
            query: () => {
                return {
                    url: '/dashboard/get-all-add-car-req',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getSingleHostreq: builder.query({
            query: ({ carId }) => { 
              return {
                url: `/dashboard/get-user-details?carId=${carId}`,
                method: "GET",
              };
            },
            providesTags: ["newSingle"],
          }),


    }),
});

export const { useGetAllNewHostQuery, useGetSingleHostreqQuery } = newHost;
