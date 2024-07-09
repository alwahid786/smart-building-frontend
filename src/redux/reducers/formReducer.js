import { createSlice } from '@reduxjs/toolkit';

const initialFormData = {
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
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    buildingData: initialFormData,
    buildingId: null, // Add this line to store the building ID
  },
  reducers: {
    setBuildingData: (state, action) => {
      state.buildingData = action.payload;
    },
    setBuildingId: (state, action) => {
      state.buildingId = action.payload; // Add this reducer to update the building ID
    },
  },
});

export const { setBuildingData, setBuildingId } = formDataSlice.actions;

export const selectBuildingData = (state) => state.formData.buildingData;
export const selectBuildingId = (state) => state.formData.buildingId;

export default formDataSlice.reducer;
