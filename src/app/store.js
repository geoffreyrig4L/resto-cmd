import { configureStore, createReducer } from "@reduxjs/toolkit";
import {
  updateFirstName,
  addProduct,
  applyVoucher,
  removeProduct,
} from "./actions";

let state = {
  value: null,
  list: [],
};

const reducer = createReducer(state, (builder) => {
  builder
    .addCase(updateFirstName, (state, action) => {
      state.owner = {
        ...state.owner,
        firstName: action.payload.firstName,
      };
    })
    .addCase(addProduct, (state, action) => {
      state.list.push(action.payload.product);
    })
    .addCase(applyVoucher, (state, action) => {
      state.list.map((product) => {
        if (product.title === "Super Crémeux") {
          product.price = action.payload.price;
        }
      });
    })
    .addCase(removeProduct, (state, action) => {
      const newListWithQte = state.list.reduce((acc, product) => {
        const productQte = state.list.filter(
          (product) => product.title === action.payload.product.title
        ).length;
        if (productQte <= action.payload.quantity) {
          return acc.push(product);
        }
        return acc;
      });

      state.list = { ...state.list, newListWithQte };
    });
});

export const store = configureStore({
  preloadedState: state,
  reducer,
});
