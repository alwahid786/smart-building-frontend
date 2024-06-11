import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loadingReducer from "../features/loading/loadingSlice";
import dataReducer from "../features/data/dataSlice";
import chartReducer from "../features/chart/chartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    data: dataReducer,
    chart: chartReducer,
  },
});
