// src/redux/reducers/sensorStatusSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('sensorStatus')) || {};

const sensorStatusSlice = createSlice({
  name: 'sensorStatus',
  initialState,
  reducers: {
    setSensorStatus(state, action) {
      const { uniqueId, status } = action.payload;
      state[uniqueId] = status;
      localStorage.setItem('sensorStatus', JSON.stringify(state)); // Persist to local storage
    },
    initializeSensorStatus(state, action) {
      action.payload.forEach(sensor => {
        if (state[sensor.uniqueId] === undefined) {
          state[sensor.uniqueId] = false;
        }
      });
      localStorage.setItem('sensorStatus', JSON.stringify(state)); // Persist to local storage
    },
  },
});

export const { setSensorStatus, initializeSensorStatus } = sensorStatusSlice.actions;
export default sensorStatusSlice.reducer;
