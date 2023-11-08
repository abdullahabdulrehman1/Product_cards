// import fetchCount from "./counterApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/dist";
import fetchCount from "./ProductApi";
const initialState = {
  products: [],
  status: "idle",
};
export const fetchCountAsync = createAsyncThunk(
  "product/fetchCount",
  async () => {
    const response = await fetchCount();
    // const data = await response.json;
    return response.data;
}
// console.log("response succeeded here")
);
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountAsync.fulfilled, (state,action) => {
        state.status = "idle";
        state.products = state.products.concat(action.payload);
        // state.products += action.payload;
      })
      .addCase(fetchCountAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export const { increment } = productSlice.actions;
export const selectAllProduct = (state) => state.product.products;
export default productSlice.reducer;
