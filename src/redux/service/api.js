import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),
    getDish: builder.query({
      query: (dishId) => ({
        url: `dish/${dishId}`,
        params: { dishId },
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
  useGetDishQuery,
} = apiService;
