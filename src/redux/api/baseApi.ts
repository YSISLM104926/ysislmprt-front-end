import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the baseApi using createApi
export const baseApi = createApi({
    reducerPath: 'baseApi', // Unique key for the API reducer
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ysbackend.vercel.app' }), // Base URL for API requests
    endpoints: () => ({}), // Endpoints will be injected later
});

export default baseApi;