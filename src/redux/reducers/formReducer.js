// formReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buildingData: {},
  buildingId: null,
  selectedFiles: [],
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
  },
});

export const { setBuildingData, setBuildingId, setSelectedFiles } = formSlice.actions;

export const selectBuildingData = (state) => state.form.buildingData;
export const selectBuildingId = (state) => state.form.buildingId;
export const selectSelectedFiles = (state) => state.form.selectedFiles;

export default formSlice.reducer;
