import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUnavailableThunk = createAsyncThunk(
  "cart/getUnavailableThunk",
  async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/techerjeansebastienpro/f28e00c733c8e0b3fda7718072076ff3/raw/7fd0e66c68afeea5171255396d7e04493a457e50/unavailable.json"
    );
    return response.json();
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    unavailableProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUnavailableThunk.fulfilled, (state, action) => {
      return { ...state, unavailableProducts: action.payload };
    });
    builder.addCase(getUnavailableThunk.rejected, (state, action) => {
      console.error("Failed to fetch unavailable products:", action.error);
      return state;
    });
  },
});

export default menuSlice.reducer;
