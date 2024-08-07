// src/redux/reducers/sensorStatusSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const sensorStatusSlice = createSlice({
  name: 'sensorStatus',
  initialState,
  reducers: {
    setSensorStatus(state, action) {
      const { uniqueId, status } = action.payload;
      state[uniqueId] = status;
    },
    initializeSensorStatus(state, action) {
      action.payload.forEach(sensor => {
        state[sensor.uniqueId] = false;
      });
    },
  },
});

export const { setSensorStatus, initializeSensorStatus } = sensorStatusSlice.actions;
export default sensorStatusSlice.reducer;
