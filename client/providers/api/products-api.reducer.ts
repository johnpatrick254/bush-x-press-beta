import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
    endpoints: () => ({}),
})
