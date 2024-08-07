import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const buildingApiPoint = createApi({
  reducerPath: 'buildingApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:4000',
    baseUrl: "https://smart-building-backend-production-ecd0.up.railway.app",
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // Add building
    addBuilding: builder.mutation({
      query: (data) => ({
        url: '/api/create/building',
        method: 'POST',
        body: data,
      }),
    }),

    // Add building floor
    addBuildingFloor: builder.mutation({
      query: (data) => ({
        url: '/api/create/floor',
        method: 'POST',
        body: data,
      }),
    }),

    // Add building image
    addBuildingImage: builder.mutation({
      query: (data) => ({
        url: '/api/create/building-image',
        method: 'POST',
        body: data,
      }),
    }),

    // Get all buildings
    getBuilding: builder.query({
      query: () => ({
        url: '/api/all-building',
        method: 'GET',
      }),
    }),

    // Get all buildings by user
    getBuildingByUser: builder.query({
      query: () => ({
        url: '/api/user-building',
        method: 'GET',
      }),
    }),

    // Get single building
    getSingleBuilding: builder.query({
      query: (id) => ({
        url: `/api/single-building/${id}`,
        method: 'GET',
      }),
    }),

    // Update building
    updateBuilding: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/update-building/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // Delete building
    deleteBuilding: builder.mutation({
      query: (id) => ({
        url: `/api/delete-building/${id}`,
        method: 'DELETE',
      }),
    }),

    // Add building location
    buildingLocation: builder.mutation({
      query: ({ data, buildingId }) => ({
        url: `/api/add-building-location/${buildingId}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // Get building sensors
    getBuildingSensors: builder.query({
      query: (id) => ({
        url: `/building/${id}/sensors`,
        method: 'GET',
      }),
    }),

     // Search buildings with filters
     searchBuildings: builder.query({
      query: ({ searchTerm, range, constructionYear }) => {
        // Build query parameters
        const queryParams = new URLSearchParams({
          query: searchTerm || '', // Use searchTerm as a parameter
          range: range || '', // Handle case where range might be undefined
          construction_year: constructionYear || '', // Use construction_year
        }).toString();

        return {
          url: `/api/search-buildings?${queryParams}`,
          method: 'GET',
        };
      },
    }),

    // User profile
    getUserDetail: builder.query({
      query: () => ({
        url: `/api/user/userProfile`,
        method: 'GET',
      }),
    }),

    // Update user profile
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
  useGetBuildingByUserQuery,
  useGetBuildingSensorsQuery,
  useSearchBuildingsQuery,
} = buildingApiPoint
