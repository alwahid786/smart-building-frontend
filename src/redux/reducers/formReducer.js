import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buildingData: {},
  buildingId: null,
  selectedFiles: [],
  sensors: [], // Add sensors to the initial state
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBuildingData: (state, action) => {
      state.buildingData = action.payload;
    },
    setBuildingId: (state, action) => {
      state.buildingId = action.payload;
    },
    setSelectedFiles: (state, action) => {
      state.selectedFiles = action.payload;
    },
    setSensors: (state, action) => {
      state.sensors = action.payload;
    },
    addSensor: (state, action) => {
      state.sensors.push(action.payload);
    },
    updateSensor: (state, action) => {
      const index = state.sensors.findIndex(sensor => sensor.id === action.payload.id);
      if (index !== -1) {
        state.sensors[index] = action.payload;
      }
    },
    removeSensor: (state, action) => {
      state.sensors = state.sensors.filter(sensor => sensor.id !== action.payload.id);
    },
  },
});

export const { setBuildingData, setBuildingId, setSelectedFiles, setSensors, addSensor, updateSensor, removeSensor } = formSlice.actions;

export const selectBuildingData = (state) => state.form.buildingData;
export const selectBuildingId = (state) => state.form.buildingId;
export const selectSelectedFiles = (state) => state.form.selectedFiles;
export const selectSensors = (state) => state.form.sensors;

export default formSlice.reducer;
