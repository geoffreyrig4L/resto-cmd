import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { updateFirstName } from "./actions";
import cartSliceReducer from "../features/cart/cartSlice";

let state = {
  value: null,
  cart: [],
};

const reducer = createReducer(state, (builder) => {
  builder.addCase(updateFirstName, (state, action) => {
    state.owner = {
      ...state.owner,
      firstName: action.payload.firstName,
    };
  });
});

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({ cart: cartSliceReducer, owner: reducer }),
});
