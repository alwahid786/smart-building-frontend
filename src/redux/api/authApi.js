import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiPoint= createApi({

    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "https://smart-building-backend-production.up.railway.app"
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
        }),
        resetPassword: builder.mutation({

            query: (data)=> ({

                url: "/api/user/reset-password", 
                method: "POST",
                body: data
            })
        })
    })
})

export const {useLoginMutation, useForgetPasswordMutation, useResetPasswordMutation} = authApiPoint;