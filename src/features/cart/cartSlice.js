import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListWithQuantityProductPerName } from "../../app/selectors";
import * as ProductList from "../../common/models";

export const resetOrderThunk = createAsyncThunk(
  "cart/resetOrderThunk",
  async (product, thunkApi) => {
    console.log();

    thunkApi.dispatch(cartSlice.actions.removeAllProducts());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (window.confirm("Etes-vous encore là ?")) {
          resolve();
        } else {
          reject();
        }
      }, 120000);
    });
  }
);

export const addProductThunk = createAsyncThunk(
  // Le thunkApi  nous donne accès à plusieurs choses : le dispatch  et le getState  du store

  "cart/addProductThunk",
  async (product, thunkApi) => {
    thunkApi.dispatch(cartSlice.actions.addProduct(product));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = thunkApi.getState();
        const numberProductPerName = getListWithQuantityProductPerName(state);
        const numberForSpecialOffer = numberProductPerName.find(
          (item) => item.title === "Poulet Croquant"
        )?.quantity;
        if (numberForSpecialOffer && numberForSpecialOffer % 2 === 0) {
          if (
            window.confirm(
              "Voulez-vous ajouter une troisième fois ce produit à moitié prix ?"
            )
          ) {
            resolve();
          } else {
            reject();
          }
        } else {
          reject();
        }
      }, 1000);
    });
  }
);

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
    removeAllProducts(state) {
      state = [];
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
  extraReducers: function (builder) {
    builder.addCase(addProductThunk.fulfilled, (state) => {
      const specialOffer = ProductList.PouletCroquant;
      return [
        ...state,
        {
          ...specialOffer,
          price: Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100,
        },
      ];
    });
    builder.addCase(addProductThunk.rejected, (state) => {
      return [...state];
    });
    builder.addCase(resetOrderThunk.fulfilled, (state) => {
      return [...state];
    });
    builder.addCase(resetOrderThunk.rejected, () => {
      return [];
    });
  },
});

export const { addProduct, applyVoucher, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
