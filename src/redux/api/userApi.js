import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiPoint= createApi({

    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "https://smart-building-backend-production.up.railway.app"
        // baseUrl: "http://localhost:4000"

    }),

    endpoints: (builder)=> ({

    
        getSingleUser: builder.query({

            query: (data)=> ({

                url: `/api/user/single-user/${data}`, 
                method: "GET",
            })
        }),
        
    })
})

export const {useGetSingleUserQuery} = userApiPoint;
