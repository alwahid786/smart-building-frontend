// src/redux/features/formDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  building: {
    buildingName: '',
    ownerName: '',
    phoneNumber: '',
    email: '',
    totalArea: '',
    unitOfArea: '',
    numberOfFloors: '',
    constructionYear: '',
    writtenAddress: '',
    description: '',
    selectedFiles: [],
  },
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setBuildingData: (state, action) => {
      state.building = action.payload; // Replace entire building object with payload
    },
    addSelectedFiles: (state, action) => {
      state.building.selectedFiles = [...state.building.selectedFiles, ...action.payload];
    },
  },
});

export const { setBuildingData, addSelectedFiles } = formDataSlice.actions;
export default formDataSlice.reducer;
