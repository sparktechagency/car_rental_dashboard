import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        totalUserCount: builder.query({
            query: (data) => {
                return {
                    url: '/dashboard/total-user_count',
                    method: 'GET',
                }
            }
        }),
        getUserGrowth: builder.query({
            query: (year) => {
                return {
                    url: `/dashboard/user-growth?year=${year}`, method: 'GET'
                }
            }
        }),
        planSubscriber: builder.query({
            query: () => {
                return {
                    url: '/plan/subscribers',
                    method: 'GET'
                }
            }
        }),

        getAllCategory: builder.query({
            query: () => {
                return {
                    url: '/category/get-all',
                    method: 'GET'
                }
            },
            providesTags: ['allCategory']
        }),
        createCategory: builder.mutation({
            query: (data) => {
                return {
                    url: '/category/add-category',
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ['allCategory']
        }),
        getSingleSubscribePlan: builder.query({
            query: (id) => {
                return {
                    url: `/plan/subscribe/${id}`,
                    method: 'GET'
                }
            }
        }),
        approveDeclineMemberRequest: builder.mutation({
            query: ({ id, status }) => {
                return {
                    url: `/plan/subscribe/${id}/request?status=${status}`,
                    method: 'PATCH'
                }
            }
        }),
        /** Get all Notification */
        getAllNotification: builder.query({
            query: () => {
                return {
                    url: '/notification/get-all-notifications',
                    method: 'GET'
                }
            },
            providesTags : ['notification']
        }),
        /** Delete Notification */
        deleteNotification : builder.mutation({
            query : (id)=>{
                return {
                    url : `/notification/delete/${id}`,
                    method : 'DELETE'
                }
            },
            invalidatesTags :['notification']
        }),
        /** Get all user */
        getAllUser : builder.query({
            query : ({search})=>{
                return {
                    url : `/auth/users?searchTerm=${search}`,
                    method : 'GET'
                }
            },
            providesTags : ['blockUser']
        }),
        /** Block user */
        blockUser : builder.mutation({
            query : (id)=>{
                return {
                    url : `/auth/user-block-unblock/${id}`,
                    method : 'PATCH',
                
                }
            },
            invalidatesTags : ['blockUser']
        })

    })
})

export const { useTotalUserCountQuery, useGetUserGrowthQuery, usePlanSubscriberQuery, useGetAllCategoryQuery, useCreateCategoryMutation, useGetSingleSubscribePlanQuery, useApproveDeclineMemberRequestMutation , useGetAllNotificationQuery , useDeleteNotificationMutation, useGetAllUserQuery , useBlockUserMutation } = useApi