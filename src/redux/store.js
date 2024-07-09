import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { buildingApiPoint } from "./api/buildingApi";
import formDataReducer from "./reducers/formReducer";

const store = configureStore({
  reducer: {
    [authApiPoint.reducerPath]: authApiPoint.reducer,
    [buildingApiPoint.reducerPath]: buildingApiPoint.reducer,
    formData: formDataReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApiPoint.middleware, buildingApiPoint.middleware]),
});

export default store;
