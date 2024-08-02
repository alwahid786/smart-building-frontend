import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const buildingApiPoint = createApi({
  reducerPath: 'buildingApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smart-building-backend-production-ecd0.up.railway.app',
    // baseUrl: "http://localhost:4000",
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    // add building
    addBuilding: builder.mutation({
      query: (data) => ({
        url: '/api/create/building',
        method: 'POST',
        body: data,
      }),
    }),

    // add building floor
    addBuildingFloor: builder.mutation({
      query: (data) => ({
        url: '/api/create/floor',
        method: 'POST',
        body: data,
      }),
    }),

    // add building image
    addBuildingImage: builder.mutation({
      query: (data) => ({
        url: '/api/create/building-image',
        method: 'POST',
        body: data,
      }),
    }),

    // get all building
    getBuilding: builder.query({
      query: () => ({
        url: '/api/all-building',
        method: 'GET',
      }),
    }),

    // get single building
    getSingleBuilding: builder.query({
      query: (data) => ({
        url: `/api/single-building/${data}`,
        method: 'GET',
      }),
    }),

    // update building
    updateBuilding: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/update-building/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // delete building
    deleteBuilding: builder.mutation({
      query: (id) => ({
        url: `/api/delete-building/${id}`,
        method: 'DELETE',
      }),
    }),

    buildingLocation: builder.mutation({
      query: ({ data, buildingId }) => ({
        url: `/api/add-building-location/${buildingId}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // user profile
    getUserDetail: builder.query({
      query: () => ({
        url: `/api/user/userProfile`,
        method: 'GET',
      }),
    }),

    // user update profile
    updateProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/user/update-user/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),
  }),
})

export const {
  useAddBuildingMutation,
  useAddBuildingImageMutation,
  useGetBuildingQuery,
  useGetSingleBuildingQuery,
  useAddBuildingFloorMutation,
  useGetUserDetailQuery,
  useUpdateProfileMutation,
  useUpdateBuildingMutation,
  useBuildingLocationMutation,
  useDeleteBuildingMutation,
} = buildingApiPoint
