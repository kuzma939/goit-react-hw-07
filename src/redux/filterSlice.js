
import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    selectFilter(state, action) {
     return action.payload;
      //return state.filter = action.payload;
    },
  },
});

export const { selectFilter } = filterSlice.actions;
export default filterSlice.reducer;
