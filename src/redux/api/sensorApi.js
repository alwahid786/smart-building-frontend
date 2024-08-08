import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sensorApiPoint = createApi({
  reducerPath: 'sensorApi',

  baseQuery: fetchBaseQuery({
    //  baseUrl: "https://smart-building-backend-production-ecd0.up.railway.app",
    baseUrl: "http://localhost:4000"
  }),

  endpoints: (builder) => ({
    createSensor: builder.mutation({
      query: (data) => ({
        url: '/api/create/sensors',
        method: 'POST',
        body: data,
      }),
    }),

    // get all sensors
    getAllSensors: builder.query({
      query: () => ({
        url: '/api/all-sensors',
        method: 'GET',
      }),
    }),

    // get all building sensors
    getAllBuildingSensors: builder.query({
      query: (buildingId) => `building/${buildingId}/sensors`,
    }),

    // get all building sensors
    getBuldingFloors: builder.query({
      query: (floorId) => `/api/buldingFloor/${floorId}`,
    }),

    // get single sensor details
    getSingleBuildingSensor: builder.query({
      query: (id) => ({
        url: `/api/single/sensor/${id}`,
        method: 'GET',
      }),
    }),

    // update sensor
    updateSensor: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/update-sensor/${id}`,
        method: 'PUT',
        body: formData,
  
      }),
    }),

    // delete sensor
    deleteSensor: builder.mutation({
      query: (id) => ({
        url: `/api/delete-sensor/${id}`,
        method: 'DELETE',
      }),
    }),

  }),
})

export const { useCreateSensorMutation, useGetAllSensorsQuery, useGetAllBuildingSensorsQuery, useGetBuldingFloorsQuery, useGetSingleBuildingSensorQuery, useUpdateSensorMutation, useDeleteSensorMutation } = sensorApiPoint
