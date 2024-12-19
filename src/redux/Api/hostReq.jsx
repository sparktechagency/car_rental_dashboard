import { baseApi } from "./baseApi";

const newHost = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNewHost: builder.query({
      query: () => {
        return {
          url: "/dashboard/get-all-add-car-req",
          method: "GET",
        };
      },
      providesTags: ["newHost"],
    }),

    getSingleHostreq: builder.query({
      query: ({ carId }) => {
        return {
          url: `/car/get-single-car-details?carId=${carId}`,
          method: "GET",
        };
      },
      // providesTags: ["newHost"],
    }),

    approveHostRequest: builder.mutation({
      query: ({ carId, status }) => {
        return {
          url: `/dashboard/approve-car?carId=${carId}&status=${status}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["newHost"],
    }),

    // approveHostRequest: builder.mutation({
    //   query: ({ carId, status }) => {
    //     return {
    //       url: `/dashboard/approve-car?carId=${carId}&status=${status}`,
    //       method: "PATCH",
    //     };

    //   },
    // }),
  }),
});

export const {
  useGetAllNewHostQuery,
  useGetSingleHostreqQuery,
  useApproveHostRequestMutation,
} = newHost;
