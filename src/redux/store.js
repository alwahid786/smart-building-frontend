import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { buildingApiPoint } from "./api/buildingApi";
import formDataReducer from "./reducers/formReducer";
import mappingReducer from "./reducers/latituteReducer";

const store = configureStore({
  reducer: {
    [authApiPoint.reducerPath]: authApiPoint.reducer,
    [buildingApiPoint.reducerPath]: buildingApiPoint.reducer,
    formData: formDataReducer,
    mapping: mappingReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApiPoint.middleware, buildingApiPoint.middleware]),
});

export default store;
