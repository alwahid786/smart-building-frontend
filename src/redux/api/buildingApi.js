import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const buildingApiPoint= createApi({

    reducerPath: "buildingApi",

    baseQuery: fetchBaseQuery({


        baseUrl: "https://smart-building-backend-production.up.railway.app"
        // baseUrl: "http://localhost:4000"

    }),

    endpoints: (builder)=> ({

        addBuilding: builder.mutation({

            query: (data)=> ({

                url: "/api/create/building", 
                method: "POST",
                body: data
            })
        }),
        addBuildingFloor: builder.mutation({

            query: (data)=> ({

                url: "/api/create/floor", 
                method: "POST",
                body: data
            })
        }),
        addBuildingImage: builder.mutation({

            query: (data)=> ({

                url: "/api/create/building-image", 
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

export const {useAddBuildingMutation, useAddBuildingImageMutation, useGetBuildingQuery, useGetSingleBuildingQuery, useAddBuildingFloorMutation} = buildingApiPoint;
