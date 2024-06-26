import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { buildingApiPoint } from "./api/buildingApi";

const store = configureStore({
    reducer: {
      [authApiPoint.reducerPath]: authApiPoint.reducer,
      [buildingApiPoint.reducerPath]: buildingApiPoint.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApiPoint.middleware, buildingApiPoint.middleware]),
           
  });
  
  
  export default store;