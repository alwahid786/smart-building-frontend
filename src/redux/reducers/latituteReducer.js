// src/store/mappingSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  latitude: 51.505,
  longitude: -0.09,
}

const mappingSlice = createSlice({
  name: 'mapping',
  initialState,
  reducers: {
    setLatitude: (state, action) => {
      state.latitude = action.payload
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload
    },
  },
})

export const { setLatitude, setLongitude } = mappingSlice.actions
export default mappingSlice.reducer
