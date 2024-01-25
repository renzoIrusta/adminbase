import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// example of api call

export const usersApi = createApi({
    reducerPath: 'usersApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_BASE_URL}/users/`
    }),
    tagTypes: ['Users'],
    tagTypes: ['User'],

    endpoints: (builder) => ({
        getUserById: builder.query({
            query: ({id, userToken }) => ({
                url: `/finduserbyid/${id}`,
                headers: {
                    'Authorization': `${ userToken }`
                }
            }),
            providesTags: ['User']
        }),
        getAllUsers: builder.query({
            query: ({ userToken }) => ({
                url: 'getalluser',
                headers: {
                    'Authorization': `${ userToken }`
                }
            }),
            providesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: ({data, userToken}) => ({
                url: '/postadduser',
                method: 'POST',
                headers: {
                    'Authorization': `${ userToken }`
                },
                body: data,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: builder.mutation({
            query: ({id, data, userToken}) => ({
                url: `/updateuser/${id}`,
                method: 'PUT',
                headers: {
                    'Authorization': `${ userToken }`
                },
                body: data,
            }),
            invalidatesTags: ['Users', 'User'],	
        })
    })
})

export const {
    useGetUserByIdQuery,
    useGetAllUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation   
} = usersApi;