import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sensorApiPoint = createApi({
  reducerPath: 'sensorApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smart-building-backend-production.up.railway.app',
    // baseUrl: "http://localhost:4000"
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
  }),
})

export const { useCreateSensorMutation, useGetAllSensorsQuery } = sensorApiPoint
