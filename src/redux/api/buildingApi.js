import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const buildingApiPoint= createApi({

    reducerPath: "buildingApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "https://smart-building-backend-production.up.railway.app"
    }),

    endpoints: (builder)=> ({

        addBuilding: builder.mutation({

            query: (data)=> ({

                url: "/api/create/building", 
                method: "POST",
                body: data
            })
        }),
        getBuilding: builder.query({

            query: ()=> ({

                url: "/api/all-building", 
                method: "GET"
            })
        }),
        getSingleBuilding: builder.query({

            query: (data)=> ({

                url: `/api/single-building/${data}`, 
                method: "GET",
            })
        }),
        
    })
})

export const {useAddBuildingMutation, useGetBuildingQuery, useGetSingleBuildingQuery} = buildingApiPoint;