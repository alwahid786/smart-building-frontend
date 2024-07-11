import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { buildingApiPoint } from "./api/buildingApi"; 
import mappingReducer from "./reducers/latituteReducer";
import formReducer from "./reducers/formReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    [authApiPoint.reducerPath]: authApiPoint.reducer,
    [buildingApiPoint.reducerPath]: buildingApiPoint.reducer,
  
    form: formReducer,
    mapping: mappingReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApiPoint.middleware, buildingApiPoint.middleware]),
});

export default store;
