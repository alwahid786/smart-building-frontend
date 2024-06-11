
import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    showSecondBar: false,
    chartType: 'bar'  // 'bar' or 'line'
  },
  reducers: {
    toggleSecondBar: (state) => {
      state.showSecondBar = !state.showSecondBar;
    },
    setChartType: (state, action) => {
      state.chartType = action.payload;
    }
  }
});

export const { toggleSecondBar, setChartType } = chartSlice.actions;

export default chartSlice.reducer;
