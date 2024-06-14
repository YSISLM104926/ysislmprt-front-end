
import { baseApi } from "../api/baseApi";

const superUserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        superUserLogin: builder.mutation({
            query: (superUserData) => ({
                url: '/api/auth/superuser',
                method: 'POST',
                body: superUserData
            })
        })
    })
})

export const { useSuperUserLoginMutation } = superUserApi;