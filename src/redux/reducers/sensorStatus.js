// sensorStatusSlice.js
import { createSlice } from '@reduxjs/toolkit'

const sensorStatusSlice = createSlice({
  name: 'sensorStatus',
  initialState: {},
  reducers: {
    setSensorStatus: (state, action) => {
      return action.payload
    },
    updateSensorStatus: (state, action) => {
      const { uniqueId, status } = action.payload
      state[uniqueId] = status
    },
  },
})

export const { setSensorStatus, updateSensorStatus } = sensorStatusSlice.actions
export default sensorStatusSlice.reducer
