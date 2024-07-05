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
  },
  reducers: {
    setBuildingData: (state, action) => {
      state.buildingData = action.payload;
    },
  },
});

export const { setBuildingData } = formDataSlice.actions;

export const selectBuildingData = (state) => state.formData.buildingData;

export default formDataSlice.reducer;
