const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    addFiler(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addFiler } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
