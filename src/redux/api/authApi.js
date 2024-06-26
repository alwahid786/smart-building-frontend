import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiPoint= createApi({

    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "http://localhost:4000"
    }),

    endpoints: (builder)=> ({

        login: builder.mutation({

            query: (data)=> ({

                url: "/api/user/login", 
                method: "POST",
                body: data
            })
        }),

        forgetPassword: builder.mutation({

            query: (data)=> ({

                url: "/api/user/forget-password", 
                method: "PUT",
                body: data
            })
        })
    })
})

export const {useLoginMutation, useForgetPasswordMutation} = authApiPoint;