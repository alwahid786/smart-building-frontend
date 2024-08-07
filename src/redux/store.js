import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { buildingApiPoint } from "./api/buildingApi"; 
import mappingReducer from "./reducers/latituteReducer";
import formReducer from "./reducers/formReducer";
import userReducer from "./reducers/userReducer";
import { sensorApiPoint } from "./api/sensorApi";
import sensorStatusReducer from "./reducers/sensorStatus";

const store = configureStore({
  reducer: {

    [authApiPoint.reducerPath]: authApiPoint.reducer,
    [buildingApiPoint.reducerPath]: buildingApiPoint.reducer,
    [sensorApiPoint.reducerPath]: sensorApiPoint.reducer,

    form: formReducer,
    mapping: mappingReducer,
    user: userReducer,
    sensorStatus: sensorStatusReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApiPoint.middleware, buildingApiPoint.middleware, sensorApiPoint.middleware]),
});

export default store;
