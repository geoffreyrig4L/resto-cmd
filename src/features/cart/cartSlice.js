import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload.product);
    },
    applyVoucher(state, action) {
      state.map((product) => {
        if (product.title === "Super Crémeux") {
          product.price = action.payload.price;
        }
      });
    },
    removeProduct(state, action) {
      const newListWithQte = state.reduce((acc, product) => {
        const productQte = state.filter(
          (product) => product.title === action.payload.product.title
        ).length;
        if (productQte <= action.payload.quantity) {
          return acc.push(product);
        }
        return acc;
      });

      state = { ...state, newListWithQte };
    },
  },
});

export const { addProduct, applyVoucher, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
