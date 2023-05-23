import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarket: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMarket } = marketSlice.actions;
export default marketSlice.reducer;
