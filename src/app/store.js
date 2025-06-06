import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { updateFirstName } from "./actions";
import cartSliceReducer from "../features/cart/cartSlice";
import notesSliceReducer from "../features/notes/notesSlice";

let state = {
  value: null,
  cart: [],
};

const ownerReducer = createReducer(state, (builder) => {
  builder.addCase(updateFirstName, (state, action) => {
    state.firstName = action.payload.firstName;
  });
});

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    cart: cartSliceReducer,
    owner: ownerReducer,
    notes: notesSliceReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
